// The mail ritual: the only way anything leaves the island.
//
//   the postmaster carries the letter to the gate -> you flip the envelope
//   to read what's being sent and to whom -> drag it into the mailbox ->
//   press and hold the stamp until it thunks -> the flag goes up and the
//   bird takes it.
//
// Plus: reading incoming mail (pinned to the letter wall), and the ledger.
import { el, esc } from './cards.js';
import { bus } from '../core/events.js';
import { sound } from '../core/audio.js';
import { clock } from '../play/clock.js';

const HOLD_MS = 1000;

export class Mail {
  constructor(game, cards) {
    this.game = game;
    this.cards = cards;
    this.d = game.director;
    bus.on('mail:compose', (t, m, c) => this.compose(t, m, c));
    bus.on('mail:open', () => this.inbox());
    bus.on('mail:wall', () => this.wall());
    bus.on('ledger:open', () => this.ledger());
  }

  get s() {
    return this.game.store.data;
  }

  compose(t) {
    const g = this.game;
    // look at the gate while doing this
    const gateRect = { x0: -5.5, x1: 1, z0: 7.5, z1: 12.5 };
    g.world.rig.focusOn(gateRect, 0);
    const node = el('div', 'ritual');
    node.appendChild(el('div', 'title', `a letter to ${esc(t.draft.to)}`));
    const stage = el('div', 'stage');
    const env = el('div', 'envelope');
    const front = el('div', 'env-face env-front', `<div class="to">to: ${esc(t.draft.to)}</div><div class="seal"></div>`);
    const back = el('div', 'env-face env-back', `<div class="subj">${esc(t.draft.subject)}</div><div class="body">${esc(t.draft.body)}</div>`);
    env.append(front, back);
    stage.appendChild(env);
    const box = el('div', 'mailbox-slot', '<div class="box"><div class="slot"></div><div class="flag"></div></div>');
    stage.appendChild(box);
    node.appendChild(stage);
    const hint = el('div', 'hint', 'tap to read it · drag it into the mailbox');
    node.appendChild(hint);
    const stamp = el('button', 'stamp hidden', '<span class="ring"></span><span class="label">hold to stamp</span>');
    node.appendChild(stamp);

    // flip to read
    let read = false;
    env.addEventListener('click', () => {
      if (env.classList.contains('posted')) return;
      env.classList.toggle('flipped');
      read = true;
      sound.play('page');
      this.d.taste('readDraft', { thread: t.id });
    });
    // drag into the mailbox
    let sx = 0;
    let sy = 0;
    let dragging = false;
    let moved = false;
    env.addEventListener('pointerdown', (e) => {
      if (env.classList.contains('posted')) return;
      dragging = true;
      moved = false;
      sx = e.clientX;
      sy = e.clientY;
      env.setPointerCapture(e.pointerId);
    });
    env.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const dx = e.clientX - sx;
      const dy = e.clientY - sy;
      if (Math.hypot(dx, dy) > 6) moved = true;
      env.style.transform = `translate(${dx}px, ${dy}px) rotate(${dx * 0.04}deg)${env.classList.contains('flipped') ? ' rotateY(180deg)' : ''}`;
      const br = box.getBoundingClientRect();
      box.classList.toggle('near', e.clientX > br.left - 20 && e.clientX < br.right + 20 && e.clientY > br.top - 30 && e.clientY < br.bottom + 20);
    });
    const end = (e) => {
      if (!dragging) return;
      dragging = false;
      const br = box.getBoundingClientRect();
      const inside = e.clientX > br.left - 20 && e.clientX < br.right + 20 && e.clientY > br.top - 30 && e.clientY < br.bottom + 20;
      box.classList.remove('near');
      if (moved && inside) {
        env.classList.remove('flipped');
        env.classList.add('posted');
        env.style.transform = '';
        sound.play('mail');
        g.haptic('tick');
        hint.textContent = read ? 'now stamp it (press and hold)' : 'press and hold the stamp';
        stamp.classList.remove('hidden');
      } else if (moved) env.style.transform = env.classList.contains('flipped') ? 'rotateY(180deg)' : '';
      if (moved) e.preventDefault();
    };
    env.addEventListener('pointerup', end);
    env.addEventListener('pointercancel', end);
    env.addEventListener(
      'click',
      (e) => {
        if (moved) e.stopImmediatePropagation();
      },
      true
    );

    // press and hold the stamp (~1 s) until it thunks
    let holdStart = 0;
    let raf = 0;
    const ring = stamp.querySelector('.ring');
    const tick = () => {
      const k = Math.min(1, (performance.now() - holdStart) / HOLD_MS);
      ring.style.setProperty('--k', k);
      stamp.style.transform = `scale(${1 - k * 0.12})`;
      if (k >= 1) return thunk();
      raf = requestAnimationFrame(tick);
    };
    const thunk = () => {
      cancelAnimationFrame(raf);
      holdStart = 0;
      stamp.classList.add('thunk');
      stamp.style.transform = '';
      sound.play('stamp');
      g.haptic('thump');
      box.classList.add('flag-up');
      hint.textContent = 'off it goes!';
      this.d.send(t.id);
      setTimeout(() => {
        this.cards.close(true);
        g.world.focus = null;
        g.world.rig.clearFocus();
      }, 1300);
    };
    stamp.addEventListener('pointerdown', (e) => {
      if (stamp.classList.contains('thunk')) return;
      holdStart = performance.now();
      stamp.setPointerCapture(e.pointerId);
      raf = requestAnimationFrame(tick);
    });
    const release = () => {
      if (!holdStart) return;
      cancelAnimationFrame(raf);
      holdStart = 0;
      ring.style.setProperty('--k', 0);
      stamp.style.transform = '';
    };
    stamp.addEventListener('pointerup', release);
    stamp.addEventListener('pointercancel', release);

    this.cards.show(node, {
      cls: 'mail',
      onClose: () => {
        g.world.focus = null;
        g.world.rig.clearFocus();
      },
    });
  }

  inbox() {
    const m = this.s.mail;
    const list = m.inbox.slice();
    if (!list.length) return this.wall();
    const node = el('div', 'sheet letters');
    const show = (i) => {
      node.innerHTML = '';
      const x = list[i];
      node.appendChild(el('div', 'small', `from ${esc(x.from)}`));
      node.appendChild(el('div', 'paper', esc(x.body)));
      const b = el('button', 'build', i < list.length - 1 ? 'pin it up · next' : 'pin it on the wall');
      b.addEventListener('click', () => {
        this.d.readMail(x.id);
        sound.play('pin');
        if (i < list.length - 1) show(i + 1);
        else {
          this.cards.close(true);
          // the bird's done its job
          setTimeout(() => this.game.arrivals.bird.leave(), 600);
        }
      });
      node.appendChild(b);
    };
    show(0);
    sound.play('page');
    this.cards.show(node, { cls: 'small' });
  }

  wall() {
    const m = this.s.mail;
    const sent = this.d.threads((t) => t.kind === 'letter' && (t.status === 'sent' || t.status === 'replied'));
    const node = el('div', 'sheet letters');
    node.appendChild(el('div', 'title', 'the letter wall'));
    const list = el('div', 'list');
    for (const x of m.wall.slice().reverse()) list.appendChild(el('div', 'paper small-paper', `<b>from ${esc(x.from)}</b><br>${esc(x.body)}`));
    for (const t of sent.slice().reverse()) list.appendChild(el('div', 'paper small-paper sent', `<b>to ${esc(t.draft.to)}</b><br>${esc(t.draft.subject)}`));
    if (!m.wall.length && !sent.length) list.appendChild(el('div', 'small', 'nothing yet. letters you send and get end up here.'));
    node.appendChild(list);
    this.cards.show(node, { cls: 'small' });
  }

  /** The big paper ledger under the island: every thread, its status and log. */
  ledger() {
    const node = el('div', 'sheet ledger');
    node.appendChild(el('div', 'title', 'the ledger'));
    const list = el('div', 'list');
    const ts = this.d.threads().slice().reverse();
    for (const t of ts) {
      const row = el('details', 'lrow');
      const when = new Date(t.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      row.appendChild(el('summary', '', `<span>${esc(t.title || t.line)}</span><em>${esc(t.status)}</em><i>${when}</i>`));
      const log = el('div', 'log');
      for (const l of (t.log || []).slice().reverse()) log.appendChild(el('div', '', `${new Date(l.at).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })} — ${esc(l.text)}`));
      row.appendChild(log);
      list.appendChild(row);
    }
    if (!ts.length) list.appendChild(el('div', 'small', 'empty for now.'));
    node.appendChild(list);
    this.d.taste('ledger', {});
    this.cards.show(node, { cls: 'ledger-wrap' });
    void clock;
  }
}
