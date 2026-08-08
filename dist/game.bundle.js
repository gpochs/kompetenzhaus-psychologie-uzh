(()=>{var ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},up=0,Sh=1,dp=2;var wh=1,Fl=2,oi=3,dr=0,_n=1,gt=2,Xi=0,Pa=1,Th=2,Ah=3,Rh=4,pp=5,pr=100,fp=101,mp=102,gp=103,_p=104,vp=200,yp=201,xp=202,bp=203,Mp=204,Ep=205,Sp=206,wp=207,Tp=208,Ap=209,Rp=210,Cp=211,Ip=212,Pp=213,Lp=214,Nl=0,Ul=1,Bl=2,La=3,Ol=4,zl=5,Hl=6,Gl=7,Dp=0,kp=1,Fp=2,bi=0,Np=1,Up=2,Bp=3,Vl=4,Op=5,zp=6,Hp=7;var Ch=300,fr=301,xs=302,Wl=303,$l=304,Da=306,qo=1e3,Js=1001,Xo=1002,ei=1003,Gp=1004;var ka=1005;var ti=1006,jl=1007;var bs=1008;var li=1009,Ih=1010,Ph=1011,mr=1012,ql=1013,Ms=1014,zn=1015,gr=1016,Xl=1017,Kl=1018,_r=1020,Lh=35902,Dh=35899,Vp=1021,Wp=1022,Hn=1023,Fa=1026,Na=1027,Yl=1028,Zl=1029,$p=1030,kh=1031;var Fh=1033,Jl=33776,Ql=33777,ec=33778,tc=33779,Nh=35840,Uh=35841,Bh=35842,Oh=35843,zh=36196,Hh=37492,Gh=37496,Vh=37808,Wh=37809,$h=37810,jh=37811,qh=37812,Xh=37813,Kh=37814,Yh=37815,Zh=37816,Jh=37817,Qh=37818,eu=37819,tu=37820,nu=37821,iu=36492,su=36494,ru=36495,au=36283,ou=36284,lu=36285,cu=36286;var Jr=2300,Ko=2301,jo=2302,dh=2400,ph=2401,fh=2402;var jp=3201;var qp=0,Xp=1,Es="",pn="srgb",ms="srgb-linear",Qr="linear",ot="srgb";var fs=7680;var Kp=512,Yp=513,Zp=514,hu=515,Jp=516,Qp=517,ef=518,tf=519,Yo=35044;var uu="300 es",xi=2e3,ea=2001;var ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Id=1234567,Ys=Math.PI/180,Qs=180/Math.PI;function Qn(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Yt[255&i]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[255&e]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[63&t|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[255&n]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Oe(i,e,t){return Math.max(e,Math.min(t,i))}function mh(i,e){return(i%e+e)%e}function Kr(i,e,t){return(1-t)*i+t*e}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var du={DEG2RAD:Ys,RAD2DEG:Qs,generateUUID:Qn,clamp:Oe,euclideanModulo:mh,mapLinear:function(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:Kr,damp:function(i,e,t,n){return Kr(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(mh(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(Id=i);let e=Id+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*Ys},radToDeg:function(i){return i*Qs},isPowerOfTwo:function(i){return!(i&i-1)&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}},normalize:at,denormalize:Un},te=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ln=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=g,void(e[t+3]=_);if(u!==_||c!==d||l!==p||h!==g){let f=1-o,m=c*d+l*p+h*g+u*_,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let E=Math.sqrt(y),w=Math.atan2(E,m*v);f=Math.sin(f*w)/E,o=Math.sin(o*w)/E}let x=o*v;if(c=c*f+d*x,l=l*f+p*x,h=h*f+g*x,u=u*f+_*x,f===1-o){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-o*p,e[t+2]=l*g+h*p+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uc=new S,Pd=new ln,Ue=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],f=s[3],m=s[6],v=s[1],y=s[4],x=s[7],E=s[2],w=s[5],C=s[8];return r[0]=a*_+o*v+c*E,r[3]=a*f+o*y+c*w,r[6]=a*m+o*x+c*C,r[1]=l*_+h*v+u*E,r[4]=l*f+h*y+u*w,r[7]=l*m+h*x+u*C,r[2]=d*_+p*v+g*E,r[5]=d*f+p*y+g*w,r[8]=d*m+p*x+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Bc.makeScale(e,t)),this}rotate(e){return this.premultiply(Bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Bc=new Ue;function pu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nf(){let i=ta("canvas");return i.style.display="block",i}var Ld={};function er(i){i in Ld||(Ld[i]=!0,console.warn(i))}function sf(i,e,t){return new Promise(function(n,s){setTimeout(function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}},t)})}var Dd=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kd=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jm(){let i={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,a){return this.enabled!==!1&&r!==a&&r&&a&&(this.spaces[r].transfer===ot&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?Qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return er("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return er("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ms]:{primaries:e,whitePoint:n,transfer:Qr,toXYZ:Dd,fromXYZ:kd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Dd,fromXYZ:kd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),i}var et=Jm();function yi(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function Zs(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var ks,Zo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ks===void 0&&(ks=ta("canvas")),ks.width=e.width,ks.height=e.height;let s=ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ks}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ta("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=255*yi(r[a]/255);return n.putImageData(s,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*yi(t[n]/255)):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qm=0,tr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Oc(s[a].image)):r.push(Oc(s[a]))}else r=Oc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Oc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var eg=0,zc=new S,rn=class i extends ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,s=1001,r=1006,a=1008,o=1023,c=1009,l=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Qn(),this.name="",this.source=new tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zc).x}get height(){return this.source.getSize(zc).y}get depth(){return this.source.getSize(zc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];s!==void 0?s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n:console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qo:e.x=e.x-Math.floor(e.x);break;case Js:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case qo:e.y=e.y-Math.floor(e.y);break;case Js:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null,rn.DEFAULT_MAPPING=Ch,rn.DEFAULT_ANISOTROPY=1;var rt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],f=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,x=(p+1)/2,E=(m+1)/2,w=(h+d)/4,C=(u+_)/4,D=(g+f)/4;return y>x&&y>E?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=C/n):x>E?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=D/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=C/r,s=D/r),this.set(n,s,r,t),this}let v=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jo=class extends ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new rn(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new tr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Jo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},na=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ei,this.minFilter=ei,this.wrapR=Js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qo=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ei,this.minFilter=ei,this.wrapR=Js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),_o.subVectors(this.max,Br),Fs.subVectors(e.a,Br),Ns.subVectors(e.b,Br),Us.subVectors(e.c,Br),ki.subVectors(Ns,Fs),Fi.subVectors(Us,Ns),hs.subVectors(Fs,Us);let t=[0,-ki.z,ki.y,0,-Fi.z,Fi.y,0,-hs.z,hs.y,ki.z,0,-ki.x,Fi.z,0,-Fi.x,hs.z,0,-hs.x,-ki.y,ki.x,0,-Fi.y,Fi.x,0,-hs.y,hs.x,0];return!!Hc(t,Fs,Ns,Us,_o)&&(t=[1,0,0,0,1,0,0,0,1],!!Hc(t,Fs,Ns,Us,_o)&&(vo.crossVectors(ki,Fi),t=[vo.x,vo.y,vo.z],Hc(t,Fs,Ns,Us,_o)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(kn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fi=[new S,new S,new S,new S,new S,new S,new S,new S],kn=new S,go=new Sn,Fs=new S,Ns=new S,Us=new S,ki=new S,Fi=new S,hs=new S,Br=new S,_o=new S,vo=new S,us=new S;function Hc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){us.fromArray(i,r);let o=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),c=e.dot(us),l=t.dot(us),h=n.dot(us);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var tg=new Sn,Or=new S,Gc=new S,wn=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=.5*(n-this.radius);this.center.addScaledVector(Or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(Gc)),this.expandByPoint(Or.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},mi=new S,Vc=new S,yo=new S,Ni=new S,Wc=new S,xo=new S,$c=new S,si=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Vc.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(Vc);let r=.5*e.distanceTo(t),a=-this.direction.dot(yo),o=Ni.dot(this.direction),c=-Ni.dot(yo),l=Ni.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vc).addScaledVector(yo,d),p}intersectSphere(e,t){mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),s=mi.dot(mi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s?null:((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s?null:((o>n||n!=n)&&(n=o),(c<s||s!=s)&&(s=c),s<0?null:this.at(n>=0?n:s,t)))}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,s,r){Wc.subVectors(t,e),xo.subVectors(n,e),$c.crossVectors(Wc,xo);let a,o=this.direction.dot($c);if(o>0){if(s)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ni.subVectors(this.origin,e);let c=a*this.direction.dot(xo.crossVectors(Ni,xo));if(c<0)return null;let l=a*this.direction.dot(Wc.cross(Ni));if(l<0||c+l>o)return null;let h=-a*Ni.dot($c);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,p,g,_,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,p,g,_,f)}set(e,t,n,s,r,a,o,c,l,h,u,d,p,g,_,f){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=_,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),a=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ng,e,ig)}lookAt(e,t,n){let s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),Ui.crossVectors(n,un),Ui.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ui.crossVectors(n,un)),Ui.normalize(),bo.crossVectors(un,Ui),s[0]=Ui.x,s[4]=bo.x,s[8]=un.x,s[1]=Ui.y,s[5]=bo.y,s[9]=un.y,s[2]=Ui.z,s[6]=bo.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],f=n[10],m=n[14],v=n[3],y=n[7],x=n[11],E=n[15],w=s[0],C=s[4],D=s[8],P=s[12],N=s[1],H=s[5],O=s[9],J=s[13],W=s[2],Q=s[6],ee=s[10],le=s[14],se=s[3],ye=s[7],we=s[11],Me=s[15];return r[0]=a*w+o*N+c*W+l*se,r[4]=a*C+o*H+c*Q+l*ye,r[8]=a*D+o*O+c*ee+l*we,r[12]=a*P+o*J+c*le+l*Me,r[1]=h*w+u*N+d*W+p*se,r[5]=h*C+u*H+d*Q+p*ye,r[9]=h*D+u*O+d*ee+p*we,r[13]=h*P+u*J+d*le+p*Me,r[2]=g*w+_*N+f*W+m*se,r[6]=g*C+_*H+f*Q+m*ye,r[10]=g*D+_*O+f*ee+m*we,r[14]=g*P+_*J+f*le+m*Me,r[3]=v*w+y*N+x*W+E*se,r[7]=v*C+y*H+x*Q+E*ye,r[11]=v*D+y*O+x*ee+E*we,r[15]=v*P+y*J+x*le+E*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*p-n*c*p)+e[7]*(+t*c*p-t*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+e[11]*(+t*l*u-t*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+e[15]*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],f=e[14],m=e[15],v=u*f*l-_*d*l+_*c*p-o*f*p-u*c*m+o*d*m,y=g*d*l-h*f*l-g*c*p+a*f*p+h*c*m-a*d*m,x=h*_*l-g*u*l+g*o*p-a*_*p-h*o*m+a*u*m,E=g*u*c-h*_*c-g*o*d+a*_*d+h*o*f-a*u*f,w=t*v+n*y+s*x+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return e[0]=v*C,e[1]=(_*d*r-u*f*r-_*s*p+n*f*p+u*s*m-n*d*m)*C,e[2]=(o*f*r-_*c*r+_*s*l-n*f*l-o*s*m+n*c*m)*C,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*p-n*c*p)*C,e[4]=y*C,e[5]=(h*f*r-g*d*r+g*s*p-t*f*p-h*s*m+t*d*m)*C,e[6]=(g*c*r-a*f*r-g*s*l+t*f*l+a*s*m-t*c*m)*C,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*p+t*c*p)*C,e[8]=x*C,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*m-t*u*m)*C,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*m+t*o*m)*C,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*p-t*o*p)*C,e[12]=E*C,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*f+t*u*f)*C,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*f-t*o*f)*C,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,g=r*u,_=a*h,f=a*u,m=o*u,v=c*l,y=c*h,x=c*u,E=n.x,w=n.y,C=n.z;return s[0]=(1-(_+m))*E,s[1]=(p+x)*E,s[2]=(g-y)*E,s[3]=0,s[4]=(p-x)*w,s[5]=(1-(d+m))*w,s[6]=(f+v)*w,s[7]=0,s[8]=(g+y)*C,s[9]=(f-v)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Bs.set(s[0],s[1],s[2]).length(),a=Bs.set(s[4],s[5],s[6]).length(),o=Bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Fn.copy(this);let c=1/r,l=1/a,h=1/o;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=l,Fn.elements[5]*=l,Fn.elements[6]*=l,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,t.setFromRotationMatrix(Fn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=2e3,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===xi)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else{if(o!==ea)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);g=-a/(a-r),_=-a*r/(a-r)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===xi)g=-2/(a-r),_=-(a+r)/(a-r);else{if(o!==ea)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);g=-1/(a-r),_=-r/(a-r)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bs=new S,Fn=new Pe,ng=new S(0,0,0),ig=new S(1,1,1),Ui=new S,bo=new S,un=new S,Fd=new Pe,Nd=new ln,cn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var nr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},sg=0,Ud=new S,Os=new ln,gi=new Pe,Mo=new S,zr=new S,rg=new S,ag=new ln,Bd=new S(1,0,0),Od=new S(0,1,0),zd=new S(0,0,1),Hd={type:"added"},og={type:"removed"},zs={type:"childadded",child:null},jc={type:"childremoved",child:null},Ht=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new S,t=new cn,n=new ln,s=new S(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Ue}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Bd,e)}rotateY(e){return this.rotateOnAxis(Od,e)}rotateZ(e){return this.rotateOnAxis(zd,e)}translateOnAxis(e,t){return Ud.copy(e).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bd,e)}translateY(e){return this.translateOnAxis(Od,e)}translateZ(e){return this.translateOnAxis(zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mo.copy(e):Mo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(zr,Mo,this.up):gi.lookAt(Mo,zr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(gi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hd),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(og),jc.child=e,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hd),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,ag,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ht.DEFAULT_UP=new S(0,1,0),Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new S,_i=new S,qc=new S,vi=new S,Hs=new S,Gs=new S,Gd=new S,Xc=new S,Kc=new S,Yc=new S,Zc=new rt,Jc=new rt,Qc=new rt,Zn=class i{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),_i.subVectors(n,t),qc.subVectors(e,t);let a=Nn.dot(Nn),o=Nn.dot(_i),c=Nn.dot(qc),l=_i.dot(_i),h=_i.dot(qc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vi)!==null&&vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(a,vi.y),c.addScaledVector(o,vi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Zc.setScalar(0),Jc.setScalar(0),Qc.setScalar(0),Zc.fromBufferAttribute(e,t),Jc.fromBufferAttribute(e,n),Qc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Zc,r.x),a.addScaledVector(Jc,r.y),a.addScaledVector(Qc,r.z),a}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),_i.subVectors(e,t),Nn.cross(_i).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),.5*Nn.cross(_i).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Hs.subVectors(s,n),Gs.subVectors(r,n),Xc.subVectors(e,n);let c=Hs.dot(Xc),l=Gs.dot(Xc);if(c<=0&&l<=0)return t.copy(n);Kc.subVectors(e,s);let h=Hs.dot(Kc),u=Gs.dot(Kc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Hs,a);Yc.subVectors(e,r);let p=Hs.dot(Yc),g=Gs.dot(Yc);if(g>=0&&p<=g)return t.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Gs,o);let f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return Gd.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Gd,o);let m=1/(f+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(Hs,a).addScaledVector(Gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function eh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var de=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=mh(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=eh(a,r,e+1/3),this.g=eh(a,r,e),this.b=eh(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){let n=rf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return et.workingToColorSpace(Zt.copy(this),e),65536*Math.round(Oe(255*Zt.r,0,255))+256*Math.round(Oe(255*Zt.g,0,255))+Math.round(Oe(255*Zt.b,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Zt.copy(this),t);let n=Zt.r,s=Zt.g,r=Zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=pn){et.workingToColorSpace(Zt.copy(this),e);let t=Zt.r,n=Zt.g,s=Zt.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*s)})`}offsetHSL(e,t,n){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(Eo);let n=Kr(Bi.h,Eo.h,t),s=Kr(Bi.s,Eo.s,t),r=Kr(Bi.l,Eo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new de;de.NAMES=rf;var lg=0,ri=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];s!==void 0?s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jt=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fv=cg();function cg(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,s[c]=24,s[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,s[c]=-l-1,s[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,s[c]=13,s[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,s[c]=24,s[256|c]=24):(n[c]=31744,n[256|c]=64512,s[c]=13,s[256|c]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}var Rt=new S,So=new te,hg=0,$t=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yo,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yo&&(e.usage=this.usage),e}};var ia=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var sa=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ae=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},ug=0,Mn=new Pe,th=new Ht,Vs=new S,dn=new Sn,Hr=new Sn,zt=new S,lt=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pu(e)?sa:ia)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new S,1/0);if(e){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Hr.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(dn.min,Hr.min),dn.expandByPoint(zt),zt.addVectors(dn.max,Hr.max),dn.expandByPoint(zt)):(dn.expandByPoint(Hr.min),dn.expandByPoint(Hr.max))}dn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)zt.fromBufferAttribute(o,l),c&&(Vs.fromBufferAttribute(e,l),zt.add(Vs)),s=Math.max(s,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new S,c[D]=new S;let l=new S,h=new S,u=new S,d=new te,p=new te,g=new te,_=new S,f=new S;function m(D,P,N){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,N),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,P),g.fromBufferAttribute(r,N),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let H=1/(p.x*g.y-g.x*p.y);isFinite(H)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(H),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(H),o[D].add(_),o[P].add(_),o[N].add(_),c[D].add(f),c[P].add(f),c[N].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,P=v.length;D<P;++D){let N=v[D],H=N.start;for(let O=H,J=H+N.count;O<J;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let y=new S,x=new S,E=new S,w=new S;function C(D){E.fromBufferAttribute(s,D),w.copy(E);let P=o[D];y.copy(P),y.sub(E.multiplyScalar(E.dot(P))).normalize(),x.crossVectors(w,P);let N=x.dot(c[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,N)}for(let D=0,P=v.length;D<P;++D){let N=v[D],H=N.start;for(let O=H,J=H+N.count;O<J;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new S,r=new S,a=new S,o=new S,c=new S,l=new S,h=new S,u=new S;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let _=0,f=c.length;_<f;_++){p=o.isInterleavedBufferAttribute?c[_]*o.data.stride+o.offset:c[_]*h;for(let m=0;m<h;m++)d[g++]=l[p++]}return new $t(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=e(s[o],n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vd=new Pe,ds=new si,wo=new wn,Wd=new S,To=new S,Ao=new S,Ro=new S,nh=new S,Co=new S,$d=new S,Io=new S,$=class extends Ht{constructor(e=new lt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Co.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(nh.fromBufferAttribute(u,e),a?Co.addScaledVector(nh,h):Co.addScaledVector(nh.sub(t),h))}t.add(Co)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;if(s!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),ds.copy(e.ray).recast(e.near),wo.containsPoint(ds.origin)===!1&&(ds.intersectSphere(wo,Wd)===null||ds.origin.distanceToSquared(Wd)>(e.far-e.near)**2))return;Vd.copy(r).invert(),ds.copy(e.ray).applyMatrix4(Vd),n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,ds)}}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let f=d[g],m=a[f.materialIndex];for(let v=Math.max(f.start,p.start),y=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));v<y;v+=3)s=Po(this,m,e,n,l,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,t.push(s))}else for(let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);g<_;g+=3)s=Po(this,a,e,n,l,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),s&&(s.faceIndex=Math.floor(g/3),t.push(s));else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let f=d[g],m=a[f.materialIndex];for(let v=Math.max(f.start,p.start),y=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));v<y;v+=3)s=Po(this,m,e,n,l,h,u,v,v+1,v+2),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,t.push(s))}else for(let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);g<_;g+=3)s=Po(this,a,e,n,l,h,u,g,g+1,g+2),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}};function Po(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,To),i.getVertexPosition(c,Ao),i.getVertexPosition(l,Ro);let h=(function(u,d,p,g,_,f,m,v){let y;if(y=d.side===1?g.intersectTriangle(m,f,_,!0,v):g.intersectTriangle(_,f,m,d.side===0,v),y===null)return null;Io.copy(v),Io.applyMatrix4(u.matrixWorld);let x=p.ray.origin.distanceTo(Io);return x<p.near||x>p.far?null:{distance:x,point:Io.clone(),object:u}})(i,e,t,n,To,Ao,Ro,$d);if(h){let u=new S;Zn.getBarycoord($d,To,Ao,Ro,u),s&&(h.uv=Zn.getInterpolatedAttribute(s,o,c,l,u,new te)),r&&(h.uv1=Zn.getInterpolatedAttribute(r,o,c,l,u,new te)),a&&(h.normal=Zn.getInterpolatedAttribute(a,o,c,l,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new S,materialIndex:0};Zn.getNormal(To,Ao,Ro,d.normal),h.face=d,h.barycoord=u}return h}var We=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;function g(_,f,m,v,y,x,E,w,C,D,P){let N=x/C,H=E/D,O=x/2,J=E/2,W=w/2,Q=C+1,ee=D+1,le=0,se=0,ye=new S;for(let we=0;we<ee;we++){let Me=we*H-J;for(let Ie=0;Ie<Q;Ie++){let ce=Ie*N-O;ye[_]=ce*v,ye[f]=Me*y,ye[m]=W,l.push(ye.x,ye.y,ye.z),ye[_]=0,ye[f]=0,ye[m]=w>0?1:-1,h.push(ye.x,ye.y,ye.z),u.push(Ie/C),u.push(1-we/D),le+=1}}for(let we=0;we<D;we++)for(let Me=0;Me<C;Me++){let Ie=d+Me+Q*we,ce=d+Me+Q*(we+1),ue=d+(Me+1)+Q*(we+1),he=d+(Me+1)+Q*we;c.push(Ie,ce,he),c.push(ce,ue,he),se+=6}o.addGroup(p,se,P),p+=se,d+=le}g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ss(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Qt(i){let e={};for(let t=0;t<i.length;t++){let n=Ss(i[t]);for(let s in n)e[s]=n[s]}return e}function fu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var af={clone:Ss,merge:Qt},Bn=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let s=0;s<t.length;s++)n.push(t[s].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ir=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Oi=new S,jd=new te,qd=new te,Wt=class extends ir{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Qs*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ys*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Qs*Math.atan(Math.tan(.5*Ys*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,jd,qd),t.subVectors(qd,jd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ys*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ws=-90,el=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wt(Ws,1,e,t);s.layers=this.layers,this.add(s);let r=new Wt(Ws,1,e,t);r.layers=this.layers,this.add(r);let a=new Wt(Ws,1,e,t);a.layers=this.layers,this.add(a);let o=new Wt(Ws,1,e,t);o.layers=this.layers,this.add(o);let c=new Wt(Ws,1,e,t);c.layers=this.layers,this.add(c);let l=new Wt(Ws,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==ea)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ra=class extends rn{constructor(e=[],t=301,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},tl=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ra(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new We(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;let a=new $(s,r),o=t.minFilter;return t.minFilter===bs&&(t.minFilter=ti),new el(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},ze=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},dg={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let f=t.getJointPose(_,n),m=this._getHandJoint(l,_);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var aa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new de(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},oa=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},nl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yo,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new S,la=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gs=class extends ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$s,Gr=new S,js=new S,qs=new S,Xs=new te,Vr=new te,of=new Pe,Lo=new S,Wr=new S,Do=new S,Xd=new te,ih=new te,Kd=new te,rr=class extends Ht{constructor(e=new gs){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nl(t,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new la(n,3,0,!1)),$s.setAttribute("uv",new la(n,2,3,!1))}this.geometry=$s,this.material=e,this.center=new te(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),js.setFromMatrixScale(this.matrixWorld),of.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&js.multiplyScalar(-qs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ko(Lo.set(-.5,-.5,0),qs,a,js,s,r),ko(Wr.set(.5,-.5,0),qs,a,js,s,r),ko(Do.set(.5,.5,0),qs,a,js,s,r),Xd.set(0,0),ih.set(1,0),Kd.set(1,1);let o=e.ray.intersectTriangle(Lo,Wr,Do,!1,Gr);if(o===null&&(ko(Wr.set(-.5,.5,0),qs,a,js,s,r),ih.set(0,1),o=e.ray.intersectTriangle(Lo,Do,Wr,!1,Gr),o===null))return;let c=e.ray.origin.distanceTo(Gr);c<e.near||c>e.far||t.push({distance:c,point:Gr.clone(),uv:Zn.getInterpolation(Gr,Lo,Wr,Do,Xd,ih,Kd,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ko(i,e,t,n,s,r){Xs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Vr.x=r*Xs.x-s*Xs.y,Vr.y=s*Xs.x+r*Xs.y):Vr.copy(Xs),i.copy(e),i.x+=Vr.x,i.y+=Vr.y,i.applyMatrix4(of)}var Nv=new S,Uv=new S;var Bv=new S,Ov=new rt,zv=new rt,Hv=new S,Gv=new Pe,Vv=new S,Wv=new wn,$v=new Pe,jv=new si;var il=class extends rn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=1003,h=1003,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qv=new Pe,Xv=new Pe;var ca=class extends $t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ks=new Pe,Yd=new Pe,Fo=[],Zd=new Sn,pg=new Pe,$r=new $,jr=new wn,Gi=class extends ${constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ca(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,pg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),Zd.copy(e.boundingBox).applyMatrix4(Ks),this.boundingBox.union(Zd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),jr.copy(e.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(n),e.ray.intersectsSphere(jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ks),Yd.multiplyMatrices(n,Ks),$r.matrixWorld=Yd,$r.raycast(e,Fo);for(let a=0,o=Fo.length;a<o;a++){let c=Fo[a];c.instanceId=r,c.object=this,t.push(c)}Fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ca(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new il(new Float32Array(s*this.count),s,this.count,Yl,zn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},sh=new S,fg=new S,mg=new Ue,En=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=sh.subVectors(n,t).cross(fg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(sh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mg.getNormalMatrix(e),s=this.coplanarPoint(sh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ps=new wn,gg=new te(.5,.5),No=new S,Vi=class{constructor(e=new En,t=new En,n=new En,s=new En,r=new En,a=new En){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],_=r[9],f=r[10],m=r[11],v=r[12],y=r[13],x=r[14],E=r[15];if(s[0].setComponents(l-a,p-h,m-g,E-v).normalize(),s[1].setComponents(l+a,p+h,m+g,E+v).normalize(),s[2].setComponents(l+o,p+u,m+_,E+y).normalize(),s[3].setComponents(l-o,p-u,m-_,E-y).normalize(),n)s[4].setComponents(c,d,f,x).normalize(),s[5].setComponents(l-c,p-d,m-f,E-x).normalize();else if(s[4].setComponents(l-c,p-d,m-f,E-x).normalize(),t===xi)s[5].setComponents(l+c,p+d,m+f,E+x).normalize();else{if(t!==ea)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);s[5].setComponents(c,d,f,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);let t=gg.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(No.x=s.normal.x>0?e.max.x:e.min.x,No.y=s.normal.y>0?e.max.y:e.min.y,No.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Kn=new Pe,Yn=new Vi,sl=class i{constructor(){this.coordinateSystem=xi}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let s=t.cameras[n];if(Kn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Yn.setFromProjectionMatrix(Kn,s.coordinateSystem,s.reversedDepth),Yn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let s=t.cameras[n];if(Kn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Yn.setFromProjectionMatrix(Kn,s.coordinateSystem,s.reversedDepth),Yn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let s=t.cameras[n];if(Kn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Yn.setFromProjectionMatrix(Kn,s.coordinateSystem,s.reversedDepth),Yn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let s=t.cameras[n];if(Kn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Yn.setFromProjectionMatrix(Kn,s.coordinateSystem,s.reversedDepth),Yn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let s=t.cameras[n];if(Kn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Yn.setFromProjectionMatrix(Kn,s.coordinateSystem,s.reversedDepth),Yn.containsPoint(e))return!0}return!1}clone(){return new i}};var gh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=s}reset(){this.list.length=0,this.index=0}},Kv=new Pe,Yv=new de(1,1,1),Zv=new Vi,Jv=new sl,Qv=new Sn,ey=new wn,ty=new S,ny=new S,iy=new S,sy=new gh,ry=new $;var ay=new S,oy=new S,ly=new Pe,cy=new si,hy=new wn,uy=new S,dy=new S;var py=new S,fy=new S;var ar=class extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Jd=new Pe,_h=new si,Uo=new wn,Bo=new S,ha=class extends Ht{constructor(e=new lt,t=new ar){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),Uo.radius+=r,e.ray.intersectsSphere(Uo)===!1)return;Jd.copy(s).invert(),_h.copy(e.ray).applyMatrix4(Jd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);u<d;u++){let p=l.getX(u);Bo.fromBufferAttribute(h,p),Qd(Bo,p,c,s,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Bo.fromBufferAttribute(h,u),Qd(Bo,u,c,s,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Qd(i,e,t,n,s,r,a){let o=_h.distanceSqToPoint(i);if(o<t){let c=new S;_h.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var or=class extends rn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ua=class extends rn{constructor(e,t,n=1014,s,r,a,o=1003,c=1003,l,h=1026,u=1){if(h!==Fa&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},da=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rl=class i extends lt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,g=2*n+r,_=s+1,f=new S,m=new S;for(let v=0;v<=g;v++){let y=0,x=0,E=0,w=0;if(v<=n){let P=v/n,N=P*Math.PI/2;x=-h-e*Math.cos(N),E=e*Math.sin(N),w=-e*Math.cos(N),y=P*u}else if(v<=n+r){let P=(v-n)/r;x=P*t-h,E=e,w=0,y=u+P*d}else{let P=(v-n-r)/n,N=P*Math.PI/2;x=h+e*Math.sin(N),E=e*Math.cos(N),w=e*Math.sin(N),y=u+d+P*u}let C=Math.max(0,Math.min(1,y/p)),D=0;v===0?D=.5/s:v===g&&(D=-.5/s);for(let P=0;P<=s;P++){let N=P/s,H=N*Math.PI*2,O=Math.sin(H),J=Math.cos(H);m.x=-E*J,m.y=x,m.z=E*O,o.push(m.x,m.y,m.z),f.set(-E*J,w,E*O),f.normalize(),c.push(f.x,f.y,f.z),l.push(N+D,C)}if(v>0){let P=(v-1)*_;for(let N=0;N<s;N++){let H=P+N,O=P+N+1,J=v*_+N,W=v*_+N+1;a.push(H,O,J),a.push(O,W,J)}}}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ai=class i extends lt{constructor(e=1,t=32,n=0,s=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new S,h=new te;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(o,3)),this.setAttribute("uv",new Ae(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},je=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,_=[],f=n/2,m=0;function v(y){let x=g,E=new te,w=new S,C=0,D=y===!0?e:t,P=y===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,f*P,0),d.push(0,P,0),p.push(.5,.5),g++;let N=g;for(let H=0;H<=s;H++){let O=H/s*c+o,J=Math.cos(O),W=Math.sin(O);w.x=D*W,w.y=f*P,w.z=D*J,u.push(w.x,w.y,w.z),d.push(0,P,0),E.x=.5*J+.5,E.y=.5*W*P+.5,p.push(E.x,E.y),g++}for(let H=0;H<s;H++){let O=x+H,J=N+H;y===!0?h.push(J,J+1,O):h.push(J+1,J,O),C+=3}l.addGroup(m,C,y===!0?1:2),m+=C}(function(){let y=new S,x=new S,E=0,w=(t-e)/n;for(let C=0;C<=r;C++){let D=[],P=C/r,N=P*(t-e)+e;for(let H=0;H<=s;H++){let O=H/s,J=O*c+o,W=Math.sin(J),Q=Math.cos(J);x.x=N*W,x.y=-P*n+f,x.z=N*Q,u.push(x.x,x.y,x.z),y.set(W,w,Q).normalize(),d.push(y.x,y.y,y.z),p.push(O,1-P),D.push(g++)}_.push(D)}for(let C=0;C<s;C++)for(let D=0;D<r;D++){let P=_[D][C],N=_[D+1][C],H=_[D+1][C+1],O=_[D][C+1];(e>0||D!==0)&&(h.push(P,N,O),E+=3),(t>0||D!==r-1)&&(h.push(N,H,O),E+=3)}l.addGroup(m,E,0),m+=E})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},On=class i extends je{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=2*Math.PI){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wi=class i extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];function o(p,g,_,f){let m=f+1,v=[];for(let y=0;y<=m;y++){v[y]=[];let x=p.clone().lerp(_,y/m),E=g.clone().lerp(_,y/m),w=m-y;for(let C=0;C<=w;C++)v[y][C]=C===0&&y===m?x:x.clone().lerp(E,C/w)}for(let y=0;y<m;y++)for(let x=0;x<2*(m-y)-1;x++){let E=Math.floor(x/2);x%2==0?(c(v[y][E+1]),c(v[y+1][E]),c(v[y][E])):(c(v[y][E+1]),c(v[y+1][E+1]),c(v[y+1][E]))}}function c(p){r.push(p.x,p.y,p.z)}function l(p,g){let _=3*p;g.x=e[_+0],g.y=e[_+1],g.z=e[_+2]}function h(p,g,_,f){f<0&&p.x===1&&(a[g]=p.x-1),_.x===0&&_.z===0&&(a[g]=f/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let g=new S,_=new S,f=new S;for(let m=0;m<t.length;m+=3)l(t[m+0],g),l(t[m+1],_),l(t[m+2],f),o(g,_,f,p)})(s),(function(p){let g=new S;for(let _=0;_<r.length;_+=3)g.x=r[_+0],g.y=r[_+1],g.z=r[_+2],g.normalize().multiplyScalar(p),r[_+0]=g.x,r[_+1]=g.y,r[_+2]=g.z})(n),(function(){let p=new S;for(let g=0;g<r.length;g+=3){p.x=r[g+0],p.y=r[g+1],p.z=r[g+2];let _=u(p)/2/Math.PI+.5,f=d(p)/Math.PI+.5;a.push(_,1-f)}(function(){let g=new S,_=new S,f=new S,m=new S,v=new te,y=new te,x=new te;for(let E=0,w=0;E<r.length;E+=9,w+=6){g.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),f.set(r[E+6],r[E+7],r[E+8]),v.set(a[w+0],a[w+1]),y.set(a[w+2],a[w+3]),x.set(a[w+4],a[w+5]),m.copy(g).add(_).add(f).divideScalar(3);let C=u(m);h(v,w+0,g,C),h(y,w+2,_,C),h(x,w+4,f,C)}})(),(function(){for(let g=0;g<a.length;g+=6){let _=a[g+0],f=a[g+2],m=a[g+4],v=Math.max(_,f,m),y=Math.min(_,f,m);v>.9&&y<.1&&(_<.2&&(a[g+0]+=1),f<.2&&(a[g+2]+=1),m<.2&&(a[g+4]+=1))}})()})(),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(r.slice(),3)),this.setAttribute("uv",new Ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},al=class i extends Wi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Oo=new S,zo=new S,rh=new S,Ho=new Zn,ol=class extends lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Ys*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:_,b:f,c:m}=Ho;if(_.fromBufferAttribute(o,l[0]),f.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),Ho.getNormal(rh),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let y=(v+1)%3,x=u[v],E=u[y],w=Ho[h[v]],C=Ho[h[y]],D=`${x}_${E}`,P=`${E}_${x}`;P in d&&d[P]?(rh.dot(d[P].normal)<=r&&(p.push(w.x,w.y,w.z),p.push(C.x,C.y,C.z)),d[P]=null):D in d||(d[D]={index0:l[v],index1:l[y],normal:rh.clone()})}}for(let g in d)if(d[g]){let{index0:_,index1:f}=d[g];Oo.fromBufferAttribute(o,_),zo.fromBufferAttribute(o,f),p.push(Oo.x,Oo.y,Oo.z),p.push(zo.x,zo.y,zo.z)}this.setAttribute("position",new Ae(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;a=t||e*n[r-1];let o,c=0,l=r-1;for(;c<=l;)if(s=Math.floor(c+(l-c)/2),o=n[s]-a,o<0)c=s+1;else{if(!(o>0)){l=s;break}l=s-1}if(s=l,n[s]===a)return s/(r-1);let h=n[s];return(s+(a-h)/(n[s+1]-h))/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new te:new S);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new S,s=[],r=[],a=[],o=new S,c=new Pe;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new S)}r[0]=new S,a[0]=new S;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Oe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Oe(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},lr=class extends mn{constructor(e=0,t=0,n=1,s=1,r=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new te){let n=t,s=2*Math.PI,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(r=a?0:s),this.aClockwise!==!0||a||(r===s?r=-s:r-=s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ll=class extends lr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function mu(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r;return i+e*r+t*a+n*(a*r)}}}var Go=new S,ah=new mu,oh=new mu,lh=new mu,cl=class extends mn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new S){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:h===0&&l===r-1&&(l=r-2,h=1),this.closed||l>0?o=s[(l-1)%r]:(Go.subVectors(s[0],s[1]).add(s[0]),o=Go);let u=s[l%r],d=s[(l+1)%r];if(this.closed||l+2<r?c=s[(l+2)%r]:(Go.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Go),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(o.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(c),p);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),ah.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,g,_,f),oh.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,g,_,f),lh.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,g,_,f)}else this.curveType==="catmullrom"&&(ah.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),oh.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),lh.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return n.set(ah.calc(h),oh.calc(h),lh.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new S().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ep(i,e,t,n,s){let r=.5*(n-e),a=.5*(s-t),o=i*i;return(2*t-2*n+r+a)*(i*o)+(-3*t+3*n-2*r-a)*o+r*i+t}function Yr(i,e,t,n){return(function(s,r){let a=1-s;return a*a*r})(i,e)+(function(s,r){return 2*(1-s)*s*r})(i,t)+(function(s,r){return s*s*r})(i,n)}function Zr(i,e,t,n,s){return(function(r,a){let o=1-r;return o*o*o*a})(i,e)+(function(r,a){let o=1-r;return 3*o*o*r*a})(i,t)+(function(r,a){return 3*(1-r)*r*r*a})(i,n)+(function(r,a){return r*r*r*a})(i,s)}var pa=class extends mn{constructor(e=new te,t=new te,n=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new te){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zr(e,s.x,r.x,a.x,o.x),Zr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hl=class extends mn{constructor(e=new S,t=new S,n=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new S){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zr(e,s.x,r.x,a.x,o.x),Zr(e,s.y,r.y,a.y,o.y),Zr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fa=class extends mn{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ul=class extends mn{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends mn{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Yr(e,s.x,r.x,a.x),Yr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=class extends mn{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Yr(e,s.x,r.x,a.x),Yr(e,s.y,r.y,a.y),Yr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(ep(o,c.x,l.x,h.x,u.x),ep(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new te().fromArray(s))}return this}},dl=Object.freeze({__proto__:null,ArcCurve:ll,CatmullRomCurve3:cl,CubicBezierCurve:pa,CubicBezierCurve3:hl,EllipseCurve:lr,LineCurve:fa,LineCurve3:ul,QuadraticBezierCurve:ma,QuadraticBezierCurve3:ga,SplineCurve:_a}),pl=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new dl[s.type]().fromJSON(s))}return this}},va=class extends pl{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new fa(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ma(this.currentPoint.clone(),new te(e,t),new te(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new pa(this.currentPoint.clone(),new te(e,t),new te(n,s),new te(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new _a(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new lr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ya=class extends va{constructor(e){super(e),this.uuid=Qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new va().fromJSON(s))}return this}};function _g(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=tp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=(function(h,u,d,p){let g=[];for(let _=0,f=u.length;_<f;_++){let m=tp(h,u[_]*p,_<f-1?u[_+1]*p:h.length,p,!1);m===m.next&&(m.steiner=!0),g.push(wg(m))}g.sort(Mg);for(let _=0;_<g.length;_++)d=Eg(g[_],d);return d})(i,e,r,t)),i.length>80*t){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let p=i[d],g=i[d+1];p<o&&(o=p),g<c&&(c=g),p>h&&(h=p),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return xa(r,a,t,o,c,l,0),a}function tp(i,e,t,n,s){let r;if(s===(function(a,o,c,l){let h=0;for(let u=o,d=c-l;u<c;u+=l)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=np(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=np(a/n|0,i[a],i[a+1],r);return r&&cr(r,r.next)&&(Ma(r),r=r.next),r}function _s(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!cr(n,n.next)&&xt(n.prev,n,n.next)!==0)n=n.next;else{if(Ma(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function xa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&(function(c,l,h,u){let d=c;do d.z===0&&(d.z=vh(d.x,d.y,l,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let g,_=1;do{let f,m=p;p=null;let v=null;for(g=0;m;){g++;let y=m,x=0;for(let w=0;w<_&&(x++,y=y.nextZ,y);w++);let E=_;for(;x>0||E>0&&y;)x!==0&&(E===0||!y||m.z<=y.z)?(f=m,m=m.nextZ,x--):(f=y,y=y.nextZ,E--),v?v.nextZ=f:p=f,f.prevZ=v,v=f;m=y}v.nextZ=null,_*=2}while(g>1)})(d)})(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?yg(i,n,s,r):vg(i))e.push(c.i,i.i,l.i),Ma(i),i=l.next,o=l.next;else if((i=l)===o){a?a===1?xa(i=xg(_s(i),e),e,t,n,s,r,2):a===2&&bg(i,e,t,n,s,r):xa(_s(i),e,t,n,s,r,1);break}}}function vg(i){let e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),p=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Xr(s,o,r,c,a,l,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(xt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,p=Math.min(o,c,l),g=Math.min(h,u,d),_=Math.max(o,c,l),f=Math.max(h,u,d),m=vh(p,g,e,t,n),v=vh(_,f,e,t,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=m&&x&&x.z<=v;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=f&&y!==s&&y!==a&&Xr(o,h,c,u,l,d,y.x,y.y)&&xt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=f&&x!==s&&x!==a&&Xr(o,h,c,u,l,d,x.x,x.y)&&xt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=f&&y!==s&&y!==a&&Xr(o,h,c,u,l,d,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=f&&x!==s&&x!==a&&Xr(o,h,c,u,l,d,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function xg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!cr(n,s)&&cf(n,t,t.next,s)&&ba(n,s)&&ba(s,n)&&(e.push(n.i,t.i,s.i),Ma(t),Ma(t.next),t=i=s),t=t.next}while(t!==i);return _s(t)}function bg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tg(a,o)){let c=hf(a,o);return a=_s(a,a.next),c=_s(c,c.next),xa(a,e,t,n,s,r,0),void xa(c,e,t,n,s,r,0)}o=o.next}a=a.next}while(a!==i)}function Mg(i,e){let t=i.x-e.x;return t===0&&(t=i.y-e.y,t===0)&&(t=(i.next.y-i.y)/(i.next.x-i.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Eg(i,e){let t=(function(s,r){let a=r,o=s.x,c=s.y,l,h=-1/0;if(cr(s,a))return a;do{if(cr(s,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let _=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(_<=o&&_>h&&(h=_,l=a.x<a.next.x?a:a.next,_===o))return l}a=a.next}while(a!==r);if(!l)return null;let u=l,d=l.x,p=l.y,g=1/0;a=l;do{if(o>=a.x&&a.x>=d&&o!==a.x&&lf(c<p?o:h,c,d,p,c<p?h:o,c,a.x,a.y)){let _=Math.abs(c-a.y)/(o-a.x);ba(a,s)&&(_<g||_===g&&(a.x>l.x||a.x===l.x&&Sg(l,a)))&&(l=a,g=_)}a=a.next}while(a!==u);return l})(i,e);if(!t)return e;let n=hf(t,i);return _s(n,n.next),_s(t,t.next)}function Sg(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function vh(i,e,t,n,s){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*s|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*s|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function wg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function lf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Xr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&lf(i,e,t,n,s,r,a,o)}function Tg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let s=t;do{if(s.i!==t.i&&s.next.i!==t.i&&s.i!==n.i&&s.next.i!==n.i&&cf(s,s.next,t,n))return!0;s=s.next}while(s!==t);return!1})(i,e)&&(ba(i,e)&&ba(e,i)&&(function(t,n){let s=t,r=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do s.y>o!=s.next.y>o&&s.next.y!==s.y&&a<(s.next.x-s.x)*(o-s.y)/(s.next.y-s.y)+s.x&&(r=!r),s=s.next;while(s!==t);return r})(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||cr(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function cr(i,e){return i.x===e.x&&i.y===e.y}function cf(i,e,t,n){let s=Wo(xt(i,e,t)),r=Wo(xt(i,e,n)),a=Wo(xt(t,n,i)),o=Wo(xt(t,n,e));return s!==r&&a!==o||!(s!==0||!Vo(i,t,e))||!(r!==0||!Vo(i,n,e))||!(a!==0||!Vo(t,i,n))||!(o!==0||!Vo(t,e,n))}function Vo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Wo(i){return i>0?1:i<0?-1:0}function ba(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function hf(i,e){let t=yh(i.i,i.x,i.y),n=yh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function np(i,e,t,n){let s=yh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ma(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var xh=class{static triangulate(e,t,n=2){return _g(e,t,n)}},Jn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ip(e),sp(n,e);let a=e.length;t.forEach(ip);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,sp(n,t[c]);let o=xh.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function ip(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function sp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var fl=class i extends lt{constructor(e=new ya([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Ag,y,x,E,w,C,D=!1;m&&(y=m.getSpacedPoints(h),D=!0,d=!1,x=m.computeFrenetFrames(h,!1),E=new S,w=new S,C=new S),d||(f=0,p=0,g=0,_=0);let P=o.extractPoints(l),N=P.shape,H=P.holes;if(!Jn.isClockWise(N)){N=N.reverse();for(let F=0,b=H.length;F<b;F++){let L=H[F];Jn.isClockWise(L)&&(H[F]=L.reverse())}}function O(F){let b=10000000000000001e-36,L=F[0];for(let B=1;B<=F.length;B++){let k=B%F.length,Y=F[k],G=Y.x-L.x,j=Y.y-L.y,ae=G*G+j*j,fe=Math.max(Math.abs(Y.x),Math.abs(Y.y),Math.abs(L.x),Math.abs(L.y));ae<=b*fe*fe?(F.splice(k,1),B--):L=Y}}O(N),H.forEach(O);let J=H.length,W=N;for(let F=0;F<J;F++){let b=H[F];N=N.concat(b)}function Q(F,b,L){return b||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(b,L)}let ee=N.length;function le(F,b,L){let B,k,Y,G=F.x-b.x,j=F.y-b.y,ae=L.x-F.x,fe=L.y-F.y,oe=G*G+j*j,_e=G*fe-j*ae;if(Math.abs(_e)>Number.EPSILON){let Ee=Math.sqrt(oe),Te=Math.sqrt(ae*ae+fe*fe),qe=b.x-j/Ee,nt=b.y+G/Ee,it=((L.x-fe/Te-qe)*fe-(L.y+ae/Te-nt)*ae)/(G*fe-j*ae);B=qe+G*it-F.x,k=nt+j*it-F.y;let me=B*B+k*k;if(me<=2)return new te(B,k);Y=Math.sqrt(me/2)}else{let Ee=!1;G>Number.EPSILON?ae>Number.EPSILON&&(Ee=!0):G<-Number.EPSILON?ae<-Number.EPSILON&&(Ee=!0):Math.sign(j)===Math.sign(fe)&&(Ee=!0),Ee?(B=-j,k=G,Y=Math.sqrt(oe)):(B=G,k=j,Y=Math.sqrt(oe/2))}return new te(B/Y,k/Y)}let se=[];for(let F=0,b=W.length,L=b-1,B=F+1;F<b;F++,L++,B++)L===b&&(L=0),B===b&&(B=0),se[F]=le(W[F],W[L],W[B]);let ye=[],we,Me,Ie=se.concat();for(let F=0,b=J;F<b;F++){let L=H[F];we=[];for(let B=0,k=L.length,Y=k-1,G=B+1;B<k;B++,Y++,G++)Y===k&&(Y=0),G===k&&(G=0),we[B]=le(L[B],L[Y],L[G]);ye.push(we),Ie=Ie.concat(we)}if(f===0)Me=Jn.triangulateShape(W,H);else{let F=[],b=[];for(let L=0;L<f;L++){let B=L/f,k=p*Math.cos(B*Math.PI/2),Y=g*Math.sin(B*Math.PI/2)+_;for(let G=0,j=W.length;G<j;G++){let ae=Q(W[G],se[G],Y);Re(ae.x,ae.y,-k),B===0&&F.push(ae)}for(let G=0,j=J;G<j;G++){let ae=H[G];we=ye[G];let fe=[];for(let oe=0,_e=ae.length;oe<_e;oe++){let Ee=Q(ae[oe],we[oe],Y);Re(Ee.x,Ee.y,-k),B===0&&fe.push(Ee)}B===0&&b.push(fe)}}Me=Jn.triangulateShape(F,b)}let ce=Me.length,ue=g+_;for(let F=0;F<ee;F++){let b=d?Q(N[F],Ie[F],ue):N[F];D?(w.copy(x.normals[0]).multiplyScalar(b.x),E.copy(x.binormals[0]).multiplyScalar(b.y),C.copy(y[0]).add(w).add(E),Re(C.x,C.y,C.z)):Re(b.x,b.y,0)}for(let F=1;F<=h;F++)for(let b=0;b<ee;b++){let L=d?Q(N[b],Ie[b],ue):N[b];D?(w.copy(x.normals[F]).multiplyScalar(L.x),E.copy(x.binormals[F]).multiplyScalar(L.y),C.copy(y[F]).add(w).add(E),Re(C.x,C.y,C.z)):Re(L.x,L.y,u/h*F)}for(let F=f-1;F>=0;F--){let b=F/f,L=p*Math.cos(b*Math.PI/2),B=g*Math.sin(b*Math.PI/2)+_;for(let k=0,Y=W.length;k<Y;k++){let G=Q(W[k],se[k],B);Re(G.x,G.y,u+L)}for(let k=0,Y=H.length;k<Y;k++){let G=H[k];we=ye[k];for(let j=0,ae=G.length;j<ae;j++){let fe=Q(G[j],we[j],B);D?Re(fe.x,fe.y+y[h-1].y,y[h-1].x+L):Re(fe.x,fe.y,u+L)}}}function he(F,b){let L=F.length;for(;--L>=0;){let B=L,k=L-1;k<0&&(k=F.length-1);for(let Y=0,G=h+2*f;Y<G;Y++){let j=ee*Y,ae=ee*(Y+1);A(b+B+j,b+k+j,b+k+ae,b+B+ae)}}}function Re(F,b,L){c.push(F),c.push(b),c.push(L)}function Be(F,b,L){T(F),T(b),T(L);let B=s.length/3,k=v.generateTopUV(n,s,B-3,B-2,B-1);z(k[0]),z(k[1]),z(k[2])}function A(F,b,L,B){T(F),T(b),T(B),T(b),T(L),T(B);let k=s.length/3,Y=v.generateSideWallUV(n,s,k-6,k-3,k-2,k-1);z(Y[0]),z(Y[1]),z(Y[3]),z(Y[1]),z(Y[2]),z(Y[3])}function T(F){s.push(c[3*F+0]),s.push(c[3*F+1]),s.push(c[3*F+2])}function z(F){r.push(F.x),r.push(F.y)}(function(){let F=s.length/3;if(d){let b=0,L=ee*b;for(let B=0;B<ce;B++){let k=Me[B];Be(k[2]+L,k[1]+L,k[0]+L)}b=h+2*f,L=ee*b;for(let B=0;B<ce;B++){let k=Me[B];Be(k[0]+L,k[1]+L,k[2]+L)}}else{for(let b=0;b<ce;b++){let L=Me[b];Be(L[2],L[1],L[0])}for(let b=0;b<ce;b++){let L=Me[b];Be(L[0]+ee*h,L[1]+ee*h,L[2]+ee*h)}}n.addGroup(F,s.length/3-F,0)})(),(function(){let F=s.length/3,b=0;he(W,b),b+=W.length;for(let L=0,B=H.length;L<B;L++){let k=H[L];he(k,b),b+=k.length}n.addGroup(F,s.length/3-F,1)})()}this.setAttribute("position",new Ae(s,3)),this.setAttribute("uv",new Ae(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,s){if(s.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let o=t[r];s.shapes.push(o.uuid)}else s.shapes.push(t.uuid);return s.options=Object.assign({},n),n.extrudePath!==void 0&&(s.options.extrudePath=n.extrudePath.toJSON()),s})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new dl[s.type]().fromJSON(s)),new i(n,e.options)}},Ag={generateTopUV:function(i,e,t,n,s){let r=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*s],h=e[3*s+1];return[new te(r,a),new te(o,c),new te(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*s],p=e[3*s+1],g=e[3*s+2],_=e[3*r],f=e[3*r+1],m=e[3*r+2];return Math.abs(o-h)<Math.abs(a-l)?[new te(a,1-c),new te(l,1-u),new te(d,1-g),new te(_,1-m)]:[new te(o,1-c),new te(h,1-u),new te(p,1-g),new te(f,1-m)]}},Ct=class i extends Wi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ml=class i extends lt{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,n=0,s=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Oe(s,0,2*Math.PI);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new S,d=new te,p=new S,g=new S,_=new S,f=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:f=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,p.x=1*m,p.y=-f,p.z=0*m,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:f=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,p.x=1*m,p.y=-f,p.z=0*m,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let v=0;v<=t;v++){let y=n+v*h*s,x=Math.sin(y),E=Math.cos(y);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*x,u.y=e[w].y,u.z=e[w].x*E,a.push(u.x,u.y,u.z),d.x=v/t,d.y=w/(e.length-1),o.push(d.x,d.y);let C=c[3*w+0]*x,D=c[3*w+1],P=c[3*w+0]*E;l.push(C,D,P)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let x=y+v*e.length,E=x,w=x+e.length,C=x+e.length+1,D=x+1;r.push(E,w,D),r.push(C,D,w)}this.setIndex(r),this.setAttribute("position",new Ae(a,3)),this.setAttribute("uv",new Ae(o,2)),this.setAttribute("normal",new Ae(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},$i=class i extends Wi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Qe=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,p=[],g=[],_=[],f=[];for(let m=0;m<h;m++){let v=m*d-a;for(let y=0;y<l;y++){let x=y*u-r;g.push(x,-v,0),_.push(0,0,1),f.push(y/o),f.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<o;v++){let y=v+l*m,x=v+l*(m+1),E=v+1+l*(m+1),w=v+1+l*m;p.push(y,x,w),p.push(x,E,w)}this.setIndex(p),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},vs=class i extends lt{constructor(e=.5,t=1,n=32,s=1,r=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(s=Math.max(1,s)),p=new S,g=new te;for(let _=0;_<=s;_++){for(let f=0;f<=n;f++){let m=r+f/n*a;p.x=u*Math.cos(m),p.y=u*Math.sin(m),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let f=_*(n+1);for(let m=0;m<n;m++){let v=m+f,y=v,x=v+n+1,E=v+n+2,w=v+1;o.push(y,x,w),o.push(x,E,w)}}this.setIndex(o),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},gl=class i extends lt{constructor(e=new ya([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=s.length/3,d=h.extractPoints(t),p=d.shape,g=d.holes;Jn.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,m=g.length;f<m;f++){let v=g[f];Jn.isClockWise(v)===!0&&(g[f]=v.reverse())}let _=Jn.triangulateShape(p,g);for(let f=0,m=g.length;f<m;f++){let v=g[f];p=p.concat(v)}for(let f=0,m=p.length;f<m;f++){let v=p[f];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let f=0,m=_.length;f<m;f++){let v=_[f],y=v[0]+u,x=v[1]+u,E=v[2]+u;n.push(y,x,E),c+=3}}this.setIndex(n),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(r,3)),this.setAttribute("uv",new Ae(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let s=0,r=t.length;s<r;s++){let a=t[s];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}},gn=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new S,d=new S,p=[],g=[],_=[],f=[];for(let m=0;m<=n;m++){let v=[],y=m/n,x=0;m===0&&a===0?x=.5/t:m===n&&c===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){let w=E/t;u.x=-e*Math.cos(s+w*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+w*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(w+x,1-y),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let y=h[m][v+1],x=h[m][v],E=h[m+1][v],w=h[m+1][v+1];(m!==0||a>0)&&p.push(y,x,w),(m!==n-1||c<Math.PI)&&p.push(x,E,w)}this.setIndex(p),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},_l=class i extends Wi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},vl=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new S,u=new S,d=new S;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let _=g/s*r,f=p/n*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(_),u.y=(e+t*Math.cos(f))*Math.sin(_),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,f=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,v=(s+1)*p+g;a.push(_,f,v),a.push(f,m,v)}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},yl=class i extends lt{constructor(e=1,t=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);let o=[],c=[],l=[],h=[],u=new S,d=new S,p=new S,g=new S,_=new S,f=new S,m=new S;for(let y=0;y<=n;++y){let x=y/n*r*Math.PI*2;v(x,r,a,e,p),v(x+.01,r,a,e,g),f.subVectors(g,p),m.addVectors(g,p),_.crossVectors(f,m),m.crossVectors(_,f),_.normalize(),m.normalize();for(let E=0;E<=s;++E){let w=E/s*Math.PI*2,C=-t*Math.cos(w),D=t*Math.sin(w);u.x=p.x+(C*m.x+D*_.x),u.y=p.y+(C*m.y+D*_.y),u.z=p.z+(C*m.z+D*_.z),c.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),l.push(d.x,d.y,d.z),h.push(y/n),h.push(E/s)}}for(let y=1;y<=n;y++)for(let x=1;x<=s;x++){let E=(s+1)*(y-1)+(x-1),w=(s+1)*y+(x-1),C=(s+1)*y+x,D=(s+1)*(y-1)+x;o.push(E,w,D),o.push(w,C,D)}function v(y,x,E,w,C){let D=Math.cos(y),P=Math.sin(y),N=E/x*y,H=Math.cos(N);C.x=w*(2+H)*.5*D,C.y=w*(2+H)*P*.5,C.z=w*Math.sin(N)*.5}this.setIndex(o),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},xl=class i extends lt{constructor(e=new ga(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new S,c=new S,l=new te,h=new S,u=[],d=[],p=[],g=[];function _(f){h=e.getPointAt(f/t,h);let m=a.normals[f],v=a.binormals[f];for(let y=0;y<=s;y++){let x=y/s*Math.PI*2,E=Math.sin(x),w=-Math.cos(x);c.x=w*m.x+E*v.x,c.y=w*m.y+E*v.y,c.z=w*m.z+E*v.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)_(f);_(r===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let m=0;m<=s;m++)l.x=f/t,l.y=m/s,p.push(l.x,l.y)})(),(function(){for(let f=1;f<=t;f++)for(let m=1;m<=s;m++){let v=(s+1)*(f-1)+(m-1),y=(s+1)*f+(m-1),x=(s+1)*f+m,E=(s+1)*(f-1)+m;g.push(v,y,E),g.push(y,x,E)}})()})(),this.setIndex(g),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new dl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},bl=class extends lt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new S,r=new S;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let p=d,g=d+u.count;p<g;p+=3)for(let _=0;_<3;_++){let f=o.getX(p+_),m=o.getX(p+(_+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,m),rp(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),rp(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ae(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function rp(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(s)!==!0&&(t.add(n),t.add(s),!0)}var my=Object.freeze({__proto__:null,BoxGeometry:We,CapsuleGeometry:rl,CircleGeometry:ai,ConeGeometry:On,CylinderGeometry:je,DodecahedronGeometry:al,EdgesGeometry:ol,ExtrudeGeometry:fl,IcosahedronGeometry:Ct,LatheGeometry:ml,OctahedronGeometry:$i,PlaneGeometry:Qe,PolyhedronGeometry:Wi,RingGeometry:vs,ShapeGeometry:gl,SphereGeometry:gn,TetrahedronGeometry:_l,TorusGeometry:vl,TorusKnotGeometry:yl,TubeGeometry:xl,WireframeGeometry:bl});var ie=class extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ml=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},El=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $o(i,e){return i&&i.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i):i}function Rg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ys=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sl=class extends ys{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dh,endingEnd:dh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ph:r=e,o=2*t-n;break;case fh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ph:a=e,c=2*n-t;break;case fh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,f=_*g,m=-d*f+2*d*_-d*g,v=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-p)*f+(1.5+p)*_+.5*g,x=p*f-p*_;for(let E=0;E!==o;++E)r[E]=m*a[h+E]+v*a[l+E]+y*a[c+E]+x*a[u+E];return r}},wl=class extends ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Tl=class extends ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$o(t,this.TimeBufferType),this.values=$o(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$o(e.times,Array),values:$o(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Jr:t=this.InterpolantFactoryMethodDiscrete;break;case Ko:t=this.InterpolantFactoryMethodLinear;break;case jo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return Ko;case this.InterpolantFactoryMethodSmooth:return jo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Rg(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===jo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(s)c=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let g=t[h+p];if(g!==t[u+p]||g!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};fn.prototype.ValueTypeName="",fn.prototype.TimeBufferType=Float32Array,fn.prototype.ValueBufferType=Float32Array,fn.prototype.DefaultInterpolation=Ko;var zi=class extends fn{constructor(e,t,n){super(e,t,n)}};zi.prototype.ValueTypeName="bool",zi.prototype.ValueBufferType=Array,zi.prototype.DefaultInterpolation=Jr,zi.prototype.InterpolantFactoryMethodLinear=void 0,zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};Al.prototype.ValueTypeName="color";var Rl=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};Rl.prototype.ValueTypeName="number";var Cl=class extends ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)ln.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ea=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Cl(this.times,this.values,this.getValueSize(),e)}};Ea.prototype.ValueTypeName="quaternion",Ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends fn{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="string",Hi.prototype.ValueBufferType=Array,Hi.prototype.DefaultInterpolation=Jr,Hi.prototype.InterpolantFactoryMethodLinear=void 0,Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};Il.prototype.ValueTypeName="vector";var Pl=class{constructor(e,t,n){let s=this,r,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){c++,a===!1&&s.onStart!==void 0&&s.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,c),o===c&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},uf=new Pl,Ll=class{constructor(e){this.manager=e!==void 0?e:uf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var hr=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Sa=class extends hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ch=new Pe,ap=new S,op=new S,Dl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vi,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ap.setFromMatrixPosition(e.matrixWorld),t.position.copy(ap),op.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(op),t.updateMatrixWorld(),ch.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var lp=new Pe,qr=new S,hh=new S,bh=class extends Dl{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qr.setFromMatrixPosition(e.matrixWorld),n.position.copy(qr),hh.copy(n.position),hh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(hh),n.updateMatrixWorld(),s.makeTranslation(-qr.x,-qr.y,-qr.z),lp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lp,n.coordinateSystem,n.reversedDepth)}},wa=class extends hr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bh}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ta=class extends ir{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mh=class extends Dl{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Aa=class extends hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Mh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var gy=new Pe,_y=new Pe,vy=new Pe;var kl=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ra=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},yy=new S,xy=new ln,by=new S,My=new S,Ey=new S;var Sy=new S,wy=new ln,Ty=new S,Ay=new S;var gu="\\[\\]\\.:\\/",Cg=new RegExp("["+gu+"]","g"),uh="[^"+gu+"]",Ig="[^"+gu.replace("\\.","")+"]",Pg=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",uh)+/(WCOD+)?/.source.replace("WCOD",Ig)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh)+"$"),Lg=["material","materials","bones","map"],dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cg,"")}static parseTrackName(e){let t=Pg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=class{constructor(i,e,t){let n=t||dt.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=t.length;n!==s;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray],dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ry=new Float32Array(1);var cp=new Pe,Ca=class{constructor(e,t,n=0,s=1/0){this.ray=new si(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cp),this}intersectObject(e,t=!0,n=[]){return Eh(e,this,n,t),n.sort(hp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Eh(e[s],this,n,t);return n.sort(hp),n}};function hp(i,e){return i.distance-e.distance}function Eh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Eh(r[a],e,t,!0)}}var ur=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Oe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Cy=new te;var Iy=new S,Py=new S,Ly=new S,Dy=new S,ky=new S,Fy=new S,Ny=new S;var Uy=new S;var By=new S,Oy=new Pe,zy=new Pe;var Hy=new S,Gy=new de,Vy=new de;var Wy=new S,$y=new S,jy=new S;var qy=new S,Xy=new ir;var Ky=new Sn;var Yy=new S;var Ia=class extends ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){e!==void 0?(this.domElement!==null&&this.disconnect(),this.domElement=e):console.warn("THREE.Controls: connect() now requires an element.")}disconnect(){}dispose(){}update(){}};function _u(i,e,t,n){let s=(function(r){switch(r){case li:case Ih:return{byteLength:1,components:1};case mr:case Ph:case gr:return{byteLength:2,components:1};case Xl:case Kl:return{byteLength:2,components:4};case Ms:case ql:case zn:return{byteLength:4,components:1};case Lh:case Dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)})(n);switch(t){case 1021:return i*e;case Yl:case Zl:return i*e/s.components*s.byteLength;case 1030:case 1031:return i*e*2/s.components*s.byteLength;case 1022:return i*e*3/s.components*s.byteLength;case Hn:case 1033:return i*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Ff(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function kg(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let r=e.get(t);return void((!r||r.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let s=e.get(t);if(s===void 0)e.set(t,(function(r,a){let o=r.array,c=r.usage,l=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(a,h),i.bufferData(a,o,c),r.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=i.HALF_FLOAT;else if(o instanceof Uint16Array)u=r.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:r.version,size:l}})(t,n));else if(s.version<t.version){if(s.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(r,a,o){let c=a.array,l=a.updateRanges;if(i.bindBuffer(o,r),l.length===0)i.bufferSubData(o,0,c);else{l.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<l.length;u++){let d=l[h],p=l[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,l[h]=p)}l.length=h+1;for(let u=0,d=l.length;u<d;u++){let p=l[u];i.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(s.buffer,t,n),s.version=t.version}}}}var He={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},pe={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},ci={basic:{uniforms:Qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new de(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Qt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Qt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new de(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Qt([pe.points,pe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Qt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Qt([pe.common,pe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Qt([pe.sprite,pe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Qt([pe.common,pe.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Qt([pe.lights,pe.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ci.physical={uniforms:Qt([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var nc={r:0,b:0,g:0},ws=new cn,Fg=new Pe;function Ng(i,e,t,n,s,r,a){let o=new de(0),c,l,h=r===!0?0:1,u=null,d=0,p=null;function g(f){let m=f.isScene===!0?f.background:null;return m&&m.isTexture&&(m=(f.backgroundBlurriness>0?t:e).get(m)),m}function _(f,m){f.getRGB(nc,fu(i)),n.buffers.color.setClear(nc.r,nc.g,nc.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(f,m=1){o.set(f),h=m,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,_(o,h)},render:function(f){let m=!1,v=g(f);v===null?_(o,h):v&&v.isColor&&(_(v,1),m=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||m)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(f,m){let v=g(m);v&&(v.isCubeTexture||v.mapping===Da)?(l===void 0&&(l=new $(new We(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ss(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,x,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),ws.copy(m.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(ws)),l.material.toneMapped=et.getTransfer(v.colorSpace)!==ot,u===v&&d===v.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $(new Qe(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ss(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=et.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}}}function Ug(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=l(null),r=s,a=!1;function o(m){return i.bindVertexArray(m)}function c(m){return i.deleteVertexArray(m)}function l(m){let v=[],y=[],x=[];for(let E=0;E<t;E++)v[E]=0,y[E]=0,x[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:y,attributeDivisors:x,object:m,attributes:{},index:null}}function h(){let m=r.newAttributes;for(let v=0,y=m.length;v<y;v++)m[v]=0}function u(m){d(m,0)}function d(m,v){let y=r.newAttributes,x=r.enabledAttributes,E=r.attributeDivisors;y[m]=1,x[m]===0&&(i.enableVertexAttribArray(m),x[m]=1),E[m]!==v&&(i.vertexAttribDivisor(m,v),E[m]=v)}function p(){let m=r.newAttributes,v=r.enabledAttributes;for(let y=0,x=v.length;y<x;y++)v[y]!==m[y]&&(i.disableVertexAttribArray(y),v[y]=0)}function g(m,v,y,x,E,w,C){C===!0?i.vertexAttribIPointer(m,v,y,E,w):i.vertexAttribPointer(m,v,y,x,E,w)}function _(){f(),a=!0,r!==s&&(r=s,o(r.object))}function f(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:function(m,v,y,x,E){let w=!1,C=(function(D,P,N){let H=N.wireframe===!0,O=n[D.id];O===void 0&&(O={},n[D.id]=O);let J=O[P.id];J===void 0&&(J={},O[P.id]=J);let W=J[H];return W===void 0&&(W=l(i.createVertexArray()),J[H]=W),W})(x,y,v);r!==C&&(r=C,o(r.object)),w=(function(D,P,N,H){let O=r.attributes,J=P.attributes,W=0,Q=N.getAttributes();for(let ee in Q)if(Q[ee].location>=0){let le=O[ee],se=J[ee];if(se===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),le===void 0||le.attribute!==se||se&&le.data!==se.data)return!0;W++}return r.attributesNum!==W||r.index!==H})(m,x,y,E),w&&(function(D,P,N,H){let O={},J=P.attributes,W=0,Q=N.getAttributes();for(let ee in Q)if(Q[ee].location>=0){let le=J[ee];le===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(le=D.instanceColor));let se={};se.attribute=le,le&&le.data&&(se.data=le.data),O[ee]=se,W++}r.attributes=O,r.attributesNum=W,r.index=H})(m,x,y,E),E!==null&&e.update(E,i.ELEMENT_ARRAY_BUFFER),(w||a)&&(a=!1,(function(D,P,N,H){h();let O=H.attributes,J=N.getAttributes(),W=P.defaultAttributeValues;for(let Q in J){let ee=J[Q];if(ee.location>=0){let le=O[Q];if(le===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),le!==void 0){let se=le.normalized,ye=le.itemSize,we=e.get(le);if(we===void 0)continue;let Me=we.buffer,Ie=we.type,ce=we.bytesPerElement,ue=Ie===i.INT||Ie===i.UNSIGNED_INT||le.gpuType===ql;if(le.isInterleavedBufferAttribute){let he=le.data,Re=he.stride,Be=le.offset;if(he.isInstancedInterleavedBuffer){for(let A=0;A<ee.locationSize;A++)d(ee.location+A,he.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let A=0;A<ee.locationSize;A++)u(ee.location+A);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let A=0;A<ee.locationSize;A++)g(ee.location+A,ye/ee.locationSize,Ie,se,Re*ce,(Be+ye/ee.locationSize*A)*ce,ue)}else{if(le.isInstancedBufferAttribute){for(let he=0;he<ee.locationSize;he++)d(ee.location+he,le.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let he=0;he<ee.locationSize;he++)u(ee.location+he);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let he=0;he<ee.locationSize;he++)g(ee.location+he,ye/ee.locationSize,Ie,se,ye*ce,ye/ee.locationSize*he*ce,ue)}}else if(W!==void 0){let se=W[Q];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(ee.location,se);break;case 3:i.vertexAttrib3fv(ee.location,se);break;case 4:i.vertexAttrib4fv(ee.location,se);break;default:i.vertexAttrib1fv(ee.location,se)}}}}p()})(m,v,y,x),E!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))},reset:_,resetDefaultState:f,dispose:function(){_();for(let m in n){let v=n[m];for(let y in v){let x=v[y];for(let E in x)c(x[E].object),delete x[E];delete v[y]}delete n[m]}},releaseStatesOfGeometry:function(m){if(n[m.id]===void 0)return;let v=n[m.id];for(let y in v){let x=v[y];for(let E in x)c(x[E].object),delete x[E];delete v[y]}delete n[m.id]},releaseStatesOfProgram:function(m){for(let v in n){let y=n[v];if(y[m.id]===void 0)continue;let x=y[m.id];for(let E in x)c(x[E].object),delete x[E];delete y[m.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Bg(i,e,t){let n;function s(r,a,o){o!==0&&(i.drawArraysInstanced(n,r,a,o),t.update(a,n,o))}this.setMode=function(r){n=r},this.render=function(r,a){i.drawArrays(n,r,a),t.update(a,n,1)},this.renderInstances=s,this.renderMultiDraw=function(r,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,r,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,n,1)},this.renderMultiDrawInstances=function(r,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<r.length;h++)s(r[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(n,r,0,a,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*c[u];t.update(h,n,1)}}}function Og(i,e,t,n){let s;function r(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s},getMaxPrecision:r,textureFormatReadable:function(d){return d===Hn||n.convert(d)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==li&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==zn&&!p)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function zg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new En,o=new Ue,c={value:null,needsUpdate:!1};function l(h,u,d,p){let g=h!==null?h.length:0,_=null;if(g!==0){if(_=c.value,p!==!0||_===null){let f=d+4*g,m=u.matrixWorldInverse;o.getNormalMatrix(m),(_===null||_.length<f)&&(_=new Float32Array(f));for(let v=0,y=d;v!==g;++v,y+=4)a.copy(h[v]).applyMatrix4(m,o),a.normal.toArray(_,y),_[y+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||s;return s=u,n=h.length,d},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,g=h.clipIntersection,_=h.clipShadows,f=i.get(h);if(!s||p===null||p.length===0||r&&!_)r?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let m=r?0:n,v=4*m,y=f.clippingState||null;c.value=y,y=l(p,u,v,d);for(let x=0;x!==v;++x)y[x]=t[x];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=m}}}function Hg(i){let e=new WeakMap;function t(s,r){return r===Wl?s.mapping=fr:r===$l&&(s.mapping=xs),s}function n(s){let r=s.target;r.removeEventListener("dispose",n);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(s){if(s&&s.isTexture){let r=s.mapping;if(r===Wl||r===$l){if(e.has(s))return t(e.get(s).texture,s.mapping);{let a=s.image;if(a&&a.height>0){let o=new tl(a.height);return o.fromEquirectangularTexture(i,s),e.set(s,o),s.addEventListener("dispose",n),t(o.texture,s.mapping)}return null}}}return s},dispose:function(){e=new WeakMap}}}var df=[.125,.215,.35,.446,.526,.582],Ua=20,vu=new Ta,pf=new de,yu=null,xu=0,bu=0,Mu=!1,As=(1+Math.sqrt(5))/2,vr=1/As,ff=[new S(-As,vr,0),new S(As,vr,0),new S(-vr,0,As),new S(vr,0,As),new S(0,As,-vr),new S(0,As,vr),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],Gg=new S,rc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Gg}=r;yu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yu,xu,bu),this._renderer.xr.enabled=Mu,e.scissorTest=!1,ic(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:gr,format:Hn,colorSpace:ms,depthBuffer:!1},s=mf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+df.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);c.push(p);let g=1/p;d>a-4?g=df[d-a+4-1]:d===0&&(g=0),l.push(g);let _=1/(p-2),f=-_,m=1+_,v=[f,f,m,f,m,m,f,f,m,m,f,m],y=6,x=6,E=3,w=2,C=1,D=new Float32Array(E*x*y),P=new Float32Array(w*x*y),N=new Float32Array(C*x*y);for(let O=0;O<y;O++){let J=O%3*2/3-1,W=O>2?0:-1,Q=[J,W,0,J+2/3,W,0,J+2/3,W+1,0,J,W,0,J+2/3,W+1,0,J,W+1,0];D.set(Q,E*x*O),P.set(v,w*x*O);let ee=[O,O,O,O,O,O];N.set(ee,C*x*O)}let H=new lt;H.setAttribute("position",new $t(D,E)),H.setAttribute("uv",new $t(P,w)),H.setAttribute("faceIndex",new $t(N,C)),o.push(H),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(r)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(Ua),h=new S(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Ua,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})})(r,e,t)}return s}_compileMaterial(e){let t=new $(this._lodPlanes[0],e);this._renderer.compile(t,vu)}_sceneToCubeUV(e,t,n,s,r){let a=new Wt(90,1,t,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(pf),l.toneMapping=bi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(s),l.clearDepth(),l.setRenderTarget(null));let d=new Jt({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),p=new $(new We,d),g=!1,_=e.background;_?_.isColor&&(d.color.copy(_),e.background=null,g=!0):(d.color.copy(pf),g=!0);for(let f=0;f<6;f++){let m=f%3;m===0?(a.up.set(0,o[f],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+c[f],r.y,r.z)):m===1?(a.up.set(0,0,o[f]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+c[f],r.z)):(a.up.set(0,o[f],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+c[f]));let v=this._cubeSize;ic(s,m*v,f>2?v:0,v,v),l.setRenderTarget(s),g&&l.render(p,a),l.render(e,a)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=u,l.autoClear=h,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===fr||e.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new $(this._lodPlanes[0],r);r.uniforms.envMap.value=e;let o=this._cubeSize;ic(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,vu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ff[(s-r-1)%ff.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new $(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,g=r/p,_=isFinite(r)?1+Math.floor(3*g):Ua;_>Ua&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let f=[],m=0;for(let x=0;x<Ua;++x){let E=x/g,w=Math.exp(-E*E/2);f.push(w),x===0?m+=w:x<_&&(m+=2*w)}for(let x=0;x<f.length;x++)f[x]=f[x]/m;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let y=this._sizeLods[s];ic(t,3*y*(s>v-4?s-v+4:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(h,vu)}};function mf(i,e,t){let n=new ii(i,e,t);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ic(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gf(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function _f(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Lu(){return`

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
	`}function Vg(i){let e=new WeakMap,t=null;function n(s){let r=s.target;r.removeEventListener("dispose",n);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(s){if(s&&s.isTexture){let r=s.mapping,a=r===Wl||r===$l,o=r===fr||r===xs;if(a||o){let c=e.get(s),l=c!==void 0?c.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==l)return t===null&&(t=new rc(i)),c=a?t.fromEquirectangular(s,c):t.fromCubemap(s,c),c.texture.pmremVersion=s.pmremVersion,e.set(s,c),c.texture;if(c!==void 0)return c.texture;{let h=s.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let g=0;g<p;g++)u[g]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new rc(i)),c=a?t.fromEquirectangular(s):t.fromCubemap(s),c.texture.pmremVersion=s.pmremVersion,e.set(s,c),s.addEventListener("dispose",n),c.texture):null}}}return s},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Wg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $g(i,e,t,n){let s={},r=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);l.removeEventListener("dispose",a),delete s[l.id];let h=r.get(l);h&&(e.remove(h),r.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let _=h.array;d=h.version;for(let f=0,m=_.length;f<m;f+=3){let v=_[f+0],y=_[f+1],x=_[f+2];l.push(v,y,y,x,x,v)}}else{if(u===void 0)return;{let _=u.array;d=u.version;for(let f=0,m=_.length/3-1;f<m;f+=3){let v=f+0,y=f+1,x=f+2;l.push(v,y,y,x,x,v)}}}let p=new(pu(l)?sa:ia)(l,1);p.version=d;let g=r.get(c);g&&e.remove(g),r.set(c,p)}return{get:function(c,l){return s[l.id]===!0||(l.addEventListener("dispose",a),s[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],i.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=r.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return r.get(c)}}}function jg(i,e,t){let n,s,r;function a(o,c,l){l!==0&&(i.drawElementsInstanced(n,c,s,o*r,l),t.update(c,n,l))}this.setMode=function(o){n=o},this.setIndex=function(o){s=o.type,r=o.bytesPerElement},this.render=function(o,c){i.drawElements(n,c,s,o*r),t.update(c,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,s,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/r,c[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,c,0,s,o,0,h,0,l);let d=0;for(let p=0;p<l;p++)d+=c[p]*h[p];t.update(d,n,1)}}}function qg(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,s){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=s*(t/3);break;case i.LINES:e.lines+=s*(t/2);break;case i.LINE_STRIP:e.lines+=s*(t-1);break;case i.LINE_LOOP:e.lines+=s*t;break;case i.POINTS:e.points+=s*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Xg(i,e,t){let n=new WeakMap,s=new rt;return{update:function(r,a,o){let c=r.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=n.get(a);if(u===void 0||u.count!==h){let D=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],m=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),g===!0&&(v=3);let y=a.attributes.position.count*v,x=1;y>e.maxTextureSize&&(x=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*x*4*h),w=new na(E,y,x,h);w.type=zn,w.needsUpdate=!0;let C=4*v;for(let P=0;P<h;P++){let N=_[P],H=f[P],O=m[P],J=y*x*4*P;for(let W=0;W<N.count;W++){let Q=W*C;d===!0&&(s.fromBufferAttribute(N,W),E[J+Q+0]=s.x,E[J+Q+1]=s.y,E[J+Q+2]=s.z,E[J+Q+3]=0),p===!0&&(s.fromBufferAttribute(H,W),E[J+Q+4]=s.x,E[J+Q+5]=s.y,E[J+Q+6]=s.z,E[J+Q+7]=0),g===!0&&(s.fromBufferAttribute(O,W),E[J+Q+8]=s.x,E[J+Q+9]=s.y,E[J+Q+10]=s.z,E[J+Q+11]=O.itemSize===4?s.w:1)}}u={count:h,texture:w,size:new te(y,x)},n.set(a,u),a.addEventListener("dispose",D)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function Kg(i,e,t,n){let s=new WeakMap;function r(a){let o=a.target;o.removeEventListener("dispose",r),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(s.get(l)!==o&&(e.update(l),s.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),s.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),s.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;s.get(h)!==o&&(h.update(),s.set(h,o))}return l},dispose:function(){s=new WeakMap}}}var Nf=new rn,vf=new ua(1,1),Uf=new na,Bf=new Qo,Of=new ra,yf=[],xf=[],bf=new Float32Array(16),Mf=new Float32Array(9),Ef=new Float32Array(4);function xr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=yf[s];if(r===void 0&&(r=new Float32Array(s),yf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oc(i,e){let t=xf[e];t===void 0&&(t=new Int32Array(e),xf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Yg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Zg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function Jg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function Qg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function e0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;Ef.set(n),i.uniformMatrix2fv(this.addr,!1,Ef),Pt(t,n)}}function t0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;Mf.set(n),i.uniformMatrix3fv(this.addr,!1,Mf),Pt(t,n)}}function n0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;bf.set(n),i.uniformMatrix4fv(this.addr,!1,bf),Pt(t,n)}}function i0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function s0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function r0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function a0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function o0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function l0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function c0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function h0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function u0(i,e,t){let n=this.cache,s=t.allocateTextureUnit(),r;n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),this.type===i.SAMPLER_2D_SHADOW?(vf.compareFunction=hu,r=vf):r=Nf,t.setTexture2D(e||r,s)}function d0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bf,s)}function p0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Of,s)}function f0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Uf,s)}function m0(i,e){i.uniform1fv(this.addr,e)}function g0(i,e){let t=xr(e,this.size,2);i.uniform2fv(this.addr,t)}function _0(i,e){let t=xr(e,this.size,3);i.uniform3fv(this.addr,t)}function v0(i,e){let t=xr(e,this.size,4);i.uniform4fv(this.addr,t)}function y0(i,e){let t=xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function x0(i,e){let t=xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function b0(i,e){let t=xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function M0(i,e){i.uniform1iv(this.addr,e)}function E0(i,e){i.uniform2iv(this.addr,e)}function S0(i,e){i.uniform3iv(this.addr,e)}function w0(i,e){i.uniform4iv(this.addr,e)}function T0(i,e){i.uniform1uiv(this.addr,e)}function A0(i,e){i.uniform2uiv(this.addr,e)}function R0(i,e){i.uniform3uiv(this.addr,e)}function C0(i,e){i.uniform4uiv(this.addr,e)}function I0(i,e,t){let n=this.cache,s=e.length,r=oc(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Nf,r[a])}function P0(i,e,t){let n=this.cache,s=e.length,r=oc(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Bf,r[a])}function L0(i,e,t){let n=this.cache,s=e.length,r=oc(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Of,r[a])}function D0(i,e,t){let n=this.cache,s=e.length,r=oc(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Uf,r[a])}var Su=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(s){switch(s){case 5126:return Yg;case 35664:return Zg;case 35665:return Jg;case 35666:return Qg;case 35674:return e0;case 35675:return t0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return a0;case 5125:return o0;case 36294:return l0;case 36295:return c0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return p0;case 36289:case 36303:case 36311:case 36292:return f0}})(t.type)}},wu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(s){switch(s){case 5126:return m0;case 35664:return g0;case 35665:return _0;case 35666:return v0;case 35674:return y0;case 35675:return x0;case 35676:return b0;case 5124:case 35670:return M0;case 35667:case 35671:return E0;case 35668:case 35672:return S0;case 35669:case 35673:return w0;case 5125:return T0;case 36294:return A0;case 36295:return R0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return D0}})(t.type)}},Tu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Eu=/(\w+)(\])?(\[|\.)?/g;function Sf(i,e){i.seq.push(e),i.map[e.id]=e}function k0(i,e,t){let n=i.name,s=n.length;for(Eu.lastIndex=0;;){let r=Eu.exec(n),a=Eu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===s){Sf(t,l===void 0?new Su(o,i,e):new wu(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new Tu(o),Sf(t,h)),t=h}}}var yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s);k0(r,e.getUniformLocation(t,r.name),this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function wf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var F0=0,Tf=new Ue;function Af(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){let g=p+1;h.push(`${g===c?">":" "} ${g}: ${l[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return s}function N0(i,e){let t=(function(n){et._getMatrix(Tf,et.workingColorSpace,n);let s=`mat3( ${Tf.elements.map(r=>r.toFixed(4))} )`;switch(et.getTransfer(n)){case Qr:return[s,"LinearTransferOETF"];case ot:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[s,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U0(i,e){let t;switch(e){case Np:t="Linear";break;case Up:t="Reinhard";break;case Bp:t="Cineon";break;case Vl:t="ACESFilmic";break;case zp:t="AgX";break;case Hp:t="Neutral";break;case Op:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var sc=new S;function B0(){return et.getLuminanceCoefficients(sc),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${sc.x.toFixed(4)}, ${sc.y.toFixed(4)}, ${sc.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ba(i){return i!==""}function Rf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Au(i){return i.replace(O0,H0)}var z0=new Map;function H0(i,e){let t=He[e];if(t===void 0){let n=z0.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Au(t)}var G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function If(i){return i.replace(G0,V0)}function V0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function W0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(H){let O="SHADOWMAP_TYPE_BASIC";return H.shadowMapType===wh?O="SHADOWMAP_TYPE_PCF":H.shadowMapType===Fl?O="SHADOWMAP_TYPE_PCF_SOFT":H.shadowMapType===oi&&(O="SHADOWMAP_TYPE_VSM"),O})(t),l=(function(H){let O="ENVMAP_TYPE_CUBE";if(H.envMap)switch(H.envMapMode){case fr:case xs:O="ENVMAP_TYPE_CUBE";break;case Da:O="ENVMAP_TYPE_CUBE_UV"}return O})(t),h=(function(H){let O="ENVMAP_MODE_REFLECTION";return H.envMap&&H.envMapMode===xs&&(O="ENVMAP_MODE_REFRACTION"),O})(t),u=(function(H){let O="ENVMAP_BLENDING_NONE";if(H.envMap)switch(H.combine){case Dp:O="ENVMAP_BLENDING_MULTIPLY";break;case kp:O="ENVMAP_BLENDING_MIX";break;case Fp:O="ENVMAP_BLENDING_ADD"}return O})(t),d=(function(H){let O=H.envMapCubeUVHeight;if(O===null)return null;let J=Math.log2(O)-2,W=1/O;return{texelWidth:1/(3*Math.max(Math.pow(2,J),112)),texelHeight:W,maxMip:J}})(t),p=(function(H){return[H.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",H.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)})(t),g=(function(H){let O=[];for(let J in H){let W=H[J];W!==!1&&O.push("#define "+J+" "+W)}return O.join(`
`)})(r),_=s.createProgram(),f,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ba).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ba).join(`
`),m.length>0&&(m+=`
`)):(f=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),m=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?He.tonemapping_pars_fragment:"",t.toneMapping!==bi?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,N0("linearToOutputTexel",t.outputColorSpace),B0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ba).join(`
`)),a=Au(a),a=Rf(a,t),a=Cf(a,t),o=Au(o),o=Rf(o,t),o=Cf(o,t),a=If(a),o=If(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",t.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=v+f+a,x=v+m+o,E=wf(s,s.VERTEX_SHADER,y),w=wf(s,s.FRAGMENT_SHADER,x);function C(H){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(_)||"",J=s.getShaderInfoLog(E)||"",W=s.getShaderInfoLog(w)||"",Q=O.trim(),ee=J.trim(),le=W.trim(),se=!0,ye=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,w);else{let we=Af(s,E,"vertex"),Me=Af(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Q+`
`+we+`
`+Me)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):ee!==""&&le!==""||(ye=!1);ye&&(H.diagnostics={runnable:se,programLog:Q,vertexShader:{log:ee,prefix:f},fragmentShader:{log:le,prefix:m}})}s.deleteShader(E),s.deleteShader(w),D=new yr(s,_),P=(function(O,J){let W={},Q=O.getProgramParameter(J,O.ACTIVE_ATTRIBUTES);for(let ee=0;ee<Q;ee++){let le=O.getActiveAttrib(J,ee),se=le.name,ye=1;le.type===O.FLOAT_MAT2&&(ye=2),le.type===O.FLOAT_MAT3&&(ye=3),le.type===O.FLOAT_MAT4&&(ye=4),W[se]={type:le.type,location:O.getAttribLocation(J,se),locationSize:ye}}return W})(s,_)}let D,P;s.attachShader(_,E),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_),this.getUniforms=function(){return D===void 0&&C(this),D},this.getAttributes=function(){return P===void 0&&C(this),P};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(_,37297)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}var $0=0,Ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cu(e),t.set(e,n)),n}},Cu=class{constructor(e){this.id=$0++,this.code=e,this.usedTimes=0}};function j0(i,e,t,n,s,r,a){let o=new nr,c=new Ru,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(f){return l.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,m,v,y,x){let E=y.fog,w=x.geometry,C=f.isMeshStandardMaterial?y.environment:null,D=(f.isMeshStandardMaterial?t:e).get(f.envMap||C),P=D&&D.mapping===Da?D.image.height:null,N=g[f.type];f.precision!==null&&(p=s.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let H=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,O=H!==void 0?H.length:0,J,W,Q,ee,le=0;if(w.morphAttributes.position!==void 0&&(le=1),w.morphAttributes.normal!==void 0&&(le=2),w.morphAttributes.color!==void 0&&(le=3),N){let Kt=ci[N];J=Kt.vertexShader,W=Kt.fragmentShader}else J=f.vertexShader,W=f.fragmentShader,c.update(f),Q=c.getVertexShaderID(f),ee=c.getFragmentShaderID(f);let se=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),we=x.isInstancedMesh===!0,Me=x.isBatchedMesh===!0,Ie=!!f.map,ce=!!f.matcap,ue=!!D,he=!!f.aoMap,Re=!!f.lightMap,Be=!!f.bumpMap,A=!!f.normalMap,T=!!f.displacementMap,z=!!f.emissiveMap,F=!!f.metalnessMap,b=!!f.roughnessMap,L=f.anisotropy>0,B=f.clearcoat>0,k=f.dispersion>0,Y=f.iridescence>0,G=f.sheen>0,j=f.transmission>0,ae=L&&!!f.anisotropyMap,fe=B&&!!f.clearcoatMap,oe=B&&!!f.clearcoatNormalMap,_e=B&&!!f.clearcoatRoughnessMap,Ee=Y&&!!f.iridescenceMap,Te=Y&&!!f.iridescenceThicknessMap,qe=G&&!!f.sheenColorMap,nt=G&&!!f.sheenRoughnessMap,it=!!f.specularMap,me=!!f.specularColorMap,Ce=!!f.specularIntensityMap,$e=j&&!!f.transmissionMap,Xt=j&&!!f.thicknessMap,xe=!!f.gradientMap,st=!!f.alphaMap,Xe=f.alphaTest>0,In=!!f.alphaHash,di=!!f.extensions,U=bi;f.toneMapped&&(se!==null&&se.isXRRenderTarget!==!0||(U=i.toneMapping));let Ot={shaderID:N,shaderType:f.type,shaderName:f.name,vertexShader:J,fragmentShader:W,defines:f.defines,customVertexShaderID:Q,customFragmentShaderID:ee,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:Me,batchingColor:Me&&x._colorsTexture!==null,instancing:we,instancingColor:we&&x.instanceColor!==null,instancingMorph:we&&x.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ms,alphaToCoverage:!!f.alphaToCoverage,map:Ie,matcap:ce,envMap:ue,envMapMode:ue&&D.mapping,envMapCubeUVHeight:P,aoMap:he,lightMap:Re,bumpMap:Be,normalMap:A,displacementMap:d&&T,emissiveMap:z,normalMapObjectSpace:A&&f.normalMapType===Xp,normalMapTangentSpace:A&&f.normalMapType===qp,metalnessMap:F,roughnessMap:b,anisotropy:L,anisotropyMap:ae,clearcoat:B,clearcoatMap:fe,clearcoatNormalMap:oe,clearcoatRoughnessMap:_e,dispersion:k,iridescence:Y,iridescenceMap:Ee,iridescenceThicknessMap:Te,sheen:G,sheenColorMap:qe,sheenRoughnessMap:nt,specularMap:it,specularColorMap:me,specularIntensityMap:Ce,transmission:j,transmissionMap:$e,thicknessMap:Xt,gradientMap:xe,opaque:f.transparent===!1&&f.blending===Pa&&f.alphaToCoverage===!1,alphaMap:st,alphaTest:Xe,alphaHash:In,combine:f.combine,mapUv:Ie&&_(f.map.channel),aoMapUv:he&&_(f.aoMap.channel),lightMapUv:Re&&_(f.lightMap.channel),bumpMapUv:Be&&_(f.bumpMap.channel),normalMapUv:A&&_(f.normalMap.channel),displacementMapUv:T&&_(f.displacementMap.channel),emissiveMapUv:z&&_(f.emissiveMap.channel),metalnessMapUv:F&&_(f.metalnessMap.channel),roughnessMapUv:b&&_(f.roughnessMap.channel),anisotropyMapUv:ae&&_(f.anisotropyMap.channel),clearcoatMapUv:fe&&_(f.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(f.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(f.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&_(f.sheenColorMap.channel),sheenRoughnessMapUv:nt&&_(f.sheenRoughnessMap.channel),specularMapUv:it&&_(f.specularMap.channel),specularColorMapUv:me&&_(f.specularColorMap.channel),specularIntensityMapUv:Ce&&_(f.specularIntensityMap.channel),transmissionMapUv:$e&&_(f.transmissionMap.channel),thicknessMapUv:Xt&&_(f.thicknessMap.channel),alphaMapUv:st&&_(f.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(A||L),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!w.attributes.uv&&(Ie||st),fog:!!E,useFog:f.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:f.flatShading===!0&&f.wireframe===!1,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:x.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:le,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:U,decodeVideoTexture:Ie&&f.map.isVideoTexture===!0&&et.getTransfer(f.map.colorSpace)===ot,decodeVideoTextureEmissive:z&&f.emissiveMap.isVideoTexture===!0&&et.getTransfer(f.emissiveMap.colorSpace)===ot,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===gt,flipSided:f.side===_n,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:di&&f.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(di&&f.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot},getProgramCacheKey:function(f){let m=[];if(f.shaderID?m.push(f.shaderID):(m.push(f.customVertexShaderID),m.push(f.customFragmentShaderID)),f.defines!==void 0)for(let v in f.defines)m.push(v),m.push(f.defines[v]);return f.isRawShaderMaterial===!1&&((function(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)})(m,f),(function(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)})(m,f),m.push(i.outputColorSpace)),m.push(f.customProgramCacheKey),m.join()},getUniforms:function(f){let m=g[f.type],v;if(m){let y=ci[m];v=af.clone(y.uniforms)}else v=f.uniforms;return v},acquireProgram:function(f,m){let v;for(let y=0,x=h.length;y<x;y++){let E=h[y];if(E.cacheKey===m){v=E,++v.usedTimes;break}}return v===void 0&&(v=new W0(i,m,f,r),h.push(v)),v},releaseProgram:function(f){if(--f.usedTimes===0){let m=h.indexOf(f);h[m]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){c.remove(f)},programs:h,dispose:function(){c.dispose()}}}function q0(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function X0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Df(){let i=[],e=0,t=[],n=[],s=[];function r(a,o,c,l,h,u){let d=i[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},i[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:s,init:function(){e=0,t.length=0,n.length=0,s.length=0},push:function(a,o,c,l,h,u){let d=r(a,o,c,l,h,u);c.transmission>0?n.push(d):c.transparent===!0?s.push(d):t.push(d)},unshift:function(a,o,c,l,h,u){let d=r(a,o,c,l,h,u);c.transmission>0?n.unshift(d):c.transparent===!0?s.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=i.length;a<o;a++){let c=i[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||X0),n.length>1&&n.sort(o||Lf),s.length>1&&s.sort(o||Lf)}}}function K0(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),s;return n===void 0?(s=new Df,i.set(e,[s])):t>=n.length?(s=new Df,n.push(s)):s=n[t],s},dispose:function(){i=new WeakMap}}}function Y0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new de};break;case"SpotLight":t={position:new S,direction:new S,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new S,halfWidth:new S,halfHeight:new S}}return i[e.id]=t,t}}}var Z0=0;function J0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Q0(i){let e=new Y0,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new S);let s=new S,r=new Pe,a=new Pe;return{setup:function(o){let c=0,l=0,h=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let u=0,d=0,p=0,g=0,_=0,f=0,m=0,v=0,y=0,x=0,E=0;o.sort(J0);for(let C=0,D=o.length;C<D;C++){let P=o[C],N=P.color,H=P.intensity,O=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=N.r*H,l+=N.g*H,h+=N.b*H;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],H);E++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.directionalShadow[u]=ee,n.directionalShadowMap[u]=J,n.directionalShadowMatrix[u]=P.shadow.matrix,f++}n.directional[u]=W,u++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(N).multiplyScalar(H),W.distance=O,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[p]=W;let Q=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,Q.updateMatrices(P),P.castShadow&&x++),n.spotLightMatrix[p]=Q.matrix,P.castShadow){let ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.spotShadow[p]=ee,n.spotShadowMap[p]=J,v++}p++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(N).multiplyScalar(H),W.halfWidth.set(.5*P.width,0,0),W.halfHeight.set(0,.5*P.height,0),n.rectArea[g]=W,g++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,n.pointShadow[d]=ee,n.pointShadowMap[d]=J,n.pointShadowMatrix[d]=P.shadow.matrix,m++}n.point[d]=W,d++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(H),W.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[_]=W,_++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=h;let w=n.hash;w.directionalLength===u&&w.pointLength===d&&w.spotLength===p&&w.rectAreaLength===g&&w.hemiLength===_&&w.numDirectionalShadows===f&&w.numPointShadows===m&&w.numSpotShadows===v&&w.numSpotMaps===y&&w.numLightProbes===E||(n.directional.length=u,n.spot.length=p,n.rectArea.length=g,n.point.length=d,n.hemi.length=_,n.directionalShadow.length=f,n.directionalShadowMap.length=f,n.pointShadow.length=m,n.pointShadowMap.length=m,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=f,n.pointShadowMatrix.length=m,n.spotLightMatrix.length=v+y-x,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=E,w.directionalLength=u,w.pointLength=d,w.spotLength=p,w.rectAreaLength=g,w.hemiLength=_,w.numDirectionalShadows=f,w.numPointShadows=m,w.numSpotShadows=v,w.numSpotMaps=y,w.numLightProbes=E,n.version=Z0++)},setupView:function(o,c){let l=0,h=0,u=0,d=0,p=0,g=c.matrixWorldInverse;for(let _=0,f=o.length;_<f;_++){let m=o[_];if(m.isDirectionalLight){let v=n.directional[l];v.direction.setFromMatrixPosition(m.matrixWorld),s.setFromMatrixPosition(m.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),l++}else if(m.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(m.matrixWorld),s.setFromMatrixPosition(m.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(m.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(m.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(.5*m.width,0,0),v.halfHeight.set(0,.5*m.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(m.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(g),h++}else if(m.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(m.matrixWorld),v.direction.transformDirection(g),p++}}},state:n}}function kf(i){let e=new Q0(i),t=[],n=[],s={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(r){s.camera=r,t.length=0,n.length=0},state:s,setupLights:function(){e.setup(t)},setupLightsView:function(r){e.setupView(t,r)},pushLight:function(r){t.push(r)},pushShadow:function(r){n.push(r)}}}function e_(i){let e=new WeakMap;return{get:function(t,n=0){let s=e.get(t),r;return s===void 0?(r=new kf(i),e.set(t,[r])):n>=s.length?(r=new kf(i),s.push(r)):r=s[n],r},dispose:function(){e=new WeakMap}}}function t_(i,e,t){let n=new Vi,s=new te,r=new te,a=new rt,o=new Ml({depthPacking:jp}),c=new El,l={},h=t.maxTextureSize,u={[dr]:_n,[_n]:dr,[gt]:gt},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new lt;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new $(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wh;let m=this.type;function v(w,C){let D=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ii(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,D,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,D,p,_,null)}function y(w,C,D,P){let N=null,H=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(H!==void 0)N=H;else if(N=D.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let O=N.uuid,J=C.uuid,W=l[O];W===void 0&&(W={},l[O]=W);let Q=W[J];Q===void 0&&(Q=N.clone(),W[J]=Q,C.addEventListener("dispose",E)),N=Q}return N.visible=C.visible,N.wireframe=C.wireframe,N.side=P===oi?C.shadowSide!==null?C.shadowSide:C.side:C.shadowSide!==null?C.shadowSide:u[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,D.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(i.properties.get(N).light=D),N}function x(w,C,D,P,N){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===oi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let O=e.update(w),J=w.material;if(Array.isArray(J)){let W=O.groups;for(let Q=0,ee=W.length;Q<ee;Q++){let le=W[Q],se=J[le.materialIndex];if(se&&se.visible){let ye=y(w,se,P,N);w.onBeforeShadow(i,w,C,D,O,ye,le),i.renderBufferDirect(D,null,O,ye,w,le),w.onAfterShadow(i,w,C,D,O,ye,le)}}}else if(J.visible){let W=y(w,J,P,N);w.onBeforeShadow(i,w,C,D,O,W,null),i.renderBufferDirect(D,null,O,W,w,null),w.onAfterShadow(i,w,C,D,O,W,null)}}let H=w.children;for(let O=0,J=H.length;O<J;O++)x(H[O],C,D,P,N)}function E(w){w.target.removeEventListener("dispose",E);for(let C in l){let D=l[C],P=w.target.uuid;P in D&&(D[P].dispose(),delete D[P])}}this.render=function(w,C,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;let P=i.getRenderTarget(),N=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Xi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let J=m!==oi&&this.type===oi,W=m===oi&&this.type!==oi;for(let Q=0,ee=w.length;Q<ee;Q++){let le=w[Q],se=le.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;s.copy(se.mapSize);let ye=se.getFrameExtents();if(s.multiply(ye),r.copy(se.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ye.x),s.x=r.x*ye.x,se.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ye.y),s.y=r.y*ye.y,se.mapSize.y=r.y)),se.map===null||J===!0||W===!0){let Me=this.type!==oi?{minFilter:ei,magFilter:ei}:{};se.map!==null&&se.map.dispose(),se.map=new ii(s.x,s.y,Me),se.map.texture.name=le.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();let we=se.getViewportCount();for(let Me=0;Me<we;Me++){let Ie=se.getViewport(Me);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),O.viewport(a),se.updateMatrices(le,Me),n=se.getFrustum(),x(C,D,se.camera,le,this.type)}se.isPointLightShadow!==!0&&this.type===oi&&v(se,D),se.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(P,N,H)}}var n_={[Nl]:Ul,[Bl]:Hl,[Ol]:Gl,[La]:zl,[Ul]:Nl,[Hl]:Bl,[Gl]:Ol,[zl]:La};function i_(i,e){let t=new function(){let b=!1,L=new rt,B=null,k=new rt(0,0,0,0);return{setMask:function(Y){B===Y||b||(i.colorMask(Y,Y,Y,Y),B=Y)},setLocked:function(Y){b=Y},setClear:function(Y,G,j,ae,fe){fe===!0&&(Y*=ae,G*=ae,j*=ae),L.set(Y,G,j,ae),k.equals(L)===!1&&(i.clearColor(Y,G,j,ae),k.copy(L))},reset:function(){b=!1,B=null,k.set(-1,0,0,0)}}},n=new function(){let b=!1,L=!1,B=null,k=null,Y=null;return{setReversed:function(G){if(L!==G){let j=e.get("EXT_clip_control");G?j.clipControlEXT(j.LOWER_LEFT_EXT,j.ZERO_TO_ONE_EXT):j.clipControlEXT(j.LOWER_LEFT_EXT,j.NEGATIVE_ONE_TO_ONE_EXT),L=G;let ae=Y;Y=null,this.setClear(ae)}},getReversed:function(){return L},setTest:function(G){G?ue(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(G){B===G||b||(i.depthMask(G),B=G)},setFunc:function(G){if(L&&(G=n_[G]),k!==G){switch(G){case Nl:i.depthFunc(i.NEVER);break;case Ul:i.depthFunc(i.ALWAYS);break;case Bl:i.depthFunc(i.LESS);break;case La:i.depthFunc(i.LEQUAL);break;case Ol:i.depthFunc(i.EQUAL);break;case zl:i.depthFunc(i.GEQUAL);break;case Hl:i.depthFunc(i.GREATER);break;case Gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=G}},setLocked:function(G){b=G},setClear:function(G){Y!==G&&(L&&(G=1-G),i.clearDepth(G),Y=G)},reset:function(){b=!1,B=null,k=null,Y=null,L=!1}}},s=new function(){let b=!1,L=null,B=null,k=null,Y=null,G=null,j=null,ae=null,fe=null;return{setTest:function(oe){b||(oe?ue(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(oe){L===oe||b||(i.stencilMask(oe),L=oe)},setFunc:function(oe,_e,Ee){B===oe&&k===_e&&Y===Ee||(i.stencilFunc(oe,_e,Ee),B=oe,k=_e,Y=Ee)},setOp:function(oe,_e,Ee){G===oe&&j===_e&&ae===Ee||(i.stencilOp(oe,_e,Ee),G=oe,j=_e,ae=Ee)},setLocked:function(oe){b=oe},setClear:function(oe){fe!==oe&&(i.clearStencil(oe),fe=oe)},reset:function(){b=!1,L=null,B=null,k=null,Y=null,G=null,j=null,ae=null,fe=null}}},r=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,g=null,_=null,f=null,m=null,v=null,y=null,x=new de(0,0,0),E=0,w=!1,C=null,D=null,P=null,N=null,H=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,W=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=W>=2);let ee=null,le={},se=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),we=new rt().fromArray(se),Me=new rt().fromArray(ye);function Ie(b,L,B,k){let Y=new Uint8Array(4),G=i.createTexture();i.bindTexture(b,G),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let j=0;j<B;j++)b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?i.texImage3D(L,0,i.RGBA,1,1,k,0,i.RGBA,i.UNSIGNED_BYTE,Y):i.texImage2D(L+j,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Y);return G}let ce={};function ue(b){o[b]!==!0&&(i.enable(b),o[b]=!0)}function he(b){o[b]!==!1&&(i.disable(b),o[b]=!1)}ce[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),s.setClear(0),ue(i.DEPTH_TEST),n.setFunc(La),T(!1),z(Sh),ue(i.CULL_FACE),A(Xi);let Re={[pr]:i.FUNC_ADD,[fp]:i.FUNC_SUBTRACT,[mp]:i.FUNC_REVERSE_SUBTRACT};Re[gp]=i.MIN,Re[_p]=i.MAX;let Be={[vp]:i.ZERO,[yp]:i.ONE,[xp]:i.SRC_COLOR,[Mp]:i.SRC_ALPHA,[Rp]:i.SRC_ALPHA_SATURATE,[Tp]:i.DST_COLOR,[Sp]:i.DST_ALPHA,[bp]:i.ONE_MINUS_SRC_COLOR,[Ep]:i.ONE_MINUS_SRC_ALPHA,[Ap]:i.ONE_MINUS_DST_COLOR,[wp]:i.ONE_MINUS_DST_ALPHA,[Cp]:i.CONSTANT_COLOR,[Ip]:i.ONE_MINUS_CONSTANT_COLOR,[Pp]:i.CONSTANT_ALPHA,[Lp]:i.ONE_MINUS_CONSTANT_ALPHA};function A(b,L,B,k,Y,G,j,ae,fe,oe){if(b!==Xi){if(d===!1&&(ue(i.BLEND),d=!0),b===pp)Y=Y||L,G=G||B,j=j||k,L===g&&Y===m||(i.blendEquationSeparate(Re[L],Re[Y]),g=L,m=Y),B===_&&k===f&&G===v&&j===y||(i.blendFuncSeparate(Be[B],Be[k],Be[G],Be[j]),_=B,f=k,v=G,y=j),ae.equals(x)!==!1&&fe===E||(i.blendColor(ae.r,ae.g,ae.b,fe),x.copy(ae),E=fe),p=b,w=!1;else if(b!==p||oe!==w){if(g===pr&&m===pr||(i.blendEquation(i.FUNC_ADD),g=pr,m=pr),oe)switch(b){case Pa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Th:i.blendFunc(i.ONE,i.ONE);break;case Ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case Pa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Th:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ah:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}_=null,f=null,v=null,y=null,x.set(0,0,0),E=0,p=b,w=oe}}else d===!0&&(he(i.BLEND),d=!1)}function T(b){C!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),C=b)}function z(b){b!==up?(ue(i.CULL_FACE),b!==D&&(b===Sh?i.cullFace(i.BACK):b===dp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),D=b}function F(b,L,B){b?(ue(i.POLYGON_OFFSET_FILL),N===L&&H===B||(i.polygonOffset(L,B),N=L,H=B)):he(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:s},enable:ue,disable:he,bindFramebuffer:function(b,L){return c[b]!==L&&(i.bindFramebuffer(b,L),c[b]=L,b===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=L),b===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=L),!0)},drawBuffers:function(b,L){let B=h,k=!1;if(b){B=l.get(L),B===void 0&&(B=[],l.set(L,B));let Y=b.textures;if(B.length!==Y.length||B[0]!==i.COLOR_ATTACHMENT0){for(let G=0,j=Y.length;G<j;G++)B[G]=i.COLOR_ATTACHMENT0+G;B.length=Y.length,k=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,k=!0);k&&i.drawBuffers(B)},useProgram:function(b){return u!==b&&(i.useProgram(b),u=b,!0)},setBlending:A,setMaterial:function(b,L){b.side===gt?he(i.CULL_FACE):ue(i.CULL_FACE);let B=b.side===_n;L&&(B=!B),T(B),b.blending===Pa&&b.transparent===!1?A(Xi):A(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),n.setFunc(b.depthFunc),n.setTest(b.depthTest),n.setMask(b.depthWrite),t.setMask(b.colorWrite);let k=b.stencilWrite;s.setTest(k),k&&(s.setMask(b.stencilWriteMask),s.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),s.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),F(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:T,setCullFace:z,setLineWidth:function(b){b!==P&&(J&&i.lineWidth(b),P=b)},setPolygonOffset:F,setScissorTest:function(b){b?ue(i.SCISSOR_TEST):he(i.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=i.TEXTURE0+O-1),ee!==b&&(i.activeTexture(b),ee=b)},bindTexture:function(b,L,B){B===void 0&&(B=ee===null?i.TEXTURE0+O-1:ee);let k=le[B];k===void 0&&(k={type:void 0,texture:void 0},le[B]=k),k.type===b&&k.texture===L||(ee!==B&&(i.activeTexture(B),ee=B),i.bindTexture(b,L||ce[b]),k.type=b,k.texture=L)},unbindTexture:function(){let b=le[ee];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexImage3D:function(){try{i.compressedTexImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage2D:function(){try{i.texImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage3D:function(){try{i.texImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},updateUBOMapping:function(b,L){let B=a.get(L);B===void 0&&(B=new WeakMap,a.set(L,B));let k=B.get(b);k===void 0&&(k=i.getUniformBlockIndex(L,b.name),B.set(b,k))},uniformBlockBinding:function(b,L){let B=a.get(L).get(b);r.get(L)!==B&&(i.uniformBlockBinding(L,B,b.__bindingPointIndex),r.set(L,B))},texStorage2D:function(){try{i.texStorage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texStorage3D:function(){try{i.texStorage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage2D:function(){try{i.texSubImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage3D:function(){try{i.texSubImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}},scissor:function(b){we.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),we.copy(b))},viewport:function(b){Me.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),Me.copy(b))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},ee=null,le={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,g=null,_=null,f=null,m=null,v=null,y=null,x=new de(0,0,0),E=0,w=!1,C=null,D=null,P=null,N=null,H=null,we.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),s.reset()}}}function s_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new te,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,T){return p?new OffscreenCanvas(A,T):ta("canvas")}function _(A,T,z){let F=1,b=Be(A);if((b.width>z||b.height>z)&&(F=z/Math.max(b.width,b.height)),F<1){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let L=Math.floor(F*b.width),B=Math.floor(F*b.height);u===void 0&&(u=g(L,B));let k=T?g(L,B):u;return k.width=L,k.height=B,k.getContext("2d").drawImage(A,0,0,L,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+L+"x"+B+")."),k}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),A}return A}function f(A){return A.generateMipmaps}function m(A){i.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,T,z,F,b=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let L=T;if(T===i.RED&&(z===i.FLOAT&&(L=i.R32F),z===i.HALF_FLOAT&&(L=i.R16F),z===i.UNSIGNED_BYTE&&(L=i.R8)),T===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(L=i.R8UI),z===i.UNSIGNED_SHORT&&(L=i.R16UI),z===i.UNSIGNED_INT&&(L=i.R32UI),z===i.BYTE&&(L=i.R8I),z===i.SHORT&&(L=i.R16I),z===i.INT&&(L=i.R32I)),T===i.RG&&(z===i.FLOAT&&(L=i.RG32F),z===i.HALF_FLOAT&&(L=i.RG16F),z===i.UNSIGNED_BYTE&&(L=i.RG8)),T===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(L=i.RG8UI),z===i.UNSIGNED_SHORT&&(L=i.RG16UI),z===i.UNSIGNED_INT&&(L=i.RG32UI),z===i.BYTE&&(L=i.RG8I),z===i.SHORT&&(L=i.RG16I),z===i.INT&&(L=i.RG32I)),T===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(L=i.RGB8UI),z===i.UNSIGNED_SHORT&&(L=i.RGB16UI),z===i.UNSIGNED_INT&&(L=i.RGB32UI),z===i.BYTE&&(L=i.RGB8I),z===i.SHORT&&(L=i.RGB16I),z===i.INT&&(L=i.RGB32I)),T===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(L=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(L=i.RGBA16UI),z===i.UNSIGNED_INT&&(L=i.RGBA32UI),z===i.BYTE&&(L=i.RGBA8I),z===i.SHORT&&(L=i.RGBA16I),z===i.INT&&(L=i.RGBA32I)),T===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(L=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(L=i.R11F_G11F_B10F)),T===i.RGBA){let B=b?Qr:et.getTransfer(F);z===i.FLOAT&&(L=i.RGBA32F),z===i.HALF_FLOAT&&(L=i.RGBA16F),z===i.UNSIGNED_BYTE&&(L=B===ot?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(L=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(L=i.RGB5_A1)}return L!==i.R16F&&L!==i.R32F&&L!==i.RG16F&&L!==i.RG32F&&L!==i.RGBA16F&&L!==i.RGBA32F||e.get("EXT_color_buffer_float"),L}function x(A,T){let z;return A?T===null||T===Ms||T===_r?z=i.DEPTH24_STENCIL8:T===zn?z=i.DEPTH32F_STENCIL8:T===mr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ms||T===_r?z=i.DEPTH_COMPONENT24:T===zn?z=i.DEPTH_COMPONENT32F:T===mr&&(z=i.DEPTH_COMPONENT16),z}function E(A,T){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==ei&&A.minFilter!==ti?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function w(A){let T=A.target;T.removeEventListener("dispose",w),(function(z){let F=n.get(z);if(F.__webglInit===void 0)return;let b=z.source,L=d.get(b);if(L){let B=L[F.__cacheKey];B.usedTimes--,B.usedTimes===0&&D(z),Object.keys(L).length===0&&d.delete(b)}n.remove(z)})(T),T.isVideoTexture&&h.delete(T)}function C(A){let T=A.target;T.removeEventListener("dispose",C),(function(z){let F=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(F.__webglFramebuffer[L]))for(let B=0;B<F.__webglFramebuffer[L].length;B++)i.deleteFramebuffer(F.__webglFramebuffer[L][B]);else i.deleteFramebuffer(F.__webglFramebuffer[L]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[L])}else{if(Array.isArray(F.__webglFramebuffer))for(let L=0;L<F.__webglFramebuffer.length;L++)i.deleteFramebuffer(F.__webglFramebuffer[L]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let L=0;L<F.__webglColorRenderbuffer.length;L++)F.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[L]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let b=z.textures;for(let L=0,B=b.length;L<B;L++){let k=n.get(b[L]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),a.memory.textures--),n.remove(b[L])}n.remove(z)})(T)}function D(A){let T=n.get(A);i.deleteTexture(T.__webglTexture);let z=A.source;delete d.get(z)[T.__cacheKey],a.memory.textures--}let P=0;function N(A,T){let z=n.get(A);if(A.isVideoTexture&&(function(F){let b=a.render.frame;h.get(F)!==b&&(h.set(F,b),F.update())})(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let F=A.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(F.complete!==!1)return void le(z,A,T);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+T)}let H={[qo]:i.REPEAT,[Js]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},O={[ei]:i.NEAREST,[Gp]:i.NEAREST_MIPMAP_NEAREST,[ka]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[jl]:i.LINEAR_MIPMAP_NEAREST,[bs]:i.LINEAR_MIPMAP_LINEAR},J={[Kp]:i.NEVER,[tf]:i.ALWAYS,[Yp]:i.LESS,[hu]:i.LEQUAL,[Zp]:i.EQUAL,[ef]:i.GEQUAL,[Jp]:i.GREATER,[Qp]:i.NOTEQUAL};function W(A,T){if(T.type!==zn||e.has("OES_texture_float_linear")!==!1||T.magFilter!==ti&&T.magFilter!==jl&&T.magFilter!==ka&&T.magFilter!==bs&&T.minFilter!==ti&&T.minFilter!==jl&&T.minFilter!==ka&&T.minFilter!==bs||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,H[T.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,H[T.wrapT]),A!==i.TEXTURE_3D&&A!==i.TEXTURE_2D_ARRAY||i.texParameteri(A,i.TEXTURE_WRAP_R,H[T.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,O[T.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,O[T.minFilter]),T.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ei||T.minFilter!==ka&&T.minFilter!==bs||T.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Q(A,T){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",w));let F=T.source,b=d.get(F);b===void 0&&(b={},d.set(F,b));let L=(function(B){let k=[];return k.push(B.wrapS),k.push(B.wrapT),k.push(B.wrapR||0),k.push(B.magFilter),k.push(B.minFilter),k.push(B.anisotropy),k.push(B.internalFormat),k.push(B.format),k.push(B.type),k.push(B.generateMipmaps),k.push(B.premultiplyAlpha),k.push(B.flipY),k.push(B.unpackAlignment),k.push(B.colorSpace),k.join()})(T);if(L!==A.__cacheKey){b[L]===void 0&&(b[L]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),b[L].usedTimes++;let B=b[A.__cacheKey];B!==void 0&&(b[A.__cacheKey].usedTimes--,B.usedTimes===0&&D(T)),A.__cacheKey=L,A.__webglTexture=b[L].texture}return z}function ee(A,T,z){return Math.floor(Math.floor(A/z)/T)}function le(A,T,z){let F=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(F=i.TEXTURE_3D);let b=Q(A,T),L=T.source;t.bindTexture(F,A.__webglTexture,i.TEXTURE0+z);let B=n.get(L);if(L.version!==B.__version||b===!0){t.activeTexture(i.TEXTURE0+z);let k=et.getPrimaries(et.workingColorSpace),Y=T.colorSpace===Es?null:et.getPrimaries(T.colorSpace),G=T.colorSpace===Es||k===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);let j=_(T.image,!1,s.maxTextureSize);j=Re(T,j);let ae=r.convert(T.format,T.colorSpace),fe=r.convert(T.type),oe,_e=y(T.internalFormat,ae,fe,T.colorSpace,T.isVideoTexture);W(F,T);let Ee=T.mipmaps,Te=T.isVideoTexture!==!0,qe=B.__version===void 0||b===!0,nt=L.dataReady,it=E(T,j);if(T.isDepthTexture)_e=x(T.format===Na,T.type),qe&&(Te?t.texStorage2D(i.TEXTURE_2D,1,_e,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,ae,fe,null));else if(T.isDataTexture)if(Ee.length>0){Te&&qe&&t.texStorage2D(i.TEXTURE_2D,it,_e,Ee[0].width,Ee[0].height);for(let me=0,Ce=Ee.length;me<Ce;me++)oe=Ee[me],Te?nt&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,oe.width,oe.height,ae,fe,oe.data):t.texImage2D(i.TEXTURE_2D,me,_e,oe.width,oe.height,0,ae,fe,oe.data);T.generateMipmaps=!1}else Te?(qe&&t.texStorage2D(i.TEXTURE_2D,it,_e,j.width,j.height),nt&&(function(me,Ce,$e,Xt){let xe=me.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce.width,Ce.height,$e,Xt,Ce.data);else{xe.sort((U,Ot)=>U.start-Ot.start);let st=0;for(let U=1;U<xe.length;U++){let Ot=xe[st],Kt=xe[U],vt=Ot.start+Ot.count,as=ee(Kt.start,Ce.width,4),os=ee(Ot.start,Ce.width,4);Kt.start<=vt+1&&as===os&&ee(Kt.start+Kt.count-1,Ce.width,4)===as?Ot.count=Math.max(Ot.count,Kt.start+Kt.count-Ot.start):(++st,xe[st]=Kt)}xe.length=st+1;let Xe=i.getParameter(i.UNPACK_ROW_LENGTH),In=i.getParameter(i.UNPACK_SKIP_PIXELS),di=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,Ce.width);for(let U=0,Ot=xe.length;U<Ot;U++){let Kt=xe[U],vt=Math.floor(Kt.start/4),as=Math.ceil(Kt.count/4),os=vt%Ce.width,Nr=Math.floor(vt/Ce.width),uo=as;i.pixelStorei(i.UNPACK_SKIP_PIXELS,os),i.pixelStorei(i.UNPACK_SKIP_ROWS,Nr),t.texSubImage2D(i.TEXTURE_2D,0,os,Nr,uo,1,$e,Xt,Ce.data)}me.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Xe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,In),i.pixelStorei(i.UNPACK_SKIP_ROWS,di)}})(T,j,ae,fe)):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,ae,fe,j.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Te&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,_e,Ee[0].width,Ee[0].height,j.depth);for(let me=0,Ce=Ee.length;me<Ce;me++)if(oe=Ee[me],T.format!==Hn)if(ae!==null)if(Te){if(nt)if(T.layerUpdates.size>0){let $e=_u(oe.width,oe.height,T.format,T.type);for(let Xt of T.layerUpdates){let xe=oe.data.subarray(Xt*$e/oe.data.BYTES_PER_ELEMENT,(Xt+1)*$e/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Xt,oe.width,oe.height,1,ae,xe)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,oe.width,oe.height,j.depth,ae,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,_e,oe.width,oe.height,j.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?nt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,oe.width,oe.height,j.depth,ae,fe,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,_e,oe.width,oe.height,j.depth,0,ae,fe,oe.data)}else{Te&&qe&&t.texStorage2D(i.TEXTURE_2D,it,_e,Ee[0].width,Ee[0].height);for(let me=0,Ce=Ee.length;me<Ce;me++)oe=Ee[me],T.format!==Hn?ae!==null?Te?nt&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,me,_e,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?nt&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,oe.width,oe.height,ae,fe,oe.data):t.texImage2D(i.TEXTURE_2D,me,_e,oe.width,oe.height,0,ae,fe,oe.data)}else if(T.isDataArrayTexture)if(Te){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,_e,j.width,j.height,j.depth),nt)if(T.layerUpdates.size>0){let me=_u(j.width,j.height,T.format,T.type);for(let Ce of T.layerUpdates){let $e=j.data.subarray(Ce*me/j.data.BYTES_PER_ELEMENT,(Ce+1)*me/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,j.width,j.height,1,ae,fe,$e)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ae,fe,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,j.width,j.height,j.depth,0,ae,fe,j.data);else if(T.isData3DTexture)Te?(qe&&t.texStorage3D(i.TEXTURE_3D,it,_e,j.width,j.height,j.depth),nt&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ae,fe,j.data)):t.texImage3D(i.TEXTURE_3D,0,_e,j.width,j.height,j.depth,0,ae,fe,j.data);else if(T.isFramebufferTexture){if(qe)if(Te)t.texStorage2D(i.TEXTURE_2D,it,_e,j.width,j.height);else{let me=j.width,Ce=j.height;for(let $e=0;$e<it;$e++)t.texImage2D(i.TEXTURE_2D,$e,_e,me,Ce,0,ae,fe,null),me>>=1,Ce>>=1}}else if(Ee.length>0){if(Te&&qe){let me=Be(Ee[0]);t.texStorage2D(i.TEXTURE_2D,it,_e,me.width,me.height)}for(let me=0,Ce=Ee.length;me<Ce;me++)oe=Ee[me],Te?nt&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,ae,fe,oe):t.texImage2D(i.TEXTURE_2D,me,_e,ae,fe,oe);T.generateMipmaps=!1}else if(Te){if(qe){let me=Be(j);t.texStorage2D(i.TEXTURE_2D,it,_e,me.width,me.height)}nt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,fe,j)}else t.texImage2D(i.TEXTURE_2D,0,_e,ae,fe,j);f(T)&&m(F),B.__version=L.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function se(A,T,z,F,b,L){let B=r.convert(z.format,z.colorSpace),k=r.convert(z.type),Y=y(z.internalFormat,B,k,z.colorSpace),G=n.get(T),j=n.get(z);if(j.__renderTarget=T,!G.__hasExternalTextures){let ae=Math.max(1,T.width>>L),fe=Math.max(1,T.height>>L);b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?t.texImage3D(b,L,Y,ae,fe,T.depth,0,B,k,null):t.texImage2D(b,L,Y,ae,fe,0,B,k,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),he(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,b,j.__webglTexture,0,ue(T)):(b===i.TEXTURE_2D||b>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&b<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,b,j.__webglTexture,L),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(A,T,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),T.depthBuffer){let F=T.depthTexture,b=F&&F.isDepthTexture?F.type:null,L=x(T.stencilBuffer,b),B=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=ue(T);he(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k,L,T.width,T.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,k,L,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,L,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,A)}else{let F=T.textures;for(let b=0;b<F.length;b++){let L=F[b],B=r.convert(L.format,L.colorSpace),k=r.convert(L.type),Y=y(L.internalFormat,B,k,L.colorSpace),G=ue(T);z&&he(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,G,Y,T.width,T.height):he(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G,Y,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Y,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(A,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!T.depthTexture||!T.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=n.get(T.depthTexture);z.__renderTarget=T,z.__webglTexture&&T.depthTexture.image.width===T.width&&T.depthTexture.image.height===T.height||(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),N(T.depthTexture,0);let F=z.__webglTexture,b=ue(T);if(T.depthTexture.format===Fa)he(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0);else{if(T.depthTexture.format!==Na)throw new Error("Unknown depthTexture format");he(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0)}}function Me(A){let T=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==A.depthTexture){let F=A.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),F){let b=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,F.removeEventListener("dispose",b)};F.addEventListener("dispose",b),T.__depthDisposeCallback=b}T.__boundDepthTexture=F}if(A.depthTexture&&!T.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let F=A.texture.mipmaps;F&&F.length>0?we(T.__webglFramebuffer[0],A):we(T.__webglFramebuffer,A)}else if(z){T.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[F]),T.__webglDepthbuffer[F]===void 0)T.__webglDepthbuffer[F]=i.createRenderbuffer(),ye(T.__webglDepthbuffer[F],A,!1);else{let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=T.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,b,i.RENDERBUFFER,L)}}else{let F=A.texture.mipmaps;if(F&&F.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ye(T.__webglDepthbuffer,A,!1);else{let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,b,i.RENDERBUFFER,L)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}let Ie=[],ce=[];function ue(A){return Math.min(s.maxSamples,A.samples)}function he(A){let T=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Re(A,T){let z=A.colorSpace,F=A.format,b=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==ms&&z!==Es&&(et.getTransfer(z)===ot?F===Hn&&b===li||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),T}function Be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=function(){let A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A},this.resetTextureUnits=function(){P=0},this.setTexture2D=N,this.setTexture2DArray=function(A,T){let z=n.get(A);A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version?le(z,A,T):t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+T)},this.setTexture3D=function(A,T){let z=n.get(A);A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version?le(z,A,T):t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+T)},this.setTextureCube=function(A,T){let z=n.get(A);A.version>0&&z.__version!==A.version?(function(F,b,L){if(b.image.length!==6)return;let B=Q(F,b),k=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+L);let Y=n.get(k);if(k.version!==Y.__version||B===!0){t.activeTexture(i.TEXTURE0+L);let G=et.getPrimaries(et.workingColorSpace),j=b.colorSpace===Es?null:et.getPrimaries(b.colorSpace),ae=b.colorSpace===Es||G===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let fe=b.isCompressedTexture||b.image[0].isCompressedTexture,oe=b.image[0]&&b.image[0].isDataTexture,_e=[];for(let xe=0;xe<6;xe++)_e[xe]=fe||oe?oe?b.image[xe].image:b.image[xe]:_(b.image[xe],!0,s.maxCubemapSize),_e[xe]=Re(b,_e[xe]);let Ee=_e[0],Te=r.convert(b.format,b.colorSpace),qe=r.convert(b.type),nt=y(b.internalFormat,Te,qe,b.colorSpace),it=b.isVideoTexture!==!0,me=Y.__version===void 0||B===!0,Ce=k.dataReady,$e,Xt=E(b,Ee);if(W(i.TEXTURE_CUBE_MAP,b),fe){it&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Xt,nt,Ee.width,Ee.height);for(let xe=0;xe<6;xe++){$e=_e[xe].mipmaps;for(let st=0;st<$e.length;st++){let Xe=$e[st];b.format!==Hn?Te!==null?it?Ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,0,0,Xe.width,Xe.height,Te,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,nt,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,0,0,Xe.width,Xe.height,Te,qe,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,nt,Xe.width,Xe.height,0,Te,qe,Xe.data)}}}else{if($e=b.mipmaps,it&&me){$e.length>0&&Xt++;let xe=Be(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Xt,nt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(oe){it?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,_e[xe].width,_e[xe].height,Te,qe,_e[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,nt,_e[xe].width,_e[xe].height,0,Te,qe,_e[xe].data);for(let st=0;st<$e.length;st++){let Xe=$e[st].image[xe].image;it?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,0,0,Xe.width,Xe.height,Te,qe,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,nt,Xe.width,Xe.height,0,Te,qe,Xe.data)}}else{it?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Te,qe,_e[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,nt,Te,qe,_e[xe]);for(let st=0;st<$e.length;st++){let Xe=$e[st];it?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,0,0,Te,qe,Xe.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,nt,Te,qe,Xe.image[xe])}}}f(b)&&m(i.TEXTURE_CUBE_MAP),Y.__version=k.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version})(z,A,T):t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+T)},this.rebindTextures=function(A,T,z){let F=n.get(A);T!==void 0&&se(F.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Me(A)},this.setupRenderTarget=function(A){let T=A.texture,z=n.get(A),F=n.get(T);A.addEventListener("dispose",C);let b=A.textures,L=A.isWebGLCubeRenderTarget===!0,B=b.length>1;if(B||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=T.version,a.memory.textures++),L){z.__webglFramebuffer=[];for(let k=0;k<6;k++)if(T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer[k]=[];for(let Y=0;Y<T.mipmaps.length;Y++)z.__webglFramebuffer[k][Y]=i.createFramebuffer()}else z.__webglFramebuffer[k]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer=[];for(let k=0;k<T.mipmaps.length;k++)z.__webglFramebuffer[k]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(B)for(let k=0,Y=b.length;k<Y;k++){let G=n.get(b[k]);G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&he(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let k=0;k<b.length;k++){let Y=b[k];z.__webglColorRenderbuffer[k]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[k]);let G=r.convert(Y.format,Y.colorSpace),j=r.convert(Y.type),ae=y(Y.internalFormat,G,j,Y.colorSpace,A.isXRRenderTarget===!0),fe=ue(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ae,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,z.__webglColorRenderbuffer[k])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(L){t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),W(i.TEXTURE_CUBE_MAP,T);for(let k=0;k<6;k++)if(T.mipmaps&&T.mipmaps.length>0)for(let Y=0;Y<T.mipmaps.length;Y++)se(z.__webglFramebuffer[k][Y],A,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Y);else se(z.__webglFramebuffer[k],A,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);f(T)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(B){for(let k=0,Y=b.length;k<Y;k++){let G=b[k],j=n.get(G),ae=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ae=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),W(ae,G),se(z.__webglFramebuffer,A,G,i.COLOR_ATTACHMENT0+k,ae,0),f(G)&&m(ae)}t.unbindTexture()}else{let k=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(k=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(k,F.__webglTexture),W(k,T),T.mipmaps&&T.mipmaps.length>0)for(let Y=0;Y<T.mipmaps.length;Y++)se(z.__webglFramebuffer[Y],A,T,i.COLOR_ATTACHMENT0,k,Y);else se(z.__webglFramebuffer,A,T,i.COLOR_ATTACHMENT0,k,0);f(T)&&m(k),t.unbindTexture()}A.depthBuffer&&Me(A)},this.updateRenderTargetMipmap=function(A){let T=A.textures;for(let z=0,F=T.length;z<F;z++){let b=T[z];if(f(b)){let L=v(A),B=n.get(b).__webglTexture;t.bindTexture(L,B),m(L),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(A.samples>0){if(he(A)===!1){let T=A.textures,z=A.width,F=A.height,b=i.COLOR_BUFFER_BIT,L=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=n.get(A),k=T.length>1;if(k)for(let G=0;G<T.length;G++)t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,B.__webglMultisampledFramebuffer);let Y=A.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglFramebuffer);for(let G=0;G<T.length;G++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(b|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(b|=i.STENCIL_BUFFER_BIT)),k){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,B.__webglColorRenderbuffer[G]);let j=n.get(T[G]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,z,F,0,0,z,F,b,i.NEAREST),c===!0&&(Ie.length=0,ce.length=0,Ie.push(i.COLOR_ATTACHMENT0+G),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ie.push(L),ce.push(L),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),k)for(let G=0;G<T.length;G++){t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,B.__webglColorRenderbuffer[G]);let j=n.get(T[G]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.TEXTURE_2D,j,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let T=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}},this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=se,this.useMultisampledRTT=he}function r_(i,e){return{convert:function(t,n=Es){let s,r=et.getTransfer(n);if(t===li)return i.UNSIGNED_BYTE;if(t===Xl)return i.UNSIGNED_SHORT_4_4_4_4;if(t===Kl)return i.UNSIGNED_SHORT_5_5_5_1;if(t===Lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===Dh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(t===Ih)return i.BYTE;if(t===Ph)return i.SHORT;if(t===mr)return i.UNSIGNED_SHORT;if(t===ql)return i.INT;if(t===Ms)return i.UNSIGNED_INT;if(t===zn)return i.FLOAT;if(t===gr)return i.HALF_FLOAT;if(t===Vp)return i.ALPHA;if(t===Wp)return i.RGB;if(t===Hn)return i.RGBA;if(t===Fa)return i.DEPTH_COMPONENT;if(t===Na)return i.DEPTH_STENCIL;if(t===Yl)return i.RED;if(t===Zl)return i.RED_INTEGER;if(t===$p)return i.RG;if(t===kh)return i.RG_INTEGER;if(t===Fh)return i.RGBA_INTEGER;if(t===Jl||t===Ql||t===ec||t===tc)if(r===ot){if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s===null)return null;if(t===Jl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(s=e.get("WEBGL_compressed_texture_s3tc"),s===null)return null;if(t===Jl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Ql)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Nh||t===Uh||t===Bh||t===Oh){if(s=e.get("WEBGL_compressed_texture_pvrtc"),s===null)return null;if(t===Nh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Uh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Bh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Oh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===zh||t===Hh||t===Gh){if(s=e.get("WEBGL_compressed_texture_etc"),s===null)return null;if(t===zh||t===Hh)return r===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(t===Gh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}if(t===Vh||t===Wh||t===$h||t===jh||t===qh||t===Xh||t===Kh||t===Yh||t===Zh||t===Jh||t===Qh||t===eu||t===tu||t===nu){if(s=e.get("WEBGL_compressed_texture_astc"),s===null)return null;if(t===Vh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Wh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===$h)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===jh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===qh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Xh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Kh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Yh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Zh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Jh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Qh)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===eu)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===tu)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===nu)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===iu||t===su||t===ru){if(s=e.get("EXT_texture_compression_bptc"),s===null)return null;if(t===iu)return r===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===su)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===ru)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===au||t===ou||t===lu||t===cu){if(s=e.get("EXT_texture_compression_rgtc"),s===null)return null;if(t===au)return s.COMPRESSED_RED_RGTC1_EXT;if(t===ou)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===lu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===cu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===_r?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var Iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new da(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bn({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pu=class extends ni{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,_=typeof XRWebGLBinding<"u",f=new Iu,m={},v=t.getContextAttributes(),y=null,x=null,E=[],w=[],C=new te,D=null,P=new Wt;P.viewport=new rt;let N=new Wt;N.viewport=new rt;let H=[P,N],O=new kl,J=null,W=null;function Q(ce){let ue=w.indexOf(ce.inputSource);if(ue===-1)return;let he=E[ue];he!==void 0&&(he.update(ce.inputSource,ce.frame,l||a),he.dispatchEvent({type:ce.type,data:ce.inputSource}))}function ee(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",le);for(let ce=0;ce<E.length;ce++){let ue=w[ce];ue!==null&&(w[ce]=null,E[ce].disconnect(ue))}J=null,W=null,f.reset();for(let ce in m)delete m[ce];e.setRenderTarget(y),p=null,d=null,u=null,s=null,x=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}function le(ce){for(let ue=0;ue<ce.removed.length;ue++){let he=ce.removed[ue],Re=w.indexOf(he);Re>=0&&(w[Re]=null,E[Re].disconnect(he))}for(let ue=0;ue<ce.added.length;ue++){let he=ce.added[ue],Re=w.indexOf(he);if(Re===-1){for(let A=0;A<E.length;A++){if(A>=w.length){w.push(he),Re=A;break}if(w[A]===null){w[A]=he,Re=A;break}}if(Re===-1)break}let Be=E[Re];Be&&Be.connect(he)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let ue=E[ce];return ue===void 0&&(ue=new sr,E[ce]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ce){let ue=E[ce];return ue===void 0&&(ue=new sr,E[ce]=ue),ue.getGripSpace()},this.getHand=function(ce){let ue=E[ce];return ue===void 0&&(ue=new sr,E[ce]=ue),ue.getHandSpace()},this.setFramebufferScaleFactor=function(ce){r=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){o=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ce){l=ce},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ce){if(s=ce,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",le),v.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,he=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?Na:Fa,he=v.stencil?_r:Ms);let Be={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new ii(d.textureWidth,d.textureHeight,{format:Hn,type:li,depthTexture:new ua(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ii(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};let se=new S,ye=new S;function we(ce,ue){ue===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(ue.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(s===null)return;let ue=ce.near,he=ce.far;f.texture!==null&&(f.depthNear>0&&(ue=f.depthNear),f.depthFar>0&&(he=f.depthFar)),O.near=N.near=P.near=ue,O.far=N.far=P.far=he,J===O.near&&W===O.far||(s.updateRenderState({depthNear:O.near,depthFar:O.far}),J=O.near,W=O.far),O.layers.mask=6|ce.layers.mask,P.layers.mask=3&O.layers.mask,N.layers.mask=5&O.layers.mask;let Re=ce.parent,Be=O.cameras;we(O,Re);for(let A=0;A<Be.length;A++)we(Be[A],Re);Be.length===2?(function(A,T,z){se.setFromMatrixPosition(T.matrixWorld),ye.setFromMatrixPosition(z.matrixWorld);let F=se.distanceTo(ye),b=T.projectionMatrix.elements,L=z.projectionMatrix.elements,B=b[14]/(b[10]-1),k=b[14]/(b[10]+1),Y=(b[9]+1)/b[5],G=(b[9]-1)/b[5],j=(b[8]-1)/b[0],ae=(L[8]+1)/L[0],fe=B*j,oe=B*ae,_e=F/(-j+ae),Ee=_e*-j;if(T.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(Ee),A.translateZ(_e),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert(),b[10]===-1)A.projectionMatrix.copy(T.projectionMatrix),A.projectionMatrixInverse.copy(T.projectionMatrixInverse);else{let Te=B+_e,qe=k+_e,nt=fe-Ee,it=oe+(F-Ee),me=Y*k/qe*Te,Ce=G*k/qe*Te;A.projectionMatrix.makePerspective(nt,it,me,Ce,Te,qe),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}})(O,P,N):O.projectionMatrix.copy(P.projectionMatrix),(function(A,T,z){z===null?A.matrix.copy(T.matrixWorld):(A.matrix.copy(z.matrixWorld),A.matrix.invert(),A.matrix.multiply(T.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(T.projectionMatrix),A.projectionMatrixInverse.copy(T.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=2*Qs*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)})(ce,O,Re)},this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(ce){c=ce,d!==null&&(d.fixedFoveation=ce),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ce)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(O)},this.getCameraTexture=function(ce){return m[ce]};let Me=null,Ie=new Ff;Ie.setAnimationLoop(function(ce,ue){if(h=ue.getViewerPose(l||a),g=ue,h!==null){let he=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Re=!1;he.length!==O.cameras.length&&(O.cameras.length=0,Re=!0);for(let A=0;A<he.length;A++){let T=he[A],z=null;if(p!==null)z=p.getViewport(T);else{let b=u.getViewSubImage(d,T);z=b.viewport,A===0&&(e.setRenderTargetTextures(x,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(x))}let F=H[A];F===void 0&&(F=new Wt,F.layers.enable(A),F.viewport=new rt,H[A]=F),F.matrix.fromArray(T.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(T.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(z.x,z.y,z.width,z.height),A===0&&(O.matrix.copy(F.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Re===!0&&O.cameras.push(F)}let Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let A=u.getDepthInformation(he[0]);A&&A.isValid&&A.texture&&f.init(A,s.renderState)}if(Be&&Be.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let A=0;A<he.length;A++){let T=he[A].camera;if(T){let z=m[T];z||(z=new da,m[T]=z);let F=u.getCameraImage(T);z.sourceTexture=F}}}}for(let he=0;he<E.length;he++){let Re=w[he],Be=E[he];Re!==null&&Be!==void 0&&Be.update(Re,ue,l||a)}Me&&Me(ce,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}),this.setAnimationLoop=function(ce){Me=ce},this.dispose=function(){}}},Ts=new cn,a_=new Pe;function o_(i,e){function t(s,r){s.matrixAutoUpdate===!0&&s.updateMatrix(),r.value.copy(s.matrix)}function n(s,r){s.opacity.value=r.opacity,r.color&&s.diffuse.value.copy(r.color),r.emissive&&s.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(s.map.value=r.map,t(r.map,s.mapTransform)),r.alphaMap&&(s.alphaMap.value=r.alphaMap,t(r.alphaMap,s.alphaMapTransform)),r.bumpMap&&(s.bumpMap.value=r.bumpMap,t(r.bumpMap,s.bumpMapTransform),s.bumpScale.value=r.bumpScale,r.side===_n&&(s.bumpScale.value*=-1)),r.normalMap&&(s.normalMap.value=r.normalMap,t(r.normalMap,s.normalMapTransform),s.normalScale.value.copy(r.normalScale),r.side===_n&&s.normalScale.value.negate()),r.displacementMap&&(s.displacementMap.value=r.displacementMap,t(r.displacementMap,s.displacementMapTransform),s.displacementScale.value=r.displacementScale,s.displacementBias.value=r.displacementBias),r.emissiveMap&&(s.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,s.emissiveMapTransform)),r.specularMap&&(s.specularMap.value=r.specularMap,t(r.specularMap,s.specularMapTransform)),r.alphaTest>0&&(s.alphaTest.value=r.alphaTest);let a=e.get(r),o=a.envMap,c=a.envMapRotation;o&&(s.envMap.value=o,Ts.copy(c),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),s.envMapRotation.value.setFromMatrix4(a_.makeRotationFromEuler(Ts)),s.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,s.reflectivity.value=r.reflectivity,s.ior.value=r.ior,s.refractionRatio.value=r.refractionRatio),r.lightMap&&(s.lightMap.value=r.lightMap,s.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,s.lightMapTransform)),r.aoMap&&(s.aoMap.value=r.aoMap,s.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,s.aoMapTransform))}return{refreshFogUniforms:function(s,r){r.color.getRGB(s.fogColor.value,fu(i)),r.isFog?(s.fogNear.value=r.near,s.fogFar.value=r.far):r.isFogExp2&&(s.fogDensity.value=r.density)},refreshMaterialUniforms:function(s,r,a,o,c){r.isMeshBasicMaterial||r.isMeshLambertMaterial?n(s,r):r.isMeshToonMaterial?(n(s,r),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(s,r)):r.isMeshPhongMaterial?(n(s,r),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(s,r)):r.isMeshStandardMaterial?(n(s,r),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(s,r),r.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===_n&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(s,r,c)):r.isMeshMatcapMaterial?(n(s,r),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(s,r)):r.isMeshDepthMaterial?n(s,r):r.isMeshDistanceMaterial?(n(s,r),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(s,r)):r.isMeshNormalMaterial?n(s,r):r.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(s,r),r.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(s,r)):r.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(s,r,a,o):r.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(s,r):r.isShadowMaterial?(s.color.value.copy(r.color),s.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function l_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,d,p,g){let _=u.value,f=d+"_"+p;if(g[f]===void 0)return g[f]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let m=g[f];if(typeof _=="number"||typeof _=="boolean"){if(m!==_)return g[f]=_,!0}else if(m.equals(_)===!1)return m.copy(_),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(s[d.id]),delete s[d.id],delete r[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=s[u.id];p===void 0&&((function(f){let m=f.uniforms,v=0,y=16;for(let E=0,w=m.length;E<w;E++){let C=Array.isArray(m[E])?m[E]:[m[E]];for(let D=0,P=C.length;D<P;D++){let N=C[D],H=Array.isArray(N.value)?N.value:[N.value];for(let O=0,J=H.length;O<J;O++){let W=l(H[O]),Q=v%y,ee=Q%W.boundary,le=Q+ee;v+=ee,le!==0&&y-le<W.storage&&(v+=y-le),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=W.storage}}}let x=v%y;x>0&&(v+=y-x),f.__size=v,f.__cache={}})(u),p=(function(f){let m=(function(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=m;let v=i.createBuffer(),y=f.__size,x=f.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,y,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,m,v),v})(u),s[u.id]=p,u.addEventListener("dispose",h));let g=d.program;n.updateUBOMapping(u,g);let _=e.render.frame;r[u.id]!==_&&((function(f){let m=s[f.id],v=f.uniforms,y=f.__cache;i.bindBuffer(i.UNIFORM_BUFFER,m);for(let x=0,E=v.length;x<E;x++){let w=Array.isArray(v[x])?v[x]:[v[x]];for(let C=0,D=w.length;C<D;C++){let P=w[C];if(c(P,x,C,y)===!0){let N=P.__offset,H=Array.isArray(P.value)?P.value:[P.value],O=0;for(let J=0;J<H.length;J++){let W=H[J],Q=l(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,N+O,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,O),O+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),r[u.id]=_)},dispose:function(){for(let u in s)i.deleteBuffer(s[u]);a=[],s={},r={}}}}var ac=class{constructor(e={}){let{canvas:t=nf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),_=new Int32Array(4),f=null,m=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,E=!1;this._outputColorSpace=pn;let w=0,C=0,D=null,P=-1,N=null,H=new rt,O=new rt,J=null,W=new de(0),Q=0,ee=t.width,le=t.height,se=1,ye=null,we=null,Me=new rt(0,0,ee,le),Ie=new rt(0,0,ee,le),ce=!1,ue=new Vi,he=!1,Re=!1,Be=new Pe,A=new S,T=new rt,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},F=!1;function b(){return D===null?se:1}let L,B,k,Y,G,j,ae,fe,oe,_e,Ee,Te,qe,nt,it,me,Ce,$e,Xt,xe,st,Xe,In,di,U=n;function Ot(I,q){return t.getContext(I,q)}try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",as,!1),t.addEventListener("webglcontextrestored",os,!1),t.addEventListener("webglcontextcreationerror",Nr,!1),U===null){let q="webgl2";if(U=Ot(q,I),U===null)throw Ot(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}function Kt(){L=new Wg(U),L.init(),Xe=new r_(U,L),B=new Og(U,L,e,Xe),k=new i_(U,L),B.reversedDepthBuffer&&d&&k.buffers.depth.setReversed(!0),Y=new qg(U),G=new q0,j=new s_(U,L,k,G,B,Xe,Y),ae=new Hg(x),fe=new Vg(x),oe=new kg(U),In=new Ug(U,oe),_e=new $g(U,oe,Y,In),Ee=new Kg(U,_e,oe,Y),Xt=new Xg(U,B,j),me=new zg(G),Te=new j0(x,ae,fe,L,B,In,me),qe=new o_(x,G),nt=new K0,it=new e_(L),$e=new Ng(x,ae,fe,k,Ee,p,c),Ce=new t_(x,Ee,B),di=new l_(U,Y,B,k),xe=new Bg(U,L,Y),st=new jg(U,L,Y),Y.programs=Te.programs,x.capabilities=B,x.extensions=L,x.properties=G,x.renderLists=nt,x.shadowMap=Ce,x.state=k,x.info=Y}Kt();let vt=new Pu(x,U);function as(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function os(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let I=Y.autoReset,q=Ce.enabled,Z=Ce.autoUpdate,ne=Ce.needsUpdate,K=Ce.type;Kt(),Y.autoReset=I,Ce.enabled=q,Ce.autoUpdate=Z,Ce.needsUpdate=ne,Ce.type=K}function Nr(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function uo(I){let q=I.target;q.removeEventListener("dispose",uo),(function(Z){(function(ne){let K=G.get(ne).programs;K!==void 0&&(K.forEach(function(re){Te.releaseProgram(re)}),ne.isShaderMaterial&&Te.releaseShaderCache(ne))})(Z),G.remove(Z)})(q)}function Cc(I,q,Z){I.transparent===!0&&I.side===gt&&I.forceSinglePass===!1?(I.side=_n,I.needsUpdate=!0,fo(I,q,Z),I.side=dr,I.needsUpdate=!0,fo(I,q,Z),I.side=gt):fo(I,q,Z)}this.xr=vt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let I=L.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=L.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(I){I!==void 0&&(se=I,this.setSize(ee,le,!1))},this.getSize=function(I){return I.set(ee,le)},this.setSize=function(I,q,Z=!0){vt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(ee=I,le=q,t.width=Math.floor(I*se),t.height=Math.floor(q*se),Z===!0&&(t.style.width=I+"px",t.style.height=q+"px"),this.setViewport(0,0,I,q))},this.getDrawingBufferSize=function(I){return I.set(ee*se,le*se).floor()},this.setDrawingBufferSize=function(I,q,Z){ee=I,le=q,se=Z,t.width=Math.floor(I*Z),t.height=Math.floor(q*Z),this.setViewport(0,0,I,q)},this.getCurrentViewport=function(I){return I.copy(H)},this.getViewport=function(I){return I.copy(Me)},this.setViewport=function(I,q,Z,ne){I.isVector4?Me.set(I.x,I.y,I.z,I.w):Me.set(I,q,Z,ne),k.viewport(H.copy(Me).multiplyScalar(se).round())},this.getScissor=function(I){return I.copy(Ie)},this.setScissor=function(I,q,Z,ne){I.isVector4?Ie.set(I.x,I.y,I.z,I.w):Ie.set(I,q,Z,ne),k.scissor(O.copy(Ie).multiplyScalar(se).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(I){k.setScissorTest(ce=I)},this.setOpaqueSort=function(I){ye=I},this.setTransparentSort=function(I){we=I},this.getClearColor=function(I){return I.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(I=!0,q=!0,Z=!0){let ne=0;if(I){let K=!1;if(D!==null){let re=D.texture.format;K=re===Fh||re===kh||re===Zl}if(K){let re=D.texture.type,ge=re===li||re===Ms||re===mr||re===_r||re===Xl||re===Kl,ve=$e.getClearColor(),Se=$e.getClearAlpha(),Le=ve.r,ke=ve.g,De=ve.b;ge?(g[0]=Le,g[1]=ke,g[2]=De,g[3]=Se,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Le,_[1]=ke,_[2]=De,_[3]=Se,U.clearBufferiv(U.COLOR,0,_))}else ne|=U.COLOR_BUFFER_BIT}q&&(ne|=U.DEPTH_BUFFER_BIT),Z&&(ne|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",as,!1),t.removeEventListener("webglcontextrestored",os,!1),t.removeEventListener("webglcontextcreationerror",Nr,!1),$e.dispose(),nt.dispose(),it.dispose(),G.dispose(),ae.dispose(),fe.dispose(),Ee.dispose(),In.dispose(),di.dispose(),Te.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",yd),vt.removeEventListener("sessionend",xd),ls.stop()},this.renderBufferDirect=function(I,q,Z,ne,K,re){q===null&&(q=z);let ge=K.isMesh&&K.matrixWorld.determinant()<0,ve=(function(Ke,yt,Vt,Ve,Fe){yt.isScene!==!0&&(yt=z),j.resetTextureUnits();let Pn=yt.fog,Lc=Ve.isMeshStandardMaterial?yt.environment:null,mo=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ms,Li=(Ve.isMeshStandardMaterial?fe:ae).get(Ve.envMap||Lc),qn=Ve.vertexColors===!0&&!!Vt.attributes.color&&Vt.attributes.color.itemSize===4,Ls=!!Vt.attributes.tangent&&(!!Ve.normalMap||Ve.anisotropy>0),pi=!!Vt.morphAttributes.position,Dc=!!Vt.morphAttributes.normal,Ds=!!Vt.morphAttributes.color,Td=bi;Ve.toneMapped&&(D!==null&&D.isXRRenderTarget!==!0||(Td=x.toneMapping));let Ad=Vt.morphAttributes.position||Vt.morphAttributes.normal||Vt.morphAttributes.color,Km=Ad!==void 0?Ad.length:0,Ye=G.get(Ve),Ym=m.state.lights;if(he===!0&&(Re===!0||Ke!==N)){let bn=Ke===N&&Ve.id===P;me.setState(Ve,Ke,bn)}let Ln=!1;Ve.version===Ye.__version?Ye.needsLights&&Ye.lightsStateVersion!==Ym.state.version||Ye.outputColorSpace!==mo||Fe.isBatchedMesh&&Ye.batching===!1?Ln=!0:Fe.isBatchedMesh||Ye.batching!==!0?Fe.isBatchedMesh&&Ye.batchingColor===!0&&Fe.colorTexture===null||Fe.isBatchedMesh&&Ye.batchingColor===!1&&Fe.colorTexture!==null||Fe.isInstancedMesh&&Ye.instancing===!1?Ln=!0:Fe.isInstancedMesh||Ye.instancing!==!0?Fe.isSkinnedMesh&&Ye.skinning===!1?Ln=!0:Fe.isSkinnedMesh||Ye.skinning!==!0?Fe.isInstancedMesh&&Ye.instancingColor===!0&&Fe.instanceColor===null||Fe.isInstancedMesh&&Ye.instancingColor===!1&&Fe.instanceColor!==null||Fe.isInstancedMesh&&Ye.instancingMorph===!0&&Fe.morphTexture===null||Fe.isInstancedMesh&&Ye.instancingMorph===!1&&Fe.morphTexture!==null||Ye.envMap!==Li||Ve.fog===!0&&Ye.fog!==Pn?Ln=!0:Ye.numClippingPlanes===void 0||Ye.numClippingPlanes===me.numPlanes&&Ye.numIntersection===me.numIntersection?(Ye.vertexAlphas!==qn||Ye.vertexTangents!==Ls||Ye.morphTargets!==pi||Ye.morphNormals!==Dc||Ye.morphColors!==Ds||Ye.toneMapping!==Td||Ye.morphTargetsCount!==Km)&&(Ln=!0):Ln=!0:Ln=!0:Ln=!0:Ln=!0:(Ln=!0,Ye.__version=Ve.version);let cs=Ye.currentProgram;Ln===!0&&(cs=fo(Ve,yt,Fe));let Rd=!1,Ur=!1,kc=!1,At=cs.getUniforms(),Di=Ye.uniforms;if(k.useProgram(cs.program)&&(Rd=!0,Ur=!0,kc=!0),Ve.id!==P&&(P=Ve.id,Ur=!0),Rd||N!==Ke){k.buffers.depth.getReversed()&&Ke.reversedDepth!==!0&&(Ke._reversedDepth=!0,Ke.updateProjectionMatrix()),At.setValue(U,"projectionMatrix",Ke.projectionMatrix),At.setValue(U,"viewMatrix",Ke.matrixWorldInverse);let bn=At.map.cameraPosition;bn!==void 0&&bn.setValue(U,A.setFromMatrixPosition(Ke.matrixWorld)),B.logarithmicDepthBuffer&&At.setValue(U,"logDepthBufFC",2/(Math.log(Ke.far+1)/Math.LN2)),(Ve.isMeshPhongMaterial||Ve.isMeshToonMaterial||Ve.isMeshLambertMaterial||Ve.isMeshBasicMaterial||Ve.isMeshStandardMaterial||Ve.isShaderMaterial)&&At.setValue(U,"isOrthographic",Ke.isOrthographicCamera===!0),N!==Ke&&(N=Ke,Ur=!0,kc=!0)}if(Fe.isSkinnedMesh){At.setOptional(U,Fe,"bindMatrix"),At.setOptional(U,Fe,"bindMatrixInverse");let bn=Fe.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),At.setValue(U,"boneTexture",bn.boneTexture,j))}Fe.isBatchedMesh&&(At.setOptional(U,Fe,"batchingTexture"),At.setValue(U,"batchingTexture",Fe._matricesTexture,j),At.setOptional(U,Fe,"batchingIdTexture"),At.setValue(U,"batchingIdTexture",Fe._indirectTexture,j),At.setOptional(U,Fe,"batchingColorTexture"),Fe._colorsTexture!==null&&At.setValue(U,"batchingColorTexture",Fe._colorsTexture,j));let Fc=Vt.morphAttributes;Fc.position===void 0&&Fc.normal===void 0&&Fc.color===void 0||Xt.update(Fe,Vt,cs),(Ur||Ye.receiveShadow!==Fe.receiveShadow)&&(Ye.receiveShadow=Fe.receiveShadow,At.setValue(U,"receiveShadow",Fe.receiveShadow)),Ve.isMeshGouraudMaterial&&Ve.envMap!==null&&(Di.envMap.value=Li,Di.flipEnvMap.value=Li.isCubeTexture&&Li.isRenderTargetTexture===!1?-1:1),Ve.isMeshStandardMaterial&&Ve.envMap===null&&yt.environment!==null&&(Di.envMapIntensity.value=yt.environmentIntensity),Ur&&(At.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&(Dn=kc,(Xn=Di).ambientLightColor.needsUpdate=Dn,Xn.lightProbe.needsUpdate=Dn,Xn.directionalLights.needsUpdate=Dn,Xn.directionalLightShadows.needsUpdate=Dn,Xn.pointLights.needsUpdate=Dn,Xn.pointLightShadows.needsUpdate=Dn,Xn.spotLights.needsUpdate=Dn,Xn.spotLightShadows.needsUpdate=Dn,Xn.rectAreaLights.needsUpdate=Dn,Xn.hemisphereLights.needsUpdate=Dn),Pn&&Ve.fog===!0&&qe.refreshFogUniforms(Di,Pn),qe.refreshMaterialUniforms(Di,Ve,se,le,m.state.transmissionRenderTarget[Ke.id]),yr.upload(U,Sd(Ye),Di,j));var Xn,Dn;if(Ve.isShaderMaterial&&Ve.uniformsNeedUpdate===!0&&(yr.upload(U,Sd(Ye),Di,j),Ve.uniformsNeedUpdate=!1),Ve.isSpriteMaterial&&At.setValue(U,"center",Fe.center),At.setValue(U,"modelViewMatrix",Fe.modelViewMatrix),At.setValue(U,"normalMatrix",Fe.normalMatrix),At.setValue(U,"modelMatrix",Fe.matrixWorld),Ve.isShaderMaterial||Ve.isRawShaderMaterial){let bn=Ve.uniformsGroups;for(let Nc=0,Zm=bn.length;Nc<Zm;Nc++){let Cd=bn[Nc];di.update(Cd,cs),di.bind(Cd,cs)}}return cs})(I,q,Z,ne,K);k.setMaterial(ne,ge);let Se=Z.index,Le=1;if(ne.wireframe===!0){if(Se=_e.getWireframeAttribute(Z),Se===void 0)return;Le=2}let ke=Z.drawRange,De=Z.attributes.position,Ge=ke.start*Le,ft=(ke.start+ke.count)*Le;re!==null&&(Ge=Math.max(Ge,re.start*Le),ft=Math.min(ft,(re.start+re.count)*Le)),Se!==null?(Ge=Math.max(Ge,0),ft=Math.min(ft,Se.count)):De!=null&&(Ge=Math.max(Ge,0),ft=Math.min(ft,De.count));let Mt=ft-Ge;if(Mt<0||Mt===1/0)return;let Tt;In.setup(K,ne,ve,Z,Se);let mt=xe;if(Se!==null&&(Tt=oe.get(Se),mt=st,mt.setIndex(Tt)),K.isMesh)ne.wireframe===!0?(k.setLineWidth(ne.wireframeLinewidth*b()),mt.setMode(U.LINES)):mt.setMode(U.TRIANGLES);else if(K.isLine){let Ke=ne.linewidth;Ke===void 0&&(Ke=1),k.setLineWidth(Ke*b()),K.isLineSegments?mt.setMode(U.LINES):K.isLineLoop?mt.setMode(U.LINE_LOOP):mt.setMode(U.LINE_STRIP)}else K.isPoints?mt.setMode(U.POINTS):K.isSprite&&mt.setMode(U.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))mt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Ke=K._multiDrawStarts,yt=K._multiDrawCounts,Vt=K._multiDrawCount,Ve=Se?oe.get(Se).bytesPerElement:1,Fe=G.get(ne).currentProgram.getUniforms();for(let Pn=0;Pn<Vt;Pn++)Fe.setValue(U,"_gl_DrawID",Pn),mt.render(Ke[Pn]/Ve,yt[Pn])}else if(K.isInstancedMesh)mt.renderInstances(Ge,Mt,K.count);else if(Z.isInstancedBufferGeometry){let Ke=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,yt=Math.min(Z.instanceCount,Ke);mt.renderInstances(Ge,Mt,yt)}else mt.render(Ge,Mt)},this.compile=function(I,q,Z=null){Z===null&&(Z=I),m=it.get(Z),m.init(q),y.push(m),Z.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),I!==Z&&I.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights();let ne=new Set;return I.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let re=K.material;if(re)if(Array.isArray(re))for(let ge=0;ge<re.length;ge++){let ve=re[ge];Cc(ve,Z,K),ne.add(ve)}else Cc(re,Z,K),ne.add(re)}),m=y.pop(),ne},this.compileAsync=function(I,q,Z=null){let ne=this.compile(I,q,Z);return new Promise(K=>{function re(){ne.forEach(function(ge){G.get(ge).currentProgram.isReady()&&ne.delete(ge)}),ne.size!==0?setTimeout(re,10):K(I)}L.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ic=null;function yd(){ls.stop()}function xd(){ls.start()}let ls=new Ff;function Pc(I,q,Z,ne){if(I.visible===!1)return;if(I.layers.test(q.layers)){if(I.isGroup)Z=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(q);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ue.intersectsSprite(I)){ne&&T.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Be);let re=Ee.update(I),ge=I.material;ge.visible&&f.push(I,re,ge,Z,T.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ue.intersectsObject(I))){let re=Ee.update(I),ge=I.material;if(ne&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),T.copy(I.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),T.copy(re.boundingSphere.center)),T.applyMatrix4(I.matrixWorld).applyMatrix4(Be)),Array.isArray(ge)){let ve=re.groups;for(let Se=0,Le=ve.length;Se<Le;Se++){let ke=ve[Se],De=ge[ke.materialIndex];De&&De.visible&&f.push(I,re,De,Z,T.z,ke)}}else ge.visible&&f.push(I,re,ge,Z,T.z,null)}}let K=I.children;for(let re=0,ge=K.length;re<ge;re++)Pc(K[re],q,Z,ne)}function bd(I,q,Z,ne){let K=I.opaque,re=I.transmissive,ge=I.transparent;m.setupLightsView(Z),he===!0&&me.setGlobalState(x.clippingPlanes,Z),ne&&k.viewport(H.copy(ne)),K.length>0&&po(K,q,Z),re.length>0&&po(re,q,Z),ge.length>0&&po(ge,q,Z),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Md(I,q,Z,ne){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ne.id]===void 0&&(m.state.transmissionRenderTarget[ne.id]=new ii(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?gr:li,minFilter:bs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let K=m.state.transmissionRenderTarget[ne.id],re=ne.viewport||H;K.setSize(re.z*x.transmissionResolutionScale,re.w*x.transmissionResolutionScale);let ge=x.getRenderTarget(),ve=x.getActiveCubeFace(),Se=x.getActiveMipmapLevel();x.setRenderTarget(K),x.getClearColor(W),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),F&&$e.render(Z);let Le=x.toneMapping;x.toneMapping=bi;let ke=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),m.setupLightsView(ne),he===!0&&me.setGlobalState(x.clippingPlanes,ne),po(I,Z,ne),j.updateMultisampleRenderTarget(K),j.updateRenderTargetMipmap(K),L.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ge=0,ft=q.length;Ge<ft;Ge++){let Mt=q[Ge],Tt=Mt.object,mt=Mt.geometry,Ke=Mt.material,yt=Mt.group;if(Ke.side===gt&&Tt.layers.test(ne.layers)){let Vt=Ke.side;Ke.side=_n,Ke.needsUpdate=!0,Ed(Tt,Z,ne,mt,Ke,yt),Ke.side=Vt,Ke.needsUpdate=!0,De=!0}}De===!0&&(j.updateMultisampleRenderTarget(K),j.updateRenderTargetMipmap(K))}x.setRenderTarget(ge,ve,Se),x.setClearColor(W,Q),ke!==void 0&&(ne.viewport=ke),x.toneMapping=Le}function po(I,q,Z){let ne=q.isScene===!0?q.overrideMaterial:null;for(let K=0,re=I.length;K<re;K++){let ge=I[K],ve=ge.object,Se=ge.geometry,Le=ge.group,ke=ge.material;ke.allowOverride===!0&&ne!==null&&(ke=ne),ve.layers.test(Z.layers)&&Ed(ve,q,Z,Se,ke,Le)}}function Ed(I,q,Z,ne,K,re){I.onBeforeRender(x,q,Z,ne,K,re),I.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),K.onBeforeRender(x,q,Z,ne,I,re),K.transparent===!0&&K.side===gt&&K.forceSinglePass===!1?(K.side=_n,K.needsUpdate=!0,x.renderBufferDirect(Z,q,ne,K,I,re),K.side=dr,K.needsUpdate=!0,x.renderBufferDirect(Z,q,ne,K,I,re),K.side=gt):x.renderBufferDirect(Z,q,ne,K,I,re),I.onAfterRender(x,q,Z,ne,K,re)}function fo(I,q,Z){q.isScene!==!0&&(q=z);let ne=G.get(I),K=m.state.lights,re=m.state.shadowsArray,ge=K.state.version,ve=Te.getParameters(I,K.state,re,q,Z),Se=Te.getProgramCacheKey(ve),Le=ne.programs;ne.environment=I.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(I.isMeshStandardMaterial?fe:ae).get(I.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&I.envMap===null?q.environmentRotation:I.envMapRotation,Le===void 0&&(I.addEventListener("dispose",uo),Le=new Map,ne.programs=Le);let ke=Le.get(Se);if(ke!==void 0){if(ne.currentProgram===ke&&ne.lightsStateVersion===ge)return wd(I,ve),ke}else ve.uniforms=Te.getUniforms(I),I.onBeforeCompile(ve,x),ke=Te.acquireProgram(ve,Se),Le.set(Se,ke),ne.uniforms=ve.uniforms;let De=ne.uniforms;return(I.isShaderMaterial||I.isRawShaderMaterial)&&I.clipping!==!0||(De.clippingPlanes=me.uniform),wd(I,ve),ne.needsLights=(function(Ge){return Ge.isMeshLambertMaterial||Ge.isMeshToonMaterial||Ge.isMeshPhongMaterial||Ge.isMeshStandardMaterial||Ge.isShadowMaterial||Ge.isShaderMaterial&&Ge.lights===!0})(I),ne.lightsStateVersion=ge,ne.needsLights&&(De.ambientLightColor.value=K.state.ambient,De.lightProbe.value=K.state.probe,De.directionalLights.value=K.state.directional,De.directionalLightShadows.value=K.state.directionalShadow,De.spotLights.value=K.state.spot,De.spotLightShadows.value=K.state.spotShadow,De.rectAreaLights.value=K.state.rectArea,De.ltc_1.value=K.state.rectAreaLTC1,De.ltc_2.value=K.state.rectAreaLTC2,De.pointLights.value=K.state.point,De.pointLightShadows.value=K.state.pointShadow,De.hemisphereLights.value=K.state.hemi,De.directionalShadowMap.value=K.state.directionalShadowMap,De.directionalShadowMatrix.value=K.state.directionalShadowMatrix,De.spotShadowMap.value=K.state.spotShadowMap,De.spotLightMatrix.value=K.state.spotLightMatrix,De.spotLightMap.value=K.state.spotLightMap,De.pointShadowMap.value=K.state.pointShadowMap,De.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=ke,ne.uniformsList=null,ke}function Sd(I){if(I.uniformsList===null){let q=I.currentProgram.getUniforms();I.uniformsList=yr.seqWithValue(q.seq,I.uniforms)}return I.uniformsList}function wd(I,q){let Z=G.get(I);Z.outputColorSpace=q.outputColorSpace,Z.batching=q.batching,Z.batchingColor=q.batchingColor,Z.instancing=q.instancing,Z.instancingColor=q.instancingColor,Z.instancingMorph=q.instancingMorph,Z.skinning=q.skinning,Z.morphTargets=q.morphTargets,Z.morphNormals=q.morphNormals,Z.morphColors=q.morphColors,Z.morphTargetsCount=q.morphTargetsCount,Z.numClippingPlanes=q.numClippingPlanes,Z.numIntersection=q.numClipIntersection,Z.vertexAlphas=q.vertexAlphas,Z.vertexTangents=q.vertexTangents,Z.toneMapping=q.toneMapping}ls.setAnimationLoop(function(I){Ic&&Ic(I)}),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(I){Ic=I,vt.setAnimationLoop(I),I===null?ls.stop():ls.start()},vt.addEventListener("sessionstart",yd),vt.addEventListener("sessionend",xd),this.render=function(I,q){if(q!==void 0&&q.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(E===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(q),q=vt.getCamera()),I.isScene===!0&&I.onBeforeRender(x,I,q,D),m=it.get(I,y.length),m.init(q),y.push(m),Be.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ue.setFromProjectionMatrix(Be,xi,q.reversedDepth),Re=this.localClippingEnabled,he=me.init(this.clippingPlanes,Re),f=nt.get(I,v.length),f.init(),v.push(f),vt.enabled===!0&&vt.isPresenting===!0){let re=x.xr.getDepthSensingMesh();re!==null&&Pc(re,q,-1/0,x.sortObjects)}Pc(I,q,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort(ye,we),F=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,F&&$e.addToRenderList(f,I),this.info.render.frame++,he===!0&&me.beginShadows();let Z=m.state.shadowsArray;Ce.render(Z,I,q),he===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let ne=f.opaque,K=f.transmissive;if(m.setupLights(),q.isArrayCamera){let re=q.cameras;if(K.length>0)for(let ge=0,ve=re.length;ge<ve;ge++)Md(ne,K,I,re[ge]);F&&$e.render(I);for(let ge=0,ve=re.length;ge<ve;ge++){let Se=re[ge];bd(f,I,Se,Se.viewport)}}else K.length>0&&Md(ne,K,I,q),F&&$e.render(I),bd(f,I,q);D!==null&&C===0&&(j.updateMultisampleRenderTarget(D),j.updateRenderTargetMipmap(D)),I.isScene===!0&&I.onAfterRender(x,I,q),In.resetDefaultState(),P=-1,N=null,y.pop(),y.length>0?(m=y[y.length-1],he===!0&&me.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,v.pop(),f=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(I,q,Z){let ne=G.get(I);ne.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),G.get(I.texture).__webglTexture=q,G.get(I.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:Z,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,q){let Z=G.get(I);Z.__webglFramebuffer=q,Z.__useDefaultFramebuffer=q===void 0};let jm=U.createFramebuffer();this.setRenderTarget=function(I,q=0,Z=0){D=I,w=q,C=Z;let ne=!0,K=null,re=!1,ge=!1;if(I){let ve=G.get(I);if(ve.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(U.FRAMEBUFFER,null),ne=!1;else if(ve.__webglFramebuffer===void 0)j.setupRenderTarget(I);else if(ve.__hasExternalTextures)j.rebindTextures(I,G.get(I.texture).__webglTexture,G.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let ke=I.depthTexture;if(ve.__boundDepthTexture!==ke){if(ke!==null&&G.has(ke)&&(I.width!==ke.image.width||I.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(I)}}let Se=I.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ge=!0);let Le=G.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(K=Array.isArray(Le[q])?Le[q][Z]:Le[q],re=!0):K=I.samples>0&&j.useMultisampledRTT(I)===!1?G.get(I).__webglMultisampledFramebuffer:Array.isArray(Le)?Le[Z]:Le,H.copy(I.viewport),O.copy(I.scissor),J=I.scissorTest}else H.copy(Me).multiplyScalar(se).floor(),O.copy(Ie).multiplyScalar(se).floor(),J=ce;if(Z!==0&&(K=jm),k.bindFramebuffer(U.FRAMEBUFFER,K)&&ne&&k.drawBuffers(I,K),k.viewport(H),k.scissor(O),k.setScissorTest(J),re){let ve=G.get(I.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve.__webglTexture,Z)}else if(ge){let ve=q;for(let Se=0;Se<I.textures.length;Se++){let Le=G.get(I.textures[Se]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Se,Le.__webglTexture,Z,ve)}}else if(I!==null&&Z!==0){let ve=G.get(I.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ve.__webglTexture,Z)}P=-1},this.readRenderTargetPixels=function(I,q,Z,ne,K,re,ge,ve=0){if(!I||!I.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=G.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){k.bindFramebuffer(U.FRAMEBUFFER,Se);try{let Le=I.textures[ve],ke=Le.format,De=Le.type;if(!B.textureFormatReadable(ke))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(De))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");q>=0&&q<=I.width-ne&&Z>=0&&Z<=I.height-K&&(I.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve),U.readPixels(q,Z,ne,K,Xe.convert(ke),Xe.convert(De),re))}finally{let Le=D!==null?G.get(D).__webglFramebuffer:null;k.bindFramebuffer(U.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(I,q,Z,ne,K,re,ge,ve=0){if(!I||!I.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=G.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){if(q>=0&&q<=I.width-ne&&Z>=0&&Z<=I.height-K){k.bindFramebuffer(U.FRAMEBUFFER,Se);let Le=I.textures[ve],ke=Le.format,De=Le.type;if(!B.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ge=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ge),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),I.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve),U.readPixels(q,Z,ne,K,Xe.convert(ke),Xe.convert(De),0);let ft=D!==null?G.get(D).__webglFramebuffer:null;k.bindFramebuffer(U.FRAMEBUFFER,ft);let Mt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await sf(U,Mt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ge),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(Ge),U.deleteSync(Mt),re}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,q=null,Z=0){let ne=Math.pow(2,-Z),K=Math.floor(I.image.width*ne),re=Math.floor(I.image.height*ne),ge=q!==null?q.x:0,ve=q!==null?q.y:0;j.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,ge,ve,K,re),k.unbindTexture()};let qm=U.createFramebuffer(),Xm=U.createFramebuffer();this.copyTextureToTexture=function(I,q,Z=null,ne=null,K=0,re=null){let ge,ve,Se,Le,ke,De,Ge,ft,Mt;re===null&&(K!==0?(er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=K,K=0):re=0);let Tt=I.isCompressedTexture?I.mipmaps[re]:I.image;if(Z!==null)ge=Z.max.x-Z.min.x,ve=Z.max.y-Z.min.y,Se=Z.isBox3?Z.max.z-Z.min.z:1,Le=Z.min.x,ke=Z.min.y,De=Z.isBox3?Z.min.z:0;else{let qn=Math.pow(2,-K);ge=Math.floor(Tt.width*qn),ve=Math.floor(Tt.height*qn),Se=I.isDataArrayTexture?Tt.depth:I.isData3DTexture?Math.floor(Tt.depth*qn):1,Le=0,ke=0,De=0}ne!==null?(Ge=ne.x,ft=ne.y,Mt=ne.z):(Ge=0,ft=0,Mt=0);let mt=Xe.convert(q.format),Ke=Xe.convert(q.type),yt;q.isData3DTexture?(j.setTexture3D(q,0),yt=U.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(j.setTexture2DArray(q,0),yt=U.TEXTURE_2D_ARRAY):(j.setTexture2D(q,0),yt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment);let Vt=U.getParameter(U.UNPACK_ROW_LENGTH),Ve=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Fe=U.getParameter(U.UNPACK_SKIP_PIXELS),Pn=U.getParameter(U.UNPACK_SKIP_ROWS),Lc=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Tt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Tt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Le),U.pixelStorei(U.UNPACK_SKIP_ROWS,ke),U.pixelStorei(U.UNPACK_SKIP_IMAGES,De);let mo=I.isDataArrayTexture||I.isData3DTexture,Li=q.isDataArrayTexture||q.isData3DTexture;if(I.isDepthTexture){let qn=G.get(I),Ls=G.get(q),pi=G.get(qn.__renderTarget),Dc=G.get(Ls.__renderTarget);k.bindFramebuffer(U.READ_FRAMEBUFFER,pi.__webglFramebuffer),k.bindFramebuffer(U.DRAW_FRAMEBUFFER,Dc.__webglFramebuffer);for(let Ds=0;Ds<Se;Ds++)mo&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(I).__webglTexture,K,De+Ds),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(q).__webglTexture,re,Mt+Ds)),U.blitFramebuffer(Le,ke,ge,ve,Ge,ft,ge,ve,U.DEPTH_BUFFER_BIT,U.NEAREST);k.bindFramebuffer(U.READ_FRAMEBUFFER,null),k.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(K!==0||I.isRenderTargetTexture||G.has(I)){let qn=G.get(I),Ls=G.get(q);k.bindFramebuffer(U.READ_FRAMEBUFFER,qm),k.bindFramebuffer(U.DRAW_FRAMEBUFFER,Xm);for(let pi=0;pi<Se;pi++)mo?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qn.__webglTexture,K,De+pi):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qn.__webglTexture,K),Li?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ls.__webglTexture,re,Mt+pi):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ls.__webglTexture,re),K!==0?U.blitFramebuffer(Le,ke,ge,ve,Ge,ft,ge,ve,U.COLOR_BUFFER_BIT,U.NEAREST):Li?U.copyTexSubImage3D(yt,re,Ge,ft,Mt+pi,Le,ke,ge,ve):U.copyTexSubImage2D(yt,re,Ge,ft,Le,ke,ge,ve);k.bindFramebuffer(U.READ_FRAMEBUFFER,null),k.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Li?I.isDataTexture||I.isData3DTexture?U.texSubImage3D(yt,re,Ge,ft,Mt,ge,ve,Se,mt,Ke,Tt.data):q.isCompressedArrayTexture?U.compressedTexSubImage3D(yt,re,Ge,ft,Mt,ge,ve,Se,mt,Tt.data):U.texSubImage3D(yt,re,Ge,ft,Mt,ge,ve,Se,mt,Ke,Tt):I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,re,Ge,ft,ge,ve,mt,Ke,Tt.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,re,Ge,ft,Tt.width,Tt.height,mt,Tt.data):U.texSubImage2D(U.TEXTURE_2D,re,Ge,ft,ge,ve,mt,Ke,Tt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Vt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ve),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Fe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Lc),re===0&&q.generateMipmaps&&U.generateMipmap(yt),k.unbindTexture()},this.initRenderTarget=function(I){G.get(I).__webglFramebuffer===void 0&&j.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?j.setTextureCube(I,0):I.isData3DTexture?j.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?j.setTexture2DArray(I,0):j.setTexture2D(I,0),k.unbindTexture()},this.resetState=function(){w=0,C=0,D=null,k.reset(),In.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var zf={type:"change"},ku={type:"start"},Gf={type:"end"},lc=new si,Hf=new En,h_=Math.cos(70*du.DEG2RAD),Lt=new S,hn=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Du=1e-6,cc=class extends Ia{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new ln,this._lastTargetPosition=new S,this._quat=new ln().setFromUnitVectors(e.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ur,this._sphericalDelta=new ur,this._scale=1,this._panOffset=new S,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new S,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=d_.bind(this),this._onPointerDown=u_.bind(this),this._onPointerUp=p_.bind(this),this._onContextMenu=x_.bind(this),this._onMouseWheel=g_.bind(this),this._onKeyDown=__.bind(this),this._onTouchStart=v_.bind(this),this._onTouchMove=y_.bind(this),this._onMouseDown=f_.bind(this),this._onMouseMove=m_.bind(this),this._interceptControlDown=b_.bind(this),this._interceptControlUp=M_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zf),this.update(),this.state=ct.NONE}update(e=null){let t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=hn:n>Math.PI&&(n-=hn),s<-Math.PI?s+=hn:s>Math.PI&&(s-=hn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Lt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new S(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new S(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(lc.origin.copy(this.object.position),lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lc.direction))<h_?this.object.lookAt(this.target):(Hf.setFromNormalAndCoplanarPoint(this.object.up,this.target),lc.intersectPlane(Hf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Du||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Du||this._lastTargetPosition.distanceToSquared(this.target)>Du?(this.dispatchEvent(zf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Lt.copy(s).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function u_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function d_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function p_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gf),this.state=ct.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function f_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ct.DOLLY;break;case ji.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}break;case ji.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(ku)}function m_(i){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function g_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(i.preventDefault(),this.dispatchEvent(ku),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Gf))}function __(i){this.enabled!==!1&&this._handleKeyDown(i)}function v_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ct.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ct.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(ku)}function y_(i){switch(this._trackPointer(i),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ct.NONE}}function x_(i){this.enabled!==!1&&i.preventDefault()}function b_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function M_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Oa=new S;function Tn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Oa.copy(e),Oa[n]=0,Oa.normalize();let l=.5*a/(a+o),h=1-Oa.angleTo(i)/c;return Math.sign(Oa[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Dt=class i extends We{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new S,l=new S,h=new S(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,g=u.length/6,_=new S,f=.5/a;for(let m=0,v=0;m<u.length;m+=3,v+=2)switch(c.fromArray(u,m),l.copy(c),l.x-=Math.sign(l.x)*f,l.y-=Math.sign(l.y)*f,l.z-=Math.sign(l.z)*f,l.normalize(),u[m+0]=h.x*Math.sign(c.x)+l.x*r,u[m+1]=h.y*Math.sign(c.y)+l.y*r,u[m+2]=h.z*Math.sign(c.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/g)){case 0:_.set(1,0,0),p[v+0]=Tn(_,l,"z","y",r,n),p[v+1]=1-Tn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),p[v+0]=1-Tn(_,l,"z","y",r,n),p[v+1]=1-Tn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),p[v+0]=1-Tn(_,l,"x","z",r,e),p[v+1]=Tn(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),p[v+0]=1-Tn(_,l,"x","z",r,e),p[v+1]=1-Tn(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),p[v+0]=1-Tn(_,l,"x","y",r,e),p[v+1]=1-Tn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),p[v+0]=Tn(_,l,"x","y",r,e),p[v+1]=1-Tn(_,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var V=window.STRUKTUR,zu=window.MODUL_TEXTE||{},Ze=1.6,An=1.9,$a=2.1,Lr="uzh-kompetenzhaus-v1",Hu={"001":{fa:["Fa1","Fa3","Fa4"],ki:["KI1","KI6"],fu:["Fu2"],haupt:["Fa1","Fa3"],kat:"A"},"002":{fa:["Fa1","Fa2","Fa4","Fa9"],ki:["KI4"],fu:["Fu2"],haupt:["Fa1","Fa2"],kat:"A"},"003":{fa:["Fa10","Fa6","Fa7"],ki:["KI1","KI4","KI5","KI6"],fu:["Fu1","Fu2","Fu3"],haupt:["Fa10","KI5"],kat:"B"},100:{fa:["Fa5","Fa3","Fa4","Fa10"],ki:["KI4","KI6"],fu:["Fu2"],haupt:["Fa5","Fa3"],kat:"A+B"},101:{fa:["Fa3","Fa2","Fa4"],ki:["KI1","KI6"],fu:["Fu1"],haupt:["Fa3"],kat:"B"},102:{fa:["Fa2","Fa6","Fa3","Fa7","Fa10"],ki:["KI1","KI2","KI3","KI5"],fu:["Fu1","Fu3"],haupt:["Fa2","Fa6"],kat:"B"},103:{fa:["Fa3","Fa2","Fa4"],ki:["KI4","KI6","KI1"],fu:["Fu2"],haupt:["Fa3","KI4"],kat:"A"},200:{fa:["Fa1","Fa4"],ki:["KI4"],fu:["Fu2"],haupt:["Fa1","Fa4"],kat:"A"},201:{fa:["Fa1","Fa2"],ki:["KI4"],fu:["Fu2"],haupt:["Fa1"],kat:"A"},s11:{fa:["Fa4","Fa6","Fa1"],ki:["KI6","KI1"],fu:["Fu1"],haupt:["Fa4","Fa6"],kat:"B"},300:{fa:["Fa1","Fa5","Fa4","Fa9"],ki:["KI6"],fu:["Fu2"],haupt:["Fa1","Fa5"],kat:"A"},301:{fa:["Fa1","Fa8","Fa5"],ki:["KI3"],fu:["Fu3"],haupt:["Fa1","Fa8"],kat:"A+B"},302:{fa:["Fa1","Fa8","Fa5"],ki:["KI3"],fu:["Fu3"],haupt:["Fa1","Fa8"],kat:"A+B"},s13:{fa:["Fa4","Fa6","Fa1"],ki:["KI1","KI6","KI5"],fu:["Fu1"],haupt:["Fa4","Fa6"],kat:"B"},400:{fa:["Fa1","Fa8","Fa5","Fa7","Fa9"],ki:["KI5","KI6","KI3"],fu:["Fu3"],haupt:["Fa1","Fa8","Fa7"],kat:"A+B"},401:{fa:["Fa1","Fa8"],ki:[],fu:[],haupt:["Fa1"],kat:"A"},402:{fa:["Fa8","Fa1","Fa10"],ki:["KI6"],fu:["Fu2"],haupt:["Fa8","Fa1"],kat:"B"},403:{fa:["Fa1","Fa8","Fa9"],ki:[],fu:[],haupt:["Fa1"],kat:"A"},s12:{fa:["Fa4","Fa6","Fa1"],ki:["KI6","KI2"],fu:["Fu1"],haupt:["Fa4","Fa6"],kat:"B"},BA:{fa:["Fa6","Fa4","Fa2","Fa7","Fa10"],ki:["KI5","KI6","KI3","KI1"],fu:["Fu1","Fu2","Fu3"],haupt:["Fa6","Fa4","Fa7"],kat:"B"},500:{fa:["Fa3","Fa2","Fa4"],ki:["KI4","KI1"],fu:["Fu2"],haupt:["Fa3","KI4"],kat:"A+B"},501:{fa:["Fa5","Fa7","Fa4","Fa6"],ki:["KI6","KI5"],fu:["Fu1"],haupt:["Fa5","KI6"],kat:"B/C"},502:{fa:["Fa1","Fa8"],ki:["KI5"],fu:["Fu3"],haupt:["Fa1","Fa8"],kat:"B"},wp:{fa:["Fa1","Fa4","Fa8"],ki:["KI6"],fu:["Fu1"],haupt:["Fa1"],kat:"A"},s04:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s05:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s06:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s07:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s08:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s09:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s01a:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},s01b:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},s01c:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},s01d:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},600:{fa:["Fa8","Fa10","Fa7","Fa6"],ki:["KI5","KI3","KI1"],fu:["Fu3","Fu2"],haupt:["Fa8","Fa10"],kat:"B"},s02a:{fa:["Fa1","Fa4"],ki:[],fu:[],haupt:["Fa1","Fa4"],kat:"A"},s02b:{fa:["Fa1","Fa4"],ki:[],fu:[],haupt:["Fa1","Fa4"],kat:"A"},s03:{fa:["Fa2","Fa3"],ki:["KI1","KI4","KI2"],fu:["Fu1"],haupt:["Fa2","Fa3"],kat:"B/C"},MA:{fa:["Fa2","Fa3","Fa6","Fa7","Fa10"],ki:["KI1","KI2","KI3","KI5","KI6"],fu:["Fu1","Fu2","Fu3"],haupt:["Fa2","Fa3","Fa6"],kat:"B"},901:{fa:["Fa2","Fa6"],ki:[],fu:["Fu2"],haupt:["Fa2"],kat:"A"},902:{fa:["Fa6","Fa4"],ki:["KI6"],fu:["Fu2"],haupt:["Fa6","Fa4"],kat:"A"},903:{fa:["Fa2","Fa6"],ki:[],fu:["Fu2"],haupt:["Fa2"],kat:"A"},904:{fa:["Fa6","Fa4"],ki:["KI6"],fu:["Fu2"],haupt:["Fa6","Fa4"],kat:"A"},909:{fa:["Fa1","Fa4","Fa6"],ki:["KI5","KI6"],fu:["Fu2"],haupt:["Fa1","Fa4"],kat:"A"}},Dr=()=>({v:3,lang:"de",mode:"frei",name:"",direktMSc:!1,onboarded:!1,placed:{frei:{},serious:{}},bestanden:{},quests:{},quiz:{},fb:{},msSeen:{frei:[],serious:[]},nachbarn:[],season:id(),tod:35,sound:!0,envAuto:!0,p0:[!1,!1,!1,!1],minor:[!1,!1,!1,!1,!1,!1],pal:{bsc:"uzh",msc:"uzh"},wzSeen:{frei:[],serious:[]},cardSize:"m",ansicht:"haus"});function id(){let i=new Date().getMonth()+1;return i>=3&&i<=5?"fruehling":i>=6&&i<=8?"sommer":i>=9&&i<=11?"herbst":"winter"}var so=!0;try{localStorage.setItem(Lr+"-t","1"),localStorage.removeItem(Lr+"-t")}catch{so=!1}var R=Dr();if(so)try{let i=localStorage.getItem(Lr);i&&(R=Object.assign(Dr(),JSON.parse(i)))}catch{}var Vf=null;function tt(){so&&(Gt.active||(clearTimeout(Vf),Vf=setTimeout(()=>{try{localStorage.setItem(Lr,JSON.stringify(R))}catch{}},300)))}var M=i=>window.T[R.lang]&&window.T[R.lang][i]||window.T.de[i]||i,X=i=>i&&(i[R.lang]||i.de)||"";function sd(){document.querySelectorAll("[data-aria]").forEach(i=>{let e=M(i.getAttribute("data-aria"));e&&i.setAttribute("aria-label",e)}),document.querySelectorAll("[data-i18n]").forEach(i=>{let e=i.getAttribute("data-i18n"),t=M(e);t&&(i.innerHTML=(t.startsWith("\u2B07")||t.startsWith("\u2912")||t.startsWith("\u{1F5D1}")||t.startsWith("\u2753")||t.startsWith("\u{1F512}")||t.startsWith("\u2139\uFE0F")||i.tagName==="LI",t)),t&&(i.innerHTML=t)}),document.getElementById("btnLang").textContent=R.lang==="de"?"EN":"DE",document.documentElement.lang=R.lang}var ut={};V.slots.forEach(i=>ut[i.slot]=i);var bt={};(V.optionsmodule||[]).forEach(i=>bt[i.code]=i);var Nt={};V.kompetenzen.forEach(i=>Nt[i.id]=i);function ro(i){let e=R.placed[R.mode][i.slot],t=typeof Ai<"u"&&i.optionen&&i.optionen.includes(Ai)&&xn===i.slot?Ai:null,n=e&&e.opt||t||i.code;return zu[n]||null}var Si={sp:{DeNC:{fa:["Fa2"],ki:["KI4"]},HEA:{fa:["Fa5","Fa8"],ki:[]},SEOP:{fa:["Fa8","Fa9"],ki:["KI3"]}},r:{klin:{fa:["Fa5","Fa8"],ki:[]},ekn:{fa:["Fa2"],ki:["KI4"]},swo:{fa:["Fa9"],ki:["KI3"]}},form:{daten:{fa:["Fa3"],ki:[]},repro:{fa:["Fa3","Fa4"],ki:[]},review:{fa:["Fa4"],ki:["KI6"]}}};function Bt(i){let e=ro(i),t=e&&e.komp?{komp:e.komp,haupt:e.haupt||[],kat:e.kat||(Hu[i.slot]||{}).kat||"B"}:(()=>{let c=Hu[i.slot]||{fa:[],ki:[],fu:[],haupt:[],kat:"B"};return{komp:{fa:c.fa,ki:c.ki,fu:c.fu},haupt:c.haupt,kat:c.kat}})(),n=R.placed[R.mode][i.slot],s=[];if(n){if(i.schwerpunktwahl&&n.sp&&Si.sp[n.sp]&&s.push(Si.sp[n.sp]),n.thema){let c=(Ri[i.slot]||[]).find(l=>l.id===n.thema);c&&Si.r[c.r]&&s.push(Si.r[c.r])}if(i.slot==="BA"&&n.frage){let c=((V.baFragen||{})[n.thema]||[]).find(l=>l.id===n.frage);c&&Si.form[c.form]&&s.push(Si.form[c.form])}}if(!s.length)return t;let r=[...t.komp.fa],a=[...t.komp.ki],o=[...t.haupt||[]];for(let c of s)(c.fa||[]).forEach(l=>{r.includes(l)||r.push(l),o.includes(l)||o.push(l)}),(c.ki||[]).forEach(l=>{a.includes(l)||a.push(l),o.includes(l)||o.push(l)});return{komp:{fa:r,ki:a,fu:t.komp.fu},haupt:o,kat:t.kat}}function om(i){let e=zu[i.code]||null,t=e&&e.komp?{fa:e.komp.fa||[],ki:e.komp.ki||[],fu:e.komp.fu||[],haupt:e.haupt||[]}:(()=>{let o=Hu[i.slot]||{fa:[],ki:[],fu:[],haupt:[]};return{fa:o.fa,ki:o.ki,fu:o.fu,haupt:o.haupt}})(),n=[...t.fa],s=[...t.ki],r=[...t.haupt||[]],a=(o,c)=>{(o.fa||[]).forEach(l=>{n.includes(l)||n.push(l),c&&!r.includes(l)&&r.push(l)}),(o.ki||[]).forEach(l=>{s.includes(l)||s.push(l),c&&!r.includes(l)&&r.push(l)})};return i.schwerpunktwahl&&Object.values(Si.sp).forEach(o=>a(o,!0)),Ri[i.slot]&&Object.values(Si.r).forEach(o=>a(o,!0)),i.slot==="BA"&&Object.values(Si.form).forEach(o=>a(o,!0)),i.optionen&&i.optionen.forEach(o=>{let c=zu[o];c&&c.komp&&a({fa:c.komp.fa,ki:c.komp.ki},!1)}),{komp:{fa:n,ki:s,fu:t.fu},haupt:r}}function Et(i){let e=R.placed[R.mode][i.slot];return e&&e.opt&&bt[e.opt]?X(bt[e.opt].titel):X(i.titel)}var Gt={active:!1,data:null},Ri=V.themen||{},Gu={};(V.paletten||[]).forEach(i=>Gu[i.id]=i);function E_(i){return Gu[R.pal&&R.pal[i]||"uzh"]||Gu.uzh||{rahmen:"#f2f0e9",dach:null,holz:"#8a6642",akzent:"#0028a5"}}function lm(i,e){let t=e||R.placed[R.mode][i];return!t||!t.thema?null:(Ri[i]||[]).find(n=>n.id===t.thema)||null}function is(){let i={klin:0,ekn:0,swo:0};for(let s of["s11","s12","s13","BA"]){let r=lm(s);r&&i[r.r]!==void 0&&i[r.r]++}let e=null,t=0,n=!1;for(let s of Object.keys(i))i[s]>t?(e=s,t=i[s],n=!1):i[s]===t&&t>0&&(n=!0);return{counts:i,r:t>=2&&!n?e:null}}function ss(){let i={DeNC:0,HEA:0,SEOP:0};for(let t of["s04","s05","s06","s07","s08","s09"]){let n=R.placed[R.mode][t];n&&n.sp&&i[n.sp]!==void 0&&i[n.sp]++}let e=null;for(let t of Object.keys(i))i[t]>=4&&(e=t);return{counts:i,dom:e,total:i.DeNC+i.HEA+i.SEOP}}function Rs(){let i=R.placed[R.mode].wp;return i&&i.opt||null}function Ji(){let i=R.placed[R.mode].BA;return!i||!i.thema||!i.frage?null:((V.baFragen||{})[i.thema]||[]).find(e=>e.id===i.frage)||null}function Cr(){let i=R.placed[R.mode].BA;return!i||!i.artefakt?null:(V.baArtefakte||[]).find(e=>e.id===i.artefakt)||null}function Ne(i,e){return!!R.placed[e||R.mode][i]}function cm(i){return Ne("BA",i||R.mode)||R.direktMSc}function Cs(i){if(i.optionen){let e=R.placed[R.mode][i.slot];return e&&e.opt||typeof Ai<"u"&&Ai||i.optionen[0]}return i.code}function rd(i){return(window.QUIZ||{})[Cs(i)]||null}function hm(i){return!!R.quiz[Cs(i)]}function ui(i,e){if(e=e||R.mode,Gt.active)return{ok:!1,reason:""};if(Ne(i.slot,e))return{ok:!1,reason:""};if(i.haus==="msc"&&!cm(e))return{ok:!1,reason:M("grund_msc")};let t=(i.voraus||[]).filter(n=>!Ne(n,e));if(t.length){let n=t.slice(0,3).map(s=>X(ut[s].titel).split(",")[0]).join(" \xB7 ");return{ok:!1,reason:M("grund_voraus")+n+(t.length>3?" \u2026":"")}}return e==="serious"&&!R.bestanden[i.slot]?{ok:!1,reason:M("grund_bestanden")}:e==="serious"&&rd(i)&&!hm(i)?{ok:!1,reason:M("grund_quiz")}:{ok:!0,reason:""}}var Rn=document.getElementById("c3d"),yn,xc=!0;try{yn=new ac({canvas:Rn,antialias:!0})}catch(i){xc=!1,yn={domElement:Rn,shadowMap:{},setPixelRatio(){},setSize(){},render(){},dispose(){}},console.warn("WebGL nicht verf\xFCgbar \u2014 Kompetenzhaus startet in der Listenansicht",i)}yn.setPixelRatio(Math.min(window.devicePixelRatio,2));yn.shadowMap.enabled=!0;yn.shadowMap.type=Fl;yn.toneMapping=Vl;yn.toneMappingExposure=1.05;var Je=new oa,Ft=new Wt(46,1,.1,400);Ft.position.set(-23,17,30);var qt=new cc(Ft,Rn);qt.enableDamping=!0;qt.dampingFactor=.06;qt.maxPolarAngle=Math.PI*.49;qt.minDistance=6;qt.maxDistance=105;qt.target.set(-7,3,0);var um=new Sa(12573183,9075285,.75);Je.add(um);var an=new Aa(16771524,2.2);an.castShadow=!0;an.shadow.mapSize.set(2048,2048);an.shadow.camera.left=-48;an.shadow.camera.right=48;an.shadow.camera.top=48;an.shadow.camera.bottom=-48;an.shadow.camera.far=120;an.shadow.bias=-4e-4;an.shadow.radius=6;Je.add(an);Je.add(an.target);Je.fog=new aa(12574965,60,160);var rs=new ze;Je.add(rs);var bc=new ie({color:7319378,roughness:1}),ad=new $(new je(90,90,.6,48),bc);ad.position.y=-.3;ad.receiveShadow=!0;rs.add(ad);var od=new ie({color:13287336,roughness:.95}),ld=new ie({color:14209730,roughness:1}),pc=new ie({color:10196876,roughness:.95});function dm(i){let e=V.haeuser[i],t=new ze,n=(e.breite+3.6)*Ze,s=(e.tiefe+3.6)*Ze,r=new $(new We(n,.24,s),od);return r.position.set(e.origin[0],.12,e.origin[2]),r.receiveShadow=!0,t.add(r),rs.add(t),t}dm("bsc");var S_=dm("msc"),cd=new $(new We(9,.18,2.4),ld);cd.position.set(0,.09,0);cd.receiveShadow=!0;rs.add(cd);var fc=new ie({color:5149760,roughness:1,flatShading:!0}),w_=new ie({color:8018490,roughness:1}),T_=[[-26,-12],[-30,4],[-20,14],[26,-13],[31,3],[22,15],[-2,-17],[4,18],[-14,-18],[16,-18]];T_.forEach(([i,e],t)=>{let n=new ze,s=new $(new je(.22,.32,1.6,6),w_);s.position.y=.8,s.castShadow=!0;let r=1+t%3*.35;if(t%3===2){let a=new $(new On(1.1*r,2.6*r,7),fc);a.position.y=1.6+1.1*r,a.castShadow=!0,n.add(a)}else{let a=new $(new Ct(1.35*r,0),fc);if(a.position.y=2.2+.5*r,a.castShadow=!0,n.add(a),t%3===1){let o=new $(new Ct(.8*r,0),fc);o.position.set(.7,1.8+.4*r,.3),o.castShadow=!0,n.add(o)}}n.add(s),n.position.set(i,0,e),n.rotation.y=t*1.7,rs.add(n)});var pm=new ie({color:6199880,roughness:1,flatShading:!0});[[-62,-42,26],[55,-48,30],[-72,22,22],[66,28,24],[-6,-75,36],[-42,62,26],[48,60,22],[8,70,28]].forEach(([i,e,t])=>{let n=new $(new gn(t,10,7),pm);n.position.set(i,-t*.62,e),n.scale.y=.55,rs.add(n)});var A_=new ie({color:10134197,roughness:1,flatShading:!0});[[-7,9,.5],[19,-9,.7],[-19,-10,.45],[3,-13,.6]].forEach(([i,e,t])=>{let n=new $(new Ct(t,0),A_);n.position.set(i,t*.55,e),n.rotation.set(t,i,e),n.castShadow=!0,rs.add(n)});var R_=new Ct(.09,0),C_=new Jt,mc=new Gi(R_,C_,90);{let i=[16777215,16234452,15979342,13213951],e=new Pe,t=0;for(;t<90;){let n=(Math.random()-.5)*76,s=(Math.random()-.5)*52;Math.abs(n)<22&&Math.abs(s)<9||(e.makeScale(1,1+Math.random(),1),e.setPosition(n,.12,s),mc.setMatrixAt(t,e),mc.setColorAt(t,new de(i[t%i.length])),t++)}rs.add(mc)}var Vu=new ie({color:16777215,roughness:1,flatShading:!0,transparent:!0,opacity:.92}),fm=[];for(let i=0;i<6;i++){let e=new ze,t=3+i%3;for(let n=0;n<t;n++){let s=1.6+Math.random()*2.2,r=new $(new Ct(s,0),Vu);r.position.set(n*2.4-t,(Math.random()-.5)*.8,(Math.random()-.5)*1.6),r.scale.y=.55,e.add(r)}e.position.set((Math.random()-.5)*120,22+Math.random()*8,(Math.random()-.5)*80-10),e.userData.v=.25+Math.random()*.4,fm.push(e),Je.add(e)}var Ki=new ze;{let i=new $(new je(.05,.06,.9,6),new ie({color:9070146,roughness:.9}));i.position.y=.45;let e=new $(new Dt(.55,.35,.32,2,.06),new ie({color:10405,roughness:.55}));e.position.y=1.02;let t=new $(new Qe(.34,.045),new ie({color:16053488}));t.position.set(0,1.06,.17);let n=new $(new Qe(.16,.11),new ie({color:14248523,side:gt}));n.position.set(.32,1.12,0),Ki.add(i,e,t,n),Ki.position.set(-3.4,.24,4.7),Ki.rotation.y=.4,Ki.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.userData.action="p0")}),Je.add(Ki)}var Zi=new ze;{let i=new $(new Dt(4.4,.22,1.5,2,.06),new ie({color:7033144,roughness:1}));i.position.y=.11,i.receiveShadow=!0,Zi.add(i),Zi.position.set(-4.2,.24,8.2),Zi.traverse(e=>{e.isMesh&&(e.userData.action="minor")}),Je.add(Zi)}var Wu=new ze;Zi.add(Wu);function mm(){Wu.clear();let i=[14964526,15979342,13213951,16777215,16234452,8373098];(R.minor||[]).forEach((e,t)=>{if(e)for(let n=0;n<3;n++){let s=new $(new je(.02,.025,.28,5),new ie({color:5149760}));s.position.set(-1.85+t*.74,.34,-.4+n*.4);let r=new $(new Ct(.09,0),new Jt({color:i[t]}));r.position.set(-1.85+t*.74,.52,-.4+n*.4),s.userData.action="minor",r.userData.action="minor",Wu.add(s,r)}})}var Yi=new ze;{let i=new ie({color:10122576,roughness:.95}),e=new ie({color:7032627,roughness:.95}),t=new $(new Dt(2.6,1.9,1.9,2,.06),i);t.position.y=.95;let n=new $(ja(3,2.3,.75),new ie({color:3752282,roughness:.85,flatShading:!0,side:gt}));n.position.y=1.9;let s=new $(new Qe(.7,1.3),e);s.position.set(-.55,.66,.96);let r=new $(new Qe(.85,.55),new ie({color:2766160,roughness:.3,metalness:.3}));r.position.set(.6,1.2,.96);let a=Qa("\u{1F6E0}\uFE0F","#0028a5");a.scale.set(1.2,.48,1),a.position.set(0,3.05,0),Yi.add(t,n,s,r,a),Yi.position.set(-19.5,.02,10.4),Yi.rotation.y=.55,Yi.traverse(o=>{o.isMesh&&(o.castShadow=!0),o.userData.action="bauhuette"}),Je.add(Yi)}var Mr=new ze;{let i=new ie({color:8227434,roughness:.95}),e=new ie({color:6187854,roughness:.95}),t=new $(new Dt(1.9,1.5,1.3,2,.05),i);t.position.y=.75;let n=new $(new We(2.15,.09,1.6),new ie({color:3752282,roughness:.85}));n.position.y=1.58,n.rotation.x=-.12;let s=new $(new Qe(.6,1.1),e);s.position.set(-.35,.57,.66);let r=Qa("\u{1F9F0}","#0e8f7e");r.scale.set(1.05,.42,1),r.position.set(0,2.35,0),Mr.add(t,n,s,r),Mr.position.set(-24.2,.02,5.6),Mr.rotation.y=.9,Mr.traverse(a=>{a.isMesh&&(a.castShadow=!0),a.userData.action="geraete"}),Je.add(Mr)}function gm(i,e,t,n,s,r){let a=new Float32Array(i*3);for(let h=0;h<i;h++)a[h*3]=(Math.random()-.5)*n,a[h*3+1]=s+Math.random()*(r-s),a[h*3+2]=(Math.random()-.5)*n;let o=new lt;o.setAttribute("position",new $t(a,3));let c=new ar({size:e,color:t,transparent:!0,opacity:0,sizeAttenuation:!0,depthWrite:!1}),l=new ha(o,c);return Je.add(l),l}var I_=gm(320,.5,16777215,220,28,90),gc=gm(26,.35,16765286,46,.6,3.2),Qi=[],ao=i=>1-Math.pow(1-i,3),P_=i=>i*i;var L_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function Vn(i,e,t=ao,n=null){Qi.push({t:0,dur:i,fn:e,ease:t,onDone:n})}var _c=0,$u=0,_m=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,vc=!!(window.claude&&typeof window.claude.complete=="function"),Wf="https://claude.ai/public/artifacts/f5f07577-cae4-4a98-9b67-fced673c88b3";async function ju(i){return String(await window.claude.complete(i)).trim()}var qu=null,za=null;function $n(i,e,t=1.6,n=null){if(za){let a=Qi.indexOf(za);a>=0&&Qi.splice(a,1)}let s=Ft.position.clone(),r=qt.target.clone();qt.enabled=!1,za={t:0,dur:t,ease:L_,fn:a=>{Ft.position.lerpVectors(s,i,a),qt.target.lerpVectors(r,e,a)},onDone:()=>{za=null,qt.enabled=!0,n&&n()}},Qi.push(za)}function hd(i,e){let t=e||R.placed[R.mode][i.slot];if(i.schwerpunktwahl&&t&&t.sp&&V.schwerpunkte[t.sp])return new de(V.schwerpunkte[t.sp].farbe);let n=t&&t.thema?(Ri[i.slot]||[]).find(s=>s.id===t.thema):null;return n&&V.richtungen&&V.richtungen[n.r]?new de(V.gruppen[i.gruppe].farbe).lerp(new de(V.richtungen[n.r].farbe),.72):new de(V.gruppen[i.gruppe].farbe)}function Fu(i,e){let t=i.clone(),n=.85,s=.02;return e==="hell"&&t.lerp(new de(16777215),.45),e==="holz"&&(t.lerp(new de(9070146),.55),n=.95),e==="glas"&&(t.lerp(new de(10336473),.5),n=.28,s=.35),e==="backstein"&&(t.lerp(new de(10242613),.6),n=.92),e==="beton"&&(t.lerp(new de(12172740),.55),n=.6),new ie({color:t,roughness:n,metalness:s})}var Cn=[];function Xu(){let i=new ie({color:2766160,roughness:.25,metalness:.4,emissive:16763243,emissiveIntensity:0});return Cn.push(i),i}var $f=i=>i.clone().lerp(new de(1318972),.45),ns=new ze;Je.add(ns);var kt={},Mc=i=>(i===0?0:.55+(i-1))*An+.24,Ku=new Set(["901","902","903","904"]);function vm(i,e){return Math.abs(i.x-e.x)*2<i.w+e.w-.01&&Math.abs(i.z-e.z)*2<i.d+e.d-.01}function D_(i,e){if(i.pos.y===0)return!0;for(let t of V.slots){if(t.haus!==i.haus||t.slot===i.slot||!(t.pos.y===i.pos.y-1||t.form==="wing"&&i.pos.y<=2))continue;if((e?!!e[t.slot]:Ne(t.slot))&&vm(i.pos,t.pos))return!0}return!1}function k_(i,e,t){let n=e.pos.w*Ze,s=e.pos.d*Ze,r=e.pos.x>=0?-1:1;for(let a of[-.32,.32]){let o=new $(new je(.02,.14,.55,4),t);o.rotation.y=Math.PI/4,o.position.set(r*(n/2-.18),-.27,a*s),i.add(o)}}function F_(i,e,t,n){let s=e.pos,r=s.w*Ze,a=s.d*Ze,o=s.h*An,c=((V.schwerpunkte||{})[t]||(V.richtungen||{})[t]||{}).farbe||"#ffffff",l=new ie({color:new de(c),roughness:.55}),h=Math.abs(s.z)<.01||s.z>=0?1:-1,u=new $(new We(r+.06,.1,.06),l);u.position.set(0,o-.16,h*(a/2+.02)),h<0&&(u.rotation.y=Math.PI),i.add(u);let d={DeNC:"rund",ekn:"rund",HEA:"gruen",klin:"gruen",SEOP:"glas",swo:"glas"}[t];if(d==="rund"){let p=new $(new vs(.16,.23,20),l);p.position.set(0,o*.84,h*(a/2+.02));let g=new $(new ai(.17,20),Xu());g.position.set(0,o*.84,h*(a/2+.014));for(let _ of[p,g])h<0&&(_.rotation.y=Math.PI),i.add(_)}else if(d==="gruen"){let p=Math.max(1,Math.round(s.w));for(let g=0;g<p;g++){let _=(g-(p-1)/2)*(r/p),f=new $(new Dt(.66,.14,.16,2,.04),l);f.position.set(_,o*.55-.62,h*(a/2+.1)),i.add(f);for(let m=0;m<3;m++){let v=new $(new Ct(.055,0),new Jt({color:[14964526,15979342,16777215][m]}));v.position.set(_+(m-1)*.18,o*.55-.5,h*(a/2+.1)),i.add(v)}}}else if(d==="glas"){let p=new $(new Qe(r*.82,.3),Xu());p.position.set(0,o*.87,h*(a/2+.012));let g=new $(new We(r*.85,.05,.05),new ie({color:new de(c),metalness:.55,roughness:.35}));g.position.set(0,o*.72,h*(a/2+.03));for(let _ of[p,g])h<0&&(_.rotation.y=Math.PI),i.add(_)}}function N_(i,e,t){let n=e.pos.w*Ze,s=e.pos.d*Ze,r=Mc(e.pos.y)-.24;if(r<.4)return;let a=new ze;a.name="stuetzen";for(let[o,c]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let l=new $(new je(.09,.11,r,8),t);l.position.set(o*(n/2-.18),-r/2,c*(s/2-.18)),a.add(l)}if(r>2.2)for(let o of[-1,1]){let c=new $(new We(n-.3,.09,.09),t);c.position.set(0,-r*.55,o*(s/2-.18)),a.add(c)}i.add(a)}function ja(i,e,t){let n=i/2,s=e/2,r=new lt,a=[-n,0,-s,n,0,-s,n,0,s,-n,0,s,-n,t,0,n,t,0],o=[0,1,5,0,5,4,3,4,5,3,5,2,0,4,3,1,2,5,0,3,2,0,2,1];return r.setAttribute("position",new Ae(a,3)),r.setIndex(o),r.computeVertexNormals(),r}function oo(i,e={}){let t=e.state||R.placed[R.mode][i.slot]||{},n=t.stil||"klassisch",s=hd(i,e.state),r=E_(i.haus),a=new ze,o=i.pos,c=o.w*Ze,l=o.d*Ze,h=o.h*An;i.form==="wing"&&(h=1.7*An);let u=Fu(s,n),d,p=(m,v,y,x=.09)=>new Dt(m,v,y,2,x),g=()=>{let m=r.dach?$f(s).lerp(new de(r.dach),.6):$f(s);return new ie({color:m,roughness:.8,flatShading:!0,side:gt})};if(i.form==="slab"||i.form==="step"){d=new $(p(c,h,l,.07),u),d.position.y=h/2,a.add(d);let m=new $(new We(c,$a,l),pc.clone());m.position.y=-$a/2+.02,m.userData.noShadow=!0,m.userData.nopick=!0,a.add(m);let v=new $(new We(c+.16,.16,l+.16),pc.clone());if(v.position.y=.08,v.receiveShadow=!0,a.add(v),i.form==="step"){let y=new ie({color:new de(r.holz),roughness:.9}),x=new $(new Qe(.92,1.5),new ie({color:5913894,roughness:.8}));x.position.set(0,h+.75,-l/2+.02),a.add(x);let E=new $(new gn(.05,8,6),new ie({color:14266942,metalness:.7,roughness:.35}));E.position.set(.3,h+.68,-l/2+.06),a.add(E);for(let C of[-1,1]){let D=new $(new je(.055,.07,1.9,8),y);D.position.set(C*(c/2-.16),h+.95,l/2-.16),a.add(D)}let w=new $(ja(c*1.14,l*1.25,.42),g());w.position.y=h+1.9,a.add(w);for(let C=0;C<2;C++){let D=new $(new We(c*.55,h*(2-C)/3,.34),pc.clone());D.position.set(0,h*(2-C)/3/2,l/2+.17+C*.34),D.receiveShadow=!0,a.add(D)}}}else if(i.form==="roof"){d=new $(ja(c,l,h*.72),g()),a.add(d);let m=new $(p(.55,1.25,.55,.05),Fu(s,n));if(m.position.set(c*.28,h*.62,0),a.add(m),t.artefakt==="agent"){let v=new ie({color:10134197,metalness:.6,roughness:.35}),y=new $(new je(.035,.05,1.35,6),v);y.position.set(-c*.26,h*.72+.62,0),a.add(y);let x=new $(new je(.02,.02,.5,5),v);x.rotation.z=Math.PI/2,x.position.set(-c*.26,h*.72+1.05,0),a.add(x);let E=new $(new gn(.2,10,8,0,Math.PI*2,0,Math.PI*.4),new ie({color:15262938,metalness:.3,roughness:.4,side:gt}));E.rotation.x=Math.PI*.62,E.position.set(-c*.26,h*.72+.78,.16),a.add(E)}else if(t.artefakt==="app"){let v=Math.atan2(h*.72,l/2),y=new $(new We(1.05,.05,.7),new ie({color:1319498,roughness:.2,metalness:.45,emissive:2780372,emissiveIntensity:.18}));y.rotation.x=-v,y.position.set(-c*.24,h*.4,l*.26),a.add(y);let x=new $(new We(1.15,.03,.8),new ie({color:15921385,roughness:.6}));x.rotation.x=-v,x.position.set(-c*.24,h*.38,l*.26),a.add(x),Cn.push(y.material)}}else if(i.form==="spire"){let m=new $(new On(c*Ze*.42,h,4),g());m.rotation.y=Math.PI/4,m.position.y=h/2,a.add(m),d=m;let v=new $(new je(.045,.045,1.5,6),new ie({color:2184,roughness:.4,metalness:.7}));v.position.y=h+.7,a.add(v);let y=new $(new Qe(1.1,.6),new ie({color:new de(r.akzent),side:gt,roughness:.7}));y.position.set(.58,h+1.15,0),y.name="flag",a.add(y)}else if(i.form==="lantern"){let m=new $(new je(.06,.08,h,6),new ie({color:3752282,roughness:.6,metalness:.4}));m.position.y=h/2,a.add(m),d=m;let v=new $(new $i(.28,0),new ie({color:16767370,emissive:16757575,emissiveIntensity:.15}));v.position.y=h+.15,v.name="lamp",a.add(v),Cn.push(v.material)}else{d=new $(p(c,h,l,.1),u),d.position.y=h/2,a.add(d);let m=o.z>=0?1:-1,v=i.haus&&Math.abs(o.z)<.01?1:m,y=Xu(),x=new ie({color:new de(r.rahmen),roughness:.7}),E=Math.max(1,Math.round(o.w)),w=h*.55;for(let C=0;C<E;C++){let D=(C-(E-1)/2)*(c/E),P=new $(new Qe(.8,1),x);P.position.set(D,w,v*(l/2+.008));let N=new $(new Qe(.64,.84),y);N.position.set(D,w,v*(l/2+.016));let H=new $(new Qe(.64,.035),x);H.position.set(D,w,v*(l/2+.022));let O=new $(new Qe(.035,.84),x);O.position.set(D,w,v*(l/2+.022));let J=new $(new We(.92,.06,.1),x);J.position.set(D,w-.56,v*(l/2+.04));for(let W of[P,N,H,O,J])v<0&&(W.rotation.y=Math.PI),a.add(W)}if(i.form==="bay"||i.form==="wing"){let C=new $(ja(c*1.06,l*1.06,.5*An*.5),g());C.position.y=h,a.add(C)}if(i.form==="tower")for(let[C,D]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let P=new $(p(.22,h,.22,.04),Fu(s.clone().lerp(new de(16777215),.25),n));P.position.set(C*(c/2-.08),h/2,D*(l/2-.08)),a.add(P)}}let _=i.schwerpunktwahl&&t.sp?t.sp:t.thema?((Ri[i.slot]||[]).find(m=>m.id===t.thema)||{}).r:null;if(_&&["box","bay"].includes(i.form)&&F_(a,i,_,r),["box","bay","wing"].includes(i.form)&&(i.kategorie==="Wahl"||i.kategorie==="Wahlpflicht")){let m=i.kategorie==="Wahlpflicht",v=Math.abs(o.z)<.01||o.z>=0?1:-1,y=new $(new We(.075,h*.86,.075),new ie({color:m?14263361:16777215,roughness:.45,metalness:m?.5:.05}));y.position.set(-(c/2-.02),h/2,v*(l/2-.02)),a.add(y)}if(["box","bay","tower"].includes(i.form)&&o.y>0){let m=new ie({color:new de(r.holz).lerp(new de(3752282),.35),roughness:.7,metalness:.15}),v=e.placedMap?!!e.placedMap.MA:Ne("MA"),y=D_(i,e.placedMap||null)||Ku.has(i.slot)&&v;Ku.has(i.slot)&&k_(a,i,m),y||N_(a,i,m)}a.traverse(m=>{m.isMesh&&!m.userData.noShadow&&(m.castShadow=!0,m.receiveShadow=!0)});let f=V.haeuser[i.haus];return a.position.set(f.origin[0]+o.x*Ze,Mc(o.y),f.origin[2]+o.z*Ze),a.userData.slot=i.slot,a}function ym(i,e){if(i.getObjectByName("sparkle"))return;let t=new $(new $i(.22,0),new ie({color:16765502,emissive:16757504,emissiveIntensity:.9}));t.name="sparkle";let n=e.pos.h*An;t.position.y=(e.form==="roof"||e.form==="spire",n+.6),i.add(t)}function U_(i){let e=i.getObjectByName("sparkle");e&&i.remove(e)}function B_(i,e){if(i.getObjectByName("pennant"))return;let t=new ze;t.name="pennant";let n=e.pos.h*An,s=new $(new je(.03,.03,.9,6),new ie({color:9070146,roughness:.8}));s.position.y=n+.45;let r=new $(new lt().setFromPoints?(()=>{let a=new lt;return a.setAttribute("position",new Ae([0,0,0,.55,-.12,0,0,-.24,0],3)),a.setIndex([0,1,2]),a.computeVertexNormals(),a})():new Qe(.5,.25),new ie({color:14263361,side:gt,roughness:.7}));r.position.set(.03,n+.85,0),r.name="pflag",t.add(s,r),t.position.set(e.pos.w*Ze*.38,0,e.pos.d*Ze*.38),i.add(t)}function O_(i,e){if(i.getObjectByName("flowerbox")||!["box","bay","wing","tower"].includes(e.form))return;let t=new ze;t.name="flowerbox";let n=e.pos.d*Ze,s=e.pos.h*An,r=e.pos.z>=0?1:-1,a=new $(new Dt(.7,.16,.18,2,.04),new ie({color:9070146,roughness:.9}));a.position.set(0,s*.55-.45,r*(n/2+.1)),t.add(a),[14964526,15979342,13213951].forEach((o,c)=>{let l=new $(new Ct(.07,0),new Jt({color:o}));l.position.set((c-1)*.2,s*.55-.33,r*(n/2+.1)),t.add(l)}),i.add(t)}function z_(i,e){if(i.getObjectByName("upgrade"))return;let t=new ze;t.name="upgrade";let n=e.pos.w*Ze,s=e.pos.d*Ze,r=e.pos.h*An,a=new ie({color:4020797,roughness:.85}),o=new ie({color:14263361,metalness:.75,roughness:.3}),c=new ie({color:5149760,roughness:1,flatShading:!0});if(["box","tower"].includes(e.form)){let l=e.pos.z>=0?1:-1,h=e.haus&&Math.abs(e.pos.z)<.01?1:l,u=Math.max(1,Math.round(e.pos.w));for(let d=0;d<u;d++){let p=(d-(u-1)/2)*(n/u);for(let g of[-1,1]){let _=new $(new We(.16,.98,.03),a);_.position.set(p+g*.52,r*.55,h*(s/2+.02)),h<0&&(_.rotation.y=Math.PI),t.add(_)}}}else if(e.form==="bay"||e.form==="wing")for(let l=0;l<5;l++){let h=new $(new Ct(.16+l%3*.05,0),c);h.position.set(n*.42,r*(.15+l*.18),s/2+.06),t.add(h)}else if(e.form==="slab"||e.form==="step")for(let l of[-1,1]){let h=new $(new Ct(.3,0),c);h.position.set(l*(n/2-.4),.3,s/2+.34),t.add(h)}else if(e.form==="roof"){let l=new $(new je(.025,.025,.7,6),o);l.position.set(-n*.3,r*.72+.35,0);let h=new $(new On(.14,.34,4),o);h.rotation.z=-Math.PI/2,h.position.set(-n*.3+.16,r*.72+.62,0),h.name="flag",t.add(l,h)}else{let l=new $(new gn(.14,10,8),o);l.position.y=e.pos.h*An+(e.form==="spire"?1.55:.5),t.add(l)}t.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),i.add(t)}function ud(i,e){let t=e.optionen&&(R.placed[R.mode][e.slot]||{}).opt||e.code,n=R.quests[e.slot]&&R.quests[e.slot].done;R.quiz[t]&&B_(i,e),n&&(ym(i,e),O_(i,e)),R.quiz[t]&&n&&z_(i,e)}var Ei=new ze;Je.add(Ei);function hc(i){let e=R.quests[i.slot]||{};return!!(e.done&&(e.note||"").trim().length>=15)}function xm(){return Object.values(R.quiz).filter(Boolean).length+Object.values(R.quests).filter(i=>i&&i.done&&(i.note||"").trim().length>=15).length}function Yu(){Ei.clear();let i=xm(),e=new ie({color:9070146,roughness:.9});if(i>=5){let t=new ze,n=new $(new Dt(1.5,.1,.45,2,.03),e);n.position.y=.45;let s=new $(new Dt(1.5,.5,.08,2,.03),e);s.position.set(0,.72,-.2);let r=new $(new We(.08,.45,.4),e);r.position.set(-.6,.22,0);let a=r.clone();a.position.x=.6,t.add(n,s,r,a),t.position.set(0,.24,4.2),t.rotation.y=Math.PI,t.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),Ei.add(t)}if(i>=10){let t=new ze,n=new $(new We(1.6,.06,1.1),new ie({color:1780816,roughness:.25,metalness:.5}));n.rotation.x=-.5,n.position.y=.7;let s=new $(new je(.06,.08,.7,6),new ie({color:10134197}));s.position.y=.35,t.add(n,s),t.position.set(-4,.24,6),t.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),Ei.add(t)}if(i>=15){let t=new ze,n=new $(new je(.05,.07,5,8),new ie({color:14212326,roughness:.4,metalness:.6}));n.position.y=2.5;let s=new $(new Qe(1.4,.8),new ie({color:10405,side:gt}));s.position.set(.72,4.4,0),s.name="flag",t.add(n,s),t.position.set(4.5,.24,6),t.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),Ei.add(t)}if(i>=20){let t=new ze,n=new $(new je(.9,1,.4,14),new ie({color:12173519,roughness:.8,flatShading:!0}));n.position.y=.2;let s=new $(new je(.78,.78,.06,14),new ie({color:7189465,roughness:.15,metalness:.2}));s.position.y=.4;let r=new $(new je(.1,.14,.8,8),n.material);r.position.y=.7,t.add(n,s,r),t.position.set(0,.24,-5.2),t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),Ei.add(t)}if(i>=28){let t=new ze,n=new ie({color:12442088,roughness:.15,metalness:.25,transparent:!0,opacity:.55}),s=new $(new We(2.2,1.2,1.5),n);s.position.y=.6;let r=new $(ja(2.3,1.6,.55),n);r.position.y=1.2;let a=new $(new We(1.7,.2,1),new ie({color:7033144,roughness:1}));a.position.y=.12,t.add(s,r,a),t.position.set(1.2,.24,8.4),Ei.add(t)}if(i>=40){let t=new ze,n=new ie({color:9070146,roughness:.9});for(let[r,a]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let o=new $(new We(.12,1.8,.12),n);o.position.set(r*1.1,.9,a*.8),t.add(o)}for(let r=0;r<5;r++){let a=new $(new We(2.6,.06,.12),n);a.position.set(0,1.85,-.8+r*.4),t.add(a)}let s=new ie({color:5149760,roughness:1,flatShading:!0});[[-1.1,1.2,.8],[1.1,1.5,-.8],[0,1.9,0]].forEach(([r,a,o])=>{let c=new $(new Ct(.28,0),s);c.position.set(r,a,o),t.add(c)}),t.position.set(6.5,.24,5.6),t.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),Ei.add(t)}}var Zu=new ze;Je.add(Zu);function jf(i,e){let t=e?1:.72,n=new ze,s=new ie({color:15262938,roughness:.9}),r=new ie({color:new de(i).lerp(new de(3752282),.35),roughness:.5,metalness:.3,flatShading:!0}),a=new $(new je(1.15*t,1.25*t,1.5*t,14),s);a.position.y=.75*t,n.add(a);let o=new $(new gn(1.18*t,16,10,0,Math.PI*2,0,Math.PI*.52),r);o.position.y=1.5*t,n.add(o);let c=new $(new We(.28*t,1.05*t,.1),new ie({color:1317944,roughness:.4}));c.position.set(0,1.95*t,.82*t),c.rotation.x=-.62,n.add(c);let l=new $(new je(.1*t,.14*t,1.15*t,10),new ie({color:10134197,metalness:.6,roughness:.3}));l.position.set(0,2.2*t,.55*t),l.rotation.x=-.7,n.add(l);let h=new $(new Qe(.5*t,.9*t),new ie({color:5913894,roughness:.85}));return h.position.set(0,.45*t,1.21*t),n.add(h),n}function qf(i,e){let t=e?1:.72,n=new ze,s=new ie({color:9070146,roughness:.9}),r=new ie({color:5149760,roughness:1,flatShading:!0});for(let[l,h]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let u=new $(new We(.12,2*t,.12),s);u.position.set(l*1.05*t,t,h*1.05*t),n.add(u)}let a=new $(new On(1.8*t,.7*t,4),new ie({color:new de(i).lerp(new de(3752282),.25),roughness:.8,flatShading:!0}));a.rotation.y=Math.PI/4,a.position.y=2.3*t,n.add(a);let o=new $(new Dt(1.15*t,.09,.4*t,2,.03),s);o.position.y=.42*t,n.add(o);for(let l of[-1,1]){let h=new $(new We(.08,.4*t,.34*t),s);h.position.set(l*.45*t,.2*t,0),n.add(h)}for(let l of[-1,1]){let h=new $(new Dt(1.5*t,.2,.6*t,2,.05),new ie({color:7033144,roughness:1}));h.position.set(l*1.9*t,.1,.4*t),n.add(h);for(let u=0;u<4;u++){let d=new $(new Ct(.09*t,0),new Jt({color:u%2?new de(i):new de(16777215)}));d.position.set(l*1.9*t-.5*t+u*.34*t,.3,.4*t),n.add(d);let p=new $(new je(.018,.02,.2,5),r);p.position.set(l*1.9*t-.5*t+u*.34*t,.2,.4*t),n.add(p)}}let c=new $(new $i(.16*t,0),new ie({color:16767370,emissive:16757575,emissiveIntensity:.25}));return c.position.set(0,1.75*t,1.05*t),n.add(c),Cn.push(c.material),n}function Xf(i,e){let t=e?1:.72,n=new ze,s=new ie({color:12442088,roughness:.12,metalness:.3,transparent:!0,opacity:.5}),r=new ie({color:new de(i),metalness:.6,roughness:.3}),a=new $(new We(2.4*t,1.9*t,2.4*t),s);a.position.y=.95*t,n.add(a);for(let[h,u]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let d=new $(new We(.09,1.9*t,.09),r);d.position.set(h*1.2*t,.95*t,u*1.2*t),n.add(d)}let o=new $(new We(2.6*t,.12,2.6*t),r);o.position.y=1.95*t,n.add(o);let c=new $(new je(.5*t,.5*t,.06,12),new ie({color:15921385,roughness:.6}));c.position.y=.5*t,n.add(c);let l=new $(new je(.06,.1,.5*t,8),r);l.position.y=.25*t,n.add(l);for(let h=0;h<3;h++){let u=h/3*Math.PI*2+.5,d=new $(new Dt(.3*t,.34*t,.3*t,2,.05),new ie({color:14263361,roughness:.8}));d.position.set(Math.cos(u)*.85*t,.17*t,Math.sin(u)*.85*t),n.add(d)}return n}function Ec(){Zu.clear(),R.wzSeen||(R.wzSeen={frei:[],serious:[]});let i=[],e=is();if(e.r&&V.richtungen[e.r]){let n={klin:qf,ekn:jf,swo:Xf}[e.r];i.push({key:"bsc:"+e.r,x:-17.5,z:-8.5,rot:.5,mesh:n(V.richtungen[e.r].farbe,!1),name:M("wz_"+e.r)})}let t=ss();if(t.dom&&V.schwerpunkte[t.dom]){let n={DeNC:jf,HEA:qf,SEOP:Xf}[t.dom];i.push({key:"msc:"+t.dom,x:20.5,z:-9,rot:-.5,mesh:n(V.schwerpunkte[t.dom].farbe,!0),name:M("wz_"+t.dom)})}for(let n of i)n.mesh.position.set(n.x,.24,n.z),n.mesh.rotation.y=n.rot,n.mesh.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)}),Zu.add(n.mesh),!Gt.active&&!R.wzSeen[R.mode].includes(n.key)&&(R.wzSeen[R.mode].push(n.key),tt(),Ja(n.x,4,n.z,70,3),_t("\u{1F3DB} "+M("wz_neu")+" "+n.name),SND.fanfare())}var Wn=null,vn=null,H_=!1;function qa(i){Ii(),vn=i;let e=ui(i);H_=e.ok,Wn=oo(i,{state:{stil:"klassisch"}}),Wn.traverse(t=>{t.isMesh&&(t.castShadow=!1,t.receiveShadow=!1,t.material=new ie({color:e.ok?3066993:14241615,transparent:!0,opacity:.45,depthWrite:!1}))}),Je.add(Wn)}function Ii(){Wn&&(Je.remove(Wn),Wn=null,vn=null)}function bm(i,e,t){let s=new gn(.09,5,4),r=new Jt({color:14208436,transparent:!0,opacity:.85}),a=new Gi(s,r,14),o=[],c=new Pe;for(let h=0;h<14;h++){let u=h/14*Math.PI*2;o.push(new S(Math.cos(u)*(1.2+Math.random()),.6+Math.random()*.8,Math.sin(u)*(1.2+Math.random()))),c.setPosition(i,e,t),a.setMatrixAt(h,c)}Je.add(a);let l=Array.from({length:14},()=>new S(i,e,t));Vn(.7,h=>{for(let u=0;u<14;u++){l[u].addScaledVector(o[u],.016),o[u].y-=.05;let d=1-h;c.makeScale(d,d,d),c.setPosition(l[u]),a.setMatrixAt(u,c)}a.instanceMatrix.needsUpdate=!0,r.opacity=.85*(1-h)},ao,()=>{Je.remove(a),s.dispose(),r.dispose()})}function Ja(i,e,t,n=140,s=6){let r=new Qe(.16,.26),a=new Jt({side:gt,vertexColors:!1,transparent:!0}),o=new Gi(r,a,n),c=[10405,4156616,954238,14263361,14248523,6185166,16777215],l=[];for(let d=0;d<n;d++)o.setColorAt(d,new de(c[d%c.length])),l.push({p:new S(i,e,t),v:new S((Math.random()-.5)*s,4+Math.random()*5,(Math.random()-.5)*s),r:Math.random()*Math.PI,rs:(Math.random()-.5)*8});o.instanceColor&&(o.instanceColor.needsUpdate=!0),Je.add(o);let h=new Pe,u=new cn;Vn(2.6,d=>{for(let p=0;p<n;p++){let g=l[p];g.v.y-=.09,g.p.addScaledVector(g.v,.016),g.r+=g.rs*.016,u.set(g.r,g.r*.7,g.r*.3),h.makeRotationFromEuler(u),h.setPosition(g.p),o.setMatrixAt(p,h)}o.instanceMatrix.needsUpdate=!0,a.opacity=d>.75?1-(d-.75)/.25:1},d=>d,()=>{Je.remove(o),r.dispose(),a.dispose()})}function G_(i,e,t,n){let s=new vs(.42,.55,40),r=new Jt({color:16777215,transparent:!0,opacity:.75,side:gt,depthWrite:!1}),a=new $(s,r);a.rotation.x=-Math.PI/2,a.position.set(i,e+.04,t),Je.add(a),Vn(.55,o=>{let c=1+o*n;a.scale.set(c,c,1),r.opacity=.75*(1-o)},ao,()=>{Je.remove(a),s.dispose(),r.dispose()})}function Qa(i,e,t="#ffffff"){let n=document.createElement("canvas");n.width=256,n.height=96;let s=n.getContext("2d");s.font="800 44px Helvetica, Arial";let r=s.measureText(i).width+52;s.fillStyle=e,s.beginPath(),s.roundRect((256-r)/2,14,r,68,34),s.fill(),s.fillStyle=t,s.textAlign="center",s.textBaseline="middle",s.fillText(i,128,50);let a=new or(n),o=new rr(new gs({map:a,transparent:!0,depthWrite:!1}));return o.scale.set(2.4,.9,1),o}function V_(i,e){let{haupt:t}=Bt(e),n=(e.pos.h||1)*An+.4;(t||[]).slice(0,3).forEach((s,r)=>{let a=Nt[s];a&&setTimeout(()=>{let o=Qa("+"+s,V.felder[a.feld].farbe);o.position.set(i.position.x+(r-1)*.7,i.position.y+n,i.position.z),Je.add(o);let c=o.position.y;Vn(1.5,l=>{o.position.y=c+l*2.1,o.material.opacity=l<.65?1:1-(l-.65)/.35},ao,()=>{Je.remove(o),o.material.map.dispose(),o.material.dispose()})},240+r*200)})}var dd=70,W_=new Qe(.22,.22),Mm=new Jt({color:13204285,side:gt,transparent:!0,opacity:.9}),Ir=new Gi(W_,Mm,dd),$_=Array.from({length:dd},()=>({p:new S((Math.random()-.5)*70,Math.random()*18+2,(Math.random()-.5)*50),s:.4+Math.random()*.9,ph:Math.random()*6.28}));Je.add(Ir);Ir.visible=!1;var Ju={fruehling:{bg:13625079,grass:7976035,foliage:9424506,amb:16234452,ambFall:.35,sun:16773848,hemi:.8},sommer:{bg:12574965,grass:7319378,foliage:5149760,amb:null,ambFall:0,sun:16771524,hemi:.85},herbst:{bg:15260099,grass:10132052,foliage:13204285,amb:13204285,ambFall:.9,sun:16767392,hemi:.7},winter:{bg:14673646,grass:15330804,foliage:6191720,amb:16777215,ambFall:.5,sun:15659775,hemi:.65}},uc=new de(1317944);function Is(){let i=Ju[R.season]||Ju.sommer,e=R.tod/100,t=Math.max(0,(e-.68)/.32),n=Math.PI*(.12+e*.82);an.position.set(Math.cos(n)*40,Math.sin(n)*34+6,18),an.intensity=Math.max(.05,Math.sin(Math.min(Math.PI,n))*2.2)*(1-t*.95),an.color.set(i.sun).lerp(new de(16751198),Math.pow(Math.abs(e-.5)*2,2)*.6),um.intensity=i.hemi*(1-t*.75)+.12;let s=new de(i.bg).lerp(uc,t);Je.background=s,Je.fog.color.copy(s),bc.color.set(i.grass).lerp(uc,t*.55),fc.color.set(i.foliage).lerp(uc,t*.5),pm.color.set(i.grass).multiplyScalar(.82).lerp(uc,t*.6),Vu.color.set(16777215).lerp(new de(3752282),t*.8),Vu.opacity=R.season==="winter"?.98:.9,I_.material.opacity=Math.max(0,t-.15)*.95,gc.material.opacity=t>.4&&(R.season==="sommer"||R.season==="fruehling")?.9:0,mc.visible=R.season==="sommer"||R.season==="fruehling",Cn.forEach(a=>a.emissiveIntensity=t>.25?.9:0),Ir.visible=!!i.amb,i.amb&&Mm.color.set(i.amb),document.getElementById("todIcon").textContent=t>.3?"\u{1F319}":e>.45?"\u{1F324}\uFE0F":"\u{1F305}",document.querySelectorAll("#envRow .envbtn[data-season]").forEach(a=>a.classList.toggle("on",a.dataset.season===R.season));let r=document.getElementById("btnEnvAuto");r&&r.classList.toggle("on",!!R.envAuto),SND.ambientMode(R.sound?t>.45?"night":an.intensity>.4?"day":"off":"off")}var St=new ze;{let i=new ie({color:15251850,roughness:.9}),e=new ie({color:10405,roughness:.9}),t=new ie({color:3752282,roughness:.95}),n=new $(new Dt(.16,.42,.16,2,.05),t);n.position.set(-.11,.21,0);let s=n.clone();s.position.x=.11;let r=new $(new Dt(.46,.55,.3,2,.1),e);r.position.y=.68;let a=new $(new Dt(.11,.4,.11,2,.04),e);a.position.set(-.3,.72,0);let o=a.clone();o.position.x=.3;let c=new $(new gn(.2,12,10),i);c.position.y=1.12;let l=new ie({color:15975971,roughness:.5}),h=new $(new gn(.21,12,8,0,Math.PI*2,0,Math.PI*.55),l);h.position.y=1.17;let u=new $(new je(.27,.27,.035,14),l);u.position.y=1.16,St.add(n,s,r,a,o,c,h,u),St.userData.legs=[n,s],St.userData.arms=[a,o],St.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),St.position.set(-5,.24,6),Je.add(St)}var Qu=null;function Em(i,e){let t=[];for(let n of["bsc","msc"]){let s=V.haeuser[n];t.push({cx:s.origin[0],cz:s.origin[2],hw:s.breite*Ze/2+1,hd:s.tiefe*Ze/2+1})}if(Ne("600")){let n=V.haeuser.msc,s=ut[600].pos;t.push({cx:n.origin[0]+s.x*Ze,cz:n.origin[2]+s.z*Ze,hw:s.w*Ze/2+.9,hd:s.d*Ze/2+.9})}for(let n=0;n<2;n++)for(let s of t){let r=i-s.cx,a=e-s.cz;Math.abs(r)<s.hw&&Math.abs(a)<s.hd&&(s.hd-Math.abs(a)<=s.hw-Math.abs(r)?e=s.cz+(a>=0?s.hd:-s.hd):i=s.cx+(r>=0?s.hw:-s.hw))}return[i,e]}var be=i=>String(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function Sm(i,e,t=!1){[i,e]=Em(i,e);let n=St.position.clone(),s=new S(i,.24,e),r=n.distanceTo(s);St.lookAt(s.x,.24,s.z),Qu={k:0},Vn(Math.min(2.2,.3+r*.09),a=>{St.position.lerpVectors(n,s,a),St.position.y=.24+Math.abs(Math.sin(a*r*2.2))*.09},a=>a,()=>{Qu=null,St.position.y=.24,St.userData.legs.forEach(a=>a.rotation.x=0),St.userData.arms.forEach(a=>a.rotation.x=0),t&&Vn(.9,a=>{St.position.y=.24+Math.abs(Math.sin(a*Math.PI*2))*.5,St.userData.arms.forEach((o,c)=>o.rotation.z=(c?1:-1)*Math.sin(a*Math.PI*4)*1.9)},a=>a,()=>St.userData.arms.forEach(a=>a.rotation.z=0))})}function pd(i){i&&i.traverse(e=>{e.geometry&&e.geometry.dispose&&e.geometry.dispose();let t=e.material;t&&(Array.isArray(t)?t:[t]).forEach(n=>{n.map&&n.map.dispose&&n.map.dispose(),n.dispose&&n.dispose();let s=Cn.indexOf(n);s>=0&&Cn.splice(s,1)})})}function lo(){Cn.length=0,Object.keys(kt).forEach(i=>{ns.remove(kt[i]),pd(kt[i]),delete kt[i]}),Object.keys(R.placed[R.mode]).forEach(i=>{let e=ut[i];if(!e)return;let t=oo(e);ud(t,e),ns.add(t),kt[i]=t}),Yu(),Ec(),S_.visible=!0}function wm(i){for(let e of V.slots){if(e.haus!==i.haus||e.slot===i.slot||!Ne(e.slot))continue;(e.pos.y===i.pos.y+1||i.form==="wing"&&e.pos.y<=2)&&vm(e.pos,i.pos)&&Ti(e.slot),Ku.has(e.slot)&&i.slot==="MA"&&Ti(e.slot)}}function Fr(i){let e=ui(i);if(!e.ok)return SND.err(),_t(e.reason||M("gesperrt")),!1;let t=Lv(),n={stil:to,sp:i.schwerpunktwahl?no:null,opt:i.optionen?Ai:null,thema:Ri[i.slot]?Tr:null,frage:i.slot==="BA"?Ar:null,artefakt:i.slot==="BA"?Xa:null};R.placed[R.mode][i.slot]=n,tt();let s=oo(i);ud(s,i),ns.add(s),kt[i.slot]=s,wm(i),Ec();let r=s.position.y;s.position.y=r+9;let a=s,o=Math.max(i.pos.w,i.pos.d)*Ze*.42,c=new Jt({color:660016,transparent:!0,opacity:.22,depthWrite:!1}),l=new $(new ai(o,22),c);l.rotation.x=-Math.PI/2,l.position.set(s.position.x,r+.03,s.position.z),Je.add(l),Vn(.14,d=>l.scale.setScalar(.15+.85*d),ao),Vn(.5+.15,()=>{},d=>d,()=>{Je.remove(l),l.geometry.dispose(),c.dispose()}),Vn(.5,d=>{a.position.y=r+10*(1-d)},P_,()=>{a.position.y=r;try{if(Vn(.22,d=>{let p=Math.sin(d*Math.PI);a.scale.set(1+p*.09,1-p*.14,1+p*.09)},d=>d,()=>a.scale.set(1,1,1)),Vn(.18,d=>{a.position.y=r+Math.sin(d*Math.PI)*.07},d=>d,()=>{a.position.y=r}),bm(s.position.x,r+.1,s.position.z),i.ects>=8&&G_(s.position.x,r,s.position.z,Math.max(i.pos.w,i.pos.d)*Ze*.9),V_(s,i),SND.thock(),_m||(_c=.22,$u=.07),navigator.vibrate)try{navigator.vibrate(12)}catch{}}catch(d){console.error("juice",d)}Am()});let h=V.haeuser[i.haus];Sm(h.origin[0]+i.pos.x*Ze+2.6,h.origin[2]+i.pos.z*Ze+4),Ii();let{komp:u}=Bt(i);return tn(),nn([...u.fa||[],...u.ki||[],...u.fu||[]]),Pv(t),R.onboarded&&R.ansicht!=="liste"?kr(i.slot):(document.getElementById("coach").classList.remove("open"),i.slot!=="003"&&setTimeout(()=>{!R.onboarded&&!Gt.active&&(document.getElementById("obStart").textContent=M("tour_fertig"),Ut("onboard"))},1400)),!0}function Tm(i){if(R.mode==="serious"&&!confirm(M("entfernen_confirm")))return;let e=V.slots.filter(n=>Ne(n.slot)&&(n.voraus||[]).includes(i));if(e.length){_t(M("grund_voraus")+e.map(n=>X(n.titel).split(",")[0]).slice(0,2).join(" \xB7 ")),SND.err();return}delete R.placed[R.mode][i],tt();let t=kt[i];t&&(bm(t.position.x,t.position.y+.2,t.position.z),SND.err(),ns.remove(t),pd(t),delete kt[i]),wm(ut[i]),Ec(),tn(),nn(),Ps()}function Am(){R.msSeen||(R.msSeen={frei:[],serious:[]});let i=R.msSeen[R.mode];for(let e of V.meilensteine)if(!i.includes(e.id)&&e.slots.every(t=>Ne(t))){i.push(e.id),tt(),j_(e);break}}function j_(i){let e=V.haeuser[i.haus],t=e.origin[0],n=e.origin[2],s=i.id==="bsc_fertig"||i.id==="msc_fertig";$n(new S(t+(i.haus==="bsc"?-17:17),12,26),new S(t,3.5,n),1.4,()=>{if(Ja(t,8,n,s?220:120,s?10:6),SND.fanfare(),s){let r=0,a=setInterval(()=>{Ja(t+(Math.random()-.5)*10,9+Math.random()*4,n+(Math.random()-.5)*6,80,4),SND.firework(),++r>=3&&clearInterval(a)},450)}Sm(t,n+6.5,!0),setTimeout(()=>{document.getElementById("msEmoji").textContent=s?"\u{1F386}":"\u{1F389}",document.getElementById("msTitle").textContent=X(i.name),document.getElementById("msText").textContent=X(i.text),document.getElementById("milestone").classList.add("open")},s?1400:700)})}document.getElementById("msClose").onclick=()=>{document.getElementById("milestone").classList.remove("open"),!R.onboarded&&!Gt.active&&(document.getElementById("obStart").textContent=M("tour_fertig"),Ut("onboard"))};var Er=new Ca,wi=new te,Ha=document.getElementById("tip"),Nu=null;function ed(i){let e=Rn.getBoundingClientRect();wi.x=(i.clientX-e.left)/e.width*2-1,wi.y=-((i.clientY-e.top)/e.height)*2+1,Er.setFromCamera(wi,Ft);let t=[...Object.values(kt)];Wn&&t.push(Wn);let n=Er.intersectObjects(t,!0).filter(r=>!r.object.userData.nopick);if(!n.length)return null;let s=n[0].object;for(;s&&!s.userData.slot;)s=s.parent;return s?s.userData.slot:null}function Kf(i,e){let t=kt[i];t&&t.traverse(n=>{n.isMesh&&n.material&&n.material.emissive&&!Cn.includes(n.material)&&(n.material.emissive.setHex(e?1585262:0),n.material.emissiveIntensity=e?.35:0)})}Rn.addEventListener("pointermove",i=>{if(Sr)return;let e=ed(i);if(e!==Nu&&(Kf(Nu,!1),Kf(e,!0)),Nu=e,e&&!Gt.active){let t=ut[e];Ha.style.display="block",Ha.style.left=i.clientX+14+"px",Ha.style.top=i.clientY+14+"px";let n=R.quests[e];Ha.innerHTML=`<b>${Et(t)}</b><br>${t.ects} ${M("ects")} \xB7 ${M("stufe")} ${t.stufe}${n&&n.done?" \xB7 \u2726":""}<br><span style="opacity:.72">${X(V.gruppen[t.gruppe].name)}</span>`,Rn.style.cursor="pointer"}else Ha.style.display="none",Rn.style.cursor="default"});var Sr=null;Rn.addEventListener("pointerdown",i=>{Sr=[i.clientX,i.clientY],SND.unlock()});Rn.addEventListener("pointerup",i=>{if(!Sr)return;let e=Math.hypot(i.clientX-Sr[0],i.clientY-Sr[1]);if(Sr=null,e>6)return;if(wt){let n=Rn.getBoundingClientRect();wi.x=(i.clientX-n.left)/n.width*2-1,wi.y=-((i.clientY-n.top)/n.height)*2+1,Er.setFromCamera(wi,Ft);let s=Er.intersectObjects(wt.group.children,!0);for(let r of s){let a=r.object;for(;a&&!a.userData.kompId&&!a.userData.info;)a=a.parent;if(a&&a.userData.info){_t(X(a.userData.info)),SND.pick();return}if(a&&a.userData.kompId){let o=Nt[a.userData.kompId];o&&(_t(`${o.id} \xB7 ${X(o.name)} \u2014 \xAB${X(o.ich)}\xBB`),SND.pick());return}}return}{let n=Rn.getBoundingClientRect();wi.x=(i.clientX-n.left)/n.width*2-1,wi.y=-((i.clientY-n.top)/n.height)*2+1,Er.setFromCamera(wi,Ft);let s=Er.intersectObjects([Ki,Zi,Yi,Mr,ns],!0).filter(r=>!r.object.userData.nopick);if(s.length){let r=s[0].object,a=null;for(;r&&!a;)a=r.userData.action||null,r=r.parent;if(a==="p0"){q_(),SND.pick();return}if(a==="minor"){X_(),SND.pick();return}if(a==="bauhuette"){fd(),SND.pick();return}if(a==="geraete"){Rm(),SND.pick();return}}}if(Wn&&vn){let n=ed(i);if(n===vn.slot||n===null){Fr(vn);return}}let t=ed(i);t&&(kr(t),SND.pick())});function q_(){let i=document.getElementById("p0List");i.innerHTML="",(V.vorstufe||[]).forEach((e,t)=>{let n=document.createElement("label");n.className="sw",n.style.alignItems="flex-start",n.innerHTML=`<input type="checkbox" ${R.p0[t]?"checked":""} style="margin-top:2px"> <span style="font-size:12.5px;line-height:1.45">${X(e.text)} <span style="color:#8b94ab">(${e.ids.join(", ")})</span></span>`,n.querySelector("input").onchange=s=>{R.p0[t]=s.target.checked,tt(),nn()},i.appendChild(n)}),Ut("p0")}function X_(){let i=document.getElementById("minorList");i.innerHTML="";for(let e=0;e<6;e++){let t=document.createElement("label");t.className="sw",t.innerHTML=`<input type="checkbox" ${R.minor[e]?"checked":""}> <span>${M("minor_sem").replace("{n}",e+1)}</span>`,t.querySelector("input").onchange=n=>{R.minor[e]=n.target.checked,tt(),mm(),n.target.checked&&SND.quest()},i.appendChild(t)}Ut("minor")}var Uu={de:{ev:{PI:"Hake (1998, N\u22486500): Lernzuwachs ~verdoppelt (\u27E8g\u27E9 .23 \u2192 .48) \u2014 skaliert exzellent auf Grossveranstaltungen.",LC:"KI-Antworten live pr\xFCfen verbindet kritisches Denken mit AI Literacy \u2014 der KI-Output ist das \xDCbungsobjekt.",JT:"Kurzer Feedback-Loop vor der Sitzung: Die Lehre startet bei den h\xE4ufigsten Fehlkonzepten statt bei Folie 1.",AC:"Richmond & Nicholls (2025, UNSW, N=363): rubrikbasierte KI-Kritik f\xF6rdert Fach-, KI- und Informationskompetenz zugleich.",TB:"Kestin et al. (2025, Harvard-RCT): ~0.73 SD \xFCber aktivem Lernen \u2014 aber nur mit Hint-only-Design (nie die L\xF6sung verraten).",RS:"Simulierte Klient:innen erlauben risikofreies \xDCben (deliberate practice) mit weniger Performanzangst.",TSQ:"Erst einzeln, dann im Team: h\xF6here Leistung und weniger Pr\xFCfungsangst \u2014 in 200\u2013300er-Klassen erprobt.",PD:"Verankert die KI-Spielregeln (deklarieren, dokumentieren, verifizieren) als w\xF6chentliche Praxis statt Papier."},effort:"<b>Warum sich das anstrengender anf\xFChlt \u2014 und trotzdem mehr bringt:</b> Aktives Lernen f\xFChlt sich subjektiv m\xFChsamer an als eine brillante Vorlesung, f\xFChrt aber messbar zu mehr Lernen (Deslauriers et al., 2019). Und der Klassiker: Aktivierende Formate senken die Durchfallquoten deutlich (Freeman et al., 2014, Metaanalyse \xFCber 225 Studien).",lit_titel:"Literatur"},en:{ev:{PI:"Hake (1998, N\u22486,500): learning gains roughly doubled (\u27E8g\u27E9 .23 \u2192 .48) \u2014 scales excellently to large classes.",LC:"Checking AI answers live combines critical thinking with AI literacy \u2014 the AI output is the practice object.",JT:"A short pre-session feedback loop: teaching starts from the most common misconceptions, not from slide 1.",AC:"Richmond & Nicholls (2025, UNSW, N=363): rubric-based AI critique builds domain, AI and information literacy at once.",TB:"Kestin et al. (2025, Harvard RCT): ~0.73 SD above active learning \u2014 but only with a hint-only design (never reveal the solution).",RS:"Simulated clients enable risk-free deliberate practice with less performance anxiety.",TSQ:"Solo first, then as a team: higher performance and less test anxiety \u2014 proven in classes of 200\u2013300.",PD:"Anchors the AI ground rules (declare, document, verify) as weekly practice instead of paper."},effort:"<b>Why this feels harder \u2014 and still teaches more:</b> active learning subjectively feels more effortful than a brilliant lecture, yet measurably produces more learning (Deslauriers et al., 2019). And the classic: active formats substantially cut failure rates (Freeman et al., 2014, meta-analysis of 225 studies).",lit_titel:"References"},lit:`<ul style="font-size:11px;line-height:1.5">
    <li>Deslauriers, L., McCarty, L. S., Miller, K., Callaghan, K., & Kestin, G. (2019). Measuring actual learning versus feeling of learning in response to being actively engaged in the classroom. <i>PNAS, 116</i>(39), 19251\u201319257. <a href="https://doi.org/10.1073/pnas.1821936116" target="_blank" rel="noopener">doi.org/10.1073/pnas.1821936116</a></li>
    <li>Freeman, S., Eddy, S. L., McDonough, M., Smith, M. K., Okoroafor, N., Jordt, H., & Wenderoth, M. P. (2014). Active learning increases student performance in science, engineering, and mathematics. <i>PNAS, 111</i>(23), 8410\u20138415. <a href="https://doi.org/10.1073/pnas.1319030111" target="_blank" rel="noopener">doi.org/10.1073/pnas.1319030111</a></li>
    <li>Hake, R. R. (1998). Interactive-engagement versus traditional methods: A six-thousand-student survey of mechanics test data for introductory physics courses. <i>American Journal of Physics, 66</i>(1), 64\u201374. <a href="https://doi.org/10.1119/1.18809" target="_blank" rel="noopener">doi.org/10.1119/1.18809</a></li>
    <li>Kestin, G., Miller, K., Klales, A., Milbourne, T., & Ponti, G. (2025). AI tutoring outperforms in-class active learning: An RCT introducing a novel research-based design in an authentic educational setting. <i>Scientific Reports, 15</i>, 17458. <a href="https://doi.org/10.1038/s41598-025-97652-6" target="_blank" rel="noopener">doi.org/10.1038/s41598-025-97652-6</a></li>
    <li>Richmond, J. L., & Nicholls, K. (2025). Using generative AI to promote psychological, feedback, and artificial intelligence literacies in undergraduate psychology. <i>Teaching of Psychology</i>. <a href="https://doi.org/10.1177/00986283241287203" target="_blank" rel="noopener">doi.org/10.1177/00986283241287203</a></li>
    <li>Crouch, C. H., & Mazur, E. (2001). Peer Instruction: Ten years of experience and results. <i>American Journal of Physics, 69</i>(9), 970\u2013977. <a href="https://doi.org/10.1119/1.1374249" target="_blank" rel="noopener">doi.org/10.1119/1.1374249</a></li>
  </ul>`};function fd(){let i=Uu[R.lang]||Uu.de,e=["PI","LC","JT","AC","TB","RS","TSQ","PD"];document.getElementById("bhList").innerHTML=e.map(t=>{let n=V.baukasten.defs[t];return n?`<div class="bhrow"><b>${X(n.name)}</b><p>${X(n.kurz)}</p>${i.ev[t]?`<p class="bhev">\u{1F4CA} ${i.ev[t]}</p>`:""}</div>`:""}).join(""),document.getElementById("bhEffort").innerHTML=i.effort,document.getElementById("bhLit").innerHTML=`<div class="subhead" style="margin:10px 0 4px;font:700 10.5px var(--font);text-transform:uppercase;letter-spacing:.5px;color:#5b6478">${i.lit_titel}</div>`+Uu.lit,Ut("bauhuette")}var K_=[{amp:"g",name:"Microsoft 365 Copilot Chat (Basic)",de:"Allgemeiner KI-Zugang f\xFCr alle UZH-Angeh\xF6rigen, in der M365-Lizenz enthalten. Freigegeben f\xFCr \xF6ffentliche und interne Informationen; Verarbeitung in der Microsoft-Cloud (EU), Inhalte werden nicht f\xFCrs Modelltraining verwendet. Eigene Agents: derzeit nur eingeschr\xE4nkt verl\xE4sslich.",en:"General AI access for all UZH members, included in the M365 licence. Approved for public and internal information; processed in the Microsoft cloud (EU), content is not used for model training. Own agents: currently only partially reliable."},{amp:"y",name:"KlickerUZH + AI Buddy (askUZH)",de:"Kursbezogene Chatbots, KI-Feedback und KI-generierte \xDCbungsinhalte; Lehrende richten Bots im Self-Service ein und geben sie frei. Public Beta ab HS26; Zugang \xFCber Kurs-Login, nutzungsabh\xE4ngige Kosten.",en:"Course-linked chatbots, AI feedback and AI-generated practice content; teachers configure and release bots via self-service. Public beta from autumn 2026; access via course login, usage-based costs."},{amp:"y",name:"OLAT-KI-Angebot",de:"Dialog mit freigegebenen OLAT-Kursinhalten (Materialien, Quizzes). \xDCbergangsl\xF6sung ab HS26, offizielle OLAT-Integration ab FS27 geplant \u2014 wichtig f\xFCr die Skalierung, weil alle Fakult\xE4ten OLAT nutzen.",en:"Dialogue with released OLAT course content (materials, quizzes). Interim solution from autumn 2026, official OLAT integration planned for spring 2027 \u2014 key for scaling, as all faculties use OLAT."},{amp:"y",name:"BaltiBot",de:"Unterst\xFCtzt Studienprogrammverantwortliche ab Sommer 2026 bei der Orientierung im Studienprogrammentwicklungs-Prozess (ISSP) \u2014 auf Basis einer kuratierten Dokumentensammlung.",en:"From summer 2026, supports programme directors in navigating the programme-development process (ISSP), based on a curated document collection."},{amp:"y",name:"EducationAI",de:"Intern getestete Anwendung f\xFCr Lehrende: greift auf die Teaching Tools UZH zu und unterst\xFCtzt Planung und Weiterentwicklung der Lehre (DPA mit dem LLM-Anbieter).",en:"Internally tested application for teachers: draws on the UZH Teaching Tools and supports planning and developing courses (DPA with the LLM provider)."},{amp:"r",name:"M365 Copilot Premium \xB7 GitHub Copilot",de:"Nur f\xFCr Mitarbeitende mit kostenpflichtiger Zusatzlizenz. Ein studentischer Zugang zu einer KI-Entwicklungsumgebung (agentische KI, Vibe Coding) ist noch offen \u2014 f\xFCr datennahe Profile relevant.",en:"Staff only, with a paid add-on licence. Student access to an AI development environment (agentic AI, vibe coding) is still open \u2014 relevant for data-oriented profiles."}],Yf={de:"<b>Spielregeln f\xFCr alle Werkzeuge:</b> Studierende d\xFCrfen nicht zu kostenpflichtigen Tools oder Tools mit pers\xF6nlicher Registrierung verpflichtet werden. Informationsklassen beachten: Pr\xFCfungen und akademische Arbeiten gelten als <b>vertraulich</b>, bestimmte psychologische Forschungs- und Klientendaten als <b>geheim</b> \u2014 sie geh\xF6ren in kein nicht daf\xFCr freigegebenes KI-System. Nicht von der UZH bereitgestellte Tools nur mit \xF6ffentlichen Informationen verwenden.",en:"<b>Ground rules for all tools:</b> students must not be required to use paid tools or tools needing personal registration. Mind the information classes: examinations and academic papers are <b>confidential</b>, certain psychological research and client data are <b>secret</b> \u2014 they belong in no AI system not approved for that class. Tools not provided by UZH may only be used with public information."};function Rm(){let i={g:"\u{1F7E2}",y:"\u{1F7E1}",r:"\u{1F534}"};document.getElementById("gsList").innerHTML=K_.map(e=>`<div class="bhrow"><b>${i[e.amp]} ${be(e.name)}</b><p>${R.lang==="de"?e.de:e.en}</p></div>`).join(""),document.getElementById("gsRegeln").innerHTML=Yf[R.lang]||Yf.de,document.getElementById("gsQuelle").textContent=R.lang==="de"?"Quelle: KI-im-Curriculum-Kompass UZH (Ochsner, 2026), Stand Juli 2026 \u2014 Angaben \xE4ndern sich laufend.":"Source: UZH AI-in-the-Curriculum Compass (Ochsner, 2026), as of July 2026 \u2014 details change continuously.",Ut("geraete")}window.addEventListener("keydown",i=>{let e=i.target&&(i.target.tagName==="INPUT"||i.target.tagName==="TEXTAREA");if(i.key==="Enter"&&vn&&!e&&Fr(vn),i.key==="Escape"){if(wt){io();return}if(document.getElementById("milestone").classList.contains("open")){document.getElementById("msClose").click();return}document.getElementById("tutor").classList.remove("open"),Ii(),Ps(),document.querySelectorAll(".modal.open").forEach(n=>n.classList.remove("open"))}});var dc=document.getElementById("planList"),xn=null;function Y_(i){return Ne(i.slot)?"built":ui(i).ok?"avail":"locked"}function Sc(){for(let i of["bsc","msc"])for(let e of V.bauplan[i])for(let t of e.slots){let n=ut[t];if(!Ne(t)&&ui(n).ok)return t}return null}function tn(){let i=Gt.active?null:Sc(),e=document.createDocumentFragment();for(let s of["bsc","msc"]){let r=document.createElement("div");r.className="semblock",r.innerHTML=`<div class="semhead" style="font-size:12px;color:var(--blue)">${s==="bsc"?"\u{1F3E0} "+M("haus_bsc"):"\u{1F3F0} "+M("haus_msc")}<span>${on(s)}/120 ${M("ects")}</span></div>`,e.appendChild(r);for(let a of V.bauplan[s]){if(!a.slots.length)continue;let o=a.slots.filter(l=>Ne(l)).length,c=document.createElement("div");c.className="semblock",c.innerHTML=`<div class="semhead"><span>${M("sem")} ${a.sem} \xB7 ${a.hs?M("hs"):M("fs")}</span><span class="semprog">${o}/${a.slots.length}</span></div>`;for(let l of a.slots){let h=ut[l],u=Y_(h),d=document.createElement("button");d.className="chip "+(u==="built"?"built":u==="locked"?"locked":""),xn===l&&d.classList.add("sel"),l===i&&d.classList.add("next");let p=R.quests[l],g="#"+hd(h).getHexString(),_=h.kategorie==="Wahlpflicht"?`<span class="ckat wp" title="${M("kat_wahlpflicht")}">WP</span>`:h.kategorie==="Wahl"?`<span class="ckat" title="${M("kat_wahl")}">W</span>`:"";d.innerHTML=`<span class="cdot" style="background:${g}"></span>
          <span class="cname">${Et(h)}</span>
          ${_}
          ${l===i?`<span class="nextbadge">\u{1F528} ${M("naechstes")}</span>`:""}
          ${R.quiz[Cs(h)]?'<span class="quest-star" title="Quiz \u2713">\u{1F6A9}</span>':""}
          ${p&&p.done?'<span class="quest-star">\u2726</span>':""}
          ${u==="built"?'<span class="tick">\u2714</span>':R.mode==="serious"&&R.bestanden[l]?'<span class="tick">\u2611</span>':""}
          <span class="cects">${h.ects}</span>`,d.onclick=()=>{Ci(l)},c.appendChild(d)}e.appendChild(c)}}let t=dc.scrollTop;dc.innerHTML="",dc.appendChild(e),dc.scrollTop=t,R.ansicht==="liste"&&$m(),document.getElementById("planHint").textContent=R.mode==="serious"?"\u2611 = "+M("bestanden"):"",document.getElementById("planLegende").textContent=M("legende");let n=document.getElementById("nextCta");n&&(i&&!Gt.active?(n.textContent=`${M("cta_naechster")} ${Et(ut[i]).split(",")[0]}`,n.title=Et(ut[i]),n.onclick=()=>{Ci(i)},n.style.visibility="visible"):n.style.visibility="hidden")}function on(i){return V.slots.filter(e=>e.haus===i&&Ne(e.slot)).reduce((e,t)=>{let n=R.placed[R.mode][t.slot],s=n&&n.opt&&bt[n.opt]?bt[n.opt].ects:t.ects;return e+s},0)}function Ci(i){wt&&io(),xn=i;let e=ut[i];window.innerWidth<=1080&&(document.getElementById("panelL").classList.remove("open"),document.getElementById("panelR").classList.remove("open")),SND.pick(),!Ne(i)&&!Gt.active?qa(e):Ii(),kr(i),tn();let t=V.haeuser[e.haus],n=new S(t.origin[0]+e.pos.x*Ze,Mc(e.pos.y)+1,t.origin[2]+e.pos.z*Ze),s=Ft.position.clone().sub(qt.target).normalize().multiplyScalar(Math.min(30,Ft.position.distanceTo(n)+7));$n(n.clone().add(s),n,.9)}var td=i=>Math.min(i,8);function jn(){let i={},e={};V.kompetenzen.forEach(t=>{i[t.id]=0,e[t.id]=0});for(let t of V.slots){let n=Ne(t.slot),s=Bt(t),r=om(t),a=(o,c)=>((o||[]).includes(c)?2:1)*td(t.ects);for(let o of[...r.komp.fa||[],...r.komp.ki||[],...r.komp.fu||[]])o in e&&(e[o]+=a(r.haupt,o));if(n)for(let o of[...s.komp.fa||[],...s.komp.ki||[],...s.komp.fu||[]])o in e&&(i[o]+=a(s.haupt,o))}return(V.vorstufe||[]).forEach((t,n)=>{R.p0&&R.p0[n]&&t.ids.forEach(s=>{e[s]&&(i[s]=Math.min(e[s],i[s]+.025*e[s]))})}),{score:i,max:e}}var es=null,Pr="profil",Bu=[{ids:["Fa1","Fa8","Fa9"],name:{de:"Fachwissen &|Transfer",en:"Knowledge &|transfer"},farbe:"#1a3e8f"},{ids:["Fa2","Fa3","Fa5"],name:{de:"Methoden, Daten|& Diagnostik",en:"Methods, data|& diagnostics"},farbe:"#1a3e8f"},{ids:["Fa4","Fa6","Fa7","Fa10"],name:{de:"Denken, Ethik &|Kommunikation",en:"Thinking, ethics|& communication"},farbe:"#1a3e8f"},{ids:["KI1","KI2","KI3"],name:{de:"Mit KI arbeiten|& gestalten",en:"Working & creating|with AI"},farbe:"#0e8f7e"},{ids:["KI4","KI5","KI6"],name:{de:"KI verstehen, pr\xFCfen|& verantworten",en:"Understanding, auditing|& owning AI"},farbe:"#0e8f7e"},{ids:["Fu1","Fu2","Fu3"],name:{de:"Future Skills|(mit & ohne KI)",en:"Future skills|(with & without AI)"},farbe:"#4a90d9"}];function Cm(i,e,t=210,n=null){let s=t/2,r=t*.315,a=Bu.length,o=(_,f)=>{let m=-Math.PI/2+_/a*Math.PI*2;return[s+Math.cos(m)*f,s+Math.sin(m)*f]},c="";for(let _ of[.33,.66,1])c+=`<polygon points="${[...Array(a)].map((f,m)=>o(m,r*_).join(",")).join(" ")}" fill="none" stroke="#dbe1ef" stroke-width="1"/>`;let l="",h="";Bu.forEach((_,f)=>{let[m,v]=o(f,r);l+=`<line x1="${s}" y1="${s}" x2="${m}" y2="${v}" stroke="#dbe1ef" stroke-width="1"/>`;let[y,x]=o(f,r+13),E=X(_.name).split("|"),w=x-(E.length-1)*4.5+(f===0?-3:x>s?5:0);h+=`<text x="${y}" y="${w}" font-size="7.5" font-weight="700" fill="${_.farbe}" text-anchor="middle" dominant-baseline="middle">`+E.map((C,D)=>`<tspan x="${y}" dy="${D?9:0}">${C.replace(/&/g,"&amp;")}</tspan>`).join("")+"</text>"});let u=Bu.map(_=>{let f=_.ids.reduce((v,y)=>v+(i[y]||0),0),m=_.ids.reduce((v,y)=>v+(e[y]||0),0);return m?f/m:0}),d=u.map((_,f)=>o(f,Math.max(.03,_)*r).join(",")).join(" "),p=u.map((_,f)=>{let[m,v]=o(f,Math.max(.03,_)*r);return`<circle cx="${m}" cy="${v}" r="2.6" fill="#0028a5"/>`}).join(""),g=n&&n.length===a?`<polygon points="${n.map((_,f)=>o(f,Math.max(.03,Math.min(1,_))*r).join(",")).join(" ")}" fill="none" stroke="#b3831d" stroke-width="1.8" stroke-dasharray="5 4" stroke-linejoin="round"/>`:"";return`<svg viewBox="0 0 ${t} ${t}" style="width:100%;max-width:230px;display:block;margin:2px auto 6px">
    ${c}${l}
    ${g}
    <polygon points="${d}" fill="rgba(0,40,165,.16)" stroke="#0028a5" stroke-width="2" stroke-linejoin="round"/>
    ${p}${h}</svg>`}function Z_(){let i=[];for(let n of["bsc","msc"])for(let s of V.bauplan[n]){if(!s.slots.length&&n==="bsc"&&s.sem===2){i.push({lbl:"B2",fa:0,ki:0,fu:0});continue}let r={lbl:(n==="bsc"?"B":"M")+s.sem,fa:0,ki:0,fu:0};for(let a of s.slots){if(!Ne(a))continue;let o=ut[a],{komp:c}=Bt(o);r.fa+=(c.fa||[]).length*o.ects,r.ki+=(c.ki||[]).length*o.ects,r.fu+=(c.fu||[]).length*o.ects}i.push(r)}let e=Math.max(1,...i.map(n=>n.fa+n.ki+n.fu)),t=n=>{let s=r=>Math.round(r/e*100);return`<div class="vbar" title="${n.lbl}">
      <span class="vseg" style="height:${s(n.fu)}%;background:${V.felder.fu.farbe}"></span>
      <span class="vseg" style="height:${s(n.ki)}%;background:${V.felder.ki.farbe}"></span>
      <span class="vseg" style="height:${s(n.fa)}%;background:${V.felder.fa.farbe}"></span>
    </div>`};return`<div class="kfeld" style="margin-top:14px">${M("verlauf_titel")}</div>
    <div class="verlauf">${i.map(t).join("")}</div>
    <div class="verlauf-lbl">${i.map(n=>`<span>${n.lbl}</span>`).join("")}</div>`}function J_(i){let e=is(),t=ss(),n=e.r?`${V.richtungen[e.r].icon} <b style="color:${V.richtungen[e.r].farbe}">${X(V.richtungen[e.r].kurz)}</b>`:`<span style="color:#8b94ab">${M("richtung_keine")}</span>`,s=t.total?Object.entries(t.counts).filter(([,c])=>c>0).map(([c,l])=>`<b style="color:${V.schwerpunkte[c].farbe}">${c} ${l}</b>`).join(" \xB7 ")+(t.dom?"":` <span style="color:#8b94ab">(${M("msc_mix")})</span>`):'<span style="color:#8b94ab">\u2014</span>',r=Ji(),a=Cr(),o=r||a?`<br>BA: ${r?`${((V.baFormen||{})[r.form]||{}).icon||""} ${be(X(r.name))}`:""}${a?` \xB7 ${a.icon} ${be(X(a.name))}`:""}`:"";return`<div style="border:1.5px solid #dbe1ef;border-radius:10px;padding:7px 10px;margin:0 4px 8px;font-size:11px;line-height:1.6">
    <b style="font-size:11.5px">\u{1F9ED} ${M("richtung_titel")}</b><br>
    ${M("richtung_bsc")}: ${n}<br>
    ${M("richtung_msc")}: ${s}${o}${i?"":`<br><span style="color:#8b94ab;font-size:10px">${M("msc_dom_hint")}</span>`}
  </div>`}function Q_(i){if(!i.wahl)return"";let e=is(),t=ss(),n=[];if(i.wahl.r&&V.richtungen[i.wahl.r]){let a=e.r===i.wahl.r;n.push({ok:a,txt:`BSc: ${X(V.richtungen[i.wahl.r].kurz)}`,col:V.richtungen[i.wahl.r].farbe})}if(i.wahl.sp&&V.schwerpunkte[i.wahl.sp]){let a=(t.counts[i.wahl.sp]||0)>=3;n.push({ok:a,txt:`MSc: ${i.wahl.sp}`,col:V.schwerpunkte[i.wahl.sp].farbe})}if(i.wahl.wp&&bt[i.wahl.wp]){let a=Rs()===i.wahl.wp;n.push({ok:a,txt:X(bt[i.wahl.wp].titel),col:"#b3831d"})}let s=Ji();if(s&&(s.pfade||[]).includes(i.id)&&n.push({ok:!0,txt:M("ba_chip"),col:"#0028a5"}),!n.length)return"";let r=n.every(a=>a.ok);return`<div style="display:flex;flex-wrap:wrap;gap:4px;align-items:center;margin:4px 0 2px;font-size:10px">
    <span style="color:#5b6478;font-weight:700">${r?"\u2713 "+M("passung_ok"):M("passung_titel")}</span>
    ${n.map(a=>`<span style="border:1px solid ${a.col};color:${a.ok?"#fff":a.col};background:${a.ok?a.col:"transparent"};border-radius:999px;padding:1px 7px">${a.ok?"\u2713 ":""}${be(a.txt)}</span>`).join("")}
  </div>`+(i.wahl.hinweis&&!r?`<p style="font-size:10px;color:#8b94ab;margin:2px 0 0">${X(i.wahl.hinweis)}</p>`:"")}var Zf={hoch:{icon:"\u25CF\u25CF\u25CF",farbe:"#0e8f7e"},mittel:{icon:"\u25CF\u25CF\u25CB",farbe:"#b3831d"},tief:{icon:"\u25CF\u25CB\u25CB",farbe:"#8b94ab"}};function ev(i){let e=i.stelle;if(!e)return"";let t=Zf[e.lohnQ]||Zf.mittel,n=s=>`<ul style="margin:2px 0 0;padding-left:16px">${s.map(r=>`<li style="margin:2px 0">${be(X(r))}</li>`).join("")}</ul>`;return`<details class="stelle"><summary>\u{1F4BC} ${M("stelle_titel")}: <b>${be(X(e.titel))}</b></summary>
    <div class="stellebody">
      <div class="srow"><span>${M("stelle_pensum")}</span><div>${be(X(e.pensum))}</div></div>
      <div class="srow"><span>${M("stelle_wo")}</span><div>${be(X(e.wo))}</div></div>
      <div class="srow"><span>${M("stelle_aufgaben")}</span><div>${n(e.aufgaben)}</div></div>
      <div class="srow"><span>${M("stelle_anforderungen")}</span><div>${n(e.anforderungen)}</div></div>
      <div class="srow"><span>${M("stelle_lohn")}</span><div>${be(X(e.lohn))}
        <div class="sq" style="color:${t.farbe}" title="${be(X(e.lohnBeleg))}">${t.icon} ${M("lohnq_"+e.lohnQ)} \u2014 ${be(X(e.lohnBeleg))}</div></div></div>
      <div class="srow"><span>${M("stelle_wann")}</span><div>${be(X(e.wann))}</div></div>
    </div></details>`}function tv(i){if(!i.wahl)return null;let e=is(),t=ss(),n=Ji(),s=0,r=0;return i.wahl.r&&(s++,e.r===i.wahl.r&&r++),i.wahl.sp&&(s++,r+=Math.min(1,(t.counts[i.wahl.sp]||0)/4)),i.wahl.wp&&(s+=.7,Rs()===i.wahl.wp&&(r+=.7)),n&&s>0&&(s+=.7,(n.pfade||[]).includes(i.id)&&(r+=.7)),s?r/s:null}function co(i,e){let t=V.kompetenzen.map(g=>g.id),n=t.map(g=>e[g]||0),s=t.map(g=>i.w[g]||0),r=n.reduce((g,_)=>g+_,0)/n.length,a=s.reduce((g,_)=>g+_,0)/s.length,o=0,c=0,l=0;for(let g=0;g<n.length;g++){let _=n[g]-r,f=s[g]-a;o+=_*f,c+=_*_,l+=f*f}let u=((c&&l?o/(Math.sqrt(c)*Math.sqrt(l)):0)+1)/2,d=tv(i),p=d===null?u:.62*d+.38*u;return Math.max(0,Math.min(100,Math.round(p*100)))}var Ga=null;function nv(i){if(!Ga){Ga={};for(let e of V.slots){let{komp:t}=Bt(e);for(let n of[...t.fa||[],...t.ki||[],...t.fu||[]])Ga[n]=Math.max(Ga[n]||0,e.stufe)}}return Ga[i]||0}function md(i){return i.ziel?Object.entries(i.ziel).map(([e,t])=>({id:e,ziel:Math.min(t,nv(e)),ist:Pi(e)})).filter(e=>e.ist<e.ziel).sort((e,t)=>t.ziel-t.ist-(e.ziel-e.ist)):[]}function yc(){let{score:i,max:e}=jn(),t={};V.kompetenzen.forEach(f=>t[f.id]=e[f.id]?i[f.id]/e[f.id]:0);let n=document.getElementById("profilList"),s=`<p style="font-size:11px;color:#5b6478;margin:2px 6px 6px;line-height:1.45">${M("karriere_info")}</p>`;s+=J_(!1);let r={};(window.KARRIERE.pfade||[]).forEach(f=>r[f.id]=co(f,t));let a=Object.values(r),o=Math.max(1,...a),c=[...window.KARRIERE.pfade||[]].sort((f,m)=>r[m.id]-r[f.id]),l=5,h=br?[]:c.slice(l),u=br?c:c.slice(0,l);if(Mi&&!br){let f=h.find(m=>m.id===Mi);f&&(h=h.filter(m=>m.id!==Mi),u=[...u,f].sort((m,v)=>r[v.id]-r[m.id]))}for(let f of u){let m=Object.values(f.w).reduce((P,N)=>P+N,0),v=Math.round(Object.entries(f.w).reduce((P,[N,H])=>P+H*(t[N]||0),0)/m*100),y=r[f.id],x=y>=o-1&&a.filter(P=>P>=o-1).length<=3,E=V.slots.filter(P=>!Ne(P.slot)).map(P=>{let{komp:N,haupt:H}=Bt(P),J=[...N.fa||[],...N.ki||[],...N.fu||[]].reduce((W,Q)=>W+(f.w[Q]||0)*((H||[]).includes(Q)?2:1),0);return{s:P,v:J,ok:ui(P).ok}}).filter(P=>P.v>0).sort((P,N)=>N.ok-P.ok||N.v-P.v).slice(0,3),w=md(f),C=f.ziel?`<details style="margin:4px 0 0"><summary style="cursor:pointer;font:700 10.5px var(--font);color:#5b6478">\u{1F3AF} ${M("soll_titel")}</summary>
      ${w.length?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin:4px 0"><span style="font-size:10px;color:#5b6478">${M("gap_titel")}:</span>${w.map(P=>{let N=Nt[P.id],H=N?V.felder[N.feld]:null;return`<span style="font-size:10px;border:1px solid ${H?H.farbe:"#b9c2d9"};color:${H?H.farbe:"#5b6478"};border-radius:999px;padding:1px 7px" title="${N?be(X(N.name)):""}">${P.id} ${P.ist}\u2192${P.ziel}</span>`}).join("")}</div>`:`<p style="font-size:10.5px;color:var(--ok);margin:4px 0">\u2713 ${M("gap_ok")}</p>`}</details>`:"",D=f.roadmap&&f.roadmap.length?`<details style="margin:3px 0 0"><summary style="cursor:pointer;font:700 10.5px var(--font);color:#5b6478">\u{1F680} ${M("roadmap_titel")}</summary>
      <ol style="font-size:10.5px;line-height:1.5;padding-left:16px;margin:4px 0">${f.roadmap.map(P=>`<li style="margin:3px 0"><b>${X(P.t)}</b> \u2014 ${X(P.d)}</li>`).join("")}</ol></details>`:"";s+=`<div class="pfad${x?" toppfad":""}" data-detail="${f.id}">
      <div class="phead"><span>${f.icon}</span><span>${X(f.name)}</span><span class="pct" title="${M("fit_hint")}">${y}%</span></div>
      <div class="phint">${X(f.hint)}</div>
      <div class="track" title="${M("fit_hint")}"><div class="fill" style="width:${y}%;background:linear-gradient(90deg,#0e8f7e,#0028a5)"></div></div>
      <div class="pmeta">${M("fit_label")}: <b>${y}%</b> \xB7 ${M("fortschritt_label")}: ${v}%</div>
      ${Q_(f)}
      ${ev(f)}
      ${C}
      ${D}
      ${E.length?`<div class="pnext">${M("pfad_next")} ${E.map(P=>{let N=Et(P.s).split(",")[0];return`<button data-slot="${P.s.slot}" title="${Et(P.s).replace(/"/g,"&quot;")}">${N.length>34?N.slice(0,33)+"\u2026":N}</button>`}).join("")}</div>`:""}
    </div>`}if(h.length){s+=`<div class="restliste"><p class="restlbl">${M("karr_weitere").replace("{n}",h.length)}</p>`;for(let f of h){let m=r[f.id];s+=`<button class="restzeile" data-mehr="${f.id}" title="${be(X(f.hint))}">
        <span class="rico">${f.icon}</span><span class="rname">${be(X(f.name))}</span>
        <span class="rtrack"><span class="rfill" style="width:${m}%"></span></span>
        <span class="rpct">${m}%</span></button>`}s+=`<button class="ghostbtn restalle" data-alle>${M("karr_alle")}</button></div>`}else c.length>l&&(s+=`<button class="ghostbtn restalle" data-weniger style="margin:6px 4px">${M("karr_weniger")}</button>`);s+=`<button class="ghostbtn" data-waswenn style="margin:8px 4px 0;width:calc(100% - 8px)">\u{1F500} ${M("wenn_titel")}</button>`,s+=`<button class="ghostbtn" data-steckbrief style="margin:6px 4px 8px;width:calc(100% - 8px)">\u{1F5A8} ${M("karriere_pdf")}</button>`,s+=Z_(),n.innerHTML=s,n.querySelectorAll(".pnext button").forEach(f=>f.onclick=()=>Ci(f.dataset.slot)),n.querySelectorAll("[data-mehr]").forEach(f=>f.onclick=()=>{if(Mi=Mi===f.dataset.mehr?null:f.dataset.mehr,br=!1,yc(),Mi){let m=n.querySelector(`[data-detail="${Mi}"]`);m&&m.scrollIntoView({block:"nearest",behavior:_m?"auto":"smooth"})}});let d=n.querySelector("[data-alle]");d&&(d.onclick=()=>{br=!0,Mi=null,yc()});let p=n.querySelector("[data-weniger]");p&&(p.onclick=()=>{br=!1,Mi=null,yc(),n.scrollTop=0});let g=n.querySelector("[data-steckbrief]");g&&(g.onclick=iv);let _=n.querySelector("[data-waswenn]");_&&(_.onclick=zm)}function iv(){let{score:i,max:e}=jn(),t={};V.kompetenzen.forEach(_=>t[_.id]=e[_.id]?i[_.id]/e[_.id]:0);let n=new Date().toLocaleDateString(R.lang==="de"?"de-CH":"en-GB"),s=(window.KARRIERE.pfade||[]).map(_=>{let f=Object.values(_.w).reduce((E,w)=>E+w,0),m=Math.round(Object.entries(_.w).reduce((E,[w,C])=>E+C*(t[w]||0),0)/f*100),v=co(_,t),y=Object.entries(_.w).map(([E,w])=>({id:E,v:w*(t[E]||0)})).sort((E,w)=>w.v-E.v).slice(0,3).filter(E=>E.v>0),x=V.slots.filter(E=>!Ne(E.slot)).map(E=>{let{komp:w,haupt:C}=Bt(E),P=[...w.fa||[],...w.ki||[],...w.fu||[]].reduce((N,H)=>N+(_.w[H]||0)*((C||[]).includes(H)?2:1),0);return{s:E,v:P}}).filter(E=>E.v>0).sort((E,w)=>w.v-E.v).slice(0,3);return{p:_,ready:m,fit:v,traeger:y,cand:x}}).sort((_,f)=>f.fit-_.fit||f.ready-_.ready),r=is(),a=ss(),o="";for(let{p:_,ready:f,fit:m,traeger:v,cand:y}of s){let x=md(_),E=_.ziel?x.length?`<p style="font-size:10.5px;margin:2px 0"><b>\u{1F3AF} ${M("gap_titel")}:</b> ${x.map(D=>{let P=Nt[D.id];return`${D.id} ${P?X(P.name):""} (${M("stufe")} ${D.ist}\u2192${D.ziel})`}).join(" \xB7 ")}</p>`:`<p style="font-size:10.5px;margin:2px 0;color:#0a7d40"><b>\u2713 ${M("gap_ok")}</b></p>`:"",w=_.wahl&&_.wahl.hinweis?`<p style="font-size:10.5px;margin:2px 0"><b>\u{1F9ED} ${M("passung_titel")}</b> ${X(_.wahl.hinweis)}</p>`:"",C=_.roadmap&&_.roadmap.length?`<p style="font-size:10.5px;margin:5px 0 2px"><b>\u{1F680} ${M("roadmap_titel")}:</b></p>
         <ol style="font-size:10.5px;line-height:1.55;margin:0 0 2px;padding-left:18px">${_.roadmap.map(D=>`<li style="margin:2px 0"><b>${X(D.t)}</b> \u2014 ${X(D.d)}</li>`).join("")}</ol>`:"";o+=`<div style="border:1.5px solid #dbe1ef;border-radius:12px;padding:10px 14px;margin:8px 0;page-break-inside:avoid">
      <div style="display:flex;align-items:center;gap:8px"><span style="font-size:17px">${_.icon}</span>
        <b style="font-size:13px;flex:1">${X(_.name)}</b>
        <b style="color:#0e8f7e;font-variant-numeric:tabular-nums">${m}%</b></div>
      <div style="height:8px;border-radius:4px;background:#e8ebf4;overflow:hidden;margin:5px 0"><span style="display:block;height:100%;width:${m}%;background:linear-gradient(90deg,#0e8f7e,#0028a5)"></span></div>
      <p style="font-size:10px;color:#5b6478;margin:0 0 4px">${M("fit_label")}: <b>${m}%</b> \xB7 ${M("fortschritt_label")}: ${f}%</p>
      <p style="font-size:10.5px;color:#5b6478;margin:2px 0 5px">${X(_.hint)}</p>
      ${v.length?`<p style="font-size:10.5px;margin:2px 0"><b>${M("steck_traeger")}</b> ${v.map(D=>{let P=Nt[D.id];return`${D.id} ${X(P.name)} (${Math.round((t[D.id]||0)*100)}%)`}).join(" \xB7 ")}</p>`:""}
      ${w}
      ${E}
      ${y.length?`<p style="font-size:10.5px;margin:2px 0"><b>${M("steck_next")}</b> ${y.map(D=>Et(D.s).split(",")[0]).join(" \xB7 ")}</p>`:""}
      ${C}
    </div>`}let c=s[0],l=`<div style="border:1.5px solid #dbe1ef;border-radius:12px;padding:8px 14px;margin:8px 0;font-size:11.5px;line-height:1.6">
    <b>\u{1F9ED} ${M("richtung_titel")}</b><br>
    ${M("richtung_bsc")}: ${r.r?`<b style="color:${V.richtungen[r.r].farbe}">${V.richtungen[r.r].icon} ${X(V.richtungen[r.r].kurz)}</b>`:M("richtung_keine")}<br>
    ${M("richtung_msc")}: ${a.total?Object.entries(a.counts).filter(([,_])=>_>0).map(([_,f])=>`<b style="color:${V.schwerpunkte[_].farbe}">${_} ${f}/6</b>`).join(" \xB7 ")+(a.dom?"":` (${M("msc_mix")})`):"\u2014"}
    ${Rs()&&bt[Rs()]?`<br>${M("kat_wahlpflicht")}: <b>${X(bt[Rs()].titel)}</b>`:""}
    ${Ji()?`<br>${M("ba_chip")}: <b>${((V.baFormen||{})[Ji().form]||{}).icon||""} ${be(X(Ji().name))}</b>`:""}
    ${Cr()?`<br>${M("artefakt")} <b>${Cr().icon} ${be(X(Cr().name))}</b>`:""}
  </div>`,h=c&&c.p.soll?`<div style="page-break-inside:avoid">${Cm(i,e,230,c.p.soll).replace("max-width:230px","max-width:300px")}
       <p style="text-align:center;font-size:10px;color:#5b6478;margin:0 0 6px">${M("soll_legende")} (${c.p.icon} ${X(c.p.name)})</p></div>`:"",u=(window.KARRIERE.lit||[]).length?`<h2>\u{1F4DA} ${R.lang==="de"?"Literatur & offizielle Quellen":"References & official sources"}</h2>
       <ul style="font-size:10px;line-height:1.55;padding-left:18px">${window.KARRIERE.lit.map(_=>`<li style="margin:3px 0">${_.apa}${_.url?` <a href="${_.url}" target="_blank" rel="noopener" style="color:#0028a5">${_.url.replace(/^https?:\/\//,"")}</a>`:""}</li>`).join("")}</ul>`:"",d="";for(let _ of["fa","ki","fu"])for(let f of V.kompetenzen.filter(m=>m.feld===_)){let m=Pi(f.id),v=eo(f.id,m);v&&(d+=`<p style="font-size:11px;margin:5px 0;page-break-inside:avoid">\xAB${v}\xBB <span style="color:#8b94ab;font-size:9.5px;white-space:nowrap">\u2014 ${f.id} ${X(f.name)}, ${M("stufe")} ${m}</span></p>`)}let p=`<!DOCTYPE html><html lang="${R.lang}"><head><meta charset="utf-8"><title>${M("steck_titel")}</title>
  <style>*{-webkit-print-color-adjust:exact !important;print-color-adjust:exact !important}
  body{font-family:"Helvetica Neue",Arial,sans-serif;color:#1c2333;max-width:780px;margin:24px auto;padding:0 16px}
  h1{color:#0028a5;font-size:23px} h2{color:#0028a5;font-size:15px;margin:18px 0 4px}
  .hint{font-size:10px;color:#5b6478;margin-top:16px;line-height:1.5}
  @media print {.noprint{display:none}}</style></head><body>
  <div class="noprint" style="float:right;text-align:right">
    <button onclick="print()" style="padding:10px 20px;border:0;background:#0028a5;color:#fff;border-radius:10px;cursor:pointer;font-weight:700;font-size:14px">\u{1F4BE} ${R.lang==="de"?"Als PDF speichern":"Save as PDF"}</button>
    <div style="font-size:10px;color:#5b6478;margin-top:4px">${R.lang==="de"?"Im Druckdialog \xABAls PDF sichern\xBB w\xE4hlen":"Choose 'Save as PDF' in the print dialog"}</div>
  </div>
  <h1>\u{1F4BC} ${M("steck_titel")} \u2014 ${be(R.name)||"\u2014"}</h1>
  <p style="font-size:12px;color:#5b6478">${M("passdatum")}: ${n} \xB7 BSc ${on("bsc")}/120 \xB7 MSc ${on("msc")}/120 ${M("ects")} \xB7 ${R.mode==="serious"?M("modus_serious"):M("modus_frei")}</p>
  <p style="font-size:11px;color:#5b6478;line-height:1.5">${M("karriere_info")}</p>
  ${l}
  ${h}
  ${o}
  ${d?`<h2>\u{1F4DD} ${M("steck_cv")}</h2>${d}`:""}
  ${u}
  <p class="hint">${X(V.meta.hinweis)} ${M("steck_fussnote")}</p>
  </body></html>`,g=window.open("about:blank");g&&g.document?(g.document.write(p),g.document.close()):wc("karrieresteckbrief.html",p,"text/html"),SND.pick()}function nn(i=[]){if(document.getElementById("ptabProfil").classList.toggle("on",Pr==="profil"),document.getElementById("ptabKarriere").classList.toggle("on",Pr==="karriere"),Pr==="karriere"){yc();return}if(es){rv(es);return}let{score:e,max:t}=jn(),n=document.getElementById("profilList"),s=`<div class="ects-summary">
    <div class="box"><b>${on("bsc")}</b><span>BSc / 120 ${M("ects")}</span></div>
    <div class="box"><b>${on("msc")}</b><span>MSc / 120 ${M("ects")}</span></div>
  </div><div class="donuts">`;for(let a of["fa","ki","fu"]){let o=V.felder[a],c=V.kompetenzen.filter(d=>d.feld===a).map(d=>d.id),l=c.reduce((d,p)=>d+e[p],0),h=c.reduce((d,p)=>d+t[p],0),u=h?Math.round(l/h*100):0;s+=`<div class="donut"><div class="ring" style="background:conic-gradient(${o.farbe} ${u*3.6}deg, #e8ebf4 0)"><b>${u}%</b></div><span>${a==="fa"?"Fach":a==="ki"?"KI":"Future"}</span></div>`}s+="</div>",s+=Cm(e,t);for(let a of["fa","ki","fu"]){let o=V.felder[a];s+=`<div class="kfeld"><span class="fdot" style="background:${o.farbe}"></span>${X(o.name)}</div>`;for(let c of V.kompetenzen.filter(l=>l.feld===a)){let l=t[c.id]?Math.round(e[c.id]/t[c.id]*100):0;s+=`<button class="kbar ${i.includes(c.id)?"bump":""}" data-k="${c.id}"><div class="klabel"><span><span class="kid">${c.id}</span>${X(c.name)}</span><span>${l}%</span></div>
        <div class="track"><div class="fill" style="background:${o.farbe};width:${l}%"></div></div></button>`}}let r=n.scrollTop;n.innerHTML=s,n.scrollTop=r,n.querySelectorAll(".kbar").forEach(a=>a.onclick=()=>{es=a.dataset.k,SND.pick(),nn()})}document.getElementById("ptabProfil").onclick=()=>{Pr="profil",es=null,nn()};document.getElementById("ptabKarriere").onclick=()=>{Pr="karriere",es=null,SND.pick(),nn()};var sv=.4;function Pi(i){let e=s=>{let{komp:r}=Bt(s);return[...r.fa||[],...r.ki||[],...r.fu||[]].includes(i)},t=s=>{let{komp:r}=om(s);return[...r.fa||[],...r.ki||[],...r.fu||[]].includes(i)},n=0;for(let s=1;s<=4;s++){let r=0,a=0;for(let o of V.slots)o.stufe===s&&(t(o)&&(r+=td(o.ects)),Ne(o.slot)&&e(o)&&(a+=td(o.ects)));r>0&&a/r>=sv&&(n=s)}return n}function Im(i){let e=Nt[i],t=V.felder[e.feld],{score:n,max:s}=jn(),r=s[i]?Math.round(n[i]/s[i]*100):0,a=[];for(let u of V.slots){let{komp:d,haupt:p}=Bt(u);[...d.fa||[],...d.ki||[],...d.fu||[]].includes(i)&&a.push({slot:u,haupt:(p||[]).includes(i),built:Ne(u.slot),w:((p||[]).includes(i)?2:1)*u.ects})}a.sort((u,d)=>d.built-u.built||d.w-u.w);let o=a.filter(u=>u.built),c=a.filter(u=>!u.built).sort((u,d)=>ui(d.slot).ok-ui(u.slot).ok||d.w-u.w).slice(0,4),l=Pi(i),h=u=>{let d=V.gruppen[u.slot.gruppe].farbe;return`<button class="modrow ${u.built?"builtrow":""}" data-slot="${u.slot.slot}" style="border:0;width:100%;text-align:left;cursor:pointer;background:${u.built?"#eef7f1":"transparent"}">
      <span class="mdot" style="background:${d}"></span>
      <span style="flex:1">${Et(u.slot)}</span>
      ${u.haupt?`<span class="haupt-tag" title="${M("hauptkomp")}">\u2605</span>`:""}
      <span style="color:#8b94ab;font-variant-numeric:tabular-nums">${u.slot.ects}</span>
    </button>`};return`<div class="kdetail">
      <h4><span style="color:${t.farbe}">${i}</span> ${X(e.name)}</h4>
      <p class="ich">\xAB${X(e.ich)}\xBB</p>
      <div class="kbar" style="cursor:default"><div class="klabel"><span>${X(t.name)}</span><span>${r}%</span></div>
        <div class="track"><div class="fill" style="background:${t.farbe};width:${r}%"></div></div></div>
      <div class="subhead">${M("stufe_erreicht")}</div>
      <div class="stufen">${[1,2,3,4].map(u=>`<span class="sdot ${l>=u?"on":""}" title="${X(V.stufen[u-1].name)}">${u}</span>`).join("")}
        <span style="font-size:10.5px;color:#5b6478;margin-left:4px">${l?X(V.stufen[l-1].name):"\u2014"}</span></div>
      ${ov(e,n,s)}
      <div class="subhead">${M("k_aufgebaut")} (${o.length})</div>
      ${o.length?o.map(h).join(""):`<p style="font-size:11.5px;color:#8b94ab;margin:2px 6px">${M("k_keine")}</p>`}
      ${av(i,l)}
      ${lv(i,o)}
      ${c.length?`<div class="subhead">${M("k_naechste")}</div>`+c.map(h).join(""):""}
    </div>`}function Pm(i,e){i.querySelectorAll(".modrow").forEach(s=>s.onclick=()=>Ci(s.dataset.slot));let t=i.querySelector("[data-cvcopy]");t&&(t.onclick=async()=>{try{await navigator.clipboard.writeText(t.dataset.cvcopy)}catch{}t.textContent="\u2713 "+M("cv_copied"),SND.pick()});let n=i.querySelector("[data-cvai]");n&&(n.onclick=async()=>{let s=i.querySelector("[data-cvrole]").value.trim();if(!s)return;let r=i.querySelector("[data-cvaiout]");r.style.display="flex",r.querySelector("p").textContent=M("ai_wartet");try{let a=eo(e,Pi(e)),o=await ju(`Formuliere GENAU EINEN CV-tauglichen Satz (${R.lang==="de"?"Deutsch, Schweizer Rechtschreibung":"English"}, dritte Person ohne Subjekt, keine \xDCbertreibung) f\xFCr die Kompetenz \xAB${X(Nt[e].name)}\xBB \u2014 zugeschnitten auf diese Zielrolle: ${s}. Ausgangsbaustein: \xAB${a}\xBB. Nur der Satz, nichts anderes.`);r.querySelector("p").textContent="\xAB"+o.replace(/^«|»$/g,"")+"\xBB",r.querySelector("[data-cvaicopy]").onclick=async()=>{try{await navigator.clipboard.writeText(o)}catch{}SND.pick()}}catch{r.querySelector("p").textContent=M("tutor_err")}})}function rv(i){if(!Nt[i]){es=null,nn();return}let t=document.getElementById("profilList");t.innerHTML=`<button class="kdetail-back">${M("zurueck")}</button>`+Im(i),t.querySelector(".kdetail-back").onclick=()=>{es=null,nn()},Pm(t,i)}function eo(i,e){let n=(window.KARRIERE&&window.KARRIERE.cv||{})[i];if(!n||!e)return null;let s=n[e]||n[String(e)]||(Array.isArray(n.stufen)?n.stufen[e-1]:null);return s?X(s):null}function av(i,e){let t=eo(i,e);if(!t)return"";let n=vc?`<div style="display:flex;gap:6px;margin:2px 4px 6px">
    <input data-cvrole type="text" placeholder="${M("ai_cv_ph")}" style="flex:1;border:1.5px solid #dbe1ef;border-radius:8px;padding:6px 9px;font:500 11px var(--font)">
    <button class="ghostbtn" data-cvai style="padding:6px 9px;font-size:10.5px">${M("ai_cv_btn")}</button>
  </div><div data-cvaiout style="display:none" class="cvrow"><p></p><button data-cvaicopy>\u{1F4CB}</button></div>`:"";return`<div class="subhead">\u{1F4DD} ${M("cv_titel")} (${M("stufe")} ${e})</div>
    <div class="cvrow"><p>\xAB${t}\xBB</p><button data-cvcopy="${t.replace(/"/g,"&quot;")}">\u{1F4CB} ${M("cv_copy")}</button></div>${n}`}function Lm(i,e,t){let n=i.proxy.map(s=>t[s]?e[s]/t[s]:0);return Math.round(n.reduce((s,r)=>s+r,0)/Math.max(1,n.length)*100)}function ov(i,e,t){if(!i.sub||!i.sub.length)return"";let n=V.felder.fu,s=`<div class="subhead">\u{1F9ED} ${M("fs12_titel")} (${i.sub.length})</div>
    <p style="font-size:10px;color:#8b94ab;margin:0 6px 4px">${M("fs12_hint")}</p>`;for(let r of i.sub){let a=Lm(r,e,t);s+=`<div class="kbar" style="cursor:default"><div class="klabel"><span><span class="kid">${r.id}</span>${X(r.name)}</span><span>${a}%</span></div>
      <div class="track"><div class="fill" style="background:${n.farbe};width:${a}%"></div></div></div>`}return s}function lv(i,e){let t=[];for(let n of e){let s=Cs(n.slot);R.quiz[s]&&t.push(`<div class="evrow"><span class="evic">\u{1F6A9}</span><span>${M("ev_quiz")}: ${Et(n.slot).split(",")[0]}</span></div>`);let r=R.quests[n.slot.slot];r&&r.done&&t.push(`<div class="evrow"><span class="evic">\u2726</span><span>${M("ev_quest")}: ${Et(n.slot).split(",")[0]}${r.note?` \u2014 <i>\xAB${be(r.note)}\xBB</i>`:""}</span></div>`)}return t.length?`<div class="subhead">\u{1F5C2} ${M("evidenz_titel")} (${t.length})</div>`+t.join(""):""}var en=document.getElementById("card"),wr="zukunft",to="klassisch",no="DeNC",Ai=null,Tr=null,Ar=null,Xa=null;function kr(i){let e=ut[i];if(!e)return;xn=i;let t=Ne(i),n=R.placed[R.mode][i]||{};to=n.stil||to,no=n.sp||no,Ai=n.opt||(e.optionen?e.optionen[0]:null),Tr=n.thema||null,Ar=n.frage||null,Xa=n.artefakt||null;let{kat:s}=Bt(e);document.getElementById("cardDot").style.background="#"+hd(e).getHexString(),document.getElementById("cardTitle").textContent=Et(e),document.getElementById("cardCode").textContent=`${n.opt||e.code} \xB7 ${X(V.gruppen[e.gruppe].name)}`;let r=(s||"B").split(/[+/]/).map(o=>o.trim()).filter(o=>V.pruefungslogik[o]),a=e.kategorie==="Wahlpflicht"?`<span class="badge" style="background:#b3831d">\u2605 ${M("kat_wahlpflicht")}</span>`:e.kategorie==="Wahl"?`<span class="badge" style="background:#6b7a99">\u2606 ${M("kat_wahl")}</span>`:`<span class="badge" style="background:#3c4356">${M("kat_pflicht")}</span>`;document.getElementById("cardBadges").innerHTML=`<span class="badge" style="background:#5b6478">${e.ects} ${M("ects")}</span>`+a+`<span class="badge" style="background:#39415a">${M("stufe")} ${e.stufe}</span>
     <span class="badge" style="background:#7a86a3">${M(e.rhythmus==="beide"?"beide":e.rhythmus.toLowerCase())}${e.sem2?" \xB7 "+M("zweisem"):""}</span>`+r.map(o=>`<span class="badge" style="background:${V.pruefungslogik[o].farbe}">${X(V.pruefungslogik[o].name)}</span>`).join(""),ts(e),hi(e),Dm(e),en.classList.add("open"),document.body.classList.add("card-open"),Ya(R.cardSize||"m",!1)}function Dm(i){let e=document.getElementById("fbRow");if(!e)return;if(Gt.active){e.style.display="none";return}e.style.display="flex";let t=(R.fb||{})[i.slot]||{};e.innerHTML=`<span class="fblbl">\u{1F6A6} ${M("fb_frage")}</span>
    ${["g","y","r"].map(s=>`<button class="fbamp ${t.a===s?"on":""}" data-amp="${s}" title="${M("fb_"+s)}" aria-label="${M("fb_"+s)}">${s==="g"?"\u{1F7E2}":s==="y"?"\u{1F7E1}":"\u{1F534}"}</button>`).join("")}
    ${t.a?`<input type="text" data-fbnote maxlength="200" placeholder="${M("fb_ph")}" value="${be(t.note)}">`:""}`,e.querySelectorAll(".fbamp").forEach(s=>s.onclick=()=>{R.fb||(R.fb={});let r=R.fb[i.slot]||{};r.a===s.dataset.amp?delete R.fb[i.slot]:(R.fb[i.slot]={a:s.dataset.amp,note:r.note||"",ts:new Date().toISOString().slice(0,10)},r.a||_t(M("fb_danke"))),tt(),SND.pick(),Dm(i)});let n=e.querySelector("[data-fbnote]");n&&(n.onchange=()=>{R.fb&&R.fb[i.slot]&&(R.fb[i.slot].note=n.value.trim().slice(0,200),tt())})}function Ps(){en.classList.remove("open"),document.body.classList.remove("card-open"),xn=null,tn()}document.getElementById("cardClose").onclick=()=>{Ps(),Ii()};var Ka=["s","m","l"],cv={s:.46,m:.7,l:1};function Ya(i,e){Ka.includes(i)||(i="m"),en.dataset.size=i,en.style.removeProperty("--ch");let t=document.getElementById("cardSize");t&&(t.textContent=i==="l"?"\u2921":"\u2922",t.setAttribute("aria-label",M(i==="l"?"aria_karte_klein":"aria_karte_groesse")),t.title=M(i==="l"?"aria_karte_klein":"aria_karte_groesse")),e!==!1&&(R.cardSize=i,tt()),requestAnimationFrame(Rr)}function Ou(i){let e=Ka.indexOf(en.dataset.size||"s");Ya(Ka[Math.max(0,Math.min(Ka.length-1,e+i))])}function Rr(){let i=document.getElementById("cardBodyWrap"),e=document.getElementById("cardBody");if(!i||!e)return;let t=e.scrollHeight-e.scrollTop-e.clientHeight;i.classList.toggle("more",t>8),en.classList.toggle("hasmore",e.scrollHeight-e.clientHeight>8)}{let i=document.getElementById("cardGrip"),e=document.getElementById("cardBody"),t=document.getElementById("cardSize");e&&e.addEventListener("scroll",Rr,{passive:!0}),window.addEventListener("resize",Rr),en.addEventListener("transitionend",s=>{s.propertyName==="height"&&Rr()}),t&&(t.onclick=()=>{Ou(en.dataset.size==="l"?-2:1),SND.pick()});let n=en.querySelector(".head");if(n&&n.addEventListener("dblclick",s=>{s.target.closest("button")||Ya(en.dataset.size==="s"?"m":"s")}),i){let s=0,r=0,a=!1,o=()=>window.innerHeight-76;i.addEventListener("pointerdown",l=>{a=!0,s=l.clientY,r=en.getBoundingClientRect().height,en.classList.add("dragging");try{i.setPointerCapture(l.pointerId)}catch{}l.preventDefault()}),i.addEventListener("pointermove",l=>{if(!a)return;let h=Math.max(180,Math.min(o(),r+(s-l.clientY)));en.style.setProperty("--ch",h+"px"),Rr()});let c=()=>{if(!a)return;a=!1,en.classList.remove("dragging");let l=en.getBoundingClientRect().height,h="s",u=1/0;for(let d of Ka){let p=Math.min(o(),cv[d]*window.innerHeight);Math.abs(p-l)<u&&(u=Math.abs(p-l),h=d)}Ya(h)};i.addEventListener("pointerup",c),i.addEventListener("pointercancel",c),i.addEventListener("keydown",l=>{l.key==="ArrowUp"?(Ou(1),l.preventDefault()):l.key==="ArrowDown"?(Ou(-1),l.preventDefault()):(l.key==="Enter"||l.key===" ")&&(Ya(en.dataset.size==="s"?"m":"s"),l.preventDefault())})}}document.getElementById("cardTabs").addEventListener("click",i=>{let e=i.target.closest("button");if(!e)return;wr=e.dataset.tab,document.querySelectorAll("#cardTabs button").forEach(n=>n.classList.toggle("on",n===e)),xn&&ts(ut[xn]);let t=document.getElementById("cardBody");t&&(t.scrollTop=0),requestAnimationFrame(Rr)});function hv(i){let{komp:e,haupt:t}=Bt(i);return'<div class="komp-pills">'+[...e.fa||[],...e.ki||[],...e.fu||[]].map(s=>{let r=Nt[s];if(!r)return"";let a=V.felder[r.feld];return`<span class="kpill ${t.includes(s)?"haupt":""}" style="border-color:${a.farbe};color:${a.farbe}">${s} ${X(r.name)}</span>`}).join("")+"</div>"}function km(i,e){let{komp:t,haupt:n}=Bt(i),s={F:t.fa||[],K:t.ki||[],S:t.fu||[]},r=[];for(let a of e||[]){let o=s[a]||[],c=o.filter(l=>(n||[]).includes(l));(c.length?c:o.slice(0,1)).forEach(l=>{r.includes(l)||r.push(l)})}return r}function uv(i,e){return km(i,e.b).map(n=>{let s=Nt[n];if(!s)return"";let r=V.felder[s.feld];return`<span class="lz-kid" style="color:${r.farbe};border-color:${r.farbe}" title="${X(s.name)}">${n}</span>`}).join("")}function dv(i){let{komp:e,haupt:t}=Bt(i),n=[...e.fa||[],...e.ki||[],...e.fu||[]],s=(t&&t.length?t:n).filter(o=>Nt[o]).slice(0,5);if(!s.length)return"";let r=s.map(o=>`${o} ${X(Nt[o].name)}`).join(", ");return`<p style="margin-top:8px;font-size:12px;color:#3c4356;line-height:1.5">${R.lang==="de"?`<b>Die Studierenden</b> bauen in diesem Modul vor allem folgende Kompetenzen auf: ${r}.`:`<b>Students</b> primarily build the following competences in this module: ${r}.`}</p>`}function pv(i){let e=(s,r,a)=>!r||!r.length?"":`<div class="kette"><span class="kettelbl">${a} ${s}</span>
      <ul>${r.map(o=>{let c=ut[o.slot];if(!c)return"";let l=Ne(o.slot);return`<li><button type="button" data-kette="${o.slot}" class="kettebtn${l?" gebaut":""}"
          title="${be(Et(c))}">${be(Et(c).split(",")[0])}</button>
          <span class="kettewas">${be(X(o.was))}</span></li>`}).join("")}</ul></div>`,t=e(M("kette_bautauf"),i.bautAuf,"\u2191"),n=e(M("kette_gebrauchtin"),i.gebrauchtIn,"\u2193");return!t&&!n?"":`<div class="kettenbox">${t}${n}</div>`}function ts(i){let e=ro(i),t=document.getElementById("cardBody"),n=`<p style="color:#5b6478;font-style:italic">${M("keine_texte")}</p>`;if(wr==="zukunft"){let s=V.baukasten&&V.baukasten.zuordnung[i.slot]||[],r=s.length?`<div style="margin-top:10px"><span style="font:700 11px var(--font);color:#5b6478">${M("baukasten_titel")}:</span>
      <span class="komp-pills" style="display:inline-flex;margin-left:4px">${s.map(a=>{let o=V.baukasten.defs[a];return o?`<span class="kpill" data-bk="${a}" role="button" tabindex="0" title="${X(o.kurz)}" style="border-color:#b9c2d9;cursor:pointer">${X(o.name)}</span>`:""}).join("")}</span></div>`:"";t.innerHTML=(e?`<p style="color:#5b6478;font-size:12px">${X(e.heute)}</p><p style="margin-top:6px">${X(e.zukunft)}</p>`:n)+dv(i)+hv(i)+pv(i)+r,t.querySelectorAll("[data-bk]").forEach(a=>a.onclick=()=>{let o=V.baukasten.defs[a.dataset.bk];o&&(_t(X(o.name)+": "+X(o.kurz)),SND.pick())}),t.querySelectorAll("[data-kette]").forEach(a=>a.onclick=()=>Ci(a.dataset.kette))}else if(wr==="lernziele")t.innerHTML=e&&e.lernziele&&e.lernziele.length?`<p style="font-size:10.5px;color:#8b94ab;margin:0 2px 6px">${M("lz_hint")}</p><ul style="list-style:none;padding-left:2px">${e.lernziele.map(s=>`<li style="margin:5px 0"><span class="lz-kids">${uv(i,s)}</span>${X(s)}</li>`).join("")}</ul>`:n;else if(wr==="ki"){let{kat:s}=Bt(i),r=(s||"B").split(/[+/]/).map(a=>a.trim()).filter(a=>V.pruefungslogik[a]);t.innerHTML=(e?`<p>${X(e.ki)}</p>`:n)+'<ul style="margin-top:8px">'+r.map(a=>`<li><b style="color:${V.pruefungslogik[a].farbe}">${X(V.pruefungslogik[a].name)}</b> \u2014 ${X(V.pruefungslogik[a].def)}</li>`).join("")+"</ul>"}else wr==="quest"&&mv(i,t,e,n)}var Jf={de:{ok:["Sauber hergeleitet! \u{1F9E0}","Signifikant richtig.","Das sitzt \u2014 weiter so!","Evidenzbasiert geantwortet. \u2713","Dein Hippocampus liefert."],no:["Fast! Schau dir das Warum an:","Guter Versuch \u2014 hier steckt der Denkfehler:","Kein Drama: Fehler = Lernmoment.","Knapp daneben \u2014 die Erkl\xE4rung hilft:","Das war der beliebteste Distraktor:"]},en:{ok:["Cleanly reasoned! \u{1F9E0}","Significantly correct.","That one stuck \u2014 keep going!","An evidence-based answer. \u2713","Your hippocampus delivers."],no:["Almost! Check the why:","Good try \u2014 here's the catch:","No drama: errors are learning moments.","Close \u2014 the explanation helps:","That was the most popular distractor:"]}},pt=null;function fv(i){let e=[...Array(i).keys()];for(let t=i-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function mv(i,e,t,n){let s=rd(i),r=Cs(i),a="";if(s&&s.length)if(R.quiz[r])a+=`<div class="quiz-done-banner">\u{1F6A9} ${M("quiz_bestanden")}</div>`;else{(!pt||pt.code!==r)&&(pt={code:r,offen:s.map((v,y)=>y),geloest:[],picked:null,order:null});let _=pt,f=_.offen[0],m=s[f];if((!_.order||_.order.length!==m.a.length)&&(_.order=fv(m.a.length)),a+=`<p style="font-weight:800;margin-bottom:2px">\u{1F9E9} ${M("quiz_titel")}</p>`,R.mode==="serious"&&!Ne(i.slot)&&(a+=`<p style="font-size:11px;color:#b35c00;margin-bottom:6px">${M("quiz_gate_hint")}</p>`),a+=`<div class="quiz-progress">${s.map((v,y)=>`<span class="qp ${_.geloest.includes(y)?"done":y===f?"cur":""}"></span>`).join("")}</div>`,a+=`<p style="font-size:10.5px;color:#5b6478">${M("quiz_offen").replace("{n}",_.offen.length)}</p>`,m.typ==="position"&&Array.isArray(m.pos)&&(a+=`<div class="posbox"><span class="poslbl">\u2696\uFE0F ${M("quiz_position")}</span>
          ${m.pos.map(v=>`<p class="pospos">${be(X(v))}</p>`).join("")}</div>`),a+=`<p class="quiz-q">${X(m.q)}</p>`,_.order.forEach(v=>{let y=m.a[v],x="";_.picked!==null&&(x=v===m.korrekt?"ok":v===_.picked?"no":""),a+=`<button class="quiz-a ${x}" data-ai="${v}" ${_.picked!==null?"disabled":""}>${X(y)}</button>`}),_.picked!==null){let v=_.picked===m.korrekt,y=Jf[R.lang]||Jf.de,x=(v?y.ok:y.no)[(f+m.korrekt)%5];a+=`<div class="quiz-erkl"><b>${v?"\u2705 ":"\u274C "}${x}</b><br>${X(m.erkl)}</div>`,vc&&!v&&(a+=`<button class="ghostbtn" data-qai style="margin-top:6px">${M("ai_quizhilfe")}</button><div data-qaiout class="quiz-erkl" style="display:none;margin-top:6px"></div>`),v||(a+=`<p style="font-size:10.5px;color:#b35c00;margin-top:6px">${M("quiz_spaeter")}</p>`),(_.offen.length>1||!v)&&(a+=`<button class="primary" style="margin-top:8px" data-qnext>${M("quiz_weiter")} \u2192</button>`)}}else R.mode==="serious"&&(a+=`<p style="font-size:11.5px;color:#8b94ab">${M("quiz_fehlt")}</p>`);let o=R.quests[i.slot]||{},c=t&&t.quest;a+=`<p style="font-weight:800;margin:12px 0 2px">\u2726 ${M("praxis_quest")}</p>`,a+=c?`<p><b>${X(c.titel)}</b></p><p style="margin-top:4px">${X(c.text)}</p>`:n,o.done&&(a+=`<p style="color:var(--ok);margin-top:8px"><b>\u2713 ${M("quest_abgeschlossen")}</b></p>`),a+=`<p class="qbeleg${hc(i)?" on":""}" data-qbeleg>${hc(i)?"\u2713 "+M("beleg_ja"):M("beleg_nein")}</p>`,a+=`<p style="font-weight:700;font-size:12px;margin:10px 0 3px">\u{1F4DD} ${M("notiz_titel")}</p>
    <textarea data-qnote rows="3" maxlength="500" placeholder="${M("notiz_ph")}" style="width:100%;border:1.5px solid #dbe1ef;border-radius:10px;padding:8px 10px;font:500 12px var(--font);resize:vertical">${be(o.note)}</textarea>
    <p data-qnotesaved style="font-size:10px;color:#8b94ab;margin:2px 0 0;visibility:hidden">\u2713 ${M("notiz_gespeichert")}</p>`,vc&&c&&(a+=`<details style="margin-top:10px"><summary style="cursor:pointer;font:700 12px var(--font);color:var(--blue)">${M("ai_feedback")}</summary>
      <textarea data-aiq rows="3" placeholder="${M("ai_feedback_ph")}" style="width:100%;margin-top:6px;border:1.5px solid #dbe1ef;border-radius:10px;padding:8px 10px;font:500 12px var(--font)"></textarea>
      <button class="primary" data-aiqbtn style="margin-top:6px">${M("ai_senden")}</button>
      <div data-aiqout class="quiz-erkl" style="display:none;margin-top:6px"></div></details>`),vc&&["400","402","403","501","502","511","s05","s06","s08"].includes(i.slot)&&qu&&(a+=`<button class="ghostbtn" data-aivig style="margin-top:10px">${M("ai_vignette")}</button>`),e.innerHTML=a;let h=e.querySelector("[data-aiqbtn]");h&&(h.onclick=async()=>{let _=e.querySelector("[data-aiq]"),f=e.querySelector("[data-aiqout]"),m=_.value.trim();if(m){f.style.display="block",f.textContent=M("ai_wartet");try{f.textContent=await ju(`Du bist Tutor:in im Psychologiestudium UZH. Gib formatives Feedback (${R.lang==="de"?"Deutsch, Schweizer Rechtschreibung":"English"}, max. 90 W\xF6rter, keine Note) auf die L\xF6sung einer \xDCbungsaufgabe. Nenne genau EINE St\xE4rke und EINEN konkreten Verbesserungspunkt, freundlich und fachlich pr\xE4zise.
Aufgabe (\xAB${X(c.titel)}\xBB): ${X(c.text)}
L\xF6sung der/des Studierenden: ${m}
Feedback:`)}catch{f.textContent=M("tutor_err")}}});let u=e.querySelector("[data-aivig]");u&&(u.onclick=()=>qu.open("vignette",i));let d=e.querySelector("[data-qnote]");if(d){let _=null;d.addEventListener("input",()=>{let f=R.quests[i.slot]||{done:!1,note:""};f.note=d.value.trim().slice(0,500),R.quests[i.slot]=f,tt(),clearTimeout(_),_=setTimeout(()=>{let m=e.querySelector("[data-qnotesaved]");m&&(m.style.visibility="visible",setTimeout(()=>{m.style.visibility="hidden"},1600)),Yu();let v=e.querySelector("[data-qbeleg]");v&&(v.className="qbeleg"+(hc(i)?" on":"")),v&&(v.textContent=hc(i)?"\u2713 "+M("beleg_ja"):M("beleg_nein"))},500)})}e.querySelectorAll(".quiz-a").forEach(_=>_.onclick=()=>{if(!pt||pt.picked!==null)return;let f=+_.dataset.ai,m=pt.offen[0],v=s[m];pt.picked=f;let y=f===v.korrekt;y?SND.quest():SND.err(),y&&!pt.geloest.includes(m)&&pt.geloest.push(m),y&&pt.offen.length===1&&(R.quiz[r]=!0,tt(),setTimeout(()=>{SND.fanfare();let x=kt[i.slot];x&&Ja(x.position.x,x.position.y+2.5,x.position.z,60,3),Ne(i.slot)?Ti(i.slot):ui(i).ok&&_t("\u{1F513} "+M("quiz_freigeschaltet")),Yu(),tn(),ts(i),hi(i)},900)),ts(i)});let p=e.querySelector("[data-qnext]");p&&(p.onclick=()=>{let _=pt.offen.shift();if(!pt.geloest.includes(_)){if(!pt.offen.length&&pt.geloest.length){let m=pt.geloest[Math.floor(Math.random()*pt.geloest.length)];pt.offen.push(m),pt.geloest=pt.geloest.filter(v=>v!==m)}pt.offen.push(_)}pt.picked=null,pt.order=null,ts(i)});let g=e.querySelector("[data-qai]");g&&(g.onclick=async()=>{let _=e.querySelector("[data-qaiout]");_.style.display="block",_.textContent=M("ai_wartet");let f=s[pt.i];try{_.innerHTML=(await ju(`Du bist Tutor:in im Psychologiestudium UZH. Eine Person hat diese Quizfrage falsch beantwortet. Erkl\xE4re das Konzept in 2 S\xE4tzen NEU (anders als die Standarderkl\xE4rung) und stelle dann GENAU EINE kurze \xDCbungsfrage dazu, gefolgt von \xABMusterantwort:\xBB und einer 1-Satz-Musterantwort. Sprache: ${R.lang==="de"?"Deutsch (Schweizer Rechtschreibung)":"English"}.
Frage: ${X(f.q)}
Richtige Antwort: ${X(f.a[f.korrekt])}
Gew\xE4hlte falsche Antwort: ${X(f.a[pt.picked])}`)).replace(/Musterantwort:([\s\S]*)$/i,(m,v)=>`<details style="margin-top:4px"><summary style="cursor:pointer;font-weight:700">${R.lang==="de"?"Musterantwort anzeigen":"Show model answer"}</summary>${v.trim()}</details>`)}catch{_.textContent=M("tutor_err")}})}function hi(i){let e=document.getElementById("cardActions");if(e.innerHTML="",Gt.active)return;let t=Ne(i.slot);if(i.optionen&&!t){let s=document.createElement("div");s.className="optpick",s.innerHTML=`<span>${M("optionwahl")}</span>`,i.optionen.forEach(r=>{let a=document.createElement("button");a.textContent=bt[r]?X(bt[r].titel):r,a.classList.toggle("on",Ai===r),a.onclick=()=>{Ai=r,hi(i),ts(i)},s.appendChild(a)}),e.appendChild(s)}if(i.schwerpunktwahl){let s=document.createElement("div");s.className="schwerpick",s.innerHTML=`<span>${M("schwerpunkt")}</span>`,Object.keys(V.schwerpunkte).forEach(r=>{let a=document.createElement("button");a.textContent=r,a.title=X(V.schwerpunkte[r].name),a.setAttribute("aria-label",X(V.schwerpunkte[r].name)),a.style.borderColor=V.schwerpunkte[r].farbe;let o=t?R.placed[R.mode][i.slot].sp||"DeNC":no;a.classList.toggle("on",o===r),a.onclick=()=>{t?(R.placed[R.mode][i.slot].sp=r,tt(),Ti(i.slot)):no=r,hi(i),tn()},s.appendChild(a)}),e.appendChild(s)}if(Ri[i.slot]){let s=document.createElement("div");s.className="schwerpick themapick",s.innerHTML=`<span>${M("thema")}</span>`,Ri[i.slot].forEach(a=>{let o=document.createElement("button");o.textContent=X(a.name),o.title=X((V.richtungen[a.r]||{}).kurz||a.name),o.style.borderColor=(V.richtungen[a.r]||{}).farbe||"#b9c2d9";let c=t?R.placed[R.mode][i.slot].thema||null:Tr;o.classList.toggle("on",c===a.id),o.onclick=()=>{t?(R.placed[R.mode][i.slot].thema=R.placed[R.mode][i.slot].thema===a.id?null:a.id,i.slot==="BA"&&(R.placed[R.mode].BA.frage=null),tt(),Ti(i.slot)):(Tr=Tr===a.id?null:a.id,i.slot==="BA"&&(Ar=null),vn&&qa(vn)),hi(i),tn(),nn()},s.appendChild(o)});let r=document.createElement("p");r.style.cssText="font-size:10px;color:#8b94ab;margin:2px 4px 0",r.textContent=M("thema_hint"),s.appendChild(r),e.appendChild(s)}if(i.slot==="BA"&&V.baFragen){let s=t?R.placed[R.mode].BA.thema||null:Tr;if(s&&V.baFragen[s]){let r=document.createElement("div");r.className="schwerpick themapick",r.innerHTML=`<span>${M("frage")}</span>`,V.baFragen[s].forEach(o=>{let c=(V.baFormen||{})[o.form]||{},l=document.createElement("button");l.textContent=`${c.icon||""} ${X(o.name)}`,l.title=X(c.name||o.name);let h=t?R.placed[R.mode].BA.frage||null:Ar;l.classList.toggle("on",h===o.id),l.onclick=()=>{t?(R.placed[R.mode].BA.frage=R.placed[R.mode].BA.frage===o.id?null:o.id,tt()):Ar=Ar===o.id?null:o.id,hi(i),nn()},r.appendChild(l)});let a=document.createElement("p");a.style.cssText="font-size:10px;color:#8b94ab;margin:2px 4px 0",a.textContent=M("frage_hint"),r.appendChild(a),e.appendChild(r)}{let r=document.createElement("div");r.className="schwerpick themapick",r.innerHTML=`<span>${M("artefakt")}</span>`,(V.baArtefakte||[]).forEach(o=>{let c=document.createElement("button");c.textContent=`${o.icon} ${X(o.name)}`,c.title=X(o.kurz);let l=t?R.placed[R.mode].BA.artefakt||null:Xa;c.classList.toggle("on",l===o.id),c.onclick=()=>{t?(R.placed[R.mode].BA.artefakt=R.placed[R.mode].BA.artefakt===o.id?null:o.id,tt(),Ti("BA")):Xa=Xa===o.id?null:o.id,hi(i)},r.appendChild(c)});let a=document.createElement("p");a.style.cssText="font-size:10px;color:#8b94ab;margin:2px 4px 0",a.textContent=M("artefakt_hint"),r.appendChild(a),e.appendChild(r)}}{let s=document.createElement("div");s.className="stilpick",s.innerHTML=`<span>${M("stil")}</span>`,V.stile.forEach(r=>{let a=document.createElement("button");a.textContent=X(r.name);let o=t?R.placed[R.mode][i.slot].stil||"klassisch":to;a.classList.toggle("on",o===r.id),a.onclick=()=>{t?(R.placed[R.mode][i.slot].stil=r.id,tt(),Ti(i.slot)):(to=r.id,vn&&qa(vn)),hi(i)},s.appendChild(a)}),e.appendChild(s)}if(R.mode==="serious"&&!t){let s=document.createElement("label");s.className="sw",s.innerHTML=`<input type="checkbox" ${R.bestanden[i.slot]?"checked":""}> <span>${M("bestanden")}</span>`,s.querySelector("input").onchange=r=>{R.bestanden[i.slot]=r.target.checked,tt(),tn(),vn&&qa(vn),hi(i)},e.appendChild(s)}let n=(i.empf||[]).filter(s=>!Ne(s));if(!t&&n.length){let s=document.createElement("div");s.className="reason",s.style.color="#b35c00",s.textContent=M("empf_hinweis")+n.map(r=>X(ut[r].titel).split(",")[0]).join(" \xB7 "),e.appendChild(s)}if(R.mode==="serious"&&!t){let s=rd(i),r=document.createElement("div");r.className="gatelist";let a=(o,c,l)=>{let h=document.createElement(l?"button":"span");h.className="gaterow"+(o?" ok":""),h.innerHTML=`<span class="gbox">${o?"\u2714":"\u25CB"}</span><span>${c}</span>`,l&&(h.onclick=l),r.appendChild(h)};a(!!R.bestanden[i.slot],M("gate_bestanden"),null),s&&a(hm(i),M("gate_quiz"),()=>{wr="quest",document.querySelectorAll("#cardTabs button").forEach(o=>o.classList.toggle("on",o.dataset.tab==="quest")),ts(i)}),e.appendChild(r)}if(t){let s=R.quests[i.slot]||{},r=document.createElement("button");if(r.className=s.done?"ghostbtn":"primary",r.textContent=s.done?M("quest_undone"):M("quest_done"),r.onclick=()=>{let a=R.quests[i.slot]||{done:!1,note:""};if(s.done)R.quests[i.slot]={done:!1,note:a.note||""},U_(kt[i.slot]),Ti(i.slot);else{R.quests[i.slot]={done:!0,note:a.note||""},ym(kt[i.slot],i),SND.quest();let o=kt[i.slot];Ja(o.position.x,o.position.y+2,o.position.z,40,2.5),Ti(i.slot)}tt(),tn(),hi(i),ts(i)},e.appendChild(r),["box","tower","wing","bay","slab","step"].includes(i.form)){let a=document.createElement("button");a.className="ghostbtn",a.textContent=i.form==="slab"||i.form==="step"?"\u{1F526} "+M("keller"):M("betreten"),a.onclick=()=>Bm(i.slot),e.appendChild(a)}{let a=document.createElement("button");a.className="ghostbtn",a.textContent=M("entfernen"),a.onclick=()=>Tm(i.slot),e.appendChild(a)}}else{let s=ui(i),r=document.createElement("button");if(r.className="primary",r.textContent=M("bauen"),r.disabled=!s.ok,r.onclick=()=>Fr(i),e.appendChild(r),!s.ok&&s.reason){let a=document.createElement("div");a.className="reason",a.textContent=s.reason,e.appendChild(a)}}}function Ti(i){let e=ut[i],t=kt[i];t&&(ns.remove(t),pd(t));let n=oo(e);ud(n,e),ns.add(n),kt[i]=n,Ec()}function gd(i){i==="serious"&&!R.seriousSeen&&(R.seriousSeen=!0,setTimeout(()=>alert(M("serious_erklaert")),150)),R.mode=i,tt(),document.getElementById("modeFrei").classList.toggle("on",i==="frei"),document.getElementById("modeSerious").classList.toggle("on",i==="serious"),Ii(),Ps(),lo(),tn(),nn(),_t(M(i==="serious"?"serious_info":"frei_info"))}document.getElementById("modeFrei").onclick=()=>gd("frei");document.getElementById("modeSerious").onclick=()=>gd("serious");typeof R.sound>"u"&&(R.sound=!0);SND.enabled=R.sound;var nd=document.getElementById("btnSound");nd.textContent=R.sound?"\u{1F50A}":"\u{1F507}";nd.onclick=()=>{R.sound=!R.sound,SND.enabled=R.sound,tt(),nd.textContent=R.sound?"\u{1F50A}":"\u{1F507}",R.sound&&SND.pick()};document.getElementById("btnLang").onclick=()=>{R.lang=R.lang==="de"?"en":"de",tt(),sd(),tn(),nn(),Ac(R.ansicht||"haus",!1),xn&&kr(xn),Nm()};var gv={menu:"modalMenu",help:"modalHelp",privacy:"modalPrivacy",about:"modalAbout",share:"modalShare",onboard:"modalOnboard",p0:"modalP0",minor:"modalMinor",bauhuette:"modalBauhuette",geraete:"modalGeraete",changelog:"modalChangelog",wenn:"modalWenn",statik:"modalStatik"},Va=null;function Fm(i){return[...i.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(e=>e.offsetParent!==null)}function Qf(i){if(i.classList.remove("open"),Va&&document.contains(Va))try{Va.focus()}catch{}Va=null}function Ut(i){let e=document.getElementById(gv[i]);Va=document.activeElement,e.classList.add("open"),setTimeout(()=>{let t=Fm(e);if(t.length)try{t[0].focus()}catch{}},60)}document.querySelectorAll(".modal").forEach(i=>{i.addEventListener("click",e=>{(e.target===i||e.target.hasAttribute("data-close"))&&Qf(i)}),i.addEventListener("keydown",e=>{if(!i.classList.contains("open"))return;if(e.key==="Escape"){e.stopPropagation(),Qf(i);return}if(e.key!=="Tab")return;let t=Fm(i);if(!t.length)return;let n=t[0],s=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),s.focus()):!e.shiftKey&&document.activeElement===s&&(e.preventDefault(),n.focus())})});document.getElementById("btnMenu").onclick=()=>Ut("menu");document.getElementById("btnHelp").onclick=()=>{Ut("help")};document.getElementById("btnPrivacy").onclick=()=>Ut("privacy");document.getElementById("btnAbout").onclick=()=>Ut("about");function Nm(){document.getElementById("helpBox").innerHTML=window.HELP_HTML[R.lang]+`<div class="mactions"><button class="primary" data-close>${M("schliessen")}</button></div>`,document.getElementById("privacyBox").innerHTML=window.PRIVACY_HTML[R.lang]+`<div class="mactions"><button class="primary" data-close>${M("schliessen")}</button></div>`,document.getElementById("aboutBox").innerHTML=window.ABOUT_HTML[R.lang]+`<div class="mactions"><button class="primary" data-close>${M("schliessen")}</button></div>`;let i=document.getElementById("ckDirektMsc");i&&(i.checked=R.direktMSc,i.onchange=e=>{R.direktMSc=e.target.checked,tt(),tn(),_t(M("direkt_msc"))}),Um()}function Um(){for(let i of["bsc","msc"]){let e=document.getElementById(i==="bsc"?"palRowBsc":"palRowMsc");e&&(e.innerHTML=`<span>${i==="bsc"?"\u{1F3E0}":"\u{1F3F0}"}</span>`,(V.paletten||[]).forEach(t=>{let n=document.createElement("button");n.textContent=X(t.name),n.style.borderColor=t.akzent,n.classList.toggle("on",((R.pal||{})[i]||"uzh")===t.id),n.onclick=()=>{R.pal||(R.pal={bsc:"uzh",msc:"uzh"}),R.pal[i]=t.id,tt(),lo(),Um(),SND.pick()},e.appendChild(n)}))}}document.getElementById("btnExport").onclick=()=>{let i=new Blob([JSON.stringify(R,null,2)],{type:"application/json"}),e=document.createElement("a");e.href=URL.createObjectURL(i),e.download="kompetenzhaus-"+new Date().toISOString().slice(0,10)+".json",e.click(),URL.revokeObjectURL(e.href)};document.getElementById("btnImport").onclick=()=>document.getElementById("fileImport").click();document.getElementById("fileImport").onchange=i=>{let e=i.target.files[0];if(!e)return;if(!confirm(M("import_confirm"))){i.target.value="";return}let t=new FileReader;t.onload=()=>{try{R=Object.assign(Dr(),JSON.parse(t.result)),tt(),sd(),lo(),tn(),nn(),Is(),gd(R.mode),_t(M("import_ok"))}catch{_t(M("import_err"))}},t.readAsText(e)};document.getElementById("btnReset").onclick=()=>{confirm(M("reset_confirm"))&&(R=Dr(),R.onboarded=!0,tt(),Ii(),Ps(),lo(),tn(),nn(),Is())};function _v(){let i={n:R.name,p:R.placed[R.mode],q:Object.fromEntries(Object.entries(R.quests).filter(([e,t])=>t.done).map(([e,t])=>[e,1]))};return btoa(unescape(encodeURIComponent(JSON.stringify(i))))}document.getElementById("btnShare").onclick=()=>{let i=(location.origin==="null"||location.protocol==="file:",location.href.split("#")[0]);document.getElementById("shareLink").value=i+"#h="+_v(),Ut("share")};document.getElementById("btnCopy").onclick=async()=>{let i=document.getElementById("shareLink");i.select();try{await navigator.clipboard.writeText(i.value)}catch{document.execCommand("copy")}_t(M("kopiert"))};function vv(){if(!location.hash.startsWith("#h="))return!1;try{let i=JSON.parse(decodeURIComponent(escape(atob(location.hash.slice(3)))));return Gt.active=!0,Gt.data=i,R.placed={frei:i.p||{},serious:{}},R.mode="frei",R.quests=Object.fromEntries(Object.entries(i.q||{}).map(([e])=>[e,{done:!0,note:""}])),document.getElementById("visitorText").textContent=`${M("besuch_bei")} ${i.n||"?"} \u{1F3E0}`,document.getElementById("visitor").classList.add("open"),document.getElementById("panelL").style.display="none",document.getElementById("modeSeg").style.display="none",!0}catch{return!1}}document.getElementById("visitorOwn").onclick=()=>{location.hash="",location.reload()};document.getElementById("visitorSave").onclick=()=>{try{let i=so&&JSON.parse(localStorage.getItem(Lr)||"null")||Dr();i.nachbarn=(i.nachbarn||[]).filter(e=>e.n!==Gt.data.n).slice(0,2),i.nachbarn.push(Gt.data),localStorage.setItem(Lr,JSON.stringify(i)),_t(M("nachbar_gespeichert"))}catch{}};var Wa=!1,Za=new ze;Je.add(Za);function yv(i){let e=document.createElement("canvas");e.width=512,e.height=128;let t=e.getContext("2d");t.font="700 52px Helvetica, Arial",t.textAlign="center",t.fillStyle="rgba(255,255,255,.92)";let n=t.measureText(i).width+60;t.beginPath(),t.roundRect((512-n)/2,18,n,92,26),t.fill(),t.fillStyle="#0028a5",t.fillText(i,256,82);let s=new or(e),r=new rr(new gs({map:s,transparent:!0}));return r.scale.set(7,1.75,1),r}function xv(){Za.clear();let i=[[-27,-23],[0,-28],[27,-23]],e=.75;(R.nachbarn||[]).slice(0,3).forEach((t,n)=>{let[s,r]=i[n],a=new ze;for(let[c,l]of Object.entries(t.p||{})){let h=ut[c];if(!h)continue;let u=oo(h,{state:l,placedMap:t.p}),d=V.haeuser[h.haus];u.position.set(s+d.origin[0]*.45+h.pos.x*Ze*e,Mc(h.pos.y)*e,r+h.pos.z*Ze*e),u.scale.set(e,e,e),a.add(u)}let o=yv(t.n||"?");o.position.set(s,9,r),a.add(o),Za.add(a)}),Za.visible=Wa}document.getElementById("btnCampus").onclick=()=>{Wa=!Wa,xv(),Za.visible=Wa,Wa?($n(new S(0,40,52),new S(0,2,-7),1.6),_t(M("campus_an"))):($n(new S(-23,17,30),new S(-7,3,0),1.4),_t(M("campus_aus")))};function bv(i,e){let t=window.KARRIERE||{},n=t.pfade||[];if(!n.length)return"";let s={};V.kompetenzen.forEach(x=>s[x.id]=e[x.id]?i[x.id]/e[x.id]:0);let r=V.slots.filter(x=>Ne(x.slot)).length,a=n.map(x=>({p:x,fit:co(x,s)})).sort((x,E)=>E.fit-x.fit),o=a[0],c=a.slice(1,3),l=is(),h=ss(),u=Ji(),d=Cr(),p=Rs(),g=`<div style="page-break-before:always"></div>
  <h2 style="color:#0028a5;margin:8px 0 2px">\u{1F9ED} ${M("pass_karr_titel")}</h2>
  <p style="font-size:11px;color:#5b6478;line-height:1.5;margin-bottom:8px">${M("pass_karr_intro")}</p>`;if(r<6)return g+`<p style="font-size:11.5px;color:#8b94ab">${M("pass_karr_leer")}</p>`;let _=[[M("richtung_bsc"),l.r?`${V.richtungen[l.r].icon} ${X(V.richtungen[l.r].kurz)}`:"\u2014"],[M("richtung_msc"),h.total?Object.entries(h.counts).filter(([,x])=>x>0).map(([x,E])=>`${x} (${E}\xD7)`).join(" \xB7 "):"\u2014"],[M("frage"),u?`${((V.baFormen||{})[u.form]||{}).icon||""} ${X(u.name)}`:"\u2014"],[M("artefakt"),d?`${d.icon} ${X(d.name)}`:"\u2014"],["Wahlpflicht",p&&bt[p]?X(bt[p].titel):"\u2014"]];g+=`<h3 style="margin:12px 0 4px">${M("pass_karr_wahl")}</h3>
  <table style="font-size:11.5px">${_.map(([x,E])=>`<tr><th style="width:190px">${x}</th><td>${be(E)}</td></tr>`).join("")}</table>`;let f=o.p;g+=`<h3 style="margin:16px 0 4px">${M("pass_karr_top")}: ${f.icon} ${be(X(f.name))} \u2014 ${o.fit}%</h3>
  <p style="font-size:11.5px;color:#2c3550;margin:0 0 6px">${be(X(f.hint))}</p>`;let m=f.stelle;if(m){let x=E=>`<ul style="margin:0;padding-left:16px">${E.map(w=>`<li style="margin:2px 0">${be(X(w))}</li>`).join("")}</ul>`;g+=`<table style="font-size:11.5px;margin-top:6px">
      <tr><th style="width:150px">${M("stelle_titel")}</th><td><b>${be(X(m.titel))}</b></td></tr>
      <tr><th>${M("stelle_pensum")}</th><td>${be(X(m.pensum))}</td></tr>
      <tr><th>${M("stelle_wo")}</th><td>${be(X(m.wo))}</td></tr>
      <tr><th>${M("stelle_aufgaben")}</th><td>${x(m.aufgaben)}</td></tr>
      <tr><th>${M("stelle_anforderungen")}</th><td>${x(m.anforderungen)}</td></tr>
      <tr><th>${M("stelle_lohn")}</th><td>${be(X(m.lohn))}<div style="font-size:10px;color:#5b6478;margin-top:3px">${M("lohnq_"+m.lohnQ)} \u2014 ${be(X(m.lohnBeleg))}</div></td></tr>
      <tr><th>${M("stelle_wann")}</th><td>${be(X(m.wann))}</td></tr>
    </table>`}let v=md(f);g+=`<p style="font-size:11.5px;margin:8px 0 3px"><b>${M("gap_titel")}</b></p>`,g+=v.length?`<table style="font-size:11px"><tr><th>${M("kompetenz")}</th><th style="width:70px;text-align:center">${M("stufe")}</th><th style="width:70px;text-align:center">${M("ziel_kurz")}</th></tr>
       ${v.map(x=>{let E=Nt[x.id];return`<tr><td>${x.id} \xB7 ${E?be(X(E.name)):""}</td><td style="text-align:center">${x.ist}</td><td style="text-align:center"><b>${x.ziel}</b></td></tr>`}).join("")}</table>`:`<p style="font-size:11.5px;color:#0e8f7e;margin:0">\u2713 ${M("gap_ok")}</p>`,f.roadmap&&f.roadmap.length&&(g+=`<p style="font-size:11.5px;margin:12px 0 3px"><b>${M("roadmap_titel")}</b></p>
    <ol style="font-size:11.5px;line-height:1.55;padding-left:18px;margin:0">
      ${f.roadmap.map(x=>`<li style="margin:4px 0"><b>${be(X(x.t))}</b> \u2014 ${be(X(x.d))}</li>`).join("")}</ol>`),f.wahl&&f.wahl.hinweis&&(g+=`<p style="font-size:10.5px;color:#5b6478;line-height:1.5;margin:8px 0 0;border-left:3px solid #dbe1ef;padding-left:8px">${be(X(f.wahl.hinweis))}</p>`),c.length&&(g+=`<h3 style="margin:16px 0 4px">${M("pass_karr_alt")}</h3>
    <table style="font-size:11.5px">${c.map(x=>`<tr><th style="width:230px">${x.p.icon} ${be(X(x.p.name))}</th><td style="width:52px;text-align:center"><b>${x.fit}%</b></td><td>${x.p.stelle?`<b>${be(X(x.p.stelle.titel))}</b><br><span style="color:#5b6478">${be(X(x.p.stelle.pensum))}</span>`:be(X(x.p.hint))}</td></tr>`).join("")}</table>`);let y=(t.lit||[]).slice(0,8);return y.length&&(g+=`<p style="font-size:10px;color:#5b6478;line-height:1.5;margin-top:12px"><b>${M("pass_karr_q")}</b><br>
      ${y.map(x=>`${be(x.apa)}${x.url?` <a href="${x.url}" style="color:#0028a5">${x.url}</a>`:""}`).join("<br>")}</p>`),g+=`<p style="font-size:10px;color:#8b94ab;margin-top:6px">${M("pass_karr_disclaimer")}</p>`,g}document.getElementById("btnPass").onclick=()=>{let{score:i,max:e}=jn(),t=new Date().toLocaleDateString(R.lang==="de"?"de-CH":"en-GB"),n="";for(let d of V.slots){if(!Ne(d.slot))continue;let p=R.placed[R.mode][d.slot],g=R.quests[d.slot]||{},{kat:_}=Bt(d),f=p&&p.opt&&bt[p.opt]?bt[p.opt].ects:d.ects,m=(()=>{let v=lm(d.slot),y=v?" \xB7 "+X(v.name):"";if(d.slot==="BA"){let x=Ji(),E=Cr();x&&(y+=" \xB7 "+(((V.baFormen||{})[x.form]||{}).icon||"")+" "+X(x.name)),E&&(y+=" \xB7 "+E.icon+" "+X(E.name))}return y})();n+=`<tr><td>${p&&p.opt||d.code}</td><td>${Et(d)}${p&&p.sp?" \xB7 "+p.sp:""}${m}</td><td style="text-align:center">${f}</td><td style="text-align:center">[${_}]</td><td>${g.done?"\u2726 ":""}${g.note?(g.done?"":"\u{1F4DD} ")+be(g.note):""}</td></tr>`}let s="";for(let d of["fa","ki","fu"]){let p=V.felder[d];s+=`<h3 style="margin:14px 0 6px;color:${p.farbe}">${X(p.name)}</h3>`;for(let g of V.kompetenzen.filter(_=>_.feld===d)){let _=e[g.id]?Math.round(i[g.id]/e[g.id]*100):0;if(s+=`<div style="display:flex;align-items:center;gap:8px;margin:3px 0;font-size:12px">
        <span style="width:260px">${g.id} \xB7 ${X(g.name)}</span>
        <span style="flex:1;background:#eee;border-radius:4px;height:10px;overflow:hidden"><span style="display:block;height:100%;width:${_}%;background:${p.farbe}"></span></span>
        <span style="width:36px;text-align:right">${_}%</span></div>`,g.sub&&g.sub.length)for(let f of g.sub){let m=Lm(f,i,e);s+=`<div style="display:flex;align-items:center;gap:8px;margin:1px 0 1px 22px;font-size:10.5px;color:#555">
            <span style="width:238px">${f.id} \xB7 ${X(f.name)}</span>
            <span style="flex:1;background:#f2f2f2;border-radius:3px;height:6px;overflow:hidden"><span style="display:block;height:100%;width:${m}%;background:${p.farbe};opacity:.65"></span></span>
            <span style="width:36px;text-align:right">${m}%</span></div>`}}}s+='<p style="font-size:9.5px;color:#8b94ab;margin-top:4px">FS1\u2013FS12: AIComp-Future-Skills-Felder (Ehlers et al., 2024) \u2014 Detailebene zu Fu1\u2013Fu3.</p>';let r=window.ICH_STUFEN||{},a=window.ICH_LERNZIELE||{},o=`<div style="page-break-before:always"></div>
  <h2 style="color:#0028a5;margin:8px 0 2px">\u{1F9ED} ${M("ich_titel")}</h2>
  <p style="font-size:11px;color:#5b6478;line-height:1.5;margin-bottom:6px">${M("ich_intro")}</p>`;for(let d of["fa","ki","fu"]){let p=V.felder[d],g=d==="fa"?"F":d==="ki"?"K":"S";o+=`<h3 style="color:${p.farbe};border-bottom:2.5px solid ${p.farbe};padding-bottom:3px;margin:16px 0 6px">${X(p.name)}</h3>`;let _=!1;for(let m of V.kompetenzen.filter(v=>v.feld===d)){let v=Pi(m.id);if(!v)continue;_=!0;let y=(r[m.id]||[])[v-1];o+=`<div style="margin:8px 0 2px;display:flex;align-items:baseline;gap:8px;flex-wrap:wrap">
        <b style="font-size:12px">${m.id} \xB7 ${X(m.name)}</b>
        <span style="font-size:9px;font-weight:700;color:#fff;background:${p.farbe};border-radius:999px;padding:2px 8px;white-space:nowrap">${M("stufe")} ${v} \xB7 ${X(V.stufen[v-1].name)}</span></div>`,y&&(o+=`<p style="font-size:11.5px;font-style:italic;color:#2c3550;margin:0 0 2px 2px">\xAB${X(y)}\xBB</p>`)}if(!_){o+=`<p style="font-size:10.5px;color:#8b94ab">${M("ich_keine")}</p>`;continue}let f="";for(let m of V.slots){if(!Ne(m.slot))continue;let v=(R.placed[R.mode][m.slot]||{}).opt||m.code;(a[v]||[]).forEach(y=>{if(!(y.b||[]).includes(g))return;let x=km(m,[g]).map(E=>`<b style="color:${p.farbe}">${E}</b>`).join(" ");f+=`<li style="margin:3px 0">${x?x+" \u2014 ":""}${X(y)} <span style="color:#8b94ab;font-size:9px;white-space:nowrap">\xB7 ${Et(m).split(",")[0]}</span></li>`})}f&&(o+=`<p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#5b6478;margin:9px 0 2px">\u2713 ${M("ich_konkret")}</p>
      <ul style="font-size:10.5px;line-height:1.5;padding-left:16px;margin:0 0 8px">${f}</ul>`)}o+=`<p style="font-size:9.5px;color:#8b94ab;margin-top:6px">${M("ich_fussnote")}</p>`;let c=bv(i,e),l=Mv(),h=`<!DOCTYPE html><html lang="${R.lang}"><head><meta charset="utf-8"><title>Kompetenzpass</title>
  <style>*{-webkit-print-color-adjust:exact !important;print-color-adjust:exact !important}
  body{font-family:"Helvetica Neue",Arial,sans-serif;color:#1c2333;max-width:820px;margin:24px auto;padding:0 16px}
  h1{color:#0028a5;font-size:24px} table{border-collapse:collapse;width:100%;font-size:11.5px;margin-top:10px}
  td,th{border:1px solid #d8dce8;padding:5px 8px;text-align:left} th{background:#f0f3fa}
  .hint{font-size:10.5px;color:#5b6478;margin-top:18px;line-height:1.5}
  @media print {.noprint{display:none}}</style></head><body>
  <div class="noprint" style="float:right;text-align:right">
    <button onclick="print()" style="padding:10px 20px;border:0;background:#0028a5;color:#fff;border-radius:10px;cursor:pointer;font-weight:700;font-size:14px">\u{1F4BE} ${R.lang==="de"?"Als PDF speichern":"Save as PDF"}</button>
    <div style="font-size:10px;color:#5b6478;margin-top:4px">${R.lang==="de"?"Im Druckdialog \xABAls PDF sichern\xBB w\xE4hlen":"Choose 'Save as PDF' in the print dialog"}</div>
  </div>
  <h1>\u{1F393} ${M("pass")} \u2014 ${be(R.name)||"\u2014"}</h1>
  <p style="font-size:12.5px;color:#5b6478">${M("passdatum")}: ${t} \xB7 ${R.mode==="serious"?M("modus_serious"):M("modus_frei")} \xB7 BSc: ${on("bsc")}/120 \xB7 MSc: ${on("msc")}/120 ${M("ects")}</p>
  ${l?`<img src="${l}" alt="Kompetenzhaus" style="width:100%;border-radius:12px;margin:8px 0">`:""}
  ${s}
  ${o}
  ${c}
  <h3 style="margin-top:18px">${M("bauplan")}</h3>
  <table><tr><th>Code</th><th>Modul</th><th>${M("ects")}</th><th>[A/B/C]</th><th>Quest \u2726</th></tr>${n}</table>
  <p class="hint">${X(V.meta.hinweis)}<br>Kompetenzmodell: APA (2023); DGPs (2014); QAA (2023); Bass et al. (2025); Miao et al. (2024); Ehlers et al. (2024); Perkins et al. (2025).</p>
  </body></html>`,u=window.open("about:blank");if(u&&u.document)u.document.write(h),u.document.close();else{let d=new Blob([h],{type:"text/html"}),p=document.createElement("a");p.href=URL.createObjectURL(d),p.download="kompetenzpass.html",p.click(),URL.revokeObjectURL(p.href)}};function _d(){if(!R.envAuto)return;R.season=id();let i=new Date,e=i.getHours()+i.getMinutes()/60;R.tod=Math.max(0,Math.min(100,Math.round((e-5.5)/17*100)));let t=document.getElementById("todSlider");t&&(t.value=R.tod),Is()}document.querySelectorAll("#envRow .envbtn[data-season]").forEach(i=>{i.onclick=()=>{R.envAuto=!1,R.season=i.dataset.season,tt(),Is()}});document.getElementById("todSlider").oninput=i=>{R.envAuto=!1,R.tod=+i.target.value,tt(),Is()};document.getElementById("btnEnvAuto").onclick=()=>{R.envAuto=!R.envAuto,tt(),R.envAuto&&_d(),Is(),_t(M(R.envAuto?"envauto_an":"envauto_aus"))};setInterval(_d,6e4);document.getElementById("btnFoto").onclick=()=>{document.body.classList.add("foto");let i=Ft.position.clone(),e=qt.target.clone(),t=cm()&&on("msc")>0?new S(0,3.5,0):new S(-11,3.5,0);$n(new S(t.x-19,13,28),t,1.2,()=>{Tc(),yn.render(Je,Ft);try{let n=document.createElement("a");n.href=yn.domElement.toDataURL("image/png"),n.download="kompetenzhaus-"+new Date().toISOString().slice(0,10)+".png",n.click(),_t("\u{1F4F7} "+M("foto_hint"))}catch{}setTimeout(()=>{document.body.classList.remove("foto"),$n(i,e,1)},600)})};function Mv(){yn.render(Je,Ft);try{return yn.domElement.toDataURL("image/jpeg",.82)}catch{return null}}document.getElementById("togL").onclick=()=>document.getElementById("panelL").classList.toggle("open");document.getElementById("togR").onclick=()=>document.getElementById("panelR").classList.toggle("open");var wt=null;function ht(i,e,t,n,s,r,a,o=0){let c=new $(new Dt(i,e,t,2,Math.min(.04,i/4)),new ie({color:n,roughness:.85}));return c.position.set(s,r,a),c.rotation.y=o,c}function Ev(i,e,t,n){let s=new ze,r=i.form==="slab"||i.form==="step",a=new ie({color:r?14276043:15986662,roughness:.97,side:gt}),o=new ie({color:r?11841702:13215863,roughness:.92}),c=e-.2,l=t-.15,h=n-.2,u=new $(new We(c,.06,h),o);u.position.y=.05,s.add(u);let d=new $(new Qe(c,l),a);d.position.set(0,l/2,-h/2),s.add(d),d.userData.wallN=new S(0,0,1);let p=new $(new Qe(h,l),a.clone());p.rotation.y=Math.PI/2,p.position.set(-c/2,l/2,0),s.add(p),p.userData.wallN=new S(1,0,0);let g=new $(new Qe(h,l),a.clone());g.rotation.y=-Math.PI/2,g.position.set(c/2,l/2,0),s.add(g),g.userData.wallN=new S(-1,0,0);let _=i.gruppe,f=.08,m=i.code;if(r&&m==="06SM200-001"){for(let P=0;P<2;P++){let N=ht(.52,.6,.5,16053488,-c*.3+P*.62,f+.3,-h*.32);s.add(N);let H=new $(new ai(.15,18),new ie({color:1845056,roughness:.25,metalness:.3}));H.position.set(-c*.3+P*.62,f+.32,-h*.32+.26),s.add(H)}let C=new $(new je(.2,.16,.26,9),new ie({color:14263361,roughness:1,flatShading:!0}));C.position.set(c*.22,f+.13,h*.1),s.add(C);let D=new $(new je(.012,.012,c*.7,5),new ie({color:9147563}));D.rotation.z=Math.PI/2,D.position.set(0,l*.78,h*.2),s.add(D),[14248523,4886745,15979342].forEach((P,N)=>s.add(ht(.16,.22,.02,P,-.3+N*.3,l*.78-.12,h*.2)))}else if(r&&m==="06SM200-002"){let C=new $(new je(.3,.3,.85,12),new ie({color:13193021,roughness:.55,metalness:.25}));C.position.set(-c*.28,f+.43,-h*.28),s.add(C);let D=new $(new je(.05,.05,c*.75,8),new ie({color:10134197,metalness:.6,roughness:.35}));D.rotation.z=Math.PI/2,D.position.set(0,l*.85,-h/2+.12),s.add(D);let P=new $(new je(.05,.05,l*.7,8),D.material);P.position.set(-c*.28,l*.5,-h/2+.12),s.add(P),s.add(ht(.42,.55,.16,9147563,c*.28,l*.55,-h/2+.12));let N=new $(new ai(.09,14),new ie({color:16053488}));N.position.set(c*.28,l*.55,-h/2+.22),s.add(N)}else if(r&&m==="06SM200-003"){let C=new $(new je(.02,.02,c*.7,6),new ie({color:9070146}));C.rotation.z=Math.PI/2,C.position.set(0,l*.7,-h*.3),s.add(C),[10405,14248523,2792847].forEach((D,P)=>s.add(ht(.2,.34,.06,D,-.3+P*.3,l*.7-.2,-h*.3))),s.add(ht(c*.6,.09,.28,9070146,0,f+.1,h*.2))}else if(r&&m==="06SM200-500"){for(let C=0;C<2;C++){let D=ht(.42,1,.4,1844019,-c*.25+C*.6,f+.5,-h*.3);s.add(D);for(let P=0;P<4;P++){let N=new $(new Qe(.3,.02),new ie({color:988970,emissive:P%2?3526783:4886745,emissiveIntensity:.9}));N.position.set(-c*.25+C*.6,f+.24+P*.2,-h*.3+.21),s.add(N)}}s.add(ht(.7,.06,.4,9070146,c*.24,f+.36,h*.12))}else if(r&&m==="06SM200-501"){let C=ht(1.1,1.05,.26,9070146,-c*.2,f+.53,-h*.32);s.add(C),[14248523,10405,2792847,14263361,6185166,14774357].forEach((D,P)=>s.add(ht(.26,.09,.2,D,-c*.2-.38+P%3*.38,f+.4+Math.floor(P/3)*.34,-h*.32)))}else if(r&&m==="06SM200-502"){for(let C=0;C<2;C++)s.add(ht(.9,.95,.24,10127986,-c*.22+C*1,f+.48,-h*.33));[13287336,12173519,14263361,13287336].forEach((C,D)=>s.add(ht(.3,.22,.3,C,-c*.3+D%2*.5,f+.3+Math.floor(D/2)*.35,-h*.33)))}else if(_==="meth"||_==="mein"){s.add(ht(.9,.06,.5,9070146,-c*.2,f+.38,-h*.25));let C=new $(new Qe(.5,.32),new ie({color:792624,emissive:8369384,emissiveIntensity:.55}));C.position.set(-c*.2,f+.62,-h*.25),s.add(C),s.add(ht(.34,.5,.34,3752282,-c*.2,f+.25,h*.05))}else if(_==="prop"){for(let C=0;C<2;C++)for(let D=0;D<3;D++)s.add(ht(.34,.42,.3,4156616,(D-1)*.5,f+.21,h*.05+C*.45));s.add(ht(.8,.55,.35,9070146,0,f+.28,-h*.3))}else if(_==="klin"){s.add(ht(.45,.4,.42,14248523,-c*.22,f+.2,0,.5)),s.add(ht(.45,.4,.42,2792847,c*.22,f+.2,0,-.5)),s.add(ht(.32,.3,.32,9070146,0,f+.15,-h*.05));let C=new $(new Ct(.16,0),new ie({color:5149760,flatShading:!0}));C.position.set(c*.34,f+.45,-h*.32),s.add(C),s.add(ht(.1,.28,.1,12159578,c*.34,f+.14,-h*.32))}else if(_==="enk"){s.add(ht(.3,.55,.3,14212326,0,f+.28,-h*.15));let C=new $(new Ct(.2,1),new ie({color:15245492,roughness:.6,flatShading:!0}));C.position.set(0,f+.72,-h*.15),C.name="spin",s.add(C)}else if(_==="swod"){let C=new $(new je(.42,.42,.06,12),new ie({color:9070146,roughness:.85}));C.position.set(0,f+.4,0),s.add(C),s.add(ht(.08,.4,.08,7033144,0,f+.2,0));for(let D=0;D<4;D++){let P=D/4*Math.PI*2;s.add(ht(.3,.38,.28,14263361,Math.cos(P)*.72,f+.19,Math.sin(P)*.72,-P))}}else{let C=ht(1.1,1.1,.24,9070146,-c*.24,f+.55,-h*.36);s.add(C),[14248523,2792847,4156616,14263361,6185166].forEach((D,P)=>s.add(ht(.1,.26,.16,D,-c*.24-.4+P*.2,f+.78,-h*.36))),s.add(ht(.7,.06,.45,11109726,c*.2,f+.38,0)),s.add(ht(.3,.44,.3,3752282,c*.2,f+.22,h*.28))}let v=new wa(16769971,r?.75:.95,Math.max(c,h)*3.2,1.8);v.position.set(0,l*.86,0),s.add(v);let y=new $(new On(.14,.12,10,1,!0),new ie({color:15979342,side:gt,emissive:16769971,emissiveIntensity:.35}));if(y.position.set(0,l*.9,0),s.add(y),!r){let C=new $(new Qe(c,h),new ie({color:15262938,side:gt,roughness:1}));C.rotation.x=Math.PI/2,C.position.y=l,s.add(C)}if(r){for(let C of[-c*.28,c*.28]){let D=new $(new Qe(.44,.2),new ie({color:12376302,emissive:12376302,emissiveIntensity:.4}));D.position.set(C,l*.9,-h/2+.02),s.add(D)}if(h>3.2){let D=l/7;for(let P=0;P<6;P++){let N=new $(new We(.78,D,.36),pc.clone());N.position.set(c/2-.44,D/2+P*D,h/2-.28-(5-P)*.37),s.add(N)}}}else{let C=new $(new ai(Math.min(c,h)*.32,22),new ie({color:new de(V.gruppen[i.gruppe].farbe).lerp(new de(16777215),.62),roughness:1}));C.rotation.x=-Math.PI/2,C.position.y=.09,s.add(C);let D=ht(.5,.38,.03,15921385,c/2-.06,l*.6,0,Math.PI/2);s.add(D);let P=new $(new Qe(.4,.28),new ie({color:10404832}));P.rotation.y=-Math.PI/2,P.position.set(c/2-.085,l*.6,0),s.add(P);let N=new $(new On(.09,.12,4),new ie({color:5143130,flatShading:!0}));N.rotation.y=-Math.PI/2,N.position.set(c/2-.09,l*.57,.03),s.add(N)}i.code==="06SM200-003"&&[{p:"P1",info:{de:"P1 \xB7 \xABWie \u2039denkt\u203A ein LLM?\xBB \u2014 Live-Demo, Falschinfo finden (KI4)",en:"P1 \xB7 'How does an LLM think?' \u2014 live demo, spotting misinformation (KI4)"}},{p:"P2",info:{de:"P2 \xB7 Spielregeln & Disclosure \u2014 \xABassistieren, nicht ersetzen \u2014 deklarieren \u2014 verifizieren\xBB (KI5)",en:"P2 \xB7 Rules & disclosure \u2014 'assist, don't replace \u2014 declare \u2014 verify' (KI5)"}},{p:"P3",info:{de:"P3 \xB7 Fakten-Check \u2014 erfundene Referenzen gegen das Lehrbuch pr\xFCfen (KI6)",en:"P3 \xB7 Fact check \u2014 testing invented references against the textbook (KI6)"}},{p:"P4",info:{de:"P4 \xB7 Erste Nutzung mit Haltung \u2014 Prompt-Duell, Mit-/Ohne-KI-Reflexion (KI1)",en:"P4 \xB7 First use with attitude \u2014 prompt duel, with/without-AI reflection (KI1)"}}].forEach((D,P)=>{let N=new ze,H=new $(new Qe(.34,.44),new ie({color:16777215,roughness:.7})),O=Qa(D.p,"#0028a5");O.scale.set(.4,.16,1),O.position.z=.02,N.add(H,O),N.rotation.y=Math.PI/2,N.position.set(-c/2+.03,l*.55,-h*.3+P*.5),N.children.forEach(J=>J.userData.info=D.info),N.userData.info=D.info,s.add(N)});let{komp:x,haupt:E}=Bt(i),w=[...x.fa||[],...x.ki||[],...x.fu||[]].slice(0,6);return w.forEach((C,D)=>{let P=Nt[C];if(!P)return;let N=V.felder[P.feld].farbe,H=new ze,O=new $(new Qe(.56,.42),new ie({color:16777215,roughness:.6})),J=Qa(C,N);J.scale.set(.62,.24,1),J.position.z=.02,H.add(O,J);let W=Math.min(3,w.length),Q=(D%W-(W-1)/2)*.75,ee=l*.62-Math.floor(D/W)*.55;H.position.set(Q,ee,-h/2+.03),H.userData.kompId=C,H.children.forEach(le=>le.userData.kompId=C),s.add(H)}),s.traverse(C=>{C.isMesh&&(C.castShadow=!1,C.receiveShadow=!1)}),s}function Bm(i){wt&&io();let e=ut[i],t=kt[i];if(!e||!t||!["box","tower","wing","bay","slab","step"].includes(e.form))return;let n=e.form==="slab"||e.form==="step",s=e.pos.w*Ze,r=e.pos.d*Ze,a=n?$a-.12:(e.form==="wing"?1.7:e.pos.h)*An,o=Ev(e,s,a,r);o.position.copy(t.position),n&&(o.position.y=.24-$a),Je.add(o);let c=[];if(t.traverse(_=>{_.isMesh&&_.material&&(c.push({mat:_.material,opacity:_.material.opacity,transparent:_.material.transparent}),_.material.transparent=!0,_.material.opacity=.13,_.material.depthWrite=!1,_.material.needsUpdate=!0)}),n)for(let _ of[bc,od,ld])_.transparent=!0,_.opacity=.14,_.depthWrite=!1,_.needsUpdate=!0;let l=e.pos.z>=0||e.form==="wing"?1:-1,h=o.position.clone().add(new S(0,a*.45,0)),u=n?r*.62+1.6:r*1.9+1.2,d=n?o.position.clone().add(new S(0,$a+2.6,l*u)):t.position.clone().add(new S(0,a*.55,l*u)),p=qt.minDistance;qt.minDistance=.4,document.body.classList.add("inroom"),$n(d,h,1.1);let g=document.createElement("button");g.className="iconbtn blue",g.style.cssText="position:fixed;left:50%;transform:translateX(-50%);bottom:18px;z-index:26",g.textContent="\u{1F6AA} "+M("verlassen"),g.onclick=io,document.body.appendChild(g),Ps(),wt={id:i,group:o,saved:c,btn:g,prevMin:p,keller:n},SND.pick()}function io(){if(!wt)return;if(document.body.classList.remove("inroom"),Je.remove(wt.group),wt.saved.forEach(e=>{e.mat.opacity=e.opacity,e.mat.transparent=e.transparent,e.mat.depthWrite=!0,e.mat.needsUpdate=!0}),wt.keller)for(let e of[bc,od,ld])e.opacity=1,e.transparent=!1,e.depthWrite=!0,e.needsUpdate=!0;wt.btn.remove(),qt.minDistance=wt.prevMin;let i=kt[wt.id];i&&$n(i.position.clone().add(new S(-9,8,15)),i.position.clone(),1),wt=null}function Sv(){let i=document.getElementById("coach");if(Ne("003")){document.getElementById("obStart").textContent=M("tour_fertig"),Ut("onboard");return}let e=ut["003"],t=V.haeuser[e.haus],n=new S(t.origin[0]+e.pos.x*Ze,.7,t.origin[2]+e.pos.z*Ze),s=window.innerWidth<720;$n(new S(n.x+3,s?6.5:4.5,n.z+(s?13:8)),n,1.7,()=>{!Ne("003")&&!R.onboarded&&i.classList.contains("open")&&(qa(e),xn="003",tn())}),i.style.cssText="left:50%;transform:translateX(-50%);bottom:26px",i.innerHTML=`<b>${M("fb1_t")}</b>${M("fb1")}<div class="cactions"><button data-fbskip style="background:rgba(255,255,255,.18);color:#fff">${M("fb1_skip")}</button><button data-fbgo>${M("fb1_go")}</button></div>`,i.classList.add("open"),i.querySelector("[data-fbgo]").onclick=()=>{SND.unlock(),Ne("003")||Fr(ut["003"])},i.querySelector("[data-fbskip]").onclick=()=>{i.classList.remove("open"),Ii(),Ut("onboard")}}function ho(i){if(R.tourDone&&!i)return;if(document.getElementById("milestone").classList.contains("open")){setTimeout(()=>ho(i),2500);return}let e=document.getElementById("coach"),t=window.innerWidth<=1080,n=Ft.position.clone(),s=qt.target.clone(),r="left:50%;transform:translateX(-50%);bottom:26px",a=document.getElementById("tutorFab").style.display==="block",o=(d,p,g,_)=>[new S(d+g,3.6,p+_),new S(d,.9,p)],c=[{sel:"#panelL",open:"panelL",tt:"tour1_t",tx:"tour1",css:t?r:"left:322px;top:120px"},{sel:"#card",tt:"tour2_t",tx:"tour2",css:"left:50%;transform:translateX(-50%);bottom:calc(46vh + 20px)"},{sel:"#panelR",open:"panelR",tt:"tour3_t",tx:"tour3",css:t?r:"right:322px;top:120px;left:auto"},{sel:"#btnPass",tt:"tour4_t",tx:"tour4",css:t?r:"right:12px;top:66px;left:auto"},{fly:o(Ki.position.x,Ki.position.z,3.2,4.5),tt:"tour5_t",tx:"tour5",css:r},{fly:o(Zi.position.x,Zi.position.z,3,4.5),tt:"tour6_t",tx:"tour6",css:r},{fly:o(Yi.position.x,Yi.position.z,4,5.5),tt:"tour7_t",tx:"tour7",css:r},a?{sel:"#tutorFab",tt:"tour8_t",tx:"tour8",css:t?"right:12px;bottom:80px;left:auto":"right:320px;bottom:80px;left:auto"}:null].filter(Boolean),l=0,h=()=>{document.querySelectorAll(".coach-target").forEach(d=>d.classList.remove("coach-target")),e.classList.remove("open"),R.tourDone=!0,tt(),$n(n,s,1.2)},u=()=>{if(document.querySelectorAll(".coach-target").forEach(p=>p.classList.remove("coach-target")),t&&(document.getElementById("panelL").classList.remove("open"),document.getElementById("panelR").classList.remove("open")),l>=c.length){h();return}let d=c[l];if(t&&d.open&&document.getElementById(d.open).classList.add("open"),d.sel==="#card"&&!document.getElementById("card").classList.contains("open")){let p=xn||Sc();p&&Ci(p)}if(d.sel){let p=document.querySelector(d.sel);p&&p.offsetParent!==null&&p.classList.add("coach-target")}d.fly&&$n(d.fly[0],d.fly[1],1.3),e.style.cssText=d.css,e.innerHTML=`<b>${M(d.tt)}</b>${M(d.tx)}<div class="cactions"><span class="cstep">${l+1}/${c.length}</span><span style="display:flex;gap:6px"><button data-skip style="background:rgba(255,255,255,.18);color:#fff">${M("tour_skip")}</button><button data-next>${l===c.length-1?M("tour_fertig"):M("tour_weiter")}</button></span></div>`,e.classList.add("open"),e.querySelector("[data-next]").onclick=()=>{l++,SND.pick(),u()},e.querySelector("[data-skip]").onclick=()=>{SND.pick(),h()}};u()}function wv(){let i=V.slots.filter(o=>Ne(o.slot)),e={},t={},n={},s={};for(let o of i){let c=ro(o),l=c&&c.kat||"",{komp:h}=Bt(o),u=[...h.fa||[],...h.ki||[],...h.fu||[]];for(let d of u)/A/.test(l)&&(e[d]=(e[d]||0)+1,(n[d]=n[d]||[]).push(o)),/B|C/.test(l)&&(t[d]=(t[d]||0)+1,(s[d]=s[d]||[]).push(o))}let r=[];for(let o of V.kompetenzen)(e[o.id]||0)+(t[o.id]||0)>0&&(o.feld==="fa"&&!e[o.id]&&r.push({k:o,art:"fehltA"}),o.feld==="ki"&&!t[o.id]&&r.push({k:o,art:"fehltBC"}));let a=V.kompetenzen.filter(o=>(e[o.id]||0)+(t[o.id]||0)>0);return{gebaut:i,luecken:r,beruehrt:a,hatA:e,hatBC:t,quelleA:n,quelleBC:s}}function Om(){let i=wv(),e=document.getElementById("statikBody");if(i.gebaut.length<3){e.innerHTML=`<p style="font-size:12.5px;color:#5b6478;line-height:1.55">${M("statik_leer")}</p>`,Ut("statik");return}let t=i.luecken.length===0,n=`<div class="plakette ${t?"gut":"offen"}">
    <span class="plaico">${t?"\u{1F3DB}\uFE0F":"\u{1F6A7}"}</span>
    <div><b>${t?M("statik_ok_titel"):i.luecken.length===1?M("statik_offen1"):M("statik_offen_titel").replace("{n}",i.luecken.length)}</b>
    <p>${M(t?"statik_ok_text":"statik_offen_text")}</p></div></div>`,s=(r,a,o,c)=>{let l=i.beruehrt.filter(h=>h.feld===r);return l.length?`<div class="stspalte"><h4>${o}</h4><p class="sthint">${c}</p>
      <div class="stchips">${l.map(h=>{let u=a(h);return`<span class="stchip${u?" ok":" fehlt"}" title="${be(X(h.name))}">${h.id}${u?" \u2713":" \u2717"}</span>`}).join("")}</div></div>`:""};if(n+=`<div class="stgrid">
    ${s("fa",r=>i.hatA[r.id],M("statik_fach"),M("statik_fach_hint"))}
    ${s("ki",r=>i.hatBC[r.id],M("statik_ki"),M("statik_ki_hint"))}
  </div>`,i.luecken.length){n+=`<h4 class="stlueck">${M("statik_luecken")}</h4><ul class="stliste">`;for(let r of i.luecken){let a=V.slots.find(o=>{if(Ne(o.slot))return!1;let c=ro(o),l=c&&c.kat||"";if(r.art==="fehltA"&&!/A/.test(l)||r.art==="fehltBC"&&!/B|C/.test(l))return!1;let{komp:h}=Bt(o);return[...h.fa||[],...h.ki||[],...h.fu||[]].includes(r.k.id)});n+=`<li><b>${r.k.id} \xB7 ${be(X(r.k.name))}</b> \u2014 ${M(r.art==="fehltA"?"statik_fehltA":"statik_fehltBC")}
        ${a?`<button type="button" class="stbtn" data-stslot="${a.slot}">${be(Et(a).split(",")[0])}</button>`:""}</li>`}n+="</ul>"}n+=`<p class="sthint" style="margin-top:10px">${M("statik_quelle")}</p>`,e.innerHTML=n,e.querySelectorAll("[data-stslot]").forEach(r=>r.onclick=()=>{document.getElementById("modalStatik").classList.remove("open"),Ci(r.dataset.stslot)}),Ut("statik")}function em(i){let e=JSON.parse(JSON.stringify(R.placed[R.mode]));try{let t=R.placed[R.mode];if(i.r)for(let c of["s11","s12","s13","BA"]){if(!t[c])continue;let l=(V.themen[c]||[]).find(h=>h.r===i.r);l&&(t[c].thema=l.id,c==="BA"&&(t[c].frage=null))}if(i.sp)for(let c of["s04","s05","s06","s07","s08","s09"])t[c]&&(t[c].sp=i.sp);i.wp&&t.wp&&(t.wp.opt=i.wp);let{score:n,max:s}=jn(),r={};V.kompetenzen.forEach(c=>r[c.id]=s[c.id]?n[c.id]/s[c.id]:0);let a={};(window.KARRIERE.pfade||[]).forEach(c=>a[c.id]=co(c,r));let o={};return V.kompetenzen.forEach(c=>o[c.id]=Pi(c.id)||0),{passung:a,pct:r,stufen:o}}finally{R.placed[R.mode]=e}}var Gn={r:null,sp:null,wp:null},br=!1,Mi=null;function zm(){let i=["s11","s12","s13","BA","s04","s05","s06","s07","s08","s09","wp"].filter(s=>Ne(s)).length,e=document.getElementById("wennBody");if(i<2){e.innerHTML=`<p style="font-size:12.5px;color:#5b6478;line-height:1.55">${M("wenn_leer")}</p>`,Ut("wenn");return}let t=is(),n=ss();!Gn.r&&!Gn.sp&&!Gn.wp&&(Gn.r=["klin","ekn","swo"].find(s=>s!==t.r)||null,Gn.sp=["DeNC","HEA","SEOP"].find(s=>s!==n.dom)||null),Hm(),Ut("wenn")}function Hm(){let i=document.getElementById("wennBody"),e=is(),t=ss(),n=Rs(),s=em({}),r=em(Gn),a=(u,d,p,g,_)=>`<button class="wbtn${_?" on":""}" data-typ="${u}" data-wert="${d}"
      style="${_?`border-color:${g};background:${g}1a;color:${g}`:""}">${be(p)}</button>`,o=`<div class="wgrid">
    <div class="wcol"><h4>${M("wenn_jetzt")}</h4>
      <p>${e.r?`${V.richtungen[e.r].icon} ${be(X(V.richtungen[e.r].kurz))}`:`<span style="color:#8b94ab">${M("richtung_keine")}</span>`}</p>
      <p>${t.total?Object.entries(t.counts).filter(([,u])=>u>0).map(([u,d])=>`${u} ${d}`).join(" \xB7 "):"\u2014"}</p>
      <p>${n&&bt[n]?be(X(bt[n].titel)):"\u2014"}</p>
    </div>
    <div class="wcol alt"><h4>${M("wenn_alt")}</h4>
      <div class="wrow">${["klin","ekn","swo"].map(u=>a("r",u,V.richtungen[u].icon+" "+X(V.richtungen[u].kurz),V.richtungen[u].farbe,Gn.r===u)).join("")}</div>
      <div class="wrow">${["DeNC","HEA","SEOP"].map(u=>a("sp",u,u,V.schwerpunkte[u].farbe,Gn.sp===u)).join("")}</div>
      <div class="wrow">${["06SM200-511","06SM200-512"].filter(u=>bt[u]).map(u=>a("wp",u,X(bt[u].titel),"#b3831d",Gn.wp===u)).join("")}</div>
    </div>
  </div>`,c=(window.KARRIERE.pfade||[]).map(u=>({p:u,a:s.passung[u.id],b:r.passung[u.id],d:r.passung[u.id]-s.passung[u.id]})).sort((u,d)=>Math.abs(d.d)-Math.abs(u.d)),l=c.filter(u=>u.d!==0);o+=`<h4 class="wh">${M("wenn_wege")}</h4>`,o+=l.length?`<table class="wtab"><tr><th>${M("wenn_weg")}</th><th>${M("wenn_jetzt")}</th><th>${M("wenn_dann")}</th><th></th></tr>
      ${c.slice(0,8).map(u=>{let d=u.d>0?"var(--ok)":u.d<0?"#c0392b":"#8b94ab";return`<tr><td>${u.p.icon} ${be(X(u.p.name))}</td><td>${u.a}%</td><td><b>${u.b}%</b></td>
          <td style="color:${d};font-weight:800;white-space:nowrap">${u.d>0?"\u25B2 +":u.d<0?"\u25BC ":"\u2013 "}${u.d!==0?Math.abs(u.d):""}</td></tr>`}).join("")}</table>`:`<p class="whint">${M("wenn_gleich")}</p>`;let h=V.kompetenzen.map(u=>({k:u,d:Math.round((r.pct[u.id]-s.pct[u.id])*100),sa:s.stufen[u.id],sb:r.stufen[u.id]})).filter(u=>u.d!==0||u.sa!==u.sb).sort((u,d)=>Math.abs(d.d)-Math.abs(u.d)).slice(0,6);if(h.length){o+=`<h4 class="wh">${M("wenn_komp")}</h4><div class="wchips">`;for(let u of h){let d=V.felder[Nt[u.k.id].feld],p=u.sa!==u.sb?` \xB7 ${M("stufe")} ${u.sa}\u2192${u.sb}`:"";o+=`<span class="wchip" style="border-color:${d.farbe};color:${d.farbe}" title="${be(X(u.k.name))}">
        ${u.k.id} ${u.d>0?"+":""}${u.d}%${p}</span>`}o+="</div>"}o+=`<p class="whint">${M("wenn_hinweis")}</p>`,i.innerHTML=o,i.querySelectorAll(".wbtn").forEach(u=>u.onclick=()=>{let d=u.dataset.typ,p=u.dataset.wert;Gn[d]=Gn[d]===p?null:p,Hm()})}function Tv(){let{score:i,max:e}=jn(),t={};V.kompetenzen.forEach(a=>t[a.id]=e[a.id]?i[a.id]/e[a.id]:0);let n={};V.kompetenzen.forEach(a=>{let o=Pi(a.id);o&&(n[a.id]=o)});let s=(window.KARRIERE&&window.KARRIERE.pfade||[]).map(a=>({id:a.id,name:X(a.name),fit:co(a,t)})).sort((a,o)=>o.fit-a.fit).slice(0,5),r=a=>{let o=V.kompetenzen.filter(l=>l.feld===a),c=o.reduce((l,h)=>l+(e[h.id]||0),0);return c?Math.round(o.reduce((l,h)=>l+(i[h.id]||0),0)/c*100):0};return{v:1,name:R.name||"",mode:R.mode,placed:{[R.mode]:R.placed[R.mode]},tutor:{stufen:n,passung:s,felder:{fa:r("fa"),ki:r("ki"),fu:r("fu")},ects:{bsc:on("bsc"),msc:on("msc")}}}}async function Av(){let i=JSON.stringify(Tv());try{return await navigator.clipboard.writeText(i),_t(M("tutor_kopiert")),!0}catch{let t=document.createElement("textarea");t.value=i,Object.assign(t.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%,-50%)",zIndex:60,width:"min(560px,90vw)",height:"160px",fontSize:"11px",padding:"8px"}),document.body.appendChild(t),t.select();try{document.execCommand("copy"),_t(M("tutor_kopiert"))}catch{_t(M("tutor_kopieren_manuell"))}return setTimeout(()=>t.remove(),4e3),!1}}function Rv(){let i=window.claude&&typeof window.claude.complete=="function"?window.claude.complete.bind(window.claude):null;if(!i){if(Wf){let h=document.getElementById("tutorFab");h.style.display="block",h.title=M("tutor_ext"),h.setAttribute("aria-label",M("tutor_ext")),h.onclick=async()=>{V.slots.some(u=>Ne(u.slot))&&await Av(),window.open(Wf,"_blank","noopener")}}return}let e=document.getElementById("tutorFab"),t=document.getElementById("tutor"),n=document.getElementById("tutorMsgs");e.style.display="block";let s=[],r="tutor",a=null,o=(h,u)=>{let d=document.createElement("div");return d.className="tmsg "+h,d.textContent=u,n.appendChild(d),n.scrollTop=n.scrollHeight,d};e.onclick=()=>{t.classList.toggle("open"),t.classList.contains("open")&&!n.children.length&&o("bot",M("tutor_hi"))},document.getElementById("tutorClose").onclick=()=>t.classList.remove("open");let c=()=>{if(r==="vignette"&&a){let d=ro(a);return`ROLLENSPIEL-MODUS im Lernspiel \xABDas Kompetenzhaus\xBB (Psychologiestudium UZH). Du spielst eine FIKTIVE Klientin/Person passend zum Modul \xAB${Et(a)}\xBB (Kontext: ${d?X(d.heute).slice(0,240):""}). Regeln: (1) Alles ist erfunden \u2014 keine realen Ratschl\xE4ge, keine echten Diagnosen an die Nutzenden. (2) Bleibe konsequent in der Rolle, antworte kurz (2\u20134 S\xE4tze), realistisch, aber didaktisch ergiebig. (3) KEINE Schilderung akuter Suizidalit\xE4t oder schwerer Krisen; falls die Nutzenden solche Themen einbringen, verlasse die Rolle und verweise auf professionelle Hilfe (in der Schweiz: 143 / 147). (4) Wenn die Nutzenden \xABStopp\xBB schreiben, verlasse die Rolle und stelle GENAU EINE kurze Reflexionsfrage zum Gespr\xE4ch. Sprache: ${R.lang==="de"?"Deutsch (Schweizer Rechtschreibung)":"English"}.`}let h=V.slots.filter(d=>Ne(d.slot)).map(d=>Et(d)).join("; ")||"-",u=Sc();return`Du bist der \xABKI-Baututor\xBB im Lernspiel \xABDas Kompetenzhaus\xBB (Psychologiestudium UZH, BSc/MSc; Module = Bausteine eines Hauses; Kompetenzen: Fa1\u2013Fa10 fachlich, KI1\u2013KI6 KI, Fu1\u2013Fu3 Future Skills; Pr\xFCfungslogik [A] KI-frei / [B] teilweise / [C] KI-integriert; Basis: Kompetenzaufbaumodell 02.07.2026, ein ENTWURF als Gespr\xE4chsbasis). Antworte kurz (max. 120 W\xF6rter), freundlich, auf ${R.lang==="de"?"Deutsch (Schweizer Rechtschreibung)":"English"}. Keine Rechtsausk\xFCnfte; verweise bei Studienberatung an die Studienprogrammleitung. Spielstand: gebaut = ${h}. Empfohlener n\xE4chster Baustein: ${u?Et(ut[u]):"-"}.`};qu={open(h,u){r=h||"tutor",a=u||null,s=[],t.classList.add("open"),r==="vignette"&&(n.innerHTML="",o("bot",M("ai_vignette_sys")),l("(Beginne das Gespr\xE4ch mit einer kurzen Vorstellung deiner fiktiven Rolle.)",!0))}};let l=async(h,u)=>{let d=document.getElementById("tutorInput"),p=h||d.value.trim();if(!p)return;h||(d.value=""),u||o("me",p);let g=o("bot","\u2026"),_="Studierende:r",f=r==="vignette"?"Klientin":"Baututor";s.push(_+": "+p);try{let m=await i(c()+`

`+s.slice(-8).join(`
`)+`
`+f+":");g.textContent=String(m).trim(),s.push(f+": "+g.textContent)}catch{g.textContent=M("tutor_err")}r==="vignette"&&(p.toLowerCase().startsWith("stopp")||p.toLowerCase().startsWith("stop"))&&(r="tutor",a=null,s=[])};document.getElementById("tutorSend").onclick=()=>l(),document.getElementById("tutorInput").addEventListener("keydown",h=>{h.key==="Enter"&&l()})}function wc(i,e,t="application/json"){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:t})),n.download=i,n.click(),URL.revokeObjectURL(n.href)}function Cv(){let i=R.msSeen[R.mode]||[],e=V.meilensteine.filter(t=>i.includes(t.id)).map(t=>({"@context":"https://www.w3.org/ns/credentials/v2",type:["VerifiableCredential","OpenBadgeCredential"],name:t.name.de,description:t.text.de,credentialSubject:{type:["AchievementSubject"],identifier:R.name||"anonym",achievement:{type:["Achievement"],name:t.name.de,description:t.text.de,criteria:{narrative:"Meilenstein im Kompetenzhaus (Selbstdeklaration, unsigniert \u2014 Entwurf)"},alignment:V.kompetenzen.map(n=>({type:["Alignment"],targetName:n.id+" "+n.name.de}))}},issuer:{type:["Profile"],name:"Das Kompetenzhaus \u2014 Psychologisches Institut UZH (Entwurf, unsigniert)"},validFrom:new Date().toISOString(),proof:[]}));wc("kompetenzhaus-badges.json",JSON.stringify(e,null,2))}function Iv(){let{score:i,max:e}=jn(),t=`# Kompetenzportfolio \u2014 ${R.name||"\u2014"}

_${M("passdatum")}: ${new Date().toLocaleDateString("de-CH")} \xB7 ${R.mode==="serious"?"Serious Mode":"Freies Bauen"} \xB7 BSc ${on("bsc")}/120 ECTS \xB7 MSc ${on("msc")}/120 ECTS_

> Entwurf auf Basis des Kompetenzaufbaumodells vom 02.07.2026 \u2014 Selbstdeklaration, kein offizieller Leistungsnachweis.

## Kompetenzprofil

`;for(let n of["fa","ki","fu"]){t+=`### ${V.felder[n].name.de}

`;for(let s of V.kompetenzen.filter(r=>r.feld===n)){let r=e[s.id]?Math.round(i[s.id]/e[s.id]*100):0,a=Pi(s.id);t+=`- **${s.id} ${s.name.de}** \u2014 ${r}%${a?`, Stufe ${a}`:""}${eo(s.id,a)?`
  - _${eo(s.id,a)}_`:""}
`}t+=`
`}t+=`## Module & Reflexionen

`;for(let n of V.slots){if(!Ne(n.slot))continue;let s=R.quests[n.slot]||{},r=Cs(n);t+=`- **${Et(n)}** (${n.ects} ECTS)${R.quiz[r]?" \xB7 Quiz \u2713":""}${s.done?" \xB7 Quest \u2726":""}${s.note?`
  - Merksatz: \xAB${s.note}\xBB`:""}
`}wc("kompetenzhaus-portfolio.md",t,"text/markdown")}var tm=null;function Pv(i){if(Gt.active)return;let{score:e,max:t}=jn(),n=[{id:"fa",name:"Fach",nameEn:"Domain"},{id:"ki",name:"KI",nameEn:"AI"},{id:"fu",name:"Future",nameEn:"Future"}],s=[];for(let a of n){let o=V.kompetenzen.filter(u=>u.feld===a.id).map(u=>u.id),c=o.reduce((u,d)=>u+e[d],0)/Math.max(1,o.reduce((u,d)=>u+t[d],0)),l=i[a.id]||0,h=Math.round((c-l)*1e3)/10;h>=.1&&s.push({txt:R.lang==="de"?a.name:a.nameEn,d:h,farbe:V.felder[a.id].farbe})}if(!s.length)return;let r=document.getElementById("deltaCard");r.innerHTML=`<b>${M("delta_titel")}</b>`+s.map(a=>`<span class="drow"><span class="ddot" style="background:${a.farbe}"></span>${be(a.txt)} <b style="color:${a.farbe}">+${a.d.toFixed(1)}%</b></span>`).join(""),r.classList.add("show"),clearTimeout(tm),tm=setTimeout(()=>r.classList.remove("show"),3400)}function Lv(){let{score:i,max:e}=jn(),t={};for(let n of["fa","ki","fu"]){let s=V.kompetenzen.filter(r=>r.feld===n).map(r=>r.id);t[n]=s.reduce((r,a)=>r+i[a],0)/Math.max(1,s.reduce((r,a)=>r+e[a],0))}return t}var nm=null;function _t(i){let e=document.getElementById("toast");e.textContent=i,e.classList.add("show"),clearTimeout(nm),nm=setTimeout(()=>e.classList.remove("show"),3200)}document.getElementById("obStart").onclick=()=>{R.name=document.getElementById("obName").value.trim().slice(0,40),R.onboarded=!0,tt(),document.getElementById("modalOnboard").classList.remove("open"),SND.unlock();let i=Ne("003")?Sc():"003";i&&Ci(i),setTimeout(ho,900)};document.getElementById("modalOnboard").addEventListener("click",i=>{(i.target===document.getElementById("modalOnboard")||i.target.hasAttribute("data-close"))&&!R.onboarded&&!Gt.active&&(R.onboarded=!0,tt(),setTimeout(ho,900))});document.getElementById("btnBadges").onclick=Cv;document.getElementById("btnOlat").onclick=Iv;document.getElementById("btnFb").onclick=()=>{let i=Object.entries(R.fb||{});if(!i.length){_t(M("fb_leer"));return}let e=s=>'"'+String(s||"").replace(/"/g,'""')+'"',t={g:"gruen",y:"gelb",r:"rot"},n=`\uFEFFcode;modul;ampel;kommentar;datum
`;for(let[s,r]of i){let a=ut[s];if(!a)continue;let o=(R.placed[R.mode][s]||{}).opt||a.code;n+=[e(o),e(Et(a)),t[r.a]||"",e(r.note),r.ts||""].join(";")+`
`}wc("kompetenzhaus-feedback-"+new Date().toISOString().slice(0,10)+".csv",n,"text/csv;charset=utf-8"),_t("\u{1F6A6} "+M("fb_exported").replace("{n}",i.length))};var im={de:[["v13 \xB7 August 2026","Zwei Wege statt einem: Neben dem Haus gibt es jetzt eine <b>Listenansicht</b> (Knopf \u{1F4CB} oben) \u2014 derselbe Studienplan, dasselbe Kompetenzprofil, als lesbares und druckbares Dokument, vollst\xE4ndig mit der Tastatur bedienbar. Wo kein WebGL l\xE4uft, startet das Kompetenzhaus direkt dort statt gar nicht. Ausserdem: <b>fachliche Ketten</b> in der Modulkarte (worauf ein Modul aufbaut und wo es gebraucht wird \u2014 mit dem Gegenstand, nicht nur dem Modulnamen), <b>Positionsfragen</b> im Quiz, die zwei vertretbare Haltungen nebeneinanderstellen statt eine richtige Antwort, ein <b>Statik-Check</b> deiner Pr\xFCfungslogik gegen die Two-Lane-Regel, ein k\xFCrzerer Karriere-Tab und Quests, die \xF6fter mit deinem eigenen Versuch beginnen statt mit der KI-Antwort."],["v12 \xB7 August 2026","Nachweis statt Klicks: Das Quiz-Gate l\xE4sst sich nicht mehr durch Ausschluss erraten, und ein Baustein gilt erst als belegt, wenn das Quiz sitzt oder die Quest einen eigenen Merksatz hat. 86 von 172 Lernzielen fachlich \xFCberarbeitet \u2014 die h\xE4ufigste Schw\xE4che war, dass ein Ziel die T\xE4tigkeit nannte statt den Gegenstand. Neuer <b>Feedbackmodus im Fallgespr\xE4ch</b> beim KI-Baututor: Vorbereiten, Rolle spielen, R\xFCckmeldung \u2014 Selbsteinsch\xE4tzung vor Fremdeinsch\xE4tzung, klar getrennt von jeder Leistungsbeurteilung. Barrierefreiheit nachgemessen und Kontraste, Fokusf\xFChrung und Tastaturbedienung der Dialoge korrigiert. Drei Kontroversen des Fachs neu verankert, ein sachlicher Fehler zur Validit\xE4t von Auswahlverfahren korrigiert."],["v10/v11 \xB7 August 2026","Deine Wahl wirkt sich sichtbar aus: Die Karriere-Passung h\xE4ngt jetzt wirklich an deinen Wahlentscheidungen, nicht nur am Pflichtprogramm \u2014 und \xAB<b>Was w\xE4re, wenn?</b>\xBB stellt deiner Wahl eine Alternative gegen\xFCber und zeigt, was sich je Berufsweg verschiebt. 12 statt 9 Karrierewege, aus den Fachbereichen abgeleitet. Alle 42 Modulquiz \xFCberarbeitet (126 Fragen, acht rotierende Motive statt einer Taxonomiefrage). Die Modulkarte ist ein Bottom-Sheet mit drei Raststufen geworden, der Lesebereich f\xFCr Lernziele und Quests damit gut doppelt so hoch. Kompetenzpass mit Karrieresteckbrief."],["v9 \xB7 Juli 2026","Die Bachelorarbeit ist neu empirisch-methodisch statt Literaturarbeit: drei Arbeitsformen (Datensatz-Analyse \u{1F4CA}, Repro-Check \u{1F501}, strukturierter Review \u{1F5C2}\uFE0F), neun vorgegebene Fragestellungen, KI-integriert mit w\xE4hlbarem Artefakt \u2014 und eine kurze m\xFCndliche Pr\xFCfung ohne KI als Validit\xE4tsanker. Die Masterarbeit liegt sichtbar eine Stufe dar\xFCber."],["v8 \xB7 Juli 2026","Dein Wahlprofil wird zum Haus: Themenwahl in den drei BSc-Wahlseminaren und im BA-Themenfeld pr\xE4gt Erker, Dach und ein eigenes Wahrzeichen; im Master zeigt jede Vertiefung ihren Schwerpunkt architektonisch, ab 4 von 6 im selben Schwerpunkt entsteht ein grosses Wahrzeichen (Observatorium, Therapiegarten, Glasatrium). Wahlpflicht (goldene Kante) und freie Wahl (weisse Kante) sind sichtbar unterschieden, Auskragendes wird von Konsolen und St\xFCtzen getragen. Neu ausserdem: kuratierte Farbwelten pro Haus, zwei neue Baustile, Karriere-Tab mit Soll-Profilen, L\xFCckenanalyse und \xABNach dem Master\xBB-Roadmaps (inkl. Psychotherapie- und Neuropsychologie-Weg), Masterarbeit als \xABMeisterst\xFCck\xBB der Stufe 4."],["v7 \xB7 Juli 2026","Echter Keller unter dem Bodenniveau (Sockel ragen ins Erdreich), Haus vergr\xF6ssert & Innenr\xE4ume 1:1 an die Aussenh\xFClle gekoppelt, Porch mit Vordach und Stufen, Erstbau-Sequenz f\xFCr neue Besucher:innen, Bauh\xFCtte mit Evidenz zu den 8 Lehrelementen, Ampel-Feedback \u{1F6A6} an jedem Modul mit CSV-Export."],["v6 \xB7 Juli 2026","Mobile-\xDCberarbeitung (Tour, Kontraste, gr\xF6ssere Ziele), Quiz mit Erkl\xE4rung und Sofort-Wiederholung, 7 Karrierewege, Faktenkorrektur IPS-Leistungsnachweis [B]."],["v5 \xB7 Juli 2026","Baukasten-Chips in der Modul-Karte, Vorstufe-\u24EA-Briefkasten, Minor-Beet, KI-Suite in der Artifact-Version."],["v4 \xB7 Juli 2026","Begehbare Kellerr\xE4ume, 12 Future-Skills-Felder (AIComp), Innenraum-Politur, Kompetenzpass als PDF."],["v3 \xB7 Juli 2026","Quiz-Gate im Serious Mode, Karriere-Profil, Innenansicht mit Kompetenz-Tafeln, Foto-Modus, Open-Badges- und Portfolio-Export."]],en:[["v13 \xB7 August 2026","Two ways in instead of one: alongside the house there is now a <b>list view</b> (\u{1F4CB} button at the top) \u2014 the same study plan and the same competence profile, as a readable and printable document, fully keyboard-operable. Where WebGL is unavailable, the Kompetenzhaus now starts there rather than not at all. Also: <b>subject-matter chains</b> on module cards (what a module builds on and where it is used later \u2014 naming the content, not just the module), <b>position questions</b> in the quiz that put two defensible stances side by side instead of one right answer, a <b>structural check</b> of your assessment logic against the two-lane rule, a shorter career tab, and quests that more often start with your own attempt rather than the AI's answer."],["v12 \xB7 August 2026","Evidence instead of clicks: the quiz gate can no longer be guessed by elimination, and a block only counts as evidenced once the quiz is passed or the quest carries a note of your own. 86 of 172 learning objectives revised \u2014 the most common weakness was naming the activity rather than the subject. New <b>feedback mode for case conversations</b> in the AI building tutor: prepare, play the role, receive feedback \u2014 self-assessment before external assessment, clearly separated from any grading. Accessibility measured and contrast, focus handling and keyboard operation of dialogues fixed. Three disciplinary controversies newly anchored, and a factual error about the validity of selection procedures corrected."],["v10/v11 \xB7 August 2026","Your choices now visibly matter: career fit really depends on your electives, not only on the compulsory programme \u2014 and \xAB<b>What if?</b>\xBB sets an alternative against your choice and shows what shifts for each career path. 12 career paths instead of 9, derived from the subject areas. All 42 module quizzes revised (126 questions, eight rotating motifs instead of one taxonomy question). The module card became a bottom sheet with three detents, roughly doubling the reading area for objectives and quests. Competence passport with a career profile page."],["v9 \xB7 July 2026","The bachelor's thesis is now empirical and methodological rather than a literature review: three formats (dataset analysis \u{1F4CA}, reproduction check \u{1F501}, structured review \u{1F5C2}\uFE0F), nine given research questions, AI-integrated with a choosable artefact \u2014 and a short AI-free oral exam as a validity anchor. The master's thesis sits visibly one level above."],["v8 \xB7 July 2026","Your elective profile becomes the house: topic choices in the three BSc elective seminars and the thesis field shape bay windows, roof and a landmark of your own; in the Master's each specialisation shows its track architecturally, and 4 of 6 in the same track build a large landmark (observatory, therapy garden, glass atrium). Compulsory electives (gold edge) and free electives (white edge) are visibly distinct, and everything cantilevered is carried by corbels and columns. Also new: curated colour worlds per house, two new building styles, a career tab with target profiles, gap analysis and post-Master roadmaps (incl. the psychotherapy and neuropsychology routes), and the Master's thesis as a level-4 \xABmasterpiece\xBB."],["v7 \xB7 July 2026","A real basement below ground level (plinths reach into the earth), bigger house with interiors matched 1:1 to the exterior shell, porch with canopy and steps, first-build sequence for new visitors, site hut with evidence for the 8 teaching elements, traffic-light feedback \u{1F6A6} on every module with CSV export."],["v6 \xB7 July 2026","Mobile overhaul (tour, contrast, larger targets), quiz with explanations and instant retry, 7 career paths, factual fix for the IPS assessment [B]."],["v5 \xB7 July 2026","Teaching-toolkit chips on module cards, stage-\u24EA mailbox, minor garden bed, AI suite in the artifact edition."],["v4 \xB7 July 2026","Walkable basement rooms, 12 future-skills fields (AIComp), interior polish, passport as PDF."],["v3 \xB7 July 2026","Quiz gate in serious mode, career profile, interior view with competence plaques, photo mode, Open Badges and portfolio export."]]};document.getElementById("btnTour").onclick=()=>{document.getElementById("modalMenu").classList.remove("open"),!Gt.active&&(Ps(),ho(!0))};document.getElementById("btnBauhuetteM").onclick=()=>{document.getElementById("modalMenu").classList.remove("open"),fd()};document.getElementById("btnGeraeteM").onclick=()=>{document.getElementById("modalMenu").classList.remove("open"),Rm()};document.getElementById("btnStatikM").onclick=()=>{document.getElementById("modalMenu").classList.remove("open"),Om()};document.getElementById("btnChangelog").onclick=()=>{let i=im[R.lang]||im.de;document.getElementById("clogList").innerHTML=i.map(([e,t])=>`<div class="bhrow"><b>${e}</b><p>${t}</p></div>`).join(""),document.getElementById("modalMenu").classList.remove("open"),Ut("changelog")};var Dv=new Ra;function vd(){let i=window.innerWidth,e=window.innerHeight;yn.setSize(i,e,!1),Ft.aspect=i/e,Ft.updateProjectionMatrix(),R.ansicht==="liste"&&Wm()}window.addEventListener("resize",vd);vd();var jt=0,Gm=0;function Vm(){requestAnimationFrame(Vm),Tc()}function Tc(){Gm=performance.now();let i=Math.min(.5,Dv.getDelta()),e=i;$u>0&&($u-=i,e=0),jt+=e;for(let t=Qi.length-1;t>=0;t--){let n=Qi[t];n.t+=e;let s=Math.min(1,n.t/n.dur);n.fn(n.ease(s)),s>=1&&(Qi.splice(t,1),n.onDone&&n.onDone())}if(Wn){let t=1+Math.sin(jt*5)*.02;Wn.scale.set(t,t,t)}for(let t of Object.values(kt)){let n=t.getObjectByName("sparkle");n&&(n.rotation.y+=e*2.4,n.position.y+=Math.sin(jt*3)*.0022);let s=t.getObjectByName("flag");s&&(s.rotation.y=Math.sin(jt*2.2)*.25);let r=t.getObjectByName("pennant");if(r){let a=r.getObjectByName("pflag");a&&(a.rotation.y=Math.sin(jt*3.1+t.position.x)*.35)}}if(Ei.traverse(t=>{t.name==="flag"&&(t.rotation.y=Math.sin(jt*1.8)*.3)}),wt&&wt.group.traverse(t=>{if(t.name==="spin"&&(t.rotation.y+=e*.8),t.userData.wallN){let n=Ft.position.clone().sub(wt.group.position).normalize(),r=t.userData.wallN.dot(n)<-.25?.12:1;t.scale.y+=(r-t.scale.y)*Math.min(1,e*9),t.position.y=t.geometry.parameters.height/2*t.scale.y}}),Cn.length&&Cn[0].emissiveIntensity>0){let t=.9+Math.sin(jt*7.3)*.04+Math.sin(jt*13.7)*.03;for(let n of Cn)n.emissiveIntensity>0&&(n.emissiveIntensity=t)}if(Ir.visible){let t=Ju[R.season],n=new Pe,s=new cn;for(let r=0;r<dd;r++){let a=$_[r];a.p.y-=t.ambFall*e*(.6+a.s*.5),a.p.x+=Math.sin(jt*.8+a.ph)*e*.7,a.p.y<.2&&(a.p.y=16+Math.random()*5),s.set(jt*1.4+a.ph,a.ph,jt*.9),n.makeRotationFromEuler(s),n.scale(new S(a.s,a.s,a.s)),n.setPosition(a.p),Ir.setMatrixAt(r,n)}Ir.instanceMatrix.needsUpdate=!0}if(Qu){let t=Math.sin(jt*13);St.userData.legs.forEach((n,s)=>n.rotation.x=(s?1:-1)*t*.65),St.userData.arms.forEach((n,s)=>n.rotation.x=(s?-1:1)*t*.5)}else St.rotation.y+=Math.sin(jt*.6)*.0012;for(let t of fm)t.position.x+=t.userData.v*e,t.position.x>75&&(t.position.x=-75);if(gc.material.opacity>0){let t=gc.geometry.attributes.position;for(let n=0;n<t.count;n++)t.setY(n,.7+Math.abs(Math.sin(jt*.7+n*2.1))*2.2),t.setX(n,t.getX(n)+Math.sin(jt*.5+n)*.008);t.needsUpdate=!0,gc.material.size=.3+Math.sin(jt*4)*.08}if(qt.update(),_c>0){_c-=e;let t=_c*.5;Ft.position.x+=(Math.random()-.5)*t,Ft.position.y+=(Math.random()-.5)*t}xc&&R.ansicht!=="liste"&&yn.render(Je,Ft)}var sm=null;function Ac(i,e=!0){R.ansicht=i,e&&tt();let t=document.getElementById("liste"),n=i==="liste";t.hidden=!n,document.body.classList.toggle("liste-an",n),Rn.setAttribute("aria-hidden",n?"true":"false");let s=document.getElementById("btnAnsicht");s.setAttribute("aria-pressed",n?"true":"false"),s.innerHTML=n?`\u{1F3E0} <span>${M("ansicht_haus")}</span>`:`\u{1F4CB} <span>${M("ansicht_liste")}</span>`,n?($m(),Wm(),t.focus({preventScroll:!0})):(Ii(),vd())}function Wm(){let i=document.getElementById("topbar");document.getElementById("liste").style.paddingTop=Math.ceil(i.getBoundingClientRect().height+8)+"px"}var rm=i=>!!(i.schwerpunktwahl||i.optionen||Ri[i.slot]||i.slot==="BA");function kv(i){if(Ne(i.slot))return{ico:"\u2714",lbl:M("li_gebaut"),cls:"gebaut"};let e=ui(i);return e.ok?{ico:"\u25CB",lbl:M("li_offen"),cls:""}:{ico:"\u{1F512}",lbl:M("li_gesperrt"),cls:"gesperrt",grund:e.reason||""}}function $m(){let i=document.getElementById("listeBody");if(!i||R.ansicht!=="liste")return;let{score:e,max:t}=jn(),n=V.slots.filter(h=>Ne(h.slot)).length,s=xm(),r=`<h1>${M("li_titel")}</h1><p class="lead">${M("li_lead")}</p>`;xc||(r+=`<div class="lwarn" role="status">${M("li_kein3d")}</div>`),r+=`<section class="lsec"><h2>${M("li_fortschritt")}</h2><div class="lstat">
      <div><b class="lnum">${on("bsc")}</b><span>BSc / 120 ${M("ects")}</span></div>
      <div><b class="lnum">${on("msc")}</b><span>MSc / 120 ${M("ects")}</span></div>
      <div><b class="lnum">${n}</b><span>${M("li_module")}</span></div>
      <div><b class="lnum">${s}</b><span>${M("li_geprueft")}</span></div>
    </div><p class="lhint">${M("li_geprueft_hint")}</p></section>`,r+=`<section class="lsec"><h2>${M("li_profil")}</h2>`;for(let h of["fa","ki","fu"]){let u=V.felder[h];r+=`<div class="lkfeld"><span class="fdot" style="background:${u.farbe}"></span>${X(u.name)}</div>`;for(let d of V.kompetenzen.filter(p=>p.feld===h)){let p=t[d.id]?Math.round(e[d.id]/t[d.id]*100):0,g=Pi(d.id);r+=`<details class="lk" data-k="${d.id}"${sm===d.id?" open":""}>
        <summary><span class="kid">${d.id}</span><span>${X(d.name)}</span>
          <span class="ltrack"><i style="background:${u.farbe};width:${p}%"></i></span>
          <span class="lpct">${p}% <span style="color:#8b94ab">\xB7 ${M("li_stufe_kurz")}${g}</span></span>
          <span class="lchev" aria-hidden="true">\u25B8</span></summary>
        <div data-kbody></div></details>`}}r+="</section>",r+=`<section class="lsec"><h2>${M("li_plan")}</h2>`;for(let h of["bsc","msc"]){r+=`<div class="lkfeld">${h==="bsc"?"\u{1F3E0} "+M("haus_bsc"):"\u{1F3F0} "+M("haus_msc")} \xB7 <span class="lnum">${on(h)}/120 ${M("ects")}</span></div>`;for(let u of V.bauplan[h]){if(!u.slots.length)continue;let d=u.slots.filter(p=>Ne(p)).length;r+=`<div class="ltabwrap"><table class="ltab"><caption>${M("sem")} ${u.sem} \xB7 ${u.hs?M("hs"):M("fs")} \u2014 <span class="lnum">${d}/${u.slots.length}</span></caption>
        <thead><tr><th scope="col">${M("li_th_status")}</th><th scope="col">${M("li_th_modul")}</th>
        <th scope="col" class="opt">${M("li_th_kat")}</th><th scope="col">${M("li_th_ects")}</th>
        <th scope="col" class="opt">${M("li_th_stufe")}</th><th scope="col" class="opt">${M("li_th_pruef")}</th>
        <th scope="col" class="opt">${M("li_th_komp")}</th><th scope="col" class="meta" aria-hidden="true"></th><th scope="col" class="tun">${M("li_th_tun")}</th></tr></thead><tbody>`;for(let p of u.slots){let g=ut[p],_=kv(g),f=Ne(p),{komp:m,kat:v}=Bt(g),y=[...m.fa||[],...m.ki||[],...m.fu||[]],x=g.kategorie==="Wahlpflicht"?M("kat_wahlpflicht"):g.kategorie==="Wahl"?M("kat_wahl"):M("kat_pflicht"),E=R.placed[R.mode][p];r+=`<tr class="${_.cls}">
          <td class="stc"><span class="lst" role="img" aria-label="${be(_.lbl)}" title="${be(_.lbl+(_.grund?" \u2014 "+_.grund:""))}">${_.ico}</span></td>
          <td class="lmod"><b>${Et(g)}</b><small>${E&&E.opt||g.code} \xB7 ${X(V.gruppen[g.gruppe].name)}${R.quiz[Cs(g)]?" \xB7 \u{1F6A9}":""}${(R.quests[p]||{}).done?" \u2726":""}</small></td>
          <td class="opt">${x}</td>
          <td class="lnum ectsc">${E&&E.opt&&bt[E.opt]?bt[E.opt].ects:g.ects}</td>
          <td class="opt lnum">${g.stufe}</td>
          <td class="opt">${(v||"B").split(/[+/]/).map(w=>w.trim()).filter(w=>V.pruefungslogik[w]).map(w=>`[${w}]`).join(" ")}</td>
          <td class="opt"><span class="lkomp">${y.map(w=>Nt[w]?`<span style="--kf:${V.felder[Nt[w].feld].farbe}" title="${be(X(Nt[w].name))}">${w}</span>`:"").join("")}</span></td>
          <td class="meta" aria-hidden="true">${x} \xB7 ${E&&E.opt&&bt[E.opt]?bt[E.opt].ects:g.ects} ${M("ects")} \xB7 ${M("li_th_stufe")} ${g.stufe} \xB7 ${(v||"B").split(/[+/]/).map(w=>w.trim()).filter(w=>V.pruefungslogik[w]).map(w=>`[${w}]`).join(" ")}</td>
          <td class="tun"><span class="ltun">
            <button class="lbtn" data-det="${p}">${M("li_details")}</button>
            ${f?`<button class="lbtn" data-rm="${p}">${M("li_entfernen")}</button>`:`<button class="lbtn pri" data-bau="${p}"${_.cls==="gesperrt"?" disabled":""}>${M("li_bauen")}${rm(g)?" \u2026":""}</button>`}
          </span></td></tr>`}r+="</tbody></table></div>"}}r+="</section>",r+=`<section class="lsec noprint"><h2>${M("li_werkzeuge")}</h2><div class="lwerk">
      <button class="lbtn pri" data-w="pass">\u{1F393} ${M("pass")}</button>
      <button class="lbtn" data-w="karriere">\u{1F9ED} ${M("ptab_karriere")}</button>
      <button class="lbtn" data-w="statik">\u{1F3DB}\uFE0F ${M("statik_menu").replace(/^\S+\s/,"")}</button>
      <button class="lbtn" data-w="wenn">\u{1F500} ${M("wenn_titel")}</button>
      <button class="lbtn" data-w="tutor">\u{1F916} ${M("tutor_titel")}</button>
      <button class="lbtn" data-w="hilfe">${M("hilfe")}</button>
      <button class="lbtn" data-w="print">\u{1F5A8}\uFE0F ${M("li_drucken")}</button>
    </div></section>`;let a=document.getElementById("liste").scrollTop,o=document.activeElement,l=(o&&i.contains(o)?o.dataset.bau?"bau":o.dataset.rm?"rm":o.dataset.det?"det":null:null)?o.dataset.bau||o.dataset.rm||o.dataset.det:null;if(i.innerHTML=r,document.getElementById("liste").scrollTop=a,i.querySelectorAll("details.lk").forEach(h=>{let u=()=>{let d=h.querySelector("[data-kbody]");d.childElementCount||(d.innerHTML=Im(h.dataset.k),Pm(d,h.dataset.k))};h.open&&u(),h.addEventListener("toggle",()=>{sm=h.open?h.dataset.k:null,h.open&&u()})}),i.querySelectorAll("[data-det]").forEach(h=>h.onclick=()=>{xn=h.dataset.det,SND.pick(),kr(h.dataset.det)}),i.querySelectorAll("[data-bau]").forEach(h=>h.onclick=()=>{let u=ut[h.dataset.bau];if(rm(u)){xn=u.slot,SND.pick(),kr(u.slot);return}Fr(u)}),i.querySelectorAll("[data-rm]").forEach(h=>h.onclick=()=>Tm(h.dataset.rm)),i.querySelectorAll("[data-w]").forEach(h=>h.onclick=()=>{let u=h.dataset.w;u==="pass"?document.getElementById("btnPass").click():u==="karriere"?(Ac("haus"),Pr="karriere",es=null,nn(),document.getElementById("panelR").classList.add("open")):u==="statik"?Om():u==="wenn"?zm():u==="tutor"?document.getElementById("tutorFab").click():u==="hilfe"?Ut("help"):u==="print"&&window.print()}),l){let h=i.querySelector(`[data-rm="${l}"], [data-bau="${l}"], [data-det="${l}"]`);h&&h.focus({preventScroll:!0})}}document.getElementById("btnAnsicht").onclick=()=>{SND.pick(),Ac(R.ansicht==="liste"?"haus":"liste")};sd();Nm();var am=vv();lo();mm();tn();nn();xc||(R.ansicht="liste");Ac(R.ansicht||"haus",!1);R.onboarded?R.envAuto&&_d():(R.season=id(),R.tod=62);Is();document.getElementById("todSlider").value=R.tod;Rv();so||setTimeout(()=>_t(M("storage_warn")),1500);!am&&!R.onboarded?setTimeout(Sv,700):!am&&!R.tourDone&&Object.keys(R.placed[R.mode]).length<3&&setTimeout(ho,1200);var Rc=(i,e)=>{let t=document.getElementById(i);t&&e&&(t.onclick=()=>{document.getElementById("modalMenu").classList.remove("open"),e.click()})};Rc("btnCampusM",document.getElementById("btnCampus"));Rc("btnShareM",document.getElementById("btnShare"));Rc("btnSoundM",document.getElementById("btnSound"));Rc("btnFotoM",document.getElementById("btnFoto"));window.__game={get state(){return R},checkMilestones:Am,save:tt,step:Tc,enterRoom:Bm,leaveRoom:io,openBauhuette:fd,avatarClamp:Em,get avatarPos(){return{x:St.position.x,z:St.position.z}},get interior(){return wt?{id:wt.id,opacity:wt.saved[0]?wt.saved[0].mat.opacity:null}:null},get tweens(){return Qi.map(i=>({t:i.t,dur:i.dur}))},get frame(){return jt},placeByChip:i=>{let e=ut[i];return e?(Ci(i),Fr(e)):!1}};Vm();setInterval(()=>{!document.hidden&&performance.now()-Gm>400&&Tc()},250);})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
