(()=>{var uf=0,eu=1,df=2;var Bs=1,ff=2,Nr=3,Bn=0,gn=1,ke=2,Qe=0,Ts=1,zi=2,nu=3,iu=4,Ul=5;var ii=100,pf=101,mf=102,gf=103,xf=104,Hs=200,vf=201,yf=202,_f=203,su=204,ru=205,Wo=206,bf=207,Xo=208,Mf=209,Sf=210,wf=211,Tf=212,Ef=213,Rf=214,el=0,nl=1,il=2,br=3,sl=4,rl=5,Mr=6,ol=7,kl=0,Af=1,Cf=2,yi=0,qo=1,Yo=2,$o=3,Zo=4,Jo=5,Gs=6,Vs=7;var ou=300,Es=301,Ws=302,Fl=303,zl=304,Ko=306,ti=1e3,qn=1001,al=1002,je=1003,Pf=1004;var jo=1005;var mn=1006,Ol=1007;var Oi=1008;var Sn=1009,au=1010,lu=1011,Ur=1012,Bl=1013,_i=1014,si=1015,Je=1016,Hl=1017,Gl=1018,Rs=1020,cu=35902,hu=35899,uu=1021,du=1022,Hn=1023,Di=1026,Bi=1027,Vl=1028,Wl=1029,As=1030,Xl=1031;var ql=1033,Qo=33776,ta=33777,ea=33778,na=33779,Yl=35840,$l=35841,Zl=35842,Jl=35843,Kl=36196,jl=37492,Ql=37496,tc=37488,ec=37489,ia=37490,nc=37491,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,lc=37813,cc=37814,hc=37815,uc=37816,dc=37817,fc=37818,pc=37819,mc=37820,gc=37821,xc=36492,vc=36494,yc=36495,_c=36283,bc=36284,sa=36285,Mc=36286;var mo=2300,ll=2301,Qa=2302,Vh=2303,Wh=2400,Xh=2401,qh=2402;var If=3200;var kr=0,Df=1,bi="",Xe="srgb",go="srgb-linear",xo="linear",_e="srgb";var tl=7680;var Lf=519,Nf=512,Uf=513,kf=514,Sc=515,Ff=516,zf=517,wc=518,Of=519,fu=35044;var pu="300 es",fi=2e3,Sr=2001;function um(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function dm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bf(){let i=vo("canvas");return i.style.display="block",i}var Id={},wr=null;function yo(...i){let t="THREE."+i.shift();wr?wr("log",t,...i):console.log(t,...i)}function Hf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $t(...i){i=Hf(i);let t="THREE."+i.shift();if(wr)wr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Yt(...i){i=Hf(i);let t="THREE."+i.shift();if(wr)wr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Us(...i){let t=i.join(" ");t in Id||(Id[t]=!0,$t(...i))}function Gf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Vf={[el]:nl,[il]:Mr,[sl]:ol,[br]:rl,[nl]:el,[Mr]:il,[ol]:sl,[rl]:br},Li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gh=Math.PI/180,cl=180/Math.PI;function ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function fm(i,t){return(i%t+t)%t}function xh(i,t,e){return(1-e)*i+e*t}function Pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var _u=class _u{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_u.prototype.isVector2=!0;var Y=_u,Ni=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let b=Math.acos(m),w=Math.sin(b);g=Math.sin(g*b)/w,a=Math.sin(a*b)/w,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},bu=class bu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vh.copy(this).projectOnVector(t),this.sub(vh)}reflect(t){return this.sub(vh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bu.prototype.isVector3=!0;var R=bu,vh=new R,Dd=new Ni,Mu=class Mu{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],b=s[1],w=s[4],v=s[7],T=s[2],M=s[5],I=s[8];return r[0]=o*x+a*b+l*T,r[3]=o*m+a*w+l*M,r[6]=o*g+a*v+l*I,r[1]=c*x+h*b+d*T,r[4]=c*m+h*w+d*M,r[7]=c*g+h*v+d*I,r[2]=u*x+f*b+p*T,r[5]=u*m+f*w+p*M,r[8]=u*g+f*v+p*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yh.makeScale(t,e)),this}rotate(t){return Us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yh.makeRotation(-t)),this}translate(t,e){return Us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mu.prototype.isMatrix3=!0;var jt=Mu,yh=new jt,Ld=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nd=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pm(){let i={enabled:!0,workingColorSpace:go,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=_r(s.r),s.g=_r(s.g),s.b=_r(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?xo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[go]:{primaries:t,whitePoint:n,transfer:xo,toXYZ:Ld,fromXYZ:Nd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:Ld,fromXYZ:Nd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),i}var ce=pm();function is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var nr,hl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{nr===void 0&&(nr=vo("canvas")),nr.width=t.width,nr.height=t.height;let s=nr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=nr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=vo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=is(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(is(e[n]/255)*255):e[n]=is(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mm=0,Tr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_h(s[o].image)):r.push(_h(s[o]))}else r=_h(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function _h(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}var gm=0,bh=new R,Pn=class i extends Li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=qn,s=qn,r=mn,o=Oi,a=Hn,l=Sn,c=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=ns(),this.name="",this.source=new Tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ou)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ti:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ti:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=ou;Pn.DEFAULT_ANISOTROPY=1;var Su=class Su{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(f+1)/2,T=(g+1)/2,M=(h+u)/4,I=(d+x)/4,y=(p+m)/4;return w>v&&w>T?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=M/n,r=I/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=y/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=I/r,s=y/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(d-x)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Su.prototype.isVector4=!0;var Ce=Su,ul=class extends Li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Pn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Tr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},He=class extends ul{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_o=class extends Pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var dl=class extends Pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Nl=class Nl{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,p,x,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ir.setFromMatrixColumn(t,0).length(),r=1/ir.setFromMatrixColumn(t,1).length(),o=1/ir.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xm,t,vm)}lookAt(t,e,n){let s=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),ms.crossVectors(n,Wn),ms.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),ms.crossVectors(n,Wn)),ms.normalize(),Aa.crossVectors(Wn,ms),s[0]=ms.x,s[4]=Aa.x,s[8]=Wn.x,s[1]=ms.y,s[5]=Aa.y,s[9]=Wn.y,s[2]=ms.z,s[6]=Aa.z,s[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],b=n[3],w=n[7],v=n[11],T=n[15],M=s[0],I=s[4],y=s[8],E=s[12],A=s[1],P=s[5],D=s[9],z=s[13],L=s[2],O=s[6],q=s[10],X=s[14],st=s[3],H=s[7],tt=s[11],et=s[15];return r[0]=o*M+a*A+l*L+c*st,r[4]=o*I+a*P+l*O+c*H,r[8]=o*y+a*D+l*q+c*tt,r[12]=o*E+a*z+l*X+c*et,r[1]=h*M+d*A+u*L+f*st,r[5]=h*I+d*P+u*O+f*H,r[9]=h*y+d*D+u*q+f*tt,r[13]=h*E+d*z+u*X+f*et,r[2]=p*M+x*A+m*L+g*st,r[6]=p*I+x*P+m*O+g*H,r[10]=p*y+x*D+m*q+g*tt,r[14]=p*E+x*z+m*X+g*et,r[3]=b*M+w*A+v*L+T*st,r[7]=b*I+w*P+v*O+T*H,r[11]=b*y+w*D+v*q+T*tt,r[15]=b*E+w*z+v*X+T*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],b=l*f-c*u,w=a*f-c*d,v=a*u-l*d,T=o*f-c*h,M=o*u-l*h,I=o*d-a*h;return e*(x*b-m*w+g*v)-n*(p*b-m*T+g*M)+s*(p*w-x*T+g*I)-r*(p*v-x*M+m*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],b=e*a-n*o,w=e*l-s*o,v=e*c-r*o,T=n*l-s*a,M=n*c-r*a,I=s*c-r*l,y=h*x-d*p,E=h*m-u*p,A=h*g-f*p,P=d*m-u*x,D=d*g-f*x,z=u*g-f*m,L=b*z-w*D+v*P+T*A-M*E+I*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/L;return t[0]=(a*z-l*D+c*P)*O,t[1]=(s*D-n*z-r*P)*O,t[2]=(x*I-m*M+g*T)*O,t[3]=(u*M-d*I-f*T)*O,t[4]=(l*A-o*z-c*E)*O,t[5]=(e*z-s*A+r*E)*O,t[6]=(m*v-p*I-g*w)*O,t[7]=(h*I-u*v+f*w)*O,t[8]=(o*D-a*A+c*y)*O,t[9]=(n*A-e*D-r*y)*O,t[10]=(p*M-x*v+g*b)*O,t[11]=(d*v-h*M-f*b)*O,t[12]=(a*E-o*P-l*y)*O,t[13]=(e*P-n*E+s*y)*O,t[14]=(x*w-p*T-m*b)*O,t[15]=(h*T-d*w+u*b)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,x=o*h,m=o*d,g=a*d,b=l*c,w=l*h,v=l*d,T=n.x,M=n.y,I=n.z;return s[0]=(1-(x+g))*T,s[1]=(f+v)*T,s[2]=(p-w)*T,s[3]=0,s[4]=(f-v)*M,s[5]=(1-(u+g))*M,s[6]=(m+b)*M,s[7]=0,s[8]=(p+w)*I,s[9]=(m-b)*I,s[10]=(1-(u+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ir.set(s[0],s[1],s[2]).length(),a=ir.set(s[4],s[5],s[6]).length(),l=ir.set(s[8],s[9],s[10]).length();r<0&&(o=-o),hi.copy(this);let c=1/o,h=1/a,d=1/l;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=d,hi.elements[9]*=d,hi.elements[10]*=d,e.setFromRotationMatrix(hi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=fi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===fi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Sr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=fi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===fi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Sr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Nl.prototype.isMatrix4=!0;var me=Nl,ir=new R,hi=new me,xm=new R(0,0,0),vm=new R(1,1,1),ms=new R,Aa=new R,Wn=new R,Ud=new me,kd=new Ni,Ui=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ud.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ud,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kd.setFromEuler(this),this.setFromQuaternion(kd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ym=0,Fd=new R,sr=new Ni,Ji=new me,Ca=new R,no=new R,_m=new R,bm=new Ni,zd=new R(1,0,0),Od=new R(0,1,0),Bd=new R(0,0,1),Hd={type:"added"},Mm={type:"removed"},rr={type:"childadded",child:null},Mh={type:"childremoved",child:null},on=class i extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new Ui,n=new Ni,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new jt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return sr.setFromAxisAngle(t,e),this.quaternion.multiply(sr),this}rotateOnWorldAxis(t,e){return sr.setFromAxisAngle(t,e),this.quaternion.premultiply(sr),this}rotateX(t){return this.rotateOnAxis(zd,t)}rotateY(t){return this.rotateOnAxis(Od,t)}rotateZ(t){return this.rotateOnAxis(Bd,t)}translateOnAxis(t,e){return Fd.copy(t).applyQuaternion(this.quaternion),this.position.add(Fd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zd,t)}translateY(t){return this.translateOnAxis(Od,t)}translateZ(t){return this.translateOnAxis(Bd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ca.copy(t):Ca.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(no,Ca,this.up):Ji.lookAt(Ca,no,this.up),this.quaternion.setFromRotationMatrix(Ji),s&&(Ji.extractRotation(s.matrixWorld),sr.setFromRotationMatrix(Ji),this.quaternion.premultiply(sr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hd),rr.child=t,this.dispatchEvent(rr),rr.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mm),Mh.child=t,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hd),rr.child=t,this.dispatchEvent(rr),rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,t,_m),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,bm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};on.DEFAULT_UP=new R(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var at=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sm={type:"move"},Rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new at;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function Sh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=fm(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Sh(o,r,t+1/3),this.g=Sh(o,r,t),this.b=Sh(o,r,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let n=Wf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}copyLinearToSRGB(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return ce.workingToColorSpace(bn.copy(this),t),Math.round(he(bn.r*255,0,255))*65536+Math.round(he(bn.g*255,0,255))*256+Math.round(he(bn.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(bn.copy(this),e);let n=bn.r,s=bn.g,r=bn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=Xe){ce.workingToColorSpace(bn.copy(this),t);let e=bn.r,n=bn.g,s=bn.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gs),this.setHSL(gs.h+t,gs.s+e,gs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gs),t.getHSL(Pa);let n=xh(gs.h,Pa.h,e),s=xh(gs.s,Pa.s,e),r=xh(gs.l,Pa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new pt;pt.NAMES=Wf;var ks=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ui=new R,Ki=new R,wh=new R,ji=new R,or=new R,ar=new R,Gd=new R,Th=new R,Eh=new R,Rh=new R,Ah=new Ce,Ch=new Ce,Ph=new Ce,es=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ui.subVectors(t,e),s.cross(ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ui.subVectors(s,e),Ki.subVectors(n,e),wh.subVectors(t,e);let o=ui.dot(ui),a=ui.dot(Ki),l=ui.dot(wh),c=Ki.dot(Ki),h=Ki.dot(wh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ji.x),l.addScaledVector(o,ji.y),l.addScaledVector(a,ji.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ah.setScalar(0),Ch.setScalar(0),Ph.setScalar(0),Ah.fromBufferAttribute(t,e),Ch.fromBufferAttribute(t,n),Ph.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ah,r.x),o.addScaledVector(Ch,r.y),o.addScaledVector(Ph,r.z),o}static isFrontFacing(t,e,n,s){return ui.subVectors(n,e),Ki.subVectors(t,e),ui.cross(Ki).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),ui.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;or.subVectors(s,n),ar.subVectors(r,n),Th.subVectors(t,n);let l=or.dot(Th),c=ar.dot(Th);if(l<=0&&c<=0)return e.copy(n);Eh.subVectors(t,s);let h=or.dot(Eh),d=ar.dot(Eh);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(or,o);Rh.subVectors(t,r);let f=or.dot(Rh),p=ar.dot(Rh);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(ar,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Gd.subVectors(r,s),a=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(Gd,a);let g=1/(m+x+u);return o=x*g,a=u*g,e.copy(n).addScaledVector(or,o).addScaledVector(ar,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ki=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,di):di.fromBufferAttribute(r,o),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(t.matrixWorld),this.union(Ia)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(io),Da.subVectors(this.max,io),lr.subVectors(t.a,io),cr.subVectors(t.b,io),hr.subVectors(t.c,io),xs.subVectors(cr,lr),vs.subVectors(hr,cr),Is.subVectors(lr,hr);let e=[0,-xs.z,xs.y,0,-vs.z,vs.y,0,-Is.z,Is.y,xs.z,0,-xs.x,vs.z,0,-vs.x,Is.z,0,-Is.x,-xs.y,xs.x,0,-vs.y,vs.x,0,-Is.y,Is.x,0];return!Ih(e,lr,cr,hr,Da)||(e=[1,0,0,0,1,0,0,0,1],!Ih(e,lr,cr,hr,Da))?!1:(La.crossVectors(xs,vs),e=[La.x,La.y,La.z],Ih(e,lr,cr,hr,Da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qi=[new R,new R,new R,new R,new R,new R,new R,new R],di=new R,Ia=new ki,lr=new R,cr=new R,hr=new R,xs=new R,vs=new R,Is=new R,io=new R,Da=new R,La=new R,Ds=new R;function Ih(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ds.fromArray(i,r);let a=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),l=t.dot(Ds),c=e.dot(Ds),h=n.dot(Ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var nn=new R,Na=new Y,wm=0,Fn=class extends Li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fu,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Na.fromBufferAttribute(this,e),Na.applyMatrix3(t),this.setXY(e,Na.x,Na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var bo=class extends Fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Mo=class extends Fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends Fn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tm=new ki,so=new R,Dh=new R,_s=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;so.subVectors(t,this.center);let e=so.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(so,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(so.copy(t.center).add(Dh)),this.expandByPoint(so.copy(t.center).sub(Dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Em=0,Qn=new me,Lh=new on,ur=new R,Xn=new ki,ro=new ki,hn=new R,Ge=class i extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(um(t)?Mo:bo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,n){return Qn.makeTranslation(t,e,n),this.applyMatrix4(Qn),this}scale(t,e,n){return Qn.makeScale(t,e,n),this.applyMatrix4(Qn),this}lookAt(t){return Lh.lookAt(t),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Xn.min,ro.min),Xn.expandByPoint(hn),hn.addVectors(Xn.max,ro.max),Xn.expandByPoint(hn)):(Xn.expandByPoint(ro.min),Xn.expandByPoint(ro.max))}Xn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(hn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(ur.fromBufferAttribute(t,c),hn.add(ur)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new R,l[y]=new R;let c=new R,h=new R,d=new R,u=new Y,f=new Y,p=new Y,x=new R,m=new R;function g(y,E,A){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,A),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,A),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),a[y].add(x),a[E].add(x),a[A].add(x),l[y].add(m),l[E].add(m),l[A].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let y=0,E=b.length;y<E;++y){let A=b[y],P=A.start,D=A.count;for(let z=P,L=P+D;z<L;z+=3)g(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let w=new R,v=new R,T=new R,M=new R;function I(y){T.fromBufferAttribute(s,y),M.copy(T);let E=a[y];w.copy(E),w.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(M,E);let P=v.dot(l[y])<0?-1:1;o.setXYZW(y,w.x,w.y,w.z,P)}for(let y=0,E=b.length;y<E;++y){let A=b[y],P=A.start,D=A.count;for(let z=P,L=P+D;z<L;z+=3)I(t.getX(z+0)),I(t.getX(z+1)),I(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new Fn(u,h,d)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},fl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fu,this.updateRanges=[],this.version=0,this.uuid=ns()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},An=new R,So=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)An.fromBufferAttribute(this,e),An.applyMatrix4(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)An.fromBufferAttribute(this,e),An.applyNormalMatrix(t),this.setXYZ(e,An.x,An.y,An.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)An.fromBufferAttribute(this,e),An.transformDirection(t),this.setXYZ(e,An.x,An.y,An.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){yo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){yo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nh=new R,Rm=new R,Am=new jt,Cn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Nh.subVectors(n,e).cross(Rm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Nh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Am.getNormalMatrix(t),s=this.coplanarPoint(Nh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Cm=0,pi=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Ts,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=su,this.blendDst=ru,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tl,this.stencilZFail=tl,this.stencilZPass=tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Cn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Y().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Y().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Yn=class extends pi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},dr,oo=new R,fr=new R,pr=new R,mr=new Y,ao=new Y,Xf=new me,Ua=new R,lo=new R,ka=new R,Vd=new Y,Uh=new Y,Wd=new Y,ei=class extends on{constructor(t=new Yn){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new Ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fl(e,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new So(n,3,0,!1)),dr.setAttribute("uv",new So(n,2,3,!1))}this.geometry=dr,this.material=t,this.center=new Y(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),Xf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-pr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Fa(Ua.set(-.5,-.5,0),pr,o,fr,s,r),Fa(lo.set(.5,-.5,0),pr,o,fr,s,r),Fa(ka.set(.5,.5,0),pr,o,fr,s,r),Vd.set(0,0),Uh.set(1,0),Wd.set(1,1);let a=t.ray.intersectTriangle(Ua,lo,ka,!1,oo);if(a===null&&(Fa(lo.set(-.5,.5,0),pr,o,fr,s,r),Uh.set(0,1),a=t.ray.intersectTriangle(Ua,ka,lo,!1,oo),a===null))return;let l=t.ray.origin.distanceTo(oo);l<t.near||l>t.far||e.push({distance:l,point:oo.clone(),uv:es.getInterpolation(oo,Ua,lo,ka,Vd,Uh,Wd,new Y),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Fa(i,t,e,n,s,r){mr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ao.x=r*mr.x-s*mr.y,ao.y=s*mr.x+r*mr.y):ao.copy(mr),i.copy(t),i.x+=ao.x,i.y+=ao.y,i.applyMatrix4(Xf)}var ts=new R,kh=new R,za=new R,Oa=new R,wo=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ts)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ts.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ts.copy(this.origin).addScaledVector(this.direction,e),ts.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){kh.copy(t).add(e).multiplyScalar(.5),za.copy(e).sub(t).normalize(),Oa.copy(this.origin).sub(kh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(za),a=Oa.dot(this.direction),l=-Oa.dot(za),c=Oa.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(kh).addScaledVector(za,u),f}intersectSphere(t,e){if(t.radius<0)return null;ts.subVectors(t.center,this.origin);let n=ts.dot(this.direction),s=ts.dot(ts)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ts)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,b=n.y-o.y,w=n.z-o.z,v=Math.abs(l),T=Math.abs(c),M=Math.abs(h),I,y,E,A,P,D,z,L,O,q,X,st;if(v>=T&&v>=M?(E=l,D=d,O=p,st=g,l>=0?(I=c,y=h,A=u,P=f,z=x,L=m,q=b,X=w):(I=h,y=c,A=f,P=u,z=m,L=x,q=w,X=b)):T>=M?(E=c,D=u,O=x,st=b,c>=0?(I=h,y=l,A=f,P=d,z=m,L=p,q=w,X=g):(I=l,y=h,A=d,P=f,z=p,L=m,q=g,X=w)):(E=h,D=f,O=m,st=w,h>=0?(I=l,y=c,A=d,P=u,z=p,L=x,q=g,X=b):(I=c,y=l,A=u,P=d,z=x,L=p,q=b,X=g)),E===0)return null;let H=I/E,tt=y/E,et=1/E,At=A-H*D,It=P-tt*D,fe=z-H*O,te=L-tt*O,le=q-H*st,Z=X-tt*st,nt=le*te-Z*fe,xt=At*Z-It*le,Bt=fe*It-te*At;if(s){if(nt<0||xt<0||Bt<0)return null}else if((nt<0||xt<0||Bt<0)&&(nt>0||xt>0||Bt>0))return null;let Ct=nt+xt+Bt;if(Ct===0)return null;let Xt=et*(nt*D+xt*O+Bt*st);return(Ct>0?Xt<0:Xt>0)?null:this.at(Xt/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},In=class extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xd=new me,Ls=new wo,Ba=new _s,qd=new R,Ha=new R,Ga=new R,Va=new R,Fh=new R,Wa=new R,Yd=new R,Xa=new R,mt=class extends on{constructor(t=new Ge,e=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Fh.fromBufferAttribute(d,t),o?Wa.addScaledVector(Fh,h):Wa.addScaledVector(Fh.sub(e),h))}e.add(Wa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(r),Ls.copy(t.ray).recast(t.near),!(Ba.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Ba,qd)===null||Ls.origin.distanceToSquared(qd)>(t.far-t.near)**2))&&(Xd.copy(r).invert(),Ls.copy(t.ray).applyMatrix4(Xd),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ls)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,T=w;v<T;v+=3){let M=a.getX(v),I=a.getX(v+1),y=a.getX(v+2);s=qa(this,g,t,n,c,h,d,M,I,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let b=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=qa(this,o,t,n,c,h,d,b,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,T=w;v<T;v+=3){let M=v,I=v+1,y=v+2;s=qa(this,g,t,n,c,h,d,M,I,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let b=m,w=m+1,v=m+2;s=qa(this,o,t,n,c,h,d,b,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Pm(i,t,e,n,s,r,o,a){let l;if(t.side===gn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Bn,a),l===null)return null;Xa.copy(a),Xa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Xa);return c<e.near||c>e.far?null:{distance:c,point:Xa.clone(),object:i}}function qa(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ha),i.getVertexPosition(l,Ga),i.getVertexPosition(c,Va);let h=Pm(i,t,e,n,Ha,Ga,Va,Yd);if(h){let d=new R;es.getBarycoord(Yd,Ha,Ga,Va,d),s&&(h.uv=es.getInterpolatedAttribute(s,a,l,c,d,new Y)),r&&(h.uv1=es.getInterpolatedAttribute(r,a,l,c,d,new Y)),o&&(h.normal=es.getInterpolatedAttribute(o,a,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};es.getNormal(Ha,Ga,Va,u.normal),h.face=u,h.barycoord=d}return h}var ss=class extends Pn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=je,h=je,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var To=class extends Fn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},gr=new me,$d=new me,Ya=[],Zd=new ki,Im=new me,co=new mt,ho=new _s,Eo=class extends mt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new To(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Im)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gr),Zd.copy(t.boundingBox).applyMatrix4(gr),this.boundingBox.union(Zd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _s),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gr),ho.copy(t.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(ho)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(n),t.ray.intersectsSphere(ho)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gr),$d.multiplyMatrices(n,gr),co.matrixWorld=$d,co.raycast(t,Ya);for(let o=0,a=Ya.length;o<a;o++){let l=Ya[o];l.instanceId=r,l.object=this,e.push(l)}Ya.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new To(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ss(new Float32Array(s*this.count),s,this.count,Vl,si));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ns=new _s,Dm=new Y(.5,.5),$a=new R,Ar=class{constructor(t=new Cn,e=new Cn,n=new Cn,s=new Cn,r=new Cn,o=new Cn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],b=r[12],w=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-o,f-h,g-p,T-b).normalize(),s[1].setComponents(c+o,f+h,g+p,T+b).normalize(),s[2].setComponents(c+a,f+d,g+x,T+w).normalize(),s[3].setComponents(c-a,f-d,g-x,T-w).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,f-u,g-m,T-v).normalize();else if(s[4].setComponents(c-l,f-u,g-m,T-v).normalize(),e===fi)s[5].setComponents(c+l,f+u,g+m,T+v).normalize();else if(e===Sr)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(t){Ns.center.set(0,0,0);let e=Dm.distanceTo(t.center);return Ns.radius=.7071067811865476+e,Ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if($a.x=s.normal.x>0?t.max.x:t.min.x,$a.y=s.normal.y>0?t.max.y:t.min.y,$a.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($a)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ro=class extends Pn{constructor(t=[],e=Es,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},mi=class extends Pn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fi=class extends Pn{constructor(t,e,n=_i,s,r,o,a=je,l=je,c,h=Di,d=1){if(h!==Di&&h!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},pl=class extends Fi{constructor(t,e=_i,n=Es,s,r,o=je,a=je,l,c=Di){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ao=class extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ie=class i extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(d,2));function p(x,m,g,b,w,v,T,M,I,y,E){let A=v/I,P=T/y,D=v/2,z=T/2,L=M/2,O=I+1,q=y+1,X=0,st=0,H=new R;for(let tt=0;tt<q;tt++){let et=tt*P-z;for(let At=0;At<O;At++){let It=At*A-D;H[x]=It*b,H[m]=et*w,H[g]=L,c.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[g]=M>0?1:-1,h.push(H.x,H.y,H.z),d.push(At/I),d.push(1-tt/y),X+=1}}for(let tt=0;tt<y;tt++)for(let et=0;et<I;et++){let At=u+et+O*tt,It=u+et+O*(tt+1),fe=u+(et+1)+O*(tt+1),te=u+(et+1)+O*tt;l.push(At,It,te),l.push(It,fe,te),st+=6}a.addGroup(f,st,E),f+=st,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Fs=class i extends Ge{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,x=s+1,m=new R,g=new R;for(let b=0;b<=p;b++){let w=0,v=0,T=0,M=0;if(b<=n){let E=b/n,A=E*Math.PI/2;v=-h-t*Math.cos(A),T=t*Math.sin(A),M=-t*Math.cos(A),w=E*d}else if(b<=n+r){let E=(b-n)/r;v=-h+E*e,T=t,M=0,w=d+E*u}else{let E=(b-n-r)/n,A=E*Math.PI/2;v=h+t*Math.sin(A),T=t*Math.cos(A),M=t*Math.sin(A),w=d+u+E*d}let I=Math.max(0,Math.min(1,w/f)),y=0;b===0?y=.5/s:b===p&&(y=-.5/s);for(let E=0;E<=s;E++){let A=E/s,P=A*Math.PI*2,D=Math.sin(P),z=Math.cos(P);g.x=-T*z,g.y=v,g.z=T*D,a.push(g.x,g.y,g.z),m.set(-T*z,M,T*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+y,I)}if(b>0){let E=(b-1)*x;for(let A=0;A<s;A++){let P=E+A,D=E+A+1,z=b*x+A,L=b*x+A+1;o.push(P,D,z),o.push(D,L,z)}}}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ni=class i extends Ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new Y;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Mn=class i extends Ge{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],m=n/2,g=0;b(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Kt(d,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(f,2));function b(){let v=new R,T=new R,M=0,I=(e-t)/n;for(let y=0;y<=r;y++){let E=[],A=y/r,P=A*(e-t)+t;for(let D=0;D<=s;D++){let z=D/s,L=z*l+a,O=Math.sin(L),q=Math.cos(L);T.x=P*O,T.y=-A*n+m,T.z=P*q,d.push(T.x,T.y,T.z),v.set(O,I,q).normalize(),u.push(v.x,v.y,v.z),f.push(z,1-A),E.push(p++)}x.push(E)}for(let y=0;y<s;y++)for(let E=0;E<r;E++){let A=x[E][y],P=x[E+1][y],D=x[E+1][y+1],z=x[E][y+1];(t>0||E!==0)&&(h.push(A,P,z),M+=3),(e>0||E!==r-1)&&(h.push(P,D,z),M+=3)}c.addGroup(g,M,0),g+=M}function w(v){let T=p,M=new Y,I=new R,y=0,E=v===!0?t:e,A=v===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),p++;let P=p;for(let D=0;D<=s;D++){let L=D/s*l+a,O=Math.cos(L),q=Math.sin(L);I.x=E*q,I.y=m*A,I.z=E*O,d.push(I.x,I.y,I.z),u.push(0,A,0),M.x=O*.5+.5,M.y=q*.5*A+.5,f.push(M.x,M.y),p++}for(let D=0;D<s;D++){let z=T+D,L=P+D;v===!0?h.push(L,L+1,z):h.push(L+1,L,z),y+=3}c.addGroup(g,y,v===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var $n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Y:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,s=[],r=[],o=[],a=new R,l=new me;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(he(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(he(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cr=class extends $n{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Y){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ml=class extends Cr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function mu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Jd=new R,Kd=new R,zh=new mu,Oh=new mu,Bh=new mu,zn=class extends $n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Kd.subVectors(s[0],s[1]).add(s[0]),c=Kd);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),zh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),Oh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),Bh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(zh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Oh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Bh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(zh.calc(l),Oh.calc(l),Bh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function jd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Lm(i,t){let e=1-i;return e*e*t}function Nm(i,t){return 2*(1-i)*i*t}function Um(i,t){return i*i*t}function fo(i,t,e,n){return Lm(i,t)+Nm(i,e)+Um(i,n)}function km(i,t){let e=1-i;return e*e*e*t}function Fm(i,t){let e=1-i;return 3*e*e*i*t}function zm(i,t){return 3*(1-i)*i*i*t}function Om(i,t){return i*i*i*t}function po(i,t,e,n,s){return km(i,t)+Fm(i,e)+zm(i,n)+Om(i,s)}var Co=class extends $n{constructor(t=new Y,e=new Y,n=new Y,s=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Y){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(po(t,s.x,r.x,o.x,a.x),po(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},gl=class extends $n{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(po(t,s.x,r.x,o.x,a.x),po(t,s.y,r.y,o.y,a.y),po(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Po=class extends $n{constructor(t=new Y,e=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Y){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xl=class extends $n{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends $n{constructor(t=new Y,e=new Y,n=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fo(t,s.x,r.x,o.x),fo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends $n{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fo(t,s.x,r.x,o.x),fo(t,s.y,r.y,o.y),fo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rs=class extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Y){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(jd(a,l.x,c.x,h.x,d.x),jd(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Y().fromArray(s))}return this}},vl=Object.freeze({__proto__:null,ArcCurve:ml,CatmullRomCurve3:zn,CubicBezierCurve:Co,CubicBezierCurve3:gl,EllipseCurve:Cr,LineCurve:Po,LineCurve3:xl,QuadraticBezierCurve:Io,QuadraticBezierCurve3:Do,SplineCurve:rs}),yl=class extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new vl[s.type]().fromJSON(s))}return this}},zs=class extends yl{constructor(t){super(),this.type="Path",this.currentPoint=new Y,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Po(this.currentPoint.clone(),new Y(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Io(this.currentPoint.clone(),new Y(t,e),new Y(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Co(this.currentPoint.clone(),new Y(t,e),new Y(n,s),new Y(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new rs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Cr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},un=class extends zs{constructor(t){super(t),this.uuid=ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new zs().fromJSON(s))}return this}};function Bm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=qf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Xm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){let f=i[u],p=i[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Lo(r,o,e,a,l,c,0),o}function qf(i,t,e,n,s){let r;if(s===ng(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Qd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Qd(o/n|0,i[o],i[o+1],r);return r&&Pr(r,r.next)&&(Uo(r),r=r.next),r}function Os(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Pr(e,e.next)||qe(e.prev,e,e.next)===0)){if(Uo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Lo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Jm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Gm(i,n,s,r):Hm(i)){t.push(l.i,i.i,c.i),Uo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Vm(Os(i),t),Lo(i,t,e,n,s,r,2)):o===2&&Wm(i,t,e,n,s,r):Lo(Os(i),t,e,n,s,r,1);break}}}function Hm(i){let t=i.prev,e=i,n=i.next;if(qe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&uo(s,a,r,l,o,c,p.x,p.y)&&qe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Gm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(qe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),x=Math.max(a,l,c),m=Math.max(h,d,u),g=Yh(f,p,t,e,n),b=Yh(x,m,t,e,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=g&&v&&v.z<=b;){if(w.x>=f&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&uo(a,h,l,d,c,u,w.x,w.y)&&qe(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&uo(a,h,l,d,c,u,v.x,v.y)&&qe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=g;){if(w.x>=f&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&uo(a,h,l,d,c,u,w.x,w.y)&&qe(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&uo(a,h,l,d,c,u,v.x,v.y)&&qe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Vm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Pr(n,s)&&$f(n,e,e.next,s)&&No(n,s)&&No(s,n)&&(t.push(n.i,e.i,s.i),Uo(e),Uo(e.next),e=i=s),e=e.next}while(e!==i);return Os(e)}function Wm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qm(o,a)){let l=Zf(o,a);o=Os(o,o.next),l=Os(l,l.next),Lo(o,t,e,n,s,r,0),Lo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Xm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=qf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(jm(c))}s.sort(qm);for(let r=0;r<s.length;r++)e=Ym(s[r],e);return e}function qm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ym(i,t){let e=$m(i,t);if(!e)return t;let n=Zf(e,i);return Os(n,n.next),Os(e,e.next)}function $m(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Pr(i,e))return e;do{if(Pr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Yf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);No(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Zm(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Zm(i,t){return qe(i.prev,i,t.prev)<0&&qe(t.next,i,i.next)<0}function Jm(i,t,e,n){let s=i;do s.z===0&&(s.z=Yh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Km(s)}function Km(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Yh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function jm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Yf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function uo(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Yf(i,t,e,n,s,r,o,a)}function Qm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!tg(i,t)&&(No(i,t)&&No(t,i)&&eg(i,t)&&(qe(i.prev,i,t.prev)||qe(i,t.prev,t))||Pr(i,t)&&qe(i.prev,i,i.next)>0&&qe(t.prev,t,t.next)>0)}function qe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Pr(i,t){return i.x===t.x&&i.y===t.y}function $f(i,t,e,n){let s=Ja(qe(i,t,e)),r=Ja(qe(i,t,n)),o=Ja(qe(e,n,i)),a=Ja(qe(e,n,t));return!!(s!==r&&o!==a||s===0&&Za(i,e,t)||r===0&&Za(i,n,t)||o===0&&Za(e,i,n)||a===0&&Za(e,t,n))}function Za(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ja(i){return i>0?1:i<0?-1:0}function tg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$f(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function No(i,t){return qe(i.prev,i,i.next)<0?qe(i,t,i.next)>=0&&qe(i,i.prev,t)>=0:qe(i,t,i.prev)<0||qe(i,i.next,t)<0}function eg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Zf(i,t){let e=$h(i.i,i.x,i.y),n=$h(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Qd(i,t,e,n){let s=$h(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Uo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $h(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ng(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Zh=class{static triangulate(t,e,n=2){return Bm(t,e,n)}},Ii=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];tf(t),ef(n,t);let o=t.length;e.forEach(tf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ef(n,e[l]);let a=Zh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function tf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ef(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var gi=class i extends Ge{constructor(t=new un([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:ig,w,v=!1,T,M,I,y;if(g){w=g.getSpacedPoints(h),v=!0,u=!1;let rt=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,rt),M=new R,I=new R,y=new R}u||(m=0,f=0,p=0,x=0);let E=a.extractPoints(c),A=E.shape,P=E.holes;if(!Ii.isClockWise(A)){A=A.reverse();for(let rt=0,ct=P.length;rt<ct;rt++){let ut=P[rt];Ii.isClockWise(ut)&&(P[rt]=ut.reverse())}}function z(rt){let ut=10000000000000001e-36,dt=rt[0];for(let gt=1;gt<=rt.length;gt++){let Wt=gt%rt.length,Ht=rt[Wt],qt=Ht.x-dt.x,Zt=Ht.y-dt.y,N=qt*qt+Zt*Zt,xe=Math.max(Math.abs(Ht.x),Math.abs(Ht.y),Math.abs(dt.x),Math.abs(dt.y)),ee=ut*xe*xe;if(N<=ee){rt.splice(Wt,1),gt--;continue}dt=Ht}}z(A),P.forEach(z);let L=P.length,O=A;for(let rt=0;rt<L;rt++){let ct=P[rt];A=A.concat(ct)}function q(rt,ct,ut){return ct||Yt("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(ct,ut)}let X=A.length;function st(rt,ct,ut){let dt,gt,Wt,Ht=rt.x-ct.x,qt=rt.y-ct.y,Zt=ut.x-rt.x,N=ut.y-rt.y,xe=Ht*Ht+qt*qt,ee=Ht*N-qt*Zt;if(Math.abs(ee)>Number.EPSILON){let C=Math.sqrt(xe),_=Math.sqrt(Zt*Zt+N*N),B=ct.x-qt/C,G=ct.y+Ht/C,J=ut.x-N/_,ft=ut.y+Zt/_,vt=((J-B)*N-(ft-G)*Zt)/(Ht*N-qt*Zt);dt=B+Ht*vt-rt.x,gt=G+qt*vt-rt.y;let Q=dt*dt+gt*gt;if(Q<=2)return new Y(dt,gt);Wt=Math.sqrt(Q/2)}else{let C=!1;Ht>Number.EPSILON?Zt>Number.EPSILON&&(C=!0):Ht<-Number.EPSILON?Zt<-Number.EPSILON&&(C=!0):Math.sign(qt)===Math.sign(N)&&(C=!0),C?(dt=-qt,gt=Ht,Wt=Math.sqrt(xe)):(dt=Ht,gt=qt,Wt=Math.sqrt(xe/2))}return new Y(dt/Wt,gt/Wt)}let H=[];for(let rt=0,ct=O.length,ut=ct-1,dt=rt+1;rt<ct;rt++,ut++,dt++)ut===ct&&(ut=0),dt===ct&&(dt=0),H[rt]=st(O[rt],O[ut],O[dt]);let tt=[],et,At=H.concat();for(let rt=0,ct=L;rt<ct;rt++){let ut=P[rt];et=[];for(let dt=0,gt=ut.length,Wt=gt-1,Ht=dt+1;dt<gt;dt++,Wt++,Ht++)Wt===gt&&(Wt=0),Ht===gt&&(Ht=0),et[dt]=st(ut[dt],ut[Wt],ut[Ht]);tt.push(et),At=At.concat(et)}let It;if(m===0)It=Ii.triangulateShape(O,P);else{let rt=[],ct=[];for(let ut=0;ut<m;ut++){let dt=ut/m,gt=f*Math.cos(dt*Math.PI/2),Wt=p*Math.sin(dt*Math.PI/2)+x;for(let Ht=0,qt=O.length;Ht<qt;Ht++){let Zt=q(O[Ht],H[Ht],Wt);xt(Zt.x,Zt.y,-gt),dt===0&&rt.push(Zt)}for(let Ht=0,qt=L;Ht<qt;Ht++){let Zt=P[Ht];et=tt[Ht];let N=[];for(let xe=0,ee=Zt.length;xe<ee;xe++){let C=q(Zt[xe],et[xe],Wt);xt(C.x,C.y,-gt),dt===0&&N.push(C)}dt===0&&ct.push(N)}}It=Ii.triangulateShape(rt,ct)}let fe=It.length,te=p+x;for(let rt=0;rt<X;rt++){let ct=u?q(A[rt],At[rt],te):A[rt];v?(I.copy(T.normals[0]).multiplyScalar(ct.x),M.copy(T.binormals[0]).multiplyScalar(ct.y),y.copy(w[0]).add(I).add(M),xt(y.x,y.y,y.z)):xt(ct.x,ct.y,0)}for(let rt=1;rt<=h;rt++)for(let ct=0;ct<X;ct++){let ut=u?q(A[ct],At[ct],te):A[ct];v?(I.copy(T.normals[rt]).multiplyScalar(ut.x),M.copy(T.binormals[rt]).multiplyScalar(ut.y),y.copy(w[rt]).add(I).add(M),xt(y.x,y.y,y.z)):xt(ut.x,ut.y,d/h*rt)}for(let rt=m-1;rt>=0;rt--){let ct=rt/m,ut=f*Math.cos(ct*Math.PI/2),dt=p*Math.sin(ct*Math.PI/2)+x;for(let gt=0,Wt=O.length;gt<Wt;gt++){let Ht=q(O[gt],H[gt],dt);xt(Ht.x,Ht.y,d+ut)}for(let gt=0,Wt=P.length;gt<Wt;gt++){let Ht=P[gt];et=tt[gt];for(let qt=0,Zt=Ht.length;qt<Zt;qt++){let N=q(Ht[qt],et[qt],dt);v?xt(N.x,N.y+w[h-1].y,w[h-1].x+ut):xt(N.x,N.y,d+ut)}}}le(),Z();function le(){let rt=s.length/3;if(u){let ct=0,ut=X*ct;for(let dt=0;dt<fe;dt++){let gt=It[dt];Bt(gt[2]+ut,gt[1]+ut,gt[0]+ut)}ct=h+m*2,ut=X*ct;for(let dt=0;dt<fe;dt++){let gt=It[dt];Bt(gt[0]+ut,gt[1]+ut,gt[2]+ut)}}else{for(let ct=0;ct<fe;ct++){let ut=It[ct];Bt(ut[2],ut[1],ut[0])}for(let ct=0;ct<fe;ct++){let ut=It[ct];Bt(ut[0]+X*h,ut[1]+X*h,ut[2]+X*h)}}n.addGroup(rt,s.length/3-rt,0)}function Z(){let rt=s.length/3,ct=0;nt(O,ct),ct+=O.length;for(let ut=0,dt=P.length;ut<dt;ut++){let gt=P[ut];nt(gt,ct),ct+=gt.length}n.addGroup(rt,s.length/3-rt,1)}function nt(rt,ct){let ut=rt.length;for(;--ut>=0;){let dt=ut,gt=ut-1;gt<0&&(gt=rt.length-1);for(let Wt=0,Ht=h+m*2;Wt<Ht;Wt++){let qt=X*Wt,Zt=X*(Wt+1),N=ct+dt+qt,xe=ct+gt+qt,ee=ct+gt+Zt,C=ct+dt+Zt;Ct(N,xe,ee,C)}}}function xt(rt,ct,ut){l.push(rt),l.push(ct),l.push(ut)}function Bt(rt,ct,ut){Xt(rt),Xt(ct),Xt(ut);let dt=s.length/3,gt=b.generateTopUV(n,s,dt-3,dt-2,dt-1);ve(gt[0]),ve(gt[1]),ve(gt[2])}function Ct(rt,ct,ut,dt){Xt(rt),Xt(ct),Xt(dt),Xt(ct),Xt(ut),Xt(dt);let gt=s.length/3,Wt=b.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);ve(Wt[0]),ve(Wt[1]),ve(Wt[3]),ve(Wt[1]),ve(Wt[2]),ve(Wt[3])}function Xt(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function ve(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return sg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new vl[s.type]().fromJSON(s)),new i(n,t.options)}},ig={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Y(r,o),new Y(a,l),new Y(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Y(o,1-l),new Y(c,1-d),new Y(u,1-p),new Y(x,1-g)]:[new Y(a,1-l),new Y(h,1-d),new Y(f,1-p),new Y(m,1-g)]}};function sg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var xi=class i extends Ge{constructor(t=[new Y(0,-.5),new Y(.5,0),new Y(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=he(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new R,u=new Y,f=new R,p=new R,x=new R,m=0,g=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,g=t[b+1].y-t[b].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[b+1].x-t[b].x,g=t[b+1].y-t[b].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let b=0;b<=e;b++){let w=n+b*h*s,v=Math.sin(w),T=Math.cos(w);for(let M=0;M<=t.length-1;M++){d.x=t[M].x*v,d.y=t[M].y,d.z=t[M].x*T,o.push(d.x,d.y,d.z),u.x=b/e,u.y=M/(t.length-1),a.push(u.x,u.y);let I=l[3*M+0]*v,y=l[3*M+1],E=l[3*M+0]*T;c.push(I,y,E)}}for(let b=0;b<e;b++)for(let w=0;w<t.length-1;w++){let v=w+b*t.length,T=v,M=v+t.length,I=v+t.length+1,y=v+1;r.push(T,M,y),r.push(I,y,M)}this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("uv",new Kt(a,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Dn=class i extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let b=g*u-o;for(let w=0;w<c;w++){let v=w*d-r;p.push(v,-b,0),x.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){let w=b+c*g,v=b+c*(g+1),T=b+1+c*(g+1),M=b+1+c*g;f.push(w,v,M),f.push(v,T,M)}this.setIndex(f),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var os=class i extends Ge{constructor(t=new un([new Y(0,.5),new Y(-.5,-.5),new Y(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(o,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,p=u.holes;Ii.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let b=p[m];Ii.isClockWise(b)===!0&&(p[m]=b.reverse())}let x=Ii.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let b=p[m];f=f.concat(b)}for(let m=0,g=f.length;m<g;m++){let b=f[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,g=x.length;m<g;m++){let b=x[m],w=b[0]+d,v=b[1]+d,T=b[2]+d;n.push(w,v,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return rg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function rg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var dn=class i extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new R,u=new R,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let b=[],w=g/n,v=o+w*a,T=t*Math.cos(v),M=Math.sqrt(t*t-T*T),I=0;g===0&&o===0?I=.5/e:g===n&&l===Math.PI&&(I=-.5/e);for(let y=0;y<=e;y++){let E=y/e,A=s+E*r;d.x=-M*Math.cos(A),d.y=T,d.z=M*Math.sin(A),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(E+I,1-w),b.push(c++)}h.push(b)}for(let g=0;g<n;g++)for(let b=0;b<e;b++){let w=h[g][b+1],v=h[g][b],T=h[g+1][b],M=h[g+1][b+1];(g!==0||o>0)&&f.push(w,v,M),(g!==n-1||l<Math.PI)&&f.push(v,T,M)}this.setIndex(f),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var On=class i extends Ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new R,f=new R,p=new R;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=s;g++){let b=g/s*r;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,b=(s+1)*(x-1)+m-1,w=(s+1)*(x-1)+m,v=(s+1)*x+m;l.push(g,b,v),l.push(b,w,v)}this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Zn=class i extends Ge{constructor(t=new Do(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new Y,h=new R,d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Kt(d,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(f,2));function x(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),b(),g()}function m(w){h=t.getPointAt(w/e,h);let v=o.normals[w],T=o.binormals[w];for(let M=0;M<=s;M++){let I=M/s*Math.PI*2,y=Math.sin(I),E=-Math.cos(I);l.x=E*v.x+y*T.x,l.y=E*v.y+y*T.y,l.z=E*v.z+y*T.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let w=1;w<=e;w++)for(let v=1;v<=s;v++){let T=(s+1)*(w-1)+(v-1),M=(s+1)*w+(v-1),I=(s+1)*w+v,y=(s+1)*(w-1)+v;p.push(T,M,y),p.push(M,I,y)}}function b(){for(let w=0;w<=e;w++)for(let v=0;v<=s;v++)c.x=w/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new vl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Xs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(nf(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(nf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function wn(i){let t={};for(let e=0;e<i.length;e++){let n=Xs(i[e]);for(let s in n)t[s]=n[s]}return t}function nf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function og(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var Ln={clone:Xs,merge:wn},ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,De=class extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ag,this.fragmentShader=lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=og(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new pt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Y().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ir=class extends De{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},se=class extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ko=class extends pi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},Fo=class extends pi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=kl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_l=class extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=If,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},bl=class extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function xr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Hh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var bs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ml=class extends bs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wh,endingEnd:Wh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xh:r=t,a=2*e-n;break;case qh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xh:o=t,l=2*n-e;break;case qh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,b=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,w=(-1-f)*m+(1.5+f)*x+.5*p,v=f*m-f*x;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+b*o[c+T]+w*o[l+T]+v*o[d+T];return r}},Sl=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},wl=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Tl=class extends bs{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(s-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*u+p*2,b=d[g],w=d[g+1],v=t*u+p*2,T=h[v],M=h[v+1],I=hg(n,e,b,T,s);r[p]=Jf(I,x,w,M,m)}return r}};function Jf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function cg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function hg(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Jf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=cg(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Jn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xr(e,this.TimeBufferType),this.values=xr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xr(t.times,Array),values:xr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Hh(t.settings)&&(n.settings={inTangents:xr(t.settings.inTangents,Array),outTangents:xr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Tl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case mo:e=this.InterpolantFactoryMethodDiscrete;break;case ll:e=this.InterpolantFactoryMethodLinear;break;case Qa:e=this.InterpolantFactoryMethodSmooth;break;case Vh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $t("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return ll;case this.InterpolantFactoryMethodSmooth:return Qa;case this.InterpolantFactoryMethodBezier:return Vh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Hh(this.settings)&&(sf(this.settings.inTangents,t),sf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Yt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&dm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Hh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function sf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=ll;var Ms=class extends Jn{constructor(t,e,n){super(t,e,n)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=mo;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}};El.prototype.ValueTypeName="color";var Rl=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}};Rl.prototype.ValueTypeName="number";var Al=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ni.slerpFlat(r,0,o,c-a,o,c,l);return r}},zo=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Al(this.times,this.values,this.getValueSize(),t)}};zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends Jn{constructor(t,e,n){super(t,e,n)}};Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=mo;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}};Cl.prototype.ValueTypeName="vector";var Pl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kf=new Pl,Il=class{constructor(t){this.manager=t!==void 0?t:Kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Il.DEFAULT_MATERIAL_NAME="__DEFAULT";var Dr=class extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Oo=class extends Dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Gh=new me,rf=new R,of=new R,Bo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;rf.setFromMatrixPosition(t.matrixWorld),e.position.copy(rf),of.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(of),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Gh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Gh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Sr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Gh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ka=new R,ja=new Ni,Ci=new R,Ho=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ka,ja,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,ja,Ci.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ka,ja,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,ja,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ys=new R,af=new Y,lf=new Y,pn=class extends Ho{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(gh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ys.x,ys.y).multiplyScalar(-t/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ys.x,ys.y).multiplyScalar(-t/ys.z)}getViewSize(t,e){return this.getViewBounds(t,af,lf),e.subVectors(lf,af)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gh*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Jh=class extends Bo{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}},vi=class extends Dr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ws=class extends Ho{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Kh=class extends Bo{constructor(){super(new ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lr=class extends Dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Kh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var vr=-90,yr=1,Dl=class extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(vr,yr,t,e);s.layers=this.layers,this.add(s);let r=new pn(vr,yr,t,e);r.layers=this.layers,this.add(r);let o=new pn(vr,yr,t,e);o.layers=this.layers,this.add(o);let a=new pn(vr,yr,t,e);a.layers=this.layers,this.add(a);let l=new pn(vr,yr,t,e);l.layers=this.layers,this.add(l);let c=new pn(vr,yr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ll=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Go=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=ug.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ug(){this._document.hidden===!1&&this.reset()}var xu="\\[\\]\\.:\\/",dg=new RegExp("["+xu+"]","g"),vu="[^"+xu+"]",fg="[^"+xu.replace("\\.","")+"]",pg=/((?:WC+[\/:])*)/.source.replace("WC",vu),mg=/(WCOD+)?/.source.replace("WCOD",fg),gg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vu),xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vu),vg=new RegExp("^"+pg+mg+gg+xg+"$"),yg=["material","materials","bones","map"],jh=class{constructor(t,e,n){let s=n||Be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dg,"")}static parseTrackName(t){let e=vg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$t("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Be.Composite=jh;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ub=new Float32Array(1);var cf=new me,Vo=class{constructor(t,e,n=0,s=1/0){this.ray=new wo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Yt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return cf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cf),this}intersectObject(t,e=!0,n=[]){return Qh(t,this,n,e),n.sort(hf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Qh(t[s],this,n,e);return n.sort(hf),n}};function hf(i,t){return i.distance-t.distance}function Qh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Qh(r[o],t,e,!0)}}var wu=class wu{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};wu.prototype.isMatrix2=!0;var tu=wu;function yu(i,t,e,n){let s=_g(n);switch(e){case uu:return i*t;case Vl:return i*t/s.components*s.byteLength;case Wl:return i*t/s.components*s.byteLength;case As:return i*t*2/s.components*s.byteLength;case Xl:return i*t*2/s.components*s.byteLength;case du:return i*t*3/s.components*s.byteLength;case Hn:return i*t*4/s.components*s.byteLength;case ql:return i*t*4/s.components*s.byteLength;case Qo:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $l:case Jl:return Math.max(i,16)*Math.max(t,8)/4;case Yl:case Zl:return Math.max(i,8)*Math.max(t,8)/2;case Kl:case jl:case tc:case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ql:case ia:case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xc:case vc:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _c:case bc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sa:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _g(i){switch(i){case Sn:case au:return{byteLength:1,components:1};case Ur:case lu:case Je:return{byteLength:2,components:1};case Hl:case Gl:return{byteLength:2,components:4};case _i:case Bl:case si:return{byteLength:4,components:1};case cu:case hu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function y0(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sg(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Lg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Yg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$g=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,gx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ex=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ev=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,av=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Iv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ty=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ny=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:wg,alphahash_pars_fragment:Tg,alphamap_fragment:Eg,alphamap_pars_fragment:Rg,alphatest_fragment:Ag,alphatest_pars_fragment:Cg,aomap_fragment:Pg,aomap_pars_fragment:Ig,batching_pars_vertex:Dg,batching_vertex:Lg,begin_vertex:Ng,beginnormal_vertex:Ug,bsdfs:kg,iridescence_fragment:Fg,bumpmap_pars_fragment:zg,clipping_planes_fragment:Og,clipping_planes_pars_fragment:Bg,clipping_planes_pars_vertex:Hg,clipping_planes_vertex:Gg,color_fragment:Vg,color_pars_fragment:Wg,color_pars_vertex:Xg,color_vertex:qg,common:Yg,cube_uv_reflection_fragment:$g,defaultnormal_vertex:Zg,displacementmap_pars_vertex:Jg,displacementmap_vertex:Kg,emissivemap_fragment:jg,emissivemap_pars_fragment:Qg,colorspace_fragment:tx,colorspace_pars_fragment:ex,envmap_fragment:nx,envmap_common_pars_fragment:ix,envmap_pars_fragment:sx,envmap_pars_vertex:rx,envmap_physical_pars_fragment:gx,envmap_vertex:ox,fog_vertex:ax,fog_pars_vertex:lx,fog_fragment:cx,fog_pars_fragment:hx,gradientmap_pars_fragment:ux,lightmap_pars_fragment:dx,lights_lambert_fragment:fx,lights_lambert_pars_fragment:px,lights_pars_begin:mx,lights_toon_fragment:xx,lights_toon_pars_fragment:vx,lights_phong_fragment:yx,lights_phong_pars_fragment:_x,lights_physical_fragment:bx,lights_physical_pars_fragment:Mx,lights_fragment_begin:Sx,lights_fragment_maps:wx,lights_fragment_end:Tx,lightprobes_pars_fragment:Ex,logdepthbuf_fragment:Rx,logdepthbuf_pars_fragment:Ax,logdepthbuf_pars_vertex:Cx,logdepthbuf_vertex:Px,map_fragment:Ix,map_pars_fragment:Dx,map_particle_fragment:Lx,map_particle_pars_fragment:Nx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:kx,morphinstance_vertex:Fx,morphcolor_vertex:zx,morphnormal_vertex:Ox,morphtarget_pars_vertex:Bx,morphtarget_vertex:Hx,normal_fragment_begin:Gx,normal_fragment_maps:Vx,normal_pars_fragment:Wx,normal_pars_vertex:Xx,normal_vertex:qx,normalmap_pars_fragment:Yx,clearcoat_normal_fragment_begin:$x,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:Jx,iridescence_pars_fragment:Kx,opaque_fragment:jx,packing:Qx,premultiplied_alpha_fragment:tv,project_vertex:ev,dithering_fragment:nv,dithering_pars_fragment:iv,roughnessmap_fragment:sv,roughnessmap_pars_fragment:rv,shadowmap_pars_fragment:ov,shadowmap_pars_vertex:av,shadowmap_vertex:lv,shadowmask_pars_fragment:cv,skinbase_vertex:hv,skinning_pars_vertex:uv,skinning_vertex:dv,skinnormal_vertex:fv,specularmap_fragment:pv,specularmap_pars_fragment:mv,tonemapping_fragment:gv,tonemapping_pars_fragment:xv,transmission_fragment:vv,transmission_pars_fragment:yv,uv_pars_fragment:_v,uv_pars_vertex:bv,uv_vertex:Mv,worldpos_vertex:Sv,background_vert:wv,background_frag:Tv,backgroundCube_vert:Ev,backgroundCube_frag:Rv,cube_vert:Av,cube_frag:Cv,depth_vert:Pv,depth_frag:Iv,distance_vert:Dv,distance_frag:Lv,equirect_vert:Nv,equirect_frag:Uv,linedashed_vert:kv,linedashed_frag:Fv,meshbasic_vert:zv,meshbasic_frag:Ov,meshlambert_vert:Bv,meshlambert_frag:Hv,meshmatcap_vert:Gv,meshmatcap_frag:Vv,meshnormal_vert:Wv,meshnormal_frag:Xv,meshphong_vert:qv,meshphong_frag:Yv,meshphysical_vert:$v,meshphysical_frag:Zv,meshtoon_vert:Jv,meshtoon_frag:Kv,points_vert:jv,points_frag:Qv,shadow_vert:ty,shadow_frag:ey,sprite_vert:ny,sprite_frag:iy},Tt={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Gi={basic:{uniforms:wn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:wn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:wn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:wn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:wn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new pt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:wn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:wn([Tt.points,Tt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:wn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:wn([Tt.common,Tt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:wn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:wn([Tt.sprite,Tt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:wn([Tt.common,Tt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:wn([Tt.lights,Tt.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Gi.physical={uniforms:wn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var Tc={r:0,b:0,g:0},sy=new me,_0=new jt;_0.set(-1,0,0,0,1,0,0,0,1);function ry(i,t,e,n,s,r){let o=new pt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let v=b.backgroundBlurriness>0;w=t.get(w,v)}return w}function p(b){let w=!1,v=f(b);v===null?m(o,a):v&&v.isColor&&(m(v,1),w=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(b,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===Ko)?(c===void 0&&(c=new mt(new Ie(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:Xs(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,M,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sy.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_0),c.material.toneMapped=ce.getTransfer(v.colorSpace)!==_e,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new mt(new Dn(2,2),new De({name:"BackgroundMaterial",uniforms:Xs(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ce.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,w){b.getRGB(Tc,gu(i)),e.buffers.color.setClear(Tc.r,Tc.g,Tc.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:p,addToRenderList:x,dispose:g}}function oy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(P,D,z,L,O){let q=!1,X=d(P,L,z,D);r!==X&&(r=X,c(r.object)),q=f(P,L,z,O),q&&p(P,L,z,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(P,D,z,L),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,D,z,L){let O=L.wireframe===!0,q=n[D.id];q===void 0&&(q={},n[D.id]=q);let X=P.isInstancedMesh===!0?P.id:0,st=q[X];st===void 0&&(st={},q[X]=st);let H=st[z.id];H===void 0&&(H={},st[z.id]=H);let tt=H[O];return tt===void 0&&(tt=u(l()),H[O]=tt),tt}function u(P){let D=[],z=[],L=[];for(let O=0;O<e;O++)D[O]=0,z[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:L,object:P,attributes:{},index:null}}function f(P,D,z,L){let O=r.attributes,q=D.attributes,X=0,st=z.getAttributes();for(let H in st)if(st[H].location>=0){let et=O[H],At=q[H];if(At===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(At=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(At=P.instanceColor)),et===void 0||et.attribute!==At||At&&et.data!==At.data)return!0;X++}return r.attributesNum!==X||r.index!==L}function p(P,D,z,L){let O={},q=D.attributes,X=0,st=z.getAttributes();for(let H in st)if(st[H].location>=0){let et=q[H];et===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));let At={};At.attribute=et,et&&et.data&&(At.data=et.data),O[H]=At,X++}r.attributes=O,r.attributesNum=X,r.index=L}function x(){let P=r.newAttributes;for(let D=0,z=P.length;D<z;D++)P[D]=0}function m(P){g(P,0)}function g(P,D){let z=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;z[P]=1,L[P]===0&&(i.enableVertexAttribArray(P),L[P]=1),O[P]!==D&&(i.vertexAttribDivisor(P,D),O[P]=D)}function b(){let P=r.newAttributes,D=r.enabledAttributes;for(let z=0,L=D.length;z<L;z++)D[z]!==P[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function w(P,D,z,L,O,q,X){X===!0?i.vertexAttribIPointer(P,D,z,O,q):i.vertexAttribPointer(P,D,z,L,O,q)}function v(P,D,z,L){x();let O=L.attributes,q=z.getAttributes(),X=D.defaultAttributeValues;for(let st in q){let H=q[st];if(H.location>=0){let tt=O[st];if(tt===void 0&&(st==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),st==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor)),tt!==void 0){let et=tt.normalized,At=tt.itemSize,It=t.get(tt);if(It===void 0)continue;let fe=It.buffer,te=It.type,le=It.bytesPerElement,Z=te===i.INT||te===i.UNSIGNED_INT||tt.gpuType===Bl;if(tt.isInterleavedBufferAttribute){let nt=tt.data,xt=nt.stride,Bt=tt.offset;if(nt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<H.locationSize;Ct++)g(H.location+Ct,nt.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Ct=0;Ct<H.locationSize;Ct++)m(H.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let Ct=0;Ct<H.locationSize;Ct++)w(H.location+Ct,At/H.locationSize,te,et,xt*le,(Bt+At/H.locationSize*Ct)*le,Z)}else{if(tt.isInstancedBufferAttribute){for(let nt=0;nt<H.locationSize;nt++)g(H.location+nt,tt.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let nt=0;nt<H.locationSize;nt++)m(H.location+nt);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let nt=0;nt<H.locationSize;nt++)w(H.location+nt,At/H.locationSize,te,et,At*le,At/H.locationSize*nt*le,Z)}}else if(X!==void 0){let et=X[st];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(H.location,et);break;case 3:i.vertexAttrib3fv(H.location,et);break;case 4:i.vertexAttrib4fv(H.location,et);break;default:i.vertexAttrib1fv(H.location,et)}}}}b()}function T(){E();for(let P in n){let D=n[P];for(let z in D){let L=D[z];for(let O in L){let q=L[O];for(let X in q)h(q[X].object),delete q[X];delete L[O]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let D=n[P.id];for(let z in D){let L=D[z];for(let O in L){let q=L[O];for(let X in q)h(q[X].object),delete q[X];delete L[O]}}delete n[P.id]}function I(P){for(let D in n){let z=n[D];for(let L in z){let O=z[L];if(O[P.id]===void 0)continue;let q=O[P.id];for(let X in q)h(q[X].object),delete q[X];delete O[P.id]}}}function y(P){for(let D in n){let z=n[D],L=P.isInstancedMesh===!0?P.id:0,O=z[L];if(O!==void 0){for(let q in O){let X=O[q];for(let st in X)h(X[st].object),delete X[st];delete O[q]}delete z[L],Object.keys(z).length===0&&delete n[D]}}}function E(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function ay(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ly(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Hn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let y=I===Je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Sn&&I!==si&&!y&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&($t("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:v,maxSamples:T,samples:M}}function cy(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Cn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,w=b*4,v=g.clippingState||null;l.value=v,v=h(p,u,w,f);for(let T=0;T!==w;++T)v[T]=e[T];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,v=f;w!==x;++w,v+=4)o.copy(d[w]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var zr=4,hy=6,uy=20,dy=256,ra=new ws,jf=new pt,Tu=null,Eu=0,Ru=0,Au=!1,fy=new R,qs=new R,Br=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=fy}=r;Tu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Tu,Eu,Ru),this._renderer.xr.enabled=Au,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Je,format:Hn,colorSpace:go,depthBuffer:!1},s=Qf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=py(r)),this._blurMaterial=gy(r,t,e),this._ggxMaterial=my(r,t,e)}return s}_compileMaterial(t){let e=new mt(new Ge,t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,s,r){let l=new pn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(jf),d.toneMapping=yi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new Ie,new In({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,g=!0):(m.color.copy(jf),g=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let T=this._cubeSize;Fr(s,v*T,w>2?T:0,T,T),d.setRenderTarget(s),g&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Es||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Fr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ra)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-zr?n-p+zr:0),g=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Fr(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,ra),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Fr(t,m,g,3*x,2*x),s.setRenderTarget(t),s.render(a,ra)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-zr?s-this._lodMax+zr:0),u=4*(this._cubeSize-h);Fr(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,ra)}};function py(i){let t=[],e=[],n=i,s=i-zr+1+hy;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let g=0;g<d;g++){let b=g%3*2/3-1,w=g>2?0:-1,v=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];p.set(v,f*u*g);for(let T=0;T<u;T++){let M=h[T*2]*2-1,I=h[T*2+1]*2-1;g===0?qs.set(1,I,M):g===1?qs.set(-M,1,-I):g===2?qs.set(-M,I,1):g===3?qs.set(-1,I,-M):g===4?qs.set(-M,-1,I):qs.set(M,I,-1),qs.toArray(x,(g*u+T)*f)}}let m=new Ge;m.setAttribute("position",new Fn(p,f)),m.setAttribute("outputDirection",new Fn(x,f)),e.push(new mt(m,null)),n>zr&&n--}return{lodMeshes:e,sizeLods:t}}function Qf(i,t,e){let n=new He(i,t,e);return n.texture.mapping=Ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function my(i,t,e){return new De({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function gy(i,t,e){return new De({name:"SphericalGaussianBlur",defines:{SAMPLES:uy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function t0(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function e0(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Rc=class extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ro(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ie(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Qe});r.uniforms.tEquirect.value=e;let o=new mt(s,r),a=e.minFilter;return e.minFilter===Oi&&(e.minFilter=mn),new Dl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function xy(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Fl||f===zl)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new Rc(p.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===Fl||f===zl,x=f===Es||f===Ws;if(p||x){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Br(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return p&&b&&b.height>0||x&&b&&l(b)?(n===null&&(n=new Br(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Fl?u.mapping=Es:f===zl&&(u.mapping=Ws),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function vy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Us("WebGLRenderer: "+n+" extension not supported."),s}}}function yy(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let b=f.array;x=f.version;for(let w=0,v=b.length;w<v;w+=3){let T=b[w+0],M=b[w+1],I=b[w+2];u.push(T,M,M,I,I,T)}}else{let b=p.array;x=p.version;for(let w=0,v=b.length/3-1;w<v;w+=3){let T=w+0,M=w+1,I=w+2;u.push(T,M,M,I,I,T)}}let m=new(p.count>=65535?Mo:bo)(u,1);m.version=x;let g=r.get(d);g&&t.remove(g),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function _y(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function by(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Yt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function My(i,t,e){let n=new WeakMap,s=new Ce;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let E=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let v=a.attributes.position.count*w,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let M=new Float32Array(v*T*4*d),I=new _o(M,v,T,d);I.type=si,I.needsUpdate=!0;let y=w*4;for(let A=0;A<d;A++){let P=m[A],D=g[A],z=b[A],L=v*T*4*A;for(let O=0;O<P.count;O++){let q=O*y;f===!0&&(s.fromBufferAttribute(P,O),M[L+q+0]=s.x,M[L+q+1]=s.y,M[L+q+2]=s.z,M[L+q+3]=0),p===!0&&(s.fromBufferAttribute(D,O),M[L+q+4]=s.x,M[L+q+5]=s.y,M[L+q+6]=s.z,M[L+q+7]=0),x===!0&&(s.fromBufferAttribute(z,O),M[L+q+8]=s.x,M[L+q+9]=s.y,M[L+q+10]=s.z,M[L+q+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:I,size:new Y(v,T)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Sy(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var wy={[qo]:"LINEAR_TONE_MAPPING",[Yo]:"REINHARD_TONE_MAPPING",[$o]:"CINEON_TONE_MAPPING",[Zo]:"ACES_FILMIC_TONE_MAPPING",[Gs]:"AGX_TONE_MAPPING",[Vs]:"NEUTRAL_TONE_MAPPING",[Jo]:"CUSTOM_TONE_MAPPING"};function Ty(i,t,e,n,s,r){let o=new He(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ge;c.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Kt([0,2,0,0,2,0],2));let h=new Ir({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new mt(c,h),u=new ws(-1,1,1,-1,0,1),f=null,p=null,x=!1,m,g=null,b=[],w=!1;this.setSize=function(v,T){o.setSize(v,T),a!==null&&a.setSize(v,T),l!==null&&l.setSize(v,T);for(let M=0;M<b.length;M++){let I=b[M];I.setSize&&I.setSize(v,T)}},this.setEffects=function(v){b=v,w=b.length>0&&b[0].isRenderPass===!0;let T=o.width,M=o.height;b.length>0&&a===null&&(a=new He(T,M,{type:Je,depthBuffer:!1,stencilBuffer:!1}),l=new He(T,M,{type:Je,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<b.length;I++){let y=b[I];y.setSize&&y.setSize(T,M)}},this.begin=function(v,T){if(x||v.toneMapping===yi&&b.length===0)return!1;if(g=T,T!==null){let M=T.width,I=T.height;(o.width!==M||o.height!==I)&&this.setSize(M,I)}return w===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=yi,!0},this.hasRenderPass=function(){return w},this.end=function(v,T){v.toneMapping=m,x=!0;let M=o,I=a;for(let y=0;y<b.length;y++){let E=b[y];E.enabled!==!1&&(E.render(v,I,M,T),E.needsSwap!==!1&&(M=I,I=I===a?l:a))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},ce.getTransfer(f)===_e&&(h.defines.SRGB_TRANSFER="");let y=wy[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(g),v.render(d,u),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var b0=new Pn,Iu=new Fi(1,1),M0=new _o,S0=new dl,w0=new Ro,n0=[],i0=[],s0=new Float32Array(16),r0=new Float32Array(9),o0=new Float32Array(4);function Hr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=n0[s];if(r===void 0&&(r=new Float32Array(s),n0[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function an(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pc(i,t){let e=i0[t];e===void 0&&(e=new Int32Array(t),i0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ey(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ry(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function Ay(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function Cy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function Py(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;o0.set(n),i.uniformMatrix2fv(this.addr,!1,o0),ln(e,n)}}function Iy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;r0.set(n),i.uniformMatrix3fv(this.addr,!1,r0),ln(e,n)}}function Dy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;s0.set(n),i.uniformMatrix4fv(this.addr,!1,s0),ln(e,n)}}function Ly(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function Uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function ky(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function Fy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function Oy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function By(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function Hy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Iu.compareFunction=e.isReversedDepthBuffer()?wc:Sc,r=Iu):r=b0,e.setTexture2D(t||r,s)}function Gy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||S0,s)}function Vy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||w0,s)}function Wy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||M0,s)}function Xy(i){switch(i){case 5126:return Ey;case 35664:return Ry;case 35665:return Ay;case 35666:return Cy;case 35674:return Py;case 35675:return Iy;case 35676:return Dy;case 5124:case 35670:return Ly;case 35667:case 35671:return Ny;case 35668:case 35672:return Uy;case 35669:case 35673:return ky;case 5125:return Fy;case 36294:return zy;case 36295:return Oy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Gy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Wy}}function qy(i,t){i.uniform1fv(this.addr,t)}function Yy(i,t){let e=Hr(t,this.size,2);i.uniform2fv(this.addr,e)}function $y(i,t){let e=Hr(t,this.size,3);i.uniform3fv(this.addr,e)}function Zy(i,t){let e=Hr(t,this.size,4);i.uniform4fv(this.addr,e)}function Jy(i,t){let e=Hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ky(i,t){let e=Hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jy(i,t){let e=Hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qy(i,t){i.uniform1iv(this.addr,t)}function t1(i,t){i.uniform2iv(this.addr,t)}function e1(i,t){i.uniform3iv(this.addr,t)}function n1(i,t){i.uniform4iv(this.addr,t)}function i1(i,t){i.uniform1uiv(this.addr,t)}function s1(i,t){i.uniform2uiv(this.addr,t)}function r1(i,t){i.uniform3uiv(this.addr,t)}function o1(i,t){i.uniform4uiv(this.addr,t)}function a1(i,t,e){let n=this.cache,s=t.length,r=Pc(e,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Iu:o=b0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function l1(i,t,e){let n=this.cache,s=t.length,r=Pc(e,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||S0,r[o])}function c1(i,t,e){let n=this.cache,s=t.length,r=Pc(e,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||w0,r[o])}function h1(i,t,e){let n=this.cache,s=t.length,r=Pc(e,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||M0,r[o])}function u1(i){switch(i){case 5126:return qy;case 35664:return Yy;case 35665:return $y;case 35666:return Zy;case 35674:return Jy;case 35675:return Ky;case 35676:return jy;case 5124:case 35670:return Qy;case 35667:case 35671:return t1;case 35668:case 35672:return e1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return s1;case 36295:return r1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return h1}}var Du=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xy(e.type)}},Lu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=u1(e.type)}},Nu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Cu=/(\w+)(\])?(\[|\.)?/g;function a0(i,t){i.seq.push(t),i.map[t.id]=t}function d1(i,t,e){let n=i.name,s=n.length;for(Cu.lastIndex=0;;){let r=Cu.exec(n),o=Cu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){a0(e,c===void 0?new Du(a,i,t):new Lu(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Nu(a),a0(e,d)),e=d}}}var Or=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);d1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function l0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var f1=37297,p1=0;function m1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var c0=new jt;function g1(i){ce._getMatrix(c0,ce.workingColorSpace,i);let t=`mat3( ${c0.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case xo:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function h0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+m1(i.getShaderSource(t),a)}else return r}function x1(i,t){let e=g1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var v1={[qo]:"Linear",[Yo]:"Reinhard",[$o]:"Cineon",[Zo]:"ACESFilmic",[Gs]:"AgX",[Vs]:"Neutral",[Jo]:"Custom"};function y1(i,t){let e=v1[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ec=new R;function _1(){ce.getLuminanceCoefficients(Ec);let i=Ec.x.toFixed(4),t=Ec.y.toFixed(4),e=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function M1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function aa(i){return i!==""}function u0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function d0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var w1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(i){return i.replace(w1,E1)}var T1=new Map;function E1(i,t){let e=re[t];if(e===void 0){let n=T1.get(t);if(n!==void 0)e=re[n],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Uu(e)}var R1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f0(i){return i.replace(R1,A1)}function A1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function p0(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var C1={[Bs]:"SHADOWMAP_TYPE_PCF",[Nr]:"SHADOWMAP_TYPE_VSM"};function P1(i){return C1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var I1={[Es]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[Ko]:"ENVMAP_TYPE_CUBE_UV"};function D1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":I1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var L1={[Ws]:"ENVMAP_MODE_REFRACTION"};function N1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":L1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var U1={[kl]:"ENVMAP_BLENDING_MULTIPLY",[Af]:"ENVMAP_BLENDING_MIX",[Cf]:"ENVMAP_BLENDING_ADD"};function k1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":U1[i.combine]||"ENVMAP_BLENDING_NONE"}function F1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function z1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=P1(e),c=D1(e),h=N1(e),d=k1(e),u=F1(e),f=b1(e),p=M1(r),x=s.createProgram(),m,g,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(aa).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(aa).join(`
`),g.length>0&&(g+=`
`)):(m=[p0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),g=[p0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?re.tonemapping_pars_fragment:"",e.toneMapping!==yi?y1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,x1("linearToOutputTexel",e.outputColorSpace),_1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(aa).join(`
`)),o=Uu(o),o=u0(o,e),o=d0(o,e),a=Uu(a),a=u0(a,e),a=d0(a,e),o=f0(o),a=f0(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=b+m+o,v=b+g+a,T=l0(s,s.VERTEX_SHADER,w),M=l0(s,s.FRAGMENT_SHADER,v);s.attachShader(x,T),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(P){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(T)||"",L=s.getShaderInfoLog(M)||"",O=D.trim(),q=z.trim(),X=L.trim(),st=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,M);else{let tt=h0(s,T,"vertex"),et=h0(s,M,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+tt+`
`+et)}else O!==""?$t("WebGLProgram: Program Info Log:",O):(q===""||X==="")&&(H=!1);H&&(P.diagnostics={runnable:st,programLog:O,vertexShader:{log:q,prefix:m},fragmentShader:{log:X,prefix:g}})}s.deleteShader(T),s.deleteShader(M),y=new Or(s,x),E=S1(s,x)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,f1)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=p1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=M,this}var O1=0,ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fu(t),e.set(t,n)),n}},Fu=class{constructor(t){this.id=O1++,this.code=t,this.usedTimes=0}};function B1(i){return i===As||i===ia||i===sa}function H1(i,t,e,n,s,r){let o=new Er,a=new ku,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,E,A,P,D,z){let L=P.fog,O=D.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,st=t.get(y.envMap||q,X),H=st&&st.mapping===Ko?st.image.height:null,tt=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&$t("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let et=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,At=et!==void 0?et.length:0,It=0;O.morphAttributes.position!==void 0&&(It=1),O.morphAttributes.normal!==void 0&&(It=2),O.morphAttributes.color!==void 0&&(It=3);let fe,te,le,Z;if(tt){let Ne=Gi[tt];fe=Ne.vertexShader,te=Ne.fragmentShader}else{fe=y.vertexShader,te=y.fragmentShader;let Ne=a.getVertexShaderStage(y),Me=a.getFragmentShaderStage(y);a.update(y,Ne,Me),le=Ne.id,Z=Me.id}let nt=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Bt=D.isInstancedMesh===!0,Ct=D.isBatchedMesh===!0,Xt=!!y.map,ve=!!y.matcap,rt=!!st,ct=!!y.aoMap,ut=!!y.lightMap,dt=!!y.bumpMap&&y.wireframe===!1,gt=!!y.normalMap,Wt=!!y.displacementMap,Ht=!!y.emissiveMap,qt=!!y.metalnessMap,Zt=!!y.roughnessMap,N=y.anisotropy>0,xe=y.clearcoat>0,ee=y.dispersion>0,C=y.retroreflectivity>0,_=y.iridescence>0,B=y.sheen>0,G=y.transmission>0,J=N&&!!y.anisotropyMap,ft=xe&&!!y.clearcoatMap,vt=xe&&!!y.clearcoatNormalMap,Q=xe&&!!y.clearcoatRoughnessMap,ot=_&&!!y.iridescenceMap,Mt=_&&!!y.iridescenceThicknessMap,zt=B&&!!y.sheenColorMap,bt=B&&!!y.sheenRoughnessMap,yt=!!y.specularMap,Nt=!!y.specularColorMap,Gt=!!y.specularIntensityMap,Jt=G&&!!y.transmissionMap,F=G&&!!y.thicknessMap,St=!!y.gradientMap,it=!!y.alphaMap,wt=y.alphaTest>0,Pt=!!y.alphaHash,lt=!!y.extensions,Vt=yi;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let Ft={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:fe,fragmentShader:te,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&D._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&D.instanceColor!==null,instancingMorph:Bt&&D.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Xt,matcap:ve,envMap:rt,envMapMode:rt&&st.mapping,envMapCubeUVHeight:H,aoMap:ct,lightMap:ut,bumpMap:dt,normalMap:gt,displacementMap:Wt,emissiveMap:Ht,normalMapObjectSpace:gt&&y.normalMapType===Df,normalMapTangentSpace:gt&&y.normalMapType===kr,packedNormalMap:gt&&y.normalMapType===kr&&B1(y.normalMap.format),metalnessMap:qt,roughnessMap:Zt,anisotropy:N,anisotropyMap:J,clearcoat:xe,clearcoatMap:ft,clearcoatNormalMap:vt,clearcoatRoughnessMap:Q,dispersion:ee,retroreflection:C,iridescence:_,iridescenceMap:ot,iridescenceThicknessMap:Mt,sheen:B,sheenColorMap:zt,sheenRoughnessMap:bt,specularMap:yt,specularColorMap:Nt,specularIntensityMap:Gt,transmission:G,transmissionMap:Jt,thicknessMap:F,gradientMap:St,opaque:y.transparent===!1&&y.blending===Ts&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:wt,alphaHash:Pt,combine:y.combine,mapUv:Xt&&p(y.map.channel),aoMapUv:ct&&p(y.aoMap.channel),lightMapUv:ut&&p(y.lightMap.channel),bumpMapUv:dt&&p(y.bumpMap.channel),normalMapUv:gt&&p(y.normalMap.channel),displacementMapUv:Wt&&p(y.displacementMap.channel),emissiveMapUv:Ht&&p(y.emissiveMap.channel),metalnessMapUv:qt&&p(y.metalnessMap.channel),roughnessMapUv:Zt&&p(y.roughnessMap.channel),anisotropyMapUv:J&&p(y.anisotropyMap.channel),clearcoatMapUv:ft&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:vt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:bt&&p(y.sheenRoughnessMap.channel),specularMapUv:yt&&p(y.specularMap.channel),specularColorMapUv:Nt&&p(y.specularColorMap.channel),specularIntensityMapUv:Gt&&p(y.specularIntensityMap.channel),transmissionMapUv:Jt&&p(y.transmissionMap.channel),thicknessMapUv:F&&p(y.thicknessMap.channel),alphaMapUv:it&&p(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(gt||N),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(Xt||it),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&gt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:It,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Xt&&y.map.isVideoTexture===!0&&ce.getTransfer(y.map.colorSpace)===_e,decodeVideoTextureEmissive:Ht&&y.emissiveMap.isVideoTexture===!0&&ce.getTransfer(y.emissiveMap.colorSpace)===_e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ke,flipSided:y.side===gn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:lt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&y.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)E.push(A),E.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(g(E,y),b(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function g(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function b(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function w(y){let E=f[y.type],A;if(E){let P=Gi[E];A=Ln.clone(P.uniforms)}else A=y.uniforms;return A}function v(y,E){let A=h.get(E);return A!==void 0?++A.usedTimes:(A=new z1(i,E,y,s),c.push(A),h.set(E,A)),A}function T(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function I(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:T,releaseShaderCache:M,programs:c,dispose:I}}function G1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function V1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function m0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function g0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,m,g){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},i[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=p,b.materialVariant=o(u),b.groupOrder=x,b.renderOrder=u.renderOrder,b.z=m,b.group=g),t++,b}function l(u,f,p,x,m,g,b){b.reversedDepth===!0&&(m=-m);let w=a(u,f,p,x,m,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(u,f,p,x,m,g){let b=a(u,f,p,x,m,g);p.transmission>0?n.unshift(b):p.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||V1),n.length>1&&n.sort(f||m0),s.length>1&&s.sort(f||m0)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function W1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new g0,i.set(n,[o])):s>=r.length?(o=new g0,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function X1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new pt};break;case"SpotLight":e={position:new R,direction:new R,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function q1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Y1=0;function $1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Z1(i){let t=new X1,e=q1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new me,o=new me;function a(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,b=0,w=0,v=0,T=0,M=0,I=0,y=0,E=0,A=0;c.sort($1);for(let D=0,z=c.length;D<z;D++){let L=c[D],O=L.color,q=L.intensity,X=L.distance,st=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===As?st=L.shadow.map.texture:st=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*q,d+=O.g*q,u+=O.b*q;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],q);A++}else if(L.isSunLight){let H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let tt=L.shadow,et=e.get(L);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[p]=et,n.sunShadowMap[p]=st;let At=tt.getViewportCount();for(let It=0;It<At;It++)n.sunShadowMatrix[x+It]=tt.getMatrix(It),n.sunShadowCascade[x+It]=tt._cascadeData[It];x+=At,p++}n.sun[f]=H,f++}else if(L.isDirectionalLight){let H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let tt=L.shadow,et=e.get(L);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=st,n.directionalShadowMatrix[m]=L.shadow.matrix,T++}n.directional[m]=H,m++}else if(L.isSpotLight){let H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(O).multiplyScalar(q),H.distance=X,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[b]=H;let tt=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,tt.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[b]=tt.matrix,L.castShadow){let et=e.get(L);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,n.spotShadow[b]=et,n.spotShadowMap[b]=st,I++}b++}else if(L.isRectAreaLight){let H=t.get(L);H.color.copy(O).multiplyScalar(q),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=H,w++}else if(L.isPointLight){let H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let tt=L.shadow,et=e.get(L);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,et.shadowCameraNear=tt.camera.near,et.shadowCameraFar=tt.camera.far,n.pointShadow[g]=et,n.pointShadowMap[g]=st,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=H,g++}else if(L.isHemisphereLight){let H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(q),H.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[v]=H,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==b||P.rectAreaLength!==w||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==T||P.numPointShadows!==M||P.numSpotShadows!==I||P.numSpotMaps!==y||P.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=w,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=b,P.rectAreaLength=w,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=T,P.numPointShadows=M,P.numSpotShadows=I,P.numSpotMaps=y,P.numLightProbes=A,n.version=Y1++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let b=0,w=c.length;b<w;b++){let v=c[b];if(v.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),u++}else if(v.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function x0(i){let t=new Z1(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function J1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new x0(i),t.set(s,[a])):r>=o.length?(a=new x0(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Q1=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],t_=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],v0=new me,oa=new R,Pu=new R;function e_(i,t,e){let n=new Ar,s=new Y,r=new Y,o=new Ce,a=new _l,l=new bl,c={},h=e.maxTextureSize,d={[Bn]:gn,[gn]:Bn,[ke]:ke},u=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:K1,fragmentShader:j1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ge;p.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new mt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bs;let g=this.type;this.render=function(M,I,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===ff&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bs);let E=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Qe),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=g!==this.type;z&&I.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=M.length;L<O;L++){let q=M[L],X=q.shadow;if(X===void 0){$t("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let st=X.getFrameExtents();s.multiply(st),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,X.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=H,X.map===null||z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Nr){if(q.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new He(s.x,s.y,{format:As,type:Je,minFilter:mn,magFilter:mn,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new Fi(s.x,s.y,si),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Di,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=je,X.map.depthTexture.magFilter=je}else q.isPointLight?(X.map=new Rc(s.x),X.map.depthTexture=new pl(s.x,_i)):(X.map=new He(s.x,s.y),X.map.depthTexture=new Fi(s.x,s.y,_i)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Di,this.type===Bs?(X.map.depthTexture.compareFunction=H?wc:Sc,X.map.depthTexture.minFilter=mn,X.map.depthTexture.magFilter=mn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=je,X.map.depthTexture.magFilter=je);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let tt=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,y);for(let et=0;et<tt;et++){let At=X.getCamera(et);if(q.isPointLight){let It=X.camera,fe=X.matrix,te=q.distance||It.far;te!==It.far&&(It.far=te,It.updateProjectionMatrix()),oa.setFromMatrixPosition(q.matrixWorld),It.position.copy(oa),Pu.copy(It.position),Pu.add(Q1[et]),It.up.copy(t_[et]),It.lookAt(Pu),It.updateMatrixWorld(),fe.makeTranslation(-oa.x,-oa.y,-oa.z),v0.multiplyMatrices(It.projectionMatrix,It.matrixWorldInverse),X._frustum.setFromProjectionMatrix(v0,It.coordinateSystem,It.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,et),i.clear();else{et===0&&(i.setRenderTarget(X.map),i.clear());let It=X.getViewport(et);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),D.viewport(o)}n=X.getFrustum(et),v(I,y,At,q,this.type)}X.isPointLightShadow!==!0&&this.type===Nr&&b(X,y),X.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,A,P)};function b(M,I){let y=t.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new He(s.x,s.y,{format:As,type:Je}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(I,null,y,u,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(I,null,y,f,x,null)}function w(M,I,y,E){let A=null,P=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)A=P;else if(A=y.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let D=A.uuid,z=I.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let O=L[z];O===void 0&&(O=A.clone(),L[z]=O,I.addEventListener("dispose",T)),A=O}if(A.visible=I.visible,A.wireframe=I.wireframe,E===Nr?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:d[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=i.properties.get(A);D.light=y}return A}function v(M,I,y,E,A){if(M.visible===!1)return;if(M.layers.test(I.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===Nr)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let z=t.update(M),L=M.material;if(Array.isArray(L)){let O=z.groups;for(let q=0,X=O.length;q<X;q++){let st=O[q],H=L[st.materialIndex];if(H&&H.visible){let tt=w(M,H,E,A);M.onBeforeShadow(i,M,I,y,z,tt,st),i.renderBufferDirect(y,null,z,tt,M,st),M.onAfterShadow(i,M,I,y,z,tt,st)}}}else if(L.visible){let O=w(M,L,E,A);M.onBeforeShadow(i,M,I,y,z,O,null),i.renderBufferDirect(y,null,z,O,M,null),M.onAfterShadow(i,M,I,y,z,O,null)}}let D=M.children;for(let z=0,L=D.length;z<L;z++)v(D[z],I,y,E,A)}function T(M){M.target.removeEventListener("dispose",T);for(let y in c){let E=c[y],A=M.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function n_(i,t){function e(){let F=!1,St=new Ce,it=null,wt=new Ce(0,0,0,0);return{setMask:function(Pt){it!==Pt&&!F&&(i.colorMask(Pt,Pt,Pt,Pt),it=Pt)},setLocked:function(Pt){F=Pt},setClear:function(Pt,lt,Vt,Ft,Ne){Ne===!0&&(Pt*=Ft,lt*=Ft,Vt*=Ft),St.set(Pt,lt,Vt,Ft),wt.equals(St)===!1&&(i.clearColor(Pt,lt,Vt,Ft),wt.copy(St))},reset:function(){F=!1,it=null,wt.set(-1,0,0,0)}}}function n(){let F=!1,St=!1,it=null,wt=null,Pt=null;return{setReversed:function(lt){if(St!==lt){let Vt=t.get("EXT_clip_control");lt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),St=lt;let Ft=Pt;Pt=null,this.setClear(Ft)}},getReversed:function(){return St},setTest:function(lt){lt?nt(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(lt){it!==lt&&!F&&(i.depthMask(lt),it=lt)},setFunc:function(lt){if(St&&(lt=Vf[lt]),wt!==lt){switch(lt){case el:i.depthFunc(i.NEVER);break;case nl:i.depthFunc(i.ALWAYS);break;case il:i.depthFunc(i.LESS);break;case br:i.depthFunc(i.LEQUAL);break;case sl:i.depthFunc(i.EQUAL);break;case rl:i.depthFunc(i.GEQUAL);break;case Mr:i.depthFunc(i.GREATER);break;case ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=lt}},setLocked:function(lt){F=lt},setClear:function(lt){Pt!==lt&&(Pt=lt,St&&(lt=1-lt),i.clearDepth(lt))},reset:function(){F=!1,it=null,wt=null,Pt=null,St=!1}}}function s(){let F=!1,St=null,it=null,wt=null,Pt=null,lt=null,Vt=null,Ft=null,Ne=null;return{setTest:function(Me){F||(Me?nt(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(Me){St!==Me&&!F&&(i.stencilMask(Me),St=Me)},setFunc:function(Me,ci,Ri){(it!==Me||wt!==ci||Pt!==Ri)&&(i.stencilFunc(Me,ci,Ri),it=Me,wt=ci,Pt=Ri)},setOp:function(Me,ci,Ri){(lt!==Me||Vt!==ci||Ft!==Ri)&&(i.stencilOp(Me,ci,Ri),lt=Me,Vt=ci,Ft=Ri)},setLocked:function(Me){F=Me},setClear:function(Me){Ne!==Me&&(i.clearStencil(Me),Ne=Me)},reset:function(){F=!1,St=null,it=null,wt=null,Pt=null,lt=null,Vt=null,Ft=null,Ne=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,b=null,w=null,v=null,T=null,M=null,I=null,y=new pt(0,0,0),E=0,A=!1,P=null,D=null,z=null,L=null,O=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,st=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=st>=1):H.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=st>=2);let tt=null,et={},At=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),fe=new Ce().fromArray(At),te=new Ce().fromArray(It);function le(F,St,it,wt){let Pt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(F,lt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<it;Vt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(St+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return lt}let Z={};Z[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),o.setFunc(br),dt(!1),gt(eu),nt(i.CULL_FACE),ct(Qe);function nt(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function xt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Bt(F,St){return u[F]!==St?(i.bindFramebuffer(F,St),u[F]=St,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=St),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=St),!0):!1}function Ct(F,St){let it=p,wt=!1;if(F){it=f.get(St),it===void 0&&(it=[],f.set(St,it));let Pt=F.textures;if(it.length!==Pt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Vt=Pt.length;lt<Vt;lt++)it[lt]=i.COLOR_ATTACHMENT0+lt;it.length=Pt.length,wt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,wt=!0);wt&&i.drawBuffers(it)}function Xt(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let ve={[ii]:i.FUNC_ADD,[pf]:i.FUNC_SUBTRACT,[mf]:i.FUNC_REVERSE_SUBTRACT};ve[gf]=i.MIN,ve[xf]=i.MAX;let rt={[Hs]:i.ZERO,[vf]:i.ONE,[yf]:i.SRC_COLOR,[su]:i.SRC_ALPHA,[Sf]:i.SRC_ALPHA_SATURATE,[Xo]:i.DST_COLOR,[Wo]:i.DST_ALPHA,[_f]:i.ONE_MINUS_SRC_COLOR,[ru]:i.ONE_MINUS_SRC_ALPHA,[Mf]:i.ONE_MINUS_DST_COLOR,[bf]:i.ONE_MINUS_DST_ALPHA,[wf]:i.CONSTANT_COLOR,[Tf]:i.ONE_MINUS_CONSTANT_COLOR,[Ef]:i.CONSTANT_ALPHA,[Rf]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(F,St,it,wt,Pt,lt,Vt,Ft,Ne,Me){if(F===Qe){m===!0&&(xt(i.BLEND),m=!1);return}if(m===!1&&(nt(i.BLEND),m=!0),F!==Ul){if(F!==g||Me!==A){if((b!==ii||T!==ii)&&(i.blendEquation(i.FUNC_ADD),b=ii,T=ii),Me)switch(F){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zi:i.blendFunc(i.ONE,i.ONE);break;case nu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case iu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Yt("WebGLState: Invalid blending: ",F);break}else switch(F){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nu:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iu:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",F);break}w=null,v=null,M=null,I=null,y.set(0,0,0),E=0,g=F,A=Me}return}Pt=Pt||St,lt=lt||it,Vt=Vt||wt,(St!==b||Pt!==T)&&(i.blendEquationSeparate(ve[St],ve[Pt]),b=St,T=Pt),(it!==w||wt!==v||lt!==M||Vt!==I)&&(i.blendFuncSeparate(rt[it],rt[wt],rt[lt],rt[Vt]),w=it,v=wt,M=lt,I=Vt),(Ft.equals(y)===!1||Ne!==E)&&(i.blendColor(Ft.r,Ft.g,Ft.b,Ne),y.copy(Ft),E=Ne),g=F,A=!1}function ut(F,St){F.side===ke?xt(i.CULL_FACE):nt(i.CULL_FACE);let it=F.side===gn;St&&(it=!it),dt(it),F.blending===Ts&&F.transparent===!1?ct(Qe):ct(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let wt=F.stencilWrite;a.setTest(wt),wt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ht(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(F){P!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),P=F)}function gt(F){F!==uf?(nt(i.CULL_FACE),F!==D&&(F===eu?i.cullFace(i.BACK):F===df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),D=F}function Wt(F){F!==z&&(X&&i.lineWidth(F),z=F)}function Ht(F,St,it){F?(nt(i.POLYGON_OFFSET_FILL),(L!==St||O!==it)&&(L=St,O=it,o.getReversed()&&(St=-St),i.polygonOffset(St,it))):xt(i.POLYGON_OFFSET_FILL)}function qt(F){F?nt(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Zt(F){F===void 0&&(F=i.TEXTURE0+q-1),tt!==F&&(i.activeTexture(F),tt=F)}function N(F,St,it){it===void 0&&(tt===null?it=i.TEXTURE0+q-1:it=tt);let wt=et[it];wt===void 0&&(wt={type:void 0,texture:void 0},et[it]=wt),(wt.type!==F||wt.texture!==St)&&(tt!==it&&(i.activeTexture(it),tt=it),i.bindTexture(F,St||Z[F]),wt.type=F,wt.texture=St)}function xe(){let F=et[tt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function _(){try{i.texSubImage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function B(){try{i.texSubImage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function ft(){try{i.texStorage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function vt(){try{i.texStorage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function Q(){try{i.texImage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function ot(){try{i.texImage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function Mt(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function zt(F,St){d[F]!==St&&(i.pixelStorei(F,St),d[F]=St)}function bt(F){fe.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),fe.copy(F))}function yt(F){te.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function Nt(F,St){let it=c.get(St);it===void 0&&(it=new WeakMap,c.set(St,it));let wt=it.get(F);wt===void 0&&(wt=i.getUniformBlockIndex(St,F.name),it.set(F,wt))}function Gt(F,St){let wt=c.get(St).get(F);l.get(St)!==wt&&(i.uniformBlockBinding(St,wt,F.__bindingPointIndex),l.set(St,wt))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},tt=null,et={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,b=null,w=null,v=null,T=null,M=null,I=null,y=new pt(0,0,0),E=0,A=!1,P=null,D=null,z=null,L=null,O=null,fe.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:xt,bindFramebuffer:Bt,drawBuffers:Ct,useProgram:Xt,setBlending:ct,setMaterial:ut,setFlipSided:dt,setCullFace:gt,setLineWidth:Wt,setPolygonOffset:Ht,setScissorTest:qt,activeTexture:Zt,bindTexture:N,unbindTexture:xe,compressedTexImage2D:ee,compressedTexImage3D:C,texImage2D:Q,texImage3D:ot,pixelStorei:zt,getParameter:Mt,updateUBOMapping:Nt,uniformBlockBinding:Gt,texStorage2D:ft,texStorage3D:vt,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:J,scissor:bt,viewport:yt,reset:Jt}}function i_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Y,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,_){return p?new OffscreenCanvas(C,_):vo("canvas")}function m(C,_,B){let G=1,J=ee(C);if((J.width>B||J.height>B)&&(G=B/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ft=Math.floor(G*J.width),vt=Math.floor(G*J.height);u===void 0&&(u=x(ft,vt));let Q=_?x(ft,vt):u;return Q.width=ft,Q.height=vt,Q.getContext("2d").drawImage(C,0,0,ft,vt),$t("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ft+"x"+vt+")."),Q}else return"data"in C&&$t("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function g(C){return C.generateMipmaps}function b(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,_,B,G,J,ft=!1){if(C!==null){if(i[C]!==void 0)return i[C];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let vt;G&&(vt=t.get("EXT_texture_norm16"),vt||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=_;if(_===i.RED&&(B===i.FLOAT&&(Q=i.R32F),B===i.HALF_FLOAT&&(Q=i.R16F),B===i.UNSIGNED_BYTE&&(Q=i.R8),B===i.UNSIGNED_SHORT&&vt&&(Q=vt.R16_EXT),B===i.SHORT&&vt&&(Q=vt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.R8UI),B===i.UNSIGNED_SHORT&&(Q=i.R16UI),B===i.UNSIGNED_INT&&(Q=i.R32UI),B===i.BYTE&&(Q=i.R8I),B===i.SHORT&&(Q=i.R16I),B===i.INT&&(Q=i.R32I)),_===i.RG&&(B===i.FLOAT&&(Q=i.RG32F),B===i.HALF_FLOAT&&(Q=i.RG16F),B===i.UNSIGNED_BYTE&&(Q=i.RG8),B===i.UNSIGNED_SHORT&&vt&&(Q=vt.RG16_EXT),B===i.SHORT&&vt&&(Q=vt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RG8UI),B===i.UNSIGNED_SHORT&&(Q=i.RG16UI),B===i.UNSIGNED_INT&&(Q=i.RG32UI),B===i.BYTE&&(Q=i.RG8I),B===i.SHORT&&(Q=i.RG16I),B===i.INT&&(Q=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),B===i.UNSIGNED_INT&&(Q=i.RGB32UI),B===i.BYTE&&(Q=i.RGB8I),B===i.SHORT&&(Q=i.RGB16I),B===i.INT&&(Q=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),B===i.UNSIGNED_INT&&(Q=i.RGBA32UI),B===i.BYTE&&(Q=i.RGBA8I),B===i.SHORT&&(Q=i.RGBA16I),B===i.INT&&(Q=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_SHORT&&vt&&(Q=vt.RGB16_EXT),B===i.SHORT&&vt&&(Q=vt.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),_===i.RGBA){let ot=ft?xo:ce.getTransfer(J);B===i.FLOAT&&(Q=i.RGBA32F),B===i.HALF_FLOAT&&(Q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Q=ot===_e?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&vt&&(Q=vt.RGBA16_EXT),B===i.SHORT&&vt&&(Q=vt.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function T(C,_){let B;return C?_===null||_===_i||_===Rs?B=i.DEPTH24_STENCIL8:_===si?B=i.DEPTH32F_STENCIL8:_===Ur&&(B=i.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===_i||_===Rs?B=i.DEPTH_COMPONENT24:_===si?B=i.DEPTH_COMPONENT32F:_===Ur&&(B=i.DEPTH_COMPONENT16),B}function M(C,_){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==je&&C.minFilter!==mn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function I(C){let _=C.target;_.removeEventListener("dispose",I),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function y(C){let _=C.target;_.removeEventListener("dispose",y),P(_)}function E(C){let _=n.get(C);if(_.__webglInit===void 0)return;let B=C.source,G=f.get(B);if(G){let J=G[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&A(C),Object.keys(G).length===0&&f.delete(B)}n.remove(C)}function A(C){let _=n.get(C);i.deleteTexture(_.__webglTexture);let B=C.source,G=f.get(B);delete G[_.__cacheKey],o.memory.textures--}function P(C){let _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let J=0;J<_.__webglFramebuffer[G].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[G][J]);else i.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)i.deleteFramebuffer(_.__webglFramebuffer[G]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=C.textures;for(let G=0,J=B.length;G<J;G++){let ft=n.get(B[G]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(B[G])}n.remove(C)}let D=0;function z(){D=0}function L(){return D}function O(C){D=C}function q(){let C=D;return C>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function X(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function st(C,_){let B=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let G=C.image;if(G===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(B,C,_);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function H(C,_){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){xt(B,C,_);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function tt(C,_){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){xt(B,C,_);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function et(C,_){let B=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Bt(B,C,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}let At={[ti]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[al]:i.MIRRORED_REPEAT},It={[je]:i.NEAREST,[Pf]:i.NEAREST_MIPMAP_NEAREST,[jo]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Ol]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},fe={[Nf]:i.NEVER,[Of]:i.ALWAYS,[Uf]:i.LESS,[Sc]:i.LEQUAL,[kf]:i.EQUAL,[wc]:i.GEQUAL,[Ff]:i.GREATER,[zf]:i.NOTEQUAL};function te(C,_){if(_.type===si&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===mn||_.magFilter===Ol||_.magFilter===jo||_.magFilter===Oi||_.minFilter===mn||_.minFilter===Ol||_.minFilter===jo||_.minFilter===Oi)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,At[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,At[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,At[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,It[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,It[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,fe[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===je||_.minFilter!==jo&&_.minFilter!==Oi||_.type===si&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function le(C,_){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",I));let G=_.source,J=f.get(G);J===void 0&&(J={},f.set(G,J));let ft=X(_);if(ft!==C.__cacheKey){J[ft]===void 0&&(J[ft]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[ft].usedTimes++;let vt=J[C.__cacheKey];vt!==void 0&&(J[C.__cacheKey].usedTimes--,vt.usedTimes===0&&A(_)),C.__cacheKey=ft,C.__webglTexture=J[ft].texture}return B}function Z(C,_,B){return Math.floor(Math.floor(C/B)/_)}function nt(C,_,B,G){let ft=C.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,G,_.data);else{ft.sort((zt,bt)=>zt.start-bt.start);let vt=0;for(let zt=1;zt<ft.length;zt++){let bt=ft[vt],yt=ft[zt],Nt=bt.start+bt.count,Gt=Z(yt.start,_.width,4),Jt=Z(bt.start,_.width,4);yt.start<=Nt+1&&Gt===Jt&&Z(yt.start+yt.count-1,_.width,4)===Gt?bt.count=Math.max(bt.count,yt.start+yt.count-bt.start):(++vt,ft[vt]=yt)}ft.length=vt+1;let Q=e.getParameter(i.UNPACK_ROW_LENGTH),ot=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let zt=0,bt=ft.length;zt<bt;zt++){let yt=ft[zt],Nt=Math.floor(yt.start/4),Gt=Math.ceil(yt.count/4),Jt=Nt%_.width,F=Math.floor(Nt/_.width),St=Gt,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Jt,F,St,it,B,G,_.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function xt(C,_,B){let G=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=i.TEXTURE_3D);let J=le(C,_),ft=_.source;e.bindTexture(G,C.__webglTexture,i.TEXTURE0+B);let vt=n.get(ft);if(ft.version!==vt.__version||J===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let it=ce.getPrimaries(ce.workingColorSpace),wt=_.colorSpace===bi?null:ce.getPrimaries(_.colorSpace),Pt=_.colorSpace===bi||it===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ot=m(_.image,!1,s.maxTextureSize);ot=xe(_,ot);let Mt=r.convert(_.format,_.colorSpace),zt=r.convert(_.type),bt=v(_.internalFormat,Mt,zt,_.normalized,_.colorSpace,_.isVideoTexture);te(G,_);let yt,Nt=_.mipmaps,Gt=_.isVideoTexture!==!0,Jt=vt.__version===void 0||J===!0,F=ft.dataReady,St=M(_,ot);if(_.isDepthTexture)bt=T(_.format===Bi,_.type),Jt&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,bt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,bt,ot.width,ot.height,0,Mt,zt,null));else if(_.isDataTexture)if(Nt.length>0){Gt&&Jt&&e.texStorage2D(i.TEXTURE_2D,St,bt,Nt[0].width,Nt[0].height);for(let it=0,wt=Nt.length;it<wt;it++)yt=Nt[it],Gt?F&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,yt.width,yt.height,Mt,zt,yt.data):e.texImage2D(i.TEXTURE_2D,it,bt,yt.width,yt.height,0,Mt,zt,yt.data);_.generateMipmaps=!1}else Gt?(Jt&&e.texStorage2D(i.TEXTURE_2D,St,bt,ot.width,ot.height),F&&nt(_,ot,Mt,zt)):e.texImage2D(i.TEXTURE_2D,0,bt,ot.width,ot.height,0,Mt,zt,ot.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Gt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,bt,Nt[0].width,Nt[0].height,ot.depth);for(let it=0,wt=Nt.length;it<wt;it++)if(yt=Nt[it],_.format!==Hn)if(Mt!==null)if(Gt){if(F)if(_.layerUpdates.size>0){let Pt=yu(yt.width,yt.height,_.format,_.type);for(let lt of _.layerUpdates){let Vt=yt.data.subarray(lt*Pt/yt.data.BYTES_PER_ELEMENT,(lt+1)*Pt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,lt,yt.width,yt.height,1,Mt,Vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,yt.width,yt.height,ot.depth,Mt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,bt,yt.width,yt.height,ot.depth,0,yt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,yt.width,yt.height,ot.depth,Mt,zt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,bt,yt.width,yt.height,ot.depth,0,Mt,zt,yt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Gt&&Jt&&e.texStorage2D(i.TEXTURE_2D,St,bt,Nt[0].width,Nt[0].height);for(let it=0,wt=Nt.length;it<wt;it++)yt=Nt[it],_.format!==Hn?Mt!==null?Gt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,yt.width,yt.height,Mt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,bt,yt.width,yt.height,0,yt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?F&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,yt.width,yt.height,Mt,zt,yt.data):e.texImage2D(i.TEXTURE_2D,it,bt,yt.width,yt.height,0,Mt,zt,yt.data)}else if(_.isDataArrayTexture)if(Gt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,bt,ot.width,ot.height,ot.depth),F)if(_.layerUpdates.size>0){let it=yu(ot.width,ot.height,_.format,_.type);for(let wt of _.layerUpdates){let Pt=ot.data.subarray(wt*it/ot.data.BYTES_PER_ELEMENT,(wt+1)*it/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,ot.width,ot.height,1,Mt,zt,Pt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Mt,zt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,ot.width,ot.height,ot.depth,0,Mt,zt,ot.data);else if(_.isData3DTexture)Gt?(Jt&&e.texStorage3D(i.TEXTURE_3D,St,bt,ot.width,ot.height,ot.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Mt,zt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,bt,ot.width,ot.height,ot.depth,0,Mt,zt,ot.data);else if(_.isFramebufferTexture){if(Jt)if(Gt)e.texStorage2D(i.TEXTURE_2D,St,bt,ot.width,ot.height);else{let it=ot.width,wt=ot.height;for(let Pt=0;Pt<St;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,bt,it,wt,0,Mt,zt,null),it>>=1,wt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),ot.parentNode!==it){it.appendChild(ot),d.add(_),it.onpaint=wt=>{let Pt=wt.changedElements;for(let lt of d)Pt.includes(lt.image)&&(lt.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ot);else{let Pt=i.RGBA,lt=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pt,lt,Vt,ot)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Gt&&Jt){let it=ee(Nt[0]);e.texStorage2D(i.TEXTURE_2D,St,bt,it.width,it.height)}for(let it=0,wt=Nt.length;it<wt;it++)yt=Nt[it],Gt?F&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Mt,zt,yt):e.texImage2D(i.TEXTURE_2D,it,bt,Mt,zt,yt);_.generateMipmaps=!1}else if(Gt){if(Jt){let it=ee(ot);e.texStorage2D(i.TEXTURE_2D,St,bt,it.width,it.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,zt,ot)}else e.texImage2D(i.TEXTURE_2D,0,bt,Mt,zt,ot);g(_)&&b(G),vt.__version=ft.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Bt(C,_,B){if(_.image.length!==6)return;let G=le(C,_),J=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);let ft=n.get(J);if(J.version!==ft.__version||G===!0){e.activeTexture(i.TEXTURE0+B);let vt=ce.getPrimaries(ce.workingColorSpace),Q=_.colorSpace===bi?null:ce.getPrimaries(_.colorSpace),ot=_.colorSpace===bi||vt===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let Mt=_.isCompressedTexture||_.image[0].isCompressedTexture,zt=_.image[0]&&_.image[0].isDataTexture,bt=[];for(let lt=0;lt<6;lt++)!Mt&&!zt?bt[lt]=m(_.image[lt],!0,s.maxCubemapSize):bt[lt]=zt?_.image[lt].image:_.image[lt],bt[lt]=xe(_,bt[lt]);let yt=bt[0],Nt=r.convert(_.format,_.colorSpace),Gt=r.convert(_.type),Jt=v(_.internalFormat,Nt,Gt,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,St=ft.__version===void 0||G===!0,it=J.dataReady,wt=M(_,yt);te(i.TEXTURE_CUBE_MAP,_);let Pt;if(Mt){F&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Jt,yt.width,yt.height);for(let lt=0;lt<6;lt++){Pt=bt[lt].mipmaps;for(let Vt=0;Vt<Pt.length;Vt++){let Ft=Pt[Vt];_.format!==Hn?Nt!==null?F?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,0,0,Ft.width,Ft.height,Nt,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,Jt,Ft.width,Ft.height,0,Ft.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,0,0,Ft.width,Ft.height,Nt,Gt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,Jt,Ft.width,Ft.height,0,Nt,Gt,Ft.data)}}}else{if(Pt=_.mipmaps,F&&St){Pt.length>0&&wt++;let lt=ee(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Jt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(zt){F?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,bt[lt].width,bt[lt].height,Nt,Gt,bt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Jt,bt[lt].width,bt[lt].height,0,Nt,Gt,bt[lt].data);for(let Vt=0;Vt<Pt.length;Vt++){let Ne=Pt[Vt].image[lt].image;F?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,0,0,Ne.width,Ne.height,Nt,Gt,Ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,Jt,Ne.width,Ne.height,0,Nt,Gt,Ne.data)}}else{F?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Nt,Gt,bt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Jt,Nt,Gt,bt[lt]);for(let Vt=0;Vt<Pt.length;Vt++){let Ft=Pt[Vt];F?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,0,0,Nt,Gt,Ft.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,Jt,Nt,Gt,Ft.image[lt])}}}g(_)&&b(i.TEXTURE_CUBE_MAP),ft.__version=J.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Ct(C,_,B,G,J,ft){let vt=r.convert(B.format,B.colorSpace),Q=r.convert(B.type),ot=v(B.internalFormat,vt,Q,B.normalized,B.colorSpace),Mt=n.get(_),zt=n.get(B);if(zt.__renderTarget=_,!Mt.__hasExternalTextures){let bt=Math.max(1,_.width>>ft),yt=Math.max(1,_.height>>ft);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,ft,ot,bt,yt,_.depth,0,vt,Q,null):e.texImage2D(J,ft,ot,bt,yt,0,vt,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Zt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,J,zt.__webglTexture,0,qt(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,J,zt.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(C,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){let G=_.depthTexture,J=G&&G.isDepthTexture?G.type:null,ft=T(_.stencilBuffer,J),vt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Zt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(_),ft,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(_),ft,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ft,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,C)}else{let G=_.textures;for(let J=0;J<G.length;J++){let ft=G[J],vt=r.convert(ft.format,ft.colorSpace),Q=r.convert(ft.type),ot=v(ft.internalFormat,vt,Q,ft.normalized,ft.colorSpace);Zt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(_),ot,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(_),ot,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ot,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(C,_,B){let G=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",I)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),te(i.TEXTURE_CUBE_MAP,_.depthTexture);let Mt=r.convert(_.depthTexture.format),zt=r.convert(_.depthTexture.type),bt;_.depthTexture.format===Di?bt=i.DEPTH_COMPONENT24:_.depthTexture.format===Bi&&(bt=i.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,bt,_.width,_.height,0,Mt,zt,null)}}else st(_.depthTexture,0);let ft=J.__webglTexture,vt=qt(_),Q=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ot=_.depthTexture.format===Bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Di)Zt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,Q,ft,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,ot,Q,ft,0);else if(_.depthTexture.format===Bi)Zt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,Q,ft,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,ot,Q,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(C){let _=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=G}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)ve(_.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?ve(_.__webglFramebuffer[0],C,0):ve(_.__webglFramebuffer,C,0)}else if(B){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=i.createRenderbuffer(),Xt(_.__webglDepthbuffer[G],C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=_.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ft)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Xt(_.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ft)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(C,_,B){let G=n.get(C);_!==void 0&&Ct(G.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&rt(C)}function ut(C){let _=C.texture,B=n.get(C),G=n.get(_);C.addEventListener("dispose",y);let J=C.textures,ft=C.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=_.version,o.memory.textures++),ft){B.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[Q]=[];for(let ot=0;ot<_.mipmaps.length;ot++)B.__webglFramebuffer[Q][ot]=i.createFramebuffer()}else B.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let Q=0;Q<_.mipmaps.length;Q++)B.__webglFramebuffer[Q]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(vt)for(let Q=0,ot=J.length;Q<ot;Q++){let Mt=n.get(J[Q]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Zt(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){let ot=J[Q];B.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Q]);let Mt=r.convert(ot.format,ot.colorSpace),zt=r.convert(ot.type),bt=v(ot.internalFormat,Mt,zt,ot.normalized,ot.colorSpace,C.isXRRenderTarget===!0),yt=qt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,bt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,B.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),te(i.TEXTURE_CUBE_MAP,_);for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0)for(let ot=0;ot<_.mipmaps.length;ot++)Ct(B.__webglFramebuffer[Q][ot],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot);else Ct(B.__webglFramebuffer[Q],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);g(_)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let Q=0,ot=J.length;Q<ot;Q++){let Mt=J[Q],zt=n.get(Mt),bt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(bt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,zt.__webglTexture),te(bt,Mt),Ct(B.__webglFramebuffer,C,Mt,i.COLOR_ATTACHMENT0+Q,bt,0),g(Mt)&&b(bt)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,G.__webglTexture),te(Q,_),_.mipmaps&&_.mipmaps.length>0)for(let ot=0;ot<_.mipmaps.length;ot++)Ct(B.__webglFramebuffer[ot],C,_,i.COLOR_ATTACHMENT0,Q,ot);else Ct(B.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,Q,0);g(_)&&b(Q),e.unbindTexture()}C.depthBuffer&&rt(C)}function dt(C){let _=C.textures;for(let B=0,G=_.length;B<G;B++){let J=_[B];if(g(J)){let ft=w(C),vt=n.get(J).__webglTexture;e.bindTexture(ft,vt),b(ft),e.unbindTexture()}}}let gt=[],Wt=[];function Ht(C){if(C.samples>0){if(Zt(C)===!1){let _=C.textures,B=C.width,G=C.height,J=i.COLOR_BUFFER_BIT,ft=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(C),Q=_.length>1;if(Q)for(let Mt=0;Mt<_.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);let ot=C.texture.mipmaps;ot&&ot.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Mt=0;Mt<_.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Mt]);let zt=n.get(_[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,B,G,0,0,B,G,J,i.NEAREST),l===!0&&(gt.length=0,Wt.length=0,gt.push(i.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(gt.push(ft),Wt.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let Mt=0;Mt<_.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Mt]);let zt=n.get(_[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function qt(C){return Math.min(s.maxSamples,C.samples)}function Zt(C){let _=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(C){let _=o.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function xe(C,_){let B=C.colorSpace,G=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==go&&B!==bi&&(ce.getTransfer(B)===_e?(G!==Hn||J!==Sn)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",B)),_}function ee(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=O,this.setTexture2D=st,this.setTexture2DArray=H,this.setTexture3D=tt,this.setTextureCube=et,this.rebindTextures=ct,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function s_(i,t){function e(n,s=bi){let r,o=ce.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===Hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===au)return i.BYTE;if(n===lu)return i.SHORT;if(n===Ur)return i.UNSIGNED_SHORT;if(n===Bl)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===Je)return i.HALF_FLOAT;if(n===uu)return i.ALPHA;if(n===du)return i.RGB;if(n===Hn)return i.RGBA;if(n===Di)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===Vl)return i.RED;if(n===Wl)return i.RED_INTEGER;if(n===As)return i.RG;if(n===Xl)return i.RG_INTEGER;if(n===ql)return i.RGBA_INTEGER;if(n===Qo||n===ta||n===ea||n===na)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yl||n===$l||n===Zl||n===Jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kl||n===jl||n===Ql||n===tc||n===ec||n===ia||n===nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kl||n===jl)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ql)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===tc)return r.COMPRESSED_R11_EAC;if(n===ec)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ia)return r.COMPRESSED_RG11_EAC;if(n===nc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ic)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xc||n===vc||n===yc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xc)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_c||n===bc||n===sa||n===Mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var r_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ao(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new De({vertexShader:r_,fragmentShader:o_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new Dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ou=class extends Li{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new zu,g={},b=e.getContextAttributes(),w=null,v=null,T=[],M=[],I=new Y,y=null,E=null,A=new pn;A.viewport=new Ce;let P=new pn;P.viewport=new Ce;let D=[A,P],z=new Ll,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=T[Z];return nt===void 0&&(nt=new Rr,T[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=T[Z];return nt===void 0&&(nt=new Rr,T[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=T[Z];return nt===void 0&&(nt=new Rr,T[Z]=nt),nt.getHandSpace()};function q(Z){let nt=M.indexOf(Z.inputSource);if(nt===-1)return;let xt=T[nt];xt!==void 0&&(xt.update(Z.inputSource,Z.frame,c||o),xt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",st);for(let Z=0;Z<T.length;Z++){let nt=M[Z];nt!==null&&(M[Z]=null,T[Z].disconnect(nt))}L=null,O=null,m.reset();for(let Z in g)delete g[Z];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,v=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(I.width,I.height,!1),E!==null){let Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",st),b.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Bt=null,Ct=null;b.depth&&(Ct=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=b.stencil?Bi:Di,Bt=b.stencil?Rs:_i);let Xt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new He(u.textureWidth,u.textureHeight,{format:Hn,type:Sn,depthTexture:new Fi(u.textureWidth,u.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new He(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(Z){for(let nt=0;nt<Z.removed.length;nt++){let xt=Z.removed[nt],Bt=M.indexOf(xt);Bt>=0&&(M[Bt]=null,T[Bt].disconnect(xt))}for(let nt=0;nt<Z.added.length;nt++){let xt=Z.added[nt],Bt=M.indexOf(xt);if(Bt===-1){for(let Xt=0;Xt<T.length;Xt++)if(Xt>=M.length){M.push(xt),Bt=Xt;break}else if(M[Xt]===null){M[Xt]=xt,Bt=Xt;break}if(Bt===-1)break}let Ct=T[Bt];Ct&&Ct.connect(xt)}}let H=new R,tt=new R;function et(Z,nt,xt){H.setFromMatrixPosition(nt.matrixWorld),tt.setFromMatrixPosition(xt.matrixWorld);let Bt=H.distanceTo(tt),Ct=nt.projectionMatrix.elements,Xt=xt.projectionMatrix.elements,ve=Ct[14]/(Ct[10]-1),rt=Ct[14]/(Ct[10]+1),ct=(Ct[9]+1)/Ct[5],ut=(Ct[9]-1)/Ct[5],dt=(Ct[8]-1)/Ct[0],gt=(Xt[8]+1)/Xt[0],Wt=ve*dt,Ht=ve*gt,qt=Bt/(-dt+gt),Zt=qt*-dt;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Zt),Z.translateZ(qt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ct[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let N=ve+qt,xe=rt+qt,ee=Wt-Zt,C=Ht+(Bt-Zt),_=ct*rt/xe*N,B=ut*rt/xe*N;Z.projectionMatrix.makePerspective(ee,C,_,B,N,xe),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function At(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let nt=Z.near,xt=Z.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),z.near=P.near=A.near=nt,z.far=P.far=A.far=xt,(L!==z.near||O!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,O=z.far),z.layers.mask=Z.layers.mask|6,A.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;let Bt=Z.parent,Ct=z.cameras;At(z,Bt);for(let Xt=0;Xt<Ct.length;Xt++)At(Ct[Xt],Bt);Ct.length===2?et(z,A,P):z.projectionMatrix.copy(A.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),It(Z,z,Bt)};function It(Z,nt,xt){xt===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(xt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=cl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Z){return g[Z]};let fe=null;function te(Z,nt){if(h=nt.getViewerPose(c||o),p=nt,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Bt=!1;xt.length!==z.cameras.length&&(z.cameras.length=0,Bt=!0);for(let rt=0;rt<xt.length;rt++){let ct=xt[rt],ut=null;if(f!==null)ut=f.getViewport(ct);else{let gt=d.getViewSubImage(u,ct);ut=gt.viewport,rt===0&&(t.setRenderTargetTextures(v,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(v))}let dt=D[rt];dt===void 0&&(dt=new pn,dt.layers.enable(rt),dt.viewport=new Ce,D[rt]=dt),dt.matrix.fromArray(ct.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ct.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(ut.x,ut.y,ut.width,ut.height),rt===0&&(z.matrix.copy(dt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Bt===!0&&z.cameras.push(dt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let rt=d.getDepthInformation(xt[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,s.renderState)}if(Ct&&Ct.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let rt=0;rt<xt.length;rt++){let ct=xt[rt].camera;if(ct){let ut=g[ct];ut||(ut=new Ao,g[ct]=ut);let dt=d.getCameraImage(ct);ut.sourceTexture=dt}}}}for(let xt=0;xt<T.length;xt++){let Bt=M[xt],Ct=T[xt];Bt!==null&&Ct!==void 0&&Ct.update(Bt,nt,c||o)}fe&&fe(Z,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),p=null}let le=new y0;le.setAnimationLoop(te),this.setAnimationLoop=function(Z){fe=Z},this.dispose=function(){}}},a_=new me,T0=new jt;T0.set(-1,0,0,0,1,0,0,0,1);function l_(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,gu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,b,w,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,b,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===gn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===gn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b=t.get(g),w=b.envMap,v=b.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(a_.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(T0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=w*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===gn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let b=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function c_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let M=T.program;n.uniformBlockBinding(v,M)}function c(v,T){let M=s[v.id];M===void 0&&(m(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",b));let I=T.program;n.updateUBOMapping(v,I);let y=t.render.frame;r[v.id]!==y&&(u(v),r[v.id]=y)}function h(v){let T=d();v.__bindingPointIndex=T;let M=i.createBuffer(),I=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,I,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let T=s[v.id],M=v.uniforms,I=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let y=0,E=M.length;y<E;y++){let A=M[y];if(Array.isArray(A))for(let P=0,D=A.length;P<D;P++)f(A[P],y,P,I);else f(A,y,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,T,M,I){if(x(v,T,M,I)===!0){let y=v.__offset,E=v.value;if(Array.isArray(E)){let A=0;for(let P=0;P<E.length;P++){let D=E[P],z=g(D);p(D,v.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function p(v,T,M){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,M)}function x(v,T,M,I){let y=v.value,E=T+"_"+M;if(I[E]===void 0)return typeof y=="number"||typeof y=="boolean"?I[E]=y:ArrayBuffer.isView(y)?I[E]=y.slice():I[E]=y.clone(),!0;{let A=I[E];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return I[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function m(v){let T=v.uniforms,M=0,I=16;for(let E=0,A=T.length;E<A;E++){let P=Array.isArray(T[E])?T[E]:[T[E]];for(let D=0,z=P.length;D<z;D++){let L=P[D],O=Array.isArray(L.value)?L.value:[L.value];for(let q=0,X=O.length;q<X;q++){let st=O[q],H=g(st),tt=M%I,et=tt%H.boundary,At=tt+et;M+=et,At!==0&&I-At<H.storage&&(M+=I-At),L.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=H.storage}}}let y=M%I;return y>0&&(M+=I-y),v.__size=M,v.__cache={},this}function g(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",v),T}function b(v){let T=v.target;T.removeEventListener("dispose",b);let M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}var h_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hi=null;function u_(){return Hi===null&&(Hi=new ss(h_,16,16,As,Je),Hi.name="DFG_LUT",Hi.minFilter=mn,Hi.magFilter=mn,Hi.wrapS=qn,Hi.wrapT=qn,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}var Ac=class{constructor(t={}){let{canvas:e=Bf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Sn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([ql,Xl,Wl]),g=new Set([Sn,_i,Ur,Rs,Hl,Gl]),b=new Uint32Array(4),w=new Int32Array(4),v=new R,T=null,M=null,I=[],y=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,D=null,z=null,L=null,O=null;this._outputColorSpace=Xe;let q=0,X=0,st=null,H=-1,tt=null,et=new Ce,At=new Ce,It=null,fe=new pt(0),te=0,le=e.width,Z=e.height,nt=1,xt=null,Bt=null,Ct=new Ce(0,0,le,Z),Xt=new Ce(0,0,le,Z),ve=!1,rt=new Ar,ct=!1,ut=!1,dt=new me,gt=new R,Wt=new Ce,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Zt(){return st===null?nt:1}let N=n;function xe(S,U){return e.getContext(S,U)}let ee,C,_,B,G,J,ft,vt,Q,ot,Mt,zt,bt,yt,Nt,Gt,Jt,F,St,it,wt,Pt,lt;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",ci,!1),N===null){let U="webgl2";if(N=xe(U,S),N===null)throw xe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(S){throw e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",ci,!1),Yt("WebGLRenderer: "+S.message),S}function Vt(){ee=new vy(N),ee.init(),wt=new s_(N,ee),C=new ly(N,ee,t,wt),_=new n_(N,ee),C.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),z=N.createFramebuffer(),L=N.createFramebuffer(),O=N.createFramebuffer(),B=new by(N),G=new G1,J=new i_(N,ee,_,G,C,wt,B),ft=new xy(A),vt=new Sg(N),Pt=new oy(N,vt),Q=new yy(N,vt,B,Pt),ot=new Sy(N,Q,vt,Pt,B),F=new My(N,C,J),Nt=new cy(G),Mt=new H1(A,ft,ee,C,Pt,Nt),zt=new l_(A,G),bt=new W1,yt=new J1(ee),Jt=new ry(A,ft,_,ot,p,l),Gt=new e_(A,ot,C),lt=new c_(N,B,C,_),St=new ay(N,ee,B),it=new _y(N,ee,B),B.programs=Mt.programs,A.capabilities=C,A.extensions=ee,A.properties=G,A.renderLists=bt,A.shadowMap=Gt,A.state=_,A.info=B}x!==Sn&&(E=new Ty(x,e.width,e.height,a,s,r));let Ft=new Ou(A,N);this.xr=Ft,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=ee.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ee.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(S){S!==void 0&&(nt=S,this.setSize(le,Z,!1))},this.getSize=function(S){return S.set(le,Z)},this.setSize=function(S,U,$=!0){if(Ft.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}le=S,Z=U,e.width=Math.floor(S*nt),e.height=Math.floor(U*nt),$===!0&&(e.style.width=S+"px",e.style.height=U+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(le*nt,Z*nt).floor()},this.setDrawingBufferSize=function(S,U,$){le=S,Z=U,nt=$,e.width=Math.floor(S*$),e.height=Math.floor(U*$),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(x===Sn){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(et)},this.getViewport=function(S){return S.copy(Ct)},this.setViewport=function(S,U,$,V){S.isVector4?Ct.set(S.x,S.y,S.z,S.w):Ct.set(S,U,$,V),_.viewport(et.copy(Ct).multiplyScalar(nt).round())},this.getScissor=function(S){return S.copy(Xt)},this.setScissor=function(S,U,$,V){S.isVector4?Xt.set(S.x,S.y,S.z,S.w):Xt.set(S,U,$,V),_.scissor(At.copy(Xt).multiplyScalar(nt).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(S){_.setScissorTest(ve=S)},this.setOpaqueSort=function(S){xt=S},this.setTransparentSort=function(S){Bt=S},this.getClearColor=function(S){return S.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,$=!0){let V=0;if(S){let W=!1;if(st!==null){let Rt=st.texture.format;W=m.has(Rt)}if(W){let Rt=st.texture.type,Lt=g.has(Rt),Et=Jt.getClearColor(),Ut=Jt.getClearAlpha(),Ot=Et.r,ie=Et.g,de=Et.b;Lt?(b[0]=Ot,b[1]=ie,b[2]=de,b[3]=Ut,N.clearBufferuiv(N.COLOR,0,b)):(w[0]=Ot,w[1]=ie,w[2]=de,w[3]=Ut,N.clearBufferiv(N.COLOR,0,w))}else V|=N.COLOR_BUFFER_BIT}U&&(V|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),D=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",ci,!1),Jt.dispose(),bt.dispose(),yt.dispose(),G.dispose(),ft.dispose(),ot.dispose(),Pt.dispose(),lt.dispose(),Mt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Md),Ft.removeEventListener("sessionend",Sd),Ps.stop()};function Ne(S){S.preventDefault(),yo("WebGLRenderer: Context Lost."),P=!0}function Me(){yo("WebGLRenderer: Context Restored."),P=!1;let S=B.autoReset,U=Gt.enabled,$=Gt.autoUpdate,V=Gt.needsUpdate,W=Gt.type;Vt(),B.autoReset=S,Gt.enabled=U,Gt.autoUpdate=$,Gt.needsUpdate=V,Gt.type=W}function ci(S){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ri(S){let U=S.target;U.removeEventListener("dispose",Ri),sm(U)}function sm(S){rm(S),G.remove(S)}function rm(S){let U=G.get(S).programs;U!==void 0&&(U.forEach(function($){Mt.releaseProgram($)}),S.isShaderMaterial&&Mt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,$,V,W,Rt){U===null&&(U=Ht);let Lt=W.isMesh&&W.matrixWorld.determinantAffine()<0,Et=lm(S,U,$,V,W);_.setMaterial(V,Lt);let Ut=$.index,Ot=1;if(V.wireframe===!0){if(Ut=Q.getWireframeAttribute($),Ut===void 0)return;Ot=2}let ie=$.drawRange,de=$.attributes.position,kt=ie.start*Ot,Se=(ie.start+ie.count)*Ot;Rt!==null&&(kt=Math.max(kt,Rt.start*Ot),Se=Math.min(Se,(Rt.start+Rt.count)*Ot)),Ut!==null?(kt=Math.max(kt,0),Se=Math.min(Se,Ut.count)):de!=null&&(kt=Math.max(kt,0),Se=Math.min(Se,de.count));let en=Se-kt;if(en<0||en===1/0)return;Pt.setup(W,V,Et,$,Ut);let Oe,Pe=St;if(Ut!==null&&(Oe=vt.get(Ut),Pe=it,Pe.setIndex(Oe)),W.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*Zt()),Pe.setMode(N.LINES)):Pe.setMode(N.TRIANGLES);else if(W.isLine){let yn=V.linewidth;yn===void 0&&(yn=1),_.setLineWidth(yn*Zt()),W.isLineSegments?Pe.setMode(N.LINES):W.isLineLoop?Pe.setMode(N.LINE_LOOP):Pe.setMode(N.LINE_STRIP)}else W.isPoints?Pe.setMode(N.POINTS):W.isSprite&&Pe.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))Pe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let yn=W._multiDrawStarts,Dt=W._multiDrawCounts,Rn=W._multiDrawCount,ye=Ut?vt.get(Ut).bytesPerElement:1,jn=G.get(V).currentProgram.getUniforms();for(let Ai=0;Ai<Rn;Ai++)jn.setValue(N,"_gl_DrawID",Ai),Pe.render(yn[Ai]/ye,Dt[Ai])}else if(W.isInstancedMesh)Pe.renderInstances(kt,en,W.count);else if($.isInstancedBufferGeometry){let yn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Dt=Math.min($.instanceCount,yn);Pe.renderInstances(kt,en,Dt)}else Pe.render(kt,en)};function bd(S,U,$,V){D!==null&&S.isNodeMaterial&&D.setObject(V,S),ct===!0&&Nt.setState(S,$,!1),S.transparent===!0&&S.side===ke&&S.forceSinglePass===!1?(S.side=gn,S.needsUpdate=!0,Ra(S,U,V),S.side=Bn,S.needsUpdate=!0,Ra(S,U,V),S.side=ke):Ra(S,U,V)}this.compile=function(S,U,$=null){$===null&&($=S),D!==null&&D.renderStart(S,U,$),M=yt.get($),M.init(U),y.push(M),$.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),S!==$&&S.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights(),D!==null&&D.updateLights(M.state.lightsArray),ut=this.localClippingEnabled,ct=Nt.init(this.clippingPlanes,ut),ct===!0&&Nt.setGlobalState(this.clippingPlanes,U),D!==null&&Gt.render(M.state.shadowsArray,$,U);let V=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Rt=W.material;if(Rt)if(Array.isArray(Rt))for(let Lt=0;Lt<Rt.length;Lt++){let Et=Rt[Lt];bd(Et,$,U,W),V.add(Et)}else bd(Rt,$,U,W),V.add(Rt)}),M=y.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(S,U,$=null){let V=this.compile(S,U,$);return new Promise(W=>{function Rt(){if(V.forEach(function(Lt){let Ut=G.get(Lt).currentProgram;(Ut===void 0||Ut.isReady())&&V.delete(Lt)}),V.size===0){W(S);return}setTimeout(Rt,10)}ee.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let ph=null;function om(S){ph&&ph(S)}function Md(){Ps.stop()}function Sd(){Ps.start()}let Ps=new y0;Ps.setAnimationLoop(om),typeof self<"u"&&Ps.setContext(self),this.setAnimationLoop=function(S){ph=S,Ft.setAnimationLoop(S),S===null?Ps.stop():Ps.start()},Ft.addEventListener("sessionstart",Md),Ft.addEventListener("sessionend",Sd),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(S,U);let $=Ft.enabled===!0&&Ft.isPresenting===!0,V=E!==null&&(st===null||$)&&E.begin(A,st);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(U),U=Ft.getCamera()),S.isScene===!0&&S.onBeforeRender(A,S,U,st),M=yt.get(S,y.length),M.init(U),M.state.textureUnits=J.getTextureUnits(),y.push(M),dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),rt.setFromProjectionMatrix(dt,fi,U.reversedDepth),ut=this.localClippingEnabled,ct=Nt.init(this.clippingPlanes,ut),T=bt.get(S,I.length),T.init(),I.push(T),Ft.enabled===!0&&Ft.isPresenting===!0){let Lt=A.xr.getDepthSensingMesh();Lt!==null&&mh(Lt,U,-1/0,A.sortObjects)}mh(S,U,0,A.sortObjects),T.finish(),D!==null&&D.updateLights(M.state.lightsArray),A.sortObjects===!0&&T.sort(xt,Bt),qt=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,qt&&Jt.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Nt.beginShadows();let W=M.state.shadowsArray;if(Gt.render(W,S,U),ct===!0&&Nt.endShadows(),(V&&E.hasRenderPass())===!1){let Lt=T.opaque,Et=T.transmissive;if(M.setupLights(),U.isArrayCamera){let Ut=U.cameras;if(Et.length>0)for(let Ot=0,ie=Ut.length;Ot<ie;Ot++){let de=Ut[Ot];Td(Lt,Et,S,de)}qt&&Jt.render(S);for(let Ot=0,ie=Ut.length;Ot<ie;Ot++){let de=Ut[Ot];wd(T,S,de,de.viewport)}}else Et.length>0&&Td(Lt,Et,S,U),qt&&Jt.render(S),wd(T,S,U)}st!==null&&X===0&&(J.updateMultisampleRenderTarget(st),J.updateRenderTargetMipmap(st)),V&&E.end(A),S.isScene===!0&&S.onAfterRender(A,S,U),Pt.resetDefaultState(),H=-1,tt=null,y.pop(),y.length>0?(M=y[y.length-1],J.setTextureUnits(M.state.textureUnits),ct===!0&&Nt.setGlobalState(A.clippingPlanes,M.state.camera)):M=null,I.pop(),I.length>0?T=I[I.length-1]:T=null,D!==null&&D.renderEnd()};function mh(S,U,$,V){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)M.pushLightProbeGrid(S);else if(S.isLight)M.pushLight(S),S.castShadow&&M.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(rt)){V&&Wt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(dt);let Lt=ot.update(S),Et=S.material;Et.visible&&T.push(S,Lt,Et,$,Wt.z,null,U)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(rt))){let Lt=ot.update(S),Et=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Wt.copy(S.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Wt.copy(Lt.boundingSphere.center)),Wt.applyMatrix4(S.matrixWorld).applyMatrix4(dt)),Array.isArray(Et)){let Ut=Lt.groups;for(let Ot=0,ie=Ut.length;Ot<ie;Ot++){let de=Ut[Ot],kt=Et[de.materialIndex];kt&&kt.visible&&T.push(S,Lt,kt,$,Wt.z,de,U)}}else Et.visible&&T.push(S,Lt,Et,$,Wt.z,null,U)}}let Rt=S.children;for(let Lt=0,Et=Rt.length;Lt<Et;Lt++)mh(Rt[Lt],U,$,V)}function wd(S,U,$,V){let{opaque:W,transmissive:Rt,transparent:Lt}=S;M.setupLightsView($),ct===!0&&Nt.setGlobalState(A.clippingPlanes,$),V&&_.viewport(et.copy(V)),W.length>0&&Ea(W,U,$),Rt.length>0&&Ea(Rt,U,$),Lt.length>0&&Ea(Lt,U,$),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Td(S,U,$,V){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[V.id]===void 0){let kt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[V.id]=new He(1,1,{generateMipmaps:!0,type:kt?Je:Sn,minFilter:Oi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let Rt=M.state.transmissionRenderTarget[V.id],Lt=V.viewport||et;Rt.setSize(Lt.z*A.transmissionResolutionScale,Lt.w*A.transmissionResolutionScale);let Et=A.getRenderTarget(),Ut=A.getActiveCubeFace(),Ot=A.getActiveMipmapLevel();A.setRenderTarget(Rt),A.getClearColor(fe),te=A.getClearAlpha(),te<1&&A.setClearColor(16777215,.5),A.clear(),qt&&Jt.render($);let ie=A.toneMapping;A.toneMapping=yi;let de=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),M.setupLightsView(V),ct===!0&&Nt.setGlobalState(A.clippingPlanes,V),Ea(S,$,V),J.updateMultisampleRenderTarget(Rt),J.updateRenderTargetMipmap(Rt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Se=0,en=U.length;Se<en;Se++){let Oe=U[Se],{object:Pe,geometry:yn,material:Dt,group:Rn}=Oe;if(Dt.side===ke&&Pe.layers.test(V.layers)){let ye=Dt.side;Dt.side=gn,Dt.needsUpdate=!0,Ed(Pe,$,V,yn,Dt,Rn),Dt.side=ye,Dt.needsUpdate=!0,kt=!0}}kt===!0&&(J.updateMultisampleRenderTarget(Rt),J.updateRenderTargetMipmap(Rt))}A.setRenderTarget(Et,Ut,Ot),A.setClearColor(fe,te),de!==void 0&&(V.viewport=de),A.toneMapping=ie}function Ea(S,U,$){let V=U.isScene===!0?U.overrideMaterial:null;for(let W=0,Rt=S.length;W<Rt;W++){let Lt=S[W],{object:Et,geometry:Ut,group:Ot}=Lt,ie=Lt.material;ie.allowOverride===!0&&V!==null&&(ie=V),Et.layers.test($.layers)&&Ed(Et,U,$,Ut,ie,Ot)}}function Ed(S,U,$,V,W,Rt){D!==null&&W.isNodeMaterial&&D.setObject(S,W),S.onBeforeRender(A,U,$,V,W,Rt),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(A,U,$,V,S,Rt),W.transparent===!0&&W.side===ke&&W.forceSinglePass===!1?(W.side=gn,W.needsUpdate=!0,A.renderBufferDirect($,U,V,W,S,Rt),W.side=Bn,W.needsUpdate=!0,A.renderBufferDirect($,U,V,W,S,Rt),W.side=ke):A.renderBufferDirect($,U,V,W,S,Rt),S.onAfterRender(A,U,$,V,W,Rt)}function Ra(S,U,$){U.isScene!==!0&&(U=Ht);let V=G.get(S),W=M.state.lights,Rt=M.state.shadowsArray,Lt=W.state.version,Et=Mt.getParameters(S,W.state,Rt,U,$,M.state.lightProbeGridArray),Ut=Mt.getProgramCacheKey(Et),Ot=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let ie=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=ft.get(S.envMap||V.environment,ie),V.envMapRotation=V.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ot===void 0&&(S.addEventListener("dispose",Ri),Ot=new Map,V.programs=Ot);let de=Ot.get(Ut);if(de!==void 0){if(V.currentProgram===de&&V.lightsStateVersion===Lt)return Ad(S,Et),de}else Et.uniforms=Mt.getUniforms(S),D!==null&&S.isNodeMaterial&&D.build(S,$,Et),S.onBeforeCompile(Et,A),de=Mt.acquireProgram(Et,Ut),Ot.set(Ut,de),V.uniforms=Et.uniforms;let kt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(kt.clippingPlanes=Nt.uniform),Ad(S,Et),V.needsLights=hm(S),V.lightsStateVersion=Lt,V.needsLights&&(kt.ambientLightColor.value=W.state.ambient,kt.lightProbe.value=W.state.probe,kt.sunLights.value=W.state.sun,kt.sunLightShadows.value=W.state.sunShadow,kt.directionalLights.value=W.state.directional,kt.directionalLightShadows.value=W.state.directionalShadow,kt.spotLights.value=W.state.spot,kt.spotLightShadows.value=W.state.spotShadow,kt.rectAreaLights.value=W.state.rectArea,kt.ltc_1.value=W.state.rectAreaLTC1,kt.ltc_2.value=W.state.rectAreaLTC2,kt.pointLights.value=W.state.point,kt.pointLightShadows.value=W.state.pointShadow,kt.hemisphereLights.value=W.state.hemi,kt.sunShadowMatrix.value=W.state.sunShadowMatrix,kt.sunShadowCascade.value=W.state.sunShadowCascade,kt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,kt.spotLightMatrix.value=W.state.spotLightMatrix,kt.spotLightMap.value=W.state.spotLightMap,kt.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=M.state.lightProbeGridArray.length>0,V.currentProgram=de,V.uniformsList=null,de}function Rd(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Or.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Ad(S,U){let $=G.get(S);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function am(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let $=0,V=S.length;$<V;$++){let W=S[$];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function lm(S,U,$,V,W){U.isScene!==!0&&(U=Ht),J.resetTextureUnits();let Rt=U.fog,Lt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,Et=st===null?A.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ce.workingColorSpace,Ut=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ot=ft.get(V.envMap||Lt,Ut),ie=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,de=!!$.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),kt=!!$.morphAttributes.position,Se=!!$.morphAttributes.normal,en=!!$.morphAttributes.color,Oe=yi;V.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Oe=A.toneMapping);let Pe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,yn=Pe!==void 0?Pe.length:0,Dt=G.get(V),Rn=M.state.lights;if(ct===!0&&(ut===!0||S!==tt)){let Ue=S===tt&&V.id===H;Nt.setState(V,S,Ue)}let ye=!1;V.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Rn.state.version||Dt.outputColorSpace!==Et||W.isBatchedMesh&&Dt.batching===!1||!W.isBatchedMesh&&Dt.batching===!0||W.isBatchedMesh&&Dt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Dt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Dt.instancing===!1||!W.isInstancedMesh&&Dt.instancing===!0||W.isSkinnedMesh&&Dt.skinning===!1||!W.isSkinnedMesh&&Dt.skinning===!0||W.isInstancedMesh&&Dt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Dt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Dt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Dt.instancingMorph===!1&&W.morphTexture!==null||Dt.envMap!==Ot||V.fog===!0&&Dt.fog!==Rt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==Nt.numPlanes||Dt.numIntersection!==Nt.numIntersection)||Dt.vertexAlphas!==ie||Dt.vertexTangents!==de||Dt.morphTargets!==kt||Dt.morphNormals!==Se||Dt.morphColors!==en||Dt.toneMapping!==Oe||Dt.morphTargetsCount!==yn||!!Dt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ye=!0):(ye=!0,Dt.__version=V.version);let jn=Dt.currentProgram;ye===!0&&(jn=Ra(V,U,W),D&&V.isNodeMaterial&&D.onUpdateProgram(V,jn,Dt));let Ai=!1,ds=!1,tr=!1,Re=jn.getUniforms(),Ke=Dt.uniforms;if(_.useProgram(jn.program)&&(Ai=!0,ds=!0,tr=!0),V.id!==H&&(H=V.id,ds=!0),Dt.needsLights){let Ue=am(M.state.lightProbeGridArray,W);Dt.lightProbeGrid!==Ue&&(Dt.lightProbeGrid=Ue,ds=!0)}if(Ai||tt!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Re.setValue(N,"projectionMatrix",S.projectionMatrix),Re.setValue(N,"viewMatrix",S.matrixWorldInverse);let ps=Re.map.cameraPosition;ps!==void 0&&ps.setValue(N,gt.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&Re.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Re.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),tt!==S&&(tt=S,ds=!0,tr=!0)}if(Dt.needsLights&&(Rn.state.sunShadowMap.length>0&&Re.setValue(N,"sunShadowMap",Rn.state.sunShadowMap,J),Rn.state.directionalShadowMap.length>0&&Re.setValue(N,"directionalShadowMap",Rn.state.directionalShadowMap,J),Rn.state.spotShadowMap.length>0&&Re.setValue(N,"spotShadowMap",Rn.state.spotShadowMap,J),Rn.state.pointShadowMap.length>0&&Re.setValue(N,"pointShadowMap",Rn.state.pointShadowMap,J)),W.isSkinnedMesh){Re.setOptional(N,W,"bindMatrix"),Re.setOptional(N,W,"bindMatrixInverse");let Ue=W.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Re.setValue(N,"boneTexture",Ue.boneTexture,J))}W.isBatchedMesh&&(Re.setOptional(N,W,"batchingTexture"),Re.setValue(N,"batchingTexture",W._matricesTexture,J),Re.setOptional(N,W,"batchingIdTexture"),Re.setValue(N,"batchingIdTexture",W._indirectTexture,J),Re.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&Re.setValue(N,"batchingColorTexture",W._colorsTexture,J));let fs=$.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0)&&F.update(W,$,jn),(ds||Dt.receiveShadow!==W.receiveShadow)&&(Dt.receiveShadow=W.receiveShadow,Re.setValue(N,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(Ke.envMapIntensity.value=U.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=u_()),ds){if(Re.setValue(N,"toneMappingExposure",A.toneMappingExposure),Dt.needsLights&&cm(Ke,tr),Rt&&V.fog===!0&&zt.refreshFogUniforms(Ke,Rt),zt.refreshMaterialUniforms(Ke,V,nt,Z,M.state.transmissionRenderTarget[S.id]),Dt.needsLights&&Dt.lightProbeGrid){let Ue=Dt.lightProbeGrid;Ke.probesSH.value=Ue.texture,Ke.probesMin.value.copy(Ue.boundingBox.min),Ke.probesMax.value.copy(Ue.boundingBox.max),Ke.probesResolution.value.copy(Ue.resolution)}Or.upload(N,Rd(Dt),Ke,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Or.upload(N,Rd(Dt),Ke,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Re.setValue(N,"center",W.center),Re.setValue(N,"modelViewMatrix",W.modelViewMatrix),Re.setValue(N,"normalMatrix",W.normalMatrix),Re.setValue(N,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let Ue=V.uniformsGroups;for(let ps=0,er=Ue.length;ps<er;ps++){let Pd=Ue[ps];lt.update(Pd,jn),lt.bind(Pd,jn)}}return jn}function cm(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function hm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(S,U,$){let V=G.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=U,G.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:$,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let $=G.get(S);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,$=0){st=S,q=U,X=$;let V=null,W=!1,Rt=!1;if(S){let Et=G.get(S);if(Et.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,Et.__webglFramebuffer),et.copy(S.viewport),At.copy(S.scissor),It=S.scissorTest,_.viewport(et),_.scissor(At),_.setScissorTest(It),H=-1;return}else if(Et.__webglFramebuffer===void 0)J.setupRenderTarget(S);else if(Et.__hasExternalTextures)J.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let ie=S.depthTexture;if(Et.__boundDepthTexture!==ie){if(ie!==null&&G.has(ie)&&(S.width!==ie.image.width||S.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(S)}}let Ut=S.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Rt=!0);let Ot=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ot[U])?V=Ot[U][$]:V=Ot[U],W=!0):S.samples>0&&J.useMultisampledRTT(S)===!1?V=G.get(S).__webglMultisampledFramebuffer:Array.isArray(Ot)?V=Ot[$]:V=Ot,et.copy(S.viewport),At.copy(S.scissor),It=S.scissorTest}else et.copy(Ct).multiplyScalar(nt).floor(),At.copy(Xt).multiplyScalar(nt).floor(),It=ve;if($!==0&&(V=z),_.bindFramebuffer(N.FRAMEBUFFER,V)&&_.drawBuffers(S,V),_.viewport(et),_.scissor(At),_.setScissorTest(It),W){let Et=G.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et.__webglTexture,$)}else if(Rt){let Et=U;for(let Ut=0;Ut<S.textures.length;Ut++){let Ot=G.get(S.textures[Ut]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ut,Ot.__webglTexture,$,Et)}}else if(S!==null&&$!==0){let Et=G.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Et.__webglTexture,$)}H=-1};function Cd(S){let U=G.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=C.textureFormatReadable(S.format),U.__typeReadable=C.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,$,V,W,Rt,Lt,Et=0){if(!(S&&S.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut){_.bindFramebuffer(N.FRAMEBUFFER,Ut);try{let Ot=S.textures[Et],ie=Ot.format,de=Ot.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Et);let kt=Cd(Ot);if(kt.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-V&&$>=0&&$<=S.height-W&&N.readPixels(U,$,V,W,wt.convert(ie),wt.convert(de),Rt)}finally{let Ot=st!==null?G.get(st).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(S,U,$,V,W,Rt,Lt,Et=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut)if(U>=0&&U<=S.width-V&&$>=0&&$<=S.height-W){_.bindFramebuffer(N.FRAMEBUFFER,Ut);let Ot=S.textures[Et],ie=Ot.format,de=Ot.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Et);let kt=Cd(Ot);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Se),N.bufferData(N.PIXEL_PACK_BUFFER,Rt.byteLength,N.STREAM_READ),N.readPixels(U,$,V,W,wt.convert(ie),wt.convert(de),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let en=st!==null?G.get(st).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,en);let Oe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Gf(N,Oe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Se),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Rt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Se),N.deleteSync(Oe),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,$=0){let V=Math.pow(2,-$),W=Math.floor(S.image.width*V),Rt=Math.floor(S.image.height*V),Lt=U!==null?U.x:0,Et=U!==null?U.y:0;J.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,Lt,Et,W,Rt),_.unbindTexture()},this.copyTextureToTexture=function(S,U,$=null,V=null,W=0,Rt=0){let Lt,Et,Ut,Ot,ie,de,kt,Se,en,Oe=S.isCompressedTexture?S.mipmaps[Rt]:S.image;if($!==null)Lt=$.max.x-$.min.x,Et=$.max.y-$.min.y,Ut=$.isBox3?$.max.z-$.min.z:1,Ot=$.min.x,ie=$.min.y,de=$.isBox3?$.min.z:0;else{let Ke=Math.pow(2,-W);Lt=Math.floor(Oe.width*Ke),Et=Math.floor(Oe.height*Ke),S.isDataArrayTexture?Ut=Oe.depth:S.isData3DTexture?Ut=Math.floor(Oe.depth*Ke):Ut=1,Ot=0,ie=0,de=0}V!==null?(kt=V.x,Se=V.y,en=V.z):(kt=0,Se=0,en=0);let Pe=wt.convert(U.format),yn=wt.convert(U.type),Dt;U.isData3DTexture?(J.setTexture3D(U,0),Dt=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),Dt=N.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),Dt=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let Rn=_.getParameter(N.UNPACK_ROW_LENGTH),ye=_.getParameter(N.UNPACK_IMAGE_HEIGHT),jn=_.getParameter(N.UNPACK_SKIP_PIXELS),Ai=_.getParameter(N.UNPACK_SKIP_ROWS),ds=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,Oe.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Oe.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Ot),_.pixelStorei(N.UNPACK_SKIP_ROWS,ie),_.pixelStorei(N.UNPACK_SKIP_IMAGES,de);let tr=S.isDataArrayTexture||S.isData3DTexture,Re=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let Ke=G.get(S),fs=G.get(U),Ue=G.get(Ke.__renderTarget),ps=G.get(fs.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,Ue.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,ps.__webglFramebuffer);for(let er=0;er<Ut;er++)tr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(S).__webglTexture,W,de+er),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(U).__webglTexture,Rt,en+er)),N.blitFramebuffer(Ot,ie,Lt,Et,kt,Se,Lt,Et,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||G.has(S)){let Ke=G.get(S),fs=G.get(U);_.bindFramebuffer(N.READ_FRAMEBUFFER,L),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,O);for(let Ue=0;Ue<Ut;Ue++)tr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ke.__webglTexture,W,de+Ue):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ke.__webglTexture,W),Re?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,fs.__webglTexture,Rt,en+Ue):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,fs.__webglTexture,Rt),W!==0?N.blitFramebuffer(Ot,ie,Lt,Et,kt,Se,Lt,Et,N.COLOR_BUFFER_BIT,N.NEAREST):Re?N.copyTexSubImage3D(Dt,Rt,kt,Se,en+Ue,Ot,ie,Lt,Et):N.copyTexSubImage2D(Dt,Rt,kt,Se,Ot,ie,Lt,Et);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Re?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Dt,Rt,kt,Se,en,Lt,Et,Ut,Pe,yn,Oe.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Dt,Rt,kt,Se,en,Lt,Et,Ut,Pe,Oe.data):N.texSubImage3D(Dt,Rt,kt,Se,en,Lt,Et,Ut,Pe,yn,Oe):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Rt,kt,Se,Lt,Et,Pe,yn,Oe.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Rt,kt,Se,Oe.width,Oe.height,Pe,Oe.data):N.texSubImage2D(N.TEXTURE_2D,Rt,kt,Se,Lt,Et,Pe,yn,Oe);_.pixelStorei(N.UNPACK_ROW_LENGTH,Rn),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ye),_.pixelStorei(N.UNPACK_SKIP_PIXELS,jn),_.pixelStorei(N.UNPACK_SKIP_ROWS,Ai),_.pixelStorei(N.UNPACK_SKIP_IMAGES,ds),Rt===0&&U.generateMipmaps&&N.generateMipmap(Dt),_.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&J.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?J.setTextureCube(S,0):S.isData3DTexture?J.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?J.setTexture2DArray(S,0):J.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){q=0,X=0,st=null,_.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var Vi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},d_=new ws(-1,1,1,-1,0,1),Bu=class extends Ge{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}},f_=new Bu,Wi=class{constructor(t){this._mesh=new mt(f_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,d_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Gr=class extends Nn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof De?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ln.clone(t.uniforms),this.material=new De({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Wi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var la=class extends Nn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ic=class extends Nn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Dc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Y);this._width=n.width,this._height=n.height,e=new He(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Je}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gr(Vi),this.copyPass.material.blending=Qe,this.timer=new Go}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}la!==void 0&&(o instanceof la?n=!0:o instanceof Ic&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Y);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Lc=class extends Nn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new pt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var ca={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Y},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new me},cameraProjectionMatrixInverse:{value:new me},cameraWorldMatrix:{value:new me},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new R(-1,-1,-1)},sceneBoxMax:{value:new R(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},ha={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Nc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function E0(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=p_(t),n=e.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new R(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new ss(s,t,t);return r.wrapS=ti,r.wrapT=ti,r.needsUpdate=!0,r}function p_(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=o++;r++,s--}return n}var ua={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Hu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Y},cameraProjectionMatrixInverse:{value:new me},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Hu(i,t,e){let n=m_(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function m_(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,o=Math.pow(s/(i-1),e);n.push(new R(Math.cos(r),Math.sin(r),o))}return n}var Uc=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,p=t-u,x=e-f,m,g;p>x?(m=1,g=0):(m=0,g=1);let b=p-m+h,w=x-g+h,v=p-1+2*h,T=x-1+2*h,M=l&255,I=c&255,y=this.perm[M+this.perm[I]]%12,E=this.perm[M+m+this.perm[I+g]]%12,A=this.perm[M+1+this.perm[I+1]]%12,P=.5-p*p-x*x;P<0?n=0:(P*=P,n=P*P*this._dot(this.grad3[y],p,x));let D=.5-b*b-w*w;D<0?s=0:(D*=D,s=D*D*this._dot(this.grad3[E],b,w));let z=.5-v*v-T*T;return z<0?r=0:(z*=z,r=z*z*this._dot(this.grad3[A],v,T)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),d=Math.floor(e+c),u=Math.floor(n+c),f=1/6,p=(h+d+u)*f,x=h-p,m=d-p,g=u-p,b=t-x,w=e-m,v=n-g,T,M,I,y,E,A;b>=w?w>=v?(T=1,M=0,I=0,y=1,E=1,A=0):b>=v?(T=1,M=0,I=0,y=1,E=0,A=1):(T=0,M=0,I=1,y=1,E=0,A=1):w<v?(T=0,M=0,I=1,y=0,E=1,A=1):b<v?(T=0,M=1,I=0,y=0,E=1,A=1):(T=0,M=1,I=0,y=1,E=1,A=0);let P=b-T+f,D=w-M+f,z=v-I+f,L=b-y+2*f,O=w-E+2*f,q=v-A+2*f,X=b-1+3*f,st=w-1+3*f,H=v-1+3*f,tt=h&255,et=d&255,At=u&255,It=this.perm[tt+this.perm[et+this.perm[At]]]%12,fe=this.perm[tt+T+this.perm[et+M+this.perm[At+I]]]%12,te=this.perm[tt+y+this.perm[et+E+this.perm[At+A]]]%12,le=this.perm[tt+1+this.perm[et+1+this.perm[At+1]]]%12,Z=.6-b*b-w*w-v*v;Z<0?s=0:(Z*=Z,s=Z*Z*this._dot3(this.grad3[It],b,w,v));let nt=.6-P*P-D*D-z*z;nt<0?r=0:(nt*=nt,r=nt*nt*this._dot3(this.grad3[fe],P,D,z));let xt=.6-L*L-O*O-q*q;xt<0?o=0:(xt*=xt,o=xt*xt*this._dot3(this.grad3[te],L,O,q));let Bt=.6-X*X-st*st-H*H;return Bt<0?a=0:(Bt*=Bt,a=Bt*Bt*this._dot3(this.grad3[le],X,st,H)),32*(s+r+o+a)}noise4d(t,e,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,p,x=(t+e+n+s)*l,m=Math.floor(t+x),g=Math.floor(e+x),b=Math.floor(n+x),w=Math.floor(s+x),v=(m+g+b+w)*c,T=m-v,M=g-v,I=b-v,y=w-v,E=t-T,A=e-M,P=n-I,D=s-y,z=E>A?32:0,L=E>P?16:0,O=A>P?8:0,q=E>D?4:0,X=A>D?2:0,st=P>D?1:0,H=z+L+O+q+X+st,tt=o[H][0]>=3?1:0,et=o[H][1]>=3?1:0,At=o[H][2]>=3?1:0,It=o[H][3]>=3?1:0,fe=o[H][0]>=2?1:0,te=o[H][1]>=2?1:0,le=o[H][2]>=2?1:0,Z=o[H][3]>=2?1:0,nt=o[H][0]>=1?1:0,xt=o[H][1]>=1?1:0,Bt=o[H][2]>=1?1:0,Ct=o[H][3]>=1?1:0,Xt=E-tt+c,ve=A-et+c,rt=P-At+c,ct=D-It+c,ut=E-fe+2*c,dt=A-te+2*c,gt=P-le+2*c,Wt=D-Z+2*c,Ht=E-nt+3*c,qt=A-xt+3*c,Zt=P-Bt+3*c,N=D-Ct+3*c,xe=E-1+4*c,ee=A-1+4*c,C=P-1+4*c,_=D-1+4*c,B=m&255,G=g&255,J=b&255,ft=w&255,vt=a[B+a[G+a[J+a[ft]]]]%32,Q=a[B+tt+a[G+et+a[J+At+a[ft+It]]]]%32,ot=a[B+fe+a[G+te+a[J+le+a[ft+Z]]]]%32,Mt=a[B+nt+a[G+xt+a[J+Bt+a[ft+Ct]]]]%32,zt=a[B+1+a[G+1+a[J+1+a[ft+1]]]]%32,bt=.6-E*E-A*A-P*P-D*D;bt<0?h=0:(bt*=bt,h=bt*bt*this._dot4(r[vt],E,A,P,D));let yt=.6-Xt*Xt-ve*ve-rt*rt-ct*ct;yt<0?d=0:(yt*=yt,d=yt*yt*this._dot4(r[Q],Xt,ve,rt,ct));let Nt=.6-ut*ut-dt*dt-gt*gt-Wt*Wt;Nt<0?u=0:(Nt*=Nt,u=Nt*Nt*this._dot4(r[ot],ut,dt,gt,Wt));let Gt=.6-Ht*Ht-qt*qt-Zt*Zt-N*N;Gt<0?f=0:(Gt*=Gt,f=Gt*Gt*this._dot4(r[Mt],Ht,qt,Zt,N));let Jt=.6-xe*xe-ee*ee-C*C-_*_;return Jt<0?p=0:(Jt*=Jt,p=Jt*Jt*this._dot4(r[zt],xe,ee,C,_)),27*(h+d+u+f+p)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}};var Vr=class i extends Nn{constructor(t,e,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=E0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new He(this.width,this.height,{type:Je,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new De({defines:Object.assign({},ca.defines),uniforms:Ln.clone(ca.uniforms),vertexShader:ca.vertexShader,fragmentShader:ca.fragmentShader,blending:Qe,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ko,this.normalMaterial.blending=Qe,this.pdMaterial=new De({defines:Object.assign({},ua.defines),uniforms:Ln.clone(ua.uniforms),vertexShader:ua.vertexShader,fragmentShader:ua.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new De({defines:Object.assign({},ha.defines),uniforms:Ln.clone(ha.uniforms),vertexShader:ha.vertexShader,fragmentShader:ha.fragmentShader,blending:Qe}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new De({uniforms:Ln.clone(Vi.uniforms),vertexShader:Vi.vertexShader,fragmentShader:Vi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Xo,blendDst:Hs,blendEquation:ii,blendSrcAlpha:Wo,blendDstAlpha:Hs,blendEquationAlpha:ii}),this.blendMaterial=new De({uniforms:Ln.clone(Nc.uniforms),vertexShader:Nc.vertexShader,fragmentShader:Nc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ul,blendSrc:Xo,blendDst:Hs,blendEquation:ii,blendSrcAlpha:Wo,blendDstAlpha:Hs,blendEquationAlpha:ii}),this._fsQuad=new Wi(null),this._originalClearColor=new pt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Fi,this.depthTexture.format=Bi,this.depthTexture.type=Rs,this.normalRenderTarget=new He(this.width,this.height,{minFilter:je,magFilter:je,type:Je,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Hu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Uc,n=t*t*4,s=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;s[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,s[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new ss(s,t,t,Hn,Sn);return r.wrapS=ti,r.wrapT=ti,r.needsUpdate=!0,r}};Vr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var R0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Wr=class i extends Nn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Y(t.x,t.y):new Y(256,256),this.clearColor=new pt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new He(r,o,{type:Je,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new He(r,o,{type:Je,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new He(r,o,{type:Je,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=R0;this.highPassUniforms=Ln.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Y(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ln.clone(Vi.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:Vi.vertexShader,fragmentShader:Vi.fragmentShader,premultipliedAlpha:!0,blending:zi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new pt,this._oldClearAlpha=1,this._basic=new In,this._fsQuad=new Wi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Y(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new De({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Y(.5,.5)},direction:{value:new Y(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new De({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Wr.BlurDirectionX=new Y(1,0);Wr.BlurDirectionY=new Y(0,1);var da={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var kc=class extends Nn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ln.clone(da.uniforms),this.material=new Ir({name:da.name,uniforms:this.uniforms,vertexShader:da.vertexShader,fragmentShader:da.fragmentShader}),this._fsQuad=new Wi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ce.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$o?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gs?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vs?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Jo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Fc=class extends ks{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Ie;t.deleteAttribute("uv");let e=new se({side:gn}),n=new se,s=new vi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new mt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Eo(t,n,6),a=new on;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new mt(t,Xr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new mt(t,Xr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new mt(t,Xr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new mt(t,Xr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new mt(t,Xr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new mt(t,Xr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Xr(i){return new Fo({color:0,emissive:16777215,emissiveIntensity:i})}var Gu=class extends Vr{_overrideVisibility(){let t=this._visibilityCache;this.scene.traverse(e=>{e.visible&&(e.isPoints||e.isLine||e.isSprite||e.userData.noAO)&&(e.visible=!1,t.push(e))})}},g_={uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uWarm:{value:new R(1.02,1,.96)},uLift:{value:new R(.012,.008,.02)},uSat:{value:1.06},uTime:{value:0},uRes:{value:new Y(1,1)},uTiltShift:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uVignette;
    uniform vec3 uWarm;
    uniform vec3 uLift;
    uniform float uSat;
    uniform float uTime;
    uniform vec2 uRes;
    uniform float uTiltShift;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 col = texture2D(tDiffuse, vUv);
      if (uTiltShift > 0.0) {
        // cheap miniature blur toward the top & bottom of the frame
        float band = smoothstep(0.18, 0.5, abs(vUv.y - 0.47)) * uTiltShift;
        if (band > 0.01) {
          vec2 px = band * 2.2 / uRes;
          vec4 acc = col * 0.2;
          acc += texture2D(tDiffuse, vUv + vec2( px.x,  px.y)) * 0.1;
          acc += texture2D(tDiffuse, vUv + vec2(-px.x,  px.y)) * 0.1;
          acc += texture2D(tDiffuse, vUv + vec2( px.x, -px.y)) * 0.1;
          acc += texture2D(tDiffuse, vUv + vec2(-px.x, -px.y)) * 0.1;
          acc += texture2D(tDiffuse, vUv + vec2( 2.0*px.x, 0.0)) * 0.1;
          acc += texture2D(tDiffuse, vUv + vec2(-2.0*px.x, 0.0)) * 0.1;
          acc += texture2D(tDiffuse, vUv + vec2(0.0,  2.0*px.y)) * 0.1;
          acc += texture2D(tDiffuse, vUv + vec2(0.0, -2.0*px.y)) * 0.1;
          col = acc;
        }
      }
      vec3 c = col.rgb * uWarm + uLift * (1.0 - col.rgb);
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(vec3(l), c, uSat);
      vec2 d = vUv - 0.5;
      d.x *= uRes.x / uRes.y * 0.75;
      float v = smoothstep(0.95, 0.25, length(d));
      c *= mix(1.0 - uVignette, 1.0, v);
      c += (hash(vUv * uRes + uTime) - 0.5) / 255.0; // dither, kills banding
      gl_FragColor = vec4(c, col.a);
    }
  `},zc=class{constructor(t,e={}){this.container=t,this.quality=e.quality||x_(),this.direct=e.post===!1;let n=this.renderer=new Ac({antialias:this.direct||this.quality==="low",preserveDrawingBuffer:!!e.preserveDrawingBuffer,powerPreference:"high-performance",alpha:!1});n.setPixelRatio(this._pixelRatio()),n.outputColorSpace=Xe,n.toneMapping=Gs,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=Bs,n.domElement.classList.add("gl"),t.appendChild(n.domElement),this.scene=new ks,this.camera=new pn(e.fov??30,1,.1,200);let s=new Br(n);this.envMap=s.fromScene(new Fc,.04).texture,this.scene.environment=this.envMap,this.scene.environmentIntensity=.55,this.direct||this._buildComposer(),this.updaters=new Set,this._last=performance.now(),this.time=0,this.frame=0,this._fpsAcc=0,this._fpsN=0,this.fps=60,this._onResize=()=>this.resize(),window.addEventListener("resize",this._onResize),"ResizeObserver"in window&&(this._ro=new ResizeObserver(()=>this.resize()),this._ro.observe(t)),this.resize()}_buildComposer(){let t=this.renderer,e=t.getDrawingBufferSize(new Y),n=new He(e.x||1,e.y||1,{type:Je,samples:this.quality==="low"?0:4}),s=this.composer=new Dc(t,n);if(this.renderPass=new Lc(this.scene,this.camera),s.addPass(this.renderPass),this.quality!=="low"&&!new URLSearchParams(location.search).has("noao")){let o=this.aoPass=new Gu(this.scene,this.camera,e.x,e.y);o.output=Vr.OUTPUT.Default,o.blendIntensity=.9,o.updateGtaoMaterial({radius:.55,distanceExponent:1.4,thickness:1.5,scale:1.15,samples:this.quality==="high"?16:8}),o.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),s.addPass(o)}new URLSearchParams(location.search).has("nobloom")||(this.bloomPass=new Wr(new Y(e.x/2,e.y/2),.35,.5,4.5),s.addPass(this.bloomPass)),s.addPass(new kc),this.gradePass=new Gr(g_),s.addPass(this.gradePass)}_pixelRatio(){let t={high:2,medium:1.25,low:1}[this.quality]??1.5;return Math.min(window.devicePixelRatio||1,t)}setQuality(t){t!==this.quality&&(this.quality=t,this.renderer.setPixelRatio(this._pixelRatio()),this.direct||(this.composer.dispose?.(),this._buildComposer()),this._w=this._h=null,this.resize(),this.onQuality?.(t))}resize(){let t=this.container.clientWidth||window.innerWidth,e=this.container.clientHeight||window.innerHeight;if(!(t===this._w&&e===this._h)){if(this._w=t,this._h=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px",this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),!this.direct){let n=this.renderer.getPixelRatio();this.composer.setPixelRatio(n),this.composer.setSize(t,e),this.gradePass.uniforms.uRes.value.set(t*n,e*n)}this.onResize?.(t,e)}}get width(){return this._w}get height(){return this._h}add(t){return this.updaters.add(t),()=>this.updaters.delete(t)}start(){let t=()=>{this._raf=requestAnimationFrame(t);let e=performance.now();if(this.maxFps&&e-this._last<1e3/this.maxFps-2)return;let n=Math.min((e-this._last)/1e3,this.maxFps?.25:1/15);this._last=e,this.time+=n,this.frame++,this._fpsAcc+=n,this._fpsN++,this._fpsAcc>1&&(this.fps=this._fpsN/this._fpsAcc,this._fpsAcc=0,this._fpsN=0,this.onFps?.(this.fps));for(let s of this.updaters)s(n,this.time);this.render()};t()}render(){if(this.direct){this.renderer.render(this.scene,this.camera);return}this.gradePass.uniforms.uTime.value=this.frame%64*1.37,this.composer.render()}stop(){cancelAnimationFrame(this._raf),this._raf=null}step(t=1/60,e=1,n=!0){for(let s=0;s<e;s++){this.time+=t,this.frame++;for(let r of this.updaters)r(t,this.time)}n&&this.render()}};function x_(){try{let t=new URLSearchParams(location.search).get("quality");if(t==="low"||t==="medium"||t==="high")return t;let e=localStorage.getItem("cozy.quality");if(e==="low"||e==="medium"||e==="high")return e}catch{}return/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)?"low":"high"}var oe=Math.PI*2,_t=(i,t=0,e=1)=>i<t?t:i>e?e:i,Cs=(i,t,e)=>i+(t-i)*e;var Xi=(i,t,e)=>{let n=_t((e-i)/(t-i));return n*n*(3-2*n)},Kn=i=>(i=_t(i),i*i*i*(i*(i*6-15)+10)),Ye=(i,t,e,n)=>Cs(i,t,1-Math.exp(-e*n)),Oc=i=>(i=(i+Math.PI)%oe,i<0&&(i+=oe),i-Math.PI),A0=(i,t)=>i+Oc(t-i);var Vu=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2;var Bc=i=>i*i;var qi=(i,t=1.70158)=>1+(t+1)*Math.pow(i-1,3)+t*Math.pow(i-1,2);var we=(i,t=0,e=1)=>i<=t||i>=e?0:Math.sin((i-t)/(e-t)*Math.PI),be=(i,t,e,n,s)=>i<=t||i>=s?0:i<e?Kn((i-t)/(e-t)):i<=n?1:1-Kn((i-n)/(s-n)),Tn=class{constructor(t=0,e=4,n=.5){this.x=t,this.v=0,this.target=t,this.freq=e,this.damping=n}update(t){let e=oe*this.freq,n=Math.max(1,Math.ceil(t/(1/240))),s=t/n;for(let r=0;r<n;r++){let o=-e*e*(this.x-this.target)-2*this.damping*e*this.v;this.v+=o*s,this.x+=this.v*s}return this.x}impulse(t){this.v+=t}snap(t){this.x=this.target=t,this.v=0}};function Te(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var K=(i=0,t=1)=>i+Math.random()*(t-i);var Qt=i=>Math.random()<i,ge=i=>i[Math.floor(Math.random()*i.length)],Hc=i=>{let t=0;for(let[,n]of i)t+=Math.max(0,n);if(t<=0)return i.length?i[0][0]:void 0;let e=Math.random()*t;for(let[n,s]of i)if(e-=Math.max(0,s),e<=0)return n;return i[i.length-1][0]};function Gc(i,t=0){let e=Math.floor(i),n=i-e,s=o=>{let a=Math.sin((o+t*57.13)*127.1)*43758.5453;return a-Math.floor(a)},r=n*n*(3-2*n);return Cs(s(e),s(e+1),r)*2-1}var Wu=(()=>{let i=0;return(t="id")=>`${t}-${Date.now().toString(36)}-${(i++).toString(36)}`})();var Un=new Map;function $e(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Ze(i,t={}){let e=new mi(i);return e.colorSpace=t.linear?bi:Xe,e.anisotropy=t.anisotropy??8,t.repeat&&(e.wrapS=e.wrapT=ti),t.wrapS&&(e.wrapS=t.wrapS),t.wrapT&&(e.wrapT=t.wrapT),e}var Yi=(i,t)=>{let e=new pt(i);return e.offsetHSL(0,0,t),"#"+e.getHexString()};function C0({base:i="#d9a36b",units:t=4,plankW:e=.5,seed:n=3}={}){let s=`planks:${i}:${t}:${e}:${n}`;if(Un.has(s))return Un.get(s);let r=1024,o=$e(r,r),a=o.getContext("2d"),l=Te(n),c=r/t,h=Math.round(t/e),d=r/h;for(let f=0;f<h;f++){let p=-l()*c*1.5;for(;p<r;){let x=c*(1.2+l()*1.6),m=(l()-.5)*.09,g=Yi(i,m);a.fillStyle=g,a.fillRect(p,f*d,x,d),a.save(),a.beginPath(),a.rect(p,f*d,x,d),a.clip();let b=7+Math.floor(l()*4);for(let v=0;v<b;v++){let T=f*d+l()*d;a.strokeStyle=`rgba(110,60,30,${.04+l()*.06})`,a.lineWidth=1+l()*2,a.beginPath();let M=2+l()*5,I=.004+l()*.01,y=l()*10;for(let E=p;E<=p+x;E+=8){let A=T+Math.sin(E*I+y)*M;E===p?a.moveTo(E,A):a.lineTo(E,A)}a.stroke()}if(l()<.25){let v=p+l()*x,T=f*d+d*(.3+l()*.4);a.strokeStyle="rgba(110,60,30,0.12)",a.lineWidth=2;for(let M=0;M<3;M++)a.beginPath(),a.ellipse(v,T,6+M*5,3+M*2.5,0,0,Math.PI*2),a.stroke()}let w=a.createLinearGradient(0,f*d,0,(f+1)*d);w.addColorStop(0,"rgba(255,240,220,0.10)"),w.addColorStop(.5,"rgba(255,240,220,0)"),w.addColorStop(1,"rgba(90,50,25,0.10)"),a.fillStyle=w,a.fillRect(p,f*d,x,d),a.restore(),a.fillStyle="rgba(95,55,30,0.35)",a.fillRect(p+x-2,f*d,2.5,d),p+=x}a.fillStyle="rgba(95,55,30,0.45)",a.fillRect(0,f*d,r,2.5)}let u=Ze(o,{repeat:!0});return u.repeat.set(1/t,1/t),Un.set(s,u),u}function P0({a:i="#f6e2c8",b:t="#e9c9a4",units:e=2,n=4}={}){let s=`tiles:${i}:${t}:${e}:${n}`;if(Un.has(s))return Un.get(s);let r=512,o=$e(r,r),a=o.getContext("2d"),l=r/n;for(let h=0;h<n;h++)for(let d=0;d<n;d++){a.fillStyle=(h+d)%2?i:t,a.fillRect(h*l,d*l,l,l);let u=a.createLinearGradient(h*l,d*l,(h+1)*l,(d+1)*l);u.addColorStop(0,"rgba(255,255,255,0.12)"),u.addColorStop(1,"rgba(120,80,50,0.06)"),a.fillStyle=u,a.fillRect(h*l,d*l,l,l),a.strokeStyle="rgba(150,110,80,0.35)",a.lineWidth=3,a.strokeRect(h*l+1.5,d*l+1.5,l-3,l-3)}let c=Ze(o,{repeat:!0});return c.repeat.set(1/e,1/e),Un.set(s,c),c}function I0({paper:i="#fde9d6",pattern:t="dots",accent:e="#f5b8a6",wainscot:n="#f3d3b5",board:s="#c98d5d",unit:r=2,height:o=4.2,wainscotH:a=1.15,seed:l=1}={}){let c=`wall:${i}:${t}:${e}:${n}:${s}:${r}:${o}:${a}`;if(Un.has(c))return Un.get(c);let h=200,d=Math.round(r*h),u=Math.round(o*h),f=$e(d,u),p=f.getContext("2d"),x=Te(l),m=y=>u-y*h;p.fillStyle=i,p.fillRect(0,0,d,u);for(let y=0;y<400;y++)p.fillStyle=`rgba(150,100,70,${x()*.025})`,p.fillRect(x()*d,x()*u,1+x()*2,4+x()*30);let g=m(o),b=m(a);p.save(),p.beginPath(),p.rect(0,g,d,b-g),p.clip(),v_(p,t,d,u,e,i,x),p.restore(),p.fillStyle=n,p.fillRect(0,b,d,u-b);let w=2,v=d/w;for(let y=0;y<w;y++){let E=y*v+v*.12,A=v*.76,P=m(a-.16),D=m(.32);p.fillStyle=Yi(n,-.04),fa(p,E,P,A,D-P,10),p.fill(),p.strokeStyle=Yi(n,.06),p.lineWidth=4,fa(p,E+3,P+3,A-6,D-P-6,8),p.stroke(),p.strokeStyle=Yi(n,-.12),p.lineWidth=2,fa(p,E,P,A,D-P,10),p.stroke()}p.fillStyle=Yi(n,-.08),p.fillRect(0,b-10,d,22),p.fillStyle=Yi(n,.07),p.fillRect(0,b-10,d,6),p.fillStyle=s,p.fillRect(0,m(.2),d,m(0)-m(.2)),p.fillStyle=Yi(s,.08),p.fillRect(0,m(.2),d,6),p.fillStyle=Yi(s,-.1),p.fillRect(0,m(.02),d,4);let T=p.createLinearGradient(0,m(.5),0,u);T.addColorStop(0,"rgba(90,50,30,0)"),T.addColorStop(1,"rgba(90,50,30,0.18)"),p.fillStyle=T,p.fillRect(0,m(.5),d,u-m(.5));let M=p.createLinearGradient(0,0,0,m(o-.6));M.addColorStop(0,"rgba(120,70,50,0.10)"),M.addColorStop(1,"rgba(120,70,50,0)"),p.fillStyle=M,p.fillRect(0,0,d,m(o-.6));let I=Ze(f,{repeat:!0});return I.wrapT=qn,I.repeat.set(1/r,1/o),Un.set(c,I),I}function v_(i,t,e,n,s,r,o){if(t==="dots"){i.fillStyle=s;for(let l=0;l<n+50;l+=50)for(let c=0;c<e+50;c+=50){let h=Math.floor(l/50)%2*25;i.globalAlpha=.55,i.beginPath(),i.arc(c+h,l,5.5,0,Math.PI*2),i.fill()}i.globalAlpha=1}else if(t==="stripes"){let a=e/8;for(let l=0;l<e;l+=a)i.fillStyle=s,i.globalAlpha=.28,i.fillRect(l,0,a*.42,n),i.globalAlpha=.5,i.fillRect(l+a*.55,0,3,n);i.globalAlpha=1}else if(t==="flowers")for(let l=0;l<n+80;l+=80)for(let c=0;c<e+80;c+=80){let h=Math.floor(l/80)%2*40;y_(i,c+h,l,9,s)}else if(t==="gingham"){i.globalAlpha=.18,i.fillStyle=s;for(let l=0;l<e;l+=80)i.fillRect(l,0,40,n);for(let l=0;l<n;l+=80)i.fillRect(0,l,e,40);i.globalAlpha=1}else if(t==="scallop"){i.strokeStyle=s,i.globalAlpha=.45,i.lineWidth=3;for(let l=0;l<n+40;l+=40*.8)for(let c=0;c<e+40;c+=40){let h=Math.round(l/32)%2*20;i.beginPath(),i.arc(c+h,l,40/2,0,Math.PI),i.stroke()}i.globalAlpha=1}}function y_(i,t,e,n,s){i.fillStyle=s,i.globalAlpha=.6;for(let r=0;r<5;r++){let o=r/5*Math.PI*2;i.beginPath(),i.arc(t+Math.cos(o)*n*.75,e+Math.sin(o)*n*.75,n*.55,0,Math.PI*2),i.fill()}i.globalAlpha=.9,i.fillStyle="#ffe9a8",i.beginPath(),i.arc(t,e,n*.38,0,Math.PI*2),i.fill(),i.globalAlpha=1}function fa(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function qu(){let i="cork";if(Un.has(i))return Un.get(i);let t=256,e=$e(t,t),n=e.getContext("2d");n.fillStyle="#d6a473",n.fillRect(0,0,t,t);let s=Te(5);for(let o=0;o<2600;o++){let a=s();n.fillStyle=a<.5?`rgba(150,95,50,${.15+s()*.3})`:`rgba(240,200,150,${.15+s()*.3})`,n.beginPath(),n.arc(s()*t,s()*t,.6+s()*2.2,0,Math.PI*2),n.fill()}let r=Ze(e,{repeat:!0});return Un.set(i,r),r}var Vc=class{constructor(){this.canvas=$e(512,512),this.texture=Ze(this.canvas),this.key=""}draw(t){let e=JSON.stringify(t);if(e===this.key)return;this.key=e;let n=this.canvas.getContext("2d"),s=512,r=n.createLinearGradient(0,0,0,s);r.addColorStop(0,t.top),r.addColorStop(.75,t.bottom),n.fillStyle=r,n.fillRect(0,0,s,s);let o=Te(42);if(t.stars>.01)for(let l=0;l<90;l++){n.fillStyle=`rgba(255,250,230,${t.stars*(.3+o()*.7)})`;let c=o()<.1?2.2:1.1;n.beginPath(),n.arc(o()*s,o()*s*.62,c,0,Math.PI*2),n.fill()}if(t.sun?.visible){let{x:l,y:c,color:h,size:d=34}=t.sun,u=n.createRadialGradient(l*s,c*s,2,l*s,c*s,d*3);u.addColorStop(0,h),u.addColorStop(.3,h+"88"),u.addColorStop(1,h+"00"),n.fillStyle=u,n.fillRect(0,0,s,s),n.fillStyle=t.sun.disc||"#fff8e8",n.beginPath(),n.arc(l*s,c*s,d,0,Math.PI*2),n.fill(),t.moon&&(n.fillStyle=t.top,n.beginPath(),n.arc(l*s+d*.45,c*s-d*.25,d*.85,0,Math.PI*2),n.fill())}n.fillStyle=t.cloud;for(let l=0;l<5;l++){let c=o()*s,h=60+o()*170,d=50+o()*60;for(let u=0;u<5;u++)n.beginPath(),n.arc(c+(u-2)*d*.28,h-Math.sin(u/4*Math.PI)*d*.22,d*(.22+.1*Math.sin(u/4*Math.PI)),0,Math.PI*2),n.fill()}let a=t.hills;Xu(n,s,330,40,a[0],.008,1.3),Xu(n,s,370,30,a[1],.012,4.1);for(let l=0;l<7;l++){let c=30+o()*(s-60),h=380+o()*40;n.fillStyle=t.trunk,n.fillRect(c-3,h,6,22),n.fillStyle=t.tree,n.beginPath(),n.arc(c,h-4,16+o()*8,0,Math.PI*2),n.fill()}Xu(n,s,420,18,a[2],.018,2.2),t.stars>.4&&(n.fillStyle="#5a4a6a",n.fillRect(380,360,50,40),n.beginPath(),n.moveTo(372,362),n.lineTo(405,335),n.lineTo(438,362),n.fill(),n.fillStyle="#ffd88a",n.fillRect(392,372,12,12),n.fillRect(410,372,12,12)),this.texture.needsUpdate=!0}};function Xu(i,t,e,n,s,r,o){i.fillStyle=s,i.beginPath(),i.moveTo(0,t);for(let a=0;a<=t;a+=8)i.lineTo(a,e-Math.sin(a*r+o)*n-Math.sin(a*r*2.3+o*2)*n*.3);i.lineTo(t,t),i.closePath(),i.fill()}function Wc(i,t,e,n=6){let s=String(t).split(/\s+/),r=[],o="";for(let a of s){let l=o?o+" "+a:a;if(i.measureText(l).width>e&&o){if(r.push(o),o=a,r.length>=n)break}else o=l}return o&&r.length<n&&r.push(o),r.length===n&&s.join(" ").length>r.join(" ").length&&(r[n-1]=r[n-1].replace(/\s*\S*$/,"\u2026")),r}function D0(i,t=4,e=256){let n=$e(t,e),s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,e);return i.forEach((o,a)=>r.addColorStop(a/(i.length-1),o)),s.fillStyle=r,s.fillRect(0,0,t,e),Ze(n)}function L0({base:i="#efe0cc",stone:t="#c9b9a8",unit:e=2,height:n=3,seed:s=2}={}){let r=`siding:${i}:${t}:${e}:${n}`;if(Un.has(r))return Un.get(r);let o=160,a=Math.round(e*o),l=Math.round(n*o),c=$e(a,l),h=c.getContext("2d"),d=Te(s);h.fillStyle=i,h.fillRect(0,0,a,l);let u=.22*o;for(let x=0;x<l;x+=u)h.fillStyle=Yi(i,(d()-.5)*.03),h.fillRect(0,x,a,u),h.fillStyle="rgba(120,90,70,0.16)",h.fillRect(0,x+u-3,a,3),h.fillStyle="rgba(255,255,255,0.18)",h.fillRect(0,x,a,2);let f=.35*o;h.fillStyle=t,h.fillRect(0,l-f,a,f);for(let x=0;x<9;x++){h.fillStyle=Yi(t,(d()-.5)*.08);let m=x/9*a;fa(h,m+2,l-f+4,a/9-4,f-8,8),h.fill()}let p=Ze(c,{repeat:!0});return p.wrapT=qn,p.repeat.set(1/e,1/n),Un.set(r,p),p}var N0=i=>new pt(i),$s=[{h:0,bg:["#262c55","#3d3f74","#5a4f86"],hemiSky:"#8b9be0",hemiGround:"#3b3150",hemi:.4,sun:0,sunColor:"#a9bcff",moon:.6,lamps:1,env:.16,exposure:1,win:{top:"#141a40",bottom:"#3c3470",cloud:"rgba(120,120,170,0.35)",hills:["#2a3550","#24304a","#1d283f"],tree:"#1f3a3a",trunk:"#2a2230"},stars:1,grade:[.96,.98,1.06]},{h:5,bg:["#3a3f78","#7a6a9e","#d99aa6"],hemiSky:"#a7a6e0",hemiGround:"#4a3a50",hemi:.45,sun:.2,sunColor:"#ffb08a",moon:.4,lamps:.9,env:.22,exposure:1,win:{top:"#3a3f78",bottom:"#e8a0a0",cloud:"rgba(255,200,210,0.5)",hills:["#5a5a80","#4a5070","#3d4560"],tree:"#38524a",trunk:"#3a2e38"},stars:.4,grade:[1,.98,1.02]},{h:7,bg:["#ffd9c2","#fbc3c0","#e6c4e6"],hemiSky:"#ffe6d6",hemiGround:"#b98a7a",hemi:.6,sun:2.6,sunColor:"#ffbf8f",moon:0,lamps:.25,env:.3,exposure:1,win:{top:"#9fd2f5",bottom:"#ffd9c2",cloud:"rgba(255,240,235,0.9)",hills:["#a8d58f","#8cc47a","#76b46c"],tree:"#6aa864",trunk:"#8a5a3c"},stars:0,grade:[1.03,1,.97]},{h:10,bg:["#ffe8d6","#fcd8d0","#f1d6ea"],hemiSky:"#fff1e2",hemiGround:"#c49a82",hemi:.66,sun:3.4,sunColor:"#ffe4c2",moon:0,lamps:0,env:.34,exposure:1,win:{top:"#86c8f5",bottom:"#d9f0ff",cloud:"rgba(255,255,255,0.95)",hills:["#a8d58f","#8cc47a","#76b46c"],tree:"#6aa864",trunk:"#8a5a3c"},stars:0,grade:[1.02,1,.98]},{h:14,bg:["#ffe9d4","#fdd6c8","#f3d3e4"],hemiSky:"#fff4e6",hemiGround:"#c49a82",hemi:.68,sun:3.5,sunColor:"#fff0d8",moon:0,lamps:0,env:.34,exposure:1,win:{top:"#7cc2f5",bottom:"#d6efff",cloud:"rgba(255,255,255,0.95)",hills:["#a8d58f","#8cc47a","#76b46c"],tree:"#6aa864",trunk:"#8a5a3c"},stars:0,grade:[1.01,1,.99]},{h:17.5,bg:["#ffd6b0","#f9b6a0","#e8a9c2"],hemiSky:"#ffe0c2",hemiGround:"#b8806a",hemi:.6,sun:3.1,sunColor:"#ffb070",moon:0,lamps:.3,env:.3,exposure:1,win:{top:"#f5b38a",bottom:"#ffd9a8",cloud:"rgba(255,220,200,0.9)",hills:["#b9b86f","#a0a862","#8a9a58"],tree:"#7a9550",trunk:"#7a4a32"},stars:0,grade:[1.05,.99,.94]},{h:19.5,bg:["#8e7bb5","#d790a6","#f2a989"],hemiSky:"#d7b0d8",hemiGround:"#6a4a5a",hemi:.5,sun:1.1,sunColor:"#ff8a6a",moon:.1,lamps:.85,env:.18,exposure:1,win:{top:"#6a5a9a",bottom:"#f29a80",cloud:"rgba(255,180,170,0.7)",hills:["#6a6a7a","#5a5a70","#4a4a60"],tree:"#45584f",trunk:"#4a3236"},stars:.25,grade:[1.03,.97,.98]},{h:21.5,bg:["#2c3260","#444580","#6a5690"],hemiSky:"#8b9be0",hemiGround:"#3b3150",hemi:.42,sun:0,sunColor:"#a9bcff",moon:.6,lamps:1,env:.18,exposure:1,win:{top:"#161c45",bottom:"#433a78",cloud:"rgba(120,120,170,0.35)",hills:["#2a3550","#24304a","#1d283f"],tree:"#1f3a3a",trunk:"#2a2230"},stars:1,grade:[.97,.98,1.05]}];$s.push({...$s[0],h:24});function Ys(i,t,e){return"#"+N0(i).lerp(N0(t),e).getHexString()}function __(i){let t=0;for(;t<$s.length-1&&$s[t+1].h<=i;)t++;let e=$s[t],n=$s[Math.min(t+1,$s.length-1)],s=n.h===e.h?0:Xi(0,1,(i-e.h)/(n.h-e.h)),r=a=>Cs(e[a],n[a],s),o=a=>Ys(e[a],n[a],s);return{bg:e.bg.map((a,l)=>Ys(a,n.bg[l],s)),hemiSky:o("hemiSky"),hemiGround:o("hemiGround"),hemi:r("hemi"),sun:r("sun"),sunColor:o("sunColor"),moon:r("moon"),lamps:r("lamps"),env:r("env"),exposure:r("exposure"),stars:r("stars"),grade:e.grade.map((a,l)=>Cs(a,n.grade[l],s)),win:{top:Ys(e.win.top,n.win.top,s),bottom:Ys(e.win.bottom,n.win.bottom,s),cloud:s<.5?e.win.cloud:n.win.cloud,hills:e.win.hills.map((a,l)=>Ys(a,n.win.hills[l],s)),tree:Ys(e.win.tree,n.win.tree,s),trunk:Ys(e.win.trunk,n.win.trunk,s)}}}var U0=[{id:"auto",label:"real time"},{id:"morning",label:"morning",h:8.2},{id:"noon",label:"afternoon",h:14},{id:"golden",label:"golden hour",h:17.6},{id:"dusk",label:"dusk",h:19.7},{id:"night",label:"night",h:23}],Xc=class{constructor(t){this.engine=t;let e=t.scene;this.hemi=new Oo("#fff","#888",1),e.add(this.hemi),this.sun=new Lr("#fff",2),this.sun.castShadow=!0;let n=this.sun.shadow;n.mapSize.set(t.quality==="low"?1024:2048,t.quality==="low"?1024:2048),n.camera.left=-9,n.camera.right=9,n.camera.top=9,n.camera.bottom=-9,n.camera.near=.5,n.camera.far=40,n.radius=3,n.bias=-4e-4,n.normalBias=.025,e.add(this.sun),e.add(this.sun.target),this.moon=new Lr("#a9bcff",.4),this.moon.position.set(-6,9,-4),e.add(this.moon),this.view=new Vc,this.override=null,this._bgKey="",this.hour=12,this.state=null,this.rooms=[],this._t=99,this.speed=1,this._virtual=null}setPreset(t){let e=U0.find(n=>n.id===t);this.override=e&&e.h!==void 0?e.h:null,this._t=99}get presetId(){return this.override===null?"auto":U0.find(t=>t.h===this.override)?.id||"auto"}setHour(t){this.override=(t%24+24)%24,this._t=99}currentHour(){if(this.override!==null)return this.override;let t=new Date;return t.getHours()+t.getMinutes()/60+t.getSeconds()/3600}get isNight(){return this.hour>=20.5||this.hour<6}get phase(){let t=this.hour;return t>=5&&t<11?"morning":t>=11&&t<17?"day":t>=17&&t<20.5?"evening":"night"}update(t,e){this._t+=t;let n=this.hour=this.currentHour(),s=this.state=__(n),r=this.engine,o=s.bg.join();if(o!==this._bgKey){this._bgKey=o;let u=r.scene.background;r.scene.background=D0(s.bg),u?.dispose?.(),document.documentElement.style.setProperty("--sky-top",s.bg[0]),document.documentElement.style.setProperty("--sky-bottom",s.bg[2])}this.hemi.color.set(s.hemiSky),this.hemi.groundColor.set(s.hemiGround),this.hemi.intensity=s.hemi,r.scene.environmentIntensity=s.env;let a=_t((n-6)/14,0,1),l=Cs(-2.75,-1.5,a),c=.36+Math.sin(a*Math.PI)*.26,h=20;this.sun.position.set(Math.sin(l)*Math.cos(c)*h,Math.sin(c)*h,Math.cos(l)*Math.cos(c)*h),this.sun.target.position.set(0,0,0),this.sun.color.set(s.sunColor),this.sun.intensity=s.sun,this.sun.castShadow=s.sun>.05,this.moon.intensity=s.moon;let d=r.gradePass?.uniforms;if(d&&d.uWarm.value.set(s.grade[0],s.grade[1],s.grade[2]),this._t>2){this._t=0;let u=s.stars>.5,f=.15+a*.7;this.view.draw({top:s.win.top,bottom:s.win.bottom,cloud:s.win.cloud,hills:s.win.hills,tree:s.win.tree,trunk:s.win.trunk,stars:Math.round(s.stars*10)/10,sun:u?{visible:!0,x:.72,y:.22,color:"#c9d4ff",size:26,disc:"#f3f0ff"}:s.sun>.3?{visible:!0,x:Math.round(f*100)/100,y:Math.round((.55-Math.sin(a*Math.PI)*.4)*100)/100,color:n>16||n<8?"#ffb070":"#fff1c4",size:30}:{visible:!1},moon:u})}e&&b_(e,s.lamps,r.time)}};function b_(i,t,e){for(let n of i.lights){let s=n.userData.lamp,r=s.on?t:0;s.level=(s.level??r)+(r-(s.level??r))*.08;let o=s.level;s.light.intensity=s.base*o,s.light.visible=o>.02,s.shadeMat.emissiveIntensity=.15+o*1.6,s.bulbMat!==s.shadeMat&&(s.bulbMat.emissiveIntensity=o*8)}for(let n of i.glows){let s=n.userData.level!==void 0?n.userData.level:t,r=n.userData.bulbMats;r&&r.forEach((o,a)=>{let l=.72+.28*Math.sin(e*2.2+a*1.7);o.emissiveIntensity=.25+s*7*l})}}var qr={commons:{id:"commons",name:"the commons",floor:0,x0:0,x1:6,z0:0,z1:6,unlock:null,angle:0,floorStyle:"planks",tint:"#e9cdb0"},workshop:{id:"workshop",name:"the workshop",floor:0,x0:0,x1:6,z0:-6,z1:0,unlock:"workshop",angle:1,floorStyle:"boards",tint:"#d9c3a6",sealedAtStart:!0},study:{id:"study",name:"the study",floor:0,x0:-6,x1:0,z0:-6,z1:0,unlock:"study",angle:2,floorStyle:"planks",tint:"#d6c9b8"},kitchen:{id:"kitchen",name:"the kitchen",floor:0,x0:-6,x1:0,z0:0,z1:6,unlock:"kitchen",angle:3,floorStyle:"tiles",tint:"#ece0cc"},bunk:{id:"bunk",name:"the bunk room",floor:1,x0:0,x1:6,z0:-6,z1:0,unlock:"upstairs",angle:1,floorStyle:"planks",tint:"#e2d3c4"},yours:{id:"yours",name:"your room",floor:1,x0:-6,x1:0,z0:-6,z1:0,unlock:"upstairs",angle:2,floorStyle:"planks",tint:"#eadbd0"},attic:{id:"attic",name:"the attic",floor:"top",x0:0,x1:6,z0:-6,z1:0,unlock:"workshop",attic:!0,floorStyle:"boards",tint:"#dccab4"}},k0=[{a:"commons",b:"workshop",along:3.6,boardedUntil:"workshop"},{a:"commons",b:"kitchen",along:3.4},{a:"workshop",b:"study",along:-3.2},{a:"study",b:"kitchen",along:-2.8},{a:"bunk",b:"yours",along:-3},{a:"commons",side:"south",along:2,front:!0},{a:"kitchen",side:"south",along:-1.6},{a:"bunk",side:"south",along:5.3,upstairsLanding:!0}],F0={commons:[{side:"south",along:4.6,kind:"rect"},{side:"east",along:3.2,kind:"arch"}],workshop:[{side:"east",along:-3,kind:"rect"},{side:"north",along:3,kind:"rect"}],study:[{side:"north",along:-3,kind:"arch"},{side:"west",along:-3,kind:"round"}],kitchen:[{side:"west",along:3,kind:"rect"},{side:"south",along:-4.2,kind:"rect"}],bunk:[{side:"east",along:-3,kind:"round"},{side:"north",along:3,kind:"rect"}],yours:[{side:"north",along:-3,kind:"arch"},{side:"west",along:-3,kind:"rect"}]};var Mi={core:{id:"core",cx:3.3,cz:.7,hx:4.6,hz:8.1,p:3.2,depth:7.5,seed:1,unlock:null},west:{id:"west",cx:-3.3,cz:0,hx:4.6,hz:7.4,p:3,depth:6.2,seed:2,unlock:"west"},gate:{id:"gate",cx:-2.4,cz:9.8,hx:3.4,hz:2.7,p:2.6,depth:3.6,seed:3,unlock:"gate"},garden:{id:"garden",cx:10.2,cz:2,hx:3,hz:3.8,p:2.6,depth:3.8,seed:4,unlock:"garden"},shed:{id:"shed",cx:2.6,cz:-10.4,hx:3.6,hz:2.6,p:2.6,depth:3.4,seed:5,unlock:"shed"}},Si={x0:.3,x1:5.7,z0:6,z1:7.6},cn={mailbox:{x:-1.6,z:9.2},wall:{x:-3.6,z:8.2},perch:{x:-.2,z:11.4},mooring:{x:-4.6,z:11.2},entry:{x:-1,z:8}};function M_(i){return{x0:i.x0,x1:i.x1,z0:i.z0,z1:i.z1,cx:(i.x0+i.x1)/2,cz:(i.z0+i.z1)/2}}function z0(i,t,e){let n=M_(i),s={north:[n.cx,i.z0-.5],south:[n.cx,i.z1+.5],east:[i.x1+.5,n.cz],west:[i.x0-.5,n.cz]}[t];return e.find(r=>r!==i&&r.level===i.level&&s[0]>r.x0&&s[0]<r.x1&&s[1]>r.z0&&s[1]<r.z1)||null}var O0={north:[0,-1],south:[0,1],east:[1,0],west:[-1,0]};var Yu={uCut:{value:new Ce(-6.1,-6.1,6.1,6.1)},uCutOn:{value:0}},$u=Yu;function B0(i){return i.onBeforeCompile=t=>{t.uniforms.uCut=Yu.uCut,t.uniforms.uCutOn=Yu.uCutOn,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform vec4 uCut;
uniform float uCutOn;`).replace("void main() {",`void main() {
  if (uCutOn > 0.5 && vWPos.x > uCut.x && vWPos.x < uCut.z && vWPos.z > uCut.y && vWPos.z < uCut.w && vWPos.y > -9.0) discard;`)},i.customProgramCacheKey=()=>"terrain-cut-"+i.type,i}function Zu(i,t=84){let e=Te(i.seed*977),n=Array.from({length:6},()=>[e()*oe,.02+e()*.035,2+Math.floor(e()*4)]),s=[];for(let r=0;r<t;r++){let o=r/t*oe,a=Math.abs(Math.cos(o)),l=Math.abs(Math.sin(o)),c=Math.pow(Math.pow(a/i.hx,i.p)+Math.pow(l/i.hz,i.p),-1/i.p),h=1;for(let[d,u,f]of n)h+=Math.sin(o*f+d)*u;c*=h,s.push([i.cx+Math.cos(o)*c,i.cz+Math.sin(o)*c])}return s}function H0(i,t,e,n=0){let s=(t-i.cx)/Math.max(.1,i.hx-n),r=(e-i.cz)/Math.max(.1,i.hz-n);return Math.pow(Math.abs(s),i.p)+Math.pow(Math.abs(r),i.p)<=.94}var pa=null;function S_(){if(pa)return pa;let i=256,t=$e(i,i),e=t.getContext("2d");e.fillStyle="#b9cf98",e.fillRect(0,0,i,i);let n=Te(17);for(let s=0;s<1600;s++){let r=n();e.fillStyle=r<.5?`rgba(130,170,105,${.18+n()*.25})`:`rgba(225,235,190,${.15+n()*.25})`;let o=n()*i,a=n()*i;e.fillRect(o,a,1.5+n()*2,3+n()*5)}for(let s=0;s<26;s++)e.fillStyle=["#fff6ea","#ffd9e2","#fff1b8"][s%3],e.beginPath(),e.arc(n()*i,n()*i,2.2,0,oe),e.fill();return pa=Ze(t,{repeat:!0}),pa.repeat.set(1/4,1/4),pa}var qc=B0(new se({map:null,color:"#ffffff",roughness:.95})),w_=B0(new se({vertexColors:!0,roughness:.92,side:ke,flatShading:!1})),T_=new se({color:"#8a6d5c",roughness:.9});function G0(i){qc.map||(qc.map=S_(),qc.needsUpdate=!0);let t=new at;t.name=`chunk:${i.id}`;let e=Zu(i),n=Te(i.seed*131),s=new un(e.map(([A,P])=>new Y(A,-P))),r=new os(s,1);r.rotateX(-Math.PI/2);let o=r.attributes.uv,a=r.attributes.position;for(let A=0;A<o.count;A++)o.setXY(A,a.getX(A),a.getZ(A));let l=new mt(r,qc);l.receiveShadow=!0,l.position.y=.002,l.name="grass",t.add(l);let c=[],h=[[0,1,0],[-.1,1.025,0],[-.32,1.02,0],[-.55,.985,0]];for(let[A,P]of h)c.push({y:A,s:P,soil:!0});let d=9;for(let A=1;A<=d;A++){let P=A/d;c.push({y:-.55-P*i.depth,s:Math.max(.06,.985-Math.pow(P,1.5)*.93),soil:!1,t:P})}let u=e.length,f=[],p=[],x=new pt("#b08a6d"),m=new pt("#987460"),g=new pt("#c4a58f"),b=new pt("#a48a92"),w=new pt("#7c6e8e");for(let A=0;A<c.length;A++){let P=c[A];for(let D=0;D<u;D++){let[z,L]=e[D],O=P.soil?0:(n()-.5)*.35*(.4+(P.t||0)),q=z-i.cx,X=L-i.cz,st=P.s+(P.soil?0:(n()-.5)*.06);f.push(i.cx+q*st+O,P.y+(P.soil?0:(n()-.5)*.3),i.cz+X*st+O);let H;P.soil?H=A<2?x:m:H=P.t<.45?g.clone().lerp(b,P.t/.45):b.clone().lerp(w,(P.t-.45)/.55);let tt=.94+n()*.1;p.push(H.r*tt,H.g*tt,H.b*tt)}}let v=f.length/3;f.push(i.cx+(n()-.5),c[c.length-1].y-i.depth*.08,i.cz+(n()-.5)),p.push(w.r*.9,w.g*.9,w.b*.9);let T=[];for(let A=0;A<c.length-1;A++)for(let P=0;P<u;P++){let D=A*u+P,z=A*u+(P+1)%u,L=(A+1)*u+P,O=(A+1)*u+(P+1)%u;T.push(D,L,z,z,L,O)}let M=(c.length-1)*u;for(let A=0;A<u;A++)T.push(M+A,v,M+(A+1)%u);let I=new Ge;I.setAttribute("position",new Kt(f,3)),I.setAttribute("color",new Kt(p,3)),I.setIndex(T),I.computeVertexNormals();let y=new mt(I,w_);y.castShadow=!1,y.receiveShadow=!0,y.name="rock",t.add(y);let E=Math.round(4+i.hx*i.hz*.18);for(let A=0;A<E;A++){let P=n()*oe,D=.25+n()*.55,[z,L]=e[Math.floor(n()*u)],O=i.cx+(z-i.cx)*D*.7,q=i.cz+(L-i.cz)*D*.7,X=-.8-(1-D)*i.depth*.5,st=1.2+n()*2.6,H=[];for(let et=0;et<=5;et++){let At=et/5;H.push(new R(O+Math.sin(P+At*3)*.25*At,X-At*st,q+Math.cos(P+At*2)*.25*At))}let tt=new mt(new Zn(new zn(H),12,.05*(1-n()*.4),5),T_);tt.userData.root=!0,t.add(tt)}return t.userData={def:i,outline:e,top:l,rock:y},t}function V0(i){let t=new at,e=new se({color:"#d6b796",roughness:.85});for(let n=0;n<i.length;n++){let[s,r]=i[n],o=new mt(new Mn(.06,.07,.75,6),e);o.position.set(s,.37,r),o.castShadow=!0,t.add(o);let a=new mt(new dn(.075,8,6),e);if(a.position.set(s,.76,r),t.add(a),n>0){let[l,c]=i[n-1],h=Math.hypot(s-l,r-c);for(let d of[.28,.55]){let u=new mt(new Ie(h,.06,.05),e);u.position.set((s+l)/2,d,(r+c)/2),u.rotation.y=-Math.atan2(r-c,s-l),u.castShadow=!0,t.add(u)}}}return t}var Yc=null;function Ju(){if(Yc)return Yc;let i=128,t=$e(i,i),e=t.getContext("2d"),n=Te(5);for(let s=0;s<9;s++){let r=30+n()*68,o=44+n()*40,a=18+n()*22,l=e.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(255,255,255,0.95)"),l.addColorStop(.6,"rgba(255,255,255,0.55)"),l.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=l,e.beginPath(),e.arc(r,o,a,0,oe),e.fill()}return Yc=Ze(t),Yc}function W0(i,t,e,n,s=14,r=9){let o=new at,a=Te(r),l=Ju();for(let c=0;c<s;c++){let h=new Yn({map:l,transparent:!0,depthWrite:!1,opacity:.75,color:"#fffaf6"}),d=new ei(h),u=a()*oe,f=Math.sqrt(a());d.position.set(i+Math.cos(u)*e*f,-.4+a()*1.6,t+Math.sin(u)*n*f);let p=2.2+a()*2.6;d.scale.set(p*1.4,p,1),d.userData={base:d.position.clone(),ph:a()*oe,sp:.15+a()*.2,op:.55+a()*.3},d.userData.noAO=!0,o.add(d)}return o.userData.update=(c,h=1)=>{for(let d of o.children){let u=d.userData;d.position.x=u.base.x+Math.sin(c*u.sp+u.ph)*.35,d.position.y=u.base.y+Math.sin(c*u.sp*.7+u.ph)*.12,d.material.opacity=u.op*h}},o}function X0(i=22){let t=new at,e=Te(77),n=Ju();for(let s=0;s<i;s++){let r=new Yn({map:n,transparent:!0,depthWrite:!1,opacity:.55,color:"#ffffff",fog:!1}),o=new ei(r),a=e()*oe,l=22+e()*26,c=-14+e()*22;o.position.set(Math.cos(a)*l,c,Math.sin(a)*l);let h=6+e()*9;o.scale.set(h*1.6,h,1),o.userData={a,r:l,y:c,sp:(.004+e()*.006)*(e()<.5?1:-1),op:.35+e()*.35},t.add(o)}return t.userData.update=(s,r,o=1)=>{for(let a of t.children){let l=a.userData,c=l.a+s*l.sp;a.position.set(Math.cos(c)*l.r,l.y,Math.sin(c)*l.r),a.material.opacity=l.op*o,r&&a.material.color.copy(r)}},t}var ma={cream:"#fff4e4",paper:"#fffaf0",wood:"#d79a64",woodLight:"#e8b680",woodDark:"#a8683f",walnut:"#8a5536",terracotta:"#e0805a",clay:"#d8735a",sage:"#a8c98a",leaf:"#78b85e",leafDark:"#4f9a4a",mint:"#9fdcc0",peach:"#ffb99a",blush:"#ffc4cf",rose:"#f490a8",butter:"#ffe08a",mustard:"#f2c14e",sky:"#9ccdf2",denim:"#7a9fd6",lilac:"#c7b6ee",plum:"#9a6fb0",charcoal:"#4a3c38",ink:"#3b2a25",white:"#fffdf8",metal:"#c9c3bd",brass:"#e2b866",glass:"#dff3ff"},Ku=new Map;function j(i,t={}){let e=JSON.stringify([i,t.roughness,t.metalness,t.emissive,t.emissiveIntensity,t.transparent,t.opacity,t.side,t.flat]);if(Ku.has(e))return Ku.get(e);let n=new se({color:new pt(i),roughness:t.roughness??.72,metalness:t.metalness??0,emissive:t.emissive?new pt(t.emissive):new pt(0,0,0),emissiveIntensity:t.emissiveIntensity??1,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??Bn,flatShading:!!t.flat,envMapIntensity:t.envMapIntensity??.6});return Ku.set(e,n),n}function wi(i,t={}){return new se({color:new pt(i),roughness:t.roughness??.7,metalness:t.metalness??0,emissive:t.emissive?new pt(t.emissive):new pt(0,0,0),emissiveIntensity:t.emissiveIntensity??1,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??Bn,map:t.map||null,envMapIntensity:t.envMapIntensity??.6})}function Ti(i,t={}){return new se({map:i,color:new pt(t.color??"#ffffff"),roughness:t.roughness??.8,metalness:0,transparent:!!t.transparent,side:t.side??Bn,envMapIntensity:t.envMapIntensity??.5,alphaTest:t.alphaTest??0})}var ga=new R;function ri(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ga.copy(t),ga[n]=0,ga.normalize();let c=.5*o/(o+a),h=1-ga.angleTo(i)/l;return Math.sign(ga[e])===1?h*c:a/(o+a)+c+c*(1-h)}var xa=class i extends Ie{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new R,c=new R,h=new R(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,x=new R,m=.5/o;for(let g=0,b=0;g<d.length;g+=3,b+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),f[b+0]=ri(x,c,"z","y",r,n),f[b+1]=1-ri(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),f[b+0]=1-ri(x,c,"z","y",r,n),f[b+1]=1-ri(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),f[b+0]=1-ri(x,c,"x","z",r,t),f[b+1]=ri(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[b+0]=1-ri(x,c,"x","z",r,t),f[b+1]=1-ri(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[b+0]=1-ri(x,c,"x","y",r,t),f[b+1]=1-ri(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),f[b+0]=ri(x,c,"x","y",r,t),f[b+1]=1-ri(x,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var ju=new Map,$i=(i,t)=>{if(!ju.has(i)){let e=t();e.userData.shared=!0,ju.set(i,e)}return ju.get(i)};function ht(i,t,e,n=.04,s=3){return n=Math.min(n,i/2-1e-4,t/2-1e-4,e/2-1e-4),$i(`rbox:${i}:${t}:${e}:${n}:${s}`,()=>new xa(i,t,e,s,Math.max(1e-4,n)))}function ue(i,t,e,n=24,s=!1){return $i(`cyl:${i}:${t}:${e}:${n}:${s}`,()=>new Mn(i,t,e,n,1,s))}function Gn(i,t,e=.05,n=32){return $i(`rcyl:${i}:${t}:${e}:${n}`,()=>{let s=Math.min(e,i*.5,t*.5),r=[new Y(0,-t/2)],o=6;for(let a=0;a<=o;a++){let l=-Math.PI/2+a/o*(Math.PI/2);r.push(new Y(i-s+Math.cos(l)*s,-t/2+s+Math.sin(l)*s))}for(let a=0;a<=o;a++){let l=a/o*(Math.PI/2);r.push(new Y(i-s+Math.cos(l)*s,t/2-s+Math.sin(l)*s))}return r.push(new Y(0,t/2)),new xi(r,n)})}function ze(i,t=24,e=16){return $i(`sphere:${i}:${t}:${e}`,()=>new dn(i,t,e))}function En(i,t,e=12,n=32,s=Math.PI*2){return $i(`torus:${i}:${t}:${e}:${n}:${s}`,()=>new On(i,t,e,n,s))}function Zs(i,t,e=6,n=14){return $i(`capsule:${i}:${t}:${e}:${n}`,()=>new Fs(i,t,e,n))}function as(i,t){return $i(`plane:${i}:${t}`,()=>new Dn(i,t))}function Yr(i,t=40){return $i(`circle:${i}:${t}`,()=>new ni(i,t))}function Ei(i,t,e,n=.5){return $i(`cushion:${i}:${t}:${e}:${n}`,()=>{let s=new xa(i,t,e,5,Math.min(i,t,e)*.45),r=s.attributes.position;for(let o=0;o<r.count;o++){let a=r.getX(o)/(i/2),l=r.getZ(o)/(e/2),c=r.getY(o),h=(1-Math.min(1,a*a))*(1-Math.min(1,l*l));r.setY(o,c+Math.sign(c)*h*t*n*.5)}return s.computeVertexNormals(),s})}function Js(i,t=32,e=40,n=null){let s=()=>{let o=new rs(i.map(([a,l])=>new Y(a,l))).getSpacedPoints(e).map(a=>new Y(Math.max(0,a.x),a.y));return new xi(o,t)};return n?$i(`slathe:${n}`,s):s()}function k(i,t,e={}){let n=new mt(i,t);return e.pos&&n.position.set(...e.pos),e.rot&&n.rotation.set(...e.rot),e.scale!==void 0&&(Array.isArray(e.scale)?n.scale.set(...e.scale):n.scale.setScalar(e.scale)),n.castShadow=e.cast??!0,n.receiveShadow=e.receive??!0,e.name&&(n.name=e.name),n}function Vn(i={},...t){let e=new at;i.pos&&e.position.set(...i.pos),i.rot&&e.rotation.set(...i.rot),i.scale!==void 0&&(Array.isArray(i.scale)?e.scale.set(...i.scale):e.scale.setScalar(i.scale)),i.name&&(e.name=i.name);for(let n of t)n&&e.add(n);return e}var Le=.15,va=.32,q0={commons:{paper:"#f3e6d8",pattern:"dots",accent:"#e9c8b8",wainscot:"#ecd9c4",board:"#bfa088"},workshop:{paper:"#e9e4d8",pattern:"stripes",accent:"#d6d2bf",wainscot:"#ddd5c2",board:"#b39c86"},study:{paper:"#e5e3ea",pattern:"scallop",accent:"#cfcbe0",wainscot:"#d9d4e0",board:"#a99aa4"},kitchen:{paper:"#eef0e2",pattern:"gingham",accent:"#d3dcbf",wainscot:"#e2e4d0",board:"#b4a58e"},bunk:{paper:"#e7ecef",pattern:"stripes",accent:"#cdd8de",wainscot:"#d8dfe2",board:"#a8a0a0"},yours:{paper:"#f3e7e4",pattern:"flowers",accent:"#e8cfd0",wainscot:"#eadad5",board:"#bba39a"},attic:{paper:"#ebe0d0",pattern:"stripes",accent:"#dccdb8",wainscot:"#e0d2bd",board:"#b49c84"}},Qu=new Map;function Y0(i,t){let e=i+":"+t;if(!Qu.has(e)){let n=q0[i]||q0.commons,s=I0({...n,unit:2,height:t,wainscotH:Math.min(1,t*.35),seed:i.length});Qu.set(e,Ti(s,{roughness:.9}))}return Qu.get(e)}function J0(i){return Ti(L0({height:i}),{roughness:.88})}var R_=()=>j("#f4eadc",{roughness:.85}),td=class{constructor(t,e){this.house=t,Object.assign(this,e),this.group=new at,this.group.position.set(e.cx,e.base,e.cz),this.group.rotation.y=e.rotY;let[n,s]=O0[e.side];this.outward=new Y(n,s),this.cutK=new Tn(0,2.2,.85),this.fade=new Tn(1,3,1),this.decor=new at,this.group.add(this.decor),this.items=[];let r=e.kind==="exterior",o=.22,a=r?-.22:-.22/2,l=Y0(e.roomA.id,Math.round(e.height*10)/10),c=r?J0(Math.round(e.height*10)/10):Y0(e.roomB.id,Math.round(e.height*10)/10);if(this.mats=[c.clone(),l.clone(),R_().clone()],r&&!e.sealed){this.stub=new mt(this._extrude(0,va,o,a),this.mats),this.stub.receiveShadow=this.stub.castShadow=!0,this.group.add(this.stub),this.upperPivot=new at,this.upperPivot.position.y=va,this.group.add(this.upperPivot);let d=this._extrude(va,e.height,o,a);d.translate(0,-va,0),this.upper=new mt(d,this.mats),this.upper.receiveShadow=!0,this.upperPivot.add(this.upper),this.proxy=new mt(this._extrude(0,e.height,o,a),new In({colorWrite:!1,depthWrite:!1})),this.proxy.castShadow=!0,this.proxy.userData.noAO=!0,this.group.add(this.proxy)}else this.full=new mt(this._extrude(0,e.height,o,a),this.mats),this.full.castShadow=this.full.receiveShadow=!0,this.group.add(this.full);let h=new mt(ht(e.length+.02,.07,.22+.05,.025),j("#e6d6c2",{roughness:.75}));h.position.set(0,e.height-.03,a+.22/2),h.castShadow=!1,(this.upperPivot||this.group).add(h),this.upperPivot&&(h.position.y-=va)}_extrude(t,e,n,s){let r=this.length,o=new un,a=[];for(let p of this.openings){let x=p.type==="door"?0:p.y,m=p.type==="door"?p.h:p.y+p.h;if(m<=t||x>=e)continue;let g=p.u-p.w/2,b=p.u+p.w/2;if(x<=t+1e-4)a.push({x0:g,x1:b,top:Math.min(m,e),arched:p.shape==="arch"&&m<=e&&m-p.w/2>=t,r:p.w/2,u:p.u,fullTop:m});else{let w=new zs,v=Math.max(x,t+.001),T=Math.min(m,e-.001);if(p.shape==="round")w.absarc(p.u,p.y+p.h/2,Math.min(p.w,p.h)/2,0,oe,!1);else if(p.shape==="arch"&&T===m){let M=p.w/2;w.moveTo(g,v),w.lineTo(b,v),w.lineTo(b,T-M),w.absarc(p.u,T-M,M,0,Math.PI,!1),w.lineTo(g,v)}else w.moveTo(g,v),w.lineTo(b,v),w.lineTo(b,T),w.lineTo(g,T),w.lineTo(g,v);o.holes.push(w)}}a.sort((p,x)=>p.x0-x.x0),o.moveTo(-r/2,t);for(let p of a)o.lineTo(p.x0,t),p.arched?(o.lineTo(p.x0,p.fullTop-p.r),o.absarc(p.u,p.fullTop-p.r,p.r,Math.PI,0,!0)):(o.lineTo(p.x0,p.top),o.lineTo(p.x1,p.top)),o.lineTo(p.x1,t);o.lineTo(r/2,t),o.lineTo(r/2,e),o.lineTo(-r/2,e),o.lineTo(-r/2,t);let l=new gi(o,{depth:n,bevelEnabled:!1,curveSegments:20}),c=l.groups[0],h=l.groups[1],d=c.count/2;l.clearGroups(),l.addGroup(c.start,d,0),l.addGroup(c.start+d,d,1),h&&l.addGroup(h.start,h.count,2);let u=l.attributes.uv,f=l.attributes.position;for(let p=0;p<u.count;p++)p<c.start+c.count&&u.setXY(p,f.getX(p)+r*7,f.getY(p));return l.translate(0,0,s),l}add(t,e,n,s=0,r=null){let o=new at;return o.position.set(e,n,s),o.add(t),o.userData.order=r??n,this.decor.add(o),this.items.push(o),o}setFade(t){this.fade.target=t}update(t,e,n){if(this.upperPivot){let o=this.outward.x*e.x+this.outward.y*e.y,a=n||o>.2?1:0;this.cutK.target=a,this.cutK.update(t);let l=_t(this.cutK.x,0,1.08),c=Math.max(5e-4,1-l);this.upperPivot.scale.y=c,this.upperPivot.visible=c>.002,this.cut=a===1;let h=a?1-Xi(0,.35,l):Xi(.55,1,1-l);for(let d of this.items){let u=a?h:qi(_t(h));d.scale.setScalar(Math.max(1e-4,u)),d.visible=u>.01}this.cutAmount=l}this.fade.update(t);let s=_t(this.fade.x,.12,1),r=s<.98;for(let o of this.mats)o.transparent!==r&&(o.transparent=r,o.depthWrite=!r,o.needsUpdate=!0),o.opacity=s;for(let o of this.items)o.traverse(a=>a.isMesh&&a.material&&A_(a,s))}};function A_(i,t){if(!i.userData.__fadeMat){if(t>=.98)return;i.userData.__fadeMat=!0,i.material=i.material.clone()}let e=i.material,n=t<.98;e.transparent!==n&&!e.userData?.alwaysTransparent&&(e.transparent=n,e.depthWrite=!n,e.needsUpdate=!0),e.opacity=t}var ya=new se({color:"#d9ecf5",emissive:"#ffcf8a",emissiveIntensity:0,roughness:.15,metalness:.1,transparent:!0,opacity:.55});ya.userData.alwaysTransparent=!0;function C_(i,t){let e=new at,n=j("#fbf4ea",{roughness:.6}),s=i.w,r=i.h,o=.08;if(i.shape==="round"){let l=Math.min(s,r)/2,c=k(new On(l,.06,8,36),n,{pos:[0,r/2,.02]});return e.add(c),e.add(k(new ni(l,32),ya,{pos:[0,r/2,-.22*.5],cast:!1})),e.add(k(ht(.05,l*2,.05,.02),n,{pos:[0,r/2,-.22*.5]})),e.add(k(ht(l*2,.05,.05,.02),n,{pos:[0,r/2,-.22*.5]})),e}e.add(k(ht(s+o*2,o,.08,.02),n,{pos:[0,-o/2,.02]})),i.shape!=="arch"&&e.add(k(ht(s+o*2,o,.08,.02),n,{pos:[0,r+o/2,.02]}));for(let l of[-1,1])e.add(k(ht(o,i.shape==="arch"?r-s/2:r,.08,.02),n,{pos:[l*(s/2+o/2),(i.shape==="arch"?r-s/2:r)/2,.02]}));i.shape==="arch"&&e.add(k(new On(s/2+o/2,o/2,6,20,Math.PI),n,{pos:[0,r-s/2,.02]})),e.add(k(ht(s+.3,.07,.28,.025),n,{pos:[0,-.07,.1]}));let a=i.shape==="arch"?P_(s,r):new Dn(s,r).translate(0,r/2,0);return e.add(k(a,ya,{pos:[0,0,-.22*.5],cast:!1})),e.add(k(ht(.04,r,.04,.015),n,{pos:[0,r/2,-.22*.5]})),e.add(k(ht(s,.04,.04,.015),n,{pos:[0,r*.55,-.22*.5]})),e}function P_(i,t){let e=new un,n=i/2;return e.moveTo(-n,0),e.lineTo(n,0),e.lineTo(n,t-n),e.absarc(0,t-n,n,0,Math.PI,!1),e.lineTo(-n,0),new os(e,16)}function I_(i){let t=new at,e=j("#d8b998",{roughness:.7}),n=i.w,s=i.h,r=n/2;for(let o of[.02,-.22-.02]){for(let a of[-1,1])t.add(k(ht(.09,s-r,.06,.02),e,{pos:[a*(r+.045),(s-r)/2,o]}));t.add(k(new On(r+.045,.045,6,20,Math.PI),e,{pos:[0,s-r,o]}))}return t}function D_(i){let t=new at,e=j("#b98f6c",{roughness:.85}),n=Te(3);for(let l=0;l<4;l++){let c=.35+l*.45;t.add(k(ht(i.w+.3,.2,.05,.02),e,{pos:[(n()-.5)*.1,c,.06],rot:[0,0,(n()-.5)*.25]}))}t.add(k(ht(.16,i.h-.2,.05,.02),e,{pos:[0,i.h/2-.1,.035],rot:[0,0,.5]}));let s=k(as(i.w,.06),new In({color:"#ffc879",transparent:!0,opacity:.95}),{pos:[0,.03,.08],rot:[0,0,0],cast:!1,receive:!1});t.add(s);let r=new Yn({map:$0(),color:"#ffc173",transparent:!0,depthWrite:!1,opacity:.55,blending:zi}),o=new ei(r);o.scale.set(i.w*2.2,.7,1),o.position.set(0,.06,.35),o.userData.noAO=!0,t.add(o);let a=k(as(i.w*1.5,.9),new In({map:$0(),color:"#ffb866",transparent:!0,opacity:.5,depthWrite:!1,blending:zi}),{pos:[0,.01,.5],rot:[-Math.PI/2,0,0],cast:!1,receive:!1});return t.add(a),t.userData.glow={glowMat:r,leak:s,spill:a},t}var $c=null;function $0(){if($c)return $c;let i=$e(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),$c=Ze(i),$c}var Zc=null;function L_(){if(Zc)return Zc;let i=$e(256,256),t=i.getContext("2d");t.fillStyle="#c99a8f",t.fillRect(0,0,256,256);let e=Te(8);for(let s=0;s<8;s++)for(let r=0;r<9;r++){let o=r*32-s%2*16,a=s*32;t.fillStyle=`hsl(${8+e()*10}, ${28+e()*10}%, ${62+e()*8}%)`,t.beginPath(),t.moveTo(o,a),t.lineTo(o+30,a),t.lineTo(o+30,a+22),t.quadraticCurveTo(o+15,a+34,o,a+22),t.closePath(),t.fill(),t.strokeStyle="rgba(110,70,60,0.25)",t.lineWidth=2,t.stroke()}let n=Ze(i,{repeat:!0});return n.repeat.set(1/1.6,1/1.6),Zc=new se({map:n,roughness:.85,side:ke}),Zc}var N_=new se({color:"#fbfdff",roughness:.9,emissive:"#c8d8ff",emissiveIntensity:.05});function U_(i,t,e,n=.4){let s=new at,r=i.x1-i.x0+n*2,o=i.z1-i.z0+n*2,a=(i.x0+i.x1)/2,l=(i.z0+i.z1)/2,c=o/2,h=Math.hypot(c,e),d=Math.atan2(e,c),u=g=>{let b=new Ie(r,.14,h+.05),w=b.attributes.uv;for(let M=0;M<w.count;M++)w.setXY(M,w.getX(M)*r,w.getY(M)*h);let v=new mt(b,L_());v.position.set(a,t+e/2,l+g*c/2),v.rotation.x=g*d,v.castShadow=!0,v.receiveShadow=!0;let T=new mt(new Ie(r*.98,.09,h*.96),N_);T.position.y=.11,T.userData.snow=!0,v.add(T),s.add(v)};u(1),u(-1);let f=new un,p=i.z1-i.z0;f.moveTo(-p/2,0),f.lineTo(p/2,0),f.lineTo(0,e),f.lineTo(-p/2,0);let x=new gi(f,{depth:.22,bevelEnabled:!1});for(let g of[-1,1]){let b=new mt(x,J0(3));b.rotation.y=Math.PI/2,b.position.set(g>0?i.x1-.22:i.x0,t,l),b.castShadow=!0,s.add(b)}let m=new mt(ht(r,.12,.2,.05),j("#b98a80",{roughness:.8}));return m.position.set(a,t+e+.04,l),s.add(m),s.userData.ridgeY=t+e,s}var Jc=class{constructor(){this.group=new at,this.group.name="house",this.walls=[],this.rooms=[],this.roofs=[],this.floorMeshes=[],this.followers=new Map,this.levelGroups=[],this.focus=null,this.boardedDoors=[],this.windowGlows=[]}build({built:t,sealed:e=[],upstairs:n=!1}){this.group.clear(),this.walls=[],this.roofs=[],this.floorMeshes=[],this.boardedDoors=[],this.windowGlows=[];let r=[...new Set([...t,...e])].map(c=>qr[c]).filter(Boolean).map(c=>{let h=c.floor;return c.attic&&(h=n?2:1),{...c,level:h,base:Le+h*3,height:c.attic?2:3,sealed:e.includes(c.id)&&!t.includes(c.id)}});this.rooms=r,this.byId=Object.fromEntries(r.map(c=>[c.id,c])),this.levelGroups=[0,1,2].map(c=>{let h=new at;return h.name=`level:${c}`,this.group.add(h),h});for(let c of r.filter(h=>h.level===0)){let h=k(ht(c.x1-c.x0+.5,Le+.25,c.z1-c.z0+.5,.08),j("#cbbcae",{roughness:.9}),{pos:[(c.x0+c.x1)/2,(Le-.25)/2,(c.z0+c.z1)/2]});h.userData.groundFloor=!0,this.levelGroups[0].add(h),this.floorMeshes.push(h)}for(let c of r){let h=this.levelGroups[c.level];if(!c.sealed){let d=c.floorStyle==="tiles"?P0({a:"#efe6d6",b:"#e3d6c2",units:2,n:4}):C0({base:c.floorStyle==="boards"?"#d2b394":"#d9b896",units:4,plankW:c.floorStyle==="boards"?.6:.45,seed:c.id.length}),u=new Dn(c.x1-c.x0,c.z1-c.z0);u.rotateX(-Math.PI/2);let f=u.attributes.uv,p=u.attributes.position;for(let m=0;m<f.count;m++)f.setXY(m,p.getX(m)+(c.x0+c.x1)/2,p.getZ(m)+(c.z0+c.z1)/2);let x=new mt(u,Ti(d,{roughness:.7}));x.position.set((c.x0+c.x1)/2,c.base+.002,(c.z0+c.z1)/2),x.receiveShadow=!0,x.userData.floorOf=c.id,h.add(x),c.level===0&&this.floorMeshes.push(x)}if(c.level>0){let d=new mt(new Ie(c.x1-c.x0+.22*2,.22,c.z1-c.z0+.22*2),[j("#e8dccd"),j("#e8dccd"),j("#e8dccd"),j("#f4ece2"),j("#e8dccd"),j("#e8dccd")]);d.position.set((c.x0+c.x1)/2,c.base-.11,(c.z0+c.z1)/2),d.castShadow=d.receiveShadow=!0,h.add(d)}}let o=new Set;for(let c of r)for(let h of["north","south","east","west"]){let d=z0(c,h,r);if(d){let b=[c.id,d.id].sort().join("|");if(o.has(b))continue;o.add(b)}let u=d?"partition":"exterior",f=this._frame(c,h,u),p=this._openings(c,h,d,f),x=c.sealed||d&&d.sealed&&u==="exterior",m=new td(this,{kind:u,side:h,roomA:c,roomB:d,cx:f.cx,cz:f.cz,rotY:f.rotY,length:f.length,base:c.base,height:c.height,openings:p,sealed:c.sealed});this.levelGroups[c.level].add(m.group),this.walls.push(m);for(let b of p)if(b.type==="window"){let w=C_(b,u==="exterior");c.sealed&&w.add(z_(b)),m.add(w,b.u,b.y,0,b.y+1)}else if(b.boarded){let w=m.add(D_(b),b.u,0,d&&d.id===b.boardFacing?-.22:0,.2);d&&d.id===b.boardFacing&&(w.rotation.y=Math.PI),this.boardedDoors.push(w)}else m.add(I_(b),b.u,0,0,.3),b.front&&m.add(O_(b),b.u,0,0,.3);let g=`${c.id}:${h}`;m.followerKey=g,d&&(m.followerKeyB=`${d.id}:${k_(h)}`)}let a=new Map;for(let c of r){let h=`${c.x0},${c.z0}`;(!a.has(h)||a.get(h).level<c.level)&&a.set(h,c)}for(let c of a.values()){let h=c.attic?1.6:1.4,d=U_(c,c.base+c.height,h);d.userData.room=c,d.userData.always=c.sealed,this.group.add(d),this.roofs.push(d)}this.byId.commons&&this.levelGroups[0].add(this._stairs(n));let l=this.byId.attic;if(l&&!l.sealed){let c=n?this.byId.bunk:this.byId.workshop;c&&!c.sealed&&this.levelGroups[c.level].add(this._ladder(c.base,l.base))}this.byId.commons&&this.levelGroups[0].add(this._porch()),this._reattachFollowers(),this.upstairs=n}_frame(t,e,n){let s=(t.x0+t.x1)/2,r=(t.z0+t.z1)/2,o=t.x1-t.x0,a=t.z1-t.z0,l=n==="exterior"?.22*2:0;switch(e){case"north":return{cx:s,cz:t.z0,rotY:0,length:o+l,toU:(c,h)=>c-s};case"south":return{cx:s,cz:t.z1,rotY:Math.PI,length:o+l,toU:(c,h)=>-(c-s)};case"east":return{cx:t.x1,cz:r,rotY:-Math.PI/2,length:a,toU:(c,h)=>h-r};default:return{cx:t.x0,cz:r,rotY:Math.PI/2,length:a,toU:(c,h)=>-(h-r)}}}_openings(t,e,n,s){let r=[],o=a=>e==="north"||e==="south"?s.toU(a,0):s.toU(0,a);for(let a of k0){let l=!1;if(a.side&&a.a===t.id&&a.side===e&&!n&&(l=!0),!a.side&&n&&(a.a===t.id&&a.b===n.id||a.b===t.id&&a.a===n.id)&&(l=!0),!l||a.upstairsLanding&&!this._upstairsBuilt(t))continue;let c=a.boardedUntil&&(t.sealed||n&&n.sealed);r.push({type:"door",u:o(a.along),w:1.15,h:2.2,shape:"arch",front:a.front,boarded:c,boardFacing:c?t.sealed?n?.id:t.id:null})}if(!n&&!t.attic)for(let a of F0[t.id]||[]){if(a.side!==e)continue;let l=a.kind,c=l==="round"?{y:1.2,w:1,h:1}:l==="arch"?{y:.95,w:1.2,h:1.55}:{y:1,w:1.35,h:1.25};r.push({type:"window",u:o(a.along),shape:l,...c})}return t.attic&&!n&&(e==="east"||e==="west")&&r.push({type:"window",u:0,y:.45,w:.7,h:.7,shape:"round"}),r}_upstairsBuilt(t){return t.level>=1}_stairs(t){let e=new at;e.name="stairs";let n=j("#d3b08e",{roughness:.7}),s=10,r=5,o=.55,a=5.35,l=(r-o)/s;for(let d=0;d<s;d++){let u=Le+(d+1)*(3/s);e.add(k(ht(1,.1,l+.04,.03),n,{pos:[a,u-.05,r-(d+.5)*l]})),e.add(k(ht(.96,u-Le,.06,.01),j("#c9a37f"),{pos:[a,Le+(u-Le)/2,r-(d+1)*l+.03]}))}let c=Math.hypot(r-o,3),h=k(ht(.08,.3,c,.03),j("#b98f6c"),{pos:[a-.52,Le+3/2-.1,(r+o)/2],rot:[Math.atan2(3,r-o),0,0]});e.add(h);for(let d=0;d<=s;d+=2){let u=Le+d*(3/s);e.add(k(ue(.025,.025,.8),j("#e3cbb2"),{pos:[a-.45,u+.4,r-d*l]}))}if(e.add(k(ht(.06,.06,c,.02),j("#b98f6c"),{pos:[a-.45,Le+3/2+.8,(r+o)/2],rot:[Math.atan2(3,r-o),0,0]})),e.userData.footprint={x:a,z:(r+o)/2,w:1.1,d:r-o+.2},!t){let d=new at;d.name="stairBoxes";let u=Te(12);for(let f=0;f<7;f++){let p=Math.floor(f*1.3)+1,x=Le+p*(3/s),m=.42+u()*.18,g=k(ht(m,m*.8,m,.04),j(["#d9b48a","#cfa77d","#e2c19b"][f%3],{roughness:.9}),{pos:[a+(u()-.5)*.3,x+m*.4,r-(p-.5)*l],rot:[0,u()*.6,0]});d.add(g),g.add(k(ht(m*1.01,.05,.1,.01),j("#c08a5a"),{pos:[0,m*.4,0]}))}e.add(d),this.stairBoxes=d}return e}_ladder(t,e){let n=new at,s=j("#cfa77d",{roughness:.75}),r=e-t;for(let o of[-1,1])n.add(k(ht(.06,r+.4,.06,.02),s,{pos:[.7+o*.22,t+r/2+.2,-5.45],rot:[-.12,0,0]}));for(let o=1;o<r/.35;o++)n.add(k(ue(.025,.025,.44,6),s,{pos:[.7,t+o*.35,-5.45+o*.35*.12],rot:[0,0,Math.PI/2]}));return n}_porch(){let t=new at;t.name="porch";let e=j("#d6b896",{roughness:.8}),n=Si,s=n.x1-n.x0,r=n.z1-n.z0;for(let o=0;o<Math.round(s/.45);o++)t.add(k(ht(.43,.08,r,.02),e,{pos:[n.x0+.225+o*.45,Le-.04,n.z0+r/2]}));t.add(k(ht(1.4,.08,.35,.02),e,{pos:[2,.07,n.z1+.2]}));for(let o of[n.x0+.1,n.x1-.1])t.add(k(ht(.1,.9,.1,.03),j("#c9a37f"),{pos:[o,Le+.45,n.z1-.1]}));t.add(k(ht(s-2,.06,.06,.02),j("#c9a37f"),{pos:[n.x0+1+(s-2)/2+.9,Le+.75,n.z1-.1]}));for(let o=n.x0+3;o<n.x1-.2;o+=.35)t.add(k(ue(.02,.02,.6,5),j("#e3cbb2"),{pos:[o,Le+.42,n.z1-.1]}));return t.userData.footprint=null,t}follow(t,e,n){let s=`${t}:${e}`;this.followers.has(s)||this.followers.set(s,[]),this.followers.get(s).push(n),n.userData.baseScale=n.scale.clone()}_reattachFollowers(){for(let t of this.walls)t.followers=[...this.followers.get(t.followerKey)||[],...t.followerKeyB?this.followers.get(t.followerKeyB)||[]:[]]}wallOf(t,e){return this.walls.find(n=>n.followerKey===`${t}:${e}`||n.followerKeyB===`${t}:${e}`)}isCut(t,e){return!!this.wallOf(t,e)?.cut}update(t,e,n={}){let s=new Y(e.position.x,e.position.z);s.lengthSq()<1e-4&&s.set(0,1),s.normalize();let r=e.position.y<.2,o=n.focus?this.byId[n.focus]:null;for(let c of this.walls){let h=1;if(o&&c.kind==="partition"&&c.roomA.level===o.level&&Z0(c,e.position,o)&&(h=.15),o&&c.kind==="exterior"&&c.roomA.level===o.level&&c.roomA!==o&&Z0(c,e.position,o)&&(h=.15),c.setFade(h),c.update(t,s,!1),c.followers?.length){let d=c.upperPivot?1-_t(c.cutAmount??0):1;for(let u of c.followers){let f=u.userData.baseScale,p=d<.5?Xi(0,.5,d):1;u.scale.set(f.x*Math.max(1e-4,p),f.y*Math.max(1e-4,p),f.z*Math.max(1e-4,p)),u.visible=p>.01}}}let a=o?o.level:9;this.levelGroups.forEach((c,h)=>{let d=h<=a?1:0;c.userData.k=(c.userData.k??1)+(d-(c.userData.k??1))*Math.min(1,t*6),c.visible=c.userData.k>.02,c.position.y=(1-c.userData.k)*2.5});for(let c of this.floorMeshes)c.visible=!r;for(let c of this.roofs){let h=c.userData.room,d=c.userData.ridgeY,u=c.userData.always||!o&&(e.position.y<d+.4||r)||o&&h.level>o.level&&!1,f=o&&h.level>=o.level&&!c.userData.always,p=u&&!f?1:0;c.userData.k=(c.userData.k??p)+(p-(c.userData.k??p))*Math.min(1,t*7),c.visible=c.userData.k>.02,c.position.y=(1-c.userData.k)*3,c.scale.setScalar(.85+.15*c.userData.k),c.position.x=(1-(.85+.15*c.userData.k))*((h.x0+h.x1)/2),c.position.z=(1-(.85+.15*c.userData.k))*((h.z0+h.z1)/2)}let l=performance.now()/1e3;for(let c of this.boardedDoors){let h=c.children[0]?.userData.glow;h&&(h.glowMat.opacity=.45+Math.sin(l*1.7)*.12)}}setSnow(t){this.group.traverse(e=>{e.userData.snow&&(e.visible=t)})}setNight(t){ya.emissiveIntensity=t*1.4,ya.opacity=.55+t*.35}};function k_(i){return{north:"south",south:"north",east:"west",west:"east"}[i]}function Z0(i,t,e){let n=(e.x0+e.x1)/2,s=(e.z0+e.z1)/2,r=i.length/2,o=Math.cos(i.rotY),a=-Math.sin(i.rotY),l=i.cx-o*r,c=i.cz-a*r,h=i.cx+o*r,d=i.cz+a*r,u=[[n,s],[n+(e.x1-e.x0)*.3,s],[n-(e.x1-e.x0)*.3,s],[n,s+(e.z1-e.z0)*.3],[n,s-(e.z1-e.z0)*.3]];for(let[f,p]of u)if(F_(t.x,t.z,f,p,l,c,h,d))return!0;return!1}function F_(i,t,e,n,s,r,o,a){let l=(e-i)*(a-r)-(n-t)*(o-s);if(Math.abs(l)<1e-9)return!1;let c=((s-i)*(a-r)-(r-t)*(o-s))/l,h=((s-i)*(n-t)-(r-t)*(e-i))/l;return c>.001&&c<.999&&h>0&&h<1}function z_(i){let t=new at,e=j("#b98f6c",{roughness:.85});return t.add(k(ht(i.w+.2,.18,.05,.02),e,{pos:[0,i.h*.35,.06],rot:[0,0,.3]})),t.add(k(ht(i.w+.2,.18,.05,.02),e,{pos:[0,i.h*.65,.06],rot:[0,0,-.25]})),t}function O_(i){let t=new at,e=new at;e.position.set(-i.w/2+.03,.01,-.22*.5);let n=new un,s=i.w-.06,r=s/2;n.moveTo(0,0),n.lineTo(s,0),n.lineTo(s,i.h-r-.03),n.absarc(s/2,i.h-r-.03,r,0,Math.PI,!1),n.lineTo(0,0);let o=new mt(new gi(n,{depth:.07,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2,curveSegments:18}),j("#9fb7c9",{roughness:.6}));return o.castShadow=!0,e.add(o),e.add(k(ze(.045,10,8),j("#e2b866",{roughness:.3,metalness:.6}),{pos:[s-.12,1,.1]})),e.rotation.y=-1.25,t.add(e),t.userData.hinge=e,t}var K0=1.32,j0=-.9,Q0=.6,Kc=class{constructor(t){this.camera=t,this.k=0,this.az=new Tn(Math.PI/4,1.5,.8),this.el=new Tn(Q0,1.8,.9),this.zoom=new Tn(1,2.2,1),this.bounds={cx:3,cz:.5,radius:10,top:6,depth:8},this.target=new R(3,1.2,.5),this.goal=new R(3,1.2,.5),this.focusRect=null,this.followCritter=null,this.fitDist=30,this.time=0,this.onCorner=null,this._lastCorner=0}setBounds(t){this.bounds={...this.bounds,...t},this.fit()}cornerAngle(t){return Math.PI/4+t*(Math.PI/2)}rotate(t){this.k=((this.k+t)%4+4)%4,this.az.target+=t*(Math.PI/2)}goToCorner(t,e=!1){let n=this.az.target,s=this.cornerAngle(t),r=Math.round((n-s)/(Math.PI*2));this.az.target=s+r*Math.PI*2,this.k=t,e&&this.az.snap(this.az.target)}dragAz(t){this.az.target+=t,this.az.x+=t}snap(){let t=Math.round((this.az.target-Math.PI/4)/(Math.PI/2));this.az.target=Math.PI/4+t*(Math.PI/2),this.k=(t%4+4)%4}tiltBy(t){this.el.target=_t(this.el.target+t,j0,K0)}setTilt(t){this.el.target=_t(t,j0,K0)}zoomBy(t){this.zoom.target=_t(this.zoom.target*t,.32,1.35)}focusOn(t,e){this.focusRect=t,this.followCritter=null,this.goal.set((t.x0+t.x1)/2,e+1.1,(t.z0+t.z1)/2),this.zoom.target=.52}clearFocus(){this.focusRect=null,this.followCritter=null,this.zoom.target=1}follow(t){this.followCritter=t,this.focusRect=null,this.zoom.target=.42}get below(){return this.camera.position.y<.2}fit(){let t=this.camera,e=t.fov*Math.PI/180,n=2*Math.atan(Math.tan(e/2)*t.aspect),s=this.bounds.radius,r=Math.abs(this.el.x??Q0),o=t.aspect<.9,a=s*(o?.86:1.02)/Math.tan(n/2),c=(s*Math.sin(r)+this.bounds.top*Math.cos(r)*.6+1.2)/Math.tan(e/2);this.fitDist=Math.max(a,c,12)}update(t){this.time+=t,this.az.update(t),this.el.update(t),this.zoom.update(t),this.fit();let e=this.bounds;if(this.followCritter){let c=this.followCritter.root.position;this.goal.set(c.x,c.y+.8,c.z)}else if(!this.focusRect){let c=this.el.x<0;this.goal.set(e.cx,c?-e.depth*.35:1.3+e.top*.12,e.cz)}let n=this.followCritter?9:4;this.target.x=Ye(this.target.x,this.goal.x,n,t),this.target.y=Ye(this.target.y,this.goal.y,n,t),this.target.z=Ye(this.target.z,this.goal.z,n,t);let s=this.az.x+Math.sin(this.time*.1)*.008,r=this.el.x,o=this.fitDist*this.zoom.x,a=this.camera;a.position.set(this.target.x+Math.sin(s)*Math.cos(r)*o,this.target.y+Math.sin(r)*o,this.target.z+Math.cos(s)*Math.cos(r)*o),a.lookAt(this.target);let l=(Math.round((this.az.x-Math.PI/4)/(Math.PI/2))%4+4)%4;l!==this._lastCorner&&(this._lastCorner=l,this.onCorner?.(l))}get viewCorner(){return["se","ne","nw","sw"][this._lastCorner]}};var ls=new Vo,tp=new Y,jc=new Cn,$r=new R,B_=480,ep=320,Qc=class{constructor({dom:t,camera:e,rig:n,hooks:s}){this.dom=t,this.camera=e,this.rig=n,this.h=s,this.pointers=new Map,this.g=null,this.drag=null,this.moving=null,this.hover={critter:null,x:0,y:0,inside:!1},this.pet={critter:null,travel:0,dirs:0,lastDx:0,lastX:0,active:!1,idle:0},this.lastTap={t:0,critter:null},this.enabled=!0,t.addEventListener("pointerdown",r=>this._down(r)),window.addEventListener("pointermove",r=>this._move(r)),window.addEventListener("pointerup",r=>this._up(r)),window.addEventListener("pointercancel",r=>this._up(r,!0)),t.addEventListener("pointerleave",()=>{this.hover.inside=!1,this._setHover(null)}),t.addEventListener("wheel",r=>{this.enabled&&(r.preventDefault(),this.rig.zoomBy(1+Math.sign(r.deltaY)*.09))},{passive:!1}),t.addEventListener("contextmenu",r=>r.preventDefault())}_ndcFrom(t,e){let n=this.dom.getBoundingClientRect();return tp.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),ls.setFromCamera(tp,this.camera),{x:t-n.left,y:e-n.top}}get ray(){return ls}pickCritter(){let t=this.h.critters().filter(o=>o.root.visible!==!1),e=[];for(let o of t){e.push(o.body);for(let a of o.feet)e.push(a)}let n=ls.intersectObjects(e,!1);if(n.length)return{critter:n[0].object.userData.critter,dist:n[0].distance};let s=null,r=1/0;for(let o of t){let a=o.root.position.clone();a.y+=.5*o.size+o.mover.position.y;let l=ls.ray.distanceToPoint(a);l<.55*o.size&&l<r&&(r=l,s=o)}return s?{critter:s,dist:s.root.position.distanceTo(this.camera.position)}:null}pickProp(){let t=this.h.props();if(!t.length)return null;let e=ls.intersectObjects(t,!0);for(let n of e){let s=n.object,r=!0;for(let o=s;o;o=o.parent)o.visible===!1&&(r=!1);if(r){for(;s&&!s.userData.interactive;)s=s.parent;if(s)return{prop:s,dist:n.distance}}}return null}pick(){let t=this.pickCritter(),e=this.pickProp();return t&&e&&e.dist<t.dist-1?{prop:e.prop}:t?{critter:t.critter}:e?{prop:e.prop}:{}}_down(t){if(!this.enabled)return;this.h.sound?.unlock();let e=this._ndcFrom(t.clientX,t.clientY);if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.pointers.size===2){this._cancelLong(),this.drag&&this._endDrag();let[s,r]=[...this.pointers.values()];this.g={type:"pinch",d0:Math.hypot(s.x-r.x,s.y-r.y),z0:this.rig.zoom.target};return}if(this.pointers.size>2)return;let n=this.pick();if(this.g={type:"press",id:t.pointerId,x0:t.clientX,y0:t.clientY,px:e.x,py:e.y,lastX:t.clientX,lastY:t.clientY,t0:performance.now(),critter:n.critter||null,prop:n.prop||null,touch:t.pointerType==="touch",moved:!1,dirs:0,lastDx:0},n.critter||n.prop)try{this.dom.setPointerCapture(t.pointerId)}catch{}this._longTimer=setTimeout(()=>this._longPress(),B_)}_cancelLong(){clearTimeout(this._longTimer),this._longTimer=null}_longPress(){let t=this.g;!t||t.type!=="press"||t.moved||(t.type="long",t.critter?(this.h.haptic?.("tick"),this.h.onLongPressCritter?.(t.critter,{x:t.px,y:t.py})):t.prop&&t.prop.userData.movable?(this.h.haptic?.("tick"),this.moving={prop:t.prop},this.h.onMoveStart?.(t.prop)):t.prop&&this.h.onLongPressProp?.(t.prop))}_move(t){if(!this.enabled)return;let e=this._ndcFrom(t.clientX,t.clientY);this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY});let n=this.g;if(n&&n.type==="pinch"&&this.pointers.size===2){let[c,h]=[...this.pointers.values()],d=Math.hypot(c.x-h.x,c.y-h.y);this.rig.zoom.target=_t(n.z0*n.d0/Math.max(30,d),.32,1.35);return}if(!n||n.id!==t.pointerId){t.pointerType==="mouse"&&!this.drag&&this._hoverMove(e);return}let s=t.clientX-n.x0,r=t.clientY-n.y0,o=t.clientX-n.lastX;if(n.lastX=t.clientX,n.lastY=t.clientY,this.moving){this.h.onMoveDrag?.(this.moving.prop,ls);return}if(n.type==="drag-critter")return;if(n.type==="press"&&n.critter){if(Math.abs(o)>2&&Math.sign(o)!==Math.sign(n.lastDx||o)&&n.dirs++,Math.abs(o)>2&&(n.lastDx=o),n.dirs>=2&&Math.abs(r)<40){n.moved=!0,this._cancelLong(),this._petRub(n.critter,e);return}Math.hypot(s,r)>(n.touch?14:8)&&n.dirs<2&&(n.moved=!0,this._cancelLong(),n.type="drag-critter",this._startDrag(n.critter));return}n.type==="press"&&Math.hypot(s,r)>8&&(n.moved=!0,this._cancelLong(),n.type=Math.abs(s)>Math.abs(r)?"rotate":"tilt",n.az0=this.rig.az.target,n.el0=this.rig.el.target);let a=this.dom.clientWidth||800,l=this.dom.clientHeight||600;if(n.type==="rotate"){let c=n.az0-s/a*Math.PI*1.2;this.rig.dragAz(c-this.rig.az.target)}else n.type==="tilt"&&this.rig.setTilt(n.el0+r/l*2.6)}_up(t,e=!1){this.pointers.delete(t.pointerId);let n=this.g;if(!n)return;if(n.type==="pinch"){this.pointers.size===0&&(this.g=null);return}if(n.id!==t.pointerId)return;if(this._cancelLong(),this.g=null,this.moving){this.h.onMoveEnd?.(this.moving.prop),this.moving=null;return}if(n.type==="drag-critter"){this._endDrag();return}if(this.pet.active){this._endPet();return}if(n.type==="rotate"){let o=this.rig.k;this.rig.snap(),this.rig.k!==o&&this.h.onRotated?.();return}if(n.type==="tilt"||n.type==="long"||e)return;let s=performance.now();if(n.critter){if(this.lastTap.critter===n.critter&&s-this.lastTap.t<ep){this.lastTap={t:0,critter:null},clearTimeout(this._tapTimer),this.h.onDoubleTapCritter?.(n.critter);return}this.lastTap={t:s,critter:n.critter};let o=n.critter;clearTimeout(this._tapTimer),o.poke(),this._tapTimer=setTimeout(()=>this.h.onTapCritter?.(o,{x:n.px,y:n.py}),ep*.6);return}if(n.prop){this.h.onTapProp?.(n.prop,{x:n.px,y:n.py});return}let r=this.h.roomAt?.(ls);r?this.h.onTapRoom?.(r):this.h.onTapEmpty?.()}_hoverMove(t){this.hover.inside=!0,this.hover.x=t.x,this.hover.y=t.y;let{critter:e,prop:n}=this.pick();this._setHover(e||null,n||null),e?this._petRub(e,t):this._endPet()}_setHover(t,e=null){t!==this.hover.critter&&(this.hover.critter&&(this.hover.critter.hoverTarget=0),this.hover.critter=t,t&&(t.hoverTarget=1)),this.dom.style.cursor=this.drag?"grabbing":t?"grab":e?"pointer":"",this.h.onHover?.(t,e)}_petRub(t,e){let n=this.pet;n.critter!==t&&(this._endPet(),n.critter=t,n.travel=0,n.dirs=0,n.lastX=e.x);let s=e.x-n.lastX;n.travel+=Math.abs(s),Math.abs(s)>2&&Math.sign(s)!==Math.sign(n.lastDx||s)&&n.dirs++,Math.abs(s)>2&&(n.lastDx=s),n.lastX=e.x,n.idle=0,!n.active&&n.travel>120&&n.dirs>=2&&!t.held&&(n.active=!0,t.play("pet"),t.petting=!0,this.h.onPet?.(t));let r=t.root.position.clone();r.y+=.55*t.size,r.project(this.camera);let o=this.dom.getBoundingClientRect(),a=(r.x*.5+.5)*o.width,l=(-r.y*.5+.5)*o.height;t.petLean={x:_t((a-e.x)/60,-1,1),y:_t((e.y-l)/80,-1,1)}}_endPet(){let t=this.pet;t.critter&&t.active&&(t.critter.stop("pet"),t.critter.petting=!1,t.critter.setMood("content",6),this.h.onPetEnd?.(t.critter)),t.critter=null,t.active=!1,t.travel=0,t.dirs=0}_startDrag(t){this._endPet(),this.h.onPickUp?.(t),this.drag={critter:t,height:.85,floorY:t.root.position.y},t.stopWalking(),t.held=!0,t.falling=!1,t.vy=0,t.heldHeight=this.drag.height,t.stopSlot("main",.1),t.play("held"),t.drop?.(!0),this.dom.style.cursor="grabbing"}_endDrag(){let t=this.drag.critter;this.drag=null,t.held=!1,t.falling=!0,t.vy=.5,t.stop("held",.15),this.dom.style.cursor="",this.h.onDrop?.(t)}update(t){if(this.drag){let e=this.drag.critter,n=this.drag.floorY+this.drag.height+e.size;if(jc.set(new R(0,1,0),-n),ls.ray.intersectPlane(jc,$r)){let s=$r.x,r=$r.z;this.h.clampDrag&&([s,r]=this.h.clampDrag(s,r,e));let o=e.root.position,a=Ye(o.x,s,18,t),l=Ye(o.z,r,18,t),c=(a-o.x)/Math.max(t,1e-4),h=(l-o.z)/Math.max(t,1e-4);o.x=a,o.z=l;let d=Math.sin(e.heading),u=Math.cos(e.heading);e.heldVel.x=Ye(e.heldVel.x,c*u-h*d,8,t),e.heldVel.y=Ye(e.heldVel.y,c*d+h*u,8,t);let f=this.camera.position;e.setHeading(Math.atan2(f.x-o.x,f.z-o.z))}}if(this.hover.critter&&!this.drag&&this.hover.inside){let e=this.hover.critter,n=e.root.position.clone();if(n.y+=.6,jc.setFromNormalAndCoplanarPoint(new R(0,0,1).applyQuaternion(this.camera.quaternion),n),ls.ray.intersectPlane(jc,$r)){let s=this.camera.position.clone().sub($r).normalize().multiplyScalar(1.5);e.lookAt($r.clone().add(s),.6)}}this.pet.active&&(this.pet.idle+=t,this.pet.idle>.7&&!(this.g&&this.g.critter===this.pet.critter)&&this._endPet())}};var Zi={wood:"#c9ab8c",woodDark:"#a98a6c",woodLight:"#dcc3a6",linen:"#efe4d6",linen2:"#e4d6c4",sage:"#b9c4a8",dusk:"#b7b2c6",clay:"#d4a99a",slate:"#8f9aa0",brass:"#c8a873",ink:"#5d4a40"},_a=()=>j(Zi.wood,{roughness:.75}),sn=()=>j(Zi.woodDark,{roughness:.75}),ed=()=>j(Zi.woodLight,{roughness:.8}),th=(i=Zi.linen)=>j(i,{roughness:.95});function np(i=1.25){let t=new at,e=$e(512,512),n=e.getContext("2d"),s=["#e9d3bd","#dcc0a6","#efe0cf","#d6b9a0","#ebd8c6"];for(let c=0;c<9;c++){n.fillStyle=s[c%s.length],n.beginPath(),n.arc(256,256,250-c*27,0,oe),n.fill(),n.strokeStyle="rgba(120,90,70,0.12)",n.lineWidth=3;let h=250-c*27-13;for(let d=0;d<oe;d+=.09+c*.01)n.beginPath(),n.moveTo(256+Math.cos(d)*(h-8),256+Math.sin(d)*(h-8)),n.lineTo(256+Math.cos(d+.05)*(h+8),256+Math.sin(d+.05)*(h+8)),n.stroke()}let r=Ze(e),o=new mt(Yr(i,48),Ti(r,{roughness:.95}));o.rotation.x=-Math.PI/2,o.position.y=.012,o.receiveShadow=!0,t.add(o);let a=[],l=j("#f4e8da",{roughness:.95});for(let c=0;c<3;c++){let h=-.9+c*.9,d=Math.sin(h)*i*.55,u=Math.cos(h)*i*.25,f=new mt(Yr(.26,24),l);f.rotation.x=-Math.PI/2,f.position.set(d,.016,u),f.receiveShadow=!0,t.add(f),a.push({x:d,z:u})}return t.userData.spots=a,t}function ip(i=1.9,t=1.25){let e=new at,n=qu();n.repeat.set(i/1.2,t/1.2),e.add(k(ht(i+.14,t+.14,.07,.04),sn(),{pos:[0,0,.035]})),e.add(k(ht(i,t,.03,.01),Ti(n,{roughness:.95,color:"#e8dccd"}),{pos:[0,0,.075]}));let s=new at;s.position.z=.1,e.add(s);let r=[];for(let h=0;h<2;h++)for(let d=0;d<3;d++)r.push({x:-i/2+(d+.5)*(i/3),y:t/4-h*(t/2),z:.1});for(let h of r)e.add(k(ze(.025,8,6),j("#cdb8a2"),{pos:[h.x,h.y+.16,.1]}));let o=new at,a=j("#e6dccf",{roughness:1,side:ke}),l=new Dn(i+.3,t+.35,12,8),c=l.attributes.position;for(let h=0;h<c.count;h++){let d=c.getX(h),u=c.getY(h);c.setZ(h,.03+Math.sin(d*7.5)*.025*(.5-u/(t+.35))+.01)}return l.computeVertexNormals(),o.add(k(l,a,{pos:[0,-.06,.12]})),e.add(o),e.userData={notes:s,slots:r,cloth:o,w:i,h:t},e}function sp(){let i=new at,t=j("#cfb08c",{roughness:.95});i.add(k(Js([[0,0],[.2,0],[.24,.05],[.27,.42],[.25,.44]],22,14,"tossbin"),t));for(let n=0;n<4;n++)i.add(k(En(.22+n*.012,.012,6,28),j("#b89573"),{pos:[0,.08+n*.1,0],rot:[Math.PI/2,0,0]}));let e=new at;return e.position.y=.3,i.add(e),i.userData.inside=e,i.userData.top=.46,i}function nd(i=3,t=4){let e=new at,n=Te(i),s=["#d6b38c","#ccaa83","#dfc09c"],r=0;for(let o=0;o<t;o++){let a=.5+n()*.2,l=o>0&&n()<.5,c=new at;c.add(k(ht(a,a*.8,a,.04),j(s[o%3],{roughness:.95}))),c.add(k(ht(a*1.01,.05,.12,.01),j("#b98d63",{roughness:.8}),{pos:[0,a*.4,0]})),l?(c.position.set((n()-.5)*.15,r+a*.4,(n()-.5)*.1),r+=a*.8):(r=a*.8,c.position.set(o*.62-.5,a*.4,(n()-.5)*.3)),c.rotation.y=(n()-.5)*.5,e.add(c)}return e}function id(i=1.7,t="#c9b8a6"){let e=new at,n=j(t,{roughness:.95}),s=j(new pt(t).offsetHSL(0,0,.05).getStyle(),{roughness:.95});e.add(k(ht(i,.3,.8,.08),n,{pos:[0,.2,0]})),e.add(k(ht(i,.55,.22,.1),n,{pos:[0,.5,-.3]}));for(let r of[-1,1])e.add(k(ht(.2,.45,.8,.08),n,{pos:[r*(i/2-.08),.38,0]}));for(let r of[-1,1])e.add(k(Ei(i/2-.2,.12,.6,.6),s,{pos:[r*(i/4-.05),.4,.06]}));e.add(k(Ei(.34,.26,.12,.7),j("#e3c7b4",{roughness:.95}),{pos:[-i/2+.36,.58,-.14],rot:[-.2,.3,.1]}));for(let r of[-1,1])for(let o of[-1,1])e.add(k(ue(.035,.03,.08,8),sn(),{pos:[r*(i/2-.1),.04,o*.3]}));return e}function rp(i=.95,t=.7){let e=$e(384,Math.round(384*t/i));op(e);let n=Ze(e),s=new at;s.add(k(ht(i+.06,t+.06,.03,.01),ed(),{pos:[0,0,.015]}));let r=new mt(as(i,t),new se({map:n,roughness:.95}));return r.position.z=.035,s.add(r),s.userData={canvas:e,tex:n},s}function op(i,t="#f4ead8"){let e=i.getContext("2d");e.fillStyle=t,e.fillRect(0,0,i.width,i.height);let n=Te(i.width+i.height);for(let s=0;s<300;s++)e.fillStyle=`rgba(150,120,90,${n()*.06})`,e.fillRect(n()*i.width,n()*i.height,2,2)}function ap(i=.9,t=.6){let e=$e(384,Math.round(384*t/i));op(e);let n=Ze(e),s=new at;s.add(k(ht(i+.08,t+.08,.04,.02),sn(),{pos:[0,0,.02]}));let r=new mt(as(i,t),new se({map:n,roughness:.95}));return r.position.z=.045,s.add(r),s.userData={canvas:e,tex:n},s}function lp(i=2.5,t=.85,e=.6){let n=new at;n.add(k(ht(i,.08,t,.02),j("#cdb091",{roughness:.7}),{pos:[0,e,0]}));for(let o of[-1,1])for(let a of[-1,1])n.add(k(ht(.08,e,.08,.02),sn(),{pos:[o*(i/2-.1),e/2,a*(t/2-.1)]}));n.add(k(ht(i-.2,.05,t-.2,.02),sn(),{pos:[0,.16,0]})),n.add(k(ht(.16,.12,.12,.02),j(Zi.slate,{roughness:.5,metalness:.3}),{pos:[i/2-.15,e+.1,t/2-.1]})),n.add(k(ht(.5,.05,.12,.01),ed(),{pos:[-.4,.21,.05],rot:[0,.3,0]}));let s=[],r=[];for(let o=0;o<3;o++){let a=-i/2+(o+.5)*(i/3);s.push({x:a,y:e+.04,z:0}),n.add(k(ht(i/3-.12,.012,t-.2,.004),j("#b9c4a8",{roughness:1}),{pos:[a,e+.045,0]}));let l=new at;l.add(k(Ei(i/3-.08,.14,t-.1,.9),j("#e2d8ca",{roughness:1}),{pos:[0,.05,0]})),l.add(k(ht(.2,.18,.2,.03),j("#d6b38c",{roughness:.95}),{pos:[.1,.2,-.05],rot:[0,.4,0]})),l.position.set(a,e+.04,0),n.add(l),r.push(l)}return n.userData={slots:s,covers:r,top:e+.04},n}function sd({w:i=1.6,rows:t=2,perRow:e=4,gap:n=.48,color:s=Zi.wood}={}){let r=new at,o=j(s,{roughness:.75}),a=[];for(let l=0;l<t;l++){let c=l*n;r.add(k(ht(i,.05,.32,.015),o,{pos:[0,c,.16]}));for(let h of[-1,1])r.add(k(ht(.04,.16,.04,.01),sn(),{pos:[h*(i/2-.15),c-.09,.05],rot:[.6,0,0]}));for(let h=0;h<e;h++)a.push({x:-i/2+(h+.5)*(i/e),y:c+.025,z:.16})}return r.userData={slots:a},r}function cp(i=1.5,t=.95){let e=new at,n=$e(256,Math.round(256*t/i)),s=n.getContext("2d");s.fillStyle="#dcc6a8",s.fillRect(0,0,n.width,n.height),s.fillStyle="rgba(110,80,60,0.4)";for(let c=8;c<n.width;c+=16)for(let h=8;h<n.height;h+=16)s.fillRect(c-2,h-2,4,4);let r=j("#cdb595");e.add(k(ht(i,t,.04,.02),[r,r,r,r,Ti(Ze(n)),r],{pos:[0,0,.02]}));let o=[],a=j(Zi.brass,{metalness:.5,roughness:.4});for(let c=0;c<2;c++)for(let h=0;h<4;h++){let d=-i/2+(h+.5)*(i/4),u=t/2-.22-c*.45;e.add(k(Zs(.012,.05,4,6),a,{pos:[d,u,.06],rot:[Math.PI/2.4,0,0]})),o.push({x:d,y:u-.02,z:.08})}let l=j("#aab3ba",{roughness:.35,metalness:.6});return e.add(k(ht(.035,.3,.03,.01),ed(),{pos:[o[0].x,o[0].y-.14,.08]})),e.add(k(ht(.14,.06,.05,.015),l,{pos:[o[0].x,o[0].y+.01,.08]})),e.userData={slots:o,used:1},e}function hp(i=1.9,t=.75,e=.58){let n=new at;n.add(k(ht(i,.06,t,.02),j("#cfb393",{roughness:.7}),{pos:[0,e,0]}));for(let r of[-1,1])n.add(k(ht(.06,e,t-.1,.02),sn(),{pos:[r*(i/2-.08),e/2,0]}));n.add(k(ht(i-.2,.18,.04,.02),sn(),{pos:[0,e-.12,-t/2+.06]})),n.add(k(ue(.05,.045,.12,12),j(Zi.clay),{pos:[i/2-.2,e+.09,-t/2+.16]}));for(let r=0;r<3;r++)n.add(k(ue(.007,.007,.18,5),j(["#6a7d8c","#a07060","#8a9a6a"][r]),{pos:[i/2-.2+(r-1)*.02,e+.17,-t/2+.16],rot:[.1*(r-1),0,.12*(r-1)]}));let s=[];for(let r=0;r<2;r++)s.push({x:-i/4+r*(i/2)-.1*(r-.5),y:e+.035,z:.05});return n.userData={slots:s,top:e+.03},n}function up(i=1.6,t=2,e=.38,n=4,s=8){let r=new at,o=j("#c6a888",{roughness:.75}),a=.05;r.add(k(ht(a,t,e,.02),o,{pos:[-i/2+a/2,t/2,0]})),r.add(k(ht(a,t,e,.02),o,{pos:[i/2-a/2,t/2,0]})),r.add(k(ht(i+.06,a,e+.04,.02),o,{pos:[0,t-a/2,0]})),r.add(k(ht(i-.02,t-.02,.02,.01),j("#e3d3c0",{roughness:.9}),{pos:[0,t/2,-e/2+.012]}));let l=(t-.12)/n,c=[];for(let d=0;d<=n;d++){let u=.06+d*l;if(r.add(k(ht(i-.06,a,e-.02,.015),o,{pos:[0,u,0]})),d===n)break;for(let f=0;f<s;f++)c.push({x:-i/2+.12+f*((i-.24)/(s-1)),y:u+a/2,z:.02,h:l*.72})}let h=Te(8);for(let d=0;d<6;d++){let u=c[c.length-s+d],f=u.h*(.7+h()*.25);r.add(k(ht(.07,f,e*.7,.008),j(["#b9a28a","#a8b1a0","#c2ab9d","#a9a4b8"][d%4],{roughness:.85}),{pos:[u.x,u.y+f/2,u.z]}))}return r.userData={slots:c.slice(0,c.length-s)},r}function dp(){let i=new at,t=j("#8e9a8a",{roughness:.5});i.add(k(Gn(.09,.03,.01,16),t)),i.add(k(ue(.012,.012,.32,6),t,{pos:[0,.17,0],rot:[0,0,.25]}));let e=new mt(ue(.05,.11,.12,16,!0),wi("#e9e2c8",{emissive:"#ffcf8a",emissiveIntensity:0,side:ke}));e.position.set(-.08,.34,0),e.rotation.z=.5,i.add(e);let n=new mt(ze(.035,10,8),wi("#fff3d6",{emissive:"#ffd27a",emissiveIntensity:0}));n.position.set(-.1,.3,0),i.add(n);let s=new vi("#ffcf8a",0,3.2,1.6);return s.position.set(-.12,.26,0),i.add(s),i.userData={shade:e,bulb:n,light:s,on:0},i}function fp(i=1.4,t=1.3){let e=new at;e.add(k(ht(i+.12,t+.12,.06,.03),sn(),{pos:[0,0,.03]}));let n=$e(400,Math.round(400*t/i)),s=Ze(n),r=new mt(as(i,t),new se({map:s,roughness:.95}));return r.position.z=.065,e.add(r),e.add(k(ht(i*.8,.035,.1,.012),sn(),{pos:[0,-t/2-.05,.09]})),e.add(k(Zs(.012,.06,4,8),j("#f8f4ec"),{pos:[-.2,-t/2-.02,.09],rot:[0,0,Math.PI/2]})),e.userData={canvas:n,tex:s,draw(o){let a=n.getContext("2d"),l=n.width,c=n.height;a.fillStyle="#46564c",a.fillRect(0,0,l,c);let h=Te(5);for(let u=0;u<30;u++)a.fillStyle=`rgba(255,255,255,${h()*.05})`,a.beginPath(),a.ellipse(h()*l,h()*c,20+h()*50,6+h()*16,h()*3,0,oe),a.fill();a.font="30px 'Patrick Hand', cursive",a.textAlign="left";let d=(c-30)/7;for(let u=0;u<7;u++){let f=22+d*(u+.7),p=o[u];if(a.strokeStyle="rgba(255,255,255,0.35)",a.lineWidth=2,a.strokeRect(22,f-18,18,18),!p)continue;a.strokeStyle="rgba(255,255,255,0.9)",a.strokeRect(22,f-18,18,18),p.done&&(a.strokeStyle="#ffe2a8",a.lineWidth=3,a.beginPath(),a.moveTo(24,f-9),a.lineTo(31,f-2),a.lineTo(44,f-24),a.stroke()),a.fillStyle=p.done?"rgba(255,255,255,0.45)":"rgba(255,255,255,0.92)";let x=Wc(a,p.text,l-70,1)[0]||"";a.fillText(x,52,f),p.done&&a.fillRect(50,f-9,a.measureText(x).width+4,2)}s.needsUpdate=!0}},e.userData.draw([]),e}function pp(i=2,t=.62,e=.62){let n=new at;n.add(k(ht(i,e-.06,t,.03),j("#d9cbb8",{roughness:.85}),{pos:[0,(e-.06)/2,0]})),n.add(k(ht(i+.06,.06,t+.04,.02),j("#e8e2d8",{roughness:.5}),{pos:[0,e-.03,0]}));for(let s=0;s<3;s++)n.add(k(ht(i/3-.06,e-.2,.02,.01),j("#cdbda8"),{pos:[-i/3+s*(i/3),(e-.06)/2,t/2+.005]}));for(let s=0;s<3;s++)n.add(k(ze(.02,8,6),j(Zi.brass,{metalness:.4}),{pos:[-i/3+s*(i/3),e-.18,t/2+.02]}));return n.userData={top:e},n}function mp(){let i=new at,t=j("#a9bfb6",{roughness:.4,metalness:.15});return i.add(k(Js([[0,0],[.11,0],[.13,.08],[.12,.16],[.07,.2],[0,.21]],20,14,"kettle"),t)),i.add(k(En(.07,.012,6,16,Math.PI),sn(),{pos:[0,.22,0],rot:[0,Math.PI/2,0]})),i.add(k(ue(.015,.03,.12,8),t,{pos:[.14,.12,0],rot:[0,0,-.9]})),i}function gp(i=.6,t=.42){let e=new at;return e.add(k(Gn(i,.06,.02,32),j("#d8bf9f",{roughness:.7}),{pos:[0,t,0]})),e.add(k(ue(.06,.08,t,10),sn(),{pos:[0,t/2,0]})),e.add(k(Gn(.25,.04,.015,16),sn(),{pos:[0,.02,0]})),e}function xp(i="#d9c2a8"){let t=new at;t.add(k(Gn(.2,.06,.03,16),j(i,{roughness:.9}),{pos:[0,.3,0]}));for(let e=0;e<3;e++){let n=e/3*oe;t.add(k(ue(.02,.02,.3,6),sn(),{pos:[Math.sin(n)*.12,.15,Math.cos(n)*.12],rot:[Math.cos(n)*.15,0,-Math.sin(n)*.15]}))}return t}function vp(i=1.85,t=.95,e=["#d9c7d6","#c8d4c4"]){let n=new at,s=_a();for(let o of[-1,1])for(let a of[-1,1])n.add(k(ht(.07,1.7,.07,.02),s,{pos:[o*(i/2-.04),.85,a*(t/2-.04)]}));let r=[.32,1.12];r.forEach((o,a)=>{n.add(k(ht(i,.08,t,.03),s,{pos:[0,o,0]})),n.add(k(Ei(i-.1,.12,t-.1,.4),th("#f3ece2"),{pos:[0,o+.08,0]})),n.add(k(Ei(i*.62,.06,t-.04,.5),j(e[a%e.length],{roughness:.95}),{pos:[i*.17,o+.15,0]})),n.add(k(Ei(.36,.1,.5,.7),th("#fbf6ee"),{pos:[-i/2+.3,o+.18,0]}))}),n.add(k(ht(i*.7,.05,.05,.02),s,{pos:[i*.1,1.42,t/2-.04]}));for(let o=0;o<3;o++)n.add(k(ue(.018,.018,.22,6),s,{pos:[-i/2+.25,.5+o*.25,t/2+.02],rot:[0,0,Math.PI/2]}));return n.userData={spots:[{x:-i/2+.45,y:r[0]+.14},{x:-i/2+.45,y:r[1]+.14}]},n}function yp(i=1.7,t=2,e=5){let n=sd({w:i,rows:t,perRow:e,gap:.5,color:"#cbb193"}),s=j("#e5d6c3",{roughness:1,transparent:!0,opacity:.7});for(let r of n.userData.slots){let o=k(En(.09,.008,4,24),s,{pos:[r.x,r.y+.006,r.z],rot:[Math.PI/2,0,0],cast:!1});n.add(o),r.ring=o}return n}function _p(i=1.4,t=1.9,e="#d9cbe0"){let n=new at;return n.add(k(ht(i,.24,t,.05),_a(),{pos:[0,.14,0]})),n.add(k(ht(i,.7,.08,.04),_a(),{pos:[0,.4,-t/2+.04]})),n.add(k(Ei(i-.08,.16,t-.12,.3),th("#f6f0e6"),{pos:[0,.32,0]})),n.add(k(Ei(i,.06,t*.6,.4),j(e,{roughness:.95}),{pos:[0,.42,t*.18]})),n.add(k(Ei(.6,.14,.34,.7),th("#fbf6ee"),{pos:[0,.46,-t/2+.3]})),n}function bp(i=1.4,t=.7){let e=new at;e.add(k(ht(i,.05,t,.02),j("#d8c3a8"),{pos:[0,.36,0]}));for(let s of[-1,1])for(let r of[-1,1])e.add(k(ue(.025,.02,.34,6),sn(),{pos:[s*(i/2-.08),.17,r*(t/2-.08)]}));let n=[];for(let s=0;s<4;s++)n.push({x:-i/2+(s+.5)*(i/4),y:.385,z:0});return e.userData={slots:n},e}function Mp(i=2,t=1.2){let e=new at;for(let s of[-1,1])e.add(k(ht(.1,t+.7,.1,.03),sn(),{pos:[s*(i/2+.02),(t+.7)/2,0]}));e.add(k(ht(i,t,.05,.02),j("#d8c4a6",{roughness:.9}),{pos:[0,.6+t/2,0]})),e.add(k(ht(i+.4,.06,.4,.02),j("#a99b8f"),{pos:[0,t+.75,.05],rot:[.25,0,0]}));let n=[];for(let s=0;s<2;s++)for(let r=0;r<5;r++)n.push({x:-i/2+.2+r*((i-.4)/4),y:.6+t-.32-s*.5,z:.04});return e.userData={slots:n},e}function Sp(){let i=new at;return i.add(k(ue(.05,.07,1.9,8),sn(),{pos:[0,.95,0]})),i.add(k(ue(.03,.03,.7,6),_a(),{pos:[0,1.85,0],rot:[0,0,Math.PI/2]})),i.add(k(Gn(.16,.05,.02,12),j("#cbb79d"),{pos:[.3,1.88,0]})),i.userData.top={x:.3,y:1.92,z:0},i}function wp(){let i=new at;return i.add(k(ue(.09,.11,.8,10),sn(),{pos:[0,.4,0]})),i.add(k(En(.13,.03,6,18),j("#d9c39c",{roughness:1}),{pos:[0,.6,0],rot:[Math.PI/2,0,0]})),i.add(k(En(.18,.03,6,18),j("#d9c39c",{roughness:1}),{pos:[.1,.04,.2],rot:[Math.PI/2,0,0]})),i}function Tp(i=1.5){let t=new at,e=j("#d1bfa6",{roughness:.8});for(let r of[-1,1])t.add(k(ht(.14,1.6,.14,.04),e,{pos:[r*i/2,.8,0]}));let n=k(En(i/2,.06,6,24,Math.PI),e,{pos:[0,1.6,0]});t.add(n);let s=j("#a8b994",{roughness:.8});for(let r=0;r<9;r++){let o=r/8*Math.PI;t.add(k(ze(.07,6,5),s,{pos:[Math.cos(o)*i/2,1.6+Math.sin(o)*i/2,.04],scale:[1,.6,.8]}))}return t}function Ep(){let i=new at;i.add(k(ht(.12,.85,.12,.03),sn(),{pos:[0,.42,0]})),i.add(k(ht(.5,.05,.4,.02),sn(),{pos:[0,.02,0]}));let t=new at;t.position.y=.9,t.rotation.x=.45,t.add(k(ht(.9,.04,.6,.02),_a(),{}));let e=$e(512,340),n=Ze(e),s=new mt(new Dn(.84,.56),new se({map:n,roughness:.95,emissive:"#3a2c20",emissiveIntensity:.15,emissiveMap:n}));return s.rotation.x=-Math.PI/2,s.position.y=.03,t.add(s),i.add(t),i.userData={canvas:e,tex:n,pages:s},i}function Rp(i="#ffd27a",t=.34){let e=new at;e.add(k(ue(.12,.12,t,14),wi("#e8f4f0",{transparent:!0,opacity:.35,roughness:.1}),{pos:[0,t/2,0],cast:!1}));let n=new mt(ze(.08,12,10),wi(i,{emissive:i,emissiveIntensity:.9}));return n.position.y=t*.45,e.add(n),e.add(k(ue(.13,.13,.04,14),j(Zi.brass,{metalness:.5}),{pos:[0,t+.02,0]})),e.userData.goo=n,e}function rd(i,t=.05,e="#a7a196"){let n=new zn(i.map(s=>new R(...s)));return k(new Zn(n,24,t,8,!1),j(e,{roughness:.5,metalness:.3}))}var od=()=>j("#6fb35b",{roughness:.55}),Ap=()=>j("#8cc96f",{roughness:.55});function V_(i=.22,t=.34,e="#e88c66",n=!0){let s=new at,r=[[0,0],[i*.72,0],[i*.78,.02],[i*.92,t*.8],[i,t],[i*.88,t]];return s.add(k(Js(r,28,20,`pot:${i}:${t}`),j(e,{roughness:.75}))),n&&s.add(k(En(i*.96,.035,8,28),j(e,{roughness:.75}),{pos:[0,t,0],rot:[Math.PI/2,0,0]})),s.add(k(Yr(i*.88,24),j("#7a5136",{roughness:1}),{pos:[0,t-.03,0],rot:[-Math.PI/2,0,0],cast:!1})),s}function W_(i=.4,t=.22){let e=new un;e.moveTo(0,0),e.bezierCurveTo(t*.9,i*.15,t*.8,i*.85,0,i),e.bezierCurveTo(-t*.8,i*.85,-t*.9,i*.15,0,0);let n=new gi(e,{depth:.006,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:2,curveSegments:14}),s=n.attributes.position;for(let r=0;r<s.count;r++){let o=s.getX(r),a=s.getY(r);s.setZ(r,s.getZ(r)+o*o*1.6-Math.sin(a/i*Math.PI)*.03+a/i*(a/i)*.08)}return n.computeVertexNormals(),n}var Cp={},X_=(i,t,e)=>Cp[i]||(Cp[i]=W_(t,e));function Zr(i="leafy",{scale:t=1,color:e="#e88c66",seed:n=1}={}){let s=new at,r=Te(n),o=i==="succulent"?.18:.34,a=i==="succulent"?.16:.22;s.add(V_(a,o,e));let l=new at;if(l.userData.dynamic=!0,l.position.y=o-.02,s.add(l),i==="leafy")for(let h=0;h<9;h++){let d=h/9*oe+r()*.4,u=.35+r()*.5,f=.42+r()*.3,p=new at;p.rotation.set(0,d,0);let x=new at;x.rotation.x=u,p.add(x),x.add(k(ue(.01,.012,f*.6,5),j("#5e9c4c"),{pos:[0,f*.3,0]}));let m=k(X_("big",.36,.22),h%2?od():Ap(),{pos:[0,f*.55,0],rot:[-.6-r()*.4,0,0]});x.add(m),l.add(p)}else if(i==="round"){let c=Ap(),h=od();for(let d=0;d<14;d++){let u=r()*oe,f=r()*.18;l.add(k(ze(.12+r()*.06,12,10),d%3?c:h,{pos:[Math.cos(u)*f,.18+r()*.3,Math.sin(u)*f]}))}}else if(i==="tall")for(let c=0;c<7;c++){let h=c/7*oe+r(),d=.6+r()*.45,u=k(Zs(.05,d,4,8),c%2?j("#5e9c4c"):j("#7ab866"),{pos:[Math.cos(h)*.08,d/2,Math.sin(h)*.08],rot:[Math.sin(h)*.15,h,Math.cos(h)*.15],scale:[1,1,.28]});l.add(u)}else if(i==="succulent"){let c=j("#9fd3a8",{roughness:.5});for(let h=0;h<3;h++)for(let d=0;d<7;d++){let u=d/7*oe+h*.4,f=1.1-h*.35,p=Vn({rot:[0,u,0]},k(ze(.06,8,6),c,{pos:[0,.04+h*.02,.06-h*.02],rot:[f,0,0],scale:[.6,.4,1.3]}));l.add(p)}}else if(i==="flowers"){let c=["#ff9db5","#ffd36b","#fff4f0","#c7a8f2","#ffb59a"];for(let h=0;h<7;h++){let d=r()*oe,u=r()*.12,f=.3+r()*.25;l.add(k(ue(.008,.01,f,5),j("#5e9c4c"),{pos:[Math.cos(d)*u,f/2,Math.sin(d)*u]}));let p=Vn({pos:[Math.cos(d)*u,f,Math.sin(d)*u]}),x=j(c[h%c.length],{roughness:.6});for(let m=0;m<5;m++){let g=m/5*oe;p.add(k(ze(.035,8,6),x,{pos:[Math.cos(g)*.035,0,Math.sin(g)*.035],scale:[1,.5,1]}))}p.add(k(ze(.022,8,6),j("#ffcc4d"),{pos:[0,.012,0]})),l.add(p)}for(let h=0;h<6;h++){let d=h/6*oe;l.add(k(ze(.07,8,6),od(),{pos:[Math.cos(d)*.12,.05,Math.sin(d)*.12],scale:[1.2,.5,.7],rot:[0,-d,.3]}))}}return s.scale.setScalar(t),s.userData.foliage=l,s.userData.sway=r()*10,s}function Pp(i){return(t,e)=>{for(let n of i){let s=n.userData.foliage;if(!s)continue;let r=n.userData.sway;s.rotation.z=Math.sin(e*.9+r)*.025+(n.userData.wiggle||0)*Math.sin(e*18)*.12,s.rotation.x=Math.sin(e*.7+r*1.3)*.02,n.userData.wiggle&&(n.userData.wiggle=Math.max(0,n.userData.wiggle-t*1.2))}}}function Ip(i="#fff0d6"){let t=new at;t.add(k(Gn(.2,.05,.02,24),j("#c98454"),{pos:[0,.025,0]})),t.add(k(ue(.025,.025,1.45,10),j("#c98454"),{pos:[0,.75,0]}));let e=wi(i,{roughness:.9,emissive:"#ffcf8a",emissiveIntensity:0,side:ke}),n=k(new Mn(.2,.32,.36,28,1,!0),e,{pos:[0,1.5,0]});t.add(n),t.add(k(En(.32,.015,6,28),j("#ffb59a"),{pos:[0,1.32,0],rot:[Math.PI/2,0,0]}));let s=wi("#fff6dd",{emissive:"#ffd79a",emissiveIntensity:0});t.add(k(ze(.07,12,10),s,{pos:[0,1.42,0],cast:!1}));let r=new vi("#ffc98a",0,6.5,1.6);return r.position.set(0,1.35,0),t.add(r),t.userData.lamp={light:r,shadeMat:e,bulbMat:s,base:5.5,on:!0},t}function Dp(){let i=new at,t=j("#f07462",{roughness:.45}),e=j("#5a3a36",{roughness:.6});i.add(k(Gn(.17,.12,.03,20),e,{pos:[0,.06,0]})),i.add(k(ue(.07,.09,.25,12),e,{pos:[0,.22,0]})),i.add(k(Js([[0,0],[.38,0],[.42,.06],[.42,.62],[.36,.82],[.2,.93],[0,.96]],32,24,"mailbox"),t,{pos:[0,.32,0]})),i.add(k(En(.42,.025,8,32),j("#ffd6a0",{roughness:.4}),{pos:[0,.62,0],rot:[Math.PI/2,0,0]})),i.add(k(ht(.36,.06,.08,.025),j("#2a1a18"),{pos:[0,.98,.37],rot:[-.25,0,0]})),i.add(k(ht(.42,.04,.1,.02),j("#ffd6a0"),{pos:[0,1.03,.37],rot:[-.25,0,0]})),i.add(k(ze(.06,12,10),j("#fff3e0"),{pos:[0,.6,.41],scale:[1,1,.35]})),i.add(k(ze(.025,8,6),j("#f07462"),{pos:[-.016,.61,.43],scale:[1,1,.4]})),i.add(k(ze(.025,8,6),j("#f07462"),{pos:[.016,.61,.43],scale:[1,1,.4]}));let n=new at;return n.userData.dynamic=!0,n.position.set(.43,.75,0),n.add(k(ht(.03,.4,.03,.01),j("#ffd6a0"),{pos:[0,.2,0]})),n.add(k(ht(.03,.14,.2,.02),j("#ffd36b"),{pos:[0,.33,.1]})),i.add(n),i.userData.flag=n,i}var ae=Math.PI,eh=.22/2+.01,ad={north:ae,south:0,east:ae/2,west:-ae/2},oi=class{constructor(t,e){this.id=t,this.level=e,this.group=new at,this.group.name=`furnish:${t}`,this.stations=[],this.footprints=[],this.objects={},this.lights=[],this.glows=[],this.plants=[]}place(t,{x:e,z:n,y:s=0,rot:r=0,footprint:o=null,name:a=null,movable:l=!1}){return t.position.set(e,s,n),t.rotation.y=r,this.group.add(t),o&&this.footprints.push({x:e,z:n,rot:r,...o}),a&&(this.objects[a]=t),l&&(t.userData.movable={room:this.id,name:a}),t.userData.room=this.id,t}mount(t,e,n,s,r=null,o=qr[this.id]){let a=o,l={north:[n,a.z0+eh,0],south:[n,a.z1-eh,ae],west:[a.x0+eh,n,ae/2],east:[a.x1-eh,n,-ae/2]}[e];return t.position.set(l[0],s,l[1]),t.rotation.y=l[2],t.userData.wall=e,t.userData.room=this.id,this.group.add(t),r&&(this.objects[r]=t),t}station(t){let e={room:this.id,level:this.level,seat:0,tags:[],reservedBy:null,...t};return this.stations.push(e),e}};function q_(){let i=new oi("commons",0),t=i.mount(ip(1.9,1.25),"north",1.45,1.55,"board");i.station({id:"board",label:"pinning an idea to the board",activity:"pin",pos:{x:1.45,z:.8},face:ad.north,tags:["ideas"],role:"ideas"}),i.station({id:"board-think",label:"squinting at the idea board",activity:"ponder",pos:{x:2.25,z:1},face:ad.north+.3,tags:["ideas","fun"]}),i.mount(rp(.95,.7),"west",1.6,1.6,"map"),i.mount(ap(.9,.6),"west",5.05,1.75,"roster");let e=i.place(np(1.2),{x:2.55,z:3.3,name:"rug"});e.rotation.y=ae/4,i.place(id(1.7,"#cbbcab"),{x:.55,z:4.95,rot:ae/2,footprint:{w:1.75,d:.85},name:"couch",movable:!0}),i.station({id:"couch-a",label:"napping on the couch",activity:"sleep",pos:{x:.62,z:4.55},approach:{x:1.35,z:4.55},seat:.36,face:ae/2,tags:["rest"]}),i.station({id:"couch-b",label:"curled up on the couch",activity:"read",pos:{x:.62,z:5.35},approach:{x:1.35,z:5.35},seat:.36,face:ae/2,tags:["rest","calm"]}),i.place(sp(),{x:4.05,z:4.55,footprint:{r:.3},name:"bin"}),i.place(nd(4,4),{x:3.7,z:.75,name:"boxes"}),i.footprints.push({x:3.7,z:.75,w:2.2,d:.9,tag:"boxes"});let n=i.place(Ip("#efe4d2"),{x:.45,z:.45,footprint:{r:.26},name:"lamp",movable:!0});n.userData.lamp.base=4.5,i.lights.push(n);let s=i.place(Zr("leafy",{scale:1.05,color:"#cfa48e",seed:9}),{x:3.35,z:5.62,footprint:{r:.28},movable:!0,name:"plant"});return i.plants.push(s),i.station({id:"water-commons",label:"watering the big plant",activity:"water",pos:{x:3.35,z:4.95},face:0,tags:["care"]}),i.station({id:"gaze-commons",label:"watching the clouds go by",activity:"gaze",pos:{x:4.5,z:5.3},face:0,tags:["calm"]}),i.footprints.push({x:5.4,z:2.6,w:1,d:4.35}),i.place(new at().add(k(ht(1,.02,.55,.01),j("#c9b49a",{roughness:1}),{pos:[0,.01,0],cast:!1})),{x:2,z:5.55}),i}function Y_(){let i=new oi("workshop",0);i.place(lp(2.5,.85,.6),{x:2.45,z:-3.2,footprint:{w:2.6,d:.95},name:"bench"}).userData.slots.forEach((n,s)=>{i.station({id:`bench-${s}`,label:"building at the bench",activity:"build",slot:s,pos:{x:2.45+n.x,z:-2.35},face:ae,tags:["build","work"],role:"build",job:!0})});let e=[{x:2.9,z:-5.15},{x:4,z:-5.15},{x:5.1,z:-5},{x:5.15,z:-3.85}];i.objects.pedestalSpots=e;for(let n of e)i.footprints.push({x:n.x,z:n.z,r:.34,optional:!0});return i.mount(sd({w:1.6,rows:2,perRow:4}),"west",-1.5,1,"shelf"),i.station({id:"shelf-ws",label:"admiring the finished builds",activity:"admire",pos:{x:.85,z:-1.5},face:-ae/2,tags:["fun"]}),i.mount(cp(1.5,.95),"south",1.35,1.65,"pegboard"),i.place(nd(9,2),{x:5.2,z:-1,footprint:{w:1.2,d:.7}}),i.station({id:"tinker-ws",label:"tidying the tools",activity:"tinker",pos:{x:1.35,z:-.75},face:0,tags:["build","fun"]}),i.footprints.push({x:.7,z:-5.55,w:.7,d:.5}),i}function $_(){let i=new oi("study",0);i.place(hp(1.9,.75,.58),{x:-3.4,z:-2.9,footprint:{w:2,d:.85},name:"desk"}).userData.slots.forEach((s,r)=>{i.station({id:`desk-${r}`,label:"researching at the desk",activity:"research",slot:r,pos:{x:-3.4+s.x,z:-2.2},face:ae,tags:["research","work"],role:"research",job:!0,seat:0})});let e=dp();e.position.set(-3.4+.75,.61,-2.95-.2),i.group.add(e),i.objects.owlLamp=e,i.mount(up(1.7,2,.38,4,8),"east",-1.35,0,"books"),i.footprints.push({x:-.3,z:-1.35,w:.5,d:1.75}),i.station({id:"browse-study",label:"browsing the bookshelf",activity:"browse",pos:{x:-1,z:-1.35},face:ae/2,tags:["research","calm"]}),i.place(id(.95,"#bcc2b0"),{x:-1.2,z:-5,rot:-ae/4-ae/2+ae,footprint:{r:.55},movable:!0,name:"armchair"}),i.station({id:"read-study",label:"reading in the armchair",activity:"read",pos:{x:-1.25,z:-4.95},approach:{x:-1.9,z:-4.3},seat:.36,face:-ae*.75,tags:["calm","research"]}),i.objects.telescopeSpot={x:-5,z:-5},i.station({id:"gaze-study",label:"looking out the window",activity:"gaze",pos:{x:-4.6,z:-4.9},face:ae,tags:["calm"]});let n=i.place(Zr("tall",{scale:1,color:"#b8a6c4",seed:3}),{x:-5.5,z:-.5,footprint:{r:.25},movable:!0,name:"plant"});return i.plants.push(n),i}function Z_(){let i=new oi("kitchen",0);i.mount(fp(1.4,1.3),"north",-4.6,1.55,"chalkboard"),i.station({id:"chalk",label:"updating the chalkboard",activity:"chalk",pos:{x:-4.6,z:.8},face:ad.north,tags:["chores","work"],role:"chores",job:!0});let t=i.place(pp(2,.62,.62),{x:-.45,z:1.45,rot:-ae/2,footprint:{w:2.05,d:.7},name:"counter"}),e=mp();e.position.set(0,t.userData.top,-.5),t.add(e),i.objects.radioSpot={obj:t,x:0,y:t.userData.top,z:.45},i.station({id:"tea-make",label:"making a pot of tea",activity:"cook",pos:{x:-1.25,z:1.3},face:ae/2,tags:["chores","care"]}),i.place(gp(.6,.42),{x:-3.1,z:3.6,footprint:{r:.62},name:"table",movable:!0});let n=["#d9c2a8","#c9cfbd","#d8c7d4","#e0cfb4"];for(let r=0;r<4;r++){let o=r/4*ae*2+ae/4,a=-3.1+Math.sin(o)*.98,l=3.6+Math.cos(o)*.98;i.place(xp(n[r]),{x:a,z:l}),i.station({id:`tea-${r}`,label:"having tea",activity:"tea",pos:{x:a,z:l},seat:.3,face:o+ae,tags:["social","rest"]})}let s=i.place(Zr("round",{scale:.9,color:"#c9b49a",seed:6}),{x:-5.5,z:.55,footprint:{r:.25},movable:!0,name:"plant"});return i.plants.push(s),i.station({id:"water-kitchen",label:"watering the herbs",activity:"water",pos:{x:-4.9,z:.6},face:-ae/2,tags:["care"]}),i}function J_(){let i=new oi("bunk",1),t=[{x:2.45,z:-5.45,rot:0},{x:4.6,z:-5.45,rot:0},{x:.55,z:-1.35,rot:ae/2},{x:5.45,z:-2.75,rot:-ae/2}],e=[["#d9c7d6","#c8d4c4"],["#e2d0bd","#cfd2e0"],["#d0dccd","#e6cfd1"],["#dcd1e4","#e4d9c3"]];return t.forEach((n,s)=>{i.place(vp(1.85,.95,e[s]),{x:n.x,z:n.z,rot:n.rot,footprint:{w:1.9,d:1}}).userData.spots.forEach((o,a)=>{let l=o.x+.2,c=n.x+Math.cos(n.rot)*l,h=n.z-Math.sin(n.rot)*l,d=n.x+Math.cos(n.rot)*l+Math.sin(n.rot)*.95,u=n.z-Math.sin(n.rot)*l+Math.cos(n.rot)*.95;i.station({id:`bunk-${s}-${a}`,label:"asleep in a bunk",activity:"sleep",bunk:!0,pos:{x:c,z:h},approach:{x:d,z:u},seat:o.y,face:n.rot+ae,tags:["rest"]})})}),i.footprints.push({x:.7,z:-5.55,w:.7,d:.5}),i.place(new at().add(k(ht(2.2,.015,1.4,.01),j("#ddd0c2",{roughness:1}),{cast:!1,pos:[0,.01,0]})),{x:3,z:-3}),i.station({id:"bunk-chat",label:"chatting in the bunk room",activity:"sit",pos:{x:3,z:-3},face:ae/4,tags:["social"]}),i}function K_(){let i=new oi("yours",1);i.mount(yp(1.7,2,5),"east",-1.4,.95,"keepsakes"),i.place(_p(1.4,1.9,"#d9cbe0"),{x:-4.9,z:-1.35,rot:ae/2,footprint:{w:1.5,d:2},name:"bed",movable:!0}),i.place(bp(1.4,.7),{x:-3.2,z:-4.2,footprint:{w:1.45,d:.75},name:"facts"}),i.objects.factFloor=[{x:-1.6,z:-4.9},{x:-4.9,z:-4.6},{x:-2.2,z:-2.6},{x:-5.2,z:-3.2}],i.station({id:"tidy-yours",label:"tidying your room",activity:"tidy",pos:{x:-3.2,z:-3.5},face:ae,tags:["care"]});let t=i.place(Zr("flowers",{scale:.85,color:"#cfb7a4",seed:4}),{x:-.55,z:-5.45,footprint:{r:.22},movable:!0,name:"plant"});return i.plants.push(t),i}function j_(){let i=new oi("attic",1),t=Te(17),e=[];for(let n=0;n<3;n++)for(let s=0;s<4;s++)e.push({x:2.2+s*.95+(t()-.5)*.15,z:-4.9+n*1.25+(t()-.5)*.15});return i.objects.boxSpots=e,i.station({id:"attic-rummage",label:"rummaging in the attic",activity:"rummage",pos:{x:2,z:-1.2},face:ae,tags:["ideas","fun"]}),i}function Q_(){let i=new oi("gate",0);i.place(Dp(),{x:cn.mailbox.x,z:cn.mailbox.z,rot:.6,footprint:{r:.45},name:"mailbox"}).scale.setScalar(.9),i.station({id:"mailbox",label:"posting a letter",activity:"post",pos:{x:cn.mailbox.x+.45,z:cn.mailbox.z+.75},face:.6+ae,tags:["mail","work"],role:"mail",job:!0});let e=i.place(Mp(2,1.1),{x:cn.wall.x,z:cn.wall.z,rot:.55,footprint:{w:2.2,d:.4},name:"letterWall"});return i.station({id:"letter-read",label:"reading the letter wall",activity:"browse",pos:{x:cn.wall.x+.45,z:cn.wall.z+.75},face:.55+ae,tags:["mail","calm"]}),i.place(Sp(),{x:cn.perch.x,z:cn.perch.z,rot:-.4,footprint:{r:.2},name:"perch"}),i.place(wp(),{x:cn.mooring.x,z:cn.mooring.z,footprint:{r:.25},name:"mooring"}),i.place(Tp(1.5),{x:cn.entry.x,z:cn.entry.z,rot:-.35,name:"arch"}),i.footprints.push({x:cn.entry.x-.7,z:cn.entry.z-.25,r:.14},{x:cn.entry.x+.7,z:cn.entry.z+.25,r:.14}),i.station({id:"gate-gaze",label:"watching for the mail bird",activity:"gaze",pos:{x:-.6,z:10.6},face:.5,tags:["calm","mail"]}),i}function tb(){let i=new oi("porch",0);i.station({id:"porch-sit",label:"sitting on the porch step",activity:"sit",pos:{x:3.4,z:7.1},face:0,tags:["calm","social"]}),i.station({id:"porch-gaze",label:"looking at the mist",activity:"gaze",pos:{x:.9,z:7.9},face:-ae*.8,tags:["calm"]});let t=i.place(Zr("flowers",{scale:.8,color:"#c9b49a",seed:11}),{x:5.3,z:6.6,footprint:{r:.2}});return i.plants.push(t),i}function eb(){let i=new oi("underside",-1),t=i.group,e=-5.6,n=6.6,s=3.2,r=j("#a68a6e",{roughness:.9});t.add(k(ht(3.6,.12,2.6,.04),r,{pos:[n,e,s]}));for(let u=0;u<7;u++)t.add(k(ht(.06,.13,2.62,.01),j("#957a60"),{pos:[n-1.6+u*.53,e+.005,s]}));let o=j("#8a6c50",{roughness:.95});for(let[u,f]of[[-1.6,-1.1],[1.6,-1.1],[-1.6,1.1],[1.6,1.1]]){let p=new zn([new R(n+u*.6-1.2,-1.6,s+f*.5-.6),new R(n+u*.8,-3.6,s+f*.8),new R(n+u,e,s+f)]);t.add(k(new Zn(p,16,.07,6,!1),o))}let a=[],l=["#ffd27a","#9fe0c8","#f2a7c3","#b8c8ff","#ffd27a"];for(let u=0;u<5;u++){let f=Rp(l[u],.3+u%2*.1);f.position.set(n-1.4+u*.36,e+.06,s-1),t.add(f),a.push(f)}t.add(rd([[n-1.5,e+.5,s-1.15],[n-.6,e+1.1,s-1.2],[n+.2,e+.7,s-1.15],[n+1.2,e+1.6,s-.9],[n+.6,-2.4,s-.4]],.05)),t.add(rd([[n+1.5,e+.1,s+.6],[n+1.6,e+1,s+.4],[n+.9,-2.8,s+.2]],.04,"#b6a58a")),t.add(k(ue(.35,.4,.8,16),j("#b49a7e",{roughness:.5,metalness:.3}),{pos:[n+1.25,e+.46,s-.6]}));let c=new at;for(let u=0;u<10;u++)c.add(k(ht(.1,.08,.06,.01),j("#a39073",{metalness:.4}),{pos:[Math.cos(u/10*ae*2)*.32,Math.sin(u/10*ae*2)*.32,0],rot:[0,0,u/10*ae*2]}));c.add(k(ue(.3,.3,.06,20),j("#a39073",{metalness:.4}),{rot:[ae/2,0,0]})),c.position.set(n+.4,e+.7,s-1.25),t.add(c),i.objects.gear=c,i.objects.jars=a;let h=Ep();h.position.set(n-.3,e+.06,s+.55),h.rotation.y=ae/5,t.add(h),i.objects.ledger=h;let d=new vi("#ffcf8a",3,6,1.5);return d.position.set(n,e+1.6,s+.4),t.add(d),t.add(k(ze(.09,10,8),j("#fff0c8",{emissive:"#ffcf8a",emissiveIntensity:2}),{pos:[n,e+1.6,s+.4],cast:!1})),t.add(k(ue(.008,.008,1.2,4),j("#6b5644"),{pos:[n,e+2.2,s+.4]})),i}var Lp={commons:q_,workshop:Y_,study:$_,kitchen:Z_,bunk:J_,yours:K_,attic:j_},nh=class{constructor(t){this.world=t,this.kits=new Map}sync(t){let e=this.world.house,n=new Set(t.built.filter(s=>Lp[s]));n.add("porch"),t.chunks.includes("gate")&&n.add("gate"),n.add("underside");for(let s of n){let r=this.kits.get(s);if(!r){r=s==="gate"?Q_():s==="porch"?tb():s==="underside"?eb():Lp[s](),this.kits.set(s,r);for(let l of r.group.children)l.userData.wall&&e.follow(s,l.userData.wall,l)}if(s==="commons"){let l=t.built.includes("workshop"),c=r.objects.boxes;c&&(c.visible=!l),r.footprints=r.footprints.filter(h=>h.tag!=="boxes"||!l)}let o=e.byId[s],a=o?o.level:0;r.level=a;for(let l of r.stations)l.level=a;r.group.position.y=o?o.base:s==="porch"?Le:0,s==="underside"&&(r.group.position.y=0),this.world.levels[a].add(r.group)}e._reattachFollowers()}get stations(){let t=[];for(let e of this.kits.values())t.push(...e.stations);return t}kit(t){return this.kits.get(t)||null}obj(t,e){return this.kits.get(t)?.objects[e]||null}footprintsFor(t){let e=[];for(let n of this.kits.values())n.level===t&&n.id!=="underside"&&e.push(...n.footprints.filter(s=>!s.optional||s.active));return e}get lamps(){let t=[],e=[];for(let n of this.kits.values())t.push(...n.lights),e.push(...n.glows);return{lights:t,glows:e}}};var ih=class{constructor(t,e,n=.2,s=.4){this.w=t,this.d=e,this.cell=n,this.inflate=s,this.cols=Math.round(t/n),this.rows=Math.round(e/n),this.blocked=new Uint8Array(this.cols*this.rows),this.wallMargin=.42}ix(t){return Math.floor((t+this.w/2)/this.cell)}iz(t){return Math.floor((t+this.d/2)/this.cell)}cx(t){return-this.w/2+(t+.5)*this.cell}cz(t){return-this.d/2+(t+.5)*this.cell}build(t,e=[]){let{cols:n,rows:s}=this;this.blocked.fill(0);for(let r=0;r<s;r++)for(let o=0;o<n;o++){let a=this.cx(o),l=this.cz(r);if(Math.abs(a)>this.w/2-this.wallMargin||Math.abs(l)>this.d/2-this.wallMargin){this.blocked[r*n+o]=1;continue}for(let c of t)if(Np(c,a,l,this.inflate)){this.blocked[r*n+o]=1;break}}for(let r of e)for(let o=0;o<s;o++)for(let a=0;a<n;a++)Np(r,this.cx(a),this.cz(o),0)&&(this.blocked[o*n+a]=0)}isFreeCell(t,e){return t>=0&&e>=0&&t<this.cols&&e<this.rows&&!this.blocked[e*this.cols+t]}isFree(t,e){return this.isFreeCell(this.ix(t),this.iz(e))}nearestFree(t,e){let n=this.ix(t),s=this.iz(e);if(this.isFreeCell(n,s))return{x:t,z:e};for(let r=1;r<Math.max(this.cols,this.rows);r++){let o=null,a=1/0;for(let l=-r;l<=r;l++)for(let c=-r;c<=r;c++){if(Math.max(Math.abs(c),Math.abs(l))!==r)continue;let h=n+c,d=s+l;if(!this.isFreeCell(h,d))continue;let u=c*c+l*l;u<a&&(a=u,o={x:this.cx(h),z:this.cz(d)})}if(o)return o}return{x:0,z:0}}lineOfSight(t,e,n,s){let r=Math.hypot(n-t,s-e),o=Math.ceil(r/(this.cell*.5));for(let a=1;a<o;a++){let l=a/o;if(!this.isFree(t+(n-t)*l,e+(s-e)*l))return!1}return!0}findPath(t,e){let{cols:n,rows:s}=this,r=this.nearestFree(t.x,t.z),o=this.nearestFree(e.x,e.z),a=this.ix(r.x),l=this.iz(r.z),c=this.ix(o.x),h=this.iz(o.z);if(this.lineOfSight(t.x,t.z,e.x,e.z)&&this.isFree(e.x,e.z))return[{x:e.x,z:e.z}];let d=n*s,u=new Float32Array(d).fill(1/0),f=new Int32Array(d).fill(-1),p=new Uint8Array(d),x=new ld,m=l*n+a,g=h*n+c;u[m]=0;let b=(P,D)=>{let z=Math.abs(P-c),L=Math.abs(D-h);return z+L+(Math.SQRT2-2)*Math.min(z,L)};x.push(m,b(a,l));let w=!1,v=0;for(;x.size&&v++<2e4;){let P=x.pop();if(P===g){w=!0;break}if(p[P])continue;p[P]=1;let D=P%n,z=P/n|0;for(let L=-1;L<=1;L++)for(let O=-1;O<=1;O++){if(!O&&!L)continue;let q=D+O,X=z+L;if(!this.isFreeCell(q,X)||O&&L&&(!this.isFreeCell(D+O,z)||!this.isFreeCell(D,z+L)))continue;let st=X*n+q;if(p[st])continue;let H=u[P]+(O&&L?Math.SQRT2:1);H<u[st]&&(u[st]=H,f[st]=P,x.push(st,H+b(q,X)))}}if(!w)return null;let T=[];for(let P=g;P!==-1&&P!==m;P=f[P])T.push(P);T.reverse();let M=T.map(P=>({x:this.cx(P%n),z:this.cz(P/n|0)}));M.push({x:e.x,z:e.z});let I=[],y=t.x,E=t.z,A=0;for(;A<M.length;){let P=A;for(let D=M.length-1;D>A;D--)if(this.lineOfSight(y,E,M[D].x,M[D].z)){P=D;break}I.push(M[P]),y=M[P].x,E=M[P].z,A=P+1}return I}randomFree(t=Math.random,e=null,n=3){for(let s=0;s<80;s++){let r,o;if(e){let a=t()*Math.PI*2,l=t()*n;r=e.x+Math.cos(a)*l,o=e.z+Math.sin(a)*l}else r=(t()-.5)*this.w,o=(t()-.5)*this.d;if(this.isFree(r,o))return{x:r,z:o}}return this.nearestFree(e?e.x:0,e?e.z:0)}};function Np(i,t,e,n){let s=t-i.x,r=e-i.z;if(i.r!==void 0)return s*s+r*r<(i.r+n)*(i.r+n);let o=s*Math.cos(i.rot||0)-r*Math.sin(i.rot||0),a=s*Math.sin(i.rot||0)+r*Math.cos(i.rot||0);return Math.abs(o)<i.w/2+n&&Math.abs(a)<i.d/2+n}var ld=class{constructor(){this.items=[],this.prio=[]}get size(){return this.items.length}push(t,e){let n=this.items,s=this.prio;n.push(t),s.push(e);let r=n.length-1;for(;r>0;){let o=r-1>>1;if(s[o]<=s[r])break;[n[o],n[r]]=[n[r],n[o]],[s[o],s[r]]=[s[r],s[o]],r=o}}pop(){let t=this.items,e=this.prio,n=t[0],s=t.pop(),r=e.pop();if(t.length){t[0]=s,e[0]=r;let o=0;for(;;){let a=2*o+1,l=a+1,c=o;if(a<t.length&&e[a]<e[c]&&(c=a),l<t.length&&e[l]<e[c]&&(c=l),c===o)break;[t[c],t[o]]=[t[o],t[c]],[e[c],e[o]]=[e[o],e[c]],o=c}}return n}};var ba=class extends ih{constructor(t,e,n,s,r=.25){super(n-t,s-e,r,.22),this.x0=t,this.z0=e}ix(t){return Math.floor((t-this.x0)/this.cell)}iz(t){return Math.floor((t-this.z0)/this.cell)}cx(t){return this.x0+(t+.5)*this.cell}cz(t){return this.z0+(t+.5)*this.cell}buildWith(t,e=[],n=[]){let{cols:s,rows:r}=this;for(let o=0;o<r;o++)for(let a=0;a<s;a++){let l=this.cx(a),c=this.cz(o),h=t(l,c);if(h)for(let d of e)nb(d,l,c,this.inflate)&&(h=!1);if(h)for(let d of n)ib(d,l,c)&&(h=!1);this.blocked[o*s+a]=h?0:1}}randomFree(t=Math.random,e=null,n=3){for(let s=0;s<120;s++){let r,o;if(e){let a=t()*Math.PI*2,l=t()*n;r=e.x+Math.cos(a)*l,o=e.z+Math.sin(a)*l}else r=this.x0+t()*this.w,o=this.z0+t()*this.d;if(this.isFree(r,o))return{x:r,z:o}}return this.nearestFree(e?e.x:this.x0+this.w/2,e?e.z:this.z0+this.d/2)}};function nb(i,t,e,n){let s=t-i.x,r=e-i.z;if(i.r!==void 0)return s*s+r*r<(i.r+n)*(i.r+n);let o=i.rot||0,a=s*Math.cos(o)-r*Math.sin(o),l=s*Math.sin(o)+r*Math.cos(o);return Math.abs(a)<i.w/2+n&&Math.abs(l)<i.d/2+n}function ib(i,t,e){let n=i.bx-i.ax,s=i.bz-i.az,r=Math.hypot(n,s),o=((t-i.ax)*n+(e-i.az)*s)/(r*r);if(o<-.02||o>1.02)return!1;let a=i.ax+n*o,l=i.az+s*o;if(Math.hypot(t-a,e-l)>.22/2+.26)return!1;let h=o*r;for(let[d,u]of i.gaps||[])if(h>d&&h<u)return!1;return!0}function cd(i,t){let e=[];for(let n of i.walls){if(n.roomA.level!==t)continue;let s=n.length/2,r=Math.cos(n.rotY),o=-Math.sin(n.rotY),a=n.cx-r*s,l=n.cz-o*s,c=n.cx+r*s,h=n.cz+o*s,d=n.openings.filter(x=>x.type==="door"&&!x.boarded).map(x=>[x.u+s-x.w/2+.12,x.u+s+x.w/2-.12]),u=n.kind==="exterior"?-.22/2:0,f=Math.sin(n.rotY)*u,p=Math.cos(n.rotY)*u;e.push({ax:a+f,az:l+p,bx:c+f,bz:h+p,gaps:d})}return e}var cs={height:1.02,lift:.07},We={w:.92,h:.62,y0:.22,px:512};We.py=Math.round(We.px*We.h/We.w);var Jr=[[0,0],[.28,0],[.4,.018],[.472,.07],[.502,.17],[.506,.3],[.488,.46],[.445,.63],[.365,.8],[.235,.94],[.08,1.012],[0,1.02]];function ai(i){for(let t=1;t<Jr.length;t++){let[e,n]=Jr[t],[s,r]=Jr[t-1];if(i<=n){let o=(i-r)/Math.max(1e-5,n-r);return s+(e-s)*o}}return 0}var sh=null;function Up(){if(sh)return sh;let t=new rs(Jr.map(([m,g])=>new Y(m,g))).getSpacedPoints(56).map(m=>new Y(Math.max(0,m.x),m.y));t[0].set(0,0),t[t.length-1].set(0,Jr[Jr.length-1][1]);let e=new xi(t,64);e.computeBoundingSphere();let n=new Fs(.074,.12,6,12);n.translate(0,-.115,0);let s=new dn(1,20,14);s.scale(.115,.07,.15),s.translate(0,.05,.02);let r=new zn([new R(0,-.02,0),new R(.006,.06,0),new R(.022,.13,0),new R(.05,.19,0)]),o=new Zn(r,12,.022,8,!1),a=new R(.05,.19,0),l=new un;l.moveTo(0,0),l.bezierCurveTo(.05,.035,.11,.05,.17,0),l.bezierCurveTo(.11,-.05,.05,-.035,0,0);let c=new gi(l,{depth:.008,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:3,curveSegments:16});c.translate(0,0,-.004);{let m=c.attributes.position;for(let g=0;g<m.count;g++){let b=m.getX(g),w=m.getY(g);m.setZ(g,m.getZ(g)+w*w*6-b*b*.8)}c.computeVertexNormals()}c.rotateX(-Math.PI/2);let h=c.clone();h.scale(1.45,1.3,1.6);let d=new Mn(.014,.018,.2,8);d.translate(0,.1,0);let u=new dn(.06,18,14),f=new dn(1,14,10);f.scale(.05,.016,.034),f.translate(.055,0,0);let p=new dn(.035,14,10);p.scale(1,.6,1);let x=new ni(.62,32);return x.rotateX(-Math.PI/2),sh={body:e,arm:n,foot:s,stem:o,stemTip:a,leaf:c,bigLeaf:h,antennaStalk:d,bobble:u,petal:f,flowerCenter:p,shadow:x},sh}var Ma=null;function kp(){if(Ma)return Ma;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,64);return e.addColorStop(0,"rgba(60,35,25,0.55)"),e.addColorStop(.45,"rgba(60,35,25,0.32)"),e.addColorStop(1,"rgba(60,35,25,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Ma=new mi(i),Ma.colorSpace=Xe,Ma}var pe=We.px/We.w,Kr="#2a1a15",Fp="#3b231d",sb="#6e2a2c",hd="#ff8796";function ud(){return{eyes:"normal",open:1,lookX:0,lookY:0,mouth:"smile",mouthOpen:.4,blush:.3,brows:null,spin:0,tear:0}}var rh=class{constructor(t={}){this.shape={eyeY:.565,eyeDX:.158,eyeSize:1,mouthY:.448,blushDX:.268,...t},this.canvas=document.createElement("canvas"),this.canvas.width=We.px,this.canvas.height=We.py,this.ctx=this.canvas.getContext("2d"),this.texture=new mi(this.canvas),this.texture.colorSpace=Xe,this.texture.anisotropy=4,this.texture.generateMipmaps=!0,this.texture.minFilter=Oi,this._key="",this.state=ud()}X(t){return(t/We.w+.5)*We.px}Y(t){return(1-(t-We.y0)/We.h)*We.py}update(t){this.state=t;let e=rb(t);return e===this._key?!1:(this._key=e,this.draw(this.ctx,t),this.texture.needsUpdate=!0,!0)}draw(t,e){t.clearRect(0,0,We.px,We.py),t.lineCap="round",t.lineJoin="round",this.drawBlush(t,e);for(let n=0;n<2;n++)this.drawEye(t,e,n);this.drawBrows(t,e),this.drawMouth(t,e),e.tear>.05&&this.drawTear(t,e)}eyeCenter(t,e){let n=e===0?-1:1,s=this.shape,r=_t(t.lookX,-1,1)*.02,o=_t(t.lookY,-1,1)*.016;return{side:n,x:this.X(n*s.eyeDX+r),y:this.Y(s.eyeY+o),rx:.06*pe*s.eyeSize,ry:.081*pe*s.eyeSize}}drawEye(t,e,n){let s=this.eyeCenter(e,n),r=e.eyes;r==="wink"&&(r=n===1?"happy":"normal");let o=_t(e.open,0,1);switch(o<.14&&(r==="normal"||r==="wide"||r==="star"||r==="sleepy"||r==="sad"||r==="angry"||r==="focus"||r==="dot")&&(r="closed-blink"),t.save(),r){case"happy":{t.strokeStyle=Kr,t.lineWidth=.016*pe,t.beginPath(),t.moveTo(s.x-s.rx*1.05,s.y+s.ry*.28),t.quadraticCurveTo(s.x,s.y-s.ry*1.05,s.x+s.rx*1.05,s.y+s.ry*.28),t.stroke();break}case"closed":case"closed-blink":{t.strokeStyle=Kr,t.lineWidth=.014*pe,t.beginPath();let a=s.y+s.ry*.15;t.moveTo(s.x-s.rx*1,a-s.ry*.12),t.quadraticCurveTo(s.x,a+s.ry*.62,s.x+s.rx*1,a-s.ry*.12),t.stroke();break}case"squint":{t.strokeStyle=Kr,t.lineWidth=.015*pe;let a=-s.side;t.beginPath(),t.moveTo(s.x-a*s.rx*.85,s.y-s.ry*.62),t.lineTo(s.x+a*s.rx*.75,s.y),t.lineTo(s.x-a*s.rx*.85,s.y+s.ry*.62),t.stroke();break}case"dizzy":{t.strokeStyle=Kr,t.lineWidth=.011*pe,t.beginPath();let a=2.3,l=60;for(let c=0;c<=l;c++){let h=c/l,d=e.spin*(n===0?1:-1)+h*a*Math.PI*2,u=h*s.rx*1.15,f=s.x+Math.cos(d)*u,p=s.y+Math.sin(d)*u*1.1;c===0?t.moveTo(f,p):t.lineTo(f,p)}t.stroke();break}case"heart":{let a=s.rx*1.35*(.92+.08*Math.sin(e.spin*3));ob(t,s.x,s.y+a*.05,a),t.fillStyle="#ff5b7c",t.fill(),t.fillStyle="rgba(255,255,255,0.9)",t.beginPath(),t.ellipse(s.x-a*.38,s.y-a*.32,a*.16,a*.11,-.6,0,Math.PI*2),t.fill();break}default:{let a=s.rx,l=s.ry,c=1;r==="wide"?(a*=1.16,l*=1.16,c=.8):r==="dot"?(a*=.48,l*=.52,c=0):r==="star"&&(a*=1.1,l*=1.1),l*=Math.max(.12,o);let h=null,d=null;if(r==="sleepy"?(h=d=.12,l*=.85):r==="sad"?(h=-.62,d=.12):r==="angry"?(h=.15,d=-.5):r==="focus"&&(h=d=-.45),t.beginPath(),t.ellipse(s.x,s.y,a,l,0,0,Math.PI*2),h!==null){t.save(),t.clip();let u=s.x-s.side*a*1.3,f=s.x+s.side*a*1.3,p=s.y+h*l,x=s.y+d*l,m=r==="angry"?-.05:r==="sleepy"?.42:.16,g=(u+f)/2,b=(p+x)/2+m*l;t.beginPath(),t.moveTo(u,p),t.quadraticCurveTo(g,b,f,x),t.lineTo(f,s.y+l*2),t.lineTo(u,s.y+l*2),t.closePath(),t.clip(),this.fillEyeBall(t,s.x,s.y,a,l,c,r,e),t.restore(),t.save(),t.beginPath(),t.ellipse(s.x,s.y,a+4,l+4,0,0,Math.PI*2),t.clip(),t.strokeStyle=Kr,t.lineWidth=.009*pe,t.beginPath(),t.moveTo(u,p),t.quadraticCurveTo(g,b,f,x),t.stroke(),t.restore()}else this.fillEyeBall(t,s.x,s.y,a,l,c,r,e)}}t.restore()}fillEyeBall(t,e,n,s,r,o,a,l){let c=t.createRadialGradient(e,n-r*.25,r*.1,e,n,Math.max(s,r)*1.05);c.addColorStop(0,"#3f2a22"),c.addColorStop(.75,"#24150f"),c.addColorStop(1,"#1b0f0b"),t.fillStyle=c,t.beginPath(),t.ellipse(e,n,s,r,0,0,Math.PI*2),t.fill(),t.save(),t.beginPath(),t.ellipse(e,n,s,r,0,0,Math.PI*2),t.clip();let h=t.createRadialGradient(e,n+r*.95,1,e,n+r*.95,s*1.1);if(h.addColorStop(0,"rgba(150,95,70,0.75)"),h.addColorStop(1,"rgba(150,95,70,0)"),t.fillStyle=h,t.fillRect(e-s,n,s*2,r),t.restore(),o<=0)return;let d=_t(l.lookX,-1,1),u=_t(l.lookY,-1,1);if(t.fillStyle="#ffffff",a==="star")Sa(t,e+s*.3-d*2,n-r*.32+u*2,s*.55,.32),t.fill(),Sa(t,e-s*.36,n+r*.42,s*.26,.4),t.fill();else{let f=s*.36*o;t.beginPath(),t.ellipse(e+s*.3-d*2,n-r*.36+u*2,f,Math.min(f*1.05,r*.5),0,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(e-s*.34,n+r*.44,s*.14*o,0,Math.PI*2),t.fill()}}drawBlush(t,e){let n=this.shape,s=_t(e.blush,0,1.2);if(!(s<=.01))for(let r of[-1,1]){let o=this.X(r*n.blushDX),a=this.Y(n.eyeY-.098),l=.072*pe,c=.043*pe;t.save(),t.translate(o,a),t.scale(1,c/l);let h=t.createRadialGradient(0,0,0,0,0,l),d=.2+.5*Math.min(1,s);if(h.addColorStop(0,`rgba(255,112,138,${d})`),h.addColorStop(.55,`rgba(255,120,145,${d*.75})`),h.addColorStop(1,"rgba(255,130,150,0)"),t.fillStyle=h,t.beginPath(),t.arc(0,0,l,0,Math.PI*2),t.fill(),t.restore(),s>.6){t.strokeStyle=`rgba(226,84,110,${_t((s-.6)*2.2,0,.85)})`,t.lineWidth=.0065*pe;for(let u=-1;u<=1;u++){let f=o+u*l*.36;t.beginPath(),t.moveTo(f+l*.1,a-c*.35),t.lineTo(f-l*.1,a+c*.35),t.stroke()}}}}drawBrows(t,e){if(!e.brows)return;let n=this.shape;t.strokeStyle=Kr,t.lineWidth=.012*pe;for(let s=0;s<2;s++){let r=s===0?-1:1,o=this.X(r*n.eyeDX),a=n.eyeY+.105*n.eyeSize,l=.045*pe,c=0,h=0;e.brows==="worried"?(c=.022,h=-.008):e.brows==="angry"?(c=-.018,h=.016):e.brows==="raised"&&(c=h=.028);let d=o-r*l,u=o+r*l;t.beginPath(),t.moveTo(d,this.Y(a+c)),t.quadraticCurveTo(o,this.Y(a+(c+h)/2+.012),u,this.Y(a+h)),t.stroke()}}drawMouth(t,e){let n=this.shape,s=this.X(0),r=this.Y(n.mouthY),o=_t(e.mouthOpen,0,1),a=e.mouth;switch(a==="talk"&&(a=o<.18?"smile":"open"),t.strokeStyle=Fp,t.fillStyle=sb,t.lineWidth=.0105*pe,a){case"cat":{let l=.042*pe,c=.02*pe;t.beginPath(),t.moveTo(s-l,r-c*.1),t.quadraticCurveTo(s-l*.5,r+c*1.25,s,r),t.quadraticCurveTo(s+l*.5,r+c*1.25,s+l,r-c*.1),t.stroke();break}case"o":{t.beginPath(),t.ellipse(s,r+4,.016*pe*(.8+.4*o),.02*pe*(.65+.7*o),0,0,Math.PI*2),t.fill();break}case"pout":{t.beginPath(),t.ellipse(s,r+4,.011*pe,.009*pe,0,0,Math.PI*2),t.fill();break}case"open":case"grin":{let l=(a==="grin"?.052:.04)*pe,c=.034*pe*(.45+.75*o);t.beginPath(),t.moveTo(s-l,r-2),t.quadraticCurveTo(s,r+2,s+l,r-2),t.quadraticCurveTo(s+l*.95,r+c*1.6,s,r+c*1.55),t.quadraticCurveTo(s-l*.95,r+c*1.6,s-l,r-2),t.closePath(),t.fill(),t.save(),t.clip(),t.fillStyle=hd,t.beginPath(),t.ellipse(s,r+c*1.55,l*.62,c*.75,0,0,Math.PI*2),t.fill(),t.restore();break}case"yawn":{let l=.03*pe*(.7+.3*o),c=.05*pe*(.3+.7*o);t.beginPath(),t.ellipse(s,r+c*.6,l,c,0,0,Math.PI*2),t.fill(),t.save(),t.clip(),t.fillStyle=hd,t.beginPath(),t.ellipse(s,r+c*1.45,l*.8,c*.6,0,0,Math.PI*2),t.fill(),t.restore();break}case"flat":{let l=.024*pe;t.beginPath(),t.moveTo(s-l,r+3),t.lineTo(s+l,r+3),t.stroke();break}case"wobble":{let l=.045*pe;t.beginPath();for(let c=0;c<=24;c++){let h=c/24,d=s-l+h*l*2,u=r+4+Math.sin(h*Math.PI*5)*.0065*pe;c===0?t.moveTo(d,u):t.lineTo(d,u)}t.stroke();break}case"frown":{let l=.03*pe,c=.018*pe;t.beginPath(),t.moveTo(s-l,r+c),t.quadraticCurveTo(s,r-c*.7,s+l,r+c),t.stroke();break}case"tongue":{let l=.034*pe,c=.022*pe;t.fillStyle=hd,t.beginPath(),t.ellipse(s+l*.28,r+c*.85,.013*pe,.017*pe,.15,0,Math.PI*2),t.fill(),t.lineWidth=.006*pe,t.strokeStyle="#d65c6f",t.stroke(),t.strokeStyle=Fp,t.lineWidth=.0105*pe,t.beginPath(),t.moveTo(s-l,r),t.quadraticCurveTo(s,r+c*1.1,s+l,r),t.stroke();break}case"none":break;default:{let l=.03*pe,c=.022*pe;t.beginPath(),t.moveTo(s-l,r),t.quadraticCurveTo(s,r+c*1.25,s+l,r),t.stroke()}}}drawTear(t,e){let n=this.eyeCenter(e,1),s=_t(e.tear,0,1),r=n.x+n.rx*.7,o=n.y+n.ry*1.1;t.fillStyle=`rgba(120,190,255,${.9*s})`,t.beginPath(),t.moveTo(r,o-14),t.quadraticCurveTo(r+11,o+2,r,o+8),t.quadraticCurveTo(r-11,o+2,r,o-14),t.fill()}drawPortrait(t,e,n=this.state){let s=t.getContext("2d"),r=t.width,o=t.height;s.clearRect(0,0,r,o);let a=new pt(e),l=a.clone().offsetHSL(0,-.02,.08).getStyle(),c=a.clone().offsetHSL(0,.02,-.08).getStyle(),h=s.createLinearGradient(0,0,0,o);h.addColorStop(0,l),h.addColorStop(1,c),s.fillStyle=h,s.beginPath(),s.arc(r/2,o/2,r/2,0,Math.PI*2),s.fill();let d=document.createElement("canvas");d.width=We.px,d.height=We.py,this.draw(d.getContext("2d"),n);let u=We.px*.62,f=u,p=We.px/2,x=this.Y(this.shape.eyeY-.045);s.drawImage(d,p-u/2,x-f/2,u,f,0,0,r,o)}};function rb(i){return[i.eyes,Math.round(_t(i.open)*24),Math.round(i.lookX*12),Math.round(i.lookY*12),i.mouth,Math.round(_t(i.mouthOpen)*12),Math.round(_t(i.blush,0,1.2)*20),i.brows||"",i.eyes==="dizzy"||i.eyes==="heart"?Math.round(i.spin*8):0,Math.round(i.tear*6)].join("|")}function ob(i,t,e,n){i.beginPath(),i.moveTo(t,e+n*.85),i.bezierCurveTo(t-n*1.25,e+n*.05,t-n*.95,e-n*.95,t,e-n*.38),i.bezierCurveTo(t+n*.95,e-n*.95,t+n*1.25,e+n*.05,t,e+n*.85),i.closePath()}function Sa(i,t,e,n,s=.38){i.beginPath();for(let r=0;r<8;r++){let o=r/8*Math.PI*2-Math.PI/2,a=r%2===0?n:n*s,l=t+Math.cos(o)*a,c=e+Math.sin(o)*a;r===0?i.moveTo(l,c):i.lineTo(l,c)}i.closePath()}var hs=128,dd=new Map;function ab(){let i=document.createElement("canvas");return i.width=i.height=hs,i}function Ks(i,t,e,n="#fffaf2",s=14){i.lineJoin="round",i.lineCap="round",t(),i.strokeStyle=n,i.lineWidth=s,i.stroke(),t(),i.fillStyle=e,i.fill()}function zp(i,t,e,n){i.beginPath(),i.moveTo(t,e+n*.85),i.bezierCurveTo(t-n*1.25,e+n*.05,t-n*.95,e-n*.95,t,e-n*.38),i.bezierCurveTo(t+n*.95,e-n*.95,t+n*1.25,e+n*.05,t,e+n*.85),i.closePath()}function fd(i,t,e,n=92,s='Fredoka, "Trebuchet MS", sans-serif'){i.font=`700 ${n}px ${s}`,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.strokeStyle="#fffaf2",i.lineWidth=16,i.strokeText(t,hs/2,hs/2+4),i.fillStyle=e,i.fillText(t,hs/2,hs/2+4)}var pd={heart(i){Ks(i,()=>zp(i,64,64,40),"#ff6b8b"),i.fillStyle="rgba(255,255,255,0.75)",i.beginPath(),i.ellipse(48,48,9,6,-.6,0,Math.PI*2),i.fill()},sparkle(i){Ks(i,()=>Sa(i,64,64,50,.3),"#ffe27a","#fffaf2",10),i.fillStyle="#fff6c9",Sa(i,64,64,22,.3),i.fill()},star(i){Ks(i,()=>{i.beginPath();for(let t=0;t<10;t++){let e=t/10*Math.PI*2-Math.PI/2,n=t%2===0?46:21,s=64+Math.cos(e)*n,r=66+Math.sin(e)*n;t===0?i.moveTo(s,r):i.lineTo(s,r)}i.closePath()},"#ffd24d","#fffaf2",12)},zzz(i){fd(i,"z","#8fa6e8",96)},note(i){i.lineCap="round";let t=(e,n,s)=>{i.strokeStyle=e,i.fillStyle=e,i.lineWidth=10+s,i.beginPath(),i.ellipse(44,92,18+s/2,13+s/2,-.4,0,Math.PI*2),i.fill(),i.beginPath(),i.moveTo(60,88),i.lineTo(60,26),i.quadraticCurveTo(80,34,92,52),i.stroke()};t("#fffaf2","#fffaf2",12),t("#7a5cc9","#7a5cc9",0)},dust(i){let t=i.createRadialGradient(64,64,4,64,64,60);t.addColorStop(0,"rgba(255,248,236,0.95)"),t.addColorStop(.55,"rgba(244,232,214,0.75)"),t.addColorStop(1,"rgba(244,232,214,0)"),i.fillStyle=t,i.beginPath(),i.arc(64,64,60,0,Math.PI*2),i.fill()},ring(i){i.strokeStyle="#fffaf2",i.lineWidth=9,i.beginPath(),i.arc(64,64,48,0,Math.PI*2),i.stroke(),i.strokeStyle="#ffd36b",i.lineWidth=4,i.stroke()},question(i){fd(i,"?","#e98b4a",100)},exclaim(i){fd(i,"!","#ee5b5b",104)},sweat(i){Ks(i,()=>{i.beginPath(),i.moveTo(64,14),i.bezierCurveTo(90,52,98,72,90,88),i.bezierCurveTo(80,112,48,112,38,88),i.bezierCurveTo(30,72,38,52,64,14),i.closePath()},"#8cd1ff"),i.fillStyle="rgba(255,255,255,0.8)",i.beginPath(),i.ellipse(52,80,6,11,.3,0,Math.PI*2),i.fill()},drop(i){i.fillStyle="#7cc6f5",i.beginPath(),i.moveTo(64,20),i.bezierCurveTo(86,56,92,72,84,88),i.bezierCurveTo(74,106,54,106,44,88),i.bezierCurveTo(36,72,42,56,64,20),i.fill()},anger(i){i.strokeStyle="#fffaf2",i.lineCap="round";let t=(e,n)=>{i.strokeStyle=e,i.lineWidth=n;for(let s=0;s<4;s++)i.save(),i.translate(64,64),i.rotate(s*Math.PI/2),i.beginPath(),i.moveTo(10,-34),i.quadraticCurveTo(12,-12,34,-10),i.stroke(),i.restore()};t("#fffaf2",24),t("#ef4f5f",11)},bulb(i){let t=i.createRadialGradient(64,54,8,64,54,62);t.addColorStop(0,"rgba(255,240,150,0.9)"),t.addColorStop(1,"rgba(255,240,150,0)"),i.fillStyle=t,i.fillRect(0,0,hs,hs),Ks(i,()=>{i.beginPath(),i.arc(64,52,30,Math.PI*.8,Math.PI*2.2),i.lineTo(78,86),i.lineTo(50,86),i.closePath()},"#ffe066"),i.fillStyle="#b9a58a",i.strokeStyle="#fffaf2",i.lineWidth=8,i.beginPath(),i.roundRect(49,88,30,18,5),i.stroke(),i.fill(),i.fillStyle="rgba(255,255,255,0.85)",i.beginPath(),i.ellipse(54,42,6,10,.5,0,Math.PI*2),i.fill()},dots(i){Ks(i,()=>{i.beginPath(),i.roundRect(10,30,108,60,30)},"#fffdf8","#e8dccb",6),i.fillStyle="#9a8676";for(let t=0;t<3;t++)i.beginPath(),i.arc(38+t*26,60,8,0,Math.PI*2),i.fill();i.fillStyle="#fffdf8",i.beginPath(),i.arc(28,102,9,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(16,118,5,0,Math.PI*2),i.fill()},spark(i){let t=i.createRadialGradient(64,64,2,64,64,50);t.addColorStop(0,"rgba(255,255,230,1)"),t.addColorStop(.3,"rgba(255,214,110,0.9)"),t.addColorStop(1,"rgba(255,160,60,0)"),i.fillStyle=t,i.beginPath(),i.arc(64,64,50,0,Math.PI*2),i.fill()},confetti(i){i.fillStyle="#ffffff",i.fillRect(40,26,48,76)},puff(i){let t=i.createRadialGradient(64,64,4,64,64,60);t.addColorStop(0,"rgba(255,255,255,0.95)"),t.addColorStop(.6,"rgba(250,250,255,0.6)"),t.addColorStop(1,"rgba(250,250,255,0)"),i.fillStyle=t,i.beginPath(),i.arc(64,64,60,0,Math.PI*2),i.fill()},glow(i){let t=i.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,hs,hs)},letter(i){Ks(i,()=>{i.beginPath(),i.roundRect(18,34,92,62,8)},"#fff3e0","#fffaf2",10),i.strokeStyle="#e0b48a",i.lineWidth=5,i.beginPath(),i.moveTo(22,40),i.lineTo(64,70),i.lineTo(106,40),i.stroke(),i.fillStyle="#ff6b8b",zp(i,64,72,9),i.fill()}};function Op(i){if(dd.has(i))return dd.get(i);let t=ab(),e=t.getContext("2d");return(pd[i]||pd.sparkle)(e),dd.set(i,t),t}var hE=Object.keys(pd);var md=new Map;function lb(i){if(!md.has(i)){let t=new mi(Op(i));t.colorSpace=Xe,md.set(i,t)}return md.get(i)}var cb=["#ff8fa8","#ffd36b","#8fd6b4","#94c4f5","#c3a6f2","#ffb27a"],hb=["#ffffff","#ffd8e4","#d8f2ff","#e9ffd6","#fff1c9"],oh=class{constructor(t){this.group=new at,this.group.name="fx",this.group.userData.noAO=!0,t.add(this.group),this.pool=[],this.live=[],this.enabled=!0}setParent(t){t.add(this.group)}_get(t){let e=this.pool.pop();if(!e){let n=new Yn({transparent:!0,depthWrite:!1,depthTest:!0});e=new ei(n),e.userData.noAO=!0,e.renderOrder=10}return e.material.map=lb(t),e.material.color.set("#ffffff"),e.material.opacity=1,e.material.rotation=0,e.material.blending=Ts,e.material.needsUpdate=!0,e.visible=!0,this.group.add(e),e}spawnOne(t,e,n={}){let s=this._get(n.icon||t),r={s,age:0,life:n.life??1.2,pos:e.clone(),vel:n.vel?n.vel.clone():new R,grav:n.grav??0,drag:n.drag??0,size:n.size??.3,grow:n.grow??0,spin:n.spin??0,wobble:n.wobble??0,wobbleF:n.wobbleF??3,pop:n.pop??!0,fadeIn:n.fadeIn??.08,fadeOut:n.fadeOut??.35,floor:n.floor??null,follow:n.follow||null,orbit:n.orbit||null,phase:K(0,oe),aspect:n.aspect??1,flutter:n.flutter??0,alpha:n.alpha??1};return n.color&&s.material.color.set(n.color),n.additive&&(s.material.blending=zi),s.material.rotation=n.rotation??0,s.position.copy(r.pos),s.scale.set(.001,.001,1),this.live.push(r),r}spawn(t,e,n={}){if(!this.enabled||!e)return;let s=n.count??1;switch(t){case"heart":for(let r=0;r<s;r++)this.spawnOne("heart",e.clone().add(new R(K(-.15,.15),0,K(-.1,.1))),{vel:new R(K(-.1,.1),K(.45,.65),0),life:K(1.3,1.7),size:n.small?.17:K(.22,.28),wobble:.12,drag:.6});break;case"sparkle":for(let r=0;r<s;r++){let o=K(0,oe);this.spawnOne("sparkle",e.clone().add(new R(Math.cos(o)*.2,K(-.1,.15),Math.sin(o)*.2)),{vel:new R(Math.cos(o)*.6,K(.4,.9),Math.sin(o)*.6),drag:3,life:K(.6,.9),size:K(.13,.22),spin:K(-4,4)})}break;case"stars":{let r=n.critter;for(let o=0;o<3;o++)this.spawnOne("star",e,{life:n.duration??2.5,size:.16,follow:r,orbit:{r:.32,speed:5,phase:o/3*oe,y:0},pop:!0,fadeOut:.4});break}case"zzz":this.spawnOne("zzz",e.clone().add(new R(.15,0,0)),{vel:new R(.12,.32,.02),life:2.2,size:.16,grow:.16,wobble:.12,wobbleF:2,fadeOut:.8});break;case"note":this.spawnOne("note",e.clone().add(new R(K(-.2,.2),0,0)),{vel:new R(K(-.15,.15),K(.4,.55),0),life:1.6,size:K(.18,.24),wobble:.18,color:ge(hb),rotation:K(-.3,.3)});break;case"dust":for(let r=0;r<s;r++){let o=K(0,oe),a=K(.3,.7);this.spawnOne("dust",e.clone().add(new R(Math.cos(o)*.15,.05,Math.sin(o)*.15)),{vel:new R(Math.cos(o)*a,K(.05,.25),Math.sin(o)*a),drag:4,life:K(.45,.7),size:(n.size??.22)*K(.8,1.2),grow:.35,pop:!1,fadeIn:.02})}break;case"puff":{let r=n.dir||new R(0,0,1);for(let o=0;o<s;o++)this.spawnOne("puff",e,{vel:r.clone().multiplyScalar(K(1.2,2)).add(new R(K(-.4,.4),K(-.1,.4),K(-.4,.4))),drag:4,life:K(.5,.8),size:K(.15,.25),grow:.4,pop:!1});break}case"pop":this.spawnOne("ring",e,{life:.35,size:.2,grow:1.6,pop:!1,fadeIn:.01,fadeOut:.25});break;case"question":case"exclaim":case"anger":this.spawnOne(t,e.clone().add(new R(t==="anger"?.25:.12,.05,0)),{vel:new R(0,.12,0),drag:1,life:1.3,size:t==="anger"?.22:.28,wobble:t==="anger"?0:.03,pulse:!0});break;case"sweat":this.spawnOne("sweat",e.clone().add(new R(.3,-.1,0)),{vel:new R(.05,-.12,0),life:1.3,size:.17,rotation:-.4});break;case"bulb":this.spawnOne("bulb",e.clone().add(new R(0,.1,0)),{vel:new R(0,.08,0),life:1.8,size:.4,fadeOut:.4});for(let r=0;r<4;r++)this.spawn("sparkle",e.clone().add(new R(0,.2,0)),{count:1});break;case"dots":this.spawnOne("dots",e.clone().add(new R(.25,.08,0)),{vel:new R(0,.04,0),life:2.3,size:.34});break;case"spark":for(let r=0;r<s;r++){let o=K(0,oe);this.spawnOne("spark",e,{vel:new R(Math.cos(o)*K(.5,1.4),K(.8,1.8),Math.sin(o)*K(.5,1.4)),grav:6,life:K(.3,.55),size:K(.06,.11),pop:!1,additive:!0})}break;case"drop":this.spawnOne("drop",e.clone().add(new R(K(-.03,.03),0,K(-.03,.03))),{vel:new R(K(-.1,.1),K(-.1,.2),K(-.1,.1)),grav:7,life:.7,size:.07,pop:!1,floor:n.floor??.05});break;case"confetti":for(let r=0;r<s;r++){let o=K(0,oe),a=K(.6,1.8);this.spawnOne("confetti",e,{vel:new R(Math.cos(o)*a,K(1.6,3.2),Math.sin(o)*a),grav:4.5,drag:1.4,life:K(1.4,2.2),size:K(.06,.09),spin:K(-9,9),color:ge(cb),pop:!1,flutter:1,floor:.02})}break;case"steam":this.spawnOne("puff",e.clone().add(new R(K(-.03,.03),0,K(-.03,.03))),{vel:new R(K(-.04,.04),K(.22,.3),K(-.04,.04)),life:K(1.6,2.2),size:.07,grow:.12,pop:!1,wobble:.05,wobbleF:1.5,fadeIn:.4,fadeOut:1,alpha:.45});break;case"letter":this.spawnOne("letter",e,{vel:new R(0,.3,0),life:1.5,size:.3});break;default:this.spawnOne("sparkle",e,{life:.8,size:.2})}}update(t){let e=this.live;for(let n=e.length-1;n>=0;n--){let s=e[n];s.age+=t;let r=s.s;if(s.age>=s.life){r.visible=!1,this.group.remove(r),this.pool.push(r),e.splice(n,1);continue}let o=s.age;if(s.orbit&&s.follow){let f=s.follow.headPos(new R,0),p=s.orbit.phase+o*s.orbit.speed;s.pos.set(f.x+Math.cos(p)*s.orbit.r,f.y+s.orbit.y+Math.sin(p*2)*.03,f.z+Math.sin(p)*s.orbit.r)}else s.vel.y-=s.grav*t,s.drag&&s.vel.multiplyScalar(Math.exp(-s.drag*t)),s.pos.addScaledVector(s.vel,t),s.floor!==null&&s.pos.y<s.floor&&(s.pos.y=s.floor,s.vel.set(0,0,0),s.grav=0);let a=s.pos.x;s.wobble&&(a+=Math.sin(o*s.wobbleF*oe*.5+s.phase)*s.wobble),r.position.set(a,s.pos.y,s.pos.z);let l=s.pop?qi(_t(o/.25)):1,c=(s.size+s.grow*o)*l,h=c;s.flutter&&(h*=Math.abs(Math.cos(o*9+s.phase))*.8+.2),r.scale.set(h,c*s.aspect,1),s.spin&&(r.material.rotation+=s.spin*t);let d=_t(o/s.fadeIn),u=_t((s.life-o)/s.fadeOut);r.material.opacity=d*u*s.alpha}}clear(){for(let t of this.live)t.s.visible=!1,this.group.remove(t.s),this.pool.push(t.s);this.live.length=0}};function ub(i){let t=r=>!!i[r],e=["commons"],n=[];t("workshop")?e.push("workshop","attic"):n.push("workshop"),t("study")&&e.push("study"),t("kitchen")&&e.push("kitchen"),t("upstairs")&&e.push("bunk","yours");let s=["core"];return(t("study")||t("kitchen"))&&s.push("west"),t("gate")&&s.push("gate"),t("garden")&&s.push("garden"),t("shed")&&s.push("shed"),{built:e,sealed:n,chunks:s,upstairs:t("upstairs")}}var ah=class{constructor(t,e={}){this.engine=new zc(t,{fov:30,post:!1,quality:e.quality,preserveDrawingBuffer:!0}),this.engine.renderer.toneMapping=Vs,this.engine.scene.environmentIntensity=.4,this.scene=this.engine.scene,this.root=new at,this.root.name="island",this.scene.add(this.root),this.daylight=new Xc(this.engine);let n=this.daylight.sun.shadow;n.camera.left=n.camera.bottom=-17,n.camera.right=n.camera.top=17,n.camera.far=60,n.camera.updateProjectionMatrix(),this.daylight.sun.shadow.radius=2.5,this.house=new Jc,this.root.add(this.house.group),this.chunks=new Map,this.landGroup=new at,this.root.add(this.landGroup),this.clouds=X0(),this.scene.add(this.clouds),this.rig=new Kc(this.engine.camera),this.engine.onResize=()=>this.rig.fit(),this.lamps={lights:[],glows:[]},this.structure=null,this.levels=[0,1,2].map(s=>{let r=new at;return r.name=`actors:${s}`,this.root.add(r),r}),this.furnish=new nh(this),this.navs=[],this.fx=new oh(this.scene)}clockHour(){return this.daylight.currentHour()}applyStructure(t,{animate:e=!1}={}){let n=ub(t),s=JSON.stringify(n);if(this.structure&&this.structureKey===s)return n;let r=this.structure;this.structure=n,this.structureKey=s,this.house.build(n),this.furnish.sync(n),this.lamps=this.furnish.lamps;for(let o of n.chunks){if(this.chunks.has(o))continue;let a=G0(Mi[o]);a.children[0].position.y=.002+Mi[o].seed*.0025,this.landGroup.add(a),this.chunks.set(o,a),e&&r&&(a.userData.rise=0,a.position.y=-14)}if(n.chunks.includes("gate"))this.mist&&(this.mist.userData.leaving=1);else if(!this.mist){this.mist=W0(Mi.gate.cx,Mi.gate.cz,Mi.gate.hx*.95,Mi.gate.hz*.9,16,4),this.root.add(this.mist);let o=Mi.core,a=Zu(o).filter(([l,c])=>l<o.cx-1.2&&c>5.2).map(([l,c])=>[l+(o.cx-l)*.07,c+(o.cz-c)*.07]);a.sort((l,c)=>l[1]-c[1]),this.fence=V0(a.filter((l,c)=>c%2===0)),this.root.add(this.fence)}return this._updateBounds(),this.buildNav(),n}levelY(t){return Le+t*3}groundY(t,e,n){if(t>0)return this.levelY(t);if(e>Si.x0-.05&&e<Si.x1+.05&&n>Si.z0-.1&&n<Si.z1+.05)return Le;for(let s of this.house.rooms)if(s.level===0&&e>s.x0-.12&&e<s.x1+.12&&n>s.z0-.12&&n<s.z1+.12)return Le;return .01}buildNav(){let t=this.house.rooms,e=(r,o,a)=>o>r.x0&&o<r.x1&&a>r.z0&&a<r.z1;this.navs=[];let n=new ba(-9,-14,15,14,.25),s=t.filter(r=>r.level===0);n.buildWith((r,o)=>{for(let a of s)if(e(a,r,o))return!a.sealed;return r>Si.x0&&r<Si.x1&&o>Si.z0&&o<Si.z1?!0:this.isOnLand(r,o,.75)},this.furnish.footprintsFor(0),cd(this.house,0)),this.navs[0]=n;for(let r of[1,2]){let o=t.filter(l=>l.level===r&&!l.sealed);if(!o.length)continue;let a=new ba(-6.5,-6.5,6.5,6.5,.25);a.buildWith((l,c)=>o.some(h=>e(h,l,c)),this.furnish.footprintsFor(r),cd(this.house,r)),this.navs[r]=a}}portals(){let t=[],e=this.house;e.upstairs&&t.push({id:"stairs",kind:"stairs",a:{level:0,x:5.35,z:5.45},b:{level:1,x:5.3,z:-.75},path:[{x:5.35,z:5,y:Le},{x:5.35,z:.45,y:Le+3},{x:5.3,z:-.1,y:Le+3},{x:5.3,z:-.75,y:Le+3}]});let n=e.byId.attic;if(n&&!n.sealed){let s=n.level-1;t.push({id:"ladder",kind:"ladder",a:{level:s,x:.7,z:-4.75},b:{level:n.level,x:1.55,z:-4.6},path:[{x:.7,z:-5.05,y:this.levelY(s)},{x:.7,z:-5.05,y:n.base+.05},{x:1.55,z:-4.6,y:n.base}]})}return t}_updateBounds(){let t=1/0,e=-1/0,n=1/0,s=-1/0,r=this.structure.chunks.includes("gate")?this.structure.chunks:[...this.structure.chunks,"gate"];for(let x of r){let m=Mi[x];t=Math.min(t,m.cx-m.hx),e=Math.max(e,m.cx+m.hx),n=Math.min(n,m.cz-m.hz),s=Math.max(s,m.cz+m.hz)}let o=(t+e)/2,a=(n+s)/2,l=Math.hypot(e-t,s-n)/2,c=this.structure.upstairs?Le+6+2.5:Le+3+2.5;this.rig.setBounds({cx:o,cz:a,radius:l,top:c,depth:7});let h=this.structure.built.map(x=>qr[x]).filter(x=>x.floor===0),d=Math.min(...h.map(x=>x.x0))-.1,u=Math.max(...h.map(x=>x.x1))+.1,f=Math.min(...h.map(x=>x.z0))-.1,p=Math.max(...h.map(x=>x.z1))+.1;$u.uCut.value.set(d,f,u,p)}isOnLand(t,e,n=.6){for(let s of this.structure.chunks)if(H0(Mi[s],t,e,n))return!0;return!1}update(t,e){this.rig.update(t),this.daylight.update(t,this.lamps);let n=this.engine.camera,s=n.position.y<.2;$u.uCutOn.value=s?1:0,this.house.update(t,n,{focus:this.focus}),this.levels.forEach((a,l)=>{let h=this.house.levelGroups[l]?.userData.k??1;a.visible=h>.02,a.position.y=(1-h)*2.5});let r=this.furnish.kit("underside");r&&(r.group.visible=n.position.y<.6),this.house.setNight(this.daylight.state?_t(this.daylight.state.lamps,0,1):0);for(let a of this.chunks.values())a.userData.rise!==void 0&&(a.userData.rise=Math.min(1,a.userData.rise+t/3.2),a.position.y=-14*(1-qi(a.userData.rise,.9)),a.userData.rise>=1&&delete a.userData.rise);if(this.mist){let a=1;this.mist.userData.leaving!==void 0&&(this.mist.userData.leaving-=t/2,a=Math.max(0,this.mist.userData.leaving),a<=0&&(this.root.remove(this.mist),this.root.remove(this.fence),this.mist=null)),this.mist?.userData.update(e,a)}this.fx.update(t),(!this._sway||this._swayN!==this.furnish.kits.size)&&(this._swayN=this.furnish.kits.size,this._sway=Pp([...this.furnish.kits.values()].flatMap(a=>a.plants))),this._sway(t,e);let o=this.daylight.state?new pt(this.daylight.state.hemiSky).lerp(new pt("#ffffff"),.6):null;this.clouds.userData.update(e,o,s?.7:1)}};var gd="cozycode.island.v1";function Bp(i=Date.now()){return{version:1,createdAt:i,lastSeen:i,lastSim:i,seed:Math.floor(Math.random()*1e9),unlocks:{},crew:[],threads:[],board:[],attic:[],benchSlots:1,finishedBuilds:0,rug:[],mail:{flag:!1,birdHome:!0,lastRound:i,inbox:[],wall:[]},visitors:[],keepsakes:[],metVisitors:[],facts:[],capabilities:[],placements:{},seen:{},specialist:{day:"",used:0,away:!1,until:0},taste:[],metrics:{opens:[],homecomings:0,homecomingSkips:0,started:0,finished:0,notifications:[]},settings:{sound:!0,music:!1,haptics:!0,specialistBudget:2,notifications:!1,quality:"auto",timeSensitive:!0},sim:{},ticker:{last:[]},story:{pitchesSeen:0}}}var jr=class{constructor(){this.data=this.load()}load(){try{let t=localStorage.getItem(gd);if(t){let e=JSON.parse(t),n=Bp();return{...n,...e,settings:{...n.settings,...e.settings||{}},metrics:{...n.metrics,...e.metrics||{}},mail:{...n.mail,...e.mail||{}}}}}catch{}return this.fresh=!0,Bp()}save(){if(!this.frozen)try{localStorage.setItem(gd,JSON.stringify(this.data))}catch{}}reset(){this.frozen=!0;try{localStorage.removeItem(gd)}catch{}}};function Hp(i,t,e={}){let n=new pt(i),s=new se({color:n,roughness:.5,metalness:0,envMapIntensity:.55}),r=n.clone().lerp(new pt("#fff7ea"),.45),o=n.clone().lerp(new pt("#fff4e6"),.6),a={uFace:{value:t},uFaceRect:{value:new Ce(We.w,We.h,We.y0,cs.height)},uBelly:{value:r},uBellyAmt:{value:e.belly??.55},uRim:{value:o},uRimStrength:{value:.32},uFlash:{value:0},uGlow:{value:0}};return s.userData.uniforms=a,s.onBeforeCompile=l=>{Object.assign(l.uniforms,a),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vObjPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObjPos = position;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vObjPos;
uniform sampler2D uFace;
uniform vec4 uFaceRect;
uniform vec3 uBelly;
uniform float uBellyAmt;
uniform vec3 uRim;
uniform float uRimStrength;
uniform float uFlash;
uniform float uGlow;`).replace("#include <color_fragment>",`#include <color_fragment>
{
  float hgt = clamp(vObjPos.y / uFaceRect.w, 0.0, 1.0);
  // darker toward the bottom, a little brighter on the crown
  diffuseColor.rgb *= mix(0.80, 1.06, smoothstep(0.0, 0.85, hgt));

  float ang = atan(vObjPos.x, vObjPos.z);
  float rr = length(vObjPos.xz);
  float s = ang * rr; // horizontal surface arc length

  // belly patch
  vec2 bp = vec2(s / 0.235, (vObjPos.y - 0.25) / 0.165);
  float bellyMask = (1.0 - smoothstep(0.55, 1.0, length(bp))) * step(0.0, vObjPos.z + 0.25);
  diffuseColor.rgb = mix(diffuseColor.rgb, uBelly, bellyMask * uBellyAmt);

  // painted face
  vec2 fuv = vec2(0.5 + s / uFaceRect.x, (vObjPos.y - uFaceRect.z) / uFaceRect.y);
  if (abs(ang) < 1.45 && fuv.x > 0.0 && fuv.x < 1.0 && fuv.y > 0.0 && fuv.y < 1.0) {
    vec4 fc = texture2D(uFace, fuv);
    diffuseColor.rgb = mix(diffuseColor.rgb, fc.rgb, fc.a);
  }
}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
{
  vec3 vdir = normalize(vViewPosition);
  float fres = 1.0 - clamp(dot(normal, vdir), 0.0, 1.0);
  float rimT = pow(fres, 2.6);
  totalEmissiveRadiance += uRim * rimT * uRimStrength;
  // gentle fake subsurface warmth so shadows never go muddy
  totalEmissiveRadiance += diffuseColor.rgb * vec3(0.10, 0.06, 0.05);
  totalEmissiveRadiance += vec3(1.0, 0.95, 0.9) * uFlash;
  totalEmissiveRadiance += uRim * uGlow * (0.25 + rimT);
}`)},s.customProgramCacheKey=()=>"critter-body-v1",s}function Gp(i){let t=new pt(i).offsetHSL(0,.03,-.06);return new se({color:t,roughness:.55,envMapIntensity:.5})}var NE=new R,Ee=(i,t,e,n)=>i.ctx.fx?.(t,e,n),ne=(i,t,e={})=>i.ctx.sfx?.(t,{critter:i,...e}),tn=(i,t=0)=>i.headPos(new R,t),db=i=>new R(Math.sin(i.heading),0,Math.cos(i.heading)),fb=i=>i.ctx.camera?.position;function Qr(i){let t=fb(i);t&&!i.walking&&i.faceToward(t),t&&i.lookAt(t,2.5)}var Vp={hop:{dur:.78,update(i,t,e,n){let s=t.t,r=i.bounce;if(s<.17){let o=Kn(s/.17);e.sq-=.17*o*r,e.armL.z-=.15*o,e.armR.z-=.15*o}else if(s<.55){let o=(s-.17)/.38;e.y+=4*o*(1-o)*.34*r,e.armL.z+=1.1*we(o),e.armR.z+=1.1*we(o),e.footL.y-=.02*we(o),e.footR.y-=.02*we(o),n.mouth="o",n.mouthOpen=.3}else n.eyes=s<.68?"squint":n.eyes;t.at(.17)&&(i.sq.impulse(1.4*r),ne(i,"hop")),t.at(.55)&&(i.sq.impulse(-1.6*r),Ee(i,"dust",i.footPos(),{count:3,size:.22}),ne(i,"land",{strength:.6}))}},boop:{dur:1.05,lockMove:!0,start(i){i.sq.impulse(-2.6),i.leanX.impulse(-1.5),Qr(i),Ee(i,"pop",tn(i,-.25),{count:1})},update(i,t,e,n){let s=t.t;s<.22?(n.eyes="squint",n.mouth="o",n.mouthOpen=.5,e.sq-=.08*t.w):s<.5?(n.eyes="wide",n.mouth="o",n.mouthOpen=.7,e.y+=we(s,.22,.5)*.13,e.armL.z+=we(s,.22,.5)*.9,e.armR.z+=we(s,.22,.5)*.9):(n.eyes="happy",n.mouth="open",n.mouthOpen=.6,e.tz+=Math.sin(s*14)*.05*(1-s/1.05)),n.blush+=.35,t.at(.22)&&i.sq.impulse(1.8),t.at(.5)&&(i.sq.impulse(-1.4),Ee(i,"sparkle",tn(i),{count:3}))}},giggle:{dur:1.5,lockMove:!0,start(i){ne(i,"giggle"),Qr(i)},update(i,t,e,n){let s=t.t,r=t.w;e.y+=Math.abs(Math.sin(s*24))*.035*r,e.tz+=Math.sin(s*12)*.06*r,e.armR.f+=1.75*r,e.armR.z-=.5*r,e.armL.z+=.3*r,n.eyes="happy",n.mouth="open",n.mouthOpen=.45+.4*Math.abs(Math.sin(s*24)),n.blush+=.4,(t.at(.2)||t.at(.8))&&Ee(i,"sparkle",tn(i),{count:2})}},dizzy:{dur:3,lockMove:!0,start(i){ne(i,"dizzy"),Ee(i,"stars",tn(i,.05),{critter:i,duration:2.6})},update(i,t,e,n){let s=t.t,r=t.w*(1-Kn((s-2.2)/.8));n.eyes="dizzy",n.mouth="wobble",e.tx+=Math.sin(s*6.5)*.15*r,e.tz+=Math.cos(s*6.5)*.15*r,e.sproutZ+=Math.sin(s*6.5)*.35*r,e.sq-=.04*r,e.armL.z+=.5*r,e.armR.z+=.5*r}},grumpy:{dur:3.2,lockMove:!0,start(i,t){t.data.turn=i.heading+(Qt(.5)?1:-1)*2.2,ne(i,"grumble"),Ee(i,"anger",tn(i,-.1),{})},update(i,t,e,n){let s=t.t,r=be(s,0,.3,2,2.6);if(e.sx+=.13*r,e.sq-=.05*r,n.eyes="angry",n.brows="angry",n.mouth="pout",n.blush+=.3,s>.3&&s<1.6){let o=Math.sin(s*15);e.footL.y+=Math.max(0,o)*.07,e.footR.y+=Math.max(0,-o)*.07,e.tz+=o*.035,Math.abs(o)>.97&&!t.data.lastStomp?(t.data.lastStomp=!0,i.sq.impulse(-.6),ne(i,"step",{stomp:!0})):Math.abs(o)<.9&&(t.data.lastStomp=!1)}t.at(.4)&&i.setHeading(t.data.turn),s>2.1&&(n.eyes=s<2.6?"closed":"normal",n.mouth="flat",n.brows=null),t.at(2.1)&&ne(i,"sigh"),t.at(2.7)&&Qr(i)},end(i){i.setMood("content",3)}},wave:{slot:"upper",dur:1.9,start(i,t){t.opts.target?(i.walking||i.faceToward(t.opts.target.position||t.opts.target),i.lookAt(t.opts.target,2)):Qr(i),t.opts.sound!==!1&&ne(i,"hi")},update(i,t,e,n){let s=t.t,r=be(s,0,.25,1.55,1.9),o=i.walking?e.armR:e.armL;o.z+=(2.45+Math.sin(s*13)*.42)*r,o.f+=.35*r,e.tz+=Math.sin(s*6.5)*.05*r,r>.4&&(n.eyes="happy",n.mouth="open",n.mouthOpen=.5)}},tilt:{dur:1.7,start(i,t){t.data.dir=Qt(.5)?1:-1,Ee(i,"question",tn(i,.05),{}),ne(i,"hmm")},update(i,t,e,n){let s=be(t.t,0,.28,1.25,1.7),r=t.data.dir;e.tz+=r*.3*qi(Math.min(1,s)),e.sproutZ-=r*.25*s,s>.3&&(n.eyes="wide",n.mouth="o",n.mouthOpen=.1)}},lookAround:{dur:2.8,update(i,t,e,n){let s=t.t,r=be(s,.15,.45,.95,1.25),o=be(s,1.25,1.55,2.1,2.45);e.ry+=(r-o)*.6;let a=be(s,.05,.15,1,1.15),l=be(s,1.15,1.25,2.15,2.3);n.lookX=(a-l)*.95,n.lookY=.1,s>2.45&&(n.eyes="normal")}},yawn:{dur:2.8,lockMove:!0,start(i){ne(i,"yawn")},update(i,t,e,n){let s=t.t,r=be(s,0,.45,1.05,1.45);if(e.sq+=.14*r,e.armL.z+=2.3*r,e.armR.z+=2.3*r,e.armL.f+=.3*r,e.armR.f+=.3*r,e.tx-=.14*r,s<1.4)n.eyes="closed",n.mouth="yawn",n.mouthOpen=r;else if(s<1.8)n.eyes="closed",n.mouth="cat";else{n.eyes="sleepy";let o=we(s,1.8,2.5);e.tz+=Math.sin(s*32)*.05*o}n.tear=be(s,1,1.3,2.3,2.8)*.9}},stretch:{dur:2.4,lockMove:!0,update(i,t,e,n){let s=t.t,r=be(s,0,.5,1.8,2.4);e.armL.z+=2.6*r,e.armR.z+=2.6*r,e.sq+=.13*r,e.tz+=Math.sin(s*2.6)*.17*r,n.eyes="closed",n.mouth=s>.6&&s<1.6?"o":"cat",n.mouthOpen=.3,t.at(.6)&&ne(i,"mm")}},sneeze:{dur:2.5,lockMove:!0,update(i,t,e,n){let s=t.t;if(s<1.12){let r=Kn(s/.45),o=Kn((s-.65)/.4),a=s<.65?r*.5:.5+o*.5;e.sq+=.14*a,e.tx-=.24*a,n.eyes=a>.6?"squint":"sleepy",n.mouth="o",n.mouthOpen=.3+a*.6,e.sproutX+=.3*a}else if(s<1.55){let r=1-(s-1.12)/.43;n.eyes="squint",n.mouth="open",n.mouthOpen=.8,e.tx+=.22*r}else{let r=we(s,1.55,2.3);e.ry+=Math.sin(s*24)*.22*r,n.eyes=s<2?"closed":"happy",n.mouth="wobble"}if(t.at(.05)&&ne(i,"ah"),t.at(1.12)){i.sq.impulse(-3.2),i.leanX.impulse(7),i.sproutX.impulse(-6);let r=db(i);Ee(i,"puff",i.facePos(new R,.65,.5),{dir:r,count:6}),ne(i,"sneeze"),i.push.addScaledVector(new Y(r.x,r.z),-1.6)}}},trip:{dur:3.5,lockMove:!0,start(i){ne(i,"whoa"),i.vel.multiplyScalar(.3)},update(i,t,e,n){let s=t.t,r=1.42,o=0;if(s<.3)o=Bc(s/.3),e.armL.z+=2.1*o,e.armR.z+=2.1*o,n.eyes="wide",n.mouth="o",n.mouthOpen=.8;else if(s<1.9){o=1+Math.sin((s-.3)*18)*Math.exp(-(s-.3)*7)*.06;let a=Math.sin(s*11);e.footL.z-=Math.max(0,a)*.12,e.footR.z-=Math.max(0,-a)*.12,e.armL.z+=.9+Math.sin(s*9)*.35,e.armR.z+=.9+Math.sin(s*9+1.2)*.35,n.eyes="squint",n.mouth="wobble"}else if(s<2.4){let a=(s-1.9)/.5;o=1-qi(a,2.2),n.eyes="normal",n.mouth="o"}else{let a=we(s,2.4,3.2);e.tz+=Math.sin(s*26)*.08*a,n.eyes="happy",n.mouth="tongue",n.blush+=.6}e.rx+=r*o,e.y+=.45*_t(o,0,1),t.at(.3)&&(i.sq.impulse(-2.5),Ee(i,"dust",i.facePos(new R,.7,.05),{count:6,size:.3}),ne(i,"bonk")),t.at(2.45)&&(Ee(i,"sweat",tn(i),{}),ne(i,"shake"))}},dance:{dur:null,lockMove:!0,start(i,t){t.data.style=ge(["bounce","sway","wiggle"]),t.data.noteT=K(.2,1),t.data.offset=K(0,1)<.5?0:.5},update(i,t,e,n){let s=t.w,r=(i.ctx.beat?i.ctx.beat():t.t*2)+t.data.offset,o=r*Math.PI,a=Math.abs(Math.sin(o)),l=t.data.style;e.y+=a*(l==="bounce"?.14:.07)*s,e.sq+=(a*.08-.05)*s,e.tz+=Math.sin(o*.5)*(l==="sway"?.22:.12)*s,l==="wiggle"&&(e.ry+=Math.sin(o*2)*.25*s),e.armL.z+=(1.1+1.1*Math.max(0,Math.sin(o)))*s,e.armR.z+=(1.1+1.1*Math.max(0,-Math.sin(o)))*s,e.footL.y+=Math.max(0,Math.sin(o))*.05*s,e.footR.y+=Math.max(0,-Math.sin(o))*.05*s;let c=r%8;c>7&&(e.spin+=oe*Vu(c-7)),n.eyes=Math.floor(r/4)%2?"happy":"closed",n.mouth=Math.floor(r/2)%2?"open":"cat",n.mouthOpen=.6,n.blush+=.2,t.data.noteT-=1/60,t.data.noteT<=0&&(t.data.noteT=K(1.2,2.4),Ee(i,"note",tn(i),{}))}},spin:{dur:1,start(i){ne(i,"whee")},update(i,t,e,n){let s=_t(t.t/.9);e.spin+=oe*Vu(s);let r=we(s);e.armL.z+=1.6*r,e.armR.z+=1.6*r,e.y+=r*.06,n.eyes="happy",n.mouth="open"}},sleep:{dur:null,lockMove:!0,fadeIn:.6,start(i,t){t.data.zT=1,t.data.twitchT=K(6,14),t.opts.silent||ne(i,"mm")},update(i,t,e,n){let s=t.t,r=Kn(s/.9)*t.w,o=Math.sin(s*1.3);e.sq+=(-.1+o*.035)*r,e.y-=.02*r,e.tx+=(.13+o*.02)*r,e.tz+=Math.sin(s*.37)*.07*r,e.footL.z+=.09*r,e.footR.z+=.09*r,e.armL.z-=.12*r,e.armR.z-=.12*r,e.droop+=.7*r,t.w>.4&&(n.eyes="closed",n.mouth=o>.35?"o":"smile",n.mouthOpen=.15,n.blush+=.15),t.data.zT-=1/60,t.data.zT<=0&&(t.data.zT=K(1.6,2.4),Ee(i,"zzz",tn(i,-.05),{}),Qt(.35)&&ne(i,"snore")),t.data.twitchT-=1/60,t.data.twitchT<=0&&(t.data.twitchT=K(8,16),i.sq.impulse(-1.2),i.sproutX.impulse(-3),Qt(.5)&&ne(i,"mumble")),i.nightcap(Math.min(1,qi(Math.min(1,t.t/.6)))*t.w);let a=t.data;if(a.bub=(a.bub??-K(1,3))+1/60,a.bub>0&&!t.stopping){let l=Math.min(1,a.bub/4);i.noseBubble(l*(.65+.35*(o*.5+.5))),a.bub>4.5&&Math.random()<.004&&(i.noseBubble(0),a.bub=-K(2,5),i.sq.impulse(-.8),ne(i,"pop"))}else i.noseBubble(0)},end(i){i.noseBubble(0),i._capOff=!0}},wake:{dur:2.6,lockMove:!0,update(i,t,e,n){let s=t.t;if(s<1.1){n.eyes=s<.5?"closed":"sleepy";let r=be(s,.1,.3,.8,1.05);e.armR.f+=1.7*r,e.armR.z-=.45*r,e.armR.f+=Math.sin(s*22)*.12*r,e.sq-=.05*(1-s/1.1),n.mouth="flat"}else{let r=be(s,1.1,1.5,2,2.5);e.armL.z+=2.4*r,e.armR.z+=2.4*r,e.sq+=.12*r,n.eyes=r>.3?"closed":"normal",n.mouth=r>.3?"yawn":"smile",n.mouthOpen=r}t.at(1.15)&&ne(i,"yawn")}},sit:{dur:null,lockMove:!0,fadeIn:.35,update(i,t,e,n){let s=t.t,r=Kn(s/.45)*t.w;e.sq-=.07*r,e.footL.z+=.15*r,e.footR.z+=.15*r,e.footL.y+=.04*r,e.footR.y+=.04*r,i.seat>.2&&(e.footL.z+=Math.sin(s*3.1)*.05*r,e.footR.z+=Math.sin(s*3.1+Math.PI)*.05*r,e.footL.y-=.03*r,e.footR.y-=.03*r)}},hopTo:{dur:.62,lockMove:!0,start(i,t){t.data.from=i.position.clone(),t.data.to=new R(t.opts.to.x,0,t.opts.to.z),t.data.s0=i.seat,t.data.s1=t.opts.seat??0,t.data.from.distanceTo(t.data.to)>.05&&i.faceToward(t.data.to,!0),i.stopWalking(),i.vel.set(0,0)},update(i,t,e,n){let s=t.t;if(s<.12){e.sq-=.14*Kn(s/.12);return}let r=Kn(_t((s-.12)/.42));i.position.x=t.data.from.x+(t.data.to.x-t.data.from.x)*r,i.position.z=t.data.from.z+(t.data.to.z-t.data.from.z)*r,i.seat=t.data.s0+(t.data.s1-t.data.s0)*r,e.y+=we(r)*(.28+Math.abs(t.data.s1-t.data.s0)*.4),e.armL.z+=we(r)*.9,e.armR.z+=we(r)*.9,r>.1&&r<.9&&(n.mouth="o",n.mouthOpen=.3),t.at(.12)&&(i.sq.impulse(1.4),ne(i,"hop")),t.at(.55)&&(i.sq.impulse(-1.6),t.data.s1<.05&&Ee(i,"dust",i.footPos(),{count:2}))},end(i,t){i.seat=t.data.s1,i.position.x=t.data.to.x,i.position.z=t.data.to.z}},type:{dur:null,lockMove:!0,start(i,t){t.data.pauseT=K(3,7),t.data.mode="type",t.data.modeT=0},update(i,t,e,n){let s=t.t,r=t.w,o=t.data;if(o.modeT+=1/60,o.pauseT-=1/60,o.pauseT<=0&&(o.mode=o.mode==="type"?ge(["think","think","yay","sip"]):"type",o.modeT=0,o.pauseT=o.mode==="type"?K(3,7):K(1.4,2.2),o.mode==="yay"&&(ne(i,"yay",{soft:!0}),Ee(i,"sparkle",tn(i),{count:4}))),e.tx+=.09*r,o.mode==="type")e.armL.f+=(1.25+Math.max(0,Math.sin(s*19))*.2)*r,e.armR.f+=(1.25+Math.max(0,Math.sin(s*19+Math.PI))*.2)*r,e.armL.z-=.24*r,e.armR.z-=.24*r,e.y+=Math.abs(Math.sin(s*9.5))*.008*r,n.eyes="focus",n.lookY=-.35,n.lookX=Math.sin(s*.8)*.35,n.mouth="cat",Math.random()<.06&&ne(i,"tap");else if(o.mode==="think")e.armR.f+=1.45*r,e.armR.z-=.6*r,e.armL.f+=.9*r,e.tz+=.09*r,n.lookY=.65,n.lookX=.5,n.mouth="flat";else if(o.mode==="yay"){let a=we(o.modeT,0,.9);e.y+=a*.12,e.armL.z+=2.2*a,e.armR.z+=2.2*a,n.eyes="happy",n.mouth="open"}else e.armL.f+=1.8*r,e.armL.z-=.3*r,n.eyes="closed",n.mouth="cat",n.blush+=.2}},tinker:{dur:null,lockMove:!0,update(i,t,e,n){let s=t.t,r=t.w,o=s*1.6%1,a=o<.7?Kn(o/.7):1-Bc((o-.7)/.3);e.armL.f+=(.9+a*1.5)*r,e.armL.z-=.1*r,e.armR.f+=1*r,e.armR.z-=.35*r,e.tx+=(.1-a*.06)*r,n.eyes="focus",n.lookY=-.5,n.mouth=a>.8?"flat":"cat";let l=Math.floor(s*1.6);l!==t.data.k&&(t.data.k=l,s>.5&&(i.sq.impulse(-.7),Ee(i,"spark",i.facePos(new R,.75,.35),{count:4}),ne(i,"tink")))}},read:{dur:null,lockMove:!0,start(i,t){!i.item&&i.ctx.makeItem&&i.hold(i.ctx.makeItem("book",i),"front"),t.data.flipT=K(3,6),t.data.reactT=K(5,10),t.data.react=null},update(i,t,e,n){let s=t.t,r=t.data;e.tx+=.12*t.w,n.lookY=-.55;let o=s*.55%1;if(n.lookX=o<.85?-.55+o/.85*1.1:.55-(o-.85)/.15*1.1,n.mouth="cat",r.flipT-=1/60,r.flipT<=0&&(r.flipT=K(3.5,6.5),i.item?.userData.flip?.(),ne(i,"page")),r.reactT-=1/60,r.reactT<=0&&(r.reactT=K(6,12),r.react=ge(["gasp","giggle","aww"]),r.reactAt=s),r.react&&s-r.reactAt<1.4){let a=s-r.reactAt;r.react==="gasp"?(n.eyes="wide",n.mouth="o",n.mouthOpen=.7,e.tx-=.08*we(a,0,1.4)):r.react==="giggle"?(n.eyes="happy",n.mouth="open",e.y+=Math.abs(Math.sin(a*22))*.02):(n.eyes="happy",n.mouth="cat",n.blush+=.5,a<.05&&Ee(i,"heart",tn(i),{count:1}))}},end(i){i.drop(!0)}},think:{dur:3.8,lockMove:!0,start(i){Ee(i,"dots",tn(i,.05),{})},update(i,t,e,n){let s=t.t,r=be(s,0,.4,2.6,3);e.armR.f+=1.5*r,e.armR.z-=.62*r,e.tz+=.09*r,e.ry+=.18*r,s<2.6?(n.lookX=.6,n.lookY=.75,n.mouth=s<1.4?"flat":"o",n.mouthOpen=.1):(n.eyes="star",n.mouth="open",e.y+=we(s,2.6,3.2)*.16,e.sproutX-=.4*we(s,2.6,3.4),e.armL.z+=1.8*we(s,2.6,3.6)),t.at(2.6)&&(Ee(i,"bulb",tn(i,.12),{}),ne(i,"idea"),i.sq.impulse(1.5))}},write:{dur:null,lockMove:!0,update(i,t,e,n){let s=t.t,r=t.w;e.armL.f+=(2.05+Math.sin(s*7)*.14)*r,e.armL.z+=(.12+Math.cos(s*7)*.12)*r,e.armR.z+=.25*r,e.y+=Math.abs(Math.sin(s*3.5))*.02*r,e.footL.rx=.25*r,n.eyes="focus",n.lookY=.35,n.lookX=Math.sin(s*1.4)*.3,n.mouth="cat",Math.random()<.03&&ne(i,"scribble")}},water:{dur:null,lockMove:!0,start(i,t){!i.item&&i.ctx.makeItem&&i.hold(i.ctx.makeItem("wateringCan",i),"front"),t.data.dropT=0},update(i,t,e,n){let s=t.w,r=be(t.t,.3,.8,99,100);if(i.item&&(i.item.rotation.x=.75*r*s),e.tx+=.08*s,n.eyes="happy",n.mouth="cat",t.data.dropT-=1/60,r>.8&&t.data.dropT<=0){t.data.dropT=.12;let o=i.facePos(new R,.95,.35);Ee(i,"drop",o,{})}t.at(1)&&ne(i,"water")},end(i){i.drop(!0)}},carry:{slot:"upper",dur:null,update(i,t,e,n){n.mouth="cat",n.eyes="normal"}},reach:{dur:1.3,lockMove:!0,update(i,t,e,n){let s=be(t.t,0,.35,.85,1.25);e.armL.f+=2.2*s,e.armR.f+=2.2*s,e.armL.z-=.15*s,e.armR.z-=.15*s,e.y+=.06*s,e.sq+=.07*s,e.footL.rx=.5*s,e.footR.rx=.5*s,n.lookY=.45,n.mouth="o",n.mouthOpen=.2,t.at(.7)&&ne(i,"pin")}},admire:{dur:1.8,lockMove:!0,update(i,t,e,n){let s=be(t.t,0,.3,1.5,1.8);e.armL.z-=.5*s,e.armR.z-=.5*s,e.armL.f-=.45*s,e.armR.f-=.45*s,e.tx-=.06*s,e.tx+=Math.sin(t.t*10)*.05*we(t.t,.6,1.3),e.y+=Math.abs(Math.sin(t.t*7))*.025*s,n.eyes="happy",n.mouth="cat",n.blush+=.2}},stamp:{dur:null,lockMove:!0,update(i,t,e,n){let s=t.t,r=s*1.2%1,o=r<.65?Kn(r/.65):1-Bc((r-.65)/.35);e.armL.f+=(1+o*1.1)*t.w,e.armR.f+=(1+o*1.1)*t.w,e.armL.z-=.35*t.w,e.armR.z-=.35*t.w,e.y+=o*.05,n.eyes=o>.8?"focus":"normal",n.lookY=-.5,n.mouth="cat";let a=Math.floor(s*1.2);a!==t.data.k&&(t.data.k=a,s>.5&&(i.sq.impulse(-1.1),ne(i,"stamp"),Qt(.4)&&Ee(i,"sparkle",i.facePos(new R,.7,.3),{count:2})))}},gaze:{dur:null,lockMove:!0,start(i,t){t.data.sighT=K(4,9)},update(i,t,e,n){let s=t.t;n.lookY=.35,n.lookX=Math.sin(s*.25)*.4,n.mouth="cat",e.tz+=Math.sin(s*.8)*.05*t.w,e.armL.z-=.1,t.data.sighT-=1/60,t.data.sighT<=0&&(t.data.sighT=K(6,11),t.data.dreamy=s,Qt(.5)&&Ee(i,"heart",tn(i),{count:1})),t.data.dreamy&&s-t.data.dreamy<1.8&&(n.eyes="closed",n.blush+=.3)}},pet:{dur:null,lockMove:!0,fadeIn:.25,start(i,t){t.data.heartT=.3,t.data.cooT=0,i.stopWalking()},update(i,t,e,n){let s=t.t,r=t.w,o=i.petLean||{x:0,y:0};e.tz+=_t(o.x,-1,1)*.22*r,e.tx+=_t(o.y,-1,1)*.12*r,e.sq+=(Math.sin(s*38)*.008-.03)*r,e.sproutZ+=Math.sin(s*5)*.25*r,e.armL.z+=.35*r,e.armR.z+=.35*r,n.eyes=Math.floor(s/1.6)%3===2?"happy":"closed",n.mouth="cat",n.blush+=.55*r,t.data.heartT-=1/60,t.data.heartT<=0&&(t.data.heartT=K(.5,.9),Ee(i,"heart",tn(i),{count:1})),t.data.cooT-=1/60,t.data.cooT<=0&&(t.data.cooT=K(1.4,2.4),ne(i,"coo"))}},held:{dur:null,lockMove:!0,fadeIn:.1,start(i,t){ne(i,"whee"),t.data.brave=i.traits.energy>.35},update(i,t,e,n){let s=t.t,r=t.w,o=i.heldVel;e.sq+=.07*r,e.tz+=_t(-o.x*.09,-.5,.5)*r,e.tx+=_t(o.y*.09,-.5,.5)*r,e.footL.y+=(Math.sin(s*13)*.035-.04)*r,e.footR.y+=(Math.sin(s*13+Math.PI)*.035-.04)*r,e.footL.z+=Math.cos(s*13)*.04*r,e.footR.z-=Math.cos(s*13)*.04*r,e.armL.z+=(.95+Math.sin(s*10)*.35)*r,e.armR.z+=(.95+Math.sin(s*10+1.3)*.35)*r,s<1||!t.data.brave?(n.eyes="wide",n.mouth=t.data.brave?"o":"wobble",n.mouthOpen=.6):(n.eyes="happy",n.mouth="open"),n.blush+=.2}},land:{dur:1,lockMove:!0,update(i,t,e,n){let s=t.t;s<.3?(n.eyes="squint",n.mouth="o"):(e.tz+=Math.sin(s*26)*.07*(1-s),n.eyes="normal",n.mouth="smile")}},hiccup:{dur:.9,update(i,t,e,n){let s=t.t;e.y+=we(s,.1,.3)*.08,s>.1&&s<.5&&(n.eyes="wide",n.mouth="o",n.mouthOpen=.2),t.at(.1)&&(i.sq.impulse(2.4),ne(i,"hic"))}},scratch:{dur:1.7,update(i,t,e,n){let s=t.t,r=be(s,0,.3,1.3,1.7);e.armR.z+=2.25*r,e.armR.f+=(.3+Math.sin(s*21)*.13)*r,e.tz-=.12*r,n.lookX=-.5,n.lookY=.55,n.mouth="cat"}},hum:{dur:3.2,start(i){ne(i,"hum")},update(i,t,e,n){let s=t.t;e.tz+=Math.sin(s*3.2)*.07*t.w,e.y+=Math.abs(Math.sin(s*3.2))*.015,n.eyes="closed",n.mouth="o",n.mouthOpen=.15,(t.at(.3)||t.at(1.4)||t.at(2.4))&&Ee(i,"note",tn(i),{})}},wiggle:{dur:1.5,update(i,t,e,n){let s=be(t.t,0,.2,1.2,1.5);e.ry+=Math.sin(t.t*17)*.26*s,e.sq+=Math.sin(t.t*34)*.03*s,e.armL.z+=.6*s,e.armR.z+=.6*s,n.eyes="happy",n.mouth="cat"}},tapFoot:{dur:2.4,update(i,t,e,n){let s=be(t.t,0,.2,2.1,2.4);e.footL.y+=Math.max(0,Math.sin(t.t*12))*.05*s,e.footL.rx=-.4*s,e.armL.z-=.45*s,e.armR.z-=.45*s,e.armL.f-=.4*s,e.armR.f-=.4*s,n.mouth="flat",n.lookX=.6,n.lookY=.2}},blinkSlow:{dur:1.4,update(i,t,e,n){n.open=1-we(t.t,.1,1.2),n.mouth="cat",n.blush+=.25*we(t.t,0,1.4)}},nod:{dur:1,slot:"upper",update(i,t,e,n){e.tx+=Math.sin(t.t*15)*.14*be(t.t,0,.1,.8,1),n.eyes="happy"}},shakeHead:{dur:1.1,slot:"upper",update(i,t,e,n){e.ry+=Math.sin(t.t*17)*.3*be(t.t,0,.1,.85,1.1),n.eyes="closed",n.mouth="flat"}},surprised:{dur:1.2,start(i){i.sq.impulse(3.2),Ee(i,"exclaim",tn(i,.05),{}),ne(i,"gasp")},update(i,t,e,n){let s=t.t;e.y+=we(s,0,.32)*.2,e.sproutX-=.5*we(s,0,.8),e.armL.z+=.9*we(s,0,.6),e.armR.z+=.9*we(s,0,.6),n.eyes=s<.7?"dot":"wide",n.mouth="o",n.mouthOpen=.8}},cheer:{dur:2.3,lockMove:!0,start(i){Qr(i),ne(i,"yay"),Ee(i,"confetti",tn(i,.1),{count:24})},update(i,t,e,n){let s=t.t,r=we(s,.1,.65),o=we(s,.85,1.4);e.y+=(r+o)*.28*i.bounce,e.armL.z+=2.5*be(s,0,.15,1.6,2.1),e.armR.z+=2.5*be(s,0,.15,1.6,2.1),e.armL.z+=Math.sin(s*16)*.2,e.armR.z+=Math.sin(s*16+1)*.2,n.eyes="star",n.mouth="open",n.mouthOpen=.8,n.blush+=.4,(t.at(.65)||t.at(1.4))&&(i.sq.impulse(-1.6),Ee(i,"dust",i.footPos(),{count:2}))}},shy:{dur:2.6,lockMove:!0,update(i,t,e,n){let s=t.t,r=be(s,0,.3,2.2,2.6),o=be(s,1.1,1.25,1.6,1.8);e.armL.f+=(1.9-o*.6)*r,e.armR.f+=1.9*r,e.armL.z-=.55*r,e.armR.z-=.55*r,e.tz+=Math.sin(s*3)*.07*r,e.tx+=.1*r,n.eyes=o>.5?"normal":"closed",n.blush=1.1,n.mouth="wobble",t.at(.4)&&Ee(i,"heart",tn(i),{count:1,small:!0})}},sad:{dur:3.2,lockMove:!0,start(i){ne(i,"aww")},update(i,t,e,n){let s=be(t.t,0,.5,2.6,3.2);e.sq-=.05*s,e.tx+=.12*s,e.droop+=.9*s,e.armL.z-=.15*s,e.armR.z-=.15*s,n.eyes="sad",n.mouth="frown",n.brows="worried",n.tear=be(t.t,.8,1.2,2.4,3)}},sheepish:{dur:2.6,lockMove:!0,start(i){Qr(i),Ee(i,"sweat",tn(i),{})},update(i,t,e,n){let s=t.t,r=be(s,0,.3,2.2,2.6);e.armR.z+=2.2*r,e.armR.f+=(.3+Math.sin(s*20)*.12)*r,e.tz-=.1*r,n.eyes="happy",n.mouth="wobble",n.blush=.9}},hug:{dur:2.8,lockMove:!0,start(i,t){t.opts.partner&&i.faceToward(t.opts.partner.position),ne(i,"coo")},update(i,t,e,n){let s=be(t.t,0,.4,2.2,2.8);e.tx+=.24*s,e.armL.f+=1.5*s,e.armR.f+=1.5*s,e.armL.z+=.2*s,e.armR.z+=.2*s,e.sq+=Math.sin(t.t*4)*.02*s,n.eyes=s>.5?"closed":"happy",n.mouth="cat",n.blush+=.6*s,t.at(.7)&&Ee(i,"heart",tn(i,.1),{count:2})}},bonk:{dur:1.4,lockMove:!0,start(i,t){i.sq.impulse(-2.6);let e=t.opts.from?new Y(i.position.x-t.opts.from.x,i.position.z-t.opts.from.z).normalize():new Y(-Math.sin(i.heading),-Math.cos(i.heading));i.push.addScaledVector(e,2.2),i.leanX.impulse(-4),ne(i,"bonk",{soft:!0})},update(i,t,e,n){let s=t.t;s<.4?(n.eyes="squint",n.mouth="o"):s<.8?(n.eyes="wide",n.mouth="o"):(n.eyes="happy",n.mouth="open",e.y+=Math.abs(Math.sin(s*20))*.02)}},talk:{slot:"upper",dur:null,update(i,t,e,n){i.talkTime>0?(e.armL.f+=Math.max(0,Math.sin(t.t*3.3))*.5*t.w,e.armL.z+=Math.max(0,Math.sin(t.t*2.1))*.4*t.w):e.tx+=Math.max(0,Math.sin(t.t*5))*.04*t.w}},peek:{dur:2.2,update(i,t,e,n){let s=be(t.t,0,.4,1.7,2.2);e.tx+=.18*s,e.tz+=.18*s,n.eyes="wide",n.mouth="o",n.mouthOpen=.15}}};var js=new R,Wp=new R,GE=new R(0,1,0),wa=[{name:"peach",color:"#ffb18f"},{name:"mint",color:"#93dcbc"},{name:"lilac",color:"#c4b0f2"},{name:"butter",color:"#ffd977"},{name:"sky",color:"#95c8f4"},{name:"rose",color:"#ffa3bf"},{name:"sage",color:"#b9d48f"},{name:"apricot",color:"#ffc58a"},{name:"lavender",color:"#a9b2f0"},{name:"coral",color:"#ff9a8c"}],Xp=["sprout","leaf","antenna","flower"],qp={happy:{eyes:"normal",mouth:"smile",blush:.38},content:{eyes:"normal",mouth:"cat",blush:.32},excited:{eyes:"star",mouth:"open",blush:.5,mouthOpen:.55},sleepy:{eyes:"sleepy",mouth:"flat",blush:.25},curious:{eyes:"normal",mouth:"o",blush:.3,mouthOpen:.1},sad:{eyes:"sad",mouth:"frown",blush:.2,brows:"worried"},grumpy:{eyes:"angry",mouth:"pout",blush:.25,brows:"angry"},focused:{eyes:"focus",mouth:"cat",blush:.25},shy:{eyes:"normal",mouth:"wobble",blush:.8}},pb=1,xd=null,Yp=null,lh=class{constructor(t={}){this.id=t.id||`critter-${pb++}`,this.name=t.name||"Sprout",this.seed=t.seed??Math.floor(Math.random()*1e9);let e=Te(this.seed);this.rng=e,this.color=t.color||wa[Math.floor(e()*wa.length)].color,this.accessory=t.accessory||Xp[Math.floor(e()*Xp.length)],this.size=t.size??.92+e()*.16;let n=t.traits||{};this.traits={energy:n.energy??e(),curiosity:n.curiosity??e(),sociability:n.sociability??e(),sleepiness:n.sleepiness??e(),clumsiness:n.clumsiness??e()*.8,chattiness:n.chattiness??e()};let s=this.traits;this.walkSpeed=.85+s.energy*.55,this.bounce=.8+s.energy*.45,this.blinkEvery=2.4+e()*2.6,this.voice=t.voice??.85+e()*.5,this.ctx=t.ctx||{},this.mood="happy",this.moodHold=0,this._build(t),this._initState()}_build(t){let e=Up();this.face=new rh(t.faceShape||{eyeDX:.146+this.rng()*.028,eyeSize:.92+this.rng()*.2,eyeY:.55+this.rng()*.03}),this.material=Hp(this.color,this.face.texture,{belly:.22+this.rng()*.2}),this.limbMaterial=Gp(this.color),this.root=new at,this.root.name=`critter:${this.name}`,this.root.userData.critter=this,this.root.scale.setScalar(this.size),this.mover=new at,this.root.add(this.mover),this.feet=[];for(let o of[1,-1]){let a=new mt(e.foot,this.limbMaterial);a.castShadow=!0,a.position.set(o*.19,0,.16),a.userData.base=a.position.clone(),a.userData.critter=this,this.mover.add(a),this.feet.push(a)}this.squash=new at,this.squash.position.y=cs.lift,this.mover.add(this.squash),this.bodyPivot=new at,this.squash.add(this.bodyPivot),this.body=new mt(e.body,this.material),this.body.castShadow=!0,this.body.receiveShadow=!0,this.body.userData.critter=this,this.bodyPivot.add(this.body),this.arms=[];let n=.4,s=ai(n)-.02;for(let o of[1,-1]){let a=new at;a.position.set(o*s,n,.03);let l=new mt(e.arm,this.limbMaterial);l.castShadow=!0,l.userData.critter=this,a.add(l),a.userData.side=o,this.bodyPivot.add(a),this.arms.push(a)}this.topPivot=new at,this.topPivot.position.set(0,cs.height-.03,.01),this.bodyPivot.add(this.topPivot),this.leafPivots=[],this._buildAccessory(e),this.hand=new at,this.hand.position.set(0,.36,.52),this.bodyPivot.add(this.hand),this.item=null,this.itemMode=null;let r=new In({map:kp(),transparent:!0,depthWrite:!1,opacity:1});this.shadow=new mt(e.shadow,r),this.shadow.position.y=.012,this.shadow.renderOrder=1,this.shadow.userData.noAO=!0,this.root.add(this.shadow)}_buildAccessory(t){let e=new se({color:"#76c25e",roughness:.5}),n=new se({color:"#8fd672",roughness:.45});this.accessoryMaterials=[e,n];let s=this.accessory;if(s==="sprout"||s==="flower"){let r=new mt(t.stem,e);r.castShadow=!0,this.topPivot.add(r);let o=new at;if(o.position.copy(t.stemTip),this.topPivot.add(o),s==="sprout")for(let a of[1,-1]){let l=new at;l.rotation.y=a>0?.25:Math.PI-.25;let c=new mt(t.leaf,a>0?n:e);c.castShadow=!0,c.rotation.z=.45,l.add(c),l.userData.baseZ=.45,l.userData.side=a,o.add(l),this.leafPivots.push({pivot:l,leaf:c,side:a})}else{let a=this.rng()<.5?"#fff6ee":"#ffd0e0",l=new se({color:a,roughness:.5}),c=new se({color:"#ffcc4d",roughness:.6}),h=new at;h.rotation.z=-.35;for(let p=0;p<5;p++){let x=new mt(t.petal,l);x.rotation.y=p/5*Math.PI*2,x.rotation.z=.18,x.castShadow=!0,h.add(x)}let d=new mt(t.flowerCenter,c);d.position.y=.008,h.add(d),o.add(h),this.flower=h,this.accessoryMaterials.push(l,c);let u=new at;u.position.set(.01,-.1,0),u.rotation.y=Math.PI-.3;let f=new mt(t.leaf,n);f.scale.setScalar(.75),f.rotation.z=.5,u.add(f),u.userData.baseZ=.5,o.add(u),this.leafPivots.push({pivot:u,leaf:f,side:-1})}}else if(s==="leaf"){let r=new at;r.rotation.y=Math.PI/2+.2;let o=new mt(t.bigLeaf,n);o.castShadow=!0,o.rotation.z=1.05,r.add(o),r.userData.baseZ=1.05,this.topPivot.add(r),this.leafPivots.push({pivot:r,leaf:o,side:1})}else if(s==="antenna"){let r=this.limbMaterial,o=new mt(t.antennaStalk,r);o.castShadow=!0,this.topPivot.add(o);let a=new pt(this.color).offsetHSL(.45,.1,.05),l=new se({color:a,roughness:.3,emissive:a,emissiveIntensity:.15});this.accessoryMaterials.push(l),this.bobbleMat=l;let c=new mt(t.bobble,l);c.position.y=.22,c.castShadow=!0,this.topPivot.add(c),this.bobble=c}}_initState(){this.time=K(0,100),this.vel=new Y,this.desiredVel=new Y,this.push=new Y,this.speed=0,this.prevVelFwd=0,this.prevVelSide=0,this.yaw=new Tn(0,2,.72),this.yawVel=0,this.phase=0,this.walkBlend=0,this.hopBlend=0,this.gait="walk",this.sq=new Tn(0,4.2,.3),this.leanX=new Tn(0,2.6,.32),this.leanZ=new Tn(0,2.6,.32),this.sproutX=new Tn(0,2.4,.16),this.sproutZ=new Tn(0,2.4,.16),this.prevTop=null,this.prevTopVel=new R,this.airY=0,this.vy=0,this.held=!1,this.falling=!1,this.heldVel=new Y,this.actions=[],this.path=null,this.pathIndex=0,this.arrive=null,this.faceYaw=null,this.blinkT=K(.5,3),this.blinkP=-1,this.doubleBlink=!1,this.look={x:0,y:0},this.lookTarget=null,this.lookUntil=0,this.glance={x:0,y:0,t:K(1,3)},this.talkTime=0,this.pokeCount=0,this.pokeDecay=0,this.petAmount=0,this.fidgetT=K(2,6),this.fidgetsEnabled=!0,this.stance="stand",this.seat=0,this.visible=!0,this.lastHeadingTarget=0,this.faceState=ud(),this.flash=0,this.hover=0,this.hoverTarget=0}setContext(t){this.ctx=t}get position(){return this.root.position}get heading(){return this.yaw.x}setHeading(t,e=!1){let n=A0(this.yaw.x,t);this.yaw.target=n,e&&this.yaw.snap(n)}faceToward(t,e=!1){let n=t.x-this.root.position.x,s=t.z-this.root.position.z;n*n+s*s<1e-6||this.setHeading(Math.atan2(n,s),e)}lookAt(t,e=2){this.lookTarget=t,this.lookUntil=this.time+e}play(t,e={}){let n=Vp[t];if(!n)return console.warn("unknown action",t),null;let s=n.slot||"main";for(let o of this.actions)(o.def.slot||"main")===s&&!o.stopping&&this._stopAction(o,n.blendOut??.18);let r={def:n,name:t,t:0,dur:e.duration??(typeof n.dur=="function"?n.dur(this,e):n.dur),w:0,stopping:!1,fade:0,opts:e,data:{},fired:new Set,onDone:e.onDone,at(o){return this.t>=o&&!this.fired.has(o)?(this.fired.add(o),!0):!1}};return n.start?.(this,r),this.actions.push(r),r}stop(t,e=.25){for(let n of this.actions)(!t||n.name===t)&&!n.stopping&&this._stopAction(n,e)}stopSlot(t="main",e=.2){for(let n of this.actions)(n.def.slot||"main")===t&&!n.stopping&&this._stopAction(n,e)}isPlaying(t){return this.actions.some(e=>e.name===t&&!e.stopping)}get mainAction(){for(let t=this.actions.length-1;t>=0;t--){let e=this.actions[t];if((e.def.slot||"main")==="main"&&!e.stopping)return e}return null}get busy(){let t=this.mainAction;return!!(t&&t.def.lockMove)}_stopAction(t,e){t.stopping=!0,t.fade=Math.max(.01,e),t.def.end?.(this,t)}walkPath(t,e={}){if(this.path=t&&t.length?t.map(n=>new Y(n.x,n.z)):null,this.pathIndex=0,this.arrive=e.onArrive||null,this.pathSpeed=e.speed??1,this.gait=e.gait||(this.traits.energy>.82&&Qt(.4)?"hop":"walk"),this.arriveFace=e.face??null,!this.path){let n=this.arrive;this.arrive=null,n?.(!0)}}stopWalking(){this.path=null,this.desiredVel.set(0,0)}get walking(){return!!this.path}say(t,e={}){let n=e.duration??Math.min(5,.6+t.length*.055);this.talkTime=n,this.ctx.onSay?.(this,t,{...e,duration:n})}showFace(t,e=3){this.faceOverride={...t,until:this.time+e}}setMood(t,e=0){this.mood=t,this.moodHold=e}hold(t,e="front"){this.drop(!0),this.item=t,this.itemMode=e,e==="overhead"?this.hand.position.set(0,cs.height+.18,.02):e==="side"?this.hand.position.set(.5,.25,.18):this.hand.position.set(0,.36,.5),this.hand.add(t);let n=t.userData.holdOffset;n&&e==="front"?t.position.set(n[0],n[1],n[2]):t.position.set(0,0,0),t.rotation.set(0,0,0)}drop(t=!1){if(!this.item)return null;let e=this.item;return this.hand.remove(e),this.item=null,this.itemMode=null,t&&xb(e),e}poke(){if(this.pokeCount+=1,this.pokeDecay=2.2,this.flash=.35,this.ctx.sfx?.("boop",{pitch:this.voice,critter:this}),!this.held){if(this.mainAction?.name==="sleep"){this.brain?this.stop("sleep",.2):this.play("wake");return}this.pokeCount>=7?(this.pokeCount=0,this.play("grumpy")):this.pokeCount>=5?this.play("dizzy"):this.pokeCount>=3?this.play("giggle"):this.play("boop")}}update(t){t=Math.min(t,1/20),this.time+=t;let e=this.time;this.pokeDecay>0&&(this.pokeDecay-=t,this.pokeDecay<=0&&(this.pokeCount=0)),this.moodHold>0&&(this.moodHold-=t),this.talkTime=Math.max(0,this.talkTime-t),this.flash=Ye(this.flash,0,10,t),this.hover=Ye(this.hover,this.hoverTarget,10,t);let n=this._pose=this._pose||mb();gb(n);let s=qp[this.mood]||qp.happy,r=this.faceState;r.eyes=s.eyes,r.mouth=s.mouth,r.mouthOpen=s.mouthOpen??.4,r.blush=s.blush,r.brows=s.brows||null,r.tear=0,r.open=1,this._locomotion(t,n),this._lookAndBlink(t,r),this._idle(t,n,r);for(let a=0;a<this.actions.length;a++){let l=this.actions[a];l.t+=t,l.stopping?l.w-=t/l.fade:(l.w=Math.min(1,l.w+t/(l.def.fadeIn??.12)),l.dur&&l.t>=l.dur&&(l.stopping=!0,l.fade=l.def.fadeOut??.12,l.def.end?.(this,l),l.finished=!0)),l.w=_t(l.w,0,1),l.def.update(this,l,n,r,t)}for(let a=this.actions.length-1;a>=0;a--){let l=this.actions[a];l.stopping&&l.w<=0&&(this.actions.splice(a,1),l.finished&&l.onDone?.(this,l))}if(this.item?.userData.update?.(t),this._capOff&&this._cap){let a=Math.max(0,this._capK-t*2.5);this.nightcap(a),a<=0&&(this._capOff=!1)}this.item&&!n.armsOverride&&(this.itemMode==="overhead"?(n.armL.z+=2.55*1,n.armR.z+=2.55*1,n.armL.f+=.15,n.armR.f+=.15):this.itemMode==="front"?(n.armL.f+=1.15,n.armR.f+=1.15,n.armL.z-=.28,n.armR.z-=.28):this.itemMode==="side"&&(n.armL.z+=.5,n.armL.f+=.4));let o=this.faceOverride;o&&this.time<o.until&&(o.eyes&&(r.eyes=o.eyes),o.mouth&&(r.mouth=o.mouth,r.mouthOpen=o.mouthOpen??.6),o.blush!==void 0&&(r.blush=o.blush),o.brows!==void 0&&(r.brows=o.brows)),this.talkTime>0&&!n.faceLocked&&(r.mouth!=="yawn"&&r.mouth!=="open"&&(r.mouth="talk"),r.mouthOpen=.5+.5*Math.sin(e*19)*Math.abs(Gc(e*6,this.seed)),n.y+=Math.abs(Math.sin(e*9.5))*.012),this._applyPose(t,n,r)}_locomotion(t,e){let n=this.root.position,s=this.desiredVel.set(0,0),r=this.busy;if(this.held)this.path=this.path?this.path:null;else if(this.path&&!r){let v=this.path[this.pathIndex],T=v.x-n.x,M=v.y-n.z,I=Math.hypot(T,M),y=this.pathIndex===this.path.length-1,E=this.walkSpeed*this.pathSpeed*(this.gait==="hop"?1.15:this.gait==="run"?1.8:1);if(I<(y?.06:.28))if(y){let A=this.arrive;this.path=null,this.arrive=null,this.arriveFace!==null&&this.arriveFace!==void 0&&this.setHeading(this.arriveFace),A?.(!0)}else this.pathIndex++;else{let A=y?_t(I/.6,.25,1):1;s.set(T/I*E*A,M/I*E*A)}}let o=this.held?0:6.5,a=this.vel.x,l=this.vel.y;this.vel.x=Ye(this.vel.x,s.x,o,t),this.vel.y=Ye(this.vel.y,s.y,o,t),!this.held&&!this.falling&&(n.x+=(this.vel.x+this.push.x)*t,n.z+=(this.vel.y+this.push.y)*t),this.push.multiplyScalar(Math.exp(-8*t)),this.speed=this.vel.length();let c=this.yaw.x;this.speed>.08&&!this.held&&this.setHeading(Math.atan2(this.vel.x,this.vel.y)),this.yaw.update(t),this.yawVel=(this.yaw.x-c)/Math.max(t,1e-4),this.root.rotation.y=this.yaw.x,Math.abs(Oc(this.yaw.target-this.lastHeadingTarget))>.9&&(this.lastHeadingTarget=this.yaw.target,this.blinkP<0&&(this.blinkP=0));let h=Math.sin(this.yaw.x),d=Math.cos(this.yaw.x),u=this.vel.x*h+this.vel.y*d,f=this.vel.x*d-this.vel.y*h,p=(u-this.prevVelFwd)/Math.max(t,1e-4),x=(f-this.prevVelSide)/Math.max(t,1e-4);this.prevVelFwd=u,this.prevVelSide=f,this.leanX.target=_t(u*.07-p*.018,-.3,.3),this.leanZ.target=_t(x*.012+this.yawVel*u*.03,-.25,.25);let m=this.speed>.05&&!this.held,g=!m&&Math.abs(this.yawVel)>1.2&&!this.held&&!r;this.walkBlend=Ye(this.walkBlend,m||g?1:0,9,t);let b=this.gait==="hop"&&m;if(this.hopBlend=Ye(this.hopBlend,b?1:0,7,t),m){let v=this.gait==="hop"?.5:this.gait==="run"?.3:.19;this.phase+=t*Math.PI*this.speed/v}else g&&(this.phase+=t*Math.PI*4.5);let w=this.walkBlend*(1-this.hopBlend);if(w>.001){let v=this.phase,T=Math.sin(v),M=this.gait==="run"?1.4:1;e.footL.y+=Math.max(0,T)*.08*w,e.footR.y+=Math.max(0,-T)*.08*w,e.footL.z+=Math.cos(v)*.085*w*M,e.footR.z-=Math.cos(v)*.085*w*M,e.y+=Math.abs(T)*.035*w*this.bounce,e.sq-=(1-Math.abs(T))*.03*w*this.bounce,e.tz+=T*.07*w,e.ry+=T*.06*w,e.armL.f+=T*.6*w*M,e.armR.f-=T*.6*w*M,e.armL.z+=.12*w,e.armR.z+=.12*w,e.tx+=.04*w*M}if(this.hopBlend>.001){let v=this.hopBlend*this.walkBlend,T=this.phase,M=Math.abs(Math.sin(T));e.y+=M*.2*v*this.bounce;let I=1-Xi(0,.35,M);e.sq+=(M*.1-I*.14)*v,e.armL.z+=(.4+M*.9)*v,e.armR.z+=(.4+M*.9)*v,e.footL.y+=M*.03*v,e.footR.y+=M*.03*v,e.footL.z-=M*.04*v,e.footR.z-=M*.04*v;let y=this._hopContact||!1,E=M<.12;E&&!y&&v>.5&&(this.sq.impulse(-.6*this.bounce),Qt(.5)&&this.ctx.fx?.("dust",this.footPos(),{count:2,size:.18}),this.ctx.sfx?.("step",{critter:this,soft:!0})),this._hopContact=E}if(w>.5&&m){let v=Math.floor(this.phase/Math.PI);v!==this._lastStep&&(this._lastStep=v,this.ctx.sfx?.("step",{critter:this}))}if(this.held)this.airY=Ye(this.airY,this.heldHeight??1.1,10,t);else if((this.falling||this.airY>1e-4)&&(this.vy-=18*t,this.airY+=this.vy*t,this.airY<=0)){let v=Math.abs(this.vy);this.airY=0,this.falling=!1,(v>1.2||this._bigFall)&&(this.sq.impulse(-Math.min(4,v*.55)),this.ctx.fx?.("dust",this.footPos(),{count:5,size:.3}),this.ctx.sfx?.("land",{critter:this,strength:v}),v>3&&!this._bigFall?(this.vy=v*.22,this.airY=1e-4,this.falling=!0,this._bigFall=!0):(this.play(this._bigFall&&Qt(.35)?"dizzy":"land"),this._bigFall=!1)),this.falling||(this.vy=0)}}_lookAndBlink(t,e){let n=this.time;if(this.blinkT-=t,this.blinkT<=0&&this.blinkP<0&&(this.blinkP=0,this.doubleBlink=Qt(.18),this.blinkT=this.blinkEvery*K(.6,1.4)),this.blinkP>=0){this.blinkP+=t/.15;let a=this.blinkP;e.open=a<.5?1-a*2:Math.min(1,(a-.5)*2),a>=1&&(this.doubleBlink?(this.doubleBlink=!1,this.blinkP=-.25):this.blinkP=-1)}this.blinkP<0&&this.blinkP>-1&&(this.blinkP+=t/.08,this.blinkP>=0&&(this.blinkP=0),e.open=1);let s=0,r=0,o=null;if(this.lookTarget&&n<this.lookUntil?(o=this.lookTarget.isVector3?this.lookTarget:this.lookTarget.position||null,this.lookTarget.root&&(o=Wp.copy(this.lookTarget.root.position).setY(this.lookTarget.root.position.y+.6))):this.lookTarget=null,o){js.copy(o).sub(this.root.position);let a=Oc(Math.atan2(js.x,js.z)-this.yaw.x),l=Math.hypot(js.x,js.z),c=Math.atan2(js.y-.6*this.size-this.airY,Math.max(.2,l));s=_t(a/.9,-1,1),r=_t(c/.7,-1,1),Math.abs(a)>.85&&!this.path&&!this.busy&&!this.held&&this.faceFollow!==!1&&this.setHeading(this.yaw.x+a*.85)}else this.glance.t-=t,this.glance.t<=0&&(this.glance.t=K(.8,3.2),Qt(.45)?(this.glance.x=0,this.glance.y=0):(this.glance.x=K(-.8,.8),this.glance.y=K(-.4,.5))),s=this.glance.x,r=this.glance.y,this.speed>.1&&(s*=.3,r=-.15);this.look.x=Ye(this.look.x,s,22,t),this.look.y=Ye(this.look.y,r,22,t),e.lookX=this.look.x,e.lookY=this.look.y}_idle(t,e,n){let s=this.time,r=this.mainAction?.name,o=r==="sleep"?0:1;if(e.sq+=Math.sin(s*2.3+this.seed)*.014*o,e.tz+=Gc(s*.35,this.seed)*.025,e.tx+=Gc(s*.28,this.seed+7)*.015,this.ctx.musicOn?.()&&!this.held&&r!=="sleep"&&r!=="dance"){let c=this.ctx.beat()*Math.PI,h=.5+this.traits.energy*.8;e.tx+=Math.abs(Math.sin(c))*.035*h,e.y+=Math.abs(Math.sin(c))*.008*h,e.sproutZ+=Math.sin(c*.5)*.15*h}if(n.blush+=this.hover*.35,this.mood==="sleepy"&&(e.droop+=.45,e.sq-=.02),this.quirkT=(this.quirkT??K(4,10))-t,this.quirkT<=0){this.quirkT=K(6,16);let c=Hc([["cat",3],["tongue",1.2+this.traits.energy],["o",1],["smile",1]]);this.quirk={mouth:c,until:s+K(1.2,2.6)}}let a=this.mood==="happy"||this.mood==="content"||this.mood==="curious";if(this.quirk&&s<this.quirk.until&&!r&&this.talkTime<=0&&a&&(n.mouth=this.quirk.mouth,this.quirk.mouth==="o"&&(n.mouthOpen=.12)),!this.fidgetsEnabled)return;!this.path&&!this.held&&!this.falling&&!this.mainAction&&this.speed<.05&&(this.fidgetT-=t,this.fidgetT<=0&&(this.fidgetT=K(3,8),this.fidget()))}fidget(){let t=this.traits,e=[["lookAround",1+t.curiosity*2],["tilt",.6+t.curiosity*1.5],["hop",.3+t.energy*1.2],["scratch",.7],["hum",.6+t.chattiness],["wiggle",.5+t.energy*.8],["yawn",t.sleepiness*1.2],["stretch",.35+t.sleepiness*.5],["hiccup",.18],["sneeze",.12],["tapFoot",.3],["blinkSlow",.4]],n=0;for(let[,r]of e)n+=r;let s=Math.random()*n;for(let[r,o]of e)if(s-=o,s<=0)return this.play(r),r;return null}nightcap(t){if(!this._cap&&t<=.01)return;if(!this._cap){let s=new pt(this.color).offsetHSL(.5,-.15,.08),r=new se({color:s,roughness:.9}),o=new se({color:"#fff7ec",roughness:.95}),a=new at,l=new mt(new On(.245,.06,10,32),o);l.rotation.x=Math.PI/2,a.add(l);let c=[],h=a,d=[.26,.18,.11,.05];for(let f=0;f<3;f++){let p=new at;p.position.y=f===0?0:.16;let x=new mt(new Mn(d[f+1],d[f],.17,18,1,!0),f===1?o:r);x.position.y=.085,x.material.side=ke,p.add(x);let m=new mt(new dn(d[f+1],14,10),f===1?o:r);m.position.y=.17,p.add(m),h.add(p),c.push(p),h=p}let u=new mt(new dn(.055,12,10),o);u.position.y=.18,h.add(u),a.traverse(f=>f.isMesh&&(f.castShadow=!0)),a.position.set(.02,cs.height-.17,-.02),a.rotation.z=-.16,a.rotation.x=-.08,this.bodyPivot.add(a),this._cap=a,this._capSegs=c,this._capK=0}this._capK=t;let e=Math.max(.001,t);this._cap.scale.setScalar(e),this._cap.visible=t>.01;let n=.62+this.sproutZ.x*.6+Math.sin(this.time*1.3)*.04;this._capSegs.forEach((s,r)=>{r>0&&(s.rotation.z=-n*(.45+r*.4),s.rotation.x=this.sproutX.x*.3)}),this.topPivot&&(this.topPivot.visible=t<.5)}noseBubble(t){if(!this._bubble){xd||(xd=new se({color:"#d6f1ff",transparent:!0,opacity:.5,roughness:.05,envMapIntensity:1.4,depthWrite:!1}),Yp=new dn(1,20,14));let s=new mt(Yp,xd);s.userData.noAO=!0,s.renderOrder=3,this.bodyPivot.add(s),this._bubble=s}let e=this._bubble,n=.085*t;e.visible=t>.02,e.scale.setScalar(Math.max(.001,n)),e.position.set(.1,.5,ai(.5)-.03+n*.85)}footPos(t=new R){return t.copy(this.root.position).setY(this.root.position.y+.03)}headPos(t=new R,e=0){return this.root.updateWorldMatrix(!0,!1),t.set(0,cs.lift+cs.height+.12+e+this.mover.position.y,0),this.root.localToWorld(t)}facePos(t=new R,e=.55,n=.55){return this.root.updateWorldMatrix(!0,!1),t.set(0,n+this.mover.position.y,e),this.root.localToWorld(t)}_applyPose(t,e,n){let s=this.time;this.mover.position.y=this.airY+e.y+e.seat+this.seat,this.mover.rotation.x=e.rx,this.mover.rotation.z=e.rz,this.mover.rotation.y=e.spin,this.sq.target=e.sq;let r=this.sq.update(t),o=_t(1+r,.55,1.5),a=1/Math.sqrt(o);this.squash.scale.set(a*(1+e.sx),o,a*(1+e.sx*.6)),this.leanX.update(t),this.leanZ.update(t),this.bodyPivot.rotation.set(e.tx+this.leanX.x,e.ry,e.tz+this.leanZ.x,"YXZ");for(let M of this.arms){let I=M.userData.side,y=I>0?e.armL:e.armR;M.rotation.set(-y.f,0,I*(.22+y.z),"XYZ")}for(let M=0;M<2;M++){let I=this.feet[M],y=M===0?e.footL:e.footR,E=I.userData.base;I.position.set(E.x+y.x,E.y+y.y,E.z+y.z),I.rotation.x=y.rx||0}this.topPivot.updateWorldMatrix(!0,!1);let l=js.setFromMatrixPosition(this.topPivot.matrixWorld);this.prevTop||(this.prevTop=l.clone());let c=Wp.copy(l).sub(this.prevTop).divideScalar(Math.max(t,1e-4)),h=c.clone().sub(this.prevTopVel).divideScalar(Math.max(t,1e-4));this.prevTopVel.copy(c),this.prevTop.copy(l);let d=Math.sin(this.yaw.x),u=Math.cos(this.yaw.x),f=_t(h.x*d+h.z*u,-60,60),p=_t(h.x*u-h.z*d,-60,60),x=_t(h.y,-80,80),m=.0045;this.sproutX.impulse(f*m*t*60*.6),this.sproutZ.impulse(-p*m*t*60*.6);let g=this.bodyPivot.rotation;this.sproutX.target=-g.x*.55+e.droop*.9+e.sproutX,this.sproutZ.target=-g.z*.55+e.sproutZ,this.sproutX.update(t),this.sproutZ.update(t),this.topPivot.rotation.set(_t(this.sproutX.x,-1.2,1.4),0,_t(this.sproutZ.x,-1.1,1.1));let b=_t(-x*.004,-.5,.5);for(let M of this.leafPivots)M.pivot.rotation.z=M.pivot.userData.baseZ+b+Math.sin(s*2.2+M.side)*.04-e.droop*.5,M.leaf.rotation.x=this.sproutZ.v*.04*M.side;this.flower&&(this.flower.rotation.y+=t*(.2+Math.abs(this.sproutZ.v)*.5));let w=this.material.userData.uniforms;w.uFlash.value=this.flash*.6,w.uGlow.value=this.hover*.35;let v=Math.max(0,this.mover.position.y),T=1-_t(v*.35,0,.55);this.shadow.scale.set(T*(1+e.sx*.5),1,T),this.shadow.material.opacity=1-_t(v*.45,0,.65),this.shadow.rotation.y=-e.spin,n.spin=s*4,this.face.update(n)}dispose(){this.drop(!0),this.face.texture.dispose(),this.material.dispose(),this.limbMaterial.dispose(),this.shadow.material.dispose();for(let t of this.accessoryMaterials)t.dispose()}};function mb(){return{y:0,rx:0,rz:0,tx:0,tz:0,ry:0,spin:0,sq:0,sx:0,seat:0,droop:0,sproutX:0,sproutZ:0,armL:{f:0,z:0},armR:{f:0,z:0},footL:{x:0,y:0,z:0,rx:0},footR:{x:0,y:0,z:0,rx:0},faceLocked:!1,armsOverride:!1}}function gb(i){i.y=i.rx=i.rz=i.tx=i.tz=i.ry=i.spin=i.sq=i.sx=i.seat=i.droop=0,i.sproutX=i.sproutZ=0,i.armL.f=i.armL.z=i.armR.f=i.armR.z=0,i.footL.x=i.footL.y=i.footL.z=i.footL.rx=0,i.footR.x=i.footR.y=i.footR.z=i.footR.rx=0,i.faceLocked=!1,i.armsOverride=!1}function xb(i){i.traverse(t=>{t.geometry&&!t.geometry.userData?.shared&&t.geometry.dispose?.()})}var fn=(i,t={})=>new se({color:i,roughness:t.roughness??.6,metalness:t.metalness??0,emissive:t.emissive??"#000000",emissiveIntensity:t.emissiveIntensity??1,side:t.side??Bn});function rn(i,t,e,n){let s=new mt(i,t);return e&&s.position.set(...e),n&&s.rotation.set(...n),s.castShadow=!0,s}function Qs(i,t,e,n,s=.012,r=24){let o=[];for(let l=0;l<=6;l++){let c=i+(t-i)*l/6;o.push(new Y(ai(c)+s,c))}return new xi(o,r,e,n-e)}function $p(i,t){let e=i;e._gear&&(e.bodyPivot.remove(e._gear),e._gear=null);let n=new at;n.name=`gear:${t}`;let s=[],r=a=>(s.push(a),a),o=r(fn("#b9c0c6",{roughness:.35,metalness:.6}));if(t==="ideas"){for(let a of e.accessoryMaterials||[])a.emissive=new pt("#b6f07a"),a.emissiveIntensity=.55;e._glowSprout=!0}else if(t==="builder"){let a=r(fn("#5b4a42",{roughness:.8}));n.add(rn(Qs(.78,.84,0,Math.PI*2,.008),a));let l=r(fn("#9fd6e8",{roughness:.1,metalness:.2,emissive:"#3a6f80",emissiveIntensity:.25})),c=r(fn("#d08a4c",{roughness:.45,metalness:.3}));for(let d of[-1,1]){let u=d*.13,f=.82,p=Math.sqrt(Math.max(0,ai(f)**2-u*u))+.03,x=new at;x.position.set(u,f,p-.02),x.lookAt(u*3,f+.25,p*3),x.add(rn(new Mn(.075,.08,.06,18),c,[0,0,0],[Math.PI/2,0,0])),x.add(rn(new ni(.062,18),l,[0,0,.032])),n.add(x)}let h=new at;h.position.set(.47,.22,.12),h.rotation.set(0,.5,-.25),h.add(rn(new Ie(.035,.24,.02),o,[0,0,0])),h.add(rn(new On(.035,.014,6,12,Math.PI*1.4),o,[0,.14,0],[0,0,-.6])),n.add(h)}else if(t==="researcher"){let a=r(fn("#6c5a4e",{roughness:.4,metalness:.2})),l=r(new se({color:"#eef8ff",roughness:.05,transparent:!0,opacity:.18}));for(let h of[-1,1]){let d=h*.158,u=.565,f=Math.sqrt(Math.max(0,ai(u)**2-d*d))+.035,p=new at;p.position.set(d,u,f),p.rotation.y=Math.atan2(d,f)*.9,p.add(rn(new On(.082,.011,6,22),a));let x=new mt(new ni(.075,18),l);x.position.z=.004,p.add(x),n.add(p)}n.add(rn(new Mn(.008,.008,.09,5),a,[0,.57,ai(.57)+.035],[0,0,Math.PI/2]));let c=new at;c.position.set(-.5,.3,.02),c.rotation.set(.1,0,.15),c.add(rn(new Ie(.06,.26,.2),r(fn("#7f9cc9",{roughness:.6})))),c.add(rn(new Ie(.05,.24,.21),r(fn("#fff6e4",{roughness:.9})),[.008,0,0])),n.add(c),e._gearBook=c}else if(t==="postmaster"){let a=r(fn("#b07a52",{roughness:.7})),l=new mt(Qs(.5,.56,0,Math.PI*2,.01,28),a);l.rotation.z=.55,l.position.y=.06,n.add(l);let c=new at;c.position.set(.42,.2,.22),c.rotation.y=.9,c.add(rn(new Ie(.26,.2,.09),a)),c.add(rn(new Ie(.27,.1,.095),r(fn("#94603f",{roughness:.7})),[0,.06,.003])),c.add(rn(new Ie(.04,.04,.02),r(fn("#e3c27a",{metalness:.5,roughness:.3})),[0,.02,.05])),c.add(rn(new Ie(.16,.1,.01),r(fn("#fff3e0",{roughness:.9})),[-.03,.12,.01],[0,0,.15])),n.add(c)}else if(t==="chores"){let a=r(fn("#f3eee4",{roughness:.95,side:ke})),l=new mt(Qs(.06,.46,-.85,.85,.014,20),a);n.add(l);let c=r(fn("#e9a7a0",{roughness:.9}));n.add(rn(Qs(.42,.47,0,Math.PI*2,.016),c));let h=new mt(new Dn(.16,.1),r(fn("#e9a7a0",{roughness:.9,side:ke})));h.position.set(.06,.2,ai(.2)+.03),n.add(h)}else if(t==="generalist"){let a=r(fn("#e88f73",{roughness:.9,side:ke}));n.add(rn(Qs(.17,.25,0,Math.PI*2,.015),a));let l=new un;l.moveTo(-.13,0),l.lineTo(.13,0),l.lineTo(0,-.15),l.closePath();let c=new mt(new os(l),a);c.position.set(0,.24,ai(.2)+.025),c.rotation.x=-.12,n.add(c);let h=r(fn("#fff3e6"));for(let[d,u]of[[-.04,.19],[.04,.17]])n.add(rn(new dn(.012,6,5),h,[d,u,ai(.2)+.035]))}else if(t==="specialist"){let a=r(fn("#c75f52",{roughness:.95})),l=r(fn("#efe0c8",{roughness:.95}));n.add(rn(Qs(.2,.31,0,Math.PI*2,.03),a)),n.add(rn(Qs(.24,.27,0,Math.PI*2,.034),l));let c=new at;c.position.set(.2,.22,ai(.25)+.02),c.rotation.z=.12,c.add(rn(new Ie(.12,.34,.04),a,[0,-.15,0]));for(let h=0;h<2;h++)c.add(rn(new Ie(.122,.03,.042),l,[0,-.1-h*.12,0]));n.add(c),e._scarfTail=c}return e.bodyPivot.add(n),e._gear=n,e._gearMats=s,e.role=t,n}var to={color:"#7f8fb0",size:1.22,accessory:"leaf",traits:{energy:.35,curiosity:.55,sociability:.45,sleepiness:.4,clumsiness:.08,chattiness:.3},faceShape:{eyeDX:.15,eyeSize:.86,eyeY:.55},voice:.72};function Zp(i,t){if(i._glowSprout){let e=.45+Math.sin(t*1.8+i.seed)*.15;for(let n of i.accessoryMaterials||[])n.emissiveIntensity=e}i._scarfTail&&(i._scarfTail.rotation.x=Math.sin(t*2.1)*.08+i.leanX.x*.9)}function Jp(i){if(i._xray)return i._xray;let t=new pt(i.color).offsetHSL(0,.12,.06),e=new In({color:t,transparent:!0,opacity:.42,depthWrite:!1,depthTest:!0,depthFunc:Mr}),n=new mt(i.body.geometry,e);n.renderOrder=60,n.userData.noAO=!0,n.raycast=()=>{},i.body.add(n);let s=i.feet.map(r=>{let o=new mt(r.geometry,e);return o.renderOrder=60,o.raycast=()=>{},r.add(o),o});return i._xray={mat:e,ghost:n,feet:s},i._xray}function Kp(i,t){i._xray&&(i._xray.mat.opacity=.42*t)}var jp={greet:["hi!!","oh hi","hiii","hey friend","hello hello","*waves*"],chat:["did you see the clouds?","tea later?","i had the best nap","the plant grew a new leaf","i have an idea\u2026","what if\u2026 but smaller?","the mist moved today","my sprout is extra perky","shh, i\u2019m thinking","i like the new shelf","we should name the bird","look, a dust bunny","the stairs creak on step four","i found a nice pebble"],reply:["hehe","ooh!","really?","same!!","yesss","mhm","no way","tell me more","aww","heh, true"],build:["almost\u2026","hmm hmm","one more bit\u2026","tiny progress","clack clack","where did the screw go","ooh that fits"],research:["interesting\u2026","hm, footnotes","aha","writing that down","one more page"],visitWork:["ooh, what\u2019s that?","looking good!","can i hold it?","that bit is clever","nice nice nice","is it ticking?"],sleepy:["*yawn*","so sleepy\u2026","nap time\u2026","five more minutes\u2026"],wake:["huh? oh hi","mm\u2026 morning?","*stretch*"],petted:["hehe that tickles","mmmm","more pls","\u2665","so nice\u2026"],held:["wheee!","whoa!","i can see everything!","up we go!"],dropped:["oof","i\u2019m okay!","again!!"],tripped:["oops","i meant to do that","ow\u2026 i\u2019m fine"],bump:["oops, sorry!","eep!","hehe bonk"],bedtime:["nighty night","okay\u2026 sleepy time","sweet dreams"],morning:["good morning!","rise and shine","is it morning?"],quiet:["all quiet. we\u2019ve got it.","nothing needs you. go do your thing.","we\u2019re on it. go do your thing."],welcome:["you\u2019re back!","oh hi!!","there you are","hello hello"],keep:["yay, pinned!","on the board!","ooh, keeper","saving that"],toss:["into the bin!","fair enough!","byeee","next!"],greenlit:["on it!","let\u2019s build it!","ooh, yes","to the bench!"],heard:["got it","okay!","noted, friend","mhm, on it"]},vn=i=>ge(jp[i]||jp.reply);var ch={fun:["fun","ideas"],social:["social"],calm:["calm","rest"],care:["care","chores"]};function vb(i,t=new Date().getMonth()){let e=t>=10||t<=1,n=22+(.5-i.sleepiness)*1.6-(e?.6:0),s=6.8+i.sleepiness*1.4+(e?.4:0);return{start:n,end:s}}function Qp(i,t){let{start:e,end:n}=vb(i);return t>=e||t<n}var hh=class{constructor(t,e,n){this.c=t,this.crew=e,this.world=e.world,this.m=n;let s=t.traits;this.needs={fun:K(.4,.9),social:K(.4,.9),calm:K(.5,.9),care:K(.4,.9)},this.rest=K(.6,.95),this.decay={fun:.006+s.energy*.005,social:.003+s.sociability*.008,calm:.003,care:.004},this.likes=n.likes||{},this.tasks=[],this.task=null,this.station=null,this.doing="looking around",this.idleT=K(.5,2.5),this.lastGreet=new Map,this.paused=0,this.attending=0,this.history=[],this.workT=0,this.climbing=!1}get level(){return this.c.level}get nav(){return this.world.navs[this.c.level]}run(t,e){this.cancel(),this.tasks=t.filter(Boolean);let n=this.c;if(n.seat>.01&&this.tasks[0]?.type!=="hop"){let s=this.nav.nearestFree(n.position.x+Math.sin(n.heading)*.6,n.position.z+Math.cos(n.heading)*.6);this.tasks.unshift({type:"hop",to:s,seat:0})}e&&(this.doing=e)}push(...t){this.tasks.push(...t.filter(Boolean))}cancel(){let t=this.c;this.task?.cleanup&&this.task.cleanup();for(let e of this.tasks)e.cleanup?.();this.tasks=[],this.task=null,this.releaseStation(),t.stopWalking(),this.loopAction&&(t.stop(this.loopAction,.25),this.loopAction=null),this.climbing&&this._finishClimbEarly()}releaseStation(){let t=this.station;t&&(t.reservedBy===this.c.id&&(t.reservedBy=null),t.onEnd?.(this.c),this.station=null)}interrupt(){this.cancel();let t=this.c;if(t.seat>.01){t.seat=0;let e=this.nav.nearestFree(t.position.x,t.position.z);t.position.x=e.x,t.position.z=e.z}t.stopSlot("main",.15),t.drop(!0)}route(t,e={}){let n=[],s=this.c.level;if(s!==t.level){let r=this.crew.portalChain(s,t.level);if(!r)return null;for(let o of r){let a=o.up?o.portal.a:o.portal.b;n.push({type:"walk",to:{x:a.x,z:a.z},speed:e.speed}),n.push({type:"climb",portal:o.portal,up:o.up}),s=o.up?o.portal.b.level:o.portal.a.level}}return n.push({type:"walk",to:{x:t.x,z:t.z},face:e.face??null,speed:e.speed,gait:e.gait}),n}_startTask(t){let e=this.c;switch(t.started=!0,t.elapsed=0,t.type){case"walk":{let n=this.nav;if(!n){t.done=t.failed=!0;return}let s=n.findPath({x:e.position.x,z:e.position.z},t.to);if(!s){t.done=t.failed=!0;return}e.walkPath(s,{speed:t.speed??1,gait:t.gait,face:t.face??null,onArrive:()=>t.done=!0});break}case"goto":e.walkPath([t.to],{speed:t.speed??.8,onArrive:()=>t.done=!0,face:t.face??null});break;case"climb":this._startClimb(t);break;case"face":e.setHeading(t.yaw);break;case"faceCam":e.faceToward(this.world.engine.camera.position);break;case"act":{let n=e.play(t.name,{...t.opts||{},onDone:()=>t.done=!0});n?n.dur||(this.loopAction=t.name,t.loop=!0):t.done=!0;break}case"hop":e.play("hopTo",{to:t.to,seat:t.seat??0,onDone:()=>t.done=!0});break;case"say":e.say(t.text);break;case"call":t.fn?.(e,this),t.done=!0;break;case"hold":e.hold(typeof t.item=="function"?t.item():this.crew.makeItem(t.item),t.mode||"front"),t.done=!0;break;case"drop":e.drop(!0),t.done=!0;break;case"reserve":this.station=t.station,t.station.reservedBy=e.id,t.station.onStart?.(e),t.done=!0;break;case"release":this.releaseStation(),t.done=!0;break;default:t.done=!0}}_updateTask(t,e){let n=this.c;switch(t.elapsed+=e,t.type){case"wait":(t.elapsed>=t.t||t.until?.(n,this))&&(t.done=!0),t.look&&n.lookAt(t.look,.5),t.every?.(n,t.elapsed,e,this);break;case"face":case"faceCam":t.elapsed>(t.t??.35)&&(t.done=!0);break;case"say":n.talkTime<=0&&t.elapsed>.3&&(t.done=!0);break;case"climb":this._updateClimb(t,e);break;case"act":if(t.loop){if(t.every?.(n,t.elapsed,e,this),t.elapsed>.6&&!n.isPlaying(t.name)){this.loopAction=null,t.done=!0;break}(t.elapsed>=t.t||t.until?.(n,this))&&(n.stop(t.name,.3),this.loopAction=null,t.done=!0)}else t.elapsed>12&&(t.done=!0);break;case"walk":case"goto":t.elapsed>40&&(n.stopWalking(),t.done=t.failed=!0);break}}_startClimb(t){let e=this.c,n=t.up?t.portal.path:[...t.portal.path].reverse();t.pts=n,t.i=0,t.toLevel=t.up?t.portal.b.level:t.portal.a.level,t.y=e.position.y,this.climbing=!0,this._climb=t,e.stopWalking()}_updateClimb(t,e){let n=this.c,s=t.pts[t.i];if(!s){this._endClimb(t);return}let r=s.x-n.position.x,o=s.z-n.position.z,a=Math.hypot(r,o),l=s.y-t.y;if(a>.06){n.walking||(t.segStart={h:a,y:t.y},n.walkPath([{x:s.x,z:s.z}],{speed:.8,gait:"walk"}));let c=t.segStart||{h:a,y:t.y},h=_t(1-a/Math.max(.001,c.h));t.y=c.y+(s.y-c.y)*h}else if(Math.abs(l)>.02){n.stopWalking(),n.setHeading(Math.PI);let c=Math.sign(l)*Math.min(Math.abs(l),e*1.15);t.y+=c,t.rung=(t.rung||0)+Math.abs(c),t.rung>.32&&(t.rung=0,n.sq.impulse(.9),this.crew.sfx("step",n,{soft:!0}))}else t.y=s.y,t.segStart=null,n.stopWalking(),t.i++,t.i>=Math.ceil(t.pts.length/2)&&this.crew.setLevel(n,t.toLevel);n.position.y=t.y}_endClimb(t){this.climbing=!1,this._climb=null,this.crew.setLevel(this.c,t.toLevel),t.done=!0}_finishClimbEarly(){let t=this._climb;if(this.climbing=!1,this._climb=null,!t)return;let e=this.c,n=t.i>=t.pts.length/2?t.pts[t.pts.length-1]:t.pts[0],s=t.i>=t.pts.length/2?t.toLevel:t.up?t.portal.a.level:t.portal.b.level;e.position.set(n.x,n.y,n.z),this.crew.setLevel(e,s)}update(t){let e=this.c,n=this.crew.isNightFor(e),s=this.needs;for(let o in s)s[o]=_t(s[o]-this.decay[o]*t);if(this.station)for(let o of this.station.tags)for(let a in ch)ch[a].includes(o)&&(s[a]=_t(s[a]+t*.04));let r=e.mainAction?.name==="sleep";if(this.rest=_t(this.rest+t*(r?.02:-.0016*(.6+e.traits.sleepiness))),this._updateMood(n),!this.climbing&&!e.held){let o=this.world.groundY(e.level,e.position.x,e.position.z);e.position.y=Ye(e.position.y,o,14,t)}if(!(e.held||e.falling)){if(this.paused>0){this.paused-=t;return}if(this.attending>0){this.attending-=t;let o=this.world.engine.camera.position;e.lookAt(o,.4),!e.mainAction&&!e.walking&&e.faceToward(o);return}if(this.task){let o=this.task;if(o.started||this._startTask(o),this.task!==o||(o.done||this._updateTask(o,t),this.task!==o))return;if(o.done){if(o.failed&&o.abortOnFail!==!1&&(o.type==="walk"||o.type==="goto")){for(let a of this.tasks)a.cleanup?.();this.tasks=[],this.releaseStation()}this.task=null}return}if(this.tasks.length){this.task=this.tasks.shift();return}e.mainAction||e.walking||(this.doing=this.m.present?"waiting to show you something":"hanging out",this.idleT-=t,!(this.idleT>0)&&(this.idleT=K(.6,2.2),this.decide()))}}_updateMood(t){let e=this.c;if(e.moodHold>0)return;let n=this.needs,s="happy",r=e.mainAction?.name;r==="type"||r==="tinker"||r==="stamp"||r==="write"?s="focused":this.rest<.22||t&&!this.m.nightOwl?s="sleepy":n.fun>.75&&n.social>.6?s="happy":n.social<.2?s="curious":n.calm>.8&&(s="content"),e.mood!==s&&(e.mood=s)}decide(){let t=this.c,e=this.crew,n=e.isNightFor(t),s=this.m.nightOwl;if(this.m.present&&!n){let c=e.rugSpotFor(t);if(c)return this.goPresent(c)}if(n&&!(s&&this.m.job)){let c=e.bedFor(t);return c?this.doStation(c,{duration:K(80,160)}):this.floorNap()}if(this.m.job&&!this.m.present){let c=e.jobStation(t),h=this.workT>K(60,140)&&Qt(.6);if(c&&!h)return this.doStation(c,{duration:K(30,70),job:!0});h&&(this.workT=0)}let r=[];for(let c of e.stations()){if(c.reservedBy&&c.reservedBy!==t.id)continue;if(c.job||c.activity==="sleep"){c.activity==="sleep"&&this.rest<.25&&r.push([{kind:"station",s:c},1.6]);continue}if(!e.reachable(t,c))continue;let h=.15;for(let u of c.tags){for(let f in ch)ch[f].includes(u)&&(h+=(1-this.needs[f])*1.1);h+=(this.likes[u]||0)*.7}n&&(h*=.4),c.activity==="tea"&&(h+=e.teaParty(c)*.4-.4);let d=Math.hypot(c.pos.x-t.position.x,c.pos.z-t.position.z);h-=d*.035+(c.level!==t.level?.6:0),this.history.includes(c.id)&&(h-=.7),this.history.includes(c.activity)&&(h-=.4),h*=K(.7,1.3),r.push([{kind:"station",s:c},Math.max(.01,h)])}r.push([{kind:"wander"},.45+t.traits.curiosity*.6]);let o=e.critters.filter(c=>c!==t&&c.level===t.level&&!c.held&&c.brain&&!c.brain.station&&!c.brain.chatting&&!c.brain.climbing);o.length&&!n&&r.push([{kind:"chat",with:ge(o)},(1-this.needs.social)*2+t.traits.sociability*.6]),o.length&&!n&&t.traits.energy>.55&&r.push([{kind:"play",with:ge(o)},t.traits.energy*.45+(1-this.needs.fun)*.5]);let a=e.critters.filter(c=>c!==t&&c.brain?.station?.job&&!c.held);a.length&&!n&&r.push([{kind:"visit",who:ge(a)},.35+t.traits.sociability*.6+(1-this.needs.social)*.6]),this.rest<.3&&r.push([{kind:"nap"},1.2]);let l=Hc(r);l&&(l.kind==="station"?this.doStation(l.s):l.kind==="wander"?this.wander():l.kind==="chat"?e.startChat(t,l.with):l.kind==="play"?e.startPlay(t,l.with):l.kind==="visit"?this.visit(l.who):l.kind==="nap"&&this.floorNap())}remember(t,e){for(this.history.push(t),e&&this.history.push(e);this.history.length>6;)this.history.shift()}wander(){let t=this.c,e=this.nav;if(!e)return;let n;if(Qt(.18)){let r=ge(this.crew.levelsReachable(t.level)),o=this.world.navs[r];if(o){let a=o.randomFree();n={level:r,...a}}}n||(n={level:t.level,...e.randomFree(Math.random,Qt(.65)?t.position:null,3.5)});let s=this.route(n,{gait:Qt(.2)&&t.traits.energy>.6?"hop":void 0});s&&(Qt(.6)&&s.push({type:"act",name:ge(["lookAround","tilt","hum","wiggle","scratch","tapFoot","stretch"])}),Qt(.3)&&s.push({type:"wait",t:K(1,3)}),this.run(s,ge(["wandering around","pottering about","having a little walk"])))}floorNap(){let t=this.c,e=[{type:"act",name:"yawn"},{type:"act",name:"sit",t:.5},{type:"act",name:"sleep",t:K(30,70),until:()=>!this.crew.isNightFor(t)&&this.rest>.95},{type:"act",name:"wake"}];this.run(e,"having a little nap")}visit(t){let e=this.c,n=t.brain.station;if(!n)return;let s=Math.atan2(e.position.x-n.pos.x,e.position.z-n.pos.z),r={level:n.level,x:n.pos.x+Math.sin(s)*.9,z:n.pos.z+Math.cos(s)*.9},o=this.route(r);o&&(o.push({type:"call",fn:()=>e.faceToward(t.position)},{type:"wait",t:.5,look:t},{type:"act",name:ge(["admire","tilt","nod"])},{type:"call",fn:()=>Qt(.6)&&e.say(vn("visitWork"))},{type:"wait",t:K(2,4),look:t},{type:"call",fn:()=>Qt(.5)&&t.play(ge(["nod","giggle","wave"]))},{type:"call",fn:()=>this.needs.social=_t(this.needs.social+.3)}),this.run(o,`peeking at ${t.name}'s work`))}goPresent(t){let e=this.c,n=this.route({level:0,x:t.x,z:t.z});if(!n)return;t.reservedBy=e.id;let s=[...n,{type:"faceCam"},{type:"call",fn:()=>this.crew.onReachedRug(e)},{type:"wait",t:K(14,26),until:()=>!this.m.present,every:(r,o,a)=>{Math.random()<a*.25&&r.faceToward(this.world.engine.camera.position),Math.random()<a*.06&&r.play(ge(["tapFoot","wiggle","tilt","hum","lookAround"]))}}];for(let r of s)r.cleanup=()=>{};this.run(s,"waiting on the rug to show you something")}doStation(t,e={}){let n=this.c,s=this.crew;this.remember(t.id,t.activity);let r=(t.seat||0)>.05,o=t.approach;!o&&r&&(o={x:t.pos.x+Math.sin(t.face)*.62,z:t.pos.z+Math.cos(t.face)*.62}),o=o||t.pos;let a=this.route({level:t.level,x:o.x,z:o.z},{face:r?null:t.face});if(!a)return;let l=[{type:"reserve",station:t},...a];r&&l.push({type:"hop",to:t.pos,seat:t.seat}),l.push({type:"face",yaw:t.face,t:.3});let c=e.duration,h=e.job,d=(u,f)=>({type:"act",name:u,t:c??K(10,20),every:(p,x,m,g)=>{h&&(g.workT+=m,s.onWorkTick(p,t,m)),f?.(p,x,m,g)},until:()=>h?!this.m.job||!!this.m.present||s.isNightFor(n)&&!this.m.nightOwl:!1});switch(t.activity){case"sleep":l.push({type:"call",fn:()=>Qt(.35)&&n.say(vn("sleepy"))}),l.push({type:"act",name:"sit",t:.6}),l.push({type:"act",name:"sleep",t:c??K(25,45),until:()=>!s.isNightFor(n)&&this.rest>.95&&Math.random()<.02}),l.push({type:"act",name:"wake"});break;case"read":t.seat&&l.push({type:"act",name:"sit",t:.4}),l.push({type:"act",name:"read",t:c??K(12,24)});break;case"browse":l.push({type:"act",name:"reach"}),l.push({type:"act",name:"read",t:c??K(6,12)});break;case"gaze":l.push({type:"act",name:"gaze",t:c??K(7,14)});break;case"water":l.push({type:"act",name:"water",t:c??K(3.5,5)}),l.push({type:"call",fn:()=>s.wigglePlantNear(n)}),l.push({type:"act",name:"admire"});break;case"pin":case"ponder":l.push({type:"act",name:"think"}),l.push({type:"act",name:"write",t:c??K(4,8)}),Qt(.5)&&l.push({type:"act",name:"tilt"});break;case"build":l.push(d("tinker",(u,f,p)=>Qt(p*.04)&&u.say(vn("build")))),Qt(.25)&&l.push({type:"act",name:"admire"});break;case"research":l.push(d("write",(u,f,p)=>Qt(p*.03)&&u.say(vn("research")))),Qt(.4)&&l.push({type:"act",name:"think"});break;case"chalk":l.push(d("write")),l.push({type:"act",name:"admire"});break;case"post":l.push(d("stamp"));break;case"admire":l.push({type:"act",name:"admire"}),l.push({type:"act",name:"gaze",t:K(4,8)});break;case"tinker":case"cook":l.push({type:"act",name:"tinker",t:c??K(6,12)}),t.activity==="cook"&&l.push({type:"call",fn:()=>s.fx("steam",n)});break;case"tea":l.push({type:"act",name:"sit",t:c??K(14,26),every:(u,f,p)=>s.teaTalk(u,p)});break;case"tidy":case"rummage":l.push({type:"act",name:"reach"}),l.push({type:"act",name:t.activity==="tidy"?"admire":"think"});break;case"sit":l.push({type:"act",name:"sit",t:c??K(8,16)});break;default:l.push({type:"wait",t:3})}l.push({type:"release"}),r&&l.push({type:"hop",to:o,seat:0}),this.run(l,e.label||s.describeStation(n,t))}statusLine(){return this.crew.statusLine(this.c)}};var yb=["#e8746a","#7aa6dc","#f2c14e","#8dc68a","#c39be0","#f29bb5"],_b=["#ffe68a","#ffc2d6","#bfe8ff","#c9f2c0","#ffd6a8"];function vd(i,t={}){switch(i){case"book":return tm(t.color);case"wateringCan":return Sb();case"mug":return wb();case"note":return Tb(t.color);case"letter":return Eb();case"parcel":return Rb();default:return tm()}}function tm(i=ge(yb)){return bb(Mb(i),[0,-.13,.03])}function bb(i,t){return i.userData.holdOffset=t,i}function Mb(i){let t=Vn({}),e=j(i,{roughness:.6}),n=j(ma.paper,{roughness:.9}),s=Vn({rot:[0,0,.18]},k(ht(.2,.02,.27,.008),e,{pos:[-.1,0,0]}),k(ht(.185,.03,.25,.008),n,{pos:[-.1,.018,0]})),r=Vn({rot:[0,0,-.18]},k(ht(.2,.02,.27,.008),e,{pos:[.1,0,0]}),k(ht(.185,.03,.25,.008),n,{pos:[.1,.018,0]})),o=new at,a=k(ht(.18,.006,.24,.002),n,{pos:[.09,0,0]});o.add(a),o.position.y=.035,o.visible=!1,t.add(s,r,o),t.rotation.x=-1.05,t.position.y=.02;let l=-1;return t.userData.flip=()=>{l=0,o.visible=!0},t.onBeforeRender=()=>{},t.userData.update=c=>{l<0||(l+=c*2.2,o.rotation.z=Math.PI*Math.min(1,l)*1,l>=1&&(l=-1,o.visible=!1))},eo(t)}function Sb(){let i=j("#7cc4c9",{roughness:.4,metalness:.1}),t=Vn({},k(Gn(.12,.17,.04),i,{pos:[0,0,0]}),k(ue(.022,.03,.26),i,{pos:[0,.07,.15],rot:[.95,0,0]}),k(ue(.045,.03,.03),i,{pos:[0,.16,.26],rot:[.95,0,0]}),k(En(.075,.016,8,20,Math.PI),i,{pos:[0,.09,-.02],rot:[0,Math.PI/2,0]}));return t.position.set(0,-.02,.02),eo(t)}function wb(){let i=j("#ffd0b5",{roughness:.5});return eo(Vn({},k(Gn(.06,.11,.015),i),k(En(.035,.012,8,16),i,{pos:[.065,0,0],rot:[0,0,0]}),k(ue(.05,.05,.01),j("#7b4a33",{roughness:.3}),{pos:[0,.05,0]})))}function Tb(i=ge(_b)){let t=Vn({},k(ht(.22,.22,.012,.004),j(i,{roughness:.85})));return t.rotation.x=-.2,eo(t)}function Eb(){let i=j("#fff3e0",{roughness:.85}),t=Vn({},k(ht(.28,.18,.02,.006),i),k(ze(.025,10,8),j("#e6455e",{roughness:.5}),{pos:[0,0,.012],scale:[1,1,.3]}));return t.rotation.x=-.25,eo(t)}function Rb(){let i=Vn({},k(ht(.3,.24,.26,.03),j("#d9a876",{roughness:.85})),k(ht(.31,.04,.27,.01),j("#ff8fa8",{roughness:.6}),{pos:[0,0,0]}),k(ht(.04,.25,.27,.01),j("#ff8fa8",{roughness:.6}),{pos:[0,0,0]}));return i.position.y=.1,eo(i)}function eo(i){let t=new at;return t.add(i),t.userData.update=i.userData.update,t.userData.flip=i.userData.flip,t}var yd=class{constructor(){this._handlers=new Map}on(t,e){return this._handlers.has(t)||this._handlers.set(t,new Set),this._handlers.get(t).add(e),()=>this.off(t,e)}once(t,e){let n=this.on(t,(...s)=>{n(),e(...s)});return n}off(t,e){this._handlers.get(t)?.delete(e)}emit(t,...e){let n=this._handlers.get(t);if(n)for(let s of[...n])try{s(...e)}catch(r){console.error(`[events] handler for "${t}" failed`,r)}}},kn=new yd;var Ab=[0,2,4,7,9],li=i=>440*Math.pow(2,(i-69)/12),_d=class{constructor(){this.ctx=null,this.sfxOn=!0,this.musicOn=!0,this.volume=.8,this.tempo=92,this._beatOrigin=performance.now()/1e3,this._lastStep=0,this.listeners=[],this.ambience="day",this._ambT=0,this.isVisible=()=>!0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.volume;let n=e.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=3,this.master.connect(n).connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.sfxOn?1:0,this.sfxBus.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicOn?.55:0,this.musicBus.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(2.4,2.8),this.reverbSend=e.createGain(),this.reverbSend.gain.value=.35,this.reverbSend.connect(this.reverb).connect(this.master),this._noise=this._noiseBuffer(),this._startMusic(),this.listeners.forEach(s=>s())}onUnlock(t){this.listeners.push(t)}setSfx(t){this.sfxOn=t,this.sfxBus&&this.sfxBus.gain.setTargetAtTime(t?1:0,this.ctx.currentTime,.05)}setMusic(t){this.musicOn=t,this.musicBus&&this.musicBus.gain.setTargetAtTime(t?.55:0,this.ctx.currentTime,.3)}beat(){return this.ctx&&this.musicOn?(this.ctx.currentTime-this._musicT0)*(this.tempo/60):(performance.now()/1e3-this._beatOrigin)*(this.tempo/60)}_impulse(t,e){let n=this.ctx,s=Math.floor(n.sampleRate*t),r=n.createBuffer(2,s,n.sampleRate);for(let o=0;o<2;o++){let a=r.getChannelData(o);for(let l=0;l<s;l++)a[l]=(Math.random()*2-1)*Math.pow(1-l/s,e)}return r}_noiseBuffer(){let t=this.ctx,e=t.createBuffer(1,t.sampleRate*1.5,t.sampleRate),n=e.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;return e}_env(t,e,n,s,r,o=0){let a=t.gain;a.cancelScheduledValues(e),a.setValueAtTime(1e-4,e),a.exponentialRampToValueAtTime(Math.max(2e-4,s),e+n),a.exponentialRampToValueAtTime(Math.max(1e-4,o||1e-4),e+n+r)}tone({type:t="sine",f0:e=440,f1:n=null,dur:s=.15,gain:r=.2,attack:o=.005,t:a=0,vibrato:l=0,vibratoF:c=7,filter:h=null,reverb:d=.15,dest:u=null,curve:f="exp"}){let p=this.ctx,x=p.currentTime+a,m=p.createOscillator();m.type=t,m.frequency.setValueAtTime(e,x),n&&(f==="exp"?m.frequency.exponentialRampToValueAtTime(Math.max(20,n),x+s):m.frequency.linearRampToValueAtTime(n,x+s));let g=m;if(l){let w=p.createOscillator(),v=p.createGain();w.frequency.value=c,v.gain.value=l,w.connect(v).connect(m.frequency),w.start(x),w.stop(x+s+.1)}if(h){let w=p.createBiquadFilter();w.type=h.type||"lowpass",w.frequency.value=h.f,w.Q.value=h.q??.8,g.connect(w),g=w}let b=p.createGain();if(this._env(b,x,o,r,s),g.connect(b),b.connect(u||this.sfxBus),d){let w=p.createGain();w.gain.value=d,b.connect(w).connect(this.reverbSend)}m.start(x),m.stop(x+o+s+.05)}noise({dur:t=.1,gain:e=.1,t:n=0,filter:s={type:"bandpass",f:2e3,q:1},f1:r=null,attack:o=.003,reverb:a=.05}){let l=this.ctx,c=l.currentTime+n,h=l.createBufferSource();h.buffer=this._noise;let d=l.createBiquadFilter();d.type=s.type,d.frequency.setValueAtTime(s.f,c),r&&d.frequency.exponentialRampToValueAtTime(r,c+t),d.Q.value=s.q??1;let u=l.createGain();if(this._env(u,c,o,e,t),h.connect(d).connect(u).connect(this.sfxBus),a){let f=l.createGain();f.gain.value=a,u.connect(f).connect(this.reverbSend)}h.start(c,Math.random()*.5),h.stop(c+t+o+.05)}syllable(t,e,{vowel:n=.5,loud:s=1,len:r=.07}={}){let o=t*(.85+n*.5)*K(.95,1.05);this.tone({type:"triangle",f0:o*1.06,f1:o*.94,dur:r,gain:.075*s,attack:.006,t:e,filter:{type:"lowpass",f:1800+n*1600,q:2},reverb:.08}),this.tone({type:"sine",f0:o*2,f1:o*1.9,dur:r*.8,gain:.025*s,t:e,reverb:0})}play(t,e={}){if(!this.ctx||!this.sfxOn)return;let n=e.critter;if(n&&!this.isVisible(n))return;let s=n?n.voice:e.pitch??1,r=a=>this.tone(a),o=a=>this.noise(a);switch(t){case"boop":r({f0:520*s,f1:860*s,dur:.12,gain:.22,vibrato:0}),r({type:"triangle",f0:1040*s,f1:1500*s,dur:.08,gain:.05});break;case"hop":r({f0:300*s,f1:640*s,dur:.14,gain:.12});break;case"land":r({f0:190,f1:90,dur:.12,gain:.12*_t(e.strength??1,.3,1.5),reverb:.02}),o({dur:.06,gain:.04,filter:{type:"lowpass",f:500}});break;case"step":{let a=performance.now();if(!e.stomp&&a-this._lastStep<140)return;this._lastStep=a,o({dur:e.stomp?.08:.025,gain:e.stomp?.08:e.soft?.009:.013,filter:{type:"bandpass",f:e.stomp?600:K(2200,3200),q:1.5},reverb:0});break}case"giggle":for(let a=0;a<6;a++)this.syllable(380*s*(1+a%2*.12+a*.03),a*.085,{vowel:.9,len:.06});break;case"dizzy":r({f0:900*s,f1:300*s,dur:.9,gain:.08,vibrato:40,vibratoF:9});break;case"grumble":r({type:"sawtooth",f0:170*s,f1:130*s,dur:.5,gain:.07,vibrato:12,vibratoF:18,filter:{type:"lowpass",f:600}});break;case"hi":this.syllable(320*s,0,{vowel:.4,len:.09}),this.syllable(380*s,.11,{vowel:1,len:.14,loud:1.2});break;case"hmm":r({f0:380*s,f1:520*s,dur:.38,gain:.08,vibrato:6,filter:{type:"lowpass",f:1200}});break;case"yawn":r({type:"triangle",f0:520*s,f1:240*s,dur:1,gain:.07,attack:.15,filter:{type:"lowpass",f:1400},curve:"lin"}),o({dur:.8,gain:.015,filter:{type:"bandpass",f:900,q:.7}});break;case"mm":r({type:"triangle",f0:300*s,f1:340*s,dur:.45,gain:.06,attack:.05,filter:{type:"lowpass",f:900}});break;case"ah":this.syllable(330*s,0,{vowel:.7,len:.16}),this.syllable(370*s,.6,{vowel:.8,len:.2});break;case"sneeze":o({dur:.18,gain:.16,filter:{type:"bandpass",f:3500,q:.8},f1:1500}),r({f0:900*s,f1:420*s,dur:.16,gain:.1,t:.02});break;case"whoa":r({f0:600*s,f1:950*s,dur:.18,gain:.08}),r({f0:950*s,f1:480*s,dur:.25,gain:.08,t:.18});break;case"bonk":r({type:"triangle",f0:340,f1:170,dur:.14,gain:e.soft?.08:.16,reverb:.05}),o({dur:.03,gain:.05,filter:{type:"highpass",f:2e3}});break;case"shake":for(let a=0;a<5;a++)o({dur:.035,gain:.025,t:a*.05,filter:{type:"bandpass",f:1800,q:2}});break;case"whee":r({f0:500*s,f1:1250*s,dur:.42,gain:.09,vibrato:10});break;case"snore":o({dur:.7,gain:.02,attack:.3,filter:{type:"lowpass",f:300,q:4}});break;case"mumble":for(let a=0;a<3;a++)this.syllable(240*s,a*.1,{vowel:K(.1,.5),loud:.5});break;case"tap":o({dur:.012,gain:.02,filter:{type:"bandpass",f:4200,q:3},reverb:0});break;case"tink":r({f0:1900,dur:.22,gain:.05,reverb:.2}),r({f0:2850,dur:.15,gain:.025});break;case"page":o({dur:.16,gain:.03,filter:{type:"highpass",f:2500},f1:5e3});break;case"idea":r({f0:li(84),dur:.9,gain:.08,reverb:.4}),r({f0:li(91),dur:.7,gain:.05,t:.08,reverb:.4});break;case"scribble":o({dur:.09,gain:.015,filter:{type:"bandpass",f:K(2200,3200),q:4}});break;case"water":for(let a=0;a<8;a++)r({f0:K(900,1500),f1:K(1600,2400),dur:.05,gain:.02,t:a*K(.06,.12)});break;case"pin":r({f0:1200,f1:700,dur:.05,gain:.08});break;case"stamp":r({f0:160,f1:80,dur:.1,gain:.14}),o({dur:.04,gain:.05,filter:{type:"lowpass",f:900}});break;case"coo":r({f0:560*s,f1:660*s,dur:.18,gain:.07,vibrato:14,vibratoF:12}),r({f0:660*s,f1:600*s,dur:.22,gain:.06,t:.17,vibrato:14,vibratoF:12});break;case"hic":r({f0:700*s,f1:1100*s,dur:.07,gain:.12});break;case"gasp":o({dur:.12,gain:.04,filter:{type:"highpass",f:1500},f1:4e3}),r({f0:520*s,f1:860*s,dur:.12,gain:.08});break;case"yay":this.syllable(420*s,0,{vowel:.9,len:.09,loud:e.soft?.6:1}),this.syllable(520*s,.1,{vowel:1,len:.16,loud:e.soft?.6:1.2}),e.soft||[0,4,7,12].forEach((a,l)=>r({f0:li(84+a),dur:.3,gain:.03,t:.2+l*.06,reverb:.3}));break;case"aww":r({type:"triangle",f0:600*s,f1:380*s,dur:.6,gain:.07,filter:{type:"lowpass",f:1300}});break;case"sigh":o({dur:.7,gain:.03,attack:.1,filter:{type:"bandpass",f:1200,q:.6},f1:500});break;case"pop":r({f0:380,f1:950,dur:.06,gain:.12});break;case"click":r({f0:900,f1:1300,dur:.04,gain:.07,reverb:0});break;case"chime":[0,4,7,11,14].forEach((a,l)=>r({f0:li(79+a),dur:.5,gain:.04,t:l*.05,reverb:.4}));break;case"door":r({type:"triangle",f0:140,f1:110,dur:.18,gain:.12}),[0,.14].forEach(a=>r({f0:li(88),dur:.6,gain:.05,t:.05+a,reverb:.5}));break;case"whoosh":o({dur:.5,gain:.06,attack:.15,filter:{type:"bandpass",f:400,q:.7},f1:2400});break;case"rotate":o({dur:.28,gain:.025,attack:.08,filter:{type:"bandpass",f:600,q:.8},f1:1400});break;case"switch":r({type:"square",f0:1400,dur:.02,gain:.03,filter:{type:"lowpass",f:3e3},reverb:0});break;case"plant":r({f0:500,f1:750,dur:.08,gain:.05}),o({dur:.15,gain:.02,filter:{type:"highpass",f:3e3}});break;case"mail":r({f0:li(84),dur:.5,gain:.05,reverb:.4}),r({f0:li(88),dur:.6,gain:.05,t:.12,reverb:.4});break;case"spawn":[0,7,12,16,19].forEach((a,l)=>r({f0:li(72+a),dur:.35,gain:.05,t:l*.06,reverb:.4}));break;case"hum":{[0,2,4,2,0,7].forEach((l,c)=>r({type:"triangle",f0:li(67+l)*s*.6,dur:.3,gain:.045,t:c*.42,attack:.04,filter:{type:"lowpass",f:1e3},vibrato:4}));break}default:break}}babble(t,e=1){if(!this.ctx||!this.sfxOn)return t.length*.06;let n=t.slice(0,64),s=0,r=300*e,o=/\?\s*$/.test(n),a=/!\s*$/.test(n);for(let l=0;l<n.length;l++){let c=n[l].toLowerCase();if(c===" "){s+=.03;continue}if(/[.,;:~]/.test(c)){s+=.12;continue}if(!/[a-z0-9]/.test(c)||l%2===1&&!/[aeiouy]/.test(c))continue;let h=/[aeiouy]/.test(c)?.6+c.charCodeAt(0)%5*.1:c.charCodeAt(0)%7/14,d=l>n.length-4,u=o&&d?1.25:1;this.syllable(r*u,s,{vowel:h,loud:a?1.25:1,len:.06}),s+=.068}return s}_startMusic(){let t=this.ctx;this._musicT0=t.currentTime+.1,this._nextBeat=0,this._chordIdx=0,this._melodyNote=2,this._prog=[[0,4,7],[9,12,16],[5,9,12],[7,11,14],[0,4,7],[9,12,16],[2,5,9],[7,11,14]];let e=()=>{if(!this.ctx)return;let n=60/this.tempo,s=t.currentTime+.25;for(;this._musicT0+this._nextBeat*n*.5<s;){let r=this._nextBeat,o=this._musicT0+r*n*.5;this._musicStep(r,o,n),this._nextBeat++}this._ambienceTick()};this._musicTimer=setInterval(e,60)}_bell(t,e,n,s=1.6){let r=this.ctx,o=Math.max(e,r.currentTime),a=r.createGain();a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(n,o+.006),a.gain.exponentialRampToValueAtTime(1e-4,o+s),a.connect(this.musicBus);let l=r.createGain();l.gain.value=.6,a.connect(l).connect(this.reverbSend);let c=[[1,1],[2,.22],[3.01,.08],[4.16,.05]];for(let[h,d]of c){let u=r.createOscillator();u.type="sine",u.frequency.value=t*h;let f=r.createGain();f.gain.setValueAtTime(d,o),f.gain.exponentialRampToValueAtTime(1e-4,o+s/(h*.8)),u.connect(f).connect(a),u.start(o),u.stop(o+s+.05)}}_musicStep(t,e,n){if(!this.musicOn)return;let s=65,r=Math.floor(t/8),o=t%8,a=this._prog[r%this._prog.length],l=this.ambience==="night",c=l?.05:.065;o===0&&this._bell(li(s-24+a[0]),e,c*.9,2.6),(o===0||o===4)&&a.forEach((d,u)=>this._bell(li(s-12+d),e+u*n*.16,c*.45,1.8));let h=o===0?.9:o%2===0?.55:.22;if(Math.random()<h*(l?.6:1)){let d=this._melodyNote+ge([-2,-1,-1,0,1,1,2]);d=_t(d,0,9),this._melodyNote=d;let u=Math.floor(d/5),f=s+Ab[d%5]+u*12;o===0&&Qt(.6)&&(f=s+12+a[Math.floor(Math.random()*3)]-12*(a[0]>6?1:0)),this._bell(li(f),e,c*.8,1.5)}}setAmbience(t){this.ambience=t}_ambienceTick(){!this.sfxOn||!this.ctx||(this._ambT-=.06,!(this._ambT>0)&&(this.ambience==="morning"||this.ambience==="day"?(this._ambT=K(4,11),Qt(.7)&&this._chirp()):this.ambience==="night"?(this._ambT=K(1.2,3),this._cricket()):this._ambT=5))}_chirp(){let t=K(2400,3600),e=Math.floor(K(2,5));for(let n=0;n<e;n++)this.tone({f0:t*K(.9,1.1),f1:t*K(1.2,1.5),dur:.06,gain:.012,t:n*K(.08,.13),reverb:.3})}_cricket(){let t=K(4200,4800);for(let e=0;e<3;e++)this.tone({f0:t,dur:.03,gain:.006,t:e*.05,reverb:.2})}},us=new _d;var em={ideas:{title:"ideas",accessory:"sprout",likes:{ideas:1,fun:.6,social:.4}},generalist:{title:"generalist",accessory:"antenna",likes:{build:.6,chores:.6,care:.5}},builder:{title:"builder",accessory:"antenna",likes:{build:1,fun:.5}},researcher:{title:"researcher",accessory:"leaf",likes:{research:1,calm:.7}},postmaster:{title:"postmaster",accessory:"flower",likes:{mail:1,social:.5}},chores:{title:"chores",accessory:"flower",likes:{chores:1,care:.9}},specialist:{title:"specialist",accessory:"leaf",likes:{build:.8,calm:.6}}},Cb=[{name:"Mochi",role:"ideas",color:"#ffb18f",seed:7,traits:{energy:.62,curiosity:.9,sociability:.8,sleepiness:.3,clumsiness:.45,chattiness:.8},faceShape:{eyeDX:.156,eyeSize:1.04,eyeY:.56},pos:{level:0,x:2,z:2.6}},{name:"Pip",role:"generalist",color:"#93dcbc",seed:21,traits:{energy:.85,curiosity:.6,sociability:.6,sleepiness:.15,clumsiness:.8,chattiness:.55},pos:{level:0,x:3.4,z:3.9}}],Pb=["Sprig","Dumpling","Waffle","Clover","Miso","Peaches","Juniper","Noodle","Fig","Momo","Bean","Puddle","Toast","Bun","Kiwi","Maple"];function nm(i){let t=i.brain;t.task?.type==="wait"&&t.task.t===999&&(t.task.done=!0),t.tasks=t.tasks.filter(e=>!(e.type==="wait"&&e.t===999))}function Ib(){let i=new at,t=wi("#fff2b0",{emissive:"#ffd84a",emissiveIntensity:1.4,roughness:.25});i.add(k(ze(.12,16,12),t,{cast:!1})),i.add(k(ue(.055,.06,.08,12),j("#c8ccd0",{metalness:.5,roughness:.35}),{pos:[0,-.13,0],cast:!1})),i.add(k(ue(.035,.035,.03,10),j("#9aa0a6",{metalness:.5}),{pos:[0,-.18,0],cast:!1}));let e=new ei(new Yn({color:"#ffe680",transparent:!0,opacity:.35,depthWrite:!1}));return e.scale.setScalar(.55),i.add(e),i.userData={glass:t,halo:e,k:0},i.visible=!1,i}var uh=class{constructor(t,e){this.world=t,this.store=e,this.critters=[],this.chats=[],this.games=[],this._greetT=0,this.focusLevelHint=0,this.ctx={fx:(n,s,r)=>this._fx(n,s,r),sfx:(n,s)=>this._sfx(n,s),camera:t.engine.camera,beat:()=>us.beat(),musicOn:()=>us.musicOn&&!!us.ctx,makeItem:n=>vd(n),onSay:(n,s,r)=>kn.emit("critter:say",n,s,r)},this.hooks={}}visibleCritter(t){return t.root.visible!==!1&&this.world.levels[t.level]?.visible!==!1}_fx(t,e,n){let s=n?.critter;s&&!this.visibleCritter(s)||this.world.fx.spawn(t,e,n)}_sfx(t,e={}){let n=e.critter;n&&!this.visibleCritter(n)||us.play(t,e)}sfx(t,e,n={}){this._sfx(t,{...n,critter:e})}fx(t,e,n={}){this._fx(t,e.headPos(new R,.1),{...n,critter:e})}makeItem(t){return vd(t)}get members(){return this.store.data.crew}member(t){return this.members.find(e=>e.id===t)||null}critter(t){return this.critters.find(e=>e.id===t)||null}find(t){if(!t)return null;let e=String(t).toLowerCase();return this.critters.find(n=>n.id===t||n.name.toLowerCase()===e)||null}ensureStartingCrew(){if(this.members.length)return;let t=Date.now();for(let e of Cb)this.members.push({id:Wu("crew"),joinedAt:t,...e});this.pickNightOwl()}newMember(t,e={}){let n=new Set(this.members.map(l=>l.name)),s=new Set(this.members.map(l=>l.color)),r=e.name||Pb.find(l=>!n.has(l))||`Sprout ${this.members.length+1}`,o=e.color||(wa.find(l=>!s.has(l.color))||ge(wa)).color,a={id:Wu("crew"),name:r,role:t,color:o,seed:Math.floor(Math.random()*1e6),joinedAt:Date.now(),traits:e.traits,pos:e.pos||{level:0,x:-1,z:8.5},...e.extra};return t==="specialist"&&Object.assign(a,{color:to.color,size:to.size,traits:to.traits,faceShape:to.faceShape,voice:to.voice,specialist:!0}),a}pickNightOwl(){let t=this.members.filter(n=>!n.specialist);for(let n of t)n.nightOwl=!1;let e=t.slice().sort((n,s)=>(n.traits?.sleepiness??.5)-(s.traits?.sleepiness??.5))[0];e&&(e.nightOwl=!0)}loadAll(){for(let t of this.members)t.away||this.spawn(t)}spawn(t){let e=em[t.role]||em.generalist,n=new lh({id:t.id,name:t.name,color:t.color,accessory:t.accessory||e.accessory,seed:t.seed,traits:t.traits,faceShape:t.faceShape,size:t.size,voice:t.voice,ctx:this.ctx});t.traits||(t.traits={...n.traits}),t.likes={...e.likes,...t.likes||{}},$p(n,t.role),Jp(n),n.member=t,n.brain=new hh(n,this,t),n.bulb=Ib(),n.root.add(n.bulb);let s=t.pos||{level:0,x:2.5,z:3},r=this.world.navs[s.level]?s.level:0,a=this.world.navs[r].nearestFree(s.x,s.z);return n.level=r,n.position.set(a.x,this.world.groundY(r,a.x,a.z),a.z),n.setHeading(s.h??K(-1,1),!0),this.world.levels[r].add(n.root),this.critters.push(n),kn.emit("critter:spawned",n),n}remove(t){t.brain.cancel(),t.root.parent?.remove(t.root),t.dispose(),this.critters=this.critters.filter(e=>e!==t),kn.emit("critter:removed",t)}setLevel(t,e){t.level!==e&&(t.level=e,this.world.levels[e].add(t.root))}savePositions(){for(let t of this.critters)t.member&&(t.member.pos={level:t.level,x:+t.position.x.toFixed(2),z:+t.position.z.toFixed(2),h:+t.heading.toFixed(2)})}stations(){return this.world.furnish.stations}station(t){return this.stations().find(e=>e.id===t)||null}levelsReachable(t){let e=new Set([t]),n=!0,s=this.world.portals();for(;n;){n=!1;for(let r of s)e.has(r.a.level)&&!e.has(r.b.level)&&(e.add(r.b.level),n=!0),e.has(r.b.level)&&!e.has(r.a.level)&&(e.add(r.a.level),n=!0)}return[...e].filter(r=>this.world.navs[r])}portalChain(t,e){if(t===e)return[];let n=this.world.portals(),s=new Map([[t,null]]),r=[t];for(;r.length;){let o=r.shift();for(let a of n){let l=null,c=!0;if(a.a.level===o?l=a.b.level:a.b.level===o&&(l=a.a.level,c=!1),!(l===null||s.has(l))){if(s.set(l,{level:o,portal:a,up:c}),l===e){let h=[];for(let d=e;s.get(d);d=s.get(d).level)h.unshift({portal:s.get(d).portal,up:s.get(d).up});return h}r.push(l)}}}return null}reachable(t,e){return this.world.navs[e.level]?e.level===t.level||!!this.portalChain(t.level,e.level):!1}rugSpots(){let t=this.world.furnish.obj("commons","rug");if(!t)return[];this._rugSpots||(t.updateWorldMatrix(!0,!1),this._rugSpots=t.userData.spots.map((e,n)=>{let s=new R(e.x,0,e.z).applyMatrix4(t.matrixWorld);return{i:n,x:s.x,z:s.z,reservedBy:null}}));for(let e of this._rugSpots){let n=e.reservedBy&&this.critter(e.reservedBy);(!n||!n.member.present)&&(e.reservedBy=null)}return this._rugSpots}rugSpotFor(t){let e=this.rugSpots(),n=e.find(s=>s.reservedBy===t.id);return n||e.find(s=>!s.reservedBy)||null}onRugNow(t){let e=this.rugSpots().find(n=>n.reservedBy===t.id);return!!e&&Math.hypot(t.position.x-e.x,t.position.z-e.z)<.4&&t.level===0}onReachedRug(t){this.hooks.onReachedRug?.(t.member,t)}bedFor(t){let e=this.stations(),n=r=>!r.reservedBy||r.reservedBy===t.id,s=e.filter(r=>r.bunk&&n(r));if(s.length){let o=t.member.bunk&&s.find(a=>a.id===t.member.bunk)||s[Math.floor(t.seed%97/97*s.length)]||s[0];return t.member.bunk=o.id,o}return e.find(r=>r.activity==="sleep"&&!r.bunk&&n(r))||null}jobStation(t){let e=t.member.job;if(!e)return null;let n=this.stations(),s=r=>!r.reservedBy||r.reservedBy===t.id;switch(e.kind){case"build":return n.find(r=>r.id===`bench-${e.slot??0}`&&s(r))||null;case"research":return n.find(r=>r.id===`desk-${e.slot??0}`&&s(r))||null;case"chores":return n.find(r=>r.id==="chalk"&&s(r))||n.find(r=>r.id==="board-think"&&s(r))||null;case"mail":return n.find(r=>r.id==="mailbox"&&s(r))||null;case"ideas":return n.find(r=>(r.id==="board"||r.id==="board-think")&&s(r))||n.find(r=>r.id==="couch-b"&&s(r))||null;default:return null}}onWorkTick(t,e,n){this.hooks.onWorkTick?.(t.member,n,t)}isNightFor(t){return Qp(t.traits,this.world.clockHour())}describeStation(t,e){return e.label}statusLine(t){let e=t.member,n=t.brain;return t.mainAction?.name==="sleep"?e.nightOwl?"catching a quick nap.":"fast asleep. it\u2019s late!":e.present?this.hooks.describePresent?.(e)||"has something to show you.":n.station?.job&&e.job?this.hooks.describeJob?.(e)||n.doing:n.chatting?n.doing:e.job&&!n.station?.job?`${this.hooks.describeJob?.(e)||"working"} (taking a little break)`:n.doing}onPicked(t){t.brain.interrupt(),this.leaveSocial(t),Qt(.5)&&setTimeout(()=>t.held&&t.say(vn("held")),300)}onDropped(t){let e=this.stations().find(r=>r.activity==="sleep"&&r.level===t.level&&!r.reservedBy&&Math.hypot(r.pos.x-t.position.x,r.pos.z-t.position.z)<.7);if(e){t.brain.paused=.8,setTimeout(()=>t.brain.doStation(e,{duration:K(20,40)}),700);return}let s=this.world.navs[t.level].nearestFree(t.position.x,t.position.z);t.position.x=s.x,t.position.z=s.z,t.brain.paused=1.6,Qt(.35)&&setTimeout(()=>t.say(vn("dropped")),900)}update(t){let e=performance.now()/1e3;for(let n of this.critters)n.brain.update(t),n.update(t),Zp(n,e),this._updateBulb(n,t,e),n.walking&&!n.held&&!n.brain.climbing&&n.speed>.6&&Math.random()<t*.006*n.traits.clumsiness&&(n.play("trip"),setTimeout(()=>Qt(.6)&&n.say(vn("tripped")),2600)),Kp(n,this.world.levels[n.level]?.visible===!1?0:1);this._separate(t),this._greetings(t),this._updateChats(t),this._updateGames(t),this._nightOwlLamp(t)}_updateBulb(t,e,n){let s=t.bulb,r=t.member.present&&!this.onRugNow(t)&&t.mainAction?.name!=="sleep"?1:0;s.userData.k=_t(s.userData.k+(r?e*3:-e*4));let o=s.userData.k;if(s.visible=o>.01,!s.visible)return;let a=o<1?1.15*Math.sin(o*Math.PI*.5):1+Math.sin(n*2.4)*.04;s.scale.setScalar(Math.max(.001,a)/t.size),s.position.set(0,(1.55+Math.sin(n*1.9+t.seed)*.05+t.mover.position.y)/1,0),s.userData.glass.emissiveIntensity=1.2+Math.sin(n*3)*.3,s.userData.halo.material.opacity=.25+Math.sin(n*3)*.08}_nightOwlLamp(){let t=this.world.furnish.obj("study","owlLamp");if(!t)return;let e=this.world.daylight.state?this.world.daylight.state.lamps>.4:!1,n=this.critters.some(o=>o.brain.station?.id?.startsWith("desk-")),s=e&&n?1:0,r=t.userData;r.on+=(s-r.on)*.05,r.light.intensity=r.on*2.2,r.light.visible=r.on>.02,r.shade.material.emissiveIntensity=r.on*.9,r.bulb.material.emissiveIntensity=r.on*4}_separate(t){let e=this.critters;for(let n=0;n<e.length;n++)for(let s=n+1;s<e.length;s++){let r=e[n],o=e[s];if(r.held||o.held||r.level!==o.level||r.brain.climbing||o.brain.climbing)continue;let a=o.position.x-r.position.x,l=o.position.z-r.position.z,c=Math.hypot(a,l),h=.46*(r.size+o.size);if(c>1e-4&&c<h){let d=(h-c)*Math.min(1,t*8),u=r.seat>.01||r.busy,f=o.seat>.01||o.busy,p=u?0:f?1:.5,x=f?0:u?1:.5;r.position.x-=a/c*d*p,r.position.z-=l/c*d*p,o.position.x+=a/c*d*x,o.position.z+=l/c*d*x,r.walking&&o.walking&&c<h*.75&&!r._bonkCool&&!o._bonkCool&&Qt(.35)&&(r._bonkCool=o._bonkCool=!0,setTimeout(()=>r._bonkCool=o._bonkCool=!1,2e4),r.play("bonk",{from:o.position}),o.play("bonk",{from:r.position}),this._fx("sparkle",r.position.clone().lerp(o.position,.5).setY(r.position.y+.9),{critter:r,count:3}),setTimeout(()=>r.say(vn("bump")),500))}}}_greetings(t){if(this._greetT-=t,this._greetT>0)return;this._greetT=.5;let e=performance.now()/1e3;for(let n of this.critters)if(!(n.held||n.busy))for(let s of this.critters){if(n===s||n.level!==s.level)continue;let r=n.position.distanceTo(s.position);if(r>1.8||r<.6)continue;let o=n.brain.lastGreet.get(s.id)||-999;e-o<120||(n.brain.lastGreet.set(s.id,e),s.brain.lastGreet.set(n.id,e),Qt(.45)&&(n.lookAt(s,2),s.lookAt(n,2),n.play("wave",{target:s,sound:!1}),Qt(.35)&&n.say(vn("greet"))))}}startChat(t,e){if(e.brain.chatting||t.brain.chatting||t.level!==e.level)return;let n=this.world.navs[t.level],s={x:(t.position.x+e.position.x)/2,z:(t.position.z+e.position.z)/2},r=new Y(e.position.x-t.position.x,e.position.z-t.position.z);r.lengthSq()<.01&&r.set(1,0),r.normalize();let o=n.nearestFree(s.x-r.x*.5,s.z-r.y*.5),a=n.nearestFree(s.x+r.x*.5,s.z+r.y*.5),l={a:t,b:e,t:0,turns:Math.floor(K(3,6)),speaker:0,next:.6,ended:!1,ready:0};t.brain.chatting=l,e.brain.chatting=l;let c=()=>l.ready++;t.brain.run([{type:"walk",to:o},{type:"call",fn:c},{type:"wait",t:999}],`having a chat with ${e.name}`),e.brain.run([{type:"walk",to:a},{type:"call",fn:c},{type:"wait",t:999}],`having a chat with ${t.name}`),this.chats.push(l)}leaveSocial(t){for(let e of this.chats)(e.a===t||e.b===t)&&this._endChat(e);for(let e of this.games)(e.a===t||e.b===t)&&(e.ended=!0)}_endChat(t,e=null){if(!t.ended){t.ended=!0;for(let n of[t.a,t.b])n.brain.chatting=null,n.stop("talk"),nm(n);e&&(t.a.play(e,{partner:t.b}),t.b.play(e,{partner:t.a})),t.a.brain.needs.social=_t(t.a.brain.needs.social+.4),t.b.brain.needs.social=_t(t.b.brain.needs.social+.4)}}_updateChats(t){for(let e of this.chats){if(e.ended)continue;e.t+=t;let{a:n,b:s}=e;if(e.t>30||n.held||s.held||n.level!==s.level){this._endChat(e);continue}if(e.ready<2||(e.started||(e.started=!0,n.faceToward(s.position),s.faceToward(n.position),n.play("talk"),s.play("talk")),n.lookAt(s,1),s.lookAt(n,1),e.next-=t,e.next>0))continue;let r=e.speaker%2===0?n:s,o=r===n?s:n;if(e.speaker>=e.turns*2){this._endChat(e,ge(["hug","giggle","nod","hop","wave"]));continue}let a=e.speaker%2?vn("reply"):vn("chat");r.say(a),Qt(.3)&&o.play(ge(["nod","giggle","tilt"])),e.speaker++,e.next=Math.max(1.4,a.length*.07+.7)}this.chats=this.chats.filter(e=>!e.ended)}startPlay(t,e){if(t.brain.chatting||e.brain.chatting||t.level!==e.level)return;let n={a:t,b:e,t:0,ended:!1,legs:0};t.brain.run([{type:"wait",t:999}],`playing tag with ${e.name}`),e.brain.run([{type:"wait",t:999}],`playing tag with ${t.name}`),t.brain.chatting=e.brain.chatting=n,e.play("surprised"),t.say(ge(["tag! you're it!","catch me!","bet you can\u2019t catch me"])),n.it=e,n.runner=t,this.games.push(n)}_updateGames(t){for(let e of this.games){if(e.ended)continue;e.t+=t;let{it:n,runner:s}=e,r=this.world.navs[n.level];if((e.t>24||n.held||s.held||n.level!==s.level||!r)&&(e.ended=!0),e.ended){for(let o of[e.a,e.b])o.brain.chatting=null,o.stopWalking(),nm(o),o.brain.needs.fun=_t(o.brain.needs.fun+.5);e.a.play("giggle"),e.b.play("giggle");continue}if(!s.walking&&!s.busy){let o=r.randomFree(Math.random,s.position,3),a=r.findPath(s.position,o);a&&s.walkPath(a,{gait:"run",speed:.85})}if(e.repath=(e.repath||0)-t,e.repath<=0&&!n.busy){e.repath=.4;let o=r.findPath(n.position,s.position);o&&n.walkPath(o,{gait:"run",speed:.95})}n.position.distanceTo(s.position)<.85&&!s.busy&&(e.legs++,s.play("surprised"),n.play("hop"),n.say(ge(["tag!","gotcha!","hehe!"])),n.stopWalking(),e.it=s,e.runner=n,e.legs>3&&(e.ended=!0))}this.games=this.games.filter(e=>!e.ended)}teaParty(t){return this.stations().filter(e=>e.activity==="tea"&&e.reservedBy).length}teaTalk(t,e){let n=this.critters.filter(r=>r!==t&&r.brain.station?.activity==="tea");if(!n.length)return;let s=n[0];t.lookAt(s,.5),Math.random()<e*.12&&(t.say(Qt(.5)?vn("chat"):vn("reply")),Qt(.5)&&setTimeout(()=>s.play(ge(["nod","giggle"])),900)),t.brain.needs.social=_t(t.brain.needs.social+e*.03)}wigglePlantNear(t){let e=null,n=2.5;for(let s of this.world.furnish.kits.values())for(let r of s.plants){let o=r.getWorldPosition(new R).distanceTo(t.position);o<n&&(n=o,e=r)}e&&(e.userData.wiggle=1,this._fx("sparkle",e.getWorldPosition(new R).add(new R(0,.8,0)),{critter:t,count:4}),this.sfx("plant",t))}};var dh=class{constructor(t,e,n){this.world=e,this.crew=n,this.el=document.createElement("div"),this.el.className="bubbles",t.appendChild(this.el),this.map=new Map,kn.on("critter:say",(s,r,o)=>this.say(s,r,o)),kn.on("critter:removed",s=>{this.map.get(s)?.el.remove(),this.map.delete(s)})}say(t,e,n={}){let s=this.map.get(t);if(!s){let r=document.createElement("div");r.className="bubble",this.el.appendChild(r),s={el:r,text:"",shown:0,until:0},this.map.set(t,s)}s.text=e,s.shown=0,s.until=performance.now()/1e3+(n.hold??Math.max(2.2,e.length*.075+1.6)),s.el.style.setProperty("--tint",t.color),s.el.classList.toggle("status",!!n.status),this.crew.visibleCritter(t)&&!n.silent&&us.babble(e,t.voice)}hide(t){let e=this.map.get(t);e&&(e.until=0)}update(t){let e=this.world.engine.camera,n=this.world.engine.width,s=this.world.engine.height,r=performance.now()/1e3,o=[];for(let[a,l]of this.map){if(!(this.crew.visibleCritter(a)&&r<l.until)){l.el.classList.remove("show");continue}l.shown<l.text.length&&(l.shown=Math.min(l.text.length,l.shown+t*32),l.el.textContent=l.text.slice(0,Math.ceil(l.shown)));let h=a.headPos(new R,a.bulb?.visible?.55:.32).project(e);if(h.z>1){l.el.classList.remove("show");continue}let d=l.el.offsetWidth||120,u=l.el.offsetHeight||36,f=_t((h.x*.5+.5)*n,d/2+8,n-d/2-8),p=_t((-h.y*.5+.5)*s,u+8,s);o.push({b:l,x:f,y:p,w:d,h:u,depth:h.z})}o.sort((a,l)=>a.depth-l.depth);for(let a=0;a<o.length;a++){let l=o[a];l.ty=l.y;for(let c=0;c<4;c++){let h=!1;for(let d=0;d<a;d++){let u=o[d];Math.abs(l.x-u.x)<(l.w+u.w)/2+4&&Math.abs(l.ty-u.ty)<(l.h+u.h)/2+4&&(l.ty=u.ty-(u.h+l.h)/2-6,h=!0)}if(!h)break}l.b.y=l.b.y===void 0?l.ty:Ye(l.b.y,l.ty,14,t),l.b.el.style.transform=`translate(${l.x}px, ${l.b.y}px) translate(-50%, -100%)`,l.b.el.classList.add("show")}}};var im=new Cn,Ta=new R,fh=class{constructor(t,e={}){this.container=t,this.opts=e,this.store=e.store||new jr,this.world=new ah(t,{quality:this.store.data.settings.quality}),this.crew=new uh(this.world,this.store),this.ui=document.createElement("div"),this.ui.className="ui",t.appendChild(this.ui),this.bubbles=new dh(this.ui,this.world,this.crew),this.hooks=[]}start(){let t=this.store.data;this.opts.unlocks&&Object.assign(t.unlocks,this.opts.unlocks),this.world.applyStructure(t.unlocks),this.crew.ensureStartingCrew(),this.crew.loadAll(),this._wireInput(),this.world.engine.add((e,n)=>this.update(e,n)),this.world.engine.start(),window.addEventListener("pagehide",()=>this.save()),document.addEventListener("visibilitychange",()=>document.hidden&&this.save()),this._saveT=0}save(){this.crew.savePositions(),this.store.data.lastSeen=Date.now(),this.store.save()}update(t,e){this.world.update(t,e),this.input.update(t),this.crew.update(t),this.bubbles.update(t);for(let n of this.hooks)n(t,e);this._saveT+=t,this._saveT>20&&(this._saveT=0,this.save())}roomAt(t){let n=this.world.house.rooms.filter(s=>!s.sealed&&this.world.levels[s.level]?.visible!==!1).sort((s,r)=>r.level-s.level);for(let s of n)if(im.set(new R(0,1,0),-s.base),!!t.ray.intersectPlane(im,Ta)&&Ta.x>s.x0&&Ta.x<s.x1&&Ta.z>s.z0&&Ta.z<s.z1)return s;return null}focusRoom(t){let e=this.world;if(!t){e.focus=null,e.rig.clearFocus();return}if(e.focus===t.id){e.focus=null,e.rig.clearFocus();return}e.focus=t.id,e.rig.focusOn(t,t.base),this.taste?.("room",{room:t.id})}_wireInput(){let t=this.world;this.input=new Qc({dom:t.engine.renderer.domElement,camera:t.engine.camera,rig:t.rig,hooks:{critters:()=>this.crew.critters.filter(e=>this.crew.visibleCritter(e)),props:()=>this.props||[],roomAt:e=>this.roomAt(e),sound:us,haptic:e=>this.haptic(e),onTapCritter:e=>this.tapCritter(e),onDoubleTapCritter:e=>{t.rig.follow(e),t.focus=null},onLongPressCritter:e=>kn.emit("whisper:open",e),onTapProp:e=>kn.emit("prop:tap",e),onLongPressProp:e=>kn.emit("prop:long",e),onTapRoom:e=>this.focusRoom(e),onTapEmpty:()=>this.focusRoom(null),onPickUp:e=>{this.crew.onPicked(e),this.haptic("tick")},onDrop:e=>this.crew.onDropped(e),onPet:e=>{e.brain.interrupt(),this.crew.leaveSocial(e),Qt(.5)&&setTimeout(()=>e.say(vn("petted")),500)},clampDrag:(e,n,s)=>{let r=t.navs[s.level];return r?[_t(e,r.x0+.3,r.x0+r.w-.3),_t(n,r.z0+.3,r.z0+r.d-.3)]:[e,n]},onMoveStart:e=>kn.emit("move:start",e),onMoveDrag:(e,n)=>kn.emit("move:drag",e,n),onMoveEnd:e=>kn.emit("move:end",e)}})}tapCritter(t){t.brain.attending=2.2,t.lookAt(this.world.engine.camera.position,2);let e=this.crew.statusLine(t);t.say(e,{status:!0}),kn.emit("critter:tapped",t)}haptic(t){if(!this.store.data.settings.haptics||!navigator.vibrate)return;let e={tick:8,thump:[18],done:[12,40,12,40,30]}[t]||8;try{navigator.vibrate(e)}catch{}}};async function Db(){let i=new URLSearchParams(location.search),t=new jr;i.has("fresh")&&(t.reset(),t.frozen=!1,t.data=t.load()),i.has("nosave")&&(t.frozen=!0);let e={};for(let r of(i.get("unlock")||"").split(",").filter(Boolean))e[r]=Date.now();if(i.get("unlock")==="all")for(let r of["board","workshop","gate","study","kitchen","upstairs","garden","shed"])e[r]=Date.now();let n=new fh(document.getElementById("app"),{store:t,unlocks:e}),s=i.get("time");s&&n.world.daylight.setPreset(s),n.start(),window.__game=n,window.__world=n.world,window.__step=(r=1)=>{n.world.engine.stop(),n.world.engine.step(1/60,r)},document.body.classList.add("ready")}Db().catch(i=>{console.error(i);let t=document.createElement("pre");t.className="fatal",t.textContent=`Something went wrong while starting the game:

`+(i&&i.stack?i.stack:String(i)),document.body.appendChild(t)});})();
/*! For license information please see game.js.LEGAL.txt */
