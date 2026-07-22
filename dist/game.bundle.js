(()=>{var Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hd=0,lh=1,Gd=2;var ch=1,xl=2,ti=3,es=0,dn=1,pt=2,Bi=0,ga=1,hh=2,uh=3,dh=4,Vd=5,ts=100,Wd=101,jd=102,$d=103,Xd=104,qd=200,Kd=201,Yd=202,Zd=203,Jd=204,Qd=205,ep=206,tp=207,np=208,ip=209,rp=210,sp=211,ap=212,op=213,lp=214,bl=0,Ml=1,El=2,_a=3,Sl=4,wl=5,Tl=6,Al=7,cp=0,hp=1,up=2,_i=0,dp=1,pp=2,mp=3,Rl=4,fp=5,gp=6,_p=7;var ph=300,ns=301,lr=302,Cl=303,Il=304,va=306,Lo=1e3,zr=1001,Do=1002,qn=1003,vp=1004;var ya=1005;var Kn=1006,Pl=1007;var cr=1008;var ni=1009,mh=1010,fh=1011,is=1012,Ll=1013,hr=1014,Nn=1015,rs=1016,Dl=1017,Fl=1018,ss=1020,gh=35902,_h=35899,yp=1021,xp=1022,Un=1023,xa=1026,ba=1027,Nl=1028,Ul=1029,bp=1030,vh=1031;var yh=1033,kl=33776,Bl=33777,Ol=33778,zl=33779,xh=35840,bh=35841,Mh=35842,Eh=35843,Sh=36196,wh=37492,Th=37496,Ah=37808,Rh=37809,Ch=37810,Ih=37811,Ph=37812,Lh=37813,Dh=37814,Fh=37815,Nh=37816,Uh=37817,kh=37818,Bh=37819,Oh=37820,zh=37821,Hh=36492,Gh=36494,Vh=36495,Wh=36283,jh=36284,$h=36285,Xh=36286;var ks=2300,Fo=2301,Po=2302,Yc=2400,Zc=2401,Jc=2402;var Mp=3201;var Ep=0,Sp=1,ur="",ln="srgb",ir="srgb-linear",Bs="linear",at="srgb";var nr=7680;var wp=512,Tp=513,Ap=514,qh=515,Rp=516,Cp=517,Ip=518,Pp=519,No=35044;var Kh="300 es",gi=2e3,Os=2001;var Yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=1234567,Br=Math.PI/180,Hr=180/Math.PI;function Xn(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Wt[255&i]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[255&e]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[63&t|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[255&n]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function Qc(i,e){return(i%e+e)%e}function Fs(i,e,t){return(1-t)*i+t*e}function Ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function st(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var Yh={DEG2RAD:Br,RAD2DEG:Hr,generateUUID:Xn,clamp:ke,euclideanModulo:Qc,mapLinear:function(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:Fs,damp:function(i,e,t,n){return Fs(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(Qc(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(ad=i);let e=ad+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*Br},radToDeg:function(i){return i*Hr},isPowerOfTwo:function(i){return!(i&i-1)&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(r){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*f,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*f,o*l);break;case"ZYZ":i.set(c*f,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:st,denormalize:Ln},ee=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=s[a+0],p=s[a+1],f=s[a+2],_=s[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=_);if(u!==_||c!==d||l!==p||h!==f){let m=1-o,g=c*d+l*p+h*f+u*_,v=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){let T=Math.sqrt(y),R=Math.atan2(T,g*v);m=Math.sin(m*R)/T,o=Math.sin(o*R)/T}let x=o*v;if(c=c*m+d*x,l=l*m+p*x,h=h*m+f*x,u=u*m+_*x,m===1-o){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+c*p-l*d,e[t+1]=c*f+h*d+l*u-o*p,e[t+2]=l*f+h*p+o*d-c*u,e[t+3]=h*f-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),u=o(s/2),d=c(n/2),p=c(r/2),f=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"YZX":this._x=d*h*u+l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u-d*p*f;break;case"XZY":this._x=d*h*u-l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(od.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(od.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bc=new M,od=new tn,Ne=class i{constructor(e,t,n,r,s,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],_=r[0],m=r[3],g=r[6],v=r[1],y=r[4],x=r[7],T=r[2],R=r[5],w=r[8];return s[0]=a*_+o*v+c*T,s[3]=a*m+o*y+c*R,s[6]=a*g+o*x+c*w,s[1]=l*_+h*v+u*T,s[4]=l*m+h*y+u*R,s[7]=l*g+h*x+u*w,s[2]=d*_+p*v+f*T,s[5]=d*m+p*y+f*R,s[8]=d*g+p*x+f*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,p=l*s-a*c,f=t*u+n*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return e[0]=u*_,e[1]=(r*l-h*n)*_,e[2]=(o*n-r*a)*_,e[3]=d*_,e[4]=(h*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Mc.makeScale(e,t)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mc=new Ne;function Zh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lp(){let i=zs("canvas");return i.style.display="block",i}var ld={};function Gr(i){i in ld||(ld[i]=!0,console.warn(i))}function Dp(i,e,t){return new Promise(function(n,r){setTimeout(function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}},t)})}var cd=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hd=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ff(){let i={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===at&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=Or(r.r),r.g=Or(r.g),r.b=Or(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Bs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ir]:{primaries:e,whitePoint:n,transfer:Bs,toXYZ:cd,fromXYZ:hd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:n,transfer:at,toXYZ:cd,fromXYZ:hd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}var Je=ff();function fi(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function Or(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var Mr,Uo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mr===void 0&&(Mr=zs("canvas")),Mr.width=e.width,Mr.height=e.height;let r=Mr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*fi(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*fi(t[n]/255)):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gf=0,Vr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ec(r[a].image)):s.push(Ec(r[a]))}else s=Ec(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Ec(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _f=0,Sc=new M,Jt=class i extends Yn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,c=1009,l=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Xn(),this.name="",this.source=new Vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sc).x}get height(){return this.source.getSize(Sc).y}get depth(){return this.source.getSize(Sc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n:console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lo:e.x=e.x-Math.floor(e.x);break;case zr:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Lo:e.y=e.y-Math.floor(e.y);break;case zr:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null,Jt.DEFAULT_MAPPING=ph,Jt.DEFAULT_ANISOTROPY=1;var it=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],f=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(f+m)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,x=(p+1)/2,T=(g+1)/2,R=(h+d)/4,w=(u+_)/4,P=(f+m)/4;return y>x&&y>T?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=R/n,s=w/n):x>T?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=R/r,s=P/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=w/s,r=P/s),this.set(n,r,s,t),this}let v=Math.sqrt((m-f)*(m-f)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ko=class extends Yn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new Jt(r);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Vr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends ko{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Hs=class extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bo=class extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),to.subVectors(this.max,Es),Er.subVectors(e.a,Es),Sr.subVectors(e.b,Es),wr.subVectors(e.c,Es),Si.subVectors(Sr,Er),wi.subVectors(wr,Sr),Ji.subVectors(Er,wr);let t=[0,-Si.z,Si.y,0,-wi.z,wi.y,0,-Ji.z,Ji.y,Si.z,0,-Si.x,wi.z,0,-wi.x,Ji.z,0,-Ji.x,-Si.y,Si.x,0,-wi.y,wi.x,0,-Ji.y,Ji.x,0];return!!wc(t,Er,Sr,wr,to)&&(t=[1,0,0,0,1,0,0,0,1],!!wc(t,Er,Sr,wr,to)&&(no.crossVectors(Si,wi),t=[no.x,no.y,no.z],wc(t,Er,Sr,wr,to)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Cn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hi=[new M,new M,new M,new M,new M,new M,new M,new M],Cn=new M,eo=new xn,Er=new M,Sr=new M,wr=new M,Si=new M,wi=new M,Ji=new M,Es=new M,to=new M,no=new M,Qi=new M;function wc(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Qi.fromArray(i,s);let o=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),c=e.dot(Qi),l=t.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var vf=new xn,Ss=new M,Tc=new M,bn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);let t=Ss.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(Ss,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(Tc)),this.expandByPoint(Ss.copy(e.center).sub(Tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ui=new M,Ac=new M,io=new M,Ti=new M,Rc=new M,ro=new M,Cc=new M,Jn=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ac.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(Ac);let s=.5*e.distanceTo(t),a=-this.direction.dot(io),o=Ti.dot(this.direction),c=-Ti.dot(io),l=Ti.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*c-o,d=a*o-c,f=s*h,u>=0)if(d>=-f)if(d<=f){let _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=f?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ac).addScaledVector(io,d),p}intersectSphere(e,t){ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),r=ui.dot(ui)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>r?null:((o>n||n!=n)&&(n=o),(c<r||r!=r)&&(r=c),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,r,s){Rc.subVectors(t,e),ro.subVectors(n,e),Cc.crossVectors(Rc,ro);let a,o=this.direction.dot(Cc);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ti.subVectors(this.origin,e);let c=a*this.direction.dot(ro.crossVectors(Ti,ro));if(c<0)return null;let l=a*this.direction.dot(Rc.cross(Ti));if(l<0||c+l>o)return null;let h=-a*Ti.dot(Cc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class i{constructor(e,t,n,r,s,a,o,c,l,h,u,d,p,f,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,u,d,p,f,_,m)}set(e,t,n,r,s,a,o,c,l,h,u,d,p,f,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Tr.setFromMatrixColumn(e,0).length(),s=1/Tr.setFromMatrixColumn(e,1).length(),a=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+f*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=f+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,f=l*h,_=l*u;t[0]=d+_*o,t[4]=f*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,f=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,_=o*u;t[0]=c*h,t[4]=f*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,f=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+f,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*c,p=a*l,f=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yf,e,xf)}lookAt(e,t,n){let r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Ai.crossVectors(n,an),Ai.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ai.crossVectors(n,an)),Ai.normalize(),so.crossVectors(an,Ai),r[0]=Ai.x,r[4]=so.x,r[8]=an.x,r[1]=Ai.y,r[5]=so.y,r[9]=an.y,r[2]=Ai.z,r[6]=so.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],_=n[6],m=n[10],g=n[14],v=n[3],y=n[7],x=n[11],T=n[15],R=r[0],w=r[4],P=r[8],L=r[12],z=r[1],G=r[5],B=r[9],Y=r[13],W=r[2],J=r[6],Q=r[10],le=r[14],ie=r[3],ye=r[7],Se=r[11],be=r[15];return s[0]=a*R+o*z+c*W+l*ie,s[4]=a*w+o*G+c*J+l*ye,s[8]=a*P+o*B+c*Q+l*Se,s[12]=a*L+o*Y+c*le+l*be,s[1]=h*R+u*z+d*W+p*ie,s[5]=h*w+u*G+d*J+p*ye,s[9]=h*P+u*B+d*Q+p*Se,s[13]=h*L+u*Y+d*le+p*be,s[2]=f*R+_*z+m*W+g*ie,s[6]=f*w+_*G+m*J+g*ye,s[10]=f*P+_*B+m*Q+g*Se,s[14]=f*L+_*Y+m*le+g*be,s[3]=v*R+y*z+x*W+T*ie,s[7]=v*w+y*G+x*J+T*ye,s[11]=v*P+y*B+x*Q+T*Se,s[15]=v*L+y*Y+x*le+T*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*c*u-r*l*u-s*o*d+n*l*d+r*o*p-n*c*p)+e[7]*(+t*c*p-t*l*d+s*a*d-r*a*p+r*l*h-s*c*h)+e[11]*(+t*l*u-t*o*p-s*a*u+n*a*p+s*o*h-n*l*h)+e[15]*(-r*o*h-t*c*u+t*o*d+r*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],_=e[13],m=e[14],g=e[15],v=u*m*l-_*d*l+_*c*p-o*m*p-u*c*g+o*d*g,y=f*d*l-h*m*l-f*c*p+a*m*p+h*c*g-a*d*g,x=h*_*l-f*u*l+f*o*p-a*_*p-h*o*g+a*u*g,T=f*u*c-h*_*c-f*o*d+a*_*d+h*o*m-a*u*m,R=t*v+n*y+r*x+s*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return e[0]=v*w,e[1]=(_*d*s-u*m*s-_*r*p+n*m*p+u*r*g-n*d*g)*w,e[2]=(o*m*s-_*c*s+_*r*l-n*m*l-o*r*g+n*c*g)*w,e[3]=(u*c*s-o*d*s-u*r*l+n*d*l+o*r*p-n*c*p)*w,e[4]=y*w,e[5]=(h*m*s-f*d*s+f*r*p-t*m*p-h*r*g+t*d*g)*w,e[6]=(f*c*s-a*m*s-f*r*l+t*m*l+a*r*g-t*c*g)*w,e[7]=(a*d*s-h*c*s+h*r*l-t*d*l-a*r*p+t*c*p)*w,e[8]=x*w,e[9]=(f*u*s-h*_*s-f*n*p+t*_*p+h*n*g-t*u*g)*w,e[10]=(a*_*s-f*o*s+f*n*l-t*_*l-a*n*g+t*o*g)*w,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*p-t*o*p)*w,e[12]=T*w,e[13]=(h*_*r-f*u*r+f*n*d-t*_*d-h*n*m+t*u*m)*w,e[14]=(f*o*r-a*_*r-f*n*c+t*_*c+a*n*m-t*o*m)*w,e[15]=(a*u*r-h*o*r+h*n*c-t*u*c-a*n*d+t*o*d)*w,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,p=s*h,f=s*u,_=a*h,m=a*u,g=o*u,v=c*l,y=c*h,x=c*u,T=n.x,R=n.y,w=n.z;return r[0]=(1-(_+g))*T,r[1]=(p+x)*T,r[2]=(f-y)*T,r[3]=0,r[4]=(p-x)*R,r[5]=(1-(d+g))*R,r[6]=(m+v)*R,r[7]=0,r[8]=(f+y)*w,r[9]=(m-v)*w,r[10]=(1-(d+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Tr.set(r[0],r[1],r[2]).length(),a=Tr.set(r[4],r[5],r[6]).length(),o=Tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);let c=1/s,l=1/a,h=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=l,In.elements[5]*=l,In.elements[6]*=l,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r),f,_;if(c)f=s/(a-s),_=a*s/(a-s);else if(o===gi)f=-(a+s)/(a-s),_=-2*a*s/(a-s);else{if(o!==Os)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-s),_=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r),f,_;if(c)f=1/(a-s),_=a/(a-s);else if(o===gi)f=-2/(a-s),_=-(a+s)/(a-s);else{if(o!==Os)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-s),_=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Tr=new M,In=new Ie,yf=new M(0,0,0),xf=new M(1,1,1),Ai=new M,so=new M,an=new M,ud=new Ie,dd=new tn,nn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ud,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dd.setFromEuler(this),this.setFromQuaternion(dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},bf=0,pd=new M,Ar=new tn,di=new Ie,ao=new M,ws=new M,Mf=new M,Ef=new tn,md=new M(1,0,0),fd=new M(0,1,0),gd=new M(0,0,1),_d={type:"added"},Sf={type:"removed"},Rr={type:"childadded",child:null},Ic={type:"childremoved",child:null},Ft=class i extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new M,t=new nn,n=new tn,r=new M(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Ne}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(md,e)}rotateY(e){return this.rotateOnAxis(fd,e)}rotateZ(e){return this.rotateOnAxis(gd,e)}translateOnAxis(e,t){return pd.copy(e).applyQuaternion(this.quaternion),this.position.add(pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(md,e)}translateY(e){return this.translateOnAxis(fd,e)}translateZ(e){return this.translateOnAxis(gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ao.copy(e):ao.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(ws,ao,this.up):di.lookAt(ao,ws,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(di),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_d),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sf),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_d),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,Mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=r,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Ft.DEFAULT_UP=new M(0,1,0),Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new M,pi=new M,Pc=new M,mi=new M,Cr=new M,Ir=new M,vd=new M,Lc=new M,Dc=new M,Fc=new M,Nc=new it,Uc=new it,kc=new it,jn=class i{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Pn.subVectors(r,t),pi.subVectors(n,t),Pc.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(pi),c=Pn.dot(Pc),l=pi.dot(pi),h=pi.dot(Pc),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,f=(a*h-o*c)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,mi)!==null&&mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,mi.x),c.addScaledVector(a,mi.y),c.addScaledVector(o,mi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Nc.setScalar(0),Uc.setScalar(0),kc.setScalar(0),Nc.fromBufferAttribute(e,t),Uc.fromBufferAttribute(e,n),kc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Nc,s.x),a.addScaledVector(Uc,s.y),a.addScaledVector(kc,s.z),a}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),pi.subVectors(e,t),Pn.cross(pi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),.5*Pn.cross(pi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Cr.subVectors(r,n),Ir.subVectors(s,n),Lc.subVectors(e,n);let c=Cr.dot(Lc),l=Ir.dot(Lc);if(c<=0&&l<=0)return t.copy(n);Dc.subVectors(e,r);let h=Cr.dot(Dc),u=Ir.dot(Dc);if(h>=0&&u<=h)return t.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Cr,a);Fc.subVectors(e,s);let p=Cr.dot(Fc),f=Ir.dot(Fc);if(f>=0&&p<=f)return t.copy(s);let _=p*l-c*f;if(_<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(Ir,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return vd.subVectors(s,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(vd,o);let g=1/(m+_+d);return a=_*g,o=d*g,t.copy(n).addScaledVector(Cr,a).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},oo={h:0,s:0,l:0};function Bc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var de=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=Qc(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Bc(a,s,e+1/3),this.g=Bc(a,s,e),this.b=Bc(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=ln){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){let n=Fp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Je.workingToColorSpace(jt.copy(this),e),65536*Math.round(ke(255*jt.r,0,255))+256*Math.round(ke(255*jt.g,0,255))+Math.round(ke(255*jt.b,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(jt.copy(this),t);let n=jt.r,r=jt.g,s=jt.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=ln){Je.workingToColorSpace(jt.copy(this),e);let t=jt.r,n=jt.g,r=jt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(oo);let n=Fs(Ri.h,oo.h,t),r=Fs(Ri.s,oo.s,t),s=Fs(Ri.l,oo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new de;de.NAMES=Fp;var wf=0,Qn=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$t=class extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$_=Tf();function Tf(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,r[c]=24,r[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,r[c]=-l-1,r[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,r[c]=13,r[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,r[c]=24,r[256|c]=24):(n[c]=31744,n[256|c]=64512,r[c]=13,r[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var St=new M,lo=new ee,Af=0,Ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Af++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=No,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==No&&(e.usage=this.usage),e}};var Gs=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Vs=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Te=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},Rf=0,vn=new Ie,Oc=new Ft,Pr=new M,on=new xn,Ts=new xn,Dt=new M,ot=class i extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zh(e)?Vs:Gs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return Oc.lookAt(e),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new M,1/0);if(e){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(on.min,Ts.min),on.expandByPoint(Dt),Dt.addVectors(on.max,Ts.max),on.expandByPoint(Dt)):(on.expandByPoint(Ts.min),on.expandByPoint(Ts.max))}on.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Dt.fromBufferAttribute(o,l),c&&(Pr.fromBufferAttribute(e,l),Dt.add(Pr)),r=Math.max(r,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new M,c[P]=new M;let l=new M,h=new M,u=new M,d=new ee,p=new ee,f=new ee,_=new M,m=new M;function g(P,L,z){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,z),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,L),f.fromBufferAttribute(s,z),h.sub(l),u.sub(l),p.sub(d),f.sub(d);let G=1/(p.x*f.y-f.x*p.y);isFinite(G)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(G),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(G),o[P].add(_),o[L].add(_),o[z].add(_),c[P].add(m),c[L].add(m),c[z].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,L=v.length;P<L;++P){let z=v[P],G=z.start;for(let B=G,Y=G+z.count;B<Y;B+=3)g(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let y=new M,x=new M,T=new M,R=new M;function w(P){T.fromBufferAttribute(r,P),R.copy(T);let L=o[P];y.copy(L),y.sub(T.multiplyScalar(T.dot(L))).normalize(),x.crossVectors(R,L);let z=x.dot(c[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,z)}for(let P=0,L=v.length;P<L;++P){let z=v[P],G=z.start;for(let B=G,Y=G+z.count;B<Y;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new M,s=new M,a=new M,o=new M,c=new M,l=new M,h=new M,u=new M;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,f=0;for(let _=0,m=c.length;_<m;_++){p=o.isInterleavedBufferAttribute?c[_]*o.data.stride+o.offset:c[_]*h;for(let g=0;g<h;g++)d[f++]=l[p++]}return new Ot(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=e(r[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yd=new Ie,er=new Jn,co=new bn,xd=new M,ho=new M,uo=new M,po=new M,zc=new M,mo=new M,bd=new M,fo=new M,V=class extends Ft{constructor(e=new ot,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){mo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(zc.fromBufferAttribute(u,e),a?mo.addScaledVector(zc,h):mo.addScaledVector(zc.sub(t),h))}t.add(mo)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),er.copy(e.ray).recast(e.near),co.containsPoint(er.origin)===!1&&(er.intersectSphere(co,xd)===null||er.origin.distanceToSquared(xd)>(e.far-e.near)**2))return;yd.copy(s).invert(),er.copy(e.ray).applyMatrix4(yd),n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,er)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,_=d.length;f<_;f++){let m=d[f],g=a[m.materialIndex];for(let v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<y;v+=3)r=go(this,g,e,n,l,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);f<_;f+=3)r=go(this,a,e,n,l,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(c!==void 0)if(Array.isArray(a))for(let f=0,_=d.length;f<_;f++){let m=d[f],g=a[m.materialIndex];for(let v=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));v<y;v+=3)r=go(this,g,e,n,l,h,u,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);f<_;f+=3)r=go(this,a,e,n,l,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function go(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,ho),i.getVertexPosition(c,uo),i.getVertexPosition(l,po);let h=(function(u,d,p,f,_,m,g,v){let y;if(y=d.side===1?f.intersectTriangle(g,m,_,!0,v):f.intersectTriangle(_,m,g,d.side===0,v),y===null)return null;fo.copy(v),fo.applyMatrix4(u.matrixWorld);let x=p.ray.origin.distanceTo(fo);return x<p.near||x>p.far?null:{distance:x,point:fo.clone(),object:u}})(i,e,t,n,ho,uo,po,bd);if(h){let u=new M;jn.getBarycoord(bd,ho,uo,po,u),r&&(h.uv=jn.getInterpolatedAttribute(r,o,c,l,u,new ee)),s&&(h.uv1=jn.getInterpolatedAttribute(s,o,c,l,u,new ee)),a&&(h.normal=jn.getInterpolatedAttribute(a,o,c,l,u,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new M,materialIndex:0};jn.getNormal(ho,uo,po,d.normal),h.face=d,h.barycoord=u}return h}var Ge=class i extends ot{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;function f(_,m,g,v,y,x,T,R,w,P,L){let z=x/w,G=T/P,B=x/2,Y=T/2,W=R/2,J=w+1,Q=P+1,le=0,ie=0,ye=new M;for(let Se=0;Se<Q;Se++){let be=Se*G-Y;for(let Ce=0;Ce<J;Ce++){let ce=Ce*z-B;ye[_]=ce*v,ye[m]=be*y,ye[g]=W,l.push(ye.x,ye.y,ye.z),ye[_]=0,ye[m]=0,ye[g]=R>0?1:-1,h.push(ye.x,ye.y,ye.z),u.push(Ce/w),u.push(1-Se/P),le+=1}}for(let Se=0;Se<P;Se++)for(let be=0;be<w;be++){let Ce=d+be+J*Se,ce=d+be+J*(Se+1),ue=d+(be+1)+J*(Se+1),he=d+(be+1)+J*Se;c.push(Ce,ce,he),c.push(ce,ue,he),ie+=6}o.addGroup(p,ie,L),p+=ie,d+=le}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,r,a,2),f("x","z","y",1,-1,e,n,-t,r,a,3),f("x","y","z",1,-1,e,t,n,r,s,4),f("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function dr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Xt(i){let e={};for(let t=0;t<i.length;t++){let n=dr(i[t]);for(let r in n)e[r]=n[r]}return e}function Jh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Np={clone:dr,merge:Xt},Dn=class extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},jr=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ci=new M,Md=new ee,Ed=new ee,Bt=class extends jr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Hr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Br*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Hr*Math.atan(Math.tan(.5*Br*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,Md,Ed),t.subVectors(Ed,Md)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Br*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lr=-90,Oo=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Bt(Lr,1,e,t);r.layers=this.layers,this.add(r);let s=new Bt(Lr,1,e,t);s.layers=this.layers,this.add(s);let a=new Bt(Lr,1,e,t);a.layers=this.layers,this.add(a);let o=new Bt(Lr,1,e,t);o.layers=this.layers,this.add(o);let c=new Bt(Lr,1,e,t);c.layers=this.layers,this.add(c);let l=new Bt(Lr,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Os)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Ws=class extends Jt{constructor(e=[],t=301,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zo=class extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ws(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ge(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new V(r,s),o=t.minFilter;return t.minFilter===cr&&(t.minFilter=Kn),new Oo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Be=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cf={type:"move"},$r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;l.inputState.pinching&&d>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var js=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new de(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$s=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ho=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=No,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zt=new M,Xs=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rr=class extends Qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dr,As=new M,Fr=new M,Nr=new M,Ur=new ee,Rs=new ee,Up=new Ie,_o=new M,Cs=new M,vo=new M,Sd=new ee,Hc=new ee,wd=new ee,Xr=class extends Ft{constructor(e=new rr){if(super(),this.isSprite=!0,this.type="Sprite",Dr===void 0){Dr=new ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ho(t,5);Dr.setIndex([0,1,2,0,2,3]),Dr.setAttribute("position",new Xs(n,3,0,!1)),Dr.setAttribute("uv",new Xs(n,2,3,!1))}this.geometry=Dr,this.material=e,this.center=new ee(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),Up.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-Nr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;yo(_o.set(-.5,-.5,0),Nr,a,Fr,r,s),yo(Cs.set(.5,-.5,0),Nr,a,Fr,r,s),yo(vo.set(.5,.5,0),Nr,a,Fr,r,s),Sd.set(0,0),Hc.set(1,0),wd.set(1,1);let o=e.ray.intersectTriangle(_o,Cs,vo,!1,As);if(o===null&&(yo(Cs.set(-.5,.5,0),Nr,a,Fr,r,s),Hc.set(0,1),o=e.ray.intersectTriangle(_o,vo,Cs,!1,As),o===null))return;let c=e.ray.origin.distanceTo(As);c<e.near||c>e.far||t.push({distance:c,point:As.clone(),uv:jn.getInterpolation(As,_o,Cs,vo,Sd,Hc,wd,new ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function yo(i,e,t,n,r,s){Ur.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Rs.x=s*Ur.x-r*Ur.y,Rs.y=r*Ur.x+s*Ur.y):Rs.copy(Ur),i.copy(e),i.x+=Rs.x,i.y+=Rs.y,i.applyMatrix4(Up)}var X_=new M,q_=new M;var K_=new M,Y_=new it,Z_=new it,J_=new M,Q_=new Ie,ev=new M,tv=new bn,nv=new Ie,iv=new Jn;var Go=class extends Jt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=1003,h=1003,u,d){super(null,a,o,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rv=new Ie,sv=new Ie;var qs=class extends Ot{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},kr=new Ie,Td=new Ie,xo=[],Ad=new xn,If=new Ie,Is=new V,Ps=new bn,Li=class extends V{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qs(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,If)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,kr),Ad.copy(e.boundingBox).applyMatrix4(kr),this.boundingBox.union(Ad)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,kr),Ps.copy(e.boundingSphere).applyMatrix4(kr),this.boundingSphere.union(Ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=r[s+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),e.ray.intersectsSphere(Ps)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,kr),Td.multiplyMatrices(n,kr),Is.matrixWorld=Td,Is.raycast(e,xo);for(let a=0,o=xo.length;a<o;a++){let c=xo[a];c.instanceId=s,c.object=this,t.push(c)}xo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qs(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Go(new Float32Array(r*this.count),r,this.count,Nl,Nn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gc=new M,Pf=new M,Lf=new Ne,yn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Gc.subVectors(n,t).cross(Pf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Gc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Lf.getNormalMatrix(e),r=this.coplanarPoint(Gc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},tr=new bn,Df=new ee(.5,.5),bo=new M,Di=class{constructor(e=new yn,t=new yn,n=new yn,r=new yn,s=new yn,a=new yn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],p=s[7],f=s[8],_=s[9],m=s[10],g=s[11],v=s[12],y=s[13],x=s[14],T=s[15];if(r[0].setComponents(l-a,p-h,g-f,T-v).normalize(),r[1].setComponents(l+a,p+h,g+f,T+v).normalize(),r[2].setComponents(l+o,p+u,g+_,T+y).normalize(),r[3].setComponents(l-o,p-u,g-_,T-y).normalize(),n)r[4].setComponents(c,d,m,x).normalize(),r[5].setComponents(l-c,p-d,g-m,T-x).normalize();else if(r[4].setComponents(l-c,p-d,g-m,T-x).normalize(),t===gi)r[5].setComponents(l+c,p+d,g+m,T+x).normalize();else{if(t!==Os)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(c,d,m,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){tr.center.set(0,0,0);let t=Df.distanceTo(e.center);return tr.radius=.7071067811865476+t,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(bo.x=r.normal.x>0?e.max.x:e.min.x,bo.y=r.normal.y>0?e.max.y:e.min.y,bo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Vn=new Ie,Wn=new Di,Vo=class i{constructor(){this.coordinateSystem=gi}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(Vn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Wn.setFromProjectionMatrix(Vn,r.coordinateSystem,r.reversedDepth),Wn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(Vn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Wn.setFromProjectionMatrix(Vn,r.coordinateSystem,r.reversedDepth),Wn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(Vn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Wn.setFromProjectionMatrix(Vn,r.coordinateSystem,r.reversedDepth),Wn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(Vn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Wn.setFromProjectionMatrix(Vn,r.coordinateSystem,r.reversedDepth),Wn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(Vn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Wn.setFromProjectionMatrix(Vn,r.coordinateSystem,r.reversedDepth),Wn.containsPoint(e))return!0}return!1}clone(){return new i}};var eh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},av=new Ie,ov=new de(1,1,1),lv=new Di,cv=new Vo,hv=new xn,uv=new bn,dv=new M,pv=new M,mv=new M,fv=new eh,gv=new V;var _v=new M,vv=new M,yv=new Ie,xv=new Jn,bv=new bn,Mv=new M,Ev=new M;var Sv=new M,wv=new M;var qr=class extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rd=new Ie,th=new Jn,Mo=new bn,Eo=new M,Ks=class extends Ft{constructor(e=new ot,t=new qr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),Mo.radius+=s,e.ray.intersectsSphere(Mo)===!1)return;Rd.copy(r).invert(),th.copy(e.ray).applyMatrix4(Rd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);u<d;u++){let p=l.getX(u);Eo.fromBufferAttribute(h,p),Cd(Eo,p,c,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Eo.fromBufferAttribute(h,u),Cd(Eo,u,c,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cd(i,e,t,n,r,s,a){let o=th.distanceSqToPoint(i);if(o<t){let c=new M;th.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Kr=class extends Jt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ys=class extends Jt{constructor(e,t,n=1014,r,s,a,o=1003,c=1003,l,h=1026,u=1){if(h!==xa&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Zs=class extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Wo=class i extends ot{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,f=2*n+s,_=r+1,m=new M,g=new M;for(let v=0;v<=f;v++){let y=0,x=0,T=0,R=0;if(v<=n){let L=v/n,z=L*Math.PI/2;x=-h-e*Math.cos(z),T=e*Math.sin(z),R=-e*Math.cos(z),y=L*u}else if(v<=n+s){let L=(v-n)/s;x=L*t-h,T=e,R=0,y=u+L*d}else{let L=(v-n-s)/n,z=L*Math.PI/2;x=h+e*Math.sin(z),T=e*Math.cos(z),R=e*Math.sin(z),y=u+d+L*u}let w=Math.max(0,Math.min(1,y/p)),P=0;v===0?P=.5/r:v===f&&(P=-.5/r);for(let L=0;L<=r;L++){let z=L/r,G=z*Math.PI*2,B=Math.sin(G),Y=Math.cos(G);g.x=-T*Y,g.y=x,g.z=T*B,o.push(g.x,g.y,g.z),m.set(-T*Y,R,T*B),m.normalize(),c.push(m.x,m.y,m.z),l.push(z+P,w)}if(v>0){let L=(v-1)*_;for(let z=0;z<r;z++){let G=L+z,B=L+z+1,Y=v*_+z,W=v*_+z+1;a.push(G,B,Y),a.push(B,W,Y)}}}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ei=class i extends ot{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new M,h=new ee;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},We=class i extends ot{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,_=[],m=n/2,g=0;function v(y){let x=f,T=new ee,R=new M,w=0,P=y===!0?e:t,L=y===!0?1:-1;for(let G=1;G<=r;G++)u.push(0,m*L,0),d.push(0,L,0),p.push(.5,.5),f++;let z=f;for(let G=0;G<=r;G++){let B=G/r*c+o,Y=Math.cos(B),W=Math.sin(B);R.x=P*W,R.y=m*L,R.z=P*Y,u.push(R.x,R.y,R.z),d.push(0,L,0),T.x=.5*Y+.5,T.y=.5*W*L+.5,p.push(T.x,T.y),f++}for(let G=0;G<r;G++){let B=x+G,Y=z+G;y===!0?h.push(Y,Y+1,B):h.push(Y+1,Y,B),w+=3}l.addGroup(g,w,y===!0?1:2),g+=w}(function(){let y=new M,x=new M,T=0,R=(t-e)/n;for(let w=0;w<=s;w++){let P=[],L=w/s,z=L*(t-e)+e;for(let G=0;G<=r;G++){let B=G/r,Y=B*c+o,W=Math.sin(Y),J=Math.cos(Y);x.x=z*W,x.y=-L*n+m,x.z=z*J,u.push(x.x,x.y,x.z),y.set(W,R,J).normalize(),d.push(y.x,y.y,y.z),p.push(B,1-L),P.push(f++)}_.push(P)}for(let w=0;w<r;w++)for(let P=0;P<s;P++){let L=_[P][w],z=_[P+1][w],G=_[P+1][w+1],B=_[P][w+1];(e>0||P!==0)&&(h.push(L,z,B),T+=3),(t>0||P!==s-1)&&(h.push(z,G,B),T+=3)}l.addGroup(g,T,0),g+=T})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fn=class i extends We{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fi=class i extends ot{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(p,f,_,m){let g=m+1,v=[];for(let y=0;y<=g;y++){v[y]=[];let x=p.clone().lerp(_,y/g),T=f.clone().lerp(_,y/g),R=g-y;for(let w=0;w<=R;w++)v[y][w]=w===0&&y===g?x:x.clone().lerp(T,w/R)}for(let y=0;y<g;y++)for(let x=0;x<2*(g-y)-1;x++){let T=Math.floor(x/2);x%2==0?(c(v[y][T+1]),c(v[y+1][T]),c(v[y][T])):(c(v[y][T+1]),c(v[y+1][T+1]),c(v[y+1][T]))}}function c(p){s.push(p.x,p.y,p.z)}function l(p,f){let _=3*p;f.x=e[_+0],f.y=e[_+1],f.z=e[_+2]}function h(p,f,_,m){m<0&&p.x===1&&(a[f]=p.x-1),_.x===0&&_.z===0&&(a[f]=m/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new M,_=new M,m=new M;for(let g=0;g<t.length;g+=3)l(t[g+0],f),l(t[g+1],_),l(t[g+2],m),o(f,_,m,p)})(r),(function(p){let f=new M;for(let _=0;_<s.length;_+=3)f.x=s[_+0],f.y=s[_+1],f.z=s[_+2],f.normalize().multiplyScalar(p),s[_+0]=f.x,s[_+1]=f.y,s[_+2]=f.z})(n),(function(){let p=new M;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let _=u(p)/2/Math.PI+.5,m=d(p)/Math.PI+.5;a.push(_,1-m)}(function(){let f=new M,_=new M,m=new M,g=new M,v=new ee,y=new ee,x=new ee;for(let T=0,R=0;T<s.length;T+=9,R+=6){f.set(s[T+0],s[T+1],s[T+2]),_.set(s[T+3],s[T+4],s[T+5]),m.set(s[T+6],s[T+7],s[T+8]),v.set(a[R+0],a[R+1]),y.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),g.copy(f).add(_).add(m).divideScalar(3);let w=u(g);h(v,R+0,f,w),h(y,R+2,_,w),h(x,R+4,m,w)}})(),(function(){for(let f=0;f<a.length;f+=6){let _=a[f+0],m=a[f+2],g=a[f+4],v=Math.max(_,m,g),y=Math.min(_,m,g);v>.9&&y<.1&&(_<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(s.slice(),3)),this.setAttribute("uv",new Te(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},jo=class i extends Fi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},So=new M,wo=new M,Vc=new M,To=new jn,$o=class extends ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Br*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:_,b:m,c:g}=To;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),g.fromBufferAttribute(o,l[2]),To.getNormal(Vc),u[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let y=(v+1)%3,x=u[v],T=u[y],R=To[h[v]],w=To[h[y]],P=`${x}_${T}`,L=`${T}_${x}`;L in d&&d[L]?(Vc.dot(d[L].normal)<=s&&(p.push(R.x,R.y,R.z),p.push(w.x,w.y,w.z)),d[L]=null):P in d||(d[P]={index0:l[v],index1:l[y],normal:Vc.clone()})}}for(let f in d)if(d[f]){let{index0:_,index1:m}=d[f];So.fromBufferAttribute(o,_),wo.fromBufferAttribute(o,m),p.push(So.x,So.y,So.z),p.push(wo.x,wo.y,wo.z)}this.setAttribute("position",new Te(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(r=Math.floor(c+(l-c)/2),o=n[r]-a,o<0)c=r+1;else{if(!(o>0)){l=r;break}l=r-1}if(r=l,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new ee:new M);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new M,r=[],s=[],a=[],o=new M,c=new Ie;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new M)}s[0]=new M,a[0]=new M;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(ke(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ke(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Yr=class extends hn{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ee){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xo=class extends Yr{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Qh(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var Ao=new M,Wc=new Qh,jc=new Qh,$c=new Qh,qo=class extends hn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new M){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=r[(l-1)%s]:(Ao.subVectors(r[0],r[1]).add(r[0]),o=Ao);let u=r[l%s],d=r[(l+1)%s];if(this.closed||l+2<s?c=r[(l+2)%s]:(Ao.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Ao),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(c),p);_<1e-4&&(_=1),f<1e-4&&(f=_),m<1e-4&&(m=_),Wc.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,f,_,m),jc.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,f,_,m),$c.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,f,_,m)}else this.curveType==="catmullrom"&&(Wc.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),jc.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),$c.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return n.set(Wc.calc(h),jc.calc(h),$c.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new M().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Id(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function Ns(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function Us(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var Js=class extends hn{constructor(e=new ee,t=new ee,n=new ee,r=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ee){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Us(e,r.x,s.x,a.x,o.x),Us(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ko=class extends hn{constructor(e=new M,t=new M,n=new M,r=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new M){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Us(e,r.x,s.x,a.x,o.x),Us(e,r.y,s.y,a.y,o.y),Us(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qs=class extends hn{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yo=class extends hn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends hn{constructor(e=new ee,t=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ns(e,r.x,s.x,a.x),Ns(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ta=class extends hn{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ns(e,r.x,s.x,a.x),Ns(e,r.y,s.y,a.y),Ns(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Id(o,c.x,l.x,h.x,u.x),Id(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ee().fromArray(r))}return this}},Zo=Object.freeze({__proto__:null,ArcCurve:Xo,CatmullRomCurve3:qo,CubicBezierCurve:Js,CubicBezierCurve3:Ko,EllipseCurve:Yr,LineCurve:Qs,LineCurve3:Yo,QuadraticBezierCurve:ea,QuadraticBezierCurve3:ta,SplineCurve:na}),Jo=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Zo[r.type]().fromJSON(r))}return this}},ia=class extends Jo{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Qs(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new ea(this.currentPoint.clone(),new ee(e,t),new ee(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new Js(this.currentPoint.clone(),new ee(e,t),new ee(n,r),new ee(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new na(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){let l=new Yr(e,t,n,r,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ra=class extends ia{constructor(e){super(e),this.uuid=Xn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new ia().fromJSON(r))}return this}};function Ff(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Pd(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=(function(h,u,d,p){let f=[];for(let _=0,m=u.length;_<m;_++){let g=Pd(h,u[_]*p,_<m-1?u[_+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),f.push(Gf(g))}f.sort(Of);for(let _=0;_<f.length;_++)d=zf(f[_],d);return d})(i,e,s,t)),i.length>80*t){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<r;d+=t){let p=i[d],f=i[d+1];p<o&&(o=p),f<c&&(c=f),p>h&&(h=p),f>u&&(u=f)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return sa(s,a,t,o,c,l,0),a}function Pd(i,e,t,n,r){let s;if(r===(function(a,o,c,l){let h=0;for(let u=o,d=c-l;u<c;u+=l)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=Ld(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Ld(a/n|0,i[a],i[a+1],s);return s&&Zr(s,s.next)&&(oa(s),s=s.next),s}function sr(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!Zr(n,n.next)&&gt(n.prev,n,n.next)!==0)n=n.next;else{if(oa(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function sa(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(c,l,h,u){let d=c;do d.z===0&&(d.z=nh(d.x,d.y,l,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let f,_=1;do{let m,g=p;p=null;let v=null;for(f=0;g;){f++;let y=g,x=0;for(let R=0;R<_&&(x++,y=y.nextZ,y);R++);let T=_;for(;x>0||T>0&&y;)x!==0&&(T===0||!y||g.z<=y.z)?(m=g,g=g.nextZ,x--):(m=y,y=y.nextZ,T--),v?v.nextZ=m:p=m,m.prevZ=v,v=m;g=y}v.nextZ=null,_*=2}while(f>1)})(d)})(i,n,r,s);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(s?Uf(i,n,r,s):Nf(i))e.push(c.i,i.i,l.i),oa(i),i=l.next,o=l.next;else if((i=l)===o){a?a===1?sa(i=kf(sr(i),e),e,t,n,r,s,2):a===2&&Bf(i,e,t,n,r,s):sa(sr(i),e,t,n,r,s,1);break}}}function Nf(i){let e=i.prev,t=i,n=i.next;if(gt(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(r,s,a),u=Math.min(o,c,l),d=Math.max(r,s,a),p=Math.max(o,c,l),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Ds(r,o,s,c,a,l,f.x,f.y)&&gt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Uf(i,e,t,n){let r=i.prev,s=i,a=i.next;if(gt(r,s,a)>=0)return!1;let o=r.x,c=s.x,l=a.x,h=r.y,u=s.y,d=a.y,p=Math.min(o,c,l),f=Math.min(h,u,d),_=Math.max(o,c,l),m=Math.max(h,u,d),g=nh(p,f,e,t,n),v=nh(_,m,e,t,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=g&&x&&x.z<=v;){if(y.x>=p&&y.x<=_&&y.y>=f&&y.y<=m&&y!==r&&y!==a&&Ds(o,h,c,u,l,d,y.x,y.y)&&gt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=_&&x.y>=f&&x.y<=m&&x!==r&&x!==a&&Ds(o,h,c,u,l,d,x.x,x.y)&&gt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=g;){if(y.x>=p&&y.x<=_&&y.y>=f&&y.y<=m&&y!==r&&y!==a&&Ds(o,h,c,u,l,d,y.x,y.y)&&gt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=_&&x.y>=f&&x.y<=m&&x!==r&&x!==a&&Ds(o,h,c,u,l,d,x.x,x.y)&&gt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function kf(i,e){let t=i;do{let n=t.prev,r=t.next.next;!Zr(n,r)&&Bp(n,t,t.next,r)&&aa(n,r)&&aa(r,n)&&(e.push(n.i,t.i,r.i),oa(t),oa(t.next),t=i=r),t=t.next}while(t!==i);return sr(t)}function Bf(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Vf(a,o)){let c=Op(a,o);return a=sr(a,a.next),c=sr(c,c.next),sa(a,e,t,n,r,s,0),void sa(c,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function Of(i,e){let t=i.x-e.x;return t===0&&(t=i.y-e.y,t===0)&&(t=(i.next.y-i.y)/(i.next.x-i.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function zf(i,e){let t=(function(r,s){let a=s,o=r.x,c=r.y,l,h=-1/0;if(Zr(r,a))return a;do{if(Zr(r,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let _=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(_<=o&&_>h&&(h=_,l=a.x<a.next.x?a:a.next,_===o))return l}a=a.next}while(a!==s);if(!l)return null;let u=l,d=l.x,p=l.y,f=1/0;a=l;do{if(o>=a.x&&a.x>=d&&o!==a.x&&kp(c<p?o:h,c,d,p,c<p?h:o,c,a.x,a.y)){let _=Math.abs(c-a.y)/(o-a.x);aa(a,r)&&(_<f||_===f&&(a.x>l.x||a.x===l.x&&Hf(l,a)))&&(l=a,f=_)}a=a.next}while(a!==u);return l})(i,e);if(!t)return e;let n=Op(t,i);return sr(n,n.next),sr(t,t.next)}function Hf(i,e){return gt(i.prev,i,e.prev)<0&&gt(e.next,i,i.next)<0}function nh(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Gf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function kp(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Ds(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&kp(i,e,t,n,r,s,a,o)}function Vf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&Bp(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(aa(i,e)&&aa(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(gt(i.prev,i,e.prev)||gt(i,e.prev,e))||Zr(i,e)&&gt(i.prev,i,i.next)>0&&gt(e.prev,e,e.next)>0)}function gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Zr(i,e){return i.x===e.x&&i.y===e.y}function Bp(i,e,t,n){let r=Co(gt(i,e,t)),s=Co(gt(i,e,n)),a=Co(gt(t,n,i)),o=Co(gt(t,n,e));return r!==s&&a!==o||!(r!==0||!Ro(i,t,e))||!(s!==0||!Ro(i,n,e))||!(a!==0||!Ro(t,i,n))||!(o!==0||!Ro(t,e,n))}function Ro(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Co(i){return i>0?1:i<0?-1:0}function aa(i,e){return gt(i.prev,i,i.next)<0?gt(i,e,i.next)>=0&&gt(i,i.prev,e)>=0:gt(i,e,i.prev)<0||gt(i,i.next,e)<0}function Op(i,e){let t=ih(i.i,i.x,i.y),n=ih(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ld(i,e,t,n){let r=ih(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function oa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ih(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var rh=class{static triangulate(e,t,n=2){return Ff(e,t,n)}},$n=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Dd(e),Fd(n,e);let a=e.length;t.forEach(Dd);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Fd(n,t[c]);let o=rh.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Dd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Fd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Qo=class i extends ot{constructor(e=new ra([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Wf,y,x,T,R,w,P=!1;g&&(y=g.getSpacedPoints(h),P=!0,d=!1,x=g.computeFrenetFrames(h,!1),T=new M,R=new M,w=new M),d||(m=0,p=0,f=0,_=0);let L=o.extractPoints(l),z=L.shape,G=L.holes;if(!$n.isClockWise(z)){z=z.reverse();for(let F=0,b=G.length;F<b;F++){let C=G[F];$n.isClockWise(C)&&(G[F]=C.reverse())}}function B(F){let b=10000000000000001e-36,C=F[0];for(let U=1;U<=F.length;U++){let D=U%F.length,q=F[D],H=q.x-C.x,j=q.y-C.y,ae=H*H+j*j,me=Math.max(Math.abs(q.x),Math.abs(q.y),Math.abs(C.x),Math.abs(C.y));ae<=b*me*me?(F.splice(D,1),U--):C=q}}B(z),G.forEach(B);let Y=G.length,W=z;for(let F=0;F<Y;F++){let b=G[F];z=z.concat(b)}function J(F,b,C){return b||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(b,C)}let Q=z.length;function le(F,b,C){let U,D,q,H=F.x-b.x,j=F.y-b.y,ae=C.x-F.x,me=C.y-F.y,oe=H*H+j*j,_e=H*me-j*ae;if(Math.abs(_e)>Number.EPSILON){let Me=Math.sqrt(oe),we=Math.sqrt(ae*ae+me*me),je=b.x-j/Me,et=b.y+H/Me,tt=((C.x-me/we-je)*me-(C.y+ae/we-et)*ae)/(H*me-j*ae);U=je+H*tt-F.x,D=et+j*tt-F.y;let fe=U*U+D*D;if(fe<=2)return new ee(U,D);q=Math.sqrt(fe/2)}else{let Me=!1;H>Number.EPSILON?ae>Number.EPSILON&&(Me=!0):H<-Number.EPSILON?ae<-Number.EPSILON&&(Me=!0):Math.sign(j)===Math.sign(me)&&(Me=!0),Me?(U=-j,D=H,q=Math.sqrt(oe)):(U=H,D=j,q=Math.sqrt(oe/2))}return new ee(U/q,D/q)}let ie=[];for(let F=0,b=W.length,C=b-1,U=F+1;F<b;F++,C++,U++)C===b&&(C=0),U===b&&(U=0),ie[F]=le(W[F],W[C],W[U]);let ye=[],Se,be,Ce=ie.concat();for(let F=0,b=Y;F<b;F++){let C=G[F];Se=[];for(let U=0,D=C.length,q=D-1,H=U+1;U<D;U++,q++,H++)q===D&&(q=0),H===D&&(H=0),Se[U]=le(C[U],C[q],C[H]);ye.push(Se),Ce=Ce.concat(Se)}if(m===0)be=$n.triangulateShape(W,G);else{let F=[],b=[];for(let C=0;C<m;C++){let U=C/m,D=p*Math.cos(U*Math.PI/2),q=f*Math.sin(U*Math.PI/2)+_;for(let H=0,j=W.length;H<j;H++){let ae=J(W[H],ie[H],q);Ae(ae.x,ae.y,-D),U===0&&F.push(ae)}for(let H=0,j=Y;H<j;H++){let ae=G[H];Se=ye[H];let me=[];for(let oe=0,_e=ae.length;oe<_e;oe++){let Me=J(ae[oe],Se[oe],q);Ae(Me.x,Me.y,-D),U===0&&me.push(Me)}U===0&&b.push(me)}}be=$n.triangulateShape(F,b)}let ce=be.length,ue=f+_;for(let F=0;F<Q;F++){let b=d?J(z[F],Ce[F],ue):z[F];P?(R.copy(x.normals[0]).multiplyScalar(b.x),T.copy(x.binormals[0]).multiplyScalar(b.y),w.copy(y[0]).add(R).add(T),Ae(w.x,w.y,w.z)):Ae(b.x,b.y,0)}for(let F=1;F<=h;F++)for(let b=0;b<Q;b++){let C=d?J(z[b],Ce[b],ue):z[b];P?(R.copy(x.normals[F]).multiplyScalar(C.x),T.copy(x.binormals[F]).multiplyScalar(C.y),w.copy(y[F]).add(R).add(T),Ae(w.x,w.y,w.z)):Ae(C.x,C.y,u/h*F)}for(let F=m-1;F>=0;F--){let b=F/m,C=p*Math.cos(b*Math.PI/2),U=f*Math.sin(b*Math.PI/2)+_;for(let D=0,q=W.length;D<q;D++){let H=J(W[D],ie[D],U);Ae(H.x,H.y,u+C)}for(let D=0,q=G.length;D<q;D++){let H=G[D];Se=ye[D];for(let j=0,ae=H.length;j<ae;j++){let me=J(H[j],Se[j],U);P?Ae(me.x,me.y+y[h-1].y,y[h-1].x+C):Ae(me.x,me.y,u+C)}}}function he(F,b){let C=F.length;for(;--C>=0;){let U=C,D=C-1;D<0&&(D=F.length-1);for(let q=0,H=h+2*m;q<H;q++){let j=Q*q,ae=Q*(q+1);S(b+U+j,b+D+j,b+D+ae,b+U+ae)}}}function Ae(F,b,C){c.push(F),c.push(b),c.push(C)}function Ue(F,b,C){E(F),E(b),E(C);let U=r.length/3,D=v.generateTopUV(n,r,U-3,U-2,U-1);O(D[0]),O(D[1]),O(D[2])}function S(F,b,C,U){E(F),E(b),E(U),E(b),E(C),E(U);let D=r.length/3,q=v.generateSideWallUV(n,r,D-6,D-3,D-2,D-1);O(q[0]),O(q[1]),O(q[3]),O(q[1]),O(q[2]),O(q[3])}function E(F){r.push(c[3*F+0]),r.push(c[3*F+1]),r.push(c[3*F+2])}function O(F){s.push(F.x),s.push(F.y)}(function(){let F=r.length/3;if(d){let b=0,C=Q*b;for(let U=0;U<ce;U++){let D=be[U];Ue(D[2]+C,D[1]+C,D[0]+C)}b=h+2*m,C=Q*b;for(let U=0;U<ce;U++){let D=be[U];Ue(D[0]+C,D[1]+C,D[2]+C)}}else{for(let b=0;b<ce;b++){let C=be[b];Ue(C[2],C[1],C[0])}for(let b=0;b<ce;b++){let C=be[b];Ue(C[0]+Q*h,C[1]+Q*h,C[2]+Q*h)}}n.addGroup(F,r.length/3-F,0)})(),(function(){let F=r.length/3,b=0;he(W,b),b+=W.length;for(let C=0,U=G.length;C<U;C++){let D=G[C];he(D,b),b+=D.length}n.addGroup(F,r.length/3-F,1)})()}this.setAttribute("position",new Te(r,3)),this.setAttribute("uv",new Te(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Zo[r.type]().fromJSON(r)),new i(n,e.options)}},Wf={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*r],h=e[3*r+1];return[new ee(s,a),new ee(o,c),new ee(l,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],_=e[3*s],m=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new ee(a,1-c),new ee(l,1-u),new ee(d,1-f),new ee(_,1-g)]:[new ee(o,1-c),new ee(h,1-u),new ee(p,1-f),new ee(m,1-g)]}},Tt=class i extends Fi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},el=class i extends ot{constructor(e=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ke(r,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new M,d=new ee,p=new M,f=new M,_=new M,m=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-m,p.z=0*g,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-m,p.z=0*g,f.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(f)}for(let v=0;v<=t;v++){let y=n+v*h*r,x=Math.sin(y),T=Math.cos(y);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*x,u.y=e[R].y,u.z=e[R].x*T,a.push(u.x,u.y,u.z),d.x=v/t,d.y=R/(e.length-1),o.push(d.x,d.y);let w=c[3*R+0]*x,P=c[3*R+1],L=c[3*R+0]*T;l.push(w,P,L)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let x=y+v*e.length,T=x,R=x+e.length,w=x+e.length+1,P=x+1;s.push(T,R,P),s.push(w,P,R)}this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("uv",new Te(o,2)),this.setAttribute("normal",new Te(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Ni=class i extends Fi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ze=class i extends ot{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,u=e/o,d=t/c,p=[],f=[],_=[],m=[];for(let g=0;g<h;g++){let v=g*d-a;for(let y=0;y<l;y++){let x=y*u-s;f.push(x,-v,0),_.push(0,0,1),m.push(y/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){let y=v+l*g,x=v+l*(g+1),T=v+1+l*(g+1),R=v+1+l*g;p.push(y,x,R),p.push(x,T,R)}this.setIndex(p),this.setAttribute("position",new Te(f,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ar=class i extends ot{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new M,f=new ee;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){let g=s+m/n*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let _=0;_<r;_++){let m=_*(n+1);for(let g=0;g<n;g++){let v=g+m,y=v,x=v+n+1,T=v+n+2,R=v+1;o.push(y,x,R),o.push(x,T,R)}}this.setIndex(o),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},tl=class i extends ot{constructor(e=new ra([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;$n.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let v=f[m];$n.isClockWise(v)===!0&&(f[m]=v.reverse())}let _=$n.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let v=f[m];p=p.concat(v)}for(let m=0,g=p.length;m<g;m++){let v=p[m];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,g=_.length;m<g;m++){let v=_[m],y=v[0]+u,x=v[1]+u,T=v[2]+u;n.push(y,x,T),c+=3}}this.setIndex(n),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(s,3)),this.setAttribute("uv",new Te(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},un=class i extends ot{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new M,d=new M,p=[],f=[],_=[],m=[];for(let g=0;g<=n;g++){let v=[],y=g/n,x=0;g===0&&a===0?x=.5/t:g===n&&c===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){let R=T/t;u.x=-e*Math.cos(r+R*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(r+R*s)*Math.sin(a+y*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+x,1-y),v.push(l++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let y=h[g][v+1],x=h[g][v],T=h[g+1][v],R=h[g+1][v+1];(g!==0||a>0)&&p.push(y,x,R),(g!==n-1||c<Math.PI)&&p.push(x,T,R)}this.setIndex(p),this.setAttribute("position",new Te(f,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},nl=class i extends Fi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},il=class i extends ot{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],c=[],l=[],h=new M,u=new M,d=new M;for(let p=0;p<=n;p++)for(let f=0;f<=r;f++){let _=f/r*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(f/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=r;f++){let _=(r+1)*p+f-1,m=(r+1)*(p-1)+f-1,g=(r+1)*(p-1)+f,v=(r+1)*p+f;a.push(_,m,v),a.push(m,g,v)}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},rl=class i extends ot{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],c=[],l=[],h=[],u=new M,d=new M,p=new M,f=new M,_=new M,m=new M,g=new M;for(let y=0;y<=n;++y){let x=y/n*s*Math.PI*2;v(x,s,a,e,p),v(x+.01,s,a,e,f),m.subVectors(f,p),g.addVectors(f,p),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let T=0;T<=r;++T){let R=T/r*Math.PI*2,w=-t*Math.cos(R),P=t*Math.sin(R);u.x=p.x+(w*g.x+P*_.x),u.y=p.y+(w*g.y+P*_.y),u.z=p.z+(w*g.z+P*_.z),c.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),l.push(d.x,d.y,d.z),h.push(y/n),h.push(T/r)}}for(let y=1;y<=n;y++)for(let x=1;x<=r;x++){let T=(r+1)*(y-1)+(x-1),R=(r+1)*y+(x-1),w=(r+1)*y+x,P=(r+1)*(y-1)+x;o.push(T,R,P),o.push(R,w,P)}function v(y,x,T,R,w){let P=Math.cos(y),L=Math.sin(y),z=T/x*y,G=Math.cos(z);w.x=R*(2+G)*.5*P,w.y=R*(2+G)*L*.5,w.z=R*Math.sin(z)*.5}this.setIndex(o),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},sl=class i extends ot{constructor(e=new ta(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new M,c=new M,l=new ee,h=new M,u=[],d=[],p=[],f=[];function _(m){h=e.getPointAt(m/t,h);let g=a.normals[m],v=a.binormals[m];for(let y=0;y<=r;y++){let x=y/r*Math.PI*2,T=Math.sin(x),R=-Math.cos(x);c.x=R*g.x+T*v.x,c.y=R*g.y+T*v.y,c.z=R*g.z+T*v.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)_(m);_(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let g=0;g<=r;g++)l.x=m/t,l.y=g/r,p.push(l.x,l.y)})(),(function(){for(let m=1;m<=t;m++)for(let g=1;g<=r;g++){let v=(r+1)*(m-1)+(g-1),y=(r+1)*m+(g-1),x=(r+1)*m+g,T=(r+1)*(m-1)+g;f.push(v,y,T),f.push(y,x,T)}})()})(),this.setIndex(f),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Zo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},al=class extends ot{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new M,s=new M;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let _=0;_<3;_++){let m=o.getX(p+_),g=o.getX(p+(_+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,g),Nd(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Nd(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Te(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Nd(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var Tv=Object.freeze({__proto__:null,BoxGeometry:Ge,CapsuleGeometry:Wo,CircleGeometry:ei,ConeGeometry:Fn,CylinderGeometry:We,DodecahedronGeometry:jo,EdgesGeometry:$o,ExtrudeGeometry:Qo,IcosahedronGeometry:Tt,LatheGeometry:el,OctahedronGeometry:Ni,PlaneGeometry:Ze,PolyhedronGeometry:Fi,RingGeometry:ar,ShapeGeometry:tl,SphereGeometry:un,TetrahedronGeometry:nl,TorusGeometry:il,TorusKnotGeometry:rl,TubeGeometry:sl,WireframeGeometry:al});var ne=class extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ol=class extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ll=class extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Io(i,e){return i&&i.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i):i}function jf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var or=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cl=class extends or{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yc,endingEnd:Yc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zc:s=e,o=2*t-n;break;case Jc:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zc:a=e,c=2*n-t;break;case Jc:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(r-t),_=f*f,m=_*f,g=-d*m+2*d*_-d*f,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*f+1,y=(-1-p)*m+(1.5+p)*_+.5*f,x=p*m-p*_;for(let T=0;T!==o;++T)s[T]=g*a[h+T]+v*a[l+T]+y*a[c+T]+x*a[u+T];return s}},hl=class extends or{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},ul=class extends or{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},cn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Io(t,this.TimeBufferType),this.values=Io(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Io(e.times,Array),values:Io(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case Fo:t=this.InterpolantFactoryMethodLinear;break;case Po:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return Fo;case this.InterpolantFactoryMethodSmooth:return Po}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&jf(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Po,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};cn.prototype.ValueTypeName="",cn.prototype.TimeBufferType=Float32Array,cn.prototype.ValueBufferType=Float32Array,cn.prototype.DefaultInterpolation=Fo;var Ii=class extends cn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="bool",Ii.prototype.ValueBufferType=Array,Ii.prototype.DefaultInterpolation=ks,Ii.prototype.InterpolantFactoryMethodLinear=void 0,Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends cn{constructor(e,t,n,r){super(e,t,n,r)}};dl.prototype.ValueTypeName="color";var pl=class extends cn{constructor(e,t,n,r){super(e,t,n,r)}};pl.prototype.ValueTypeName="number";var ml=class extends or{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)tn.slerpFlat(s,0,a,l-o,a,l,c);return s}},la=class extends cn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ml(this.times,this.values,this.getValueSize(),e)}};la.prototype.ValueTypeName="quaternion",la.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends cn{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="string",Pi.prototype.ValueBufferType=Array,Pi.prototype.DefaultInterpolation=ks,Pi.prototype.InterpolantFactoryMethodLinear=void 0,Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends cn{constructor(e,t,n,r){super(e,t,n,r)}};fl.prototype.ValueTypeName="vector";var gl=class{constructor(e,t,n){let r=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){c++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,c),o===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],f=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},zp=new gl,_l=class{constructor(e){this.manager=e!==void 0?e:zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};_l.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jr=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ca=class extends Jr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Xc=new Ie,Ud=new M,kd=new M,vl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Di,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ud),kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kd),t.updateMatrixWorld(),Xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Bd=new Ie,Ls=new M,qc=new M,sh=class extends vl{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ls),qc.copy(n.position),qc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qc),n.updateMatrixWorld(),r.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Bd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bd,n.coordinateSystem,n.reversedDepth)}},ha=class extends Jr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new sh}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ua=class extends jr{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ah=class extends vl{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},da=class extends Jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new ah}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Av=new Ie,Rv=new Ie,Cv=new Ie;var yl=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},pa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Iv=new M,Pv=new tn,Lv=new M,Dv=new M,Fv=new M;var Nv=new M,Uv=new tn,kv=new M,Bv=new M;var eu="\\[\\]\\.:\\/",$f=new RegExp("["+eu+"]","g"),Kc="[^"+eu+"]",Xf="[^"+eu.replace("\\.","")+"]",qf=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Kc)+/(WCOD+)?/.source.replace("WCOD",Xf)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc)+"$"),Kf=["material","materials","bones","map"],ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($f,"")}static parseTrackName(e){let t=qf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Kf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=class{constructor(i,e,t){let n=t||ht.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray],ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ov=new Float32Array(1);var Od=new Ie,ma=class{constructor(e,t,n=0,r=1/0){this.ray=new Jn(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Od.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Od),this}intersectObject(e,t=!0,n=[]){return oh(e,this,n,t),n.sort(zd),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)oh(e[r],this,n,t);return n.sort(zd),n}};function zd(i,e){return i.distance-e.distance}function oh(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)oh(s[a],e,t,!0)}}var Qr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var zv=new ee;var Hv=new M,Gv=new M,Vv=new M,Wv=new M,jv=new M,$v=new M,Xv=new M;var qv=new M;var Kv=new M,Yv=new Ie,Zv=new Ie;var Jv=new M,Qv=new de,ey=new de;var ty=new M,ny=new M,iy=new M;var ry=new M,sy=new jr;var ay=new xn;var oy=new M;var fa=class extends Yn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){e!==void 0?(this.domElement!==null&&this.disconnect(),this.domElement=e):console.warn("THREE.Controls: connect() now requires an element.")}disconnect(){}dispose(){}update(){}};function tu(i,e,t,n){let r=(function(s){switch(s){case ni:case mh:return{byteLength:1,components:1};case is:case fh:case rs:return{byteLength:2,components:1};case Dl:case Fl:return{byteLength:2,components:4};case hr:case Ll:case Nn:return{byteLength:4,components:1};case gh:case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case 1021:return i*e;case Nl:case Ul:return i*e/r.components*r.byteLength;case 1030:case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case Un:case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function hm(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Zf(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(a,h),i.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=i.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(i.bindBuffer(o,s),l.length===0)i.bufferSubData(o,0,c);else{l.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<l.length;u++){let d=l[h],p=l[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,l[h]=p)}l.length=h+1;for(let u=0,d=l.length;u<d;u++){let p=l[u];i.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var Oe={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},pe={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},ii={basic:{uniforms:Xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new de(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Xt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Xt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new de(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Xt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Xt([pe.points,pe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Xt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Xt([pe.common,pe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Xt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Xt([pe.sprite,pe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Xt([pe.common,pe.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Xt([pe.lights,pe.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ii.physical={uniforms:Xt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var Hl={r:0,b:0,g:0},pr=new nn,Jf=new Ie;function Qf(i,e,t,n,r,s,a){let o=new de(0),c,l,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g}function _(m,g){m.getRGB(Hl,Jh(i)),n.buffers.color.setClear(Hl.r,Hl.g,Hl.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),h=g,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,_(o,h)},render:function(m){let g=!1,v=f(m);v===null?_(o,h):v&&v.isColor&&(_(v,1),g=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(m,g){let v=f(g);v&&(v.isCubeTexture||v.mapping===va)?(l===void 0&&(l=new V(new Ge(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:dr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,x,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),pr.copy(g.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Jf.makeRotationFromEuler(pr)),l.material.toneMapped=Je.getTransfer(v.colorSpace)!==at,u===v&&d===v.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new V(new Ze(2,2),new Dn({name:"BackgroundMaterial",uniforms:dr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Je.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}}}function eg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=l(null),s=r,a=!1;function o(g){return i.bindVertexArray(g)}function c(g){return i.deleteVertexArray(g)}function l(g){let v=[],y=[],x=[];for(let T=0;T<t;T++)v[T]=0,y[T]=0,x[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:y,attributeDivisors:x,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,y=g.length;v<y;v++)g[v]=0}function u(g){d(g,0)}function d(g,v){let y=s.newAttributes,x=s.enabledAttributes,T=s.attributeDivisors;y[g]=1,x[g]===0&&(i.enableVertexAttribArray(g),x[g]=1),T[g]!==v&&(i.vertexAttribDivisor(g,v),T[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let y=0,x=v.length;y<x;y++)v[y]!==g[y]&&(i.disableVertexAttribArray(y),v[y]=0)}function f(g,v,y,x,T,R,w){w===!0?i.vertexAttribIPointer(g,v,y,T,R):i.vertexAttribPointer(g,v,y,x,T,R)}function _(){m(),a=!0,s!==r&&(s=r,o(s.object))}function m(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,v,y,x,T){let R=!1,w=(function(P,L,z){let G=z.wireframe===!0,B=n[P.id];B===void 0&&(B={},n[P.id]=B);let Y=B[L.id];Y===void 0&&(Y={},B[L.id]=Y);let W=Y[G];return W===void 0&&(W=l(i.createVertexArray()),Y[G]=W),W})(x,y,v);s!==w&&(s=w,o(s.object)),R=(function(P,L,z,G){let B=s.attributes,Y=L.attributes,W=0,J=z.getAttributes();for(let Q in J)if(J[Q].location>=0){let le=B[Q],ie=Y[Q];if(ie===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),le===void 0||le.attribute!==ie||ie&&le.data!==ie.data)return!0;W++}return s.attributesNum!==W||s.index!==G})(g,x,y,T),R&&(function(P,L,z,G){let B={},Y=L.attributes,W=0,J=z.getAttributes();for(let Q in J)if(J[Q].location>=0){let le=Y[Q];le===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(le=P.instanceColor));let ie={};ie.attribute=le,le&&le.data&&(ie.data=le.data),B[Q]=ie,W++}s.attributes=B,s.attributesNum=W,s.index=G})(g,x,y,T),T!==null&&e.update(T,i.ELEMENT_ARRAY_BUFFER),(R||a)&&(a=!1,(function(P,L,z,G){h();let B=G.attributes,Y=z.getAttributes(),W=L.defaultAttributeValues;for(let J in Y){let Q=Y[J];if(Q.location>=0){let le=B[J];if(le===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),le!==void 0){let ie=le.normalized,ye=le.itemSize,Se=e.get(le);if(Se===void 0)continue;let be=Se.buffer,Ce=Se.type,ce=Se.bytesPerElement,ue=Ce===i.INT||Ce===i.UNSIGNED_INT||le.gpuType===Ll;if(le.isInterleavedBufferAttribute){let he=le.data,Ae=he.stride,Ue=le.offset;if(he.isInstancedInterleavedBuffer){for(let S=0;S<Q.locationSize;S++)d(Q.location+S,he.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let S=0;S<Q.locationSize;S++)u(Q.location+S);i.bindBuffer(i.ARRAY_BUFFER,be);for(let S=0;S<Q.locationSize;S++)f(Q.location+S,ye/Q.locationSize,Ce,ie,Ae*ce,(Ue+ye/Q.locationSize*S)*ce,ue)}else{if(le.isInstancedBufferAttribute){for(let he=0;he<Q.locationSize;he++)d(Q.location+he,le.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let he=0;he<Q.locationSize;he++)u(Q.location+he);i.bindBuffer(i.ARRAY_BUFFER,be);for(let he=0;he<Q.locationSize;he++)f(Q.location+he,ye/Q.locationSize,Ce,ie,ye*ce,ye/Q.locationSize*he*ce,ue)}}else if(W!==void 0){let ie=W[J];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(Q.location,ie);break;case 3:i.vertexAttrib3fv(Q.location,ie);break;case 4:i.vertexAttrib4fv(Q.location,ie);break;default:i.vertexAttrib1fv(Q.location,ie)}}}}p()})(g,v,y,x),T!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(T).buffer))},reset:_,resetDefaultState:m,dispose:function(){_();for(let g in n){let v=n[g];for(let y in v){let x=v[y];for(let T in x)c(x[T].object),delete x[T];delete v[y]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let v=n[g.id];for(let y in v){let x=v[y];for(let T in x)c(x[T].object),delete x[T];delete v[y]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let v in n){let y=n[v];if(y[g.id]===void 0)continue;let x=y[g.id];for(let T in x)c(x[T].object),delete x[T];delete y[g.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function tg(i,e,t){let n;function r(s,a,o){o!==0&&(i.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){i.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,n,1)},this.renderMultiDrawInstances=function(s,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<s.length;h++)r(s[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(n,s,0,a,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*c[u];t.update(h,n,1)}}}function ng(i,e,t,n){let r;function s(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(d){return d===Un||n.convert(d)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==ni&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Nn&&!p)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function ig(i){let e=this,t=null,n=0,r=!1,s=!1,a=new yn,o=new Ne,c={value:null,needsUpdate:!1};function l(h,u,d,p){let f=h!==null?h.length:0,_=null;if(f!==0){if(_=c.value,p!==!0||_===null){let m=d+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(_===null||_.length<m)&&(_=new Float32Array(m));for(let v=0,y=d;v!==f;++v,y+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(_,y),_[y+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,_}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,_=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!_)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let g=s?0:n,v=4*g,y=m.clippingState||null;c.value=y,y=l(p,u,v,d);for(let x=0;x!==v;++x)y[x]=t[x];m.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function rg(i){let e=new WeakMap;function t(r,s){return s===Cl?r.mapping=ns:s===Il&&(r.mapping=lr),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===Cl||s===Il){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new zo(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Hp=[.125,.215,.35,.446,.526,.582],Ma=20,nu=new ua,Gp=new de,iu=null,ru=0,su=0,au=!1,fr=(1+Math.sqrt(5))/2,as=1/fr,Vp=[new M(-fr,as,0),new M(fr,as,0),new M(-as,0,fr),new M(as,0,fr),new M(0,fr,-as),new M(0,fr,as),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],sg=new M,Wl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=sg}=s;iu=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(iu,ru,su),this._renderer.xr.enabled=au,e.scissorTest=!1,Gl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),iu=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:rs,format:Un,colorSpace:ir,depthBuffer:!1},r=Wp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wp(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+Hp.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);c.push(p);let f=1/p;d>a-4?f=Hp[d-a+4-1]:d===0&&(f=0),l.push(f);let _=1/(p-2),m=-_,g=1+_,v=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,x=6,T=3,R=2,w=1,P=new Float32Array(T*x*y),L=new Float32Array(R*x*y),z=new Float32Array(w*x*y);for(let B=0;B<y;B++){let Y=B%3*2/3-1,W=B>2?0:-1,J=[Y,W,0,Y+2/3,W,0,Y+2/3,W+1,0,Y,W,0,Y+2/3,W+1,0,Y,W+1,0];P.set(J,T*x*B),L.set(v,R*x*B);let Q=[B,B,B,B,B,B];z.set(Q,w*x*B)}let G=new ot;G.setAttribute("position",new Ot(P,T)),G.setAttribute("uv",new Ot(L,R)),G.setAttribute("faceIndex",new Ot(z,w)),o.push(G),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(Ma),h=new M(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Ma,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new V(this._lodPlanes[0],e);this._renderer.compile(t,nu)}_sceneToCubeUV(e,t,n,r,s){let a=new Bt(90,1,t,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(Gp),l.toneMapping=_i,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null));let d=new $t({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),p=new V(new Ge,d),f=!1,_=e.background;_?_.isColor&&(d.color.copy(_),e.background=null,f=!0):(d.color.copy(Gp),f=!0);for(let m=0;m<6;m++){let g=m%3;g===0?(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[m],s.y,s.z)):g===1?(a.up.set(0,0,o[m]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[m],s.z)):(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[m]));let v=this._cubeSize;Gl(r,g*v,m>2?v:0,v,v),l.setRenderTarget(r),f&&l.render(p,a),l.render(e,a)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=u,l.autoClear=h,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ns||e.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new V(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Gl(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,nu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Vp[(r-s-1)%Vp.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new V(this._lodPlanes[r],l),u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,_=isFinite(s)?1+Math.floor(3*f):Ma;_>Ma&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let m=[],g=0;for(let x=0;x<Ma;++x){let T=x/f,R=Math.exp(-T*T/2);m.push(R),x===0?g+=R:x<_&&(g+=2*R)}for(let x=0;x<m.length;x++)m[x]=m[x]/g;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let y=this._sizeLods[r];Gl(t,3*y*(r>v-4?r-v+4:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(h,nu)}};function Wp(i,e,t){let n=new Zn(i,e,t);return n.texture.mapping=va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function jp(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function $p(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}function ag(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===Cl||s===Il,o=s===ns||s===lr;if(a||o){let c=e.get(r),l=c!==void 0?c.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return t===null&&(t=new Wl(i)),c=a?t.fromEquirectangular(r,c):t.fromCubemap(r,c),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),c.texture;if(c!==void 0)return c.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Wl(i)),c=a?t.fromEquirectangular(r):t.fromCubemap(r),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),r.addEventListener("dispose",n),c.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function og(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Gr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function lg(i,e,t,n){let r={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);l.removeEventListener("dispose",a),delete r[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let _=h.array;d=h.version;for(let m=0,g=_.length;m<g;m+=3){let v=_[m+0],y=_[m+1],x=_[m+2];l.push(v,y,y,x,x,v)}}else{if(u===void 0)return;{let _=u.array;d=u.version;for(let m=0,g=_.length/3-1;m<g;m+=3){let v=m+0,y=m+1,x=m+2;l.push(v,y,y,x,x,v)}}}let p=new(Zh(l)?Vs:Gs)(l,1);p.version=d;let f=s.get(c);f&&e.remove(f),s.set(c,p)}return{get:function(c,l){return r[l.id]===!0||(l.addEventListener("dispose",a),r[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],i.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function cg(i,e,t){let n,r,s;function a(o,c,l){l!==0&&(i.drawElementsInstanced(n,c,r,o*s,l),t.update(c,n,l))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,c){i.drawElements(n,c,r,o*s),t.update(c,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,c[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,c,0,r,o,0,h,0,l);let d=0;for(let p=0;p<l;p++)d+=c[p]*h[p];t.update(d,n,1)}}}function hg(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function ug(i,e,t){let n=new WeakMap,r=new it;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=n.get(a);if(u===void 0||u.count!==h){let P=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let y=a.attributes.position.count*v,x=1;y>e.maxTextureSize&&(x=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*x*4*h),R=new Hs(T,y,x,h);R.type=Nn,R.needsUpdate=!0;let w=4*v;for(let L=0;L<h;L++){let z=_[L],G=m[L],B=g[L],Y=y*x*4*L;for(let W=0;W<z.count;W++){let J=W*w;d===!0&&(r.fromBufferAttribute(z,W),T[Y+J+0]=r.x,T[Y+J+1]=r.y,T[Y+J+2]=r.z,T[Y+J+3]=0),p===!0&&(r.fromBufferAttribute(G,W),T[Y+J+4]=r.x,T[Y+J+5]=r.y,T[Y+J+6]=r.z,T[Y+J+7]=0),f===!0&&(r.fromBufferAttribute(B,W),T[Y+J+8]=r.x,T[Y+J+9]=r.y,T[Y+J+10]=r.z,T[Y+J+11]=B.itemSize===4?r.w:1)}}u={count:h,texture:R,size:new ee(y,x)},n.set(a,u),a.addEventListener("dispose",P)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<c.length;f++)d+=c[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function dg(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(r.get(l)!==o&&(e.update(l),r.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return l},dispose:function(){r=new WeakMap}}}var um=new Jt,Xp=new Ys(1,1),dm=new Hs,pm=new Bo,mm=new Ws,qp=[],Kp=[],Yp=new Float32Array(16),Zp=new Float32Array(9),Jp=new Float32Array(4);function ls(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=qp[r];if(s===void 0&&(s=new Float32Array(r),qp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $l(i,e){let t=Kp[e];t===void 0&&(t=new Int32Array(e),Kp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function gg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function _g(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Jp.set(n),i.uniformMatrix2fv(this.addr,!1,Jp),Rt(t,n)}}function vg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Zp.set(n),i.uniformMatrix3fv(this.addr,!1,Zp),Rt(t,n)}}function yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Yp.set(n),i.uniformMatrix4fv(this.addr,!1,Yp),Rt(t,n)}}function xg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function Mg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function Eg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function Sg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function Tg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function Ag(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function Rg(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(Xp.compareFunction=qh,s=Xp):s=um,t.setTexture2D(e||s,r)}function Cg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||pm,r)}function Ig(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||mm,r)}function Pg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||dm,r)}function Lg(i,e){i.uniform1fv(this.addr,e)}function Dg(i,e){let t=ls(e,this.size,2);i.uniform2fv(this.addr,t)}function Fg(i,e){let t=ls(e,this.size,3);i.uniform3fv(this.addr,t)}function Ng(i,e){let t=ls(e,this.size,4);i.uniform4fv(this.addr,t)}function Ug(i,e){let t=ls(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kg(i,e){let t=ls(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bg(i,e){let t=ls(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Og(i,e){i.uniform1iv(this.addr,e)}function zg(i,e){i.uniform2iv(this.addr,e)}function Hg(i,e){i.uniform3iv(this.addr,e)}function Gg(i,e){i.uniform4iv(this.addr,e)}function Vg(i,e){i.uniform1uiv(this.addr,e)}function Wg(i,e){i.uniform2uiv(this.addr,e)}function jg(i,e){i.uniform3uiv(this.addr,e)}function $g(i,e){i.uniform4uiv(this.addr,e)}function Xg(i,e,t){let n=this.cache,r=e.length,s=$l(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||um,s[a])}function qg(i,e,t){let n=this.cache,r=e.length,s=$l(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||pm,s[a])}function Kg(i,e,t){let n=this.cache,r=e.length,s=$l(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||mm,s[a])}function Yg(i,e,t){let n=this.cache,r=e.length,s=$l(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||dm,s[a])}var lu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return pg;case 35664:return mg;case 35665:return fg;case 35666:return gg;case 35674:return _g;case 35675:return vg;case 35676:return yg;case 5124:case 35670:return xg;case 35667:case 35671:return bg;case 35668:case 35672:return Mg;case 35669:case 35673:return Eg;case 5125:return Sg;case 36294:return wg;case 36295:return Tg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Pg}})(t.type)}},cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return Lg;case 35664:return Dg;case 35665:return Fg;case 35666:return Ng;case 35674:return Ug;case 35675:return kg;case 35676:return Bg;case 5124:case 35670:return Og;case 35667:case 35671:return zg;case 35668:case 35672:return Hg;case 35669:case 35673:return Gg;case 5125:return Vg;case 36294:return Wg;case 36295:return jg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Yg}})(t.type)}},hu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},ou=/(\w+)(\])?(\[|\.)?/g;function Qp(i,e){i.seq.push(e),i.map[e.id]=e}function Zg(i,e,t){let n=i.name,r=n.length;for(ou.lastIndex=0;;){let s=ou.exec(n),a=ou.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===r){Qp(t,l===void 0?new lu(o,i,e):new cu(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new hu(o),Qp(t,h)),t=h}}}var os=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);Zg(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function em(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Jg=0,tm=new Ne;function nm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function Qg(i,e){let t=(function(n){Je._getMatrix(tm,Je.workingColorSpace,n);let r=`mat3( ${tm.elements.map(s=>s.toFixed(4))} )`;switch(Je.getTransfer(n)){case Bs:return[r,"LinearTransferOETF"];case at:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function e0(i,e){let t;switch(e){case dp:t="Linear";break;case pp:t="Reinhard";break;case mp:t="Cineon";break;case Rl:t="ACESFilmic";break;case gp:t="AgX";break;case _p:t="Neutral";break;case fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Vl=new M;function t0(){return Je.getLuminanceCoefficients(Vl),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Vl.x.toFixed(4)}, ${Vl.y.toFixed(4)}, ${Vl.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ea(i){return i!==""}function im(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var n0=/^[ \t]*#include +<([\w\d./]+)>/gm;function uu(i){return i.replace(n0,r0)}var i0=new Map;function r0(i,e){let t=Oe[e];if(t===void 0){let n=i0.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return uu(t)}var s0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sm(i){return i.replace(s0,a0)}function a0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function am(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function o0(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(G){let B="SHADOWMAP_TYPE_BASIC";return G.shadowMapType===ch?B="SHADOWMAP_TYPE_PCF":G.shadowMapType===xl?B="SHADOWMAP_TYPE_PCF_SOFT":G.shadowMapType===ti&&(B="SHADOWMAP_TYPE_VSM"),B})(t),l=(function(G){let B="ENVMAP_TYPE_CUBE";if(G.envMap)switch(G.envMapMode){case ns:case lr:B="ENVMAP_TYPE_CUBE";break;case va:B="ENVMAP_TYPE_CUBE_UV"}return B})(t),h=(function(G){let B="ENVMAP_MODE_REFLECTION";return G.envMap&&G.envMapMode===lr&&(B="ENVMAP_MODE_REFRACTION"),B})(t),u=(function(G){let B="ENVMAP_BLENDING_NONE";if(G.envMap)switch(G.combine){case cp:B="ENVMAP_BLENDING_MULTIPLY";break;case hp:B="ENVMAP_BLENDING_MIX";break;case up:B="ENVMAP_BLENDING_ADD"}return B})(t),d=(function(G){let B=G.envMapCubeUVHeight;if(B===null)return null;let Y=Math.log2(B)-2,W=1/B;return{texelWidth:1/(3*Math.max(Math.pow(2,Y),112)),texelHeight:W,maxMip:Y}})(t),p=(function(G){return[G.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",G.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)})(t),f=(function(G){let B=[];for(let Y in G){let W=G[Y];W!==!1&&B.push("#define "+Y+" "+W)}return B.join(`
`)})(s),_=r.createProgram(),m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ea).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ea).join(`
`),g.length>0&&(g+=`
`)):(m=[am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),g=[am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Oe.tonemapping_pars_fragment:"",t.toneMapping!==_i?e0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Qg("linearToOutputTexel",t.outputColorSpace),t0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),a=uu(a),a=im(a,t),a=rm(a,t),o=uu(o),o=im(o,t),o=rm(o,t),a=sm(a),o=sm(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=v+m+a,x=v+g+o,T=em(r,r.VERTEX_SHADER,y),R=em(r,r.FRAGMENT_SHADER,x);function w(G){if(i.debug.checkShaderErrors){let B=r.getProgramInfoLog(_)||"",Y=r.getShaderInfoLog(T)||"",W=r.getShaderInfoLog(R)||"",J=B.trim(),Q=Y.trim(),le=W.trim(),ie=!0,ye=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,T,R);else{let Se=nm(r,T,"vertex"),be=nm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+Se+`
`+be)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):Q!==""&&le!==""||(ye=!1);ye&&(G.diagnostics={runnable:ie,programLog:J,vertexShader:{log:Q,prefix:m},fragmentShader:{log:le,prefix:g}})}r.deleteShader(T),r.deleteShader(R),P=new os(r,_),L=(function(B,Y){let W={},J=B.getProgramParameter(Y,B.ACTIVE_ATTRIBUTES);for(let Q=0;Q<J;Q++){let le=B.getActiveAttrib(Y,Q),ie=le.name,ye=1;le.type===B.FLOAT_MAT2&&(ye=2),le.type===B.FLOAT_MAT3&&(ye=3),le.type===B.FLOAT_MAT4&&(ye=4),W[ie]={type:le.type,location:B.getAttribLocation(Y,ie),locationSize:ye}}return W})(r,_)}let P,L;r.attachShader(_,T),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),this.getUniforms=function(){return P===void 0&&w(this),P},this.getAttributes=function(){return L===void 0&&w(this),L};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(_,37297)),z},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=R,this}var l0=0,du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pu(e),t.set(e,n)),n}},pu=class{constructor(e){this.id=l0++,this.code=e,this.usedTimes=0}};function c0(i,e,t,n,r,s,a){let o=new Wr,c=new du,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,g,v,y,x){let T=y.fog,R=x.geometry,w=m.isMeshStandardMaterial?y.environment:null,P=(m.isMeshStandardMaterial?t:e).get(m.envMap||w),L=P&&P.mapping===va?P.image.height:null,z=f[m.type];m.precision!==null&&(p=r.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let G=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,B=G!==void 0?G.length:0,Y,W,J,Q,le=0;if(R.morphAttributes.position!==void 0&&(le=1),R.morphAttributes.normal!==void 0&&(le=2),R.morphAttributes.color!==void 0&&(le=3),z){let Vt=ii[z];Y=Vt.vertexShader,W=Vt.fragmentShader}else Y=m.vertexShader,W=m.fragmentShader,c.update(m),J=c.getVertexShaderID(m),Q=c.getFragmentShaderID(m);let ie=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Se=x.isInstancedMesh===!0,be=x.isBatchedMesh===!0,Ce=!!m.map,ce=!!m.matcap,ue=!!P,he=!!m.aoMap,Ae=!!m.lightMap,Ue=!!m.bumpMap,S=!!m.normalMap,E=!!m.displacementMap,O=!!m.emissiveMap,F=!!m.metalnessMap,b=!!m.roughnessMap,C=m.anisotropy>0,U=m.clearcoat>0,D=m.dispersion>0,q=m.iridescence>0,H=m.sheen>0,j=m.transmission>0,ae=C&&!!m.anisotropyMap,me=U&&!!m.clearcoatMap,oe=U&&!!m.clearcoatNormalMap,_e=U&&!!m.clearcoatRoughnessMap,Me=q&&!!m.iridescenceMap,we=q&&!!m.iridescenceThicknessMap,je=H&&!!m.sheenColorMap,et=H&&!!m.sheenRoughnessMap,tt=!!m.specularMap,fe=!!m.specularColorMap,Re=!!m.specularIntensityMap,Ve=j&&!!m.transmissionMap,Gt=j&&!!m.thicknessMap,xe=!!m.gradientMap,nt=!!m.alphaMap,$e=m.alphaTest>0,wn=!!m.alphaHash,li=!!m.extensions,N=_i;m.toneMapped&&(ie!==null&&ie.isXRRenderTarget!==!0||(N=i.toneMapping));let Lt={shaderID:z,shaderType:m.type,shaderName:m.name,vertexShader:Y,fragmentShader:W,defines:m.defines,customVertexShaderID:J,customFragmentShaderID:Q,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:be,batchingColor:be&&x._colorsTexture!==null,instancing:Se,instancingColor:Se&&x.instanceColor!==null,instancingMorph:Se&&x.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ir,alphaToCoverage:!!m.alphaToCoverage,map:Ce,matcap:ce,envMap:ue,envMapMode:ue&&P.mapping,envMapCubeUVHeight:L,aoMap:he,lightMap:Ae,bumpMap:Ue,normalMap:S,displacementMap:d&&E,emissiveMap:O,normalMapObjectSpace:S&&m.normalMapType===Sp,normalMapTangentSpace:S&&m.normalMapType===Ep,metalnessMap:F,roughnessMap:b,anisotropy:C,anisotropyMap:ae,clearcoat:U,clearcoatMap:me,clearcoatNormalMap:oe,clearcoatRoughnessMap:_e,dispersion:D,iridescence:q,iridescenceMap:Me,iridescenceThicknessMap:we,sheen:H,sheenColorMap:je,sheenRoughnessMap:et,specularMap:tt,specularColorMap:fe,specularIntensityMap:Re,transmission:j,transmissionMap:Ve,thicknessMap:Gt,gradientMap:xe,opaque:m.transparent===!1&&m.blending===ga&&m.alphaToCoverage===!1,alphaMap:nt,alphaTest:$e,alphaHash:wn,combine:m.combine,mapUv:Ce&&_(m.map.channel),aoMapUv:he&&_(m.aoMap.channel),lightMapUv:Ae&&_(m.lightMap.channel),bumpMapUv:Ue&&_(m.bumpMap.channel),normalMapUv:S&&_(m.normalMap.channel),displacementMapUv:E&&_(m.displacementMap.channel),emissiveMapUv:O&&_(m.emissiveMap.channel),metalnessMapUv:F&&_(m.metalnessMap.channel),roughnessMapUv:b&&_(m.roughnessMap.channel),anisotropyMapUv:ae&&_(m.anisotropyMap.channel),clearcoatMapUv:me&&_(m.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(m.iridescenceMap.channel),iridescenceThicknessMapUv:we&&_(m.iridescenceThicknessMap.channel),sheenColorMapUv:je&&_(m.sheenColorMap.channel),sheenRoughnessMapUv:et&&_(m.sheenRoughnessMap.channel),specularMapUv:tt&&_(m.specularMap.channel),specularColorMapUv:fe&&_(m.specularColorMap.channel),specularIntensityMapUv:Re&&_(m.specularIntensityMap.channel),transmissionMapUv:Ve&&_(m.transmissionMap.channel),thicknessMapUv:Gt&&_(m.thicknessMap.channel),alphaMapUv:nt&&_(m.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(S||C),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!R.attributes.uv&&(Ce||nt),fog:!!T,useFog:m.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:x.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:le,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:N,decodeVideoTexture:Ce&&m.map.isVideoTexture===!0&&Je.getTransfer(m.map.colorSpace)===at,decodeVideoTextureEmissive:O&&m.emissiveMap.isVideoTexture===!0&&Je.getTransfer(m.emissiveMap.colorSpace)===at,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===pt,flipSided:m.side===dn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:li&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(li&&m.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt},getProgramCacheKey:function(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)g.push(v),g.push(m.defines[v]);return m.isRawShaderMaterial===!1&&((function(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)})(g,m),(function(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)})(g,m),g.push(i.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){let g=f[m.type],v;if(g){let y=ii[g];v=Np.clone(y.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,g){let v;for(let y=0,x=h.length;y<x;y++){let T=h[y];if(T.cacheKey===g){v=T,++v.usedTimes;break}}return v===void 0&&(v=new o0(i,g,m,s),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes===0){let g=h.indexOf(m);h[g]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){c.remove(m)},programs:h,dispose:function(){c.dispose()}}}function h0(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function u0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function om(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lm(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,c,l,h,u){let d=i[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},i[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.push(d):c.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.unshift(d):c.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=i.length;a<o;a++){let c=i[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||u0),n.length>1&&n.sort(o||om),r.length>1&&r.sort(o||om)}}}function d0(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new lm,i.set(e,[r])):t>=n.length?(r=new lm,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function p0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new de};break;case"SpotLight":t={position:new M,direction:new M,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new M,halfWidth:new M,halfHeight:new M}}return i[e.id]=t,t}}}var m0=0;function f0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function g0(i){let e=new p0,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new M);let r=new M,s=new Ie,a=new Ie;return{setup:function(o){let c=0,l=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let u=0,d=0,p=0,f=0,_=0,m=0,g=0,v=0,y=0,x=0,T=0;o.sort(f0);for(let w=0,P=o.length;w<P;w++){let L=o[w],z=L.color,G=L.intensity,B=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=z.r*G,l+=z.g*G,h+=z.b*G;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],G);T++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,Q=t.get(L);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.directionalShadow[u]=Q,n.directionalShadowMap[u]=Y,n.directionalShadowMatrix[u]=L.shadow.matrix,m++}n.directional[u]=W,u++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(z).multiplyScalar(G),W.distance=B,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[p]=W;let J=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,J.updateMatrices(L),L.castShadow&&x++),n.spotLightMatrix[p]=J.matrix,L.castShadow){let Q=t.get(L);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.spotShadow[p]=Q,n.spotShadowMap[p]=Y,v++}p++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(z).multiplyScalar(G),W.halfWidth.set(.5*L.width,0,0),W.halfHeight.set(0,.5*L.height,0),n.rectArea[f]=W,f++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let J=L.shadow,Q=t.get(L);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,n.pointShadow[d]=Q,n.pointShadowMap[d]=Y,n.pointShadowMatrix[d]=L.shadow.matrix,g++}n.point[d]=W,d++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(G),W.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[_]=W,_++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=h;let R=n.hash;R.directionalLength===u&&R.pointLength===d&&R.spotLength===p&&R.rectAreaLength===f&&R.hemiLength===_&&R.numDirectionalShadows===m&&R.numPointShadows===g&&R.numSpotShadows===v&&R.numSpotMaps===y&&R.numLightProbes===T||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=_,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=v+y-x,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=T,R.directionalLength=u,R.pointLength=d,R.spotLength=p,R.rectAreaLength=f,R.hemiLength=_,R.numDirectionalShadows=m,R.numPointShadows=g,R.numSpotShadows=v,R.numSpotMaps=y,R.numLightProbes=T,n.version=m0++)},setupView:function(o,c){let l=0,h=0,u=0,d=0,p=0,f=c.matrixWorldInverse;for(let _=0,m=o.length;_<m;_++){let g=o[_];if(g.isDirectionalLight){let v=n.directional[l];v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),l++}else if(g.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(f),p++}}},state:n}}function cm(i){let e=new g0(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function _0(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new cm(i),e.set(t,[s])):n>=r.length?(s=new cm(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}function v0(i,e,t){let n=new Di,r=new ee,s=new ee,a=new it,o=new ol({depthPacking:Mp}),c=new ll,l={},h=t.maxTextureSize,u={[es]:dn,[dn]:es,[pt]:pt},d=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new ot;f.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new V(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ch;let g=this.type;function v(R,w){let P=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zn(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,P,d,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,P,p,_,null)}function y(R,w,P,L){let z=null,G=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(G!==void 0)z=G;else if(z=P.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let B=z.uuid,Y=w.uuid,W=l[B];W===void 0&&(W={},l[B]=W);let J=W[Y];J===void 0&&(J=z.clone(),W[Y]=J,w.addEventListener("dispose",T)),z=J}return z.visible=w.visible,z.wireframe=w.wireframe,z.side=L===ti?w.shadowSide!==null?w.shadowSide:w.side:w.shadowSide!==null?w.shadowSide:u[w.side],z.alphaMap=w.alphaMap,z.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,z.map=w.map,z.clipShadows=w.clipShadows,z.clippingPlanes=w.clippingPlanes,z.clipIntersection=w.clipIntersection,z.displacementMap=w.displacementMap,z.displacementScale=w.displacementScale,z.displacementBias=w.displacementBias,z.wireframeLinewidth=w.wireframeLinewidth,z.linewidth=w.linewidth,P.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(i.properties.get(z).light=P),z}function x(R,w,P,L,z){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&z===ti)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);let B=e.update(R),Y=R.material;if(Array.isArray(Y)){let W=B.groups;for(let J=0,Q=W.length;J<Q;J++){let le=W[J],ie=Y[le.materialIndex];if(ie&&ie.visible){let ye=y(R,ie,L,z);R.onBeforeShadow(i,R,w,P,B,ye,le),i.renderBufferDirect(P,null,B,ye,R,le),R.onAfterShadow(i,R,w,P,B,ye,le)}}}else if(Y.visible){let W=y(R,Y,L,z);R.onBeforeShadow(i,R,w,P,B,W,null),i.renderBufferDirect(P,null,B,W,R,null),R.onAfterShadow(i,R,w,P,B,W,null)}}let G=R.children;for(let B=0,Y=G.length;B<Y;B++)x(G[B],w,P,L,z)}function T(R){R.target.removeEventListener("dispose",T);for(let w in l){let P=l[w],L=R.target.uuid;L in P&&(P[L].dispose(),delete P[L])}}this.render=function(R,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let L=i.getRenderTarget(),z=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Bi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let Y=g!==ti&&this.type===ti,W=g===ti&&this.type!==ti;for(let J=0,Q=R.length;J<Q;J++){let le=R[J],ie=le.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;r.copy(ie.mapSize);let ye=ie.getFrameExtents();if(r.multiply(ye),s.copy(ie.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ye.x),r.x=s.x*ye.x,ie.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ye.y),r.y=s.y*ye.y,ie.mapSize.y=s.y)),ie.map===null||Y===!0||W===!0){let be=this.type!==ti?{minFilter:qn,magFilter:qn}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Zn(r.x,r.y,be),ie.map.texture.name=le.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();let Se=ie.getViewportCount();for(let be=0;be<Se;be++){let Ce=ie.getViewport(be);a.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),B.viewport(a),ie.updateMatrices(le,be),n=ie.getFrustum(),x(w,P,ie.camera,le,this.type)}ie.isPointLightShadow!==!0&&this.type===ti&&v(ie,P),ie.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(L,z,G)}}var y0={[bl]:Ml,[El]:Tl,[Sl]:Al,[_a]:wl,[Ml]:bl,[Tl]:El,[Al]:Sl,[wl]:_a};function x0(i,e){let t=new function(){let b=!1,C=new it,U=null,D=new it(0,0,0,0);return{setMask:function(q){U===q||b||(i.colorMask(q,q,q,q),U=q)},setLocked:function(q){b=q},setClear:function(q,H,j,ae,me){me===!0&&(q*=ae,H*=ae,j*=ae),C.set(q,H,j,ae),D.equals(C)===!1&&(i.clearColor(q,H,j,ae),D.copy(C))},reset:function(){b=!1,U=null,D.set(-1,0,0,0)}}},n=new function(){let b=!1,C=!1,U=null,D=null,q=null;return{setReversed:function(H){if(C!==H){let j=e.get("EXT_clip_control");H?j.clipControlEXT(j.LOWER_LEFT_EXT,j.ZERO_TO_ONE_EXT):j.clipControlEXT(j.LOWER_LEFT_EXT,j.NEGATIVE_ONE_TO_ONE_EXT),C=H;let ae=q;q=null,this.setClear(ae)}},getReversed:function(){return C},setTest:function(H){H?ue(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(H){U===H||b||(i.depthMask(H),U=H)},setFunc:function(H){if(C&&(H=y0[H]),D!==H){switch(H){case bl:i.depthFunc(i.NEVER);break;case Ml:i.depthFunc(i.ALWAYS);break;case El:i.depthFunc(i.LESS);break;case _a:i.depthFunc(i.LEQUAL);break;case Sl:i.depthFunc(i.EQUAL);break;case wl:i.depthFunc(i.GEQUAL);break;case Tl:i.depthFunc(i.GREATER);break;case Al:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}D=H}},setLocked:function(H){b=H},setClear:function(H){q!==H&&(C&&(H=1-H),i.clearDepth(H),q=H)},reset:function(){b=!1,U=null,D=null,q=null,C=!1}}},r=new function(){let b=!1,C=null,U=null,D=null,q=null,H=null,j=null,ae=null,me=null;return{setTest:function(oe){b||(oe?ue(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(oe){C===oe||b||(i.stencilMask(oe),C=oe)},setFunc:function(oe,_e,Me){U===oe&&D===_e&&q===Me||(i.stencilFunc(oe,_e,Me),U=oe,D=_e,q=Me)},setOp:function(oe,_e,Me){H===oe&&j===_e&&ae===Me||(i.stencilOp(oe,_e,Me),H=oe,j=_e,ae=Me)},setLocked:function(oe){b=oe},setClear:function(oe){me!==oe&&(i.clearStencil(oe),me=oe)},reset:function(){b=!1,C=null,U=null,D=null,q=null,H=null,j=null,ae=null,me=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,_=null,m=null,g=null,v=null,y=null,x=new de(0,0,0),T=0,R=!1,w=null,P=null,L=null,z=null,G=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,W=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=W>=2);let Q=null,le={},ie=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),Se=new it().fromArray(ie),be=new it().fromArray(ye);function Ce(b,C,U,D){let q=new Uint8Array(4),H=i.createTexture();i.bindTexture(b,H),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let j=0;j<U;j++)b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?i.texImage3D(C,0,i.RGBA,1,1,D,0,i.RGBA,i.UNSIGNED_BYTE,q):i.texImage2D(C+j,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,q);return H}let ce={};function ue(b){o[b]!==!0&&(i.enable(b),o[b]=!0)}function he(b){o[b]!==!1&&(i.disable(b),o[b]=!1)}ce[i.TEXTURE_2D]=Ce(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=Ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=Ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=Ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),ue(i.DEPTH_TEST),n.setFunc(_a),E(!1),O(lh),ue(i.CULL_FACE),S(Bi);let Ae={[ts]:i.FUNC_ADD,[Wd]:i.FUNC_SUBTRACT,[jd]:i.FUNC_REVERSE_SUBTRACT};Ae[$d]=i.MIN,Ae[Xd]=i.MAX;let Ue={[qd]:i.ZERO,[Kd]:i.ONE,[Yd]:i.SRC_COLOR,[Jd]:i.SRC_ALPHA,[rp]:i.SRC_ALPHA_SATURATE,[np]:i.DST_COLOR,[ep]:i.DST_ALPHA,[Zd]:i.ONE_MINUS_SRC_COLOR,[Qd]:i.ONE_MINUS_SRC_ALPHA,[ip]:i.ONE_MINUS_DST_COLOR,[tp]:i.ONE_MINUS_DST_ALPHA,[sp]:i.CONSTANT_COLOR,[ap]:i.ONE_MINUS_CONSTANT_COLOR,[op]:i.CONSTANT_ALPHA,[lp]:i.ONE_MINUS_CONSTANT_ALPHA};function S(b,C,U,D,q,H,j,ae,me,oe){if(b!==Bi){if(d===!1&&(ue(i.BLEND),d=!0),b===Vd)q=q||C,H=H||U,j=j||D,C===f&&q===g||(i.blendEquationSeparate(Ae[C],Ae[q]),f=C,g=q),U===_&&D===m&&H===v&&j===y||(i.blendFuncSeparate(Ue[U],Ue[D],Ue[H],Ue[j]),_=U,m=D,v=H,y=j),ae.equals(x)!==!1&&me===T||(i.blendColor(ae.r,ae.g,ae.b,me),x.copy(ae),T=me),p=b,R=!1;else if(b!==p||oe!==R){if(f===ts&&g===ts||(i.blendEquation(i.FUNC_ADD),f=ts,g=ts),oe)switch(b){case ga:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hh:i.blendFunc(i.ONE,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case ga:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case uh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}_=null,m=null,v=null,y=null,x.set(0,0,0),T=0,p=b,R=oe}}else d===!0&&(he(i.BLEND),d=!1)}function E(b){w!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),w=b)}function O(b){b!==Hd?(ue(i.CULL_FACE),b!==P&&(b===lh?i.cullFace(i.BACK):b===Gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),P=b}function F(b,C,U){b?(ue(i.POLYGON_OFFSET_FILL),z===C&&G===U||(i.polygonOffset(C,U),z=C,G=U)):he(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:ue,disable:he,bindFramebuffer:function(b,C){return c[b]!==C&&(i.bindFramebuffer(b,C),c[b]=C,b===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=C),b===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=C),!0)},drawBuffers:function(b,C){let U=h,D=!1;if(b){U=l.get(C),U===void 0&&(U=[],l.set(C,U));let q=b.textures;if(U.length!==q.length||U[0]!==i.COLOR_ATTACHMENT0){for(let H=0,j=q.length;H<j;H++)U[H]=i.COLOR_ATTACHMENT0+H;U.length=q.length,D=!0}}else U[0]!==i.BACK&&(U[0]=i.BACK,D=!0);D&&i.drawBuffers(U)},useProgram:function(b){return u!==b&&(i.useProgram(b),u=b,!0)},setBlending:S,setMaterial:function(b,C){b.side===pt?he(i.CULL_FACE):ue(i.CULL_FACE);let U=b.side===dn;C&&(U=!U),E(U),b.blending===ga&&b.transparent===!1?S(Bi):S(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),n.setFunc(b.depthFunc),n.setTest(b.depthTest),n.setMask(b.depthWrite),t.setMask(b.colorWrite);let D=b.stencilWrite;r.setTest(D),D&&(r.setMask(b.stencilWriteMask),r.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),r.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),F(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:E,setCullFace:O,setLineWidth:function(b){b!==L&&(Y&&i.lineWidth(b),L=b)},setPolygonOffset:F,setScissorTest:function(b){b?ue(i.SCISSOR_TEST):he(i.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=i.TEXTURE0+B-1),Q!==b&&(i.activeTexture(b),Q=b)},bindTexture:function(b,C,U){U===void 0&&(U=Q===null?i.TEXTURE0+B-1:Q);let D=le[U];D===void 0&&(D={type:void 0,texture:void 0},le[U]=D),D.type===b&&D.texture===C||(Q!==U&&(i.activeTexture(U),Q=U),i.bindTexture(b,C||ce[b]),D.type=b,D.texture=C)},unbindTexture:function(){let b=le[Q];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexImage3D:function(){try{i.compressedTexImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage2D:function(){try{i.texImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage3D:function(){try{i.texImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},updateUBOMapping:function(b,C){let U=a.get(C);U===void 0&&(U=new WeakMap,a.set(C,U));let D=U.get(b);D===void 0&&(D=i.getUniformBlockIndex(C,b.name),U.set(b,D))},uniformBlockBinding:function(b,C){let U=a.get(C).get(b);s.get(C)!==U&&(i.uniformBlockBinding(C,U,b.__bindingPointIndex),s.set(C,U))},texStorage2D:function(){try{i.texStorage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texStorage3D:function(){try{i.texStorage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage2D:function(){try{i.texSubImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage3D:function(){try{i.texSubImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},scissor:function(b){Se.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),Se.copy(b))},viewport:function(b){be.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),be.copy(b))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},Q=null,le={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,_=null,m=null,g=null,v=null,y=null,x=new de(0,0,0),T=0,R=!1,w=null,P=null,L=null,z=null,G=null,Se.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function b0(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new ee,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(S,E){return p?new OffscreenCanvas(S,E):zs("canvas")}function _(S,E,O){let F=1,b=Ue(S);if((b.width>O||b.height>O)&&(F=O/Math.max(b.width,b.height)),F<1){if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let C=Math.floor(F*b.width),U=Math.floor(F*b.height);u===void 0&&(u=f(C,U));let D=E?f(C,U):u;return D.width=C,D.height=U,D.getContext("2d").drawImage(S,0,0,C,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+C+"x"+U+")."),D}return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),S}return S}function m(S){return S.generateMipmaps}function g(S){i.generateMipmap(S)}function v(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(S,E,O,F,b=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let C=E;if(E===i.RED&&(O===i.FLOAT&&(C=i.R32F),O===i.HALF_FLOAT&&(C=i.R16F),O===i.UNSIGNED_BYTE&&(C=i.R8)),E===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(C=i.R8UI),O===i.UNSIGNED_SHORT&&(C=i.R16UI),O===i.UNSIGNED_INT&&(C=i.R32UI),O===i.BYTE&&(C=i.R8I),O===i.SHORT&&(C=i.R16I),O===i.INT&&(C=i.R32I)),E===i.RG&&(O===i.FLOAT&&(C=i.RG32F),O===i.HALF_FLOAT&&(C=i.RG16F),O===i.UNSIGNED_BYTE&&(C=i.RG8)),E===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(C=i.RG8UI),O===i.UNSIGNED_SHORT&&(C=i.RG16UI),O===i.UNSIGNED_INT&&(C=i.RG32UI),O===i.BYTE&&(C=i.RG8I),O===i.SHORT&&(C=i.RG16I),O===i.INT&&(C=i.RG32I)),E===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(C=i.RGB8UI),O===i.UNSIGNED_SHORT&&(C=i.RGB16UI),O===i.UNSIGNED_INT&&(C=i.RGB32UI),O===i.BYTE&&(C=i.RGB8I),O===i.SHORT&&(C=i.RGB16I),O===i.INT&&(C=i.RGB32I)),E===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(C=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(C=i.RGBA16UI),O===i.UNSIGNED_INT&&(C=i.RGBA32UI),O===i.BYTE&&(C=i.RGBA8I),O===i.SHORT&&(C=i.RGBA16I),O===i.INT&&(C=i.RGBA32I)),E===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(C=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(C=i.R11F_G11F_B10F)),E===i.RGBA){let U=b?Bs:Je.getTransfer(F);O===i.FLOAT&&(C=i.RGBA32F),O===i.HALF_FLOAT&&(C=i.RGBA16F),O===i.UNSIGNED_BYTE&&(C=U===at?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(C=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(C=i.RGB5_A1)}return C!==i.R16F&&C!==i.R32F&&C!==i.RG16F&&C!==i.RG32F&&C!==i.RGBA16F&&C!==i.RGBA32F||e.get("EXT_color_buffer_float"),C}function x(S,E){let O;return S?E===null||E===hr||E===ss?O=i.DEPTH24_STENCIL8:E===Nn?O=i.DEPTH32F_STENCIL8:E===is&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===hr||E===ss?O=i.DEPTH_COMPONENT24:E===Nn?O=i.DEPTH_COMPONENT32F:E===is&&(O=i.DEPTH_COMPONENT16),O}function T(S,E){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==qn&&S.minFilter!==Kn?Math.log2(Math.max(E.width,E.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?E.mipmaps.length:1}function R(S){let E=S.target;E.removeEventListener("dispose",R),(function(O){let F=n.get(O);if(F.__webglInit===void 0)return;let b=O.source,C=d.get(b);if(C){let U=C[F.__cacheKey];U.usedTimes--,U.usedTimes===0&&P(O),Object.keys(C).length===0&&d.delete(b)}n.remove(O)})(E),E.isVideoTexture&&h.delete(E)}function w(S){let E=S.target;E.removeEventListener("dispose",w),(function(O){let F=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(F.__webglFramebuffer[C]))for(let U=0;U<F.__webglFramebuffer[C].length;U++)i.deleteFramebuffer(F.__webglFramebuffer[C][U]);else i.deleteFramebuffer(F.__webglFramebuffer[C]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[C])}else{if(Array.isArray(F.__webglFramebuffer))for(let C=0;C<F.__webglFramebuffer.length;C++)i.deleteFramebuffer(F.__webglFramebuffer[C]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let C=0;C<F.__webglColorRenderbuffer.length;C++)F.__webglColorRenderbuffer[C]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[C]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let b=O.textures;for(let C=0,U=b.length;C<U;C++){let D=n.get(b[C]);D.__webglTexture&&(i.deleteTexture(D.__webglTexture),a.memory.textures--),n.remove(b[C])}n.remove(O)})(E)}function P(S){let E=n.get(S);i.deleteTexture(E.__webglTexture);let O=S.source;delete d.get(O)[E.__cacheKey],a.memory.textures--}let L=0;function z(S,E){let O=n.get(S);if(S.isVideoTexture&&(function(F){let b=a.render.frame;h.get(F)!==b&&(h.set(F,b),F.update())})(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&O.__version!==S.version){let F=S.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(F.complete!==!1)return void le(O,S,E);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}else S.isExternalTexture&&(O.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+E)}let G={[Lo]:i.REPEAT,[zr]:i.CLAMP_TO_EDGE,[Do]:i.MIRRORED_REPEAT},B={[qn]:i.NEAREST,[vp]:i.NEAREST_MIPMAP_NEAREST,[ya]:i.NEAREST_MIPMAP_LINEAR,[Kn]:i.LINEAR,[Pl]:i.LINEAR_MIPMAP_NEAREST,[cr]:i.LINEAR_MIPMAP_LINEAR},Y={[wp]:i.NEVER,[Pp]:i.ALWAYS,[Tp]:i.LESS,[qh]:i.LEQUAL,[Ap]:i.EQUAL,[Ip]:i.GEQUAL,[Rp]:i.GREATER,[Cp]:i.NOTEQUAL};function W(S,E){if(E.type!==Nn||e.has("OES_texture_float_linear")!==!1||E.magFilter!==Kn&&E.magFilter!==Pl&&E.magFilter!==ya&&E.magFilter!==cr&&E.minFilter!==Kn&&E.minFilter!==Pl&&E.minFilter!==ya&&E.minFilter!==cr||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,G[E.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,G[E.wrapT]),S!==i.TEXTURE_3D&&S!==i.TEXTURE_2D_ARRAY||i.texParameteri(S,i.TEXTURE_WRAP_R,G[E.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,B[E.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,B[E.minFilter]),E.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Y[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qn||E.minFilter!==ya&&E.minFilter!==cr||E.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function J(S,E){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,E.addEventListener("dispose",R));let F=E.source,b=d.get(F);b===void 0&&(b={},d.set(F,b));let C=(function(U){let D=[];return D.push(U.wrapS),D.push(U.wrapT),D.push(U.wrapR||0),D.push(U.magFilter),D.push(U.minFilter),D.push(U.anisotropy),D.push(U.internalFormat),D.push(U.format),D.push(U.type),D.push(U.generateMipmaps),D.push(U.premultiplyAlpha),D.push(U.flipY),D.push(U.unpackAlignment),D.push(U.colorSpace),D.join()})(E);if(C!==S.__cacheKey){b[C]===void 0&&(b[C]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),b[C].usedTimes++;let U=b[S.__cacheKey];U!==void 0&&(b[S.__cacheKey].usedTimes--,U.usedTimes===0&&P(E)),S.__cacheKey=C,S.__webglTexture=b[C].texture}return O}function Q(S,E,O){return Math.floor(Math.floor(S/O)/E)}function le(S,E,O){let F=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(F=i.TEXTURE_3D);let b=J(S,E),C=E.source;t.bindTexture(F,S.__webglTexture,i.TEXTURE0+O);let U=n.get(C);if(C.version!==U.__version||b===!0){t.activeTexture(i.TEXTURE0+O);let D=Je.getPrimaries(Je.workingColorSpace),q=E.colorSpace===ur?null:Je.getPrimaries(E.colorSpace),H=E.colorSpace===ur||D===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);let j=_(E.image,!1,r.maxTextureSize);j=Ae(E,j);let ae=s.convert(E.format,E.colorSpace),me=s.convert(E.type),oe,_e=y(E.internalFormat,ae,me,E.colorSpace,E.isVideoTexture);W(F,E);let Me=E.mipmaps,we=E.isVideoTexture!==!0,je=U.__version===void 0||b===!0,et=C.dataReady,tt=T(E,j);if(E.isDepthTexture)_e=x(E.format===ba,E.type),je&&(we?t.texStorage2D(i.TEXTURE_2D,1,_e,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,ae,me,null));else if(E.isDataTexture)if(Me.length>0){we&&je&&t.texStorage2D(i.TEXTURE_2D,tt,_e,Me[0].width,Me[0].height);for(let fe=0,Re=Me.length;fe<Re;fe++)oe=Me[fe],we?et&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,oe.width,oe.height,ae,me,oe.data):t.texImage2D(i.TEXTURE_2D,fe,_e,oe.width,oe.height,0,ae,me,oe.data);E.generateMipmaps=!1}else we?(je&&t.texStorage2D(i.TEXTURE_2D,tt,_e,j.width,j.height),et&&(function(fe,Re,Ve,Gt){let xe=fe.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re.width,Re.height,Ve,Gt,Re.data);else{xe.sort((N,Lt)=>N.start-Lt.start);let nt=0;for(let N=1;N<xe.length;N++){let Lt=xe[nt],Vt=xe[N],mt=Lt.start+Lt.count,qi=Q(Vt.start,Re.width,4),Ki=Q(Lt.start,Re.width,4);Vt.start<=mt+1&&qi===Ki&&Q(Vt.start+Vt.count-1,Re.width,4)===qi?Lt.count=Math.max(Lt.count,Vt.start+Vt.count-Lt.start):(++nt,xe[nt]=Vt)}xe.length=nt+1;let $e=i.getParameter(i.UNPACK_ROW_LENGTH),wn=i.getParameter(i.UNPACK_SKIP_PIXELS),li=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,Re.width);for(let N=0,Lt=xe.length;N<Lt;N++){let Vt=xe[N],mt=Math.floor(Vt.start/4),qi=Math.ceil(Vt.count/4),Ki=mt%Re.width,bs=Math.floor(mt/Re.width),Ya=qi;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ki),i.pixelStorei(i.UNPACK_SKIP_ROWS,bs),t.texSubImage2D(i.TEXTURE_2D,0,Ki,bs,Ya,1,Ve,Gt,Re.data)}fe.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,$e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,wn),i.pixelStorei(i.UNPACK_SKIP_ROWS,li)}})(E,j,ae,me)):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,ae,me,j.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){we&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,_e,Me[0].width,Me[0].height,j.depth);for(let fe=0,Re=Me.length;fe<Re;fe++)if(oe=Me[fe],E.format!==Un)if(ae!==null)if(we){if(et)if(E.layerUpdates.size>0){let Ve=tu(oe.width,oe.height,E.format,E.type);for(let Gt of E.layerUpdates){let xe=oe.data.subarray(Gt*Ve/oe.data.BYTES_PER_ELEMENT,(Gt+1)*Ve/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,Gt,oe.width,oe.height,1,ae,xe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,oe.width,oe.height,j.depth,ae,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,_e,oe.width,oe.height,j.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?et&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,oe.width,oe.height,j.depth,ae,me,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,_e,oe.width,oe.height,j.depth,0,ae,me,oe.data)}else{we&&je&&t.texStorage2D(i.TEXTURE_2D,tt,_e,Me[0].width,Me[0].height);for(let fe=0,Re=Me.length;fe<Re;fe++)oe=Me[fe],E.format!==Un?ae!==null?we?et&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,_e,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?et&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,oe.width,oe.height,ae,me,oe.data):t.texImage2D(i.TEXTURE_2D,fe,_e,oe.width,oe.height,0,ae,me,oe.data)}else if(E.isDataArrayTexture)if(we){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,_e,j.width,j.height,j.depth),et)if(E.layerUpdates.size>0){let fe=tu(j.width,j.height,E.format,E.type);for(let Re of E.layerUpdates){let Ve=j.data.subarray(Re*fe/j.data.BYTES_PER_ELEMENT,(Re+1)*fe/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Re,j.width,j.height,1,ae,me,Ve)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ae,me,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,j.width,j.height,j.depth,0,ae,me,j.data);else if(E.isData3DTexture)we?(je&&t.texStorage3D(i.TEXTURE_3D,tt,_e,j.width,j.height,j.depth),et&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ae,me,j.data)):t.texImage3D(i.TEXTURE_3D,0,_e,j.width,j.height,j.depth,0,ae,me,j.data);else if(E.isFramebufferTexture){if(je)if(we)t.texStorage2D(i.TEXTURE_2D,tt,_e,j.width,j.height);else{let fe=j.width,Re=j.height;for(let Ve=0;Ve<tt;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,_e,fe,Re,0,ae,me,null),fe>>=1,Re>>=1}}else if(Me.length>0){if(we&&je){let fe=Ue(Me[0]);t.texStorage2D(i.TEXTURE_2D,tt,_e,fe.width,fe.height)}for(let fe=0,Re=Me.length;fe<Re;fe++)oe=Me[fe],we?et&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ae,me,oe):t.texImage2D(i.TEXTURE_2D,fe,_e,ae,me,oe);E.generateMipmaps=!1}else if(we){if(je){let fe=Ue(j);t.texStorage2D(i.TEXTURE_2D,tt,_e,fe.width,fe.height)}et&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,me,j)}else t.texImage2D(i.TEXTURE_2D,0,_e,ae,me,j);m(E)&&g(F),U.__version=C.version,E.onUpdate&&E.onUpdate(E)}S.__version=E.version}function ie(S,E,O,F,b,C){let U=s.convert(O.format,O.colorSpace),D=s.convert(O.type),q=y(O.internalFormat,U,D,O.colorSpace),H=n.get(E),j=n.get(O);if(j.__renderTarget=E,!H.__hasExternalTextures){let ae=Math.max(1,E.width>>C),me=Math.max(1,E.height>>C);b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?t.texImage3D(b,C,q,ae,me,E.depth,0,U,D,null):t.texImage2D(b,C,q,ae,me,0,U,D,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),he(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,b,j.__webglTexture,0,ue(E)):(b===i.TEXTURE_2D||b>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&b<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,b,j.__webglTexture,C),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(S,E,O){if(i.bindRenderbuffer(i.RENDERBUFFER,S),E.depthBuffer){let F=E.depthTexture,b=F&&F.isDepthTexture?F.type:null,C=x(E.stencilBuffer,b),U=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=ue(E);he(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D,C,E.width,E.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,D,C,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,C,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,S)}else{let F=E.textures;for(let b=0;b<F.length;b++){let C=F[b],U=s.convert(C.format,C.colorSpace),D=s.convert(C.type),q=y(C.internalFormat,U,D,C.colorSpace),H=ue(E);O&&he(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,H,q,E.width,E.height):he(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H,q,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,q,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(S,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!E.depthTexture||!E.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=n.get(E.depthTexture);O.__renderTarget=E,O.__webglTexture&&E.depthTexture.image.width===E.width&&E.depthTexture.image.height===E.height||(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);let F=O.__webglTexture,b=ue(E);if(E.depthTexture.format===xa)he(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0);else{if(E.depthTexture.format!==ba)throw new Error("Unknown depthTexture format");he(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0)}}function be(S){let E=n.get(S),O=S.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==S.depthTexture){let F=S.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),F){let b=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,F.removeEventListener("dispose",b)};F.addEventListener("dispose",b),E.__depthDisposeCallback=b}E.__boundDepthTexture=F}if(S.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let F=S.texture.mipmaps;F&&F.length>0?Se(E.__webglFramebuffer[0],S):Se(E.__webglFramebuffer,S)}else if(O){E.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[F]),E.__webglDepthbuffer[F]===void 0)E.__webglDepthbuffer[F]=i.createRenderbuffer(),ye(E.__webglDepthbuffer[F],S,!1);else{let b=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=E.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,b,i.RENDERBUFFER,C)}}else{let F=S.texture.mipmaps;if(F&&F.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ye(E.__webglDepthbuffer,S,!1);else{let b=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,b,i.RENDERBUFFER,C)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}let Ce=[],ce=[];function ue(S){return Math.min(r.maxSamples,S.samples)}function he(S){let E=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ae(S,E){let O=S.colorSpace,F=S.format,b=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==ir&&O!==ur&&(Je.getTransfer(O)===at?F===Un&&b===ni||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}function Ue(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=function(){let S=L;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),L+=1,S},this.resetTextureUnits=function(){L=0},this.setTexture2D=z,this.setTexture2DArray=function(S,E){let O=n.get(S);S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version?le(O,S,E):t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+E)},this.setTexture3D=function(S,E){let O=n.get(S);S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version?le(O,S,E):t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+E)},this.setTextureCube=function(S,E){let O=n.get(S);S.version>0&&O.__version!==S.version?(function(F,b,C){if(b.image.length!==6)return;let U=J(F,b),D=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+C);let q=n.get(D);if(D.version!==q.__version||U===!0){t.activeTexture(i.TEXTURE0+C);let H=Je.getPrimaries(Je.workingColorSpace),j=b.colorSpace===ur?null:Je.getPrimaries(b.colorSpace),ae=b.colorSpace===ur||H===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let me=b.isCompressedTexture||b.image[0].isCompressedTexture,oe=b.image[0]&&b.image[0].isDataTexture,_e=[];for(let xe=0;xe<6;xe++)_e[xe]=me||oe?oe?b.image[xe].image:b.image[xe]:_(b.image[xe],!0,r.maxCubemapSize),_e[xe]=Ae(b,_e[xe]);let Me=_e[0],we=s.convert(b.format,b.colorSpace),je=s.convert(b.type),et=y(b.internalFormat,we,je,b.colorSpace),tt=b.isVideoTexture!==!0,fe=q.__version===void 0||U===!0,Re=D.dataReady,Ve,Gt=T(b,Me);if(W(i.TEXTURE_CUBE_MAP,b),me){tt&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,et,Me.width,Me.height);for(let xe=0;xe<6;xe++){Ve=_e[xe].mipmaps;for(let nt=0;nt<Ve.length;nt++){let $e=Ve[nt];b.format!==Un?we!==null?tt?Re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt,0,0,$e.width,$e.height,we,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt,et,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt,0,0,$e.width,$e.height,we,je,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt,et,$e.width,$e.height,0,we,je,$e.data)}}}else{if(Ve=b.mipmaps,tt&&fe){Ve.length>0&&Gt++;let xe=Ue(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,et,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(oe){tt?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,_e[xe].width,_e[xe].height,we,je,_e[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,et,_e[xe].width,_e[xe].height,0,we,je,_e[xe].data);for(let nt=0;nt<Ve.length;nt++){let $e=Ve[nt].image[xe].image;tt?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt+1,0,0,$e.width,$e.height,we,je,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt+1,et,$e.width,$e.height,0,we,je,$e.data)}}else{tt?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,we,je,_e[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,et,we,je,_e[xe]);for(let nt=0;nt<Ve.length;nt++){let $e=Ve[nt];tt?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt+1,0,0,we,je,$e.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt+1,et,we,je,$e.image[xe])}}}m(b)&&g(i.TEXTURE_CUBE_MAP),q.__version=D.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version})(O,S,E):t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+E)},this.rebindTextures=function(S,E,O){let F=n.get(S);E!==void 0&&ie(F.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&be(S)},this.setupRenderTarget=function(S){let E=S.texture,O=n.get(S),F=n.get(E);S.addEventListener("dispose",w);let b=S.textures,C=S.isWebGLCubeRenderTarget===!0,U=b.length>1;if(U||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=E.version,a.memory.textures++),C){O.__webglFramebuffer=[];for(let D=0;D<6;D++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[D]=[];for(let q=0;q<E.mipmaps.length;q++)O.__webglFramebuffer[D][q]=i.createFramebuffer()}else O.__webglFramebuffer[D]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let D=0;D<E.mipmaps.length;D++)O.__webglFramebuffer[D]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(U)for(let D=0,q=b.length;D<q;D++){let H=n.get(b[D]);H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&he(S)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let D=0;D<b.length;D++){let q=b[D];O.__webglColorRenderbuffer[D]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[D]);let H=s.convert(q.format,q.colorSpace),j=s.convert(q.type),ae=y(q.internalFormat,H,j,q.colorSpace,S.isXRRenderTarget===!0),me=ue(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,ae,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,O.__webglColorRenderbuffer[D])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(C){t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),W(i.TEXTURE_CUBE_MAP,E);for(let D=0;D<6;D++)if(E.mipmaps&&E.mipmaps.length>0)for(let q=0;q<E.mipmaps.length;q++)ie(O.__webglFramebuffer[D][q],S,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+D,q);else ie(O.__webglFramebuffer[D],S,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);m(E)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(U){for(let D=0,q=b.length;D<q;D++){let H=b[D],j=n.get(H),ae=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ae=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),W(ae,H),ie(O.__webglFramebuffer,S,H,i.COLOR_ATTACHMENT0+D,ae,0),m(H)&&g(ae)}t.unbindTexture()}else{let D=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(D=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(D,F.__webglTexture),W(D,E),E.mipmaps&&E.mipmaps.length>0)for(let q=0;q<E.mipmaps.length;q++)ie(O.__webglFramebuffer[q],S,E,i.COLOR_ATTACHMENT0,D,q);else ie(O.__webglFramebuffer,S,E,i.COLOR_ATTACHMENT0,D,0);m(E)&&g(D),t.unbindTexture()}S.depthBuffer&&be(S)},this.updateRenderTargetMipmap=function(S){let E=S.textures;for(let O=0,F=E.length;O<F;O++){let b=E[O];if(m(b)){let C=v(S),U=n.get(b).__webglTexture;t.bindTexture(C,U),g(C),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(S){if(S.samples>0){if(he(S)===!1){let E=S.textures,O=S.width,F=S.height,b=i.COLOR_BUFFER_BIT,C=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=n.get(S),D=E.length>1;if(D)for(let H=0;H<E.length;H++)t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,U.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,U.__webglMultisampledFramebuffer);let q=S.texture.mipmaps;q&&q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,U.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,U.__webglFramebuffer);for(let H=0;H<E.length;H++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(b|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(b|=i.STENCIL_BUFFER_BIT)),D){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,U.__webglColorRenderbuffer[H]);let j=n.get(E[H]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,O,F,0,0,O,F,b,i.NEAREST),c===!0&&(Ce.length=0,ce.length=0,Ce.push(i.COLOR_ATTACHMENT0+H),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Ce.push(C),ce.push(C),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),D)for(let H=0;H<E.length;H++){t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,U.__webglColorRenderbuffer[H]);let j=n.get(E[H]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,U.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,j,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,U.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let E=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}},this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=he}function M0(i,e){return{convert:function(t,n=ur){let r,s=Je.getTransfer(n);if(t===ni)return i.UNSIGNED_BYTE;if(t===Dl)return i.UNSIGNED_SHORT_4_4_4_4;if(t===Fl)return i.UNSIGNED_SHORT_5_5_5_1;if(t===gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===_h)return i.UNSIGNED_INT_10F_11F_11F_REV;if(t===mh)return i.BYTE;if(t===fh)return i.SHORT;if(t===is)return i.UNSIGNED_SHORT;if(t===Ll)return i.INT;if(t===hr)return i.UNSIGNED_INT;if(t===Nn)return i.FLOAT;if(t===rs)return i.HALF_FLOAT;if(t===yp)return i.ALPHA;if(t===xp)return i.RGB;if(t===Un)return i.RGBA;if(t===xa)return i.DEPTH_COMPONENT;if(t===ba)return i.DEPTH_STENCIL;if(t===Nl)return i.RED;if(t===Ul)return i.RED_INTEGER;if(t===bp)return i.RG;if(t===vh)return i.RG_INTEGER;if(t===yh)return i.RGBA_INTEGER;if(t===kl||t===Bl||t===Ol||t===zl)if(s===at){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===kl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Bl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===zl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===kl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Bl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Ol)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===zl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===xh||t===bh||t===Mh||t===Eh){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===xh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===bh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Mh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Eh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Sh||t===wh||t===Th){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Sh||t===wh)return s===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===Th)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===Ah||t===Rh||t===Ch||t===Ih||t===Ph||t===Lh||t===Dh||t===Fh||t===Nh||t===Uh||t===kh||t===Bh||t===Oh||t===zh){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Ah)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Rh)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Ch)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Ih)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Ph)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Lh)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Dh)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Fh)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Nh)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Uh)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===kh)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Bh)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Oh)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===zh)return s===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Hh||t===Gh||t===Vh){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Hh)return s===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Vh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Wh||t===jh||t===$h||t===Xh){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Wh)return r.COMPRESSED_RED_RGTC1_EXT;if(t===jh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===$h)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Xh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===ss?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Zs(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Dn({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new V(new Ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fu=class extends Yn{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,f=null,_=typeof XRWebGLBinding<"u",m=new mu,g={},v=t.getContextAttributes(),y=null,x=null,T=[],R=[],w=new ee,P=null,L=new Bt;L.viewport=new it;let z=new Bt;z.viewport=new it;let G=[L,z],B=new yl,Y=null,W=null;function J(ce){let ue=R.indexOf(ce.inputSource);if(ue===-1)return;let he=T[ue];he!==void 0&&(he.update(ce.inputSource,ce.frame,l||a),he.dispatchEvent({type:ce.type,data:ce.inputSource}))}function Q(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",le);for(let ce=0;ce<T.length;ce++){let ue=R[ce];ue!==null&&(R[ce]=null,T[ce].disconnect(ue))}Y=null,W=null,m.reset();for(let ce in g)delete g[ce];e.setRenderTarget(y),p=null,d=null,u=null,r=null,x=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}function le(ce){for(let ue=0;ue<ce.removed.length;ue++){let he=ce.removed[ue],Ae=R.indexOf(he);Ae>=0&&(R[Ae]=null,T[Ae].disconnect(he))}for(let ue=0;ue<ce.added.length;ue++){let he=ce.added[ue],Ae=R.indexOf(he);if(Ae===-1){for(let S=0;S<T.length;S++){if(S>=R.length){R.push(he),Ae=S;break}if(R[S]===null){R[S]=he,Ae=S;break}}if(Ae===-1)break}let Ue=T[Ae];Ue&&Ue.connect(he)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let ue=T[ce];return ue===void 0&&(ue=new $r,T[ce]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ce){let ue=T[ce];return ue===void 0&&(ue=new $r,T[ce]=ue),ue.getGripSpace()},this.getHand=function(ce){let ue=T[ce];return ue===void 0&&(ue=new $r,T[ce]=ue),ue.getHandSpace()},this.setFramebufferScaleFactor=function(ce){s=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){o=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ce){l=ce},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(ce){if(r=ce,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",le),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,he=null,Ae=null;v.depth&&(Ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?ba:xa,he=v.stencil?ss:hr);let Ue={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Zn(d.textureWidth,d.textureHeight,{format:Un,type:ni,depthTexture:new Ys(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Zn(p.framebufferWidth,p.framebufferHeight,{format:Un,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};let ie=new M,ye=new M;function Se(ce,ue){ue===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(ue.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(r===null)return;let ue=ce.near,he=ce.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(he=m.depthFar)),B.near=z.near=L.near=ue,B.far=z.far=L.far=he,Y===B.near&&W===B.far||(r.updateRenderState({depthNear:B.near,depthFar:B.far}),Y=B.near,W=B.far),B.layers.mask=6|ce.layers.mask,L.layers.mask=3&B.layers.mask,z.layers.mask=5&B.layers.mask;let Ae=ce.parent,Ue=B.cameras;Se(B,Ae);for(let S=0;S<Ue.length;S++)Se(Ue[S],Ae);Ue.length===2?(function(S,E,O){ie.setFromMatrixPosition(E.matrixWorld),ye.setFromMatrixPosition(O.matrixWorld);let F=ie.distanceTo(ye),b=E.projectionMatrix.elements,C=O.projectionMatrix.elements,U=b[14]/(b[10]-1),D=b[14]/(b[10]+1),q=(b[9]+1)/b[5],H=(b[9]-1)/b[5],j=(b[8]-1)/b[0],ae=(C[8]+1)/C[0],me=U*j,oe=U*ae,_e=F/(-j+ae),Me=_e*-j;if(E.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(Me),S.translateZ(_e),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert(),b[10]===-1)S.projectionMatrix.copy(E.projectionMatrix),S.projectionMatrixInverse.copy(E.projectionMatrixInverse);else{let we=U+_e,je=D+_e,et=me-Me,tt=oe+(F-Me),fe=q*D/je*we,Re=H*D/je*we;S.projectionMatrix.makePerspective(et,tt,fe,Re,we,je),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()}})(B,L,z):B.projectionMatrix.copy(L.projectionMatrix),(function(S,E,O){O===null?S.matrix.copy(E.matrixWorld):(S.matrix.copy(O.matrixWorld),S.matrix.invert(),S.matrix.multiply(E.matrixWorld)),S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(E.projectionMatrix),S.projectionMatrixInverse.copy(E.projectionMatrixInverse),S.isPerspectiveCamera&&(S.fov=2*Hr*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1)})(ce,B,Ae)},this.getCamera=function(){return B},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(ce){c=ce,d!==null&&(d.fixedFoveation=ce),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ce)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(ce){return g[ce]};let be=null,Ce=new hm;Ce.setAnimationLoop(function(ce,ue){if(h=ue.getViewerPose(l||a),f=ue,h!==null){let he=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Ae=!1;he.length!==B.cameras.length&&(B.cameras.length=0,Ae=!0);for(let S=0;S<he.length;S++){let E=he[S],O=null;if(p!==null)O=p.getViewport(E);else{let b=u.getViewSubImage(d,E);O=b.viewport,S===0&&(e.setRenderTargetTextures(x,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(x))}let F=G[S];F===void 0&&(F=new Bt,F.layers.enable(S),F.viewport=new it,G[S]=F),F.matrix.fromArray(E.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(E.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(O.x,O.y,O.width,O.height),S===0&&(B.matrix.copy(F.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ae===!0&&B.cameras.push(F)}let Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let S=u.getDepthInformation(he[0]);S&&S.isValid&&S.texture&&m.init(S,r.renderState)}if(Ue&&Ue.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let S=0;S<he.length;S++){let E=he[S].camera;if(E){let O=g[E];O||(O=new Zs,g[E]=O);let F=u.getCameraImage(E);O.sourceTexture=F}}}}for(let he=0;he<T.length;he++){let Ae=R[he],Ue=T[he];Ae!==null&&Ue!==void 0&&Ue.update(Ae,ue,l||a)}be&&be(ce,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),f=null}),this.setAnimationLoop=function(ce){be=ce},this.dispose=function(){}}},mr=new nn,E0=new Ie;function S0(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===dn&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===dn&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(r.envMap.value=o,mr.copy(c),mr.x*=-1,mr.y*=-1,mr.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),r.envMapRotation.value.setFromMatrix4(E0.makeRotationFromEuler(mr)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Jh(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(n(r,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===dn&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(r,s,c)):s.isMeshMatcapMaterial?(n(r,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function w0(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,d,p,f){let _=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let g=f[m];if(typeof _=="number"||typeof _=="boolean"){if(g!==_)return f[m]=_,!0}else if(g.equals(_)===!1)return g.copy(_),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(m){let g=m.uniforms,v=0,y=16;for(let T=0,R=g.length;T<R;T++){let w=Array.isArray(g[T])?g[T]:[g[T]];for(let P=0,L=w.length;P<L;P++){let z=w[P],G=Array.isArray(z.value)?z.value:[z.value];for(let B=0,Y=G.length;B<Y;B++){let W=l(G[B]),J=v%y,Q=J%W.boundary,le=J+Q;v+=Q,le!==0&&y-le<W.storage&&(v+=y-le),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=W.storage}}}let x=v%y;x>0&&(v+=y-x),m.__size=v,m.__cache={}})(u),p=(function(m){let g=(function(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=g;let v=i.createBuffer(),y=m.__size,x=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,y,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,v),v})(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let _=e.render.frame;s[u.id]!==_&&((function(m){let g=r[m.id],v=m.uniforms,y=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let x=0,T=v.length;x<T;x++){let R=Array.isArray(v[x])?v[x]:[v[x]];for(let w=0,P=R.length;w<P;w++){let L=R[w];if(c(L,x,w,y)===!0){let z=L.__offset,G=Array.isArray(L.value)?L.value:[L.value],B=0;for(let Y=0;Y<G.length;Y++){let W=G[Y],J=l(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,z+B,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,B),B+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),s[u.id]=_)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);a=[],r={},s={}}}}var jl=class{constructor(e={}){let{canvas:t=Lp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),_=new Int32Array(4),m=null,g=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,T=!1;this._outputColorSpace=ln;let R=0,w=0,P=null,L=-1,z=null,G=new it,B=new it,Y=null,W=new de(0),J=0,Q=t.width,le=t.height,ie=1,ye=null,Se=null,be=new it(0,0,Q,le),Ce=new it(0,0,Q,le),ce=!1,ue=new Di,he=!1,Ae=!1,Ue=new Ie,S=new M,E=new it,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},F=!1;function b(){return P===null?ie:1}let C,U,D,q,H,j,ae,me,oe,_e,Me,we,je,et,tt,fe,Re,Ve,Gt,xe,nt,$e,wn,li,N=n;function Lt(A,$){return t.getContext(A,$)}try{let A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",qi,!1),t.addEventListener("webglcontextrestored",Ki,!1),t.addEventListener("webglcontextcreationerror",bs,!1),N===null){let $="webgl2";if(N=Lt($,A),N===null)throw Lt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}function Vt(){C=new og(N),C.init(),$e=new M0(N,C),U=new ng(N,C,e,$e),D=new x0(N,C),U.reversedDepthBuffer&&d&&D.buffers.depth.setReversed(!0),q=new hg(N),H=new h0,j=new b0(N,C,D,H,U,$e,q),ae=new rg(x),me=new ag(x),oe=new Zf(N),wn=new eg(N,oe),_e=new lg(N,oe,q,wn),Me=new dg(N,_e,oe,q),Gt=new ug(N,U,j),fe=new ig(H),we=new c0(x,ae,me,C,U,wn,fe),je=new S0(x,H),et=new d0,tt=new _0(C),Ve=new Qf(x,ae,me,D,Me,p,c),Re=new v0(x,Me,U),li=new w0(N,q,U,D),xe=new tg(N,C,q),nt=new cg(N,C,q),q.programs=we.programs,x.capabilities=U,x.extensions=C,x.properties=H,x.renderLists=et,x.shadowMap=Re,x.state=D,x.info=q}Vt();let mt=new fu(x,N);function qi(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ki(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let A=q.autoReset,$=Re.enabled,K=Re.autoUpdate,te=Re.needsUpdate,X=Re.type;Vt(),q.autoReset=A,Re.enabled=$,Re.autoUpdate=K,Re.needsUpdate=te,Re.type=X}function bs(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ya(A){let $=A.target;$.removeEventListener("dispose",Ya),(function(K){(function(te){let X=H.get(te).programs;X!==void 0&&(X.forEach(function(se){we.releaseProgram(se)}),te.isShaderMaterial&&we.releaseShaderCache(te))})(K),H.remove(K)})($)}function pc(A,$,K){A.transparent===!0&&A.side===pt&&A.forceSinglePass===!1?(A.side=dn,A.needsUpdate=!0,Ja(A,$,K),A.side=es,A.needsUpdate=!0,Ja(A,$,K),A.side=pt):Ja(A,$,K)}this.xr=mt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=C.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=C.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(A){A!==void 0&&(ie=A,this.setSize(Q,le,!1))},this.getSize=function(A){return A.set(Q,le)},this.setSize=function(A,$,K=!0){mt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(Q=A,le=$,t.width=Math.floor(A*ie),t.height=Math.floor($*ie),K===!0&&(t.style.width=A+"px",t.style.height=$+"px"),this.setViewport(0,0,A,$))},this.getDrawingBufferSize=function(A){return A.set(Q*ie,le*ie).floor()},this.setDrawingBufferSize=function(A,$,K){Q=A,le=$,ie=K,t.width=Math.floor(A*K),t.height=Math.floor($*K),this.setViewport(0,0,A,$)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(be)},this.setViewport=function(A,$,K,te){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,$,K,te),D.viewport(G.copy(be).multiplyScalar(ie).round())},this.getScissor=function(A){return A.copy(Ce)},this.setScissor=function(A,$,K,te){A.isVector4?Ce.set(A.x,A.y,A.z,A.w):Ce.set(A,$,K,te),D.scissor(B.copy(Ce).multiplyScalar(ie).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(A){D.setScissorTest(ce=A)},this.setOpaqueSort=function(A){ye=A},this.setTransparentSort=function(A){Se=A},this.getClearColor=function(A){return A.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(A=!0,$=!0,K=!0){let te=0;if(A){let X=!1;if(P!==null){let se=P.texture.format;X=se===yh||se===vh||se===Ul}if(X){let se=P.texture.type,ge=se===ni||se===hr||se===is||se===ss||se===Dl||se===Fl,ve=Ve.getClearColor(),Ee=Ve.getClearAlpha(),Pe=ve.r,De=ve.g,Le=ve.b;ge?(f[0]=Pe,f[1]=De,f[2]=Le,f[3]=Ee,N.clearBufferuiv(N.COLOR,0,f)):(_[0]=Pe,_[1]=De,_[2]=Le,_[3]=Ee,N.clearBufferiv(N.COLOR,0,_))}else te|=N.COLOR_BUFFER_BIT}$&&(te|=N.DEPTH_BUFFER_BIT),K&&(te|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",qi,!1),t.removeEventListener("webglcontextrestored",Ki,!1),t.removeEventListener("webglcontextcreationerror",bs,!1),Ve.dispose(),et.dispose(),tt.dispose(),H.dispose(),ae.dispose(),me.dispose(),Me.dispose(),wn.dispose(),li.dispose(),we.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Ku),mt.removeEventListener("sessionend",Yu),Yi.stop()},this.renderBufferDirect=function(A,$,K,te,X,se){$===null&&($=O);let ge=X.isMesh&&X.matrixWorld.determinant()<0,ve=(function(Xe,ft,kt,He,Fe){ft.isScene!==!0&&(ft=O),j.resetTextureUnits();let Tn=ft.fog,gc=He.isMeshStandardMaterial?ft.environment:null,Qa=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ir,Mi=(He.isMeshStandardMaterial?me:ae).get(He.envMap||gc),Hn=He.vertexColors===!0&&!!kt.attributes.color&&kt.attributes.color.itemSize===4,xr=!!kt.attributes.tangent&&(!!He.normalMap||He.anisotropy>0),ci=!!kt.morphAttributes.position,_c=!!kt.morphAttributes.normal,br=!!kt.morphAttributes.color,nd=_i;He.toneMapped&&(P!==null&&P.isXRRenderTarget!==!0||(nd=x.toneMapping));let id=kt.morphAttributes.position||kt.morphAttributes.normal||kt.morphAttributes.color,df=id!==void 0?id.length:0,qe=H.get(He),pf=g.state.lights;if(he===!0&&(Ae===!0||Xe!==z)){let _n=Xe===z&&He.id===L;fe.setState(He,Xe,_n)}let An=!1;He.version===qe.__version?qe.needsLights&&qe.lightsStateVersion!==pf.state.version||qe.outputColorSpace!==Qa||Fe.isBatchedMesh&&qe.batching===!1?An=!0:Fe.isBatchedMesh||qe.batching!==!0?Fe.isBatchedMesh&&qe.batchingColor===!0&&Fe.colorTexture===null||Fe.isBatchedMesh&&qe.batchingColor===!1&&Fe.colorTexture!==null||Fe.isInstancedMesh&&qe.instancing===!1?An=!0:Fe.isInstancedMesh||qe.instancing!==!0?Fe.isSkinnedMesh&&qe.skinning===!1?An=!0:Fe.isSkinnedMesh||qe.skinning!==!0?Fe.isInstancedMesh&&qe.instancingColor===!0&&Fe.instanceColor===null||Fe.isInstancedMesh&&qe.instancingColor===!1&&Fe.instanceColor!==null||Fe.isInstancedMesh&&qe.instancingMorph===!0&&Fe.morphTexture===null||Fe.isInstancedMesh&&qe.instancingMorph===!1&&Fe.morphTexture!==null||qe.envMap!==Mi||He.fog===!0&&qe.fog!==Tn?An=!0:qe.numClippingPlanes===void 0||qe.numClippingPlanes===fe.numPlanes&&qe.numIntersection===fe.numIntersection?(qe.vertexAlphas!==Hn||qe.vertexTangents!==xr||qe.morphTargets!==ci||qe.morphNormals!==_c||qe.morphColors!==br||qe.toneMapping!==nd||qe.morphTargetsCount!==df)&&(An=!0):An=!0:An=!0:An=!0:An=!0:(An=!0,qe.__version=He.version);let Zi=qe.currentProgram;An===!0&&(Zi=Ja(He,ft,Fe));let rd=!1,Ms=!1,vc=!1,Et=Zi.getUniforms(),Ei=qe.uniforms;if(D.useProgram(Zi.program)&&(rd=!0,Ms=!0,vc=!0),He.id!==L&&(L=He.id,Ms=!0),rd||z!==Xe){D.buffers.depth.getReversed()&&Xe.reversedDepth!==!0&&(Xe._reversedDepth=!0,Xe.updateProjectionMatrix()),Et.setValue(N,"projectionMatrix",Xe.projectionMatrix),Et.setValue(N,"viewMatrix",Xe.matrixWorldInverse);let _n=Et.map.cameraPosition;_n!==void 0&&_n.setValue(N,S.setFromMatrixPosition(Xe.matrixWorld)),U.logarithmicDepthBuffer&&Et.setValue(N,"logDepthBufFC",2/(Math.log(Xe.far+1)/Math.LN2)),(He.isMeshPhongMaterial||He.isMeshToonMaterial||He.isMeshLambertMaterial||He.isMeshBasicMaterial||He.isMeshStandardMaterial||He.isShaderMaterial)&&Et.setValue(N,"isOrthographic",Xe.isOrthographicCamera===!0),z!==Xe&&(z=Xe,Ms=!0,vc=!0)}if(Fe.isSkinnedMesh){Et.setOptional(N,Fe,"bindMatrix"),Et.setOptional(N,Fe,"bindMatrixInverse");let _n=Fe.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Et.setValue(N,"boneTexture",_n.boneTexture,j))}Fe.isBatchedMesh&&(Et.setOptional(N,Fe,"batchingTexture"),Et.setValue(N,"batchingTexture",Fe._matricesTexture,j),Et.setOptional(N,Fe,"batchingIdTexture"),Et.setValue(N,"batchingIdTexture",Fe._indirectTexture,j),Et.setOptional(N,Fe,"batchingColorTexture"),Fe._colorsTexture!==null&&Et.setValue(N,"batchingColorTexture",Fe._colorsTexture,j));let yc=kt.morphAttributes;yc.position===void 0&&yc.normal===void 0&&yc.color===void 0||Gt.update(Fe,kt,Zi),(Ms||qe.receiveShadow!==Fe.receiveShadow)&&(qe.receiveShadow=Fe.receiveShadow,Et.setValue(N,"receiveShadow",Fe.receiveShadow)),He.isMeshGouraudMaterial&&He.envMap!==null&&(Ei.envMap.value=Mi,Ei.flipEnvMap.value=Mi.isCubeTexture&&Mi.isRenderTargetTexture===!1?-1:1),He.isMeshStandardMaterial&&He.envMap===null&&ft.environment!==null&&(Ei.envMapIntensity.value=ft.environmentIntensity),Ms&&(Et.setValue(N,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&(Rn=vc,(Gn=Ei).ambientLightColor.needsUpdate=Rn,Gn.lightProbe.needsUpdate=Rn,Gn.directionalLights.needsUpdate=Rn,Gn.directionalLightShadows.needsUpdate=Rn,Gn.pointLights.needsUpdate=Rn,Gn.pointLightShadows.needsUpdate=Rn,Gn.spotLights.needsUpdate=Rn,Gn.spotLightShadows.needsUpdate=Rn,Gn.rectAreaLights.needsUpdate=Rn,Gn.hemisphereLights.needsUpdate=Rn),Tn&&He.fog===!0&&je.refreshFogUniforms(Ei,Tn),je.refreshMaterialUniforms(Ei,He,ie,le,g.state.transmissionRenderTarget[Xe.id]),os.upload(N,ed(qe),Ei,j));var Gn,Rn;if(He.isShaderMaterial&&He.uniformsNeedUpdate===!0&&(os.upload(N,ed(qe),Ei,j),He.uniformsNeedUpdate=!1),He.isSpriteMaterial&&Et.setValue(N,"center",Fe.center),Et.setValue(N,"modelViewMatrix",Fe.modelViewMatrix),Et.setValue(N,"normalMatrix",Fe.normalMatrix),Et.setValue(N,"modelMatrix",Fe.matrixWorld),He.isShaderMaterial||He.isRawShaderMaterial){let _n=He.uniformsGroups;for(let xc=0,mf=_n.length;xc<mf;xc++){let sd=_n[xc];li.update(sd,Zi),li.bind(sd,Zi)}}return Zi})(A,$,K,te,X);D.setMaterial(te,ge);let Ee=K.index,Pe=1;if(te.wireframe===!0){if(Ee=_e.getWireframeAttribute(K),Ee===void 0)return;Pe=2}let De=K.drawRange,Le=K.attributes.position,ze=De.start*Pe,ut=(De.start+De.count)*Pe;se!==null&&(ze=Math.max(ze,se.start*Pe),ut=Math.min(ut,(se.start+se.count)*Pe)),Ee!==null?(ze=Math.max(ze,0),ut=Math.min(ut,Ee.count)):Le!=null&&(ze=Math.max(ze,0),ut=Math.min(ut,Le.count));let vt=ut-ze;if(vt<0||vt===1/0)return;let Mt;wn.setup(X,te,ve,K,Ee);let dt=xe;if(Ee!==null&&(Mt=oe.get(Ee),dt=nt,dt.setIndex(Mt)),X.isMesh)te.wireframe===!0?(D.setLineWidth(te.wireframeLinewidth*b()),dt.setMode(N.LINES)):dt.setMode(N.TRIANGLES);else if(X.isLine){let Xe=te.linewidth;Xe===void 0&&(Xe=1),D.setLineWidth(Xe*b()),X.isLineSegments?dt.setMode(N.LINES):X.isLineLoop?dt.setMode(N.LINE_LOOP):dt.setMode(N.LINE_STRIP)}else X.isPoints?dt.setMode(N.POINTS):X.isSprite&&dt.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(C.get("WEBGL_multi_draw"))dt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Xe=X._multiDrawStarts,ft=X._multiDrawCounts,kt=X._multiDrawCount,He=Ee?oe.get(Ee).bytesPerElement:1,Fe=H.get(te).currentProgram.getUniforms();for(let Tn=0;Tn<kt;Tn++)Fe.setValue(N,"_gl_DrawID",Tn),dt.render(Xe[Tn]/He,ft[Tn])}else if(X.isInstancedMesh)dt.renderInstances(ze,vt,X.count);else if(K.isInstancedBufferGeometry){let Xe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ft=Math.min(K.instanceCount,Xe);dt.renderInstances(ze,vt,ft)}else dt.render(ze,vt)},this.compile=function(A,$,K=null){K===null&&(K=A),g=tt.get(K),g.init($),y.push(g),K.traverseVisible(function(X){X.isLight&&X.layers.test($.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),A!==K&&A.traverseVisible(function(X){X.isLight&&X.layers.test($.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();let te=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let se=X.material;if(se)if(Array.isArray(se))for(let ge=0;ge<se.length;ge++){let ve=se[ge];pc(ve,K,X),te.add(ve)}else pc(se,K,X),te.add(se)}),g=y.pop(),te},this.compileAsync=function(A,$,K=null){let te=this.compile(A,$,K);return new Promise(X=>{function se(){te.forEach(function(ge){H.get(ge).currentProgram.isReady()&&te.delete(ge)}),te.size!==0?setTimeout(se,10):X(A)}C.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let mc=null;function Ku(){Yi.stop()}function Yu(){Yi.start()}let Yi=new hm;function fc(A,$,K,te){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ue.intersectsSprite(A)){te&&E.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ue);let se=Me.update(A),ge=A.material;ge.visible&&m.push(A,se,ge,K,E.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ue.intersectsObject(A))){let se=Me.update(A),ge=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),E.copy(A.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),E.copy(se.boundingSphere.center)),E.applyMatrix4(A.matrixWorld).applyMatrix4(Ue)),Array.isArray(ge)){let ve=se.groups;for(let Ee=0,Pe=ve.length;Ee<Pe;Ee++){let De=ve[Ee],Le=ge[De.materialIndex];Le&&Le.visible&&m.push(A,se,Le,K,E.z,De)}}else ge.visible&&m.push(A,se,ge,K,E.z,null)}}let X=A.children;for(let se=0,ge=X.length;se<ge;se++)fc(X[se],$,K,te)}function Zu(A,$,K,te){let X=A.opaque,se=A.transmissive,ge=A.transparent;g.setupLightsView(K),he===!0&&fe.setGlobalState(x.clippingPlanes,K),te&&D.viewport(G.copy(te)),X.length>0&&Za(X,$,K),se.length>0&&Za(se,$,K),ge.length>0&&Za(ge,$,K),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Ju(A,$,K,te){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[te.id]===void 0&&(g.state.transmissionRenderTarget[te.id]=new Zn(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")||C.has("EXT_color_buffer_float")?rs:ni,minFilter:cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let X=g.state.transmissionRenderTarget[te.id],se=te.viewport||G;X.setSize(se.z*x.transmissionResolutionScale,se.w*x.transmissionResolutionScale);let ge=x.getRenderTarget(),ve=x.getActiveCubeFace(),Ee=x.getActiveMipmapLevel();x.setRenderTarget(X),x.getClearColor(W),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),F&&Ve.render(K);let Pe=x.toneMapping;x.toneMapping=_i;let De=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),g.setupLightsView(te),he===!0&&fe.setGlobalState(x.clippingPlanes,te),Za(A,K,te),j.updateMultisampleRenderTarget(X),j.updateRenderTargetMipmap(X),C.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ze=0,ut=$.length;ze<ut;ze++){let vt=$[ze],Mt=vt.object,dt=vt.geometry,Xe=vt.material,ft=vt.group;if(Xe.side===pt&&Mt.layers.test(te.layers)){let kt=Xe.side;Xe.side=dn,Xe.needsUpdate=!0,Qu(Mt,K,te,dt,Xe,ft),Xe.side=kt,Xe.needsUpdate=!0,Le=!0}}Le===!0&&(j.updateMultisampleRenderTarget(X),j.updateRenderTargetMipmap(X))}x.setRenderTarget(ge,ve,Ee),x.setClearColor(W,J),De!==void 0&&(te.viewport=De),x.toneMapping=Pe}function Za(A,$,K){let te=$.isScene===!0?$.overrideMaterial:null;for(let X=0,se=A.length;X<se;X++){let ge=A[X],ve=ge.object,Ee=ge.geometry,Pe=ge.group,De=ge.material;De.allowOverride===!0&&te!==null&&(De=te),ve.layers.test(K.layers)&&Qu(ve,$,K,Ee,De,Pe)}}function Qu(A,$,K,te,X,se){A.onBeforeRender(x,$,K,te,X,se),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(x,$,K,te,A,se),X.transparent===!0&&X.side===pt&&X.forceSinglePass===!1?(X.side=dn,X.needsUpdate=!0,x.renderBufferDirect(K,$,te,X,A,se),X.side=es,X.needsUpdate=!0,x.renderBufferDirect(K,$,te,X,A,se),X.side=pt):x.renderBufferDirect(K,$,te,X,A,se),A.onAfterRender(x,$,K,te,X,se)}function Ja(A,$,K){$.isScene!==!0&&($=O);let te=H.get(A),X=g.state.lights,se=g.state.shadowsArray,ge=X.state.version,ve=we.getParameters(A,X.state,se,$,K),Ee=we.getProgramCacheKey(ve),Pe=te.programs;te.environment=A.isMeshStandardMaterial?$.environment:null,te.fog=$.fog,te.envMap=(A.isMeshStandardMaterial?me:ae).get(A.envMap||te.environment),te.envMapRotation=te.environment!==null&&A.envMap===null?$.environmentRotation:A.envMapRotation,Pe===void 0&&(A.addEventListener("dispose",Ya),Pe=new Map,te.programs=Pe);let De=Pe.get(Ee);if(De!==void 0){if(te.currentProgram===De&&te.lightsStateVersion===ge)return td(A,ve),De}else ve.uniforms=we.getUniforms(A),A.onBeforeCompile(ve,x),De=we.acquireProgram(ve,Ee),Pe.set(Ee,De),te.uniforms=ve.uniforms;let Le=te.uniforms;return(A.isShaderMaterial||A.isRawShaderMaterial)&&A.clipping!==!0||(Le.clippingPlanes=fe.uniform),td(A,ve),te.needsLights=(function(ze){return ze.isMeshLambertMaterial||ze.isMeshToonMaterial||ze.isMeshPhongMaterial||ze.isMeshStandardMaterial||ze.isShadowMaterial||ze.isShaderMaterial&&ze.lights===!0})(A),te.lightsStateVersion=ge,te.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.directionalShadowMap.value=X.state.directionalShadowMap,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotShadowMap.value=X.state.spotShadowMap,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMap.value=X.state.pointShadowMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),te.currentProgram=De,te.uniformsList=null,De}function ed(A){if(A.uniformsList===null){let $=A.currentProgram.getUniforms();A.uniformsList=os.seqWithValue($.seq,A.uniforms)}return A.uniformsList}function td(A,$){let K=H.get(A);K.outputColorSpace=$.outputColorSpace,K.batching=$.batching,K.batchingColor=$.batchingColor,K.instancing=$.instancing,K.instancingColor=$.instancingColor,K.instancingMorph=$.instancingMorph,K.skinning=$.skinning,K.morphTargets=$.morphTargets,K.morphNormals=$.morphNormals,K.morphColors=$.morphColors,K.morphTargetsCount=$.morphTargetsCount,K.numClippingPlanes=$.numClippingPlanes,K.numIntersection=$.numClipIntersection,K.vertexAlphas=$.vertexAlphas,K.vertexTangents=$.vertexTangents,K.toneMapping=$.toneMapping}Yi.setAnimationLoop(function(A){mc&&mc(A)}),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(A){mc=A,mt.setAnimationLoop(A),A===null?Yi.stop():Yi.start()},mt.addEventListener("sessionstart",Ku),mt.addEventListener("sessionend",Yu),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera($),$=mt.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,$,P),g=tt.get(A,y.length),g.init($),y.push(g),Ue.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ue.setFromProjectionMatrix(Ue,gi,$.reversedDepth),Ae=this.localClippingEnabled,he=fe.init(this.clippingPlanes,Ae),m=et.get(A,v.length),m.init(),v.push(m),mt.enabled===!0&&mt.isPresenting===!0){let se=x.xr.getDepthSensingMesh();se!==null&&fc(se,$,-1/0,x.sortObjects)}fc(A,$,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ye,Se),F=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,F&&Ve.addToRenderList(m,A),this.info.render.frame++,he===!0&&fe.beginShadows();let K=g.state.shadowsArray;Re.render(K,A,$),he===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let te=m.opaque,X=m.transmissive;if(g.setupLights(),$.isArrayCamera){let se=$.cameras;if(X.length>0)for(let ge=0,ve=se.length;ge<ve;ge++)Ju(te,X,A,se[ge]);F&&Ve.render(A);for(let ge=0,ve=se.length;ge<ve;ge++){let Ee=se[ge];Zu(m,A,Ee,Ee.viewport)}}else X.length>0&&Ju(te,X,A,$),F&&Ve.render(A),Zu(m,A,$);P!==null&&w===0&&(j.updateMultisampleRenderTarget(P),j.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(x,A,$),wn.resetDefaultState(),L=-1,z=null,y.pop(),y.length>0?(g=y[y.length-1],he===!0&&fe.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,$,K){let te=H.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),H.get(A.texture).__webglTexture=$,H.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:K,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,$){let K=H.get(A);K.__webglFramebuffer=$,K.__useDefaultFramebuffer=$===void 0};let cf=N.createFramebuffer();this.setRenderTarget=function(A,$=0,K=0){P=A,R=$,w=K;let te=!0,X=null,se=!1,ge=!1;if(A){let ve=H.get(A);if(ve.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(N.FRAMEBUFFER,null),te=!1;else if(ve.__webglFramebuffer===void 0)j.setupRenderTarget(A);else if(ve.__hasExternalTextures)j.rebindTextures(A,H.get(A.texture).__webglTexture,H.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let De=A.depthTexture;if(ve.__boundDepthTexture!==De){if(De!==null&&H.has(De)&&(A.width!==De.image.width||A.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(A)}}let Ee=A.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);let Pe=H.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(X=Array.isArray(Pe[$])?Pe[$][K]:Pe[$],se=!0):X=A.samples>0&&j.useMultisampledRTT(A)===!1?H.get(A).__webglMultisampledFramebuffer:Array.isArray(Pe)?Pe[K]:Pe,G.copy(A.viewport),B.copy(A.scissor),Y=A.scissorTest}else G.copy(be).multiplyScalar(ie).floor(),B.copy(Ce).multiplyScalar(ie).floor(),Y=ce;if(K!==0&&(X=cf),D.bindFramebuffer(N.FRAMEBUFFER,X)&&te&&D.drawBuffers(A,X),D.viewport(G),D.scissor(B),D.setScissorTest(Y),se){let ve=H.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve.__webglTexture,K)}else if(ge){let ve=$;for(let Ee=0;Ee<A.textures.length;Ee++){let Pe=H.get(A.textures[Ee]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ee,Pe.__webglTexture,K,ve)}}else if(A!==null&&K!==0){let ve=H.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ve.__webglTexture,K)}L=-1},this.readRenderTargetPixels=function(A,$,K,te,X,se,ge,ve=0){if(!A||!A.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=H.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){D.bindFramebuffer(N.FRAMEBUFFER,Ee);try{let Pe=A.textures[ve],De=Pe.format,Le=Pe.type;if(!U.textureFormatReadable(De))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(Le))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");$>=0&&$<=A.width-te&&K>=0&&K<=A.height-X&&(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ve),N.readPixels($,K,te,X,$e.convert(De),$e.convert(Le),se))}finally{let Pe=P!==null?H.get(P).__webglFramebuffer:null;D.bindFramebuffer(N.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,$,K,te,X,se,ge,ve=0){if(!A||!A.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=H.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){if($>=0&&$<=A.width-te&&K>=0&&K<=A.height-X){D.bindFramebuffer(N.FRAMEBUFFER,Ee);let Pe=A.textures[ve],De=Pe.format,Le=Pe.type;if(!U.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ze=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ze),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ve),N.readPixels($,K,te,X,$e.convert(De),$e.convert(Le),0);let ut=P!==null?H.get(P).__webglFramebuffer:null;D.bindFramebuffer(N.FRAMEBUFFER,ut);let vt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Dp(N,vt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ze),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se),N.deleteBuffer(ze),N.deleteSync(vt),se}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,$=null,K=0){let te=Math.pow(2,-K),X=Math.floor(A.image.width*te),se=Math.floor(A.image.height*te),ge=$!==null?$.x:0,ve=$!==null?$.y:0;j.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,ge,ve,X,se),D.unbindTexture()};let hf=N.createFramebuffer(),uf=N.createFramebuffer();this.copyTextureToTexture=function(A,$,K=null,te=null,X=0,se=null){let ge,ve,Ee,Pe,De,Le,ze,ut,vt;se===null&&(X!==0?(Gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=X,X=0):se=0);let Mt=A.isCompressedTexture?A.mipmaps[se]:A.image;if(K!==null)ge=K.max.x-K.min.x,ve=K.max.y-K.min.y,Ee=K.isBox3?K.max.z-K.min.z:1,Pe=K.min.x,De=K.min.y,Le=K.isBox3?K.min.z:0;else{let Hn=Math.pow(2,-X);ge=Math.floor(Mt.width*Hn),ve=Math.floor(Mt.height*Hn),Ee=A.isDataArrayTexture?Mt.depth:A.isData3DTexture?Math.floor(Mt.depth*Hn):1,Pe=0,De=0,Le=0}te!==null?(ze=te.x,ut=te.y,vt=te.z):(ze=0,ut=0,vt=0);let dt=$e.convert($.format),Xe=$e.convert($.type),ft;$.isData3DTexture?(j.setTexture3D($,0),ft=N.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(j.setTexture2DArray($,0),ft=N.TEXTURE_2D_ARRAY):(j.setTexture2D($,0),ft=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,$.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,$.unpackAlignment);let kt=N.getParameter(N.UNPACK_ROW_LENGTH),He=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Fe=N.getParameter(N.UNPACK_SKIP_PIXELS),Tn=N.getParameter(N.UNPACK_SKIP_ROWS),gc=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Pe),N.pixelStorei(N.UNPACK_SKIP_ROWS,De),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Le);let Qa=A.isDataArrayTexture||A.isData3DTexture,Mi=$.isDataArrayTexture||$.isData3DTexture;if(A.isDepthTexture){let Hn=H.get(A),xr=H.get($),ci=H.get(Hn.__renderTarget),_c=H.get(xr.__renderTarget);D.bindFramebuffer(N.READ_FRAMEBUFFER,ci.__webglFramebuffer),D.bindFramebuffer(N.DRAW_FRAMEBUFFER,_c.__webglFramebuffer);for(let br=0;br<Ee;br++)Qa&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(A).__webglTexture,X,Le+br),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get($).__webglTexture,se,vt+br)),N.blitFramebuffer(Pe,De,ge,ve,ze,ut,ge,ve,N.DEPTH_BUFFER_BIT,N.NEAREST);D.bindFramebuffer(N.READ_FRAMEBUFFER,null),D.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||H.has(A)){let Hn=H.get(A),xr=H.get($);D.bindFramebuffer(N.READ_FRAMEBUFFER,hf),D.bindFramebuffer(N.DRAW_FRAMEBUFFER,uf);for(let ci=0;ci<Ee;ci++)Qa?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Hn.__webglTexture,X,Le+ci):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Hn.__webglTexture,X),Mi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xr.__webglTexture,se,vt+ci):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xr.__webglTexture,se),X!==0?N.blitFramebuffer(Pe,De,ge,ve,ze,ut,ge,ve,N.COLOR_BUFFER_BIT,N.NEAREST):Mi?N.copyTexSubImage3D(ft,se,ze,ut,vt+ci,Pe,De,ge,ve):N.copyTexSubImage2D(ft,se,ze,ut,Pe,De,ge,ve);D.bindFramebuffer(N.READ_FRAMEBUFFER,null),D.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Mi?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(ft,se,ze,ut,vt,ge,ve,Ee,dt,Xe,Mt.data):$.isCompressedArrayTexture?N.compressedTexSubImage3D(ft,se,ze,ut,vt,ge,ve,Ee,dt,Mt.data):N.texSubImage3D(ft,se,ze,ut,vt,ge,ve,Ee,dt,Xe,Mt):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,se,ze,ut,ge,ve,dt,Xe,Mt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,se,ze,ut,Mt.width,Mt.height,dt,Mt.data):N.texSubImage2D(N.TEXTURE_2D,se,ze,ut,ge,ve,dt,Xe,Mt);N.pixelStorei(N.UNPACK_ROW_LENGTH,kt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,He),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fe),N.pixelStorei(N.UNPACK_SKIP_ROWS,Tn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,gc),se===0&&$.generateMipmaps&&N.generateMipmap(ft),D.unbindTexture()},this.initRenderTarget=function(A){H.get(A).__webglFramebuffer===void 0&&j.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?j.setTextureCube(A,0):A.isData3DTexture?j.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?j.setTexture2DArray(A,0):j.setTexture2D(A,0),D.unbindTexture()},this.resetState=function(){R=0,w=0,P=null,D.reset(),wn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var fm={type:"change"},vu={type:"start"},_m={type:"end"},Xl=new Jn,gm=new yn,A0=Math.cos(70*Yh.DEG2RAD),Ct=new M,rn=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_u=1e-6,ql=class extends fa{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.target=new M,this.cursor=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:ki.ROTATE,TWO:ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new M,this._lastQuaternion=new tn,this._lastTargetPosition=new M,this._quat=new tn().setFromUnitVectors(e.up,new M(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qr,this._sphericalDelta=new Qr,this._scale=1,this._panOffset=new M,this._rotateStart=new ee,this._rotateEnd=new ee,this._rotateDelta=new ee,this._panStart=new ee,this._panEnd=new ee,this._panDelta=new ee,this._dollyStart=new ee,this._dollyEnd=new ee,this._dollyDelta=new ee,this._dollyDirection=new M,this._mouse=new ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=C0.bind(this),this._onPointerDown=R0.bind(this),this._onPointerUp=I0.bind(this),this._onContextMenu=k0.bind(this),this._onMouseWheel=D0.bind(this),this._onKeyDown=F0.bind(this),this._onTouchStart=N0.bind(this),this._onTouchMove=U0.bind(this),this._onMouseDown=P0.bind(this),this._onMouseMove=L0.bind(this),this._interceptControlDown=B0.bind(this),this._interceptControlUp=O0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fm),this.update(),this.state=lt.NONE}update(e=null){let t=this.object.position;Ct.copy(t).sub(this.target),Ct.applyQuaternion(this._quat),this._spherical.setFromVector3(Ct),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),r<-Math.PI?r+=rn:r>Math.PI&&(r-=rn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ct.setFromSpherical(this._spherical),Ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ct.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let o=new M(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new M(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Xl.origin.copy(this.object.position),Xl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xl.direction))<A0?this.object.lookAt(this.target):(gm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xl.intersectPlane(gm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>_u||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_u||this._lastTargetPosition.distanceToSquared(this.target)>_u?(this.dispatchEvent(fm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ct.setFromMatrixColumn(t,0),Ct.multiplyScalar(-e),this._panOffset.add(Ct)}_panUp(e,t){this.screenSpacePanning===!0?Ct.setFromMatrixColumn(t,1):(Ct.setFromMatrixColumn(t,0),Ct.crossVectors(this.object.up,Ct)),Ct.multiplyScalar(e),this._panOffset.add(Ct)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ct.copy(r).sub(this.target);let s=Ct.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function R0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function C0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function I0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_m),this.state=lt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function P0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=lt.DOLLY;break;case Ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=lt.ROTATE}break;case Ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(vu)}function L0(i){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function D0(i){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(i.preventDefault(),this.dispatchEvent(vu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(_m))}function F0(i){this.enabled!==!1&&this._handleKeyDown(i)}function N0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=lt.TOUCH_ROTATE;break;case ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=lt.TOUCH_DOLLY_PAN;break;case ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(vu)}function U0(i){switch(this._trackPointer(i),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=lt.NONE}}function k0(i){this.enabled!==!1&&i.preventDefault()}function B0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function O0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Sa=new M;function Mn(i,e,t,n,r,s){let a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;Sa.copy(e),Sa[n]=0,Sa.normalize();let l=.5*a/(a+o),h=1-Sa.angleTo(i)/c;return Math.sign(Sa[t])===1?h*l:o/(a+o)+l+l*(1-h)}var It=class i extends Ge{constructor(e=1,t=1,n=1,r=2,s=.1){let a=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new M,l=new M,h=new M(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,f=u.length/6,_=new M,m=.5/a;for(let g=0,v=0;g<u.length;g+=3,v+=2)switch(c.fromArray(u,g),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[g+0]=h.x*Math.sign(c.x)+l.x*s,u[g+1]=h.y*Math.sign(c.y)+l.y*s,u[g+2]=h.z*Math.sign(c.z)+l.z*s,d[g+0]=l.x,d[g+1]=l.y,d[g+2]=l.z,Math.floor(g/f)){case 0:_.set(1,0,0),p[v+0]=Mn(_,l,"z","y",s,n),p[v+1]=1-Mn(_,l,"y","z",s,t);break;case 1:_.set(-1,0,0),p[v+0]=1-Mn(_,l,"z","y",s,n),p[v+1]=1-Mn(_,l,"y","z",s,t);break;case 2:_.set(0,1,0),p[v+0]=1-Mn(_,l,"x","z",s,e),p[v+1]=Mn(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),p[v+0]=1-Mn(_,l,"x","z",s,e),p[v+1]=1-Mn(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),p[v+0]=1-Mn(_,l,"x","y",s,e),p[v+1]=1-Mn(_,l,"y","x",s,t);break;case 5:_.set(0,0,-1),p[v+0]=Mn(_,l,"x","y",s,e),p[v+1]=1-Mn(_,l,"y","x",s,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Z=window.STRUKTUR,z0=window.MODUL_TEXTE||{},Ke=1.6,En=1.9,Pa=2.1,fs="uzh-kompetenzhaus-v1",vm={"001":{fa:["Fa1","Fa3","Fa4"],ki:["KI1","KI6"],fu:["Fu2"],haupt:["Fa1","Fa3"],kat:"A"},"002":{fa:["Fa1","Fa2","Fa4","Fa9"],ki:["KI4"],fu:["Fu2"],haupt:["Fa1","Fa2"],kat:"A"},"003":{fa:["Fa10","Fa6","Fa7"],ki:["KI1","KI4","KI5","KI6"],fu:["Fu1","Fu2","Fu3"],haupt:["Fa10","KI5"],kat:"B"},100:{fa:["Fa5","Fa3","Fa4","Fa10"],ki:["KI4","KI6"],fu:["Fu2"],haupt:["Fa5","Fa3"],kat:"A+B"},101:{fa:["Fa3","Fa2","Fa4"],ki:["KI1","KI6"],fu:["Fu1"],haupt:["Fa3"],kat:"B"},102:{fa:["Fa2","Fa6","Fa3","Fa7","Fa10"],ki:["KI1","KI2","KI3","KI5"],fu:["Fu1","Fu3"],haupt:["Fa2","Fa6"],kat:"B"},103:{fa:["Fa3","Fa2","Fa4"],ki:["KI4","KI6","KI1"],fu:["Fu2"],haupt:["Fa3","KI4"],kat:"A"},200:{fa:["Fa1","Fa4"],ki:["KI4"],fu:["Fu2"],haupt:["Fa1","Fa4"],kat:"A"},201:{fa:["Fa1","Fa2"],ki:["KI4"],fu:["Fu2"],haupt:["Fa1"],kat:"A"},s11:{fa:["Fa4","Fa6","Fa1"],ki:["KI6","KI1"],fu:["Fu1"],haupt:["Fa4","Fa6"],kat:"B"},300:{fa:["Fa1","Fa5","Fa4","Fa9"],ki:["KI6"],fu:["Fu2"],haupt:["Fa1","Fa5"],kat:"A"},301:{fa:["Fa1","Fa8","Fa5"],ki:["KI3"],fu:["Fu3"],haupt:["Fa1","Fa8"],kat:"A+B"},302:{fa:["Fa1","Fa8","Fa5"],ki:["KI3"],fu:["Fu3"],haupt:["Fa1","Fa8"],kat:"A+B"},s13:{fa:["Fa4","Fa6","Fa1"],ki:["KI1","KI6","KI5"],fu:["Fu1"],haupt:["Fa4","Fa6"],kat:"B"},400:{fa:["Fa1","Fa8","Fa5","Fa7","Fa9"],ki:["KI5","KI6","KI3"],fu:["Fu3"],haupt:["Fa1","Fa8","Fa7"],kat:"A+B"},401:{fa:["Fa1","Fa8"],ki:[],fu:[],haupt:["Fa1"],kat:"A"},402:{fa:["Fa8","Fa1","Fa10"],ki:["KI6"],fu:["Fu2"],haupt:["Fa8","Fa1"],kat:"B"},403:{fa:["Fa1","Fa8","Fa9"],ki:[],fu:[],haupt:["Fa1"],kat:"A"},s12:{fa:["Fa4","Fa6","Fa1"],ki:["KI6","KI2"],fu:["Fu1"],haupt:["Fa4","Fa6"],kat:"B"},BA:{fa:["Fa6","Fa4","Fa2","Fa7","Fa10"],ki:["KI5","KI6","KI3","KI1"],fu:["Fu1","Fu2","Fu3"],haupt:["Fa6","Fa4","Fa7"],kat:"B"},500:{fa:["Fa3","Fa2","Fa4"],ki:["KI4","KI1"],fu:["Fu2"],haupt:["Fa3","KI4"],kat:"A+B"},501:{fa:["Fa5","Fa7","Fa4","Fa6"],ki:["KI6","KI5"],fu:["Fu1"],haupt:["Fa5","KI6"],kat:"B/C"},502:{fa:["Fa1","Fa8"],ki:["KI5"],fu:["Fu3"],haupt:["Fa1","Fa8"],kat:"B"},wp:{fa:["Fa1","Fa4","Fa8"],ki:["KI6"],fu:["Fu1"],haupt:["Fa1"],kat:"A"},s04:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s05:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s06:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s07:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s08:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s09:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s01a:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},s01b:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},s01c:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},s01d:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},600:{fa:["Fa8","Fa10","Fa7","Fa6"],ki:["KI5","KI3","KI1"],fu:["Fu3","Fu2"],haupt:["Fa8","Fa10"],kat:"B"},s02a:{fa:["Fa1","Fa4"],ki:[],fu:[],haupt:["Fa1","Fa4"],kat:"A"},s02b:{fa:["Fa1","Fa4"],ki:[],fu:[],haupt:["Fa1","Fa4"],kat:"A"},s03:{fa:["Fa2","Fa3"],ki:["KI1","KI4","KI2"],fu:["Fu1"],haupt:["Fa2","Fa3"],kat:"B/C"},MA:{fa:["Fa2","Fa3","Fa6","Fa7","Fa10"],ki:["KI1","KI2","KI3","KI5","KI6"],fu:["Fu1","Fu2","Fu3"],haupt:["Fa2","Fa3","Fa6"],kat:"B"},901:{fa:["Fa2","Fa6"],ki:[],fu:["Fu2"],haupt:["Fa2"],kat:"A"},902:{fa:["Fa6","Fa4"],ki:["KI6"],fu:["Fu2"],haupt:["Fa6","Fa4"],kat:"A"},903:{fa:["Fa2","Fa6"],ki:[],fu:["Fu2"],haupt:["Fa2"],kat:"A"},904:{fa:["Fa6","Fa4"],ki:["KI6"],fu:["Fu2"],haupt:["Fa6","Fa4"],kat:"A"},909:{fa:["Fa1","Fa4","Fa6"],ki:["KI5","KI6"],fu:["Fu2"],haupt:["Fa1","Fa4"],kat:"A"}},gs=()=>({v:3,lang:"de",mode:"frei",name:"",direktMSc:!1,onboarded:!1,placed:{frei:{},serious:{}},bestanden:{},quests:{},quiz:{},fb:{},msSeen:{frei:[],serious:[]},nachbarn:[],season:ku(),tod:35,sound:!0,envAuto:!0,p0:[!1,!1,!1,!1],minor:[!1,!1,!1,!1,!1,!1],pal:{bsc:"uzh",msc:"uzh"},wzSeen:{frei:[],serious:[]}});function ku(){let i=new Date().getMonth()+1;return i>=3&&i<=5?"fruehling":i>=6&&i<=8?"sommer":i>=9&&i<=11?"herbst":"winter"}var Wa=!0;try{localStorage.setItem(fs+"-t","1"),localStorage.removeItem(fs+"-t")}catch{Wa=!1}var I=gs();if(Wa)try{let i=localStorage.getItem(fs);i&&(I=Object.assign(gs(),JSON.parse(i)))}catch{}var ym=null;function rt(){Wa&&(clearTimeout(ym),ym=setTimeout(()=>{try{localStorage.setItem(fs,JSON.stringify(I))}catch{}},300))}var k=i=>window.T[I.lang]&&window.T[I.lang][i]||window.T.de[i]||i,re=i=>i&&(i[I.lang]||i.de)||"";function Bu(){document.querySelectorAll("[data-i18n]").forEach(i=>{let e=i.getAttribute("data-i18n"),t=k(e);t&&(i.innerHTML=(t.startsWith("\u2B07")||t.startsWith("\u2912")||t.startsWith("\u{1F5D1}")||t.startsWith("\u2753")||t.startsWith("\u{1F512}")||t.startsWith("\u2139\uFE0F")||i.tagName==="LI",t)),t&&(i.innerHTML=t)}),document.getElementById("btnLang").textContent=I.lang==="de"?"EN":"DE",document.documentElement.lang=I.lang}var _t={};Z.slots.forEach(i=>_t[i.slot]=i);var fn={};(Z.optionsmodule||[]).forEach(i=>fn[i.code]=i);var gn={};Z.kompetenzen.forEach(i=>gn[i.id]=i);function Ou(i){let e=I.placed[I.mode][i.slot],t=typeof bi<"u"&&i.optionen&&i.optionen.includes(bi)&&zn===i.slot?bi:null,n=e&&e.opt||t||i.code;return z0[n]||null}function Yt(i){let e=Ou(i);if(e&&e.komp)return{komp:e.komp,haupt:e.haupt||[],kat:e.kat||(vm[i.slot]||{}).kat||"B"};let t=vm[i.slot]||{fa:[],ki:[],fu:[],haupt:[],kat:"B"};return{komp:{fa:t.fa,ki:t.ki,fu:t.fu},haupt:t.haupt,kat:t.kat}}function Ut(i){let e=I.placed[I.mode][i.slot];return e&&e.opt&&fn[e.opt]?re(fn[e.opt].titel):re(i.titel)}var Kt={active:!1,data:null},_s=Z.themen||{},Su={};(Z.paletten||[]).forEach(i=>Su[i.id]=i);function H0(i){return Su[I.pal&&I.pal[i]||"uzh"]||Su.uzh||{rahmen:"#f2f0e9",dach:null,holz:"#8a6642",akzent:"#0028a5"}}function Lm(i,e){let t=e||I.placed[I.mode][i];return!t||!t.thema?null:(_s[i]||[]).find(n=>n.id===t.thema)||null}function ic(){let i={klin:0,ekn:0,swo:0};for(let r of["s11","s12","s13","BA"]){let s=Lm(r);s&&i[s.r]!==void 0&&i[s.r]++}let e=null,t=0,n=!1;for(let r of Object.keys(i))i[r]>t?(e=r,t=i[r],n=!1):i[r]===t&&t>0&&(n=!0);return{counts:i,r:t>=2&&!n?e:null}}function rc(){let i={DeNC:0,HEA:0,SEOP:0};for(let t of["s04","s05","s06","s07","s08","s09"]){let n=I.placed[I.mode][t];n&&n.sp&&i[n.sp]!==void 0&&i[n.sp]++}let e=null;for(let t of Object.keys(i))i[t]>=4&&(e=t);return{counts:i,dom:e,total:i.DeNC+i.HEA+i.SEOP}}function Yl(){let i=I.placed[I.mode].wp;return i&&i.opt||null}function ps(){let i=I.placed[I.mode].BA;return!i||!i.thema||!i.frage?null:((Z.baFragen||{})[i.thema]||[]).find(e=>e.id===i.frage)||null}function La(){let i=I.placed[I.mode].BA;return!i||!i.artefakt?null:(Z.baArtefakte||[]).find(e=>e.id===i.artefakt)||null}function Qe(i,e){return!!I.placed[e||I.mode][i]}function Dm(i){return Qe("BA",i||I.mode)||I.direktMSc}function ys(i){if(i.optionen){let e=I.placed[I.mode][i.slot];return e&&e.opt||typeof bi<"u"&&bi||i.optionen[0]}return i.code}function Fm(i){return(window.QUIZ||{})[ys(i)]||null}function G0(i){return!!I.quiz[ys(i)]}function Wi(i,e){if(e=e||I.mode,Kt.active)return{ok:!1,reason:""};if(Qe(i.slot,e))return{ok:!1,reason:""};if(i.haus==="msc"&&!Dm(e))return{ok:!1,reason:k("grund_msc")};let t=(i.voraus||[]).filter(n=>!Qe(n,e));if(t.length){let n=t.slice(0,3).map(r=>re(_t[r].titel).split(",")[0]).join(" \xB7 ");return{ok:!1,reason:k("grund_voraus")+n+(t.length>3?" \u2026":"")}}return e==="serious"&&!I.bestanden[i.slot]?{ok:!1,reason:k("grund_bestanden")}:e==="serious"&&Fm(i)&&!G0(i)?{ok:!1,reason:k("grund_quiz")}:{ok:!0,reason:""}}var si=document.getElementById("c3d"),Sn;try{Sn=new jl({canvas:si,antialias:!0})}catch(i){throw document.body.insertAdjacentHTML("beforeend",'<div style="position:fixed;inset:0;z-index:99;display:grid;place-items:center;background:#f4f6fb;padding:24px"><div style="max-width:420px;text-align:center;font-family:Helvetica,Arial,sans-serif"><div style="font-size:40px">\u{1F3D7}\uFE0F</div><h2 style="color:#0028a5;margin:10px 0">3D wird hier nicht unterst\xFCtzt</h2><p style="color:#3c4356;line-height:1.5">Dein Browser kann WebGL gerade nicht starten. Bitte \xF6ffne das Kompetenzhaus in Safari, Chrome oder Firefox (nicht im In-App-Browser) \u2014 oder auf einem anderen Ger\xE4t.</p></div></div>'),i}Sn.setPixelRatio(Math.min(window.devicePixelRatio,2));Sn.shadowMap.enabled=!0;Sn.shadowMap.type=xl;Sn.toneMapping=Rl;Sn.toneMappingExposure=1.05;var Ye=new $s,Pt=new Bt(46,1,.1,400);Pt.position.set(-23,17,30);var Ht=new ql(Pt,si);Ht.enableDamping=!0;Ht.dampingFactor=.06;Ht.maxPolarAngle=Math.PI*.49;Ht.minDistance=6;Ht.maxDistance=105;Ht.target.set(-7,3,0);var Nm=new ca(12573183,9075285,.75);Ye.add(Nm);var Qt=new da(16771524,2.2);Qt.castShadow=!0;Qt.shadow.mapSize.set(2048,2048);Qt.shadow.camera.left=-48;Qt.shadow.camera.right=48;Qt.shadow.camera.top=48;Qt.shadow.camera.bottom=-48;Qt.shadow.camera.far=120;Qt.shadow.bias=-4e-4;Qt.shadow.radius=6;Ye.add(Qt);Ye.add(Qt.target);Ye.fog=new js(12574965,60,160);var $i=new Be;Ye.add($i);var sc=new ne({color:7319378,roughness:1}),zu=new V(new We(90,90,.6,48),sc);zu.position.y=-.3;zu.receiveShadow=!0;$i.add(zu);var Hu=new ne({color:13287336,roughness:.95}),Gu=new ne({color:14209730,roughness:1}),Zl=new ne({color:10196876,roughness:.95});function Um(i){let e=Z.haeuser[i],t=new Be,n=(e.breite+3.6)*Ke,r=(e.tiefe+3.6)*Ke,s=new V(new Ge(n,.24,r),Hu);return s.position.set(e.origin[0],.12,e.origin[2]),s.receiveShadow=!0,t.add(s),$i.add(t),t}Um("bsc");var V0=Um("msc"),Vu=new V(new Ge(9,.18,2.4),Gu);Vu.position.set(0,.09,0);Vu.receiveShadow=!0;$i.add(Vu);var Jl=new ne({color:5149760,roughness:1,flatShading:!0}),W0=new ne({color:8018490,roughness:1}),j0=[[-26,-12],[-30,4],[-20,14],[26,-13],[31,3],[22,15],[-2,-17],[4,18],[-14,-18],[16,-18]];j0.forEach(([i,e],t)=>{let n=new Be,r=new V(new We(.22,.32,1.6,6),W0);r.position.y=.8,r.castShadow=!0;let s=1+t%3*.35;if(t%3===2){let a=new V(new Fn(1.1*s,2.6*s,7),Jl);a.position.y=1.6+1.1*s,a.castShadow=!0,n.add(a)}else{let a=new V(new Tt(1.35*s,0),Jl);if(a.position.y=2.2+.5*s,a.castShadow=!0,n.add(a),t%3===1){let o=new V(new Tt(.8*s,0),Jl);o.position.set(.7,1.8+.4*s,.3),o.castShadow=!0,n.add(o)}}n.add(r),n.position.set(i,0,e),n.rotation.y=t*1.7,$i.add(n)});var km=new ne({color:6199880,roughness:1,flatShading:!0});[[-62,-42,26],[55,-48,30],[-72,22,22],[66,28,24],[-6,-75,36],[-42,62,26],[48,60,22],[8,70,28]].forEach(([i,e,t])=>{let n=new V(new un(t,10,7),km);n.position.set(i,-t*.62,e),n.scale.y=.55,$i.add(n)});var $0=new ne({color:10134197,roughness:1,flatShading:!0});[[-7,9,.5],[19,-9,.7],[-19,-10,.45],[3,-13,.6]].forEach(([i,e,t])=>{let n=new V(new Tt(t,0),$0);n.position.set(i,t*.55,e),n.rotation.set(t,i,e),n.castShadow=!0,$i.add(n)});var X0=new Tt(.09,0),q0=new $t,Ql=new Li(X0,q0,90);{let i=[16777215,16234452,15979342,13213951],e=new Ie,t=0;for(;t<90;){let n=(Math.random()-.5)*76,r=(Math.random()-.5)*52;Math.abs(n)<22&&Math.abs(r)<9||(e.makeScale(1,1+Math.random(),1),e.setPosition(n,.12,r),Ql.setMatrixAt(t,e),Ql.setColorAt(t,new de(i[t%i.length])),t++)}$i.add(Ql)}var wu=new ne({color:16777215,roughness:1,flatShading:!0,transparent:!0,opacity:.92}),Bm=[];for(let i=0;i<6;i++){let e=new Be,t=3+i%3;for(let n=0;n<t;n++){let r=1.6+Math.random()*2.2,s=new V(new Tt(r,0),wu);s.position.set(n*2.4-t,(Math.random()-.5)*.8,(Math.random()-.5)*1.6),s.scale.y=.55,e.add(s)}e.position.set((Math.random()-.5)*120,22+Math.random()*8,(Math.random()-.5)*80-10),e.userData.v=.25+Math.random()*.4,Bm.push(e),Ye.add(e)}var Oi=new Be;{let i=new V(new We(.05,.06,.9,6),new ne({color:9070146,roughness:.9}));i.position.y=.45;let e=new V(new It(.55,.35,.32,2,.06),new ne({color:10405,roughness:.55}));e.position.y=1.02;let t=new V(new Ze(.34,.045),new ne({color:16053488}));t.position.set(0,1.06,.17);let n=new V(new Ze(.16,.11),new ne({color:14248523,side:pt}));n.position.set(.32,1.12,0),Oi.add(i,e,t,n),Oi.position.set(-3.4,.24,4.7),Oi.rotation.y=.4,Oi.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.userData.action="p0")}),Ye.add(Oi)}var Hi=new Be;{let i=new V(new It(4.4,.22,1.5,2,.06),new ne({color:7033144,roughness:1}));i.position.y=.11,i.receiveShadow=!0,Hi.add(i),Hi.position.set(-4.2,.24,8.2),Hi.traverse(e=>{e.isMesh&&(e.userData.action="minor")}),Ye.add(Hi)}var Tu=new Be;Hi.add(Tu);function Om(){Tu.clear();let i=[14964526,15979342,13213951,16777215,16234452,8373098];(I.minor||[]).forEach((e,t)=>{if(e)for(let n=0;n<3;n++){let r=new V(new We(.02,.025,.28,5),new ne({color:5149760}));r.position.set(-1.85+t*.74,.34,-.4+n*.4);let s=new V(new Tt(.09,0),new $t({color:i[t]}));s.position.set(-1.85+t*.74,.52,-.4+n*.4),r.userData.action="minor",s.userData.action="minor",Tu.add(r,s)}})}var zi=new Be;{let i=new ne({color:10122576,roughness:.95}),e=new ne({color:7032627,roughness:.95}),t=new V(new It(2.6,1.9,1.9,2,.06),i);t.position.y=.95;let n=new V(Da(3,2.3,.75),new ne({color:3752282,roughness:.85,flatShading:!0,side:pt}));n.position.y=1.9;let r=new V(new Ze(.7,1.3),e);r.position.set(-.55,.66,.96);let s=new V(new Ze(.85,.55),new ne({color:2766160,roughness:.3,metalness:.3}));s.position.set(.6,1.2,.96);let a=Oa("\u{1F6E0}\uFE0F","#0028a5");a.scale.set(1.2,.48,1),a.position.set(0,3.05,0),zi.add(t,n,r,s,a),zi.position.set(-19.5,.02,10.4),zi.rotation.y=.55,zi.traverse(o=>{o.isMesh&&(o.castShadow=!0),o.userData.action="bauhuette"}),Ye.add(zi)}var cs=new Be;{let i=new ne({color:8227434,roughness:.95}),e=new ne({color:6187854,roughness:.95}),t=new V(new It(1.9,1.5,1.3,2,.05),i);t.position.y=.75;let n=new V(new Ge(2.15,.09,1.6),new ne({color:3752282,roughness:.85}));n.position.y=1.58,n.rotation.x=-.12;let r=new V(new Ze(.6,1.1),e);r.position.set(-.35,.57,.66);let s=Oa("\u{1F9F0}","#0e8f7e");s.scale.set(1.05,.42,1),s.position.set(0,2.35,0),cs.add(t,n,r,s),cs.position.set(-24.2,.02,5.6),cs.rotation.y=.9,cs.traverse(a=>{a.isMesh&&(a.castShadow=!0),a.userData.action="geraete"}),Ye.add(cs)}function zm(i,e,t,n,r,s){let a=new Float32Array(i*3);for(let h=0;h<i;h++)a[h*3]=(Math.random()-.5)*n,a[h*3+1]=r+Math.random()*(s-r),a[h*3+2]=(Math.random()-.5)*n;let o=new ot;o.setAttribute("position",new Ot(a,3));let c=new qr({size:e,color:t,transparent:!0,opacity:0,sizeAttenuation:!0,depthWrite:!1}),l=new Ks(o,c);return Ye.add(l),l}var K0=zm(320,.5,16777215,220,28,90),ec=zm(26,.35,16765286,46,.6,3.2),Vi=[],ja=i=>1-Math.pow(1-i,3),Y0=i=>i*i;var Z0=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function kn(i,e,t=ja,n=null){Vi.push({t:0,dur:i,fn:e,ease:t,onDone:n})}var tc=0,Au=0,J0=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,nc=!!(window.claude&&typeof window.claude.complete=="function"),xm="https://claude.ai/public/artifacts/a21eaa67-43cd-4ece-a7cf-069e7f24a561";async function Ru(i){return String(await window.claude.complete(i)).trim()}var Cu=null,wa=null;function On(i,e,t=1.6,n=null){if(wa){let a=Vi.indexOf(wa);a>=0&&Vi.splice(a,1)}let r=Pt.position.clone(),s=Ht.target.clone();Ht.enabled=!1,wa={t:0,dur:t,ease:Z0,fn:a=>{Pt.position.lerpVectors(r,i,a),Ht.target.lerpVectors(s,e,a)},onDone:()=>{wa=null,Ht.enabled=!0,n&&n()}},Vi.push(wa)}function Wu(i,e){let t=e||I.placed[I.mode][i.slot];if(i.schwerpunktwahl&&t&&t.sp&&Z.schwerpunkte[t.sp])return new de(Z.schwerpunkte[t.sp].farbe);let n=t&&t.thema?(_s[i.slot]||[]).find(r=>r.id===t.thema):null;return n&&Z.richtungen&&Z.richtungen[n.r]?new de(Z.gruppen[i.gruppe].farbe).lerp(new de(Z.richtungen[n.r].farbe),.72):new de(Z.gruppen[i.gruppe].farbe)}function yu(i,e){let t=i.clone(),n=.85,r=.02;return e==="hell"&&t.lerp(new de(16777215),.45),e==="holz"&&(t.lerp(new de(9070146),.55),n=.95),e==="glas"&&(t.lerp(new de(10336473),.5),n=.28,r=.35),e==="backstein"&&(t.lerp(new de(10242613),.6),n=.92),e==="beton"&&(t.lerp(new de(12172740),.55),n=.6),new ne({color:t,roughness:n,metalness:r})}var ai=[];function Iu(){let i=new ne({color:2766160,roughness:.25,metalness:.4,emissive:16763243,emissiveIntensity:0});return ai.push(i),i}var bm=i=>i.clone().lerp(new de(1318972),.45),ji=new Be;Ye.add(ji);var Nt={},ac=i=>(i===0?0:.55+(i-1))*En+.24,Pu=new Set(["901","902","903","904"]);function Hm(i,e){return Math.abs(i.x-e.x)*2<i.w+e.w-.01&&Math.abs(i.z-e.z)*2<i.d+e.d-.01}function Q0(i,e){if(i.pos.y===0)return!0;for(let t of Z.slots){if(t.haus!==i.haus||t.slot===i.slot||!(t.pos.y===i.pos.y-1||t.form==="wing"&&i.pos.y<=2))continue;if((e?!!e[t.slot]:Qe(t.slot))&&Hm(i.pos,t.pos))return!0}return!1}function e_(i,e,t){let n=e.pos.w*Ke,r=e.pos.d*Ke,s=e.pos.x>=0?-1:1;for(let a of[-.32,.32]){let o=new V(new We(.02,.14,.55,4),t);o.rotation.y=Math.PI/4,o.position.set(s*(n/2-.18),-.27,a*r),i.add(o)}}function t_(i,e,t,n){let r=e.pos,s=r.w*Ke,a=r.d*Ke,o=r.h*En,c=((Z.schwerpunkte||{})[t]||(Z.richtungen||{})[t]||{}).farbe||"#ffffff",l=new ne({color:new de(c),roughness:.55}),h=Math.abs(r.z)<.01||r.z>=0?1:-1,u=new V(new Ge(s+.06,.1,.06),l);u.position.set(0,o-.16,h*(a/2+.02)),h<0&&(u.rotation.y=Math.PI),i.add(u);let d={DeNC:"rund",ekn:"rund",HEA:"gruen",klin:"gruen",SEOP:"glas",swo:"glas"}[t];if(d==="rund"){let p=new V(new ar(.16,.23,20),l);p.position.set(0,o*.84,h*(a/2+.02));let f=new V(new ei(.17,20),Iu());f.position.set(0,o*.84,h*(a/2+.014));for(let _ of[p,f])h<0&&(_.rotation.y=Math.PI),i.add(_)}else if(d==="gruen"){let p=Math.max(1,Math.round(r.w));for(let f=0;f<p;f++){let _=(f-(p-1)/2)*(s/p),m=new V(new It(.66,.14,.16,2,.04),l);m.position.set(_,o*.55-.62,h*(a/2+.1)),i.add(m);for(let g=0;g<3;g++){let v=new V(new Tt(.055,0),new $t({color:[14964526,15979342,16777215][g]}));v.position.set(_+(g-1)*.18,o*.55-.5,h*(a/2+.1)),i.add(v)}}}else if(d==="glas"){let p=new V(new Ze(s*.82,.3),Iu());p.position.set(0,o*.87,h*(a/2+.012));let f=new V(new Ge(s*.85,.05,.05),new ne({color:new de(c),metalness:.55,roughness:.35}));f.position.set(0,o*.72,h*(a/2+.03));for(let _ of[p,f])h<0&&(_.rotation.y=Math.PI),i.add(_)}}function n_(i,e,t){let n=e.pos.w*Ke,r=e.pos.d*Ke,s=ac(e.pos.y)-.24;if(s<.4)return;let a=new Be;a.name="stuetzen";for(let[o,c]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let l=new V(new We(.09,.11,s,8),t);l.position.set(o*(n/2-.18),-s/2,c*(r/2-.18)),a.add(l)}if(s>2.2)for(let o of[-1,1]){let c=new V(new Ge(n-.3,.09,.09),t);c.position.set(0,-s*.55,o*(r/2-.18)),a.add(c)}i.add(a)}function Da(i,e,t){let n=i/2,r=e/2,s=new ot,a=[-n,0,-r,n,0,-r,n,0,r,-n,0,r,-n,t,0,n,t,0],o=[0,1,5,0,5,4,3,4,5,3,5,2,0,4,3,1,2,5,0,3,2,0,2,1];return s.setAttribute("position",new Te(a,3)),s.setIndex(o),s.computeVertexNormals(),s}function $a(i,e={}){let t=e.state||I.placed[I.mode][i.slot]||{},n=t.stil||"klassisch",r=Wu(i,e.state),s=H0(i.haus),a=new Be,o=i.pos,c=o.w*Ke,l=o.d*Ke,h=o.h*En;i.form==="wing"&&(h=1.7*En);let u=yu(r,n),d,p=(g,v,y,x=.09)=>new It(g,v,y,2,x),f=()=>{let g=s.dach?bm(r).lerp(new de(s.dach),.6):bm(r);return new ne({color:g,roughness:.8,flatShading:!0,side:pt})};if(i.form==="slab"||i.form==="step"){d=new V(p(c,h,l,.07),u),d.position.y=h/2,a.add(d);let g=new V(new Ge(c,Pa,l),Zl.clone());g.position.y=-Pa/2+.02,g.userData.noShadow=!0,g.userData.nopick=!0,a.add(g);let v=new V(new Ge(c+.16,.16,l+.16),Zl.clone());if(v.position.y=.08,v.receiveShadow=!0,a.add(v),i.form==="step"){let y=new ne({color:new de(s.holz),roughness:.9}),x=new V(new Ze(.92,1.5),new ne({color:5913894,roughness:.8}));x.position.set(0,h+.75,-l/2+.02),a.add(x);let T=new V(new un(.05,8,6),new ne({color:14266942,metalness:.7,roughness:.35}));T.position.set(.3,h+.68,-l/2+.06),a.add(T);for(let w of[-1,1]){let P=new V(new We(.055,.07,1.9,8),y);P.position.set(w*(c/2-.16),h+.95,l/2-.16),a.add(P)}let R=new V(Da(c*1.14,l*1.25,.42),f());R.position.y=h+1.9,a.add(R);for(let w=0;w<2;w++){let P=new V(new Ge(c*.55,h*(2-w)/3,.34),Zl.clone());P.position.set(0,h*(2-w)/3/2,l/2+.17+w*.34),P.receiveShadow=!0,a.add(P)}}}else if(i.form==="roof"){d=new V(Da(c,l,h*.72),f()),a.add(d);let g=new V(p(.55,1.25,.55,.05),yu(r,n));if(g.position.set(c*.28,h*.62,0),a.add(g),t.artefakt==="agent"){let v=new ne({color:10134197,metalness:.6,roughness:.35}),y=new V(new We(.035,.05,1.35,6),v);y.position.set(-c*.26,h*.72+.62,0),a.add(y);let x=new V(new We(.02,.02,.5,5),v);x.rotation.z=Math.PI/2,x.position.set(-c*.26,h*.72+1.05,0),a.add(x);let T=new V(new un(.2,10,8,0,Math.PI*2,0,Math.PI*.4),new ne({color:15262938,metalness:.3,roughness:.4,side:pt}));T.rotation.x=Math.PI*.62,T.position.set(-c*.26,h*.72+.78,.16),a.add(T)}else if(t.artefakt==="app"){let v=Math.atan2(h*.72,l/2),y=new V(new Ge(1.05,.05,.7),new ne({color:1319498,roughness:.2,metalness:.45,emissive:2780372,emissiveIntensity:.18}));y.rotation.x=-v,y.position.set(-c*.24,h*.4,l*.26),a.add(y);let x=new V(new Ge(1.15,.03,.8),new ne({color:15921385,roughness:.6}));x.rotation.x=-v,x.position.set(-c*.24,h*.38,l*.26),a.add(x),ai.push(y.material)}}else if(i.form==="spire"){let g=new V(new Fn(c*Ke*.42,h,4),f());g.rotation.y=Math.PI/4,g.position.y=h/2,a.add(g),d=g;let v=new V(new We(.045,.045,1.5,6),new ne({color:2184,roughness:.4,metalness:.7}));v.position.y=h+.7,a.add(v);let y=new V(new Ze(1.1,.6),new ne({color:new de(s.akzent),side:pt,roughness:.7}));y.position.set(.58,h+1.15,0),y.name="flag",a.add(y)}else if(i.form==="lantern"){let g=new V(new We(.06,.08,h,6),new ne({color:3752282,roughness:.6,metalness:.4}));g.position.y=h/2,a.add(g),d=g;let v=new V(new Ni(.28,0),new ne({color:16767370,emissive:16757575,emissiveIntensity:.15}));v.position.y=h+.15,v.name="lamp",a.add(v),ai.push(v.material)}else{d=new V(p(c,h,l,.1),u),d.position.y=h/2,a.add(d);let g=o.z>=0?1:-1,v=i.haus&&Math.abs(o.z)<.01?1:g,y=Iu(),x=new ne({color:new de(s.rahmen),roughness:.7}),T=Math.max(1,Math.round(o.w)),R=h*.55;for(let w=0;w<T;w++){let P=(w-(T-1)/2)*(c/T),L=new V(new Ze(.8,1),x);L.position.set(P,R,v*(l/2+.008));let z=new V(new Ze(.64,.84),y);z.position.set(P,R,v*(l/2+.016));let G=new V(new Ze(.64,.035),x);G.position.set(P,R,v*(l/2+.022));let B=new V(new Ze(.035,.84),x);B.position.set(P,R,v*(l/2+.022));let Y=new V(new Ge(.92,.06,.1),x);Y.position.set(P,R-.56,v*(l/2+.04));for(let W of[L,z,G,B,Y])v<0&&(W.rotation.y=Math.PI),a.add(W)}if(i.form==="bay"||i.form==="wing"){let w=new V(Da(c*1.06,l*1.06,.5*En*.5),f());w.position.y=h,a.add(w)}if(i.form==="tower")for(let[w,P]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let L=new V(p(.22,h,.22,.04),yu(r.clone().lerp(new de(16777215),.25),n));L.position.set(w*(c/2-.08),h/2,P*(l/2-.08)),a.add(L)}}let _=i.schwerpunktwahl&&t.sp?t.sp:t.thema?((_s[i.slot]||[]).find(g=>g.id===t.thema)||{}).r:null;if(_&&["box","bay"].includes(i.form)&&t_(a,i,_,s),["box","bay","wing"].includes(i.form)&&(i.kategorie==="Wahl"||i.kategorie==="Wahlpflicht")){let g=i.kategorie==="Wahlpflicht",v=Math.abs(o.z)<.01||o.z>=0?1:-1,y=new V(new Ge(.075,h*.86,.075),new ne({color:g?14263361:16777215,roughness:.45,metalness:g?.5:.05}));y.position.set(-(c/2-.02),h/2,v*(l/2-.02)),a.add(y)}if(["box","bay","tower"].includes(i.form)&&o.y>0){let g=new ne({color:new de(s.holz).lerp(new de(3752282),.35),roughness:.7,metalness:.15}),v=e.placedMap?!!e.placedMap.MA:Qe("MA"),y=Q0(i,e.placedMap||null)||Pu.has(i.slot)&&v;Pu.has(i.slot)&&e_(a,i,g),y||n_(a,i,g)}a.traverse(g=>{g.isMesh&&!g.userData.noShadow&&(g.castShadow=!0,g.receiveShadow=!0)});let m=Z.haeuser[i.haus];return a.position.set(m.origin[0]+o.x*Ke,ac(o.y),m.origin[2]+o.z*Ke),a.userData.slot=i.slot,a}function Gm(i,e){if(i.getObjectByName("sparkle"))return;let t=new V(new Ni(.22,0),new ne({color:16765502,emissive:16757504,emissiveIntensity:.9}));t.name="sparkle";let n=e.pos.h*En;t.position.y=(e.form==="roof"||e.form==="spire",n+.6),i.add(t)}function i_(i){let e=i.getObjectByName("sparkle");e&&i.remove(e)}function r_(i,e){if(i.getObjectByName("pennant"))return;let t=new Be;t.name="pennant";let n=e.pos.h*En,r=new V(new We(.03,.03,.9,6),new ne({color:9070146,roughness:.8}));r.position.y=n+.45;let s=new V(new ot().setFromPoints?(()=>{let a=new ot;return a.setAttribute("position",new Te([0,0,0,.55,-.12,0,0,-.24,0],3)),a.setIndex([0,1,2]),a.computeVertexNormals(),a})():new Ze(.5,.25),new ne({color:14263361,side:pt,roughness:.7}));s.position.set(.03,n+.85,0),s.name="pflag",t.add(r,s),t.position.set(e.pos.w*Ke*.38,0,e.pos.d*Ke*.38),i.add(t)}function s_(i,e){if(i.getObjectByName("flowerbox")||!["box","bay","wing","tower"].includes(e.form))return;let t=new Be;t.name="flowerbox";let n=e.pos.d*Ke,r=e.pos.h*En,s=e.pos.z>=0?1:-1,a=new V(new It(.7,.16,.18,2,.04),new ne({color:9070146,roughness:.9}));a.position.set(0,r*.55-.45,s*(n/2+.1)),t.add(a),[14964526,15979342,13213951].forEach((o,c)=>{let l=new V(new Tt(.07,0),new $t({color:o}));l.position.set((c-1)*.2,r*.55-.33,s*(n/2+.1)),t.add(l)}),i.add(t)}function a_(i,e){if(i.getObjectByName("upgrade"))return;let t=new Be;t.name="upgrade";let n=e.pos.w*Ke,r=e.pos.d*Ke,s=e.pos.h*En,a=new ne({color:4020797,roughness:.85}),o=new ne({color:14263361,metalness:.75,roughness:.3}),c=new ne({color:5149760,roughness:1,flatShading:!0});if(["box","tower"].includes(e.form)){let l=e.pos.z>=0?1:-1,h=e.haus&&Math.abs(e.pos.z)<.01?1:l,u=Math.max(1,Math.round(e.pos.w));for(let d=0;d<u;d++){let p=(d-(u-1)/2)*(n/u);for(let f of[-1,1]){let _=new V(new Ge(.16,.98,.03),a);_.position.set(p+f*.52,s*.55,h*(r/2+.02)),h<0&&(_.rotation.y=Math.PI),t.add(_)}}}else if(e.form==="bay"||e.form==="wing")for(let l=0;l<5;l++){let h=new V(new Tt(.16+l%3*.05,0),c);h.position.set(n*.42,s*(.15+l*.18),r/2+.06),t.add(h)}else if(e.form==="slab"||e.form==="step")for(let l of[-1,1]){let h=new V(new Tt(.3,0),c);h.position.set(l*(n/2-.4),.3,r/2+.34),t.add(h)}else if(e.form==="roof"){let l=new V(new We(.025,.025,.7,6),o);l.position.set(-n*.3,s*.72+.35,0);let h=new V(new Fn(.14,.34,4),o);h.rotation.z=-Math.PI/2,h.position.set(-n*.3+.16,s*.72+.62,0),h.name="flag",t.add(l,h)}else{let l=new V(new un(.14,10,8),o);l.position.y=e.pos.h*En+(e.form==="spire"?1.55:.5),t.add(l)}t.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),i.add(t)}function ju(i,e){let t=e.optionen&&(I.placed[I.mode][e.slot]||{}).opt||e.code,n=I.quests[e.slot]&&I.quests[e.slot].done;I.quiz[t]&&r_(i,e),n&&(Gm(i,e),s_(i,e)),I.quiz[t]&&n&&a_(i,e)}var vi=new Be;Ye.add(vi);function Vm(){vi.clear();let i=Object.values(I.quiz).filter(Boolean).length+Object.values(I.quests).filter(t=>t.done).length,e=new ne({color:9070146,roughness:.9});if(i>=5){let t=new Be,n=new V(new It(1.5,.1,.45,2,.03),e);n.position.y=.45;let r=new V(new It(1.5,.5,.08,2,.03),e);r.position.set(0,.72,-.2);let s=new V(new Ge(.08,.45,.4),e);s.position.set(-.6,.22,0);let a=s.clone();a.position.x=.6,t.add(n,r,s,a),t.position.set(0,.24,4.2),t.rotation.y=Math.PI,t.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),vi.add(t)}if(i>=10){let t=new Be,n=new V(new Ge(1.6,.06,1.1),new ne({color:1780816,roughness:.25,metalness:.5}));n.rotation.x=-.5,n.position.y=.7;let r=new V(new We(.06,.08,.7,6),new ne({color:10134197}));r.position.y=.35,t.add(n,r),t.position.set(-4,.24,6),t.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),vi.add(t)}if(i>=15){let t=new Be,n=new V(new We(.05,.07,5,8),new ne({color:14212326,roughness:.4,metalness:.6}));n.position.y=2.5;let r=new V(new Ze(1.4,.8),new ne({color:10405,side:pt}));r.position.set(.72,4.4,0),r.name="flag",t.add(n,r),t.position.set(4.5,.24,6),t.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),vi.add(t)}if(i>=20){let t=new Be,n=new V(new We(.9,1,.4,14),new ne({color:12173519,roughness:.8,flatShading:!0}));n.position.y=.2;let r=new V(new We(.78,.78,.06,14),new ne({color:7189465,roughness:.15,metalness:.2}));r.position.y=.4;let s=new V(new We(.1,.14,.8,8),n.material);s.position.y=.7,t.add(n,r,s),t.position.set(0,.24,-5.2),t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),vi.add(t)}if(i>=28){let t=new Be,n=new ne({color:12442088,roughness:.15,metalness:.25,transparent:!0,opacity:.55}),r=new V(new Ge(2.2,1.2,1.5),n);r.position.y=.6;let s=new V(Da(2.3,1.6,.55),n);s.position.y=1.2;let a=new V(new Ge(1.7,.2,1),new ne({color:7033144,roughness:1}));a.position.y=.12,t.add(r,s,a),t.position.set(1.2,.24,8.4),vi.add(t)}if(i>=40){let t=new Be,n=new ne({color:9070146,roughness:.9});for(let[s,a]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let o=new V(new Ge(.12,1.8,.12),n);o.position.set(s*1.1,.9,a*.8),t.add(o)}for(let s=0;s<5;s++){let a=new V(new Ge(2.6,.06,.12),n);a.position.set(0,1.85,-.8+s*.4),t.add(a)}let r=new ne({color:5149760,roughness:1,flatShading:!0});[[-1.1,1.2,.8],[1.1,1.5,-.8],[0,1.9,0]].forEach(([s,a,o])=>{let c=new V(new Tt(.28,0),r);c.position.set(s,a,o),t.add(c)}),t.position.set(6.5,.24,5.6),t.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),vi.add(t)}}var Lu=new Be;Ye.add(Lu);function Mm(i,e){let t=e?1:.72,n=new Be,r=new ne({color:15262938,roughness:.9}),s=new ne({color:new de(i).lerp(new de(3752282),.35),roughness:.5,metalness:.3,flatShading:!0}),a=new V(new We(1.15*t,1.25*t,1.5*t,14),r);a.position.y=.75*t,n.add(a);let o=new V(new un(1.18*t,16,10,0,Math.PI*2,0,Math.PI*.52),s);o.position.y=1.5*t,n.add(o);let c=new V(new Ge(.28*t,1.05*t,.1),new ne({color:1317944,roughness:.4}));c.position.set(0,1.95*t,.82*t),c.rotation.x=-.62,n.add(c);let l=new V(new We(.1*t,.14*t,1.15*t,10),new ne({color:10134197,metalness:.6,roughness:.3}));l.position.set(0,2.2*t,.55*t),l.rotation.x=-.7,n.add(l);let h=new V(new Ze(.5*t,.9*t),new ne({color:5913894,roughness:.85}));return h.position.set(0,.45*t,1.21*t),n.add(h),n}function Em(i,e){let t=e?1:.72,n=new Be,r=new ne({color:9070146,roughness:.9}),s=new ne({color:5149760,roughness:1,flatShading:!0});for(let[l,h]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let u=new V(new Ge(.12,2*t,.12),r);u.position.set(l*1.05*t,t,h*1.05*t),n.add(u)}let a=new V(new Fn(1.8*t,.7*t,4),new ne({color:new de(i).lerp(new de(3752282),.25),roughness:.8,flatShading:!0}));a.rotation.y=Math.PI/4,a.position.y=2.3*t,n.add(a);let o=new V(new It(1.15*t,.09,.4*t,2,.03),r);o.position.y=.42*t,n.add(o);for(let l of[-1,1]){let h=new V(new Ge(.08,.4*t,.34*t),r);h.position.set(l*.45*t,.2*t,0),n.add(h)}for(let l of[-1,1]){let h=new V(new It(1.5*t,.2,.6*t,2,.05),new ne({color:7033144,roughness:1}));h.position.set(l*1.9*t,.1,.4*t),n.add(h);for(let u=0;u<4;u++){let d=new V(new Tt(.09*t,0),new $t({color:u%2?new de(i):new de(16777215)}));d.position.set(l*1.9*t-.5*t+u*.34*t,.3,.4*t),n.add(d);let p=new V(new We(.018,.02,.2,5),s);p.position.set(l*1.9*t-.5*t+u*.34*t,.2,.4*t),n.add(p)}}let c=new V(new Ni(.16*t,0),new ne({color:16767370,emissive:16757575,emissiveIntensity:.25}));return c.position.set(0,1.75*t,1.05*t),n.add(c),ai.push(c.material),n}function Sm(i,e){let t=e?1:.72,n=new Be,r=new ne({color:12442088,roughness:.12,metalness:.3,transparent:!0,opacity:.5}),s=new ne({color:new de(i),metalness:.6,roughness:.3}),a=new V(new Ge(2.4*t,1.9*t,2.4*t),r);a.position.y=.95*t,n.add(a);for(let[h,u]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let d=new V(new Ge(.09,1.9*t,.09),s);d.position.set(h*1.2*t,.95*t,u*1.2*t),n.add(d)}let o=new V(new Ge(2.6*t,.12,2.6*t),s);o.position.y=1.95*t,n.add(o);let c=new V(new We(.5*t,.5*t,.06,12),new ne({color:15921385,roughness:.6}));c.position.y=.5*t,n.add(c);let l=new V(new We(.06,.1,.5*t,8),s);l.position.y=.25*t,n.add(l);for(let h=0;h<3;h++){let u=h/3*Math.PI*2+.5,d=new V(new It(.3*t,.34*t,.3*t,2,.05),new ne({color:14263361,roughness:.8}));d.position.set(Math.cos(u)*.85*t,.17*t,Math.sin(u)*.85*t),n.add(d)}return n}function oc(){Lu.clear(),I.wzSeen||(I.wzSeen={frei:[],serious:[]});let i=[],e=ic();if(e.r&&Z.richtungen[e.r]){let n={klin:Em,ekn:Mm,swo:Sm}[e.r];i.push({key:"bsc:"+e.r,x:-17.5,z:-8.5,rot:.5,mesh:n(Z.richtungen[e.r].farbe,!1),name:k("wz_"+e.r)})}let t=rc();if(t.dom&&Z.schwerpunkte[t.dom]){let n={DeNC:Mm,HEA:Em,SEOP:Sm}[t.dom];i.push({key:"msc:"+t.dom,x:20.5,z:-9,rot:-.5,mesh:n(Z.schwerpunkte[t.dom].farbe,!0),name:k("wz_"+t.dom)})}for(let n of i)n.mesh.position.set(n.x,.24,n.z),n.mesh.rotation.y=n.rot,n.mesh.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),Lu.add(n.mesh),!Kt.active&&!I.wzSeen[I.mode].includes(n.key)&&(I.wzSeen[I.mode].push(n.key),rt(),Ba(n.x,4,n.z,70,3),wt("\u{1F3DB} "+k("wz_neu")+" "+n.name),SND.fanfare())}var Bn=null,pn=null,o_=!1;function Fa(i){Xi(),pn=i;let e=Wi(i);o_=e.ok,Bn=$a(i,{state:{stil:"klassisch"}}),Bn.traverse(t=>{t.isMesh&&(t.castShadow=!1,t.receiveShadow=!1,t.material=new ne({color:e.ok?3066993:14241615,transparent:!0,opacity:.45,depthWrite:!1}))}),Ye.add(Bn)}function Xi(){Bn&&(Ye.remove(Bn),Bn=null,pn=null)}function l_(i,e,t){let r=new un(.09,5,4),s=new $t({color:14208436,transparent:!0,opacity:.85}),a=new Li(r,s,14),o=[],c=new Ie;for(let h=0;h<14;h++){let u=h/14*Math.PI*2;o.push(new M(Math.cos(u)*(1.2+Math.random()),.6+Math.random()*.8,Math.sin(u)*(1.2+Math.random()))),c.setPosition(i,e,t),a.setMatrixAt(h,c)}Ye.add(a);let l=Array.from({length:14},()=>new M(i,e,t));kn(.7,h=>{for(let u=0;u<14;u++){l[u].addScaledVector(o[u],.016),o[u].y-=.05;let d=1-h;c.makeScale(d,d,d),c.setPosition(l[u]),a.setMatrixAt(u,c)}a.instanceMatrix.needsUpdate=!0,s.opacity=.85*(1-h)},ja,()=>{Ye.remove(a),r.dispose(),s.dispose()})}function Ba(i,e,t,n=140,r=6){let s=new Ze(.16,.26),a=new $t({side:pt,vertexColors:!1,transparent:!0}),o=new Li(s,a,n),c=[10405,4156616,954238,14263361,14248523,6185166,16777215],l=[];for(let d=0;d<n;d++)o.setColorAt(d,new de(c[d%c.length])),l.push({p:new M(i,e,t),v:new M((Math.random()-.5)*r,4+Math.random()*5,(Math.random()-.5)*r),r:Math.random()*Math.PI,rs:(Math.random()-.5)*8});o.instanceColor&&(o.instanceColor.needsUpdate=!0),Ye.add(o);let h=new Ie,u=new nn;kn(2.6,d=>{for(let p=0;p<n;p++){let f=l[p];f.v.y-=.09,f.p.addScaledVector(f.v,.016),f.r+=f.rs*.016,u.set(f.r,f.r*.7,f.r*.3),h.makeRotationFromEuler(u),h.setPosition(f.p),o.setMatrixAt(p,h)}o.instanceMatrix.needsUpdate=!0,a.opacity=d>.75?1-(d-.75)/.25:1},d=>d,()=>{Ye.remove(o),s.dispose(),a.dispose()})}function c_(i,e,t,n){let r=new ar(.42,.55,40),s=new $t({color:16777215,transparent:!0,opacity:.75,side:pt,depthWrite:!1}),a=new V(r,s);a.rotation.x=-Math.PI/2,a.position.set(i,e+.04,t),Ye.add(a),kn(.55,o=>{let c=1+o*n;a.scale.set(c,c,1),s.opacity=.75*(1-o)},ja,()=>{Ye.remove(a),r.dispose(),s.dispose()})}function Oa(i,e,t="#ffffff"){let n=document.createElement("canvas");n.width=256,n.height=96;let r=n.getContext("2d");r.font="800 44px Helvetica, Arial";let s=r.measureText(i).width+52;r.fillStyle=e,r.beginPath(),r.roundRect((256-s)/2,14,s,68,34),r.fill(),r.fillStyle=t,r.textAlign="center",r.textBaseline="middle",r.fillText(i,128,50);let a=new Kr(n),o=new Xr(new rr({map:a,transparent:!0,depthWrite:!1}));return o.scale.set(2.4,.9,1),o}function h_(i,e){let{haupt:t}=Yt(e),n=(e.pos.h||1)*En+.4;(t||[]).slice(0,3).forEach((r,s)=>{let a=gn[r];a&&setTimeout(()=>{let o=Oa("+"+r,Z.felder[a.feld].farbe);o.position.set(i.position.x+(s-1)*.7,i.position.y+n,i.position.z),Ye.add(o);let c=o.position.y;kn(1.5,l=>{o.position.y=c+l*2.1,o.material.opacity=l<.65?1:1-(l-.65)/.35},ja,()=>{Ye.remove(o),o.material.map.dispose(),o.material.dispose()})},240+s*200)})}var $u=70,u_=new Ze(.22,.22),Wm=new $t({color:13204285,side:pt,transparent:!0,opacity:.9}),ms=new Li(u_,Wm,$u),d_=Array.from({length:$u},()=>({p:new M((Math.random()-.5)*70,Math.random()*18+2,(Math.random()-.5)*50),s:.4+Math.random()*.9,ph:Math.random()*6.28}));Ye.add(ms);ms.visible=!1;var Du={fruehling:{bg:13625079,grass:7976035,foliage:9424506,amb:16234452,ambFall:.35,sun:16773848,hemi:.8},sommer:{bg:12574965,grass:7319378,foliage:5149760,amb:null,ambFall:0,sun:16771524,hemi:.85},herbst:{bg:15260099,grass:10132052,foliage:13204285,amb:13204285,ambFall:.9,sun:16767392,hemi:.7},winter:{bg:14673646,grass:15330804,foliage:6191720,amb:16777215,ambFall:.5,sun:15659775,hemi:.65}},Kl=new de(1317944);function vr(){let i=Du[I.season]||Du.sommer,e=I.tod/100,t=Math.max(0,(e-.68)/.32),n=Math.PI*(.12+e*.82);Qt.position.set(Math.cos(n)*40,Math.sin(n)*34+6,18),Qt.intensity=Math.max(.05,Math.sin(Math.min(Math.PI,n))*2.2)*(1-t*.95),Qt.color.set(i.sun).lerp(new de(16751198),Math.pow(Math.abs(e-.5)*2,2)*.6),Nm.intensity=i.hemi*(1-t*.75)+.12;let r=new de(i.bg).lerp(Kl,t);Ye.background=r,Ye.fog.color.copy(r),sc.color.set(i.grass).lerp(Kl,t*.55),Jl.color.set(i.foliage).lerp(Kl,t*.5),km.color.set(i.grass).multiplyScalar(.82).lerp(Kl,t*.6),wu.color.set(16777215).lerp(new de(3752282),t*.8),wu.opacity=I.season==="winter"?.98:.9,K0.material.opacity=Math.max(0,t-.15)*.95,ec.material.opacity=t>.4&&(I.season==="sommer"||I.season==="fruehling")?.9:0,Ql.visible=I.season==="sommer"||I.season==="fruehling",ai.forEach(a=>a.emissiveIntensity=t>.25?.9:0),ms.visible=!!i.amb,i.amb&&Wm.color.set(i.amb),document.getElementById("todIcon").textContent=t>.3?"\u{1F319}":e>.45?"\u{1F324}\uFE0F":"\u{1F305}",document.querySelectorAll("#envRow .envbtn[data-season]").forEach(a=>a.classList.toggle("on",a.dataset.season===I.season));let s=document.getElementById("btnEnvAuto");s&&s.classList.toggle("on",!!I.envAuto),SND.ambientMode(I.sound?t>.45?"night":Qt.intensity>.4?"day":"off":"off")}var xt=new Be;{let i=new ne({color:15251850,roughness:.9}),e=new ne({color:10405,roughness:.9}),t=new ne({color:3752282,roughness:.95}),n=new V(new It(.16,.42,.16,2,.05),t);n.position.set(-.11,.21,0);let r=n.clone();r.position.x=.11;let s=new V(new It(.46,.55,.3,2,.1),e);s.position.y=.68;let a=new V(new It(.11,.4,.11,2,.04),e);a.position.set(-.3,.72,0);let o=a.clone();o.position.x=.3;let c=new V(new un(.2,12,10),i);c.position.y=1.12;let l=new ne({color:15975971,roughness:.5}),h=new V(new un(.21,12,8,0,Math.PI*2,0,Math.PI*.55),l);h.position.y=1.17;let u=new V(new We(.27,.27,.035,14),l);u.position.y=1.16,xt.add(n,r,s,a,o,c,h,u),xt.userData.legs=[n,r],xt.userData.arms=[a,o],xt.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),xt.position.set(-5,.24,6),Ye.add(xt)}var Fu=null;function jm(i,e){let t=[];for(let n of["bsc","msc"]){let r=Z.haeuser[n];t.push({cx:r.origin[0],cz:r.origin[2],hw:r.breite*Ke/2+1,hd:r.tiefe*Ke/2+1})}if(Qe("600")){let n=Z.haeuser.msc,r=_t[600].pos;t.push({cx:n.origin[0]+r.x*Ke,cz:n.origin[2]+r.z*Ke,hw:r.w*Ke/2+.9,hd:r.d*Ke/2+.9})}for(let n=0;n<2;n++)for(let r of t){let s=i-r.cx,a=e-r.cz;Math.abs(s)<r.hw&&Math.abs(a)<r.hd&&(r.hd-Math.abs(a)<=r.hw-Math.abs(s)?e=r.cz+(a>=0?r.hd:-r.hd):i=r.cx+(s>=0?r.hw:-r.hw))}return[i,e]}var mn=i=>String(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function $m(i,e,t=!1){[i,e]=jm(i,e);let n=xt.position.clone(),r=new M(i,.24,e),s=n.distanceTo(r);xt.lookAt(r.x,.24,r.z),Fu={k:0},kn(Math.min(2.2,.3+s*.09),a=>{xt.position.lerpVectors(n,r,a),xt.position.y=.24+Math.abs(Math.sin(a*s*2.2))*.09},a=>a,()=>{Fu=null,xt.position.y=.24,xt.userData.legs.forEach(a=>a.rotation.x=0),xt.userData.arms.forEach(a=>a.rotation.x=0),t&&kn(.9,a=>{xt.position.y=.24+Math.abs(Math.sin(a*Math.PI*2))*.5,xt.userData.arms.forEach((o,c)=>o.rotation.z=(c?1:-1)*Math.sin(a*Math.PI*4)*1.9)},a=>a,()=>xt.userData.arms.forEach(a=>a.rotation.z=0))})}function Xa(){ai.length=0,Object.keys(Nt).forEach(i=>{ji.remove(Nt[i]),delete Nt[i]}),Object.keys(I.placed[I.mode]).forEach(i=>{let e=_t[i];if(!e)return;let t=$a(e);ju(t,e),ji.add(t),Nt[i]=t}),Vm(),oc(),V0.visible=!0}function Xm(i){for(let e of Z.slots){if(e.haus!==i.haus||e.slot===i.slot||!Qe(e.slot))continue;(e.pos.y===i.pos.y+1||i.form==="wing"&&e.pos.y<=2)&&Hm(e.pos,i.pos)&&xi(e.slot),Pu.has(e.slot)&&i.slot==="MA"&&xi(e.slot)}}function qa(i){let e=Wi(i);if(!e.ok)return SND.err(),wt(e.reason||k("gesperrt")),!1;let t={stil:Ha,sp:i.schwerpunktwahl?Ga:null,opt:i.optionen?bi:null,thema:_s[i.slot]?us:null,frage:i.slot==="BA"?ds:null,artefakt:i.slot==="BA"?Ua:null};I.placed[I.mode][i.slot]=t,rt();let n=$a(i);ju(n,i),ji.add(n),Nt[i.slot]=n,Xm(i),oc();let r=n.position.y;n.position.y=r+9;let s=n,a=Math.max(i.pos.w,i.pos.d)*Ke*.42,o=new $t({color:660016,transparent:!0,opacity:.22,depthWrite:!1}),c=new V(new ei(a,22),o);c.rotation.x=-Math.PI/2,c.position.set(n.position.x,r+.03,n.position.z),Ye.add(c),kn(.14,u=>c.scale.setScalar(.15+.85*u),ja),kn(.5+.15,()=>{},u=>u,()=>{Ye.remove(c),c.geometry.dispose(),o.dispose()}),kn(.5,u=>{s.position.y=r+10*(1-u)},Y0,()=>{s.position.y=r;try{if(kn(.22,u=>{let d=Math.sin(u*Math.PI);s.scale.set(1+d*.09,1-d*.14,1+d*.09)},u=>u,()=>s.scale.set(1,1,1)),kn(.18,u=>{s.position.y=r+Math.sin(u*Math.PI)*.07},u=>u,()=>{s.position.y=r}),l_(n.position.x,r+.1,n.position.z),i.ects>=8&&c_(n.position.x,r,n.position.z,Math.max(i.pos.w,i.pos.d)*Ke*.9),h_(n,i),SND.thock(),J0||(tc=.22,Au=.07),navigator.vibrate)try{navigator.vibrate(12)}catch{}}catch(u){console.error("juice",u)}qm()});let l=Z.haeuser[i.haus];$m(l.origin[0]+i.pos.x*Ke+2.6,l.origin[2]+i.pos.z*Ke+4),Xi();let{komp:h}=Yt(i);return qt(),en([...h.fa||[],...h.ki||[],...h.fu||[]]),I.onboarded?cc(i.slot):(document.getElementById("coach").classList.remove("open"),i.slot!=="003"&&setTimeout(()=>{!I.onboarded&&!Kt.active&&(document.getElementById("obStart").textContent=k("tour_fertig"),sn("onboard"))},1400)),!0}function p_(i){if(I.mode==="serious"&&!confirm(k("entfernen_confirm")))return;let e=Z.slots.filter(n=>Qe(n.slot)&&(n.voraus||[]).includes(i));if(e.length){wt(k("grund_voraus")+e.map(n=>re(n.titel).split(",")[0]).slice(0,2).join(" \xB7 ")),SND.err();return}delete I.placed[I.mode][i],rt();let t=Nt[i];t&&(ji.remove(t),delete Nt[i]),Xm(_t[i]),oc(),qt(),en(),yr()}function qm(){I.msSeen||(I.msSeen={frei:[],serious:[]});let i=I.msSeen[I.mode];for(let e of Z.meilensteine)if(!i.includes(e.id)&&e.slots.every(t=>Qe(t))){i.push(e.id),rt(),m_(e);break}}function m_(i){let e=Z.haeuser[i.haus],t=e.origin[0],n=e.origin[2],r=i.id==="bsc_fertig"||i.id==="msc_fertig";On(new M(t+(i.haus==="bsc"?-17:17),12,26),new M(t,3.5,n),1.4,()=>{if(Ba(t,8,n,r?220:120,r?10:6),SND.fanfare(),r){let s=0,a=setInterval(()=>{Ba(t+(Math.random()-.5)*10,9+Math.random()*4,n+(Math.random()-.5)*6,80,4),SND.firework(),++s>=3&&clearInterval(a)},450)}$m(t,n+6.5,!0),setTimeout(()=>{document.getElementById("msEmoji").textContent=r?"\u{1F386}":"\u{1F389}",document.getElementById("msTitle").textContent=re(i.name),document.getElementById("msText").textContent=re(i.text),document.getElementById("milestone").classList.add("open")},r?1400:700)})}document.getElementById("msClose").onclick=()=>{document.getElementById("milestone").classList.remove("open"),!I.onboarded&&!Kt.active&&(document.getElementById("obStart").textContent=k("tour_fertig"),sn("onboard"))};var hs=new ma,yi=new ee,Ta=document.getElementById("tip"),xu=null;function Nu(i){let e=si.getBoundingClientRect();yi.x=(i.clientX-e.left)/e.width*2-1,yi.y=-((i.clientY-e.top)/e.height)*2+1,hs.setFromCamera(yi,Pt);let t=[...Object.values(Nt)];Bn&&t.push(Bn);let n=hs.intersectObjects(t,!0).filter(s=>!s.object.userData.nopick);if(!n.length)return null;let r=n[0].object;for(;r&&!r.userData.slot;)r=r.parent;return r?r.userData.slot:null}function wm(i,e){let t=Nt[i];t&&t.traverse(n=>{n.isMesh&&n.material&&n.material.emissive&&!ai.includes(n.material)&&(n.material.emissive.setHex(e?1585262:0),n.material.emissiveIntensity=e?.35:0)})}si.addEventListener("pointermove",i=>{let e=Nu(i);if(e!==xu&&(wm(xu,!1),wm(e,!0)),xu=e,e&&!Kt.active){let t=_t[e];Ta.style.display="block",Ta.style.left=i.clientX+14+"px",Ta.style.top=i.clientY+14+"px";let n=I.quests[e];Ta.innerHTML=`<b>${Ut(t)}</b><br>${t.ects} ${k("ects")} \xB7 ${k("stufe")} ${t.stufe}${n&&n.done?" \xB7 \u2726":""}<br><span style="opacity:.72">${re(Z.gruppen[t.gruppe].name)}</span>`,si.style.cursor="pointer"}else Ta.style.display="none",si.style.cursor="default"});var Ra=null;si.addEventListener("pointerdown",i=>{Ra=[i.clientX,i.clientY],SND.unlock()});si.addEventListener("pointerup",i=>{if(!Ra)return;let e=Math.hypot(i.clientX-Ra[0],i.clientY-Ra[1]);if(Ra=null,e>6)return;if(bt){let n=si.getBoundingClientRect();yi.x=(i.clientX-n.left)/n.width*2-1,yi.y=-((i.clientY-n.top)/n.height)*2+1,hs.setFromCamera(yi,Pt);let r=hs.intersectObjects(bt.group.children,!0);for(let s of r){let a=s.object;for(;a&&!a.userData.kompId&&!a.userData.info;)a=a.parent;if(a&&a.userData.info){wt(re(a.userData.info)),SND.pick();return}if(a&&a.userData.kompId){let o=gn[a.userData.kompId];o&&(wt(`${o.id} \xB7 ${re(o.name)} \u2014 \xAB${re(o.ich)}\xBB`),SND.pick());return}}return}{let n=si.getBoundingClientRect();yi.x=(i.clientX-n.left)/n.width*2-1,yi.y=-((i.clientY-n.top)/n.height)*2+1,hs.setFromCamera(yi,Pt);let r=hs.intersectObjects([Oi,Hi,zi,cs,ji],!0).filter(s=>!s.object.userData.nopick);if(r.length){let s=r[0].object,a=null;for(;s&&!a;)a=s.userData.action||null,s=s.parent;if(a==="p0"){f_(),SND.pick();return}if(a==="minor"){g_(),SND.pick();return}if(a==="bauhuette"){Km(),SND.pick();return}if(a==="geraete"){v_(),SND.pick();return}}}if(Bn&&pn){let n=Nu(i);if(n===pn.slot||n===null){qa(pn);return}}let t=Nu(i);t&&(cc(t),SND.pick())});function f_(){let i=document.getElementById("p0List");i.innerHTML="",(Z.vorstufe||[]).forEach((e,t)=>{let n=document.createElement("label");n.className="sw",n.style.alignItems="flex-start",n.innerHTML=`<input type="checkbox" ${I.p0[t]?"checked":""} style="margin-top:2px"> <span style="font-size:12.5px;line-height:1.45">${re(e.text)} <span style="color:#8b94ab">(${e.ids.join(", ")})</span></span>`,n.querySelector("input").onchange=r=>{I.p0[t]=r.target.checked,rt(),en()},i.appendChild(n)}),sn("p0")}function g_(){let i=document.getElementById("minorList");i.innerHTML="";for(let e=0;e<6;e++){let t=document.createElement("label");t.className="sw",t.innerHTML=`<input type="checkbox" ${I.minor[e]?"checked":""}> <span>${k("minor_sem").replace("{n}",e+1)}</span>`,t.querySelector("input").onchange=n=>{I.minor[e]=n.target.checked,rt(),Om(),n.target.checked&&SND.quest()},i.appendChild(t)}sn("minor")}var bu={de:{ev:{PI:"Hake (1998, N\u22486500): Lernzuwachs ~verdoppelt (\u27E8g\u27E9 .23 \u2192 .48) \u2014 skaliert exzellent auf Grossveranstaltungen.",LC:"KI-Antworten live pr\xFCfen verbindet kritisches Denken mit AI Literacy \u2014 der KI-Output ist das \xDCbungsobjekt.",JT:"Kurzer Feedback-Loop vor der Sitzung: Die Lehre startet bei den h\xE4ufigsten Fehlkonzepten statt bei Folie 1.",AC:"Richmond & Nicholls (2025, UNSW, N=363): rubrikbasierte KI-Kritik f\xF6rdert Fach-, KI- und Informationskompetenz zugleich.",TB:"Kestin et al. (2025, Harvard-RCT): ~0.73 SD \xFCber aktivem Lernen \u2014 aber nur mit Hint-only-Design (nie die L\xF6sung verraten).",RS:"Simulierte Klient:innen erlauben risikofreies \xDCben (deliberate practice) mit weniger Performanzangst.",TSQ:"Erst einzeln, dann im Team: h\xF6here Leistung und weniger Pr\xFCfungsangst \u2014 in 200\u2013300er-Klassen erprobt.",PD:"Verankert die KI-Spielregeln (deklarieren, dokumentieren, verifizieren) als w\xF6chentliche Praxis statt Papier."},effort:"<b>Warum sich das anstrengender anf\xFChlt \u2014 und trotzdem mehr bringt:</b> Aktives Lernen f\xFChlt sich subjektiv m\xFChsamer an als eine brillante Vorlesung, f\xFChrt aber messbar zu mehr Lernen (Deslauriers et al., 2019). Und der Klassiker: Aktivierende Formate senken die Durchfallquoten deutlich (Freeman et al., 2014, Metaanalyse \xFCber 225 Studien).",lit_titel:"Literatur"},en:{ev:{PI:"Hake (1998, N\u22486,500): learning gains roughly doubled (\u27E8g\u27E9 .23 \u2192 .48) \u2014 scales excellently to large classes.",LC:"Checking AI answers live combines critical thinking with AI literacy \u2014 the AI output is the practice object.",JT:"A short pre-session feedback loop: teaching starts from the most common misconceptions, not from slide 1.",AC:"Richmond & Nicholls (2025, UNSW, N=363): rubric-based AI critique builds domain, AI and information literacy at once.",TB:"Kestin et al. (2025, Harvard RCT): ~0.73 SD above active learning \u2014 but only with a hint-only design (never reveal the solution).",RS:"Simulated clients enable risk-free deliberate practice with less performance anxiety.",TSQ:"Solo first, then as a team: higher performance and less test anxiety \u2014 proven in classes of 200\u2013300.",PD:"Anchors the AI ground rules (declare, document, verify) as weekly practice instead of paper."},effort:"<b>Why this feels harder \u2014 and still teaches more:</b> active learning subjectively feels more effortful than a brilliant lecture, yet measurably produces more learning (Deslauriers et al., 2019). And the classic: active formats substantially cut failure rates (Freeman et al., 2014, meta-analysis of 225 studies).",lit_titel:"References"},lit:`<ul style="font-size:11px;line-height:1.5">
    <li>Deslauriers, L., McCarty, L. S., Miller, K., Callaghan, K., & Kestin, G. (2019). Measuring actual learning versus feeling of learning in response to being actively engaged in the classroom. <i>PNAS, 116</i>(39), 19251\u201319257. <a href="https://doi.org/10.1073/pnas.1821936116" target="_blank" rel="noopener">doi.org/10.1073/pnas.1821936116</a></li>
    <li>Freeman, S., Eddy, S. L., McDonough, M., Smith, M. K., Okoroafor, N., Jordt, H., & Wenderoth, M. P. (2014). Active learning increases student performance in science, engineering, and mathematics. <i>PNAS, 111</i>(23), 8410\u20138415. <a href="https://doi.org/10.1073/pnas.1319030111" target="_blank" rel="noopener">doi.org/10.1073/pnas.1319030111</a></li>
    <li>Hake, R. R. (1998). Interactive-engagement versus traditional methods: A six-thousand-student survey of mechanics test data for introductory physics courses. <i>American Journal of Physics, 66</i>(1), 64\u201374. <a href="https://doi.org/10.1119/1.18809" target="_blank" rel="noopener">doi.org/10.1119/1.18809</a></li>
    <li>Kestin, G., Miller, K., Klales, A., Milbourne, T., & Ponti, G. (2025). AI tutoring outperforms in-class active learning: An RCT introducing a novel research-based design in an authentic educational setting. <i>Scientific Reports, 15</i>, 17458. <a href="https://doi.org/10.1038/s41598-025-97652-6" target="_blank" rel="noopener">doi.org/10.1038/s41598-025-97652-6</a></li>
    <li>Richmond, J. L., & Nicholls, K. (2025). Using generative AI to promote psychological, feedback, and artificial intelligence literacies in undergraduate psychology. <i>Teaching of Psychology</i>. <a href="https://doi.org/10.1177/00986283241287203" target="_blank" rel="noopener">doi.org/10.1177/00986283241287203</a></li>
    <li>Crouch, C. H., & Mazur, E. (2001). Peer Instruction: Ten years of experience and results. <i>American Journal of Physics, 69</i>(9), 970\u2013977. <a href="https://doi.org/10.1119/1.1374249" target="_blank" rel="noopener">doi.org/10.1119/1.1374249</a></li>
  </ul>`};function Km(){let i=bu[I.lang]||bu.de,e=["PI","LC","JT","AC","TB","RS","TSQ","PD"];document.getElementById("bhList").innerHTML=e.map(t=>{let n=Z.baukasten.defs[t];return n?`<div class="bhrow"><b>${re(n.name)}</b><p>${re(n.kurz)}</p>${i.ev[t]?`<p class="bhev">\u{1F4CA} ${i.ev[t]}</p>`:""}</div>`:""}).join(""),document.getElementById("bhEffort").innerHTML=i.effort,document.getElementById("bhLit").innerHTML=`<div class="subhead" style="margin:10px 0 4px;font:700 10.5px var(--font);text-transform:uppercase;letter-spacing:.5px;color:#5b6478">${i.lit_titel}</div>`+bu.lit,sn("bauhuette")}var __=[{amp:"g",name:"Microsoft 365 Copilot Chat (Basic)",de:"Allgemeiner KI-Zugang f\xFCr alle UZH-Angeh\xF6rigen, in der M365-Lizenz enthalten. Freigegeben f\xFCr \xF6ffentliche und interne Informationen; Verarbeitung in der Microsoft-Cloud (EU), Inhalte werden nicht f\xFCrs Modelltraining verwendet. Eigene Agents: derzeit nur eingeschr\xE4nkt verl\xE4sslich.",en:"General AI access for all UZH members, included in the M365 licence. Approved for public and internal information; processed in the Microsoft cloud (EU), content is not used for model training. Own agents: currently only partially reliable."},{amp:"y",name:"KlickerUZH + AI Buddy (askUZH)",de:"Kursbezogene Chatbots, KI-Feedback und KI-generierte \xDCbungsinhalte; Lehrende richten Bots im Self-Service ein und geben sie frei. Public Beta ab HS26; Zugang \xFCber Kurs-Login, nutzungsabh\xE4ngige Kosten.",en:"Course-linked chatbots, AI feedback and AI-generated practice content; teachers configure and release bots via self-service. Public beta from autumn 2026; access via course login, usage-based costs."},{amp:"y",name:"OLAT-KI-Angebot",de:"Dialog mit freigegebenen OLAT-Kursinhalten (Materialien, Quizzes). \xDCbergangsl\xF6sung ab HS26, offizielle OLAT-Integration ab FS27 geplant \u2014 wichtig f\xFCr die Skalierung, weil alle Fakult\xE4ten OLAT nutzen.",en:"Dialogue with released OLAT course content (materials, quizzes). Interim solution from autumn 2026, official OLAT integration planned for spring 2027 \u2014 key for scaling, as all faculties use OLAT."},{amp:"y",name:"BaltiBot",de:"Unterst\xFCtzt Studienprogrammverantwortliche ab Sommer 2026 bei der Orientierung im Studienprogrammentwicklungs-Prozess (ISSP) \u2014 auf Basis einer kuratierten Dokumentensammlung.",en:"From summer 2026, supports programme directors in navigating the programme-development process (ISSP), based on a curated document collection."},{amp:"y",name:"EducationAI",de:"Intern getestete Anwendung f\xFCr Lehrende: greift auf die Teaching Tools UZH zu und unterst\xFCtzt Planung und Weiterentwicklung der Lehre (DPA mit dem LLM-Anbieter).",en:"Internally tested application for teachers: draws on the UZH Teaching Tools and supports planning and developing courses (DPA with the LLM provider)."},{amp:"r",name:"M365 Copilot Premium \xB7 GitHub Copilot",de:"Nur f\xFCr Mitarbeitende mit kostenpflichtiger Zusatzlizenz. Ein studentischer Zugang zu einer KI-Entwicklungsumgebung (agentische KI, Vibe Coding) ist noch offen \u2014 f\xFCr datennahe Profile relevant.",en:"Staff only, with a paid add-on licence. Student access to an AI development environment (agentic AI, vibe coding) is still open \u2014 relevant for data-oriented profiles."}],Tm={de:"<b>Spielregeln f\xFCr alle Werkzeuge:</b> Studierende d\xFCrfen nicht zu kostenpflichtigen Tools oder Tools mit pers\xF6nlicher Registrierung verpflichtet werden. Informationsklassen beachten: Pr\xFCfungen und akademische Arbeiten gelten als <b>vertraulich</b>, bestimmte psychologische Forschungs- und Klientendaten als <b>geheim</b> \u2014 sie geh\xF6ren in kein nicht daf\xFCr freigegebenes KI-System. Nicht von der UZH bereitgestellte Tools nur mit \xF6ffentlichen Informationen verwenden.",en:"<b>Ground rules for all tools:</b> students must not be required to use paid tools or tools needing personal registration. Mind the information classes: examinations and academic papers are <b>confidential</b>, certain psychological research and client data are <b>secret</b> \u2014 they belong in no AI system not approved for that class. Tools not provided by UZH may only be used with public information."};function v_(){let i={g:"\u{1F7E2}",y:"\u{1F7E1}",r:"\u{1F534}"};document.getElementById("gsList").innerHTML=__.map(e=>`<div class="bhrow"><b>${i[e.amp]} ${mn(e.name)}</b><p>${I.lang==="de"?e.de:e.en}</p></div>`).join(""),document.getElementById("gsRegeln").innerHTML=Tm[I.lang]||Tm.de,document.getElementById("gsQuelle").textContent=I.lang==="de"?"Quelle: KI-im-Curriculum-Kompass UZH (Ochsner, 2026), Stand Juli 2026 \u2014 Angaben \xE4ndern sich laufend.":"Source: UZH AI-in-the-Curriculum Compass (Ochsner, 2026), as of July 2026 \u2014 details change continuously.",sn("geraete")}window.addEventListener("keydown",i=>{let e=i.target&&(i.target.tagName==="INPUT"||i.target.tagName==="TEXTAREA");if(i.key==="Enter"&&pn&&!e&&qa(pn),i.key==="Escape"){if(bt){Va();return}document.getElementById("tutor").classList.remove("open"),Xi(),yr(),document.querySelectorAll(".modal.open").forEach(t=>t.classList.remove("open"))}});var Am=document.getElementById("planList"),zn=null;function y_(i){return Qe(i.slot)?"built":Wi(i).ok?"avail":"locked"}function lc(){for(let i of["bsc","msc"])for(let e of Z.bauplan[i])for(let t of e.slots){let n=_t[t];if(!Qe(t)&&Wi(n).ok)return t}return null}function qt(){let i=Kt.active?null:lc(),e=document.createDocumentFragment();for(let n of["bsc","msc"]){let r=document.createElement("div");r.className="semblock",r.innerHTML=`<div class="semhead" style="font-size:12px;color:var(--blue)">${n==="bsc"?"\u{1F3E0} "+k("haus_bsc"):"\u{1F3F0} "+k("haus_msc")}<span>${oi(n)}/120 ${k("ects")}</span></div>`,e.appendChild(r);for(let s of Z.bauplan[n]){if(!s.slots.length)continue;let a=s.slots.filter(c=>Qe(c)).length,o=document.createElement("div");o.className="semblock",o.innerHTML=`<div class="semhead"><span>${k("sem")} ${s.sem} \xB7 ${s.hs?k("hs"):k("fs")}</span><span class="semprog">${a}/${s.slots.length}</span></div>`;for(let c of s.slots){let l=_t[c],h=y_(l),u=document.createElement("button");u.className="chip "+(h==="built"?"built":h==="locked"?"locked":""),zn===c&&u.classList.add("sel"),c===i&&u.classList.add("next");let d=I.quests[c],p="#"+Wu(l).getHexString(),f=l.kategorie==="Wahlpflicht"?`<span class="ckat wp" title="${k("kat_wahlpflicht")}">WP</span>`:l.kategorie==="Wahl"?`<span class="ckat" title="${k("kat_wahl")}">W</span>`:"";u.innerHTML=`<span class="cdot" style="background:${p}"></span>
          <span class="cname">${Ut(l)}</span>
          ${f}
          ${c===i?`<span class="nextbadge">\u{1F528} ${k("naechstes")}</span>`:""}
          ${I.quiz[ys(l)]?'<span class="quest-star" title="Quiz \u2713">\u{1F6A9}</span>':""}
          ${d&&d.done?'<span class="quest-star">\u2726</span>':""}
          ${h==="built"?'<span class="tick">\u2714</span>':I.mode==="serious"&&I.bestanden[c]?'<span class="tick">\u2611</span>':""}
          <span class="cects">${l.ects}</span>`,u.onclick=()=>{_r(c)},o.appendChild(u)}e.appendChild(o)}}Am.innerHTML="",Am.appendChild(e),document.getElementById("planHint").textContent=I.mode==="serious"?"\u2611 = "+k("bestanden"):"",document.getElementById("planLegende").textContent=k("legende");let t=document.getElementById("nextCta");t&&(i&&!Kt.active?(t.textContent=`${k("cta_naechster")} ${Ut(_t[i]).split(",")[0]}`,t.title=Ut(_t[i]),t.onclick=()=>{_r(i)},t.style.visibility="visible"):t.style.visibility="hidden")}function oi(i){return Z.slots.filter(e=>e.haus===i&&Qe(e.slot)).reduce((e,t)=>{let n=I.placed[I.mode][t.slot],r=n&&n.opt&&fn[n.opt]?fn[n.opt].ects:t.ects;return e+r},0)}function _r(i){bt&&Va(),zn=i;let e=_t[i];SND.pick(),!Qe(i)&&!Kt.active?Fa(e):Xi(),cc(i),qt();let t=Z.haeuser[e.haus],n=new M(t.origin[0]+e.pos.x*Ke,ac(e.pos.y)+1,t.origin[2]+e.pos.z*Ke),r=Pt.position.clone().sub(Ht.target).normalize().multiplyScalar(Math.min(30,Pt.position.distanceTo(n)+7));On(n.clone().add(r),n,.9)}function xs(){let i={},e={};Z.kompetenzen.forEach(t=>{i[t.id]=0,e[t.id]=0});for(let t of Z.slots){let{komp:n,haupt:r}=Yt(t),s=[...n.fa||[],...n.ki||[],...n.fu||[]];for(let a of s){if(!(a in e))continue;let o=(r||[]).includes(a)?2:1;e[a]+=o*t.ects,Qe(t.slot)&&(i[a]+=o*t.ects)}}return(Z.vorstufe||[]).forEach((t,n)=>{I.p0&&I.p0[n]&&t.ids.forEach(r=>{e[r]&&(i[r]=Math.min(e[r],i[r]+.025*e[r]))})}),{score:i,max:e}}var gr=null,Na="profil",Mu=[{ids:["Fa1","Fa8","Fa9"],name:{de:"Fachwissen &|Transfer",en:"Knowledge &|transfer"},farbe:"#1a3e8f"},{ids:["Fa2","Fa3","Fa5"],name:{de:"Methoden, Daten|& Diagnostik",en:"Methods, data|& diagnostics"},farbe:"#1a3e8f"},{ids:["Fa4","Fa6","Fa7","Fa10"],name:{de:"Denken, Ethik &|Kommunikation",en:"Thinking, ethics|& communication"},farbe:"#1a3e8f"},{ids:["KI1","KI2","KI3"],name:{de:"Mit KI arbeiten|& gestalten",en:"Working & creating|with AI"},farbe:"#0e8f7e"},{ids:["KI4","KI5","KI6"],name:{de:"KI verstehen, pr\xFCfen|& verantworten",en:"Understanding, auditing|& owning AI"},farbe:"#0e8f7e"},{ids:["Fu1","Fu2","Fu3"],name:{de:"Future Skills|(mit & ohne KI)",en:"Future skills|(with & without AI)"},farbe:"#4a90d9"}];function Ym(i,e,t=210,n=null){let r=t/2,s=t*.315,a=Mu.length,o=(_,m)=>{let g=-Math.PI/2+_/a*Math.PI*2;return[r+Math.cos(g)*m,r+Math.sin(g)*m]},c="";for(let _ of[.33,.66,1])c+=`<polygon points="${[...Array(a)].map((m,g)=>o(g,s*_).join(",")).join(" ")}" fill="none" stroke="#dbe1ef" stroke-width="1"/>`;let l="",h="";Mu.forEach((_,m)=>{let[g,v]=o(m,s);l+=`<line x1="${r}" y1="${r}" x2="${g}" y2="${v}" stroke="#dbe1ef" stroke-width="1"/>`;let[y,x]=o(m,s+13),T=re(_.name).split("|"),R=x-(T.length-1)*4.5+(m===0?-3:x>r?5:0);h+=`<text x="${y}" y="${R}" font-size="7.5" font-weight="700" fill="${_.farbe}" text-anchor="middle" dominant-baseline="middle">`+T.map((w,P)=>`<tspan x="${y}" dy="${P?9:0}">${w.replace(/&/g,"&amp;")}</tspan>`).join("")+"</text>"});let u=Mu.map(_=>{let m=_.ids.reduce((v,y)=>v+(i[y]||0),0),g=_.ids.reduce((v,y)=>v+(e[y]||0),0);return g?m/g:0}),d=u.map((_,m)=>o(m,Math.max(.03,_)*s).join(",")).join(" "),p=u.map((_,m)=>{let[g,v]=o(m,Math.max(.03,_)*s);return`<circle cx="${g}" cy="${v}" r="2.6" fill="#0028a5"/>`}).join(""),f=n&&n.length===a?`<polygon points="${n.map((_,m)=>o(m,Math.max(.03,Math.min(1,_))*s).join(",")).join(" ")}" fill="none" stroke="#b3831d" stroke-width="1.8" stroke-dasharray="5 4" stroke-linejoin="round"/>`:"";return`<svg viewBox="0 0 ${t} ${t}" style="width:100%;max-width:230px;display:block;margin:2px auto 6px">
    ${c}${l}
    ${f}
    <polygon points="${d}" fill="rgba(0,40,165,.16)" stroke="#0028a5" stroke-width="2" stroke-linejoin="round"/>
    ${p}${h}</svg>`}function x_(){let i=[];for(let n of["bsc","msc"])for(let r of Z.bauplan[n]){if(!r.slots.length&&n==="bsc"&&r.sem===2){i.push({lbl:"B2",fa:0,ki:0,fu:0});continue}let s={lbl:(n==="bsc"?"B":"M")+r.sem,fa:0,ki:0,fu:0};for(let a of r.slots){if(!Qe(a))continue;let o=_t[a],{komp:c}=Yt(o);s.fa+=(c.fa||[]).length*o.ects,s.ki+=(c.ki||[]).length*o.ects,s.fu+=(c.fu||[]).length*o.ects}i.push(s)}let e=Math.max(1,...i.map(n=>n.fa+n.ki+n.fu)),t=n=>{let r=s=>Math.round(s/e*100);return`<div class="vbar" title="${n.lbl}">
      <span class="vseg" style="height:${r(n.fu)}%;background:${Z.felder.fu.farbe}"></span>
      <span class="vseg" style="height:${r(n.ki)}%;background:${Z.felder.ki.farbe}"></span>
      <span class="vseg" style="height:${r(n.fa)}%;background:${Z.felder.fa.farbe}"></span>
    </div>`};return`<div class="kfeld" style="margin-top:14px">${k("verlauf_titel")}</div>
    <div class="verlauf">${i.map(t).join("")}</div>
    <div class="verlauf-lbl">${i.map(n=>`<span>${n.lbl}</span>`).join("")}</div>`}function b_(i){let e=ic(),t=rc(),n=e.r?`${Z.richtungen[e.r].icon} <b style="color:${Z.richtungen[e.r].farbe}">${re(Z.richtungen[e.r].kurz)}</b>`:`<span style="color:#8b94ab">${k("richtung_keine")}</span>`,r=t.total?Object.entries(t.counts).filter(([,c])=>c>0).map(([c,l])=>`<b style="color:${Z.schwerpunkte[c].farbe}">${c} ${l}</b>`).join(" \xB7 ")+(t.dom?"":` <span style="color:#8b94ab">(${k("msc_mix")})</span>`):'<span style="color:#8b94ab">\u2014</span>',s=ps(),a=La(),o=s||a?`<br>BA: ${s?`${((Z.baFormen||{})[s.form]||{}).icon||""} ${mn(re(s.name))}`:""}${a?` \xB7 ${a.icon} ${mn(re(a.name))}`:""}`:"";return`<div style="border:1.5px solid #dbe1ef;border-radius:10px;padding:7px 10px;margin:0 4px 8px;font-size:11px;line-height:1.6">
    <b style="font-size:11.5px">\u{1F9ED} ${k("richtung_titel")}</b><br>
    ${k("richtung_bsc")}: ${n}<br>
    ${k("richtung_msc")}: ${r}${o}${i?"":`<br><span style="color:#8b94ab;font-size:10px">${k("msc_dom_hint")}</span>`}
  </div>`}function M_(i){if(!i.wahl)return"";let e=ic(),t=rc(),n=[];if(i.wahl.r&&Z.richtungen[i.wahl.r]){let a=e.r===i.wahl.r;n.push({ok:a,txt:`BSc: ${re(Z.richtungen[i.wahl.r].kurz)}`,col:Z.richtungen[i.wahl.r].farbe})}if(i.wahl.sp&&Z.schwerpunkte[i.wahl.sp]){let a=(t.counts[i.wahl.sp]||0)>=3;n.push({ok:a,txt:`MSc: ${i.wahl.sp}`,col:Z.schwerpunkte[i.wahl.sp].farbe})}if(i.wahl.wp&&fn[i.wahl.wp]){let a=Yl()===i.wahl.wp;n.push({ok:a,txt:re(fn[i.wahl.wp].titel),col:"#b3831d"})}let r=ps();if(r&&(r.pfade||[]).includes(i.id)&&n.push({ok:!0,txt:k("ba_chip"),col:"#0028a5"}),!n.length)return"";let s=n.every(a=>a.ok);return`<div style="display:flex;flex-wrap:wrap;gap:4px;align-items:center;margin:4px 0 2px;font-size:10px">
    <span style="color:#5b6478;font-weight:700">${s?"\u2713 "+k("passung_ok"):k("passung_titel")}</span>
    ${n.map(a=>`<span style="border:1px solid ${a.col};color:${a.ok?"#fff":a.col};background:${a.ok?a.col:"transparent"};border-radius:999px;padding:1px 7px">${a.ok?"\u2713 ":""}${mn(a.txt)}</span>`).join("")}
  </div>`+(i.wahl.hinweis&&!s?`<p style="font-size:10px;color:#8b94ab;margin:2px 0 0">${re(i.wahl.hinweis)}</p>`:"")}var Aa=null;function E_(i){if(!Aa){Aa={};for(let e of Z.slots){let{komp:t}=Yt(e);for(let n of[...t.fa||[],...t.ki||[],...t.fu||[]])Aa[n]=Math.max(Aa[n]||0,e.stufe)}}return Aa[i]||0}function Zm(i){return i.ziel?Object.entries(i.ziel).map(([e,t])=>({id:e,ziel:Math.min(t,E_(e)),ist:vs(e)})).filter(e=>e.ist<e.ziel).sort((e,t)=>t.ziel-t.ist-(e.ziel-e.ist)):[]}function S_(){let{score:i,max:e}=xs(),t={};Z.kompetenzen.forEach(a=>t[a.id]=e[a.id]?i[a.id]/e[a.id]:0);let n=document.getElementById("profilList"),r=`<p style="font-size:11px;color:#5b6478;margin:2px 6px 6px;line-height:1.45">${k("karriere_info")}</p>`;r+=b_(!1);for(let a of window.KARRIERE.pfade||[]){let o=Object.values(a.w).reduce((p,f)=>p+f,0),c=Math.round(Object.entries(a.w).reduce((p,[f,_])=>p+_*(t[f]||0),0)/o*100),l=Z.slots.filter(p=>!Qe(p.slot)).map(p=>{let{komp:f,haupt:_}=Yt(p),g=[...f.fa||[],...f.ki||[],...f.fu||[]].reduce((v,y)=>v+(a.w[y]||0)*((_||[]).includes(y)?2:1),0);return{s:p,v:g,ok:Wi(p).ok}}).filter(p=>p.v>0).sort((p,f)=>f.ok-p.ok||f.v-p.v).slice(0,3),h=Zm(a),u=a.ziel?`<details style="margin:4px 0 0"><summary style="cursor:pointer;font:700 10.5px var(--font);color:#5b6478">\u{1F3AF} ${k("soll_titel")}</summary>
      ${h.length?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin:4px 0"><span style="font-size:10px;color:#5b6478">${k("gap_titel")}:</span>${h.map(p=>{let f=gn[p.id],_=f?Z.felder[f.feld]:null;return`<span style="font-size:10px;border:1px solid ${_?_.farbe:"#b9c2d9"};color:${_?_.farbe:"#5b6478"};border-radius:999px;padding:1px 7px" title="${f?mn(re(f.name)):""}">${p.id} ${p.ist}\u2192${p.ziel}</span>`}).join("")}</div>`:`<p style="font-size:10.5px;color:var(--ok);margin:4px 0">\u2713 ${k("gap_ok")}</p>`}</details>`:"",d=a.roadmap&&a.roadmap.length?`<details style="margin:3px 0 0"><summary style="cursor:pointer;font:700 10.5px var(--font);color:#5b6478">\u{1F680} ${k("roadmap_titel")}</summary>
      <ol style="font-size:10.5px;line-height:1.5;padding-left:16px;margin:4px 0">${a.roadmap.map(p=>`<li style="margin:3px 0"><b>${re(p.t)}</b> \u2014 ${re(p.d)}</li>`).join("")}</ol></details>`:"";r+=`<div class="pfad">
      <div class="phead"><span>${a.icon}</span><span>${re(a.name)}</span><span class="pct">${c}%</span></div>
      <div class="phint">${re(a.hint)}</div>
      <div class="track"><div class="fill" style="width:${c}%;background:linear-gradient(90deg,#3f6cc8,#0028a5)"></div></div>
      ${M_(a)}
      ${u}
      ${d}
      ${l.length?`<div class="pnext">${k("pfad_next")} ${l.map(p=>{let f=Ut(p.s).split(",")[0];return`<button data-slot="${p.s.slot}" title="${Ut(p.s).replace(/"/g,"&quot;")}">${f.length>34?f.slice(0,33)+"\u2026":f}</button>`}).join("")}</div>`:""}
    </div>`}r+=`<button class="ghostbtn" data-steckbrief style="margin:8px 4px;width:calc(100% - 8px)">\u{1F5A8} ${k("karriere_pdf")}</button>`,r+=x_(),n.innerHTML=r,n.querySelectorAll(".pnext button").forEach(a=>a.onclick=()=>_r(a.dataset.slot));let s=n.querySelector("[data-steckbrief]");s&&(s.onclick=w_)}function w_(){let{score:i,max:e}=xs(),t={};Z.kompetenzen.forEach(_=>t[_.id]=e[_.id]?i[_.id]/e[_.id]:0);let n=new Date().toLocaleDateString(I.lang==="de"?"de-CH":"en-GB"),r=(window.KARRIERE.pfade||[]).map(_=>{let m=Object.values(_.w).reduce((x,T)=>x+T,0),g=Math.round(Object.entries(_.w).reduce((x,[T,R])=>x+R*(t[T]||0),0)/m*100),v=Object.entries(_.w).map(([x,T])=>({id:x,v:T*(t[x]||0)})).sort((x,T)=>T.v-x.v).slice(0,3).filter(x=>x.v>0),y=Z.slots.filter(x=>!Qe(x.slot)).map(x=>{let{komp:T,haupt:R}=Yt(x),P=[...T.fa||[],...T.ki||[],...T.fu||[]].reduce((L,z)=>L+(_.w[z]||0)*((R||[]).includes(z)?2:1),0);return{s:x,v:P}}).filter(x=>x.v>0).sort((x,T)=>T.v-x.v).slice(0,3);return{p:_,ready:g,traeger:v,cand:y}}).sort((_,m)=>m.ready-_.ready),s=ic(),a=rc(),o="";for(let{p:_,ready:m,traeger:g,cand:v}of r){let y=Zm(_),x=_.ziel?y.length?`<p style="font-size:10.5px;margin:2px 0"><b>\u{1F3AF} ${k("gap_titel")}:</b> ${y.map(w=>{let P=gn[w.id];return`${w.id} ${P?re(P.name):""} (${k("stufe")} ${w.ist}\u2192${w.ziel})`}).join(" \xB7 ")}</p>`:`<p style="font-size:10.5px;margin:2px 0;color:#0a7d40"><b>\u2713 ${k("gap_ok")}</b></p>`:"",T=_.wahl&&_.wahl.hinweis?`<p style="font-size:10.5px;margin:2px 0"><b>\u{1F9ED} ${k("passung_titel")}</b> ${re(_.wahl.hinweis)}</p>`:"",R=_.roadmap&&_.roadmap.length?`<p style="font-size:10.5px;margin:5px 0 2px"><b>\u{1F680} ${k("roadmap_titel")}:</b></p>
         <ol style="font-size:10.5px;line-height:1.55;margin:0 0 2px;padding-left:18px">${_.roadmap.map(w=>`<li style="margin:2px 0"><b>${re(w.t)}</b> \u2014 ${re(w.d)}</li>`).join("")}</ol>`:"";o+=`<div style="border:1.5px solid #dbe1ef;border-radius:12px;padding:10px 14px;margin:8px 0;page-break-inside:avoid">
      <div style="display:flex;align-items:center;gap:8px"><span style="font-size:17px">${_.icon}</span>
        <b style="font-size:13px;flex:1">${re(_.name)}</b>
        <b style="color:#0028a5;font-variant-numeric:tabular-nums">${m}%</b></div>
      <div style="height:8px;border-radius:4px;background:#e8ebf4;overflow:hidden;margin:5px 0"><span style="display:block;height:100%;width:${m}%;background:linear-gradient(90deg,#3f6cc8,#0028a5)"></span></div>
      <p style="font-size:10.5px;color:#5b6478;margin:2px 0 5px">${re(_.hint)}</p>
      ${g.length?`<p style="font-size:10.5px;margin:2px 0"><b>${k("steck_traeger")}</b> ${g.map(w=>{let P=gn[w.id];return`${w.id} ${re(P.name)} (${Math.round((t[w.id]||0)*100)}%)`}).join(" \xB7 ")}</p>`:""}
      ${T}
      ${x}
      ${v.length?`<p style="font-size:10.5px;margin:2px 0"><b>${k("steck_next")}</b> ${v.map(w=>Ut(w.s).split(",")[0]).join(" \xB7 ")}</p>`:""}
      ${R}
    </div>`}let c=r[0],l=`<div style="border:1.5px solid #dbe1ef;border-radius:12px;padding:8px 14px;margin:8px 0;font-size:11.5px;line-height:1.6">
    <b>\u{1F9ED} ${k("richtung_titel")}</b><br>
    ${k("richtung_bsc")}: ${s.r?`<b style="color:${Z.richtungen[s.r].farbe}">${Z.richtungen[s.r].icon} ${re(Z.richtungen[s.r].kurz)}</b>`:k("richtung_keine")}<br>
    ${k("richtung_msc")}: ${a.total?Object.entries(a.counts).filter(([,_])=>_>0).map(([_,m])=>`<b style="color:${Z.schwerpunkte[_].farbe}">${_} ${m}/6</b>`).join(" \xB7 ")+(a.dom?"":` (${k("msc_mix")})`):"\u2014"}
    ${Yl()&&fn[Yl()]?`<br>${k("kat_wahlpflicht")}: <b>${re(fn[Yl()].titel)}</b>`:""}
    ${ps()?`<br>${k("ba_chip")}: <b>${((Z.baFormen||{})[ps().form]||{}).icon||""} ${mn(re(ps().name))}</b>`:""}
    ${La()?`<br>${k("artefakt")} <b>${La().icon} ${mn(re(La().name))}</b>`:""}
  </div>`,h=c&&c.p.soll?`<div style="page-break-inside:avoid">${Ym(i,e,230,c.p.soll).replace("max-width:230px","max-width:300px")}
       <p style="text-align:center;font-size:10px;color:#5b6478;margin:0 0 6px">${k("soll_legende")} (${c.p.icon} ${re(c.p.name)})</p></div>`:"",u=(window.KARRIERE.lit||[]).length?`<h2>\u{1F4DA} ${I.lang==="de"?"Literatur & offizielle Quellen":"References & official sources"}</h2>
       <ul style="font-size:10px;line-height:1.55;padding-left:18px">${window.KARRIERE.lit.map(_=>`<li style="margin:3px 0">${_.apa}${_.url?` <a href="${_.url}" target="_blank" rel="noopener" style="color:#0028a5">${_.url.replace(/^https?:\/\//,"")}</a>`:""}</li>`).join("")}</ul>`:"",d="";for(let _ of["fa","ki","fu"])for(let m of Z.kompetenzen.filter(g=>g.feld===_)){let g=vs(m.id),v=za(m.id,g);v&&(d+=`<p style="font-size:11px;margin:5px 0;page-break-inside:avoid">\xAB${v}\xBB <span style="color:#8b94ab;font-size:9.5px;white-space:nowrap">\u2014 ${m.id} ${re(m.name)}, ${k("stufe")} ${g}</span></p>`)}let p=`<!DOCTYPE html><html lang="${I.lang}"><head><meta charset="utf-8"><title>${k("steck_titel")}</title>
  <style>*{-webkit-print-color-adjust:exact !important;print-color-adjust:exact !important}
  body{font-family:"Helvetica Neue",Arial,sans-serif;color:#1c2333;max-width:780px;margin:24px auto;padding:0 16px}
  h1{color:#0028a5;font-size:23px} h2{color:#0028a5;font-size:15px;margin:18px 0 4px}
  .hint{font-size:10px;color:#5b6478;margin-top:16px;line-height:1.5}
  @media print {.noprint{display:none}}</style></head><body>
  <div class="noprint" style="float:right;text-align:right">
    <button onclick="print()" style="padding:10px 20px;border:0;background:#0028a5;color:#fff;border-radius:10px;cursor:pointer;font-weight:700;font-size:14px">\u{1F4BE} ${I.lang==="de"?"Als PDF speichern":"Save as PDF"}</button>
    <div style="font-size:10px;color:#5b6478;margin-top:4px">${I.lang==="de"?"Im Druckdialog \xABAls PDF sichern\xBB w\xE4hlen":"Choose 'Save as PDF' in the print dialog"}</div>
  </div>
  <h1>\u{1F4BC} ${k("steck_titel")} \u2014 ${mn(I.name)||"\u2014"}</h1>
  <p style="font-size:12px;color:#5b6478">${k("passdatum")}: ${n} \xB7 BSc ${oi("bsc")}/120 \xB7 MSc ${oi("msc")}/120 ${k("ects")} \xB7 ${I.mode==="serious"?k("modus_serious"):k("modus_frei")}</p>
  <p style="font-size:11px;color:#5b6478;line-height:1.5">${k("karriere_info")}</p>
  ${l}
  ${h}
  ${o}
  ${d?`<h2>\u{1F4DD} ${k("steck_cv")}</h2>${d}`:""}
  ${u}
  <p class="hint">${re(Z.meta.hinweis)} ${k("steck_fussnote")}</p>
  </body></html>`,f=window.open("about:blank");f&&f.document?(f.document.write(p),f.document.close()):hc("karrieresteckbrief.html",p,"text/html"),SND.pick()}function en(i=[]){if(document.getElementById("ptabProfil").classList.toggle("on",Na==="profil"),document.getElementById("ptabKarriere").classList.toggle("on",Na==="karriere"),Na==="karriere"){S_();return}if(gr){T_(gr);return}let{score:e,max:t}=xs(),n=document.getElementById("profilList"),r=`<div class="ects-summary">
    <div class="box"><b>${oi("bsc")}</b><span>BSc / 120 ${k("ects")}</span></div>
    <div class="box"><b>${oi("msc")}</b><span>MSc / 120 ${k("ects")}</span></div>
  </div><div class="donuts">`;for(let s of["fa","ki","fu"]){let a=Z.felder[s],o=Z.kompetenzen.filter(u=>u.feld===s).map(u=>u.id),c=o.reduce((u,d)=>u+e[d],0),l=o.reduce((u,d)=>u+t[d],0),h=l?Math.round(c/l*100):0;r+=`<div class="donut"><div class="ring" style="background:conic-gradient(${a.farbe} ${h*3.6}deg, #e8ebf4 0)"><b>${h}%</b></div><span>${s==="fa"?"Fach":s==="ki"?"KI":"Future"}</span></div>`}r+="</div>",r+=Ym(e,t);for(let s of["fa","ki","fu"]){let a=Z.felder[s];r+=`<div class="kfeld"><span class="fdot" style="background:${a.farbe}"></span>${re(a.name)}</div>`;for(let o of Z.kompetenzen.filter(c=>c.feld===s)){let c=t[o.id]?Math.round(e[o.id]/t[o.id]*100):0;r+=`<button class="kbar ${i.includes(o.id)?"bump":""}" data-k="${o.id}"><div class="klabel"><span><span class="kid">${o.id}</span>${re(o.name)}</span><span>${c}%</span></div>
        <div class="track"><div class="fill" style="background:${a.farbe};width:${c}%"></div></div></button>`}}n.innerHTML=r,n.querySelectorAll(".kbar").forEach(s=>s.onclick=()=>{gr=s.dataset.k,SND.pick(),en()})}document.getElementById("ptabProfil").onclick=()=>{Na="profil",gr=null,en()};document.getElementById("ptabKarriere").onclick=()=>{Na="karriere",gr=null,SND.pick(),en()};function vs(i){let e=0;for(let t of Z.slots){if(!Qe(t.slot))continue;let{komp:n}=Yt(t);[...n.fa||[],...n.ki||[],...n.fu||[]].includes(i)&&(e=Math.max(e,t.stufe))}return e}function T_(i){let e=gn[i];if(!e){gr=null,en();return}let t=Z.felder[e.feld],{score:n,max:r}=xs(),s=r[i]?Math.round(n[i]/r[i]*100):0,a=document.getElementById("profilList"),o=[];for(let f of Z.slots){let{komp:_,haupt:m}=Yt(f);[..._.fa||[],..._.ki||[],..._.fu||[]].includes(i)&&o.push({slot:f,haupt:(m||[]).includes(i),built:Qe(f.slot),w:((m||[]).includes(i)?2:1)*f.ects})}o.sort((f,_)=>_.built-f.built||_.w-f.w);let c=o.filter(f=>f.built),l=o.filter(f=>!f.built).sort((f,_)=>Wi(_.slot).ok-Wi(f.slot).ok||_.w-f.w).slice(0,4),h=vs(i),u=f=>{let _=Z.gruppen[f.slot.gruppe].farbe;return`<button class="modrow ${f.built?"builtrow":""}" data-slot="${f.slot.slot}" style="border:0;width:100%;text-align:left;cursor:pointer;background:${f.built?"#eef7f1":"transparent"}">
      <span class="mdot" style="background:${_}"></span>
      <span style="flex:1">${Ut(f.slot)}</span>
      ${f.haupt?`<span class="haupt-tag" title="${k("hauptkomp")}">\u2605</span>`:""}
      <span style="color:#8b94ab;font-variant-numeric:tabular-nums">${f.slot.ects}</span>
    </button>`};a.innerHTML=`
    <button class="kdetail-back">${k("zurueck")}</button>
    <div class="kdetail">
      <h4><span style="color:${t.farbe}">${i}</span> ${re(e.name)}</h4>
      <p class="ich">\xAB${re(e.ich)}\xBB</p>
      <div class="kbar" style="cursor:default"><div class="klabel"><span>${re(t.name)}</span><span>${s}%</span></div>
        <div class="track"><div class="fill" style="background:${t.farbe};width:${s}%"></div></div></div>
      <div class="subhead">${k("stufe_erreicht")}</div>
      <div class="stufen">${[1,2,3,4].map(f=>`<span class="sdot ${h>=f?"on":""}" title="${re(Z.stufen[f-1].name)}">${f}</span>`).join("")}
        <span style="font-size:10.5px;color:#5b6478;margin-left:4px">${h?re(Z.stufen[h-1].name):"\u2014"}</span></div>
      ${R_(e,n,r)}
      <div class="subhead">${k("k_aufgebaut")} (${c.length})</div>
      ${c.length?c.map(u).join(""):`<p style="font-size:11.5px;color:#8b94ab;margin:2px 6px">${k("k_keine")}</p>`}
      ${A_(i,h)}
      ${C_(i,c)}
      ${l.length?`<div class="subhead">${k("k_naechste")}</div>`+l.map(u).join(""):""}
    </div>`,a.querySelector(".kdetail-back").onclick=()=>{gr=null,en()},a.querySelectorAll(".modrow").forEach(f=>f.onclick=()=>_r(f.dataset.slot));let d=a.querySelector("[data-cvcopy]");d&&(d.onclick=async()=>{try{await navigator.clipboard.writeText(d.dataset.cvcopy)}catch{}d.textContent="\u2713 "+k("cv_copied"),SND.pick()});let p=a.querySelector("[data-cvai]");p&&(p.onclick=async()=>{let f=a.querySelector("[data-cvrole]").value.trim();if(!f)return;let _=a.querySelector("[data-cvaiout]");_.style.display="flex",_.querySelector("p").textContent=k("ai_wartet");try{let m=za(i,vs(i)),g=await Ru(`Formuliere GENAU EINEN CV-tauglichen Satz (${I.lang==="de"?"Deutsch, Schweizer Rechtschreibung":"English"}, dritte Person ohne Subjekt, keine \xDCbertreibung) f\xFCr die Kompetenz \xAB${re(gn[i].name)}\xBB \u2014 zugeschnitten auf diese Zielrolle: ${f}. Ausgangsbaustein: \xAB${m}\xBB. Nur der Satz, nichts anderes.`);_.querySelector("p").textContent="\xAB"+g.replace(/^«|»$/g,"")+"\xBB",_.querySelector("[data-cvaicopy]").onclick=async()=>{try{await navigator.clipboard.writeText(g)}catch{}SND.pick()}}catch{_.querySelector("p").textContent=k("tutor_err")}})}function za(i,e){let n=(window.KARRIERE&&window.KARRIERE.cv||{})[i];if(!n||!e)return null;let r=n[e]||n[String(e)]||(Array.isArray(n.stufen)?n.stufen[e-1]:null);return r?re(r):null}function A_(i,e){let t=za(i,e);if(!t)return"";let n=nc?`<div style="display:flex;gap:6px;margin:2px 4px 6px">
    <input data-cvrole type="text" placeholder="${k("ai_cv_ph")}" style="flex:1;border:1.5px solid #dbe1ef;border-radius:8px;padding:6px 9px;font:500 11px var(--font)">
    <button class="ghostbtn" data-cvai style="padding:6px 9px;font-size:10.5px">${k("ai_cv_btn")}</button>
  </div><div data-cvaiout style="display:none" class="cvrow"><p></p><button data-cvaicopy>\u{1F4CB}</button></div>`:"";return`<div class="subhead">\u{1F4DD} ${k("cv_titel")} (${k("stufe")} ${e})</div>
    <div class="cvrow"><p>\xAB${t}\xBB</p><button data-cvcopy="${t.replace(/"/g,"&quot;")}">\u{1F4CB} ${k("cv_copy")}</button></div>${n}`}function Jm(i,e,t){let n=i.proxy.map(r=>t[r]?e[r]/t[r]:0);return Math.round(n.reduce((r,s)=>r+s,0)/Math.max(1,n.length)*100)}function R_(i,e,t){if(!i.sub||!i.sub.length)return"";let n=Z.felder.fu,r=`<div class="subhead">\u{1F9ED} ${k("fs12_titel")} (${i.sub.length})</div>
    <p style="font-size:10px;color:#8b94ab;margin:0 6px 4px">${k("fs12_hint")}</p>`;for(let s of i.sub){let a=Jm(s,e,t);r+=`<div class="kbar" style="cursor:default"><div class="klabel"><span><span class="kid">${s.id}</span>${re(s.name)}</span><span>${a}%</span></div>
      <div class="track"><div class="fill" style="background:${n.farbe};width:${a}%"></div></div></div>`}return r}function C_(i,e){let t=[];for(let n of e){let r=ys(n.slot);I.quiz[r]&&t.push(`<div class="evrow"><span class="evic">\u{1F6A9}</span><span>${k("ev_quiz")}: ${Ut(n.slot).split(",")[0]}</span></div>`);let s=I.quests[n.slot.slot];s&&s.done&&t.push(`<div class="evrow"><span class="evic">\u2726</span><span>${k("ev_quest")}: ${Ut(n.slot).split(",")[0]}${s.note?` \u2014 <i>\xAB${mn(s.note)}\xBB</i>`:""}</span></div>`)}return t.length?`<div class="subhead">\u{1F5C2} ${k("evidenz_titel")} (${t.length})</div>`+t.join(""):""}var Qm=document.getElementById("card"),Ca="zukunft",Ha="klassisch",Ga="DeNC",bi=null,us=null,ds=null,Ua=null;function cc(i){let e=_t[i];if(!e)return;zn=i;let t=Qe(i),n=I.placed[I.mode][i]||{};Ha=n.stil||Ha,Ga=n.sp||Ga,bi=n.opt||(e.optionen?e.optionen[0]:null),us=n.thema||null,ds=n.frage||null,Ua=n.artefakt||null;let{kat:r}=Yt(e);document.getElementById("cardDot").style.background="#"+Wu(e).getHexString(),document.getElementById("cardTitle").textContent=Ut(e),document.getElementById("cardCode").textContent=`${n.opt||e.code} \xB7 ${re(Z.gruppen[e.gruppe].name)}`;let s=(r||"B").split(/[+/]/).map(o=>o.trim()).filter(o=>Z.pruefungslogik[o]),a=e.kategorie==="Wahlpflicht"?`<span class="badge" style="background:#b3831d">\u2605 ${k("kat_wahlpflicht")}</span>`:e.kategorie==="Wahl"?`<span class="badge" style="background:#6b7a99">\u2606 ${k("kat_wahl")}</span>`:`<span class="badge" style="background:#3c4356">${k("kat_pflicht")}</span>`;document.getElementById("cardBadges").innerHTML=`<span class="badge" style="background:#5b6478">${e.ects} ${k("ects")}</span>`+a+`<span class="badge" style="background:#39415a">${k("stufe")} ${e.stufe}</span>
     <span class="badge" style="background:#7a86a3">${k(e.rhythmus==="beide"?"beide":e.rhythmus.toLowerCase())}${e.sem2?" \xB7 "+k("zweisem"):""}</span>`+s.map(o=>`<span class="badge" style="background:${Z.pruefungslogik[o].farbe}">${re(Z.pruefungslogik[o].name)}</span>`).join(""),Gi(e),ri(e),ef(e),Qm.classList.add("open"),document.body.classList.add("card-open")}function ef(i){let e=document.getElementById("fbRow");if(!e)return;if(Kt.active){e.style.display="none";return}e.style.display="flex";let t=(I.fb||{})[i.slot]||{};e.innerHTML=`<span class="fblbl">\u{1F6A6} ${k("fb_frage")}</span>
    ${["g","y","r"].map(r=>`<button class="fbamp ${t.a===r?"on":""}" data-amp="${r}" title="${k("fb_"+r)}" aria-label="${k("fb_"+r)}">${r==="g"?"\u{1F7E2}":r==="y"?"\u{1F7E1}":"\u{1F534}"}</button>`).join("")}
    ${t.a?`<input type="text" data-fbnote maxlength="200" placeholder="${k("fb_ph")}" value="${mn(t.note)}">`:""}`,e.querySelectorAll(".fbamp").forEach(r=>r.onclick=()=>{I.fb||(I.fb={});let s=I.fb[i.slot]||{};s.a===r.dataset.amp?delete I.fb[i.slot]:(I.fb[i.slot]={a:r.dataset.amp,note:s.note||"",ts:new Date().toISOString().slice(0,10)},s.a||wt(k("fb_danke"))),rt(),SND.pick(),ef(i)});let n=e.querySelector("[data-fbnote]");n&&(n.onchange=()=>{I.fb&&I.fb[i.slot]&&(I.fb[i.slot].note=n.value.trim().slice(0,200),rt())})}function yr(){Qm.classList.remove("open"),document.body.classList.remove("card-open"),zn=null,qt()}document.getElementById("cardClose").onclick=()=>{yr(),Xi()};document.getElementById("cardTabs").addEventListener("click",i=>{let e=i.target.closest("button");e&&(Ca=e.dataset.tab,document.querySelectorAll("#cardTabs button").forEach(t=>t.classList.toggle("on",t===e)),zn&&Gi(_t[zn]))});function I_(i){let{komp:e,haupt:t}=Yt(i);return'<div class="komp-pills">'+[...e.fa||[],...e.ki||[],...e.fu||[]].map(r=>{let s=gn[r];if(!s)return"";let a=Z.felder[s.feld];return`<span class="kpill ${t.includes(r)?"haupt":""}" style="border-color:${a.farbe};color:${a.farbe}">${r} ${re(s.name)}</span>`}).join("")+"</div>"}function tf(i,e){let{komp:t,haupt:n}=Yt(i),r={F:t.fa||[],K:t.ki||[],S:t.fu||[]},s=[];for(let a of e||[]){let o=r[a]||[],c=o.filter(l=>(n||[]).includes(l));(c.length?c:o.slice(0,1)).forEach(l=>{s.includes(l)||s.push(l)})}return s}function P_(i,e){return tf(i,e.b).map(n=>{let r=gn[n];if(!r)return"";let s=Z.felder[r.feld];return`<span class="lz-kid" style="color:${s.farbe};border-color:${s.farbe}" title="${re(r.name)}">${n}</span>`}).join("")}function L_(i){let{komp:e,haupt:t}=Yt(i),n=[...e.fa||[],...e.ki||[],...e.fu||[]],r=(t&&t.length?t:n).filter(o=>gn[o]).slice(0,5);if(!r.length)return"";let s=r.map(o=>`${o} ${re(gn[o].name)}`).join(", ");return`<p style="margin-top:8px;font-size:12px;color:#3c4356;line-height:1.5">${I.lang==="de"?`<b>Die Studierenden</b> bauen in diesem Modul vor allem folgende Kompetenzen auf: ${s}.`:`<b>Students</b> primarily build the following competences in this module: ${s}.`}</p>`}function Gi(i){let e=Ou(i),t=document.getElementById("cardBody"),n=`<p style="color:#5b6478;font-style:italic">${k("keine_texte")}</p>`;if(Ca==="zukunft"){let r=Z.baukasten&&Z.baukasten.zuordnung[i.slot]||[],s=r.length?`<div style="margin-top:10px"><span style="font:700 11px var(--font);color:#5b6478">${k("baukasten_titel")}:</span>
      <span class="komp-pills" style="display:inline-flex;margin-left:4px">${r.map(a=>{let o=Z.baukasten.defs[a];return o?`<span class="kpill" data-bk="${a}" role="button" tabindex="0" title="${re(o.kurz)}" style="border-color:#b9c2d9;cursor:pointer">${re(o.name)}</span>`:""}).join("")}</span></div>`:"";t.innerHTML=(e?`<p style="color:#5b6478;font-size:12px">${re(e.heute)}</p><p style="margin-top:6px">${re(e.zukunft)}</p>`:n)+L_(i)+I_(i)+s,t.querySelectorAll("[data-bk]").forEach(a=>a.onclick=()=>{let o=Z.baukasten.defs[a.dataset.bk];o&&(wt(re(o.name)+": "+re(o.kurz)),SND.pick())})}else if(Ca==="lernziele")t.innerHTML=e&&e.lernziele&&e.lernziele.length?`<p style="font-size:10.5px;color:#8b94ab;margin:0 2px 6px">${k("lz_hint")}</p><ul style="list-style:none;padding-left:2px">${e.lernziele.map(r=>`<li style="margin:5px 0"><span class="lz-kids">${P_(i,r)}</span>${re(r)}</li>`).join("")}</ul>`:n;else if(Ca==="ki"){let{kat:r}=Yt(i),s=(r||"B").split(/[+/]/).map(a=>a.trim()).filter(a=>Z.pruefungslogik[a]);t.innerHTML=(e?`<p>${re(e.ki)}</p>`:n)+'<ul style="margin-top:8px">'+s.map(a=>`<li><b style="color:${Z.pruefungslogik[a].farbe}">${re(Z.pruefungslogik[a].name)}</b> \u2014 ${re(Z.pruefungslogik[a].def)}</li>`).join("")+"</ul>"}else Ca==="quest"&&D_(i,t,e,n)}var Rm={de:{ok:["Sauber hergeleitet! \u{1F9E0}","Signifikant richtig.","Das sitzt \u2014 weiter so!","Evidenzbasiert geantwortet. \u2713","Dein Hippocampus liefert."],no:["Fast! Schau dir das Warum an:","Guter Versuch \u2014 hier steckt der Denkfehler:","Kein Drama: Fehler = Lernmoment.","Knapp daneben \u2014 die Erkl\xE4rung hilft:","Das war der beliebteste Distraktor:"]},en:{ok:["Cleanly reasoned! \u{1F9E0}","Significantly correct.","That one stuck \u2014 keep going!","An evidence-based answer. \u2713","Your hippocampus delivers."],no:["Almost! Check the why:","Good try \u2014 here's the catch:","No drama: errors are learning moments.","Close \u2014 the explanation helps:","That was the most popular distractor:"]}},yt=null;function Eu(i){let e=[...Array(i).keys()];for(let t=i-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function D_(i,e,t,n){let r=Fm(i),s=ys(i),a="";if(r&&r.length)if(I.quiz[s])a+=`<div class="quiz-done-banner">\u{1F6A9} ${k("quiz_bestanden")}</div>`;else{(!yt||yt.code!==s)&&(yt={code:s,i:0,oks:[],picked:null,order:Eu(r[0].a.length)});let m=yt,g=r[m.i];if((!m.order||m.order.length!==g.a.length)&&(m.order=Eu(g.a.length)),a+=`<p style="font-weight:800;margin-bottom:2px">\u{1F9E9} ${k("quiz_titel")}</p>`,I.mode==="serious"&&!Qe(i.slot)&&(a+=`<p style="font-size:11px;color:#b35c00;margin-bottom:6px">${k("quiz_gate_hint")}</p>`),a+=`<div class="quiz-progress">${[0,1,2].map(v=>`<span class="qp ${m.oks[v]?"done":v===m.i?"cur":""}"></span>`).join("")}</div>`,a+=`<p style="font-size:10.5px;color:#5b6478">${k("quiz_von").replace("{i}",m.i+1)}</p>`,a+=`<p class="quiz-q">${re(g.q)}</p>`,m.order.forEach(v=>{let y=g.a[v],x="";m.picked!==null&&(x=v===g.korrekt?"ok":v===m.picked?"no":""),a+=`<button class="quiz-a ${x}" data-ai="${v}" ${m.picked!==null?"disabled":""}>${re(y)}</button>`}),m.picked!==null){let v=m.picked===g.korrekt,y=Rm[I.lang]||Rm.de,x=(v?y.ok:y.no)[(m.i+g.korrekt)%5];a+=`<div class="quiz-erkl"><b>${v?"\u2705 ":"\u274C "}${x}</b><br>${re(g.erkl)}</div>`,nc&&!v&&(a+=`<button class="ghostbtn" data-qai style="margin-top:6px">${k("ai_quizhilfe")}</button><div data-qaiout class="quiz-erkl" style="display:none;margin-top:6px"></div>`);let T=m.i===r.length-1;v?T||(a+=`<button class="primary" style="margin-top:8px" data-qnext>${k("quiz_weiter")} \u2192</button>`):a+=`<button class="primary" style="margin-top:8px" data-qredo>\u21BA ${k("quiz_nochmal")}</button>`}}else I.mode==="serious"&&(a+=`<p style="font-size:11.5px;color:#8b94ab">${k("quiz_fehlt")}</p>`);let o=I.quests[i.slot]||{},c=t&&t.quest;a+=`<p style="font-weight:800;margin:12px 0 2px">\u2726 ${k("praxis_quest")}</p>`,a+=c?`<p><b>${re(c.titel)}</b></p><p style="margin-top:4px">${re(c.text)}</p>`:n,o.done&&(a+=`<p style="color:var(--ok);margin-top:8px"><b>\u2713 ${k("quest_abgeschlossen")}</b></p>`),a+=`<p style="font-weight:700;font-size:12px;margin:10px 0 3px">\u{1F4DD} ${k("notiz_titel")}</p>
    <textarea data-qnote rows="3" maxlength="500" placeholder="${k("notiz_ph")}" style="width:100%;border:1.5px solid #dbe1ef;border-radius:10px;padding:8px 10px;font:500 12px var(--font);resize:vertical">${mn(o.note)}</textarea>
    <p data-qnotesaved style="font-size:10px;color:#8b94ab;margin:2px 0 0;visibility:hidden">\u2713 ${k("notiz_gespeichert")}</p>`,nc&&c&&(a+=`<details style="margin-top:10px"><summary style="cursor:pointer;font:700 12px var(--font);color:var(--blue)">${k("ai_feedback")}</summary>
      <textarea data-aiq rows="3" placeholder="${k("ai_feedback_ph")}" style="width:100%;margin-top:6px;border:1.5px solid #dbe1ef;border-radius:10px;padding:8px 10px;font:500 12px var(--font)"></textarea>
      <button class="primary" data-aiqbtn style="margin-top:6px">${k("ai_senden")}</button>
      <div data-aiqout class="quiz-erkl" style="display:none;margin-top:6px"></div></details>`),nc&&["400","402","403","501","502","511","s05","s06","s08"].includes(i.slot)&&Cu&&(a+=`<button class="ghostbtn" data-aivig style="margin-top:10px">${k("ai_vignette")}</button>`),e.innerHTML=a;let h=e.querySelector("[data-aiqbtn]");h&&(h.onclick=async()=>{let m=e.querySelector("[data-aiq]"),g=e.querySelector("[data-aiqout]"),v=m.value.trim();if(v){g.style.display="block",g.textContent=k("ai_wartet");try{g.textContent=await Ru(`Du bist Tutor:in im Psychologiestudium UZH. Gib formatives Feedback (${I.lang==="de"?"Deutsch, Schweizer Rechtschreibung":"English"}, max. 90 W\xF6rter, keine Note) auf die L\xF6sung einer \xDCbungsaufgabe. Nenne genau EINE St\xE4rke und EINEN konkreten Verbesserungspunkt, freundlich und fachlich pr\xE4zise.
Aufgabe (\xAB${re(c.titel)}\xBB): ${re(c.text)}
L\xF6sung der/des Studierenden: ${v}
Feedback:`)}catch{g.textContent=k("tutor_err")}}});let u=e.querySelector("[data-aivig]");u&&(u.onclick=()=>Cu.open("vignette",i));let d=e.querySelector("[data-qnote]");if(d){let m=null;d.addEventListener("input",()=>{let g=I.quests[i.slot]||{done:!1,note:""};g.note=d.value.trim().slice(0,500),I.quests[i.slot]=g,rt(),clearTimeout(m),m=setTimeout(()=>{let v=e.querySelector("[data-qnotesaved]");v&&(v.style.visibility="visible",setTimeout(()=>{v.style.visibility="hidden"},1600))},500)})}e.querySelectorAll(".quiz-a").forEach(m=>m.onclick=()=>{if(!yt||yt.picked!==null)return;let g=+m.dataset.ai,v=r[yt.i];yt.picked=g,yt.oks[yt.i]=g===v.korrekt,g===v.korrekt?SND.quest():SND.err(),yt.i===r.length-1&&yt.oks.every(Boolean)&&yt.oks.length===r.length&&(I.quiz[s]=!0,rt(),setTimeout(()=>{SND.fanfare();let x=Nt[i.slot];x&&Ba(x.position.x,x.position.y+2.5,x.position.z,60,3),Qe(i.slot)&&xi(i.slot),Vm(),qt(),Gi(i),ri(i)},900)),Gi(i)});let p=e.querySelector("[data-qnext]");p&&(p.onclick=()=>{yt.i++,yt.picked=null,yt.order=null,Gi(i)});let f=e.querySelector("[data-qredo]");f&&(f.onclick=()=>{yt.picked=null,yt.order=Eu(r[yt.i].a.length),Gi(i)});let _=e.querySelector("[data-qai]");_&&(_.onclick=async()=>{let m=e.querySelector("[data-qaiout]");m.style.display="block",m.textContent=k("ai_wartet");let g=r[yt.i];try{m.innerHTML=(await Ru(`Du bist Tutor:in im Psychologiestudium UZH. Eine Person hat diese Quizfrage falsch beantwortet. Erkl\xE4re das Konzept in 2 S\xE4tzen NEU (anders als die Standarderkl\xE4rung) und stelle dann GENAU EINE kurze \xDCbungsfrage dazu, gefolgt von \xABMusterantwort:\xBB und einer 1-Satz-Musterantwort. Sprache: ${I.lang==="de"?"Deutsch (Schweizer Rechtschreibung)":"English"}.
Frage: ${re(g.q)}
Richtige Antwort: ${re(g.a[g.korrekt])}
Gew\xE4hlte falsche Antwort: ${re(g.a[yt.picked])}`)).replace(/Musterantwort:([\s\S]*)$/i,(v,y)=>`<details style="margin-top:4px"><summary style="cursor:pointer;font-weight:700">${I.lang==="de"?"Musterantwort anzeigen":"Show model answer"}</summary>${y.trim()}</details>`)}catch{m.textContent=k("tutor_err")}})}function ri(i){let e=document.getElementById("cardActions");if(e.innerHTML="",Kt.active)return;let t=Qe(i.slot);if(i.optionen&&!t){let r=document.createElement("div");r.className="optpick",r.innerHTML=`<span>${k("optionwahl")}</span>`,i.optionen.forEach(s=>{let a=document.createElement("button");a.textContent=fn[s]?re(fn[s].titel):s,a.classList.toggle("on",bi===s),a.onclick=()=>{bi=s,ri(i),Gi(i)},r.appendChild(a)}),e.appendChild(r)}if(i.schwerpunktwahl){let r=document.createElement("div");r.className="schwerpick",r.innerHTML=`<span>${k("schwerpunkt")}</span>`,Object.keys(Z.schwerpunkte).forEach(s=>{let a=document.createElement("button");a.textContent=s,a.title=re(Z.schwerpunkte[s].name),a.setAttribute("aria-label",re(Z.schwerpunkte[s].name)),a.style.borderColor=Z.schwerpunkte[s].farbe;let o=t?I.placed[I.mode][i.slot].sp||"DeNC":Ga;a.classList.toggle("on",o===s),a.onclick=()=>{t?(I.placed[I.mode][i.slot].sp=s,rt(),xi(i.slot)):Ga=s,ri(i),qt()},r.appendChild(a)}),e.appendChild(r)}if(_s[i.slot]){let r=document.createElement("div");r.className="schwerpick themapick",r.innerHTML=`<span>${k("thema")}</span>`,_s[i.slot].forEach(a=>{let o=document.createElement("button");o.textContent=re(a.name),o.title=re((Z.richtungen[a.r]||{}).kurz||a.name),o.style.borderColor=(Z.richtungen[a.r]||{}).farbe||"#b9c2d9";let c=t?I.placed[I.mode][i.slot].thema||null:us;o.classList.toggle("on",c===a.id),o.onclick=()=>{t?(I.placed[I.mode][i.slot].thema=I.placed[I.mode][i.slot].thema===a.id?null:a.id,i.slot==="BA"&&(I.placed[I.mode].BA.frage=null),rt(),xi(i.slot)):(us=us===a.id?null:a.id,i.slot==="BA"&&(ds=null),pn&&Fa(pn)),ri(i),qt(),en()},r.appendChild(o)});let s=document.createElement("p");s.style.cssText="font-size:10px;color:#8b94ab;margin:2px 4px 0",s.textContent=k("thema_hint"),r.appendChild(s),e.appendChild(r)}if(i.slot==="BA"&&Z.baFragen){let r=t?I.placed[I.mode].BA.thema||null:us;if(r&&Z.baFragen[r]){let s=document.createElement("div");s.className="schwerpick themapick",s.innerHTML=`<span>${k("frage")}</span>`,Z.baFragen[r].forEach(o=>{let c=(Z.baFormen||{})[o.form]||{},l=document.createElement("button");l.textContent=`${c.icon||""} ${re(o.name)}`,l.title=re(c.name||o.name);let h=t?I.placed[I.mode].BA.frage||null:ds;l.classList.toggle("on",h===o.id),l.onclick=()=>{t?(I.placed[I.mode].BA.frage=I.placed[I.mode].BA.frage===o.id?null:o.id,rt()):ds=ds===o.id?null:o.id,ri(i),en()},s.appendChild(l)});let a=document.createElement("p");a.style.cssText="font-size:10px;color:#8b94ab;margin:2px 4px 0",a.textContent=k("frage_hint"),s.appendChild(a),e.appendChild(s)}{let s=document.createElement("div");s.className="schwerpick themapick",s.innerHTML=`<span>${k("artefakt")}</span>`,(Z.baArtefakte||[]).forEach(o=>{let c=document.createElement("button");c.textContent=`${o.icon} ${re(o.name)}`,c.title=re(o.kurz);let l=t?I.placed[I.mode].BA.artefakt||null:Ua;c.classList.toggle("on",l===o.id),c.onclick=()=>{t?(I.placed[I.mode].BA.artefakt=I.placed[I.mode].BA.artefakt===o.id?null:o.id,rt(),xi("BA")):Ua=Ua===o.id?null:o.id,ri(i)},s.appendChild(c)});let a=document.createElement("p");a.style.cssText="font-size:10px;color:#8b94ab;margin:2px 4px 0",a.textContent=k("artefakt_hint"),s.appendChild(a),e.appendChild(s)}}{let r=document.createElement("div");r.className="stilpick",r.innerHTML=`<span>${k("stil")}</span>`,Z.stile.forEach(s=>{let a=document.createElement("button");a.textContent=re(s.name);let o=t?I.placed[I.mode][i.slot].stil||"klassisch":Ha;a.classList.toggle("on",o===s.id),a.onclick=()=>{t?(I.placed[I.mode][i.slot].stil=s.id,rt(),xi(i.slot)):(Ha=s.id,pn&&Fa(pn)),ri(i)},r.appendChild(a)}),e.appendChild(r)}if(I.mode==="serious"&&!t){let r=document.createElement("label");r.className="sw",r.innerHTML=`<input type="checkbox" ${I.bestanden[i.slot]?"checked":""}> <span>${k("bestanden")}</span>`,r.querySelector("input").onchange=s=>{I.bestanden[i.slot]=s.target.checked,rt(),qt(),pn&&Fa(pn),ri(i)},e.appendChild(r)}let n=(i.empf||[]).filter(r=>!Qe(r));if(!t&&n.length){let r=document.createElement("div");r.className="reason",r.style.color="#b35c00",r.textContent=k("empf_hinweis")+n.map(s=>re(_t[s].titel).split(",")[0]).join(" \xB7 "),e.appendChild(r)}if(t){let r=I.quests[i.slot]||{},s=document.createElement("button");if(s.className=r.done?"ghostbtn":"primary",s.textContent=r.done?k("quest_undone"):k("quest_done"),s.onclick=()=>{let a=I.quests[i.slot]||{done:!1,note:""};if(r.done)I.quests[i.slot]={done:!1,note:a.note||""},i_(Nt[i.slot]),xi(i.slot);else{I.quests[i.slot]={done:!0,note:a.note||""},Gm(Nt[i.slot],i),SND.quest();let o=Nt[i.slot];Ba(o.position.x,o.position.y+2,o.position.z,40,2.5),xi(i.slot)}rt(),qt(),ri(i),Gi(i)},e.appendChild(s),["box","tower","wing","bay","slab","step"].includes(i.form)){let a=document.createElement("button");a.className="ghostbtn",a.textContent=i.form==="slab"||i.form==="step"?"\u{1F526} "+k("keller"):k("betreten"),a.onclick=()=>sf(i.slot),e.appendChild(a)}{let a=document.createElement("button");a.className="ghostbtn",a.textContent=k("entfernen"),a.onclick=()=>p_(i.slot),e.appendChild(a)}}else{let r=Wi(i),s=document.createElement("button");if(s.className="primary",s.textContent=k("bauen"),s.disabled=!r.ok,s.onclick=()=>qa(i),e.appendChild(s),!r.ok&&r.reason){let a=document.createElement("div");a.className="reason",a.textContent=r.reason,e.appendChild(a)}}}function xi(i){let e=_t[i],t=Nt[i];t&&ji.remove(t);let n=$a(e);ju(n,e),ji.add(n),Nt[i]=n,oc()}function Xu(i){i==="serious"&&!I.seriousSeen&&(I.seriousSeen=!0,setTimeout(()=>alert(k("serious_erklaert")),150)),I.mode=i,rt(),document.getElementById("modeFrei").classList.toggle("on",i==="frei"),document.getElementById("modeSerious").classList.toggle("on",i==="serious"),Xi(),yr(),Xa(),qt(),en(),wt(k(i==="serious"?"serious_info":"frei_info"))}document.getElementById("modeFrei").onclick=()=>Xu("frei");document.getElementById("modeSerious").onclick=()=>Xu("serious");typeof I.sound>"u"&&(I.sound=!0);SND.enabled=I.sound;var Uu=document.getElementById("btnSound");Uu.textContent=I.sound?"\u{1F50A}":"\u{1F507}";Uu.onclick=()=>{I.sound=!I.sound,SND.enabled=I.sound,rt(),Uu.textContent=I.sound?"\u{1F50A}":"\u{1F507}",I.sound&&SND.pick()};document.getElementById("btnLang").onclick=()=>{I.lang=I.lang==="de"?"en":"de",rt(),Bu(),qt(),en(),zn&&cc(zn),nf()};var F_={menu:"modalMenu",help:"modalHelp",privacy:"modalPrivacy",about:"modalAbout",share:"modalShare",onboard:"modalOnboard",p0:"modalP0",minor:"modalMinor",bauhuette:"modalBauhuette",geraete:"modalGeraete",changelog:"modalChangelog"};function sn(i){document.getElementById(F_[i]).classList.add("open")}document.querySelectorAll(".modal").forEach(i=>{i.addEventListener("click",e=>{(e.target===i||e.target.hasAttribute("data-close"))&&i.classList.remove("open")})});document.getElementById("btnMenu").onclick=()=>sn("menu");document.getElementById("btnHelp").onclick=()=>{sn("help")};document.getElementById("btnPrivacy").onclick=()=>sn("privacy");document.getElementById("btnAbout").onclick=()=>sn("about");function nf(){document.getElementById("helpBox").innerHTML=window.HELP_HTML[I.lang]+`<div class="mactions"><button class="primary" data-close>${k("schliessen")}</button></div>`,document.getElementById("privacyBox").innerHTML=window.PRIVACY_HTML[I.lang]+`<div class="mactions"><button class="primary" data-close>${k("schliessen")}</button></div>`,document.getElementById("aboutBox").innerHTML=window.ABOUT_HTML[I.lang]+`<div class="mactions"><button class="primary" data-close>${k("schliessen")}</button></div>`;let i=document.getElementById("ckDirektMsc");i&&(i.checked=I.direktMSc,i.onchange=e=>{I.direktMSc=e.target.checked,rt(),qt(),wt(k("direkt_msc"))}),rf()}function rf(){for(let i of["bsc","msc"]){let e=document.getElementById(i==="bsc"?"palRowBsc":"palRowMsc");e&&(e.innerHTML=`<span>${i==="bsc"?"\u{1F3E0}":"\u{1F3F0}"}</span>`,(Z.paletten||[]).forEach(t=>{let n=document.createElement("button");n.textContent=re(t.name),n.style.borderColor=t.akzent,n.classList.toggle("on",((I.pal||{})[i]||"uzh")===t.id),n.onclick=()=>{I.pal||(I.pal={bsc:"uzh",msc:"uzh"}),I.pal[i]=t.id,rt(),Xa(),rf(),SND.pick()},e.appendChild(n)}))}}document.getElementById("btnExport").onclick=()=>{let i=new Blob([JSON.stringify(I,null,2)],{type:"application/json"}),e=document.createElement("a");e.href=URL.createObjectURL(i),e.download="kompetenzhaus-"+new Date().toISOString().slice(0,10)+".json",e.click(),URL.revokeObjectURL(e.href)};document.getElementById("btnImport").onclick=()=>document.getElementById("fileImport").click();document.getElementById("fileImport").onchange=i=>{let e=i.target.files[0];if(!e)return;if(!confirm(k("import_confirm"))){i.target.value="";return}let t=new FileReader;t.onload=()=>{try{I=Object.assign(gs(),JSON.parse(t.result)),rt(),Bu(),Xa(),qt(),en(),vr(),Xu(I.mode),wt(k("import_ok"))}catch{wt(k("import_err"))}},t.readAsText(e)};document.getElementById("btnReset").onclick=()=>{confirm(k("reset_confirm"))&&(I=gs(),I.onboarded=!0,rt(),Xi(),yr(),Xa(),qt(),en(),vr())};function N_(){let i={n:I.name,p:I.placed[I.mode],q:Object.fromEntries(Object.entries(I.quests).filter(([e,t])=>t.done).map(([e,t])=>[e,1]))};return btoa(unescape(encodeURIComponent(JSON.stringify(i))))}document.getElementById("btnShare").onclick=()=>{let i=(location.origin==="null"||location.protocol==="file:",location.href.split("#")[0]);document.getElementById("shareLink").value=i+"#h="+N_(),sn("share")};document.getElementById("btnCopy").onclick=async()=>{let i=document.getElementById("shareLink");i.select();try{await navigator.clipboard.writeText(i.value)}catch{document.execCommand("copy")}wt(k("kopiert"))};function U_(){if(!location.hash.startsWith("#h="))return!1;try{let i=JSON.parse(decodeURIComponent(escape(atob(location.hash.slice(3)))));return Kt.active=!0,Kt.data=i,I.placed={frei:i.p||{},serious:{}},I.mode="frei",I.quests=Object.fromEntries(Object.entries(i.q||{}).map(([e])=>[e,{done:!0,note:""}])),document.getElementById("visitorText").textContent=`${k("besuch_bei")} ${i.n||"?"} \u{1F3E0}`,document.getElementById("visitor").classList.add("open"),document.getElementById("panelL").style.display="none",document.getElementById("modeSeg").style.display="none",!0}catch{return!1}}document.getElementById("visitorOwn").onclick=()=>{location.hash="",location.reload()};document.getElementById("visitorSave").onclick=()=>{try{let i=Wa&&JSON.parse(localStorage.getItem(fs)||"null")||gs();i.nachbarn=(i.nachbarn||[]).filter(e=>e.n!==Kt.data.n).slice(0,2),i.nachbarn.push(Kt.data),localStorage.setItem(fs,JSON.stringify(i)),wt(k("nachbar_gespeichert"))}catch{}};var Ia=!1,ka=new Be;Ye.add(ka);function k_(i){let e=document.createElement("canvas");e.width=512,e.height=128;let t=e.getContext("2d");t.font="700 52px Helvetica, Arial",t.textAlign="center",t.fillStyle="rgba(255,255,255,.92)";let n=t.measureText(i).width+60;t.beginPath(),t.roundRect((512-n)/2,18,n,92,26),t.fill(),t.fillStyle="#0028a5",t.fillText(i,256,82);let r=new Kr(e),s=new Xr(new rr({map:r,transparent:!0}));return s.scale.set(7,1.75,1),s}function B_(){ka.clear();let i=[[-27,-23],[0,-28],[27,-23]],e=.75;(I.nachbarn||[]).slice(0,3).forEach((t,n)=>{let[r,s]=i[n],a=new Be;for(let[c,l]of Object.entries(t.p||{})){let h=_t[c];if(!h)continue;let u=$a(h,{state:l,placedMap:t.p}),d=Z.haeuser[h.haus];u.position.set(r+d.origin[0]*.45+h.pos.x*Ke*e,ac(h.pos.y)*e,s+h.pos.z*Ke*e),u.scale.set(e,e,e),a.add(u)}let o=k_(t.n||"?");o.position.set(r,9,s),a.add(o),ka.add(a)}),ka.visible=Ia}document.getElementById("btnCampus").onclick=()=>{Ia=!Ia,B_(),ka.visible=Ia,Ia?(On(new M(0,40,52),new M(0,2,-7),1.6),wt(k("campus_an"))):(On(new M(-23,17,30),new M(-7,3,0),1.4),wt(k("campus_aus")))};document.getElementById("btnPass").onclick=()=>{let{score:i,max:e}=xs(),t=new Date().toLocaleDateString(I.lang==="de"?"de-CH":"en-GB"),n="";for(let u of Z.slots){if(!Qe(u.slot))continue;let d=I.placed[I.mode][u.slot],p=I.quests[u.slot]||{},{kat:f}=Yt(u),_=d&&d.opt&&fn[d.opt]?fn[d.opt].ects:u.ects,m=(()=>{let g=Lm(u.slot),v=g?" \xB7 "+re(g.name):"";if(u.slot==="BA"){let y=ps(),x=La();y&&(v+=" \xB7 "+(((Z.baFormen||{})[y.form]||{}).icon||"")+" "+re(y.name)),x&&(v+=" \xB7 "+x.icon+" "+re(x.name))}return v})();n+=`<tr><td>${d&&d.opt||u.code}</td><td>${Ut(u)}${d&&d.sp?" \xB7 "+d.sp:""}${m}</td><td style="text-align:center">${_}</td><td style="text-align:center">[${f}]</td><td>${p.done?"\u2726 ":""}${p.note?(p.done?"":"\u{1F4DD} ")+mn(p.note):""}</td></tr>`}let r="";for(let u of["fa","ki","fu"]){let d=Z.felder[u];r+=`<h3 style="margin:14px 0 6px;color:${d.farbe}">${re(d.name)}</h3>`;for(let p of Z.kompetenzen.filter(f=>f.feld===u)){let f=e[p.id]?Math.round(i[p.id]/e[p.id]*100):0;if(r+=`<div style="display:flex;align-items:center;gap:8px;margin:3px 0;font-size:12px">
        <span style="width:260px">${p.id} \xB7 ${re(p.name)}</span>
        <span style="flex:1;background:#eee;border-radius:4px;height:10px;overflow:hidden"><span style="display:block;height:100%;width:${f}%;background:${d.farbe}"></span></span>
        <span style="width:36px;text-align:right">${f}%</span></div>`,p.sub&&p.sub.length)for(let _ of p.sub){let m=Jm(_,i,e);r+=`<div style="display:flex;align-items:center;gap:8px;margin:1px 0 1px 22px;font-size:10.5px;color:#555">
            <span style="width:238px">${_.id} \xB7 ${re(_.name)}</span>
            <span style="flex:1;background:#f2f2f2;border-radius:3px;height:6px;overflow:hidden"><span style="display:block;height:100%;width:${m}%;background:${d.farbe};opacity:.65"></span></span>
            <span style="width:36px;text-align:right">${m}%</span></div>`}}}r+='<p style="font-size:9.5px;color:#8b94ab;margin-top:4px">FS1\u2013FS12: AIComp-Future-Skills-Felder (Ehlers et al., 2024) \u2014 Detailebene zu Fu1\u2013Fu3.</p>';let s=window.ICH_STUFEN||{},a=window.ICH_LERNZIELE||{},o=`<div style="page-break-before:always"></div>
  <h2 style="color:#0028a5;margin:8px 0 2px">\u{1F9ED} ${k("ich_titel")}</h2>
  <p style="font-size:11px;color:#5b6478;line-height:1.5;margin-bottom:6px">${k("ich_intro")}</p>`;for(let u of["fa","ki","fu"]){let d=Z.felder[u],p=u==="fa"?"F":u==="ki"?"K":"S";o+=`<h3 style="color:${d.farbe};border-bottom:2.5px solid ${d.farbe};padding-bottom:3px;margin:16px 0 6px">${re(d.name)}</h3>`;let f=!1;for(let m of Z.kompetenzen.filter(g=>g.feld===u)){let g=vs(m.id);if(!g)continue;f=!0;let v=(s[m.id]||[])[g-1];o+=`<div style="margin:8px 0 2px;display:flex;align-items:baseline;gap:8px;flex-wrap:wrap">
        <b style="font-size:12px">${m.id} \xB7 ${re(m.name)}</b>
        <span style="font-size:9px;font-weight:700;color:#fff;background:${d.farbe};border-radius:999px;padding:2px 8px;white-space:nowrap">${k("stufe")} ${g} \xB7 ${re(Z.stufen[g-1].name)}</span></div>`,v&&(o+=`<p style="font-size:11.5px;font-style:italic;color:#2c3550;margin:0 0 2px 2px">\xAB${re(v)}\xBB</p>`)}if(!f){o+=`<p style="font-size:10.5px;color:#8b94ab">${k("ich_keine")}</p>`;continue}let _="";for(let m of Z.slots){if(!Qe(m.slot))continue;let g=(I.placed[I.mode][m.slot]||{}).opt||m.code;(a[g]||[]).forEach(v=>{if(!(v.b||[]).includes(p))return;let y=tf(m,[p]).map(x=>`<b style="color:${d.farbe}">${x}</b>`).join(" ");_+=`<li style="margin:3px 0">${y?y+" \u2014 ":""}${re(v)} <span style="color:#8b94ab;font-size:9px;white-space:nowrap">\xB7 ${Ut(m).split(",")[0]}</span></li>`})}_&&(o+=`<p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#5b6478;margin:9px 0 2px">\u2713 ${k("ich_konkret")}</p>
      <ul style="font-size:10.5px;line-height:1.5;padding-left:16px;margin:0 0 8px">${_}</ul>`)}o+=`<p style="font-size:9.5px;color:#8b94ab;margin-top:6px">${k("ich_fussnote")}</p>`;let c=O_(),l=`<!DOCTYPE html><html lang="${I.lang}"><head><meta charset="utf-8"><title>Kompetenzpass</title>
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
  <h1>\u{1F393} ${k("pass")} \u2014 ${mn(I.name)||"\u2014"}</h1>
  <p style="font-size:12.5px;color:#5b6478">${k("passdatum")}: ${t} \xB7 ${I.mode==="serious"?k("modus_serious"):k("modus_frei")} \xB7 BSc: ${oi("bsc")}/120 \xB7 MSc: ${oi("msc")}/120 ${k("ects")}</p>
  ${c?`<img src="${c}" alt="Kompetenzhaus" style="width:100%;border-radius:12px;margin:8px 0">`:""}
  ${r}
  ${o}
  <h3 style="margin-top:18px">${k("bauplan")}</h3>
  <table><tr><th>Code</th><th>Modul</th><th>${k("ects")}</th><th>[A/B/C]</th><th>Quest \u2726</th></tr>${n}</table>
  <p class="hint">${re(Z.meta.hinweis)}<br>Kompetenzmodell: APA (2023); DGPs (2014); QAA (2023); Bass et al. (2025); Miao et al. (2024); Ehlers et al. (2024); Perkins et al. (2025).</p>
  </body></html>`,h=window.open("about:blank");if(h&&h.document)h.document.write(l),h.document.close();else{let u=new Blob([l],{type:"text/html"}),d=document.createElement("a");d.href=URL.createObjectURL(u),d.download="kompetenzpass.html",d.click(),URL.revokeObjectURL(d.href)}};function qu(){if(!I.envAuto)return;I.season=ku();let i=new Date,e=i.getHours()+i.getMinutes()/60;I.tod=Math.max(0,Math.min(100,Math.round((e-5.5)/17*100)));let t=document.getElementById("todSlider");t&&(t.value=I.tod),vr()}document.querySelectorAll("#envRow .envbtn[data-season]").forEach(i=>{i.onclick=()=>{I.envAuto=!1,I.season=i.dataset.season,rt(),vr()}});document.getElementById("todSlider").oninput=i=>{I.envAuto=!1,I.tod=+i.target.value,rt(),vr()};document.getElementById("btnEnvAuto").onclick=()=>{I.envAuto=!I.envAuto,rt(),I.envAuto&&qu(),vr(),wt(k(I.envAuto?"envauto_an":"envauto_aus"))};setInterval(qu,6e4);document.getElementById("btnFoto").onclick=()=>{document.body.classList.add("foto");let i=Pt.position.clone(),e=Ht.target.clone(),t=Dm()&&oi("msc")>0?new M(0,3.5,0):new M(-11,3.5,0);On(new M(t.x-19,13,28),t,1.2,()=>{uc(),Sn.render(Ye,Pt);try{let n=document.createElement("a");n.href=Sn.domElement.toDataURL("image/png"),n.download="kompetenzhaus-"+new Date().toISOString().slice(0,10)+".png",n.click(),wt("\u{1F4F7} "+k("foto_hint"))}catch{}setTimeout(()=>{document.body.classList.remove("foto"),On(i,e,1)},600)})};function O_(){Sn.render(Ye,Pt);try{return Sn.domElement.toDataURL("image/jpeg",.82)}catch{return null}}document.getElementById("togL").onclick=()=>document.getElementById("panelL").classList.toggle("open");document.getElementById("togR").onclick=()=>document.getElementById("panelR").classList.toggle("open");var bt=null;function ct(i,e,t,n,r,s,a,o=0){let c=new V(new It(i,e,t,2,Math.min(.04,i/4)),new ne({color:n,roughness:.85}));return c.position.set(r,s,a),c.rotation.y=o,c}function z_(i,e,t,n){let r=new Be,s=i.form==="slab"||i.form==="step",a=new ne({color:s?14276043:15986662,roughness:.97,side:pt}),o=new ne({color:s?11841702:13215863,roughness:.92}),c=e-.2,l=t-.15,h=n-.2,u=new V(new Ge(c,.06,h),o);u.position.y=.05,r.add(u);let d=new V(new Ze(c,l),a);d.position.set(0,l/2,-h/2),r.add(d),d.userData.wallN=new M(0,0,1);let p=new V(new Ze(h,l),a.clone());p.rotation.y=Math.PI/2,p.position.set(-c/2,l/2,0),r.add(p),p.userData.wallN=new M(1,0,0);let f=new V(new Ze(h,l),a.clone());f.rotation.y=-Math.PI/2,f.position.set(c/2,l/2,0),r.add(f),f.userData.wallN=new M(-1,0,0);let _=i.gruppe,m=.08,g=i.code;if(s&&g==="06SM200-001"){for(let L=0;L<2;L++){let z=ct(.52,.6,.5,16053488,-c*.3+L*.62,m+.3,-h*.32);r.add(z);let G=new V(new ei(.15,18),new ne({color:1845056,roughness:.25,metalness:.3}));G.position.set(-c*.3+L*.62,m+.32,-h*.32+.26),r.add(G)}let w=new V(new We(.2,.16,.26,9),new ne({color:14263361,roughness:1,flatShading:!0}));w.position.set(c*.22,m+.13,h*.1),r.add(w);let P=new V(new We(.012,.012,c*.7,5),new ne({color:9147563}));P.rotation.z=Math.PI/2,P.position.set(0,l*.78,h*.2),r.add(P),[14248523,4886745,15979342].forEach((L,z)=>r.add(ct(.16,.22,.02,L,-.3+z*.3,l*.78-.12,h*.2)))}else if(s&&g==="06SM200-002"){let w=new V(new We(.3,.3,.85,12),new ne({color:13193021,roughness:.55,metalness:.25}));w.position.set(-c*.28,m+.43,-h*.28),r.add(w);let P=new V(new We(.05,.05,c*.75,8),new ne({color:10134197,metalness:.6,roughness:.35}));P.rotation.z=Math.PI/2,P.position.set(0,l*.85,-h/2+.12),r.add(P);let L=new V(new We(.05,.05,l*.7,8),P.material);L.position.set(-c*.28,l*.5,-h/2+.12),r.add(L),r.add(ct(.42,.55,.16,9147563,c*.28,l*.55,-h/2+.12));let z=new V(new ei(.09,14),new ne({color:16053488}));z.position.set(c*.28,l*.55,-h/2+.22),r.add(z)}else if(s&&g==="06SM200-003"){let w=new V(new We(.02,.02,c*.7,6),new ne({color:9070146}));w.rotation.z=Math.PI/2,w.position.set(0,l*.7,-h*.3),r.add(w),[10405,14248523,2792847].forEach((P,L)=>r.add(ct(.2,.34,.06,P,-.3+L*.3,l*.7-.2,-h*.3))),r.add(ct(c*.6,.09,.28,9070146,0,m+.1,h*.2))}else if(s&&g==="06SM200-500"){for(let w=0;w<2;w++){let P=ct(.42,1,.4,1844019,-c*.25+w*.6,m+.5,-h*.3);r.add(P);for(let L=0;L<4;L++){let z=new V(new Ze(.3,.02),new ne({color:988970,emissive:L%2?3526783:4886745,emissiveIntensity:.9}));z.position.set(-c*.25+w*.6,m+.24+L*.2,-h*.3+.21),r.add(z)}}r.add(ct(.7,.06,.4,9070146,c*.24,m+.36,h*.12))}else if(s&&g==="06SM200-501"){let w=ct(1.1,1.05,.26,9070146,-c*.2,m+.53,-h*.32);r.add(w),[14248523,10405,2792847,14263361,6185166,14774357].forEach((P,L)=>r.add(ct(.26,.09,.2,P,-c*.2-.38+L%3*.38,m+.4+Math.floor(L/3)*.34,-h*.32)))}else if(s&&g==="06SM200-502"){for(let w=0;w<2;w++)r.add(ct(.9,.95,.24,10127986,-c*.22+w*1,m+.48,-h*.33));[13287336,12173519,14263361,13287336].forEach((w,P)=>r.add(ct(.3,.22,.3,w,-c*.3+P%2*.5,m+.3+Math.floor(P/2)*.35,-h*.33)))}else if(_==="meth"||_==="mein"){r.add(ct(.9,.06,.5,9070146,-c*.2,m+.38,-h*.25));let w=new V(new Ze(.5,.32),new ne({color:792624,emissive:8369384,emissiveIntensity:.55}));w.position.set(-c*.2,m+.62,-h*.25),r.add(w),r.add(ct(.34,.5,.34,3752282,-c*.2,m+.25,h*.05))}else if(_==="prop"){for(let w=0;w<2;w++)for(let P=0;P<3;P++)r.add(ct(.34,.42,.3,4156616,(P-1)*.5,m+.21,h*.05+w*.45));r.add(ct(.8,.55,.35,9070146,0,m+.28,-h*.3))}else if(_==="klin"){r.add(ct(.45,.4,.42,14248523,-c*.22,m+.2,0,.5)),r.add(ct(.45,.4,.42,2792847,c*.22,m+.2,0,-.5)),r.add(ct(.32,.3,.32,9070146,0,m+.15,-h*.05));let w=new V(new Tt(.16,0),new ne({color:5149760,flatShading:!0}));w.position.set(c*.34,m+.45,-h*.32),r.add(w),r.add(ct(.1,.28,.1,12159578,c*.34,m+.14,-h*.32))}else if(_==="enk"){r.add(ct(.3,.55,.3,14212326,0,m+.28,-h*.15));let w=new V(new Tt(.2,1),new ne({color:15245492,roughness:.6,flatShading:!0}));w.position.set(0,m+.72,-h*.15),w.name="spin",r.add(w)}else if(_==="swod"){let w=new V(new We(.42,.42,.06,12),new ne({color:9070146,roughness:.85}));w.position.set(0,m+.4,0),r.add(w),r.add(ct(.08,.4,.08,7033144,0,m+.2,0));for(let P=0;P<4;P++){let L=P/4*Math.PI*2;r.add(ct(.3,.38,.28,14263361,Math.cos(L)*.72,m+.19,Math.sin(L)*.72,-L))}}else{let w=ct(1.1,1.1,.24,9070146,-c*.24,m+.55,-h*.36);r.add(w),[14248523,2792847,4156616,14263361,6185166].forEach((P,L)=>r.add(ct(.1,.26,.16,P,-c*.24-.4+L*.2,m+.78,-h*.36))),r.add(ct(.7,.06,.45,11109726,c*.2,m+.38,0)),r.add(ct(.3,.44,.3,3752282,c*.2,m+.22,h*.28))}let v=new ha(16769971,s?.75:.95,Math.max(c,h)*3.2,1.8);v.position.set(0,l*.86,0),r.add(v);let y=new V(new Fn(.14,.12,10,1,!0),new ne({color:15979342,side:pt,emissive:16769971,emissiveIntensity:.35}));if(y.position.set(0,l*.9,0),r.add(y),!s){let w=new V(new Ze(c,h),new ne({color:15262938,side:pt,roughness:1}));w.rotation.x=Math.PI/2,w.position.y=l,r.add(w)}if(s){for(let w of[-c*.28,c*.28]){let P=new V(new Ze(.44,.2),new ne({color:12376302,emissive:12376302,emissiveIntensity:.4}));P.position.set(w,l*.9,-h/2+.02),r.add(P)}if(h>3.2){let P=l/7;for(let L=0;L<6;L++){let z=new V(new Ge(.78,P,.36),Zl.clone());z.position.set(c/2-.44,P/2+L*P,h/2-.28-(5-L)*.37),r.add(z)}}}else{let w=new V(new ei(Math.min(c,h)*.32,22),new ne({color:new de(Z.gruppen[i.gruppe].farbe).lerp(new de(16777215),.62),roughness:1}));w.rotation.x=-Math.PI/2,w.position.y=.09,r.add(w);let P=ct(.5,.38,.03,15921385,c/2-.06,l*.6,0,Math.PI/2);r.add(P);let L=new V(new Ze(.4,.28),new ne({color:10404832}));L.rotation.y=-Math.PI/2,L.position.set(c/2-.085,l*.6,0),r.add(L);let z=new V(new Fn(.09,.12,4),new ne({color:5143130,flatShading:!0}));z.rotation.y=-Math.PI/2,z.position.set(c/2-.09,l*.57,.03),r.add(z)}i.code==="06SM200-003"&&[{p:"P1",info:{de:"P1 \xB7 \xABWie \u2039denkt\u203A ein LLM?\xBB \u2014 Live-Demo, Falschinfo finden (KI4)",en:"P1 \xB7 'How does an LLM think?' \u2014 live demo, spotting misinformation (KI4)"}},{p:"P2",info:{de:"P2 \xB7 Spielregeln & Disclosure \u2014 \xABassistieren, nicht ersetzen \u2014 deklarieren \u2014 verifizieren\xBB (KI5)",en:"P2 \xB7 Rules & disclosure \u2014 'assist, don't replace \u2014 declare \u2014 verify' (KI5)"}},{p:"P3",info:{de:"P3 \xB7 Fakten-Check \u2014 erfundene Referenzen gegen das Lehrbuch pr\xFCfen (KI6)",en:"P3 \xB7 Fact check \u2014 testing invented references against the textbook (KI6)"}},{p:"P4",info:{de:"P4 \xB7 Erste Nutzung mit Haltung \u2014 Prompt-Duell, Mit-/Ohne-KI-Reflexion (KI1)",en:"P4 \xB7 First use with attitude \u2014 prompt duel, with/without-AI reflection (KI1)"}}].forEach((P,L)=>{let z=new Be,G=new V(new Ze(.34,.44),new ne({color:16777215,roughness:.7})),B=Oa(P.p,"#0028a5");B.scale.set(.4,.16,1),B.position.z=.02,z.add(G,B),z.rotation.y=Math.PI/2,z.position.set(-c/2+.03,l*.55,-h*.3+L*.5),z.children.forEach(Y=>Y.userData.info=P.info),z.userData.info=P.info,r.add(z)});let{komp:x,haupt:T}=Yt(i),R=[...x.fa||[],...x.ki||[],...x.fu||[]].slice(0,6);return R.forEach((w,P)=>{let L=gn[w];if(!L)return;let z=Z.felder[L.feld].farbe,G=new Be,B=new V(new Ze(.56,.42),new ne({color:16777215,roughness:.6})),Y=Oa(w,z);Y.scale.set(.62,.24,1),Y.position.z=.02,G.add(B,Y);let W=Math.min(3,R.length),J=(P%W-(W-1)/2)*.75,Q=l*.62-Math.floor(P/W)*.55;G.position.set(J,Q,-h/2+.03),G.userData.kompId=w,G.children.forEach(le=>le.userData.kompId=w),r.add(G)}),r.traverse(w=>{w.isMesh&&(w.castShadow=!1,w.receiveShadow=!1)}),r}function sf(i){bt&&Va();let e=_t[i],t=Nt[i];if(!e||!t||!["box","tower","wing","bay","slab","step"].includes(e.form))return;let n=e.form==="slab"||e.form==="step",r=e.pos.w*Ke,s=e.pos.d*Ke,a=n?Pa-.12:(e.form==="wing"?1.7:e.pos.h)*En,o=z_(e,r,a,s);o.position.copy(t.position),n&&(o.position.y=.24-Pa),Ye.add(o);let c=[];if(t.traverse(_=>{_.isMesh&&_.material&&(c.push({mat:_.material,opacity:_.material.opacity,transparent:_.material.transparent}),_.material.transparent=!0,_.material.opacity=.13,_.material.depthWrite=!1,_.material.needsUpdate=!0)}),n)for(let _ of[sc,Hu,Gu])_.transparent=!0,_.opacity=.14,_.depthWrite=!1,_.needsUpdate=!0;let l=e.pos.z>=0||e.form==="wing"?1:-1,h=o.position.clone().add(new M(0,a*.45,0)),u=n?s*.62+1.6:s*1.9+1.2,d=n?o.position.clone().add(new M(0,Pa+2.6,l*u)):t.position.clone().add(new M(0,a*.55,l*u)),p=Ht.minDistance;Ht.minDistance=.4,document.body.classList.add("inroom"),On(d,h,1.1);let f=document.createElement("button");f.className="iconbtn blue",f.style.cssText="position:fixed;left:50%;transform:translateX(-50%);bottom:18px;z-index:26",f.textContent="\u{1F6AA} "+k("verlassen"),f.onclick=Va,document.body.appendChild(f),yr(),bt={id:i,group:o,saved:c,btn:f,prevMin:p,keller:n},SND.pick()}function Va(){if(!bt)return;if(document.body.classList.remove("inroom"),Ye.remove(bt.group),bt.saved.forEach(e=>{e.mat.opacity=e.opacity,e.mat.transparent=e.transparent,e.mat.depthWrite=!0,e.mat.needsUpdate=!0}),bt.keller)for(let e of[sc,Hu,Gu])e.opacity=1,e.transparent=!1,e.depthWrite=!0,e.needsUpdate=!0;bt.btn.remove(),Ht.minDistance=bt.prevMin;let i=Nt[bt.id];i&&On(i.position.clone().add(new M(-9,8,15)),i.position.clone(),1),bt=null}function H_(){let i=document.getElementById("coach");if(Qe("003")){document.getElementById("obStart").textContent=k("tour_fertig"),sn("onboard");return}let e=_t["003"],t=Z.haeuser[e.haus],n=new M(t.origin[0]+e.pos.x*Ke,.7,t.origin[2]+e.pos.z*Ke),r=window.innerWidth<720;On(new M(n.x+3,r?6.5:4.5,n.z+(r?13:8)),n,1.7,()=>{!Qe("003")&&!I.onboarded&&i.classList.contains("open")&&(Fa(e),zn="003",qt())}),i.style.cssText="left:50%;transform:translateX(-50%);bottom:26px",i.innerHTML=`<b>${k("fb1_t")}</b>${k("fb1")}<div class="cactions"><button data-fbskip style="background:rgba(255,255,255,.18);color:#fff">${k("fb1_skip")}</button><button data-fbgo>${k("fb1_go")}</button></div>`,i.classList.add("open"),i.querySelector("[data-fbgo]").onclick=()=>{SND.unlock(),Qe("003")||qa(_t["003"])},i.querySelector("[data-fbskip]").onclick=()=>{i.classList.remove("open"),Xi(),sn("onboard")}}function Ka(i){if(I.tourDone&&!i)return;if(document.getElementById("milestone").classList.contains("open")){setTimeout(()=>Ka(i),2500);return}let e=document.getElementById("coach"),t=window.innerWidth<=1080,n=Pt.position.clone(),r=Ht.target.clone(),s="left:50%;transform:translateX(-50%);bottom:26px",a=document.getElementById("tutorFab").style.display==="block",o=(d,p,f,_)=>[new M(d+f,3.6,p+_),new M(d,.9,p)],c=[{sel:"#panelL",open:"panelL",tt:"tour1_t",tx:"tour1",css:t?s:"left:322px;top:120px"},{sel:"#card",tt:"tour2_t",tx:"tour2",css:"left:50%;transform:translateX(-50%);bottom:calc(46vh + 20px)"},{sel:"#panelR",open:"panelR",tt:"tour3_t",tx:"tour3",css:t?s:"right:322px;top:120px;left:auto"},{sel:"#btnPass",tt:"tour4_t",tx:"tour4",css:t?s:"right:12px;top:66px;left:auto"},{fly:o(Oi.position.x,Oi.position.z,3.2,4.5),tt:"tour5_t",tx:"tour5",css:s},{fly:o(Hi.position.x,Hi.position.z,3,4.5),tt:"tour6_t",tx:"tour6",css:s},{fly:o(zi.position.x,zi.position.z,4,5.5),tt:"tour7_t",tx:"tour7",css:s},a?{sel:"#tutorFab",tt:"tour8_t",tx:"tour8",css:t?"right:12px;bottom:80px;left:auto":"right:320px;bottom:80px;left:auto"}:null].filter(Boolean),l=0,h=()=>{document.querySelectorAll(".coach-target").forEach(d=>d.classList.remove("coach-target")),e.classList.remove("open"),I.tourDone=!0,rt(),On(n,r,1.2)},u=()=>{if(document.querySelectorAll(".coach-target").forEach(p=>p.classList.remove("coach-target")),t&&(document.getElementById("panelL").classList.remove("open"),document.getElementById("panelR").classList.remove("open")),l>=c.length){h();return}let d=c[l];if(t&&d.open&&document.getElementById(d.open).classList.add("open"),d.sel==="#card"&&!document.getElementById("card").classList.contains("open")){let p=zn||lc();p&&_r(p)}if(d.sel){let p=document.querySelector(d.sel);p&&p.offsetParent!==null&&p.classList.add("coach-target")}d.fly&&On(d.fly[0],d.fly[1],1.3),e.style.cssText=d.css,e.innerHTML=`<b>${k(d.tt)}</b>${k(d.tx)}<div class="cactions"><span class="cstep">${l+1}/${c.length}</span><span style="display:flex;gap:6px"><button data-skip style="background:rgba(255,255,255,.18);color:#fff">${k("tour_skip")}</button><button data-next>${l===c.length-1?k("tour_fertig"):k("tour_weiter")}</button></span></div>`,e.classList.add("open"),e.querySelector("[data-next]").onclick=()=>{l++,SND.pick(),u()},e.querySelector("[data-skip]").onclick=()=>{SND.pick(),h()}};u()}function G_(){let i=window.claude&&typeof window.claude.complete=="function"?window.claude.complete.bind(window.claude):null;if(!i){if(xm){let h=document.getElementById("tutorFab");h.style.display="block",h.title=k("tutor_ext"),h.setAttribute("aria-label",k("tutor_ext")),h.onclick=()=>window.open(xm,"_blank","noopener")}return}let e=document.getElementById("tutorFab"),t=document.getElementById("tutor"),n=document.getElementById("tutorMsgs");e.style.display="block";let r=[],s="tutor",a=null,o=(h,u)=>{let d=document.createElement("div");return d.className="tmsg "+h,d.textContent=u,n.appendChild(d),n.scrollTop=n.scrollHeight,d};e.onclick=()=>{t.classList.toggle("open"),t.classList.contains("open")&&!n.children.length&&o("bot",k("tutor_hi"))},document.getElementById("tutorClose").onclick=()=>t.classList.remove("open");let c=()=>{if(s==="vignette"&&a){let d=Ou(a);return`ROLLENSPIEL-MODUS im Lernspiel \xABDas Kompetenzhaus\xBB (Psychologiestudium UZH). Du spielst eine FIKTIVE Klientin/Person passend zum Modul \xAB${Ut(a)}\xBB (Kontext: ${d?re(d.heute).slice(0,240):""}). Regeln: (1) Alles ist erfunden \u2014 keine realen Ratschl\xE4ge, keine echten Diagnosen an die Nutzenden. (2) Bleibe konsequent in der Rolle, antworte kurz (2\u20134 S\xE4tze), realistisch, aber didaktisch ergiebig. (3) KEINE Schilderung akuter Suizidalit\xE4t oder schwerer Krisen; falls die Nutzenden solche Themen einbringen, verlasse die Rolle und verweise auf professionelle Hilfe (in der Schweiz: 143 / 147). (4) Wenn die Nutzenden \xABStopp\xBB schreiben, verlasse die Rolle und stelle GENAU EINE kurze Reflexionsfrage zum Gespr\xE4ch. Sprache: ${I.lang==="de"?"Deutsch (Schweizer Rechtschreibung)":"English"}.`}let h=Z.slots.filter(d=>Qe(d.slot)).map(d=>Ut(d)).join("; ")||"-",u=lc();return`Du bist der \xABKI-Baututor\xBB im Lernspiel \xABDas Kompetenzhaus\xBB (Psychologiestudium UZH, BSc/MSc; Module = Bausteine eines Hauses; Kompetenzen: Fa1\u2013Fa10 fachlich, KI1\u2013KI6 KI, Fu1\u2013Fu3 Future Skills; Pr\xFCfungslogik [A] KI-frei / [B] teilweise / [C] KI-integriert; Basis: Kompetenzaufbaumodell 02.07.2026, ein ENTWURF als Gespr\xE4chsbasis). Antworte kurz (max. 120 W\xF6rter), freundlich, auf ${I.lang==="de"?"Deutsch (Schweizer Rechtschreibung)":"English"}. Keine Rechtsausk\xFCnfte; verweise bei Studienberatung an die Studienprogrammleitung. Spielstand: gebaut = ${h}. Empfohlener n\xE4chster Baustein: ${u?Ut(_t[u]):"-"}.`};Cu={open(h,u){s=h||"tutor",a=u||null,r=[],t.classList.add("open"),s==="vignette"&&(n.innerHTML="",o("bot",k("ai_vignette_sys")),l("(Beginne das Gespr\xE4ch mit einer kurzen Vorstellung deiner fiktiven Rolle.)",!0))}};let l=async(h,u)=>{let d=document.getElementById("tutorInput"),p=h||d.value.trim();if(!p)return;h||(d.value=""),u||o("me",p);let f=o("bot","\u2026"),_="Studierende:r",m=s==="vignette"?"Klientin":"Baututor";r.push(_+": "+p);try{let g=await i(c()+`

`+r.slice(-8).join(`
`)+`
`+m+":");f.textContent=String(g).trim(),r.push(m+": "+f.textContent)}catch{f.textContent=k("tutor_err")}s==="vignette"&&(p.toLowerCase().startsWith("stopp")||p.toLowerCase().startsWith("stop"))&&(s="tutor",a=null,r=[])};document.getElementById("tutorSend").onclick=()=>l(),document.getElementById("tutorInput").addEventListener("keydown",h=>{h.key==="Enter"&&l()})}function hc(i,e,t="application/json"){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:t})),n.download=i,n.click(),URL.revokeObjectURL(n.href)}function V_(){let i=I.msSeen[I.mode]||[],e=Z.meilensteine.filter(t=>i.includes(t.id)).map(t=>({"@context":"https://www.w3.org/ns/credentials/v2",type:["VerifiableCredential","OpenBadgeCredential"],name:t.name.de,description:t.text.de,credentialSubject:{type:["AchievementSubject"],identifier:I.name||"anonym",achievement:{type:["Achievement"],name:t.name.de,description:t.text.de,criteria:{narrative:"Meilenstein im Kompetenzhaus (Selbstdeklaration, unsigniert \u2014 Entwurf)"},alignment:Z.kompetenzen.map(n=>({type:["Alignment"],targetName:n.id+" "+n.name.de}))}},issuer:{type:["Profile"],name:"Das Kompetenzhaus \u2014 Psychologisches Institut UZH (Entwurf, unsigniert)"},validFrom:new Date().toISOString(),proof:[]}));hc("kompetenzhaus-badges.json",JSON.stringify(e,null,2))}function W_(){let{score:i,max:e}=xs(),t=`# Kompetenzportfolio \u2014 ${I.name||"\u2014"}

_${k("passdatum")}: ${new Date().toLocaleDateString("de-CH")} \xB7 ${I.mode==="serious"?"Serious Mode":"Freies Bauen"} \xB7 BSc ${oi("bsc")}/120 ECTS \xB7 MSc ${oi("msc")}/120 ECTS_

> Entwurf auf Basis des Kompetenzaufbaumodells vom 02.07.2026 \u2014 Selbstdeklaration, kein offizieller Leistungsnachweis.

## Kompetenzprofil

`;for(let n of["fa","ki","fu"]){t+=`### ${Z.felder[n].name.de}

`;for(let r of Z.kompetenzen.filter(s=>s.feld===n)){let s=e[r.id]?Math.round(i[r.id]/e[r.id]*100):0,a=vs(r.id);t+=`- **${r.id} ${r.name.de}** \u2014 ${s}%${a?`, Stufe ${a}`:""}${za(r.id,a)?`
  - _${za(r.id,a)}_`:""}
`}t+=`
`}t+=`## Module & Reflexionen

`;for(let n of Z.slots){if(!Qe(n.slot))continue;let r=I.quests[n.slot]||{},s=ys(n);t+=`- **${Ut(n)}** (${n.ects} ECTS)${I.quiz[s]?" \xB7 Quiz \u2713":""}${r.done?" \xB7 Quest \u2726":""}${r.note?`
  - Merksatz: \xAB${r.note}\xBB`:""}
`}hc("kompetenzhaus-portfolio.md",t,"text/markdown")}var Cm=null;function wt(i){let e=document.getElementById("toast");e.textContent=i,e.classList.add("show"),clearTimeout(Cm),Cm=setTimeout(()=>e.classList.remove("show"),3200)}document.getElementById("obStart").onclick=()=>{I.name=document.getElementById("obName").value.trim().slice(0,40),I.onboarded=!0,rt(),document.getElementById("modalOnboard").classList.remove("open"),SND.unlock();let i=Qe("003")?lc():"003";i&&_r(i),setTimeout(Ka,900)};document.getElementById("modalOnboard").addEventListener("click",i=>{(i.target===document.getElementById("modalOnboard")||i.target.hasAttribute("data-close"))&&!I.onboarded&&!Kt.active&&(I.onboarded=!0,rt(),setTimeout(Ka,900))});document.getElementById("btnBadges").onclick=V_;document.getElementById("btnOlat").onclick=W_;document.getElementById("btnFb").onclick=()=>{let i=Object.entries(I.fb||{});if(!i.length){wt(k("fb_leer"));return}let e=r=>'"'+String(r||"").replace(/"/g,'""')+'"',t={g:"gruen",y:"gelb",r:"rot"},n=`\uFEFFcode;modul;ampel;kommentar;datum
`;for(let[r,s]of i){let a=_t[r];if(!a)continue;let o=(I.placed[I.mode][r]||{}).opt||a.code;n+=[e(o),e(Ut(a)),t[s.a]||"",e(s.note),s.ts||""].join(";")+`
`}hc("kompetenzhaus-feedback-"+new Date().toISOString().slice(0,10)+".csv",n,"text/csv;charset=utf-8"),wt("\u{1F6A6} "+k("fb_exported").replace("{n}",i.length))};var Im={de:[["v8 \xB7 Juli 2026","Dein Wahlprofil wird zum Haus: Themenwahl in den drei BSc-Wahlseminaren und im BA-Themenfeld pr\xE4gt Erker, Dach und ein eigenes Wahrzeichen; im Master zeigt jede Vertiefung ihren Schwerpunkt architektonisch, ab 4 von 6 im selben Schwerpunkt entsteht ein grosses Wahrzeichen (Observatorium, Therapiegarten, Glasatrium). Wahlpflicht (goldene Kante) und freie Wahl (weisse Kante) sind sichtbar unterschieden, Auskragendes wird von Konsolen und St\xFCtzen getragen. Neu ausserdem: kuratierte Farbwelten pro Haus, zwei neue Baustile, Karriere-Tab mit Soll-Profilen, L\xFCckenanalyse und \xABNach dem Master\xBB-Roadmaps (inkl. Psychotherapie- und Neuropsychologie-Weg), Masterarbeit als \xABMeisterst\xFCck\xBB der Stufe 4."],["v7 \xB7 Juli 2026","Echter Keller unter dem Bodenniveau (Sockel ragen ins Erdreich), Haus vergr\xF6ssert & Innenr\xE4ume 1:1 an die Aussenh\xFClle gekoppelt, Porch mit Vordach und Stufen, Erstbau-Sequenz f\xFCr neue Besucher:innen, Bauh\xFCtte mit Evidenz zu den 8 Lehrelementen, Ampel-Feedback \u{1F6A6} an jedem Modul mit CSV-Export."],["v6 \xB7 Juli 2026","Mobile-\xDCberarbeitung (Tour, Kontraste, gr\xF6ssere Ziele), Quiz mit Erkl\xE4rung und Sofort-Wiederholung, 7 Karrierewege, Faktenkorrektur IPS-Leistungsnachweis [B]."],["v5 \xB7 Juli 2026","Baukasten-Chips in der Modul-Karte, Vorstufe-\u24EA-Briefkasten, Minor-Beet, KI-Suite in der Artifact-Version."],["v4 \xB7 Juli 2026","Begehbare Kellerr\xE4ume, 12 Future-Skills-Felder (AIComp), Innenraum-Politur, Kompetenzpass als PDF."],["v3 \xB7 Juli 2026","Quiz-Gate im Serious Mode, Karriere-Profil, Innenansicht mit Kompetenz-Tafeln, Foto-Modus, Open-Badges- und Portfolio-Export."]],en:[["v8 \xB7 July 2026","Your elective profile becomes the house: topic choices in the three BSc elective seminars and the thesis field shape bay windows, roof and a landmark of your own; in the Master's each specialisation shows its track architecturally, and 4 of 6 in the same track build a large landmark (observatory, therapy garden, glass atrium). Compulsory electives (gold edge) and free electives (white edge) are visibly distinct, and everything cantilevered is carried by corbels and columns. Also new: curated colour worlds per house, two new building styles, a career tab with target profiles, gap analysis and post-Master roadmaps (incl. the psychotherapy and neuropsychology routes), and the Master's thesis as a level-4 \xABmasterpiece\xBB."],["v7 \xB7 July 2026","A real basement below ground level (plinths reach into the earth), bigger house with interiors matched 1:1 to the exterior shell, porch with canopy and steps, first-build sequence for new visitors, site hut with evidence for the 8 teaching elements, traffic-light feedback \u{1F6A6} on every module with CSV export."],["v6 \xB7 July 2026","Mobile overhaul (tour, contrast, larger targets), quiz with explanations and instant retry, 7 career paths, factual fix for the IPS assessment [B]."],["v5 \xB7 July 2026","Teaching-toolkit chips on module cards, stage-\u24EA mailbox, minor garden bed, AI suite in the artifact edition."],["v4 \xB7 July 2026","Walkable basement rooms, 12 future-skills fields (AIComp), interior polish, passport as PDF."],["v3 \xB7 July 2026","Quiz gate in serious mode, career profile, interior view with competence plaques, photo mode, Open Badges and portfolio export."]]};document.getElementById("btnTour").onclick=()=>{document.getElementById("modalMenu").classList.remove("open"),!Kt.active&&(yr(),Ka(!0))};document.getElementById("btnChangelog").onclick=()=>{let i=Im[I.lang]||Im.de;document.getElementById("clogList").innerHTML=i.map(([e,t])=>`<div class="bhrow"><b>${e}</b><p>${t}</p></div>`).join(""),document.getElementById("modalMenu").classList.remove("open"),sn("changelog")};var j_=new pa;function af(){let i=window.innerWidth,e=window.innerHeight;Sn.setSize(i,e,!1),Pt.aspect=i/e,Pt.updateProjectionMatrix()}window.addEventListener("resize",af);af();var zt=0,of=0;function lf(){requestAnimationFrame(lf),uc()}function uc(){of=performance.now();let i=Math.min(.5,j_.getDelta()),e=i;Au>0&&(Au-=i,e=0),zt+=e;for(let t=Vi.length-1;t>=0;t--){let n=Vi[t];n.t+=e;let r=Math.min(1,n.t/n.dur);n.fn(n.ease(r)),r>=1&&(Vi.splice(t,1),n.onDone&&n.onDone())}if(Bn){let t=1+Math.sin(zt*5)*.02;Bn.scale.set(t,t,t)}for(let t of Object.values(Nt)){let n=t.getObjectByName("sparkle");n&&(n.rotation.y+=e*2.4,n.position.y+=Math.sin(zt*3)*.0022);let r=t.getObjectByName("flag");r&&(r.rotation.y=Math.sin(zt*2.2)*.25);let s=t.getObjectByName("pennant");if(s){let a=s.getObjectByName("pflag");a&&(a.rotation.y=Math.sin(zt*3.1+t.position.x)*.35)}}if(vi.traverse(t=>{t.name==="flag"&&(t.rotation.y=Math.sin(zt*1.8)*.3)}),bt&&bt.group.traverse(t=>{if(t.name==="spin"&&(t.rotation.y+=e*.8),t.userData.wallN){let n=Pt.position.clone().sub(bt.group.position).normalize(),s=t.userData.wallN.dot(n)<-.25?.12:1;t.scale.y+=(s-t.scale.y)*Math.min(1,e*9),t.position.y=t.geometry.parameters.height/2*t.scale.y}}),ai.length&&ai[0].emissiveIntensity>0){let t=.9+Math.sin(zt*7.3)*.04+Math.sin(zt*13.7)*.03;for(let n of ai)n.emissiveIntensity>0&&(n.emissiveIntensity=t)}if(ms.visible){let t=Du[I.season],n=new Ie,r=new nn;for(let s=0;s<$u;s++){let a=d_[s];a.p.y-=t.ambFall*e*(.6+a.s*.5),a.p.x+=Math.sin(zt*.8+a.ph)*e*.7,a.p.y<.2&&(a.p.y=16+Math.random()*5),r.set(zt*1.4+a.ph,a.ph,zt*.9),n.makeRotationFromEuler(r),n.scale(new M(a.s,a.s,a.s)),n.setPosition(a.p),ms.setMatrixAt(s,n)}ms.instanceMatrix.needsUpdate=!0}if(Fu){let t=Math.sin(zt*13);xt.userData.legs.forEach((n,r)=>n.rotation.x=(r?1:-1)*t*.65),xt.userData.arms.forEach((n,r)=>n.rotation.x=(r?-1:1)*t*.5)}else xt.rotation.y+=Math.sin(zt*.6)*.0012;for(let t of Bm)t.position.x+=t.userData.v*e,t.position.x>75&&(t.position.x=-75);if(ec.material.opacity>0){let t=ec.geometry.attributes.position;for(let n=0;n<t.count;n++)t.setY(n,.7+Math.abs(Math.sin(zt*.7+n*2.1))*2.2),t.setX(n,t.getX(n)+Math.sin(zt*.5+n)*.008);t.needsUpdate=!0,ec.material.size=.3+Math.sin(zt*4)*.08}if(Ht.update(),tc>0){tc-=e;let t=tc*.5;Pt.position.x+=(Math.random()-.5)*t,Pt.position.y+=(Math.random()-.5)*t}Sn.render(Ye,Pt)}Bu();nf();var Pm=U_();Xa();Om();qt();en();I.onboarded?I.envAuto&&qu():(I.season=ku(),I.tod=62);vr();document.getElementById("todSlider").value=I.tod;G_();Wa||setTimeout(()=>wt(k("storage_warn")),1500);!Pm&&!I.onboarded?setTimeout(H_,700):!Pm&&!I.tourDone&&Object.keys(I.placed[I.mode]).length<3&&setTimeout(Ka,1200);var dc=(i,e)=>{let t=document.getElementById(i);t&&e&&(t.onclick=()=>{document.getElementById("modalMenu").classList.remove("open"),e.click()})};dc("btnCampusM",document.getElementById("btnCampus"));dc("btnShareM",document.getElementById("btnShare"));dc("btnSoundM",document.getElementById("btnSound"));dc("btnFotoM",document.getElementById("btnFoto"));window.__game={get state(){return I},checkMilestones:qm,save:rt,step:uc,enterRoom:sf,leaveRoom:Va,openBauhuette:Km,avatarClamp:jm,get avatarPos(){return{x:xt.position.x,z:xt.position.z}},get interior(){return bt?{id:bt.id,opacity:bt.saved[0]?bt.saved[0].mat.opacity:null}:null},get tweens(){return Vi.map(i=>({t:i.t,dur:i.dur}))},get frame(){return zt},placeByChip:i=>{let e=_t[i];return e?(_r(i),qa(e)):!1}};lf();setInterval(()=>{performance.now()-of>400&&uc()},250);})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
