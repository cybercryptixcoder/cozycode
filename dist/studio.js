(()=>{var Ou=0,Wc=1,Bu=2;var $n=1,zu=2,Xs=3,$i=0,Ze=1,vi=2,Fe=0,Dn=1,Jn=2,Xc=3,qc=4,Ho=5;var yi=100,ku=101,Vu=102,Hu=103,Gu=104,Kn=200,Wu=201,Xu=202,qu=203,Yc=204,Zc=205,ia=206,Yu=207,na=208,Zu=209,$u=210,Ju=211,Ku=212,ju=213,Qu=214,ao=0,oo=1,lo=2,As=3,co=4,ho=5,uo=6,fo=7,Go=0,td=1,ed=2,Ni=0,sa=1,ra=2,aa=3,oa=4,la=5,jn=6,Qn=7;var $c=300,Nn=301,ts=302,Wo=303,Xo=304,ca=306,Hi=1e3,Vi=1001,po=1002,Ne=1003,id=1004;var ha=1005;var Ye=1006,qo=1007;var Ji=1008;var Qe=1009,Jc=1010,Kc=1011,qs=1012,Yo=1013,Ui=1014,Mi=1015,Le=1016,Zo=1017,$o=1018,Un=1020,jc=35902,Qc=35899,th=1021,eh=1022,hi=1023,Gi=1026,Ki=1027,Jo=1028,Ko=1029,Fn=1030,jo=1031;var Qo=1033,ua=33776,da=33777,fa=33778,pa=33779,tl=35840,el=35841,il=35842,nl=35843,sl=36196,rl=37492,al=37496,ol=37488,ll=37489,ma=37490,cl=37491,hl=37808,ul=37809,dl=37810,fl=37811,pl=37812,ml=37813,gl=37814,_l=37815,xl=37816,vl=37817,yl=37818,Ml=37819,bl=37820,Sl=37821,Tl=36492,wl=36494,El=36495,Al=36283,Rl=36284,ga=36285,Cl=36286;var br=2300,mo=2301,so=2302,Lc=2303,Dc=2400,Nc=2401,Uc=2402;var nd=3200;var Ys=0,sd=1,pn="",Re="srgb",Sr="srgb-linear",Tr="linear",he="srgb";var ro=7680;var rd=519,ad=512,od=513,ld=514,Pl=515,cd=516,hd=517,Il=518,ud=519,ih=35044;var nh="300 es",Pi=2e3,Rs=2001;function Cf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Pf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dd(){let n=wr("canvas");return n.style.display="block",n}var su={},Cs=null;function Er(...n){let t="THREE."+n.shift();Cs?Cs("log",t,...n):console.log(t,...n)}function fd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qt(...n){n=fd(n);let t="THREE."+n.shift();if(Cs)Cs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Xt(...n){n=fd(n);let t="THREE."+n.shift();if(Cs)Cs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Wn(...n){let t=n.join(" ");t in su||(su[t]=!0,qt(...n))}function pd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var md={[ao]:oo,[lo]:uo,[co]:fo,[As]:ho,[oo]:ao,[uo]:lo,[fo]:co,[ho]:As},Wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rc=Math.PI/180,go=180/Math.PI;function cn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function ie(n,t,e){return Math.max(t,Math.min(e,n))}function If(n,t){return(n%t+t)%t}function ac(n,t,e){return(1-e)*n+e*t}function ki(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ch=class ch{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ch.prototype.isVector2=!0;var j=ch,Xi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),E=Math.sin(S);p=Math.sin(p*S)/E,o=Math.sin(o*S)/E,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},hh=class hh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ru.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ru.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return oc.copy(this).projectOnVector(t),this.sub(oc)}reflect(t){return this.sub(oc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hh.prototype.isVector3=!0;var A=hh,oc=new A,ru=new Xi,uh=class uh{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],S=s[1],E=s[4],x=s[7],T=s[2],M=s[5],C=s[8];return r[0]=a*y+o*S+l*T,r[3]=a*m+o*E+l*M,r[6]=a*p+o*x+l*C,r[1]=c*y+h*S+d*T,r[4]=c*m+h*E+d*M,r[7]=c*p+h*x+d*C,r[2]=u*y+f*S+g*T,r[5]=u*m+f*E+g*M,r[8]=u*p+f*x+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Wn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lc.makeScale(t,e)),this}rotate(t){return Wn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lc.makeRotation(-t)),this}translate(t,e){return Wn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};uh.prototype.isMatrix3=!0;var $t=uh,lc=new $t,au=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lf(){let n={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(s.r=hn(s.r),s.g=hn(s.g),s.b=hn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pn?Tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Wn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Wn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Sr]:{primaries:t,whitePoint:i,transfer:Tr,toXYZ:au,fromXYZ:ou,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:i,transfer:he,toXYZ:au,fromXYZ:ou,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),n}var ee=Lf();function hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ls,_o=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ls===void 0&&(ls=wr("canvas")),ls.width=t.width,ls.height=t.height;let s=ls.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ls}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(hn(e[i]/255)*255):e[i]=hn(e[i]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Df=0,Ps=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=cn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(cc(s[a].image)):r.push(cc(s[a]))}else r=cc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function cc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_o.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var Nf=0,hc=new A,ri=class n extends Wi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Vi,s=Vi,r=Ye,a=Ji,o=hi,l=Qe,c=n.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=cn(),this.name="",this.source=new Ps(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hc).x}get height(){return this.source.getSize(hc).y}get depth(){return this.source.getSize(hc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hi:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hi:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=$c;ri.DEFAULT_ANISOTROPY=1;var dh=class dh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,x=(f+1)/2,T=(p+1)/2,M=(h+u)/4,C=(d+y)/4,v=(g+m)/4;return E>x&&E>T?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=M/i,r=C/i):x>T?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=M/s,r=v/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=C/r,s=v/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-y)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dh.prototype.isVector4=!0;var Se=dh,xo=class extends Wi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new ri(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ps(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ee=class extends xo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ar=class extends ri{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var vo=class extends ri{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Vo=class Vo{constructor(t,e,i,s,r,a,o,l,c,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,y,m)}set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vo().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),a=1/cs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uf,t,Ff)}lookAt(t,e,i){let s=this.elements;return ui.subVectors(t,e),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),bn.crossVectors(i,ui),bn.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),bn.crossVectors(i,ui)),bn.normalize(),Da.crossVectors(ui,bn),s[0]=bn.x,s[4]=Da.x,s[8]=ui.x,s[1]=bn.y,s[5]=Da.y,s[9]=ui.y,s[2]=bn.z,s[6]=Da.z,s[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],S=i[3],E=i[7],x=i[11],T=i[15],M=s[0],C=s[4],v=s[8],w=s[12],P=s[1],I=s[5],N=s[9],B=s[13],D=s[2],z=s[6],Z=s[10],q=s[14],rt=s[3],W=s[7],Q=s[11],tt=s[15];return r[0]=a*M+o*P+l*D+c*rt,r[4]=a*C+o*I+l*z+c*W,r[8]=a*v+o*N+l*Z+c*Q,r[12]=a*w+o*B+l*q+c*tt,r[1]=h*M+d*P+u*D+f*rt,r[5]=h*C+d*I+u*z+f*W,r[9]=h*v+d*N+u*Z+f*Q,r[13]=h*w+d*B+u*q+f*tt,r[2]=g*M+y*P+m*D+p*rt,r[6]=g*C+y*I+m*z+p*W,r[10]=g*v+y*N+m*Z+p*Q,r[14]=g*w+y*B+m*q+p*tt,r[3]=S*M+E*P+x*D+T*rt,r[7]=S*C+E*I+x*z+T*W,r[11]=S*v+E*N+x*Z+T*Q,r[15]=S*w+E*B+x*q+T*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15],S=l*f-c*u,E=o*f-c*d,x=o*u-l*d,T=a*f-c*h,M=a*u-l*h,C=a*d-o*h;return e*(y*S-m*E+p*x)-i*(g*S-m*T+p*M)+s*(g*E-y*T+p*C)-r*(g*x-y*M+m*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],S=e*o-i*a,E=e*l-s*a,x=e*c-r*a,T=i*l-s*o,M=i*c-r*o,C=s*c-r*l,v=h*y-d*g,w=h*m-u*g,P=h*p-f*g,I=d*m-u*y,N=d*p-f*y,B=u*p-f*m,D=S*B-E*N+x*I+T*P-M*w+C*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/D;return t[0]=(o*B-l*N+c*I)*z,t[1]=(s*N-i*B-r*I)*z,t[2]=(y*C-m*M+p*T)*z,t[3]=(u*M-d*C-f*T)*z,t[4]=(l*P-a*B-c*w)*z,t[5]=(e*B-s*P+r*w)*z,t[6]=(m*x-g*C-p*E)*z,t[7]=(h*C-u*x+f*E)*z,t[8]=(a*N-o*P+c*v)*z,t[9]=(i*P-e*N-r*v)*z,t[10]=(g*M-y*x+p*S)*z,t[11]=(d*x-h*M-f*S)*z,t[12]=(o*w-a*I-l*v)*z,t[13]=(e*I-i*w+s*v)*z,t[14]=(y*E-g*T-m*S)*z,t[15]=(h*T-d*E+u*S)*z,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,m=a*d,p=o*d,S=l*c,E=l*h,x=l*d,T=i.x,M=i.y,C=i.z;return s[0]=(1-(y+p))*T,s[1]=(f+x)*T,s[2]=(g-E)*T,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(u+p))*M,s[6]=(m+S)*M,s[7]=0,s[8]=(g+E)*C,s[9]=(m-S)*C,s[10]=(1-(u+y))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=cs.set(s[0],s[1],s[2]).length(),o=cs.set(s[4],s[5],s[6]).length(),l=cs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ai.copy(this);let c=1/a,h=1/o,d=1/l;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=h,Ai.elements[5]*=h,Ai.elements[6]*=h,Ai.elements[8]*=d,Ai.elements[9]*=d,Ai.elements[10]*=d,e.setFromRotationMatrix(Ai),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Pi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Pi)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Rs)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Pi,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Pi)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Rs)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Vo.prototype.isMatrix4=!0;var oe=Vo,cs=new A,Ai=new oe,Uf=new A(0,0,0),Ff=new A(1,1,1),bn=new A,Da=new A,ui=new A,lu=new oe,cu=new Xi,qi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return lu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cu.setFromEuler(this),this.setFromQuaternion(cu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qi.DEFAULT_ORDER="XYZ";var Is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Of=0,hu=new A,hs=new Xi,nn=new oe,Na=new A,hr=new A,Bf=new A,zf=new Xi,uu=new A(1,0,0),du=new A(0,1,0),fu=new A(0,0,1),pu={type:"added"},kf={type:"removed"},us={type:"childadded",child:null},uc={type:"childremoved",child:null},Ve=class n extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new A,e=new qi,i=new Xi,s=new A(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new $t}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(uu,t)}rotateY(t){return this.rotateOnAxis(du,t)}rotateZ(t){return this.rotateOnAxis(fu,t)}translateOnAxis(t,e){return hu.copy(t).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uu,t)}translateY(t){return this.translateOnAxis(du,t)}translateZ(t){return this.translateOnAxis(fu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Na.copy(t):Na.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(hr,Na,this.up):nn.lookAt(Na,hr,this.up),this.quaternion.setFromRotationMatrix(nn),s&&(nn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(nn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pu),us.child=t,this.dispatchEvent(us),us.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kf),uc.child=t,this.dispatchEvent(uc),uc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pu),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,Bf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,zf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new A(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ue=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vf={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ue;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function dc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Lt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ee.workingColorSpace){if(t=If(t,1),e=ie(e,0,1),i=ie(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=dc(a,r,t+1/3),this.g=dc(a,r,t),this.b=dc(a,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Re){function i(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let i=gd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hn(t.r),this.g=hn(t.g),this.b=hn(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return ee.workingToColorSpace(je.copy(this),t),Math.round(ie(je.r*255,0,255))*65536+Math.round(ie(je.g*255,0,255))*256+Math.round(ie(je.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(je.copy(this),e);let i=je.r,s=je.g,r=je.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Re){ee.workingToColorSpace(je.copy(this),t);let e=je.r,i=je.g,s=je.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(Ua);let i=ac(Sn.h,Ua.h,e),s=ac(Sn.s,Ua.s,e),r=ac(Sn.l,Ua.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Lt;Lt.NAMES=gd;var Xn=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ri=new A,sn=new A,fc=new A,rn=new A,ds=new A,fs=new A,mu=new A,pc=new A,mc=new A,gc=new A,_c=new Se,xc=new Se,vc=new Se,ln=class n{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ri.subVectors(t,e),s.cross(Ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ri.subVectors(s,e),sn.subVectors(i,e),fc.subVectors(t,e);let a=Ri.dot(Ri),o=Ri.dot(sn),l=Ri.dot(fc),c=sn.dot(sn),h=sn.dot(fc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rn.x),l.addScaledVector(a,rn.y),l.addScaledVector(o,rn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return _c.setScalar(0),xc.setScalar(0),vc.setScalar(0),_c.fromBufferAttribute(t,e),xc.fromBufferAttribute(t,i),vc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(_c,r.x),a.addScaledVector(xc,r.y),a.addScaledVector(vc,r.z),a}static isFrontFacing(t,e,i,s){return Ri.subVectors(i,e),sn.subVectors(t,e),Ri.cross(sn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Ri.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;ds.subVectors(s,i),fs.subVectors(r,i),pc.subVectors(t,i);let l=ds.dot(pc),c=fs.dot(pc);if(l<=0&&c<=0)return e.copy(i);mc.subVectors(t,s);let h=ds.dot(mc),d=fs.dot(mc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ds,a);gc.subVectors(t,r);let f=ds.dot(gc),g=fs.dot(gc);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(fs,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return mu.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(mu,o);let p=1/(m+y+u);return a=y*p,o=u*p,e.copy(i).addScaledVector(ds,a).addScaledVector(fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yi=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ci):Ci.fromBufferAttribute(r,a),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(t.matrixWorld),this.union(Fa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Oa.subVectors(this.max,ur),ps.subVectors(t.a,ur),ms.subVectors(t.b,ur),gs.subVectors(t.c,ur),Tn.subVectors(ms,ps),wn.subVectors(gs,ms),zn.subVectors(ps,gs);let e=[0,-Tn.z,Tn.y,0,-wn.z,wn.y,0,-zn.z,zn.y,Tn.z,0,-Tn.x,wn.z,0,-wn.x,zn.z,0,-zn.x,-Tn.y,Tn.x,0,-wn.y,wn.x,0,-zn.y,zn.x,0];return!yc(e,ps,ms,gs,Oa)||(e=[1,0,0,0,1,0,0,0,1],!yc(e,ps,ms,gs,Oa))?!1:(Ba.crossVectors(Tn,wn),e=[Ba.x,Ba.y,Ba.z],yc(e,ps,ms,gs,Oa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},an=[new A,new A,new A,new A,new A,new A,new A,new A],Ci=new A,Fa=new Yi,ps=new A,ms=new A,gs=new A,Tn=new A,wn=new A,zn=new A,ur=new A,Oa=new A,Ba=new A,kn=new A;function yc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){kn.fromArray(n,r);let o=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),l=t.dot(kn),c=e.dot(kn),h=i.dot(kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ze=new A,za=new j,Hf=0,li=class extends Wi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ih,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)za.fromBufferAttribute(this,e),za.applyMatrix3(t),this.setXY(e,za.x,za.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ki(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Rr=class extends li{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Cr=class extends li{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ne=class extends li{constructor(t,e,i){super(new Float32Array(t),e,i)}},Gf=new Yi,dr=new A,Mc=new A,An=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Gf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);let e=dr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(dr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(Mc)),this.expandByPoint(dr.copy(t.center).sub(Mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Wf=0,xi=new oe,bc=new Ve,_s=new A,di=new Yi,fr=new Yi,Xe=new A,Ue=class n extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cf(t)?Cr:Rr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,e,i){return xi.makeTranslation(t,e,i),this.applyMatrix4(xi),this}scale(t,e,i){return xi.makeScale(t,e,i),this.applyMatrix4(xi),this}lookAt(t){return bc.lookAt(t),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];di.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let i=this.boundingSphere.center;if(di.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(di.min,fr.min),di.expandByPoint(Xe),Xe.addVectors(di.max,fr.max),di.expandByPoint(Xe)):(di.expandByPoint(fr.min),di.expandByPoint(fr.max))}di.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xe.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(t,c),Xe.add(_s)),s=Math.max(s,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new li(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new A,l[v]=new A;let c=new A,h=new A,d=new A,u=new j,f=new j,g=new j,y=new A,m=new A;function p(v,w,P){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,P),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,P),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[v].add(y),o[w].add(y),o[P].add(y),l[v].add(m),l[w].add(m),l[P].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,w=S.length;v<w;++v){let P=S[v],I=P.start,N=P.count;for(let B=I,D=I+N;B<D;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let E=new A,x=new A,T=new A,M=new A;function C(v){T.fromBufferAttribute(s,v),M.copy(T);let w=o[v];E.copy(w),E.sub(T.multiplyScalar(T.dot(w))).normalize(),x.crossVectors(M,w);let I=x.dot(l[v])<0?-1:1;a.setXYZW(v,E.x,E.y,E.z,I)}for(let v=0,w=S.length;v<w;++v){let P=S[v],I=P.start,N=P.count;for(let B=I,D=I+N;B<D;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new li(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new A,r=new A,a=new A,o=new A,l=new A,c=new A,h=new A,d=new A;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new li(u,h,d)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},yo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ih,this.updateRanges=[],this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},si=new A,Pr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)si.fromBufferAttribute(this,e),si.applyMatrix4(t),this.setXYZ(e,si.x,si.y,si.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)si.fromBufferAttribute(this,e),si.applyNormalMatrix(t),this.setXYZ(e,si.x,si.y,si.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)si.fromBufferAttribute(this,e),si.transformDirection(t),this.setXYZ(e,si.x,si.y,si.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ki(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ki(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ki(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ki(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ki(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new li(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Sc=new A,Xf=new A,qf=new $t,fi=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Sc.subVectors(i,e).cross(Xf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Sc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||qf.getNormalMatrix(t),s=this.coplanarPoint(Sc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Yf=0,Ii=class extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=cn(),this.name="",this.type="Material",this.blending=Dn,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=Zc,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new fi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new j().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new j().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ds=class extends Ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xs,pr=new A,vs=new A,ys=new A,Ms=new j,mr=new j,_d=new oe,ka=new A,gr=new A,Va=new A,gu=new j,Tc=new j,_u=new j,Ir=class extends Ve{constructor(t=new Ds){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new Ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new yo(e,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Pr(i,3,0,!1)),xs.setAttribute("uv",new Pr(i,2,3,!1))}this.geometry=xs,this.material=t,this.center=new j(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Xt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),_d.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-ys.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ha(ka.set(-.5,-.5,0),ys,a,vs,s,r),Ha(gr.set(.5,-.5,0),ys,a,vs,s,r),Ha(Va.set(.5,.5,0),ys,a,vs,s,r),gu.set(0,0),Tc.set(1,0),_u.set(1,1);let o=t.ray.intersectTriangle(ka,gr,Va,!1,pr);if(o===null&&(Ha(gr.set(-.5,.5,0),ys,a,vs,s,r),Tc.set(0,1),o=t.ray.intersectTriangle(ka,Va,gr,!1,pr),o===null))return;let l=t.ray.origin.distanceTo(pr);l<t.near||l>t.far||e.push({distance:l,point:pr.clone(),uv:ln.getInterpolation(pr,ka,gr,Va,gu,Tc,_u,new j),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ha(n,t,e,i,s,r){Ms.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(mr.x=r*Ms.x-s*Ms.y,mr.y=s*Ms.x+r*Ms.y):mr.copy(Ms),n.copy(t),n.x+=mr.x,n.y+=mr.y,n.applyMatrix4(_d)}var on=new A,wc=new A,Ga=new A,Wa=new A,Lr=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){wc.copy(t).add(e).multiplyScalar(.5),Ga.copy(e).sub(t).normalize(),Wa.copy(this.origin).sub(wc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ga),o=Wa.dot(this.direction),l=-Wa.dot(Ga),c=Wa.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(wc).addScaledVector(Ga,u),f}intersectSphere(t,e){if(t.radius<0)return null;on.subVectors(t.center,this.origin);let i=on.dot(this.direction),s=on.dot(on)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=i.x-a.x,S=i.y-a.y,E=i.z-a.z,x=Math.abs(l),T=Math.abs(c),M=Math.abs(h),C,v,w,P,I,N,B,D,z,Z,q,rt;if(x>=T&&x>=M?(w=l,N=d,z=g,rt=p,l>=0?(C=c,v=h,P=u,I=f,B=y,D=m,Z=S,q=E):(C=h,v=c,P=f,I=u,B=m,D=y,Z=E,q=S)):T>=M?(w=c,N=u,z=y,rt=S,c>=0?(C=h,v=l,P=f,I=d,B=m,D=g,Z=E,q=p):(C=l,v=h,P=d,I=f,B=g,D=m,Z=p,q=E)):(w=h,N=f,z=m,rt=E,h>=0?(C=l,v=c,P=d,I=u,B=g,D=y,Z=p,q=S):(C=c,v=l,P=u,I=d,B=y,D=g,Z=S,q=p)),w===0)return null;let W=C/w,Q=v/w,tt=1/w,Rt=P-W*N,Et=I-Q*N,J=B-W*z,ct=D-Q*z,yt=Z-W*rt,k=q-Q*rt,X=yt*ct-k*J,et=Rt*k-Et*yt,xt=J*Et-ct*Rt;if(s){if(X<0||et<0||xt<0)return null}else if((X<0||et<0||xt<0)&&(X>0||et>0||xt>0))return null;let ft=X+et+xt;if(ft===0)return null;let Bt=tt*(X*N+et*z+xt*rt);return(ft>0?Bt<0:Bt>0)?null:this.at(Bt/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},un=class extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},xu=new oe,Vn=new Lr,Xa=new An,vu=new A,qa=new A,Ya=new A,Za=new A,Ec=new A,$a=new A,yu=new A,Ja=new A,Jt=class extends Ve{constructor(t=new Ue,e=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){$a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Ec.fromBufferAttribute(d,t),a?$a.addScaledVector(Ec,h):$a.addScaledVector(Ec.sub(e),h))}e.add($a)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(r),Vn.copy(t.ray).recast(t.near),!(Xa.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Xa,vu)===null||Vn.origin.distanceToSquared(vu)>(t.far-t.near)**2))&&(xu.copy(r).invert(),Vn.copy(t.ray).applyMatrix4(xu),!(i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,T=E;x<T;x+=3){let M=o.getX(x),C=o.getX(x+1),v=o.getX(x+2);s=Ka(this,p,t,i,c,h,d,M,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);s=Ka(this,a,t,i,c,h,d,S,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,T=E;x<T;x+=3){let M=x,C=x+1,v=x+2;s=Ka(this,p,t,i,c,h,d,M,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=m,E=m+1,x=m+2;s=Ka(this,a,t,i,c,h,d,S,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Zf(n,t,e,i,s,r,a,o){let l;if(t.side===Ze?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===$i,o),l===null)return null;Ja.copy(o),Ja.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ja);return c<e.near||c>e.far?null:{distance:c,point:Ja.clone(),object:n}}function Ka(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,qa),n.getVertexPosition(l,Ya),n.getVertexPosition(c,Za);let h=Zf(n,t,e,i,qa,Ya,Za,yu);if(h){let d=new A;ln.getBarycoord(yu,qa,Ya,Za,d),s&&(h.uv=ln.getInterpolatedAttribute(s,o,l,c,d,new j)),r&&(h.uv1=ln.getInterpolatedAttribute(r,o,l,c,d,new j)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,l,c,d,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new A,materialIndex:0};ln.getNormal(qa,Ya,Za,u.normal),h.face=u,h.barycoord=d}return h}var dn=class extends ri{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ne,h=Ne,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dr=class extends li{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},bs=new oe,Mu=new oe,ja=[],bu=new Yi,$f=new oe,_r=new Jt,xr=new An,Nr=class extends Jt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Dr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,$f)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,bs),bu.copy(t.boundingBox).applyMatrix4(bs),this.boundingBox.union(bu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,bs),xr.copy(t.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(i),t.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),Mu.multiplyMatrices(i,bs),_r.matrixWorld=Mu,_r.raycast(t,ja);for(let a=0,o=ja.length;a<o;a++){let l=ja[a];l.instanceId=r,l.object=this,e.push(l)}ja.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new dn(new Float32Array(s*this.count),s,this.count,Jo,Mi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hn=new An,Jf=new j(.5,.5),Qa=new A,Ns=class{constructor(t=new fi,e=new fi,i=new fi,s=new fi,r=new fi,a=new fi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],S=r[12],E=r[13],x=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,p-g,T-S).normalize(),s[1].setComponents(c+a,f+h,p+g,T+S).normalize(),s[2].setComponents(c+o,f+d,p+y,T+E).normalize(),s[3].setComponents(c-o,f-d,p-y,T-E).normalize(),i)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,f-u,p-m,T-x).normalize();else if(s[4].setComponents(c-l,f-u,p-m,T-x).normalize(),e===Pi)s[5].setComponents(c+l,f+u,p+m,T+x).normalize();else if(e===Rs)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){Hn.center.set(0,0,0);let e=Jf.distanceTo(t.center);return Hn.radius=.7071067811865476+e,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Qa.x=s.normal.x>0?t.max.x:t.min.x,Qa.y=s.normal.y>0?t.max.y:t.min.y,Qa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ur=class extends ri{constructor(t=[],e=Nn,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Li=class extends ri{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zi=class extends ri{constructor(t,e,i=Ui,s,r,a,o=Ne,l=Ne,c,h=Gi,d=1){if(h!==Gi&&h!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ps(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Mo=class extends Zi{constructor(t,e=Ui,i=Nn,s,r,a=Ne,o=Ne,l,c=Gi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Fr=class extends ri{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Di=class n extends Ue{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(d,2));function g(y,m,p,S,E,x,T,M,C,v,w){let P=x/C,I=T/v,N=x/2,B=T/2,D=M/2,z=C+1,Z=v+1,q=0,rt=0,W=new A;for(let Q=0;Q<Z;Q++){let tt=Q*I-B;for(let Rt=0;Rt<z;Rt++){let Et=Rt*P-N;W[y]=Et*S,W[m]=tt*E,W[p]=D,c.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[p]=M>0?1:-1,h.push(W.x,W.y,W.z),d.push(Rt/C),d.push(1-Q/v),q+=1}}for(let Q=0;Q<v;Q++)for(let tt=0;tt<C;tt++){let Rt=u+tt+z*Q,Et=u+tt+z*(Q+1),J=u+(tt+1)+z*(Q+1),ct=u+(tt+1)+z*Q;l.push(Rt,Et,ct),l.push(Et,J,ct),rt+=6}o.addGroup(f,rt,w),f+=rt,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Us=class n extends Ue{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,g=i*2+r,y=s+1,m=new A,p=new A;for(let S=0;S<=g;S++){let E=0,x=0,T=0,M=0;if(S<=i){let w=S/i,P=w*Math.PI/2;x=-h-t*Math.cos(P),T=t*Math.sin(P),M=-t*Math.cos(P),E=w*d}else if(S<=i+r){let w=(S-i)/r;x=-h+w*e,T=t,M=0,E=d+w*u}else{let w=(S-i-r)/i,P=w*Math.PI/2;x=h+t*Math.sin(P),T=t*Math.cos(P),M=t*Math.sin(P),E=d+u+w*d}let C=Math.max(0,Math.min(1,E/f)),v=0;S===0?v=.5/s:S===g&&(v=-.5/s);for(let w=0;w<=s;w++){let P=w/s,I=P*Math.PI*2,N=Math.sin(I),B=Math.cos(I);p.x=-T*B,p.y=x,p.z=T*N,o.push(p.x,p.y,p.z),m.set(-T*B,M,T*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+v,C)}if(S>0){let w=(S-1)*y;for(let P=0;P<s;P++){let I=w+P,N=w+P+1,B=S*y+P,D=S*y+P+1;a.push(I,N,B),a.push(N,D,B)}}}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Fs=class n extends Ue{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new A,h=new j;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fn=class n extends Ue{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=i/2,p=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2));function S(){let x=new A,T=new A,M=0,C=(e-t)/i;for(let v=0;v<=r;v++){let w=[],P=v/r,I=P*(e-t)+t;for(let N=0;N<=s;N++){let B=N/s,D=B*l+o,z=Math.sin(D),Z=Math.cos(D);T.x=I*z,T.y=-P*i+m,T.z=I*Z,d.push(T.x,T.y,T.z),x.set(z,C,Z).normalize(),u.push(x.x,x.y,x.z),f.push(B,1-P),w.push(g++)}y.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let P=y[w][v],I=y[w+1][v],N=y[w+1][v+1],B=y[w][v+1];(t>0||w!==0)&&(h.push(P,I,B),M+=3),(e>0||w!==r-1)&&(h.push(I,N,B),M+=3)}c.addGroup(p,M,0),p+=M}function E(x){let T=g,M=new j,C=new A,v=0,w=x===!0?t:e,P=x===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),g++;let I=g;for(let N=0;N<=s;N++){let D=N/s*l+o,z=Math.cos(D),Z=Math.sin(D);C.x=w*Z,C.y=m*P,C.z=w*z,d.push(C.x,C.y,C.z),u.push(0,P,0),M.x=z*.5+.5,M.y=Z*.5*P+.5,f.push(M.x,M.y),g++}for(let N=0;N<s;N++){let B=T+N,D=I+N;x===!0?h.push(D,D+1,B):h.push(D+1,D,B),v+=3}c.addGroup(p,v,x===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new j:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new A,s=[],r=[],a=[],o=new A,l=new oe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ie(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ie(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Os=class extends pi{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new j){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},bo=class extends Os{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function sh(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Su=new A,Tu=new A,Ac=new sh,Rc=new sh,Cc=new sh,Bs=class extends pi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new A){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Tu.subVectors(s[0],s[1]).add(s[0]),c=Tu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Su.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Su),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ac.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),Rc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),Cc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Ac.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Rc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Cc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Ac.calc(l),Rc.calc(l),Cc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function wu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Kf(n,t){let e=1-n;return e*e*t}function jf(n,t){return 2*(1-n)*n*t}function Qf(n,t){return n*n*t}function yr(n,t,e,i){return Kf(n,t)+jf(n,e)+Qf(n,i)}function tp(n,t){let e=1-n;return e*e*e*t}function ep(n,t){let e=1-n;return 3*e*e*n*t}function ip(n,t){return 3*(1-n)*n*n*t}function np(n,t){return n*n*n*t}function Mr(n,t,e,i,s){return tp(n,t)+ep(n,e)+ip(n,i)+np(n,s)}var Or=class extends pi{constructor(t=new j,e=new j,i=new j,s=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new j){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Mr(t,s.x,r.x,a.x,o.x),Mr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},So=class extends pi{constructor(t=new A,e=new A,i=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new A){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Mr(t,s.x,r.x,a.x,o.x),Mr(t,s.y,r.y,a.y,o.y),Mr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Br=class extends pi{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends pi{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zr=class extends pi{constructor(t=new j,e=new j,i=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new j){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(yr(t,s.x,r.x,a.x),yr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kr=class extends pi{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(yr(t,s.x,r.x,a.x),yr(t,s.y,r.y,a.y),yr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rn=class extends pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(wu(o,l.x,c.x,h.x,d.x),wu(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new j().fromArray(s))}return this}},wo=Object.freeze({__proto__:null,ArcCurve:bo,CatmullRomCurve3:Bs,CubicBezierCurve:Or,CubicBezierCurve3:So,EllipseCurve:Os,LineCurve:Br,LineCurve3:To,QuadraticBezierCurve:zr,QuadraticBezierCurve3:kr,SplineCurve:Rn}),Eo=class extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wo[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new wo[s.type]().fromJSON(s))}return this}},Vr=class extends Eo{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Br(this.currentPoint.clone(),new j(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new zr(this.currentPoint.clone(),new j(t,e),new j(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Or(this.currentPoint.clone(),new j(t,e),new j(i,s),new j(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Rn(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new Os(t,e,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},zs=class extends Vr{constructor(t){super(t),this.uuid=cn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Vr().fromJSON(s))}return this}};function sp(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=xd(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=cp(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=n[u],g=n[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Hr(r,a,e,o,l,c,0),a}function xd(n,t,e,i,s){let r;if(s===yp(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Eu(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Eu(a/i|0,n[a],n[a+1],r);return r&&ks(r,r.next)&&(Wr(r),r=r.next),r}function qn(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ks(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Wr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Hr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&pp(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?ap(n,i,s,r):rp(n)){t.push(l.i,n.i,c.i),Wr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=op(qn(n),t),Hr(n,t,e,i,s,r,2)):a===2&&lp(n,t,e,i,s,r):Hr(qn(n),t,e,i,s,r,1);break}}}function rp(n){let t=n.prev,e=n,i=n.next;if(Ce(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&vr(s,o,r,l,a,c,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ap(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Ce(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),y=Math.max(o,l,c),m=Math.max(h,d,u),p=Fc(f,g,t,e,i),S=Fc(y,m,t,e,i),E=n.prevZ,x=n.nextZ;for(;E&&E.z>=p&&x&&x.z<=S;){if(E.x>=f&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&vr(o,h,l,d,c,u,E.x,E.y)&&Ce(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&vr(o,h,l,d,c,u,x.x,x.y)&&Ce(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&vr(o,h,l,d,c,u,E.x,E.y)&&Ce(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&vr(o,h,l,d,c,u,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function op(n,t){let e=n;do{let i=e.prev,s=e.next.next;!ks(i,s)&&yd(i,e,e.next,s)&&Gr(i,s)&&Gr(s,i)&&(t.push(i.i,e.i,s.i),Wr(e),Wr(e.next),e=n=s),e=e.next}while(e!==n);return qn(e)}function lp(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&_p(a,o)){let l=Md(a,o);a=qn(a,a.next),l=qn(l,l.next),Hr(a,t,e,i,s,r,0),Hr(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function cp(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=xd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(gp(c))}s.sort(hp);for(let r=0;r<s.length;r++)e=up(s[r],e);return e}function hp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function up(n,t){let e=dp(n,t);if(!e)return t;let i=Md(e,n);return qn(i,i.next),qn(e,e.next)}function dp(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(ks(n,e))return e;do{if(ks(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&vd(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);Gr(e,n)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&fp(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function fp(n,t){return Ce(n.prev,n,t.prev)<0&&Ce(t.next,n,n.next)<0}function pp(n,t,e,i){let s=n;do s.z===0&&(s.z=Fc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,mp(s)}function mp(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Fc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function gp(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function vd(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function vr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&vd(n,t,e,i,s,r,a,o)}function _p(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!xp(n,t)&&(Gr(n,t)&&Gr(t,n)&&vp(n,t)&&(Ce(n.prev,n,t.prev)||Ce(n,t.prev,t))||ks(n,t)&&Ce(n.prev,n,n.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ks(n,t){return n.x===t.x&&n.y===t.y}function yd(n,t,e,i){let s=eo(Ce(n,t,e)),r=eo(Ce(n,t,i)),a=eo(Ce(e,i,n)),o=eo(Ce(e,i,t));return!!(s!==r&&a!==o||s===0&&to(n,e,t)||r===0&&to(n,i,t)||a===0&&to(e,n,i)||o===0&&to(e,t,i))}function to(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function eo(n){return n>0?1:n<0?-1:0}function xp(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&yd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Gr(n,t){return Ce(n.prev,n,n.next)<0?Ce(n,t,n.next)>=0&&Ce(n,n.prev,t)>=0:Ce(n,t,n.prev)<0||Ce(n,n.next,t)<0}function vp(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Md(n,t){let e=Oc(n.i,n.x,n.y),i=Oc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Eu(n,t,e,i){let s=Oc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Wr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Oc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yp(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Bc=class{static triangulate(t,e,i=2){return sp(t,e,i)}},Gn=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Au(t),Ru(i,t);let a=t.length;e.forEach(Au);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Ru(i,e[l]);let o=Bc.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Au(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ru(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Xr=class n extends Ue{constructor(t=new zs([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Mp,E,x=!1,T,M,C,v;if(p){E=p.getSpacedPoints(h),x=!0,u=!1;let it=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(h,it),M=new A,C=new A,v=new A}u||(m=0,f=0,g=0,y=0);let w=o.extractPoints(c),P=w.shape,I=w.holes;if(!Gn.isClockWise(P)){P=P.reverse();for(let it=0,at=I.length;it<at;it++){let ht=I[it];Gn.isClockWise(ht)&&(I[it]=ht.reverse())}}function B(it){let ht=10000000000000001e-36,ut=it[0];for(let pt=1;pt<=it.length;pt++){let Ht=pt%it.length,zt=it[Ht],Gt=zt.x-ut.x,Yt=zt.y-ut.y,L=Gt*Gt+Yt*Yt,le=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(ut.x),Math.abs(ut.y)),Kt=ht*le*le;if(L<=Kt){it.splice(Ht,1),pt--;continue}ut=zt}}B(P),I.forEach(B);let D=I.length,z=P;for(let it=0;it<D;it++){let at=I[it];P=P.concat(at)}function Z(it,at,ht){return at||Xt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(at,ht)}let q=P.length;function rt(it,at,ht){let ut,pt,Ht,zt=it.x-at.x,Gt=it.y-at.y,Yt=ht.x-it.x,L=ht.y-it.y,le=zt*zt+Gt*Gt,Kt=zt*L-Gt*Yt;if(Math.abs(Kt)>Number.EPSILON){let R=Math.sqrt(le),_=Math.sqrt(Yt*Yt+L*L),O=at.x-Gt/R,V=at.y+zt/R,$=ht.x-L/_,dt=ht.y+Yt/_,mt=(($-O)*L-(dt-V)*Yt)/(zt*L-Gt*Yt);ut=O+zt*mt-it.x,pt=V+Gt*mt-it.y;let K=ut*ut+pt*pt;if(K<=2)return new j(ut,pt);Ht=Math.sqrt(K/2)}else{let R=!1;zt>Number.EPSILON?Yt>Number.EPSILON&&(R=!0):zt<-Number.EPSILON?Yt<-Number.EPSILON&&(R=!0):Math.sign(Gt)===Math.sign(L)&&(R=!0),R?(ut=-Gt,pt=zt,Ht=Math.sqrt(le)):(ut=zt,pt=Gt,Ht=Math.sqrt(le/2))}return new j(ut/Ht,pt/Ht)}let W=[];for(let it=0,at=z.length,ht=at-1,ut=it+1;it<at;it++,ht++,ut++)ht===at&&(ht=0),ut===at&&(ut=0),W[it]=rt(z[it],z[ht],z[ut]);let Q=[],tt,Rt=W.concat();for(let it=0,at=D;it<at;it++){let ht=I[it];tt=[];for(let ut=0,pt=ht.length,Ht=pt-1,zt=ut+1;ut<pt;ut++,Ht++,zt++)Ht===pt&&(Ht=0),zt===pt&&(zt=0),tt[ut]=rt(ht[ut],ht[Ht],ht[zt]);Q.push(tt),Rt=Rt.concat(tt)}let Et;if(m===0)Et=Gn.triangulateShape(z,I);else{let it=[],at=[];for(let ht=0;ht<m;ht++){let ut=ht/m,pt=f*Math.cos(ut*Math.PI/2),Ht=g*Math.sin(ut*Math.PI/2)+y;for(let zt=0,Gt=z.length;zt<Gt;zt++){let Yt=Z(z[zt],W[zt],Ht);et(Yt.x,Yt.y,-pt),ut===0&&it.push(Yt)}for(let zt=0,Gt=D;zt<Gt;zt++){let Yt=I[zt];tt=Q[zt];let L=[];for(let le=0,Kt=Yt.length;le<Kt;le++){let R=Z(Yt[le],tt[le],Ht);et(R.x,R.y,-pt),ut===0&&L.push(R)}ut===0&&at.push(L)}}Et=Gn.triangulateShape(it,at)}let J=Et.length,ct=g+y;for(let it=0;it<q;it++){let at=u?Z(P[it],Rt[it],ct):P[it];x?(C.copy(T.normals[0]).multiplyScalar(at.x),M.copy(T.binormals[0]).multiplyScalar(at.y),v.copy(E[0]).add(C).add(M),et(v.x,v.y,v.z)):et(at.x,at.y,0)}for(let it=1;it<=h;it++)for(let at=0;at<q;at++){let ht=u?Z(P[at],Rt[at],ct):P[at];x?(C.copy(T.normals[it]).multiplyScalar(ht.x),M.copy(T.binormals[it]).multiplyScalar(ht.y),v.copy(E[it]).add(C).add(M),et(v.x,v.y,v.z)):et(ht.x,ht.y,d/h*it)}for(let it=m-1;it>=0;it--){let at=it/m,ht=f*Math.cos(at*Math.PI/2),ut=g*Math.sin(at*Math.PI/2)+y;for(let pt=0,Ht=z.length;pt<Ht;pt++){let zt=Z(z[pt],W[pt],ut);et(zt.x,zt.y,d+ht)}for(let pt=0,Ht=I.length;pt<Ht;pt++){let zt=I[pt];tt=Q[pt];for(let Gt=0,Yt=zt.length;Gt<Yt;Gt++){let L=Z(zt[Gt],tt[Gt],ut);x?et(L.x,L.y+E[h-1].y,E[h-1].x+ht):et(L.x,L.y,d+ht)}}}yt(),k();function yt(){let it=s.length/3;if(u){let at=0,ht=q*at;for(let ut=0;ut<J;ut++){let pt=Et[ut];xt(pt[2]+ht,pt[1]+ht,pt[0]+ht)}at=h+m*2,ht=q*at;for(let ut=0;ut<J;ut++){let pt=Et[ut];xt(pt[0]+ht,pt[1]+ht,pt[2]+ht)}}else{for(let at=0;at<J;at++){let ht=Et[at];xt(ht[2],ht[1],ht[0])}for(let at=0;at<J;at++){let ht=Et[at];xt(ht[0]+q*h,ht[1]+q*h,ht[2]+q*h)}}i.addGroup(it,s.length/3-it,0)}function k(){let it=s.length/3,at=0;X(z,at),at+=z.length;for(let ht=0,ut=I.length;ht<ut;ht++){let pt=I[ht];X(pt,at),at+=pt.length}i.addGroup(it,s.length/3-it,1)}function X(it,at){let ht=it.length;for(;--ht>=0;){let ut=ht,pt=ht-1;pt<0&&(pt=it.length-1);for(let Ht=0,zt=h+m*2;Ht<zt;Ht++){let Gt=q*Ht,Yt=q*(Ht+1),L=at+ut+Gt,le=at+pt+Gt,Kt=at+pt+Yt,R=at+ut+Yt;ft(L,le,Kt,R)}}}function et(it,at,ht){l.push(it),l.push(at),l.push(ht)}function xt(it,at,ht){Bt(it),Bt(at),Bt(ht);let ut=s.length/3,pt=S.generateTopUV(i,s,ut-3,ut-2,ut-1);se(pt[0]),se(pt[1]),se(pt[2])}function ft(it,at,ht,ut){Bt(it),Bt(at),Bt(ut),Bt(at),Bt(ht),Bt(ut);let pt=s.length/3,Ht=S.generateSideWallUV(i,s,pt-6,pt-3,pt-2,pt-1);se(Ht[0]),se(Ht[1]),se(Ht[3]),se(Ht[1]),se(Ht[2]),se(Ht[3])}function Bt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function se(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return bp(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new wo[s.type]().fromJSON(s)),new n(i,t.options)}},Mp={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new j(r,a),new j(o,l),new j(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new j(a,1-l),new j(c,1-d),new j(u,1-g),new j(y,1-p)]:[new j(o,1-l),new j(h,1-d),new j(f,1-g),new j(m,1-p)]}};function bp(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Yn=class n extends Ue{constructor(t=[new j(0,-.5),new j(.5,0),new j(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ie(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new A,u=new j,f=new A,g=new A,y=new A,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let S=0;S<=e;S++){let E=i+S*h*s,x=Math.sin(E),T=Math.cos(E);for(let M=0;M<=t.length-1;M++){d.x=t[M].x*x,d.y=t[M].y,d.z=t[M].x*T,a.push(d.x,d.y,d.z),u.x=S/e,u.y=M/(t.length-1),o.push(u.x,u.y);let C=l[3*M+0]*x,v=l[3*M+1],w=l[3*M+0]*T;c.push(C,v,w)}}for(let S=0;S<e;S++)for(let E=0;E<t.length-1;E++){let x=E+S*t.length,T=x,M=x+t.length,C=x+t.length+1,v=x+1;r.push(T,M,v),r.push(C,v,M)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("uv",new ne(o,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Vs=class n extends Ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let S=p*u-a;for(let E=0;E<c;E++){let x=E*d-r;g.push(x,-S,0),y.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let E=S+c*p,x=S+c*(p+1),T=S+1+c*(p+1),M=S+1+c*p;f.push(E,x,M),f.push(x,T,M)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(y,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var ci=class n extends Ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new A,u=new A,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let S=[],E=p/i,x=a+E*o,T=t*Math.cos(x),M=Math.sqrt(t*t-T*T),C=0;p===0&&a===0?C=.5/e:p===i&&l===Math.PI&&(C=-.5/e);for(let v=0;v<=e;v++){let w=v/e,P=s+w*r;d.x=-M*Math.cos(P),d.y=T,d.z=M*Math.sin(P),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(w+C,1-E),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){let E=h[p][S+1],x=h[p][S],T=h[p+1][S],M=h[p+1][S+1];(p!==0||a>0)&&f.push(E,x,M),(p!==i-1||l<Math.PI)&&f.push(x,T,M)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(y,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Zn=class n extends Ue{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new A,f=new A,g=new A;for(let y=0;y<=i;y++){let m=a+y/i*o;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(S),f.y=(t+e*Math.cos(m))*Math.sin(S),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,S=(s+1)*(y-1)+m-1,E=(s+1)*(y-1)+m,x=(s+1)*y+m;l.push(p,S,x),l.push(S,E,x)}this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var qr=class n extends Ue{constructor(t=new kr(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new j,h=new A,d=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2));function y(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),S(),p()}function m(E){h=t.getPointAt(E/e,h);let x=a.normals[E],T=a.binormals[E];for(let M=0;M<=s;M++){let C=M/s*Math.PI*2,v=Math.sin(C),w=-Math.cos(C);l.x=w*x.x+v*T.x,l.y=w*x.y+v*T.y,l.z=w*x.z+v*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=e;E++)for(let x=1;x<=s;x++){let T=(s+1)*(E-1)+(x-1),M=(s+1)*E+(x-1),C=(s+1)*E+x,v=(s+1)*(E-1)+x;g.push(T,M,v),g.push(M,C,v)}}function S(){for(let E=0;E<=e;E++)for(let x=0;x<=s;x++)c.x=E/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new wo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function es(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Cu(s))s.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Cu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function ti(n){let t={};for(let e=0;e<n.length;e++){let i=es(n[e]);for(let s in i)t[s]=i[s]}return t}function Cu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Sp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function rh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var ai={clone:es,merge:ti},Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ye=class extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=Sp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Lt().setHex(s.value);break;case"v2":this.uniforms[i].value=new j().fromArray(s.value);break;case"v3":this.uniforms[i].value=new A().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[i].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[i].value=new oe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Hs=class extends ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ke=class extends Ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ys,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Yr=class extends Ii{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ys,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},Zr=class extends Ii{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ys,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Go,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ao=class extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ro=class extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ss(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Pc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Cn=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Co=class extends Cn{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dc,endingEnd:Dc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nc:r=t,o=2*e-i;break;case Uc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Nc:a=t,l=2*i-e;break;case Uc:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,S=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,E=(-1-f)*m+(1.5+f)*y+.5*g,x=f*m-f*y;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+S*a[c+T]+E*a[l+T]+x*a[d+T];return r}},Po=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Io=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Lo=class extends Cn{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*u+g*2,S=d[p],E=d[p+1],x=t*u+g*2,T=h[x],M=h[x+1],C=Ap(i,e,S,T,s);r[g]=bd(C,y,E,M,m)}return r}};function bd(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Ep(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Ap(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=bd(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Ep(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var mi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ss(e,this.TimeBufferType),this.values=Ss(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ss(t.times,Array),values:Ss(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Pc(t.settings)&&(i.settings={inTangents:Ss(t.settings.inTangents,Array),outTangents:Ss(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Lo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case br:e=this.InterpolantFactoryMethodDiscrete;break;case mo:e=this.InterpolantFactoryMethodLinear;break;case so:e=this.InterpolantFactoryMethodSmooth;break;case Lc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return mo;case this.InterpolantFactoryMethodSmooth:return so;case this.InterpolantFactoryMethodBezier:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Pc(this.settings)&&(Pu(this.settings.inTangents,t),Pu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Xt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Pf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===so,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Pc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Pu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=mo;var Pn=class extends mi{constructor(t,e,i){super(t,e,i)}};Pn.prototype.ValueTypeName="bool";Pn.prototype.ValueBufferType=Array;Pn.prototype.DefaultInterpolation=br;Pn.prototype.InterpolantFactoryMethodLinear=void 0;Pn.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}};Do.prototype.ValueTypeName="color";var No=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}};No.prototype.ValueTypeName="number";var Uo=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Xi.slerpFlat(r,0,a,c-o,a,c,l);return r}},$r=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Uo(this.times,this.values,this.getValueSize(),t)}};$r.prototype.ValueTypeName="quaternion";$r.prototype.InterpolantFactoryMethodSmooth=void 0;var In=class extends mi{constructor(t,e,i){super(t,e,i)}};In.prototype.ValueTypeName="string";In.prototype.ValueBufferType=Array;In.prototype.DefaultInterpolation=br;In.prototype.InterpolantFactoryMethodLinear=void 0;In.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}};Fo.prototype.ValueTypeName="vector";var Oo=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sd=new Oo,Bo=class{constructor(t){this.manager=t!==void 0?t:Sd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Bo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gs=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Jr=class extends Gs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ic=new oe,Iu=new A,Lu=new A,Kr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Iu),Lu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Ic.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Ic,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Rs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Ic)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},io=new A,no=new Xi,zi=new A,jr=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(io,no,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,no,zi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(io,no,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,no,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},En=new A,Du=new j,Nu=new j,qe=class extends jr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return go*2*Math.atan(Math.tan(rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(En.x,En.y).multiplyScalar(-t/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(En.x,En.y).multiplyScalar(-t/En.z)}getViewSize(t,e){return this.getViewBounds(t,Du,Nu),e.subVectors(Nu,Du)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var zc=class extends Kr{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0}},Qr=class extends Gs{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new zc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ln=class extends jr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},kc=class extends Kr{constructor(){super(new Ln(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ws=class extends Gs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new kc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ts=-90,ws=1,zo=class extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(Ts,ws,t,e);s.layers=this.layers,this.add(s);let r=new qe(Ts,ws,t,e);r.layers=this.layers,this.add(r);let a=new qe(Ts,ws,t,e);a.layers=this.layers,this.add(a);let o=new qe(Ts,ws,t,e);o.layers=this.layers,this.add(o);let l=new qe(Ts,ws,t,e);l.layers=this.layers,this.add(l);let c=new qe(Ts,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ko=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},ta=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Rp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Rp(){this._document.hidden===!1&&this.reset()}var ah="\\[\\]\\.:\\/",Cp=new RegExp("["+ah+"]","g"),oh="[^"+ah+"]",Pp="[^"+ah.replace("\\.","")+"]",Ip=/((?:WC+[\/:])*)/.source.replace("WC",oh),Lp=/(WCOD+)?/.source.replace("WCOD",Pp),Dp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),Np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),Up=new RegExp("^"+Ip+Lp+Dp+Np+"$"),Fp=["material","materials","bones","map"],Vc=class{constructor(t,e,i){let s=i||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},we=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cp,"")}static parseTrackName(t){let e=Up.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Fp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Vc;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lv=new Float32Array(1);var Uu=new oe,ea=class{constructor(t,e,i=0,s=1/0){this.ray=new Lr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Xt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uu),this}intersectObject(t,e=!0,i=[]){return Hc(t,this,i,e),i.sort(Fu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Hc(t[s],this,i,e);return i.sort(Fu),i}};function Fu(n,t){return n.distance-t.distance}function Hc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Hc(r[a],t,e,!0)}}var fh=class fh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};fh.prototype.isMatrix2=!0;var Gc=fh;function lh(n,t,e,i){let s=Op(i);switch(e){case th:return n*t;case Jo:return n*t/s.components*s.byteLength;case Ko:return n*t/s.components*s.byteLength;case Fn:return n*t*2/s.components*s.byteLength;case jo:return n*t*2/s.components*s.byteLength;case eh:return n*t*3/s.components*s.byteLength;case hi:return n*t*4/s.components*s.byteLength;case Qo:return n*t*4/s.components*s.byteLength;case ua:case da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fa:case pa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case el:case nl:return Math.max(n,16)*Math.max(t,8)/4;case tl:case il:return Math.max(n,8)*Math.max(t,8)/2;case sl:case rl:case ol:case ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case al:case ma:case cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ul:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case dl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case fl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case pl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case vl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case yl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case bl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Tl:case wl:case El:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Al:case Rl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ga:case Cl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Op(n){switch(n){case Qe:case Jc:return{byteLength:1,components:1};case qs:case Kc:case Le:return{byteLength:2,components:1};case Zo:case $o:return{byteLength:2,components:4};case Ui:case Yo:case Mi:return{byteLength:4,components:1};case jc:case Qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Xd(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function zp(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
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
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
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
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zp=`#ifdef USE_BATCHING
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
#endif`,$p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qp=`#ifdef USE_IRIDESCENCE
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
#endif`,tm=`#ifdef USE_BUMPMAP
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cm=`#define PI 3.141592653589793
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
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,um=`vec3 transformedNormal = objectNormal;
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
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xm=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
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
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Om=`PhysicalMaterial material;
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
#endif`,Bm=`uniform sampler2D dfgLUT;
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
}`,zm=`
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
#endif`,km=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jm=`#if defined( USE_POINTS_UV )
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
#endif`,Km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`#ifdef USE_MORPHTARGETS
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
#endif`,n0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,r0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,c0=`#ifdef USE_NORMALMAP
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
#endif`,h0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w0=`float getShadowMask() {
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
}`,E0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
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
#endif`,U0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,k0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
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
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
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
}`,Y0=`#if DEPTH_PACKING == 3200
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
}`,Z0=`#define DISTANCE
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
}`,$0=`#define DISTANCE
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,eg=`uniform vec3 diffuse;
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
}`,ig=`#define LAMBERT
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
}`,ng=`#define LAMBERT
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
}`,sg=`#define MATCAP
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
}`,rg=`#define MATCAP
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
}`,ag=`#define NORMAL
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
}`,og=`#define NORMAL
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
}`,lg=`#define PHONG
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
}`,cg=`#define PHONG
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
}`,hg=`#define STANDARD
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
}`,ug=`#define STANDARD
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
}`,dg=`#define TOON
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
}`,fg=`#define TOON
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
}`,pg=`uniform float size;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,_g=`uniform vec3 color;
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
}`,xg=`uniform float rotation;
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
}`,vg=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:kp,alphahash_pars_fragment:Vp,alphamap_fragment:Hp,alphamap_pars_fragment:Gp,alphatest_fragment:Wp,alphatest_pars_fragment:Xp,aomap_fragment:qp,aomap_pars_fragment:Yp,batching_pars_vertex:Zp,batching_vertex:$p,begin_vertex:Jp,beginnormal_vertex:Kp,bsdfs:jp,iridescence_fragment:Qp,bumpmap_pars_fragment:tm,clipping_planes_fragment:em,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:nm,clipping_planes_vertex:sm,color_fragment:rm,color_pars_fragment:am,color_pars_vertex:om,color_vertex:lm,common:cm,cube_uv_reflection_fragment:hm,defaultnormal_vertex:um,displacementmap_pars_vertex:dm,displacementmap_vertex:fm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:_m,envmap_fragment:xm,envmap_common_pars_fragment:vm,envmap_pars_fragment:ym,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Lm,envmap_vertex:bm,fog_vertex:Sm,fog_pars_vertex:Tm,fog_fragment:wm,fog_pars_fragment:Em,gradientmap_pars_fragment:Am,lightmap_pars_fragment:Rm,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Pm,lights_pars_begin:Im,lights_toon_fragment:Dm,lights_toon_pars_fragment:Nm,lights_phong_fragment:Um,lights_phong_pars_fragment:Fm,lights_physical_fragment:Om,lights_physical_pars_fragment:Bm,lights_fragment_begin:zm,lights_fragment_maps:km,lights_fragment_end:Vm,lightprobes_pars_fragment:Hm,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:qm,map_fragment:Ym,map_pars_fragment:Zm,map_particle_fragment:$m,map_particle_pars_fragment:Jm,metalnessmap_fragment:Km,metalnessmap_pars_fragment:jm,morphinstance_vertex:Qm,morphcolor_vertex:t0,morphnormal_vertex:e0,morphtarget_pars_vertex:i0,morphtarget_vertex:n0,normal_fragment_begin:s0,normal_fragment_maps:r0,normal_pars_fragment:a0,normal_pars_vertex:o0,normal_vertex:l0,normalmap_pars_fragment:c0,clearcoat_normal_fragment_begin:h0,clearcoat_normal_fragment_maps:u0,clearcoat_pars_fragment:d0,iridescence_pars_fragment:f0,opaque_fragment:p0,packing:m0,premultiplied_alpha_fragment:g0,project_vertex:_0,dithering_fragment:x0,dithering_pars_fragment:v0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:M0,shadowmap_pars_fragment:b0,shadowmap_pars_vertex:S0,shadowmap_vertex:T0,shadowmask_pars_fragment:w0,skinbase_vertex:E0,skinning_pars_vertex:A0,skinning_vertex:R0,skinnormal_vertex:C0,specularmap_fragment:P0,specularmap_pars_fragment:I0,tonemapping_fragment:L0,tonemapping_pars_fragment:D0,transmission_fragment:N0,transmission_pars_fragment:U0,uv_pars_fragment:F0,uv_pars_vertex:O0,uv_vertex:B0,worldpos_vertex:z0,background_vert:k0,background_frag:V0,backgroundCube_vert:H0,backgroundCube_frag:G0,cube_vert:W0,cube_frag:X0,depth_vert:q0,depth_frag:Y0,distance_vert:Z0,distance_frag:$0,equirect_vert:J0,equirect_frag:K0,linedashed_vert:j0,linedashed_frag:Q0,meshbasic_vert:tg,meshbasic_frag:eg,meshlambert_vert:ig,meshlambert_frag:ng,meshmatcap_vert:sg,meshmatcap_frag:rg,meshnormal_vert:ag,meshnormal_frag:og,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:hg,meshphysical_frag:ug,meshtoon_vert:dg,meshtoon_frag:fg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:_g,sprite_vert:xg,sprite_frag:vg},St={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Qi={basic:{uniforms:ti([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:ti([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:ti([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:ti([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:ti([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Lt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:ti([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:ti([St.points,St.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:ti([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:ti([St.common,St.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:ti([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:ti([St.sprite,St.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:ti([St.common,St.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:ti([St.lights,St.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Qi.physical={uniforms:ti([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Ll={r:0,b:0,g:0},yg=new oe,qd=new $t;qd.set(-1,0,0,0,1,0,0,0,1);function Mg(n,t,e,i,s,r){let a=new Lt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){let x=S.backgroundBlurriness>0;E=t.get(E,x)}return E}function g(S){let E=!1,x=f(S);x===null?m(a,o):x&&x.isColor&&(m(x,1),E=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(S,E){let x=f(E);x&&(x.isCubeTexture||x.mapping===ca)?(c===void 0&&(c=new Jt(new Di(1,1,1),new ye({name:"BackgroundCubeMaterial",uniforms:es(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qd),c.material.toneMapped=ee.getTransfer(x.colorSpace)!==he,(h!==x||d!==x.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Jt(new Vs(2,2),new ye({name:"BackgroundMaterial",uniforms:es(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ee.getTransfer(x.colorSpace)!==he,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,E){S.getRGB(Ll,rh(n)),e.buffers.color.setClear(Ll.r,Ll.g,Ll.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:y,dispose:p}}function bg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(I,N,B,D,z){let Z=!1,q=d(I,D,B,N);r!==q&&(r=q,c(r.object)),Z=f(I,D,B,z),Z&&g(I,D,B,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,x(I,N,B,D),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function h(I){return n.deleteVertexArray(I)}function d(I,N,B,D){let z=D.wireframe===!0,Z=i[N.id];Z===void 0&&(Z={},i[N.id]=Z);let q=I.isInstancedMesh===!0?I.id:0,rt=Z[q];rt===void 0&&(rt={},Z[q]=rt);let W=rt[B.id];W===void 0&&(W={},rt[B.id]=W);let Q=W[z];return Q===void 0&&(Q=u(l()),W[z]=Q),Q}function u(I){let N=[],B=[],D=[];for(let z=0;z<e;z++)N[z]=0,B[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,N,B,D){let z=r.attributes,Z=N.attributes,q=0,rt=B.getAttributes();for(let W in rt)if(rt[W].location>=0){let tt=z[W],Rt=Z[W];if(Rt===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(Rt=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(Rt=I.instanceColor)),tt===void 0||tt.attribute!==Rt||Rt&&tt.data!==Rt.data)return!0;q++}return r.attributesNum!==q||r.index!==D}function g(I,N,B,D){let z={},Z=N.attributes,q=0,rt=B.getAttributes();for(let W in rt)if(rt[W].location>=0){let tt=Z[W];tt===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(tt=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(tt=I.instanceColor));let Rt={};Rt.attribute=tt,tt&&tt.data&&(Rt.data=tt.data),z[W]=Rt,q++}r.attributes=z,r.attributesNum=q,r.index=D}function y(){let I=r.newAttributes;for(let N=0,B=I.length;N<B;N++)I[N]=0}function m(I){p(I,0)}function p(I,N){let B=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;B[I]=1,D[I]===0&&(n.enableVertexAttribArray(I),D[I]=1),z[I]!==N&&(n.vertexAttribDivisor(I,N),z[I]=N)}function S(){let I=r.newAttributes,N=r.enabledAttributes;for(let B=0,D=N.length;B<D;B++)N[B]!==I[B]&&(n.disableVertexAttribArray(B),N[B]=0)}function E(I,N,B,D,z,Z,q){q===!0?n.vertexAttribIPointer(I,N,B,z,Z):n.vertexAttribPointer(I,N,B,D,z,Z)}function x(I,N,B,D){y();let z=D.attributes,Z=B.getAttributes(),q=N.defaultAttributeValues;for(let rt in Z){let W=Z[rt];if(W.location>=0){let Q=z[rt];if(Q===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){let tt=Q.normalized,Rt=Q.itemSize,Et=t.get(Q);if(Et===void 0)continue;let J=Et.buffer,ct=Et.type,yt=Et.bytesPerElement,k=ct===n.INT||ct===n.UNSIGNED_INT||Q.gpuType===Yo;if(Q.isInterleavedBufferAttribute){let X=Q.data,et=X.stride,xt=Q.offset;if(X.isInstancedInterleavedBuffer){for(let ft=0;ft<W.locationSize;ft++)p(W.location+ft,X.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ft=0;ft<W.locationSize;ft++)m(W.location+ft);n.bindBuffer(n.ARRAY_BUFFER,J);for(let ft=0;ft<W.locationSize;ft++)E(W.location+ft,Rt/W.locationSize,ct,tt,et*yt,(xt+Rt/W.locationSize*ft)*yt,k)}else{if(Q.isInstancedBufferAttribute){for(let X=0;X<W.locationSize;X++)p(W.location+X,Q.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let X=0;X<W.locationSize;X++)m(W.location+X);n.bindBuffer(n.ARRAY_BUFFER,J);for(let X=0;X<W.locationSize;X++)E(W.location+X,Rt/W.locationSize,ct,tt,Rt*yt,Rt/W.locationSize*X*yt,k)}}else if(q!==void 0){let tt=q[rt];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(W.location,tt);break;case 3:n.vertexAttrib3fv(W.location,tt);break;case 4:n.vertexAttrib4fv(W.location,tt);break;default:n.vertexAttrib1fv(W.location,tt)}}}}S()}function T(){w();for(let I in i){let N=i[I];for(let B in N){let D=N[B];for(let z in D){let Z=D[z];for(let q in Z)h(Z[q].object),delete Z[q];delete D[z]}}delete i[I]}}function M(I){if(i[I.id]===void 0)return;let N=i[I.id];for(let B in N){let D=N[B];for(let z in D){let Z=D[z];for(let q in Z)h(Z[q].object),delete Z[q];delete D[z]}}delete i[I.id]}function C(I){for(let N in i){let B=i[N];for(let D in B){let z=B[D];if(z[I.id]===void 0)continue;let Z=z[I.id];for(let q in Z)h(Z[q].object),delete Z[q];delete z[I.id]}}}function v(I){for(let N in i){let B=i[N],D=I.isInstancedMesh===!0?I.id:0,z=B[D];if(z!==void 0){for(let Z in z){let q=z[Z];for(let rt in q)h(q[rt].object),delete q[rt];delete z[Z]}delete B[D],Object.keys(B).length===0&&delete i[N]}}}function w(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function Sg(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Tg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==hi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let v=C===Le&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Qe&&C!==Mi&&!v&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:x,maxSamples:T,samples:M}}function wg(n){let t=this,e=null,i=0,s=!1,r=!1,a=new fi,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:i,E=S*4,x=p.clippingState||null;l.value=x,x=h(g,u,E,f);for(let T=0;T!==E;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=f;E!==y;++E,x+=4)a.copy(d[E]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var $s=4,Eg=6,Ag=20,Rg=256,_a=new Ln,Td=new Lt,ph=null,mh=0,gh=0,_h=!1,Cg=new A,is=new A,Ks=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Cg}=r;ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ph,mh,gh),this._renderer.xr.enabled=_h,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Nn||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Le,format:hi,colorSpace:Sr,depthBuffer:!1},s=wd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wd(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pg(r)),this._blurMaterial=Lg(r,t,e),this._ggxMaterial=Ig(r,t,e)}return s}_compileMaterial(t){let e=new Jt(new Ue,t);this._renderer.compile(e,_a)}_sceneToCubeUV(t,e,i,s,r){let l=new qe(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Td),d.toneMapping=Ni,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jt(new Di,new un({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(Td),p=!0);for(let E=0;E<6;E++){let x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let T=this._cubeSize;Zs(s,x*T,E>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Nn||t.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Zs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,_a)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-$s?i-g+$s:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Zs(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,_a),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Zs(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(o,_a)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-$s?s-this._lodMax+$s:0),u=4*(this._cubeSize-h);Zs(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,_a)}};function Pg(n){let t=[],e=[],i=n,s=n-$s+1+Eg;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,E=p>2?0:-1,x=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];g.set(x,f*u*p);for(let T=0;T<u;T++){let M=h[T*2]*2-1,C=h[T*2+1]*2-1;p===0?is.set(1,C,M):p===1?is.set(-M,1,-C):p===2?is.set(-M,C,1):p===3?is.set(-1,C,-M):p===4?is.set(-M,-1,C):is.set(M,C,-1),is.toArray(y,(p*u+T)*f)}}let m=new Ue;m.setAttribute("position",new li(g,f)),m.setAttribute("outputDirection",new li(y,f)),e.push(new Jt(m,null)),i>$s&&i--}return{lodMeshes:e,sizeLods:t}}function wd(n,t,e){let i=new Ee(n,t,e);return i.texture.mapping=ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ig(n,t,e){return new ye({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:Fe,depthTest:!1,depthWrite:!1})}function Lg(n,t,e){return new ye({name:"SphericalGaussianBlur",defines:{SAMPLES:Ag,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:Fe,depthTest:!1,depthWrite:!1})}function Ed(){return new ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:Fe,depthTest:!1,depthWrite:!1})}function Ad(){return new ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fe,depthTest:!1,depthWrite:!1})}function Fl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nl=class extends Ee{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ur(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Di(5,5,5),r=new ye({name:"CubemapFromEquirect",uniforms:es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:Fe});r.uniforms.tEquirect.value=e;let a=new Jt(s,r),o=e.minFilter;return e.minFilter===Ji&&(e.minFilter=Ye),new zo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function Dg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Wo||f===Xo)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new Nl(g.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Wo||f===Xo,y=f===Nn||f===ts;if(g||y){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Ks(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||y&&S&&l(S)?(i===null&&(i=new Ks(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Wo?u.mapping=Nn:f===Xo&&(u.mapping=ts),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Ng(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Wn("WebGLRenderer: "+i+" extension not supported."),s}}}function Ug(n,t,e,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let E=0,x=S.length;E<x;E+=3){let T=S[E+0],M=S[E+1],C=S[E+2];u.push(T,M,M,C,C,T)}}else{let S=g.array;y=g.version;for(let E=0,x=S.length/3-1;E<x;E+=3){let T=E+0,M=E+1,C=E+2;u.push(T,M,M,C,C,T)}}let m=new(g.count>=65535?Cr:Rr)(u,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Fg(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Og(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Xt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Bg(n,t,e){let i=new WeakMap,s=new Se;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let w=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let x=o.attributes.position.count*E,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let M=new Float32Array(x*T*4*d),C=new Ar(M,x,T,d);C.type=Mi,C.needsUpdate=!0;let v=E*4;for(let P=0;P<d;P++){let I=m[P],N=p[P],B=S[P],D=x*T*4*P;for(let z=0;z<I.count;z++){let Z=z*v;f===!0&&(s.fromBufferAttribute(I,z),M[D+Z+0]=s.x,M[D+Z+1]=s.y,M[D+Z+2]=s.z,M[D+Z+3]=0),g===!0&&(s.fromBufferAttribute(N,z),M[D+Z+4]=s.x,M[D+Z+5]=s.y,M[D+Z+6]=s.z,M[D+Z+7]=0),y===!0&&(s.fromBufferAttribute(B,z),M[D+Z+8]=s.x,M[D+Z+9]=s.y,M[D+Z+10]=s.z,M[D+Z+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new j(x,T)},i.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function zg(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var kg={[sa]:"LINEAR_TONE_MAPPING",[ra]:"REINHARD_TONE_MAPPING",[aa]:"CINEON_TONE_MAPPING",[oa]:"ACES_FILMIC_TONE_MAPPING",[jn]:"AGX_TONE_MAPPING",[Qn]:"NEUTRAL_TONE_MAPPING",[la]:"CUSTOM_TONE_MAPPING"};function Vg(n,t,e,i,s,r){let a=new Ee(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ue;c.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ne([0,2,0,0,2,0],2));let h=new Hs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Jt(c,h),u=new Ln(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,S=[],E=!1;this.setSize=function(x,T){a.setSize(x,T),o!==null&&o.setSize(x,T),l!==null&&l.setSize(x,T);for(let M=0;M<S.length;M++){let C=S[M];C.setSize&&C.setSize(x,T)}},this.setEffects=function(x){S=x,E=S.length>0&&S[0].isRenderPass===!0;let T=a.width,M=a.height;S.length>0&&o===null&&(o=new Ee(T,M,{type:Le,depthBuffer:!1,stencilBuffer:!1}),l=new Ee(T,M,{type:Le,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let v=S[C];v.setSize&&v.setSize(T,M)}},this.begin=function(x,T){if(y||x.toneMapping===Ni&&S.length===0)return!1;if(p=T,T!==null){let M=T.width,C=T.height;(a.width!==M||a.height!==C)&&this.setSize(M,C)}return E===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Ni,!0},this.hasRenderPass=function(){return E},this.end=function(x,T){x.toneMapping=m,y=!0;let M=a,C=o;for(let v=0;v<S.length;v++){let w=S[v];w.enabled!==!1&&(w.render(x,C,M,T),w.needsSwap!==!1&&(M=C,C=C===o?l:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},ee.getTransfer(f)===he&&(h.defines.SRGB_TRANSFER="");let v=kg[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(p),x.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Yd=new ri,yh=new Zi(1,1),Zd=new Ar,$d=new vo,Jd=new Ur,Rd=[],Cd=[],Pd=new Float32Array(16),Id=new Float32Array(9),Ld=new Float32Array(4);function js(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Rd[s];if(r===void 0&&(r=new Float32Array(s),Rd[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function He(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ol(n,t){let e=Cd[t];e===void 0&&(e=new Int32Array(t),Cd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Hg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Gg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2fv(this.addr,t),Ge(e,t)}}function Wg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;n.uniform3fv(this.addr,t),Ge(e,t)}}function Xg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4fv(this.addr,t),Ge(e,t)}}function qg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;Ld.set(i),n.uniformMatrix2fv(this.addr,!1,Ld),Ge(e,i)}}function Yg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;Id.set(i),n.uniformMatrix3fv(this.addr,!1,Id),Ge(e,i)}}function Zg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;Pd.set(i),n.uniformMatrix4fv(this.addr,!1,Pd),Ge(e,i)}}function $g(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2iv(this.addr,t),Ge(e,t)}}function Kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3iv(this.addr,t),Ge(e,t)}}function jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4iv(this.addr,t),Ge(e,t)}}function Qg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function t_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2uiv(this.addr,t),Ge(e,t)}}function e_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3uiv(this.addr,t),Ge(e,t)}}function i_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4uiv(this.addr,t),Ge(e,t)}}function n_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(yh.compareFunction=e.isReversedDepthBuffer()?Il:Pl,r=yh):r=Yd,e.setTexture2D(t||r,s)}function s_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||$d,s)}function r_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Jd,s)}function a_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Zd,s)}function o_(n){switch(n){case 5126:return Hg;case 35664:return Gg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Zg;case 5124:case 35670:return $g;case 35667:case 35671:return Jg;case 35668:case 35672:return Kg;case 35669:case 35673:return jg;case 5125:return Qg;case 36294:return t_;case 36295:return e_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return a_}}function l_(n,t){n.uniform1fv(this.addr,t)}function c_(n,t){let e=js(t,this.size,2);n.uniform2fv(this.addr,e)}function h_(n,t){let e=js(t,this.size,3);n.uniform3fv(this.addr,e)}function u_(n,t){let e=js(t,this.size,4);n.uniform4fv(this.addr,e)}function d_(n,t){let e=js(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function f_(n,t){let e=js(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function p_(n,t){let e=js(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function m_(n,t){n.uniform1iv(this.addr,t)}function g_(n,t){n.uniform2iv(this.addr,t)}function __(n,t){n.uniform3iv(this.addr,t)}function x_(n,t){n.uniform4iv(this.addr,t)}function v_(n,t){n.uniform1uiv(this.addr,t)}function y_(n,t){n.uniform2uiv(this.addr,t)}function M_(n,t){n.uniform3uiv(this.addr,t)}function b_(n,t){n.uniform4uiv(this.addr,t)}function S_(n,t,e){let i=this.cache,s=t.length,r=Ol(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=yh:a=Yd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function T_(n,t,e){let i=this.cache,s=t.length,r=Ol(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||$d,r[a])}function w_(n,t,e){let i=this.cache,s=t.length,r=Ol(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Jd,r[a])}function E_(n,t,e){let i=this.cache,s=t.length,r=Ol(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Zd,r[a])}function A_(n){switch(n){case 5126:return l_;case 35664:return c_;case 35665:return h_;case 35666:return u_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return x_;case 5125:return v_;case 36294:return y_;case 36295:return M_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return E_}}var Mh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=o_(e.type)}},bh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=A_(e.type)}},Sh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},xh=/(\w+)(\])?(\[|\.)?/g;function Dd(n,t){n.seq.push(t),n.map[t.id]=t}function R_(n,t,e){let i=n.name,s=i.length;for(xh.lastIndex=0;;){let r=xh.exec(i),a=xh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Dd(e,c===void 0?new Mh(o,n,t):new bh(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Sh(o),Dd(e,d)),e=d}}}var Js=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);R_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Nd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var C_=37297,P_=0;function I_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Ud=new $t;function L_(n){ee._getMatrix(Ud,ee.workingColorSpace,n);let t=`mat3( ${Ud.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(n)){case Tr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Fd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+I_(n.getShaderSource(t),o)}else return r}function D_(n,t){let e=L_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var N_={[sa]:"Linear",[ra]:"Reinhard",[aa]:"Cineon",[oa]:"ACESFilmic",[jn]:"AgX",[Qn]:"Neutral",[la]:"Custom"};function U_(n,t){let e=N_[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Dl=new A;function F_(){ee.getLuminanceCoefficients(Dl);let n=Dl.x.toFixed(4),t=Dl.y.toFixed(4),e=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function B_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function z_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function va(n){return n!==""}function Od(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var k_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(n){return n.replace(k_,H_)}var V_=new Map;function H_(n,t){let e=te[t];if(e===void 0){let i=V_.get(t);if(i!==void 0)e=te[i],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Th(e)}var G_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(n){return n.replace(G_,W_)}function W_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var X_={[$n]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};function q_(n){return X_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Y_={[Nn]:"ENVMAP_TYPE_CUBE",[ts]:"ENVMAP_TYPE_CUBE",[ca]:"ENVMAP_TYPE_CUBE_UV"};function Z_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Y_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var $_={[ts]:"ENVMAP_MODE_REFRACTION"};function J_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":$_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var K_={[Go]:"ENVMAP_BLENDING_MULTIPLY",[td]:"ENVMAP_BLENDING_MIX",[ed]:"ENVMAP_BLENDING_ADD"};function j_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":K_[n.combine]||"ENVMAP_BLENDING_NONE"}function Q_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function tx(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=q_(e),c=Z_(e),h=J_(e),d=j_(e),u=Q_(e),f=O_(e),g=B_(r),y=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(va).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(va).join(`
`),p.length>0&&(p+=`
`)):(m=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),p=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?te.tonemapping_pars_fragment:"",e.toneMapping!==Ni?U_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,D_("linearToOutputTexel",e.outputColorSpace),F_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(va).join(`
`)),a=Th(a),a=Od(a,e),a=Bd(a,e),o=Th(o),o=Od(o,e),o=Bd(o,e),a=zd(a),o=zd(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=S+m+a,x=S+p+o,T=Nd(s,s.VERTEX_SHADER,E),M=Nd(s,s.FRAGMENT_SHADER,x);s.attachShader(y,T),s.attachShader(y,M),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(I){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(y)||"",B=s.getShaderInfoLog(T)||"",D=s.getShaderInfoLog(M)||"",z=N.trim(),Z=B.trim(),q=D.trim(),rt=!0,W=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,T,M);else{let Q=Fd(s,T,"vertex"),tt=Fd(s,M,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+Q+`
`+tt)}else z!==""?qt("WebGLProgram: Program Info Log:",z):(Z===""||q==="")&&(W=!1);W&&(I.diagnostics={runnable:rt,programLog:z,vertexShader:{log:Z,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(T),s.deleteShader(M),v=new Js(s,y),w=z_(s,y)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,C_)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=P_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=M,this}var ex=0,wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Eh(t),e.set(t,i)),i}},Eh=class{constructor(t){this.id=ex++,this.code=t,this.usedTimes=0}};function ix(n){return n===Fn||n===ma||n===ga}function nx(n,t,e,i,s,r){let a=new Is,o=new wh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,w,P,I,N,B){let D=I.fog,z=N.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,rt=t.get(v.envMap||Z,q),W=rt&&rt.mapping===ca?rt.image.height:null,Q=f[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&qt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let tt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Rt=tt!==void 0?tt.length:0,Et=0;z.morphAttributes.position!==void 0&&(Et=1),z.morphAttributes.normal!==void 0&&(Et=2),z.morphAttributes.color!==void 0&&(Et=3);let J,ct,yt,k;if(Q){let Me=Qi[Q];J=Me.vertexShader,ct=Me.fragmentShader}else{J=v.vertexShader,ct=v.fragmentShader;let Me=o.getVertexShaderStage(v),fe=o.getFragmentShaderStage(v);o.update(v,Me,fe),yt=Me.id,k=fe.id}let X=n.getRenderTarget(),et=n.state.buffers.depth.getReversed(),xt=N.isInstancedMesh===!0,ft=N.isBatchedMesh===!0,Bt=!!v.map,se=!!v.matcap,it=!!rt,at=!!v.aoMap,ht=!!v.lightMap,ut=!!v.bumpMap&&v.wireframe===!1,pt=!!v.normalMap,Ht=!!v.displacementMap,zt=!!v.emissiveMap,Gt=!!v.metalnessMap,Yt=!!v.roughnessMap,L=v.anisotropy>0,le=v.clearcoat>0,Kt=v.dispersion>0,R=v.retroreflectivity>0,_=v.iridescence>0,O=v.sheen>0,V=v.transmission>0,$=L&&!!v.anisotropyMap,dt=le&&!!v.clearcoatMap,mt=le&&!!v.clearcoatNormalMap,K=le&&!!v.clearcoatRoughnessMap,st=_&&!!v.iridescenceMap,vt=_&&!!v.iridescenceThicknessMap,Ft=O&&!!v.sheenColorMap,_t=O&&!!v.sheenRoughnessMap,gt=!!v.specularMap,It=!!v.specularColorMap,kt=!!v.specularIntensityMap,Zt=V&&!!v.transmissionMap,F=V&&!!v.thicknessMap,Mt=!!v.gradientMap,nt=!!v.alphaMap,bt=v.alphaTest>0,At=!!v.alphaHash,lt=!!v.extensions,Vt=Ni;v.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Vt=n.toneMapping);let Ut={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:J,fragmentShader:ct,defines:v.defines,customVertexShaderID:yt,customFragmentShaderID:k,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ft,batchingColor:ft&&N._colorsTexture!==null,instancing:xt,instancingColor:xt&&N.instanceColor!==null,instancingMorph:xt&&N.morphTexture!==null,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Bt,matcap:se,envMap:it,envMapMode:it&&rt.mapping,envMapCubeUVHeight:W,aoMap:at,lightMap:ht,bumpMap:ut,normalMap:pt,displacementMap:Ht,emissiveMap:zt,normalMapObjectSpace:pt&&v.normalMapType===sd,normalMapTangentSpace:pt&&v.normalMapType===Ys,packedNormalMap:pt&&v.normalMapType===Ys&&ix(v.normalMap.format),metalnessMap:Gt,roughnessMap:Yt,anisotropy:L,anisotropyMap:$,clearcoat:le,clearcoatMap:dt,clearcoatNormalMap:mt,clearcoatRoughnessMap:K,dispersion:Kt,retroreflection:R,iridescence:_,iridescenceMap:st,iridescenceThicknessMap:vt,sheen:O,sheenColorMap:Ft,sheenRoughnessMap:_t,specularMap:gt,specularColorMap:It,specularIntensityMap:kt,transmission:V,transmissionMap:Zt,thicknessMap:F,gradientMap:Mt,opaque:v.transparent===!1&&v.blending===Dn&&v.alphaToCoverage===!1,alphaMap:nt,alphaTest:bt,alphaHash:At,combine:v.combine,mapUv:Bt&&g(v.map.channel),aoMapUv:at&&g(v.aoMap.channel),lightMapUv:ht&&g(v.lightMap.channel),bumpMapUv:ut&&g(v.bumpMap.channel),normalMapUv:pt&&g(v.normalMap.channel),displacementMapUv:Ht&&g(v.displacementMap.channel),emissiveMapUv:zt&&g(v.emissiveMap.channel),metalnessMapUv:Gt&&g(v.metalnessMap.channel),roughnessMapUv:Yt&&g(v.roughnessMap.channel),anisotropyMapUv:$&&g(v.anisotropyMap.channel),clearcoatMapUv:dt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:mt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:_t&&g(v.sheenRoughnessMap.channel),specularMapUv:gt&&g(v.specularMap.channel),specularColorMapUv:It&&g(v.specularColorMap.channel),specularIntensityMapUv:kt&&g(v.specularIntensityMap.channel),transmissionMapUv:Zt&&g(v.transmissionMap.channel),thicknessMapUv:F&&g(v.thicknessMap.channel),alphaMapUv:nt&&g(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(pt||L),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Bt||nt),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&pt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:et,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Et,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Bt&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===he,decodeVideoTextureEmissive:zt&&v.emissiveMap.isVideoTexture===!0&&ee.getTransfer(v.emissiveMap.colorSpace)===he,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vi,flipSided:v.side===Ze,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:lt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&v.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function m(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)w.push(P),w.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(p(w,v),S(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function E(v){let w=f[v.type],P;if(w){let I=Qi[w];P=ai.clone(I.uniforms)}else P=v.uniforms;return P}function x(v,w){let P=h.get(w);return P!==void 0?++P.usedTimes:(P=new tx(n,w,v,s),c.push(P),h.set(w,P)),P}function T(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){o.remove(v)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:T,releaseShaderCache:M,programs:c,dispose:C}}function sx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function rx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Vd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Hd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,m,p){let S=n[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},n[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=a(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=m,S.group=p),t++,S}function l(u,f,g,y,m,p,S){S.reversedDepth===!0&&(m=-m);let E=o(u,f,g,y,m,p);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,f,g,y,m,p){let S=o(u,f,g,y,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||rx),i.length>1&&i.sort(f||Vd),s.length>1&&s.sort(f||Vd)}function d(){for(let u=t,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function ax(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Hd,n.set(i,[a])):s>=r.length?(a=new Hd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function ox(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new Lt};break;case"SpotLight":e={position:new A,direction:new A,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function lx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var cx=0;function hx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ux(n){let t=new ox,e=lx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);let s=new A,r=new oe,a=new oe;function o(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,S=0,E=0,x=0,T=0,M=0,C=0,v=0,w=0,P=0;c.sort(hx);for(let N=0,B=c.length;N<B;N++){let D=c[N],z=D.color,Z=D.intensity,q=D.distance,rt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Fn?rt=D.shadow.map.texture:rt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*Z,d+=z.g*Z,u+=z.b*Z;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],Z);P++}else if(D.isSunLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,tt=e.get(D);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=tt,i.sunShadowMap[g]=rt;let Rt=Q.getViewportCount();for(let Et=0;Et<Rt;Et++)i.sunShadowMatrix[y+Et]=Q.getMatrix(Et),i.sunShadowCascade[y+Et]=Q._cascadeData[Et];y+=Rt,g++}i.sun[f]=W,f++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,tt=e.get(D);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,i.directionalShadow[m]=tt,i.directionalShadowMap[m]=rt,i.directionalShadowMatrix[m]=D.shadow.matrix,T++}i.directional[m]=W,m++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(z).multiplyScalar(Z),W.distance=q,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[S]=W;let Q=D.shadow;if(D.map&&(i.spotLightMap[v]=D.map,v++,Q.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[S]=Q.matrix,D.castShadow){let tt=e.get(D);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,i.spotShadow[S]=tt,i.spotShadowMap[S]=rt,C++}S++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(z).multiplyScalar(Z),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[E]=W,E++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let Q=D.shadow,tt=e.get(D);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,i.pointShadow[p]=tt,i.pointShadowMap[p]=rt,i.pointShadowMatrix[p]=D.shadow.matrix,M++}i.point[p]=W,p++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(Z),W.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[x]=W,x++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==S||I.rectAreaLength!==E||I.hemiLength!==x||I.numSunShadows!==g||I.numDirectionalShadows!==T||I.numPointShadows!==M||I.numSpotShadows!==C||I.numSpotMaps!==v||I.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=S,i.rectArea.length=E,i.point.length=p,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=S,I.rectAreaLength=E,I.hemiLength=x,I.numSunShadows=g,I.numDirectionalShadows=T,I.numPointShadows=M,I.numSpotShadows=C,I.numSpotMaps=v,I.numLightProbes=P,i.version=cx++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let S=0,E=c.length;S<E;S++){let x=c[S];if(x.isSunLight){let T=i.sun[d];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(p),d++}else if(x.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(x.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let T=i.rectArea[y];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Gd(n){let t=new ux(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function dx(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Gd(n),t.set(s,[o])):r>=a.length?(o=new Gd(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
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
}`,mx=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],gx=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Wd=new oe,xa=new A,vh=new A;function _x(n,t,e){let i=new Ns,s=new j,r=new j,a=new Se,o=new Ao,l=new Ro,c={},h=e.maxTextureSize,d={[$i]:Ze,[Ze]:$i,[vi]:vi},u=new ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:fx,fragmentShader:px}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ue;g.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Jt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$n;let p=this.type;this.render=function(M,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===zu&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$n);let w=n.getRenderTarget(),P=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Fe),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=p!==this.type;B&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=M.length;D<z;D++){let Z=M[D],q=Z.shadow;if(q===void 0){qt("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let rt=q.getFrameExtents();s.multiply(rt),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,q.mapSize.y=r.y));let W=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=W,q.map===null||B===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Xs){if(Z.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Ee(s.x,s.y,{format:Fn,type:Le,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new Zi(s.x,s.y,Mi),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=Gi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ne,q.map.depthTexture.magFilter=Ne}else Z.isPointLight?(q.map=new Nl(s.x),q.map.depthTexture=new Mo(s.x,Ui)):(q.map=new Ee(s.x,s.y),q.map.depthTexture=new Zi(s.x,s.y,Ui)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=Gi,this.type===$n?(q.map.depthTexture.compareFunction=W?Il:Pl,q.map.depthTexture.minFilter=Ye,q.map.depthTexture.magFilter=Ye):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ne,q.map.depthTexture.magFilter=Ne);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let Q=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Z.isPointLight!==!0&&q.updateMatrices(Z,v);for(let tt=0;tt<Q;tt++){let Rt=q.getCamera(tt);if(Z.isPointLight){let Et=q.camera,J=q.matrix,ct=Z.distance||Et.far;ct!==Et.far&&(Et.far=ct,Et.updateProjectionMatrix()),xa.setFromMatrixPosition(Z.matrixWorld),Et.position.copy(xa),vh.copy(Et.position),vh.add(mx[tt]),Et.up.copy(gx[tt]),Et.lookAt(vh),Et.updateMatrixWorld(),J.makeTranslation(-xa.x,-xa.y,-xa.z),Wd.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Wd,Et.coordinateSystem,Et.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,tt),n.clear();else{tt===0&&(n.setRenderTarget(q.map),n.clear());let Et=q.getViewport(tt);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),N.viewport(a)}i=q.getFrustum(tt),x(C,v,Rt,Z,this.type)}q.isPointLightShadow!==!0&&this.type===Xs&&S(q,v),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,P,I)};function S(M,C){let v=t.update(y);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Ee(s.x,s.y,{format:Fn,type:Le}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(C,null,v,u,y,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(C,null,v,f,y,null)}function E(M,C,v,w){let P=null,I=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)P=I;else if(P=v.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=P.uuid,B=C.uuid,D=c[N];D===void 0&&(D={},c[N]=D);let z=D[B];z===void 0&&(z=P.clone(),D[B]=z,C.addEventListener("dispose",T)),P=z}if(P.visible=C.visible,P.wireframe=C.wireframe,w===Xs?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let N=n.properties.get(P);N.light=v}return P}function x(M,C,v,w,P){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===Xs)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let B=t.update(M),D=M.material;if(Array.isArray(D)){let z=B.groups;for(let Z=0,q=z.length;Z<q;Z++){let rt=z[Z],W=D[rt.materialIndex];if(W&&W.visible){let Q=E(M,W,w,P);M.onBeforeShadow(n,M,C,v,B,Q,rt),n.renderBufferDirect(v,null,B,Q,M,rt),M.onAfterShadow(n,M,C,v,B,Q,rt)}}}else if(D.visible){let z=E(M,D,w,P);M.onBeforeShadow(n,M,C,v,B,z,null),n.renderBufferDirect(v,null,B,z,M,null),M.onAfterShadow(n,M,C,v,B,z,null)}}let N=M.children;for(let B=0,D=N.length;B<D;B++)x(N[B],C,v,w,P)}function T(M){M.target.removeEventListener("dispose",T);for(let v in c){let w=c[v],P=M.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function xx(n,t){function e(){let F=!1,Mt=new Se,nt=null,bt=new Se(0,0,0,0);return{setMask:function(At){nt!==At&&!F&&(n.colorMask(At,At,At,At),nt=At)},setLocked:function(At){F=At},setClear:function(At,lt,Vt,Ut,Me){Me===!0&&(At*=Ut,lt*=Ut,Vt*=Ut),Mt.set(At,lt,Vt,Ut),bt.equals(Mt)===!1&&(n.clearColor(At,lt,Vt,Ut),bt.copy(Mt))},reset:function(){F=!1,nt=null,bt.set(-1,0,0,0)}}}function i(){let F=!1,Mt=!1,nt=null,bt=null,At=null;return{setReversed:function(lt){if(Mt!==lt){let Vt=t.get("EXT_clip_control");lt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Mt=lt;let Ut=At;At=null,this.setClear(Ut)}},getReversed:function(){return Mt},setTest:function(lt){lt?X(n.DEPTH_TEST):et(n.DEPTH_TEST)},setMask:function(lt){nt!==lt&&!F&&(n.depthMask(lt),nt=lt)},setFunc:function(lt){if(Mt&&(lt=md[lt]),bt!==lt){switch(lt){case ao:n.depthFunc(n.NEVER);break;case oo:n.depthFunc(n.ALWAYS);break;case lo:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case co:n.depthFunc(n.EQUAL);break;case ho:n.depthFunc(n.GEQUAL);break;case uo:n.depthFunc(n.GREATER);break;case fo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}bt=lt}},setLocked:function(lt){F=lt},setClear:function(lt){At!==lt&&(At=lt,Mt&&(lt=1-lt),n.clearDepth(lt))},reset:function(){F=!1,nt=null,bt=null,At=null,Mt=!1}}}function s(){let F=!1,Mt=null,nt=null,bt=null,At=null,lt=null,Vt=null,Ut=null,Me=null;return{setTest:function(fe){F||(fe?X(n.STENCIL_TEST):et(n.STENCIL_TEST))},setMask:function(fe){Mt!==fe&&!F&&(n.stencilMask(fe),Mt=fe)},setFunc:function(fe,Ei,Oi){(nt!==fe||bt!==Ei||At!==Oi)&&(n.stencilFunc(fe,Ei,Oi),nt=fe,bt=Ei,At=Oi)},setOp:function(fe,Ei,Oi){(lt!==fe||Vt!==Ei||Ut!==Oi)&&(n.stencilOp(fe,Ei,Oi),lt=fe,Vt=Ei,Ut=Oi)},setLocked:function(fe){F=fe},setClear:function(fe){Me!==fe&&(n.clearStencil(fe),Me=fe)},reset:function(){F=!1,Mt=null,nt=null,bt=null,At=null,lt=null,Vt=null,Ut=null,Me=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,E=null,x=null,T=null,M=null,C=null,v=new Lt(0,0,0),w=0,P=!1,I=null,N=null,B=null,D=null,z=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,rt=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=rt>=1):W.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=rt>=2);let Q=null,tt={},Rt=n.getParameter(n.SCISSOR_BOX),Et=n.getParameter(n.VIEWPORT),J=new Se().fromArray(Rt),ct=new Se().fromArray(Et);function yt(F,Mt,nt,bt){let At=new Uint8Array(4),lt=n.createTexture();n.bindTexture(F,lt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Vt=0;Vt<nt;Vt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(Mt+Vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return lt}let k={};k[n.TEXTURE_2D]=yt(n.TEXTURE_2D,n.TEXTURE_2D,1),k[n.TEXTURE_CUBE_MAP]=yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[n.TEXTURE_2D_ARRAY]=yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),k[n.TEXTURE_3D]=yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(n.DEPTH_TEST),a.setFunc(As),ut(!1),pt(Wc),X(n.CULL_FACE),at(Fe);function X(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function et(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function xt(F,Mt){return u[F]!==Mt?(n.bindFramebuffer(F,Mt),u[F]=Mt,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Mt),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function ft(F,Mt){let nt=g,bt=!1;if(F){nt=f.get(Mt),nt===void 0&&(nt=[],f.set(Mt,nt));let At=F.textures;if(nt.length!==At.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Vt=At.length;lt<Vt;lt++)nt[lt]=n.COLOR_ATTACHMENT0+lt;nt.length=At.length,bt=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,bt=!0);bt&&n.drawBuffers(nt)}function Bt(F){return y!==F?(n.useProgram(F),y=F,!0):!1}let se={[yi]:n.FUNC_ADD,[ku]:n.FUNC_SUBTRACT,[Vu]:n.FUNC_REVERSE_SUBTRACT};se[Hu]=n.MIN,se[Gu]=n.MAX;let it={[Kn]:n.ZERO,[Wu]:n.ONE,[Xu]:n.SRC_COLOR,[Yc]:n.SRC_ALPHA,[$u]:n.SRC_ALPHA_SATURATE,[na]:n.DST_COLOR,[ia]:n.DST_ALPHA,[qu]:n.ONE_MINUS_SRC_COLOR,[Zc]:n.ONE_MINUS_SRC_ALPHA,[Zu]:n.ONE_MINUS_DST_COLOR,[Yu]:n.ONE_MINUS_DST_ALPHA,[Ju]:n.CONSTANT_COLOR,[Ku]:n.ONE_MINUS_CONSTANT_COLOR,[ju]:n.CONSTANT_ALPHA,[Qu]:n.ONE_MINUS_CONSTANT_ALPHA};function at(F,Mt,nt,bt,At,lt,Vt,Ut,Me,fe){if(F===Fe){m===!0&&(et(n.BLEND),m=!1);return}if(m===!1&&(X(n.BLEND),m=!0),F!==Ho){if(F!==p||fe!==P){if((S!==yi||T!==yi)&&(n.blendEquation(n.FUNC_ADD),S=yi,T=yi),fe)switch(F){case Dn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jn:n.blendFunc(n.ONE,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xt("WebGLState: Invalid blending: ",F);break}else switch(F){case Dn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xc:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qc:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",F);break}E=null,x=null,M=null,C=null,v.set(0,0,0),w=0,p=F,P=fe}return}At=At||Mt,lt=lt||nt,Vt=Vt||bt,(Mt!==S||At!==T)&&(n.blendEquationSeparate(se[Mt],se[At]),S=Mt,T=At),(nt!==E||bt!==x||lt!==M||Vt!==C)&&(n.blendFuncSeparate(it[nt],it[bt],it[lt],it[Vt]),E=nt,x=bt,M=lt,C=Vt),(Ut.equals(v)===!1||Me!==w)&&(n.blendColor(Ut.r,Ut.g,Ut.b,Me),v.copy(Ut),w=Me),p=F,P=!1}function ht(F,Mt){F.side===vi?et(n.CULL_FACE):X(n.CULL_FACE);let nt=F.side===Ze;Mt&&(nt=!nt),ut(nt),F.blending===Dn&&F.transparent===!1?at(Fe):at(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let bt=F.stencilWrite;o.setTest(bt),bt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),zt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?X(n.SAMPLE_ALPHA_TO_COVERAGE):et(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(F){I!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),I=F)}function pt(F){F!==Ou?(X(n.CULL_FACE),F!==N&&(F===Wc?n.cullFace(n.BACK):F===Bu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):et(n.CULL_FACE),N=F}function Ht(F){F!==B&&(q&&n.lineWidth(F),B=F)}function zt(F,Mt,nt){F?(X(n.POLYGON_OFFSET_FILL),(D!==Mt||z!==nt)&&(D=Mt,z=nt,a.getReversed()&&(Mt=-Mt),n.polygonOffset(Mt,nt))):et(n.POLYGON_OFFSET_FILL)}function Gt(F){F?X(n.SCISSOR_TEST):et(n.SCISSOR_TEST)}function Yt(F){F===void 0&&(F=n.TEXTURE0+Z-1),Q!==F&&(n.activeTexture(F),Q=F)}function L(F,Mt,nt){nt===void 0&&(Q===null?nt=n.TEXTURE0+Z-1:nt=Q);let bt=tt[nt];bt===void 0&&(bt={type:void 0,texture:void 0},tt[nt]=bt),(bt.type!==F||bt.texture!==Mt)&&(Q!==nt&&(n.activeTexture(nt),Q=nt),n.bindTexture(F,Mt||k[F]),bt.type=F,bt.texture=Mt)}function le(){let F=tt[Q];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Kt(){try{n.compressedTexImage2D(...arguments)}catch(F){Xt("WebGLState:",F)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(F){Xt("WebGLState:",F)}}function _(){try{n.texSubImage2D(...arguments)}catch(F){Xt("WebGLState:",F)}}function O(){try{n.texSubImage3D(...arguments)}catch(F){Xt("WebGLState:",F)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Xt("WebGLState:",F)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Xt("WebGLState:",F)}}function dt(){try{n.texStorage2D(...arguments)}catch(F){Xt("WebGLState:",F)}}function mt(){try{n.texStorage3D(...arguments)}catch(F){Xt("WebGLState:",F)}}function K(){try{n.texImage2D(...arguments)}catch(F){Xt("WebGLState:",F)}}function st(){try{n.texImage3D(...arguments)}catch(F){Xt("WebGLState:",F)}}function vt(F){return d[F]!==void 0?d[F]:n.getParameter(F)}function Ft(F,Mt){d[F]!==Mt&&(n.pixelStorei(F,Mt),d[F]=Mt)}function _t(F){J.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),J.copy(F))}function gt(F){ct.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ct.copy(F))}function It(F,Mt){let nt=c.get(Mt);nt===void 0&&(nt=new WeakMap,c.set(Mt,nt));let bt=nt.get(F);bt===void 0&&(bt=n.getUniformBlockIndex(Mt,F.name),nt.set(F,bt))}function kt(F,Mt){let bt=c.get(Mt).get(F);l.get(Mt)!==bt&&(n.uniformBlockBinding(Mt,bt,F.__bindingPointIndex),l.set(Mt,bt))}function Zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,tt={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,E=null,x=null,T=null,M=null,C=null,v=new Lt(0,0,0),w=0,P=!1,I=null,N=null,B=null,D=null,z=null,J.set(0,0,n.canvas.width,n.canvas.height),ct.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:X,disable:et,bindFramebuffer:xt,drawBuffers:ft,useProgram:Bt,setBlending:at,setMaterial:ht,setFlipSided:ut,setCullFace:pt,setLineWidth:Ht,setPolygonOffset:zt,setScissorTest:Gt,activeTexture:Yt,bindTexture:L,unbindTexture:le,compressedTexImage2D:Kt,compressedTexImage3D:R,texImage2D:K,texImage3D:st,pixelStorei:Ft,getParameter:vt,updateUBOMapping:It,uniformBlockBinding:kt,texStorage2D:dt,texStorage3D:mt,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:$,scissor:_t,viewport:gt,reset:Zt}}function vx(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,_){return g?new OffscreenCanvas(R,_):wr("canvas")}function m(R,_,O){let V=1,$=Kt(R);if(($.width>O||$.height>O)&&(V=O/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let dt=Math.floor(V*$.width),mt=Math.floor(V*$.height);u===void 0&&(u=y(dt,mt));let K=_?y(dt,mt):u;return K.width=dt,K.height=mt,K.getContext("2d").drawImage(R,0,0,dt,mt),qt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+dt+"x"+mt+")."),K}else return"data"in R&&qt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function p(R){return R.generateMipmaps}function S(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,_,O,V,$,dt=!1){if(R!==null){if(n[R]!==void 0)return n[R];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let mt;V&&(mt=t.get("EXT_texture_norm16"),mt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===n.RED&&(O===n.FLOAT&&(K=n.R32F),O===n.HALF_FLOAT&&(K=n.R16F),O===n.UNSIGNED_BYTE&&(K=n.R8),O===n.UNSIGNED_SHORT&&mt&&(K=mt.R16_EXT),O===n.SHORT&&mt&&(K=mt.R16_SNORM_EXT)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.R8UI),O===n.UNSIGNED_SHORT&&(K=n.R16UI),O===n.UNSIGNED_INT&&(K=n.R32UI),O===n.BYTE&&(K=n.R8I),O===n.SHORT&&(K=n.R16I),O===n.INT&&(K=n.R32I)),_===n.RG&&(O===n.FLOAT&&(K=n.RG32F),O===n.HALF_FLOAT&&(K=n.RG16F),O===n.UNSIGNED_BYTE&&(K=n.RG8),O===n.UNSIGNED_SHORT&&mt&&(K=mt.RG16_EXT),O===n.SHORT&&mt&&(K=mt.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RG8UI),O===n.UNSIGNED_SHORT&&(K=n.RG16UI),O===n.UNSIGNED_INT&&(K=n.RG32UI),O===n.BYTE&&(K=n.RG8I),O===n.SHORT&&(K=n.RG16I),O===n.INT&&(K=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGB8UI),O===n.UNSIGNED_SHORT&&(K=n.RGB16UI),O===n.UNSIGNED_INT&&(K=n.RGB32UI),O===n.BYTE&&(K=n.RGB8I),O===n.SHORT&&(K=n.RGB16I),O===n.INT&&(K=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),O===n.UNSIGNED_INT&&(K=n.RGBA32UI),O===n.BYTE&&(K=n.RGBA8I),O===n.SHORT&&(K=n.RGBA16I),O===n.INT&&(K=n.RGBA32I)),_===n.RGB&&(O===n.UNSIGNED_SHORT&&mt&&(K=mt.RGB16_EXT),O===n.SHORT&&mt&&(K=mt.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),_===n.RGBA){let st=dt?Tr:ee.getTransfer($);O===n.FLOAT&&(K=n.RGBA32F),O===n.HALF_FLOAT&&(K=n.RGBA16F),O===n.UNSIGNED_BYTE&&(K=st===he?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&mt&&(K=mt.RGBA16_EXT),O===n.SHORT&&mt&&(K=mt.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function T(R,_){let O;return R?_===null||_===Ui||_===Un?O=n.DEPTH24_STENCIL8:_===Mi?O=n.DEPTH32F_STENCIL8:_===qs&&(O=n.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ui||_===Un?O=n.DEPTH_COMPONENT24:_===Mi?O=n.DEPTH_COMPONENT32F:_===qs&&(O=n.DEPTH_COMPONENT16),O}function M(R,_){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ne&&R.minFilter!==Ye?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function C(R){let _=R.target;_.removeEventListener("dispose",C),w(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(R){let _=R.target;_.removeEventListener("dispose",v),I(_)}function w(R){let _=i.get(R);if(_.__webglInit===void 0)return;let O=R.source,V=f.get(O);if(V){let $=V[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(R),Object.keys(V).length===0&&f.delete(O)}i.remove(R)}function P(R){let _=i.get(R);n.deleteTexture(_.__webglTexture);let O=R.source,V=f.get(O);delete V[_.__cacheKey],a.memory.textures--}function I(R){let _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let $=0;$<_.__webglFramebuffer[V].length;$++)n.deleteFramebuffer(_.__webglFramebuffer[V][$]);else n.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)n.deleteFramebuffer(_.__webglFramebuffer[V]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=R.textures;for(let V=0,$=O.length;V<$;V++){let dt=i.get(O[V]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),a.memory.textures--),i.remove(O[V])}i.remove(R)}let N=0;function B(){N=0}function D(){return N}function z(R){N=R}function Z(){let R=N;return R>=s.maxTextures&&qt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,R}function q(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function rt(R,_){let O=i.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){let V=R.image;if(V===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{et(O,R,_);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function W(R,_){let O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){et(O,R,_);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function Q(R,_){let O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){et(O,R,_);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function tt(R,_){let O=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){xt(O,R,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}let Rt={[Hi]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[po]:n.MIRRORED_REPEAT},Et={[Ne]:n.NEAREST,[id]:n.NEAREST_MIPMAP_NEAREST,[ha]:n.NEAREST_MIPMAP_LINEAR,[Ye]:n.LINEAR,[qo]:n.LINEAR_MIPMAP_NEAREST,[Ji]:n.LINEAR_MIPMAP_LINEAR},J={[ad]:n.NEVER,[ud]:n.ALWAYS,[od]:n.LESS,[Pl]:n.LEQUAL,[ld]:n.EQUAL,[Il]:n.GEQUAL,[cd]:n.GREATER,[hd]:n.NOTEQUAL};function ct(R,_){if(_.type===Mi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ye||_.magFilter===qo||_.magFilter===ha||_.magFilter===Ji||_.minFilter===Ye||_.minFilter===qo||_.minFilter===ha||_.minFilter===Ji)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Rt[_.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Rt[_.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Rt[_.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Et[_.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Et[_.minFilter]),_.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,J[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ne||_.minFilter!==ha&&_.minFilter!==Ji||_.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function yt(R,_){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",C));let V=_.source,$=f.get(V);$===void 0&&($={},f.set(V,$));let dt=q(_);if(dt!==R.__cacheKey){$[dt]===void 0&&($[dt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[dt].usedTimes++;let mt=$[R.__cacheKey];mt!==void 0&&($[R.__cacheKey].usedTimes--,mt.usedTimes===0&&P(_)),R.__cacheKey=dt,R.__webglTexture=$[dt].texture}return O}function k(R,_,O){return Math.floor(Math.floor(R/O)/_)}function X(R,_,O,V){let dt=R.updateRanges;if(dt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,O,V,_.data);else{dt.sort((Ft,_t)=>Ft.start-_t.start);let mt=0;for(let Ft=1;Ft<dt.length;Ft++){let _t=dt[mt],gt=dt[Ft],It=_t.start+_t.count,kt=k(gt.start,_.width,4),Zt=k(_t.start,_.width,4);gt.start<=It+1&&kt===Zt&&k(gt.start+gt.count-1,_.width,4)===kt?_t.count=Math.max(_t.count,gt.start+gt.count-_t.start):(++mt,dt[mt]=gt)}dt.length=mt+1;let K=e.getParameter(n.UNPACK_ROW_LENGTH),st=e.getParameter(n.UNPACK_SKIP_PIXELS),vt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Ft=0,_t=dt.length;Ft<_t;Ft++){let gt=dt[Ft],It=Math.floor(gt.start/4),kt=Math.ceil(gt.count/4),Zt=It%_.width,F=Math.floor(It/_.width),Mt=kt,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(n.UNPACK_SKIP_ROWS,F),e.texSubImage2D(n.TEXTURE_2D,0,Zt,F,Mt,nt,O,V,_.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,st),e.pixelStorei(n.UNPACK_SKIP_ROWS,vt)}}function et(R,_,O){let V=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=n.TEXTURE_3D);let $=yt(R,_),dt=_.source;e.bindTexture(V,R.__webglTexture,n.TEXTURE0+O);let mt=i.get(dt);if(dt.version!==mt.__version||$===!0){if(e.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let nt=ee.getPrimaries(ee.workingColorSpace),bt=_.colorSpace===pn?null:ee.getPrimaries(_.colorSpace),At=_.colorSpace===pn||nt===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let st=m(_.image,!1,s.maxTextureSize);st=le(_,st);let vt=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type),_t=x(_.internalFormat,vt,Ft,_.normalized,_.colorSpace,_.isVideoTexture);ct(V,_);let gt,It=_.mipmaps,kt=_.isVideoTexture!==!0,Zt=mt.__version===void 0||$===!0,F=dt.dataReady,Mt=M(_,st);if(_.isDepthTexture)_t=T(_.format===Ki,_.type),Zt&&(kt?e.texStorage2D(n.TEXTURE_2D,1,_t,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,_t,st.width,st.height,0,vt,Ft,null));else if(_.isDataTexture)if(It.length>0){kt&&Zt&&e.texStorage2D(n.TEXTURE_2D,Mt,_t,It[0].width,It[0].height);for(let nt=0,bt=It.length;nt<bt;nt++)gt=It[nt],kt?F&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,gt.width,gt.height,vt,Ft,gt.data):e.texImage2D(n.TEXTURE_2D,nt,_t,gt.width,gt.height,0,vt,Ft,gt.data);_.generateMipmaps=!1}else kt?(Zt&&e.texStorage2D(n.TEXTURE_2D,Mt,_t,st.width,st.height),F&&X(_,st,vt,Ft)):e.texImage2D(n.TEXTURE_2D,0,_t,st.width,st.height,0,vt,Ft,st.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){kt&&Zt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,_t,It[0].width,It[0].height,st.depth);for(let nt=0,bt=It.length;nt<bt;nt++)if(gt=It[nt],_.format!==hi)if(vt!==null)if(kt){if(F)if(_.layerUpdates.size>0){let At=lh(gt.width,gt.height,_.format,_.type);for(let lt of _.layerUpdates){let Vt=gt.data.subarray(lt*At/gt.data.BYTES_PER_ELEMENT,(lt+1)*At/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,lt,gt.width,gt.height,1,vt,Vt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,gt.width,gt.height,st.depth,vt,gt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,_t,gt.width,gt.height,st.depth,0,gt.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,gt.width,gt.height,st.depth,vt,Ft,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,_t,gt.width,gt.height,st.depth,0,vt,Ft,gt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{kt&&Zt&&e.texStorage2D(n.TEXTURE_2D,Mt,_t,It[0].width,It[0].height);for(let nt=0,bt=It.length;nt<bt;nt++)gt=It[nt],_.format!==hi?vt!==null?kt?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,gt.width,gt.height,vt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,_t,gt.width,gt.height,0,gt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?F&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,gt.width,gt.height,vt,Ft,gt.data):e.texImage2D(n.TEXTURE_2D,nt,_t,gt.width,gt.height,0,vt,Ft,gt.data)}else if(_.isDataArrayTexture)if(kt){if(Zt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,_t,st.width,st.height,st.depth),F)if(_.layerUpdates.size>0){let nt=lh(st.width,st.height,_.format,_.type);for(let bt of _.layerUpdates){let At=st.data.subarray(bt*nt/st.data.BYTES_PER_ELEMENT,(bt+1)*nt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,bt,st.width,st.height,1,vt,Ft,At)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Ft,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,_t,st.width,st.height,st.depth,0,vt,Ft,st.data);else if(_.isData3DTexture)kt?(Zt&&e.texStorage3D(n.TEXTURE_3D,Mt,_t,st.width,st.height,st.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Ft,st.data)):e.texImage3D(n.TEXTURE_3D,0,_t,st.width,st.height,st.depth,0,vt,Ft,st.data);else if(_.isFramebufferTexture){if(Zt)if(kt)e.texStorage2D(n.TEXTURE_2D,Mt,_t,st.width,st.height);else{let nt=st.width,bt=st.height;for(let At=0;At<Mt;At++)e.texImage2D(n.TEXTURE_2D,At,_t,nt,bt,0,vt,Ft,null),nt>>=1,bt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),st.parentNode!==nt){nt.appendChild(st),d.add(_),nt.onpaint=bt=>{let At=bt.changedElements;for(let lt of d)At.includes(lt.image)&&(lt.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,st);else{let At=n.RGBA,lt=n.RGBA,Vt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,At,lt,Vt,st)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(It.length>0){if(kt&&Zt){let nt=Kt(It[0]);e.texStorage2D(n.TEXTURE_2D,Mt,_t,nt.width,nt.height)}for(let nt=0,bt=It.length;nt<bt;nt++)gt=It[nt],kt?F&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,vt,Ft,gt):e.texImage2D(n.TEXTURE_2D,nt,_t,vt,Ft,gt);_.generateMipmaps=!1}else if(kt){if(Zt){let nt=Kt(st);e.texStorage2D(n.TEXTURE_2D,Mt,_t,nt.width,nt.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Ft,st)}else e.texImage2D(n.TEXTURE_2D,0,_t,vt,Ft,st);p(_)&&S(V),mt.__version=dt.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function xt(R,_,O){if(_.image.length!==6)return;let V=yt(R,_),$=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+O);let dt=i.get($);if($.version!==dt.__version||V===!0){e.activeTexture(n.TEXTURE0+O);let mt=ee.getPrimaries(ee.workingColorSpace),K=_.colorSpace===pn?null:ee.getPrimaries(_.colorSpace),st=_.colorSpace===pn||mt===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let vt=_.isCompressedTexture||_.image[0].isCompressedTexture,Ft=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let lt=0;lt<6;lt++)!vt&&!Ft?_t[lt]=m(_.image[lt],!0,s.maxCubemapSize):_t[lt]=Ft?_.image[lt].image:_.image[lt],_t[lt]=le(_,_t[lt]);let gt=_t[0],It=r.convert(_.format,_.colorSpace),kt=r.convert(_.type),Zt=x(_.internalFormat,It,kt,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,Mt=dt.__version===void 0||V===!0,nt=$.dataReady,bt=M(_,gt);ct(n.TEXTURE_CUBE_MAP,_);let At;if(vt){F&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,Zt,gt.width,gt.height);for(let lt=0;lt<6;lt++){At=_t[lt].mipmaps;for(let Vt=0;Vt<At.length;Vt++){let Ut=At[Vt];_.format!==hi?It!==null?F?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,0,0,Ut.width,Ut.height,It,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,Zt,Ut.width,Ut.height,0,Ut.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,0,0,Ut.width,Ut.height,It,kt,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt,Zt,Ut.width,Ut.height,0,It,kt,Ut.data)}}}else{if(At=_.mipmaps,F&&Mt){At.length>0&&bt++;let lt=Kt(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,Zt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Ft){F?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,_t[lt].width,_t[lt].height,It,kt,_t[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Zt,_t[lt].width,_t[lt].height,0,It,kt,_t[lt].data);for(let Vt=0;Vt<At.length;Vt++){let Me=At[Vt].image[lt].image;F?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,0,0,Me.width,Me.height,It,kt,Me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,Zt,Me.width,Me.height,0,It,kt,Me.data)}}else{F?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,It,kt,_t[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Zt,It,kt,_t[lt]);for(let Vt=0;Vt<At.length;Vt++){let Ut=At[Vt];F?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,0,0,It,kt,Ut.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Vt+1,Zt,It,kt,Ut.image[lt])}}}p(_)&&S(n.TEXTURE_CUBE_MAP),dt.__version=$.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function ft(R,_,O,V,$,dt){let mt=r.convert(O.format,O.colorSpace),K=r.convert(O.type),st=x(O.internalFormat,mt,K,O.normalized,O.colorSpace),vt=i.get(_),Ft=i.get(O);if(Ft.__renderTarget=_,!vt.__hasExternalTextures){let _t=Math.max(1,_.width>>dt),gt=Math.max(1,_.height>>dt);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,dt,st,_t,gt,_.depth,0,mt,K,null):e.texImage2D($,dt,st,_t,gt,0,mt,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Yt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,$,Ft.__webglTexture,0,Gt(_)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,$,Ft.__webglTexture,dt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(R,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,R),_.depthBuffer){let V=_.depthTexture,$=V&&V.isDepthTexture?V.type:null,dt=T(_.stencilBuffer,$),mt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Yt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt(_),dt,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt(_),dt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,dt,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,R)}else{let V=_.textures;for(let $=0;$<V.length;$++){let dt=V[$],mt=r.convert(dt.format,dt.colorSpace),K=r.convert(dt.type),st=x(dt.internalFormat,mt,K,dt.normalized,dt.colorSpace);Yt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt(_),st,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt(_),st,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,st,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(R,_,O){let V=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(_.depthTexture);if($.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if($.__webglInit===void 0&&($.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ct(n.TEXTURE_CUBE_MAP,_.depthTexture);let vt=r.convert(_.depthTexture.format),Ft=r.convert(_.depthTexture.type),_t;_.depthTexture.format===Gi?_t=n.DEPTH_COMPONENT24:_.depthTexture.format===Ki&&(_t=n.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,_t,_.width,_.height,0,vt,Ft,null)}}else rt(_.depthTexture,0);let dt=$.__webglTexture,mt=Gt(_),K=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,st=_.depthTexture.format===Ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Gi)Yt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,K,dt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,st,K,dt,0);else if(_.depthTexture.format===Ki)Yt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,K,dt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,st,K,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(R){let _=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let V=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){let $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=V}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)se(_.__webglFramebuffer[V],R,V);else{let V=R.texture.mipmaps;V&&V.length>0?se(_.__webglFramebuffer[0],R,0):se(_.__webglFramebuffer,R,0)}else if(O){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=n.createRenderbuffer(),Bt(_.__webglDepthbuffer[V],R,!1);else{let $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,dt)}}else{let V=R.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Bt(_.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,dt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(R,_,O){let V=i.get(R);_!==void 0&&ft(V.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&it(R)}function ht(R){let _=R.texture,O=i.get(R),V=i.get(_);R.addEventListener("dispose",v);let $=R.textures,dt=R.isWebGLCubeRenderTarget===!0,mt=$.length>1;if(mt||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=_.version,a.memory.textures++),dt){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let st=0;st<_.mipmaps.length;st++)O.__webglFramebuffer[K][st]=n.createFramebuffer()}else O.__webglFramebuffer[K]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)O.__webglFramebuffer[K]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(mt)for(let K=0,st=$.length;K<st;K++){let vt=i.get($[K]);vt.__webglTexture===void 0&&(vt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Yt(R)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){let st=$[K];O.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[K]);let vt=r.convert(st.format,st.colorSpace),Ft=r.convert(st.type),_t=x(st.internalFormat,vt,Ft,st.normalized,st.colorSpace,R.isXRRenderTarget===!0),gt=Gt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,_t,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,O.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Bt(O.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(dt){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ct(n.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let st=0;st<_.mipmaps.length;st++)ft(O.__webglFramebuffer[K][st],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,st);else ft(O.__webglFramebuffer[K],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(_)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let K=0,st=$.length;K<st;K++){let vt=$[K],Ft=i.get(vt),_t=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,Ft.__webglTexture),ct(_t,vt),ft(O.__webglFramebuffer,R,vt,n.COLOR_ATTACHMENT0+K,_t,0),p(vt)&&S(_t)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,V.__webglTexture),ct(K,_),_.mipmaps&&_.mipmaps.length>0)for(let st=0;st<_.mipmaps.length;st++)ft(O.__webglFramebuffer[st],R,_,n.COLOR_ATTACHMENT0,K,st);else ft(O.__webglFramebuffer,R,_,n.COLOR_ATTACHMENT0,K,0);p(_)&&S(K),e.unbindTexture()}R.depthBuffer&&it(R)}function ut(R){let _=R.textures;for(let O=0,V=_.length;O<V;O++){let $=_[O];if(p($)){let dt=E(R),mt=i.get($).__webglTexture;e.bindTexture(dt,mt),S(dt),e.unbindTexture()}}}let pt=[],Ht=[];function zt(R){if(R.samples>0){if(Yt(R)===!1){let _=R.textures,O=R.width,V=R.height,$=n.COLOR_BUFFER_BIT,dt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(R),K=_.length>1;if(K)for(let vt=0;vt<_.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let st=R.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let vt=0;vt<_.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[vt]);let Ft=i.get(_[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ft,0)}n.blitFramebuffer(0,0,O,V,0,0,O,V,$,n.NEAREST),l===!0&&(pt.length=0,Ht.length=0,pt.push(n.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(pt.push(dt),Ht.push(dt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ht)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let vt=0;vt<_.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,mt.__webglColorRenderbuffer[vt]);let Ft=i.get(_[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let _=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Gt(R){return Math.min(s.maxSamples,R.samples)}function Yt(R){let _=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(R){let _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function le(R,_){let O=R.colorSpace,V=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Sr&&O!==pn&&(ee.getTransfer(O)===he?(V!==hi||$!==Qe)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",O)),_}function Kt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=B,this.getTextureUnits=D,this.setTextureUnits=z,this.setTexture2D=rt,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=tt,this.rebindTextures=at,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function yx(n,t){function e(i,s=pn){let r,a=ee.getTransfer(s);if(i===Qe)return n.UNSIGNED_BYTE;if(i===Zo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$o)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jc)return n.BYTE;if(i===Kc)return n.SHORT;if(i===qs)return n.UNSIGNED_SHORT;if(i===Yo)return n.INT;if(i===Ui)return n.UNSIGNED_INT;if(i===Mi)return n.FLOAT;if(i===Le)return n.HALF_FLOAT;if(i===th)return n.ALPHA;if(i===eh)return n.RGB;if(i===hi)return n.RGBA;if(i===Gi)return n.DEPTH_COMPONENT;if(i===Ki)return n.DEPTH_STENCIL;if(i===Jo)return n.RED;if(i===Ko)return n.RED_INTEGER;if(i===Fn)return n.RG;if(i===jo)return n.RG_INTEGER;if(i===Qo)return n.RGBA_INTEGER;if(i===ua||i===da||i===fa||i===pa)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tl||i===el||i===il||i===nl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sl||i===rl||i===al||i===ol||i===ll||i===ma||i===cl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sl||i===rl)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===al)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ol)return r.COMPRESSED_R11_EAC;if(i===ll)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ma)return r.COMPRESSED_RG11_EAC;if(i===cl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===_l||i===xl||i===vl||i===yl||i===Ml||i===bl||i===Sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ul)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ml)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_l)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ml)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tl||i===wl||i===El)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Tl)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Al||i===Rl||i===ga||i===Cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Al)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Un?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bx=`
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

}`,Ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Fr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ye({vertexShader:Mx,fragmentShader:bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new Vs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rh=class extends Wi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new Ah,p={},S=e.getContextAttributes(),E=null,x=null,T=[],M=[],C=new j,v=null,w=null,P=new qe;P.viewport=new Se;let I=new qe;I.viewport=new Se;let N=[P,I],B=new ko,D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let X=T[k];return X===void 0&&(X=new Ls,T[k]=X),X.getTargetRaySpace()},this.getControllerGrip=function(k){let X=T[k];return X===void 0&&(X=new Ls,T[k]=X),X.getGripSpace()},this.getHand=function(k){let X=T[k];return X===void 0&&(X=new Ls,T[k]=X),X.getHandSpace()};function Z(k){let X=M.indexOf(k.inputSource);if(X===-1)return;let et=T[X];et!==void 0&&(et.update(k.inputSource,k.frame,c||a),et.dispatchEvent({type:k.type,data:k.inputSource}))}function q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",rt);for(let k=0;k<T.length;k++){let X=M[k];X!==null&&(M[k]=null,T[k].disconnect(X))}D=null,z=null,m.reset();for(let k in p)delete p[k];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,x=null,yt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(C.width,C.height,!1),w!==null){let k=w.camera;k.fov=w.fov,k.zoom=w.zoom,k.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",rt),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,xt=null,ft=null;S.depth&&(ft=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=S.stencil?Ki:Gi,xt=S.stencil?Un:Ui);let Bt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Ee(u.textureWidth,u.textureHeight,{format:hi,type:Qe,depthTexture:new Zi(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let et={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ee(f.framebufferWidth,f.framebufferHeight,{format:hi,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),yt.setContext(s),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(k){for(let X=0;X<k.removed.length;X++){let et=k.removed[X],xt=M.indexOf(et);xt>=0&&(M[xt]=null,T[xt].disconnect(et))}for(let X=0;X<k.added.length;X++){let et=k.added[X],xt=M.indexOf(et);if(xt===-1){for(let Bt=0;Bt<T.length;Bt++)if(Bt>=M.length){M.push(et),xt=Bt;break}else if(M[Bt]===null){M[Bt]=et,xt=Bt;break}if(xt===-1)break}let ft=T[xt];ft&&ft.connect(et)}}let W=new A,Q=new A;function tt(k,X,et){W.setFromMatrixPosition(X.matrixWorld),Q.setFromMatrixPosition(et.matrixWorld);let xt=W.distanceTo(Q),ft=X.projectionMatrix.elements,Bt=et.projectionMatrix.elements,se=ft[14]/(ft[10]-1),it=ft[14]/(ft[10]+1),at=(ft[9]+1)/ft[5],ht=(ft[9]-1)/ft[5],ut=(ft[8]-1)/ft[0],pt=(Bt[8]+1)/Bt[0],Ht=se*ut,zt=se*pt,Gt=xt/(-ut+pt),Yt=Gt*-ut;if(X.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Yt),k.translateZ(Gt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),ft[10]===-1)k.projectionMatrix.copy(X.projectionMatrix),k.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let L=se+Gt,le=it+Gt,Kt=Ht-Yt,R=zt+(xt-Yt),_=at*it/le*L,O=ht*it/le*L;k.projectionMatrix.makePerspective(Kt,R,_,O,L,le),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Rt(k,X){X===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(X.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let X=k.near,et=k.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(et=m.depthFar)),B.near=I.near=P.near=X,B.far=I.far=P.far=et,(D!==B.near||z!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),D=B.near,z=B.far),B.layers.mask=k.layers.mask|6,P.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let xt=k.parent,ft=B.cameras;Rt(B,xt);for(let Bt=0;Bt<ft.length;Bt++)Rt(ft[Bt],xt);ft.length===2?tt(B,P,I):B.projectionMatrix.copy(P.projectionMatrix),w===null&&k.isPerspectiveCamera&&(w={camera:k,fov:k.fov,zoom:k.zoom}),Et(k,B,xt)};function Et(k,X,et){et===null?k.matrix.copy(X.matrixWorld):(k.matrix.copy(et.matrixWorld),k.matrix.invert(),k.matrix.multiply(X.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(X.projectionMatrix),k.projectionMatrixInverse.copy(X.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=go*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(k){l=k,u!==null&&(u.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(k){return p[k]};let J=null;function ct(k,X){if(h=X.getViewerPose(c||a),g=X,h!==null){let et=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let xt=!1;et.length!==B.cameras.length&&(B.cameras.length=0,xt=!0);for(let it=0;it<et.length;it++){let at=et[it],ht=null;if(f!==null)ht=f.getViewport(at);else{let pt=d.getViewSubImage(u,at);ht=pt.viewport,it===0&&(t.setRenderTargetTextures(x,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(x))}let ut=N[it];ut===void 0&&(ut=new qe,ut.layers.enable(it),ut.viewport=new Se,N[it]=ut),ut.matrix.fromArray(at.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(at.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ht.x,ht.y,ht.width,ht.height),it===0&&(B.matrix.copy(ut.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),xt===!0&&B.cameras.push(ut)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let it=d.getDepthInformation(et[0]);it&&it.isValid&&it.texture&&m.init(it,s.renderState)}if(ft&&ft.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let it=0;it<et.length;it++){let at=et[it].camera;if(at){let ht=p[at];ht||(ht=new Fr,p[at]=ht);let ut=d.getCameraImage(at);ht.sourceTexture=ut}}}}for(let et=0;et<T.length;et++){let xt=M[et],ft=T[et];xt!==null&&ft!==void 0&&ft.update(xt,X,c||a)}J&&J(k,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}let yt=new Xd;yt.setAnimationLoop(ct),this.setAnimationLoop=function(k){J=k},this.dispose=function(){}}},Sx=new oe,Kd=new $t;Kd.set(-1,0,0,0,1,0,0,0,1);function Tx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,rh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,E,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),E=S.envMap,x=S.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Kd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wx(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){let M=T.program;i.uniformBlockBinding(x,M)}function c(x,T){let M=s[x.id];M===void 0&&(m(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",S));let C=T.program;i.updateUBOMapping(x,C);let v=t.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function h(x){let T=d();x.__bindingPointIndex=T;let M=n.createBuffer(),C=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,M),M}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let T=s[x.id],M=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let v=0,w=M.length;v<w;v++){let P=M[v];if(Array.isArray(P))for(let I=0,N=P.length;I<N;I++)f(P[I],v,I,C);else f(P,v,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,T,M,C){if(y(x,T,M,C)===!0){let v=x.__offset,w=x.value;if(Array.isArray(w)){let P=0;for(let I=0;I<w.length;I++){let N=w[I],B=p(N);g(N,x.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function g(x,T,M){typeof x=="number"||typeof x=="boolean"?T[0]=x:x.isMatrix3?(T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0):ArrayBuffer.isView(x)?T.set(new x.constructor(x.buffer,x.byteOffset,T.length)):x.toArray(T,M)}function y(x,T,M,C){let v=x.value,w=T+"_"+M;if(C[w]===void 0)return typeof v=="number"||typeof v=="boolean"?C[w]=v:ArrayBuffer.isView(v)?C[w]=v.slice():C[w]=v.clone(),!0;{let P=C[w];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return C[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function m(x){let T=x.uniforms,M=0,C=16;for(let w=0,P=T.length;w<P;w++){let I=Array.isArray(T[w])?T[w]:[T[w]];for(let N=0,B=I.length;N<B;N++){let D=I[N],z=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,q=z.length;Z<q;Z++){let rt=z[Z],W=p(rt),Q=M%C,tt=Q%W.boundary,Rt=Q+tt;M+=tt,Rt!==0&&C-Rt<W.storage&&(M+=C-Rt),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=W.storage}}}let v=M%C;return v>0&&(M+=C-v),x.__size=M,x.__cache={},this}function p(x){let T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(T.boundary=16,T.storage=x.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",x),T}function S(x){let T=x.target;T.removeEventListener("dispose",S);let M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function E(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var Ex=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ji=null;function Ax(){return ji===null&&(ji=new dn(Ex,16,16,Fn,Le),ji.name="DFG_LUT",ji.minFilter=Ye,ji.magFilter=Ye,ji.wrapS=Vi,ji.wrapT=Vi,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}var Ul=class{constructor(t={}){let{canvas:e=dd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Qe}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=f,m=new Set([Qo,jo,Ko]),p=new Set([Qe,Ui,qs,Un,Zo,$o]),S=new Uint32Array(4),E=new Int32Array(4),x=new A,T=null,M=null,C=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,N=null,B=null,D=null,z=null;this._outputColorSpace=Re;let Z=0,q=0,rt=null,W=-1,Q=null,tt=new Se,Rt=new Se,Et=null,J=new Lt(0),ct=0,yt=e.width,k=e.height,X=1,et=null,xt=null,ft=new Se(0,0,yt,k),Bt=new Se(0,0,yt,k),se=!1,it=new Ns,at=!1,ht=!1,ut=new oe,pt=new A,Ht=new Se,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function Yt(){return rt===null?X:1}let L=i;function le(b,U){return e.getContext(b,U)}let Kt,R,_,O,V,$,dt,mt,K,st,vt,Ft,_t,gt,It,kt,Zt,F,Mt,nt,bt,At,lt;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Ei,!1),L===null){let U="webgl2";if(L=le(U,b),L===null)throw le(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(b){throw e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Ei,!1),Xt("WebGLRenderer: "+b.message),b}function Vt(){Kt=new Ng(L),Kt.init(),bt=new yx(L,Kt),R=new Tg(L,Kt,t,bt),_=new xx(L,Kt),R.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),B=L.createFramebuffer(),D=L.createFramebuffer(),z=L.createFramebuffer(),O=new Og(L),V=new sx,$=new vx(L,Kt,_,V,R,bt,O),dt=new Dg(P),mt=new zp(L),At=new bg(L,mt),K=new Ug(L,mt,O,At),st=new zg(L,K,mt,At,O),F=new Bg(L,R,$),It=new wg(V),vt=new nx(P,dt,Kt,R,At,It),Ft=new Tx(P,V),_t=new ax,gt=new dx(Kt),Zt=new Mg(P,dt,_,st,g,l),kt=new _x(P,st,R),lt=new wx(L,O,R,_),Mt=new Sg(L,Kt,O),nt=new Fg(L,Kt,O),O.programs=vt.programs,P.capabilities=R,P.extensions=Kt,P.properties=V,P.renderLists=_t,P.shadowMap=kt,P.state=_,P.info=O}y!==Qe&&(w=new Vg(y,e.width,e.height,o,s,r));let Ut=new Rh(P,L);this.xr=Ut,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=Kt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Kt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(yt,k,!1))},this.getSize=function(b){return b.set(yt,k)},this.setSize=function(b,U,Y=!0){if(Ut.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=b,k=U,e.width=Math.floor(b*X),e.height=Math.floor(U*X),Y===!0&&(e.style.width=b+"px",e.style.height=U+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(yt*X,k*X).floor()},this.setDrawingBufferSize=function(b,U,Y){yt=b,k=U,X=Y,e.width=Math.floor(b*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(y===Qe){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(tt)},this.getViewport=function(b){return b.copy(ft)},this.setViewport=function(b,U,Y,H){b.isVector4?ft.set(b.x,b.y,b.z,b.w):ft.set(b,U,Y,H),_.viewport(tt.copy(ft).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(Bt)},this.setScissor=function(b,U,Y,H){b.isVector4?Bt.set(b.x,b.y,b.z,b.w):Bt.set(b,U,Y,H),_.scissor(Rt.copy(Bt).multiplyScalar(X).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(b){_.setScissorTest(se=b)},this.setOpaqueSort=function(b){et=b},this.setTransparentSort=function(b){xt=b},this.getClearColor=function(b){return b.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,Y=!0){let H=0;if(b){let G=!1;if(rt!==null){let wt=rt.texture.format;G=m.has(wt)}if(G){let wt=rt.texture.type,Pt=p.has(wt),Tt=Zt.getClearColor(),Dt=Zt.getClearAlpha(),Ot=Tt.r,Qt=Tt.g,re=Tt.b;Pt?(S[0]=Ot,S[1]=Qt,S[2]=re,S[3]=Dt,L.clearBufferuiv(L.COLOR,0,S)):(E[0]=Ot,E[1]=Qt,E[2]=re,E[3]=Dt,L.clearBufferiv(L.COLOR,0,E))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Ei,!1),Zt.dispose(),_t.dispose(),gt.dispose(),V.dispose(),dt.dispose(),st.dispose(),At.dispose(),lt.dispose(),vt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",$h),Ut.removeEventListener("sessionend",Jh),Bn.stop()};function Me(b){b.preventDefault(),Er("WebGLRenderer: Context Lost."),I=!0}function fe(){Er("WebGLRenderer: Context Restored."),I=!1;let b=O.autoReset,U=kt.enabled,Y=kt.autoUpdate,H=kt.needsUpdate,G=kt.type;Vt(),O.autoReset=b,kt.enabled=U,kt.autoUpdate=Y,kt.needsUpdate=H,kt.type=G}function Ei(b){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Oi(b){let U=b.target;U.removeEventListener("dispose",Oi),bf(U)}function bf(b){Sf(b),V.remove(b)}function Sf(b){let U=V.get(b).programs;U!==void 0&&(U.forEach(function(Y){vt.releaseProgram(Y)}),b.isShaderMaterial&&vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,Y,H,G,wt){U===null&&(U=zt);let Pt=G.isMesh&&G.matrixWorld.determinantAffine()<0,Tt=Ef(b,U,Y,H,G);_.setMaterial(H,Pt);let Dt=Y.index,Ot=1;if(H.wireframe===!0){if(Dt=K.getWireframeAttribute(Y),Dt===void 0)return;Ot=2}let Qt=Y.drawRange,re=Y.attributes.position,Nt=Qt.start*Ot,pe=(Qt.start+Qt.count)*Ot;wt!==null&&(Nt=Math.max(Nt,wt.start*Ot),pe=Math.min(pe,(wt.start+wt.count)*Ot)),Dt!==null?(Nt=Math.max(Nt,0),pe=Math.min(pe,Dt.count)):re!=null&&(Nt=Math.max(Nt,0),pe=Math.min(pe,re.count));let Be=pe-Nt;if(Be<0||Be===1/0)return;At.setup(G,H,Tt,Y,Dt);let Te,ve=Mt;if(Dt!==null&&(Te=mt.get(Dt),ve=nt,ve.setIndex(Te)),G.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*Yt()),ve.setMode(L.LINES)):ve.setMode(L.TRIANGLES);else if(G.isLine){let Je=H.linewidth;Je===void 0&&(Je=1),_.setLineWidth(Je*Yt()),G.isLineSegments?ve.setMode(L.LINES):G.isLineLoop?ve.setMode(L.LINE_LOOP):ve.setMode(L.LINE_STRIP)}else G.isPoints?ve.setMode(L.POINTS):G.isSprite&&ve.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))ve.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Je=G._multiDrawStarts,Ct=G._multiDrawCounts,ni=G._multiDrawCount,ce=Dt?mt.get(Dt).bytesPerElement:1,_i=V.get(H).currentProgram.getUniforms();for(let Bi=0;Bi<ni;Bi++)_i.setValue(L,"_gl_DrawID",Bi),ve.render(Je[Bi]/ce,Ct[Bi])}else if(G.isInstancedMesh)ve.renderInstances(Nt,Be,G.count);else if(Y.isInstancedBufferGeometry){let Je=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ct=Math.min(Y.instanceCount,Je);ve.renderInstances(Nt,Be,Ct)}else ve.render(Nt,Be)};function Zh(b,U,Y,H){N!==null&&b.isNodeMaterial&&N.setObject(H,b),at===!0&&It.setState(b,Y,!1),b.transparent===!0&&b.side===vi&&b.forceSinglePass===!1?(b.side=Ze,b.needsUpdate=!0,La(b,U,H),b.side=$i,b.needsUpdate=!0,La(b,U,H),b.side=vi):La(b,U,H)}this.compile=function(b,U,Y=null){Y===null&&(Y=b),N!==null&&N.renderStart(b,U,Y),M=gt.get(Y),M.init(U),v.push(M),Y.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),b!==Y&&b.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),M.setupLights(),N!==null&&N.updateLights(M.state.lightsArray),ht=this.localClippingEnabled,at=It.init(this.clippingPlanes,ht),at===!0&&It.setGlobalState(this.clippingPlanes,U),N!==null&&kt.render(M.state.shadowsArray,Y,U);let H=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let wt=G.material;if(wt)if(Array.isArray(wt))for(let Pt=0;Pt<wt.length;Pt++){let Tt=wt[Pt];Zh(Tt,Y,U,G),H.add(Tt)}else Zh(wt,Y,U,G),H.add(wt)}),M=v.pop(),N!==null&&N.renderEnd(),H},this.compileAsync=function(b,U,Y=null){let H=this.compile(b,U,Y);return new Promise(G=>{function wt(){if(H.forEach(function(Pt){let Dt=V.get(Pt).currentProgram;(Dt===void 0||Dt.isReady())&&H.delete(Pt)}),H.size===0){G(b);return}setTimeout(wt,10)}Kt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let nc=null;function Tf(b){nc&&nc(b)}function $h(){Bn.stop()}function Jh(){Bn.start()}let Bn=new Xd;Bn.setAnimationLoop(Tf),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(b){nc=b,Ut.setAnimationLoop(b),b===null?Bn.stop():Bn.start()},Ut.addEventListener("sessionstart",$h),Ut.addEventListener("sessionend",Jh),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(b,U);let Y=Ut.enabled===!0&&Ut.isPresenting===!0,H=w!==null&&(rt===null||Y)&&w.begin(P,rt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(U),U=Ut.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,U,rt),M=gt.get(b,v.length),M.init(U),M.state.textureUnits=$.getTextureUnits(),v.push(M),ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),it.setFromProjectionMatrix(ut,Pi,U.reversedDepth),ht=this.localClippingEnabled,at=It.init(this.clippingPlanes,ht),T=_t.get(b,C.length),T.init(),C.push(T),Ut.enabled===!0&&Ut.isPresenting===!0){let Pt=P.xr.getDepthSensingMesh();Pt!==null&&sc(Pt,U,-1/0,P.sortObjects)}sc(b,U,0,P.sortObjects),T.finish(),N!==null&&N.updateLights(M.state.lightsArray),P.sortObjects===!0&&T.sort(et,xt),Gt=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,Gt&&Zt.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&It.beginShadows();let G=M.state.shadowsArray;if(kt.render(G,b,U),at===!0&&It.endShadows(),(H&&w.hasRenderPass())===!1){let Pt=T.opaque,Tt=T.transmissive;if(M.setupLights(),U.isArrayCamera){let Dt=U.cameras;if(Tt.length>0)for(let Ot=0,Qt=Dt.length;Ot<Qt;Ot++){let re=Dt[Ot];jh(Pt,Tt,b,re)}Gt&&Zt.render(b);for(let Ot=0,Qt=Dt.length;Ot<Qt;Ot++){let re=Dt[Ot];Kh(T,b,re,re.viewport)}}else Tt.length>0&&jh(Pt,Tt,b,U),Gt&&Zt.render(b),Kh(T,b,U)}rt!==null&&q===0&&($.updateMultisampleRenderTarget(rt),$.updateRenderTargetMipmap(rt)),H&&w.end(P),b.isScene===!0&&b.onAfterRender(P,b,U),At.resetDefaultState(),W=-1,Q=null,v.pop(),v.length>0?(M=v[v.length-1],$.setTextureUnits(M.state.textureUnits),at===!0&&It.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,N!==null&&N.renderEnd()};function sc(b,U,Y,H){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLightProbeGrid)M.pushLightProbeGrid(b);else if(b.isLight)M.pushLight(b),b.castShadow&&M.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(it)){H&&Ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ut);let Pt=st.update(b),Tt=b.material;Tt.visible&&T.push(b,Pt,Tt,Y,Ht.z,null,U)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(it))){let Pt=st.update(b),Tt=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ht.copy(b.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ht.copy(Pt.boundingSphere.center)),Ht.applyMatrix4(b.matrixWorld).applyMatrix4(ut)),Array.isArray(Tt)){let Dt=Pt.groups;for(let Ot=0,Qt=Dt.length;Ot<Qt;Ot++){let re=Dt[Ot],Nt=Tt[re.materialIndex];Nt&&Nt.visible&&T.push(b,Pt,Nt,Y,Ht.z,re,U)}}else Tt.visible&&T.push(b,Pt,Tt,Y,Ht.z,null,U)}}let wt=b.children;for(let Pt=0,Tt=wt.length;Pt<Tt;Pt++)sc(wt[Pt],U,Y,H)}function Kh(b,U,Y,H){let{opaque:G,transmissive:wt,transparent:Pt}=b;M.setupLightsView(Y),at===!0&&It.setGlobalState(P.clippingPlanes,Y),H&&_.viewport(tt.copy(H)),G.length>0&&Ia(G,U,Y),wt.length>0&&Ia(wt,U,Y),Pt.length>0&&Ia(Pt,U,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function jh(b,U,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[H.id]===void 0){let Nt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[H.id]=new Ee(1,1,{generateMipmaps:!0,type:Nt?Le:Qe,minFilter:Ji,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let wt=M.state.transmissionRenderTarget[H.id],Pt=H.viewport||tt;wt.setSize(Pt.z*P.transmissionResolutionScale,Pt.w*P.transmissionResolutionScale);let Tt=P.getRenderTarget(),Dt=P.getActiveCubeFace(),Ot=P.getActiveMipmapLevel();P.setRenderTarget(wt),P.getClearColor(J),ct=P.getClearAlpha(),ct<1&&P.setClearColor(16777215,.5),P.clear(),Gt&&Zt.render(Y);let Qt=P.toneMapping;P.toneMapping=Ni;let re=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),M.setupLightsView(H),at===!0&&It.setGlobalState(P.clippingPlanes,H),Ia(b,Y,H),$.updateMultisampleRenderTarget(wt),$.updateRenderTargetMipmap(wt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let pe=0,Be=U.length;pe<Be;pe++){let Te=U[pe],{object:ve,geometry:Je,material:Ct,group:ni}=Te;if(Ct.side===vi&&ve.layers.test(H.layers)){let ce=Ct.side;Ct.side=Ze,Ct.needsUpdate=!0,Qh(ve,Y,H,Je,Ct,ni),Ct.side=ce,Ct.needsUpdate=!0,Nt=!0}}Nt===!0&&($.updateMultisampleRenderTarget(wt),$.updateRenderTargetMipmap(wt))}P.setRenderTarget(Tt,Dt,Ot),P.setClearColor(J,ct),re!==void 0&&(H.viewport=re),P.toneMapping=Qt}function Ia(b,U,Y){let H=U.isScene===!0?U.overrideMaterial:null;for(let G=0,wt=b.length;G<wt;G++){let Pt=b[G],{object:Tt,geometry:Dt,group:Ot}=Pt,Qt=Pt.material;Qt.allowOverride===!0&&H!==null&&(Qt=H),Tt.layers.test(Y.layers)&&Qh(Tt,U,Y,Dt,Qt,Ot)}}function Qh(b,U,Y,H,G,wt){N!==null&&G.isNodeMaterial&&N.setObject(b,G),b.onBeforeRender(P,U,Y,H,G,wt),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(P,U,Y,H,b,wt),G.transparent===!0&&G.side===vi&&G.forceSinglePass===!1?(G.side=Ze,G.needsUpdate=!0,P.renderBufferDirect(Y,U,H,G,b,wt),G.side=$i,G.needsUpdate=!0,P.renderBufferDirect(Y,U,H,G,b,wt),G.side=vi):P.renderBufferDirect(Y,U,H,G,b,wt),b.onAfterRender(P,U,Y,H,G,wt)}function La(b,U,Y){U.isScene!==!0&&(U=zt);let H=V.get(b),G=M.state.lights,wt=M.state.shadowsArray,Pt=G.state.version,Tt=vt.getParameters(b,G.state,wt,U,Y,M.state.lightProbeGridArray),Dt=vt.getProgramCacheKey(Tt),Ot=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let Qt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=dt.get(b.envMap||H.environment,Qt),H.envMapRotation=H.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ot===void 0&&(b.addEventListener("dispose",Oi),Ot=new Map,H.programs=Ot);let re=Ot.get(Dt);if(re!==void 0){if(H.currentProgram===re&&H.lightsStateVersion===Pt)return eu(b,Tt),re}else Tt.uniforms=vt.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,Y,Tt),b.onBeforeCompile(Tt,P),re=vt.acquireProgram(Tt,Dt),Ot.set(Dt,re),H.uniforms=Tt.uniforms;let Nt=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Nt.clippingPlanes=It.uniform),eu(b,Tt),H.needsLights=Rf(b),H.lightsStateVersion=Pt,H.needsLights&&(Nt.ambientLightColor.value=G.state.ambient,Nt.lightProbe.value=G.state.probe,Nt.sunLights.value=G.state.sun,Nt.sunLightShadows.value=G.state.sunShadow,Nt.directionalLights.value=G.state.directional,Nt.directionalLightShadows.value=G.state.directionalShadow,Nt.spotLights.value=G.state.spot,Nt.spotLightShadows.value=G.state.spotShadow,Nt.rectAreaLights.value=G.state.rectArea,Nt.ltc_1.value=G.state.rectAreaLTC1,Nt.ltc_2.value=G.state.rectAreaLTC2,Nt.pointLights.value=G.state.point,Nt.pointLightShadows.value=G.state.pointShadow,Nt.hemisphereLights.value=G.state.hemi,Nt.sunShadowMatrix.value=G.state.sunShadowMatrix,Nt.sunShadowCascade.value=G.state.sunShadowCascade,Nt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Nt.spotLightMatrix.value=G.state.spotLightMatrix,Nt.spotLightMap.value=G.state.spotLightMap,Nt.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=M.state.lightProbeGridArray.length>0,H.currentProgram=re,H.uniformsList=null,re}function tu(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Js.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function eu(b,U){let Y=V.get(b);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function wf(b,U){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;x.setFromMatrixPosition(U.matrixWorld);for(let Y=0,H=b.length;Y<H;Y++){let G=b[Y];if(G.texture!==null&&G.boundingBox.containsPoint(x))return G}return null}function Ef(b,U,Y,H,G){U.isScene!==!0&&(U=zt),$.resetTextureUnits();let wt=U.fog,Pt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,Tt=rt===null?P.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ee.workingColorSpace,Dt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ot=dt.get(H.envMap||Pt,Dt),Qt=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,re=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Nt=!!Y.morphAttributes.position,pe=!!Y.morphAttributes.normal,Be=!!Y.morphAttributes.color,Te=Ni;H.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Te=P.toneMapping);let ve=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Je=ve!==void 0?ve.length:0,Ct=V.get(H),ni=M.state.lights;if(at===!0&&(ht===!0||b!==Q)){let be=b===Q&&H.id===W;It.setState(H,b,be)}let ce=!1;H.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==ni.state.version||Ct.outputColorSpace!==Tt||G.isBatchedMesh&&Ct.batching===!1||!G.isBatchedMesh&&Ct.batching===!0||G.isBatchedMesh&&Ct.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ct.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ct.instancing===!1||!G.isInstancedMesh&&Ct.instancing===!0||G.isSkinnedMesh&&Ct.skinning===!1||!G.isSkinnedMesh&&Ct.skinning===!0||G.isInstancedMesh&&Ct.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ct.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ct.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ct.instancingMorph===!1&&G.morphTexture!==null||Ct.envMap!==Ot||H.fog===!0&&Ct.fog!==wt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==It.numPlanes||Ct.numIntersection!==It.numIntersection)||Ct.vertexAlphas!==Qt||Ct.vertexTangents!==re||Ct.morphTargets!==Nt||Ct.morphNormals!==pe||Ct.morphColors!==Be||Ct.toneMapping!==Te||Ct.morphTargetsCount!==Je||!!Ct.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Ct.__version=H.version);let _i=Ct.currentProgram;ce===!0&&(_i=La(H,U,G),N&&H.isNodeMaterial&&N.onUpdateProgram(H,_i,Ct));let Bi=!1,vn=!1,as=!1,_e=_i.getUniforms(),De=Ct.uniforms;if(_.useProgram(_i.program)&&(Bi=!0,vn=!0,as=!0),H.id!==W&&(W=H.id,vn=!0),Ct.needsLights){let be=wf(M.state.lightProbeGridArray,G);Ct.lightProbeGrid!==be&&(Ct.lightProbeGrid=be,vn=!0)}if(Bi||Q!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),_e.setValue(L,"projectionMatrix",b.projectionMatrix),_e.setValue(L,"viewMatrix",b.matrixWorldInverse);let Mn=_e.map.cameraPosition;Mn!==void 0&&Mn.setValue(L,pt.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&_e.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&_e.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,vn=!0,as=!0)}if(Ct.needsLights&&(ni.state.sunShadowMap.length>0&&_e.setValue(L,"sunShadowMap",ni.state.sunShadowMap,$),ni.state.directionalShadowMap.length>0&&_e.setValue(L,"directionalShadowMap",ni.state.directionalShadowMap,$),ni.state.spotShadowMap.length>0&&_e.setValue(L,"spotShadowMap",ni.state.spotShadowMap,$),ni.state.pointShadowMap.length>0&&_e.setValue(L,"pointShadowMap",ni.state.pointShadowMap,$)),G.isSkinnedMesh){_e.setOptional(L,G,"bindMatrix"),_e.setOptional(L,G,"bindMatrixInverse");let be=G.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),_e.setValue(L,"boneTexture",be.boneTexture,$))}G.isBatchedMesh&&(_e.setOptional(L,G,"batchingTexture"),_e.setValue(L,"batchingTexture",G._matricesTexture,$),_e.setOptional(L,G,"batchingIdTexture"),_e.setValue(L,"batchingIdTexture",G._indirectTexture,$),_e.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&_e.setValue(L,"batchingColorTexture",G._colorsTexture,$));let yn=Y.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&F.update(G,Y,_i),(vn||Ct.receiveShadow!==G.receiveShadow)&&(Ct.receiveShadow=G.receiveShadow,_e.setValue(L,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(De.envMapIntensity.value=U.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=Ax()),vn){if(_e.setValue(L,"toneMappingExposure",P.toneMappingExposure),Ct.needsLights&&Af(De,as),wt&&H.fog===!0&&Ft.refreshFogUniforms(De,wt),Ft.refreshMaterialUniforms(De,H,X,k,M.state.transmissionRenderTarget[b.id]),Ct.needsLights&&Ct.lightProbeGrid){let be=Ct.lightProbeGrid;De.probesSH.value=be.texture,De.probesMin.value.copy(be.boundingBox.min),De.probesMax.value.copy(be.boundingBox.max),De.probesResolution.value.copy(be.resolution)}Js.upload(L,tu(Ct),De,$)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Js.upload(L,tu(Ct),De,$),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&_e.setValue(L,"center",G.center),_e.setValue(L,"modelViewMatrix",G.modelViewMatrix),_e.setValue(L,"normalMatrix",G.normalMatrix),_e.setValue(L,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let be=H.uniformsGroups;for(let Mn=0,os=be.length;Mn<os;Mn++){let nu=be[Mn];lt.update(nu,_i),lt.bind(nu,_i)}}return _i}function Af(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Rf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(b,U,Y){let H=V.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=U,V.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let Y=V.get(b);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,Y=0){rt=b,Z=U,q=Y;let H=null,G=!1,wt=!1;if(b){let Tt=V.get(b);if(Tt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,Tt.__webglFramebuffer),tt.copy(b.viewport),Rt.copy(b.scissor),Et=b.scissorTest,_.viewport(tt),_.scissor(Rt),_.setScissorTest(Et),W=-1;return}else if(Tt.__webglFramebuffer===void 0)$.setupRenderTarget(b);else if(Tt.__hasExternalTextures)$.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Qt=b.depthTexture;if(Tt.__boundDepthTexture!==Qt){if(Qt!==null&&V.has(Qt)&&(b.width!==Qt.image.width||b.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(b)}}let Dt=b.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(wt=!0);let Ot=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[U])?H=Ot[U][Y]:H=Ot[U],G=!0):b.samples>0&&$.useMultisampledRTT(b)===!1?H=V.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?H=Ot[Y]:H=Ot,tt.copy(b.viewport),Rt.copy(b.scissor),Et=b.scissorTest}else tt.copy(ft).multiplyScalar(X).floor(),Rt.copy(Bt).multiplyScalar(X).floor(),Et=se;if(Y!==0&&(H=B),_.bindFramebuffer(L.FRAMEBUFFER,H)&&_.drawBuffers(b,H),_.viewport(tt),_.scissor(Rt),_.setScissorTest(Et),G){let Tt=V.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Tt.__webglTexture,Y)}else if(wt){let Tt=U;for(let Dt=0;Dt<b.textures.length;Dt++){let Ot=V.get(b.textures[Dt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Dt,Ot.__webglTexture,Y,Tt)}}else if(b!==null&&Y!==0){let Tt=V.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tt.__webglTexture,Y)}W=-1};function iu(b){let U=V.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=R.textureFormatReadable(b.format),U.__typeReadable=R.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,Y,H,G,wt,Pt,Tt=0){if(!(b&&b.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt){_.bindFramebuffer(L.FRAMEBUFFER,Dt);try{let Ot=b.textures[Tt],Qt=Ot.format,re=Ot.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Tt);let Nt=iu(Ot);if(Nt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-H&&Y>=0&&Y<=b.height-G&&L.readPixels(U,Y,H,G,bt.convert(Qt),bt.convert(re),wt)}finally{let Ot=rt!==null?V.get(rt).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(b,U,Y,H,G,wt,Pt,Tt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt)if(U>=0&&U<=b.width-H&&Y>=0&&Y<=b.height-G){_.bindFramebuffer(L.FRAMEBUFFER,Dt);let Ot=b.textures[Tt],Qt=Ot.format,re=Ot.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Tt);let Nt=iu(Ot);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,pe),L.bufferData(L.PIXEL_PACK_BUFFER,wt.byteLength,L.STREAM_READ),L.readPixels(U,Y,H,G,bt.convert(Qt),bt.convert(re),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Be=rt!==null?V.get(rt).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Be);let Te=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await pd(L,Te,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,pe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,wt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(pe),L.deleteSync(Te),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,Y=0){let H=Math.pow(2,-Y),G=Math.floor(b.image.width*H),wt=Math.floor(b.image.height*H),Pt=U!==null?U.x:0,Tt=U!==null?U.y:0;$.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Pt,Tt,G,wt),_.unbindTexture()},this.copyTextureToTexture=function(b,U,Y=null,H=null,G=0,wt=0){let Pt,Tt,Dt,Ot,Qt,re,Nt,pe,Be,Te=b.isCompressedTexture?b.mipmaps[wt]:b.image;if(Y!==null)Pt=Y.max.x-Y.min.x,Tt=Y.max.y-Y.min.y,Dt=Y.isBox3?Y.max.z-Y.min.z:1,Ot=Y.min.x,Qt=Y.min.y,re=Y.isBox3?Y.min.z:0;else{let De=Math.pow(2,-G);Pt=Math.floor(Te.width*De),Tt=Math.floor(Te.height*De),b.isDataArrayTexture?Dt=Te.depth:b.isData3DTexture?Dt=Math.floor(Te.depth*De):Dt=1,Ot=0,Qt=0,re=0}H!==null?(Nt=H.x,pe=H.y,Be=H.z):(Nt=0,pe=0,Be=0);let ve=bt.convert(U.format),Je=bt.convert(U.type),Ct;U.isData3DTexture?($.setTexture3D(U,0),Ct=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),Ct=L.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),Ct=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let ni=_.getParameter(L.UNPACK_ROW_LENGTH),ce=_.getParameter(L.UNPACK_IMAGE_HEIGHT),_i=_.getParameter(L.UNPACK_SKIP_PIXELS),Bi=_.getParameter(L.UNPACK_SKIP_ROWS),vn=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,Te.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Te.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Ot),_.pixelStorei(L.UNPACK_SKIP_ROWS,Qt),_.pixelStorei(L.UNPACK_SKIP_IMAGES,re);let as=b.isDataArrayTexture||b.isData3DTexture,_e=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let De=V.get(b),yn=V.get(U),be=V.get(De.__renderTarget),Mn=V.get(yn.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,be.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let os=0;os<Dt;os++)as&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(b).__webglTexture,G,re+os),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(U).__webglTexture,wt,Be+os)),L.blitFramebuffer(Ot,Qt,Pt,Tt,Nt,pe,Pt,Tt,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||V.has(b)){let De=V.get(b),yn=V.get(U);_.bindFramebuffer(L.READ_FRAMEBUFFER,D),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,z);for(let be=0;be<Dt;be++)as?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,De.__webglTexture,G,re+be):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,De.__webglTexture,G),_e?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yn.__webglTexture,wt,Be+be):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,yn.__webglTexture,wt),G!==0?L.blitFramebuffer(Ot,Qt,Pt,Tt,Nt,pe,Pt,Tt,L.COLOR_BUFFER_BIT,L.NEAREST):_e?L.copyTexSubImage3D(Ct,wt,Nt,pe,Be+be,Ot,Qt,Pt,Tt):L.copyTexSubImage2D(Ct,wt,Nt,pe,Ot,Qt,Pt,Tt);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _e?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Ct,wt,Nt,pe,Be,Pt,Tt,Dt,ve,Je,Te.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Ct,wt,Nt,pe,Be,Pt,Tt,Dt,ve,Te.data):L.texSubImage3D(Ct,wt,Nt,pe,Be,Pt,Tt,Dt,ve,Je,Te):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,wt,Nt,pe,Pt,Tt,ve,Je,Te.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,wt,Nt,pe,Te.width,Te.height,ve,Te.data):L.texSubImage2D(L.TEXTURE_2D,wt,Nt,pe,Pt,Tt,ve,Je,Te);_.pixelStorei(L.UNPACK_ROW_LENGTH,ni),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ce),_.pixelStorei(L.UNPACK_SKIP_PIXELS,_i),_.pixelStorei(L.UNPACK_SKIP_ROWS,Bi),_.pixelStorei(L.UNPACK_SKIP_IMAGES,vn),wt===0&&U.generateMipmaps&&L.generateMipmap(Ct),_.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&$.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$.setTextureCube(b,0):b.isData3DTexture?$.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$.setTexture2DArray(b,0):$.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){Z=0,q=0,rt=null,_.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var tn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var oi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Rx=new Ln(-1,1,1,-1,0,1),Ch=class extends Ue{constructor(){super(),this.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ne([0,2,0,0,2,0],2))}},Cx=new Ch,en=class{constructor(t){this._mesh=new Jt(Cx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Rx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Qs=class extends oi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ai.clone(t.uniforms),this.material=new ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new en(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ya=class extends oi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Bl=class extends oi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var zl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new j);this._width=i.width,this._height=i.height,e=new Ee(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Le}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qs(tn),this.copyPass.material.blending=Fe,this.timer=new ta}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ya!==void 0&&(a instanceof ya?i=!0:a instanceof Bl&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var kl=class extends oi{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Lt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Ma={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new j},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new oe},cameraProjectionMatrixInverse:{value:new oe},cameraWorldMatrix:{value:new oe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new A(-1,-1,-1)},sceneBoxMax:{value:new A(1,1,1)}},vertexShader:`

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
		}`},ba={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Vl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function jd(n=5){let t=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),e=Px(t),i=e.length,s=new Uint8Array(i*4);for(let a=0;a<i;++a){let o=e[a],l=2*Math.PI*o/i,c=new A(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new dn(s,t,t);return r.wrapS=Hi,r.wrapT=Hi,r.needsUpdate=!0,r}function Px(n){let t=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),e=t*t,i=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),i[s*t+r]!==0){r-=2,s++;continue}else i[s*t+r]=a++;r++,s--}return i}var Sa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Ph(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new j},cameraProjectionMatrixInverse:{value:new oe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Ph(n,t,e){let i=Ix(n,t,e),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let a=i[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<n-1?",":")"}`}return s}function Ix(n,t,e){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*t*s/n,a=Math.pow(s/(n-1),e);i.push(new A(Math.cos(r),Math.sin(r),a))}return i}var Hl=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let i,s,r,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,g=t-u,y=e-f,m,p;g>y?(m=1,p=0):(m=0,p=1);let S=g-m+h,E=y-p+h,x=g-1+2*h,T=y-1+2*h,M=l&255,C=c&255,v=this.perm[M+this.perm[C]]%12,w=this.perm[M+m+this.perm[C+p]]%12,P=this.perm[M+1+this.perm[C+1]]%12,I=.5-g*g-y*y;I<0?i=0:(I*=I,i=I*I*this._dot(this.grad3[v],g,y));let N=.5-S*S-E*E;N<0?s=0:(N*=N,s=N*N*this._dot(this.grad3[w],S,E));let B=.5-x*x-T*T;return B<0?r=0:(B*=B,r=B*B*this._dot(this.grad3[P],x,T)),70*(i+s+r)}noise3d(t,e,i){let s,r,a,o,c=(t+e+i)*.3333333333333333,h=Math.floor(t+c),d=Math.floor(e+c),u=Math.floor(i+c),f=1/6,g=(h+d+u)*f,y=h-g,m=d-g,p=u-g,S=t-y,E=e-m,x=i-p,T,M,C,v,w,P;S>=E?E>=x?(T=1,M=0,C=0,v=1,w=1,P=0):S>=x?(T=1,M=0,C=0,v=1,w=0,P=1):(T=0,M=0,C=1,v=1,w=0,P=1):E<x?(T=0,M=0,C=1,v=0,w=1,P=1):S<x?(T=0,M=1,C=0,v=0,w=1,P=1):(T=0,M=1,C=0,v=1,w=1,P=0);let I=S-T+f,N=E-M+f,B=x-C+f,D=S-v+2*f,z=E-w+2*f,Z=x-P+2*f,q=S-1+3*f,rt=E-1+3*f,W=x-1+3*f,Q=h&255,tt=d&255,Rt=u&255,Et=this.perm[Q+this.perm[tt+this.perm[Rt]]]%12,J=this.perm[Q+T+this.perm[tt+M+this.perm[Rt+C]]]%12,ct=this.perm[Q+v+this.perm[tt+w+this.perm[Rt+P]]]%12,yt=this.perm[Q+1+this.perm[tt+1+this.perm[Rt+1]]]%12,k=.6-S*S-E*E-x*x;k<0?s=0:(k*=k,s=k*k*this._dot3(this.grad3[Et],S,E,x));let X=.6-I*I-N*N-B*B;X<0?r=0:(X*=X,r=X*X*this._dot3(this.grad3[J],I,N,B));let et=.6-D*D-z*z-Z*Z;et<0?a=0:(et*=et,a=et*et*this._dot3(this.grad3[ct],D,z,Z));let xt=.6-q*q-rt*rt-W*W;return xt<0?o=0:(xt*=xt,o=xt*xt*this._dot3(this.grad3[yt],q,rt,W)),32*(s+r+a+o)}noise4d(t,e,i,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,g,y=(t+e+i+s)*l,m=Math.floor(t+y),p=Math.floor(e+y),S=Math.floor(i+y),E=Math.floor(s+y),x=(m+p+S+E)*c,T=m-x,M=p-x,C=S-x,v=E-x,w=t-T,P=e-M,I=i-C,N=s-v,B=w>P?32:0,D=w>I?16:0,z=P>I?8:0,Z=w>N?4:0,q=P>N?2:0,rt=I>N?1:0,W=B+D+z+Z+q+rt,Q=a[W][0]>=3?1:0,tt=a[W][1]>=3?1:0,Rt=a[W][2]>=3?1:0,Et=a[W][3]>=3?1:0,J=a[W][0]>=2?1:0,ct=a[W][1]>=2?1:0,yt=a[W][2]>=2?1:0,k=a[W][3]>=2?1:0,X=a[W][0]>=1?1:0,et=a[W][1]>=1?1:0,xt=a[W][2]>=1?1:0,ft=a[W][3]>=1?1:0,Bt=w-Q+c,se=P-tt+c,it=I-Rt+c,at=N-Et+c,ht=w-J+2*c,ut=P-ct+2*c,pt=I-yt+2*c,Ht=N-k+2*c,zt=w-X+3*c,Gt=P-et+3*c,Yt=I-xt+3*c,L=N-ft+3*c,le=w-1+4*c,Kt=P-1+4*c,R=I-1+4*c,_=N-1+4*c,O=m&255,V=p&255,$=S&255,dt=E&255,mt=o[O+o[V+o[$+o[dt]]]]%32,K=o[O+Q+o[V+tt+o[$+Rt+o[dt+Et]]]]%32,st=o[O+J+o[V+ct+o[$+yt+o[dt+k]]]]%32,vt=o[O+X+o[V+et+o[$+xt+o[dt+ft]]]]%32,Ft=o[O+1+o[V+1+o[$+1+o[dt+1]]]]%32,_t=.6-w*w-P*P-I*I-N*N;_t<0?h=0:(_t*=_t,h=_t*_t*this._dot4(r[mt],w,P,I,N));let gt=.6-Bt*Bt-se*se-it*it-at*at;gt<0?d=0:(gt*=gt,d=gt*gt*this._dot4(r[K],Bt,se,it,at));let It=.6-ht*ht-ut*ut-pt*pt-Ht*Ht;It<0?u=0:(It*=It,u=It*It*this._dot4(r[st],ht,ut,pt,Ht));let kt=.6-zt*zt-Gt*Gt-Yt*Yt-L*L;kt<0?f=0:(kt*=kt,f=kt*kt*this._dot4(r[vt],zt,Gt,Yt,L));let Zt=.6-le*le-Kt*Kt-R*R-_*_;return Zt<0?g=0:(Zt*=Zt,g=Zt*Zt*this._dot4(r[Ft],le,Kt,R,_)),27*(h+d+u+f+g)}_dot(t,e,i){return t[0]*e+t[1]*i}_dot3(t,e,i,s){return t[0]*e+t[1]*i+t[2]*s}_dot4(t,e,i,s,r){return t[0]*e+t[1]*i+t[2]*s+t[3]*r}};var tr=class n extends oi{constructor(t,e,i=512,s=512,r,a,o){super(),this.width=i,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=jd(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ee(this.width,this.height,{type:Le,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ye({defines:Object.assign({},Ma.defines),uniforms:ai.clone(Ma.uniforms),vertexShader:Ma.vertexShader,fragmentShader:Ma.fragmentShader,blending:Fe,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Yr,this.normalMaterial.blending=Fe,this.pdMaterial=new ye({defines:Object.assign({},Sa.defines),uniforms:ai.clone(Sa.uniforms),vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ye({defines:Object.assign({},ba.defines),uniforms:ai.clone(ba.uniforms),vertexShader:ba.vertexShader,fragmentShader:ba.fragmentShader,blending:Fe}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ye({uniforms:ai.clone(tn.uniforms),vertexShader:tn.vertexShader,fragmentShader:tn.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:na,blendDst:Kn,blendEquation:yi,blendSrcAlpha:ia,blendDstAlpha:Kn,blendEquationAlpha:yi}),this.blendMaterial=new ye({uniforms:ai.clone(Vl.uniforms),vertexShader:Vl.vertexShader,fragmentShader:Vl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ho,blendSrc:na,blendDst:Kn,blendEquation:yi,blendSrcAlpha:ia,blendDstAlpha:Kn,blendEquationAlpha:yi}),this._fsQuad=new en(null),this._originalClearColor=new Lt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Zi,this.depthTexture.format=Ki,this.depthTexture.type=Un,this.normalRenderTarget=new Ee(this.width,this.height,{minFilter:Ne,magFilter:Ne,type:Le,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ph(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Fe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Fe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Fe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Fe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Fe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,i,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,i,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,e.push(i))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Hl,i=t*t*4,s=new Uint8Array(i);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new dn(s,t,t,hi,Qe);return r.wrapS=Hi,r.wrapT=Hi,r.needsUpdate=!0,r}};tr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Qd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Lt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var er=class n extends oi{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new j(t.x,t.y):new j(256,256),this.clearColor=new Lt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ee(r,a,{type:Le,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ee(r,a,{type:Le,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Ee(r,a,{type:Le,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Qd;this.highPassUniforms=ai.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ye({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new j(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ai.clone(tn.uniforms),this.blendMaterial=new ye({uniforms:this.copyUniforms,vertexShader:tn.vertexShader,fragmentShader:tn.fragmentShader,premultipliedAlpha:!0,blending:Jn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Lt,this._oldClearAlpha=1,this._basic=new un,this._fsQuad=new en(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new j(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new ye({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};er.BlurDirectionX=new j(1,0);er.BlurDirectionY=new j(0,1);var Ta={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Gl=class extends oi{constructor(){super(),this.isOutputPass=!0,this.uniforms=ai.clone(Ta.uniforms),this.material=new Hs({name:Ta.name,uniforms:this.uniforms,vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader}),this._fsQuad=new en(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ee.getTransfer(this._outputColorSpace)===he&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ra?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===aa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===oa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jn?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Qn?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===la&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wl=class extends Xn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Di;t.deleteAttribute("uv");let e=new ke({side:Ze}),i=new ke,s=new Qr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Jt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Nr(t,i,6),o=new Ve;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Jt(t,ir(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Jt(t,ir(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Jt(t,ir(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Jt(t,ir(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Jt(t,ir(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Jt(t,ir(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ir(n){return new Zr({color:0,emissive:16777215,emissiveIntensity:n})}var Ih=class extends tr{_overrideVisibility(){let t=this._visibilityCache;this.scene.traverse(e=>{e.visible&&(e.isPoints||e.isLine||e.isSprite||e.userData.noAO)&&(e.visible=!1,t.push(e))})}},Lx={uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uWarm:{value:new A(1.02,1,.96)},uLift:{value:new A(.012,.008,.02)},uSat:{value:1.06},uTime:{value:0},uRes:{value:new j(1,1)},uTiltShift:{value:0}},vertexShader:`
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
  `},Xl=class{constructor(t,e={}){this.container=t,this.quality=e.quality||Dx(),this.direct=e.post===!1;let i=this.renderer=new Ul({antialias:this.direct||this.quality==="low",preserveDrawingBuffer:!!e.preserveDrawingBuffer,powerPreference:"high-performance",alpha:!1});i.setPixelRatio(this._pixelRatio()),i.outputColorSpace=Re,i.toneMapping=jn,i.toneMappingExposure=1,i.shadowMap.enabled=!0,i.shadowMap.type=$n,i.domElement.classList.add("gl"),t.appendChild(i.domElement),this.scene=new Xn,this.camera=new qe(e.fov??30,1,.1,200);let s=new Ks(i);this.envMap=s.fromScene(new Wl,.04).texture,this.scene.environment=this.envMap,this.scene.environmentIntensity=.55,this.direct||this._buildComposer(),this.updaters=new Set,this._last=performance.now(),this.time=0,this.frame=0,this._fpsAcc=0,this._fpsN=0,this.fps=60,this._onResize=()=>this.resize(),window.addEventListener("resize",this._onResize),"ResizeObserver"in window&&(this._ro=new ResizeObserver(()=>this.resize()),this._ro.observe(t)),this.resize()}_buildComposer(){let t=this.renderer,e=t.getDrawingBufferSize(new j),i=new Ee(e.x||1,e.y||1,{type:Le,samples:this.quality==="low"?0:4}),s=this.composer=new zl(t,i);if(this.renderPass=new kl(this.scene,this.camera),s.addPass(this.renderPass),this.quality!=="low"&&!new URLSearchParams(location.search).has("noao")){let a=this.aoPass=new Ih(this.scene,this.camera,e.x,e.y);a.output=tr.OUTPUT.Default,a.blendIntensity=.9,a.updateGtaoMaterial({radius:.55,distanceExponent:1.4,thickness:1.5,scale:1.15,samples:this.quality==="high"?16:8}),a.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),s.addPass(a)}new URLSearchParams(location.search).has("nobloom")||(this.bloomPass=new er(new j(e.x/2,e.y/2),.35,.5,4.5),s.addPass(this.bloomPass)),s.addPass(new Gl),this.gradePass=new Qs(Lx),s.addPass(this.gradePass)}_pixelRatio(){let t={high:2,medium:1.25,low:1}[this.quality]??1.5;return Math.min(window.devicePixelRatio||1,t)}setQuality(t){t!==this.quality&&(this.quality=t,this.renderer.setPixelRatio(this._pixelRatio()),this.direct||(this.composer.dispose?.(),this._buildComposer()),this._w=this._h=null,this.resize(),this.onQuality?.(t))}resize(){let t=this.container.clientWidth||window.innerWidth,e=this.container.clientHeight||window.innerHeight;if(!(t===this._w&&e===this._h)){if(this._w=t,this._h=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px",this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),!this.direct){let i=this.renderer.getPixelRatio();this.composer.setPixelRatio(i),this.composer.setSize(t,e),this.gradePass.uniforms.uRes.value.set(t*i,e*i)}this.onResize?.(t,e)}}get width(){return this._w}get height(){return this._h}add(t){return this.updaters.add(t),()=>this.updaters.delete(t)}start(){let t=()=>{this._raf=requestAnimationFrame(t);let e=performance.now();if(this.maxFps&&e-this._last<1e3/this.maxFps-2)return;let i=Math.min((e-this._last)/1e3,this.maxFps?.25:1/15);this._last=e,this.time+=i,this.frame++,this._fpsAcc+=i,this._fpsN++,this._fpsAcc>1&&(this.fps=this._fpsN/this._fpsAcc,this._fpsAcc=0,this._fpsN=0,this.onFps?.(this.fps));for(let s of this.updaters)s(i,this.time);this.render()};t()}render(){if(this.direct){this.renderer.render(this.scene,this.camera);return}this.gradePass.uniforms.uTime.value=this.frame%64*1.37,this.composer.render()}stop(){cancelAnimationFrame(this._raf),this._raf=null}step(t=1/60,e=1,i=!0){for(let s=0;s<e;s++){this.time+=t,this.frame++;for(let r of this.updaters)r(t,this.time)}i&&this.render()}};function Dx(){try{let t=new URLSearchParams(location.search).get("quality");if(t==="low"||t==="medium"||t==="high")return t;let e=localStorage.getItem("cozy.quality");if(e==="low"||e==="medium"||e==="high")return e}catch{}return/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)?"low":"high"}var $e=Math.PI*2,Wt=(n,t=0,e=1)=>n<t?t:n>e?e:n,Lh=(n,t,e)=>n+(t-n)*e;var tf=(n,t,e)=>{let i=Wt((e-n)/(t-n));return i*i*(3-2*i)},gi=n=>(n=Wt(n),n*n*n*(n*(n*6-15)+10)),We=(n,t,e,i)=>Lh(n,t,1-Math.exp(-e*i)),ql=n=>(n=(n+Math.PI)%$e,n<0&&(n+=$e),n-Math.PI),ef=(n,t)=>n+ql(t-n);var Dh=n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;var Yl=n=>n*n;var nr=(n,t=1.70158)=>1+(t+1)*Math.pow(n-1,3)+t*Math.pow(n-1,2);var me=(n,t=0,e=1)=>n<=t||n>=e?0:Math.sin((n-t)/(e-t)*Math.PI),de=(n,t,e,i,s)=>n<=t||n>=s?0:n<e?gi((n-t)/(e-t)):n<=i?1:1-gi((n-i)/(s-i)),mn=class{constructor(t=0,e=4,i=.5){this.x=t,this.v=0,this.target=t,this.freq=e,this.damping=i}update(t){let e=$e*this.freq,i=Math.max(1,Math.ceil(t/(1/240))),s=t/i;for(let r=0;r<i;r++){let a=-e*e*(this.x-this.target)-2*this.damping*e*this.v;this.v+=a*s,this.x+=this.v*s}return this.x}impulse(t){this.v+=t}snap(t){this.x=this.target=t,this.v=0}};function nf(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var ot=(n=0,t=1)=>n+Math.random()*(t-n);var ei=n=>Math.random()<n,Si=n=>n[Math.floor(Math.random()*n.length)],sf=n=>{let t=0;for(let[,i]of n)t+=Math.max(0,i);if(t<=0)return n.length?n[0][0]:void 0;let e=Math.random()*t;for(let[i,s]of n)if(e-=Math.max(0,s),e<=0)return i;return n[n.length-1][0]};function Zl(n,t=0){let e=Math.floor(n),i=n-e,s=a=>{let o=Math.sin((a+t*57.13)*127.1)*43758.5453;return o-Math.floor(o)},r=i*i*(3-2*i);return Lh(s(e),s(e+1),r)*2-1}var Nx=[0,2,4,7,9],Ti=n=>440*Math.pow(2,(n-69)/12),Nh=class{constructor(){this.ctx=null,this.sfxOn=!0,this.musicOn=!0,this.volume=.8,this.tempo=92,this._beatOrigin=performance.now()/1e3,this._lastStep=0,this.listeners=[],this.ambience="day",this._ambT=0,this.isVisible=()=>!0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.volume;let i=e.createDynamicsCompressor();i.threshold.value=-18,i.ratio.value=3,this.master.connect(i).connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.sfxOn?1:0,this.sfxBus.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicOn?.55:0,this.musicBus.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(2.4,2.8),this.reverbSend=e.createGain(),this.reverbSend.gain.value=.35,this.reverbSend.connect(this.reverb).connect(this.master),this._noise=this._noiseBuffer(),this._startMusic(),this.listeners.forEach(s=>s())}onUnlock(t){this.listeners.push(t)}setSfx(t){this.sfxOn=t,this.sfxBus&&this.sfxBus.gain.setTargetAtTime(t?1:0,this.ctx.currentTime,.05)}setMusic(t){this.musicOn=t,this.musicBus&&this.musicBus.gain.setTargetAtTime(t?.55:0,this.ctx.currentTime,.3)}beat(){return this.ctx&&this.musicOn?(this.ctx.currentTime-this._musicT0)*(this.tempo/60):(performance.now()/1e3-this._beatOrigin)*(this.tempo/60)}_impulse(t,e){let i=this.ctx,s=Math.floor(i.sampleRate*t),r=i.createBuffer(2,s,i.sampleRate);for(let a=0;a<2;a++){let o=r.getChannelData(a);for(let l=0;l<s;l++)o[l]=(Math.random()*2-1)*Math.pow(1-l/s,e)}return r}_noiseBuffer(){let t=this.ctx,e=t.createBuffer(1,t.sampleRate*1.5,t.sampleRate),i=e.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;return e}_env(t,e,i,s,r,a=0){let o=t.gain;o.cancelScheduledValues(e),o.setValueAtTime(1e-4,e),o.exponentialRampToValueAtTime(Math.max(2e-4,s),e+i),o.exponentialRampToValueAtTime(Math.max(1e-4,a||1e-4),e+i+r)}tone({type:t="sine",f0:e=440,f1:i=null,dur:s=.15,gain:r=.2,attack:a=.005,t:o=0,vibrato:l=0,vibratoF:c=7,filter:h=null,reverb:d=.15,dest:u=null,curve:f="exp"}){let g=this.ctx,y=g.currentTime+o,m=g.createOscillator();m.type=t,m.frequency.setValueAtTime(e,y),i&&(f==="exp"?m.frequency.exponentialRampToValueAtTime(Math.max(20,i),y+s):m.frequency.linearRampToValueAtTime(i,y+s));let p=m;if(l){let E=g.createOscillator(),x=g.createGain();E.frequency.value=c,x.gain.value=l,E.connect(x).connect(m.frequency),E.start(y),E.stop(y+s+.1)}if(h){let E=g.createBiquadFilter();E.type=h.type||"lowpass",E.frequency.value=h.f,E.Q.value=h.q??.8,p.connect(E),p=E}let S=g.createGain();if(this._env(S,y,a,r,s),p.connect(S),S.connect(u||this.sfxBus),d){let E=g.createGain();E.gain.value=d,S.connect(E).connect(this.reverbSend)}m.start(y),m.stop(y+a+s+.05)}noise({dur:t=.1,gain:e=.1,t:i=0,filter:s={type:"bandpass",f:2e3,q:1},f1:r=null,attack:a=.003,reverb:o=.05}){let l=this.ctx,c=l.currentTime+i,h=l.createBufferSource();h.buffer=this._noise;let d=l.createBiquadFilter();d.type=s.type,d.frequency.setValueAtTime(s.f,c),r&&d.frequency.exponentialRampToValueAtTime(r,c+t),d.Q.value=s.q??1;let u=l.createGain();if(this._env(u,c,a,e,t),h.connect(d).connect(u).connect(this.sfxBus),o){let f=l.createGain();f.gain.value=o,u.connect(f).connect(this.reverbSend)}h.start(c,Math.random()*.5),h.stop(c+t+a+.05)}syllable(t,e,{vowel:i=.5,loud:s=1,len:r=.07}={}){let a=t*(.85+i*.5)*ot(.95,1.05);this.tone({type:"triangle",f0:a*1.06,f1:a*.94,dur:r,gain:.075*s,attack:.006,t:e,filter:{type:"lowpass",f:1800+i*1600,q:2},reverb:.08}),this.tone({type:"sine",f0:a*2,f1:a*1.9,dur:r*.8,gain:.025*s,t:e,reverb:0})}play(t,e={}){if(!this.ctx||!this.sfxOn)return;let i=e.critter;if(i&&!this.isVisible(i))return;let s=i?i.voice:e.pitch??1,r=o=>this.tone(o),a=o=>this.noise(o);switch(t){case"boop":r({f0:520*s,f1:860*s,dur:.12,gain:.22,vibrato:0}),r({type:"triangle",f0:1040*s,f1:1500*s,dur:.08,gain:.05});break;case"hop":r({f0:300*s,f1:640*s,dur:.14,gain:.12});break;case"land":r({f0:190,f1:90,dur:.12,gain:.12*Wt(e.strength??1,.3,1.5),reverb:.02}),a({dur:.06,gain:.04,filter:{type:"lowpass",f:500}});break;case"step":{let o=performance.now();if(!e.stomp&&o-this._lastStep<140)return;this._lastStep=o,a({dur:e.stomp?.08:.025,gain:e.stomp?.08:e.soft?.009:.013,filter:{type:"bandpass",f:e.stomp?600:ot(2200,3200),q:1.5},reverb:0});break}case"giggle":for(let o=0;o<6;o++)this.syllable(380*s*(1+o%2*.12+o*.03),o*.085,{vowel:.9,len:.06});break;case"dizzy":r({f0:900*s,f1:300*s,dur:.9,gain:.08,vibrato:40,vibratoF:9});break;case"grumble":r({type:"sawtooth",f0:170*s,f1:130*s,dur:.5,gain:.07,vibrato:12,vibratoF:18,filter:{type:"lowpass",f:600}});break;case"hi":this.syllable(320*s,0,{vowel:.4,len:.09}),this.syllable(380*s,.11,{vowel:1,len:.14,loud:1.2});break;case"hmm":r({f0:380*s,f1:520*s,dur:.38,gain:.08,vibrato:6,filter:{type:"lowpass",f:1200}});break;case"yawn":r({type:"triangle",f0:520*s,f1:240*s,dur:1,gain:.07,attack:.15,filter:{type:"lowpass",f:1400},curve:"lin"}),a({dur:.8,gain:.015,filter:{type:"bandpass",f:900,q:.7}});break;case"mm":r({type:"triangle",f0:300*s,f1:340*s,dur:.45,gain:.06,attack:.05,filter:{type:"lowpass",f:900}});break;case"ah":this.syllable(330*s,0,{vowel:.7,len:.16}),this.syllable(370*s,.6,{vowel:.8,len:.2});break;case"sneeze":a({dur:.18,gain:.16,filter:{type:"bandpass",f:3500,q:.8},f1:1500}),r({f0:900*s,f1:420*s,dur:.16,gain:.1,t:.02});break;case"whoa":r({f0:600*s,f1:950*s,dur:.18,gain:.08}),r({f0:950*s,f1:480*s,dur:.25,gain:.08,t:.18});break;case"bonk":r({type:"triangle",f0:340,f1:170,dur:.14,gain:e.soft?.08:.16,reverb:.05}),a({dur:.03,gain:.05,filter:{type:"highpass",f:2e3}});break;case"shake":for(let o=0;o<5;o++)a({dur:.035,gain:.025,t:o*.05,filter:{type:"bandpass",f:1800,q:2}});break;case"whee":r({f0:500*s,f1:1250*s,dur:.42,gain:.09,vibrato:10});break;case"snore":a({dur:.7,gain:.02,attack:.3,filter:{type:"lowpass",f:300,q:4}});break;case"mumble":for(let o=0;o<3;o++)this.syllable(240*s,o*.1,{vowel:ot(.1,.5),loud:.5});break;case"tap":a({dur:.012,gain:.02,filter:{type:"bandpass",f:4200,q:3},reverb:0});break;case"tink":r({f0:1900,dur:.22,gain:.05,reverb:.2}),r({f0:2850,dur:.15,gain:.025});break;case"page":a({dur:.16,gain:.03,filter:{type:"highpass",f:2500},f1:5e3});break;case"idea":r({f0:Ti(84),dur:.9,gain:.08,reverb:.4}),r({f0:Ti(91),dur:.7,gain:.05,t:.08,reverb:.4});break;case"scribble":a({dur:.09,gain:.015,filter:{type:"bandpass",f:ot(2200,3200),q:4}});break;case"water":for(let o=0;o<8;o++)r({f0:ot(900,1500),f1:ot(1600,2400),dur:.05,gain:.02,t:o*ot(.06,.12)});break;case"pin":r({f0:1200,f1:700,dur:.05,gain:.08});break;case"stamp":r({f0:160,f1:80,dur:.1,gain:.14}),a({dur:.04,gain:.05,filter:{type:"lowpass",f:900}});break;case"coo":r({f0:560*s,f1:660*s,dur:.18,gain:.07,vibrato:14,vibratoF:12}),r({f0:660*s,f1:600*s,dur:.22,gain:.06,t:.17,vibrato:14,vibratoF:12});break;case"hic":r({f0:700*s,f1:1100*s,dur:.07,gain:.12});break;case"gasp":a({dur:.12,gain:.04,filter:{type:"highpass",f:1500},f1:4e3}),r({f0:520*s,f1:860*s,dur:.12,gain:.08});break;case"yay":this.syllable(420*s,0,{vowel:.9,len:.09,loud:e.soft?.6:1}),this.syllable(520*s,.1,{vowel:1,len:.16,loud:e.soft?.6:1.2}),e.soft||[0,4,7,12].forEach((o,l)=>r({f0:Ti(84+o),dur:.3,gain:.03,t:.2+l*.06,reverb:.3}));break;case"aww":r({type:"triangle",f0:600*s,f1:380*s,dur:.6,gain:.07,filter:{type:"lowpass",f:1300}});break;case"sigh":a({dur:.7,gain:.03,attack:.1,filter:{type:"bandpass",f:1200,q:.6},f1:500});break;case"pop":r({f0:380,f1:950,dur:.06,gain:.12});break;case"click":r({f0:900,f1:1300,dur:.04,gain:.07,reverb:0});break;case"chime":[0,4,7,11,14].forEach((o,l)=>r({f0:Ti(79+o),dur:.5,gain:.04,t:l*.05,reverb:.4}));break;case"door":r({type:"triangle",f0:140,f1:110,dur:.18,gain:.12}),[0,.14].forEach(o=>r({f0:Ti(88),dur:.6,gain:.05,t:.05+o,reverb:.5}));break;case"whoosh":a({dur:.5,gain:.06,attack:.15,filter:{type:"bandpass",f:400,q:.7},f1:2400});break;case"rotate":a({dur:.28,gain:.025,attack:.08,filter:{type:"bandpass",f:600,q:.8},f1:1400});break;case"switch":r({type:"square",f0:1400,dur:.02,gain:.03,filter:{type:"lowpass",f:3e3},reverb:0});break;case"plant":r({f0:500,f1:750,dur:.08,gain:.05}),a({dur:.15,gain:.02,filter:{type:"highpass",f:3e3}});break;case"mail":r({f0:Ti(84),dur:.5,gain:.05,reverb:.4}),r({f0:Ti(88),dur:.6,gain:.05,t:.12,reverb:.4});break;case"spawn":[0,7,12,16,19].forEach((o,l)=>r({f0:Ti(72+o),dur:.35,gain:.05,t:l*.06,reverb:.4}));break;case"hum":{[0,2,4,2,0,7].forEach((l,c)=>r({type:"triangle",f0:Ti(67+l)*s*.6,dur:.3,gain:.045,t:c*.42,attack:.04,filter:{type:"lowpass",f:1e3},vibrato:4}));break}default:break}}babble(t,e=1){if(!this.ctx||!this.sfxOn)return t.length*.06;let i=t.slice(0,64),s=0,r=300*e,a=/\?\s*$/.test(i),o=/!\s*$/.test(i);for(let l=0;l<i.length;l++){let c=i[l].toLowerCase();if(c===" "){s+=.03;continue}if(/[.,;:~]/.test(c)){s+=.12;continue}if(!/[a-z0-9]/.test(c)||l%2===1&&!/[aeiouy]/.test(c))continue;let h=/[aeiouy]/.test(c)?.6+c.charCodeAt(0)%5*.1:c.charCodeAt(0)%7/14,d=l>i.length-4,u=a&&d?1.25:1;this.syllable(r*u,s,{vowel:h,loud:o?1.25:1,len:.06}),s+=.068}return s}_startMusic(){let t=this.ctx;this._musicT0=t.currentTime+.1,this._nextBeat=0,this._chordIdx=0,this._melodyNote=2,this._prog=[[0,4,7],[9,12,16],[5,9,12],[7,11,14],[0,4,7],[9,12,16],[2,5,9],[7,11,14]];let e=()=>{if(!this.ctx)return;let i=60/this.tempo,s=t.currentTime+.25;for(;this._musicT0+this._nextBeat*i*.5<s;){let r=this._nextBeat,a=this._musicT0+r*i*.5;this._musicStep(r,a,i),this._nextBeat++}this._ambienceTick()};this._musicTimer=setInterval(e,60)}_bell(t,e,i,s=1.6){let r=this.ctx,a=Math.max(e,r.currentTime),o=r.createGain();o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(i,a+.006),o.gain.exponentialRampToValueAtTime(1e-4,a+s),o.connect(this.musicBus);let l=r.createGain();l.gain.value=.6,o.connect(l).connect(this.reverbSend);let c=[[1,1],[2,.22],[3.01,.08],[4.16,.05]];for(let[h,d]of c){let u=r.createOscillator();u.type="sine",u.frequency.value=t*h;let f=r.createGain();f.gain.setValueAtTime(d,a),f.gain.exponentialRampToValueAtTime(1e-4,a+s/(h*.8)),u.connect(f).connect(o),u.start(a),u.stop(a+s+.05)}}_musicStep(t,e,i){if(!this.musicOn)return;let s=65,r=Math.floor(t/8),a=t%8,o=this._prog[r%this._prog.length],l=this.ambience==="night",c=l?.05:.065;a===0&&this._bell(Ti(s-24+o[0]),e,c*.9,2.6),(a===0||a===4)&&o.forEach((d,u)=>this._bell(Ti(s-12+d),e+u*i*.16,c*.45,1.8));let h=a===0?.9:a%2===0?.55:.22;if(Math.random()<h*(l?.6:1)){let d=this._melodyNote+Si([-2,-1,-1,0,1,1,2]);d=Wt(d,0,9),this._melodyNote=d;let u=Math.floor(d/5),f=s+Nx[d%5]+u*12;a===0&&ei(.6)&&(f=s+12+o[Math.floor(Math.random()*3)]-12*(o[0]>6?1:0)),this._bell(Ti(f),e,c*.8,1.5)}}setAmbience(t){this.ambience=t}_ambienceTick(){!this.sfxOn||!this.ctx||(this._ambT-=.06,!(this._ambT>0)&&(this.ambience==="morning"||this.ambience==="day"?(this._ambT=ot(4,11),ei(.7)&&this._chirp()):this.ambience==="night"?(this._ambT=ot(1.2,3),this._cricket()):this._ambT=5))}_chirp(){let t=ot(2400,3600),e=Math.floor(ot(2,5));for(let i=0;i<e;i++)this.tone({f0:t*ot(.9,1.1),f1:t*ot(1.2,1.5),dur:.06,gain:.012,t:i*ot(.08,.13),reverb:.3})}_cricket(){let t=ot(4200,4800);for(let e=0;e<3;e++)this.tone({f0:t,dur:.03,gain:.006,t:e*.05,reverb:.2})}},Pe=new Nh;var gn={height:1.02,lift:.07},Ae={w:.92,h:.62,y0:.22,px:512};Ae.py=Math.round(Ae.px*Ae.h/Ae.w);var sr=[[0,0],[.28,0],[.4,.018],[.472,.07],[.502,.17],[.506,.3],[.488,.46],[.445,.63],[.365,.8],[.235,.94],[.08,1.012],[0,1.02]];function Uh(n){for(let t=1;t<sr.length;t++){let[e,i]=sr[t],[s,r]=sr[t-1];if(n<=i){let a=(n-r)/Math.max(1e-5,i-r);return s+(e-s)*a}}return 0}var $l=null;function rf(){if($l)return $l;let t=new Rn(sr.map(([m,p])=>new j(m,p))).getSpacedPoints(56).map(m=>new j(Math.max(0,m.x),m.y));t[0].set(0,0),t[t.length-1].set(0,sr[sr.length-1][1]);let e=new Yn(t,64);e.computeBoundingSphere();let i=new Us(.074,.12,6,12);i.translate(0,-.115,0);let s=new ci(1,20,14);s.scale(.115,.07,.15),s.translate(0,.05,.02);let r=new Bs([new A(0,-.02,0),new A(.006,.06,0),new A(.022,.13,0),new A(.05,.19,0)]),a=new qr(r,12,.022,8,!1),o=new A(.05,.19,0),l=new zs;l.moveTo(0,0),l.bezierCurveTo(.05,.035,.11,.05,.17,0),l.bezierCurveTo(.11,-.05,.05,-.035,0,0);let c=new Xr(l,{depth:.008,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:3,curveSegments:16});c.translate(0,0,-.004);{let m=c.attributes.position;for(let p=0;p<m.count;p++){let S=m.getX(p),E=m.getY(p);m.setZ(p,m.getZ(p)+E*E*6-S*S*.8)}c.computeVertexNormals()}c.rotateX(-Math.PI/2);let h=c.clone();h.scale(1.45,1.3,1.6);let d=new fn(.014,.018,.2,8);d.translate(0,.1,0);let u=new ci(.06,18,14),f=new ci(1,14,10);f.scale(.05,.016,.034),f.translate(.055,0,0);let g=new ci(.035,14,10);g.scale(1,.6,1);let y=new Fs(.62,32);return y.rotateX(-Math.PI/2),$l={body:e,arm:i,foot:s,stem:a,stemTip:o,leaf:c,bigLeaf:h,antennaStalk:d,bobble:u,petal:f,flowerCenter:g,shadow:y},$l}var wa=null;function af(){if(wa)return wa;let n=document.createElement("canvas");n.width=n.height=128;let t=n.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,64);return e.addColorStop(0,"rgba(60,35,25,0.55)"),e.addColorStop(.45,"rgba(60,35,25,0.32)"),e.addColorStop(1,"rgba(60,35,25,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),wa=new Li(n),wa.colorSpace=Re,wa}var ae=Ae.px/Ae.w,rr="#2a1a15",of="#3b231d",Ux="#6e2a2c",Fh="#ff8796";function Oh(){return{eyes:"normal",open:1,lookX:0,lookY:0,mouth:"smile",mouthOpen:.4,blush:.3,brows:null,spin:0,tear:0}}var Jl=class{constructor(t={}){this.shape={eyeY:.565,eyeDX:.158,eyeSize:1,mouthY:.448,blushDX:.268,...t},this.canvas=document.createElement("canvas"),this.canvas.width=Ae.px,this.canvas.height=Ae.py,this.ctx=this.canvas.getContext("2d"),this.texture=new Li(this.canvas),this.texture.colorSpace=Re,this.texture.anisotropy=4,this.texture.generateMipmaps=!0,this.texture.minFilter=Ji,this._key="",this.state=Oh()}X(t){return(t/Ae.w+.5)*Ae.px}Y(t){return(1-(t-Ae.y0)/Ae.h)*Ae.py}update(t){this.state=t;let e=Fx(t);return e===this._key?!1:(this._key=e,this.draw(this.ctx,t),this.texture.needsUpdate=!0,!0)}draw(t,e){t.clearRect(0,0,Ae.px,Ae.py),t.lineCap="round",t.lineJoin="round",this.drawBlush(t,e);for(let i=0;i<2;i++)this.drawEye(t,e,i);this.drawBrows(t,e),this.drawMouth(t,e),e.tear>.05&&this.drawTear(t,e)}eyeCenter(t,e){let i=e===0?-1:1,s=this.shape,r=Wt(t.lookX,-1,1)*.02,a=Wt(t.lookY,-1,1)*.016;return{side:i,x:this.X(i*s.eyeDX+r),y:this.Y(s.eyeY+a),rx:.06*ae*s.eyeSize,ry:.081*ae*s.eyeSize}}drawEye(t,e,i){let s=this.eyeCenter(e,i),r=e.eyes;r==="wink"&&(r=i===1?"happy":"normal");let a=Wt(e.open,0,1);switch(a<.14&&(r==="normal"||r==="wide"||r==="star"||r==="sleepy"||r==="sad"||r==="angry"||r==="focus"||r==="dot")&&(r="closed-blink"),t.save(),r){case"happy":{t.strokeStyle=rr,t.lineWidth=.016*ae,t.beginPath(),t.moveTo(s.x-s.rx*1.05,s.y+s.ry*.28),t.quadraticCurveTo(s.x,s.y-s.ry*1.05,s.x+s.rx*1.05,s.y+s.ry*.28),t.stroke();break}case"closed":case"closed-blink":{t.strokeStyle=rr,t.lineWidth=.014*ae,t.beginPath();let o=s.y+s.ry*.15;t.moveTo(s.x-s.rx*1,o-s.ry*.12),t.quadraticCurveTo(s.x,o+s.ry*.62,s.x+s.rx*1,o-s.ry*.12),t.stroke();break}case"squint":{t.strokeStyle=rr,t.lineWidth=.015*ae;let o=-s.side;t.beginPath(),t.moveTo(s.x-o*s.rx*.85,s.y-s.ry*.62),t.lineTo(s.x+o*s.rx*.75,s.y),t.lineTo(s.x-o*s.rx*.85,s.y+s.ry*.62),t.stroke();break}case"dizzy":{t.strokeStyle=rr,t.lineWidth=.011*ae,t.beginPath();let o=2.3,l=60;for(let c=0;c<=l;c++){let h=c/l,d=e.spin*(i===0?1:-1)+h*o*Math.PI*2,u=h*s.rx*1.15,f=s.x+Math.cos(d)*u,g=s.y+Math.sin(d)*u*1.1;c===0?t.moveTo(f,g):t.lineTo(f,g)}t.stroke();break}case"heart":{let o=s.rx*1.35*(.92+.08*Math.sin(e.spin*3));Ox(t,s.x,s.y+o*.05,o),t.fillStyle="#ff5b7c",t.fill(),t.fillStyle="rgba(255,255,255,0.9)",t.beginPath(),t.ellipse(s.x-o*.38,s.y-o*.32,o*.16,o*.11,-.6,0,Math.PI*2),t.fill();break}default:{let o=s.rx,l=s.ry,c=1;r==="wide"?(o*=1.16,l*=1.16,c=.8):r==="dot"?(o*=.48,l*=.52,c=0):r==="star"&&(o*=1.1,l*=1.1),l*=Math.max(.12,a);let h=null,d=null;if(r==="sleepy"?(h=d=.12,l*=.85):r==="sad"?(h=-.62,d=.12):r==="angry"?(h=.15,d=-.5):r==="focus"&&(h=d=-.45),t.beginPath(),t.ellipse(s.x,s.y,o,l,0,0,Math.PI*2),h!==null){t.save(),t.clip();let u=s.x-s.side*o*1.3,f=s.x+s.side*o*1.3,g=s.y+h*l,y=s.y+d*l,m=r==="angry"?-.05:r==="sleepy"?.42:.16,p=(u+f)/2,S=(g+y)/2+m*l;t.beginPath(),t.moveTo(u,g),t.quadraticCurveTo(p,S,f,y),t.lineTo(f,s.y+l*2),t.lineTo(u,s.y+l*2),t.closePath(),t.clip(),this.fillEyeBall(t,s.x,s.y,o,l,c,r,e),t.restore(),t.save(),t.beginPath(),t.ellipse(s.x,s.y,o+4,l+4,0,0,Math.PI*2),t.clip(),t.strokeStyle=rr,t.lineWidth=.009*ae,t.beginPath(),t.moveTo(u,g),t.quadraticCurveTo(p,S,f,y),t.stroke(),t.restore()}else this.fillEyeBall(t,s.x,s.y,o,l,c,r,e)}}t.restore()}fillEyeBall(t,e,i,s,r,a,o,l){let c=t.createRadialGradient(e,i-r*.25,r*.1,e,i,Math.max(s,r)*1.05);c.addColorStop(0,"#3f2a22"),c.addColorStop(.75,"#24150f"),c.addColorStop(1,"#1b0f0b"),t.fillStyle=c,t.beginPath(),t.ellipse(e,i,s,r,0,0,Math.PI*2),t.fill(),t.save(),t.beginPath(),t.ellipse(e,i,s,r,0,0,Math.PI*2),t.clip();let h=t.createRadialGradient(e,i+r*.95,1,e,i+r*.95,s*1.1);if(h.addColorStop(0,"rgba(150,95,70,0.75)"),h.addColorStop(1,"rgba(150,95,70,0)"),t.fillStyle=h,t.fillRect(e-s,i,s*2,r),t.restore(),a<=0)return;let d=Wt(l.lookX,-1,1),u=Wt(l.lookY,-1,1);if(t.fillStyle="#ffffff",o==="star")Ea(t,e+s*.3-d*2,i-r*.32+u*2,s*.55,.32),t.fill(),Ea(t,e-s*.36,i+r*.42,s*.26,.4),t.fill();else{let f=s*.36*a;t.beginPath(),t.ellipse(e+s*.3-d*2,i-r*.36+u*2,f,Math.min(f*1.05,r*.5),0,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(e-s*.34,i+r*.44,s*.14*a,0,Math.PI*2),t.fill()}}drawBlush(t,e){let i=this.shape,s=Wt(e.blush,0,1.2);if(!(s<=.01))for(let r of[-1,1]){let a=this.X(r*i.blushDX),o=this.Y(i.eyeY-.098),l=.072*ae,c=.043*ae;t.save(),t.translate(a,o),t.scale(1,c/l);let h=t.createRadialGradient(0,0,0,0,0,l),d=.2+.5*Math.min(1,s);if(h.addColorStop(0,`rgba(255,112,138,${d})`),h.addColorStop(.55,`rgba(255,120,145,${d*.75})`),h.addColorStop(1,"rgba(255,130,150,0)"),t.fillStyle=h,t.beginPath(),t.arc(0,0,l,0,Math.PI*2),t.fill(),t.restore(),s>.6){t.strokeStyle=`rgba(226,84,110,${Wt((s-.6)*2.2,0,.85)})`,t.lineWidth=.0065*ae;for(let u=-1;u<=1;u++){let f=a+u*l*.36;t.beginPath(),t.moveTo(f+l*.1,o-c*.35),t.lineTo(f-l*.1,o+c*.35),t.stroke()}}}}drawBrows(t,e){if(!e.brows)return;let i=this.shape;t.strokeStyle=rr,t.lineWidth=.012*ae;for(let s=0;s<2;s++){let r=s===0?-1:1,a=this.X(r*i.eyeDX),o=i.eyeY+.105*i.eyeSize,l=.045*ae,c=0,h=0;e.brows==="worried"?(c=.022,h=-.008):e.brows==="angry"?(c=-.018,h=.016):e.brows==="raised"&&(c=h=.028);let d=a-r*l,u=a+r*l;t.beginPath(),t.moveTo(d,this.Y(o+c)),t.quadraticCurveTo(a,this.Y(o+(c+h)/2+.012),u,this.Y(o+h)),t.stroke()}}drawMouth(t,e){let i=this.shape,s=this.X(0),r=this.Y(i.mouthY),a=Wt(e.mouthOpen,0,1),o=e.mouth;switch(o==="talk"&&(o=a<.18?"smile":"open"),t.strokeStyle=of,t.fillStyle=Ux,t.lineWidth=.0105*ae,o){case"cat":{let l=.042*ae,c=.02*ae;t.beginPath(),t.moveTo(s-l,r-c*.1),t.quadraticCurveTo(s-l*.5,r+c*1.25,s,r),t.quadraticCurveTo(s+l*.5,r+c*1.25,s+l,r-c*.1),t.stroke();break}case"o":{t.beginPath(),t.ellipse(s,r+4,.016*ae*(.8+.4*a),.02*ae*(.65+.7*a),0,0,Math.PI*2),t.fill();break}case"pout":{t.beginPath(),t.ellipse(s,r+4,.011*ae,.009*ae,0,0,Math.PI*2),t.fill();break}case"open":case"grin":{let l=(o==="grin"?.052:.04)*ae,c=.034*ae*(.45+.75*a);t.beginPath(),t.moveTo(s-l,r-2),t.quadraticCurveTo(s,r+2,s+l,r-2),t.quadraticCurveTo(s+l*.95,r+c*1.6,s,r+c*1.55),t.quadraticCurveTo(s-l*.95,r+c*1.6,s-l,r-2),t.closePath(),t.fill(),t.save(),t.clip(),t.fillStyle=Fh,t.beginPath(),t.ellipse(s,r+c*1.55,l*.62,c*.75,0,0,Math.PI*2),t.fill(),t.restore();break}case"yawn":{let l=.03*ae*(.7+.3*a),c=.05*ae*(.3+.7*a);t.beginPath(),t.ellipse(s,r+c*.6,l,c,0,0,Math.PI*2),t.fill(),t.save(),t.clip(),t.fillStyle=Fh,t.beginPath(),t.ellipse(s,r+c*1.45,l*.8,c*.6,0,0,Math.PI*2),t.fill(),t.restore();break}case"flat":{let l=.024*ae;t.beginPath(),t.moveTo(s-l,r+3),t.lineTo(s+l,r+3),t.stroke();break}case"wobble":{let l=.045*ae;t.beginPath();for(let c=0;c<=24;c++){let h=c/24,d=s-l+h*l*2,u=r+4+Math.sin(h*Math.PI*5)*.0065*ae;c===0?t.moveTo(d,u):t.lineTo(d,u)}t.stroke();break}case"frown":{let l=.03*ae,c=.018*ae;t.beginPath(),t.moveTo(s-l,r+c),t.quadraticCurveTo(s,r-c*.7,s+l,r+c),t.stroke();break}case"tongue":{let l=.034*ae,c=.022*ae;t.fillStyle=Fh,t.beginPath(),t.ellipse(s+l*.28,r+c*.85,.013*ae,.017*ae,.15,0,Math.PI*2),t.fill(),t.lineWidth=.006*ae,t.strokeStyle="#d65c6f",t.stroke(),t.strokeStyle=of,t.lineWidth=.0105*ae,t.beginPath(),t.moveTo(s-l,r),t.quadraticCurveTo(s,r+c*1.1,s+l,r),t.stroke();break}case"none":break;default:{let l=.03*ae,c=.022*ae;t.beginPath(),t.moveTo(s-l,r),t.quadraticCurveTo(s,r+c*1.25,s+l,r),t.stroke()}}}drawTear(t,e){let i=this.eyeCenter(e,1),s=Wt(e.tear,0,1),r=i.x+i.rx*.7,a=i.y+i.ry*1.1;t.fillStyle=`rgba(120,190,255,${.9*s})`,t.beginPath(),t.moveTo(r,a-14),t.quadraticCurveTo(r+11,a+2,r,a+8),t.quadraticCurveTo(r-11,a+2,r,a-14),t.fill()}drawPortrait(t,e,i=this.state){let s=t.getContext("2d"),r=t.width,a=t.height;s.clearRect(0,0,r,a);let o=new Lt(e),l=o.clone().offsetHSL(0,-.02,.08).getStyle(),c=o.clone().offsetHSL(0,.02,-.08).getStyle(),h=s.createLinearGradient(0,0,0,a);h.addColorStop(0,l),h.addColorStop(1,c),s.fillStyle=h,s.beginPath(),s.arc(r/2,a/2,r/2,0,Math.PI*2),s.fill();let d=document.createElement("canvas");d.width=Ae.px,d.height=Ae.py,this.draw(d.getContext("2d"),i);let u=Ae.px*.62,f=u,g=Ae.px/2,y=this.Y(this.shape.eyeY-.045);s.drawImage(d,g-u/2,y-f/2,u,f,0,0,r,a)}};function Fx(n){return[n.eyes,Math.round(Wt(n.open)*24),Math.round(n.lookX*12),Math.round(n.lookY*12),n.mouth,Math.round(Wt(n.mouthOpen)*12),Math.round(Wt(n.blush,0,1.2)*20),n.brows||"",n.eyes==="dizzy"||n.eyes==="heart"?Math.round(n.spin*8):0,Math.round(n.tear*6)].join("|")}function Ox(n,t,e,i){n.beginPath(),n.moveTo(t,e+i*.85),n.bezierCurveTo(t-i*1.25,e+i*.05,t-i*.95,e-i*.95,t,e-i*.38),n.bezierCurveTo(t+i*.95,e-i*.95,t+i*1.25,e+i*.05,t,e+i*.85),n.closePath()}function Ea(n,t,e,i,s=.38){n.beginPath();for(let r=0;r<8;r++){let a=r/8*Math.PI*2-Math.PI/2,o=r%2===0?i:i*s,l=t+Math.cos(a)*o,c=e+Math.sin(a)*o;r===0?n.moveTo(l,c):n.lineTo(l,c)}n.closePath()}function lf(n,t,e={}){let i=new Lt(n),s=new ke({color:i,roughness:.5,metalness:0,envMapIntensity:.55}),r=i.clone().lerp(new Lt("#fff7ea"),.45),a=i.clone().lerp(new Lt("#fff4e6"),.6),o={uFace:{value:t},uFaceRect:{value:new Se(Ae.w,Ae.h,Ae.y0,gn.height)},uBelly:{value:r},uBellyAmt:{value:e.belly??.55},uRim:{value:a},uRimStrength:{value:.32},uFlash:{value:0},uGlow:{value:0}};return s.userData.uniforms=o,s.onBeforeCompile=l=>{Object.assign(l.uniforms,o),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
}`)},s.customProgramCacheKey=()=>"critter-body-v1",s}function cf(n){let t=new Lt(n).offsetHSL(0,.03,-.06);return new ke({color:t,roughness:.55,envMapIntensity:.5})}var vS=new A,ge=(n,t,e,i)=>n.ctx.fx?.(t,e,i),jt=(n,t,e={})=>n.ctx.sfx?.(t,{critter:n,...e}),Oe=(n,t=0)=>n.headPos(new A,t),Bx=n=>new A(Math.sin(n.heading),0,Math.cos(n.heading)),zx=n=>n.ctx.camera?.position;function ar(n){let t=zx(n);t&&!n.walking&&n.faceToward(t),t&&n.lookAt(t,2.5)}var hf={hop:{dur:.78,update(n,t,e,i){let s=t.t,r=n.bounce;if(s<.17){let a=gi(s/.17);e.sq-=.17*a*r,e.armL.z-=.15*a,e.armR.z-=.15*a}else if(s<.55){let a=(s-.17)/.38;e.y+=4*a*(1-a)*.34*r,e.armL.z+=1.1*me(a),e.armR.z+=1.1*me(a),e.footL.y-=.02*me(a),e.footR.y-=.02*me(a),i.mouth="o",i.mouthOpen=.3}else i.eyes=s<.68?"squint":i.eyes;t.at(.17)&&(n.sq.impulse(1.4*r),jt(n,"hop")),t.at(.55)&&(n.sq.impulse(-1.6*r),ge(n,"dust",n.footPos(),{count:3,size:.22}),jt(n,"land",{strength:.6}))}},boop:{dur:1.05,lockMove:!0,start(n){n.sq.impulse(-2.6),n.leanX.impulse(-1.5),ar(n),ge(n,"pop",Oe(n,-.25),{count:1})},update(n,t,e,i){let s=t.t;s<.22?(i.eyes="squint",i.mouth="o",i.mouthOpen=.5,e.sq-=.08*t.w):s<.5?(i.eyes="wide",i.mouth="o",i.mouthOpen=.7,e.y+=me(s,.22,.5)*.13,e.armL.z+=me(s,.22,.5)*.9,e.armR.z+=me(s,.22,.5)*.9):(i.eyes="happy",i.mouth="open",i.mouthOpen=.6,e.tz+=Math.sin(s*14)*.05*(1-s/1.05)),i.blush+=.35,t.at(.22)&&n.sq.impulse(1.8),t.at(.5)&&(n.sq.impulse(-1.4),ge(n,"sparkle",Oe(n),{count:3}))}},giggle:{dur:1.5,lockMove:!0,start(n){jt(n,"giggle"),ar(n)},update(n,t,e,i){let s=t.t,r=t.w;e.y+=Math.abs(Math.sin(s*24))*.035*r,e.tz+=Math.sin(s*12)*.06*r,e.armR.f+=1.75*r,e.armR.z-=.5*r,e.armL.z+=.3*r,i.eyes="happy",i.mouth="open",i.mouthOpen=.45+.4*Math.abs(Math.sin(s*24)),i.blush+=.4,(t.at(.2)||t.at(.8))&&ge(n,"sparkle",Oe(n),{count:2})}},dizzy:{dur:3,lockMove:!0,start(n){jt(n,"dizzy"),ge(n,"stars",Oe(n,.05),{critter:n,duration:2.6})},update(n,t,e,i){let s=t.t,r=t.w*(1-gi((s-2.2)/.8));i.eyes="dizzy",i.mouth="wobble",e.tx+=Math.sin(s*6.5)*.15*r,e.tz+=Math.cos(s*6.5)*.15*r,e.sproutZ+=Math.sin(s*6.5)*.35*r,e.sq-=.04*r,e.armL.z+=.5*r,e.armR.z+=.5*r}},grumpy:{dur:3.2,lockMove:!0,start(n,t){t.data.turn=n.heading+(ei(.5)?1:-1)*2.2,jt(n,"grumble"),ge(n,"anger",Oe(n,-.1),{})},update(n,t,e,i){let s=t.t,r=de(s,0,.3,2,2.6);if(e.sx+=.13*r,e.sq-=.05*r,i.eyes="angry",i.brows="angry",i.mouth="pout",i.blush+=.3,s>.3&&s<1.6){let a=Math.sin(s*15);e.footL.y+=Math.max(0,a)*.07,e.footR.y+=Math.max(0,-a)*.07,e.tz+=a*.035,Math.abs(a)>.97&&!t.data.lastStomp?(t.data.lastStomp=!0,n.sq.impulse(-.6),jt(n,"step",{stomp:!0})):Math.abs(a)<.9&&(t.data.lastStomp=!1)}t.at(.4)&&n.setHeading(t.data.turn),s>2.1&&(i.eyes=s<2.6?"closed":"normal",i.mouth="flat",i.brows=null),t.at(2.1)&&jt(n,"sigh"),t.at(2.7)&&ar(n)},end(n){n.setMood("content",3)}},wave:{slot:"upper",dur:1.9,start(n,t){t.opts.target?(n.walking||n.faceToward(t.opts.target.position||t.opts.target),n.lookAt(t.opts.target,2)):ar(n),t.opts.sound!==!1&&jt(n,"hi")},update(n,t,e,i){let s=t.t,r=de(s,0,.25,1.55,1.9),a=n.walking?e.armR:e.armL;a.z+=(2.45+Math.sin(s*13)*.42)*r,a.f+=.35*r,e.tz+=Math.sin(s*6.5)*.05*r,r>.4&&(i.eyes="happy",i.mouth="open",i.mouthOpen=.5)}},tilt:{dur:1.7,start(n,t){t.data.dir=ei(.5)?1:-1,ge(n,"question",Oe(n,.05),{}),jt(n,"hmm")},update(n,t,e,i){let s=de(t.t,0,.28,1.25,1.7),r=t.data.dir;e.tz+=r*.3*nr(Math.min(1,s)),e.sproutZ-=r*.25*s,s>.3&&(i.eyes="wide",i.mouth="o",i.mouthOpen=.1)}},lookAround:{dur:2.8,update(n,t,e,i){let s=t.t,r=de(s,.15,.45,.95,1.25),a=de(s,1.25,1.55,2.1,2.45);e.ry+=(r-a)*.6;let o=de(s,.05,.15,1,1.15),l=de(s,1.15,1.25,2.15,2.3);i.lookX=(o-l)*.95,i.lookY=.1,s>2.45&&(i.eyes="normal")}},yawn:{dur:2.8,lockMove:!0,start(n){jt(n,"yawn")},update(n,t,e,i){let s=t.t,r=de(s,0,.45,1.05,1.45);if(e.sq+=.14*r,e.armL.z+=2.3*r,e.armR.z+=2.3*r,e.armL.f+=.3*r,e.armR.f+=.3*r,e.tx-=.14*r,s<1.4)i.eyes="closed",i.mouth="yawn",i.mouthOpen=r;else if(s<1.8)i.eyes="closed",i.mouth="cat";else{i.eyes="sleepy";let a=me(s,1.8,2.5);e.tz+=Math.sin(s*32)*.05*a}i.tear=de(s,1,1.3,2.3,2.8)*.9}},stretch:{dur:2.4,lockMove:!0,update(n,t,e,i){let s=t.t,r=de(s,0,.5,1.8,2.4);e.armL.z+=2.6*r,e.armR.z+=2.6*r,e.sq+=.13*r,e.tz+=Math.sin(s*2.6)*.17*r,i.eyes="closed",i.mouth=s>.6&&s<1.6?"o":"cat",i.mouthOpen=.3,t.at(.6)&&jt(n,"mm")}},sneeze:{dur:2.5,lockMove:!0,update(n,t,e,i){let s=t.t;if(s<1.12){let r=gi(s/.45),a=gi((s-.65)/.4),o=s<.65?r*.5:.5+a*.5;e.sq+=.14*o,e.tx-=.24*o,i.eyes=o>.6?"squint":"sleepy",i.mouth="o",i.mouthOpen=.3+o*.6,e.sproutX+=.3*o}else if(s<1.55){let r=1-(s-1.12)/.43;i.eyes="squint",i.mouth="open",i.mouthOpen=.8,e.tx+=.22*r}else{let r=me(s,1.55,2.3);e.ry+=Math.sin(s*24)*.22*r,i.eyes=s<2?"closed":"happy",i.mouth="wobble"}if(t.at(.05)&&jt(n,"ah"),t.at(1.12)){n.sq.impulse(-3.2),n.leanX.impulse(7),n.sproutX.impulse(-6);let r=Bx(n);ge(n,"puff",n.facePos(new A,.65,.5),{dir:r,count:6}),jt(n,"sneeze"),n.push.addScaledVector(new j(r.x,r.z),-1.6)}}},trip:{dur:3.5,lockMove:!0,start(n){jt(n,"whoa"),n.vel.multiplyScalar(.3)},update(n,t,e,i){let s=t.t,r=1.42,a=0;if(s<.3)a=Yl(s/.3),e.armL.z+=2.1*a,e.armR.z+=2.1*a,i.eyes="wide",i.mouth="o",i.mouthOpen=.8;else if(s<1.9){a=1+Math.sin((s-.3)*18)*Math.exp(-(s-.3)*7)*.06;let o=Math.sin(s*11);e.footL.z-=Math.max(0,o)*.12,e.footR.z-=Math.max(0,-o)*.12,e.armL.z+=.9+Math.sin(s*9)*.35,e.armR.z+=.9+Math.sin(s*9+1.2)*.35,i.eyes="squint",i.mouth="wobble"}else if(s<2.4){let o=(s-1.9)/.5;a=1-nr(o,2.2),i.eyes="normal",i.mouth="o"}else{let o=me(s,2.4,3.2);e.tz+=Math.sin(s*26)*.08*o,i.eyes="happy",i.mouth="tongue",i.blush+=.6}e.rx+=r*a,e.y+=.45*Wt(a,0,1),t.at(.3)&&(n.sq.impulse(-2.5),ge(n,"dust",n.facePos(new A,.7,.05),{count:6,size:.3}),jt(n,"bonk")),t.at(2.45)&&(ge(n,"sweat",Oe(n),{}),jt(n,"shake"))}},dance:{dur:null,lockMove:!0,start(n,t){t.data.style=Si(["bounce","sway","wiggle"]),t.data.noteT=ot(.2,1),t.data.offset=ot(0,1)<.5?0:.5},update(n,t,e,i){let s=t.w,r=(n.ctx.beat?n.ctx.beat():t.t*2)+t.data.offset,a=r*Math.PI,o=Math.abs(Math.sin(a)),l=t.data.style;e.y+=o*(l==="bounce"?.14:.07)*s,e.sq+=(o*.08-.05)*s,e.tz+=Math.sin(a*.5)*(l==="sway"?.22:.12)*s,l==="wiggle"&&(e.ry+=Math.sin(a*2)*.25*s),e.armL.z+=(1.1+1.1*Math.max(0,Math.sin(a)))*s,e.armR.z+=(1.1+1.1*Math.max(0,-Math.sin(a)))*s,e.footL.y+=Math.max(0,Math.sin(a))*.05*s,e.footR.y+=Math.max(0,-Math.sin(a))*.05*s;let c=r%8;c>7&&(e.spin+=$e*Dh(c-7)),i.eyes=Math.floor(r/4)%2?"happy":"closed",i.mouth=Math.floor(r/2)%2?"open":"cat",i.mouthOpen=.6,i.blush+=.2,t.data.noteT-=1/60,t.data.noteT<=0&&(t.data.noteT=ot(1.2,2.4),ge(n,"note",Oe(n),{}))}},spin:{dur:1,start(n){jt(n,"whee")},update(n,t,e,i){let s=Wt(t.t/.9);e.spin+=$e*Dh(s);let r=me(s);e.armL.z+=1.6*r,e.armR.z+=1.6*r,e.y+=r*.06,i.eyes="happy",i.mouth="open"}},sleep:{dur:null,lockMove:!0,fadeIn:.6,start(n,t){t.data.zT=1,t.data.twitchT=ot(6,14),t.opts.silent||jt(n,"mm")},update(n,t,e,i){let s=t.t,r=gi(s/.9)*t.w,a=Math.sin(s*1.3);e.sq+=(-.1+a*.035)*r,e.y-=.02*r,e.tx+=(.13+a*.02)*r,e.tz+=Math.sin(s*.37)*.07*r,e.footL.z+=.09*r,e.footR.z+=.09*r,e.armL.z-=.12*r,e.armR.z-=.12*r,e.droop+=.7*r,t.w>.4&&(i.eyes="closed",i.mouth=a>.35?"o":"smile",i.mouthOpen=.15,i.blush+=.15),t.data.zT-=1/60,t.data.zT<=0&&(t.data.zT=ot(1.6,2.4),ge(n,"zzz",Oe(n,-.05),{}),ei(.35)&&jt(n,"snore")),t.data.twitchT-=1/60,t.data.twitchT<=0&&(t.data.twitchT=ot(8,16),n.sq.impulse(-1.2),n.sproutX.impulse(-3),ei(.5)&&jt(n,"mumble")),n.nightcap(Math.min(1,nr(Math.min(1,t.t/.6)))*t.w);let o=t.data;if(o.bub=(o.bub??-ot(1,3))+1/60,o.bub>0&&!t.stopping){let l=Math.min(1,o.bub/4);n.noseBubble(l*(.65+.35*(a*.5+.5))),o.bub>4.5&&Math.random()<.004&&(n.noseBubble(0),o.bub=-ot(2,5),n.sq.impulse(-.8),jt(n,"pop"))}else n.noseBubble(0)},end(n){n.noseBubble(0),n._capOff=!0}},wake:{dur:2.6,lockMove:!0,update(n,t,e,i){let s=t.t;if(s<1.1){i.eyes=s<.5?"closed":"sleepy";let r=de(s,.1,.3,.8,1.05);e.armR.f+=1.7*r,e.armR.z-=.45*r,e.armR.f+=Math.sin(s*22)*.12*r,e.sq-=.05*(1-s/1.1),i.mouth="flat"}else{let r=de(s,1.1,1.5,2,2.5);e.armL.z+=2.4*r,e.armR.z+=2.4*r,e.sq+=.12*r,i.eyes=r>.3?"closed":"normal",i.mouth=r>.3?"yawn":"smile",i.mouthOpen=r}t.at(1.15)&&jt(n,"yawn")}},sit:{dur:null,lockMove:!0,fadeIn:.35,update(n,t,e,i){let s=t.t,r=gi(s/.45)*t.w;e.sq-=.07*r,e.footL.z+=.15*r,e.footR.z+=.15*r,e.footL.y+=.04*r,e.footR.y+=.04*r,n.seat>.2&&(e.footL.z+=Math.sin(s*3.1)*.05*r,e.footR.z+=Math.sin(s*3.1+Math.PI)*.05*r,e.footL.y-=.03*r,e.footR.y-=.03*r)}},hopTo:{dur:.62,lockMove:!0,start(n,t){t.data.from=n.position.clone(),t.data.to=new A(t.opts.to.x,0,t.opts.to.z),t.data.s0=n.seat,t.data.s1=t.opts.seat??0,t.data.from.distanceTo(t.data.to)>.05&&n.faceToward(t.data.to,!0),n.stopWalking(),n.vel.set(0,0)},update(n,t,e,i){let s=t.t;if(s<.12){e.sq-=.14*gi(s/.12);return}let r=gi(Wt((s-.12)/.42));n.position.x=t.data.from.x+(t.data.to.x-t.data.from.x)*r,n.position.z=t.data.from.z+(t.data.to.z-t.data.from.z)*r,n.seat=t.data.s0+(t.data.s1-t.data.s0)*r,e.y+=me(r)*(.28+Math.abs(t.data.s1-t.data.s0)*.4),e.armL.z+=me(r)*.9,e.armR.z+=me(r)*.9,r>.1&&r<.9&&(i.mouth="o",i.mouthOpen=.3),t.at(.12)&&(n.sq.impulse(1.4),jt(n,"hop")),t.at(.55)&&(n.sq.impulse(-1.6),t.data.s1<.05&&ge(n,"dust",n.footPos(),{count:2}))},end(n,t){n.seat=t.data.s1,n.position.x=t.data.to.x,n.position.z=t.data.to.z}},type:{dur:null,lockMove:!0,start(n,t){t.data.pauseT=ot(3,7),t.data.mode="type",t.data.modeT=0},update(n,t,e,i){let s=t.t,r=t.w,a=t.data;if(a.modeT+=1/60,a.pauseT-=1/60,a.pauseT<=0&&(a.mode=a.mode==="type"?Si(["think","think","yay","sip"]):"type",a.modeT=0,a.pauseT=a.mode==="type"?ot(3,7):ot(1.4,2.2),a.mode==="yay"&&(jt(n,"yay",{soft:!0}),ge(n,"sparkle",Oe(n),{count:4}))),e.tx+=.09*r,a.mode==="type")e.armL.f+=(1.25+Math.max(0,Math.sin(s*19))*.2)*r,e.armR.f+=(1.25+Math.max(0,Math.sin(s*19+Math.PI))*.2)*r,e.armL.z-=.24*r,e.armR.z-=.24*r,e.y+=Math.abs(Math.sin(s*9.5))*.008*r,i.eyes="focus",i.lookY=-.35,i.lookX=Math.sin(s*.8)*.35,i.mouth="cat",Math.random()<.06&&jt(n,"tap");else if(a.mode==="think")e.armR.f+=1.45*r,e.armR.z-=.6*r,e.armL.f+=.9*r,e.tz+=.09*r,i.lookY=.65,i.lookX=.5,i.mouth="flat";else if(a.mode==="yay"){let o=me(a.modeT,0,.9);e.y+=o*.12,e.armL.z+=2.2*o,e.armR.z+=2.2*o,i.eyes="happy",i.mouth="open"}else e.armL.f+=1.8*r,e.armL.z-=.3*r,i.eyes="closed",i.mouth="cat",i.blush+=.2}},tinker:{dur:null,lockMove:!0,update(n,t,e,i){let s=t.t,r=t.w,a=s*1.6%1,o=a<.7?gi(a/.7):1-Yl((a-.7)/.3);e.armL.f+=(.9+o*1.5)*r,e.armL.z-=.1*r,e.armR.f+=1*r,e.armR.z-=.35*r,e.tx+=(.1-o*.06)*r,i.eyes="focus",i.lookY=-.5,i.mouth=o>.8?"flat":"cat";let l=Math.floor(s*1.6);l!==t.data.k&&(t.data.k=l,s>.5&&(n.sq.impulse(-.7),ge(n,"spark",n.facePos(new A,.75,.35),{count:4}),jt(n,"tink")))}},read:{dur:null,lockMove:!0,start(n,t){!n.item&&n.ctx.makeItem&&n.hold(n.ctx.makeItem("book",n),"front"),t.data.flipT=ot(3,6),t.data.reactT=ot(5,10),t.data.react=null},update(n,t,e,i){let s=t.t,r=t.data;e.tx+=.12*t.w,i.lookY=-.55;let a=s*.55%1;if(i.lookX=a<.85?-.55+a/.85*1.1:.55-(a-.85)/.15*1.1,i.mouth="cat",r.flipT-=1/60,r.flipT<=0&&(r.flipT=ot(3.5,6.5),n.item?.userData.flip?.(),jt(n,"page")),r.reactT-=1/60,r.reactT<=0&&(r.reactT=ot(6,12),r.react=Si(["gasp","giggle","aww"]),r.reactAt=s),r.react&&s-r.reactAt<1.4){let o=s-r.reactAt;r.react==="gasp"?(i.eyes="wide",i.mouth="o",i.mouthOpen=.7,e.tx-=.08*me(o,0,1.4)):r.react==="giggle"?(i.eyes="happy",i.mouth="open",e.y+=Math.abs(Math.sin(o*22))*.02):(i.eyes="happy",i.mouth="cat",i.blush+=.5,o<.05&&ge(n,"heart",Oe(n),{count:1}))}},end(n){n.drop(!0)}},think:{dur:3.8,lockMove:!0,start(n){ge(n,"dots",Oe(n,.05),{})},update(n,t,e,i){let s=t.t,r=de(s,0,.4,2.6,3);e.armR.f+=1.5*r,e.armR.z-=.62*r,e.tz+=.09*r,e.ry+=.18*r,s<2.6?(i.lookX=.6,i.lookY=.75,i.mouth=s<1.4?"flat":"o",i.mouthOpen=.1):(i.eyes="star",i.mouth="open",e.y+=me(s,2.6,3.2)*.16,e.sproutX-=.4*me(s,2.6,3.4),e.armL.z+=1.8*me(s,2.6,3.6)),t.at(2.6)&&(ge(n,"bulb",Oe(n,.12),{}),jt(n,"idea"),n.sq.impulse(1.5))}},write:{dur:null,lockMove:!0,update(n,t,e,i){let s=t.t,r=t.w;e.armL.f+=(2.05+Math.sin(s*7)*.14)*r,e.armL.z+=(.12+Math.cos(s*7)*.12)*r,e.armR.z+=.25*r,e.y+=Math.abs(Math.sin(s*3.5))*.02*r,e.footL.rx=.25*r,i.eyes="focus",i.lookY=.35,i.lookX=Math.sin(s*1.4)*.3,i.mouth="cat",Math.random()<.03&&jt(n,"scribble")}},water:{dur:null,lockMove:!0,start(n,t){!n.item&&n.ctx.makeItem&&n.hold(n.ctx.makeItem("wateringCan",n),"front"),t.data.dropT=0},update(n,t,e,i){let s=t.w,r=de(t.t,.3,.8,99,100);if(n.item&&(n.item.rotation.x=.75*r*s),e.tx+=.08*s,i.eyes="happy",i.mouth="cat",t.data.dropT-=1/60,r>.8&&t.data.dropT<=0){t.data.dropT=.12;let a=n.facePos(new A,.95,.35);ge(n,"drop",a,{})}t.at(1)&&jt(n,"water")},end(n){n.drop(!0)}},carry:{slot:"upper",dur:null,update(n,t,e,i){i.mouth="cat",i.eyes="normal"}},reach:{dur:1.3,lockMove:!0,update(n,t,e,i){let s=de(t.t,0,.35,.85,1.25);e.armL.f+=2.2*s,e.armR.f+=2.2*s,e.armL.z-=.15*s,e.armR.z-=.15*s,e.y+=.06*s,e.sq+=.07*s,e.footL.rx=.5*s,e.footR.rx=.5*s,i.lookY=.45,i.mouth="o",i.mouthOpen=.2,t.at(.7)&&jt(n,"pin")}},admire:{dur:1.8,lockMove:!0,update(n,t,e,i){let s=de(t.t,0,.3,1.5,1.8);e.armL.z-=.5*s,e.armR.z-=.5*s,e.armL.f-=.45*s,e.armR.f-=.45*s,e.tx-=.06*s,e.tx+=Math.sin(t.t*10)*.05*me(t.t,.6,1.3),e.y+=Math.abs(Math.sin(t.t*7))*.025*s,i.eyes="happy",i.mouth="cat",i.blush+=.2}},stamp:{dur:null,lockMove:!0,update(n,t,e,i){let s=t.t,r=s*1.2%1,a=r<.65?gi(r/.65):1-Yl((r-.65)/.35);e.armL.f+=(1+a*1.1)*t.w,e.armR.f+=(1+a*1.1)*t.w,e.armL.z-=.35*t.w,e.armR.z-=.35*t.w,e.y+=a*.05,i.eyes=a>.8?"focus":"normal",i.lookY=-.5,i.mouth="cat";let o=Math.floor(s*1.2);o!==t.data.k&&(t.data.k=o,s>.5&&(n.sq.impulse(-1.1),jt(n,"stamp"),ei(.4)&&ge(n,"sparkle",n.facePos(new A,.7,.3),{count:2})))}},gaze:{dur:null,lockMove:!0,start(n,t){t.data.sighT=ot(4,9)},update(n,t,e,i){let s=t.t;i.lookY=.35,i.lookX=Math.sin(s*.25)*.4,i.mouth="cat",e.tz+=Math.sin(s*.8)*.05*t.w,e.armL.z-=.1,t.data.sighT-=1/60,t.data.sighT<=0&&(t.data.sighT=ot(6,11),t.data.dreamy=s,ei(.5)&&ge(n,"heart",Oe(n),{count:1})),t.data.dreamy&&s-t.data.dreamy<1.8&&(i.eyes="closed",i.blush+=.3)}},pet:{dur:null,lockMove:!0,fadeIn:.25,start(n,t){t.data.heartT=.3,t.data.cooT=0,n.stopWalking()},update(n,t,e,i){let s=t.t,r=t.w,a=n.petLean||{x:0,y:0};e.tz+=Wt(a.x,-1,1)*.22*r,e.tx+=Wt(a.y,-1,1)*.12*r,e.sq+=(Math.sin(s*38)*.008-.03)*r,e.sproutZ+=Math.sin(s*5)*.25*r,e.armL.z+=.35*r,e.armR.z+=.35*r,i.eyes=Math.floor(s/1.6)%3===2?"happy":"closed",i.mouth="cat",i.blush+=.55*r,t.data.heartT-=1/60,t.data.heartT<=0&&(t.data.heartT=ot(.5,.9),ge(n,"heart",Oe(n),{count:1})),t.data.cooT-=1/60,t.data.cooT<=0&&(t.data.cooT=ot(1.4,2.4),jt(n,"coo"))}},held:{dur:null,lockMove:!0,fadeIn:.1,start(n,t){jt(n,"whee"),t.data.brave=n.traits.energy>.35},update(n,t,e,i){let s=t.t,r=t.w,a=n.heldVel;e.sq+=.07*r,e.tz+=Wt(-a.x*.09,-.5,.5)*r,e.tx+=Wt(a.y*.09,-.5,.5)*r,e.footL.y+=(Math.sin(s*13)*.035-.04)*r,e.footR.y+=(Math.sin(s*13+Math.PI)*.035-.04)*r,e.footL.z+=Math.cos(s*13)*.04*r,e.footR.z-=Math.cos(s*13)*.04*r,e.armL.z+=(.95+Math.sin(s*10)*.35)*r,e.armR.z+=(.95+Math.sin(s*10+1.3)*.35)*r,s<1||!t.data.brave?(i.eyes="wide",i.mouth=t.data.brave?"o":"wobble",i.mouthOpen=.6):(i.eyes="happy",i.mouth="open"),i.blush+=.2}},land:{dur:1,lockMove:!0,update(n,t,e,i){let s=t.t;s<.3?(i.eyes="squint",i.mouth="o"):(e.tz+=Math.sin(s*26)*.07*(1-s),i.eyes="normal",i.mouth="smile")}},hiccup:{dur:.9,update(n,t,e,i){let s=t.t;e.y+=me(s,.1,.3)*.08,s>.1&&s<.5&&(i.eyes="wide",i.mouth="o",i.mouthOpen=.2),t.at(.1)&&(n.sq.impulse(2.4),jt(n,"hic"))}},scratch:{dur:1.7,update(n,t,e,i){let s=t.t,r=de(s,0,.3,1.3,1.7);e.armR.z+=2.25*r,e.armR.f+=(.3+Math.sin(s*21)*.13)*r,e.tz-=.12*r,i.lookX=-.5,i.lookY=.55,i.mouth="cat"}},hum:{dur:3.2,start(n){jt(n,"hum")},update(n,t,e,i){let s=t.t;e.tz+=Math.sin(s*3.2)*.07*t.w,e.y+=Math.abs(Math.sin(s*3.2))*.015,i.eyes="closed",i.mouth="o",i.mouthOpen=.15,(t.at(.3)||t.at(1.4)||t.at(2.4))&&ge(n,"note",Oe(n),{})}},wiggle:{dur:1.5,update(n,t,e,i){let s=de(t.t,0,.2,1.2,1.5);e.ry+=Math.sin(t.t*17)*.26*s,e.sq+=Math.sin(t.t*34)*.03*s,e.armL.z+=.6*s,e.armR.z+=.6*s,i.eyes="happy",i.mouth="cat"}},tapFoot:{dur:2.4,update(n,t,e,i){let s=de(t.t,0,.2,2.1,2.4);e.footL.y+=Math.max(0,Math.sin(t.t*12))*.05*s,e.footL.rx=-.4*s,e.armL.z-=.45*s,e.armR.z-=.45*s,e.armL.f-=.4*s,e.armR.f-=.4*s,i.mouth="flat",i.lookX=.6,i.lookY=.2}},blinkSlow:{dur:1.4,update(n,t,e,i){i.open=1-me(t.t,.1,1.2),i.mouth="cat",i.blush+=.25*me(t.t,0,1.4)}},nod:{dur:1,slot:"upper",update(n,t,e,i){e.tx+=Math.sin(t.t*15)*.14*de(t.t,0,.1,.8,1),i.eyes="happy"}},shakeHead:{dur:1.1,slot:"upper",update(n,t,e,i){e.ry+=Math.sin(t.t*17)*.3*de(t.t,0,.1,.85,1.1),i.eyes="closed",i.mouth="flat"}},surprised:{dur:1.2,start(n){n.sq.impulse(3.2),ge(n,"exclaim",Oe(n,.05),{}),jt(n,"gasp")},update(n,t,e,i){let s=t.t;e.y+=me(s,0,.32)*.2,e.sproutX-=.5*me(s,0,.8),e.armL.z+=.9*me(s,0,.6),e.armR.z+=.9*me(s,0,.6),i.eyes=s<.7?"dot":"wide",i.mouth="o",i.mouthOpen=.8}},cheer:{dur:2.3,lockMove:!0,start(n){ar(n),jt(n,"yay"),ge(n,"confetti",Oe(n,.1),{count:24})},update(n,t,e,i){let s=t.t,r=me(s,.1,.65),a=me(s,.85,1.4);e.y+=(r+a)*.28*n.bounce,e.armL.z+=2.5*de(s,0,.15,1.6,2.1),e.armR.z+=2.5*de(s,0,.15,1.6,2.1),e.armL.z+=Math.sin(s*16)*.2,e.armR.z+=Math.sin(s*16+1)*.2,i.eyes="star",i.mouth="open",i.mouthOpen=.8,i.blush+=.4,(t.at(.65)||t.at(1.4))&&(n.sq.impulse(-1.6),ge(n,"dust",n.footPos(),{count:2}))}},shy:{dur:2.6,lockMove:!0,update(n,t,e,i){let s=t.t,r=de(s,0,.3,2.2,2.6),a=de(s,1.1,1.25,1.6,1.8);e.armL.f+=(1.9-a*.6)*r,e.armR.f+=1.9*r,e.armL.z-=.55*r,e.armR.z-=.55*r,e.tz+=Math.sin(s*3)*.07*r,e.tx+=.1*r,i.eyes=a>.5?"normal":"closed",i.blush=1.1,i.mouth="wobble",t.at(.4)&&ge(n,"heart",Oe(n),{count:1,small:!0})}},sad:{dur:3.2,lockMove:!0,start(n){jt(n,"aww")},update(n,t,e,i){let s=de(t.t,0,.5,2.6,3.2);e.sq-=.05*s,e.tx+=.12*s,e.droop+=.9*s,e.armL.z-=.15*s,e.armR.z-=.15*s,i.eyes="sad",i.mouth="frown",i.brows="worried",i.tear=de(t.t,.8,1.2,2.4,3)}},sheepish:{dur:2.6,lockMove:!0,start(n){ar(n),ge(n,"sweat",Oe(n),{})},update(n,t,e,i){let s=t.t,r=de(s,0,.3,2.2,2.6);e.armR.z+=2.2*r,e.armR.f+=(.3+Math.sin(s*20)*.12)*r,e.tz-=.1*r,i.eyes="happy",i.mouth="wobble",i.blush=.9}},hug:{dur:2.8,lockMove:!0,start(n,t){t.opts.partner&&n.faceToward(t.opts.partner.position),jt(n,"coo")},update(n,t,e,i){let s=de(t.t,0,.4,2.2,2.8);e.tx+=.24*s,e.armL.f+=1.5*s,e.armR.f+=1.5*s,e.armL.z+=.2*s,e.armR.z+=.2*s,e.sq+=Math.sin(t.t*4)*.02*s,i.eyes=s>.5?"closed":"happy",i.mouth="cat",i.blush+=.6*s,t.at(.7)&&ge(n,"heart",Oe(n,.1),{count:2})}},bonk:{dur:1.4,lockMove:!0,start(n,t){n.sq.impulse(-2.6);let e=t.opts.from?new j(n.position.x-t.opts.from.x,n.position.z-t.opts.from.z).normalize():new j(-Math.sin(n.heading),-Math.cos(n.heading));n.push.addScaledVector(e,2.2),n.leanX.impulse(-4),jt(n,"bonk",{soft:!0})},update(n,t,e,i){let s=t.t;s<.4?(i.eyes="squint",i.mouth="o"):s<.8?(i.eyes="wide",i.mouth="o"):(i.eyes="happy",i.mouth="open",e.y+=Math.abs(Math.sin(s*20))*.02)}},talk:{slot:"upper",dur:null,update(n,t,e,i){n.talkTime>0?(e.armL.f+=Math.max(0,Math.sin(t.t*3.3))*.5*t.w,e.armL.z+=Math.max(0,Math.sin(t.t*2.1))*.4*t.w):e.tx+=Math.max(0,Math.sin(t.t*5))*.04*t.w}},peek:{dur:2.2,update(n,t,e,i){let s=de(t.t,0,.4,1.7,2.2);e.tx+=.18*s,e.tz+=.18*s,i.eyes="wide",i.mouth="o",i.mouthOpen=.15}}},uf={Reactions:["boop","giggle","surprised","dizzy","grumpy","shy","sheepish","sad","bonk"],Joy:["hop","wave","spin","cheer","dance","wiggle","hum","nod"],Fidgets:["tilt","lookAround","scratch","yawn","stretch","sneeze","hiccup","tapFoot","blinkSlow","peek"],Activities:["type","tinker","read","write","think","water","stamp","gaze","sit","sleep","wake"],Mishaps:["trip"]};var ns=new A,df=new A,AS=new A(0,1,0),Kl=[{name:"peach",color:"#ffb18f"},{name:"mint",color:"#93dcbc"},{name:"lilac",color:"#c4b0f2"},{name:"butter",color:"#ffd977"},{name:"sky",color:"#95c8f4"},{name:"rose",color:"#ffa3bf"},{name:"sage",color:"#b9d48f"},{name:"apricot",color:"#ffc58a"},{name:"lavender",color:"#a9b2f0"},{name:"coral",color:"#ff9a8c"}],jl=["sprout","leaf","antenna","flower"],ff={happy:{eyes:"normal",mouth:"smile",blush:.38},content:{eyes:"normal",mouth:"cat",blush:.32},excited:{eyes:"star",mouth:"open",blush:.5,mouthOpen:.55},sleepy:{eyes:"sleepy",mouth:"flat",blush:.25},curious:{eyes:"normal",mouth:"o",blush:.3,mouthOpen:.1},sad:{eyes:"sad",mouth:"frown",blush:.2,brows:"worried"},grumpy:{eyes:"angry",mouth:"pout",blush:.25,brows:"angry"},focused:{eyes:"focus",mouth:"cat",blush:.25},shy:{eyes:"normal",mouth:"wobble",blush:.8}},kx=1,Bh=null,pf=null,Aa=class{constructor(t={}){this.id=t.id||`critter-${kx++}`,this.name=t.name||"Sprout",this.seed=t.seed??Math.floor(Math.random()*1e9);let e=nf(this.seed);this.rng=e,this.color=t.color||Kl[Math.floor(e()*Kl.length)].color,this.accessory=t.accessory||jl[Math.floor(e()*jl.length)],this.size=t.size??.92+e()*.16;let i=t.traits||{};this.traits={energy:i.energy??e(),curiosity:i.curiosity??e(),sociability:i.sociability??e(),sleepiness:i.sleepiness??e(),clumsiness:i.clumsiness??e()*.8,chattiness:i.chattiness??e()};let s=this.traits;this.walkSpeed=.85+s.energy*.55,this.bounce=.8+s.energy*.45,this.blinkEvery=2.4+e()*2.6,this.voice=t.voice??.85+e()*.5,this.ctx=t.ctx||{},this.mood="happy",this.moodHold=0,this._build(t),this._initState()}_build(t){let e=rf();this.face=new Jl(t.faceShape||{eyeDX:.146+this.rng()*.028,eyeSize:.92+this.rng()*.2,eyeY:.55+this.rng()*.03}),this.material=lf(this.color,this.face.texture,{belly:.22+this.rng()*.2}),this.limbMaterial=cf(this.color),this.root=new ue,this.root.name=`critter:${this.name}`,this.root.userData.critter=this,this.root.scale.setScalar(this.size),this.mover=new ue,this.root.add(this.mover),this.feet=[];for(let a of[1,-1]){let o=new Jt(e.foot,this.limbMaterial);o.castShadow=!0,o.position.set(a*.19,0,.16),o.userData.base=o.position.clone(),o.userData.critter=this,this.mover.add(o),this.feet.push(o)}this.squash=new ue,this.squash.position.y=gn.lift,this.mover.add(this.squash),this.bodyPivot=new ue,this.squash.add(this.bodyPivot),this.body=new Jt(e.body,this.material),this.body.castShadow=!0,this.body.receiveShadow=!0,this.body.userData.critter=this,this.bodyPivot.add(this.body),this.arms=[];let i=.4,s=Uh(i)-.02;for(let a of[1,-1]){let o=new ue;o.position.set(a*s,i,.03);let l=new Jt(e.arm,this.limbMaterial);l.castShadow=!0,l.userData.critter=this,o.add(l),o.userData.side=a,this.bodyPivot.add(o),this.arms.push(o)}this.topPivot=new ue,this.topPivot.position.set(0,gn.height-.03,.01),this.bodyPivot.add(this.topPivot),this.leafPivots=[],this._buildAccessory(e),this.hand=new ue,this.hand.position.set(0,.36,.52),this.bodyPivot.add(this.hand),this.item=null,this.itemMode=null;let r=new un({map:af(),transparent:!0,depthWrite:!1,opacity:1});this.shadow=new Jt(e.shadow,r),this.shadow.position.y=.012,this.shadow.renderOrder=1,this.shadow.userData.noAO=!0,this.root.add(this.shadow)}_buildAccessory(t){let e=new ke({color:"#76c25e",roughness:.5}),i=new ke({color:"#8fd672",roughness:.45});this.accessoryMaterials=[e,i];let s=this.accessory;if(s==="sprout"||s==="flower"){let r=new Jt(t.stem,e);r.castShadow=!0,this.topPivot.add(r);let a=new ue;if(a.position.copy(t.stemTip),this.topPivot.add(a),s==="sprout")for(let o of[1,-1]){let l=new ue;l.rotation.y=o>0?.25:Math.PI-.25;let c=new Jt(t.leaf,o>0?i:e);c.castShadow=!0,c.rotation.z=.45,l.add(c),l.userData.baseZ=.45,l.userData.side=o,a.add(l),this.leafPivots.push({pivot:l,leaf:c,side:o})}else{let o=this.rng()<.5?"#fff6ee":"#ffd0e0",l=new ke({color:o,roughness:.5}),c=new ke({color:"#ffcc4d",roughness:.6}),h=new ue;h.rotation.z=-.35;for(let g=0;g<5;g++){let y=new Jt(t.petal,l);y.rotation.y=g/5*Math.PI*2,y.rotation.z=.18,y.castShadow=!0,h.add(y)}let d=new Jt(t.flowerCenter,c);d.position.y=.008,h.add(d),a.add(h),this.flower=h,this.accessoryMaterials.push(l,c);let u=new ue;u.position.set(.01,-.1,0),u.rotation.y=Math.PI-.3;let f=new Jt(t.leaf,i);f.scale.setScalar(.75),f.rotation.z=.5,u.add(f),u.userData.baseZ=.5,a.add(u),this.leafPivots.push({pivot:u,leaf:f,side:-1})}}else if(s==="leaf"){let r=new ue;r.rotation.y=Math.PI/2+.2;let a=new Jt(t.bigLeaf,i);a.castShadow=!0,a.rotation.z=1.05,r.add(a),r.userData.baseZ=1.05,this.topPivot.add(r),this.leafPivots.push({pivot:r,leaf:a,side:1})}else if(s==="antenna"){let r=this.limbMaterial,a=new Jt(t.antennaStalk,r);a.castShadow=!0,this.topPivot.add(a);let o=new Lt(this.color).offsetHSL(.45,.1,.05),l=new ke({color:o,roughness:.3,emissive:o,emissiveIntensity:.15});this.accessoryMaterials.push(l),this.bobbleMat=l;let c=new Jt(t.bobble,l);c.position.y=.22,c.castShadow=!0,this.topPivot.add(c),this.bobble=c}}_initState(){this.time=ot(0,100),this.vel=new j,this.desiredVel=new j,this.push=new j,this.speed=0,this.prevVelFwd=0,this.prevVelSide=0,this.yaw=new mn(0,2,.72),this.yawVel=0,this.phase=0,this.walkBlend=0,this.hopBlend=0,this.gait="walk",this.sq=new mn(0,4.2,.3),this.leanX=new mn(0,2.6,.32),this.leanZ=new mn(0,2.6,.32),this.sproutX=new mn(0,2.4,.16),this.sproutZ=new mn(0,2.4,.16),this.prevTop=null,this.prevTopVel=new A,this.airY=0,this.vy=0,this.held=!1,this.falling=!1,this.heldVel=new j,this.actions=[],this.path=null,this.pathIndex=0,this.arrive=null,this.faceYaw=null,this.blinkT=ot(.5,3),this.blinkP=-1,this.doubleBlink=!1,this.look={x:0,y:0},this.lookTarget=null,this.lookUntil=0,this.glance={x:0,y:0,t:ot(1,3)},this.talkTime=0,this.pokeCount=0,this.pokeDecay=0,this.petAmount=0,this.fidgetT=ot(2,6),this.fidgetsEnabled=!0,this.stance="stand",this.seat=0,this.visible=!0,this.lastHeadingTarget=0,this.faceState=Oh(),this.flash=0,this.hover=0,this.hoverTarget=0}setContext(t){this.ctx=t}get position(){return this.root.position}get heading(){return this.yaw.x}setHeading(t,e=!1){let i=ef(this.yaw.x,t);this.yaw.target=i,e&&this.yaw.snap(i)}faceToward(t,e=!1){let i=t.x-this.root.position.x,s=t.z-this.root.position.z;i*i+s*s<1e-6||this.setHeading(Math.atan2(i,s),e)}lookAt(t,e=2){this.lookTarget=t,this.lookUntil=this.time+e}play(t,e={}){let i=hf[t];if(!i)return console.warn("unknown action",t),null;let s=i.slot||"main";for(let a of this.actions)(a.def.slot||"main")===s&&!a.stopping&&this._stopAction(a,i.blendOut??.18);let r={def:i,name:t,t:0,dur:e.duration??(typeof i.dur=="function"?i.dur(this,e):i.dur),w:0,stopping:!1,fade:0,opts:e,data:{},fired:new Set,onDone:e.onDone,at(a){return this.t>=a&&!this.fired.has(a)?(this.fired.add(a),!0):!1}};return i.start?.(this,r),this.actions.push(r),r}stop(t,e=.25){for(let i of this.actions)(!t||i.name===t)&&!i.stopping&&this._stopAction(i,e)}stopSlot(t="main",e=.2){for(let i of this.actions)(i.def.slot||"main")===t&&!i.stopping&&this._stopAction(i,e)}isPlaying(t){return this.actions.some(e=>e.name===t&&!e.stopping)}get mainAction(){for(let t=this.actions.length-1;t>=0;t--){let e=this.actions[t];if((e.def.slot||"main")==="main"&&!e.stopping)return e}return null}get busy(){let t=this.mainAction;return!!(t&&t.def.lockMove)}_stopAction(t,e){t.stopping=!0,t.fade=Math.max(.01,e),t.def.end?.(this,t)}walkPath(t,e={}){if(this.path=t&&t.length?t.map(i=>new j(i.x,i.z)):null,this.pathIndex=0,this.arrive=e.onArrive||null,this.pathSpeed=e.speed??1,this.gait=e.gait||(this.traits.energy>.82&&ei(.4)?"hop":"walk"),this.arriveFace=e.face??null,!this.path){let i=this.arrive;this.arrive=null,i?.(!0)}}stopWalking(){this.path=null,this.desiredVel.set(0,0)}get walking(){return!!this.path}say(t,e={}){let i=e.duration??Math.min(5,.6+t.length*.055);this.talkTime=i,this.ctx.onSay?.(this,t,{...e,duration:i})}showFace(t,e=3){this.faceOverride={...t,until:this.time+e}}setMood(t,e=0){this.mood=t,this.moodHold=e}hold(t,e="front"){this.drop(!0),this.item=t,this.itemMode=e,e==="overhead"?this.hand.position.set(0,gn.height+.18,.02):e==="side"?this.hand.position.set(.5,.25,.18):this.hand.position.set(0,.36,.5),this.hand.add(t);let i=t.userData.holdOffset;i&&e==="front"?t.position.set(i[0],i[1],i[2]):t.position.set(0,0,0),t.rotation.set(0,0,0)}drop(t=!1){if(!this.item)return null;let e=this.item;return this.hand.remove(e),this.item=null,this.itemMode=null,t&&Gx(e),e}poke(){if(this.pokeCount+=1,this.pokeDecay=2.2,this.flash=.35,this.ctx.sfx?.("boop",{pitch:this.voice,critter:this}),!this.held){if(this.mainAction?.name==="sleep"){this.brain?this.stop("sleep",.2):this.play("wake");return}this.pokeCount>=7?(this.pokeCount=0,this.play("grumpy")):this.pokeCount>=5?this.play("dizzy"):this.pokeCount>=3?this.play("giggle"):this.play("boop")}}update(t){t=Math.min(t,1/20),this.time+=t;let e=this.time;this.pokeDecay>0&&(this.pokeDecay-=t,this.pokeDecay<=0&&(this.pokeCount=0)),this.moodHold>0&&(this.moodHold-=t),this.talkTime=Math.max(0,this.talkTime-t),this.flash=We(this.flash,0,10,t),this.hover=We(this.hover,this.hoverTarget,10,t);let i=this._pose=this._pose||Vx();Hx(i);let s=ff[this.mood]||ff.happy,r=this.faceState;r.eyes=s.eyes,r.mouth=s.mouth,r.mouthOpen=s.mouthOpen??.4,r.blush=s.blush,r.brows=s.brows||null,r.tear=0,r.open=1,this._locomotion(t,i),this._lookAndBlink(t,r),this._idle(t,i,r);for(let o=0;o<this.actions.length;o++){let l=this.actions[o];l.t+=t,l.stopping?l.w-=t/l.fade:(l.w=Math.min(1,l.w+t/(l.def.fadeIn??.12)),l.dur&&l.t>=l.dur&&(l.stopping=!0,l.fade=l.def.fadeOut??.12,l.def.end?.(this,l),l.finished=!0)),l.w=Wt(l.w,0,1),l.def.update(this,l,i,r,t)}for(let o=this.actions.length-1;o>=0;o--){let l=this.actions[o];l.stopping&&l.w<=0&&(this.actions.splice(o,1),l.finished&&l.onDone?.(this,l))}if(this.item?.userData.update?.(t),this._capOff&&this._cap){let o=Math.max(0,this._capK-t*2.5);this.nightcap(o),o<=0&&(this._capOff=!1)}this.item&&!i.armsOverride&&(this.itemMode==="overhead"?(i.armL.z+=2.55*1,i.armR.z+=2.55*1,i.armL.f+=.15,i.armR.f+=.15):this.itemMode==="front"?(i.armL.f+=1.15,i.armR.f+=1.15,i.armL.z-=.28,i.armR.z-=.28):this.itemMode==="side"&&(i.armL.z+=.5,i.armL.f+=.4));let a=this.faceOverride;a&&this.time<a.until&&(a.eyes&&(r.eyes=a.eyes),a.mouth&&(r.mouth=a.mouth,r.mouthOpen=a.mouthOpen??.6),a.blush!==void 0&&(r.blush=a.blush),a.brows!==void 0&&(r.brows=a.brows)),this.talkTime>0&&!i.faceLocked&&(r.mouth!=="yawn"&&r.mouth!=="open"&&(r.mouth="talk"),r.mouthOpen=.5+.5*Math.sin(e*19)*Math.abs(Zl(e*6,this.seed)),i.y+=Math.abs(Math.sin(e*9.5))*.012),this._applyPose(t,i,r)}_locomotion(t,e){let i=this.root.position,s=this.desiredVel.set(0,0),r=this.busy;if(this.held)this.path=this.path?this.path:null;else if(this.path&&!r){let x=this.path[this.pathIndex],T=x.x-i.x,M=x.y-i.z,C=Math.hypot(T,M),v=this.pathIndex===this.path.length-1,w=this.walkSpeed*this.pathSpeed*(this.gait==="hop"?1.15:this.gait==="run"?1.8:1);if(C<(v?.06:.28))if(v){let P=this.arrive;this.path=null,this.arrive=null,this.arriveFace!==null&&this.arriveFace!==void 0&&this.setHeading(this.arriveFace),P?.(!0)}else this.pathIndex++;else{let P=v?Wt(C/.6,.25,1):1;s.set(T/C*w*P,M/C*w*P)}}let a=this.held?0:6.5,o=this.vel.x,l=this.vel.y;this.vel.x=We(this.vel.x,s.x,a,t),this.vel.y=We(this.vel.y,s.y,a,t),!this.held&&!this.falling&&(i.x+=(this.vel.x+this.push.x)*t,i.z+=(this.vel.y+this.push.y)*t),this.push.multiplyScalar(Math.exp(-8*t)),this.speed=this.vel.length();let c=this.yaw.x;this.speed>.08&&!this.held&&this.setHeading(Math.atan2(this.vel.x,this.vel.y)),this.yaw.update(t),this.yawVel=(this.yaw.x-c)/Math.max(t,1e-4),this.root.rotation.y=this.yaw.x,Math.abs(ql(this.yaw.target-this.lastHeadingTarget))>.9&&(this.lastHeadingTarget=this.yaw.target,this.blinkP<0&&(this.blinkP=0));let h=Math.sin(this.yaw.x),d=Math.cos(this.yaw.x),u=this.vel.x*h+this.vel.y*d,f=this.vel.x*d-this.vel.y*h,g=(u-this.prevVelFwd)/Math.max(t,1e-4),y=(f-this.prevVelSide)/Math.max(t,1e-4);this.prevVelFwd=u,this.prevVelSide=f,this.leanX.target=Wt(u*.07-g*.018,-.3,.3),this.leanZ.target=Wt(y*.012+this.yawVel*u*.03,-.25,.25);let m=this.speed>.05&&!this.held,p=!m&&Math.abs(this.yawVel)>1.2&&!this.held&&!r;this.walkBlend=We(this.walkBlend,m||p?1:0,9,t);let S=this.gait==="hop"&&m;if(this.hopBlend=We(this.hopBlend,S?1:0,7,t),m){let x=this.gait==="hop"?.5:this.gait==="run"?.3:.19;this.phase+=t*Math.PI*this.speed/x}else p&&(this.phase+=t*Math.PI*4.5);let E=this.walkBlend*(1-this.hopBlend);if(E>.001){let x=this.phase,T=Math.sin(x),M=this.gait==="run"?1.4:1;e.footL.y+=Math.max(0,T)*.08*E,e.footR.y+=Math.max(0,-T)*.08*E,e.footL.z+=Math.cos(x)*.085*E*M,e.footR.z-=Math.cos(x)*.085*E*M,e.y+=Math.abs(T)*.035*E*this.bounce,e.sq-=(1-Math.abs(T))*.03*E*this.bounce,e.tz+=T*.07*E,e.ry+=T*.06*E,e.armL.f+=T*.6*E*M,e.armR.f-=T*.6*E*M,e.armL.z+=.12*E,e.armR.z+=.12*E,e.tx+=.04*E*M}if(this.hopBlend>.001){let x=this.hopBlend*this.walkBlend,T=this.phase,M=Math.abs(Math.sin(T));e.y+=M*.2*x*this.bounce;let C=1-tf(0,.35,M);e.sq+=(M*.1-C*.14)*x,e.armL.z+=(.4+M*.9)*x,e.armR.z+=(.4+M*.9)*x,e.footL.y+=M*.03*x,e.footR.y+=M*.03*x,e.footL.z-=M*.04*x,e.footR.z-=M*.04*x;let v=this._hopContact||!1,w=M<.12;w&&!v&&x>.5&&(this.sq.impulse(-.6*this.bounce),ei(.5)&&this.ctx.fx?.("dust",this.footPos(),{count:2,size:.18}),this.ctx.sfx?.("step",{critter:this,soft:!0})),this._hopContact=w}if(E>.5&&m){let x=Math.floor(this.phase/Math.PI);x!==this._lastStep&&(this._lastStep=x,this.ctx.sfx?.("step",{critter:this}))}if(this.held)this.airY=We(this.airY,this.heldHeight??1.1,10,t);else if((this.falling||this.airY>1e-4)&&(this.vy-=18*t,this.airY+=this.vy*t,this.airY<=0)){let x=Math.abs(this.vy);this.airY=0,this.falling=!1,(x>1.2||this._bigFall)&&(this.sq.impulse(-Math.min(4,x*.55)),this.ctx.fx?.("dust",this.footPos(),{count:5,size:.3}),this.ctx.sfx?.("land",{critter:this,strength:x}),x>3&&!this._bigFall?(this.vy=x*.22,this.airY=1e-4,this.falling=!0,this._bigFall=!0):(this.play(this._bigFall&&ei(.35)?"dizzy":"land"),this._bigFall=!1)),this.falling||(this.vy=0)}}_lookAndBlink(t,e){let i=this.time;if(this.blinkT-=t,this.blinkT<=0&&this.blinkP<0&&(this.blinkP=0,this.doubleBlink=ei(.18),this.blinkT=this.blinkEvery*ot(.6,1.4)),this.blinkP>=0){this.blinkP+=t/.15;let o=this.blinkP;e.open=o<.5?1-o*2:Math.min(1,(o-.5)*2),o>=1&&(this.doubleBlink?(this.doubleBlink=!1,this.blinkP=-.25):this.blinkP=-1)}this.blinkP<0&&this.blinkP>-1&&(this.blinkP+=t/.08,this.blinkP>=0&&(this.blinkP=0),e.open=1);let s=0,r=0,a=null;if(this.lookTarget&&i<this.lookUntil?(a=this.lookTarget.isVector3?this.lookTarget:this.lookTarget.position||null,this.lookTarget.root&&(a=df.copy(this.lookTarget.root.position).setY(this.lookTarget.root.position.y+.6))):this.lookTarget=null,a){ns.copy(a).sub(this.root.position);let o=ql(Math.atan2(ns.x,ns.z)-this.yaw.x),l=Math.hypot(ns.x,ns.z),c=Math.atan2(ns.y-.6*this.size-this.airY,Math.max(.2,l));s=Wt(o/.9,-1,1),r=Wt(c/.7,-1,1),Math.abs(o)>.85&&!this.path&&!this.busy&&!this.held&&this.faceFollow!==!1&&this.setHeading(this.yaw.x+o*.85)}else this.glance.t-=t,this.glance.t<=0&&(this.glance.t=ot(.8,3.2),ei(.45)?(this.glance.x=0,this.glance.y=0):(this.glance.x=ot(-.8,.8),this.glance.y=ot(-.4,.5))),s=this.glance.x,r=this.glance.y,this.speed>.1&&(s*=.3,r=-.15);this.look.x=We(this.look.x,s,22,t),this.look.y=We(this.look.y,r,22,t),e.lookX=this.look.x,e.lookY=this.look.y}_idle(t,e,i){let s=this.time,r=this.mainAction?.name,a=r==="sleep"?0:1;if(e.sq+=Math.sin(s*2.3+this.seed)*.014*a,e.tz+=Zl(s*.35,this.seed)*.025,e.tx+=Zl(s*.28,this.seed+7)*.015,this.ctx.musicOn?.()&&!this.held&&r!=="sleep"&&r!=="dance"){let c=this.ctx.beat()*Math.PI,h=.5+this.traits.energy*.8;e.tx+=Math.abs(Math.sin(c))*.035*h,e.y+=Math.abs(Math.sin(c))*.008*h,e.sproutZ+=Math.sin(c*.5)*.15*h}if(i.blush+=this.hover*.35,this.mood==="sleepy"&&(e.droop+=.45,e.sq-=.02),this.quirkT=(this.quirkT??ot(4,10))-t,this.quirkT<=0){this.quirkT=ot(6,16);let c=sf([["cat",3],["tongue",1.2+this.traits.energy],["o",1],["smile",1]]);this.quirk={mouth:c,until:s+ot(1.2,2.6)}}let o=this.mood==="happy"||this.mood==="content"||this.mood==="curious";if(this.quirk&&s<this.quirk.until&&!r&&this.talkTime<=0&&o&&(i.mouth=this.quirk.mouth,this.quirk.mouth==="o"&&(i.mouthOpen=.12)),!this.fidgetsEnabled)return;!this.path&&!this.held&&!this.falling&&!this.mainAction&&this.speed<.05&&(this.fidgetT-=t,this.fidgetT<=0&&(this.fidgetT=ot(3,8),this.fidget()))}fidget(){let t=this.traits,e=[["lookAround",1+t.curiosity*2],["tilt",.6+t.curiosity*1.5],["hop",.3+t.energy*1.2],["scratch",.7],["hum",.6+t.chattiness],["wiggle",.5+t.energy*.8],["yawn",t.sleepiness*1.2],["stretch",.35+t.sleepiness*.5],["hiccup",.18],["sneeze",.12],["tapFoot",.3],["blinkSlow",.4]],i=0;for(let[,r]of e)i+=r;let s=Math.random()*i;for(let[r,a]of e)if(s-=a,s<=0)return this.play(r),r;return null}nightcap(t){if(!this._cap&&t<=.01)return;if(!this._cap){let s=new Lt(this.color).offsetHSL(.5,-.15,.08),r=new ke({color:s,roughness:.9}),a=new ke({color:"#fff7ec",roughness:.95}),o=new ue,l=new Jt(new Zn(.245,.06,10,32),a);l.rotation.x=Math.PI/2,o.add(l);let c=[],h=o,d=[.26,.18,.11,.05];for(let f=0;f<3;f++){let g=new ue;g.position.y=f===0?0:.16;let y=new Jt(new fn(d[f+1],d[f],.17,18,1,!0),f===1?a:r);y.position.y=.085,y.material.side=vi,g.add(y);let m=new Jt(new ci(d[f+1],14,10),f===1?a:r);m.position.y=.17,g.add(m),h.add(g),c.push(g),h=g}let u=new Jt(new ci(.055,12,10),a);u.position.y=.18,h.add(u),o.traverse(f=>f.isMesh&&(f.castShadow=!0)),o.position.set(.02,gn.height-.17,-.02),o.rotation.z=-.16,o.rotation.x=-.08,this.bodyPivot.add(o),this._cap=o,this._capSegs=c,this._capK=0}this._capK=t;let e=Math.max(.001,t);this._cap.scale.setScalar(e),this._cap.visible=t>.01;let i=.62+this.sproutZ.x*.6+Math.sin(this.time*1.3)*.04;this._capSegs.forEach((s,r)=>{r>0&&(s.rotation.z=-i*(.45+r*.4),s.rotation.x=this.sproutX.x*.3)}),this.topPivot&&(this.topPivot.visible=t<.5)}noseBubble(t){if(!this._bubble){Bh||(Bh=new ke({color:"#d6f1ff",transparent:!0,opacity:.5,roughness:.05,envMapIntensity:1.4,depthWrite:!1}),pf=new ci(1,20,14));let s=new Jt(pf,Bh);s.userData.noAO=!0,s.renderOrder=3,this.bodyPivot.add(s),this._bubble=s}let e=this._bubble,i=.085*t;e.visible=t>.02,e.scale.setScalar(Math.max(.001,i)),e.position.set(.1,.5,Uh(.5)-.03+i*.85)}footPos(t=new A){return t.copy(this.root.position).setY(this.root.position.y+.03)}headPos(t=new A,e=0){return this.root.updateWorldMatrix(!0,!1),t.set(0,gn.lift+gn.height+.12+e+this.mover.position.y,0),this.root.localToWorld(t)}facePos(t=new A,e=.55,i=.55){return this.root.updateWorldMatrix(!0,!1),t.set(0,i+this.mover.position.y,e),this.root.localToWorld(t)}_applyPose(t,e,i){let s=this.time;this.mover.position.y=this.airY+e.y+e.seat+this.seat,this.mover.rotation.x=e.rx,this.mover.rotation.z=e.rz,this.mover.rotation.y=e.spin,this.sq.target=e.sq;let r=this.sq.update(t),a=Wt(1+r,.55,1.5),o=1/Math.sqrt(a);this.squash.scale.set(o*(1+e.sx),a,o*(1+e.sx*.6)),this.leanX.update(t),this.leanZ.update(t),this.bodyPivot.rotation.set(e.tx+this.leanX.x,e.ry,e.tz+this.leanZ.x,"YXZ");for(let M of this.arms){let C=M.userData.side,v=C>0?e.armL:e.armR;M.rotation.set(-v.f,0,C*(.22+v.z),"XYZ")}for(let M=0;M<2;M++){let C=this.feet[M],v=M===0?e.footL:e.footR,w=C.userData.base;C.position.set(w.x+v.x,w.y+v.y,w.z+v.z),C.rotation.x=v.rx||0}this.topPivot.updateWorldMatrix(!0,!1);let l=ns.setFromMatrixPosition(this.topPivot.matrixWorld);this.prevTop||(this.prevTop=l.clone());let c=df.copy(l).sub(this.prevTop).divideScalar(Math.max(t,1e-4)),h=c.clone().sub(this.prevTopVel).divideScalar(Math.max(t,1e-4));this.prevTopVel.copy(c),this.prevTop.copy(l);let d=Math.sin(this.yaw.x),u=Math.cos(this.yaw.x),f=Wt(h.x*d+h.z*u,-60,60),g=Wt(h.x*u-h.z*d,-60,60),y=Wt(h.y,-80,80),m=.0045;this.sproutX.impulse(f*m*t*60*.6),this.sproutZ.impulse(-g*m*t*60*.6);let p=this.bodyPivot.rotation;this.sproutX.target=-p.x*.55+e.droop*.9+e.sproutX,this.sproutZ.target=-p.z*.55+e.sproutZ,this.sproutX.update(t),this.sproutZ.update(t),this.topPivot.rotation.set(Wt(this.sproutX.x,-1.2,1.4),0,Wt(this.sproutZ.x,-1.1,1.1));let S=Wt(-y*.004,-.5,.5);for(let M of this.leafPivots)M.pivot.rotation.z=M.pivot.userData.baseZ+S+Math.sin(s*2.2+M.side)*.04-e.droop*.5,M.leaf.rotation.x=this.sproutZ.v*.04*M.side;this.flower&&(this.flower.rotation.y+=t*(.2+Math.abs(this.sproutZ.v)*.5));let E=this.material.userData.uniforms;E.uFlash.value=this.flash*.6,E.uGlow.value=this.hover*.35;let x=Math.max(0,this.mover.position.y),T=1-Wt(x*.35,0,.55);this.shadow.scale.set(T*(1+e.sx*.5),1,T),this.shadow.material.opacity=1-Wt(x*.45,0,.65),this.shadow.rotation.y=-e.spin,i.spin=s*4,this.face.update(i)}dispose(){this.drop(!0),this.face.texture.dispose(),this.material.dispose(),this.limbMaterial.dispose(),this.shadow.material.dispose();for(let t of this.accessoryMaterials)t.dispose()}};function Vx(){return{y:0,rx:0,rz:0,tx:0,tz:0,ry:0,spin:0,sq:0,sx:0,seat:0,droop:0,sproutX:0,sproutZ:0,armL:{f:0,z:0},armR:{f:0,z:0},footL:{x:0,y:0,z:0,rx:0},footR:{x:0,y:0,z:0,rx:0},faceLocked:!1,armsOverride:!1}}function Hx(n){n.y=n.rx=n.rz=n.tx=n.tz=n.ry=n.spin=n.sq=n.sx=n.seat=n.droop=0,n.sproutX=n.sproutZ=0,n.armL.f=n.armL.z=n.armR.f=n.armR.z=0,n.footL.x=n.footL.y=n.footL.z=n.footL.rx=0,n.footR.x=n.footR.y=n.footR.z=n.footR.rx=0,n.faceLocked=!1,n.armsOverride=!1}function Gx(n){n.traverse(t=>{t.geometry&&!t.geometry.userData?.shared&&t.geometry.dispose?.()})}var _n=128,zh=new Map;function Wx(){let n=document.createElement("canvas");return n.width=n.height=_n,n}function ss(n,t,e,i="#fffaf2",s=14){n.lineJoin="round",n.lineCap="round",t(),n.strokeStyle=i,n.lineWidth=s,n.stroke(),t(),n.fillStyle=e,n.fill()}function mf(n,t,e,i){n.beginPath(),n.moveTo(t,e+i*.85),n.bezierCurveTo(t-i*1.25,e+i*.05,t-i*.95,e-i*.95,t,e-i*.38),n.bezierCurveTo(t+i*.95,e-i*.95,t+i*1.25,e+i*.05,t,e+i*.85),n.closePath()}function kh(n,t,e,i=92,s='Fredoka, "Trebuchet MS", sans-serif'){n.font=`700 ${i}px ${s}`,n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.strokeStyle="#fffaf2",n.lineWidth=16,n.strokeText(t,_n/2,_n/2+4),n.fillStyle=e,n.fillText(t,_n/2,_n/2+4)}var Vh={heart(n){ss(n,()=>mf(n,64,64,40),"#ff6b8b"),n.fillStyle="rgba(255,255,255,0.75)",n.beginPath(),n.ellipse(48,48,9,6,-.6,0,Math.PI*2),n.fill()},sparkle(n){ss(n,()=>Ea(n,64,64,50,.3),"#ffe27a","#fffaf2",10),n.fillStyle="#fff6c9",Ea(n,64,64,22,.3),n.fill()},star(n){ss(n,()=>{n.beginPath();for(let t=0;t<10;t++){let e=t/10*Math.PI*2-Math.PI/2,i=t%2===0?46:21,s=64+Math.cos(e)*i,r=66+Math.sin(e)*i;t===0?n.moveTo(s,r):n.lineTo(s,r)}n.closePath()},"#ffd24d","#fffaf2",12)},zzz(n){kh(n,"z","#8fa6e8",96)},note(n){n.lineCap="round";let t=(e,i,s)=>{n.strokeStyle=e,n.fillStyle=e,n.lineWidth=10+s,n.beginPath(),n.ellipse(44,92,18+s/2,13+s/2,-.4,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(60,88),n.lineTo(60,26),n.quadraticCurveTo(80,34,92,52),n.stroke()};t("#fffaf2","#fffaf2",12),t("#7a5cc9","#7a5cc9",0)},dust(n){let t=n.createRadialGradient(64,64,4,64,64,60);t.addColorStop(0,"rgba(255,248,236,0.95)"),t.addColorStop(.55,"rgba(244,232,214,0.75)"),t.addColorStop(1,"rgba(244,232,214,0)"),n.fillStyle=t,n.beginPath(),n.arc(64,64,60,0,Math.PI*2),n.fill()},ring(n){n.strokeStyle="#fffaf2",n.lineWidth=9,n.beginPath(),n.arc(64,64,48,0,Math.PI*2),n.stroke(),n.strokeStyle="#ffd36b",n.lineWidth=4,n.stroke()},question(n){kh(n,"?","#e98b4a",100)},exclaim(n){kh(n,"!","#ee5b5b",104)},sweat(n){ss(n,()=>{n.beginPath(),n.moveTo(64,14),n.bezierCurveTo(90,52,98,72,90,88),n.bezierCurveTo(80,112,48,112,38,88),n.bezierCurveTo(30,72,38,52,64,14),n.closePath()},"#8cd1ff"),n.fillStyle="rgba(255,255,255,0.8)",n.beginPath(),n.ellipse(52,80,6,11,.3,0,Math.PI*2),n.fill()},drop(n){n.fillStyle="#7cc6f5",n.beginPath(),n.moveTo(64,20),n.bezierCurveTo(86,56,92,72,84,88),n.bezierCurveTo(74,106,54,106,44,88),n.bezierCurveTo(36,72,42,56,64,20),n.fill()},anger(n){n.strokeStyle="#fffaf2",n.lineCap="round";let t=(e,i)=>{n.strokeStyle=e,n.lineWidth=i;for(let s=0;s<4;s++)n.save(),n.translate(64,64),n.rotate(s*Math.PI/2),n.beginPath(),n.moveTo(10,-34),n.quadraticCurveTo(12,-12,34,-10),n.stroke(),n.restore()};t("#fffaf2",24),t("#ef4f5f",11)},bulb(n){let t=n.createRadialGradient(64,54,8,64,54,62);t.addColorStop(0,"rgba(255,240,150,0.9)"),t.addColorStop(1,"rgba(255,240,150,0)"),n.fillStyle=t,n.fillRect(0,0,_n,_n),ss(n,()=>{n.beginPath(),n.arc(64,52,30,Math.PI*.8,Math.PI*2.2),n.lineTo(78,86),n.lineTo(50,86),n.closePath()},"#ffe066"),n.fillStyle="#b9a58a",n.strokeStyle="#fffaf2",n.lineWidth=8,n.beginPath(),n.roundRect(49,88,30,18,5),n.stroke(),n.fill(),n.fillStyle="rgba(255,255,255,0.85)",n.beginPath(),n.ellipse(54,42,6,10,.5,0,Math.PI*2),n.fill()},dots(n){ss(n,()=>{n.beginPath(),n.roundRect(10,30,108,60,30)},"#fffdf8","#e8dccb",6),n.fillStyle="#9a8676";for(let t=0;t<3;t++)n.beginPath(),n.arc(38+t*26,60,8,0,Math.PI*2),n.fill();n.fillStyle="#fffdf8",n.beginPath(),n.arc(28,102,9,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(16,118,5,0,Math.PI*2),n.fill()},spark(n){let t=n.createRadialGradient(64,64,2,64,64,50);t.addColorStop(0,"rgba(255,255,230,1)"),t.addColorStop(.3,"rgba(255,214,110,0.9)"),t.addColorStop(1,"rgba(255,160,60,0)"),n.fillStyle=t,n.beginPath(),n.arc(64,64,50,0,Math.PI*2),n.fill()},confetti(n){n.fillStyle="#ffffff",n.fillRect(40,26,48,76)},puff(n){let t=n.createRadialGradient(64,64,4,64,64,60);t.addColorStop(0,"rgba(255,255,255,0.95)"),t.addColorStop(.6,"rgba(250,250,255,0.6)"),t.addColorStop(1,"rgba(250,250,255,0)"),n.fillStyle=t,n.beginPath(),n.arc(64,64,60,0,Math.PI*2),n.fill()},glow(n){let t=n.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=t,n.fillRect(0,0,_n,_n)},letter(n){ss(n,()=>{n.beginPath(),n.roundRect(18,34,92,62,8)},"#fff3e0","#fffaf2",10),n.strokeStyle="#e0b48a",n.lineWidth=5,n.beginPath(),n.moveTo(22,40),n.lineTo(64,70),n.lineTo(106,40),n.stroke(),n.fillStyle="#ff6b8b",mf(n,64,72,9),n.fill()}};function Hh(n){if(zh.has(n))return zh.get(n);let t=Wx(),e=t.getContext("2d");return(Vh[n]||Vh.sparkle)(e),zh.set(n,t),t}function gf(n){return Hh(n).toDataURL()}var PS=Object.keys(Vh);var Gh=new Map;function Xx(n){if(!Gh.has(n)){let t=new Li(Hh(n));t.colorSpace=Re,Gh.set(n,t)}return Gh.get(n)}var qx=["#ff8fa8","#ffd36b","#8fd6b4","#94c4f5","#c3a6f2","#ffb27a"],Yx=["#ffffff","#ffd8e4","#d8f2ff","#e9ffd6","#fff1c9"],Ql=class{constructor(t){this.group=new ue,this.group.name="fx",this.group.userData.noAO=!0,t.add(this.group),this.pool=[],this.live=[],this.enabled=!0}setParent(t){t.add(this.group)}_get(t){let e=this.pool.pop();if(!e){let i=new Ds({transparent:!0,depthWrite:!1,depthTest:!0});e=new Ir(i),e.userData.noAO=!0,e.renderOrder=10}return e.material.map=Xx(t),e.material.color.set("#ffffff"),e.material.opacity=1,e.material.rotation=0,e.material.blending=Dn,e.material.needsUpdate=!0,e.visible=!0,this.group.add(e),e}spawnOne(t,e,i={}){let s=this._get(i.icon||t),r={s,age:0,life:i.life??1.2,pos:e.clone(),vel:i.vel?i.vel.clone():new A,grav:i.grav??0,drag:i.drag??0,size:i.size??.3,grow:i.grow??0,spin:i.spin??0,wobble:i.wobble??0,wobbleF:i.wobbleF??3,pop:i.pop??!0,fadeIn:i.fadeIn??.08,fadeOut:i.fadeOut??.35,floor:i.floor??null,follow:i.follow||null,orbit:i.orbit||null,phase:ot(0,$e),aspect:i.aspect??1,flutter:i.flutter??0,alpha:i.alpha??1};return i.color&&s.material.color.set(i.color),i.additive&&(s.material.blending=Jn),s.material.rotation=i.rotation??0,s.position.copy(r.pos),s.scale.set(.001,.001,1),this.live.push(r),r}spawn(t,e,i={}){if(!this.enabled||!e)return;let s=i.count??1;switch(t){case"heart":for(let r=0;r<s;r++)this.spawnOne("heart",e.clone().add(new A(ot(-.15,.15),0,ot(-.1,.1))),{vel:new A(ot(-.1,.1),ot(.45,.65),0),life:ot(1.3,1.7),size:i.small?.17:ot(.22,.28),wobble:.12,drag:.6});break;case"sparkle":for(let r=0;r<s;r++){let a=ot(0,$e);this.spawnOne("sparkle",e.clone().add(new A(Math.cos(a)*.2,ot(-.1,.15),Math.sin(a)*.2)),{vel:new A(Math.cos(a)*.6,ot(.4,.9),Math.sin(a)*.6),drag:3,life:ot(.6,.9),size:ot(.13,.22),spin:ot(-4,4)})}break;case"stars":{let r=i.critter;for(let a=0;a<3;a++)this.spawnOne("star",e,{life:i.duration??2.5,size:.16,follow:r,orbit:{r:.32,speed:5,phase:a/3*$e,y:0},pop:!0,fadeOut:.4});break}case"zzz":this.spawnOne("zzz",e.clone().add(new A(.15,0,0)),{vel:new A(.12,.32,.02),life:2.2,size:.16,grow:.16,wobble:.12,wobbleF:2,fadeOut:.8});break;case"note":this.spawnOne("note",e.clone().add(new A(ot(-.2,.2),0,0)),{vel:new A(ot(-.15,.15),ot(.4,.55),0),life:1.6,size:ot(.18,.24),wobble:.18,color:Si(Yx),rotation:ot(-.3,.3)});break;case"dust":for(let r=0;r<s;r++){let a=ot(0,$e),o=ot(.3,.7);this.spawnOne("dust",e.clone().add(new A(Math.cos(a)*.15,.05,Math.sin(a)*.15)),{vel:new A(Math.cos(a)*o,ot(.05,.25),Math.sin(a)*o),drag:4,life:ot(.45,.7),size:(i.size??.22)*ot(.8,1.2),grow:.35,pop:!1,fadeIn:.02})}break;case"puff":{let r=i.dir||new A(0,0,1);for(let a=0;a<s;a++)this.spawnOne("puff",e,{vel:r.clone().multiplyScalar(ot(1.2,2)).add(new A(ot(-.4,.4),ot(-.1,.4),ot(-.4,.4))),drag:4,life:ot(.5,.8),size:ot(.15,.25),grow:.4,pop:!1});break}case"pop":this.spawnOne("ring",e,{life:.35,size:.2,grow:1.6,pop:!1,fadeIn:.01,fadeOut:.25});break;case"question":case"exclaim":case"anger":this.spawnOne(t,e.clone().add(new A(t==="anger"?.25:.12,.05,0)),{vel:new A(0,.12,0),drag:1,life:1.3,size:t==="anger"?.22:.28,wobble:t==="anger"?0:.03,pulse:!0});break;case"sweat":this.spawnOne("sweat",e.clone().add(new A(.3,-.1,0)),{vel:new A(.05,-.12,0),life:1.3,size:.17,rotation:-.4});break;case"bulb":this.spawnOne("bulb",e.clone().add(new A(0,.1,0)),{vel:new A(0,.08,0),life:1.8,size:.4,fadeOut:.4});for(let r=0;r<4;r++)this.spawn("sparkle",e.clone().add(new A(0,.2,0)),{count:1});break;case"dots":this.spawnOne("dots",e.clone().add(new A(.25,.08,0)),{vel:new A(0,.04,0),life:2.3,size:.34});break;case"spark":for(let r=0;r<s;r++){let a=ot(0,$e);this.spawnOne("spark",e,{vel:new A(Math.cos(a)*ot(.5,1.4),ot(.8,1.8),Math.sin(a)*ot(.5,1.4)),grav:6,life:ot(.3,.55),size:ot(.06,.11),pop:!1,additive:!0})}break;case"drop":this.spawnOne("drop",e.clone().add(new A(ot(-.03,.03),0,ot(-.03,.03))),{vel:new A(ot(-.1,.1),ot(-.1,.2),ot(-.1,.1)),grav:7,life:.7,size:.07,pop:!1,floor:i.floor??.05});break;case"confetti":for(let r=0;r<s;r++){let a=ot(0,$e),o=ot(.6,1.8);this.spawnOne("confetti",e,{vel:new A(Math.cos(a)*o,ot(1.6,3.2),Math.sin(a)*o),grav:4.5,drag:1.4,life:ot(1.4,2.2),size:ot(.06,.09),spin:ot(-9,9),color:Si(qx),pop:!1,flutter:1,floor:.02})}break;case"steam":this.spawnOne("puff",e.clone().add(new A(ot(-.03,.03),0,ot(-.03,.03))),{vel:new A(ot(-.04,.04),ot(.22,.3),ot(-.04,.04)),life:ot(1.6,2.2),size:.07,grow:.12,pop:!1,wobble:.05,wobbleF:1.5,fadeIn:.4,fadeOut:1,alpha:.45});break;case"letter":this.spawnOne("letter",e,{vel:new A(0,.3,0),life:1.5,size:.3});break;default:this.spawnOne("sparkle",e,{life:.8,size:.2})}}update(t){let e=this.live;for(let i=e.length-1;i>=0;i--){let s=e[i];s.age+=t;let r=s.s;if(s.age>=s.life){r.visible=!1,this.group.remove(r),this.pool.push(r),e.splice(i,1);continue}let a=s.age;if(s.orbit&&s.follow){let f=s.follow.headPos(new A,0),g=s.orbit.phase+a*s.orbit.speed;s.pos.set(f.x+Math.cos(g)*s.orbit.r,f.y+s.orbit.y+Math.sin(g*2)*.03,f.z+Math.sin(g)*s.orbit.r)}else s.vel.y-=s.grav*t,s.drag&&s.vel.multiplyScalar(Math.exp(-s.drag*t)),s.pos.addScaledVector(s.vel,t),s.floor!==null&&s.pos.y<s.floor&&(s.pos.y=s.floor,s.vel.set(0,0,0),s.grav=0);let o=s.pos.x;s.wobble&&(o+=Math.sin(a*s.wobbleF*$e*.5+s.phase)*s.wobble),r.position.set(o,s.pos.y,s.pos.z);let l=s.pop?nr(Wt(a/.25)):1,c=(s.size+s.grow*a)*l,h=c;s.flutter&&(h*=Math.abs(Math.cos(a*9+s.phase))*.8+.2),r.scale.set(h,c*s.aspect,1),s.spin&&(r.material.rotation+=s.spin*t);let d=Wt(a/s.fadeIn),u=Wt((s.life-a)/s.fadeOut);r.material.opacity=d*u*s.alpha}}clear(){for(let t of this.live)t.s.visible=!1,this.group.remove(t.s),this.pool.push(t.s);this.live.length=0}};var or=new ea,_f=new j,Ra=new fi,lr=new A,tc=class{constructor({dom:t,camera:e,getCritters:i,getProps:s=()=>[],clampPos:r=null,onClickCritter:a,onClickProp:o,onClickEmpty:l,onHover:c,onDrop:h,sound:d}){this.dom=t,this.camera=e,this.getCritters=i,this.getProps=s,this.clampPos=r,this.onClickCritter=a,this.onClickProp=o,this.onClickEmpty=l,this.onHover=c,this.onDrop=h,this.sound=d,this.enabled=!0,this.pointer={x:0,y:0,down:!1,inside:!1},this.hoverCritter=null,this.hoverProp=null,this.press=null,this.drag=null,this.captured=!1,this.cursorWorld=new A,this.pet={critter:null,travel:0,lastX:0,lastY:0,idle:0,dirChanges:0,lastDx:0,active:!1},t.addEventListener("pointermove",u=>this._move(u)),t.addEventListener("pointerdown",u=>this._down(u)),window.addEventListener("pointerup",u=>this._up(u)),t.addEventListener("pointerleave",()=>{this.pointer.inside=!1,this._setHover(null,null)}),t.addEventListener("pointerenter",()=>this.pointer.inside=!0)}_ndcFrom(t){let e=this.dom.getBoundingClientRect();this.pointer.x=t.clientX-e.left,this.pointer.y=t.clientY-e.top,_f.set(this.pointer.x/e.width*2-1,-(this.pointer.y/e.height)*2+1),or.setFromCamera(_f,this.camera)}pick(){let t=this.getCritters().filter(l=>l.root.visible),e=[];for(let l of t){e.push(l.body);for(let c of l.feet)e.push(c)}let i=or.intersectObjects(e,!1),s=i.length?i[0].object.userData.critter:null;if(!s){let l=.42;for(let c of t){let h=c.root.position.clone();h.y+=.5*c.size+c.mover.position.y;let d=or.ray.distanceToPoint(h);d<l*c.size&&(l=d,s=c)}}let r=null,a=null,o=this.getProps();if(o.length){let l=or.intersectObjects(o,!0);for(let c of l){let h=c.object;for(;h&&!h.userData.interactive;)h=h.parent;if(h&&h.visible!==!1){r=h,a=c;break}}}if(s&&r&&a){let l=s.root.position.distanceTo(this.camera.position);a.distance<l-1.2?s=null:r=null}return{critter:s,prop:r}}_setHover(t,e){t!==this.hoverCritter&&(this.hoverCritter&&(this.hoverCritter.hoverTarget=0),this.hoverCritter=t,t&&(t.hoverTarget=1)),e!==this.hoverProp&&(this.hoverProp?.userData.onHover?.(!1),this.hoverProp=e,e?.userData.onHover?.(!0)),this.dom.style.cursor=this.drag?"grabbing":t?"grab":e?"pointer":"",this.onHover?.(t,e,this.pointer)}_move(t){if(!this.enabled||(this._ndcFrom(t),this.pointer.inside=!0,this.drag))return;if(this.press&&!this.drag){let r=this.pointer.x-this.press.x,a=this.pointer.y-this.press.y;this.press.critter&&Math.hypot(r,a)>7&&this._startDrag(this.press.critter);return}let{critter:e,prop:i}=this.pick();this._setHover(e,e?null:i);let s=this.pet;if(e){s.critter!==e&&(this._endPet(),s.critter=e,s.travel=0,s.dirChanges=0,s.lastX=this.pointer.x,s.lastY=this.pointer.y);let r=this.pointer.x-s.lastX,a=this.pointer.y-s.lastY;s.travel+=Math.hypot(r,a),Math.abs(r)>2&&Math.sign(r)!==Math.sign(s.lastDx||r)&&s.dirChanges++,Math.abs(r)>2&&(s.lastDx=r),s.lastX=this.pointer.x,s.lastY=this.pointer.y,s.idle=0,!s.active&&s.travel>140&&s.dirChanges>=2&&!e.held&&!e.busyWith?.("sleep")&&(s.active=!0,e.play("pet"),e.petting=!0,this.onPet?.(e));let o=e.root.position.clone();o.y+=.55*e.size,o.project(this.camera);let l=this.dom.getBoundingClientRect(),c=(o.x*.5+.5)*l.width,h=(-o.y*.5+.5)*l.height;e.petLean={x:Wt((c-this.pointer.x)/60,-1,1),y:Wt((this.pointer.y-h)/80,-1,1)}}else this._endPet()}_endPet(){let t=this.pet;t.critter&&t.active&&(t.critter.stop("pet"),t.critter.petting=!1,t.critter.setMood("content",6)),t.critter=null,t.active=!1,t.travel=0,t.dirChanges=0}_down(t){if(!this.enabled)return;this.sound?.unlock(),this._ndcFrom(t);let{critter:e,prop:i}=this.pick();if(this.captured=!!(e||i),this.press={x:this.pointer.x,y:this.pointer.y,critter:e,prop:i,t:performance.now()},e)try{this.dom.setPointerCapture(t.pointerId)}catch{}}_up(t){if(!this.press)return;let e=this.press;this.press=null,this.drag?this._endDrag():e.critter?(this._endPet(),e.critter.poke(),this.onClickCritter?.(e.critter)):e.prop?(e.prop.userData.onClick?.(e.prop),this.onClickProp?.(e.prop)):Math.hypot(this.pointer.x-e.x,this.pointer.y-e.y)<6&&this.onClickEmpty?.(e),setTimeout(()=>this.captured=!1,0)}_startDrag(t){this._endPet(),this.onDragStart?.(t),this.drag={critter:t,prev:t.root.position.clone(),height:.85},t.stopWalking(),t.held=!0,t.falling=!1,t.vy=0,t.heldHeight=this.drag.height,t.stopSlot("main",.1),t.play("held"),t.drop?.(!0),this.dom.style.cursor="grabbing"}_endDrag(){let t=this.drag.critter;this.drag=null,t.held=!1,t.falling=!0,t.vy=.5,t.stop("held",.15),this.dom.style.cursor="",this.onDrop?.(t)}update(t){if(this.drag){let e=this.drag.critter,i=this.drag.height+1*e.size;if(Ra.set(new A(0,1,0),-i),or.ray.intersectPlane(Ra,lr)){let s=lr.x,r=lr.z;this.clampPos&&([s,r]=this.clampPos(s,r,e));let a=e.root.position,o=We(a.x,s,18,t),l=We(a.z,r,18,t),c=(o-a.x)/Math.max(t,1e-4),h=(l-a.z)/Math.max(t,1e-4);a.x=o,a.z=l;let d=Math.sin(e.heading),u=Math.cos(e.heading);e.heldVel.x=We(e.heldVel.x,c*u-h*d,8,t),e.heldVel.y=We(e.heldVel.y,c*d+h*u,8,t);let f=this.camera.position;e.setHeading(Math.atan2(f.x-a.x,f.z-a.z))}}if(this.hoverCritter&&!this.drag&&this.pointer.inside){Ra.set(new A(0,0,1).applyQuaternion(this.camera.quaternion),0);let e=this.hoverCritter,i=e.root.position.clone();if(i.y+=.6,Ra.setFromNormalAndCoplanarPoint(new A(0,0,1).applyQuaternion(this.camera.quaternion),i),or.ray.intersectPlane(Ra,lr)){let s=this.camera.position.clone().sub(lr).normalize().multiplyScalar(1.5);e.lookAt(lr.clone().add(s),.6)}}this.pet.active&&(this.pet.idle+=t,this.pet.idle>.7&&this._endPet())}};var xf={cream:"#fff4e4",paper:"#fffaf0",wood:"#d79a64",woodLight:"#e8b680",woodDark:"#a8683f",walnut:"#8a5536",terracotta:"#e0805a",clay:"#d8735a",sage:"#a8c98a",leaf:"#78b85e",leafDark:"#4f9a4a",mint:"#9fdcc0",peach:"#ffb99a",blush:"#ffc4cf",rose:"#f490a8",butter:"#ffe08a",mustard:"#f2c14e",sky:"#9ccdf2",denim:"#7a9fd6",lilac:"#c7b6ee",plum:"#9a6fb0",charcoal:"#4a3c38",ink:"#3b2a25",white:"#fffdf8",metal:"#c9c3bd",brass:"#e2b866",glass:"#dff3ff"},Wh=new Map;function ii(n,t={}){let e=JSON.stringify([n,t.roughness,t.metalness,t.emissive,t.emissiveIntensity,t.transparent,t.opacity,t.side,t.flat]);if(Wh.has(e))return Wh.get(e);let i=new ke({color:new Lt(n),roughness:t.roughness??.72,metalness:t.metalness??0,emissive:t.emissive?new Lt(t.emissive):new Lt(0,0,0),emissiveIntensity:t.emissiveIntensity??1,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??$i,flatShading:!!t.flat,envMapIntensity:t.envMapIntensity??.6});return Wh.set(e,i),i}var Ca=new A;function wi(n,t,e,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ca.copy(t),Ca[i]=0,Ca.normalize();let c=.5*a/(a+o),h=1-Ca.angleTo(n)/l;return Math.sign(Ca[e])===1?h*c:o/(a+o)+c+c*(1-h)}var ec=class n extends Di{constructor(t=1,e=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new A,c=new A,h=new A(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,y=new A,m=.5/a;for(let p=0,S=0;p<d.length;p+=3,S+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/g)){case 0:y.set(1,0,0),f[S+0]=wi(y,c,"z","y",r,i),f[S+1]=1-wi(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),f[S+0]=1-wi(y,c,"z","y",r,i),f[S+1]=1-wi(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),f[S+0]=1-wi(y,c,"x","z",r,t),f[S+1]=wi(y,c,"z","x",r,i);break;case 3:y.set(0,-1,0),f[S+0]=1-wi(y,c,"x","z",r,t),f[S+1]=1-wi(y,c,"z","x",r,i);break;case 4:y.set(0,0,1),f[S+0]=1-wi(y,c,"x","y",r,t),f[S+1]=1-wi(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),f[S+0]=wi(y,c,"x","y",r,t),f[S+1]=1-wi(y,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var Xh=new Map,Pa=(n,t)=>{if(!Xh.has(n)){let e=t();e.userData.shared=!0,Xh.set(n,e)}return Xh.get(n)};function Fi(n,t,e,i=.04,s=3){return i=Math.min(i,n/2-1e-4,t/2-1e-4,e/2-1e-4),Pa(`rbox:${n}:${t}:${e}:${i}:${s}`,()=>new ec(n,t,e,s,Math.max(1e-4,i)))}function ic(n,t,e,i=24,s=!1){return Pa(`cyl:${n}:${t}:${e}:${i}:${s}`,()=>new fn(n,t,e,i,1,s))}function rs(n,t,e=.05,i=32){return Pa(`rcyl:${n}:${t}:${e}:${i}`,()=>{let s=Math.min(e,n*.5,t*.5),r=[new j(0,-t/2)],a=6;for(let o=0;o<=a;o++){let l=-Math.PI/2+o/a*(Math.PI/2);r.push(new j(n-s+Math.cos(l)*s,-t/2+s+Math.sin(l)*s))}for(let o=0;o<=a;o++){let l=o/a*(Math.PI/2);r.push(new j(n-s+Math.cos(l)*s,t/2-s+Math.sin(l)*s))}return r.push(new j(0,t/2)),new Yn(r,i)})}function vf(n,t=24,e=16){return Pa(`sphere:${n}:${t}:${e}`,()=>new ci(n,t,e))}function qh(n,t,e=12,i=32,s=Math.PI*2){return Pa(`torus:${n}:${t}:${e}:${i}:${s}`,()=>new Zn(n,t,e,i,s))}function Ie(n,t,e={}){let i=new Jt(n,t);return e.pos&&i.position.set(...e.pos),e.rot&&i.rotation.set(...e.rot),e.scale!==void 0&&(Array.isArray(e.scale)?i.scale.set(...e.scale):i.scale.setScalar(e.scale)),i.castShadow=e.cast??!0,i.receiveShadow=e.receive??!0,e.name&&(i.name=e.name),i}function xn(n={},...t){let e=new ue;n.pos&&e.position.set(...n.pos),n.rot&&e.rotation.set(...n.rot),n.scale!==void 0&&(Array.isArray(n.scale)?e.scale.set(...n.scale):e.scale.setScalar(n.scale)),n.name&&(e.name=n.name);for(let i of t)i&&e.add(i);return e}var Zx=["#e8746a","#7aa6dc","#f2c14e","#8dc68a","#c39be0","#f29bb5"],$x=["#ffe68a","#ffc2d6","#bfe8ff","#c9f2c0","#ffd6a8"];function Mf(n,t={}){switch(n){case"book":return yf(t.color);case"wateringCan":return jx();case"mug":return Qx();case"note":return tv(t.color);case"letter":return ev();case"parcel":return iv();default:return yf()}}function yf(n=Si(Zx)){return Jx(Kx(n),[0,-.13,.03])}function Jx(n,t){return n.userData.holdOffset=t,n}function Kx(n){let t=xn({}),e=ii(n,{roughness:.6}),i=ii(xf.paper,{roughness:.9}),s=xn({rot:[0,0,.18]},Ie(Fi(.2,.02,.27,.008),e,{pos:[-.1,0,0]}),Ie(Fi(.185,.03,.25,.008),i,{pos:[-.1,.018,0]})),r=xn({rot:[0,0,-.18]},Ie(Fi(.2,.02,.27,.008),e,{pos:[.1,0,0]}),Ie(Fi(.185,.03,.25,.008),i,{pos:[.1,.018,0]})),a=new ue,o=Ie(Fi(.18,.006,.24,.002),i,{pos:[.09,0,0]});a.add(o),a.position.y=.035,a.visible=!1,t.add(s,r,a),t.rotation.x=-1.05,t.position.y=.02;let l=-1;return t.userData.flip=()=>{l=0,a.visible=!0},t.onBeforeRender=()=>{},t.userData.update=c=>{l<0||(l+=c*2.2,a.rotation.z=Math.PI*Math.min(1,l)*1,l>=1&&(l=-1,a.visible=!1))},cr(t)}function jx(){let n=ii("#7cc4c9",{roughness:.4,metalness:.1}),t=xn({},Ie(rs(.12,.17,.04),n,{pos:[0,0,0]}),Ie(ic(.022,.03,.26),n,{pos:[0,.07,.15],rot:[.95,0,0]}),Ie(ic(.045,.03,.03),n,{pos:[0,.16,.26],rot:[.95,0,0]}),Ie(qh(.075,.016,8,20,Math.PI),n,{pos:[0,.09,-.02],rot:[0,Math.PI/2,0]}));return t.position.set(0,-.02,.02),cr(t)}function Qx(){let n=ii("#ffd0b5",{roughness:.5});return cr(xn({},Ie(rs(.06,.11,.015),n),Ie(qh(.035,.012,8,16),n,{pos:[.065,0,0],rot:[0,0,0]}),Ie(ic(.05,.05,.01),ii("#7b4a33",{roughness:.3}),{pos:[0,.05,0]})))}function tv(n=Si($x)){let t=xn({},Ie(Fi(.22,.22,.012,.004),ii(n,{roughness:.85})));return t.rotation.x=-.2,cr(t)}function ev(){let n=ii("#fff3e0",{roughness:.85}),t=xn({},Ie(Fi(.28,.18,.02,.006),n),Ie(vf(.025,10,8),ii("#e6455e",{roughness:.5}),{pos:[0,0,.012],scale:[1,1,.3]}));return t.rotation.x=-.25,cr(t)}function iv(){let n=xn({},Ie(Fi(.3,.24,.26,.03),ii("#d9a876",{roughness:.85})),Ie(Fi(.31,.04,.27,.01),ii("#ff8fa8",{roughness:.6}),{pos:[0,0,0]}),Ie(Fi(.04,.25,.27,.01),ii("#ff8fa8",{roughness:.6}),{pos:[0,0,0]}));return n.position.y=.1,cr(n)}function cr(n){let t=new ue;return t.add(n),t.userData.update=n.userData.update,t.userData.flip=n.userData.flip,t}var Yh=["Mochi","Pip","Tofu","Nori","Biscuit","Sprig","Dumpling","Pebble"],On=2.3;async function nv(){await document.fonts?.load?.("600 20px Fredoka").catch(()=>{});let n=document.getElementById("app"),t=new Xl(n,{fov:28}),{scene:e,camera:i}=t;t.renderer.toneMapping=Qn,t.renderer.toneMappingExposure=1,e.background=rv(["#fde7d8","#f9d9e3","#e7dcf6"]);let s=new Jr("#fff4ea","#d9b8a8",1.25);e.add(s);let r=new Ws("#fff1e0",2.4);r.position.set(-3.5,6.5,4.5),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.left=-4,r.shadow.camera.right=4,r.shadow.camera.top=4,r.shadow.camera.bottom=-4,r.shadow.camera.near=1,r.shadow.camera.far=20,r.shadow.radius=4,r.shadow.bias=-5e-4,r.shadow.normalBias=.02,e.add(r);let a=new Ws("#c9dcff",1.1);a.position.set(3,3,-5),e.add(a);let o=new ue;e.add(o);let l=Ie(rs(On,.36,.12,64),ii("#fff6ec",{roughness:.85}),{pos:[0,-.18,0]});l.castShadow=!1,o.add(l);let c=Ie(rs(On+.08,.3,.1,64),ii("#f6b8a4",{roughness:.7}),{pos:[0,-.36,0]});c.castShadow=!1,o.add(c);let h=Ie(rs(On-.2,.5,.15,64),ii("#eea08c",{roughness:.8}),{pos:[0,-.68,0]});h.castShadow=!1,o.add(h);let d=new Ql(e),u=[],f={fx:(J,ct,yt)=>d.spawn(J,ct,yt),sfx:(J,ct)=>Pe.play(J,ct),camera:i,beat:()=>Pe.beat(),musicOn:()=>Pe.musicOn&&!!Pe.ctx,makeItem:J=>Mf(J),onSay:(J,ct)=>{Pe.babble(ct,J.voice),P(J,ct)}};function g(J={}){let ct=new Aa({ctx:f,name:J.name||Yh[u.length%Yh.length],...J});return e.add(ct.root),u.push(ct),ct}let y=g({name:"Mochi",color:"#ffb18f",accessory:"sprout",seed:7,traits:{energy:.6,curiosity:.8,sociability:.8,sleepiness:.4,clumsiness:.5,chattiness:.7},faceShape:{eyeDX:.156,eyeSize:1.04,eyeY:.56}});y.setHeading(0,!0);let m={az:.35,el:.32,dist:6.2,taz:.35,tel:.32,tdist:6.2,target:new A(0,.62,0)},p=null,S=t.renderer.domElement,E=new tc({dom:S,camera:i,getCritters:()=>u,clampPos:(J,ct)=>{let yt=Math.hypot(J,ct),k=On-.45;return yt>k?[J/yt*k,ct/yt*k]:[J,ct]},onClickCritter:J=>C(J),sound:Pe});S.addEventListener("pointerdown",J=>{Pe.unlock(),!E.captured&&(p={x:J.clientX,y:J.clientY,az:m.taz,el:m.tel})}),window.addEventListener("pointermove",J=>{p&&(m.taz=p.az-(J.clientX-p.x)*.008,m.tel=Wt(p.el+(J.clientY-p.y)*.005,.02,1.2))}),window.addEventListener("pointerup",()=>p=null),S.addEventListener("wheel",J=>{J.preventDefault(),m.tdist=Wt(m.tdist*(1+Math.sign(J.deltaY)*.08),2.4,11)},{passive:!1});let x=!1;function T(J){if(J.walking||J.busy||J.held||J.falling||J._wanderWait>0)return;let ct=ot(0,$e),yt=ot(.2,On-.6);J.walkPath([{x:Math.cos(ct)*yt,z:Math.sin(ct)*yt}],{onArrive:()=>{J._wanderWait=ot(1.5,4),Math.random()<.4&&J.fidget()}})}let M=y;function C(J){M=J;for(let ct of u)ct.material.userData.uniforms.uGlow.value=0;tt()}let v=document.getElementById("bubbles"),w=new Map;function P(J,ct){let yt=w.get(J);yt||(yt=document.createElement("div"),yt.className="bubble",v.appendChild(yt),w.set(J,yt)),yt.textContent=ct,yt.classList.add("show"),clearTimeout(yt._t),yt._t=setTimeout(()=>yt.classList.remove("show"),2600+ct.length*40)}let I=document.getElementById("actions");for(let[J,ct]of Object.entries(uf)){let yt=document.createElement("section");yt.innerHTML=`<h3>${J}</h3>`;let k=document.createElement("div");k.className="btns";for(let X of ct){let et=document.createElement("button");et.textContent=sv(X),et.onclick=()=>{Pe.unlock(),Pe.play("click");let xt=M;if(["type","tinker","read","write","water","stamp","gaze","sit","sleep","dance"].includes(X)){if(xt.isPlaying(X)){xt.stop(X),et.classList.remove("on");return}xt.stopWalking(),xt.play(X,X==="sit"?{seat:0}:{}),k.querySelectorAll("button.on").forEach(ft=>ft.classList.remove("on")),et.classList.add("on")}else if(xt.stopSlot("main",.15),k.querySelectorAll("button.on").forEach(ft=>ft.classList.remove("on")),X==="trip"){let ft=xt.heading;xt.walkPath([{x:xt.position.x+Math.sin(ft)*.5,z:xt.position.z+Math.cos(ft)*.5}]),setTimeout(()=>xt.play("trip"),250)}else xt.play(X)},k.appendChild(et)}yt.appendChild(k),I.appendChild(yt)}{let J=document.createElement("section");J.innerHTML="<h3>Talk</h3>";let ct=document.createElement("div");ct.className="btns";let yt=["hi hi!","I had an idea!!","is it snack time?","mmm\u2026 cozy.","look what I made!","oh no\u2026"];for(let k of yt){let X=document.createElement("button");X.textContent=`\u201C${k}\u201D`,X.onclick=()=>{Pe.unlock(),M.say(k),M.play("talk"),setTimeout(()=>M.stop("talk"),2400)},ct.appendChild(X)}J.appendChild(ct),I.appendChild(J)}{let J=document.createElement("section");J.innerHTML="<h3>Eyes</h3>";let ct=document.createElement("div");ct.className="btns";for(let X of["normal","happy","closed","squint","wide","dot","star","heart","dizzy","sleepy","sad","angry","focus","wink"]){let et=document.createElement("button");et.textContent=X,et.onclick=()=>{Pe.unlock(),M.showFace({eyes:X},3.5)},ct.appendChild(et)}J.appendChild(ct);let yt=document.createElement("h3");yt.textContent="Mouths",J.appendChild(yt);let k=document.createElement("div");k.className="btns";for(let X of["smile","cat","o","open","grin","yawn","flat","wobble","frown","tongue","pout"]){let et=document.createElement("button");et.textContent=X,et.onclick=()=>{Pe.unlock(),M.showFace({mouth:X},3.5)},k.appendChild(et)}J.appendChild(k),I.appendChild(J)}let N=document.getElementById("look"),B=N.querySelector(".swatches");for(let J of Kl){let ct=document.createElement("button");ct.className="swatch",ct.style.background=J.color,ct.title=J.name,ct.onclick=()=>Z(M,{color:J.color}),B.appendChild(ct)}let D=N.querySelector(".accessories");for(let J of jl){let ct=document.createElement("button");ct.textContent=J,ct.onclick=()=>Z(M,{accessory:J}),D.appendChild(ct)}let z=N.querySelector(".moods");for(let J of["happy","content","excited","curious","focused","sleepy","shy","sad","grumpy"]){let ct=document.createElement("button");ct.textContent=J,ct.onclick=()=>{M.setMood(J,999),z.querySelectorAll("button").forEach(yt=>yt.classList.toggle("on",yt===ct))},z.appendChild(ct)}function Z(J,ct){let yt=u.indexOf(J),k=J.position.clone(),X=J.heading;e.remove(J.root),J.dispose();let et=new Aa({ctx:f,name:J.name,seed:J.seed,color:ct.color??J.color,accessory:ct.accessory??J.accessory,traits:J.traits,faceShape:J.face.shape,size:J.size});et.root.position.copy(k),et.setHeading(X,!0),e.add(et.root),u[yt]=et,M===J&&(M=et),et.play("hop"),Pe.play("pop"),tt()}document.getElementById("friends").onclick=()=>{if(Pe.unlock(),u.length>=5)return;let J=g({name:Yh[u.length]}),ct=ot(0,$e);J.root.position.set(Math.cos(ct)*1.4,0,Math.sin(ct)*1.4),J.airY=2.5,J.falling=!0,Pe.play("spawn"),d.spawn("sparkle",J.root.position.clone().setY(.6),{count:6})};let q=document.getElementById("wander");q.onclick=()=>{x=!x,q.classList.toggle("on",x),x||u.forEach(J=>J.stopWalking())};let rt=document.getElementById("sound");rt.onclick=()=>{Pe.unlock(),Pe.setSfx(!Pe.sfxOn),Pe.setMusic(Pe.sfxOn),rt.classList.toggle("off",!Pe.sfxOn)};let W=document.getElementById("name"),Q=document.getElementById("portrait");function tt(){W.textContent=M.name;let J=M.traits;document.getElementById("traits").innerHTML=Object.entries(J).map(([ct,yt])=>`<div class="trait"><span>${ct}</span><i style="--v:${(yt*100).toFixed(0)}%"></i></div>`).join("")}tt(),document.getElementById("hint-heart").src=gf("heart"),t.add(J=>{if(m.az=We(m.az,m.taz,8,J),m.el=We(m.el,m.tel,8,J),m.dist=We(m.dist,m.tdist,8,J),!m.lock){let et=M.position.clone();et.y=.62+M.mover.position.y*.5,m.target.lerp(et,1-Math.exp(-3*J))}let ct=i.aspect<.9,yt=m.dist*(ct?1.55/Math.max(.5,i.aspect)*.62:1),k=m.target.clone();ct&&(k.y-=.9),i.position.set(k.x+Math.sin(m.az)*Math.cos(m.el)*yt,k.y+.9*(ct?1:0)+Math.sin(m.el)*yt,k.z+Math.cos(m.az)*Math.cos(m.el)*yt),i.lookAt(k),E.update(J);for(let et of u){(x||et!==M)&&(et._wanderWait=(et._wanderWait||0)-J,(x||u.length>1)&&T(et));let xt=Math.hypot(et.position.x,et.position.z);xt>On-.4&&!et.held&&(et.position.x*=(On-.4)/xt,et.position.z*=(On-.4)/xt),et.update(J)}for(let et=0;et<u.length;et++)for(let xt=et+1;xt<u.length;xt++){let ft=u[et],Bt=u[xt],se=Bt.position.x-ft.position.x,it=Bt.position.z-ft.position.z,at=Math.hypot(se,it);if(at>.001&&at<.95&&!ft.held&&!Bt.held){let ht=(.95-at)*.5;ft.position.x-=se/at*ht,ft.position.z-=it/at*ht,Bt.position.x+=se/at*ht,Bt.position.z+=it/at*ht}}d.update(J);let X=S.getBoundingClientRect();for(let[et,xt]of w){let ft=et.headPos(new A,.25).project(i);xt.style.transform=`translate(${(ft.x*.5+.5)*X.width}px, ${(-ft.y*.5+.5)*X.height}px) translate(-50%, -100%)`}Et(J)});let Rt=0;function Et(J){Rt-=J,!(Rt>0)&&(Rt=.25,M.face.drawPortrait(Q,M.color,M.faceState))}t.start(),window.cozyStudio={engine:t,critters:u,sound:Pe,fx:d,orbit:m,get selected(){return M}},window.__step=(J=1)=>{t.stop(),t.step(1/60,J)},document.body.classList.add("ready")}function sv(n){return n.replace(/([A-Z])/g," $1").toLowerCase()}function rv(n){let t=document.createElement("canvas");t.width=4,t.height=256;let e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,256);n.forEach((r,a)=>i.addColorStop(a/(n.length-1),r)),e.fillStyle=i,e.fillRect(0,0,4,256);let s=new Li(t);return s.colorSpace=Re,s}nv().catch(n=>{console.error(n),document.body.insertAdjacentHTML("beforeend",`<pre class="fatal">${String(n&&n.stack?n.stack:n)}</pre>`)});})();
/*! For license information please see studio.js.LEGAL.txt */
