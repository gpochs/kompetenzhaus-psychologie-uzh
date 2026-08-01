(()=>{var zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},np=0,mh=1,ip=2;var fh=1,Rl=2,ii=3,ss=0,gn=1,mt=2,Gi=0,wa=1,gh=2,_h=3,vh=4,rp=5,as=100,sp=101,ap=102,op=103,lp=104,cp=200,hp=201,up=202,dp=203,pp=204,mp=205,fp=206,gp=207,_p=208,vp=209,yp=210,xp=211,bp=212,Mp=213,Ep=214,Cl=0,Il=1,Pl=2,Ta=3,Ll=4,Dl=5,Fl=6,Nl=7,Sp=0,wp=1,Tp=2,vi=0,Ap=1,Rp=2,Cp=3,Ul=4,Ip=5,Pp=6,Lp=7;var yh=300,os=301,pr=302,kl=303,Bl=304,Aa=306,zo=1e3,$r=1001,Ho=1002,Yn=1003,Dp=1004;var Ra=1005;var Zn=1006,Ol=1007;var mr=1008;var ri=1009,xh=1010,bh=1011,ls=1012,zl=1013,fr=1014,kn=1015,cs=1016,Hl=1017,Gl=1018,hs=1020,Mh=35902,Eh=35899,Fp=1021,Np=1022,Bn=1023,Ca=1026,Ia=1027,Vl=1028,Wl=1029,Up=1030,Sh=1031;var wh=1033,$l=33776,jl=33777,ql=33778,Xl=33779,Th=35840,Ah=35841,Rh=35842,Ch=35843,Ih=36196,Ph=37492,Lh=37496,Dh=37808,Fh=37809,Nh=37810,Uh=37811,kh=37812,Bh=37813,Oh=37814,zh=37815,Hh=37816,Gh=37817,Vh=37818,Wh=37819,$h=37820,jh=37821,qh=36492,Xh=36494,Kh=36495,Yh=36283,Zh=36284,Jh=36285,Qh=36286;var js=2300,Go=2301,Oo=2302,nh=2400,ih=2401,rh=2402;var kp=3201;var Bp=0,Op=1,gr="",dn="srgb",lr="srgb-linear",qs="linear",ot="srgb";var or=7680;var zp=512,Hp=513,Gp=514,eu=515,Vp=516,Wp=517,$p=518,jp=519,Vo=35044;var tu="300 es",_i=2e3,Xs=2001;var Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bd=1234567,Vr=Math.PI/180,jr=180/Math.PI;function Kn(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(jt[255&i]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[255&e]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[63&t|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[255&n]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function sh(i,e){return(i%e+e)%e}function Vs(i,e,t){return(1-t)*i+t*e}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var nu={DEG2RAD:Vr,RAD2DEG:jr,generateUUID:Kn,clamp:ke,euclideanModulo:sh,mapLinear:function(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:Vs,damp:function(i,e,t,n){return Vs(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(sh(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(bd=i);let e=bd+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*Vr},radToDeg:function(i){return i*jr},isPowerOfTwo:function(i){return!(i&i-1)&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(r){case"XYX":i.set(o*h,c*d,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*f,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*f,o*l);break;case"ZYZ":i.set(c*f,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:at,denormalize:Fn},te=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},sn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3],u=s[a+0],p=s[a+1],f=s[a+2],_=s[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=f,void(e[t+3]=_);if(d!==_||c!==u||l!==p||h!==f){let m=1-o,g=c*u+l*p+h*f+d*_,v=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){let M=Math.sqrt(y),T=Math.atan2(M,g*v);m=Math.sin(m*T)/M,o=Math.sin(o*T)/M}let x=o*v;if(c=c*m+u*x,l=l*m+p*x,h=h*m+f*x,d=d*m+_*x,m===1-o){let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],d=s[a],u=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*d+c*p-l*u,e[t+1]=c*f+h*u+l*d-o*p,e[t+2]=l*f+h*p+o*u-c*d,e[t+3]=h*f-o*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),d=o(s/2),u=c(n/2),p=c(r/2),f=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d+u*p*f;break;case"YZX":this._x=u*h*d+l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d-u*p*f;break;case"XZY":this._x=u*h*d-l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Md.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ac=new E,Md=new sn,Ne=class i{constructor(e,t,n,r,s,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],f=n[8],_=r[0],m=r[3],g=r[6],v=r[1],y=r[4],x=r[7],M=r[2],T=r[5],A=r[8];return s[0]=a*_+o*v+c*M,s[3]=a*m+o*y+c*T,s[6]=a*g+o*x+c*A,s[1]=l*_+h*v+d*M,s[4]=l*m+h*y+d*T,s[7]=l*g+h*x+d*A,s[2]=u*_+p*v+f*M,s[5]=u*m+p*y+f*T,s[8]=u*g+p*x+f*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*s,p=l*s-a*c,f=t*d+n*u+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return e[0]=d*_,e[1]=(r*l-h*n)*_,e[2]=(o*n-r*a)*_,e[3]=u*_,e[4]=(h*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Rc.makeScale(e,t)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rc=new Ne;function iu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qp(){let i=Ks("canvas");return i.style.display="block",i}var Ed={};function qr(i){i in Ed||(Ed[i]=!0,console.warn(i))}function Xp(i,e,t){return new Promise(function(n,r){setTimeout(function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}},t)})}var Sd=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wd=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function If(){let i={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===ot&&(r.r=gi(r.r),r.g=gi(r.g),r.b=gi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=Wr(r.r),r.g=Wr(r.g),r.b=Wr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?qs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[lr]:{primaries:e,whitePoint:n,transfer:qs,toXYZ:Sd,fromXYZ:wd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Sd,fromXYZ:wd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),i}var et=If();function gi(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function Wr(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var Ar,Wo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ar===void 0&&(Ar=Ks("canvas")),Ar.width=e.width,Ar.height=e.height;let r=Ar.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ar}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ks("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*gi(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*gi(t[n]/255)):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pf=0,Xr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Cc(r[a].image)):s.push(Cc(r[a]))}else s=Cc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Cc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lf=0,Ic=new E,en=class i extends Jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,c=1009,l=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Kn(),this.name="",this.source=new Xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ic).x}get height(){return this.source.getSize(Ic).y}get depth(){return this.source.getSize(Ic).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n:console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zo:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case zo:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null,en.DEFAULT_MAPPING=yh,en.DEFAULT_ANISOTROPY=1;var st=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],f=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(f+m)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,x=(p+1)/2,M=(g+1)/2,T=(h+u)/4,A=(d+_)/4,P=(f+m)/4;return y>x&&y>M?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=T/n,s=A/n):x>M?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=T/r,s=P/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=A/s,r=P/s),this.set(n,r,s,t),this}let v=Math.sqrt((m-f)*(m-f)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$o=class extends Jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new en(r);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Xr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends $o{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ys=class extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var jo=class extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bn=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(s,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lo.copy(n.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),co.subVectors(this.max,Ls),Rr.subVectors(e.a,Ls),Cr.subVectors(e.b,Ls),Ir.subVectors(e.c,Ls),Ri.subVectors(Cr,Rr),Ci.subVectors(Ir,Cr),ir.subVectors(Rr,Ir);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-ir.z,ir.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,ir.z,0,-ir.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-ir.y,ir.x,0];return!!Pc(t,Rr,Cr,Ir,co)&&(t=[1,0,0,0,1,0,0,0,1],!!Pc(t,Rr,Cr,Ir,co)&&(ho.crossVectors(Ri,Ci),t=[ho.x,ho.y,ho.z],Pc(t,Rr,Cr,Ir,co)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Pn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ui=[new E,new E,new E,new E,new E,new E,new E,new E],Pn=new E,lo=new bn,Rr=new E,Cr=new E,Ir=new E,Ri=new E,Ci=new E,ir=new E,Ls=new E,co=new E,ho=new E,rr=new E;function Pc(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){rr.fromArray(i,s);let o=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),c=e.dot(rr),l=t.dot(rr),h=n.dot(rr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Df=new bn,Ds=new E,Lc=new E,Mn=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Df.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);let t=Ds.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(Ds,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(Lc)),this.expandByPoint(Ds.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},di=new E,Dc=new E,uo=new E,Ii=new E,Fc=new E,po=new E,Nc=new E,ei=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Dc.copy(e).add(t).multiplyScalar(.5),uo.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(Dc);let s=.5*e.distanceTo(t),a=-this.direction.dot(uo),o=Ii.dot(this.direction),c=-Ii.dot(uo),l=Ii.lengthSq(),h=Math.abs(1-a*a),d,u,p,f;if(h>0)if(d=a*c-o,u=a*o-c,f=s*h,d>=0)if(u>=-f)if(u<=f){let _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-f?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=f?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Dc).addScaledVector(uo,u),p}intersectSphere(e,t){di.subVectors(e.center,this.origin);let n=di.dot(this.direction),r=di.dot(di)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>r?null:((o>n||n!=n)&&(n=o),(c<r||r!=r)&&(r=c),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,r,s){Fc.subVectors(t,e),po.subVectors(n,e),Nc.crossVectors(Fc,po);let a,o=this.direction.dot(Nc);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ii.subVectors(this.origin,e);let c=a*this.direction.dot(po.crossVectors(Ii,po));if(c<0)return null;let l=a*this.direction.dot(Fc.cross(Ii));if(l<0||c+l>o)return null;let h=-a*Ii.dot(Nc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class i{constructor(e,t,n,r,s,a,o,c,l,h,d,u,p,f,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,d,u,p,f,_,m)}set(e,t,n,r,s,a,o,c,l,h,d,u,p,f,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=p,g[7]=f,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),a=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*d,f=o*h,_=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+f*l,t[5]=u-_*l,t[9]=-o*c,t[2]=_-u*l,t[6]=f+p*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,p=c*d,f=l*h,_=l*d;t[0]=u+_*o,t[4]=f*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=_+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,p=c*d,f=l*h,_=l*d;t[0]=u-_*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,p=a*d,f=o*h,_=o*d;t[0]=c*h,t[4]=f*l-p,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,p=a*l,f=o*c,_=o*l;t[0]=c*h,t[4]=_-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+f,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*c,p=a*l,f=o*c,_=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=a*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ff,e,Nf)}lookAt(e,t,n){let r=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Pi.crossVectors(n,hn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Pi.crossVectors(n,hn)),Pi.normalize(),mo.crossVectors(hn,Pi),r[0]=Pi.x,r[4]=mo.x,r[8]=hn.x,r[1]=Pi.y,r[5]=mo.y,r[9]=hn.y,r[2]=Pi.z,r[6]=mo.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],f=n[2],_=n[6],m=n[10],g=n[14],v=n[3],y=n[7],x=n[11],M=n[15],T=r[0],A=r[4],P=r[8],L=r[12],z=r[1],G=r[5],B=r[9],J=r[13],W=r[2],Q=r[6],ee=r[10],le=r[14],re=r[3],ye=r[7],Se=r[11],be=r[15];return s[0]=a*T+o*z+c*W+l*re,s[4]=a*A+o*G+c*Q+l*ye,s[8]=a*P+o*B+c*ee+l*Se,s[12]=a*L+o*J+c*le+l*be,s[1]=h*T+d*z+u*W+p*re,s[5]=h*A+d*G+u*Q+p*ye,s[9]=h*P+d*B+u*ee+p*Se,s[13]=h*L+d*J+u*le+p*be,s[2]=f*T+_*z+m*W+g*re,s[6]=f*A+_*G+m*Q+g*ye,s[10]=f*P+_*B+m*ee+g*Se,s[14]=f*L+_*J+m*le+g*be,s[3]=v*T+y*z+x*W+M*re,s[7]=v*A+y*G+x*Q+M*ye,s[11]=v*P+y*B+x*ee+M*Se,s[15]=v*L+y*J+x*le+M*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*c*d-r*l*d-s*o*u+n*l*u+r*o*p-n*c*p)+e[7]*(+t*c*p-t*l*u+s*a*u-r*a*p+r*l*h-s*c*h)+e[11]*(+t*l*d-t*o*p-s*a*d+n*a*p+s*o*h-n*l*h)+e[15]*(-r*o*h-t*c*d+t*o*u+r*a*d-n*a*u+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],_=e[13],m=e[14],g=e[15],v=d*m*l-_*u*l+_*c*p-o*m*p-d*c*g+o*u*g,y=f*u*l-h*m*l-f*c*p+a*m*p+h*c*g-a*u*g,x=h*_*l-f*d*l+f*o*p-a*_*p-h*o*g+a*d*g,M=f*d*c-h*_*c-f*o*u+a*_*u+h*o*m-a*d*m,T=t*v+n*y+r*x+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=v*A,e[1]=(_*u*s-d*m*s-_*r*p+n*m*p+d*r*g-n*u*g)*A,e[2]=(o*m*s-_*c*s+_*r*l-n*m*l-o*r*g+n*c*g)*A,e[3]=(d*c*s-o*u*s-d*r*l+n*u*l+o*r*p-n*c*p)*A,e[4]=y*A,e[5]=(h*m*s-f*u*s+f*r*p-t*m*p-h*r*g+t*u*g)*A,e[6]=(f*c*s-a*m*s-f*r*l+t*m*l+a*r*g-t*c*g)*A,e[7]=(a*u*s-h*c*s+h*r*l-t*u*l-a*r*p+t*c*p)*A,e[8]=x*A,e[9]=(f*d*s-h*_*s-f*n*p+t*_*p+h*n*g-t*d*g)*A,e[10]=(a*_*s-f*o*s+f*n*l-t*_*l-a*n*g+t*o*g)*A,e[11]=(h*o*s-a*d*s-h*n*l+t*d*l+a*n*p-t*o*p)*A,e[12]=M*A,e[13]=(h*_*r-f*d*r+f*n*u-t*_*u-h*n*m+t*d*m)*A,e[14]=(f*o*r-a*_*r-f*n*c+t*_*c+a*n*m-t*o*m)*A,e[15]=(a*d*r-h*o*r+h*n*c-t*d*c-a*n*u+t*o*u)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,u=s*l,p=s*h,f=s*d,_=a*h,m=a*d,g=o*d,v=c*l,y=c*h,x=c*d,M=n.x,T=n.y,A=n.z;return r[0]=(1-(_+g))*M,r[1]=(p+x)*M,r[2]=(f-y)*M,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(u+g))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(f+y)*A,r[9]=(m-v)*A,r[10]=(1-(u+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Pr.set(r[0],r[1],r[2]).length(),a=Pr.set(r[4],r[5],r[6]).length(),o=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);let c=1/s,l=1/a,h=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=l,Ln.elements[5]*=l,Ln.elements[6]*=l,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),d=2*s/(n-r),u=(t+e)/(t-e),p=(n+r)/(n-r),f,_;if(c)f=s/(a-s),_=a*s/(a-s);else if(o===_i)f=-(a+s)/(a-s),_=-2*a*s/(a-s);else{if(o!==Xs)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-s),_=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-r),u=-(t+e)/(t-e),p=-(n+r)/(n-r),f,_;if(c)f=1/(a-s),_=a/(a-s);else if(o===_i)f=-2/(a-s),_=-(a+s)/(a-s);else{if(o!==Xs)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-s),_=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Pr=new E,Ln=new Ie,Ff=new E(0,0,0),Nf=new E(1,1,1),Pi=new E,mo=new E,hn=new E,Td=new Ie,Ad=new sn,an=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Td.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Td,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ad.setFromEuler(this),this.setFromQuaternion(Ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var Kr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Uf=0,Rd=new E,Lr=new sn,pi=new Ie,fo=new E,Fs=new E,kf=new E,Bf=new sn,Cd=new E(1,0,0),Id=new E(0,1,0),Pd=new E(0,0,1),Ld={type:"added"},Of={type:"removed"},Dr={type:"childadded",child:null},Uc={type:"childremoved",child:null},Ut=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new E,t=new an,n=new sn,r=new E(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Ne}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(Cd,e)}rotateY(e){return this.rotateOnAxis(Id,e)}rotateZ(e){return this.rotateOnAxis(Pd,e)}translateOnAxis(e,t){return Rd.copy(e).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cd,e)}translateY(e){return this.translateOnAxis(Id,e)}translateZ(e){return this.translateOnAxis(Pd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fo.copy(e):fo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Fs,fo,this.up):pi.lookAt(fo,Fs,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(pi),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ld),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Of),Uc.child=e,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ld),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=r,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Ut.DEFAULT_UP=new E(0,1,0),Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new E,mi=new E,kc=new E,fi=new E,Fr=new E,Nr=new E,Dd=new E,Bc=new E,Oc=new E,zc=new E,Hc=new st,Gc=new st,Vc=new st,qn=class i{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Dn.subVectors(e,t),r.cross(Dn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Dn.subVectors(r,t),mi.subVectors(n,t),kc.subVectors(e,t);let a=Dn.dot(Dn),o=Dn.dot(mi),c=Dn.dot(kc),l=mi.dot(mi),h=mi.dot(kc),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(l*c-o*h)*u,f=(a*h-o*c)*u;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fi)!==null&&fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fi.x),c.addScaledVector(a,fi.y),c.addScaledVector(o,fi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Hc.setScalar(0),Gc.setScalar(0),Vc.setScalar(0),Hc.fromBufferAttribute(e,t),Gc.fromBufferAttribute(e,n),Vc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Hc,s.x),a.addScaledVector(Gc,s.y),a.addScaledVector(Vc,s.z),a}static isFrontFacing(e,t,n,r){return Dn.subVectors(n,t),mi.subVectors(e,t),Dn.cross(mi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),.5*Dn.cross(mi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Fr.subVectors(r,n),Nr.subVectors(s,n),Bc.subVectors(e,n);let c=Fr.dot(Bc),l=Nr.dot(Bc);if(c<=0&&l<=0)return t.copy(n);Oc.subVectors(e,r);let h=Fr.dot(Oc),d=Nr.dot(Oc);if(h>=0&&d<=h)return t.copy(r);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Fr,a);zc.subVectors(e,s);let p=Fr.dot(zc),f=Nr.dot(zc);if(f>=0&&p<=f)return t.copy(s);let _=p*l-c*f;if(_<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(Nr,o);let m=h*f-p*d;if(m<=0&&d-h>=0&&p-f>=0)return Dd.subVectors(s,r),o=(d-h)/(d-h+(p-f)),t.copy(r).addScaledVector(Dd,o);let g=1/(m+_+u);return a=_*g,o=u*g,t.copy(n).addScaledVector(Fr,a).addScaledVector(Nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},go={h:0,s:0,l:0};function Wc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var de=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=et.workingColorSpace){if(e=sh(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Wc(a,s,e+1/3),this.g=Wc(a,s,e),this.b=Wc(a,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=dn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){let n=Kp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return et.workingToColorSpace(qt.copy(this),e),65536*Math.round(ke(255*qt.r,0,255))+256*Math.round(ke(255*qt.g,0,255))+Math.round(ke(255*qt.b,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(qt.copy(this),t);let n=qt.r,r=qt.g,s=qt.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=dn){et.workingToColorSpace(qt.copy(this),e);let t=qt.r,n=qt.g,r=qt.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(go);let n=Vs(Li.h,go.h,t),r=Vs(Li.s,go.s,t),s=Vs(Li.l,go.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new de;de.NAMES=Kp;var zf=0,ti=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Xt=class extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hv=Hf();function Hf(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,r[c]=24,r[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,r[c]=-l-1,r[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,r[c]=13,r[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,r[c]=24,r[256|c]=24):(n[c]=31744,n[256|c]=64512,r[c]=13,r[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var Tt=new E,_o=new te,Gf=0,Ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vo,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vo&&(e.usage=this.usage),e}};var Zs=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Js=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Te=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},Vf=0,yn=new Ie,$c=new Ut,Ur=new E,un=new bn,Ns=new bn,Nt=new E,lt=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iu(e)?Js:Zs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new E,1/0);if(e){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(un.min,Ns.min),un.expandByPoint(Nt),Nt.addVectors(un.max,Ns.max),un.expandByPoint(Nt)):(un.expandByPoint(Ns.min),un.expandByPoint(Ns.max))}un.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Nt.fromBufferAttribute(o,l),c&&(Ur.fromBufferAttribute(e,l),Nt.add(Ur)),r=Math.max(r,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new E,c[P]=new E;let l=new E,h=new E,d=new E,u=new te,p=new te,f=new te,_=new E,m=new E;function g(P,L,z){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,L),d.fromBufferAttribute(n,z),u.fromBufferAttribute(s,P),p.fromBufferAttribute(s,L),f.fromBufferAttribute(s,z),h.sub(l),d.sub(l),p.sub(u),f.sub(u);let G=1/(p.x*f.y-f.x*p.y);isFinite(G)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(d,-p.y).multiplyScalar(G),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(G),o[P].add(_),o[L].add(_),o[z].add(_),c[P].add(m),c[L].add(m),c[z].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,L=v.length;P<L;++P){let z=v[P],G=z.start;for(let B=G,J=G+z.count;B<J;B+=3)g(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let y=new E,x=new E,M=new E,T=new E;function A(P){M.fromBufferAttribute(r,P),T.copy(M);let L=o[P];y.copy(L),y.sub(M.multiplyScalar(M.dot(L))).normalize(),x.crossVectors(T,L);let z=x.dot(c[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,z)}for(let P=0,L=v.length;P<L;++P){let z=v[P],G=z.start;for(let B=G,J=G+z.count;B<J;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let r=new E,s=new E,a=new E,o=new E,c=new E,l=new E,h=new E,d=new E;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),p=0,f=0;for(let _=0,m=c.length;_<m;_++){p=o.isInterleavedBufferAttribute?c[_]*o.data.stride+o.offset:c[_]*h;for(let g=0;g<h;g++)u[f++]=l[p++]}return new Ht(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=e(r[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let u=e(l[h],n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fd=new Ie,sr=new ei,vo=new Mn,Nd=new E,yo=new E,xo=new E,bo=new E,jc=new E,Mo=new E,Ud=new E,Eo=new E,V=class extends Ut{constructor(e=new lt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Mo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(jc.fromBufferAttribute(d,e),a?Mo.addScaledVector(jc,h):Mo.addScaledVector(jc.sub(t),h))}t.add(Mo)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),sr.copy(e.ray).recast(e.near),vo.containsPoint(sr.origin)===!1&&(sr.intersectSphere(vo,Nd)===null||sr.origin.distanceToSquared(Nd)>(e.far-e.near)**2))return;Fd.copy(s).invert(),sr.copy(e.ray).applyMatrix4(Fd),n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,sr)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,_=u.length;f<_;f++){let m=u[f],g=a[m.materialIndex];for(let v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<y;v+=3)r=So(this,g,e,n,l,h,d,o.getX(v),o.getX(v+1),o.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);f<_;f+=3)r=So(this,a,e,n,l,h,d,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(c!==void 0)if(Array.isArray(a))for(let f=0,_=u.length;f<_;f++){let m=u[f],g=a[m.materialIndex];for(let v=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));v<y;v+=3)r=So(this,g,e,n,l,h,d,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);f<_;f+=3)r=So(this,a,e,n,l,h,d,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function So(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,yo),i.getVertexPosition(c,xo),i.getVertexPosition(l,bo);let h=(function(d,u,p,f,_,m,g,v){let y;if(y=u.side===1?f.intersectTriangle(g,m,_,!0,v):f.intersectTriangle(_,m,g,u.side===0,v),y===null)return null;Eo.copy(v),Eo.applyMatrix4(d.matrixWorld);let x=p.ray.origin.distanceTo(Eo);return x<p.near||x>p.far?null:{distance:x,point:Eo.clone(),object:d}})(i,e,t,n,yo,xo,bo,Ud);if(h){let d=new E;qn.getBarycoord(Ud,yo,xo,bo,d),r&&(h.uv=qn.getInterpolatedAttribute(r,o,c,l,d,new te)),s&&(h.uv1=qn.getInterpolatedAttribute(s,o,c,l,d,new te)),a&&(h.normal=qn.getInterpolatedAttribute(a,o,c,l,d,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new E,materialIndex:0};qn.getNormal(yo,xo,bo,u.normal),h.face=u,h.barycoord=d}return h}var Ve=class i extends lt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,p=0;function f(_,m,g,v,y,x,M,T,A,P,L){let z=x/A,G=M/P,B=x/2,J=M/2,W=T/2,Q=A+1,ee=P+1,le=0,re=0,ye=new E;for(let Se=0;Se<ee;Se++){let be=Se*G-J;for(let Ce=0;Ce<Q;Ce++){let ce=Ce*z-B;ye[_]=ce*v,ye[m]=be*y,ye[g]=W,l.push(ye.x,ye.y,ye.z),ye[_]=0,ye[m]=0,ye[g]=T>0?1:-1,h.push(ye.x,ye.y,ye.z),d.push(Ce/A),d.push(1-Se/P),le+=1}}for(let Se=0;Se<P;Se++)for(let be=0;be<A;be++){let Ce=u+be+Q*Se,ce=u+be+Q*(Se+1),ue=u+(be+1)+Q*(Se+1),he=u+(be+1)+Q*Se;c.push(Ce,ce,he),c.push(ce,ue,he),re+=6}o.addGroup(p,re,L),p+=re,u+=le}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,r,a,2),f("x","z","y",1,-1,e,n,-t,r,a,3),f("x","y","z",1,-1,e,t,n,r,s,4),f("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function _r(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Kt(i){let e={};for(let t=0;t<i.length;t++){let n=_r(i[t]);for(let r in n)e[r]=n[r]}return e}function ru(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Yp={clone:_r,merge:Kt},Nn=class extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Yr=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Di=new E,kd=new te,Bd=new te,zt=class extends Yr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*jr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Vr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*jr*Math.atan(Math.tan(.5*Vr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,kd,Bd),t.subVectors(Bd,kd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Vr*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},kr=-90,qo=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new zt(kr,1,e,t);r.layers=this.layers,this.add(r);let s=new zt(kr,1,e,t);s.layers=this.layers,this.add(s);let a=new zt(kr,1,e,t);a.layers=this.layers,this.add(a);let o=new zt(kr,1,e,t);o.layers=this.layers,this.add(o);let c=new zt(kr,1,e,t);c.layers=this.layers,this.add(c);let l=new zt(kr,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Xs)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Qs=class extends en{constructor(e=[],t=301,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xo=class extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Qs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ve(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new V(r,s),o=t.minFilter;return t.minFilter===mr&&(t.minFilter=Zn),new qo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Oe=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wf={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;l.inputState.pinching&&u>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ea=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new de(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ta=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ko=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vo,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qt=new E,na=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},cr=class extends ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Br,Us=new E,Or=new E,zr=new E,Hr=new te,ks=new te,Zp=new Ie,wo=new E,Bs=new E,To=new E,Od=new te,qc=new te,zd=new te,Jr=class extends Ut{constructor(e=new cr){if(super(),this.isSprite=!0,this.type="Sprite",Br===void 0){Br=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ko(t,5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute("position",new na(n,3,0,!1)),Br.setAttribute("uv",new na(n,2,3,!1))}this.geometry=Br,this.material=e,this.center=new te(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Or.setFromMatrixScale(this.matrixWorld),Zp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Or.multiplyScalar(-zr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;Ao(wo.set(-.5,-.5,0),zr,a,Or,r,s),Ao(Bs.set(.5,-.5,0),zr,a,Or,r,s),Ao(To.set(.5,.5,0),zr,a,Or,r,s),Od.set(0,0),qc.set(1,0),zd.set(1,1);let o=e.ray.intersectTriangle(wo,Bs,To,!1,Us);if(o===null&&(Ao(Bs.set(-.5,.5,0),zr,a,Or,r,s),qc.set(0,1),o=e.ray.intersectTriangle(wo,To,Bs,!1,Us),o===null))return;let c=e.ray.origin.distanceTo(Us);c<e.near||c>e.far||t.push({distance:c,point:Us.clone(),uv:qn.getInterpolation(Us,wo,Bs,To,Od,qc,zd,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ao(i,e,t,n,r,s){Hr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ks.x=s*Hr.x-r*Hr.y,ks.y=r*Hr.x+s*Hr.y):ks.copy(Hr),i.copy(e),i.x+=ks.x,i.y+=ks.y,i.applyMatrix4(Zp)}var uv=new E,dv=new E;var pv=new E,mv=new st,fv=new st,gv=new E,_v=new Ie,vv=new E,yv=new Mn,xv=new Ie,bv=new ei;var Yo=class extends en{constructor(e=null,t=1,n=1,r,s,a,o,c,l=1003,h=1003,d,u){super(null,a,o,c,l,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mv=new Ie,Ev=new Ie;var ia=class extends Ht{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gr=new Ie,Hd=new Ie,Ro=[],Gd=new bn,$f=new Ie,Os=new V,zs=new Mn,Ui=class extends V{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ia(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,$f)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gr),Gd.copy(e.boundingBox).applyMatrix4(Gr),this.boundingBox.union(Gd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gr),zs.copy(e.boundingSphere).applyMatrix4(Gr),this.boundingSphere.union(zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=r[s+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),e.ray.intersectsSphere(zs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Gr),Hd.multiplyMatrices(n,Gr),Os.matrixWorld=Hd,Os.raycast(e,Ro);for(let a=0,o=Ro.length;a<o;a++){let c=Ro[a];c.instanceId=s,c.object=this,t.push(c)}Ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ia(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yo(new Float32Array(r*this.count),r,this.count,Vl,kn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xc=new E,jf=new E,qf=new Ne,xn=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Xc.subVectors(n,t).cross(jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Xc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qf.getNormalMatrix(e),r=this.coplanarPoint(Xc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ar=new Mn,Xf=new te(.5,.5),Co=new E,ki=class{constructor(e=new xn,t=new xn,n=new xn,r=new xn,s=new xn,a=new xn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],u=s[6],p=s[7],f=s[8],_=s[9],m=s[10],g=s[11],v=s[12],y=s[13],x=s[14],M=s[15];if(r[0].setComponents(l-a,p-h,g-f,M-v).normalize(),r[1].setComponents(l+a,p+h,g+f,M+v).normalize(),r[2].setComponents(l+o,p+d,g+_,M+y).normalize(),r[3].setComponents(l-o,p-d,g-_,M-y).normalize(),n)r[4].setComponents(c,u,m,x).normalize(),r[5].setComponents(l-c,p-u,g-m,M-x).normalize();else if(r[4].setComponents(l-c,p-u,g-m,M-x).normalize(),t===_i)r[5].setComponents(l+c,p+u,g+m,M+x).normalize();else{if(t!==Xs)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(c,u,m,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);let t=Xf.distanceTo(e.center);return ar.radius=.7071067811865476+t,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Co.x=r.normal.x>0?e.max.x:e.min.x,Co.y=r.normal.y>0?e.max.y:e.min.y,Co.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$n=new Ie,jn=new ki,Zo=class i{constructor(){this.coordinateSystem=_i}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if($n.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),jn.setFromProjectionMatrix($n,r.coordinateSystem,r.reversedDepth),jn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if($n.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),jn.setFromProjectionMatrix($n,r.coordinateSystem,r.reversedDepth),jn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if($n.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),jn.setFromProjectionMatrix($n,r.coordinateSystem,r.reversedDepth),jn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if($n.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),jn.setFromProjectionMatrix($n,r.coordinateSystem,r.reversedDepth),jn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if($n.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),jn.setFromProjectionMatrix($n,r.coordinateSystem,r.reversedDepth),jn.containsPoint(e))return!0}return!1}clone(){return new i}};var ah=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},Sv=new Ie,wv=new de(1,1,1),Tv=new ki,Av=new Zo,Rv=new bn,Cv=new Mn,Iv=new E,Pv=new E,Lv=new E,Dv=new ah,Fv=new V;var Nv=new E,Uv=new E,kv=new Ie,Bv=new ei,Ov=new Mn,zv=new E,Hv=new E;var Gv=new E,Vv=new E;var Qr=class extends ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vd=new Ie,oh=new ei,Io=new Mn,Po=new E,ra=class extends Ut{constructor(e=new lt,t=new Qr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;Vd.copy(r).invert(),oh.copy(e.ray).applyMatrix4(Vd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);d<u;d++){let p=l.getX(d);Po.fromBufferAttribute(h,p),Wd(Po,p,c,r,e,t,this)}else for(let d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);d<u;d++)Po.fromBufferAttribute(h,d),Wd(Po,d,c,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wd(i,e,t,n,r,s,a){let o=oh.distanceSqToPoint(i);if(o<t){let c=new E;oh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var es=class extends en{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},sa=class extends en{constructor(e,t,n=1014,r,s,a,o=1003,c=1003,l,h=1026,d=1){if(h!==Ca&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:d},r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},aa=class extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Jo=class i extends lt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,d=Math.PI/2*e,u=t,p=2*d+u,f=2*n+s,_=r+1,m=new E,g=new E;for(let v=0;v<=f;v++){let y=0,x=0,M=0,T=0;if(v<=n){let L=v/n,z=L*Math.PI/2;x=-h-e*Math.cos(z),M=e*Math.sin(z),T=-e*Math.cos(z),y=L*d}else if(v<=n+s){let L=(v-n)/s;x=L*t-h,M=e,T=0,y=d+L*u}else{let L=(v-n-s)/n,z=L*Math.PI/2;x=h+e*Math.sin(z),M=e*Math.cos(z),T=e*Math.sin(z),y=d+u+L*d}let A=Math.max(0,Math.min(1,y/p)),P=0;v===0?P=.5/r:v===f&&(P=-.5/r);for(let L=0;L<=r;L++){let z=L/r,G=z*Math.PI*2,B=Math.sin(G),J=Math.cos(G);g.x=-M*J,g.y=x,g.z=M*B,o.push(g.x,g.y,g.z),m.set(-M*J,T,M*B),m.normalize(),c.push(m.x,m.y,m.z),l.push(z+P,A)}if(v>0){let L=(v-1)*_;for(let z=0;z<r;z++){let G=L+z,B=L+z+1,J=v*_+z,W=v*_+z+1;a.push(G,B,J),a.push(B,W,J)}}}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ni=class i extends lt{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new E,h=new te;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$e=class i extends lt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],u=[],p=[],f=0,_=[],m=n/2,g=0;function v(y){let x=f,M=new te,T=new E,A=0,P=y===!0?e:t,L=y===!0?1:-1;for(let G=1;G<=r;G++)d.push(0,m*L,0),u.push(0,L,0),p.push(.5,.5),f++;let z=f;for(let G=0;G<=r;G++){let B=G/r*c+o,J=Math.cos(B),W=Math.sin(B);T.x=P*W,T.y=m*L,T.z=P*J,d.push(T.x,T.y,T.z),u.push(0,L,0),M.x=.5*J+.5,M.y=.5*W*L+.5,p.push(M.x,M.y),f++}for(let G=0;G<r;G++){let B=x+G,J=z+G;y===!0?h.push(J,J+1,B):h.push(J+1,J,B),A+=3}l.addGroup(g,A,y===!0?1:2),g+=A}(function(){let y=new E,x=new E,M=0,T=(t-e)/n;for(let A=0;A<=s;A++){let P=[],L=A/s,z=L*(t-e)+e;for(let G=0;G<=r;G++){let B=G/r,J=B*c+o,W=Math.sin(J),Q=Math.cos(J);x.x=z*W,x.y=-L*n+m,x.z=z*Q,d.push(x.x,x.y,x.z),y.set(W,T,Q).normalize(),u.push(y.x,y.y,y.z),p.push(B,1-L),P.push(f++)}_.push(P)}for(let A=0;A<r;A++)for(let P=0;P<s;P++){let L=_[P][A],z=_[P+1][A],G=_[P+1][A+1],B=_[P][A+1];(e>0||P!==0)&&(h.push(L,z,B),M+=3),(t>0||P!==s-1)&&(h.push(z,G,B),M+=3)}l.addGroup(g,M,0),g+=M})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Un=class i extends $e{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bi=class i extends lt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(p,f,_,m){let g=m+1,v=[];for(let y=0;y<=g;y++){v[y]=[];let x=p.clone().lerp(_,y/g),M=f.clone().lerp(_,y/g),T=g-y;for(let A=0;A<=T;A++)v[y][A]=A===0&&y===g?x:x.clone().lerp(M,A/T)}for(let y=0;y<g;y++)for(let x=0;x<2*(g-y)-1;x++){let M=Math.floor(x/2);x%2==0?(c(v[y][M+1]),c(v[y+1][M]),c(v[y][M])):(c(v[y][M+1]),c(v[y+1][M+1]),c(v[y+1][M]))}}function c(p){s.push(p.x,p.y,p.z)}function l(p,f){let _=3*p;f.x=e[_+0],f.y=e[_+1],f.z=e[_+2]}function h(p,f,_,m){m<0&&p.x===1&&(a[f]=p.x-1),_.x===0&&_.z===0&&(a[f]=m/2/Math.PI+.5)}function d(p){return Math.atan2(p.z,-p.x)}function u(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new E,_=new E,m=new E;for(let g=0;g<t.length;g+=3)l(t[g+0],f),l(t[g+1],_),l(t[g+2],m),o(f,_,m,p)})(r),(function(p){let f=new E;for(let _=0;_<s.length;_+=3)f.x=s[_+0],f.y=s[_+1],f.z=s[_+2],f.normalize().multiplyScalar(p),s[_+0]=f.x,s[_+1]=f.y,s[_+2]=f.z})(n),(function(){let p=new E;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let _=d(p)/2/Math.PI+.5,m=u(p)/Math.PI+.5;a.push(_,1-m)}(function(){let f=new E,_=new E,m=new E,g=new E,v=new te,y=new te,x=new te;for(let M=0,T=0;M<s.length;M+=9,T+=6){f.set(s[M+0],s[M+1],s[M+2]),_.set(s[M+3],s[M+4],s[M+5]),m.set(s[M+6],s[M+7],s[M+8]),v.set(a[T+0],a[T+1]),y.set(a[T+2],a[T+3]),x.set(a[T+4],a[T+5]),g.copy(f).add(_).add(m).divideScalar(3);let A=d(g);h(v,T+0,f,A),h(y,T+2,_,A),h(x,T+4,m,A)}})(),(function(){for(let f=0;f<a.length;f+=6){let _=a[f+0],m=a[f+2],g=a[f+4],v=Math.max(_,m,g),y=Math.min(_,m,g);v>.9&&y<.1&&(_<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(s.slice(),3)),this.setAttribute("uv",new Te(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Qo=class i extends Bi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Lo=new E,Do=new E,Kc=new E,Fo=new qn,el=class extends lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Vr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:_,b:m,c:g}=Fo;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),g.fromBufferAttribute(o,l[2]),Fo.getNormal(Kc),d[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let v=0;v<3;v++){let y=(v+1)%3,x=d[v],M=d[y],T=Fo[h[v]],A=Fo[h[y]],P=`${x}_${M}`,L=`${M}_${x}`;L in u&&u[L]?(Kc.dot(u[L].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(A.x,A.y,A.z)),u[L]=null):P in u||(u[P]={index0:l[v],index1:l[y],normal:Kc.clone()})}}for(let f in u)if(u[f]){let{index0:_,index1:m}=u[f];Lo.fromBufferAttribute(o,_),Do.fromBufferAttribute(o,m),p.push(Lo.x,Lo.y,Lo.z),p.push(Do.x,Do.y,Do.z)}this.setAttribute("position",new Te(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(r=Math.floor(c+(l-c)/2),o=n[r]-a,o<0)c=r+1;else{if(!(o>0)){l=r;break}l=r-1}if(r=l,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new te:new E);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new E,r=[],s=[],a=[],o=new E,c=new Ie;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new E)}s[0]=new E,a[0]=new E;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(ke(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ke(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ts=class extends mn{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new te){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},tl=class extends ts{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function su(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,d){let u=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,p*=h,r(a,o,u,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var No=new E,Yc=new su,Zc=new su,Jc=new su,nl=class extends mn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new E){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=r[(l-1)%s]:(No.subVectors(r[0],r[1]).add(r[0]),o=No);let d=r[l%s],u=r[(l+1)%s];if(this.closed||l+2<s?c=r[(l+2)%s]:(No.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=No),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(c),p);_<1e-4&&(_=1),f<1e-4&&(f=_),m<1e-4&&(m=_),Yc.initNonuniformCatmullRom(o.x,d.x,u.x,c.x,f,_,m),Zc.initNonuniformCatmullRom(o.y,d.y,u.y,c.y,f,_,m),Jc.initNonuniformCatmullRom(o.z,d.z,u.z,c.z,f,_,m)}else this.curveType==="catmullrom"&&(Yc.initCatmullRom(o.x,d.x,u.x,c.x,this.tension),Zc.initCatmullRom(o.y,d.y,u.y,c.y,this.tension),Jc.initCatmullRom(o.z,d.z,u.z,c.z,this.tension));return n.set(Yc.calc(h),Zc.calc(h),Jc.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new E().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $d(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function Ws(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function $s(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var oa=class extends mn{constructor(e=new te,t=new te,n=new te,r=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new te){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set($s(e,r.x,s.x,a.x,o.x),$s(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},il=class extends mn{constructor(e=new E,t=new E,n=new E,r=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new E){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set($s(e,r.x,s.x,a.x,o.x),$s(e,r.y,s.y,a.y,o.y),$s(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},la=class extends mn{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rl=class extends mn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=class extends mn{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ws(e,r.x,s.x,a.x),Ws(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends mn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ws(e,r.x,s.x,a.x),Ws(e,r.y,s.y,a.y),Ws(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set($d(o,c.x,l.x,h.x,d.x),$d(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new te().fromArray(r))}return this}},sl=Object.freeze({__proto__:null,ArcCurve:tl,CatmullRomCurve3:nl,CubicBezierCurve:oa,CubicBezierCurve3:il,EllipseCurve:ts,LineCurve:la,LineCurve3:rl,QuadraticBezierCurve:ca,QuadraticBezierCurve3:ha,SplineCurve:ua}),al=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new sl[r.type]().fromJSON(r))}return this}},da=class extends al{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new la(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new ca(this.currentPoint.clone(),new te(e,t),new te(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new oa(this.currentPoint.clone(),new te(e,t),new te(n,r),new te(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ua(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){let l=new ts(e,t,n,r,s,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},pa=class extends da{constructor(e){super(e),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new da().fromJSON(r))}return this}};function Kf(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=jd(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=(function(h,d,u,p){let f=[];for(let _=0,m=d.length;_<m;_++){let g=jd(h,d[_]*p,_<m-1?d[_+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),f.push(ig(g))}f.sort(eg);for(let _=0;_<f.length;_++)u=tg(f[_],u);return u})(i,e,s,t)),i.length>80*t){o=1/0,c=1/0;let h=-1/0,d=-1/0;for(let u=t;u<r;u+=t){let p=i[u],f=i[u+1];p<o&&(o=p),f<c&&(c=f),p>h&&(h=p),f>d&&(d=f)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return ma(s,a,t,o,c,l,0),a}function jd(i,e,t,n,r){let s;if(r===(function(a,o,c,l){let h=0;for(let d=o,u=c-l;d<c;d+=l)h+=(a[u]-a[d])*(a[d+1]+a[u+1]),u=d;return h})(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=qd(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=qd(a/n|0,i[a],i[a+1],s);return s&&ns(s,s.next)&&(ga(s),s=s.next),s}function hr(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!ns(n,n.next)&&_t(n.prev,n,n.next)!==0)n=n.next;else{if(ga(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function ma(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(c,l,h,d){let u=c;do u.z===0&&(u.z=lh(u.x,u.y,l,h,d)),u.prevZ=u.prev,u.nextZ=u.next,u=u.next;while(u!==c);u.prevZ.nextZ=null,u.prevZ=null,(function(p){let f,_=1;do{let m,g=p;p=null;let v=null;for(f=0;g;){f++;let y=g,x=0;for(let T=0;T<_&&(x++,y=y.nextZ,y);T++);let M=_;for(;x>0||M>0&&y;)x!==0&&(M===0||!y||g.z<=y.z)?(m=g,g=g.nextZ,x--):(m=y,y=y.nextZ,M--),v?v.nextZ=m:p=m,m.prevZ=v,v=m;g=y}v.nextZ=null,_*=2}while(f>1)})(u)})(i,n,r,s);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(s?Zf(i,n,r,s):Yf(i))e.push(c.i,i.i,l.i),ga(i),i=l.next,o=l.next;else if((i=l)===o){a?a===1?ma(i=Jf(hr(i),e),e,t,n,r,s,2):a===2&&Qf(i,e,t,n,r,s):ma(hr(i),e,t,n,r,s,1);break}}}function Yf(i){let e=i.prev,t=i,n=i.next;if(_t(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(r,s,a),d=Math.min(o,c,l),u=Math.max(r,s,a),p=Math.max(o,c,l),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&Gs(r,o,s,c,a,l,f.x,f.y)&&_t(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Zf(i,e,t,n){let r=i.prev,s=i,a=i.next;if(_t(r,s,a)>=0)return!1;let o=r.x,c=s.x,l=a.x,h=r.y,d=s.y,u=a.y,p=Math.min(o,c,l),f=Math.min(h,d,u),_=Math.max(o,c,l),m=Math.max(h,d,u),g=lh(p,f,e,t,n),v=lh(_,m,e,t,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=g&&x&&x.z<=v;){if(y.x>=p&&y.x<=_&&y.y>=f&&y.y<=m&&y!==r&&y!==a&&Gs(o,h,c,d,l,u,y.x,y.y)&&_t(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=_&&x.y>=f&&x.y<=m&&x!==r&&x!==a&&Gs(o,h,c,d,l,u,x.x,x.y)&&_t(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=g;){if(y.x>=p&&y.x<=_&&y.y>=f&&y.y<=m&&y!==r&&y!==a&&Gs(o,h,c,d,l,u,y.x,y.y)&&_t(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=_&&x.y>=f&&x.y<=m&&x!==r&&x!==a&&Gs(o,h,c,d,l,u,x.x,x.y)&&_t(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Jf(i,e){let t=i;do{let n=t.prev,r=t.next.next;!ns(n,r)&&Qp(n,t,t.next,r)&&fa(n,r)&&fa(r,n)&&(e.push(n.i,t.i,r.i),ga(t),ga(t.next),t=i=r),t=t.next}while(t!==i);return hr(t)}function Qf(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&rg(a,o)){let c=em(a,o);return a=hr(a,a.next),c=hr(c,c.next),ma(a,e,t,n,r,s,0),void ma(c,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function eg(i,e){let t=i.x-e.x;return t===0&&(t=i.y-e.y,t===0)&&(t=(i.next.y-i.y)/(i.next.x-i.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function tg(i,e){let t=(function(r,s){let a=s,o=r.x,c=r.y,l,h=-1/0;if(ns(r,a))return a;do{if(ns(r,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let _=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(_<=o&&_>h&&(h=_,l=a.x<a.next.x?a:a.next,_===o))return l}a=a.next}while(a!==s);if(!l)return null;let d=l,u=l.x,p=l.y,f=1/0;a=l;do{if(o>=a.x&&a.x>=u&&o!==a.x&&Jp(c<p?o:h,c,u,p,c<p?h:o,c,a.x,a.y)){let _=Math.abs(c-a.y)/(o-a.x);fa(a,r)&&(_<f||_===f&&(a.x>l.x||a.x===l.x&&ng(l,a)))&&(l=a,f=_)}a=a.next}while(a!==d);return l})(i,e);if(!t)return e;let n=em(t,i);return hr(n,n.next),hr(t,t.next)}function ng(i,e){return _t(i.prev,i,e.prev)<0&&_t(e.next,i,i.next)<0}function lh(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function ig(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Jp(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Gs(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&Jp(i,e,t,n,r,s,a,o)}function rg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&Qp(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(fa(i,e)&&fa(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(_t(i.prev,i,e.prev)||_t(i,e.prev,e))||ns(i,e)&&_t(i.prev,i,i.next)>0&&_t(e.prev,e,e.next)>0)}function _t(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ns(i,e){return i.x===e.x&&i.y===e.y}function Qp(i,e,t,n){let r=ko(_t(i,e,t)),s=ko(_t(i,e,n)),a=ko(_t(t,n,i)),o=ko(_t(t,n,e));return r!==s&&a!==o||!(r!==0||!Uo(i,t,e))||!(s!==0||!Uo(i,n,e))||!(a!==0||!Uo(t,i,n))||!(o!==0||!Uo(t,e,n))}function Uo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ko(i){return i>0?1:i<0?-1:0}function fa(i,e){return _t(i.prev,i,i.next)<0?_t(i,e,i.next)>=0&&_t(i,i.prev,e)>=0:_t(i,e,i.prev)<0||_t(i,i.next,e)<0}function em(i,e){let t=ch(i.i,i.x,i.y),n=ch(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function qd(i,e,t,n){let r=ch(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ga(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ch(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var hh=class{static triangulate(e,t,n=2){return Kf(e,t,n)}},Xn=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Xd(e),Kd(n,e);let a=e.length;t.forEach(Xd);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Kd(n,t[c]);let o=hh.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Xd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Kd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ol=class i extends lt{constructor(e=new pa([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:sg,y,x,M,T,A,P=!1;g&&(y=g.getSpacedPoints(h),P=!0,u=!1,x=g.computeFrenetFrames(h,!1),M=new E,T=new E,A=new E),u||(m=0,p=0,f=0,_=0);let L=o.extractPoints(l),z=L.shape,G=L.holes;if(!Xn.isClockWise(z)){z=z.reverse();for(let N=0,b=G.length;N<b;N++){let C=G[N];Xn.isClockWise(C)&&(G[N]=C.reverse())}}function B(N){let b=10000000000000001e-36,C=N[0];for(let k=1;k<=N.length;k++){let F=k%N.length,K=N[F],H=K.x-C.x,$=K.y-C.y,ae=H*H+$*$,me=Math.max(Math.abs(K.x),Math.abs(K.y),Math.abs(C.x),Math.abs(C.y));ae<=b*me*me?(N.splice(F,1),k--):C=K}}B(z),G.forEach(B);let J=G.length,W=z;for(let N=0;N<J;N++){let b=G[N];z=z.concat(b)}function Q(N,b,C){return b||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(b,C)}let ee=z.length;function le(N,b,C){let k,F,K,H=N.x-b.x,$=N.y-b.y,ae=C.x-N.x,me=C.y-N.y,oe=H*H+$*$,_e=H*me-$*ae;if(Math.abs(_e)>Number.EPSILON){let Me=Math.sqrt(oe),we=Math.sqrt(ae*ae+me*me),je=b.x-$/Me,tt=b.y+H/Me,nt=((C.x-me/we-je)*me-(C.y+ae/we-tt)*ae)/(H*me-$*ae);k=je+H*nt-N.x,F=tt+$*nt-N.y;let fe=k*k+F*F;if(fe<=2)return new te(k,F);K=Math.sqrt(fe/2)}else{let Me=!1;H>Number.EPSILON?ae>Number.EPSILON&&(Me=!0):H<-Number.EPSILON?ae<-Number.EPSILON&&(Me=!0):Math.sign($)===Math.sign(me)&&(Me=!0),Me?(k=-$,F=H,K=Math.sqrt(oe)):(k=H,F=$,K=Math.sqrt(oe/2))}return new te(k/K,F/K)}let re=[];for(let N=0,b=W.length,C=b-1,k=N+1;N<b;N++,C++,k++)C===b&&(C=0),k===b&&(k=0),re[N]=le(W[N],W[C],W[k]);let ye=[],Se,be,Ce=re.concat();for(let N=0,b=J;N<b;N++){let C=G[N];Se=[];for(let k=0,F=C.length,K=F-1,H=k+1;k<F;k++,K++,H++)K===F&&(K=0),H===F&&(H=0),Se[k]=le(C[k],C[K],C[H]);ye.push(Se),Ce=Ce.concat(Se)}if(m===0)be=Xn.triangulateShape(W,G);else{let N=[],b=[];for(let C=0;C<m;C++){let k=C/m,F=p*Math.cos(k*Math.PI/2),K=f*Math.sin(k*Math.PI/2)+_;for(let H=0,$=W.length;H<$;H++){let ae=Q(W[H],re[H],K);Ae(ae.x,ae.y,-F),k===0&&N.push(ae)}for(let H=0,$=J;H<$;H++){let ae=G[H];Se=ye[H];let me=[];for(let oe=0,_e=ae.length;oe<_e;oe++){let Me=Q(ae[oe],Se[oe],K);Ae(Me.x,Me.y,-F),k===0&&me.push(Me)}k===0&&b.push(me)}}be=Xn.triangulateShape(N,b)}let ce=be.length,ue=f+_;for(let N=0;N<ee;N++){let b=u?Q(z[N],Ce[N],ue):z[N];P?(T.copy(x.normals[0]).multiplyScalar(b.x),M.copy(x.binormals[0]).multiplyScalar(b.y),A.copy(y[0]).add(T).add(M),Ae(A.x,A.y,A.z)):Ae(b.x,b.y,0)}for(let N=1;N<=h;N++)for(let b=0;b<ee;b++){let C=u?Q(z[b],Ce[b],ue):z[b];P?(T.copy(x.normals[N]).multiplyScalar(C.x),M.copy(x.binormals[N]).multiplyScalar(C.y),A.copy(y[N]).add(T).add(M),Ae(A.x,A.y,A.z)):Ae(C.x,C.y,d/h*N)}for(let N=m-1;N>=0;N--){let b=N/m,C=p*Math.cos(b*Math.PI/2),k=f*Math.sin(b*Math.PI/2)+_;for(let F=0,K=W.length;F<K;F++){let H=Q(W[F],re[F],k);Ae(H.x,H.y,d+C)}for(let F=0,K=G.length;F<K;F++){let H=G[F];Se=ye[F];for(let $=0,ae=H.length;$<ae;$++){let me=Q(H[$],Se[$],k);P?Ae(me.x,me.y+y[h-1].y,y[h-1].x+C):Ae(me.x,me.y,d+C)}}}function he(N,b){let C=N.length;for(;--C>=0;){let k=C,F=C-1;F<0&&(F=N.length-1);for(let K=0,H=h+2*m;K<H;K++){let $=ee*K,ae=ee*(K+1);w(b+k+$,b+F+$,b+F+ae,b+k+ae)}}}function Ae(N,b,C){c.push(N),c.push(b),c.push(C)}function Ue(N,b,C){S(N),S(b),S(C);let k=r.length/3,F=v.generateTopUV(n,r,k-3,k-2,k-1);O(F[0]),O(F[1]),O(F[2])}function w(N,b,C,k){S(N),S(b),S(k),S(b),S(C),S(k);let F=r.length/3,K=v.generateSideWallUV(n,r,F-6,F-3,F-2,F-1);O(K[0]),O(K[1]),O(K[3]),O(K[1]),O(K[2]),O(K[3])}function S(N){r.push(c[3*N+0]),r.push(c[3*N+1]),r.push(c[3*N+2])}function O(N){s.push(N.x),s.push(N.y)}(function(){let N=r.length/3;if(u){let b=0,C=ee*b;for(let k=0;k<ce;k++){let F=be[k];Ue(F[2]+C,F[1]+C,F[0]+C)}b=h+2*m,C=ee*b;for(let k=0;k<ce;k++){let F=be[k];Ue(F[0]+C,F[1]+C,F[2]+C)}}else{for(let b=0;b<ce;b++){let C=be[b];Ue(C[2],C[1],C[0])}for(let b=0;b<ce;b++){let C=be[b];Ue(C[0]+ee*h,C[1]+ee*h,C[2]+ee*h)}}n.addGroup(N,r.length/3-N,0)})(),(function(){let N=r.length/3,b=0;he(W,b),b+=W.length;for(let C=0,k=G.length;C<k;C++){let F=G[C];he(F,b),b+=F.length}n.addGroup(N,r.length/3-N,1)})()}this.setAttribute("position",new Te(r,3)),this.setAttribute("uv",new Te(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new sl[r.type]().fromJSON(r)),new i(n,e.options)}},sg={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*r],h=e[3*r+1];return[new te(s,a),new te(o,c),new te(l,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],d=e[3*n+2],u=e[3*r],p=e[3*r+1],f=e[3*r+2],_=e[3*s],m=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new te(a,1-c),new te(l,1-d),new te(u,1-f),new te(_,1-g)]:[new te(o,1-c),new te(h,1-d),new te(p,1-f),new te(m,1-g)]}},At=class i extends Bi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ll=class i extends lt{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ke(r,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,d=new E,u=new te,p=new E,f=new E,_=new E,m=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-m,p.z=0*g,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-m,p.z=0*g,f.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(f)}for(let v=0;v<=t;v++){let y=n+v*h*r,x=Math.sin(y),M=Math.cos(y);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*x,d.y=e[T].y,d.z=e[T].x*M,a.push(d.x,d.y,d.z),u.x=v/t,u.y=T/(e.length-1),o.push(u.x,u.y);let A=c[3*T+0]*x,P=c[3*T+1],L=c[3*T+0]*M;l.push(A,P,L)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let x=y+v*e.length,M=x,T=x+e.length,A=x+e.length+1,P=x+1;s.push(M,T,P),s.push(A,P,T)}this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("uv",new Te(o,2)),this.setAttribute("normal",new Te(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Oi=class i extends Bi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Je=class i extends lt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,d=e/o,u=t/c,p=[],f=[],_=[],m=[];for(let g=0;g<h;g++){let v=g*u-a;for(let y=0;y<l;y++){let x=y*d-s;f.push(x,-v,0),_.push(0,0,1),m.push(y/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){let y=v+l*g,x=v+l*(g+1),M=v+1+l*(g+1),T=v+1+l*g;p.push(y,x,T),p.push(x,M,T)}this.setIndex(p),this.setAttribute("position",new Te(f,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ur=class i extends lt{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],d=e,u=(t-e)/(r=Math.max(1,r)),p=new E,f=new te;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){let g=s+m/n*a;p.x=d*Math.cos(g),p.y=d*Math.sin(g),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let _=0;_<r;_++){let m=_*(n+1);for(let g=0;g<n;g++){let v=g+m,y=v,x=v+n+1,M=v+n+2,T=v+1;o.push(y,x,T),o.push(x,M,T)}}this.setIndex(o),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},cl=class i extends lt{constructor(e=new pa([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let d=r.length/3,u=h.extractPoints(t),p=u.shape,f=u.holes;Xn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let v=f[m];Xn.isClockWise(v)===!0&&(f[m]=v.reverse())}let _=Xn.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let v=f[m];p=p.concat(v)}for(let m=0,g=p.length;m<g;m++){let v=p[m];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,g=_.length;m<g;m++){let v=_[m],y=v[0]+d,x=v[1]+d,M=v[2]+d;n.push(y,x,M),c+=3}}this.setIndex(n),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(s,3)),this.setAttribute("uv",new Te(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},fn=class i extends lt{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new E,u=new E,p=[],f=[],_=[],m=[];for(let g=0;g<=n;g++){let v=[],y=g/n,x=0;g===0&&a===0?x=.5/t:g===n&&c===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){let T=M/t;d.x=-e*Math.cos(r+T*s)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(r+T*s)*Math.sin(a+y*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(T+x,1-y),v.push(l++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let y=h[g][v+1],x=h[g][v],M=h[g+1][v],T=h[g+1][v+1];(g!==0||a>0)&&p.push(y,x,T),(g!==n-1||c<Math.PI)&&p.push(x,M,T)}this.setIndex(p),this.setAttribute("position",new Te(f,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},hl=class i extends Bi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ul=class i extends lt{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],c=[],l=[],h=new E,d=new E,u=new E;for(let p=0;p<=n;p++)for(let f=0;f<=r;f++){let _=f/r*s,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(f/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=r;f++){let _=(r+1)*p+f-1,m=(r+1)*(p-1)+f-1,g=(r+1)*(p-1)+f,v=(r+1)*p+f;a.push(_,m,v),a.push(m,g,v)}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},dl=class i extends lt{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],c=[],l=[],h=[],d=new E,u=new E,p=new E,f=new E,_=new E,m=new E,g=new E;for(let y=0;y<=n;++y){let x=y/n*s*Math.PI*2;v(x,s,a,e,p),v(x+.01,s,a,e,f),m.subVectors(f,p),g.addVectors(f,p),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let M=0;M<=r;++M){let T=M/r*Math.PI*2,A=-t*Math.cos(T),P=t*Math.sin(T);d.x=p.x+(A*g.x+P*_.x),d.y=p.y+(A*g.y+P*_.y),d.z=p.z+(A*g.z+P*_.z),c.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),l.push(u.x,u.y,u.z),h.push(y/n),h.push(M/r)}}for(let y=1;y<=n;y++)for(let x=1;x<=r;x++){let M=(r+1)*(y-1)+(x-1),T=(r+1)*y+(x-1),A=(r+1)*y+x,P=(r+1)*(y-1)+x;o.push(M,T,P),o.push(T,A,P)}function v(y,x,M,T,A){let P=Math.cos(y),L=Math.sin(y),z=M/x*y,G=Math.cos(z);A.x=T*(2+G)*.5*P,A.y=T*(2+G)*L*.5,A.z=T*Math.sin(z)*.5}this.setIndex(o),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},pl=class i extends lt{constructor(e=new ha(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,c=new E,l=new te,h=new E,d=[],u=[],p=[],f=[];function _(m){h=e.getPointAt(m/t,h);let g=a.normals[m],v=a.binormals[m];for(let y=0;y<=r;y++){let x=y/r*Math.PI*2,M=Math.sin(x),T=-Math.cos(x);c.x=T*g.x+M*v.x,c.y=T*g.y+M*v.y,c.z=T*g.z+M*v.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)_(m);_(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let g=0;g<=r;g++)l.x=m/t,l.y=g/r,p.push(l.x,l.y)})(),(function(){for(let m=1;m<=t;m++)for(let g=1;g<=r;g++){let v=(r+1)*(m-1)+(g-1),y=(r+1)*m+(g-1),x=(r+1)*m+g,M=(r+1)*(m-1)+g;f.push(v,y,M),f.push(y,x,M)}})()})(),this.setIndex(f),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new sl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ml=class extends lt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new E,s=new E;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let d=c[l],u=d.start;for(let p=u,f=u+d.count;p<f;p+=3)for(let _=0;_<3;_++){let m=o.getX(p+_),g=o.getX(p+(_+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,g),Yd(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,d=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),Yd(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Te(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Yd(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var Wv=Object.freeze({__proto__:null,BoxGeometry:Ve,CapsuleGeometry:Jo,CircleGeometry:ni,ConeGeometry:Un,CylinderGeometry:$e,DodecahedronGeometry:Qo,EdgesGeometry:el,ExtrudeGeometry:ol,IcosahedronGeometry:At,LatheGeometry:ll,OctahedronGeometry:Oi,PlaneGeometry:Je,PolyhedronGeometry:Bi,RingGeometry:ur,ShapeGeometry:cl,SphereGeometry:fn,TetrahedronGeometry:hl,TorusGeometry:ul,TorusKnotGeometry:dl,TubeGeometry:pl,WireframeGeometry:ml});var ie=class extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var fl=class extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gl=class extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bo(i,e){return i&&i.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i):i}function ag(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var dr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_l=class extends dr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nh,endingEnd:nh}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ih:s=e,o=2*t-n;break;case rh:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ih:a=e,c=2*n-t;break;case rh:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(n-t)/(r-t),_=f*f,m=_*f,g=-u*m+2*u*_-u*f,v=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*f+1,y=(-1-p)*m+(1.5+p)*_+.5*f,x=p*m-p*_;for(let M=0;M!==o;++M)s[M]=g*a[h+M]+v*a[l+M]+y*a[c+M]+x*a[d+M];return s}},vl=class extends dr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(r-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*d+a[c+u]*h;return s}},yl=class extends dr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},pn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bo(t,this.TimeBufferType),this.values=Bo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bo(e.times,Array),values:Bo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _l(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case Go:t=this.InterpolantFactoryMethodLinear;break;case Oo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Oo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&ag(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Oo,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[d+p]||f!==t[u+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};pn.prototype.ValueTypeName="",pn.prototype.TimeBufferType=Float32Array,pn.prototype.ValueBufferType=Float32Array,pn.prototype.DefaultInterpolation=Go;var Fi=class extends pn{constructor(e,t,n){super(e,t,n)}};Fi.prototype.ValueTypeName="bool",Fi.prototype.ValueBufferType=Array,Fi.prototype.DefaultInterpolation=js,Fi.prototype.InterpolantFactoryMethodLinear=void 0,Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends pn{constructor(e,t,n,r){super(e,t,n,r)}};xl.prototype.ValueTypeName="color";var bl=class extends pn{constructor(e,t,n,r){super(e,t,n,r)}};bl.prototype.ValueTypeName="number";var Ml=class extends dr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)sn.slerpFlat(s,0,a,l-o,a,l,c);return s}},_a=class extends pn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ml(this.times,this.values,this.getValueSize(),e)}};_a.prototype.ValueTypeName="quaternion",_a.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends pn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="string",Ni.prototype.ValueBufferType=Array,Ni.prototype.DefaultInterpolation=js,Ni.prototype.InterpolantFactoryMethodLinear=void 0,Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends pn{constructor(e,t,n,r){super(e,t,n,r)}};El.prototype.ValueTypeName="vector";var Sl=class{constructor(e,t,n){let r=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){c++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,c),o===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let p=l[d],f=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},tm=new Sl,wl=class{constructor(e){this.manager=e!==void 0?e:tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var is=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},va=class extends is{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Qc=new Ie,Zd=new E,Jd=new E,Tl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ki,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Zd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zd),Jd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jd),t.updateMatrixWorld(),Qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Qd=new Ie,Hs=new E,eh=new E,uh=class extends Tl{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hs),eh.copy(n.position),eh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(eh),n.updateMatrixWorld(),r.makeTranslation(-Hs.x,-Hs.y,-Hs.z),Qd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd,n.coordinateSystem,n.reversedDepth)}},ya=class extends is{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new uh}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},xa=class extends Yr{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dh=class extends Tl{constructor(){super(new xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ba=class extends is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new dh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var $v=new Ie,jv=new Ie,qv=new Ie;var Al=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ma=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Xv=new E,Kv=new sn,Yv=new E,Zv=new E,Jv=new E;var Qv=new E,ey=new sn,ty=new E,ny=new E;var au="\\[\\]\\.:\\/",og=new RegExp("["+au+"]","g"),th="[^"+au+"]",lg="[^"+au.replace("\\.","")+"]",cg=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",th)+/(WCOD+)?/.source.replace("WCOD",lg)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th)+"$"),hg=["material","materials","bones","map"],ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(og,"")}static parseTrackName(e){let t=cg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);hg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=class{constructor(i,e,t){let n=t||ut.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray],ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iy=new Float32Array(1);var ep=new Ie,Ea=class{constructor(e,t,n=0,r=1/0){this.ray=new ei(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ep.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ep),this}intersectObject(e,t=!0,n=[]){return ph(e,this,n,t),n.sort(tp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ph(e[r],this,n,t);return n.sort(tp),n}};function tp(i,e){return i.distance-e.distance}function ph(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)ph(s[a],e,t,!0)}}var rs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ry=new te;var sy=new E,ay=new E,oy=new E,ly=new E,cy=new E,hy=new E,uy=new E;var dy=new E;var py=new E,my=new Ie,fy=new Ie;var gy=new E,_y=new de,vy=new de;var yy=new E,xy=new E,by=new E;var My=new E,Ey=new Yr;var Sy=new bn;var wy=new E;var Sa=class extends Jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){e!==void 0?(this.domElement!==null&&this.disconnect(),this.domElement=e):console.warn("THREE.Controls: connect() now requires an element.")}disconnect(){}dispose(){}update(){}};function ou(i,e,t,n){let r=(function(s){switch(s){case ri:case xh:return{byteLength:1,components:1};case ls:case bh:case cs:return{byteLength:2,components:1};case Hl:case Gl:return{byteLength:2,components:4};case fr:case zl:case kn:return{byteLength:4,components:1};case Mh:case Eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case 1021:return i*e;case Vl:case Wl:return i*e/r.components*r.byteLength;case 1030:case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case Bn:case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function wm(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function dg(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=i.createBuffer(),d;if(i.bindBuffer(a,h),i.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=i.HALF_FLOAT;else if(o instanceof Uint16Array)d=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=i.SHORT;else if(o instanceof Uint32Array)d=i.UNSIGNED_INT;else if(o instanceof Int32Array)d=i.INT;else if(o instanceof Int8Array)d=i.BYTE;else if(o instanceof Uint8Array)d=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=i.UNSIGNED_BYTE}return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(i.bindBuffer(o,s),l.length===0)i.bufferSubData(o,0,c);else{l.sort((d,u)=>d.start-u.start);let h=0;for(let d=1;d<l.length;d++){let u=l[h],p=l[d];p.start<=u.start+u.count+1?u.count=Math.max(u.count,p.start+p.count-u.start):(++h,l[h]=p)}l.length=h+1;for(let d=0,u=l.length;d<u;d++){let p=l[d];i.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var ze={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},pe={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},si={basic:{uniforms:Kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new de(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Kt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Kt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new de(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Kt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Kt([pe.points,pe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Kt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Kt([pe.common,pe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Kt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Kt([pe.sprite,pe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Kt([pe.common,pe.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Kt([pe.lights,pe.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};si.physical={uniforms:Kt([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var Kl={r:0,b:0,g:0},vr=new an,pg=new Ie;function mg(i,e,t,n,r,s,a){let o=new de(0),c,l,h=s===!0?0:1,d=null,u=0,p=null;function f(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g}function _(m,g){m.getRGB(Kl,ru(i)),n.buffers.color.setClear(Kl.r,Kl.g,Kl.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),h=g,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,_(o,h)},render:function(m){let g=!1,v=f(m);v===null?_(o,h):v&&v.isColor&&(_(v,1),g=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(m,g){let v=f(g);v&&(v.isCubeTexture||v.mapping===Aa)?(l===void 0&&(l=new V(new Ve(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:_r(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,x,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),vr.copy(g.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(vr)),l.material.toneMapped=et.getTransfer(v.colorSpace)!==ot,d===v&&u===v.version&&p===i.toneMapping||(l.material.needsUpdate=!0,d=v,u=v.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new V(new Je(2,2),new Nn({name:"BackgroundMaterial",uniforms:_r(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=et.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),d===v&&u===v.version&&p===i.toneMapping||(c.material.needsUpdate=!0,d=v,u=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}}}function fg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=l(null),s=r,a=!1;function o(g){return i.bindVertexArray(g)}function c(g){return i.deleteVertexArray(g)}function l(g){let v=[],y=[],x=[];for(let M=0;M<t;M++)v[M]=0,y[M]=0,x[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:y,attributeDivisors:x,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,y=g.length;v<y;v++)g[v]=0}function d(g){u(g,0)}function u(g,v){let y=s.newAttributes,x=s.enabledAttributes,M=s.attributeDivisors;y[g]=1,x[g]===0&&(i.enableVertexAttribArray(g),x[g]=1),M[g]!==v&&(i.vertexAttribDivisor(g,v),M[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let y=0,x=v.length;y<x;y++)v[y]!==g[y]&&(i.disableVertexAttribArray(y),v[y]=0)}function f(g,v,y,x,M,T,A){A===!0?i.vertexAttribIPointer(g,v,y,M,T):i.vertexAttribPointer(g,v,y,x,M,T)}function _(){m(),a=!0,s!==r&&(s=r,o(s.object))}function m(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,v,y,x,M){let T=!1,A=(function(P,L,z){let G=z.wireframe===!0,B=n[P.id];B===void 0&&(B={},n[P.id]=B);let J=B[L.id];J===void 0&&(J={},B[L.id]=J);let W=J[G];return W===void 0&&(W=l(i.createVertexArray()),J[G]=W),W})(x,y,v);s!==A&&(s=A,o(s.object)),T=(function(P,L,z,G){let B=s.attributes,J=L.attributes,W=0,Q=z.getAttributes();for(let ee in Q)if(Q[ee].location>=0){let le=B[ee],re=J[ee];if(re===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),le===void 0||le.attribute!==re||re&&le.data!==re.data)return!0;W++}return s.attributesNum!==W||s.index!==G})(g,x,y,M),T&&(function(P,L,z,G){let B={},J=L.attributes,W=0,Q=z.getAttributes();for(let ee in Q)if(Q[ee].location>=0){let le=J[ee];le===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(le=P.instanceColor));let re={};re.attribute=le,le&&le.data&&(re.data=le.data),B[ee]=re,W++}s.attributes=B,s.attributesNum=W,s.index=G})(g,x,y,M),M!==null&&e.update(M,i.ELEMENT_ARRAY_BUFFER),(T||a)&&(a=!1,(function(P,L,z,G){h();let B=G.attributes,J=z.getAttributes(),W=L.defaultAttributeValues;for(let Q in J){let ee=J[Q];if(ee.location>=0){let le=B[Q];if(le===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),le!==void 0){let re=le.normalized,ye=le.itemSize,Se=e.get(le);if(Se===void 0)continue;let be=Se.buffer,Ce=Se.type,ce=Se.bytesPerElement,ue=Ce===i.INT||Ce===i.UNSIGNED_INT||le.gpuType===zl;if(le.isInterleavedBufferAttribute){let he=le.data,Ae=he.stride,Ue=le.offset;if(he.isInstancedInterleavedBuffer){for(let w=0;w<ee.locationSize;w++)u(ee.location+w,he.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let w=0;w<ee.locationSize;w++)d(ee.location+w);i.bindBuffer(i.ARRAY_BUFFER,be);for(let w=0;w<ee.locationSize;w++)f(ee.location+w,ye/ee.locationSize,Ce,re,Ae*ce,(Ue+ye/ee.locationSize*w)*ce,ue)}else{if(le.isInstancedBufferAttribute){for(let he=0;he<ee.locationSize;he++)u(ee.location+he,le.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let he=0;he<ee.locationSize;he++)d(ee.location+he);i.bindBuffer(i.ARRAY_BUFFER,be);for(let he=0;he<ee.locationSize;he++)f(ee.location+he,ye/ee.locationSize,Ce,re,ye*ce,ye/ee.locationSize*he*ce,ue)}}else if(W!==void 0){let re=W[Q];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(ee.location,re);break;case 3:i.vertexAttrib3fv(ee.location,re);break;case 4:i.vertexAttrib4fv(ee.location,re);break;default:i.vertexAttrib1fv(ee.location,re)}}}}p()})(g,v,y,x),M!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(M).buffer))},reset:_,resetDefaultState:m,dispose:function(){_();for(let g in n){let v=n[g];for(let y in v){let x=v[y];for(let M in x)c(x[M].object),delete x[M];delete v[y]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let v=n[g.id];for(let y in v){let x=v[y];for(let M in x)c(x[M].object),delete x[M];delete v[y]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let v in n){let y=n[v];if(y[g.id]===void 0)continue;let x=y[g.id];for(let M in x)c(x[M].object),delete x[M];delete y[g.id]}},initAttributes:h,enableAttribute:d,disableUnusedAttributes:p}}function gg(i,e,t){let n;function r(s,a,o){o!==0&&(i.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){i.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,n,1)},this.renderMultiDrawInstances=function(s,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<s.length;h++)r(s[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(n,s,0,a,0,c,0,o);let h=0;for(let d=0;d<o;d++)h+=a[d]*c[d];t.update(h,n,1)}}}function _g(i,e,t,n){let r;function s(u){if(u==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let u=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(u){return u===Bn||n.convert(u)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(u){let p=u===cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(u!==ri&&n.convert(u)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==kn&&!p)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:h,maxVertexTextures:d,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:d>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function vg(i){let e=this,t=null,n=0,r=!1,s=!1,a=new xn,o=new Ne,c={value:null,needsUpdate:!1};function l(h,d,u,p){let f=h!==null?h.length:0,_=null;if(f!==0){if(_=c.value,p!==!0||_===null){let m=u+4*f,g=d.matrixWorldInverse;o.getNormalMatrix(g),(_===null||_.length<m)&&(_=new Float32Array(m));for(let v=0,y=u;v!==f;++v,y+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(_,y),_[y+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,_}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||n!==0||r;return r=d,n=h.length,u},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=l(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,f=h.clipIntersection,_=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!_)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let g=s?0:n,v=4*g,y=m.clippingState||null;c.value=y,y=l(p,d,v,u);for(let x=0;x!==v;++x)y[x]=t[x];m.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function yg(i){let e=new WeakMap;function t(r,s){return s===kl?r.mapping=os:s===Bl&&(r.mapping=pr),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===kl||s===Bl){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Xo(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var nm=[.125,.215,.35,.446,.526,.582],Pa=20,lu=new xa,im=new de,cu=null,hu=0,uu=0,du=!1,xr=(1+Math.sqrt(5))/2,us=1/xr,rm=[new E(-xr,us,0),new E(xr,us,0),new E(-us,0,xr),new E(us,0,xr),new E(0,xr,-us),new E(0,xr,us),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],xg=new E,Jl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=xg}=s;cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cu,hu,uu),this._renderer.xr.enabled=du,e.scissorTest=!1,Yl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:cs,format:Bn,colorSpace:lr,depthBuffer:!1},r=sm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sm(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,d=a-4+1+nm.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);c.push(p);let f=1/p;u>a-4?f=nm[u-a+4-1]:u===0&&(f=0),l.push(f);let _=1/(p-2),m=-_,g=1+_,v=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,x=6,M=3,T=2,A=1,P=new Float32Array(M*x*y),L=new Float32Array(T*x*y),z=new Float32Array(A*x*y);for(let B=0;B<y;B++){let J=B%3*2/3-1,W=B>2?0:-1,Q=[J,W,0,J+2/3,W,0,J+2/3,W+1,0,J,W,0,J+2/3,W+1,0,J,W+1,0];P.set(Q,M*x*B),L.set(v,T*x*B);let ee=[B,B,B,B,B,B];z.set(ee,A*x*B)}let G=new lt;G.setAttribute("position",new Ht(P,M)),G.setAttribute("uv",new Ht(L,T)),G.setAttribute("faceIndex",new Ht(z,A)),o.push(G),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(Pa),h=new E(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Pa,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new V(this._lodPlanes[0],e);this._renderer.compile(t,lu)}_sceneToCubeUV(e,t,n,r,s){let a=new zt(90,1,t,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,d=l.toneMapping;l.getClearColor(im),l.toneMapping=vi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null));let u=new Xt({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),p=new V(new Ve,u),f=!1,_=e.background;_?_.isColor&&(u.color.copy(_),e.background=null,f=!0):(u.color.copy(im),f=!0);for(let m=0;m<6;m++){let g=m%3;g===0?(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[m],s.y,s.z)):g===1?(a.up.set(0,0,o[m]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[m],s.z)):(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[m]));let v=this._cubeSize;Yl(r,g*v,m>2?v:0,v,v),l.setRenderTarget(r),f&&l.render(p,a),l.render(e,a)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=d,l.autoClear=h,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===os||e.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=am());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new V(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Yl(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,lu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=rm[(r-s-1)%rm.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new V(this._lodPlanes[r],l),d=l.uniforms,u=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,f=s/p,_=isFinite(s)?1+Math.floor(3*f):Pa;_>Pa&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let m=[],g=0;for(let x=0;x<Pa;++x){let M=x/f,T=Math.exp(-M*M/2);m.push(T),x===0?g+=T:x<_&&(g+=2*T)}for(let x=0;x<m.length;x++)m[x]=m[x]/g;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;let y=this._sizeLods[r];Yl(t,3*y*(r>v-4?r-v+4:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(h,lu)}};function sm(i,e,t){let n=new Qn(i,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function am(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function om(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bg(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===kl||s===Bl,o=s===os||s===pr;if(a||o){let c=e.get(r),l=c!==void 0?c.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return t===null&&(t=new Jl(i)),c=a?t.fromEquirectangular(r,c):t.fromCubemap(r,c),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),c.texture;if(c!==void 0)return c.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&(function(d){let u=0,p=6;for(let f=0;f<p;f++)d[f]!==void 0&&u++;return u===p})(h)?(t===null&&(t=new Jl(i)),c=a?t.fromEquirectangular(r):t.fromCubemap(r),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),r.addEventListener("dispose",n),c.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Mg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&qr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Eg(i,e,t,n){let r={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let d in l.attributes)e.remove(l.attributes[d]);l.removeEventListener("dispose",a),delete r[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,d=c.attributes.position,u=0;if(h!==null){let _=h.array;u=h.version;for(let m=0,g=_.length;m<g;m+=3){let v=_[m+0],y=_[m+1],x=_[m+2];l.push(v,y,y,x,x,v)}}else{if(d===void 0)return;{let _=d.array;u=d.version;for(let m=0,g=_.length/3-1;m<g;m+=3){let v=m+0,y=m+1,x=m+2;l.push(v,y,y,x,x,v)}}}let p=new(iu(l)?Js:Zs)(l,1);p.version=u;let f=s.get(c);f&&e.remove(f),s.set(c,p)}return{get:function(c,l){return r[l.id]===!0||(l.addEventListener("dispose",a),r[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],i.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Sg(i,e,t){let n,r,s;function a(o,c,l){l!==0&&(i.drawElementsInstanced(n,c,r,o*s,l),t.update(c,n,l))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,c){i.drawElements(n,c,r,o*s),t.update(c,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,o,0,l);let h=0;for(let d=0;d<l;d++)h+=c[d];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<o.length;u++)a(o[u]/s,c[u],h[u]);else{d.multiDrawElementsInstancedWEBGL(n,c,0,r,o,0,h,0,l);let u=0;for(let p=0;p<l;p++)u+=c[p]*h[p];t.update(u,n,1)}}}function wg(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Tg(i,e,t){let n=new WeakMap,r=new st;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,d=n.get(a);if(d===void 0||d.count!==h){let P=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;u===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let y=a.attributes.position.count*v,x=1;y>e.maxTextureSize&&(x=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*x*4*h),T=new Ys(M,y,x,h);T.type=kn,T.needsUpdate=!0;let A=4*v;for(let L=0;L<h;L++){let z=_[L],G=m[L],B=g[L],J=y*x*4*L;for(let W=0;W<z.count;W++){let Q=W*A;u===!0&&(r.fromBufferAttribute(z,W),M[J+Q+0]=r.x,M[J+Q+1]=r.y,M[J+Q+2]=r.z,M[J+Q+3]=0),p===!0&&(r.fromBufferAttribute(G,W),M[J+Q+4]=r.x,M[J+Q+5]=r.y,M[J+Q+6]=r.z,M[J+Q+7]=0),f===!0&&(r.fromBufferAttribute(B,W),M[J+Q+8]=r.x,M[J+Q+9]=r.y,M[J+Q+10]=r.z,M[J+Q+11]=B.itemSize===4?r.w:1)}}d={count:h,texture:T,size:new te(y,x)},n.set(a,d),a.addEventListener("dispose",P)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let u=0;for(let f=0;f<c.length;f++)u+=c[f];let p=a.morphTargetsRelative?1:1-u;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}}}function Ag(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(r.get(l)!==o&&(e.update(l),r.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return l},dispose:function(){r=new WeakMap}}}var Tm=new en,lm=new sa(1,1),Am=new Ys,Rm=new jo,Cm=new Qs,cm=[],hm=[],um=new Float32Array(16),dm=new Float32Array(9),pm=new Float32Array(4);function ps(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=cm[r];if(s===void 0&&(s=new Float32Array(r),cm[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ec(i,e){let t=hm[e];t===void 0&&(t=new Int32Array(e),hm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function Ig(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function Pg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function Lg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;pm.set(n),i.uniformMatrix2fv(this.addr,!1,pm),Ct(t,n)}}function Dg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;dm.set(n),i.uniformMatrix3fv(this.addr,!1,dm),Ct(t,n)}}function Fg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;um.set(n),i.uniformMatrix4fv(this.addr,!1,um),Ct(t,n)}}function Ng(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ug(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function kg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function Bg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function Og(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function Hg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function Gg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function Vg(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(lm.compareFunction=eu,s=lm):s=Tm,t.setTexture2D(e||s,r)}function Wg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Rm,r)}function $g(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Cm,r)}function jg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Am,r)}function qg(i,e){i.uniform1fv(this.addr,e)}function Xg(i,e){let t=ps(e,this.size,2);i.uniform2fv(this.addr,t)}function Kg(i,e){let t=ps(e,this.size,3);i.uniform3fv(this.addr,t)}function Yg(i,e){let t=ps(e,this.size,4);i.uniform4fv(this.addr,t)}function Zg(i,e){let t=ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jg(i,e){let t=ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qg(i,e){let t=ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function e0(i,e){i.uniform1iv(this.addr,e)}function t0(i,e){i.uniform2iv(this.addr,e)}function n0(i,e){i.uniform3iv(this.addr,e)}function i0(i,e){i.uniform4iv(this.addr,e)}function r0(i,e){i.uniform1uiv(this.addr,e)}function s0(i,e){i.uniform2uiv(this.addr,e)}function a0(i,e){i.uniform3uiv(this.addr,e)}function o0(i,e){i.uniform4uiv(this.addr,e)}function l0(i,e,t){let n=this.cache,r=e.length,s=ec(t,r);Rt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Tm,s[a])}function c0(i,e,t){let n=this.cache,r=e.length,s=ec(t,r);Rt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Rm,s[a])}function h0(i,e,t){let n=this.cache,r=e.length,s=ec(t,r);Rt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Cm,s[a])}function u0(i,e,t){let n=this.cache,r=e.length,s=ec(t,r);Rt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Am,s[a])}var mu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return Rg;case 35664:return Cg;case 35665:return Ig;case 35666:return Pg;case 35674:return Lg;case 35675:return Dg;case 35676:return Fg;case 5124:case 35670:return Ng;case 35667:case 35671:return Ug;case 35668:case 35672:return kg;case 35669:case 35673:return Bg;case 5125:return Og;case 36294:return zg;case 36295:return Hg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return jg}})(t.type)}},fu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return qg;case 35664:return Xg;case 35665:return Kg;case 35666:return Yg;case 35674:return Zg;case 35675:return Jg;case 35676:return Qg;case 5124:case 35670:return e0;case 35667:case 35671:return t0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return r0;case 36294:return s0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}})(t.type)}},gu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},pu=/(\w+)(\])?(\[|\.)?/g;function mm(i,e){i.seq.push(e),i.map[e.id]=e}function d0(i,e,t){let n=i.name,r=n.length;for(pu.lastIndex=0;;){let s=pu.exec(n),a=pu.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===r){mm(t,l===void 0?new mu(o,i,e):new fu(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new gu(o),mm(t,h)),t=h}}}var ds=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);d0(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function fm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var p0=0,gm=new Ne;function _m(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,c){let l=o.split(`
`),h=[],d=Math.max(c-6,0),u=Math.min(c+6,l.length);for(let p=d;p<u;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function m0(i,e){let t=(function(n){et._getMatrix(gm,et.workingColorSpace,n);let r=`mat3( ${gm.elements.map(s=>s.toFixed(4))} )`;switch(et.getTransfer(n)){case qs:return[r,"LinearTransferOETF"];case ot:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function f0(i,e){let t;switch(e){case Ap:t="Linear";break;case Rp:t="Reinhard";break;case Cp:t="Cineon";break;case Ul:t="ACESFilmic";break;case Pp:t="AgX";break;case Lp:t="Neutral";break;case Ip:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zl=new E;function g0(){return et.getLuminanceCoefficients(Zl),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Zl.x.toFixed(4)}, ${Zl.y.toFixed(4)}, ${Zl.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function La(i){return i!==""}function vm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ym(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _u(i){return i.replace(_0,y0)}var v0=new Map;function y0(i,e){let t=ze[e];if(t===void 0){let n=v0.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return _u(t)}var x0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xm(i){return i.replace(x0,b0)}function b0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bm(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M0(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(G){let B="SHADOWMAP_TYPE_BASIC";return G.shadowMapType===fh?B="SHADOWMAP_TYPE_PCF":G.shadowMapType===Rl?B="SHADOWMAP_TYPE_PCF_SOFT":G.shadowMapType===ii&&(B="SHADOWMAP_TYPE_VSM"),B})(t),l=(function(G){let B="ENVMAP_TYPE_CUBE";if(G.envMap)switch(G.envMapMode){case os:case pr:B="ENVMAP_TYPE_CUBE";break;case Aa:B="ENVMAP_TYPE_CUBE_UV"}return B})(t),h=(function(G){let B="ENVMAP_MODE_REFLECTION";return G.envMap&&G.envMapMode===pr&&(B="ENVMAP_MODE_REFRACTION"),B})(t),d=(function(G){let B="ENVMAP_BLENDING_NONE";if(G.envMap)switch(G.combine){case Sp:B="ENVMAP_BLENDING_MULTIPLY";break;case wp:B="ENVMAP_BLENDING_MIX";break;case Tp:B="ENVMAP_BLENDING_ADD"}return B})(t),u=(function(G){let B=G.envMapCubeUVHeight;if(B===null)return null;let J=Math.log2(B)-2,W=1/B;return{texelWidth:1/(3*Math.max(Math.pow(2,J),112)),texelHeight:W,maxMip:J}})(t),p=(function(G){return[G.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",G.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)})(t),f=(function(G){let B=[];for(let J in G){let W=G[J];W!==!1&&B.push("#define "+J+" "+W)}return B.join(`
`)})(s),_=r.createProgram(),m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(La).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(La).join(`
`),g.length>0&&(g+=`
`)):(m=[bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),g=[bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?ze.tonemapping_pars_fragment:"",t.toneMapping!==vi?f0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,m0("linearToOutputTexel",t.outputColorSpace),g0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(La).join(`
`)),a=_u(a),a=vm(a,t),a=ym(a,t),o=_u(o),o=vm(o,t),o=ym(o,t),a=xm(a),o=xm(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=v+m+a,x=v+g+o,M=fm(r,r.VERTEX_SHADER,y),T=fm(r,r.FRAGMENT_SHADER,x);function A(G){if(i.debug.checkShaderErrors){let B=r.getProgramInfoLog(_)||"",J=r.getShaderInfoLog(M)||"",W=r.getShaderInfoLog(T)||"",Q=B.trim(),ee=J.trim(),le=W.trim(),re=!0,ye=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,M,T);else{let Se=_m(r,M,"vertex"),be=_m(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Q+`
`+Se+`
`+be)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):ee!==""&&le!==""||(ye=!1);ye&&(G.diagnostics={runnable:re,programLog:Q,vertexShader:{log:ee,prefix:m},fragmentShader:{log:le,prefix:g}})}r.deleteShader(M),r.deleteShader(T),P=new ds(r,_),L=(function(B,J){let W={},Q=B.getProgramParameter(J,B.ACTIVE_ATTRIBUTES);for(let ee=0;ee<Q;ee++){let le=B.getActiveAttrib(J,ee),re=le.name,ye=1;le.type===B.FLOAT_MAT2&&(ye=2),le.type===B.FLOAT_MAT3&&(ye=3),le.type===B.FLOAT_MAT4&&(ye=4),W[re]={type:le.type,location:B.getAttribLocation(J,re),locationSize:ye}}return W})(r,_)}let P,L;r.attachShader(_,M),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),this.getUniforms=function(){return P===void 0&&A(this),P},this.getAttributes=function(){return L===void 0&&A(this),L};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(_,37297)),z},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=T,this}var E0=0,vu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yu(e),t.set(e,n)),n}},yu=class{constructor(e){this.id=E0++,this.code=e,this.usedTimes=0}};function S0(i,e,t,n,r,s,a){let o=new Kr,c=new vu,l=new Set,h=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,g,v,y,x){let M=y.fog,T=x.geometry,A=m.isMeshStandardMaterial?y.environment:null,P=(m.isMeshStandardMaterial?t:e).get(m.envMap||A),L=P&&P.mapping===Aa?P.image.height:null,z=f[m.type];m.precision!==null&&(p=r.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let G=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,B=G!==void 0?G.length:0,J,W,Q,ee,le=0;if(T.morphAttributes.position!==void 0&&(le=1),T.morphAttributes.normal!==void 0&&(le=2),T.morphAttributes.color!==void 0&&(le=3),z){let $t=si[z];J=$t.vertexShader,W=$t.fragmentShader}else J=m.vertexShader,W=m.fragmentShader,c.update(m),Q=c.getVertexShaderID(m),ee=c.getFragmentShaderID(m);let re=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Se=x.isInstancedMesh===!0,be=x.isBatchedMesh===!0,Ce=!!m.map,ce=!!m.matcap,ue=!!P,he=!!m.aoMap,Ae=!!m.lightMap,Ue=!!m.bumpMap,w=!!m.normalMap,S=!!m.displacementMap,O=!!m.emissiveMap,N=!!m.metalnessMap,b=!!m.roughnessMap,C=m.anisotropy>0,k=m.clearcoat>0,F=m.dispersion>0,K=m.iridescence>0,H=m.sheen>0,$=m.transmission>0,ae=C&&!!m.anisotropyMap,me=k&&!!m.clearcoatMap,oe=k&&!!m.clearcoatNormalMap,_e=k&&!!m.clearcoatRoughnessMap,Me=K&&!!m.iridescenceMap,we=K&&!!m.iridescenceThicknessMap,je=H&&!!m.sheenColorMap,tt=H&&!!m.sheenRoughnessMap,nt=!!m.specularMap,fe=!!m.specularColorMap,Re=!!m.specularIntensityMap,We=$&&!!m.transmissionMap,Wt=$&&!!m.thicknessMap,xe=!!m.gradientMap,rt=!!m.alphaMap,qe=m.alphaTest>0,An=!!m.alphaHash,ci=!!m.extensions,U=vi;m.toneMapped&&(re!==null&&re.isXRRenderTarget!==!0||(U=i.toneMapping));let Ft={shaderID:z,shaderType:m.type,shaderName:m.name,vertexShader:J,fragmentShader:W,defines:m.defines,customVertexShaderID:Q,customFragmentShaderID:ee,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:be,batchingColor:be&&x._colorsTexture!==null,instancing:Se,instancingColor:Se&&x.instanceColor!==null,instancingMorph:Se&&x.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:lr,alphaToCoverage:!!m.alphaToCoverage,map:Ce,matcap:ce,envMap:ue,envMapMode:ue&&P.mapping,envMapCubeUVHeight:L,aoMap:he,lightMap:Ae,bumpMap:Ue,normalMap:w,displacementMap:u&&S,emissiveMap:O,normalMapObjectSpace:w&&m.normalMapType===Op,normalMapTangentSpace:w&&m.normalMapType===Bp,metalnessMap:N,roughnessMap:b,anisotropy:C,anisotropyMap:ae,clearcoat:k,clearcoatMap:me,clearcoatNormalMap:oe,clearcoatRoughnessMap:_e,dispersion:F,iridescence:K,iridescenceMap:Me,iridescenceThicknessMap:we,sheen:H,sheenColorMap:je,sheenRoughnessMap:tt,specularMap:nt,specularColorMap:fe,specularIntensityMap:Re,transmission:$,transmissionMap:We,thicknessMap:Wt,gradientMap:xe,opaque:m.transparent===!1&&m.blending===wa&&m.alphaToCoverage===!1,alphaMap:rt,alphaTest:qe,alphaHash:An,combine:m.combine,mapUv:Ce&&_(m.map.channel),aoMapUv:he&&_(m.aoMap.channel),lightMapUv:Ae&&_(m.lightMap.channel),bumpMapUv:Ue&&_(m.bumpMap.channel),normalMapUv:w&&_(m.normalMap.channel),displacementMapUv:S&&_(m.displacementMap.channel),emissiveMapUv:O&&_(m.emissiveMap.channel),metalnessMapUv:N&&_(m.metalnessMap.channel),roughnessMapUv:b&&_(m.roughnessMap.channel),anisotropyMapUv:ae&&_(m.anisotropyMap.channel),clearcoatMapUv:me&&_(m.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(m.iridescenceMap.channel),iridescenceThicknessMapUv:we&&_(m.iridescenceThicknessMap.channel),sheenColorMapUv:je&&_(m.sheenColorMap.channel),sheenRoughnessMapUv:tt&&_(m.sheenRoughnessMap.channel),specularMapUv:nt&&_(m.specularMap.channel),specularColorMapUv:fe&&_(m.specularColorMap.channel),specularIntensityMapUv:Re&&_(m.specularIntensityMap.channel),transmissionMapUv:We&&_(m.transmissionMap.channel),thicknessMapUv:Wt&&_(m.thicknessMap.channel),alphaMapUv:rt&&_(m.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(w||C),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!T.attributes.uv&&(Ce||rt),fog:!!M,useFog:m.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:x.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:le,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:U,decodeVideoTexture:Ce&&m.map.isVideoTexture===!0&&et.getTransfer(m.map.colorSpace)===ot,decodeVideoTextureEmissive:O&&m.emissiveMap.isVideoTexture===!0&&et.getTransfer(m.emissiveMap.colorSpace)===ot,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===mt,flipSided:m.side===gn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:ci&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ci&&m.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft},getProgramCacheKey:function(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)g.push(v),g.push(m.defines[v]);return m.isRawShaderMaterial===!1&&((function(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)})(g,m),(function(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)})(g,m),g.push(i.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){let g=f[m.type],v;if(g){let y=si[g];v=Yp.clone(y.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,g){let v;for(let y=0,x=h.length;y<x;y++){let M=h[y];if(M.cacheKey===g){v=M,++v.usedTimes;break}}return v===void 0&&(v=new M0(i,g,m,s),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes===0){let g=h.indexOf(m);h[g]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){c.remove(m)},programs:h,dispose:function(){c.dispose()}}}function w0(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function T0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Em(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,c,l,h,d){let u=i[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:d},i[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=c,u.groupOrder=l,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,c,l,h,d){let u=s(a,o,c,l,h,d);c.transmission>0?n.push(u):c.transparent===!0?r.push(u):t.push(u)},unshift:function(a,o,c,l,h,d){let u=s(a,o,c,l,h,d);c.transmission>0?n.unshift(u):c.transparent===!0?r.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=i.length;a<o;a++){let c=i[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||T0),n.length>1&&n.sort(o||Mm),r.length>1&&r.sort(o||Mm)}}}function A0(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new Em,i.set(e,[r])):t>=n.length?(r=new Em,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function R0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new de};break;case"SpotLight":t={position:new E,direction:new E,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new E,halfWidth:new E,halfHeight:new E}}return i[e.id]=t,t}}}var C0=0;function I0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function P0(i){let e=new R0,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new E);let r=new E,s=new Ie,a=new Ie;return{setup:function(o){let c=0,l=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let d=0,u=0,p=0,f=0,_=0,m=0,g=0,v=0,y=0,x=0,M=0;o.sort(I0);for(let A=0,P=o.length;A<P;A++){let L=o[A],z=L.color,G=L.intensity,B=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=z.r*G,l+=z.g*G,h+=z.b*G;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],G);M++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,ee=t.get(L);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.directionalShadow[d]=ee,n.directionalShadowMap[d]=J,n.directionalShadowMatrix[d]=L.shadow.matrix,m++}n.directional[d]=W,d++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(z).multiplyScalar(G),W.distance=B,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[p]=W;let Q=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,Q.updateMatrices(L),L.castShadow&&x++),n.spotLightMatrix[p]=Q.matrix,L.castShadow){let ee=t.get(L);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.spotShadow[p]=ee,n.spotShadowMap[p]=J,v++}p++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(z).multiplyScalar(G),W.halfWidth.set(.5*L.width,0,0),W.halfHeight.set(0,.5*L.height,0),n.rectArea[f]=W,f++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let Q=L.shadow,ee=t.get(L);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,n.pointShadow[u]=ee,n.pointShadowMap[u]=J,n.pointShadowMatrix[u]=L.shadow.matrix,g++}n.point[u]=W,u++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(G),W.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[_]=W,_++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=h;let T=n.hash;T.directionalLength===d&&T.pointLength===u&&T.spotLength===p&&T.rectAreaLength===f&&T.hemiLength===_&&T.numDirectionalShadows===m&&T.numPointShadows===g&&T.numSpotShadows===v&&T.numSpotMaps===y&&T.numLightProbes===M||(n.directional.length=d,n.spot.length=p,n.rectArea.length=f,n.point.length=u,n.hemi.length=_,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=v+y-x,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=M,T.directionalLength=d,T.pointLength=u,T.spotLength=p,T.rectAreaLength=f,T.hemiLength=_,T.numDirectionalShadows=m,T.numPointShadows=g,T.numSpotShadows=v,T.numSpotMaps=y,T.numLightProbes=M,n.version=C0++)},setupView:function(o,c){let l=0,h=0,d=0,u=0,p=0,f=c.matrixWorldInverse;for(let _=0,m=o.length;_<m;_++){let g=o[_];if(g.isDirectionalLight){let v=n.directional[l];v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),l++}else if(g.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),d++}else if(g.isRectAreaLight){let v=n.rectArea[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),u++}else if(g.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(f),p++}}},state:n}}function Sm(i){let e=new P0(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function L0(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new Sm(i),e.set(t,[s])):n>=r.length?(s=new Sm(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}function D0(i,e,t){let n=new ki,r=new te,s=new te,a=new st,o=new fl({depthPacking:kp}),c=new gl,l={},h=t.maxTextureSize,d={[ss]:gn,[gn]:ss,[mt]:mt},u=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new lt;f.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new V(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh;let g=this.type;function v(T,A){let P=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qn(r.x,r.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,P,u,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,P,p,_,null)}function y(T,A,P,L){let z=null,G=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(G!==void 0)z=G;else if(z=P.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let B=z.uuid,J=A.uuid,W=l[B];W===void 0&&(W={},l[B]=W);let Q=W[J];Q===void 0&&(Q=z.clone(),W[J]=Q,A.addEventListener("dispose",M)),z=Q}return z.visible=A.visible,z.wireframe=A.wireframe,z.side=L===ii?A.shadowSide!==null?A.shadowSide:A.side:A.shadowSide!==null?A.shadowSide:d[A.side],z.alphaMap=A.alphaMap,z.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,z.map=A.map,z.clipShadows=A.clipShadows,z.clippingPlanes=A.clippingPlanes,z.clipIntersection=A.clipIntersection,z.displacementMap=A.displacementMap,z.displacementScale=A.displacementScale,z.displacementBias=A.displacementBias,z.wireframeLinewidth=A.wireframeLinewidth,z.linewidth=A.linewidth,P.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(i.properties.get(z).light=P),z}function x(T,A,P,L,z){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&z===ii)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let B=e.update(T),J=T.material;if(Array.isArray(J)){let W=B.groups;for(let Q=0,ee=W.length;Q<ee;Q++){let le=W[Q],re=J[le.materialIndex];if(re&&re.visible){let ye=y(T,re,L,z);T.onBeforeShadow(i,T,A,P,B,ye,le),i.renderBufferDirect(P,null,B,ye,T,le),T.onAfterShadow(i,T,A,P,B,ye,le)}}}else if(J.visible){let W=y(T,J,L,z);T.onBeforeShadow(i,T,A,P,B,W,null),i.renderBufferDirect(P,null,B,W,T,null),T.onAfterShadow(i,T,A,P,B,W,null)}}let G=T.children;for(let B=0,J=G.length;B<J;B++)x(G[B],A,P,L,z)}function M(T){T.target.removeEventListener("dispose",M);for(let A in l){let P=l[A],L=T.target.uuid;L in P&&(P[L].dispose(),delete P[L])}}this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let L=i.getRenderTarget(),z=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Gi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let J=g!==ii&&this.type===ii,W=g===ii&&this.type!==ii;for(let Q=0,ee=T.length;Q<ee;Q++){let le=T[Q],re=le.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;r.copy(re.mapSize);let ye=re.getFrameExtents();if(r.multiply(ye),s.copy(re.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ye.x),r.x=s.x*ye.x,re.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ye.y),r.y=s.y*ye.y,re.mapSize.y=s.y)),re.map===null||J===!0||W===!0){let be=this.type!==ii?{minFilter:Yn,magFilter:Yn}:{};re.map!==null&&re.map.dispose(),re.map=new Qn(r.x,r.y,be),re.map.texture.name=le.name+".shadowMap",re.camera.updateProjectionMatrix()}i.setRenderTarget(re.map),i.clear();let Se=re.getViewportCount();for(let be=0;be<Se;be++){let Ce=re.getViewport(be);a.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),B.viewport(a),re.updateMatrices(le,be),n=re.getFrustum(),x(A,P,re.camera,le,this.type)}re.isPointLightShadow!==!0&&this.type===ii&&v(re,P),re.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(L,z,G)}}var F0={[Cl]:Il,[Pl]:Fl,[Ll]:Nl,[Ta]:Dl,[Il]:Cl,[Fl]:Pl,[Nl]:Ll,[Dl]:Ta};function N0(i,e){let t=new function(){let b=!1,C=new st,k=null,F=new st(0,0,0,0);return{setMask:function(K){k===K||b||(i.colorMask(K,K,K,K),k=K)},setLocked:function(K){b=K},setClear:function(K,H,$,ae,me){me===!0&&(K*=ae,H*=ae,$*=ae),C.set(K,H,$,ae),F.equals(C)===!1&&(i.clearColor(K,H,$,ae),F.copy(C))},reset:function(){b=!1,k=null,F.set(-1,0,0,0)}}},n=new function(){let b=!1,C=!1,k=null,F=null,K=null;return{setReversed:function(H){if(C!==H){let $=e.get("EXT_clip_control");H?$.clipControlEXT($.LOWER_LEFT_EXT,$.ZERO_TO_ONE_EXT):$.clipControlEXT($.LOWER_LEFT_EXT,$.NEGATIVE_ONE_TO_ONE_EXT),C=H;let ae=K;K=null,this.setClear(ae)}},getReversed:function(){return C},setTest:function(H){H?ue(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(H){k===H||b||(i.depthMask(H),k=H)},setFunc:function(H){if(C&&(H=F0[H]),F!==H){switch(H){case Cl:i.depthFunc(i.NEVER);break;case Il:i.depthFunc(i.ALWAYS);break;case Pl:i.depthFunc(i.LESS);break;case Ta:i.depthFunc(i.LEQUAL);break;case Ll:i.depthFunc(i.EQUAL);break;case Dl:i.depthFunc(i.GEQUAL);break;case Fl:i.depthFunc(i.GREATER);break;case Nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}F=H}},setLocked:function(H){b=H},setClear:function(H){K!==H&&(C&&(H=1-H),i.clearDepth(H),K=H)},reset:function(){b=!1,k=null,F=null,K=null,C=!1}}},r=new function(){let b=!1,C=null,k=null,F=null,K=null,H=null,$=null,ae=null,me=null;return{setTest:function(oe){b||(oe?ue(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(oe){C===oe||b||(i.stencilMask(oe),C=oe)},setFunc:function(oe,_e,Me){k===oe&&F===_e&&K===Me||(i.stencilFunc(oe,_e,Me),k=oe,F=_e,K=Me)},setOp:function(oe,_e,Me){H===oe&&$===_e&&ae===Me||(i.stencilOp(oe,_e,Me),H=oe,$=_e,ae=Me)},setLocked:function(oe){b=oe},setClear:function(oe){me!==oe&&(i.clearStencil(oe),me=oe)},reset:function(){b=!1,C=null,k=null,F=null,K=null,H=null,$=null,ae=null,me=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],d=null,u=!1,p=null,f=null,_=null,m=null,g=null,v=null,y=null,x=new de(0,0,0),M=0,T=!1,A=null,P=null,L=null,z=null,G=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,W=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=W>=2);let ee=null,le={},re=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),Se=new st().fromArray(re),be=new st().fromArray(ye);function Ce(b,C,k,F){let K=new Uint8Array(4),H=i.createTexture();i.bindTexture(b,H),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $=0;$<k;$++)b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?i.texImage3D(C,0,i.RGBA,1,1,F,0,i.RGBA,i.UNSIGNED_BYTE,K):i.texImage2D(C+$,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,K);return H}let ce={};function ue(b){o[b]!==!0&&(i.enable(b),o[b]=!0)}function he(b){o[b]!==!1&&(i.disable(b),o[b]=!1)}ce[i.TEXTURE_2D]=Ce(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=Ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=Ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=Ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),ue(i.DEPTH_TEST),n.setFunc(Ta),S(!1),O(mh),ue(i.CULL_FACE),w(Gi);let Ae={[as]:i.FUNC_ADD,[sp]:i.FUNC_SUBTRACT,[ap]:i.FUNC_REVERSE_SUBTRACT};Ae[op]=i.MIN,Ae[lp]=i.MAX;let Ue={[cp]:i.ZERO,[hp]:i.ONE,[up]:i.SRC_COLOR,[pp]:i.SRC_ALPHA,[yp]:i.SRC_ALPHA_SATURATE,[_p]:i.DST_COLOR,[fp]:i.DST_ALPHA,[dp]:i.ONE_MINUS_SRC_COLOR,[mp]:i.ONE_MINUS_SRC_ALPHA,[vp]:i.ONE_MINUS_DST_COLOR,[gp]:i.ONE_MINUS_DST_ALPHA,[xp]:i.CONSTANT_COLOR,[bp]:i.ONE_MINUS_CONSTANT_COLOR,[Mp]:i.CONSTANT_ALPHA,[Ep]:i.ONE_MINUS_CONSTANT_ALPHA};function w(b,C,k,F,K,H,$,ae,me,oe){if(b!==Gi){if(u===!1&&(ue(i.BLEND),u=!0),b===rp)K=K||C,H=H||k,$=$||F,C===f&&K===g||(i.blendEquationSeparate(Ae[C],Ae[K]),f=C,g=K),k===_&&F===m&&H===v&&$===y||(i.blendFuncSeparate(Ue[k],Ue[F],Ue[H],Ue[$]),_=k,m=F,v=H,y=$),ae.equals(x)!==!1&&me===M||(i.blendColor(ae.r,ae.g,ae.b,me),x.copy(ae),M=me),p=b,T=!1;else if(b!==p||oe!==T){if(f===as&&g===as||(i.blendEquation(i.FUNC_ADD),f=as,g=as),oe)switch(b){case wa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gh:i.blendFunc(i.ONE,i.ONE);break;case _h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case wa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _h:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}_=null,m=null,v=null,y=null,x.set(0,0,0),M=0,p=b,T=oe}}else u===!0&&(he(i.BLEND),u=!1)}function S(b){A!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),A=b)}function O(b){b!==np?(ue(i.CULL_FACE),b!==P&&(b===mh?i.cullFace(i.BACK):b===ip?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),P=b}function N(b,C,k){b?(ue(i.POLYGON_OFFSET_FILL),z===C&&G===k||(i.polygonOffset(C,k),z=C,G=k)):he(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:ue,disable:he,bindFramebuffer:function(b,C){return c[b]!==C&&(i.bindFramebuffer(b,C),c[b]=C,b===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=C),b===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=C),!0)},drawBuffers:function(b,C){let k=h,F=!1;if(b){k=l.get(C),k===void 0&&(k=[],l.set(C,k));let K=b.textures;if(k.length!==K.length||k[0]!==i.COLOR_ATTACHMENT0){for(let H=0,$=K.length;H<$;H++)k[H]=i.COLOR_ATTACHMENT0+H;k.length=K.length,F=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,F=!0);F&&i.drawBuffers(k)},useProgram:function(b){return d!==b&&(i.useProgram(b),d=b,!0)},setBlending:w,setMaterial:function(b,C){b.side===mt?he(i.CULL_FACE):ue(i.CULL_FACE);let k=b.side===gn;C&&(k=!k),S(k),b.blending===wa&&b.transparent===!1?w(Gi):w(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),n.setFunc(b.depthFunc),n.setTest(b.depthTest),n.setMask(b.depthWrite),t.setMask(b.colorWrite);let F=b.stencilWrite;r.setTest(F),F&&(r.setMask(b.stencilWriteMask),r.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),r.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),N(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:O,setLineWidth:function(b){b!==L&&(J&&i.lineWidth(b),L=b)},setPolygonOffset:N,setScissorTest:function(b){b?ue(i.SCISSOR_TEST):he(i.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=i.TEXTURE0+B-1),ee!==b&&(i.activeTexture(b),ee=b)},bindTexture:function(b,C,k){k===void 0&&(k=ee===null?i.TEXTURE0+B-1:ee);let F=le[k];F===void 0&&(F={type:void 0,texture:void 0},le[k]=F),F.type===b&&F.texture===C||(ee!==k&&(i.activeTexture(k),ee=k),i.bindTexture(b,C||ce[b]),F.type=b,F.texture=C)},unbindTexture:function(){let b=le[ee];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexImage3D:function(){try{i.compressedTexImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage2D:function(){try{i.texImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage3D:function(){try{i.texImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},updateUBOMapping:function(b,C){let k=a.get(C);k===void 0&&(k=new WeakMap,a.set(C,k));let F=k.get(b);F===void 0&&(F=i.getUniformBlockIndex(C,b.name),k.set(b,F))},uniformBlockBinding:function(b,C){let k=a.get(C).get(b);s.get(C)!==k&&(i.uniformBlockBinding(C,k,b.__bindingPointIndex),s.set(C,k))},texStorage2D:function(){try{i.texStorage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texStorage3D:function(){try{i.texStorage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage2D:function(){try{i.texSubImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage3D:function(){try{i.texSubImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},scissor:function(b){Se.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),Se.copy(b))},viewport:function(b){be.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),be.copy(b))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},ee=null,le={},c={},l=new WeakMap,h=[],d=null,u=!1,p=null,f=null,_=null,m=null,g=null,v=null,y=null,x=new de(0,0,0),M=0,T=!1,A=null,P=null,L=null,z=null,G=null,Se.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function U0(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new te,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,S){return p?new OffscreenCanvas(w,S):Ks("canvas")}function _(w,S,O){let N=1,b=Ue(w);if((b.width>O||b.height>O)&&(N=O/Math.max(b.width,b.height)),N<1){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let C=Math.floor(N*b.width),k=Math.floor(N*b.height);d===void 0&&(d=f(C,k));let F=S?f(C,k):d;return F.width=C,F.height=k,F.getContext("2d").drawImage(w,0,0,C,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+C+"x"+k+")."),F}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),w}return w}function m(w){return w.generateMipmaps}function g(w){i.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,S,O,N,b=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let C=S;if(S===i.RED&&(O===i.FLOAT&&(C=i.R32F),O===i.HALF_FLOAT&&(C=i.R16F),O===i.UNSIGNED_BYTE&&(C=i.R8)),S===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(C=i.R8UI),O===i.UNSIGNED_SHORT&&(C=i.R16UI),O===i.UNSIGNED_INT&&(C=i.R32UI),O===i.BYTE&&(C=i.R8I),O===i.SHORT&&(C=i.R16I),O===i.INT&&(C=i.R32I)),S===i.RG&&(O===i.FLOAT&&(C=i.RG32F),O===i.HALF_FLOAT&&(C=i.RG16F),O===i.UNSIGNED_BYTE&&(C=i.RG8)),S===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(C=i.RG8UI),O===i.UNSIGNED_SHORT&&(C=i.RG16UI),O===i.UNSIGNED_INT&&(C=i.RG32UI),O===i.BYTE&&(C=i.RG8I),O===i.SHORT&&(C=i.RG16I),O===i.INT&&(C=i.RG32I)),S===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(C=i.RGB8UI),O===i.UNSIGNED_SHORT&&(C=i.RGB16UI),O===i.UNSIGNED_INT&&(C=i.RGB32UI),O===i.BYTE&&(C=i.RGB8I),O===i.SHORT&&(C=i.RGB16I),O===i.INT&&(C=i.RGB32I)),S===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(C=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(C=i.RGBA16UI),O===i.UNSIGNED_INT&&(C=i.RGBA32UI),O===i.BYTE&&(C=i.RGBA8I),O===i.SHORT&&(C=i.RGBA16I),O===i.INT&&(C=i.RGBA32I)),S===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(C=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(C=i.R11F_G11F_B10F)),S===i.RGBA){let k=b?qs:et.getTransfer(N);O===i.FLOAT&&(C=i.RGBA32F),O===i.HALF_FLOAT&&(C=i.RGBA16F),O===i.UNSIGNED_BYTE&&(C=k===ot?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(C=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(C=i.RGB5_A1)}return C!==i.R16F&&C!==i.R32F&&C!==i.RG16F&&C!==i.RG32F&&C!==i.RGBA16F&&C!==i.RGBA32F||e.get("EXT_color_buffer_float"),C}function x(w,S){let O;return w?S===null||S===fr||S===hs?O=i.DEPTH24_STENCIL8:S===kn?O=i.DEPTH32F_STENCIL8:S===ls&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fr||S===hs?O=i.DEPTH_COMPONENT24:S===kn?O=i.DEPTH_COMPONENT32F:S===ls&&(O=i.DEPTH_COMPONENT16),O}function M(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Yn&&w.minFilter!==Zn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function T(w){let S=w.target;S.removeEventListener("dispose",T),(function(O){let N=n.get(O);if(N.__webglInit===void 0)return;let b=O.source,C=u.get(b);if(C){let k=C[N.__cacheKey];k.usedTimes--,k.usedTimes===0&&P(O),Object.keys(C).length===0&&u.delete(b)}n.remove(O)})(S),S.isVideoTexture&&h.delete(S)}function A(w){let S=w.target;S.removeEventListener("dispose",A),(function(O){let N=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(N.__webglFramebuffer[C]))for(let k=0;k<N.__webglFramebuffer[C].length;k++)i.deleteFramebuffer(N.__webglFramebuffer[C][k]);else i.deleteFramebuffer(N.__webglFramebuffer[C]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[C])}else{if(Array.isArray(N.__webglFramebuffer))for(let C=0;C<N.__webglFramebuffer.length;C++)i.deleteFramebuffer(N.__webglFramebuffer[C]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let C=0;C<N.__webglColorRenderbuffer.length;C++)N.__webglColorRenderbuffer[C]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[C]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}let b=O.textures;for(let C=0,k=b.length;C<k;C++){let F=n.get(b[C]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),a.memory.textures--),n.remove(b[C])}n.remove(O)})(S)}function P(w){let S=n.get(w);i.deleteTexture(S.__webglTexture);let O=w.source;delete u.get(O)[S.__cacheKey],a.memory.textures--}let L=0;function z(w,S){let O=n.get(w);if(w.isVideoTexture&&(function(N){let b=a.render.frame;h.get(N)!==b&&(h.set(N,b),N.update())})(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let N=w.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(N.complete!==!1)return void le(O,w,S);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+S)}let G={[zo]:i.REPEAT,[$r]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},B={[Yn]:i.NEAREST,[Dp]:i.NEAREST_MIPMAP_NEAREST,[Ra]:i.NEAREST_MIPMAP_LINEAR,[Zn]:i.LINEAR,[Ol]:i.LINEAR_MIPMAP_NEAREST,[mr]:i.LINEAR_MIPMAP_LINEAR},J={[zp]:i.NEVER,[jp]:i.ALWAYS,[Hp]:i.LESS,[eu]:i.LEQUAL,[Gp]:i.EQUAL,[$p]:i.GEQUAL,[Vp]:i.GREATER,[Wp]:i.NOTEQUAL};function W(w,S){if(S.type!==kn||e.has("OES_texture_float_linear")!==!1||S.magFilter!==Zn&&S.magFilter!==Ol&&S.magFilter!==Ra&&S.magFilter!==mr&&S.minFilter!==Zn&&S.minFilter!==Ol&&S.minFilter!==Ra&&S.minFilter!==mr||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,G[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,G[S.wrapT]),w!==i.TEXTURE_3D&&w!==i.TEXTURE_2D_ARRAY||i.texParameteri(w,i.TEXTURE_WRAP_R,G[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,B[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,B[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Yn||S.minFilter!==Ra&&S.minFilter!==mr||S.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Q(w,S){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",T));let N=S.source,b=u.get(N);b===void 0&&(b={},u.set(N,b));let C=(function(k){let F=[];return F.push(k.wrapS),F.push(k.wrapT),F.push(k.wrapR||0),F.push(k.magFilter),F.push(k.minFilter),F.push(k.anisotropy),F.push(k.internalFormat),F.push(k.format),F.push(k.type),F.push(k.generateMipmaps),F.push(k.premultiplyAlpha),F.push(k.flipY),F.push(k.unpackAlignment),F.push(k.colorSpace),F.join()})(S);if(C!==w.__cacheKey){b[C]===void 0&&(b[C]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),b[C].usedTimes++;let k=b[w.__cacheKey];k!==void 0&&(b[w.__cacheKey].usedTimes--,k.usedTimes===0&&P(S)),w.__cacheKey=C,w.__webglTexture=b[C].texture}return O}function ee(w,S,O){return Math.floor(Math.floor(w/O)/S)}function le(w,S,O){let N=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(N=i.TEXTURE_3D);let b=Q(w,S),C=S.source;t.bindTexture(N,w.__webglTexture,i.TEXTURE0+O);let k=n.get(C);if(C.version!==k.__version||b===!0){t.activeTexture(i.TEXTURE0+O);let F=et.getPrimaries(et.workingColorSpace),K=S.colorSpace===gr?null:et.getPrimaries(S.colorSpace),H=S.colorSpace===gr||F===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);let $=_(S.image,!1,r.maxTextureSize);$=Ae(S,$);let ae=s.convert(S.format,S.colorSpace),me=s.convert(S.type),oe,_e=y(S.internalFormat,ae,me,S.colorSpace,S.isVideoTexture);W(N,S);let Me=S.mipmaps,we=S.isVideoTexture!==!0,je=k.__version===void 0||b===!0,tt=C.dataReady,nt=M(S,$);if(S.isDepthTexture)_e=x(S.format===Ia,S.type),je&&(we?t.texStorage2D(i.TEXTURE_2D,1,_e,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,_e,$.width,$.height,0,ae,me,null));else if(S.isDataTexture)if(Me.length>0){we&&je&&t.texStorage2D(i.TEXTURE_2D,nt,_e,Me[0].width,Me[0].height);for(let fe=0,Re=Me.length;fe<Re;fe++)oe=Me[fe],we?tt&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,oe.width,oe.height,ae,me,oe.data):t.texImage2D(i.TEXTURE_2D,fe,_e,oe.width,oe.height,0,ae,me,oe.data);S.generateMipmaps=!1}else we?(je&&t.texStorage2D(i.TEXTURE_2D,nt,_e,$.width,$.height),tt&&(function(fe,Re,We,Wt){let xe=fe.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re.width,Re.height,We,Wt,Re.data);else{xe.sort((U,Ft)=>U.start-Ft.start);let rt=0;for(let U=1;U<xe.length;U++){let Ft=xe[rt],$t=xe[U],ft=Ft.start+Ft.count,Qi=ee($t.start,Re.width,4),er=ee(Ft.start,Re.width,4);$t.start<=ft+1&&Qi===er&&ee($t.start+$t.count-1,Re.width,4)===Qi?Ft.count=Math.max(Ft.count,$t.start+$t.count-Ft.start):(++rt,xe[rt]=$t)}xe.length=rt+1;let qe=i.getParameter(i.UNPACK_ROW_LENGTH),An=i.getParameter(i.UNPACK_SKIP_PIXELS),ci=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,Re.width);for(let U=0,Ft=xe.length;U<Ft;U++){let $t=xe[U],ft=Math.floor($t.start/4),Qi=Math.ceil($t.count/4),er=ft%Re.width,Is=Math.floor(ft/Re.width),ro=Qi;i.pixelStorei(i.UNPACK_SKIP_PIXELS,er),i.pixelStorei(i.UNPACK_SKIP_ROWS,Is),t.texSubImage2D(i.TEXTURE_2D,0,er,Is,ro,1,We,Wt,Re.data)}fe.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,qe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,An),i.pixelStorei(i.UNPACK_SKIP_ROWS,ci)}})(S,$,ae,me)):t.texImage2D(i.TEXTURE_2D,0,_e,$.width,$.height,0,ae,me,$.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){we&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,_e,Me[0].width,Me[0].height,$.depth);for(let fe=0,Re=Me.length;fe<Re;fe++)if(oe=Me[fe],S.format!==Bn)if(ae!==null)if(we){if(tt)if(S.layerUpdates.size>0){let We=ou(oe.width,oe.height,S.format,S.type);for(let Wt of S.layerUpdates){let xe=oe.data.subarray(Wt*We/oe.data.BYTES_PER_ELEMENT,(Wt+1)*We/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,Wt,oe.width,oe.height,1,ae,xe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,oe.width,oe.height,$.depth,ae,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,_e,oe.width,oe.height,$.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?tt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,oe.width,oe.height,$.depth,ae,me,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,_e,oe.width,oe.height,$.depth,0,ae,me,oe.data)}else{we&&je&&t.texStorage2D(i.TEXTURE_2D,nt,_e,Me[0].width,Me[0].height);for(let fe=0,Re=Me.length;fe<Re;fe++)oe=Me[fe],S.format!==Bn?ae!==null?we?tt&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,_e,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?tt&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,oe.width,oe.height,ae,me,oe.data):t.texImage2D(i.TEXTURE_2D,fe,_e,oe.width,oe.height,0,ae,me,oe.data)}else if(S.isDataArrayTexture)if(we){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,_e,$.width,$.height,$.depth),tt)if(S.layerUpdates.size>0){let fe=ou($.width,$.height,S.format,S.type);for(let Re of S.layerUpdates){let We=$.data.subarray(Re*fe/$.data.BYTES_PER_ELEMENT,(Re+1)*fe/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Re,$.width,$.height,1,ae,me,We)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ae,me,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,$.width,$.height,$.depth,0,ae,me,$.data);else if(S.isData3DTexture)we?(je&&t.texStorage3D(i.TEXTURE_3D,nt,_e,$.width,$.height,$.depth),tt&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ae,me,$.data)):t.texImage3D(i.TEXTURE_3D,0,_e,$.width,$.height,$.depth,0,ae,me,$.data);else if(S.isFramebufferTexture){if(je)if(we)t.texStorage2D(i.TEXTURE_2D,nt,_e,$.width,$.height);else{let fe=$.width,Re=$.height;for(let We=0;We<nt;We++)t.texImage2D(i.TEXTURE_2D,We,_e,fe,Re,0,ae,me,null),fe>>=1,Re>>=1}}else if(Me.length>0){if(we&&je){let fe=Ue(Me[0]);t.texStorage2D(i.TEXTURE_2D,nt,_e,fe.width,fe.height)}for(let fe=0,Re=Me.length;fe<Re;fe++)oe=Me[fe],we?tt&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ae,me,oe):t.texImage2D(i.TEXTURE_2D,fe,_e,ae,me,oe);S.generateMipmaps=!1}else if(we){if(je){let fe=Ue($);t.texStorage2D(i.TEXTURE_2D,nt,_e,fe.width,fe.height)}tt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,me,$)}else t.texImage2D(i.TEXTURE_2D,0,_e,ae,me,$);m(S)&&g(N),k.__version=C.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function re(w,S,O,N,b,C){let k=s.convert(O.format,O.colorSpace),F=s.convert(O.type),K=y(O.internalFormat,k,F,O.colorSpace),H=n.get(S),$=n.get(O);if($.__renderTarget=S,!H.__hasExternalTextures){let ae=Math.max(1,S.width>>C),me=Math.max(1,S.height>>C);b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?t.texImage3D(b,C,K,ae,me,S.depth,0,k,F,null):t.texImage2D(b,C,K,ae,me,0,k,F,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),he(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,b,$.__webglTexture,0,ue(S)):(b===i.TEXTURE_2D||b>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&b<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,b,$.__webglTexture,C),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(w,S,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){let N=S.depthTexture,b=N&&N.isDepthTexture?N.type:null,C=x(S.stencilBuffer,b),k=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=ue(S);he(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F,C,S.width,S.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,F,C,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,C,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,w)}else{let N=S.textures;for(let b=0;b<N.length;b++){let C=N[b],k=s.convert(C.format,C.colorSpace),F=s.convert(C.type),K=y(C.internalFormat,k,F,C.colorSpace),H=ue(S);O&&he(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,H,K,S.width,S.height):he(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H,K,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,K,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!S.depthTexture||!S.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=n.get(S.depthTexture);O.__renderTarget=S,O.__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);let N=O.__webglTexture,b=ue(S);if(S.depthTexture.format===Ca)he(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,N,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,N,0);else{if(S.depthTexture.format!==Ia)throw new Error("Unknown depthTexture format");he(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,N,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,N,0)}}function be(w){let S=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){let N=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),N){let b=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,N.removeEventListener("dispose",b)};N.addEventListener("dispose",b),S.__depthDisposeCallback=b}S.__boundDepthTexture=N}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let N=w.texture.mipmaps;N&&N.length>0?Se(S.__webglFramebuffer[0],w):Se(S.__webglFramebuffer,w)}else if(O){S.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[N]),S.__webglDepthbuffer[N]===void 0)S.__webglDepthbuffer[N]=i.createRenderbuffer(),ye(S.__webglDepthbuffer[N],w,!1);else{let b=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=S.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,b,i.RENDERBUFFER,C)}}else{let N=w.texture.mipmaps;if(N&&N.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ye(S.__webglDepthbuffer,w,!1);else{let b=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,b,i.RENDERBUFFER,C)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}let Ce=[],ce=[];function ue(w){return Math.min(r.maxSamples,w.samples)}function he(w){let S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ae(w,S){let O=w.colorSpace,N=w.format,b=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==lr&&O!==gr&&(et.getTransfer(O)===ot?N===Bn&&b===ri||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Ue(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=function(){let w=L;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),L+=1,w},this.resetTextureUnits=function(){L=0},this.setTexture2D=z,this.setTexture2DArray=function(w,S){let O=n.get(w);w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version?le(O,w,S):t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+S)},this.setTexture3D=function(w,S){let O=n.get(w);w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version?le(O,w,S):t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+S)},this.setTextureCube=function(w,S){let O=n.get(w);w.version>0&&O.__version!==w.version?(function(N,b,C){if(b.image.length!==6)return;let k=Q(N,b),F=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+C);let K=n.get(F);if(F.version!==K.__version||k===!0){t.activeTexture(i.TEXTURE0+C);let H=et.getPrimaries(et.workingColorSpace),$=b.colorSpace===gr?null:et.getPrimaries(b.colorSpace),ae=b.colorSpace===gr||H===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let me=b.isCompressedTexture||b.image[0].isCompressedTexture,oe=b.image[0]&&b.image[0].isDataTexture,_e=[];for(let xe=0;xe<6;xe++)_e[xe]=me||oe?oe?b.image[xe].image:b.image[xe]:_(b.image[xe],!0,r.maxCubemapSize),_e[xe]=Ae(b,_e[xe]);let Me=_e[0],we=s.convert(b.format,b.colorSpace),je=s.convert(b.type),tt=y(b.internalFormat,we,je,b.colorSpace),nt=b.isVideoTexture!==!0,fe=K.__version===void 0||k===!0,Re=F.dataReady,We,Wt=M(b,Me);if(W(i.TEXTURE_CUBE_MAP,b),me){nt&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Wt,tt,Me.width,Me.height);for(let xe=0;xe<6;xe++){We=_e[xe].mipmaps;for(let rt=0;rt<We.length;rt++){let qe=We[rt];b.format!==Bn?we!==null?nt?Re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,rt,0,0,qe.width,qe.height,we,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,rt,tt,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,rt,0,0,qe.width,qe.height,we,je,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,rt,tt,qe.width,qe.height,0,we,je,qe.data)}}}else{if(We=b.mipmaps,nt&&fe){We.length>0&&Wt++;let xe=Ue(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Wt,tt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(oe){nt?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,_e[xe].width,_e[xe].height,we,je,_e[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,tt,_e[xe].width,_e[xe].height,0,we,je,_e[xe].data);for(let rt=0;rt<We.length;rt++){let qe=We[rt].image[xe].image;nt?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,rt+1,0,0,qe.width,qe.height,we,je,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,rt+1,tt,qe.width,qe.height,0,we,je,qe.data)}}else{nt?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,we,je,_e[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,tt,we,je,_e[xe]);for(let rt=0;rt<We.length;rt++){let qe=We[rt];nt?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,rt+1,0,0,we,je,qe.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,rt+1,tt,we,je,qe.image[xe])}}}m(b)&&g(i.TEXTURE_CUBE_MAP),K.__version=F.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version})(O,w,S):t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+S)},this.rebindTextures=function(w,S,O){let N=n.get(w);S!==void 0&&re(N.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&be(w)},this.setupRenderTarget=function(w){let S=w.texture,O=n.get(w),N=n.get(S);w.addEventListener("dispose",A);let b=w.textures,C=w.isWebGLCubeRenderTarget===!0,k=b.length>1;if(k||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=S.version,a.memory.textures++),C){O.__webglFramebuffer=[];for(let F=0;F<6;F++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[F]=[];for(let K=0;K<S.mipmaps.length;K++)O.__webglFramebuffer[F][K]=i.createFramebuffer()}else O.__webglFramebuffer[F]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let F=0;F<S.mipmaps.length;F++)O.__webglFramebuffer[F]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(k)for(let F=0,K=b.length;F<K;F++){let H=n.get(b[F]);H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&he(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let F=0;F<b.length;F++){let K=b[F];O.__webglColorRenderbuffer[F]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[F]);let H=s.convert(K.format,K.colorSpace),$=s.convert(K.type),ae=y(K.internalFormat,H,$,K.colorSpace,w.isXRRenderTarget===!0),me=ue(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,ae,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,O.__webglColorRenderbuffer[F])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(C){t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),W(i.TEXTURE_CUBE_MAP,S);for(let F=0;F<6;F++)if(S.mipmaps&&S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)re(O.__webglFramebuffer[F][K],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,K);else re(O.__webglFramebuffer[F],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);m(S)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(k){for(let F=0,K=b.length;F<K;F++){let H=b[F],$=n.get(H),ae=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),W(ae,H),re(O.__webglFramebuffer,w,H,i.COLOR_ATTACHMENT0+F,ae,0),m(H)&&g(ae)}t.unbindTexture()}else{let F=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(F=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(F,N.__webglTexture),W(F,S),S.mipmaps&&S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)re(O.__webglFramebuffer[K],w,S,i.COLOR_ATTACHMENT0,F,K);else re(O.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,F,0);m(S)&&g(F),t.unbindTexture()}w.depthBuffer&&be(w)},this.updateRenderTargetMipmap=function(w){let S=w.textures;for(let O=0,N=S.length;O<N;O++){let b=S[O];if(m(b)){let C=v(w),k=n.get(b).__webglTexture;t.bindTexture(C,k),g(C),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(w.samples>0){if(he(w)===!1){let S=w.textures,O=w.width,N=w.height,b=i.COLOR_BUFFER_BIT,C=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=n.get(w),F=S.length>1;if(F)for(let H=0;H<S.length;H++)t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,k.__webglMultisampledFramebuffer);let K=w.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let H=0;H<S.length;H++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(b|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(b|=i.STENCIL_BUFFER_BIT)),F){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,k.__webglColorRenderbuffer[H]);let $=n.get(S[H]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,O,N,0,0,O,N,b,i.NEAREST),c===!0&&(Ce.length=0,ce.length=0,Ce.push(i.COLOR_ATTACHMENT0+H),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ce.push(C),ce.push(C),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),F)for(let H=0;H<S.length;H++){t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,k.__webglColorRenderbuffer[H]);let $=n.get(S[H]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,$,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=re,this.useMultisampledRTT=he}function k0(i,e){return{convert:function(t,n=gr){let r,s=et.getTransfer(n);if(t===ri)return i.UNSIGNED_BYTE;if(t===Hl)return i.UNSIGNED_SHORT_4_4_4_4;if(t===Gl)return i.UNSIGNED_SHORT_5_5_5_1;if(t===Mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===Eh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(t===xh)return i.BYTE;if(t===bh)return i.SHORT;if(t===ls)return i.UNSIGNED_SHORT;if(t===zl)return i.INT;if(t===fr)return i.UNSIGNED_INT;if(t===kn)return i.FLOAT;if(t===cs)return i.HALF_FLOAT;if(t===Fp)return i.ALPHA;if(t===Np)return i.RGB;if(t===Bn)return i.RGBA;if(t===Ca)return i.DEPTH_COMPONENT;if(t===Ia)return i.DEPTH_STENCIL;if(t===Vl)return i.RED;if(t===Wl)return i.RED_INTEGER;if(t===Up)return i.RG;if(t===Sh)return i.RG_INTEGER;if(t===wh)return i.RGBA_INTEGER;if(t===$l||t===jl||t===ql||t===Xl)if(s===ot){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===$l)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===$l)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===jl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===ql)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Xl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Th||t===Ah||t===Rh||t===Ch){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Th)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Ah)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Rh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Ch)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Ih||t===Ph||t===Lh){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Ih||t===Ph)return s===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===Lh)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===Dh||t===Fh||t===Nh||t===Uh||t===kh||t===Bh||t===Oh||t===zh||t===Hh||t===Gh||t===Vh||t===Wh||t===$h||t===jh){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Dh)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Fh)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Nh)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Uh)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===kh)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Bh)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Oh)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===zh)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Hh)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Gh)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Vh)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Wh)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===$h)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===jh)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===qh||t===Xh||t===Kh){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===qh)return s===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Xh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Kh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Yh||t===Zh||t===Jh||t===Qh){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Yh)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Zh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Jh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Qh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===hs?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new aa(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nn({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new V(new Je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bu=class extends Jn{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,f=null,_=typeof XRWebGLBinding<"u",m=new xu,g={},v=t.getContextAttributes(),y=null,x=null,M=[],T=[],A=new te,P=null,L=new zt;L.viewport=new st;let z=new zt;z.viewport=new st;let G=[L,z],B=new Al,J=null,W=null;function Q(ce){let ue=T.indexOf(ce.inputSource);if(ue===-1)return;let he=M[ue];he!==void 0&&(he.update(ce.inputSource,ce.frame,l||a),he.dispatchEvent({type:ce.type,data:ce.inputSource}))}function ee(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",le);for(let ce=0;ce<M.length;ce++){let ue=T[ce];ue!==null&&(T[ce]=null,M[ce].disconnect(ue))}J=null,W=null,m.reset();for(let ce in g)delete g[ce];e.setRenderTarget(y),p=null,u=null,d=null,r=null,x=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}function le(ce){for(let ue=0;ue<ce.removed.length;ue++){let he=ce.removed[ue],Ae=T.indexOf(he);Ae>=0&&(T[Ae]=null,M[Ae].disconnect(he))}for(let ue=0;ue<ce.added.length;ue++){let he=ce.added[ue],Ae=T.indexOf(he);if(Ae===-1){for(let w=0;w<M.length;w++){if(w>=T.length){T.push(he),Ae=w;break}if(T[w]===null){T[w]=he,Ae=w;break}}if(Ae===-1)break}let Ue=M[Ae];Ue&&Ue.connect(he)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let ue=M[ce];return ue===void 0&&(ue=new Zr,M[ce]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ce){let ue=M[ce];return ue===void 0&&(ue=new Zr,M[ce]=ue),ue.getGripSpace()},this.getHand=function(ce){let ue=M[ce];return ue===void 0&&(ue=new Zr,M[ce]=ue),ue.getHandSpace()},this.setFramebufferScaleFactor=function(ce){s=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){o=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ce){l=ce},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(ce){if(r=ce,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",le),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,he=null,Ae=null;v.depth&&(Ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?Ia:Ca,he=v.stencil?hs:fr);let Ue={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ue),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Qn(u.textureWidth,u.textureHeight,{format:Bn,type:ri,depthTexture:new sa(u.textureWidth,u.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Qn(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};let re=new E,ye=new E;function Se(ce,ue){ue===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(ue.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(r===null)return;let ue=ce.near,he=ce.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(he=m.depthFar)),B.near=z.near=L.near=ue,B.far=z.far=L.far=he,J===B.near&&W===B.far||(r.updateRenderState({depthNear:B.near,depthFar:B.far}),J=B.near,W=B.far),B.layers.mask=6|ce.layers.mask,L.layers.mask=3&B.layers.mask,z.layers.mask=5&B.layers.mask;let Ae=ce.parent,Ue=B.cameras;Se(B,Ae);for(let w=0;w<Ue.length;w++)Se(Ue[w],Ae);Ue.length===2?(function(w,S,O){re.setFromMatrixPosition(S.matrixWorld),ye.setFromMatrixPosition(O.matrixWorld);let N=re.distanceTo(ye),b=S.projectionMatrix.elements,C=O.projectionMatrix.elements,k=b[14]/(b[10]-1),F=b[14]/(b[10]+1),K=(b[9]+1)/b[5],H=(b[9]-1)/b[5],$=(b[8]-1)/b[0],ae=(C[8]+1)/C[0],me=k*$,oe=k*ae,_e=N/(-$+ae),Me=_e*-$;if(S.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(Me),w.translateZ(_e),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),b[10]===-1)w.projectionMatrix.copy(S.projectionMatrix),w.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{let we=k+_e,je=F+_e,tt=me-Me,nt=oe+(N-Me),fe=K*F/je*we,Re=H*F/je*we;w.projectionMatrix.makePerspective(tt,nt,fe,Re,we,je),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}})(B,L,z):B.projectionMatrix.copy(L.projectionMatrix),(function(w,S,O){O===null?w.matrix.copy(S.matrixWorld):(w.matrix.copy(O.matrixWorld),w.matrix.invert(),w.matrix.multiply(S.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(S.projectionMatrix),w.projectionMatrixInverse.copy(S.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=2*jr*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)})(ce,B,Ae)},this.getCamera=function(){return B},this.getFoveation=function(){if(u!==null||p!==null)return c},this.setFoveation=function(ce){c=ce,u!==null&&(u.fixedFoveation=ce),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ce)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(ce){return g[ce]};let be=null,Ce=new wm;Ce.setAnimationLoop(function(ce,ue){if(h=ue.getViewerPose(l||a),f=ue,h!==null){let he=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Ae=!1;he.length!==B.cameras.length&&(B.cameras.length=0,Ae=!0);for(let w=0;w<he.length;w++){let S=he[w],O=null;if(p!==null)O=p.getViewport(S);else{let b=d.getViewSubImage(u,S);O=b.viewport,w===0&&(e.setRenderTargetTextures(x,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(x))}let N=G[w];N===void 0&&(N=new zt,N.layers.enable(w),N.viewport=new st,G[w]=N),N.matrix.fromArray(S.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(S.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(O.x,O.y,O.width,O.height),w===0&&(B.matrix.copy(N.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ae===!0&&B.cameras.push(N)}let Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let w=d.getDepthInformation(he[0]);w&&w.isValid&&w.texture&&m.init(w,r.renderState)}if(Ue&&Ue.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let w=0;w<he.length;w++){let S=he[w].camera;if(S){let O=g[S];O||(O=new aa,g[S]=O);let N=d.getCameraImage(S);O.sourceTexture=N}}}}for(let he=0;he<M.length;he++){let Ae=T[he],Ue=M[he];Ae!==null&&Ue!==void 0&&Ue.update(Ae,ue,l||a)}be&&be(ce,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),f=null}),this.setAnimationLoop=function(ce){be=ce},this.dispose=function(){}}},yr=new an,B0=new Ie;function O0(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===gn&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===gn&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(r.envMap.value=o,yr.copy(c),yr.x*=-1,yr.y*=-1,yr.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),r.envMapRotation.value.setFromMatrix4(B0.makeRotationFromEuler(yr)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,ru(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(n(r,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(l,h,d){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===gn&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=d.texture,l.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(r,s,c)):s.isMeshMatcapMaterial?(n(r,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(l,h){let d=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(d.matrixWorld),l.nearDistance.value=d.shadow.camera.near,l.farDistance.value=d.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(l,h,d,u){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*d,l.scale.value=.5*u,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function z0(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(d,u,p,f){let _=d.value,m=u+"_"+p;if(f[m]===void 0)return f[m]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let g=f[m];if(typeof _=="number"||typeof _=="boolean"){if(g!==_)return f[m]=_,!0}else if(g.equals(_)===!1)return g.copy(_),!0}return!1}function l(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[u.id]),delete r[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;n.uniformBlockBinding(d,p)},update:function(d,u){let p=r[d.id];p===void 0&&((function(m){let g=m.uniforms,v=0,y=16;for(let M=0,T=g.length;M<T;M++){let A=Array.isArray(g[M])?g[M]:[g[M]];for(let P=0,L=A.length;P<L;P++){let z=A[P],G=Array.isArray(z.value)?z.value:[z.value];for(let B=0,J=G.length;B<J;B++){let W=l(G[B]),Q=v%y,ee=Q%W.boundary,le=Q+ee;v+=ee,le!==0&&y-le<W.storage&&(v+=y-le),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=W.storage}}}let x=v%y;x>0&&(v+=y-x),m.__size=v,m.__cache={}})(d),p=(function(m){let g=(function(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=g;let v=i.createBuffer(),y=m.__size,x=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,y,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,v),v})(d),r[d.id]=p,d.addEventListener("dispose",h));let f=u.program;n.updateUBOMapping(d,f);let _=e.render.frame;s[d.id]!==_&&((function(m){let g=r[m.id],v=m.uniforms,y=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let x=0,M=v.length;x<M;x++){let T=Array.isArray(v[x])?v[x]:[v[x]];for(let A=0,P=T.length;A<P;A++){let L=T[A];if(c(L,x,A,y)===!0){let z=L.__offset,G=Array.isArray(L.value)?L.value:[L.value],B=0;for(let J=0;J<G.length;J++){let W=G[J],Q=l(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,z+B,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,B),B+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(d),s[d.id]=_)},dispose:function(){for(let d in r)i.deleteBuffer(r[d]);a=[],r={},s={}}}}var Ql=class{constructor(e={}){let{canvas:t=qp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),_=new Int32Array(4),m=null,g=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,M=!1;this._outputColorSpace=dn;let T=0,A=0,P=null,L=-1,z=null,G=new st,B=new st,J=null,W=new de(0),Q=0,ee=t.width,le=t.height,re=1,ye=null,Se=null,be=new st(0,0,ee,le),Ce=new st(0,0,ee,le),ce=!1,ue=new ki,he=!1,Ae=!1,Ue=new Ie,w=new E,S=new st,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},N=!1;function b(){return P===null?re:1}let C,k,F,K,H,$,ae,me,oe,_e,Me,we,je,tt,nt,fe,Re,We,Wt,xe,rt,qe,An,ci,U=n;function Ft(R,j){return t.getContext(R,j)}try{let R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Qi,!1),t.addEventListener("webglcontextrestored",er,!1),t.addEventListener("webglcontextcreationerror",Is,!1),U===null){let j="webgl2";if(U=Ft(j,R),U===null)throw Ft(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}function $t(){C=new Mg(U),C.init(),qe=new k0(U,C),k=new _g(U,C,e,qe),F=new N0(U,C),k.reversedDepthBuffer&&u&&F.buffers.depth.setReversed(!0),K=new wg(U),H=new w0,$=new U0(U,C,F,H,k,qe,K),ae=new yg(x),me=new bg(x),oe=new dg(U),An=new fg(U,oe),_e=new Eg(U,oe,K,An),Me=new Ag(U,_e,oe,K),Wt=new Tg(U,k,$),fe=new vg(H),we=new S0(x,ae,me,C,k,An,fe),je=new O0(x,H),tt=new A0,nt=new L0(C),We=new mg(x,ae,me,F,Me,p,c),Re=new D0(x,Me,k),ci=new z0(U,K,k,F),xe=new gg(U,C,K),rt=new Sg(U,C,K),K.programs=we.programs,x.capabilities=k,x.extensions=C,x.properties=H,x.renderLists=tt,x.shadowMap=Re,x.state=F,x.info=K}$t();let ft=new bu(x,U);function Qi(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function er(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let R=K.autoReset,j=Re.enabled,Y=Re.autoUpdate,ne=Re.needsUpdate,q=Re.type;$t(),K.autoReset=R,Re.enabled=j,Re.autoUpdate=Y,Re.needsUpdate=ne,Re.type=q}function Is(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ro(R){let j=R.target;j.removeEventListener("dispose",ro),(function(Y){(function(ne){let q=H.get(ne).programs;q!==void 0&&(q.forEach(function(se){we.releaseProgram(se)}),ne.isShaderMaterial&&we.releaseShaderCache(ne))})(Y),H.remove(Y)})(j)}function yc(R,j,Y){R.transparent===!0&&R.side===mt&&R.forceSinglePass===!1?(R.side=gn,R.needsUpdate=!0,ao(R,j,Y),R.side=ss,R.needsUpdate=!0,ao(R,j,Y),R.side=mt):ao(R,j,Y)}this.xr=ft,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let R=C.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=C.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(R){R!==void 0&&(re=R,this.setSize(ee,le,!1))},this.getSize=function(R){return R.set(ee,le)},this.setSize=function(R,j,Y=!0){ft.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(ee=R,le=j,t.width=Math.floor(R*re),t.height=Math.floor(j*re),Y===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j))},this.getDrawingBufferSize=function(R){return R.set(ee*re,le*re).floor()},this.setDrawingBufferSize=function(R,j,Y){ee=R,le=j,re=Y,t.width=Math.floor(R*Y),t.height=Math.floor(j*Y),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(be)},this.setViewport=function(R,j,Y,ne){R.isVector4?be.set(R.x,R.y,R.z,R.w):be.set(R,j,Y,ne),F.viewport(G.copy(be).multiplyScalar(re).round())},this.getScissor=function(R){return R.copy(Ce)},this.setScissor=function(R,j,Y,ne){R.isVector4?Ce.set(R.x,R.y,R.z,R.w):Ce.set(R,j,Y,ne),F.scissor(B.copy(Ce).multiplyScalar(re).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(R){F.setScissorTest(ce=R)},this.setOpaqueSort=function(R){ye=R},this.setTransparentSort=function(R){Se=R},this.getClearColor=function(R){return R.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,Y=!0){let ne=0;if(R){let q=!1;if(P!==null){let se=P.texture.format;q=se===wh||se===Sh||se===Wl}if(q){let se=P.texture.type,ge=se===ri||se===fr||se===ls||se===hs||se===Hl||se===Gl,ve=We.getClearColor(),Ee=We.getClearAlpha(),Pe=ve.r,De=ve.g,Le=ve.b;ge?(f[0]=Pe,f[1]=De,f[2]=Le,f[3]=Ee,U.clearBufferuiv(U.COLOR,0,f)):(_[0]=Pe,_[1]=De,_[2]=Le,_[3]=Ee,U.clearBufferiv(U.COLOR,0,_))}else ne|=U.COLOR_BUFFER_BIT}j&&(ne|=U.DEPTH_BUFFER_BIT),Y&&(ne|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Qi,!1),t.removeEventListener("webglcontextrestored",er,!1),t.removeEventListener("webglcontextcreationerror",Is,!1),We.dispose(),tt.dispose(),nt.dispose(),H.dispose(),ae.dispose(),me.dispose(),Me.dispose(),An.dispose(),ci.dispose(),we.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",hd),ft.removeEventListener("sessionend",ud),tr.stop()},this.renderBufferDirect=function(R,j,Y,ne,q,se){j===null&&(j=O);let ge=q.isMesh&&q.matrixWorld.determinant()<0,ve=(function(Xe,gt,Ot,Ge,Fe){gt.isScene!==!0&&(gt=O),$.resetTextureUnits();let Rn=gt.fog,Mc=Ge.isMeshStandardMaterial?gt.environment:null,oo=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:lr,Ti=(Ge.isMeshStandardMaterial?me:ae).get(Ge.envMap||Mc),Vn=Ge.vertexColors===!0&&!!Ot.attributes.color&&Ot.attributes.color.itemSize===4,wr=!!Ot.attributes.tangent&&(!!Ge.normalMap||Ge.anisotropy>0),hi=!!Ot.morphAttributes.position,Ec=!!Ot.morphAttributes.normal,Tr=!!Ot.morphAttributes.color,_d=vi;Ge.toneMapped&&(P!==null&&P.isXRRenderTarget!==!0||(_d=x.toneMapping));let vd=Ot.morphAttributes.position||Ot.morphAttributes.normal||Ot.morphAttributes.color,Af=vd!==void 0?vd.length:0,Ke=H.get(Ge),Rf=g.state.lights;if(he===!0&&(Ae===!0||Xe!==z)){let vn=Xe===z&&Ge.id===L;fe.setState(Ge,Xe,vn)}let Cn=!1;Ge.version===Ke.__version?Ke.needsLights&&Ke.lightsStateVersion!==Rf.state.version||Ke.outputColorSpace!==oo||Fe.isBatchedMesh&&Ke.batching===!1?Cn=!0:Fe.isBatchedMesh||Ke.batching!==!0?Fe.isBatchedMesh&&Ke.batchingColor===!0&&Fe.colorTexture===null||Fe.isBatchedMesh&&Ke.batchingColor===!1&&Fe.colorTexture!==null||Fe.isInstancedMesh&&Ke.instancing===!1?Cn=!0:Fe.isInstancedMesh||Ke.instancing!==!0?Fe.isSkinnedMesh&&Ke.skinning===!1?Cn=!0:Fe.isSkinnedMesh||Ke.skinning!==!0?Fe.isInstancedMesh&&Ke.instancingColor===!0&&Fe.instanceColor===null||Fe.isInstancedMesh&&Ke.instancingColor===!1&&Fe.instanceColor!==null||Fe.isInstancedMesh&&Ke.instancingMorph===!0&&Fe.morphTexture===null||Fe.isInstancedMesh&&Ke.instancingMorph===!1&&Fe.morphTexture!==null||Ke.envMap!==Ti||Ge.fog===!0&&Ke.fog!==Rn?Cn=!0:Ke.numClippingPlanes===void 0||Ke.numClippingPlanes===fe.numPlanes&&Ke.numIntersection===fe.numIntersection?(Ke.vertexAlphas!==Vn||Ke.vertexTangents!==wr||Ke.morphTargets!==hi||Ke.morphNormals!==Ec||Ke.morphColors!==Tr||Ke.toneMapping!==_d||Ke.morphTargetsCount!==Af)&&(Cn=!0):Cn=!0:Cn=!0:Cn=!0:Cn=!0:(Cn=!0,Ke.__version=Ge.version);let nr=Ke.currentProgram;Cn===!0&&(nr=ao(Ge,gt,Fe));let yd=!1,Ps=!1,Sc=!1,wt=nr.getUniforms(),Ai=Ke.uniforms;if(F.useProgram(nr.program)&&(yd=!0,Ps=!0,Sc=!0),Ge.id!==L&&(L=Ge.id,Ps=!0),yd||z!==Xe){F.buffers.depth.getReversed()&&Xe.reversedDepth!==!0&&(Xe._reversedDepth=!0,Xe.updateProjectionMatrix()),wt.setValue(U,"projectionMatrix",Xe.projectionMatrix),wt.setValue(U,"viewMatrix",Xe.matrixWorldInverse);let vn=wt.map.cameraPosition;vn!==void 0&&vn.setValue(U,w.setFromMatrixPosition(Xe.matrixWorld)),k.logarithmicDepthBuffer&&wt.setValue(U,"logDepthBufFC",2/(Math.log(Xe.far+1)/Math.LN2)),(Ge.isMeshPhongMaterial||Ge.isMeshToonMaterial||Ge.isMeshLambertMaterial||Ge.isMeshBasicMaterial||Ge.isMeshStandardMaterial||Ge.isShaderMaterial)&&wt.setValue(U,"isOrthographic",Xe.isOrthographicCamera===!0),z!==Xe&&(z=Xe,Ps=!0,Sc=!0)}if(Fe.isSkinnedMesh){wt.setOptional(U,Fe,"bindMatrix"),wt.setOptional(U,Fe,"bindMatrixInverse");let vn=Fe.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),wt.setValue(U,"boneTexture",vn.boneTexture,$))}Fe.isBatchedMesh&&(wt.setOptional(U,Fe,"batchingTexture"),wt.setValue(U,"batchingTexture",Fe._matricesTexture,$),wt.setOptional(U,Fe,"batchingIdTexture"),wt.setValue(U,"batchingIdTexture",Fe._indirectTexture,$),wt.setOptional(U,Fe,"batchingColorTexture"),Fe._colorsTexture!==null&&wt.setValue(U,"batchingColorTexture",Fe._colorsTexture,$));let wc=Ot.morphAttributes;wc.position===void 0&&wc.normal===void 0&&wc.color===void 0||Wt.update(Fe,Ot,nr),(Ps||Ke.receiveShadow!==Fe.receiveShadow)&&(Ke.receiveShadow=Fe.receiveShadow,wt.setValue(U,"receiveShadow",Fe.receiveShadow)),Ge.isMeshGouraudMaterial&&Ge.envMap!==null&&(Ai.envMap.value=Ti,Ai.flipEnvMap.value=Ti.isCubeTexture&&Ti.isRenderTargetTexture===!1?-1:1),Ge.isMeshStandardMaterial&&Ge.envMap===null&&gt.environment!==null&&(Ai.envMapIntensity.value=gt.environmentIntensity),Ps&&(wt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ke.needsLights&&(In=Sc,(Wn=Ai).ambientLightColor.needsUpdate=In,Wn.lightProbe.needsUpdate=In,Wn.directionalLights.needsUpdate=In,Wn.directionalLightShadows.needsUpdate=In,Wn.pointLights.needsUpdate=In,Wn.pointLightShadows.needsUpdate=In,Wn.spotLights.needsUpdate=In,Wn.spotLightShadows.needsUpdate=In,Wn.rectAreaLights.needsUpdate=In,Wn.hemisphereLights.needsUpdate=In),Rn&&Ge.fog===!0&&je.refreshFogUniforms(Ai,Rn),je.refreshMaterialUniforms(Ai,Ge,re,le,g.state.transmissionRenderTarget[Xe.id]),ds.upload(U,fd(Ke),Ai,$));var Wn,In;if(Ge.isShaderMaterial&&Ge.uniformsNeedUpdate===!0&&(ds.upload(U,fd(Ke),Ai,$),Ge.uniformsNeedUpdate=!1),Ge.isSpriteMaterial&&wt.setValue(U,"center",Fe.center),wt.setValue(U,"modelViewMatrix",Fe.modelViewMatrix),wt.setValue(U,"normalMatrix",Fe.normalMatrix),wt.setValue(U,"modelMatrix",Fe.matrixWorld),Ge.isShaderMaterial||Ge.isRawShaderMaterial){let vn=Ge.uniformsGroups;for(let Tc=0,Cf=vn.length;Tc<Cf;Tc++){let xd=vn[Tc];ci.update(xd,nr),ci.bind(xd,nr)}}return nr})(R,j,Y,ne,q);F.setMaterial(ne,ge);let Ee=Y.index,Pe=1;if(ne.wireframe===!0){if(Ee=_e.getWireframeAttribute(Y),Ee===void 0)return;Pe=2}let De=Y.drawRange,Le=Y.attributes.position,He=De.start*Pe,dt=(De.start+De.count)*Pe;se!==null&&(He=Math.max(He,se.start*Pe),dt=Math.min(dt,(se.start+se.count)*Pe)),Ee!==null?(He=Math.max(He,0),dt=Math.min(dt,Ee.count)):Le!=null&&(He=Math.max(He,0),dt=Math.min(dt,Le.count));let yt=dt-He;if(yt<0||yt===1/0)return;let St;An.setup(q,ne,ve,Y,Ee);let pt=xe;if(Ee!==null&&(St=oe.get(Ee),pt=rt,pt.setIndex(St)),q.isMesh)ne.wireframe===!0?(F.setLineWidth(ne.wireframeLinewidth*b()),pt.setMode(U.LINES)):pt.setMode(U.TRIANGLES);else if(q.isLine){let Xe=ne.linewidth;Xe===void 0&&(Xe=1),F.setLineWidth(Xe*b()),q.isLineSegments?pt.setMode(U.LINES):q.isLineLoop?pt.setMode(U.LINE_LOOP):pt.setMode(U.LINE_STRIP)}else q.isPoints?pt.setMode(U.POINTS):q.isSprite&&pt.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)qr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(C.get("WEBGL_multi_draw"))pt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Xe=q._multiDrawStarts,gt=q._multiDrawCounts,Ot=q._multiDrawCount,Ge=Ee?oe.get(Ee).bytesPerElement:1,Fe=H.get(ne).currentProgram.getUniforms();for(let Rn=0;Rn<Ot;Rn++)Fe.setValue(U,"_gl_DrawID",Rn),pt.render(Xe[Rn]/Ge,gt[Rn])}else if(q.isInstancedMesh)pt.renderInstances(He,yt,q.count);else if(Y.isInstancedBufferGeometry){let Xe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,gt=Math.min(Y.instanceCount,Xe);pt.renderInstances(He,yt,gt)}else pt.render(He,yt)},this.compile=function(R,j,Y=null){Y===null&&(Y=R),g=nt.get(Y),g.init(j),y.push(g),Y.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),R!==Y&&R.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights();let ne=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let se=q.material;if(se)if(Array.isArray(se))for(let ge=0;ge<se.length;ge++){let ve=se[ge];yc(ve,Y,q),ne.add(ve)}else yc(se,Y,q),ne.add(se)}),g=y.pop(),ne},this.compileAsync=function(R,j,Y=null){let ne=this.compile(R,j,Y);return new Promise(q=>{function se(){ne.forEach(function(ge){H.get(ge).currentProgram.isReady()&&ne.delete(ge)}),ne.size!==0?setTimeout(se,10):q(R)}C.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let xc=null;function hd(){tr.stop()}function ud(){tr.start()}let tr=new wm;function bc(R,j,Y,ne){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ue.intersectsSprite(R)){ne&&S.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ue);let se=Me.update(R),ge=R.material;ge.visible&&m.push(R,se,ge,Y,S.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ue.intersectsObject(R))){let se=Me.update(R),ge=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),S.copy(R.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),S.copy(se.boundingSphere.center)),S.applyMatrix4(R.matrixWorld).applyMatrix4(Ue)),Array.isArray(ge)){let ve=se.groups;for(let Ee=0,Pe=ve.length;Ee<Pe;Ee++){let De=ve[Ee],Le=ge[De.materialIndex];Le&&Le.visible&&m.push(R,se,Le,Y,S.z,De)}}else ge.visible&&m.push(R,se,ge,Y,S.z,null)}}let q=R.children;for(let se=0,ge=q.length;se<ge;se++)bc(q[se],j,Y,ne)}function dd(R,j,Y,ne){let q=R.opaque,se=R.transmissive,ge=R.transparent;g.setupLightsView(Y),he===!0&&fe.setGlobalState(x.clippingPlanes,Y),ne&&F.viewport(G.copy(ne)),q.length>0&&so(q,j,Y),se.length>0&&so(se,j,Y),ge.length>0&&so(ge,j,Y),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function pd(R,j,Y,ne){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ne.id]===void 0&&(g.state.transmissionRenderTarget[ne.id]=new Qn(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")||C.has("EXT_color_buffer_float")?cs:ri,minFilter:mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let q=g.state.transmissionRenderTarget[ne.id],se=ne.viewport||G;q.setSize(se.z*x.transmissionResolutionScale,se.w*x.transmissionResolutionScale);let ge=x.getRenderTarget(),ve=x.getActiveCubeFace(),Ee=x.getActiveMipmapLevel();x.setRenderTarget(q),x.getClearColor(W),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),N&&We.render(Y);let Pe=x.toneMapping;x.toneMapping=vi;let De=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),g.setupLightsView(ne),he===!0&&fe.setGlobalState(x.clippingPlanes,ne),so(R,Y,ne),$.updateMultisampleRenderTarget(q),$.updateRenderTargetMipmap(q),C.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let He=0,dt=j.length;He<dt;He++){let yt=j[He],St=yt.object,pt=yt.geometry,Xe=yt.material,gt=yt.group;if(Xe.side===mt&&St.layers.test(ne.layers)){let Ot=Xe.side;Xe.side=gn,Xe.needsUpdate=!0,md(St,Y,ne,pt,Xe,gt),Xe.side=Ot,Xe.needsUpdate=!0,Le=!0}}Le===!0&&($.updateMultisampleRenderTarget(q),$.updateRenderTargetMipmap(q))}x.setRenderTarget(ge,ve,Ee),x.setClearColor(W,Q),De!==void 0&&(ne.viewport=De),x.toneMapping=Pe}function so(R,j,Y){let ne=j.isScene===!0?j.overrideMaterial:null;for(let q=0,se=R.length;q<se;q++){let ge=R[q],ve=ge.object,Ee=ge.geometry,Pe=ge.group,De=ge.material;De.allowOverride===!0&&ne!==null&&(De=ne),ve.layers.test(Y.layers)&&md(ve,j,Y,Ee,De,Pe)}}function md(R,j,Y,ne,q,se){R.onBeforeRender(x,j,Y,ne,q,se),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(x,j,Y,ne,R,se),q.transparent===!0&&q.side===mt&&q.forceSinglePass===!1?(q.side=gn,q.needsUpdate=!0,x.renderBufferDirect(Y,j,ne,q,R,se),q.side=ss,q.needsUpdate=!0,x.renderBufferDirect(Y,j,ne,q,R,se),q.side=mt):x.renderBufferDirect(Y,j,ne,q,R,se),R.onAfterRender(x,j,Y,ne,q,se)}function ao(R,j,Y){j.isScene!==!0&&(j=O);let ne=H.get(R),q=g.state.lights,se=g.state.shadowsArray,ge=q.state.version,ve=we.getParameters(R,q.state,se,j,Y),Ee=we.getProgramCacheKey(ve),Pe=ne.programs;ne.environment=R.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(R.isMeshStandardMaterial?me:ae).get(R.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Pe===void 0&&(R.addEventListener("dispose",ro),Pe=new Map,ne.programs=Pe);let De=Pe.get(Ee);if(De!==void 0){if(ne.currentProgram===De&&ne.lightsStateVersion===ge)return gd(R,ve),De}else ve.uniforms=we.getUniforms(R),R.onBeforeCompile(ve,x),De=we.acquireProgram(ve,Ee),Pe.set(Ee,De),ne.uniforms=ve.uniforms;let Le=ne.uniforms;return(R.isShaderMaterial||R.isRawShaderMaterial)&&R.clipping!==!0||(Le.clippingPlanes=fe.uniform),gd(R,ve),ne.needsLights=(function(He){return He.isMeshLambertMaterial||He.isMeshToonMaterial||He.isMeshPhongMaterial||He.isMeshStandardMaterial||He.isShadowMaterial||He.isShaderMaterial&&He.lights===!0})(R),ne.lightsStateVersion=ge,ne.needsLights&&(Le.ambientLightColor.value=q.state.ambient,Le.lightProbe.value=q.state.probe,Le.directionalLights.value=q.state.directional,Le.directionalLightShadows.value=q.state.directionalShadow,Le.spotLights.value=q.state.spot,Le.spotLightShadows.value=q.state.spotShadow,Le.rectAreaLights.value=q.state.rectArea,Le.ltc_1.value=q.state.rectAreaLTC1,Le.ltc_2.value=q.state.rectAreaLTC2,Le.pointLights.value=q.state.point,Le.pointLightShadows.value=q.state.pointShadow,Le.hemisphereLights.value=q.state.hemi,Le.directionalShadowMap.value=q.state.directionalShadowMap,Le.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Le.spotShadowMap.value=q.state.spotShadowMap,Le.spotLightMatrix.value=q.state.spotLightMatrix,Le.spotLightMap.value=q.state.spotLightMap,Le.pointShadowMap.value=q.state.pointShadowMap,Le.pointShadowMatrix.value=q.state.pointShadowMatrix),ne.currentProgram=De,ne.uniformsList=null,De}function fd(R){if(R.uniformsList===null){let j=R.currentProgram.getUniforms();R.uniformsList=ds.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function gd(R,j){let Y=H.get(R);Y.outputColorSpace=j.outputColorSpace,Y.batching=j.batching,Y.batchingColor=j.batchingColor,Y.instancing=j.instancing,Y.instancingColor=j.instancingColor,Y.instancingMorph=j.instancingMorph,Y.skinning=j.skinning,Y.morphTargets=j.morphTargets,Y.morphNormals=j.morphNormals,Y.morphColors=j.morphColors,Y.morphTargetsCount=j.morphTargetsCount,Y.numClippingPlanes=j.numClippingPlanes,Y.numIntersection=j.numClipIntersection,Y.vertexAlphas=j.vertexAlphas,Y.vertexTangents=j.vertexTangents,Y.toneMapping=j.toneMapping}tr.setAnimationLoop(function(R){xc&&xc(R)}),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(R){xc=R,ft.setAnimationLoop(R),R===null?tr.stop():tr.start()},ft.addEventListener("sessionstart",hd),ft.addEventListener("sessionend",ud),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(j),j=ft.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,j,P),g=nt.get(R,y.length),g.init(j),y.push(g),Ue.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ue.setFromProjectionMatrix(Ue,_i,j.reversedDepth),Ae=this.localClippingEnabled,he=fe.init(this.clippingPlanes,Ae),m=tt.get(R,v.length),m.init(),v.push(m),ft.enabled===!0&&ft.isPresenting===!0){let se=x.xr.getDepthSensingMesh();se!==null&&bc(se,j,-1/0,x.sortObjects)}bc(R,j,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ye,Se),N=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,N&&We.addToRenderList(m,R),this.info.render.frame++,he===!0&&fe.beginShadows();let Y=g.state.shadowsArray;Re.render(Y,R,j),he===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let ne=m.opaque,q=m.transmissive;if(g.setupLights(),j.isArrayCamera){let se=j.cameras;if(q.length>0)for(let ge=0,ve=se.length;ge<ve;ge++)pd(ne,q,R,se[ge]);N&&We.render(R);for(let ge=0,ve=se.length;ge<ve;ge++){let Ee=se[ge];dd(m,R,Ee,Ee.viewport)}}else q.length>0&&pd(ne,q,R,j),N&&We.render(R),dd(m,R,j);P!==null&&A===0&&($.updateMultisampleRenderTarget(P),$.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(x,R,j),An.resetDefaultState(),L=-1,z=null,y.pop(),y.length>0?(g=y[y.length-1],he===!0&&fe.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,j,Y){let ne=H.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),H.get(R.texture).__webglTexture=j,H.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:Y,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){let Y=H.get(R);Y.__webglFramebuffer=j,Y.__useDefaultFramebuffer=j===void 0};let Sf=U.createFramebuffer();this.setRenderTarget=function(R,j=0,Y=0){P=R,T=j,A=Y;let ne=!0,q=null,se=!1,ge=!1;if(R){let ve=H.get(R);if(ve.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(U.FRAMEBUFFER,null),ne=!1;else if(ve.__webglFramebuffer===void 0)$.setupRenderTarget(R);else if(ve.__hasExternalTextures)$.rebindTextures(R,H.get(R.texture).__webglTexture,H.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let De=R.depthTexture;if(ve.__boundDepthTexture!==De){if(De!==null&&H.has(De)&&(R.width!==De.image.width||R.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(R)}}let Ee=R.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);let Pe=H.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(q=Array.isArray(Pe[j])?Pe[j][Y]:Pe[j],se=!0):q=R.samples>0&&$.useMultisampledRTT(R)===!1?H.get(R).__webglMultisampledFramebuffer:Array.isArray(Pe)?Pe[Y]:Pe,G.copy(R.viewport),B.copy(R.scissor),J=R.scissorTest}else G.copy(be).multiplyScalar(re).floor(),B.copy(Ce).multiplyScalar(re).floor(),J=ce;if(Y!==0&&(q=Sf),F.bindFramebuffer(U.FRAMEBUFFER,q)&&ne&&F.drawBuffers(R,q),F.viewport(G),F.scissor(B),F.setScissorTest(J),se){let ve=H.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve.__webglTexture,Y)}else if(ge){let ve=j;for(let Ee=0;Ee<R.textures.length;Ee++){let Pe=H.get(R.textures[Ee]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ee,Pe.__webglTexture,Y,ve)}}else if(R!==null&&Y!==0){let ve=H.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ve.__webglTexture,Y)}L=-1},this.readRenderTargetPixels=function(R,j,Y,ne,q,se,ge,ve=0){if(!R||!R.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=H.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){F.bindFramebuffer(U.FRAMEBUFFER,Ee);try{let Pe=R.textures[ve],De=Pe.format,Le=Pe.type;if(!k.textureFormatReadable(De))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(Le))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");j>=0&&j<=R.width-ne&&Y>=0&&Y<=R.height-q&&(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve),U.readPixels(j,Y,ne,q,qe.convert(De),qe.convert(Le),se))}finally{let Pe=P!==null?H.get(P).__webglFramebuffer:null;F.bindFramebuffer(U.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(R,j,Y,ne,q,se,ge,ve=0){if(!R||!R.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=H.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){if(j>=0&&j<=R.width-ne&&Y>=0&&Y<=R.height-q){F.bindFramebuffer(U.FRAMEBUFFER,Ee);let Pe=R.textures[ve],De=Pe.format,Le=Pe.type;if(!k.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let He=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,He),U.bufferData(U.PIXEL_PACK_BUFFER,se.byteLength,U.STREAM_READ),R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve),U.readPixels(j,Y,ne,q,qe.convert(De),qe.convert(Le),0);let dt=P!==null?H.get(P).__webglFramebuffer:null;F.bindFramebuffer(U.FRAMEBUFFER,dt);let yt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Xp(U,yt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,He),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,se),U.deleteBuffer(He),U.deleteSync(yt),se}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,j=null,Y=0){let ne=Math.pow(2,-Y),q=Math.floor(R.image.width*ne),se=Math.floor(R.image.height*ne),ge=j!==null?j.x:0,ve=j!==null?j.y:0;$.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,ge,ve,q,se),F.unbindTexture()};let wf=U.createFramebuffer(),Tf=U.createFramebuffer();this.copyTextureToTexture=function(R,j,Y=null,ne=null,q=0,se=null){let ge,ve,Ee,Pe,De,Le,He,dt,yt;se===null&&(q!==0?(qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=q,q=0):se=0);let St=R.isCompressedTexture?R.mipmaps[se]:R.image;if(Y!==null)ge=Y.max.x-Y.min.x,ve=Y.max.y-Y.min.y,Ee=Y.isBox3?Y.max.z-Y.min.z:1,Pe=Y.min.x,De=Y.min.y,Le=Y.isBox3?Y.min.z:0;else{let Vn=Math.pow(2,-q);ge=Math.floor(St.width*Vn),ve=Math.floor(St.height*Vn),Ee=R.isDataArrayTexture?St.depth:R.isData3DTexture?Math.floor(St.depth*Vn):1,Pe=0,De=0,Le=0}ne!==null?(He=ne.x,dt=ne.y,yt=ne.z):(He=0,dt=0,yt=0);let pt=qe.convert(j.format),Xe=qe.convert(j.type),gt;j.isData3DTexture?($.setTexture3D(j,0),gt=U.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?($.setTexture2DArray(j,0),gt=U.TEXTURE_2D_ARRAY):($.setTexture2D(j,0),gt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment);let Ot=U.getParameter(U.UNPACK_ROW_LENGTH),Ge=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Fe=U.getParameter(U.UNPACK_SKIP_PIXELS),Rn=U.getParameter(U.UNPACK_SKIP_ROWS),Mc=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,St.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,St.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Pe),U.pixelStorei(U.UNPACK_SKIP_ROWS,De),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Le);let oo=R.isDataArrayTexture||R.isData3DTexture,Ti=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){let Vn=H.get(R),wr=H.get(j),hi=H.get(Vn.__renderTarget),Ec=H.get(wr.__renderTarget);F.bindFramebuffer(U.READ_FRAMEBUFFER,hi.__webglFramebuffer),F.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ec.__webglFramebuffer);for(let Tr=0;Tr<Ee;Tr++)oo&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(R).__webglTexture,q,Le+Tr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(j).__webglTexture,se,yt+Tr)),U.blitFramebuffer(Pe,De,ge,ve,He,dt,ge,ve,U.DEPTH_BUFFER_BIT,U.NEAREST);F.bindFramebuffer(U.READ_FRAMEBUFFER,null),F.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||H.has(R)){let Vn=H.get(R),wr=H.get(j);F.bindFramebuffer(U.READ_FRAMEBUFFER,wf),F.bindFramebuffer(U.DRAW_FRAMEBUFFER,Tf);for(let hi=0;hi<Ee;hi++)oo?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Vn.__webglTexture,q,Le+hi):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Vn.__webglTexture,q),Ti?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wr.__webglTexture,se,yt+hi):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wr.__webglTexture,se),q!==0?U.blitFramebuffer(Pe,De,ge,ve,He,dt,ge,ve,U.COLOR_BUFFER_BIT,U.NEAREST):Ti?U.copyTexSubImage3D(gt,se,He,dt,yt+hi,Pe,De,ge,ve):U.copyTexSubImage2D(gt,se,He,dt,Pe,De,ge,ve);F.bindFramebuffer(U.READ_FRAMEBUFFER,null),F.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ti?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(gt,se,He,dt,yt,ge,ve,Ee,pt,Xe,St.data):j.isCompressedArrayTexture?U.compressedTexSubImage3D(gt,se,He,dt,yt,ge,ve,Ee,pt,St.data):U.texSubImage3D(gt,se,He,dt,yt,ge,ve,Ee,pt,Xe,St):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,se,He,dt,ge,ve,pt,Xe,St.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,se,He,dt,St.width,St.height,pt,St.data):U.texSubImage2D(U.TEXTURE_2D,se,He,dt,ge,ve,pt,Xe,St);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ot),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ge),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Fe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Rn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Mc),se===0&&j.generateMipmaps&&U.generateMipmap(gt),F.unbindTexture()},this.initRenderTarget=function(R){H.get(R).__webglFramebuffer===void 0&&$.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?$.setTextureCube(R,0):R.isData3DTexture?$.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?$.setTexture2DArray(R,0):$.setTexture2D(R,0),F.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,F.reset(),An.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var Im={type:"change"},Su={type:"start"},Lm={type:"end"},tc=new ei,Pm=new xn,G0=Math.cos(70*nu.DEG2RAD),It=new E,on=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eu=1e-6,nc=class extends Sa{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new sn,this._lastTargetPosition=new E,this._quat=new sn().setFromUnitVectors(e.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rs,this._sphericalDelta=new rs,this._scale=1,this._panOffset=new E,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new E,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=W0.bind(this),this._onPointerDown=V0.bind(this),this._onPointerUp=$0.bind(this),this._onContextMenu=J0.bind(this),this._onMouseWheel=X0.bind(this),this._onKeyDown=K0.bind(this),this._onTouchStart=Y0.bind(this),this._onTouchMove=Z0.bind(this),this._onMouseDown=j0.bind(this),this._onMouseMove=q0.bind(this),this._interceptControlDown=Q0.bind(this),this._interceptControlUp=e_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Im),this.update(),this.state=ct.NONE}update(e=null){let t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),r<-Math.PI?r+=on:r>Math.PI&&(r-=on),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=It.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let o=new E(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new E(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(tc.origin.copy(this.object.position),tc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tc.direction))<G0?this.object.lookAt(this.target):(Pm.setFromNormalAndCoplanarPoint(this.object.up,this.target),tc.intersectPlane(Pm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Eu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eu||this._lastTargetPosition.distanceToSquared(this.target)>Eu?(this.dispatchEvent(Im),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;It.copy(r).sub(this.target);let s=It.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function V0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function W0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function $0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lm),this.state=ct.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function j0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ct.DOLLY;break;case zi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}break;case zi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Su)}function q0(i){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function X0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(i.preventDefault(),this.dispatchEvent(Su),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Lm))}function K0(i){this.enabled!==!1&&this._handleKeyDown(i)}function Y0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ct.TOUCH_ROTATE;break;case Hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ct.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Su)}function Z0(i){switch(this._trackPointer(i),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ct.NONE}}function J0(i){this.enabled!==!1&&i.preventDefault()}function Q0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Da=new E;function En(i,e,t,n,r,s){let a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;Da.copy(e),Da[n]=0,Da.normalize();let l=.5*a/(a+o),h=1-Da.angleTo(i)/c;return Math.sign(Da[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Pt=class i extends Ve{constructor(e=1,t=1,n=1,r=2,s=.1){let a=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new E,l=new E,h=new E(e,t,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,f=d.length/6,_=new E,m=.5/a;for(let g=0,v=0;g<d.length;g+=3,v+=2)switch(c.fromArray(d,g),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[g+0]=h.x*Math.sign(c.x)+l.x*s,d[g+1]=h.y*Math.sign(c.y)+l.y*s,d[g+2]=h.z*Math.sign(c.z)+l.z*s,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:_.set(1,0,0),p[v+0]=En(_,l,"z","y",s,n),p[v+1]=1-En(_,l,"y","z",s,t);break;case 1:_.set(-1,0,0),p[v+0]=1-En(_,l,"z","y",s,n),p[v+1]=1-En(_,l,"y","z",s,t);break;case 2:_.set(0,1,0),p[v+0]=1-En(_,l,"x","z",s,e),p[v+1]=En(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),p[v+0]=1-En(_,l,"x","z",s,e),p[v+1]=1-En(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),p[v+0]=1-En(_,l,"x","y",s,e),p[v+1]=1-En(_,l,"y","x",s,t);break;case 5:_.set(0,0,-1),p[v+0]=En(_,l,"x","y",s,e),p[v+1]=1-En(_,l,"y","x",s,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var X=window.STRUKTUR,Pu=window.MODUL_TEXTE||{},Ye=1.6,Sn=1.9,Ba=2.1,Ss="uzh-kompetenzhaus-v1",Lu={"001":{fa:["Fa1","Fa3","Fa4"],ki:["KI1","KI6"],fu:["Fu2"],haupt:["Fa1","Fa3"],kat:"A"},"002":{fa:["Fa1","Fa2","Fa4","Fa9"],ki:["KI4"],fu:["Fu2"],haupt:["Fa1","Fa2"],kat:"A"},"003":{fa:["Fa10","Fa6","Fa7"],ki:["KI1","KI4","KI5","KI6"],fu:["Fu1","Fu2","Fu3"],haupt:["Fa10","KI5"],kat:"B"},100:{fa:["Fa5","Fa3","Fa4","Fa10"],ki:["KI4","KI6"],fu:["Fu2"],haupt:["Fa5","Fa3"],kat:"A+B"},101:{fa:["Fa3","Fa2","Fa4"],ki:["KI1","KI6"],fu:["Fu1"],haupt:["Fa3"],kat:"B"},102:{fa:["Fa2","Fa6","Fa3","Fa7","Fa10"],ki:["KI1","KI2","KI3","KI5"],fu:["Fu1","Fu3"],haupt:["Fa2","Fa6"],kat:"B"},103:{fa:["Fa3","Fa2","Fa4"],ki:["KI4","KI6","KI1"],fu:["Fu2"],haupt:["Fa3","KI4"],kat:"A"},200:{fa:["Fa1","Fa4"],ki:["KI4"],fu:["Fu2"],haupt:["Fa1","Fa4"],kat:"A"},201:{fa:["Fa1","Fa2"],ki:["KI4"],fu:["Fu2"],haupt:["Fa1"],kat:"A"},s11:{fa:["Fa4","Fa6","Fa1"],ki:["KI6","KI1"],fu:["Fu1"],haupt:["Fa4","Fa6"],kat:"B"},300:{fa:["Fa1","Fa5","Fa4","Fa9"],ki:["KI6"],fu:["Fu2"],haupt:["Fa1","Fa5"],kat:"A"},301:{fa:["Fa1","Fa8","Fa5"],ki:["KI3"],fu:["Fu3"],haupt:["Fa1","Fa8"],kat:"A+B"},302:{fa:["Fa1","Fa8","Fa5"],ki:["KI3"],fu:["Fu3"],haupt:["Fa1","Fa8"],kat:"A+B"},s13:{fa:["Fa4","Fa6","Fa1"],ki:["KI1","KI6","KI5"],fu:["Fu1"],haupt:["Fa4","Fa6"],kat:"B"},400:{fa:["Fa1","Fa8","Fa5","Fa7","Fa9"],ki:["KI5","KI6","KI3"],fu:["Fu3"],haupt:["Fa1","Fa8","Fa7"],kat:"A+B"},401:{fa:["Fa1","Fa8"],ki:[],fu:[],haupt:["Fa1"],kat:"A"},402:{fa:["Fa8","Fa1","Fa10"],ki:["KI6"],fu:["Fu2"],haupt:["Fa8","Fa1"],kat:"B"},403:{fa:["Fa1","Fa8","Fa9"],ki:[],fu:[],haupt:["Fa1"],kat:"A"},s12:{fa:["Fa4","Fa6","Fa1"],ki:["KI6","KI2"],fu:["Fu1"],haupt:["Fa4","Fa6"],kat:"B"},BA:{fa:["Fa6","Fa4","Fa2","Fa7","Fa10"],ki:["KI5","KI6","KI3","KI1"],fu:["Fu1","Fu2","Fu3"],haupt:["Fa6","Fa4","Fa7"],kat:"B"},500:{fa:["Fa3","Fa2","Fa4"],ki:["KI4","KI1"],fu:["Fu2"],haupt:["Fa3","KI4"],kat:"A+B"},501:{fa:["Fa5","Fa7","Fa4","Fa6"],ki:["KI6","KI5"],fu:["Fu1"],haupt:["Fa5","KI6"],kat:"B/C"},502:{fa:["Fa1","Fa8"],ki:["KI5"],fu:["Fu3"],haupt:["Fa1","Fa8"],kat:"B"},wp:{fa:["Fa1","Fa4","Fa8"],ki:["KI6"],fu:["Fu1"],haupt:["Fa1"],kat:"A"},s04:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s05:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s06:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s07:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s08:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s09:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s01a:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},s01b:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},s01c:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},s01d:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},600:{fa:["Fa8","Fa10","Fa7","Fa6"],ki:["KI5","KI3","KI1"],fu:["Fu3","Fu2"],haupt:["Fa8","Fa10"],kat:"B"},s02a:{fa:["Fa1","Fa4"],ki:[],fu:[],haupt:["Fa1","Fa4"],kat:"A"},s02b:{fa:["Fa1","Fa4"],ki:[],fu:[],haupt:["Fa1","Fa4"],kat:"A"},s03:{fa:["Fa2","Fa3"],ki:["KI1","KI4","KI2"],fu:["Fu1"],haupt:["Fa2","Fa3"],kat:"B/C"},MA:{fa:["Fa2","Fa3","Fa6","Fa7","Fa10"],ki:["KI1","KI2","KI3","KI5","KI6"],fu:["Fu1","Fu2","Fu3"],haupt:["Fa2","Fa3","Fa6"],kat:"B"},901:{fa:["Fa2","Fa6"],ki:[],fu:["Fu2"],haupt:["Fa2"],kat:"A"},902:{fa:["Fa6","Fa4"],ki:["KI6"],fu:["Fu2"],haupt:["Fa6","Fa4"],kat:"A"},903:{fa:["Fa2","Fa6"],ki:[],fu:["Fu2"],haupt:["Fa2"],kat:"A"},904:{fa:["Fa6","Fa4"],ki:["KI6"],fu:["Fu2"],haupt:["Fa6","Fa4"],kat:"A"},909:{fa:["Fa1","Fa4","Fa6"],ki:["KI5","KI6"],fu:["Fu2"],haupt:["Fa1","Fa4"],kat:"A"}},ws=()=>({v:3,lang:"de",mode:"frei",name:"",direktMSc:!1,onboarded:!1,placed:{frei:{},serious:{}},bestanden:{},quests:{},quiz:{},fb:{},msSeen:{frei:[],serious:[]},nachbarn:[],season:qu(),tod:35,sound:!0,envAuto:!0,p0:[!1,!1,!1,!1],minor:[!1,!1,!1,!1,!1,!1],pal:{bsc:"uzh",msc:"uzh"},wzSeen:{frei:[],serious:[]},cardSize:"m"});function qu(){let i=new Date().getMonth()+1;return i>=3&&i<=5?"fruehling":i>=6&&i<=8?"sommer":i>=9&&i<=11?"herbst":"winter"}var Ja=!0;try{localStorage.setItem(Ss+"-t","1"),localStorage.removeItem(Ss+"-t")}catch{Ja=!1}var I=ws();if(Ja)try{let i=localStorage.getItem(Ss);i&&(I=Object.assign(ws(),JSON.parse(i)))}catch{}var Dm=null;function it(){Ja&&(Bt.active||(clearTimeout(Dm),Dm=setTimeout(()=>{try{localStorage.setItem(Ss,JSON.stringify(I))}catch{}},300)))}var D=i=>window.T[I.lang]&&window.T[I.lang][i]||window.T.de[i]||i,Z=i=>i&&(i[I.lang]||i.de)||"";function Xu(){document.querySelectorAll("[data-aria]").forEach(i=>{let e=D(i.getAttribute("data-aria"));e&&i.setAttribute("aria-label",e)}),document.querySelectorAll("[data-i18n]").forEach(i=>{let e=i.getAttribute("data-i18n"),t=D(e);t&&(i.innerHTML=(t.startsWith("\u2B07")||t.startsWith("\u2912")||t.startsWith("\u{1F5D1}")||t.startsWith("\u2753")||t.startsWith("\u{1F512}")||t.startsWith("\u2139\uFE0F")||i.tagName==="LI",t)),t&&(i.innerHTML=t)}),document.getElementById("btnLang").textContent=I.lang==="de"?"EN":"DE",document.documentElement.lang=I.lang}var vt={};X.slots.forEach(i=>vt[i.slot]=i);var nn={};(X.optionsmodule||[]).forEach(i=>nn[i.code]=i);var ln={};X.kompetenzen.forEach(i=>ln[i.id]=i);function Ku(i){let e=I.placed[I.mode][i.slot],t=typeof Si<"u"&&i.optionen&&i.optionen.includes(Si)&&Gn===i.slot?Si:null,n=e&&e.opt||t||i.code;return Pu[n]||null}var xi={sp:{DeNC:{fa:["Fa2"],ki:["KI4"]},HEA:{fa:["Fa5","Fa8"],ki:[]},SEOP:{fa:["Fa8","Fa9"],ki:["KI3"]}},r:{klin:{fa:["Fa5","Fa8"],ki:[]},ekn:{fa:["Fa2"],ki:["KI4"]},swo:{fa:["Fa9"],ki:["KI3"]}},form:{daten:{fa:["Fa3"],ki:[]},repro:{fa:["Fa3","Fa4"],ki:[]},review:{fa:["Fa4"],ki:["KI6"]}}};function Jt(i){let e=Ku(i),t=e&&e.komp?{komp:e.komp,haupt:e.haupt||[],kat:e.kat||(Lu[i.slot]||{}).kat||"B"}:(()=>{let c=Lu[i.slot]||{fa:[],ki:[],fu:[],haupt:[],kat:"B"};return{komp:{fa:c.fa,ki:c.ki,fu:c.fu},haupt:c.haupt,kat:c.kat}})(),n=I.placed[I.mode][i.slot],r=[];if(n){if(i.schwerpunktwahl&&n.sp&&xi.sp[n.sp]&&r.push(xi.sp[n.sp]),n.thema){let c=(Xi[i.slot]||[]).find(l=>l.id===n.thema);c&&xi.r[c.r]&&r.push(xi.r[c.r])}if(i.slot==="BA"&&n.frage){let c=((X.baFragen||{})[n.thema]||[]).find(l=>l.id===n.frage);c&&xi.form[c.form]&&r.push(xi.form[c.form])}}if(!r.length)return t;let s=[...t.komp.fa],a=[...t.komp.ki],o=[...t.haupt||[]];for(let c of r)(c.fa||[]).forEach(l=>{s.includes(l)||s.push(l),o.includes(l)||o.push(l)}),(c.ki||[]).forEach(l=>{a.includes(l)||a.push(l),o.includes(l)||o.push(l)});return{komp:{fa:s,ki:a,fu:t.komp.fu},haupt:o,kat:t.kat}}function qm(i){let e=Pu[i.code]||null,t=e&&e.komp?{fa:e.komp.fa||[],ki:e.komp.ki||[],fu:e.komp.fu||[],haupt:e.haupt||[]}:(()=>{let o=Lu[i.slot]||{fa:[],ki:[],fu:[],haupt:[]};return{fa:o.fa,ki:o.ki,fu:o.fu,haupt:o.haupt}})(),n=[...t.fa],r=[...t.ki],s=[...t.haupt||[]],a=(o,c)=>{(o.fa||[]).forEach(l=>{n.includes(l)||n.push(l),c&&!s.includes(l)&&s.push(l)}),(o.ki||[]).forEach(l=>{r.includes(l)||r.push(l),c&&!s.includes(l)&&s.push(l)})};return i.schwerpunktwahl&&Object.values(xi.sp).forEach(o=>a(o,!0)),Xi[i.slot]&&Object.values(xi.r).forEach(o=>a(o,!0)),i.slot==="BA"&&Object.values(xi.form).forEach(o=>a(o,!0)),i.optionen&&i.optionen.forEach(o=>{let c=Pu[o];c&&c.komp&&a({fa:c.komp.fa,ki:c.komp.ki},!1)}),{komp:{fa:n,ki:r,fu:t.fu},haupt:s}}function kt(i){let e=I.placed[I.mode][i.slot];return e&&e.opt&&nn[e.opt]?Z(nn[e.opt].titel):Z(i.titel)}var Bt={active:!1,data:null},Xi=X.themen||{},Du={};(X.paletten||[]).forEach(i=>Du[i.id]=i);function t_(i){return Du[I.pal&&I.pal[i]||"uzh"]||Du.uzh||{rahmen:"#f2f0e9",dach:null,holz:"#8a6642",akzent:"#0028a5"}}function Xm(i,e){let t=e||I.placed[I.mode][i];return!t||!t.thema?null:(Xi[i]||[]).find(n=>n.id===t.thema)||null}function As(){let i={klin:0,ekn:0,swo:0};for(let r of["s11","s12","s13","BA"]){let s=Xm(r);s&&i[s.r]!==void 0&&i[s.r]++}let e=null,t=0,n=!1;for(let r of Object.keys(i))i[r]>t?(e=r,t=i[r],n=!1):i[r]===t&&t>0&&(n=!0);return{counts:i,r:t>=2&&!n?e:null}}function Rs(){let i={DeNC:0,HEA:0,SEOP:0};for(let t of["s04","s05","s06","s07","s08","s09"]){let n=I.placed[I.mode][t];n&&n.sp&&i[n.sp]!==void 0&&i[n.sp]++}let e=null;for(let t of Object.keys(i))i[t]>=4&&(e=t);return{counts:i,dom:e,total:i.DeNC+i.HEA+i.SEOP}}function bs(){let i=I.placed[I.mode].wp;return i&&i.opt||null}function ji(){let i=I.placed[I.mode].BA;return!i||!i.thema||!i.frage?null:((X.baFragen||{})[i.thema]||[]).find(e=>e.id===i.frage)||null}function Ms(){let i=I.placed[I.mode].BA;return!i||!i.artefakt?null:(X.baArtefakte||[]).find(e=>e.id===i.artefakt)||null}function Qe(i,e){return!!I.placed[e||I.mode][i]}function Km(i){return Qe("BA",i||I.mode)||I.direktMSc}function Cs(i){if(i.optionen){let e=I.placed[I.mode][i.slot];return e&&e.opt||typeof Si<"u"&&Si||i.optionen[0]}return i.code}function Yu(i){return(window.QUIZ||{})[Cs(i)]||null}function Ym(i){return!!I.quiz[Cs(i)]}function wi(i,e){if(e=e||I.mode,Bt.active)return{ok:!1,reason:""};if(Qe(i.slot,e))return{ok:!1,reason:""};if(i.haus==="msc"&&!Km(e))return{ok:!1,reason:D("grund_msc")};let t=(i.voraus||[]).filter(n=>!Qe(n,e));if(t.length){let n=t.slice(0,3).map(r=>Z(vt[r].titel).split(",")[0]).join(" \xB7 ");return{ok:!1,reason:D("grund_voraus")+n+(t.length>3?" \u2026":"")}}return e==="serious"&&!I.bestanden[i.slot]?{ok:!1,reason:D("grund_bestanden")}:e==="serious"&&Yu(i)&&!Ym(i)?{ok:!1,reason:D("grund_quiz")}:{ok:!0,reason:""}}var oi=document.getElementById("c3d"),Tn;try{Tn=new Ql({canvas:oi,antialias:!0})}catch(i){throw document.body.insertAdjacentHTML("beforeend",'<div style="position:fixed;inset:0;z-index:99;display:grid;place-items:center;background:#f4f6fb;padding:24px"><div style="max-width:420px;text-align:center;font-family:Helvetica,Arial,sans-serif"><div style="font-size:40px">\u{1F3D7}\uFE0F</div><h2 style="color:#0028a5;margin:10px 0">3D wird hier nicht unterst\xFCtzt</h2><p style="color:#3c4356;line-height:1.5">Dein Browser kann WebGL gerade nicht starten. Bitte \xF6ffne das Kompetenzhaus in Safari, Chrome oder Firefox (nicht im In-App-Browser) \u2014 oder auf einem anderen Ger\xE4t.</p></div></div>'),i}Tn.setPixelRatio(Math.min(window.devicePixelRatio,2));Tn.shadowMap.enabled=!0;Tn.shadowMap.type=Rl;Tn.toneMapping=Ul;Tn.toneMappingExposure=1.05;var Ze=new ta,Dt=new zt(46,1,.1,400);Dt.position.set(-23,17,30);var Vt=new nc(Dt,oi);Vt.enableDamping=!0;Vt.dampingFactor=.06;Vt.maxPolarAngle=Math.PI*.49;Vt.minDistance=6;Vt.maxDistance=105;Vt.target.set(-7,3,0);var Zm=new va(12573183,9075285,.75);Ze.add(Zm);var tn=new ba(16771524,2.2);tn.castShadow=!0;tn.shadow.mapSize.set(2048,2048);tn.shadow.camera.left=-48;tn.shadow.camera.right=48;tn.shadow.camera.top=48;tn.shadow.camera.bottom=-48;tn.shadow.camera.far=120;tn.shadow.bias=-4e-4;tn.shadow.radius=6;Ze.add(tn);Ze.add(tn.target);Ze.fog=new ea(12574965,60,160);var Yi=new Oe;Ze.add(Yi);var uc=new ie({color:7319378,roughness:1}),Zu=new V(new $e(90,90,.6,48),uc);Zu.position.y=-.3;Zu.receiveShadow=!0;Yi.add(Zu);var Ju=new ie({color:13287336,roughness:.95}),Qu=new ie({color:14209730,roughness:1}),sc=new ie({color:10196876,roughness:.95});function Jm(i){let e=X.haeuser[i],t=new Oe,n=(e.breite+3.6)*Ye,r=(e.tiefe+3.6)*Ye,s=new V(new Ve(n,.24,r),Ju);return s.position.set(e.origin[0],.12,e.origin[2]),s.receiveShadow=!0,t.add(s),Yi.add(t),t}Jm("bsc");var n_=Jm("msc"),ed=new V(new Ve(9,.18,2.4),Qu);ed.position.set(0,.09,0);ed.receiveShadow=!0;Yi.add(ed);var ac=new ie({color:5149760,roughness:1,flatShading:!0}),i_=new ie({color:8018490,roughness:1}),r_=[[-26,-12],[-30,4],[-20,14],[26,-13],[31,3],[22,15],[-2,-17],[4,18],[-14,-18],[16,-18]];r_.forEach(([i,e],t)=>{let n=new Oe,r=new V(new $e(.22,.32,1.6,6),i_);r.position.y=.8,r.castShadow=!0;let s=1+t%3*.35;if(t%3===2){let a=new V(new Un(1.1*s,2.6*s,7),ac);a.position.y=1.6+1.1*s,a.castShadow=!0,n.add(a)}else{let a=new V(new At(1.35*s,0),ac);if(a.position.y=2.2+.5*s,a.castShadow=!0,n.add(a),t%3===1){let o=new V(new At(.8*s,0),ac);o.position.set(.7,1.8+.4*s,.3),o.castShadow=!0,n.add(o)}}n.add(r),n.position.set(i,0,e),n.rotation.y=t*1.7,Yi.add(n)});var Qm=new ie({color:6199880,roughness:1,flatShading:!0});[[-62,-42,26],[55,-48,30],[-72,22,22],[66,28,24],[-6,-75,36],[-42,62,26],[48,60,22],[8,70,28]].forEach(([i,e,t])=>{let n=new V(new fn(t,10,7),Qm);n.position.set(i,-t*.62,e),n.scale.y=.55,Yi.add(n)});var s_=new ie({color:10134197,roughness:1,flatShading:!0});[[-7,9,.5],[19,-9,.7],[-19,-10,.45],[3,-13,.6]].forEach(([i,e,t])=>{let n=new V(new At(t,0),s_);n.position.set(i,t*.55,e),n.rotation.set(t,i,e),n.castShadow=!0,Yi.add(n)});var a_=new At(.09,0),o_=new Xt,oc=new Ui(a_,o_,90);{let i=[16777215,16234452,15979342,13213951],e=new Ie,t=0;for(;t<90;){let n=(Math.random()-.5)*76,r=(Math.random()-.5)*52;Math.abs(n)<22&&Math.abs(r)<9||(e.makeScale(1,1+Math.random(),1),e.setPosition(n,.12,r),oc.setMatrixAt(t,e),oc.setColorAt(t,new de(i[t%i.length])),t++)}Yi.add(oc)}var Fu=new ie({color:16777215,roughness:1,flatShading:!0,transparent:!0,opacity:.92}),ef=[];for(let i=0;i<6;i++){let e=new Oe,t=3+i%3;for(let n=0;n<t;n++){let r=1.6+Math.random()*2.2,s=new V(new At(r,0),Fu);s.position.set(n*2.4-t,(Math.random()-.5)*.8,(Math.random()-.5)*1.6),s.scale.y=.55,e.add(s)}e.position.set((Math.random()-.5)*120,22+Math.random()*8,(Math.random()-.5)*80-10),e.userData.v=.25+Math.random()*.4,ef.push(e),Ze.add(e)}var Vi=new Oe;{let i=new V(new $e(.05,.06,.9,6),new ie({color:9070146,roughness:.9}));i.position.y=.45;let e=new V(new Pt(.55,.35,.32,2,.06),new ie({color:10405,roughness:.55}));e.position.y=1.02;let t=new V(new Je(.34,.045),new ie({color:16053488}));t.position.set(0,1.06,.17);let n=new V(new Je(.16,.11),new ie({color:14248523,side:mt}));n.position.set(.32,1.12,0),Vi.add(i,e,t,n),Vi.position.set(-3.4,.24,4.7),Vi.rotation.y=.4,Vi.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.userData.action="p0")}),Ze.add(Vi)}var $i=new Oe;{let i=new V(new Pt(4.4,.22,1.5,2,.06),new ie({color:7033144,roughness:1}));i.position.y=.11,i.receiveShadow=!0,$i.add(i),$i.position.set(-4.2,.24,8.2),$i.traverse(e=>{e.isMesh&&(e.userData.action="minor")}),Ze.add($i)}var Nu=new Oe;$i.add(Nu);function tf(){Nu.clear();let i=[14964526,15979342,13213951,16777215,16234452,8373098];(I.minor||[]).forEach((e,t)=>{if(e)for(let n=0;n<3;n++){let r=new V(new $e(.02,.025,.28,5),new ie({color:5149760}));r.position.set(-1.85+t*.74,.34,-.4+n*.4);let s=new V(new At(.09,0),new Xt({color:i[t]}));s.position.set(-1.85+t*.74,.52,-.4+n*.4),r.userData.action="minor",s.userData.action="minor",Nu.add(r,s)}})}var Wi=new Oe;{let i=new ie({color:10122576,roughness:.95}),e=new ie({color:7032627,roughness:.95}),t=new V(new Pt(2.6,1.9,1.9,2,.06),i);t.position.y=.95;let n=new V(Oa(3,2.3,.75),new ie({color:3752282,roughness:.85,flatShading:!0,side:mt}));n.position.y=1.9;let r=new V(new Je(.7,1.3),e);r.position.set(-.55,.66,.96);let s=new V(new Je(.85,.55),new ie({color:2766160,roughness:.3,metalness:.3}));s.position.set(.6,1.2,.96);let a=qa("\u{1F6E0}\uFE0F","#0028a5");a.scale.set(1.2,.48,1),a.position.set(0,3.05,0),Wi.add(t,n,r,s,a),Wi.position.set(-19.5,.02,10.4),Wi.rotation.y=.55,Wi.traverse(o=>{o.isMesh&&(o.castShadow=!0),o.userData.action="bauhuette"}),Ze.add(Wi)}var ms=new Oe;{let i=new ie({color:8227434,roughness:.95}),e=new ie({color:6187854,roughness:.95}),t=new V(new Pt(1.9,1.5,1.3,2,.05),i);t.position.y=.75;let n=new V(new Ve(2.15,.09,1.6),new ie({color:3752282,roughness:.85}));n.position.y=1.58,n.rotation.x=-.12;let r=new V(new Je(.6,1.1),e);r.position.set(-.35,.57,.66);let s=qa("\u{1F9F0}","#0e8f7e");s.scale.set(1.05,.42,1),s.position.set(0,2.35,0),ms.add(t,n,r,s),ms.position.set(-24.2,.02,5.6),ms.rotation.y=.9,ms.traverse(a=>{a.isMesh&&(a.castShadow=!0),a.userData.action="geraete"}),Ze.add(ms)}function nf(i,e,t,n,r,s){let a=new Float32Array(i*3);for(let h=0;h<i;h++)a[h*3]=(Math.random()-.5)*n,a[h*3+1]=r+Math.random()*(s-r),a[h*3+2]=(Math.random()-.5)*n;let o=new lt;o.setAttribute("position",new Ht(a,3));let c=new Qr({size:e,color:t,transparent:!0,opacity:0,sizeAttenuation:!0,depthWrite:!1}),l=new ra(o,c);return Ze.add(l),l}var l_=nf(320,.5,16777215,220,28,90),lc=nf(26,.35,16765286,46,.6,3.2),qi=[],Qa=i=>1-Math.pow(1-i,3),c_=i=>i*i;var h_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function On(i,e,t=Qa,n=null){qi.push({t:0,dur:i,fn:e,ease:t,onDone:n})}var cc=0,Uu=0,u_=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,hc=!!(window.claude&&typeof window.claude.complete=="function"),Fm="https://claude.ai/public/artifacts/2df6d092-0666-4bf5-8403-3cbf4e759ac6";async function ku(i){return String(await window.claude.complete(i)).trim()}var Bu=null,Fa=null;function Hn(i,e,t=1.6,n=null){if(Fa){let a=qi.indexOf(Fa);a>=0&&qi.splice(a,1)}let r=Dt.position.clone(),s=Vt.target.clone();Vt.enabled=!1,Fa={t:0,dur:t,ease:h_,fn:a=>{Dt.position.lerpVectors(r,i,a),Vt.target.lerpVectors(s,e,a)},onDone:()=>{Fa=null,Vt.enabled=!0,n&&n()}},qi.push(Fa)}function td(i,e){let t=e||I.placed[I.mode][i.slot];if(i.schwerpunktwahl&&t&&t.sp&&X.schwerpunkte[t.sp])return new de(X.schwerpunkte[t.sp].farbe);let n=t&&t.thema?(Xi[i.slot]||[]).find(r=>r.id===t.thema):null;return n&&X.richtungen&&X.richtungen[n.r]?new de(X.gruppen[i.gruppe].farbe).lerp(new de(X.richtungen[n.r].farbe),.72):new de(X.gruppen[i.gruppe].farbe)}function wu(i,e){let t=i.clone(),n=.85,r=.02;return e==="hell"&&t.lerp(new de(16777215),.45),e==="holz"&&(t.lerp(new de(9070146),.55),n=.95),e==="glas"&&(t.lerp(new de(10336473),.5),n=.28,r=.35),e==="backstein"&&(t.lerp(new de(10242613),.6),n=.92),e==="beton"&&(t.lerp(new de(12172740),.55),n=.6),new ie({color:t,roughness:n,metalness:r})}var wn=[];function Ou(){let i=new ie({color:2766160,roughness:.25,metalness:.4,emissive:16763243,emissiveIntensity:0});return wn.push(i),i}var Nm=i=>i.clone().lerp(new de(1318972),.45),Ki=new Oe;Ze.add(Ki);var Lt={},dc=i=>(i===0?0:.55+(i-1))*Sn+.24,zu=new Set(["901","902","903","904"]);function rf(i,e){return Math.abs(i.x-e.x)*2<i.w+e.w-.01&&Math.abs(i.z-e.z)*2<i.d+e.d-.01}function d_(i,e){if(i.pos.y===0)return!0;for(let t of X.slots){if(t.haus!==i.haus||t.slot===i.slot||!(t.pos.y===i.pos.y-1||t.form==="wing"&&i.pos.y<=2))continue;if((e?!!e[t.slot]:Qe(t.slot))&&rf(i.pos,t.pos))return!0}return!1}function p_(i,e,t){let n=e.pos.w*Ye,r=e.pos.d*Ye,s=e.pos.x>=0?-1:1;for(let a of[-.32,.32]){let o=new V(new $e(.02,.14,.55,4),t);o.rotation.y=Math.PI/4,o.position.set(s*(n/2-.18),-.27,a*r),i.add(o)}}function m_(i,e,t,n){let r=e.pos,s=r.w*Ye,a=r.d*Ye,o=r.h*Sn,c=((X.schwerpunkte||{})[t]||(X.richtungen||{})[t]||{}).farbe||"#ffffff",l=new ie({color:new de(c),roughness:.55}),h=Math.abs(r.z)<.01||r.z>=0?1:-1,d=new V(new Ve(s+.06,.1,.06),l);d.position.set(0,o-.16,h*(a/2+.02)),h<0&&(d.rotation.y=Math.PI),i.add(d);let u={DeNC:"rund",ekn:"rund",HEA:"gruen",klin:"gruen",SEOP:"glas",swo:"glas"}[t];if(u==="rund"){let p=new V(new ur(.16,.23,20),l);p.position.set(0,o*.84,h*(a/2+.02));let f=new V(new ni(.17,20),Ou());f.position.set(0,o*.84,h*(a/2+.014));for(let _ of[p,f])h<0&&(_.rotation.y=Math.PI),i.add(_)}else if(u==="gruen"){let p=Math.max(1,Math.round(r.w));for(let f=0;f<p;f++){let _=(f-(p-1)/2)*(s/p),m=new V(new Pt(.66,.14,.16,2,.04),l);m.position.set(_,o*.55-.62,h*(a/2+.1)),i.add(m);for(let g=0;g<3;g++){let v=new V(new At(.055,0),new Xt({color:[14964526,15979342,16777215][g]}));v.position.set(_+(g-1)*.18,o*.55-.5,h*(a/2+.1)),i.add(v)}}}else if(u==="glas"){let p=new V(new Je(s*.82,.3),Ou());p.position.set(0,o*.87,h*(a/2+.012));let f=new V(new Ve(s*.85,.05,.05),new ie({color:new de(c),metalness:.55,roughness:.35}));f.position.set(0,o*.72,h*(a/2+.03));for(let _ of[p,f])h<0&&(_.rotation.y=Math.PI),i.add(_)}}function f_(i,e,t){let n=e.pos.w*Ye,r=e.pos.d*Ye,s=dc(e.pos.y)-.24;if(s<.4)return;let a=new Oe;a.name="stuetzen";for(let[o,c]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let l=new V(new $e(.09,.11,s,8),t);l.position.set(o*(n/2-.18),-s/2,c*(r/2-.18)),a.add(l)}if(s>2.2)for(let o of[-1,1]){let c=new V(new Ve(n-.3,.09,.09),t);c.position.set(0,-s*.55,o*(r/2-.18)),a.add(c)}i.add(a)}function Oa(i,e,t){let n=i/2,r=e/2,s=new lt,a=[-n,0,-r,n,0,-r,n,0,r,-n,0,r,-n,t,0,n,t,0],o=[0,1,5,0,5,4,3,4,5,3,5,2,0,4,3,1,2,5,0,3,2,0,2,1];return s.setAttribute("position",new Te(a,3)),s.setIndex(o),s.computeVertexNormals(),s}function eo(i,e={}){let t=e.state||I.placed[I.mode][i.slot]||{},n=t.stil||"klassisch",r=td(i,e.state),s=t_(i.haus),a=new Oe,o=i.pos,c=o.w*Ye,l=o.d*Ye,h=o.h*Sn;i.form==="wing"&&(h=1.7*Sn);let d=wu(r,n),u,p=(g,v,y,x=.09)=>new Pt(g,v,y,2,x),f=()=>{let g=s.dach?Nm(r).lerp(new de(s.dach),.6):Nm(r);return new ie({color:g,roughness:.8,flatShading:!0,side:mt})};if(i.form==="slab"||i.form==="step"){u=new V(p(c,h,l,.07),d),u.position.y=h/2,a.add(u);let g=new V(new Ve(c,Ba,l),sc.clone());g.position.y=-Ba/2+.02,g.userData.noShadow=!0,g.userData.nopick=!0,a.add(g);let v=new V(new Ve(c+.16,.16,l+.16),sc.clone());if(v.position.y=.08,v.receiveShadow=!0,a.add(v),i.form==="step"){let y=new ie({color:new de(s.holz),roughness:.9}),x=new V(new Je(.92,1.5),new ie({color:5913894,roughness:.8}));x.position.set(0,h+.75,-l/2+.02),a.add(x);let M=new V(new fn(.05,8,6),new ie({color:14266942,metalness:.7,roughness:.35}));M.position.set(.3,h+.68,-l/2+.06),a.add(M);for(let A of[-1,1]){let P=new V(new $e(.055,.07,1.9,8),y);P.position.set(A*(c/2-.16),h+.95,l/2-.16),a.add(P)}let T=new V(Oa(c*1.14,l*1.25,.42),f());T.position.y=h+1.9,a.add(T);for(let A=0;A<2;A++){let P=new V(new Ve(c*.55,h*(2-A)/3,.34),sc.clone());P.position.set(0,h*(2-A)/3/2,l/2+.17+A*.34),P.receiveShadow=!0,a.add(P)}}}else if(i.form==="roof"){u=new V(Oa(c,l,h*.72),f()),a.add(u);let g=new V(p(.55,1.25,.55,.05),wu(r,n));if(g.position.set(c*.28,h*.62,0),a.add(g),t.artefakt==="agent"){let v=new ie({color:10134197,metalness:.6,roughness:.35}),y=new V(new $e(.035,.05,1.35,6),v);y.position.set(-c*.26,h*.72+.62,0),a.add(y);let x=new V(new $e(.02,.02,.5,5),v);x.rotation.z=Math.PI/2,x.position.set(-c*.26,h*.72+1.05,0),a.add(x);let M=new V(new fn(.2,10,8,0,Math.PI*2,0,Math.PI*.4),new ie({color:15262938,metalness:.3,roughness:.4,side:mt}));M.rotation.x=Math.PI*.62,M.position.set(-c*.26,h*.72+.78,.16),a.add(M)}else if(t.artefakt==="app"){let v=Math.atan2(h*.72,l/2),y=new V(new Ve(1.05,.05,.7),new ie({color:1319498,roughness:.2,metalness:.45,emissive:2780372,emissiveIntensity:.18}));y.rotation.x=-v,y.position.set(-c*.24,h*.4,l*.26),a.add(y);let x=new V(new Ve(1.15,.03,.8),new ie({color:15921385,roughness:.6}));x.rotation.x=-v,x.position.set(-c*.24,h*.38,l*.26),a.add(x),wn.push(y.material)}}else if(i.form==="spire"){let g=new V(new Un(c*Ye*.42,h,4),f());g.rotation.y=Math.PI/4,g.position.y=h/2,a.add(g),u=g;let v=new V(new $e(.045,.045,1.5,6),new ie({color:2184,roughness:.4,metalness:.7}));v.position.y=h+.7,a.add(v);let y=new V(new Je(1.1,.6),new ie({color:new de(s.akzent),side:mt,roughness:.7}));y.position.set(.58,h+1.15,0),y.name="flag",a.add(y)}else if(i.form==="lantern"){let g=new V(new $e(.06,.08,h,6),new ie({color:3752282,roughness:.6,metalness:.4}));g.position.y=h/2,a.add(g),u=g;let v=new V(new Oi(.28,0),new ie({color:16767370,emissive:16757575,emissiveIntensity:.15}));v.position.y=h+.15,v.name="lamp",a.add(v),wn.push(v.material)}else{u=new V(p(c,h,l,.1),d),u.position.y=h/2,a.add(u);let g=o.z>=0?1:-1,v=i.haus&&Math.abs(o.z)<.01?1:g,y=Ou(),x=new ie({color:new de(s.rahmen),roughness:.7}),M=Math.max(1,Math.round(o.w)),T=h*.55;for(let A=0;A<M;A++){let P=(A-(M-1)/2)*(c/M),L=new V(new Je(.8,1),x);L.position.set(P,T,v*(l/2+.008));let z=new V(new Je(.64,.84),y);z.position.set(P,T,v*(l/2+.016));let G=new V(new Je(.64,.035),x);G.position.set(P,T,v*(l/2+.022));let B=new V(new Je(.035,.84),x);B.position.set(P,T,v*(l/2+.022));let J=new V(new Ve(.92,.06,.1),x);J.position.set(P,T-.56,v*(l/2+.04));for(let W of[L,z,G,B,J])v<0&&(W.rotation.y=Math.PI),a.add(W)}if(i.form==="bay"||i.form==="wing"){let A=new V(Oa(c*1.06,l*1.06,.5*Sn*.5),f());A.position.y=h,a.add(A)}if(i.form==="tower")for(let[A,P]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let L=new V(p(.22,h,.22,.04),wu(r.clone().lerp(new de(16777215),.25),n));L.position.set(A*(c/2-.08),h/2,P*(l/2-.08)),a.add(L)}}let _=i.schwerpunktwahl&&t.sp?t.sp:t.thema?((Xi[i.slot]||[]).find(g=>g.id===t.thema)||{}).r:null;if(_&&["box","bay"].includes(i.form)&&m_(a,i,_,s),["box","bay","wing"].includes(i.form)&&(i.kategorie==="Wahl"||i.kategorie==="Wahlpflicht")){let g=i.kategorie==="Wahlpflicht",v=Math.abs(o.z)<.01||o.z>=0?1:-1,y=new V(new Ve(.075,h*.86,.075),new ie({color:g?14263361:16777215,roughness:.45,metalness:g?.5:.05}));y.position.set(-(c/2-.02),h/2,v*(l/2-.02)),a.add(y)}if(["box","bay","tower"].includes(i.form)&&o.y>0){let g=new ie({color:new de(s.holz).lerp(new de(3752282),.35),roughness:.7,metalness:.15}),v=e.placedMap?!!e.placedMap.MA:Qe("MA"),y=d_(i,e.placedMap||null)||zu.has(i.slot)&&v;zu.has(i.slot)&&p_(a,i,g),y||f_(a,i,g)}a.traverse(g=>{g.isMesh&&!g.userData.noShadow&&(g.castShadow=!0,g.receiveShadow=!0)});let m=X.haeuser[i.haus];return a.position.set(m.origin[0]+o.x*Ye,dc(o.y),m.origin[2]+o.z*Ye),a.userData.slot=i.slot,a}function sf(i,e){if(i.getObjectByName("sparkle"))return;let t=new V(new Oi(.22,0),new ie({color:16765502,emissive:16757504,emissiveIntensity:.9}));t.name="sparkle";let n=e.pos.h*Sn;t.position.y=(e.form==="roof"||e.form==="spire",n+.6),i.add(t)}function g_(i){let e=i.getObjectByName("sparkle");e&&i.remove(e)}function __(i,e){if(i.getObjectByName("pennant"))return;let t=new Oe;t.name="pennant";let n=e.pos.h*Sn,r=new V(new $e(.03,.03,.9,6),new ie({color:9070146,roughness:.8}));r.position.y=n+.45;let s=new V(new lt().setFromPoints?(()=>{let a=new lt;return a.setAttribute("position",new Te([0,0,0,.55,-.12,0,0,-.24,0],3)),a.setIndex([0,1,2]),a.computeVertexNormals(),a})():new Je(.5,.25),new ie({color:14263361,side:mt,roughness:.7}));s.position.set(.03,n+.85,0),s.name="pflag",t.add(r,s),t.position.set(e.pos.w*Ye*.38,0,e.pos.d*Ye*.38),i.add(t)}function v_(i,e){if(i.getObjectByName("flowerbox")||!["box","bay","wing","tower"].includes(e.form))return;let t=new Oe;t.name="flowerbox";let n=e.pos.d*Ye,r=e.pos.h*Sn,s=e.pos.z>=0?1:-1,a=new V(new Pt(.7,.16,.18,2,.04),new ie({color:9070146,roughness:.9}));a.position.set(0,r*.55-.45,s*(n/2+.1)),t.add(a),[14964526,15979342,13213951].forEach((o,c)=>{let l=new V(new At(.07,0),new Xt({color:o}));l.position.set((c-1)*.2,r*.55-.33,s*(n/2+.1)),t.add(l)}),i.add(t)}function y_(i,e){if(i.getObjectByName("upgrade"))return;let t=new Oe;t.name="upgrade";let n=e.pos.w*Ye,r=e.pos.d*Ye,s=e.pos.h*Sn,a=new ie({color:4020797,roughness:.85}),o=new ie({color:14263361,metalness:.75,roughness:.3}),c=new ie({color:5149760,roughness:1,flatShading:!0});if(["box","tower"].includes(e.form)){let l=e.pos.z>=0?1:-1,h=e.haus&&Math.abs(e.pos.z)<.01?1:l,d=Math.max(1,Math.round(e.pos.w));for(let u=0;u<d;u++){let p=(u-(d-1)/2)*(n/d);for(let f of[-1,1]){let _=new V(new Ve(.16,.98,.03),a);_.position.set(p+f*.52,s*.55,h*(r/2+.02)),h<0&&(_.rotation.y=Math.PI),t.add(_)}}}else if(e.form==="bay"||e.form==="wing")for(let l=0;l<5;l++){let h=new V(new At(.16+l%3*.05,0),c);h.position.set(n*.42,s*(.15+l*.18),r/2+.06),t.add(h)}else if(e.form==="slab"||e.form==="step")for(let l of[-1,1]){let h=new V(new At(.3,0),c);h.position.set(l*(n/2-.4),.3,r/2+.34),t.add(h)}else if(e.form==="roof"){let l=new V(new $e(.025,.025,.7,6),o);l.position.set(-n*.3,s*.72+.35,0);let h=new V(new Un(.14,.34,4),o);h.rotation.z=-Math.PI/2,h.position.set(-n*.3+.16,s*.72+.62,0),h.name="flag",t.add(l,h)}else{let l=new V(new fn(.14,10,8),o);l.position.y=e.pos.h*Sn+(e.form==="spire"?1.55:.5),t.add(l)}t.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),i.add(t)}function nd(i,e){let t=e.optionen&&(I.placed[I.mode][e.slot]||{}).opt||e.code,n=I.quests[e.slot]&&I.quests[e.slot].done;I.quiz[t]&&__(i,e),n&&(sf(i,e),v_(i,e)),I.quiz[t]&&n&&y_(i,e)}var yi=new Oe;Ze.add(yi);function af(){yi.clear();let i=Object.values(I.quiz).filter(Boolean).length+Object.values(I.quests).filter(t=>t.done).length,e=new ie({color:9070146,roughness:.9});if(i>=5){let t=new Oe,n=new V(new Pt(1.5,.1,.45,2,.03),e);n.position.y=.45;let r=new V(new Pt(1.5,.5,.08,2,.03),e);r.position.set(0,.72,-.2);let s=new V(new Ve(.08,.45,.4),e);s.position.set(-.6,.22,0);let a=s.clone();a.position.x=.6,t.add(n,r,s,a),t.position.set(0,.24,4.2),t.rotation.y=Math.PI,t.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),yi.add(t)}if(i>=10){let t=new Oe,n=new V(new Ve(1.6,.06,1.1),new ie({color:1780816,roughness:.25,metalness:.5}));n.rotation.x=-.5,n.position.y=.7;let r=new V(new $e(.06,.08,.7,6),new ie({color:10134197}));r.position.y=.35,t.add(n,r),t.position.set(-4,.24,6),t.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),yi.add(t)}if(i>=15){let t=new Oe,n=new V(new $e(.05,.07,5,8),new ie({color:14212326,roughness:.4,metalness:.6}));n.position.y=2.5;let r=new V(new Je(1.4,.8),new ie({color:10405,side:mt}));r.position.set(.72,4.4,0),r.name="flag",t.add(n,r),t.position.set(4.5,.24,6),t.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),yi.add(t)}if(i>=20){let t=new Oe,n=new V(new $e(.9,1,.4,14),new ie({color:12173519,roughness:.8,flatShading:!0}));n.position.y=.2;let r=new V(new $e(.78,.78,.06,14),new ie({color:7189465,roughness:.15,metalness:.2}));r.position.y=.4;let s=new V(new $e(.1,.14,.8,8),n.material);s.position.y=.7,t.add(n,r,s),t.position.set(0,.24,-5.2),t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),yi.add(t)}if(i>=28){let t=new Oe,n=new ie({color:12442088,roughness:.15,metalness:.25,transparent:!0,opacity:.55}),r=new V(new Ve(2.2,1.2,1.5),n);r.position.y=.6;let s=new V(Oa(2.3,1.6,.55),n);s.position.y=1.2;let a=new V(new Ve(1.7,.2,1),new ie({color:7033144,roughness:1}));a.position.y=.12,t.add(r,s,a),t.position.set(1.2,.24,8.4),yi.add(t)}if(i>=40){let t=new Oe,n=new ie({color:9070146,roughness:.9});for(let[s,a]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let o=new V(new Ve(.12,1.8,.12),n);o.position.set(s*1.1,.9,a*.8),t.add(o)}for(let s=0;s<5;s++){let a=new V(new Ve(2.6,.06,.12),n);a.position.set(0,1.85,-.8+s*.4),t.add(a)}let r=new ie({color:5149760,roughness:1,flatShading:!0});[[-1.1,1.2,.8],[1.1,1.5,-.8],[0,1.9,0]].forEach(([s,a,o])=>{let c=new V(new At(.28,0),r);c.position.set(s,a,o),t.add(c)}),t.position.set(6.5,.24,5.6),t.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),yi.add(t)}}var Hu=new Oe;Ze.add(Hu);function Um(i,e){let t=e?1:.72,n=new Oe,r=new ie({color:15262938,roughness:.9}),s=new ie({color:new de(i).lerp(new de(3752282),.35),roughness:.5,metalness:.3,flatShading:!0}),a=new V(new $e(1.15*t,1.25*t,1.5*t,14),r);a.position.y=.75*t,n.add(a);let o=new V(new fn(1.18*t,16,10,0,Math.PI*2,0,Math.PI*.52),s);o.position.y=1.5*t,n.add(o);let c=new V(new Ve(.28*t,1.05*t,.1),new ie({color:1317944,roughness:.4}));c.position.set(0,1.95*t,.82*t),c.rotation.x=-.62,n.add(c);let l=new V(new $e(.1*t,.14*t,1.15*t,10),new ie({color:10134197,metalness:.6,roughness:.3}));l.position.set(0,2.2*t,.55*t),l.rotation.x=-.7,n.add(l);let h=new V(new Je(.5*t,.9*t),new ie({color:5913894,roughness:.85}));return h.position.set(0,.45*t,1.21*t),n.add(h),n}function km(i,e){let t=e?1:.72,n=new Oe,r=new ie({color:9070146,roughness:.9}),s=new ie({color:5149760,roughness:1,flatShading:!0});for(let[l,h]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let d=new V(new Ve(.12,2*t,.12),r);d.position.set(l*1.05*t,t,h*1.05*t),n.add(d)}let a=new V(new Un(1.8*t,.7*t,4),new ie({color:new de(i).lerp(new de(3752282),.25),roughness:.8,flatShading:!0}));a.rotation.y=Math.PI/4,a.position.y=2.3*t,n.add(a);let o=new V(new Pt(1.15*t,.09,.4*t,2,.03),r);o.position.y=.42*t,n.add(o);for(let l of[-1,1]){let h=new V(new Ve(.08,.4*t,.34*t),r);h.position.set(l*.45*t,.2*t,0),n.add(h)}for(let l of[-1,1]){let h=new V(new Pt(1.5*t,.2,.6*t,2,.05),new ie({color:7033144,roughness:1}));h.position.set(l*1.9*t,.1,.4*t),n.add(h);for(let d=0;d<4;d++){let u=new V(new At(.09*t,0),new Xt({color:d%2?new de(i):new de(16777215)}));u.position.set(l*1.9*t-.5*t+d*.34*t,.3,.4*t),n.add(u);let p=new V(new $e(.018,.02,.2,5),s);p.position.set(l*1.9*t-.5*t+d*.34*t,.2,.4*t),n.add(p)}}let c=new V(new Oi(.16*t,0),new ie({color:16767370,emissive:16757575,emissiveIntensity:.25}));return c.position.set(0,1.75*t,1.05*t),n.add(c),wn.push(c.material),n}function Bm(i,e){let t=e?1:.72,n=new Oe,r=new ie({color:12442088,roughness:.12,metalness:.3,transparent:!0,opacity:.5}),s=new ie({color:new de(i),metalness:.6,roughness:.3}),a=new V(new Ve(2.4*t,1.9*t,2.4*t),r);a.position.y=.95*t,n.add(a);for(let[h,d]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let u=new V(new Ve(.09,1.9*t,.09),s);u.position.set(h*1.2*t,.95*t,d*1.2*t),n.add(u)}let o=new V(new Ve(2.6*t,.12,2.6*t),s);o.position.y=1.95*t,n.add(o);let c=new V(new $e(.5*t,.5*t,.06,12),new ie({color:15921385,roughness:.6}));c.position.y=.5*t,n.add(c);let l=new V(new $e(.06,.1,.5*t,8),s);l.position.y=.25*t,n.add(l);for(let h=0;h<3;h++){let d=h/3*Math.PI*2+.5,u=new V(new Pt(.3*t,.34*t,.3*t,2,.05),new ie({color:14263361,roughness:.8}));u.position.set(Math.cos(d)*.85*t,.17*t,Math.sin(d)*.85*t),n.add(u)}return n}function pc(){Hu.clear(),I.wzSeen||(I.wzSeen={frei:[],serious:[]});let i=[],e=As();if(e.r&&X.richtungen[e.r]){let n={klin:km,ekn:Um,swo:Bm}[e.r];i.push({key:"bsc:"+e.r,x:-17.5,z:-8.5,rot:.5,mesh:n(X.richtungen[e.r].farbe,!1),name:D("wz_"+e.r)})}let t=Rs();if(t.dom&&X.schwerpunkte[t.dom]){let n={DeNC:Um,HEA:km,SEOP:Bm}[t.dom];i.push({key:"msc:"+t.dom,x:20.5,z:-9,rot:-.5,mesh:n(X.schwerpunkte[t.dom].farbe,!0),name:D("wz_"+t.dom)})}for(let n of i)n.mesh.position.set(n.x,.24,n.z),n.mesh.rotation.y=n.rot,n.mesh.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),Hu.add(n.mesh),!Bt.active&&!I.wzSeen[I.mode].includes(n.key)&&(I.wzSeen[I.mode].push(n.key),it(),ja(n.x,4,n.z,70,3),Et("\u{1F3DB} "+D("wz_neu")+" "+n.name),SND.fanfare())}var zn=null,_n=null,x_=!1;function za(i){Zi(),_n=i;let e=wi(i);x_=e.ok,zn=eo(i,{state:{stil:"klassisch"}}),zn.traverse(t=>{t.isMesh&&(t.castShadow=!1,t.receiveShadow=!1,t.material=new ie({color:e.ok?3066993:14241615,transparent:!0,opacity:.45,depthWrite:!1}))}),Ze.add(zn)}function Zi(){zn&&(Ze.remove(zn),zn=null,_n=null)}function of(i,e,t){let r=new fn(.09,5,4),s=new Xt({color:14208436,transparent:!0,opacity:.85}),a=new Ui(r,s,14),o=[],c=new Ie;for(let h=0;h<14;h++){let d=h/14*Math.PI*2;o.push(new E(Math.cos(d)*(1.2+Math.random()),.6+Math.random()*.8,Math.sin(d)*(1.2+Math.random()))),c.setPosition(i,e,t),a.setMatrixAt(h,c)}Ze.add(a);let l=Array.from({length:14},()=>new E(i,e,t));On(.7,h=>{for(let d=0;d<14;d++){l[d].addScaledVector(o[d],.016),o[d].y-=.05;let u=1-h;c.makeScale(u,u,u),c.setPosition(l[d]),a.setMatrixAt(d,c)}a.instanceMatrix.needsUpdate=!0,s.opacity=.85*(1-h)},Qa,()=>{Ze.remove(a),r.dispose(),s.dispose()})}function ja(i,e,t,n=140,r=6){let s=new Je(.16,.26),a=new Xt({side:mt,vertexColors:!1,transparent:!0}),o=new Ui(s,a,n),c=[10405,4156616,954238,14263361,14248523,6185166,16777215],l=[];for(let u=0;u<n;u++)o.setColorAt(u,new de(c[u%c.length])),l.push({p:new E(i,e,t),v:new E((Math.random()-.5)*r,4+Math.random()*5,(Math.random()-.5)*r),r:Math.random()*Math.PI,rs:(Math.random()-.5)*8});o.instanceColor&&(o.instanceColor.needsUpdate=!0),Ze.add(o);let h=new Ie,d=new an;On(2.6,u=>{for(let p=0;p<n;p++){let f=l[p];f.v.y-=.09,f.p.addScaledVector(f.v,.016),f.r+=f.rs*.016,d.set(f.r,f.r*.7,f.r*.3),h.makeRotationFromEuler(d),h.setPosition(f.p),o.setMatrixAt(p,h)}o.instanceMatrix.needsUpdate=!0,a.opacity=u>.75?1-(u-.75)/.25:1},u=>u,()=>{Ze.remove(o),s.dispose(),a.dispose()})}function b_(i,e,t,n){let r=new ur(.42,.55,40),s=new Xt({color:16777215,transparent:!0,opacity:.75,side:mt,depthWrite:!1}),a=new V(r,s);a.rotation.x=-Math.PI/2,a.position.set(i,e+.04,t),Ze.add(a),On(.55,o=>{let c=1+o*n;a.scale.set(c,c,1),s.opacity=.75*(1-o)},Qa,()=>{Ze.remove(a),r.dispose(),s.dispose()})}function qa(i,e,t="#ffffff"){let n=document.createElement("canvas");n.width=256,n.height=96;let r=n.getContext("2d");r.font="800 44px Helvetica, Arial";let s=r.measureText(i).width+52;r.fillStyle=e,r.beginPath(),r.roundRect((256-s)/2,14,s,68,34),r.fill(),r.fillStyle=t,r.textAlign="center",r.textBaseline="middle",r.fillText(i,128,50);let a=new es(n),o=new Jr(new cr({map:a,transparent:!0,depthWrite:!1}));return o.scale.set(2.4,.9,1),o}function M_(i,e){let{haupt:t}=Jt(e),n=(e.pos.h||1)*Sn+.4;(t||[]).slice(0,3).forEach((r,s)=>{let a=ln[r];a&&setTimeout(()=>{let o=qa("+"+r,X.felder[a.feld].farbe);o.position.set(i.position.x+(s-1)*.7,i.position.y+n,i.position.z),Ze.add(o);let c=o.position.y;On(1.5,l=>{o.position.y=c+l*2.1,o.material.opacity=l<.65?1:1-(l-.65)/.35},Qa,()=>{Ze.remove(o),o.material.map.dispose(),o.material.dispose()})},240+s*200)})}var id=70,E_=new Je(.22,.22),lf=new Xt({color:13204285,side:mt,transparent:!0,opacity:.9}),Es=new Ui(E_,lf,id),S_=Array.from({length:id},()=>({p:new E((Math.random()-.5)*70,Math.random()*18+2,(Math.random()-.5)*50),s:.4+Math.random()*.9,ph:Math.random()*6.28}));Ze.add(Es);Es.visible=!1;var Gu={fruehling:{bg:13625079,grass:7976035,foliage:9424506,amb:16234452,ambFall:.35,sun:16773848,hemi:.8},sommer:{bg:12574965,grass:7319378,foliage:5149760,amb:null,ambFall:0,sun:16771524,hemi:.85},herbst:{bg:15260099,grass:10132052,foliage:13204285,amb:13204285,ambFall:.9,sun:16767392,hemi:.7},winter:{bg:14673646,grass:15330804,foliage:6191720,amb:16777215,ambFall:.5,sun:15659775,hemi:.65}},ic=new de(1317944);function Er(){let i=Gu[I.season]||Gu.sommer,e=I.tod/100,t=Math.max(0,(e-.68)/.32),n=Math.PI*(.12+e*.82);tn.position.set(Math.cos(n)*40,Math.sin(n)*34+6,18),tn.intensity=Math.max(.05,Math.sin(Math.min(Math.PI,n))*2.2)*(1-t*.95),tn.color.set(i.sun).lerp(new de(16751198),Math.pow(Math.abs(e-.5)*2,2)*.6),Zm.intensity=i.hemi*(1-t*.75)+.12;let r=new de(i.bg).lerp(ic,t);Ze.background=r,Ze.fog.color.copy(r),uc.color.set(i.grass).lerp(ic,t*.55),ac.color.set(i.foliage).lerp(ic,t*.5),Qm.color.set(i.grass).multiplyScalar(.82).lerp(ic,t*.6),Fu.color.set(16777215).lerp(new de(3752282),t*.8),Fu.opacity=I.season==="winter"?.98:.9,l_.material.opacity=Math.max(0,t-.15)*.95,lc.material.opacity=t>.4&&(I.season==="sommer"||I.season==="fruehling")?.9:0,oc.visible=I.season==="sommer"||I.season==="fruehling",wn.forEach(a=>a.emissiveIntensity=t>.25?.9:0),Es.visible=!!i.amb,i.amb&&lf.color.set(i.amb),document.getElementById("todIcon").textContent=t>.3?"\u{1F319}":e>.45?"\u{1F324}\uFE0F":"\u{1F305}",document.querySelectorAll("#envRow .envbtn[data-season]").forEach(a=>a.classList.toggle("on",a.dataset.season===I.season));let s=document.getElementById("btnEnvAuto");s&&s.classList.toggle("on",!!I.envAuto),SND.ambientMode(I.sound?t>.45?"night":tn.intensity>.4?"day":"off":"off")}var bt=new Oe;{let i=new ie({color:15251850,roughness:.9}),e=new ie({color:10405,roughness:.9}),t=new ie({color:3752282,roughness:.95}),n=new V(new Pt(.16,.42,.16,2,.05),t);n.position.set(-.11,.21,0);let r=n.clone();r.position.x=.11;let s=new V(new Pt(.46,.55,.3,2,.1),e);s.position.y=.68;let a=new V(new Pt(.11,.4,.11,2,.04),e);a.position.set(-.3,.72,0);let o=a.clone();o.position.x=.3;let c=new V(new fn(.2,12,10),i);c.position.y=1.12;let l=new ie({color:15975971,roughness:.5}),h=new V(new fn(.21,12,8,0,Math.PI*2,0,Math.PI*.55),l);h.position.y=1.17;let d=new V(new $e(.27,.27,.035,14),l);d.position.y=1.16,bt.add(n,r,s,a,o,c,h,d),bt.userData.legs=[n,r],bt.userData.arms=[a,o],bt.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),bt.position.set(-5,.24,6),Ze.add(bt)}var Vu=null;function cf(i,e){let t=[];for(let n of["bsc","msc"]){let r=X.haeuser[n];t.push({cx:r.origin[0],cz:r.origin[2],hw:r.breite*Ye/2+1,hd:r.tiefe*Ye/2+1})}if(Qe("600")){let n=X.haeuser.msc,r=vt[600].pos;t.push({cx:n.origin[0]+r.x*Ye,cz:n.origin[2]+r.z*Ye,hw:r.w*Ye/2+.9,hd:r.d*Ye/2+.9})}for(let n=0;n<2;n++)for(let r of t){let s=i-r.cx,a=e-r.cz;Math.abs(s)<r.hw&&Math.abs(a)<r.hd&&(r.hd-Math.abs(a)<=r.hw-Math.abs(s)?e=r.cz+(a>=0?r.hd:-r.hd):i=r.cx+(s>=0?r.hw:-r.hw))}return[i,e]}var Be=i=>String(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function hf(i,e,t=!1){[i,e]=cf(i,e);let n=bt.position.clone(),r=new E(i,.24,e),s=n.distanceTo(r);bt.lookAt(r.x,.24,r.z),Vu={k:0},On(Math.min(2.2,.3+s*.09),a=>{bt.position.lerpVectors(n,r,a),bt.position.y=.24+Math.abs(Math.sin(a*s*2.2))*.09},a=>a,()=>{Vu=null,bt.position.y=.24,bt.userData.legs.forEach(a=>a.rotation.x=0),bt.userData.arms.forEach(a=>a.rotation.x=0),t&&On(.9,a=>{bt.position.y=.24+Math.abs(Math.sin(a*Math.PI*2))*.5,bt.userData.arms.forEach((o,c)=>o.rotation.z=(c?1:-1)*Math.sin(a*Math.PI*4)*1.9)},a=>a,()=>bt.userData.arms.forEach(a=>a.rotation.z=0))})}function rd(i){i&&i.traverse(e=>{e.geometry&&e.geometry.dispose&&e.geometry.dispose();let t=e.material;t&&(Array.isArray(t)?t:[t]).forEach(n=>{n.map&&n.map.dispose&&n.map.dispose(),n.dispose&&n.dispose();let r=wn.indexOf(n);r>=0&&wn.splice(r,1)})})}function to(){wn.length=0,Object.keys(Lt).forEach(i=>{Ki.remove(Lt[i]),rd(Lt[i]),delete Lt[i]}),Object.keys(I.placed[I.mode]).forEach(i=>{let e=vt[i];if(!e)return;let t=eo(e);nd(t,e),Ki.add(t),Lt[i]=t}),af(),pc(),n_.visible=!0}function uf(i){for(let e of X.slots){if(e.haus!==i.haus||e.slot===i.slot||!Qe(e.slot))continue;(e.pos.y===i.pos.y+1||i.form==="wing"&&e.pos.y<=2)&&rf(e.pos,i.pos)&&Mi(e.slot),zu.has(e.slot)&&i.slot==="MA"&&Mi(e.slot)}}function no(i){let e=wi(i);if(!e.ok)return SND.err(),Et(e.reason||D("gesperrt")),!1;let t=lv(),n={stil:Ka,sp:i.schwerpunktwahl?Ya:null,opt:i.optionen?Si:null,thema:Xi[i.slot]?vs:null,frage:i.slot==="BA"?ys:null,artefakt:i.slot==="BA"?Ga:null};I.placed[I.mode][i.slot]=n,it();let r=eo(i);nd(r,i),Ki.add(r),Lt[i.slot]=r,uf(i),pc();let s=r.position.y;r.position.y=s+9;let a=r,o=Math.max(i.pos.w,i.pos.d)*Ye*.42,c=new Xt({color:660016,transparent:!0,opacity:.22,depthWrite:!1}),l=new V(new ni(o,22),c);l.rotation.x=-Math.PI/2,l.position.set(r.position.x,s+.03,r.position.z),Ze.add(l),On(.14,u=>l.scale.setScalar(.15+.85*u),Qa),On(.5+.15,()=>{},u=>u,()=>{Ze.remove(l),l.geometry.dispose(),c.dispose()}),On(.5,u=>{a.position.y=s+10*(1-u)},c_,()=>{a.position.y=s;try{if(On(.22,u=>{let p=Math.sin(u*Math.PI);a.scale.set(1+p*.09,1-p*.14,1+p*.09)},u=>u,()=>a.scale.set(1,1,1)),On(.18,u=>{a.position.y=s+Math.sin(u*Math.PI)*.07},u=>u,()=>{a.position.y=s}),of(r.position.x,s+.1,r.position.z),i.ects>=8&&b_(r.position.x,s,r.position.z,Math.max(i.pos.w,i.pos.d)*Ye*.9),M_(r,i),SND.thock(),u_||(cc=.22,Uu=.07),navigator.vibrate)try{navigator.vibrate(12)}catch{}}catch(u){console.error("juice",u)}df()});let h=X.haeuser[i.haus];hf(h.origin[0]+i.pos.x*Ye+2.6,h.origin[2]+i.pos.z*Ye+4),Zi();let{komp:d}=Jt(i);return Zt(),rn([...d.fa||[],...d.ki||[],...d.fu||[]]),ov(t),I.onboarded?fc(i.slot):(document.getElementById("coach").classList.remove("open"),i.slot!=="003"&&setTimeout(()=>{!I.onboarded&&!Bt.active&&(document.getElementById("obStart").textContent=D("tour_fertig"),cn("onboard"))},1400)),!0}function w_(i){if(I.mode==="serious"&&!confirm(D("entfernen_confirm")))return;let e=X.slots.filter(n=>Qe(n.slot)&&(n.voraus||[]).includes(i));if(e.length){Et(D("grund_voraus")+e.map(n=>Z(n.titel).split(",")[0]).slice(0,2).join(" \xB7 ")),SND.err();return}delete I.placed[I.mode][i],it();let t=Lt[i];t&&(of(t.position.x,t.position.y+.2,t.position.z),SND.err(),Ki.remove(t),rd(t),delete Lt[i]),uf(vt[i]),pc(),Zt(),rn(),Sr()}function df(){I.msSeen||(I.msSeen={frei:[],serious:[]});let i=I.msSeen[I.mode];for(let e of X.meilensteine)if(!i.includes(e.id)&&e.slots.every(t=>Qe(t))){i.push(e.id),it(),T_(e);break}}function T_(i){let e=X.haeuser[i.haus],t=e.origin[0],n=e.origin[2],r=i.id==="bsc_fertig"||i.id==="msc_fertig";Hn(new E(t+(i.haus==="bsc"?-17:17),12,26),new E(t,3.5,n),1.4,()=>{if(ja(t,8,n,r?220:120,r?10:6),SND.fanfare(),r){let s=0,a=setInterval(()=>{ja(t+(Math.random()-.5)*10,9+Math.random()*4,n+(Math.random()-.5)*6,80,4),SND.firework(),++s>=3&&clearInterval(a)},450)}hf(t,n+6.5,!0),setTimeout(()=>{document.getElementById("msEmoji").textContent=r?"\u{1F386}":"\u{1F389}",document.getElementById("msTitle").textContent=Z(i.name),document.getElementById("msText").textContent=Z(i.text),document.getElementById("milestone").classList.add("open")},r?1400:700)})}document.getElementById("msClose").onclick=()=>{document.getElementById("milestone").classList.remove("open"),!I.onboarded&&!Bt.active&&(document.getElementById("obStart").textContent=D("tour_fertig"),cn("onboard"))};var fs=new Ea,bi=new te,Na=document.getElementById("tip"),Tu=null;function Wu(i){let e=oi.getBoundingClientRect();bi.x=(i.clientX-e.left)/e.width*2-1,bi.y=-((i.clientY-e.top)/e.height)*2+1,fs.setFromCamera(bi,Dt);let t=[...Object.values(Lt)];zn&&t.push(zn);let n=fs.intersectObjects(t,!0).filter(s=>!s.object.userData.nopick);if(!n.length)return null;let r=n[0].object;for(;r&&!r.userData.slot;)r=r.parent;return r?r.userData.slot:null}function Om(i,e){let t=Lt[i];t&&t.traverse(n=>{n.isMesh&&n.material&&n.material.emissive&&!wn.includes(n.material)&&(n.material.emissive.setHex(e?1585262:0),n.material.emissiveIntensity=e?.35:0)})}oi.addEventListener("pointermove",i=>{if(gs)return;let e=Wu(i);if(e!==Tu&&(Om(Tu,!1),Om(e,!0)),Tu=e,e&&!Bt.active){let t=vt[e];Na.style.display="block",Na.style.left=i.clientX+14+"px",Na.style.top=i.clientY+14+"px";let n=I.quests[e];Na.innerHTML=`<b>${kt(t)}</b><br>${t.ects} ${D("ects")} \xB7 ${D("stufe")} ${t.stufe}${n&&n.done?" \xB7 \u2726":""}<br><span style="opacity:.72">${Z(X.gruppen[t.gruppe].name)}</span>`,oi.style.cursor="pointer"}else Na.style.display="none",oi.style.cursor="default"});var gs=null;oi.addEventListener("pointerdown",i=>{gs=[i.clientX,i.clientY],SND.unlock()});oi.addEventListener("pointerup",i=>{if(!gs)return;let e=Math.hypot(i.clientX-gs[0],i.clientY-gs[1]);if(gs=null,e>6)return;if(Mt){let n=oi.getBoundingClientRect();bi.x=(i.clientX-n.left)/n.width*2-1,bi.y=-((i.clientY-n.top)/n.height)*2+1,fs.setFromCamera(bi,Dt);let r=fs.intersectObjects(Mt.group.children,!0);for(let s of r){let a=s.object;for(;a&&!a.userData.kompId&&!a.userData.info;)a=a.parent;if(a&&a.userData.info){Et(Z(a.userData.info)),SND.pick();return}if(a&&a.userData.kompId){let o=ln[a.userData.kompId];o&&(Et(`${o.id} \xB7 ${Z(o.name)} \u2014 \xAB${Z(o.ich)}\xBB`),SND.pick());return}}return}{let n=oi.getBoundingClientRect();bi.x=(i.clientX-n.left)/n.width*2-1,bi.y=-((i.clientY-n.top)/n.height)*2+1,fs.setFromCamera(bi,Dt);let r=fs.intersectObjects([Vi,$i,Wi,ms,Ki],!0).filter(s=>!s.object.userData.nopick);if(r.length){let s=r[0].object,a=null;for(;s&&!a;)a=s.userData.action||null,s=s.parent;if(a==="p0"){A_(),SND.pick();return}if(a==="minor"){R_(),SND.pick();return}if(a==="bauhuette"){sd(),SND.pick();return}if(a==="geraete"){pf(),SND.pick();return}}}if(zn&&_n){let n=Wu(i);if(n===_n.slot||n===null){no(_n);return}}let t=Wu(i);t&&(fc(t),SND.pick())});function A_(){let i=document.getElementById("p0List");i.innerHTML="",(X.vorstufe||[]).forEach((e,t)=>{let n=document.createElement("label");n.className="sw",n.style.alignItems="flex-start",n.innerHTML=`<input type="checkbox" ${I.p0[t]?"checked":""} style="margin-top:2px"> <span style="font-size:12.5px;line-height:1.45">${Z(e.text)} <span style="color:#8b94ab">(${e.ids.join(", ")})</span></span>`,n.querySelector("input").onchange=r=>{I.p0[t]=r.target.checked,it(),rn()},i.appendChild(n)}),cn("p0")}function R_(){let i=document.getElementById("minorList");i.innerHTML="";for(let e=0;e<6;e++){let t=document.createElement("label");t.className="sw",t.innerHTML=`<input type="checkbox" ${I.minor[e]?"checked":""}> <span>${D("minor_sem").replace("{n}",e+1)}</span>`,t.querySelector("input").onchange=n=>{I.minor[e]=n.target.checked,it(),tf(),n.target.checked&&SND.quest()},i.appendChild(t)}cn("minor")}var Au={de:{ev:{PI:"Hake (1998, N\u22486500): Lernzuwachs ~verdoppelt (\u27E8g\u27E9 .23 \u2192 .48) \u2014 skaliert exzellent auf Grossveranstaltungen.",LC:"KI-Antworten live pr\xFCfen verbindet kritisches Denken mit AI Literacy \u2014 der KI-Output ist das \xDCbungsobjekt.",JT:"Kurzer Feedback-Loop vor der Sitzung: Die Lehre startet bei den h\xE4ufigsten Fehlkonzepten statt bei Folie 1.",AC:"Richmond & Nicholls (2025, UNSW, N=363): rubrikbasierte KI-Kritik f\xF6rdert Fach-, KI- und Informationskompetenz zugleich.",TB:"Kestin et al. (2025, Harvard-RCT): ~0.73 SD \xFCber aktivem Lernen \u2014 aber nur mit Hint-only-Design (nie die L\xF6sung verraten).",RS:"Simulierte Klient:innen erlauben risikofreies \xDCben (deliberate practice) mit weniger Performanzangst.",TSQ:"Erst einzeln, dann im Team: h\xF6here Leistung und weniger Pr\xFCfungsangst \u2014 in 200\u2013300er-Klassen erprobt.",PD:"Verankert die KI-Spielregeln (deklarieren, dokumentieren, verifizieren) als w\xF6chentliche Praxis statt Papier."},effort:"<b>Warum sich das anstrengender anf\xFChlt \u2014 und trotzdem mehr bringt:</b> Aktives Lernen f\xFChlt sich subjektiv m\xFChsamer an als eine brillante Vorlesung, f\xFChrt aber messbar zu mehr Lernen (Deslauriers et al., 2019). Und der Klassiker: Aktivierende Formate senken die Durchfallquoten deutlich (Freeman et al., 2014, Metaanalyse \xFCber 225 Studien).",lit_titel:"Literatur"},en:{ev:{PI:"Hake (1998, N\u22486,500): learning gains roughly doubled (\u27E8g\u27E9 .23 \u2192 .48) \u2014 scales excellently to large classes.",LC:"Checking AI answers live combines critical thinking with AI literacy \u2014 the AI output is the practice object.",JT:"A short pre-session feedback loop: teaching starts from the most common misconceptions, not from slide 1.",AC:"Richmond & Nicholls (2025, UNSW, N=363): rubric-based AI critique builds domain, AI and information literacy at once.",TB:"Kestin et al. (2025, Harvard RCT): ~0.73 SD above active learning \u2014 but only with a hint-only design (never reveal the solution).",RS:"Simulated clients enable risk-free deliberate practice with less performance anxiety.",TSQ:"Solo first, then as a team: higher performance and less test anxiety \u2014 proven in classes of 200\u2013300.",PD:"Anchors the AI ground rules (declare, document, verify) as weekly practice instead of paper."},effort:"<b>Why this feels harder \u2014 and still teaches more:</b> active learning subjectively feels more effortful than a brilliant lecture, yet measurably produces more learning (Deslauriers et al., 2019). And the classic: active formats substantially cut failure rates (Freeman et al., 2014, meta-analysis of 225 studies).",lit_titel:"References"},lit:`<ul style="font-size:11px;line-height:1.5">
    <li>Deslauriers, L., McCarty, L. S., Miller, K., Callaghan, K., & Kestin, G. (2019). Measuring actual learning versus feeling of learning in response to being actively engaged in the classroom. <i>PNAS, 116</i>(39), 19251\u201319257. <a href="https://doi.org/10.1073/pnas.1821936116" target="_blank" rel="noopener">doi.org/10.1073/pnas.1821936116</a></li>
    <li>Freeman, S., Eddy, S. L., McDonough, M., Smith, M. K., Okoroafor, N., Jordt, H., & Wenderoth, M. P. (2014). Active learning increases student performance in science, engineering, and mathematics. <i>PNAS, 111</i>(23), 8410\u20138415. <a href="https://doi.org/10.1073/pnas.1319030111" target="_blank" rel="noopener">doi.org/10.1073/pnas.1319030111</a></li>
    <li>Hake, R. R. (1998). Interactive-engagement versus traditional methods: A six-thousand-student survey of mechanics test data for introductory physics courses. <i>American Journal of Physics, 66</i>(1), 64\u201374. <a href="https://doi.org/10.1119/1.18809" target="_blank" rel="noopener">doi.org/10.1119/1.18809</a></li>
    <li>Kestin, G., Miller, K., Klales, A., Milbourne, T., & Ponti, G. (2025). AI tutoring outperforms in-class active learning: An RCT introducing a novel research-based design in an authentic educational setting. <i>Scientific Reports, 15</i>, 17458. <a href="https://doi.org/10.1038/s41598-025-97652-6" target="_blank" rel="noopener">doi.org/10.1038/s41598-025-97652-6</a></li>
    <li>Richmond, J. L., & Nicholls, K. (2025). Using generative AI to promote psychological, feedback, and artificial intelligence literacies in undergraduate psychology. <i>Teaching of Psychology</i>. <a href="https://doi.org/10.1177/00986283241287203" target="_blank" rel="noopener">doi.org/10.1177/00986283241287203</a></li>
    <li>Crouch, C. H., & Mazur, E. (2001). Peer Instruction: Ten years of experience and results. <i>American Journal of Physics, 69</i>(9), 970\u2013977. <a href="https://doi.org/10.1119/1.1374249" target="_blank" rel="noopener">doi.org/10.1119/1.1374249</a></li>
  </ul>`};function sd(){let i=Au[I.lang]||Au.de,e=["PI","LC","JT","AC","TB","RS","TSQ","PD"];document.getElementById("bhList").innerHTML=e.map(t=>{let n=X.baukasten.defs[t];return n?`<div class="bhrow"><b>${Z(n.name)}</b><p>${Z(n.kurz)}</p>${i.ev[t]?`<p class="bhev">\u{1F4CA} ${i.ev[t]}</p>`:""}</div>`:""}).join(""),document.getElementById("bhEffort").innerHTML=i.effort,document.getElementById("bhLit").innerHTML=`<div class="subhead" style="margin:10px 0 4px;font:700 10.5px var(--font);text-transform:uppercase;letter-spacing:.5px;color:#5b6478">${i.lit_titel}</div>`+Au.lit,cn("bauhuette")}var C_=[{amp:"g",name:"Microsoft 365 Copilot Chat (Basic)",de:"Allgemeiner KI-Zugang f\xFCr alle UZH-Angeh\xF6rigen, in der M365-Lizenz enthalten. Freigegeben f\xFCr \xF6ffentliche und interne Informationen; Verarbeitung in der Microsoft-Cloud (EU), Inhalte werden nicht f\xFCrs Modelltraining verwendet. Eigene Agents: derzeit nur eingeschr\xE4nkt verl\xE4sslich.",en:"General AI access for all UZH members, included in the M365 licence. Approved for public and internal information; processed in the Microsoft cloud (EU), content is not used for model training. Own agents: currently only partially reliable."},{amp:"y",name:"KlickerUZH + AI Buddy (askUZH)",de:"Kursbezogene Chatbots, KI-Feedback und KI-generierte \xDCbungsinhalte; Lehrende richten Bots im Self-Service ein und geben sie frei. Public Beta ab HS26; Zugang \xFCber Kurs-Login, nutzungsabh\xE4ngige Kosten.",en:"Course-linked chatbots, AI feedback and AI-generated practice content; teachers configure and release bots via self-service. Public beta from autumn 2026; access via course login, usage-based costs."},{amp:"y",name:"OLAT-KI-Angebot",de:"Dialog mit freigegebenen OLAT-Kursinhalten (Materialien, Quizzes). \xDCbergangsl\xF6sung ab HS26, offizielle OLAT-Integration ab FS27 geplant \u2014 wichtig f\xFCr die Skalierung, weil alle Fakult\xE4ten OLAT nutzen.",en:"Dialogue with released OLAT course content (materials, quizzes). Interim solution from autumn 2026, official OLAT integration planned for spring 2027 \u2014 key for scaling, as all faculties use OLAT."},{amp:"y",name:"BaltiBot",de:"Unterst\xFCtzt Studienprogrammverantwortliche ab Sommer 2026 bei der Orientierung im Studienprogrammentwicklungs-Prozess (ISSP) \u2014 auf Basis einer kuratierten Dokumentensammlung.",en:"From summer 2026, supports programme directors in navigating the programme-development process (ISSP), based on a curated document collection."},{amp:"y",name:"EducationAI",de:"Intern getestete Anwendung f\xFCr Lehrende: greift auf die Teaching Tools UZH zu und unterst\xFCtzt Planung und Weiterentwicklung der Lehre (DPA mit dem LLM-Anbieter).",en:"Internally tested application for teachers: draws on the UZH Teaching Tools and supports planning and developing courses (DPA with the LLM provider)."},{amp:"r",name:"M365 Copilot Premium \xB7 GitHub Copilot",de:"Nur f\xFCr Mitarbeitende mit kostenpflichtiger Zusatzlizenz. Ein studentischer Zugang zu einer KI-Entwicklungsumgebung (agentische KI, Vibe Coding) ist noch offen \u2014 f\xFCr datennahe Profile relevant.",en:"Staff only, with a paid add-on licence. Student access to an AI development environment (agentic AI, vibe coding) is still open \u2014 relevant for data-oriented profiles."}],zm={de:"<b>Spielregeln f\xFCr alle Werkzeuge:</b> Studierende d\xFCrfen nicht zu kostenpflichtigen Tools oder Tools mit pers\xF6nlicher Registrierung verpflichtet werden. Informationsklassen beachten: Pr\xFCfungen und akademische Arbeiten gelten als <b>vertraulich</b>, bestimmte psychologische Forschungs- und Klientendaten als <b>geheim</b> \u2014 sie geh\xF6ren in kein nicht daf\xFCr freigegebenes KI-System. Nicht von der UZH bereitgestellte Tools nur mit \xF6ffentlichen Informationen verwenden.",en:"<b>Ground rules for all tools:</b> students must not be required to use paid tools or tools needing personal registration. Mind the information classes: examinations and academic papers are <b>confidential</b>, certain psychological research and client data are <b>secret</b> \u2014 they belong in no AI system not approved for that class. Tools not provided by UZH may only be used with public information."};function pf(){let i={g:"\u{1F7E2}",y:"\u{1F7E1}",r:"\u{1F534}"};document.getElementById("gsList").innerHTML=C_.map(e=>`<div class="bhrow"><b>${i[e.amp]} ${Be(e.name)}</b><p>${I.lang==="de"?e.de:e.en}</p></div>`).join(""),document.getElementById("gsRegeln").innerHTML=zm[I.lang]||zm.de,document.getElementById("gsQuelle").textContent=I.lang==="de"?"Quelle: KI-im-Curriculum-Kompass UZH (Ochsner, 2026), Stand Juli 2026 \u2014 Angaben \xE4ndern sich laufend.":"Source: UZH AI-in-the-Curriculum Compass (Ochsner, 2026), as of July 2026 \u2014 details change continuously.",cn("geraete")}window.addEventListener("keydown",i=>{let e=i.target&&(i.target.tagName==="INPUT"||i.target.tagName==="TEXTAREA");if(i.key==="Enter"&&_n&&!e&&no(_n),i.key==="Escape"){if(Mt){Za();return}if(document.getElementById("milestone").classList.contains("open")){document.getElementById("msClose").click();return}document.getElementById("tutor").classList.remove("open"),Zi(),Sr(),document.querySelectorAll(".modal.open").forEach(n=>n.classList.remove("open"))}});var rc=document.getElementById("planList"),Gn=null;function I_(i){return Qe(i.slot)?"built":wi(i).ok?"avail":"locked"}function mc(){for(let i of["bsc","msc"])for(let e of X.bauplan[i])for(let t of e.slots){let n=vt[t];if(!Qe(t)&&wi(n).ok)return t}return null}function Zt(){let i=Bt.active?null:mc(),e=document.createDocumentFragment();for(let r of["bsc","msc"]){let s=document.createElement("div");s.className="semblock",s.innerHTML=`<div class="semhead" style="font-size:12px;color:var(--blue)">${r==="bsc"?"\u{1F3E0} "+D("haus_bsc"):"\u{1F3F0} "+D("haus_msc")}<span>${li(r)}/120 ${D("ects")}</span></div>`,e.appendChild(s);for(let a of X.bauplan[r]){if(!a.slots.length)continue;let o=a.slots.filter(l=>Qe(l)).length,c=document.createElement("div");c.className="semblock",c.innerHTML=`<div class="semhead"><span>${D("sem")} ${a.sem} \xB7 ${a.hs?D("hs"):D("fs")}</span><span class="semprog">${o}/${a.slots.length}</span></div>`;for(let l of a.slots){let h=vt[l],d=I_(h),u=document.createElement("button");u.className="chip "+(d==="built"?"built":d==="locked"?"locked":""),Gn===l&&u.classList.add("sel"),l===i&&u.classList.add("next");let p=I.quests[l],f="#"+td(h).getHexString(),_=h.kategorie==="Wahlpflicht"?`<span class="ckat wp" title="${D("kat_wahlpflicht")}">WP</span>`:h.kategorie==="Wahl"?`<span class="ckat" title="${D("kat_wahl")}">W</span>`:"";u.innerHTML=`<span class="cdot" style="background:${f}"></span>
          <span class="cname">${kt(h)}</span>
          ${_}
          ${l===i?`<span class="nextbadge">\u{1F528} ${D("naechstes")}</span>`:""}
          ${I.quiz[Cs(h)]?'<span class="quest-star" title="Quiz \u2713">\u{1F6A9}</span>':""}
          ${p&&p.done?'<span class="quest-star">\u2726</span>':""}
          ${d==="built"?'<span class="tick">\u2714</span>':I.mode==="serious"&&I.bestanden[l]?'<span class="tick">\u2611</span>':""}
          <span class="cects">${h.ects}</span>`,u.onclick=()=>{Mr(l)},c.appendChild(u)}e.appendChild(c)}}let t=rc.scrollTop;rc.innerHTML="",rc.appendChild(e),rc.scrollTop=t,document.getElementById("planHint").textContent=I.mode==="serious"?"\u2611 = "+D("bestanden"):"",document.getElementById("planLegende").textContent=D("legende");let n=document.getElementById("nextCta");n&&(i&&!Bt.active?(n.textContent=`${D("cta_naechster")} ${kt(vt[i]).split(",")[0]}`,n.title=kt(vt[i]),n.onclick=()=>{Mr(i)},n.style.visibility="visible"):n.style.visibility="hidden")}function li(i){return X.slots.filter(e=>e.haus===i&&Qe(e.slot)).reduce((e,t)=>{let n=I.placed[I.mode][t.slot],r=n&&n.opt&&nn[n.opt]?nn[n.opt].ects:t.ects;return e+r},0)}function Mr(i){Mt&&Za(),Gn=i;let e=vt[i];window.innerWidth<=1080&&(document.getElementById("panelL").classList.remove("open"),document.getElementById("panelR").classList.remove("open")),SND.pick(),!Qe(i)&&!Bt.active?za(e):Zi(),fc(i),Zt();let t=X.haeuser[e.haus],n=new E(t.origin[0]+e.pos.x*Ye,dc(e.pos.y)+1,t.origin[2]+e.pos.z*Ye),r=Dt.position.clone().sub(Vt.target).normalize().multiplyScalar(Math.min(30,Dt.position.distanceTo(n)+7));Hn(n.clone().add(r),n,.9)}var $u=i=>Math.min(i,8);function Ji(){let i={},e={};X.kompetenzen.forEach(t=>{i[t.id]=0,e[t.id]=0});for(let t of X.slots){let n=Qe(t.slot),r=Jt(t),s=qm(t),a=(o,c)=>((o||[]).includes(c)?2:1)*$u(t.ects);for(let o of[...s.komp.fa||[],...s.komp.ki||[],...s.komp.fu||[]])o in e&&(e[o]+=a(s.haupt,o));if(n)for(let o of[...r.komp.fa||[],...r.komp.ki||[],...r.komp.fu||[]])o in e&&(i[o]+=a(r.haupt,o))}return(X.vorstufe||[]).forEach((t,n)=>{I.p0&&I.p0[n]&&t.ids.forEach(r=>{e[r]&&(i[r]=Math.min(e[r],i[r]+.025*e[r]))})}),{score:i,max:e}}var br=null,Ha="profil",Ru=[{ids:["Fa1","Fa8","Fa9"],name:{de:"Fachwissen &|Transfer",en:"Knowledge &|transfer"},farbe:"#1a3e8f"},{ids:["Fa2","Fa3","Fa5"],name:{de:"Methoden, Daten|& Diagnostik",en:"Methods, data|& diagnostics"},farbe:"#1a3e8f"},{ids:["Fa4","Fa6","Fa7","Fa10"],name:{de:"Denken, Ethik &|Kommunikation",en:"Thinking, ethics|& communication"},farbe:"#1a3e8f"},{ids:["KI1","KI2","KI3"],name:{de:"Mit KI arbeiten|& gestalten",en:"Working & creating|with AI"},farbe:"#0e8f7e"},{ids:["KI4","KI5","KI6"],name:{de:"KI verstehen, pr\xFCfen|& verantworten",en:"Understanding, auditing|& owning AI"},farbe:"#0e8f7e"},{ids:["Fu1","Fu2","Fu3"],name:{de:"Future Skills|(mit & ohne KI)",en:"Future skills|(with & without AI)"},farbe:"#4a90d9"}];function mf(i,e,t=210,n=null){let r=t/2,s=t*.315,a=Ru.length,o=(_,m)=>{let g=-Math.PI/2+_/a*Math.PI*2;return[r+Math.cos(g)*m,r+Math.sin(g)*m]},c="";for(let _ of[.33,.66,1])c+=`<polygon points="${[...Array(a)].map((m,g)=>o(g,s*_).join(",")).join(" ")}" fill="none" stroke="#dbe1ef" stroke-width="1"/>`;let l="",h="";Ru.forEach((_,m)=>{let[g,v]=o(m,s);l+=`<line x1="${r}" y1="${r}" x2="${g}" y2="${v}" stroke="#dbe1ef" stroke-width="1"/>`;let[y,x]=o(m,s+13),M=Z(_.name).split("|"),T=x-(M.length-1)*4.5+(m===0?-3:x>r?5:0);h+=`<text x="${y}" y="${T}" font-size="7.5" font-weight="700" fill="${_.farbe}" text-anchor="middle" dominant-baseline="middle">`+M.map((A,P)=>`<tspan x="${y}" dy="${P?9:0}">${A.replace(/&/g,"&amp;")}</tspan>`).join("")+"</text>"});let d=Ru.map(_=>{let m=_.ids.reduce((v,y)=>v+(i[y]||0),0),g=_.ids.reduce((v,y)=>v+(e[y]||0),0);return g?m/g:0}),u=d.map((_,m)=>o(m,Math.max(.03,_)*s).join(",")).join(" "),p=d.map((_,m)=>{let[g,v]=o(m,Math.max(.03,_)*s);return`<circle cx="${g}" cy="${v}" r="2.6" fill="#0028a5"/>`}).join(""),f=n&&n.length===a?`<polygon points="${n.map((_,m)=>o(m,Math.max(.03,Math.min(1,_))*s).join(",")).join(" ")}" fill="none" stroke="#b3831d" stroke-width="1.8" stroke-dasharray="5 4" stroke-linejoin="round"/>`:"";return`<svg viewBox="0 0 ${t} ${t}" style="width:100%;max-width:230px;display:block;margin:2px auto 6px">
    ${c}${l}
    ${f}
    <polygon points="${u}" fill="rgba(0,40,165,.16)" stroke="#0028a5" stroke-width="2" stroke-linejoin="round"/>
    ${p}${h}</svg>`}function P_(){let i=[];for(let n of["bsc","msc"])for(let r of X.bauplan[n]){if(!r.slots.length&&n==="bsc"&&r.sem===2){i.push({lbl:"B2",fa:0,ki:0,fu:0});continue}let s={lbl:(n==="bsc"?"B":"M")+r.sem,fa:0,ki:0,fu:0};for(let a of r.slots){if(!Qe(a))continue;let o=vt[a],{komp:c}=Jt(o);s.fa+=(c.fa||[]).length*o.ects,s.ki+=(c.ki||[]).length*o.ects,s.fu+=(c.fu||[]).length*o.ects}i.push(s)}let e=Math.max(1,...i.map(n=>n.fa+n.ki+n.fu)),t=n=>{let r=s=>Math.round(s/e*100);return`<div class="vbar" title="${n.lbl}">
      <span class="vseg" style="height:${r(n.fu)}%;background:${X.felder.fu.farbe}"></span>
      <span class="vseg" style="height:${r(n.ki)}%;background:${X.felder.ki.farbe}"></span>
      <span class="vseg" style="height:${r(n.fa)}%;background:${X.felder.fa.farbe}"></span>
    </div>`};return`<div class="kfeld" style="margin-top:14px">${D("verlauf_titel")}</div>
    <div class="verlauf">${i.map(t).join("")}</div>
    <div class="verlauf-lbl">${i.map(n=>`<span>${n.lbl}</span>`).join("")}</div>`}function L_(i){let e=As(),t=Rs(),n=e.r?`${X.richtungen[e.r].icon} <b style="color:${X.richtungen[e.r].farbe}">${Z(X.richtungen[e.r].kurz)}</b>`:`<span style="color:#8b94ab">${D("richtung_keine")}</span>`,r=t.total?Object.entries(t.counts).filter(([,c])=>c>0).map(([c,l])=>`<b style="color:${X.schwerpunkte[c].farbe}">${c} ${l}</b>`).join(" \xB7 ")+(t.dom?"":` <span style="color:#8b94ab">(${D("msc_mix")})</span>`):'<span style="color:#8b94ab">\u2014</span>',s=ji(),a=Ms(),o=s||a?`<br>BA: ${s?`${((X.baFormen||{})[s.form]||{}).icon||""} ${Be(Z(s.name))}`:""}${a?` \xB7 ${a.icon} ${Be(Z(a.name))}`:""}`:"";return`<div style="border:1.5px solid #dbe1ef;border-radius:10px;padding:7px 10px;margin:0 4px 8px;font-size:11px;line-height:1.6">
    <b style="font-size:11.5px">\u{1F9ED} ${D("richtung_titel")}</b><br>
    ${D("richtung_bsc")}: ${n}<br>
    ${D("richtung_msc")}: ${r}${o}${i?"":`<br><span style="color:#8b94ab;font-size:10px">${D("msc_dom_hint")}</span>`}
  </div>`}function D_(i){if(!i.wahl)return"";let e=As(),t=Rs(),n=[];if(i.wahl.r&&X.richtungen[i.wahl.r]){let a=e.r===i.wahl.r;n.push({ok:a,txt:`BSc: ${Z(X.richtungen[i.wahl.r].kurz)}`,col:X.richtungen[i.wahl.r].farbe})}if(i.wahl.sp&&X.schwerpunkte[i.wahl.sp]){let a=(t.counts[i.wahl.sp]||0)>=3;n.push({ok:a,txt:`MSc: ${i.wahl.sp}`,col:X.schwerpunkte[i.wahl.sp].farbe})}if(i.wahl.wp&&nn[i.wahl.wp]){let a=bs()===i.wahl.wp;n.push({ok:a,txt:Z(nn[i.wahl.wp].titel),col:"#b3831d"})}let r=ji();if(r&&(r.pfade||[]).includes(i.id)&&n.push({ok:!0,txt:D("ba_chip"),col:"#0028a5"}),!n.length)return"";let s=n.every(a=>a.ok);return`<div style="display:flex;flex-wrap:wrap;gap:4px;align-items:center;margin:4px 0 2px;font-size:10px">
    <span style="color:#5b6478;font-weight:700">${s?"\u2713 "+D("passung_ok"):D("passung_titel")}</span>
    ${n.map(a=>`<span style="border:1px solid ${a.col};color:${a.ok?"#fff":a.col};background:${a.ok?a.col:"transparent"};border-radius:999px;padding:1px 7px">${a.ok?"\u2713 ":""}${Be(a.txt)}</span>`).join("")}
  </div>`+(i.wahl.hinweis&&!s?`<p style="font-size:10px;color:#8b94ab;margin:2px 0 0">${Z(i.wahl.hinweis)}</p>`:"")}var Hm={hoch:{icon:"\u25CF\u25CF\u25CF",farbe:"#0e8f7e"},mittel:{icon:"\u25CF\u25CF\u25CB",farbe:"#b3831d"},tief:{icon:"\u25CF\u25CB\u25CB",farbe:"#8b94ab"}};function F_(i){let e=i.stelle;if(!e)return"";let t=Hm[e.lohnQ]||Hm.mittel,n=r=>`<ul style="margin:2px 0 0;padding-left:16px">${r.map(s=>`<li style="margin:2px 0">${Be(Z(s))}</li>`).join("")}</ul>`;return`<details class="stelle"><summary>\u{1F4BC} ${D("stelle_titel")}: <b>${Be(Z(e.titel))}</b></summary>
    <div class="stellebody">
      <div class="srow"><span>${D("stelle_pensum")}</span><div>${Be(Z(e.pensum))}</div></div>
      <div class="srow"><span>${D("stelle_wo")}</span><div>${Be(Z(e.wo))}</div></div>
      <div class="srow"><span>${D("stelle_aufgaben")}</span><div>${n(e.aufgaben)}</div></div>
      <div class="srow"><span>${D("stelle_anforderungen")}</span><div>${n(e.anforderungen)}</div></div>
      <div class="srow"><span>${D("stelle_lohn")}</span><div>${Be(Z(e.lohn))}
        <div class="sq" style="color:${t.farbe}" title="${Be(Z(e.lohnBeleg))}">${t.icon} ${D("lohnq_"+e.lohnQ)} \u2014 ${Be(Z(e.lohnBeleg))}</div></div></div>
      <div class="srow"><span>${D("stelle_wann")}</span><div>${Be(Z(e.wann))}</div></div>
    </div></details>`}function N_(i){if(!i.wahl)return null;let e=As(),t=Rs(),n=ji(),r=0,s=0;return i.wahl.r&&(r++,e.r===i.wahl.r&&s++),i.wahl.sp&&(r++,s+=Math.min(1,(t.counts[i.wahl.sp]||0)/4)),i.wahl.wp&&(r+=.7,bs()===i.wahl.wp&&(s+=.7)),n&&r>0&&(r+=.7,(n.pfade||[]).includes(i.id)&&(s+=.7)),r?s/r:null}function ad(i,e){let t=X.kompetenzen.map(f=>f.id),n=t.map(f=>e[f]||0),r=t.map(f=>i.w[f]||0),s=n.reduce((f,_)=>f+_,0)/n.length,a=r.reduce((f,_)=>f+_,0)/r.length,o=0,c=0,l=0;for(let f=0;f<n.length;f++){let _=n[f]-s,m=r[f]-a;o+=_*m,c+=_*_,l+=m*m}let d=((c&&l?o/(Math.sqrt(c)*Math.sqrt(l)):0)+1)/2,u=N_(i),p=u===null?d:.62*u+.38*d;return Math.max(0,Math.min(100,Math.round(p*100)))}var Ua=null;function U_(i){if(!Ua){Ua={};for(let e of X.slots){let{komp:t}=Jt(e);for(let n of[...t.fa||[],...t.ki||[],...t.fu||[]])Ua[n]=Math.max(Ua[n]||0,e.stufe)}}return Ua[i]||0}function od(i){return i.ziel?Object.entries(i.ziel).map(([e,t])=>({id:e,ziel:Math.min(t,U_(e)),ist:Ts(e)})).filter(e=>e.ist<e.ziel).sort((e,t)=>t.ziel-t.ist-(e.ziel-e.ist)):[]}function k_(){let{score:i,max:e}=Ji(),t={};X.kompetenzen.forEach(h=>t[h.id]=e[h.id]?i[h.id]/e[h.id]:0);let n=document.getElementById("profilList"),r=`<p style="font-size:11px;color:#5b6478;margin:2px 6px 6px;line-height:1.45">${D("karriere_info")}</p>`;r+=L_(!1);let s={};(window.KARRIERE.pfade||[]).forEach(h=>s[h.id]=ad(h,t));let a=Object.values(s),o=Math.max(1,...a),c=[...window.KARRIERE.pfade||[]].sort((h,d)=>s[d.id]-s[h.id]);for(let h of c){let d=Object.values(h.w).reduce((y,x)=>y+x,0),u=Math.round(Object.entries(h.w).reduce((y,[x,M])=>y+M*(t[x]||0),0)/d*100),p=s[h.id],f=p>=o-1&&a.filter(y=>y>=o-1).length<=3,_=X.slots.filter(y=>!Qe(y.slot)).map(y=>{let{komp:x,haupt:M}=Jt(y),A=[...x.fa||[],...x.ki||[],...x.fu||[]].reduce((P,L)=>P+(h.w[L]||0)*((M||[]).includes(L)?2:1),0);return{s:y,v:A,ok:wi(y).ok}}).filter(y=>y.v>0).sort((y,x)=>x.ok-y.ok||x.v-y.v).slice(0,3),m=od(h),g=h.ziel?`<details style="margin:4px 0 0"><summary style="cursor:pointer;font:700 10.5px var(--font);color:#5b6478">\u{1F3AF} ${D("soll_titel")}</summary>
      ${m.length?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin:4px 0"><span style="font-size:10px;color:#5b6478">${D("gap_titel")}:</span>${m.map(y=>{let x=ln[y.id],M=x?X.felder[x.feld]:null;return`<span style="font-size:10px;border:1px solid ${M?M.farbe:"#b9c2d9"};color:${M?M.farbe:"#5b6478"};border-radius:999px;padding:1px 7px" title="${x?Be(Z(x.name)):""}">${y.id} ${y.ist}\u2192${y.ziel}</span>`}).join("")}</div>`:`<p style="font-size:10.5px;color:var(--ok);margin:4px 0">\u2713 ${D("gap_ok")}</p>`}</details>`:"",v=h.roadmap&&h.roadmap.length?`<details style="margin:3px 0 0"><summary style="cursor:pointer;font:700 10.5px var(--font);color:#5b6478">\u{1F680} ${D("roadmap_titel")}</summary>
      <ol style="font-size:10.5px;line-height:1.5;padding-left:16px;margin:4px 0">${h.roadmap.map(y=>`<li style="margin:3px 0"><b>${Z(y.t)}</b> \u2014 ${Z(y.d)}</li>`).join("")}</ol></details>`:"";r+=`<div class="pfad${f?" toppfad":""}">
      <div class="phead"><span>${h.icon}</span><span>${Z(h.name)}</span><span class="pct" title="${D("fit_hint")}">${p}%</span></div>
      <div class="phint">${Z(h.hint)}</div>
      <div class="track" title="${D("fit_hint")}"><div class="fill" style="width:${p}%;background:linear-gradient(90deg,#0e8f7e,#0028a5)"></div></div>
      <div class="pmeta">${D("fit_label")}: <b>${p}%</b> \xB7 ${D("fortschritt_label")}: ${u}%</div>
      ${D_(h)}
      ${F_(h)}
      ${g}
      ${v}
      ${_.length?`<div class="pnext">${D("pfad_next")} ${_.map(y=>{let x=kt(y.s).split(",")[0];return`<button data-slot="${y.s.slot}" title="${kt(y.s).replace(/"/g,"&quot;")}">${x.length>34?x.slice(0,33)+"\u2026":x}</button>`}).join("")}</div>`:""}
    </div>`}r+=`<button class="ghostbtn" data-steckbrief style="margin:8px 4px;width:calc(100% - 8px)">\u{1F5A8} ${D("karriere_pdf")}</button>`,r+=P_(),n.innerHTML=r,n.querySelectorAll(".pnext button").forEach(h=>h.onclick=()=>Mr(h.dataset.slot));let l=n.querySelector("[data-steckbrief]");l&&(l.onclick=B_)}function B_(){let{score:i,max:e}=Ji(),t={};X.kompetenzen.forEach(_=>t[_.id]=e[_.id]?i[_.id]/e[_.id]:0);let n=new Date().toLocaleDateString(I.lang==="de"?"de-CH":"en-GB"),r=(window.KARRIERE.pfade||[]).map(_=>{let m=Object.values(_.w).reduce((M,T)=>M+T,0),g=Math.round(Object.entries(_.w).reduce((M,[T,A])=>M+A*(t[T]||0),0)/m*100),v=ad(_,t),y=Object.entries(_.w).map(([M,T])=>({id:M,v:T*(t[M]||0)})).sort((M,T)=>T.v-M.v).slice(0,3).filter(M=>M.v>0),x=X.slots.filter(M=>!Qe(M.slot)).map(M=>{let{komp:T,haupt:A}=Jt(M),L=[...T.fa||[],...T.ki||[],...T.fu||[]].reduce((z,G)=>z+(_.w[G]||0)*((A||[]).includes(G)?2:1),0);return{s:M,v:L}}).filter(M=>M.v>0).sort((M,T)=>T.v-M.v).slice(0,3);return{p:_,ready:g,fit:v,traeger:y,cand:x}}).sort((_,m)=>m.fit-_.fit||m.ready-_.ready),s=As(),a=Rs(),o="";for(let{p:_,ready:m,fit:g,traeger:v,cand:y}of r){let x=od(_),M=_.ziel?x.length?`<p style="font-size:10.5px;margin:2px 0"><b>\u{1F3AF} ${D("gap_titel")}:</b> ${x.map(P=>{let L=ln[P.id];return`${P.id} ${L?Z(L.name):""} (${D("stufe")} ${P.ist}\u2192${P.ziel})`}).join(" \xB7 ")}</p>`:`<p style="font-size:10.5px;margin:2px 0;color:#0a7d40"><b>\u2713 ${D("gap_ok")}</b></p>`:"",T=_.wahl&&_.wahl.hinweis?`<p style="font-size:10.5px;margin:2px 0"><b>\u{1F9ED} ${D("passung_titel")}</b> ${Z(_.wahl.hinweis)}</p>`:"",A=_.roadmap&&_.roadmap.length?`<p style="font-size:10.5px;margin:5px 0 2px"><b>\u{1F680} ${D("roadmap_titel")}:</b></p>
         <ol style="font-size:10.5px;line-height:1.55;margin:0 0 2px;padding-left:18px">${_.roadmap.map(P=>`<li style="margin:2px 0"><b>${Z(P.t)}</b> \u2014 ${Z(P.d)}</li>`).join("")}</ol>`:"";o+=`<div style="border:1.5px solid #dbe1ef;border-radius:12px;padding:10px 14px;margin:8px 0;page-break-inside:avoid">
      <div style="display:flex;align-items:center;gap:8px"><span style="font-size:17px">${_.icon}</span>
        <b style="font-size:13px;flex:1">${Z(_.name)}</b>
        <b style="color:#0e8f7e;font-variant-numeric:tabular-nums">${g}%</b></div>
      <div style="height:8px;border-radius:4px;background:#e8ebf4;overflow:hidden;margin:5px 0"><span style="display:block;height:100%;width:${g}%;background:linear-gradient(90deg,#0e8f7e,#0028a5)"></span></div>
      <p style="font-size:10px;color:#5b6478;margin:0 0 4px">${D("fit_label")}: <b>${g}%</b> \xB7 ${D("fortschritt_label")}: ${m}%</p>
      <p style="font-size:10.5px;color:#5b6478;margin:2px 0 5px">${Z(_.hint)}</p>
      ${v.length?`<p style="font-size:10.5px;margin:2px 0"><b>${D("steck_traeger")}</b> ${v.map(P=>{let L=ln[P.id];return`${P.id} ${Z(L.name)} (${Math.round((t[P.id]||0)*100)}%)`}).join(" \xB7 ")}</p>`:""}
      ${T}
      ${M}
      ${y.length?`<p style="font-size:10.5px;margin:2px 0"><b>${D("steck_next")}</b> ${y.map(P=>kt(P.s).split(",")[0]).join(" \xB7 ")}</p>`:""}
      ${A}
    </div>`}let c=r[0],l=`<div style="border:1.5px solid #dbe1ef;border-radius:12px;padding:8px 14px;margin:8px 0;font-size:11.5px;line-height:1.6">
    <b>\u{1F9ED} ${D("richtung_titel")}</b><br>
    ${D("richtung_bsc")}: ${s.r?`<b style="color:${X.richtungen[s.r].farbe}">${X.richtungen[s.r].icon} ${Z(X.richtungen[s.r].kurz)}</b>`:D("richtung_keine")}<br>
    ${D("richtung_msc")}: ${a.total?Object.entries(a.counts).filter(([,_])=>_>0).map(([_,m])=>`<b style="color:${X.schwerpunkte[_].farbe}">${_} ${m}/6</b>`).join(" \xB7 ")+(a.dom?"":` (${D("msc_mix")})`):"\u2014"}
    ${bs()&&nn[bs()]?`<br>${D("kat_wahlpflicht")}: <b>${Z(nn[bs()].titel)}</b>`:""}
    ${ji()?`<br>${D("ba_chip")}: <b>${((X.baFormen||{})[ji().form]||{}).icon||""} ${Be(Z(ji().name))}</b>`:""}
    ${Ms()?`<br>${D("artefakt")} <b>${Ms().icon} ${Be(Z(Ms().name))}</b>`:""}
  </div>`,h=c&&c.p.soll?`<div style="page-break-inside:avoid">${mf(i,e,230,c.p.soll).replace("max-width:230px","max-width:300px")}
       <p style="text-align:center;font-size:10px;color:#5b6478;margin:0 0 6px">${D("soll_legende")} (${c.p.icon} ${Z(c.p.name)})</p></div>`:"",d=(window.KARRIERE.lit||[]).length?`<h2>\u{1F4DA} ${I.lang==="de"?"Literatur & offizielle Quellen":"References & official sources"}</h2>
       <ul style="font-size:10px;line-height:1.55;padding-left:18px">${window.KARRIERE.lit.map(_=>`<li style="margin:3px 0">${_.apa}${_.url?` <a href="${_.url}" target="_blank" rel="noopener" style="color:#0028a5">${_.url.replace(/^https?:\/\//,"")}</a>`:""}</li>`).join("")}</ul>`:"",u="";for(let _ of["fa","ki","fu"])for(let m of X.kompetenzen.filter(g=>g.feld===_)){let g=Ts(m.id),v=Xa(m.id,g);v&&(u+=`<p style="font-size:11px;margin:5px 0;page-break-inside:avoid">\xAB${v}\xBB <span style="color:#8b94ab;font-size:9.5px;white-space:nowrap">\u2014 ${m.id} ${Z(m.name)}, ${D("stufe")} ${g}</span></p>`)}let p=`<!DOCTYPE html><html lang="${I.lang}"><head><meta charset="utf-8"><title>${D("steck_titel")}</title>
  <style>*{-webkit-print-color-adjust:exact !important;print-color-adjust:exact !important}
  body{font-family:"Helvetica Neue",Arial,sans-serif;color:#1c2333;max-width:780px;margin:24px auto;padding:0 16px}
  h1{color:#0028a5;font-size:23px} h2{color:#0028a5;font-size:15px;margin:18px 0 4px}
  .hint{font-size:10px;color:#5b6478;margin-top:16px;line-height:1.5}
  @media print {.noprint{display:none}}</style></head><body>
  <div class="noprint" style="float:right;text-align:right">
    <button onclick="print()" style="padding:10px 20px;border:0;background:#0028a5;color:#fff;border-radius:10px;cursor:pointer;font-weight:700;font-size:14px">\u{1F4BE} ${I.lang==="de"?"Als PDF speichern":"Save as PDF"}</button>
    <div style="font-size:10px;color:#5b6478;margin-top:4px">${I.lang==="de"?"Im Druckdialog \xABAls PDF sichern\xBB w\xE4hlen":"Choose 'Save as PDF' in the print dialog"}</div>
  </div>
  <h1>\u{1F4BC} ${D("steck_titel")} \u2014 ${Be(I.name)||"\u2014"}</h1>
  <p style="font-size:12px;color:#5b6478">${D("passdatum")}: ${n} \xB7 BSc ${li("bsc")}/120 \xB7 MSc ${li("msc")}/120 ${D("ects")} \xB7 ${I.mode==="serious"?D("modus_serious"):D("modus_frei")}</p>
  <p style="font-size:11px;color:#5b6478;line-height:1.5">${D("karriere_info")}</p>
  ${l}
  ${h}
  ${o}
  ${u?`<h2>\u{1F4DD} ${D("steck_cv")}</h2>${u}`:""}
  ${d}
  <p class="hint">${Z(X.meta.hinweis)} ${D("steck_fussnote")}</p>
  </body></html>`,f=window.open("about:blank");f&&f.document?(f.document.write(p),f.document.close()):gc("karrieresteckbrief.html",p,"text/html"),SND.pick()}function rn(i=[]){if(document.getElementById("ptabProfil").classList.toggle("on",Ha==="profil"),document.getElementById("ptabKarriere").classList.toggle("on",Ha==="karriere"),Ha==="karriere"){k_();return}if(br){z_(br);return}let{score:e,max:t}=Ji(),n=document.getElementById("profilList"),r=`<div class="ects-summary">
    <div class="box"><b>${li("bsc")}</b><span>BSc / 120 ${D("ects")}</span></div>
    <div class="box"><b>${li("msc")}</b><span>MSc / 120 ${D("ects")}</span></div>
  </div><div class="donuts">`;for(let a of["fa","ki","fu"]){let o=X.felder[a],c=X.kompetenzen.filter(u=>u.feld===a).map(u=>u.id),l=c.reduce((u,p)=>u+e[p],0),h=c.reduce((u,p)=>u+t[p],0),d=h?Math.round(l/h*100):0;r+=`<div class="donut"><div class="ring" style="background:conic-gradient(${o.farbe} ${d*3.6}deg, #e8ebf4 0)"><b>${d}%</b></div><span>${a==="fa"?"Fach":a==="ki"?"KI":"Future"}</span></div>`}r+="</div>",r+=mf(e,t);for(let a of["fa","ki","fu"]){let o=X.felder[a];r+=`<div class="kfeld"><span class="fdot" style="background:${o.farbe}"></span>${Z(o.name)}</div>`;for(let c of X.kompetenzen.filter(l=>l.feld===a)){let l=t[c.id]?Math.round(e[c.id]/t[c.id]*100):0;r+=`<button class="kbar ${i.includes(c.id)?"bump":""}" data-k="${c.id}"><div class="klabel"><span><span class="kid">${c.id}</span>${Z(c.name)}</span><span>${l}%</span></div>
        <div class="track"><div class="fill" style="background:${o.farbe};width:${l}%"></div></div></button>`}}let s=n.scrollTop;n.innerHTML=r,n.scrollTop=s,n.querySelectorAll(".kbar").forEach(a=>a.onclick=()=>{br=a.dataset.k,SND.pick(),rn()})}document.getElementById("ptabProfil").onclick=()=>{Ha="profil",br=null,rn()};document.getElementById("ptabKarriere").onclick=()=>{Ha="karriere",br=null,SND.pick(),rn()};var O_=.4;function Ts(i){let e=r=>{let{komp:s}=Jt(r);return[...s.fa||[],...s.ki||[],...s.fu||[]].includes(i)},t=r=>{let{komp:s}=qm(r);return[...s.fa||[],...s.ki||[],...s.fu||[]].includes(i)},n=0;for(let r=1;r<=4;r++){let s=0,a=0;for(let o of X.slots)o.stufe===r&&(t(o)&&(s+=$u(o.ects)),Qe(o.slot)&&e(o)&&(a+=$u(o.ects)));s>0&&a/s>=O_&&(n=r)}return n}function z_(i){let e=ln[i];if(!e){br=null,rn();return}let t=X.felder[e.feld],{score:n,max:r}=Ji(),s=r[i]?Math.round(n[i]/r[i]*100):0,a=document.getElementById("profilList"),o=[];for(let f of X.slots){let{komp:_,haupt:m}=Jt(f);[..._.fa||[],..._.ki||[],..._.fu||[]].includes(i)&&o.push({slot:f,haupt:(m||[]).includes(i),built:Qe(f.slot),w:((m||[]).includes(i)?2:1)*f.ects})}o.sort((f,_)=>_.built-f.built||_.w-f.w);let c=o.filter(f=>f.built),l=o.filter(f=>!f.built).sort((f,_)=>wi(_.slot).ok-wi(f.slot).ok||_.w-f.w).slice(0,4),h=Ts(i),d=f=>{let _=X.gruppen[f.slot.gruppe].farbe;return`<button class="modrow ${f.built?"builtrow":""}" data-slot="${f.slot.slot}" style="border:0;width:100%;text-align:left;cursor:pointer;background:${f.built?"#eef7f1":"transparent"}">
      <span class="mdot" style="background:${_}"></span>
      <span style="flex:1">${kt(f.slot)}</span>
      ${f.haupt?`<span class="haupt-tag" title="${D("hauptkomp")}">\u2605</span>`:""}
      <span style="color:#8b94ab;font-variant-numeric:tabular-nums">${f.slot.ects}</span>
    </button>`};a.innerHTML=`
    <button class="kdetail-back">${D("zurueck")}</button>
    <div class="kdetail">
      <h4><span style="color:${t.farbe}">${i}</span> ${Z(e.name)}</h4>
      <p class="ich">\xAB${Z(e.ich)}\xBB</p>
      <div class="kbar" style="cursor:default"><div class="klabel"><span>${Z(t.name)}</span><span>${s}%</span></div>
        <div class="track"><div class="fill" style="background:${t.farbe};width:${s}%"></div></div></div>
      <div class="subhead">${D("stufe_erreicht")}</div>
      <div class="stufen">${[1,2,3,4].map(f=>`<span class="sdot ${h>=f?"on":""}" title="${Z(X.stufen[f-1].name)}">${f}</span>`).join("")}
        <span style="font-size:10.5px;color:#5b6478;margin-left:4px">${h?Z(X.stufen[h-1].name):"\u2014"}</span></div>
      ${G_(e,n,r)}
      <div class="subhead">${D("k_aufgebaut")} (${c.length})</div>
      ${c.length?c.map(d).join(""):`<p style="font-size:11.5px;color:#8b94ab;margin:2px 6px">${D("k_keine")}</p>`}
      ${H_(i,h)}
      ${V_(i,c)}
      ${l.length?`<div class="subhead">${D("k_naechste")}</div>`+l.map(d).join(""):""}
    </div>`,a.querySelector(".kdetail-back").onclick=()=>{br=null,rn()},a.querySelectorAll(".modrow").forEach(f=>f.onclick=()=>Mr(f.dataset.slot));let u=a.querySelector("[data-cvcopy]");u&&(u.onclick=async()=>{try{await navigator.clipboard.writeText(u.dataset.cvcopy)}catch{}u.textContent="\u2713 "+D("cv_copied"),SND.pick()});let p=a.querySelector("[data-cvai]");p&&(p.onclick=async()=>{let f=a.querySelector("[data-cvrole]").value.trim();if(!f)return;let _=a.querySelector("[data-cvaiout]");_.style.display="flex",_.querySelector("p").textContent=D("ai_wartet");try{let m=Xa(i,Ts(i)),g=await ku(`Formuliere GENAU EINEN CV-tauglichen Satz (${I.lang==="de"?"Deutsch, Schweizer Rechtschreibung":"English"}, dritte Person ohne Subjekt, keine \xDCbertreibung) f\xFCr die Kompetenz \xAB${Z(ln[i].name)}\xBB \u2014 zugeschnitten auf diese Zielrolle: ${f}. Ausgangsbaustein: \xAB${m}\xBB. Nur der Satz, nichts anderes.`);_.querySelector("p").textContent="\xAB"+g.replace(/^«|»$/g,"")+"\xBB",_.querySelector("[data-cvaicopy]").onclick=async()=>{try{await navigator.clipboard.writeText(g)}catch{}SND.pick()}}catch{_.querySelector("p").textContent=D("tutor_err")}})}function Xa(i,e){let n=(window.KARRIERE&&window.KARRIERE.cv||{})[i];if(!n||!e)return null;let r=n[e]||n[String(e)]||(Array.isArray(n.stufen)?n.stufen[e-1]:null);return r?Z(r):null}function H_(i,e){let t=Xa(i,e);if(!t)return"";let n=hc?`<div style="display:flex;gap:6px;margin:2px 4px 6px">
    <input data-cvrole type="text" placeholder="${D("ai_cv_ph")}" style="flex:1;border:1.5px solid #dbe1ef;border-radius:8px;padding:6px 9px;font:500 11px var(--font)">
    <button class="ghostbtn" data-cvai style="padding:6px 9px;font-size:10.5px">${D("ai_cv_btn")}</button>
  </div><div data-cvaiout style="display:none" class="cvrow"><p></p><button data-cvaicopy>\u{1F4CB}</button></div>`:"";return`<div class="subhead">\u{1F4DD} ${D("cv_titel")} (${D("stufe")} ${e})</div>
    <div class="cvrow"><p>\xAB${t}\xBB</p><button data-cvcopy="${t.replace(/"/g,"&quot;")}">\u{1F4CB} ${D("cv_copy")}</button></div>${n}`}function ff(i,e,t){let n=i.proxy.map(r=>t[r]?e[r]/t[r]:0);return Math.round(n.reduce((r,s)=>r+s,0)/Math.max(1,n.length)*100)}function G_(i,e,t){if(!i.sub||!i.sub.length)return"";let n=X.felder.fu,r=`<div class="subhead">\u{1F9ED} ${D("fs12_titel")} (${i.sub.length})</div>
    <p style="font-size:10px;color:#8b94ab;margin:0 6px 4px">${D("fs12_hint")}</p>`;for(let s of i.sub){let a=ff(s,e,t);r+=`<div class="kbar" style="cursor:default"><div class="klabel"><span><span class="kid">${s.id}</span>${Z(s.name)}</span><span>${a}%</span></div>
      <div class="track"><div class="fill" style="background:${n.farbe};width:${a}%"></div></div></div>`}return r}function V_(i,e){let t=[];for(let n of e){let r=Cs(n.slot);I.quiz[r]&&t.push(`<div class="evrow"><span class="evic">\u{1F6A9}</span><span>${D("ev_quiz")}: ${kt(n.slot).split(",")[0]}</span></div>`);let s=I.quests[n.slot.slot];s&&s.done&&t.push(`<div class="evrow"><span class="evic">\u2726</span><span>${D("ev_quest")}: ${kt(n.slot).split(",")[0]}${s.note?` \u2014 <i>\xAB${Be(s.note)}\xBB</i>`:""}</span></div>`)}return t.length?`<div class="subhead">\u{1F5C2} ${D("evidenz_titel")} (${t.length})</div>`+t.join(""):""}var Yt=document.getElementById("card"),_s="zukunft",Ka="klassisch",Ya="DeNC",Si=null,vs=null,ys=null,Ga=null;function fc(i){let e=vt[i];if(!e)return;Gn=i;let t=Qe(i),n=I.placed[I.mode][i]||{};Ka=n.stil||Ka,Ya=n.sp||Ya,Si=n.opt||(e.optionen?e.optionen[0]:null),vs=n.thema||null,ys=n.frage||null,Ga=n.artefakt||null;let{kat:r}=Jt(e);document.getElementById("cardDot").style.background="#"+td(e).getHexString(),document.getElementById("cardTitle").textContent=kt(e),document.getElementById("cardCode").textContent=`${n.opt||e.code} \xB7 ${Z(X.gruppen[e.gruppe].name)}`;let s=(r||"B").split(/[+/]/).map(o=>o.trim()).filter(o=>X.pruefungslogik[o]),a=e.kategorie==="Wahlpflicht"?`<span class="badge" style="background:#b3831d">\u2605 ${D("kat_wahlpflicht")}</span>`:e.kategorie==="Wahl"?`<span class="badge" style="background:#6b7a99">\u2606 ${D("kat_wahl")}</span>`:`<span class="badge" style="background:#3c4356">${D("kat_pflicht")}</span>`;document.getElementById("cardBadges").innerHTML=`<span class="badge" style="background:#5b6478">${e.ects} ${D("ects")}</span>`+a+`<span class="badge" style="background:#39415a">${D("stufe")} ${e.stufe}</span>
     <span class="badge" style="background:#7a86a3">${D(e.rhythmus==="beide"?"beide":e.rhythmus.toLowerCase())}${e.sem2?" \xB7 "+D("zweisem"):""}</span>`+s.map(o=>`<span class="badge" style="background:${X.pruefungslogik[o].farbe}">${Z(X.pruefungslogik[o].name)}</span>`).join(""),Ei(e),ai(e),gf(e),Yt.classList.add("open"),document.body.classList.add("card-open"),Wa(I.cardSize||"m",!1)}function gf(i){let e=document.getElementById("fbRow");if(!e)return;if(Bt.active){e.style.display="none";return}e.style.display="flex";let t=(I.fb||{})[i.slot]||{};e.innerHTML=`<span class="fblbl">\u{1F6A6} ${D("fb_frage")}</span>
    ${["g","y","r"].map(r=>`<button class="fbamp ${t.a===r?"on":""}" data-amp="${r}" title="${D("fb_"+r)}" aria-label="${D("fb_"+r)}">${r==="g"?"\u{1F7E2}":r==="y"?"\u{1F7E1}":"\u{1F534}"}</button>`).join("")}
    ${t.a?`<input type="text" data-fbnote maxlength="200" placeholder="${D("fb_ph")}" value="${Be(t.note)}">`:""}`,e.querySelectorAll(".fbamp").forEach(r=>r.onclick=()=>{I.fb||(I.fb={});let s=I.fb[i.slot]||{};s.a===r.dataset.amp?delete I.fb[i.slot]:(I.fb[i.slot]={a:r.dataset.amp,note:s.note||"",ts:new Date().toISOString().slice(0,10)},s.a||Et(D("fb_danke"))),it(),SND.pick(),gf(i)});let n=e.querySelector("[data-fbnote]");n&&(n.onchange=()=>{I.fb&&I.fb[i.slot]&&(I.fb[i.slot].note=n.value.trim().slice(0,200),it())})}function Sr(){Yt.classList.remove("open"),document.body.classList.remove("card-open"),Gn=null,Zt()}document.getElementById("cardClose").onclick=()=>{Sr(),Zi()};var Va=["s","m","l"],W_={s:.46,m:.7,l:1};function Wa(i,e){Va.includes(i)||(i="m"),Yt.dataset.size=i,Yt.style.removeProperty("--ch");let t=document.getElementById("cardSize");t&&(t.textContent=i==="l"?"\u2921":"\u2922",t.setAttribute("aria-label",D(i==="l"?"aria_karte_klein":"aria_karte_groesse")),t.title=D(i==="l"?"aria_karte_klein":"aria_karte_groesse")),e!==!1&&(I.cardSize=i,it()),requestAnimationFrame(xs)}function Cu(i){let e=Va.indexOf(Yt.dataset.size||"s");Wa(Va[Math.max(0,Math.min(Va.length-1,e+i))])}function xs(){let i=document.getElementById("cardBodyWrap"),e=document.getElementById("cardBody");if(!i||!e)return;let t=e.scrollHeight-e.scrollTop-e.clientHeight;i.classList.toggle("more",t>8),Yt.classList.toggle("hasmore",e.scrollHeight-e.clientHeight>8)}{let i=document.getElementById("cardGrip"),e=document.getElementById("cardBody"),t=document.getElementById("cardSize");e&&e.addEventListener("scroll",xs,{passive:!0}),window.addEventListener("resize",xs),Yt.addEventListener("transitionend",r=>{r.propertyName==="height"&&xs()}),t&&(t.onclick=()=>{Cu(Yt.dataset.size==="l"?-2:1),SND.pick()});let n=Yt.querySelector(".head");if(n&&n.addEventListener("dblclick",r=>{r.target.closest("button")||Wa(Yt.dataset.size==="s"?"m":"s")}),i){let r=0,s=0,a=!1,o=()=>window.innerHeight-76;i.addEventListener("pointerdown",l=>{a=!0,r=l.clientY,s=Yt.getBoundingClientRect().height,Yt.classList.add("dragging");try{i.setPointerCapture(l.pointerId)}catch{}l.preventDefault()}),i.addEventListener("pointermove",l=>{if(!a)return;let h=Math.max(180,Math.min(o(),s+(r-l.clientY)));Yt.style.setProperty("--ch",h+"px"),xs()});let c=()=>{if(!a)return;a=!1,Yt.classList.remove("dragging");let l=Yt.getBoundingClientRect().height,h="s",d=1/0;for(let u of Va){let p=Math.min(o(),W_[u]*window.innerHeight);Math.abs(p-l)<d&&(d=Math.abs(p-l),h=u)}Wa(h)};i.addEventListener("pointerup",c),i.addEventListener("pointercancel",c),i.addEventListener("keydown",l=>{l.key==="ArrowUp"?(Cu(1),l.preventDefault()):l.key==="ArrowDown"?(Cu(-1),l.preventDefault()):(l.key==="Enter"||l.key===" ")&&(Wa(Yt.dataset.size==="s"?"m":"s"),l.preventDefault())})}}document.getElementById("cardTabs").addEventListener("click",i=>{let e=i.target.closest("button");if(!e)return;_s=e.dataset.tab,document.querySelectorAll("#cardTabs button").forEach(n=>n.classList.toggle("on",n===e)),Gn&&Ei(vt[Gn]);let t=document.getElementById("cardBody");t&&(t.scrollTop=0),requestAnimationFrame(xs)});function $_(i){let{komp:e,haupt:t}=Jt(i);return'<div class="komp-pills">'+[...e.fa||[],...e.ki||[],...e.fu||[]].map(r=>{let s=ln[r];if(!s)return"";let a=X.felder[s.feld];return`<span class="kpill ${t.includes(r)?"haupt":""}" style="border-color:${a.farbe};color:${a.farbe}">${r} ${Z(s.name)}</span>`}).join("")+"</div>"}function _f(i,e){let{komp:t,haupt:n}=Jt(i),r={F:t.fa||[],K:t.ki||[],S:t.fu||[]},s=[];for(let a of e||[]){let o=r[a]||[],c=o.filter(l=>(n||[]).includes(l));(c.length?c:o.slice(0,1)).forEach(l=>{s.includes(l)||s.push(l)})}return s}function j_(i,e){return _f(i,e.b).map(n=>{let r=ln[n];if(!r)return"";let s=X.felder[r.feld];return`<span class="lz-kid" style="color:${s.farbe};border-color:${s.farbe}" title="${Z(r.name)}">${n}</span>`}).join("")}function q_(i){let{komp:e,haupt:t}=Jt(i),n=[...e.fa||[],...e.ki||[],...e.fu||[]],r=(t&&t.length?t:n).filter(o=>ln[o]).slice(0,5);if(!r.length)return"";let s=r.map(o=>`${o} ${Z(ln[o].name)}`).join(", ");return`<p style="margin-top:8px;font-size:12px;color:#3c4356;line-height:1.5">${I.lang==="de"?`<b>Die Studierenden</b> bauen in diesem Modul vor allem folgende Kompetenzen auf: ${s}.`:`<b>Students</b> primarily build the following competences in this module: ${s}.`}</p>`}function Ei(i){let e=Ku(i),t=document.getElementById("cardBody"),n=`<p style="color:#5b6478;font-style:italic">${D("keine_texte")}</p>`;if(_s==="zukunft"){let r=X.baukasten&&X.baukasten.zuordnung[i.slot]||[],s=r.length?`<div style="margin-top:10px"><span style="font:700 11px var(--font);color:#5b6478">${D("baukasten_titel")}:</span>
      <span class="komp-pills" style="display:inline-flex;margin-left:4px">${r.map(a=>{let o=X.baukasten.defs[a];return o?`<span class="kpill" data-bk="${a}" role="button" tabindex="0" title="${Z(o.kurz)}" style="border-color:#b9c2d9;cursor:pointer">${Z(o.name)}</span>`:""}).join("")}</span></div>`:"";t.innerHTML=(e?`<p style="color:#5b6478;font-size:12px">${Z(e.heute)}</p><p style="margin-top:6px">${Z(e.zukunft)}</p>`:n)+q_(i)+$_(i)+s,t.querySelectorAll("[data-bk]").forEach(a=>a.onclick=()=>{let o=X.baukasten.defs[a.dataset.bk];o&&(Et(Z(o.name)+": "+Z(o.kurz)),SND.pick())})}else if(_s==="lernziele")t.innerHTML=e&&e.lernziele&&e.lernziele.length?`<p style="font-size:10.5px;color:#8b94ab;margin:0 2px 6px">${D("lz_hint")}</p><ul style="list-style:none;padding-left:2px">${e.lernziele.map(r=>`<li style="margin:5px 0"><span class="lz-kids">${j_(i,r)}</span>${Z(r)}</li>`).join("")}</ul>`:n;else if(_s==="ki"){let{kat:r}=Jt(i),s=(r||"B").split(/[+/]/).map(a=>a.trim()).filter(a=>X.pruefungslogik[a]);t.innerHTML=(e?`<p>${Z(e.ki)}</p>`:n)+'<ul style="margin-top:8px">'+s.map(a=>`<li><b style="color:${X.pruefungslogik[a].farbe}">${Z(X.pruefungslogik[a].name)}</b> \u2014 ${Z(X.pruefungslogik[a].def)}</li>`).join("")+"</ul>"}else _s==="quest"&&X_(i,t,e,n)}var Gm={de:{ok:["Sauber hergeleitet! \u{1F9E0}","Signifikant richtig.","Das sitzt \u2014 weiter so!","Evidenzbasiert geantwortet. \u2713","Dein Hippocampus liefert."],no:["Fast! Schau dir das Warum an:","Guter Versuch \u2014 hier steckt der Denkfehler:","Kein Drama: Fehler = Lernmoment.","Knapp daneben \u2014 die Erkl\xE4rung hilft:","Das war der beliebteste Distraktor:"]},en:{ok:["Cleanly reasoned! \u{1F9E0}","Significantly correct.","That one stuck \u2014 keep going!","An evidence-based answer. \u2713","Your hippocampus delivers."],no:["Almost! Check the why:","Good try \u2014 here's the catch:","No drama: errors are learning moments.","Close \u2014 the explanation helps:","That was the most popular distractor:"]}},xt=null;function Iu(i){let e=[...Array(i).keys()];for(let t=i-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function X_(i,e,t,n){let r=Yu(i),s=Cs(i),a="";if(r&&r.length)if(I.quiz[s])a+=`<div class="quiz-done-banner">\u{1F6A9} ${D("quiz_bestanden")}</div>`;else{(!xt||xt.code!==s)&&(xt={code:s,i:0,oks:[],picked:null,order:Iu(r[0].a.length)});let m=xt,g=r[m.i];if((!m.order||m.order.length!==g.a.length)&&(m.order=Iu(g.a.length)),a+=`<p style="font-weight:800;margin-bottom:2px">\u{1F9E9} ${D("quiz_titel")}</p>`,I.mode==="serious"&&!Qe(i.slot)&&(a+=`<p style="font-size:11px;color:#b35c00;margin-bottom:6px">${D("quiz_gate_hint")}</p>`),a+=`<div class="quiz-progress">${[0,1,2].map(v=>`<span class="qp ${m.oks[v]?"done":v===m.i?"cur":""}"></span>`).join("")}</div>`,a+=`<p style="font-size:10.5px;color:#5b6478">${D("quiz_von").replace("{i}",m.i+1)}</p>`,a+=`<p class="quiz-q">${Z(g.q)}</p>`,m.order.forEach(v=>{let y=g.a[v],x="";m.picked!==null&&(x=v===g.korrekt?"ok":v===m.picked?"no":""),a+=`<button class="quiz-a ${x}" data-ai="${v}" ${m.picked!==null?"disabled":""}>${Z(y)}</button>`}),m.picked!==null){let v=m.picked===g.korrekt,y=Gm[I.lang]||Gm.de,x=(v?y.ok:y.no)[(m.i+g.korrekt)%5];a+=`<div class="quiz-erkl"><b>${v?"\u2705 ":"\u274C "}${x}</b><br>${Z(g.erkl)}</div>`,hc&&!v&&(a+=`<button class="ghostbtn" data-qai style="margin-top:6px">${D("ai_quizhilfe")}</button><div data-qaiout class="quiz-erkl" style="display:none;margin-top:6px"></div>`);let M=m.i===r.length-1;v?M||(a+=`<button class="primary" style="margin-top:8px" data-qnext>${D("quiz_weiter")} \u2192</button>`):a+=`<button class="primary" style="margin-top:8px" data-qredo>\u21BA ${D("quiz_nochmal")}</button>`}}else I.mode==="serious"&&(a+=`<p style="font-size:11.5px;color:#8b94ab">${D("quiz_fehlt")}</p>`);let o=I.quests[i.slot]||{},c=t&&t.quest;a+=`<p style="font-weight:800;margin:12px 0 2px">\u2726 ${D("praxis_quest")}</p>`,a+=c?`<p><b>${Z(c.titel)}</b></p><p style="margin-top:4px">${Z(c.text)}</p>`:n,o.done&&(a+=`<p style="color:var(--ok);margin-top:8px"><b>\u2713 ${D("quest_abgeschlossen")}</b></p>`),a+=`<p style="font-weight:700;font-size:12px;margin:10px 0 3px">\u{1F4DD} ${D("notiz_titel")}</p>
    <textarea data-qnote rows="3" maxlength="500" placeholder="${D("notiz_ph")}" style="width:100%;border:1.5px solid #dbe1ef;border-radius:10px;padding:8px 10px;font:500 12px var(--font);resize:vertical">${Be(o.note)}</textarea>
    <p data-qnotesaved style="font-size:10px;color:#8b94ab;margin:2px 0 0;visibility:hidden">\u2713 ${D("notiz_gespeichert")}</p>`,hc&&c&&(a+=`<details style="margin-top:10px"><summary style="cursor:pointer;font:700 12px var(--font);color:var(--blue)">${D("ai_feedback")}</summary>
      <textarea data-aiq rows="3" placeholder="${D("ai_feedback_ph")}" style="width:100%;margin-top:6px;border:1.5px solid #dbe1ef;border-radius:10px;padding:8px 10px;font:500 12px var(--font)"></textarea>
      <button class="primary" data-aiqbtn style="margin-top:6px">${D("ai_senden")}</button>
      <div data-aiqout class="quiz-erkl" style="display:none;margin-top:6px"></div></details>`),hc&&["400","402","403","501","502","511","s05","s06","s08"].includes(i.slot)&&Bu&&(a+=`<button class="ghostbtn" data-aivig style="margin-top:10px">${D("ai_vignette")}</button>`),e.innerHTML=a;let h=e.querySelector("[data-aiqbtn]");h&&(h.onclick=async()=>{let m=e.querySelector("[data-aiq]"),g=e.querySelector("[data-aiqout]"),v=m.value.trim();if(v){g.style.display="block",g.textContent=D("ai_wartet");try{g.textContent=await ku(`Du bist Tutor:in im Psychologiestudium UZH. Gib formatives Feedback (${I.lang==="de"?"Deutsch, Schweizer Rechtschreibung":"English"}, max. 90 W\xF6rter, keine Note) auf die L\xF6sung einer \xDCbungsaufgabe. Nenne genau EINE St\xE4rke und EINEN konkreten Verbesserungspunkt, freundlich und fachlich pr\xE4zise.
Aufgabe (\xAB${Z(c.titel)}\xBB): ${Z(c.text)}
L\xF6sung der/des Studierenden: ${v}
Feedback:`)}catch{g.textContent=D("tutor_err")}}});let d=e.querySelector("[data-aivig]");d&&(d.onclick=()=>Bu.open("vignette",i));let u=e.querySelector("[data-qnote]");if(u){let m=null;u.addEventListener("input",()=>{let g=I.quests[i.slot]||{done:!1,note:""};g.note=u.value.trim().slice(0,500),I.quests[i.slot]=g,it(),clearTimeout(m),m=setTimeout(()=>{let v=e.querySelector("[data-qnotesaved]");v&&(v.style.visibility="visible",setTimeout(()=>{v.style.visibility="hidden"},1600))},500)})}e.querySelectorAll(".quiz-a").forEach(m=>m.onclick=()=>{if(!xt||xt.picked!==null)return;let g=+m.dataset.ai,v=r[xt.i];xt.picked=g,xt.oks[xt.i]=g===v.korrekt,g===v.korrekt?SND.quest():SND.err(),xt.i===r.length-1&&xt.oks.every(Boolean)&&xt.oks.length===r.length&&(I.quiz[s]=!0,it(),setTimeout(()=>{SND.fanfare();let x=Lt[i.slot];x&&ja(x.position.x,x.position.y+2.5,x.position.z,60,3),Qe(i.slot)?Mi(i.slot):wi(i).ok&&Et("\u{1F513} "+D("quiz_freigeschaltet")),af(),Zt(),Ei(i),ai(i)},900)),Ei(i)});let p=e.querySelector("[data-qnext]");p&&(p.onclick=()=>{xt.i++,xt.picked=null,xt.order=null,Ei(i)});let f=e.querySelector("[data-qredo]");f&&(f.onclick=()=>{xt.picked=null,xt.order=Iu(r[xt.i].a.length),Ei(i)});let _=e.querySelector("[data-qai]");_&&(_.onclick=async()=>{let m=e.querySelector("[data-qaiout]");m.style.display="block",m.textContent=D("ai_wartet");let g=r[xt.i];try{m.innerHTML=(await ku(`Du bist Tutor:in im Psychologiestudium UZH. Eine Person hat diese Quizfrage falsch beantwortet. Erkl\xE4re das Konzept in 2 S\xE4tzen NEU (anders als die Standarderkl\xE4rung) und stelle dann GENAU EINE kurze \xDCbungsfrage dazu, gefolgt von \xABMusterantwort:\xBB und einer 1-Satz-Musterantwort. Sprache: ${I.lang==="de"?"Deutsch (Schweizer Rechtschreibung)":"English"}.
Frage: ${Z(g.q)}
Richtige Antwort: ${Z(g.a[g.korrekt])}
Gew\xE4hlte falsche Antwort: ${Z(g.a[xt.picked])}`)).replace(/Musterantwort:([\s\S]*)$/i,(v,y)=>`<details style="margin-top:4px"><summary style="cursor:pointer;font-weight:700">${I.lang==="de"?"Musterantwort anzeigen":"Show model answer"}</summary>${y.trim()}</details>`)}catch{m.textContent=D("tutor_err")}})}function ai(i){let e=document.getElementById("cardActions");if(e.innerHTML="",Bt.active)return;let t=Qe(i.slot);if(i.optionen&&!t){let r=document.createElement("div");r.className="optpick",r.innerHTML=`<span>${D("optionwahl")}</span>`,i.optionen.forEach(s=>{let a=document.createElement("button");a.textContent=nn[s]?Z(nn[s].titel):s,a.classList.toggle("on",Si===s),a.onclick=()=>{Si=s,ai(i),Ei(i)},r.appendChild(a)}),e.appendChild(r)}if(i.schwerpunktwahl){let r=document.createElement("div");r.className="schwerpick",r.innerHTML=`<span>${D("schwerpunkt")}</span>`,Object.keys(X.schwerpunkte).forEach(s=>{let a=document.createElement("button");a.textContent=s,a.title=Z(X.schwerpunkte[s].name),a.setAttribute("aria-label",Z(X.schwerpunkte[s].name)),a.style.borderColor=X.schwerpunkte[s].farbe;let o=t?I.placed[I.mode][i.slot].sp||"DeNC":Ya;a.classList.toggle("on",o===s),a.onclick=()=>{t?(I.placed[I.mode][i.slot].sp=s,it(),Mi(i.slot)):Ya=s,ai(i),Zt()},r.appendChild(a)}),e.appendChild(r)}if(Xi[i.slot]){let r=document.createElement("div");r.className="schwerpick themapick",r.innerHTML=`<span>${D("thema")}</span>`,Xi[i.slot].forEach(a=>{let o=document.createElement("button");o.textContent=Z(a.name),o.title=Z((X.richtungen[a.r]||{}).kurz||a.name),o.style.borderColor=(X.richtungen[a.r]||{}).farbe||"#b9c2d9";let c=t?I.placed[I.mode][i.slot].thema||null:vs;o.classList.toggle("on",c===a.id),o.onclick=()=>{t?(I.placed[I.mode][i.slot].thema=I.placed[I.mode][i.slot].thema===a.id?null:a.id,i.slot==="BA"&&(I.placed[I.mode].BA.frage=null),it(),Mi(i.slot)):(vs=vs===a.id?null:a.id,i.slot==="BA"&&(ys=null),_n&&za(_n)),ai(i),Zt(),rn()},r.appendChild(o)});let s=document.createElement("p");s.style.cssText="font-size:10px;color:#8b94ab;margin:2px 4px 0",s.textContent=D("thema_hint"),r.appendChild(s),e.appendChild(r)}if(i.slot==="BA"&&X.baFragen){let r=t?I.placed[I.mode].BA.thema||null:vs;if(r&&X.baFragen[r]){let s=document.createElement("div");s.className="schwerpick themapick",s.innerHTML=`<span>${D("frage")}</span>`,X.baFragen[r].forEach(o=>{let c=(X.baFormen||{})[o.form]||{},l=document.createElement("button");l.textContent=`${c.icon||""} ${Z(o.name)}`,l.title=Z(c.name||o.name);let h=t?I.placed[I.mode].BA.frage||null:ys;l.classList.toggle("on",h===o.id),l.onclick=()=>{t?(I.placed[I.mode].BA.frage=I.placed[I.mode].BA.frage===o.id?null:o.id,it()):ys=ys===o.id?null:o.id,ai(i),rn()},s.appendChild(l)});let a=document.createElement("p");a.style.cssText="font-size:10px;color:#8b94ab;margin:2px 4px 0",a.textContent=D("frage_hint"),s.appendChild(a),e.appendChild(s)}{let s=document.createElement("div");s.className="schwerpick themapick",s.innerHTML=`<span>${D("artefakt")}</span>`,(X.baArtefakte||[]).forEach(o=>{let c=document.createElement("button");c.textContent=`${o.icon} ${Z(o.name)}`,c.title=Z(o.kurz);let l=t?I.placed[I.mode].BA.artefakt||null:Ga;c.classList.toggle("on",l===o.id),c.onclick=()=>{t?(I.placed[I.mode].BA.artefakt=I.placed[I.mode].BA.artefakt===o.id?null:o.id,it(),Mi("BA")):Ga=Ga===o.id?null:o.id,ai(i)},s.appendChild(c)});let a=document.createElement("p");a.style.cssText="font-size:10px;color:#8b94ab;margin:2px 4px 0",a.textContent=D("artefakt_hint"),s.appendChild(a),e.appendChild(s)}}{let r=document.createElement("div");r.className="stilpick",r.innerHTML=`<span>${D("stil")}</span>`,X.stile.forEach(s=>{let a=document.createElement("button");a.textContent=Z(s.name);let o=t?I.placed[I.mode][i.slot].stil||"klassisch":Ka;a.classList.toggle("on",o===s.id),a.onclick=()=>{t?(I.placed[I.mode][i.slot].stil=s.id,it(),Mi(i.slot)):(Ka=s.id,_n&&za(_n)),ai(i)},r.appendChild(a)}),e.appendChild(r)}if(I.mode==="serious"&&!t){let r=document.createElement("label");r.className="sw",r.innerHTML=`<input type="checkbox" ${I.bestanden[i.slot]?"checked":""}> <span>${D("bestanden")}</span>`,r.querySelector("input").onchange=s=>{I.bestanden[i.slot]=s.target.checked,it(),Zt(),_n&&za(_n),ai(i)},e.appendChild(r)}let n=(i.empf||[]).filter(r=>!Qe(r));if(!t&&n.length){let r=document.createElement("div");r.className="reason",r.style.color="#b35c00",r.textContent=D("empf_hinweis")+n.map(s=>Z(vt[s].titel).split(",")[0]).join(" \xB7 "),e.appendChild(r)}if(I.mode==="serious"&&!t){let r=Yu(i),s=document.createElement("div");s.className="gatelist";let a=(o,c,l)=>{let h=document.createElement(l?"button":"span");h.className="gaterow"+(o?" ok":""),h.innerHTML=`<span class="gbox">${o?"\u2714":"\u25CB"}</span><span>${c}</span>`,l&&(h.onclick=l),s.appendChild(h)};a(!!I.bestanden[i.slot],D("gate_bestanden"),null),r&&a(Ym(i),D("gate_quiz"),()=>{_s="quest",document.querySelectorAll("#cardTabs button").forEach(o=>o.classList.toggle("on",o.dataset.tab==="quest")),Ei(i)}),e.appendChild(s)}if(t){let r=I.quests[i.slot]||{},s=document.createElement("button");if(s.className=r.done?"ghostbtn":"primary",s.textContent=r.done?D("quest_undone"):D("quest_done"),s.onclick=()=>{let a=I.quests[i.slot]||{done:!1,note:""};if(r.done)I.quests[i.slot]={done:!1,note:a.note||""},g_(Lt[i.slot]),Mi(i.slot);else{I.quests[i.slot]={done:!0,note:a.note||""},sf(Lt[i.slot],i),SND.quest();let o=Lt[i.slot];ja(o.position.x,o.position.y+2,o.position.z,40,2.5),Mi(i.slot)}it(),Zt(),ai(i),Ei(i)},e.appendChild(s),["box","tower","wing","bay","slab","step"].includes(i.form)){let a=document.createElement("button");a.className="ghostbtn",a.textContent=i.form==="slab"||i.form==="step"?"\u{1F526} "+D("keller"):D("betreten"),a.onclick=()=>xf(i.slot),e.appendChild(a)}{let a=document.createElement("button");a.className="ghostbtn",a.textContent=D("entfernen"),a.onclick=()=>w_(i.slot),e.appendChild(a)}}else{let r=wi(i),s=document.createElement("button");if(s.className="primary",s.textContent=D("bauen"),s.disabled=!r.ok,s.onclick=()=>no(i),e.appendChild(s),!r.ok&&r.reason){let a=document.createElement("div");a.className="reason",a.textContent=r.reason,e.appendChild(a)}}}function Mi(i){let e=vt[i],t=Lt[i];t&&(Ki.remove(t),rd(t));let n=eo(e);nd(n,e),Ki.add(n),Lt[i]=n,pc()}function ld(i){i==="serious"&&!I.seriousSeen&&(I.seriousSeen=!0,setTimeout(()=>alert(D("serious_erklaert")),150)),I.mode=i,it(),document.getElementById("modeFrei").classList.toggle("on",i==="frei"),document.getElementById("modeSerious").classList.toggle("on",i==="serious"),Zi(),Sr(),to(),Zt(),rn(),Et(D(i==="serious"?"serious_info":"frei_info"))}document.getElementById("modeFrei").onclick=()=>ld("frei");document.getElementById("modeSerious").onclick=()=>ld("serious");typeof I.sound>"u"&&(I.sound=!0);SND.enabled=I.sound;var ju=document.getElementById("btnSound");ju.textContent=I.sound?"\u{1F50A}":"\u{1F507}";ju.onclick=()=>{I.sound=!I.sound,SND.enabled=I.sound,it(),ju.textContent=I.sound?"\u{1F50A}":"\u{1F507}",I.sound&&SND.pick()};document.getElementById("btnLang").onclick=()=>{I.lang=I.lang==="de"?"en":"de",it(),Xu(),Zt(),rn(),Gn&&fc(Gn),vf()};var K_={menu:"modalMenu",help:"modalHelp",privacy:"modalPrivacy",about:"modalAbout",share:"modalShare",onboard:"modalOnboard",p0:"modalP0",minor:"modalMinor",bauhuette:"modalBauhuette",geraete:"modalGeraete",changelog:"modalChangelog"};function cn(i){document.getElementById(K_[i]).classList.add("open")}document.querySelectorAll(".modal").forEach(i=>{i.addEventListener("click",e=>{(e.target===i||e.target.hasAttribute("data-close"))&&i.classList.remove("open")})});document.getElementById("btnMenu").onclick=()=>cn("menu");document.getElementById("btnHelp").onclick=()=>{cn("help")};document.getElementById("btnPrivacy").onclick=()=>cn("privacy");document.getElementById("btnAbout").onclick=()=>cn("about");function vf(){document.getElementById("helpBox").innerHTML=window.HELP_HTML[I.lang]+`<div class="mactions"><button class="primary" data-close>${D("schliessen")}</button></div>`,document.getElementById("privacyBox").innerHTML=window.PRIVACY_HTML[I.lang]+`<div class="mactions"><button class="primary" data-close>${D("schliessen")}</button></div>`,document.getElementById("aboutBox").innerHTML=window.ABOUT_HTML[I.lang]+`<div class="mactions"><button class="primary" data-close>${D("schliessen")}</button></div>`;let i=document.getElementById("ckDirektMsc");i&&(i.checked=I.direktMSc,i.onchange=e=>{I.direktMSc=e.target.checked,it(),Zt(),Et(D("direkt_msc"))}),yf()}function yf(){for(let i of["bsc","msc"]){let e=document.getElementById(i==="bsc"?"palRowBsc":"palRowMsc");e&&(e.innerHTML=`<span>${i==="bsc"?"\u{1F3E0}":"\u{1F3F0}"}</span>`,(X.paletten||[]).forEach(t=>{let n=document.createElement("button");n.textContent=Z(t.name),n.style.borderColor=t.akzent,n.classList.toggle("on",((I.pal||{})[i]||"uzh")===t.id),n.onclick=()=>{I.pal||(I.pal={bsc:"uzh",msc:"uzh"}),I.pal[i]=t.id,it(),to(),yf(),SND.pick()},e.appendChild(n)}))}}document.getElementById("btnExport").onclick=()=>{let i=new Blob([JSON.stringify(I,null,2)],{type:"application/json"}),e=document.createElement("a");e.href=URL.createObjectURL(i),e.download="kompetenzhaus-"+new Date().toISOString().slice(0,10)+".json",e.click(),URL.revokeObjectURL(e.href)};document.getElementById("btnImport").onclick=()=>document.getElementById("fileImport").click();document.getElementById("fileImport").onchange=i=>{let e=i.target.files[0];if(!e)return;if(!confirm(D("import_confirm"))){i.target.value="";return}let t=new FileReader;t.onload=()=>{try{I=Object.assign(ws(),JSON.parse(t.result)),it(),Xu(),to(),Zt(),rn(),Er(),ld(I.mode),Et(D("import_ok"))}catch{Et(D("import_err"))}},t.readAsText(e)};document.getElementById("btnReset").onclick=()=>{confirm(D("reset_confirm"))&&(I=ws(),I.onboarded=!0,it(),Zi(),Sr(),to(),Zt(),rn(),Er())};function Y_(){let i={n:I.name,p:I.placed[I.mode],q:Object.fromEntries(Object.entries(I.quests).filter(([e,t])=>t.done).map(([e,t])=>[e,1]))};return btoa(unescape(encodeURIComponent(JSON.stringify(i))))}document.getElementById("btnShare").onclick=()=>{let i=(location.origin==="null"||location.protocol==="file:",location.href.split("#")[0]);document.getElementById("shareLink").value=i+"#h="+Y_(),cn("share")};document.getElementById("btnCopy").onclick=async()=>{let i=document.getElementById("shareLink");i.select();try{await navigator.clipboard.writeText(i.value)}catch{document.execCommand("copy")}Et(D("kopiert"))};function Z_(){if(!location.hash.startsWith("#h="))return!1;try{let i=JSON.parse(decodeURIComponent(escape(atob(location.hash.slice(3)))));return Bt.active=!0,Bt.data=i,I.placed={frei:i.p||{},serious:{}},I.mode="frei",I.quests=Object.fromEntries(Object.entries(i.q||{}).map(([e])=>[e,{done:!0,note:""}])),document.getElementById("visitorText").textContent=`${D("besuch_bei")} ${i.n||"?"} \u{1F3E0}`,document.getElementById("visitor").classList.add("open"),document.getElementById("panelL").style.display="none",document.getElementById("modeSeg").style.display="none",!0}catch{return!1}}document.getElementById("visitorOwn").onclick=()=>{location.hash="",location.reload()};document.getElementById("visitorSave").onclick=()=>{try{let i=Ja&&JSON.parse(localStorage.getItem(Ss)||"null")||ws();i.nachbarn=(i.nachbarn||[]).filter(e=>e.n!==Bt.data.n).slice(0,2),i.nachbarn.push(Bt.data),localStorage.setItem(Ss,JSON.stringify(i)),Et(D("nachbar_gespeichert"))}catch{}};var ka=!1,$a=new Oe;Ze.add($a);function J_(i){let e=document.createElement("canvas");e.width=512,e.height=128;let t=e.getContext("2d");t.font="700 52px Helvetica, Arial",t.textAlign="center",t.fillStyle="rgba(255,255,255,.92)";let n=t.measureText(i).width+60;t.beginPath(),t.roundRect((512-n)/2,18,n,92,26),t.fill(),t.fillStyle="#0028a5",t.fillText(i,256,82);let r=new es(e),s=new Jr(new cr({map:r,transparent:!0}));return s.scale.set(7,1.75,1),s}function Q_(){$a.clear();let i=[[-27,-23],[0,-28],[27,-23]],e=.75;(I.nachbarn||[]).slice(0,3).forEach((t,n)=>{let[r,s]=i[n],a=new Oe;for(let[c,l]of Object.entries(t.p||{})){let h=vt[c];if(!h)continue;let d=eo(h,{state:l,placedMap:t.p}),u=X.haeuser[h.haus];d.position.set(r+u.origin[0]*.45+h.pos.x*Ye*e,dc(h.pos.y)*e,s+h.pos.z*Ye*e),d.scale.set(e,e,e),a.add(d)}let o=J_(t.n||"?");o.position.set(r,9,s),a.add(o),$a.add(a)}),$a.visible=ka}document.getElementById("btnCampus").onclick=()=>{ka=!ka,Q_(),$a.visible=ka,ka?(Hn(new E(0,40,52),new E(0,2,-7),1.6),Et(D("campus_an"))):(Hn(new E(-23,17,30),new E(-7,3,0),1.4),Et(D("campus_aus")))};function ev(i,e){let t=window.KARRIERE||{},n=t.pfade||[];if(!n.length)return"";let r={};X.kompetenzen.forEach(x=>r[x.id]=e[x.id]?i[x.id]/e[x.id]:0);let s=X.slots.filter(x=>Qe(x.slot)).length,a=n.map(x=>({p:x,fit:ad(x,r)})).sort((x,M)=>M.fit-x.fit),o=a[0],c=a.slice(1,3),l=As(),h=Rs(),d=ji(),u=Ms(),p=bs(),f=`<div style="page-break-before:always"></div>
  <h2 style="color:#0028a5;margin:8px 0 2px">\u{1F9ED} ${D("pass_karr_titel")}</h2>
  <p style="font-size:11px;color:#5b6478;line-height:1.5;margin-bottom:8px">${D("pass_karr_intro")}</p>`;if(s<6)return f+`<p style="font-size:11.5px;color:#8b94ab">${D("pass_karr_leer")}</p>`;let _=[[D("richtung_bsc"),l.r?`${X.richtungen[l.r].icon} ${Z(X.richtungen[l.r].kurz)}`:"\u2014"],[D("richtung_msc"),h.total?Object.entries(h.counts).filter(([,x])=>x>0).map(([x,M])=>`${x} (${M}\xD7)`).join(" \xB7 "):"\u2014"],[D("frage"),d?`${((X.baFormen||{})[d.form]||{}).icon||""} ${Z(d.name)}`:"\u2014"],[D("artefakt"),u?`${u.icon} ${Z(u.name)}`:"\u2014"],["Wahlpflicht",p&&nn[p]?Z(nn[p].titel):"\u2014"]];f+=`<h3 style="margin:12px 0 4px">${D("pass_karr_wahl")}</h3>
  <table style="font-size:11.5px">${_.map(([x,M])=>`<tr><th style="width:190px">${x}</th><td>${Be(M)}</td></tr>`).join("")}</table>`;let m=o.p;f+=`<h3 style="margin:16px 0 4px">${D("pass_karr_top")}: ${m.icon} ${Be(Z(m.name))} \u2014 ${o.fit}%</h3>
  <p style="font-size:11.5px;color:#2c3550;margin:0 0 6px">${Be(Z(m.hint))}</p>`;let g=m.stelle;if(g){let x=M=>`<ul style="margin:0;padding-left:16px">${M.map(T=>`<li style="margin:2px 0">${Be(Z(T))}</li>`).join("")}</ul>`;f+=`<table style="font-size:11.5px;margin-top:6px">
      <tr><th style="width:150px">${D("stelle_titel")}</th><td><b>${Be(Z(g.titel))}</b></td></tr>
      <tr><th>${D("stelle_pensum")}</th><td>${Be(Z(g.pensum))}</td></tr>
      <tr><th>${D("stelle_wo")}</th><td>${Be(Z(g.wo))}</td></tr>
      <tr><th>${D("stelle_aufgaben")}</th><td>${x(g.aufgaben)}</td></tr>
      <tr><th>${D("stelle_anforderungen")}</th><td>${x(g.anforderungen)}</td></tr>
      <tr><th>${D("stelle_lohn")}</th><td>${Be(Z(g.lohn))}<div style="font-size:10px;color:#5b6478;margin-top:3px">${D("lohnq_"+g.lohnQ)} \u2014 ${Be(Z(g.lohnBeleg))}</div></td></tr>
      <tr><th>${D("stelle_wann")}</th><td>${Be(Z(g.wann))}</td></tr>
    </table>`}let v=od(m);f+=`<p style="font-size:11.5px;margin:8px 0 3px"><b>${D("gap_titel")}</b></p>`,f+=v.length?`<table style="font-size:11px"><tr><th>${D("kompetenz")}</th><th style="width:70px;text-align:center">${D("stufe")}</th><th style="width:70px;text-align:center">${D("ziel_kurz")}</th></tr>
       ${v.map(x=>{let M=ln[x.id];return`<tr><td>${x.id} \xB7 ${M?Be(Z(M.name)):""}</td><td style="text-align:center">${x.ist}</td><td style="text-align:center"><b>${x.ziel}</b></td></tr>`}).join("")}</table>`:`<p style="font-size:11.5px;color:#0e8f7e;margin:0">\u2713 ${D("gap_ok")}</p>`,m.roadmap&&m.roadmap.length&&(f+=`<p style="font-size:11.5px;margin:12px 0 3px"><b>${D("roadmap_titel")}</b></p>
    <ol style="font-size:11.5px;line-height:1.55;padding-left:18px;margin:0">
      ${m.roadmap.map(x=>`<li style="margin:4px 0"><b>${Be(Z(x.t))}</b> \u2014 ${Be(Z(x.d))}</li>`).join("")}</ol>`),m.wahl&&m.wahl.hinweis&&(f+=`<p style="font-size:10.5px;color:#5b6478;line-height:1.5;margin:8px 0 0;border-left:3px solid #dbe1ef;padding-left:8px">${Be(Z(m.wahl.hinweis))}</p>`),c.length&&(f+=`<h3 style="margin:16px 0 4px">${D("pass_karr_alt")}</h3>
    <table style="font-size:11.5px">${c.map(x=>`<tr><th style="width:230px">${x.p.icon} ${Be(Z(x.p.name))}</th><td style="width:52px;text-align:center"><b>${x.fit}%</b></td><td>${x.p.stelle?`<b>${Be(Z(x.p.stelle.titel))}</b><br><span style="color:#5b6478">${Be(Z(x.p.stelle.pensum))}</span>`:Be(Z(x.p.hint))}</td></tr>`).join("")}</table>`);let y=(t.lit||[]).slice(0,8);return y.length&&(f+=`<p style="font-size:10px;color:#5b6478;line-height:1.5;margin-top:12px"><b>${D("pass_karr_q")}</b><br>
      ${y.map(x=>`${Be(x.apa)}${x.url?` <a href="${x.url}" style="color:#0028a5">${x.url}</a>`:""}`).join("<br>")}</p>`),f+=`<p style="font-size:10px;color:#8b94ab;margin-top:6px">${D("pass_karr_disclaimer")}</p>`,f}document.getElementById("btnPass").onclick=()=>{let{score:i,max:e}=Ji(),t=new Date().toLocaleDateString(I.lang==="de"?"de-CH":"en-GB"),n="";for(let u of X.slots){if(!Qe(u.slot))continue;let p=I.placed[I.mode][u.slot],f=I.quests[u.slot]||{},{kat:_}=Jt(u),m=p&&p.opt&&nn[p.opt]?nn[p.opt].ects:u.ects,g=(()=>{let v=Xm(u.slot),y=v?" \xB7 "+Z(v.name):"";if(u.slot==="BA"){let x=ji(),M=Ms();x&&(y+=" \xB7 "+(((X.baFormen||{})[x.form]||{}).icon||"")+" "+Z(x.name)),M&&(y+=" \xB7 "+M.icon+" "+Z(M.name))}return y})();n+=`<tr><td>${p&&p.opt||u.code}</td><td>${kt(u)}${p&&p.sp?" \xB7 "+p.sp:""}${g}</td><td style="text-align:center">${m}</td><td style="text-align:center">[${_}]</td><td>${f.done?"\u2726 ":""}${f.note?(f.done?"":"\u{1F4DD} ")+Be(f.note):""}</td></tr>`}let r="";for(let u of["fa","ki","fu"]){let p=X.felder[u];r+=`<h3 style="margin:14px 0 6px;color:${p.farbe}">${Z(p.name)}</h3>`;for(let f of X.kompetenzen.filter(_=>_.feld===u)){let _=e[f.id]?Math.round(i[f.id]/e[f.id]*100):0;if(r+=`<div style="display:flex;align-items:center;gap:8px;margin:3px 0;font-size:12px">
        <span style="width:260px">${f.id} \xB7 ${Z(f.name)}</span>
        <span style="flex:1;background:#eee;border-radius:4px;height:10px;overflow:hidden"><span style="display:block;height:100%;width:${_}%;background:${p.farbe}"></span></span>
        <span style="width:36px;text-align:right">${_}%</span></div>`,f.sub&&f.sub.length)for(let m of f.sub){let g=ff(m,i,e);r+=`<div style="display:flex;align-items:center;gap:8px;margin:1px 0 1px 22px;font-size:10.5px;color:#555">
            <span style="width:238px">${m.id} \xB7 ${Z(m.name)}</span>
            <span style="flex:1;background:#f2f2f2;border-radius:3px;height:6px;overflow:hidden"><span style="display:block;height:100%;width:${g}%;background:${p.farbe};opacity:.65"></span></span>
            <span style="width:36px;text-align:right">${g}%</span></div>`}}}r+='<p style="font-size:9.5px;color:#8b94ab;margin-top:4px">FS1\u2013FS12: AIComp-Future-Skills-Felder (Ehlers et al., 2024) \u2014 Detailebene zu Fu1\u2013Fu3.</p>';let s=window.ICH_STUFEN||{},a=window.ICH_LERNZIELE||{},o=`<div style="page-break-before:always"></div>
  <h2 style="color:#0028a5;margin:8px 0 2px">\u{1F9ED} ${D("ich_titel")}</h2>
  <p style="font-size:11px;color:#5b6478;line-height:1.5;margin-bottom:6px">${D("ich_intro")}</p>`;for(let u of["fa","ki","fu"]){let p=X.felder[u],f=u==="fa"?"F":u==="ki"?"K":"S";o+=`<h3 style="color:${p.farbe};border-bottom:2.5px solid ${p.farbe};padding-bottom:3px;margin:16px 0 6px">${Z(p.name)}</h3>`;let _=!1;for(let g of X.kompetenzen.filter(v=>v.feld===u)){let v=Ts(g.id);if(!v)continue;_=!0;let y=(s[g.id]||[])[v-1];o+=`<div style="margin:8px 0 2px;display:flex;align-items:baseline;gap:8px;flex-wrap:wrap">
        <b style="font-size:12px">${g.id} \xB7 ${Z(g.name)}</b>
        <span style="font-size:9px;font-weight:700;color:#fff;background:${p.farbe};border-radius:999px;padding:2px 8px;white-space:nowrap">${D("stufe")} ${v} \xB7 ${Z(X.stufen[v-1].name)}</span></div>`,y&&(o+=`<p style="font-size:11.5px;font-style:italic;color:#2c3550;margin:0 0 2px 2px">\xAB${Z(y)}\xBB</p>`)}if(!_){o+=`<p style="font-size:10.5px;color:#8b94ab">${D("ich_keine")}</p>`;continue}let m="";for(let g of X.slots){if(!Qe(g.slot))continue;let v=(I.placed[I.mode][g.slot]||{}).opt||g.code;(a[v]||[]).forEach(y=>{if(!(y.b||[]).includes(f))return;let x=_f(g,[f]).map(M=>`<b style="color:${p.farbe}">${M}</b>`).join(" ");m+=`<li style="margin:3px 0">${x?x+" \u2014 ":""}${Z(y)} <span style="color:#8b94ab;font-size:9px;white-space:nowrap">\xB7 ${kt(g).split(",")[0]}</span></li>`})}m&&(o+=`<p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#5b6478;margin:9px 0 2px">\u2713 ${D("ich_konkret")}</p>
      <ul style="font-size:10.5px;line-height:1.5;padding-left:16px;margin:0 0 8px">${m}</ul>`)}o+=`<p style="font-size:9.5px;color:#8b94ab;margin-top:6px">${D("ich_fussnote")}</p>`;let c=ev(i,e),l=tv(),h=`<!DOCTYPE html><html lang="${I.lang}"><head><meta charset="utf-8"><title>Kompetenzpass</title>
  <style>*{-webkit-print-color-adjust:exact !important;print-color-adjust:exact !important}
  body{font-family:"Helvetica Neue",Arial,sans-serif;color:#1c2333;max-width:820px;margin:24px auto;padding:0 16px}
  h1{color:#0028a5;font-size:24px} table{border-collapse:collapse;width:100%;font-size:11.5px;margin-top:10px}
  td,th{border:1px solid #d8dce8;padding:5px 8px;text-align:left} th{background:#f0f3fa}
  .hint{font-size:10.5px;color:#5b6478;margin-top:18px;line-height:1.5}
  @media print {.noprint{display:none}}</style></head><body>
  <div class="noprint" style="float:right;text-align:right">
    <button onclick="print()" style="padding:10px 20px;border:0;background:#0028a5;color:#fff;border-radius:10px;cursor:pointer;font-weight:700;font-size:14px">\u{1F4BE} ${I.lang==="de"?"Als PDF speichern":"Save as PDF"}</button>
    <div style="font-size:10px;color:#5b6478;margin-top:4px">${I.lang==="de"?"Im Druckdialog \xABAls PDF sichern\xBB w\xE4hlen":"Choose 'Save as PDF' in the print dialog"}</div>
  </div>
  <h1>\u{1F393} ${D("pass")} \u2014 ${Be(I.name)||"\u2014"}</h1>
  <p style="font-size:12.5px;color:#5b6478">${D("passdatum")}: ${t} \xB7 ${I.mode==="serious"?D("modus_serious"):D("modus_frei")} \xB7 BSc: ${li("bsc")}/120 \xB7 MSc: ${li("msc")}/120 ${D("ects")}</p>
  ${l?`<img src="${l}" alt="Kompetenzhaus" style="width:100%;border-radius:12px;margin:8px 0">`:""}
  ${r}
  ${o}
  ${c}
  <h3 style="margin-top:18px">${D("bauplan")}</h3>
  <table><tr><th>Code</th><th>Modul</th><th>${D("ects")}</th><th>[A/B/C]</th><th>Quest \u2726</th></tr>${n}</table>
  <p class="hint">${Z(X.meta.hinweis)}<br>Kompetenzmodell: APA (2023); DGPs (2014); QAA (2023); Bass et al. (2025); Miao et al. (2024); Ehlers et al. (2024); Perkins et al. (2025).</p>
  </body></html>`,d=window.open("about:blank");if(d&&d.document)d.document.write(h),d.document.close();else{let u=new Blob([h],{type:"text/html"}),p=document.createElement("a");p.href=URL.createObjectURL(u),p.download="kompetenzpass.html",p.click(),URL.revokeObjectURL(p.href)}};function cd(){if(!I.envAuto)return;I.season=qu();let i=new Date,e=i.getHours()+i.getMinutes()/60;I.tod=Math.max(0,Math.min(100,Math.round((e-5.5)/17*100)));let t=document.getElementById("todSlider");t&&(t.value=I.tod),Er()}document.querySelectorAll("#envRow .envbtn[data-season]").forEach(i=>{i.onclick=()=>{I.envAuto=!1,I.season=i.dataset.season,it(),Er()}});document.getElementById("todSlider").oninput=i=>{I.envAuto=!1,I.tod=+i.target.value,it(),Er()};document.getElementById("btnEnvAuto").onclick=()=>{I.envAuto=!I.envAuto,it(),I.envAuto&&cd(),Er(),Et(D(I.envAuto?"envauto_an":"envauto_aus"))};setInterval(cd,6e4);document.getElementById("btnFoto").onclick=()=>{document.body.classList.add("foto");let i=Dt.position.clone(),e=Vt.target.clone(),t=Km()&&li("msc")>0?new E(0,3.5,0):new E(-11,3.5,0);Hn(new E(t.x-19,13,28),t,1.2,()=>{_c(),Tn.render(Ze,Dt);try{let n=document.createElement("a");n.href=Tn.domElement.toDataURL("image/png"),n.download="kompetenzhaus-"+new Date().toISOString().slice(0,10)+".png",n.click(),Et("\u{1F4F7} "+D("foto_hint"))}catch{}setTimeout(()=>{document.body.classList.remove("foto"),Hn(i,e,1)},600)})};function tv(){Tn.render(Ze,Dt);try{return Tn.domElement.toDataURL("image/jpeg",.82)}catch{return null}}document.getElementById("togL").onclick=()=>document.getElementById("panelL").classList.toggle("open");document.getElementById("togR").onclick=()=>document.getElementById("panelR").classList.toggle("open");var Mt=null;function ht(i,e,t,n,r,s,a,o=0){let c=new V(new Pt(i,e,t,2,Math.min(.04,i/4)),new ie({color:n,roughness:.85}));return c.position.set(r,s,a),c.rotation.y=o,c}function nv(i,e,t,n){let r=new Oe,s=i.form==="slab"||i.form==="step",a=new ie({color:s?14276043:15986662,roughness:.97,side:mt}),o=new ie({color:s?11841702:13215863,roughness:.92}),c=e-.2,l=t-.15,h=n-.2,d=new V(new Ve(c,.06,h),o);d.position.y=.05,r.add(d);let u=new V(new Je(c,l),a);u.position.set(0,l/2,-h/2),r.add(u),u.userData.wallN=new E(0,0,1);let p=new V(new Je(h,l),a.clone());p.rotation.y=Math.PI/2,p.position.set(-c/2,l/2,0),r.add(p),p.userData.wallN=new E(1,0,0);let f=new V(new Je(h,l),a.clone());f.rotation.y=-Math.PI/2,f.position.set(c/2,l/2,0),r.add(f),f.userData.wallN=new E(-1,0,0);let _=i.gruppe,m=.08,g=i.code;if(s&&g==="06SM200-001"){for(let L=0;L<2;L++){let z=ht(.52,.6,.5,16053488,-c*.3+L*.62,m+.3,-h*.32);r.add(z);let G=new V(new ni(.15,18),new ie({color:1845056,roughness:.25,metalness:.3}));G.position.set(-c*.3+L*.62,m+.32,-h*.32+.26),r.add(G)}let A=new V(new $e(.2,.16,.26,9),new ie({color:14263361,roughness:1,flatShading:!0}));A.position.set(c*.22,m+.13,h*.1),r.add(A);let P=new V(new $e(.012,.012,c*.7,5),new ie({color:9147563}));P.rotation.z=Math.PI/2,P.position.set(0,l*.78,h*.2),r.add(P),[14248523,4886745,15979342].forEach((L,z)=>r.add(ht(.16,.22,.02,L,-.3+z*.3,l*.78-.12,h*.2)))}else if(s&&g==="06SM200-002"){let A=new V(new $e(.3,.3,.85,12),new ie({color:13193021,roughness:.55,metalness:.25}));A.position.set(-c*.28,m+.43,-h*.28),r.add(A);let P=new V(new $e(.05,.05,c*.75,8),new ie({color:10134197,metalness:.6,roughness:.35}));P.rotation.z=Math.PI/2,P.position.set(0,l*.85,-h/2+.12),r.add(P);let L=new V(new $e(.05,.05,l*.7,8),P.material);L.position.set(-c*.28,l*.5,-h/2+.12),r.add(L),r.add(ht(.42,.55,.16,9147563,c*.28,l*.55,-h/2+.12));let z=new V(new ni(.09,14),new ie({color:16053488}));z.position.set(c*.28,l*.55,-h/2+.22),r.add(z)}else if(s&&g==="06SM200-003"){let A=new V(new $e(.02,.02,c*.7,6),new ie({color:9070146}));A.rotation.z=Math.PI/2,A.position.set(0,l*.7,-h*.3),r.add(A),[10405,14248523,2792847].forEach((P,L)=>r.add(ht(.2,.34,.06,P,-.3+L*.3,l*.7-.2,-h*.3))),r.add(ht(c*.6,.09,.28,9070146,0,m+.1,h*.2))}else if(s&&g==="06SM200-500"){for(let A=0;A<2;A++){let P=ht(.42,1,.4,1844019,-c*.25+A*.6,m+.5,-h*.3);r.add(P);for(let L=0;L<4;L++){let z=new V(new Je(.3,.02),new ie({color:988970,emissive:L%2?3526783:4886745,emissiveIntensity:.9}));z.position.set(-c*.25+A*.6,m+.24+L*.2,-h*.3+.21),r.add(z)}}r.add(ht(.7,.06,.4,9070146,c*.24,m+.36,h*.12))}else if(s&&g==="06SM200-501"){let A=ht(1.1,1.05,.26,9070146,-c*.2,m+.53,-h*.32);r.add(A),[14248523,10405,2792847,14263361,6185166,14774357].forEach((P,L)=>r.add(ht(.26,.09,.2,P,-c*.2-.38+L%3*.38,m+.4+Math.floor(L/3)*.34,-h*.32)))}else if(s&&g==="06SM200-502"){for(let A=0;A<2;A++)r.add(ht(.9,.95,.24,10127986,-c*.22+A*1,m+.48,-h*.33));[13287336,12173519,14263361,13287336].forEach((A,P)=>r.add(ht(.3,.22,.3,A,-c*.3+P%2*.5,m+.3+Math.floor(P/2)*.35,-h*.33)))}else if(_==="meth"||_==="mein"){r.add(ht(.9,.06,.5,9070146,-c*.2,m+.38,-h*.25));let A=new V(new Je(.5,.32),new ie({color:792624,emissive:8369384,emissiveIntensity:.55}));A.position.set(-c*.2,m+.62,-h*.25),r.add(A),r.add(ht(.34,.5,.34,3752282,-c*.2,m+.25,h*.05))}else if(_==="prop"){for(let A=0;A<2;A++)for(let P=0;P<3;P++)r.add(ht(.34,.42,.3,4156616,(P-1)*.5,m+.21,h*.05+A*.45));r.add(ht(.8,.55,.35,9070146,0,m+.28,-h*.3))}else if(_==="klin"){r.add(ht(.45,.4,.42,14248523,-c*.22,m+.2,0,.5)),r.add(ht(.45,.4,.42,2792847,c*.22,m+.2,0,-.5)),r.add(ht(.32,.3,.32,9070146,0,m+.15,-h*.05));let A=new V(new At(.16,0),new ie({color:5149760,flatShading:!0}));A.position.set(c*.34,m+.45,-h*.32),r.add(A),r.add(ht(.1,.28,.1,12159578,c*.34,m+.14,-h*.32))}else if(_==="enk"){r.add(ht(.3,.55,.3,14212326,0,m+.28,-h*.15));let A=new V(new At(.2,1),new ie({color:15245492,roughness:.6,flatShading:!0}));A.position.set(0,m+.72,-h*.15),A.name="spin",r.add(A)}else if(_==="swod"){let A=new V(new $e(.42,.42,.06,12),new ie({color:9070146,roughness:.85}));A.position.set(0,m+.4,0),r.add(A),r.add(ht(.08,.4,.08,7033144,0,m+.2,0));for(let P=0;P<4;P++){let L=P/4*Math.PI*2;r.add(ht(.3,.38,.28,14263361,Math.cos(L)*.72,m+.19,Math.sin(L)*.72,-L))}}else{let A=ht(1.1,1.1,.24,9070146,-c*.24,m+.55,-h*.36);r.add(A),[14248523,2792847,4156616,14263361,6185166].forEach((P,L)=>r.add(ht(.1,.26,.16,P,-c*.24-.4+L*.2,m+.78,-h*.36))),r.add(ht(.7,.06,.45,11109726,c*.2,m+.38,0)),r.add(ht(.3,.44,.3,3752282,c*.2,m+.22,h*.28))}let v=new ya(16769971,s?.75:.95,Math.max(c,h)*3.2,1.8);v.position.set(0,l*.86,0),r.add(v);let y=new V(new Un(.14,.12,10,1,!0),new ie({color:15979342,side:mt,emissive:16769971,emissiveIntensity:.35}));if(y.position.set(0,l*.9,0),r.add(y),!s){let A=new V(new Je(c,h),new ie({color:15262938,side:mt,roughness:1}));A.rotation.x=Math.PI/2,A.position.y=l,r.add(A)}if(s){for(let A of[-c*.28,c*.28]){let P=new V(new Je(.44,.2),new ie({color:12376302,emissive:12376302,emissiveIntensity:.4}));P.position.set(A,l*.9,-h/2+.02),r.add(P)}if(h>3.2){let P=l/7;for(let L=0;L<6;L++){let z=new V(new Ve(.78,P,.36),sc.clone());z.position.set(c/2-.44,P/2+L*P,h/2-.28-(5-L)*.37),r.add(z)}}}else{let A=new V(new ni(Math.min(c,h)*.32,22),new ie({color:new de(X.gruppen[i.gruppe].farbe).lerp(new de(16777215),.62),roughness:1}));A.rotation.x=-Math.PI/2,A.position.y=.09,r.add(A);let P=ht(.5,.38,.03,15921385,c/2-.06,l*.6,0,Math.PI/2);r.add(P);let L=new V(new Je(.4,.28),new ie({color:10404832}));L.rotation.y=-Math.PI/2,L.position.set(c/2-.085,l*.6,0),r.add(L);let z=new V(new Un(.09,.12,4),new ie({color:5143130,flatShading:!0}));z.rotation.y=-Math.PI/2,z.position.set(c/2-.09,l*.57,.03),r.add(z)}i.code==="06SM200-003"&&[{p:"P1",info:{de:"P1 \xB7 \xABWie \u2039denkt\u203A ein LLM?\xBB \u2014 Live-Demo, Falschinfo finden (KI4)",en:"P1 \xB7 'How does an LLM think?' \u2014 live demo, spotting misinformation (KI4)"}},{p:"P2",info:{de:"P2 \xB7 Spielregeln & Disclosure \u2014 \xABassistieren, nicht ersetzen \u2014 deklarieren \u2014 verifizieren\xBB (KI5)",en:"P2 \xB7 Rules & disclosure \u2014 'assist, don't replace \u2014 declare \u2014 verify' (KI5)"}},{p:"P3",info:{de:"P3 \xB7 Fakten-Check \u2014 erfundene Referenzen gegen das Lehrbuch pr\xFCfen (KI6)",en:"P3 \xB7 Fact check \u2014 testing invented references against the textbook (KI6)"}},{p:"P4",info:{de:"P4 \xB7 Erste Nutzung mit Haltung \u2014 Prompt-Duell, Mit-/Ohne-KI-Reflexion (KI1)",en:"P4 \xB7 First use with attitude \u2014 prompt duel, with/without-AI reflection (KI1)"}}].forEach((P,L)=>{let z=new Oe,G=new V(new Je(.34,.44),new ie({color:16777215,roughness:.7})),B=qa(P.p,"#0028a5");B.scale.set(.4,.16,1),B.position.z=.02,z.add(G,B),z.rotation.y=Math.PI/2,z.position.set(-c/2+.03,l*.55,-h*.3+L*.5),z.children.forEach(J=>J.userData.info=P.info),z.userData.info=P.info,r.add(z)});let{komp:x,haupt:M}=Jt(i),T=[...x.fa||[],...x.ki||[],...x.fu||[]].slice(0,6);return T.forEach((A,P)=>{let L=ln[A];if(!L)return;let z=X.felder[L.feld].farbe,G=new Oe,B=new V(new Je(.56,.42),new ie({color:16777215,roughness:.6})),J=qa(A,z);J.scale.set(.62,.24,1),J.position.z=.02,G.add(B,J);let W=Math.min(3,T.length),Q=(P%W-(W-1)/2)*.75,ee=l*.62-Math.floor(P/W)*.55;G.position.set(Q,ee,-h/2+.03),G.userData.kompId=A,G.children.forEach(le=>le.userData.kompId=A),r.add(G)}),r.traverse(A=>{A.isMesh&&(A.castShadow=!1,A.receiveShadow=!1)}),r}function xf(i){Mt&&Za();let e=vt[i],t=Lt[i];if(!e||!t||!["box","tower","wing","bay","slab","step"].includes(e.form))return;let n=e.form==="slab"||e.form==="step",r=e.pos.w*Ye,s=e.pos.d*Ye,a=n?Ba-.12:(e.form==="wing"?1.7:e.pos.h)*Sn,o=nv(e,r,a,s);o.position.copy(t.position),n&&(o.position.y=.24-Ba),Ze.add(o);let c=[];if(t.traverse(_=>{_.isMesh&&_.material&&(c.push({mat:_.material,opacity:_.material.opacity,transparent:_.material.transparent}),_.material.transparent=!0,_.material.opacity=.13,_.material.depthWrite=!1,_.material.needsUpdate=!0)}),n)for(let _ of[uc,Ju,Qu])_.transparent=!0,_.opacity=.14,_.depthWrite=!1,_.needsUpdate=!0;let l=e.pos.z>=0||e.form==="wing"?1:-1,h=o.position.clone().add(new E(0,a*.45,0)),d=n?s*.62+1.6:s*1.9+1.2,u=n?o.position.clone().add(new E(0,Ba+2.6,l*d)):t.position.clone().add(new E(0,a*.55,l*d)),p=Vt.minDistance;Vt.minDistance=.4,document.body.classList.add("inroom"),Hn(u,h,1.1);let f=document.createElement("button");f.className="iconbtn blue",f.style.cssText="position:fixed;left:50%;transform:translateX(-50%);bottom:18px;z-index:26",f.textContent="\u{1F6AA} "+D("verlassen"),f.onclick=Za,document.body.appendChild(f),Sr(),Mt={id:i,group:o,saved:c,btn:f,prevMin:p,keller:n},SND.pick()}function Za(){if(!Mt)return;if(document.body.classList.remove("inroom"),Ze.remove(Mt.group),Mt.saved.forEach(e=>{e.mat.opacity=e.opacity,e.mat.transparent=e.transparent,e.mat.depthWrite=!0,e.mat.needsUpdate=!0}),Mt.keller)for(let e of[uc,Ju,Qu])e.opacity=1,e.transparent=!1,e.depthWrite=!0,e.needsUpdate=!0;Mt.btn.remove(),Vt.minDistance=Mt.prevMin;let i=Lt[Mt.id];i&&Hn(i.position.clone().add(new E(-9,8,15)),i.position.clone(),1),Mt=null}function iv(){let i=document.getElementById("coach");if(Qe("003")){document.getElementById("obStart").textContent=D("tour_fertig"),cn("onboard");return}let e=vt["003"],t=X.haeuser[e.haus],n=new E(t.origin[0]+e.pos.x*Ye,.7,t.origin[2]+e.pos.z*Ye),r=window.innerWidth<720;Hn(new E(n.x+3,r?6.5:4.5,n.z+(r?13:8)),n,1.7,()=>{!Qe("003")&&!I.onboarded&&i.classList.contains("open")&&(za(e),Gn="003",Zt())}),i.style.cssText="left:50%;transform:translateX(-50%);bottom:26px",i.innerHTML=`<b>${D("fb1_t")}</b>${D("fb1")}<div class="cactions"><button data-fbskip style="background:rgba(255,255,255,.18);color:#fff">${D("fb1_skip")}</button><button data-fbgo>${D("fb1_go")}</button></div>`,i.classList.add("open"),i.querySelector("[data-fbgo]").onclick=()=>{SND.unlock(),Qe("003")||no(vt["003"])},i.querySelector("[data-fbskip]").onclick=()=>{i.classList.remove("open"),Zi(),cn("onboard")}}function io(i){if(I.tourDone&&!i)return;if(document.getElementById("milestone").classList.contains("open")){setTimeout(()=>io(i),2500);return}let e=document.getElementById("coach"),t=window.innerWidth<=1080,n=Dt.position.clone(),r=Vt.target.clone(),s="left:50%;transform:translateX(-50%);bottom:26px",a=document.getElementById("tutorFab").style.display==="block",o=(u,p,f,_)=>[new E(u+f,3.6,p+_),new E(u,.9,p)],c=[{sel:"#panelL",open:"panelL",tt:"tour1_t",tx:"tour1",css:t?s:"left:322px;top:120px"},{sel:"#card",tt:"tour2_t",tx:"tour2",css:"left:50%;transform:translateX(-50%);bottom:calc(46vh + 20px)"},{sel:"#panelR",open:"panelR",tt:"tour3_t",tx:"tour3",css:t?s:"right:322px;top:120px;left:auto"},{sel:"#btnPass",tt:"tour4_t",tx:"tour4",css:t?s:"right:12px;top:66px;left:auto"},{fly:o(Vi.position.x,Vi.position.z,3.2,4.5),tt:"tour5_t",tx:"tour5",css:s},{fly:o($i.position.x,$i.position.z,3,4.5),tt:"tour6_t",tx:"tour6",css:s},{fly:o(Wi.position.x,Wi.position.z,4,5.5),tt:"tour7_t",tx:"tour7",css:s},a?{sel:"#tutorFab",tt:"tour8_t",tx:"tour8",css:t?"right:12px;bottom:80px;left:auto":"right:320px;bottom:80px;left:auto"}:null].filter(Boolean),l=0,h=()=>{document.querySelectorAll(".coach-target").forEach(u=>u.classList.remove("coach-target")),e.classList.remove("open"),I.tourDone=!0,it(),Hn(n,r,1.2)},d=()=>{if(document.querySelectorAll(".coach-target").forEach(p=>p.classList.remove("coach-target")),t&&(document.getElementById("panelL").classList.remove("open"),document.getElementById("panelR").classList.remove("open")),l>=c.length){h();return}let u=c[l];if(t&&u.open&&document.getElementById(u.open).classList.add("open"),u.sel==="#card"&&!document.getElementById("card").classList.contains("open")){let p=Gn||mc();p&&Mr(p)}if(u.sel){let p=document.querySelector(u.sel);p&&p.offsetParent!==null&&p.classList.add("coach-target")}u.fly&&Hn(u.fly[0],u.fly[1],1.3),e.style.cssText=u.css,e.innerHTML=`<b>${D(u.tt)}</b>${D(u.tx)}<div class="cactions"><span class="cstep">${l+1}/${c.length}</span><span style="display:flex;gap:6px"><button data-skip style="background:rgba(255,255,255,.18);color:#fff">${D("tour_skip")}</button><button data-next>${l===c.length-1?D("tour_fertig"):D("tour_weiter")}</button></span></div>`,e.classList.add("open"),e.querySelector("[data-next]").onclick=()=>{l++,SND.pick(),d()},e.querySelector("[data-skip]").onclick=()=>{SND.pick(),h()}};d()}function rv(){let i=window.claude&&typeof window.claude.complete=="function"?window.claude.complete.bind(window.claude):null;if(!i){if(Fm){let h=document.getElementById("tutorFab");h.style.display="block",h.title=D("tutor_ext"),h.setAttribute("aria-label",D("tutor_ext")),h.onclick=()=>window.open(Fm,"_blank","noopener")}return}let e=document.getElementById("tutorFab"),t=document.getElementById("tutor"),n=document.getElementById("tutorMsgs");e.style.display="block";let r=[],s="tutor",a=null,o=(h,d)=>{let u=document.createElement("div");return u.className="tmsg "+h,u.textContent=d,n.appendChild(u),n.scrollTop=n.scrollHeight,u};e.onclick=()=>{t.classList.toggle("open"),t.classList.contains("open")&&!n.children.length&&o("bot",D("tutor_hi"))},document.getElementById("tutorClose").onclick=()=>t.classList.remove("open");let c=()=>{if(s==="vignette"&&a){let u=Ku(a);return`ROLLENSPIEL-MODUS im Lernspiel \xABDas Kompetenzhaus\xBB (Psychologiestudium UZH). Du spielst eine FIKTIVE Klientin/Person passend zum Modul \xAB${kt(a)}\xBB (Kontext: ${u?Z(u.heute).slice(0,240):""}). Regeln: (1) Alles ist erfunden \u2014 keine realen Ratschl\xE4ge, keine echten Diagnosen an die Nutzenden. (2) Bleibe konsequent in der Rolle, antworte kurz (2\u20134 S\xE4tze), realistisch, aber didaktisch ergiebig. (3) KEINE Schilderung akuter Suizidalit\xE4t oder schwerer Krisen; falls die Nutzenden solche Themen einbringen, verlasse die Rolle und verweise auf professionelle Hilfe (in der Schweiz: 143 / 147). (4) Wenn die Nutzenden \xABStopp\xBB schreiben, verlasse die Rolle und stelle GENAU EINE kurze Reflexionsfrage zum Gespr\xE4ch. Sprache: ${I.lang==="de"?"Deutsch (Schweizer Rechtschreibung)":"English"}.`}let h=X.slots.filter(u=>Qe(u.slot)).map(u=>kt(u)).join("; ")||"-",d=mc();return`Du bist der \xABKI-Baututor\xBB im Lernspiel \xABDas Kompetenzhaus\xBB (Psychologiestudium UZH, BSc/MSc; Module = Bausteine eines Hauses; Kompetenzen: Fa1\u2013Fa10 fachlich, KI1\u2013KI6 KI, Fu1\u2013Fu3 Future Skills; Pr\xFCfungslogik [A] KI-frei / [B] teilweise / [C] KI-integriert; Basis: Kompetenzaufbaumodell 02.07.2026, ein ENTWURF als Gespr\xE4chsbasis). Antworte kurz (max. 120 W\xF6rter), freundlich, auf ${I.lang==="de"?"Deutsch (Schweizer Rechtschreibung)":"English"}. Keine Rechtsausk\xFCnfte; verweise bei Studienberatung an die Studienprogrammleitung. Spielstand: gebaut = ${h}. Empfohlener n\xE4chster Baustein: ${d?kt(vt[d]):"-"}.`};Bu={open(h,d){s=h||"tutor",a=d||null,r=[],t.classList.add("open"),s==="vignette"&&(n.innerHTML="",o("bot",D("ai_vignette_sys")),l("(Beginne das Gespr\xE4ch mit einer kurzen Vorstellung deiner fiktiven Rolle.)",!0))}};let l=async(h,d)=>{let u=document.getElementById("tutorInput"),p=h||u.value.trim();if(!p)return;h||(u.value=""),d||o("me",p);let f=o("bot","\u2026"),_="Studierende:r",m=s==="vignette"?"Klientin":"Baututor";r.push(_+": "+p);try{let g=await i(c()+`

`+r.slice(-8).join(`
`)+`
`+m+":");f.textContent=String(g).trim(),r.push(m+": "+f.textContent)}catch{f.textContent=D("tutor_err")}s==="vignette"&&(p.toLowerCase().startsWith("stopp")||p.toLowerCase().startsWith("stop"))&&(s="tutor",a=null,r=[])};document.getElementById("tutorSend").onclick=()=>l(),document.getElementById("tutorInput").addEventListener("keydown",h=>{h.key==="Enter"&&l()})}function gc(i,e,t="application/json"){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:t})),n.download=i,n.click(),URL.revokeObjectURL(n.href)}function sv(){let i=I.msSeen[I.mode]||[],e=X.meilensteine.filter(t=>i.includes(t.id)).map(t=>({"@context":"https://www.w3.org/ns/credentials/v2",type:["VerifiableCredential","OpenBadgeCredential"],name:t.name.de,description:t.text.de,credentialSubject:{type:["AchievementSubject"],identifier:I.name||"anonym",achievement:{type:["Achievement"],name:t.name.de,description:t.text.de,criteria:{narrative:"Meilenstein im Kompetenzhaus (Selbstdeklaration, unsigniert \u2014 Entwurf)"},alignment:X.kompetenzen.map(n=>({type:["Alignment"],targetName:n.id+" "+n.name.de}))}},issuer:{type:["Profile"],name:"Das Kompetenzhaus \u2014 Psychologisches Institut UZH (Entwurf, unsigniert)"},validFrom:new Date().toISOString(),proof:[]}));gc("kompetenzhaus-badges.json",JSON.stringify(e,null,2))}function av(){let{score:i,max:e}=Ji(),t=`# Kompetenzportfolio \u2014 ${I.name||"\u2014"}

_${D("passdatum")}: ${new Date().toLocaleDateString("de-CH")} \xB7 ${I.mode==="serious"?"Serious Mode":"Freies Bauen"} \xB7 BSc ${li("bsc")}/120 ECTS \xB7 MSc ${li("msc")}/120 ECTS_

> Entwurf auf Basis des Kompetenzaufbaumodells vom 02.07.2026 \u2014 Selbstdeklaration, kein offizieller Leistungsnachweis.

## Kompetenzprofil

`;for(let n of["fa","ki","fu"]){t+=`### ${X.felder[n].name.de}

`;for(let r of X.kompetenzen.filter(s=>s.feld===n)){let s=e[r.id]?Math.round(i[r.id]/e[r.id]*100):0,a=Ts(r.id);t+=`- **${r.id} ${r.name.de}** \u2014 ${s}%${a?`, Stufe ${a}`:""}${Xa(r.id,a)?`
  - _${Xa(r.id,a)}_`:""}
`}t+=`
`}t+=`## Module & Reflexionen

`;for(let n of X.slots){if(!Qe(n.slot))continue;let r=I.quests[n.slot]||{},s=Cs(n);t+=`- **${kt(n)}** (${n.ects} ECTS)${I.quiz[s]?" \xB7 Quiz \u2713":""}${r.done?" \xB7 Quest \u2726":""}${r.note?`
  - Merksatz: \xAB${r.note}\xBB`:""}
`}gc("kompetenzhaus-portfolio.md",t,"text/markdown")}var Vm=null;function ov(i){if(Bt.active)return;let{score:e,max:t}=Ji(),n=[{id:"fa",name:"Fach",nameEn:"Domain"},{id:"ki",name:"KI",nameEn:"AI"},{id:"fu",name:"Future",nameEn:"Future"}],r=[];for(let a of n){let o=X.kompetenzen.filter(d=>d.feld===a.id).map(d=>d.id),c=o.reduce((d,u)=>d+e[u],0)/Math.max(1,o.reduce((d,u)=>d+t[u],0)),l=i[a.id]||0,h=Math.round((c-l)*1e3)/10;h>=.1&&r.push({txt:I.lang==="de"?a.name:a.nameEn,d:h,farbe:X.felder[a.id].farbe})}if(!r.length)return;let s=document.getElementById("deltaCard");s.innerHTML=`<b>${D("delta_titel")}</b>`+r.map(a=>`<span class="drow"><span class="ddot" style="background:${a.farbe}"></span>${Be(a.txt)} <b style="color:${a.farbe}">+${a.d.toFixed(1)}%</b></span>`).join(""),s.classList.add("show"),clearTimeout(Vm),Vm=setTimeout(()=>s.classList.remove("show"),3400)}function lv(){let{score:i,max:e}=Ji(),t={};for(let n of["fa","ki","fu"]){let r=X.kompetenzen.filter(s=>s.feld===n).map(s=>s.id);t[n]=r.reduce((s,a)=>s+i[a],0)/Math.max(1,r.reduce((s,a)=>s+e[a],0))}return t}var Wm=null;function Et(i){let e=document.getElementById("toast");e.textContent=i,e.classList.add("show"),clearTimeout(Wm),Wm=setTimeout(()=>e.classList.remove("show"),3200)}document.getElementById("obStart").onclick=()=>{I.name=document.getElementById("obName").value.trim().slice(0,40),I.onboarded=!0,it(),document.getElementById("modalOnboard").classList.remove("open"),SND.unlock();let i=Qe("003")?mc():"003";i&&Mr(i),setTimeout(io,900)};document.getElementById("modalOnboard").addEventListener("click",i=>{(i.target===document.getElementById("modalOnboard")||i.target.hasAttribute("data-close"))&&!I.onboarded&&!Bt.active&&(I.onboarded=!0,it(),setTimeout(io,900))});document.getElementById("btnBadges").onclick=sv;document.getElementById("btnOlat").onclick=av;document.getElementById("btnFb").onclick=()=>{let i=Object.entries(I.fb||{});if(!i.length){Et(D("fb_leer"));return}let e=r=>'"'+String(r||"").replace(/"/g,'""')+'"',t={g:"gruen",y:"gelb",r:"rot"},n=`\uFEFFcode;modul;ampel;kommentar;datum
`;for(let[r,s]of i){let a=vt[r];if(!a)continue;let o=(I.placed[I.mode][r]||{}).opt||a.code;n+=[e(o),e(kt(a)),t[s.a]||"",e(s.note),s.ts||""].join(";")+`
`}gc("kompetenzhaus-feedback-"+new Date().toISOString().slice(0,10)+".csv",n,"text/csv;charset=utf-8"),Et("\u{1F6A6} "+D("fb_exported").replace("{n}",i.length))};var $m={de:[["v8 \xB7 Juli 2026","Dein Wahlprofil wird zum Haus: Themenwahl in den drei BSc-Wahlseminaren und im BA-Themenfeld pr\xE4gt Erker, Dach und ein eigenes Wahrzeichen; im Master zeigt jede Vertiefung ihren Schwerpunkt architektonisch, ab 4 von 6 im selben Schwerpunkt entsteht ein grosses Wahrzeichen (Observatorium, Therapiegarten, Glasatrium). Wahlpflicht (goldene Kante) und freie Wahl (weisse Kante) sind sichtbar unterschieden, Auskragendes wird von Konsolen und St\xFCtzen getragen. Neu ausserdem: kuratierte Farbwelten pro Haus, zwei neue Baustile, Karriere-Tab mit Soll-Profilen, L\xFCckenanalyse und \xABNach dem Master\xBB-Roadmaps (inkl. Psychotherapie- und Neuropsychologie-Weg), Masterarbeit als \xABMeisterst\xFCck\xBB der Stufe 4."],["v7 \xB7 Juli 2026","Echter Keller unter dem Bodenniveau (Sockel ragen ins Erdreich), Haus vergr\xF6ssert & Innenr\xE4ume 1:1 an die Aussenh\xFClle gekoppelt, Porch mit Vordach und Stufen, Erstbau-Sequenz f\xFCr neue Besucher:innen, Bauh\xFCtte mit Evidenz zu den 8 Lehrelementen, Ampel-Feedback \u{1F6A6} an jedem Modul mit CSV-Export."],["v6 \xB7 Juli 2026","Mobile-\xDCberarbeitung (Tour, Kontraste, gr\xF6ssere Ziele), Quiz mit Erkl\xE4rung und Sofort-Wiederholung, 7 Karrierewege, Faktenkorrektur IPS-Leistungsnachweis [B]."],["v5 \xB7 Juli 2026","Baukasten-Chips in der Modul-Karte, Vorstufe-\u24EA-Briefkasten, Minor-Beet, KI-Suite in der Artifact-Version."],["v4 \xB7 Juli 2026","Begehbare Kellerr\xE4ume, 12 Future-Skills-Felder (AIComp), Innenraum-Politur, Kompetenzpass als PDF."],["v3 \xB7 Juli 2026","Quiz-Gate im Serious Mode, Karriere-Profil, Innenansicht mit Kompetenz-Tafeln, Foto-Modus, Open-Badges- und Portfolio-Export."]],en:[["v8 \xB7 July 2026","Your elective profile becomes the house: topic choices in the three BSc elective seminars and the thesis field shape bay windows, roof and a landmark of your own; in the Master's each specialisation shows its track architecturally, and 4 of 6 in the same track build a large landmark (observatory, therapy garden, glass atrium). Compulsory electives (gold edge) and free electives (white edge) are visibly distinct, and everything cantilevered is carried by corbels and columns. Also new: curated colour worlds per house, two new building styles, a career tab with target profiles, gap analysis and post-Master roadmaps (incl. the psychotherapy and neuropsychology routes), and the Master's thesis as a level-4 \xABmasterpiece\xBB."],["v7 \xB7 July 2026","A real basement below ground level (plinths reach into the earth), bigger house with interiors matched 1:1 to the exterior shell, porch with canopy and steps, first-build sequence for new visitors, site hut with evidence for the 8 teaching elements, traffic-light feedback \u{1F6A6} on every module with CSV export."],["v6 \xB7 July 2026","Mobile overhaul (tour, contrast, larger targets), quiz with explanations and instant retry, 7 career paths, factual fix for the IPS assessment [B]."],["v5 \xB7 July 2026","Teaching-toolkit chips on module cards, stage-\u24EA mailbox, minor garden bed, AI suite in the artifact edition."],["v4 \xB7 July 2026","Walkable basement rooms, 12 future-skills fields (AIComp), interior polish, passport as PDF."],["v3 \xB7 July 2026","Quiz gate in serious mode, career profile, interior view with competence plaques, photo mode, Open Badges and portfolio export."]]};document.getElementById("btnTour").onclick=()=>{document.getElementById("modalMenu").classList.remove("open"),!Bt.active&&(Sr(),io(!0))};document.getElementById("btnBauhuetteM").onclick=()=>{document.getElementById("modalMenu").classList.remove("open"),sd()};document.getElementById("btnGeraeteM").onclick=()=>{document.getElementById("modalMenu").classList.remove("open"),pf()};document.getElementById("btnChangelog").onclick=()=>{let i=$m[I.lang]||$m.de;document.getElementById("clogList").innerHTML=i.map(([e,t])=>`<div class="bhrow"><b>${e}</b><p>${t}</p></div>`).join(""),document.getElementById("modalMenu").classList.remove("open"),cn("changelog")};var cv=new Ma;function bf(){let i=window.innerWidth,e=window.innerHeight;Tn.setSize(i,e,!1),Dt.aspect=i/e,Dt.updateProjectionMatrix()}window.addEventListener("resize",bf);bf();var Gt=0,Mf=0;function Ef(){requestAnimationFrame(Ef),_c()}function _c(){Mf=performance.now();let i=Math.min(.5,cv.getDelta()),e=i;Uu>0&&(Uu-=i,e=0),Gt+=e;for(let t=qi.length-1;t>=0;t--){let n=qi[t];n.t+=e;let r=Math.min(1,n.t/n.dur);n.fn(n.ease(r)),r>=1&&(qi.splice(t,1),n.onDone&&n.onDone())}if(zn){let t=1+Math.sin(Gt*5)*.02;zn.scale.set(t,t,t)}for(let t of Object.values(Lt)){let n=t.getObjectByName("sparkle");n&&(n.rotation.y+=e*2.4,n.position.y+=Math.sin(Gt*3)*.0022);let r=t.getObjectByName("flag");r&&(r.rotation.y=Math.sin(Gt*2.2)*.25);let s=t.getObjectByName("pennant");if(s){let a=s.getObjectByName("pflag");a&&(a.rotation.y=Math.sin(Gt*3.1+t.position.x)*.35)}}if(yi.traverse(t=>{t.name==="flag"&&(t.rotation.y=Math.sin(Gt*1.8)*.3)}),Mt&&Mt.group.traverse(t=>{if(t.name==="spin"&&(t.rotation.y+=e*.8),t.userData.wallN){let n=Dt.position.clone().sub(Mt.group.position).normalize(),s=t.userData.wallN.dot(n)<-.25?.12:1;t.scale.y+=(s-t.scale.y)*Math.min(1,e*9),t.position.y=t.geometry.parameters.height/2*t.scale.y}}),wn.length&&wn[0].emissiveIntensity>0){let t=.9+Math.sin(Gt*7.3)*.04+Math.sin(Gt*13.7)*.03;for(let n of wn)n.emissiveIntensity>0&&(n.emissiveIntensity=t)}if(Es.visible){let t=Gu[I.season],n=new Ie,r=new an;for(let s=0;s<id;s++){let a=S_[s];a.p.y-=t.ambFall*e*(.6+a.s*.5),a.p.x+=Math.sin(Gt*.8+a.ph)*e*.7,a.p.y<.2&&(a.p.y=16+Math.random()*5),r.set(Gt*1.4+a.ph,a.ph,Gt*.9),n.makeRotationFromEuler(r),n.scale(new E(a.s,a.s,a.s)),n.setPosition(a.p),Es.setMatrixAt(s,n)}Es.instanceMatrix.needsUpdate=!0}if(Vu){let t=Math.sin(Gt*13);bt.userData.legs.forEach((n,r)=>n.rotation.x=(r?1:-1)*t*.65),bt.userData.arms.forEach((n,r)=>n.rotation.x=(r?-1:1)*t*.5)}else bt.rotation.y+=Math.sin(Gt*.6)*.0012;for(let t of ef)t.position.x+=t.userData.v*e,t.position.x>75&&(t.position.x=-75);if(lc.material.opacity>0){let t=lc.geometry.attributes.position;for(let n=0;n<t.count;n++)t.setY(n,.7+Math.abs(Math.sin(Gt*.7+n*2.1))*2.2),t.setX(n,t.getX(n)+Math.sin(Gt*.5+n)*.008);t.needsUpdate=!0,lc.material.size=.3+Math.sin(Gt*4)*.08}if(Vt.update(),cc>0){cc-=e;let t=cc*.5;Dt.position.x+=(Math.random()-.5)*t,Dt.position.y+=(Math.random()-.5)*t}Tn.render(Ze,Dt)}Xu();vf();var jm=Z_();to();tf();Zt();rn();I.onboarded?I.envAuto&&cd():(I.season=qu(),I.tod=62);Er();document.getElementById("todSlider").value=I.tod;rv();Ja||setTimeout(()=>Et(D("storage_warn")),1500);!jm&&!I.onboarded?setTimeout(iv,700):!jm&&!I.tourDone&&Object.keys(I.placed[I.mode]).length<3&&setTimeout(io,1200);var vc=(i,e)=>{let t=document.getElementById(i);t&&e&&(t.onclick=()=>{document.getElementById("modalMenu").classList.remove("open"),e.click()})};vc("btnCampusM",document.getElementById("btnCampus"));vc("btnShareM",document.getElementById("btnShare"));vc("btnSoundM",document.getElementById("btnSound"));vc("btnFotoM",document.getElementById("btnFoto"));window.__game={get state(){return I},checkMilestones:df,save:it,step:_c,enterRoom:xf,leaveRoom:Za,openBauhuette:sd,avatarClamp:cf,get avatarPos(){return{x:bt.position.x,z:bt.position.z}},get interior(){return Mt?{id:Mt.id,opacity:Mt.saved[0]?Mt.saved[0].mat.opacity:null}:null},get tweens(){return qi.map(i=>({t:i.t,dur:i.dur}))},get frame(){return Gt},placeByChip:i=>{let e=vt[i];return e?(Mr(i),no(e)):!1}};Ef();setInterval(()=>{!document.hidden&&performance.now()-Mf>400&&_c()},250);})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
