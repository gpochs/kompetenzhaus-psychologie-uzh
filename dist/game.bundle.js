(()=>{var Gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lp=0,bh=1,cp=2;var Mh=1,Dl=2,ri=3,ur=0,gn=1,mt=2,Wi=0,Ra=1,Eh=2,Sh=3,wh=4,hp=5,dr=100,up=101,dp=102,pp=103,fp=104,mp=200,gp=201,_p=202,vp=203,yp=204,xp=205,bp=206,Mp=207,Ep=208,Sp=209,wp=210,Tp=211,Ap=212,Rp=213,Cp=214,Fl=0,Nl=1,Ul=2,Ca=3,kl=4,Bl=5,Ol=6,zl=7,Ip=0,Pp=1,Lp=2,xi=0,Dp=1,Fp=2,Np=3,Hl=4,Up=5,kp=6,Bp=7;var Th=300,pr=301,ys=302,Gl=303,Vl=304,Ia=306,$o=1e3,Zs=1001,jo=1002,Jn=1003,Op=1004;var Pa=1005;var Qn=1006,Wl=1007;var xs=1008;var ai=1009,Ah=1010,Rh=1011,fr=1012,$l=1013,bs=1014,Bn=1015,mr=1016,jl=1017,ql=1018,gr=1020,Ch=35902,Ih=35899,zp=1021,Hp=1022,On=1023,La=1026,Da=1027,Xl=1028,Kl=1029,Gp=1030,Ph=1031;var Lh=1033,Yl=33776,Zl=33777,Jl=33778,Ql=33779,Dh=35840,Fh=35841,Nh=35842,Uh=35843,kh=36196,Bh=37492,Oh=37496,zh=37808,Hh=37809,Gh=37810,Vh=37811,Wh=37812,$h=37813,jh=37814,qh=37815,Xh=37816,Kh=37817,Yh=37818,Zh=37819,Jh=37820,Qh=37821,eu=36492,tu=36494,nu=36495,iu=36283,su=36284,ru=36285,au=36286;var Kr=2300,qo=2301,Wo=2302,ch=2400,hh=2401,uh=2402;var Vp=3201;var Wp=0,$p=1,Ms="",dn="srgb",fs="srgb-linear",Yr="linear",ot="srgb";var ps=7680;var jp=512,qp=513,Xp=514,ou=515,Kp=516,Yp=517,Zp=518,Jp=519,Xo=35044;var lu="300 es",yi=2e3,Zr=2001;var ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ad=1234567,Ks=Math.PI/180,Js=180/Math.PI;function Zn(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(qt[255&i]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[255&e]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[63&t|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[255&n]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Be(i,e,t){return Math.max(e,Math.min(t,i))}function dh(i,e){return(i%e+e)%e}function jr(i,e,t){return(1-t)*i+t*e}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var cu={DEG2RAD:Ks,RAD2DEG:Js,generateUUID:Zn,clamp:Be,euclideanModulo:dh,mapLinear:function(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:jr,damp:function(i,e,t,n){return jr(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(dh(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(Ad=i);let e=Ad+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*Ks},radToDeg:function(i){return i*Js},isPowerOfTwo:function(i){return!(i&i-1)&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}},normalize:at,denormalize:Nn},te=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},on=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=g,void(e[t+3]=_);if(u!==_||c!==d||l!==p||h!==g){let f=1-o,m=c*d+l*p+h*g+u*_,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let E=Math.sqrt(y),T=Math.atan2(E,m*v);f=Math.sin(f*T)/E,o=Math.sin(o*T)/E}let x=o*v;if(c=c*f+d*x,l=l*f+p*x,h=h*f+g*x,u=u*f+_*x,f===1-o){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-o*p,e[t+2]=l*g+h*p+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fc=new M,Rd=new on,Ue=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],f=s[3],m=s[6],v=s[1],y=s[4],x=s[7],E=s[2],T=s[5],A=s[8];return r[0]=a*_+o*v+c*E,r[3]=a*f+o*y+c*T,r[6]=a*m+o*x+c*A,r[1]=l*_+h*v+u*E,r[4]=l*f+h*y+u*T,r[7]=l*m+h*x+u*A,r[2]=d*_+p*v+g*E,r[5]=d*f+p*y+g*T,r[8]=d*m+p*x+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Nc.makeScale(e,t)),this}rotate(e){return this.premultiply(Nc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nc=new Ue;function hu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qp(){let i=Jr("canvas");return i.style.display="block",i}var Cd={};function Qs(i){i in Cd||(Cd[i]=!0,console.warn(i))}function ef(i,e,t){return new Promise(function(n,s){setTimeout(function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}},t)})}var Id=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pd=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zm(){let i={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(s,r,a){return this.enabled!==!1&&r!==a&&r&&a&&(this.spaces[r].transfer===ot&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fs]:{primaries:e,whitePoint:n,transfer:Yr,toXYZ:Id,fromXYZ:Pd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Id,fromXYZ:Pd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),i}var et=zm();function vi(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function Ys(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var Ds,Ko=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ds===void 0&&(Ds=Jr("canvas")),Ds.width=e.width,Ds.height=e.height;let s=Ds.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ds}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=255*vi(r[a]/255);return n.putImageData(s,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*vi(t[n]/255)):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hm=0,er=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uc(s[a].image)):r.push(Uc(s[a]))}else r=Uc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Uc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gm=0,kc=new M,nn=class i extends ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,s=1001,r=1006,a=1008,o=1023,c=1009,l=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Zn(),this.name="",this.source=new er(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(kc).x}get height(){return this.source.getSize(kc).y}get depth(){return this.source.getSize(kc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];s!==void 0?s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n:console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $o:e.x=e.x-Math.floor(e.x);break;case Zs:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case $o:e.y=e.y-Math.floor(e.y);break;case Zs:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null,nn.DEFAULT_MAPPING=Th,nn.DEFAULT_ANISOTROPY=1;var rt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],f=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,x=(p+1)/2,E=(m+1)/2,T=(h+d)/4,A=(u+_)/4,D=(g+f)/4;return y>x&&y>E?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=A/n):x>E?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=D/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=A/r,s=D/r),this.set(n,s,r,t),this}let v=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yo=class extends ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new nn(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new er(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends Yo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qr=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zo=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fo.copy(n.boundingBox)),fo.applyMatrix4(e.matrixWorld),this.union(fo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),mo.subVectors(this.max,Nr),Fs.subVectors(e.a,Nr),Ns.subVectors(e.b,Nr),Us.subVectors(e.c,Nr),Ii.subVectors(Ns,Fs),Pi.subVectors(Us,Ns),cs.subVectors(Fs,Us);let t=[0,-Ii.z,Ii.y,0,-Pi.z,Pi.y,0,-cs.z,cs.y,Ii.z,0,-Ii.x,Pi.z,0,-Pi.x,cs.z,0,-cs.x,-Ii.y,Ii.x,0,-Pi.y,Pi.x,0,-cs.y,cs.x,0];return!!Bc(t,Fs,Ns,Us,mo)&&(t=[1,0,0,0,1,0,0,0,1],!!Bc(t,Fs,Ns,Us,mo)&&(go.crossVectors(Ii,Pi),t=[go.x,go.y,go.z],Bc(t,Fs,Ns,Us,mo)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Ln).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},pi=[new M,new M,new M,new M,new M,new M,new M,new M],Ln=new M,fo=new bn,Fs=new M,Ns=new M,Us=new M,Ii=new M,Pi=new M,cs=new M,Nr=new M,mo=new M,go=new M,hs=new M;function Bc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){hs.fromArray(i,r);let o=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),c=e.dot(hs),l=t.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Vm=new bn,Ur=new M,Oc=new M,Mn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);let t=Ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=.5*(n-this.radius);this.center.addScaledVector(Ur,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Oc)),this.expandByPoint(Ur.copy(e.center).sub(Oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fi=new M,zc=new M,_o=new M,Li=new M,Hc=new M,vo=new M,Gc=new M,ni=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zc.copy(e).add(t).multiplyScalar(.5),_o.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(zc);let r=.5*e.distanceTo(t),a=-this.direction.dot(_o),o=Li.dot(this.direction),c=-Li.dot(_o),l=Li.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(zc).addScaledVector(_o,d),p}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s?null:((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s?null:((o>n||n!=n)&&(n=o),(c<s||s!=s)&&(s=c),s<0?null:this.at(n>=0?n:s,t)))}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,s,r){Hc.subVectors(t,e),vo.subVectors(n,e),Gc.crossVectors(Hc,vo);let a,o=this.direction.dot(Gc);if(o>0){if(s)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Li.subVectors(this.origin,e);let c=a*this.direction.dot(vo.crossVectors(Li,vo));if(c<0)return null;let l=a*this.direction.dot(Hc.cross(Li));if(l<0||c+l>o)return null;let h=-a*Li.dot(Gc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,p,g,_,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,p,g,_,f)}set(e,t,n,s,r,a,o,c,l,h,u,d,p,g,_,f){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=_,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),a=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wm,e,$m)}lookAt(e,t,n){let s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Di.crossVectors(n,hn),Di.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Di.crossVectors(n,hn)),Di.normalize(),yo.crossVectors(hn,Di),s[0]=Di.x,s[4]=yo.x,s[8]=hn.x,s[1]=Di.y,s[5]=yo.y,s[9]=hn.y,s[2]=Di.z,s[6]=yo.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],f=n[10],m=n[14],v=n[3],y=n[7],x=n[11],E=n[15],T=s[0],A=s[4],D=s[8],C=s[12],U=s[1],H=s[5],O=s[9],J=s[13],V=s[2],Q=s[6],ee=s[10],le=s[14],se=s[3],ye=s[7],we=s[11],be=s[15];return r[0]=a*T+o*U+c*V+l*se,r[4]=a*A+o*H+c*Q+l*ye,r[8]=a*D+o*O+c*ee+l*we,r[12]=a*C+o*J+c*le+l*be,r[1]=h*T+u*U+d*V+p*se,r[5]=h*A+u*H+d*Q+p*ye,r[9]=h*D+u*O+d*ee+p*we,r[13]=h*C+u*J+d*le+p*be,r[2]=g*T+_*U+f*V+m*se,r[6]=g*A+_*H+f*Q+m*ye,r[10]=g*D+_*O+f*ee+m*we,r[14]=g*C+_*J+f*le+m*be,r[3]=v*T+y*U+x*V+E*se,r[7]=v*A+y*H+x*Q+E*ye,r[11]=v*D+y*O+x*ee+E*we,r[15]=v*C+y*J+x*le+E*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*p-n*c*p)+e[7]*(+t*c*p-t*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+e[11]*(+t*l*u-t*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+e[15]*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],f=e[14],m=e[15],v=u*f*l-_*d*l+_*c*p-o*f*p-u*c*m+o*d*m,y=g*d*l-h*f*l-g*c*p+a*f*p+h*c*m-a*d*m,x=h*_*l-g*u*l+g*o*p-a*_*p-h*o*m+a*u*m,E=g*u*c-h*_*c-g*o*d+a*_*d+h*o*f-a*u*f,T=t*v+n*y+s*x+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=v*A,e[1]=(_*d*r-u*f*r-_*s*p+n*f*p+u*s*m-n*d*m)*A,e[2]=(o*f*r-_*c*r+_*s*l-n*f*l-o*s*m+n*c*m)*A,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*p-n*c*p)*A,e[4]=y*A,e[5]=(h*f*r-g*d*r+g*s*p-t*f*p-h*s*m+t*d*m)*A,e[6]=(g*c*r-a*f*r-g*s*l+t*f*l+a*s*m-t*c*m)*A,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*p+t*c*p)*A,e[8]=x*A,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*m-t*u*m)*A,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*m+t*o*m)*A,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*p-t*o*p)*A,e[12]=E*A,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*f+t*u*f)*A,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*f-t*o*f)*A,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,g=r*u,_=a*h,f=a*u,m=o*u,v=c*l,y=c*h,x=c*u,E=n.x,T=n.y,A=n.z;return s[0]=(1-(_+m))*E,s[1]=(p+x)*E,s[2]=(g-y)*E,s[3]=0,s[4]=(p-x)*T,s[5]=(1-(d+m))*T,s[6]=(f+v)*T,s[7]=0,s[8]=(g+y)*A,s[9]=(f-v)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ks.set(s[0],s[1],s[2]).length(),a=ks.set(s[4],s[5],s[6]).length(),o=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Dn.copy(this);let c=1/r,l=1/a,h=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=l,Dn.elements[5]*=l,Dn.elements[6]*=l,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,t.setFromRotationMatrix(Dn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=2e3,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===yi)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else{if(o!==Zr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);g=-a/(a-r),_=-a*r/(a-r)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===yi)g=-2/(a-r),_=-(a+r)/(a-r);else{if(o!==Zr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);g=-1/(a-r),_=-r/(a-r)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ks=new M,Dn=new Pe,Wm=new M(0,0,0),$m=new M(1,1,1),Di=new M,yo=new M,hn=new M,Ld=new Pe,Dd=new on,ln=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ld,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dd.setFromEuler(this),this.setFromQuaternion(Dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},jm=0,Fd=new M,Bs=new on,mi=new Pe,xo=new M,kr=new M,qm=new M,Xm=new on,Nd=new M(1,0,0),Ud=new M(0,1,0),kd=new M(0,0,1),Bd={type:"added"},Km={type:"removed"},Os={type:"childadded",child:null},Vc={type:"childremoved",child:null},Bt=class i extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new M,t=new ln,n=new on,s=new M(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Ue}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Nd,e)}rotateY(e){return this.rotateOnAxis(Ud,e)}rotateZ(e){return this.rotateOnAxis(kd,e)}translateOnAxis(e,t){return Fd.copy(e).applyQuaternion(this.quaternion),this.position.add(Fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nd,e)}translateY(e){return this.translateOnAxis(Ud,e)}translateZ(e){return this.translateOnAxis(kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xo.copy(e):xo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(kr,xo,this.up):mi.lookAt(xo,kr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(mi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bd),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Km),Vc.child=e,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bd),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,Xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Bt.DEFAULT_UP=new M(0,1,0),Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new M,gi=new M,Wc=new M,_i=new M,zs=new M,Hs=new M,Od=new M,$c=new M,jc=new M,qc=new M,Xc=new rt,Kc=new rt,Yc=new rt,Kn=class i{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fn.subVectors(s,t),gi.subVectors(n,t),Wc.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(gi),c=Fn.dot(Wc),l=gi.dot(gi),h=gi.dot(Wc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_i)!==null&&_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(a,_i.y),c.addScaledVector(o,_i.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Xc.setScalar(0),Kc.setScalar(0),Yc.setScalar(0),Xc.fromBufferAttribute(e,t),Kc.fromBufferAttribute(e,n),Yc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Xc,r.x),a.addScaledVector(Kc,r.y),a.addScaledVector(Yc,r.z),a}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),gi.subVectors(e,t),Fn.cross(gi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),.5*Fn.cross(gi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;zs.subVectors(s,n),Hs.subVectors(r,n),$c.subVectors(e,n);let c=zs.dot($c),l=Hs.dot($c);if(c<=0&&l<=0)return t.copy(n);jc.subVectors(e,s);let h=zs.dot(jc),u=Hs.dot(jc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(zs,a);qc.subVectors(e,r);let p=zs.dot(qc),g=Hs.dot(qc);if(g>=0&&p<=g)return t.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Hs,o);let f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return Od.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Od,o);let m=1/(f+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(zs,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},bo={h:0,s:0,l:0};function Zc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var de=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=dh(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Zc(a,r,e+1/3),this.g=Zc(a,r,e),this.b=Zc(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){let n=tf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return et.workingToColorSpace(Xt.copy(this),e),65536*Math.round(Be(255*Xt.r,0,255))+256*Math.round(Be(255*Xt.g,0,255))+Math.round(Be(255*Xt.b,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=dn){et.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*s)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(bo);let n=jr(Fi.h,bo.h,t),s=jr(Fi.s,bo.s,t),r=jr(Fi.l,bo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new de;de.NAMES=tf;var Ym=0,ii=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];s!==void 0?s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Kt=class extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sv=Zm();function Zm(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,s[c]=24,s[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,s[c]=-l-1,s[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,s[c]=13,s[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,s[c]=24,s[256|c]=24):(n[c]=31744,n[256|c]=64512,s[c]=13,s[256|c]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}var Tt=new M,Mo=new te,Jm=0,Gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xo,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xo&&(e.usage=this.usage),e}};var ea=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ta=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ae=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Qm=0,yn=new Pe,Jc=new Bt,Gs=new M,un=new bn,Br=new bn,kt=new M,lt=class i extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hu(e)?ta:ea)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return Jc.lookAt(e),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new M,1/0);if(e){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(un.min,Br.min),un.expandByPoint(kt),kt.addVectors(un.max,Br.max),un.expandByPoint(kt)):(un.expandByPoint(Br.min),un.expandByPoint(Br.max))}un.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)kt.fromBufferAttribute(o,l),c&&(Gs.fromBufferAttribute(e,l),kt.add(Gs)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new M,c[D]=new M;let l=new M,h=new M,u=new M,d=new te,p=new te,g=new te,_=new M,f=new M;function m(D,C,U){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,C),u.fromBufferAttribute(n,U),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,C),g.fromBufferAttribute(r,U),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let H=1/(p.x*g.y-g.x*p.y);isFinite(H)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(H),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(H),o[D].add(_),o[C].add(_),o[U].add(_),c[D].add(f),c[C].add(f),c[U].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,C=v.length;D<C;++D){let U=v[D],H=U.start;for(let O=H,J=H+U.count;O<J;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let y=new M,x=new M,E=new M,T=new M;function A(D){E.fromBufferAttribute(s,D),T.copy(E);let C=o[D];y.copy(C),y.sub(E.multiplyScalar(E.dot(C))).normalize(),x.crossVectors(T,C);let U=x.dot(c[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,U)}for(let D=0,C=v.length;D<C;++D){let U=v[D],H=U.start;for(let O=H,J=H+U.count;O<J;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new M,r=new M,a=new M,o=new M,c=new M,l=new M,h=new M,u=new M;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let _=0,f=c.length;_<f;_++){p=o.isInterleavedBufferAttribute?c[_]*o.data.stride+o.offset:c[_]*h;for(let m=0;m<h;m++)d[g++]=l[p++]}return new Gt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=e(s[o],n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zd=new Pe,us=new ni,Eo=new Mn,Hd=new M,So=new M,wo=new M,To=new M,Qc=new M,Ao=new M,Gd=new M,Ro=new M,W=class extends Bt{constructor(e=new lt,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ao.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Qc.fromBufferAttribute(u,e),a?Ao.addScaledVector(Qc,h):Ao.addScaledVector(Qc.sub(t),h))}t.add(Ao)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;if(s!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(r),us.copy(e.ray).recast(e.near),Eo.containsPoint(us.origin)===!1&&(us.intersectSphere(Eo,Hd)===null||us.origin.distanceToSquared(Hd)>(e.far-e.near)**2))return;zd.copy(r).invert(),us.copy(e.ray).applyMatrix4(zd),n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,us)}}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let f=d[g],m=a[f.materialIndex];for(let v=Math.max(f.start,p.start),y=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));v<y;v+=3)s=Co(this,m,e,n,l,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,t.push(s))}else for(let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);g<_;g+=3)s=Co(this,a,e,n,l,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),s&&(s.faceIndex=Math.floor(g/3),t.push(s));else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let f=d[g],m=a[f.materialIndex];for(let v=Math.max(f.start,p.start),y=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));v<y;v+=3)s=Co(this,m,e,n,l,h,u,v,v+1,v+2),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,t.push(s))}else for(let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);g<_;g+=3)s=Co(this,a,e,n,l,h,u,g,g+1,g+2),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}};function Co(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,So),i.getVertexPosition(c,wo),i.getVertexPosition(l,To);let h=(function(u,d,p,g,_,f,m,v){let y;if(y=d.side===1?g.intersectTriangle(m,f,_,!0,v):g.intersectTriangle(_,f,m,d.side===0,v),y===null)return null;Ro.copy(v),Ro.applyMatrix4(u.matrixWorld);let x=p.ray.origin.distanceTo(Ro);return x<p.near||x>p.far?null:{distance:x,point:Ro.clone(),object:u}})(i,e,t,n,So,wo,To,Gd);if(h){let u=new M;Kn.getBarycoord(Gd,So,wo,To,u),s&&(h.uv=Kn.getInterpolatedAttribute(s,o,c,l,u,new te)),r&&(h.uv1=Kn.getInterpolatedAttribute(r,o,c,l,u,new te)),a&&(h.normal=Kn.getInterpolatedAttribute(a,o,c,l,u,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new M,materialIndex:0};Kn.getNormal(So,wo,To,d.normal),h.face=d,h.barycoord=u}return h}var Ve=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;function g(_,f,m,v,y,x,E,T,A,D,C){let U=x/A,H=E/D,O=x/2,J=E/2,V=T/2,Q=A+1,ee=D+1,le=0,se=0,ye=new M;for(let we=0;we<ee;we++){let be=we*H-J;for(let Ie=0;Ie<Q;Ie++){let ce=Ie*U-O;ye[_]=ce*v,ye[f]=be*y,ye[m]=V,l.push(ye.x,ye.y,ye.z),ye[_]=0,ye[f]=0,ye[m]=T>0?1:-1,h.push(ye.x,ye.y,ye.z),u.push(Ie/A),u.push(1-we/D),le+=1}}for(let we=0;we<D;we++)for(let be=0;be<A;be++){let Ie=d+be+Q*we,ce=d+be+Q*(we+1),ue=d+(be+1)+Q*(we+1),he=d+(be+1)+Q*we;c.push(Ie,ce,he),c.push(ce,ue,he),se+=6}o.addGroup(p,se,C),p+=se,d+=le}g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Es(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=Es(i[t]);for(let s in n)e[s]=n[s]}return e}function uu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var nf={clone:Es,merge:Yt},Un=class extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let s=0;s<t.length;s++)n.push(t[s].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},nr=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ni=new M,Vd=new te,Wd=new te,Ht=class extends nr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Js*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ks*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Js*Math.atan(Math.tan(.5*Ks*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,Vd,Wd),t.subVectors(Wd,Vd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ks*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vs=-90,Jo=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(Vs,1,e,t);s.layers=this.layers,this.add(s);let r=new Ht(Vs,1,e,t);r.layers=this.layers,this.add(r);let a=new Ht(Vs,1,e,t);a.layers=this.layers,this.add(a);let o=new Ht(Vs,1,e,t);o.layers=this.layers,this.add(o);let c=new Ht(Vs,1,e,t);c.layers=this.layers,this.add(c);let l=new Ht(Vs,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Zr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},na=class extends nn{constructor(e=[],t=301,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qo=class extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new na(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ve(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;let a=new W(s,r),o=t.minFilter;return t.minFilter===xs&&(t.minFilter=Qn),new Jo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Oe=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},eg={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let f=t.getJointPose(_,n),m=this._getHandJoint(l,_);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ia=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new de(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},sa=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},el=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xo,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},tn=new M,ra=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ms=class extends ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ws,Or=new M,$s=new M,js=new M,qs=new te,zr=new te,sf=new Pe,Io=new M,Hr=new M,Po=new M,$d=new te,eh=new te,jd=new te,sr=class extends Bt{constructor(e=new ms){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new el(t,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new ra(n,3,0,!1)),Ws.setAttribute("uv",new ra(n,2,3,!1))}this.geometry=Ws,this.material=e,this.center=new te(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),sf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-js.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Lo(Io.set(-.5,-.5,0),js,a,$s,s,r),Lo(Hr.set(.5,-.5,0),js,a,$s,s,r),Lo(Po.set(.5,.5,0),js,a,$s,s,r),$d.set(0,0),eh.set(1,0),jd.set(1,1);let o=e.ray.intersectTriangle(Io,Hr,Po,!1,Or);if(o===null&&(Lo(Hr.set(-.5,.5,0),js,a,$s,s,r),eh.set(0,1),o=e.ray.intersectTriangle(Io,Po,Hr,!1,Or),o===null))return;let c=e.ray.origin.distanceTo(Or);c<e.near||c>e.far||t.push({distance:c,point:Or.clone(),uv:Kn.getInterpolation(Or,Io,Hr,Po,$d,eh,jd,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Lo(i,e,t,n,s,r){qs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(zr.x=r*qs.x-s*qs.y,zr.y=s*qs.x+r*qs.y):zr.copy(qs),i.copy(e),i.x+=zr.x,i.y+=zr.y,i.applyMatrix4(sf)}var wv=new M,Tv=new M;var Av=new M,Rv=new rt,Cv=new rt,Iv=new M,Pv=new Pe,Lv=new M,Dv=new Mn,Fv=new Pe,Nv=new ni;var tl=class extends nn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=1003,h=1003,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Uv=new Pe,kv=new Pe;var aa=class extends Gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xs=new Pe,qd=new Pe,Do=[],Xd=new bn,tg=new Pe,Gr=new W,Vr=new Mn,Bi=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new aa(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Xd.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(Xd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Vr.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(n),e.ray.intersectsSphere(Vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),qd.multiplyMatrices(n,Xs),Gr.matrixWorld=qd,Gr.raycast(e,Do);for(let a=0,o=Do.length;a<o;a++){let c=Do[a];c.instanceId=r,c.object=this,t.push(c)}Do.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new aa(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new tl(new Float32Array(s*this.count),s,this.count,Xl,Bn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},th=new M,ng=new M,ig=new Ue,xn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=th.subVectors(n,t).cross(ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(th),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ig.getNormalMatrix(e),s=this.coplanarPoint(th).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ds=new Mn,sg=new te(.5,.5),Fo=new M,Oi=class{constructor(e=new xn,t=new xn,n=new xn,s=new xn,r=new xn,a=new xn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],_=r[9],f=r[10],m=r[11],v=r[12],y=r[13],x=r[14],E=r[15];if(s[0].setComponents(l-a,p-h,m-g,E-v).normalize(),s[1].setComponents(l+a,p+h,m+g,E+v).normalize(),s[2].setComponents(l+o,p+u,m+_,E+y).normalize(),s[3].setComponents(l-o,p-u,m-_,E-y).normalize(),n)s[4].setComponents(c,d,f,x).normalize(),s[5].setComponents(l-c,p-d,m-f,E-x).normalize();else if(s[4].setComponents(l-c,p-d,m-f,E-x).normalize(),t===yi)s[5].setComponents(l+c,p+d,m+f,E+x).normalize();else{if(t!==Zr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);s[5].setComponents(c,d,f,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);let t=sg.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Fo.x=s.normal.x>0?e.max.x:e.min.x,Fo.y=s.normal.y>0?e.max.y:e.min.y,Fo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qn=new Pe,Xn=new Oi,nl=class i{constructor(){this.coordinateSystem=yi}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let s=t.cameras[n];if(qn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Xn.setFromProjectionMatrix(qn,s.coordinateSystem,s.reversedDepth),Xn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let s=t.cameras[n];if(qn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Xn.setFromProjectionMatrix(qn,s.coordinateSystem,s.reversedDepth),Xn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let s=t.cameras[n];if(qn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Xn.setFromProjectionMatrix(qn,s.coordinateSystem,s.reversedDepth),Xn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let s=t.cameras[n];if(qn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Xn.setFromProjectionMatrix(qn,s.coordinateSystem,s.reversedDepth),Xn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let s=t.cameras[n];if(qn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Xn.setFromProjectionMatrix(qn,s.coordinateSystem,s.reversedDepth),Xn.containsPoint(e))return!0}return!1}clone(){return new i}};var ph=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=s}reset(){this.list.length=0,this.index=0}},Bv=new Pe,Ov=new de(1,1,1),zv=new Oi,Hv=new nl,Gv=new bn,Vv=new Mn,Wv=new M,$v=new M,jv=new M,qv=new ph,Xv=new W;var Kv=new M,Yv=new M,Zv=new Pe,Jv=new ni,Qv=new Mn,ey=new M,ty=new M;var ny=new M,iy=new M;var rr=class extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kd=new Pe,fh=new ni,No=new Mn,Uo=new M,oa=class extends Bt{constructor(e=new lt,t=new rr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,e.ray.intersectsSphere(No)===!1)return;Kd.copy(s).invert(),fh.copy(e.ray).applyMatrix4(Kd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);u<d;u++){let p=l.getX(u);Uo.fromBufferAttribute(h,p),Yd(Uo,p,c,s,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Uo.fromBufferAttribute(h,u),Yd(Uo,u,c,s,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Yd(i,e,t,n,s,r,a){let o=fh.distanceSqToPoint(i);if(o<t){let c=new M;fh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ar=class extends nn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},la=class extends nn{constructor(e,t,n=1014,s,r,a,o=1003,c=1003,l,h=1026,u=1){if(h!==La&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new er(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ca=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},il=class i extends lt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,g=2*n+r,_=s+1,f=new M,m=new M;for(let v=0;v<=g;v++){let y=0,x=0,E=0,T=0;if(v<=n){let C=v/n,U=C*Math.PI/2;x=-h-e*Math.cos(U),E=e*Math.sin(U),T=-e*Math.cos(U),y=C*u}else if(v<=n+r){let C=(v-n)/r;x=C*t-h,E=e,T=0,y=u+C*d}else{let C=(v-n-r)/n,U=C*Math.PI/2;x=h+e*Math.sin(U),E=e*Math.cos(U),T=e*Math.sin(U),y=u+d+C*u}let A=Math.max(0,Math.min(1,y/p)),D=0;v===0?D=.5/s:v===g&&(D=-.5/s);for(let C=0;C<=s;C++){let U=C/s,H=U*Math.PI*2,O=Math.sin(H),J=Math.cos(H);m.x=-E*J,m.y=x,m.z=E*O,o.push(m.x,m.y,m.z),f.set(-E*J,T,E*O),f.normalize(),c.push(f.x,f.y,f.z),l.push(U+D,A)}if(v>0){let C=(v-1)*_;for(let U=0;U<s;U++){let H=C+U,O=C+U+1,J=v*_+U,V=v*_+U+1;a.push(H,O,J),a.push(O,V,J)}}}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},si=class i extends lt{constructor(e=1,t=32,n=0,s=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new M,h=new te;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(o,3)),this.setAttribute("uv",new Ae(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$e=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,_=[],f=n/2,m=0;function v(y){let x=g,E=new te,T=new M,A=0,D=y===!0?e:t,C=y===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,f*C,0),d.push(0,C,0),p.push(.5,.5),g++;let U=g;for(let H=0;H<=s;H++){let O=H/s*c+o,J=Math.cos(O),V=Math.sin(O);T.x=D*V,T.y=f*C,T.z=D*J,u.push(T.x,T.y,T.z),d.push(0,C,0),E.x=.5*J+.5,E.y=.5*V*C+.5,p.push(E.x,E.y),g++}for(let H=0;H<s;H++){let O=x+H,J=U+H;y===!0?h.push(J,J+1,O):h.push(J+1,J,O),A+=3}l.addGroup(m,A,y===!0?1:2),m+=A}(function(){let y=new M,x=new M,E=0,T=(t-e)/n;for(let A=0;A<=r;A++){let D=[],C=A/r,U=C*(t-e)+e;for(let H=0;H<=s;H++){let O=H/s,J=O*c+o,V=Math.sin(J),Q=Math.cos(J);x.x=U*V,x.y=-C*n+f,x.z=U*Q,u.push(x.x,x.y,x.z),y.set(V,T,Q).normalize(),d.push(y.x,y.y,y.z),p.push(O,1-C),D.push(g++)}_.push(D)}for(let A=0;A<s;A++)for(let D=0;D<r;D++){let C=_[D][A],U=_[D+1][A],H=_[D+1][A+1],O=_[D][A+1];(e>0||D!==0)&&(h.push(C,U,O),E+=3),(t>0||D!==r-1)&&(h.push(U,H,O),E+=3)}l.addGroup(m,E,0),m+=E})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},kn=class i extends $e{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=2*Math.PI){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zi=class i extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];function o(p,g,_,f){let m=f+1,v=[];for(let y=0;y<=m;y++){v[y]=[];let x=p.clone().lerp(_,y/m),E=g.clone().lerp(_,y/m),T=m-y;for(let A=0;A<=T;A++)v[y][A]=A===0&&y===m?x:x.clone().lerp(E,A/T)}for(let y=0;y<m;y++)for(let x=0;x<2*(m-y)-1;x++){let E=Math.floor(x/2);x%2==0?(c(v[y][E+1]),c(v[y+1][E]),c(v[y][E])):(c(v[y][E+1]),c(v[y+1][E+1]),c(v[y+1][E]))}}function c(p){r.push(p.x,p.y,p.z)}function l(p,g){let _=3*p;g.x=e[_+0],g.y=e[_+1],g.z=e[_+2]}function h(p,g,_,f){f<0&&p.x===1&&(a[g]=p.x-1),_.x===0&&_.z===0&&(a[g]=f/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let g=new M,_=new M,f=new M;for(let m=0;m<t.length;m+=3)l(t[m+0],g),l(t[m+1],_),l(t[m+2],f),o(g,_,f,p)})(s),(function(p){let g=new M;for(let _=0;_<r.length;_+=3)g.x=r[_+0],g.y=r[_+1],g.z=r[_+2],g.normalize().multiplyScalar(p),r[_+0]=g.x,r[_+1]=g.y,r[_+2]=g.z})(n),(function(){let p=new M;for(let g=0;g<r.length;g+=3){p.x=r[g+0],p.y=r[g+1],p.z=r[g+2];let _=u(p)/2/Math.PI+.5,f=d(p)/Math.PI+.5;a.push(_,1-f)}(function(){let g=new M,_=new M,f=new M,m=new M,v=new te,y=new te,x=new te;for(let E=0,T=0;E<r.length;E+=9,T+=6){g.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),f.set(r[E+6],r[E+7],r[E+8]),v.set(a[T+0],a[T+1]),y.set(a[T+2],a[T+3]),x.set(a[T+4],a[T+5]),m.copy(g).add(_).add(f).divideScalar(3);let A=u(m);h(v,T+0,g,A),h(y,T+2,_,A),h(x,T+4,f,A)}})(),(function(){for(let g=0;g<a.length;g+=6){let _=a[g+0],f=a[g+2],m=a[g+4],v=Math.max(_,f,m),y=Math.min(_,f,m);v>.9&&y<.1&&(_<.2&&(a[g+0]+=1),f<.2&&(a[g+2]+=1),m<.2&&(a[g+4]+=1))}})()})(),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(r.slice(),3)),this.setAttribute("uv",new Ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},sl=class i extends zi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ko=new M,Bo=new M,nh=new M,Oo=new Kn,rl=class extends lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Ks*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:_,b:f,c:m}=Oo;if(_.fromBufferAttribute(o,l[0]),f.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),Oo.getNormal(nh),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let y=(v+1)%3,x=u[v],E=u[y],T=Oo[h[v]],A=Oo[h[y]],D=`${x}_${E}`,C=`${E}_${x}`;C in d&&d[C]?(nh.dot(d[C].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(A.x,A.y,A.z)),d[C]=null):D in d||(d[D]={index0:l[v],index1:l[y],normal:nh.clone()})}}for(let g in d)if(d[g]){let{index0:_,index1:f}=d[g];ko.fromBufferAttribute(o,_),Bo.fromBufferAttribute(o,f),p.push(ko.x,ko.y,ko.z),p.push(Bo.x,Bo.y,Bo.z)}this.setAttribute("position",new Ae(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;a=t||e*n[r-1];let o,c=0,l=r-1;for(;c<=l;)if(s=Math.floor(c+(l-c)/2),o=n[s]-a,o<0)c=s+1;else{if(!(o>0)){l=s;break}l=s-1}if(s=l,n[s]===a)return s/(r-1);let h=n[s];return(s+(a-h)/(n[s+1]-h))/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new te:new M);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new M,s=[],r=[],a=[],o=new M,c=new Pe;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new M)}r[0]=new M,a[0]=new M;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Be(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Be(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},or=class extends fn{constructor(e=0,t=0,n=1,s=1,r=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new te){let n=t,s=2*Math.PI,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(r=a?0:s),this.aClockwise!==!0||a||(r===s?r=-s:r-=s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},al=class extends or{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function du(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r;return i+e*r+t*a+n*(a*r)}}}var zo=new M,ih=new du,sh=new du,rh=new du,ol=class extends fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new M){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:h===0&&l===r-1&&(l=r-2,h=1),this.closed||l>0?o=s[(l-1)%r]:(zo.subVectors(s[0],s[1]).add(s[0]),o=zo);let u=s[l%r],d=s[(l+1)%r];if(this.closed||l+2<r?c=s[(l+2)%r]:(zo.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=zo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(o.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(c),p);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),ih.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,g,_,f),sh.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,g,_,f),rh.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,g,_,f)}else this.curveType==="catmullrom"&&(ih.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),sh.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),rh.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return n.set(ih.calc(h),sh.calc(h),rh.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zd(i,e,t,n,s){let r=.5*(n-e),a=.5*(s-t),o=i*i;return(2*t-2*n+r+a)*(i*o)+(-3*t+3*n-2*r-a)*o+r*i+t}function qr(i,e,t,n){return(function(s,r){let a=1-s;return a*a*r})(i,e)+(function(s,r){return 2*(1-s)*s*r})(i,t)+(function(s,r){return s*s*r})(i,n)}function Xr(i,e,t,n,s){return(function(r,a){let o=1-r;return o*o*o*a})(i,e)+(function(r,a){let o=1-r;return 3*o*o*r*a})(i,t)+(function(r,a){return 3*(1-r)*r*r*a})(i,n)+(function(r,a){return r*r*r*a})(i,s)}var ha=class extends fn{constructor(e=new te,t=new te,n=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new te){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xr(e,s.x,r.x,a.x,o.x),Xr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ll=class extends fn{constructor(e=new M,t=new M,n=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new M){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xr(e,s.x,r.x,a.x,o.x),Xr(e,s.y,r.y,a.y,o.y),Xr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ua=class extends fn{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cl=class extends fn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends fn{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(qr(e,s.x,r.x,a.x),qr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends fn{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(qr(e,s.x,r.x,a.x),qr(e,s.y,r.y,a.y),qr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Zd(o,c.x,l.x,h.x,u.x),Zd(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new te().fromArray(s))}return this}},hl=Object.freeze({__proto__:null,ArcCurve:al,CatmullRomCurve3:ol,CubicBezierCurve:ha,CubicBezierCurve3:ll,EllipseCurve:or,LineCurve:ua,LineCurve3:cl,QuadraticBezierCurve:da,QuadraticBezierCurve3:pa,SplineCurve:fa}),ul=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new hl[s.type]().fromJSON(s))}return this}},ma=class extends ul{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ua(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new da(this.currentPoint.clone(),new te(e,t),new te(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ha(this.currentPoint.clone(),new te(e,t),new te(n,s),new te(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new fa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new or(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ga=class extends ma{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ma().fromJSON(s))}return this}};function rg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Jd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=(function(h,u,d,p){let g=[];for(let _=0,f=u.length;_<f;_++){let m=Jd(h,u[_]*p,_<f-1?u[_+1]*p:h.length,p,!1);m===m.next&&(m.steiner=!0),g.push(pg(m))}g.sort(hg);for(let _=0;_<g.length;_++)d=ug(g[_],d);return d})(i,e,r,t)),i.length>80*t){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let p=i[d],g=i[d+1];p<o&&(o=p),g<c&&(c=g),p>h&&(h=p),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return _a(r,a,t,o,c,l,0),a}function Jd(i,e,t,n,s){let r;if(s===(function(a,o,c,l){let h=0;for(let u=o,d=c-l;u<c;u+=l)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Qd(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Qd(a/n|0,i[a],i[a+1],r);return r&&lr(r,r.next)&&(ya(r),r=r.next),r}function gs(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!lr(n,n.next)&&xt(n.prev,n,n.next)!==0)n=n.next;else{if(ya(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function _a(i,e,t,n,s,r,a){if(!i)return;!a&&r&&(function(c,l,h,u){let d=c;do d.z===0&&(d.z=mh(d.x,d.y,l,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let g,_=1;do{let f,m=p;p=null;let v=null;for(g=0;m;){g++;let y=m,x=0;for(let T=0;T<_&&(x++,y=y.nextZ,y);T++);let E=_;for(;x>0||E>0&&y;)x!==0&&(E===0||!y||m.z<=y.z)?(f=m,m=m.nextZ,x--):(f=y,y=y.nextZ,E--),v?v.nextZ=f:p=f,f.prevZ=v,v=f;m=y}v.nextZ=null,_*=2}while(g>1)})(d)})(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?og(i,n,s,r):ag(i))e.push(c.i,i.i,l.i),ya(i),i=l.next,o=l.next;else if((i=l)===o){a?a===1?_a(i=lg(gs(i),e),e,t,n,s,r,2):a===2&&cg(i,e,t,n,s,r):_a(gs(i),e,t,n,s,r,1);break}}}function ag(i){let e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),p=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&$r(s,o,r,c,a,l,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function og(i,e,t,n){let s=i.prev,r=i,a=i.next;if(xt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,p=Math.min(o,c,l),g=Math.min(h,u,d),_=Math.max(o,c,l),f=Math.max(h,u,d),m=mh(p,g,e,t,n),v=mh(_,f,e,t,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=m&&x&&x.z<=v;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=f&&y!==s&&y!==a&&$r(o,h,c,u,l,d,y.x,y.y)&&xt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=f&&x!==s&&x!==a&&$r(o,h,c,u,l,d,x.x,x.y)&&xt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=f&&y!==s&&y!==a&&$r(o,h,c,u,l,d,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=f&&x!==s&&x!==a&&$r(o,h,c,u,l,d,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function lg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!lr(n,s)&&af(n,t,t.next,s)&&va(n,s)&&va(s,n)&&(e.push(n.i,t.i,s.i),ya(t),ya(t.next),t=i=s),t=t.next}while(t!==i);return gs(t)}function cg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fg(a,o)){let c=of(a,o);return a=gs(a,a.next),c=gs(c,c.next),_a(a,e,t,n,s,r,0),void _a(c,e,t,n,s,r,0)}o=o.next}a=a.next}while(a!==i)}function hg(i,e){let t=i.x-e.x;return t===0&&(t=i.y-e.y,t===0)&&(t=(i.next.y-i.y)/(i.next.x-i.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function ug(i,e){let t=(function(s,r){let a=r,o=s.x,c=s.y,l,h=-1/0;if(lr(s,a))return a;do{if(lr(s,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let _=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(_<=o&&_>h&&(h=_,l=a.x<a.next.x?a:a.next,_===o))return l}a=a.next}while(a!==r);if(!l)return null;let u=l,d=l.x,p=l.y,g=1/0;a=l;do{if(o>=a.x&&a.x>=d&&o!==a.x&&rf(c<p?o:h,c,d,p,c<p?h:o,c,a.x,a.y)){let _=Math.abs(c-a.y)/(o-a.x);va(a,s)&&(_<g||_===g&&(a.x>l.x||a.x===l.x&&dg(l,a)))&&(l=a,g=_)}a=a.next}while(a!==u);return l})(i,e);if(!t)return e;let n=of(t,i);return gs(n,n.next),gs(t,t.next)}function dg(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function mh(i,e,t,n,s){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*s|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*s|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function pg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function $r(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&rf(i,e,t,n,s,r,a,o)}function fg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let s=t;do{if(s.i!==t.i&&s.next.i!==t.i&&s.i!==n.i&&s.next.i!==n.i&&af(s,s.next,t,n))return!0;s=s.next}while(s!==t);return!1})(i,e)&&(va(i,e)&&va(e,i)&&(function(t,n){let s=t,r=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do s.y>o!=s.next.y>o&&s.next.y!==s.y&&a<(s.next.x-s.x)*(o-s.y)/(s.next.y-s.y)+s.x&&(r=!r),s=s.next;while(s!==t);return r})(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||lr(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function lr(i,e){return i.x===e.x&&i.y===e.y}function af(i,e,t,n){let s=Go(xt(i,e,t)),r=Go(xt(i,e,n)),a=Go(xt(t,n,i)),o=Go(xt(t,n,e));return s!==r&&a!==o||!(s!==0||!Ho(i,t,e))||!(r!==0||!Ho(i,n,e))||!(a!==0||!Ho(t,i,n))||!(o!==0||!Ho(t,e,n))}function Ho(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Go(i){return i>0?1:i<0?-1:0}function va(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function of(i,e){let t=gh(i.i,i.x,i.y),n=gh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Qd(i,e,t,n){let s=gh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ya(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var _h=class{static triangulate(e,t,n=2){return rg(e,t,n)}},Yn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ep(e),tp(n,e);let a=e.length;t.forEach(ep);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,tp(n,t[c]);let o=_h.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function ep(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function tp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var dl=class i extends lt{constructor(e=new ga([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:mg,y,x,E,T,A,D=!1;m&&(y=m.getSpacedPoints(h),D=!0,d=!1,x=m.computeFrenetFrames(h,!1),E=new M,T=new M,A=new M),d||(f=0,p=0,g=0,_=0);let C=o.extractPoints(l),U=C.shape,H=C.holes;if(!Yn.isClockWise(U)){U=U.reverse();for(let N=0,b=H.length;N<b;N++){let P=H[N];Yn.isClockWise(P)&&(H[N]=P.reverse())}}function O(N){let b=10000000000000001e-36,P=N[0];for(let B=1;B<=N.length;B++){let F=B%N.length,Y=N[F],G=Y.x-P.x,$=Y.y-P.y,ae=G*G+$*$,fe=Math.max(Math.abs(Y.x),Math.abs(Y.y),Math.abs(P.x),Math.abs(P.y));ae<=b*fe*fe?(N.splice(F,1),B--):P=Y}}O(U),H.forEach(O);let J=H.length,V=U;for(let N=0;N<J;N++){let b=H[N];U=U.concat(b)}function Q(N,b,P){return b||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(b,P)}let ee=U.length;function le(N,b,P){let B,F,Y,G=N.x-b.x,$=N.y-b.y,ae=P.x-N.x,fe=P.y-N.y,oe=G*G+$*$,_e=G*fe-$*ae;if(Math.abs(_e)>Number.EPSILON){let Me=Math.sqrt(oe),Te=Math.sqrt(ae*ae+fe*fe),qe=b.x-$/Me,tt=b.y+G/Me,nt=((P.x-fe/Te-qe)*fe-(P.y+ae/Te-tt)*ae)/(G*fe-$*ae);B=qe+G*nt-N.x,F=tt+$*nt-N.y;let me=B*B+F*F;if(me<=2)return new te(B,F);Y=Math.sqrt(me/2)}else{let Me=!1;G>Number.EPSILON?ae>Number.EPSILON&&(Me=!0):G<-Number.EPSILON?ae<-Number.EPSILON&&(Me=!0):Math.sign($)===Math.sign(fe)&&(Me=!0),Me?(B=-$,F=G,Y=Math.sqrt(oe)):(B=G,F=$,Y=Math.sqrt(oe/2))}return new te(B/Y,F/Y)}let se=[];for(let N=0,b=V.length,P=b-1,B=N+1;N<b;N++,P++,B++)P===b&&(P=0),B===b&&(B=0),se[N]=le(V[N],V[P],V[B]);let ye=[],we,be,Ie=se.concat();for(let N=0,b=J;N<b;N++){let P=H[N];we=[];for(let B=0,F=P.length,Y=F-1,G=B+1;B<F;B++,Y++,G++)Y===F&&(Y=0),G===F&&(G=0),we[B]=le(P[B],P[Y],P[G]);ye.push(we),Ie=Ie.concat(we)}if(f===0)be=Yn.triangulateShape(V,H);else{let N=[],b=[];for(let P=0;P<f;P++){let B=P/f,F=p*Math.cos(B*Math.PI/2),Y=g*Math.sin(B*Math.PI/2)+_;for(let G=0,$=V.length;G<$;G++){let ae=Q(V[G],se[G],Y);Re(ae.x,ae.y,-F),B===0&&N.push(ae)}for(let G=0,$=J;G<$;G++){let ae=H[G];we=ye[G];let fe=[];for(let oe=0,_e=ae.length;oe<_e;oe++){let Me=Q(ae[oe],we[oe],Y);Re(Me.x,Me.y,-F),B===0&&fe.push(Me)}B===0&&b.push(fe)}}be=Yn.triangulateShape(N,b)}let ce=be.length,ue=g+_;for(let N=0;N<ee;N++){let b=d?Q(U[N],Ie[N],ue):U[N];D?(T.copy(x.normals[0]).multiplyScalar(b.x),E.copy(x.binormals[0]).multiplyScalar(b.y),A.copy(y[0]).add(T).add(E),Re(A.x,A.y,A.z)):Re(b.x,b.y,0)}for(let N=1;N<=h;N++)for(let b=0;b<ee;b++){let P=d?Q(U[b],Ie[b],ue):U[b];D?(T.copy(x.normals[N]).multiplyScalar(P.x),E.copy(x.binormals[N]).multiplyScalar(P.y),A.copy(y[N]).add(T).add(E),Re(A.x,A.y,A.z)):Re(P.x,P.y,u/h*N)}for(let N=f-1;N>=0;N--){let b=N/f,P=p*Math.cos(b*Math.PI/2),B=g*Math.sin(b*Math.PI/2)+_;for(let F=0,Y=V.length;F<Y;F++){let G=Q(V[F],se[F],B);Re(G.x,G.y,u+P)}for(let F=0,Y=H.length;F<Y;F++){let G=H[F];we=ye[F];for(let $=0,ae=G.length;$<ae;$++){let fe=Q(G[$],we[$],B);D?Re(fe.x,fe.y+y[h-1].y,y[h-1].x+P):Re(fe.x,fe.y,u+P)}}}function he(N,b){let P=N.length;for(;--P>=0;){let B=P,F=P-1;F<0&&(F=N.length-1);for(let Y=0,G=h+2*f;Y<G;Y++){let $=ee*Y,ae=ee*(Y+1);w(b+B+$,b+F+$,b+F+ae,b+B+ae)}}}function Re(N,b,P){c.push(N),c.push(b),c.push(P)}function ke(N,b,P){S(N),S(b),S(P);let B=s.length/3,F=v.generateTopUV(n,s,B-3,B-2,B-1);z(F[0]),z(F[1]),z(F[2])}function w(N,b,P,B){S(N),S(b),S(B),S(b),S(P),S(B);let F=s.length/3,Y=v.generateSideWallUV(n,s,F-6,F-3,F-2,F-1);z(Y[0]),z(Y[1]),z(Y[3]),z(Y[1]),z(Y[2]),z(Y[3])}function S(N){s.push(c[3*N+0]),s.push(c[3*N+1]),s.push(c[3*N+2])}function z(N){r.push(N.x),r.push(N.y)}(function(){let N=s.length/3;if(d){let b=0,P=ee*b;for(let B=0;B<ce;B++){let F=be[B];ke(F[2]+P,F[1]+P,F[0]+P)}b=h+2*f,P=ee*b;for(let B=0;B<ce;B++){let F=be[B];ke(F[0]+P,F[1]+P,F[2]+P)}}else{for(let b=0;b<ce;b++){let P=be[b];ke(P[2],P[1],P[0])}for(let b=0;b<ce;b++){let P=be[b];ke(P[0]+ee*h,P[1]+ee*h,P[2]+ee*h)}}n.addGroup(N,s.length/3-N,0)})(),(function(){let N=s.length/3,b=0;he(V,b),b+=V.length;for(let P=0,B=H.length;P<B;P++){let F=H[P];he(F,b),b+=F.length}n.addGroup(N,s.length/3-N,1)})()}this.setAttribute("position",new Ae(s,3)),this.setAttribute("uv",new Ae(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,s){if(s.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let o=t[r];s.shapes.push(o.uuid)}else s.shapes.push(t.uuid);return s.options=Object.assign({},n),n.extrudePath!==void 0&&(s.options.extrudePath=n.extrudePath.toJSON()),s})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new hl[s.type]().fromJSON(s)),new i(n,e.options)}},mg={generateTopUV:function(i,e,t,n,s){let r=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*s],h=e[3*s+1];return[new te(r,a),new te(o,c),new te(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*s],p=e[3*s+1],g=e[3*s+2],_=e[3*r],f=e[3*r+1],m=e[3*r+2];return Math.abs(o-h)<Math.abs(a-l)?[new te(a,1-c),new te(l,1-u),new te(d,1-g),new te(_,1-m)]:[new te(o,1-c),new te(h,1-u),new te(p,1-g),new te(f,1-m)]}},Rt=class i extends zi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},pl=class i extends lt{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,n=0,s=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Be(s,0,2*Math.PI);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new M,d=new te,p=new M,g=new M,_=new M,f=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:f=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,p.x=1*m,p.y=-f,p.z=0*m,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:f=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,p.x=1*m,p.y=-f,p.z=0*m,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let v=0;v<=t;v++){let y=n+v*h*s,x=Math.sin(y),E=Math.cos(y);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*x,u.y=e[T].y,u.z=e[T].x*E,a.push(u.x,u.y,u.z),d.x=v/t,d.y=T/(e.length-1),o.push(d.x,d.y);let A=c[3*T+0]*x,D=c[3*T+1],C=c[3*T+0]*E;l.push(A,D,C)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let x=y+v*e.length,E=x,T=x+e.length,A=x+e.length+1,D=x+1;r.push(E,T,D),r.push(A,D,T)}this.setIndex(r),this.setAttribute("position",new Ae(a,3)),this.setAttribute("uv",new Ae(o,2)),this.setAttribute("normal",new Ae(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Hi=class i extends zi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Qe=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,p=[],g=[],_=[],f=[];for(let m=0;m<h;m++){let v=m*d-a;for(let y=0;y<l;y++){let x=y*u-r;g.push(x,-v,0),_.push(0,0,1),f.push(y/o),f.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<o;v++){let y=v+l*m,x=v+l*(m+1),E=v+1+l*(m+1),T=v+1+l*m;p.push(y,x,T),p.push(x,E,T)}this.setIndex(p),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},_s=class i extends lt{constructor(e=.5,t=1,n=32,s=1,r=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(s=Math.max(1,s)),p=new M,g=new te;for(let _=0;_<=s;_++){for(let f=0;f<=n;f++){let m=r+f/n*a;p.x=u*Math.cos(m),p.y=u*Math.sin(m),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let f=_*(n+1);for(let m=0;m<n;m++){let v=m+f,y=v,x=v+n+1,E=v+n+2,T=v+1;o.push(y,x,T),o.push(x,E,T)}}this.setIndex(o),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},fl=class i extends lt{constructor(e=new ga([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=s.length/3,d=h.extractPoints(t),p=d.shape,g=d.holes;Yn.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,m=g.length;f<m;f++){let v=g[f];Yn.isClockWise(v)===!0&&(g[f]=v.reverse())}let _=Yn.triangulateShape(p,g);for(let f=0,m=g.length;f<m;f++){let v=g[f];p=p.concat(v)}for(let f=0,m=p.length;f<m;f++){let v=p[f];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let f=0,m=_.length;f<m;f++){let v=_[f],y=v[0]+u,x=v[1]+u,E=v[2]+u;n.push(y,x,E),c+=3}}this.setIndex(n),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(r,3)),this.setAttribute("uv",new Ae(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let s=0,r=t.length;s<r;s++){let a=t[s];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}},mn=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new M,d=new M,p=[],g=[],_=[],f=[];for(let m=0;m<=n;m++){let v=[],y=m/n,x=0;m===0&&a===0?x=.5/t:m===n&&c===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){let T=E/t;u.x=-e*Math.cos(s+T*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+T*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(T+x,1-y),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let y=h[m][v+1],x=h[m][v],E=h[m+1][v],T=h[m+1][v+1];(m!==0||a>0)&&p.push(y,x,T),(m!==n-1||c<Math.PI)&&p.push(x,E,T)}this.setIndex(p),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ml=class i extends zi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},gl=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new M,u=new M,d=new M;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let _=g/s*r,f=p/n*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(_),u.y=(e+t*Math.cos(f))*Math.sin(_),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,f=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,v=(s+1)*p+g;a.push(_,f,v),a.push(f,m,v)}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},_l=class i extends lt{constructor(e=1,t=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);let o=[],c=[],l=[],h=[],u=new M,d=new M,p=new M,g=new M,_=new M,f=new M,m=new M;for(let y=0;y<=n;++y){let x=y/n*r*Math.PI*2;v(x,r,a,e,p),v(x+.01,r,a,e,g),f.subVectors(g,p),m.addVectors(g,p),_.crossVectors(f,m),m.crossVectors(_,f),_.normalize(),m.normalize();for(let E=0;E<=s;++E){let T=E/s*Math.PI*2,A=-t*Math.cos(T),D=t*Math.sin(T);u.x=p.x+(A*m.x+D*_.x),u.y=p.y+(A*m.y+D*_.y),u.z=p.z+(A*m.z+D*_.z),c.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),l.push(d.x,d.y,d.z),h.push(y/n),h.push(E/s)}}for(let y=1;y<=n;y++)for(let x=1;x<=s;x++){let E=(s+1)*(y-1)+(x-1),T=(s+1)*y+(x-1),A=(s+1)*y+x,D=(s+1)*(y-1)+x;o.push(E,T,D),o.push(T,A,D)}function v(y,x,E,T,A){let D=Math.cos(y),C=Math.sin(y),U=E/x*y,H=Math.cos(U);A.x=T*(2+H)*.5*D,A.y=T*(2+H)*C*.5,A.z=T*Math.sin(U)*.5}this.setIndex(o),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},vl=class i extends lt{constructor(e=new pa(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new M,c=new M,l=new te,h=new M,u=[],d=[],p=[],g=[];function _(f){h=e.getPointAt(f/t,h);let m=a.normals[f],v=a.binormals[f];for(let y=0;y<=s;y++){let x=y/s*Math.PI*2,E=Math.sin(x),T=-Math.cos(x);c.x=T*m.x+E*v.x,c.y=T*m.y+E*v.y,c.z=T*m.z+E*v.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)_(f);_(r===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let m=0;m<=s;m++)l.x=f/t,l.y=m/s,p.push(l.x,l.y)})(),(function(){for(let f=1;f<=t;f++)for(let m=1;m<=s;m++){let v=(s+1)*(f-1)+(m-1),y=(s+1)*f+(m-1),x=(s+1)*f+m,E=(s+1)*(f-1)+m;g.push(v,y,E),g.push(y,x,E)}})()})(),this.setIndex(g),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new hl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},yl=class extends lt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new M,r=new M;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let p=d,g=d+u.count;p<g;p+=3)for(let _=0;_<3;_++){let f=o.getX(p+_),m=o.getX(p+(_+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,m),np(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),np(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ae(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function np(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(s)!==!0&&(t.add(n),t.add(s),!0)}var sy=Object.freeze({__proto__:null,BoxGeometry:Ve,CapsuleGeometry:il,CircleGeometry:si,ConeGeometry:kn,CylinderGeometry:$e,DodecahedronGeometry:sl,EdgesGeometry:rl,ExtrudeGeometry:dl,IcosahedronGeometry:Rt,LatheGeometry:pl,OctahedronGeometry:Hi,PlaneGeometry:Qe,PolyhedronGeometry:zi,RingGeometry:_s,ShapeGeometry:fl,SphereGeometry:mn,TetrahedronGeometry:ml,TorusGeometry:gl,TorusKnotGeometry:_l,TubeGeometry:vl,WireframeGeometry:yl});var ie=class extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var xl=class extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bl=class extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Vo(i,e){return i&&i.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i):i}function gg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var vs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ml=class extends vs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ch,endingEnd:ch}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hh:r=e,o=2*t-n;break;case uh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hh:a=e,c=2*n-t;break;case uh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,f=_*g,m=-d*f+2*d*_-d*g,v=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-p)*f+(1.5+p)*_+.5*g,x=p*f-p*_;for(let E=0;E!==o;++E)r[E]=m*a[h+E]+v*a[l+E]+y*a[c+E]+x*a[u+E];return r}},El=class extends vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Sl=class extends vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vo(t,this.TimeBufferType),this.values=Vo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vo(e.times,Array),values:Vo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ml(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Kr:t=this.InterpolantFactoryMethodDiscrete;break;case qo:t=this.InterpolantFactoryMethodLinear;break;case Wo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Wo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&gg(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(s)c=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let g=t[h+p];if(g!==t[u+p]||g!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};pn.prototype.ValueTypeName="",pn.prototype.TimeBufferType=Float32Array,pn.prototype.ValueBufferType=Float32Array,pn.prototype.DefaultInterpolation=qo;var Ui=class extends pn{constructor(e,t,n){super(e,t,n)}};Ui.prototype.ValueTypeName="bool",Ui.prototype.ValueBufferType=Array,Ui.prototype.DefaultInterpolation=Kr,Ui.prototype.InterpolantFactoryMethodLinear=void 0,Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};wl.prototype.ValueTypeName="color";var Tl=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};Tl.prototype.ValueTypeName="number";var Al=class extends vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)on.slerpFlat(r,0,a,l-o,a,l,c);return r}},xa=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}};xa.prototype.ValueTypeName="quaternion",xa.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends pn{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="string",ki.prototype.ValueBufferType=Array,ki.prototype.DefaultInterpolation=Kr,ki.prototype.InterpolantFactoryMethodLinear=void 0,ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Rl=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};Rl.prototype.ValueTypeName="vector";var Cl=class{constructor(e,t,n){let s=this,r,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){c++,a===!1&&s.onStart!==void 0&&s.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,c),o===c&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},lf=new Cl,Il=class{constructor(e){this.manager=e!==void 0?e:lf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Il.DEFAULT_MATERIAL_NAME="__DEFAULT";var cr=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ba=class extends cr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ah=new Pe,ip=new M,sp=new M,Pl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oi,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sp),t.updateMatrixWorld(),ah.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var rp=new Pe,Wr=new M,oh=new M,vh=class extends Pl{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wr),oh.copy(n.position),oh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(oh),n.updateMatrixWorld(),s.makeTranslation(-Wr.x,-Wr.y,-Wr.z),rp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rp,n.coordinateSystem,n.reversedDepth)}},Ma=class extends cr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vh}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ea=class extends nr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yh=class extends Pl{constructor(){super(new Ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sa=class extends cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new yh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ry=new Pe,ay=new Pe,oy=new Pe;var Ll=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},wa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},ly=new M,cy=new on,hy=new M,uy=new M,dy=new M;var py=new M,fy=new on,my=new M,gy=new M;var pu="\\[\\]\\.:\\/",_g=new RegExp("["+pu+"]","g"),lh="[^"+pu+"]",vg="[^"+pu.replace("\\.","")+"]",yg=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",lh)+/(WCOD+)?/.source.replace("WCOD",vg)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh)+"$"),xg=["material","materials","bones","map"],ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_g,"")}static parseTrackName(e){let t=yg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=class{constructor(i,e,t){let n=t||ut.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=t.length;n!==s;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray],ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _y=new Float32Array(1);var ap=new Pe,Ta=class{constructor(e,t,n=0,s=1/0){this.ray=new ni(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ap.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ap),this}intersectObject(e,t=!0,n=[]){return xh(e,this,n,t),n.sort(op),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)xh(e[s],this,n,t);return n.sort(op),n}};function op(i,e){return i.distance-e.distance}function xh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)xh(r[a],e,t,!0)}}var hr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Be(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var vy=new te;var yy=new M,xy=new M,by=new M,My=new M,Ey=new M,Sy=new M,wy=new M;var Ty=new M;var Ay=new M,Ry=new Pe,Cy=new Pe;var Iy=new M,Py=new de,Ly=new de;var Dy=new M,Fy=new M,Ny=new M;var Uy=new M,ky=new nr;var By=new bn;var Oy=new M;var Aa=class extends ei{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){e!==void 0?(this.domElement!==null&&this.disconnect(),this.domElement=e):console.warn("THREE.Controls: connect() now requires an element.")}disconnect(){}dispose(){}update(){}};function fu(i,e,t,n){let s=(function(r){switch(r){case ai:case Ah:return{byteLength:1,components:1};case fr:case Rh:case mr:return{byteLength:2,components:1};case jl:case ql:return{byteLength:2,components:4};case bs:case $l:case Bn:return{byteLength:4,components:1};case Ch:case Ih:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)})(n);switch(t){case 1021:return i*e;case Xl:case Kl:return i*e/s.components*s.byteLength;case 1030:case 1031:return i*e*2/s.components*s.byteLength;case 1022:return i*e*3/s.components*s.byteLength;case On:case 1033:return i*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Lf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mg(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let r=e.get(t);return void((!r||r.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let s=e.get(t);if(s===void 0)e.set(t,(function(r,a){let o=r.array,c=r.usage,l=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(a,h),i.bufferData(a,o,c),r.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=i.HALF_FLOAT;else if(o instanceof Uint16Array)u=r.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:r.version,size:l}})(t,n));else if(s.version<t.version){if(s.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(r,a,o){let c=a.array,l=a.updateRanges;if(i.bindBuffer(o,r),l.length===0)i.bufferSubData(o,0,c);else{l.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<l.length;u++){let d=l[h],p=l[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,l[h]=p)}l.length=h+1;for(let u=0,d=l.length;u<d;u++){let p=l[u];i.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(s.buffer,t,n),s.version=t.version}}}}var ze={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},pe={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},oi={basic:{uniforms:Yt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Yt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new de(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Yt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Yt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Yt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new de(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Yt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Yt([pe.points,pe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Yt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Yt([pe.common,pe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Yt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Yt([pe.sprite,pe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Yt([pe.common,pe.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Yt([pe.lights,pe.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};oi.physical={uniforms:Yt([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var ec={r:0,b:0,g:0},Ss=new ln,Eg=new Pe;function Sg(i,e,t,n,s,r,a){let o=new de(0),c,l,h=r===!0?0:1,u=null,d=0,p=null;function g(f){let m=f.isScene===!0?f.background:null;return m&&m.isTexture&&(m=(f.backgroundBlurriness>0?t:e).get(m)),m}function _(f,m){f.getRGB(ec,uu(i)),n.buffers.color.setClear(ec.r,ec.g,ec.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(f,m=1){o.set(f),h=m,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,_(o,h)},render:function(f){let m=!1,v=g(f);v===null?_(o,h):v&&v.isColor&&(_(v,1),m=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||m)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(f,m){let v=g(m);v&&(v.isCubeTexture||v.mapping===Ia)?(l===void 0&&(l=new W(new Ve(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Es(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,x,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),Ss.copy(m.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(Ss)),l.material.toneMapped=et.getTransfer(v.colorSpace)!==ot,u===v&&d===v.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new W(new Qe(2,2),new Un({name:"BackgroundMaterial",uniforms:Es(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=et.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}}}function wg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=l(null),r=s,a=!1;function o(m){return i.bindVertexArray(m)}function c(m){return i.deleteVertexArray(m)}function l(m){let v=[],y=[],x=[];for(let E=0;E<t;E++)v[E]=0,y[E]=0,x[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:y,attributeDivisors:x,object:m,attributes:{},index:null}}function h(){let m=r.newAttributes;for(let v=0,y=m.length;v<y;v++)m[v]=0}function u(m){d(m,0)}function d(m,v){let y=r.newAttributes,x=r.enabledAttributes,E=r.attributeDivisors;y[m]=1,x[m]===0&&(i.enableVertexAttribArray(m),x[m]=1),E[m]!==v&&(i.vertexAttribDivisor(m,v),E[m]=v)}function p(){let m=r.newAttributes,v=r.enabledAttributes;for(let y=0,x=v.length;y<x;y++)v[y]!==m[y]&&(i.disableVertexAttribArray(y),v[y]=0)}function g(m,v,y,x,E,T,A){A===!0?i.vertexAttribIPointer(m,v,y,E,T):i.vertexAttribPointer(m,v,y,x,E,T)}function _(){f(),a=!0,r!==s&&(r=s,o(r.object))}function f(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:function(m,v,y,x,E){let T=!1,A=(function(D,C,U){let H=U.wireframe===!0,O=n[D.id];O===void 0&&(O={},n[D.id]=O);let J=O[C.id];J===void 0&&(J={},O[C.id]=J);let V=J[H];return V===void 0&&(V=l(i.createVertexArray()),J[H]=V),V})(x,y,v);r!==A&&(r=A,o(r.object)),T=(function(D,C,U,H){let O=r.attributes,J=C.attributes,V=0,Q=U.getAttributes();for(let ee in Q)if(Q[ee].location>=0){let le=O[ee],se=J[ee];if(se===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),le===void 0||le.attribute!==se||se&&le.data!==se.data)return!0;V++}return r.attributesNum!==V||r.index!==H})(m,x,y,E),T&&(function(D,C,U,H){let O={},J=C.attributes,V=0,Q=U.getAttributes();for(let ee in Q)if(Q[ee].location>=0){let le=J[ee];le===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(le=D.instanceColor));let se={};se.attribute=le,le&&le.data&&(se.data=le.data),O[ee]=se,V++}r.attributes=O,r.attributesNum=V,r.index=H})(m,x,y,E),E!==null&&e.update(E,i.ELEMENT_ARRAY_BUFFER),(T||a)&&(a=!1,(function(D,C,U,H){h();let O=H.attributes,J=U.getAttributes(),V=C.defaultAttributeValues;for(let Q in J){let ee=J[Q];if(ee.location>=0){let le=O[Q];if(le===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),le!==void 0){let se=le.normalized,ye=le.itemSize,we=e.get(le);if(we===void 0)continue;let be=we.buffer,Ie=we.type,ce=we.bytesPerElement,ue=Ie===i.INT||Ie===i.UNSIGNED_INT||le.gpuType===$l;if(le.isInterleavedBufferAttribute){let he=le.data,Re=he.stride,ke=le.offset;if(he.isInstancedInterleavedBuffer){for(let w=0;w<ee.locationSize;w++)d(ee.location+w,he.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let w=0;w<ee.locationSize;w++)u(ee.location+w);i.bindBuffer(i.ARRAY_BUFFER,be);for(let w=0;w<ee.locationSize;w++)g(ee.location+w,ye/ee.locationSize,Ie,se,Re*ce,(ke+ye/ee.locationSize*w)*ce,ue)}else{if(le.isInstancedBufferAttribute){for(let he=0;he<ee.locationSize;he++)d(ee.location+he,le.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let he=0;he<ee.locationSize;he++)u(ee.location+he);i.bindBuffer(i.ARRAY_BUFFER,be);for(let he=0;he<ee.locationSize;he++)g(ee.location+he,ye/ee.locationSize,Ie,se,ye*ce,ye/ee.locationSize*he*ce,ue)}}else if(V!==void 0){let se=V[Q];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(ee.location,se);break;case 3:i.vertexAttrib3fv(ee.location,se);break;case 4:i.vertexAttrib4fv(ee.location,se);break;default:i.vertexAttrib1fv(ee.location,se)}}}}p()})(m,v,y,x),E!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))},reset:_,resetDefaultState:f,dispose:function(){_();for(let m in n){let v=n[m];for(let y in v){let x=v[y];for(let E in x)c(x[E].object),delete x[E];delete v[y]}delete n[m]}},releaseStatesOfGeometry:function(m){if(n[m.id]===void 0)return;let v=n[m.id];for(let y in v){let x=v[y];for(let E in x)c(x[E].object),delete x[E];delete v[y]}delete n[m.id]},releaseStatesOfProgram:function(m){for(let v in n){let y=n[v];if(y[m.id]===void 0)continue;let x=y[m.id];for(let E in x)c(x[E].object),delete x[E];delete y[m.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Tg(i,e,t){let n;function s(r,a,o){o!==0&&(i.drawArraysInstanced(n,r,a,o),t.update(a,n,o))}this.setMode=function(r){n=r},this.render=function(r,a){i.drawArrays(n,r,a),t.update(a,n,1)},this.renderInstances=s,this.renderMultiDraw=function(r,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,r,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,n,1)},this.renderMultiDrawInstances=function(r,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<r.length;h++)s(r[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(n,r,0,a,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*c[u];t.update(h,n,1)}}}function Ag(i,e,t,n){let s;function r(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s},getMaxPrecision:r,textureFormatReadable:function(d){return d===On||n.convert(d)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==ai&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Bn&&!p)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function Rg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new xn,o=new Ue,c={value:null,needsUpdate:!1};function l(h,u,d,p){let g=h!==null?h.length:0,_=null;if(g!==0){if(_=c.value,p!==!0||_===null){let f=d+4*g,m=u.matrixWorldInverse;o.getNormalMatrix(m),(_===null||_.length<f)&&(_=new Float32Array(f));for(let v=0,y=d;v!==g;++v,y+=4)a.copy(h[v]).applyMatrix4(m,o),a.normal.toArray(_,y),_[y+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||s;return s=u,n=h.length,d},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,g=h.clipIntersection,_=h.clipShadows,f=i.get(h);if(!s||p===null||p.length===0||r&&!_)r?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let m=r?0:n,v=4*m,y=f.clippingState||null;c.value=y,y=l(p,u,v,d);for(let x=0;x!==v;++x)y[x]=t[x];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=m}}}function Cg(i){let e=new WeakMap;function t(s,r){return r===Gl?s.mapping=pr:r===Vl&&(s.mapping=ys),s}function n(s){let r=s.target;r.removeEventListener("dispose",n);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(s){if(s&&s.isTexture){let r=s.mapping;if(r===Gl||r===Vl){if(e.has(s))return t(e.get(s).texture,s.mapping);{let a=s.image;if(a&&a.height>0){let o=new Qo(a.height);return o.fromEquirectangularTexture(i,s),e.set(s,o),s.addEventListener("dispose",n),t(o.texture,s.mapping)}return null}}}return s},dispose:function(){e=new WeakMap}}}var cf=[.125,.215,.35,.446,.526,.582],Fa=20,mu=new Ea,hf=new de,gu=null,_u=0,vu=0,yu=!1,Ts=(1+Math.sqrt(5))/2,_r=1/Ts,uf=[new M(-Ts,_r,0),new M(Ts,_r,0),new M(-_r,0,Ts),new M(_r,0,Ts),new M(0,Ts,-_r),new M(0,Ts,_r),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],Ig=new M,ic=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ig}=r;gu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gu,_u,vu),this._renderer.xr.enabled=yu,e.scissorTest=!1,tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:mr,format:On,colorSpace:fs,depthBuffer:!1},s=df(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+cf.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);c.push(p);let g=1/p;d>a-4?g=cf[d-a+4-1]:d===0&&(g=0),l.push(g);let _=1/(p-2),f=-_,m=1+_,v=[f,f,m,f,m,m,f,f,m,m,f,m],y=6,x=6,E=3,T=2,A=1,D=new Float32Array(E*x*y),C=new Float32Array(T*x*y),U=new Float32Array(A*x*y);for(let O=0;O<y;O++){let J=O%3*2/3-1,V=O>2?0:-1,Q=[J,V,0,J+2/3,V,0,J+2/3,V+1,0,J,V,0,J+2/3,V+1,0,J,V+1,0];D.set(Q,E*x*O),C.set(v,T*x*O);let ee=[O,O,O,O,O,O];U.set(ee,A*x*O)}let H=new lt;H.setAttribute("position",new Gt(D,E)),H.setAttribute("uv",new Gt(C,T)),H.setAttribute("faceIndex",new Gt(U,A)),o.push(H),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(r)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(Fa),h=new M(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Fa,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})})(r,e,t)}return s}_compileMaterial(e){let t=new W(this._lodPlanes[0],e);this._renderer.compile(t,mu)}_sceneToCubeUV(e,t,n,s,r){let a=new Ht(90,1,t,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(hf),l.toneMapping=xi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(s),l.clearDepth(),l.setRenderTarget(null));let d=new Kt({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),p=new W(new Ve,d),g=!1,_=e.background;_?_.isColor&&(d.color.copy(_),e.background=null,g=!0):(d.color.copy(hf),g=!0);for(let f=0;f<6;f++){let m=f%3;m===0?(a.up.set(0,o[f],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+c[f],r.y,r.z)):m===1?(a.up.set(0,0,o[f]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+c[f],r.z)):(a.up.set(0,o[f],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+c[f]));let v=this._cubeSize;tc(s,m*v,f>2?v:0,v,v),l.setRenderTarget(s),g&&l.render(p,a),l.render(e,a)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=u,l.autoClear=h,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===pr||e.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new W(this._lodPlanes[0],r);r.uniforms.envMap.value=e;let o=this._cubeSize;tc(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,mu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=uf[(s-r-1)%uf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new W(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,g=r/p,_=isFinite(r)?1+Math.floor(3*g):Fa;_>Fa&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let f=[],m=0;for(let x=0;x<Fa;++x){let E=x/g,T=Math.exp(-E*E/2);f.push(T),x===0?m+=T:x<_&&(m+=2*T)}for(let x=0;x<f.length;x++)f[x]=f[x]/m;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let y=this._sizeLods[s];tc(t,3*y*(s>v-4?s-v+4:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(h,mu)}};function df(i,e,t){let n=new ti(i,e,t);return n.texture.mapping=Ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function pf(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function ff(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Cu(){return`

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
	`}function Pg(i){let e=new WeakMap,t=null;function n(s){let r=s.target;r.removeEventListener("dispose",n);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(s){if(s&&s.isTexture){let r=s.mapping,a=r===Gl||r===Vl,o=r===pr||r===ys;if(a||o){let c=e.get(s),l=c!==void 0?c.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==l)return t===null&&(t=new ic(i)),c=a?t.fromEquirectangular(s,c):t.fromCubemap(s,c),c.texture.pmremVersion=s.pmremVersion,e.set(s,c),c.texture;if(c!==void 0)return c.texture;{let h=s.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let g=0;g<p;g++)u[g]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new ic(i)),c=a?t.fromEquirectangular(s):t.fromCubemap(s),c.texture.pmremVersion=s.pmremVersion,e.set(s,c),s.addEventListener("dispose",n),c.texture):null}}}return s},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Lg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Qs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Dg(i,e,t,n){let s={},r=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);l.removeEventListener("dispose",a),delete s[l.id];let h=r.get(l);h&&(e.remove(h),r.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let _=h.array;d=h.version;for(let f=0,m=_.length;f<m;f+=3){let v=_[f+0],y=_[f+1],x=_[f+2];l.push(v,y,y,x,x,v)}}else{if(u===void 0)return;{let _=u.array;d=u.version;for(let f=0,m=_.length/3-1;f<m;f+=3){let v=f+0,y=f+1,x=f+2;l.push(v,y,y,x,x,v)}}}let p=new(hu(l)?ta:ea)(l,1);p.version=d;let g=r.get(c);g&&e.remove(g),r.set(c,p)}return{get:function(c,l){return s[l.id]===!0||(l.addEventListener("dispose",a),s[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],i.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=r.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return r.get(c)}}}function Fg(i,e,t){let n,s,r;function a(o,c,l){l!==0&&(i.drawElementsInstanced(n,c,s,o*r,l),t.update(c,n,l))}this.setMode=function(o){n=o},this.setIndex=function(o){s=o.type,r=o.bytesPerElement},this.render=function(o,c){i.drawElements(n,c,s,o*r),t.update(c,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,s,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/r,c[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,c,0,s,o,0,h,0,l);let d=0;for(let p=0;p<l;p++)d+=c[p]*h[p];t.update(d,n,1)}}}function Ng(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,s){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=s*(t/3);break;case i.LINES:e.lines+=s*(t/2);break;case i.LINE_STRIP:e.lines+=s*(t-1);break;case i.LINE_LOOP:e.lines+=s*t;break;case i.POINTS:e.points+=s*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Ug(i,e,t){let n=new WeakMap,s=new rt;return{update:function(r,a,o){let c=r.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=n.get(a);if(u===void 0||u.count!==h){let D=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],m=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),g===!0&&(v=3);let y=a.attributes.position.count*v,x=1;y>e.maxTextureSize&&(x=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*x*4*h),T=new Qr(E,y,x,h);T.type=Bn,T.needsUpdate=!0;let A=4*v;for(let C=0;C<h;C++){let U=_[C],H=f[C],O=m[C],J=y*x*4*C;for(let V=0;V<U.count;V++){let Q=V*A;d===!0&&(s.fromBufferAttribute(U,V),E[J+Q+0]=s.x,E[J+Q+1]=s.y,E[J+Q+2]=s.z,E[J+Q+3]=0),p===!0&&(s.fromBufferAttribute(H,V),E[J+Q+4]=s.x,E[J+Q+5]=s.y,E[J+Q+6]=s.z,E[J+Q+7]=0),g===!0&&(s.fromBufferAttribute(O,V),E[J+Q+8]=s.x,E[J+Q+9]=s.y,E[J+Q+10]=s.z,E[J+Q+11]=O.itemSize===4?s.w:1)}}u={count:h,texture:T,size:new te(y,x)},n.set(a,u),a.addEventListener("dispose",D)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function kg(i,e,t,n){let s=new WeakMap;function r(a){let o=a.target;o.removeEventListener("dispose",r),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(s.get(l)!==o&&(e.update(l),s.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),s.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),s.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;s.get(h)!==o&&(h.update(),s.set(h,o))}return l},dispose:function(){s=new WeakMap}}}var Df=new nn,mf=new la(1,1),Ff=new Qr,Nf=new Zo,Uf=new na,gf=[],_f=[],vf=new Float32Array(16),yf=new Float32Array(9),xf=new Float32Array(4);function yr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=gf[s];if(r===void 0&&(r=new Float32Array(s),gf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function rc(i,e){let t=_f[e];t===void 0&&(t=new Int32Array(e),_f[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Og(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function zg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function Hg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function Gg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Ct(t,n))return;xf.set(n),i.uniformMatrix2fv(this.addr,!1,xf),It(t,n)}}function Vg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Ct(t,n))return;yf.set(n),i.uniformMatrix3fv(this.addr,!1,yf),It(t,n)}}function Wg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Ct(t,n))return;vf.set(n),i.uniformMatrix4fv(this.addr,!1,vf),It(t,n)}}function $g(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function qg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function Kg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function Zg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function Jg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function Qg(i,e,t){let n=this.cache,s=t.allocateTextureUnit(),r;n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),this.type===i.SAMPLER_2D_SHADOW?(mf.compareFunction=ou,r=mf):r=Df,t.setTexture2D(e||r,s)}function e0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Nf,s)}function t0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Uf,s)}function n0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ff,s)}function i0(i,e){i.uniform1fv(this.addr,e)}function s0(i,e){let t=yr(e,this.size,2);i.uniform2fv(this.addr,t)}function r0(i,e){let t=yr(e,this.size,3);i.uniform3fv(this.addr,t)}function a0(i,e){let t=yr(e,this.size,4);i.uniform4fv(this.addr,t)}function o0(i,e){let t=yr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function l0(i,e){let t=yr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function c0(i,e){let t=yr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function h0(i,e){i.uniform1iv(this.addr,e)}function u0(i,e){i.uniform2iv(this.addr,e)}function d0(i,e){i.uniform3iv(this.addr,e)}function p0(i,e){i.uniform4iv(this.addr,e)}function f0(i,e){i.uniform1uiv(this.addr,e)}function m0(i,e){i.uniform2uiv(this.addr,e)}function g0(i,e){i.uniform3uiv(this.addr,e)}function _0(i,e){i.uniform4uiv(this.addr,e)}function v0(i,e,t){let n=this.cache,s=e.length,r=rc(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Df,r[a])}function y0(i,e,t){let n=this.cache,s=e.length,r=rc(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Nf,r[a])}function x0(i,e,t){let n=this.cache,s=e.length,r=rc(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Uf,r[a])}function b0(i,e,t){let n=this.cache,s=e.length,r=rc(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ff,r[a])}var bu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(s){switch(s){case 5126:return Bg;case 35664:return Og;case 35665:return zg;case 35666:return Hg;case 35674:return Gg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return $g;case 35667:case 35671:return jg;case 35668:case 35672:return qg;case 35669:case 35673:return Xg;case 5125:return Kg;case 36294:return Yg;case 36295:return Zg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return n0}})(t.type)}},Mu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(s){switch(s){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return a0;case 35674:return o0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return p0;case 5125:return f0;case 36294:return m0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return b0}})(t.type)}},Eu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},xu=/(\w+)(\])?(\[|\.)?/g;function bf(i,e){i.seq.push(e),i.map[e.id]=e}function M0(i,e,t){let n=i.name,s=n.length;for(xu.lastIndex=0;;){let r=xu.exec(n),a=xu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===s){bf(t,l===void 0?new bu(o,i,e):new Mu(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new Eu(o),bf(t,h)),t=h}}}var vr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s);M0(r,e.getUniformLocation(t,r.name),this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Mf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var E0=0,Ef=new Ue;function Sf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){let g=p+1;h.push(`${g===c?">":" "} ${g}: ${l[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return s}function S0(i,e){let t=(function(n){et._getMatrix(Ef,et.workingColorSpace,n);let s=`mat3( ${Ef.elements.map(r=>r.toFixed(4))} )`;switch(et.getTransfer(n)){case Yr:return[s,"LinearTransferOETF"];case ot:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[s,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function w0(i,e){let t;switch(e){case Dp:t="Linear";break;case Fp:t="Reinhard";break;case Np:t="Cineon";break;case Hl:t="ACESFilmic";break;case kp:t="AgX";break;case Bp:t="Neutral";break;case Up:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nc=new M;function T0(){return et.getLuminanceCoefficients(nc),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${nc.x.toFixed(4)}, ${nc.y.toFixed(4)}, ${nc.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Na(i){return i!==""}function wf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var A0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(i){return i.replace(A0,C0)}var R0=new Map;function C0(i,e){let t=ze[e];if(t===void 0){let n=R0.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Su(t)}var I0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Af(i){return i.replace(I0,P0)}function P0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function L0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(H){let O="SHADOWMAP_TYPE_BASIC";return H.shadowMapType===Mh?O="SHADOWMAP_TYPE_PCF":H.shadowMapType===Dl?O="SHADOWMAP_TYPE_PCF_SOFT":H.shadowMapType===ri&&(O="SHADOWMAP_TYPE_VSM"),O})(t),l=(function(H){let O="ENVMAP_TYPE_CUBE";if(H.envMap)switch(H.envMapMode){case pr:case ys:O="ENVMAP_TYPE_CUBE";break;case Ia:O="ENVMAP_TYPE_CUBE_UV"}return O})(t),h=(function(H){let O="ENVMAP_MODE_REFLECTION";return H.envMap&&H.envMapMode===ys&&(O="ENVMAP_MODE_REFRACTION"),O})(t),u=(function(H){let O="ENVMAP_BLENDING_NONE";if(H.envMap)switch(H.combine){case Ip:O="ENVMAP_BLENDING_MULTIPLY";break;case Pp:O="ENVMAP_BLENDING_MIX";break;case Lp:O="ENVMAP_BLENDING_ADD"}return O})(t),d=(function(H){let O=H.envMapCubeUVHeight;if(O===null)return null;let J=Math.log2(O)-2,V=1/O;return{texelWidth:1/(3*Math.max(Math.pow(2,J),112)),texelHeight:V,maxMip:J}})(t),p=(function(H){return[H.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",H.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)})(t),g=(function(H){let O=[];for(let J in H){let V=H[J];V!==!1&&O.push("#define "+J+" "+V)}return O.join(`
`)})(r),_=s.createProgram(),f,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Na).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Na).join(`
`),m.length>0&&(m+=`
`)):(f=[Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),m=[Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?ze.tonemapping_pars_fragment:"",t.toneMapping!==xi?w0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,S0("linearToOutputTexel",t.outputColorSpace),T0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Na).join(`
`)),a=Su(a),a=wf(a,t),a=Tf(a,t),o=Su(o),o=wf(o,t),o=Tf(o,t),a=Af(a),o=Af(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",t.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=v+f+a,x=v+m+o,E=Mf(s,s.VERTEX_SHADER,y),T=Mf(s,s.FRAGMENT_SHADER,x);function A(H){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(_)||"",J=s.getShaderInfoLog(E)||"",V=s.getShaderInfoLog(T)||"",Q=O.trim(),ee=J.trim(),le=V.trim(),se=!0,ye=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,T);else{let we=Sf(s,E,"vertex"),be=Sf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Q+`
`+we+`
`+be)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):ee!==""&&le!==""||(ye=!1);ye&&(H.diagnostics={runnable:se,programLog:Q,vertexShader:{log:ee,prefix:f},fragmentShader:{log:le,prefix:m}})}s.deleteShader(E),s.deleteShader(T),D=new vr(s,_),C=(function(O,J){let V={},Q=O.getProgramParameter(J,O.ACTIVE_ATTRIBUTES);for(let ee=0;ee<Q;ee++){let le=O.getActiveAttrib(J,ee),se=le.name,ye=1;le.type===O.FLOAT_MAT2&&(ye=2),le.type===O.FLOAT_MAT3&&(ye=3),le.type===O.FLOAT_MAT4&&(ye=4),V[se]={type:le.type,location:O.getAttribLocation(J,se),locationSize:ye}}return V})(s,_)}let D,C;s.attachShader(_,E),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_),this.getUniforms=function(){return D===void 0&&A(this),D},this.getAttributes=function(){return C===void 0&&A(this),C};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(_,37297)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}var D0=0,wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tu(e),t.set(e,n)),n}},Tu=class{constructor(e){this.id=D0++,this.code=e,this.usedTimes=0}};function F0(i,e,t,n,s,r,a){let o=new tr,c=new wu,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(f){return l.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,m,v,y,x){let E=y.fog,T=x.geometry,A=f.isMeshStandardMaterial?y.environment:null,D=(f.isMeshStandardMaterial?t:e).get(f.envMap||A),C=D&&D.mapping===Ia?D.image.height:null,U=g[f.type];f.precision!==null&&(p=s.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let H=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,O=H!==void 0?H.length:0,J,V,Q,ee,le=0;if(T.morphAttributes.position!==void 0&&(le=1),T.morphAttributes.normal!==void 0&&(le=2),T.morphAttributes.color!==void 0&&(le=3),U){let jt=oi[U];J=jt.vertexShader,V=jt.fragmentShader}else J=f.vertexShader,V=f.fragmentShader,c.update(f),Q=c.getVertexShaderID(f),ee=c.getFragmentShaderID(f);let se=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),we=x.isInstancedMesh===!0,be=x.isBatchedMesh===!0,Ie=!!f.map,ce=!!f.matcap,ue=!!D,he=!!f.aoMap,Re=!!f.lightMap,ke=!!f.bumpMap,w=!!f.normalMap,S=!!f.displacementMap,z=!!f.emissiveMap,N=!!f.metalnessMap,b=!!f.roughnessMap,P=f.anisotropy>0,B=f.clearcoat>0,F=f.dispersion>0,Y=f.iridescence>0,G=f.sheen>0,$=f.transmission>0,ae=P&&!!f.anisotropyMap,fe=B&&!!f.clearcoatMap,oe=B&&!!f.clearcoatNormalMap,_e=B&&!!f.clearcoatRoughnessMap,Me=Y&&!!f.iridescenceMap,Te=Y&&!!f.iridescenceThicknessMap,qe=G&&!!f.sheenColorMap,tt=G&&!!f.sheenRoughnessMap,nt=!!f.specularMap,me=!!f.specularColorMap,Ce=!!f.specularIntensityMap,We=$&&!!f.transmissionMap,$t=$&&!!f.thicknessMap,xe=!!f.gradientMap,st=!!f.alphaMap,Xe=f.alphaTest>0,Rn=!!f.alphaHash,ui=!!f.extensions,k=xi;f.toneMapped&&(se!==null&&se.isXRRenderTarget!==!0||(k=i.toneMapping));let Ut={shaderID:U,shaderType:f.type,shaderName:f.name,vertexShader:J,fragmentShader:V,defines:f.defines,customVertexShaderID:Q,customFragmentShaderID:ee,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:be,batchingColor:be&&x._colorsTexture!==null,instancing:we,instancingColor:we&&x.instanceColor!==null,instancingMorph:we&&x.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:fs,alphaToCoverage:!!f.alphaToCoverage,map:Ie,matcap:ce,envMap:ue,envMapMode:ue&&D.mapping,envMapCubeUVHeight:C,aoMap:he,lightMap:Re,bumpMap:ke,normalMap:w,displacementMap:d&&S,emissiveMap:z,normalMapObjectSpace:w&&f.normalMapType===$p,normalMapTangentSpace:w&&f.normalMapType===Wp,metalnessMap:N,roughnessMap:b,anisotropy:P,anisotropyMap:ae,clearcoat:B,clearcoatMap:fe,clearcoatNormalMap:oe,clearcoatRoughnessMap:_e,dispersion:F,iridescence:Y,iridescenceMap:Me,iridescenceThicknessMap:Te,sheen:G,sheenColorMap:qe,sheenRoughnessMap:tt,specularMap:nt,specularColorMap:me,specularIntensityMap:Ce,transmission:$,transmissionMap:We,thicknessMap:$t,gradientMap:xe,opaque:f.transparent===!1&&f.blending===Ra&&f.alphaToCoverage===!1,alphaMap:st,alphaTest:Xe,alphaHash:Rn,combine:f.combine,mapUv:Ie&&_(f.map.channel),aoMapUv:he&&_(f.aoMap.channel),lightMapUv:Re&&_(f.lightMap.channel),bumpMapUv:ke&&_(f.bumpMap.channel),normalMapUv:w&&_(f.normalMap.channel),displacementMapUv:S&&_(f.displacementMap.channel),emissiveMapUv:z&&_(f.emissiveMap.channel),metalnessMapUv:N&&_(f.metalnessMap.channel),roughnessMapUv:b&&_(f.roughnessMap.channel),anisotropyMapUv:ae&&_(f.anisotropyMap.channel),clearcoatMapUv:fe&&_(f.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(f.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(f.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&_(f.sheenColorMap.channel),sheenRoughnessMapUv:tt&&_(f.sheenRoughnessMap.channel),specularMapUv:nt&&_(f.specularMap.channel),specularColorMapUv:me&&_(f.specularColorMap.channel),specularIntensityMapUv:Ce&&_(f.specularIntensityMap.channel),transmissionMapUv:We&&_(f.transmissionMap.channel),thicknessMapUv:$t&&_(f.thicknessMap.channel),alphaMapUv:st&&_(f.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(w||P),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!T.attributes.uv&&(Ie||st),fog:!!E,useFog:f.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:f.flatShading===!0&&f.wireframe===!1,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:x.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:le,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:k,decodeVideoTexture:Ie&&f.map.isVideoTexture===!0&&et.getTransfer(f.map.colorSpace)===ot,decodeVideoTextureEmissive:z&&f.emissiveMap.isVideoTexture===!0&&et.getTransfer(f.emissiveMap.colorSpace)===ot,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===mt,flipSided:f.side===gn,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:ui&&f.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ui&&f.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut},getProgramCacheKey:function(f){let m=[];if(f.shaderID?m.push(f.shaderID):(m.push(f.customVertexShaderID),m.push(f.customFragmentShaderID)),f.defines!==void 0)for(let v in f.defines)m.push(v),m.push(f.defines[v]);return f.isRawShaderMaterial===!1&&((function(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)})(m,f),(function(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)})(m,f),m.push(i.outputColorSpace)),m.push(f.customProgramCacheKey),m.join()},getUniforms:function(f){let m=g[f.type],v;if(m){let y=oi[m];v=nf.clone(y.uniforms)}else v=f.uniforms;return v},acquireProgram:function(f,m){let v;for(let y=0,x=h.length;y<x;y++){let E=h[y];if(E.cacheKey===m){v=E,++v.usedTimes;break}}return v===void 0&&(v=new L0(i,m,f,r),h.push(v)),v},releaseProgram:function(f){if(--f.usedTimes===0){let m=h.indexOf(f);h[m]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){c.remove(f)},programs:h,dispose:function(){c.dispose()}}}function N0(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function U0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Cf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function If(){let i=[],e=0,t=[],n=[],s=[];function r(a,o,c,l,h,u){let d=i[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},i[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:s,init:function(){e=0,t.length=0,n.length=0,s.length=0},push:function(a,o,c,l,h,u){let d=r(a,o,c,l,h,u);c.transmission>0?n.push(d):c.transparent===!0?s.push(d):t.push(d)},unshift:function(a,o,c,l,h,u){let d=r(a,o,c,l,h,u);c.transmission>0?n.unshift(d):c.transparent===!0?s.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=i.length;a<o;a++){let c=i[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||U0),n.length>1&&n.sort(o||Cf),s.length>1&&s.sort(o||Cf)}}}function k0(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),s;return n===void 0?(s=new If,i.set(e,[s])):t>=n.length?(s=new If,n.push(s)):s=n[t],s},dispose:function(){i=new WeakMap}}}function B0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new de};break;case"SpotLight":t={position:new M,direction:new M,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new M,halfWidth:new M,halfHeight:new M}}return i[e.id]=t,t}}}var O0=0;function z0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function H0(i){let e=new B0,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new M);let s=new M,r=new Pe,a=new Pe;return{setup:function(o){let c=0,l=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let u=0,d=0,p=0,g=0,_=0,f=0,m=0,v=0,y=0,x=0,E=0;o.sort(z0);for(let A=0,D=o.length;A<D;A++){let C=o[A],U=C.color,H=C.intensity,O=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=U.r*H,l+=U.g*H,h+=U.b*H;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],H);E++}else if(C.isDirectionalLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,ee=t.get(C);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.directionalShadow[u]=ee,n.directionalShadowMap[u]=J,n.directionalShadowMatrix[u]=C.shadow.matrix,f++}n.directional[u]=V,u++}else if(C.isSpotLight){let V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(U).multiplyScalar(H),V.distance=O,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[p]=V;let Q=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,Q.updateMatrices(C),C.castShadow&&x++),n.spotLightMatrix[p]=Q.matrix,C.castShadow){let ee=t.get(C);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.spotShadow[p]=ee,n.spotShadowMap[p]=J,v++}p++}else if(C.isRectAreaLight){let V=e.get(C);V.color.copy(U).multiplyScalar(H),V.halfWidth.set(.5*C.width,0,0),V.halfHeight.set(0,.5*C.height,0),n.rectArea[g]=V,g++}else if(C.isPointLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let Q=C.shadow,ee=t.get(C);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,n.pointShadow[d]=ee,n.pointShadowMap[d]=J,n.pointShadowMatrix[d]=C.shadow.matrix,m++}n.point[d]=V,d++}else if(C.isHemisphereLight){let V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(H),V.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[_]=V,_++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=h;let T=n.hash;T.directionalLength===u&&T.pointLength===d&&T.spotLength===p&&T.rectAreaLength===g&&T.hemiLength===_&&T.numDirectionalShadows===f&&T.numPointShadows===m&&T.numSpotShadows===v&&T.numSpotMaps===y&&T.numLightProbes===E||(n.directional.length=u,n.spot.length=p,n.rectArea.length=g,n.point.length=d,n.hemi.length=_,n.directionalShadow.length=f,n.directionalShadowMap.length=f,n.pointShadow.length=m,n.pointShadowMap.length=m,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=f,n.pointShadowMatrix.length=m,n.spotLightMatrix.length=v+y-x,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=E,T.directionalLength=u,T.pointLength=d,T.spotLength=p,T.rectAreaLength=g,T.hemiLength=_,T.numDirectionalShadows=f,T.numPointShadows=m,T.numSpotShadows=v,T.numSpotMaps=y,T.numLightProbes=E,n.version=O0++)},setupView:function(o,c){let l=0,h=0,u=0,d=0,p=0,g=c.matrixWorldInverse;for(let _=0,f=o.length;_<f;_++){let m=o[_];if(m.isDirectionalLight){let v=n.directional[l];v.direction.setFromMatrixPosition(m.matrixWorld),s.setFromMatrixPosition(m.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),l++}else if(m.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(m.matrixWorld),s.setFromMatrixPosition(m.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(m.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(m.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(.5*m.width,0,0),v.halfHeight.set(0,.5*m.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(m.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(g),h++}else if(m.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(m.matrixWorld),v.direction.transformDirection(g),p++}}},state:n}}function Pf(i){let e=new H0(i),t=[],n=[],s={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(r){s.camera=r,t.length=0,n.length=0},state:s,setupLights:function(){e.setup(t)},setupLightsView:function(r){e.setupView(t,r)},pushLight:function(r){t.push(r)},pushShadow:function(r){n.push(r)}}}function G0(i){let e=new WeakMap;return{get:function(t,n=0){let s=e.get(t),r;return s===void 0?(r=new Pf(i),e.set(t,[r])):n>=s.length?(r=new Pf(i),s.push(r)):r=s[n],r},dispose:function(){e=new WeakMap}}}function V0(i,e,t){let n=new Oi,s=new te,r=new te,a=new rt,o=new xl({depthPacking:Vp}),c=new bl,l={},h=t.maxTextureSize,u={[ur]:gn,[gn]:ur,[mt]:mt},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new lt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new W(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mh;let m=this.type;function v(T,A){let D=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ti(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,D,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,D,p,_,null)}function y(T,A,D,C){let U=null,H=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(H!==void 0)U=H;else if(U=D.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let O=U.uuid,J=A.uuid,V=l[O];V===void 0&&(V={},l[O]=V);let Q=V[J];Q===void 0&&(Q=U.clone(),V[J]=Q,A.addEventListener("dispose",E)),U=Q}return U.visible=A.visible,U.wireframe=A.wireframe,U.side=C===ri?A.shadowSide!==null?A.shadowSide:A.side:A.shadowSide!==null?A.shadowSide:u[A.side],U.alphaMap=A.alphaMap,U.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,U.map=A.map,U.clipShadows=A.clipShadows,U.clippingPlanes=A.clippingPlanes,U.clipIntersection=A.clipIntersection,U.displacementMap=A.displacementMap,U.displacementScale=A.displacementScale,U.displacementBias=A.displacementBias,U.wireframeLinewidth=A.wireframeLinewidth,U.linewidth=A.linewidth,D.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(i.properties.get(U).light=D),U}function x(T,A,D,C,U){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===ri)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let O=e.update(T),J=T.material;if(Array.isArray(J)){let V=O.groups;for(let Q=0,ee=V.length;Q<ee;Q++){let le=V[Q],se=J[le.materialIndex];if(se&&se.visible){let ye=y(T,se,C,U);T.onBeforeShadow(i,T,A,D,O,ye,le),i.renderBufferDirect(D,null,O,ye,T,le),T.onAfterShadow(i,T,A,D,O,ye,le)}}}else if(J.visible){let V=y(T,J,C,U);T.onBeforeShadow(i,T,A,D,O,V,null),i.renderBufferDirect(D,null,O,V,T,null),T.onAfterShadow(i,T,A,D,O,V,null)}}let H=T.children;for(let O=0,J=H.length;O<J;O++)x(H[O],A,D,C,U)}function E(T){T.target.removeEventListener("dispose",E);for(let A in l){let D=l[A],C=T.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}this.render=function(T,A,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;let C=i.getRenderTarget(),U=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Wi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let J=m!==ri&&this.type===ri,V=m===ri&&this.type!==ri;for(let Q=0,ee=T.length;Q<ee;Q++){let le=T[Q],se=le.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;s.copy(se.mapSize);let ye=se.getFrameExtents();if(s.multiply(ye),r.copy(se.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ye.x),s.x=r.x*ye.x,se.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ye.y),s.y=r.y*ye.y,se.mapSize.y=r.y)),se.map===null||J===!0||V===!0){let be=this.type!==ri?{minFilter:Jn,magFilter:Jn}:{};se.map!==null&&se.map.dispose(),se.map=new ti(s.x,s.y,be),se.map.texture.name=le.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();let we=se.getViewportCount();for(let be=0;be<we;be++){let Ie=se.getViewport(be);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),O.viewport(a),se.updateMatrices(le,be),n=se.getFrustum(),x(A,D,se.camera,le,this.type)}se.isPointLightShadow!==!0&&this.type===ri&&v(se,D),se.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(C,U,H)}}var W0={[Fl]:Nl,[Ul]:Ol,[kl]:zl,[Ca]:Bl,[Nl]:Fl,[Ol]:Ul,[zl]:kl,[Bl]:Ca};function $0(i,e){let t=new function(){let b=!1,P=new rt,B=null,F=new rt(0,0,0,0);return{setMask:function(Y){B===Y||b||(i.colorMask(Y,Y,Y,Y),B=Y)},setLocked:function(Y){b=Y},setClear:function(Y,G,$,ae,fe){fe===!0&&(Y*=ae,G*=ae,$*=ae),P.set(Y,G,$,ae),F.equals(P)===!1&&(i.clearColor(Y,G,$,ae),F.copy(P))},reset:function(){b=!1,B=null,F.set(-1,0,0,0)}}},n=new function(){let b=!1,P=!1,B=null,F=null,Y=null;return{setReversed:function(G){if(P!==G){let $=e.get("EXT_clip_control");G?$.clipControlEXT($.LOWER_LEFT_EXT,$.ZERO_TO_ONE_EXT):$.clipControlEXT($.LOWER_LEFT_EXT,$.NEGATIVE_ONE_TO_ONE_EXT),P=G;let ae=Y;Y=null,this.setClear(ae)}},getReversed:function(){return P},setTest:function(G){G?ue(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(G){B===G||b||(i.depthMask(G),B=G)},setFunc:function(G){if(P&&(G=W0[G]),F!==G){switch(G){case Fl:i.depthFunc(i.NEVER);break;case Nl:i.depthFunc(i.ALWAYS);break;case Ul:i.depthFunc(i.LESS);break;case Ca:i.depthFunc(i.LEQUAL);break;case kl:i.depthFunc(i.EQUAL);break;case Bl:i.depthFunc(i.GEQUAL);break;case Ol:i.depthFunc(i.GREATER);break;case zl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}F=G}},setLocked:function(G){b=G},setClear:function(G){Y!==G&&(P&&(G=1-G),i.clearDepth(G),Y=G)},reset:function(){b=!1,B=null,F=null,Y=null,P=!1}}},s=new function(){let b=!1,P=null,B=null,F=null,Y=null,G=null,$=null,ae=null,fe=null;return{setTest:function(oe){b||(oe?ue(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(oe){P===oe||b||(i.stencilMask(oe),P=oe)},setFunc:function(oe,_e,Me){B===oe&&F===_e&&Y===Me||(i.stencilFunc(oe,_e,Me),B=oe,F=_e,Y=Me)},setOp:function(oe,_e,Me){G===oe&&$===_e&&ae===Me||(i.stencilOp(oe,_e,Me),G=oe,$=_e,ae=Me)},setLocked:function(oe){b=oe},setClear:function(oe){fe!==oe&&(i.clearStencil(oe),fe=oe)},reset:function(){b=!1,P=null,B=null,F=null,Y=null,G=null,$=null,ae=null,fe=null}}},r=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,g=null,_=null,f=null,m=null,v=null,y=null,x=new de(0,0,0),E=0,T=!1,A=null,D=null,C=null,U=null,H=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,V=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=V>=2);let ee=null,le={},se=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),we=new rt().fromArray(se),be=new rt().fromArray(ye);function Ie(b,P,B,F){let Y=new Uint8Array(4),G=i.createTexture();i.bindTexture(b,G),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $=0;$<B;$++)b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?i.texImage3D(P,0,i.RGBA,1,1,F,0,i.RGBA,i.UNSIGNED_BYTE,Y):i.texImage2D(P+$,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Y);return G}let ce={};function ue(b){o[b]!==!0&&(i.enable(b),o[b]=!0)}function he(b){o[b]!==!1&&(i.disable(b),o[b]=!1)}ce[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),s.setClear(0),ue(i.DEPTH_TEST),n.setFunc(Ca),S(!1),z(bh),ue(i.CULL_FACE),w(Wi);let Re={[dr]:i.FUNC_ADD,[up]:i.FUNC_SUBTRACT,[dp]:i.FUNC_REVERSE_SUBTRACT};Re[pp]=i.MIN,Re[fp]=i.MAX;let ke={[mp]:i.ZERO,[gp]:i.ONE,[_p]:i.SRC_COLOR,[yp]:i.SRC_ALPHA,[wp]:i.SRC_ALPHA_SATURATE,[Ep]:i.DST_COLOR,[bp]:i.DST_ALPHA,[vp]:i.ONE_MINUS_SRC_COLOR,[xp]:i.ONE_MINUS_SRC_ALPHA,[Sp]:i.ONE_MINUS_DST_COLOR,[Mp]:i.ONE_MINUS_DST_ALPHA,[Tp]:i.CONSTANT_COLOR,[Ap]:i.ONE_MINUS_CONSTANT_COLOR,[Rp]:i.CONSTANT_ALPHA,[Cp]:i.ONE_MINUS_CONSTANT_ALPHA};function w(b,P,B,F,Y,G,$,ae,fe,oe){if(b!==Wi){if(d===!1&&(ue(i.BLEND),d=!0),b===hp)Y=Y||P,G=G||B,$=$||F,P===g&&Y===m||(i.blendEquationSeparate(Re[P],Re[Y]),g=P,m=Y),B===_&&F===f&&G===v&&$===y||(i.blendFuncSeparate(ke[B],ke[F],ke[G],ke[$]),_=B,f=F,v=G,y=$),ae.equals(x)!==!1&&fe===E||(i.blendColor(ae.r,ae.g,ae.b,fe),x.copy(ae),E=fe),p=b,T=!1;else if(b!==p||oe!==T){if(g===dr&&m===dr||(i.blendEquation(i.FUNC_ADD),g=dr,m=dr),oe)switch(b){case Ra:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eh:i.blendFunc(i.ONE,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case Ra:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}_=null,f=null,v=null,y=null,x.set(0,0,0),E=0,p=b,T=oe}}else d===!0&&(he(i.BLEND),d=!1)}function S(b){A!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),A=b)}function z(b){b!==lp?(ue(i.CULL_FACE),b!==D&&(b===bh?i.cullFace(i.BACK):b===cp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),D=b}function N(b,P,B){b?(ue(i.POLYGON_OFFSET_FILL),U===P&&H===B||(i.polygonOffset(P,B),U=P,H=B)):he(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:s},enable:ue,disable:he,bindFramebuffer:function(b,P){return c[b]!==P&&(i.bindFramebuffer(b,P),c[b]=P,b===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=P),b===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=P),!0)},drawBuffers:function(b,P){let B=h,F=!1;if(b){B=l.get(P),B===void 0&&(B=[],l.set(P,B));let Y=b.textures;if(B.length!==Y.length||B[0]!==i.COLOR_ATTACHMENT0){for(let G=0,$=Y.length;G<$;G++)B[G]=i.COLOR_ATTACHMENT0+G;B.length=Y.length,F=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,F=!0);F&&i.drawBuffers(B)},useProgram:function(b){return u!==b&&(i.useProgram(b),u=b,!0)},setBlending:w,setMaterial:function(b,P){b.side===mt?he(i.CULL_FACE):ue(i.CULL_FACE);let B=b.side===gn;P&&(B=!B),S(B),b.blending===Ra&&b.transparent===!1?w(Wi):w(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),n.setFunc(b.depthFunc),n.setTest(b.depthTest),n.setMask(b.depthWrite),t.setMask(b.colorWrite);let F=b.stencilWrite;s.setTest(F),F&&(s.setMask(b.stencilWriteMask),s.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),s.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),N(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:z,setLineWidth:function(b){b!==C&&(J&&i.lineWidth(b),C=b)},setPolygonOffset:N,setScissorTest:function(b){b?ue(i.SCISSOR_TEST):he(i.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=i.TEXTURE0+O-1),ee!==b&&(i.activeTexture(b),ee=b)},bindTexture:function(b,P,B){B===void 0&&(B=ee===null?i.TEXTURE0+O-1:ee);let F=le[B];F===void 0&&(F={type:void 0,texture:void 0},le[B]=F),F.type===b&&F.texture===P||(ee!==B&&(i.activeTexture(B),ee=B),i.bindTexture(b,P||ce[b]),F.type=b,F.texture=P)},unbindTexture:function(){let b=le[ee];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexImage3D:function(){try{i.compressedTexImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage2D:function(){try{i.texImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage3D:function(){try{i.texImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},updateUBOMapping:function(b,P){let B=a.get(P);B===void 0&&(B=new WeakMap,a.set(P,B));let F=B.get(b);F===void 0&&(F=i.getUniformBlockIndex(P,b.name),B.set(b,F))},uniformBlockBinding:function(b,P){let B=a.get(P).get(b);r.get(P)!==B&&(i.uniformBlockBinding(P,B,b.__bindingPointIndex),r.set(P,B))},texStorage2D:function(){try{i.texStorage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texStorage3D:function(){try{i.texStorage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage2D:function(){try{i.texSubImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage3D:function(){try{i.texSubImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},scissor:function(b){we.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),we.copy(b))},viewport:function(b){be.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),be.copy(b))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},ee=null,le={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,g=null,_=null,f=null,m=null,v=null,y=null,x=new de(0,0,0),E=0,T=!1,A=null,D=null,C=null,U=null,H=null,we.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),s.reset()}}}function j0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new te,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return p?new OffscreenCanvas(w,S):Jr("canvas")}function _(w,S,z){let N=1,b=ke(w);if((b.width>z||b.height>z)&&(N=z/Math.max(b.width,b.height)),N<1){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let P=Math.floor(N*b.width),B=Math.floor(N*b.height);u===void 0&&(u=g(P,B));let F=S?g(P,B):u;return F.width=P,F.height=B,F.getContext("2d").drawImage(w,0,0,P,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+P+"x"+B+")."),F}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),w}return w}function f(w){return w.generateMipmaps}function m(w){i.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,S,z,N,b=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let P=S;if(S===i.RED&&(z===i.FLOAT&&(P=i.R32F),z===i.HALF_FLOAT&&(P=i.R16F),z===i.UNSIGNED_BYTE&&(P=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(P=i.R8UI),z===i.UNSIGNED_SHORT&&(P=i.R16UI),z===i.UNSIGNED_INT&&(P=i.R32UI),z===i.BYTE&&(P=i.R8I),z===i.SHORT&&(P=i.R16I),z===i.INT&&(P=i.R32I)),S===i.RG&&(z===i.FLOAT&&(P=i.RG32F),z===i.HALF_FLOAT&&(P=i.RG16F),z===i.UNSIGNED_BYTE&&(P=i.RG8)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(P=i.RG8UI),z===i.UNSIGNED_SHORT&&(P=i.RG16UI),z===i.UNSIGNED_INT&&(P=i.RG32UI),z===i.BYTE&&(P=i.RG8I),z===i.SHORT&&(P=i.RG16I),z===i.INT&&(P=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(P=i.RGB8UI),z===i.UNSIGNED_SHORT&&(P=i.RGB16UI),z===i.UNSIGNED_INT&&(P=i.RGB32UI),z===i.BYTE&&(P=i.RGB8I),z===i.SHORT&&(P=i.RGB16I),z===i.INT&&(P=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(P=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(P=i.RGBA16UI),z===i.UNSIGNED_INT&&(P=i.RGBA32UI),z===i.BYTE&&(P=i.RGBA8I),z===i.SHORT&&(P=i.RGBA16I),z===i.INT&&(P=i.RGBA32I)),S===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(P=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(P=i.R11F_G11F_B10F)),S===i.RGBA){let B=b?Yr:et.getTransfer(N);z===i.FLOAT&&(P=i.RGBA32F),z===i.HALF_FLOAT&&(P=i.RGBA16F),z===i.UNSIGNED_BYTE&&(P=B===ot?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(P=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(P=i.RGB5_A1)}return P!==i.R16F&&P!==i.R32F&&P!==i.RG16F&&P!==i.RG32F&&P!==i.RGBA16F&&P!==i.RGBA32F||e.get("EXT_color_buffer_float"),P}function x(w,S){let z;return w?S===null||S===bs||S===gr?z=i.DEPTH24_STENCIL8:S===Bn?z=i.DEPTH32F_STENCIL8:S===fr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===bs||S===gr?z=i.DEPTH_COMPONENT24:S===Bn?z=i.DEPTH_COMPONENT32F:S===fr&&(z=i.DEPTH_COMPONENT16),z}function E(w,S){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Jn&&w.minFilter!==Qn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function T(w){let S=w.target;S.removeEventListener("dispose",T),(function(z){let N=n.get(z);if(N.__webglInit===void 0)return;let b=z.source,P=d.get(b);if(P){let B=P[N.__cacheKey];B.usedTimes--,B.usedTimes===0&&D(z),Object.keys(P).length===0&&d.delete(b)}n.remove(z)})(S),S.isVideoTexture&&h.delete(S)}function A(w){let S=w.target;S.removeEventListener("dispose",A),(function(z){let N=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(N.__webglFramebuffer[P]))for(let B=0;B<N.__webglFramebuffer[P].length;B++)i.deleteFramebuffer(N.__webglFramebuffer[P][B]);else i.deleteFramebuffer(N.__webglFramebuffer[P]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[P])}else{if(Array.isArray(N.__webglFramebuffer))for(let P=0;P<N.__webglFramebuffer.length;P++)i.deleteFramebuffer(N.__webglFramebuffer[P]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let P=0;P<N.__webglColorRenderbuffer.length;P++)N.__webglColorRenderbuffer[P]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[P]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}let b=z.textures;for(let P=0,B=b.length;P<B;P++){let F=n.get(b[P]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),a.memory.textures--),n.remove(b[P])}n.remove(z)})(S)}function D(w){let S=n.get(w);i.deleteTexture(S.__webglTexture);let z=w.source;delete d.get(z)[S.__cacheKey],a.memory.textures--}let C=0;function U(w,S){let z=n.get(w);if(w.isVideoTexture&&(function(N){let b=a.render.frame;h.get(N)!==b&&(h.set(N,b),N.update())})(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){let N=w.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(N.complete!==!1)return void le(z,w,S);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}let H={[$o]:i.REPEAT,[Zs]:i.CLAMP_TO_EDGE,[jo]:i.MIRRORED_REPEAT},O={[Jn]:i.NEAREST,[Op]:i.NEAREST_MIPMAP_NEAREST,[Pa]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[Wl]:i.LINEAR_MIPMAP_NEAREST,[xs]:i.LINEAR_MIPMAP_LINEAR},J={[jp]:i.NEVER,[Jp]:i.ALWAYS,[qp]:i.LESS,[ou]:i.LEQUAL,[Xp]:i.EQUAL,[Zp]:i.GEQUAL,[Kp]:i.GREATER,[Yp]:i.NOTEQUAL};function V(w,S){if(S.type!==Bn||e.has("OES_texture_float_linear")!==!1||S.magFilter!==Qn&&S.magFilter!==Wl&&S.magFilter!==Pa&&S.magFilter!==xs&&S.minFilter!==Qn&&S.minFilter!==Wl&&S.minFilter!==Pa&&S.minFilter!==xs||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,H[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,H[S.wrapT]),w!==i.TEXTURE_3D&&w!==i.TEXTURE_2D_ARRAY||i.texParameteri(w,i.TEXTURE_WRAP_R,H[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,O[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,O[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Jn||S.minFilter!==Pa&&S.minFilter!==xs||S.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Q(w,S){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",T));let N=S.source,b=d.get(N);b===void 0&&(b={},d.set(N,b));let P=(function(B){let F=[];return F.push(B.wrapS),F.push(B.wrapT),F.push(B.wrapR||0),F.push(B.magFilter),F.push(B.minFilter),F.push(B.anisotropy),F.push(B.internalFormat),F.push(B.format),F.push(B.type),F.push(B.generateMipmaps),F.push(B.premultiplyAlpha),F.push(B.flipY),F.push(B.unpackAlignment),F.push(B.colorSpace),F.join()})(S);if(P!==w.__cacheKey){b[P]===void 0&&(b[P]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),b[P].usedTimes++;let B=b[w.__cacheKey];B!==void 0&&(b[w.__cacheKey].usedTimes--,B.usedTimes===0&&D(S)),w.__cacheKey=P,w.__webglTexture=b[P].texture}return z}function ee(w,S,z){return Math.floor(Math.floor(w/z)/S)}function le(w,S,z){let N=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(N=i.TEXTURE_3D);let b=Q(w,S),P=S.source;t.bindTexture(N,w.__webglTexture,i.TEXTURE0+z);let B=n.get(P);if(P.version!==B.__version||b===!0){t.activeTexture(i.TEXTURE0+z);let F=et.getPrimaries(et.workingColorSpace),Y=S.colorSpace===Ms?null:et.getPrimaries(S.colorSpace),G=S.colorSpace===Ms||F===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);let $=_(S.image,!1,s.maxTextureSize);$=Re(S,$);let ae=r.convert(S.format,S.colorSpace),fe=r.convert(S.type),oe,_e=y(S.internalFormat,ae,fe,S.colorSpace,S.isVideoTexture);V(N,S);let Me=S.mipmaps,Te=S.isVideoTexture!==!0,qe=B.__version===void 0||b===!0,tt=P.dataReady,nt=E(S,$);if(S.isDepthTexture)_e=x(S.format===Da,S.type),qe&&(Te?t.texStorage2D(i.TEXTURE_2D,1,_e,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,_e,$.width,$.height,0,ae,fe,null));else if(S.isDataTexture)if(Me.length>0){Te&&qe&&t.texStorage2D(i.TEXTURE_2D,nt,_e,Me[0].width,Me[0].height);for(let me=0,Ce=Me.length;me<Ce;me++)oe=Me[me],Te?tt&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,oe.width,oe.height,ae,fe,oe.data):t.texImage2D(i.TEXTURE_2D,me,_e,oe.width,oe.height,0,ae,fe,oe.data);S.generateMipmaps=!1}else Te?(qe&&t.texStorage2D(i.TEXTURE_2D,nt,_e,$.width,$.height),tt&&(function(me,Ce,We,$t){let xe=me.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce.width,Ce.height,We,$t,Ce.data);else{xe.sort((k,Ut)=>k.start-Ut.start);let st=0;for(let k=1;k<xe.length;k++){let Ut=xe[st],jt=xe[k],vt=Ut.start+Ut.count,rs=ee(jt.start,Ce.width,4),as=ee(Ut.start,Ce.width,4);jt.start<=vt+1&&rs===as&&ee(jt.start+jt.count-1,Ce.width,4)===rs?Ut.count=Math.max(Ut.count,jt.start+jt.count-Ut.start):(++st,xe[st]=jt)}xe.length=st+1;let Xe=i.getParameter(i.UNPACK_ROW_LENGTH),Rn=i.getParameter(i.UNPACK_SKIP_PIXELS),ui=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,Ce.width);for(let k=0,Ut=xe.length;k<Ut;k++){let jt=xe[k],vt=Math.floor(jt.start/4),rs=Math.ceil(jt.count/4),as=vt%Ce.width,Dr=Math.floor(vt/Ce.width),co=rs;i.pixelStorei(i.UNPACK_SKIP_PIXELS,as),i.pixelStorei(i.UNPACK_SKIP_ROWS,Dr),t.texSubImage2D(i.TEXTURE_2D,0,as,Dr,co,1,We,$t,Ce.data)}me.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Xe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rn),i.pixelStorei(i.UNPACK_SKIP_ROWS,ui)}})(S,$,ae,fe)):t.texImage2D(i.TEXTURE_2D,0,_e,$.width,$.height,0,ae,fe,$.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Te&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,_e,Me[0].width,Me[0].height,$.depth);for(let me=0,Ce=Me.length;me<Ce;me++)if(oe=Me[me],S.format!==On)if(ae!==null)if(Te){if(tt)if(S.layerUpdates.size>0){let We=fu(oe.width,oe.height,S.format,S.type);for(let $t of S.layerUpdates){let xe=oe.data.subarray($t*We/oe.data.BYTES_PER_ELEMENT,($t+1)*We/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,$t,oe.width,oe.height,1,ae,xe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,oe.width,oe.height,$.depth,ae,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,_e,oe.width,oe.height,$.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?tt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,oe.width,oe.height,$.depth,ae,fe,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,_e,oe.width,oe.height,$.depth,0,ae,fe,oe.data)}else{Te&&qe&&t.texStorage2D(i.TEXTURE_2D,nt,_e,Me[0].width,Me[0].height);for(let me=0,Ce=Me.length;me<Ce;me++)oe=Me[me],S.format!==On?ae!==null?Te?tt&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,me,_e,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?tt&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,oe.width,oe.height,ae,fe,oe.data):t.texImage2D(i.TEXTURE_2D,me,_e,oe.width,oe.height,0,ae,fe,oe.data)}else if(S.isDataArrayTexture)if(Te){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,_e,$.width,$.height,$.depth),tt)if(S.layerUpdates.size>0){let me=fu($.width,$.height,S.format,S.type);for(let Ce of S.layerUpdates){let We=$.data.subarray(Ce*me/$.data.BYTES_PER_ELEMENT,(Ce+1)*me/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,$.width,$.height,1,ae,fe,We)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ae,fe,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,$.width,$.height,$.depth,0,ae,fe,$.data);else if(S.isData3DTexture)Te?(qe&&t.texStorage3D(i.TEXTURE_3D,nt,_e,$.width,$.height,$.depth),tt&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ae,fe,$.data)):t.texImage3D(i.TEXTURE_3D,0,_e,$.width,$.height,$.depth,0,ae,fe,$.data);else if(S.isFramebufferTexture){if(qe)if(Te)t.texStorage2D(i.TEXTURE_2D,nt,_e,$.width,$.height);else{let me=$.width,Ce=$.height;for(let We=0;We<nt;We++)t.texImage2D(i.TEXTURE_2D,We,_e,me,Ce,0,ae,fe,null),me>>=1,Ce>>=1}}else if(Me.length>0){if(Te&&qe){let me=ke(Me[0]);t.texStorage2D(i.TEXTURE_2D,nt,_e,me.width,me.height)}for(let me=0,Ce=Me.length;me<Ce;me++)oe=Me[me],Te?tt&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,ae,fe,oe):t.texImage2D(i.TEXTURE_2D,me,_e,ae,fe,oe);S.generateMipmaps=!1}else if(Te){if(qe){let me=ke($);t.texStorage2D(i.TEXTURE_2D,nt,_e,me.width,me.height)}tt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,fe,$)}else t.texImage2D(i.TEXTURE_2D,0,_e,ae,fe,$);f(S)&&m(N),B.__version=P.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function se(w,S,z,N,b,P){let B=r.convert(z.format,z.colorSpace),F=r.convert(z.type),Y=y(z.internalFormat,B,F,z.colorSpace),G=n.get(S),$=n.get(z);if($.__renderTarget=S,!G.__hasExternalTextures){let ae=Math.max(1,S.width>>P),fe=Math.max(1,S.height>>P);b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?t.texImage3D(b,P,Y,ae,fe,S.depth,0,B,F,null):t.texImage2D(b,P,Y,ae,fe,0,B,F,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),he(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,b,$.__webglTexture,0,ue(S)):(b===i.TEXTURE_2D||b>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&b<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,b,$.__webglTexture,P),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(w,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){let N=S.depthTexture,b=N&&N.isDepthTexture?N.type:null,P=x(S.stencilBuffer,b),B=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=ue(S);he(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F,P,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,F,P,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,P,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,w)}else{let N=S.textures;for(let b=0;b<N.length;b++){let P=N[b],B=r.convert(P.format,P.colorSpace),F=r.convert(P.type),Y=y(P.internalFormat,B,F,P.colorSpace),G=ue(S);z&&he(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,G,Y,S.width,S.height):he(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!S.depthTexture||!S.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=n.get(S.depthTexture);z.__renderTarget=S,z.__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);let N=z.__webglTexture,b=ue(S);if(S.depthTexture.format===La)he(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,N,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,N,0);else{if(S.depthTexture.format!==Da)throw new Error("Unknown depthTexture format");he(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,N,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,N,0)}}function be(w){let S=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){let N=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),N){let b=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,N.removeEventListener("dispose",b)};N.addEventListener("dispose",b),S.__depthDisposeCallback=b}S.__boundDepthTexture=N}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let N=w.texture.mipmaps;N&&N.length>0?we(S.__webglFramebuffer[0],w):we(S.__webglFramebuffer,w)}else if(z){S.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[N]),S.__webglDepthbuffer[N]===void 0)S.__webglDepthbuffer[N]=i.createRenderbuffer(),ye(S.__webglDepthbuffer[N],w,!1);else{let b=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=S.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,b,i.RENDERBUFFER,P)}}else{let N=w.texture.mipmaps;if(N&&N.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ye(S.__webglDepthbuffer,w,!1);else{let b=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,b,i.RENDERBUFFER,P)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}let Ie=[],ce=[];function ue(w){return Math.min(s.maxSamples,w.samples)}function he(w){let S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Re(w,S){let z=w.colorSpace,N=w.format,b=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==fs&&z!==Ms&&(et.getTransfer(z)===ot?N===On&&b===ai||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function ke(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=function(){let w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w},this.resetTextureUnits=function(){C=0},this.setTexture2D=U,this.setTexture2DArray=function(w,S){let z=n.get(w);w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version?le(z,w,S):t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)},this.setTexture3D=function(w,S){let z=n.get(w);w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version?le(z,w,S):t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)},this.setTextureCube=function(w,S){let z=n.get(w);w.version>0&&z.__version!==w.version?(function(N,b,P){if(b.image.length!==6)return;let B=Q(N,b),F=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+P);let Y=n.get(F);if(F.version!==Y.__version||B===!0){t.activeTexture(i.TEXTURE0+P);let G=et.getPrimaries(et.workingColorSpace),$=b.colorSpace===Ms?null:et.getPrimaries(b.colorSpace),ae=b.colorSpace===Ms||G===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let fe=b.isCompressedTexture||b.image[0].isCompressedTexture,oe=b.image[0]&&b.image[0].isDataTexture,_e=[];for(let xe=0;xe<6;xe++)_e[xe]=fe||oe?oe?b.image[xe].image:b.image[xe]:_(b.image[xe],!0,s.maxCubemapSize),_e[xe]=Re(b,_e[xe]);let Me=_e[0],Te=r.convert(b.format,b.colorSpace),qe=r.convert(b.type),tt=y(b.internalFormat,Te,qe,b.colorSpace),nt=b.isVideoTexture!==!0,me=Y.__version===void 0||B===!0,Ce=F.dataReady,We,$t=E(b,Me);if(V(i.TEXTURE_CUBE_MAP,b),fe){nt&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,$t,tt,Me.width,Me.height);for(let xe=0;xe<6;xe++){We=_e[xe].mipmaps;for(let st=0;st<We.length;st++){let Xe=We[st];b.format!==On?Te!==null?nt?Ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,0,0,Xe.width,Xe.height,Te,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,tt,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,0,0,Xe.width,Xe.height,Te,qe,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,tt,Xe.width,Xe.height,0,Te,qe,Xe.data)}}}else{if(We=b.mipmaps,nt&&me){We.length>0&&$t++;let xe=ke(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,$t,tt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(oe){nt?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,_e[xe].width,_e[xe].height,Te,qe,_e[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,tt,_e[xe].width,_e[xe].height,0,Te,qe,_e[xe].data);for(let st=0;st<We.length;st++){let Xe=We[st].image[xe].image;nt?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,0,0,Xe.width,Xe.height,Te,qe,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,tt,Xe.width,Xe.height,0,Te,qe,Xe.data)}}else{nt?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Te,qe,_e[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,tt,Te,qe,_e[xe]);for(let st=0;st<We.length;st++){let Xe=We[st];nt?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,0,0,Te,qe,Xe.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,tt,Te,qe,Xe.image[xe])}}}f(b)&&m(i.TEXTURE_CUBE_MAP),Y.__version=F.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version})(z,w,S):t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)},this.rebindTextures=function(w,S,z){let N=n.get(w);S!==void 0&&se(N.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&be(w)},this.setupRenderTarget=function(w){let S=w.texture,z=n.get(w),N=n.get(S);w.addEventListener("dispose",A);let b=w.textures,P=w.isWebGLCubeRenderTarget===!0,B=b.length>1;if(B||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=S.version,a.memory.textures++),P){z.__webglFramebuffer=[];for(let F=0;F<6;F++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[F]=[];for(let Y=0;Y<S.mipmaps.length;Y++)z.__webglFramebuffer[F][Y]=i.createFramebuffer()}else z.__webglFramebuffer[F]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let F=0;F<S.mipmaps.length;F++)z.__webglFramebuffer[F]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(B)for(let F=0,Y=b.length;F<Y;F++){let G=n.get(b[F]);G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&he(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let F=0;F<b.length;F++){let Y=b[F];z.__webglColorRenderbuffer[F]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[F]);let G=r.convert(Y.format,Y.colorSpace),$=r.convert(Y.type),ae=y(Y.internalFormat,G,$,Y.colorSpace,w.isXRRenderTarget===!0),fe=ue(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ae,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,z.__webglColorRenderbuffer[F])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(P){t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),V(i.TEXTURE_CUBE_MAP,S);for(let F=0;F<6;F++)if(S.mipmaps&&S.mipmaps.length>0)for(let Y=0;Y<S.mipmaps.length;Y++)se(z.__webglFramebuffer[F][Y],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y);else se(z.__webglFramebuffer[F],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);f(S)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(B){for(let F=0,Y=b.length;F<Y;F++){let G=b[F],$=n.get(G),ae=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),V(ae,G),se(z.__webglFramebuffer,w,G,i.COLOR_ATTACHMENT0+F,ae,0),f(G)&&m(ae)}t.unbindTexture()}else{let F=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(F=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(F,N.__webglTexture),V(F,S),S.mipmaps&&S.mipmaps.length>0)for(let Y=0;Y<S.mipmaps.length;Y++)se(z.__webglFramebuffer[Y],w,S,i.COLOR_ATTACHMENT0,F,Y);else se(z.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,F,0);f(S)&&m(F),t.unbindTexture()}w.depthBuffer&&be(w)},this.updateRenderTargetMipmap=function(w){let S=w.textures;for(let z=0,N=S.length;z<N;z++){let b=S[z];if(f(b)){let P=v(w),B=n.get(b).__webglTexture;t.bindTexture(P,B),m(P),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(w.samples>0){if(he(w)===!1){let S=w.textures,z=w.width,N=w.height,b=i.COLOR_BUFFER_BIT,P=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=n.get(w),F=S.length>1;if(F)for(let G=0;G<S.length;G++)t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,B.__webglMultisampledFramebuffer);let Y=w.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglFramebuffer);for(let G=0;G<S.length;G++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(b|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(b|=i.STENCIL_BUFFER_BIT)),F){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,B.__webglColorRenderbuffer[G]);let $=n.get(S[G]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,z,N,0,0,z,N,b,i.NEAREST),c===!0&&(Ie.length=0,ce.length=0,Ie.push(i.COLOR_ATTACHMENT0+G),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ie.push(P),ce.push(P),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),F)for(let G=0;G<S.length;G++){t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,B.__webglColorRenderbuffer[G]);let $=n.get(S[G]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.TEXTURE_2D,$,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=se,this.useMultisampledRTT=he}function q0(i,e){return{convert:function(t,n=Ms){let s,r=et.getTransfer(n);if(t===ai)return i.UNSIGNED_BYTE;if(t===jl)return i.UNSIGNED_SHORT_4_4_4_4;if(t===ql)return i.UNSIGNED_SHORT_5_5_5_1;if(t===Ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===Ih)return i.UNSIGNED_INT_10F_11F_11F_REV;if(t===Ah)return i.BYTE;if(t===Rh)return i.SHORT;if(t===fr)return i.UNSIGNED_SHORT;if(t===$l)return i.INT;if(t===bs)return i.UNSIGNED_INT;if(t===Bn)return i.FLOAT;if(t===mr)return i.HALF_FLOAT;if(t===zp)return i.ALPHA;if(t===Hp)return i.RGB;if(t===On)return i.RGBA;if(t===La)return i.DEPTH_COMPONENT;if(t===Da)return i.DEPTH_STENCIL;if(t===Xl)return i.RED;if(t===Kl)return i.RED_INTEGER;if(t===Gp)return i.RG;if(t===Ph)return i.RG_INTEGER;if(t===Lh)return i.RGBA_INTEGER;if(t===Yl||t===Zl||t===Jl||t===Ql)if(r===ot){if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s===null)return null;if(t===Yl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(s=e.get("WEBGL_compressed_texture_s3tc"),s===null)return null;if(t===Yl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Zl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Jl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Ql)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Dh||t===Fh||t===Nh||t===Uh){if(s=e.get("WEBGL_compressed_texture_pvrtc"),s===null)return null;if(t===Dh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Fh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Nh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Uh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===kh||t===Bh||t===Oh){if(s=e.get("WEBGL_compressed_texture_etc"),s===null)return null;if(t===kh||t===Bh)return r===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(t===Oh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}if(t===zh||t===Hh||t===Gh||t===Vh||t===Wh||t===$h||t===jh||t===qh||t===Xh||t===Kh||t===Yh||t===Zh||t===Jh||t===Qh){if(s=e.get("WEBGL_compressed_texture_astc"),s===null)return null;if(t===zh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Hh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Gh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Vh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Wh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===$h)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===jh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===qh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Xh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Kh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Yh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Zh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Jh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Qh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===eu||t===tu||t===nu){if(s=e.get("EXT_texture_compression_bptc"),s===null)return null;if(t===eu)return r===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===nu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===iu||t===su||t===ru||t===au){if(s=e.get("EXT_texture_compression_rgtc"),s===null)return null;if(t===iu)return s.COMPRESSED_RED_RGTC1_EXT;if(t===su)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===ru)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===au)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===gr?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var Au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ca(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Un({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ru=class extends ei{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,_=typeof XRWebGLBinding<"u",f=new Au,m={},v=t.getContextAttributes(),y=null,x=null,E=[],T=[],A=new te,D=null,C=new Ht;C.viewport=new rt;let U=new Ht;U.viewport=new rt;let H=[C,U],O=new Ll,J=null,V=null;function Q(ce){let ue=T.indexOf(ce.inputSource);if(ue===-1)return;let he=E[ue];he!==void 0&&(he.update(ce.inputSource,ce.frame,l||a),he.dispatchEvent({type:ce.type,data:ce.inputSource}))}function ee(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",le);for(let ce=0;ce<E.length;ce++){let ue=T[ce];ue!==null&&(T[ce]=null,E[ce].disconnect(ue))}J=null,V=null,f.reset();for(let ce in m)delete m[ce];e.setRenderTarget(y),p=null,d=null,u=null,s=null,x=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}function le(ce){for(let ue=0;ue<ce.removed.length;ue++){let he=ce.removed[ue],Re=T.indexOf(he);Re>=0&&(T[Re]=null,E[Re].disconnect(he))}for(let ue=0;ue<ce.added.length;ue++){let he=ce.added[ue],Re=T.indexOf(he);if(Re===-1){for(let w=0;w<E.length;w++){if(w>=T.length){T.push(he),Re=w;break}if(T[w]===null){T[w]=he,Re=w;break}}if(Re===-1)break}let ke=E[Re];ke&&ke.connect(he)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let ue=E[ce];return ue===void 0&&(ue=new ir,E[ce]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ce){let ue=E[ce];return ue===void 0&&(ue=new ir,E[ce]=ue),ue.getGripSpace()},this.getHand=function(ce){let ue=E[ce];return ue===void 0&&(ue=new ir,E[ce]=ue),ue.getHandSpace()},this.setFramebufferScaleFactor=function(ce){r=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){o=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ce){l=ce},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ce){if(s=ce,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",le),v.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,he=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?Da:La,he=v.stencil?gr:bs);let ke={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new ti(d.textureWidth,d.textureHeight,{format:On,type:ai,depthTexture:new la(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ti(p.framebufferWidth,p.framebufferHeight,{format:On,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};let se=new M,ye=new M;function we(ce,ue){ue===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(ue.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(s===null)return;let ue=ce.near,he=ce.far;f.texture!==null&&(f.depthNear>0&&(ue=f.depthNear),f.depthFar>0&&(he=f.depthFar)),O.near=U.near=C.near=ue,O.far=U.far=C.far=he,J===O.near&&V===O.far||(s.updateRenderState({depthNear:O.near,depthFar:O.far}),J=O.near,V=O.far),O.layers.mask=6|ce.layers.mask,C.layers.mask=3&O.layers.mask,U.layers.mask=5&O.layers.mask;let Re=ce.parent,ke=O.cameras;we(O,Re);for(let w=0;w<ke.length;w++)we(ke[w],Re);ke.length===2?(function(w,S,z){se.setFromMatrixPosition(S.matrixWorld),ye.setFromMatrixPosition(z.matrixWorld);let N=se.distanceTo(ye),b=S.projectionMatrix.elements,P=z.projectionMatrix.elements,B=b[14]/(b[10]-1),F=b[14]/(b[10]+1),Y=(b[9]+1)/b[5],G=(b[9]-1)/b[5],$=(b[8]-1)/b[0],ae=(P[8]+1)/P[0],fe=B*$,oe=B*ae,_e=N/(-$+ae),Me=_e*-$;if(S.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(Me),w.translateZ(_e),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),b[10]===-1)w.projectionMatrix.copy(S.projectionMatrix),w.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{let Te=B+_e,qe=F+_e,tt=fe-Me,nt=oe+(N-Me),me=Y*F/qe*Te,Ce=G*F/qe*Te;w.projectionMatrix.makePerspective(tt,nt,me,Ce,Te,qe),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}})(O,C,U):O.projectionMatrix.copy(C.projectionMatrix),(function(w,S,z){z===null?w.matrix.copy(S.matrixWorld):(w.matrix.copy(z.matrixWorld),w.matrix.invert(),w.matrix.multiply(S.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(S.projectionMatrix),w.projectionMatrixInverse.copy(S.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=2*Js*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)})(ce,O,Re)},this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(ce){c=ce,d!==null&&(d.fixedFoveation=ce),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ce)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(O)},this.getCameraTexture=function(ce){return m[ce]};let be=null,Ie=new Lf;Ie.setAnimationLoop(function(ce,ue){if(h=ue.getViewerPose(l||a),g=ue,h!==null){let he=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Re=!1;he.length!==O.cameras.length&&(O.cameras.length=0,Re=!0);for(let w=0;w<he.length;w++){let S=he[w],z=null;if(p!==null)z=p.getViewport(S);else{let b=u.getViewSubImage(d,S);z=b.viewport,w===0&&(e.setRenderTargetTextures(x,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(x))}let N=H[w];N===void 0&&(N=new Ht,N.layers.enable(w),N.viewport=new rt,H[w]=N),N.matrix.fromArray(S.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(S.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(z.x,z.y,z.width,z.height),w===0&&(O.matrix.copy(N.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Re===!0&&O.cameras.push(N)}let ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let w=u.getDepthInformation(he[0]);w&&w.isValid&&w.texture&&f.init(w,s.renderState)}if(ke&&ke.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let w=0;w<he.length;w++){let S=he[w].camera;if(S){let z=m[S];z||(z=new ca,m[S]=z);let N=u.getCameraImage(S);z.sourceTexture=N}}}}for(let he=0;he<E.length;he++){let Re=T[he],ke=E[he];Re!==null&&ke!==void 0&&ke.update(Re,ue,l||a)}be&&be(ce,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}),this.setAnimationLoop=function(ce){be=ce},this.dispose=function(){}}},ws=new ln,X0=new Pe;function K0(i,e){function t(s,r){s.matrixAutoUpdate===!0&&s.updateMatrix(),r.value.copy(s.matrix)}function n(s,r){s.opacity.value=r.opacity,r.color&&s.diffuse.value.copy(r.color),r.emissive&&s.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(s.map.value=r.map,t(r.map,s.mapTransform)),r.alphaMap&&(s.alphaMap.value=r.alphaMap,t(r.alphaMap,s.alphaMapTransform)),r.bumpMap&&(s.bumpMap.value=r.bumpMap,t(r.bumpMap,s.bumpMapTransform),s.bumpScale.value=r.bumpScale,r.side===gn&&(s.bumpScale.value*=-1)),r.normalMap&&(s.normalMap.value=r.normalMap,t(r.normalMap,s.normalMapTransform),s.normalScale.value.copy(r.normalScale),r.side===gn&&s.normalScale.value.negate()),r.displacementMap&&(s.displacementMap.value=r.displacementMap,t(r.displacementMap,s.displacementMapTransform),s.displacementScale.value=r.displacementScale,s.displacementBias.value=r.displacementBias),r.emissiveMap&&(s.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,s.emissiveMapTransform)),r.specularMap&&(s.specularMap.value=r.specularMap,t(r.specularMap,s.specularMapTransform)),r.alphaTest>0&&(s.alphaTest.value=r.alphaTest);let a=e.get(r),o=a.envMap,c=a.envMapRotation;o&&(s.envMap.value=o,ws.copy(c),ws.x*=-1,ws.y*=-1,ws.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),s.envMapRotation.value.setFromMatrix4(X0.makeRotationFromEuler(ws)),s.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,s.reflectivity.value=r.reflectivity,s.ior.value=r.ior,s.refractionRatio.value=r.refractionRatio),r.lightMap&&(s.lightMap.value=r.lightMap,s.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,s.lightMapTransform)),r.aoMap&&(s.aoMap.value=r.aoMap,s.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,s.aoMapTransform))}return{refreshFogUniforms:function(s,r){r.color.getRGB(s.fogColor.value,uu(i)),r.isFog?(s.fogNear.value=r.near,s.fogFar.value=r.far):r.isFogExp2&&(s.fogDensity.value=r.density)},refreshMaterialUniforms:function(s,r,a,o,c){r.isMeshBasicMaterial||r.isMeshLambertMaterial?n(s,r):r.isMeshToonMaterial?(n(s,r),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(s,r)):r.isMeshPhongMaterial?(n(s,r),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(s,r)):r.isMeshStandardMaterial?(n(s,r),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(s,r),r.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===gn&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(s,r,c)):r.isMeshMatcapMaterial?(n(s,r),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(s,r)):r.isMeshDepthMaterial?n(s,r):r.isMeshDistanceMaterial?(n(s,r),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(s,r)):r.isMeshNormalMaterial?n(s,r):r.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(s,r),r.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(s,r)):r.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(s,r,a,o):r.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(s,r):r.isShadowMaterial?(s.color.value.copy(r.color),s.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function Y0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,d,p,g){let _=u.value,f=d+"_"+p;if(g[f]===void 0)return g[f]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let m=g[f];if(typeof _=="number"||typeof _=="boolean"){if(m!==_)return g[f]=_,!0}else if(m.equals(_)===!1)return m.copy(_),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(s[d.id]),delete s[d.id],delete r[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=s[u.id];p===void 0&&((function(f){let m=f.uniforms,v=0,y=16;for(let E=0,T=m.length;E<T;E++){let A=Array.isArray(m[E])?m[E]:[m[E]];for(let D=0,C=A.length;D<C;D++){let U=A[D],H=Array.isArray(U.value)?U.value:[U.value];for(let O=0,J=H.length;O<J;O++){let V=l(H[O]),Q=v%y,ee=Q%V.boundary,le=Q+ee;v+=ee,le!==0&&y-le<V.storage&&(v+=y-le),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=V.storage}}}let x=v%y;x>0&&(v+=y-x),f.__size=v,f.__cache={}})(u),p=(function(f){let m=(function(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=m;let v=i.createBuffer(),y=f.__size,x=f.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,y,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,m,v),v})(u),s[u.id]=p,u.addEventListener("dispose",h));let g=d.program;n.updateUBOMapping(u,g);let _=e.render.frame;r[u.id]!==_&&((function(f){let m=s[f.id],v=f.uniforms,y=f.__cache;i.bindBuffer(i.UNIFORM_BUFFER,m);for(let x=0,E=v.length;x<E;x++){let T=Array.isArray(v[x])?v[x]:[v[x]];for(let A=0,D=T.length;A<D;A++){let C=T[A];if(c(C,x,A,y)===!0){let U=C.__offset,H=Array.isArray(C.value)?C.value:[C.value],O=0;for(let J=0;J<H.length;J++){let V=H[J],Q=l(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,U+O,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,O),O+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),r[u.id]=_)},dispose:function(){for(let u in s)i.deleteBuffer(s[u]);a=[],s={},r={}}}}var sc=class{constructor(e={}){let{canvas:t=Qp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),_=new Int32Array(4),f=null,m=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,E=!1;this._outputColorSpace=dn;let T=0,A=0,D=null,C=-1,U=null,H=new rt,O=new rt,J=null,V=new de(0),Q=0,ee=t.width,le=t.height,se=1,ye=null,we=null,be=new rt(0,0,ee,le),Ie=new rt(0,0,ee,le),ce=!1,ue=new Oi,he=!1,Re=!1,ke=new Pe,w=new M,S=new rt,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},N=!1;function b(){return D===null?se:1}let P,B,F,Y,G,$,ae,fe,oe,_e,Me,Te,qe,tt,nt,me,Ce,We,$t,xe,st,Xe,Rn,ui,k=n;function Ut(R,j){return t.getContext(R,j)}try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",rs,!1),t.addEventListener("webglcontextrestored",as,!1),t.addEventListener("webglcontextcreationerror",Dr,!1),k===null){let j="webgl2";if(k=Ut(j,R),k===null)throw Ut(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}function jt(){P=new Lg(k),P.init(),Xe=new q0(k,P),B=new Ag(k,P,e,Xe),F=new $0(k,P),B.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),Y=new Ng(k),G=new N0,$=new j0(k,P,F,G,B,Xe,Y),ae=new Cg(x),fe=new Pg(x),oe=new Mg(k),Rn=new wg(k,oe),_e=new Dg(k,oe,Y,Rn),Me=new kg(k,_e,oe,Y),$t=new Ug(k,B,$),me=new Rg(G),Te=new F0(x,ae,fe,P,B,Rn,me),qe=new K0(x,G),tt=new k0,nt=new G0(P),We=new Sg(x,ae,fe,F,Me,p,c),Ce=new V0(x,Me,B),ui=new Y0(k,Y,B,F),xe=new Tg(k,P,Y),st=new Fg(k,P,Y),Y.programs=Te.programs,x.capabilities=B,x.extensions=P,x.properties=G,x.renderLists=tt,x.shadowMap=Ce,x.state=F,x.info=Y}jt();let vt=new Ru(x,k);function rs(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function as(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let R=Y.autoReset,j=Ce.enabled,Z=Ce.autoUpdate,ne=Ce.needsUpdate,K=Ce.type;jt(),Y.autoReset=R,Ce.enabled=j,Ce.autoUpdate=Z,Ce.needsUpdate=ne,Ce.type=K}function Dr(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function co(R){let j=R.target;j.removeEventListener("dispose",co),(function(Z){(function(ne){let K=G.get(ne).programs;K!==void 0&&(K.forEach(function(re){Te.releaseProgram(re)}),ne.isShaderMaterial&&Te.releaseShaderCache(ne))})(Z),G.remove(Z)})(j)}function Tc(R,j,Z){R.transparent===!0&&R.side===mt&&R.forceSinglePass===!1?(R.side=gn,R.needsUpdate=!0,uo(R,j,Z),R.side=ur,R.needsUpdate=!0,uo(R,j,Z),R.side=mt):uo(R,j,Z)}this.xr=vt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let R=P.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=P.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(R){R!==void 0&&(se=R,this.setSize(ee,le,!1))},this.getSize=function(R){return R.set(ee,le)},this.setSize=function(R,j,Z=!0){vt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(ee=R,le=j,t.width=Math.floor(R*se),t.height=Math.floor(j*se),Z===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j))},this.getDrawingBufferSize=function(R){return R.set(ee*se,le*se).floor()},this.setDrawingBufferSize=function(R,j,Z){ee=R,le=j,se=Z,t.width=Math.floor(R*Z),t.height=Math.floor(j*Z),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(be)},this.setViewport=function(R,j,Z,ne){R.isVector4?be.set(R.x,R.y,R.z,R.w):be.set(R,j,Z,ne),F.viewport(H.copy(be).multiplyScalar(se).round())},this.getScissor=function(R){return R.copy(Ie)},this.setScissor=function(R,j,Z,ne){R.isVector4?Ie.set(R.x,R.y,R.z,R.w):Ie.set(R,j,Z,ne),F.scissor(O.copy(Ie).multiplyScalar(se).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(R){F.setScissorTest(ce=R)},this.setOpaqueSort=function(R){ye=R},this.setTransparentSort=function(R){we=R},this.getClearColor=function(R){return R.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,Z=!0){let ne=0;if(R){let K=!1;if(D!==null){let re=D.texture.format;K=re===Lh||re===Ph||re===Kl}if(K){let re=D.texture.type,ge=re===ai||re===bs||re===fr||re===gr||re===jl||re===ql,ve=We.getClearColor(),Ee=We.getClearAlpha(),Le=ve.r,Fe=ve.g,De=ve.b;ge?(g[0]=Le,g[1]=Fe,g[2]=De,g[3]=Ee,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=Le,_[1]=Fe,_[2]=De,_[3]=Ee,k.clearBufferiv(k.COLOR,0,_))}else ne|=k.COLOR_BUFFER_BIT}j&&(ne|=k.DEPTH_BUFFER_BIT),Z&&(ne|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",rs,!1),t.removeEventListener("webglcontextrestored",as,!1),t.removeEventListener("webglcontextcreationerror",Dr,!1),We.dispose(),tt.dispose(),nt.dispose(),G.dispose(),ae.dispose(),fe.dispose(),Me.dispose(),Rn.dispose(),ui.dispose(),Te.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",gd),vt.removeEventListener("sessionend",_d),os.stop()},this.renderBufferDirect=function(R,j,Z,ne,K,re){j===null&&(j=z);let ge=K.isMesh&&K.matrixWorld.determinant()<0,ve=(function(Ke,yt,zt,Ge,Ne){yt.isScene!==!0&&(yt=z),$.resetTextureUnits();let Cn=yt.fog,Cc=Ge.isMeshStandardMaterial?yt.environment:null,po=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:fs,Ri=(Ge.isMeshStandardMaterial?fe:ae).get(Ge.envMap||Cc),$n=Ge.vertexColors===!0&&!!zt.attributes.color&&zt.attributes.color.itemSize===4,Ps=!!zt.attributes.tangent&&(!!Ge.normalMap||Ge.anisotropy>0),di=!!zt.morphAttributes.position,Ic=!!zt.morphAttributes.normal,Ls=!!zt.morphAttributes.color,Ed=xi;Ge.toneMapped&&(D!==null&&D.isXRRenderTarget!==!0||(Ed=x.toneMapping));let Sd=zt.morphAttributes.position||zt.morphAttributes.normal||zt.morphAttributes.color,km=Sd!==void 0?Sd.length:0,Ye=G.get(Ge),Bm=m.state.lights;if(he===!0&&(Re===!0||Ke!==U)){let vn=Ke===U&&Ge.id===C;me.setState(Ge,Ke,vn)}let In=!1;Ge.version===Ye.__version?Ye.needsLights&&Ye.lightsStateVersion!==Bm.state.version||Ye.outputColorSpace!==po||Ne.isBatchedMesh&&Ye.batching===!1?In=!0:Ne.isBatchedMesh||Ye.batching!==!0?Ne.isBatchedMesh&&Ye.batchingColor===!0&&Ne.colorTexture===null||Ne.isBatchedMesh&&Ye.batchingColor===!1&&Ne.colorTexture!==null||Ne.isInstancedMesh&&Ye.instancing===!1?In=!0:Ne.isInstancedMesh||Ye.instancing!==!0?Ne.isSkinnedMesh&&Ye.skinning===!1?In=!0:Ne.isSkinnedMesh||Ye.skinning!==!0?Ne.isInstancedMesh&&Ye.instancingColor===!0&&Ne.instanceColor===null||Ne.isInstancedMesh&&Ye.instancingColor===!1&&Ne.instanceColor!==null||Ne.isInstancedMesh&&Ye.instancingMorph===!0&&Ne.morphTexture===null||Ne.isInstancedMesh&&Ye.instancingMorph===!1&&Ne.morphTexture!==null||Ye.envMap!==Ri||Ge.fog===!0&&Ye.fog!==Cn?In=!0:Ye.numClippingPlanes===void 0||Ye.numClippingPlanes===me.numPlanes&&Ye.numIntersection===me.numIntersection?(Ye.vertexAlphas!==$n||Ye.vertexTangents!==Ps||Ye.morphTargets!==di||Ye.morphNormals!==Ic||Ye.morphColors!==Ls||Ye.toneMapping!==Ed||Ye.morphTargetsCount!==km)&&(In=!0):In=!0:In=!0:In=!0:In=!0:(In=!0,Ye.__version=Ge.version);let ls=Ye.currentProgram;In===!0&&(ls=uo(Ge,yt,Ne));let wd=!1,Fr=!1,Pc=!1,wt=ls.getUniforms(),Ci=Ye.uniforms;if(F.useProgram(ls.program)&&(wd=!0,Fr=!0,Pc=!0),Ge.id!==C&&(C=Ge.id,Fr=!0),wd||U!==Ke){F.buffers.depth.getReversed()&&Ke.reversedDepth!==!0&&(Ke._reversedDepth=!0,Ke.updateProjectionMatrix()),wt.setValue(k,"projectionMatrix",Ke.projectionMatrix),wt.setValue(k,"viewMatrix",Ke.matrixWorldInverse);let vn=wt.map.cameraPosition;vn!==void 0&&vn.setValue(k,w.setFromMatrixPosition(Ke.matrixWorld)),B.logarithmicDepthBuffer&&wt.setValue(k,"logDepthBufFC",2/(Math.log(Ke.far+1)/Math.LN2)),(Ge.isMeshPhongMaterial||Ge.isMeshToonMaterial||Ge.isMeshLambertMaterial||Ge.isMeshBasicMaterial||Ge.isMeshStandardMaterial||Ge.isShaderMaterial)&&wt.setValue(k,"isOrthographic",Ke.isOrthographicCamera===!0),U!==Ke&&(U=Ke,Fr=!0,Pc=!0)}if(Ne.isSkinnedMesh){wt.setOptional(k,Ne,"bindMatrix"),wt.setOptional(k,Ne,"bindMatrixInverse");let vn=Ne.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),wt.setValue(k,"boneTexture",vn.boneTexture,$))}Ne.isBatchedMesh&&(wt.setOptional(k,Ne,"batchingTexture"),wt.setValue(k,"batchingTexture",Ne._matricesTexture,$),wt.setOptional(k,Ne,"batchingIdTexture"),wt.setValue(k,"batchingIdTexture",Ne._indirectTexture,$),wt.setOptional(k,Ne,"batchingColorTexture"),Ne._colorsTexture!==null&&wt.setValue(k,"batchingColorTexture",Ne._colorsTexture,$));let Lc=zt.morphAttributes;Lc.position===void 0&&Lc.normal===void 0&&Lc.color===void 0||$t.update(Ne,zt,ls),(Fr||Ye.receiveShadow!==Ne.receiveShadow)&&(Ye.receiveShadow=Ne.receiveShadow,wt.setValue(k,"receiveShadow",Ne.receiveShadow)),Ge.isMeshGouraudMaterial&&Ge.envMap!==null&&(Ci.envMap.value=Ri,Ci.flipEnvMap.value=Ri.isCubeTexture&&Ri.isRenderTargetTexture===!1?-1:1),Ge.isMeshStandardMaterial&&Ge.envMap===null&&yt.environment!==null&&(Ci.envMapIntensity.value=yt.environmentIntensity),Fr&&(wt.setValue(k,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&(Pn=Pc,(jn=Ci).ambientLightColor.needsUpdate=Pn,jn.lightProbe.needsUpdate=Pn,jn.directionalLights.needsUpdate=Pn,jn.directionalLightShadows.needsUpdate=Pn,jn.pointLights.needsUpdate=Pn,jn.pointLightShadows.needsUpdate=Pn,jn.spotLights.needsUpdate=Pn,jn.spotLightShadows.needsUpdate=Pn,jn.rectAreaLights.needsUpdate=Pn,jn.hemisphereLights.needsUpdate=Pn),Cn&&Ge.fog===!0&&qe.refreshFogUniforms(Ci,Cn),qe.refreshMaterialUniforms(Ci,Ge,se,le,m.state.transmissionRenderTarget[Ke.id]),vr.upload(k,bd(Ye),Ci,$));var jn,Pn;if(Ge.isShaderMaterial&&Ge.uniformsNeedUpdate===!0&&(vr.upload(k,bd(Ye),Ci,$),Ge.uniformsNeedUpdate=!1),Ge.isSpriteMaterial&&wt.setValue(k,"center",Ne.center),wt.setValue(k,"modelViewMatrix",Ne.modelViewMatrix),wt.setValue(k,"normalMatrix",Ne.normalMatrix),wt.setValue(k,"modelMatrix",Ne.matrixWorld),Ge.isShaderMaterial||Ge.isRawShaderMaterial){let vn=Ge.uniformsGroups;for(let Dc=0,Om=vn.length;Dc<Om;Dc++){let Td=vn[Dc];ui.update(Td,ls),ui.bind(Td,ls)}}return ls})(R,j,Z,ne,K);F.setMaterial(ne,ge);let Ee=Z.index,Le=1;if(ne.wireframe===!0){if(Ee=_e.getWireframeAttribute(Z),Ee===void 0)return;Le=2}let Fe=Z.drawRange,De=Z.attributes.position,He=Fe.start*Le,pt=(Fe.start+Fe.count)*Le;re!==null&&(He=Math.max(He,re.start*Le),pt=Math.min(pt,(re.start+re.count)*Le)),Ee!==null?(He=Math.max(He,0),pt=Math.min(pt,Ee.count)):De!=null&&(He=Math.max(He,0),pt=Math.min(pt,De.count));let bt=pt-He;if(bt<0||bt===1/0)return;let St;Rn.setup(K,ne,ve,Z,Ee);let ft=xe;if(Ee!==null&&(St=oe.get(Ee),ft=st,ft.setIndex(St)),K.isMesh)ne.wireframe===!0?(F.setLineWidth(ne.wireframeLinewidth*b()),ft.setMode(k.LINES)):ft.setMode(k.TRIANGLES);else if(K.isLine){let Ke=ne.linewidth;Ke===void 0&&(Ke=1),F.setLineWidth(Ke*b()),K.isLineSegments?ft.setMode(k.LINES):K.isLineLoop?ft.setMode(k.LINE_LOOP):ft.setMode(k.LINE_STRIP)}else K.isPoints?ft.setMode(k.POINTS):K.isSprite&&ft.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Qs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(P.get("WEBGL_multi_draw"))ft.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Ke=K._multiDrawStarts,yt=K._multiDrawCounts,zt=K._multiDrawCount,Ge=Ee?oe.get(Ee).bytesPerElement:1,Ne=G.get(ne).currentProgram.getUniforms();for(let Cn=0;Cn<zt;Cn++)Ne.setValue(k,"_gl_DrawID",Cn),ft.render(Ke[Cn]/Ge,yt[Cn])}else if(K.isInstancedMesh)ft.renderInstances(He,bt,K.count);else if(Z.isInstancedBufferGeometry){let Ke=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,yt=Math.min(Z.instanceCount,Ke);ft.renderInstances(He,bt,yt)}else ft.render(He,bt)},this.compile=function(R,j,Z=null){Z===null&&(Z=R),m=nt.get(Z),m.init(j),y.push(m),Z.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),R!==Z&&R.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights();let ne=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let re=K.material;if(re)if(Array.isArray(re))for(let ge=0;ge<re.length;ge++){let ve=re[ge];Tc(ve,Z,K),ne.add(ve)}else Tc(re,Z,K),ne.add(re)}),m=y.pop(),ne},this.compileAsync=function(R,j,Z=null){let ne=this.compile(R,j,Z);return new Promise(K=>{function re(){ne.forEach(function(ge){G.get(ge).currentProgram.isReady()&&ne.delete(ge)}),ne.size!==0?setTimeout(re,10):K(R)}P.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ac=null;function gd(){os.stop()}function _d(){os.start()}let os=new Lf;function Rc(R,j,Z,ne){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ue.intersectsSprite(R)){ne&&S.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ke);let re=Me.update(R),ge=R.material;ge.visible&&f.push(R,re,ge,Z,S.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ue.intersectsObject(R))){let re=Me.update(R),ge=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),S.copy(R.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),S.copy(re.boundingSphere.center)),S.applyMatrix4(R.matrixWorld).applyMatrix4(ke)),Array.isArray(ge)){let ve=re.groups;for(let Ee=0,Le=ve.length;Ee<Le;Ee++){let Fe=ve[Ee],De=ge[Fe.materialIndex];De&&De.visible&&f.push(R,re,De,Z,S.z,Fe)}}else ge.visible&&f.push(R,re,ge,Z,S.z,null)}}let K=R.children;for(let re=0,ge=K.length;re<ge;re++)Rc(K[re],j,Z,ne)}function vd(R,j,Z,ne){let K=R.opaque,re=R.transmissive,ge=R.transparent;m.setupLightsView(Z),he===!0&&me.setGlobalState(x.clippingPlanes,Z),ne&&F.viewport(H.copy(ne)),K.length>0&&ho(K,j,Z),re.length>0&&ho(re,j,Z),ge.length>0&&ho(ge,j,Z),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function yd(R,j,Z,ne){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ne.id]===void 0&&(m.state.transmissionRenderTarget[ne.id]=new ti(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")||P.has("EXT_color_buffer_float")?mr:ai,minFilter:xs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let K=m.state.transmissionRenderTarget[ne.id],re=ne.viewport||H;K.setSize(re.z*x.transmissionResolutionScale,re.w*x.transmissionResolutionScale);let ge=x.getRenderTarget(),ve=x.getActiveCubeFace(),Ee=x.getActiveMipmapLevel();x.setRenderTarget(K),x.getClearColor(V),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),N&&We.render(Z);let Le=x.toneMapping;x.toneMapping=xi;let Fe=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),m.setupLightsView(ne),he===!0&&me.setGlobalState(x.clippingPlanes,ne),ho(R,Z,ne),$.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K),P.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let He=0,pt=j.length;He<pt;He++){let bt=j[He],St=bt.object,ft=bt.geometry,Ke=bt.material,yt=bt.group;if(Ke.side===mt&&St.layers.test(ne.layers)){let zt=Ke.side;Ke.side=gn,Ke.needsUpdate=!0,xd(St,Z,ne,ft,Ke,yt),Ke.side=zt,Ke.needsUpdate=!0,De=!0}}De===!0&&($.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K))}x.setRenderTarget(ge,ve,Ee),x.setClearColor(V,Q),Fe!==void 0&&(ne.viewport=Fe),x.toneMapping=Le}function ho(R,j,Z){let ne=j.isScene===!0?j.overrideMaterial:null;for(let K=0,re=R.length;K<re;K++){let ge=R[K],ve=ge.object,Ee=ge.geometry,Le=ge.group,Fe=ge.material;Fe.allowOverride===!0&&ne!==null&&(Fe=ne),ve.layers.test(Z.layers)&&xd(ve,j,Z,Ee,Fe,Le)}}function xd(R,j,Z,ne,K,re){R.onBeforeRender(x,j,Z,ne,K,re),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(x,j,Z,ne,R,re),K.transparent===!0&&K.side===mt&&K.forceSinglePass===!1?(K.side=gn,K.needsUpdate=!0,x.renderBufferDirect(Z,j,ne,K,R,re),K.side=ur,K.needsUpdate=!0,x.renderBufferDirect(Z,j,ne,K,R,re),K.side=mt):x.renderBufferDirect(Z,j,ne,K,R,re),R.onAfterRender(x,j,Z,ne,K,re)}function uo(R,j,Z){j.isScene!==!0&&(j=z);let ne=G.get(R),K=m.state.lights,re=m.state.shadowsArray,ge=K.state.version,ve=Te.getParameters(R,K.state,re,j,Z),Ee=Te.getProgramCacheKey(ve),Le=ne.programs;ne.environment=R.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(R.isMeshStandardMaterial?fe:ae).get(R.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Le===void 0&&(R.addEventListener("dispose",co),Le=new Map,ne.programs=Le);let Fe=Le.get(Ee);if(Fe!==void 0){if(ne.currentProgram===Fe&&ne.lightsStateVersion===ge)return Md(R,ve),Fe}else ve.uniforms=Te.getUniforms(R),R.onBeforeCompile(ve,x),Fe=Te.acquireProgram(ve,Ee),Le.set(Ee,Fe),ne.uniforms=ve.uniforms;let De=ne.uniforms;return(R.isShaderMaterial||R.isRawShaderMaterial)&&R.clipping!==!0||(De.clippingPlanes=me.uniform),Md(R,ve),ne.needsLights=(function(He){return He.isMeshLambertMaterial||He.isMeshToonMaterial||He.isMeshPhongMaterial||He.isMeshStandardMaterial||He.isShadowMaterial||He.isShaderMaterial&&He.lights===!0})(R),ne.lightsStateVersion=ge,ne.needsLights&&(De.ambientLightColor.value=K.state.ambient,De.lightProbe.value=K.state.probe,De.directionalLights.value=K.state.directional,De.directionalLightShadows.value=K.state.directionalShadow,De.spotLights.value=K.state.spot,De.spotLightShadows.value=K.state.spotShadow,De.rectAreaLights.value=K.state.rectArea,De.ltc_1.value=K.state.rectAreaLTC1,De.ltc_2.value=K.state.rectAreaLTC2,De.pointLights.value=K.state.point,De.pointLightShadows.value=K.state.pointShadow,De.hemisphereLights.value=K.state.hemi,De.directionalShadowMap.value=K.state.directionalShadowMap,De.directionalShadowMatrix.value=K.state.directionalShadowMatrix,De.spotShadowMap.value=K.state.spotShadowMap,De.spotLightMatrix.value=K.state.spotLightMatrix,De.spotLightMap.value=K.state.spotLightMap,De.pointShadowMap.value=K.state.pointShadowMap,De.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=Fe,ne.uniformsList=null,Fe}function bd(R){if(R.uniformsList===null){let j=R.currentProgram.getUniforms();R.uniformsList=vr.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Md(R,j){let Z=G.get(R);Z.outputColorSpace=j.outputColorSpace,Z.batching=j.batching,Z.batchingColor=j.batchingColor,Z.instancing=j.instancing,Z.instancingColor=j.instancingColor,Z.instancingMorph=j.instancingMorph,Z.skinning=j.skinning,Z.morphTargets=j.morphTargets,Z.morphNormals=j.morphNormals,Z.morphColors=j.morphColors,Z.morphTargetsCount=j.morphTargetsCount,Z.numClippingPlanes=j.numClippingPlanes,Z.numIntersection=j.numClipIntersection,Z.vertexAlphas=j.vertexAlphas,Z.vertexTangents=j.vertexTangents,Z.toneMapping=j.toneMapping}os.setAnimationLoop(function(R){Ac&&Ac(R)}),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(R){Ac=R,vt.setAnimationLoop(R),R===null?os.stop():os.start()},vt.addEventListener("sessionstart",gd),vt.addEventListener("sessionend",_d),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(E===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(j),j=vt.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,j,D),m=nt.get(R,y.length),m.init(j),y.push(m),ke.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ue.setFromProjectionMatrix(ke,yi,j.reversedDepth),Re=this.localClippingEnabled,he=me.init(this.clippingPlanes,Re),f=tt.get(R,v.length),f.init(),v.push(f),vt.enabled===!0&&vt.isPresenting===!0){let re=x.xr.getDepthSensingMesh();re!==null&&Rc(re,j,-1/0,x.sortObjects)}Rc(R,j,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort(ye,we),N=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,N&&We.addToRenderList(f,R),this.info.render.frame++,he===!0&&me.beginShadows();let Z=m.state.shadowsArray;Ce.render(Z,R,j),he===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let ne=f.opaque,K=f.transmissive;if(m.setupLights(),j.isArrayCamera){let re=j.cameras;if(K.length>0)for(let ge=0,ve=re.length;ge<ve;ge++)yd(ne,K,R,re[ge]);N&&We.render(R);for(let ge=0,ve=re.length;ge<ve;ge++){let Ee=re[ge];vd(f,R,Ee,Ee.viewport)}}else K.length>0&&yd(ne,K,R,j),N&&We.render(R),vd(f,R,j);D!==null&&A===0&&($.updateMultisampleRenderTarget(D),$.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(x,R,j),Rn.resetDefaultState(),C=-1,U=null,y.pop(),y.length>0?(m=y[y.length-1],he===!0&&me.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,v.pop(),f=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,j,Z){let ne=G.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),G.get(R.texture).__webglTexture=j,G.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:Z,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){let Z=G.get(R);Z.__webglFramebuffer=j,Z.__useDefaultFramebuffer=j===void 0};let Fm=k.createFramebuffer();this.setRenderTarget=function(R,j=0,Z=0){D=R,T=j,A=Z;let ne=!0,K=null,re=!1,ge=!1;if(R){let ve=G.get(R);if(ve.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(k.FRAMEBUFFER,null),ne=!1;else if(ve.__webglFramebuffer===void 0)$.setupRenderTarget(R);else if(ve.__hasExternalTextures)$.rebindTextures(R,G.get(R.texture).__webglTexture,G.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Fe=R.depthTexture;if(ve.__boundDepthTexture!==Fe){if(Fe!==null&&G.has(Fe)&&(R.width!==Fe.image.width||R.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(R)}}let Ee=R.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);let Le=G.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(K=Array.isArray(Le[j])?Le[j][Z]:Le[j],re=!0):K=R.samples>0&&$.useMultisampledRTT(R)===!1?G.get(R).__webglMultisampledFramebuffer:Array.isArray(Le)?Le[Z]:Le,H.copy(R.viewport),O.copy(R.scissor),J=R.scissorTest}else H.copy(be).multiplyScalar(se).floor(),O.copy(Ie).multiplyScalar(se).floor(),J=ce;if(Z!==0&&(K=Fm),F.bindFramebuffer(k.FRAMEBUFFER,K)&&ne&&F.drawBuffers(R,K),F.viewport(H),F.scissor(O),F.setScissorTest(J),re){let ve=G.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve.__webglTexture,Z)}else if(ge){let ve=j;for(let Ee=0;Ee<R.textures.length;Ee++){let Le=G.get(R.textures[Ee]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ee,Le.__webglTexture,Z,ve)}}else if(R!==null&&Z!==0){let ve=G.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ve.__webglTexture,Z)}C=-1},this.readRenderTargetPixels=function(R,j,Z,ne,K,re,ge,ve=0){if(!R||!R.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=G.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){F.bindFramebuffer(k.FRAMEBUFFER,Ee);try{let Le=R.textures[ve],Fe=Le.format,De=Le.type;if(!B.textureFormatReadable(Fe))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(De))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");j>=0&&j<=R.width-ne&&Z>=0&&Z<=R.height-K&&(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ve),k.readPixels(j,Z,ne,K,Xe.convert(Fe),Xe.convert(De),re))}finally{let Le=D!==null?G.get(D).__webglFramebuffer:null;F.bindFramebuffer(k.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(R,j,Z,ne,K,re,ge,ve=0){if(!R||!R.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=G.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){if(j>=0&&j<=R.width-ne&&Z>=0&&Z<=R.height-K){F.bindFramebuffer(k.FRAMEBUFFER,Ee);let Le=R.textures[ve],Fe=Le.format,De=Le.type;if(!B.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let He=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.bufferData(k.PIXEL_PACK_BUFFER,re.byteLength,k.STREAM_READ),R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ve),k.readPixels(j,Z,ne,K,Xe.convert(Fe),Xe.convert(De),0);let pt=D!==null?G.get(D).__webglFramebuffer:null;F.bindFramebuffer(k.FRAMEBUFFER,pt);let bt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await ef(k,bt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,re),k.deleteBuffer(He),k.deleteSync(bt),re}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,j=null,Z=0){let ne=Math.pow(2,-Z),K=Math.floor(R.image.width*ne),re=Math.floor(R.image.height*ne),ge=j!==null?j.x:0,ve=j!==null?j.y:0;$.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,Z,0,0,ge,ve,K,re),F.unbindTexture()};let Nm=k.createFramebuffer(),Um=k.createFramebuffer();this.copyTextureToTexture=function(R,j,Z=null,ne=null,K=0,re=null){let ge,ve,Ee,Le,Fe,De,He,pt,bt;re===null&&(K!==0?(Qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=K,K=0):re=0);let St=R.isCompressedTexture?R.mipmaps[re]:R.image;if(Z!==null)ge=Z.max.x-Z.min.x,ve=Z.max.y-Z.min.y,Ee=Z.isBox3?Z.max.z-Z.min.z:1,Le=Z.min.x,Fe=Z.min.y,De=Z.isBox3?Z.min.z:0;else{let $n=Math.pow(2,-K);ge=Math.floor(St.width*$n),ve=Math.floor(St.height*$n),Ee=R.isDataArrayTexture?St.depth:R.isData3DTexture?Math.floor(St.depth*$n):1,Le=0,Fe=0,De=0}ne!==null?(He=ne.x,pt=ne.y,bt=ne.z):(He=0,pt=0,bt=0);let ft=Xe.convert(j.format),Ke=Xe.convert(j.type),yt;j.isData3DTexture?($.setTexture3D(j,0),yt=k.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?($.setTexture2DArray(j,0),yt=k.TEXTURE_2D_ARRAY):($.setTexture2D(j,0),yt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);let zt=k.getParameter(k.UNPACK_ROW_LENGTH),Ge=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ne=k.getParameter(k.UNPACK_SKIP_PIXELS),Cn=k.getParameter(k.UNPACK_SKIP_ROWS),Cc=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,St.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,St.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Le),k.pixelStorei(k.UNPACK_SKIP_ROWS,Fe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,De);let po=R.isDataArrayTexture||R.isData3DTexture,Ri=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){let $n=G.get(R),Ps=G.get(j),di=G.get($n.__renderTarget),Ic=G.get(Ps.__renderTarget);F.bindFramebuffer(k.READ_FRAMEBUFFER,di.__webglFramebuffer),F.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ic.__webglFramebuffer);for(let Ls=0;Ls<Ee;Ls++)po&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,G.get(R).__webglTexture,K,De+Ls),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,G.get(j).__webglTexture,re,bt+Ls)),k.blitFramebuffer(Le,Fe,ge,ve,He,pt,ge,ve,k.DEPTH_BUFFER_BIT,k.NEAREST);F.bindFramebuffer(k.READ_FRAMEBUFFER,null),F.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||G.has(R)){let $n=G.get(R),Ps=G.get(j);F.bindFramebuffer(k.READ_FRAMEBUFFER,Nm),F.bindFramebuffer(k.DRAW_FRAMEBUFFER,Um);for(let di=0;di<Ee;di++)po?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$n.__webglTexture,K,De+di):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,$n.__webglTexture,K),Ri?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ps.__webglTexture,re,bt+di):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ps.__webglTexture,re),K!==0?k.blitFramebuffer(Le,Fe,ge,ve,He,pt,ge,ve,k.COLOR_BUFFER_BIT,k.NEAREST):Ri?k.copyTexSubImage3D(yt,re,He,pt,bt+di,Le,Fe,ge,ve):k.copyTexSubImage2D(yt,re,He,pt,Le,Fe,ge,ve);F.bindFramebuffer(k.READ_FRAMEBUFFER,null),F.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ri?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(yt,re,He,pt,bt,ge,ve,Ee,ft,Ke,St.data):j.isCompressedArrayTexture?k.compressedTexSubImage3D(yt,re,He,pt,bt,ge,ve,Ee,ft,St.data):k.texSubImage3D(yt,re,He,pt,bt,ge,ve,Ee,ft,Ke,St):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,re,He,pt,ge,ve,ft,Ke,St.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,re,He,pt,St.width,St.height,ft,St.data):k.texSubImage2D(k.TEXTURE_2D,re,He,pt,ge,ve,ft,Ke,St);k.pixelStorei(k.UNPACK_ROW_LENGTH,zt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ge),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ne),k.pixelStorei(k.UNPACK_SKIP_ROWS,Cn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Cc),re===0&&j.generateMipmaps&&k.generateMipmap(yt),F.unbindTexture()},this.initRenderTarget=function(R){G.get(R).__webglFramebuffer===void 0&&$.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?$.setTextureCube(R,0):R.isData3DTexture?$.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?$.setTexture2DArray(R,0):$.setTexture2D(R,0),F.unbindTexture()},this.resetState=function(){T=0,A=0,D=null,F.reset(),Rn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var kf={type:"change"},Pu={type:"start"},Of={type:"end"},ac=new ni,Bf=new xn,J0=Math.cos(70*cu.DEG2RAD),Pt=new M,cn=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Iu=1e-6,oc=class extends Aa{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new M,this.cursor=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new M,this._lastQuaternion=new on,this._lastTargetPosition=new M,this._quat=new on().setFromUnitVectors(e.up,new M(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hr,this._sphericalDelta=new hr,this._scale=1,this._panOffset=new M,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new M,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=e_.bind(this),this._onPointerDown=Q0.bind(this),this._onPointerUp=t_.bind(this),this._onContextMenu=l_.bind(this),this._onMouseWheel=s_.bind(this),this._onKeyDown=r_.bind(this),this._onTouchStart=a_.bind(this),this._onTouchMove=o_.bind(this),this._onMouseDown=n_.bind(this),this._onMouseMove=i_.bind(this),this._interceptControlDown=c_.bind(this),this._interceptControlUp=h_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kf),this.update(),this.state=ct.NONE}update(e=null){let t=this.object.position;Pt.copy(t).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),s<-Math.PI?s+=cn:s>Math.PI&&(s-=cn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Pt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new M(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new M(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ac.origin.copy(this.object.position),ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ac.direction))<J0?this.object.lookAt(this.target):(Bf.setFromNormalAndCoplanarPoint(this.object.up,this.target),ac.intersectPlane(Bf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Iu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Iu||this._lastTargetPosition.distanceToSquared(this.target)>Iu?(this.dispatchEvent(kf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?cn/60*this.autoRotateSpeed*e:cn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Pt.setFromMatrixColumn(t,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,t){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(t,1):(Pt.setFromMatrixColumn(t,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Pt.copy(s).sub(this.target);let r=Pt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Q0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function e_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function t_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Of),this.state=ct.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function n_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ct.DOLLY;break;case Gi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}break;case Gi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Pu)}function i_(i){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function s_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(i.preventDefault(),this.dispatchEvent(Pu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Of))}function r_(i){this.enabled!==!1&&this._handleKeyDown(i)}function a_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ct.TOUCH_ROTATE;break;case Vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ct.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Pu)}function o_(i){switch(this._trackPointer(i),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ct.NONE}}function l_(i){this.enabled!==!1&&i.preventDefault()}function c_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function h_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ua=new M;function En(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Ua.copy(e),Ua[n]=0,Ua.normalize();let l=.5*a/(a+o),h=1-Ua.angleTo(i)/c;return Math.sign(Ua[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Lt=class i extends Ve{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new M,l=new M,h=new M(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,g=u.length/6,_=new M,f=.5/a;for(let m=0,v=0;m<u.length;m+=3,v+=2)switch(c.fromArray(u,m),l.copy(c),l.x-=Math.sign(l.x)*f,l.y-=Math.sign(l.y)*f,l.z-=Math.sign(l.z)*f,l.normalize(),u[m+0]=h.x*Math.sign(c.x)+l.x*r,u[m+1]=h.y*Math.sign(c.y)+l.y*r,u[m+2]=h.z*Math.sign(c.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/g)){case 0:_.set(1,0,0),p[v+0]=En(_,l,"z","y",r,n),p[v+1]=1-En(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),p[v+0]=1-En(_,l,"z","y",r,n),p[v+1]=1-En(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),p[v+0]=1-En(_,l,"x","z",r,e),p[v+1]=En(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),p[v+0]=1-En(_,l,"x","z",r,e),p[v+1]=1-En(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),p[v+0]=1-En(_,l,"x","y",r,e),p[v+1]=1-En(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),p[v+0]=En(_,l,"x","y",r,e),p[v+1]=1-En(_,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var q=window.STRUKTUR,ku=window.MODUL_TEXTE||{},Ze=1.6,Sn=1.9,Ga=2.1,Ir="uzh-kompetenzhaus-v1",Bu={"001":{fa:["Fa1","Fa3","Fa4"],ki:["KI1","KI6"],fu:["Fu2"],haupt:["Fa1","Fa3"],kat:"A"},"002":{fa:["Fa1","Fa2","Fa4","Fa9"],ki:["KI4"],fu:["Fu2"],haupt:["Fa1","Fa2"],kat:"A"},"003":{fa:["Fa10","Fa6","Fa7"],ki:["KI1","KI4","KI5","KI6"],fu:["Fu1","Fu2","Fu3"],haupt:["Fa10","KI5"],kat:"B"},100:{fa:["Fa5","Fa3","Fa4","Fa10"],ki:["KI4","KI6"],fu:["Fu2"],haupt:["Fa5","Fa3"],kat:"A+B"},101:{fa:["Fa3","Fa2","Fa4"],ki:["KI1","KI6"],fu:["Fu1"],haupt:["Fa3"],kat:"B"},102:{fa:["Fa2","Fa6","Fa3","Fa7","Fa10"],ki:["KI1","KI2","KI3","KI5"],fu:["Fu1","Fu3"],haupt:["Fa2","Fa6"],kat:"B"},103:{fa:["Fa3","Fa2","Fa4"],ki:["KI4","KI6","KI1"],fu:["Fu2"],haupt:["Fa3","KI4"],kat:"A"},200:{fa:["Fa1","Fa4"],ki:["KI4"],fu:["Fu2"],haupt:["Fa1","Fa4"],kat:"A"},201:{fa:["Fa1","Fa2"],ki:["KI4"],fu:["Fu2"],haupt:["Fa1"],kat:"A"},s11:{fa:["Fa4","Fa6","Fa1"],ki:["KI6","KI1"],fu:["Fu1"],haupt:["Fa4","Fa6"],kat:"B"},300:{fa:["Fa1","Fa5","Fa4","Fa9"],ki:["KI6"],fu:["Fu2"],haupt:["Fa1","Fa5"],kat:"A"},301:{fa:["Fa1","Fa8","Fa5"],ki:["KI3"],fu:["Fu3"],haupt:["Fa1","Fa8"],kat:"A+B"},302:{fa:["Fa1","Fa8","Fa5"],ki:["KI3"],fu:["Fu3"],haupt:["Fa1","Fa8"],kat:"A+B"},s13:{fa:["Fa4","Fa6","Fa1"],ki:["KI1","KI6","KI5"],fu:["Fu1"],haupt:["Fa4","Fa6"],kat:"B"},400:{fa:["Fa1","Fa8","Fa5","Fa7","Fa9"],ki:["KI5","KI6","KI3"],fu:["Fu3"],haupt:["Fa1","Fa8","Fa7"],kat:"A+B"},401:{fa:["Fa1","Fa8"],ki:[],fu:[],haupt:["Fa1"],kat:"A"},402:{fa:["Fa8","Fa1","Fa10"],ki:["KI6"],fu:["Fu2"],haupt:["Fa8","Fa1"],kat:"B"},403:{fa:["Fa1","Fa8","Fa9"],ki:[],fu:[],haupt:["Fa1"],kat:"A"},s12:{fa:["Fa4","Fa6","Fa1"],ki:["KI6","KI2"],fu:["Fu1"],haupt:["Fa4","Fa6"],kat:"B"},BA:{fa:["Fa6","Fa4","Fa2","Fa7","Fa10"],ki:["KI5","KI6","KI3","KI1"],fu:["Fu1","Fu2","Fu3"],haupt:["Fa6","Fa4","Fa7"],kat:"B"},500:{fa:["Fa3","Fa2","Fa4"],ki:["KI4","KI1"],fu:["Fu2"],haupt:["Fa3","KI4"],kat:"A+B"},501:{fa:["Fa5","Fa7","Fa4","Fa6"],ki:["KI6","KI5"],fu:["Fu1"],haupt:["Fa5","KI6"],kat:"B/C"},502:{fa:["Fa1","Fa8"],ki:["KI5"],fu:["Fu3"],haupt:["Fa1","Fa8"],kat:"B"},wp:{fa:["Fa1","Fa4","Fa8"],ki:["KI6"],fu:["Fu1"],haupt:["Fa1"],kat:"A"},s04:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s05:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s06:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s07:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s08:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s09:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s01a:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},s01b:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},s01c:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},s01d:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},600:{fa:["Fa8","Fa10","Fa7","Fa6"],ki:["KI5","KI3","KI1"],fu:["Fu3","Fu2"],haupt:["Fa8","Fa10"],kat:"B"},s02a:{fa:["Fa1","Fa4"],ki:[],fu:[],haupt:["Fa1","Fa4"],kat:"A"},s02b:{fa:["Fa1","Fa4"],ki:[],fu:[],haupt:["Fa1","Fa4"],kat:"A"},s03:{fa:["Fa2","Fa3"],ki:["KI1","KI4","KI2"],fu:["Fu1"],haupt:["Fa2","Fa3"],kat:"B/C"},MA:{fa:["Fa2","Fa3","Fa6","Fa7","Fa10"],ki:["KI1","KI2","KI3","KI5","KI6"],fu:["Fu1","Fu2","Fu3"],haupt:["Fa2","Fa3","Fa6"],kat:"B"},901:{fa:["Fa2","Fa6"],ki:[],fu:["Fu2"],haupt:["Fa2"],kat:"A"},902:{fa:["Fa6","Fa4"],ki:["KI6"],fu:["Fu2"],haupt:["Fa6","Fa4"],kat:"A"},903:{fa:["Fa2","Fa6"],ki:[],fu:["Fu2"],haupt:["Fa2"],kat:"A"},904:{fa:["Fa6","Fa4"],ki:["KI6"],fu:["Fu2"],haupt:["Fa6","Fa4"],kat:"A"},909:{fa:["Fa1","Fa4","Fa6"],ki:["KI5","KI6"],fu:["Fu2"],haupt:["Fa1","Fa4"],kat:"A"}},Pr=()=>({v:3,lang:"de",mode:"frei",name:"",direktMSc:!1,onboarded:!1,placed:{frei:{},serious:{}},bestanden:{},quests:{},quiz:{},fb:{},msSeen:{frei:[],serious:[]},nachbarn:[],season:ed(),tod:35,sound:!0,envAuto:!0,p0:[!1,!1,!1,!1],minor:[!1,!1,!1,!1,!1,!1],pal:{bsc:"uzh",msc:"uzh"},wzSeen:{frei:[],serious:[]},cardSize:"m"});function ed(){let i=new Date().getMonth()+1;return i>=3&&i<=5?"fruehling":i>=6&&i<=8?"sommer":i>=9&&i<=11?"herbst":"winter"}var no=!0;try{localStorage.setItem(Ir+"-t","1"),localStorage.removeItem(Ir+"-t")}catch{no=!1}var I=Pr();if(no)try{let i=localStorage.getItem(Ir);i&&(I=Object.assign(Pr(),JSON.parse(i)))}catch{}var zf=null;function it(){no&&(Ot.active||(clearTimeout(zf),zf=setTimeout(()=>{try{localStorage.setItem(Ir,JSON.stringify(I))}catch{}},300)))}var L=i=>window.T[I.lang]&&window.T[I.lang][i]||window.T.de[i]||i,X=i=>i&&(i[I.lang]||i.de)||"";function td(){document.querySelectorAll("[data-aria]").forEach(i=>{let e=L(i.getAttribute("data-aria"));e&&i.setAttribute("aria-label",e)}),document.querySelectorAll("[data-i18n]").forEach(i=>{let e=i.getAttribute("data-i18n"),t=L(e);t&&(i.innerHTML=(t.startsWith("\u2B07")||t.startsWith("\u2912")||t.startsWith("\u{1F5D1}")||t.startsWith("\u2753")||t.startsWith("\u{1F512}")||t.startsWith("\u2139\uFE0F")||i.tagName==="LI",t)),t&&(i.innerHTML=t)}),document.getElementById("btnLang").textContent=I.lang==="de"?"EN":"DE",document.documentElement.lang=I.lang}var gt={};q.slots.forEach(i=>gt[i.slot]=i);var Ft={};(q.optionsmodule||[]).forEach(i=>Ft[i.code]=i);var rn={};q.kompetenzen.forEach(i=>rn[i.id]=i);function nd(i){let e=I.placed[I.mode][i.slot],t=typeof Ti<"u"&&i.optionen&&i.optionen.includes(Ti)&&Wn===i.slot?Ti:null,n=e&&e.opt||t||i.code;return ku[n]||null}var Ei={sp:{DeNC:{fa:["Fa2"],ki:["KI4"]},HEA:{fa:["Fa5","Fa8"],ki:[]},SEOP:{fa:["Fa8","Fa9"],ki:["KI3"]}},r:{klin:{fa:["Fa5","Fa8"],ki:[]},ekn:{fa:["Fa2"],ki:["KI4"]},swo:{fa:["Fa9"],ki:["KI3"]}},form:{daten:{fa:["Fa3"],ki:[]},repro:{fa:["Fa3","Fa4"],ki:[]},review:{fa:["Fa4"],ki:["KI6"]}}};function en(i){let e=nd(i),t=e&&e.komp?{komp:e.komp,haupt:e.haupt||[],kat:e.kat||(Bu[i.slot]||{}).kat||"B"}:(()=>{let c=Bu[i.slot]||{fa:[],ki:[],fu:[],haupt:[],kat:"B"};return{komp:{fa:c.fa,ki:c.ki,fu:c.fu},haupt:c.haupt,kat:c.kat}})(),n=I.placed[I.mode][i.slot],s=[];if(n){if(i.schwerpunktwahl&&n.sp&&Ei.sp[n.sp]&&s.push(Ei.sp[n.sp]),n.thema){let c=(Zi[i.slot]||[]).find(l=>l.id===n.thema);c&&Ei.r[c.r]&&s.push(Ei.r[c.r])}if(i.slot==="BA"&&n.frage){let c=((q.baFragen||{})[n.thema]||[]).find(l=>l.id===n.frage);c&&Ei.form[c.form]&&s.push(Ei.form[c.form])}}if(!s.length)return t;let r=[...t.komp.fa],a=[...t.komp.ki],o=[...t.haupt||[]];for(let c of s)(c.fa||[]).forEach(l=>{r.includes(l)||r.push(l),o.includes(l)||o.push(l)}),(c.ki||[]).forEach(l=>{a.includes(l)||a.push(l),o.includes(l)||o.push(l)});return{komp:{fa:r,ki:a,fu:t.komp.fu},haupt:o,kat:t.kat}}function nm(i){let e=ku[i.code]||null,t=e&&e.komp?{fa:e.komp.fa||[],ki:e.komp.ki||[],fu:e.komp.fu||[],haupt:e.haupt||[]}:(()=>{let o=Bu[i.slot]||{fa:[],ki:[],fu:[],haupt:[]};return{fa:o.fa,ki:o.ki,fu:o.fu,haupt:o.haupt}})(),n=[...t.fa],s=[...t.ki],r=[...t.haupt||[]],a=(o,c)=>{(o.fa||[]).forEach(l=>{n.includes(l)||n.push(l),c&&!r.includes(l)&&r.push(l)}),(o.ki||[]).forEach(l=>{s.includes(l)||s.push(l),c&&!r.includes(l)&&r.push(l)})};return i.schwerpunktwahl&&Object.values(Ei.sp).forEach(o=>a(o,!0)),Zi[i.slot]&&Object.values(Ei.r).forEach(o=>a(o,!0)),i.slot==="BA"&&Object.values(Ei.form).forEach(o=>a(o,!0)),i.optionen&&i.optionen.forEach(o=>{let c=ku[o];c&&c.komp&&a({fa:c.komp.fa,ki:c.komp.ki},!1)}),{komp:{fa:n,ki:s,fu:t.fu},haupt:r}}function At(i){let e=I.placed[I.mode][i.slot];return e&&e.opt&&Ft[e.opt]?X(Ft[e.opt].titel):X(i.titel)}var Ot={active:!1,data:null},Zi=q.themen||{},Ou={};(q.paletten||[]).forEach(i=>Ou[i.id]=i);function u_(i){return Ou[I.pal&&I.pal[i]||"uzh"]||Ou.uzh||{rahmen:"#f2f0e9",dach:null,holz:"#8a6642",akzent:"#0028a5"}}function im(i,e){let t=e||I.placed[I.mode][i];return!t||!t.thema?null:(Zi[i]||[]).find(n=>n.id===t.thema)||null}function ts(){let i={klin:0,ekn:0,swo:0};for(let s of["s11","s12","s13","BA"]){let r=im(s);r&&i[r.r]!==void 0&&i[r.r]++}let e=null,t=0,n=!1;for(let s of Object.keys(i))i[s]>t?(e=s,t=i[s],n=!1):i[s]===t&&t>0&&(n=!0);return{counts:i,r:t>=2&&!n?e:null}}function ns(){let i={DeNC:0,HEA:0,SEOP:0};for(let t of["s04","s05","s06","s07","s08","s09"]){let n=I.placed[I.mode][t];n&&n.sp&&i[n.sp]!==void 0&&i[n.sp]++}let e=null;for(let t of Object.keys(i))i[t]>=4&&(e=t);return{counts:i,dom:e,total:i.DeNC+i.HEA+i.SEOP}}function As(){let i=I.placed[I.mode].wp;return i&&i.opt||null}function Xi(){let i=I.placed[I.mode].BA;return!i||!i.thema||!i.frage?null:((q.baFragen||{})[i.thema]||[]).find(e=>e.id===i.frage)||null}function Rr(){let i=I.placed[I.mode].BA;return!i||!i.artefakt?null:(q.baArtefakte||[]).find(e=>e.id===i.artefakt)||null}function je(i,e){return!!I.placed[e||I.mode][i]}function sm(i){return je("BA",i||I.mode)||I.direktMSc}function Lr(i){if(i.optionen){let e=I.placed[I.mode][i.slot];return e&&e.opt||typeof Ti<"u"&&Ti||i.optionen[0]}return i.code}function id(i){return(window.QUIZ||{})[Lr(i)]||null}function rm(i){return!!I.quiz[Lr(i)]}function Ai(i,e){if(e=e||I.mode,Ot.active)return{ok:!1,reason:""};if(je(i.slot,e))return{ok:!1,reason:""};if(i.haus==="msc"&&!sm(e))return{ok:!1,reason:L("grund_msc")};let t=(i.voraus||[]).filter(n=>!je(n,e));if(t.length){let n=t.slice(0,3).map(s=>X(gt[s].titel).split(",")[0]).join(" \xB7 ");return{ok:!1,reason:L("grund_voraus")+n+(t.length>3?" \u2026":"")}}return e==="serious"&&!I.bestanden[i.slot]?{ok:!1,reason:L("grund_bestanden")}:e==="serious"&&id(i)&&!rm(i)?{ok:!1,reason:L("grund_quiz")}:{ok:!0,reason:""}}var ci=document.getElementById("c3d"),Tn;try{Tn=new sc({canvas:ci,antialias:!0})}catch(i){throw document.body.insertAdjacentHTML("beforeend",'<div style="position:fixed;inset:0;z-index:99;display:grid;place-items:center;background:#f4f6fb;padding:24px"><div style="max-width:420px;text-align:center;font-family:Helvetica,Arial,sans-serif"><div style="font-size:40px">\u{1F3D7}\uFE0F</div><h2 style="color:#0028a5;margin:10px 0">3D wird hier nicht unterst\xFCtzt</h2><p style="color:#3c4356;line-height:1.5">Dein Browser kann WebGL gerade nicht starten. Bitte \xF6ffne das Kompetenzhaus in Safari, Chrome oder Firefox (nicht im In-App-Browser) \u2014 oder auf einem anderen Ger\xE4t.</p></div></div>'),i}Tn.setPixelRatio(Math.min(window.devicePixelRatio,2));Tn.shadowMap.enabled=!0;Tn.shadowMap.type=Dl;Tn.toneMapping=Hl;Tn.toneMappingExposure=1.05;var Je=new sa,Nt=new Ht(46,1,.1,400);Nt.position.set(-23,17,30);var Wt=new oc(Nt,ci);Wt.enableDamping=!0;Wt.dampingFactor=.06;Wt.maxPolarAngle=Math.PI*.49;Wt.minDistance=6;Wt.maxDistance=105;Wt.target.set(-7,3,0);var am=new ba(12573183,9075285,.75);Je.add(am);var sn=new Sa(16771524,2.2);sn.castShadow=!0;sn.shadow.mapSize.set(2048,2048);sn.shadow.camera.left=-48;sn.shadow.camera.right=48;sn.shadow.camera.top=48;sn.shadow.camera.bottom=-48;sn.shadow.camera.far=120;sn.shadow.bias=-4e-4;sn.shadow.radius=6;Je.add(sn);Je.add(sn.target);Je.fog=new ia(12574965,60,160);var is=new Oe;Je.add(is);var vc=new ie({color:7319378,roughness:1}),sd=new W(new $e(90,90,.6,48),vc);sd.position.y=-.3;sd.receiveShadow=!0;is.add(sd);var rd=new ie({color:13287336,roughness:.95}),ad=new ie({color:14209730,roughness:1}),uc=new ie({color:10196876,roughness:.95});function om(i){let e=q.haeuser[i],t=new Oe,n=(e.breite+3.6)*Ze,s=(e.tiefe+3.6)*Ze,r=new W(new Ve(n,.24,s),rd);return r.position.set(e.origin[0],.12,e.origin[2]),r.receiveShadow=!0,t.add(r),is.add(t),t}om("bsc");var d_=om("msc"),od=new W(new Ve(9,.18,2.4),ad);od.position.set(0,.09,0);od.receiveShadow=!0;is.add(od);var dc=new ie({color:5149760,roughness:1,flatShading:!0}),p_=new ie({color:8018490,roughness:1}),f_=[[-26,-12],[-30,4],[-20,14],[26,-13],[31,3],[22,15],[-2,-17],[4,18],[-14,-18],[16,-18]];f_.forEach(([i,e],t)=>{let n=new Oe,s=new W(new $e(.22,.32,1.6,6),p_);s.position.y=.8,s.castShadow=!0;let r=1+t%3*.35;if(t%3===2){let a=new W(new kn(1.1*r,2.6*r,7),dc);a.position.y=1.6+1.1*r,a.castShadow=!0,n.add(a)}else{let a=new W(new Rt(1.35*r,0),dc);if(a.position.y=2.2+.5*r,a.castShadow=!0,n.add(a),t%3===1){let o=new W(new Rt(.8*r,0),dc);o.position.set(.7,1.8+.4*r,.3),o.castShadow=!0,n.add(o)}}n.add(s),n.position.set(i,0,e),n.rotation.y=t*1.7,is.add(n)});var lm=new ie({color:6199880,roughness:1,flatShading:!0});[[-62,-42,26],[55,-48,30],[-72,22,22],[66,28,24],[-6,-75,36],[-42,62,26],[48,60,22],[8,70,28]].forEach(([i,e,t])=>{let n=new W(new mn(t,10,7),lm);n.position.set(i,-t*.62,e),n.scale.y=.55,is.add(n)});var m_=new ie({color:10134197,roughness:1,flatShading:!0});[[-7,9,.5],[19,-9,.7],[-19,-10,.45],[3,-13,.6]].forEach(([i,e,t])=>{let n=new W(new Rt(t,0),m_);n.position.set(i,t*.55,e),n.rotation.set(t,i,e),n.castShadow=!0,is.add(n)});var g_=new Rt(.09,0),__=new Kt,pc=new Bi(g_,__,90);{let i=[16777215,16234452,15979342,13213951],e=new Pe,t=0;for(;t<90;){let n=(Math.random()-.5)*76,s=(Math.random()-.5)*52;Math.abs(n)<22&&Math.abs(s)<9||(e.makeScale(1,1+Math.random(),1),e.setPosition(n,.12,s),pc.setMatrixAt(t,e),pc.setColorAt(t,new de(i[t%i.length])),t++)}is.add(pc)}var zu=new ie({color:16777215,roughness:1,flatShading:!0,transparent:!0,opacity:.92}),cm=[];for(let i=0;i<6;i++){let e=new Oe,t=3+i%3;for(let n=0;n<t;n++){let s=1.6+Math.random()*2.2,r=new W(new Rt(s,0),zu);r.position.set(n*2.4-t,(Math.random()-.5)*.8,(Math.random()-.5)*1.6),r.scale.y=.55,e.add(r)}e.position.set((Math.random()-.5)*120,22+Math.random()*8,(Math.random()-.5)*80-10),e.userData.v=.25+Math.random()*.4,cm.push(e),Je.add(e)}var $i=new Oe;{let i=new W(new $e(.05,.06,.9,6),new ie({color:9070146,roughness:.9}));i.position.y=.45;let e=new W(new Lt(.55,.35,.32,2,.06),new ie({color:10405,roughness:.55}));e.position.y=1.02;let t=new W(new Qe(.34,.045),new ie({color:16053488}));t.position.set(0,1.06,.17);let n=new W(new Qe(.16,.11),new ie({color:14248523,side:mt}));n.position.set(.32,1.12,0),$i.add(i,e,t,n),$i.position.set(-3.4,.24,4.7),$i.rotation.y=.4,$i.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.userData.action="p0")}),Je.add($i)}var qi=new Oe;{let i=new W(new Lt(4.4,.22,1.5,2,.06),new ie({color:7033144,roughness:1}));i.position.y=.11,i.receiveShadow=!0,qi.add(i),qi.position.set(-4.2,.24,8.2),qi.traverse(e=>{e.isMesh&&(e.userData.action="minor")}),Je.add(qi)}var Hu=new Oe;qi.add(Hu);function hm(){Hu.clear();let i=[14964526,15979342,13213951,16777215,16234452,8373098];(I.minor||[]).forEach((e,t)=>{if(e)for(let n=0;n<3;n++){let s=new W(new $e(.02,.025,.28,5),new ie({color:5149760}));s.position.set(-1.85+t*.74,.34,-.4+n*.4);let r=new W(new Rt(.09,0),new Kt({color:i[t]}));r.position.set(-1.85+t*.74,.52,-.4+n*.4),s.userData.action="minor",r.userData.action="minor",Hu.add(s,r)}})}var ji=new Oe;{let i=new ie({color:10122576,roughness:.95}),e=new ie({color:7032627,roughness:.95}),t=new W(new Lt(2.6,1.9,1.9,2,.06),i);t.position.y=.95;let n=new W(Va(3,2.3,.75),new ie({color:3752282,roughness:.85,flatShading:!0,side:mt}));n.position.y=1.9;let s=new W(new Qe(.7,1.3),e);s.position.set(-.55,.66,.96);let r=new W(new Qe(.85,.55),new ie({color:2766160,roughness:.3,metalness:.3}));r.position.set(.6,1.2,.96);let a=Za("\u{1F6E0}\uFE0F","#0028a5");a.scale.set(1.2,.48,1),a.position.set(0,3.05,0),ji.add(t,n,s,r,a),ji.position.set(-19.5,.02,10.4),ji.rotation.y=.55,ji.traverse(o=>{o.isMesh&&(o.castShadow=!0),o.userData.action="bauhuette"}),Je.add(ji)}var br=new Oe;{let i=new ie({color:8227434,roughness:.95}),e=new ie({color:6187854,roughness:.95}),t=new W(new Lt(1.9,1.5,1.3,2,.05),i);t.position.y=.75;let n=new W(new Ve(2.15,.09,1.6),new ie({color:3752282,roughness:.85}));n.position.y=1.58,n.rotation.x=-.12;let s=new W(new Qe(.6,1.1),e);s.position.set(-.35,.57,.66);let r=Za("\u{1F9F0}","#0e8f7e");r.scale.set(1.05,.42,1),r.position.set(0,2.35,0),br.add(t,n,s,r),br.position.set(-24.2,.02,5.6),br.rotation.y=.9,br.traverse(a=>{a.isMesh&&(a.castShadow=!0),a.userData.action="geraete"}),Je.add(br)}function um(i,e,t,n,s,r){let a=new Float32Array(i*3);for(let h=0;h<i;h++)a[h*3]=(Math.random()-.5)*n,a[h*3+1]=s+Math.random()*(r-s),a[h*3+2]=(Math.random()-.5)*n;let o=new lt;o.setAttribute("position",new Gt(a,3));let c=new rr({size:e,color:t,transparent:!0,opacity:0,sizeAttenuation:!0,depthWrite:!1}),l=new oa(o,c);return Je.add(l),l}var v_=um(320,.5,16777215,220,28,90),fc=um(26,.35,16765286,46,.6,3.2),Ki=[],io=i=>1-Math.pow(1-i,3),y_=i=>i*i;var x_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function Hn(i,e,t=io,n=null){Ki.push({t:0,dur:i,fn:e,ease:t,onDone:n})}var mc=0,Gu=0,dm=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,gc=!!(window.claude&&typeof window.claude.complete=="function"),Hf="https://claude.ai/public/artifacts/f5f07577-cae4-4a98-9b67-fced673c88b3";async function Vu(i){return String(await window.claude.complete(i)).trim()}var Wu=null,ka=null;function Vn(i,e,t=1.6,n=null){if(ka){let a=Ki.indexOf(ka);a>=0&&Ki.splice(a,1)}let s=Nt.position.clone(),r=Wt.target.clone();Wt.enabled=!1,ka={t:0,dur:t,ease:x_,fn:a=>{Nt.position.lerpVectors(s,i,a),Wt.target.lerpVectors(r,e,a)},onDone:()=>{ka=null,Wt.enabled=!0,n&&n()}},Ki.push(ka)}function ld(i,e){let t=e||I.placed[I.mode][i.slot];if(i.schwerpunktwahl&&t&&t.sp&&q.schwerpunkte[t.sp])return new de(q.schwerpunkte[t.sp].farbe);let n=t&&t.thema?(Zi[i.slot]||[]).find(s=>s.id===t.thema):null;return n&&q.richtungen&&q.richtungen[n.r]?new de(q.gruppen[i.gruppe].farbe).lerp(new de(q.richtungen[n.r].farbe),.72):new de(q.gruppen[i.gruppe].farbe)}function Lu(i,e){let t=i.clone(),n=.85,s=.02;return e==="hell"&&t.lerp(new de(16777215),.45),e==="holz"&&(t.lerp(new de(9070146),.55),n=.95),e==="glas"&&(t.lerp(new de(10336473),.5),n=.28,s=.35),e==="backstein"&&(t.lerp(new de(10242613),.6),n=.92),e==="beton"&&(t.lerp(new de(12172740),.55),n=.6),new ie({color:t,roughness:n,metalness:s})}var wn=[];function $u(){let i=new ie({color:2766160,roughness:.25,metalness:.4,emissive:16763243,emissiveIntensity:0});return wn.push(i),i}var Gf=i=>i.clone().lerp(new de(1318972),.45),Ji=new Oe;Je.add(Ji);var Dt={},yc=i=>(i===0?0:.55+(i-1))*Sn+.24,ju=new Set(["901","902","903","904"]);function pm(i,e){return Math.abs(i.x-e.x)*2<i.w+e.w-.01&&Math.abs(i.z-e.z)*2<i.d+e.d-.01}function b_(i,e){if(i.pos.y===0)return!0;for(let t of q.slots){if(t.haus!==i.haus||t.slot===i.slot||!(t.pos.y===i.pos.y-1||t.form==="wing"&&i.pos.y<=2))continue;if((e?!!e[t.slot]:je(t.slot))&&pm(i.pos,t.pos))return!0}return!1}function M_(i,e,t){let n=e.pos.w*Ze,s=e.pos.d*Ze,r=e.pos.x>=0?-1:1;for(let a of[-.32,.32]){let o=new W(new $e(.02,.14,.55,4),t);o.rotation.y=Math.PI/4,o.position.set(r*(n/2-.18),-.27,a*s),i.add(o)}}function E_(i,e,t,n){let s=e.pos,r=s.w*Ze,a=s.d*Ze,o=s.h*Sn,c=((q.schwerpunkte||{})[t]||(q.richtungen||{})[t]||{}).farbe||"#ffffff",l=new ie({color:new de(c),roughness:.55}),h=Math.abs(s.z)<.01||s.z>=0?1:-1,u=new W(new Ve(r+.06,.1,.06),l);u.position.set(0,o-.16,h*(a/2+.02)),h<0&&(u.rotation.y=Math.PI),i.add(u);let d={DeNC:"rund",ekn:"rund",HEA:"gruen",klin:"gruen",SEOP:"glas",swo:"glas"}[t];if(d==="rund"){let p=new W(new _s(.16,.23,20),l);p.position.set(0,o*.84,h*(a/2+.02));let g=new W(new si(.17,20),$u());g.position.set(0,o*.84,h*(a/2+.014));for(let _ of[p,g])h<0&&(_.rotation.y=Math.PI),i.add(_)}else if(d==="gruen"){let p=Math.max(1,Math.round(s.w));for(let g=0;g<p;g++){let _=(g-(p-1)/2)*(r/p),f=new W(new Lt(.66,.14,.16,2,.04),l);f.position.set(_,o*.55-.62,h*(a/2+.1)),i.add(f);for(let m=0;m<3;m++){let v=new W(new Rt(.055,0),new Kt({color:[14964526,15979342,16777215][m]}));v.position.set(_+(m-1)*.18,o*.55-.5,h*(a/2+.1)),i.add(v)}}}else if(d==="glas"){let p=new W(new Qe(r*.82,.3),$u());p.position.set(0,o*.87,h*(a/2+.012));let g=new W(new Ve(r*.85,.05,.05),new ie({color:new de(c),metalness:.55,roughness:.35}));g.position.set(0,o*.72,h*(a/2+.03));for(let _ of[p,g])h<0&&(_.rotation.y=Math.PI),i.add(_)}}function S_(i,e,t){let n=e.pos.w*Ze,s=e.pos.d*Ze,r=yc(e.pos.y)-.24;if(r<.4)return;let a=new Oe;a.name="stuetzen";for(let[o,c]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let l=new W(new $e(.09,.11,r,8),t);l.position.set(o*(n/2-.18),-r/2,c*(s/2-.18)),a.add(l)}if(r>2.2)for(let o of[-1,1]){let c=new W(new Ve(n-.3,.09,.09),t);c.position.set(0,-r*.55,o*(s/2-.18)),a.add(c)}i.add(a)}function Va(i,e,t){let n=i/2,s=e/2,r=new lt,a=[-n,0,-s,n,0,-s,n,0,s,-n,0,s,-n,t,0,n,t,0],o=[0,1,5,0,5,4,3,4,5,3,5,2,0,4,3,1,2,5,0,3,2,0,2,1];return r.setAttribute("position",new Ae(a,3)),r.setIndex(o),r.computeVertexNormals(),r}function so(i,e={}){let t=e.state||I.placed[I.mode][i.slot]||{},n=t.stil||"klassisch",s=ld(i,e.state),r=u_(i.haus),a=new Oe,o=i.pos,c=o.w*Ze,l=o.d*Ze,h=o.h*Sn;i.form==="wing"&&(h=1.7*Sn);let u=Lu(s,n),d,p=(m,v,y,x=.09)=>new Lt(m,v,y,2,x),g=()=>{let m=r.dach?Gf(s).lerp(new de(r.dach),.6):Gf(s);return new ie({color:m,roughness:.8,flatShading:!0,side:mt})};if(i.form==="slab"||i.form==="step"){d=new W(p(c,h,l,.07),u),d.position.y=h/2,a.add(d);let m=new W(new Ve(c,Ga,l),uc.clone());m.position.y=-Ga/2+.02,m.userData.noShadow=!0,m.userData.nopick=!0,a.add(m);let v=new W(new Ve(c+.16,.16,l+.16),uc.clone());if(v.position.y=.08,v.receiveShadow=!0,a.add(v),i.form==="step"){let y=new ie({color:new de(r.holz),roughness:.9}),x=new W(new Qe(.92,1.5),new ie({color:5913894,roughness:.8}));x.position.set(0,h+.75,-l/2+.02),a.add(x);let E=new W(new mn(.05,8,6),new ie({color:14266942,metalness:.7,roughness:.35}));E.position.set(.3,h+.68,-l/2+.06),a.add(E);for(let A of[-1,1]){let D=new W(new $e(.055,.07,1.9,8),y);D.position.set(A*(c/2-.16),h+.95,l/2-.16),a.add(D)}let T=new W(Va(c*1.14,l*1.25,.42),g());T.position.y=h+1.9,a.add(T);for(let A=0;A<2;A++){let D=new W(new Ve(c*.55,h*(2-A)/3,.34),uc.clone());D.position.set(0,h*(2-A)/3/2,l/2+.17+A*.34),D.receiveShadow=!0,a.add(D)}}}else if(i.form==="roof"){d=new W(Va(c,l,h*.72),g()),a.add(d);let m=new W(p(.55,1.25,.55,.05),Lu(s,n));if(m.position.set(c*.28,h*.62,0),a.add(m),t.artefakt==="agent"){let v=new ie({color:10134197,metalness:.6,roughness:.35}),y=new W(new $e(.035,.05,1.35,6),v);y.position.set(-c*.26,h*.72+.62,0),a.add(y);let x=new W(new $e(.02,.02,.5,5),v);x.rotation.z=Math.PI/2,x.position.set(-c*.26,h*.72+1.05,0),a.add(x);let E=new W(new mn(.2,10,8,0,Math.PI*2,0,Math.PI*.4),new ie({color:15262938,metalness:.3,roughness:.4,side:mt}));E.rotation.x=Math.PI*.62,E.position.set(-c*.26,h*.72+.78,.16),a.add(E)}else if(t.artefakt==="app"){let v=Math.atan2(h*.72,l/2),y=new W(new Ve(1.05,.05,.7),new ie({color:1319498,roughness:.2,metalness:.45,emissive:2780372,emissiveIntensity:.18}));y.rotation.x=-v,y.position.set(-c*.24,h*.4,l*.26),a.add(y);let x=new W(new Ve(1.15,.03,.8),new ie({color:15921385,roughness:.6}));x.rotation.x=-v,x.position.set(-c*.24,h*.38,l*.26),a.add(x),wn.push(y.material)}}else if(i.form==="spire"){let m=new W(new kn(c*Ze*.42,h,4),g());m.rotation.y=Math.PI/4,m.position.y=h/2,a.add(m),d=m;let v=new W(new $e(.045,.045,1.5,6),new ie({color:2184,roughness:.4,metalness:.7}));v.position.y=h+.7,a.add(v);let y=new W(new Qe(1.1,.6),new ie({color:new de(r.akzent),side:mt,roughness:.7}));y.position.set(.58,h+1.15,0),y.name="flag",a.add(y)}else if(i.form==="lantern"){let m=new W(new $e(.06,.08,h,6),new ie({color:3752282,roughness:.6,metalness:.4}));m.position.y=h/2,a.add(m),d=m;let v=new W(new Hi(.28,0),new ie({color:16767370,emissive:16757575,emissiveIntensity:.15}));v.position.y=h+.15,v.name="lamp",a.add(v),wn.push(v.material)}else{d=new W(p(c,h,l,.1),u),d.position.y=h/2,a.add(d);let m=o.z>=0?1:-1,v=i.haus&&Math.abs(o.z)<.01?1:m,y=$u(),x=new ie({color:new de(r.rahmen),roughness:.7}),E=Math.max(1,Math.round(o.w)),T=h*.55;for(let A=0;A<E;A++){let D=(A-(E-1)/2)*(c/E),C=new W(new Qe(.8,1),x);C.position.set(D,T,v*(l/2+.008));let U=new W(new Qe(.64,.84),y);U.position.set(D,T,v*(l/2+.016));let H=new W(new Qe(.64,.035),x);H.position.set(D,T,v*(l/2+.022));let O=new W(new Qe(.035,.84),x);O.position.set(D,T,v*(l/2+.022));let J=new W(new Ve(.92,.06,.1),x);J.position.set(D,T-.56,v*(l/2+.04));for(let V of[C,U,H,O,J])v<0&&(V.rotation.y=Math.PI),a.add(V)}if(i.form==="bay"||i.form==="wing"){let A=new W(Va(c*1.06,l*1.06,.5*Sn*.5),g());A.position.y=h,a.add(A)}if(i.form==="tower")for(let[A,D]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let C=new W(p(.22,h,.22,.04),Lu(s.clone().lerp(new de(16777215),.25),n));C.position.set(A*(c/2-.08),h/2,D*(l/2-.08)),a.add(C)}}let _=i.schwerpunktwahl&&t.sp?t.sp:t.thema?((Zi[i.slot]||[]).find(m=>m.id===t.thema)||{}).r:null;if(_&&["box","bay"].includes(i.form)&&E_(a,i,_,r),["box","bay","wing"].includes(i.form)&&(i.kategorie==="Wahl"||i.kategorie==="Wahlpflicht")){let m=i.kategorie==="Wahlpflicht",v=Math.abs(o.z)<.01||o.z>=0?1:-1,y=new W(new Ve(.075,h*.86,.075),new ie({color:m?14263361:16777215,roughness:.45,metalness:m?.5:.05}));y.position.set(-(c/2-.02),h/2,v*(l/2-.02)),a.add(y)}if(["box","bay","tower"].includes(i.form)&&o.y>0){let m=new ie({color:new de(r.holz).lerp(new de(3752282),.35),roughness:.7,metalness:.15}),v=e.placedMap?!!e.placedMap.MA:je("MA"),y=b_(i,e.placedMap||null)||ju.has(i.slot)&&v;ju.has(i.slot)&&M_(a,i,m),y||S_(a,i,m)}a.traverse(m=>{m.isMesh&&!m.userData.noShadow&&(m.castShadow=!0,m.receiveShadow=!0)});let f=q.haeuser[i.haus];return a.position.set(f.origin[0]+o.x*Ze,yc(o.y),f.origin[2]+o.z*Ze),a.userData.slot=i.slot,a}function fm(i,e){if(i.getObjectByName("sparkle"))return;let t=new W(new Hi(.22,0),new ie({color:16765502,emissive:16757504,emissiveIntensity:.9}));t.name="sparkle";let n=e.pos.h*Sn;t.position.y=(e.form==="roof"||e.form==="spire",n+.6),i.add(t)}function w_(i){let e=i.getObjectByName("sparkle");e&&i.remove(e)}function T_(i,e){if(i.getObjectByName("pennant"))return;let t=new Oe;t.name="pennant";let n=e.pos.h*Sn,s=new W(new $e(.03,.03,.9,6),new ie({color:9070146,roughness:.8}));s.position.y=n+.45;let r=new W(new lt().setFromPoints?(()=>{let a=new lt;return a.setAttribute("position",new Ae([0,0,0,.55,-.12,0,0,-.24,0],3)),a.setIndex([0,1,2]),a.computeVertexNormals(),a})():new Qe(.5,.25),new ie({color:14263361,side:mt,roughness:.7}));r.position.set(.03,n+.85,0),r.name="pflag",t.add(s,r),t.position.set(e.pos.w*Ze*.38,0,e.pos.d*Ze*.38),i.add(t)}function A_(i,e){if(i.getObjectByName("flowerbox")||!["box","bay","wing","tower"].includes(e.form))return;let t=new Oe;t.name="flowerbox";let n=e.pos.d*Ze,s=e.pos.h*Sn,r=e.pos.z>=0?1:-1,a=new W(new Lt(.7,.16,.18,2,.04),new ie({color:9070146,roughness:.9}));a.position.set(0,s*.55-.45,r*(n/2+.1)),t.add(a),[14964526,15979342,13213951].forEach((o,c)=>{let l=new W(new Rt(.07,0),new Kt({color:o}));l.position.set((c-1)*.2,s*.55-.33,r*(n/2+.1)),t.add(l)}),i.add(t)}function R_(i,e){if(i.getObjectByName("upgrade"))return;let t=new Oe;t.name="upgrade";let n=e.pos.w*Ze,s=e.pos.d*Ze,r=e.pos.h*Sn,a=new ie({color:4020797,roughness:.85}),o=new ie({color:14263361,metalness:.75,roughness:.3}),c=new ie({color:5149760,roughness:1,flatShading:!0});if(["box","tower"].includes(e.form)){let l=e.pos.z>=0?1:-1,h=e.haus&&Math.abs(e.pos.z)<.01?1:l,u=Math.max(1,Math.round(e.pos.w));for(let d=0;d<u;d++){let p=(d-(u-1)/2)*(n/u);for(let g of[-1,1]){let _=new W(new Ve(.16,.98,.03),a);_.position.set(p+g*.52,r*.55,h*(s/2+.02)),h<0&&(_.rotation.y=Math.PI),t.add(_)}}}else if(e.form==="bay"||e.form==="wing")for(let l=0;l<5;l++){let h=new W(new Rt(.16+l%3*.05,0),c);h.position.set(n*.42,r*(.15+l*.18),s/2+.06),t.add(h)}else if(e.form==="slab"||e.form==="step")for(let l of[-1,1]){let h=new W(new Rt(.3,0),c);h.position.set(l*(n/2-.4),.3,s/2+.34),t.add(h)}else if(e.form==="roof"){let l=new W(new $e(.025,.025,.7,6),o);l.position.set(-n*.3,r*.72+.35,0);let h=new W(new kn(.14,.34,4),o);h.rotation.z=-Math.PI/2,h.position.set(-n*.3+.16,r*.72+.62,0),h.name="flag",t.add(l,h)}else{let l=new W(new mn(.14,10,8),o);l.position.y=e.pos.h*Sn+(e.form==="spire"?1.55:.5),t.add(l)}t.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),i.add(t)}function cd(i,e){let t=e.optionen&&(I.placed[I.mode][e.slot]||{}).opt||e.code,n=I.quests[e.slot]&&I.quests[e.slot].done;I.quiz[t]&&T_(i,e),n&&(fm(i,e),A_(i,e)),I.quiz[t]&&n&&R_(i,e)}var Mi=new Oe;Je.add(Mi);function lc(i){let e=I.quests[i.slot]||{};return!!(e.done&&(e.note||"").trim().length>=15)}function C_(){return Object.values(I.quiz).filter(Boolean).length+Object.values(I.quests).filter(i=>i&&i.done&&(i.note||"").trim().length>=15).length}function qu(){Mi.clear();let i=C_(),e=new ie({color:9070146,roughness:.9});if(i>=5){let t=new Oe,n=new W(new Lt(1.5,.1,.45,2,.03),e);n.position.y=.45;let s=new W(new Lt(1.5,.5,.08,2,.03),e);s.position.set(0,.72,-.2);let r=new W(new Ve(.08,.45,.4),e);r.position.set(-.6,.22,0);let a=r.clone();a.position.x=.6,t.add(n,s,r,a),t.position.set(0,.24,4.2),t.rotation.y=Math.PI,t.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),Mi.add(t)}if(i>=10){let t=new Oe,n=new W(new Ve(1.6,.06,1.1),new ie({color:1780816,roughness:.25,metalness:.5}));n.rotation.x=-.5,n.position.y=.7;let s=new W(new $e(.06,.08,.7,6),new ie({color:10134197}));s.position.y=.35,t.add(n,s),t.position.set(-4,.24,6),t.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),Mi.add(t)}if(i>=15){let t=new Oe,n=new W(new $e(.05,.07,5,8),new ie({color:14212326,roughness:.4,metalness:.6}));n.position.y=2.5;let s=new W(new Qe(1.4,.8),new ie({color:10405,side:mt}));s.position.set(.72,4.4,0),s.name="flag",t.add(n,s),t.position.set(4.5,.24,6),t.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),Mi.add(t)}if(i>=20){let t=new Oe,n=new W(new $e(.9,1,.4,14),new ie({color:12173519,roughness:.8,flatShading:!0}));n.position.y=.2;let s=new W(new $e(.78,.78,.06,14),new ie({color:7189465,roughness:.15,metalness:.2}));s.position.y=.4;let r=new W(new $e(.1,.14,.8,8),n.material);r.position.y=.7,t.add(n,s,r),t.position.set(0,.24,-5.2),t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),Mi.add(t)}if(i>=28){let t=new Oe,n=new ie({color:12442088,roughness:.15,metalness:.25,transparent:!0,opacity:.55}),s=new W(new Ve(2.2,1.2,1.5),n);s.position.y=.6;let r=new W(Va(2.3,1.6,.55),n);r.position.y=1.2;let a=new W(new Ve(1.7,.2,1),new ie({color:7033144,roughness:1}));a.position.y=.12,t.add(s,r,a),t.position.set(1.2,.24,8.4),Mi.add(t)}if(i>=40){let t=new Oe,n=new ie({color:9070146,roughness:.9});for(let[r,a]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let o=new W(new Ve(.12,1.8,.12),n);o.position.set(r*1.1,.9,a*.8),t.add(o)}for(let r=0;r<5;r++){let a=new W(new Ve(2.6,.06,.12),n);a.position.set(0,1.85,-.8+r*.4),t.add(a)}let s=new ie({color:5149760,roughness:1,flatShading:!0});[[-1.1,1.2,.8],[1.1,1.5,-.8],[0,1.9,0]].forEach(([r,a,o])=>{let c=new W(new Rt(.28,0),s);c.position.set(r,a,o),t.add(c)}),t.position.set(6.5,.24,5.6),t.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),Mi.add(t)}}var Xu=new Oe;Je.add(Xu);function Vf(i,e){let t=e?1:.72,n=new Oe,s=new ie({color:15262938,roughness:.9}),r=new ie({color:new de(i).lerp(new de(3752282),.35),roughness:.5,metalness:.3,flatShading:!0}),a=new W(new $e(1.15*t,1.25*t,1.5*t,14),s);a.position.y=.75*t,n.add(a);let o=new W(new mn(1.18*t,16,10,0,Math.PI*2,0,Math.PI*.52),r);o.position.y=1.5*t,n.add(o);let c=new W(new Ve(.28*t,1.05*t,.1),new ie({color:1317944,roughness:.4}));c.position.set(0,1.95*t,.82*t),c.rotation.x=-.62,n.add(c);let l=new W(new $e(.1*t,.14*t,1.15*t,10),new ie({color:10134197,metalness:.6,roughness:.3}));l.position.set(0,2.2*t,.55*t),l.rotation.x=-.7,n.add(l);let h=new W(new Qe(.5*t,.9*t),new ie({color:5913894,roughness:.85}));return h.position.set(0,.45*t,1.21*t),n.add(h),n}function Wf(i,e){let t=e?1:.72,n=new Oe,s=new ie({color:9070146,roughness:.9}),r=new ie({color:5149760,roughness:1,flatShading:!0});for(let[l,h]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let u=new W(new Ve(.12,2*t,.12),s);u.position.set(l*1.05*t,t,h*1.05*t),n.add(u)}let a=new W(new kn(1.8*t,.7*t,4),new ie({color:new de(i).lerp(new de(3752282),.25),roughness:.8,flatShading:!0}));a.rotation.y=Math.PI/4,a.position.y=2.3*t,n.add(a);let o=new W(new Lt(1.15*t,.09,.4*t,2,.03),s);o.position.y=.42*t,n.add(o);for(let l of[-1,1]){let h=new W(new Ve(.08,.4*t,.34*t),s);h.position.set(l*.45*t,.2*t,0),n.add(h)}for(let l of[-1,1]){let h=new W(new Lt(1.5*t,.2,.6*t,2,.05),new ie({color:7033144,roughness:1}));h.position.set(l*1.9*t,.1,.4*t),n.add(h);for(let u=0;u<4;u++){let d=new W(new Rt(.09*t,0),new Kt({color:u%2?new de(i):new de(16777215)}));d.position.set(l*1.9*t-.5*t+u*.34*t,.3,.4*t),n.add(d);let p=new W(new $e(.018,.02,.2,5),r);p.position.set(l*1.9*t-.5*t+u*.34*t,.2,.4*t),n.add(p)}}let c=new W(new Hi(.16*t,0),new ie({color:16767370,emissive:16757575,emissiveIntensity:.25}));return c.position.set(0,1.75*t,1.05*t),n.add(c),wn.push(c.material),n}function $f(i,e){let t=e?1:.72,n=new Oe,s=new ie({color:12442088,roughness:.12,metalness:.3,transparent:!0,opacity:.5}),r=new ie({color:new de(i),metalness:.6,roughness:.3}),a=new W(new Ve(2.4*t,1.9*t,2.4*t),s);a.position.y=.95*t,n.add(a);for(let[h,u]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let d=new W(new Ve(.09,1.9*t,.09),r);d.position.set(h*1.2*t,.95*t,u*1.2*t),n.add(d)}let o=new W(new Ve(2.6*t,.12,2.6*t),r);o.position.y=1.95*t,n.add(o);let c=new W(new $e(.5*t,.5*t,.06,12),new ie({color:15921385,roughness:.6}));c.position.y=.5*t,n.add(c);let l=new W(new $e(.06,.1,.5*t,8),r);l.position.y=.25*t,n.add(l);for(let h=0;h<3;h++){let u=h/3*Math.PI*2+.5,d=new W(new Lt(.3*t,.34*t,.3*t,2,.05),new ie({color:14263361,roughness:.8}));d.position.set(Math.cos(u)*.85*t,.17*t,Math.sin(u)*.85*t),n.add(d)}return n}function xc(){Xu.clear(),I.wzSeen||(I.wzSeen={frei:[],serious:[]});let i=[],e=ts();if(e.r&&q.richtungen[e.r]){let n={klin:Wf,ekn:Vf,swo:$f}[e.r];i.push({key:"bsc:"+e.r,x:-17.5,z:-8.5,rot:.5,mesh:n(q.richtungen[e.r].farbe,!1),name:L("wz_"+e.r)})}let t=ns();if(t.dom&&q.schwerpunkte[t.dom]){let n={DeNC:Vf,HEA:Wf,SEOP:$f}[t.dom];i.push({key:"msc:"+t.dom,x:20.5,z:-9,rot:-.5,mesh:n(q.schwerpunkte[t.dom].farbe,!0),name:L("wz_"+t.dom)})}for(let n of i)n.mesh.position.set(n.x,.24,n.z),n.mesh.rotation.y=n.rot,n.mesh.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)}),Xu.add(n.mesh),!Ot.active&&!I.wzSeen[I.mode].includes(n.key)&&(I.wzSeen[I.mode].push(n.key),it(),Ya(n.x,4,n.z,70,3),_t("\u{1F3DB} "+L("wz_neu")+" "+n.name),SND.fanfare())}var Gn=null,_n=null,I_=!1;function Wa(i){ss(),_n=i;let e=Ai(i);I_=e.ok,Gn=so(i,{state:{stil:"klassisch"}}),Gn.traverse(t=>{t.isMesh&&(t.castShadow=!1,t.receiveShadow=!1,t.material=new ie({color:e.ok?3066993:14241615,transparent:!0,opacity:.45,depthWrite:!1}))}),Je.add(Gn)}function ss(){Gn&&(Je.remove(Gn),Gn=null,_n=null)}function mm(i,e,t){let s=new mn(.09,5,4),r=new Kt({color:14208436,transparent:!0,opacity:.85}),a=new Bi(s,r,14),o=[],c=new Pe;for(let h=0;h<14;h++){let u=h/14*Math.PI*2;o.push(new M(Math.cos(u)*(1.2+Math.random()),.6+Math.random()*.8,Math.sin(u)*(1.2+Math.random()))),c.setPosition(i,e,t),a.setMatrixAt(h,c)}Je.add(a);let l=Array.from({length:14},()=>new M(i,e,t));Hn(.7,h=>{for(let u=0;u<14;u++){l[u].addScaledVector(o[u],.016),o[u].y-=.05;let d=1-h;c.makeScale(d,d,d),c.setPosition(l[u]),a.setMatrixAt(u,c)}a.instanceMatrix.needsUpdate=!0,r.opacity=.85*(1-h)},io,()=>{Je.remove(a),s.dispose(),r.dispose()})}function Ya(i,e,t,n=140,s=6){let r=new Qe(.16,.26),a=new Kt({side:mt,vertexColors:!1,transparent:!0}),o=new Bi(r,a,n),c=[10405,4156616,954238,14263361,14248523,6185166,16777215],l=[];for(let d=0;d<n;d++)o.setColorAt(d,new de(c[d%c.length])),l.push({p:new M(i,e,t),v:new M((Math.random()-.5)*s,4+Math.random()*5,(Math.random()-.5)*s),r:Math.random()*Math.PI,rs:(Math.random()-.5)*8});o.instanceColor&&(o.instanceColor.needsUpdate=!0),Je.add(o);let h=new Pe,u=new ln;Hn(2.6,d=>{for(let p=0;p<n;p++){let g=l[p];g.v.y-=.09,g.p.addScaledVector(g.v,.016),g.r+=g.rs*.016,u.set(g.r,g.r*.7,g.r*.3),h.makeRotationFromEuler(u),h.setPosition(g.p),o.setMatrixAt(p,h)}o.instanceMatrix.needsUpdate=!0,a.opacity=d>.75?1-(d-.75)/.25:1},d=>d,()=>{Je.remove(o),r.dispose(),a.dispose()})}function P_(i,e,t,n){let s=new _s(.42,.55,40),r=new Kt({color:16777215,transparent:!0,opacity:.75,side:mt,depthWrite:!1}),a=new W(s,r);a.rotation.x=-Math.PI/2,a.position.set(i,e+.04,t),Je.add(a),Hn(.55,o=>{let c=1+o*n;a.scale.set(c,c,1),r.opacity=.75*(1-o)},io,()=>{Je.remove(a),s.dispose(),r.dispose()})}function Za(i,e,t="#ffffff"){let n=document.createElement("canvas");n.width=256,n.height=96;let s=n.getContext("2d");s.font="800 44px Helvetica, Arial";let r=s.measureText(i).width+52;s.fillStyle=e,s.beginPath(),s.roundRect((256-r)/2,14,r,68,34),s.fill(),s.fillStyle=t,s.textAlign="center",s.textBaseline="middle",s.fillText(i,128,50);let a=new ar(n),o=new sr(new ms({map:a,transparent:!0,depthWrite:!1}));return o.scale.set(2.4,.9,1),o}function L_(i,e){let{haupt:t}=en(e),n=(e.pos.h||1)*Sn+.4;(t||[]).slice(0,3).forEach((s,r)=>{let a=rn[s];a&&setTimeout(()=>{let o=Za("+"+s,q.felder[a.feld].farbe);o.position.set(i.position.x+(r-1)*.7,i.position.y+n,i.position.z),Je.add(o);let c=o.position.y;Hn(1.5,l=>{o.position.y=c+l*2.1,o.material.opacity=l<.65?1:1-(l-.65)/.35},io,()=>{Je.remove(o),o.material.map.dispose(),o.material.dispose()})},240+r*200)})}var hd=70,D_=new Qe(.22,.22),gm=new Kt({color:13204285,side:mt,transparent:!0,opacity:.9}),Cr=new Bi(D_,gm,hd),F_=Array.from({length:hd},()=>({p:new M((Math.random()-.5)*70,Math.random()*18+2,(Math.random()-.5)*50),s:.4+Math.random()*.9,ph:Math.random()*6.28}));Je.add(Cr);Cr.visible=!1;var Ku={fruehling:{bg:13625079,grass:7976035,foliage:9424506,amb:16234452,ambFall:.35,sun:16773848,hemi:.8},sommer:{bg:12574965,grass:7319378,foliage:5149760,amb:null,ambFall:0,sun:16771524,hemi:.85},herbst:{bg:15260099,grass:10132052,foliage:13204285,amb:13204285,ambFall:.9,sun:16767392,hemi:.7},winter:{bg:14673646,grass:15330804,foliage:6191720,amb:16777215,ambFall:.5,sun:15659775,hemi:.65}},cc=new de(1317944);function Cs(){let i=Ku[I.season]||Ku.sommer,e=I.tod/100,t=Math.max(0,(e-.68)/.32),n=Math.PI*(.12+e*.82);sn.position.set(Math.cos(n)*40,Math.sin(n)*34+6,18),sn.intensity=Math.max(.05,Math.sin(Math.min(Math.PI,n))*2.2)*(1-t*.95),sn.color.set(i.sun).lerp(new de(16751198),Math.pow(Math.abs(e-.5)*2,2)*.6),am.intensity=i.hemi*(1-t*.75)+.12;let s=new de(i.bg).lerp(cc,t);Je.background=s,Je.fog.color.copy(s),vc.color.set(i.grass).lerp(cc,t*.55),dc.color.set(i.foliage).lerp(cc,t*.5),lm.color.set(i.grass).multiplyScalar(.82).lerp(cc,t*.6),zu.color.set(16777215).lerp(new de(3752282),t*.8),zu.opacity=I.season==="winter"?.98:.9,v_.material.opacity=Math.max(0,t-.15)*.95,fc.material.opacity=t>.4&&(I.season==="sommer"||I.season==="fruehling")?.9:0,pc.visible=I.season==="sommer"||I.season==="fruehling",wn.forEach(a=>a.emissiveIntensity=t>.25?.9:0),Cr.visible=!!i.amb,i.amb&&gm.color.set(i.amb),document.getElementById("todIcon").textContent=t>.3?"\u{1F319}":e>.45?"\u{1F324}\uFE0F":"\u{1F305}",document.querySelectorAll("#envRow .envbtn[data-season]").forEach(a=>a.classList.toggle("on",a.dataset.season===I.season));let r=document.getElementById("btnEnvAuto");r&&r.classList.toggle("on",!!I.envAuto),SND.ambientMode(I.sound?t>.45?"night":sn.intensity>.4?"day":"off":"off")}var Mt=new Oe;{let i=new ie({color:15251850,roughness:.9}),e=new ie({color:10405,roughness:.9}),t=new ie({color:3752282,roughness:.95}),n=new W(new Lt(.16,.42,.16,2,.05),t);n.position.set(-.11,.21,0);let s=n.clone();s.position.x=.11;let r=new W(new Lt(.46,.55,.3,2,.1),e);r.position.y=.68;let a=new W(new Lt(.11,.4,.11,2,.04),e);a.position.set(-.3,.72,0);let o=a.clone();o.position.x=.3;let c=new W(new mn(.2,12,10),i);c.position.y=1.12;let l=new ie({color:15975971,roughness:.5}),h=new W(new mn(.21,12,8,0,Math.PI*2,0,Math.PI*.55),l);h.position.y=1.17;let u=new W(new $e(.27,.27,.035,14),l);u.position.y=1.16,Mt.add(n,s,r,a,o,c,h,u),Mt.userData.legs=[n,s],Mt.userData.arms=[a,o],Mt.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),Mt.position.set(-5,.24,6),Je.add(Mt)}var Yu=null;function _m(i,e){let t=[];for(let n of["bsc","msc"]){let s=q.haeuser[n];t.push({cx:s.origin[0],cz:s.origin[2],hw:s.breite*Ze/2+1,hd:s.tiefe*Ze/2+1})}if(je("600")){let n=q.haeuser.msc,s=gt[600].pos;t.push({cx:n.origin[0]+s.x*Ze,cz:n.origin[2]+s.z*Ze,hw:s.w*Ze/2+.9,hd:s.d*Ze/2+.9})}for(let n=0;n<2;n++)for(let s of t){let r=i-s.cx,a=e-s.cz;Math.abs(r)<s.hw&&Math.abs(a)<s.hd&&(s.hd-Math.abs(a)<=s.hw-Math.abs(r)?e=s.cz+(a>=0?s.hd:-s.hd):i=s.cx+(r>=0?s.hw:-s.hw))}return[i,e]}var Se=i=>String(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function vm(i,e,t=!1){[i,e]=_m(i,e);let n=Mt.position.clone(),s=new M(i,.24,e),r=n.distanceTo(s);Mt.lookAt(s.x,.24,s.z),Yu={k:0},Hn(Math.min(2.2,.3+r*.09),a=>{Mt.position.lerpVectors(n,s,a),Mt.position.y=.24+Math.abs(Math.sin(a*r*2.2))*.09},a=>a,()=>{Yu=null,Mt.position.y=.24,Mt.userData.legs.forEach(a=>a.rotation.x=0),Mt.userData.arms.forEach(a=>a.rotation.x=0),t&&Hn(.9,a=>{Mt.position.y=.24+Math.abs(Math.sin(a*Math.PI*2))*.5,Mt.userData.arms.forEach((o,c)=>o.rotation.z=(c?1:-1)*Math.sin(a*Math.PI*4)*1.9)},a=>a,()=>Mt.userData.arms.forEach(a=>a.rotation.z=0))})}function ud(i){i&&i.traverse(e=>{e.geometry&&e.geometry.dispose&&e.geometry.dispose();let t=e.material;t&&(Array.isArray(t)?t:[t]).forEach(n=>{n.map&&n.map.dispose&&n.map.dispose(),n.dispose&&n.dispose();let s=wn.indexOf(n);s>=0&&wn.splice(s,1)})})}function ro(){wn.length=0,Object.keys(Dt).forEach(i=>{Ji.remove(Dt[i]),ud(Dt[i]),delete Dt[i]}),Object.keys(I.placed[I.mode]).forEach(i=>{let e=gt[i];if(!e)return;let t=so(e);cd(t,e),Ji.add(t),Dt[i]=t}),qu(),xc(),d_.visible=!0}function ym(i){for(let e of q.slots){if(e.haus!==i.haus||e.slot===i.slot||!je(e.slot))continue;(e.pos.y===i.pos.y+1||i.form==="wing"&&e.pos.y<=2)&&pm(e.pos,i.pos)&&wi(e.slot),ju.has(e.slot)&&i.slot==="MA"&&wi(e.slot)}}function ao(i){let e=Ai(i);if(!e.ok)return SND.err(),_t(e.reason||L("gesperrt")),!1;let t=Mv(),n={stil:Qa,sp:i.schwerpunktwahl?eo:null,opt:i.optionen?Ti:null,thema:Zi[i.slot]?wr:null,frage:i.slot==="BA"?Tr:null,artefakt:i.slot==="BA"?ja:null};I.placed[I.mode][i.slot]=n,it();let s=so(i);cd(s,i),Ji.add(s),Dt[i.slot]=s,ym(i),xc();let r=s.position.y;s.position.y=r+9;let a=s,o=Math.max(i.pos.w,i.pos.d)*Ze*.42,c=new Kt({color:660016,transparent:!0,opacity:.22,depthWrite:!1}),l=new W(new si(o,22),c);l.rotation.x=-Math.PI/2,l.position.set(s.position.x,r+.03,s.position.z),Je.add(l),Hn(.14,d=>l.scale.setScalar(.15+.85*d),io),Hn(.5+.15,()=>{},d=>d,()=>{Je.remove(l),l.geometry.dispose(),c.dispose()}),Hn(.5,d=>{a.position.y=r+10*(1-d)},y_,()=>{a.position.y=r;try{if(Hn(.22,d=>{let p=Math.sin(d*Math.PI);a.scale.set(1+p*.09,1-p*.14,1+p*.09)},d=>d,()=>a.scale.set(1,1,1)),Hn(.18,d=>{a.position.y=r+Math.sin(d*Math.PI)*.07},d=>d,()=>{a.position.y=r}),mm(s.position.x,r+.1,s.position.z),i.ects>=8&&P_(s.position.x,r,s.position.z,Math.max(i.pos.w,i.pos.d)*Ze*.9),L_(s,i),SND.thock(),dm||(mc=.22,Gu=.07),navigator.vibrate)try{navigator.vibrate(12)}catch{}}catch(d){console.error("juice",d)}xm()});let h=q.haeuser[i.haus];vm(h.origin[0]+i.pos.x*Ze+2.6,h.origin[2]+i.pos.z*Ze+4),ss();let{komp:u}=en(i);return Jt(),an([...u.fa||[],...u.ki||[],...u.fu||[]]),bv(t),I.onboarded?Mc(i.slot):(document.getElementById("coach").classList.remove("open"),i.slot!=="003"&&setTimeout(()=>{!I.onboarded&&!Ot.active&&(document.getElementById("obStart").textContent=L("tour_fertig"),Qt("onboard"))},1400)),!0}function N_(i){if(I.mode==="serious"&&!confirm(L("entfernen_confirm")))return;let e=q.slots.filter(n=>je(n.slot)&&(n.voraus||[]).includes(i));if(e.length){_t(L("grund_voraus")+e.map(n=>X(n.titel).split(",")[0]).slice(0,2).join(" \xB7 ")),SND.err();return}delete I.placed[I.mode][i],it();let t=Dt[i];t&&(mm(t.position.x,t.position.y+.2,t.position.z),SND.err(),Ji.remove(t),ud(t),delete Dt[i]),ym(gt[i]),xc(),Jt(),an(),Is()}function xm(){I.msSeen||(I.msSeen={frei:[],serious:[]});let i=I.msSeen[I.mode];for(let e of q.meilensteine)if(!i.includes(e.id)&&e.slots.every(t=>je(t))){i.push(e.id),it(),U_(e);break}}function U_(i){let e=q.haeuser[i.haus],t=e.origin[0],n=e.origin[2],s=i.id==="bsc_fertig"||i.id==="msc_fertig";Vn(new M(t+(i.haus==="bsc"?-17:17),12,26),new M(t,3.5,n),1.4,()=>{if(Ya(t,8,n,s?220:120,s?10:6),SND.fanfare(),s){let r=0,a=setInterval(()=>{Ya(t+(Math.random()-.5)*10,9+Math.random()*4,n+(Math.random()-.5)*6,80,4),SND.firework(),++r>=3&&clearInterval(a)},450)}vm(t,n+6.5,!0),setTimeout(()=>{document.getElementById("msEmoji").textContent=s?"\u{1F386}":"\u{1F389}",document.getElementById("msTitle").textContent=X(i.name),document.getElementById("msText").textContent=X(i.text),document.getElementById("milestone").classList.add("open")},s?1400:700)})}document.getElementById("msClose").onclick=()=>{document.getElementById("milestone").classList.remove("open"),!I.onboarded&&!Ot.active&&(document.getElementById("obStart").textContent=L("tour_fertig"),Qt("onboard"))};var Mr=new Ta,Si=new te,Ba=document.getElementById("tip"),Du=null;function Zu(i){let e=ci.getBoundingClientRect();Si.x=(i.clientX-e.left)/e.width*2-1,Si.y=-((i.clientY-e.top)/e.height)*2+1,Mr.setFromCamera(Si,Nt);let t=[...Object.values(Dt)];Gn&&t.push(Gn);let n=Mr.intersectObjects(t,!0).filter(r=>!r.object.userData.nopick);if(!n.length)return null;let s=n[0].object;for(;s&&!s.userData.slot;)s=s.parent;return s?s.userData.slot:null}function jf(i,e){let t=Dt[i];t&&t.traverse(n=>{n.isMesh&&n.material&&n.material.emissive&&!wn.includes(n.material)&&(n.material.emissive.setHex(e?1585262:0),n.material.emissiveIntensity=e?.35:0)})}ci.addEventListener("pointermove",i=>{if(Er)return;let e=Zu(i);if(e!==Du&&(jf(Du,!1),jf(e,!0)),Du=e,e&&!Ot.active){let t=gt[e];Ba.style.display="block",Ba.style.left=i.clientX+14+"px",Ba.style.top=i.clientY+14+"px";let n=I.quests[e];Ba.innerHTML=`<b>${At(t)}</b><br>${t.ects} ${L("ects")} \xB7 ${L("stufe")} ${t.stufe}${n&&n.done?" \xB7 \u2726":""}<br><span style="opacity:.72">${X(q.gruppen[t.gruppe].name)}</span>`,ci.style.cursor="pointer"}else Ba.style.display="none",ci.style.cursor="default"});var Er=null;ci.addEventListener("pointerdown",i=>{Er=[i.clientX,i.clientY],SND.unlock()});ci.addEventListener("pointerup",i=>{if(!Er)return;let e=Math.hypot(i.clientX-Er[0],i.clientY-Er[1]);if(Er=null,e>6)return;if(Et){let n=ci.getBoundingClientRect();Si.x=(i.clientX-n.left)/n.width*2-1,Si.y=-((i.clientY-n.top)/n.height)*2+1,Mr.setFromCamera(Si,Nt);let s=Mr.intersectObjects(Et.group.children,!0);for(let r of s){let a=r.object;for(;a&&!a.userData.kompId&&!a.userData.info;)a=a.parent;if(a&&a.userData.info){_t(X(a.userData.info)),SND.pick();return}if(a&&a.userData.kompId){let o=rn[a.userData.kompId];o&&(_t(`${o.id} \xB7 ${X(o.name)} \u2014 \xAB${X(o.ich)}\xBB`),SND.pick());return}}return}{let n=ci.getBoundingClientRect();Si.x=(i.clientX-n.left)/n.width*2-1,Si.y=-((i.clientY-n.top)/n.height)*2+1,Mr.setFromCamera(Si,Nt);let s=Mr.intersectObjects([$i,qi,ji,br,Ji],!0).filter(r=>!r.object.userData.nopick);if(s.length){let r=s[0].object,a=null;for(;r&&!a;)a=r.userData.action||null,r=r.parent;if(a==="p0"){k_(),SND.pick();return}if(a==="minor"){B_(),SND.pick();return}if(a==="bauhuette"){dd(),SND.pick();return}if(a==="geraete"){bm(),SND.pick();return}}}if(Gn&&_n){let n=Zu(i);if(n===_n.slot||n===null){ao(_n);return}}let t=Zu(i);t&&(Mc(t),SND.pick())});function k_(){let i=document.getElementById("p0List");i.innerHTML="",(q.vorstufe||[]).forEach((e,t)=>{let n=document.createElement("label");n.className="sw",n.style.alignItems="flex-start",n.innerHTML=`<input type="checkbox" ${I.p0[t]?"checked":""} style="margin-top:2px"> <span style="font-size:12.5px;line-height:1.45">${X(e.text)} <span style="color:#8b94ab">(${e.ids.join(", ")})</span></span>`,n.querySelector("input").onchange=s=>{I.p0[t]=s.target.checked,it(),an()},i.appendChild(n)}),Qt("p0")}function B_(){let i=document.getElementById("minorList");i.innerHTML="";for(let e=0;e<6;e++){let t=document.createElement("label");t.className="sw",t.innerHTML=`<input type="checkbox" ${I.minor[e]?"checked":""}> <span>${L("minor_sem").replace("{n}",e+1)}</span>`,t.querySelector("input").onchange=n=>{I.minor[e]=n.target.checked,it(),hm(),n.target.checked&&SND.quest()},i.appendChild(t)}Qt("minor")}var Fu={de:{ev:{PI:"Hake (1998, N\u22486500): Lernzuwachs ~verdoppelt (\u27E8g\u27E9 .23 \u2192 .48) \u2014 skaliert exzellent auf Grossveranstaltungen.",LC:"KI-Antworten live pr\xFCfen verbindet kritisches Denken mit AI Literacy \u2014 der KI-Output ist das \xDCbungsobjekt.",JT:"Kurzer Feedback-Loop vor der Sitzung: Die Lehre startet bei den h\xE4ufigsten Fehlkonzepten statt bei Folie 1.",AC:"Richmond & Nicholls (2025, UNSW, N=363): rubrikbasierte KI-Kritik f\xF6rdert Fach-, KI- und Informationskompetenz zugleich.",TB:"Kestin et al. (2025, Harvard-RCT): ~0.73 SD \xFCber aktivem Lernen \u2014 aber nur mit Hint-only-Design (nie die L\xF6sung verraten).",RS:"Simulierte Klient:innen erlauben risikofreies \xDCben (deliberate practice) mit weniger Performanzangst.",TSQ:"Erst einzeln, dann im Team: h\xF6here Leistung und weniger Pr\xFCfungsangst \u2014 in 200\u2013300er-Klassen erprobt.",PD:"Verankert die KI-Spielregeln (deklarieren, dokumentieren, verifizieren) als w\xF6chentliche Praxis statt Papier."},effort:"<b>Warum sich das anstrengender anf\xFChlt \u2014 und trotzdem mehr bringt:</b> Aktives Lernen f\xFChlt sich subjektiv m\xFChsamer an als eine brillante Vorlesung, f\xFChrt aber messbar zu mehr Lernen (Deslauriers et al., 2019). Und der Klassiker: Aktivierende Formate senken die Durchfallquoten deutlich (Freeman et al., 2014, Metaanalyse \xFCber 225 Studien).",lit_titel:"Literatur"},en:{ev:{PI:"Hake (1998, N\u22486,500): learning gains roughly doubled (\u27E8g\u27E9 .23 \u2192 .48) \u2014 scales excellently to large classes.",LC:"Checking AI answers live combines critical thinking with AI literacy \u2014 the AI output is the practice object.",JT:"A short pre-session feedback loop: teaching starts from the most common misconceptions, not from slide 1.",AC:"Richmond & Nicholls (2025, UNSW, N=363): rubric-based AI critique builds domain, AI and information literacy at once.",TB:"Kestin et al. (2025, Harvard RCT): ~0.73 SD above active learning \u2014 but only with a hint-only design (never reveal the solution).",RS:"Simulated clients enable risk-free deliberate practice with less performance anxiety.",TSQ:"Solo first, then as a team: higher performance and less test anxiety \u2014 proven in classes of 200\u2013300.",PD:"Anchors the AI ground rules (declare, document, verify) as weekly practice instead of paper."},effort:"<b>Why this feels harder \u2014 and still teaches more:</b> active learning subjectively feels more effortful than a brilliant lecture, yet measurably produces more learning (Deslauriers et al., 2019). And the classic: active formats substantially cut failure rates (Freeman et al., 2014, meta-analysis of 225 studies).",lit_titel:"References"},lit:`<ul style="font-size:11px;line-height:1.5">
    <li>Deslauriers, L., McCarty, L. S., Miller, K., Callaghan, K., & Kestin, G. (2019). Measuring actual learning versus feeling of learning in response to being actively engaged in the classroom. <i>PNAS, 116</i>(39), 19251\u201319257. <a href="https://doi.org/10.1073/pnas.1821936116" target="_blank" rel="noopener">doi.org/10.1073/pnas.1821936116</a></li>
    <li>Freeman, S., Eddy, S. L., McDonough, M., Smith, M. K., Okoroafor, N., Jordt, H., & Wenderoth, M. P. (2014). Active learning increases student performance in science, engineering, and mathematics. <i>PNAS, 111</i>(23), 8410\u20138415. <a href="https://doi.org/10.1073/pnas.1319030111" target="_blank" rel="noopener">doi.org/10.1073/pnas.1319030111</a></li>
    <li>Hake, R. R. (1998). Interactive-engagement versus traditional methods: A six-thousand-student survey of mechanics test data for introductory physics courses. <i>American Journal of Physics, 66</i>(1), 64\u201374. <a href="https://doi.org/10.1119/1.18809" target="_blank" rel="noopener">doi.org/10.1119/1.18809</a></li>
    <li>Kestin, G., Miller, K., Klales, A., Milbourne, T., & Ponti, G. (2025). AI tutoring outperforms in-class active learning: An RCT introducing a novel research-based design in an authentic educational setting. <i>Scientific Reports, 15</i>, 17458. <a href="https://doi.org/10.1038/s41598-025-97652-6" target="_blank" rel="noopener">doi.org/10.1038/s41598-025-97652-6</a></li>
    <li>Richmond, J. L., & Nicholls, K. (2025). Using generative AI to promote psychological, feedback, and artificial intelligence literacies in undergraduate psychology. <i>Teaching of Psychology</i>. <a href="https://doi.org/10.1177/00986283241287203" target="_blank" rel="noopener">doi.org/10.1177/00986283241287203</a></li>
    <li>Crouch, C. H., & Mazur, E. (2001). Peer Instruction: Ten years of experience and results. <i>American Journal of Physics, 69</i>(9), 970\u2013977. <a href="https://doi.org/10.1119/1.1374249" target="_blank" rel="noopener">doi.org/10.1119/1.1374249</a></li>
  </ul>`};function dd(){let i=Fu[I.lang]||Fu.de,e=["PI","LC","JT","AC","TB","RS","TSQ","PD"];document.getElementById("bhList").innerHTML=e.map(t=>{let n=q.baukasten.defs[t];return n?`<div class="bhrow"><b>${X(n.name)}</b><p>${X(n.kurz)}</p>${i.ev[t]?`<p class="bhev">\u{1F4CA} ${i.ev[t]}</p>`:""}</div>`:""}).join(""),document.getElementById("bhEffort").innerHTML=i.effort,document.getElementById("bhLit").innerHTML=`<div class="subhead" style="margin:10px 0 4px;font:700 10.5px var(--font);text-transform:uppercase;letter-spacing:.5px;color:#5b6478">${i.lit_titel}</div>`+Fu.lit,Qt("bauhuette")}var O_=[{amp:"g",name:"Microsoft 365 Copilot Chat (Basic)",de:"Allgemeiner KI-Zugang f\xFCr alle UZH-Angeh\xF6rigen, in der M365-Lizenz enthalten. Freigegeben f\xFCr \xF6ffentliche und interne Informationen; Verarbeitung in der Microsoft-Cloud (EU), Inhalte werden nicht f\xFCrs Modelltraining verwendet. Eigene Agents: derzeit nur eingeschr\xE4nkt verl\xE4sslich.",en:"General AI access for all UZH members, included in the M365 licence. Approved for public and internal information; processed in the Microsoft cloud (EU), content is not used for model training. Own agents: currently only partially reliable."},{amp:"y",name:"KlickerUZH + AI Buddy (askUZH)",de:"Kursbezogene Chatbots, KI-Feedback und KI-generierte \xDCbungsinhalte; Lehrende richten Bots im Self-Service ein und geben sie frei. Public Beta ab HS26; Zugang \xFCber Kurs-Login, nutzungsabh\xE4ngige Kosten.",en:"Course-linked chatbots, AI feedback and AI-generated practice content; teachers configure and release bots via self-service. Public beta from autumn 2026; access via course login, usage-based costs."},{amp:"y",name:"OLAT-KI-Angebot",de:"Dialog mit freigegebenen OLAT-Kursinhalten (Materialien, Quizzes). \xDCbergangsl\xF6sung ab HS26, offizielle OLAT-Integration ab FS27 geplant \u2014 wichtig f\xFCr die Skalierung, weil alle Fakult\xE4ten OLAT nutzen.",en:"Dialogue with released OLAT course content (materials, quizzes). Interim solution from autumn 2026, official OLAT integration planned for spring 2027 \u2014 key for scaling, as all faculties use OLAT."},{amp:"y",name:"BaltiBot",de:"Unterst\xFCtzt Studienprogrammverantwortliche ab Sommer 2026 bei der Orientierung im Studienprogrammentwicklungs-Prozess (ISSP) \u2014 auf Basis einer kuratierten Dokumentensammlung.",en:"From summer 2026, supports programme directors in navigating the programme-development process (ISSP), based on a curated document collection."},{amp:"y",name:"EducationAI",de:"Intern getestete Anwendung f\xFCr Lehrende: greift auf die Teaching Tools UZH zu und unterst\xFCtzt Planung und Weiterentwicklung der Lehre (DPA mit dem LLM-Anbieter).",en:"Internally tested application for teachers: draws on the UZH Teaching Tools and supports planning and developing courses (DPA with the LLM provider)."},{amp:"r",name:"M365 Copilot Premium \xB7 GitHub Copilot",de:"Nur f\xFCr Mitarbeitende mit kostenpflichtiger Zusatzlizenz. Ein studentischer Zugang zu einer KI-Entwicklungsumgebung (agentische KI, Vibe Coding) ist noch offen \u2014 f\xFCr datennahe Profile relevant.",en:"Staff only, with a paid add-on licence. Student access to an AI development environment (agentic AI, vibe coding) is still open \u2014 relevant for data-oriented profiles."}],qf={de:"<b>Spielregeln f\xFCr alle Werkzeuge:</b> Studierende d\xFCrfen nicht zu kostenpflichtigen Tools oder Tools mit pers\xF6nlicher Registrierung verpflichtet werden. Informationsklassen beachten: Pr\xFCfungen und akademische Arbeiten gelten als <b>vertraulich</b>, bestimmte psychologische Forschungs- und Klientendaten als <b>geheim</b> \u2014 sie geh\xF6ren in kein nicht daf\xFCr freigegebenes KI-System. Nicht von der UZH bereitgestellte Tools nur mit \xF6ffentlichen Informationen verwenden.",en:"<b>Ground rules for all tools:</b> students must not be required to use paid tools or tools needing personal registration. Mind the information classes: examinations and academic papers are <b>confidential</b>, certain psychological research and client data are <b>secret</b> \u2014 they belong in no AI system not approved for that class. Tools not provided by UZH may only be used with public information."};function bm(){let i={g:"\u{1F7E2}",y:"\u{1F7E1}",r:"\u{1F534}"};document.getElementById("gsList").innerHTML=O_.map(e=>`<div class="bhrow"><b>${i[e.amp]} ${Se(e.name)}</b><p>${I.lang==="de"?e.de:e.en}</p></div>`).join(""),document.getElementById("gsRegeln").innerHTML=qf[I.lang]||qf.de,document.getElementById("gsQuelle").textContent=I.lang==="de"?"Quelle: KI-im-Curriculum-Kompass UZH (Ochsner, 2026), Stand Juli 2026 \u2014 Angaben \xE4ndern sich laufend.":"Source: UZH AI-in-the-Curriculum Compass (Ochsner, 2026), as of July 2026 \u2014 details change continuously.",Qt("geraete")}window.addEventListener("keydown",i=>{let e=i.target&&(i.target.tagName==="INPUT"||i.target.tagName==="TEXTAREA");if(i.key==="Enter"&&_n&&!e&&ao(_n),i.key==="Escape"){if(Et){to();return}if(document.getElementById("milestone").classList.contains("open")){document.getElementById("msClose").click();return}document.getElementById("tutor").classList.remove("open"),ss(),Is(),document.querySelectorAll(".modal.open").forEach(n=>n.classList.remove("open"))}});var hc=document.getElementById("planList"),Wn=null;function z_(i){return je(i.slot)?"built":Ai(i).ok?"avail":"locked"}function bc(){for(let i of["bsc","msc"])for(let e of q.bauplan[i])for(let t of e.slots){let n=gt[t];if(!je(t)&&Ai(n).ok)return t}return null}function Jt(){let i=Ot.active?null:bc(),e=document.createDocumentFragment();for(let s of["bsc","msc"]){let r=document.createElement("div");r.className="semblock",r.innerHTML=`<div class="semhead" style="font-size:12px;color:var(--blue)">${s==="bsc"?"\u{1F3E0} "+L("haus_bsc"):"\u{1F3F0} "+L("haus_msc")}<span>${An(s)}/120 ${L("ects")}</span></div>`,e.appendChild(r);for(let a of q.bauplan[s]){if(!a.slots.length)continue;let o=a.slots.filter(l=>je(l)).length,c=document.createElement("div");c.className="semblock",c.innerHTML=`<div class="semhead"><span>${L("sem")} ${a.sem} \xB7 ${a.hs?L("hs"):L("fs")}</span><span class="semprog">${o}/${a.slots.length}</span></div>`;for(let l of a.slots){let h=gt[l],u=z_(h),d=document.createElement("button");d.className="chip "+(u==="built"?"built":u==="locked"?"locked":""),Wn===l&&d.classList.add("sel"),l===i&&d.classList.add("next");let p=I.quests[l],g="#"+ld(h).getHexString(),_=h.kategorie==="Wahlpflicht"?`<span class="ckat wp" title="${L("kat_wahlpflicht")}">WP</span>`:h.kategorie==="Wahl"?`<span class="ckat" title="${L("kat_wahl")}">W</span>`:"";d.innerHTML=`<span class="cdot" style="background:${g}"></span>
          <span class="cname">${At(h)}</span>
          ${_}
          ${l===i?`<span class="nextbadge">\u{1F528} ${L("naechstes")}</span>`:""}
          ${I.quiz[Lr(h)]?'<span class="quest-star" title="Quiz \u2713">\u{1F6A9}</span>':""}
          ${p&&p.done?'<span class="quest-star">\u2726</span>':""}
          ${u==="built"?'<span class="tick">\u2714</span>':I.mode==="serious"&&I.bestanden[l]?'<span class="tick">\u2611</span>':""}
          <span class="cects">${h.ects}</span>`,d.onclick=()=>{Qi(l)},c.appendChild(d)}e.appendChild(c)}}let t=hc.scrollTop;hc.innerHTML="",hc.appendChild(e),hc.scrollTop=t,document.getElementById("planHint").textContent=I.mode==="serious"?"\u2611 = "+L("bestanden"):"",document.getElementById("planLegende").textContent=L("legende");let n=document.getElementById("nextCta");n&&(i&&!Ot.active?(n.textContent=`${L("cta_naechster")} ${At(gt[i]).split(",")[0]}`,n.title=At(gt[i]),n.onclick=()=>{Qi(i)},n.style.visibility="visible"):n.style.visibility="hidden")}function An(i){return q.slots.filter(e=>e.haus===i&&je(e.slot)).reduce((e,t)=>{let n=I.placed[I.mode][t.slot],s=n&&n.opt&&Ft[n.opt]?Ft[n.opt].ects:t.ects;return e+s},0)}function Qi(i){Et&&to(),Wn=i;let e=gt[i];window.innerWidth<=1080&&(document.getElementById("panelL").classList.remove("open"),document.getElementById("panelR").classList.remove("open")),SND.pick(),!je(i)&&!Ot.active?Wa(e):ss(),Mc(i),Jt();let t=q.haeuser[e.haus],n=new M(t.origin[0]+e.pos.x*Ze,yc(e.pos.y)+1,t.origin[2]+e.pos.z*Ze),s=Nt.position.clone().sub(Wt.target).normalize().multiplyScalar(Math.min(30,Nt.position.distanceTo(n)+7));Vn(n.clone().add(s),n,.9)}var Ju=i=>Math.min(i,8);function hi(){let i={},e={};q.kompetenzen.forEach(t=>{i[t.id]=0,e[t.id]=0});for(let t of q.slots){let n=je(t.slot),s=en(t),r=nm(t),a=(o,c)=>((o||[]).includes(c)?2:1)*Ju(t.ects);for(let o of[...r.komp.fa||[],...r.komp.ki||[],...r.komp.fu||[]])o in e&&(e[o]+=a(r.haupt,o));if(n)for(let o of[...s.komp.fa||[],...s.komp.ki||[],...s.komp.fu||[]])o in e&&(i[o]+=a(s.haupt,o))}return(q.vorstufe||[]).forEach((t,n)=>{I.p0&&I.p0[n]&&t.ids.forEach(s=>{e[s]&&(i[s]=Math.min(e[s],i[s]+.025*e[s]))})}),{score:i,max:e}}var Rs=null,$a="profil",Nu=[{ids:["Fa1","Fa8","Fa9"],name:{de:"Fachwissen &|Transfer",en:"Knowledge &|transfer"},farbe:"#1a3e8f"},{ids:["Fa2","Fa3","Fa5"],name:{de:"Methoden, Daten|& Diagnostik",en:"Methods, data|& diagnostics"},farbe:"#1a3e8f"},{ids:["Fa4","Fa6","Fa7","Fa10"],name:{de:"Denken, Ethik &|Kommunikation",en:"Thinking, ethics|& communication"},farbe:"#1a3e8f"},{ids:["KI1","KI2","KI3"],name:{de:"Mit KI arbeiten|& gestalten",en:"Working & creating|with AI"},farbe:"#0e8f7e"},{ids:["KI4","KI5","KI6"],name:{de:"KI verstehen, pr\xFCfen|& verantworten",en:"Understanding, auditing|& owning AI"},farbe:"#0e8f7e"},{ids:["Fu1","Fu2","Fu3"],name:{de:"Future Skills|(mit & ohne KI)",en:"Future skills|(with & without AI)"},farbe:"#4a90d9"}];function Mm(i,e,t=210,n=null){let s=t/2,r=t*.315,a=Nu.length,o=(_,f)=>{let m=-Math.PI/2+_/a*Math.PI*2;return[s+Math.cos(m)*f,s+Math.sin(m)*f]},c="";for(let _ of[.33,.66,1])c+=`<polygon points="${[...Array(a)].map((f,m)=>o(m,r*_).join(",")).join(" ")}" fill="none" stroke="#dbe1ef" stroke-width="1"/>`;let l="",h="";Nu.forEach((_,f)=>{let[m,v]=o(f,r);l+=`<line x1="${s}" y1="${s}" x2="${m}" y2="${v}" stroke="#dbe1ef" stroke-width="1"/>`;let[y,x]=o(f,r+13),E=X(_.name).split("|"),T=x-(E.length-1)*4.5+(f===0?-3:x>s?5:0);h+=`<text x="${y}" y="${T}" font-size="7.5" font-weight="700" fill="${_.farbe}" text-anchor="middle" dominant-baseline="middle">`+E.map((A,D)=>`<tspan x="${y}" dy="${D?9:0}">${A.replace(/&/g,"&amp;")}</tspan>`).join("")+"</text>"});let u=Nu.map(_=>{let f=_.ids.reduce((v,y)=>v+(i[y]||0),0),m=_.ids.reduce((v,y)=>v+(e[y]||0),0);return m?f/m:0}),d=u.map((_,f)=>o(f,Math.max(.03,_)*r).join(",")).join(" "),p=u.map((_,f)=>{let[m,v]=o(f,Math.max(.03,_)*r);return`<circle cx="${m}" cy="${v}" r="2.6" fill="#0028a5"/>`}).join(""),g=n&&n.length===a?`<polygon points="${n.map((_,f)=>o(f,Math.max(.03,Math.min(1,_))*r).join(",")).join(" ")}" fill="none" stroke="#b3831d" stroke-width="1.8" stroke-dasharray="5 4" stroke-linejoin="round"/>`:"";return`<svg viewBox="0 0 ${t} ${t}" style="width:100%;max-width:230px;display:block;margin:2px auto 6px">
    ${c}${l}
    ${g}
    <polygon points="${d}" fill="rgba(0,40,165,.16)" stroke="#0028a5" stroke-width="2" stroke-linejoin="round"/>
    ${p}${h}</svg>`}function H_(){let i=[];for(let n of["bsc","msc"])for(let s of q.bauplan[n]){if(!s.slots.length&&n==="bsc"&&s.sem===2){i.push({lbl:"B2",fa:0,ki:0,fu:0});continue}let r={lbl:(n==="bsc"?"B":"M")+s.sem,fa:0,ki:0,fu:0};for(let a of s.slots){if(!je(a))continue;let o=gt[a],{komp:c}=en(o);r.fa+=(c.fa||[]).length*o.ects,r.ki+=(c.ki||[]).length*o.ects,r.fu+=(c.fu||[]).length*o.ects}i.push(r)}let e=Math.max(1,...i.map(n=>n.fa+n.ki+n.fu)),t=n=>{let s=r=>Math.round(r/e*100);return`<div class="vbar" title="${n.lbl}">
      <span class="vseg" style="height:${s(n.fu)}%;background:${q.felder.fu.farbe}"></span>
      <span class="vseg" style="height:${s(n.ki)}%;background:${q.felder.ki.farbe}"></span>
      <span class="vseg" style="height:${s(n.fa)}%;background:${q.felder.fa.farbe}"></span>
    </div>`};return`<div class="kfeld" style="margin-top:14px">${L("verlauf_titel")}</div>
    <div class="verlauf">${i.map(t).join("")}</div>
    <div class="verlauf-lbl">${i.map(n=>`<span>${n.lbl}</span>`).join("")}</div>`}function G_(i){let e=ts(),t=ns(),n=e.r?`${q.richtungen[e.r].icon} <b style="color:${q.richtungen[e.r].farbe}">${X(q.richtungen[e.r].kurz)}</b>`:`<span style="color:#8b94ab">${L("richtung_keine")}</span>`,s=t.total?Object.entries(t.counts).filter(([,c])=>c>0).map(([c,l])=>`<b style="color:${q.schwerpunkte[c].farbe}">${c} ${l}</b>`).join(" \xB7 ")+(t.dom?"":` <span style="color:#8b94ab">(${L("msc_mix")})</span>`):'<span style="color:#8b94ab">\u2014</span>',r=Xi(),a=Rr(),o=r||a?`<br>BA: ${r?`${((q.baFormen||{})[r.form]||{}).icon||""} ${Se(X(r.name))}`:""}${a?` \xB7 ${a.icon} ${Se(X(a.name))}`:""}`:"";return`<div style="border:1.5px solid #dbe1ef;border-radius:10px;padding:7px 10px;margin:0 4px 8px;font-size:11px;line-height:1.6">
    <b style="font-size:11.5px">\u{1F9ED} ${L("richtung_titel")}</b><br>
    ${L("richtung_bsc")}: ${n}<br>
    ${L("richtung_msc")}: ${s}${o}${i?"":`<br><span style="color:#8b94ab;font-size:10px">${L("msc_dom_hint")}</span>`}
  </div>`}function V_(i){if(!i.wahl)return"";let e=ts(),t=ns(),n=[];if(i.wahl.r&&q.richtungen[i.wahl.r]){let a=e.r===i.wahl.r;n.push({ok:a,txt:`BSc: ${X(q.richtungen[i.wahl.r].kurz)}`,col:q.richtungen[i.wahl.r].farbe})}if(i.wahl.sp&&q.schwerpunkte[i.wahl.sp]){let a=(t.counts[i.wahl.sp]||0)>=3;n.push({ok:a,txt:`MSc: ${i.wahl.sp}`,col:q.schwerpunkte[i.wahl.sp].farbe})}if(i.wahl.wp&&Ft[i.wahl.wp]){let a=As()===i.wahl.wp;n.push({ok:a,txt:X(Ft[i.wahl.wp].titel),col:"#b3831d"})}let s=Xi();if(s&&(s.pfade||[]).includes(i.id)&&n.push({ok:!0,txt:L("ba_chip"),col:"#0028a5"}),!n.length)return"";let r=n.every(a=>a.ok);return`<div style="display:flex;flex-wrap:wrap;gap:4px;align-items:center;margin:4px 0 2px;font-size:10px">
    <span style="color:#5b6478;font-weight:700">${r?"\u2713 "+L("passung_ok"):L("passung_titel")}</span>
    ${n.map(a=>`<span style="border:1px solid ${a.col};color:${a.ok?"#fff":a.col};background:${a.ok?a.col:"transparent"};border-radius:999px;padding:1px 7px">${a.ok?"\u2713 ":""}${Se(a.txt)}</span>`).join("")}
  </div>`+(i.wahl.hinweis&&!r?`<p style="font-size:10px;color:#8b94ab;margin:2px 0 0">${X(i.wahl.hinweis)}</p>`:"")}var Xf={hoch:{icon:"\u25CF\u25CF\u25CF",farbe:"#0e8f7e"},mittel:{icon:"\u25CF\u25CF\u25CB",farbe:"#b3831d"},tief:{icon:"\u25CF\u25CB\u25CB",farbe:"#8b94ab"}};function W_(i){let e=i.stelle;if(!e)return"";let t=Xf[e.lohnQ]||Xf.mittel,n=s=>`<ul style="margin:2px 0 0;padding-left:16px">${s.map(r=>`<li style="margin:2px 0">${Se(X(r))}</li>`).join("")}</ul>`;return`<details class="stelle"><summary>\u{1F4BC} ${L("stelle_titel")}: <b>${Se(X(e.titel))}</b></summary>
    <div class="stellebody">
      <div class="srow"><span>${L("stelle_pensum")}</span><div>${Se(X(e.pensum))}</div></div>
      <div class="srow"><span>${L("stelle_wo")}</span><div>${Se(X(e.wo))}</div></div>
      <div class="srow"><span>${L("stelle_aufgaben")}</span><div>${n(e.aufgaben)}</div></div>
      <div class="srow"><span>${L("stelle_anforderungen")}</span><div>${n(e.anforderungen)}</div></div>
      <div class="srow"><span>${L("stelle_lohn")}</span><div>${Se(X(e.lohn))}
        <div class="sq" style="color:${t.farbe}" title="${Se(X(e.lohnBeleg))}">${t.icon} ${L("lohnq_"+e.lohnQ)} \u2014 ${Se(X(e.lohnBeleg))}</div></div></div>
      <div class="srow"><span>${L("stelle_wann")}</span><div>${Se(X(e.wann))}</div></div>
    </div></details>`}function $_(i){if(!i.wahl)return null;let e=ts(),t=ns(),n=Xi(),s=0,r=0;return i.wahl.r&&(s++,e.r===i.wahl.r&&r++),i.wahl.sp&&(s++,r+=Math.min(1,(t.counts[i.wahl.sp]||0)/4)),i.wahl.wp&&(s+=.7,As()===i.wahl.wp&&(r+=.7)),n&&s>0&&(s+=.7,(n.pfade||[]).includes(i.id)&&(r+=.7)),s?r/s:null}function oo(i,e){let t=q.kompetenzen.map(g=>g.id),n=t.map(g=>e[g]||0),s=t.map(g=>i.w[g]||0),r=n.reduce((g,_)=>g+_,0)/n.length,a=s.reduce((g,_)=>g+_,0)/s.length,o=0,c=0,l=0;for(let g=0;g<n.length;g++){let _=n[g]-r,f=s[g]-a;o+=_*f,c+=_*_,l+=f*f}let u=((c&&l?o/(Math.sqrt(c)*Math.sqrt(l)):0)+1)/2,d=$_(i),p=d===null?u:.62*d+.38*u;return Math.max(0,Math.min(100,Math.round(p*100)))}var Oa=null;function j_(i){if(!Oa){Oa={};for(let e of q.slots){let{komp:t}=en(e);for(let n of[...t.fa||[],...t.ki||[],...t.fu||[]])Oa[n]=Math.max(Oa[n]||0,e.stufe)}}return Oa[i]||0}function pd(i){return i.ziel?Object.entries(i.ziel).map(([e,t])=>({id:e,ziel:Math.min(t,j_(e)),ist:es(e)})).filter(e=>e.ist<e.ziel).sort((e,t)=>t.ziel-t.ist-(e.ziel-e.ist)):[]}function _c(){let{score:i,max:e}=hi(),t={};q.kompetenzen.forEach(f=>t[f.id]=e[f.id]?i[f.id]/e[f.id]:0);let n=document.getElementById("profilList"),s=`<p style="font-size:11px;color:#5b6478;margin:2px 6px 6px;line-height:1.45">${L("karriere_info")}</p>`;s+=G_(!1);let r={};(window.KARRIERE.pfade||[]).forEach(f=>r[f.id]=oo(f,t));let a=Object.values(r),o=Math.max(1,...a),c=[...window.KARRIERE.pfade||[]].sort((f,m)=>r[m.id]-r[f.id]),l=5,h=xr?[]:c.slice(l),u=xr?c:c.slice(0,l);if(bi&&!xr){let f=h.find(m=>m.id===bi);f&&(h=h.filter(m=>m.id!==bi),u=[...u,f].sort((m,v)=>r[v.id]-r[m.id]))}for(let f of u){let m=Object.values(f.w).reduce((C,U)=>C+U,0),v=Math.round(Object.entries(f.w).reduce((C,[U,H])=>C+H*(t[U]||0),0)/m*100),y=r[f.id],x=y>=o-1&&a.filter(C=>C>=o-1).length<=3,E=q.slots.filter(C=>!je(C.slot)).map(C=>{let{komp:U,haupt:H}=en(C),J=[...U.fa||[],...U.ki||[],...U.fu||[]].reduce((V,Q)=>V+(f.w[Q]||0)*((H||[]).includes(Q)?2:1),0);return{s:C,v:J,ok:Ai(C).ok}}).filter(C=>C.v>0).sort((C,U)=>U.ok-C.ok||U.v-C.v).slice(0,3),T=pd(f),A=f.ziel?`<details style="margin:4px 0 0"><summary style="cursor:pointer;font:700 10.5px var(--font);color:#5b6478">\u{1F3AF} ${L("soll_titel")}</summary>
      ${T.length?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin:4px 0"><span style="font-size:10px;color:#5b6478">${L("gap_titel")}:</span>${T.map(C=>{let U=rn[C.id],H=U?q.felder[U.feld]:null;return`<span style="font-size:10px;border:1px solid ${H?H.farbe:"#b9c2d9"};color:${H?H.farbe:"#5b6478"};border-radius:999px;padding:1px 7px" title="${U?Se(X(U.name)):""}">${C.id} ${C.ist}\u2192${C.ziel}</span>`}).join("")}</div>`:`<p style="font-size:10.5px;color:var(--ok);margin:4px 0">\u2713 ${L("gap_ok")}</p>`}</details>`:"",D=f.roadmap&&f.roadmap.length?`<details style="margin:3px 0 0"><summary style="cursor:pointer;font:700 10.5px var(--font);color:#5b6478">\u{1F680} ${L("roadmap_titel")}</summary>
      <ol style="font-size:10.5px;line-height:1.5;padding-left:16px;margin:4px 0">${f.roadmap.map(C=>`<li style="margin:3px 0"><b>${X(C.t)}</b> \u2014 ${X(C.d)}</li>`).join("")}</ol></details>`:"";s+=`<div class="pfad${x?" toppfad":""}" data-detail="${f.id}">
      <div class="phead"><span>${f.icon}</span><span>${X(f.name)}</span><span class="pct" title="${L("fit_hint")}">${y}%</span></div>
      <div class="phint">${X(f.hint)}</div>
      <div class="track" title="${L("fit_hint")}"><div class="fill" style="width:${y}%;background:linear-gradient(90deg,#0e8f7e,#0028a5)"></div></div>
      <div class="pmeta">${L("fit_label")}: <b>${y}%</b> \xB7 ${L("fortschritt_label")}: ${v}%</div>
      ${V_(f)}
      ${W_(f)}
      ${A}
      ${D}
      ${E.length?`<div class="pnext">${L("pfad_next")} ${E.map(C=>{let U=At(C.s).split(",")[0];return`<button data-slot="${C.s.slot}" title="${At(C.s).replace(/"/g,"&quot;")}">${U.length>34?U.slice(0,33)+"\u2026":U}</button>`}).join("")}</div>`:""}
    </div>`}if(h.length){s+=`<div class="restliste"><p class="restlbl">${L("karr_weitere").replace("{n}",h.length)}</p>`;for(let f of h){let m=r[f.id];s+=`<button class="restzeile" data-mehr="${f.id}" title="${Se(X(f.hint))}">
        <span class="rico">${f.icon}</span><span class="rname">${Se(X(f.name))}</span>
        <span class="rtrack"><span class="rfill" style="width:${m}%"></span></span>
        <span class="rpct">${m}%</span></button>`}s+=`<button class="ghostbtn restalle" data-alle>${L("karr_alle")}</button></div>`}else c.length>l&&(s+=`<button class="ghostbtn restalle" data-weniger style="margin:6px 4px">${L("karr_weniger")}</button>`);s+=`<button class="ghostbtn" data-waswenn style="margin:8px 4px 0;width:calc(100% - 8px)">\u{1F500} ${L("wenn_titel")}</button>`,s+=`<button class="ghostbtn" data-steckbrief style="margin:6px 4px 8px;width:calc(100% - 8px)">\u{1F5A8} ${L("karriere_pdf")}</button>`,s+=H_(),n.innerHTML=s,n.querySelectorAll(".pnext button").forEach(f=>f.onclick=()=>Qi(f.dataset.slot)),n.querySelectorAll("[data-mehr]").forEach(f=>f.onclick=()=>{if(bi=bi===f.dataset.mehr?null:f.dataset.mehr,xr=!1,_c(),bi){let m=n.querySelector(`[data-detail="${bi}"]`);m&&m.scrollIntoView({block:"nearest",behavior:dm?"auto":"smooth"})}});let d=n.querySelector("[data-alle]");d&&(d.onclick=()=>{xr=!0,bi=null,_c()});let p=n.querySelector("[data-weniger]");p&&(p.onclick=()=>{xr=!1,bi=null,_c(),n.scrollTop=0});let g=n.querySelector("[data-steckbrief]");g&&(g.onclick=q_);let _=n.querySelector("[data-waswenn]");_&&(_.onclick=mv)}function q_(){let{score:i,max:e}=hi(),t={};q.kompetenzen.forEach(_=>t[_.id]=e[_.id]?i[_.id]/e[_.id]:0);let n=new Date().toLocaleDateString(I.lang==="de"?"de-CH":"en-GB"),s=(window.KARRIERE.pfade||[]).map(_=>{let f=Object.values(_.w).reduce((E,T)=>E+T,0),m=Math.round(Object.entries(_.w).reduce((E,[T,A])=>E+A*(t[T]||0),0)/f*100),v=oo(_,t),y=Object.entries(_.w).map(([E,T])=>({id:E,v:T*(t[E]||0)})).sort((E,T)=>T.v-E.v).slice(0,3).filter(E=>E.v>0),x=q.slots.filter(E=>!je(E.slot)).map(E=>{let{komp:T,haupt:A}=en(E),C=[...T.fa||[],...T.ki||[],...T.fu||[]].reduce((U,H)=>U+(_.w[H]||0)*((A||[]).includes(H)?2:1),0);return{s:E,v:C}}).filter(E=>E.v>0).sort((E,T)=>T.v-E.v).slice(0,3);return{p:_,ready:m,fit:v,traeger:y,cand:x}}).sort((_,f)=>f.fit-_.fit||f.ready-_.ready),r=ts(),a=ns(),o="";for(let{p:_,ready:f,fit:m,traeger:v,cand:y}of s){let x=pd(_),E=_.ziel?x.length?`<p style="font-size:10.5px;margin:2px 0"><b>\u{1F3AF} ${L("gap_titel")}:</b> ${x.map(D=>{let C=rn[D.id];return`${D.id} ${C?X(C.name):""} (${L("stufe")} ${D.ist}\u2192${D.ziel})`}).join(" \xB7 ")}</p>`:`<p style="font-size:10.5px;margin:2px 0;color:#0a7d40"><b>\u2713 ${L("gap_ok")}</b></p>`:"",T=_.wahl&&_.wahl.hinweis?`<p style="font-size:10.5px;margin:2px 0"><b>\u{1F9ED} ${L("passung_titel")}</b> ${X(_.wahl.hinweis)}</p>`:"",A=_.roadmap&&_.roadmap.length?`<p style="font-size:10.5px;margin:5px 0 2px"><b>\u{1F680} ${L("roadmap_titel")}:</b></p>
         <ol style="font-size:10.5px;line-height:1.55;margin:0 0 2px;padding-left:18px">${_.roadmap.map(D=>`<li style="margin:2px 0"><b>${X(D.t)}</b> \u2014 ${X(D.d)}</li>`).join("")}</ol>`:"";o+=`<div style="border:1.5px solid #dbe1ef;border-radius:12px;padding:10px 14px;margin:8px 0;page-break-inside:avoid">
      <div style="display:flex;align-items:center;gap:8px"><span style="font-size:17px">${_.icon}</span>
        <b style="font-size:13px;flex:1">${X(_.name)}</b>
        <b style="color:#0e8f7e;font-variant-numeric:tabular-nums">${m}%</b></div>
      <div style="height:8px;border-radius:4px;background:#e8ebf4;overflow:hidden;margin:5px 0"><span style="display:block;height:100%;width:${m}%;background:linear-gradient(90deg,#0e8f7e,#0028a5)"></span></div>
      <p style="font-size:10px;color:#5b6478;margin:0 0 4px">${L("fit_label")}: <b>${m}%</b> \xB7 ${L("fortschritt_label")}: ${f}%</p>
      <p style="font-size:10.5px;color:#5b6478;margin:2px 0 5px">${X(_.hint)}</p>
      ${v.length?`<p style="font-size:10.5px;margin:2px 0"><b>${L("steck_traeger")}</b> ${v.map(D=>{let C=rn[D.id];return`${D.id} ${X(C.name)} (${Math.round((t[D.id]||0)*100)}%)`}).join(" \xB7 ")}</p>`:""}
      ${T}
      ${E}
      ${y.length?`<p style="font-size:10.5px;margin:2px 0"><b>${L("steck_next")}</b> ${y.map(D=>At(D.s).split(",")[0]).join(" \xB7 ")}</p>`:""}
      ${A}
    </div>`}let c=s[0],l=`<div style="border:1.5px solid #dbe1ef;border-radius:12px;padding:8px 14px;margin:8px 0;font-size:11.5px;line-height:1.6">
    <b>\u{1F9ED} ${L("richtung_titel")}</b><br>
    ${L("richtung_bsc")}: ${r.r?`<b style="color:${q.richtungen[r.r].farbe}">${q.richtungen[r.r].icon} ${X(q.richtungen[r.r].kurz)}</b>`:L("richtung_keine")}<br>
    ${L("richtung_msc")}: ${a.total?Object.entries(a.counts).filter(([,_])=>_>0).map(([_,f])=>`<b style="color:${q.schwerpunkte[_].farbe}">${_} ${f}/6</b>`).join(" \xB7 ")+(a.dom?"":` (${L("msc_mix")})`):"\u2014"}
    ${As()&&Ft[As()]?`<br>${L("kat_wahlpflicht")}: <b>${X(Ft[As()].titel)}</b>`:""}
    ${Xi()?`<br>${L("ba_chip")}: <b>${((q.baFormen||{})[Xi().form]||{}).icon||""} ${Se(X(Xi().name))}</b>`:""}
    ${Rr()?`<br>${L("artefakt")} <b>${Rr().icon} ${Se(X(Rr().name))}</b>`:""}
  </div>`,h=c&&c.p.soll?`<div style="page-break-inside:avoid">${Mm(i,e,230,c.p.soll).replace("max-width:230px","max-width:300px")}
       <p style="text-align:center;font-size:10px;color:#5b6478;margin:0 0 6px">${L("soll_legende")} (${c.p.icon} ${X(c.p.name)})</p></div>`:"",u=(window.KARRIERE.lit||[]).length?`<h2>\u{1F4DA} ${I.lang==="de"?"Literatur & offizielle Quellen":"References & official sources"}</h2>
       <ul style="font-size:10px;line-height:1.55;padding-left:18px">${window.KARRIERE.lit.map(_=>`<li style="margin:3px 0">${_.apa}${_.url?` <a href="${_.url}" target="_blank" rel="noopener" style="color:#0028a5">${_.url.replace(/^https?:\/\//,"")}</a>`:""}</li>`).join("")}</ul>`:"",d="";for(let _ of["fa","ki","fu"])for(let f of q.kompetenzen.filter(m=>m.feld===_)){let m=es(f.id),v=Ja(f.id,m);v&&(d+=`<p style="font-size:11px;margin:5px 0;page-break-inside:avoid">\xAB${v}\xBB <span style="color:#8b94ab;font-size:9.5px;white-space:nowrap">\u2014 ${f.id} ${X(f.name)}, ${L("stufe")} ${m}</span></p>`)}let p=`<!DOCTYPE html><html lang="${I.lang}"><head><meta charset="utf-8"><title>${L("steck_titel")}</title>
  <style>*{-webkit-print-color-adjust:exact !important;print-color-adjust:exact !important}
  body{font-family:"Helvetica Neue",Arial,sans-serif;color:#1c2333;max-width:780px;margin:24px auto;padding:0 16px}
  h1{color:#0028a5;font-size:23px} h2{color:#0028a5;font-size:15px;margin:18px 0 4px}
  .hint{font-size:10px;color:#5b6478;margin-top:16px;line-height:1.5}
  @media print {.noprint{display:none}}</style></head><body>
  <div class="noprint" style="float:right;text-align:right">
    <button onclick="print()" style="padding:10px 20px;border:0;background:#0028a5;color:#fff;border-radius:10px;cursor:pointer;font-weight:700;font-size:14px">\u{1F4BE} ${I.lang==="de"?"Als PDF speichern":"Save as PDF"}</button>
    <div style="font-size:10px;color:#5b6478;margin-top:4px">${I.lang==="de"?"Im Druckdialog \xABAls PDF sichern\xBB w\xE4hlen":"Choose 'Save as PDF' in the print dialog"}</div>
  </div>
  <h1>\u{1F4BC} ${L("steck_titel")} \u2014 ${Se(I.name)||"\u2014"}</h1>
  <p style="font-size:12px;color:#5b6478">${L("passdatum")}: ${n} \xB7 BSc ${An("bsc")}/120 \xB7 MSc ${An("msc")}/120 ${L("ects")} \xB7 ${I.mode==="serious"?L("modus_serious"):L("modus_frei")}</p>
  <p style="font-size:11px;color:#5b6478;line-height:1.5">${L("karriere_info")}</p>
  ${l}
  ${h}
  ${o}
  ${d?`<h2>\u{1F4DD} ${L("steck_cv")}</h2>${d}`:""}
  ${u}
  <p class="hint">${X(q.meta.hinweis)} ${L("steck_fussnote")}</p>
  </body></html>`,g=window.open("about:blank");g&&g.document?(g.document.write(p),g.document.close()):Ec("karrieresteckbrief.html",p,"text/html"),SND.pick()}function an(i=[]){if(document.getElementById("ptabProfil").classList.toggle("on",$a==="profil"),document.getElementById("ptabKarriere").classList.toggle("on",$a==="karriere"),$a==="karriere"){_c();return}if(Rs){K_(Rs);return}let{score:e,max:t}=hi(),n=document.getElementById("profilList"),s=`<div class="ects-summary">
    <div class="box"><b>${An("bsc")}</b><span>BSc / 120 ${L("ects")}</span></div>
    <div class="box"><b>${An("msc")}</b><span>MSc / 120 ${L("ects")}</span></div>
  </div><div class="donuts">`;for(let a of["fa","ki","fu"]){let o=q.felder[a],c=q.kompetenzen.filter(d=>d.feld===a).map(d=>d.id),l=c.reduce((d,p)=>d+e[p],0),h=c.reduce((d,p)=>d+t[p],0),u=h?Math.round(l/h*100):0;s+=`<div class="donut"><div class="ring" style="background:conic-gradient(${o.farbe} ${u*3.6}deg, #e8ebf4 0)"><b>${u}%</b></div><span>${a==="fa"?"Fach":a==="ki"?"KI":"Future"}</span></div>`}s+="</div>",s+=Mm(e,t);for(let a of["fa","ki","fu"]){let o=q.felder[a];s+=`<div class="kfeld"><span class="fdot" style="background:${o.farbe}"></span>${X(o.name)}</div>`;for(let c of q.kompetenzen.filter(l=>l.feld===a)){let l=t[c.id]?Math.round(e[c.id]/t[c.id]*100):0;s+=`<button class="kbar ${i.includes(c.id)?"bump":""}" data-k="${c.id}"><div class="klabel"><span><span class="kid">${c.id}</span>${X(c.name)}</span><span>${l}%</span></div>
        <div class="track"><div class="fill" style="background:${o.farbe};width:${l}%"></div></div></button>`}}let r=n.scrollTop;n.innerHTML=s,n.scrollTop=r,n.querySelectorAll(".kbar").forEach(a=>a.onclick=()=>{Rs=a.dataset.k,SND.pick(),an()})}document.getElementById("ptabProfil").onclick=()=>{$a="profil",Rs=null,an()};document.getElementById("ptabKarriere").onclick=()=>{$a="karriere",Rs=null,SND.pick(),an()};var X_=.4;function es(i){let e=s=>{let{komp:r}=en(s);return[...r.fa||[],...r.ki||[],...r.fu||[]].includes(i)},t=s=>{let{komp:r}=nm(s);return[...r.fa||[],...r.ki||[],...r.fu||[]].includes(i)},n=0;for(let s=1;s<=4;s++){let r=0,a=0;for(let o of q.slots)o.stufe===s&&(t(o)&&(r+=Ju(o.ects)),je(o.slot)&&e(o)&&(a+=Ju(o.ects)));r>0&&a/r>=X_&&(n=s)}return n}function K_(i){let e=rn[i];if(!e){Rs=null,an();return}let t=q.felder[e.feld],{score:n,max:s}=hi(),r=s[i]?Math.round(n[i]/s[i]*100):0,a=document.getElementById("profilList"),o=[];for(let g of q.slots){let{komp:_,haupt:f}=en(g);[..._.fa||[],..._.ki||[],..._.fu||[]].includes(i)&&o.push({slot:g,haupt:(f||[]).includes(i),built:je(g.slot),w:((f||[]).includes(i)?2:1)*g.ects})}o.sort((g,_)=>_.built-g.built||_.w-g.w);let c=o.filter(g=>g.built),l=o.filter(g=>!g.built).sort((g,_)=>Ai(_.slot).ok-Ai(g.slot).ok||_.w-g.w).slice(0,4),h=es(i),u=g=>{let _=q.gruppen[g.slot.gruppe].farbe;return`<button class="modrow ${g.built?"builtrow":""}" data-slot="${g.slot.slot}" style="border:0;width:100%;text-align:left;cursor:pointer;background:${g.built?"#eef7f1":"transparent"}">
      <span class="mdot" style="background:${_}"></span>
      <span style="flex:1">${At(g.slot)}</span>
      ${g.haupt?`<span class="haupt-tag" title="${L("hauptkomp")}">\u2605</span>`:""}
      <span style="color:#8b94ab;font-variant-numeric:tabular-nums">${g.slot.ects}</span>
    </button>`};a.innerHTML=`
    <button class="kdetail-back">${L("zurueck")}</button>
    <div class="kdetail">
      <h4><span style="color:${t.farbe}">${i}</span> ${X(e.name)}</h4>
      <p class="ich">\xAB${X(e.ich)}\xBB</p>
      <div class="kbar" style="cursor:default"><div class="klabel"><span>${X(t.name)}</span><span>${r}%</span></div>
        <div class="track"><div class="fill" style="background:${t.farbe};width:${r}%"></div></div></div>
      <div class="subhead">${L("stufe_erreicht")}</div>
      <div class="stufen">${[1,2,3,4].map(g=>`<span class="sdot ${h>=g?"on":""}" title="${X(q.stufen[g-1].name)}">${g}</span>`).join("")}
        <span style="font-size:10.5px;color:#5b6478;margin-left:4px">${h?X(q.stufen[h-1].name):"\u2014"}</span></div>
      ${Z_(e,n,s)}
      <div class="subhead">${L("k_aufgebaut")} (${c.length})</div>
      ${c.length?c.map(u).join(""):`<p style="font-size:11.5px;color:#8b94ab;margin:2px 6px">${L("k_keine")}</p>`}
      ${Y_(i,h)}
      ${J_(i,c)}
      ${l.length?`<div class="subhead">${L("k_naechste")}</div>`+l.map(u).join(""):""}
    </div>`,a.querySelector(".kdetail-back").onclick=()=>{Rs=null,an()},a.querySelectorAll(".modrow").forEach(g=>g.onclick=()=>Qi(g.dataset.slot));let d=a.querySelector("[data-cvcopy]");d&&(d.onclick=async()=>{try{await navigator.clipboard.writeText(d.dataset.cvcopy)}catch{}d.textContent="\u2713 "+L("cv_copied"),SND.pick()});let p=a.querySelector("[data-cvai]");p&&(p.onclick=async()=>{let g=a.querySelector("[data-cvrole]").value.trim();if(!g)return;let _=a.querySelector("[data-cvaiout]");_.style.display="flex",_.querySelector("p").textContent=L("ai_wartet");try{let f=Ja(i,es(i)),m=await Vu(`Formuliere GENAU EINEN CV-tauglichen Satz (${I.lang==="de"?"Deutsch, Schweizer Rechtschreibung":"English"}, dritte Person ohne Subjekt, keine \xDCbertreibung) f\xFCr die Kompetenz \xAB${X(rn[i].name)}\xBB \u2014 zugeschnitten auf diese Zielrolle: ${g}. Ausgangsbaustein: \xAB${f}\xBB. Nur der Satz, nichts anderes.`);_.querySelector("p").textContent="\xAB"+m.replace(/^«|»$/g,"")+"\xBB",_.querySelector("[data-cvaicopy]").onclick=async()=>{try{await navigator.clipboard.writeText(m)}catch{}SND.pick()}}catch{_.querySelector("p").textContent=L("tutor_err")}})}function Ja(i,e){let n=(window.KARRIERE&&window.KARRIERE.cv||{})[i];if(!n||!e)return null;let s=n[e]||n[String(e)]||(Array.isArray(n.stufen)?n.stufen[e-1]:null);return s?X(s):null}function Y_(i,e){let t=Ja(i,e);if(!t)return"";let n=gc?`<div style="display:flex;gap:6px;margin:2px 4px 6px">
    <input data-cvrole type="text" placeholder="${L("ai_cv_ph")}" style="flex:1;border:1.5px solid #dbe1ef;border-radius:8px;padding:6px 9px;font:500 11px var(--font)">
    <button class="ghostbtn" data-cvai style="padding:6px 9px;font-size:10.5px">${L("ai_cv_btn")}</button>
  </div><div data-cvaiout style="display:none" class="cvrow"><p></p><button data-cvaicopy>\u{1F4CB}</button></div>`:"";return`<div class="subhead">\u{1F4DD} ${L("cv_titel")} (${L("stufe")} ${e})</div>
    <div class="cvrow"><p>\xAB${t}\xBB</p><button data-cvcopy="${t.replace(/"/g,"&quot;")}">\u{1F4CB} ${L("cv_copy")}</button></div>${n}`}function Em(i,e,t){let n=i.proxy.map(s=>t[s]?e[s]/t[s]:0);return Math.round(n.reduce((s,r)=>s+r,0)/Math.max(1,n.length)*100)}function Z_(i,e,t){if(!i.sub||!i.sub.length)return"";let n=q.felder.fu,s=`<div class="subhead">\u{1F9ED} ${L("fs12_titel")} (${i.sub.length})</div>
    <p style="font-size:10px;color:#8b94ab;margin:0 6px 4px">${L("fs12_hint")}</p>`;for(let r of i.sub){let a=Em(r,e,t);s+=`<div class="kbar" style="cursor:default"><div class="klabel"><span><span class="kid">${r.id}</span>${X(r.name)}</span><span>${a}%</span></div>
      <div class="track"><div class="fill" style="background:${n.farbe};width:${a}%"></div></div></div>`}return s}function J_(i,e){let t=[];for(let n of e){let s=Lr(n.slot);I.quiz[s]&&t.push(`<div class="evrow"><span class="evic">\u{1F6A9}</span><span>${L("ev_quiz")}: ${At(n.slot).split(",")[0]}</span></div>`);let r=I.quests[n.slot.slot];r&&r.done&&t.push(`<div class="evrow"><span class="evic">\u2726</span><span>${L("ev_quest")}: ${At(n.slot).split(",")[0]}${r.note?` \u2014 <i>\xAB${Se(r.note)}\xBB</i>`:""}</span></div>`)}return t.length?`<div class="subhead">\u{1F5C2} ${L("evidenz_titel")} (${t.length})</div>`+t.join(""):""}var Zt=document.getElementById("card"),Sr="zukunft",Qa="klassisch",eo="DeNC",Ti=null,wr=null,Tr=null,ja=null;function Mc(i){let e=gt[i];if(!e)return;Wn=i;let t=je(i),n=I.placed[I.mode][i]||{};Qa=n.stil||Qa,eo=n.sp||eo,Ti=n.opt||(e.optionen?e.optionen[0]:null),wr=n.thema||null,Tr=n.frage||null,ja=n.artefakt||null;let{kat:s}=en(e);document.getElementById("cardDot").style.background="#"+ld(e).getHexString(),document.getElementById("cardTitle").textContent=At(e),document.getElementById("cardCode").textContent=`${n.opt||e.code} \xB7 ${X(q.gruppen[e.gruppe].name)}`;let r=(s||"B").split(/[+/]/).map(o=>o.trim()).filter(o=>q.pruefungslogik[o]),a=e.kategorie==="Wahlpflicht"?`<span class="badge" style="background:#b3831d">\u2605 ${L("kat_wahlpflicht")}</span>`:e.kategorie==="Wahl"?`<span class="badge" style="background:#6b7a99">\u2606 ${L("kat_wahl")}</span>`:`<span class="badge" style="background:#3c4356">${L("kat_pflicht")}</span>`;document.getElementById("cardBadges").innerHTML=`<span class="badge" style="background:#5b6478">${e.ects} ${L("ects")}</span>`+a+`<span class="badge" style="background:#39415a">${L("stufe")} ${e.stufe}</span>
     <span class="badge" style="background:#7a86a3">${L(e.rhythmus==="beide"?"beide":e.rhythmus.toLowerCase())}${e.sem2?" \xB7 "+L("zweisem"):""}</span>`+r.map(o=>`<span class="badge" style="background:${q.pruefungslogik[o].farbe}">${X(q.pruefungslogik[o].name)}</span>`).join(""),Yi(e),li(e),Sm(e),Zt.classList.add("open"),document.body.classList.add("card-open"),Xa(I.cardSize||"m",!1)}function Sm(i){let e=document.getElementById("fbRow");if(!e)return;if(Ot.active){e.style.display="none";return}e.style.display="flex";let t=(I.fb||{})[i.slot]||{};e.innerHTML=`<span class="fblbl">\u{1F6A6} ${L("fb_frage")}</span>
    ${["g","y","r"].map(s=>`<button class="fbamp ${t.a===s?"on":""}" data-amp="${s}" title="${L("fb_"+s)}" aria-label="${L("fb_"+s)}">${s==="g"?"\u{1F7E2}":s==="y"?"\u{1F7E1}":"\u{1F534}"}</button>`).join("")}
    ${t.a?`<input type="text" data-fbnote maxlength="200" placeholder="${L("fb_ph")}" value="${Se(t.note)}">`:""}`,e.querySelectorAll(".fbamp").forEach(s=>s.onclick=()=>{I.fb||(I.fb={});let r=I.fb[i.slot]||{};r.a===s.dataset.amp?delete I.fb[i.slot]:(I.fb[i.slot]={a:s.dataset.amp,note:r.note||"",ts:new Date().toISOString().slice(0,10)},r.a||_t(L("fb_danke"))),it(),SND.pick(),Sm(i)});let n=e.querySelector("[data-fbnote]");n&&(n.onchange=()=>{I.fb&&I.fb[i.slot]&&(I.fb[i.slot].note=n.value.trim().slice(0,200),it())})}function Is(){Zt.classList.remove("open"),document.body.classList.remove("card-open"),Wn=null,Jt()}document.getElementById("cardClose").onclick=()=>{Is(),ss()};var qa=["s","m","l"],Q_={s:.46,m:.7,l:1};function Xa(i,e){qa.includes(i)||(i="m"),Zt.dataset.size=i,Zt.style.removeProperty("--ch");let t=document.getElementById("cardSize");t&&(t.textContent=i==="l"?"\u2921":"\u2922",t.setAttribute("aria-label",L(i==="l"?"aria_karte_klein":"aria_karte_groesse")),t.title=L(i==="l"?"aria_karte_klein":"aria_karte_groesse")),e!==!1&&(I.cardSize=i,it()),requestAnimationFrame(Ar)}function Uu(i){let e=qa.indexOf(Zt.dataset.size||"s");Xa(qa[Math.max(0,Math.min(qa.length-1,e+i))])}function Ar(){let i=document.getElementById("cardBodyWrap"),e=document.getElementById("cardBody");if(!i||!e)return;let t=e.scrollHeight-e.scrollTop-e.clientHeight;i.classList.toggle("more",t>8),Zt.classList.toggle("hasmore",e.scrollHeight-e.clientHeight>8)}{let i=document.getElementById("cardGrip"),e=document.getElementById("cardBody"),t=document.getElementById("cardSize");e&&e.addEventListener("scroll",Ar,{passive:!0}),window.addEventListener("resize",Ar),Zt.addEventListener("transitionend",s=>{s.propertyName==="height"&&Ar()}),t&&(t.onclick=()=>{Uu(Zt.dataset.size==="l"?-2:1),SND.pick()});let n=Zt.querySelector(".head");if(n&&n.addEventListener("dblclick",s=>{s.target.closest("button")||Xa(Zt.dataset.size==="s"?"m":"s")}),i){let s=0,r=0,a=!1,o=()=>window.innerHeight-76;i.addEventListener("pointerdown",l=>{a=!0,s=l.clientY,r=Zt.getBoundingClientRect().height,Zt.classList.add("dragging");try{i.setPointerCapture(l.pointerId)}catch{}l.preventDefault()}),i.addEventListener("pointermove",l=>{if(!a)return;let h=Math.max(180,Math.min(o(),r+(s-l.clientY)));Zt.style.setProperty("--ch",h+"px"),Ar()});let c=()=>{if(!a)return;a=!1,Zt.classList.remove("dragging");let l=Zt.getBoundingClientRect().height,h="s",u=1/0;for(let d of qa){let p=Math.min(o(),Q_[d]*window.innerHeight);Math.abs(p-l)<u&&(u=Math.abs(p-l),h=d)}Xa(h)};i.addEventListener("pointerup",c),i.addEventListener("pointercancel",c),i.addEventListener("keydown",l=>{l.key==="ArrowUp"?(Uu(1),l.preventDefault()):l.key==="ArrowDown"?(Uu(-1),l.preventDefault()):(l.key==="Enter"||l.key===" ")&&(Xa(Zt.dataset.size==="s"?"m":"s"),l.preventDefault())})}}document.getElementById("cardTabs").addEventListener("click",i=>{let e=i.target.closest("button");if(!e)return;Sr=e.dataset.tab,document.querySelectorAll("#cardTabs button").forEach(n=>n.classList.toggle("on",n===e)),Wn&&Yi(gt[Wn]);let t=document.getElementById("cardBody");t&&(t.scrollTop=0),requestAnimationFrame(Ar)});function ev(i){let{komp:e,haupt:t}=en(i);return'<div class="komp-pills">'+[...e.fa||[],...e.ki||[],...e.fu||[]].map(s=>{let r=rn[s];if(!r)return"";let a=q.felder[r.feld];return`<span class="kpill ${t.includes(s)?"haupt":""}" style="border-color:${a.farbe};color:${a.farbe}">${s} ${X(r.name)}</span>`}).join("")+"</div>"}function wm(i,e){let{komp:t,haupt:n}=en(i),s={F:t.fa||[],K:t.ki||[],S:t.fu||[]},r=[];for(let a of e||[]){let o=s[a]||[],c=o.filter(l=>(n||[]).includes(l));(c.length?c:o.slice(0,1)).forEach(l=>{r.includes(l)||r.push(l)})}return r}function tv(i,e){return wm(i,e.b).map(n=>{let s=rn[n];if(!s)return"";let r=q.felder[s.feld];return`<span class="lz-kid" style="color:${r.farbe};border-color:${r.farbe}" title="${X(s.name)}">${n}</span>`}).join("")}function nv(i){let{komp:e,haupt:t}=en(i),n=[...e.fa||[],...e.ki||[],...e.fu||[]],s=(t&&t.length?t:n).filter(o=>rn[o]).slice(0,5);if(!s.length)return"";let r=s.map(o=>`${o} ${X(rn[o].name)}`).join(", ");return`<p style="margin-top:8px;font-size:12px;color:#3c4356;line-height:1.5">${I.lang==="de"?`<b>Die Studierenden</b> bauen in diesem Modul vor allem folgende Kompetenzen auf: ${r}.`:`<b>Students</b> primarily build the following competences in this module: ${r}.`}</p>`}function iv(i){let e=(s,r,a)=>!r||!r.length?"":`<div class="kette"><span class="kettelbl">${a} ${s}</span>
      <ul>${r.map(o=>{let c=gt[o.slot];if(!c)return"";let l=je(o.slot);return`<li><button type="button" data-kette="${o.slot}" class="kettebtn${l?" gebaut":""}"
          title="${Se(At(c))}">${Se(At(c).split(",")[0])}</button>
          <span class="kettewas">${Se(X(o.was))}</span></li>`}).join("")}</ul></div>`,t=e(L("kette_bautauf"),i.bautAuf,"\u2191"),n=e(L("kette_gebrauchtin"),i.gebrauchtIn,"\u2193");return!t&&!n?"":`<div class="kettenbox">${t}${n}</div>`}function Yi(i){let e=nd(i),t=document.getElementById("cardBody"),n=`<p style="color:#5b6478;font-style:italic">${L("keine_texte")}</p>`;if(Sr==="zukunft"){let s=q.baukasten&&q.baukasten.zuordnung[i.slot]||[],r=s.length?`<div style="margin-top:10px"><span style="font:700 11px var(--font);color:#5b6478">${L("baukasten_titel")}:</span>
      <span class="komp-pills" style="display:inline-flex;margin-left:4px">${s.map(a=>{let o=q.baukasten.defs[a];return o?`<span class="kpill" data-bk="${a}" role="button" tabindex="0" title="${X(o.kurz)}" style="border-color:#b9c2d9;cursor:pointer">${X(o.name)}</span>`:""}).join("")}</span></div>`:"";t.innerHTML=(e?`<p style="color:#5b6478;font-size:12px">${X(e.heute)}</p><p style="margin-top:6px">${X(e.zukunft)}</p>`:n)+nv(i)+ev(i)+iv(i)+r,t.querySelectorAll("[data-bk]").forEach(a=>a.onclick=()=>{let o=q.baukasten.defs[a.dataset.bk];o&&(_t(X(o.name)+": "+X(o.kurz)),SND.pick())}),t.querySelectorAll("[data-kette]").forEach(a=>a.onclick=()=>Qi(a.dataset.kette))}else if(Sr==="lernziele")t.innerHTML=e&&e.lernziele&&e.lernziele.length?`<p style="font-size:10.5px;color:#8b94ab;margin:0 2px 6px">${L("lz_hint")}</p><ul style="list-style:none;padding-left:2px">${e.lernziele.map(s=>`<li style="margin:5px 0"><span class="lz-kids">${tv(i,s)}</span>${X(s)}</li>`).join("")}</ul>`:n;else if(Sr==="ki"){let{kat:s}=en(i),r=(s||"B").split(/[+/]/).map(a=>a.trim()).filter(a=>q.pruefungslogik[a]);t.innerHTML=(e?`<p>${X(e.ki)}</p>`:n)+'<ul style="margin-top:8px">'+r.map(a=>`<li><b style="color:${q.pruefungslogik[a].farbe}">${X(q.pruefungslogik[a].name)}</b> \u2014 ${X(q.pruefungslogik[a].def)}</li>`).join("")+"</ul>"}else Sr==="quest"&&rv(i,t,e,n)}var Kf={de:{ok:["Sauber hergeleitet! \u{1F9E0}","Signifikant richtig.","Das sitzt \u2014 weiter so!","Evidenzbasiert geantwortet. \u2713","Dein Hippocampus liefert."],no:["Fast! Schau dir das Warum an:","Guter Versuch \u2014 hier steckt der Denkfehler:","Kein Drama: Fehler = Lernmoment.","Knapp daneben \u2014 die Erkl\xE4rung hilft:","Das war der beliebteste Distraktor:"]},en:{ok:["Cleanly reasoned! \u{1F9E0}","Significantly correct.","That one stuck \u2014 keep going!","An evidence-based answer. \u2713","Your hippocampus delivers."],no:["Almost! Check the why:","Good try \u2014 here's the catch:","No drama: errors are learning moments.","Close \u2014 the explanation helps:","That was the most popular distractor:"]}},dt=null;function sv(i){let e=[...Array(i).keys()];for(let t=i-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function rv(i,e,t,n){let s=id(i),r=Lr(i),a="";if(s&&s.length)if(I.quiz[r])a+=`<div class="quiz-done-banner">\u{1F6A9} ${L("quiz_bestanden")}</div>`;else{(!dt||dt.code!==r)&&(dt={code:r,offen:s.map((v,y)=>y),geloest:[],picked:null,order:null});let _=dt,f=_.offen[0],m=s[f];if((!_.order||_.order.length!==m.a.length)&&(_.order=sv(m.a.length)),a+=`<p style="font-weight:800;margin-bottom:2px">\u{1F9E9} ${L("quiz_titel")}</p>`,I.mode==="serious"&&!je(i.slot)&&(a+=`<p style="font-size:11px;color:#b35c00;margin-bottom:6px">${L("quiz_gate_hint")}</p>`),a+=`<div class="quiz-progress">${s.map((v,y)=>`<span class="qp ${_.geloest.includes(y)?"done":y===f?"cur":""}"></span>`).join("")}</div>`,a+=`<p style="font-size:10.5px;color:#5b6478">${L("quiz_offen").replace("{n}",_.offen.length)}</p>`,m.typ==="position"&&Array.isArray(m.pos)&&(a+=`<div class="posbox"><span class="poslbl">\u2696\uFE0F ${L("quiz_position")}</span>
          ${m.pos.map(v=>`<p class="pospos">${Se(X(v))}</p>`).join("")}</div>`),a+=`<p class="quiz-q">${X(m.q)}</p>`,_.order.forEach(v=>{let y=m.a[v],x="";_.picked!==null&&(x=v===m.korrekt?"ok":v===_.picked?"no":""),a+=`<button class="quiz-a ${x}" data-ai="${v}" ${_.picked!==null?"disabled":""}>${X(y)}</button>`}),_.picked!==null){let v=_.picked===m.korrekt,y=Kf[I.lang]||Kf.de,x=(v?y.ok:y.no)[(f+m.korrekt)%5];a+=`<div class="quiz-erkl"><b>${v?"\u2705 ":"\u274C "}${x}</b><br>${X(m.erkl)}</div>`,gc&&!v&&(a+=`<button class="ghostbtn" data-qai style="margin-top:6px">${L("ai_quizhilfe")}</button><div data-qaiout class="quiz-erkl" style="display:none;margin-top:6px"></div>`),v||(a+=`<p style="font-size:10.5px;color:#b35c00;margin-top:6px">${L("quiz_spaeter")}</p>`),(_.offen.length>1||!v)&&(a+=`<button class="primary" style="margin-top:8px" data-qnext>${L("quiz_weiter")} \u2192</button>`)}}else I.mode==="serious"&&(a+=`<p style="font-size:11.5px;color:#8b94ab">${L("quiz_fehlt")}</p>`);let o=I.quests[i.slot]||{},c=t&&t.quest;a+=`<p style="font-weight:800;margin:12px 0 2px">\u2726 ${L("praxis_quest")}</p>`,a+=c?`<p><b>${X(c.titel)}</b></p><p style="margin-top:4px">${X(c.text)}</p>`:n,o.done&&(a+=`<p style="color:var(--ok);margin-top:8px"><b>\u2713 ${L("quest_abgeschlossen")}</b></p>`),a+=`<p class="qbeleg${lc(i)?" on":""}" data-qbeleg>${lc(i)?"\u2713 "+L("beleg_ja"):L("beleg_nein")}</p>`,a+=`<p style="font-weight:700;font-size:12px;margin:10px 0 3px">\u{1F4DD} ${L("notiz_titel")}</p>
    <textarea data-qnote rows="3" maxlength="500" placeholder="${L("notiz_ph")}" style="width:100%;border:1.5px solid #dbe1ef;border-radius:10px;padding:8px 10px;font:500 12px var(--font);resize:vertical">${Se(o.note)}</textarea>
    <p data-qnotesaved style="font-size:10px;color:#8b94ab;margin:2px 0 0;visibility:hidden">\u2713 ${L("notiz_gespeichert")}</p>`,gc&&c&&(a+=`<details style="margin-top:10px"><summary style="cursor:pointer;font:700 12px var(--font);color:var(--blue)">${L("ai_feedback")}</summary>
      <textarea data-aiq rows="3" placeholder="${L("ai_feedback_ph")}" style="width:100%;margin-top:6px;border:1.5px solid #dbe1ef;border-radius:10px;padding:8px 10px;font:500 12px var(--font)"></textarea>
      <button class="primary" data-aiqbtn style="margin-top:6px">${L("ai_senden")}</button>
      <div data-aiqout class="quiz-erkl" style="display:none;margin-top:6px"></div></details>`),gc&&["400","402","403","501","502","511","s05","s06","s08"].includes(i.slot)&&Wu&&(a+=`<button class="ghostbtn" data-aivig style="margin-top:10px">${L("ai_vignette")}</button>`),e.innerHTML=a;let h=e.querySelector("[data-aiqbtn]");h&&(h.onclick=async()=>{let _=e.querySelector("[data-aiq]"),f=e.querySelector("[data-aiqout]"),m=_.value.trim();if(m){f.style.display="block",f.textContent=L("ai_wartet");try{f.textContent=await Vu(`Du bist Tutor:in im Psychologiestudium UZH. Gib formatives Feedback (${I.lang==="de"?"Deutsch, Schweizer Rechtschreibung":"English"}, max. 90 W\xF6rter, keine Note) auf die L\xF6sung einer \xDCbungsaufgabe. Nenne genau EINE St\xE4rke und EINEN konkreten Verbesserungspunkt, freundlich und fachlich pr\xE4zise.
Aufgabe (\xAB${X(c.titel)}\xBB): ${X(c.text)}
L\xF6sung der/des Studierenden: ${m}
Feedback:`)}catch{f.textContent=L("tutor_err")}}});let u=e.querySelector("[data-aivig]");u&&(u.onclick=()=>Wu.open("vignette",i));let d=e.querySelector("[data-qnote]");if(d){let _=null;d.addEventListener("input",()=>{let f=I.quests[i.slot]||{done:!1,note:""};f.note=d.value.trim().slice(0,500),I.quests[i.slot]=f,it(),clearTimeout(_),_=setTimeout(()=>{let m=e.querySelector("[data-qnotesaved]");m&&(m.style.visibility="visible",setTimeout(()=>{m.style.visibility="hidden"},1600)),qu();let v=e.querySelector("[data-qbeleg]");v&&(v.className="qbeleg"+(lc(i)?" on":"")),v&&(v.textContent=lc(i)?"\u2713 "+L("beleg_ja"):L("beleg_nein"))},500)})}e.querySelectorAll(".quiz-a").forEach(_=>_.onclick=()=>{if(!dt||dt.picked!==null)return;let f=+_.dataset.ai,m=dt.offen[0],v=s[m];dt.picked=f;let y=f===v.korrekt;y?SND.quest():SND.err(),y&&!dt.geloest.includes(m)&&dt.geloest.push(m),y&&dt.offen.length===1&&(I.quiz[r]=!0,it(),setTimeout(()=>{SND.fanfare();let x=Dt[i.slot];x&&Ya(x.position.x,x.position.y+2.5,x.position.z,60,3),je(i.slot)?wi(i.slot):Ai(i).ok&&_t("\u{1F513} "+L("quiz_freigeschaltet")),qu(),Jt(),Yi(i),li(i)},900)),Yi(i)});let p=e.querySelector("[data-qnext]");p&&(p.onclick=()=>{let _=dt.offen.shift();if(!dt.geloest.includes(_)){if(!dt.offen.length&&dt.geloest.length){let m=dt.geloest[Math.floor(Math.random()*dt.geloest.length)];dt.offen.push(m),dt.geloest=dt.geloest.filter(v=>v!==m)}dt.offen.push(_)}dt.picked=null,dt.order=null,Yi(i)});let g=e.querySelector("[data-qai]");g&&(g.onclick=async()=>{let _=e.querySelector("[data-qaiout]");_.style.display="block",_.textContent=L("ai_wartet");let f=s[dt.i];try{_.innerHTML=(await Vu(`Du bist Tutor:in im Psychologiestudium UZH. Eine Person hat diese Quizfrage falsch beantwortet. Erkl\xE4re das Konzept in 2 S\xE4tzen NEU (anders als die Standarderkl\xE4rung) und stelle dann GENAU EINE kurze \xDCbungsfrage dazu, gefolgt von \xABMusterantwort:\xBB und einer 1-Satz-Musterantwort. Sprache: ${I.lang==="de"?"Deutsch (Schweizer Rechtschreibung)":"English"}.
Frage: ${X(f.q)}
Richtige Antwort: ${X(f.a[f.korrekt])}
Gew\xE4hlte falsche Antwort: ${X(f.a[dt.picked])}`)).replace(/Musterantwort:([\s\S]*)$/i,(m,v)=>`<details style="margin-top:4px"><summary style="cursor:pointer;font-weight:700">${I.lang==="de"?"Musterantwort anzeigen":"Show model answer"}</summary>${v.trim()}</details>`)}catch{_.textContent=L("tutor_err")}})}function li(i){let e=document.getElementById("cardActions");if(e.innerHTML="",Ot.active)return;let t=je(i.slot);if(i.optionen&&!t){let s=document.createElement("div");s.className="optpick",s.innerHTML=`<span>${L("optionwahl")}</span>`,i.optionen.forEach(r=>{let a=document.createElement("button");a.textContent=Ft[r]?X(Ft[r].titel):r,a.classList.toggle("on",Ti===r),a.onclick=()=>{Ti=r,li(i),Yi(i)},s.appendChild(a)}),e.appendChild(s)}if(i.schwerpunktwahl){let s=document.createElement("div");s.className="schwerpick",s.innerHTML=`<span>${L("schwerpunkt")}</span>`,Object.keys(q.schwerpunkte).forEach(r=>{let a=document.createElement("button");a.textContent=r,a.title=X(q.schwerpunkte[r].name),a.setAttribute("aria-label",X(q.schwerpunkte[r].name)),a.style.borderColor=q.schwerpunkte[r].farbe;let o=t?I.placed[I.mode][i.slot].sp||"DeNC":eo;a.classList.toggle("on",o===r),a.onclick=()=>{t?(I.placed[I.mode][i.slot].sp=r,it(),wi(i.slot)):eo=r,li(i),Jt()},s.appendChild(a)}),e.appendChild(s)}if(Zi[i.slot]){let s=document.createElement("div");s.className="schwerpick themapick",s.innerHTML=`<span>${L("thema")}</span>`,Zi[i.slot].forEach(a=>{let o=document.createElement("button");o.textContent=X(a.name),o.title=X((q.richtungen[a.r]||{}).kurz||a.name),o.style.borderColor=(q.richtungen[a.r]||{}).farbe||"#b9c2d9";let c=t?I.placed[I.mode][i.slot].thema||null:wr;o.classList.toggle("on",c===a.id),o.onclick=()=>{t?(I.placed[I.mode][i.slot].thema=I.placed[I.mode][i.slot].thema===a.id?null:a.id,i.slot==="BA"&&(I.placed[I.mode].BA.frage=null),it(),wi(i.slot)):(wr=wr===a.id?null:a.id,i.slot==="BA"&&(Tr=null),_n&&Wa(_n)),li(i),Jt(),an()},s.appendChild(o)});let r=document.createElement("p");r.style.cssText="font-size:10px;color:#8b94ab;margin:2px 4px 0",r.textContent=L("thema_hint"),s.appendChild(r),e.appendChild(s)}if(i.slot==="BA"&&q.baFragen){let s=t?I.placed[I.mode].BA.thema||null:wr;if(s&&q.baFragen[s]){let r=document.createElement("div");r.className="schwerpick themapick",r.innerHTML=`<span>${L("frage")}</span>`,q.baFragen[s].forEach(o=>{let c=(q.baFormen||{})[o.form]||{},l=document.createElement("button");l.textContent=`${c.icon||""} ${X(o.name)}`,l.title=X(c.name||o.name);let h=t?I.placed[I.mode].BA.frage||null:Tr;l.classList.toggle("on",h===o.id),l.onclick=()=>{t?(I.placed[I.mode].BA.frage=I.placed[I.mode].BA.frage===o.id?null:o.id,it()):Tr=Tr===o.id?null:o.id,li(i),an()},r.appendChild(l)});let a=document.createElement("p");a.style.cssText="font-size:10px;color:#8b94ab;margin:2px 4px 0",a.textContent=L("frage_hint"),r.appendChild(a),e.appendChild(r)}{let r=document.createElement("div");r.className="schwerpick themapick",r.innerHTML=`<span>${L("artefakt")}</span>`,(q.baArtefakte||[]).forEach(o=>{let c=document.createElement("button");c.textContent=`${o.icon} ${X(o.name)}`,c.title=X(o.kurz);let l=t?I.placed[I.mode].BA.artefakt||null:ja;c.classList.toggle("on",l===o.id),c.onclick=()=>{t?(I.placed[I.mode].BA.artefakt=I.placed[I.mode].BA.artefakt===o.id?null:o.id,it(),wi("BA")):ja=ja===o.id?null:o.id,li(i)},r.appendChild(c)});let a=document.createElement("p");a.style.cssText="font-size:10px;color:#8b94ab;margin:2px 4px 0",a.textContent=L("artefakt_hint"),r.appendChild(a),e.appendChild(r)}}{let s=document.createElement("div");s.className="stilpick",s.innerHTML=`<span>${L("stil")}</span>`,q.stile.forEach(r=>{let a=document.createElement("button");a.textContent=X(r.name);let o=t?I.placed[I.mode][i.slot].stil||"klassisch":Qa;a.classList.toggle("on",o===r.id),a.onclick=()=>{t?(I.placed[I.mode][i.slot].stil=r.id,it(),wi(i.slot)):(Qa=r.id,_n&&Wa(_n)),li(i)},s.appendChild(a)}),e.appendChild(s)}if(I.mode==="serious"&&!t){let s=document.createElement("label");s.className="sw",s.innerHTML=`<input type="checkbox" ${I.bestanden[i.slot]?"checked":""}> <span>${L("bestanden")}</span>`,s.querySelector("input").onchange=r=>{I.bestanden[i.slot]=r.target.checked,it(),Jt(),_n&&Wa(_n),li(i)},e.appendChild(s)}let n=(i.empf||[]).filter(s=>!je(s));if(!t&&n.length){let s=document.createElement("div");s.className="reason",s.style.color="#b35c00",s.textContent=L("empf_hinweis")+n.map(r=>X(gt[r].titel).split(",")[0]).join(" \xB7 "),e.appendChild(s)}if(I.mode==="serious"&&!t){let s=id(i),r=document.createElement("div");r.className="gatelist";let a=(o,c,l)=>{let h=document.createElement(l?"button":"span");h.className="gaterow"+(o?" ok":""),h.innerHTML=`<span class="gbox">${o?"\u2714":"\u25CB"}</span><span>${c}</span>`,l&&(h.onclick=l),r.appendChild(h)};a(!!I.bestanden[i.slot],L("gate_bestanden"),null),s&&a(rm(i),L("gate_quiz"),()=>{Sr="quest",document.querySelectorAll("#cardTabs button").forEach(o=>o.classList.toggle("on",o.dataset.tab==="quest")),Yi(i)}),e.appendChild(r)}if(t){let s=I.quests[i.slot]||{},r=document.createElement("button");if(r.className=s.done?"ghostbtn":"primary",r.textContent=s.done?L("quest_undone"):L("quest_done"),r.onclick=()=>{let a=I.quests[i.slot]||{done:!1,note:""};if(s.done)I.quests[i.slot]={done:!1,note:a.note||""},w_(Dt[i.slot]),wi(i.slot);else{I.quests[i.slot]={done:!0,note:a.note||""},fm(Dt[i.slot],i),SND.quest();let o=Dt[i.slot];Ya(o.position.x,o.position.y+2,o.position.z,40,2.5),wi(i.slot)}it(),Jt(),li(i),Yi(i)},e.appendChild(r),["box","tower","wing","bay","slab","step"].includes(i.form)){let a=document.createElement("button");a.className="ghostbtn",a.textContent=i.form==="slab"||i.form==="step"?"\u{1F526} "+L("keller"):L("betreten"),a.onclick=()=>Cm(i.slot),e.appendChild(a)}{let a=document.createElement("button");a.className="ghostbtn",a.textContent=L("entfernen"),a.onclick=()=>N_(i.slot),e.appendChild(a)}}else{let s=Ai(i),r=document.createElement("button");if(r.className="primary",r.textContent=L("bauen"),r.disabled=!s.ok,r.onclick=()=>ao(i),e.appendChild(r),!s.ok&&s.reason){let a=document.createElement("div");a.className="reason",a.textContent=s.reason,e.appendChild(a)}}}function wi(i){let e=gt[i],t=Dt[i];t&&(Ji.remove(t),ud(t));let n=so(e);cd(n,e),Ji.add(n),Dt[i]=n,xc()}function fd(i){i==="serious"&&!I.seriousSeen&&(I.seriousSeen=!0,setTimeout(()=>alert(L("serious_erklaert")),150)),I.mode=i,it(),document.getElementById("modeFrei").classList.toggle("on",i==="frei"),document.getElementById("modeSerious").classList.toggle("on",i==="serious"),ss(),Is(),ro(),Jt(),an(),_t(L(i==="serious"?"serious_info":"frei_info"))}document.getElementById("modeFrei").onclick=()=>fd("frei");document.getElementById("modeSerious").onclick=()=>fd("serious");typeof I.sound>"u"&&(I.sound=!0);SND.enabled=I.sound;var Qu=document.getElementById("btnSound");Qu.textContent=I.sound?"\u{1F50A}":"\u{1F507}";Qu.onclick=()=>{I.sound=!I.sound,SND.enabled=I.sound,it(),Qu.textContent=I.sound?"\u{1F50A}":"\u{1F507}",I.sound&&SND.pick()};document.getElementById("btnLang").onclick=()=>{I.lang=I.lang==="de"?"en":"de",it(),td(),Jt(),an(),Wn&&Mc(Wn),Am()};var av={menu:"modalMenu",help:"modalHelp",privacy:"modalPrivacy",about:"modalAbout",share:"modalShare",onboard:"modalOnboard",p0:"modalP0",minor:"modalMinor",bauhuette:"modalBauhuette",geraete:"modalGeraete",changelog:"modalChangelog",wenn:"modalWenn"},za=null;function Tm(i){return[...i.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(e=>e.offsetParent!==null)}function Yf(i){if(i.classList.remove("open"),za&&document.contains(za))try{za.focus()}catch{}za=null}function Qt(i){let e=document.getElementById(av[i]);za=document.activeElement,e.classList.add("open"),setTimeout(()=>{let t=Tm(e);if(t.length)try{t[0].focus()}catch{}},60)}document.querySelectorAll(".modal").forEach(i=>{i.addEventListener("click",e=>{(e.target===i||e.target.hasAttribute("data-close"))&&Yf(i)}),i.addEventListener("keydown",e=>{if(!i.classList.contains("open"))return;if(e.key==="Escape"){e.stopPropagation(),Yf(i);return}if(e.key!=="Tab")return;let t=Tm(i);if(!t.length)return;let n=t[0],s=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),s.focus()):!e.shiftKey&&document.activeElement===s&&(e.preventDefault(),n.focus())})});document.getElementById("btnMenu").onclick=()=>Qt("menu");document.getElementById("btnHelp").onclick=()=>{Qt("help")};document.getElementById("btnPrivacy").onclick=()=>Qt("privacy");document.getElementById("btnAbout").onclick=()=>Qt("about");function Am(){document.getElementById("helpBox").innerHTML=window.HELP_HTML[I.lang]+`<div class="mactions"><button class="primary" data-close>${L("schliessen")}</button></div>`,document.getElementById("privacyBox").innerHTML=window.PRIVACY_HTML[I.lang]+`<div class="mactions"><button class="primary" data-close>${L("schliessen")}</button></div>`,document.getElementById("aboutBox").innerHTML=window.ABOUT_HTML[I.lang]+`<div class="mactions"><button class="primary" data-close>${L("schliessen")}</button></div>`;let i=document.getElementById("ckDirektMsc");i&&(i.checked=I.direktMSc,i.onchange=e=>{I.direktMSc=e.target.checked,it(),Jt(),_t(L("direkt_msc"))}),Rm()}function Rm(){for(let i of["bsc","msc"]){let e=document.getElementById(i==="bsc"?"palRowBsc":"palRowMsc");e&&(e.innerHTML=`<span>${i==="bsc"?"\u{1F3E0}":"\u{1F3F0}"}</span>`,(q.paletten||[]).forEach(t=>{let n=document.createElement("button");n.textContent=X(t.name),n.style.borderColor=t.akzent,n.classList.toggle("on",((I.pal||{})[i]||"uzh")===t.id),n.onclick=()=>{I.pal||(I.pal={bsc:"uzh",msc:"uzh"}),I.pal[i]=t.id,it(),ro(),Rm(),SND.pick()},e.appendChild(n)}))}}document.getElementById("btnExport").onclick=()=>{let i=new Blob([JSON.stringify(I,null,2)],{type:"application/json"}),e=document.createElement("a");e.href=URL.createObjectURL(i),e.download="kompetenzhaus-"+new Date().toISOString().slice(0,10)+".json",e.click(),URL.revokeObjectURL(e.href)};document.getElementById("btnImport").onclick=()=>document.getElementById("fileImport").click();document.getElementById("fileImport").onchange=i=>{let e=i.target.files[0];if(!e)return;if(!confirm(L("import_confirm"))){i.target.value="";return}let t=new FileReader;t.onload=()=>{try{I=Object.assign(Pr(),JSON.parse(t.result)),it(),td(),ro(),Jt(),an(),Cs(),fd(I.mode),_t(L("import_ok"))}catch{_t(L("import_err"))}},t.readAsText(e)};document.getElementById("btnReset").onclick=()=>{confirm(L("reset_confirm"))&&(I=Pr(),I.onboarded=!0,it(),ss(),Is(),ro(),Jt(),an(),Cs())};function ov(){let i={n:I.name,p:I.placed[I.mode],q:Object.fromEntries(Object.entries(I.quests).filter(([e,t])=>t.done).map(([e,t])=>[e,1]))};return btoa(unescape(encodeURIComponent(JSON.stringify(i))))}document.getElementById("btnShare").onclick=()=>{let i=(location.origin==="null"||location.protocol==="file:",location.href.split("#")[0]);document.getElementById("shareLink").value=i+"#h="+ov(),Qt("share")};document.getElementById("btnCopy").onclick=async()=>{let i=document.getElementById("shareLink");i.select();try{await navigator.clipboard.writeText(i.value)}catch{document.execCommand("copy")}_t(L("kopiert"))};function lv(){if(!location.hash.startsWith("#h="))return!1;try{let i=JSON.parse(decodeURIComponent(escape(atob(location.hash.slice(3)))));return Ot.active=!0,Ot.data=i,I.placed={frei:i.p||{},serious:{}},I.mode="frei",I.quests=Object.fromEntries(Object.entries(i.q||{}).map(([e])=>[e,{done:!0,note:""}])),document.getElementById("visitorText").textContent=`${L("besuch_bei")} ${i.n||"?"} \u{1F3E0}`,document.getElementById("visitor").classList.add("open"),document.getElementById("panelL").style.display="none",document.getElementById("modeSeg").style.display="none",!0}catch{return!1}}document.getElementById("visitorOwn").onclick=()=>{location.hash="",location.reload()};document.getElementById("visitorSave").onclick=()=>{try{let i=no&&JSON.parse(localStorage.getItem(Ir)||"null")||Pr();i.nachbarn=(i.nachbarn||[]).filter(e=>e.n!==Ot.data.n).slice(0,2),i.nachbarn.push(Ot.data),localStorage.setItem(Ir,JSON.stringify(i)),_t(L("nachbar_gespeichert"))}catch{}};var Ha=!1,Ka=new Oe;Je.add(Ka);function cv(i){let e=document.createElement("canvas");e.width=512,e.height=128;let t=e.getContext("2d");t.font="700 52px Helvetica, Arial",t.textAlign="center",t.fillStyle="rgba(255,255,255,.92)";let n=t.measureText(i).width+60;t.beginPath(),t.roundRect((512-n)/2,18,n,92,26),t.fill(),t.fillStyle="#0028a5",t.fillText(i,256,82);let s=new ar(e),r=new sr(new ms({map:s,transparent:!0}));return r.scale.set(7,1.75,1),r}function hv(){Ka.clear();let i=[[-27,-23],[0,-28],[27,-23]],e=.75;(I.nachbarn||[]).slice(0,3).forEach((t,n)=>{let[s,r]=i[n],a=new Oe;for(let[c,l]of Object.entries(t.p||{})){let h=gt[c];if(!h)continue;let u=so(h,{state:l,placedMap:t.p}),d=q.haeuser[h.haus];u.position.set(s+d.origin[0]*.45+h.pos.x*Ze*e,yc(h.pos.y)*e,r+h.pos.z*Ze*e),u.scale.set(e,e,e),a.add(u)}let o=cv(t.n||"?");o.position.set(s,9,r),a.add(o),Ka.add(a)}),Ka.visible=Ha}document.getElementById("btnCampus").onclick=()=>{Ha=!Ha,hv(),Ka.visible=Ha,Ha?(Vn(new M(0,40,52),new M(0,2,-7),1.6),_t(L("campus_an"))):(Vn(new M(-23,17,30),new M(-7,3,0),1.4),_t(L("campus_aus")))};function uv(i,e){let t=window.KARRIERE||{},n=t.pfade||[];if(!n.length)return"";let s={};q.kompetenzen.forEach(x=>s[x.id]=e[x.id]?i[x.id]/e[x.id]:0);let r=q.slots.filter(x=>je(x.slot)).length,a=n.map(x=>({p:x,fit:oo(x,s)})).sort((x,E)=>E.fit-x.fit),o=a[0],c=a.slice(1,3),l=ts(),h=ns(),u=Xi(),d=Rr(),p=As(),g=`<div style="page-break-before:always"></div>
  <h2 style="color:#0028a5;margin:8px 0 2px">\u{1F9ED} ${L("pass_karr_titel")}</h2>
  <p style="font-size:11px;color:#5b6478;line-height:1.5;margin-bottom:8px">${L("pass_karr_intro")}</p>`;if(r<6)return g+`<p style="font-size:11.5px;color:#8b94ab">${L("pass_karr_leer")}</p>`;let _=[[L("richtung_bsc"),l.r?`${q.richtungen[l.r].icon} ${X(q.richtungen[l.r].kurz)}`:"\u2014"],[L("richtung_msc"),h.total?Object.entries(h.counts).filter(([,x])=>x>0).map(([x,E])=>`${x} (${E}\xD7)`).join(" \xB7 "):"\u2014"],[L("frage"),u?`${((q.baFormen||{})[u.form]||{}).icon||""} ${X(u.name)}`:"\u2014"],[L("artefakt"),d?`${d.icon} ${X(d.name)}`:"\u2014"],["Wahlpflicht",p&&Ft[p]?X(Ft[p].titel):"\u2014"]];g+=`<h3 style="margin:12px 0 4px">${L("pass_karr_wahl")}</h3>
  <table style="font-size:11.5px">${_.map(([x,E])=>`<tr><th style="width:190px">${x}</th><td>${Se(E)}</td></tr>`).join("")}</table>`;let f=o.p;g+=`<h3 style="margin:16px 0 4px">${L("pass_karr_top")}: ${f.icon} ${Se(X(f.name))} \u2014 ${o.fit}%</h3>
  <p style="font-size:11.5px;color:#2c3550;margin:0 0 6px">${Se(X(f.hint))}</p>`;let m=f.stelle;if(m){let x=E=>`<ul style="margin:0;padding-left:16px">${E.map(T=>`<li style="margin:2px 0">${Se(X(T))}</li>`).join("")}</ul>`;g+=`<table style="font-size:11.5px;margin-top:6px">
      <tr><th style="width:150px">${L("stelle_titel")}</th><td><b>${Se(X(m.titel))}</b></td></tr>
      <tr><th>${L("stelle_pensum")}</th><td>${Se(X(m.pensum))}</td></tr>
      <tr><th>${L("stelle_wo")}</th><td>${Se(X(m.wo))}</td></tr>
      <tr><th>${L("stelle_aufgaben")}</th><td>${x(m.aufgaben)}</td></tr>
      <tr><th>${L("stelle_anforderungen")}</th><td>${x(m.anforderungen)}</td></tr>
      <tr><th>${L("stelle_lohn")}</th><td>${Se(X(m.lohn))}<div style="font-size:10px;color:#5b6478;margin-top:3px">${L("lohnq_"+m.lohnQ)} \u2014 ${Se(X(m.lohnBeleg))}</div></td></tr>
      <tr><th>${L("stelle_wann")}</th><td>${Se(X(m.wann))}</td></tr>
    </table>`}let v=pd(f);g+=`<p style="font-size:11.5px;margin:8px 0 3px"><b>${L("gap_titel")}</b></p>`,g+=v.length?`<table style="font-size:11px"><tr><th>${L("kompetenz")}</th><th style="width:70px;text-align:center">${L("stufe")}</th><th style="width:70px;text-align:center">${L("ziel_kurz")}</th></tr>
       ${v.map(x=>{let E=rn[x.id];return`<tr><td>${x.id} \xB7 ${E?Se(X(E.name)):""}</td><td style="text-align:center">${x.ist}</td><td style="text-align:center"><b>${x.ziel}</b></td></tr>`}).join("")}</table>`:`<p style="font-size:11.5px;color:#0e8f7e;margin:0">\u2713 ${L("gap_ok")}</p>`,f.roadmap&&f.roadmap.length&&(g+=`<p style="font-size:11.5px;margin:12px 0 3px"><b>${L("roadmap_titel")}</b></p>
    <ol style="font-size:11.5px;line-height:1.55;padding-left:18px;margin:0">
      ${f.roadmap.map(x=>`<li style="margin:4px 0"><b>${Se(X(x.t))}</b> \u2014 ${Se(X(x.d))}</li>`).join("")}</ol>`),f.wahl&&f.wahl.hinweis&&(g+=`<p style="font-size:10.5px;color:#5b6478;line-height:1.5;margin:8px 0 0;border-left:3px solid #dbe1ef;padding-left:8px">${Se(X(f.wahl.hinweis))}</p>`),c.length&&(g+=`<h3 style="margin:16px 0 4px">${L("pass_karr_alt")}</h3>
    <table style="font-size:11.5px">${c.map(x=>`<tr><th style="width:230px">${x.p.icon} ${Se(X(x.p.name))}</th><td style="width:52px;text-align:center"><b>${x.fit}%</b></td><td>${x.p.stelle?`<b>${Se(X(x.p.stelle.titel))}</b><br><span style="color:#5b6478">${Se(X(x.p.stelle.pensum))}</span>`:Se(X(x.p.hint))}</td></tr>`).join("")}</table>`);let y=(t.lit||[]).slice(0,8);return y.length&&(g+=`<p style="font-size:10px;color:#5b6478;line-height:1.5;margin-top:12px"><b>${L("pass_karr_q")}</b><br>
      ${y.map(x=>`${Se(x.apa)}${x.url?` <a href="${x.url}" style="color:#0028a5">${x.url}</a>`:""}`).join("<br>")}</p>`),g+=`<p style="font-size:10px;color:#8b94ab;margin-top:6px">${L("pass_karr_disclaimer")}</p>`,g}document.getElementById("btnPass").onclick=()=>{let{score:i,max:e}=hi(),t=new Date().toLocaleDateString(I.lang==="de"?"de-CH":"en-GB"),n="";for(let d of q.slots){if(!je(d.slot))continue;let p=I.placed[I.mode][d.slot],g=I.quests[d.slot]||{},{kat:_}=en(d),f=p&&p.opt&&Ft[p.opt]?Ft[p.opt].ects:d.ects,m=(()=>{let v=im(d.slot),y=v?" \xB7 "+X(v.name):"";if(d.slot==="BA"){let x=Xi(),E=Rr();x&&(y+=" \xB7 "+(((q.baFormen||{})[x.form]||{}).icon||"")+" "+X(x.name)),E&&(y+=" \xB7 "+E.icon+" "+X(E.name))}return y})();n+=`<tr><td>${p&&p.opt||d.code}</td><td>${At(d)}${p&&p.sp?" \xB7 "+p.sp:""}${m}</td><td style="text-align:center">${f}</td><td style="text-align:center">[${_}]</td><td>${g.done?"\u2726 ":""}${g.note?(g.done?"":"\u{1F4DD} ")+Se(g.note):""}</td></tr>`}let s="";for(let d of["fa","ki","fu"]){let p=q.felder[d];s+=`<h3 style="margin:14px 0 6px;color:${p.farbe}">${X(p.name)}</h3>`;for(let g of q.kompetenzen.filter(_=>_.feld===d)){let _=e[g.id]?Math.round(i[g.id]/e[g.id]*100):0;if(s+=`<div style="display:flex;align-items:center;gap:8px;margin:3px 0;font-size:12px">
        <span style="width:260px">${g.id} \xB7 ${X(g.name)}</span>
        <span style="flex:1;background:#eee;border-radius:4px;height:10px;overflow:hidden"><span style="display:block;height:100%;width:${_}%;background:${p.farbe}"></span></span>
        <span style="width:36px;text-align:right">${_}%</span></div>`,g.sub&&g.sub.length)for(let f of g.sub){let m=Em(f,i,e);s+=`<div style="display:flex;align-items:center;gap:8px;margin:1px 0 1px 22px;font-size:10.5px;color:#555">
            <span style="width:238px">${f.id} \xB7 ${X(f.name)}</span>
            <span style="flex:1;background:#f2f2f2;border-radius:3px;height:6px;overflow:hidden"><span style="display:block;height:100%;width:${m}%;background:${p.farbe};opacity:.65"></span></span>
            <span style="width:36px;text-align:right">${m}%</span></div>`}}}s+='<p style="font-size:9.5px;color:#8b94ab;margin-top:4px">FS1\u2013FS12: AIComp-Future-Skills-Felder (Ehlers et al., 2024) \u2014 Detailebene zu Fu1\u2013Fu3.</p>';let r=window.ICH_STUFEN||{},a=window.ICH_LERNZIELE||{},o=`<div style="page-break-before:always"></div>
  <h2 style="color:#0028a5;margin:8px 0 2px">\u{1F9ED} ${L("ich_titel")}</h2>
  <p style="font-size:11px;color:#5b6478;line-height:1.5;margin-bottom:6px">${L("ich_intro")}</p>`;for(let d of["fa","ki","fu"]){let p=q.felder[d],g=d==="fa"?"F":d==="ki"?"K":"S";o+=`<h3 style="color:${p.farbe};border-bottom:2.5px solid ${p.farbe};padding-bottom:3px;margin:16px 0 6px">${X(p.name)}</h3>`;let _=!1;for(let m of q.kompetenzen.filter(v=>v.feld===d)){let v=es(m.id);if(!v)continue;_=!0;let y=(r[m.id]||[])[v-1];o+=`<div style="margin:8px 0 2px;display:flex;align-items:baseline;gap:8px;flex-wrap:wrap">
        <b style="font-size:12px">${m.id} \xB7 ${X(m.name)}</b>
        <span style="font-size:9px;font-weight:700;color:#fff;background:${p.farbe};border-radius:999px;padding:2px 8px;white-space:nowrap">${L("stufe")} ${v} \xB7 ${X(q.stufen[v-1].name)}</span></div>`,y&&(o+=`<p style="font-size:11.5px;font-style:italic;color:#2c3550;margin:0 0 2px 2px">\xAB${X(y)}\xBB</p>`)}if(!_){o+=`<p style="font-size:10.5px;color:#8b94ab">${L("ich_keine")}</p>`;continue}let f="";for(let m of q.slots){if(!je(m.slot))continue;let v=(I.placed[I.mode][m.slot]||{}).opt||m.code;(a[v]||[]).forEach(y=>{if(!(y.b||[]).includes(g))return;let x=wm(m,[g]).map(E=>`<b style="color:${p.farbe}">${E}</b>`).join(" ");f+=`<li style="margin:3px 0">${x?x+" \u2014 ":""}${X(y)} <span style="color:#8b94ab;font-size:9px;white-space:nowrap">\xB7 ${At(m).split(",")[0]}</span></li>`})}f&&(o+=`<p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#5b6478;margin:9px 0 2px">\u2713 ${L("ich_konkret")}</p>
      <ul style="font-size:10.5px;line-height:1.5;padding-left:16px;margin:0 0 8px">${f}</ul>`)}o+=`<p style="font-size:9.5px;color:#8b94ab;margin-top:6px">${L("ich_fussnote")}</p>`;let c=uv(i,e),l=dv(),h=`<!DOCTYPE html><html lang="${I.lang}"><head><meta charset="utf-8"><title>Kompetenzpass</title>
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
  <h1>\u{1F393} ${L("pass")} \u2014 ${Se(I.name)||"\u2014"}</h1>
  <p style="font-size:12.5px;color:#5b6478">${L("passdatum")}: ${t} \xB7 ${I.mode==="serious"?L("modus_serious"):L("modus_frei")} \xB7 BSc: ${An("bsc")}/120 \xB7 MSc: ${An("msc")}/120 ${L("ects")}</p>
  ${l?`<img src="${l}" alt="Kompetenzhaus" style="width:100%;border-radius:12px;margin:8px 0">`:""}
  ${s}
  ${o}
  ${c}
  <h3 style="margin-top:18px">${L("bauplan")}</h3>
  <table><tr><th>Code</th><th>Modul</th><th>${L("ects")}</th><th>[A/B/C]</th><th>Quest \u2726</th></tr>${n}</table>
  <p class="hint">${X(q.meta.hinweis)}<br>Kompetenzmodell: APA (2023); DGPs (2014); QAA (2023); Bass et al. (2025); Miao et al. (2024); Ehlers et al. (2024); Perkins et al. (2025).</p>
  </body></html>`,u=window.open("about:blank");if(u&&u.document)u.document.write(h),u.document.close();else{let d=new Blob([h],{type:"text/html"}),p=document.createElement("a");p.href=URL.createObjectURL(d),p.download="kompetenzpass.html",p.click(),URL.revokeObjectURL(p.href)}};function md(){if(!I.envAuto)return;I.season=ed();let i=new Date,e=i.getHours()+i.getMinutes()/60;I.tod=Math.max(0,Math.min(100,Math.round((e-5.5)/17*100)));let t=document.getElementById("todSlider");t&&(t.value=I.tod),Cs()}document.querySelectorAll("#envRow .envbtn[data-season]").forEach(i=>{i.onclick=()=>{I.envAuto=!1,I.season=i.dataset.season,it(),Cs()}});document.getElementById("todSlider").oninput=i=>{I.envAuto=!1,I.tod=+i.target.value,it(),Cs()};document.getElementById("btnEnvAuto").onclick=()=>{I.envAuto=!I.envAuto,it(),I.envAuto&&md(),Cs(),_t(L(I.envAuto?"envauto_an":"envauto_aus"))};setInterval(md,6e4);document.getElementById("btnFoto").onclick=()=>{document.body.classList.add("foto");let i=Nt.position.clone(),e=Wt.target.clone(),t=sm()&&An("msc")>0?new M(0,3.5,0):new M(-11,3.5,0);Vn(new M(t.x-19,13,28),t,1.2,()=>{Sc(),Tn.render(Je,Nt);try{let n=document.createElement("a");n.href=Tn.domElement.toDataURL("image/png"),n.download="kompetenzhaus-"+new Date().toISOString().slice(0,10)+".png",n.click(),_t("\u{1F4F7} "+L("foto_hint"))}catch{}setTimeout(()=>{document.body.classList.remove("foto"),Vn(i,e,1)},600)})};function dv(){Tn.render(Je,Nt);try{return Tn.domElement.toDataURL("image/jpeg",.82)}catch{return null}}document.getElementById("togL").onclick=()=>document.getElementById("panelL").classList.toggle("open");document.getElementById("togR").onclick=()=>document.getElementById("panelR").classList.toggle("open");var Et=null;function ht(i,e,t,n,s,r,a,o=0){let c=new W(new Lt(i,e,t,2,Math.min(.04,i/4)),new ie({color:n,roughness:.85}));return c.position.set(s,r,a),c.rotation.y=o,c}function pv(i,e,t,n){let s=new Oe,r=i.form==="slab"||i.form==="step",a=new ie({color:r?14276043:15986662,roughness:.97,side:mt}),o=new ie({color:r?11841702:13215863,roughness:.92}),c=e-.2,l=t-.15,h=n-.2,u=new W(new Ve(c,.06,h),o);u.position.y=.05,s.add(u);let d=new W(new Qe(c,l),a);d.position.set(0,l/2,-h/2),s.add(d),d.userData.wallN=new M(0,0,1);let p=new W(new Qe(h,l),a.clone());p.rotation.y=Math.PI/2,p.position.set(-c/2,l/2,0),s.add(p),p.userData.wallN=new M(1,0,0);let g=new W(new Qe(h,l),a.clone());g.rotation.y=-Math.PI/2,g.position.set(c/2,l/2,0),s.add(g),g.userData.wallN=new M(-1,0,0);let _=i.gruppe,f=.08,m=i.code;if(r&&m==="06SM200-001"){for(let C=0;C<2;C++){let U=ht(.52,.6,.5,16053488,-c*.3+C*.62,f+.3,-h*.32);s.add(U);let H=new W(new si(.15,18),new ie({color:1845056,roughness:.25,metalness:.3}));H.position.set(-c*.3+C*.62,f+.32,-h*.32+.26),s.add(H)}let A=new W(new $e(.2,.16,.26,9),new ie({color:14263361,roughness:1,flatShading:!0}));A.position.set(c*.22,f+.13,h*.1),s.add(A);let D=new W(new $e(.012,.012,c*.7,5),new ie({color:9147563}));D.rotation.z=Math.PI/2,D.position.set(0,l*.78,h*.2),s.add(D),[14248523,4886745,15979342].forEach((C,U)=>s.add(ht(.16,.22,.02,C,-.3+U*.3,l*.78-.12,h*.2)))}else if(r&&m==="06SM200-002"){let A=new W(new $e(.3,.3,.85,12),new ie({color:13193021,roughness:.55,metalness:.25}));A.position.set(-c*.28,f+.43,-h*.28),s.add(A);let D=new W(new $e(.05,.05,c*.75,8),new ie({color:10134197,metalness:.6,roughness:.35}));D.rotation.z=Math.PI/2,D.position.set(0,l*.85,-h/2+.12),s.add(D);let C=new W(new $e(.05,.05,l*.7,8),D.material);C.position.set(-c*.28,l*.5,-h/2+.12),s.add(C),s.add(ht(.42,.55,.16,9147563,c*.28,l*.55,-h/2+.12));let U=new W(new si(.09,14),new ie({color:16053488}));U.position.set(c*.28,l*.55,-h/2+.22),s.add(U)}else if(r&&m==="06SM200-003"){let A=new W(new $e(.02,.02,c*.7,6),new ie({color:9070146}));A.rotation.z=Math.PI/2,A.position.set(0,l*.7,-h*.3),s.add(A),[10405,14248523,2792847].forEach((D,C)=>s.add(ht(.2,.34,.06,D,-.3+C*.3,l*.7-.2,-h*.3))),s.add(ht(c*.6,.09,.28,9070146,0,f+.1,h*.2))}else if(r&&m==="06SM200-500"){for(let A=0;A<2;A++){let D=ht(.42,1,.4,1844019,-c*.25+A*.6,f+.5,-h*.3);s.add(D);for(let C=0;C<4;C++){let U=new W(new Qe(.3,.02),new ie({color:988970,emissive:C%2?3526783:4886745,emissiveIntensity:.9}));U.position.set(-c*.25+A*.6,f+.24+C*.2,-h*.3+.21),s.add(U)}}s.add(ht(.7,.06,.4,9070146,c*.24,f+.36,h*.12))}else if(r&&m==="06SM200-501"){let A=ht(1.1,1.05,.26,9070146,-c*.2,f+.53,-h*.32);s.add(A),[14248523,10405,2792847,14263361,6185166,14774357].forEach((D,C)=>s.add(ht(.26,.09,.2,D,-c*.2-.38+C%3*.38,f+.4+Math.floor(C/3)*.34,-h*.32)))}else if(r&&m==="06SM200-502"){for(let A=0;A<2;A++)s.add(ht(.9,.95,.24,10127986,-c*.22+A*1,f+.48,-h*.33));[13287336,12173519,14263361,13287336].forEach((A,D)=>s.add(ht(.3,.22,.3,A,-c*.3+D%2*.5,f+.3+Math.floor(D/2)*.35,-h*.33)))}else if(_==="meth"||_==="mein"){s.add(ht(.9,.06,.5,9070146,-c*.2,f+.38,-h*.25));let A=new W(new Qe(.5,.32),new ie({color:792624,emissive:8369384,emissiveIntensity:.55}));A.position.set(-c*.2,f+.62,-h*.25),s.add(A),s.add(ht(.34,.5,.34,3752282,-c*.2,f+.25,h*.05))}else if(_==="prop"){for(let A=0;A<2;A++)for(let D=0;D<3;D++)s.add(ht(.34,.42,.3,4156616,(D-1)*.5,f+.21,h*.05+A*.45));s.add(ht(.8,.55,.35,9070146,0,f+.28,-h*.3))}else if(_==="klin"){s.add(ht(.45,.4,.42,14248523,-c*.22,f+.2,0,.5)),s.add(ht(.45,.4,.42,2792847,c*.22,f+.2,0,-.5)),s.add(ht(.32,.3,.32,9070146,0,f+.15,-h*.05));let A=new W(new Rt(.16,0),new ie({color:5149760,flatShading:!0}));A.position.set(c*.34,f+.45,-h*.32),s.add(A),s.add(ht(.1,.28,.1,12159578,c*.34,f+.14,-h*.32))}else if(_==="enk"){s.add(ht(.3,.55,.3,14212326,0,f+.28,-h*.15));let A=new W(new Rt(.2,1),new ie({color:15245492,roughness:.6,flatShading:!0}));A.position.set(0,f+.72,-h*.15),A.name="spin",s.add(A)}else if(_==="swod"){let A=new W(new $e(.42,.42,.06,12),new ie({color:9070146,roughness:.85}));A.position.set(0,f+.4,0),s.add(A),s.add(ht(.08,.4,.08,7033144,0,f+.2,0));for(let D=0;D<4;D++){let C=D/4*Math.PI*2;s.add(ht(.3,.38,.28,14263361,Math.cos(C)*.72,f+.19,Math.sin(C)*.72,-C))}}else{let A=ht(1.1,1.1,.24,9070146,-c*.24,f+.55,-h*.36);s.add(A),[14248523,2792847,4156616,14263361,6185166].forEach((D,C)=>s.add(ht(.1,.26,.16,D,-c*.24-.4+C*.2,f+.78,-h*.36))),s.add(ht(.7,.06,.45,11109726,c*.2,f+.38,0)),s.add(ht(.3,.44,.3,3752282,c*.2,f+.22,h*.28))}let v=new Ma(16769971,r?.75:.95,Math.max(c,h)*3.2,1.8);v.position.set(0,l*.86,0),s.add(v);let y=new W(new kn(.14,.12,10,1,!0),new ie({color:15979342,side:mt,emissive:16769971,emissiveIntensity:.35}));if(y.position.set(0,l*.9,0),s.add(y),!r){let A=new W(new Qe(c,h),new ie({color:15262938,side:mt,roughness:1}));A.rotation.x=Math.PI/2,A.position.y=l,s.add(A)}if(r){for(let A of[-c*.28,c*.28]){let D=new W(new Qe(.44,.2),new ie({color:12376302,emissive:12376302,emissiveIntensity:.4}));D.position.set(A,l*.9,-h/2+.02),s.add(D)}if(h>3.2){let D=l/7;for(let C=0;C<6;C++){let U=new W(new Ve(.78,D,.36),uc.clone());U.position.set(c/2-.44,D/2+C*D,h/2-.28-(5-C)*.37),s.add(U)}}}else{let A=new W(new si(Math.min(c,h)*.32,22),new ie({color:new de(q.gruppen[i.gruppe].farbe).lerp(new de(16777215),.62),roughness:1}));A.rotation.x=-Math.PI/2,A.position.y=.09,s.add(A);let D=ht(.5,.38,.03,15921385,c/2-.06,l*.6,0,Math.PI/2);s.add(D);let C=new W(new Qe(.4,.28),new ie({color:10404832}));C.rotation.y=-Math.PI/2,C.position.set(c/2-.085,l*.6,0),s.add(C);let U=new W(new kn(.09,.12,4),new ie({color:5143130,flatShading:!0}));U.rotation.y=-Math.PI/2,U.position.set(c/2-.09,l*.57,.03),s.add(U)}i.code==="06SM200-003"&&[{p:"P1",info:{de:"P1 \xB7 \xABWie \u2039denkt\u203A ein LLM?\xBB \u2014 Live-Demo, Falschinfo finden (KI4)",en:"P1 \xB7 'How does an LLM think?' \u2014 live demo, spotting misinformation (KI4)"}},{p:"P2",info:{de:"P2 \xB7 Spielregeln & Disclosure \u2014 \xABassistieren, nicht ersetzen \u2014 deklarieren \u2014 verifizieren\xBB (KI5)",en:"P2 \xB7 Rules & disclosure \u2014 'assist, don't replace \u2014 declare \u2014 verify' (KI5)"}},{p:"P3",info:{de:"P3 \xB7 Fakten-Check \u2014 erfundene Referenzen gegen das Lehrbuch pr\xFCfen (KI6)",en:"P3 \xB7 Fact check \u2014 testing invented references against the textbook (KI6)"}},{p:"P4",info:{de:"P4 \xB7 Erste Nutzung mit Haltung \u2014 Prompt-Duell, Mit-/Ohne-KI-Reflexion (KI1)",en:"P4 \xB7 First use with attitude \u2014 prompt duel, with/without-AI reflection (KI1)"}}].forEach((D,C)=>{let U=new Oe,H=new W(new Qe(.34,.44),new ie({color:16777215,roughness:.7})),O=Za(D.p,"#0028a5");O.scale.set(.4,.16,1),O.position.z=.02,U.add(H,O),U.rotation.y=Math.PI/2,U.position.set(-c/2+.03,l*.55,-h*.3+C*.5),U.children.forEach(J=>J.userData.info=D.info),U.userData.info=D.info,s.add(U)});let{komp:x,haupt:E}=en(i),T=[...x.fa||[],...x.ki||[],...x.fu||[]].slice(0,6);return T.forEach((A,D)=>{let C=rn[A];if(!C)return;let U=q.felder[C.feld].farbe,H=new Oe,O=new W(new Qe(.56,.42),new ie({color:16777215,roughness:.6})),J=Za(A,U);J.scale.set(.62,.24,1),J.position.z=.02,H.add(O,J);let V=Math.min(3,T.length),Q=(D%V-(V-1)/2)*.75,ee=l*.62-Math.floor(D/V)*.55;H.position.set(Q,ee,-h/2+.03),H.userData.kompId=A,H.children.forEach(le=>le.userData.kompId=A),s.add(H)}),s.traverse(A=>{A.isMesh&&(A.castShadow=!1,A.receiveShadow=!1)}),s}function Cm(i){Et&&to();let e=gt[i],t=Dt[i];if(!e||!t||!["box","tower","wing","bay","slab","step"].includes(e.form))return;let n=e.form==="slab"||e.form==="step",s=e.pos.w*Ze,r=e.pos.d*Ze,a=n?Ga-.12:(e.form==="wing"?1.7:e.pos.h)*Sn,o=pv(e,s,a,r);o.position.copy(t.position),n&&(o.position.y=.24-Ga),Je.add(o);let c=[];if(t.traverse(_=>{_.isMesh&&_.material&&(c.push({mat:_.material,opacity:_.material.opacity,transparent:_.material.transparent}),_.material.transparent=!0,_.material.opacity=.13,_.material.depthWrite=!1,_.material.needsUpdate=!0)}),n)for(let _ of[vc,rd,ad])_.transparent=!0,_.opacity=.14,_.depthWrite=!1,_.needsUpdate=!0;let l=e.pos.z>=0||e.form==="wing"?1:-1,h=o.position.clone().add(new M(0,a*.45,0)),u=n?r*.62+1.6:r*1.9+1.2,d=n?o.position.clone().add(new M(0,Ga+2.6,l*u)):t.position.clone().add(new M(0,a*.55,l*u)),p=Wt.minDistance;Wt.minDistance=.4,document.body.classList.add("inroom"),Vn(d,h,1.1);let g=document.createElement("button");g.className="iconbtn blue",g.style.cssText="position:fixed;left:50%;transform:translateX(-50%);bottom:18px;z-index:26",g.textContent="\u{1F6AA} "+L("verlassen"),g.onclick=to,document.body.appendChild(g),Is(),Et={id:i,group:o,saved:c,btn:g,prevMin:p,keller:n},SND.pick()}function to(){if(!Et)return;if(document.body.classList.remove("inroom"),Je.remove(Et.group),Et.saved.forEach(e=>{e.mat.opacity=e.opacity,e.mat.transparent=e.transparent,e.mat.depthWrite=!0,e.mat.needsUpdate=!0}),Et.keller)for(let e of[vc,rd,ad])e.opacity=1,e.transparent=!1,e.depthWrite=!0,e.needsUpdate=!0;Et.btn.remove(),Wt.minDistance=Et.prevMin;let i=Dt[Et.id];i&&Vn(i.position.clone().add(new M(-9,8,15)),i.position.clone(),1),Et=null}function fv(){let i=document.getElementById("coach");if(je("003")){document.getElementById("obStart").textContent=L("tour_fertig"),Qt("onboard");return}let e=gt["003"],t=q.haeuser[e.haus],n=new M(t.origin[0]+e.pos.x*Ze,.7,t.origin[2]+e.pos.z*Ze),s=window.innerWidth<720;Vn(new M(n.x+3,s?6.5:4.5,n.z+(s?13:8)),n,1.7,()=>{!je("003")&&!I.onboarded&&i.classList.contains("open")&&(Wa(e),Wn="003",Jt())}),i.style.cssText="left:50%;transform:translateX(-50%);bottom:26px",i.innerHTML=`<b>${L("fb1_t")}</b>${L("fb1")}<div class="cactions"><button data-fbskip style="background:rgba(255,255,255,.18);color:#fff">${L("fb1_skip")}</button><button data-fbgo>${L("fb1_go")}</button></div>`,i.classList.add("open"),i.querySelector("[data-fbgo]").onclick=()=>{SND.unlock(),je("003")||ao(gt["003"])},i.querySelector("[data-fbskip]").onclick=()=>{i.classList.remove("open"),ss(),Qt("onboard")}}function lo(i){if(I.tourDone&&!i)return;if(document.getElementById("milestone").classList.contains("open")){setTimeout(()=>lo(i),2500);return}let e=document.getElementById("coach"),t=window.innerWidth<=1080,n=Nt.position.clone(),s=Wt.target.clone(),r="left:50%;transform:translateX(-50%);bottom:26px",a=document.getElementById("tutorFab").style.display==="block",o=(d,p,g,_)=>[new M(d+g,3.6,p+_),new M(d,.9,p)],c=[{sel:"#panelL",open:"panelL",tt:"tour1_t",tx:"tour1",css:t?r:"left:322px;top:120px"},{sel:"#card",tt:"tour2_t",tx:"tour2",css:"left:50%;transform:translateX(-50%);bottom:calc(46vh + 20px)"},{sel:"#panelR",open:"panelR",tt:"tour3_t",tx:"tour3",css:t?r:"right:322px;top:120px;left:auto"},{sel:"#btnPass",tt:"tour4_t",tx:"tour4",css:t?r:"right:12px;top:66px;left:auto"},{fly:o($i.position.x,$i.position.z,3.2,4.5),tt:"tour5_t",tx:"tour5",css:r},{fly:o(qi.position.x,qi.position.z,3,4.5),tt:"tour6_t",tx:"tour6",css:r},{fly:o(ji.position.x,ji.position.z,4,5.5),tt:"tour7_t",tx:"tour7",css:r},a?{sel:"#tutorFab",tt:"tour8_t",tx:"tour8",css:t?"right:12px;bottom:80px;left:auto":"right:320px;bottom:80px;left:auto"}:null].filter(Boolean),l=0,h=()=>{document.querySelectorAll(".coach-target").forEach(d=>d.classList.remove("coach-target")),e.classList.remove("open"),I.tourDone=!0,it(),Vn(n,s,1.2)},u=()=>{if(document.querySelectorAll(".coach-target").forEach(p=>p.classList.remove("coach-target")),t&&(document.getElementById("panelL").classList.remove("open"),document.getElementById("panelR").classList.remove("open")),l>=c.length){h();return}let d=c[l];if(t&&d.open&&document.getElementById(d.open).classList.add("open"),d.sel==="#card"&&!document.getElementById("card").classList.contains("open")){let p=Wn||bc();p&&Qi(p)}if(d.sel){let p=document.querySelector(d.sel);p&&p.offsetParent!==null&&p.classList.add("coach-target")}d.fly&&Vn(d.fly[0],d.fly[1],1.3),e.style.cssText=d.css,e.innerHTML=`<b>${L(d.tt)}</b>${L(d.tx)}<div class="cactions"><span class="cstep">${l+1}/${c.length}</span><span style="display:flex;gap:6px"><button data-skip style="background:rgba(255,255,255,.18);color:#fff">${L("tour_skip")}</button><button data-next>${l===c.length-1?L("tour_fertig"):L("tour_weiter")}</button></span></div>`,e.classList.add("open"),e.querySelector("[data-next]").onclick=()=>{l++,SND.pick(),u()},e.querySelector("[data-skip]").onclick=()=>{SND.pick(),h()}};u()}function Zf(i){let e=JSON.parse(JSON.stringify(I.placed[I.mode]));try{let t=I.placed[I.mode];if(i.r)for(let c of["s11","s12","s13","BA"]){if(!t[c])continue;let l=(q.themen[c]||[]).find(h=>h.r===i.r);l&&(t[c].thema=l.id,c==="BA"&&(t[c].frage=null))}if(i.sp)for(let c of["s04","s05","s06","s07","s08","s09"])t[c]&&(t[c].sp=i.sp);i.wp&&t.wp&&(t.wp.opt=i.wp);let{score:n,max:s}=hi(),r={};q.kompetenzen.forEach(c=>r[c.id]=s[c.id]?n[c.id]/s[c.id]:0);let a={};(window.KARRIERE.pfade||[]).forEach(c=>a[c.id]=oo(c,r));let o={};return q.kompetenzen.forEach(c=>o[c.id]=es(c.id)||0),{passung:a,pct:r,stufen:o}}finally{I.placed[I.mode]=e}}var zn={r:null,sp:null,wp:null},xr=!1,bi=null;function mv(){let i=["s11","s12","s13","BA","s04","s05","s06","s07","s08","s09","wp"].filter(s=>je(s)).length,e=document.getElementById("wennBody");if(i<2){e.innerHTML=`<p style="font-size:12.5px;color:#5b6478;line-height:1.55">${L("wenn_leer")}</p>`,Qt("wenn");return}let t=ts(),n=ns();!zn.r&&!zn.sp&&!zn.wp&&(zn.r=["klin","ekn","swo"].find(s=>s!==t.r)||null,zn.sp=["DeNC","HEA","SEOP"].find(s=>s!==n.dom)||null),Im(),Qt("wenn")}function Im(){let i=document.getElementById("wennBody"),e=ts(),t=ns(),n=As(),s=Zf({}),r=Zf(zn),a=(u,d,p,g,_)=>`<button class="wbtn${_?" on":""}" data-typ="${u}" data-wert="${d}"
      style="${_?`border-color:${g};background:${g}1a;color:${g}`:""}">${Se(p)}</button>`,o=`<div class="wgrid">
    <div class="wcol"><h4>${L("wenn_jetzt")}</h4>
      <p>${e.r?`${q.richtungen[e.r].icon} ${Se(X(q.richtungen[e.r].kurz))}`:`<span style="color:#8b94ab">${L("richtung_keine")}</span>`}</p>
      <p>${t.total?Object.entries(t.counts).filter(([,u])=>u>0).map(([u,d])=>`${u} ${d}`).join(" \xB7 "):"\u2014"}</p>
      <p>${n&&Ft[n]?Se(X(Ft[n].titel)):"\u2014"}</p>
    </div>
    <div class="wcol alt"><h4>${L("wenn_alt")}</h4>
      <div class="wrow">${["klin","ekn","swo"].map(u=>a("r",u,q.richtungen[u].icon+" "+X(q.richtungen[u].kurz),q.richtungen[u].farbe,zn.r===u)).join("")}</div>
      <div class="wrow">${["DeNC","HEA","SEOP"].map(u=>a("sp",u,u,q.schwerpunkte[u].farbe,zn.sp===u)).join("")}</div>
      <div class="wrow">${["06SM200-511","06SM200-512"].filter(u=>Ft[u]).map(u=>a("wp",u,X(Ft[u].titel),"#b3831d",zn.wp===u)).join("")}</div>
    </div>
  </div>`,c=(window.KARRIERE.pfade||[]).map(u=>({p:u,a:s.passung[u.id],b:r.passung[u.id],d:r.passung[u.id]-s.passung[u.id]})).sort((u,d)=>Math.abs(d.d)-Math.abs(u.d)),l=c.filter(u=>u.d!==0);o+=`<h4 class="wh">${L("wenn_wege")}</h4>`,o+=l.length?`<table class="wtab"><tr><th>${L("wenn_weg")}</th><th>${L("wenn_jetzt")}</th><th>${L("wenn_dann")}</th><th></th></tr>
      ${c.slice(0,8).map(u=>{let d=u.d>0?"var(--ok)":u.d<0?"#c0392b":"#8b94ab";return`<tr><td>${u.p.icon} ${Se(X(u.p.name))}</td><td>${u.a}%</td><td><b>${u.b}%</b></td>
          <td style="color:${d};font-weight:800;white-space:nowrap">${u.d>0?"\u25B2 +":u.d<0?"\u25BC ":"\u2013 "}${u.d!==0?Math.abs(u.d):""}</td></tr>`}).join("")}</table>`:`<p class="whint">${L("wenn_gleich")}</p>`;let h=q.kompetenzen.map(u=>({k:u,d:Math.round((r.pct[u.id]-s.pct[u.id])*100),sa:s.stufen[u.id],sb:r.stufen[u.id]})).filter(u=>u.d!==0||u.sa!==u.sb).sort((u,d)=>Math.abs(d.d)-Math.abs(u.d)).slice(0,6);if(h.length){o+=`<h4 class="wh">${L("wenn_komp")}</h4><div class="wchips">`;for(let u of h){let d=q.felder[rn[u.k.id].feld],p=u.sa!==u.sb?` \xB7 ${L("stufe")} ${u.sa}\u2192${u.sb}`:"";o+=`<span class="wchip" style="border-color:${d.farbe};color:${d.farbe}" title="${Se(X(u.k.name))}">
        ${u.k.id} ${u.d>0?"+":""}${u.d}%${p}</span>`}o+="</div>"}o+=`<p class="whint">${L("wenn_hinweis")}</p>`,i.innerHTML=o,i.querySelectorAll(".wbtn").forEach(u=>u.onclick=()=>{let d=u.dataset.typ,p=u.dataset.wert;zn[d]=zn[d]===p?null:p,Im()})}function gv(){let{score:i,max:e}=hi(),t={};q.kompetenzen.forEach(a=>t[a.id]=e[a.id]?i[a.id]/e[a.id]:0);let n={};q.kompetenzen.forEach(a=>{let o=es(a.id);o&&(n[a.id]=o)});let s=(window.KARRIERE&&window.KARRIERE.pfade||[]).map(a=>({id:a.id,name:X(a.name),fit:oo(a,t)})).sort((a,o)=>o.fit-a.fit).slice(0,5),r=a=>{let o=q.kompetenzen.filter(l=>l.feld===a),c=o.reduce((l,h)=>l+(e[h.id]||0),0);return c?Math.round(o.reduce((l,h)=>l+(i[h.id]||0),0)/c*100):0};return{v:1,name:I.name||"",mode:I.mode,placed:{[I.mode]:I.placed[I.mode]},tutor:{stufen:n,passung:s,felder:{fa:r("fa"),ki:r("ki"),fu:r("fu")},ects:{bsc:An("bsc"),msc:An("msc")}}}}async function _v(){let i=JSON.stringify(gv());try{return await navigator.clipboard.writeText(i),_t(L("tutor_kopiert")),!0}catch{let t=document.createElement("textarea");t.value=i,Object.assign(t.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%,-50%)",zIndex:60,width:"min(560px,90vw)",height:"160px",fontSize:"11px",padding:"8px"}),document.body.appendChild(t),t.select();try{document.execCommand("copy"),_t(L("tutor_kopiert"))}catch{_t(L("tutor_kopieren_manuell"))}return setTimeout(()=>t.remove(),4e3),!1}}function vv(){let i=window.claude&&typeof window.claude.complete=="function"?window.claude.complete.bind(window.claude):null;if(!i){if(Hf){let h=document.getElementById("tutorFab");h.style.display="block",h.title=L("tutor_ext"),h.setAttribute("aria-label",L("tutor_ext")),h.onclick=async()=>{q.slots.some(u=>je(u.slot))&&await _v(),window.open(Hf,"_blank","noopener")}}return}let e=document.getElementById("tutorFab"),t=document.getElementById("tutor"),n=document.getElementById("tutorMsgs");e.style.display="block";let s=[],r="tutor",a=null,o=(h,u)=>{let d=document.createElement("div");return d.className="tmsg "+h,d.textContent=u,n.appendChild(d),n.scrollTop=n.scrollHeight,d};e.onclick=()=>{t.classList.toggle("open"),t.classList.contains("open")&&!n.children.length&&o("bot",L("tutor_hi"))},document.getElementById("tutorClose").onclick=()=>t.classList.remove("open");let c=()=>{if(r==="vignette"&&a){let d=nd(a);return`ROLLENSPIEL-MODUS im Lernspiel \xABDas Kompetenzhaus\xBB (Psychologiestudium UZH). Du spielst eine FIKTIVE Klientin/Person passend zum Modul \xAB${At(a)}\xBB (Kontext: ${d?X(d.heute).slice(0,240):""}). Regeln: (1) Alles ist erfunden \u2014 keine realen Ratschl\xE4ge, keine echten Diagnosen an die Nutzenden. (2) Bleibe konsequent in der Rolle, antworte kurz (2\u20134 S\xE4tze), realistisch, aber didaktisch ergiebig. (3) KEINE Schilderung akuter Suizidalit\xE4t oder schwerer Krisen; falls die Nutzenden solche Themen einbringen, verlasse die Rolle und verweise auf professionelle Hilfe (in der Schweiz: 143 / 147). (4) Wenn die Nutzenden \xABStopp\xBB schreiben, verlasse die Rolle und stelle GENAU EINE kurze Reflexionsfrage zum Gespr\xE4ch. Sprache: ${I.lang==="de"?"Deutsch (Schweizer Rechtschreibung)":"English"}.`}let h=q.slots.filter(d=>je(d.slot)).map(d=>At(d)).join("; ")||"-",u=bc();return`Du bist der \xABKI-Baututor\xBB im Lernspiel \xABDas Kompetenzhaus\xBB (Psychologiestudium UZH, BSc/MSc; Module = Bausteine eines Hauses; Kompetenzen: Fa1\u2013Fa10 fachlich, KI1\u2013KI6 KI, Fu1\u2013Fu3 Future Skills; Pr\xFCfungslogik [A] KI-frei / [B] teilweise / [C] KI-integriert; Basis: Kompetenzaufbaumodell 02.07.2026, ein ENTWURF als Gespr\xE4chsbasis). Antworte kurz (max. 120 W\xF6rter), freundlich, auf ${I.lang==="de"?"Deutsch (Schweizer Rechtschreibung)":"English"}. Keine Rechtsausk\xFCnfte; verweise bei Studienberatung an die Studienprogrammleitung. Spielstand: gebaut = ${h}. Empfohlener n\xE4chster Baustein: ${u?At(gt[u]):"-"}.`};Wu={open(h,u){r=h||"tutor",a=u||null,s=[],t.classList.add("open"),r==="vignette"&&(n.innerHTML="",o("bot",L("ai_vignette_sys")),l("(Beginne das Gespr\xE4ch mit einer kurzen Vorstellung deiner fiktiven Rolle.)",!0))}};let l=async(h,u)=>{let d=document.getElementById("tutorInput"),p=h||d.value.trim();if(!p)return;h||(d.value=""),u||o("me",p);let g=o("bot","\u2026"),_="Studierende:r",f=r==="vignette"?"Klientin":"Baututor";s.push(_+": "+p);try{let m=await i(c()+`

`+s.slice(-8).join(`
`)+`
`+f+":");g.textContent=String(m).trim(),s.push(f+": "+g.textContent)}catch{g.textContent=L("tutor_err")}r==="vignette"&&(p.toLowerCase().startsWith("stopp")||p.toLowerCase().startsWith("stop"))&&(r="tutor",a=null,s=[])};document.getElementById("tutorSend").onclick=()=>l(),document.getElementById("tutorInput").addEventListener("keydown",h=>{h.key==="Enter"&&l()})}function Ec(i,e,t="application/json"){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:t})),n.download=i,n.click(),URL.revokeObjectURL(n.href)}function yv(){let i=I.msSeen[I.mode]||[],e=q.meilensteine.filter(t=>i.includes(t.id)).map(t=>({"@context":"https://www.w3.org/ns/credentials/v2",type:["VerifiableCredential","OpenBadgeCredential"],name:t.name.de,description:t.text.de,credentialSubject:{type:["AchievementSubject"],identifier:I.name||"anonym",achievement:{type:["Achievement"],name:t.name.de,description:t.text.de,criteria:{narrative:"Meilenstein im Kompetenzhaus (Selbstdeklaration, unsigniert \u2014 Entwurf)"},alignment:q.kompetenzen.map(n=>({type:["Alignment"],targetName:n.id+" "+n.name.de}))}},issuer:{type:["Profile"],name:"Das Kompetenzhaus \u2014 Psychologisches Institut UZH (Entwurf, unsigniert)"},validFrom:new Date().toISOString(),proof:[]}));Ec("kompetenzhaus-badges.json",JSON.stringify(e,null,2))}function xv(){let{score:i,max:e}=hi(),t=`# Kompetenzportfolio \u2014 ${I.name||"\u2014"}

_${L("passdatum")}: ${new Date().toLocaleDateString("de-CH")} \xB7 ${I.mode==="serious"?"Serious Mode":"Freies Bauen"} \xB7 BSc ${An("bsc")}/120 ECTS \xB7 MSc ${An("msc")}/120 ECTS_

> Entwurf auf Basis des Kompetenzaufbaumodells vom 02.07.2026 \u2014 Selbstdeklaration, kein offizieller Leistungsnachweis.

## Kompetenzprofil

`;for(let n of["fa","ki","fu"]){t+=`### ${q.felder[n].name.de}

`;for(let s of q.kompetenzen.filter(r=>r.feld===n)){let r=e[s.id]?Math.round(i[s.id]/e[s.id]*100):0,a=es(s.id);t+=`- **${s.id} ${s.name.de}** \u2014 ${r}%${a?`, Stufe ${a}`:""}${Ja(s.id,a)?`
  - _${Ja(s.id,a)}_`:""}
`}t+=`
`}t+=`## Module & Reflexionen

`;for(let n of q.slots){if(!je(n.slot))continue;let s=I.quests[n.slot]||{},r=Lr(n);t+=`- **${At(n)}** (${n.ects} ECTS)${I.quiz[r]?" \xB7 Quiz \u2713":""}${s.done?" \xB7 Quest \u2726":""}${s.note?`
  - Merksatz: \xAB${s.note}\xBB`:""}
`}Ec("kompetenzhaus-portfolio.md",t,"text/markdown")}var Jf=null;function bv(i){if(Ot.active)return;let{score:e,max:t}=hi(),n=[{id:"fa",name:"Fach",nameEn:"Domain"},{id:"ki",name:"KI",nameEn:"AI"},{id:"fu",name:"Future",nameEn:"Future"}],s=[];for(let a of n){let o=q.kompetenzen.filter(u=>u.feld===a.id).map(u=>u.id),c=o.reduce((u,d)=>u+e[d],0)/Math.max(1,o.reduce((u,d)=>u+t[d],0)),l=i[a.id]||0,h=Math.round((c-l)*1e3)/10;h>=.1&&s.push({txt:I.lang==="de"?a.name:a.nameEn,d:h,farbe:q.felder[a.id].farbe})}if(!s.length)return;let r=document.getElementById("deltaCard");r.innerHTML=`<b>${L("delta_titel")}</b>`+s.map(a=>`<span class="drow"><span class="ddot" style="background:${a.farbe}"></span>${Se(a.txt)} <b style="color:${a.farbe}">+${a.d.toFixed(1)}%</b></span>`).join(""),r.classList.add("show"),clearTimeout(Jf),Jf=setTimeout(()=>r.classList.remove("show"),3400)}function Mv(){let{score:i,max:e}=hi(),t={};for(let n of["fa","ki","fu"]){let s=q.kompetenzen.filter(r=>r.feld===n).map(r=>r.id);t[n]=s.reduce((r,a)=>r+i[a],0)/Math.max(1,s.reduce((r,a)=>r+e[a],0))}return t}var Qf=null;function _t(i){let e=document.getElementById("toast");e.textContent=i,e.classList.add("show"),clearTimeout(Qf),Qf=setTimeout(()=>e.classList.remove("show"),3200)}document.getElementById("obStart").onclick=()=>{I.name=document.getElementById("obName").value.trim().slice(0,40),I.onboarded=!0,it(),document.getElementById("modalOnboard").classList.remove("open"),SND.unlock();let i=je("003")?bc():"003";i&&Qi(i),setTimeout(lo,900)};document.getElementById("modalOnboard").addEventListener("click",i=>{(i.target===document.getElementById("modalOnboard")||i.target.hasAttribute("data-close"))&&!I.onboarded&&!Ot.active&&(I.onboarded=!0,it(),setTimeout(lo,900))});document.getElementById("btnBadges").onclick=yv;document.getElementById("btnOlat").onclick=xv;document.getElementById("btnFb").onclick=()=>{let i=Object.entries(I.fb||{});if(!i.length){_t(L("fb_leer"));return}let e=s=>'"'+String(s||"").replace(/"/g,'""')+'"',t={g:"gruen",y:"gelb",r:"rot"},n=`\uFEFFcode;modul;ampel;kommentar;datum
`;for(let[s,r]of i){let a=gt[s];if(!a)continue;let o=(I.placed[I.mode][s]||{}).opt||a.code;n+=[e(o),e(At(a)),t[r.a]||"",e(r.note),r.ts||""].join(";")+`
`}Ec("kompetenzhaus-feedback-"+new Date().toISOString().slice(0,10)+".csv",n,"text/csv;charset=utf-8"),_t("\u{1F6A6} "+L("fb_exported").replace("{n}",i.length))};var em={de:[["v8 \xB7 Juli 2026","Dein Wahlprofil wird zum Haus: Themenwahl in den drei BSc-Wahlseminaren und im BA-Themenfeld pr\xE4gt Erker, Dach und ein eigenes Wahrzeichen; im Master zeigt jede Vertiefung ihren Schwerpunkt architektonisch, ab 4 von 6 im selben Schwerpunkt entsteht ein grosses Wahrzeichen (Observatorium, Therapiegarten, Glasatrium). Wahlpflicht (goldene Kante) und freie Wahl (weisse Kante) sind sichtbar unterschieden, Auskragendes wird von Konsolen und St\xFCtzen getragen. Neu ausserdem: kuratierte Farbwelten pro Haus, zwei neue Baustile, Karriere-Tab mit Soll-Profilen, L\xFCckenanalyse und \xABNach dem Master\xBB-Roadmaps (inkl. Psychotherapie- und Neuropsychologie-Weg), Masterarbeit als \xABMeisterst\xFCck\xBB der Stufe 4."],["v7 \xB7 Juli 2026","Echter Keller unter dem Bodenniveau (Sockel ragen ins Erdreich), Haus vergr\xF6ssert & Innenr\xE4ume 1:1 an die Aussenh\xFClle gekoppelt, Porch mit Vordach und Stufen, Erstbau-Sequenz f\xFCr neue Besucher:innen, Bauh\xFCtte mit Evidenz zu den 8 Lehrelementen, Ampel-Feedback \u{1F6A6} an jedem Modul mit CSV-Export."],["v6 \xB7 Juli 2026","Mobile-\xDCberarbeitung (Tour, Kontraste, gr\xF6ssere Ziele), Quiz mit Erkl\xE4rung und Sofort-Wiederholung, 7 Karrierewege, Faktenkorrektur IPS-Leistungsnachweis [B]."],["v5 \xB7 Juli 2026","Baukasten-Chips in der Modul-Karte, Vorstufe-\u24EA-Briefkasten, Minor-Beet, KI-Suite in der Artifact-Version."],["v4 \xB7 Juli 2026","Begehbare Kellerr\xE4ume, 12 Future-Skills-Felder (AIComp), Innenraum-Politur, Kompetenzpass als PDF."],["v3 \xB7 Juli 2026","Quiz-Gate im Serious Mode, Karriere-Profil, Innenansicht mit Kompetenz-Tafeln, Foto-Modus, Open-Badges- und Portfolio-Export."]],en:[["v8 \xB7 July 2026","Your elective profile becomes the house: topic choices in the three BSc elective seminars and the thesis field shape bay windows, roof and a landmark of your own; in the Master's each specialisation shows its track architecturally, and 4 of 6 in the same track build a large landmark (observatory, therapy garden, glass atrium). Compulsory electives (gold edge) and free electives (white edge) are visibly distinct, and everything cantilevered is carried by corbels and columns. Also new: curated colour worlds per house, two new building styles, a career tab with target profiles, gap analysis and post-Master roadmaps (incl. the psychotherapy and neuropsychology routes), and the Master's thesis as a level-4 \xABmasterpiece\xBB."],["v7 \xB7 July 2026","A real basement below ground level (plinths reach into the earth), bigger house with interiors matched 1:1 to the exterior shell, porch with canopy and steps, first-build sequence for new visitors, site hut with evidence for the 8 teaching elements, traffic-light feedback \u{1F6A6} on every module with CSV export."],["v6 \xB7 July 2026","Mobile overhaul (tour, contrast, larger targets), quiz with explanations and instant retry, 7 career paths, factual fix for the IPS assessment [B]."],["v5 \xB7 July 2026","Teaching-toolkit chips on module cards, stage-\u24EA mailbox, minor garden bed, AI suite in the artifact edition."],["v4 \xB7 July 2026","Walkable basement rooms, 12 future-skills fields (AIComp), interior polish, passport as PDF."],["v3 \xB7 July 2026","Quiz gate in serious mode, career profile, interior view with competence plaques, photo mode, Open Badges and portfolio export."]]};document.getElementById("btnTour").onclick=()=>{document.getElementById("modalMenu").classList.remove("open"),!Ot.active&&(Is(),lo(!0))};document.getElementById("btnBauhuetteM").onclick=()=>{document.getElementById("modalMenu").classList.remove("open"),dd()};document.getElementById("btnGeraeteM").onclick=()=>{document.getElementById("modalMenu").classList.remove("open"),bm()};document.getElementById("btnChangelog").onclick=()=>{let i=em[I.lang]||em.de;document.getElementById("clogList").innerHTML=i.map(([e,t])=>`<div class="bhrow"><b>${e}</b><p>${t}</p></div>`).join(""),document.getElementById("modalMenu").classList.remove("open"),Qt("changelog")};var Ev=new wa;function Pm(){let i=window.innerWidth,e=window.innerHeight;Tn.setSize(i,e,!1),Nt.aspect=i/e,Nt.updateProjectionMatrix()}window.addEventListener("resize",Pm);Pm();var Vt=0,Lm=0;function Dm(){requestAnimationFrame(Dm),Sc()}function Sc(){Lm=performance.now();let i=Math.min(.5,Ev.getDelta()),e=i;Gu>0&&(Gu-=i,e=0),Vt+=e;for(let t=Ki.length-1;t>=0;t--){let n=Ki[t];n.t+=e;let s=Math.min(1,n.t/n.dur);n.fn(n.ease(s)),s>=1&&(Ki.splice(t,1),n.onDone&&n.onDone())}if(Gn){let t=1+Math.sin(Vt*5)*.02;Gn.scale.set(t,t,t)}for(let t of Object.values(Dt)){let n=t.getObjectByName("sparkle");n&&(n.rotation.y+=e*2.4,n.position.y+=Math.sin(Vt*3)*.0022);let s=t.getObjectByName("flag");s&&(s.rotation.y=Math.sin(Vt*2.2)*.25);let r=t.getObjectByName("pennant");if(r){let a=r.getObjectByName("pflag");a&&(a.rotation.y=Math.sin(Vt*3.1+t.position.x)*.35)}}if(Mi.traverse(t=>{t.name==="flag"&&(t.rotation.y=Math.sin(Vt*1.8)*.3)}),Et&&Et.group.traverse(t=>{if(t.name==="spin"&&(t.rotation.y+=e*.8),t.userData.wallN){let n=Nt.position.clone().sub(Et.group.position).normalize(),r=t.userData.wallN.dot(n)<-.25?.12:1;t.scale.y+=(r-t.scale.y)*Math.min(1,e*9),t.position.y=t.geometry.parameters.height/2*t.scale.y}}),wn.length&&wn[0].emissiveIntensity>0){let t=.9+Math.sin(Vt*7.3)*.04+Math.sin(Vt*13.7)*.03;for(let n of wn)n.emissiveIntensity>0&&(n.emissiveIntensity=t)}if(Cr.visible){let t=Ku[I.season],n=new Pe,s=new ln;for(let r=0;r<hd;r++){let a=F_[r];a.p.y-=t.ambFall*e*(.6+a.s*.5),a.p.x+=Math.sin(Vt*.8+a.ph)*e*.7,a.p.y<.2&&(a.p.y=16+Math.random()*5),s.set(Vt*1.4+a.ph,a.ph,Vt*.9),n.makeRotationFromEuler(s),n.scale(new M(a.s,a.s,a.s)),n.setPosition(a.p),Cr.setMatrixAt(r,n)}Cr.instanceMatrix.needsUpdate=!0}if(Yu){let t=Math.sin(Vt*13);Mt.userData.legs.forEach((n,s)=>n.rotation.x=(s?1:-1)*t*.65),Mt.userData.arms.forEach((n,s)=>n.rotation.x=(s?-1:1)*t*.5)}else Mt.rotation.y+=Math.sin(Vt*.6)*.0012;for(let t of cm)t.position.x+=t.userData.v*e,t.position.x>75&&(t.position.x=-75);if(fc.material.opacity>0){let t=fc.geometry.attributes.position;for(let n=0;n<t.count;n++)t.setY(n,.7+Math.abs(Math.sin(Vt*.7+n*2.1))*2.2),t.setX(n,t.getX(n)+Math.sin(Vt*.5+n)*.008);t.needsUpdate=!0,fc.material.size=.3+Math.sin(Vt*4)*.08}if(Wt.update(),mc>0){mc-=e;let t=mc*.5;Nt.position.x+=(Math.random()-.5)*t,Nt.position.y+=(Math.random()-.5)*t}Tn.render(Je,Nt)}td();Am();var tm=lv();ro();hm();Jt();an();I.onboarded?I.envAuto&&md():(I.season=ed(),I.tod=62);Cs();document.getElementById("todSlider").value=I.tod;vv();no||setTimeout(()=>_t(L("storage_warn")),1500);!tm&&!I.onboarded?setTimeout(fv,700):!tm&&!I.tourDone&&Object.keys(I.placed[I.mode]).length<3&&setTimeout(lo,1200);var wc=(i,e)=>{let t=document.getElementById(i);t&&e&&(t.onclick=()=>{document.getElementById("modalMenu").classList.remove("open"),e.click()})};wc("btnCampusM",document.getElementById("btnCampus"));wc("btnShareM",document.getElementById("btnShare"));wc("btnSoundM",document.getElementById("btnSound"));wc("btnFotoM",document.getElementById("btnFoto"));window.__game={get state(){return I},checkMilestones:xm,save:it,step:Sc,enterRoom:Cm,leaveRoom:to,openBauhuette:dd,avatarClamp:_m,get avatarPos(){return{x:Mt.position.x,z:Mt.position.z}},get interior(){return Et?{id:Et.id,opacity:Et.saved[0]?Et.saved[0].mat.opacity:null}:null},get tweens(){return Ki.map(i=>({t:i.t,dur:i.dur}))},get frame(){return Vt},placeByChip:i=>{let e=gt[i];return e?(Qi(i),ao(e)):!1}};Dm();setInterval(()=>{!document.hidden&&performance.now()-Lm>400&&Sc()},250);})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
