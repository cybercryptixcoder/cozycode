// Things the crew says. Short, lowercase, warm.
import { pick } from '../core/util.js';

export const LINES = {
  greet: ['hi!!', 'oh hi', 'hiii', 'hey friend', 'hello hello', '*waves*'],
  chat: [
    'did you see the clouds?',
    'tea later?',
    'i had the best nap',
    'the plant grew a new leaf',
    'i have an idea…',
    'what if… but smaller?',
    'the mist moved today',
    'my sprout is extra perky',
    'shh, i’m thinking',
    'i like the new shelf',
    'we should name the bird',
    'look, a dust bunny',
    'the stairs creak on step four',
    'i found a nice pebble',
  ],
  reply: ['hehe', 'ooh!', 'really?', 'same!!', 'yesss', 'mhm', 'no way', 'tell me more', 'aww', 'heh, true'],
  build: ['almost…', 'hmm hmm', 'one more bit…', 'tiny progress', 'clack clack', 'where did the screw go', 'ooh that fits'],
  research: ['interesting…', 'hm, footnotes', 'aha', 'writing that down', 'one more page'],
  visitWork: ['ooh, what’s that?', 'looking good!', 'can i hold it?', 'that bit is clever', 'nice nice nice', 'is it ticking?'],
  sleepy: ['*yawn*', 'so sleepy…', 'nap time…', 'five more minutes…'],
  wake: ['huh? oh hi', 'mm… morning?', '*stretch*'],
  petted: ['hehe that tickles', 'mmmm', 'more pls', '♥', 'so nice…'],
  held: ['wheee!', 'whoa!', 'i can see everything!', 'up we go!'],
  dropped: ['oof', 'i’m okay!', 'again!!'],
  tripped: ['oops', 'i meant to do that', 'ow… i’m fine'],
  bump: ['oops, sorry!', 'eep!', 'hehe bonk'],
  bedtime: ['nighty night', 'okay… sleepy time', 'sweet dreams'],
  morning: ['good morning!', 'rise and shine', 'is it morning?'],
  quiet: ['all quiet. we’ve got it.', 'nothing needs you. go do your thing.', 'we’re on it. go do your thing.'],
  welcome: ['you’re back!', 'oh hi!!', 'there you are', 'hello hello'],
  keep: ['yay, pinned!', 'on the board!', 'ooh, keeper', 'saving that'],
  toss: ['into the bin!', 'fair enough!', 'byeee', 'next!'],
  greenlit: ['on it!', 'let’s build it!', 'ooh, yes', 'to the bench!'],
  heard: ['got it', 'okay!', 'noted, friend', 'mhm, on it'],
};

export const line = (k) => pick(LINES[k] || LINES.reply);
