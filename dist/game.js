(()=>{var wf=0,xu=1,Tf=2;var Ds=1,Ef=2,Dr=3,Jn=0,ln=1,fn=2,Qe=0,us=1,Yi=2,vu=3,yu=4,Hl=5;var Kn=100,Af=101,Rf=102,Cf=103,Pf=104,Ls=200,If=201,Df=202,Lf=203,_u=204,bu=205,Yo=206,Nf=207,$o=208,Uf=209,kf=210,Ff=211,Of=212,zf=213,Bf=214,ol=0,al=1,ll=2,gr=3,cl=4,hl=5,ul=6,dl=7,Vl=0,Hf=1,Vf=2,ui=0,Zo=1,Jo=2,Ko=3,jo=4,Qo=5,Ns=6,Us=7;var Mu=300,ds=301,ks=302,Gl=303,Wl=304,ta=306,Yn=1e3,qn=1001,fl=1002,je=1003,Gf=1004;var ea=1005;var gn=1006,Xl=1007;var Ti=1008;var wn=1009,Su=1010,wu=1011,Lr=1012,ql=1013,di=1014,jn=1015,$e=1016,Yl=1017,$l=1018,fs=1020,Tu=35902,Eu=35899,Au=1021,Ru=1022,Un=1023,vi=1026,Ei=1027,Zl=1028,Jl=1029,ps=1030,Kl=1031;var jl=1033,na=33776,ia=33777,sa=33778,ra=33779,Ql=35840,tc=35841,ec=35842,nc=35843,ic=36196,sc=37492,rc=37496,oc=37488,ac=37489,oa=37490,lc=37491,cc=37808,hc=37809,uc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,xc=37816,vc=37817,yc=37818,_c=37819,bc=37820,Mc=37821,Sc=36492,wc=36494,Tc=36495,Ec=36283,Ac=36284,aa=36285,Rc=36286;var xo=2300,pl=2301,sl=2302,su=2303,ru=2400,ou=2401,au=2402;var Wf=3200;var Nr=0,Xf=1,fi="",Xe="srgb",vo="srgb-linear",yo="linear",be="srgb";var rl=7680;var qf=519,Yf=512,$f=513,Zf=514,Cc=515,Jf=516,Kf=517,Pc=518,jf=519,Cu=35044;var Pu="300 es",oi=2e3,xr=2001;function mm(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function gm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function _o(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qf(){let s=_o("canvas");return s.style.display="block",s}var Vd={},vr=null;function bo(...s){let t="THREE."+s.shift();vr?vr("log",t,...s):console.log(t,...s)}function tp(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Qt(...s){s=tp(s);let t="THREE."+s.shift();if(vr)vr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function jt(...s){s=tp(s);let t="THREE."+s.shift();if(vr)vr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function As(...s){let t=s.join(" ");t in Vd||(Vd[t]=!0,Qt(...s))}function ep(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var np={[ol]:al,[ll]:ul,[cl]:dl,[gr]:hl,[al]:ol,[ul]:ll,[dl]:cl,[hl]:gr},yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ih=Math.PI/180,ml=180/Math.PI;function Hi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function fe(s,t,e){return Math.max(t,Math.min(e,s))}function xm(s,t){return(s%t+t)%t}function Dh(s,t,e){return(1-e)*s+e*t}function xi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ku=class ku{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ku.prototype.isVector2=!0;var Y=ku,_i=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==p){let g=l*d+c*f+h*p+u*x;g<0&&(d=-d,f=-f,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let M=Math.acos(g),T=Math.sin(M);m=Math.sin(m*M)/T,a=Math.sin(a*M)/T,l=l*m+d*a,c=c*m+f*a,h=h*m+p*a,u=u*m+x*a}else{l=l*m+d*a,c=c*m+f*a,h=h*m+p*a,u=u*m+x*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Fu=class Fu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lh.copy(this).projectOnVector(t),this.sub(Lh)}reflect(t){return this.sub(Lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fu.prototype.isVector3=!0;var A=Fu,Lh=new A,Gd=new _i,Ou=class Ou{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=i[0],g=i[3],m=i[6],M=i[1],T=i[4],v=i[7],w=i[2],b=i[5],C=i[8];return r[0]=o*x+a*M+l*w,r[3]=o*g+a*T+l*b,r[6]=o*m+a*v+l*C,r[1]=c*x+h*M+u*w,r[4]=c*g+h*T+u*b,r[7]=c*m+h*v+u*C,r[2]=d*x+f*M+p*w,r[5]=d*g+f*T+p*b,r[8]=d*m+f*v+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return As("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nh.makeScale(t,e)),this}rotate(t){return As("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nh.makeRotation(-t)),this}translate(t,e){return As("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ou.prototype.isMatrix3=!0;var ne=Ou,Nh=new ne,Wd=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xd=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vm(){let s={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===be&&(i.r=Vi(i.r),i.g=Vi(i.g),i.b=Vi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(i.r=mr(i.r),i.g=mr(i.g),i.b=mr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?yo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[vo]:{primaries:t,whitePoint:n,transfer:yo,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:be,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),s}var de=vm();function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ks,gl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ks===void 0&&(Ks=_o("canvas")),Ks.width=t.width,Ks.height=t.height;let i=Ks.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ks}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_o("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vi(e[n]/255)*255):e[n]=Vi(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ym=0,yr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Uh(i[o].image)):r.push(Uh(i[o]))}else r=Uh(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Uh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}var _m=0,kh=new A,Cn=class s extends yi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=qn,i=qn,r=gn,o=Ti,a=Un,l=wn,c=s.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Hi(),this.name="",this.source=new yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kh).x}get height(){return this.source.getSize(kh).y}get depth(){return this.source.getSize(kh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yn:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yn:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Mu;Cn.DEFAULT_ANISOTROPY=1;var zu=class zu{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,v=(f+1)/2,w=(m+1)/2,b=(h+d)/4,C=(u+x)/4,y=(p+g)/4;return T>v&&T>w?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=b/n,r=C/n):v>w?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=b/i,r=y/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=C/r,i=y/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zu.prototype.isVector4=!0;var Ue=zu,xl=class extends yi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new Cn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new yr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},He=class extends xl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Mo=class extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var vl=class extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Bl=class Bl{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,g)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/js.setFromMatrixColumn(t,0).length(),r=1/js.setFromMatrixColumn(t,1).length(),o=1/js.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bm,t,Mm)}lookAt(t,e,n){let i=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),es.crossVectors(n,Fn),es.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),es.crossVectors(n,Fn)),es.normalize(),Ia.crossVectors(Fn,es),i[0]=es.x,i[4]=Ia.x,i[8]=Fn.x,i[1]=es.y,i[5]=Ia.y,i[9]=Fn.y,i[2]=es.z,i[6]=Ia.z,i[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],M=n[3],T=n[7],v=n[11],w=n[15],b=i[0],C=i[4],y=i[8],E=i[12],P=i[1],D=i[5],U=i[9],B=i[13],N=i[2],H=i[6],Z=i[10],$=i[14],at=i[3],z=i[7],tt=i[11],nt=i[15];return r[0]=o*b+a*P+l*N+c*at,r[4]=o*C+a*D+l*H+c*z,r[8]=o*y+a*U+l*Z+c*tt,r[12]=o*E+a*B+l*$+c*nt,r[1]=h*b+u*P+d*N+f*at,r[5]=h*C+u*D+d*H+f*z,r[9]=h*y+u*U+d*Z+f*tt,r[13]=h*E+u*B+d*$+f*nt,r[2]=p*b+x*P+g*N+m*at,r[6]=p*C+x*D+g*H+m*z,r[10]=p*y+x*U+g*Z+m*tt,r[14]=p*E+x*B+g*$+m*nt,r[3]=M*b+T*P+v*N+w*at,r[7]=M*C+T*D+v*H+w*z,r[11]=M*y+T*U+v*Z+w*tt,r[15]=M*E+T*B+v*$+w*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],M=l*f-c*d,T=a*f-c*u,v=a*d-l*u,w=o*f-c*h,b=o*d-l*h,C=o*u-a*h;return e*(x*M-g*T+m*v)-n*(p*M-g*w+m*b)+i*(p*T-x*w+m*C)-r*(p*v-x*b+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],M=e*a-n*o,T=e*l-i*o,v=e*c-r*o,w=n*l-i*a,b=n*c-r*a,C=i*c-r*l,y=h*x-u*p,E=h*g-d*p,P=h*m-f*p,D=u*g-d*x,U=u*m-f*x,B=d*m-f*g,N=M*B-T*U+v*D+w*P-b*E+C*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/N;return t[0]=(a*B-l*U+c*D)*H,t[1]=(i*U-n*B-r*D)*H,t[2]=(x*C-g*b+m*w)*H,t[3]=(d*b-u*C-f*w)*H,t[4]=(l*P-o*B-c*E)*H,t[5]=(e*B-i*P+r*E)*H,t[6]=(g*v-p*C-m*T)*H,t[7]=(h*C-d*v+f*T)*H,t[8]=(o*U-a*P+c*y)*H,t[9]=(n*P-e*U-r*y)*H,t[10]=(p*b-x*v+m*M)*H,t[11]=(u*v-h*b-f*M)*H,t[12]=(a*E-o*D-l*y)*H,t[13]=(e*D-n*E+i*y)*H,t[14]=(x*T-p*w-g*M)*H,t[15]=(h*w-u*T+d*M)*H,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,g=o*u,m=a*u,M=l*c,T=l*h,v=l*u,w=n.x,b=n.y,C=n.z;return i[0]=(1-(x+m))*w,i[1]=(f+v)*w,i[2]=(p-T)*w,i[3]=0,i[4]=(f-v)*b,i[5]=(1-(d+m))*b,i[6]=(g+M)*b,i[7]=0,i[8]=(p+T)*C,i[9]=(g-M)*C,i[10]=(1-(d+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=js.set(i[0],i[1],i[2]).length(),a=js.set(i[4],i[5],i[6]).length(),l=js.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ii.copy(this);let c=1/o,h=1/a,u=1/l;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,e.setFromRotationMatrix(ii),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=oi,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===oi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===xr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=oi,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===oi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===xr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Bl.prototype.isMatrix4=!0;var oe=Bl,js=new A,ii=new oe,bm=new A(0,0,0),Mm=new A(1,1,1),es=new A,Ia=new A,Fn=new A,qd=new oe,Yd=new _i,bi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yd.setFromEuler(this),this.setFromQuaternion(Yd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var _r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sm=0,$d=new A,Qs=new _i,Ui=new oe,Da=new A,so=new A,wm=new A,Tm=new _i,Zd=new A(1,0,0),Jd=new A(0,1,0),Kd=new A(0,0,1),jd={type:"added"},Em={type:"removed"},tr={type:"childadded",child:null},Fh={type:"childremoved",child:null},on=class s extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new A,e=new bi,n=new _i,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new ne}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.premultiply(Qs),this}rotateX(t){return this.rotateOnAxis(Zd,t)}rotateY(t){return this.rotateOnAxis(Jd,t)}rotateZ(t){return this.rotateOnAxis(Kd,t)}translateOnAxis(t,e){return $d.copy(t).applyQuaternion(this.quaternion),this.position.add($d.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zd,t)}translateY(t){return this.translateOnAxis(Jd,t)}translateZ(t){return this.translateOnAxis(Kd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Da.copy(t):Da.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(so,Da,this.up):Ui.lookAt(Da,so,this.up),this.quaternion.setFromRotationMatrix(Ui),i&&(Ui.extractRotation(i.matrixWorld),Qs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jd),tr.child=t,this.dispatchEvent(tr),tr.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Em),Fh.child=t,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jd),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,t,wm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,Tm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};on.DEFAULT_UP=new A(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ht=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},Am={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Am)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},La={h:0,s:0,l:0};function Oh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=xm(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Oh(o,r,t+1/3),this.g=Oh(o,r,t),this.b=Oh(o,r,t-1/3)}return de.colorSpaceToWorking(this,i),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let n=ip[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return de.workingToColorSpace(bn.copy(this),t),Math.round(fe(bn.r*255,0,255))*65536+Math.round(fe(bn.g*255,0,255))*256+Math.round(fe(bn.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(bn.copy(this),e);let n=bn.r,i=bn.g,r=bn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=Xe){de.workingToColorSpace(bn.copy(this),t);let e=bn.r,n=bn.g,i=bn.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+e,ns.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ns),t.getHSL(La);let n=Dh(ns.h,La.h,e),i=Dh(ns.s,La.s,e),r=Dh(ns.l,La.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new bt;bt.NAMES=ip;var Rs=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},si=new A,ki=new A,zh=new A,Fi=new A,er=new A,nr=new A,Qd=new A,Bh=new A,Hh=new A,Vh=new A,Gh=new Ue,Wh=new Ue,Xh=new Ue,Bi=class s{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),si.subVectors(t,e),i.cross(si);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){si.subVectors(i,e),ki.subVectors(n,e),zh.subVectors(t,e);let o=si.dot(si),a=si.dot(ki),l=si.dot(zh),c=ki.dot(ki),h=ki.dot(zh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Gh.setScalar(0),Wh.setScalar(0),Xh.setScalar(0),Gh.fromBufferAttribute(t,e),Wh.fromBufferAttribute(t,n),Xh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Gh,r.x),o.addScaledVector(Wh,r.y),o.addScaledVector(Xh,r.z),o}static isFrontFacing(t,e,n,i){return si.subVectors(n,e),ki.subVectors(t,e),si.cross(ki).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),si.cross(ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;er.subVectors(i,n),nr.subVectors(r,n),Bh.subVectors(t,n);let l=er.dot(Bh),c=nr.dot(Bh);if(l<=0&&c<=0)return e.copy(n);Hh.subVectors(t,i);let h=er.dot(Hh),u=nr.dot(Hh);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(er,o);Vh.subVectors(t,r);let f=er.dot(Vh),p=nr.dot(Vh);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(nr,a);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Qd.subVectors(r,i),a=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(Qd,a);let m=1/(g+x+d);return o=x*m,a=d*m,e.copy(n).addScaledVector(er,o).addScaledVector(nr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mi=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Na.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(t.matrixWorld),this.union(Na)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ro),Ua.subVectors(this.max,ro),ir.subVectors(t.a,ro),sr.subVectors(t.b,ro),rr.subVectors(t.c,ro),is.subVectors(sr,ir),ss.subVectors(rr,sr),Ms.subVectors(ir,rr);let e=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Ms.z,Ms.y,is.z,0,-is.x,ss.z,0,-ss.x,Ms.z,0,-Ms.x,-is.y,is.x,0,-ss.y,ss.x,0,-Ms.y,Ms.x,0];return!qh(e,ir,sr,rr,Ua)||(e=[1,0,0,0,1,0,0,0,1],!qh(e,ir,sr,rr,Ua))?!1:(ka.crossVectors(is,ss),e=[ka.x,ka.y,ka.z],qh(e,ir,sr,rr,Ua))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Oi=[new A,new A,new A,new A,new A,new A,new A,new A],ri=new A,Na=new Mi,ir=new A,sr=new A,rr=new A,is=new A,ss=new A,Ms=new A,ro=new A,Ua=new A,ka=new A,Ss=new A;function qh(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ss.fromArray(s,r);let a=i.x*Math.abs(Ss.x)+i.y*Math.abs(Ss.y)+i.z*Math.abs(Ss.z),l=t.dot(Ss),c=e.dot(Ss),h=n.dot(Ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var rn=new A,Fa=new Y,Rm=0,an=class extends yi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Cu,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fa.fromBufferAttribute(this,e),Fa.applyMatrix3(t),this.setXY(e,Fa.x,Fa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var So=class extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wo=class extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}},Cm=new Mi,oo=new A,Yh=new A,Gi=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Cm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;oo.subVectors(t,this.center);let e=oo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(oo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(oo.copy(t.center).add(Yh)),this.expandByPoint(oo.copy(t.center).sub(Yh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pm=0,Xn=new oe,$h=new on,or=new A,On=new Mi,ao=new Mi,dn=new A,Me=class s extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mm(t)?wo:So)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,n){return Xn.makeTranslation(t,e,n),this.applyMatrix4(Xn),this}scale(t,e,n){return Xn.makeScale(t,e,n),this.applyMatrix4(Xn),this}lookAt(t){return $h.lookAt(t),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];On.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ao.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(On.min,ao.min),On.expandByPoint(dn),dn.addVectors(On.max,ao.max),On.expandByPoint(dn)):(On.expandByPoint(ao.min),On.expandByPoint(ao.max))}On.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)dn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(dn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)dn.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(t,c),dn.add(or)),i=Math.max(i,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new A,l[y]=new A;let c=new A,h=new A,u=new A,d=new Y,f=new Y,p=new Y,x=new A,g=new A;function m(y,E,P){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,P),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,P),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),a[y].add(x),a[E].add(x),a[P].add(x),l[y].add(g),l[E].add(g),l[P].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let y=0,E=M.length;y<E;++y){let P=M[y],D=P.start,U=P.count;for(let B=D,N=D+U;B<N;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let T=new A,v=new A,w=new A,b=new A;function C(y){w.fromBufferAttribute(i,y),b.copy(w);let E=a[y];T.copy(E),T.sub(w.multiplyScalar(w.dot(E))).normalize(),v.crossVectors(b,E);let D=v.dot(l[y])<0?-1:1;o.setXYZW(y,T.x,T.y,T.z,D)}for(let y=0,E=M.length;y<E;++y){let P=M[y],D=P.start,U=P.count;for(let B=D,N=D+U;B<N;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new an(d,h,u)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},To=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Cu,this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Rn=new A,Mr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.applyMatrix4(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.applyNormalMatrix(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.transformDirection(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),r=Pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){bo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new an(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){bo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zh=new A,Im=new A,Dm=new ne,pn=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Zh.subVectors(n,e).cross(Im.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Zh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Dm.getNormalMatrix(t),i=this.coplanarPoint(Zh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Lm=0,$n=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=us,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_u,this.blendDst=bu,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rl,this.stencilZFail=rl,this.stencilZPass=rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Y().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Y().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Sr=class extends $n{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ar,lo=new A,lr=new A,cr=new A,hr=new Y,co=new Y,sp=new oe,Oa=new A,ho=new A,za=new A,tf=new Y,Jh=new Y,ef=new Y,Eo=class extends on{constructor(t=new Sr){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new Me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new To(e,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new Mr(n,3,0,!1)),ar.setAttribute("uv",new Mr(n,2,3,!1))}this.geometry=ar,this.material=t,this.center=new Y(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lr.setFromMatrixScale(this.matrixWorld),sp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lr.multiplyScalar(-cr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Ba(Oa.set(-.5,-.5,0),cr,o,lr,i,r),Ba(ho.set(.5,-.5,0),cr,o,lr,i,r),Ba(za.set(.5,.5,0),cr,o,lr,i,r),tf.set(0,0),Jh.set(1,0),ef.set(1,1);let a=t.ray.intersectTriangle(Oa,ho,za,!1,lo);if(a===null&&(Ba(ho.set(-.5,.5,0),cr,o,lr,i,r),Jh.set(0,1),a=t.ray.intersectTriangle(Oa,za,ho,!1,lo),a===null))return;let l=t.ray.origin.distanceTo(lo);l<t.near||l>t.far||e.push({distance:l,point:lo.clone(),uv:Bi.getInterpolation(lo,Oa,ho,za,tf,Jh,ef,new Y),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ba(s,t,e,n,i,r){hr.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(co.x=r*hr.x-i*hr.y,co.y=i*hr.x+r*hr.y):co.copy(hr),s.copy(t),s.x+=co.x,s.y+=co.y,s.applyMatrix4(sp)}var zi=new A,Kh=new A,Ha=new A,Va=new A,wr=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,e),zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Kh.copy(t).add(e).multiplyScalar(.5),Ha.copy(e).sub(t).normalize(),Va.copy(this.origin).sub(Kh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ha),a=Va.dot(this.direction),l=-Va.dot(Ha),c=Va.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Kh).addScaledVector(Ha,d),f}intersectSphere(t,e){if(t.radius<0)return null;zi.subVectors(t.center,this.origin);let n=zi.dot(this.direction),i=zi.dot(zi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=n.x-o.x,M=n.y-o.y,T=n.z-o.z,v=Math.abs(l),w=Math.abs(c),b=Math.abs(h),C,y,E,P,D,U,B,N,H,Z,$,at;if(v>=w&&v>=b?(E=l,U=u,H=p,at=m,l>=0?(C=c,y=h,P=d,D=f,B=x,N=g,Z=M,$=T):(C=h,y=c,P=f,D=d,B=g,N=x,Z=T,$=M)):w>=b?(E=c,U=d,H=x,at=M,c>=0?(C=h,y=l,P=f,D=u,B=g,N=p,Z=T,$=m):(C=l,y=h,P=u,D=f,B=p,N=g,Z=m,$=T)):(E=h,U=f,H=g,at=T,h>=0?(C=l,y=c,P=u,D=d,B=p,N=x,Z=m,$=M):(C=c,y=l,P=d,D=u,B=x,N=p,Z=M,$=m)),E===0)return null;let z=C/E,tt=y/E,nt=1/E,Ct=P-z*U,Pt=D-tt*U,me=B-z*H,re=N-tt*H,ue=Z-z*at,K=$-tt*at,it=ue*re-K*me,mt=Ct*K-Pt*ue,Ht=me*Pt-re*Ct;if(i){if(it<0||mt<0||Ht<0)return null}else if((it<0||mt<0||Ht<0)&&(it>0||mt>0||Ht>0))return null;let At=it+mt+Ht;if(At===0)return null;let Zt=nt*(it*U+mt*H+Ht*at);return(At>0?Zt<0:Zt>0)?null:this.at(Zt/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mn=class extends $n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nf=new oe,ws=new wr,Ga=new Gi,sf=new A,Wa=new A,Xa=new A,qa=new A,jh=new A,Ya=new A,rf=new A,$a=new A,Lt=class extends on{constructor(t=new Me,e=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Ya.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(jh.fromBufferAttribute(u,t),o?Ya.addScaledVector(jh,h):Ya.addScaledVector(jh.sub(e),h))}e.add(Ya)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(r),ws.copy(t.ray).recast(t.near),!(Ga.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Ga,sf)===null||ws.origin.distanceToSquared(sf)>(t.far-t.near)**2))&&(nf.copy(r).invert(),ws.copy(t.ray).applyMatrix4(nf),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ws)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,w=T;v<w;v+=3){let b=a.getX(v),C=a.getX(v+1),y=a.getX(v+2);i=Za(this,m,t,n,c,h,u,b,C,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=a.getX(g),T=a.getX(g+1),v=a.getX(g+2);i=Za(this,o,t,n,c,h,u,M,T,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,w=T;v<w;v+=3){let b=v,C=v+1,y=v+2;i=Za(this,m,t,n,c,h,u,b,C,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=g,T=g+1,v=g+2;i=Za(this,o,t,n,c,h,u,M,T,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Nm(s,t,e,n,i,r,o,a){let l;if(t.side===ln?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Jn,a),l===null)return null;$a.copy(a),$a.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo($a);return c<e.near||c>e.far?null:{distance:c,point:$a.clone(),object:s}}function Za(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Wa),s.getVertexPosition(l,Xa),s.getVertexPosition(c,qa);let h=Nm(s,t,e,n,Wa,Xa,qa,rf);if(h){let u=new A;Bi.getBarycoord(rf,Wa,Xa,qa,u),i&&(h.uv=Bi.getInterpolatedAttribute(i,a,l,c,u,new Y)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,a,l,c,u,new Y)),o&&(h.normal=Bi.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new A,materialIndex:0};Bi.getNormal(Wa,Xa,qa,d.normal),h.face=d,h.barycoord=u}return h}var Wi=class extends Cn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=je,h=je,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tr=class extends an{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ur=new oe,of=new oe,Ja=[],af=new Mi,Um=new oe,uo=new Lt,fo=new Gi,Ao=class extends Lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Um)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ur),af.copy(t.boundingBox).applyMatrix4(ur),this.boundingBox.union(af)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ur),fo.copy(t.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(fo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(uo.geometry=this.geometry,uo.material=this.material,uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(n),t.ray.intersectsSphere(fo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ur),of.multiplyMatrices(n,ur),uo.matrixWorld=of,uo.raycast(t,Ja);for(let o=0,a=Ja.length;o<a;o++){let l=Ja[o];l.instanceId=r,l.object=this,e.push(l)}Ja.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wi(new Float32Array(i*this.count),i,this.count,Zl,jn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ts=new Gi,km=new Y(.5,.5),Ka=new A,Er=class{constructor(t=new pn,e=new pn,n=new pn,i=new pn,r=new pn,o=new pn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],M=r[12],T=r[13],v=r[14],w=r[15];if(i[0].setComponents(c-o,f-h,m-p,w-M).normalize(),i[1].setComponents(c+o,f+h,m+p,w+M).normalize(),i[2].setComponents(c+a,f+u,m+x,w+T).normalize(),i[3].setComponents(c-a,f-u,m-x,w-T).normalize(),n)i[4].setComponents(l,d,g,v).normalize(),i[5].setComponents(c-l,f-d,m-g,w-v).normalize();else if(i[4].setComponents(c-l,f-d,m-g,w-v).normalize(),e===oi)i[5].setComponents(c+l,f+d,m+g,w+v).normalize();else if(e===xr)i[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){Ts.center.set(0,0,0);let e=km.distanceTo(t.center);return Ts.radius=.7071067811865476+e,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ka.x=i.normal.x>0?t.max.x:t.min.x,Ka.y=i.normal.y>0?t.max.y:t.min.y,Ka.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var yl=class extends $n{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lf=new oe,lu=new wr,ja=new Gi,Qa=new A,Ro=class extends on{constructor(t=new Me,e=new yl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(i),ja.radius+=r,t.ray.intersectsSphere(ja)===!1)return;lf.copy(i).invert(),lu.copy(t.ray).applyMatrix4(lf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);Qa.fromBufferAttribute(u,g),cf(Qa,g,l,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,x=f;p<x;p++)Qa.fromBufferAttribute(u,p),cf(Qa,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cf(s,t,e,n,i,r,o){let a=lu.distanceSqToPoint(s);if(a<e){let l=new A;lu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Co=class extends Cn{constructor(t=[],e=ds,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ai=class extends Cn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends Cn{constructor(t,e,n=di,i,r,o,a=je,l=je,c,h=vi,u=1){if(h!==vi&&h!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},_l=class extends Si{constructor(t,e=di,n=ds,i,r,o=je,a=je,l,c=vi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Po=class extends Cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},li=class s extends Me{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function p(x,g,m,M,T,v,w,b,C,y,E){let P=v/C,D=w/y,U=v/2,B=w/2,N=b/2,H=C+1,Z=y+1,$=0,at=0,z=new A;for(let tt=0;tt<Z;tt++){let nt=tt*D-B;for(let Ct=0;Ct<H;Ct++){let Pt=Ct*P-U;z[x]=Pt*M,z[g]=nt*T,z[m]=N,c.push(z.x,z.y,z.z),z[x]=0,z[g]=0,z[m]=b>0?1:-1,h.push(z.x,z.y,z.z),u.push(Ct/C),u.push(1-tt/y),$+=1}}for(let tt=0;tt<y;tt++)for(let nt=0;nt<C;nt++){let Ct=d+nt+H*tt,Pt=d+nt+H*(tt+1),me=d+(nt+1)+H*(tt+1),re=d+(nt+1)+H*tt;l.push(Ct,Pt,re),l.push(Pt,me,re),at+=6}a.addGroup(f,at,E),f+=at,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Cs=class s extends Me{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,p=n*2+r,x=i+1,g=new A,m=new A;for(let M=0;M<=p;M++){let T=0,v=0,w=0,b=0;if(M<=n){let E=M/n,P=E*Math.PI/2;v=-h-t*Math.cos(P),w=t*Math.sin(P),b=-t*Math.cos(P),T=E*u}else if(M<=n+r){let E=(M-n)/r;v=-h+E*e,w=t,b=0,T=u+E*d}else{let E=(M-n-r)/n,P=E*Math.PI/2;v=h+t*Math.sin(P),w=t*Math.cos(P),b=t*Math.sin(P),T=u+d+E*u}let C=Math.max(0,Math.min(1,T/f)),y=0;M===0?y=.5/i:M===p&&(y=-.5/i);for(let E=0;E<=i;E++){let P=E/i,D=P*Math.PI*2,U=Math.sin(D),B=Math.cos(D);m.x=-w*B,m.y=v,m.z=w*U,a.push(m.x,m.y,m.z),g.set(-w*B,b,w*U),g.normalize(),l.push(g.x,g.y,g.z),c.push(P+y,C)}if(M>0){let E=(M-1)*x;for(let P=0;P<i;P++){let D=E+P,U=E+P+1,B=M*x+P,N=M*x+P+1;o.push(D,U,B),o.push(U,N,B)}}}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ps=class s extends Me{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new A,h=new Y;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ci=class s extends Me{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],g=n/2,m=0;M(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function M(){let v=new A,w=new A,b=0,C=(e-t)/n;for(let y=0;y<=r;y++){let E=[],P=y/r,D=P*(e-t)+t;for(let U=0;U<=i;U++){let B=U/i,N=B*l+a,H=Math.sin(N),Z=Math.cos(N);w.x=D*H,w.y=-P*n+g,w.z=D*Z,u.push(w.x,w.y,w.z),v.set(H,C,Z).normalize(),d.push(v.x,v.y,v.z),f.push(B,1-P),E.push(p++)}x.push(E)}for(let y=0;y<i;y++)for(let E=0;E<r;E++){let P=x[E][y],D=x[E+1][y],U=x[E+1][y+1],B=x[E][y+1];(t>0||E!==0)&&(h.push(P,D,B),b+=3),(e>0||E!==r-1)&&(h.push(D,U,B),b+=3)}c.addGroup(m,b,0),m+=b}function T(v){let w=p,b=new Y,C=new A,y=0,E=v===!0?t:e,P=v===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,g*P,0),d.push(0,P,0),f.push(.5,.5),p++;let D=p;for(let U=0;U<=i;U++){let N=U/i*l+a,H=Math.cos(N),Z=Math.sin(N);C.x=E*Z,C.y=g*P,C.z=E*H,u.push(C.x,C.y,C.z),d.push(0,P,0),b.x=H*.5+.5,b.y=Z*.5*P+.5,f.push(b.x,b.y),p++}for(let U=0;U<i;U++){let B=w+U,N=D+U;v===!0?h.push(N,N+1,B):h.push(N+1,N,B),y+=3}c.addGroup(m,y,v===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Y:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new A,i=[],r=[],o=[],a=new A,l=new oe;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(fe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(fe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ar=class extends zn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Y){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},bl=class extends Ar{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Iu(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var hf=new A,uf=new A,Qh=new Iu,tu=new Iu,eu=new Iu,Ln=class extends zn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(uf.subVectors(i[0],i[1]).add(i[0]),c=uf);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(hf.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=hf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Qh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,g),tu.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,g),eu.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Qh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),tu.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),eu.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Qh.calc(l),tu.calc(l),eu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function df(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Fm(s,t){let e=1-s;return e*e*t}function Om(s,t){return 2*(1-s)*s*t}function zm(s,t){return s*s*t}function mo(s,t,e,n){return Fm(s,t)+Om(s,e)+zm(s,n)}function Bm(s,t){let e=1-s;return e*e*e*t}function Hm(s,t){let e=1-s;return 3*e*e*s*t}function Vm(s,t){return 3*(1-s)*s*s*t}function Gm(s,t){return s*s*s*t}function go(s,t,e,n,i){return Bm(s,t)+Hm(s,e)+Vm(s,n)+Gm(s,i)}var Io=class extends zn{constructor(t=new Y,e=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Y){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(go(t,i.x,r.x,o.x,a.x),go(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ml=class extends zn{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(go(t,i.x,r.x,o.x,a.x),go(t,i.y,r.y,o.y,a.y),go(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Do=class extends zn{constructor(t=new Y,e=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Y){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sl=class extends zn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends zn{constructor(t=new Y,e=new Y,n=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(mo(t,i.x,r.x,o.x),mo(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},No=class extends zn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(mo(t,i.x,r.x,o.x),mo(t,i.y,r.y,o.y),mo(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xi=class extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Y){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(df(a,l.x,c.x,h.x,u.x),df(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Y().fromArray(i))}return this}},wl=Object.freeze({__proto__:null,ArcCurve:bl,CatmullRomCurve3:Ln,CubicBezierCurve:Io,CubicBezierCurve3:Ml,EllipseCurve:Ar,LineCurve:Do,LineCurve3:Sl,QuadraticBezierCurve:Lo,QuadraticBezierCurve3:No,SplineCurve:Xi}),Tl=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new wl[i.type]().fromJSON(i))}return this}},wi=class extends Tl{constructor(t){super(),this.type="Path",this.currentPoint=new Y,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Do(this.currentPoint.clone(),new Y(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Lo(this.currentPoint.clone(),new Y(t,e),new Y(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Io(this.currentPoint.clone(),new Y(t,e),new Y(n,i),new Y(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Xi(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Ar(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Sn=class extends wi{constructor(t){super(t),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new wi().fromJSON(i))}return this}};function Wm(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=rp(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Zm(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,u=l;for(let d=e;d<i;d+=e){let f=s[d],p=s[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Uo(r,o,e,a,l,c,0),o}function rp(s,t,e,n,i){let r;if(i===og(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=ff(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=ff(o/n|0,s[o],s[o+1],r);return r&&Rr(r,r.next)&&(Fo(r),r=r.next),r}function Is(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Rr(e,e.next)||qe(e.prev,e,e.next)===0)){if(Fo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Uo(s,t,e,n,i,r,o){if(!s)return;!o&&r&&tg(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?qm(s,n,i,r):Xm(s)){t.push(l.i,s.i,c.i),Fo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Ym(Is(s),t),Uo(s,t,e,n,i,r,2)):o===2&&$m(s,t,e,n,i,r):Uo(Is(s),t,e,n,i,r,1);break}}}function Xm(s){let t=s.prev,e=s,n=s.next;if(qe(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&po(i,a,r,l,o,c,p.x,p.y)&&qe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function qm(s,t,e,n){let i=s.prev,r=s,o=s.next;if(qe(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),x=Math.max(a,l,c),g=Math.max(h,u,d),m=cu(f,p,t,e,n),M=cu(x,g,t,e,n),T=s.prevZ,v=s.nextZ;for(;T&&T.z>=m&&v&&v.z<=M;){if(T.x>=f&&T.x<=x&&T.y>=p&&T.y<=g&&T!==i&&T!==o&&po(a,h,l,u,c,d,T.x,T.y)&&qe(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&po(a,h,l,u,c,d,v.x,v.y)&&qe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=m;){if(T.x>=f&&T.x<=x&&T.y>=p&&T.y<=g&&T!==i&&T!==o&&po(a,h,l,u,c,d,T.x,T.y)&&qe(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&po(a,h,l,u,c,d,v.x,v.y)&&qe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ym(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Rr(n,i)&&ap(n,e,e.next,i)&&ko(n,i)&&ko(i,n)&&(t.push(n.i,e.i,i.i),Fo(e),Fo(e.next),e=s=i),e=e.next}while(e!==s);return Is(e)}function $m(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ig(o,a)){let l=lp(o,a);o=Is(o,o.next),l=Is(l,l.next),Uo(o,t,e,n,i,r,0),Uo(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Zm(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=rp(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(ng(c))}i.sort(Jm);for(let r=0;r<i.length;r++)e=Km(i[r],e);return e}function Jm(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Km(s,t){let e=jm(s,t);if(!e)return t;let n=lp(e,s);return Is(n,n.next),Is(e,e.next)}function jm(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(Rr(s,e))return e;do{if(Rr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&op(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);ko(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Qm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Qm(s,t){return qe(s.prev,s,t.prev)<0&&qe(t.next,s,s.next)<0}function tg(s,t,e,n){let i=s;do i.z===0&&(i.z=cu(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,eg(i)}function eg(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function cu(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ng(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function op(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function po(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&op(s,t,e,n,i,r,o,a)}function ig(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!sg(s,t)&&(ko(s,t)&&ko(t,s)&&rg(s,t)&&(qe(s.prev,s,t.prev)||qe(s,t.prev,t))||Rr(s,t)&&qe(s.prev,s,s.next)>0&&qe(t.prev,t,t.next)>0)}function qe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Rr(s,t){return s.x===t.x&&s.y===t.y}function ap(s,t,e,n){let i=el(qe(s,t,e)),r=el(qe(s,t,n)),o=el(qe(e,n,s)),a=el(qe(e,n,t));return!!(i!==r&&o!==a||i===0&&tl(s,e,t)||r===0&&tl(s,n,t)||o===0&&tl(e,s,n)||a===0&&tl(e,t,n))}function tl(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function el(s){return s>0?1:s<0?-1:0}function sg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&ap(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ko(s,t){return qe(s.prev,s,s.next)<0?qe(s,t,s.next)>=0&&qe(s,s.prev,t)>=0:qe(s,t,s.prev)<0||qe(s,s.next,t)<0}function rg(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function lp(s,t){let e=hu(s.i,s.x,s.y),n=hu(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ff(s,t,e,n){let i=hu(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Fo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function hu(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function og(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var uu=class{static triangulate(t,e,n=2){return Wm(t,e,n)}},Es=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];pf(t),mf(n,t);let o=t.length;e.forEach(pf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,mf(n,e[l]);let a=uu.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function pf(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function mf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Pn=class s extends Me{constructor(t=new Sn([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Kt(i,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:ag,T,v=!1,w,b,C,y;if(m){T=m.getSpacedPoints(h),v=!0,d=!1;let rt=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,rt),b=new A,C=new A,y=new A}d||(g=0,f=0,p=0,x=0);let E=a.extractPoints(c),P=E.shape,D=E.holes;if(!Es.isClockWise(P)){P=P.reverse();for(let rt=0,ct=D.length;rt<ct;rt++){let ut=D[rt];Es.isClockWise(ut)&&(D[rt]=ut.reverse())}}function B(rt){let ut=10000000000000001e-36,dt=rt[0];for(let pt=1;pt<=rt.length;pt++){let Xt=pt%rt.length,Vt=rt[Xt],Jt=Vt.x-dt.x,te=Vt.y-dt.y,k=Jt*Jt+te*te,xe=Math.max(Math.abs(Vt.x),Math.abs(Vt.y),Math.abs(dt.x),Math.abs(dt.y)),ae=ut*xe*xe;if(k<=ae){rt.splice(Xt,1),pt--;continue}dt=Vt}}B(P),D.forEach(B);let N=D.length,H=P;for(let rt=0;rt<N;rt++){let ct=D[rt];P=P.concat(ct)}function Z(rt,ct,ut){return ct||jt("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(ct,ut)}let $=P.length;function at(rt,ct,ut){let dt,pt,Xt,Vt=rt.x-ct.x,Jt=rt.y-ct.y,te=ut.x-rt.x,k=ut.y-rt.y,xe=Vt*Vt+Jt*Jt,ae=Vt*k-Jt*te;if(Math.abs(ae)>Number.EPSILON){let R=Math.sqrt(xe),_=Math.sqrt(te*te+k*k),V=ct.x-Jt/R,W=ct.y+Vt/R,j=ut.x-k/_,ft=ut.y+te/_,gt=((j-V)*k-(ft-W)*te)/(Vt*k-Jt*te);dt=V+Vt*gt-rt.x,pt=W+Jt*gt-rt.y;let Q=dt*dt+pt*pt;if(Q<=2)return new Y(dt,pt);Xt=Math.sqrt(Q/2)}else{let R=!1;Vt>Number.EPSILON?te>Number.EPSILON&&(R=!0):Vt<-Number.EPSILON?te<-Number.EPSILON&&(R=!0):Math.sign(Jt)===Math.sign(k)&&(R=!0),R?(dt=-Jt,pt=Vt,Xt=Math.sqrt(xe)):(dt=Vt,pt=Jt,Xt=Math.sqrt(xe/2))}return new Y(dt/Xt,pt/Xt)}let z=[];for(let rt=0,ct=H.length,ut=ct-1,dt=rt+1;rt<ct;rt++,ut++,dt++)ut===ct&&(ut=0),dt===ct&&(dt=0),z[rt]=at(H[rt],H[ut],H[dt]);let tt=[],nt,Ct=z.concat();for(let rt=0,ct=N;rt<ct;rt++){let ut=D[rt];nt=[];for(let dt=0,pt=ut.length,Xt=pt-1,Vt=dt+1;dt<pt;dt++,Xt++,Vt++)Xt===pt&&(Xt=0),Vt===pt&&(Vt=0),nt[dt]=at(ut[dt],ut[Xt],ut[Vt]);tt.push(nt),Ct=Ct.concat(nt)}let Pt;if(g===0)Pt=Es.triangulateShape(H,D);else{let rt=[],ct=[];for(let ut=0;ut<g;ut++){let dt=ut/g,pt=f*Math.cos(dt*Math.PI/2),Xt=p*Math.sin(dt*Math.PI/2)+x;for(let Vt=0,Jt=H.length;Vt<Jt;Vt++){let te=Z(H[Vt],z[Vt],Xt);mt(te.x,te.y,-pt),dt===0&&rt.push(te)}for(let Vt=0,Jt=N;Vt<Jt;Vt++){let te=D[Vt];nt=tt[Vt];let k=[];for(let xe=0,ae=te.length;xe<ae;xe++){let R=Z(te[xe],nt[xe],Xt);mt(R.x,R.y,-pt),dt===0&&k.push(R)}dt===0&&ct.push(k)}}Pt=Es.triangulateShape(rt,ct)}let me=Pt.length,re=p+x;for(let rt=0;rt<$;rt++){let ct=d?Z(P[rt],Ct[rt],re):P[rt];v?(C.copy(w.normals[0]).multiplyScalar(ct.x),b.copy(w.binormals[0]).multiplyScalar(ct.y),y.copy(T[0]).add(C).add(b),mt(y.x,y.y,y.z)):mt(ct.x,ct.y,0)}for(let rt=1;rt<=h;rt++)for(let ct=0;ct<$;ct++){let ut=d?Z(P[ct],Ct[ct],re):P[ct];v?(C.copy(w.normals[rt]).multiplyScalar(ut.x),b.copy(w.binormals[rt]).multiplyScalar(ut.y),y.copy(T[rt]).add(C).add(b),mt(y.x,y.y,y.z)):mt(ut.x,ut.y,u/h*rt)}for(let rt=g-1;rt>=0;rt--){let ct=rt/g,ut=f*Math.cos(ct*Math.PI/2),dt=p*Math.sin(ct*Math.PI/2)+x;for(let pt=0,Xt=H.length;pt<Xt;pt++){let Vt=Z(H[pt],z[pt],dt);mt(Vt.x,Vt.y,u+ut)}for(let pt=0,Xt=D.length;pt<Xt;pt++){let Vt=D[pt];nt=tt[pt];for(let Jt=0,te=Vt.length;Jt<te;Jt++){let k=Z(Vt[Jt],nt[Jt],dt);v?mt(k.x,k.y+T[h-1].y,T[h-1].x+ut):mt(k.x,k.y,u+ut)}}}ue(),K();function ue(){let rt=i.length/3;if(d){let ct=0,ut=$*ct;for(let dt=0;dt<me;dt++){let pt=Pt[dt];Ht(pt[2]+ut,pt[1]+ut,pt[0]+ut)}ct=h+g*2,ut=$*ct;for(let dt=0;dt<me;dt++){let pt=Pt[dt];Ht(pt[0]+ut,pt[1]+ut,pt[2]+ut)}}else{for(let ct=0;ct<me;ct++){let ut=Pt[ct];Ht(ut[2],ut[1],ut[0])}for(let ct=0;ct<me;ct++){let ut=Pt[ct];Ht(ut[0]+$*h,ut[1]+$*h,ut[2]+$*h)}}n.addGroup(rt,i.length/3-rt,0)}function K(){let rt=i.length/3,ct=0;it(H,ct),ct+=H.length;for(let ut=0,dt=D.length;ut<dt;ut++){let pt=D[ut];it(pt,ct),ct+=pt.length}n.addGroup(rt,i.length/3-rt,1)}function it(rt,ct){let ut=rt.length;for(;--ut>=0;){let dt=ut,pt=ut-1;pt<0&&(pt=rt.length-1);for(let Xt=0,Vt=h+g*2;Xt<Vt;Xt++){let Jt=$*Xt,te=$*(Xt+1),k=ct+dt+Jt,xe=ct+pt+Jt,ae=ct+pt+te,R=ct+dt+te;At(k,xe,ae,R)}}}function mt(rt,ct,ut){l.push(rt),l.push(ct),l.push(ut)}function Ht(rt,ct,ut){Zt(rt),Zt(ct),Zt(ut);let dt=i.length/3,pt=M.generateTopUV(n,i,dt-3,dt-2,dt-1);ve(pt[0]),ve(pt[1]),ve(pt[2])}function At(rt,ct,ut,dt){Zt(rt),Zt(ct),Zt(dt),Zt(ct),Zt(ut),Zt(dt);let pt=i.length/3,Xt=M.generateSideWallUV(n,i,pt-6,pt-3,pt-2,pt-1);ve(Xt[0]),ve(Xt[1]),ve(Xt[3]),ve(Xt[1]),ve(Xt[2]),ve(Xt[3])}function Zt(rt){i.push(l[rt*3+0]),i.push(l[rt*3+1]),i.push(l[rt*3+2])}function ve(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return lg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new wl[i.type]().fromJSON(i)),new s(n,t.options)}},ag={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Y(r,o),new Y(a,l),new Y(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],p=t[i*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Y(o,1-l),new Y(c,1-u),new Y(d,1-p),new Y(x,1-m)]:[new Y(a,1-l),new Y(h,1-u),new Y(f,1-p),new Y(g,1-m)]}};function lg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Zn=class s extends Me{constructor(t=[new Y(0,-.5),new Y(.5,0),new Y(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=fe(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new A,d=new Y,f=new A,p=new A,x=new A,g=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let M=0;M<=e;M++){let T=n+M*h*i,v=Math.sin(T),w=Math.cos(T);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*v,u.y=t[b].y,u.z=t[b].x*w,o.push(u.x,u.y,u.z),d.x=M/e,d.y=b/(t.length-1),a.push(d.x,d.y);let C=l[3*b+0]*v,y=l[3*b+1],E=l[3*b+0]*w;c.push(C,y,E)}}for(let M=0;M<e;M++)for(let T=0;T<t.length-1;T++){let v=T+M*t.length,w=v,b=v+t.length,C=v+t.length+1,y=v+1;r.push(w,b,y),r.push(C,y,b)}this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("uv",new Kt(a,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var hi=class s extends Me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*d-o;for(let T=0;T<c;T++){let v=T*u-r;p.push(v,-M,0),x.push(0,0,1),g.push(T/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let T=M+c*m,v=M+c*(m+1),w=M+1+c*(m+1),b=M+1+c*m;f.push(T,v,b),f.push(v,w,b)}this.setIndex(f),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Oo=class s extends Me{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new A,p=new Y;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<i;x++){let g=x*(n+1);for(let m=0;m<n;m++){let M=m+g,T=M,v=M+n+1,w=M+n+2,b=M+1;a.push(T,v,b),a.push(v,w,b)}}this.setIndex(a),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Nn=class s extends Me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new A,d=new A,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let M=[],T=m/n,v=o+T*a,w=t*Math.cos(v),b=Math.sqrt(t*t-w*w),C=0;m===0&&o===0?C=.5/e:m===n&&l===Math.PI&&(C=-.5/e);for(let y=0;y<=e;y++){let E=y/e,P=i+E*r;u.x=-b*Math.cos(P),u.y=w,u.z=b*Math.sin(P),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(E+C,1-T),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let T=h[m][M+1],v=h[m][M],w=h[m+1][M],b=h[m+1][M+1];(m!==0||o>0)&&f.push(T,v,b),(m!==n-1||l<Math.PI)&&f.push(v,w,b)}this.setIndex(f),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zo=class s extends Me{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new A,f=new A,p=new A;for(let x=0;x<=n;x++){let g=o+x/n*a;for(let m=0;m<=i;m++){let M=m/i*r;f.x=(t+e*Math.cos(g))*Math.cos(M),f.y=(t+e*Math.cos(g))*Math.sin(M),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(m/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){let m=(i+1)*x+g-1,M=(i+1)*(x-1)+g-1,T=(i+1)*(x-1)+g,v=(i+1)*x+g;l.push(m,M,v),l.push(M,T,v)}this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Bn=class s extends Me{constructor(t=new No(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,l=new A,c=new Y,h=new A,u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function x(){for(let T=0;T<e;T++)g(T);g(r===!1?e:0),M(),m()}function g(T){h=t.getPointAt(T/e,h);let v=o.normals[T],w=o.binormals[T];for(let b=0;b<=i;b++){let C=b/i*Math.PI*2,y=Math.sin(C),E=-Math.cos(C);l.x=E*v.x+y*w.x,l.y=E*v.y+y*w.y,l.z=E*v.z+y*w.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let T=1;T<=e;T++)for(let v=1;v<=i;v++){let w=(i+1)*(T-1)+(v-1),b=(i+1)*T+(v-1),C=(i+1)*T+v,y=(i+1)*(T-1)+v;p.push(w,b,y),p.push(b,C,y)}}function M(){for(let T=0;T<=e;T++)for(let v=0;v<=i;v++)c.x=T/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new wl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Fs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(gf(i))i.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(gf(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Tn(s){let t={};for(let e=0;e<s.length;e++){let n=Fs(s[e]);for(let i in n)t[i]=n[i]}return t}function gf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function cg(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Du(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var In={clone:Fs,merge:Tn},hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends $n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hg,this.fragmentShader=ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=cg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new bt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Y().fromArray(i.value);break;case"v3":this.uniforms[n].value=new A().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ue().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(i.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Cr=class extends Ae{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ke=class extends $n{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Bo=class extends $n{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},Ho=class extends $n{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Vl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},El=class extends $n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Al=class extends $n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function dr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function nu(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var os=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Rl=class extends os{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ru,endingEnd:ru}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ou:r=t,a=2*e-n;break;case au:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ou:o=t,l=2*n-e;break;case au:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,M=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,T=(-1-f)*g+(1.5+f)*x+.5*p,v=f*g-f*x;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+M*o[c+w]+T*o[l+w]+v*o[u+w];return r}},Cl=class extends os{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Pl=class extends os{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Il=class extends os{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(i-e),x=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=f*d+p*2,M=u[m],T=u[m+1],v=t*d+p*2,w=h[v],b=h[v+1],C=fg(n,e,M,w,i);r[p]=cp(C,x,T,b,g)}return r}};function cp(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function dg(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function fg(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=cp(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=dg(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Hn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=dr(e,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:dr(t.times,Array),values:dr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),nu(t.settings)&&(n.settings={inTangents:dr(t.settings.inTangents,Array),outTangents:dr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Il(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case xo:e=this.InterpolantFactoryMethodDiscrete;break;case pl:e=this.InterpolantFactoryMethodLinear;break;case sl:e=this.InterpolantFactoryMethodSmooth;break;case su:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return pl;case this.InterpolantFactoryMethodSmooth:return sl;case this.InterpolantFactoryMethodBezier:return su}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;nu(this.settings)&&(xf(this.settings.inTangents,t),xf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){jt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&gm(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===sl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,nu(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function xf(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=pl;var as=class extends Hn{constructor(t,e,n){super(t,e,n)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=xo;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends Hn{constructor(t,e,n,i){super(t,e,n,i)}};Dl.prototype.ValueTypeName="color";var Ll=class extends Hn{constructor(t,e,n,i){super(t,e,n,i)}};Ll.prototype.ValueTypeName="number";var Nl=class extends os{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)_i.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vo=class extends Hn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Nl(this.times,this.values,this.getValueSize(),t)}};Vo.prototype.ValueTypeName="quaternion";Vo.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Hn{constructor(t,e,n){super(t,e,n)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=xo;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends Hn{constructor(t,e,n,i){super(t,e,n,i)}};Ul.prototype.ValueTypeName="vector";var kl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hp=new kl,Fl=class{constructor(t){this.manager=t!==void 0?t:hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Fl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pr=class extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Go=class extends Pr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},iu=new oe,vf=new A,yf=new A,Wo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;vf.setFromMatrixPosition(t.matrixWorld),e.position.copy(vf),yf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){iu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(iu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===xr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(iu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},nl=new A,il=new _i,gi=new A,Xo=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(nl,il,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,gi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(nl,il,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rs=new A,_f=new Y,bf=new Y,mn=class extends Xo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ml*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ih*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(Ih*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,_f,bf),e.subVectors(bf,_f)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ih*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var du=class extends Wo{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}},cs=class extends Pr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new du}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},hs=class extends Xo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fu=class extends Wo{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ir=class extends Pr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new fu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var fr=-90,pr=1,Ol=class extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new mn(fr,pr,t,e);i.layers=this.layers,this.add(i);let r=new mn(fr,pr,t,e);r.layers=this.layers,this.add(r);let o=new mn(fr,pr,t,e);o.layers=this.layers,this.add(o);let a=new mn(fr,pr,t,e);a.layers=this.layers,this.add(a);let l=new mn(fr,pr,t,e);l.layers=this.layers,this.add(l);let c=new mn(fr,pr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},zl=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},qo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=pg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function pg(){this._document.hidden===!1&&this.reset()}var Lu="\\[\\]\\.:\\/",mg=new RegExp("["+Lu+"]","g"),Nu="[^"+Lu+"]",gg="[^"+Lu.replace("\\.","")+"]",xg=/((?:WC+[\/:])*)/.source.replace("WC",Nu),vg=/(WCOD+)?/.source.replace("WCOD",gg),yg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nu),_g=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nu),bg=new RegExp("^"+xg+vg+yg+_g+"$"),Mg=["material","materials","bones","map"],pu=class{constructor(t,e,n){let i=n||Be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Be=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mg,"")}static parseTrackName(t){let e=bg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Mg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Be.Composite=pu;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xb=new Float32Array(1);var Mf=new oe,qi=class{constructor(t,e,n=0,i=1/0){this.ray=new wr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new _r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Mf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mf),this}intersectObject(t,e=!0,n=[]){return mu(t,this,n,e),n.sort(Sf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)mu(t[i],this,n,e);return n.sort(Sf),n}};function Sf(s,t){return s.distance-t.distance}function mu(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)mu(r[o],t,e,!0)}}var Bu=class Bu{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Bu.prototype.isMatrix2=!0;var gu=Bu;function Uu(s,t,e,n){let i=Sg(n);switch(e){case Au:return s*t;case Zl:return s*t/i.components*i.byteLength;case Jl:return s*t/i.components*i.byteLength;case ps:return s*t*2/i.components*i.byteLength;case Kl:return s*t*2/i.components*i.byteLength;case Ru:return s*t*3/i.components*i.byteLength;case Un:return s*t*4/i.components*i.byteLength;case jl:return s*t*4/i.components*i.byteLength;case na:case ia:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case sa:case ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case tc:case nc:return Math.max(s,16)*Math.max(t,8)/4;case Ql:case ec:return Math.max(s,8)*Math.max(t,8)/2;case ic:case sc:case oc:case ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case rc:case oa:case lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case uc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case fc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case pc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case mc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case xc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case yc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case _c:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case bc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Sc:case wc:case Tc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ec:case Ac:return Math.ceil(s/4)*Math.ceil(t/4)*8;case aa:case Rc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sg(s){switch(s){case wn:case Su:return{byteLength:1,components:1};case Lr:case wu:case $e:return{byteLength:2,components:1};case Yl:case $l:return{byteLength:2,components:4};case di:case ql:case jn:return{byteLength:4,components:1};case Tu:case Eu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Dp(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Rg(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pg=`#ifdef USE_ALPHAHASH
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
#endif`,Ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ug=`#ifdef USE_AOMAP
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
#endif`,kg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fg=`#ifdef USE_BATCHING
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
#endif`,Og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vg=`#ifdef USE_IRIDESCENCE
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
#endif`,Gg=`#ifdef USE_BUMPMAP
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jg=`#define PI 3.141592653589793
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
} // validated`,Qg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tx=`vec3 transformedNormal = objectNormal;
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
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
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
#endif`,Ax=`uniform sampler2D dfgLUT;
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
}`,Rx=`
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
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ix=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zx=`#if defined( USE_POINTS_UV )
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
#endif`,Bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`#ifdef USE_MORPHTARGETS
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
#endif`,qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$x=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jx=`#ifdef USE_NORMALMAP
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
#endif`,Qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pv=`float getShadowMask() {
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
}`,mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gv=`#ifdef USE_SKINNING
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
#endif`,xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vv=`#ifdef USE_SKINNING
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
#endif`,yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sv=`#ifdef USE_TRANSMISSION
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
#endif`,wv=`#ifdef USE_TRANSMISSION
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
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pv=`uniform sampler2D t2D;
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
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`#include <common>
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
}`,kv=`#if DEPTH_PACKING == 3200
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
}`,Fv=`#define DISTANCE
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
}`,Ov=`#define DISTANCE
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
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`uniform float scale;
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
}`,Vv=`uniform vec3 diffuse;
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
}`,Gv=`#include <common>
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
}`,Wv=`uniform vec3 diffuse;
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
}`,Xv=`#define LAMBERT
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
}`,qv=`#define LAMBERT
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
}`,Yv=`#define MATCAP
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
}`,$v=`#define MATCAP
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
}`,Zv=`#define NORMAL
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
}`,Jv=`#define NORMAL
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
}`,Kv=`#define PHONG
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
}`,jv=`#define PHONG
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
}`,Qv=`#define STANDARD
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
}`,ty=`#define STANDARD
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
}`,ey=`#define TOON
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
}`,ny=`#define TOON
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
}`,iy=`uniform float size;
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
}`,sy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,oy=`uniform vec3 color;
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
}`,ay=`uniform float rotation;
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
}`,ly=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:Cg,alphahash_pars_fragment:Pg,alphamap_fragment:Ig,alphamap_pars_fragment:Dg,alphatest_fragment:Lg,alphatest_pars_fragment:Ng,aomap_fragment:Ug,aomap_pars_fragment:kg,batching_pars_vertex:Fg,batching_vertex:Og,begin_vertex:zg,beginnormal_vertex:Bg,bsdfs:Hg,iridescence_fragment:Vg,bumpmap_pars_fragment:Gg,clipping_planes_fragment:Wg,clipping_planes_pars_fragment:Xg,clipping_planes_pars_vertex:qg,clipping_planes_vertex:Yg,color_fragment:$g,color_pars_fragment:Zg,color_pars_vertex:Jg,color_vertex:Kg,common:jg,cube_uv_reflection_fragment:Qg,defaultnormal_vertex:tx,displacementmap_pars_vertex:ex,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:sx,colorspace_fragment:rx,colorspace_pars_fragment:ox,envmap_fragment:ax,envmap_common_pars_fragment:lx,envmap_pars_fragment:cx,envmap_pars_vertex:hx,envmap_physical_pars_fragment:bx,envmap_vertex:ux,fog_vertex:dx,fog_pars_vertex:fx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:gx,lightmap_pars_fragment:xx,lights_lambert_fragment:vx,lights_lambert_pars_fragment:yx,lights_pars_begin:_x,lights_toon_fragment:Mx,lights_toon_pars_fragment:Sx,lights_phong_fragment:wx,lights_phong_pars_fragment:Tx,lights_physical_fragment:Ex,lights_physical_pars_fragment:Ax,lights_fragment_begin:Rx,lights_fragment_maps:Cx,lights_fragment_end:Px,lightprobes_pars_fragment:Ix,logdepthbuf_fragment:Dx,logdepthbuf_pars_fragment:Lx,logdepthbuf_pars_vertex:Nx,logdepthbuf_vertex:Ux,map_fragment:kx,map_pars_fragment:Fx,map_particle_fragment:Ox,map_particle_pars_fragment:zx,metalnessmap_fragment:Bx,metalnessmap_pars_fragment:Hx,morphinstance_vertex:Vx,morphcolor_vertex:Gx,morphnormal_vertex:Wx,morphtarget_pars_vertex:Xx,morphtarget_vertex:qx,normal_fragment_begin:Yx,normal_fragment_maps:$x,normal_pars_fragment:Zx,normal_pars_vertex:Jx,normal_vertex:Kx,normalmap_pars_fragment:jx,clearcoat_normal_fragment_begin:Qx,clearcoat_normal_fragment_maps:tv,clearcoat_pars_fragment:ev,iridescence_pars_fragment:nv,opaque_fragment:iv,packing:sv,premultiplied_alpha_fragment:rv,project_vertex:ov,dithering_fragment:av,dithering_pars_fragment:lv,roughnessmap_fragment:cv,roughnessmap_pars_fragment:hv,shadowmap_pars_fragment:uv,shadowmap_pars_vertex:dv,shadowmap_vertex:fv,shadowmask_pars_fragment:pv,skinbase_vertex:mv,skinning_pars_vertex:gv,skinning_vertex:xv,skinnormal_vertex:vv,specularmap_fragment:yv,specularmap_pars_fragment:_v,tonemapping_fragment:bv,tonemapping_pars_fragment:Mv,transmission_fragment:Sv,transmission_pars_fragment:wv,uv_pars_fragment:Tv,uv_pars_vertex:Ev,uv_vertex:Av,worldpos_vertex:Rv,background_vert:Cv,background_frag:Pv,backgroundCube_vert:Iv,backgroundCube_frag:Dv,cube_vert:Lv,cube_frag:Nv,depth_vert:Uv,depth_frag:kv,distance_vert:Fv,distance_frag:Ov,equirect_vert:zv,equirect_frag:Bv,linedashed_vert:Hv,linedashed_frag:Vv,meshbasic_vert:Gv,meshbasic_frag:Wv,meshlambert_vert:Xv,meshlambert_frag:qv,meshmatcap_vert:Yv,meshmatcap_frag:$v,meshnormal_vert:Zv,meshnormal_frag:Jv,meshphong_vert:Kv,meshphong_frag:jv,meshphysical_vert:Qv,meshphysical_frag:ty,meshtoon_vert:ey,meshtoon_frag:ny,points_vert:iy,points_frag:sy,shadow_vert:ry,shadow_frag:oy,sprite_vert:ay,sprite_frag:ly},wt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Ri={basic:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Tn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Tn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new bt(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Tn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Tn([wt.points,wt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Tn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Tn([wt.common,wt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Tn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Tn([wt.sprite,wt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Tn([wt.common,wt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Tn([wt.lights,wt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ri.physical={uniforms:Tn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var Ic={r:0,b:0,g:0},cy=new oe,Lp=new ne;Lp.set(-1,0,0,0,1,0,0,0,1);function hy(s,t,e,n,i,r){let o=new bt(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let v=M.backgroundBlurriness>0;T=t.get(T,v)}return T}function p(M){let T=!1,v=f(M);v===null?g(o,a):v&&v.isColor&&(g(v,1),T=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,T){let v=f(T);v&&(v.isCubeTexture||v.mapping===ta)?(c===void 0&&(c=new Lt(new li(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:Fs(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cy.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lp),c.material.toneMapped=de.getTransfer(v.colorSpace)!==be,(h!==v||u!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Lt(new hi(2,2),new Ae({name:"BackgroundMaterial",uniforms:Fs(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=de.getTransfer(v.colorSpace)!==be,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,T){M.getRGB(Ic,Du(s)),e.buffers.color.setClear(Ic.r,Ic.g,Ic.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:p,addToRenderList:x,dispose:m}}function uy(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(D,U,B,N,H){let Z=!1,$=u(D,N,B,U);r!==$&&(r=$,c(r.object)),Z=f(D,N,B,H),Z&&p(D,N,B,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(D,U,B,N),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function u(D,U,B,N){let H=N.wireframe===!0,Z=n[U.id];Z===void 0&&(Z={},n[U.id]=Z);let $=D.isInstancedMesh===!0?D.id:0,at=Z[$];at===void 0&&(at={},Z[$]=at);let z=at[B.id];z===void 0&&(z={},at[B.id]=z);let tt=z[H];return tt===void 0&&(tt=d(l()),z[H]=tt),tt}function d(D){let U=[],B=[],N=[];for(let H=0;H<e;H++)U[H]=0,B[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:N,object:D,attributes:{},index:null}}function f(D,U,B,N){let H=r.attributes,Z=U.attributes,$=0,at=B.getAttributes();for(let z in at)if(at[z].location>=0){let nt=H[z],Ct=Z[z];if(Ct===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(Ct=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(Ct=D.instanceColor)),nt===void 0||nt.attribute!==Ct||Ct&&nt.data!==Ct.data)return!0;$++}return r.attributesNum!==$||r.index!==N}function p(D,U,B,N){let H={},Z=U.attributes,$=0,at=B.getAttributes();for(let z in at)if(at[z].location>=0){let nt=Z[z];nt===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor));let Ct={};Ct.attribute=nt,nt&&nt.data&&(Ct.data=nt.data),H[z]=Ct,$++}r.attributes=H,r.attributesNum=$,r.index=N}function x(){let D=r.newAttributes;for(let U=0,B=D.length;U<B;U++)D[U]=0}function g(D){m(D,0)}function m(D,U){let B=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;B[D]=1,N[D]===0&&(s.enableVertexAttribArray(D),N[D]=1),H[D]!==U&&(s.vertexAttribDivisor(D,U),H[D]=U)}function M(){let D=r.newAttributes,U=r.enabledAttributes;for(let B=0,N=U.length;B<N;B++)U[B]!==D[B]&&(s.disableVertexAttribArray(B),U[B]=0)}function T(D,U,B,N,H,Z,$){$===!0?s.vertexAttribIPointer(D,U,B,H,Z):s.vertexAttribPointer(D,U,B,N,H,Z)}function v(D,U,B,N){x();let H=N.attributes,Z=B.getAttributes(),$=U.defaultAttributeValues;for(let at in Z){let z=Z[at];if(z.location>=0){let tt=H[at];if(tt===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),tt!==void 0){let nt=tt.normalized,Ct=tt.itemSize,Pt=t.get(tt);if(Pt===void 0)continue;let me=Pt.buffer,re=Pt.type,ue=Pt.bytesPerElement,K=re===s.INT||re===s.UNSIGNED_INT||tt.gpuType===ql;if(tt.isInterleavedBufferAttribute){let it=tt.data,mt=it.stride,Ht=tt.offset;if(it.isInstancedInterleavedBuffer){for(let At=0;At<z.locationSize;At++)m(z.location+At,it.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let At=0;At<z.locationSize;At++)g(z.location+At);s.bindBuffer(s.ARRAY_BUFFER,me);for(let At=0;At<z.locationSize;At++)T(z.location+At,Ct/z.locationSize,re,nt,mt*ue,(Ht+Ct/z.locationSize*At)*ue,K)}else{if(tt.isInstancedBufferAttribute){for(let it=0;it<z.locationSize;it++)m(z.location+it,tt.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let it=0;it<z.locationSize;it++)g(z.location+it);s.bindBuffer(s.ARRAY_BUFFER,me);for(let it=0;it<z.locationSize;it++)T(z.location+it,Ct/z.locationSize,re,nt,Ct*ue,Ct/z.locationSize*it*ue,K)}}else if($!==void 0){let nt=$[at];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(z.location,nt);break;case 3:s.vertexAttrib3fv(z.location,nt);break;case 4:s.vertexAttrib4fv(z.location,nt);break;default:s.vertexAttrib1fv(z.location,nt)}}}}M()}function w(){E();for(let D in n){let U=n[D];for(let B in U){let N=U[B];for(let H in N){let Z=N[H];for(let $ in Z)h(Z[$].object),delete Z[$];delete N[H]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let U=n[D.id];for(let B in U){let N=U[B];for(let H in N){let Z=N[H];for(let $ in Z)h(Z[$].object),delete Z[$];delete N[H]}}delete n[D.id]}function C(D){for(let U in n){let B=n[U];for(let N in B){let H=B[N];if(H[D.id]===void 0)continue;let Z=H[D.id];for(let $ in Z)h(Z[$].object),delete Z[$];delete H[D.id]}}}function y(D){for(let U in n){let B=n[U],N=D.isInstancedMesh===!0?D.id:0,H=B[N];if(H!==void 0){for(let Z in H){let $=H[Z];for(let at in $)h($[at].object),delete $[at];delete H[Z]}delete B[N],Object.keys(B).length===0&&delete n[U]}}}function E(){P(),o=!0,r!==i&&(r=i,c(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function dy(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function fy(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==Un&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let y=C===$e&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==wn&&C!==jn&&!y&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:v,maxSamples:w,samples:b}}function py(s){let t=this,e=null,n=0,i=!1,r=!1,o=new pn,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,T=M*4,v=m.clippingState||null;l.value=v,v=h(p,d,T,f);for(let w=0;w!==T;++w)v[w]=e[w];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,v=f;T!==x;++T,v+=4)o.copy(u[T]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var kr=4,my=6,gy=20,xy=256,la=new hs,up=new bt,Hu=null,Vu=0,Gu=0,Wu=!1,vy=new A,Os=new A,Or=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=vy}=r;Hu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Hu,Vu,Gu),this._renderer.xr.enabled=Wu,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:$e,format:Un,colorSpace:vo,depthBuffer:!1},i=dp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yy(r)),this._blurMaterial=by(r,t,e),this._ggxMaterial=_y(r,t,e)}return i}_compileMaterial(t){let e=new Lt(new Me,t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,i,r){let l=new mn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(up),u.toneMapping=ui,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new li,new Mn({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,m=!0):(g.color.copy(up),m=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):v===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let w=this._cubeSize;Ur(i,v*w,T>2?w:0,w,w),u.setRenderTarget(i),m&&u.render(x,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ds||t.mapping===ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fp());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,la)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-kr?n-p+kr:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Ur(r,g,m,3*x,2*x),i.setRenderTarget(r),i.render(a,la),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Ur(t,g,m,3*x,2*x),i.setRenderTarget(t),i.render(a,la)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-kr?i-this._lodMax+kr:0),d=4*(this._cubeSize-h);Ur(e,u,d,3*h,2*h),o.setRenderTarget(e),o.render(l,la)}};function yy(s){let t=[],e=[],n=s,i=s-kr+1+my;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,p=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let m=0;m<u;m++){let M=m%3*2/3-1,T=m>2?0:-1,v=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];p.set(v,f*d*m);for(let w=0;w<d;w++){let b=h[w*2]*2-1,C=h[w*2+1]*2-1;m===0?Os.set(1,C,b):m===1?Os.set(-b,1,-C):m===2?Os.set(-b,C,1):m===3?Os.set(-1,C,-b):m===4?Os.set(-b,-1,C):Os.set(b,C,-1),Os.toArray(x,(m*d+w)*f)}}let g=new Me;g.setAttribute("position",new an(p,f)),g.setAttribute("outputDirection",new an(x,f)),e.push(new Lt(g,null)),n>kr&&n--}return{lodMeshes:e,sizeLods:t}}function dp(s,t,e){let n=new He(s,t,e);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function _y(s,t,e){return new Ae({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function by(s,t,e){return new Ae({name:"SphericalGaussianBlur",defines:{SAMPLES:gy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function fp(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function pp(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qe,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Lc=class extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Co(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new li(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Qe});r.uniforms.tEquirect.value=e;let o=new Lt(i,r),a=e.minFilter;return e.minFilter===Ti&&(e.minFilter=gn),new Ol(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function My(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Gl||f===Wl)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new Lc(p.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===Gl||f===Wl,x=f===ds||f===ks;if(p||x){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Or(s)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return p&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new Or(s)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function a(d,f){return f===Gl?d.mapping=ds:f===Wl&&(d.mapping=ks),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Sy(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&As("WebGLRenderer: "+n+" extension not supported."),i}}}function wy(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let T=0,v=M.length;T<v;T+=3){let w=M[T+0],b=M[T+1],C=M[T+2];d.push(w,b,b,C,C,w)}}else{let M=p.array;x=p.version;for(let T=0,v=M.length/3-1;T<v;T+=3){let w=T+0,b=T+1,C=T+2;d.push(w,b,b,C,C,w)}}let g=new(p.count>=65535?wo:So)(d,1);g.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ty(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ey(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:jt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ay(s,t,e){let n=new WeakMap,i=new Ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let E=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;f===!0&&(T=1),p===!0&&(T=2),x===!0&&(T=3);let v=a.attributes.position.count*T,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*w*4*u),C=new Mo(b,v,w,u);C.type=jn,C.needsUpdate=!0;let y=T*4;for(let P=0;P<u;P++){let D=g[P],U=m[P],B=M[P],N=v*w*4*P;for(let H=0;H<D.count;H++){let Z=H*y;f===!0&&(i.fromBufferAttribute(D,H),b[N+Z+0]=i.x,b[N+Z+1]=i.y,b[N+Z+2]=i.z,b[N+Z+3]=0),p===!0&&(i.fromBufferAttribute(U,H),b[N+Z+4]=i.x,b[N+Z+5]=i.y,b[N+Z+6]=i.z,b[N+Z+7]=0),x===!0&&(i.fromBufferAttribute(B,H),b[N+Z+8]=i.x,b[N+Z+9]=i.y,b[N+Z+10]=i.z,b[N+Z+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new Y(v,w)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ry(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Cy={[Zo]:"LINEAR_TONE_MAPPING",[Jo]:"REINHARD_TONE_MAPPING",[Ko]:"CINEON_TONE_MAPPING",[jo]:"ACES_FILMIC_TONE_MAPPING",[Ns]:"AGX_TONE_MAPPING",[Us]:"NEUTRAL_TONE_MAPPING",[Qo]:"CUSTOM_TONE_MAPPING"};function Py(s,t,e,n,i,r){let o=new He(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Me;c.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Kt([0,2,0,0,2,0],2));let h=new Cr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Lt(c,h),d=new hs(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,M=[],T=!1;this.setSize=function(v,w){o.setSize(v,w),a!==null&&a.setSize(v,w),l!==null&&l.setSize(v,w);for(let b=0;b<M.length;b++){let C=M[b];C.setSize&&C.setSize(v,w)}},this.setEffects=function(v){M=v,T=M.length>0&&M[0].isRenderPass===!0;let w=o.width,b=o.height;M.length>0&&a===null&&(a=new He(w,b,{type:$e,depthBuffer:!1,stencilBuffer:!1}),l=new He(w,b,{type:$e,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){let y=M[C];y.setSize&&y.setSize(w,b)}},this.begin=function(v,w){if(x||v.toneMapping===ui&&M.length===0)return!1;if(m=w,w!==null){let b=w.width,C=w.height;(o.width!==b||o.height!==C)&&this.setSize(b,C)}return T===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=ui,!0},this.hasRenderPass=function(){return T},this.end=function(v,w){v.toneMapping=g,x=!0;let b=o,C=a;for(let y=0;y<M.length;y++){let E=M[y];E.enabled!==!1&&(E.render(v,C,b,w),E.needsSwap!==!1&&(b=C,C=C===a?l:a))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},de.getTransfer(f)===be&&(h.defines.SRGB_TRANSFER="");let y=Cy[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(m),v.render(u,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Np=new Cn,Yu=new Si(1,1),Up=new Mo,kp=new vl,Fp=new Co,mp=[],gp=[],xp=new Float32Array(16),vp=new Float32Array(9),yp=new Float32Array(4);function zr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=mp[i];if(r===void 0&&(r=new Float32Array(i),mp[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function cn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function hn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function kc(s,t){let e=gp[t];e===void 0&&(e=new Int32Array(t),gp[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Iy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Dy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;s.uniform2fv(this.addr,t),hn(e,t)}}function Ly(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;s.uniform3fv(this.addr,t),hn(e,t)}}function Ny(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;s.uniform4fv(this.addr,t),hn(e,t)}}function Uy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;yp.set(n),s.uniformMatrix2fv(this.addr,!1,yp),hn(e,n)}}function ky(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;vp.set(n),s.uniformMatrix3fv(this.addr,!1,vp),hn(e,n)}}function Fy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;xp.set(n),s.uniformMatrix4fv(this.addr,!1,xp),hn(e,n)}}function Oy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;s.uniform2iv(this.addr,t),hn(e,t)}}function By(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;s.uniform3iv(this.addr,t),hn(e,t)}}function Hy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;s.uniform4iv(this.addr,t),hn(e,t)}}function Vy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Gy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;s.uniform2uiv(this.addr,t),hn(e,t)}}function Wy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;s.uniform3uiv(this.addr,t),hn(e,t)}}function Xy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;s.uniform4uiv(this.addr,t),hn(e,t)}}function qy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Yu.compareFunction=e.isReversedDepthBuffer()?Pc:Cc,r=Yu):r=Np,e.setTexture2D(t||r,i)}function Yy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||kp,i)}function $y(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Fp,i)}function Zy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Up,i)}function Jy(s){switch(s){case 5126:return Iy;case 35664:return Dy;case 35665:return Ly;case 35666:return Ny;case 35674:return Uy;case 35675:return ky;case 35676:return Fy;case 5124:case 35670:return Oy;case 35667:case 35671:return zy;case 35668:case 35672:return By;case 35669:case 35673:return Hy;case 5125:return Vy;case 36294:return Gy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return Zy}}function Ky(s,t){s.uniform1fv(this.addr,t)}function jy(s,t){let e=zr(t,this.size,2);s.uniform2fv(this.addr,e)}function Qy(s,t){let e=zr(t,this.size,3);s.uniform3fv(this.addr,e)}function t_(s,t){let e=zr(t,this.size,4);s.uniform4fv(this.addr,e)}function e_(s,t){let e=zr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function n_(s,t){let e=zr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function i_(s,t){let e=zr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function s_(s,t){s.uniform1iv(this.addr,t)}function r_(s,t){s.uniform2iv(this.addr,t)}function o_(s,t){s.uniform3iv(this.addr,t)}function a_(s,t){s.uniform4iv(this.addr,t)}function l_(s,t){s.uniform1uiv(this.addr,t)}function c_(s,t){s.uniform2uiv(this.addr,t)}function h_(s,t){s.uniform3uiv(this.addr,t)}function u_(s,t){s.uniform4uiv(this.addr,t)}function d_(s,t,e){let n=this.cache,i=t.length,r=kc(e,i);cn(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Yu:o=Np;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function f_(s,t,e){let n=this.cache,i=t.length,r=kc(e,i);cn(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||kp,r[o])}function p_(s,t,e){let n=this.cache,i=t.length,r=kc(e,i);cn(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Fp,r[o])}function m_(s,t,e){let n=this.cache,i=t.length,r=kc(e,i);cn(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Up,r[o])}function g_(s){switch(s){case 5126:return Ky;case 35664:return jy;case 35665:return Qy;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return o_;case 35669:case 35673:return a_;case 5125:return l_;case 36294:return c_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}var $u=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jy(e.type)}},Zu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g_(e.type)}},Ju=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Xu=/(\w+)(\])?(\[|\.)?/g;function _p(s,t){s.seq.push(t),s.map[t.id]=t}function x_(s,t,e){let n=s.name,i=n.length;for(Xu.lastIndex=0;;){let r=Xu.exec(n),o=Xu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){_p(e,c===void 0?new $u(a,s,t):new Zu(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Ju(a),_p(e,u)),e=u}}}var Fr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);x_(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function bp(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var v_=37297,y_=0;function __(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Mp=new ne;function b_(s){de._getMatrix(Mp,de.workingColorSpace,s);let t=`mat3( ${Mp.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(s)){case yo:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Sp(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+__(s.getShaderSource(t),a)}else return r}function M_(s,t){let e=b_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var S_={[Zo]:"Linear",[Jo]:"Reinhard",[Ko]:"Cineon",[jo]:"ACESFilmic",[Ns]:"AgX",[Us]:"Neutral",[Qo]:"Custom"};function w_(s,t){let e=S_[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Dc=new A;function T_(){de.getLuminanceCoefficients(Dc);let s=Dc.x.toFixed(4),t=Dc.y.toFixed(4),e=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function A_(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function R_(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ha(s){return s!==""}function wp(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tp(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ku(s){return s.replace(C_,I_)}var P_=new Map;function I_(s,t){let e=he[t];if(e===void 0){let n=P_.get(t);if(n!==void 0)e=he[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ku(e)}var D_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ep(s){return s.replace(D_,L_)}function L_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ap(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var N_={[Ds]:"SHADOWMAP_TYPE_PCF",[Dr]:"SHADOWMAP_TYPE_VSM"};function U_(s){return N_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var k_={[ds]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE_UV"};function F_(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":k_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var O_={[ks]:"ENVMAP_MODE_REFRACTION"};function z_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":O_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var B_={[Vl]:"ENVMAP_BLENDING_MULTIPLY",[Hf]:"ENVMAP_BLENDING_MIX",[Vf]:"ENVMAP_BLENDING_ADD"};function H_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":B_[s.combine]||"ENVMAP_BLENDING_NONE"}function V_(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function G_(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=U_(e),c=F_(e),h=z_(e),u=H_(e),d=V_(e),f=E_(e),p=A_(r),x=i.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ha).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ha).join(`
`),m.length>0&&(m+=`
`)):(g=[Ap(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),m=[Ap(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?he.tonemapping_pars_fragment:"",e.toneMapping!==ui?w_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,M_("linearToOutputTexel",e.outputColorSpace),T_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ha).join(`
`)),o=Ku(o),o=wp(o,e),o=Tp(o,e),a=Ku(a),a=wp(a,e),a=Tp(a,e),o=Ep(o),a=Ep(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let T=M+g+o,v=M+m+a,w=bp(i,i.VERTEX_SHADER,T),b=bp(i,i.FRAGMENT_SHADER,v);i.attachShader(x,w),i.attachShader(x,b),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(D){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(x)||"",B=i.getShaderInfoLog(w)||"",N=i.getShaderInfoLog(b)||"",H=U.trim(),Z=B.trim(),$=N.trim(),at=!0,z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(at=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,w,b);else{let tt=Sp(i,w,"vertex"),nt=Sp(i,b,"fragment");jt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+tt+`
`+nt)}else H!==""?Qt("WebGLProgram: Program Info Log:",H):(Z===""||$==="")&&(z=!1);z&&(D.diagnostics={runnable:at,programLog:H,vertexShader:{log:Z,prefix:g},fragmentShader:{log:$,prefix:m}})}i.deleteShader(w),i.deleteShader(b),y=new Fr(i,x),E=R_(i,x)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(x,v_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=y_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=b,this}var W_=0,ju=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qu(t),e.set(t,n)),n}},Qu=class{constructor(t){this.id=W_++,this.code=t,this.usedTimes=0}};function X_(s){return s===ps||s===oa||s===aa}function q_(s,t,e,n,i,r){let o=new _r,a=new ju,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,E,P,D,U,B){let N=D.fog,H=U.geometry,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,$=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,at=t.get(y.envMap||Z,$),z=at&&at.mapping===ta?at.image.height:null,tt=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Qt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let nt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ct=nt!==void 0?nt.length:0,Pt=0;H.morphAttributes.position!==void 0&&(Pt=1),H.morphAttributes.normal!==void 0&&(Pt=2),H.morphAttributes.color!==void 0&&(Pt=3);let me,re,ue,K;if(tt){let Le=Ri[tt];me=Le.vertexShader,re=Le.fragmentShader}else{me=y.vertexShader,re=y.fragmentShader;let Le=a.getVertexShaderStage(y),we=a.getFragmentShaderStage(y);a.update(y,Le,we),ue=Le.id,K=we.id}let it=s.getRenderTarget(),mt=s.state.buffers.depth.getReversed(),Ht=U.isInstancedMesh===!0,At=U.isBatchedMesh===!0,Zt=!!y.map,ve=!!y.matcap,rt=!!at,ct=!!y.aoMap,ut=!!y.lightMap,dt=!!y.bumpMap&&y.wireframe===!1,pt=!!y.normalMap,Xt=!!y.displacementMap,Vt=!!y.emissiveMap,Jt=!!y.metalnessMap,te=!!y.roughnessMap,k=y.anisotropy>0,xe=y.clearcoat>0,ae=y.dispersion>0,R=y.retroreflectivity>0,_=y.iridescence>0,V=y.sheen>0,W=y.transmission>0,j=k&&!!y.anisotropyMap,ft=xe&&!!y.clearcoatMap,gt=xe&&!!y.clearcoatNormalMap,Q=xe&&!!y.clearcoatRoughnessMap,ot=_&&!!y.iridescenceMap,yt=_&&!!y.iridescenceThicknessMap,zt=V&&!!y.sheenColorMap,vt=V&&!!y.sheenRoughnessMap,xt=!!y.specularMap,Nt=!!y.specularColorMap,Gt=!!y.specularIntensityMap,ee=W&&!!y.transmissionMap,O=W&&!!y.thicknessMap,Mt=!!y.gradientMap,st=!!y.alphaMap,St=y.alphaTest>0,Rt=!!y.alphaHash,lt=!!y.extensions,Wt=ui;y.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Wt=s.toneMapping);let Ot={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:me,fragmentShader:re,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:At,batchingColor:At&&U._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&U.instanceColor!==null,instancingMorph:Ht&&U.morphTexture!==null,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Zt,matcap:ve,envMap:rt,envMapMode:rt&&at.mapping,envMapCubeUVHeight:z,aoMap:ct,lightMap:ut,bumpMap:dt,normalMap:pt,displacementMap:Xt,emissiveMap:Vt,normalMapObjectSpace:pt&&y.normalMapType===Xf,normalMapTangentSpace:pt&&y.normalMapType===Nr,packedNormalMap:pt&&y.normalMapType===Nr&&X_(y.normalMap.format),metalnessMap:Jt,roughnessMap:te,anisotropy:k,anisotropyMap:j,clearcoat:xe,clearcoatMap:ft,clearcoatNormalMap:gt,clearcoatRoughnessMap:Q,dispersion:ae,retroreflection:R,iridescence:_,iridescenceMap:ot,iridescenceThicknessMap:yt,sheen:V,sheenColorMap:zt,sheenRoughnessMap:vt,specularMap:xt,specularColorMap:Nt,specularIntensityMap:Gt,transmission:W,transmissionMap:ee,thicknessMap:O,gradientMap:Mt,opaque:y.transparent===!1&&y.blending===us&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:St,alphaHash:Rt,combine:y.combine,mapUv:Zt&&p(y.map.channel),aoMapUv:ct&&p(y.aoMap.channel),lightMapUv:ut&&p(y.lightMap.channel),bumpMapUv:dt&&p(y.bumpMap.channel),normalMapUv:pt&&p(y.normalMap.channel),displacementMapUv:Xt&&p(y.displacementMap.channel),emissiveMapUv:Vt&&p(y.emissiveMap.channel),metalnessMapUv:Jt&&p(y.metalnessMap.channel),roughnessMapUv:te&&p(y.roughnessMap.channel),anisotropyMapUv:j&&p(y.anisotropyMap.channel),clearcoatMapUv:ft&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:gt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:vt&&p(y.sheenRoughnessMap.channel),specularMapUv:xt&&p(y.specularMap.channel),specularColorMapUv:Nt&&p(y.specularColorMap.channel),specularIntensityMapUv:Gt&&p(y.specularIntensityMap.channel),transmissionMapUv:ee&&p(y.transmissionMap.channel),thicknessMapUv:O&&p(y.thicknessMap.channel),alphaMapUv:st&&p(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(pt||k),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Zt||st),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&pt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Pt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Zt&&y.map.isVideoTexture===!0&&de.getTransfer(y.map.colorSpace)===be,decodeVideoTextureEmissive:Vt&&y.emissiveMap.isVideoTexture===!0&&de.getTransfer(y.emissiveMap.colorSpace)===be,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fn,flipSided:y.side===ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:lt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&y.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function g(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)E.push(P),E.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(m(E,y),M(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function m(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function T(y){let E=f[y.type],P;if(E){let D=Ri[E];P=In.clone(D.uniforms)}else P=y.uniforms;return P}function v(y,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new G_(s,E,y,i),c.push(P),h.set(E,P)),P}function w(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:T,acquireProgram:v,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:C}}function Y_(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function $_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Rp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Cp(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,g,m){let M=s[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},s[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=p,M.materialVariant=o(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=g,M.group=m),t++,M}function l(d,f,p,x,g,m,M){M.reversedDepth===!0&&(g=-g);let T=a(d,f,p,x,g,m);p.transmission>0?n.push(T):p.transparent===!0?i.push(T):e.push(T)}function c(d,f,p,x,g,m){let M=a(d,f,p,x,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||$_),n.length>1&&n.sort(f||Rp),i.length>1&&i.sort(f||Rp)}function u(){for(let d=t,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Z_(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Cp,s.set(n,[o])):i>=r.length?(o=new Cp,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function J_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new bt};break;case"SpotLight":e={position:new A,direction:new A,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function K_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var j_=0;function Q_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function t1(s){let t=new J_,e=K_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let i=new A,r=new oe,o=new oe;function a(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,M=0,T=0,v=0,w=0,b=0,C=0,y=0,E=0,P=0;c.sort(Q_);for(let U=0,B=c.length;U<B;U++){let N=c[U],H=N.color,Z=N.intensity,$=N.distance,at=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ps?at=N.shadow.map.texture:at=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=H.r*Z,u+=H.g*Z,d+=H.b*Z;else if(N.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(N.sh.coefficients[z],Z);P++}else if(N.isSunLight){let z=t.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let tt=N.shadow,nt=e.get(N);nt.shadowIntensity=tt.intensity,nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[p]=nt,n.sunShadowMap[p]=at;let Ct=tt.getViewportCount();for(let Pt=0;Pt<Ct;Pt++)n.sunShadowMatrix[x+Pt]=tt.getMatrix(Pt),n.sunShadowCascade[x+Pt]=tt._cascadeData[Pt];x+=Ct,p++}n.sun[f]=z,f++}else if(N.isDirectionalLight){let z=t.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let tt=N.shadow,nt=e.get(N);nt.shadowIntensity=tt.intensity,nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,n.directionalShadow[g]=nt,n.directionalShadowMap[g]=at,n.directionalShadowMatrix[g]=N.shadow.matrix,w++}n.directional[g]=z,g++}else if(N.isSpotLight){let z=t.get(N);z.position.setFromMatrixPosition(N.matrixWorld),z.color.copy(H).multiplyScalar(Z),z.distance=$,z.coneCos=Math.cos(N.angle),z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),z.decay=N.decay,n.spot[M]=z;let tt=N.shadow;if(N.map&&(n.spotLightMap[y]=N.map,y++,tt.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[M]=tt.matrix,N.castShadow){let nt=e.get(N);nt.shadowIntensity=tt.intensity,nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,n.spotShadow[M]=nt,n.spotShadowMap[M]=at,C++}M++}else if(N.isRectAreaLight){let z=t.get(N);z.color.copy(H).multiplyScalar(Z),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),n.rectArea[T]=z,T++}else if(N.isPointLight){let z=t.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),z.distance=N.distance,z.decay=N.decay,N.castShadow){let tt=N.shadow,nt=e.get(N);nt.shadowIntensity=tt.intensity,nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,nt.shadowCameraNear=tt.camera.near,nt.shadowCameraFar=tt.camera.far,n.pointShadow[m]=nt,n.pointShadowMap[m]=at,n.pointShadowMatrix[m]=N.shadow.matrix,b++}n.point[m]=z,m++}else if(N.isHemisphereLight){let z=t.get(N);z.skyColor.copy(N.color).multiplyScalar(Z),z.groundColor.copy(N.groundColor).multiplyScalar(Z),n.hemi[v]=z,v++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==m||D.spotLength!==M||D.rectAreaLength!==T||D.hemiLength!==v||D.numSunShadows!==p||D.numDirectionalShadows!==w||D.numPointShadows!==b||D.numSpotShadows!==C||D.numSpotMaps!==y||D.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=T,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,D.sunLength=f,D.directionalLength=g,D.pointLength=m,D.spotLength=M,D.rectAreaLength=T,D.hemiLength=v,D.numSunShadows=p,D.numDirectionalShadows=w,D.numPointShadows=b,D.numSpotShadows=C,D.numSpotMaps=y,D.numLightProbes=P,n.version=j_++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let v=c[M];if(v.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),d++}else if(v.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Pp(s){let t=new t1(s),e=[],n=[],i=[];function r(d){u.camera=d,e.length=0,n.length=0,i.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){i.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function e1(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Pp(s),t.set(i,[a])):r>=o.length?(a=new Pp(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var n1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i1=`uniform sampler2D shadow_pass;
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
}`,s1=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],r1=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Ip=new oe,ca=new A,qu=new A;function o1(s,t,e){let n=new Er,i=new Y,r=new Y,o=new Ue,a=new El,l=new Al,c={},h=e.maxTextureSize,u={[Jn]:ln,[ln]:Jn,[fn]:fn},d=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:n1,fragmentShader:i1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Me;p.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Lt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ds;let m=this.type;this.render=function(b,C,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Ef&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ds);let E=s.getRenderTarget(),P=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Qe),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let B=m!==this.type;B&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(H=>H.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,H=b.length;N<H;N++){let Z=b[N],$=Z.shadow;if($===void 0){Qt("WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);let at=$.getFrameExtents();i.multiply(at),r.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/at.x),i.x=r.x*at.x,$.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/at.y),i.y=r.y*at.y,$.mapSize.y=r.y));let z=s.state.buffers.depth.getReversed();if($.camera._reversedDepth=z,$.map===null||B===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Dr){if(Z.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new He(i.x,i.y,{format:ps,type:$e,minFilter:gn,magFilter:gn,generateMipmaps:!1}),$.map.texture.name=Z.name+".shadowMap",$.map.depthTexture=new Si(i.x,i.y,jn),$.map.depthTexture.name=Z.name+".shadowMapDepth",$.map.depthTexture.format=vi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=je,$.map.depthTexture.magFilter=je}else Z.isPointLight?($.map=new Lc(i.x),$.map.depthTexture=new _l(i.x,di)):($.map=new He(i.x,i.y),$.map.depthTexture=new Si(i.x,i.y,di)),$.map.depthTexture.name=Z.name+".shadowMap",$.map.depthTexture.format=vi,this.type===Ds?($.map.depthTexture.compareFunction=z?Pc:Cc,$.map.depthTexture.minFilter=gn,$.map.depthTexture.magFilter=gn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=je,$.map.depthTexture.magFilter=je);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==i.x||$.map.height!==i.y)&&$.map.setSize(i.x,i.y);let tt=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();Z.isPointLight!==!0&&$.updateMatrices(Z,y);for(let nt=0;nt<tt;nt++){let Ct=$.getCamera(nt);if(Z.isPointLight){let Pt=$.camera,me=$.matrix,re=Z.distance||Pt.far;re!==Pt.far&&(Pt.far=re,Pt.updateProjectionMatrix()),ca.setFromMatrixPosition(Z.matrixWorld),Pt.position.copy(ca),qu.copy(Pt.position),qu.add(s1[nt]),Pt.up.copy(r1[nt]),Pt.lookAt(qu),Pt.updateMatrixWorld(),me.makeTranslation(-ca.x,-ca.y,-ca.z),Ip.multiplyMatrices(Pt.projectionMatrix,Pt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Ip,Pt.coordinateSystem,Pt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,nt),s.clear();else{nt===0&&(s.setRenderTarget($.map),s.clear());let Pt=$.getViewport(nt);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),U.viewport(o)}n=$.getFrustum(nt),v(C,y,Ct,Z,this.type)}$.isPointLightShadow!==!0&&this.type===Dr&&M($,y),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(E,P,D)};function M(b,C){let y=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new He(i.x,i.y,{format:ps,type:$e}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(C,null,y,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(C,null,y,f,x,null)}function T(b,C,y,E){let P=null,D=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)P=D;else if(P=y.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let U=P.uuid,B=C.uuid,N=c[U];N===void 0&&(N={},c[U]=N);let H=N[B];H===void 0&&(H=P.clone(),N[B]=H,C.addEventListener("dispose",w)),P=H}if(P.visible=C.visible,P.wireframe=C.wireframe,E===Dr?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:u[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=s.properties.get(P);U.light=y}return P}function v(b,C,y,E,P){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===Dr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let B=t.update(b),N=b.material;if(Array.isArray(N)){let H=B.groups;for(let Z=0,$=H.length;Z<$;Z++){let at=H[Z],z=N[at.materialIndex];if(z&&z.visible){let tt=T(b,z,E,P);b.onBeforeShadow(s,b,C,y,B,tt,at),s.renderBufferDirect(y,null,B,tt,b,at),b.onAfterShadow(s,b,C,y,B,tt,at)}}}else if(N.visible){let H=T(b,N,E,P);b.onBeforeShadow(s,b,C,y,B,H,null),s.renderBufferDirect(y,null,B,H,b,null),b.onAfterShadow(s,b,C,y,B,H,null)}}let U=b.children;for(let B=0,N=U.length;B<N;B++)v(U[B],C,y,E,P)}function w(b){b.target.removeEventListener("dispose",w);for(let y in c){let E=c[y],P=b.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function a1(s,t){function e(){let O=!1,Mt=new Ue,st=null,St=new Ue(0,0,0,0);return{setMask:function(Rt){st!==Rt&&!O&&(s.colorMask(Rt,Rt,Rt,Rt),st=Rt)},setLocked:function(Rt){O=Rt},setClear:function(Rt,lt,Wt,Ot,Le){Le===!0&&(Rt*=Ot,lt*=Ot,Wt*=Ot),Mt.set(Rt,lt,Wt,Ot),St.equals(Mt)===!1&&(s.clearColor(Rt,lt,Wt,Ot),St.copy(Mt))},reset:function(){O=!1,st=null,St.set(-1,0,0,0)}}}function n(){let O=!1,Mt=!1,st=null,St=null,Rt=null;return{setReversed:function(lt){if(Mt!==lt){let Wt=t.get("EXT_clip_control");lt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Mt=lt;let Ot=Rt;Rt=null,this.setClear(Ot)}},getReversed:function(){return Mt},setTest:function(lt){lt?it(s.DEPTH_TEST):mt(s.DEPTH_TEST)},setMask:function(lt){st!==lt&&!O&&(s.depthMask(lt),st=lt)},setFunc:function(lt){if(Mt&&(lt=np[lt]),St!==lt){switch(lt){case ol:s.depthFunc(s.NEVER);break;case al:s.depthFunc(s.ALWAYS);break;case ll:s.depthFunc(s.LESS);break;case gr:s.depthFunc(s.LEQUAL);break;case cl:s.depthFunc(s.EQUAL);break;case hl:s.depthFunc(s.GEQUAL);break;case ul:s.depthFunc(s.GREATER);break;case dl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}St=lt}},setLocked:function(lt){O=lt},setClear:function(lt){Rt!==lt&&(Rt=lt,Mt&&(lt=1-lt),s.clearDepth(lt))},reset:function(){O=!1,st=null,St=null,Rt=null,Mt=!1}}}function i(){let O=!1,Mt=null,st=null,St=null,Rt=null,lt=null,Wt=null,Ot=null,Le=null;return{setTest:function(we){O||(we?it(s.STENCIL_TEST):mt(s.STENCIL_TEST))},setMask:function(we){Mt!==we&&!O&&(s.stencilMask(we),Mt=we)},setFunc:function(we,ni,pi){(st!==we||St!==ni||Rt!==pi)&&(s.stencilFunc(we,ni,pi),st=we,St=ni,Rt=pi)},setOp:function(we,ni,pi){(lt!==we||Wt!==ni||Ot!==pi)&&(s.stencilOp(we,ni,pi),lt=we,Wt=ni,Ot=pi)},setLocked:function(we){O=we},setClear:function(we){Le!==we&&(s.clearStencil(we),Le=we)},reset:function(){O=!1,Mt=null,st=null,St=null,Rt=null,lt=null,Wt=null,Ot=null,Le=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,M=null,T=null,v=null,w=null,b=null,C=null,y=new bt(0,0,0),E=0,P=!1,D=null,U=null,B=null,N=null,H=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,at=0,z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(z)[1]),$=at>=1):z.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),$=at>=2);let tt=null,nt={},Ct=s.getParameter(s.SCISSOR_BOX),Pt=s.getParameter(s.VIEWPORT),me=new Ue().fromArray(Ct),re=new Ue().fromArray(Pt);function ue(O,Mt,st,St){let Rt=new Uint8Array(4),lt=s.createTexture();s.bindTexture(O,lt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<st;Wt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(Mt,0,s.RGBA,1,1,St,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(Mt+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return lt}let K={};K[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(s.DEPTH_TEST),o.setFunc(gr),dt(!1),pt(xu),it(s.CULL_FACE),ct(Qe);function it(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function mt(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Ht(O,Mt){return d[O]!==Mt?(s.bindFramebuffer(O,Mt),d[O]=Mt,O===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Mt),O===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Mt),!0):!1}function At(O,Mt){let st=p,St=!1;if(O){st=f.get(Mt),st===void 0&&(st=[],f.set(Mt,st));let Rt=O.textures;if(st.length!==Rt.length||st[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Wt=Rt.length;lt<Wt;lt++)st[lt]=s.COLOR_ATTACHMENT0+lt;st.length=Rt.length,St=!0}}else st[0]!==s.BACK&&(st[0]=s.BACK,St=!0);St&&s.drawBuffers(st)}function Zt(O){return x!==O?(s.useProgram(O),x=O,!0):!1}let ve={[Kn]:s.FUNC_ADD,[Af]:s.FUNC_SUBTRACT,[Rf]:s.FUNC_REVERSE_SUBTRACT};ve[Cf]=s.MIN,ve[Pf]=s.MAX;let rt={[Ls]:s.ZERO,[If]:s.ONE,[Df]:s.SRC_COLOR,[_u]:s.SRC_ALPHA,[kf]:s.SRC_ALPHA_SATURATE,[$o]:s.DST_COLOR,[Yo]:s.DST_ALPHA,[Lf]:s.ONE_MINUS_SRC_COLOR,[bu]:s.ONE_MINUS_SRC_ALPHA,[Uf]:s.ONE_MINUS_DST_COLOR,[Nf]:s.ONE_MINUS_DST_ALPHA,[Ff]:s.CONSTANT_COLOR,[Of]:s.ONE_MINUS_CONSTANT_COLOR,[zf]:s.CONSTANT_ALPHA,[Bf]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(O,Mt,st,St,Rt,lt,Wt,Ot,Le,we){if(O===Qe){g===!0&&(mt(s.BLEND),g=!1);return}if(g===!1&&(it(s.BLEND),g=!0),O!==Hl){if(O!==m||we!==P){if((M!==Kn||w!==Kn)&&(s.blendEquation(s.FUNC_ADD),M=Kn,w=Kn),we)switch(O){case us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yi:s.blendFunc(s.ONE,s.ONE);break;case vu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:jt("WebGLState: Invalid blending: ",O);break}else switch(O){case us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case vu:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yu:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",O);break}T=null,v=null,b=null,C=null,y.set(0,0,0),E=0,m=O,P=we}return}Rt=Rt||Mt,lt=lt||st,Wt=Wt||St,(Mt!==M||Rt!==w)&&(s.blendEquationSeparate(ve[Mt],ve[Rt]),M=Mt,w=Rt),(st!==T||St!==v||lt!==b||Wt!==C)&&(s.blendFuncSeparate(rt[st],rt[St],rt[lt],rt[Wt]),T=st,v=St,b=lt,C=Wt),(Ot.equals(y)===!1||Le!==E)&&(s.blendColor(Ot.r,Ot.g,Ot.b,Le),y.copy(Ot),E=Le),m=O,P=!1}function ut(O,Mt){O.side===fn?mt(s.CULL_FACE):it(s.CULL_FACE);let st=O.side===ln;Mt&&(st=!st),dt(st),O.blending===us&&O.transparent===!1?ct(Qe):ct(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let St=O.stencilWrite;a.setTest(St),St&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Vt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(O){D!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),D=O)}function pt(O){O!==wf?(it(s.CULL_FACE),O!==U&&(O===xu?s.cullFace(s.BACK):O===Tf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):mt(s.CULL_FACE),U=O}function Xt(O){O!==B&&($&&s.lineWidth(O),B=O)}function Vt(O,Mt,st){O?(it(s.POLYGON_OFFSET_FILL),(N!==Mt||H!==st)&&(N=Mt,H=st,o.getReversed()&&(Mt=-Mt),s.polygonOffset(Mt,st))):mt(s.POLYGON_OFFSET_FILL)}function Jt(O){O?it(s.SCISSOR_TEST):mt(s.SCISSOR_TEST)}function te(O){O===void 0&&(O=s.TEXTURE0+Z-1),tt!==O&&(s.activeTexture(O),tt=O)}function k(O,Mt,st){st===void 0&&(tt===null?st=s.TEXTURE0+Z-1:st=tt);let St=nt[st];St===void 0&&(St={type:void 0,texture:void 0},nt[st]=St),(St.type!==O||St.texture!==Mt)&&(tt!==st&&(s.activeTexture(st),tt=st),s.bindTexture(O,Mt||K[O]),St.type=O,St.texture=Mt)}function xe(){let O=nt[tt];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ae(){try{s.compressedTexImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function _(){try{s.texSubImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function V(){try{s.texSubImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function j(){try{s.compressedTexSubImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function ft(){try{s.texStorage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function gt(){try{s.texStorage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function Q(){try{s.texImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function ot(){try{s.texImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function yt(O){return u[O]!==void 0?u[O]:s.getParameter(O)}function zt(O,Mt){u[O]!==Mt&&(s.pixelStorei(O,Mt),u[O]=Mt)}function vt(O){me.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),me.copy(O))}function xt(O){re.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Nt(O,Mt){let st=c.get(Mt);st===void 0&&(st=new WeakMap,c.set(Mt,st));let St=st.get(O);St===void 0&&(St=s.getUniformBlockIndex(Mt,O.name),st.set(O,St))}function Gt(O,Mt){let St=c.get(Mt).get(O);l.get(Mt)!==St&&(s.uniformBlockBinding(Mt,St,O.__bindingPointIndex),l.set(Mt,St))}function ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},tt=null,nt={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,M=null,T=null,v=null,w=null,b=null,C=null,y=new bt(0,0,0),E=0,P=!1,D=null,U=null,B=null,N=null,H=null,me.set(0,0,s.canvas.width,s.canvas.height),re.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:mt,bindFramebuffer:Ht,drawBuffers:At,useProgram:Zt,setBlending:ct,setMaterial:ut,setFlipSided:dt,setCullFace:pt,setLineWidth:Xt,setPolygonOffset:Vt,setScissorTest:Jt,activeTexture:te,bindTexture:k,unbindTexture:xe,compressedTexImage2D:ae,compressedTexImage3D:R,texImage2D:Q,texImage3D:ot,pixelStorei:zt,getParameter:yt,updateUBOMapping:Nt,uniformBlockBinding:Gt,texStorage2D:ft,texStorage3D:gt,texSubImage2D:_,texSubImage3D:V,compressedTexSubImage2D:W,compressedTexSubImage3D:j,scissor:vt,viewport:xt,reset:ee}}function l1(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Y,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,_){return p?new OffscreenCanvas(R,_):_o("canvas")}function g(R,_,V){let W=1,j=ae(R);if((j.width>V||j.height>V)&&(W=V/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ft=Math.floor(W*j.width),gt=Math.floor(W*j.height);d===void 0&&(d=x(ft,gt));let Q=_?x(ft,gt):d;return Q.width=ft,Q.height=gt,Q.getContext("2d").drawImage(R,0,0,ft,gt),Qt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ft+"x"+gt+")."),Q}else return"data"in R&&Qt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps}function M(R){s.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(R,_,V,W,j,ft=!1){if(R!==null){if(s[R]!==void 0)return s[R];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let gt;W&&(gt=t.get("EXT_texture_norm16"),gt||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=_;if(_===s.RED&&(V===s.FLOAT&&(Q=s.R32F),V===s.HALF_FLOAT&&(Q=s.R16F),V===s.UNSIGNED_BYTE&&(Q=s.R8),V===s.UNSIGNED_SHORT&&gt&&(Q=gt.R16_EXT),V===s.SHORT&&gt&&(Q=gt.R16_SNORM_EXT)),_===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(Q=s.R8UI),V===s.UNSIGNED_SHORT&&(Q=s.R16UI),V===s.UNSIGNED_INT&&(Q=s.R32UI),V===s.BYTE&&(Q=s.R8I),V===s.SHORT&&(Q=s.R16I),V===s.INT&&(Q=s.R32I)),_===s.RG&&(V===s.FLOAT&&(Q=s.RG32F),V===s.HALF_FLOAT&&(Q=s.RG16F),V===s.UNSIGNED_BYTE&&(Q=s.RG8),V===s.UNSIGNED_SHORT&&gt&&(Q=gt.RG16_EXT),V===s.SHORT&&gt&&(Q=gt.RG16_SNORM_EXT)),_===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(Q=s.RG8UI),V===s.UNSIGNED_SHORT&&(Q=s.RG16UI),V===s.UNSIGNED_INT&&(Q=s.RG32UI),V===s.BYTE&&(Q=s.RG8I),V===s.SHORT&&(Q=s.RG16I),V===s.INT&&(Q=s.RG32I)),_===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),V===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),V===s.UNSIGNED_INT&&(Q=s.RGB32UI),V===s.BYTE&&(Q=s.RGB8I),V===s.SHORT&&(Q=s.RGB16I),V===s.INT&&(Q=s.RGB32I)),_===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),V===s.UNSIGNED_INT&&(Q=s.RGBA32UI),V===s.BYTE&&(Q=s.RGBA8I),V===s.SHORT&&(Q=s.RGBA16I),V===s.INT&&(Q=s.RGBA32I)),_===s.RGB&&(V===s.UNSIGNED_SHORT&&gt&&(Q=gt.RGB16_EXT),V===s.SHORT&&gt&&(Q=gt.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),_===s.RGBA){let ot=ft?yo:de.getTransfer(j);V===s.FLOAT&&(Q=s.RGBA32F),V===s.HALF_FLOAT&&(Q=s.RGBA16F),V===s.UNSIGNED_BYTE&&(Q=ot===be?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&gt&&(Q=gt.RGBA16_EXT),V===s.SHORT&&gt&&(Q=gt.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function w(R,_){let V;return R?_===null||_===di||_===fs?V=s.DEPTH24_STENCIL8:_===jn?V=s.DEPTH32F_STENCIL8:_===Lr&&(V=s.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===di||_===fs?V=s.DEPTH_COMPONENT24:_===jn?V=s.DEPTH_COMPONENT32F:_===Lr&&(V=s.DEPTH_COMPONENT16),V}function b(R,_){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==je&&R.minFilter!==gn?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function C(R){let _=R.target;_.removeEventListener("dispose",C),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&u.delete(_)}function y(R){let _=R.target;_.removeEventListener("dispose",y),D(_)}function E(R){let _=n.get(R);if(_.__webglInit===void 0)return;let V=R.source,W=f.get(V);if(W){let j=W[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(R),Object.keys(W).length===0&&f.delete(V)}n.remove(R)}function P(R){let _=n.get(R);s.deleteTexture(_.__webglTexture);let V=R.source,W=f.get(V);delete W[_.__cacheKey],o.memory.textures--}function D(R){let _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let j=0;j<_.__webglFramebuffer[W].length;j++)s.deleteFramebuffer(_.__webglFramebuffer[W][j]);else s.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)s.deleteFramebuffer(_.__webglFramebuffer[W]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let V=R.textures;for(let W=0,j=V.length;W<j;W++){let ft=n.get(V[W]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(V[W])}n.remove(R)}let U=0;function B(){U=0}function N(){return U}function H(R){U=R}function Z(){let R=U;return R>=i.maxTextures&&Qt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,R}function $(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function at(R,_){let V=n.get(R);if(R.isVideoTexture&&k(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let W=R.image;if(W===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(V,R,_);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+_)}function z(R,_){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){mt(V,R,_);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+_)}function tt(R,_){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){mt(V,R,_);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+_)}function nt(R,_){let V=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){Ht(V,R,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+_)}let Ct={[Yn]:s.REPEAT,[qn]:s.CLAMP_TO_EDGE,[fl]:s.MIRRORED_REPEAT},Pt={[je]:s.NEAREST,[Gf]:s.NEAREST_MIPMAP_NEAREST,[ea]:s.NEAREST_MIPMAP_LINEAR,[gn]:s.LINEAR,[Xl]:s.LINEAR_MIPMAP_NEAREST,[Ti]:s.LINEAR_MIPMAP_LINEAR},me={[Yf]:s.NEVER,[jf]:s.ALWAYS,[$f]:s.LESS,[Cc]:s.LEQUAL,[Zf]:s.EQUAL,[Pc]:s.GEQUAL,[Jf]:s.GREATER,[Kf]:s.NOTEQUAL};function re(R,_){if(_.type===jn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===gn||_.magFilter===Xl||_.magFilter===ea||_.magFilter===Ti||_.minFilter===gn||_.minFilter===Xl||_.minFilter===ea||_.minFilter===Ti)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Ct[_.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Ct[_.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Ct[_.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Pt[_.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Pt[_.minFilter]),_.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,me[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===je||_.minFilter!==ea&&_.minFilter!==Ti||_.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ue(R,_){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",C));let W=_.source,j=f.get(W);j===void 0&&(j={},f.set(W,j));let ft=$(_);if(ft!==R.__cacheKey){j[ft]===void 0&&(j[ft]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),j[ft].usedTimes++;let gt=j[R.__cacheKey];gt!==void 0&&(j[R.__cacheKey].usedTimes--,gt.usedTimes===0&&P(_)),R.__cacheKey=ft,R.__webglTexture=j[ft].texture}return V}function K(R,_,V){return Math.floor(Math.floor(R/V)/_)}function it(R,_,V,W){let ft=R.updateRanges;if(ft.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,V,W,_.data);else{ft.sort((zt,vt)=>zt.start-vt.start);let gt=0;for(let zt=1;zt<ft.length;zt++){let vt=ft[gt],xt=ft[zt],Nt=vt.start+vt.count,Gt=K(xt.start,_.width,4),ee=K(vt.start,_.width,4);xt.start<=Nt+1&&Gt===ee&&K(xt.start+xt.count-1,_.width,4)===Gt?vt.count=Math.max(vt.count,xt.start+xt.count-vt.start):(++gt,ft[gt]=xt)}ft.length=gt+1;let Q=e.getParameter(s.UNPACK_ROW_LENGTH),ot=e.getParameter(s.UNPACK_SKIP_PIXELS),yt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let zt=0,vt=ft.length;zt<vt;zt++){let xt=ft[zt],Nt=Math.floor(xt.start/4),Gt=Math.ceil(xt.count/4),ee=Nt%_.width,O=Math.floor(Nt/_.width),Mt=Gt,st=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(s.UNPACK_SKIP_ROWS,O),e.texSubImage2D(s.TEXTURE_2D,0,ee,O,Mt,st,V,W,_.data)}R.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(s.UNPACK_SKIP_ROWS,yt)}}function mt(R,_,V){let W=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=s.TEXTURE_3D);let j=ue(R,_),ft=_.source;e.bindTexture(W,R.__webglTexture,s.TEXTURE0+V);let gt=n.get(ft);if(ft.version!==gt.__version||j===!0){if(e.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let st=de.getPrimaries(de.workingColorSpace),St=_.colorSpace===fi?null:de.getPrimaries(_.colorSpace),Rt=_.colorSpace===fi||st===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment);let ot=g(_.image,!1,i.maxTextureSize);ot=xe(_,ot);let yt=r.convert(_.format,_.colorSpace),zt=r.convert(_.type),vt=v(_.internalFormat,yt,zt,_.normalized,_.colorSpace,_.isVideoTexture);re(W,_);let xt,Nt=_.mipmaps,Gt=_.isVideoTexture!==!0,ee=gt.__version===void 0||j===!0,O=ft.dataReady,Mt=b(_,ot);if(_.isDepthTexture)vt=w(_.format===Ei,_.type),ee&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,vt,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,vt,ot.width,ot.height,0,yt,zt,null));else if(_.isDataTexture)if(Nt.length>0){Gt&&ee&&e.texStorage2D(s.TEXTURE_2D,Mt,vt,Nt[0].width,Nt[0].height);for(let st=0,St=Nt.length;st<St;st++)xt=Nt[st],Gt?O&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,xt.width,xt.height,yt,zt,xt.data):e.texImage2D(s.TEXTURE_2D,st,vt,xt.width,xt.height,0,yt,zt,xt.data);_.generateMipmaps=!1}else Gt?(ee&&e.texStorage2D(s.TEXTURE_2D,Mt,vt,ot.width,ot.height),O&&it(_,ot,yt,zt)):e.texImage2D(s.TEXTURE_2D,0,vt,ot.width,ot.height,0,yt,zt,ot.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Gt&&ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,vt,Nt[0].width,Nt[0].height,ot.depth);for(let st=0,St=Nt.length;st<St;st++)if(xt=Nt[st],_.format!==Un)if(yt!==null)if(Gt){if(O)if(_.layerUpdates.size>0){let Rt=Uu(xt.width,xt.height,_.format,_.type);for(let lt of _.layerUpdates){let Wt=xt.data.subarray(lt*Rt/xt.data.BYTES_PER_ELEMENT,(lt+1)*Rt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,lt,xt.width,xt.height,1,yt,Wt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,xt.width,xt.height,ot.depth,yt,xt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,vt,xt.width,xt.height,ot.depth,0,xt.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,xt.width,xt.height,ot.depth,yt,zt,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,vt,xt.width,xt.height,ot.depth,0,yt,zt,xt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Gt&&ee&&e.texStorage2D(s.TEXTURE_2D,Mt,vt,Nt[0].width,Nt[0].height);for(let st=0,St=Nt.length;st<St;st++)xt=Nt[st],_.format!==Un?yt!==null?Gt?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,xt.width,xt.height,yt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,st,vt,xt.width,xt.height,0,xt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?O&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,xt.width,xt.height,yt,zt,xt.data):e.texImage2D(s.TEXTURE_2D,st,vt,xt.width,xt.height,0,yt,zt,xt.data)}else if(_.isDataArrayTexture)if(Gt){if(ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,vt,ot.width,ot.height,ot.depth),O)if(_.layerUpdates.size>0){let st=Uu(ot.width,ot.height,_.format,_.type);for(let St of _.layerUpdates){let Rt=ot.data.subarray(St*st/ot.data.BYTES_PER_ELEMENT,(St+1)*st/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,St,ot.width,ot.height,1,yt,zt,Rt)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,yt,zt,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,ot.width,ot.height,ot.depth,0,yt,zt,ot.data);else if(_.isData3DTexture)Gt?(ee&&e.texStorage3D(s.TEXTURE_3D,Mt,vt,ot.width,ot.height,ot.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,yt,zt,ot.data)):e.texImage3D(s.TEXTURE_3D,0,vt,ot.width,ot.height,ot.depth,0,yt,zt,ot.data);else if(_.isFramebufferTexture){if(ee)if(Gt)e.texStorage2D(s.TEXTURE_2D,Mt,vt,ot.width,ot.height);else{let st=ot.width,St=ot.height;for(let Rt=0;Rt<Mt;Rt++)e.texImage2D(s.TEXTURE_2D,Rt,vt,st,St,0,yt,zt,null),st>>=1,St>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in s){let st=s.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),ot.parentNode!==st){st.appendChild(ot),u.add(_),st.onpaint=St=>{let Rt=St.changedElements;for(let lt of u)Rt.includes(lt.image)&&(lt.needsUpdate=!0)},st.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ot);else{let Rt=s.RGBA,lt=s.RGBA,Wt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Rt,lt,Wt,ot)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Gt&&ee){let st=ae(Nt[0]);e.texStorage2D(s.TEXTURE_2D,Mt,vt,st.width,st.height)}for(let st=0,St=Nt.length;st<St;st++)xt=Nt[st],Gt?O&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,yt,zt,xt):e.texImage2D(s.TEXTURE_2D,st,vt,yt,zt,xt);_.generateMipmaps=!1}else if(Gt){if(ee){let st=ae(ot);e.texStorage2D(s.TEXTURE_2D,Mt,vt,st.width,st.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,zt,ot)}else e.texImage2D(s.TEXTURE_2D,0,vt,yt,zt,ot);m(_)&&M(W),gt.__version=ft.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ht(R,_,V){if(_.image.length!==6)return;let W=ue(R,_),j=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+V);let ft=n.get(j);if(j.version!==ft.__version||W===!0){e.activeTexture(s.TEXTURE0+V);let gt=de.getPrimaries(de.workingColorSpace),Q=_.colorSpace===fi?null:de.getPrimaries(_.colorSpace),ot=_.colorSpace===fi||gt===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let yt=_.isCompressedTexture||_.image[0].isCompressedTexture,zt=_.image[0]&&_.image[0].isDataTexture,vt=[];for(let lt=0;lt<6;lt++)!yt&&!zt?vt[lt]=g(_.image[lt],!0,i.maxCubemapSize):vt[lt]=zt?_.image[lt].image:_.image[lt],vt[lt]=xe(_,vt[lt]);let xt=vt[0],Nt=r.convert(_.format,_.colorSpace),Gt=r.convert(_.type),ee=v(_.internalFormat,Nt,Gt,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,Mt=ft.__version===void 0||W===!0,st=j.dataReady,St=b(_,xt);re(s.TEXTURE_CUBE_MAP,_);let Rt;if(yt){O&&Mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,St,ee,xt.width,xt.height);for(let lt=0;lt<6;lt++){Rt=vt[lt].mipmaps;for(let Wt=0;Wt<Rt.length;Wt++){let Ot=Rt[Wt];_.format!==Un?Nt!==null?O?st&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Wt,0,0,Ot.width,Ot.height,Nt,Ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Wt,ee,Ot.width,Ot.height,0,Ot.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Wt,0,0,Ot.width,Ot.height,Nt,Gt,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Wt,ee,Ot.width,Ot.height,0,Nt,Gt,Ot.data)}}}else{if(Rt=_.mipmaps,O&&Mt){Rt.length>0&&St++;let lt=ae(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,St,ee,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(zt){O?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,vt[lt].width,vt[lt].height,Nt,Gt,vt[lt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ee,vt[lt].width,vt[lt].height,0,Nt,Gt,vt[lt].data);for(let Wt=0;Wt<Rt.length;Wt++){let Le=Rt[Wt].image[lt].image;O?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Wt+1,0,0,Le.width,Le.height,Nt,Gt,Le.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Wt+1,ee,Le.width,Le.height,0,Nt,Gt,Le.data)}}else{O?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Nt,Gt,vt[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ee,Nt,Gt,vt[lt]);for(let Wt=0;Wt<Rt.length;Wt++){let Ot=Rt[Wt];O?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Wt+1,0,0,Nt,Gt,Ot.image[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Wt+1,ee,Nt,Gt,Ot.image[lt])}}}m(_)&&M(s.TEXTURE_CUBE_MAP),ft.__version=j.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function At(R,_,V,W,j,ft){let gt=r.convert(V.format,V.colorSpace),Q=r.convert(V.type),ot=v(V.internalFormat,gt,Q,V.normalized,V.colorSpace),yt=n.get(_),zt=n.get(V);if(zt.__renderTarget=_,!yt.__hasExternalTextures){let vt=Math.max(1,_.width>>ft),xt=Math.max(1,_.height>>ft);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,ft,ot,vt,xt,_.depth,0,gt,Q,null):e.texImage2D(j,ft,ot,vt,xt,0,gt,Q,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),te(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,j,zt.__webglTexture,0,Jt(_)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,j,zt.__webglTexture,ft),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(R,_,V){if(s.bindRenderbuffer(s.RENDERBUFFER,R),_.depthBuffer){let W=_.depthTexture,j=W&&W.isDepthTexture?W.type:null,ft=w(_.stencilBuffer,j),gt=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;te(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt(_),ft,_.width,_.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt(_),ft,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ft,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,R)}else{let W=_.textures;for(let j=0;j<W.length;j++){let ft=W[j],gt=r.convert(ft.format,ft.colorSpace),Q=r.convert(ft.type),ot=v(ft.internalFormat,gt,Q,ft.normalized,ft.colorSpace);te(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt(_),ot,_.width,_.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt(_),ot,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ot,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(R,_,V){let W=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(_.depthTexture);if(j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(j.__webglInit===void 0&&(j.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),j.__webglTexture===void 0){j.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),re(s.TEXTURE_CUBE_MAP,_.depthTexture);let yt=r.convert(_.depthTexture.format),zt=r.convert(_.depthTexture.type),vt;_.depthTexture.format===vi?vt=s.DEPTH_COMPONENT24:_.depthTexture.format===Ei&&(vt=s.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,vt,_.width,_.height,0,yt,zt,null)}}else at(_.depthTexture,0);let ft=j.__webglTexture,gt=Jt(_),Q=W?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,ot=_.depthTexture.format===Ei?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===vi)te(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,Q,ft,0,gt):s.framebufferTexture2D(s.FRAMEBUFFER,ot,Q,ft,0);else if(_.depthTexture.format===Ei)te(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,Q,ft,0,gt):s.framebufferTexture2D(s.FRAMEBUFFER,ot,Q,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(R){let _=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=W}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(V)for(let W=0;W<6;W++)ve(_.__webglFramebuffer[W],R,W);else{let W=R.texture.mipmaps;W&&W.length>0?ve(_.__webglFramebuffer[0],R,0):ve(_.__webglFramebuffer,R,0)}else if(V){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=s.createRenderbuffer(),Zt(_.__webglDepthbuffer[W],R,!1);else{let j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=_.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ft)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Zt(_.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ft)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(R,_,V){let W=n.get(R);_!==void 0&&At(W.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&rt(R)}function ut(R){let _=R.texture,V=n.get(R),W=n.get(_);R.addEventListener("dispose",y);let j=R.textures,ft=R.isWebGLCubeRenderTarget===!0,gt=j.length>1;if(gt||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=_.version,o.memory.textures++),ft){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer[Q]=[];for(let ot=0;ot<_.mipmaps.length;ot++)V.__webglFramebuffer[Q][ot]=s.createFramebuffer()}else V.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer=[];for(let Q=0;Q<_.mipmaps.length;Q++)V.__webglFramebuffer[Q]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(gt)for(let Q=0,ot=j.length;Q<ot;Q++){let yt=n.get(j[Q]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&te(R)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){let ot=j[Q];V.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);let yt=r.convert(ot.format,ot.colorSpace),zt=r.convert(ot.type),vt=v(ot.internalFormat,yt,zt,ot.normalized,ot.colorSpace,R.isXRRenderTarget===!0),xt=Jt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,vt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,V.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Zt(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),re(s.TEXTURE_CUBE_MAP,_);for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0)for(let ot=0;ot<_.mipmaps.length;ot++)At(V.__webglFramebuffer[Q][ot],R,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ot);else At(V.__webglFramebuffer[Q],R,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(_)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let Q=0,ot=j.length;Q<ot;Q++){let yt=j[Q],zt=n.get(yt),vt=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(vt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,zt.__webglTexture),re(vt,yt),At(V.__webglFramebuffer,R,yt,s.COLOR_ATTACHMENT0+Q,vt,0),m(yt)&&M(vt)}e.unbindTexture()}else{let Q=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Q,W.__webglTexture),re(Q,_),_.mipmaps&&_.mipmaps.length>0)for(let ot=0;ot<_.mipmaps.length;ot++)At(V.__webglFramebuffer[ot],R,_,s.COLOR_ATTACHMENT0,Q,ot);else At(V.__webglFramebuffer,R,_,s.COLOR_ATTACHMENT0,Q,0);m(_)&&M(Q),e.unbindTexture()}R.depthBuffer&&rt(R)}function dt(R){let _=R.textures;for(let V=0,W=_.length;V<W;V++){let j=_[V];if(m(j)){let ft=T(R),gt=n.get(j).__webglTexture;e.bindTexture(ft,gt),M(ft),e.unbindTexture()}}}let pt=[],Xt=[];function Vt(R){if(R.samples>0){if(te(R)===!1){let _=R.textures,V=R.width,W=R.height,j=s.COLOR_BUFFER_BIT,ft=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(R),Q=_.length>1;if(Q)for(let yt=0;yt<_.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let ot=R.texture.mipmaps;ot&&ot.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let yt=0;yt<_.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),Q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);let zt=n.get(_[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,zt,0)}s.blitFramebuffer(0,0,V,W,0,0,V,W,j,s.NEAREST),l===!0&&(pt.length=0,Xt.length=0,pt.push(s.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(pt.push(ft),Xt.push(ft),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let yt=0;yt<_.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);let zt=n.get(_[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let _=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Jt(R){return Math.min(i.maxSamples,R.samples)}function te(R){let _=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function k(R){let _=o.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function xe(R,_){let V=R.colorSpace,W=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==vo&&V!==fi&&(de.getTransfer(V)===be?(W!==Un||j!==wn)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",V)),_}function ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=B,this.getTextureUnits=N,this.setTextureUnits=H,this.setTexture2D=at,this.setTexture2DArray=z,this.setTexture3D=tt,this.setTextureCube=nt,this.rebindTextures=ct,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function c1(s,t){function e(n,i=fi){let r,o=de.getTransfer(i);if(n===wn)return s.UNSIGNED_BYTE;if(n===Yl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Tu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Eu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Su)return s.BYTE;if(n===wu)return s.SHORT;if(n===Lr)return s.UNSIGNED_SHORT;if(n===ql)return s.INT;if(n===di)return s.UNSIGNED_INT;if(n===jn)return s.FLOAT;if(n===$e)return s.HALF_FLOAT;if(n===Au)return s.ALPHA;if(n===Ru)return s.RGB;if(n===Un)return s.RGBA;if(n===vi)return s.DEPTH_COMPONENT;if(n===Ei)return s.DEPTH_STENCIL;if(n===Zl)return s.RED;if(n===Jl)return s.RED_INTEGER;if(n===ps)return s.RG;if(n===Kl)return s.RG_INTEGER;if(n===jl)return s.RGBA_INTEGER;if(n===na||n===ia||n===sa||n===ra)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ql||n===tc||n===ec||n===nc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ic||n===sc||n===rc||n===oc||n===ac||n===oa||n===lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ic||n===sc)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oc)return r.COMPRESSED_R11_EAC;if(n===ac)return r.COMPRESSED_SIGNED_R11_EAC;if(n===oa)return r.COMPRESSED_RG11_EAC;if(n===lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===vc||n===yc||n===_c||n===bc||n===Mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_c)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sc||n===wc||n===Tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sc)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ec||n===Ac||n===aa||n===Rc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ec)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var h1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u1=`
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

}`,td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Po(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ae({vertexShader:h1,fragmentShader:u1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ed=class extends yi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new td,m={},M=e.getContextAttributes(),T=null,v=null,w=[],b=[],C=new Y,y=null,E=null,P=new mn;P.viewport=new Ue;let D=new mn;D.viewport=new Ue;let U=[P,D],B=new zl,N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let it=w[K];return it===void 0&&(it=new br,w[K]=it),it.getTargetRaySpace()},this.getControllerGrip=function(K){let it=w[K];return it===void 0&&(it=new br,w[K]=it),it.getGripSpace()},this.getHand=function(K){let it=w[K];return it===void 0&&(it=new br,w[K]=it),it.getHandSpace()};function Z(K){let it=b.indexOf(K.inputSource);if(it===-1)return;let mt=w[it];mt!==void 0&&(mt.update(K.inputSource,K.frame,c||o),mt.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",at);for(let K=0;K<w.length;K++){let it=b[K];it!==null&&(b[K]=null,w[K].disconnect(it))}N=null,H=null,g.reset();for(let K in m)delete m[K];if(t.setRenderTarget(T),f=null,d=null,u=null,i=null,v=null,ue.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(C.width,C.height,!1),E!==null){let K=E.camera;K.fov=E.fov,K.zoom=E.zoom,K.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",$),i.addEventListener("inputsourceschange",at),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Ht=null,At=null;M.depth&&(At=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=M.stencil?Ei:vi,Ht=M.stencil?fs:di);let Zt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Zt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new He(d.textureWidth,d.textureHeight,{format:Un,type:wn,depthTexture:new Si(d.textureWidth,d.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,mt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new He(f.framebufferWidth,f.framebufferHeight,{format:Un,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function at(K){for(let it=0;it<K.removed.length;it++){let mt=K.removed[it],Ht=b.indexOf(mt);Ht>=0&&(b[Ht]=null,w[Ht].disconnect(mt))}for(let it=0;it<K.added.length;it++){let mt=K.added[it],Ht=b.indexOf(mt);if(Ht===-1){for(let Zt=0;Zt<w.length;Zt++)if(Zt>=b.length){b.push(mt),Ht=Zt;break}else if(b[Zt]===null){b[Zt]=mt,Ht=Zt;break}if(Ht===-1)break}let At=w[Ht];At&&At.connect(mt)}}let z=new A,tt=new A;function nt(K,it,mt){z.setFromMatrixPosition(it.matrixWorld),tt.setFromMatrixPosition(mt.matrixWorld);let Ht=z.distanceTo(tt),At=it.projectionMatrix.elements,Zt=mt.projectionMatrix.elements,ve=At[14]/(At[10]-1),rt=At[14]/(At[10]+1),ct=(At[9]+1)/At[5],ut=(At[9]-1)/At[5],dt=(At[8]-1)/At[0],pt=(Zt[8]+1)/Zt[0],Xt=ve*dt,Vt=ve*pt,Jt=Ht/(-dt+pt),te=Jt*-dt;if(it.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(te),K.translateZ(Jt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),At[10]===-1)K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let k=ve+Jt,xe=rt+Jt,ae=Xt-te,R=Vt+(Ht-te),_=ct*rt/xe*k,V=ut*rt/xe*k;K.projectionMatrix.makePerspective(ae,R,_,V,k,xe),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ct(K,it){it===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(it.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let it=K.near,mt=K.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(mt=g.depthFar)),B.near=D.near=P.near=it,B.far=D.far=P.far=mt,(N!==B.near||H!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,H=B.far),B.layers.mask=K.layers.mask|6,P.layers.mask=B.layers.mask&-5,D.layers.mask=B.layers.mask&-3;let Ht=K.parent,At=B.cameras;Ct(B,Ht);for(let Zt=0;Zt<At.length;Zt++)Ct(At[Zt],Ht);At.length===2?nt(B,P,D):B.projectionMatrix.copy(P.projectionMatrix),E===null&&K.isPerspectiveCamera&&(E={camera:K,fov:K.fov,zoom:K.zoom}),Pt(K,B,Ht)};function Pt(K,it,mt){mt===null?K.matrix.copy(it.matrixWorld):(K.matrix.copy(mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(it.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ml*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(K){return m[K]};let me=null;function re(K,it){if(h=it.getViewerPose(c||o),p=it,h!==null){let mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ht=!1;mt.length!==B.cameras.length&&(B.cameras.length=0,Ht=!0);for(let rt=0;rt<mt.length;rt++){let ct=mt[rt],ut=null;if(f!==null)ut=f.getViewport(ct);else{let pt=u.getViewSubImage(d,ct);ut=pt.viewport,rt===0&&(t.setRenderTargetTextures(v,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(v))}let dt=U[rt];dt===void 0&&(dt=new mn,dt.layers.enable(rt),dt.viewport=new Ue,U[rt]=dt),dt.matrix.fromArray(ct.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ct.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(ut.x,ut.y,ut.width,ut.height),rt===0&&(B.matrix.copy(dt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ht===!0&&B.cameras.push(dt)}let At=i.enabledFeatures;if(At&&At.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let rt=u.getDepthInformation(mt[0]);rt&&rt.isValid&&rt.texture&&g.init(rt,i.renderState)}if(At&&At.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let rt=0;rt<mt.length;rt++){let ct=mt[rt].camera;if(ct){let ut=m[ct];ut||(ut=new Po,m[ct]=ut);let dt=u.getCameraImage(ct);ut.sourceTexture=dt}}}}for(let mt=0;mt<w.length;mt++){let Ht=b[mt],At=w[mt];Ht!==null&&At!==void 0&&At.update(Ht,it,c||o)}me&&me(K,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),p=null}let ue=new Dp;ue.setAnimationLoop(re),this.setAnimationLoop=function(K){me=K},this.dispose=function(){}}},d1=new oe,Op=new ne;Op.set(-1,0,0,0,1,0,0,0,1);function f1(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Du(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,T,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,T):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ln&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ln&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),T=M.envMap,v=M.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(d1.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Op),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=T*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function p1(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,w){let b=w.program;n.uniformBlockBinding(v,b)}function c(v,w){let b=i[v.id];b===void 0&&(g(v),b=h(v),i[v.id]=b,v.addEventListener("dispose",M));let C=w.program;n.updateUBOMapping(v,C);let y=t.render.frame;r[v.id]!==y&&(d(v),r[v.id]=y)}function h(v){let w=u();v.__bindingPointIndex=w;let b=s.createBuffer(),C=v.__size,y=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,C,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,b),b}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let w=i[v.id],b=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let y=0,E=b.length;y<E;y++){let P=b[y];if(Array.isArray(P))for(let D=0,U=P.length;D<U;D++)f(P[D],y,D,C);else f(P,y,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,w,b,C){if(x(v,w,b,C)===!0){let y=v.__offset,E=v.value;if(Array.isArray(E)){let P=0;for(let D=0;D<E.length;D++){let U=E[D],B=m(U);p(U,v.__data,P),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,v.__data)}}function p(v,w,b){typeof v=="number"||typeof v=="boolean"?w[0]=v:v.isMatrix3?(w[0]=v.elements[0],w[1]=v.elements[1],w[2]=v.elements[2],w[3]=0,w[4]=v.elements[3],w[5]=v.elements[4],w[6]=v.elements[5],w[7]=0,w[8]=v.elements[6],w[9]=v.elements[7],w[10]=v.elements[8],w[11]=0):ArrayBuffer.isView(v)?w.set(new v.constructor(v.buffer,v.byteOffset,w.length)):v.toArray(w,b)}function x(v,w,b,C){let y=v.value,E=w+"_"+b;if(C[E]===void 0)return typeof y=="number"||typeof y=="boolean"?C[E]=y:ArrayBuffer.isView(y)?C[E]=y.slice():C[E]=y.clone(),!0;{let P=C[E];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return C[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function g(v){let w=v.uniforms,b=0,C=16;for(let E=0,P=w.length;E<P;E++){let D=Array.isArray(w[E])?w[E]:[w[E]];for(let U=0,B=D.length;U<B;U++){let N=D[U],H=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,$=H.length;Z<$;Z++){let at=H[Z],z=m(at),tt=b%C,nt=tt%z.boundary,Ct=tt+nt;b+=nt,Ct!==0&&C-Ct<z.storage&&(b+=C-Ct),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=z.storage}}}let y=b%C;return y>0&&(b+=C-y),v.__size=b,v.__cache={},this}function m(v){let w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=48,w.storage=48):v.isMatrix4?(w.boundary=64,w.storage=64):v.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(w.boundary=16,w.storage=v.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",v),w}function M(v){let w=v.target;w.removeEventListener("dispose",M);let b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function T(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:T}}var m1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;function g1(){return Ai===null&&(Ai=new Wi(m1,16,16,ps,$e),Ai.name="DFG_LUT",Ai.minFilter=gn,Ai.magFilter=gn,Ai.wrapS=qn,Ai.wrapT=qn,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var Nc=class{constructor(t={}){let{canvas:e=Qf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=wn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,g=new Set([jl,Kl,Jl]),m=new Set([wn,di,Lr,fs,Yl,$l]),M=new Uint32Array(4),T=new Int32Array(4),v=new A,w=null,b=null,C=[],y=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,U=null,B=null,N=null,H=null;this._outputColorSpace=Xe;let Z=0,$=0,at=null,z=-1,tt=null,nt=new Ue,Ct=new Ue,Pt=null,me=new bt(0),re=0,ue=e.width,K=e.height,it=1,mt=null,Ht=null,At=new Ue(0,0,ue,K),Zt=new Ue(0,0,ue,K),ve=!1,rt=new Er,ct=!1,ut=!1,dt=new oe,pt=new A,Xt=new Ue,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function te(){return at===null?it:1}let k=n;function xe(S,F){return e.getContext(S,F)}let ae,R,_,V,W,j,ft,gt,Q,ot,yt,zt,vt,xt,Nt,Gt,ee,O,Mt,st,St,Rt,lt;try{let S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",ni,!1),k===null){let F="webgl2";if(k=xe(F,S),k===null)throw xe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(S){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",ni,!1),jt("WebGLRenderer: "+S.message),S}function Wt(){ae=new Sy(k),ae.init(),St=new c1(k,ae),R=new fy(k,ae,t,St),_=new a1(k,ae),R.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),B=k.createFramebuffer(),N=k.createFramebuffer(),H=k.createFramebuffer(),V=new Ey(k),W=new Y_,j=new l1(k,ae,_,W,R,St,V),ft=new My(P),gt=new Rg(k),Rt=new uy(k,gt),Q=new wy(k,gt,V,Rt),ot=new Ry(k,Q,gt,Rt,V),O=new Ay(k,R,j),Nt=new py(W),yt=new q_(P,ft,ae,R,Rt,Nt),zt=new f1(P,W),vt=new Z_,xt=new e1(ae),ee=new hy(P,ft,_,ot,p,l),Gt=new o1(P,ot,R),lt=new p1(k,V,R,_),Mt=new dy(k,ae,V),st=new Ty(k,ae,V),V.programs=yt.programs,P.capabilities=R,P.extensions=ae,P.properties=W,P.renderLists=vt,P.shadowMap=Gt,P.state=_,P.info=V}x!==wn&&(E=new Py(x,e.width,e.height,a,i,r));let Ot=new ed(P,k);this.xr=Ot,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let S=ae.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ae.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(S){S!==void 0&&(it=S,this.setSize(ue,K,!1))},this.getSize=function(S){return S.set(ue,K)},this.setSize=function(S,F,J=!0){if(Ot.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=S,K=F,e.width=Math.floor(S*it),e.height=Math.floor(F*it),J===!0&&(e.style.width=S+"px",e.style.height=F+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(ue*it,K*it).floor()},this.setDrawingBufferSize=function(S,F,J){ue=S,K=F,it=J,e.width=Math.floor(S*J),e.height=Math.floor(F*J),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(x===wn){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(nt)},this.getViewport=function(S){return S.copy(At)},this.setViewport=function(S,F,J,X){S.isVector4?At.set(S.x,S.y,S.z,S.w):At.set(S,F,J,X),_.viewport(nt.copy(At).multiplyScalar(it).round())},this.getScissor=function(S){return S.copy(Zt)},this.setScissor=function(S,F,J,X){S.isVector4?Zt.set(S.x,S.y,S.z,S.w):Zt.set(S,F,J,X),_.scissor(Ct.copy(Zt).multiplyScalar(it).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(S){_.setScissorTest(ve=S)},this.setOpaqueSort=function(S){mt=S},this.setTransparentSort=function(S){Ht=S},this.getClearColor=function(S){return S.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,J=!0){let X=0;if(S){let q=!1;if(at!==null){let Et=at.texture.format;q=g.has(Et)}if(q){let Et=at.texture.type,Dt=m.has(Et),Tt=ee.getClearColor(),Ut=ee.getClearAlpha(),Bt=Tt.r,ce=Tt.g,pe=Tt.b;Dt?(M[0]=Bt,M[1]=ce,M[2]=pe,M[3]=Ut,k.clearBufferuiv(k.COLOR,0,M)):(T[0]=Bt,T[1]=ce,T[2]=pe,T[3]=Ut,k.clearBufferiv(k.COLOR,0,T))}else X|=k.COLOR_BUFFER_BIT}F&&(X|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",ni,!1),ee.dispose(),vt.dispose(),xt.dispose(),W.dispose(),ft.dispose(),ot.dispose(),Rt.dispose(),lt.dispose(),yt.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Ld),Ot.removeEventListener("sessionend",Nd),bs.stop()};function Le(S){S.preventDefault(),bo("WebGLRenderer: Context Lost."),D=!0}function we(){bo("WebGLRenderer: Context Restored."),D=!1;let S=V.autoReset,F=Gt.enabled,J=Gt.autoUpdate,X=Gt.needsUpdate,q=Gt.type;Wt(),V.autoReset=S,Gt.enabled=F,Gt.autoUpdate=J,Gt.needsUpdate=X,Gt.type=q}function ni(S){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pi(S){let F=S.target;F.removeEventListener("dispose",pi),lm(F)}function lm(S){cm(S),W.remove(S)}function cm(S){let F=W.get(S).programs;F!==void 0&&(F.forEach(function(J){yt.releaseProgram(J)}),S.isShaderMaterial&&yt.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,J,X,q,Et){F===null&&(F=Vt);let Dt=q.isMesh&&q.matrixWorld.determinantAffine()<0,Tt=dm(S,F,J,X,q);_.setMaterial(X,Dt);let Ut=J.index,Bt=1;if(X.wireframe===!0){if(Ut=Q.getWireframeAttribute(J),Ut===void 0)return;Bt=2}let ce=J.drawRange,pe=J.attributes.position,kt=ce.start*Bt,Te=(ce.start+ce.count)*Bt;Et!==null&&(kt=Math.max(kt,Et.start*Bt),Te=Math.min(Te,(Et.start+Et.count)*Bt)),Ut!==null?(kt=Math.max(kt,0),Te=Math.min(Te,Ut.count)):pe!=null&&(kt=Math.max(kt,0),Te=Math.min(Te,pe.count));let sn=Te-kt;if(sn<0||sn===1/0)return;Rt.setup(q,X,Tt,J,Ut);let ze,Ie=Mt;if(Ut!==null&&(ze=gt.get(Ut),Ie=st,Ie.setIndex(ze)),q.isMesh)X.wireframe===!0?(_.setLineWidth(X.wireframeLinewidth*te()),Ie.setMode(k.LINES)):Ie.setMode(k.TRIANGLES);else if(q.isLine){let yn=X.linewidth;yn===void 0&&(yn=1),_.setLineWidth(yn*te()),q.isLineSegments?Ie.setMode(k.LINES):q.isLineLoop?Ie.setMode(k.LINE_LOOP):Ie.setMode(k.LINE_STRIP)}else q.isPoints?Ie.setMode(k.POINTS):q.isSprite&&Ie.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))Ie.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let yn=q._multiDrawStarts,It=q._multiDrawCounts,An=q._multiDrawCount,ye=Ut?gt.get(Ut).bytesPerElement:1,Wn=W.get(X).currentProgram.getUniforms();for(let mi=0;mi<An;mi++)Wn.setValue(k,"_gl_DrawID",mi),Ie.render(yn[mi]/ye,It[mi])}else if(q.isInstancedMesh)Ie.renderInstances(kt,sn,q.count);else if(J.isInstancedBufferGeometry){let yn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,It=Math.min(J.instanceCount,yn);Ie.renderInstances(kt,sn,It)}else Ie.render(kt,sn)};function Dd(S,F,J,X){U!==null&&S.isNodeMaterial&&U.setObject(X,S),ct===!0&&Nt.setState(S,J,!1),S.transparent===!0&&S.side===fn&&S.forceSinglePass===!1?(S.side=ln,S.needsUpdate=!0,Pa(S,F,X),S.side=Jn,S.needsUpdate=!0,Pa(S,F,X),S.side=fn):Pa(S,F,X)}this.compile=function(S,F,J=null){J===null&&(J=S),U!==null&&U.renderStart(S,F,J),b=xt.get(J),b.init(F),y.push(b),J.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),S!==J&&S.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),ut=this.localClippingEnabled,ct=Nt.init(this.clippingPlanes,ut),ct===!0&&Nt.setGlobalState(this.clippingPlanes,F),U!==null&&Gt.render(b.state.shadowsArray,J,F);let X=new Set;return S.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Et=q.material;if(Et)if(Array.isArray(Et))for(let Dt=0;Dt<Et.length;Dt++){let Tt=Et[Dt];Dd(Tt,J,F,q),X.add(Tt)}else Dd(Et,J,F,q),X.add(Et)}),b=y.pop(),U!==null&&U.renderEnd(),X},this.compileAsync=function(S,F,J=null){let X=this.compile(S,F,J);return new Promise(q=>{function Et(){if(X.forEach(function(Dt){let Ut=W.get(Dt).currentProgram;(Ut===void 0||Ut.isReady())&&X.delete(Dt)}),X.size===0){q(S);return}setTimeout(Et,10)}ae.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Ch=null;function hm(S){Ch&&Ch(S)}function Ld(){bs.stop()}function Nd(){bs.start()}let bs=new Dp;bs.setAnimationLoop(hm),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(S){Ch=S,Ot.setAnimationLoop(S),S===null?bs.stop():bs.start()},Ot.addEventListener("sessionstart",Ld),Ot.addEventListener("sessionend",Nd),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(S,F);let J=Ot.enabled===!0&&Ot.isPresenting===!0,X=E!==null&&(at===null||J)&&E.begin(P,at);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(F),F=Ot.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,F,at),b=xt.get(S,y.length),b.init(F),b.state.textureUnits=j.getTextureUnits(),y.push(b),dt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),rt.setFromProjectionMatrix(dt,oi,F.reversedDepth),ut=this.localClippingEnabled,ct=Nt.init(this.clippingPlanes,ut),w=vt.get(S,C.length),w.init(),C.push(w),Ot.enabled===!0&&Ot.isPresenting===!0){let Dt=P.xr.getDepthSensingMesh();Dt!==null&&Ph(Dt,F,-1/0,P.sortObjects)}Ph(S,F,0,P.sortObjects),w.finish(),U!==null&&U.updateLights(b.state.lightsArray),P.sortObjects===!0&&w.sort(mt,Ht),Jt=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,Jt&&ee.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Nt.beginShadows();let q=b.state.shadowsArray;if(Gt.render(q,S,F),ct===!0&&Nt.endShadows(),(X&&E.hasRenderPass())===!1){let Dt=w.opaque,Tt=w.transmissive;if(b.setupLights(),F.isArrayCamera){let Ut=F.cameras;if(Tt.length>0)for(let Bt=0,ce=Ut.length;Bt<ce;Bt++){let pe=Ut[Bt];kd(Dt,Tt,S,pe)}Jt&&ee.render(S);for(let Bt=0,ce=Ut.length;Bt<ce;Bt++){let pe=Ut[Bt];Ud(w,S,pe,pe.viewport)}}else Tt.length>0&&kd(Dt,Tt,S,F),Jt&&ee.render(S),Ud(w,S,F)}at!==null&&$===0&&(j.updateMultisampleRenderTarget(at),j.updateRenderTargetMipmap(at)),X&&E.end(P),S.isScene===!0&&S.onAfterRender(P,S,F),Rt.resetDefaultState(),z=-1,tt=null,y.pop(),y.length>0?(b=y[y.length-1],j.setTextureUnits(b.state.textureUnits),ct===!0&&Nt.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,U!==null&&U.renderEnd()};function Ph(S,F,J,X){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)J=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(rt)){X&&Xt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(dt);let Dt=ot.update(S),Tt=S.material;Tt.visible&&w.push(S,Dt,Tt,J,Xt.z,null,F)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(rt))){let Dt=ot.update(S),Tt=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Xt.copy(S.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Xt.copy(Dt.boundingSphere.center)),Xt.applyMatrix4(S.matrixWorld).applyMatrix4(dt)),Array.isArray(Tt)){let Ut=Dt.groups;for(let Bt=0,ce=Ut.length;Bt<ce;Bt++){let pe=Ut[Bt],kt=Tt[pe.materialIndex];kt&&kt.visible&&w.push(S,Dt,kt,J,Xt.z,pe,F)}}else Tt.visible&&w.push(S,Dt,Tt,J,Xt.z,null,F)}}let Et=S.children;for(let Dt=0,Tt=Et.length;Dt<Tt;Dt++)Ph(Et[Dt],F,J,X)}function Ud(S,F,J,X){let{opaque:q,transmissive:Et,transparent:Dt}=S;b.setupLightsView(J),ct===!0&&Nt.setGlobalState(P.clippingPlanes,J),X&&_.viewport(nt.copy(X)),q.length>0&&Ca(q,F,J),Et.length>0&&Ca(Et,F,J),Dt.length>0&&Ca(Dt,F,J),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function kd(S,F,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[X.id]===void 0){let kt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[X.id]=new He(1,1,{generateMipmaps:!0,type:kt?$e:wn,minFilter:Ti,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let Et=b.state.transmissionRenderTarget[X.id],Dt=X.viewport||nt;Et.setSize(Dt.z*P.transmissionResolutionScale,Dt.w*P.transmissionResolutionScale);let Tt=P.getRenderTarget(),Ut=P.getActiveCubeFace(),Bt=P.getActiveMipmapLevel();P.setRenderTarget(Et),P.getClearColor(me),re=P.getClearAlpha(),re<1&&P.setClearColor(16777215,.5),P.clear(),Jt&&ee.render(J);let ce=P.toneMapping;P.toneMapping=ui;let pe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),b.setupLightsView(X),ct===!0&&Nt.setGlobalState(P.clippingPlanes,X),Ca(S,J,X),j.updateMultisampleRenderTarget(Et),j.updateRenderTargetMipmap(Et),ae.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Te=0,sn=F.length;Te<sn;Te++){let ze=F[Te],{object:Ie,geometry:yn,material:It,group:An}=ze;if(It.side===fn&&Ie.layers.test(X.layers)){let ye=It.side;It.side=ln,It.needsUpdate=!0,Fd(Ie,J,X,yn,It,An),It.side=ye,It.needsUpdate=!0,kt=!0}}kt===!0&&(j.updateMultisampleRenderTarget(Et),j.updateRenderTargetMipmap(Et))}P.setRenderTarget(Tt,Ut,Bt),P.setClearColor(me,re),pe!==void 0&&(X.viewport=pe),P.toneMapping=ce}function Ca(S,F,J){let X=F.isScene===!0?F.overrideMaterial:null;for(let q=0,Et=S.length;q<Et;q++){let Dt=S[q],{object:Tt,geometry:Ut,group:Bt}=Dt,ce=Dt.material;ce.allowOverride===!0&&X!==null&&(ce=X),Tt.layers.test(J.layers)&&Fd(Tt,F,J,Ut,ce,Bt)}}function Fd(S,F,J,X,q,Et){U!==null&&q.isNodeMaterial&&U.setObject(S,q),S.onBeforeRender(P,F,J,X,q,Et),S.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),q.onBeforeRender(P,F,J,X,S,Et),q.transparent===!0&&q.side===fn&&q.forceSinglePass===!1?(q.side=ln,q.needsUpdate=!0,P.renderBufferDirect(J,F,X,q,S,Et),q.side=Jn,q.needsUpdate=!0,P.renderBufferDirect(J,F,X,q,S,Et),q.side=fn):P.renderBufferDirect(J,F,X,q,S,Et),S.onAfterRender(P,F,J,X,q,Et)}function Pa(S,F,J){F.isScene!==!0&&(F=Vt);let X=W.get(S),q=b.state.lights,Et=b.state.shadowsArray,Dt=q.state.version,Tt=yt.getParameters(S,q.state,Et,F,J,b.state.lightProbeGridArray),Ut=yt.getProgramCacheKey(Tt),Bt=X.programs;X.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;let ce=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;X.envMap=ft.get(S.envMap||X.environment,ce),X.envMapRotation=X.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Bt===void 0&&(S.addEventListener("dispose",pi),Bt=new Map,X.programs=Bt);let pe=Bt.get(Ut);if(pe!==void 0){if(X.currentProgram===pe&&X.lightsStateVersion===Dt)return zd(S,Tt),pe}else Tt.uniforms=yt.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,J,Tt),S.onBeforeCompile(Tt,P),pe=yt.acquireProgram(Tt,Ut),Bt.set(Ut,pe),X.uniforms=Tt.uniforms;let kt=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(kt.clippingPlanes=Nt.uniform),zd(S,Tt),X.needsLights=pm(S),X.lightsStateVersion=Dt,X.needsLights&&(kt.ambientLightColor.value=q.state.ambient,kt.lightProbe.value=q.state.probe,kt.sunLights.value=q.state.sun,kt.sunLightShadows.value=q.state.sunShadow,kt.directionalLights.value=q.state.directional,kt.directionalLightShadows.value=q.state.directionalShadow,kt.spotLights.value=q.state.spot,kt.spotLightShadows.value=q.state.spotShadow,kt.rectAreaLights.value=q.state.rectArea,kt.ltc_1.value=q.state.rectAreaLTC1,kt.ltc_2.value=q.state.rectAreaLTC2,kt.pointLights.value=q.state.point,kt.pointLightShadows.value=q.state.pointShadow,kt.hemisphereLights.value=q.state.hemi,kt.sunShadowMatrix.value=q.state.sunShadowMatrix,kt.sunShadowCascade.value=q.state.sunShadowCascade,kt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,kt.spotLightMatrix.value=q.state.spotLightMatrix,kt.spotLightMap.value=q.state.spotLightMap,kt.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=b.state.lightProbeGridArray.length>0,X.currentProgram=pe,X.uniformsList=null,pe}function Od(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=Fr.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function zd(S,F){let J=W.get(S);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function um(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let J=0,X=S.length;J<X;J++){let q=S[J];if(q.texture!==null&&q.boundingBox.containsPoint(v))return q}return null}function dm(S,F,J,X,q){F.isScene!==!0&&(F=Vt),j.resetTextureUnits();let Et=F.fog,Dt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,Tt=at===null?P.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:de.workingColorSpace,Ut=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Bt=ft.get(X.envMap||Dt,Ut),ce=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pe=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),kt=!!J.morphAttributes.position,Te=!!J.morphAttributes.normal,sn=!!J.morphAttributes.color,ze=ui;X.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ze=P.toneMapping);let Ie=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,yn=Ie!==void 0?Ie.length:0,It=W.get(X),An=b.state.lights;if(ct===!0&&(ut===!0||S!==tt)){let Ne=S===tt&&X.id===z;Nt.setState(X,S,Ne)}let ye=!1;X.version===It.__version?(It.needsLights&&It.lightsStateVersion!==An.state.version||It.outputColorSpace!==Tt||q.isBatchedMesh&&It.batching===!1||!q.isBatchedMesh&&It.batching===!0||q.isBatchedMesh&&It.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&It.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&It.instancing===!1||!q.isInstancedMesh&&It.instancing===!0||q.isSkinnedMesh&&It.skinning===!1||!q.isSkinnedMesh&&It.skinning===!0||q.isInstancedMesh&&It.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&It.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&It.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&It.instancingMorph===!1&&q.morphTexture!==null||It.envMap!==Bt||X.fog===!0&&It.fog!==Et||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Nt.numPlanes||It.numIntersection!==Nt.numIntersection)||It.vertexAlphas!==ce||It.vertexTangents!==pe||It.morphTargets!==kt||It.morphNormals!==Te||It.morphColors!==sn||It.toneMapping!==ze||It.morphTargetsCount!==yn||!!It.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ye=!0):(ye=!0,It.__version=X.version);let Wn=It.currentProgram;ye===!0&&(Wn=Pa(X,F,q),U&&X.isNodeMaterial&&U.onUpdateProgram(X,Wn,It));let mi=!1,ji=!1,Zs=!1,Ce=Wn.getUniforms(),Ke=It.uniforms;if(_.useProgram(Wn.program)&&(mi=!0,ji=!0,Zs=!0),X.id!==z&&(z=X.id,ji=!0),It.needsLights){let Ne=um(b.state.lightProbeGridArray,q);It.lightProbeGrid!==Ne&&(It.lightProbeGrid=Ne,ji=!0)}if(mi||tt!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ce.setValue(k,"projectionMatrix",S.projectionMatrix),Ce.setValue(k,"viewMatrix",S.matrixWorldInverse);let ts=Ce.map.cameraPosition;ts!==void 0&&ts.setValue(k,pt.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&Ce.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ce.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),tt!==S&&(tt=S,ji=!0,Zs=!0)}if(It.needsLights&&(An.state.sunShadowMap.length>0&&Ce.setValue(k,"sunShadowMap",An.state.sunShadowMap,j),An.state.directionalShadowMap.length>0&&Ce.setValue(k,"directionalShadowMap",An.state.directionalShadowMap,j),An.state.spotShadowMap.length>0&&Ce.setValue(k,"spotShadowMap",An.state.spotShadowMap,j),An.state.pointShadowMap.length>0&&Ce.setValue(k,"pointShadowMap",An.state.pointShadowMap,j)),q.isSkinnedMesh){Ce.setOptional(k,q,"bindMatrix"),Ce.setOptional(k,q,"bindMatrixInverse");let Ne=q.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Ce.setValue(k,"boneTexture",Ne.boneTexture,j))}q.isBatchedMesh&&(Ce.setOptional(k,q,"batchingTexture"),Ce.setValue(k,"batchingTexture",q._matricesTexture,j),Ce.setOptional(k,q,"batchingIdTexture"),Ce.setValue(k,"batchingIdTexture",q._indirectTexture,j),Ce.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&Ce.setValue(k,"batchingColorTexture",q._colorsTexture,j));let Qi=J.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&O.update(q,J,Wn),(ji||It.receiveShadow!==q.receiveShadow)&&(It.receiveShadow=q.receiveShadow,Ce.setValue(k,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(Ke.envMapIntensity.value=F.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=g1()),ji){if(Ce.setValue(k,"toneMappingExposure",P.toneMappingExposure),It.needsLights&&fm(Ke,Zs),Et&&X.fog===!0&&zt.refreshFogUniforms(Ke,Et),zt.refreshMaterialUniforms(Ke,X,it,K,b.state.transmissionRenderTarget[S.id]),It.needsLights&&It.lightProbeGrid){let Ne=It.lightProbeGrid;Ke.probesSH.value=Ne.texture,Ke.probesMin.value.copy(Ne.boundingBox.min),Ke.probesMax.value.copy(Ne.boundingBox.max),Ke.probesResolution.value.copy(Ne.resolution)}Fr.upload(k,Od(It),Ke,j)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Fr.upload(k,Od(It),Ke,j),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ce.setValue(k,"center",q.center),Ce.setValue(k,"modelViewMatrix",q.modelViewMatrix),Ce.setValue(k,"normalMatrix",q.normalMatrix),Ce.setValue(k,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let Ne=X.uniformsGroups;for(let ts=0,Js=Ne.length;ts<Js;ts++){let Hd=Ne[ts];lt.update(Hd,Wn),lt.bind(Hd,Wn)}}return Wn}function fm(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.sunLights.needsUpdate=F,S.sunLightShadows.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function pm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(S,F,J){let X=W.get(S);X.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),W.get(S.texture).__webglTexture=F,W.get(S.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){let J=W.get(S);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,J=0){at=S,Z=F,$=J;let X=null,q=!1,Et=!1;if(S){let Tt=W.get(S);if(Tt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(k.FRAMEBUFFER,Tt.__webglFramebuffer),nt.copy(S.viewport),Ct.copy(S.scissor),Pt=S.scissorTest,_.viewport(nt),_.scissor(Ct),_.setScissorTest(Pt),z=-1;return}else if(Tt.__webglFramebuffer===void 0)j.setupRenderTarget(S);else if(Tt.__hasExternalTextures)j.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let ce=S.depthTexture;if(Tt.__boundDepthTexture!==ce){if(ce!==null&&W.has(ce)&&(S.width!==ce.image.width||S.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(S)}}let Ut=S.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Et=!0);let Bt=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Bt[F])?X=Bt[F][J]:X=Bt[F],q=!0):S.samples>0&&j.useMultisampledRTT(S)===!1?X=W.get(S).__webglMultisampledFramebuffer:Array.isArray(Bt)?X=Bt[J]:X=Bt,nt.copy(S.viewport),Ct.copy(S.scissor),Pt=S.scissorTest}else nt.copy(At).multiplyScalar(it).floor(),Ct.copy(Zt).multiplyScalar(it).floor(),Pt=ve;if(J!==0&&(X=B),_.bindFramebuffer(k.FRAMEBUFFER,X)&&_.drawBuffers(S,X),_.viewport(nt),_.scissor(Ct),_.setScissorTest(Pt),q){let Tt=W.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,Tt.__webglTexture,J)}else if(Et){let Tt=F;for(let Ut=0;Ut<S.textures.length;Ut++){let Bt=W.get(S.textures[Ut]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ut,Bt.__webglTexture,J,Tt)}}else if(S!==null&&J!==0){let Tt=W.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Tt.__webglTexture,J)}z=-1};function Bd(S){let F=W.get(S);return(F.__readFormat!==S.format||F.__readType!==S.type)&&(F.__readFormat=S.format,F.__readType=S.type,F.__formatReadable=R.textureFormatReadable(S.format),F.__typeReadable=R.textureTypeReadable(S.type)),F}this.readRenderTargetPixels=function(S,F,J,X,q,Et,Dt,Tt=0){if(!(S&&S.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ut=Ut[Dt]),Ut){_.bindFramebuffer(k.FRAMEBUFFER,Ut);try{let Bt=S.textures[Tt],ce=Bt.format,pe=Bt.type;S.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Tt);let kt=Bd(Bt);if(kt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-X&&J>=0&&J<=S.height-q&&k.readPixels(F,J,X,q,St.convert(ce),St.convert(pe),Et)}finally{let Bt=at!==null?W.get(at).__webglFramebuffer:null;_.bindFramebuffer(k.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(S,F,J,X,q,Et,Dt,Tt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ut=Ut[Dt]),Ut)if(F>=0&&F<=S.width-X&&J>=0&&J<=S.height-q){_.bindFramebuffer(k.FRAMEBUFFER,Ut);let Bt=S.textures[Tt],ce=Bt.format,pe=Bt.type;S.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Tt);let kt=Bd(Bt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Te),k.bufferData(k.PIXEL_PACK_BUFFER,Et.byteLength,k.STREAM_READ),k.readPixels(F,J,X,q,St.convert(ce),St.convert(pe),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let sn=at!==null?W.get(at).__webglFramebuffer:null;_.bindFramebuffer(k.FRAMEBUFFER,sn);let ze=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await ep(k,ze,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Te),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Et),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Te),k.deleteSync(ze),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,J=0){let X=Math.pow(2,-J),q=Math.floor(S.image.width*X),Et=Math.floor(S.image.height*X),Dt=F!==null?F.x:0,Tt=F!==null?F.y:0;j.setTexture2D(S,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Dt,Tt,q,Et),_.unbindTexture()},this.copyTextureToTexture=function(S,F,J=null,X=null,q=0,Et=0){let Dt,Tt,Ut,Bt,ce,pe,kt,Te,sn,ze=S.isCompressedTexture?S.mipmaps[Et]:S.image;if(J!==null)Dt=J.max.x-J.min.x,Tt=J.max.y-J.min.y,Ut=J.isBox3?J.max.z-J.min.z:1,Bt=J.min.x,ce=J.min.y,pe=J.isBox3?J.min.z:0;else{let Ke=Math.pow(2,-q);Dt=Math.floor(ze.width*Ke),Tt=Math.floor(ze.height*Ke),S.isDataArrayTexture?Ut=ze.depth:S.isData3DTexture?Ut=Math.floor(ze.depth*Ke):Ut=1,Bt=0,ce=0,pe=0}X!==null?(kt=X.x,Te=X.y,sn=X.z):(kt=0,Te=0,sn=0);let Ie=St.convert(F.format),yn=St.convert(F.type),It;F.isData3DTexture?(j.setTexture3D(F,0),It=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(j.setTexture2DArray(F,0),It=k.TEXTURE_2D_ARRAY):(j.setTexture2D(F,0),It=k.TEXTURE_2D),_.activeTexture(k.TEXTURE0),_.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);let An=_.getParameter(k.UNPACK_ROW_LENGTH),ye=_.getParameter(k.UNPACK_IMAGE_HEIGHT),Wn=_.getParameter(k.UNPACK_SKIP_PIXELS),mi=_.getParameter(k.UNPACK_SKIP_ROWS),ji=_.getParameter(k.UNPACK_SKIP_IMAGES);_.pixelStorei(k.UNPACK_ROW_LENGTH,ze.width),_.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ze.height),_.pixelStorei(k.UNPACK_SKIP_PIXELS,Bt),_.pixelStorei(k.UNPACK_SKIP_ROWS,ce),_.pixelStorei(k.UNPACK_SKIP_IMAGES,pe);let Zs=S.isDataArrayTexture||S.isData3DTexture,Ce=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){let Ke=W.get(S),Qi=W.get(F),Ne=W.get(Ke.__renderTarget),ts=W.get(Qi.__renderTarget);_.bindFramebuffer(k.READ_FRAMEBUFFER,Ne.__webglFramebuffer),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let Js=0;Js<Ut;Js++)Zs&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,W.get(S).__webglTexture,q,pe+Js),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,W.get(F).__webglTexture,Et,sn+Js)),k.blitFramebuffer(Bt,ce,Dt,Tt,kt,Te,Dt,Tt,k.DEPTH_BUFFER_BIT,k.NEAREST);_.bindFramebuffer(k.READ_FRAMEBUFFER,null),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(q!==0||S.isRenderTargetTexture||W.has(S)){let Ke=W.get(S),Qi=W.get(F);_.bindFramebuffer(k.READ_FRAMEBUFFER,N),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,H);for(let Ne=0;Ne<Ut;Ne++)Zs?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ke.__webglTexture,q,pe+Ne):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ke.__webglTexture,q),Ce?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qi.__webglTexture,Et,sn+Ne):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Qi.__webglTexture,Et),q!==0?k.blitFramebuffer(Bt,ce,Dt,Tt,kt,Te,Dt,Tt,k.COLOR_BUFFER_BIT,k.NEAREST):Ce?k.copyTexSubImage3D(It,Et,kt,Te,sn+Ne,Bt,ce,Dt,Tt):k.copyTexSubImage2D(It,Et,kt,Te,Bt,ce,Dt,Tt);_.bindFramebuffer(k.READ_FRAMEBUFFER,null),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ce?S.isDataTexture||S.isData3DTexture?k.texSubImage3D(It,Et,kt,Te,sn,Dt,Tt,Ut,Ie,yn,ze.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(It,Et,kt,Te,sn,Dt,Tt,Ut,Ie,ze.data):k.texSubImage3D(It,Et,kt,Te,sn,Dt,Tt,Ut,Ie,yn,ze):S.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Et,kt,Te,Dt,Tt,Ie,yn,ze.data):S.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Et,kt,Te,ze.width,ze.height,Ie,ze.data):k.texSubImage2D(k.TEXTURE_2D,Et,kt,Te,Dt,Tt,Ie,yn,ze);_.pixelStorei(k.UNPACK_ROW_LENGTH,An),_.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ye),_.pixelStorei(k.UNPACK_SKIP_PIXELS,Wn),_.pixelStorei(k.UNPACK_SKIP_ROWS,mi),_.pixelStorei(k.UNPACK_SKIP_IMAGES,ji),Et===0&&F.generateMipmaps&&k.generateMipmap(It),_.unbindTexture()},this.initRenderTarget=function(S){W.get(S).__webglFramebuffer===void 0&&j.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?j.setTextureCube(S,0):S.isData3DTexture?j.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?j.setTexture2DArray(S,0):j.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){Z=0,$=0,at=null,_.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var Ci={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},x1=new hs(-1,1,1,-1,0,1),nd=class extends Me{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}},v1=new nd,Pi=class{constructor(t){this._mesh=new Lt(v1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,x1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Br=class extends Dn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=In.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Pi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ua=class extends Dn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Fc=class extends Dn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Oc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Y);this._width=n.width,this._height=n.height,e=new He(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$e}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Br(Ci),this.copyPass.material.blending=Qe,this.timer=new qo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ua!==void 0&&(o instanceof ua?n=!0:o instanceof Fc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Y);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var zc=class extends Dn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new bt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var da={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Y},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new oe},cameraProjectionMatrixInverse:{value:new oe},cameraWorldMatrix:{value:new oe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new A(-1,-1,-1)},sceneBoxMax:{value:new A(1,1,1)}},vertexShader:`

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
		}`},fa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Bc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function zp(s=5){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=y1(t),n=e.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new A(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new Wi(i,t,t);return r.wrapS=Yn,r.wrapT=Yn,r.needsUpdate=!0,r}function y1(s){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=t*t,n=Array(e).fill(0),i=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(i===-1&&r===t?(r=t-2,i=0):(r===t&&(r=0),i<0&&(i=t-1)),n[i*t+r]!==0){r-=2,i++;continue}else n[i*t+r]=o++;r++,i--}return n}var pa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:id(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Y},cameraProjectionMatrixInverse:{value:new oe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function id(s,t,e){let n=_1(s,t,e),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function _1(s,t,e){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*t*i/s,o=Math.pow(i/(s-1),e);n.push(new A(Math.cos(r),Math.sin(r),o))}return n}var Hc=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,p=t-d,x=e-f,g,m;p>x?(g=1,m=0):(g=0,m=1);let M=p-g+h,T=x-m+h,v=p-1+2*h,w=x-1+2*h,b=l&255,C=c&255,y=this.perm[b+this.perm[C]]%12,E=this.perm[b+g+this.perm[C+m]]%12,P=this.perm[b+1+this.perm[C+1]]%12,D=.5-p*p-x*x;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[y],p,x));let U=.5-M*M-T*T;U<0?i=0:(U*=U,i=U*U*this._dot(this.grad3[E],M,T));let B=.5-v*v-w*w;return B<0?r=0:(B*=B,r=B*B*this._dot(this.grad3[P],v,w)),70*(n+i+r)}noise3d(t,e,n){let i,r,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(n+c),f=1/6,p=(h+u+d)*f,x=h-p,g=u-p,m=d-p,M=t-x,T=e-g,v=n-m,w,b,C,y,E,P;M>=T?T>=v?(w=1,b=0,C=0,y=1,E=1,P=0):M>=v?(w=1,b=0,C=0,y=1,E=0,P=1):(w=0,b=0,C=1,y=1,E=0,P=1):T<v?(w=0,b=0,C=1,y=0,E=1,P=1):M<v?(w=0,b=1,C=0,y=0,E=1,P=1):(w=0,b=1,C=0,y=1,E=1,P=0);let D=M-w+f,U=T-b+f,B=v-C+f,N=M-y+2*f,H=T-E+2*f,Z=v-P+2*f,$=M-1+3*f,at=T-1+3*f,z=v-1+3*f,tt=h&255,nt=u&255,Ct=d&255,Pt=this.perm[tt+this.perm[nt+this.perm[Ct]]]%12,me=this.perm[tt+w+this.perm[nt+b+this.perm[Ct+C]]]%12,re=this.perm[tt+y+this.perm[nt+E+this.perm[Ct+P]]]%12,ue=this.perm[tt+1+this.perm[nt+1+this.perm[Ct+1]]]%12,K=.6-M*M-T*T-v*v;K<0?i=0:(K*=K,i=K*K*this._dot3(this.grad3[Pt],M,T,v));let it=.6-D*D-U*U-B*B;it<0?r=0:(it*=it,r=it*it*this._dot3(this.grad3[me],D,U,B));let mt=.6-N*N-H*H-Z*Z;mt<0?o=0:(mt*=mt,o=mt*mt*this._dot3(this.grad3[re],N,H,Z));let Ht=.6-$*$-at*at-z*z;return Ht<0?a=0:(Ht*=Ht,a=Ht*Ht*this._dot3(this.grad3[ue],$,at,z)),32*(i+r+o+a)}noise4d(t,e,n,i){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,p,x=(t+e+n+i)*l,g=Math.floor(t+x),m=Math.floor(e+x),M=Math.floor(n+x),T=Math.floor(i+x),v=(g+m+M+T)*c,w=g-v,b=m-v,C=M-v,y=T-v,E=t-w,P=e-b,D=n-C,U=i-y,B=E>P?32:0,N=E>D?16:0,H=P>D?8:0,Z=E>U?4:0,$=P>U?2:0,at=D>U?1:0,z=B+N+H+Z+$+at,tt=o[z][0]>=3?1:0,nt=o[z][1]>=3?1:0,Ct=o[z][2]>=3?1:0,Pt=o[z][3]>=3?1:0,me=o[z][0]>=2?1:0,re=o[z][1]>=2?1:0,ue=o[z][2]>=2?1:0,K=o[z][3]>=2?1:0,it=o[z][0]>=1?1:0,mt=o[z][1]>=1?1:0,Ht=o[z][2]>=1?1:0,At=o[z][3]>=1?1:0,Zt=E-tt+c,ve=P-nt+c,rt=D-Ct+c,ct=U-Pt+c,ut=E-me+2*c,dt=P-re+2*c,pt=D-ue+2*c,Xt=U-K+2*c,Vt=E-it+3*c,Jt=P-mt+3*c,te=D-Ht+3*c,k=U-At+3*c,xe=E-1+4*c,ae=P-1+4*c,R=D-1+4*c,_=U-1+4*c,V=g&255,W=m&255,j=M&255,ft=T&255,gt=a[V+a[W+a[j+a[ft]]]]%32,Q=a[V+tt+a[W+nt+a[j+Ct+a[ft+Pt]]]]%32,ot=a[V+me+a[W+re+a[j+ue+a[ft+K]]]]%32,yt=a[V+it+a[W+mt+a[j+Ht+a[ft+At]]]]%32,zt=a[V+1+a[W+1+a[j+1+a[ft+1]]]]%32,vt=.6-E*E-P*P-D*D-U*U;vt<0?h=0:(vt*=vt,h=vt*vt*this._dot4(r[gt],E,P,D,U));let xt=.6-Zt*Zt-ve*ve-rt*rt-ct*ct;xt<0?u=0:(xt*=xt,u=xt*xt*this._dot4(r[Q],Zt,ve,rt,ct));let Nt=.6-ut*ut-dt*dt-pt*pt-Xt*Xt;Nt<0?d=0:(Nt*=Nt,d=Nt*Nt*this._dot4(r[ot],ut,dt,pt,Xt));let Gt=.6-Vt*Vt-Jt*Jt-te*te-k*k;Gt<0?f=0:(Gt*=Gt,f=Gt*Gt*this._dot4(r[yt],Vt,Jt,te,k));let ee=.6-xe*xe-ae*ae-R*R-_*_;return ee<0?p=0:(ee*=ee,p=ee*ee*this._dot4(r[zt],xe,ae,R,_)),27*(h+u+d+f+p)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}_dot4(t,e,n,i,r){return t[0]*e+t[1]*n+t[2]*i+t[3]*r}};var Hr=class s extends Dn{constructor(t,e,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=zp(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new He(this.width,this.height,{type:$e,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ae({defines:Object.assign({},da.defines),uniforms:In.clone(da.uniforms),vertexShader:da.vertexShader,fragmentShader:da.fragmentShader,blending:Qe,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Bo,this.normalMaterial.blending=Qe,this.pdMaterial=new Ae({defines:Object.assign({},pa.defines),uniforms:In.clone(pa.uniforms),vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ae({defines:Object.assign({},fa.defines),uniforms:In.clone(fa.uniforms),vertexShader:fa.vertexShader,fragmentShader:fa.fragmentShader,blending:Qe}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ae({uniforms:In.clone(Ci.uniforms),vertexShader:Ci.vertexShader,fragmentShader:Ci.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:$o,blendDst:Ls,blendEquation:Kn,blendSrcAlpha:Yo,blendDstAlpha:Ls,blendEquationAlpha:Kn}),this.blendMaterial=new Ae({uniforms:In.clone(Bc.uniforms),vertexShader:Bc.vertexShader,fragmentShader:Bc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Hl,blendSrc:$o,blendDst:Ls,blendEquation:Kn,blendSrcAlpha:Yo,blendDstAlpha:Ls,blendEquationAlpha:Kn}),this._fsQuad=new Pi(null),this._originalClearColor=new bt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Si,this.depthTexture.format=Ei,this.depthTexture.type=fs,this.normalRenderTarget=new He(this.width,this.height,{minFilter:je,magFilter:je,type:$e,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=id(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,r=e.clearAlpha||r,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Hc,n=t*t*4,i=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;i[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,i[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,i[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,i[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new Wi(i,t,t,Un,wn);return r.wrapS=Yn,r.wrapT=Yn,r.needsUpdate=!0,r}};Hr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Bp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new bt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Vr=class s extends Dn{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Y(t.x,t.y):new Y(256,256),this.clearColor=new bt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new He(r,o,{type:$e,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new He(r,o,{type:$e,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new He(r,o,{type:$e,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Bp;this.highPassUniforms=In.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Y(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=In.clone(Ci.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:Ci.vertexShader,fragmentShader:Ci.fragmentShader,premultipliedAlpha:!0,blending:Yi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new bt,this._oldClearAlpha=1,this._basic=new Mn,this._fsQuad=new Pi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Y(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new Ae({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Y(.5,.5)},direction:{value:new Y(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Vr.BlurDirectionX=new Y(1,0);Vr.BlurDirectionY=new Y(0,1);var ma={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Vc=class extends Dn{constructor(){super(),this.isOutputPass=!0,this.uniforms=In.clone(ma.uniforms),this.material=new Cr({name:ma.name,uniforms:this.uniforms,vertexShader:ma.vertexShader,fragmentShader:ma.fragmentShader}),this._fsQuad=new Pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},de.getTransfer(this._outputColorSpace)===be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ko?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ns?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Us?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Qo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Gc=class extends Rs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new li;t.deleteAttribute("uv");let e=new ke({side:ln}),n=new ke,i=new cs(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Lt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ao(t,n,6),a=new on;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Lt(t,Gr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Lt(t,Gr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Lt(t,Gr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Lt(t,Gr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Lt(t,Gr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Lt(t,Gr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Gr(s){return new Ho({color:0,emissive:16777215,emissiveIntensity:s})}var sd=class extends Hr{_overrideVisibility(){let t=this._visibilityCache;this.scene.traverse(e=>{e.visible&&(e.isPoints||e.isLine||e.isSprite||e.userData.noAO)&&(e.visible=!1,t.push(e))})}},b1={uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uWarm:{value:new A(1.02,1,.96)},uLift:{value:new A(.012,.008,.02)},uSat:{value:1.06},uTime:{value:0},uRes:{value:new Y(1,1)},uTiltShift:{value:0}},vertexShader:`
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
  `},Wc=class{constructor(t,e={}){this.container=t,this.quality=e.quality||M1();let n=this.renderer=new Nc({antialias:this.quality==="low",powerPreference:"high-performance",alpha:!1});n.setPixelRatio(this._pixelRatio()),n.outputColorSpace=Xe,n.toneMapping=Ns,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=Ds,n.domElement.classList.add("gl"),t.appendChild(n.domElement),this.scene=new Rs,this.camera=new mn(e.fov??30,1,.1,200);let i=new Or(n);this.envMap=i.fromScene(new Gc,.04).texture,this.scene.environment=this.envMap,this.scene.environmentIntensity=.55,this._buildComposer(),this.updaters=new Set,this._last=performance.now(),this.time=0,this.frame=0,this._fpsAcc=0,this._fpsN=0,this.fps=60,this._onResize=()=>this.resize(),window.addEventListener("resize",this._onResize),"ResizeObserver"in window&&(this._ro=new ResizeObserver(()=>this.resize()),this._ro.observe(t)),this.resize()}_buildComposer(){let t=this.renderer,e=t.getDrawingBufferSize(new Y),n=new He(e.x||1,e.y||1,{type:$e,samples:this.quality==="low"?0:4}),i=this.composer=new Oc(t,n);if(this.renderPass=new zc(this.scene,this.camera),i.addPass(this.renderPass),this.quality!=="low"&&!new URLSearchParams(location.search).has("noao")){let o=this.aoPass=new sd(this.scene,this.camera,e.x,e.y);o.output=Hr.OUTPUT.Default,o.blendIntensity=.9,o.updateGtaoMaterial({radius:.55,distanceExponent:1.4,thickness:1.5,scale:1.15,samples:this.quality==="high"?16:8}),o.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),i.addPass(o)}new URLSearchParams(location.search).has("nobloom")||(this.bloomPass=new Vr(new Y(e.x/2,e.y/2),.35,.5,4.5),i.addPass(this.bloomPass)),i.addPass(new Vc),this.gradePass=new Br(b1),i.addPass(this.gradePass)}_pixelRatio(){let t={high:2,medium:1.25,low:1}[this.quality]??1.5;return Math.min(window.devicePixelRatio||1,t)}setQuality(t){t!==this.quality&&(this.quality=t,this.renderer.setPixelRatio(this._pixelRatio()),this.composer.dispose?.(),this._buildComposer(),this._w=this._h=null,this.resize(),this.onQuality?.(t))}resize(){let t=this.container.clientWidth||window.innerWidth,e=this.container.clientHeight||window.innerHeight;if(t===this._w&&e===this._h)return;this._w=t,this._h=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px",this.camera.aspect=t/e,this.camera.updateProjectionMatrix();let n=this.renderer.getPixelRatio();this.composer.setPixelRatio(n),this.composer.setSize(t,e),this.gradePass.uniforms.uRes.value.set(t*n,e*n),this.onResize?.(t,e)}get width(){return this._w}get height(){return this._h}add(t){return this.updaters.add(t),()=>this.updaters.delete(t)}start(){let t=()=>{this._raf=requestAnimationFrame(t);let e=performance.now(),n=Math.min((e-this._last)/1e3,1/15);this._last=e,this.time+=n,this.frame++,this._fpsAcc+=n,this._fpsN++,this._fpsAcc>1&&(this.fps=this._fpsN/this._fpsAcc,this._fpsAcc=0,this._fpsN=0,this.onFps?.(this.fps));for(let i of this.updaters)i(n,this.time);this.render()};t()}render(){this.gradePass.uniforms.uTime.value=this.frame%64*1.37,this.composer.render()}stop(){cancelAnimationFrame(this._raf),this._raf=null}step(t=1/60,e=1,n=!0){for(let i=0;i<e;i++){this.time+=t,this.frame++;for(let r of this.updaters)r(t,this.time)}n&&this.render()}};function M1(){try{let t=new URLSearchParams(location.search).get("quality");if(t==="low"||t==="medium"||t==="high")return t;let e=localStorage.getItem("cozy.quality");if(e==="low"||e==="medium"||e==="high")return e}catch{}return/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)?"low":"high"}var Yt=Math.PI*2,_t=(s,t=0,e=1)=>s<t?t:s>e?e:s,$i=(s,t,e)=>s+(t-s)*e;var zs=(s,t,e)=>{let n=_t((e-s)/(t-s));return n*n*(3-2*n)},Vn=s=>(s=_t(s),s*s*s*(s*(s*6-15)+10)),Ye=(s,t,e,n)=>$i(s,t,1-Math.exp(-e*n)),Xc=s=>(s=(s+Math.PI)%Yt,s<0&&(s+=Yt),s-Math.PI),Hp=(s,t)=>s+Xc(t-s);var rd=s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2;var qc=s=>s*s;var ms=(s,t=1.70158)=>1+(t+1)*Math.pow(s-1,3)+t*Math.pow(s-1,2);var Ee=(s,t=0,e=1)=>s<=t||s>=e?0:Math.sin((s-t)/(e-t)*Math.PI),Se=(s,t,e,n,i)=>s<=t||s>=i?0:s<e?Vn((s-t)/(e-t)):s<=n?1:1-Vn((s-n)/(i-n)),kn=class{constructor(t=0,e=4,n=.5){this.x=t,this.v=0,this.target=t,this.freq=e,this.damping=n}update(t){let e=Yt*this.freq,n=Math.max(1,Math.ceil(t/(1/240))),i=t/n;for(let r=0;r<n;r++){let o=-e*e*(this.x-this.target)-2*this.damping*e*this.v;this.v+=o*i,this.x+=this.v*i}return this.x}impulse(t){this.v+=t}snap(t){this.x=this.target=t,this.v=0}};function un(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var G=(s=0,t=1)=>s+Math.random()*(t-s);var se=s=>Math.random()<s,$t=s=>s[Math.floor(Math.random()*s.length)],Yc=s=>{let t=0;for(let[,n]of s)t+=Math.max(0,n);if(t<=0)return s.length?s[0][0]:void 0;let e=Math.random()*t;for(let[n,i]of s)if(e-=Math.max(0,i),e<=0)return n;return s[s.length-1][0]};function $c(s,t=0){let e=Math.floor(s),n=s-e,i=o=>{let a=Math.sin((o+t*57.13)*127.1)*43758.5453;return a-Math.floor(a)},r=n*n*(3-2*n);return $i(i(e),i(e+1),r)*2-1}var Bs=(()=>{let s=0;return(t="id")=>`${t}-${Date.now().toString(36)}-${(s++).toString(36)}`})();var S1=[0,2,4,7,9],Qn=s=>440*Math.pow(2,(s-69)/12),od=class{constructor(){this.ctx=null,this.sfxOn=!0,this.musicOn=!0,this.volume=.8,this.tempo=92,this._beatOrigin=performance.now()/1e3,this._lastStep=0,this.listeners=[],this.ambience="day",this._ambT=0,this.isVisible=()=>!0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.volume;let n=e.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=3,this.master.connect(n).connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.sfxOn?1:0,this.sfxBus.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicOn?.55:0,this.musicBus.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(2.4,2.8),this.reverbSend=e.createGain(),this.reverbSend.gain.value=.35,this.reverbSend.connect(this.reverb).connect(this.master),this._noise=this._noiseBuffer(),this._startMusic(),this.listeners.forEach(i=>i())}onUnlock(t){this.listeners.push(t)}setSfx(t){this.sfxOn=t,this.sfxBus&&this.sfxBus.gain.setTargetAtTime(t?1:0,this.ctx.currentTime,.05)}setMusic(t){this.musicOn=t,this.musicBus&&this.musicBus.gain.setTargetAtTime(t?.55:0,this.ctx.currentTime,.3)}beat(){return this.ctx&&this.musicOn?(this.ctx.currentTime-this._musicT0)*(this.tempo/60):(performance.now()/1e3-this._beatOrigin)*(this.tempo/60)}_impulse(t,e){let n=this.ctx,i=Math.floor(n.sampleRate*t),r=n.createBuffer(2,i,n.sampleRate);for(let o=0;o<2;o++){let a=r.getChannelData(o);for(let l=0;l<i;l++)a[l]=(Math.random()*2-1)*Math.pow(1-l/i,e)}return r}_noiseBuffer(){let t=this.ctx,e=t.createBuffer(1,t.sampleRate*1.5,t.sampleRate),n=e.getChannelData(0);for(let i=0;i<n.length;i++)n[i]=Math.random()*2-1;return e}_env(t,e,n,i,r,o=0){let a=t.gain;a.cancelScheduledValues(e),a.setValueAtTime(1e-4,e),a.exponentialRampToValueAtTime(Math.max(2e-4,i),e+n),a.exponentialRampToValueAtTime(Math.max(1e-4,o||1e-4),e+n+r)}tone({type:t="sine",f0:e=440,f1:n=null,dur:i=.15,gain:r=.2,attack:o=.005,t:a=0,vibrato:l=0,vibratoF:c=7,filter:h=null,reverb:u=.15,dest:d=null,curve:f="exp"}){let p=this.ctx,x=p.currentTime+a,g=p.createOscillator();g.type=t,g.frequency.setValueAtTime(e,x),n&&(f==="exp"?g.frequency.exponentialRampToValueAtTime(Math.max(20,n),x+i):g.frequency.linearRampToValueAtTime(n,x+i));let m=g;if(l){let T=p.createOscillator(),v=p.createGain();T.frequency.value=c,v.gain.value=l,T.connect(v).connect(g.frequency),T.start(x),T.stop(x+i+.1)}if(h){let T=p.createBiquadFilter();T.type=h.type||"lowpass",T.frequency.value=h.f,T.Q.value=h.q??.8,m.connect(T),m=T}let M=p.createGain();if(this._env(M,x,o,r,i),m.connect(M),M.connect(d||this.sfxBus),u){let T=p.createGain();T.gain.value=u,M.connect(T).connect(this.reverbSend)}g.start(x),g.stop(x+o+i+.05)}noise({dur:t=.1,gain:e=.1,t:n=0,filter:i={type:"bandpass",f:2e3,q:1},f1:r=null,attack:o=.003,reverb:a=.05}){let l=this.ctx,c=l.currentTime+n,h=l.createBufferSource();h.buffer=this._noise;let u=l.createBiquadFilter();u.type=i.type,u.frequency.setValueAtTime(i.f,c),r&&u.frequency.exponentialRampToValueAtTime(r,c+t),u.Q.value=i.q??1;let d=l.createGain();if(this._env(d,c,o,e,t),h.connect(u).connect(d).connect(this.sfxBus),a){let f=l.createGain();f.gain.value=a,d.connect(f).connect(this.reverbSend)}h.start(c,Math.random()*.5),h.stop(c+t+o+.05)}syllable(t,e,{vowel:n=.5,loud:i=1,len:r=.07}={}){let o=t*(.85+n*.5)*G(.95,1.05);this.tone({type:"triangle",f0:o*1.06,f1:o*.94,dur:r,gain:.075*i,attack:.006,t:e,filter:{type:"lowpass",f:1800+n*1600,q:2},reverb:.08}),this.tone({type:"sine",f0:o*2,f1:o*1.9,dur:r*.8,gain:.025*i,t:e,reverb:0})}play(t,e={}){if(!this.ctx||!this.sfxOn)return;let n=e.critter;if(n&&!this.isVisible(n))return;let i=n?n.voice:e.pitch??1,r=a=>this.tone(a),o=a=>this.noise(a);switch(t){case"boop":r({f0:520*i,f1:860*i,dur:.12,gain:.22,vibrato:0}),r({type:"triangle",f0:1040*i,f1:1500*i,dur:.08,gain:.05});break;case"hop":r({f0:300*i,f1:640*i,dur:.14,gain:.12});break;case"land":r({f0:190,f1:90,dur:.12,gain:.12*_t(e.strength??1,.3,1.5),reverb:.02}),o({dur:.06,gain:.04,filter:{type:"lowpass",f:500}});break;case"step":{let a=performance.now();if(!e.stomp&&a-this._lastStep<140)return;this._lastStep=a,o({dur:e.stomp?.08:.025,gain:e.stomp?.08:e.soft?.009:.013,filter:{type:"bandpass",f:e.stomp?600:G(2200,3200),q:1.5},reverb:0});break}case"giggle":for(let a=0;a<6;a++)this.syllable(380*i*(1+a%2*.12+a*.03),a*.085,{vowel:.9,len:.06});break;case"dizzy":r({f0:900*i,f1:300*i,dur:.9,gain:.08,vibrato:40,vibratoF:9});break;case"grumble":r({type:"sawtooth",f0:170*i,f1:130*i,dur:.5,gain:.07,vibrato:12,vibratoF:18,filter:{type:"lowpass",f:600}});break;case"hi":this.syllable(320*i,0,{vowel:.4,len:.09}),this.syllable(380*i,.11,{vowel:1,len:.14,loud:1.2});break;case"hmm":r({f0:380*i,f1:520*i,dur:.38,gain:.08,vibrato:6,filter:{type:"lowpass",f:1200}});break;case"yawn":r({type:"triangle",f0:520*i,f1:240*i,dur:1,gain:.07,attack:.15,filter:{type:"lowpass",f:1400},curve:"lin"}),o({dur:.8,gain:.015,filter:{type:"bandpass",f:900,q:.7}});break;case"mm":r({type:"triangle",f0:300*i,f1:340*i,dur:.45,gain:.06,attack:.05,filter:{type:"lowpass",f:900}});break;case"ah":this.syllable(330*i,0,{vowel:.7,len:.16}),this.syllable(370*i,.6,{vowel:.8,len:.2});break;case"sneeze":o({dur:.18,gain:.16,filter:{type:"bandpass",f:3500,q:.8},f1:1500}),r({f0:900*i,f1:420*i,dur:.16,gain:.1,t:.02});break;case"whoa":r({f0:600*i,f1:950*i,dur:.18,gain:.08}),r({f0:950*i,f1:480*i,dur:.25,gain:.08,t:.18});break;case"bonk":r({type:"triangle",f0:340,f1:170,dur:.14,gain:e.soft?.08:.16,reverb:.05}),o({dur:.03,gain:.05,filter:{type:"highpass",f:2e3}});break;case"shake":for(let a=0;a<5;a++)o({dur:.035,gain:.025,t:a*.05,filter:{type:"bandpass",f:1800,q:2}});break;case"whee":r({f0:500*i,f1:1250*i,dur:.42,gain:.09,vibrato:10});break;case"snore":o({dur:.7,gain:.02,attack:.3,filter:{type:"lowpass",f:300,q:4}});break;case"mumble":for(let a=0;a<3;a++)this.syllable(240*i,a*.1,{vowel:G(.1,.5),loud:.5});break;case"tap":o({dur:.012,gain:.02,filter:{type:"bandpass",f:4200,q:3},reverb:0});break;case"tink":r({f0:1900,dur:.22,gain:.05,reverb:.2}),r({f0:2850,dur:.15,gain:.025});break;case"page":o({dur:.16,gain:.03,filter:{type:"highpass",f:2500},f1:5e3});break;case"idea":r({f0:Qn(84),dur:.9,gain:.08,reverb:.4}),r({f0:Qn(91),dur:.7,gain:.05,t:.08,reverb:.4});break;case"scribble":o({dur:.09,gain:.015,filter:{type:"bandpass",f:G(2200,3200),q:4}});break;case"water":for(let a=0;a<8;a++)r({f0:G(900,1500),f1:G(1600,2400),dur:.05,gain:.02,t:a*G(.06,.12)});break;case"pin":r({f0:1200,f1:700,dur:.05,gain:.08});break;case"stamp":r({f0:160,f1:80,dur:.1,gain:.14}),o({dur:.04,gain:.05,filter:{type:"lowpass",f:900}});break;case"coo":r({f0:560*i,f1:660*i,dur:.18,gain:.07,vibrato:14,vibratoF:12}),r({f0:660*i,f1:600*i,dur:.22,gain:.06,t:.17,vibrato:14,vibratoF:12});break;case"hic":r({f0:700*i,f1:1100*i,dur:.07,gain:.12});break;case"gasp":o({dur:.12,gain:.04,filter:{type:"highpass",f:1500},f1:4e3}),r({f0:520*i,f1:860*i,dur:.12,gain:.08});break;case"yay":this.syllable(420*i,0,{vowel:.9,len:.09,loud:e.soft?.6:1}),this.syllable(520*i,.1,{vowel:1,len:.16,loud:e.soft?.6:1.2}),e.soft||[0,4,7,12].forEach((a,l)=>r({f0:Qn(84+a),dur:.3,gain:.03,t:.2+l*.06,reverb:.3}));break;case"aww":r({type:"triangle",f0:600*i,f1:380*i,dur:.6,gain:.07,filter:{type:"lowpass",f:1300}});break;case"sigh":o({dur:.7,gain:.03,attack:.1,filter:{type:"bandpass",f:1200,q:.6},f1:500});break;case"pop":r({f0:380,f1:950,dur:.06,gain:.12});break;case"click":r({f0:900,f1:1300,dur:.04,gain:.07,reverb:0});break;case"chime":[0,4,7,11,14].forEach((a,l)=>r({f0:Qn(79+a),dur:.5,gain:.04,t:l*.05,reverb:.4}));break;case"door":r({type:"triangle",f0:140,f1:110,dur:.18,gain:.12}),[0,.14].forEach(a=>r({f0:Qn(88),dur:.6,gain:.05,t:.05+a,reverb:.5}));break;case"whoosh":o({dur:.5,gain:.06,attack:.15,filter:{type:"bandpass",f:400,q:.7},f1:2400});break;case"rotate":o({dur:.28,gain:.025,attack:.08,filter:{type:"bandpass",f:600,q:.8},f1:1400});break;case"switch":r({type:"square",f0:1400,dur:.02,gain:.03,filter:{type:"lowpass",f:3e3},reverb:0});break;case"plant":r({f0:500,f1:750,dur:.08,gain:.05}),o({dur:.15,gain:.02,filter:{type:"highpass",f:3e3}});break;case"mail":r({f0:Qn(84),dur:.5,gain:.05,reverb:.4}),r({f0:Qn(88),dur:.6,gain:.05,t:.12,reverb:.4});break;case"spawn":[0,7,12,16,19].forEach((a,l)=>r({f0:Qn(72+a),dur:.35,gain:.05,t:l*.06,reverb:.4}));break;case"hum":{[0,2,4,2,0,7].forEach((l,c)=>r({type:"triangle",f0:Qn(67+l)*i*.6,dur:.3,gain:.045,t:c*.42,attack:.04,filter:{type:"lowpass",f:1e3},vibrato:4}));break}default:break}}babble(t,e=1){if(!this.ctx||!this.sfxOn)return t.length*.06;let n=t.slice(0,64),i=0,r=300*e,o=/\?\s*$/.test(n),a=/!\s*$/.test(n);for(let l=0;l<n.length;l++){let c=n[l].toLowerCase();if(c===" "){i+=.03;continue}if(/[.,;:~]/.test(c)){i+=.12;continue}if(!/[a-z0-9]/.test(c)||l%2===1&&!/[aeiouy]/.test(c))continue;let h=/[aeiouy]/.test(c)?.6+c.charCodeAt(0)%5*.1:c.charCodeAt(0)%7/14,u=l>n.length-4,d=o&&u?1.25:1;this.syllable(r*d,i,{vowel:h,loud:a?1.25:1,len:.06}),i+=.068}return i}_startMusic(){let t=this.ctx;this._musicT0=t.currentTime+.1,this._nextBeat=0,this._chordIdx=0,this._melodyNote=2,this._prog=[[0,4,7],[9,12,16],[5,9,12],[7,11,14],[0,4,7],[9,12,16],[2,5,9],[7,11,14]];let e=()=>{if(!this.ctx)return;let n=60/this.tempo,i=t.currentTime+.25;for(;this._musicT0+this._nextBeat*n*.5<i;){let r=this._nextBeat,o=this._musicT0+r*n*.5;this._musicStep(r,o,n),this._nextBeat++}this._ambienceTick()};this._musicTimer=setInterval(e,60)}_bell(t,e,n,i=1.6){let r=this.ctx,o=Math.max(e,r.currentTime),a=r.createGain();a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(n,o+.006),a.gain.exponentialRampToValueAtTime(1e-4,o+i),a.connect(this.musicBus);let l=r.createGain();l.gain.value=.6,a.connect(l).connect(this.reverbSend);let c=[[1,1],[2,.22],[3.01,.08],[4.16,.05]];for(let[h,u]of c){let d=r.createOscillator();d.type="sine",d.frequency.value=t*h;let f=r.createGain();f.gain.setValueAtTime(u,o),f.gain.exponentialRampToValueAtTime(1e-4,o+i/(h*.8)),d.connect(f).connect(a),d.start(o),d.stop(o+i+.05)}}_musicStep(t,e,n){if(!this.musicOn)return;let i=65,r=Math.floor(t/8),o=t%8,a=this._prog[r%this._prog.length],l=this.ambience==="night",c=l?.05:.065;o===0&&this._bell(Qn(i-24+a[0]),e,c*.9,2.6),(o===0||o===4)&&a.forEach((u,d)=>this._bell(Qn(i-12+u),e+d*n*.16,c*.45,1.8));let h=o===0?.9:o%2===0?.55:.22;if(Math.random()<h*(l?.6:1)){let u=this._melodyNote+$t([-2,-1,-1,0,1,1,2]);u=_t(u,0,9),this._melodyNote=u;let d=Math.floor(u/5),f=i+S1[u%5]+d*12;o===0&&se(.6)&&(f=i+12+a[Math.floor(Math.random()*3)]-12*(a[0]>6?1:0)),this._bell(Qn(f),e,c*.8,1.5)}}setAmbience(t){this.ambience=t}_ambienceTick(){!this.sfxOn||!this.ctx||(this._ambT-=.06,!(this._ambT>0)&&(this.ambience==="morning"||this.ambience==="day"?(this._ambT=G(4,11),se(.7)&&this._chirp()):this.ambience==="night"?(this._ambT=G(1.2,3),this._cricket()):this._ambT=5))}_chirp(){let t=G(2400,3600),e=Math.floor(G(2,5));for(let n=0;n<e;n++)this.tone({f0:t*G(.9,1.1),f1:t*G(1.2,1.5),dur:.06,gain:.012,t:n*G(.08,.13),reverb:.3})}_cricket(){let t=G(4200,4800);for(let e=0;e<3;e++)this.tone({f0:t,dur:.03,gain:.006,t:e*.05,reverb:.2})}},Ft=new od;var ad=class{constructor(){this._handlers=new Map}on(t,e){return this._handlers.has(t)||this._handlers.set(t,new Set),this._handlers.get(t).add(e),()=>this.off(t,e)}once(t,e){let n=this.on(t,(...i)=>{n(),e(...i)});return n}off(t,e){this._handlers.get(t)?.delete(e)}emit(t,...e){let n=this._handlers.get(t);if(n)for(let i of[...n])try{i(...e)}catch(r){console.error(`[events] handler for "${t}" failed`,r)}}},qt=new ad;var gs={height:1.02,lift:.07},Ge={w:.92,h:.62,y0:.22,px:512};Ge.py=Math.round(Ge.px*Ge.h/Ge.w);var Wr=[[0,0],[.28,0],[.4,.018],[.472,.07],[.502,.17],[.506,.3],[.488,.46],[.445,.63],[.365,.8],[.235,.94],[.08,1.012],[0,1.02]];function ld(s){for(let t=1;t<Wr.length;t++){let[e,n]=Wr[t],[i,r]=Wr[t-1];if(s<=n){let o=(s-r)/Math.max(1e-5,n-r);return i+(e-i)*o}}return 0}var Zc=null;function Vp(){if(Zc)return Zc;let t=new Xi(Wr.map(([g,m])=>new Y(g,m))).getSpacedPoints(56).map(g=>new Y(Math.max(0,g.x),g.y));t[0].set(0,0),t[t.length-1].set(0,Wr[Wr.length-1][1]);let e=new Zn(t,64);e.computeBoundingSphere();let n=new Cs(.074,.12,6,12);n.translate(0,-.115,0);let i=new Nn(1,20,14);i.scale(.115,.07,.15),i.translate(0,.05,.02);let r=new Ln([new A(0,-.02,0),new A(.006,.06,0),new A(.022,.13,0),new A(.05,.19,0)]),o=new Bn(r,12,.022,8,!1),a=new A(.05,.19,0),l=new Sn;l.moveTo(0,0),l.bezierCurveTo(.05,.035,.11,.05,.17,0),l.bezierCurveTo(.11,-.05,.05,-.035,0,0);let c=new Pn(l,{depth:.008,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:3,curveSegments:16});c.translate(0,0,-.004);{let g=c.attributes.position;for(let m=0;m<g.count;m++){let M=g.getX(m),T=g.getY(m);g.setZ(m,g.getZ(m)+T*T*6-M*M*.8)}c.computeVertexNormals()}c.rotateX(-Math.PI/2);let h=c.clone();h.scale(1.45,1.3,1.6);let u=new ci(.014,.018,.2,8);u.translate(0,.1,0);let d=new Nn(.06,18,14),f=new Nn(1,14,10);f.scale(.05,.016,.034),f.translate(.055,0,0);let p=new Nn(.035,14,10);p.scale(1,.6,1);let x=new Ps(.62,32);return x.rotateX(-Math.PI/2),Zc={body:e,arm:n,foot:i,stem:o,stemTip:a,leaf:c,bigLeaf:h,antennaStalk:u,bobble:d,petal:f,flowerCenter:p,shadow:x},Zc}var ga=null;function Gp(){if(ga)return ga;let s=document.createElement("canvas");s.width=s.height=128;let t=s.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,64);return e.addColorStop(0,"rgba(60,35,25,0.55)"),e.addColorStop(.45,"rgba(60,35,25,0.32)"),e.addColorStop(1,"rgba(60,35,25,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ga=new ai(s),ga.colorSpace=Xe,ga}var ge=Ge.px/Ge.w,Xr="#2a1a15",Wp="#3b231d",w1="#6e2a2c",cd="#ff8796";function hd(){return{eyes:"normal",open:1,lookX:0,lookY:0,mouth:"smile",mouthOpen:.4,blush:.3,brows:null,spin:0,tear:0}}var Jc=class{constructor(t={}){this.shape={eyeY:.565,eyeDX:.158,eyeSize:1,mouthY:.448,blushDX:.268,...t},this.canvas=document.createElement("canvas"),this.canvas.width=Ge.px,this.canvas.height=Ge.py,this.ctx=this.canvas.getContext("2d"),this.texture=new ai(this.canvas),this.texture.colorSpace=Xe,this.texture.anisotropy=4,this.texture.generateMipmaps=!0,this.texture.minFilter=Ti,this._key="",this.state=hd()}X(t){return(t/Ge.w+.5)*Ge.px}Y(t){return(1-(t-Ge.y0)/Ge.h)*Ge.py}update(t){this.state=t;let e=T1(t);return e===this._key?!1:(this._key=e,this.draw(this.ctx,t),this.texture.needsUpdate=!0,!0)}draw(t,e){t.clearRect(0,0,Ge.px,Ge.py),t.lineCap="round",t.lineJoin="round",this.drawBlush(t,e);for(let n=0;n<2;n++)this.drawEye(t,e,n);this.drawBrows(t,e),this.drawMouth(t,e),e.tear>.05&&this.drawTear(t,e)}eyeCenter(t,e){let n=e===0?-1:1,i=this.shape,r=_t(t.lookX,-1,1)*.02,o=_t(t.lookY,-1,1)*.016;return{side:n,x:this.X(n*i.eyeDX+r),y:this.Y(i.eyeY+o),rx:.06*ge*i.eyeSize,ry:.081*ge*i.eyeSize}}drawEye(t,e,n){let i=this.eyeCenter(e,n),r=e.eyes;r==="wink"&&(r=n===1?"happy":"normal");let o=_t(e.open,0,1);switch(o<.14&&(r==="normal"||r==="wide"||r==="star"||r==="sleepy"||r==="sad"||r==="angry"||r==="focus"||r==="dot")&&(r="closed-blink"),t.save(),r){case"happy":{t.strokeStyle=Xr,t.lineWidth=.016*ge,t.beginPath(),t.moveTo(i.x-i.rx*1.05,i.y+i.ry*.28),t.quadraticCurveTo(i.x,i.y-i.ry*1.05,i.x+i.rx*1.05,i.y+i.ry*.28),t.stroke();break}case"closed":case"closed-blink":{t.strokeStyle=Xr,t.lineWidth=.014*ge,t.beginPath();let a=i.y+i.ry*.15;t.moveTo(i.x-i.rx*1,a-i.ry*.12),t.quadraticCurveTo(i.x,a+i.ry*.62,i.x+i.rx*1,a-i.ry*.12),t.stroke();break}case"squint":{t.strokeStyle=Xr,t.lineWidth=.015*ge;let a=-i.side;t.beginPath(),t.moveTo(i.x-a*i.rx*.85,i.y-i.ry*.62),t.lineTo(i.x+a*i.rx*.75,i.y),t.lineTo(i.x-a*i.rx*.85,i.y+i.ry*.62),t.stroke();break}case"dizzy":{t.strokeStyle=Xr,t.lineWidth=.011*ge,t.beginPath();let a=2.3,l=60;for(let c=0;c<=l;c++){let h=c/l,u=e.spin*(n===0?1:-1)+h*a*Math.PI*2,d=h*i.rx*1.15,f=i.x+Math.cos(u)*d,p=i.y+Math.sin(u)*d*1.1;c===0?t.moveTo(f,p):t.lineTo(f,p)}t.stroke();break}case"heart":{let a=i.rx*1.35*(.92+.08*Math.sin(e.spin*3));E1(t,i.x,i.y+a*.05,a),t.fillStyle="#ff5b7c",t.fill(),t.fillStyle="rgba(255,255,255,0.9)",t.beginPath(),t.ellipse(i.x-a*.38,i.y-a*.32,a*.16,a*.11,-.6,0,Math.PI*2),t.fill();break}default:{let a=i.rx,l=i.ry,c=1;r==="wide"?(a*=1.16,l*=1.16,c=.8):r==="dot"?(a*=.48,l*=.52,c=0):r==="star"&&(a*=1.1,l*=1.1),l*=Math.max(.12,o);let h=null,u=null;if(r==="sleepy"?(h=u=.12,l*=.85):r==="sad"?(h=-.62,u=.12):r==="angry"?(h=.15,u=-.5):r==="focus"&&(h=u=-.45),t.beginPath(),t.ellipse(i.x,i.y,a,l,0,0,Math.PI*2),h!==null){t.save(),t.clip();let d=i.x-i.side*a*1.3,f=i.x+i.side*a*1.3,p=i.y+h*l,x=i.y+u*l,g=r==="angry"?-.05:r==="sleepy"?.42:.16,m=(d+f)/2,M=(p+x)/2+g*l;t.beginPath(),t.moveTo(d,p),t.quadraticCurveTo(m,M,f,x),t.lineTo(f,i.y+l*2),t.lineTo(d,i.y+l*2),t.closePath(),t.clip(),this.fillEyeBall(t,i.x,i.y,a,l,c,r,e),t.restore(),t.save(),t.beginPath(),t.ellipse(i.x,i.y,a+4,l+4,0,0,Math.PI*2),t.clip(),t.strokeStyle=Xr,t.lineWidth=.009*ge,t.beginPath(),t.moveTo(d,p),t.quadraticCurveTo(m,M,f,x),t.stroke(),t.restore()}else this.fillEyeBall(t,i.x,i.y,a,l,c,r,e)}}t.restore()}fillEyeBall(t,e,n,i,r,o,a,l){let c=t.createRadialGradient(e,n-r*.25,r*.1,e,n,Math.max(i,r)*1.05);c.addColorStop(0,"#3f2a22"),c.addColorStop(.75,"#24150f"),c.addColorStop(1,"#1b0f0b"),t.fillStyle=c,t.beginPath(),t.ellipse(e,n,i,r,0,0,Math.PI*2),t.fill(),t.save(),t.beginPath(),t.ellipse(e,n,i,r,0,0,Math.PI*2),t.clip();let h=t.createRadialGradient(e,n+r*.95,1,e,n+r*.95,i*1.1);if(h.addColorStop(0,"rgba(150,95,70,0.75)"),h.addColorStop(1,"rgba(150,95,70,0)"),t.fillStyle=h,t.fillRect(e-i,n,i*2,r),t.restore(),o<=0)return;let u=_t(l.lookX,-1,1),d=_t(l.lookY,-1,1);if(t.fillStyle="#ffffff",a==="star")xa(t,e+i*.3-u*2,n-r*.32+d*2,i*.55,.32),t.fill(),xa(t,e-i*.36,n+r*.42,i*.26,.4),t.fill();else{let f=i*.36*o;t.beginPath(),t.ellipse(e+i*.3-u*2,n-r*.36+d*2,f,Math.min(f*1.05,r*.5),0,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(e-i*.34,n+r*.44,i*.14*o,0,Math.PI*2),t.fill()}}drawBlush(t,e){let n=this.shape,i=_t(e.blush,0,1.2);if(!(i<=.01))for(let r of[-1,1]){let o=this.X(r*n.blushDX),a=this.Y(n.eyeY-.098),l=.072*ge,c=.043*ge;t.save(),t.translate(o,a),t.scale(1,c/l);let h=t.createRadialGradient(0,0,0,0,0,l),u=.2+.5*Math.min(1,i);if(h.addColorStop(0,`rgba(255,112,138,${u})`),h.addColorStop(.55,`rgba(255,120,145,${u*.75})`),h.addColorStop(1,"rgba(255,130,150,0)"),t.fillStyle=h,t.beginPath(),t.arc(0,0,l,0,Math.PI*2),t.fill(),t.restore(),i>.6){t.strokeStyle=`rgba(226,84,110,${_t((i-.6)*2.2,0,.85)})`,t.lineWidth=.0065*ge;for(let d=-1;d<=1;d++){let f=o+d*l*.36;t.beginPath(),t.moveTo(f+l*.1,a-c*.35),t.lineTo(f-l*.1,a+c*.35),t.stroke()}}}}drawBrows(t,e){if(!e.brows)return;let n=this.shape;t.strokeStyle=Xr,t.lineWidth=.012*ge;for(let i=0;i<2;i++){let r=i===0?-1:1,o=this.X(r*n.eyeDX),a=n.eyeY+.105*n.eyeSize,l=.045*ge,c=0,h=0;e.brows==="worried"?(c=.022,h=-.008):e.brows==="angry"?(c=-.018,h=.016):e.brows==="raised"&&(c=h=.028);let u=o-r*l,d=o+r*l;t.beginPath(),t.moveTo(u,this.Y(a+c)),t.quadraticCurveTo(o,this.Y(a+(c+h)/2+.012),d,this.Y(a+h)),t.stroke()}}drawMouth(t,e){let n=this.shape,i=this.X(0),r=this.Y(n.mouthY),o=_t(e.mouthOpen,0,1),a=e.mouth;switch(a==="talk"&&(a=o<.18?"smile":"open"),t.strokeStyle=Wp,t.fillStyle=w1,t.lineWidth=.0105*ge,a){case"cat":{let l=.042*ge,c=.02*ge;t.beginPath(),t.moveTo(i-l,r-c*.1),t.quadraticCurveTo(i-l*.5,r+c*1.25,i,r),t.quadraticCurveTo(i+l*.5,r+c*1.25,i+l,r-c*.1),t.stroke();break}case"o":{t.beginPath(),t.ellipse(i,r+4,.016*ge*(.8+.4*o),.02*ge*(.65+.7*o),0,0,Math.PI*2),t.fill();break}case"pout":{t.beginPath(),t.ellipse(i,r+4,.011*ge,.009*ge,0,0,Math.PI*2),t.fill();break}case"open":case"grin":{let l=(a==="grin"?.052:.04)*ge,c=.034*ge*(.45+.75*o);t.beginPath(),t.moveTo(i-l,r-2),t.quadraticCurveTo(i,r+2,i+l,r-2),t.quadraticCurveTo(i+l*.95,r+c*1.6,i,r+c*1.55),t.quadraticCurveTo(i-l*.95,r+c*1.6,i-l,r-2),t.closePath(),t.fill(),t.save(),t.clip(),t.fillStyle=cd,t.beginPath(),t.ellipse(i,r+c*1.55,l*.62,c*.75,0,0,Math.PI*2),t.fill(),t.restore();break}case"yawn":{let l=.03*ge*(.7+.3*o),c=.05*ge*(.3+.7*o);t.beginPath(),t.ellipse(i,r+c*.6,l,c,0,0,Math.PI*2),t.fill(),t.save(),t.clip(),t.fillStyle=cd,t.beginPath(),t.ellipse(i,r+c*1.45,l*.8,c*.6,0,0,Math.PI*2),t.fill(),t.restore();break}case"flat":{let l=.024*ge;t.beginPath(),t.moveTo(i-l,r+3),t.lineTo(i+l,r+3),t.stroke();break}case"wobble":{let l=.045*ge;t.beginPath();for(let c=0;c<=24;c++){let h=c/24,u=i-l+h*l*2,d=r+4+Math.sin(h*Math.PI*5)*.0065*ge;c===0?t.moveTo(u,d):t.lineTo(u,d)}t.stroke();break}case"frown":{let l=.03*ge,c=.018*ge;t.beginPath(),t.moveTo(i-l,r+c),t.quadraticCurveTo(i,r-c*.7,i+l,r+c),t.stroke();break}case"tongue":{let l=.034*ge,c=.022*ge;t.fillStyle=cd,t.beginPath(),t.ellipse(i+l*.28,r+c*.85,.013*ge,.017*ge,.15,0,Math.PI*2),t.fill(),t.lineWidth=.006*ge,t.strokeStyle="#d65c6f",t.stroke(),t.strokeStyle=Wp,t.lineWidth=.0105*ge,t.beginPath(),t.moveTo(i-l,r),t.quadraticCurveTo(i,r+c*1.1,i+l,r),t.stroke();break}case"none":break;default:{let l=.03*ge,c=.022*ge;t.beginPath(),t.moveTo(i-l,r),t.quadraticCurveTo(i,r+c*1.25,i+l,r),t.stroke()}}}drawTear(t,e){let n=this.eyeCenter(e,1),i=_t(e.tear,0,1),r=n.x+n.rx*.7,o=n.y+n.ry*1.1;t.fillStyle=`rgba(120,190,255,${.9*i})`,t.beginPath(),t.moveTo(r,o-14),t.quadraticCurveTo(r+11,o+2,r,o+8),t.quadraticCurveTo(r-11,o+2,r,o-14),t.fill()}drawPortrait(t,e,n=this.state){let i=t.getContext("2d"),r=t.width,o=t.height;i.clearRect(0,0,r,o);let a=new bt(e),l=a.clone().offsetHSL(0,-.02,.08).getStyle(),c=a.clone().offsetHSL(0,.02,-.08).getStyle(),h=i.createLinearGradient(0,0,0,o);h.addColorStop(0,l),h.addColorStop(1,c),i.fillStyle=h,i.beginPath(),i.arc(r/2,o/2,r/2,0,Math.PI*2),i.fill();let u=document.createElement("canvas");u.width=Ge.px,u.height=Ge.py,this.draw(u.getContext("2d"),n);let d=Ge.px*.62,f=d,p=Ge.px/2,x=this.Y(this.shape.eyeY-.045);i.drawImage(u,p-d/2,x-f/2,d,f,0,0,r,o)}};function T1(s){return[s.eyes,Math.round(_t(s.open)*24),Math.round(s.lookX*12),Math.round(s.lookY*12),s.mouth,Math.round(_t(s.mouthOpen)*12),Math.round(_t(s.blush,0,1.2)*20),s.brows||"",s.eyes==="dizzy"||s.eyes==="heart"?Math.round(s.spin*8):0,Math.round(s.tear*6)].join("|")}function E1(s,t,e,n){s.beginPath(),s.moveTo(t,e+n*.85),s.bezierCurveTo(t-n*1.25,e+n*.05,t-n*.95,e-n*.95,t,e-n*.38),s.bezierCurveTo(t+n*.95,e-n*.95,t+n*1.25,e+n*.05,t,e+n*.85),s.closePath()}function xa(s,t,e,n,i=.38){s.beginPath();for(let r=0;r<8;r++){let o=r/8*Math.PI*2-Math.PI/2,a=r%2===0?n:n*i,l=t+Math.cos(o)*a,c=e+Math.sin(o)*a;r===0?s.moveTo(l,c):s.lineTo(l,c)}s.closePath()}var Zi=128,ud=new Map;function A1(){let s=document.createElement("canvas");return s.width=s.height=Zi,s}function Hs(s,t,e,n="#fffaf2",i=14){s.lineJoin="round",s.lineCap="round",t(),s.strokeStyle=n,s.lineWidth=i,s.stroke(),t(),s.fillStyle=e,s.fill()}function Xp(s,t,e,n){s.beginPath(),s.moveTo(t,e+n*.85),s.bezierCurveTo(t-n*1.25,e+n*.05,t-n*.95,e-n*.95,t,e-n*.38),s.bezierCurveTo(t+n*.95,e-n*.95,t+n*1.25,e+n*.05,t,e+n*.85),s.closePath()}function dd(s,t,e,n=92,i='Fredoka, "Trebuchet MS", sans-serif'){s.font=`700 ${n}px ${i}`,s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",s.strokeStyle="#fffaf2",s.lineWidth=16,s.strokeText(t,Zi/2,Zi/2+4),s.fillStyle=e,s.fillText(t,Zi/2,Zi/2+4)}var fd={heart(s){Hs(s,()=>Xp(s,64,64,40),"#ff6b8b"),s.fillStyle="rgba(255,255,255,0.75)",s.beginPath(),s.ellipse(48,48,9,6,-.6,0,Math.PI*2),s.fill()},sparkle(s){Hs(s,()=>xa(s,64,64,50,.3),"#ffe27a","#fffaf2",10),s.fillStyle="#fff6c9",xa(s,64,64,22,.3),s.fill()},star(s){Hs(s,()=>{s.beginPath();for(let t=0;t<10;t++){let e=t/10*Math.PI*2-Math.PI/2,n=t%2===0?46:21,i=64+Math.cos(e)*n,r=66+Math.sin(e)*n;t===0?s.moveTo(i,r):s.lineTo(i,r)}s.closePath()},"#ffd24d","#fffaf2",12)},zzz(s){dd(s,"z","#8fa6e8",96)},note(s){s.lineCap="round";let t=(e,n,i)=>{s.strokeStyle=e,s.fillStyle=e,s.lineWidth=10+i,s.beginPath(),s.ellipse(44,92,18+i/2,13+i/2,-.4,0,Math.PI*2),s.fill(),s.beginPath(),s.moveTo(60,88),s.lineTo(60,26),s.quadraticCurveTo(80,34,92,52),s.stroke()};t("#fffaf2","#fffaf2",12),t("#7a5cc9","#7a5cc9",0)},dust(s){let t=s.createRadialGradient(64,64,4,64,64,60);t.addColorStop(0,"rgba(255,248,236,0.95)"),t.addColorStop(.55,"rgba(244,232,214,0.75)"),t.addColorStop(1,"rgba(244,232,214,0)"),s.fillStyle=t,s.beginPath(),s.arc(64,64,60,0,Math.PI*2),s.fill()},ring(s){s.strokeStyle="#fffaf2",s.lineWidth=9,s.beginPath(),s.arc(64,64,48,0,Math.PI*2),s.stroke(),s.strokeStyle="#ffd36b",s.lineWidth=4,s.stroke()},question(s){dd(s,"?","#e98b4a",100)},exclaim(s){dd(s,"!","#ee5b5b",104)},sweat(s){Hs(s,()=>{s.beginPath(),s.moveTo(64,14),s.bezierCurveTo(90,52,98,72,90,88),s.bezierCurveTo(80,112,48,112,38,88),s.bezierCurveTo(30,72,38,52,64,14),s.closePath()},"#8cd1ff"),s.fillStyle="rgba(255,255,255,0.8)",s.beginPath(),s.ellipse(52,80,6,11,.3,0,Math.PI*2),s.fill()},drop(s){s.fillStyle="#7cc6f5",s.beginPath(),s.moveTo(64,20),s.bezierCurveTo(86,56,92,72,84,88),s.bezierCurveTo(74,106,54,106,44,88),s.bezierCurveTo(36,72,42,56,64,20),s.fill()},anger(s){s.strokeStyle="#fffaf2",s.lineCap="round";let t=(e,n)=>{s.strokeStyle=e,s.lineWidth=n;for(let i=0;i<4;i++)s.save(),s.translate(64,64),s.rotate(i*Math.PI/2),s.beginPath(),s.moveTo(10,-34),s.quadraticCurveTo(12,-12,34,-10),s.stroke(),s.restore()};t("#fffaf2",24),t("#ef4f5f",11)},bulb(s){let t=s.createRadialGradient(64,54,8,64,54,62);t.addColorStop(0,"rgba(255,240,150,0.9)"),t.addColorStop(1,"rgba(255,240,150,0)"),s.fillStyle=t,s.fillRect(0,0,Zi,Zi),Hs(s,()=>{s.beginPath(),s.arc(64,52,30,Math.PI*.8,Math.PI*2.2),s.lineTo(78,86),s.lineTo(50,86),s.closePath()},"#ffe066"),s.fillStyle="#b9a58a",s.strokeStyle="#fffaf2",s.lineWidth=8,s.beginPath(),s.roundRect(49,88,30,18,5),s.stroke(),s.fill(),s.fillStyle="rgba(255,255,255,0.85)",s.beginPath(),s.ellipse(54,42,6,10,.5,0,Math.PI*2),s.fill()},dots(s){Hs(s,()=>{s.beginPath(),s.roundRect(10,30,108,60,30)},"#fffdf8","#e8dccb",6),s.fillStyle="#9a8676";for(let t=0;t<3;t++)s.beginPath(),s.arc(38+t*26,60,8,0,Math.PI*2),s.fill();s.fillStyle="#fffdf8",s.beginPath(),s.arc(28,102,9,0,Math.PI*2),s.fill(),s.beginPath(),s.arc(16,118,5,0,Math.PI*2),s.fill()},spark(s){let t=s.createRadialGradient(64,64,2,64,64,50);t.addColorStop(0,"rgba(255,255,230,1)"),t.addColorStop(.3,"rgba(255,214,110,0.9)"),t.addColorStop(1,"rgba(255,160,60,0)"),s.fillStyle=t,s.beginPath(),s.arc(64,64,50,0,Math.PI*2),s.fill()},confetti(s){s.fillStyle="#ffffff",s.fillRect(40,26,48,76)},puff(s){let t=s.createRadialGradient(64,64,4,64,64,60);t.addColorStop(0,"rgba(255,255,255,0.95)"),t.addColorStop(.6,"rgba(250,250,255,0.6)"),t.addColorStop(1,"rgba(250,250,255,0)"),s.fillStyle=t,s.beginPath(),s.arc(64,64,60,0,Math.PI*2),s.fill()},glow(s){let t=s.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=t,s.fillRect(0,0,Zi,Zi)},letter(s){Hs(s,()=>{s.beginPath(),s.roundRect(18,34,92,62,8)},"#fff3e0","#fffaf2",10),s.strokeStyle="#e0b48a",s.lineWidth=5,s.beginPath(),s.moveTo(22,40),s.lineTo(64,70),s.lineTo(106,40),s.stroke(),s.fillStyle="#ff6b8b",Xp(s,64,72,9),s.fill()}};function pd(s){if(ud.has(s))return ud.get(s);let t=A1(),e=t.getContext("2d");return(fd[s]||fd.sparkle)(e),ud.set(s,t),t}function qp(s){return pd(s).toDataURL()}var bw=Object.keys(fd);var md=new Map;function R1(s){if(!md.has(s)){let t=new ai(pd(s));t.colorSpace=Xe,md.set(s,t)}return md.get(s)}var C1=["#ff8fa8","#ffd36b","#8fd6b4","#94c4f5","#c3a6f2","#ffb27a"],P1=["#ffffff","#ffd8e4","#d8f2ff","#e9ffd6","#fff1c9"],Kc=class{constructor(t){this.group=new ht,this.group.name="fx",this.group.userData.noAO=!0,t.add(this.group),this.pool=[],this.live=[],this.enabled=!0}setParent(t){t.add(this.group)}_get(t){let e=this.pool.pop();if(!e){let n=new Sr({transparent:!0,depthWrite:!1,depthTest:!0});e=new Eo(n),e.userData.noAO=!0,e.renderOrder=10}return e.material.map=R1(t),e.material.color.set("#ffffff"),e.material.opacity=1,e.material.rotation=0,e.material.blending=us,e.material.needsUpdate=!0,e.visible=!0,this.group.add(e),e}spawnOne(t,e,n={}){let i=this._get(n.icon||t),r={s:i,age:0,life:n.life??1.2,pos:e.clone(),vel:n.vel?n.vel.clone():new A,grav:n.grav??0,drag:n.drag??0,size:n.size??.3,grow:n.grow??0,spin:n.spin??0,wobble:n.wobble??0,wobbleF:n.wobbleF??3,pop:n.pop??!0,fadeIn:n.fadeIn??.08,fadeOut:n.fadeOut??.35,floor:n.floor??null,follow:n.follow||null,orbit:n.orbit||null,phase:G(0,Yt),aspect:n.aspect??1,flutter:n.flutter??0,alpha:n.alpha??1};return n.color&&i.material.color.set(n.color),n.additive&&(i.material.blending=Yi),i.material.rotation=n.rotation??0,i.position.copy(r.pos),i.scale.set(.001,.001,1),this.live.push(r),r}spawn(t,e,n={}){if(!this.enabled||!e)return;let i=n.count??1;switch(t){case"heart":for(let r=0;r<i;r++)this.spawnOne("heart",e.clone().add(new A(G(-.15,.15),0,G(-.1,.1))),{vel:new A(G(-.1,.1),G(.45,.65),0),life:G(1.3,1.7),size:n.small?.17:G(.22,.28),wobble:.12,drag:.6});break;case"sparkle":for(let r=0;r<i;r++){let o=G(0,Yt);this.spawnOne("sparkle",e.clone().add(new A(Math.cos(o)*.2,G(-.1,.15),Math.sin(o)*.2)),{vel:new A(Math.cos(o)*.6,G(.4,.9),Math.sin(o)*.6),drag:3,life:G(.6,.9),size:G(.13,.22),spin:G(-4,4)})}break;case"stars":{let r=n.critter;for(let o=0;o<3;o++)this.spawnOne("star",e,{life:n.duration??2.5,size:.16,follow:r,orbit:{r:.32,speed:5,phase:o/3*Yt,y:0},pop:!0,fadeOut:.4});break}case"zzz":this.spawnOne("zzz",e.clone().add(new A(.15,0,0)),{vel:new A(.12,.32,.02),life:2.2,size:.16,grow:.16,wobble:.12,wobbleF:2,fadeOut:.8});break;case"note":this.spawnOne("note",e.clone().add(new A(G(-.2,.2),0,0)),{vel:new A(G(-.15,.15),G(.4,.55),0),life:1.6,size:G(.18,.24),wobble:.18,color:$t(P1),rotation:G(-.3,.3)});break;case"dust":for(let r=0;r<i;r++){let o=G(0,Yt),a=G(.3,.7);this.spawnOne("dust",e.clone().add(new A(Math.cos(o)*.15,.05,Math.sin(o)*.15)),{vel:new A(Math.cos(o)*a,G(.05,.25),Math.sin(o)*a),drag:4,life:G(.45,.7),size:(n.size??.22)*G(.8,1.2),grow:.35,pop:!1,fadeIn:.02})}break;case"puff":{let r=n.dir||new A(0,0,1);for(let o=0;o<i;o++)this.spawnOne("puff",e,{vel:r.clone().multiplyScalar(G(1.2,2)).add(new A(G(-.4,.4),G(-.1,.4),G(-.4,.4))),drag:4,life:G(.5,.8),size:G(.15,.25),grow:.4,pop:!1});break}case"pop":this.spawnOne("ring",e,{life:.35,size:.2,grow:1.6,pop:!1,fadeIn:.01,fadeOut:.25});break;case"question":case"exclaim":case"anger":this.spawnOne(t,e.clone().add(new A(t==="anger"?.25:.12,.05,0)),{vel:new A(0,.12,0),drag:1,life:1.3,size:t==="anger"?.22:.28,wobble:t==="anger"?0:.03,pulse:!0});break;case"sweat":this.spawnOne("sweat",e.clone().add(new A(.3,-.1,0)),{vel:new A(.05,-.12,0),life:1.3,size:.17,rotation:-.4});break;case"bulb":this.spawnOne("bulb",e.clone().add(new A(0,.1,0)),{vel:new A(0,.08,0),life:1.8,size:.4,fadeOut:.4});for(let r=0;r<4;r++)this.spawn("sparkle",e.clone().add(new A(0,.2,0)),{count:1});break;case"dots":this.spawnOne("dots",e.clone().add(new A(.25,.08,0)),{vel:new A(0,.04,0),life:2.3,size:.34});break;case"spark":for(let r=0;r<i;r++){let o=G(0,Yt);this.spawnOne("spark",e,{vel:new A(Math.cos(o)*G(.5,1.4),G(.8,1.8),Math.sin(o)*G(.5,1.4)),grav:6,life:G(.3,.55),size:G(.06,.11),pop:!1,additive:!0})}break;case"drop":this.spawnOne("drop",e.clone().add(new A(G(-.03,.03),0,G(-.03,.03))),{vel:new A(G(-.1,.1),G(-.1,.2),G(-.1,.1)),grav:7,life:.7,size:.07,pop:!1,floor:n.floor??.05});break;case"confetti":for(let r=0;r<i;r++){let o=G(0,Yt),a=G(.6,1.8);this.spawnOne("confetti",e,{vel:new A(Math.cos(o)*a,G(1.6,3.2),Math.sin(o)*a),grav:4.5,drag:1.4,life:G(1.4,2.2),size:G(.06,.09),spin:G(-9,9),color:$t(C1),pop:!1,flutter:1,floor:.02})}break;case"steam":this.spawnOne("puff",e.clone().add(new A(G(-.03,.03),0,G(-.03,.03))),{vel:new A(G(-.04,.04),G(.22,.3),G(-.04,.04)),life:G(1.6,2.2),size:.07,grow:.12,pop:!1,wobble:.05,wobbleF:1.5,fadeIn:.4,fadeOut:1,alpha:.45});break;case"letter":this.spawnOne("letter",e,{vel:new A(0,.3,0),life:1.5,size:.3});break;default:this.spawnOne("sparkle",e,{life:.8,size:.2})}}update(t){let e=this.live;for(let n=e.length-1;n>=0;n--){let i=e[n];i.age+=t;let r=i.s;if(i.age>=i.life){r.visible=!1,this.group.remove(r),this.pool.push(r),e.splice(n,1);continue}let o=i.age;if(i.orbit&&i.follow){let f=i.follow.headPos(new A,0),p=i.orbit.phase+o*i.orbit.speed;i.pos.set(f.x+Math.cos(p)*i.orbit.r,f.y+i.orbit.y+Math.sin(p*2)*.03,f.z+Math.sin(p)*i.orbit.r)}else i.vel.y-=i.grav*t,i.drag&&i.vel.multiplyScalar(Math.exp(-i.drag*t)),i.pos.addScaledVector(i.vel,t),i.floor!==null&&i.pos.y<i.floor&&(i.pos.y=i.floor,i.vel.set(0,0,0),i.grav=0);let a=i.pos.x;i.wobble&&(a+=Math.sin(o*i.wobbleF*Yt*.5+i.phase)*i.wobble),r.position.set(a,i.pos.y,i.pos.z);let l=i.pop?ms(_t(o/.25)):1,c=(i.size+i.grow*o)*l,h=c;i.flutter&&(h*=Math.abs(Math.cos(o*9+i.phase))*.8+.2),r.scale.set(h,c*i.aspect,1),i.spin&&(r.material.rotation+=i.spin*t);let u=_t(o/i.fadeIn),d=_t((i.life-o)/i.fadeOut);r.material.opacity=u*d*i.alpha}}clear(){for(let t of this.live)t.s.visible=!1,this.group.remove(t.s),this.pool.push(t.s);this.live.length=0}};var tn=new Map;function Ze(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function Je(s,t={}){let e=new ai(s);return e.colorSpace=t.linear?fi:Xe,e.anisotropy=t.anisotropy??8,t.repeat&&(e.wrapS=e.wrapT=Yn),t.wrapS&&(e.wrapS=t.wrapS),t.wrapT&&(e.wrapT=t.wrapT),e}var Ii=(s,t)=>{let e=new bt(s);return e.offsetHSL(0,0,t),"#"+e.getHexString()};function $p({base:s="#d9a36b",units:t=4,plankW:e=.5,seed:n=3}={}){let i=`planks:${s}:${t}:${e}:${n}`;if(tn.has(i))return tn.get(i);let r=1024,o=Ze(r,r),a=o.getContext("2d"),l=un(n),c=r/t,h=Math.round(t/e),u=r/h;for(let f=0;f<h;f++){let p=-l()*c*1.5;for(;p<r;){let x=c*(1.2+l()*1.6),g=(l()-.5)*.09,m=Ii(s,g);a.fillStyle=m,a.fillRect(p,f*u,x,u),a.save(),a.beginPath(),a.rect(p,f*u,x,u),a.clip();let M=7+Math.floor(l()*4);for(let v=0;v<M;v++){let w=f*u+l()*u;a.strokeStyle=`rgba(110,60,30,${.04+l()*.06})`,a.lineWidth=1+l()*2,a.beginPath();let b=2+l()*5,C=.004+l()*.01,y=l()*10;for(let E=p;E<=p+x;E+=8){let P=w+Math.sin(E*C+y)*b;E===p?a.moveTo(E,P):a.lineTo(E,P)}a.stroke()}if(l()<.25){let v=p+l()*x,w=f*u+u*(.3+l()*.4);a.strokeStyle="rgba(110,60,30,0.12)",a.lineWidth=2;for(let b=0;b<3;b++)a.beginPath(),a.ellipse(v,w,6+b*5,3+b*2.5,0,0,Math.PI*2),a.stroke()}let T=a.createLinearGradient(0,f*u,0,(f+1)*u);T.addColorStop(0,"rgba(255,240,220,0.10)"),T.addColorStop(.5,"rgba(255,240,220,0)"),T.addColorStop(1,"rgba(90,50,25,0.10)"),a.fillStyle=T,a.fillRect(p,f*u,x,u),a.restore(),a.fillStyle="rgba(95,55,30,0.35)",a.fillRect(p+x-2,f*u,2.5,u),p+=x}a.fillStyle="rgba(95,55,30,0.45)",a.fillRect(0,f*u,r,2.5)}let d=Je(o,{repeat:!0});return d.repeat.set(1/t,1/t),tn.set(i,d),d}function Zp({a:s="#f6e2c8",b:t="#e9c9a4",units:e=2,n=4}={}){let i=`tiles:${s}:${t}:${e}:${n}`;if(tn.has(i))return tn.get(i);let r=512,o=Ze(r,r),a=o.getContext("2d"),l=r/n;for(let h=0;h<n;h++)for(let u=0;u<n;u++){a.fillStyle=(h+u)%2?s:t,a.fillRect(h*l,u*l,l,l);let d=a.createLinearGradient(h*l,u*l,(h+1)*l,(u+1)*l);d.addColorStop(0,"rgba(255,255,255,0.12)"),d.addColorStop(1,"rgba(120,80,50,0.06)"),a.fillStyle=d,a.fillRect(h*l,u*l,l,l),a.strokeStyle="rgba(150,110,80,0.35)",a.lineWidth=3,a.strokeRect(h*l+1.5,u*l+1.5,l-3,l-3)}let c=Je(o,{repeat:!0});return c.repeat.set(1/e,1/e),tn.set(i,c),c}function Jp({paper:s="#fde9d6",pattern:t="dots",accent:e="#f5b8a6",wainscot:n="#f3d3b5",board:i="#c98d5d",unit:r=2,height:o=4.2,wainscotH:a=1.15,seed:l=1}={}){let c=`wall:${s}:${t}:${e}:${n}:${i}:${r}:${o}:${a}`;if(tn.has(c))return tn.get(c);let h=200,u=Math.round(r*h),d=Math.round(o*h),f=Ze(u,d),p=f.getContext("2d"),x=un(l),g=y=>d-y*h;p.fillStyle=s,p.fillRect(0,0,u,d);for(let y=0;y<400;y++)p.fillStyle=`rgba(150,100,70,${x()*.025})`,p.fillRect(x()*u,x()*d,1+x()*2,4+x()*30);let m=g(o),M=g(a);p.save(),p.beginPath(),p.rect(0,m,u,M-m),p.clip(),I1(p,t,u,d,e,s,x),p.restore(),p.fillStyle=n,p.fillRect(0,M,u,d-M);let T=2,v=u/T;for(let y=0;y<T;y++){let E=y*v+v*.12,P=v*.76,D=g(a-.16),U=g(.32);p.fillStyle=Ii(n,-.04),xs(p,E,D,P,U-D,10),p.fill(),p.strokeStyle=Ii(n,.06),p.lineWidth=4,xs(p,E+3,D+3,P-6,U-D-6,8),p.stroke(),p.strokeStyle=Ii(n,-.12),p.lineWidth=2,xs(p,E,D,P,U-D,10),p.stroke()}p.fillStyle=Ii(n,-.08),p.fillRect(0,M-10,u,22),p.fillStyle=Ii(n,.07),p.fillRect(0,M-10,u,6),p.fillStyle=i,p.fillRect(0,g(.2),u,g(0)-g(.2)),p.fillStyle=Ii(i,.08),p.fillRect(0,g(.2),u,6),p.fillStyle=Ii(i,-.1),p.fillRect(0,g(.02),u,4);let w=p.createLinearGradient(0,g(.5),0,d);w.addColorStop(0,"rgba(90,50,30,0)"),w.addColorStop(1,"rgba(90,50,30,0.18)"),p.fillStyle=w,p.fillRect(0,g(.5),u,d-g(.5));let b=p.createLinearGradient(0,0,0,g(o-.6));b.addColorStop(0,"rgba(120,70,50,0.10)"),b.addColorStop(1,"rgba(120,70,50,0)"),p.fillStyle=b,p.fillRect(0,0,u,g(o-.6));let C=Je(f,{repeat:!0});return C.wrapT=qn,C.repeat.set(1/r,1/o),tn.set(c,C),C}function I1(s,t,e,n,i,r,o){if(t==="dots"){s.fillStyle=i;for(let l=0;l<n+50;l+=50)for(let c=0;c<e+50;c+=50){let h=Math.floor(l/50)%2*25;s.globalAlpha=.55,s.beginPath(),s.arc(c+h,l,5.5,0,Math.PI*2),s.fill()}s.globalAlpha=1}else if(t==="stripes"){let a=e/8;for(let l=0;l<e;l+=a)s.fillStyle=i,s.globalAlpha=.28,s.fillRect(l,0,a*.42,n),s.globalAlpha=.5,s.fillRect(l+a*.55,0,3,n);s.globalAlpha=1}else if(t==="flowers")for(let l=0;l<n+80;l+=80)for(let c=0;c<e+80;c+=80){let h=Math.floor(l/80)%2*40;Kp(s,c+h,l,9,i)}else if(t==="gingham"){s.globalAlpha=.18,s.fillStyle=i;for(let l=0;l<e;l+=80)s.fillRect(l,0,40,n);for(let l=0;l<n;l+=80)s.fillRect(0,l,e,40);s.globalAlpha=1}else if(t==="scallop"){s.strokeStyle=i,s.globalAlpha=.45,s.lineWidth=3;for(let l=0;l<n+40;l+=40*.8)for(let c=0;c<e+40;c+=40){let h=Math.round(l/32)%2*20;s.beginPath(),s.arc(c+h,l,40/2,0,Math.PI),s.stroke()}s.globalAlpha=1}}function Kp(s,t,e,n,i){s.fillStyle=i,s.globalAlpha=.6;for(let r=0;r<5;r++){let o=r/5*Math.PI*2;s.beginPath(),s.arc(t+Math.cos(o)*n*.75,e+Math.sin(o)*n*.75,n*.55,0,Math.PI*2),s.fill()}s.globalAlpha=.9,s.fillStyle="#ffe9a8",s.beginPath(),s.arc(t,e,n*.38,0,Math.PI*2),s.fill(),s.globalAlpha=1}function xs(s,t,e,n,i,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+n,e,t+n,e+i,r),s.arcTo(t+n,e+i,t,e+i,r),s.arcTo(t,e+i,t,e,r),s.arcTo(t,e,t+n,e,r),s.closePath()}function jp({colors:s=["#f7c6b0","#fff1e2","#f2a48a","#fde3c8"],rings:t=7}={}){let e=`rrug:${s.join(",")}:${t}`;if(tn.has(e))return tn.get(e);let n=512,i=Ze(n,n),r=i.getContext("2d"),o=n/2;for(let l=0;l<t;l++){let c=o*(1-l/t);r.fillStyle=s[l%s.length],r.beginPath(),r.arc(o,o,c,0,Math.PI*2),r.fill(),r.strokeStyle="rgba(255,255,255,0.18)",r.lineWidth=2;for(let h=0;h<90;h++){let u=h/90*Math.PI*2,d=c-o/t/2;r.beginPath(),r.moveTo(o+Math.cos(u)*(d-6),o+Math.sin(u)*(d-6)),r.lineTo(o+Math.cos(u+.04)*(d+6),o+Math.sin(u+.04)*(d+6)),r.stroke()}}let a=Je(i);return tn.set(e,a),a}function Qp({colors:s=["#9ccdf2","#fff6ea","#f7b2a1","#fff6ea"],border:t="#f29a84"}={}){let e=`srug:${s.join(",")}:${t}`;if(tn.has(e))return tn.get(e);let n=512,i=320,r=Ze(n,i),o=r.getContext("2d");o.fillStyle=t,o.fillRect(0,0,n,i);let a=12;for(let h=0;h<a;h++)o.fillStyle=s[h%s.length],o.fillRect(24+h*(n-48)/a,24,(n-48)/a+1,i-48);o.fillStyle="#fff6ea";for(let h=30;h<n-20;h+=32)Yp(o,h,12,6),Yp(o,h,i-12,6);let l=un(9);for(let h=0;h<2500;h++)o.fillStyle=`rgba(255,255,255,${l()*.08})`,o.fillRect(l()*n,l()*i,2,1);let c=Je(r);return tn.set(e,c),c}function Yp(s,t,e,n){s.beginPath(),s.moveTo(t,e-n),s.lineTo(t+n,e),s.lineTo(t,e+n),s.lineTo(t-n,e),s.closePath(),s.fill()}function t0({colors:s=["#ffd0c2","#fff2df","#c9e7d6","#ffe6a6","#d9cdf5","#ffc1d2"],n:t=6,seed:e=4}={}){let n=`quilt:${s.join(",")}:${t}`;if(tn.has(n))return tn.get(n);let i=512,r=Ze(i,i),o=r.getContext("2d"),a=un(e),l=i/t;for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=s[Math.floor(a()*s.length)];o.fillStyle=d,o.fillRect(h*l,u*l,l,l);let f=a();if(o.fillStyle=Ii(d,-.06),f<.3)for(let p=0;p<4;p++)for(let x=0;x<4;x++)o.beginPath(),o.arc(h*l+(p+.5)*(l/4),u*l+(x+.5)*(l/4),3,0,Math.PI*2),o.fill();else if(f<.55)for(let p=0;p<4;p++)o.fillRect(h*l,u*l+p*(l/4),l,l/8);else f<.7&&Kp(o,h*l+l/2,u*l+l/2,l*.18,Ii(d,-.15));o.setLineDash([5,5]),o.strokeStyle="rgba(255,255,255,0.7)",o.lineWidth=2,o.strokeRect(h*l+5,u*l+5,l-10,l-10),o.setLineDash([])}let c=Je(r,{repeat:!0});return tn.set(n,c),c}function e0(){let s="cork";if(tn.has(s))return tn.get(s);let t=256,e=Ze(t,t),n=e.getContext("2d");n.fillStyle="#d6a473",n.fillRect(0,0,t,t);let i=un(5);for(let o=0;o<2600;o++){let a=i();n.fillStyle=a<.5?`rgba(150,95,50,${.15+i()*.3})`:`rgba(240,200,150,${.15+i()*.3})`,n.beginPath(),n.arc(i()*t,i()*t,.6+i()*2.2,0,Math.PI*2),n.fill()}let r=Je(e,{repeat:!0});return tn.set(s,r),r}var jc=class{constructor(){this.canvas=Ze(512,512),this.texture=Je(this.canvas),this.key=""}draw(t){let e=JSON.stringify(t);if(e===this.key)return;this.key=e;let n=this.canvas.getContext("2d"),i=512,r=n.createLinearGradient(0,0,0,i);r.addColorStop(0,t.top),r.addColorStop(.75,t.bottom),n.fillStyle=r,n.fillRect(0,0,i,i);let o=un(42);if(t.stars>.01)for(let l=0;l<90;l++){n.fillStyle=`rgba(255,250,230,${t.stars*(.3+o()*.7)})`;let c=o()<.1?2.2:1.1;n.beginPath(),n.arc(o()*i,o()*i*.62,c,0,Math.PI*2),n.fill()}if(t.sun?.visible){let{x:l,y:c,color:h,size:u=34}=t.sun,d=n.createRadialGradient(l*i,c*i,2,l*i,c*i,u*3);d.addColorStop(0,h),d.addColorStop(.3,h+"88"),d.addColorStop(1,h+"00"),n.fillStyle=d,n.fillRect(0,0,i,i),n.fillStyle=t.sun.disc||"#fff8e8",n.beginPath(),n.arc(l*i,c*i,u,0,Math.PI*2),n.fill(),t.moon&&(n.fillStyle=t.top,n.beginPath(),n.arc(l*i+u*.45,c*i-u*.25,u*.85,0,Math.PI*2),n.fill())}n.fillStyle=t.cloud;for(let l=0;l<5;l++){let c=o()*i,h=60+o()*170,u=50+o()*60;for(let d=0;d<5;d++)n.beginPath(),n.arc(c+(d-2)*u*.28,h-Math.sin(d/4*Math.PI)*u*.22,u*(.22+.1*Math.sin(d/4*Math.PI)),0,Math.PI*2),n.fill()}let a=t.hills;gd(n,i,330,40,a[0],.008,1.3),gd(n,i,370,30,a[1],.012,4.1);for(let l=0;l<7;l++){let c=30+o()*(i-60),h=380+o()*40;n.fillStyle=t.trunk,n.fillRect(c-3,h,6,22),n.fillStyle=t.tree,n.beginPath(),n.arc(c,h-4,16+o()*8,0,Math.PI*2),n.fill()}gd(n,i,420,18,a[2],.018,2.2),t.stars>.4&&(n.fillStyle="#5a4a6a",n.fillRect(380,360,50,40),n.beginPath(),n.moveTo(372,362),n.lineTo(405,335),n.lineTo(438,362),n.fill(),n.fillStyle="#ffd88a",n.fillRect(392,372,12,12),n.fillRect(410,372,12,12)),this.texture.needsUpdate=!0}};function gd(s,t,e,n,i,r,o){s.fillStyle=i,s.beginPath(),s.moveTo(0,t);for(let a=0;a<=t;a+=8)s.lineTo(a,e-Math.sin(a*r+o)*n-Math.sin(a*r*2.3+o*2)*n*.3);s.lineTo(t,t),s.closePath(),s.fill()}function xd(s,{w:t=512,h:e=128,bg:n=null,color:i="#6b4638",font:r="Fredoka",weight:o=600,size:a=64,stroke:l=null}={}){let c=Ze(t,e),h=c.getContext("2d");return n&&(h.fillStyle=n,xs(h,0,0,t,e,e*.3),h.fill()),h.font=`${o} ${a}px ${r}, sans-serif`,h.textAlign="center",h.textBaseline="middle",l&&(h.strokeStyle=l,h.lineWidth=a*.18,h.lineJoin="round",h.strokeText(s,t/2,e/2+a*.05)),h.fillStyle=i,h.fillText(s,t/2,e/2+a*.05),Je(c)}function va(s,t,e,n=6){let i=String(t).split(/\s+/),r=[],o="";for(let a of i){let l=o?o+" "+a:a;if(s.measureText(l).width>e&&o){if(r.push(o),o=a,r.length>=n)break}else o=l}return o&&r.length<n&&r.push(o),r.length===n&&i.join(" ").length>r.join(" ").length&&(r[n-1]=r[n-1].replace(/\s*\S*$/,"\u2026")),r}function n0(s,t="#ffe68a"){let n=Ze(256,256),i=n.getContext("2d");i.fillStyle=t,i.fillRect(0,0,256,256);let r=i.createLinearGradient(0,0,0,256);r.addColorStop(0,"rgba(255,255,255,0.15)"),r.addColorStop(1,"rgba(120,80,30,0.08)"),i.fillStyle=r,i.fillRect(0,0,256,256),i.fillStyle="rgba(0,0,0,0.06)",i.fillRect(0,0,256,28),i.fillStyle="#4a3a33";let o=40,a;do i.font=`${o}px 'Patrick Hand', 'Comic Sans MS', cursive`,a=va(i,s,220,5),o-=3;while(a.length*o*1.1>196&&o>20);i.textAlign="center",i.textBaseline="middle";let l=o*1.12,c=256/2+10-(a.length-1)*l/2;return a.forEach((h,u)=>i.fillText(h,256/2,c+u*l)),Je(n)}function i0(s,t=4,e=256){let n=Ze(t,e),i=n.getContext("2d"),r=i.createLinearGradient(0,0,0,e);return s.forEach((o,a)=>r.addColorStop(a/(s.length-1),o)),i.fillStyle=r,i.fillRect(0,0,t,e),Je(n)}var s0=s=>new bt(s),Gs=[{h:0,bg:["#262c55","#3d3f74","#5a4f86"],hemiSky:"#8b9be0",hemiGround:"#3b3150",hemi:.4,sun:0,sunColor:"#a9bcff",moon:.6,lamps:1,env:.16,exposure:1,win:{top:"#141a40",bottom:"#3c3470",cloud:"rgba(120,120,170,0.35)",hills:["#2a3550","#24304a","#1d283f"],tree:"#1f3a3a",trunk:"#2a2230"},stars:1,grade:[.96,.98,1.06]},{h:5,bg:["#3a3f78","#7a6a9e","#d99aa6"],hemiSky:"#a7a6e0",hemiGround:"#4a3a50",hemi:.45,sun:.2,sunColor:"#ffb08a",moon:.4,lamps:.9,env:.22,exposure:1,win:{top:"#3a3f78",bottom:"#e8a0a0",cloud:"rgba(255,200,210,0.5)",hills:["#5a5a80","#4a5070","#3d4560"],tree:"#38524a",trunk:"#3a2e38"},stars:.4,grade:[1,.98,1.02]},{h:7,bg:["#ffd9c2","#fbc3c0","#e6c4e6"],hemiSky:"#ffe6d6",hemiGround:"#b98a7a",hemi:.6,sun:2.6,sunColor:"#ffbf8f",moon:0,lamps:.25,env:.3,exposure:1,win:{top:"#9fd2f5",bottom:"#ffd9c2",cloud:"rgba(255,240,235,0.9)",hills:["#a8d58f","#8cc47a","#76b46c"],tree:"#6aa864",trunk:"#8a5a3c"},stars:0,grade:[1.03,1,.97]},{h:10,bg:["#ffe8d6","#fcd8d0","#f1d6ea"],hemiSky:"#fff1e2",hemiGround:"#c49a82",hemi:.66,sun:3.4,sunColor:"#ffe4c2",moon:0,lamps:0,env:.34,exposure:1,win:{top:"#86c8f5",bottom:"#d9f0ff",cloud:"rgba(255,255,255,0.95)",hills:["#a8d58f","#8cc47a","#76b46c"],tree:"#6aa864",trunk:"#8a5a3c"},stars:0,grade:[1.02,1,.98]},{h:14,bg:["#ffe9d4","#fdd6c8","#f3d3e4"],hemiSky:"#fff4e6",hemiGround:"#c49a82",hemi:.68,sun:3.5,sunColor:"#fff0d8",moon:0,lamps:0,env:.34,exposure:1,win:{top:"#7cc2f5",bottom:"#d6efff",cloud:"rgba(255,255,255,0.95)",hills:["#a8d58f","#8cc47a","#76b46c"],tree:"#6aa864",trunk:"#8a5a3c"},stars:0,grade:[1.01,1,.99]},{h:17.5,bg:["#ffd6b0","#f9b6a0","#e8a9c2"],hemiSky:"#ffe0c2",hemiGround:"#b8806a",hemi:.6,sun:3.1,sunColor:"#ffb070",moon:0,lamps:.3,env:.3,exposure:1,win:{top:"#f5b38a",bottom:"#ffd9a8",cloud:"rgba(255,220,200,0.9)",hills:["#b9b86f","#a0a862","#8a9a58"],tree:"#7a9550",trunk:"#7a4a32"},stars:0,grade:[1.05,.99,.94]},{h:19.5,bg:["#8e7bb5","#d790a6","#f2a989"],hemiSky:"#d7b0d8",hemiGround:"#6a4a5a",hemi:.5,sun:1.1,sunColor:"#ff8a6a",moon:.1,lamps:.85,env:.18,exposure:1,win:{top:"#6a5a9a",bottom:"#f29a80",cloud:"rgba(255,180,170,0.7)",hills:["#6a6a7a","#5a5a70","#4a4a60"],tree:"#45584f",trunk:"#4a3236"},stars:.25,grade:[1.03,.97,.98]},{h:21.5,bg:["#2c3260","#444580","#6a5690"],hemiSky:"#8b9be0",hemiGround:"#3b3150",hemi:.42,sun:0,sunColor:"#a9bcff",moon:.6,lamps:1,env:.18,exposure:1,win:{top:"#161c45",bottom:"#433a78",cloud:"rgba(120,120,170,0.35)",hills:["#2a3550","#24304a","#1d283f"],tree:"#1f3a3a",trunk:"#2a2230"},stars:1,grade:[.97,.98,1.05]}];Gs.push({...Gs[0],h:24});function Vs(s,t,e){return"#"+s0(s).lerp(s0(t),e).getHexString()}function D1(s){let t=0;for(;t<Gs.length-1&&Gs[t+1].h<=s;)t++;let e=Gs[t],n=Gs[Math.min(t+1,Gs.length-1)],i=n.h===e.h?0:zs(0,1,(s-e.h)/(n.h-e.h)),r=a=>$i(e[a],n[a],i),o=a=>Vs(e[a],n[a],i);return{bg:e.bg.map((a,l)=>Vs(a,n.bg[l],i)),hemiSky:o("hemiSky"),hemiGround:o("hemiGround"),hemi:r("hemi"),sun:r("sun"),sunColor:o("sunColor"),moon:r("moon"),lamps:r("lamps"),env:r("env"),exposure:r("exposure"),stars:r("stars"),grade:e.grade.map((a,l)=>$i(a,n.grade[l],i)),win:{top:Vs(e.win.top,n.win.top,i),bottom:Vs(e.win.bottom,n.win.bottom,i),cloud:i<.5?e.win.cloud:n.win.cloud,hills:e.win.hills.map((a,l)=>Vs(a,n.win.hills[l],i)),tree:Vs(e.win.tree,n.win.tree,i),trunk:Vs(e.win.trunk,n.win.trunk,i)}}}var Ws=[{id:"auto",label:"real time"},{id:"morning",label:"morning",h:8.2},{id:"noon",label:"afternoon",h:14},{id:"golden",label:"golden hour",h:17.6},{id:"dusk",label:"dusk",h:19.7},{id:"night",label:"night",h:23}],Qc=class{constructor(t){this.engine=t;let e=t.scene;this.hemi=new Go("#fff","#888",1),e.add(this.hemi),this.sun=new Ir("#fff",2),this.sun.castShadow=!0;let n=this.sun.shadow;n.mapSize.set(t.quality==="low"?1024:2048,t.quality==="low"?1024:2048),n.camera.left=-9,n.camera.right=9,n.camera.top=9,n.camera.bottom=-9,n.camera.near=.5,n.camera.far=40,n.radius=3,n.bias=-4e-4,n.normalBias=.025,e.add(this.sun),e.add(this.sun.target),this.moon=new Ir("#a9bcff",.4),this.moon.position.set(-6,9,-4),e.add(this.moon),this.view=new jc,this.override=null,this._bgKey="",this.hour=12,this.state=null,this.rooms=[],this._t=99,this.speed=1,this._virtual=null}setPreset(t){let e=Ws.find(n=>n.id===t);this.override=e&&e.h!==void 0?e.h:null,this._t=99}get presetId(){return this.override===null?"auto":Ws.find(t=>t.h===this.override)?.id||"auto"}setHour(t){this.override=(t%24+24)%24,this._t=99}currentHour(){if(this.override!==null)return this.override;let t=new Date;return t.getHours()+t.getMinutes()/60+t.getSeconds()/3600}get isNight(){return this.hour>=20.5||this.hour<6}get phase(){let t=this.hour;return t>=5&&t<11?"morning":t>=11&&t<17?"day":t>=17&&t<20.5?"evening":"night"}update(t,e){this._t+=t;let n=this.hour=this.currentHour(),i=this.state=D1(n),r=this.engine,o=i.bg.join();if(o!==this._bgKey){this._bgKey=o;let d=r.scene.background;r.scene.background=i0(i.bg),d?.dispose?.(),document.documentElement.style.setProperty("--sky-top",i.bg[0]),document.documentElement.style.setProperty("--sky-bottom",i.bg[2])}this.hemi.color.set(i.hemiSky),this.hemi.groundColor.set(i.hemiGround),this.hemi.intensity=i.hemi,r.scene.environmentIntensity=i.env;let a=_t((n-6)/14,0,1),l=$i(-2.75,-1.5,a),c=.36+Math.sin(a*Math.PI)*.26,h=20;this.sun.position.set(Math.sin(l)*Math.cos(c)*h,Math.sin(c)*h,Math.cos(l)*Math.cos(c)*h),this.sun.target.position.set(0,0,0),this.sun.color.set(i.sunColor),this.sun.intensity=i.sun,this.sun.castShadow=i.sun>.05,this.moon.intensity=i.moon;let u=r.gradePass?.uniforms;if(u&&u.uWarm.value.set(i.grade[0],i.grade[1],i.grade[2]),this._t>2){this._t=0;let d=i.stars>.5,f=.15+a*.7;this.view.draw({top:i.win.top,bottom:i.win.bottom,cloud:i.win.cloud,hills:i.win.hills,tree:i.win.tree,trunk:i.win.trunk,stars:Math.round(i.stars*10)/10,sun:d?{visible:!0,x:.72,y:.22,color:"#c9d4ff",size:26,disc:"#f3f0ff"}:i.sun>.3?{visible:!0,x:Math.round(f*100)/100,y:Math.round((.55-Math.sin(a*Math.PI)*.4)*100)/100,color:n>16||n<8?"#ffb070":"#fff1c4",size:30}:{visible:!1},moon:d})}e&&r0(e,i.lamps,r.time)}};function r0(s,t,e){for(let n of s.lights){let i=n.userData.lamp,r=i.on?t:0;i.level=(i.level??r)+(r-(i.level??r))*.08;let o=i.level;i.light.intensity=i.base*o,i.light.visible=o>.02,i.shadeMat.emissiveIntensity=.15+o*1.6,i.bulbMat!==i.shadeMat&&(i.bulbMat.emissiveIntensity=o*8)}for(let n of s.glows){let i=n.userData.level!==void 0?n.userData.level:t,r=n.userData.bulbMats;r&&r.forEach((o,a)=>{let l=.72+.28*Math.sin(e*2.2+a*1.7);o.emissiveIntensity=.25+i*7*l})}}var o0=new qi,L1=new pn(new A(0,1,0),0),a0=new A,th=class{constructor(t,e={}){this.engine=t,this.camera=t.camera,this.dom=t.renderer.domElement,this.interaction=e.interaction||null,this.corner=0,this.az=new kn(Math.PI/4,1.6,.78),this.elevation=.6,this.zoom=new kn(1,2.2,1),this.target=new A(0,1,0),this.focus=new A(0,1,0),this.room=null,this.fitDist=18,this.followCritter=null,this.onCornerChange=null,this.enabled=!0,this._drag=null,this._pinch=null,this.idleSway=!0,this._time=0,this._bind()}setRoom(t,e=null){if(this.room=t,e!==null){this.corner=e;let n=this.cornerAngle(e);this.az.snap(n)}this.focus.set(0,.9,0),this.target.copy(this.focus),this.zoom.snap(1),this.fit()}cornerAngle(t){return Math.PI/4+t*(Math.PI/2)}fit(){if(!this.room)return;let{w:t,d:e,h:n}=this.room,i=this.camera,r=i.fov*Math.PI/180,o=2*Math.atan(Math.tan(r/2)*i.aspect),l=(Math.hypot(t,e)+1.2)*(i.aspect<1?.74:1)/2/Math.tan(o/2),h=(Math.sin(this.elevation)*Math.hypot(t,e)*.62+n*Math.cos(this.elevation)+1.4)/2/Math.tan(r/2);this.fitDist=Math.max(l,h)*1.02}rotate(t){this.followCritter=null,this.corner=((this.corner+t)%4+4)%4;let e=this.az.target+t*(Math.PI/2);this.az.target=e,this.onRotate?.(t)}snap(){let t=this.az.x,e=Math.round((t-Math.PI/4)/(Math.PI/2));this.az.target=Math.PI/4+e*(Math.PI/2),this.corner=(e%4+4)%4}follow(t){this.followCritter=t,this.zoom.target=.5}unfollow(){this.followCritter=null,this.zoom.target=1}_bind(){let t=this.dom;t.addEventListener("pointerdown",n=>{this.enabled&&(this.interaction?.captured||n.pointerType==="touch"&&this._touches?.size>=1||(this._drag={x:n.clientX,y:n.clientY,az:this.az.x,moved:!1,id:n.pointerId}))}),window.addEventListener("pointermove",n=>{let i=this._drag;if(!i||n.pointerId!==i.id||this._pinch)return;if(this.interaction?.captured||this.interaction?.drag){this._drag=null;return}let r=n.clientX-i.x;if(Math.abs(r)>6&&(i.moved=!0),i.moved){this.followCritter=null;let o=this.dom.clientWidth||1e3;this.az.target=i.az-r/o*Math.PI*1.1,this.az.x=this.az.x+(this.az.target-this.az.x)*.5}}),window.addEventListener("pointerup",n=>{let i=this._drag;if(!(!i||n.pointerId!==i.id)&&(this._drag=null,i.moved)){let r=this.corner;this.snap(),this.corner!==r&&this.onRotate?.(0)}}),t.addEventListener("wheel",n=>{if(!this.enabled)return;n.preventDefault();let i=_t(this.zoom.target*(1+Math.sign(n.deltaY)*.1),.42,1.12);this._zoomToward(n.clientX,n.clientY,i)},{passive:!1}),this._touches=new Map,t.addEventListener("pointerdown",n=>{if(n.pointerType==="touch"&&(this._touches.set(n.pointerId,{x:n.clientX,y:n.clientY}),this._touches.size===2)){let[i,r]=[...this._touches.values()];this._pinch={d:Math.hypot(i.x-r.x,i.y-r.y),z:this.zoom.target},this._drag=null}}),window.addEventListener("pointermove",n=>{if(this._touches.has(n.pointerId)&&(this._touches.set(n.pointerId,{x:n.clientX,y:n.clientY}),this._pinch&&this._touches.size===2)){let[i,r]=[...this._touches.values()],o=Math.hypot(i.x-r.x,i.y-r.y),a=_t(this._pinch.z*this._pinch.d/Math.max(20,o),.42,1.12);this._zoomToward((i.x+r.x)/2,(i.y+r.y)/2,a)}});let e=n=>{this._touches.delete(n.pointerId),this._touches.size<2&&(this._pinch=null)};window.addEventListener("pointerup",e),window.addEventListener("pointercancel",e)}_zoomToward(t,e,n){let i=this.zoom.target;if(this.zoom.target=n,!this.room)return;let r=this.dom.getBoundingClientRect(),o=new Y((t-r.left)/r.width*2-1,-((e-r.top)/r.height)*2+1);if(o0.setFromCamera(o,this.camera),o0.ray.intersectPlane(L1,a0)){let a=n<i?.35:-.25,l=n<i?a0:new A(0,0,0);this.focus.x+=(l.x-this.focus.x)*Math.abs(a),this.focus.z+=(l.z-this.focus.z)*Math.abs(a),n>=.98&&this.focus.set(0,.9,0);let c=this.room.w/2-1,h=this.room.d/2-1;this.focus.x=_t(this.focus.x,-c,c),this.focus.z=_t(this.focus.z,-h,h)}}update(t){if(this._time+=t,this.az.update(t),this.zoom.update(t),this.followCritter){let l=this.followCritter.root.position;this.focus.set(l.x,.7,l.z)}else this.zoom.target>=.98&&(this.focus.x=Ye(this.focus.x,0,2,t),this.focus.z=Ye(this.focus.z,0,2,t));this.target.x=Ye(this.target.x,this.focus.x,4,t),this.target.y=Ye(this.target.y,this.focus.y,4,t),this.target.z=Ye(this.target.z,this.focus.z,4,t);let e=this.idleSway?Math.sin(this._time*.12)*.012:0,n=this.az.x+e,i=this.elevation+(1-this.zoom.x)*.08,r=this.fitDist*this.zoom.x,o=this.camera;o.position.set(this.target.x+Math.sin(n)*Math.cos(i)*r,this.target.y+Math.sin(i)*r,this.target.z+Math.cos(n)*Math.cos(i)*r),o.lookAt(this.target);let a=(Math.round((this.az.x-Math.PI/4)/(Math.PI/2))%4+4)%4;a!==this._shownCorner&&(this._shownCorner=a,this.onCornerChange?.(a))}cornerKey(){let t=this.az.x,e=Math.sin(t);return(Math.cos(t)>0?"n":"s")+(e>0?"w":"e")}};var qr=new qi,l0=new Y,ya=new pn,Yr=new A,eh=class{constructor({dom:t,camera:e,getCritters:n,getProps:i=()=>[],clampPos:r=null,onClickCritter:o,onClickProp:a,onClickEmpty:l,onHover:c,onDrop:h,sound:u}){this.dom=t,this.camera=e,this.getCritters=n,this.getProps=i,this.clampPos=r,this.onClickCritter=o,this.onClickProp=a,this.onClickEmpty=l,this.onHover=c,this.onDrop=h,this.sound=u,this.enabled=!0,this.pointer={x:0,y:0,down:!1,inside:!1},this.hoverCritter=null,this.hoverProp=null,this.press=null,this.drag=null,this.captured=!1,this.cursorWorld=new A,this.pet={critter:null,travel:0,lastX:0,lastY:0,idle:0,dirChanges:0,lastDx:0,active:!1},t.addEventListener("pointermove",d=>this._move(d)),t.addEventListener("pointerdown",d=>this._down(d)),window.addEventListener("pointerup",d=>this._up(d)),t.addEventListener("pointerleave",()=>{this.pointer.inside=!1,this._setHover(null,null)}),t.addEventListener("pointerenter",()=>this.pointer.inside=!0)}_ndcFrom(t){let e=this.dom.getBoundingClientRect();this.pointer.x=t.clientX-e.left,this.pointer.y=t.clientY-e.top,l0.set(this.pointer.x/e.width*2-1,-(this.pointer.y/e.height)*2+1),qr.setFromCamera(l0,this.camera)}pick(){let t=this.getCritters().filter(l=>l.root.visible),e=[];for(let l of t){e.push(l.body);for(let c of l.feet)e.push(c)}let n=qr.intersectObjects(e,!1),i=n.length?n[0].object.userData.critter:null;if(!i){let l=.42;for(let c of t){let h=c.root.position.clone();h.y+=.5*c.size+c.mover.position.y;let u=qr.ray.distanceToPoint(h);u<l*c.size&&(l=u,i=c)}}let r=null,o=null,a=this.getProps();if(a.length){let l=qr.intersectObjects(a,!0);for(let c of l){let h=c.object;for(;h&&!h.userData.interactive;)h=h.parent;if(h&&h.visible!==!1){r=h,o=c;break}}}if(i&&r&&o){let l=i.root.position.distanceTo(this.camera.position);o.distance<l-1.2?i=null:r=null}return{critter:i,prop:r}}_setHover(t,e){t!==this.hoverCritter&&(this.hoverCritter&&(this.hoverCritter.hoverTarget=0),this.hoverCritter=t,t&&(t.hoverTarget=1)),e!==this.hoverProp&&(this.hoverProp?.userData.onHover?.(!1),this.hoverProp=e,e?.userData.onHover?.(!0)),this.dom.style.cursor=this.drag?"grabbing":t?"grab":e?"pointer":"",this.onHover?.(t,e,this.pointer)}_move(t){if(!this.enabled||(this._ndcFrom(t),this.pointer.inside=!0,this.drag))return;if(this.press&&!this.drag){let r=this.pointer.x-this.press.x,o=this.pointer.y-this.press.y;this.press.critter&&Math.hypot(r,o)>7&&this._startDrag(this.press.critter);return}let{critter:e,prop:n}=this.pick();this._setHover(e,e?null:n);let i=this.pet;if(e){i.critter!==e&&(this._endPet(),i.critter=e,i.travel=0,i.dirChanges=0,i.lastX=this.pointer.x,i.lastY=this.pointer.y);let r=this.pointer.x-i.lastX,o=this.pointer.y-i.lastY;i.travel+=Math.hypot(r,o),Math.abs(r)>2&&Math.sign(r)!==Math.sign(i.lastDx||r)&&i.dirChanges++,Math.abs(r)>2&&(i.lastDx=r),i.lastX=this.pointer.x,i.lastY=this.pointer.y,i.idle=0,!i.active&&i.travel>140&&i.dirChanges>=2&&!e.held&&!e.busyWith?.("sleep")&&(i.active=!0,e.play("pet"),e.petting=!0,this.onPet?.(e));let a=e.root.position.clone();a.y+=.55*e.size,a.project(this.camera);let l=this.dom.getBoundingClientRect(),c=(a.x*.5+.5)*l.width,h=(-a.y*.5+.5)*l.height;e.petLean={x:_t((c-this.pointer.x)/60,-1,1),y:_t((this.pointer.y-h)/80,-1,1)}}else this._endPet()}_endPet(){let t=this.pet;t.critter&&t.active&&(t.critter.stop("pet"),t.critter.petting=!1,t.critter.setMood("content",6)),t.critter=null,t.active=!1,t.travel=0,t.dirChanges=0}_down(t){if(!this.enabled)return;this.sound?.unlock(),this._ndcFrom(t);let{critter:e,prop:n}=this.pick();if(this.captured=!!(e||n),this.press={x:this.pointer.x,y:this.pointer.y,critter:e,prop:n,t:performance.now()},e)try{this.dom.setPointerCapture(t.pointerId)}catch{}}_up(t){if(!this.press)return;let e=this.press;this.press=null,this.drag?this._endDrag():e.critter?(this._endPet(),e.critter.poke(),this.onClickCritter?.(e.critter)):e.prop?(e.prop.userData.onClick?.(e.prop),this.onClickProp?.(e.prop)):Math.hypot(this.pointer.x-e.x,this.pointer.y-e.y)<6&&this.onClickEmpty?.(e),setTimeout(()=>this.captured=!1,0)}_startDrag(t){this._endPet(),this.onDragStart?.(t),this.drag={critter:t,prev:t.root.position.clone(),height:.85},t.stopWalking(),t.held=!0,t.falling=!1,t.vy=0,t.heldHeight=this.drag.height,t.stopSlot("main",.1),t.play("held"),t.drop?.(!0),this.dom.style.cursor="grabbing"}_endDrag(){let t=this.drag.critter;this.drag=null,t.held=!1,t.falling=!0,t.vy=.5,t.stop("held",.15),this.dom.style.cursor="",this.onDrop?.(t)}update(t){if(this.drag){let e=this.drag.critter,n=this.drag.height+1*e.size;if(ya.set(new A(0,1,0),-n),qr.ray.intersectPlane(ya,Yr)){let i=Yr.x,r=Yr.z;this.clampPos&&([i,r]=this.clampPos(i,r,e));let o=e.root.position,a=Ye(o.x,i,18,t),l=Ye(o.z,r,18,t),c=(a-o.x)/Math.max(t,1e-4),h=(l-o.z)/Math.max(t,1e-4);o.x=a,o.z=l;let u=Math.sin(e.heading),d=Math.cos(e.heading);e.heldVel.x=Ye(e.heldVel.x,c*d-h*u,8,t),e.heldVel.y=Ye(e.heldVel.y,c*u+h*d,8,t);let f=this.camera.position;e.setHeading(Math.atan2(f.x-o.x,f.z-o.z))}}if(this.hoverCritter&&!this.drag&&this.pointer.inside){ya.set(new A(0,0,1).applyQuaternion(this.camera.quaternion),0);let e=this.hoverCritter,n=e.root.position.clone();if(n.y+=.6,ya.setFromNormalAndCoplanarPoint(new A(0,0,1).applyQuaternion(this.camera.quaternion),n),qr.ray.intersectPlane(ya,Yr)){let i=this.camera.position.clone().sub(Yr).normalize().multiplyScalar(1.5);e.lookAt(Yr.clone().add(i),.6)}}this.pet.active&&(this.pet.idle+=t,this.pet.idle>.7&&this._endPet())}};function nh(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Me,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=c0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=c0(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function c0(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new an(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var We={cream:"#fff4e4",paper:"#fffaf0",wood:"#d79a64",woodLight:"#e8b680",woodDark:"#a8683f",walnut:"#8a5536",terracotta:"#e0805a",clay:"#d8735a",sage:"#a8c98a",leaf:"#78b85e",leafDark:"#4f9a4a",mint:"#9fdcc0",peach:"#ffb99a",blush:"#ffc4cf",rose:"#f490a8",butter:"#ffe08a",mustard:"#f2c14e",sky:"#9ccdf2",denim:"#7a9fd6",lilac:"#c7b6ee",plum:"#9a6fb0",charcoal:"#4a3c38",ink:"#3b2a25",white:"#fffdf8",metal:"#c9c3bd",brass:"#e2b866",glass:"#dff3ff"},vd=new Map;function L(s,t={}){let e=JSON.stringify([s,t.roughness,t.metalness,t.emissive,t.emissiveIntensity,t.transparent,t.opacity,t.side,t.flat]);if(vd.has(e))return vd.get(e);let n=new ke({color:new bt(s),roughness:t.roughness??.72,metalness:t.metalness??0,emissive:t.emissive?new bt(t.emissive):new bt(0,0,0),emissiveIntensity:t.emissiveIntensity??1,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??Jn,flatShading:!!t.flat,envMapIntensity:t.envMapIntensity??.6});return vd.set(e,n),n}function $r(s,t={}){return new ke({color:new bt(s),roughness:t.roughness??.7,metalness:t.metalness??0,emissive:t.emissive?new bt(t.emissive):new bt(0,0,0),emissiveIntensity:t.emissiveIntensity??1,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??Jn,map:t.map||null,envMapIntensity:t.envMapIntensity??.6})}function xn(s,t={}){return new ke({map:s,color:new bt(t.color??"#ffffff"),roughness:t.roughness??.8,metalness:0,transparent:!!t.transparent,side:t.side??Jn,envMapIntensity:t.envMapIntensity??.5,alphaTest:t.alphaTest??0})}var _a=new A;function ti(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;_a.copy(t),_a[n]=0,_a.normalize();let c=.5*o/(o+a),h=1-_a.angleTo(s)/l;return Math.sign(_a[e])===1?h*c:a/(o+a)+c+c*(1-h)}var ba=class s extends li{constructor(t=1,e=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new A,c=new A,h=new A(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,x=new A,g=.5/o;for(let m=0,M=0;m<u.length;m+=3,M+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*r,u[m+1]=h.y*Math.sign(l.y)+c.y*r,u[m+2]=h.z*Math.sign(l.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/p)){case 0:x.set(1,0,0),f[M+0]=ti(x,c,"z","y",r,n),f[M+1]=1-ti(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),f[M+0]=1-ti(x,c,"z","y",r,n),f[M+1]=1-ti(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),f[M+0]=1-ti(x,c,"x","z",r,t),f[M+1]=ti(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[M+0]=1-ti(x,c,"x","z",r,t),f[M+1]=1-ti(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[M+0]=1-ti(x,c,"x","y",r,t),f[M+1]=1-ti(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),f[M+0]=ti(x,c,"x","y",r,t),f[M+1]=1-ti(x,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var yd=new Map,Di=(s,t)=>{if(!yd.has(s)){let e=t();e.userData.shared=!0,yd.set(s,e)}return yd.get(s)};function et(s,t,e,n=.04,i=3){return n=Math.min(n,s/2-1e-4,t/2-1e-4,e/2-1e-4),Di(`rbox:${s}:${t}:${e}:${n}:${i}`,()=>new ba(s,t,e,i,Math.max(1e-4,n)))}function _e(s,t,e,n=24,i=!1){return Di(`cyl:${s}:${t}:${e}:${n}:${i}`,()=>new ci(s,t,e,n,1,i))}function Ve(s,t,e=.05,n=32){return Di(`rcyl:${s}:${t}:${e}:${n}`,()=>{let i=Math.min(e,s*.5,t*.5),r=[new Y(0,-t/2)],o=6;for(let a=0;a<=o;a++){let l=-Math.PI/2+a/o*(Math.PI/2);r.push(new Y(s-i+Math.cos(l)*i,-t/2+i+Math.sin(l)*i))}for(let a=0;a<=o;a++){let l=a/o*(Math.PI/2);r.push(new Y(s-i+Math.cos(l)*i,t/2-i+Math.sin(l)*i))}return r.push(new Y(0,t/2)),new Zn(r,n)})}function ie(s,t=24,e=16){return Di(`sphere:${s}:${t}:${e}`,()=>new Nn(s,t,e))}function en(s,t,e=12,n=32,i=Math.PI*2){return Di(`torus:${s}:${t}:${e}:${n}:${i}`,()=>new zo(s,t,e,n,i))}function Gn(s,t,e=6,n=14){return Di(`capsule:${s}:${t}:${e}:${n}`,()=>new Cs(s,t,e,n))}function Xs(s,t){return Di(`plane:${s}:${t}`,()=>new hi(s,t))}function Ma(s,t=40){return Di(`circle:${s}:${t}`,()=>new Ps(s,t))}function vs(s,t,e,n=.5){return Di(`cushion:${s}:${t}:${e}:${n}`,()=>{let i=new ba(s,t,e,5,Math.min(s,t,e)*.45),r=i.attributes.position;for(let o=0;o<r.count;o++){let a=r.getX(o)/(s/2),l=r.getZ(o)/(e/2),c=r.getY(o),h=(1-Math.min(1,a*a))*(1-Math.min(1,l*l));r.setY(o,c+Math.sign(c)*h*t*n*.5)}return i.computeVertexNormals(),i})}function Ji(s,t=32,e=40,n=null){let i=()=>{let o=new Xi(s.map(([a,l])=>new Y(a,l))).getSpacedPoints(e).map(a=>new Y(Math.max(0,a.x),a.y));return new Zn(o,t)};return n?Di(`slathe:${n}`,i):i()}function I(s,t,e={}){let n=new Lt(s,t);return e.pos&&n.position.set(...e.pos),e.rot&&n.rotation.set(...e.rot),e.scale!==void 0&&(Array.isArray(e.scale)?n.scale.set(...e.scale):n.scale.setScalar(e.scale)),n.castShadow=e.cast??!0,n.receiveShadow=e.receive??!0,e.name&&(n.name=e.name),n}function Oe(s={},...t){let e=new ht;s.pos&&e.position.set(...s.pos),s.rot&&e.rotation.set(...s.rot),s.scale!==void 0&&(Array.isArray(s.scale)?e.scale.set(...s.scale):e.scale.setScalar(s.scale)),s.name&&(e.name=s.name);for(let n of t)n&&e.add(n);return e}var ih=class{constructor(t,e,n=.2,i=.4){this.w=t,this.d=e,this.cell=n,this.inflate=i,this.cols=Math.round(t/n),this.rows=Math.round(e/n),this.blocked=new Uint8Array(this.cols*this.rows),this.wallMargin=.42}ix(t){return Math.floor((t+this.w/2)/this.cell)}iz(t){return Math.floor((t+this.d/2)/this.cell)}cx(t){return-this.w/2+(t+.5)*this.cell}cz(t){return-this.d/2+(t+.5)*this.cell}build(t,e=[]){let{cols:n,rows:i}=this;this.blocked.fill(0);for(let r=0;r<i;r++)for(let o=0;o<n;o++){let a=this.cx(o),l=this.cz(r);if(Math.abs(a)>this.w/2-this.wallMargin||Math.abs(l)>this.d/2-this.wallMargin){this.blocked[r*n+o]=1;continue}for(let c of t)if(h0(c,a,l,this.inflate)){this.blocked[r*n+o]=1;break}}for(let r of e)for(let o=0;o<i;o++)for(let a=0;a<n;a++)h0(r,this.cx(a),this.cz(o),0)&&(this.blocked[o*n+a]=0)}isFreeCell(t,e){return t>=0&&e>=0&&t<this.cols&&e<this.rows&&!this.blocked[e*this.cols+t]}isFree(t,e){return this.isFreeCell(this.ix(t),this.iz(e))}nearestFree(t,e){let n=this.ix(t),i=this.iz(e);if(this.isFreeCell(n,i))return{x:t,z:e};for(let r=1;r<Math.max(this.cols,this.rows);r++){let o=null,a=1/0;for(let l=-r;l<=r;l++)for(let c=-r;c<=r;c++){if(Math.max(Math.abs(c),Math.abs(l))!==r)continue;let h=n+c,u=i+l;if(!this.isFreeCell(h,u))continue;let d=c*c+l*l;d<a&&(a=d,o={x:this.cx(h),z:this.cz(u)})}if(o)return o}return{x:0,z:0}}lineOfSight(t,e,n,i){let r=Math.hypot(n-t,i-e),o=Math.ceil(r/(this.cell*.5));for(let a=1;a<o;a++){let l=a/o;if(!this.isFree(t+(n-t)*l,e+(i-e)*l))return!1}return!0}findPath(t,e){let{cols:n,rows:i}=this,r=this.nearestFree(t.x,t.z),o=this.nearestFree(e.x,e.z),a=this.ix(r.x),l=this.iz(r.z),c=this.ix(o.x),h=this.iz(o.z);if(this.lineOfSight(t.x,t.z,e.x,e.z)&&this.isFree(e.x,e.z))return[{x:e.x,z:e.z}];let u=n*i,d=new Float32Array(u).fill(1/0),f=new Int32Array(u).fill(-1),p=new Uint8Array(u),x=new _d,g=l*n+a,m=h*n+c;d[g]=0;let M=(D,U)=>{let B=Math.abs(D-c),N=Math.abs(U-h);return B+N+(Math.SQRT2-2)*Math.min(B,N)};x.push(g,M(a,l));let T=!1,v=0;for(;x.size&&v++<2e4;){let D=x.pop();if(D===m){T=!0;break}if(p[D])continue;p[D]=1;let U=D%n,B=D/n|0;for(let N=-1;N<=1;N++)for(let H=-1;H<=1;H++){if(!H&&!N)continue;let Z=U+H,$=B+N;if(!this.isFreeCell(Z,$)||H&&N&&(!this.isFreeCell(U+H,B)||!this.isFreeCell(U,B+N)))continue;let at=$*n+Z;if(p[at])continue;let z=d[D]+(H&&N?Math.SQRT2:1);z<d[at]&&(d[at]=z,f[at]=D,x.push(at,z+M(Z,$)))}}if(!T)return null;let w=[];for(let D=m;D!==-1&&D!==g;D=f[D])w.push(D);w.reverse();let b=w.map(D=>({x:this.cx(D%n),z:this.cz(D/n|0)}));b.push({x:e.x,z:e.z});let C=[],y=t.x,E=t.z,P=0;for(;P<b.length;){let D=P;for(let U=b.length-1;U>P;U--)if(this.lineOfSight(y,E,b[U].x,b[U].z)){D=U;break}C.push(b[D]),y=b[D].x,E=b[D].z,P=D+1}return C}randomFree(t=Math.random,e=null,n=3){for(let i=0;i<80;i++){let r,o;if(e){let a=t()*Math.PI*2,l=t()*n;r=e.x+Math.cos(a)*l,o=e.z+Math.sin(a)*l}else r=(t()-.5)*this.w,o=(t()-.5)*this.d;if(this.isFree(r,o))return{x:r,z:o}}return this.nearestFree(e?e.x:0,e?e.z:0)}};function h0(s,t,e,n){let i=t-s.x,r=e-s.z;if(s.r!==void 0)return i*i+r*r<(s.r+n)*(s.r+n);let o=i*Math.cos(s.rot||0)-r*Math.sin(s.rot||0),a=i*Math.sin(s.rot||0)+r*Math.cos(s.rot||0);return Math.abs(o)<s.w/2+n&&Math.abs(a)<s.d/2+n}var _d=class{constructor(){this.items=[],this.prio=[]}get size(){return this.items.length}push(t,e){let n=this.items,i=this.prio;n.push(t),i.push(e);let r=n.length-1;for(;r>0;){let o=r-1>>1;if(i[o]<=i[r])break;[n[o],n[r]]=[n[r],n[o]],[i[o],i[r]]=[i[r],i[o]],r=o}}pop(){let t=this.items,e=this.prio,n=t[0],i=t.pop(),r=e.pop();if(t.length){t[0]=i,e[0]=r;let o=0;for(;;){let a=2*o+1,l=a+1,c=o;if(a<t.length&&e[a]<e[c]&&(c=a),l<t.length&&e[l]<e[c]&&(c=l),c===o)break;[t[c],t[o]]=[t[o],t[c]],[e[c],e[o]]=[e[o],e[c]],o=c}}return n}};var N1=new oe;function bd(s,t){let e=s.index?s.toNonIndexed():s.clone();for(let n of Object.keys(e.attributes))["position","normal","uv"].includes(n)||e.deleteAttribute(n);return e.attributes.normal||e.computeVertexNormals(),e.attributes.uv||e.setAttribute("uv",new Kt(new Float32Array(e.attributes.position.count*2),2)),e.morphAttributes={},e.clearGroups(),e.applyMatrix4(t),e}function U1(s){return s.isMesh&&!s.isSkinnedMesh&&!s.isInstancedMesh&&!Array.isArray(s.material)&&!s.material.transparent&&!s.userData.keep&&!s.userData.dynamic&&s.children.length===0&&s.visible}function Zr(s){s.updateMatrixWorld(!0);let t=new oe().copy(s.matrixWorld).invert(),e=new Map,n=[],i=o=>{for(let a of o.children){if(a.userData.dynamic){Zr(a);continue}if(U1(a)){let l=`${a.material.uuid}|${a.castShadow?1:0}${a.receiveShadow?1:0}`,c=e.get(l);c||e.set(l,c={material:a.material,cast:a.castShadow,receive:a.receiveShadow,list:[]}),c.list.push(a)}else i(a)}};i(s);let r=0;for(let o of e.values()){if(o.list.length<2)continue;let a=o.list.map(h=>bd(h.geometry,N1.multiplyMatrices(t,h.matrixWorld))),l=nh(a,!1);for(let h of a)h.dispose();if(!l)continue;l.computeBoundingSphere();let c=new Lt(l,o.material);c.castShadow=o.cast,c.receiveShadow=o.receive,c.name="baked",s.add(c);for(let h of o.list)n.push(h);r+=o.list.length-1}for(let o of n)o.parent?.remove(o);return r}var Sa=.34,qs=.24,u0={north:{normal:new A(0,0,1),rotY:0},south:{normal:new A(0,0,-1),rotY:Math.PI},west:{normal:new A(1,0,0),rotY:Math.PI/2},east:{normal:new A(-1,0,0),rotY:-Math.PI/2}},Md=class{constructor(t,e,n){this.room=t,this.side=e;let{w:i,d:r,h:o}=t,a=u0[e];this.inward=a.normal.clone(),this.outward=a.normal.clone().negate(),this.length=e==="north"||e==="south"?i+2*qs:r,this.innerLength=e==="north"||e==="south"?i:r,this.height=o,this.group=new ht,this.group.name=`wall:${e}`,this.group.rotation.y=a.rotY,e==="north"&&this.group.position.set(0,0,-r/2),e==="south"&&this.group.position.set(0,0,r/2),e==="west"&&this.group.position.set(-i/2,0,0),e==="east"&&this.group.position.set(i/2,0,0),t.group.add(this.group),this.openings=t.spec.openings.filter(p=>p.wall===e);let l=Jp({...t.spec.wallStyle,...n||{},height:o}),c=xn(l,{roughness:.9}),h=L(t.spec.wallCap||"#fff3e3",{roughness:.85});this.materials=[c,h],this.stub=new Lt(this._extrude(0,Sa),this.materials),this.stub.receiveShadow=!0,this.stub.castShadow=!0,this.group.add(this.stub),this.upperPivot=new ht,this.upperPivot.position.y=Sa,this.group.add(this.upperPivot);let u=this._extrude(Sa,o);u.translate(0,-Sa,0),this.upper=new Lt(u,this.materials),this.upper.receiveShadow=!0,this.upper.castShadow=!1,this.upperPivot.add(this.upper);let d=new Lt(et(this.length+.02,.08,qs+.06,.03),L(t.spec.trim||"#e9b98c",{roughness:.7}));d.position.set(0,o-Sa-.02,-qs/2),d.castShadow=!1,this.upperPivot.add(d);let f=new Mn({colorWrite:!1,depthWrite:!1});this.proxy=new Lt(this._extrude(0,o),f),this.proxy.castShadow=!0,this.proxy.receiveShadow=!1,this.proxy.userData.noAO=!0,this.proxy.renderOrder=-1,this.group.add(this.proxy),this.decor=new ht,this.decor.name="decor",this.group.add(this.decor),this.items=[],this.followers=[],this.cut=new kn(0,2.2,.85),this.decorVis=1,this.hidden=!1}_extrude(t,e){let n=this.length,i=new Sn;i.moveTo(-n/2,t),i.lineTo(n/2,t),i.lineTo(n/2,e),i.lineTo(-n/2,e),i.lineTo(-n/2,t);let r=[];for(let a of this.openings){let l=a.type==="door"?0:a.y,c=a.type==="door"?a.h:a.y+a.h;if(c<=t||l>=e)continue;let h=Math.max(l,t+(a.type==="door"&&l<=t?-1:1e-4)),u=Math.min(c,e-1e-4),d=k1(a,h,u,t,e);d.notch?r.push(d):i.holes.push(d.path)}let o;if(r.length){let a=new Sn,l=r.sort((c,h)=>c.x0-h.x0);a.moveTo(-n/2,t);for(let c of l)a.lineTo(c.x0,t),c.draw(a),a.lineTo(c.x1,t);a.lineTo(n/2,t),a.lineTo(n/2,e),a.lineTo(-n/2,e),a.lineTo(-n/2,t),a.holes=i.holes,o=new Pn(a,{depth:qs,bevelEnabled:!1,curveSegments:24})}else o=new Pn(i,{depth:qs,bevelEnabled:!1,curveSegments:24});return o.translate(0,0,-qs),o}add(t,e,n,i=0,r={}){let o=new ht;return o.position.set(e,n,i),o.add(t),o.userData.order=r.order??n,this.decor.add(o),this.items.push(o),r.footprint&&this.room.blockWall(this,e,r.footprint),o}toWorld(t,e,n=0){return this.group.localToWorld(new A(t,e,n))}update(t,e,n=null){let i=this.outward.x*e.x+this.outward.z*e.z,r=n!==null?n:i>.18?1:0;this.cut.target=r,this.cut.update(t);let o=_t(this.cut.x,0,1.08),a=Math.max(5e-4,1-o);this.upperPivot.scale.y=a,this.upperPivot.visible=a>.002;let l=r?0:1,c=r?7:3.2;this.decorVis+=_t(l-this.decorVis,-c*t,c*t);let h=this.items.length;for(let u=0;u<h;u++){let d=this.items[u],f=d.userData.order/this.height*.35,p=r?_t((this.decorVis-f*.5)/(1-.35*.5)):_t((this.decorVis-(.35-f))/.65),x=r?zs(0,1,p):ms(p);d.scale.setScalar(Math.max(1e-4,x)),d.visible=x>.01}for(let u of this.followers){let d=r?_t((this.decorVis-.2)/.8):_t((this.decorVis-.35)/.65),f=r?zs(0,1,d):ms(d),p=u.userData.baseScale;u.scale.set(p.x*Math.max(1e-4,f),p.y*Math.max(1e-4,f),p.z*Math.max(1e-4,f)),u.visible=f>.01}this.hidden=o>.5}};function k1(s,t,e,n,i){let r=s.x-s.w/2,o=s.x+s.w/2,a=t<=n,l=s.shape||(s.type==="door"?"arch":"rect"),c=s.w/2;if(a){let u=Math.min(e,i),d=l==="arch"&&e===s.h&&e-c>=n;return{notch:!0,x0:r,x1:o,draw(f){d?(f.lineTo(r,e-c),f.absarc(s.x,e-c,c,Math.PI,0,!0)):(f.lineTo(r,u),f.lineTo(o,u)),f.lineTo(o,n)}}}let h=new wi;if(l==="round"){let u=Math.min(s.w,s.h)/2,d=s.y+s.h/2;return h.absarc(s.x,d,u,0,Math.PI*2,!1),{path:h}}return l==="arch"&&e===s.y+s.h?(h.moveTo(r,t),h.lineTo(o,t),h.lineTo(o,e-c),h.absarc(s.x,e-c,c,0,Math.PI,!1),h.lineTo(r,t),{path:h}):(h.moveTo(r,t),h.lineTo(o,t),h.lineTo(o,e),h.lineTo(r,e),h.lineTo(r,t),{path:h})}var Jr=class{constructor(t){this.spec=t,this.id=t.id,this.name=t.name,this.w=t.w,this.d=t.d,this.h=t.h,this.group=new ht,this.group.name=`room:${t.id}`,this.props=new ht,this.props.name="props",this.group.add(this.props),this.interactive=[],this.stations=[],this.updaters=[],this.lights=[],this.glows=[],this.windows=[],this.doors=[],this.footprints=[],this.statics=[],this._buildFloor(),this.walls={};for(let e of Object.keys(u0))this.walls[e]=new Md(this,e,t.walls?.[e]);this.nav=new ih(this.w,this.d,.2,.42)}_buildFloor(){let{w:t,d:e,spec:n}=this,i=n.floor||{},r=i.type==="tiles"?Zp(i):$p(i),o=new hi(t,e);o.rotateX(-Math.PI/2);let a=o.attributes.uv,l=o.attributes.position;for(let p=0;p<a.count;p++)a.setXY(p,l.getX(p),l.getZ(p));let c=new Lt(o,xn(r,{roughness:i.roughness??.62}));c.receiveShadow=!0,c.name="floor",this.group.add(c),this.floor=c;let h=qs+.22,u=new Lt(et(t+h*2,.36,e+h*2,.12,4),L(n.base?.[0]||"#fff1e2",{roughness:.85}));u.position.y=-.18-.002,u.receiveShadow=!0,u.castShadow=!1,this.group.add(u);let d=new Lt(et(t+h*2-.16,.34,e+h*2-.16,.12,4),L(n.base?.[1]||"#f6b9a2",{roughness:.8}));d.position.y=-.52,d.castShadow=!1,this.group.add(d);let f=new Lt(et(t+h*2-.5,.22,e+h*2-.5,.1,4),L(n.base?.[2]||"#e99a86",{roughness:.8}));f.position.y=-.78,f.castShadow=!1,this.group.add(f)}place(t,{x:e=0,z:n=0,rot:i=0,y:r=0,footprint:o=null,interactive:a=null,isStatic:l=!0,hideWith:c=null}={}){return t.position.set(e,r,n),t.rotation.y=i,this.props.add(t),o&&this.block(e,n,i,o),a&&this.makeInteractive(t,a),c?(this.walls[c].followers.push(t),t.userData.baseScale=t.scale.clone()):l&&!a&&this.statics.push(t),t}block(t,e,n,i){this.footprints.push({x:t,z:e,rot:n,...i})}blockWall(t,e,n){let i=t.toWorld(e,0,(n.depth||.5)/2),r=t.group.rotation.y;this.block(i.x,i.z,r,{w:n.w,d:n.depth||.5})}makeInteractive(t,e){return t.userData.interactive=!0,t.userData.label=e.label,t.userData.hint=e.hint,t.userData.onClick=e.onClick,t.userData.onHover=e.onHover,t.userData.room=this,this.interactive.push(t),t}station(t){let e={room:this.id,occupant:null,reservedBy:null,seat:0,capacity:1,tags:[],...t};return this.stations.push(e),e}onUpdate(t){this.updaters.push(t)}finalize(){this.nav.build(this.footprints,this.spec.navOpen||[]),this._bakeStatics();for(let t of this.interactive)Zr(t);for(let t of Object.values(this.walls)){for(let e of t.items)Zr(e);for(let e of t.followers)Zr(e)}}_bakeStatics(){this.group.updateMatrixWorld(!0);let t=new oe().copy(this.group.matrixWorld).invert(),e=new Map,n=[],i=o=>{for(let a of o.children){if(a.userData.dynamic){Zr(a);continue}if(a.isMesh&&!a.userData.keep&&!Array.isArray(a.material)&&!a.material.transparent&&a.children.length===0){let l=a.material.uuid+(a.castShadow?"c":"")+(a.receiveShadow?"r":""),c=e.get(l);c||e.set(l,c={material:a.material,cast:a.castShadow,receive:a.receiveShadow,geos:[]}),c.geos.push(bd(a.geometry,new oe().multiplyMatrices(t,a.matrixWorld))),n.push(a)}else i(a)}};for(let o of this.statics)i(o);for(let o of n)o.parent?.remove(o);let r=new ht;r.name="baked";for(let o of e.values()){if(!o.geos.length)continue;let a=nh(o.geos,!1);for(let c of o.geos)c.dispose();if(!a)continue;let l=new Lt(a,o.material);l.castShadow=o.cast,l.receiveShadow=o.receive,r.add(l)}this.group.add(r),this.baked=r}update(t,e,n){let i=new A(e.position.x-this.group.position.x,0,e.position.z-this.group.position.z).normalize();for(let r in this.walls)this.walls[r].update(t,i);for(let r of this.updaters)r(t,n)}cornerFor(t){let e=t.position.x-this.group.position.x,i=t.position.z-this.group.position.z>0?"n":"s",r=e>0?"w":"e";return i+r}randomFreePoint(t=Math.random,e=null,n=3){return this.nav.randomFree(t,e,n)}setVisible(t){this.group.visible=t}};var ys=.24;function _s(s,t,e,n,i={}){let r=L(i.frame||"#fff8ef",{roughness:.6}),o=new ht,a=e.y+e.h/2,l=e.shape||"rect";if(l==="round"){let h=Math.min(e.w,e.h)/2;o.add(I(en(h,.07,10,48),r,{pos:[0,0,.02]})),o.add(I(et(.06,h*2,.06,.02),r,{pos:[0,0,-.06]})),o.add(I(et(h*2,.06,.06,.02),r,{pos:[0,0,-.06]}));let u=new Lt(new ci(h,h,ys,48,1,!0),L("#fff3e3",{side:ln,roughness:.8}));u.rotation.x=Math.PI/2,u.position.z=-ys/2,o.add(u)}else{let h=e.w,u=e.h,d=l==="arch",f=new Sn,p=new wi,x=.09,g=h/2;d?(f.moveTo(-h/2-x,-u/2-x),f.lineTo(h/2+x,-u/2-x),f.lineTo(h/2+x,u/2-g),f.absarc(0,u/2-g,g+x,0,Math.PI,!1),f.lineTo(-h/2-x,-u/2-x),p.moveTo(-h/2,-u/2),p.lineTo(h/2,-u/2),p.lineTo(h/2,u/2-g),p.absarc(0,u/2-g,g,0,Math.PI,!1),p.lineTo(-h/2,-u/2)):(f.moveTo(-h/2-x,-u/2-x),f.lineTo(h/2+x,-u/2-x),f.lineTo(h/2+x,u/2+x),f.lineTo(-h/2-x,u/2+x),p.moveTo(-h/2,-u/2),p.lineTo(h/2,-u/2),p.lineTo(h/2,u/2),p.lineTo(-h/2,u/2)),f.holes.push(p);let m=new Pn(f,{depth:.06,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2,curveSegments:24});o.add(I(m,r,{pos:[0,0,0]}));let M=-ys*.5;o.add(I(et(.05,d?u-.02:u,.05,.015),r,{pos:[0,0,M]})),o.add(I(et(h,.05,.05,.015),r,{pos:[0,d?-u*.08:0,M]}));let T=L("#fff3e3",{roughness:.85});o.add(I(et(h,.02,ys,.005),T,{pos:[0,-u/2+.01,-ys/2],cast:!1})),o.add(I(et(h+.36,.08,.3,.03),r,{pos:[0,-u/2-.08,.1]})),i.planter!==!1&&o.add(O1(h*.7,i.flowers)),o.children[o.children.length-1].position.set(0,-u/2-.04,.12)}if(n){let h=Math.max(e.w,e.h)+.7,u=new Mn({map:n.texture,toneMapped:!0}),d=new Lt(Xs(h,h),u);d.position.z=-ys-.28,d.userData.noAO=!0,d.castShadow=!1,o.add(d)}if(i.curtains!==!1&&l!=="round"){let h=e.w*.42,u=e.h+.25,d=i.curtain||"#ffb7a3",f=L(d,{roughness:.95,side:fn});for(let p of[-1,1]){let x=F1(h,u,f);x.position.set(p*(e.w/2+.06),e.h/2+.15,.12),o.add(x),o.add(I(ie(.05,10,8),L(i.tie||"#fff1d6"),{pos:[p*(e.w/2+.06),-.05,.2],scale:[1.4,.8,.8]}))}o.add(I(_e(.025,.025,e.w+.9,10),L(We.woodDark,{roughness:.5}),{pos:[0,e.h/2+.2,.14],rot:[0,0,Math.PI/2]}));for(let p of[-1,1])o.add(I(ie(.05,12,10),L(We.woodDark,{roughness:.5}),{pos:[p*(e.w/2+.47),e.h/2+.2,.14]}))}let c=t.add(o,e.x,a,0,{order:a});return s.windows.push({wall:t,opening:e,holder:c}),c}function F1(s,t,e){let n=new hi(s,t,28,10),i=n.attributes.position;for(let o=0;o<i.count;o++){let a=i.getX(o),l=i.getY(o),c=(l+t/2)/t,h=1-.55*Math.exp(-Math.pow((c-.42)/.12,2)),u=a*h*(.85+.15*c),d=Math.sin(a/s*Math.PI*7)*.035*(.6+.4*(1-c));i.setX(o,u),i.setZ(o,d),i.setY(o,l-t/2)}n.computeVertexNormals();let r=new Lt(n,e);return r.castShadow=!0,r.receiveShadow=!0,r}function O1(s,t=["#ff9db5","#ffd36b","#fff4f0","#c7a8f2"]){let e=Oe({});e.add(I(et(s,.14,.18,.03),L("#e88c66",{roughness:.8}),{pos:[0,.07,0]})),e.add(I(et(s-.04,.02,.14,.01),L("#7a5136"),{pos:[0,.14,0]}));let n=Math.round(s/.12),i=un(Math.round(s*100));for(let r=0;r<n;r++){let o=-s/2+.08+r/Math.max(1,n-1)*(s-.16);e.add(I(_e(.008,.008,.16),L(We.leafDark),{pos:[o,.2,i()*.06-.03]})),e.add(I(ie(.045,10,8),L(t[r%t.length],{roughness:.6}),{pos:[o,.29+i()*.04,i()*.06-.03],scale:[1,.7,1]})),e.add(I(ie(.035,8,6),L(We.leaf),{pos:[o+.04,.18,.02],scale:[1.4,.6,1]}))}return e}function sh(s,t,e,n={}){let i=L(n.color||"#e0915f",{roughness:.6}),r=L(n.trim||"#b8683f",{roughness:.6}),o=new ht,a=e.w,l=e.h,c=a/2,h=new Sn,u=.12;h.moveTo(-a/2-u,0),h.lineTo(-a/2,0),h.lineTo(-a/2,l-c),h.absarc(0,l-c,c,Math.PI,0,!0),h.lineTo(a/2,0),h.lineTo(a/2+u,0),h.lineTo(a/2+u,l-c),h.absarc(0,l-c,c+u,0,Math.PI,!1),h.lineTo(-a/2-u,0);let d=new Pn(h,{depth:.07,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2,curveSegments:24});o.add(I(d,r));let f=new Sn,p=a-.04;f.moveTo(0,0),f.lineTo(p,0),f.lineTo(p,l-c-.02),f.absarc(p/2,l-c-.02,p/2,0,Math.PI,!1),f.lineTo(0,0);let x=new wi;x.absarc(p/2,l-c-.05,.17,0,Yt,!1),f.holes.push(x);let g=new Pn(f,{depth:.08,bevelEnabled:!0,bevelSize:.015,bevelThickness:.015,bevelSegments:2,curveSegments:24}),m=new ht;m.userData.dynamic=!0,m.position.set(-p/2,.01,-ys*.55);let M=I(g,i);m.add(M);for(let b of[.35,.95])M.add(I(et(p*.62,.42,.03,.04),r,{pos:[p/2,b,.1]}));M.add(I(en(.17,.03,8,28),L("#ffe7b0",{roughness:.4,metalness:.3}),{pos:[p/2,l-c-.05,.1]})),M.add(I(ie(.05,14,10),L(We.brass,{roughness:.3,metalness:.7}),{pos:[p-.12,.95,.14]})),o.add(m);let T=new Lt(Xs(a+.4,l+.4),new Mn({color:n.behind||"#ffe1b8"}));if(T.position.set(0,l/2,-ys-.3),T.userData.noAO=!0,o.add(T),n.sign){let b=xd(n.sign,{w:512,h:128,bg:"#fff3df",color:"#8a5536",size:54}),C=I(et(.95,.24,.05,.05),[L("#c98d5d"),L("#c98d5d"),L("#c98d5d"),L("#c98d5d"),xn(b),L("#c98d5d")],{pos:[0,l+.32,.06]});o.add(C)}let v=t.add(o,e.x,0,0,{order:.3}),w={wall:t,opening:e,holder:v,hinge:m,open:0,target:0,to:e.to,leaf:M};return s.doors.push(w),s.onUpdate(b=>{w.open+=(w.target-w.open)*(1-Math.exp(-6*b)),m.rotation.y=-w.open*1.55}),w}function d0(s=2.6,t=1.5){let e=new ht,n=L("#c98d5d",{roughness:.6}),i=e0();i.repeat.set(s/1.2,t/1.2);let r=xn(i,{roughness:.95});e.add(I(et(s+.16,t+.16,.08,.05),n,{pos:[0,0,.04]})),e.add(I(et(s,t,.03,.01),r,{pos:[0,0,.085]}));let o=new ht;o.userData.dynamic=!0,o.position.z=.1,e.add(o);let a=new ht;a.userData.dynamic=!0,a.position.z=.125,e.add(a),e.userData={notes:o,yarn:a,w:s,h:t,slots:[]};let l=5,c=3;for(let h=0;h<c;h++)for(let u=0;u<l;u++)e.userData.slots.push({x:-s/2+.3+(u+.5)*((s-.6)/l)+G(-.06,.06),y:t/2-.28-(h+.5)*((t-.5)/c)+G(-.04,.04),used:null});return e}var z1=["#ff6b6b","#5aa9ff","#ffd23f","#7bd389","#c38bff"];function f0(s,t){let e=new ht,n=n0(s,t),i=new Lt(et(.36,.36,.008,.004),[L(t),L(t),L(t),L(t),xn(n,{roughness:.9}),L(t)]);return i.castShadow=!0,e.add(i),e.add(I(ie(.03,10,8),L($t(z1),{roughness:.35}),{pos:[0,.14,.02]})),e.rotation.z=G(-.12,.12),e.userData.tex=n,e}function p0(s=1.6,t=1.15,e="today"){let n=new ht,i=L("#c98d5d",{roughness:.6});n.add(I(et(s+.14,t+.14,.07,.04),i,{pos:[0,0,.035]}));let r=Ze(512,Math.round(512*t/s)),o=Je(r),a=new Lt(Xs(s,t),new ke({map:o,roughness:.95}));return a.position.z=.075,a.receiveShadow=!0,n.add(a),n.add(I(et(s*.8,.04,.12,.015),i,{pos:[0,-t/2-.06,.1]})),n.add(I(Gn(.012,.06,4,8),L("#fff"),{pos:[-.2,-t/2-.025,.1],rot:[0,0,Math.PI/2]})),n.add(I(Gn(.012,.05,4,8),L("#ffb3c1"),{pos:[-.05,-t/2-.025,.12],rot:[0,.3,Math.PI/2]})),n.userData.draw=l=>B1(r,o,e,l),n.userData.draw([]),n}function B1(s,t,e,n){let i=s.getContext("2d"),r=s.width,o=s.height;i.fillStyle="#3f5a4c",i.fillRect(0,0,r,o);let a=un(3);for(let u=0;u<40;u++)i.fillStyle=`rgba(255,255,255,${a()*.05})`,i.beginPath(),i.ellipse(a()*r,a()*o,20+a()*60,8+a()*20,a()*3,0,Yt),i.fill();i.fillStyle="rgba(255,255,255,0.92)",i.font="48px 'Patrick Hand', cursive",i.textAlign="center",i.fillText(e,r/2,56),i.strokeStyle="rgba(255,255,255,0.6)",i.lineWidth=3,i.beginPath(),i.moveTo(r/2-70,70),i.quadraticCurveTo(r/2,78,r/2+70,68),i.stroke(),i.textAlign="left",i.font="32px 'Patrick Hand', cursive";let l=n.slice(-6);l.length||(i.fillStyle="rgba(255,255,255,0.45)",i.fillText("nothing yet ~ just vibes",40,130)),l.forEach((u,d)=>{let f=120+d*46;i.strokeStyle="rgba(255,255,255,0.85)",i.lineWidth=3,i.strokeRect(36,f-22,24,24),u.done&&(i.beginPath(),i.moveTo(40,f-10),i.lineTo(48,f),i.lineTo(64,f-28),i.strokeStyle="#ffd6a0",i.stroke()),i.fillStyle=u.done?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.92)";let p=va(i,u.text,r-110,1)[0]||"";i.fillText(p,76,f),u.done&&i.fillRect(74,f-10,i.measureText(p).width+4,2)}),i.strokeStyle="rgba(255,190,200,0.8)",i.lineWidth=3;let c=r-60,h=o-50;i.beginPath(),i.moveTo(c,h+12),i.bezierCurveTo(c-24,h-4,c-12,h-22,c,h-8),i.bezierCurveTo(c+12,h-22,c+24,h-4,c,h+12),i.stroke(),t.needsUpdate=!0}function Li(s,t,e,n="#fff7ec"){let i=new ht;i.add(I(et(s+.1,t+.1,.05,.02),L(n,{roughness:.55}),{pos:[0,0,.025]}));let r=Ze(256,Math.round(256*t/s));e(r.getContext("2d"),r.width,r.height);let o=new Lt(Xs(s-.04,t-.04),new ke({map:Je(r),roughness:.6}));return o.position.z=.052,i.add(o),i}var Ni={hills(s,t,e){let n=s.createLinearGradient(0,0,0,e);n.addColorStop(0,"#bfe3ff"),n.addColorStop(1,"#fff1dc"),s.fillStyle=n,s.fillRect(0,0,t,e),s.fillStyle="#ffd36b",s.beginPath(),s.arc(t*.72,e*.3,t*.1,0,Yt),s.fill(),s.fillStyle="#9bd18c",s.beginPath(),s.ellipse(t*.3,e,t*.6,e*.45,0,0,Yt),s.fill(),s.fillStyle="#7cc17a",s.beginPath(),s.ellipse(t*.85,e*1.05,t*.5,e*.4,0,0,Yt),s.fill()},heart(s,t,e){s.fillStyle="#fff1e6",s.fillRect(0,0,t,e),s.fillStyle="#ff8fa8";let n=t*.28,i=t/2,r=e/2;s.beginPath(),s.moveTo(i,r+n*.85),s.bezierCurveTo(i-n*1.25,r+n*.05,i-n*.95,r-n*.95,i,r-n*.38),s.bezierCurveTo(i+n*.95,r-n*.95,i+n*1.25,r+n*.05,i,r+n*.85),s.fill()},critters(s,t,e){s.fillStyle="#fff6ea",s.fillRect(0,0,t,e),["#ffb18f","#93dcbc","#c4b0f2","#ffd977"].forEach((i,r)=>{let o=t*(.2+r*.2),a=e*.68;s.fillStyle=i,s.beginPath(),s.ellipse(o,a,t*.085,e*.2,0,0,Yt),s.fill(),s.fillStyle="#2a1a15",s.beginPath(),s.arc(o-t*.025,a-e*.03,3,0,Yt),s.arc(o+t*.025,a-e*.03,3,0,Yt),s.fill(),s.strokeStyle="#78b85e",s.lineWidth=3,s.beginPath(),s.moveTo(o,a-e*.2),s.lineTo(o+3,a-e*.28),s.stroke()}),s.fillStyle="#8a6f62",s.font=`${Math.round(e*.12)}px 'Patrick Hand', cursive`,s.textAlign="center",s.fillText("the crew",t/2,e*.2)},flower(s,t,e){s.fillStyle="#e9f6ff",s.fillRect(0,0,t,e),s.strokeStyle="#7cc17a",s.lineWidth=6,s.beginPath(),s.moveTo(t/2,e),s.quadraticCurveTo(t*.45,e*.7,t/2,e*.42),s.stroke(),s.fillStyle="#ff9db5";for(let n=0;n<6;n++){let i=n/6*Yt;s.beginPath(),s.arc(t/2+Math.cos(i)*t*.12,e*.38+Math.sin(i)*t*.12,t*.09,0,Yt),s.fill()}s.fillStyle="#ffd36b",s.beginPath(),s.arc(t/2,e*.38,t*.08,0,Yt),s.fill()},stars(s,t,e){s.fillStyle="#4a4f8a",s.fillRect(0,0,t,e);let n=un(7);for(let i=0;i<40;i++)s.fillStyle=`rgba(255,245,210,${.4+n()*.6})`,s.beginPath(),s.arc(n()*t,n()*e,1+n()*2.5,0,Yt),s.fill();s.fillStyle="#ffe9a8",s.beginPath(),s.arc(t*.7,e*.35,t*.14,0,Yt),s.fill(),s.fillStyle="#4a4f8a",s.beginPath(),s.arc(t*.76,e*.31,t*.12,0,Yt),s.fill()},map(s,t,e){s.fillStyle="#fbefd5",s.fillRect(0,0,t,e),s.strokeStyle="#d6a473",s.setLineDash([6,6]),s.lineWidth=3,s.beginPath(),s.moveTo(t*.15,e*.8),s.bezierCurveTo(t*.4,e*.2,t*.6,e*.9,t*.85,e*.25),s.stroke(),s.setLineDash([]),s.strokeStyle="#e8746a",s.lineWidth=5,s.beginPath(),s.moveTo(t*.8,e*.2),s.lineTo(t*.9,e*.3),s.moveTo(t*.9,e*.2),s.lineTo(t*.8,e*.3),s.stroke()}};function rh(s=.32){let t=new ht;t.add(I(Ve(s+.05,.08,.03,40),L("#ffb59a",{roughness:.5}),{pos:[0,0,.04],rot:[Math.PI/2,0,0]}));let e=Ze(256,256),n=e.getContext("2d");n.fillStyle="#fffaf2",n.beginPath(),n.arc(128,128,128,0,Yt),n.fill(),n.fillStyle="#8a6f62";for(let l=0;l<12;l++){let c=l/12*Yt;n.beginPath(),n.arc(128+Math.sin(c)*100,128-Math.cos(c)*100,l%3===0?9:5,0,Yt),n.fill()}let i=new Lt(Ma(s,40),new ke({map:Je(e),roughness:.6}));i.position.z=.085,t.add(i);let r=L("#5a4036",{roughness:.5}),o=new ht;o.add(I(et(.035,s*.55,.012,.01),r,{pos:[0,s*.25,0]}));let a=new ht;return a.add(I(et(.025,s*.8,.012,.01),r,{pos:[0,s*.37,0]})),o.position.z=.095,a.position.z=.105,o.userData.dynamic=a.userData.dynamic=!0,t.add(o,a),t.add(I(ie(.03,10,8),L("#ff8f7a"),{pos:[0,0,.11]})),t.userData.update=l=>{let c=l.getHours()%12,h=l.getMinutes(),u=l.getSeconds();o.rotation.z=-((c+h/60)/12)*Yt,a.rotation.z=-((h+u/60)/60)*Yt},t}function wa(s,t=.25,e=14,n=["#ffd27a","#ffb3c6","#bfe6ff","#c9f2b8","#ffe9a8"]){let i=new ht,r=[];for(let l=0;l<=24;l++){let c=l/24;r.push(new A(-s/2+c*s,-Math.sin(c*Math.PI)*t,.05))}let o=new Ln(r);i.add(I(new Bn(o,48,.008,5,!1),L("#6b5a4e"),{cast:!1}));let a=n.map(l=>$r(l,{emissive:l,emissiveIntensity:1,roughness:.3}));for(let l=0;l<e;l++){let c=(l+.5)/e,h=o.getPoint(c),u=I(ie(.035,10,8),a[l%a.length],{pos:[h.x,h.y-.035,h.z+.01],scale:[1,1.25,1],cast:!1});i.add(u)}return i.userData.bulbMats=a,i}function oh(s,t=.3,e=["#ffb59a","#ffe08a","#9fdcc0","#c7b6ee","#ffc4cf"]){let n=new ht,i=[];for(let l=0;l<=20;l++){let c=l/20;i.push(new A(-s/2+c*s,-Math.sin(c*Math.PI)*t,.06))}let r=new Ln(i);n.add(I(new Bn(r,40,.008,5,!1),L("#fff1e0"),{cast:!1}));let o=Math.floor(s/.28),a=new Me;a.setAttribute("position",new Kt([-.1,0,0,.1,0,0,0,-.2,0],3)),a.setAttribute("normal",new Kt([0,0,1,0,0,1,0,0,1],3)),a.setAttribute("uv",new Kt([0,1,1,1,.5,0],2));for(let l=0;l<o;l++){let c=(l+.5)/o,h=r.getPoint(c),u=I(a,L(e[l%e.length],{side:fn,roughness:.9}),{pos:[h.x,h.y,h.z+.005]});n.add(u)}return n}function ah(s=1.2,t=[]){let e=new ht,n=L(We.woodLight,{roughness:.6});e.add(I(et(s,.06,.28,.02),n,{pos:[0,0,.14]}));for(let r of[-1,1])e.add(I(et(.04,.16,.18,.015),n,{pos:[r*(s/2-.15),-.1,.09]}));let i=-s/2+.12;for(let r of t)r.position.x=i+(r.userData.w||.15)/2,r.position.y+=.03,r.position.z=.15,e.add(r),i+=(r.userData.w||.15)+.06;return e}function lh(s="#ffd27a",t=.18){let e=new ht;return e.add(I(Ve(.065,t,.03,18),L("#e8f6ff",{roughness:.15,transparent:!0,opacity:.55}),{pos:[0,t/2,0],cast:!1})),e.add(I(Ve(.05,t*.7,.02,14),L(s,{roughness:.6}),{pos:[0,t*.37,0]})),e.add(I(Ve(.07,.04,.015,18),L("#e88c66"),{pos:[0,t+.02,0]})),e.userData.w=.14,e}function ch(s="#ffd27a"){let t=new ht,e=L(s,{roughness:.3,metalness:.5});t.add(I(et(.12,.05,.12,.015),L("#8a5536"),{pos:[0,.025,0]})),t.add(I(_e(.015,.025,.08,10),e,{pos:[0,.09,0]})),t.add(I(new Zn([new Y(0,0),new Y(.03,0),new Y(.07,.08),new Y(.075,.12),new Y(.068,.12)],20),e,{pos:[0,.13,0]}));for(let n of[-1,1])t.add(I(en(.03,.008,6,14),e,{pos:[n*.075,.2,0],rot:[0,Math.PI/2,0]}));return t.userData.w=.16,t}function Kr(s="#9ccdf2"){let t=new ht,e=L(s,{roughness:.4,metalness:.2});return t.add(I(et(.16,.14,.12,.04),e,{pos:[0,.07,0]})),t.add(I(et(.13,.1,.1,.04),e,{pos:[0,.2,0]})),t.add(I(et(.09,.04,.01,.01),L("#2a3a4a",{emissive:"#7cf0ff",emissiveIntensity:.6}),{pos:[0,.2,.051]})),t.add(I(_e(.006,.006,.07),L("#555"),{pos:[0,.29,0]})),t.add(I(ie(.02,8,6),L("#ff6b6b",{emissive:"#ff6b6b",emissiveIntensity:.6}),{pos:[0,.33,0]})),t.userData.w=.18,t}function hh(s=3,t=1){let e=new ht,n=un(t),i=["#e8746a","#7aa6dc","#f2c14e","#8dc68a","#c39be0","#f29bb5","#7fc8c0"],r=0;for(let o=0;o<s;o++){let a=.04+n()*.03,l=I(et(.22+n()*.06,a,.16+n()*.04,.01),L(i[Math.floor(n()*i.length)],{roughness:.7}),{pos:[n()*.03,r+a/2,0],rot:[0,n()*.4-.2,0]});e.add(l),r+=a}return e.userData.w=.26,e}function m0(s=1.6,t=1){let e=new ht,n=Ze(256,Math.round(256*t/s)),i=n.getContext("2d");i.fillStyle="#e9c8a0",i.fillRect(0,0,n.width,n.height),i.fillStyle="rgba(120,80,50,0.45)";for(let c=8;c<n.width;c+=16)for(let h=8;h<n.height;h+=16)i.fillRect(c-2,h-2,4,4);e.add(I(et(s,t,.04,.02),[L("#d9b68d"),L("#d9b68d"),L("#d9b68d"),L("#d9b68d"),xn(Je(n)),L("#d9b68d")],{pos:[0,0,.02]}));let r=L("#b9c2cc",{roughness:.35,metalness:.6}),o=L("#ef6b5b",{roughness:.5}),a=L("#6aa6e8",{roughness:.5}),l=L("#f6c544",{roughness:.5});return e.add(I(et(.04,.38,.03,.012),L(We.woodLight),{pos:[-s*.32,0,.07]})),e.add(I(et(.18,.07,.05,.015),r,{pos:[-s*.32,.19,.07]})),e.add(I(et(.035,.34,.02,.01),r,{pos:[-s*.14,.02,.07],rot:[0,0,.15]})),e.add(I(en(.04,.015,6,14,Math.PI*1.5),r,{pos:[-s*.16,.2,.07],rot:[0,0,.9]})),[o,a,l].forEach((c,h)=>{e.add(I(Gn(.025,.08,4,8),c,{pos:[s*.05+h*.1,.12,.08]})),e.add(I(_e(.008,.008,.16),r,{pos:[s*.05+h*.1,-.02,.08]}))}),e.add(I(en(.06,.025,8,20),l,{pos:[s*.35,.15,.08]})),e.add(I(et(.3,.05,.03,.015),L(We.woodLight),{pos:[s*.3,-.3,.07]})),e.add(I(et(.36,.2,.12,.03),o,{pos:[-s*.05,-.32,.1]})),e}function jr(s,{w:t=1.1,h:e=.3,bg:n="#fff3df",color:i="#8a5536",wood:r="#c98d5d"}={}){let o=xd(s,{w:512,h:Math.round(512*e/t),bg:n,color:i,size:Math.round(512*e/t)*.5}),a=L(r);return Oe({},I(et(t,e,.05,.05),[a,a,a,a,xn(o),a],{pos:[0,0,.03]}))}function g0(s=3,t=[]){let e=new ht,n=L(We.woodLight);e.add(I(et(.3*s+.2,.1,.05,.03),n,{pos:[0,0,.025]}));for(let i=0;i<s;i++){let r=-((s-1)*.3)/2+i*.3;if(e.add(I(Gn(.02,.06,4,8),L(We.brass,{metalness:.5,roughness:.35}),{pos:[r,0,.08],rot:[Math.PI/2.6,0,0]})),t[i]){let o=t[i]();o.position.set(r,-.02,.1),e.add(o)}}return e}function Sd(s="#ff9a8c"){let t=new ht,e=L(s,{roughness:.95});t.add(I(en(.07,.035,8,16),e,{scale:[1,.6,.6]})),t.add(I(et(.08,.42,.04,.02),e,{pos:[-.04,-.22,.02],rot:[0,0,.08]})),t.add(I(et(.08,.34,.04,.02),e,{pos:[.05,-.18,.04],rot:[0,0,-.06]}));for(let n=0;n<3;n++)t.add(I(et(.082,.03,.042,.01),L("#fff6ea"),{pos:[-.04,-.3+n*.08,.02]}));return t}function x0(s="#ffe08a"){let t=new ht,e=L(s,{roughness:.8});return t.add(I(Ve(.14,.03,.015,24),e,{pos:[0,-.1,.1],rot:[Math.PI/2.4,0,0]})),t.add(I(new Nn(.09,16,10,0,Yt,0,Math.PI/2),e,{pos:[0,-.08,.12],rot:[Math.PI/2.4,0,0]})),t.add(I(ie(.03,8,6),L("#fff"),{pos:[0,0,.17]})),t}var y0=["#e8746a","#7aa6dc","#f2c14e","#8dc68a","#c39be0","#f29bb5","#7fc8c0","#f6a26b","#fff1e0"];function M0({w:s=2,d:t=1.4,quilt:e=void 0,frame:n="#e6a673"}={}){let i=new ht,r=L(n,{roughness:.6}),o=L("#c98454",{roughness:.6});i.add(I(et(s,.18,t,.06),r,{pos:[0,.17,0]}));for(let x of[-1,1])for(let g of[-1,1])i.add(I(Ve(.07,.12,.03,12),o,{pos:[x*(s/2-.12),.06,g*(t/2-.12)]}));let a=new Sn;a.moveTo(-s/2,0),a.lineTo(s/2,0),a.lineTo(s/2,.55),a.quadraticCurveTo(s/2,.95,0,.98),a.quadraticCurveTo(-s/2,.95,-s/2,.55),a.lineTo(-s/2,0);let l=new Pn(a,{depth:.1,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:3,curveSegments:20});i.add(I(l,r,{pos:[0,.1,-t/2-.02]})),i.add(I(ie(.07,12,10),L("#ff9db5",{roughness:.5}),{pos:[-.05,.86,-t/2+.13],scale:[1,1,.4]})),i.add(I(ie(.07,12,10),L("#ff9db5",{roughness:.5}),{pos:[.05,.86,-t/2+.13],scale:[1,1,.4]})),i.add(I(et(s,.42,.1,.05),r,{pos:[0,.3,t/2-.02]})),i.add(I(vs(s-.12,.2,t-.16,.25),L("#fffaf2",{roughness:.95}),{pos:[0,.34,0]}));let c=t0({colors:e});c.repeat.set(1.4,1);let h=xn(c,{roughness:.95}),u=vs(s-.04,.08,t*.68,.4);i.add(I(u,h,{pos:[0,.45,t*.14]})),i.add(I(Gn(.06,s-.22,6,12),L("#fff1e6",{roughness:.95}),{pos:[0,.49,-t*.2],rot:[0,0,Math.PI/2]}));let d=["#ffd6c9","#d8efe3","#fff0c9"],f=s>1.6?2:1;for(let x=0;x<f;x++){let g=f===1?0:(x-.5)*(s*.46);i.add(I(vs(.62,.16,.36,.7),L(d[x%d.length],{roughness:.95}),{pos:[g,.52,-t/2+.3],rot:[.25,(x-.5)*.2,0]}))}let p=Oe({pos:[s*.32,.52,t*.05],rot:[0,-.5,.1]});return p.add(I(ie(.12,16,12),L("#c9a27e",{roughness:.95}),{scale:[1,.95,.9]})),p.add(I(ie(.045,10,8),L("#c9a27e",{roughness:.95}),{pos:[-.08,.1,0]})),p.add(I(ie(.045,10,8),L("#c9a27e",{roughness:.95}),{pos:[.08,.1,0]})),p.add(I(ie(.045,10,8),L("#f2dcc4",{roughness:.95}),{pos:[0,-.02,.1],scale:[1,.8,.6]})),p.add(I(ie(.014,6,6),L("#2a1a15"),{pos:[-.04,.03,.105]})),p.add(I(ie(.014,6,6),L("#2a1a15"),{pos:[.04,.03,.105]})),i.add(p),i}function S0({w:s=1.4,h:t=1.9,d:e=.42,shelves:n=4,seed:i=2,color:r="#e0a06c"}={}){let o=new ht,a=L(r,{roughness:.6}),l=L("#f3cfa8",{roughness:.8}),c=.06;o.add(I(et(c,t,e,.02),a,{pos:[-s/2+c/2,t/2,0]})),o.add(I(et(c,t,e,.02),a,{pos:[s/2-c/2,t/2,0]})),o.add(I(et(s+.06,c,e+.04,.02),a,{pos:[0,t-c/2,0]})),o.add(I(et(s-.02,.03,t-.02,.01),l,{pos:[0,t/2,-e/2+.015],rot:[Math.PI/2,0,0]}));let h=un(i),u=(t-.12)/n;for(let d=0;d<=n;d++){let f=.06+d*u;if(o.add(I(et(s-.06,c,e-.02,.015),a,{pos:[0,f,0]})),d===n)break;let p=-s/2+.1;for(;p<s/2-.14;){let x=h();if(x<.08&&p<s/2-.35){let v=H1(h);v.position.set(p+.11,f+c/2,.02),o.add(v),p+=.26;continue}if(x<.14&&p<s/2-.3){let v=hh(3,Math.floor(h()*1e3));v.position.set(p+.13,f+c/2,.02),o.add(v),p+=.3;continue}let g=.045+h()*.035,m=u*(.55+h()*.3),M=h()<.1?.2:0,T=y0[Math.floor(h()*y0.length)];o.add(I(et(g,m,e*.7,.008),L(T,{roughness:.75}),{pos:[p+g/2+M*m*.4,f+c/2+m/2,.02],rot:[0,0,-M]})),h()<.4&&o.add(I(et(g+.004,.012,e*.7+.004,.003),L("#fff6e0"),{pos:[p+g/2+M*m*.4,f+c/2+m*.75,.02],rot:[0,0,-M]})),p+=g+.008+M*m*.5}}return o}function H1(s=Math.random){let t=new ht;t.add(I(Ji([[0,0],[.06,0],[.075,.08],[.08,.1],[.07,.1]],16,12,"smallpot"),L($t(["#e88c66","#ffd2b8","#9fd3c7"]),{roughness:.7})));let e=L(We.leaf,{roughness:.6});for(let n=0;n<5;n++){let i=n/5*Yt+s();t.add(I(ie(.05,8,6),e,{pos:[Math.cos(i)*.04,.14+s()*.04,Math.sin(i)*.04],scale:[1,.6,.7],rot:[0,i,.5]}))}return t}var wd=()=>L("#6fb35b",{roughness:.55}),_0=()=>L("#8cc96f",{roughness:.55});function V1(s=.22,t=.34,e="#e88c66",n=!0){let i=new ht,r=[[0,0],[s*.72,0],[s*.78,.02],[s*.92,t*.8],[s,t],[s*.88,t]];return i.add(I(Ji(r,28,20,`pot:${s}:${t}`),L(e,{roughness:.75}))),n&&i.add(I(en(s*.96,.035,8,28),L(e,{roughness:.75}),{pos:[0,t,0],rot:[Math.PI/2,0,0]})),i.add(I(Ma(s*.88,24),L("#7a5136",{roughness:1}),{pos:[0,t-.03,0],rot:[-Math.PI/2,0,0],cast:!1})),i}function G1(s=.4,t=.22){let e=new Sn;e.moveTo(0,0),e.bezierCurveTo(t*.9,s*.15,t*.8,s*.85,0,s),e.bezierCurveTo(-t*.8,s*.85,-t*.9,s*.15,0,0);let n=new Pn(e,{depth:.006,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:2,curveSegments:14}),i=n.attributes.position;for(let r=0;r<i.count;r++){let o=i.getX(r),a=i.getY(r);i.setZ(r,i.getZ(r)+o*o*1.6-Math.sin(a/s*Math.PI)*.03+a/s*(a/s)*.08)}return n.computeVertexNormals(),n}var b0={},W1=(s,t,e)=>b0[s]||(b0[s]=G1(t,e));function Ki(s="leafy",{scale:t=1,color:e="#e88c66",seed:n=1}={}){let i=new ht,r=un(n),o=s==="succulent"?.18:.34,a=s==="succulent"?.16:.22;i.add(V1(a,o,e));let l=new ht;if(l.userData.dynamic=!0,l.position.y=o-.02,i.add(l),s==="leafy")for(let h=0;h<9;h++){let u=h/9*Yt+r()*.4,d=.35+r()*.5,f=.42+r()*.3,p=new ht;p.rotation.set(0,u,0);let x=new ht;x.rotation.x=d,p.add(x),x.add(I(_e(.01,.012,f*.6,5),L("#5e9c4c"),{pos:[0,f*.3,0]}));let g=I(W1("big",.36,.22),h%2?wd():_0(),{pos:[0,f*.55,0],rot:[-.6-r()*.4,0,0]});x.add(g),l.add(p)}else if(s==="round"){let c=_0(),h=wd();for(let u=0;u<14;u++){let d=r()*Yt,f=r()*.18;l.add(I(ie(.12+r()*.06,12,10),u%3?c:h,{pos:[Math.cos(d)*f,.18+r()*.3,Math.sin(d)*f]}))}}else if(s==="tall")for(let c=0;c<7;c++){let h=c/7*Yt+r(),u=.6+r()*.45,d=I(Gn(.05,u,4,8),c%2?L("#5e9c4c"):L("#7ab866"),{pos:[Math.cos(h)*.08,u/2,Math.sin(h)*.08],rot:[Math.sin(h)*.15,h,Math.cos(h)*.15],scale:[1,1,.28]});l.add(d)}else if(s==="succulent"){let c=L("#9fd3a8",{roughness:.5});for(let h=0;h<3;h++)for(let u=0;u<7;u++){let d=u/7*Yt+h*.4,f=1.1-h*.35,p=Oe({rot:[0,d,0]},I(ie(.06,8,6),c,{pos:[0,.04+h*.02,.06-h*.02],rot:[f,0,0],scale:[.6,.4,1.3]}));l.add(p)}}else if(s==="flowers"){let c=["#ff9db5","#ffd36b","#fff4f0","#c7a8f2","#ffb59a"];for(let h=0;h<7;h++){let u=r()*Yt,d=r()*.12,f=.3+r()*.25;l.add(I(_e(.008,.01,f,5),L("#5e9c4c"),{pos:[Math.cos(u)*d,f/2,Math.sin(u)*d]}));let p=Oe({pos:[Math.cos(u)*d,f,Math.sin(u)*d]}),x=L(c[h%c.length],{roughness:.6});for(let g=0;g<5;g++){let m=g/5*Yt;p.add(I(ie(.035,8,6),x,{pos:[Math.cos(m)*.035,0,Math.sin(m)*.035],scale:[1,.5,1]}))}p.add(I(ie(.022,8,6),L("#ffcc4d"),{pos:[0,.012,0]})),l.add(p)}for(let h=0;h<6;h++){let u=h/6*Yt;l.add(I(ie(.07,8,6),wd(),{pos:[Math.cos(u)*.12,.05,Math.sin(u)*.12],scale:[1.2,.5,.7],rot:[0,-u,.3]}))}}return i.scale.setScalar(t),i.userData.foliage=l,i.userData.sway=r()*10,i}function dh(s){return(t,e)=>{for(let n of s){let i=n.userData.foliage;if(!i)continue;let r=n.userData.sway;i.rotation.z=Math.sin(e*.9+r)*.025+(n.userData.wiggle||0)*Math.sin(e*18)*.12,i.rotation.x=Math.sin(e*.7+r*1.3)*.02,n.userData.wiggle&&(n.userData.wiggle=Math.max(0,n.userData.wiggle-t*1.2))}}}function w0(s=2,t){let e=new ht,n=jp({colors:t}),i=I(Ma(s,64),xn(n,{roughness:1}),{pos:[0,.022,0],rot:[-Math.PI/2,0,0],cast:!1});return e.add(i),e.add(I(_e(s,s,.02,64,!0),L(t?t[0]:"#f7c6b0",{roughness:1}),{pos:[0,.011,0],cast:!1})),e}function fh(s=2.2,t=1.4,e,n){let i=new ht,r=Qp({colors:e,border:n});i.add(I(et(s,.02,t,.009),[L(n||"#f29a84"),L(n||"#f29a84"),xn(r,{roughness:1}),L(n||"#f29a84"),L(n||"#f29a84"),L(n||"#f29a84")],{pos:[0,.012,0],cast:!1}));let o=L("#fff3e3",{roughness:1});for(let a of[-1,1])for(let l=0;l<9;l++)i.add(I(Gn(.012,.06,3,5),o,{pos:[a*(s/2+.04),.012,-t/2+.1+l/8*(t-.2)],rot:[0,0,Math.PI/2],cast:!1}));return i}function T0({r:s=.7,h:t=.32}={}){let e=new ht,n=L("#e3a46f",{roughness:.55});e.add(I(Ve(s,.08,.035,48),n,{pos:[0,t,0]}));for(let a=0;a<3;a++){let l=a/3*Yt+.5;e.add(I(Ve(.05,t,.02,12),L("#c98454"),{pos:[Math.cos(l)*s*.6,t/2,Math.sin(l)*s*.6]}))}let i=t+.04;e.add(X1([0,i,-.05]));let r=["#ffd0b5","#cfeede","#e6dcff"];for(let a=0;a<3;a++){let l=a/3*Yt+1.2;e.add(q1(r[a],[Math.cos(l)*s*.62,i,Math.sin(l)*s*.62],l))}let o=Oe({pos:[.25,i,.25]});o.add(I(Ve(.15,.02,.008,24),L("#fffaf2",{roughness:.4})));for(let a=0;a<4;a++){let l=a/4*Yt,c=I(Ve(.05,.02,.008,14),L("#e2a868",{roughness:.8}),{pos:[Math.cos(l)*.06,.02+(a===3?.02:0),Math.sin(l)*.06],rot:[.1,0,a===3?.2:0]});o.add(c),o.add(I(ie(.008,5,4),L("#6b3f2a"),{pos:[Math.cos(l)*.06+.01,.034+(a===3?.02:0),Math.sin(l)*.06]}))}return e.add(o),e}function X1(s=[0,0,0],t="#9fd3c7"){let e=Oe({pos:s}),n=L(t,{roughness:.35});return e.add(I(Ji([[0,0],[.08,0],[.13,.07],[.13,.13],[.09,.19],[.05,.2],[0,.2]],24,20,"teapot"),n)),e.add(I(ie(.025,10,8),n,{pos:[0,.22,0]})),e.add(I(_e(.018,.03,.14,10),n,{pos:[.15,.13,0],rot:[0,0,-.9]})),e.add(I(en(.055,.014,8,16,Math.PI*1.3),n,{pos:[-.13,.11,0],rot:[0,0,1]})),e.add(I(ie(.02,8,6),L("#ff9db5"),{pos:[.02,.11,.125],scale:[1,1,.4]})),e}function q1(s="#ffd0b5",t=[0,0,0],e=0){let n=Oe({pos:t,rot:[0,e,0]}),i=L(s,{roughness:.45});return n.add(I(Ve(.05,.09,.012,16),i,{pos:[0,.045,0]})),n.add(I(en(.028,.009,6,12),i,{pos:[.055,.05,0]})),n.add(I(_e(.044,.044,.005,14),L("#8a5536",{roughness:.2}),{pos:[0,.08,0]})),n}function Qr(s="#ffc4cf",t=.36){let e=new ht,n=I(vs(t*2,.16,t*2,.6),L(s,{roughness:.95}),{pos:[0,.1,0]});return e.add(n),e.add(I(ie(.035,10,8),L("#fff6ea"),{pos:[0,.21,0],scale:[1,.5,1]})),e}function Td(s="#ffd977"){let t=new ht,e=Ji([[0,0],[.48,.02],[.6,.14],[.58,.3],[.45,.44],[.25,.5],[.1,.44],[0,.42]],32,24,"beanbag"),n=I(e,L(s,{roughness:.92}),{scale:[1,1,.92]});return t.add(n),t.add(I(ie(.32,20,14),L(s,{roughness:.92}),{pos:[0,.38,-.25],scale:[1.2,.85,.7]})),t}function E0(s="#c7b6ee"){let t=new ht,e=L(s,{roughness:.92}),n=L(new bt(s).offsetHSL(0,0,.05).getStyle(),{roughness:.92});t.add(I(et(1.05,.28,.85,.12),e,{pos:[0,.22,0]})),t.add(I(vs(.72,.16,.66,.5),n,{pos:[0,.42,.05]})),t.add(I(et(1.05,.7,.22,.11),e,{pos:[0,.55,-.34],rot:[-.12,0,0]}));for(let i of[-1,1])t.add(I(et(.2,.42,.85,.1),e,{pos:[i*.45,.42,0]}));for(let i of[-1,1])for(let r of[-1,1])t.add(I(_e(.035,.025,.09,8),L("#a8683f"),{pos:[i*.42,.045,r*.32]}));return t.add(I(vs(.4,.12,.3,.7),L("#fff0c9",{roughness:.95}),{pos:[.12,.6,-.15],rot:[.5,-.3,.2]})),t}function ph(s="#ffb59a",t=.34){let e=new ht;e.add(I(Ve(.24,.07,.03,24),L(s,{roughness:.7}),{pos:[0,t,0]}));for(let n=0;n<3;n++){let i=n/3*Yt;e.add(I(_e(.025,.03,t,8),L(We.woodLight),{pos:[Math.cos(i)*.14,t/2,Math.sin(i)*.14],rot:[Math.sin(i)*.1,0,-Math.cos(i)*.1]}))}return e}function A0({w:s=1.5,d:t=.7,h:e=.56,color:n="#e3a46f"}={}){let i=new ht,r=L(n,{roughness:.55});i.add(I(et(s,.06,t,.025),r,{pos:[0,e,0]}));for(let o of[-1,1])for(let a of[-1,1])i.add(I(et(.06,e,.06,.02),L("#c98454"),{pos:[o*(s/2-.07),e/2,a*(t/2-.07)]}));return i.add(I(et(s*.4,.14,t*.8,.03),r,{pos:[s*.25,e-.1,0]})),i.add(I(ie(.025,8,6),L(We.brass,{metalness:.5,roughness:.4}),{pos:[s*.25,e-.1,t*.41]})),i}function R0(){let s=new ht,t=L("#fff1dd",{roughness:.5});s.add(I(et(.56,.44,.48,.09),t,{pos:[0,.3,0]})),s.add(I(et(.36,.08,.3,.03),t,{pos:[0,.04,-.02]}));let e=Ze(256,192),n=Je(e),i=new ke({map:n,emissiveMap:n,emissive:new bt("#ffffff"),emissiveIntensity:1.1,roughness:.3}),r=new Lt(Xs(.42,.31),i);r.position.set(0,.31,.241),s.add(r),s.add(I(et(.46,.35,.02,.04),L("#e8d6bf"),{pos:[0,.31,.236]})),s.add(I(et(.46,.04,.16,.02),t,{pos:[0,.02,.38],rot:[.08,0,0]}));for(let c=0;c<3;c++)for(let h=0;h<8;h++)s.add(I(et(.04,.02,.035,.008),L(h===3&&c===1?"#ffb59a":"#f3e2cc"),{pos:[-.17+h*.048,.045+c*.004,.33+c*.045]}));s.add(I(Gn(.03,.03,4,8),t,{pos:[.33,.025,.38],rot:[Math.PI/2,0,0],scale:[1,1,.6]}));let o=0,a="idle",l=[];return s.userData.setMode=c=>a=c,s.userData.update=c=>{if(o+=c,Math.floor(o*8)===Math.floor((o-c)*8))return;let h=e.getContext("2d");if(h.fillStyle="#20343a",h.fillRect(0,0,256,192),a==="work")Math.random()<.5&&(l.push({w:30+Math.random()*150,c:$t(["#8ef0c9","#ffd27a","#ffb3c6","#bfe6ff"]),indent:Math.floor(Math.random()*3)*16}),l.length>9&&l.shift()),l.forEach((u,d)=>{h.fillStyle=u.c,xs(h,18+u.indent,18+d*18,u.w,9,4),h.fill()}),Math.floor(o*2)%2&&(h.fillStyle="#fff",h.fillRect(22+(l.at(-1)?.w||0)+(l.at(-1)?.indent||0),18+(l.length-1)*18,8,10));else{let u=Math.sin(o*1.3)>.97;h.fillStyle="#8ef0c9",u?(h.fillRect(86,80,24,5),h.fillRect(146,80,24,5)):(h.beginPath(),h.ellipse(98,82,10,14,0,0,Yt),h.ellipse(158,82,10,14,0,0,Yt),h.fill()),h.strokeStyle="#8ef0c9",h.lineWidth=6,h.lineCap="round",h.beginPath(),h.arc(128,108,22,.25,Math.PI-.25),h.stroke()}h.fillStyle="rgba(0,0,0,0.12)";for(let u=0;u<192;u+=4)h.fillRect(0,u,256,1);n.needsUpdate=!0},s}function C0({w:s=2.2,d:t=.8,h:e=.6}={}){let n=new ht,i=L("#d39a62",{roughness:.6}),r=L("#a8683f",{roughness:.6});n.add(I(et(s,.1,t,.03),i,{pos:[0,e,0]}));for(let l of[-1,1])for(let c of[-1,1])n.add(I(et(.09,e,.09,.02),r,{pos:[l*(s/2-.1),e/2,c*(t/2-.1)]}));n.add(I(et(s-.2,.05,t-.15,.02),r,{pos:[0,.14,0]})),n.add(I(et(.4,.22,.3,.04),L("#ef6b5b",{roughness:.5}),{pos:[-s*.3,.27,0]})),n.add(I(et(.3,.16,.26,.02),L("#d9a876",{roughness:.85}),{pos:[s*.15,.24,.02]}));let o=L("#9fb4c7",{roughness:.35,metalness:.5});n.add(I(et(.16,.12,.14,.02),o,{pos:[s/2-.25,e+.11,t/2-.12]})),n.add(I(_e(.012,.012,.24,6),o,{pos:[s/2-.25,e+.1,t/2+.02],rot:[Math.PI/2,0,0]}));let a=Kr("#ffb59a");a.position.set(-.1,e+.05,-.05),a.scale.setScalar(1.6),n.add(a),n.add(uh(.09,L("#f2c14e",{roughness:.4,metalness:.4}),[.45,e+.06,.1])),n.add(uh(.06,L("#9fb4c7",{roughness:.4,metalness:.4}),[.6,e+.06,-.12]));for(let l=0;l<5;l++)n.add(I(_e(.012,.006,.05,6),o,{pos:[.2+G(-.1,.1),e+.06,.2+G(-.05,.05)],rot:[Math.PI/2,G(0,3),0]}));return n.userData.bot=a,n}function uh(s,t,e=[0,0,0]){let n=Oe({pos:e});n.add(I(_e(s,s,.03,20),t,{pos:[0,.015,0]}));for(let i=0;i<8;i++){let r=i/8*Yt;n.add(I(et(s*.35,.03,s*.35,.005),t,{pos:[Math.cos(r)*s,.015,Math.sin(r)*s],rot:[0,-r,0]}))}return n.add(I(_e(s*.3,s*.3,.035,12),L("#7a5136"),{pos:[0,.016,0]})),n}function P0(s="#6aa6e8"){let t=new ht,e=L(s,{roughness:.45,metalness:.1});return t.add(I(et(.5,.24,.26,.04),e,{pos:[0,.12,0]})),t.add(I(et(.52,.04,.28,.015),L("#4f86c6"),{pos:[0,.24,0]})),t.add(I(en(.08,.015,6,14,Math.PI),L("#3a3a3a"),{pos:[0,.26,0]})),t}function Ys(s="#d9a876",t=.5){let e=new ht,n=L(s,{roughness:.85});e.add(I(et(t,t*.8,t,.03),n,{pos:[0,t*.4,0]}));let i=L("#c08a58",{roughness:.85});for(let r of[.15,.55])e.add(I(et(t+.02,.06,t+.02,.015),i,{pos:[0,t*r+.02,0]}));return e}function Ta(s="#fff0d6"){let t=new ht;t.add(I(Ve(.2,.05,.02,24),L("#c98454"),{pos:[0,.025,0]})),t.add(I(_e(.025,.025,1.45,10),L("#c98454"),{pos:[0,.75,0]}));let e=$r(s,{roughness:.9,emissive:"#ffcf8a",emissiveIntensity:0,side:fn}),n=I(new ci(.2,.32,.36,28,1,!0),e,{pos:[0,1.5,0]});t.add(n),t.add(I(en(.32,.015,6,28),L("#ffb59a"),{pos:[0,1.32,0],rot:[Math.PI/2,0,0]}));let i=$r("#fff6dd",{emissive:"#ffd79a",emissiveIntensity:0});t.add(I(ie(.07,12,10),i,{pos:[0,1.42,0],cast:!1}));let r=new cs("#ffc98a",0,6.5,1.6);return r.position.set(0,1.35,0),t.add(r),t.userData.lamp={light:r,shadeMat:e,bulbMat:i,base:5.5,on:!0},t}function I0(){let s=new ht;s.add(I(Ve(.14,.06,.02,20),L("#7aa6dc"),{pos:[0,.03,0]})),s.add(I(_e(.02,.02,.3,8),L("#cbd5e1",{metalness:.4,roughness:.3}),{pos:[0,.2,0]}));let t=$r("#fff7d6",{emissive:"#ffe08a",emissiveIntensity:0,roughness:.2}),e=I(Ji([[0,0],[.06,.01],[.07,.07],[.15,.17],[.15,.28],[.08,.36],[0,.37]],24,20,"bulb"),t,{pos:[0,.35,0]});s.add(e),s.add(I(_e(.065,.065,.06,14),L("#cbd5e1",{metalness:.5,roughness:.35}),{pos:[0,.36,0]}));let n=new cs("#ffe7a8",0,4.5,1.6);return n.position.set(0,.6,0),s.add(n),s.userData.lamp={light:n,shadeMat:t,bulbMat:t,base:3,on:!0},s}function D0(s="#ffd0b5",t=.5){let e=new ht;return e.add(I(Ve(.3,.06,.025,28),L(s,{roughness:.6}),{pos:[0,t,0]})),e.add(I(_e(.04,.05,t,10),L(We.woodLight),{pos:[0,t/2,0]})),e.add(I(Ve(.18,.04,.015,20),L(We.woodLight),{pos:[0,.02,0]})),e}function L0(){let s=new ht,t=L("#c98454",{roughness:.5});s.add(I(et(.9,.5,.6,.06),t,{pos:[0,.25,0]}));for(let c of[-1,1])s.add(I(et(.3,.3,.02,.04),L("#e3a46f"),{pos:[c*.2,.25,.305]}));let e=I(et(.56,.16,.48,.04),L("#e3a46f"),{pos:[0,.58,0]});s.add(e);let n=Oe({pos:[-.04,.67,.02]});n.userData.dynamic=!0,n.add(I(_e(.2,.2,.012,32),L("#2b2523",{roughness:.25}))),n.add(I(_e(.07,.07,.014,20),L("#ff8f7a",{roughness:.5}))),s.add(n);let i=L("#f2c14e",{roughness:.25,metalness:.65}),r=new Ln([new A(.2,.66,-.12),new A(.24,.85,-.16),new A(.18,1,-.1),new A(.08,1.06,.02)]);s.add(I(new Bn(r,16,.035,8,!1),i));let o=new Zn(Array.from({length:14},(c,h)=>{let u=h/13;return new Y(.035+Math.pow(u,2.4)*.34,u*.5)}),10),a=o.attributes.position;for(let c=0;c<a.count;c++){let h=a.getY(c);if(h>.3){let u=Math.atan2(a.getZ(c),a.getX(c)),d=1+Math.sin(u*5)*.06*((h-.3)/.2);a.setX(c,a.getX(c)*d),a.setZ(c,a.getZ(c)*d)}}o.computeVertexNormals();let l=I(o,L("#ff9fb2",{roughness:.45,side:fn}),{pos:[.06,1.06,.04],rot:[1.1,0,.15]});return l.userData.keep=!0,s.add(l),s.add(I(en(.37,.02,6,30),i,{pos:[.06+.07,1.06+.22,.04+.45],rot:[1.1-Math.PI/2,0,.15]})),s.userData.record=n,s.userData.horn=l,s}function N0(s){let t=new ht,e=L(We.woodLight,{roughness:.6});t.add(I(et(.05,1.4,.05,.02),e,{pos:[-.3,.68,.05],rot:[.08,0,-.12]})),t.add(I(et(.05,1.4,.05,.02),e,{pos:[.3,.68,.05],rot:[.08,0,.12]})),t.add(I(et(.05,1.3,.05,.02),e,{pos:[0,.62,-.3],rot:[-.35,0,0]})),t.add(I(et(.8,.05,.12,.02),e,{pos:[0,.55,.1]}));let n=Ze(256,200);s?.(n.getContext("2d"),256,200);let i=new Lt(et(.8,.62,.03,.01),[L("#fff"),L("#fff"),L("#fff"),L("#fff"),xn(Je(n),{roughness:.8}),L("#fff")]);return i.position.set(0,.9,.12),i.rotation.x=-.08,i.castShadow=!0,t.add(i),t.userData.canvas=n,t.userData.canvasMesh=i,t}function mh(s="hi!"){let t=new ht,e=Ze(256,160),n=e.getContext("2d");n.fillStyle="#d9a26e",xs(n,0,0,256,160,30),n.fill(),n.strokeStyle="#b97f4b",n.lineWidth=6,xs(n,10,10,236,140,22),n.stroke(),n.fillStyle="#7a4b2c",n.font="600 64px Fredoka, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(s,128,84);let i=Je(e);return t.add(I(et(1.1,.025,.7,.01),[L("#d9a26e"),L("#d9a26e"),xn(i,{roughness:1}),L("#d9a26e"),L("#d9a26e"),L("#d9a26e")],{pos:[0,.014,0],cast:!1})),t}function U0(){let s=new ht;return s.add(I(Ve(.15,.4,.03,20),L("#9fd3c7",{roughness:.5}),{pos:[0,.2,0]})),["#ff9db5","#ffd36b"].forEach((e,n)=>{let i=Oe({pos:[(n-.5)*.08,.35,0],rot:[0,0,(n-.5)*.3]});i.add(I(_e(.012,.012,.7,6),L("#5a4036"),{pos:[0,.3,0]})),i.add(I(_e(.02,.07,.42,8),L(e,{roughness:.8}),{pos:[0,.32,0]})),i.add(I(en(.04,.012,6,12,Math.PI),L("#5a4036"),{pos:[.04,.66,0],rot:[0,0,0]})),s.add(i)}),s}function k0(s=1.3){let t=new ht,e=L("#e3a46f",{roughness:.6});t.add(I(et(s,.06,.42,.02),e,{pos:[0,.36,0]})),t.add(I(et(s,.04,.4,.015),e,{pos:[0,.1,0]}));for(let i of[-1,1])t.add(I(et(.06,.38,.4,.02),e,{pos:[i*(s/2-.03),.19,0]}));return t.add(I(vs(s-.1,.08,.38,.5),L("#ffc4cf",{roughness:.95}),{pos:[0,.42,0]})),["#ff9a8c","#95c8f4","#ffd977"].forEach((i,r)=>{for(let o of[-1,1])t.add(I(ie(.07,12,8),L(i,{roughness:.6}),{pos:[-s/2+.25+r*.4+o*.07,.15,.04],scale:[.85,.6,1.25]}))}),t}function Ed(s="#e2b47c"){let t=new ht,e=L(s,{roughness:.9});return t.add(I(Ji([[0,0],[.22,0],[.27,.12],[.28,.22],[.26,.22]],24,14,"basket"),e)),t.add(I(en(.27,.025,6,24),L("#c8945a"),{pos:[0,.22,0],rot:[Math.PI/2,0,0]})),t}function F0(){let s=Ed();return["#ff9db5","#9fdcc0","#ffd36b"].forEach((e,n)=>s.add(I(ie(.1,12,10),L(e,{roughness:1}),{pos:[(n-1)*.11,.24,n%2*.05]}))),s}var vn=Math.PI,z0={id:"nook",name:"The Nook",w:10,d:9,h:3.3,floor:{type:"planks",base:"#dda673",units:4,plankW:.5,seed:3},wallStyle:{paper:"#fde7d4",pattern:"dots",accent:"#f4ab98",wainscot:"#f8dcc0",board:"#c98d5d",unit:2,wainscotH:1.05},walls:{east:{paper:"#e8f1e4",pattern:"stripes",accent:"#b9d9b0",wainscot:"#d9ead2"},south:{paper:"#e8f1e4",pattern:"stripes",accent:"#b9d9b0",wainscot:"#d9ead2"}},wallCap:"#fff3e3",trim:"#e9b98c",base:["#fff1e2","#f6b9a2","#e99a86"],corners:{nw:"Cozy Corner",ne:"Idea Corner",se:"Workshop",sw:"Front Door"},openings:[{wall:"north",type:"window",shape:"arch",x:-2.6,y:.95,w:1.5,h:1.8},{wall:"west",type:"window",shape:"round",x:1.8,y:1.15,w:1.15,h:1.15},{wall:"west",type:"door",shape:"arch",x:-2.6,w:1.25,h:2.25,to:"post"},{wall:"south",type:"window",shape:"rect",x:-3,y:1.05,w:1.6,h:1.45}],navOpen:[{x:-4.6,z:2.6,w:1,d:1.3,rot:0}]};function B0(s){let t=new Jr(z0),{walls:e}=t,n=s.daylight.view,i=[],r=z=>(i.push(z),z),[o,a,l,c]=z0.openings;_s(t,e.north,o,n,{curtain:"#ffb7a3",flowers:["#ff9db5","#fff4f0","#ffd36b"]}),_s(t,e.west,a,n,{frame:"#fff8ef"}),_s(t,e.south,c,n,{curtain:"#b9e0d2",tie:"#fffaf0",flowers:["#ffd36b","#ff9a8c","#c7a8f2"]});let h=sh(t,e.west,l,{sign:"post room",behind:"#ffe3bf"});t.makeInteractive(h.holder,{label:"Door to the Post Room",hint:"click to visit",onClick:()=>qt.emit("door:click",t,h)});let u=M0({w:2,d:1.4});t.place(u,{x:-3.6,z:-3.42,rot:0,footprint:{w:2,d:1.45},interactive:{label:"The big bed",hint:"fluff the pillows",onClick:z=>to(z)}}),t.station({id:"bed-a",label:"napping in the big bed",corner:"nw",activity:"sleep",pos:{x:-4.05,z:-3.25},approach:{x:-4,z:-2.2},seat:.46,face:0,tags:["rest"]}),t.station({id:"bed-b",label:"napping in the big bed",corner:"nw",activity:"sleep",pos:{x:-3.15,z:-3.25},approach:{x:-3.1,z:-2.2},seat:.46,face:0,tags:["rest"]}),t.place(S0({w:1.4,h:1.95,seed:5}),{x:-1.25,z:-4.22,rot:0,footprint:{w:1.45,d:.45},hideWith:"north"}),t.station({id:"shelf",label:"browsing the bookshelf",corner:"nw",activity:"browse",pos:{x:-1.25,z:-3.35},face:vn,tags:["fun","learn"]}),t.place(r(Ki("flowers",{scale:.85,color:"#9fd3c7",seed:4})),{x:-2.27,z:-4.15,footprint:{r:.2}});let d=E0("#c7b6ee");t.place(d,{x:-1.55,z:-1.75,rot:.75,footprint:{w:1.05,d:.9},interactive:{label:"Reading chair",hint:"so squishy",onClick:z=>to(z)}}),t.station({id:"chair",label:"reading in the comfy chair",corner:"nw",activity:"read",pos:{x:-1.53,z:-1.73},approach:{x:-.95,z:-1.1},seat:.46,face:.75,tags:["fun","learn","rest"]}),t.place(fh(2.4,1.6,["#c7b6ee","#fff6ea","#ffc4cf","#fff6ea"],"#b9a5e6"),{x:-2.7,z:-1.85,rot:0}),t.place(Qr("#ffd977",.32),{x:-3.1,z:-1.7,footprint:null}),t.station({id:"cushion-read",label:"reading on the rug",corner:"nw",activity:"read",pos:{x:-3.1,z:-1.7},seat:.16,face:.4,tags:["fun","learn"]}),t.station({id:"round-window",label:"gazing out the round window",corner:"nw",activity:"gaze",pos:{x:-4.2,z:-1.8},face:-vn/2,tags:["rest","calm"]});let f=Ta("#fff0d6");t.place(f,{x:-4.5,z:-.55,footprint:{r:.28},interactive:{label:"Floor lamp",hint:"click to toggle",onClick:z=>Ea(z)}}),t.lights.push(f);let p=r(Ki("leafy",{scale:1.25,seed:9,color:"#e88c66"}));t.place(p,{x:-4.45,z:.55,footprint:{r:.3},interactive:{label:"Monty the monstera",hint:"say hi",onClick:z=>gh(z)}}),t.station({id:"water-monty",label:"watering Monty",corner:"nw",activity:"water",pos:{x:-3.75,z:.55},face:-vn/2,tags:["care"]}),e.north.add(Li(.55,.42,Ni.hills),-4.35,1.55),e.north.add(Li(.4,.5,Ni.critters,"#ffd6c9"),-4.35,2.35),e.north.add(Li(.32,.32,Ni.heart,"#fff7ec"),-.6,2.55),e.north.add(ah(.9,[lh("#ff9db5"),hh(2,3)]),-1.6,2.4);let x=wa(9.4,.3,22);e.north.add(x,0,3),t.glows.push(x);let g=wa(8.4,.28,18,["#ffd27a","#ffe9a8","#ffb3c6"]);e.west.add(g,0,3),t.glows.push(g),e.west.add(Li(.5,.38,Ni.stars,"#fff7ec"),.35,1.8),e.west.add(Li(.34,.44,Ni.flower,"#d8efe3"),.35,1.05);let m=d0(2.6,1.45),M=e.north.add(m,2.65,1.78);t.makeInteractive(M,{label:"The Idea Board",hint:"click to read the notes",onClick:()=>qt.emit("board:open",t)}),t.ideaBoard=m,t.station({id:"board",label:"pinning ideas on the board",corner:"ne",activity:"pin",pos:{x:2.65,z:-3.72},face:vn,tags:["ideas","work"]}),t.station({id:"board-doodle",label:"doodling on the idea board",corner:"ne",activity:"write",pos:{x:1.9,z:-3.72},face:vn,tags:["ideas","fun"]}),e.north.add(jr("ideas!",{w:.9,h:.26,bg:"#fff3df",color:"#e07a5f"}),2.65,2.75),t.place(Td("#ffd977"),{x:1.75,z:-2.25,rot:.5,footprint:{r:.45}}),t.station({id:"beanbag-a",label:"thinking on a bean bag",corner:"ne",activity:"think",pos:{x:1.78,z:-2.2},approach:{x:1.4,z:-1.35},seat:.3,face:.5,tags:["ideas","rest"]}),t.place(Td("#9fdcc0"),{x:3.55,z:-2.1,rot:-.4,footprint:{r:.45}}),t.station({id:"beanbag-b",label:"thinking on a bean bag",corner:"ne",activity:"think",pos:{x:3.52,z:-2.05},approach:{x:3.4,z:-1.2},seat:.3,face:-.4,tags:["ideas","rest"]});let T=N0(Y1);t.place(T,{x:4.25,z:-3.65,rot:-.75,footprint:{r:.45},hideWith:"north"}),t.station({id:"easel",label:"painting at the easel",corner:"ne",activity:"paint",pos:{x:3.6,z:-3},face:2.35,tags:["fun","ideas"]}),t.place(D0("#ffd0b5",.45),{x:4.45,z:-1,footprint:{r:.3}});let v=I0();t.place(v,{x:4.45,z:-1,y:.48,interactive:{label:"Lightbulb lamp",hint:"click to toggle",onClick:z=>Ea(z)}}),t.lights.push(v),e.east.add(ah(1.3,[ch("#ffd27a"),lh("#9fdcc0",.2),ch("#c9d4ff")]),-2.4,2.05),e.east.add(oh(3.4,.25),-2.5,2.85),t.place(r(Ki("tall",{scale:1.1,seed:2,color:"#ffd2b8"})),{x:4.5,z:.25,footprint:{r:.25}}),t.place(w0(2.1,["#ffc9b3","#fff4e6","#f6a993","#fde4cc","#ffd9a0","#fff4e6"]),{x:.2,z:.35});let w=T0({r:.68});t.place(w,{x:.2,z:.35,footprint:{r:.7},interactive:{label:"Tea table",hint:"there are cookies",onClick:z=>to(z)}});let b=["#ffc4cf","#9fdcc0","#c7b6ee","#ffd977"];for(let z=0;z<4;z++){let tt=z/4*vn*2+vn/4,nt=.2+Math.sin(tt)*1.28,Ct=.35+Math.cos(tt)*1.28;t.place(Qr(b[z]),{x:nt,z:Ct}),t.station({id:`tea-${z}`,label:"having tea with friends",corner:"center",activity:"tea",pos:{x:nt,z:Ct},seat:.18,face:tt+vn,tags:["social","rest"]})}let C=L0();t.place(C,{x:.55,z:-3.95,rot:0,footprint:{w:.95,d:.65},interactive:{label:"Gramophone",hint:"click for a dance party",onClick:()=>qt.emit("music:party")}}),t.gramophone=C,t.station({id:"dance-a",label:"dancing to the music",corner:"center",activity:"dance",pos:{x:0,z:-2.6},face:0,tags:["fun","music"]}),t.station({id:"dance-b",label:"dancing to the music",corner:"center",activity:"dance",pos:{x:1,z:-2.75},face:0,tags:["fun","music"]}),t.station({id:"dance-c",label:"dancing to the music",corner:"center",activity:"dance",pos:{x:.5,z:-1.9},face:0,tags:["fun","music"]});let y=C0({w:2.3,d:.8,h:.6});t.place(y,{x:3,z:3.98,rot:vn,footprint:{w:2.35,d:.85},interactive:{label:"Workbench",hint:"a robot in progress",onClick:z=>to(z)}}),t.station({id:"bench",label:"tinkering at the workbench",corner:"se",activity:"tinker",pos:{x:3,z:3.1},face:0,tags:["work","build"]}),t.station({id:"bench-b",label:"tinkering at the workbench",corner:"se",activity:"tinker",pos:{x:2,z:3.1},face:0,tags:["work","build"]});let E=A0({w:1.5,d:.72,h:.56});t.place(E,{x:4.4,z:1.55,rot:-vn/2,footprint:{w:1.5,d:.75}});let P=R0();t.place(P,{x:4.45,z:1.55,y:.59,rot:-vn/2,interactive:{label:"Computer",hint:"beep boop",onClick:()=>qt.emit("computer:click",t)}}),t.computer=P,t.onUpdate(z=>P.userData.update(z)),t.place(ph("#ffb59a",.34),{x:3.45,z:1.55}),t.station({id:"computer",label:"typing on the computer",corner:"se",activity:"type",pos:{x:3.45,z:1.55},seat:.36,face:vn/2,tags:["work","build"],onStart:()=>P.userData.setMode("work"),onEnd:()=>P.userData.setMode("idle")}),e.east.add(m0(1.5,.95),3.15,1.55);let D=ah(1.5,[Kr("#9ccdf2"),Kr("#ffd977"),uh(.08,L("#f2c14e",{roughness:.4,metalness:.4})),Kr("#c7b6ee")]);e.east.add(D,1.4,2.25),e.east.add(jr("builds",{w:.7,h:.22,bg:"#fff3df",color:"#5a8fc6"}),1.4,2.72),t.place(P0("#6aa6e8"),{x:4.5,z:3,rot:-.3,footprint:{w:.5,d:.3}}),t.place(Ys("#d9a876",.5),{x:4.45,z:4.05,rot:.2,footprint:{w:.55,d:.55}}),t.place(Ys("#e8bb88",.38),{x:4.4,z:4.1,y:.4,rot:-.3});let U=new ht;t.place(r(Ki("succulent",{scale:1,seed:7,color:"#9fd3c7"})),{x:1.55,z:4.15,footprint:{r:.18}}),t.place(mh("hi!"),{x:-4.35,z:-0+2.6,rot:vn/2}),t.station({id:"door",label:"heading to the Post Room",corner:"sw",activity:"door",pos:{x:-4.15,z:2.6},face:-vn/2,tags:["travel"],door:h});let B=p0(1.5,1.05,"today"),N=e.south.add(B,2.35,1.72);t.makeInteractive(N,{label:"Today's chalkboard",hint:"click to see the list",onClick:()=>qt.emit("todo:open",t)}),t.chalkboard=B,t.station({id:"todo",label:"writing on today's board",corner:"sw",activity:"write",pos:{x:-2.35,z:3.62},face:0,tags:["work","tasks"]}),t.place(k0(1.3),{x:-2.35,z:4.18,rot:vn,footprint:{w:1.3,d:.42}}),t.place(U0(),{x:-4.5,z:4.1,footprint:{r:.18}}),e.west.add(g0(3,[()=>Sd("#ff9a8c"),()=>x0("#ffe08a"),()=>Sd("#95c8f4")]),-3.95,1.55);let H=rh(.3);e.south.add(H,.6,2.45),t.onUpdate(()=>H.userData.update(new Date)),e.south.add(Li(.5,.36,Ni.map,"#fff7ec"),.6,1.55),t.place(F0(),{x:-.9,z:4.15,footprint:{r:.3}}),t.place(r(Ki("round",{scale:1,seed:3,color:"#ffd2b8"})),{x:-.05,z:4.15,footprint:{r:.25},interactive:{label:"Bushy plant",hint:"boop",onClick:z=>gh(z)}});let Z=Ta("#e8f6ff");t.place(Z,{x:-4.5,z:1.25,footprint:{r:.28},interactive:{label:"Floor lamp",hint:"click to toggle",onClick:z=>Ea(z)}}),t.lights.push(Z),t.station({id:"window-north",label:"looking out the big window",corner:"nw",activity:"gaze",pos:{x:-2.1,z:-3.62},face:vn,tags:["rest","calm"]}),t.station({id:"window-south",label:"watching the clouds",corner:"se",activity:"gaze",pos:{x:2.35,z:2.7},face:.4,tags:["rest","calm"]}),t.onUpdate(dh(i));let $=0,at=new A;return t.onUpdate(z=>{$-=z,!($>0)&&($=.55+Math.random()*.5,at.set(.2+.17,.32+.04+.2,.35-.05),qt.emit("fx","steam",at))}),t.onUpdate(z=>{let tt=s.sound.musicOn&&s.sound.ctx;C.userData.record.rotation.y-=z*(tt?3.5:0),C.userData.horn.scale.setScalar(tt?1+Math.max(0,Math.sin(s.sound.beat()*vn))*.03:1)}),t.finalize(),t}function to(s){if(s.userData.bounceT=0,!s.userData.bouncing){s.userData.bouncing=!0;let t=s.scale.clone(),e=()=>{s.userData.bounceT+=1/60;let n=s.userData.bounceT,i=Math.sin(n*22)*Math.exp(-n*6)*.06;s.scale.set(t.x*(1-i*.5),t.y*(1+i),t.z*(1-i*.5)),n<1?requestAnimationFrame(e):(s.scale.copy(t),s.userData.bouncing=!1)};e()}qt.emit("sfx","pop")}function gh(s){s.userData.wiggle=1,qt.emit("sfx","plant"),qt.emit("fx","sparkle",s.getWorldPosition(new A).add(new A(0,1,0)),{count:4})}function Ea(s){let t=s.userData.lamp;t&&(t.on=!t.on,qt.emit("sfx","switch"),qt.emit("lamp:toggle",s,t.on))}function Y1(s,t,e){s.fillStyle="#fffaf2",s.fillRect(0,0,t,e),s.fillStyle="#ffd36b",s.beginPath(),s.arc(t*.3,e*.35,30,0,Math.PI*2),s.fill(),s.strokeStyle="#ffb59a",s.lineWidth=10,s.lineCap="round";for(let n=0;n<3;n++)s.beginPath(),s.moveTo(t*.15,e*(.6+n*.1)),s.bezierCurveTo(t*.4,e*(.5+n*.1),t*.6,e*(.75+n*.1),t*.88,e*(.6+n*.1)),s.strokeStyle=["#ffb59a","#9fdcc0","#c7b6ee"][n],s.stroke()}var Ad=["#fff3e0","#ffe4ec","#e6f3ff","#eafbe6","#fff8d6"];function Rd(s="#fff3e0",t=1){let e=new ht;e.add(I(et(.3*t,.2*t,.015,.008),L(s,{roughness:.85})));let n=new Me;return n.setAttribute("position",new Kt([-.15*t,.1*t,0,.15*t,.1*t,0,0,-.02*t,0],3)),n.setAttribute("normal",new Kt([0,0,1,0,0,1,0,0,1],3)),n.setAttribute("uv",new Kt([0,1,1,1,.5,0],2)),e.add(I(n,L(new bt(s).offsetHSL(0,0,-.05).getStyle(),{side:fn}),{pos:[0,0,.009]})),e.add(I(ie(.022*t,10,8),L("#e6455e",{roughness:.5}),{pos:[0,0,.012],scale:[1,1,.35]})),e}function H0(){let s=new ht,t=L("#f07462",{roughness:.45}),e=L("#5a3a36",{roughness:.6});s.add(I(Ve(.17,.12,.03,20),e,{pos:[0,.06,0]})),s.add(I(_e(.07,.09,.25,12),e,{pos:[0,.22,0]})),s.add(I(Ji([[0,0],[.38,0],[.42,.06],[.42,.62],[.36,.82],[.2,.93],[0,.96]],32,24,"mailbox"),t,{pos:[0,.32,0]})),s.add(I(en(.42,.025,8,32),L("#ffd6a0",{roughness:.4}),{pos:[0,.62,0],rot:[Math.PI/2,0,0]})),s.add(I(et(.36,.06,.08,.025),L("#2a1a18"),{pos:[0,.98,.37],rot:[-.25,0,0]})),s.add(I(et(.42,.04,.1,.02),L("#ffd6a0"),{pos:[0,1.03,.37],rot:[-.25,0,0]})),s.add(I(ie(.06,12,10),L("#fff3e0"),{pos:[0,.6,.41],scale:[1,1,.35]})),s.add(I(ie(.025,8,6),L("#f07462"),{pos:[-.016,.61,.43],scale:[1,1,.4]})),s.add(I(ie(.025,8,6),L("#f07462"),{pos:[.016,.61,.43],scale:[1,1,.4]}));let n=new ht;return n.userData.dynamic=!0,n.position.set(.43,.75,0),n.add(I(et(.03,.4,.03,.01),L("#ffd6a0"),{pos:[0,.2,0]})),n.add(I(et(.03,.14,.2,.02),L("#ffd36b"),{pos:[0,.33,.1]})),s.add(n),s.userData.flag=n,s}function V0({cols:s=4,rows:t=4,w:e=2,h:n=1.8,d:i=.45,seed:r=3}={}){let o=new ht,a=L("#e3a46f",{roughness:.6}),l=L("#f3cfa8",{roughness:.8}),c=.05;o.add(I(et(e,n,.04,.01),l,{pos:[0,n/2+.1,-i/2+.02]}));for(let f=0;f<=s;f++)o.add(I(et(c,n,i,.015),a,{pos:[-e/2+f*e/s,n/2+.1,0]}));for(let f=0;f<=t;f++)o.add(I(et(e+c,c,i,.015),a,{pos:[0,.1+f*n/t,0]}));for(let f of[-1,1])o.add(I(et(.08,.1,i*.8,.02),L("#c98454"),{pos:[f*(e/2-.1),.05,0]}));let h=un(r),u=e/s,d=n/t;for(let f=0;f<s;f++)for(let p=0;p<t;p++){let x=-e/2+(f+.5)*u,g=.1+p*d+c/2,m=h();if(m<.55){let M=1+Math.floor(h()*3);for(let T=0;T<M;T++){let v=Rd(Ad[Math.floor(h()*Ad.length)],.9);v.rotation.set(-Math.PI/2+.25+h()*.3,0,h()*.3-.15),v.position.set(x+h()*.1-.05,g+.02+T*.025,.02),o.add(v)}}else if(m<.75)o.add(I(et(u*.6,d*.5,i*.6,.03),L($t(["#d9a876","#e8bb88","#c99a6a"]),{roughness:.85}),{pos:[x,g+d*.25,0]})),o.add(I(et(u*.61,.025,i*.61,.008),L("#ff8fa8"),{pos:[x,g+d*.35,0]}));else if(m<.85){let M=I(Gn(.05,u*.5,4,10),L("#fff3e0",{roughness:.85}),{pos:[x,g+.06,0],rot:[0,0,Math.PI/2]});o.add(M)}}for(let f=0;f<s;f++)for(let p=0;p<t;p++)o.add(I(et(.12,.035,.01,.005),L(We.brass,{metalness:.5,roughness:.35}),{pos:[-e/2+(f+.5)*u,.1+p*d+.04,i/2+.005]}));return o}function G0(){let s=new ht,t=L("#e3a46f",{roughness:.55}),e=1.7,n=.75,i=.56;s.add(I(et(e,.07,n,.025),t,{pos:[0,i,0]}));for(let a of[-1,1])s.add(I(et(.5,i,n-.05,.03),L("#d39a62"),{pos:[a*(e/2-.27),i/2,0]}));for(let a of[-1,1])for(let l=0;l<3;l++)s.add(I(ie(.022,8,6),L(We.brass,{metalness:.5}),{pos:[a*(e/2-.27),.1+l*.16,n/2-.01]}));for(let a=0;a<3;a++){let l=Oe({pos:[-.45,i+.05+a*.1,-.1]});l.add(I(et(.5,.025,.38,.01),L("#9fd3c7",{roughness:.5})));for(let c=0;c<3;c++)l.add(I(et(.36,.012,.25,.004),L($t(Ad)),{pos:[G(-.03,.03),.02+c*.012,G(-.02,.02)],rot:[0,G(-.2,.2),0]}));for(let c of[-1,1])l.add(I(et(.03,.1,.03,.01),L("#9fd3c7"),{pos:[c*.22,-.05,.15]}));s.add(l)}s.add(I(et(.22,.04,.15,.015),L("#4a6fa5",{roughness:.6}),{pos:[.35,i+.055,.12]}));let r=Oe({pos:[.55,i+.04,0]});r.add(I(et(.12,.04,.12,.01),L("#ffb59a"))),r.add(I(_e(.025,.025,.1,10),L(We.woodLight),{pos:[0,.07,0]})),r.add(I(ie(.045,12,10),L("#c98454"),{pos:[0,.14,0]})),s.add(r);let o=Oe({pos:[.5,i+.04,-.22]});return o.add(I(et(.22,.06,.18,.02),L("#cbd5e1",{metalness:.3,roughness:.35}))),o.add(I(Ve(.11,.015,.006,20),L("#e6eef7",{metalness:.4,roughness:.3}),{pos:[0,.05,0]})),o.add(I(et(.12,.08,.1,.02),L("#d9a876"),{pos:[0,.1,0]})),s.add(o),s.userData.stamp=r,s}function W0(s=2.6,t=1.4){let e=new ht,n=L("#c98d5d",{roughness:.6});e.add(I(et(s+.14,t+.14,.06,.04),n,{pos:[0,0,.03]})),e.add(I(et(s,t,.02,.01),L("#fff3e3",{roughness:.95}),{pos:[0,0,.065]}));for(let r=0;r<3;r++){let o=t/2-.25-r*.45,a=[];for(let l=0;l<=10;l++)a.push(new A(-s/2+.05+l/10*(s-.1),o-Math.sin(l/10*Math.PI)*.06,.09));e.add(I(new Bn(new Ln(a),20,.006,4),L("#c4a484"),{cast:!1}))}let i=new ht;return i.userData.dynamic=!0,e.add(i),e.userData={pinned:i,w:s,h:t},e}function X0(s,t="#fff3e0"){let e=Ze(256,176),n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,256,176),n.strokeStyle="#e8c9a8",n.lineWidth=6,n.strokeRect(8,8,240,160),n.fillStyle="#ff8fa8",n.fillRect(196,18,40,46),n.fillStyle="#fff",n.fillRect(201,23,30,36),n.fillStyle="#ff8fa8",n.beginPath(),n.arc(216,41,9,0,Yt),n.fill(),n.fillStyle="#5a4036",n.font="28px 'Patrick Hand', cursive",va(n,s,170,4).forEach((a,l)=>n.fillText(a,20,50+l*30));let r=new ht,o=L(t);return r.add(I(et(.38,.26,.01,.004),[o,o,o,o,xn(Je(e),{roughness:.9}),o])),r.add(I(et(.04,.08,.02,.005),L("#d9a876"),{pos:[0,.13,.012]})),r.rotation.z=G(-.1,.1),r}function q0(s=1.4,t="#9fd3c7"){let e=new ht,n=L("#e3a46f",{roughness:.6});e.add(I(et(s,.08,.45,.03),n,{pos:[0,.34,0]}));for(let i of[-1,1])for(let r of[-1,1])e.add(I(et(.07,.34,.07,.02),L("#c98454"),{pos:[i*(s/2-.1),.17,r*.15]}));return e.add(I(et(s,.42,.07,.03),n,{pos:[0,.62,-.2],rot:[-.12,0,0]})),e.add(I(et(s-.1,.07,.4,.03),L(t,{roughness:.95}),{pos:[0,.41,.01]})),e}function Y0(s,t="#cbd5e1"){let e=new Ln(s.map(r=>new A(...r))),n=new ht;n.add(I(new Bn(e,64,.07,12,!1),L(t,{roughness:.25,metalness:.35})));let i=I(Gn(.05,.1,6,10),L("#ffd36b",{roughness:.4,metalness:.2}),{});return i.visible=!1,i.userData.keep=!0,n.add(i),n.userData={curve:e,pod:i},n}var ei=Math.PI,$0={id:"post",name:"The Post Room",w:8,d:7,h:3.3,floor:{type:"tiles",a:"#f7e6cf",b:"#ecd0ae",units:2,n:4},wallStyle:{paper:"#e4eefb",pattern:"scallop",accent:"#a9c0e6",wainscot:"#d5e2f3",board:"#9fb4d6",unit:2,wainscotH:1.05},walls:{south:{paper:"#fbeee0",pattern:"flowers",accent:"#f4b2a3",wainscot:"#f6dcc4",board:"#c98d5d"},west:{paper:"#fbeee0",pattern:"flowers",accent:"#f4b2a3",wainscot:"#f6dcc4",board:"#c98d5d"}},wallCap:"#fff3e3",trim:"#c9d6ea",base:["#fff1e2","#b9cdea","#93acd6"],corners:{nw:"Cubbies",ne:"Letter Wall",se:"Outbox",sw:"Sorting Desk"},openings:[{wall:"east",type:"door",shape:"arch",x:.9,w:1.25,h:2.25,to:"nook"},{wall:"north",type:"window",shape:"arch",x:-1.4,y:1,w:1.3,h:1.65},{wall:"south",type:"window",shape:"rect",x:2.4,y:1.05,w:1.4,h:1.35},{wall:"west",type:"window",shape:"round",x:-1.9,y:1.2,w:1,h:1}],navOpen:[{x:3.6,z:.9,w:1,d:1.3,rot:0}]};function Z0(s){let t=new Jr($0),{walls:e}=t,n=s.daylight.view,i=[],[r,o,a,l]=$0.openings,c=sh(t,e.east,r,{sign:"the nook",color:"#9fc3e8",trim:"#6f93c6",behind:"#ffe3bf"});t.makeInteractive(c.holder,{label:"Door to the Nook",hint:"click to go back",onClick:()=>qt.emit("door:click",t,c)}),_s(t,e.north,o,n,{curtain:"#cfe0f7",flowers:["#ff9db5","#ffd36b"]}),_s(t,e.south,a,n,{curtain:"#ffc9b8"}),_s(t,e.west,l,n,{}),t.place(mh("mail!"),{x:3.35,z:.9,rot:-ei/2}),t.station({id:"door",label:"heading back to the Nook",corner:"ne",activity:"door",pos:{x:3.15,z:.9},face:ei/2,tags:["travel"],door:c});let h=W0(2.4,1.35),u=e.north.add(h,1.75,1.75);t.letterWall=h,t.makeInteractive(u,{label:"Letter Wall",hint:"every letter sent",onClick:()=>qt.emit("letters:open",t)}),e.north.add(jr("sent with love",{w:1.3,h:.24,bg:"#fff3df",color:"#e07a5f"}),1.75,2.72),t.place(q0(1.4,"#ffc4cf"),{x:1.75,z:-2.95,rot:0,footprint:{w:1.4,d:.5}}),t.station({id:"bench-a",label:"reading old letters",corner:"ne",activity:"read",pos:{x:1.35,z:-2.95},approach:{x:1.35,z:-2.15},seat:.42,face:0,tags:["rest","social"]}),t.station({id:"bench-b",label:"resting on the bench",corner:"ne",activity:"sit",pos:{x:2.15,z:-2.95},approach:{x:2.15,z:-2.15},seat:.42,face:0,tags:["rest","social"]}),t.station({id:"letters",label:"admiring the letter wall",corner:"ne",activity:"admire",pos:{x:3.2,z:-2.6},face:ei-.5,tags:["calm"]});let d=wa(7.6,.25,16,["#ffd27a","#bfe6ff","#ffb3c6"]);e.north.add(d,0,3),t.glows.push(d);let f=H0();t.place(f,{x:2.85,z:2.55,rot:-ei/4+.2,footprint:{r:.48},interactive:{label:"The Mailbox",hint:"outgoing mail goes here",onClick:v=>{to(v),qt.emit("sfx","mail")}}}),t.mailbox=f,t.station({id:"mailbox",label:"posting a letter",corner:"se",activity:"post",pos:{x:2.2,z:1.9},face:Math.atan2(2.85-2.2,2.55-1.9),tags:["work","mail"]}),t.place(Ys("#d9a876",.5),{x:3.55,z:1.25+.1,rot:.3,footprint:{w:.55,d:.55}}),t.place(Ys("#e8bb88",.42),{x:1.4,z:3.05,rot:-.2,footprint:{w:.45,d:.45}}),t.place(Ys("#c99a6a",.34),{x:1.38,z:3.05,y:.34,rot:.25}),t.place(Ed("#e2b47c"),{x:3.55,z:3,footprint:{r:.3}});for(let v=0;v<4;v++){let w=Rd(["#fff3e0","#ffe4ec","#e6f3ff","#fff8d6"][v],.8);w.position.set(3.55+G(-.08,.08),.24+v*.02,3+G(-.06,.06)),w.rotation.set(-ei/2,0,G(0,3)),t.props.add(w)}e.south.add(Li(.46,.34,Ni.map,"#fff7ec"),-1,1.75),e.east.add(rh(.28),2.6,2.4);let p=G0();t.place(p,{x:-2.3,z:2.85,rot:ei,footprint:{w:1.75,d:.8}}),t.station({id:"sort",label:"stamping letters",corner:"sw",activity:"stamp",pos:{x:-1.85,z:2.05},face:0,tags:["work","mail"]}),t.station({id:"sort-b",label:"sorting the mail",corner:"sw",activity:"stamp",pos:{x:-2.75,z:2.05},face:0,tags:["work","mail"]});let x=Y0([[-3.2,.6,3.15],[-3.45,1,3.2],[-3.6,1.8,3.25],[-3.6,2.8,3.25],[-3.6,3.22,3.25]],"#cbd5e1");t.place(x,{isStatic:!1}),t.tube=x,t.place(ph("#9fd3c7",.34),{x:-3.6,z:1.6});let g=Ta("#fff0d6");t.place(g,{x:-3.55,z:.55,footprint:{r:.28},interactive:{label:"Floor lamp",hint:"click to toggle",onClick:v=>Ea(v)}}),t.lights.push(g),e.south.add(oh(3.2,.22,["#9ccdf2","#ffd36b","#ffb59a","#c7b6ee"]),1.9,2.85),t.place(V0({cols:4,rows:4,w:2.1,h:1.85,d:.45}),{x:-3.72,z:-1.35,rot:ei/2,footprint:{w:2.2,d:.5},hideWith:"west"}),t.station({id:"cubby",label:"filing letters in the cubbies",corner:"nw",activity:"reach",pos:{x:-2.95,z:-1.35},face:-ei/2,tags:["work","mail"]}),t.station({id:"cubby-b",label:"checking the cubbies",corner:"nw",activity:"reach",pos:{x:-2.95,z:-.65},face:-ei/2,tags:["work","mail"]});let m=Ki("leafy",{scale:1.1,seed:12,color:"#9fc3e8"});i.push(m),t.place(m,{x:-3.45,z:-2.95,footprint:{r:.3},interactive:{label:"Post plant",hint:"thriving",onClick:v=>gh(v)}}),t.station({id:"water-post",label:"watering the post plant",corner:"nw",activity:"water",pos:{x:-2.75,z:-2.6},face:Math.atan2(-3.45+2.75,-2.95+2.6),tags:["care"]}),t.station({id:"window-n",label:"peeking out the window",corner:"nw",activity:"gaze",pos:{x:-1.4,z:-2.85},face:ei,tags:["rest","calm"]}),e.north.add(Li(.4,.3,Ni.hills),-3,2.35),e.west.add(jr("cubbies",{w:.8,h:.22,bg:"#fff3df",color:"#6f93c6"}),1.35,2.35),t.place(fh(2.6,1.7,["#9ccdf2","#fff6ea","#ffc4cf","#fff6ea"],"#7fb2e3"),{x:-.1,z:.2,rot:0}),t.place(Qr("#ffd977",.34),{x:-.7,z:.2}),t.place(Qr("#ffc4cf",.34),{x:.6,z:.2}),t.station({id:"rug-a",label:"chatting on the rug",corner:"center",activity:"tea",pos:{x:-.7,z:.2},seat:.18,face:ei/2,tags:["social","rest"]}),t.station({id:"rug-b",label:"chatting on the rug",corner:"center",activity:"tea",pos:{x:.6,z:.2},seat:.18,face:-ei/2,tags:["social","rest"]});let M=Ki("flowers",{scale:.9,seed:21,color:"#ffd2b8"});i.push(M),t.place(M,{x:3.55,z:-.35,footprint:{r:.22}}),t.onUpdate(dh(i));let T=-G(4,10);return t.onUpdate(v=>{let{curve:w,pod:b}=x.userData;if(T+=v,T>0){let E=T/1.4;if(E>=1)b.visible=!1,T=-G(8,18);else{b.visible=!0;let P=w.getPoint(E),D=w.getTangent(E);b.position.copy(P),b.quaternion.setFromUnitVectors(new A(0,1,0),D),E<.02&&s.roomId==="post"&&qt.emit("sfx","whoosh")}}let C=f.userData.flag,y=(s.store.data.letters?.length||0)>0?-1.4:0;C.rotation.z+=(y-C.rotation.z)*Math.min(1,v*4)}),t.finalize(),t}var xh=class{constructor(t,e=160){let n=new Me,i=new Float32Array(e*3),r=new Float32Array(e*4);for(let a=0;a<e;a++)i[a*3]=(Math.random()-.5)*(t.w-.8),i[a*3+1]=.3+Math.random()*(t.h-.5),i[a*3+2]=(Math.random()-.5)*(t.d-.8),r[a*4]=Math.random()*100,r[a*4+1]=.5+Math.random(),r[a*4+2]=Math.random(),r[a*4+3]=Math.random();n.setAttribute("position",new an(i,3)),n.setAttribute("seed",new an(r,4)),this.uniforms={uTime:{value:0},uOpacity:{value:.6},uColor:{value:new bt("#fff2d6")},uScale:{value:500},uSize:{value:.05}};let o=new Ae({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:Yi,vertexShader:`
        attribute vec4 seed;
        uniform float uTime;
        uniform float uScale;
        uniform float uSize;
        varying float vTw;
        void main() {
          vec3 p = position;
          float t = uTime * 0.12 * seed.y + seed.x;
          p.x += sin(t * 1.3) * 0.35 + sin(t * 0.37) * 0.6;
          p.y += sin(t * 0.9 + seed.z * 6.0) * 0.25;
          p.z += cos(t * 1.1) * 0.35 + cos(t * 0.29) * 0.6;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = uSize * (0.6 + seed.w) * uScale / -mv.z;
          vTw = 0.55 + 0.45 * sin(uTime * (1.0 + seed.z * 2.0) + seed.x * 7.0);
        }
      `,fragmentShader:`
        uniform float uOpacity;
        uniform vec3 uColor;
        varying float vTw;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(uColor * a * a * uOpacity * vTw, 1.0);
        }
      `});this.points=new Ro(n,o),this.points.frustumCulled=!1,this.points.renderOrder=5,t.group.add(this.points)}update(t,e,n,i){this.uniforms.uTime.value+=t;let r=e.state;if(!r)return;let o=r.stars;this.uniforms.uOpacity.value=.18+r.sun*.08+o*.4,this.uniforms.uColor.value.set(o>.5?"#ffe7a0":"#fff4dc"),this.uniforms.uSize.value=o>.5?.075:.05;let a=n.fov*Math.PI/180;this.uniforms.uScale.value=i/(2*Math.tan(a/2))}};function J0(s,t,e={}){let n=new bt(s),i=new ke({color:n,roughness:.5,metalness:0,envMapIntensity:.55}),r=n.clone().lerp(new bt("#fff7ea"),.45),o=n.clone().lerp(new bt("#fff4e6"),.6),a={uFace:{value:t},uFaceRect:{value:new Ue(Ge.w,Ge.h,Ge.y0,gs.height)},uBelly:{value:r},uBellyAmt:{value:e.belly??.55},uRim:{value:o},uRimStrength:{value:.32},uFlash:{value:0},uGlow:{value:0}};return i.userData.uniforms=a,i.onBeforeCompile=l=>{Object.assign(l.uniforms,a),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
}`)},i.customProgramCacheKey=()=>"critter-body-v1",i}function K0(s){let t=new bt(s).offsetHSL(0,.03,-.06);return new ke({color:t,roughness:.55,envMapIntensity:.5})}var LT=new A,Re=(s,t,e,n)=>s.ctx.fx?.(t,e,n),le=(s,t,e={})=>s.ctx.sfx?.(t,{critter:s,...e}),nn=(s,t=0)=>s.headPos(new A,t),Z1=s=>new A(Math.sin(s.heading),0,Math.cos(s.heading)),J1=s=>s.ctx.camera?.position;function eo(s){let t=J1(s);t&&!s.walking&&s.faceToward(t),t&&s.lookAt(t,2.5)}var no={hop:{dur:.78,update(s,t,e,n){let i=t.t,r=s.bounce;if(i<.17){let o=Vn(i/.17);e.sq-=.17*o*r,e.armL.z-=.15*o,e.armR.z-=.15*o}else if(i<.55){let o=(i-.17)/.38;e.y+=4*o*(1-o)*.34*r,e.armL.z+=1.1*Ee(o),e.armR.z+=1.1*Ee(o),e.footL.y-=.02*Ee(o),e.footR.y-=.02*Ee(o),n.mouth="o",n.mouthOpen=.3}else n.eyes=i<.68?"squint":n.eyes;t.at(.17)&&(s.sq.impulse(1.4*r),le(s,"hop")),t.at(.55)&&(s.sq.impulse(-1.6*r),Re(s,"dust",s.footPos(),{count:3,size:.22}),le(s,"land",{strength:.6}))}},boop:{dur:1.05,lockMove:!0,start(s){s.sq.impulse(-2.6),s.leanX.impulse(-1.5),eo(s),Re(s,"pop",nn(s,-.25),{count:1})},update(s,t,e,n){let i=t.t;i<.22?(n.eyes="squint",n.mouth="o",n.mouthOpen=.5,e.sq-=.08*t.w):i<.5?(n.eyes="wide",n.mouth="o",n.mouthOpen=.7,e.y+=Ee(i,.22,.5)*.13,e.armL.z+=Ee(i,.22,.5)*.9,e.armR.z+=Ee(i,.22,.5)*.9):(n.eyes="happy",n.mouth="open",n.mouthOpen=.6,e.tz+=Math.sin(i*14)*.05*(1-i/1.05)),n.blush+=.35,t.at(.22)&&s.sq.impulse(1.8),t.at(.5)&&(s.sq.impulse(-1.4),Re(s,"sparkle",nn(s),{count:3}))}},giggle:{dur:1.5,lockMove:!0,start(s){le(s,"giggle"),eo(s)},update(s,t,e,n){let i=t.t,r=t.w;e.y+=Math.abs(Math.sin(i*24))*.035*r,e.tz+=Math.sin(i*12)*.06*r,e.armR.f+=1.75*r,e.armR.z-=.5*r,e.armL.z+=.3*r,n.eyes="happy",n.mouth="open",n.mouthOpen=.45+.4*Math.abs(Math.sin(i*24)),n.blush+=.4,(t.at(.2)||t.at(.8))&&Re(s,"sparkle",nn(s),{count:2})}},dizzy:{dur:3,lockMove:!0,start(s){le(s,"dizzy"),Re(s,"stars",nn(s,.05),{critter:s,duration:2.6})},update(s,t,e,n){let i=t.t,r=t.w*(1-Vn((i-2.2)/.8));n.eyes="dizzy",n.mouth="wobble",e.tx+=Math.sin(i*6.5)*.15*r,e.tz+=Math.cos(i*6.5)*.15*r,e.sproutZ+=Math.sin(i*6.5)*.35*r,e.sq-=.04*r,e.armL.z+=.5*r,e.armR.z+=.5*r}},grumpy:{dur:3.2,lockMove:!0,start(s,t){t.data.turn=s.heading+(se(.5)?1:-1)*2.2,le(s,"grumble"),Re(s,"anger",nn(s,-.1),{})},update(s,t,e,n){let i=t.t,r=Se(i,0,.3,2,2.6);if(e.sx+=.13*r,e.sq-=.05*r,n.eyes="angry",n.brows="angry",n.mouth="pout",n.blush+=.3,i>.3&&i<1.6){let o=Math.sin(i*15);e.footL.y+=Math.max(0,o)*.07,e.footR.y+=Math.max(0,-o)*.07,e.tz+=o*.035,Math.abs(o)>.97&&!t.data.lastStomp?(t.data.lastStomp=!0,s.sq.impulse(-.6),le(s,"step",{stomp:!0})):Math.abs(o)<.9&&(t.data.lastStomp=!1)}t.at(.4)&&s.setHeading(t.data.turn),i>2.1&&(n.eyes=i<2.6?"closed":"normal",n.mouth="flat",n.brows=null),t.at(2.1)&&le(s,"sigh"),t.at(2.7)&&eo(s)},end(s){s.setMood("content",3)}},wave:{slot:"upper",dur:1.9,start(s,t){t.opts.target?(s.walking||s.faceToward(t.opts.target.position||t.opts.target),s.lookAt(t.opts.target,2)):eo(s),t.opts.sound!==!1&&le(s,"hi")},update(s,t,e,n){let i=t.t,r=Se(i,0,.25,1.55,1.9),o=s.walking?e.armR:e.armL;o.z+=(2.45+Math.sin(i*13)*.42)*r,o.f+=.35*r,e.tz+=Math.sin(i*6.5)*.05*r,r>.4&&(n.eyes="happy",n.mouth="open",n.mouthOpen=.5)}},tilt:{dur:1.7,start(s,t){t.data.dir=se(.5)?1:-1,Re(s,"question",nn(s,.05),{}),le(s,"hmm")},update(s,t,e,n){let i=Se(t.t,0,.28,1.25,1.7),r=t.data.dir;e.tz+=r*.3*ms(Math.min(1,i)),e.sproutZ-=r*.25*i,i>.3&&(n.eyes="wide",n.mouth="o",n.mouthOpen=.1)}},lookAround:{dur:2.8,update(s,t,e,n){let i=t.t,r=Se(i,.15,.45,.95,1.25),o=Se(i,1.25,1.55,2.1,2.45);e.ry+=(r-o)*.6;let a=Se(i,.05,.15,1,1.15),l=Se(i,1.15,1.25,2.15,2.3);n.lookX=(a-l)*.95,n.lookY=.1,i>2.45&&(n.eyes="normal")}},yawn:{dur:2.8,lockMove:!0,start(s){le(s,"yawn")},update(s,t,e,n){let i=t.t,r=Se(i,0,.45,1.05,1.45);if(e.sq+=.14*r,e.armL.z+=2.3*r,e.armR.z+=2.3*r,e.armL.f+=.3*r,e.armR.f+=.3*r,e.tx-=.14*r,i<1.4)n.eyes="closed",n.mouth="yawn",n.mouthOpen=r;else if(i<1.8)n.eyes="closed",n.mouth="cat";else{n.eyes="sleepy";let o=Ee(i,1.8,2.5);e.tz+=Math.sin(i*32)*.05*o}n.tear=Se(i,1,1.3,2.3,2.8)*.9}},stretch:{dur:2.4,lockMove:!0,update(s,t,e,n){let i=t.t,r=Se(i,0,.5,1.8,2.4);e.armL.z+=2.6*r,e.armR.z+=2.6*r,e.sq+=.13*r,e.tz+=Math.sin(i*2.6)*.17*r,n.eyes="closed",n.mouth=i>.6&&i<1.6?"o":"cat",n.mouthOpen=.3,t.at(.6)&&le(s,"mm")}},sneeze:{dur:2.5,lockMove:!0,update(s,t,e,n){let i=t.t;if(i<1.12){let r=Vn(i/.45),o=Vn((i-.65)/.4),a=i<.65?r*.5:.5+o*.5;e.sq+=.14*a,e.tx-=.24*a,n.eyes=a>.6?"squint":"sleepy",n.mouth="o",n.mouthOpen=.3+a*.6,e.sproutX+=.3*a}else if(i<1.55){let r=1-(i-1.12)/.43;n.eyes="squint",n.mouth="open",n.mouthOpen=.8,e.tx+=.22*r}else{let r=Ee(i,1.55,2.3);e.ry+=Math.sin(i*24)*.22*r,n.eyes=i<2?"closed":"happy",n.mouth="wobble"}if(t.at(.05)&&le(s,"ah"),t.at(1.12)){s.sq.impulse(-3.2),s.leanX.impulse(7),s.sproutX.impulse(-6);let r=Z1(s);Re(s,"puff",s.facePos(new A,.65,.5),{dir:r,count:6}),le(s,"sneeze"),s.push.addScaledVector(new Y(r.x,r.z),-1.6)}}},trip:{dur:3.5,lockMove:!0,start(s){le(s,"whoa"),s.vel.multiplyScalar(.3)},update(s,t,e,n){let i=t.t,r=1.42,o=0;if(i<.3)o=qc(i/.3),e.armL.z+=2.1*o,e.armR.z+=2.1*o,n.eyes="wide",n.mouth="o",n.mouthOpen=.8;else if(i<1.9){o=1+Math.sin((i-.3)*18)*Math.exp(-(i-.3)*7)*.06;let a=Math.sin(i*11);e.footL.z-=Math.max(0,a)*.12,e.footR.z-=Math.max(0,-a)*.12,e.armL.z+=.9+Math.sin(i*9)*.35,e.armR.z+=.9+Math.sin(i*9+1.2)*.35,n.eyes="squint",n.mouth="wobble"}else if(i<2.4){let a=(i-1.9)/.5;o=1-ms(a,2.2),n.eyes="normal",n.mouth="o"}else{let a=Ee(i,2.4,3.2);e.tz+=Math.sin(i*26)*.08*a,n.eyes="happy",n.mouth="tongue",n.blush+=.6}e.rx+=r*o,e.y+=.45*_t(o,0,1),t.at(.3)&&(s.sq.impulse(-2.5),Re(s,"dust",s.facePos(new A,.7,.05),{count:6,size:.3}),le(s,"bonk")),t.at(2.45)&&(Re(s,"sweat",nn(s),{}),le(s,"shake"))}},dance:{dur:null,lockMove:!0,start(s,t){t.data.style=$t(["bounce","sway","wiggle"]),t.data.noteT=G(.2,1),t.data.offset=G(0,1)<.5?0:.5},update(s,t,e,n){let i=t.w,r=(s.ctx.beat?s.ctx.beat():t.t*2)+t.data.offset,o=r*Math.PI,a=Math.abs(Math.sin(o)),l=t.data.style;e.y+=a*(l==="bounce"?.14:.07)*i,e.sq+=(a*.08-.05)*i,e.tz+=Math.sin(o*.5)*(l==="sway"?.22:.12)*i,l==="wiggle"&&(e.ry+=Math.sin(o*2)*.25*i),e.armL.z+=(1.1+1.1*Math.max(0,Math.sin(o)))*i,e.armR.z+=(1.1+1.1*Math.max(0,-Math.sin(o)))*i,e.footL.y+=Math.max(0,Math.sin(o))*.05*i,e.footR.y+=Math.max(0,-Math.sin(o))*.05*i;let c=r%8;c>7&&(e.spin+=Yt*rd(c-7)),n.eyes=Math.floor(r/4)%2?"happy":"closed",n.mouth=Math.floor(r/2)%2?"open":"cat",n.mouthOpen=.6,n.blush+=.2,t.data.noteT-=1/60,t.data.noteT<=0&&(t.data.noteT=G(1.2,2.4),Re(s,"note",nn(s),{}))}},spin:{dur:1,start(s){le(s,"whee")},update(s,t,e,n){let i=_t(t.t/.9);e.spin+=Yt*rd(i);let r=Ee(i);e.armL.z+=1.6*r,e.armR.z+=1.6*r,e.y+=r*.06,n.eyes="happy",n.mouth="open"}},sleep:{dur:null,lockMove:!0,fadeIn:.6,start(s,t){t.data.zT=1,t.data.twitchT=G(6,14),t.opts.silent||le(s,"mm")},update(s,t,e,n){let i=t.t,r=Vn(i/.9)*t.w,o=Math.sin(i*1.3);e.sq+=(-.1+o*.035)*r,e.y-=.02*r,e.tx+=(.13+o*.02)*r,e.tz+=Math.sin(i*.37)*.07*r,e.footL.z+=.09*r,e.footR.z+=.09*r,e.armL.z-=.12*r,e.armR.z-=.12*r,e.droop+=.7*r,t.w>.4&&(n.eyes="closed",n.mouth=o>.35?"o":"smile",n.mouthOpen=.15,n.blush+=.15),t.data.zT-=1/60,t.data.zT<=0&&(t.data.zT=G(1.6,2.4),Re(s,"zzz",nn(s,-.05),{}),se(.35)&&le(s,"snore")),t.data.twitchT-=1/60,t.data.twitchT<=0&&(t.data.twitchT=G(8,16),s.sq.impulse(-1.2),s.sproutX.impulse(-3),se(.5)&&le(s,"mumble"));let a=t.data;if(a.bub=(a.bub??-G(1,3))+1/60,a.bub>0&&!t.stopping){let l=Math.min(1,a.bub/4);s.noseBubble(l*(.65+.35*(o*.5+.5))),a.bub>4.5&&Math.random()<.004&&(s.noseBubble(0),a.bub=-G(2,5),s.sq.impulse(-.8),le(s,"pop"))}else s.noseBubble(0)},end(s){s.noseBubble(0)}},wake:{dur:2.6,lockMove:!0,update(s,t,e,n){let i=t.t;if(i<1.1){n.eyes=i<.5?"closed":"sleepy";let r=Se(i,.1,.3,.8,1.05);e.armR.f+=1.7*r,e.armR.z-=.45*r,e.armR.f+=Math.sin(i*22)*.12*r,e.sq-=.05*(1-i/1.1),n.mouth="flat"}else{let r=Se(i,1.1,1.5,2,2.5);e.armL.z+=2.4*r,e.armR.z+=2.4*r,e.sq+=.12*r,n.eyes=r>.3?"closed":"normal",n.mouth=r>.3?"yawn":"smile",n.mouthOpen=r}t.at(1.15)&&le(s,"yawn")}},sit:{dur:null,lockMove:!0,fadeIn:.35,update(s,t,e,n){let i=t.t,r=Vn(i/.45)*t.w;e.sq-=.07*r,e.footL.z+=.15*r,e.footR.z+=.15*r,e.footL.y+=.04*r,e.footR.y+=.04*r,s.seat>.2&&(e.footL.z+=Math.sin(i*3.1)*.05*r,e.footR.z+=Math.sin(i*3.1+Math.PI)*.05*r,e.footL.y-=.03*r,e.footR.y-=.03*r)}},hopTo:{dur:.62,lockMove:!0,start(s,t){t.data.from=s.position.clone(),t.data.to=new A(t.opts.to.x,0,t.opts.to.z),t.data.s0=s.seat,t.data.s1=t.opts.seat??0,t.data.from.distanceTo(t.data.to)>.05&&s.faceToward(t.data.to,!0),s.stopWalking(),s.vel.set(0,0)},update(s,t,e,n){let i=t.t;if(i<.12){e.sq-=.14*Vn(i/.12);return}let r=Vn(_t((i-.12)/.42));s.position.x=t.data.from.x+(t.data.to.x-t.data.from.x)*r,s.position.z=t.data.from.z+(t.data.to.z-t.data.from.z)*r,s.seat=t.data.s0+(t.data.s1-t.data.s0)*r,e.y+=Ee(r)*(.28+Math.abs(t.data.s1-t.data.s0)*.4),e.armL.z+=Ee(r)*.9,e.armR.z+=Ee(r)*.9,r>.1&&r<.9&&(n.mouth="o",n.mouthOpen=.3),t.at(.12)&&(s.sq.impulse(1.4),le(s,"hop")),t.at(.55)&&(s.sq.impulse(-1.6),t.data.s1<.05&&Re(s,"dust",s.footPos(),{count:2}))},end(s,t){s.seat=t.data.s1,s.position.x=t.data.to.x,s.position.z=t.data.to.z}},type:{dur:null,lockMove:!0,start(s,t){t.data.pauseT=G(3,7),t.data.mode="type",t.data.modeT=0},update(s,t,e,n){let i=t.t,r=t.w,o=t.data;if(o.modeT+=1/60,o.pauseT-=1/60,o.pauseT<=0&&(o.mode=o.mode==="type"?$t(["think","think","yay","sip"]):"type",o.modeT=0,o.pauseT=o.mode==="type"?G(3,7):G(1.4,2.2),o.mode==="yay"&&(le(s,"yay",{soft:!0}),Re(s,"sparkle",nn(s),{count:4}))),e.tx+=.09*r,o.mode==="type")e.armL.f+=(1.25+Math.max(0,Math.sin(i*19))*.2)*r,e.armR.f+=(1.25+Math.max(0,Math.sin(i*19+Math.PI))*.2)*r,e.armL.z-=.24*r,e.armR.z-=.24*r,e.y+=Math.abs(Math.sin(i*9.5))*.008*r,n.eyes="focus",n.lookY=-.35,n.lookX=Math.sin(i*.8)*.35,n.mouth="cat",Math.random()<.06&&le(s,"tap");else if(o.mode==="think")e.armR.f+=1.45*r,e.armR.z-=.6*r,e.armL.f+=.9*r,e.tz+=.09*r,n.lookY=.65,n.lookX=.5,n.mouth="flat";else if(o.mode==="yay"){let a=Ee(o.modeT,0,.9);e.y+=a*.12,e.armL.z+=2.2*a,e.armR.z+=2.2*a,n.eyes="happy",n.mouth="open"}else e.armL.f+=1.8*r,e.armL.z-=.3*r,n.eyes="closed",n.mouth="cat",n.blush+=.2}},tinker:{dur:null,lockMove:!0,update(s,t,e,n){let i=t.t,r=t.w,o=i*1.6%1,a=o<.7?Vn(o/.7):1-qc((o-.7)/.3);e.armL.f+=(.9+a*1.5)*r,e.armL.z-=.1*r,e.armR.f+=1*r,e.armR.z-=.35*r,e.tx+=(.1-a*.06)*r,n.eyes="focus",n.lookY=-.5,n.mouth=a>.8?"flat":"cat";let l=Math.floor(i*1.6);l!==t.data.k&&(t.data.k=l,i>.5&&(s.sq.impulse(-.7),Re(s,"spark",s.facePos(new A,.75,.35),{count:4}),le(s,"tink")))}},read:{dur:null,lockMove:!0,start(s,t){!s.item&&s.ctx.makeItem&&s.hold(s.ctx.makeItem("book",s),"front"),t.data.flipT=G(3,6),t.data.reactT=G(5,10),t.data.react=null},update(s,t,e,n){let i=t.t,r=t.data;e.tx+=.12*t.w,n.lookY=-.55;let o=i*.55%1;if(n.lookX=o<.85?-.55+o/.85*1.1:.55-(o-.85)/.15*1.1,n.mouth="cat",r.flipT-=1/60,r.flipT<=0&&(r.flipT=G(3.5,6.5),s.item?.userData.flip?.(),le(s,"page")),r.reactT-=1/60,r.reactT<=0&&(r.reactT=G(6,12),r.react=$t(["gasp","giggle","aww"]),r.reactAt=i),r.react&&i-r.reactAt<1.4){let a=i-r.reactAt;r.react==="gasp"?(n.eyes="wide",n.mouth="o",n.mouthOpen=.7,e.tx-=.08*Ee(a,0,1.4)):r.react==="giggle"?(n.eyes="happy",n.mouth="open",e.y+=Math.abs(Math.sin(a*22))*.02):(n.eyes="happy",n.mouth="cat",n.blush+=.5,a<.05&&Re(s,"heart",nn(s),{count:1}))}},end(s){s.drop(!0)}},think:{dur:3.8,lockMove:!0,start(s){Re(s,"dots",nn(s,.05),{})},update(s,t,e,n){let i=t.t,r=Se(i,0,.4,2.6,3);e.armR.f+=1.5*r,e.armR.z-=.62*r,e.tz+=.09*r,e.ry+=.18*r,i<2.6?(n.lookX=.6,n.lookY=.75,n.mouth=i<1.4?"flat":"o",n.mouthOpen=.1):(n.eyes="star",n.mouth="open",e.y+=Ee(i,2.6,3.2)*.16,e.sproutX-=.4*Ee(i,2.6,3.4),e.armL.z+=1.8*Ee(i,2.6,3.6)),t.at(2.6)&&(Re(s,"bulb",nn(s,.12),{}),le(s,"idea"),s.sq.impulse(1.5))}},write:{dur:null,lockMove:!0,update(s,t,e,n){let i=t.t,r=t.w;e.armL.f+=(2.05+Math.sin(i*7)*.14)*r,e.armL.z+=(.12+Math.cos(i*7)*.12)*r,e.armR.z+=.25*r,e.y+=Math.abs(Math.sin(i*3.5))*.02*r,e.footL.rx=.25*r,n.eyes="focus",n.lookY=.35,n.lookX=Math.sin(i*1.4)*.3,n.mouth="cat",Math.random()<.03&&le(s,"scribble")}},water:{dur:null,lockMove:!0,start(s,t){!s.item&&s.ctx.makeItem&&s.hold(s.ctx.makeItem("wateringCan",s),"front"),t.data.dropT=0},update(s,t,e,n){let i=t.w,r=Se(t.t,.3,.8,99,100);if(s.item&&(s.item.rotation.x=.75*r*i),e.tx+=.08*i,n.eyes="happy",n.mouth="cat",t.data.dropT-=1/60,r>.8&&t.data.dropT<=0){t.data.dropT=.12;let o=s.facePos(new A,.95,.35);Re(s,"drop",o,{})}t.at(1)&&le(s,"water")},end(s){s.drop(!0)}},carry:{slot:"upper",dur:null,update(s,t,e,n){n.mouth="cat",n.eyes="normal"}},reach:{dur:1.3,lockMove:!0,update(s,t,e,n){let i=Se(t.t,0,.35,.85,1.25);e.armL.f+=2.2*i,e.armR.f+=2.2*i,e.armL.z-=.15*i,e.armR.z-=.15*i,e.y+=.06*i,e.sq+=.07*i,e.footL.rx=.5*i,e.footR.rx=.5*i,n.lookY=.45,n.mouth="o",n.mouthOpen=.2,t.at(.7)&&le(s,"pin")}},admire:{dur:1.8,lockMove:!0,update(s,t,e,n){let i=Se(t.t,0,.3,1.5,1.8);e.armL.z-=.5*i,e.armR.z-=.5*i,e.armL.f-=.45*i,e.armR.f-=.45*i,e.tx-=.06*i,e.tx+=Math.sin(t.t*10)*.05*Ee(t.t,.6,1.3),e.y+=Math.abs(Math.sin(t.t*7))*.025*i,n.eyes="happy",n.mouth="cat",n.blush+=.2}},stamp:{dur:null,lockMove:!0,update(s,t,e,n){let i=t.t,r=i*1.2%1,o=r<.65?Vn(r/.65):1-qc((r-.65)/.35);e.armL.f+=(1+o*1.1)*t.w,e.armR.f+=(1+o*1.1)*t.w,e.armL.z-=.35*t.w,e.armR.z-=.35*t.w,e.y+=o*.05,n.eyes=o>.8?"focus":"normal",n.lookY=-.5,n.mouth="cat";let a=Math.floor(i*1.2);a!==t.data.k&&(t.data.k=a,i>.5&&(s.sq.impulse(-1.1),le(s,"stamp"),se(.4)&&Re(s,"sparkle",s.facePos(new A,.7,.3),{count:2})))}},gaze:{dur:null,lockMove:!0,start(s,t){t.data.sighT=G(4,9)},update(s,t,e,n){let i=t.t;n.lookY=.35,n.lookX=Math.sin(i*.25)*.4,n.mouth="cat",e.tz+=Math.sin(i*.8)*.05*t.w,e.armL.z-=.1,t.data.sighT-=1/60,t.data.sighT<=0&&(t.data.sighT=G(6,11),t.data.dreamy=i,se(.5)&&Re(s,"heart",nn(s),{count:1})),t.data.dreamy&&i-t.data.dreamy<1.8&&(n.eyes="closed",n.blush+=.3)}},pet:{dur:null,lockMove:!0,fadeIn:.25,start(s,t){t.data.heartT=.3,t.data.cooT=0,s.stopWalking()},update(s,t,e,n){let i=t.t,r=t.w,o=s.petLean||{x:0,y:0};e.tz+=_t(o.x,-1,1)*.22*r,e.tx+=_t(o.y,-1,1)*.12*r,e.sq+=(Math.sin(i*38)*.008-.03)*r,e.sproutZ+=Math.sin(i*5)*.25*r,e.armL.z+=.35*r,e.armR.z+=.35*r,n.eyes=Math.floor(i/1.6)%3===2?"happy":"closed",n.mouth="cat",n.blush+=.55*r,t.data.heartT-=1/60,t.data.heartT<=0&&(t.data.heartT=G(.5,.9),Re(s,"heart",nn(s),{count:1})),t.data.cooT-=1/60,t.data.cooT<=0&&(t.data.cooT=G(1.4,2.4),le(s,"coo"))}},held:{dur:null,lockMove:!0,fadeIn:.1,start(s,t){le(s,"whee"),t.data.brave=s.traits.energy>.35},update(s,t,e,n){let i=t.t,r=t.w,o=s.heldVel;e.sq+=.07*r,e.tz+=_t(-o.x*.09,-.5,.5)*r,e.tx+=_t(o.y*.09,-.5,.5)*r,e.footL.y+=(Math.sin(i*13)*.035-.04)*r,e.footR.y+=(Math.sin(i*13+Math.PI)*.035-.04)*r,e.footL.z+=Math.cos(i*13)*.04*r,e.footR.z-=Math.cos(i*13)*.04*r,e.armL.z+=(.95+Math.sin(i*10)*.35)*r,e.armR.z+=(.95+Math.sin(i*10+1.3)*.35)*r,i<1||!t.data.brave?(n.eyes="wide",n.mouth=t.data.brave?"o":"wobble",n.mouthOpen=.6):(n.eyes="happy",n.mouth="open"),n.blush+=.2}},land:{dur:1,lockMove:!0,update(s,t,e,n){let i=t.t;i<.3?(n.eyes="squint",n.mouth="o"):(e.tz+=Math.sin(i*26)*.07*(1-i),n.eyes="normal",n.mouth="smile")}},hiccup:{dur:.9,update(s,t,e,n){let i=t.t;e.y+=Ee(i,.1,.3)*.08,i>.1&&i<.5&&(n.eyes="wide",n.mouth="o",n.mouthOpen=.2),t.at(.1)&&(s.sq.impulse(2.4),le(s,"hic"))}},scratch:{dur:1.7,update(s,t,e,n){let i=t.t,r=Se(i,0,.3,1.3,1.7);e.armR.z+=2.25*r,e.armR.f+=(.3+Math.sin(i*21)*.13)*r,e.tz-=.12*r,n.lookX=-.5,n.lookY=.55,n.mouth="cat"}},hum:{dur:3.2,start(s){le(s,"hum")},update(s,t,e,n){let i=t.t;e.tz+=Math.sin(i*3.2)*.07*t.w,e.y+=Math.abs(Math.sin(i*3.2))*.015,n.eyes="closed",n.mouth="o",n.mouthOpen=.15,(t.at(.3)||t.at(1.4)||t.at(2.4))&&Re(s,"note",nn(s),{})}},wiggle:{dur:1.5,update(s,t,e,n){let i=Se(t.t,0,.2,1.2,1.5);e.ry+=Math.sin(t.t*17)*.26*i,e.sq+=Math.sin(t.t*34)*.03*i,e.armL.z+=.6*i,e.armR.z+=.6*i,n.eyes="happy",n.mouth="cat"}},tapFoot:{dur:2.4,update(s,t,e,n){let i=Se(t.t,0,.2,2.1,2.4);e.footL.y+=Math.max(0,Math.sin(t.t*12))*.05*i,e.footL.rx=-.4*i,e.armL.z-=.45*i,e.armR.z-=.45*i,e.armL.f-=.4*i,e.armR.f-=.4*i,n.mouth="flat",n.lookX=.6,n.lookY=.2}},blinkSlow:{dur:1.4,update(s,t,e,n){n.open=1-Ee(t.t,.1,1.2),n.mouth="cat",n.blush+=.25*Ee(t.t,0,1.4)}},nod:{dur:1,slot:"upper",update(s,t,e,n){e.tx+=Math.sin(t.t*15)*.14*Se(t.t,0,.1,.8,1),n.eyes="happy"}},shakeHead:{dur:1.1,slot:"upper",update(s,t,e,n){e.ry+=Math.sin(t.t*17)*.3*Se(t.t,0,.1,.85,1.1),n.eyes="closed",n.mouth="flat"}},surprised:{dur:1.2,start(s){s.sq.impulse(3.2),Re(s,"exclaim",nn(s,.05),{}),le(s,"gasp")},update(s,t,e,n){let i=t.t;e.y+=Ee(i,0,.32)*.2,e.sproutX-=.5*Ee(i,0,.8),e.armL.z+=.9*Ee(i,0,.6),e.armR.z+=.9*Ee(i,0,.6),n.eyes=i<.7?"dot":"wide",n.mouth="o",n.mouthOpen=.8}},cheer:{dur:2.3,lockMove:!0,start(s){eo(s),le(s,"yay"),Re(s,"confetti",nn(s,.1),{count:24})},update(s,t,e,n){let i=t.t,r=Ee(i,.1,.65),o=Ee(i,.85,1.4);e.y+=(r+o)*.28*s.bounce,e.armL.z+=2.5*Se(i,0,.15,1.6,2.1),e.armR.z+=2.5*Se(i,0,.15,1.6,2.1),e.armL.z+=Math.sin(i*16)*.2,e.armR.z+=Math.sin(i*16+1)*.2,n.eyes="star",n.mouth="open",n.mouthOpen=.8,n.blush+=.4,(t.at(.65)||t.at(1.4))&&(s.sq.impulse(-1.6),Re(s,"dust",s.footPos(),{count:2}))}},shy:{dur:2.6,lockMove:!0,update(s,t,e,n){let i=t.t,r=Se(i,0,.3,2.2,2.6),o=Se(i,1.1,1.25,1.6,1.8);e.armL.f+=(1.9-o*.6)*r,e.armR.f+=1.9*r,e.armL.z-=.55*r,e.armR.z-=.55*r,e.tz+=Math.sin(i*3)*.07*r,e.tx+=.1*r,n.eyes=o>.5?"normal":"closed",n.blush=1.1,n.mouth="wobble",t.at(.4)&&Re(s,"heart",nn(s),{count:1,small:!0})}},sad:{dur:3.2,lockMove:!0,start(s){le(s,"aww")},update(s,t,e,n){let i=Se(t.t,0,.5,2.6,3.2);e.sq-=.05*i,e.tx+=.12*i,e.droop+=.9*i,e.armL.z-=.15*i,e.armR.z-=.15*i,n.eyes="sad",n.mouth="frown",n.brows="worried",n.tear=Se(t.t,.8,1.2,2.4,3)}},sheepish:{dur:2.6,lockMove:!0,start(s){eo(s),Re(s,"sweat",nn(s),{})},update(s,t,e,n){let i=t.t,r=Se(i,0,.3,2.2,2.6);e.armR.z+=2.2*r,e.armR.f+=(.3+Math.sin(i*20)*.12)*r,e.tz-=.1*r,n.eyes="happy",n.mouth="wobble",n.blush=.9}},hug:{dur:2.8,lockMove:!0,start(s,t){t.opts.partner&&s.faceToward(t.opts.partner.position),le(s,"coo")},update(s,t,e,n){let i=Se(t.t,0,.4,2.2,2.8);e.tx+=.24*i,e.armL.f+=1.5*i,e.armR.f+=1.5*i,e.armL.z+=.2*i,e.armR.z+=.2*i,e.sq+=Math.sin(t.t*4)*.02*i,n.eyes=i>.5?"closed":"happy",n.mouth="cat",n.blush+=.6*i,t.at(.7)&&Re(s,"heart",nn(s,.1),{count:2})}},bonk:{dur:1.4,lockMove:!0,start(s,t){s.sq.impulse(-2.6);let e=t.opts.from?new Y(s.position.x-t.opts.from.x,s.position.z-t.opts.from.z).normalize():new Y(-Math.sin(s.heading),-Math.cos(s.heading));s.push.addScaledVector(e,2.2),s.leanX.impulse(-4),le(s,"bonk",{soft:!0})},update(s,t,e,n){let i=t.t;i<.4?(n.eyes="squint",n.mouth="o"):i<.8?(n.eyes="wide",n.mouth="o"):(n.eyes="happy",n.mouth="open",e.y+=Math.abs(Math.sin(i*20))*.02)}},talk:{slot:"upper",dur:null,update(s,t,e,n){s.talkTime>0?(e.armL.f+=Math.max(0,Math.sin(t.t*3.3))*.5*t.w,e.armL.z+=Math.max(0,Math.sin(t.t*2.1))*.4*t.w):e.tx+=Math.max(0,Math.sin(t.t*5))*.04*t.w}},peek:{dur:2.2,update(s,t,e,n){let i=Se(t.t,0,.4,1.7,2.2);e.tx+=.18*i,e.tz+=.18*i,n.eyes="wide",n.mouth="o",n.mouthOpen=.15}}};var $s=new A,j0=new A,HT=new A(0,1,0),Aa=[{name:"peach",color:"#ffb18f"},{name:"mint",color:"#93dcbc"},{name:"lilac",color:"#c4b0f2"},{name:"butter",color:"#ffd977"},{name:"sky",color:"#95c8f4"},{name:"rose",color:"#ffa3bf"},{name:"sage",color:"#b9d48f"},{name:"apricot",color:"#ffc58a"},{name:"lavender",color:"#a9b2f0"},{name:"coral",color:"#ff9a8c"}],vh=["sprout","leaf","antenna","flower"],Q0={happy:{eyes:"normal",mouth:"smile",blush:.38},content:{eyes:"normal",mouth:"cat",blush:.32},excited:{eyes:"star",mouth:"open",blush:.5,mouthOpen:.55},sleepy:{eyes:"sleepy",mouth:"flat",blush:.25},curious:{eyes:"normal",mouth:"o",blush:.3,mouthOpen:.1},sad:{eyes:"sad",mouth:"frown",blush:.2,brows:"worried"},grumpy:{eyes:"angry",mouth:"pout",blush:.25,brows:"angry"},focused:{eyes:"focus",mouth:"cat",blush:.25},shy:{eyes:"normal",mouth:"wobble",blush:.8}},K1=1,Cd=null,tm=null,yh=class{constructor(t={}){this.id=t.id||`critter-${K1++}`,this.name=t.name||"Sprout",this.seed=t.seed??Math.floor(Math.random()*1e9);let e=un(this.seed);this.rng=e,this.color=t.color||Aa[Math.floor(e()*Aa.length)].color,this.accessory=t.accessory||vh[Math.floor(e()*vh.length)],this.size=t.size??.92+e()*.16;let n=t.traits||{};this.traits={energy:n.energy??e(),curiosity:n.curiosity??e(),sociability:n.sociability??e(),sleepiness:n.sleepiness??e(),clumsiness:n.clumsiness??e()*.8,chattiness:n.chattiness??e()};let i=this.traits;this.walkSpeed=.85+i.energy*.55,this.bounce=.8+i.energy*.45,this.blinkEvery=2.4+e()*2.6,this.voice=t.voice??.85+e()*.5,this.ctx=t.ctx||{},this.mood="happy",this.moodHold=0,this._build(t),this._initState()}_build(t){let e=Vp();this.face=new Jc(t.faceShape||{eyeDX:.146+this.rng()*.028,eyeSize:.92+this.rng()*.2,eyeY:.55+this.rng()*.03}),this.material=J0(this.color,this.face.texture,{belly:.22+this.rng()*.2}),this.limbMaterial=K0(this.color),this.root=new ht,this.root.name=`critter:${this.name}`,this.root.userData.critter=this,this.root.scale.setScalar(this.size),this.mover=new ht,this.root.add(this.mover),this.feet=[];for(let o of[1,-1]){let a=new Lt(e.foot,this.limbMaterial);a.castShadow=!0,a.position.set(o*.19,0,.16),a.userData.base=a.position.clone(),a.userData.critter=this,this.mover.add(a),this.feet.push(a)}this.squash=new ht,this.squash.position.y=gs.lift,this.mover.add(this.squash),this.bodyPivot=new ht,this.squash.add(this.bodyPivot),this.body=new Lt(e.body,this.material),this.body.castShadow=!0,this.body.receiveShadow=!0,this.body.userData.critter=this,this.bodyPivot.add(this.body),this.arms=[];let n=.4,i=ld(n)-.02;for(let o of[1,-1]){let a=new ht;a.position.set(o*i,n,.03);let l=new Lt(e.arm,this.limbMaterial);l.castShadow=!0,l.userData.critter=this,a.add(l),a.userData.side=o,this.bodyPivot.add(a),this.arms.push(a)}this.topPivot=new ht,this.topPivot.position.set(0,gs.height-.03,.01),this.bodyPivot.add(this.topPivot),this.leafPivots=[],this._buildAccessory(e),this.hand=new ht,this.hand.position.set(0,.36,.52),this.bodyPivot.add(this.hand),this.item=null,this.itemMode=null;let r=new Mn({map:Gp(),transparent:!0,depthWrite:!1,opacity:1});this.shadow=new Lt(e.shadow,r),this.shadow.position.y=.012,this.shadow.renderOrder=1,this.shadow.userData.noAO=!0,this.root.add(this.shadow)}_buildAccessory(t){let e=new ke({color:"#76c25e",roughness:.5}),n=new ke({color:"#8fd672",roughness:.45});this.accessoryMaterials=[e,n];let i=this.accessory;if(i==="sprout"||i==="flower"){let r=new Lt(t.stem,e);r.castShadow=!0,this.topPivot.add(r);let o=new ht;if(o.position.copy(t.stemTip),this.topPivot.add(o),i==="sprout")for(let a of[1,-1]){let l=new ht;l.rotation.y=a>0?.25:Math.PI-.25;let c=new Lt(t.leaf,a>0?n:e);c.castShadow=!0,c.rotation.z=.45,l.add(c),l.userData.baseZ=.45,l.userData.side=a,o.add(l),this.leafPivots.push({pivot:l,leaf:c,side:a})}else{let a=this.rng()<.5?"#fff6ee":"#ffd0e0",l=new ke({color:a,roughness:.5}),c=new ke({color:"#ffcc4d",roughness:.6}),h=new ht;h.rotation.z=-.35;for(let p=0;p<5;p++){let x=new Lt(t.petal,l);x.rotation.y=p/5*Math.PI*2,x.rotation.z=.18,x.castShadow=!0,h.add(x)}let u=new Lt(t.flowerCenter,c);u.position.y=.008,h.add(u),o.add(h),this.flower=h,this.accessoryMaterials.push(l,c);let d=new ht;d.position.set(.01,-.1,0),d.rotation.y=Math.PI-.3;let f=new Lt(t.leaf,n);f.scale.setScalar(.75),f.rotation.z=.5,d.add(f),d.userData.baseZ=.5,o.add(d),this.leafPivots.push({pivot:d,leaf:f,side:-1})}}else if(i==="leaf"){let r=new ht;r.rotation.y=Math.PI/2+.2;let o=new Lt(t.bigLeaf,n);o.castShadow=!0,o.rotation.z=1.05,r.add(o),r.userData.baseZ=1.05,this.topPivot.add(r),this.leafPivots.push({pivot:r,leaf:o,side:1})}else if(i==="antenna"){let r=this.limbMaterial,o=new Lt(t.antennaStalk,r);o.castShadow=!0,this.topPivot.add(o);let a=new bt(this.color).offsetHSL(.45,.1,.05),l=new ke({color:a,roughness:.3,emissive:a,emissiveIntensity:.15});this.accessoryMaterials.push(l),this.bobbleMat=l;let c=new Lt(t.bobble,l);c.position.y=.22,c.castShadow=!0,this.topPivot.add(c),this.bobble=c}}_initState(){this.time=G(0,100),this.vel=new Y,this.desiredVel=new Y,this.push=new Y,this.speed=0,this.prevVelFwd=0,this.prevVelSide=0,this.yaw=new kn(0,2,.72),this.yawVel=0,this.phase=0,this.walkBlend=0,this.hopBlend=0,this.gait="walk",this.sq=new kn(0,4.2,.3),this.leanX=new kn(0,2.6,.32),this.leanZ=new kn(0,2.6,.32),this.sproutX=new kn(0,2.4,.16),this.sproutZ=new kn(0,2.4,.16),this.prevTop=null,this.prevTopVel=new A,this.airY=0,this.vy=0,this.held=!1,this.falling=!1,this.heldVel=new Y,this.actions=[],this.path=null,this.pathIndex=0,this.arrive=null,this.faceYaw=null,this.blinkT=G(.5,3),this.blinkP=-1,this.doubleBlink=!1,this.look={x:0,y:0},this.lookTarget=null,this.lookUntil=0,this.glance={x:0,y:0,t:G(1,3)},this.talkTime=0,this.pokeCount=0,this.pokeDecay=0,this.petAmount=0,this.fidgetT=G(2,6),this.fidgetsEnabled=!0,this.stance="stand",this.seat=0,this.visible=!0,this.lastHeadingTarget=0,this.faceState=hd(),this.flash=0,this.hover=0,this.hoverTarget=0}setContext(t){this.ctx=t}get position(){return this.root.position}get heading(){return this.yaw.x}setHeading(t,e=!1){let n=Hp(this.yaw.x,t);this.yaw.target=n,e&&this.yaw.snap(n)}faceToward(t,e=!1){let n=t.x-this.root.position.x,i=t.z-this.root.position.z;n*n+i*i<1e-6||this.setHeading(Math.atan2(n,i),e)}lookAt(t,e=2){this.lookTarget=t,this.lookUntil=this.time+e}play(t,e={}){let n=no[t];if(!n)return console.warn("unknown action",t),null;let i=n.slot||"main";for(let o of this.actions)(o.def.slot||"main")===i&&!o.stopping&&this._stopAction(o,n.blendOut??.18);let r={def:n,name:t,t:0,dur:e.duration??(typeof n.dur=="function"?n.dur(this,e):n.dur),w:0,stopping:!1,fade:0,opts:e,data:{},fired:new Set,onDone:e.onDone,at(o){return this.t>=o&&!this.fired.has(o)?(this.fired.add(o),!0):!1}};return n.start?.(this,r),this.actions.push(r),r}stop(t,e=.25){for(let n of this.actions)(!t||n.name===t)&&!n.stopping&&this._stopAction(n,e)}stopSlot(t="main",e=.2){for(let n of this.actions)(n.def.slot||"main")===t&&!n.stopping&&this._stopAction(n,e)}isPlaying(t){return this.actions.some(e=>e.name===t&&!e.stopping)}get mainAction(){for(let t=this.actions.length-1;t>=0;t--){let e=this.actions[t];if((e.def.slot||"main")==="main"&&!e.stopping)return e}return null}get busy(){let t=this.mainAction;return!!(t&&t.def.lockMove)}_stopAction(t,e){t.stopping=!0,t.fade=Math.max(.01,e),t.def.end?.(this,t)}walkPath(t,e={}){if(this.path=t&&t.length?t.map(n=>new Y(n.x,n.z)):null,this.pathIndex=0,this.arrive=e.onArrive||null,this.pathSpeed=e.speed??1,this.gait=e.gait||(this.traits.energy>.82&&se(.4)?"hop":"walk"),this.arriveFace=e.face??null,!this.path){let n=this.arrive;this.arrive=null,n?.(!0)}}stopWalking(){this.path=null,this.desiredVel.set(0,0)}get walking(){return!!this.path}say(t,e={}){let n=e.duration??Math.min(5,.6+t.length*.055);this.talkTime=n,this.ctx.onSay?.(this,t,{...e,duration:n})}showFace(t,e=3){this.faceOverride={...t,until:this.time+e}}setMood(t,e=0){this.mood=t,this.moodHold=e}hold(t,e="front"){this.drop(!0),this.item=t,this.itemMode=e,e==="overhead"?this.hand.position.set(0,gs.height+.18,.02):e==="side"?this.hand.position.set(.5,.25,.18):this.hand.position.set(0,.36,.5),this.hand.add(t),t.position.set(0,0,0),t.rotation.set(0,0,0)}drop(t=!1){if(!this.item)return null;let e=this.item;return this.hand.remove(e),this.item=null,this.itemMode=null,t&&tb(e),e}poke(){if(this.pokeCount+=1,this.pokeDecay=2.2,this.flash=.35,this.ctx.sfx?.("boop",{pitch:this.voice,critter:this}),!this.held){if(this.mainAction?.name==="sleep"){this.brain?this.stop("sleep",.2):this.play("wake");return}this.pokeCount>=7?(this.pokeCount=0,this.play("grumpy")):this.pokeCount>=5?this.play("dizzy"):this.pokeCount>=3?this.play("giggle"):this.play("boop")}}update(t){t=Math.min(t,1/20),this.time+=t;let e=this.time;this.pokeDecay>0&&(this.pokeDecay-=t,this.pokeDecay<=0&&(this.pokeCount=0)),this.moodHold>0&&(this.moodHold-=t),this.talkTime=Math.max(0,this.talkTime-t),this.flash=Ye(this.flash,0,10,t),this.hover=Ye(this.hover,this.hoverTarget,10,t);let n=this._pose=this._pose||j1();Q1(n);let i=Q0[this.mood]||Q0.happy,r=this.faceState;r.eyes=i.eyes,r.mouth=i.mouth,r.mouthOpen=i.mouthOpen??.4,r.blush=i.blush,r.brows=i.brows||null,r.tear=0,r.open=1,this._locomotion(t,n),this._lookAndBlink(t,r),this._idle(t,n,r);for(let a=0;a<this.actions.length;a++){let l=this.actions[a];l.t+=t,l.stopping?l.w-=t/l.fade:(l.w=Math.min(1,l.w+t/(l.def.fadeIn??.12)),l.dur&&l.t>=l.dur&&(l.stopping=!0,l.fade=l.def.fadeOut??.12,l.def.end?.(this,l),l.finished=!0)),l.w=_t(l.w,0,1),l.def.update(this,l,n,r,t)}for(let a=this.actions.length-1;a>=0;a--){let l=this.actions[a];l.stopping&&l.w<=0&&(this.actions.splice(a,1),l.finished&&l.onDone?.(this,l))}this.item?.userData.update?.(t),this.item&&!n.armsOverride&&(this.itemMode==="overhead"?(n.armL.z+=2.55*1,n.armR.z+=2.55*1,n.armL.f+=.15,n.armR.f+=.15):this.itemMode==="front"?(n.armL.f+=1.15,n.armR.f+=1.15,n.armL.z-=.28,n.armR.z-=.28):this.itemMode==="side"&&(n.armL.z+=.5,n.armL.f+=.4));let o=this.faceOverride;o&&this.time<o.until&&(o.eyes&&(r.eyes=o.eyes),o.mouth&&(r.mouth=o.mouth,r.mouthOpen=o.mouthOpen??.6),o.blush!==void 0&&(r.blush=o.blush),o.brows!==void 0&&(r.brows=o.brows)),this.talkTime>0&&!n.faceLocked&&(r.mouth!=="yawn"&&r.mouth!=="open"&&(r.mouth="talk"),r.mouthOpen=.5+.5*Math.sin(e*19)*Math.abs($c(e*6,this.seed)),n.y+=Math.abs(Math.sin(e*9.5))*.012),this._applyPose(t,n,r)}_locomotion(t,e){let n=this.root.position,i=this.desiredVel.set(0,0),r=this.busy;if(this.held)this.path=this.path?this.path:null;else if(this.path&&!r){let v=this.path[this.pathIndex],w=v.x-n.x,b=v.y-n.z,C=Math.hypot(w,b),y=this.pathIndex===this.path.length-1,E=this.walkSpeed*this.pathSpeed*(this.gait==="hop"?1.15:this.gait==="run"?1.8:1);if(C<(y?.06:.28))if(y){let P=this.arrive;this.path=null,this.arrive=null,this.arriveFace!==null&&this.arriveFace!==void 0&&this.setHeading(this.arriveFace),P?.(!0)}else this.pathIndex++;else{let P=y?_t(C/.6,.25,1):1;i.set(w/C*E*P,b/C*E*P)}}let o=this.held?0:6.5,a=this.vel.x,l=this.vel.y;this.vel.x=Ye(this.vel.x,i.x,o,t),this.vel.y=Ye(this.vel.y,i.y,o,t),!this.held&&!this.falling&&(n.x+=(this.vel.x+this.push.x)*t,n.z+=(this.vel.y+this.push.y)*t),this.push.multiplyScalar(Math.exp(-8*t)),this.speed=this.vel.length();let c=this.yaw.x;this.speed>.08&&!this.held&&this.setHeading(Math.atan2(this.vel.x,this.vel.y)),this.yaw.update(t),this.yawVel=(this.yaw.x-c)/Math.max(t,1e-4),this.root.rotation.y=this.yaw.x,Math.abs(Xc(this.yaw.target-this.lastHeadingTarget))>.9&&(this.lastHeadingTarget=this.yaw.target,this.blinkP<0&&(this.blinkP=0));let h=Math.sin(this.yaw.x),u=Math.cos(this.yaw.x),d=this.vel.x*h+this.vel.y*u,f=this.vel.x*u-this.vel.y*h,p=(d-this.prevVelFwd)/Math.max(t,1e-4),x=(f-this.prevVelSide)/Math.max(t,1e-4);this.prevVelFwd=d,this.prevVelSide=f,this.leanX.target=_t(d*.07-p*.018,-.3,.3),this.leanZ.target=_t(x*.012+this.yawVel*d*.03,-.25,.25);let g=this.speed>.05&&!this.held,m=!g&&Math.abs(this.yawVel)>1.2&&!this.held&&!r;this.walkBlend=Ye(this.walkBlend,g||m?1:0,9,t);let M=this.gait==="hop"&&g;if(this.hopBlend=Ye(this.hopBlend,M?1:0,7,t),g){let v=this.gait==="hop"?.5:this.gait==="run"?.3:.19;this.phase+=t*Math.PI*this.speed/v}else m&&(this.phase+=t*Math.PI*4.5);let T=this.walkBlend*(1-this.hopBlend);if(T>.001){let v=this.phase,w=Math.sin(v),b=this.gait==="run"?1.4:1;e.footL.y+=Math.max(0,w)*.08*T,e.footR.y+=Math.max(0,-w)*.08*T,e.footL.z+=Math.cos(v)*.085*T*b,e.footR.z-=Math.cos(v)*.085*T*b,e.y+=Math.abs(w)*.035*T*this.bounce,e.sq-=(1-Math.abs(w))*.03*T*this.bounce,e.tz+=w*.07*T,e.ry+=w*.06*T,e.armL.f+=w*.6*T*b,e.armR.f-=w*.6*T*b,e.armL.z+=.12*T,e.armR.z+=.12*T,e.tx+=.04*T*b}if(this.hopBlend>.001){let v=this.hopBlend*this.walkBlend,w=this.phase,b=Math.abs(Math.sin(w));e.y+=b*.2*v*this.bounce;let C=1-zs(0,.35,b);e.sq+=(b*.1-C*.14)*v,e.armL.z+=(.4+b*.9)*v,e.armR.z+=(.4+b*.9)*v,e.footL.y+=b*.03*v,e.footR.y+=b*.03*v,e.footL.z-=b*.04*v,e.footR.z-=b*.04*v;let y=this._hopContact||!1,E=b<.12;E&&!y&&v>.5&&(this.sq.impulse(-.6*this.bounce),se(.5)&&this.ctx.fx?.("dust",this.footPos(),{count:2,size:.18}),this.ctx.sfx?.("step",{critter:this,soft:!0})),this._hopContact=E}if(T>.5&&g){let v=Math.floor(this.phase/Math.PI);v!==this._lastStep&&(this._lastStep=v,this.ctx.sfx?.("step",{critter:this}))}if(this.held)this.airY=Ye(this.airY,this.heldHeight??1.1,10,t);else if((this.falling||this.airY>1e-4)&&(this.vy-=18*t,this.airY+=this.vy*t,this.airY<=0)){let v=Math.abs(this.vy);this.airY=0,this.falling=!1,(v>1.2||this._bigFall)&&(this.sq.impulse(-Math.min(4,v*.55)),this.ctx.fx?.("dust",this.footPos(),{count:5,size:.3}),this.ctx.sfx?.("land",{critter:this,strength:v}),v>3&&!this._bigFall?(this.vy=v*.22,this.airY=1e-4,this.falling=!0,this._bigFall=!0):(this.play(this._bigFall&&se(.35)?"dizzy":"land"),this._bigFall=!1)),this.falling||(this.vy=0)}}_lookAndBlink(t,e){let n=this.time;if(this.blinkT-=t,this.blinkT<=0&&this.blinkP<0&&(this.blinkP=0,this.doubleBlink=se(.18),this.blinkT=this.blinkEvery*G(.6,1.4)),this.blinkP>=0){this.blinkP+=t/.15;let a=this.blinkP;e.open=a<.5?1-a*2:Math.min(1,(a-.5)*2),a>=1&&(this.doubleBlink?(this.doubleBlink=!1,this.blinkP=-.25):this.blinkP=-1)}this.blinkP<0&&this.blinkP>-1&&(this.blinkP+=t/.08,this.blinkP>=0&&(this.blinkP=0),e.open=1);let i=0,r=0,o=null;if(this.lookTarget&&n<this.lookUntil?(o=this.lookTarget.isVector3?this.lookTarget:this.lookTarget.position||null,this.lookTarget.root&&(o=j0.copy(this.lookTarget.root.position).setY(.6))):this.lookTarget=null,o){$s.copy(o).sub(this.root.position);let a=Xc(Math.atan2($s.x,$s.z)-this.yaw.x),l=Math.hypot($s.x,$s.z),c=Math.atan2($s.y-.6*this.size-this.airY,Math.max(.2,l));i=_t(a/.9,-1,1),r=_t(c/.7,-1,1),Math.abs(a)>.85&&!this.path&&!this.busy&&!this.held&&this.faceFollow!==!1&&this.setHeading(this.yaw.x+a*.85)}else this.glance.t-=t,this.glance.t<=0&&(this.glance.t=G(.8,3.2),se(.45)?(this.glance.x=0,this.glance.y=0):(this.glance.x=G(-.8,.8),this.glance.y=G(-.4,.5))),i=this.glance.x,r=this.glance.y,this.speed>.1&&(i*=.3,r=-.15);this.look.x=Ye(this.look.x,i,22,t),this.look.y=Ye(this.look.y,r,22,t),e.lookX=this.look.x,e.lookY=this.look.y}_idle(t,e,n){let i=this.time,r=this.mainAction?.name,o=r==="sleep"?0:1;if(e.sq+=Math.sin(i*2.3+this.seed)*.014*o,e.tz+=$c(i*.35,this.seed)*.025,e.tx+=$c(i*.28,this.seed+7)*.015,this.ctx.musicOn?.()&&!this.held&&r!=="sleep"&&r!=="dance"){let c=this.ctx.beat()*Math.PI,h=.5+this.traits.energy*.8;e.tx+=Math.abs(Math.sin(c))*.035*h,e.y+=Math.abs(Math.sin(c))*.008*h,e.sproutZ+=Math.sin(c*.5)*.15*h}if(n.blush+=this.hover*.35,this.mood==="sleepy"&&(e.droop+=.45,e.sq-=.02),this.quirkT=(this.quirkT??G(4,10))-t,this.quirkT<=0){this.quirkT=G(6,16);let c=Yc([["cat",3],["tongue",1.2+this.traits.energy],["o",1],["smile",1]]);this.quirk={mouth:c,until:i+G(1.2,2.6)}}let a=this.mood==="happy"||this.mood==="content"||this.mood==="curious";if(this.quirk&&i<this.quirk.until&&!r&&this.talkTime<=0&&a&&(n.mouth=this.quirk.mouth,this.quirk.mouth==="o"&&(n.mouthOpen=.12)),!this.fidgetsEnabled)return;!this.path&&!this.held&&!this.falling&&!this.mainAction&&this.speed<.05&&(this.fidgetT-=t,this.fidgetT<=0&&(this.fidgetT=G(3,8),this.fidget()))}fidget(){let t=this.traits,e=[["lookAround",1+t.curiosity*2],["tilt",.6+t.curiosity*1.5],["hop",.3+t.energy*1.2],["scratch",.7],["hum",.6+t.chattiness],["wiggle",.5+t.energy*.8],["yawn",t.sleepiness*1.2],["stretch",.35+t.sleepiness*.5],["hiccup",.18],["sneeze",.12],["tapFoot",.3],["blinkSlow",.4]],n=0;for(let[,r]of e)n+=r;let i=Math.random()*n;for(let[r,o]of e)if(i-=o,i<=0)return this.play(r),r;return null}noseBubble(t){if(!this._bubble){Cd||(Cd=new ke({color:"#d6f1ff",transparent:!0,opacity:.5,roughness:.05,envMapIntensity:1.4,depthWrite:!1}),tm=new Nn(1,20,14));let i=new Lt(tm,Cd);i.userData.noAO=!0,i.renderOrder=3,this.bodyPivot.add(i),this._bubble=i}let e=this._bubble,n=.085*t;e.visible=t>.02,e.scale.setScalar(Math.max(.001,n)),e.position.set(.1,.5,ld(.5)-.03+n*.85)}footPos(t=new A){return t.copy(this.root.position).setY(.03)}headPos(t=new A,e=0){return this.root.updateWorldMatrix(!0,!1),t.set(0,gs.lift+gs.height+.12+e+this.mover.position.y,0),this.root.localToWorld(t)}facePos(t=new A,e=.55,n=.55){return this.root.updateWorldMatrix(!0,!1),t.set(0,n+this.mover.position.y,e),this.root.localToWorld(t)}_applyPose(t,e,n){let i=this.time;this.mover.position.y=this.airY+e.y+e.seat+this.seat,this.mover.rotation.x=e.rx,this.mover.rotation.z=e.rz,this.mover.rotation.y=e.spin,this.sq.target=e.sq;let r=this.sq.update(t),o=_t(1+r,.55,1.5),a=1/Math.sqrt(o);this.squash.scale.set(a*(1+e.sx),o,a*(1+e.sx*.6)),this.leanX.update(t),this.leanZ.update(t),this.bodyPivot.rotation.set(e.tx+this.leanX.x,e.ry,e.tz+this.leanZ.x,"YXZ");for(let b of this.arms){let C=b.userData.side,y=C>0?e.armL:e.armR;b.rotation.set(-y.f,0,C*(.22+y.z),"XYZ")}for(let b=0;b<2;b++){let C=this.feet[b],y=b===0?e.footL:e.footR,E=C.userData.base;C.position.set(E.x+y.x,E.y+y.y,E.z+y.z),C.rotation.x=y.rx||0}this.topPivot.updateWorldMatrix(!0,!1);let l=$s.setFromMatrixPosition(this.topPivot.matrixWorld);this.prevTop||(this.prevTop=l.clone());let c=j0.copy(l).sub(this.prevTop).divideScalar(Math.max(t,1e-4)),h=c.clone().sub(this.prevTopVel).divideScalar(Math.max(t,1e-4));this.prevTopVel.copy(c),this.prevTop.copy(l);let u=Math.sin(this.yaw.x),d=Math.cos(this.yaw.x),f=_t(h.x*u+h.z*d,-60,60),p=_t(h.x*d-h.z*u,-60,60),x=_t(h.y,-80,80),g=.0045;this.sproutX.impulse(f*g*t*60*.6),this.sproutZ.impulse(-p*g*t*60*.6);let m=this.bodyPivot.rotation;this.sproutX.target=-m.x*.55+e.droop*.9+e.sproutX,this.sproutZ.target=-m.z*.55+e.sproutZ,this.sproutX.update(t),this.sproutZ.update(t),this.topPivot.rotation.set(_t(this.sproutX.x,-1.2,1.4),0,_t(this.sproutZ.x,-1.1,1.1));let M=_t(-x*.004,-.5,.5);for(let b of this.leafPivots)b.pivot.rotation.z=b.pivot.userData.baseZ+M+Math.sin(i*2.2+b.side)*.04-e.droop*.5,b.leaf.rotation.x=this.sproutZ.v*.04*b.side;this.flower&&(this.flower.rotation.y+=t*(.2+Math.abs(this.sproutZ.v)*.5));let T=this.material.userData.uniforms;T.uFlash.value=this.flash*.6,T.uGlow.value=this.hover*.35;let v=Math.max(0,this.mover.position.y),w=1-_t(v*.35,0,.55);this.shadow.scale.set(w*(1+e.sx*.5),1,w),this.shadow.material.opacity=1-_t(v*.45,0,.65),this.shadow.rotation.y=-e.spin,n.spin=i*4,this.face.update(n)}dispose(){this.drop(!0),this.face.texture.dispose(),this.material.dispose(),this.limbMaterial.dispose(),this.shadow.material.dispose();for(let t of this.accessoryMaterials)t.dispose()}};function j1(){return{y:0,rx:0,rz:0,tx:0,tz:0,ry:0,spin:0,sq:0,sx:0,seat:0,droop:0,sproutX:0,sproutZ:0,armL:{f:0,z:0},armR:{f:0,z:0},footL:{x:0,y:0,z:0,rx:0},footR:{x:0,y:0,z:0,rx:0},faceLocked:!1,armsOverride:!1}}function Q1(s){s.y=s.rx=s.rz=s.tx=s.tz=s.ry=s.spin=s.sq=s.sx=s.seat=s.droop=0,s.sproutX=s.sproutZ=0,s.armL.f=s.armL.z=s.armR.f=s.armR.z=0,s.footL.x=s.footL.y=s.footL.z=s.footL.rx=0,s.footR.x=s.footR.y=s.footR.z=s.footR.rx=0,s.faceLocked=!1,s.armsOverride=!1}function tb(s){s.traverse(t=>{t.geometry&&!t.geometry.userData?.shared&&t.geometry.dispose?.()})}var em={greet:["hi!!","oh hi","hiii","hey friend","hello hello","good to see you!","*waves*"],greetUser:["oh! hi!!","you're here!","hiii :)","hello, friend!","welcome back!","yay, company!"],chat:["did you see the clouds?","i fixed a thing!","tea later?","i had the best nap","the plant grew a new leaf!!","i have an idea\u2026","what if\u2026 sprinkles?","i think the robot likes me","the mail smells like adventure","my sprout is extra perky today","shh, i\u2019m thinking","have you tried the cookies","i wrote a tiny poem","we should build a rocket","look, a dust bunny!","i love this song"],reply:["hehe","ooh!","really?!","same!!","yesss","mhm mhm","wow","no way","tell me more","aww","heh, true"],work:["almost there\u2026","beep boop","hmm hmm","one more bolt\u2026","it works!!","tiny progress!","clack clack"],idea:["ooh, an idea!","what if\u2026!","eureka!","i got it!"],sleepy:["*yawn*","so sleepy\u2026","nap time\u2026","five more minutes\u2026"],wake:["huh? oh hi","mm\u2026 morning?","*stretch*"],petted:["hehe that tickles","mmmm","more pls","\u2665","so nice\u2026"],poked:["eep!","boop!","hey!","hehe"],grumpy:["hmph!","too many boops!","okay that\u2019s enough"],held:["wheee!","whoa!","put me down! (not yet)","i can see everything!"],dropped:["oof","i\u2019m okay!","again!!"],tripped:["oops","i meant to do that","ow\u2026 i\u2019m fine!"],noted:["ooh, noted!","i\u2019ll pin it up!","on the board it goes!","good one!!","writing it down!"],todo:["added to the list!","got it, boss","on the board!","i\u2019ll remember!"],love:["\u2665\u2665\u2665","aww, love you too!","*blushes*","you\u2019re the best"],dance:["dance party!!","woo!","let\u2019s gooo","\u266A\u266A\u266A"],bedtime:["nighty night","okay\u2026 sleepy time","sweet dreams!"],morning:["good morning!!","rise and shine!","is it morning?"],confused:["hm?","i don\u2019t get it but i love you","okay!","hehe what"],travel:["off to the post room!","be right back","mail time!","brb"],mail:["mail!!","stamp stamp","into the box you go","sending love"],bump:["oops, sorry!","eep!","hehe bonk"]},De=s=>$t(em[s]||em.reply);var _h={energy:["rest"],fun:["fun","music","ideas"],social:["social"],purpose:["work","build","tasks","mail","ideas","care"],calm:["calm","rest","learn"]},bh=class{constructor(t,e,n={}){this.c=t,this.society=e,this.world=e.world;let i=t.traits;this.needs={energy:G(.55,.95),fun:G(.4,.9),social:G(.4,.9),purpose:G(.3,.8),calm:G(.5,.9)},this.likes=n.likes||{},this.decay={energy:.006+i.sleepiness*.006,fun:.008+i.energy*.006,social:.004+i.sociability*.01,purpose:.007,calm:.004},this.tasks=[],this.task=null,this.station=null,this.doing="looking around",this.idleT=G(.5,2.5),this.lastGreet=new Map,this.paused=0,this.attending=0,this.history=[]}get room(){return this.world.rooms[this.c.roomId]}run(t,e){this.cancel(),this.tasks=t.filter(Boolean);let n=this.c;if(n.seat>.01&&this.tasks[0]?.type!=="hop"){let i=this.room.nav.nearestFree(n.position.x+Math.sin(n.heading)*.6,n.position.z+Math.cos(n.heading)*.6);this.tasks.unshift({type:"hop",to:i,seat:0})}e&&(this.doing=e)}push(...t){this.tasks.push(...t.filter(Boolean))}cancel(){let t=this.c;this.task?.cleanup&&this.task.cleanup();for(let e of this.tasks)e.cleanup?.();this.tasks=[],this.task=null,this.releaseStation(),t.stopWalking(),this.loopAction&&(t.stop(this.loopAction,.25),this.loopAction=null)}releaseStation(){let t=this.station;t&&(t.reservedBy===this.c.id&&(t.reservedBy=null),t.onEnd?.(this.c),this.station=null)}interrupt(){this.cancel();let t=this.c;if(t.seat>.01){t.seat=0;let n=this.room.nav.nearestFree(t.position.x,t.position.z);t.position.x=n.x,t.position.z=n.z}t.stopSlot("main",.15),t.drop(!0)}_startTask(t){let e=this.c;switch(t.started=!0,t.elapsed=0,t.type){case"walk":{let n=this.room,i=t.to,r=n.nav.findPath({x:e.position.x,z:e.position.z},i);if(!r){t.done=!0,t.failed=!0;return}t.direct&&(r.length=0,r.push(i)),e.walkPath(r,{speed:t.speed??1,gait:t.gait,face:t.face??null,onArrive:()=>t.done=!0});break}case"goto":{e.walkPath([t.to],{speed:t.speed??.8,onArrive:()=>t.done=!0,face:t.face??null});break}case"face":e.setHeading(t.yaw);break;case"act":{let n=e.play(t.name,{...t.opts||{},onDone:()=>t.done=!0});n?n.dur||(this.loopAction=t.name,t.loop=!0):t.done=!0;break}case"hop":e.play("hopTo",{to:t.to,seat:t.seat??0,onDone:()=>t.done=!0});break;case"say":e.say(t.text);break;case"call":t.fn?.(e,this),t.done=!0;break;case"hold":e.hold(this.world.makeItem(t.item,e),t.mode||"front"),t.done=!0;break;case"drop":e.drop(!0),t.done=!0;break;case"reserve":this.station=t.station,t.station.reservedBy=e.id,t.station.onStart?.(e),t.done=!0;break;case"release":this.releaseStation(),t.done=!0;break;default:t.done=!0}}_updateTask(t,e){let n=this.c;switch(t.elapsed+=e,t.type){case"wait":t.elapsed>=t.t&&(t.done=!0),t.look&&n.lookAt(t.look,.5);break;case"face":t.elapsed>(t.t??.35)&&(t.done=!0);break;case"say":n.talkTime<=0&&t.elapsed>.3&&(t.done=!0);break;case"act":if(t.loop){if(t.every?.(n,t.elapsed,e,this),t.elapsed>.6&&!n.isPlaying(t.name)){this.loopAction=null,t.done=!0;break}(t.elapsed>=t.t||t.until?.(n,this))&&(n.stop(t.name,.3),this.loopAction=null,t.done=!0)}else t.elapsed>12&&(t.done=!0);break;case"walk":case"goto":t.elapsed>25&&(n.stopWalking(),t.done=!0,t.failed=!0);break}}update(t){let e=this.c,n=this.world,i=n.daylight.isNight,r=this.needs;for(let o in r)r[o]=_t(r[o]-this.decay[o]*t*(o==="energy"&&i?2.4:1));if(this.station)for(let o of this.station.tags)for(let a in _h)_h[a].includes(o)&&(r[a]=_t(r[a]+t*(a==="energy"?.03:.04)));if(e.mainAction?.name==="sleep"&&(r.energy=_t(r.energy+t*.035)),this._updateMood(),!(e.held||e.falling)){if(this.paused>0){this.paused-=t;return}if(this.attending>0){this.attending-=t;let o=n.engine.camera.position;e.lookAt(o,.4),!e.mainAction&&!e.walking&&e.faceToward(o);return}if(this.task){let o=this.task;if(o.started||this._startTask(o),this.task!==o||(o.done||this._updateTask(o,t),this.task!==o))return;if(o.done){if(o.failed&&o.abortOnFail!==!1&&(o.type==="walk"||o.type==="goto")){for(let a of this.tasks)a.cleanup?.();this.tasks=[],this.releaseStation()}this.task=null}return}if(this.tasks.length){this.task=this.tasks.shift();return}e.mainAction||e.walking||(this.doing="hanging out",this.idleT-=t,!(this.idleT>0)&&(this.idleT=G(.6,2.2),this.decide()))}}_updateMood(){let t=this.c;if(t.moodHold>0)return;let e=this.needs,n="happy",i=t.mainAction?.name;i==="type"||i==="tinker"||i==="stamp"||i==="write"?n="focused":e.energy<.22?n="sleepy":e.fun>.75&&e.social>.6?n="happy":e.social<.2?n="curious":e.calm>.8&&(n="content"),t.mood!==n&&(t.mood=n)}decide(){let t=this.c,e=this.world,n=this.room,i=e.daylight.isNight,r=this.needs,o=[];for(let h of n.stations){if(h.reservedBy&&h.reservedBy!==t.id||h.activity==="door"||h.activity==="dance"&&!(e.sound.musicOn&&e.sound.ctx))continue;let u=.15;for(let f of h.tags){for(let p in _h)_h[p].includes(f)&&(u+=(1-r[p])*1.2);u+=(this.likes[f]||0)*.6}h.activity==="sleep"&&(u+=i?2.5:r.energy<.3?1.2:-.6),i&&h.tags.includes("work")&&(u-=.6),h.activity==="dance"&&(u+=performance.now()<this.society.partyUntil?1.6+t.traits.energy:-.4+t.traits.energy*.5),h.activity==="pin"&&this.society.pendingNotes.length&&(u+=3),h.activity==="write"&&h.id==="todo"&&this.society.pendingTodos.length&&(u+=3),h.activity==="post"&&this.society.pendingLetters.length&&(u+=3),h.activity==="tea"&&(u+=this.society.teaParty(n)*.3-.45);let d=Math.hypot(h.pos.x-t.position.x,h.pos.z-t.position.z);u-=d*.04,this.history.includes(h.id)&&(u-=.7),this.history.includes(h.activity)&&(u-=.45),u*=G(.7,1.3),o.push([{kind:"station",s:h},Math.max(.01,u)])}o.push([{kind:"wander"},.5+t.traits.curiosity*.6+(i?-.3:0)]);let a=this.society.inRoom(t.roomId).filter(h=>h!==t&&!h.held&&h.brain&&!h.brain.station&&!h.brain.chatting);a.length&&!i&&o.push([{kind:"chat",with:$t(a)},(1-r.social)*2+t.traits.sociability*.6]),a.length&&!i&&t.traits.energy>.55&&o.push([{kind:"play",with:$t(a)},t.traits.energy*.5+(1-r.fun)*.6]);let l=n.stations.find(h=>h.activity==="door");if(l&&!l.reservedBy){let h=.18+t.traits.curiosity*.25,u=this.society.inRoom(l.door.to).length;this.society.inRoom(t.roomId).length>u+2&&(h+=.4),t.roomId==="post"&&i&&(h+=1.5),this.society.pendingLetters.length&&t.roomId==="nook"&&(h+=1.5),o.push([{kind:"travel",s:l},h])}let c=Yc(o);c&&(c.kind==="station"?this.doStation(c.s):c.kind==="wander"?this.wander():c.kind==="chat"?this.society.startChat(t,c.with):c.kind==="play"?this.society.startPlay(t,c.with):c.kind==="travel"&&this.travel(c.s))}remember(t,e){for(this.history.push(t),e&&this.history.push(e);this.history.length>6;)this.history.shift()}wander(){let t=this.c,i=[{type:"walk",to:this.room.randomFreePoint(Math.random,se(.6)?t.position:null,3),gait:se(.2)&&t.traits.energy>.6?"hop":void 0}];se(.6)&&i.push({type:"act",name:$t(["lookAround","tilt","hum","wiggle","scratch","tapFoot","stretch"])}),se(.3)&&i.push({type:"wait",t:G(1,3)}),this.run(i,"wandering around")}doStation(t,e={}){let n=this.c,i=this.world;this.remember(t.id,t.activity);let r=[],o=(t.seat||0)>.05,a=t.approach;!a&&o&&(a=this.room.nav.nearestFree(t.pos.x+Math.sin(t.face)*.62,t.pos.z+Math.cos(t.face)*.62)),a=a||t.pos,r.push({type:"reserve",station:t}),r.push({type:"walk",to:a,face:o?null:t.face}),o&&r.push({type:"hop",to:t.pos,seat:t.seat}),r.push({type:"face",yaw:t.face,t:.3});let l=e.duration,c=i.daylight.isNight,h=this.society,u=null;switch(t.activity){case"sleep":{r.push({type:"call",fn:()=>se(.4)&&n.say(De("sleepy"))}),r.push({type:"act",name:"sit",t:.6}),r.push({type:"act",name:"sleep",t:l??(c?G(60,140):G(20,45)),until:()=>!i.daylight.isNight&&this.needs.energy>.97&&Math.random()<.01}),r.push({type:"act",name:"wake"});break}case"read":t.seat&&r.push({type:"act",name:"sit",t:.4}),r.push({type:"act",name:"read",t:l??G(12,26)});break;case"browse":r.push({type:"act",name:"reach"}),r.push({type:"act",name:"read",t:l??G(6,12)});break;case"gaze":r.push({type:"act",name:"gaze",t:l??G(7,14)});break;case"water":r.push({type:"act",name:"water",t:l??G(3.5,5)}),r.push({type:"call",fn:()=>h.wigglePlantNear(n)}),r.push({type:"act",name:"admire"});break;case"pin":{let d=h.pendingNotes.shift();d?(u={list:h.pendingNotes,item:d},r.splice(1,0,{type:"hold",item:"note",mode:"overhead"}),r.push({type:"drop"}),r.push({type:"act",name:"reach"}),r.push({type:"call",fn:()=>(u.done=!0,h.pinNote(d,n))}),r.push({type:"act",name:"admire"}),r.push({type:"call",fn:()=>n.say(De("noted"))})):(r.push({type:"act",name:"write",t:l??G(4,7)}),r.push({type:"act",name:"think"}));break}case"write":{let d=t.id==="todo"?h.pendingTodos.shift():null;d&&(u={list:h.pendingTodos,item:d}),r.push({type:"act",name:"write",t:l??(d?2.5:G(5,9))}),d&&(r.push({type:"call",fn:()=>(u.done=!0,h.writeTodo(d,n))}),r.push({type:"act",name:"admire"}));break}case"think":r.push({type:"act",name:"sit",t:.4}),r.push({type:"act",name:"think"}),r.push({type:"act",name:"sit",t:G(2,5)}),se(.6)&&r.push({type:"act",name:"think"}),r.push({type:"call",fn:()=>se(.5)&&h.haveIdea(n)});break;case"paint":r.push({type:"act",name:"write",t:l??G(8,14),every:(d,f,p)=>h.paintStroke(this.room,p)}),r.push({type:"act",name:"admire"});break;case"tea":r.push({type:"act",name:"sit",t:l??G(14,26),every:(d,f,p)=>h.teaTalk(d,p)});break;case"dance":r.push({type:"act",name:"dance",t:l??G(14,30),until:()=>!i.sound.musicOn});break;case"tinker":r.push({type:"act",name:"tinker",t:l??G(8,15),every:(d,f,p)=>se(p*.08)&&d.say(De("work"))}),se(.3)&&r.push({type:"act",name:"cheer"});break;case"type":r.push({type:"act",name:"sit",t:.3}),r.push({type:"act",name:"type",t:l??G(10,22)});break;case"stamp":r.push({type:"act",name:"stamp",t:l??G(6,11)});break;case"reach":r.splice(1,0,{type:"hold",item:"letter",mode:"front"}),r.push({type:"drop"}),r.push({type:"act",name:"reach"}),r.push({type:"act",name:"admire"});break;case"post":{let d=h.pendingLetters.shift();d&&(u={list:h.pendingLetters,item:d}),r.splice(1,0,{type:"hold",item:"letter",mode:"overhead"}),r.push({type:"drop"}),r.push({type:"act",name:"reach"}),r.push({type:"call",fn:()=>(u&&(u.done=!0),h.postLetter(d,n))}),r.push({type:"act",name:"cheer"});break}case"admire":r.push({type:"act",name:"admire"}),r.push({type:"act",name:"gaze",t:G(4,8)});break;case"sit":r.push({type:"act",name:"sit",t:l??G(8,16)});break;default:r.push({type:"wait",t:3})}if(r.push({type:"release"}),o&&r.push({type:"hop",to:a,seat:0}),u){let d=()=>{u.done||u.requeued||(u.requeued=!0,u.list.unshift(u.item))};for(let f of r)f.cleanup=d}this.run(r,t.label)}travel(t){let e=this.c;this.remember("door");let n=t.door,i=n.wall,r=[{type:"reserve",station:t},{type:"walk",to:t.pos,face:t.face},{type:"call",fn:()=>se(.5)&&e.say(De("travel"))},{type:"call",fn:()=>n.target=1},{type:"wait",t:.45},{type:"release"},{type:"goto",to:i.toWorld(n.opening.x,0,-.55),speed:.9,abortOnFail:!1},{type:"call",fn:()=>this.society.moveToRoom(e,n.to)}];this.run(r,"heading out the door")}arrive(t){let e=this.c,n=t.doors[0],i=t.stations.find(a=>a.activity==="door"),r=n.wall.toWorld(n.opening.x,0,-.5);e.position.set(r.x,0,r.z),e.setHeading(Math.atan2(i.pos.x-r.x,i.pos.z-r.z),!0),n.target=1;let o=t.nav.nearestFree(i.pos.x+(i.pos.x-r.x)*.6,i.pos.z+(i.pos.z-r.z)*.6);this.run([{type:"goto",to:o,speed:.9},{type:"call",fn:()=>n.target=0},{type:"act",name:se(.5)?"lookAround":"wave"}],"just arrived")}};var eb=["#e8746a","#7aa6dc","#f2c14e","#8dc68a","#c39be0","#f29bb5"],nb=["#ffe68a","#ffc2d6","#bfe8ff","#c9f2c0","#ffd6a8"];function Pd(s,t={}){switch(s){case"book":return nm(t.color);case"wateringCan":return ib();case"mug":return sb();case"note":return rb(t.color);case"letter":return ob();case"parcel":return ab();default:return nm()}}function nm(s=$t(eb)){let t=Oe({}),e=L(s,{roughness:.6}),n=L(We.paper,{roughness:.9}),i=Oe({rot:[0,0,.18]},I(et(.2,.02,.27,.008),e,{pos:[-.1,0,0]}),I(et(.185,.03,.25,.008),n,{pos:[-.1,.018,0]})),r=Oe({rot:[0,0,-.18]},I(et(.2,.02,.27,.008),e,{pos:[.1,0,0]}),I(et(.185,.03,.25,.008),n,{pos:[.1,.018,0]})),o=new ht,a=I(et(.18,.006,.24,.002),n,{pos:[.09,0,0]});o.add(a),o.position.y=.035,o.visible=!1,t.add(i,r,o),t.rotation.x=-.9,t.position.y=.02;let l=-1;return t.userData.flip=()=>{l=0,o.visible=!0},t.onBeforeRender=()=>{},t.userData.update=c=>{l<0||(l+=c*2.2,o.rotation.z=Math.PI*Math.min(1,l)*1,l>=1&&(l=-1,o.visible=!1))},io(t)}function ib(){let s=L("#7cc4c9",{roughness:.4,metalness:.1}),t=Oe({},I(Ve(.12,.17,.04),s,{pos:[0,0,0]}),I(_e(.022,.03,.26),s,{pos:[0,.07,.15],rot:[.95,0,0]}),I(_e(.045,.03,.03),s,{pos:[0,.16,.26],rot:[.95,0,0]}),I(en(.075,.016,8,20,Math.PI),s,{pos:[0,.09,-.02],rot:[0,Math.PI/2,0]}));return t.position.set(0,-.02,.02),io(t)}function sb(){let s=L("#ffd0b5",{roughness:.5});return io(Oe({},I(Ve(.06,.11,.015),s),I(en(.035,.012,8,16),s,{pos:[.065,0,0],rot:[0,0,0]}),I(_e(.05,.05,.01),L("#7b4a33",{roughness:.3}),{pos:[0,.05,0]})))}function rb(s=$t(nb)){let t=Oe({},I(et(.22,.22,.012,.004),L(s,{roughness:.85})));return t.rotation.x=-.2,io(t)}function ob(){let s=L("#fff3e0",{roughness:.85}),t=Oe({},I(et(.28,.18,.02,.006),s),I(ie(.025,10,8),L("#e6455e",{roughness:.5}),{pos:[0,0,.012],scale:[1,1,.3]}));return t.rotation.x=-.25,io(t)}function ab(){let s=Oe({},I(et(.3,.24,.26,.03),L("#d9a876",{roughness:.85})),I(et(.31,.04,.27,.01),L("#ff8fa8",{roughness:.6}),{pos:[0,0,0]}),I(et(.04,.25,.27,.01),L("#ff8fa8",{roughness:.6}),{pos:[0,0,0]}));return s.position.y=.1,io(s)}function io(s){let t=new ht;return t.add(s),t.userData.update=s.userData.update,t.userData.flip=s.userData.flip,t}var lb=[{name:"Mochi",color:"#ffb18f",accessory:"sprout",seed:7,traits:{energy:.6,curiosity:.85,sociability:.8,sleepiness:.35,clumsiness:.45,chattiness:.75},faceShape:{eyeDX:.156,eyeSize:1.04,eyeY:.56},likes:{ideas:1,learn:.6,social:.4},bio:"Keeps the idea board tidy. Mostly."},{name:"Pip",color:"#93dcbc",accessory:"antenna",seed:21,traits:{energy:.95,curiosity:.7,sociability:.6,sleepiness:.15,clumsiness:.85,chattiness:.6},likes:{build:1,fun:.8,work:.5},bio:"Builds tiny robots. Trips over them too."},{name:"Nori",color:"#c4b0f2",accessory:"leaf",seed:33,traits:{energy:.25,curiosity:.5,sociability:.45,sleepiness:.9,clumsiness:.2,chattiness:.3},likes:{rest:1,calm:.9,learn:.6},bio:"Professional napper. Excellent at reading."},{name:"Biscuit",color:"#ffd977",accessory:"flower",seed:48,traits:{energy:.7,curiosity:.6,sociability:.95,sleepiness:.4,clumsiness:.4,chattiness:.95},likes:{social:1,music:.8,care:.5},bio:"Hosts tea. Knows everyone\u2019s business."},{name:"Tofu",color:"#95c8f4",accessory:"sprout",seed:55,traits:{energy:.55,curiosity:.55,sociability:.45,sleepiness:.45,clumsiness:.3,chattiness:.35},likes:{work:1,tasks:.9,mail:.8},bio:"Runs the post room with great seriousness."},{name:"Pebble",color:"#ffa3bf",accessory:"leaf",seed:69,traits:{energy:.45,curiosity:.75,sociability:.55,sleepiness:.55,clumsiness:.55,chattiness:.5},size:.9,likes:{care:1,calm:.7,fun:.5},bio:"Talks to the plants. The plants listen."}];function im(s){let t=s.brain;t.task?.type==="wait"&&t.task.t===999&&(t.task.done=!0),t.tasks=t.tasks.filter(e=>!(e.type==="wait"&&e.t===999))}var cb=["Sprig","Dumpling","Waffle","Clover","Miso","Peaches","Juniper","Noodle","Fig","Momo","Bean","Puddle","Toast","Bun","Kiwi","Maple"],Mh=class{constructor(t){this.world=t,this.critters=[],this.pendingNotes=[],this.pendingTodos=[],this.pendingLetters=[],this.chats=[],this.games=[],this.partyUntil=0,this._greetT=0,this.ctx={fx:(e,n,i)=>this._fx(e,n,i),sfx:(e,n)=>Ft.play(e,n),camera:t.engine.camera,beat:()=>Ft.beat(),musicOn:()=>Ft.musicOn&&!!Ft.ctx,makeItem:e=>Pd(e),onSay:(e,n,i)=>qt.emit("critter:say",e,n,i)},t.makeItem=e=>Pd(e)}_fx(t,e,n){let i=n?.critter;i&&i.roomId!==this.world.roomId||this._fxRoomGuard&&this._fxRoomGuard!==this.world.roomId||this.world.fx.spawn(t,e,n)}load(t){let e=!(Array.isArray(t)&&t.length),n=e?lb.map((r,o)=>({...r,roomId:o===4?"post":"nook"})):t;for(let r of n)this.spawn(r,{silent:!0});let i=this.world;if(e){let r=i.store.data,o=Date.now();r.notes.length||[["more naps (scientifically)","Nori","#c9f2c0"],["a robot that waters the plants","Pip","#bfe8ff"],["tea party at 4?","Biscuit","#ffe68a"],["what if the mailbox could sing","Mochi","#ffc2d6"]].forEach(([a,l,c],h)=>r.notes.push({id:Bs("note"),text:a,by:l,color:c,at:o-(4-h)*6e4})),r.todos.length||r.todos.push({id:Bs("todo"),text:"say hi to the sproutlings",done:!1,at:o}),r.letters.length||["dear world, hello! love, the crew","thank you, sun, for the naps","to the plant shop: more pots pls"].forEach((a,l)=>r.letters.push({id:Bs("letter"),text:a,at:o-(3-l)*864e5}))}for(let r of i.store.data.notes)this._addNoteMesh(r,!1);this._redrawTodos();for(let r of i.store.data.letters)this._addLetterCard(r,!1)}serialize(){return this.critters.map(t=>({id:t.id,name:t.name,color:t.color,accessory:t.accessory,seed:t.seed,traits:t.traits,size:t.size,faceShape:t.face.shape,likes:t.brain.likes,bio:t.bio,roomId:t.roomId,x:t.position.x,z:t.position.z}))}spawn(t={},{silent:e=!1,viaDoor:n=!1}={}){let i=this.critters.length,r=new Set(this.critters.map(f=>f.name)),o=t.name||cb.find(f=>!r.has(f))||`Sprout ${i+1}`,a=new Set(this.critters.map(f=>f.color)),l=t.color||(Aa.find(f=>!a.has(f.color))||$t(Aa)).color,c=new yh({id:t.id,name:o,color:l,accessory:t.accessory||$t(vh),seed:t.seed??Math.floor(Math.random()*1e6),traits:t.traits,faceShape:t.faceShape,size:t.size,ctx:this.ctx});c.bio=t.bio||$t(["New here. Very excited.","Likes snacks and long naps.","Has opinions about tea.","Collects shiny pebbles."]),c.brain=new bh(c,this,{likes:t.likes||{}});let h=t.roomId&&this.world.rooms[t.roomId]?t.roomId:this.world.roomId||"nook";c.roomId=h;let u=this.world.rooms[h];u.group.add(c.root);let d=t.x!==void 0?u.nav.nearestFree(t.x,t.z):u.randomFreePoint();return c.position.set(d.x,0,d.z),c.setHeading(G(-1,1),!0),this.critters.push(c),n?c.brain.arrive(u):e||(c.airY=2.8,c.falling=!0,Ft.play("spawn"),this._fx("sparkle",c.position.clone().setY(1.2),{count:8})),qt.emit("critter:spawned",c),c}remove(t){t.brain.cancel(),t.root.parent?.remove(t.root),t.dispose(),this.critters=this.critters.filter(e=>e!==t),qt.emit("critter:removed",t)}inRoom(t){return this.critters.filter(e=>e.roomId===t)}find(t){if(!t)return null;let e=String(t).toLowerCase();return this.critters.find(n=>n.id===t||n.name.toLowerCase()===e)||null}moveToRoom(t,e){let n=this.world.rooms[e];if(!n)return;let r=this.world.rooms[t.roomId].doors.find(o=>o.to===e);r&&setTimeout(()=>r.target=0,400),t.roomId=e,n.group.add(t.root),t.brain.arrive(n),qt.emit("critter:moved",t,e)}onRoomShown(t){for(let e of this.critters)e.root.visible=!0}catchUp(t){let e=this.world.daylight.isNight;for(let n of this.critters){let i=n.brain;for(let r in i.needs){let o=i.decay[r]*Math.min(t,14400)*.25;i.needs[r]=Math.max(.15,Math.min(1,i.needs[r]-o+(Math.random()-.3)*.4))}if(t>600&&!n.held){if(i.cancel(),n.seat=0,n.stopSlot("main",0),Math.random()<.25){let o=Object.keys(this.world.rooms).find(a=>a!==n.roomId);n.roomId=o,this.world.rooms[o].group.add(n.root)}let r=this.world.rooms[n.roomId].randomFreePoint();n.position.set(r.x,0,r.z),e&&(i.needs.energy=Math.min(i.needs.energy,.2))}}this.world.hud?.renderRoster()}onPicked(t){t.brain.interrupt(),this.leaveSocial(t),se(.5)&&setTimeout(()=>t.held&&t.say($t(["wheee!","whoa!","up we go!"])),300)}onDropped(t){let n=this.world.rooms[t.roomId].nav.nearestFree(t.position.x,t.position.z);t.position.x=n.x,t.position.z=n.z,t.brain.paused=1.6,se(.35)&&setTimeout(()=>t.say(De("dropped")),900)}update(t){let e=this.world.roomId;for(let n of this.critters)n.brain.update(t),n.update(t),n.walking&&!n.held&&n.speed>.6&&n.roomId===e&&Math.random()<t*.006*n.traits.clumsiness&&(n.play("trip"),setTimeout(()=>se(.6)&&n.say(De("tripped")),2600));this._separate(t),this._greetings(t),this._updateChats(t),this._updateGames(t)}_separate(t){var n;let e={};for(let i of this.critters)(e[n=i.roomId]||(e[n]=[])).push(i);for(let i of Object.values(e))for(let r=0;r<i.length;r++)for(let o=r+1;o<i.length;o++){let a=i[r],l=i[o];if(a.held||l.held)continue;let c=l.position.x-a.position.x,h=l.position.z-a.position.z,u=Math.hypot(c,h),d=.46*(a.size+l.size);if(u>1e-4&&u<d){let f=(d-u)*Math.min(1,t*8),p=a.seat>.01||a.busy,x=l.seat>.01||l.busy,g=p?0:x?1:.5,m=x?0:p?1:.5;a.position.x-=c/u*f*g,a.position.z-=h/u*f*g,l.position.x+=c/u*f*m,l.position.z+=h/u*f*m,a.walking&&l.walking&&u<d*.75&&!a._bonkCool&&!l._bonkCool&&se(.35)&&(a._bonkCool=l._bonkCool=!0,setTimeout(()=>a._bonkCool=l._bonkCool=!1,2e4),a.play("bonk",{from:l.position}),l.play("bonk",{from:a.position}),this._fx("sparkle",a.position.clone().lerp(l.position,.5).setY(.9),{critter:a,count:3}),setTimeout(()=>a.say(De("bump")),500))}}}_greetings(t){if(this._greetT-=t,this._greetT>0)return;this._greetT=.5;let e=performance.now()/1e3;for(let n of this.critters)if(!(n.held||n.busy))for(let i of this.critters){if(n===i||n.roomId!==i.roomId)continue;let r=n.position.distanceTo(i.position);if(r>1.8||r<.6)continue;let o=n.brain.lastGreet.get(i.id)||-999;e-o<90||(n.brain.lastGreet.set(i.id,e),i.brain.lastGreet.set(n.id,e),se(.5)&&(n.lookAt(i,2),i.lookAt(n,2),n.play("wave",{target:i,sound:!1}),se(.4)&&n.say(De("greet"))))}}startChat(t,e){if(e.brain.chatting||t.brain.chatting)return;let n=this.world.rooms[t.roomId],i={x:(t.position.x+e.position.x)/2,z:(t.position.z+e.position.z)/2},r=new Y(e.position.x-t.position.x,e.position.z-t.position.z);r.lengthSq()<.01&&r.set(1,0),r.normalize();let o=n.nav.nearestFree(i.x-r.x*.5,i.z-r.y*.5),a=n.nav.nearestFree(i.x+r.x*.5,i.z+r.y*.5),l={a:t,b:e,t:0,turns:Math.floor(G(3,6)),speaker:0,next:.6,ended:!1,ready:0};t.brain.chatting=l,e.brain.chatting=l;let c=()=>l.ready++;t.brain.run([{type:"walk",to:o},{type:"call",fn:c},{type:"wait",t:999}],"having a chat"),e.brain.run([{type:"walk",to:a},{type:"call",fn:c},{type:"wait",t:999}],"having a chat"),this.chats.push(l)}leaveSocial(t){for(let e of this.chats)(e.a===t||e.b===t)&&this._endChat(e);for(let e of this.games)(e.a===t||e.b===t)&&(e.ended=!0)}_endChat(t,e=null){if(!t.ended){t.ended=!0;for(let n of[t.a,t.b])n.brain.chatting=null,n.stop("talk"),im(n);e&&(t.a.play(e,{partner:t.b}),t.b.play(e,{partner:t.a})),t.a.brain.needs.social=_t(t.a.brain.needs.social+.4),t.b.brain.needs.social=_t(t.b.brain.needs.social+.4)}}_updateChats(t){for(let e of this.chats){if(e.ended)continue;e.t+=t;let{a:n,b:i}=e;if(e.t>30||n.held||i.held||n.roomId!==i.roomId){this._endChat(e);continue}if(e.ready<2||(e.started||(e.started=!0,n.faceToward(i.position),i.faceToward(n.position),n.play("talk"),i.play("talk")),n.lookAt(i,1),i.lookAt(n,1),e.next-=t,e.next>0))continue;let r=e.speaker%2===0?n:i,o=r===n?i:n;if(e.speaker>=e.turns*2){this._endChat(e,$t(["hug","giggle","nod","hop","wave"]));continue}let a=e.speaker===0?De("chat"):e.speaker%2?De("reply"):De("chat");r.say(a),se(.3)&&o.play($t(["nod","giggle","tilt"])),e.speaker++,e.next=Math.max(1.4,a.length*.07+.7)}this.chats=this.chats.filter(e=>!e.ended)}startPlay(t,e){if(t.brain.chatting||e.brain.chatting)return;let n={a:t,b:e,t:0,it:t,runner:e,ended:!1,legs:0};t.brain.run([{type:"wait",t:999}],"playing tag"),e.brain.run([{type:"wait",t:999}],"playing tag"),t.brain.chatting=e.brain.chatting=n,e.play("surprised"),t.say($t(["tag! you're it!","catch me!","bet you can\u2019t catch me"])),n.it=e,n.runner=t,this.games.push(n)}_updateGames(t){for(let e of this.games){if(e.ended)continue;e.t+=t;let{it:n,runner:i}=e,r=this.world.rooms[n.roomId];if((e.t>24||n.held||i.held||n.roomId!==i.roomId)&&(e.ended=!0),e.ended){for(let o of[e.a,e.b])o.brain.chatting=null,o.stopWalking(),im(o),o.brain.needs.fun=_t(o.brain.needs.fun+.5);e.a.play("giggle"),e.b.play("giggle");continue}if(!i.walking&&!i.busy){let o=r.randomFreePoint(),a=r.nav.findPath(i.position,o);a&&i.walkPath(a,{gait:"run",speed:.85})}if(e.repath=(e.repath||0)-t,e.repath<=0&&!n.busy){e.repath=.4;let o=r.nav.findPath(n.position,i.position);o&&n.walkPath(o,{gait:"run",speed:.95})}n.position.distanceTo(i.position)<.85&&!i.busy&&(e.legs++,i.play("surprised"),n.play("hop"),n.say($t(["tag!","gotcha!","hehe!"])),n.stopWalking(),e.it=i,e.runner=n,e.legs>3&&(e.ended=!0))}this.games=this.games.filter(e=>!e.ended)}teaParty(t){return t.stations.filter(e=>e.activity==="tea"&&e.reservedBy).length}teaTalk(t,e){let n=this.critters.filter(r=>r!==t&&r.roomId===t.roomId&&r.brain.station?.activity==="tea");if(!n.length)return;let i=n[0];t.lookAt(i,.5),Math.random()<e*.12&&(t.say(se(.5)?De("chat"):De("reply")),se(.5)&&setTimeout(()=>i.play($t(["nod","giggle"])),900)),t.brain.needs.social=_t(t.brain.needs.social+e*.03)}haveIdea(t){let n=$t(["a robot that waters plants","pancake tuesdays","a slide from the bed to the kitchen","tiny hats for everyone","a map of every cozy spot","a song about clouds","paint the mailbox with stars","a library for snacks"]);t.say(`${$t(["ooh! ","what if\u2026 ","idea: ",""])}${n}`),se(.35)&&this.addNote(n,{by:t.name,fromCritter:!0})}wigglePlantNear(t){let e=this.world.rooms[t.roomId],n=null,i=2.5;e.props.traverse(r=>{if(r.userData.foliage){let o=r.getWorldPosition(new A).distanceTo(t.position);o<i&&(i=o,n=r)}}),n&&(n.userData.wiggle=1,this._fx("sparkle",n.getWorldPosition(new A).add(new A(0,.8,0)),{critter:t,count:4}),t.roomId===this.world.roomId&&Ft.play("plant"))}paintStroke(t,e){if(Math.random()>e*2)return;let n=t.props.children.find(h=>h.userData.canvas);if(!n)return;let r=n.userData.canvas.getContext("2d");r.strokeStyle=$t(["#ffb59a","#9fdcc0","#c7b6ee","#ffd36b","#95c8f4","#ff9db5"]),r.globalAlpha=.8,r.lineWidth=G(4,10),r.lineCap="round",r.beginPath();let o=G(20,236),a=G(20,180);r.moveTo(o,a),r.quadraticCurveTo(o+G(-40,40),a+G(-40,40),o+G(-60,60),a+G(-30,30)),r.stroke(),r.globalAlpha=1;let l=n.userData.canvasMesh.material,c=Array.isArray(l)?l[4].map:l.map;c&&(c.needsUpdate=!0)}addNote(t,e={}){let n={id:Bs("note"),text:String(t).slice(0,140),color:$t(["#ffe68a","#ffc2d6","#bfe8ff","#c9f2c0","#ffd6a8"]),at:Date.now(),...e};this.pendingNotes.push(n),qt.emit("note:queued",n);let r=this.world.rooms.nook.stations.find(o=>o.activity==="pin");if(r&&!r.reservedBy){let o=this.pickHelper("nook",e.by);o&&o.brain.doStation(r)}return n}pickHelper(t,e){let n=e?this.find(e):null;if(n&&n.roomId===t&&!n.held)return n;let i=this.inRoom(t).filter(r=>!r.held&&r.mainAction?.name!=="sleep"&&!r.brain.chatting);return i.length?i.sort((r,o)=>(r.brain.station?1:0)-(o.brain.station?1:0))[0]:null}pinNote(t,e){let n=this.world.store.data.notes;n.push(t),n.length>15&&n.shift(),this._addNoteMesh(t,!0),qt.emit("note:pinned",t,e)}_addNoteMesh(t,e){let n=this.world.rooms.nook.ideaBoard,{notes:i,slots:r}=n.userData,o=r.find(l=>!l.used);if(!o){let l=r.reduce((c,h)=>c.used.at<h.used.at?c:h);i.remove(l.mesh),o=l}let a=f0(t.text,t.color);if(a.position.set(o.x,o.y,.01),o.used=t,o.mesh=a,i.add(a),e){a.scale.setScalar(.01);let l=0,c=()=>{l+=1/60;let h=Math.min(1,l/.4);a.scale.setScalar(Math.max(.01,1+Math.sin(h*Math.PI)*.25-(1-h)*.9)),h<1?requestAnimationFrame(c):a.scale.setScalar(1)};c(),this.world.roomId==="nook"&&(Ft.play("pin"),this.world.fx.spawn("sparkle",a.getWorldPosition(new A),{count:5}))}}removeNote(t){let e=this.world.rooms.nook.ideaBoard,{notes:n,slots:i}=e.userData;for(let a of i)a.used?.id===t&&(n.remove(a.mesh),a.used=null,a.mesh=null);let r=this.world.store.data.notes,o=r.findIndex(a=>a.id===t);o>=0&&r.splice(o,1)}addTodo(t,e={}){let n={id:Bs("todo"),text:String(t).slice(0,80),done:!1,at:Date.now(),...e};this.pendingTodos.push(n);let r=this.world.rooms.nook.stations.find(o=>o.id==="todo");if(r&&!r.reservedBy){let o=this.pickHelper("nook",e.by);o&&o.brain.doStation(r)}return n}writeTodo(t,e){this.world.store.data.todos.push(t),this._redrawTodos(),qt.emit("todo:added",t,e),this.world.roomId==="nook"&&Ft.play("scribble"),e&&e.say(De("todo"))}toggleTodo(t){let e=this.world.store.data.todos.find(n=>n.id===t);e&&(e.done=!e.done,this._redrawTodos(),e.done&&(($t(this.inRoom(this.world.roomId))||null)?.play("cheer"),qt.emit("todo:done",e)))}removeTodo(t){let e=this.world.store.data.todos,n=e.findIndex(i=>i.id===t);n>=0&&e.splice(n,1),this._redrawTodos()}_redrawTodos(){this.world.rooms.nook.chalkboard?.userData.draw(this.world.store.data.todos.filter(e=>!e.archived))}sendLetter(t,e={}){let n={id:Bs("letter"),text:String(t).slice(0,120),at:Date.now(),...e};this.pendingLetters.push(n);let r=this.world.rooms.post.stations.find(a=>a.activity==="post"),o=this.pickHelper("post")||null;return o&&r&&!r.reservedBy&&o.brain.doStation(r),n}postLetter(t,e){if(!t)return;let n=this.world.store.data.letters;n.push(t),n.length>12&&n.shift(),this._addLetterCard(t,!0),e.roomId===this.world.roomId&&Ft.play("mail"),qt.emit("letter:sent",t,e)}_addLetterCard(t,e){let n=this.world.rooms.post.letterWall,{pinned:i,w:r}=n.userData;i.children.length>=15&&i.remove(i.children[0]);let a=i.children.length,l=X0(t.text,$t(["#fff3e0","#ffe4ec","#e6f3ff","#eafbe6"])),c=a%5,h=Math.floor(a/5);l.position.set(-r/2+.3+c*((r-.6)/4),.43-h*.45-.15,.1),i.add(l),e&&l.scale.setScalar(1.15)}musicStarted(){this.partyUntil=performance.now()+9e4;let t=this.world.room,e=this.inRoom(t.id).filter(i=>!i.held&&i.mainAction?.name!=="sleep").sort(()=>Math.random()-.5).slice(0,3),n=t.stations.filter(i=>i.activity==="dance"&&!i.reservedBy);e.forEach((i,r)=>{n[r]&&se(.75)?(i.say(De("dance")),i.brain.doStation(n[r],{duration:G(15,30)})):i.play("dance",{duration:0})&&setTimeout(()=>i.stop("dance"),6e3)})}onLampToggled(){}};function Sh(s,t,e=null){let n={text:t,target:e?e.name:null,room:s.roomId,handled:!1,preventDefault(){this.handled=!0}};qt.emit("user:message",n),!n.handled&&ub(s,t,e)}function hb(s,t,e){let n=t.toLowerCase(),r=s.society.critters.find(h=>new RegExp(`\\b${h.name.toLowerCase()}\\b`).test(n));if(r)return r;if(e)return e;let o=s.society.inRoom(s.roomId).filter(h=>!h.held&&h.mainAction?.name!=="sleep");if(!o.length)return s.society.inRoom(s.roomId)[0]||null;let a=s.engine.camera,l=o[0],c=1/0;for(let h of o){let u=h.position.clone().project(a),d=u.x*u.x+(u.y+.1)*(u.y+.1);d<c&&(c=d,l=h)}return l}function ub(s,t,e){let n=s.society,i=t.trim(),r=i.toLowerCase(),o=hb(s,i,e),a=n.inRoom(s.roomId).filter(d=>!d.held),l=a.filter(d=>d.mainAction?.name!=="sleep"),c=(d,f,p=250)=>d&&setTimeout(()=>d.say(f),p),h=(d,f)=>{d&&(d.mainAction?.name==="sleep"&&(d.brain.cancel(),d.play("wake")),d.brain.attending=2.5,d.play(f))},u;if((u=i.match(/^\s*(?:idea|ideas|pitch|what if)\s*[:\-–—]?\s*(.+)$/i))&&u[1].length>1){n.addNote(u[1],{by:null}),h(o,"think"),c(o,De("noted"),400);return}if((u=i.match(/^\s*(?:todo|to-do|to do|task|remind me(?: to)?)\s*[:\-–—]?\s*(.+)$/i))&&u[1].length>1){n.addTodo(u[1]),h(o,"nod"),c(o,De("todo"),400);return}if(u=i.match(/^\s*(?:letter|mail|send|email|post)\s*[:\-–—]\s*(.+)$/i)){n.sendLetter(u[1]),h(o,"hop"),c(o,$t(["i\u2019ll tell the post room!","letter! on it!","Tofu will love this"]),400);return}if(/\b(new friend|invite|spawn|hatch|adopt|another one|more friends?)\b/.test(r)){if(n.critters.length>=12){c(o,"the nook is a little full right now!");return}let d=i.match(/\b(?:named|called|name(?:d)? is)\s+([A-Za-z][\w'-]{0,14})/i),f=n.spawn({name:d?sm(d[1]):void 0,roomId:s.roomId},{viaDoor:!0});Ft.play("spawn"),setTimeout(()=>f.say($t(["hi!! i\u2019m new!",`i\u2019m ${f.name}!`,"is this the cozy place?"])),1800);for(let p of l.slice(0,3))setTimeout(()=>p.play("wave",{target:f,sound:!1}),G(1500,2600));return}if(e&&(u=i.match(/^\s*(?:rename|your name is|i'll call you|call you)\s+([A-Za-z][\w'-]{0,14})/i))){let d=e.name;e.name=sm(u[1]),s.hud.renderRoster(),s.hud.el.cardName.textContent=e.name,h(e,"cheer"),c(e,`${e.name}! i love it`,500);return}if(/\b(dance|party|music|boogie|groove|song)\b/.test(r)){Ft.unlock(),Ft.musicOn?n.musicStarted():qt.emit("music:toggle"),n.partyUntil=performance.now()+12e4;for(let d of l)d.brain.station||setTimeout(()=>d.play("dance",{}),G(0,600))&&setTimeout(()=>d.stop("dance"),G(9e3,14e3));c(o,De("dance"),300);return}if(/\b(good ?night|nighty|sleep|nap|bed ?time|go to bed|rest)\b/.test(r)){let d=/\b(everyone|all|y'?all|guys|friends)\b/.test(r)||!/\b(you)\b/.test(r)&&!e?a:[o];wh(s,d.filter(Boolean)),c(o,De("bedtime"),200);return}if(/\b(wake|morning|rise and shine|get up)\b/.test(r)){for(let d of a)d.mainAction?.name==="sleep"&&(d.brain.cancel(),setTimeout(()=>d.play("wake"),G(0,1200)));c(o,De("morning"),1600);return}if(/\b(hi+|hello|hey+|hiya|howdy|yo|heya|sup|good (morning|afternoon|evening))\b/.test(r)||/^o\/$/.test(r)){(/\b(everyone|all|y'?all|guys|friends|crew)\b/.test(r)||!e?l:[o]).forEach((f,p)=>{setTimeout(()=>{f.brain.attending=3,f.faceToward(s.engine.camera.position),f.play(se(.3)?"hop":"wave"),(p<2||f===o)&&f.say(De("greetUser"))},p*260+G(0,200))});return}if(/\b(come( here)?|gather|huddle|everyone here|over here|assemble)\b/.test(r)){Ra(s,/\b(everyone|all|y'?all|guys)\b/.test(r)||!e?a:[o]),c(o,$t(["coming!!","on my way!","yes?","wheee coming"]),300);return}if(/\b(jump|hop)\b/.test(r)){(e||/\b(everyone|all)\b/.test(r)?e?[o]:l:[o]).forEach((d,f)=>setTimeout(()=>h(d,"hop"),f*120));return}if(/\b(spin|twirl)\b/.test(r)){h(o,"spin"),c(o,"wheee!",200);return}if(/\b(tea|snack|cookie|cookies|biscuit time)\b/.test(r)){let f=s.room.stations.filter(p=>p.activity==="tea"&&!p.reservedBy);l.slice(0,f.length).forEach((p,x)=>p.brain.doStation(f[x],{duration:G(18,28)})),c(o,$t(["tea party!!","i\u2019ll get the cookies","yay tea"]),300);return}if(/\b(work|build|code|make something|get busy)\b/.test(r)){let f=s.room.stations.filter(p=>p.tags.includes("work")&&!p.reservedBy);l.slice(0,f.length).forEach((p,x)=>p.brain.doStation(f[x])),c(o,$t(["on it!","to work!","beep boop, working"]),300);return}if(/\b(love|cute|adorable|good job|well done|thank|thanks|thx|best|sweet|aww+)\b/.test(r)||/<3|♥/.test(r)){h(o,se(.5)?"shy":"blinkSlow"),s.fx.spawn("heart",o.headPos(new A),{count:3}),c(o,De("love"),500),s.hud.toast(`${o.name} is blushing`,"love");return}if(/\b(who are you|your name|what'?s your name|introduce)\b/.test(r)){h(o,"wave"),c(o,`i\u2019m ${o.name}! ${o.bio||""}`,300);return}if(/\b(sad|tired|stressed|anxious|lonely|bad day|ugh)\b/.test(r)){Ra(s,l.slice(0,4)),c(o,$t(["aww, come here","we\u2019re here for you","group hug!!","want some tea?"]),600),setTimeout(()=>l.slice(0,4).forEach(d=>d.play("hug")),3500);return}if(/\?\s*$/.test(r)){h(o,"think"),c(o,$t(["hmm\u2026 good question!","i\u2019ll ask the smart ones later","ooh, let me think\u2026","maybe? :)","i think\u2026 yes!"]),2800);return}if(i.length>=14){n.addNote(i,{by:null}),h(o,"tilt"),c(o,De("noted"),400);return}h(o,$t(["tilt","giggle","hop","nod"])),c(o,De("confused"),400)}function sm(s){return s.charAt(0).toUpperCase()+s.slice(1)}function wh(s,t){let n=s.room.stations.filter(i=>(i.activity==="sleep"||i.activity==="think"||i.activity==="read"||i.activity==="tea"||i.activity==="sit")&&i.seat&&!i.reservedBy);n.sort((i,r)=>(i.activity==="sleep"?-1:0)-(r.activity==="sleep"?-1:0)),t.forEach((i,r)=>{let o=n[r];o?(i.brain.doStation({...o,activity:"sleep",label:"sleeping"},{duration:G(40,90)}),i.brain.tasks[0].station=o):i.brain.run([{type:"act",name:"yawn"},{type:"act",name:"sleep",t:G(30,60)},{type:"act",name:"wake"}],"dozing off")})}function Ra(s,t){let e=s.engine.camera.position,n=s.room,i=new Y(e.x,e.z).normalize(),r=new Y(-i.y,i.x),o=new Y(i.x*1.6,i.y*1.6);t.forEach((a,l)=>{let c=l-(t.length-1)/2,h=Math.floor(Math.abs(c)/3),u=o.clone().addScaledVector(r,c*.95).addScaledVector(i,-h*.9+Math.abs(c)*-.12),d=n.nav.nearestFree(u.x,u.y);a.mainAction?.name==="sleep"&&a.play("wake"),a.brain.run([{type:"wait",t:l*.15},{type:"walk",to:d,gait:a.traits.energy>.6?"hop":void 0},{type:"face",yaw:Math.atan2(e.x-d.x,e.z-d.z),t:.3},{type:"act",name:$t(["wave","hop","wiggle"])},{type:"wait",t:G(4,7),look:e}],"came to say hi")})}var En={left:'<svg viewBox="0 0 24 24"><path d="M14.5 5.5 8 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',right:'<svg viewBox="0 0 24 24"><path d="M9.5 5.5 16 12l-6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',send:'<svg viewBox="0 0 24 24"><path d="M4 12.5 19.5 5l-4.2 15-3.6-5.6L4 12.5Z" fill="currentColor"/><path d="m11.7 14.4 7.8-9.4" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>',music:'<svg viewBox="0 0 24 24"><path d="M9 17.5V6.2l10-2.2v11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6.6" cy="17.6" r="2.6" fill="currentColor"/><circle cx="16.6" cy="15.2" r="2.6" fill="currentColor"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',sun:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></g></svg>',moon:'<svg viewBox="0 0 24 24"><path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5Z" fill="currentColor"/></svg>',heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" fill="currentColor"/></svg>',close:'<svg viewBox="0 0 24 24"><path d="m7 7 10 10M17 7 7 17" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',eye:'<svg viewBox="0 0 24 24"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>',wave:'<svg viewBox="0 0 24 24"><path d="M7 13.5V7.8a1.4 1.4 0 0 1 2.8 0V12m0-1.5V5.6a1.4 1.4 0 0 1 2.8 0V11m0-3.8a1.4 1.4 0 0 1 2.8 0V12m0-2.6a1.4 1.4 0 0 1 2.8 0V15a5.5 5.5 0 0 1-5.5 5.5h-.9a5.5 5.5 0 0 1-4.3-2.1L4.2 15a1.5 1.5 0 0 1 2.3-1.9Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>',moonZ:'<svg viewBox="0 0 24 24"><path d="M17 15a6 6 0 0 1-8-8 6 6 0 1 0 8 8Z" fill="currentColor"/><path d="M15 4h4l-4 4h4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',help:'<svg viewBox="0 0 24 24"><path d="M9.2 9.3a2.9 2.9 0 1 1 4.1 2.6c-.9.4-1.3 1-1.3 1.9v.4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="17.6" r="1.4" fill="currentColor"/></svg>',studio:'<svg viewBox="0 0 24 24"><path d="M12 4c4.4 0 7 3.6 7 8.2 0 4.3-3.1 7.8-7 7.8s-7-3.5-7-7.8C5 7.6 7.6 4 12 4Z" fill="currentColor"/><circle cx="9.6" cy="12" r="1.2" fill="#fff"/><circle cx="14.4" cy="12" r="1.2" fill="#fff"/><path d="M12 4c0-1.5.8-2.3 2.2-2.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',plus:'<svg viewBox="0 0 24 24"><path d="M12 6v12M6 12h12" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>'},Th=class{constructor(t){this.world=t,this.selected=null,this.bubbles=new Map,this._portraitT=0,this._build(),this._ring=this._makeRing(),qt.on("critter:say",(e,n,i)=>this.say(e,n,i)),qt.on("critter:spawned",()=>this.renderRoster()),qt.on("critter:removed",e=>{this.bubbles.get(e)?.el.remove(),this.bubbles.delete(e),this.selected===e&&this.select(null),this.renderRoster()}),qt.on("critter:moved",()=>this.renderRoster()),qt.on("board:open",()=>this.openPanel("ideas")),qt.on("todo:open",()=>this.openPanel("todos")),qt.on("letters:open",()=>this.openPanel("letters")),qt.on("note:pinned",(e,n)=>{this.toast(`${n?.name||"Someone"} pinned \u201C${om(e.text,38)}\u201D to the idea board`,"note"),this.panel==="ideas"&&this.openPanel("ideas")}),qt.on("todo:added",(e,n)=>{this.toast(`${n?.name||"Someone"} wrote \u201C${om(e.text,38)}\u201D on today\u2019s board`,"todo"),this.panel==="todos"&&this.openPanel("todos")}),qt.on("letter:sent",(e,n)=>this.toast(`${n?.name||"Someone"} posted your letter \u2709`,"mail")),qt.on("computer:click",()=>this.toast("the computer smiles at you. beep!","note")),this.renderRoster(),this.refreshToggles(),this._welcome()}_build(){let t=this.root=document.createElement("div");t.className="hud",t.innerHTML=`
      <div class="plaque">
        <div class="plaque-room"></div>
        <div class="plaque-corner"><span class="dots"><i></i><i></i><i></i><i></i></span><b></b></div>
      </div>
      <div class="topbar">
        <button class="chip time" title="time of day"><span class="ico"></span><span class="lbl"></span></button>
        <button class="round music" title="music">${En.music}</button>
        <button class="round sound" title="sound">${En.sound}</button>
        <a class="round studio" href="critter.html" title="Critter Studio">${En.studio}</a>
        <button class="round help" title="how to play">${En.help}</button>
      </div>
      <div class="roster"></div>
      <div class="card hidden">
        <button class="x">${En.close}</button>
        <div class="card-top"><canvas width="96" height="96"></canvas><div><div class="card-name"></div><div class="card-bio"></div></div></div>
        <div class="card-rows">
          <div><span>feeling</span><b class="card-mood"></b></div>
          <div><span>up to</span><b class="card-doing"></b></div>
        </div>
        <div class="needs"></div>
        <div class="card-btns">
          <button data-a="follow">${En.eye}<span>follow</span></button>
          <button data-a="call">${En.wave}<span>call over</span></button>
          <button data-a="nap">${En.moonZ}<span>nap</span></button>
        </div>
      </div>
      <div class="bottom">
        <button class="round rot rot-left" title="turn left (\u2190)">${En.left}</button>
        <form class="chat" autocomplete="off">
          <input type="text" maxlength="160" placeholder="say something to your sproutlings\u2026" />
          <button type="submit" class="send" title="send">${En.send}</button>
        </form>
        <button class="round rot rot-right" title="turn right (\u2192)">${En.right}</button>
      </div>
      <div class="suggest">
        <button>hi everyone!</button><button>idea: a tiny greenhouse</button><button>todo: water the plants</button><button>dance party</button><button>letter: thank you!</button><button>good night</button>
      </div>
      <div class="tooltip hidden"></div>
      <div class="toasts"></div>
      <div class="bubbles"></div>
      <div class="panel-wrap hidden"><div class="panel"><button class="x">${En.close}</button><div class="panel-body"></div></div></div>
      <div class="iris"></div>
    `,document.body.appendChild(t);let e=i=>t.querySelector(i);this.$=e,this.el={room:e(".plaque-room"),corner:e(".plaque-corner b"),dots:[...t.querySelectorAll(".plaque .dots i")],roster:e(".roster"),card:e(".card"),cardCanvas:e(".card canvas"),cardName:e(".card-name"),cardBio:e(".card-bio"),cardMood:e(".card-mood"),cardDoing:e(".card-doing"),needs:e(".needs"),tooltip:e(".tooltip"),toasts:e(".toasts"),bubbles:e(".bubbles"),input:e(".chat input"),panelWrap:e(".panel-wrap"),panelBody:e(".panel-body"),iris:e(".iris"),time:e(".time")},e(".rot-left").onclick=()=>{Ft.unlock(),this.world.rotate(-1)},e(".rot-right").onclick=()=>{Ft.unlock(),this.world.rotate(1)},e(".chat").onsubmit=i=>{i.preventDefault(),Ft.unlock();let r=this.el.input.value.trim();r&&(this.el.input.value="",Ft.play("pop"),Sh(this.world,r,this.selected),t.querySelector(".suggest").classList.add("used"))},this.el.input.addEventListener("focus",()=>t.querySelector(".suggest").classList.add("show")),this.el.input.addEventListener("blur",()=>setTimeout(()=>t.querySelector(".suggest").classList.remove("show"),200)),t.querySelectorAll(".suggest button").forEach(i=>{i.onmousedown=r=>{r.preventDefault(),this.el.input.value=i.textContent,this.el.input.focus()}}),e(".music").onclick=()=>qt.emit("music:toggle"),e(".sound").onclick=()=>{Ft.unlock(),Ft.setSfx(!Ft.sfxOn),this.world.store.data.settings.sfx=Ft.sfxOn,this.refreshToggles()},this.el.time.onclick=()=>{Ft.unlock();let i=Ws.map(a=>a.id),r=i.indexOf(this.world.daylight.presetId),o=i[(r+1)%i.length];this.world.daylight.setPreset(o),this.world.store.data.settings.time=o,Ft.play("click"),this.refreshToggles()},e(".help").onclick=()=>this.openPanel("help");let n=["nw","ne","se","sw"];this.el.dots.forEach((i,r)=>{i.title="turn to this corner",i.onclick=()=>{Ft.unlock();let l=(["nw","sw","se","ne"].indexOf(n[r])-this.world.rig.corner+4)%4;l===3&&(l=-1),l&&this.world.rotate(l)}}),e(".card .x").onclick=()=>this.select(null),e(".card-btns").onclick=i=>{let r=i.target.closest("button");if(!r||!this.selected)return;Ft.play("click");let o=this.selected;r.dataset.a==="follow"?(this.world.rig.followCritter===o?this.world.rig.unfollow():this.world.rig.follow(o),this._syncCardButtons()):r.dataset.a==="call"?this.world.api.callOver(o.name):r.dataset.a==="nap"&&this.world.api.nap(o.name)},e(".panel-wrap").onclick=i=>{(i.target===this.el.panelWrap||i.target.closest(".x"))&&this.closePanel()},this.el.panelBody.addEventListener("click",i=>this._panelClick(i))}_makeRing(){let t=new Oo(.5,.62,48);t.rotateX(-Math.PI/2);let e=new Mn({color:"#fff6e8",transparent:!0,opacity:.85,depthWrite:!1}),n=new Lt(t,e);return n.userData.noAO=!0,n.renderOrder=2,n.visible=!1,n}renderRoster(){let t=this.el.roster;t.innerHTML="";for(let e of this.world.society.critters){let n=document.createElement("button");n.className="face",n.title=e.name;let i=document.createElement("canvas");i.width=i.height=72,n.appendChild(i);let r=document.createElement("span");r.className="where",n.appendChild(r),n.onclick=()=>{Ft.unlock(),Ft.play("click"),e.roomId!==this.world.roomId&&this.world.travel(e.roomId),setTimeout(()=>this.select(e),e.roomId!==this.world.roomId?900:0)},n._critter=e,n._canvas=i,n._tag=r,t.appendChild(n)}this._portraitT=0}select(t){if(this.selected===t)return;this.selected=t;let e=this.el.card;if(!t){e.classList.add("hidden"),this._ring.visible=!1,this.world.rig.followCritter&&this.world.rig.unfollow();return}e.classList.remove("hidden"),e.style.setProperty("--tint",t.color),this.el.cardName.textContent=t.name,this.el.cardBio.textContent=t.bio||"",t.brain.attending=Math.max(t.brain.attending,t.mainAction?.name==="sleep"?0:1.6),!t.walking&&!t.busy&&t.mainAction?.name!=="sleep"&&setTimeout(()=>t.play("wave",{sound:!1}),350),this._syncCardButtons(),this._updateCard(!0)}_syncCardButtons(){let t=this.root.querySelector('[data-a="follow"] span');t.textContent=this.world.rig.followCritter===this.selected?"unfollow":"follow"}_updateCard(t){let e=this.selected;if(!e)return;this.el.cardMood.textContent=db(e),this.el.cardDoing.textContent=e.held?"being carried around!":e.brain.doing;let n=e.brain.needs,i=[["energy",n.energy],["fun",n.fun],["friends",n.social],["purpose",n.purpose]];(t||!this.el.needs.children.length)&&(this.el.needs.innerHTML=i.map(([r])=>`<div class="need"><span>${r}</span><i><u></u></i></div>`).join("")),[...this.el.needs.querySelectorAll("u")].forEach((r,o)=>r.style.width=`${Math.round(i[o][1]*100)}%`)}hover(t,e,n){let i=this.el.tooltip;if(t)i.innerHTML=`<b>${t.name}</b><span>${t.held?"wheee":t.brain.doing}</span>`;else if(e)i.innerHTML=`<b>${e.userData.label}</b>${e.userData.hint?`<span>${e.userData.hint}</span>`:""}`;else{i.classList.add("hidden");return}i.classList.remove("hidden"),i.style.transform=`translate(${n.x+16}px, ${n.y+14}px)`}say(t,e,n={}){let i=this.bubbles.get(t);if(!i){let r=document.createElement("div");r.className="bubble",this.el.bubbles.appendChild(r),i={el:r,text:"",shown:0,until:0},this.bubbles.set(t,i)}i.text=e,i.shown=0,i.until=performance.now()/1e3+Math.max(2.2,e.length*.075+1.6),i.el.style.setProperty("--tint",t.color),t.roomId===this.world.roomId&&Ft.babble(e,t.voice)}_updateBubbles(t){let e=this.world.engine.camera,n=this.world.engine.width,i=this.world.engine.height,r=performance.now()/1e3,o=[];for(let[a,l]of this.bubbles){if(!(a.roomId===this.world.roomId&&r<l.until)){l.el.classList.remove("show");continue}l.shown<l.text.length&&(l.shown=Math.min(l.text.length,l.shown+t*30),l.el.textContent=l.text.slice(0,Math.ceil(l.shown)));let h=a.headPos(new A,.32).project(e);if(h.z>1){l.el.classList.remove("show");continue}let u=l.el.offsetWidth||120,d=l.el.offsetHeight||36,f=_t((h.x*.5+.5)*n,u/2+8,n-u/2-8),p=_t((-h.y*.5+.5)*i,d+8,i);o.push({b:l,x:f,y:p,w:u,h:d,depth:h.z})}o.sort((a,l)=>a.depth-l.depth);for(let a=0;a<o.length;a++){let l=o[a];l.ty=l.y;for(let c=0;c<4;c++){let h=!1;for(let u=0;u<a;u++){let d=o[u];Math.abs(l.x-d.x)<(l.w+d.w)/2+4&&Math.abs(l.ty-d.ty)<(l.h+d.h)/2+4&&(l.ty=d.ty-(d.h+l.h)/2-6,h=!0)}if(!h)break}l.b.y=l.b.y===void 0?l.ty:Ye(l.b.y,l.ty,14,t),l.b.el.style.transform=`translate(${l.x}px, ${l.b.y}px) translate(-50%, -100%)`,l.b.el.classList.add("show")}}toast(t,e="note"){let n=document.createElement("div");n.className=`toast ${e}`;let i=e==="mail"?"letter":e==="todo"?"sparkle":e==="love"?"heart":"bulb";for(n.innerHTML=`<img src="${qp(i)}" alt=""/><span></span>`,n.querySelector("span").textContent=t,this.el.toasts.appendChild(n),requestAnimationFrame(()=>n.classList.add("in")),setTimeout(()=>{n.classList.remove("in"),setTimeout(()=>n.remove(),400)},4200);this.el.toasts.children.length>3;)this.el.toasts.firstChild.remove()}_welcome(){let t=this.world.store.data,e=Date.now()-(t.lastSeen||Date.now());if(t.critters&&e>1e3*60*30){let n=Math.round(e/36e5);setTimeout(()=>this.toast(n>=1?`welcome back! you were away ${n}h \u2014 the crew kept the place cozy`:"welcome back!","love"),1200)}else t.critters||setTimeout(()=>this.toast("welcome to the Nook! click a sproutling to say hi","love"),1500)}openPanel(t){Ft.unlock(),Ft.play("pop"),this.panel=t;let e=this.world.store.data,n=this.el.panelBody;if(t==="ideas"){let i=[...e.notes].reverse(),r=this.world.society.pendingNotes;n.innerHTML=`
        <h2>The Idea Board</h2>
        <p class="sub">Type <b>idea: \u2026</b> below and a sproutling will pin it up. Later, the agents will pitch ideas here too.</p>
        <div class="notes">${r.map(o=>rm(o,!0)).join("")}${i.map(o=>rm(o)).join("")||(r.length?"":'<p class="empty">no ideas yet\u2026 type one in the chat box!</p>')}</div>`}else if(t==="todos"){let i=e.todos;n.innerHTML=`
        <h2>Today</h2>
        <p class="sub">Type <b>todo: \u2026</b> and someone will chalk it up. Click to tick things off.</p>
        <ul class="todos">${i.map(r=>`<li data-id="${r.id}" class="${r.done?"done":""}"><i></i><span>${Eh(r.text)}</span><button class="del" data-del="${r.id}">${En.close}</button></li>`).join("")||'<p class="empty">a clean slate ~ nice</p>'}</ul>`}else if(t==="letters"){let i=[...e.letters].reverse();n.innerHTML=`
        <h2>Letter Wall</h2>
        <p class="sub">Type <b>letter: \u2026</b> and Tofu\u2019s crew will stamp it and post it. (Real sending comes with the agents.)</p>
        <div class="letters">${i.map(r=>`<div class="letter"><span>${Eh(r.text)}</span><small>${new Date(r.at).toLocaleDateString()}</small></div>`).join("")||'<p class="empty">no letters sent yet</p>'}</div>`}else t==="help"&&(n.innerHTML=`
        <h2>How to be cozy</h2>
        <ul class="help-list">
          <li><b>Turn the room</b> with the arrows, \u2190 \u2192 keys, or drag the background.</li>
          <li><b>Scroll</b> (or pinch) to zoom in toward a spot.</li>
          <li><b>Click</b> a sproutling to boop it and see what it\u2019s up to. Boop a lot and see what happens.</li>
          <li><b>Rub</b> your cursor back and forth over one to pet it.</li>
          <li><b>Drag</b> one to pick it up and carry it somewhere.</li>
          <li><b>Click things</b>: the gramophone, lamps, plants, the idea board, the chalkboard, the door\u2026</li>
          <li><b>Talk</b> in the box: <i>hi</i>, <i>idea: \u2026</i>, <i>todo: \u2026</i>, <i>letter: \u2026</i>, <i>dance party</i>, <i>good night</i>, <i>come here</i>, <i>new friend</i>, or a sproutling\u2019s name.</li>
          <li>Time follows your clock. Click the time chip to peek at other times of day.</li>
        </ul>
        <p class="sub">Meet one up close in the <a href="critter.html">Critter Studio</a>.</p>
        <button class="reset">reset the world</button>`);this.el.panelWrap.classList.remove("hidden"),this.el.panelWrap.dataset.kind=t}closePanel(){this.panel=null,this.el.panelWrap.classList.add("hidden")}_panelClick(t){let e=t.target.closest("[data-del]");if(e){this.world.society.removeTodo(e.dataset.del),this.openPanel("todos");return}let n=t.target.closest("li[data-id]");if(n){this.world.society.toggleTodo(n.dataset.id),Ft.play(n.classList.contains("done")?"click":"yay"),this.openPanel("todos");return}let i=t.target.closest("[data-note]");if(i){this.world.society.removeNote(i.dataset.note),this.openPanel("ideas");return}t.target.closest(".reset")&&confirm("Reset the world? Your sproutlings, notes and lists will start fresh.")&&(this.world.store.reset(),this.world._noSave=!0,location.reload())}iris(t,e,n){let i=this.el.iris;return new Promise(r=>{i.style.setProperty("--x",`${t}%`),i.style.setProperty("--y",`${e}%`),i.classList.remove("open"),i.classList.add("closing"),setTimeout(()=>{n?.(),i.style.setProperty("--x","50%"),i.style.setProperty("--y","55%"),i.classList.remove("closing"),i.classList.add("opening"),setTimeout(()=>{i.classList.remove("opening"),r()},650)},650)})}onRoomChanged(t){this.el.room.textContent=t.name,t.group.add(this._ring),this.updateCorner(),this.renderRoster(),this.selected&&this.selected.roomId!==t.id&&this.select(null)}updateCorner(){let t=this.world.room;if(!t)return;let e=this.world.rig.cornerKey();this.el.corner.textContent=t.spec.corners[e]||"";let n=["nw","ne","se","sw"];this.el.dots.forEach((i,r)=>i.classList.toggle("on",n[r]===e)),this.root.querySelector(".plaque").classList.remove("pulse"),this.root.offsetWidth,this.root.querySelector(".plaque").classList.add("pulse")}refreshToggles(){this.root.querySelector(".music").classList.toggle("off",!Ft.musicOn),this.root.querySelector(".sound").classList.toggle("off",!Ft.sfxOn);let t=this.world.daylight,e=Ws.find(i=>i.id===t.presetId),n=t.isNight||t.phase==="evening";this.el.time.querySelector(".ico").innerHTML=n?En.moon:En.sun,this.el.time.querySelector(".lbl").textContent=e?.id==="auto"?fb():e?.label}update(t){this._updateBubbles(t);let e=this.selected;if(e&&e.roomId===this.world.roomId){this._ring.visible=!0,this._ring.position.set(e.position.x,.03,e.position.z);let n=e.size*(1+Math.sin(performance.now()/300)*.04);this._ring.scale.setScalar(n)}else this._ring.visible=!1;if(this._portraitT-=t,this._portraitT<=0){this._portraitT=.3;for(let n of this.el.roster.children){let i=n._critter;i.face.drawPortrait(n._canvas,i.color,i.faceState);let r=i.roomId!==this.world.roomId;n.classList.toggle("away",r),n._tag.textContent=r?i.roomId==="post"?"post":"nook":"",n.classList.toggle("sel",i===this.selected),n.classList.toggle("asleep",i.mainAction?.name==="sleep")}this.selected&&(this.selected.face.drawPortrait(this.el.cardCanvas,this.selected.color,this.selected.faceState),this._updateCard()),this.refreshToggles()}}};function db(s){return s.held?"wheee!":s.mainAction?.name==="sleep"?"zzz\u2026":s.mainAction?.name==="pet"?"so loved":{happy:"happy",content:"cozy",excited:"excited!",sleepy:"sleepy",curious:"curious",sad:"a bit blue",grumpy:"grumpy",focused:"focused",shy:"shy"}[s.mood]||s.mood}function rm(s,t=!1){return`<div class="note ${t?"pending":""}" style="--c:${s.color}"><span>${Eh(s.text)}</span><small>${t?"on its way\u2026":s.by?`by ${Eh(s.by)}`:"from you"}</small>${t?"":`<button data-note="${s.id}" title="unpin">${En.close}</button>`}</div>`}var Eh=s=>String(s).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),om=(s,t)=>s.length>t?s.slice(0,t-1)+"\u2026":s,fb=()=>new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});var Id="cozycode.v1",Ah=class{constructor(){this.data=this._load()}_defaults(){return{version:1,critters:null,notes:[],todos:[],letters:[],settings:{sfx:!0,music:!0,time:"auto",room:"nook",corner:0},firstSeen:Date.now(),lastSeen:Date.now()}}_load(){let t=this._defaults();try{let e=localStorage.getItem(Id);if(!e)return t;let n=JSON.parse(e);return{...t,...n,settings:{...t.settings,...n.settings||{}}}}catch{return t}}save(){this.data.lastSeen=Date.now();try{localStorage.setItem(Id,JSON.stringify(this.data))}catch{}}reset(){this.data=this._defaults();try{localStorage.removeItem(Id)}catch{}}};function am(s){let t=s.society,e=i=>{let r=t.find(i);if(!r)throw new Error(`no sproutling called "${i}"`);return r},n=i=>({id:i.id,name:i.name,color:i.color,accessory:i.accessory,room:i.roomId,doing:i.brain.doing,mood:i.mood,needs:{...i.brain.needs},traits:{...i.traits},position:{x:+i.position.x.toFixed(2),z:+i.position.z.toFixed(2)}});return{version:1,on:(i,r)=>qt.on(i,r),off:(i,r)=>qt.off(i,r),critters:()=>t.critters.map(n),get:i=>n(e(i)),rooms:()=>Object.values(s.rooms).map(i=>({id:i.id,name:i.name,corners:i.spec.corners})),stations:(i=s.roomId)=>s.rooms[i].stations.map(r=>({id:r.id,label:r.label,activity:r.activity,corner:r.corner,tags:r.tags,busy:!!r.reservedBy})),actions:()=>Object.keys(no),notes:()=>[...s.store.data.notes],todos:()=>[...s.store.data.todos],letters:()=>[...s.store.data.letters],get currentRoom(){return s.roomId},say:(i,r)=>e(i).say(String(r)),act:(i,r,o={})=>{if(!no[r])throw new Error(`unknown action "${r}"`);let a=e(i);return no[r].lockMove&&a.brain.cancel(),!!a.play(r,o)},stop:(i,r)=>e(i).stop(r),goTo:(i,r,o={})=>{let a=e(i),l=s.rooms[a.roomId],c=l.stations.find(h=>h.id===r);if(!c)throw new Error(`no station "${r}" in ${l.name} (try cozy.stations())`);return a.brain.doStation(c,o),!0},walkTo:(i,r,o)=>{e(i).brain.run([{type:"walk",to:{x:r,z:o}}],"walking somewhere")},sendTo:(i,r)=>{let o=e(i);if(o.roomId===r)return;let a=s.rooms[o.roomId].stations.find(l=>l.activity==="door"&&l.door.to===r);a&&o.brain.travel(a)},setMood:(i,r,o=10)=>e(i).setMood(r,o),callOver:i=>Ra(s,[e(i)]),nap:i=>wh(s,[e(i)]),gatherAll:()=>Ra(s,t.inRoom(s.roomId)),bedtime:()=>wh(s,t.inRoom(s.roomId)),spawn:(i={})=>n(t.spawn({roomId:s.roomId,...i},{viaDoor:i.viaDoor??!0})),remove:i=>t.remove(e(i)),pinNote:(i,r={})=>t.addNote(i,r),unpinNote:i=>t.removeNote(i),addTodo:(i,r={})=>t.addTodo(i,r),toggleTodo:i=>t.toggleTodo(i),removeTodo:i=>t.removeTodo(i),sendLetter:(i,r={})=>t.sendLetter(i,r),goToRoom:i=>s.travel(i),rotate:(i=1)=>s.rotate(i),follow:i=>s.rig.follow(e(i)),unfollow:()=>s.rig.unfollow(),select:i=>s.hud.select(i?e(i):null),toast:(i,r)=>s.hud.toast(i,r),setTime:i=>{typeof i=="number"?s.daylight.setHour(i):s.daylight.setPreset(i),s.hud.refreshToggles()},timePresets:()=>Ws.map(i=>i.id),setMusic:i=>{Ft.unlock(),!!i!==Ft.musicOn&&qt.emit("music:toggle")},message:i=>Sh(s,i,s.hud.selected),fastForward:(i=10)=>{let r=Math.round(i*30);for(let o=0;o<r;o++)s.update(1/30,s.engine.time+o/30)}}}var Rh=class{constructor(t){this.container=t,this.engine=new Wc(t,{fov:30}),this.engine.renderer.toneMapping=Us,this.sound=Ft,this.bus=qt,this.store=new Ah,this.rooms={},this.roomId=null,this.params=new URLSearchParams(location.search)}async init(){let{engine:t}=this;this.daylight=new Qc(t);let e=this.params.get("time");e?this.daylight.setPreset(e):this.store.data.settings.time&&this.store.data.settings.time!=="auto"&&this.daylight.setPreset(this.store.data.settings.time),this.fx=new Kc(t.scene),qt.on("fx",(a,l,c)=>this.fx.spawn(a,l,c)),qt.on("sfx",(a,l)=>Ft.play(a,l)),this.rooms.nook=B0(this),this.rooms.post=Z0(this);for(let a of Object.values(this.rooms))t.scene.add(a.group),a.setVisible(!1),a.motes=new xh(a,a.id==="nook"?170:110);this.rig=new th(t),this.interaction=new eh({dom:t.renderer.domElement,camera:t.camera,getCritters:()=>this.society.inRoom(this.roomId),getProps:()=>this.room?.interactive||[],clampPos:(a,l)=>{let c=this.room,h=c.w/2-.45,u=c.d/2-.45;return[_t(a,-h,h),_t(l,-u,u)]},onClickCritter:a=>this.hud?.select(a),onClickEmpty:a=>this.onFloorClick(a),onHover:(a,l,c)=>this.hud?.hover(a,l,c),onDrop:a=>this.society.onDropped(a),sound:Ft}),this.rig.interaction=this.interaction,t.renderer.domElement.addEventListener("dblclick",a=>{this.interaction._ndcFrom(a);let{critter:l}=this.interaction.pick();l&&(this.hud.select(l),this.rig.follow(l),this.hud._syncCardButtons())}),this.interaction.onDragStart=a=>this.society.onPicked(a),this.society=new Mh(this),this.society.load(this.store.data.critters);let n=(Date.now()-(this.store.data.lastSeen||Date.now()))/1e3;this.store.data.critters&&n>90&&this.society.catchUp(n),document.addEventListener("visibilitychange",()=>{if(document.hidden)this._hiddenAt=Date.now();else if(this._hiddenAt){let a=(Date.now()-this._hiddenAt)/1e3;this._hiddenAt=null,a>90&&this.society.catchUp(a)}}),this.hud=new Th(this),this.api=am(this);let i=this.params.get("room")||this.store.data.settings.room||"nook";this.enterRoom(this.rooms[i]?i:"nook",{instant:!0,corner:this.store.data.settings.corner??0}),Ft.isVisible=a=>a.roomId===this.roomId,Ft.setSfx(this.store.data.settings.sfx!==!1),Ft.setMusic(this.store.data.settings.music!==!1),qt.on("door:click",(a,l)=>this.travel(l.to)),qt.on("music:toggle",()=>{Ft.unlock(),Ft.setMusic(!Ft.musicOn),this.store.data.settings.music=Ft.musicOn,this.hud.refreshToggles(),Ft.musicOn&&this.society.musicStarted()}),qt.on("music:party",()=>{Ft.unlock(),Ft.musicOn||(Ft.setMusic(!0),this.store.data.settings.music=!0,this.hud.refreshToggles()),Ft.play("chime"),this.society.musicStarted()}),qt.on("lamp:toggle",()=>this.society.onLampToggled()),window.addEventListener("keydown",a=>{a.target&&(a.target.tagName==="INPUT"||a.target.tagName==="TEXTAREA")||((a.key==="ArrowLeft"||a.key==="q"||a.key==="Q"||a.key==="a"||a.key==="A")&&this.rotate(-1),(a.key==="ArrowRight"||a.key==="e"||a.key==="E"||a.key==="d"||a.key==="D")&&this.rotate(1),a.key==="Escape"&&(this.hud.select(null),this.rig.unfollow()))}),this.rig.onRotate=()=>Ft.play("rotate"),this.rig.onCornerChange=()=>this.hud.updateCorner(),t.onResize=()=>this.rig.fit();let r=this.params.has("quality"),o=0;t.onFps=a=>{r||t.time<4||document.hidden||(o=a<38?o+1:0,o>=3&&t.quality!=="low"&&(o=0,t.setQuality(t.quality==="high"?"medium":"low"),console.info("[cozy] lowering quality to",t.quality,`(${a.toFixed(0)} fps)`)))},t.add((a,l)=>this.update(a,l)),setInterval(()=>this.save(),8e3),window.addEventListener("beforeunload",()=>this.save()),document.addEventListener("visibilitychange",()=>document.hidden&&this.save())}get room(){return this.rooms[this.roomId]}rotate(t){this.rig.rotate(t)}onFloorClick(t){let e=this.hud?.selected;if(!e||e.roomId!==this.roomId)return;let n=this.engine.renderer.domElement.getBoundingClientRect(),i=new Y(t.x/n.width*2-1,-(t.y/n.height)*2+1),r=new qi;r.setFromCamera(i,this.engine.camera);let o=new A;if(!r.ray.intersectPlane(new pn(new A(0,1,0),0),o))return;let a=this.room;if(Math.abs(o.x)>a.w/2||Math.abs(o.z)>a.d/2){this.hud.select(null);return}let l=a.nav.nearestFree(o.x,o.z);this.fx.spawn("pop",new A(l.x,.08,l.z),{}),Ft.play("click"),e.mainAction?.name==="sleep"&&e.play("wake"),e.brain.run([{type:"walk",to:l,gait:e.traits.energy>.5?"hop":void 0},{type:"act",name:Math.random()<.5?"hop":"lookAround"},{type:"wait",t:3,look:this.engine.camera.position}],"going where you pointed")}enterRoom(t,{instant:e=!1,corner:n=null}={}){let i=this.room;i&&i.setVisible(!1),this.roomId=t;let r=this.room;r.setVisible(!0),this.fx.clear(),this.rig.setRoom(r,n??(t==="post"?3:0)),this.society.onRoomShown(t),this.hud?.onRoomChanged(r),this.store.data.settings.room=t}travel(t){if(!this.rooms[t]||this._traveling)return;this._traveling=!0,Ft.play("door");let e=this.room,n=e.doors.find(l=>l.to===t);n&&(n.target=1);let r=(n?n.holder.getWorldPosition(new A).setY(1.1):new A).clone().project(this.engine.camera),o=(r.x*.5+.5)*100,a=(-r.y*.5+.5)*100;this.hud.iris(o,a,()=>{n&&(n.target=0),this.enterRoom(t,{});let l=this.room.doors.find(c=>c.to===e.id);l&&(l.open=1,l.target=0),Ft.play("whoosh")}).then(()=>{this._traveling=!1})}update(t,e){let n=this.room;this.daylight.update(t,n),Ft.setAmbience(this.daylight.phase==="night"?"night":this.daylight.phase==="morning"?"morning":"day"),this.rig.update(t),this.interaction.update(t),n.update(t,this.engine.camera,e);let i=this.engine.renderer.getDrawingBufferSize(this._buf||(this._buf=new Y));n.motes?.update(t,this.daylight,this.engine.camera,i.y),this.society.update(t,e),this.fx.update(t),this.hud.update(t)}save(){this._noSave||(this.store.data.critters=this.society.serialize(),this.store.data.settings.corner=this.rig.corner,this.store.data.settings.time=this.daylight.presetId,this.store.data.settings.sfx=Ft.sfxOn,this.store.data.settings.music=Ft.musicOn,this.store.save())}start(){this.engine.start(),setTimeout(()=>{let t=this.engine.camera.position;this.society.inRoom(this.roomId).filter(n=>!n.held&&n.mainAction?.name!=="sleep"&&!n.brain.station).sort((n,i)=>n.position.distanceTo(t)-i.position.distanceTo(t)).slice(0,3).forEach((n,i)=>setTimeout(()=>{n.brain.attending=2.5,n.faceToward(t),n.play(i===0?"wave":Math.random()<.5?"hop":"wave",{sound:i===0}),i===0&&n.say($t(["oh! hi!!","you\u2019re here!","hiii :)","welcome back!"]))},400+i*450))},1600)}};async function pb(){try{await Promise.all([document.fonts?.load?.("600 20px Fredoka"),document.fonts?.load?.("20px 'Patrick Hand'")])}catch{}let s=new Rh(document.getElementById("app"));await s.init(),s.start(),window.cozy=s.api,window.__world=s,window.__step=(t=1)=>{s.engine.stop(),s.engine.step(1/60,t)},document.body.classList.add("ready")}pb().catch(s=>{console.error(s);let t=document.createElement("pre");t.className="fatal",t.textContent=`Something went wrong while starting the game:

`+(s&&s.stack?s.stack:String(s)),document.body.appendChild(t)});})();
/*! For license information please see game.js.LEGAL.txt */
