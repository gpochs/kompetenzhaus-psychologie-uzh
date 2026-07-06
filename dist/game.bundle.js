(()=>{var Ri={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Md=0,Vc=1,bd=2;var Wc=1,tl=2,qn=3,jr=0,ln=1,mt=2,Ii=0,aa=1,jc=2,Xc=3,qc=4,Sd=5,Xr=100,Ed=101,Td=102,wd=103,Ad=104,Rd=200,Cd=201,Id=202,Pd=203,Ld=204,Dd=205,Fd=206,Nd=207,Ud=208,Od=209,Bd=210,kd=211,zd=212,Hd=213,Gd=214,nl=0,il=1,rl=2,oa=3,sl=4,al=5,ol=6,ll=7,Vd=0,Wd=1,jd=2,li=0,Xd=1,qd=2,$d=3,cl=4,Yd=5,Kd=6,Zd=7;var $c=300,qr=301,Zi=302,hl=303,ul=304,la=306,po=1e3,Ir=1001,mo=1002,zn=1003,Jd=1004;var ca=1005;var Hn=1006,dl=1007;var Ji=1008;var $n=1009,Yc=1010,Kc=1011,$r=1012,pl=1013,Qi=1014,Cn=1015,Yr=1016,ml=1017,fl=1018,Kr=1020,Zc=35902,Jc=35899,Qd=1021,ep=1022,In=1023,ha=1026,ua=1027,gl=1028,_l=1029,tp=1030,Qc=1031;var eh=1033,vl=33776,yl=33777,xl=33778,Ml=33779,th=35840,nh=35841,ih=35842,rh=35843,sh=36196,ah=37492,oh=37496,lh=37808,ch=37809,hh=37810,uh=37811,dh=37812,ph=37813,mh=37814,fh=37815,gh=37816,_h=37817,vh=37818,yh=37819,xh=37820,Mh=37821,bh=36492,Sh=36494,Eh=36495,Th=36283,wh=36284,Ah=36285,Rh=36286;var As=2300,fo=2301,uo=2302,Pc=2400,Lc=2401,Dc=2402;var np=3201;var ip=0,rp=1,er="",sn="srgb",Xi="srgb-linear",Rs="linear",tt="srgb";var ji=7680;var sp=512,ap=513,op=514,Ch=515,lp=516,cp=517,hp=518,up=519,go=35044;var Ih="300 es",si=2e3,Cs=2001;var Gn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zu=1234567,Rr=Math.PI/180,Pr=180/Math.PI;function kn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Ht[255&r]+Ht[r>>8&255]+Ht[r>>16&255]+Ht[r>>24&255]+"-"+Ht[255&e]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[63&t|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[255&n]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Oe(r,e,t){return Math.max(e,Math.min(t,r))}function Fc(r,e){return(r%e+e)%e}function Es(r,e,t){return(1-t)*r+t*e}function An(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Ph={DEG2RAD:Rr,RAD2DEG:Pr,generateUUID:kn,clamp:Oe,euclideanModulo:Fc,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:Es,damp:function(r,e,t,n){return Es(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(Fc(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(zu=r);let e=zu+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Rr},radToDeg:function(r){return r*Pr},isPowerOfTwo:function(r){return!(r&r-1)&&r!==0},ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:function(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))},setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*f,c*p,o*l);break;case"YXY":r.set(c*p,o*h,c*f,o*l);break;case"ZYZ":r.set(c*f,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:et,denormalize:An},Q=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],f=s[a+2],g=s[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=g);if(u!==g||c!==d||l!==p||h!==f){let m=1-o,_=c*d+l*p+h*f+u*g,v=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){let w=Math.sqrt(y),A=Math.atan2(w,_*v);m=Math.sin(m*A)/w,o=Math.sin(o*A)/w}let M=o*v;if(c=c*m+d*M,l=l*m+p*M,h=h*m+f*M,u=u*m+g*M,m===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+c*p-l*d,e[t+1]=c*f+h*d+l*u-o*p,e[t+2]=l*f+h*p+o*d-c*u,e[t+3]=h*f-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),p=c(i/2),f=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"YZX":this._x=d*h*u+l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u-d*p*f;break;case"XZY":this._x=d*h*u-l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nc.copy(this).projectOnVector(e),this.sub(nc)}reflect(e){return this.sub(nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nc=new b,Hu=new Yt,Ne=class r{constructor(e,t,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],g=i[0],m=i[3],_=i[6],v=i[1],y=i[4],M=i[7],w=i[2],A=i[5],C=i[8];return s[0]=a*g+o*v+c*w,s[3]=a*m+o*y+c*A,s[6]=a*_+o*M+c*C,s[1]=l*g+h*v+u*w,s[4]=l*m+h*y+u*A,s[7]=l*_+h*M+u*C,s[2]=d*g+p*v+f*w,s[5]=d*m+p*y+f*A,s[8]=d*_+p*M+f*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,p=l*s-a*c,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=u*g,e[1]=(i*l-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(h*t-i*c)*g,e[5]=(i*s-o*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ic.makeScale(e,t)),this}rotate(e){return this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ic=new Ne;function Lh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Is(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dp(){let r=Is("canvas");return r.style.display="block",r}var Gu={};function Lr(r){r in Gu||(Gu[r]=!0,console.warn(r))}function pp(r,e,t){return new Promise(function(n,i){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}},t)})}var Vu=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wu=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Um(){let r={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(i,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===tt&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(i.r=Cr(i.r),i.g=Cr(i.g),i.b=Cr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?Rs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Lr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Lr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Xi]:{primaries:e,whitePoint:n,transfer:Rs,toXYZ:Vu,fromXYZ:Wu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:Vu,fromXYZ:Wu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),r}var qe=Um();function ri(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Cr(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var dr,_o=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{dr===void 0&&(dr=Is("canvas")),dr.width=e.width,dr.height=e.height;let i=dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=dr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Is("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*ri(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*ri(t[n]/255)):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Om=0,Dr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(rc(i[a].image)):s.push(rc(i[a]))}else s=rc(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function rc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_o.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bm=0,sc=new b,Xt=class r extends Gn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=kn(),this.name="",this.source=new Dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sc).x}get height(){return this.source.getSize(sc).y}get depth(){return this.source.getSize(sc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n:console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case po:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case po:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=$c,Xt.DEFAULT_ANISOTROPY=1;var Ze=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],f=c[9],g=c[2],m=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(f+m)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,M=(p+1)/2,w=(_+1)/2,A=(h+d)/4,C=(u+g)/4,L=(f+m)/4;return y>M&&y>w?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=A/n,s=C/n):M>w?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=A/i,s=L/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=C/s,i=L/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-f)*(m-f)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vo=class extends Gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new Xt(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Dr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends vo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ps=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yo=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(s,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),Ua.subVectors(this.max,ps),pr.subVectors(e.a,ps),mr.subVectors(e.b,ps),fr.subVectors(e.c,ps),_i.subVectors(mr,pr),vi.subVectors(fr,mr),Hi.subVectors(pr,fr);let t=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Hi.z,Hi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Hi.z,0,-Hi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Hi.y,Hi.x,0];return!!ac(t,pr,mr,fr,Ua)&&(t=[1,0,0,0,1,0,0,0,1],!!ac(t,pr,mr,fr,Ua)&&(Oa.crossVectors(_i,vi),t=[Oa.x,Oa.y,Oa.z],ac(t,pr,mr,fr,Ua)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(En).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qn=[new b,new b,new b,new b,new b,new b,new b,new b],En=new b,Na=new mn,pr=new b,mr=new b,fr=new b,_i=new b,vi=new b,Hi=new b,ps=new b,Ua=new b,Oa=new b,Gi=new b;function ac(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Gi.fromArray(r,s);let o=i.x*Math.abs(Gi.x)+i.y*Math.abs(Gi.y)+i.z*Math.abs(Gi.z),c=e.dot(Gi),l=t.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var km=new mn,ms=new b,oc=new b,fn=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):km.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);let t=ms.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(oc)),this.expandByPoint(ms.copy(e.center).sub(oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ei=new b,lc=new b,Ba=new b,yi=new b,cc=new b,ka=new b,hc=new b,Wn=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){lc.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(lc);let s=.5*e.distanceTo(t),a=-this.direction.dot(Ba),o=yi.dot(this.direction),c=-yi.dot(Ba),l=yi.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*c-o,d=a*o-c,f=s*h,u>=0)if(d>=-f)if(d<=f){let g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=f?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(lc).addScaledVector(Ba,d),p}intersectSphere(e,t){ei.subVectors(e.center,this.origin);let n=ei.dot(this.direction),i=ei.dot(ei)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i?null:((o>n||n!=n)&&(n=o),(c<i||i!=i)&&(i=c),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,i,s){cc.subVectors(t,e),ka.subVectors(n,e),hc.crossVectors(cc,ka);let a,o=this.direction.dot(hc);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}yi.subVectors(this.origin,e);let c=a*this.direction.dot(ka.crossVectors(yi,ka));if(c<0)return null;let l=a*this.direction.dot(cc.cross(yi));if(l<0||c+l>o)return null;let h=-a*yi.dot(hc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class r{constructor(e,t,n,i,s,a,o,c,l,h,u,d,p,f,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,d,p,f,g,m)}set(e,t,n,i,s,a,o,c,l,h,u,d,p,f,g,m){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=h,_[10]=u,_[14]=d,_[3]=p,_[7]=f,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/gr.setFromMatrixColumn(e,0).length(),s=1/gr.setFromMatrixColumn(e,1).length(),a=1/gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+f*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=f+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,f=l*h,g=l*u;t[0]=d+g*o,t[4]=f*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,f=l*h,g=l*u;t[0]=d-g*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,g=o*u;t[0]=c*h,t[4]=f*l-p,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,f=o*c,g=o*l;t[0]=c*h,t[4]=g-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+f,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*c,p=a*l,f=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zm,e,Hm)}lookAt(e,t,n){let i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),xi.crossVectors(n,nn),xi.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),xi.crossVectors(n,nn)),xi.normalize(),za.crossVectors(nn,xi),i[0]=xi.x,i[4]=za.x,i[8]=nn.x,i[1]=xi.y,i[5]=za.y,i[9]=nn.y,i[2]=xi.z,i[6]=za.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],g=n[6],m=n[10],_=n[14],v=n[3],y=n[7],M=n[11],w=n[15],A=i[0],C=i[4],L=i[8],I=i[12],k=i[1],H=i[5],O=i[9],K=i[13],V=i[2],Y=i[6],Z=i[10],se=i[14],te=i[3],ve=i[7],Ee=i[11],Me=i[15];return s[0]=a*A+o*k+c*V+l*te,s[4]=a*C+o*H+c*Y+l*ve,s[8]=a*L+o*O+c*Z+l*Ee,s[12]=a*I+o*K+c*se+l*Me,s[1]=h*A+u*k+d*V+p*te,s[5]=h*C+u*H+d*Y+p*ve,s[9]=h*L+u*O+d*Z+p*Ee,s[13]=h*I+u*K+d*se+p*Me,s[2]=f*A+g*k+m*V+_*te,s[6]=f*C+g*H+m*Y+_*ve,s[10]=f*L+g*O+m*Z+_*Ee,s[14]=f*I+g*K+m*se+_*Me,s[3]=v*A+y*k+M*V+w*te,s[7]=v*C+y*H+M*Y+w*ve,s[11]=v*L+y*O+M*Z+w*Ee,s[15]=v*I+y*K+M*se+w*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*c*u-i*l*u-s*o*d+n*l*d+i*o*p-n*c*p)+e[7]*(+t*c*p-t*l*d+s*a*d-i*a*p+i*l*h-s*c*h)+e[11]*(+t*l*u-t*o*p-s*a*u+n*a*p+s*o*h-n*l*h)+e[15]*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],g=e[13],m=e[14],_=e[15],v=u*m*l-g*d*l+g*c*p-o*m*p-u*c*_+o*d*_,y=f*d*l-h*m*l-f*c*p+a*m*p+h*c*_-a*d*_,M=h*g*l-f*u*l+f*o*p-a*g*p-h*o*_+a*u*_,w=f*u*c-h*g*c-f*o*d+a*g*d+h*o*m-a*u*m,A=t*v+n*y+i*M+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=v*C,e[1]=(g*d*s-u*m*s-g*i*p+n*m*p+u*i*_-n*d*_)*C,e[2]=(o*m*s-g*c*s+g*i*l-n*m*l-o*i*_+n*c*_)*C,e[3]=(u*c*s-o*d*s-u*i*l+n*d*l+o*i*p-n*c*p)*C,e[4]=y*C,e[5]=(h*m*s-f*d*s+f*i*p-t*m*p-h*i*_+t*d*_)*C,e[6]=(f*c*s-a*m*s-f*i*l+t*m*l+a*i*_-t*c*_)*C,e[7]=(a*d*s-h*c*s+h*i*l-t*d*l-a*i*p+t*c*p)*C,e[8]=M*C,e[9]=(f*u*s-h*g*s-f*n*p+t*g*p+h*n*_-t*u*_)*C,e[10]=(a*g*s-f*o*s+f*n*l-t*g*l-a*n*_+t*o*_)*C,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*p-t*o*p)*C,e[12]=w*C,e[13]=(h*g*i-f*u*i+f*n*d-t*g*d-h*n*m+t*u*m)*C,e[14]=(f*o*i-a*g*i-f*n*c+t*g*c+a*n*m-t*o*m)*C,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,p=s*h,f=s*u,g=a*h,m=a*u,_=o*u,v=c*l,y=c*h,M=c*u,w=n.x,A=n.y,C=n.z;return i[0]=(1-(g+_))*w,i[1]=(p+M)*w,i[2]=(f-y)*w,i[3]=0,i[4]=(p-M)*A,i[5]=(1-(d+_))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(f+y)*C,i[9]=(m-v)*C,i[10]=(1-(d+g))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=gr.set(i[0],i[1],i[2]).length(),a=gr.set(i[4],i[5],i[6]).length(),o=gr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Tn.copy(this);let c=1/s,l=1/a,h=1/o;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=l,Tn.elements[5]*=l,Tn.elements[6]*=l,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,t.setFromRotationMatrix(Tn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i),f,g;if(c)f=s/(a-s),g=a*s/(a-s);else if(o===si)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else{if(o!==Cs)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-s),g=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i),f,g;if(c)f=1/(a-s),g=a/(a-s);else if(o===si)f=-2/(a-s),g=-(a+s)/(a-s);else{if(o!==Cs)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-s),g=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},gr=new b,Tn=new Ie,zm=new b(0,0,0),Hm=new b(1,1,1),xi=new b,za=new b,nn=new b,ju=new Ie,Xu=new Yt,Kt=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ju,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kt.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Gm=0,qu=new b,_r=new Yt,ti=new Ie,Ha=new b,fs=new b,Vm=new b,Wm=new Yt,$u=new b(1,0,0),Yu=new b(0,1,0),Ku=new b(0,0,1),Zu={type:"added"},jm={type:"removed"},vr={type:"childadded",child:null},uc={type:"childremoved",child:null},It=class r extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new b,t=new Kt,n=new Yt,i=new b(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Ne}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis($u,e)}rotateY(e){return this.rotateOnAxis(Yu,e)}rotateZ(e){return this.rotateOnAxis(Ku,e)}translateOnAxis(e,t){return qu.copy(e).applyQuaternion(this.quaternion),this.position.add(qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($u,e)}translateY(e){return this.translateOnAxis(Yu,e)}translateZ(e){return this.translateOnAxis(Ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ha.copy(e):Ha.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(fs,Ha,this.up):ti.lookAt(Ha,fs,this.up),this.quaternion.setFromRotationMatrix(ti),i&&(ti.extractRotation(i.matrixWorld),_r.setFromRotationMatrix(ti),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zu),vr.child=e,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jm),uc.child=e,this.dispatchEvent(uc),uc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zu),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,Vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,Wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};It.DEFAULT_UP=new b(0,1,0),It.DEFAULT_MATRIX_AUTO_UPDATE=!0,It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new b,ni=new b,dc=new b,ii=new b,yr=new b,xr=new b,Ju=new b,pc=new b,mc=new b,fc=new b,gc=new Ze,_c=new Ze,vc=new Ze,On=class r{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wn.subVectors(e,t),i.cross(wn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){wn.subVectors(i,t),ni.subVectors(n,t),dc.subVectors(e,t);let a=wn.dot(wn),o=wn.dot(ni),c=wn.dot(dc),l=ni.dot(ni),h=ni.dot(dc),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,f=(a*h-o*c)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ii)!==null&&ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ii.x),c.addScaledVector(a,ii.y),c.addScaledVector(o,ii.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return gc.setScalar(0),_c.setScalar(0),vc.setScalar(0),gc.fromBufferAttribute(e,t),_c.fromBufferAttribute(e,n),vc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(gc,s.x),a.addScaledVector(_c,s.y),a.addScaledVector(vc,s.z),a}static isFrontFacing(e,t,n,i){return wn.subVectors(n,t),ni.subVectors(e,t),wn.cross(ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),.5*wn.cross(ni).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;yr.subVectors(i,n),xr.subVectors(s,n),pc.subVectors(e,n);let c=yr.dot(pc),l=xr.dot(pc);if(c<=0&&l<=0)return t.copy(n);mc.subVectors(e,i);let h=yr.dot(mc),u=xr.dot(mc);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(yr,a);fc.subVectors(e,s);let p=yr.dot(fc),f=xr.dot(fc);if(f>=0&&p<=f)return t.copy(s);let g=p*l-c*f;if(g<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(xr,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return Ju.subVectors(s,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(Ju,o);let _=1/(m+g+d);return a=g*_,o=d*_,t.copy(n).addScaledVector(yr,a).addScaledVector(xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function yc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=Fc(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=yc(a,s,e+1/3),this.g=yc(a,s,e),this.b=yc(a,s,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){let n=mp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return qe.workingToColorSpace(Gt.copy(this),e),65536*Math.round(Oe(255*Gt.r,0,255))+256*Math.round(Oe(255*Gt.g,0,255))+Math.round(Oe(255*Gt.b,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Gt.copy(this),t);let n=Gt.r,i=Gt.g,s=Gt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=sn){qe.workingToColorSpace(Gt.copy(this),e);let t=Gt.r,n=Gt.g,i=Gt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Ga);let n=Es(Mi.h,Ga.h,t),i=Es(Mi.s,Ga.s,t),s=Es(Mi.l,Ga.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gt=new xe;xe.NAMES=mp;var Xm=0,jn=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zt=class extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},i_=qm();function qm(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,i[c]=24,i[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,i[c]=-l-1,i[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,i[c]=13,i[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,i[c]=24,i[256|c]=24):(n[c]=31744,n[256|c]=64512,i[c]=13,i[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var Mt=new b,Va=new Q,$m=0,Ut=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$m++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=go,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==go&&(e.usage=this.usage),e}};var Ls=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ds=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var we=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ym=0,dn=new Ie,xc=new It,Mr=new b,rn=new mn,gs=new mn,Ct=new b,nt=class r extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lh(e)?Ds:Ls)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return xc.lookAt(e),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new b,1/0);if(e){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(rn.min,gs.min),rn.expandByPoint(Ct),Ct.addVectors(rn.max,gs.max),rn.expandByPoint(Ct)):(rn.expandByPoint(gs.min),rn.expandByPoint(gs.max))}rn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ct.fromBufferAttribute(o,l),c&&(Mr.fromBufferAttribute(e,l),Ct.add(Mr)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new b,c[L]=new b;let l=new b,h=new b,u=new b,d=new Q,p=new Q,f=new Q,g=new b,m=new b;function _(L,I,k){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,k),d.fromBufferAttribute(s,L),p.fromBufferAttribute(s,I),f.fromBufferAttribute(s,k),h.sub(l),u.sub(l),p.sub(d),f.sub(d);let H=1/(p.x*f.y-f.x*p.y);isFinite(H)&&(g.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(H),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(H),o[L].add(g),o[I].add(g),o[k].add(g),c[L].add(m),c[I].add(m),c[k].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,I=v.length;L<I;++L){let k=v[L],H=k.start;for(let O=H,K=H+k.count;O<K;O+=3)_(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let y=new b,M=new b,w=new b,A=new b;function C(L){w.fromBufferAttribute(i,L),A.copy(w);let I=o[L];y.copy(I),y.sub(w.multiplyScalar(w.dot(I))).normalize(),M.crossVectors(A,I);let k=M.dot(c[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,k)}for(let L=0,I=v.length;L<I;++L){let k=v[L],H=k.start;for(let O=H,K=H+k.count;O<K;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new b,s=new b,a=new b,o=new b,c=new b,l=new b,h=new b,u=new b;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,f=0;for(let g=0,m=c.length;g<m;g++){p=o.isInterleavedBufferAttribute?c[g]*o.data.stride+o.offset:c[g]*h;for(let _=0;_<h;_++)d[f++]=l[p++]}return new Ut(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=e(i[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qu=new Ie,Vi=new Wn,Wa=new fn,ed=new b,ja=new b,Xa=new b,qa=new b,Mc=new b,$a=new b,td=new b,Ya=new b,J=class extends It{constructor(e=new nt,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){$a.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Mc.fromBufferAttribute(u,e),a?$a.addScaledVector(Mc,h):$a.addScaledVector(Mc.sub(t),h))}t.add($a)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(s),Vi.copy(e.ray).recast(e.near),Wa.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Wa,ed)===null||Vi.origin.distanceToSquared(ed)>(e.far-e.near)**2))return;Qu.copy(s).invert(),Vi.copy(e.ray).applyMatrix4(Qu),n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Vi)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let m=d[f],_=a[m.materialIndex];for(let v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<y;v+=3)i=Ka(this,_,e,n,l,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);f<g;f+=3)i=Ka(this,a,e,n,l,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(c!==void 0)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let m=d[f],_=a[m.materialIndex];for(let v=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));v<y;v+=3)i=Ka(this,_,e,n,l,h,u,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);f<g;f+=3)i=Ka(this,a,e,n,l,h,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function Ka(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,ja),r.getVertexPosition(c,Xa),r.getVertexPosition(l,qa);let h=(function(u,d,p,f,g,m,_,v){let y;if(y=d.side===1?f.intersectTriangle(_,m,g,!0,v):f.intersectTriangle(g,m,_,d.side===0,v),y===null)return null;Ya.copy(v),Ya.applyMatrix4(u.matrixWorld);let M=p.ray.origin.distanceTo(Ya);return M<p.near||M>p.far?null:{distance:M,point:Ya.clone(),object:u}})(r,e,t,n,ja,Xa,qa,td);if(h){let u=new b;On.getBarycoord(td,ja,Xa,qa,u),i&&(h.uv=On.getInterpolatedAttribute(i,o,c,l,u,new Q)),s&&(h.uv1=On.getInterpolatedAttribute(s,o,c,l,u,new Q)),a&&(h.normal=On.getInterpolatedAttribute(a,o,c,l,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new b,materialIndex:0};On.getNormal(ja,Xa,qa,d.normal),h.face=d,h.barycoord=u}return h}var bt=class r extends nt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;function f(g,m,_,v,y,M,w,A,C,L,I){let k=M/C,H=w/L,O=M/2,K=w/2,V=A/2,Y=C+1,Z=L+1,se=0,te=0,ve=new b;for(let Ee=0;Ee<Z;Ee++){let Me=Ee*H-K;for(let Ce=0;Ce<Y;Ce++){let ae=Ce*k-O;ve[g]=ae*v,ve[m]=Me*y,ve[_]=V,l.push(ve.x,ve.y,ve.z),ve[g]=0,ve[m]=0,ve[_]=A>0?1:-1,h.push(ve.x,ve.y,ve.z),u.push(Ce/C),u.push(1-Ee/L),se+=1}}for(let Ee=0;Ee<L;Ee++)for(let Me=0;Me<C;Me++){let Ce=d+Me+Y*Ee,ae=d+Me+Y*(Ee+1),ce=d+(Me+1)+Y*(Ee+1),oe=d+(Me+1)+Y*Ee;c.push(Ce,ae,oe),c.push(ae,ce,oe),te+=6}o.addGroup(p,te,I),p+=te,d+=se}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function tr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(r){let e={};for(let t=0;t<r.length;t++){let n=tr(r[t]);for(let i in n)e[i]=n[i]}return e}function Dh(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var fp={clone:tr,merge:Vt},Rn=class extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Nr=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bi=new b,nd=new Q,id=new Q,Nt=class extends Nr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Pr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Rr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Pr*Math.atan(Math.tan(.5*Rr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,nd,id),t.subVectors(id,nd)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Rr*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},br=-90,xo=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Nt(br,1,e,t);i.layers=this.layers,this.add(i);let s=new Nt(br,1,e,t);s.layers=this.layers,this.add(s);let a=new Nt(br,1,e,t);a.layers=this.layers,this.add(a);let o=new Nt(br,1,e,t);o.layers=this.layers,this.add(o);let c=new Nt(br,1,e,t);c.layers=this.layers,this.add(c);let l=new Nt(br,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Cs)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Fs=class extends Xt{constructor(e=[],t=301,n,i,s,a,o,c,l,h){super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mo=class extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fs(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new bt(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new J(i,s),o=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Hn),new xo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Je=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},Km={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),_=this._getHandJoint(l,g);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;l.inputState.pinching&&d>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ns=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Us=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},bo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=go,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},jt=new b,Os=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qi=class extends jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sr,_s=new b,Er=new b,Tr=new b,wr=new Q,vs=new Q,gp=new Ie,Za=new b,ys=new b,Ja=new b,rd=new Q,bc=new Q,sd=new Q,Or=class extends It{constructor(e=new qi){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bo(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new Os(n,3,0,!1)),Sr.setAttribute("uv",new Os(n,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new Q(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Er.setFromMatrixScale(this.matrixWorld),gp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Er.multiplyScalar(-Tr.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;Qa(Za.set(-.5,-.5,0),Tr,a,Er,i,s),Qa(ys.set(.5,-.5,0),Tr,a,Er,i,s),Qa(Ja.set(.5,.5,0),Tr,a,Er,i,s),rd.set(0,0),bc.set(1,0),sd.set(1,1);let o=e.ray.intersectTriangle(Za,ys,Ja,!1,_s);if(o===null&&(Qa(ys.set(-.5,.5,0),Tr,a,Er,i,s),bc.set(0,1),o=e.ray.intersectTriangle(Za,Ja,ys,!1,_s),o===null))return;let c=e.ray.origin.distanceTo(_s);c<e.near||c>e.far||t.push({distance:c,point:_s.clone(),uv:On.getInterpolation(_s,Za,ys,Ja,rd,bc,sd,new Q),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Qa(r,e,t,n,i,s){wr.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(vs.x=s*wr.x-i*wr.y,vs.y=i*wr.x+s*wr.y):vs.copy(wr),r.copy(e),r.x+=vs.x,r.y+=vs.y,r.applyMatrix4(gp)}var r_=new b,s_=new b;var a_=new b,o_=new Ze,l_=new Ze,c_=new b,h_=new Ie,u_=new b,d_=new fn,p_=new Ie,m_=new Wn;var So=class extends Xt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=1003,h=1003,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},f_=new Ie,g_=new Ie;var Bs=class extends Ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ar=new Ie,ad=new Ie,eo=[],od=new mn,Zm=new Ie,xs=new J,Ms=new fn,Ti=class extends J{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bs(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Zm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ar),od.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(od)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ar),Ms.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(Ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=i[s+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),e.ray.intersectsSphere(Ms)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ar),ad.multiplyMatrices(n,Ar),xs.matrixWorld=ad,xs.raycast(e,eo);for(let a=0,o=eo.length;a<o;a++){let c=eo[a];c.instanceId=s,c.object=this,t.push(c)}eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bs(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new So(new Float32Array(i*this.count),i,this.count,gl,Cn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Sc=new b,Jm=new b,Qm=new Ne,pn=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Sc.subVectors(n,t).cross(Jm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Sc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qm.getNormalMatrix(e),i=this.coplanarPoint(Sc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new fn,ef=new Q(.5,.5),to=new b,wi=class{constructor(e=new pn,t=new pn,n=new pn,i=new pn,s=new pn,a=new pn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],p=s[7],f=s[8],g=s[9],m=s[10],_=s[11],v=s[12],y=s[13],M=s[14],w=s[15];if(i[0].setComponents(l-a,p-h,_-f,w-v).normalize(),i[1].setComponents(l+a,p+h,_+f,w+v).normalize(),i[2].setComponents(l+o,p+u,_+g,w+y).normalize(),i[3].setComponents(l-o,p-u,_-g,w-y).normalize(),n)i[4].setComponents(c,d,m,M).normalize(),i[5].setComponents(l-c,p-d,_-m,w-M).normalize();else if(i[4].setComponents(l-c,p-d,_-m,w-M).normalize(),t===si)i[5].setComponents(l+c,p+d,_+m,w+M).normalize();else{if(t!==Cs)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(c,d,m,M).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){Wi.center.set(0,0,0);let t=ef.distanceTo(e.center);return Wi.radius=.7071067811865476+t,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(to.x=i.normal.x>0?e.max.x:e.min.x,to.y=i.normal.y>0?e.max.y:e.min.y,to.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Nn=new Ie,Un=new wi,Eo=class r{constructor(){this.coordinateSystem=si}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Nn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Un.setFromProjectionMatrix(Nn,i.coordinateSystem,i.reversedDepth),Un.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Nn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Un.setFromProjectionMatrix(Nn,i.coordinateSystem,i.reversedDepth),Un.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Nn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Un.setFromProjectionMatrix(Nn,i.coordinateSystem,i.reversedDepth),Un.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Nn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Un.setFromProjectionMatrix(Nn,i.coordinateSystem,i.reversedDepth),Un.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Nn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Un.setFromProjectionMatrix(Nn,i.coordinateSystem,i.reversedDepth),Un.containsPoint(e))return!0}return!1}clone(){return new r}};var Nc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},__=new Ie,v_=new xe(1,1,1),y_=new wi,x_=new Eo,M_=new mn,b_=new fn,S_=new b,E_=new b,T_=new b,w_=new Nc,A_=new J;var R_=new b,C_=new b,I_=new Ie,P_=new Wn,L_=new fn,D_=new b,F_=new b;var N_=new b,U_=new b;var Br=class extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ld=new Ie,Uc=new Wn,no=new fn,io=new b,ks=class extends It{constructor(e=new nt,t=new Br){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;ld.copy(i).invert(),Uc.copy(e.ray).applyMatrix4(ld);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);u<d;u++){let p=l.getX(u);io.fromBufferAttribute(h,p),cd(io,p,c,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)io.fromBufferAttribute(h,u),cd(io,u,c,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function cd(r,e,t,n,i,s,a){let o=Uc.distanceSqToPoint(r);if(o<t){let c=new b;Uc.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var kr=class extends Xt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},zs=class extends Xt{constructor(e,t,n=1014,i,s,a,o=1003,c=1003,l,h=1026,u=1){if(h!==ha&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Hs=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},To=class r extends nt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,f=2*n+s,g=i+1,m=new b,_=new b;for(let v=0;v<=f;v++){let y=0,M=0,w=0,A=0;if(v<=n){let I=v/n,k=I*Math.PI/2;M=-h-e*Math.cos(k),w=e*Math.sin(k),A=-e*Math.cos(k),y=I*u}else if(v<=n+s){let I=(v-n)/s;M=I*t-h,w=e,A=0,y=u+I*d}else{let I=(v-n-s)/n,k=I*Math.PI/2;M=h+e*Math.sin(k),w=e*Math.cos(k),A=e*Math.sin(k),y=u+d+I*u}let C=Math.max(0,Math.min(1,y/p)),L=0;v===0?L=.5/i:v===f&&(L=-.5/i);for(let I=0;I<=i;I++){let k=I/i,H=k*Math.PI*2,O=Math.sin(H),K=Math.cos(H);_.x=-w*K,_.y=M,_.z=w*O,o.push(_.x,_.y,_.z),m.set(-w*K,A,w*O),m.normalize(),c.push(m.x,m.y,m.z),l.push(k+L,C)}if(v>0){let I=(v-1)*g;for(let k=0;k<i;k++){let H=I+k,O=I+k+1,K=v*g+k,V=v*g+k+1;a.push(H,O,K),a.push(O,V,K)}}}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ai=class r extends nt{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new b,h=new Q;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},rt=class r extends nt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,g=[],m=n/2,_=0;function v(y){let M=f,w=new Q,A=new b,C=0,L=y===!0?e:t,I=y===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*I,0),d.push(0,I,0),p.push(.5,.5),f++;let k=f;for(let H=0;H<=i;H++){let O=H/i*c+o,K=Math.cos(O),V=Math.sin(O);A.x=L*V,A.y=m*I,A.z=L*K,u.push(A.x,A.y,A.z),d.push(0,I,0),w.x=.5*K+.5,w.y=.5*V*I+.5,p.push(w.x,w.y),f++}for(let H=0;H<i;H++){let O=M+H,K=k+H;y===!0?h.push(K,K+1,O):h.push(K+1,K,O),C+=3}l.addGroup(_,C,y===!0?1:2),_+=C}(function(){let y=new b,M=new b,w=0,A=(t-e)/n;for(let C=0;C<=s;C++){let L=[],I=C/s,k=I*(t-e)+e;for(let H=0;H<=i;H++){let O=H/i,K=O*c+o,V=Math.sin(K),Y=Math.cos(K);M.x=k*V,M.y=-I*n+m,M.z=k*Y,u.push(M.x,M.y,M.z),y.set(V,A,Y).normalize(),d.push(y.x,y.y,y.z),p.push(O,1-I),L.push(f++)}g.push(L)}for(let C=0;C<i;C++)for(let L=0;L<s;L++){let I=g[L][C],k=g[L+1][C],H=g[L+1][C+1],O=g[L][C+1];(e>0||L!==0)&&(h.push(I,k,O),w+=3),(t>0||L!==s-1)&&(h.push(k,H,O),w+=3)}l.addGroup(_,w,0),_+=w})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},oi=class r extends rt{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ai=class r extends nt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(p,f,g,m){let _=m+1,v=[];for(let y=0;y<=_;y++){v[y]=[];let M=p.clone().lerp(g,y/_),w=f.clone().lerp(g,y/_),A=_-y;for(let C=0;C<=A;C++)v[y][C]=C===0&&y===_?M:M.clone().lerp(w,C/A)}for(let y=0;y<_;y++)for(let M=0;M<2*(_-y)-1;M++){let w=Math.floor(M/2);M%2==0?(c(v[y][w+1]),c(v[y+1][w]),c(v[y][w])):(c(v[y][w+1]),c(v[y+1][w+1]),c(v[y+1][w]))}}function c(p){s.push(p.x,p.y,p.z)}function l(p,f){let g=3*p;f.x=e[g+0],f.y=e[g+1],f.z=e[g+2]}function h(p,f,g,m){m<0&&p.x===1&&(a[f]=p.x-1),g.x===0&&g.z===0&&(a[f]=m/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new b,g=new b,m=new b;for(let _=0;_<t.length;_+=3)l(t[_+0],f),l(t[_+1],g),l(t[_+2],m),o(f,g,m,p)})(i),(function(p){let f=new b;for(let g=0;g<s.length;g+=3)f.x=s[g+0],f.y=s[g+1],f.z=s[g+2],f.normalize().multiplyScalar(p),s[g+0]=f.x,s[g+1]=f.y,s[g+2]=f.z})(n),(function(){let p=new b;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let g=u(p)/2/Math.PI+.5,m=d(p)/Math.PI+.5;a.push(g,1-m)}(function(){let f=new b,g=new b,m=new b,_=new b,v=new Q,y=new Q,M=new Q;for(let w=0,A=0;w<s.length;w+=9,A+=6){f.set(s[w+0],s[w+1],s[w+2]),g.set(s[w+3],s[w+4],s[w+5]),m.set(s[w+6],s[w+7],s[w+8]),v.set(a[A+0],a[A+1]),y.set(a[A+2],a[A+3]),M.set(a[A+4],a[A+5]),_.copy(f).add(g).add(m).divideScalar(3);let C=u(_);h(v,A+0,f,C),h(y,A+2,g,C),h(M,A+4,m,C)}})(),(function(){for(let f=0;f<a.length;f+=6){let g=a[f+0],m=a[f+2],_=a[f+4],v=Math.max(g,m,_),y=Math.min(g,m,_);v>.9&&y<.1&&(g<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),_<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(s.slice(),3)),this.setAttribute("uv",new we(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},wo=class r extends Ai{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ro=new b,so=new b,Ec=new b,ao=new On,Ao=class extends nt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Rr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:g,b:m,c:_}=ao;if(g.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),_.fromBufferAttribute(o,l[2]),ao.getNormal(Ec),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let y=(v+1)%3,M=u[v],w=u[y],A=ao[h[v]],C=ao[h[y]],L=`${M}_${w}`,I=`${w}_${M}`;I in d&&d[I]?(Ec.dot(d[I].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(C.x,C.y,C.z)),d[I]=null):L in d||(d[L]={index0:l[v],index1:l[y],normal:Ec.clone()})}}for(let f in d)if(d[f]){let{index0:g,index1:m}=d[f];ro.fromBufferAttribute(o,g),so.fromBufferAttribute(o,m),p.push(ro.x,ro.y,ro.z),p.push(so.x,so.y,so.z)}this.setAttribute("position",new we(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(i=Math.floor(c+(l-c)/2),o=n[i]-a,o<0)c=i+1;else{if(!(o>0)){l=i;break}l=i-1}if(i=l,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new Q:new b);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new b,i=[],s=[],a=[],o=new b,c=new Ie;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new b)}s[0]=new b,a[0]=new b;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Oe(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Oe(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},zr=class extends on{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Q){let n=t,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ro=class extends zr{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Fh(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var oo=new b,Tc=new Fh,wc=new Fh,Ac=new Fh,Co=class extends on{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=i[(l-1)%s]:(oo.subVectors(i[0],i[1]).add(i[0]),o=oo);let u=i[l%s],d=i[(l+1)%s];if(this.closed||l+2<s?c=i[(l+2)%s]:(oo.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=oo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(c),p);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),Tc.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,f,g,m),wc.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,f,g,m),Ac.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,f,g,m)}else this.curveType==="catmullrom"&&(Tc.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),wc.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),Ac.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return n.set(Tc.calc(h),wc.calc(h),Ac.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hd(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function Ts(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function ws(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var Gs=class extends on{constructor(e=new Q,t=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Q){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ws(e,i.x,s.x,a.x,o.x),ws(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Io=class extends on{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ws(e,i.x,s.x,a.x,o.x),ws(e,i.y,s.y,a.y,o.y),ws(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vs=class extends on{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends on{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ws=class extends on{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ts(e,i.x,s.x,a.x),Ts(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},js=class extends on{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ts(e,i.x,s.x,a.x),Ts(e,i.y,s.y,a.y),Ts(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xs=class extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(hd(o,c.x,l.x,h.x,u.x),hd(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Q().fromArray(i))}return this}},Lo=Object.freeze({__proto__:null,ArcCurve:Ro,CatmullRomCurve3:Co,CubicBezierCurve:Gs,CubicBezierCurve3:Io,EllipseCurve:zr,LineCurve:Vs,LineCurve3:Po,QuadraticBezierCurve:Ws,QuadraticBezierCurve3:js,SplineCurve:Xs}),Do=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Lo[i.type]().fromJSON(i))}return this}},qs=class extends Do{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Vs(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Ws(this.currentPoint.clone(),new Q(e,t),new Q(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Gs(this.currentPoint.clone(),new Q(e,t),new Q(n,i),new Q(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){let l=new zr(e,t,n,i,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$s=class extends qs{constructor(e){super(e),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new qs().fromJSON(i))}return this}};function tf(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=ud(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=(function(h,u,d,p){let f=[];for(let g=0,m=u.length;g<m;g++){let _=ud(h,u[g]*p,g<m-1?u[g+1]*p:h.length,p,!1);_===_.next&&(_.steiner=!0),f.push(hf(_))}f.sort(of);for(let g=0;g<f.length;g++)d=lf(f[g],d);return d})(r,e,s,t)),r.length>80*t){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){let p=r[d],f=r[d+1];p<o&&(o=p),f<c&&(c=f),p>h&&(h=p),f>u&&(u=f)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Ys(s,a,t,o,c,l,0),a}function ud(r,e,t,n,i){let s;if(i===(function(a,o,c,l){let h=0;for(let u=o,d=c-l;u<c;u+=l)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=dd(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=dd(a/n|0,r[a],r[a+1],s);return s&&Hr(s,s.next)&&(Zs(s),s=s.next),s}function $i(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!Hr(n,n.next)&&pt(n.prev,n,n.next)!==0)n=n.next;else{if(Zs(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Ys(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(c,l,h,u){let d=c;do d.z===0&&(d.z=Oc(d.x,d.y,l,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let f,g=1;do{let m,_=p;p=null;let v=null;for(f=0;_;){f++;let y=_,M=0;for(let A=0;A<g&&(M++,y=y.nextZ,y);A++);let w=g;for(;M>0||w>0&&y;)M!==0&&(w===0||!y||_.z<=y.z)?(m=_,_=_.nextZ,M--):(m=y,y=y.nextZ,w--),v?v.nextZ=m:p=m,m.prevZ=v,v=m;_=y}v.nextZ=null,g*=2}while(f>1)})(d)})(r,n,i,s);let o=r;for(;r.prev!==r.next;){let c=r.prev,l=r.next;if(s?rf(r,n,i,s):nf(r))e.push(c.i,r.i,l.i),Zs(r),r=l.next,o=l.next;else if((r=l)===o){a?a===1?Ys(r=sf($i(r),e),e,t,n,i,s,2):a===2&&af(r,e,t,n,i,s):Ys($i(r),e,t,n,i,s,1);break}}}function nf(r){let e=r.prev,t=r,n=r.next;if(pt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(i,s,a),u=Math.min(o,c,l),d=Math.max(i,s,a),p=Math.max(o,c,l),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Ss(i,o,s,c,a,l,f.x,f.y)&&pt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function rf(r,e,t,n){let i=r.prev,s=r,a=r.next;if(pt(i,s,a)>=0)return!1;let o=i.x,c=s.x,l=a.x,h=i.y,u=s.y,d=a.y,p=Math.min(o,c,l),f=Math.min(h,u,d),g=Math.max(o,c,l),m=Math.max(h,u,d),_=Oc(p,f,e,t,n),v=Oc(g,m,e,t,n),y=r.prevZ,M=r.nextZ;for(;y&&y.z>=_&&M&&M.z<=v;){if(y.x>=p&&y.x<=g&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&Ss(o,h,c,u,l,d,y.x,y.y)&&pt(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=g&&M.y>=f&&M.y<=m&&M!==i&&M!==a&&Ss(o,h,c,u,l,d,M.x,M.y)&&pt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=g&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&Ss(o,h,c,u,l,d,y.x,y.y)&&pt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=v;){if(M.x>=p&&M.x<=g&&M.y>=f&&M.y<=m&&M!==i&&M!==a&&Ss(o,h,c,u,l,d,M.x,M.y)&&pt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function sf(r,e){let t=r;do{let n=t.prev,i=t.next.next;!Hr(n,i)&&vp(n,t,t.next,i)&&Ks(n,i)&&Ks(i,n)&&(e.push(n.i,t.i,i.i),Zs(t),Zs(t.next),t=r=i),t=t.next}while(t!==r);return $i(t)}function af(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&uf(a,o)){let c=yp(a,o);return a=$i(a,a.next),c=$i(c,c.next),Ys(a,e,t,n,i,s,0),void Ys(c,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function of(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function lf(r,e){let t=(function(i,s){let a=s,o=i.x,c=i.y,l,h=-1/0;if(Hr(i,a))return a;do{if(Hr(i,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let g=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(g<=o&&g>h&&(h=g,l=a.x<a.next.x?a:a.next,g===o))return l}a=a.next}while(a!==s);if(!l)return null;let u=l,d=l.x,p=l.y,f=1/0;a=l;do{if(o>=a.x&&a.x>=d&&o!==a.x&&_p(c<p?o:h,c,d,p,c<p?h:o,c,a.x,a.y)){let g=Math.abs(c-a.y)/(o-a.x);Ks(a,i)&&(g<f||g===f&&(a.x>l.x||a.x===l.x&&cf(l,a)))&&(l=a,f=g)}a=a.next}while(a!==u);return l})(r,e);if(!t)return e;let n=yp(t,r);return $i(n,n.next),$i(t,t.next)}function cf(r,e){return pt(r.prev,r,e.prev)<0&&pt(e.next,r,r.next)<0}function Oc(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function hf(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function _p(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Ss(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&_p(r,e,t,n,i,s,a,o)}function uf(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&vp(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(Ks(r,e)&&Ks(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(pt(r.prev,r,e.prev)||pt(r,e.prev,e))||Hr(r,e)&&pt(r.prev,r,r.next)>0&&pt(e.prev,e,e.next)>0)}function pt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Hr(r,e){return r.x===e.x&&r.y===e.y}function vp(r,e,t,n){let i=co(pt(r,e,t)),s=co(pt(r,e,n)),a=co(pt(t,n,r)),o=co(pt(t,n,e));return i!==s&&a!==o||!(i!==0||!lo(r,t,e))||!(s!==0||!lo(r,n,e))||!(a!==0||!lo(t,r,n))||!(o!==0||!lo(t,e,n))}function lo(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function co(r){return r>0?1:r<0?-1:0}function Ks(r,e){return pt(r.prev,r,r.next)<0?pt(r,e,r.next)>=0&&pt(r,r.prev,e)>=0:pt(r,e,r.prev)<0||pt(r,r.next,e)<0}function yp(r,e){let t=Bc(r.i,r.x,r.y),n=Bc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function dd(r,e,t,n){let i=Bc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Bc(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var kc=class{static triangulate(e,t,n=2){return tf(e,t,n)}},Bn=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];pd(e),md(n,e);let a=e.length;t.forEach(pd);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,md(n,t[c]);let o=kc.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function pd(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function md(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Fo=class r extends nt{constructor(e=new $s([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:df,y,M,w,A,C,L=!1;_&&(y=_.getSpacedPoints(h),L=!0,d=!1,M=_.computeFrenetFrames(h,!1),w=new b,A=new b,C=new b),d||(m=0,p=0,f=0,g=0);let I=o.extractPoints(l),k=I.shape,H=I.holes;if(!Bn.isClockWise(k)){k=k.reverse();for(let D=0,x=H.length;D<x;D++){let R=H[D];Bn.isClockWise(R)&&(H[D]=R.reverse())}}function O(D){let x=10000000000000001e-36,R=D[0];for(let N=1;N<=D.length;N++){let P=N%D.length,X=D[P],z=X.x-R.x,G=X.y-R.y,ie=z*z+G*G,de=Math.max(Math.abs(X.x),Math.abs(X.y),Math.abs(R.x),Math.abs(R.y));ie<=x*de*de?(D.splice(P,1),N--):R=X}}O(k),H.forEach(O);let K=H.length,V=k;for(let D=0;D<K;D++){let x=H[D];k=k.concat(x)}function Y(D,x,R){return x||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(x,R)}let Z=k.length;function se(D,x,R){let N,P,X,z=D.x-x.x,G=D.y-x.y,ie=R.x-D.x,de=R.y-D.y,re=z*z+G*G,fe=z*de-G*ie;if(Math.abs(fe)>Number.EPSILON){let be=Math.sqrt(re),Te=Math.sqrt(ie*ie+de*de),Ge=x.x-G/be,$e=x.y+z/be,Ye=((R.x-de/Te-Ge)*de-(R.y+ie/Te-$e)*ie)/(z*de-G*ie);N=Ge+z*Ye-D.x,P=$e+G*Ye-D.y;let pe=N*N+P*P;if(pe<=2)return new Q(N,P);X=Math.sqrt(pe/2)}else{let be=!1;z>Number.EPSILON?ie>Number.EPSILON&&(be=!0):z<-Number.EPSILON?ie<-Number.EPSILON&&(be=!0):Math.sign(G)===Math.sign(de)&&(be=!0),be?(N=-G,P=z,X=Math.sqrt(re)):(N=z,P=G,X=Math.sqrt(re/2))}return new Q(N/X,P/X)}let te=[];for(let D=0,x=V.length,R=x-1,N=D+1;D<x;D++,R++,N++)R===x&&(R=0),N===x&&(N=0),te[D]=se(V[D],V[R],V[N]);let ve=[],Ee,Me,Ce=te.concat();for(let D=0,x=K;D<x;D++){let R=H[D];Ee=[];for(let N=0,P=R.length,X=P-1,z=N+1;N<P;N++,X++,z++)X===P&&(X=0),z===P&&(z=0),Ee[N]=se(R[N],R[X],R[z]);ve.push(Ee),Ce=Ce.concat(Ee)}if(m===0)Me=Bn.triangulateShape(V,H);else{let D=[],x=[];for(let R=0;R<m;R++){let N=R/m,P=p*Math.cos(N*Math.PI/2),X=f*Math.sin(N*Math.PI/2)+g;for(let z=0,G=V.length;z<G;z++){let ie=Y(V[z],te[z],X);Ae(ie.x,ie.y,-P),N===0&&D.push(ie)}for(let z=0,G=K;z<G;z++){let ie=H[z];Ee=ve[z];let de=[];for(let re=0,fe=ie.length;re<fe;re++){let be=Y(ie[re],Ee[re],X);Ae(be.x,be.y,-P),N===0&&de.push(be)}N===0&&x.push(de)}}Me=Bn.triangulateShape(D,x)}let ae=Me.length,ce=f+g;for(let D=0;D<Z;D++){let x=d?Y(k[D],Ce[D],ce):k[D];L?(A.copy(M.normals[0]).multiplyScalar(x.x),w.copy(M.binormals[0]).multiplyScalar(x.y),C.copy(y[0]).add(A).add(w),Ae(C.x,C.y,C.z)):Ae(x.x,x.y,0)}for(let D=1;D<=h;D++)for(let x=0;x<Z;x++){let R=d?Y(k[x],Ce[x],ce):k[x];L?(A.copy(M.normals[D]).multiplyScalar(R.x),w.copy(M.binormals[D]).multiplyScalar(R.y),C.copy(y[D]).add(A).add(w),Ae(C.x,C.y,C.z)):Ae(R.x,R.y,u/h*D)}for(let D=m-1;D>=0;D--){let x=D/m,R=p*Math.cos(x*Math.PI/2),N=f*Math.sin(x*Math.PI/2)+g;for(let P=0,X=V.length;P<X;P++){let z=Y(V[P],te[P],N);Ae(z.x,z.y,u+R)}for(let P=0,X=H.length;P<X;P++){let z=H[P];Ee=ve[P];for(let G=0,ie=z.length;G<ie;G++){let de=Y(z[G],Ee[G],N);L?Ae(de.x,de.y+y[h-1].y,y[h-1].x+R):Ae(de.x,de.y,u+R)}}}function oe(D,x){let R=D.length;for(;--R>=0;){let N=R,P=R-1;P<0&&(P=D.length-1);for(let X=0,z=h+2*m;X<z;X++){let G=Z*X,ie=Z*(X+1);E(x+N+G,x+P+G,x+P+ie,x+N+ie)}}}function Ae(D,x,R){c.push(D),c.push(x),c.push(R)}function Ue(D,x,R){S(D),S(x),S(R);let N=i.length/3,P=v.generateTopUV(n,i,N-3,N-2,N-1);B(P[0]),B(P[1]),B(P[2])}function E(D,x,R,N){S(D),S(x),S(N),S(x),S(R),S(N);let P=i.length/3,X=v.generateSideWallUV(n,i,P-6,P-3,P-2,P-1);B(X[0]),B(X[1]),B(X[3]),B(X[1]),B(X[2]),B(X[3])}function S(D){i.push(c[3*D+0]),i.push(c[3*D+1]),i.push(c[3*D+2])}function B(D){s.push(D.x),s.push(D.y)}(function(){let D=i.length/3;if(d){let x=0,R=Z*x;for(let N=0;N<ae;N++){let P=Me[N];Ue(P[2]+R,P[1]+R,P[0]+R)}x=h+2*m,R=Z*x;for(let N=0;N<ae;N++){let P=Me[N];Ue(P[0]+R,P[1]+R,P[2]+R)}}else{for(let x=0;x<ae;x++){let R=Me[x];Ue(R[2],R[1],R[0])}for(let x=0;x<ae;x++){let R=Me[x];Ue(R[0]+Z*h,R[1]+Z*h,R[2]+Z*h)}}n.addGroup(D,i.length/3-D,0)})(),(function(){let D=i.length/3,x=0;oe(V,x),x+=V.length;for(let R=0,N=H.length;R<N;R++){let P=H[R];oe(P,x),x+=P.length}n.addGroup(D,i.length/3-D,1)})()}this.setAttribute("position",new we(i,3)),this.setAttribute("uv",new we(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Lo[i.type]().fromJSON(i)),new r(n,e.options)}},df={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*i],h=e[3*i+1];return[new Q(s,a),new Q(o,c),new Q(l,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],g=e[3*s],m=e[3*s+1],_=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new Q(a,1-c),new Q(l,1-u),new Q(d,1-f),new Q(g,1-_)]:[new Q(o,1-c),new Q(h,1-u),new Q(p,1-f),new Q(m,1-_)]}},Jt=class r extends Ai{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},No=class r extends nt{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Oe(i,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new b,d=new Q,p=new b,f=new b,g=new b,m=0,_=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,_=e[v+1].y-e[v].y,p.x=1*_,p.y=-m,p.z=0*_,g.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:m=e[v+1].x-e[v].x,_=e[v+1].y-e[v].y,p.x=1*_,p.y=-m,p.z=0*_,f.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),c.push(p.x,p.y,p.z),g.copy(f)}for(let v=0;v<=t;v++){let y=n+v*h*i,M=Math.sin(y),w=Math.cos(y);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*M,u.y=e[A].y,u.z=e[A].x*w,a.push(u.x,u.y,u.z),d.x=v/t,d.y=A/(e.length-1),o.push(d.x,d.y);let C=c[3*A+0]*M,L=c[3*A+1],I=c[3*A+0]*w;l.push(C,L,I)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let M=y+v*e.length,w=M,A=M+e.length,C=M+e.length+1,L=M+1;s.push(w,A,L),s.push(C,L,A)}this.setIndex(s),this.setAttribute("position",new we(a,3)),this.setAttribute("uv",new we(o,2)),this.setAttribute("normal",new we(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Yi=class r extends Ai{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Qe=class r extends nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,p=[],f=[],g=[],m=[];for(let _=0;_<h;_++){let v=_*d-a;for(let y=0;y<l;y++){let M=y*u-s;f.push(M,-v,0),g.push(0,0,1),m.push(y/o),m.push(1-_/c)}}for(let _=0;_<c;_++)for(let v=0;v<o;v++){let y=v+l*_,M=v+l*(_+1),w=v+1+l*(_+1),A=v+1+l*_;p.push(y,M,A),p.push(M,w,A)}this.setIndex(p),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(g,3)),this.setAttribute("uv",new we(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Gr=class r extends nt{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new b,f=new Q;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){let _=s+m/n*a;p.x=u*Math.cos(_),p.y=u*Math.sin(_),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let g=0;g<i;g++){let m=g*(n+1);for(let _=0;_<n;_++){let v=_+m,y=v,M=v+n+1,w=v+n+2,A=v+1;o.push(y,M,A),o.push(M,w,A)}}this.setIndex(o),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Uo=class r extends nt{constructor(e=new $s([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;Bn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,_=f.length;m<_;m++){let v=f[m];Bn.isClockWise(v)===!0&&(f[m]=v.reverse())}let g=Bn.triangulateShape(p,f);for(let m=0,_=f.length;m<_;m++){let v=f[m];p=p.concat(v)}for(let m=0,_=p.length;m<_;m++){let v=p[m];i.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,_=g.length;m<_;m++){let v=g[m],y=v[0]+u,M=v[1]+u,w=v[2]+u;n.push(y,M,w),c+=3}}this.setIndex(n),this.setAttribute("position",new we(i,3)),this.setAttribute("normal",new we(s,3)),this.setAttribute("uv",new we(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Xn=class r extends nt{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new b,d=new b,p=[],f=[],g=[],m=[];for(let _=0;_<=n;_++){let v=[],y=_/n,M=0;_===0&&a===0?M=.5/t:_===n&&c===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){let A=w/t;u.x=-e*Math.cos(i+A*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+A*s)*Math.sin(a+y*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(A+M,1-y),v.push(l++)}h.push(v)}for(let _=0;_<n;_++)for(let v=0;v<t;v++){let y=h[_][v+1],M=h[_][v],w=h[_+1][v],A=h[_+1][v+1];(_!==0||a>0)&&p.push(y,M,A),(_!==n-1||c<Math.PI)&&p.push(M,w,A)}this.setIndex(p),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(g,3)),this.setAttribute("uv",new we(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Oo=class r extends Ai{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Bo=class r extends nt{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new b,u=new b,d=new b;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let g=f/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(f/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let g=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,_=(i+1)*(p-1)+f,v=(i+1)*p+f;a.push(g,m,v),a.push(m,_,v)}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ko=class r extends nt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],c=[],l=[],h=[],u=new b,d=new b,p=new b,f=new b,g=new b,m=new b,_=new b;for(let y=0;y<=n;++y){let M=y/n*s*Math.PI*2;v(M,s,a,e,p),v(M+.01,s,a,e,f),m.subVectors(f,p),_.addVectors(f,p),g.crossVectors(m,_),_.crossVectors(g,m),g.normalize(),_.normalize();for(let w=0;w<=i;++w){let A=w/i*Math.PI*2,C=-t*Math.cos(A),L=t*Math.sin(A);u.x=p.x+(C*_.x+L*g.x),u.y=p.y+(C*_.y+L*g.y),u.z=p.z+(C*_.z+L*g.z),c.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),l.push(d.x,d.y,d.z),h.push(y/n),h.push(w/i)}}for(let y=1;y<=n;y++)for(let M=1;M<=i;M++){let w=(i+1)*(y-1)+(M-1),A=(i+1)*y+(M-1),C=(i+1)*y+M,L=(i+1)*(y-1)+M;o.push(w,A,L),o.push(A,C,L)}function v(y,M,w,A,C){let L=Math.cos(y),I=Math.sin(y),k=w/M*y,H=Math.cos(k);C.x=A*(2+H)*.5*L,C.y=A*(2+H)*I*.5,C.z=A*Math.sin(k)*.5}this.setIndex(o),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},zo=class r extends nt{constructor(e=new js(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new b,c=new b,l=new Q,h=new b,u=[],d=[],p=[],f=[];function g(m){h=e.getPointAt(m/t,h);let _=a.normals[m],v=a.binormals[m];for(let y=0;y<=i;y++){let M=y/i*Math.PI*2,w=Math.sin(M),A=-Math.cos(M);c.x=A*_.x+w*v.x,c.y=A*_.y+w*v.y,c.z=A*_.z+w*v.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)g(m);g(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let _=0;_<=i;_++)l.x=m/t,l.y=_/i,p.push(l.x,l.y)})(),(function(){for(let m=1;m<=t;m++)for(let _=1;_<=i;_++){let v=(i+1)*(m-1)+(_-1),y=(i+1)*m+(_-1),M=(i+1)*m+_,w=(i+1)*(m-1)+_;f.push(v,y,w),f.push(y,M,w)}})()})(),this.setIndex(f),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Lo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Ho=class extends nt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new b,s=new b;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let g=0;g<3;g++){let m=o.getX(p+g),_=o.getX(p+(g+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,_),fd(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),fd(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new we(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function fd(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var O_=Object.freeze({__proto__:null,BoxGeometry:bt,CapsuleGeometry:To,CircleGeometry:ai,ConeGeometry:oi,CylinderGeometry:rt,DodecahedronGeometry:wo,EdgesGeometry:Ao,ExtrudeGeometry:Fo,IcosahedronGeometry:Jt,LatheGeometry:No,OctahedronGeometry:Yi,PlaneGeometry:Qe,PolyhedronGeometry:Ai,RingGeometry:Gr,ShapeGeometry:Uo,SphereGeometry:Xn,TetrahedronGeometry:Oo,TorusGeometry:Bo,TorusKnotGeometry:ko,TubeGeometry:zo,WireframeGeometry:Ho});var ue=class extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Go=class extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vo=class extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ho(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}function pf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Ki=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wo=class extends Ki{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pc,endingEnd:Pc}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lc:s=e,o=2*t-n;break;case Dc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Lc:a=e,c=2*n-t;break;case Dc:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),g=f*f,m=g*f,_=-d*m+2*d*g-d*f,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*f+1,y=(-1-p)*m+(1.5+p)*g+.5*f,M=p*m-p*g;for(let w=0;w!==o;++w)s[w]=_*a[h+w]+v*a[l+w]+y*a[c+w]+M*a[u+w];return s}},jo=class extends Ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},Xo=class extends Ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},an=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ho(t,this.TimeBufferType),this.values=ho(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ho(e.times,Array),values:ho(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case As:t=this.InterpolantFactoryMethodDiscrete;break;case fo:t=this.InterpolantFactoryMethodLinear;break;case uo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return As;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return uo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&pf(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===uo,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};an.prototype.ValueTypeName="",an.prototype.TimeBufferType=Float32Array,an.prototype.ValueBufferType=Float32Array,an.prototype.DefaultInterpolation=fo;var Si=class extends an{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool",Si.prototype.ValueBufferType=Array,Si.prototype.DefaultInterpolation=As,Si.prototype.InterpolantFactoryMethodLinear=void 0,Si.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends an{constructor(e,t,n,i){super(e,t,n,i)}};qo.prototype.ValueTypeName="color";var $o=class extends an{constructor(e,t,n,i){super(e,t,n,i)}};$o.prototype.ValueTypeName="number";var Yo=class extends Ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Yt.slerpFlat(s,0,a,l-o,a,l,c);return s}},Js=class extends an{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}};Js.prototype.ValueTypeName="quaternion",Js.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends an{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="string",Ei.prototype.ValueBufferType=Array,Ei.prototype.DefaultInterpolation=As,Ei.prototype.InterpolantFactoryMethodLinear=void 0,Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends an{constructor(e,t,n,i){super(e,t,n,i)}};Ko.prototype.ValueTypeName="vector";var Zo=class{constructor(e,t,n){let i=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){c++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,c),o===c&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],f=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},xp=new Zo,Jo=class{constructor(e){this.manager=e!==void 0?e:xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Qs=class extends Vr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Rc=new Ie,gd=new b,_d=new b,Qo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wi,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(gd),_d.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_d),t.updateMatrixWorld(),Rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var vd=new Ie,bs=new b,Cc=new b,zc=class extends Qo{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(bs),Cc.copy(n.position),Cc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Cc),n.updateMatrixWorld(),i.makeTranslation(-bs.x,-bs.y,-bs.z),vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd,n.coordinateSystem,n.reversedDepth)}},ea=class extends Vr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new zc}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ta=class extends Nr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hc=class extends Qo{constructor(){super(new ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},na=class extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Hc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var B_=new Ie,k_=new Ie,z_=new Ie;var el=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ia=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},H_=new b,G_=new Yt,V_=new b,W_=new b,j_=new b;var X_=new b,q_=new Yt,$_=new b,Y_=new b;var Nh="\\[\\]\\.:\\/",mf=new RegExp("["+Nh+"]","g"),Ic="[^"+Nh+"]",ff="[^"+Nh.replace("\\.","")+"]",gf=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ic)+/(WCOD+)?/.source.replace("WCOD",ff)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ic)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ic)+"$"),_f=["material","materials","bones","map"],lt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mf,"")}static parseTrackName(e){let t=gf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);_f.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=class{constructor(r,e,t){let n=t||lt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray],lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K_=new Float32Array(1);var yd=new Ie,ra=class{constructor(e,t,n=0,i=1/0){this.ray=new Wn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yd),this}intersectObject(e,t=!0,n=[]){return Gc(e,this,n,t),n.sort(xd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Gc(e[i],this,n,t);return n.sort(xd),n}};function xd(r,e){return r.distance-e.distance}function Gc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Gc(s[a],e,t,!0)}}var Wr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Oe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Z_=new Q;var J_=new b,Q_=new b,ev=new b,tv=new b,nv=new b,iv=new b,rv=new b;var sv=new b;var av=new b,ov=new Ie,lv=new Ie;var cv=new b,hv=new xe,uv=new xe;var dv=new b,pv=new b,mv=new b;var fv=new b,gv=new Nr;var _v=new mn;var vv=new b;var sa=class extends Gn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){e!==void 0?(this.domElement!==null&&this.disconnect(),this.domElement=e):console.warn("THREE.Controls: connect() now requires an element.")}disconnect(){}dispose(){}update(){}};function Uh(r,e,t,n){let i=(function(s){switch(s){case $n:case Yc:return{byteLength:1,components:1};case $r:case Kc:case Yr:return{byteLength:2,components:1};case ml:case fl:return{byteLength:2,components:4};case Qi:case pl:case Cn:return{byteLength:4,components:1};case Zc:case Jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case 1021:return r*e;case gl:case _l:return r*e/i.components*i.byteLength;case 1030:case 1031:return r*e*2/i.components*i.byteLength;case 1022:return r*e*3/i.components*i.byteLength;case In:case 1033:return r*e*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Wp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function yf(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(r.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=r.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(r.bindBuffer(o,s),l.length===0)r.bufferSubData(o,0,c);else{l.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<l.length;u++){let d=l[h],p=l[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,l[h]=p)}l.length=h+1;for(let u=0,d=l.length;u<d;u++){let p=l[u];r.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var Be={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},he={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Yn={basic:{uniforms:Vt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Vt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new xe(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Vt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Vt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Vt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new xe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Vt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Vt([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Vt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Vt([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Vt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Vt([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Vt([he.common,he.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Vt([he.lights,he.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Yn.physical={uniforms:Vt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var bl={r:0,b:0,g:0},nr=new Kt,xf=new Ie;function Mf(r,e,t,n,i,s,a){let o=new xe(0),c,l,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let _=m.isScene===!0?m.background:null;return _&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_}function g(m,_){m.getRGB(bl,Dh(r)),n.buffers.color.setClear(bl.r,bl.g,bl.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),h=_,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,g(o,h)},render:function(m){let _=!1,v=f(m);v===null?g(o,h):v&&v.isColor&&(g(v,1),_=!0);let y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,_){let v=f(_);v&&(v.isCubeTexture||v.mapping===la)?(l===void 0&&(l=new J(new bt(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:tr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),nr.copy(_.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(xf.makeRotationFromEuler(nr)),l.material.toneMapped=qe.getTransfer(v.colorSpace)!==tt,u===v&&d===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new J(new Qe(2,2),new Rn({name:"BackgroundMaterial",uniforms:tr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=qe.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}}}function bf(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=l(null),s=i,a=!1;function o(_){return r.bindVertexArray(_)}function c(_){return r.deleteVertexArray(_)}function l(_){let v=[],y=[],M=[];for(let w=0;w<t;w++)v[w]=0,y[w]=0,M[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:y,attributeDivisors:M,object:_,attributes:{},index:null}}function h(){let _=s.newAttributes;for(let v=0,y=_.length;v<y;v++)_[v]=0}function u(_){d(_,0)}function d(_,v){let y=s.newAttributes,M=s.enabledAttributes,w=s.attributeDivisors;y[_]=1,M[_]===0&&(r.enableVertexAttribArray(_),M[_]=1),w[_]!==v&&(r.vertexAttribDivisor(_,v),w[_]=v)}function p(){let _=s.newAttributes,v=s.enabledAttributes;for(let y=0,M=v.length;y<M;y++)v[y]!==_[y]&&(r.disableVertexAttribArray(y),v[y]=0)}function f(_,v,y,M,w,A,C){C===!0?r.vertexAttribIPointer(_,v,y,w,A):r.vertexAttribPointer(_,v,y,M,w,A)}function g(){m(),a=!0,s!==i&&(s=i,o(s.object))}function m(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(_,v,y,M,w){let A=!1,C=(function(L,I,k){let H=k.wireframe===!0,O=n[L.id];O===void 0&&(O={},n[L.id]=O);let K=O[I.id];K===void 0&&(K={},O[I.id]=K);let V=K[H];return V===void 0&&(V=l(r.createVertexArray()),K[H]=V),V})(M,y,v);s!==C&&(s=C,o(s.object)),A=(function(L,I,k,H){let O=s.attributes,K=I.attributes,V=0,Y=k.getAttributes();for(let Z in Y)if(Y[Z].location>=0){let se=O[Z],te=K[Z];if(te===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(te=L.instanceColor)),se===void 0||se.attribute!==te||te&&se.data!==te.data)return!0;V++}return s.attributesNum!==V||s.index!==H})(_,M,y,w),A&&(function(L,I,k,H){let O={},K=I.attributes,V=0,Y=k.getAttributes();for(let Z in Y)if(Y[Z].location>=0){let se=K[Z];se===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(se=L.instanceColor));let te={};te.attribute=se,se&&se.data&&(te.data=se.data),O[Z]=te,V++}s.attributes=O,s.attributesNum=V,s.index=H})(_,M,y,w),w!==null&&e.update(w,r.ELEMENT_ARRAY_BUFFER),(A||a)&&(a=!1,(function(L,I,k,H){h();let O=H.attributes,K=k.getAttributes(),V=I.defaultAttributeValues;for(let Y in K){let Z=K[Y];if(Z.location>=0){let se=O[Y];if(se===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),se!==void 0){let te=se.normalized,ve=se.itemSize,Ee=e.get(se);if(Ee===void 0)continue;let Me=Ee.buffer,Ce=Ee.type,ae=Ee.bytesPerElement,ce=Ce===r.INT||Ce===r.UNSIGNED_INT||se.gpuType===pl;if(se.isInterleavedBufferAttribute){let oe=se.data,Ae=oe.stride,Ue=se.offset;if(oe.isInstancedInterleavedBuffer){for(let E=0;E<Z.locationSize;E++)d(Z.location+E,oe.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let E=0;E<Z.locationSize;E++)u(Z.location+E);r.bindBuffer(r.ARRAY_BUFFER,Me);for(let E=0;E<Z.locationSize;E++)f(Z.location+E,ve/Z.locationSize,Ce,te,Ae*ae,(Ue+ve/Z.locationSize*E)*ae,ce)}else{if(se.isInstancedBufferAttribute){for(let oe=0;oe<Z.locationSize;oe++)d(Z.location+oe,se.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<Z.locationSize;oe++)u(Z.location+oe);r.bindBuffer(r.ARRAY_BUFFER,Me);for(let oe=0;oe<Z.locationSize;oe++)f(Z.location+oe,ve/Z.locationSize,Ce,te,ve*ae,ve/Z.locationSize*oe*ae,ce)}}else if(V!==void 0){let te=V[Y];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(Z.location,te);break;case 3:r.vertexAttrib3fv(Z.location,te);break;case 4:r.vertexAttrib4fv(Z.location,te);break;default:r.vertexAttrib1fv(Z.location,te)}}}}p()})(_,v,y,M),w!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))},reset:g,resetDefaultState:m,dispose:function(){g();for(let _ in n){let v=n[_];for(let y in v){let M=v[y];for(let w in M)c(M[w].object),delete M[w];delete v[y]}delete n[_]}},releaseStatesOfGeometry:function(_){if(n[_.id]===void 0)return;let v=n[_.id];for(let y in v){let M=v[y];for(let w in M)c(M[w].object),delete M[w];delete v[y]}delete n[_.id]},releaseStatesOfProgram:function(_){for(let v in n){let y=n[v];if(y[_.id]===void 0)continue;let M=y[_.id];for(let w in M)c(M[w].object),delete M[w];delete y[_.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Sf(r,e,t){let n;function i(s,a,o){o!==0&&(r.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){r.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,n,1)},this.renderMultiDrawInstances=function(s,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<s.length;h++)i(s[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(n,s,0,a,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*c[u];t.update(h,n,1)}}}function Ef(r,e,t,n){let i;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(d){return d===In||n.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==$n&&n.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Cn&&!p)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function Tf(r){let e=this,t=null,n=0,i=!1,s=!1,a=new pn,o=new Ne,c={value:null,needsUpdate:!1};function l(h,u,d,p){let f=h!==null?h.length:0,g=null;if(f!==0){if(g=c.value,p!==!0||g===null){let m=d+4*f,_=u.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=d;v!==f;++v,y+=4)a.copy(h[v]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!g)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let _=s?0:n,v=4*_,y=m.clippingState||null;c.value=y,y=l(p,u,v,d);for(let M=0;M!==v;++M)y[M]=t[M];m.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=_}}}function wf(r){let e=new WeakMap;function t(i,s){return s===hl?i.mapping=qr:s===ul&&(i.mapping=Zi),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===hl||s===ul){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Mo(a.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var Mp=[.125,.215,.35,.446,.526,.582],da=20,Oh=new ta,bp=new xe,Bh=null,kh=0,zh=0,Hh=!1,rr=(1+Math.sqrt(5))/2,Zr=1/rr,Sp=[new b(-rr,Zr,0),new b(rr,Zr,0),new b(-Zr,0,rr),new b(Zr,0,rr),new b(0,rr,-Zr),new b(0,rr,Zr),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],Af=new b,Tl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=Af}=s;Bh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bh,kh,zh),this._renderer.xr.enabled=Hh,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Yr,format:In,colorSpace:Xi,depthBuffer:!1},i=Ep(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ep(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+Mp.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);c.push(p);let f=1/p;d>a-4?f=Mp[d-a+4-1]:d===0&&(f=0),l.push(f);let g=1/(p-2),m=-g,_=1+g,v=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,M=6,w=3,A=2,C=1,L=new Float32Array(w*M*y),I=new Float32Array(A*M*y),k=new Float32Array(C*M*y);for(let O=0;O<y;O++){let K=O%3*2/3-1,V=O>2?0:-1,Y=[K,V,0,K+2/3,V,0,K+2/3,V+1,0,K,V,0,K+2/3,V+1,0,K,V+1,0];L.set(Y,w*M*O),I.set(v,A*M*O);let Z=[O,O,O,O,O,O];k.set(Z,C*M*O)}let H=new nt;H.setAttribute("position",new Ut(L,w)),H.setAttribute("uv",new Ut(I,A)),H.setAttribute("faceIndex",new Ut(k,C)),o.push(H),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(da),h=new b(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:da,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Zh(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new J(this._lodPlanes[0],e);this._renderer.compile(t,Oh)}_sceneToCubeUV(e,t,n,i,s){let a=new Nt(90,1,t,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(bp),l.toneMapping=li,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null));let d=new Zt({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),p=new J(new bt,d),f=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,f=!0):(d.color.copy(bp),f=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[m],s.y,s.z)):_===1?(a.up.set(0,0,o[m]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[m],s.z)):(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[m]));let v=this._cubeSize;Sl(i,_*v,m>2?v:0,v,v),l.setRenderTarget(i),f&&l.render(p,a),l.render(e,a)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=u,l.autoClear=h,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===qr||e.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tp());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new J(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Sl(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Oh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Sp[(i-s-1)%Sp.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new J(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,g=isFinite(s)?1+Math.floor(3*f):da;g>da&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let m=[],_=0;for(let M=0;M<da;++M){let w=M/f,A=Math.exp(-w*w/2);m.push(A),M===0?_+=A:M<g&&(_+=2*A)}for(let M=0;M<m.length;M++)m[M]=m[M]/_;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let y=this._sizeLods[i];Sl(t,3*y*(i>v-4?i-v+4:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(h,Oh)}};function Ep(r,e,t){let n=new Vn(r,e,t);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Tp(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zh(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function wp(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Zh(){return`

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
	`}function Rf(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===hl||s===ul,o=s===qr||s===Zi;if(a||o){let c=e.get(i),l=c!==void 0?c.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==l)return t===null&&(t=new Tl(r)),c=a?t.fromEquirectangular(i,c):t.fromCubemap(i,c),c.texture.pmremVersion=i.pmremVersion,e.set(i,c),c.texture;if(c!==void 0)return c.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Tl(r)),c=a?t.fromEquirectangular(i):t.fromCubemap(i),c.texture.pmremVersion=i.pmremVersion,e.set(i,c),i.addEventListener("dispose",n),c.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Cf(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Lr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function If(r,e,t,n){let i={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);l.removeEventListener("dispose",a),delete i[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let g=h.array;d=h.version;for(let m=0,_=g.length;m<_;m+=3){let v=g[m+0],y=g[m+1],M=g[m+2];l.push(v,y,y,M,M,v)}}else{if(u===void 0)return;{let g=u.array;d=u.version;for(let m=0,_=g.length/3-1;m<_;m+=3){let v=m+0,y=m+1,M=m+2;l.push(v,y,y,M,M,v)}}}let p=new(Lh(l)?Ds:Ls)(l,1);p.version=d;let f=s.get(c);f&&e.remove(f),s.set(c,p)}return{get:function(c,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Pf(r,e,t){let n,i,s;function a(o,c,l){l!==0&&(r.drawElementsInstanced(n,c,i,o*s,l),t.update(c,n,l))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,s=o.bytesPerElement},this.render=function(o,c){r.drawElements(n,c,i,o*s),t.update(c,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,i,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,c[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,c,0,i,o,0,h,0,l);let d=0;for(let p=0;p<l;p++)d+=c[p]*h[p];t.update(d,n,1)}}}function Lf(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Df(r,e,t){let n=new WeakMap,i=new Ze;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=n.get(a);if(u===void 0||u.count!==h){let L=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let y=a.attributes.position.count*v,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*M*4*h),A=new Ps(w,y,M,h);A.type=Cn,A.needsUpdate=!0;let C=4*v;for(let I=0;I<h;I++){let k=g[I],H=m[I],O=_[I],K=y*M*4*I;for(let V=0;V<k.count;V++){let Y=V*C;d===!0&&(i.fromBufferAttribute(k,V),w[K+Y+0]=i.x,w[K+Y+1]=i.y,w[K+Y+2]=i.z,w[K+Y+3]=0),p===!0&&(i.fromBufferAttribute(H,V),w[K+Y+4]=i.x,w[K+Y+5]=i.y,w[K+Y+6]=i.z,w[K+Y+7]=0),f===!0&&(i.fromBufferAttribute(O,V),w[K+Y+8]=i.x,w[K+Y+9]=i.y,w[K+Y+10]=i.z,w[K+Y+11]=O.itemSize===4?i.w:1)}}u={count:h,texture:A,size:new Q(y,M)},n.set(a,u),a.addEventListener("dispose",L)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<c.length;f++)d+=c[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",c)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function Ff(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(i.get(l)!==o&&(e.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return l},dispose:function(){i=new WeakMap}}}var jp=new Xt,Ap=new zs(1,1),Xp=new Ps,qp=new yo,$p=new Fs,Rp=[],Cp=[],Ip=new Float32Array(16),Pp=new Float32Array(9),Lp=new Float32Array(4);function Qr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Rp[i];if(s===void 0&&(s=new Float32Array(i),Rp[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Et(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Tt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Al(r,e){let t=Cp[e];t===void 0&&(t=new Int32Array(e),Cp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Nf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Uf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2fv(this.addr,e),Tt(t,e)}}function Of(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;r.uniform3fv(this.addr,e),Tt(t,e)}}function Bf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4fv(this.addr,e),Tt(t,e)}}function kf(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Lp.set(n),r.uniformMatrix2fv(this.addr,!1,Lp),Tt(t,n)}}function zf(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Pp.set(n),r.uniformMatrix3fv(this.addr,!1,Pp),Tt(t,n)}}function Hf(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Ip.set(n),r.uniformMatrix4fv(this.addr,!1,Ip),Tt(t,n)}}function Gf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Vf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2iv(this.addr,e),Tt(t,e)}}function Wf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3iv(this.addr,e),Tt(t,e)}}function jf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4iv(this.addr,e),Tt(t,e)}}function Xf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function qf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2uiv(this.addr,e),Tt(t,e)}}function $f(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3uiv(this.addr,e),Tt(t,e)}}function Yf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4uiv(this.addr,e),Tt(t,e)}}function Kf(r,e,t){let n=this.cache,i=t.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),this.type===r.SAMPLER_2D_SHADOW?(Ap.compareFunction=Ch,s=Ap):s=jp,t.setTexture2D(e||s,i)}function Zf(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qp,i)}function Jf(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$p,i)}function Qf(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xp,i)}function eg(r,e){r.uniform1fv(this.addr,e)}function tg(r,e){let t=Qr(e,this.size,2);r.uniform2fv(this.addr,t)}function ng(r,e){let t=Qr(e,this.size,3);r.uniform3fv(this.addr,t)}function ig(r,e){let t=Qr(e,this.size,4);r.uniform4fv(this.addr,t)}function rg(r,e){let t=Qr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function sg(r,e){let t=Qr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ag(r,e){let t=Qr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function og(r,e){r.uniform1iv(this.addr,e)}function lg(r,e){r.uniform2iv(this.addr,e)}function cg(r,e){r.uniform3iv(this.addr,e)}function hg(r,e){r.uniform4iv(this.addr,e)}function ug(r,e){r.uniform1uiv(this.addr,e)}function dg(r,e){r.uniform2uiv(this.addr,e)}function pg(r,e){r.uniform3uiv(this.addr,e)}function mg(r,e){r.uniform4uiv(this.addr,e)}function fg(r,e,t){let n=this.cache,i=e.length,s=Al(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||jp,s[a])}function gg(r,e,t){let n=this.cache,i=e.length,s=Al(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||qp,s[a])}function _g(r,e,t){let n=this.cache,i=e.length,s=Al(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||$p,s[a])}function vg(r,e,t){let n=this.cache,i=e.length,s=Al(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Xp,s[a])}var Vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return Nf;case 35664:return Uf;case 35665:return Of;case 35666:return Bf;case 35674:return kf;case 35675:return zf;case 35676:return Hf;case 5124:case 35670:return Gf;case 35667:case 35671:return Vf;case 35668:case 35672:return Wf;case 35669:case 35673:return jf;case 5125:return Xf;case 36294:return qf;case 36295:return $f;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return Jf;case 36289:case 36303:case 36311:case 36292:return Qf}})(t.type)}},Wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return rg;case 35675:return sg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}})(t.type)}},jh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Gh=/(\w+)(\])?(\[|\.)?/g;function Dp(r,e){r.seq.push(e),r.map[e.id]=e}function yg(r,e,t){let n=r.name,i=n.length;for(Gh.lastIndex=0;;){let s=Gh.exec(n),a=Gh.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===i){Dp(t,l===void 0?new Vh(o,r,e):new Wh(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new jh(o),Dp(t,h)),t=h}}}var Jr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);yg(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Fp(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var xg=0,Np=new Ne;function Up(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=(r.getShaderInfoLog(e)||"").trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function Mg(r,e){let t=(function(n){qe._getMatrix(Np,qe.workingColorSpace,n);let i=`mat3( ${Np.elements.map(s=>s.toFixed(4))} )`;switch(qe.getTransfer(n)){case Rs:return[i,"LinearTransferOETF"];case tt:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bg(r,e){let t;switch(e){case Xd:t="Linear";break;case qd:t="Reinhard";break;case $d:t="Cineon";break;case cl:t="ACESFilmic";break;case Kd:t="AgX";break;case Zd:t="Neutral";break;case Yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var El=new b;function Sg(){return qe.getLuminanceCoefficients(El),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${El.x.toFixed(4)}, ${El.y.toFixed(4)}, ${El.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pa(r){return r!==""}function Op(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(r){return r.replace(Eg,wg)}var Tg=new Map;function wg(r,e){let t=Be[e];if(t===void 0){let n=Tg.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Xh(t)}var Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kp(r){return r.replace(Ag,Rg)}function Rg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cg(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(H){let O="SHADOWMAP_TYPE_BASIC";return H.shadowMapType===Wc?O="SHADOWMAP_TYPE_PCF":H.shadowMapType===tl?O="SHADOWMAP_TYPE_PCF_SOFT":H.shadowMapType===qn&&(O="SHADOWMAP_TYPE_VSM"),O})(t),l=(function(H){let O="ENVMAP_TYPE_CUBE";if(H.envMap)switch(H.envMapMode){case qr:case Zi:O="ENVMAP_TYPE_CUBE";break;case la:O="ENVMAP_TYPE_CUBE_UV"}return O})(t),h=(function(H){let O="ENVMAP_MODE_REFLECTION";return H.envMap&&H.envMapMode===Zi&&(O="ENVMAP_MODE_REFRACTION"),O})(t),u=(function(H){let O="ENVMAP_BLENDING_NONE";if(H.envMap)switch(H.combine){case Vd:O="ENVMAP_BLENDING_MULTIPLY";break;case Wd:O="ENVMAP_BLENDING_MIX";break;case jd:O="ENVMAP_BLENDING_ADD"}return O})(t),d=(function(H){let O=H.envMapCubeUVHeight;if(O===null)return null;let K=Math.log2(O)-2,V=1/O;return{texelWidth:1/(3*Math.max(Math.pow(2,K),112)),texelHeight:V,maxMip:K}})(t),p=(function(H){return[H.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",H.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)})(t),f=(function(H){let O=[];for(let K in H){let V=H[K];V!==!1&&O.push("#define "+K+" "+V)}return O.join(`
`)})(s),g=i.createProgram(),m,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(pa).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(pa).join(`
`),_.length>0&&(_+=`
`)):(m=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),_=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?Be.tonemapping_pars_fragment:"",t.toneMapping!==li?bg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Mg("linearToOutputTexel",t.outputColorSpace),Sg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),a=Xh(a),a=Op(a,t),a=Bp(a,t),o=Xh(o),o=Op(o,t),o=Bp(o,t),a=kp(a),o=kp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=v+m+a,M=v+_+o,w=Fp(i,i.VERTEX_SHADER,y),A=Fp(i,i.FRAGMENT_SHADER,M);function C(H){if(r.debug.checkShaderErrors){let O=i.getProgramInfoLog(g)||"",K=i.getShaderInfoLog(w)||"",V=i.getShaderInfoLog(A)||"",Y=O.trim(),Z=K.trim(),se=V.trim(),te=!0,ve=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(te=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,w,A);else{let Ee=Up(i,w,"vertex"),Me=Up(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Y+`
`+Ee+`
`+Me)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):Z!==""&&se!==""||(ve=!1);ve&&(H.diagnostics={runnable:te,programLog:Y,vertexShader:{log:Z,prefix:m},fragmentShader:{log:se,prefix:_}})}i.deleteShader(w),i.deleteShader(A),L=new Jr(i,g),I=(function(O,K){let V={},Y=O.getProgramParameter(K,O.ACTIVE_ATTRIBUTES);for(let Z=0;Z<Y;Z++){let se=O.getActiveAttrib(K,Z),te=se.name,ve=1;se.type===O.FLOAT_MAT2&&(ve=2),se.type===O.FLOAT_MAT3&&(ve=3),se.type===O.FLOAT_MAT4&&(ve=4),V[te]={type:se.type,location:O.getAttribLocation(K,te),locationSize:ve}}return V})(i,g)}let L,I;i.attachShader(g,w),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),this.getUniforms=function(){return L===void 0&&C(this),L},this.getAttributes=function(){return I===void 0&&C(this),I};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(g,37297)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=A,this}var Ig=0,qh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new $h(e),t.set(e,n)),n}},$h=class{constructor(e){this.id=Ig++,this.code=e,this.usedTimes=0}};function Pg(r,e,t,n,i,s,a){let o=new Fr,c=new qh,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,v,y,M){let w=y.fog,A=M.geometry,C=m.isMeshStandardMaterial?y.environment:null,L=(m.isMeshStandardMaterial?t:e).get(m.envMap||C),I=L&&L.mapping===la?L.image.height:null,k=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let H=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,O=H!==void 0?H.length:0,K,V,Y,Z,se=0;if(A.morphAttributes.position!==void 0&&(se=1),A.morphAttributes.normal!==void 0&&(se=2),A.morphAttributes.color!==void 0&&(se=3),k){let zt=Yn[k];K=zt.vertexShader,V=zt.fragmentShader}else K=m.vertexShader,V=m.fragmentShader,c.update(m),Y=c.getVertexShaderID(m),Z=c.getFragmentShaderID(m);let te=r.getRenderTarget(),ve=r.state.buffers.depth.getReversed(),Ee=M.isInstancedMesh===!0,Me=M.isBatchedMesh===!0,Ce=!!m.map,ae=!!m.matcap,ce=!!L,oe=!!m.aoMap,Ae=!!m.lightMap,Ue=!!m.bumpMap,E=!!m.normalMap,S=!!m.displacementMap,B=!!m.emissiveMap,D=!!m.metalnessMap,x=!!m.roughnessMap,R=m.anisotropy>0,N=m.clearcoat>0,P=m.dispersion>0,X=m.iridescence>0,z=m.sheen>0,G=m.transmission>0,ie=R&&!!m.anisotropyMap,de=N&&!!m.clearcoatMap,re=N&&!!m.clearcoatNormalMap,fe=N&&!!m.clearcoatRoughnessMap,be=X&&!!m.iridescenceMap,Te=X&&!!m.iridescenceThicknessMap,Ge=z&&!!m.sheenColorMap,$e=z&&!!m.sheenRoughnessMap,Ye=!!m.specularMap,pe=!!m.specularColorMap,Re=!!m.specularIntensityMap,He=G&&!!m.transmissionMap,kt=G&&!!m.thicknessMap,ye=!!m.gradientMap,Ke=!!m.alphaMap,Ve=m.alphaTest>0,xn=!!m.alphaHash,Zn=!!m.extensions,F=li;m.toneMapped&&(te!==null&&te.isXRRenderTarget!==!0||(F=r.toneMapping));let Rt={shaderID:k,shaderType:m.type,shaderName:m.name,vertexShader:K,fragmentShader:V,defines:m.defines,customVertexShaderID:Y,customFragmentShaderID:Z,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:Me,batchingColor:Me&&M._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&M.instanceColor!==null,instancingMorph:Ee&&M.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Xi,alphaToCoverage:!!m.alphaToCoverage,map:Ce,matcap:ae,envMap:ce,envMapMode:ce&&L.mapping,envMapCubeUVHeight:I,aoMap:oe,lightMap:Ae,bumpMap:Ue,normalMap:E,displacementMap:d&&S,emissiveMap:B,normalMapObjectSpace:E&&m.normalMapType===rp,normalMapTangentSpace:E&&m.normalMapType===ip,metalnessMap:D,roughnessMap:x,anisotropy:R,anisotropyMap:ie,clearcoat:N,clearcoatMap:de,clearcoatNormalMap:re,clearcoatRoughnessMap:fe,dispersion:P,iridescence:X,iridescenceMap:be,iridescenceThicknessMap:Te,sheen:z,sheenColorMap:Ge,sheenRoughnessMap:$e,specularMap:Ye,specularColorMap:pe,specularIntensityMap:Re,transmission:G,transmissionMap:He,thicknessMap:kt,gradientMap:ye,opaque:m.transparent===!1&&m.blending===aa&&m.alphaToCoverage===!1,alphaMap:Ke,alphaTest:Ve,alphaHash:xn,combine:m.combine,mapUv:Ce&&g(m.map.channel),aoMapUv:oe&&g(m.aoMap.channel),lightMapUv:Ae&&g(m.lightMap.channel),bumpMapUv:Ue&&g(m.bumpMap.channel),normalMapUv:E&&g(m.normalMap.channel),displacementMapUv:S&&g(m.displacementMap.channel),emissiveMapUv:B&&g(m.emissiveMap.channel),metalnessMapUv:D&&g(m.metalnessMap.channel),roughnessMapUv:x&&g(m.roughnessMap.channel),anisotropyMapUv:ie&&g(m.anisotropyMap.channel),clearcoatMapUv:de&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:$e&&g(m.sheenRoughnessMap.channel),specularMapUv:Ye&&g(m.specularMap.channel),specularColorMapUv:pe&&g(m.specularColorMap.channel),specularIntensityMapUv:Re&&g(m.specularIntensityMap.channel),transmissionMapUv:He&&g(m.transmissionMap.channel),thicknessMapUv:kt&&g(m.thicknessMap.channel),alphaMapUv:Ke&&g(m.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(E||R),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!A.attributes.uv&&(Ce||Ke),fog:!!w,useFog:m.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:M.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:se,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:F,decodeVideoTexture:Ce&&m.map.isVideoTexture===!0&&qe.getTransfer(m.map.colorSpace)===tt,decodeVideoTextureEmissive:B&&m.emissiveMap.isVideoTexture===!0&&qe.getTransfer(m.emissiveMap.colorSpace)===tt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===mt,flipSided:m.side===ln,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Zn&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zn&&m.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)_.push(v),_.push(m.defines[v]);return m.isRawShaderMaterial===!1&&((function(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)})(_,m),(function(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)})(_,m),_.push(r.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=f[m.type],v;if(_){let y=Yn[_];v=fp.clone(y.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,_){let v;for(let y=0,M=h.length;y<M;y++){let w=h[y];if(w.cacheKey===_){v=w,++v.usedTimes;break}}return v===void 0&&(v=new Cg(r,_,m,s),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes===0){let _=h.indexOf(m);h[_]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){c.remove(m)},programs:h,dispose:function(){c.dispose()}}}function Lg(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Dg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Hp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Gp(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,c,l,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.push(d):c.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.unshift(d):c.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let c=r[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Dg),n.length>1&&n.sort(o||Hp),i.length>1&&i.sort(o||Hp)}}}function Fg(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new Gp,r.set(e,[i])):t>=n.length?(i=new Gp,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function Ng(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new xe};break;case"SpotLight":t={position:new b,direction:new b,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new b,halfWidth:new b,halfHeight:new b}}return r[e.id]=t,t}}}var Ug=0;function Og(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Bg(r){let e=new Ng,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new b);let i=new b,s=new Ie,a=new Ie;return{setup:function(o){let c=0,l=0,h=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let u=0,d=0,p=0,f=0,g=0,m=0,_=0,v=0,y=0,M=0,w=0;o.sort(Og);for(let C=0,L=o.length;C<L;C++){let I=o[C],k=I.color,H=I.intensity,O=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)c+=k.r*H,l+=k.g*H,h+=k.b*H;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],H);w++}else if(I.isDirectionalLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,Z=t.get(I);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,n.directionalShadow[u]=Z,n.directionalShadowMap[u]=K,n.directionalShadowMatrix[u]=I.shadow.matrix,m++}n.directional[u]=V,u++}else if(I.isSpotLight){let V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(k).multiplyScalar(H),V.distance=O,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[p]=V;let Y=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,Y.updateMatrices(I),I.castShadow&&M++),n.spotLightMatrix[p]=Y.matrix,I.castShadow){let Z=t.get(I);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,n.spotShadow[p]=Z,n.spotShadowMap[p]=K,v++}p++}else if(I.isRectAreaLight){let V=e.get(I);V.color.copy(k).multiplyScalar(H),V.halfWidth.set(.5*I.width,0,0),V.halfHeight.set(0,.5*I.height,0),n.rectArea[f]=V,f++}else if(I.isPointLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let Y=I.shadow,Z=t.get(I);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,Z.shadowCameraNear=Y.camera.near,Z.shadowCameraFar=Y.camera.far,n.pointShadow[d]=Z,n.pointShadowMap[d]=K,n.pointShadowMatrix[d]=I.shadow.matrix,_++}n.point[d]=V,d++}else if(I.isHemisphereLight){let V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(H),V.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[g]=V,g++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=h;let A=n.hash;A.directionalLength===u&&A.pointLength===d&&A.spotLength===p&&A.rectAreaLength===f&&A.hemiLength===g&&A.numDirectionalShadows===m&&A.numPointShadows===_&&A.numSpotShadows===v&&A.numSpotMaps===y&&A.numLightProbes===w||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=g,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+y-M,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,A.directionalLength=u,A.pointLength=d,A.spotLength=p,A.rectAreaLength=f,A.hemiLength=g,A.numDirectionalShadows=m,A.numPointShadows=_,A.numSpotShadows=v,A.numSpotMaps=y,A.numLightProbes=w,n.version=Ug++)},setupView:function(o,c){let l=0,h=0,u=0,d=0,p=0,f=c.matrixWorldInverse;for(let g=0,m=o.length;g<m;g++){let _=o[g];if(_.isDirectionalLight){let v=n.directional[l];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),l++}else if(_.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),u++}else if(_.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(_.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*_.width,0,0),v.halfHeight.set(0,.5*_.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(_.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(f),h++}else if(_.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(f),p++}}},state:n}}function Vp(r){let e=new Bg(r),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){i.camera=s,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function kg(r){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),s;return i===void 0?(s=new Vp(r),e.set(t,[s])):n>=i.length?(s=new Vp(r),i.push(s)):s=i[n],s},dispose:function(){e=new WeakMap}}}function zg(r,e,t){let n=new wi,i=new Q,s=new Q,a=new Ze,o=new Go({depthPacking:np}),c=new Vo,l={},h=t.maxTextureSize,u={[jr]:ln,[ln]:jr,[mt]:mt},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new nt;f.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new J(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let _=this.type;function v(A,C){let L=e.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(C,null,L,d,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(C,null,L,p,g,null)}function y(A,C,L,I){let k=null,H=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(H!==void 0)k=H;else if(k=L.isPointLight===!0?c:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let O=k.uuid,K=C.uuid,V=l[O];V===void 0&&(V={},l[O]=V);let Y=V[K];Y===void 0&&(Y=k.clone(),V[K]=Y,C.addEventListener("dispose",w)),k=Y}return k.visible=C.visible,k.wireframe=C.wireframe,k.side=I===qn?C.shadowSide!==null?C.shadowSide:C.side:C.shadowSide!==null?C.shadowSide:u[C.side],k.alphaMap=C.alphaMap,k.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,k.map=C.map,k.clipShadows=C.clipShadows,k.clippingPlanes=C.clippingPlanes,k.clipIntersection=C.clipIntersection,k.displacementMap=C.displacementMap,k.displacementScale=C.displacementScale,k.displacementBias=C.displacementBias,k.wireframeLinewidth=C.wireframeLinewidth,k.linewidth=C.linewidth,L.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(r.properties.get(k).light=L),k}function M(A,C,L,I,k){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&k===qn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let O=e.update(A),K=A.material;if(Array.isArray(K)){let V=O.groups;for(let Y=0,Z=V.length;Y<Z;Y++){let se=V[Y],te=K[se.materialIndex];if(te&&te.visible){let ve=y(A,te,I,k);A.onBeforeShadow(r,A,C,L,O,ve,se),r.renderBufferDirect(L,null,O,ve,A,se),A.onAfterShadow(r,A,C,L,O,ve,se)}}}else if(K.visible){let V=y(A,K,I,k);A.onBeforeShadow(r,A,C,L,O,V,null),r.renderBufferDirect(L,null,O,V,A,null),A.onAfterShadow(r,A,C,L,O,V,null)}}let H=A.children;for(let O=0,K=H.length;O<K;O++)M(H[O],C,L,I,k)}function w(A){A.target.removeEventListener("dispose",w);for(let C in l){let L=l[C],I=A.target.uuid;I in L&&(L[I].dispose(),delete L[I])}}this.render=function(A,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let I=r.getRenderTarget(),k=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Ii),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let K=_!==qn&&this.type===qn,V=_===qn&&this.type!==qn;for(let Y=0,Z=A.length;Y<Z;Y++){let se=A[Y],te=se.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;i.copy(te.mapSize);let ve=te.getFrameExtents();if(i.multiply(ve),s.copy(te.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ve.x),i.x=s.x*ve.x,te.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ve.y),i.y=s.y*ve.y,te.mapSize.y=s.y)),te.map===null||K===!0||V===!0){let Me=this.type!==qn?{minFilter:zn,magFilter:zn}:{};te.map!==null&&te.map.dispose(),te.map=new Vn(i.x,i.y,Me),te.map.texture.name=se.name+".shadowMap",te.camera.updateProjectionMatrix()}r.setRenderTarget(te.map),r.clear();let Ee=te.getViewportCount();for(let Me=0;Me<Ee;Me++){let Ce=te.getViewport(Me);a.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),O.viewport(a),te.updateMatrices(se,Me),n=te.getFrustum(),M(C,L,te.camera,se,this.type)}te.isPointLightShadow!==!0&&this.type===qn&&v(te,L),te.needsUpdate=!1}_=this.type,m.needsUpdate=!1,r.setRenderTarget(I,k,H)}}var Hg={[nl]:il,[rl]:ol,[sl]:ll,[oa]:al,[il]:nl,[ol]:rl,[ll]:sl,[al]:oa};function Gg(r,e){let t=new function(){let x=!1,R=new Ze,N=null,P=new Ze(0,0,0,0);return{setMask:function(X){N===X||x||(r.colorMask(X,X,X,X),N=X)},setLocked:function(X){x=X},setClear:function(X,z,G,ie,de){de===!0&&(X*=ie,z*=ie,G*=ie),R.set(X,z,G,ie),P.equals(R)===!1&&(r.clearColor(X,z,G,ie),P.copy(R))},reset:function(){x=!1,N=null,P.set(-1,0,0,0)}}},n=new function(){let x=!1,R=!1,N=null,P=null,X=null;return{setReversed:function(z){if(R!==z){let G=e.get("EXT_clip_control");z?G.clipControlEXT(G.LOWER_LEFT_EXT,G.ZERO_TO_ONE_EXT):G.clipControlEXT(G.LOWER_LEFT_EXT,G.NEGATIVE_ONE_TO_ONE_EXT),R=z;let ie=X;X=null,this.setClear(ie)}},getReversed:function(){return R},setTest:function(z){z?ce(r.DEPTH_TEST):oe(r.DEPTH_TEST)},setMask:function(z){N===z||x||(r.depthMask(z),N=z)},setFunc:function(z){if(R&&(z=Hg[z]),P!==z){switch(z){case nl:r.depthFunc(r.NEVER);break;case il:r.depthFunc(r.ALWAYS);break;case rl:r.depthFunc(r.LESS);break;case oa:r.depthFunc(r.LEQUAL);break;case sl:r.depthFunc(r.EQUAL);break;case al:r.depthFunc(r.GEQUAL);break;case ol:r.depthFunc(r.GREATER);break;case ll:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}P=z}},setLocked:function(z){x=z},setClear:function(z){X!==z&&(R&&(z=1-z),r.clearDepth(z),X=z)},reset:function(){x=!1,N=null,P=null,X=null,R=!1}}},i=new function(){let x=!1,R=null,N=null,P=null,X=null,z=null,G=null,ie=null,de=null;return{setTest:function(re){x||(re?ce(r.STENCIL_TEST):oe(r.STENCIL_TEST))},setMask:function(re){R===re||x||(r.stencilMask(re),R=re)},setFunc:function(re,fe,be){N===re&&P===fe&&X===be||(r.stencilFunc(re,fe,be),N=re,P=fe,X=be)},setOp:function(re,fe,be){z===re&&G===fe&&ie===be||(r.stencilOp(re,fe,be),z=re,G=fe,ie=be)},setLocked:function(re){x=re},setClear:function(re){de!==re&&(r.clearStencil(re),de=re)},reset:function(){x=!1,R=null,N=null,P=null,X=null,z=null,G=null,ie=null,de=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,g=null,m=null,_=null,v=null,y=null,M=new xe(0,0,0),w=0,A=!1,C=null,L=null,I=null,k=null,H=null,O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,V=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=V>=1):Y.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=V>=2);let Z=null,se={},te=r.getParameter(r.SCISSOR_BOX),ve=r.getParameter(r.VIEWPORT),Ee=new Ze().fromArray(te),Me=new Ze().fromArray(ve);function Ce(x,R,N,P){let X=new Uint8Array(4),z=r.createTexture();r.bindTexture(x,z),r.texParameteri(x,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(x,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let G=0;G<N;G++)x===r.TEXTURE_3D||x===r.TEXTURE_2D_ARRAY?r.texImage3D(R,0,r.RGBA,1,1,P,0,r.RGBA,r.UNSIGNED_BYTE,X):r.texImage2D(R+G,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,X);return z}let ae={};function ce(x){o[x]!==!0&&(r.enable(x),o[x]=!0)}function oe(x){o[x]!==!1&&(r.disable(x),o[x]=!1)}ae[r.TEXTURE_2D]=Ce(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=Ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=Ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=Ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),ce(r.DEPTH_TEST),n.setFunc(oa),S(!1),B(Vc),ce(r.CULL_FACE),E(Ii);let Ae={[Xr]:r.FUNC_ADD,[Ed]:r.FUNC_SUBTRACT,[Td]:r.FUNC_REVERSE_SUBTRACT};Ae[wd]=r.MIN,Ae[Ad]=r.MAX;let Ue={[Rd]:r.ZERO,[Cd]:r.ONE,[Id]:r.SRC_COLOR,[Ld]:r.SRC_ALPHA,[Bd]:r.SRC_ALPHA_SATURATE,[Ud]:r.DST_COLOR,[Fd]:r.DST_ALPHA,[Pd]:r.ONE_MINUS_SRC_COLOR,[Dd]:r.ONE_MINUS_SRC_ALPHA,[Od]:r.ONE_MINUS_DST_COLOR,[Nd]:r.ONE_MINUS_DST_ALPHA,[kd]:r.CONSTANT_COLOR,[zd]:r.ONE_MINUS_CONSTANT_COLOR,[Hd]:r.CONSTANT_ALPHA,[Gd]:r.ONE_MINUS_CONSTANT_ALPHA};function E(x,R,N,P,X,z,G,ie,de,re){if(x!==Ii){if(d===!1&&(ce(r.BLEND),d=!0),x===Sd)X=X||R,z=z||N,G=G||P,R===f&&X===_||(r.blendEquationSeparate(Ae[R],Ae[X]),f=R,_=X),N===g&&P===m&&z===v&&G===y||(r.blendFuncSeparate(Ue[N],Ue[P],Ue[z],Ue[G]),g=N,m=P,v=z,y=G),ie.equals(M)!==!1&&de===w||(r.blendColor(ie.r,ie.g,ie.b,de),M.copy(ie),w=de),p=x,A=!1;else if(x!==p||re!==A){if(f===Xr&&_===Xr||(r.blendEquation(r.FUNC_ADD),f=Xr,_=Xr),re)switch(x){case aa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jc:r.blendFunc(r.ONE,r.ONE);break;case Xc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",x)}else switch(x){case aa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Xc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",x)}g=null,m=null,v=null,y=null,M.set(0,0,0),w=0,p=x,A=re}}else d===!0&&(oe(r.BLEND),d=!1)}function S(x){C!==x&&(x?r.frontFace(r.CW):r.frontFace(r.CCW),C=x)}function B(x){x!==Md?(ce(r.CULL_FACE),x!==L&&(x===Vc?r.cullFace(r.BACK):x===bd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):oe(r.CULL_FACE),L=x}function D(x,R,N){x?(ce(r.POLYGON_OFFSET_FILL),k===R&&H===N||(r.polygonOffset(R,N),k=R,H=N)):oe(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:ce,disable:oe,bindFramebuffer:function(x,R){return c[x]!==R&&(r.bindFramebuffer(x,R),c[x]=R,x===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=R),x===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=R),!0)},drawBuffers:function(x,R){let N=h,P=!1;if(x){N=l.get(R),N===void 0&&(N=[],l.set(R,N));let X=x.textures;if(N.length!==X.length||N[0]!==r.COLOR_ATTACHMENT0){for(let z=0,G=X.length;z<G;z++)N[z]=r.COLOR_ATTACHMENT0+z;N.length=X.length,P=!0}}else N[0]!==r.BACK&&(N[0]=r.BACK,P=!0);P&&r.drawBuffers(N)},useProgram:function(x){return u!==x&&(r.useProgram(x),u=x,!0)},setBlending:E,setMaterial:function(x,R){x.side===mt?oe(r.CULL_FACE):ce(r.CULL_FACE);let N=x.side===ln;R&&(N=!N),S(N),x.blending===aa&&x.transparent===!1?E(Ii):E(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),n.setFunc(x.depthFunc),n.setTest(x.depthTest),n.setMask(x.depthWrite),t.setMask(x.colorWrite);let P=x.stencilWrite;i.setTest(P),P&&(i.setMask(x.stencilWriteMask),i.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),i.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),D(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):oe(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:B,setLineWidth:function(x){x!==I&&(K&&r.lineWidth(x),I=x)},setPolygonOffset:D,setScissorTest:function(x){x?ce(r.SCISSOR_TEST):oe(r.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=r.TEXTURE0+O-1),Z!==x&&(r.activeTexture(x),Z=x)},bindTexture:function(x,R,N){N===void 0&&(N=Z===null?r.TEXTURE0+O-1:Z);let P=se[N];P===void 0&&(P={type:void 0,texture:void 0},se[N]=P),P.type===x&&P.texture===R||(Z!==N&&(r.activeTexture(N),Z=N),r.bindTexture(x,R||ae[x]),P.type=x,P.texture=R)},unbindTexture:function(){let x=se[Z];x!==void 0&&x.type!==void 0&&(r.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}},updateUBOMapping:function(x,R){let N=a.get(R);N===void 0&&(N=new WeakMap,a.set(R,N));let P=N.get(x);P===void 0&&(P=r.getUniformBlockIndex(R,x.name),N.set(x,P))},uniformBlockBinding:function(x,R){let N=a.get(R).get(x);s.get(R)!==N&&(r.uniformBlockBinding(R,N,x.__bindingPointIndex),s.set(R,N))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}},scissor:function(x){Ee.equals(x)===!1&&(r.scissor(x.x,x.y,x.z,x.w),Ee.copy(x))},viewport:function(x){Me.equals(x)===!1&&(r.viewport(x.x,x.y,x.z,x.w),Me.copy(x))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},Z=null,se={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,g=null,m=null,_=null,v=null,y=null,M=new xe(0,0,0),w=0,A=!1,C=null,L=null,I=null,k=null,H=null,Ee.set(0,0,r.canvas.width,r.canvas.height),Me.set(0,0,r.canvas.width,r.canvas.height),t.reset(),n.reset(),i.reset()}}}function Vg(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new Q,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(E,S){return p?new OffscreenCanvas(E,S):Is("canvas")}function g(E,S,B){let D=1,x=Ue(E);if((x.width>B||x.height>B)&&(D=B/Math.max(x.width,x.height)),D<1){if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let R=Math.floor(D*x.width),N=Math.floor(D*x.height);u===void 0&&(u=f(R,N));let P=S?f(R,N):u;return P.width=R,P.height=N,P.getContext("2d").drawImage(E,0,0,R,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+R+"x"+N+")."),P}return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),E}return E}function m(E){return E.generateMipmaps}function _(E){r.generateMipmap(E)}function v(E){return E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?r.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(E,S,B,D,x=!1){if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let R=S;if(S===r.RED&&(B===r.FLOAT&&(R=r.R32F),B===r.HALF_FLOAT&&(R=r.R16F),B===r.UNSIGNED_BYTE&&(R=r.R8)),S===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(R=r.R8UI),B===r.UNSIGNED_SHORT&&(R=r.R16UI),B===r.UNSIGNED_INT&&(R=r.R32UI),B===r.BYTE&&(R=r.R8I),B===r.SHORT&&(R=r.R16I),B===r.INT&&(R=r.R32I)),S===r.RG&&(B===r.FLOAT&&(R=r.RG32F),B===r.HALF_FLOAT&&(R=r.RG16F),B===r.UNSIGNED_BYTE&&(R=r.RG8)),S===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(R=r.RG8UI),B===r.UNSIGNED_SHORT&&(R=r.RG16UI),B===r.UNSIGNED_INT&&(R=r.RG32UI),B===r.BYTE&&(R=r.RG8I),B===r.SHORT&&(R=r.RG16I),B===r.INT&&(R=r.RG32I)),S===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(R=r.RGB8UI),B===r.UNSIGNED_SHORT&&(R=r.RGB16UI),B===r.UNSIGNED_INT&&(R=r.RGB32UI),B===r.BYTE&&(R=r.RGB8I),B===r.SHORT&&(R=r.RGB16I),B===r.INT&&(R=r.RGB32I)),S===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(R=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(R=r.RGBA16UI),B===r.UNSIGNED_INT&&(R=r.RGBA32UI),B===r.BYTE&&(R=r.RGBA8I),B===r.SHORT&&(R=r.RGBA16I),B===r.INT&&(R=r.RGBA32I)),S===r.RGB&&(B===r.UNSIGNED_INT_5_9_9_9_REV&&(R=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(R=r.R11F_G11F_B10F)),S===r.RGBA){let N=x?Rs:qe.getTransfer(D);B===r.FLOAT&&(R=r.RGBA32F),B===r.HALF_FLOAT&&(R=r.RGBA16F),B===r.UNSIGNED_BYTE&&(R=N===tt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(R=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(R=r.RGB5_A1)}return R!==r.R16F&&R!==r.R32F&&R!==r.RG16F&&R!==r.RG32F&&R!==r.RGBA16F&&R!==r.RGBA32F||e.get("EXT_color_buffer_float"),R}function M(E,S){let B;return E?S===null||S===Qi||S===Kr?B=r.DEPTH24_STENCIL8:S===Cn?B=r.DEPTH32F_STENCIL8:S===$r&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Qi||S===Kr?B=r.DEPTH_COMPONENT24:S===Cn?B=r.DEPTH_COMPONENT32F:S===$r&&(B=r.DEPTH_COMPONENT16),B}function w(E,S){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==zn&&E.minFilter!==Hn?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function A(E){let S=E.target;S.removeEventListener("dispose",A),(function(B){let D=n.get(B);if(D.__webglInit===void 0)return;let x=B.source,R=d.get(x);if(R){let N=R[D.__cacheKey];N.usedTimes--,N.usedTimes===0&&L(B),Object.keys(R).length===0&&d.delete(x)}n.remove(B)})(S),S.isVideoTexture&&h.delete(S)}function C(E){let S=E.target;S.removeEventListener("dispose",C),(function(B){let D=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(D.__webglFramebuffer[R]))for(let N=0;N<D.__webglFramebuffer[R].length;N++)r.deleteFramebuffer(D.__webglFramebuffer[R][N]);else r.deleteFramebuffer(D.__webglFramebuffer[R]);D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer[R])}else{if(Array.isArray(D.__webglFramebuffer))for(let R=0;R<D.__webglFramebuffer.length;R++)r.deleteFramebuffer(D.__webglFramebuffer[R]);else r.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&r.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let R=0;R<D.__webglColorRenderbuffer.length;R++)D.__webglColorRenderbuffer[R]&&r.deleteRenderbuffer(D.__webglColorRenderbuffer[R]);D.__webglDepthRenderbuffer&&r.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let x=B.textures;for(let R=0,N=x.length;R<N;R++){let P=n.get(x[R]);P.__webglTexture&&(r.deleteTexture(P.__webglTexture),a.memory.textures--),n.remove(x[R])}n.remove(B)})(S)}function L(E){let S=n.get(E);r.deleteTexture(S.__webglTexture);let B=E.source;delete d.get(B)[S.__cacheKey],a.memory.textures--}let I=0;function k(E,S){let B=n.get(E);if(E.isVideoTexture&&(function(D){let x=a.render.frame;h.get(D)!==x&&(h.set(D,x),D.update())})(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let D=E.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(D.complete!==!1)return void se(B,E,S);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+S)}let H={[po]:r.REPEAT,[Ir]:r.CLAMP_TO_EDGE,[mo]:r.MIRRORED_REPEAT},O={[zn]:r.NEAREST,[Jd]:r.NEAREST_MIPMAP_NEAREST,[ca]:r.NEAREST_MIPMAP_LINEAR,[Hn]:r.LINEAR,[dl]:r.LINEAR_MIPMAP_NEAREST,[Ji]:r.LINEAR_MIPMAP_LINEAR},K={[sp]:r.NEVER,[up]:r.ALWAYS,[ap]:r.LESS,[Ch]:r.LEQUAL,[op]:r.EQUAL,[hp]:r.GEQUAL,[lp]:r.GREATER,[cp]:r.NOTEQUAL};function V(E,S){if(S.type!==Cn||e.has("OES_texture_float_linear")!==!1||S.magFilter!==Hn&&S.magFilter!==dl&&S.magFilter!==ca&&S.magFilter!==Ji&&S.minFilter!==Hn&&S.minFilter!==dl&&S.minFilter!==ca&&S.minFilter!==Ji||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(E,r.TEXTURE_WRAP_S,H[S.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,H[S.wrapT]),E!==r.TEXTURE_3D&&E!==r.TEXTURE_2D_ARRAY||r.texParameteri(E,r.TEXTURE_WRAP_R,H[S.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,O[S.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,O[S.minFilter]),S.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===zn||S.minFilter!==ca&&S.minFilter!==Ji||S.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Y(E,S){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",A));let D=S.source,x=d.get(D);x===void 0&&(x={},d.set(D,x));let R=(function(N){let P=[];return P.push(N.wrapS),P.push(N.wrapT),P.push(N.wrapR||0),P.push(N.magFilter),P.push(N.minFilter),P.push(N.anisotropy),P.push(N.internalFormat),P.push(N.format),P.push(N.type),P.push(N.generateMipmaps),P.push(N.premultiplyAlpha),P.push(N.flipY),P.push(N.unpackAlignment),P.push(N.colorSpace),P.join()})(S);if(R!==E.__cacheKey){x[R]===void 0&&(x[R]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),x[R].usedTimes++;let N=x[E.__cacheKey];N!==void 0&&(x[E.__cacheKey].usedTimes--,N.usedTimes===0&&L(S)),E.__cacheKey=R,E.__webglTexture=x[R].texture}return B}function Z(E,S,B){return Math.floor(Math.floor(E/B)/S)}function se(E,S,B){let D=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(D=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(D=r.TEXTURE_3D);let x=Y(E,S),R=S.source;t.bindTexture(D,E.__webglTexture,r.TEXTURE0+B);let N=n.get(R);if(R.version!==N.__version||x===!0){t.activeTexture(r.TEXTURE0+B);let P=qe.getPrimaries(qe.workingColorSpace),X=S.colorSpace===er?null:qe.getPrimaries(S.colorSpace),z=S.colorSpace===er||P===X?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);let G=g(S.image,!1,i.maxTextureSize);G=Ae(S,G);let ie=s.convert(S.format,S.colorSpace),de=s.convert(S.type),re,fe=y(S.internalFormat,ie,de,S.colorSpace,S.isVideoTexture);V(D,S);let be=S.mipmaps,Te=S.isVideoTexture!==!0,Ge=N.__version===void 0||x===!0,$e=R.dataReady,Ye=w(S,G);if(S.isDepthTexture)fe=M(S.format===ua,S.type),Ge&&(Te?t.texStorage2D(r.TEXTURE_2D,1,fe,G.width,G.height):t.texImage2D(r.TEXTURE_2D,0,fe,G.width,G.height,0,ie,de,null));else if(S.isDataTexture)if(be.length>0){Te&&Ge&&t.texStorage2D(r.TEXTURE_2D,Ye,fe,be[0].width,be[0].height);for(let pe=0,Re=be.length;pe<Re;pe++)re=be[pe],Te?$e&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,re.width,re.height,ie,de,re.data):t.texImage2D(r.TEXTURE_2D,pe,fe,re.width,re.height,0,ie,de,re.data);S.generateMipmaps=!1}else Te?(Ge&&t.texStorage2D(r.TEXTURE_2D,Ye,fe,G.width,G.height),$e&&(function(pe,Re,He,kt){let ye=pe.updateRanges;if(ye.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,Re.width,Re.height,He,kt,Re.data);else{ye.sort((F,Rt)=>F.start-Rt.start);let Ke=0;for(let F=1;F<ye.length;F++){let Rt=ye[Ke],zt=ye[F],ut=Rt.start+Rt.count,Oi=Z(zt.start,Re.width,4),Bi=Z(Rt.start,Re.width,4);zt.start<=ut+1&&Oi===Bi&&Z(zt.start+zt.count-1,Re.width,4)===Oi?Rt.count=Math.max(Rt.count,zt.start+zt.count-Rt.start):(++Ke,ye[Ke]=zt)}ye.length=Ke+1;let Ve=r.getParameter(r.UNPACK_ROW_LENGTH),xn=r.getParameter(r.UNPACK_SKIP_PIXELS),Zn=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,Re.width);for(let F=0,Rt=ye.length;F<Rt;F++){let zt=ye[F],ut=Math.floor(zt.start/4),Oi=Math.ceil(zt.count/4),Bi=ut%Re.width,us=Math.floor(ut/Re.width),Pa=Oi;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Bi),r.pixelStorei(r.UNPACK_SKIP_ROWS,us),t.texSubImage2D(r.TEXTURE_2D,0,Bi,us,Pa,1,He,kt,Re.data)}pe.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ve),r.pixelStorei(r.UNPACK_SKIP_PIXELS,xn),r.pixelStorei(r.UNPACK_SKIP_ROWS,Zn)}})(S,G,ie,de)):t.texImage2D(r.TEXTURE_2D,0,fe,G.width,G.height,0,ie,de,G.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Te&&Ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ye,fe,be[0].width,be[0].height,G.depth);for(let pe=0,Re=be.length;pe<Re;pe++)if(re=be[pe],S.format!==In)if(ie!==null)if(Te){if($e)if(S.layerUpdates.size>0){let He=Uh(re.width,re.height,S.format,S.type);for(let kt of S.layerUpdates){let ye=re.data.subarray(kt*He/re.data.BYTES_PER_ELEMENT,(kt+1)*He/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,kt,re.width,re.height,1,ie,ye)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,re.width,re.height,G.depth,ie,re.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,fe,re.width,re.height,G.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?$e&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,re.width,re.height,G.depth,ie,de,re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,pe,fe,re.width,re.height,G.depth,0,ie,de,re.data)}else{Te&&Ge&&t.texStorage2D(r.TEXTURE_2D,Ye,fe,be[0].width,be[0].height);for(let pe=0,Re=be.length;pe<Re;pe++)re=be[pe],S.format!==In?ie!==null?Te?$e&&t.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,re.width,re.height,ie,re.data):t.compressedTexImage2D(r.TEXTURE_2D,pe,fe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?$e&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,re.width,re.height,ie,de,re.data):t.texImage2D(r.TEXTURE_2D,pe,fe,re.width,re.height,0,ie,de,re.data)}else if(S.isDataArrayTexture)if(Te){if(Ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ye,fe,G.width,G.height,G.depth),$e)if(S.layerUpdates.size>0){let pe=Uh(G.width,G.height,S.format,S.type);for(let Re of S.layerUpdates){let He=G.data.subarray(Re*pe/G.data.BYTES_PER_ELEMENT,(Re+1)*pe/G.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Re,G.width,G.height,1,ie,de,He)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,ie,de,G.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,fe,G.width,G.height,G.depth,0,ie,de,G.data);else if(S.isData3DTexture)Te?(Ge&&t.texStorage3D(r.TEXTURE_3D,Ye,fe,G.width,G.height,G.depth),$e&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,ie,de,G.data)):t.texImage3D(r.TEXTURE_3D,0,fe,G.width,G.height,G.depth,0,ie,de,G.data);else if(S.isFramebufferTexture){if(Ge)if(Te)t.texStorage2D(r.TEXTURE_2D,Ye,fe,G.width,G.height);else{let pe=G.width,Re=G.height;for(let He=0;He<Ye;He++)t.texImage2D(r.TEXTURE_2D,He,fe,pe,Re,0,ie,de,null),pe>>=1,Re>>=1}}else if(be.length>0){if(Te&&Ge){let pe=Ue(be[0]);t.texStorage2D(r.TEXTURE_2D,Ye,fe,pe.width,pe.height)}for(let pe=0,Re=be.length;pe<Re;pe++)re=be[pe],Te?$e&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,ie,de,re):t.texImage2D(r.TEXTURE_2D,pe,fe,ie,de,re);S.generateMipmaps=!1}else if(Te){if(Ge){let pe=Ue(G);t.texStorage2D(r.TEXTURE_2D,Ye,fe,pe.width,pe.height)}$e&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie,de,G)}else t.texImage2D(r.TEXTURE_2D,0,fe,ie,de,G);m(S)&&_(D),N.__version=R.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function te(E,S,B,D,x,R){let N=s.convert(B.format,B.colorSpace),P=s.convert(B.type),X=y(B.internalFormat,N,P,B.colorSpace),z=n.get(S),G=n.get(B);if(G.__renderTarget=S,!z.__hasExternalTextures){let ie=Math.max(1,S.width>>R),de=Math.max(1,S.height>>R);x===r.TEXTURE_3D||x===r.TEXTURE_2D_ARRAY?t.texImage3D(x,R,X,ie,de,S.depth,0,N,P,null):t.texImage2D(x,R,X,ie,de,0,N,P,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),oe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,D,x,G.__webglTexture,0,ce(S)):(x===r.TEXTURE_2D||x>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&x<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,D,x,G.__webglTexture,R),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(E,S,B){if(r.bindRenderbuffer(r.RENDERBUFFER,E),S.depthBuffer){let D=S.depthTexture,x=D&&D.isDepthTexture?D.type:null,R=M(S.stencilBuffer,x),N=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,P=ce(S);oe(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P,R,S.width,S.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,P,R,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,R,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,N,r.RENDERBUFFER,E)}else{let D=S.textures;for(let x=0;x<D.length;x++){let R=D[x],N=s.convert(R.format,R.colorSpace),P=s.convert(R.type),X=y(R.internalFormat,N,P,R.colorSpace),z=ce(S);B&&oe(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,z,X,S.width,S.height):oe(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,z,X,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,X,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,E),!S.depthTexture||!S.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let B=n.get(S.depthTexture);B.__renderTarget=S,B.__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);let D=B.__webglTexture,x=ce(S);if(S.depthTexture.format===ha)oe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,D,0,x):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,D,0);else{if(S.depthTexture.format!==ua)throw new Error("Unknown depthTexture format");oe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,D,0,x):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,D,0)}}function Me(E){let S=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){let D=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),D){let x=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,D.removeEventListener("dispose",x)};D.addEventListener("dispose",x),S.__depthDisposeCallback=x}S.__boundDepthTexture=D}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let D=E.texture.mipmaps;D&&D.length>0?Ee(S.__webglFramebuffer[0],E):Ee(S.__webglFramebuffer,E)}else if(B){S.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[D]),S.__webglDepthbuffer[D]===void 0)S.__webglDepthbuffer[D]=r.createRenderbuffer(),ve(S.__webglDepthbuffer[D],E,!1);else{let x=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,R=S.__webglDepthbuffer[D];r.bindRenderbuffer(r.RENDERBUFFER,R),r.framebufferRenderbuffer(r.FRAMEBUFFER,x,r.RENDERBUFFER,R)}}else{let D=E.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),ve(S.__webglDepthbuffer,E,!1);else{let x=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,R=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,R),r.framebufferRenderbuffer(r.FRAMEBUFFER,x,r.RENDERBUFFER,R)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let Ce=[],ae=[];function ce(E){return Math.min(i.maxSamples,E.samples)}function oe(E){let S=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ae(E,S){let B=E.colorSpace,D=E.format,x=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Xi&&B!==er&&(qe.getTransfer(B)===tt?D===In&&x===$n||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Ue(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=function(){let E=I;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),I+=1,E},this.resetTextureUnits=function(){I=0},this.setTexture2D=k,this.setTexture2DArray=function(E,S){let B=n.get(E);E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version?se(B,E,S):t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+S)},this.setTexture3D=function(E,S){let B=n.get(E);E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version?se(B,E,S):t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+S)},this.setTextureCube=function(E,S){let B=n.get(E);E.version>0&&B.__version!==E.version?(function(D,x,R){if(x.image.length!==6)return;let N=Y(D,x),P=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+R);let X=n.get(P);if(P.version!==X.__version||N===!0){t.activeTexture(r.TEXTURE0+R);let z=qe.getPrimaries(qe.workingColorSpace),G=x.colorSpace===er?null:qe.getPrimaries(x.colorSpace),ie=x.colorSpace===er||z===G?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let de=x.isCompressedTexture||x.image[0].isCompressedTexture,re=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let ye=0;ye<6;ye++)fe[ye]=de||re?re?x.image[ye].image:x.image[ye]:g(x.image[ye],!0,i.maxCubemapSize),fe[ye]=Ae(x,fe[ye]);let be=fe[0],Te=s.convert(x.format,x.colorSpace),Ge=s.convert(x.type),$e=y(x.internalFormat,Te,Ge,x.colorSpace),Ye=x.isVideoTexture!==!0,pe=X.__version===void 0||N===!0,Re=P.dataReady,He,kt=w(x,be);if(V(r.TEXTURE_CUBE_MAP,x),de){Ye&&pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,kt,$e,be.width,be.height);for(let ye=0;ye<6;ye++){He=fe[ye].mipmaps;for(let Ke=0;Ke<He.length;Ke++){let Ve=He[Ke];x.format!==In?Te!==null?Ye?Re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,0,0,Ve.width,Ve.height,Te,Ve.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,$e,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,0,0,Ve.width,Ve.height,Te,Ge,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,$e,Ve.width,Ve.height,0,Te,Ge,Ve.data)}}}else{if(He=x.mipmaps,Ye&&pe){He.length>0&&kt++;let ye=Ue(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,kt,$e,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(re){Ye?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,fe[ye].width,fe[ye].height,Te,Ge,fe[ye].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,$e,fe[ye].width,fe[ye].height,0,Te,Ge,fe[ye].data);for(let Ke=0;Ke<He.length;Ke++){let Ve=He[Ke].image[ye].image;Ye?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,0,0,Ve.width,Ve.height,Te,Ge,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,$e,Ve.width,Ve.height,0,Te,Ge,Ve.data)}}else{Ye?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Te,Ge,fe[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,$e,Te,Ge,fe[ye]);for(let Ke=0;Ke<He.length;Ke++){let Ve=He[Ke];Ye?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,0,0,Te,Ge,Ve.image[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,$e,Te,Ge,Ve.image[ye])}}}m(x)&&_(r.TEXTURE_CUBE_MAP),X.__version=P.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version})(B,E,S):t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+S)},this.rebindTextures=function(E,S,B){let D=n.get(E);S!==void 0&&te(D.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Me(E)},this.setupRenderTarget=function(E){let S=E.texture,B=n.get(E),D=n.get(S);E.addEventListener("dispose",C);let x=E.textures,R=E.isWebGLCubeRenderTarget===!0,N=x.length>1;if(N||(D.__webglTexture===void 0&&(D.__webglTexture=r.createTexture()),D.__version=S.version,a.memory.textures++),R){B.__webglFramebuffer=[];for(let P=0;P<6;P++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[P]=[];for(let X=0;X<S.mipmaps.length;X++)B.__webglFramebuffer[P][X]=r.createFramebuffer()}else B.__webglFramebuffer[P]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let P=0;P<S.mipmaps.length;P++)B.__webglFramebuffer[P]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(N)for(let P=0,X=x.length;P<X;P++){let z=n.get(x[P]);z.__webglTexture===void 0&&(z.__webglTexture=r.createTexture(),a.memory.textures++)}if(E.samples>0&&oe(E)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let P=0;P<x.length;P++){let X=x[P];B.__webglColorRenderbuffer[P]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[P]);let z=s.convert(X.format,X.colorSpace),G=s.convert(X.type),ie=y(X.internalFormat,z,G,X.colorSpace,E.isXRRenderTarget===!0),de=ce(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,de,ie,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+P,r.RENDERBUFFER,B.__webglColorRenderbuffer[P])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(R){t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture),V(r.TEXTURE_CUBE_MAP,S);for(let P=0;P<6;P++)if(S.mipmaps&&S.mipmaps.length>0)for(let X=0;X<S.mipmaps.length;X++)te(B.__webglFramebuffer[P][X],E,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+P,X);else te(B.__webglFramebuffer[P],E,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);m(S)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(N){for(let P=0,X=x.length;P<X;P++){let z=x[P],G=n.get(z),ie=r.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ie=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,G.__webglTexture),V(ie,z),te(B.__webglFramebuffer,E,z,r.COLOR_ATTACHMENT0+P,ie,0),m(z)&&_(ie)}t.unbindTexture()}else{let P=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(P=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(P,D.__webglTexture),V(P,S),S.mipmaps&&S.mipmaps.length>0)for(let X=0;X<S.mipmaps.length;X++)te(B.__webglFramebuffer[X],E,S,r.COLOR_ATTACHMENT0,P,X);else te(B.__webglFramebuffer,E,S,r.COLOR_ATTACHMENT0,P,0);m(S)&&_(P),t.unbindTexture()}E.depthBuffer&&Me(E)},this.updateRenderTargetMipmap=function(E){let S=E.textures;for(let B=0,D=S.length;B<D;B++){let x=S[B];if(m(x)){let R=v(E),N=n.get(x).__webglTexture;t.bindTexture(R,N),_(R),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(E){if(E.samples>0){if(oe(E)===!1){let S=E.textures,B=E.width,D=E.height,x=r.COLOR_BUFFER_BIT,R=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,N=n.get(E),P=S.length>1;if(P)for(let z=0;z<S.length;z++)t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,N.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,N.__webglMultisampledFramebuffer);let X=E.texture.mipmaps;X&&X.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,N.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,N.__webglFramebuffer);for(let z=0;z<S.length;z++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(x|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(x|=r.STENCIL_BUFFER_BIT)),P){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,N.__webglColorRenderbuffer[z]);let G=n.get(S[z]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,G,0)}r.blitFramebuffer(0,0,B,D,0,0,B,D,x,r.NEAREST),c===!0&&(Ce.length=0,ae.length=0,Ce.push(r.COLOR_ATTACHMENT0+z),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ce.push(R),ae.push(R),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ae)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),P)for(let z=0;z<S.length;z++){t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.RENDERBUFFER,N.__webglColorRenderbuffer[z]);let G=n.get(S[z]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,N.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.TEXTURE_2D,G,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,N.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let S=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=te,this.useMultisampledRTT=oe}function Wg(r,e){return{convert:function(t,n=er){let i,s=qe.getTransfer(n);if(t===$n)return r.UNSIGNED_BYTE;if(t===ml)return r.UNSIGNED_SHORT_4_4_4_4;if(t===fl)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Zc)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===Jc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(t===Yc)return r.BYTE;if(t===Kc)return r.SHORT;if(t===$r)return r.UNSIGNED_SHORT;if(t===pl)return r.INT;if(t===Qi)return r.UNSIGNED_INT;if(t===Cn)return r.FLOAT;if(t===Yr)return r.HALF_FLOAT;if(t===Qd)return r.ALPHA;if(t===ep)return r.RGB;if(t===In)return r.RGBA;if(t===ha)return r.DEPTH_COMPONENT;if(t===ua)return r.DEPTH_STENCIL;if(t===gl)return r.RED;if(t===_l)return r.RED_INTEGER;if(t===tp)return r.RG;if(t===Qc)return r.RG_INTEGER;if(t===eh)return r.RGBA_INTEGER;if(t===vl||t===yl||t===xl||t===Ml)if(s===tt){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===vl)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===yl)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===xl)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Ml)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===vl)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===yl)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===xl)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Ml)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===th||t===nh||t===ih||t===rh){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===th)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===nh)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===ih)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===rh)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===sh||t===ah||t===oh){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===sh||t===ah)return s===tt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===oh)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===lh||t===ch||t===hh||t===uh||t===dh||t===ph||t===mh||t===fh||t===gh||t===_h||t===vh||t===yh||t===xh||t===Mh){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===lh)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===ch)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===hh)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===uh)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===dh)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===ph)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===mh)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===fh)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===gh)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===_h)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===vh)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===yh)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===xh)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Mh)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===bh||t===Sh||t===Eh){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===bh)return s===tt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Sh)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Eh)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Th||t===wh||t===Ah||t===Rh){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===Th)return i.COMPRESSED_RED_RGTC1_EXT;if(t===wh)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Ah)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Rh)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Kr?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var Yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Hs(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rn({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kh=class extends Gn{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,f=null,g=typeof XRWebGLBinding<"u",m=new Yh,_={},v=t.getContextAttributes(),y=null,M=null,w=[],A=[],C=new Q,L=null,I=new Nt;I.viewport=new Ze;let k=new Nt;k.viewport=new Ze;let H=[I,k],O=new el,K=null,V=null;function Y(ae){let ce=A.indexOf(ae.inputSource);if(ce===-1)return;let oe=w[ce];oe!==void 0&&(oe.update(ae.inputSource,ae.frame,l||a),oe.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Z(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",se);for(let ae=0;ae<w.length;ae++){let ce=A[ae];ce!==null&&(A[ae]=null,w[ae].disconnect(ce))}K=null,V=null,m.reset();for(let ae in _)delete _[ae];e.setRenderTarget(y),p=null,d=null,u=null,i=null,M=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}function se(ae){for(let ce=0;ce<ae.removed.length;ce++){let oe=ae.removed[ce],Ae=A.indexOf(oe);Ae>=0&&(A[Ae]=null,w[Ae].disconnect(oe))}for(let ce=0;ce<ae.added.length;ce++){let oe=ae.added[ce],Ae=A.indexOf(oe);if(Ae===-1){for(let E=0;E<w.length;E++){if(E>=A.length){A.push(oe),Ae=E;break}if(A[E]===null){A[E]=oe,Ae=E;break}}if(Ae===-1)break}let Ue=w[Ae];Ue&&Ue.connect(oe)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ce=w[ae];return ce===void 0&&(ce=new Ur,w[ae]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ae){let ce=w[ae];return ce===void 0&&(ce=new Ur,w[ae]=ce),ce.getGripSpace()},this.getHand=function(ae){let ce=w[ae];return ce===void 0&&(ce=new Ur,w[ae]=ce),ce.getHandSpace()},this.setFramebufferScaleFactor=function(ae){s=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ae){l=ae},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(ae){if(i=ae,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",se),v.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,oe=null,Ae=null;v.depth&&(Ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=v.stencil?ua:ha,oe=v.stencil?Kr:Qi);let Ue={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ue),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Vn(d.textureWidth,d.textureHeight,{format:In,type:$n,depthTexture:new zs(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Vn(p.framebufferWidth,p.framebufferHeight,{format:In,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ce.setContext(i),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};let te=new b,ve=new b;function Ee(ae,ce){ce===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ce.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(i===null)return;let ce=ae.near,oe=ae.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),O.near=k.near=I.near=ce,O.far=k.far=I.far=oe,K===O.near&&V===O.far||(i.updateRenderState({depthNear:O.near,depthFar:O.far}),K=O.near,V=O.far),O.layers.mask=6|ae.layers.mask,I.layers.mask=3&O.layers.mask,k.layers.mask=5&O.layers.mask;let Ae=ae.parent,Ue=O.cameras;Ee(O,Ae);for(let E=0;E<Ue.length;E++)Ee(Ue[E],Ae);Ue.length===2?(function(E,S,B){te.setFromMatrixPosition(S.matrixWorld),ve.setFromMatrixPosition(B.matrixWorld);let D=te.distanceTo(ve),x=S.projectionMatrix.elements,R=B.projectionMatrix.elements,N=x[14]/(x[10]-1),P=x[14]/(x[10]+1),X=(x[9]+1)/x[5],z=(x[9]-1)/x[5],G=(x[8]-1)/x[0],ie=(R[8]+1)/R[0],de=N*G,re=N*ie,fe=D/(-G+ie),be=fe*-G;if(S.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(be),E.translateZ(fe),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert(),x[10]===-1)E.projectionMatrix.copy(S.projectionMatrix),E.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{let Te=N+fe,Ge=P+fe,$e=de-be,Ye=re+(D-be),pe=X*P/Ge*Te,Re=z*P/Ge*Te;E.projectionMatrix.makePerspective($e,Ye,pe,Re,Te,Ge),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}})(O,I,k):O.projectionMatrix.copy(I.projectionMatrix),(function(E,S,B){B===null?E.matrix.copy(S.matrixWorld):(E.matrix.copy(B.matrixWorld),E.matrix.invert(),E.matrix.multiply(S.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(S.projectionMatrix),E.projectionMatrixInverse.copy(S.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=2*Pr*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)})(ae,O,Ae)},this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(ae){c=ae,d!==null&&(d.fixedFoveation=ae),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ae)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(ae){return _[ae]};let Me=null,Ce=new Wp;Ce.setAnimationLoop(function(ae,ce){if(h=ce.getViewerPose(l||a),f=ce,h!==null){let oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Ae=!1;oe.length!==O.cameras.length&&(O.cameras.length=0,Ae=!0);for(let E=0;E<oe.length;E++){let S=oe[E],B=null;if(p!==null)B=p.getViewport(S);else{let x=u.getViewSubImage(d,S);B=x.viewport,E===0&&(e.setRenderTargetTextures(M,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(M))}let D=H[E];D===void 0&&(D=new Nt,D.layers.enable(E),D.viewport=new Ze,H[E]=D),D.matrix.fromArray(S.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(S.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(B.x,B.y,B.width,B.height),E===0&&(O.matrix.copy(D.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ae===!0&&O.cameras.push(D)}let Ue=i.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let E=u.getDepthInformation(oe[0]);E&&E.isValid&&E.texture&&m.init(E,i.renderState)}if(Ue&&Ue.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let E=0;E<oe.length;E++){let S=oe[E].camera;if(S){let B=_[S];B||(B=new Hs,_[S]=B);let D=u.getCameraImage(S);B.sourceTexture=D}}}}for(let oe=0;oe<w.length;oe++){let Ae=A[oe],Ue=w[oe];Ae!==null&&Ue!==void 0&&Ue.update(Ae,ce,l||a)}Me&&Me(ae,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),f=null}),this.setAnimationLoop=function(ae){Me=ae},this.dispose=function(){}}},ir=new Kt,jg=new Ie;function Xg(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===ln&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===ln&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(i.envMap.value=o,ir.copy(c),ir.x*=-1,ir.y*=-1,ir.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),i.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler(ir)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Dh(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(i,s,c)):s.isMeshMatcapMaterial?(n(i,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function qg(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,d,p,f){let g=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let _=f[m];if(typeof g=="number"||typeof g=="boolean"){if(_!==g)return f[m]=g,!0}else if(_.equals(g)===!1)return _.copy(g),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(m){let _=m.uniforms,v=0,y=16;for(let w=0,A=_.length;w<A;w++){let C=Array.isArray(_[w])?_[w]:[_[w]];for(let L=0,I=C.length;L<I;L++){let k=C[L],H=Array.isArray(k.value)?k.value:[k.value];for(let O=0,K=H.length;O<K;O++){let V=l(H[O]),Y=v%y,Z=Y%V.boundary,se=Y+Z;v+=Z,se!==0&&y-se<V.storage&&(v+=y-se),k.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=V.storage}}}let M=v%y;M>0&&(v+=y-M),m.__size=v,m.__cache={}})(u),p=(function(m){let _=(function(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=_;let v=r.createBuffer(),y=m.__size,M=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,y,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,v),v})(u),i[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let g=e.render.frame;s[u.id]!==g&&((function(m){let _=i[m.id],v=m.uniforms,y=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let M=0,w=v.length;M<w;M++){let A=Array.isArray(v[M])?v[M]:[v[M]];for(let C=0,L=A.length;C<L;C++){let I=A[C];if(c(I,M,C,y)===!0){let k=I.__offset,H=Array.isArray(I.value)?I.value:[I.value],O=0;for(let K=0;K<H.length;K++){let V=H[K],Y=l(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,k+O,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,O),O+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=g)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var wl=class{constructor(e={}){let{canvas:t=dp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),g=new Int32Array(4),m=null,_=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,w=!1;this._outputColorSpace=sn;let A=0,C=0,L=null,I=-1,k=null,H=new Ze,O=new Ze,K=null,V=new xe(0),Y=0,Z=t.width,se=t.height,te=1,ve=null,Ee=null,Me=new Ze(0,0,Z,se),Ce=new Ze(0,0,Z,se),ae=!1,ce=new wi,oe=!1,Ae=!1,Ue=new Ie,E=new b,S=new Ze,B={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},D=!1;function x(){return L===null?te:1}let R,N,P,X,z,G,ie,de,re,fe,be,Te,Ge,$e,Ye,pe,Re,He,kt,ye,Ke,Ve,xn,Zn,F=n;function Rt(T,W){return t.getContext(T,W)}try{let T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Oi,!1),t.addEventListener("webglcontextrestored",Bi,!1),t.addEventListener("webglcontextcreationerror",us,!1),F===null){let W="webgl2";if(F=Rt(W,T),F===null)throw Rt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}function zt(){R=new Cf(F),R.init(),Ve=new Wg(F,R),N=new Ef(F,R,e,Ve),P=new Gg(F,R),N.reversedDepthBuffer&&d&&P.buffers.depth.setReversed(!0),X=new Lf(F),z=new Lg,G=new Vg(F,R,P,z,N,Ve,X),ie=new wf(M),de=new Rf(M),re=new yf(F),xn=new bf(F,re),fe=new If(F,re,X,xn),be=new Ff(F,fe,re,X),kt=new Df(F,N,G),pe=new Tf(z),Te=new Pg(M,ie,de,R,N,xn,pe),Ge=new Xg(M,z),$e=new Fg,Ye=new kg(R),He=new Mf(M,ie,de,P,be,p,c),Re=new zg(M,be,N),Zn=new qg(F,X,N,P),ye=new Sf(F,R,X),Ke=new Pf(F,R,X),X.programs=Te.programs,M.capabilities=N,M.extensions=R,M.properties=z,M.renderLists=$e,M.shadowMap=Re,M.state=P,M.info=X}zt();let ut=new Kh(M,F);function Oi(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Bi(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let T=X.autoReset,W=Re.enabled,q=Re.autoUpdate,ee=Re.needsUpdate,j=Re.type;zt(),X.autoReset=T,Re.enabled=W,Re.autoUpdate=q,Re.needsUpdate=ee,Re.type=j}function us(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pa(T){let W=T.target;W.removeEventListener("dispose",Pa),(function(q){(function(ee){let j=z.get(ee).programs;j!==void 0&&(j.forEach(function(ne){Te.releaseProgram(ne)}),ee.isShaderMaterial&&Te.releaseShaderCache(ee))})(q),z.remove(q)})(W)}function $l(T,W,q){T.transparent===!0&&T.side===mt&&T.forceSinglePass===!1?(T.side=ln,T.needsUpdate=!0,Da(T,W,q),T.side=jr,T.needsUpdate=!0,Da(T,W,q),T.side=mt):Da(T,W,q)}this.xr=ut,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=R.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=R.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize(Z,se,!1))},this.getSize=function(T){return T.set(Z,se)},this.setSize=function(T,W,q=!0){ut.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(Z=T,se=W,t.width=Math.floor(T*te),t.height=Math.floor(W*te),q===!0&&(t.style.width=T+"px",t.style.height=W+"px"),this.setViewport(0,0,T,W))},this.getDrawingBufferSize=function(T){return T.set(Z*te,se*te).floor()},this.setDrawingBufferSize=function(T,W,q){Z=T,se=W,te=q,t.width=Math.floor(T*q),t.height=Math.floor(W*q),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(H)},this.getViewport=function(T){return T.copy(Me)},this.setViewport=function(T,W,q,ee){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,W,q,ee),P.viewport(H.copy(Me).multiplyScalar(te).round())},this.getScissor=function(T){return T.copy(Ce)},this.setScissor=function(T,W,q,ee){T.isVector4?Ce.set(T.x,T.y,T.z,T.w):Ce.set(T,W,q,ee),P.scissor(O.copy(Ce).multiplyScalar(te).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(T){P.setScissorTest(ae=T)},this.setOpaqueSort=function(T){ve=T},this.setTransparentSort=function(T){Ee=T},this.getClearColor=function(T){return T.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(T=!0,W=!0,q=!0){let ee=0;if(T){let j=!1;if(L!==null){let ne=L.texture.format;j=ne===eh||ne===Qc||ne===_l}if(j){let ne=L.texture.type,me=ne===$n||ne===Qi||ne===$r||ne===Kr||ne===ml||ne===fl,ge=He.getClearColor(),Se=He.getClearAlpha(),Pe=ge.r,De=ge.g,Le=ge.b;me?(f[0]=Pe,f[1]=De,f[2]=Le,f[3]=Se,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=Pe,g[1]=De,g[2]=Le,g[3]=Se,F.clearBufferiv(F.COLOR,0,g))}else ee|=F.COLOR_BUFFER_BIT}W&&(ee|=F.DEPTH_BUFFER_BIT),q&&(ee|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oi,!1),t.removeEventListener("webglcontextrestored",Bi,!1),t.removeEventListener("webglcontextcreationerror",us,!1),He.dispose(),$e.dispose(),Ye.dispose(),z.dispose(),ie.dispose(),de.dispose(),be.dispose(),xn.dispose(),Zn.dispose(),Te.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Cu),ut.removeEventListener("sessionend",Iu),ki.stop()},this.renderBufferDirect=function(T,W,q,ee,j,ne){W===null&&(W=B);let me=j.isMesh&&j.matrixWorld.determinant()<0,ge=(function(We,dt,Ft,ze,Fe){dt.isScene!==!0&&(dt=B),G.resetTextureUnits();let Mn=dt.fog,Zl=ze.isMeshStandardMaterial?dt.environment:null,Fa=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Xi,fi=(ze.isMeshStandardMaterial?de:ie).get(ze.envMap||Zl),Dn=ze.vertexColors===!0&&!!Ft.attributes.color&&Ft.attributes.color.itemSize===4,hr=!!Ft.attributes.tangent&&(!!ze.normalMap||ze.anisotropy>0),Jn=!!Ft.morphAttributes.position,Jl=!!Ft.morphAttributes.normal,ur=!!Ft.morphAttributes.color,Uu=li;ze.toneMapped&&(L!==null&&L.isXRRenderTarget!==!0||(Uu=M.toneMapping));let Ou=Ft.morphAttributes.position||Ft.morphAttributes.normal||Ft.morphAttributes.color,Dm=Ou!==void 0?Ou.length:0,je=z.get(ze),Fm=_.state.lights;if(oe===!0&&(Ae===!0||We!==k)){let un=We===k&&ze.id===I;pe.setState(ze,We,un)}let bn=!1;ze.version===je.__version?je.needsLights&&je.lightsStateVersion!==Fm.state.version||je.outputColorSpace!==Fa||Fe.isBatchedMesh&&je.batching===!1?bn=!0:Fe.isBatchedMesh||je.batching!==!0?Fe.isBatchedMesh&&je.batchingColor===!0&&Fe.colorTexture===null||Fe.isBatchedMesh&&je.batchingColor===!1&&Fe.colorTexture!==null||Fe.isInstancedMesh&&je.instancing===!1?bn=!0:Fe.isInstancedMesh||je.instancing!==!0?Fe.isSkinnedMesh&&je.skinning===!1?bn=!0:Fe.isSkinnedMesh||je.skinning!==!0?Fe.isInstancedMesh&&je.instancingColor===!0&&Fe.instanceColor===null||Fe.isInstancedMesh&&je.instancingColor===!1&&Fe.instanceColor!==null||Fe.isInstancedMesh&&je.instancingMorph===!0&&Fe.morphTexture===null||Fe.isInstancedMesh&&je.instancingMorph===!1&&Fe.morphTexture!==null||je.envMap!==fi||ze.fog===!0&&je.fog!==Mn?bn=!0:je.numClippingPlanes===void 0||je.numClippingPlanes===pe.numPlanes&&je.numIntersection===pe.numIntersection?(je.vertexAlphas!==Dn||je.vertexTangents!==hr||je.morphTargets!==Jn||je.morphNormals!==Jl||je.morphColors!==ur||je.toneMapping!==Uu||je.morphTargetsCount!==Dm)&&(bn=!0):bn=!0:bn=!0:bn=!0:bn=!0:(bn=!0,je.__version=ze.version);let zi=je.currentProgram;bn===!0&&(zi=Da(ze,dt,Fe));let Bu=!1,ds=!1,Ql=!1,xt=zi.getUniforms(),gi=je.uniforms;if(P.useProgram(zi.program)&&(Bu=!0,ds=!0,Ql=!0),ze.id!==I&&(I=ze.id,ds=!0),Bu||k!==We){P.buffers.depth.getReversed()&&We.reversedDepth!==!0&&(We._reversedDepth=!0,We.updateProjectionMatrix()),xt.setValue(F,"projectionMatrix",We.projectionMatrix),xt.setValue(F,"viewMatrix",We.matrixWorldInverse);let un=xt.map.cameraPosition;un!==void 0&&un.setValue(F,E.setFromMatrixPosition(We.matrixWorld)),N.logarithmicDepthBuffer&&xt.setValue(F,"logDepthBufFC",2/(Math.log(We.far+1)/Math.LN2)),(ze.isMeshPhongMaterial||ze.isMeshToonMaterial||ze.isMeshLambertMaterial||ze.isMeshBasicMaterial||ze.isMeshStandardMaterial||ze.isShaderMaterial)&&xt.setValue(F,"isOrthographic",We.isOrthographicCamera===!0),k!==We&&(k=We,ds=!0,Ql=!0)}if(Fe.isSkinnedMesh){xt.setOptional(F,Fe,"bindMatrix"),xt.setOptional(F,Fe,"bindMatrixInverse");let un=Fe.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),xt.setValue(F,"boneTexture",un.boneTexture,G))}Fe.isBatchedMesh&&(xt.setOptional(F,Fe,"batchingTexture"),xt.setValue(F,"batchingTexture",Fe._matricesTexture,G),xt.setOptional(F,Fe,"batchingIdTexture"),xt.setValue(F,"batchingIdTexture",Fe._indirectTexture,G),xt.setOptional(F,Fe,"batchingColorTexture"),Fe._colorsTexture!==null&&xt.setValue(F,"batchingColorTexture",Fe._colorsTexture,G));let ec=Ft.morphAttributes;ec.position===void 0&&ec.normal===void 0&&ec.color===void 0||kt.update(Fe,Ft,zi),(ds||je.receiveShadow!==Fe.receiveShadow)&&(je.receiveShadow=Fe.receiveShadow,xt.setValue(F,"receiveShadow",Fe.receiveShadow)),ze.isMeshGouraudMaterial&&ze.envMap!==null&&(gi.envMap.value=fi,gi.flipEnvMap.value=fi.isCubeTexture&&fi.isRenderTargetTexture===!1?-1:1),ze.isMeshStandardMaterial&&ze.envMap===null&&dt.environment!==null&&(gi.envMapIntensity.value=dt.environmentIntensity),ds&&(xt.setValue(F,"toneMappingExposure",M.toneMappingExposure),je.needsLights&&(Sn=Ql,(Fn=gi).ambientLightColor.needsUpdate=Sn,Fn.lightProbe.needsUpdate=Sn,Fn.directionalLights.needsUpdate=Sn,Fn.directionalLightShadows.needsUpdate=Sn,Fn.pointLights.needsUpdate=Sn,Fn.pointLightShadows.needsUpdate=Sn,Fn.spotLights.needsUpdate=Sn,Fn.spotLightShadows.needsUpdate=Sn,Fn.rectAreaLights.needsUpdate=Sn,Fn.hemisphereLights.needsUpdate=Sn),Mn&&ze.fog===!0&&Ge.refreshFogUniforms(gi,Mn),Ge.refreshMaterialUniforms(gi,ze,te,se,_.state.transmissionRenderTarget[We.id]),Jr.upload(F,Fu(je),gi,G));var Fn,Sn;if(ze.isShaderMaterial&&ze.uniformsNeedUpdate===!0&&(Jr.upload(F,Fu(je),gi,G),ze.uniformsNeedUpdate=!1),ze.isSpriteMaterial&&xt.setValue(F,"center",Fe.center),xt.setValue(F,"modelViewMatrix",Fe.modelViewMatrix),xt.setValue(F,"normalMatrix",Fe.normalMatrix),xt.setValue(F,"modelMatrix",Fe.matrixWorld),ze.isShaderMaterial||ze.isRawShaderMaterial){let un=ze.uniformsGroups;for(let tc=0,Nm=un.length;tc<Nm;tc++){let ku=un[tc];Zn.update(ku,zi),Zn.bind(ku,zi)}}return zi})(T,W,q,ee,j);P.setMaterial(ee,me);let Se=q.index,Pe=1;if(ee.wireframe===!0){if(Se=fe.getWireframeAttribute(q),Se===void 0)return;Pe=2}let De=q.drawRange,Le=q.attributes.position,ke=De.start*Pe,ct=(De.start+De.count)*Pe;ne!==null&&(ke=Math.max(ke,ne.start*Pe),ct=Math.min(ct,(ne.start+ne.count)*Pe)),Se!==null?(ke=Math.max(ke,0),ct=Math.min(ct,Se.count)):Le!=null&&(ke=Math.max(ke,0),ct=Math.min(ct,Le.count));let ft=ct-ke;if(ft<0||ft===1/0)return;let yt;xn.setup(j,ee,ge,q,Se);let ht=ye;if(Se!==null&&(yt=re.get(Se),ht=Ke,ht.setIndex(yt)),j.isMesh)ee.wireframe===!0?(P.setLineWidth(ee.wireframeLinewidth*x()),ht.setMode(F.LINES)):ht.setMode(F.TRIANGLES);else if(j.isLine){let We=ee.linewidth;We===void 0&&(We=1),P.setLineWidth(We*x()),j.isLineSegments?ht.setMode(F.LINES):j.isLineLoop?ht.setMode(F.LINE_LOOP):ht.setMode(F.LINE_STRIP)}else j.isPoints?ht.setMode(F.POINTS):j.isSprite&&ht.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(R.get("WEBGL_multi_draw"))ht.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let We=j._multiDrawStarts,dt=j._multiDrawCounts,Ft=j._multiDrawCount,ze=Se?re.get(Se).bytesPerElement:1,Fe=z.get(ee).currentProgram.getUniforms();for(let Mn=0;Mn<Ft;Mn++)Fe.setValue(F,"_gl_DrawID",Mn),ht.render(We[Mn]/ze,dt[Mn])}else if(j.isInstancedMesh)ht.renderInstances(ke,ft,j.count);else if(q.isInstancedBufferGeometry){let We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,dt=Math.min(q.instanceCount,We);ht.renderInstances(ke,ft,dt)}else ht.render(ke,ft)},this.compile=function(T,W,q=null){q===null&&(q=T),_=Ye.get(q),_.init(W),y.push(_),q.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),T!==q&&T.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();let ee=new Set;return T.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let ne=j.material;if(ne)if(Array.isArray(ne))for(let me=0;me<ne.length;me++){let ge=ne[me];$l(ge,q,j),ee.add(ge)}else $l(ne,q,j),ee.add(ne)}),_=y.pop(),ee},this.compileAsync=function(T,W,q=null){let ee=this.compile(T,W,q);return new Promise(j=>{function ne(){ee.forEach(function(me){z.get(me).currentProgram.isReady()&&ee.delete(me)}),ee.size!==0?setTimeout(ne,10):j(T)}R.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Yl=null;function Cu(){ki.stop()}function Iu(){ki.start()}let ki=new Wp;function Kl(T,W,q,ee){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ce.intersectsSprite(T)){ee&&S.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ue);let ne=be.update(T),me=T.material;me.visible&&m.push(T,ne,me,q,S.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ce.intersectsObject(T))){let ne=be.update(T),me=T.material;if(ee&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),S.copy(T.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),S.copy(ne.boundingSphere.center)),S.applyMatrix4(T.matrixWorld).applyMatrix4(Ue)),Array.isArray(me)){let ge=ne.groups;for(let Se=0,Pe=ge.length;Se<Pe;Se++){let De=ge[Se],Le=me[De.materialIndex];Le&&Le.visible&&m.push(T,ne,Le,q,S.z,De)}}else me.visible&&m.push(T,ne,me,q,S.z,null)}}let j=T.children;for(let ne=0,me=j.length;ne<me;ne++)Kl(j[ne],W,q,ee)}function Pu(T,W,q,ee){let j=T.opaque,ne=T.transmissive,me=T.transparent;_.setupLightsView(q),oe===!0&&pe.setGlobalState(M.clippingPlanes,q),ee&&P.viewport(H.copy(ee)),j.length>0&&La(j,W,q),ne.length>0&&La(ne,W,q),me.length>0&&La(me,W,q),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Lu(T,W,q,ee){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ee.id]===void 0&&(_.state.transmissionRenderTarget[ee.id]=new Vn(1,1,{generateMipmaps:!0,type:R.has("EXT_color_buffer_half_float")||R.has("EXT_color_buffer_float")?Yr:$n,minFilter:Ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));let j=_.state.transmissionRenderTarget[ee.id],ne=ee.viewport||H;j.setSize(ne.z*M.transmissionResolutionScale,ne.w*M.transmissionResolutionScale);let me=M.getRenderTarget(),ge=M.getActiveCubeFace(),Se=M.getActiveMipmapLevel();M.setRenderTarget(j),M.getClearColor(V),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),D&&He.render(q);let Pe=M.toneMapping;M.toneMapping=li;let De=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),_.setupLightsView(ee),oe===!0&&pe.setGlobalState(M.clippingPlanes,ee),La(T,q,ee),G.updateMultisampleRenderTarget(j),G.updateRenderTargetMipmap(j),R.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ke=0,ct=W.length;ke<ct;ke++){let ft=W[ke],yt=ft.object,ht=ft.geometry,We=ft.material,dt=ft.group;if(We.side===mt&&yt.layers.test(ee.layers)){let Ft=We.side;We.side=ln,We.needsUpdate=!0,Du(yt,q,ee,ht,We,dt),We.side=Ft,We.needsUpdate=!0,Le=!0}}Le===!0&&(G.updateMultisampleRenderTarget(j),G.updateRenderTargetMipmap(j))}M.setRenderTarget(me,ge,Se),M.setClearColor(V,Y),De!==void 0&&(ee.viewport=De),M.toneMapping=Pe}function La(T,W,q){let ee=W.isScene===!0?W.overrideMaterial:null;for(let j=0,ne=T.length;j<ne;j++){let me=T[j],ge=me.object,Se=me.geometry,Pe=me.group,De=me.material;De.allowOverride===!0&&ee!==null&&(De=ee),ge.layers.test(q.layers)&&Du(ge,W,q,Se,De,Pe)}}function Du(T,W,q,ee,j,ne){T.onBeforeRender(M,W,q,ee,j,ne),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(M,W,q,ee,T,ne),j.transparent===!0&&j.side===mt&&j.forceSinglePass===!1?(j.side=ln,j.needsUpdate=!0,M.renderBufferDirect(q,W,ee,j,T,ne),j.side=jr,j.needsUpdate=!0,M.renderBufferDirect(q,W,ee,j,T,ne),j.side=mt):M.renderBufferDirect(q,W,ee,j,T,ne),T.onAfterRender(M,W,q,ee,j,ne)}function Da(T,W,q){W.isScene!==!0&&(W=B);let ee=z.get(T),j=_.state.lights,ne=_.state.shadowsArray,me=j.state.version,ge=Te.getParameters(T,j.state,ne,W,q),Se=Te.getProgramCacheKey(ge),Pe=ee.programs;ee.environment=T.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(T.isMeshStandardMaterial?de:ie).get(T.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",Pa),Pe=new Map,ee.programs=Pe);let De=Pe.get(Se);if(De!==void 0){if(ee.currentProgram===De&&ee.lightsStateVersion===me)return Nu(T,ge),De}else ge.uniforms=Te.getUniforms(T),T.onBeforeCompile(ge,M),De=Te.acquireProgram(ge,Se),Pe.set(Se,De),ee.uniforms=ge.uniforms;let Le=ee.uniforms;return(T.isShaderMaterial||T.isRawShaderMaterial)&&T.clipping!==!0||(Le.clippingPlanes=pe.uniform),Nu(T,ge),ee.needsLights=(function(ke){return ke.isMeshLambertMaterial||ke.isMeshToonMaterial||ke.isMeshPhongMaterial||ke.isMeshStandardMaterial||ke.isShadowMaterial||ke.isShaderMaterial&&ke.lights===!0})(T),ee.lightsStateVersion=me,ee.needsLights&&(Le.ambientLightColor.value=j.state.ambient,Le.lightProbe.value=j.state.probe,Le.directionalLights.value=j.state.directional,Le.directionalLightShadows.value=j.state.directionalShadow,Le.spotLights.value=j.state.spot,Le.spotLightShadows.value=j.state.spotShadow,Le.rectAreaLights.value=j.state.rectArea,Le.ltc_1.value=j.state.rectAreaLTC1,Le.ltc_2.value=j.state.rectAreaLTC2,Le.pointLights.value=j.state.point,Le.pointLightShadows.value=j.state.pointShadow,Le.hemisphereLights.value=j.state.hemi,Le.directionalShadowMap.value=j.state.directionalShadowMap,Le.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Le.spotShadowMap.value=j.state.spotShadowMap,Le.spotLightMatrix.value=j.state.spotLightMatrix,Le.spotLightMap.value=j.state.spotLightMap,Le.pointShadowMap.value=j.state.pointShadowMap,Le.pointShadowMatrix.value=j.state.pointShadowMatrix),ee.currentProgram=De,ee.uniformsList=null,De}function Fu(T){if(T.uniformsList===null){let W=T.currentProgram.getUniforms();T.uniformsList=Jr.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function Nu(T,W){let q=z.get(T);q.outputColorSpace=W.outputColorSpace,q.batching=W.batching,q.batchingColor=W.batchingColor,q.instancing=W.instancing,q.instancingColor=W.instancingColor,q.instancingMorph=W.instancingMorph,q.skinning=W.skinning,q.morphTargets=W.morphTargets,q.morphNormals=W.morphNormals,q.morphColors=W.morphColors,q.morphTargetsCount=W.morphTargetsCount,q.numClippingPlanes=W.numClippingPlanes,q.numIntersection=W.numClipIntersection,q.vertexAlphas=W.vertexAlphas,q.vertexTangents=W.vertexTangents,q.toneMapping=W.toneMapping}ki.setAnimationLoop(function(T){Yl&&Yl(T)}),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(T){Yl=T,ut.setAnimationLoop(T),T===null?ki.stop():ki.start()},ut.addEventListener("sessionstart",Cu),ut.addEventListener("sessionend",Iu),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(W),W=ut.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,W,L),_=Ye.get(T,y.length),_.init(W),y.push(_),Ue.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ce.setFromProjectionMatrix(Ue,si,W.reversedDepth),Ae=this.localClippingEnabled,oe=pe.init(this.clippingPlanes,Ae),m=$e.get(T,v.length),m.init(),v.push(m),ut.enabled===!0&&ut.isPresenting===!0){let ne=M.xr.getDepthSensingMesh();ne!==null&&Kl(ne,W,-1/0,M.sortObjects)}Kl(T,W,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ve,Ee),D=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,D&&He.addToRenderList(m,T),this.info.render.frame++,oe===!0&&pe.beginShadows();let q=_.state.shadowsArray;Re.render(q,T,W),oe===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let ee=m.opaque,j=m.transmissive;if(_.setupLights(),W.isArrayCamera){let ne=W.cameras;if(j.length>0)for(let me=0,ge=ne.length;me<ge;me++)Lu(ee,j,T,ne[me]);D&&He.render(T);for(let me=0,ge=ne.length;me<ge;me++){let Se=ne[me];Pu(m,T,Se,Se.viewport)}}else j.length>0&&Lu(ee,j,T,W),D&&He.render(T),Pu(m,T,W);L!==null&&C===0&&(G.updateMultisampleRenderTarget(L),G.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(M,T,W),xn.resetDefaultState(),I=-1,k=null,y.pop(),y.length>0?(_=y[y.length-1],oe===!0&&pe.setGlobalState(M.clippingPlanes,_.state.camera)):_=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,W,q){let ee=z.get(T);ee.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),z.get(T.texture).__webglTexture=W,z.get(T.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:q,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,W){let q=z.get(T);q.__webglFramebuffer=W,q.__useDefaultFramebuffer=W===void 0};let Im=F.createFramebuffer();this.setRenderTarget=function(T,W=0,q=0){L=T,A=W,C=q;let ee=!0,j=null,ne=!1,me=!1;if(T){let ge=z.get(T);if(ge.__useDefaultFramebuffer!==void 0)P.bindFramebuffer(F.FRAMEBUFFER,null),ee=!1;else if(ge.__webglFramebuffer===void 0)G.setupRenderTarget(T);else if(ge.__hasExternalTextures)G.rebindTextures(T,z.get(T.texture).__webglTexture,z.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let De=T.depthTexture;if(ge.__boundDepthTexture!==De){if(De!==null&&z.has(De)&&(T.width!==De.image.width||T.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(T)}}let Se=T.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(me=!0);let Pe=z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(j=Array.isArray(Pe[W])?Pe[W][q]:Pe[W],ne=!0):j=T.samples>0&&G.useMultisampledRTT(T)===!1?z.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?Pe[q]:Pe,H.copy(T.viewport),O.copy(T.scissor),K=T.scissorTest}else H.copy(Me).multiplyScalar(te).floor(),O.copy(Ce).multiplyScalar(te).floor(),K=ae;if(q!==0&&(j=Im),P.bindFramebuffer(F.FRAMEBUFFER,j)&&ee&&P.drawBuffers(T,j),P.viewport(H),P.scissor(O),P.setScissorTest(K),ne){let ge=z.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,ge.__webglTexture,q)}else if(me){let ge=W;for(let Se=0;Se<T.textures.length;Se++){let Pe=z.get(T.textures[Se]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Se,Pe.__webglTexture,q,ge)}}else if(T!==null&&q!==0){let ge=z.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ge.__webglTexture,q)}I=-1},this.readRenderTargetPixels=function(T,W,q,ee,j,ne,me,ge=0){if(!T||!T.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){P.bindFramebuffer(F.FRAMEBUFFER,Se);try{let Pe=T.textures[ge],De=Pe.format,Le=Pe.type;if(!N.textureFormatReadable(De))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(Le))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");W>=0&&W<=T.width-ee&&q>=0&&q<=T.height-j&&(T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ge),F.readPixels(W,q,ee,j,Ve.convert(De),Ve.convert(Le),ne))}finally{let Pe=L!==null?z.get(L).__webglFramebuffer:null;P.bindFramebuffer(F.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,W,q,ee,j,ne,me,ge=0){if(!T||!T.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){if(W>=0&&W<=T.width-ee&&q>=0&&q<=T.height-j){P.bindFramebuffer(F.FRAMEBUFFER,Se);let Pe=T.textures[ge],De=Pe.format,Le=Pe.type;if(!N.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ke=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ke),F.bufferData(F.PIXEL_PACK_BUFFER,ne.byteLength,F.STREAM_READ),T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ge),F.readPixels(W,q,ee,j,Ve.convert(De),Ve.convert(Le),0);let ct=L!==null?z.get(L).__webglFramebuffer:null;P.bindFramebuffer(F.FRAMEBUFFER,ct);let ft=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await pp(F,ft,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ke),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ne),F.deleteBuffer(ke),F.deleteSync(ft),ne}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,W=null,q=0){let ee=Math.pow(2,-q),j=Math.floor(T.image.width*ee),ne=Math.floor(T.image.height*ee),me=W!==null?W.x:0,ge=W!==null?W.y:0;G.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,me,ge,j,ne),P.unbindTexture()};let Pm=F.createFramebuffer(),Lm=F.createFramebuffer();this.copyTextureToTexture=function(T,W,q=null,ee=null,j=0,ne=null){let me,ge,Se,Pe,De,Le,ke,ct,ft;ne===null&&(j!==0?(Lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=j,j=0):ne=0);let yt=T.isCompressedTexture?T.mipmaps[ne]:T.image;if(q!==null)me=q.max.x-q.min.x,ge=q.max.y-q.min.y,Se=q.isBox3?q.max.z-q.min.z:1,Pe=q.min.x,De=q.min.y,Le=q.isBox3?q.min.z:0;else{let Dn=Math.pow(2,-j);me=Math.floor(yt.width*Dn),ge=Math.floor(yt.height*Dn),Se=T.isDataArrayTexture?yt.depth:T.isData3DTexture?Math.floor(yt.depth*Dn):1,Pe=0,De=0,Le=0}ee!==null?(ke=ee.x,ct=ee.y,ft=ee.z):(ke=0,ct=0,ft=0);let ht=Ve.convert(W.format),We=Ve.convert(W.type),dt;W.isData3DTexture?(G.setTexture3D(W,0),dt=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(G.setTexture2DArray(W,0),dt=F.TEXTURE_2D_ARRAY):(G.setTexture2D(W,0),dt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);let Ft=F.getParameter(F.UNPACK_ROW_LENGTH),ze=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Fe=F.getParameter(F.UNPACK_SKIP_PIXELS),Mn=F.getParameter(F.UNPACK_SKIP_ROWS),Zl=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,yt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pe),F.pixelStorei(F.UNPACK_SKIP_ROWS,De),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Le);let Fa=T.isDataArrayTexture||T.isData3DTexture,fi=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){let Dn=z.get(T),hr=z.get(W),Jn=z.get(Dn.__renderTarget),Jl=z.get(hr.__renderTarget);P.bindFramebuffer(F.READ_FRAMEBUFFER,Jn.__webglFramebuffer),P.bindFramebuffer(F.DRAW_FRAMEBUFFER,Jl.__webglFramebuffer);for(let ur=0;ur<Se;ur++)Fa&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,z.get(T).__webglTexture,j,Le+ur),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,z.get(W).__webglTexture,ne,ft+ur)),F.blitFramebuffer(Pe,De,me,ge,ke,ct,me,ge,F.DEPTH_BUFFER_BIT,F.NEAREST);P.bindFramebuffer(F.READ_FRAMEBUFFER,null),P.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||T.isRenderTargetTexture||z.has(T)){let Dn=z.get(T),hr=z.get(W);P.bindFramebuffer(F.READ_FRAMEBUFFER,Pm),P.bindFramebuffer(F.DRAW_FRAMEBUFFER,Lm);for(let Jn=0;Jn<Se;Jn++)Fa?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dn.__webglTexture,j,Le+Jn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dn.__webglTexture,j),fi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,hr.__webglTexture,ne,ft+Jn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,hr.__webglTexture,ne),j!==0?F.blitFramebuffer(Pe,De,me,ge,ke,ct,me,ge,F.COLOR_BUFFER_BIT,F.NEAREST):fi?F.copyTexSubImage3D(dt,ne,ke,ct,ft+Jn,Pe,De,me,ge):F.copyTexSubImage2D(dt,ne,ke,ct,Pe,De,me,ge);P.bindFramebuffer(F.READ_FRAMEBUFFER,null),P.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else fi?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(dt,ne,ke,ct,ft,me,ge,Se,ht,We,yt.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(dt,ne,ke,ct,ft,me,ge,Se,ht,yt.data):F.texSubImage3D(dt,ne,ke,ct,ft,me,ge,Se,ht,We,yt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ne,ke,ct,me,ge,ht,We,yt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ne,ke,ct,yt.width,yt.height,ht,yt.data):F.texSubImage2D(F.TEXTURE_2D,ne,ke,ct,me,ge,ht,We,yt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ft),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ze),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Fe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Mn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zl),ne===0&&W.generateMipmaps&&F.generateMipmap(dt),P.unbindTexture()},this.initRenderTarget=function(T){z.get(T).__webglFramebuffer===void 0&&G.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?G.setTextureCube(T,0):T.isData3DTexture?G.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?G.setTexture2DArray(T,0):G.setTexture2D(T,0),P.unbindTexture()},this.resetState=function(){A=0,C=0,L=null,P.reset(),xn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}};var Yp={type:"change"},Qh={type:"start"},Zp={type:"end"},Rl=new Wn,Kp=new pn,Yg=Math.cos(70*Ph.DEG2RAD),wt=new b,Qt=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jh=1e-6,Cl=class extends sa{constructor(e,t=null){super(e,t),this.state=it.NONE,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ri.ROTATE,MIDDLE:Ri.DOLLY,RIGHT:Ri.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new b,this._lastQuaternion=new Yt,this._lastTargetPosition=new b,this._quat=new Yt().setFromUnitVectors(e.up,new b(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wr,this._sphericalDelta=new Wr,this._scale=1,this._panOffset=new b,this._rotateStart=new Q,this._rotateEnd=new Q,this._rotateDelta=new Q,this._panStart=new Q,this._panEnd=new Q,this._panDelta=new Q,this._dollyStart=new Q,this._dollyEnd=new Q,this._dollyDelta=new Q,this._dollyDirection=new b,this._mouse=new Q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Zg.bind(this),this._onPointerDown=Kg.bind(this),this._onPointerUp=Jg.bind(this),this._onContextMenu=s0.bind(this),this._onMouseWheel=t0.bind(this),this._onKeyDown=n0.bind(this),this._onTouchStart=i0.bind(this),this._onTouchMove=r0.bind(this),this._onMouseDown=Qg.bind(this),this._onMouseMove=e0.bind(this),this._interceptControlDown=a0.bind(this),this._interceptControlUp=o0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yp),this.update(),this.state=it.NONE}update(e=null){let t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Qt:n>Math.PI&&(n-=Qt),i<-Math.PI?i+=Qt:i>Math.PI&&(i-=Qt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=wt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let o=new b(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new b(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Rl.origin.copy(this.object.position),Rl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rl.direction))<Yg?this.object.lookAt(this.target):(Kp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rl.intersectPlane(Kp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Jh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jh||this._lastTargetPosition.distanceToSquared(this.target)>Jh?(this.dispatchEvent(Yp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qt/60*this.autoRotateSpeed*e:Qt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;wt.copy(i).sub(this.target);let s=wt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Q,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Kg(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Zg(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Jg(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zp),this.state=it.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Qg(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ri.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=it.DOLLY;break;case Ri.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=it.ROTATE}break;case Ri.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Qh)}function e0(r){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function t0(r){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(r.preventDefault(),this.dispatchEvent(Qh),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Zp))}function n0(r){this.enabled!==!1&&this._handleKeyDown(r)}function i0(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ci.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=it.TOUCH_ROTATE;break;case Ci.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case Ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=it.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Qh)}function r0(r){switch(this._trackPointer(r),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=it.NONE}}function s0(r){this.enabled!==!1&&r.preventDefault()}function a0(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function o0(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ma=new b;function gn(r,e,t,n,i,s){let a=2*Math.PI*i/4,o=Math.max(s-2*i,0),c=Math.PI/4;ma.copy(e),ma[n]=0,ma.normalize();let l=.5*a/(a+o),h=1-ma.angleTo(r)/c;return Math.sign(ma[t])===1?h*l:o/(a+o)+l+l*(1-h)}var en=class r extends bt{constructor(e=1,t=1,n=1,i=2,s=.1){let a=i*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new b,l=new b,h=new b(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,f=u.length/6,g=new b,m=.5/a;for(let _=0,v=0;_<u.length;_+=3,v+=2)switch(c.fromArray(u,_),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[_+0]=h.x*Math.sign(c.x)+l.x*s,u[_+1]=h.y*Math.sign(c.y)+l.y*s,u[_+2]=h.z*Math.sign(c.z)+l.z*s,d[_+0]=l.x,d[_+1]=l.y,d[_+2]=l.z,Math.floor(_/f)){case 0:g.set(1,0,0),p[v+0]=gn(g,l,"z","y",s,n),p[v+1]=1-gn(g,l,"y","z",s,t);break;case 1:g.set(-1,0,0),p[v+0]=1-gn(g,l,"z","y",s,n),p[v+1]=1-gn(g,l,"y","z",s,t);break;case 2:g.set(0,1,0),p[v+0]=1-gn(g,l,"x","z",s,e),p[v+1]=gn(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),p[v+0]=1-gn(g,l,"x","z",s,e),p[v+1]=1-gn(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),p[v+0]=1-gn(g,l,"x","y",s,e),p[v+1]=1-gn(g,l,"y","x",s,t);break;case 5:g.set(0,0,-1),p[v+0]=gn(g,l,"x","y",s,e),p[v+1]=1-gn(g,l,"y","x",s,t);break}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.segments,e.radius)}};var le=window.STRUKTUR,l0=window.MODUL_TEXTE||{},gt=1.6,ui=1.9,ya=2.1,ss="uzh-kompetenzhaus-v1",Jp={"001":{fa:["Fa1","Fa3","Fa4"],ki:["KI1","KI6"],fu:["Fu2"],haupt:["Fa1","Fa3"],kat:"A"},"002":{fa:["Fa1","Fa2","Fa4","Fa9"],ki:["KI4"],fu:["Fu2"],haupt:["Fa1","Fa2"],kat:"A"},"003":{fa:["Fa10","Fa6","Fa7"],ki:["KI1","KI4","KI5","KI6"],fu:["Fu1","Fu2","Fu3"],haupt:["Fa10","KI5"],kat:"B"},100:{fa:["Fa5","Fa3","Fa4","Fa10"],ki:["KI4","KI6"],fu:["Fu2"],haupt:["Fa5","Fa3"],kat:"A+B"},101:{fa:["Fa3","Fa2","Fa4"],ki:["KI1","KI6"],fu:["Fu1"],haupt:["Fa3"],kat:"B"},102:{fa:["Fa2","Fa6","Fa3","Fa7","Fa10"],ki:["KI1","KI2","KI3","KI5"],fu:["Fu1","Fu3"],haupt:["Fa2","Fa6"],kat:"B"},103:{fa:["Fa3","Fa2","Fa4"],ki:["KI4","KI6","KI1"],fu:["Fu2"],haupt:["Fa3","KI4"],kat:"A"},200:{fa:["Fa1","Fa4"],ki:["KI4"],fu:["Fu2"],haupt:["Fa1","Fa4"],kat:"A"},201:{fa:["Fa1","Fa2"],ki:["KI4"],fu:["Fu2"],haupt:["Fa1"],kat:"A"},s11:{fa:["Fa4","Fa6","Fa1"],ki:["KI6","KI1"],fu:["Fu1"],haupt:["Fa4","Fa6"],kat:"B"},300:{fa:["Fa1","Fa5","Fa4","Fa9"],ki:["KI6"],fu:["Fu2"],haupt:["Fa1","Fa5"],kat:"A"},301:{fa:["Fa1","Fa8","Fa5"],ki:["KI3"],fu:["Fu3"],haupt:["Fa1","Fa8"],kat:"A+B"},302:{fa:["Fa1","Fa8","Fa5"],ki:["KI3"],fu:["Fu3"],haupt:["Fa1","Fa8"],kat:"A+B"},s13:{fa:["Fa4","Fa6","Fa1"],ki:["KI1","KI6","KI5"],fu:["Fu1"],haupt:["Fa4","Fa6"],kat:"B"},400:{fa:["Fa1","Fa8","Fa5","Fa7","Fa9"],ki:["KI5","KI6","KI3"],fu:["Fu3"],haupt:["Fa1","Fa8","Fa7"],kat:"A+B"},401:{fa:["Fa1","Fa8"],ki:[],fu:[],haupt:["Fa1"],kat:"A"},402:{fa:["Fa8","Fa1","Fa10"],ki:["KI6"],fu:["Fu2"],haupt:["Fa8","Fa1"],kat:"B"},403:{fa:["Fa1","Fa8","Fa9"],ki:[],fu:[],haupt:["Fa1"],kat:"A"},s12:{fa:["Fa4","Fa6","Fa1"],ki:["KI6","KI2"],fu:["Fu1"],haupt:["Fa4","Fa6"],kat:"B"},BA:{fa:["Fa6","Fa4","Fa2","Fa7","Fa10"],ki:["KI5","KI6","KI3","KI1"],fu:["Fu1","Fu2","Fu3"],haupt:["Fa6","Fa4","Fa7"],kat:"B"},500:{fa:["Fa3","Fa2","Fa4"],ki:["KI4","KI1"],fu:["Fu2"],haupt:["Fa3","KI4"],kat:"A+B"},501:{fa:["Fa5","Fa7","Fa4","Fa6"],ki:["KI6","KI5"],fu:["Fu1"],haupt:["Fa5","KI6"],kat:"B/C"},502:{fa:["Fa1","Fa8"],ki:["KI5"],fu:["Fu3"],haupt:["Fa1","Fa8"],kat:"B"},wp:{fa:["Fa1","Fa4","Fa8"],ki:["KI6"],fu:["Fu1"],haupt:["Fa1"],kat:"A"},s04:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s05:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s06:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s07:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s08:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s09:{fa:["Fa1","Fa4","Fa6"],ki:["KI4","KI6","KI3"],fu:["Fu1","Fu2"],haupt:["Fa1","Fa4"],kat:"B"},s01a:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},s01b:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},s01c:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},s01d:{fa:["Fa1","Fa4","Fa6"],ki:["KI2"],fu:["Fu1"],haupt:["KI2"],kat:"C"},600:{fa:["Fa8","Fa10","Fa7","Fa6"],ki:["KI5","KI3","KI1"],fu:["Fu3","Fu2"],haupt:["Fa8","Fa10"],kat:"B"},s02a:{fa:["Fa1","Fa4"],ki:[],fu:[],haupt:["Fa1","Fa4"],kat:"A"},s02b:{fa:["Fa1","Fa4"],ki:[],fu:[],haupt:["Fa1","Fa4"],kat:"A"},s03:{fa:["Fa2","Fa3"],ki:["KI1","KI4","KI2"],fu:["Fu1"],haupt:["Fa2","Fa3"],kat:"B/C"},MA:{fa:["Fa2","Fa3","Fa6","Fa7","Fa10"],ki:["KI1","KI2","KI3","KI5","KI6"],fu:["Fu1","Fu2","Fu3"],haupt:["Fa2","Fa3","Fa6"],kat:"B"},901:{fa:["Fa2","Fa6"],ki:[],fu:["Fu2"],haupt:["Fa2"],kat:"A"},902:{fa:["Fa6","Fa4"],ki:["KI6"],fu:["Fu2"],haupt:["Fa6","Fa4"],kat:"A"},903:{fa:["Fa2","Fa6"],ki:[],fu:["Fu2"],haupt:["Fa2"],kat:"A"},904:{fa:["Fa6","Fa4"],ki:["KI6"],fu:["Fu2"],haupt:["Fa6","Fa4"],kat:"A"},909:{fa:["Fa1","Fa4","Fa6"],ki:["KI5","KI6"],fu:["Fu2"],haupt:["Fa1","Fa4"],kat:"A"}},as=()=>({v:2,lang:"de",mode:"frei",name:"",direktMSc:!1,onboarded:!1,placed:{frei:{},serious:{}},bestanden:{},quests:{},quiz:{},fb:{},msSeen:{frei:[],serious:[]},nachbarn:[],season:fu(),tod:35,sound:!0,envAuto:!0,p0:[!1,!1,!1,!1],minor:[!1,!1,!1,!1,!1,!1]});function fu(){let r=new Date().getMonth()+1;return r>=3&&r<=5?"fruehling":r>=6&&r<=8?"sommer":r>=9&&r<=11?"herbst":"winter"}var wa=!0;try{localStorage.setItem(ss+"-t","1"),localStorage.removeItem(ss+"-t")}catch{wa=!1}var U=as();if(wa)try{let r=localStorage.getItem(ss);r&&(U=Object.assign(as(),JSON.parse(r)))}catch{}var Qp=null;function at(){wa&&(clearTimeout(Qp),Qp=setTimeout(()=>{try{localStorage.setItem(ss,JSON.stringify(U))}catch{}},300))}var $=r=>window.T[U.lang]&&window.T[U.lang][r]||window.T.de[r]||r,_e=r=>r&&(r[U.lang]||r.de)||"";function gu(){document.querySelectorAll("[data-i18n]").forEach(r=>{let e=r.getAttribute("data-i18n"),t=$(e);t&&(r.innerHTML=(t.startsWith("\u2B07")||t.startsWith("\u2912")||t.startsWith("\u{1F5D1}")||t.startsWith("\u2753")||t.startsWith("\u{1F512}")||t.startsWith("\u2139\uFE0F")||r.tagName==="LI",t)),t&&(r.innerHTML=t)}),document.getElementById("btnLang").textContent=U.lang==="de"?"EN":"DE",document.documentElement.lang=U.lang}var St={};le.slots.forEach(r=>St[r.slot]=r);var di={};(le.optionsmodule||[]).forEach(r=>di[r.code]=r);var lr={};le.kompetenzen.forEach(r=>lr[r.id]=r);function _u(r){let e=U.placed[U.mode][r.slot],t=e&&e.opt||r.code;return l0[t]||null}function yn(r){let e=_u(r);if(e&&e.komp)return{komp:e.komp,haupt:e.haupt||[],kat:e.kat||(Jp[r.slot]||{}).kat||"B"};let t=Jp[r.slot]||{fa:[],ki:[],fu:[],haupt:[],kat:"B"};return{komp:{fa:t.fa,ki:t.ki,fu:t.fu},haupt:t.haupt,kat:t.kat}}function tn(r){let e=U.placed[U.mode][r.slot];return e&&e.opt&&di[e.opt]?_e(di[e.opt].titel):_e(r.titel)}var $t={active:!1,data:null};function ot(r,e){return!!U.placed[e||U.mode][r]}function om(r){return ot("BA",r||U.mode)||U.direktMSc}function cs(r){if(r.optionen){let e=U.placed[U.mode][r.slot];return e&&e.opt||typeof ls<"u"&&ls||r.optionen[0]}return r.code}function lm(r){return(window.QUIZ||{})[cs(r)]||null}function c0(r){return!!U.quiz[cs(r)]}function Li(r,e){if(e=e||U.mode,$t.active)return{ok:!1,reason:""};if(ot(r.slot,e))return{ok:!1,reason:""};if(r.haus==="msc"&&!om(e))return{ok:!1,reason:$("grund_msc")};let t=(r.voraus||[]).filter(n=>!ot(n,e));if(t.length){let n=t.slice(0,3).map(i=>_e(St[i].titel).split(",")[0]).join(" \xB7 ");return{ok:!1,reason:$("grund_voraus")+n+(t.length>3?" \u2026":"")}}return e==="serious"&&!U.bestanden[r.slot]?{ok:!1,reason:$("grund_bestanden")}:e==="serious"&&lm(r)&&!c0(r)?{ok:!1,reason:$("grund_quiz")}:{ok:!0,reason:""}}var Kn=document.getElementById("c3d"),vn;try{vn=new wl({canvas:Kn,antialias:!0})}catch(r){throw document.body.insertAdjacentHTML("beforeend",'<div style="position:fixed;inset:0;z-index:99;display:grid;place-items:center;background:#f4f6fb;padding:24px"><div style="max-width:420px;text-align:center;font-family:Helvetica,Arial,sans-serif"><div style="font-size:40px">\u{1F3D7}\uFE0F</div><h2 style="color:#0028a5;margin:10px 0">3D wird hier nicht unterst\xFCtzt</h2><p style="color:#3c4356;line-height:1.5">Dein Browser kann WebGL gerade nicht starten. Bitte \xF6ffne das Kompetenzhaus in Safari, Chrome oder Firefox (nicht im In-App-Browser) \u2014 oder auf einem anderen Ger\xE4t.</p></div></div>'),r}vn.setPixelRatio(Math.min(window.devicePixelRatio,2));vn.shadowMap.enabled=!0;vn.shadowMap.type=tl;vn.toneMapping=cl;vn.toneMappingExposure=1.05;var Xe=new Us,Pt=new Nt(46,1,.1,400);Pt.position.set(-23,17,30);var Bt=new Cl(Pt,Kn);Bt.enableDamping=!0;Bt.dampingFactor=.06;Bt.maxPolarAngle=Math.PI*.49;Bt.minDistance=6;Bt.maxDistance=105;Bt.target.set(-7,3,0);var cm=new Qs(12573183,9075285,.75);Xe.add(cm);var qt=new na(16771524,2.2);qt.castShadow=!0;qt.shadow.mapSize.set(2048,2048);qt.shadow.camera.left=-48;qt.shadow.camera.right=48;qt.shadow.camera.top=48;qt.shadow.camera.bottom=-48;qt.shadow.camera.far=120;qt.shadow.bias=-4e-4;qt.shadow.radius=6;Xe.add(qt);Xe.add(qt.target);Xe.fog=new Ns(12574965,60,160);var Ni=new Je;Xe.add(Ni);var Gl=new ue({color:7319378,roughness:1}),vu=new J(new rt(90,90,.6,48),Gl);vu.position.y=-.3;vu.receiveShadow=!0;Ni.add(vu);var yu=new ue({color:13287336,roughness:.95}),xu=new ue({color:14209730,roughness:1}),Pl=new ue({color:10196876,roughness:.95});function hm(r){let e=le.haeuser[r],t=new Je,n=(e.breite+3.6)*gt,i=(e.tiefe+3.6)*gt,s=new J(new bt(n,.24,i),yu);return s.position.set(e.origin[0],.12,e.origin[2]),s.receiveShadow=!0,t.add(s),Ni.add(t),t}hm("bsc");var h0=hm("msc"),Mu=new J(new bt(9,.18,2.4),xu);Mu.position.set(0,.09,0);Mu.receiveShadow=!0;Ni.add(Mu);var Ll=new ue({color:5149760,roughness:1,flatShading:!0}),u0=new ue({color:8018490,roughness:1}),d0=[[-26,-12],[-30,4],[-20,14],[26,-13],[31,3],[22,15],[-2,-17],[4,18],[-14,-18],[16,-18]];d0.forEach(([r,e],t)=>{let n=new Je,i=new J(new rt(.22,.32,1.6,6),u0);i.position.y=.8,i.castShadow=!0;let s=1+t%3*.35;if(t%3===2){let a=new J(new oi(1.1*s,2.6*s,7),Ll);a.position.y=1.6+1.1*s,a.castShadow=!0,n.add(a)}else{let a=new J(new Jt(1.35*s,0),Ll);if(a.position.y=2.2+.5*s,a.castShadow=!0,n.add(a),t%3===1){let o=new J(new Jt(.8*s,0),Ll);o.position.set(.7,1.8+.4*s,.3),o.castShadow=!0,n.add(o)}}n.add(i),n.position.set(r,0,e),n.rotation.y=t*1.7,Ni.add(n)});var um=new ue({color:6199880,roughness:1,flatShading:!0});[[-62,-42,26],[55,-48,30],[-72,22,22],[66,28,24],[-6,-75,36],[-42,62,26],[48,60,22],[8,70,28]].forEach(([r,e,t])=>{let n=new J(new Xn(t,10,7),um);n.position.set(r,-t*.62,e),n.scale.y=.55,Ni.add(n)});var p0=new ue({color:10134197,roughness:1,flatShading:!0});[[-7,9,.5],[19,-9,.7],[-19,-10,.45],[3,-13,.6]].forEach(([r,e,t])=>{let n=new J(new Jt(t,0),p0);n.position.set(r,t*.55,e),n.rotation.set(t,r,e),n.castShadow=!0,Ni.add(n)});var m0=new Jt(.09,0),f0=new Zt,Dl=new Ti(m0,f0,90);{let r=[16777215,16234452,15979342,13213951],e=new Ie,t=0;for(;t<90;){let n=(Math.random()-.5)*76,i=(Math.random()-.5)*52;Math.abs(n)<22&&Math.abs(i)<9||(e.makeScale(1,1+Math.random(),1),e.setPosition(n,.12,i),Dl.setMatrixAt(t,e),Dl.setColorAt(t,new xe(r[t%r.length])),t++)}Ni.add(Dl)}var su=new ue({color:16777215,roughness:1,flatShading:!0,transparent:!0,opacity:.92}),dm=[];for(let r=0;r<6;r++){let e=new Je,t=3+r%3;for(let n=0;n<t;n++){let i=1.6+Math.random()*2.2,s=new J(new Jt(i,0),su);s.position.set(n*2.4-t,(Math.random()-.5)*.8,(Math.random()-.5)*1.6),s.scale.y=.55,e.add(s)}e.position.set((Math.random()-.5)*120,22+Math.random()*8,(Math.random()-.5)*80-10),e.userData.v=.25+Math.random()*.4,dm.push(e),Xe.add(e)}var es=new Je;{let r=new J(new rt(.05,.06,.9,6),new ue({color:9070146,roughness:.9}));r.position.y=.45;let e=new J(new en(.55,.35,.32,2,.06),new ue({color:10405,roughness:.55}));e.position.y=1.02;let t=new J(new Qe(.34,.045),new ue({color:16053488}));t.position.set(0,1.06,.17);let n=new J(new Qe(.16,.11),new ue({color:14248523,side:mt}));n.position.set(.32,1.12,0),es.add(r,e,t,n),es.position.set(-3.4,.24,4.7),es.rotation.y=.4,es.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.userData.action="p0")}),Xe.add(es)}var ns=new Je;{let r=new J(new en(4.4,.22,1.5,2,.06),new ue({color:7033144,roughness:1}));r.position.y=.11,r.receiveShadow=!0,ns.add(r),ns.position.set(-11,.24,7.6),ns.traverse(e=>{e.isMesh&&(e.userData.action="minor")}),Xe.add(ns)}var au=new Je;ns.add(au);function pm(){au.clear();let r=[14964526,15979342,13213951,16777215,16234452,8373098];(U.minor||[]).forEach((e,t)=>{if(e)for(let n=0;n<3;n++){let i=new J(new rt(.02,.025,.28,5),new ue({color:5149760}));i.position.set(-1.85+t*.74,.34,-.4+n*.4);let s=new J(new Jt(.09,0),new Zt({color:r[t]}));s.position.set(-1.85+t*.74,.52,-.4+n*.4),i.userData.action="minor",s.userData.action="minor",au.add(i,s)}})}var ts=new Je;{let r=new ue({color:10122576,roughness:.95}),e=new ue({color:7032627,roughness:.95}),t=new J(new en(2.6,1.9,1.9,2,.06),r);t.position.y=.95;let n=new J(Ol(3,2.3,.75),new ue({color:3752282,roughness:.85,flatShading:!0,side:mt}));n.position.y=1.9;let i=new J(new Qe(.7,1.3),e);i.position.set(-.55,.66,.96);let s=new J(new Qe(.85,.55),new ue({color:2766160,roughness:.3,metalness:.3}));s.position.set(.6,1.2,.96);let a=zl("\u{1F6E0}\uFE0F","#0028a5");a.scale.set(1.2,.48,1),a.position.set(0,3.05,0),ts.add(t,n,i,s,a),ts.position.set(-19.5,.02,10.4),ts.rotation.y=.55,ts.traverse(o=>{o.isMesh&&(o.castShadow=!0),o.userData.action="bauhuette"}),Xe.add(ts)}function mm(r,e,t,n,i,s){let a=new Float32Array(r*3);for(let h=0;h<r;h++)a[h*3]=(Math.random()-.5)*n,a[h*3+1]=i+Math.random()*(s-i),a[h*3+2]=(Math.random()-.5)*n;let o=new nt;o.setAttribute("position",new Ut(a,3));let c=new Br({size:e,color:t,transparent:!0,opacity:0,sizeAttenuation:!0,depthWrite:!1}),l=new ks(o,c);return Xe.add(l),l}var g0=mm(320,.5,16777215,220,28,90),Fl=mm(26,.35,16765286,46,.6,3.2),xa=[],Aa=r=>1-Math.pow(1-r,3),_0=r=>r*r;var v0=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;function _n(r,e,t=Aa,n=null){xa.push({t:0,dur:r,fn:e,ease:t,onDone:n})}var Nl=0,ou=0,y0=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ul=!!(window.claude&&typeof window.claude.complete=="function");async function lu(r){return String(await window.claude.complete(r)).trim()}var cu=null;function pi(r,e,t=1.6,n=null){let i=Pt.position.clone(),s=Bt.target.clone();Bt.enabled=!1,_n(t,a=>{Pt.position.lerpVectors(i,r,a),Bt.target.lerpVectors(s,e,a)},v0,()=>{Bt.enabled=($t.active,!0),Bt.enabled=!0,n&&n()})}function x0(r){let e=U.placed[U.mode][r.slot];return r.schwerpunktwahl&&e&&e.sp?new xe(le.schwerpunkte[e.sp].farbe):new xe(le.gruppen[r.gruppe].farbe)}function eu(r,e){let t=r.clone(),n=.85,i=.02;return e==="hell"&&t.lerp(new xe(16777215),.45),e==="holz"&&(t.lerp(new xe(9070146),.55),n=.95),e==="glas"&&(t.lerp(new xe(10336473),.5),n=.28,i=.35),new ue({color:t,roughness:n,metalness:i})}var ar=[];function M0(){let r=new ue({color:2766160,roughness:.25,metalness:.4,emissive:16763243,emissiveIntensity:0});return ar.push(r),r}var b0=r=>r.clone().lerp(new xe(1318972),.45),Di=new Je;Xe.add(Di);var Lt={},bu=r=>(r===0?0:.55+(r-1))*ui+.24;function Ol(r,e,t){let n=r/2,i=e/2,s=new nt,a=[-n,0,-i,n,0,-i,n,0,i,-n,0,i,-n,t,0,n,t,0],o=[0,1,5,0,5,4,3,4,5,3,5,2,0,4,3,1,2,5,0,3,2,0,2,1];return s.setAttribute("position",new we(a,3)),s.setIndex(o),s.computeVertexNormals(),s}function Ra(r,e={}){let n=(e.state||U.placed[U.mode][r.slot]||{}).stil||"klassisch",i=x0(r),s=new Je,a=r.pos,o=a.w*gt,c=a.d*gt,l=a.h*ui;r.form==="wing"&&(l=1.7*ui);let h=eu(i,n),u,d=(g,m,_,v=.09)=>new en(g,m,_,2,v),p=()=>new ue({color:b0(i),roughness:.8,flatShading:!0,side:mt});if(r.form==="slab"||r.form==="step"){u=new J(d(o,l,c,.07),h),u.position.y=l/2,s.add(u);let g=new J(new bt(o,ya,c),Pl.clone());g.position.y=-ya/2+.02,g.userData.noShadow=!0,g.userData.nopick=!0,s.add(g);let m=new J(new bt(o+.16,.16,c+.16),Pl.clone());if(m.position.y=.08,m.receiveShadow=!0,s.add(m),r.form==="step"){let _=new ue({color:9070146,roughness:.9}),v=new J(new Qe(.92,1.5),new ue({color:5913894,roughness:.8}));v.position.set(0,l+.75,-c/2+.02),s.add(v);let y=new J(new Xn(.05,8,6),new ue({color:14266942,metalness:.7,roughness:.35}));y.position.set(.3,l+.68,-c/2+.06),s.add(y);for(let w of[-1,1]){let A=new J(new rt(.055,.07,1.9,8),_);A.position.set(w*(o/2-.16),l+.95,c/2-.16),s.add(A)}let M=new J(Ol(o*1.14,c*1.25,.42),p());M.position.y=l+1.9,s.add(M);for(let w=0;w<2;w++){let A=new J(new bt(o*.55,l*(2-w)/3,.34),Pl.clone());A.position.set(0,l*(2-w)/3/2,c/2+.17+w*.34),A.receiveShadow=!0,s.add(A)}}}else if(r.form==="roof"){u=new J(Ol(o,c,l*.72),p()),s.add(u);let g=new J(d(.55,1.25,.55,.05),eu(i,n));g.position.set(o*.28,l*.62,0),s.add(g)}else if(r.form==="spire"){let g=new J(new oi(o*gt*.42,l,4),p());g.rotation.y=Math.PI/4,g.position.y=l/2,s.add(g),u=g;let m=new J(new rt(.045,.045,1.5,6),new ue({color:2184,roughness:.4,metalness:.7}));m.position.y=l+.7,s.add(m);let _=new J(new Qe(1.1,.6),new ue({color:10405,side:mt,roughness:.7}));_.position.set(.58,l+1.15,0),_.name="flag",s.add(_)}else if(r.form==="lantern"){let g=new J(new rt(.06,.08,l,6),new ue({color:3752282,roughness:.6,metalness:.4}));g.position.y=l/2,s.add(g),u=g;let m=new J(new Yi(.28,0),new ue({color:16767370,emissive:16757575,emissiveIntensity:.15}));m.position.y=l+.15,m.name="lamp",s.add(m),ar.push(m.material)}else{u=new J(d(o,l,c,.1),h),u.position.y=l/2,s.add(u);let g=a.z>=0?1:-1,m=r.haus&&Math.abs(a.z)<.01?1:g,_=M0(),v=new ue({color:15921385,roughness:.7}),y=Math.max(1,Math.round(a.w)),M=l*.55;for(let w=0;w<y;w++){let A=(w-(y-1)/2)*(o/y),C=new J(new Qe(.8,1),v);C.position.set(A,M,m*(c/2+.008));let L=new J(new Qe(.64,.84),_);L.position.set(A,M,m*(c/2+.016));let I=new J(new Qe(.64,.035),v);I.position.set(A,M,m*(c/2+.022));let k=new J(new Qe(.035,.84),v);k.position.set(A,M,m*(c/2+.022));let H=new J(new bt(.92,.06,.1),v);H.position.set(A,M-.56,m*(c/2+.04));for(let O of[C,L,I,k,H])m<0&&(O.rotation.y=Math.PI),s.add(O)}if(r.form==="bay"||r.form==="wing"){let w=new J(Ol(o*1.06,c*1.06,.5*ui*.5),p());w.position.y=l,s.add(w)}if(r.form==="tower")for(let[w,A]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let C=new J(d(.22,l,.22,.04),eu(i.clone().lerp(new xe(16777215),.25),n));C.position.set(w*(o/2-.08),l/2,A*(c/2-.08)),s.add(C)}}s.traverse(g=>{g.isMesh&&!g.userData.noShadow&&(g.castShadow=!0,g.receiveShadow=!0)});let f=le.haeuser[r.haus];return s.position.set(f.origin[0]+a.x*gt,bu(a.y),f.origin[2]+a.z*gt),s.userData.slot=r.slot,s}function fm(r,e){if(r.getObjectByName("sparkle"))return;let t=new J(new Yi(.22,0),new ue({color:16765502,emissive:16757504,emissiveIntensity:.9}));t.name="sparkle";let n=e.pos.h*ui;t.position.y=(e.form==="roof"||e.form==="spire",n+.6),r.add(t)}function S0(r){let e=r.getObjectByName("sparkle");e&&r.remove(e)}function gm(r,e){if(r.getObjectByName("pennant"))return;let t=new Je;t.name="pennant";let n=e.pos.h*ui,i=new J(new rt(.03,.03,.9,6),new ue({color:9070146,roughness:.8}));i.position.y=n+.45;let s=new J(new nt().setFromPoints?(()=>{let a=new nt;return a.setAttribute("position",new we([0,0,0,.55,-.12,0,0,-.24,0],3)),a.setIndex([0,1,2]),a.computeVertexNormals(),a})():new Qe(.5,.25),new ue({color:14263361,side:mt,roughness:.7}));s.position.set(.03,n+.85,0),s.name="pflag",t.add(i,s),t.position.set(e.pos.w*gt*.38,0,e.pos.d*gt*.38),r.add(t)}function E0(r,e){if(r.getObjectByName("flowerbox")||!["box","bay","wing","tower"].includes(e.form))return;let t=new Je;t.name="flowerbox";let n=e.pos.d*gt,i=e.pos.h*ui,s=e.pos.z>=0?1:-1,a=new J(new en(.7,.16,.18,2,.04),new ue({color:9070146,roughness:.9}));a.position.set(0,i*.55-.45,s*(n/2+.1)),t.add(a),[14964526,15979342,13213951].forEach((o,c)=>{let l=new J(new Jt(.07,0),new Zt({color:o}));l.position.set((c-1)*.2,i*.55-.33,s*(n/2+.1)),t.add(l)}),r.add(t)}function Su(r,e){let t=e.optionen&&(U.placed[U.mode][e.slot]||{}).opt||e.code;U.quiz[t]&&gm(r,e),U.quests[e.slot]&&U.quests[e.slot].done&&(fm(r,e),E0(r,e))}var sr=new Je;Xe.add(sr);function _m(){sr.clear();let r=Object.values(U.quiz).filter(Boolean).length+Object.values(U.quests).filter(t=>t.done).length,e=new ue({color:9070146,roughness:.9});if(r>=5){let t=new Je,n=new J(new en(1.5,.1,.45,2,.03),e);n.position.y=.45;let i=new J(new en(1.5,.5,.08,2,.03),e);i.position.set(0,.72,-.2);let s=new J(new bt(.08,.45,.4),e);s.position.set(-.6,.22,0);let a=s.clone();a.position.x=.6,t.add(n,i,s,a),t.position.set(0,.24,4.2),t.rotation.y=Math.PI,t.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),sr.add(t)}if(r>=10){let t=new Je,n=new J(new bt(1.6,.06,1.1),new ue({color:1780816,roughness:.25,metalness:.5}));n.rotation.x=-.5,n.position.y=.7;let i=new J(new rt(.06,.08,.7,6),new ue({color:10134197}));i.position.y=.35,t.add(n,i),t.position.set(-4,.24,6),t.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),sr.add(t)}if(r>=15){let t=new Je,n=new J(new rt(.05,.07,5,8),new ue({color:14212326,roughness:.4,metalness:.6}));n.position.y=2.5;let i=new J(new Qe(1.4,.8),new ue({color:10405,side:mt}));i.position.set(.72,4.4,0),i.name="flag",t.add(n,i),t.position.set(4.5,.24,6),t.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),sr.add(t)}if(r>=20){let t=new Je,n=new J(new rt(.9,1,.4,14),new ue({color:12173519,roughness:.8,flatShading:!0}));n.position.y=.2;let i=new J(new rt(.78,.78,.06,14),new ue({color:7189465,roughness:.15,metalness:.2}));i.position.y=.4;let s=new J(new rt(.1,.14,.8,8),n.material);s.position.y=.7,t.add(n,i,s),t.position.set(0,.24,-5.2),t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),sr.add(t)}}var Ln=null,Pn=null,T0=!1;function Bl(r){Ui(),Pn=r;let e=Li(r);T0=e.ok,Ln=Ra(r,{state:{stil:"klassisch"}}),Ln.traverse(t=>{t.isMesh&&(t.castShadow=!1,t.receiveShadow=!1,t.material=new ue({color:e.ok?3066993:14241615,transparent:!0,opacity:.45,depthWrite:!1}))}),Xe.add(Ln)}function Ui(){Ln&&(Xe.remove(Ln),Ln=null,Pn=null)}function w0(r,e,t){let i=new Xn(.09,5,4),s=new Zt({color:14208436,transparent:!0,opacity:.85}),a=new Ti(i,s,14),o=[],c=new Ie;for(let h=0;h<14;h++){let u=h/14*Math.PI*2;o.push(new b(Math.cos(u)*(1.2+Math.random()),.6+Math.random()*.8,Math.sin(u)*(1.2+Math.random()))),c.setPosition(r,e,t),a.setMatrixAt(h,c)}Xe.add(a);let l=Array.from({length:14},()=>new b(r,e,t));_n(.7,h=>{for(let u=0;u<14;u++){l[u].addScaledVector(o[u],.016),o[u].y-=.05;let d=1-h;c.makeScale(d,d,d),c.setPosition(l[u]),a.setMatrixAt(u,c)}a.instanceMatrix.needsUpdate=!0,s.opacity=.85*(1-h)},Aa,()=>{Xe.remove(a),i.dispose(),s.dispose()})}function kl(r,e,t,n=140,i=6){let s=new Qe(.16,.26),a=new Zt({side:mt,vertexColors:!1,transparent:!0}),o=new Ti(s,a,n),c=[10405,4156616,954238,14263361,14248523,6185166,16777215],l=[];for(let d=0;d<n;d++)o.setColorAt(d,new xe(c[d%c.length])),l.push({p:new b(r,e,t),v:new b((Math.random()-.5)*i,4+Math.random()*5,(Math.random()-.5)*i),r:Math.random()*Math.PI,rs:(Math.random()-.5)*8});o.instanceColor&&(o.instanceColor.needsUpdate=!0),Xe.add(o);let h=new Ie,u=new Kt;_n(2.6,d=>{for(let p=0;p<n;p++){let f=l[p];f.v.y-=.09,f.p.addScaledVector(f.v,.016),f.r+=f.rs*.016,u.set(f.r,f.r*.7,f.r*.3),h.makeRotationFromEuler(u),h.setPosition(f.p),o.setMatrixAt(p,h)}o.instanceMatrix.needsUpdate=!0,a.opacity=d>.75?1-(d-.75)/.25:1},d=>d,()=>{Xe.remove(o),s.dispose(),a.dispose()})}function A0(r,e,t,n){let i=new Gr(.42,.55,40),s=new Zt({color:16777215,transparent:!0,opacity:.75,side:mt,depthWrite:!1}),a=new J(i,s);a.rotation.x=-Math.PI/2,a.position.set(r,e+.04,t),Xe.add(a),_n(.55,o=>{let c=1+o*n;a.scale.set(c,c,1),s.opacity=.75*(1-o)},Aa,()=>{Xe.remove(a),i.dispose(),s.dispose()})}function zl(r,e,t="#ffffff"){let n=document.createElement("canvas");n.width=256,n.height=96;let i=n.getContext("2d");i.font="800 44px Helvetica, Arial";let s=i.measureText(r).width+52;i.fillStyle=e,i.beginPath(),i.roundRect((256-s)/2,14,s,68,34),i.fill(),i.fillStyle=t,i.textAlign="center",i.textBaseline="middle",i.fillText(r,128,50);let a=new kr(n),o=new Or(new qi({map:a,transparent:!0,depthWrite:!1}));return o.scale.set(2.4,.9,1),o}function R0(r,e){let{haupt:t}=yn(e),n=(e.pos.h||1)*ui+.4;(t||[]).slice(0,3).forEach((i,s)=>{let a=lr[i];a&&setTimeout(()=>{let o=zl("+"+i,le.felder[a.feld].farbe);o.position.set(r.position.x+(s-1)*.7,r.position.y+n,r.position.z),Xe.add(o);let c=o.position.y;_n(1.5,l=>{o.position.y=c+l*2.1,o.material.opacity=l<.65?1:1-(l-.65)/.35},Aa,()=>{Xe.remove(o),o.material.map.dispose(),o.material.dispose()})},240+s*200)})}var Eu=70,C0=new Qe(.22,.22),vm=new Zt({color:13204285,side:mt,transparent:!0,opacity:.9}),rs=new Ti(C0,vm,Eu),I0=Array.from({length:Eu},()=>({p:new b((Math.random()-.5)*70,Math.random()*18+2,(Math.random()-.5)*50),s:.4+Math.random()*.9,ph:Math.random()*6.28}));Xe.add(rs);rs.visible=!1;var hu={fruehling:{bg:13625079,grass:7976035,foliage:9424506,amb:16234452,ambFall:.35,sun:16773848,hemi:.8},sommer:{bg:12574965,grass:7319378,foliage:5149760,amb:null,ambFall:0,sun:16771524,hemi:.85},herbst:{bg:15260099,grass:10132052,foliage:13204285,amb:13204285,ambFall:.9,sun:16767392,hemi:.7},winter:{bg:14673646,grass:15330804,foliage:6191720,amb:16777215,ambFall:.5,sun:15659775,hemi:.65}},Il=new xe(1317944);function cr(){let r=hu[U.season]||hu.sommer,e=U.tod/100,t=Math.max(0,(e-.68)/.32),n=Math.PI*(.12+e*.82);qt.position.set(Math.cos(n)*40,Math.sin(n)*34+6,18),qt.intensity=Math.max(.05,Math.sin(Math.min(Math.PI,n))*2.2)*(1-t*.95),qt.color.set(r.sun).lerp(new xe(16751198),Math.pow(Math.abs(e-.5)*2,2)*.6),cm.intensity=r.hemi*(1-t*.75)+.12;let i=new xe(r.bg).lerp(Il,t);Xe.background=i,Xe.fog.color.copy(i),Gl.color.set(r.grass).lerp(Il,t*.55),Ll.color.set(r.foliage).lerp(Il,t*.5),um.color.set(r.grass).multiplyScalar(.82).lerp(Il,t*.6),su.color.set(16777215).lerp(new xe(3752282),t*.8),su.opacity=U.season==="winter"?.98:.9,g0.material.opacity=Math.max(0,t-.15)*.95,Fl.material.opacity=t>.4&&(U.season==="sommer"||U.season==="fruehling")?.9:0,Dl.visible=U.season==="sommer"||U.season==="fruehling",ar.forEach(a=>a.emissiveIntensity=t>.25?.9:0),rs.visible=!!r.amb,r.amb&&vm.color.set(r.amb),document.getElementById("todIcon").textContent=t>.3?"\u{1F319}":e>.45?"\u{1F324}\uFE0F":"\u{1F305}",document.querySelectorAll("#envRow .envbtn[data-season]").forEach(a=>a.classList.toggle("on",a.dataset.season===U.season));let s=document.getElementById("btnEnvAuto");s&&s.classList.toggle("on",!!U.envAuto),SND.ambientMode(U.sound?t>.45?"night":qt.intensity>.4?"day":"off":"off")}var At=new Je;{let r=new ue({color:15251850,roughness:.9}),e=new ue({color:10405,roughness:.9}),t=new ue({color:3752282,roughness:.95}),n=new J(new en(.16,.42,.16,2,.05),t);n.position.set(-.11,.21,0);let i=n.clone();i.position.x=.11;let s=new J(new en(.46,.55,.3,2,.1),e);s.position.y=.68;let a=new J(new en(.11,.4,.11,2,.04),e);a.position.set(-.3,.72,0);let o=a.clone();o.position.x=.3;let c=new J(new Xn(.2,12,10),r);c.position.y=1.12;let l=new ue({color:15975971,roughness:.5}),h=new J(new Xn(.21,12,8,0,Math.PI*2,0,Math.PI*.55),l);h.position.y=1.17;let u=new J(new rt(.27,.27,.035,14),l);u.position.y=1.16,At.add(n,i,s,a,o,c,h,u),At.userData.legs=[n,i],At.userData.arms=[a,o],At.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),At.position.set(-5,.24,6),Xe.add(At)}var uu=null;function ym(r,e,t=!1){let n=At.position.clone(),i=new b(r,.24,e),s=n.distanceTo(i);At.lookAt(i.x,.24,i.z),uu={k:0},_n(Math.min(2.2,.3+s*.09),a=>{At.position.lerpVectors(n,i,a),At.position.y=.24+Math.abs(Math.sin(a*s*2.2))*.09},a=>a,()=>{uu=null,At.position.y=.24,At.userData.legs.forEach(a=>a.rotation.x=0),At.userData.arms.forEach(a=>a.rotation.x=0),t&&_n(.9,a=>{At.position.y=.24+Math.abs(Math.sin(a*Math.PI*2))*.5,At.userData.arms.forEach((o,c)=>o.rotation.z=(c?1:-1)*Math.sin(a*Math.PI*4)*1.9)},a=>a,()=>At.userData.arms.forEach(a=>a.rotation.z=0))})}function Vl(){Object.keys(Lt).forEach(r=>{Di.remove(Lt[r]),delete Lt[r]}),Object.keys(U.placed[U.mode]).forEach(r=>{let e=St[r];if(!e)return;let t=Ra(e);Su(t,e),Di.add(t),Lt[r]=t}),_m(),h0.visible=!0}function Ca(r){let e=Li(r);if(!e.ok)return SND.err(),Dt(e.reason||$("gesperrt")),!1;let t={stil:Sa,sp:r.schwerpunktwahl?Ea:null,opt:r.optionen?ls:null};U.placed[U.mode][r.slot]=t,at();let n=Ra(r);Su(n,r),Di.add(n),Lt[r.slot]=n;let i=n.position.y;n.position.y=i+9;let s=n,a=Math.max(r.pos.w,r.pos.d)*gt*.42,o=new Zt({color:660016,transparent:!0,opacity:.22,depthWrite:!1}),c=new J(new ai(a,22),o);c.rotation.x=-Math.PI/2,c.position.set(n.position.x,i+.03,n.position.z),Xe.add(c),_n(.14,u=>c.scale.setScalar(.15+.85*u),Aa),_n(.5+.15,()=>{},u=>u,()=>{Xe.remove(c),c.geometry.dispose(),o.dispose()}),_n(.5,u=>{s.position.y=i+10*(1-u)},_0,()=>{s.position.y=i;try{if(_n(.22,u=>{let d=Math.sin(u*Math.PI);s.scale.set(1+d*.09,1-d*.14,1+d*.09)},u=>u,()=>s.scale.set(1,1,1)),_n(.18,u=>{s.position.y=i+Math.sin(u*Math.PI)*.07},u=>u,()=>{s.position.y=i}),w0(n.position.x,i+.1,n.position.z),r.ects>=8&&A0(n.position.x,i,n.position.z,Math.max(r.pos.w,r.pos.d)*gt*.9),R0(n,r),SND.thock(),y0||(Nl=.22,ou=.07),navigator.vibrate)try{navigator.vibrate(12)}catch{}}catch(u){console.error("juice",u)}xm()});let l=le.haeuser[r.haus];ym(l.origin[0]+r.pos.x*gt+2.6,l.origin[2]+r.pos.z*gt+4),Ui();let{komp:h}=yn(r);return Wt(),cn([...h.fa||[],...h.ki||[],...h.fu||[]]),U.onboarded?Wl(r.slot):(document.getElementById("coach").classList.remove("open"),r.slot!=="003"&&setTimeout(()=>{!U.onboarded&&!$t.active&&(document.getElementById("obStart").textContent=$("tour_fertig"),hn("onboard"))},1400)),!0}function P0(r){if(U.mode==="serious"&&!confirm($("entfernen_confirm")))return;let e=le.slots.filter(n=>ot(n.slot)&&(n.voraus||[]).includes(r));if(e.length){Dt($("grund_voraus")+e.map(n=>_e(n.titel).split(",")[0]).slice(0,2).join(" \xB7 ")),SND.err();return}delete U.placed[U.mode][r],at();let t=Lt[r];t&&(Di.remove(t),delete Lt[r]),Wt(),cn(),hs()}function xm(){U.msSeen||(U.msSeen={frei:[],serious:[]});let r=U.msSeen[U.mode];for(let e of le.meilensteine)if(!r.includes(e.id)&&e.slots.every(t=>ot(t))){r.push(e.id),at(),L0(e);break}}function L0(r){let e=le.haeuser[r.haus],t=e.origin[0],n=e.origin[2],i=r.id==="bsc_fertig"||r.id==="msc_fertig";pi(new b(t+(r.haus==="bsc"?-17:17),12,26),new b(t,3.5,n),1.4,()=>{if(kl(t,8,n,i?220:120,i?10:6),SND.fanfare(),i){let s=0,a=setInterval(()=>{kl(t+(Math.random()-.5)*10,9+Math.random()*4,n+(Math.random()-.5)*6,80,4),SND.firework(),++s>=3&&clearInterval(a)},450)}ym(t,n+6.5,!0),setTimeout(()=>{document.getElementById("msEmoji").textContent=i?"\u{1F386}":"\u{1F389}",document.getElementById("msTitle").textContent=_e(r.name),document.getElementById("msText").textContent=_e(r.text),document.getElementById("milestone").classList.add("open")},i?1400:700)})}document.getElementById("msClose").onclick=()=>{document.getElementById("milestone").classList.remove("open"),!U.onboarded&&!$t.active&&(document.getElementById("obStart").textContent=$("tour_fertig"),hn("onboard"))};var is=new ra,ci=new Q,fa=document.getElementById("tip"),tu=null;function du(r){let e=Kn.getBoundingClientRect();ci.x=(r.clientX-e.left)/e.width*2-1,ci.y=-((r.clientY-e.top)/e.height)*2+1,is.setFromCamera(ci,Pt);let t=[...Object.values(Lt)];Ln&&t.push(Ln);let n=is.intersectObjects(t,!0).filter(s=>!s.object.userData.nopick);if(!n.length)return null;let i=n[0].object;for(;i&&!i.userData.slot;)i=i.parent;return i?i.userData.slot:null}function em(r,e){let t=Lt[r];t&&t.traverse(n=>{n.isMesh&&n.material&&n.material.emissive&&!ar.includes(n.material)&&(n.material.emissive.setHex(e?1585262:0),n.material.emissiveIntensity=e?.35:0)})}Kn.addEventListener("pointermove",r=>{let e=du(r);if(e!==tu&&(em(tu,!1),em(e,!0)),tu=e,e&&!$t.active){let t=St[e];fa.style.display="block",fa.style.left=r.clientX+14+"px",fa.style.top=r.clientY+14+"px";let n=U.quests[e];fa.innerHTML=`<b>${tn(t)}</b><br>${t.ects} ${$("ects")} \xB7 ${$("stufe")} ${t.stufe}${n&&n.done?" \xB7 \u2726":""}<br><span style="opacity:.72">${_e(le.gruppen[t.gruppe].name)}</span>`,Kn.style.cursor="pointer"}else fa.style.display="none",Kn.style.cursor="default"});var ga=null;Kn.addEventListener("pointerdown",r=>{ga=[r.clientX,r.clientY],SND.unlock()});Kn.addEventListener("pointerup",r=>{if(!ga)return;let e=Math.hypot(r.clientX-ga[0],r.clientY-ga[1]);if(ga=null,e>6)return;if(vt){let n=Kn.getBoundingClientRect();ci.x=(r.clientX-n.left)/n.width*2-1,ci.y=-((r.clientY-n.top)/n.height)*2+1,is.setFromCamera(ci,Pt);let i=is.intersectObjects(vt.group.children,!0);for(let s of i){let a=s.object;for(;a&&!a.userData.kompId&&!a.userData.info;)a=a.parent;if(a&&a.userData.info){Dt(_e(a.userData.info)),SND.pick();return}if(a&&a.userData.kompId){let o=lr[a.userData.kompId];o&&(Dt(`${o.id} \xB7 ${_e(o.name)} \u2014 \xAB${_e(o.ich)}\xBB`),SND.pick());return}}return}{let n=Kn.getBoundingClientRect();ci.x=(r.clientX-n.left)/n.width*2-1,ci.y=-((r.clientY-n.top)/n.height)*2+1,is.setFromCamera(ci,Pt);let i=is.intersectObjects([es,ns,ts,Di],!0).filter(s=>!s.object.userData.nopick);if(i.length){let s=i[0].object,a=null;for(;s&&!a;)a=s.userData.action||null,s=s.parent;if(a==="p0"){D0(),SND.pick();return}if(a==="minor"){F0(),SND.pick();return}if(a==="bauhuette"){Mm(),SND.pick();return}}}if(Ln&&Pn){let n=du(r);if(n===Pn.slot||n===null){Ca(Pn);return}}let t=du(r);t&&(Wl(t),SND.pick())});function D0(){let r=document.getElementById("p0List");r.innerHTML="",(le.vorstufe||[]).forEach((e,t)=>{let n=document.createElement("label");n.className="sw",n.style.alignItems="flex-start",n.innerHTML=`<input type="checkbox" ${U.p0[t]?"checked":""} style="margin-top:2px"> <span style="font-size:12.5px;line-height:1.45">${_e(e.text)} <span style="color:#8b94ab">(${e.ids.join(", ")})</span></span>`,n.querySelector("input").onchange=i=>{U.p0[t]=i.target.checked,at(),cn()},r.appendChild(n)}),hn("p0")}function F0(){let r=document.getElementById("minorList");r.innerHTML="";for(let e=0;e<6;e++){let t=document.createElement("label");t.className="sw",t.innerHTML=`<input type="checkbox" ${U.minor[e]?"checked":""}> <span>${$("minor_sem").replace("{n}",e+1)}</span>`,t.querySelector("input").onchange=n=>{U.minor[e]=n.target.checked,at(),pm(),n.target.checked&&SND.quest()},r.appendChild(t)}hn("minor")}var nu={de:{ev:{PI:"Hake (1998, N\u22486500): Lernzuwachs ~verdoppelt (\u27E8g\u27E9 .23 \u2192 .48) \u2014 skaliert exzellent auf Grossveranstaltungen.",LC:"KI-Antworten live pr\xFCfen verbindet kritisches Denken mit AI Literacy \u2014 der KI-Output ist das \xDCbungsobjekt.",JT:"Kurzer Feedback-Loop vor der Sitzung: Die Lehre startet bei den h\xE4ufigsten Fehlkonzepten statt bei Folie 1.",AC:"Richmond & Nicholls (2025, UNSW, N=363): rubrikbasierte KI-Kritik f\xF6rdert Fach-, KI- und Informationskompetenz zugleich.",TB:"Kestin et al. (2025, Harvard-RCT): ~0.73 SD \xFCber aktivem Lernen \u2014 aber nur mit Hint-only-Design (nie die L\xF6sung verraten).",RS:"Simulierte Klient:innen erlauben risikofreies \xDCben (deliberate practice) mit weniger Performanzangst.",TSQ:"Erst einzeln, dann im Team: h\xF6here Leistung und weniger Pr\xFCfungsangst \u2014 in 200\u2013300er-Klassen erprobt.",PD:"Verankert die KI-Spielregeln (deklarieren, dokumentieren, verifizieren) als w\xF6chentliche Praxis statt Papier."},effort:"<b>Warum sich das anstrengender anf\xFChlt \u2014 und trotzdem mehr bringt:</b> Aktives Lernen f\xFChlt sich subjektiv m\xFChsamer an als eine brillante Vorlesung, f\xFChrt aber messbar zu mehr Lernen (Deslauriers et al., 2019). Und der Klassiker: Aktivierende Formate senken die Durchfallquoten deutlich (Freeman et al., 2014, Metaanalyse \xFCber 225 Studien).",lit_titel:"Literatur"},en:{ev:{PI:"Hake (1998, N\u22486,500): learning gains roughly doubled (\u27E8g\u27E9 .23 \u2192 .48) \u2014 scales excellently to large classes.",LC:"Checking AI answers live combines critical thinking with AI literacy \u2014 the AI output is the practice object.",JT:"A short pre-session feedback loop: teaching starts from the most common misconceptions, not from slide 1.",AC:"Richmond & Nicholls (2025, UNSW, N=363): rubric-based AI critique builds domain, AI and information literacy at once.",TB:"Kestin et al. (2025, Harvard RCT): ~0.73 SD above active learning \u2014 but only with a hint-only design (never reveal the solution).",RS:"Simulated clients enable risk-free deliberate practice with less performance anxiety.",TSQ:"Solo first, then as a team: higher performance and less test anxiety \u2014 proven in classes of 200\u2013300.",PD:"Anchors the AI ground rules (declare, document, verify) as weekly practice instead of paper."},effort:"<b>Why this feels harder \u2014 and still teaches more:</b> active learning subjectively feels more effortful than a brilliant lecture, yet measurably produces more learning (Deslauriers et al., 2019). And the classic: active formats substantially cut failure rates (Freeman et al., 2014, meta-analysis of 225 studies).",lit_titel:"References"},lit:`<ul style="font-size:11px;line-height:1.5">
    <li>Deslauriers, L., McCarty, L. S., Miller, K., Callaghan, K., & Kestin, G. (2019). Measuring actual learning versus feeling of learning in response to being actively engaged in the classroom. <i>PNAS, 116</i>(39), 19251\u201319257. <a href="https://doi.org/10.1073/pnas.1821936116" target="_blank" rel="noopener">doi.org/10.1073/pnas.1821936116</a></li>
    <li>Freeman, S., Eddy, S. L., McDonough, M., Smith, M. K., Okoroafor, N., Jordt, H., & Wenderoth, M. P. (2014). Active learning increases student performance in science, engineering, and mathematics. <i>PNAS, 111</i>(23), 8410\u20138415. <a href="https://doi.org/10.1073/pnas.1319030111" target="_blank" rel="noopener">doi.org/10.1073/pnas.1319030111</a></li>
    <li>Hake, R. R. (1998). Interactive-engagement versus traditional methods: A six-thousand-student survey of mechanics test data for introductory physics courses. <i>American Journal of Physics, 66</i>(1), 64\u201374. <a href="https://doi.org/10.1119/1.18809" target="_blank" rel="noopener">doi.org/10.1119/1.18809</a></li>
    <li>Kestin, G., Miller, K., Klales, A., Milbourne, T., & Ponti, G. (2025). AI tutoring outperforms in-class active learning: An RCT introducing a novel research-based design in an authentic educational setting. <i>Scientific Reports, 15</i>, 17458. <a href="https://doi.org/10.1038/s41598-025-97652-6" target="_blank" rel="noopener">doi.org/10.1038/s41598-025-97652-6</a></li>
    <li>Richmond, J. L., & Nicholls, K. (2025). Using generative AI to promote psychological, feedback, and artificial intelligence literacies in undergraduate psychology. <i>Teaching of Psychology</i>. <a href="https://doi.org/10.1177/00986283241287203" target="_blank" rel="noopener">doi.org/10.1177/00986283241287203</a></li>
    <li>Crouch, C. H., & Mazur, E. (2001). Peer Instruction: Ten years of experience and results. <i>American Journal of Physics, 69</i>(9), 970\u2013977. <a href="https://doi.org/10.1119/1.1374249" target="_blank" rel="noopener">doi.org/10.1119/1.1374249</a></li>
  </ul>`};function Mm(){let r=nu[U.lang]||nu.de,e=["PI","LC","JT","AC","TB","RS","TSQ","PD"];document.getElementById("bhList").innerHTML=e.map(t=>{let n=le.baukasten.defs[t];return n?`<div class="bhrow"><b>${_e(n.name)}</b><p>${_e(n.kurz)}</p>${r.ev[t]?`<p class="bhev">\u{1F4CA} ${r.ev[t]}</p>`:""}</div>`:""}).join(""),document.getElementById("bhEffort").innerHTML=r.effort,document.getElementById("bhLit").innerHTML=`<div class="subhead" style="margin:10px 0 4px;font:700 10.5px var(--font);text-transform:uppercase;letter-spacing:.5px;color:#5b6478">${r.lit_titel}</div>`+nu.lit,hn("bauhuette")}window.addEventListener("keydown",r=>{let e=r.target&&(r.target.tagName==="INPUT"||r.target.tagName==="TEXTAREA");if(r.key==="Enter"&&Pn&&!e&&Ca(Pn),r.key==="Escape"){if(vt){Ta();return}document.getElementById("tutor").classList.remove("open"),Ui(),hs(),document.querySelectorAll(".modal.open").forEach(t=>t.classList.remove("open"))}});var tm=document.getElementById("planList"),mi=null;function N0(r){return ot(r.slot)?"built":Li(r).ok?"avail":"locked"}function Tu(){for(let r of["bsc","msc"])for(let e of le.bauplan[r])for(let t of e.slots){let n=St[t];if(!ot(t)&&Li(n).ok)return t}return null}function Wt(){let r=$t.active?null:Tu(),e=document.createDocumentFragment();for(let n of["bsc","msc"]){let i=document.createElement("div");i.className="semblock",i.innerHTML=`<div class="semhead" style="font-size:12px;color:var(--blue)">${n==="bsc"?"\u{1F3E0} "+$("haus_bsc"):"\u{1F3F0} "+$("haus_msc")}<span>${Fi(n)}/120 ${$("ects")}</span></div>`,e.appendChild(i);for(let s of le.bauplan[n]){if(!s.slots.length)continue;let a=s.slots.filter(c=>ot(c)).length,o=document.createElement("div");o.className="semblock",o.innerHTML=`<div class="semhead"><span>${$("sem")} ${s.sem} \xB7 ${s.hs?$("hs"):$("fs")}</span><span class="semprog">${a}/${s.slots.length}</span></div>`;for(let c of s.slots){let l=St[c],h=N0(l),u=document.createElement("button");u.className="chip "+(h==="built"?"built":h==="locked"?"locked":""),mi===c&&u.classList.add("sel"),c===r&&u.classList.add("next");let d=U.quests[c],p=l.schwerpunktwahl&&U.placed[U.mode][c]&&U.placed[U.mode][c].sp?le.schwerpunkte[U.placed[U.mode][c].sp].farbe:le.gruppen[l.gruppe].farbe;u.innerHTML=`<span class="cdot" style="background:${p}"></span>
          <span class="cname">${tn(l)}</span>
          ${c===r?`<span class="nextbadge">\u{1F528} ${$("naechstes")}</span>`:""}
          ${U.quiz[cs(l)]?'<span class="quest-star" title="Quiz \u2713">\u{1F6A9}</span>':""}
          ${d&&d.done?'<span class="quest-star">\u2726</span>':""}
          ${h==="built"?'<span class="tick">\u2714</span>':U.mode==="serious"&&U.bestanden[c]?'<span class="tick">\u2611</span>':""}
          <span class="cects">${l.ects}</span>`,u.onclick=()=>{os(c)},o.appendChild(u)}e.appendChild(o)}}tm.innerHTML="",tm.appendChild(e),document.getElementById("planHint").textContent=U.mode==="serious"?"\u2611 = "+$("bestanden"):"",document.getElementById("planLegende").textContent=$("legende");let t=document.getElementById("nextCta");t&&(r&&!$t.active?(t.textContent=`${$("cta_naechster")} ${tn(St[r]).split(",")[0].slice(0,34)}`,t.onclick=()=>{os(r)},t.style.visibility="visible"):t.style.visibility="hidden")}function Fi(r){return le.slots.filter(e=>e.haus===r&&ot(e.slot)).reduce((e,t)=>{let n=U.placed[U.mode][t.slot],i=n&&n.opt&&di[n.opt]?di[n.opt].ects:t.ects;return e+i},0)}function os(r){vt&&Ta(),mi=r;let e=St[r];SND.pick(),!ot(r)&&!$t.active?Bl(e):Ui(),Wl(r),Wt();let t=le.haeuser[e.haus],n=new b(t.origin[0]+e.pos.x*gt,bu(e.pos.y)+1,t.origin[2]+e.pos.z*gt),i=Pt.position.clone().sub(Bt.target).normalize().multiplyScalar(Math.min(30,Pt.position.distanceTo(n)+7));pi(n.clone().add(i),n,.9)}function Ia(){let r={},e={};le.kompetenzen.forEach(t=>{r[t.id]=0,e[t.id]=0});for(let t of le.slots){let{komp:n,haupt:i}=yn(t),s=[...n.fa||[],...n.ki||[],...n.fu||[]];for(let a of s){if(!(a in e))continue;let o=(i||[]).includes(a)?2:1;e[a]+=o*t.ects,ot(t.slot)&&(r[a]+=o*t.ects)}}return(le.vorstufe||[]).forEach((t,n)=>{U.p0&&U.p0[n]&&t.ids.forEach(i=>{e[i]&&(r[i]=Math.min(e[i],r[i]+.025*e[i]))})}),{score:r,max:e}}var or=null,Ma="profil",iu=[{ids:["Fa1","Fa8","Fa9"],name:{de:"Fachwissen & Praxis",en:"Knowledge & practice"},farbe:"#1a3e8f"},{ids:["Fa2","Fa3","Fa5"],name:{de:"Methoden & Daten",en:"Methods & data"},farbe:"#1a3e8f"},{ids:["Fa4","Fa6","Fa7","Fa10"],name:{de:"Denken & Kommunikation",en:"Thinking & communication"},farbe:"#1a3e8f"},{ids:["KI1","KI2","KI3"],name:{de:"KI anwenden & gestalten",en:"Applying & creating AI"},farbe:"#0e8f7e"},{ids:["KI4","KI5","KI6"],name:{de:"KI verstehen & pr\xFCfen",en:"Understanding & auditing AI"},farbe:"#0e8f7e"},{ids:["Fu1","Fu2","Fu3"],name:{de:"Future Skills",en:"Future skills"},farbe:"#4a90d9"}];function U0(r,e,t=210){let n=t/2,i=t*.36,s=iu.length,a=(p,f)=>{let g=-Math.PI/2+p/s*Math.PI*2;return[n+Math.cos(g)*f,n+Math.sin(g)*f]},o="";for(let p of[.33,.66,1])o+=`<polygon points="${[...Array(s)].map((f,g)=>a(g,i*p).join(",")).join(" ")}" fill="none" stroke="#dbe1ef" stroke-width="1"/>`;let c="",l="";iu.forEach((p,f)=>{let[g,m]=a(f,i);c+=`<line x1="${n}" y1="${n}" x2="${g}" y2="${m}" stroke="#dbe1ef" stroke-width="1"/>`;let[_,v]=a(f,i+16);l+=`<text x="${_}" y="${v}" font-size="7.5" font-weight="700" fill="${p.farbe}" text-anchor="middle" dominant-baseline="middle">${_e(p.name).replace("&","&amp;")}</text>`});let h=iu.map(p=>{let f=p.ids.reduce((m,_)=>m+(r[_]||0),0),g=p.ids.reduce((m,_)=>m+(e[_]||0),0);return g?f/g:0}),u=h.map((p,f)=>a(f,Math.max(.03,p)*i).join(",")).join(" "),d=h.map((p,f)=>{let[g,m]=a(f,Math.max(.03,p)*i);return`<circle cx="${g}" cy="${m}" r="2.6" fill="#0028a5"/>`}).join("");return`<svg viewBox="0 0 ${t} ${t}" style="width:100%;max-width:230px;display:block;margin:2px auto 6px">
    ${o}${c}
    <polygon points="${u}" fill="rgba(0,40,165,.16)" stroke="#0028a5" stroke-width="2" stroke-linejoin="round"/>
    ${d}${l}</svg>`}function O0(){let r=[];for(let n of["bsc","msc"])for(let i of le.bauplan[n]){if(!i.slots.length&&n==="bsc"&&i.sem===2){r.push({lbl:"B2",fa:0,ki:0,fu:0});continue}let s={lbl:(n==="bsc"?"B":"M")+i.sem,fa:0,ki:0,fu:0};for(let a of i.slots){if(!ot(a))continue;let o=St[a],{komp:c}=yn(o);s.fa+=(c.fa||[]).length*o.ects,s.ki+=(c.ki||[]).length*o.ects,s.fu+=(c.fu||[]).length*o.ects}r.push(s)}let e=Math.max(1,...r.map(n=>n.fa+n.ki+n.fu)),t=n=>{let i=s=>Math.round(s/e*100);return`<div class="vbar" title="${n.lbl}">
      <span class="vseg" style="height:${i(n.fu)}%;background:${le.felder.fu.farbe}"></span>
      <span class="vseg" style="height:${i(n.ki)}%;background:${le.felder.ki.farbe}"></span>
      <span class="vseg" style="height:${i(n.fa)}%;background:${le.felder.fa.farbe}"></span>
    </div>`};return`<div class="kfeld" style="margin-top:14px">${$("verlauf_titel")}</div>
    <div class="verlauf">${r.map(t).join("")}</div>
    <div class="verlauf-lbl">${r.map(n=>`<span>${n.lbl}</span>`).join("")}</div>`}function B0(){let{score:r,max:e}=Ia(),t={};le.kompetenzen.forEach(s=>t[s.id]=e[s.id]?r[s.id]/e[s.id]:0);let n=document.getElementById("profilList"),i=`<p style="font-size:11px;color:#5b6478;margin:2px 6px 6px;line-height:1.45">${$("karriere_info")}</p>`;for(let s of window.KARRIERE.pfade||[]){let a=Object.values(s.w).reduce((l,h)=>l+h,0),o=Math.round(Object.entries(s.w).reduce((l,[h,u])=>l+u*(t[h]||0),0)/a*100),c=le.slots.filter(l=>!ot(l.slot)).map(l=>{let{komp:h,haupt:u}=yn(l),p=[...h.fa||[],...h.ki||[],...h.fu||[]].reduce((f,g)=>f+(s.w[g]||0)*((u||[]).includes(g)?2:1),0);return{s:l,v:p,ok:Li(l).ok}}).filter(l=>l.v>0).sort((l,h)=>h.ok-l.ok||h.v-l.v).slice(0,3);i+=`<div class="pfad">
      <div class="phead"><span>${s.icon}</span><span>${_e(s.name)}</span><span class="pct">${o}%</span></div>
      <div class="phint">${_e(s.hint)}</div>
      <div class="track"><div class="fill" style="width:${o}%;background:linear-gradient(90deg,#3f6cc8,#0028a5)"></div></div>
      ${c.length?`<div class="pnext">${$("pfad_next")} ${c.map(l=>`<button data-slot="${l.s.slot}">${tn(l.s).split(",")[0].slice(0,34)}</button>`).join("")}</div>`:""}
    </div>`}i+=O0(),n.innerHTML=i,n.querySelectorAll(".pnext button").forEach(s=>s.onclick=()=>os(s.dataset.slot))}function cn(r=[]){if(document.getElementById("ptabProfil").classList.toggle("on",Ma==="profil"),document.getElementById("ptabKarriere").classList.toggle("on",Ma==="karriere"),Ma==="karriere"){B0();return}if(or){k0(or);return}let{score:e,max:t}=Ia(),n=document.getElementById("profilList"),i=`<div class="ects-summary">
    <div class="box"><b>${Fi("bsc")}</b><span>BSc / 120 ${$("ects")}</span></div>
    <div class="box"><b>${Fi("msc")}</b><span>MSc / 120 ${$("ects")}</span></div>
  </div><div class="donuts">`;for(let s of["fa","ki","fu"]){let a=le.felder[s],o=le.kompetenzen.filter(u=>u.feld===s).map(u=>u.id),c=o.reduce((u,d)=>u+e[d],0),l=o.reduce((u,d)=>u+t[d],0),h=l?Math.round(c/l*100):0;i+=`<div class="donut"><div class="ring" style="background:conic-gradient(${a.farbe} ${h*3.6}deg, #e8ebf4 0)"><b>${h}%</b></div><span>${s==="fa"?"Fach":s==="ki"?"KI":"Future"}</span></div>`}i+="</div>",i+=U0(e,t);for(let s of["fa","ki","fu"]){let a=le.felder[s];i+=`<div class="kfeld"><span class="fdot" style="background:${a.farbe}"></span>${_e(a.name)}</div>`;for(let o of le.kompetenzen.filter(c=>c.feld===s)){let c=t[o.id]?Math.round(e[o.id]/t[o.id]*100):0;i+=`<button class="kbar ${r.includes(o.id)?"bump":""}" data-k="${o.id}"><div class="klabel"><span><span class="kid">${o.id}</span>${_e(o.name)}</span><span>${c}%</span></div>
        <div class="track"><div class="fill" style="background:${a.farbe};width:${c}%"></div></div></button>`}}n.innerHTML=i,n.querySelectorAll(".kbar").forEach(s=>s.onclick=()=>{or=s.dataset.k,SND.pick(),cn()})}document.getElementById("ptabProfil").onclick=()=>{Ma="profil",or=null,cn()};document.getElementById("ptabKarriere").onclick=()=>{Ma="karriere",or=null,SND.pick(),cn()};function pu(r){let e=0;for(let t of le.slots){if(!ot(t.slot))continue;let{komp:n}=yn(t);[...n.fa||[],...n.ki||[],...n.fu||[]].includes(r)&&(e=Math.max(e,t.stufe))}return e}function k0(r){let e=lr[r];if(!e){or=null,cn();return}let t=le.felder[e.feld],{score:n,max:i}=Ia(),s=i[r]?Math.round(n[r]/i[r]*100):0,a=document.getElementById("profilList"),o=[];for(let f of le.slots){let{komp:g,haupt:m}=yn(f);[...g.fa||[],...g.ki||[],...g.fu||[]].includes(r)&&o.push({slot:f,haupt:(m||[]).includes(r),built:ot(f.slot),w:((m||[]).includes(r)?2:1)*f.ects})}o.sort((f,g)=>g.built-f.built||g.w-f.w);let c=o.filter(f=>f.built),l=o.filter(f=>!f.built).sort((f,g)=>Li(g.slot).ok-Li(f.slot).ok||g.w-f.w).slice(0,4),h=pu(r),u=f=>{let g=le.gruppen[f.slot.gruppe].farbe;return`<button class="modrow ${f.built?"builtrow":""}" data-slot="${f.slot.slot}" style="border:0;width:100%;text-align:left;cursor:pointer;background:${f.built?"#eef7f1":"transparent"}">
      <span class="mdot" style="background:${g}"></span>
      <span style="flex:1">${tn(f.slot)}</span>
      ${f.haupt?`<span class="haupt-tag" title="${$("hauptkomp")}">\u2605</span>`:""}
      <span style="color:#8b94ab;font-variant-numeric:tabular-nums">${f.slot.ects}</span>
    </button>`};a.innerHTML=`
    <button class="kdetail-back">${$("zurueck")}</button>
    <div class="kdetail">
      <h4><span style="color:${t.farbe}">${r}</span> ${_e(e.name)}</h4>
      <p class="ich">\xAB${_e(e.ich)}\xBB</p>
      <div class="kbar" style="cursor:default"><div class="klabel"><span>${_e(t.name)}</span><span>${s}%</span></div>
        <div class="track"><div class="fill" style="background:${t.farbe};width:${s}%"></div></div></div>
      <div class="subhead">${$("stufe_erreicht")}</div>
      <div class="stufen">${[1,2,3,4].map(f=>`<span class="sdot ${h>=f?"on":""}" title="${_e(le.stufen[f-1].name)}">${f}</span>`).join("")}
        <span style="font-size:10.5px;color:#5b6478;margin-left:4px">${h?_e(le.stufen[h-1].name):"\u2014"}</span></div>
      ${H0(e,n,i)}
      <div class="subhead">${$("k_aufgebaut")} (${c.length})</div>
      ${c.length?c.map(u).join(""):`<p style="font-size:11.5px;color:#8b94ab;margin:2px 6px">${$("k_keine")}</p>`}
      ${z0(r,h)}
      ${G0(r,c)}
      ${l.length?`<div class="subhead">${$("k_naechste")}</div>`+l.map(u).join(""):""}
    </div>`,a.querySelector(".kdetail-back").onclick=()=>{or=null,cn()},a.querySelectorAll(".modrow").forEach(f=>f.onclick=()=>os(f.dataset.slot));let d=a.querySelector("[data-cvcopy]");d&&(d.onclick=async()=>{try{await navigator.clipboard.writeText(d.dataset.cvcopy)}catch{}d.textContent="\u2713 "+$("cv_copied"),SND.pick()});let p=a.querySelector("[data-cvai]");p&&(p.onclick=async()=>{let f=a.querySelector("[data-cvrole]").value.trim();if(!f)return;let g=a.querySelector("[data-cvaiout]");g.style.display="flex",g.querySelector("p").textContent=$("ai_wartet");try{let m=Hl(r,pu(r)),_=await lu(`Formuliere GENAU EINEN CV-tauglichen Satz (${U.lang==="de"?"Deutsch, Schweizer Rechtschreibung":"English"}, dritte Person ohne Subjekt, keine \xDCbertreibung) f\xFCr die Kompetenz \xAB${_e(lr[r].name)}\xBB \u2014 zugeschnitten auf diese Zielrolle: ${f}. Ausgangsbaustein: \xAB${m}\xBB. Nur der Satz, nichts anderes.`);g.querySelector("p").textContent="\xAB"+_.replace(/^«|»$/g,"")+"\xBB",g.querySelector("[data-cvaicopy]").onclick=async()=>{try{await navigator.clipboard.writeText(_)}catch{}SND.pick()}}catch{g.querySelector("p").textContent=$("tutor_err")}})}function Hl(r,e){let n=(window.KARRIERE&&window.KARRIERE.cv||{})[r];if(!n||!e)return null;let i=n[e]||n[String(e)]||(Array.isArray(n.stufen)?n.stufen[e-1]:null);return i?_e(i):null}function z0(r,e){let t=Hl(r,e);if(!t)return"";let n=Ul?`<div style="display:flex;gap:6px;margin:2px 4px 6px">
    <input data-cvrole type="text" placeholder="${$("ai_cv_ph")}" style="flex:1;border:1.5px solid #dbe1ef;border-radius:8px;padding:6px 9px;font:500 11px var(--font)">
    <button class="ghostbtn" data-cvai style="padding:6px 9px;font-size:10.5px">${$("ai_cv_btn")}</button>
  </div><div data-cvaiout style="display:none" class="cvrow"><p></p><button data-cvaicopy>\u{1F4CB}</button></div>`:"";return`<div class="subhead">\u{1F4DD} ${$("cv_titel")} (${$("stufe")} ${e})</div>
    <div class="cvrow"><p>\xAB${t}\xBB</p><button data-cvcopy="${t.replace(/"/g,"&quot;")}">\u{1F4CB} ${$("cv_copy")}</button></div>${n}`}function bm(r,e,t){let n=r.proxy.map(i=>t[i]?e[i]/t[i]:0);return Math.round(n.reduce((i,s)=>i+s,0)/Math.max(1,n.length)*100)}function H0(r,e,t){if(!r.sub||!r.sub.length)return"";let n=le.felder.fu,i=`<div class="subhead">\u{1F9ED} ${$("fs12_titel")} (${r.sub.length})</div>
    <p style="font-size:10px;color:#8b94ab;margin:0 6px 4px">${$("fs12_hint")}</p>`;for(let s of r.sub){let a=bm(s,e,t);i+=`<div class="kbar" style="cursor:default"><div class="klabel"><span><span class="kid">${s.id}</span>${_e(s.name)}</span><span>${a}%</span></div>
      <div class="track"><div class="fill" style="background:${n.farbe};width:${a}%"></div></div></div>`}return i}function G0(r,e){let t=[];for(let n of e){let i=cs(n.slot);U.quiz[i]&&t.push(`<div class="evrow"><span class="evic">\u{1F6A9}</span><span>${$("ev_quiz")}: ${tn(n.slot).split(",")[0]}</span></div>`);let s=U.quests[n.slot.slot];s&&s.done&&t.push(`<div class="evrow"><span class="evic">\u2726</span><span>${$("ev_quest")}: ${tn(n.slot).split(",")[0]}${s.note?` \u2014 <i>\xAB${s.note}\xBB</i>`:""}</span></div>`)}return t.length?`<div class="subhead">\u{1F5C2} ${$("evidenz_titel")} (${t.length})</div>`+t.join(""):""}var Sm=document.getElementById("card"),_a="zukunft",Sa="klassisch",Ea="DeNC",ls=null;function Wl(r){let e=St[r];if(!e)return;mi=r;let t=ot(r),n=U.placed[U.mode][r]||{};Sa=n.stil||Sa,Ea=n.sp||Ea,ls=n.opt||(e.optionen?e.optionen[0]:null);let{kat:i}=yn(e);document.getElementById("cardDot").style.background=e.schwerpunktwahl&&n.sp?le.schwerpunkte[n.sp].farbe:le.gruppen[e.gruppe].farbe,document.getElementById("cardTitle").textContent=tn(e),document.getElementById("cardCode").textContent=`${n.opt||e.code} \xB7 ${_e(le.gruppen[e.gruppe].name)}`;let s=(i||"B").split(/[+/]/).map(a=>a.trim()).filter(a=>le.pruefungslogik[a]);document.getElementById("cardBadges").innerHTML=`<span class="badge" style="background:#5b6478">${e.ects} ${$("ects")}</span>
     <span class="badge" style="background:#39415a">${$("stufe")} ${e.stufe}</span>
     <span class="badge" style="background:#7a86a3">${$(e.rhythmus==="beide"?"beide":e.rhythmus.toLowerCase())}${e.sem2?" \xB7 "+$("zweisem"):""}</span>`+s.map(a=>`<span class="badge" style="background:${le.pruefungslogik[a].farbe}">${_e(le.pruefungslogik[a].name)}</span>`).join(""),hi(e),Pi(e),Em(e),Sm.classList.add("open"),document.body.classList.add("card-open")}function Em(r){let e=document.getElementById("fbRow");if(!e)return;if($t.active){e.style.display="none";return}e.style.display="flex";let t=(U.fb||{})[r.slot]||{};e.innerHTML=`<span class="fblbl">\u{1F6A6} ${$("fb_frage")}</span>
    ${["g","y","r"].map(i=>`<button class="fbamp ${t.a===i?"on":""}" data-amp="${i}" title="${$("fb_"+i)}" aria-label="${$("fb_"+i)}">${i==="g"?"\u{1F7E2}":i==="y"?"\u{1F7E1}":"\u{1F534}"}</button>`).join("")}
    ${t.a?`<input type="text" data-fbnote maxlength="200" placeholder="${$("fb_ph")}" value="${(t.note||"").replace(/"/g,"&quot;")}">`:""}`,e.querySelectorAll(".fbamp").forEach(i=>i.onclick=()=>{U.fb||(U.fb={});let s=U.fb[r.slot]||{};s.a===i.dataset.amp?delete U.fb[r.slot]:(U.fb[r.slot]={a:i.dataset.amp,note:s.note||"",ts:new Date().toISOString().slice(0,10)},s.a||Dt($("fb_danke"))),at(),SND.pick(),Em(r)});let n=e.querySelector("[data-fbnote]");n&&(n.onchange=()=>{U.fb&&U.fb[r.slot]&&(U.fb[r.slot].note=n.value.trim().slice(0,200),at())})}function hs(){Sm.classList.remove("open"),document.body.classList.remove("card-open"),mi=null,Wt()}document.getElementById("cardClose").onclick=()=>{hs(),Ui()};document.getElementById("cardTabs").addEventListener("click",r=>{let e=r.target.closest("button");e&&(_a=e.dataset.tab,document.querySelectorAll("#cardTabs button").forEach(t=>t.classList.toggle("on",t===e)),mi&&hi(St[mi]))});function V0(r){let{komp:e,haupt:t}=yn(r);return'<div class="komp-pills">'+[...e.fa||[],...e.ki||[],...e.fu||[]].map(i=>{let s=lr[i];if(!s)return"";let a=le.felder[s.feld];return`<span class="kpill ${t.includes(i)?"haupt":""}" style="border-color:${a.farbe};color:${a.farbe}">${i} ${_e(s.name)}</span>`}).join("")+"</div>"}function hi(r){let e=_u(r),t=document.getElementById("cardBody"),n=`<p style="color:#5b6478;font-style:italic">${$("keine_texte")}</p>`;if(_a==="zukunft"){let i=le.baukasten&&le.baukasten.zuordnung[r.slot]||[],s=i.length?`<div style="margin-top:10px"><span style="font:700 11px var(--font);color:#5b6478">${$("baukasten_titel")}:</span>
      <span class="komp-pills" style="display:inline-flex;margin-left:4px">${i.map(a=>{let o=le.baukasten.defs[a];return o?`<span class="kpill" title="${_e(o.kurz)}" style="border-color:#b9c2d9">${_e(o.name)}</span>`:""}).join("")}</span></div>`:"";t.innerHTML=(e?`<p style="color:#5b6478;font-size:12px">${_e(e.heute)}</p><p style="margin-top:6px">${_e(e.zukunft)}</p>`:n)+V0(r)+s}else if(_a==="lernziele"){let i=(a,o,c,l)=>`<i class="${(a||[]).includes(o)?"on":""}" style="background:${c}" title="${l}"></i>`,s=a=>`<span class="lz-dots">${i(a.b,"F",le.felder.fa.farbe,_e(le.felder.fa.name))}${i(a.b,"K",le.felder.ki.farbe,_e(le.felder.ki.name))}${i(a.b,"S",le.felder.fu.farbe,_e(le.felder.fu.name))}</span>`;t.innerHTML=e&&e.lernziele&&e.lernziele.length?`<ul style="list-style:none;padding-left:2px">${e.lernziele.map(a=>`<li>${s(a)}${_e(a)}</li>`).join("")}</ul>`:n}else if(_a==="ki"){let{kat:i}=yn(r),s=(i||"B").split(/[+/]/).map(a=>a.trim()).filter(a=>le.pruefungslogik[a]);t.innerHTML=(e?`<p>${_e(e.ki)}</p>`:n)+'<ul style="margin-top:8px">'+s.map(a=>`<li><b style="color:${le.pruefungslogik[a].farbe}">${_e(le.pruefungslogik[a].name)}</b> \u2014 ${_e(le.pruefungslogik[a].def)}</li>`).join("")+"</ul>"}else _a==="quest"&&W0(r,t,e,n)}var nm={de:{ok:["Sauber hergeleitet! \u{1F9E0}","Signifikant richtig.","Das sitzt \u2014 weiter so!","Evidenzbasiert geantwortet. \u2713","Dein Hippocampus liefert."],no:["Fast! Schau dir das Warum an:","Guter Versuch \u2014 hier steckt der Denkfehler:","Kein Drama: Fehler = Lernmoment.","Knapp daneben \u2014 die Erkl\xE4rung hilft:","Das war der beliebteste Distraktor:"]},en:{ok:["Cleanly reasoned! \u{1F9E0}","Significantly correct.","That one stuck \u2014 keep going!","An evidence-based answer. \u2713","Your hippocampus delivers."],no:["Almost! Check the why:","Good try \u2014 here's the catch:","No drama: errors are learning moments.","Close \u2014 the explanation helps:","That was the most popular distractor:"]}},_t=null;function ru(r){let e=[...Array(r).keys()];for(let t=r-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function W0(r,e,t,n){let i=lm(r),s=cs(r),a="";if(i&&i.length)if(U.quiz[s])a+=`<div class="quiz-done-banner">\u{1F6A9} ${$("quiz_bestanden")}</div>`;else{(!_t||_t.code!==s)&&(_t={code:s,i:0,oks:[],picked:null,order:ru(i[0].a.length)});let g=_t,m=i[g.i];if((!g.order||g.order.length!==m.a.length)&&(g.order=ru(m.a.length)),a+=`<p style="font-weight:800;margin-bottom:2px">\u{1F9E9} ${$("quiz_titel")}</p>`,U.mode==="serious"&&!ot(r.slot)&&(a+=`<p style="font-size:11px;color:#b35c00;margin-bottom:6px">${$("quiz_gate_hint")}</p>`),a+=`<div class="quiz-progress">${[0,1,2].map(_=>`<span class="qp ${g.oks[_]?"done":_===g.i?"cur":""}"></span>`).join("")}</div>`,a+=`<p style="font-size:10.5px;color:#5b6478">${$("quiz_von").replace("{i}",g.i+1)}</p>`,a+=`<p class="quiz-q">${_e(m.q)}</p>`,g.order.forEach(_=>{let v=m.a[_],y="";g.picked!==null&&(y=_===m.korrekt?"ok":_===g.picked?"no":""),a+=`<button class="quiz-a ${y}" data-ai="${_}" ${g.picked!==null?"disabled":""}>${_e(v)}</button>`}),g.picked!==null){let _=g.picked===m.korrekt,v=nm[U.lang]||nm.de,y=(_?v.ok:v.no)[(g.i+m.korrekt)%5];a+=`<div class="quiz-erkl"><b>${_?"\u2705 ":"\u274C "}${y}</b><br>${_e(m.erkl)}</div>`,Ul&&!_&&(a+=`<button class="ghostbtn" data-qai style="margin-top:6px">${$("ai_quizhilfe")}</button><div data-qaiout class="quiz-erkl" style="display:none;margin-top:6px"></div>`);let M=g.i===i.length-1;_?M||(a+=`<button class="primary" style="margin-top:8px" data-qnext>${$("quiz_weiter")} \u2192</button>`):a+=`<button class="primary" style="margin-top:8px" data-qredo>\u21BA ${$("quiz_nochmal")}</button>`}}else U.mode==="serious"&&(a+=`<p style="font-size:11.5px;color:#8b94ab">${$("quiz_fehlt")}</p>`);let o=U.quests[r.slot]||{},c=t&&t.quest;a+=`<p style="font-weight:800;margin:12px 0 2px">\u2726 ${$("praxis_quest")}</p>`,a+=c?`<p><b>${_e(c.titel)}</b></p><p style="margin-top:4px">${_e(c.text)}</p>`:n,o.done&&(a+=`<p style="color:var(--ok);margin-top:8px"><b>\u2713 ${$("quest_abgeschlossen")}</b>${o.note?` \u2014 \xAB${o.note}\xBB`:""}</p>`),Ul&&c&&(a+=`<details style="margin-top:10px"><summary style="cursor:pointer;font:700 12px var(--font);color:var(--blue)">${$("ai_feedback")}</summary>
      <textarea data-aiq rows="3" placeholder="${$("ai_feedback_ph")}" style="width:100%;margin-top:6px;border:1.5px solid #dbe1ef;border-radius:10px;padding:8px 10px;font:500 12px var(--font)"></textarea>
      <button class="primary" data-aiqbtn style="margin-top:6px">${$("ai_senden")}</button>
      <div data-aiqout class="quiz-erkl" style="display:none;margin-top:6px"></div></details>`),Ul&&["400","402","403","501","502","511","s05","s06","s08"].includes(r.slot)&&cu&&(a+=`<button class="ghostbtn" data-aivig style="margin-top:10px">${$("ai_vignette")}</button>`),e.innerHTML=a;let h=e.querySelector("[data-aiqbtn]");h&&(h.onclick=async()=>{let g=e.querySelector("[data-aiq]"),m=e.querySelector("[data-aiqout]"),_=g.value.trim();if(_){m.style.display="block",m.textContent=$("ai_wartet");try{m.textContent=await lu(`Du bist Tutor:in im Psychologiestudium UZH. Gib formatives Feedback (${U.lang==="de"?"Deutsch, Schweizer Rechtschreibung":"English"}, max. 90 W\xF6rter, keine Note) auf die L\xF6sung einer \xDCbungsaufgabe. Nenne genau EINE St\xE4rke und EINEN konkreten Verbesserungspunkt, freundlich und fachlich pr\xE4zise.
Aufgabe (\xAB${_e(c.titel)}\xBB): ${_e(c.text)}
L\xF6sung der/des Studierenden: ${_}
Feedback:`)}catch{m.textContent=$("tutor_err")}}});let u=e.querySelector("[data-aivig]");u&&(u.onclick=()=>cu.open("vignette",r)),e.querySelectorAll(".quiz-a").forEach(g=>g.onclick=()=>{if(!_t||_t.picked!==null)return;let m=+g.dataset.ai,_=i[_t.i];_t.picked=m,_t.oks[_t.i]=m===_.korrekt,m===_.korrekt?SND.quest():SND.err(),_t.i===i.length-1&&_t.oks.every(Boolean)&&_t.oks.length===i.length&&(U.quiz[s]=!0,at(),setTimeout(()=>{SND.fanfare();let y=Lt[r.slot];y&&(gm(y,r),kl(y.position.x,y.position.y+2.5,y.position.z,60,3)),_m(),Wt(),hi(r),Pi(r)},900)),hi(r)});let d=e.querySelector("[data-qnext]");d&&(d.onclick=()=>{_t.i++,_t.picked=null,_t.order=null,hi(r)});let p=e.querySelector("[data-qredo]");p&&(p.onclick=()=>{_t.picked=null,_t.order=ru(i[_t.i].a.length),hi(r)});let f=e.querySelector("[data-qai]");f&&(f.onclick=async()=>{let g=e.querySelector("[data-qaiout]");g.style.display="block",g.textContent=$("ai_wartet");let m=i[_t.i];try{g.innerHTML=(await lu(`Du bist Tutor:in im Psychologiestudium UZH. Eine Person hat diese Quizfrage falsch beantwortet. Erkl\xE4re das Konzept in 2 S\xE4tzen NEU (anders als die Standarderkl\xE4rung) und stelle dann GENAU EINE kurze \xDCbungsfrage dazu, gefolgt von \xABMusterantwort:\xBB und einer 1-Satz-Musterantwort. Sprache: ${U.lang==="de"?"Deutsch (Schweizer Rechtschreibung)":"English"}.
Frage: ${_e(m.q)}
Richtige Antwort: ${_e(m.a[m.korrekt])}
Gew\xE4hlte falsche Antwort: ${_e(m.a[_t.picked])}`)).replace(/Musterantwort:([\s\S]*)$/i,(_,v)=>`<details style="margin-top:4px"><summary style="cursor:pointer;font-weight:700">${U.lang==="de"?"Musterantwort anzeigen":"Show model answer"}</summary>${v.trim()}</details>`)}catch{g.textContent=$("tutor_err")}})}function Pi(r){let e=document.getElementById("cardActions");if(e.innerHTML="",$t.active)return;let t=ot(r.slot);if(r.optionen&&!t){let i=document.createElement("div");i.className="optpick",i.innerHTML=`<span>${$("optionwahl")}</span>`,r.optionen.forEach(s=>{let a=document.createElement("button");a.textContent=di[s]?_e(di[s].titel):s,a.classList.toggle("on",ls===s),a.onclick=()=>{ls=s,Pi(r),hi(r)},i.appendChild(a)}),e.appendChild(i)}if(r.schwerpunktwahl){let i=document.createElement("div");i.className="schwerpick",i.innerHTML=`<span>${$("schwerpunkt")}</span>`,Object.keys(le.schwerpunkte).forEach(s=>{let a=document.createElement("button");a.textContent=s,a.title=_e(le.schwerpunkte[s].name),a.setAttribute("aria-label",_e(le.schwerpunkte[s].name)),a.style.borderColor=le.schwerpunkte[s].farbe;let o=t?U.placed[U.mode][r.slot].sp||"DeNC":Ea;a.classList.toggle("on",o===s),a.onclick=()=>{t?(U.placed[U.mode][r.slot].sp=s,at(),im(r.slot)):Ea=s,Pi(r),Wt()},i.appendChild(a)}),e.appendChild(i)}{let i=document.createElement("div");i.className="stilpick",i.innerHTML=`<span>${$("stil")}</span>`,le.stile.forEach(s=>{let a=document.createElement("button");a.textContent=_e(s.name);let o=t?U.placed[U.mode][r.slot].stil||"klassisch":Sa;a.classList.toggle("on",o===s.id),a.onclick=()=>{t?(U.placed[U.mode][r.slot].stil=s.id,at(),im(r.slot)):(Sa=s.id,Pn&&Bl(Pn)),Pi(r)},i.appendChild(a)}),e.appendChild(i)}if(U.mode==="serious"&&!t){let i=document.createElement("label");i.className="sw",i.innerHTML=`<input type="checkbox" ${U.bestanden[r.slot]?"checked":""}> <span>${$("bestanden")}</span>`,i.querySelector("input").onchange=s=>{U.bestanden[r.slot]=s.target.checked,at(),Wt(),Pn&&Bl(Pn),Pi(r)},e.appendChild(i)}let n=(r.empf||[]).filter(i=>!ot(i));if(!t&&n.length){let i=document.createElement("div");i.className="reason",i.style.color="#b35c00",i.textContent=$("empf_hinweis")+n.map(s=>_e(St[s].titel).split(",")[0]).join(" \xB7 "),e.appendChild(i)}if(t){let i=U.quests[r.slot]||{},s=document.createElement("button");if(s.className=i.done?"ghostbtn":"primary",s.textContent=i.done?$("quest_undone"):$("quest_done"),s.onclick=()=>{if(i.done)U.quests[r.slot]={done:!1,note:i.note||""},S0(Lt[r.slot]),at(),Wt(),Pi(r),hi(r);else{e.innerHTML="";let a=document.createElement("div");a.style.cssText="display:flex;gap:6px;flex:1;align-items:center;flex-wrap:wrap";let o=document.createElement("span");o.style.cssText="font-size:11.5px;color:#5b6478;flex-basis:100%",o.textContent=$("quest_frage");let c=document.createElement("input");c.type="text",c.maxLength=140,c.style.cssText="flex:1;min-width:180px;border:1.5px solid #dbe1ef;border-radius:10px;padding:8px 12px;font:500 12.5px var(--font)";let l=document.createElement("button");l.className="primary",l.textContent="\u2726 OK",l.onclick=()=>{U.quests[r.slot]={done:!0,note:c.value.trim().slice(0,140)},fm(Lt[r.slot],r),SND.quest();let h=Lt[r.slot];kl(h.position.x,h.position.y+2,h.position.z,40,2.5),at(),Wt(),Pi(r),hi(r)},a.append(o,c,l),e.appendChild(a),c.focus()}},e.appendChild(s),["box","tower","wing","bay","slab","step"].includes(r.form)){let a=document.createElement("button");a.className="ghostbtn",a.textContent=r.form==="slab"||r.form==="step"?"\u{1F526} "+$("keller"):$("betreten"),a.onclick=()=>wm(r.slot),e.appendChild(a)}{let a=document.createElement("button");a.className="ghostbtn",a.textContent=$("entfernen"),a.onclick=()=>P0(r.slot),e.appendChild(a)}}else{let i=Li(r),s=document.createElement("button");if(s.className="primary",s.textContent=$("bauen"),s.disabled=!i.ok,s.onclick=()=>Ca(r),e.appendChild(s),!i.ok&&i.reason){let a=document.createElement("div");a.className="reason",a.textContent=i.reason,e.appendChild(a)}}}function im(r){let e=St[r],t=Lt[r];t&&Di.remove(t);let n=Ra(e);Su(n,e),Di.add(n),Lt[r]=n}function wu(r){r==="serious"&&!U.seriousSeen&&(U.seriousSeen=!0,setTimeout(()=>alert($("serious_erklaert")),150)),U.mode=r,at(),document.getElementById("modeFrei").classList.toggle("on",r==="frei"),document.getElementById("modeSerious").classList.toggle("on",r==="serious"),Ui(),hs(),Vl(),Wt(),cn(),Dt($(r==="serious"?"serious_info":"frei_info"))}document.getElementById("modeFrei").onclick=()=>wu("frei");document.getElementById("modeSerious").onclick=()=>wu("serious");typeof U.sound>"u"&&(U.sound=!0);SND.enabled=U.sound;var mu=document.getElementById("btnSound");mu.textContent=U.sound?"\u{1F50A}":"\u{1F507}";mu.onclick=()=>{U.sound=!U.sound,SND.enabled=U.sound,at(),mu.textContent=U.sound?"\u{1F50A}":"\u{1F507}",U.sound&&SND.pick()};document.getElementById("btnLang").onclick=()=>{U.lang=U.lang==="de"?"en":"de",at(),gu(),Wt(),cn(),mi&&Wl(mi),Tm()};var j0={menu:"modalMenu",help:"modalHelp",privacy:"modalPrivacy",about:"modalAbout",share:"modalShare",onboard:"modalOnboard",p0:"modalP0",minor:"modalMinor",bauhuette:"modalBauhuette",changelog:"modalChangelog"};function hn(r){document.getElementById(j0[r]).classList.add("open")}document.querySelectorAll(".modal").forEach(r=>{r.addEventListener("click",e=>{(e.target===r||e.target.hasAttribute("data-close"))&&r.classList.remove("open")})});document.getElementById("btnMenu").onclick=()=>hn("menu");document.getElementById("btnHelp").onclick=()=>{hn("help")};document.getElementById("btnPrivacy").onclick=()=>hn("privacy");document.getElementById("btnAbout").onclick=()=>hn("about");function Tm(){document.getElementById("helpBox").innerHTML=window.HELP_HTML[U.lang]+`<div class="mactions"><button class="primary" data-close>${$("schliessen")}</button></div>`,document.getElementById("privacyBox").innerHTML=window.PRIVACY_HTML[U.lang]+`<div class="mactions"><button class="primary" data-close>${$("schliessen")}</button></div>`,document.getElementById("aboutBox").innerHTML=window.ABOUT_HTML[U.lang]+`<div class="mactions"><button class="primary" data-close>${$("schliessen")}</button></div>`;let r=document.getElementById("ckDirektMsc");r&&(r.checked=U.direktMSc,r.onchange=e=>{U.direktMSc=e.target.checked,at(),Wt(),Dt($("direkt_msc"))})}document.getElementById("btnExport").onclick=()=>{let r=new Blob([JSON.stringify(U,null,2)],{type:"application/json"}),e=document.createElement("a");e.href=URL.createObjectURL(r),e.download="kompetenzhaus-"+new Date().toISOString().slice(0,10)+".json",e.click(),URL.revokeObjectURL(e.href)};document.getElementById("btnImport").onclick=()=>document.getElementById("fileImport").click();document.getElementById("fileImport").onchange=r=>{let e=r.target.files[0];if(!e)return;if(!confirm($("import_confirm"))){r.target.value="";return}let t=new FileReader;t.onload=()=>{try{U=Object.assign(as(),JSON.parse(t.result)),at(),gu(),Vl(),Wt(),cn(),cr(),wu(U.mode),Dt($("import_ok"))}catch{Dt($("import_err"))}},t.readAsText(e)};document.getElementById("btnReset").onclick=()=>{confirm($("reset_confirm"))&&(U=as(),U.onboarded=!0,at(),Ui(),hs(),Vl(),Wt(),cn(),cr())};function X0(){let r={n:U.name,p:U.placed[U.mode],q:Object.fromEntries(Object.entries(U.quests).filter(([e,t])=>t.done).map(([e,t])=>[e,1]))};return btoa(unescape(encodeURIComponent(JSON.stringify(r))))}document.getElementById("btnShare").onclick=()=>{let r=(location.origin==="null"||location.protocol==="file:",location.href.split("#")[0]);document.getElementById("shareLink").value=r+"#h="+X0(),hn("share")};document.getElementById("btnCopy").onclick=async()=>{let r=document.getElementById("shareLink");r.select();try{await navigator.clipboard.writeText(r.value)}catch{document.execCommand("copy")}Dt($("kopiert"))};function q0(){if(!location.hash.startsWith("#h="))return!1;try{let r=JSON.parse(decodeURIComponent(escape(atob(location.hash.slice(3)))));return $t.active=!0,$t.data=r,U.placed={frei:r.p||{},serious:{}},U.mode="frei",U.quests=Object.fromEntries(Object.entries(r.q||{}).map(([e])=>[e,{done:!0,note:""}])),document.getElementById("visitorText").textContent=`${$("besuch_bei")} ${r.n||"?"} \u{1F3E0}`,document.getElementById("visitor").classList.add("open"),document.getElementById("panelL").style.display="none",document.getElementById("modeSeg").style.display="none",!0}catch{return!1}}document.getElementById("visitorOwn").onclick=()=>{location.hash="",location.reload()};document.getElementById("visitorSave").onclick=()=>{try{let r=wa&&JSON.parse(localStorage.getItem(ss)||"null")||as();r.nachbarn=(r.nachbarn||[]).filter(e=>e.n!==$t.data.n).slice(0,2),r.nachbarn.push($t.data),localStorage.setItem(ss,JSON.stringify(r)),Dt($("nachbar_gespeichert"))}catch{}};var va=!1,ba=new Je;Xe.add(ba);function $0(r){let e=document.createElement("canvas");e.width=512,e.height=128;let t=e.getContext("2d");t.font="700 52px Helvetica, Arial",t.textAlign="center",t.fillStyle="rgba(255,255,255,.92)";let n=t.measureText(r).width+60;t.beginPath(),t.roundRect((512-n)/2,18,n,92,26),t.fill(),t.fillStyle="#0028a5",t.fillText(r,256,82);let i=new kr(e),s=new Or(new qi({map:i,transparent:!0}));return s.scale.set(7,1.75,1),s}function Y0(){ba.clear();let r=[[-27,-23],[0,-28],[27,-23]],e=.75;(U.nachbarn||[]).slice(0,3).forEach((t,n)=>{let[i,s]=r[n],a=new Je;for(let[c,l]of Object.entries(t.p||{})){let h=St[c];if(!h)continue;let u=Ra(h,{state:l}),d=le.haeuser[h.haus];u.position.set(i+d.origin[0]*.45+h.pos.x*gt*e,bu(h.pos.y)*e,s+h.pos.z*gt*e),u.scale.set(e,e,e),a.add(u)}let o=$0(t.n||"?");o.position.set(i,9,s),a.add(o),ba.add(a)}),ba.visible=va}document.getElementById("btnCampus").onclick=()=>{va=!va,Y0(),ba.visible=va,va?(pi(new b(0,40,52),new b(0,2,-7),1.6),Dt($("campus_an"))):(pi(new b(-23,17,30),new b(-7,3,0),1.4),Dt($("campus_aus")))};document.getElementById("btnPass").onclick=()=>{let{score:r,max:e}=Ia(),t=new Date().toLocaleDateString(U.lang==="de"?"de-CH":"en-GB"),n="";for(let c of le.slots){if(!ot(c.slot))continue;let l=U.placed[U.mode][c.slot],h=U.quests[c.slot]||{},{kat:u}=yn(c),d=l&&l.opt&&di[l.opt]?di[l.opt].ects:c.ects;n+=`<tr><td>${l&&l.opt||c.code}</td><td>${tn(c)}${l&&l.sp?" \xB7 "+l.sp:""}</td><td style="text-align:center">${d}</td><td style="text-align:center">[${u}]</td><td>${h.done?"\u2726 "+(h.note||""):""}</td></tr>`}let i="";for(let c of["fa","ki","fu"]){let l=le.felder[c];i+=`<h3 style="margin:14px 0 6px;color:${l.farbe}">${_e(l.name)}</h3>`;for(let h of le.kompetenzen.filter(u=>u.feld===c)){let u=e[h.id]?Math.round(r[h.id]/e[h.id]*100):0;if(i+=`<div style="display:flex;align-items:center;gap:8px;margin:3px 0;font-size:12px">
        <span style="width:260px">${h.id} \xB7 ${_e(h.name)}</span>
        <span style="flex:1;background:#eee;border-radius:4px;height:10px;overflow:hidden"><span style="display:block;height:100%;width:${u}%;background:${l.farbe}"></span></span>
        <span style="width:36px;text-align:right">${u}%</span></div>`,h.sub&&h.sub.length)for(let d of h.sub){let p=bm(d,r,e);i+=`<div style="display:flex;align-items:center;gap:8px;margin:1px 0 1px 22px;font-size:10.5px;color:#555">
            <span style="width:238px">${d.id} \xB7 ${_e(d.name)}</span>
            <span style="flex:1;background:#f2f2f2;border-radius:3px;height:6px;overflow:hidden"><span style="display:block;height:100%;width:${p}%;background:${l.farbe};opacity:.65"></span></span>
            <span style="width:36px;text-align:right">${p}%</span></div>`}}}i+='<p style="font-size:9.5px;color:#8b94ab;margin-top:4px">FS1\u2013FS12: AIComp-Future-Skills-Felder (Ehlers et al., 2024) \u2014 Detailebene zu Fu1\u2013Fu3.</p>';let s=K0(),a=`<!DOCTYPE html><html lang="${U.lang}"><head><meta charset="utf-8"><title>Kompetenzpass</title>
  <style>body{font-family:"Helvetica Neue",Arial,sans-serif;color:#1c2333;max-width:820px;margin:24px auto;padding:0 16px}
  h1{color:#0028a5;font-size:24px} table{border-collapse:collapse;width:100%;font-size:11.5px;margin-top:10px}
  td,th{border:1px solid #d8dce8;padding:5px 8px;text-align:left} th{background:#f0f3fa}
  .hint{font-size:10.5px;color:#5b6478;margin-top:18px;line-height:1.5}
  @media print {.noprint{display:none}}</style></head><body>
  <div class="noprint" style="float:right;text-align:right">
    <button onclick="print()" style="padding:10px 20px;border:0;background:#0028a5;color:#fff;border-radius:10px;cursor:pointer;font-weight:700;font-size:14px">\u{1F4BE} ${U.lang==="de"?"Als PDF speichern":"Save as PDF"}</button>
    <div style="font-size:10px;color:#5b6478;margin-top:4px">${U.lang==="de"?"Im Druckdialog \xABAls PDF sichern\xBB w\xE4hlen":"Choose 'Save as PDF' in the print dialog"}</div>
  </div>
  <h1>\u{1F393} ${$("pass")} \u2014 ${U.name||"\u2014"}</h1>
  <p style="font-size:12.5px;color:#5b6478">${$("passdatum")}: ${t} \xB7 ${U.mode==="serious"?$("modus_serious"):$("modus_frei")} \xB7 BSc: ${Fi("bsc")}/120 \xB7 MSc: ${Fi("msc")}/120 ${$("ects")}</p>
  ${s?`<img src="${s}" alt="Kompetenzhaus" style="width:100%;border-radius:12px;margin:8px 0">`:""}
  ${i}
  <h3 style="margin-top:18px">${$("bauplan")}</h3>
  <table><tr><th>Code</th><th>Modul</th><th>${$("ects")}</th><th>[A/B/C]</th><th>Quest \u2726</th></tr>${n}</table>
  <p class="hint">${_e(le.meta.hinweis)}<br>Kompetenzmodell: APA (2023); DGPs (2014); QAA (2023); Bass et al. (2025); Miao et al. (2024); Ehlers et al. (2024); Perkins et al. (2025).</p>
  </body></html>`,o=window.open("about:blank");if(o&&o.document)o.document.write(a),o.document.close();else{let c=new Blob([a],{type:"text/html"}),l=document.createElement("a");l.href=URL.createObjectURL(c),l.download="kompetenzpass.html",l.click(),URL.revokeObjectURL(l.href)}};function Au(){if(!U.envAuto)return;U.season=fu();let r=new Date,e=r.getHours()+r.getMinutes()/60;U.tod=Math.max(0,Math.min(100,Math.round((e-5.5)/17*100)));let t=document.getElementById("todSlider");t&&(t.value=U.tod),cr()}document.querySelectorAll("#envRow .envbtn[data-season]").forEach(r=>{r.onclick=()=>{U.envAuto=!1,U.season=r.dataset.season,at(),cr()}});document.getElementById("todSlider").oninput=r=>{U.envAuto=!1,U.tod=+r.target.value,at(),cr()};document.getElementById("btnEnvAuto").onclick=()=>{U.envAuto=!U.envAuto,at(),U.envAuto&&Au(),cr(),Dt($(U.envAuto?"envauto_an":"envauto_aus"))};setInterval(Au,6e4);document.getElementById("btnFoto").onclick=()=>{document.body.classList.add("foto");let r=Pt.position.clone(),e=Bt.target.clone(),t=om()&&Fi("msc")>0?new b(0,3.5,0):new b(-11,3.5,0);pi(new b(t.x-19,13,28),t,1.2,()=>{Xl(),vn.render(Xe,Pt);try{let n=document.createElement("a");n.href=vn.domElement.toDataURL("image/png"),n.download="kompetenzhaus-"+new Date().toISOString().slice(0,10)+".png",n.click(),Dt("\u{1F4F7} "+$("foto_hint"))}catch{}setTimeout(()=>{document.body.classList.remove("foto"),pi(r,e,1)},600)})};function K0(){vn.render(Xe,Pt);try{return vn.domElement.toDataURL("image/jpeg",.82)}catch{return null}}document.getElementById("togL").onclick=()=>document.getElementById("panelL").classList.toggle("open");document.getElementById("togR").onclick=()=>document.getElementById("panelR").classList.toggle("open");var vt=null;function st(r,e,t,n,i,s,a,o=0){let c=new J(new en(r,e,t,2,Math.min(.04,r/4)),new ue({color:n,roughness:.85}));return c.position.set(i,s,a),c.rotation.y=o,c}function Z0(r,e,t,n){let i=new Je,s=r.form==="slab"||r.form==="step",a=new ue({color:s?14276043:15986662,roughness:.97,side:mt}),o=new ue({color:s?11841702:13215863,roughness:.92}),c=e-.2,l=t-.15,h=n-.2,u=new J(new bt(c,.06,h),o);u.position.y=.05,i.add(u);let d=new J(new Qe(c,l),a);d.position.set(0,l/2,-h/2),i.add(d),d.userData.wallN=new b(0,0,1);let p=new J(new Qe(h,l),a.clone());p.rotation.y=Math.PI/2,p.position.set(-c/2,l/2,0),i.add(p),p.userData.wallN=new b(1,0,0);let f=new J(new Qe(h,l),a.clone());f.rotation.y=-Math.PI/2,f.position.set(c/2,l/2,0),i.add(f),f.userData.wallN=new b(-1,0,0);let g=r.gruppe,m=.08,_=r.code;if(s&&_==="06SM200-001"){for(let I=0;I<2;I++){let k=st(.52,.6,.5,16053488,-c*.3+I*.62,m+.3,-h*.32);i.add(k);let H=new J(new ai(.15,18),new ue({color:1845056,roughness:.25,metalness:.3}));H.position.set(-c*.3+I*.62,m+.32,-h*.32+.26),i.add(H)}let C=new J(new rt(.2,.16,.26,9),new ue({color:14263361,roughness:1,flatShading:!0}));C.position.set(c*.22,m+.13,h*.1),i.add(C);let L=new J(new rt(.012,.012,c*.7,5),new ue({color:9147563}));L.rotation.z=Math.PI/2,L.position.set(0,l*.78,h*.2),i.add(L),[14248523,4886745,15979342].forEach((I,k)=>i.add(st(.16,.22,.02,I,-.3+k*.3,l*.78-.12,h*.2)))}else if(s&&_==="06SM200-002"){let C=new J(new rt(.3,.3,.85,12),new ue({color:13193021,roughness:.55,metalness:.25}));C.position.set(-c*.28,m+.43,-h*.28),i.add(C);let L=new J(new rt(.05,.05,c*.75,8),new ue({color:10134197,metalness:.6,roughness:.35}));L.rotation.z=Math.PI/2,L.position.set(0,l*.85,-h/2+.12),i.add(L);let I=new J(new rt(.05,.05,l*.7,8),L.material);I.position.set(-c*.28,l*.5,-h/2+.12),i.add(I),i.add(st(.42,.55,.16,9147563,c*.28,l*.55,-h/2+.12));let k=new J(new ai(.09,14),new ue({color:16053488}));k.position.set(c*.28,l*.55,-h/2+.22),i.add(k)}else if(s&&_==="06SM200-003"){let C=new J(new rt(.02,.02,c*.7,6),new ue({color:9070146}));C.rotation.z=Math.PI/2,C.position.set(0,l*.7,-h*.3),i.add(C),[10405,14248523,2792847].forEach((L,I)=>i.add(st(.2,.34,.06,L,-.3+I*.3,l*.7-.2,-h*.3))),i.add(st(c*.6,.09,.28,9070146,0,m+.1,h*.2))}else if(s&&_==="06SM200-500"){for(let C=0;C<2;C++){let L=st(.42,1,.4,1844019,-c*.25+C*.6,m+.5,-h*.3);i.add(L);for(let I=0;I<4;I++){let k=new J(new Qe(.3,.02),new ue({color:988970,emissive:I%2?3526783:4886745,emissiveIntensity:.9}));k.position.set(-c*.25+C*.6,m+.24+I*.2,-h*.3+.21),i.add(k)}}i.add(st(.7,.06,.4,9070146,c*.24,m+.36,h*.12))}else if(s&&_==="06SM200-501"){let C=st(1.1,1.05,.26,9070146,-c*.2,m+.53,-h*.32);i.add(C),[14248523,10405,2792847,14263361,6185166,14774357].forEach((L,I)=>i.add(st(.26,.09,.2,L,-c*.2-.38+I%3*.38,m+.4+Math.floor(I/3)*.34,-h*.32)))}else if(s&&_==="06SM200-502"){for(let C=0;C<2;C++)i.add(st(.9,.95,.24,10127986,-c*.22+C*1,m+.48,-h*.33));[13287336,12173519,14263361,13287336].forEach((C,L)=>i.add(st(.3,.22,.3,C,-c*.3+L%2*.5,m+.3+Math.floor(L/2)*.35,-h*.33)))}else if(g==="meth"||g==="mein"){i.add(st(.9,.06,.5,9070146,-c*.2,m+.38,-h*.25));let C=new J(new Qe(.5,.32),new ue({color:792624,emissive:8369384,emissiveIntensity:.55}));C.position.set(-c*.2,m+.62,-h*.25),i.add(C),i.add(st(.34,.5,.34,3752282,-c*.2,m+.25,h*.05))}else if(g==="prop"){for(let C=0;C<2;C++)for(let L=0;L<3;L++)i.add(st(.34,.42,.3,4156616,(L-1)*.5,m+.21,h*.05+C*.45));i.add(st(.8,.55,.35,9070146,0,m+.28,-h*.3))}else if(g==="klin"){i.add(st(.45,.4,.42,14248523,-c*.22,m+.2,0,.5)),i.add(st(.45,.4,.42,2792847,c*.22,m+.2,0,-.5)),i.add(st(.32,.3,.32,9070146,0,m+.15,-h*.05));let C=new J(new Jt(.16,0),new ue({color:5149760,flatShading:!0}));C.position.set(c*.34,m+.45,-h*.32),i.add(C),i.add(st(.1,.28,.1,12159578,c*.34,m+.14,-h*.32))}else if(g==="enk"){i.add(st(.3,.55,.3,14212326,0,m+.28,-h*.15));let C=new J(new Jt(.2,1),new ue({color:15245492,roughness:.6,flatShading:!0}));C.position.set(0,m+.72,-h*.15),C.name="spin",i.add(C)}else if(g==="swod"){let C=new J(new rt(.42,.42,.06,12),new ue({color:9070146,roughness:.85}));C.position.set(0,m+.4,0),i.add(C),i.add(st(.08,.4,.08,7033144,0,m+.2,0));for(let L=0;L<4;L++){let I=L/4*Math.PI*2;i.add(st(.3,.38,.28,14263361,Math.cos(I)*.72,m+.19,Math.sin(I)*.72,-I))}}else{let C=st(1.1,1.1,.24,9070146,-c*.24,m+.55,-h*.36);i.add(C),[14248523,2792847,4156616,14263361,6185166].forEach((L,I)=>i.add(st(.1,.26,.16,L,-c*.24-.4+I*.2,m+.78,-h*.36))),i.add(st(.7,.06,.45,11109726,c*.2,m+.38,0)),i.add(st(.3,.44,.3,3752282,c*.2,m+.22,h*.28))}let v=new ea(16769971,s?.75:.95,Math.max(c,h)*3.2,1.8);v.position.set(0,l*.86,0),i.add(v);let y=new J(new oi(.14,.12,10,1,!0),new ue({color:15979342,side:mt,emissive:16769971,emissiveIntensity:.35}));if(y.position.set(0,l*.9,0),i.add(y),!s){let C=new J(new Qe(c,h),new ue({color:15262938,side:mt,roughness:1}));C.rotation.x=Math.PI/2,C.position.y=l,i.add(C)}if(s){for(let C of[-c*.28,c*.28]){let L=new J(new Qe(.44,.2),new ue({color:12376302,emissive:12376302,emissiveIntensity:.4}));L.position.set(C,l*.9,-h/2+.02),i.add(L)}if(h>3.2){let L=l/7;for(let I=0;I<6;I++){let k=new J(new bt(.78,L,.36),Pl.clone());k.position.set(c/2-.44,L/2+I*L,h/2-.28-(5-I)*.37),i.add(k)}}}else{let C=new J(new ai(Math.min(c,h)*.32,22),new ue({color:new xe(le.gruppen[r.gruppe].farbe).lerp(new xe(16777215),.62),roughness:1}));C.rotation.x=-Math.PI/2,C.position.y=.09,i.add(C);let L=st(.5,.38,.03,15921385,c/2-.06,l*.6,0,Math.PI/2);i.add(L);let I=new J(new Qe(.4,.28),new ue({color:10404832}));I.rotation.y=-Math.PI/2,I.position.set(c/2-.085,l*.6,0),i.add(I);let k=new J(new oi(.09,.12,4),new ue({color:5143130,flatShading:!0}));k.rotation.y=-Math.PI/2,k.position.set(c/2-.09,l*.57,.03),i.add(k)}r.code==="06SM200-003"&&[{p:"P1",info:{de:"P1 \xB7 \xABWie \u2039denkt\u203A ein LLM?\xBB \u2014 Live-Demo, Falschinfo finden (KI4)",en:"P1 \xB7 'How does an LLM think?' \u2014 live demo, spotting misinformation (KI4)"}},{p:"P2",info:{de:"P2 \xB7 Spielregeln & Disclosure \u2014 \xABassistieren, nicht ersetzen \u2014 deklarieren \u2014 verifizieren\xBB (KI5)",en:"P2 \xB7 Rules & disclosure \u2014 'assist, don't replace \u2014 declare \u2014 verify' (KI5)"}},{p:"P3",info:{de:"P3 \xB7 Fakten-Check \u2014 erfundene Referenzen gegen das Lehrbuch pr\xFCfen (KI6)",en:"P3 \xB7 Fact check \u2014 testing invented references against the textbook (KI6)"}},{p:"P4",info:{de:"P4 \xB7 Erste Nutzung mit Haltung \u2014 Prompt-Duell, Mit-/Ohne-KI-Reflexion (KI1)",en:"P4 \xB7 First use with attitude \u2014 prompt duel, with/without-AI reflection (KI1)"}}].forEach((L,I)=>{let k=new Je,H=new J(new Qe(.34,.44),new ue({color:16777215,roughness:.7})),O=zl(L.p,"#0028a5");O.scale.set(.4,.16,1),O.position.z=.02,k.add(H,O),k.rotation.y=Math.PI/2,k.position.set(-c/2+.03,l*.55,-h*.3+I*.5),k.children.forEach(K=>K.userData.info=L.info),k.userData.info=L.info,i.add(k)});let{komp:M,haupt:w}=yn(r),A=[...M.fa||[],...M.ki||[],...M.fu||[]].slice(0,6);return A.forEach((C,L)=>{let I=lr[C];if(!I)return;let k=le.felder[I.feld].farbe,H=new Je,O=new J(new Qe(.56,.42),new ue({color:16777215,roughness:.6})),K=zl(C,k);K.scale.set(.62,.24,1),K.position.z=.02,H.add(O,K);let V=Math.min(3,A.length),Y=(L%V-(V-1)/2)*.75,Z=l*.62-Math.floor(L/V)*.55;H.position.set(Y,Z,-h/2+.03),H.userData.kompId=C,H.children.forEach(se=>se.userData.kompId=C),i.add(H)}),i.traverse(C=>{C.isMesh&&(C.castShadow=!1,C.receiveShadow=!1)}),i}function wm(r){vt&&Ta();let e=St[r],t=Lt[r];if(!e||!t||!["box","tower","wing","bay","slab","step"].includes(e.form))return;let n=e.form==="slab"||e.form==="step",i=e.pos.w*gt,s=e.pos.d*gt,a=n?ya-.12:(e.form==="wing"?1.7:e.pos.h)*ui,o=Z0(e,i,a,s);o.position.copy(t.position),n&&(o.position.y=.24-ya),Xe.add(o);let c=[];if(t.traverse(g=>{g.isMesh&&g.material&&(c.push({mat:g.material,opacity:g.material.opacity,transparent:g.material.transparent}),g.material.transparent=!0,g.material.opacity=.13,g.material.depthWrite=!1,g.material.needsUpdate=!0)}),n)for(let g of[Gl,yu,xu])g.transparent=!0,g.opacity=.14,g.depthWrite=!1,g.needsUpdate=!0;let l=e.pos.z>=0||e.form==="wing"?1:-1,h=o.position.clone().add(new b(0,a*.45,0)),u=n?s*.62+1.6:s*1.9+1.2,d=n?o.position.clone().add(new b(0,ya+2.6,l*u)):t.position.clone().add(new b(0,a*.55,l*u)),p=Bt.minDistance;Bt.minDistance=.4,document.body.classList.add("inroom"),pi(d,h,1.1);let f=document.createElement("button");f.className="iconbtn blue",f.style.cssText="position:fixed;left:50%;transform:translateX(-50%);bottom:18px;z-index:26",f.textContent="\u{1F6AA} "+$("verlassen"),f.onclick=Ta,document.body.appendChild(f),hs(),vt={id:r,group:o,saved:c,btn:f,prevMin:p,keller:n},SND.pick()}function Ta(){if(!vt)return;if(document.body.classList.remove("inroom"),Xe.remove(vt.group),vt.saved.forEach(e=>{e.mat.opacity=e.opacity,e.mat.transparent=e.transparent,e.mat.depthWrite=!0,e.mat.needsUpdate=!0}),vt.keller)for(let e of[Gl,yu,xu])e.opacity=1,e.transparent=!1,e.depthWrite=!0,e.needsUpdate=!0;vt.btn.remove(),Bt.minDistance=vt.prevMin;let r=Lt[vt.id];r&&pi(r.position.clone().add(new b(-9,8,15)),r.position.clone(),1),vt=null}function J0(){let r=document.getElementById("coach");if(ot("003")){document.getElementById("obStart").textContent=$("tour_fertig"),hn("onboard");return}let e=St["003"],t=le.haeuser[e.haus],n=new b(t.origin[0]+e.pos.x*gt,.7,t.origin[2]+e.pos.z*gt),i=window.innerWidth<720;pi(new b(n.x+3,i?6.5:4.5,n.z+(i?13:8)),n,1.7,()=>{!ot("003")&&!U.onboarded&&r.classList.contains("open")&&(Bl(e),mi="003",Wt())}),r.style.cssText="left:50%;transform:translateX(-50%);bottom:26px",r.innerHTML=`<b>${$("fb1_t")}</b>${$("fb1")}<div class="cactions"><button data-fbskip style="background:rgba(255,255,255,.18);color:#fff">${$("fb1_skip")}</button><button data-fbgo>${$("fb1_go")}</button></div>`,r.classList.add("open"),r.querySelector("[data-fbgo]").onclick=()=>{SND.unlock(),ot("003")||Ca(St["003"])},r.querySelector("[data-fbskip]").onclick=()=>{r.classList.remove("open"),Ui(),hn("onboard")}}function jl(){if(U.tourDone)return;if(document.getElementById("milestone").classList.contains("open")){setTimeout(jl,2500);return}let r=document.getElementById("coach"),e=window.innerWidth<=1080,t=[{sel:"#panelL",open:"panelL",tt:"tour1_t",tx:"tour1",css:"left:322px;top:120px"},{sel:"#card",tt:"tour2_t",tx:"tour2",css:"left:50%;transform:translateX(-50%);bottom:calc(46vh + 20px)"},{sel:"#panelR",open:"panelR",tt:"tour3_t",tx:"tour3",css:"right:322px;top:120px;left:auto"}],n=0,i=()=>{if(document.querySelectorAll(".coach-target").forEach(o=>o.classList.remove("coach-target")),e&&(document.getElementById("panelL").classList.remove("open"),document.getElementById("panelR").classList.remove("open")),n>=t.length){r.classList.remove("open"),U.tourDone=!0,at();return}let s=t[n];e&&s.open&&document.getElementById(s.open).classList.add("open");let a=document.querySelector(s.sel);a&&a.offsetParent!==null&&a.classList.add("coach-target"),r.style.cssText=s.css,r.innerHTML=`<b>${$(s.tt)}</b>${$(s.tx)}<div class="cactions"><span class="cstep">${n+1}/3</span><button>${n===t.length-1?$("tour_fertig"):$("tour_weiter")}</button></div>`,r.classList.add("open"),r.querySelector("button").onclick=()=>{n++,SND.pick(),i()}};i()}function Q0(){let r=window.claude&&typeof window.claude.complete=="function"?window.claude.complete.bind(window.claude):null;if(!r)return;let e=document.getElementById("tutorFab"),t=document.getElementById("tutor"),n=document.getElementById("tutorMsgs");e.style.display="block";let i=[],s="tutor",a=null,o=(h,u)=>{let d=document.createElement("div");return d.className="tmsg "+h,d.textContent=u,n.appendChild(d),n.scrollTop=n.scrollHeight,d};e.onclick=()=>{t.classList.toggle("open"),t.classList.contains("open")&&!n.children.length&&o("bot",$("tutor_hi"))},document.getElementById("tutorClose").onclick=()=>t.classList.remove("open");let c=()=>{if(s==="vignette"&&a){let d=_u(a);return`ROLLENSPIEL-MODUS im Lernspiel \xABDas Kompetenzhaus\xBB (Psychologiestudium UZH). Du spielst eine FIKTIVE Klientin/Person passend zum Modul \xAB${tn(a)}\xBB (Kontext: ${d?_e(d.heute).slice(0,240):""}). Regeln: (1) Alles ist erfunden \u2014 keine realen Ratschl\xE4ge, keine echten Diagnosen an die Nutzenden. (2) Bleibe konsequent in der Rolle, antworte kurz (2\u20134 S\xE4tze), realistisch, aber didaktisch ergiebig. (3) KEINE Schilderung akuter Suizidalit\xE4t oder schwerer Krisen; falls die Nutzenden solche Themen einbringen, verlasse die Rolle und verweise auf professionelle Hilfe (in der Schweiz: 143 / 147). (4) Wenn die Nutzenden \xABStopp\xBB schreiben, verlasse die Rolle und stelle GENAU EINE kurze Reflexionsfrage zum Gespr\xE4ch. Sprache: ${U.lang==="de"?"Deutsch (Schweizer Rechtschreibung)":"English"}.`}let h=le.slots.filter(d=>ot(d.slot)).map(d=>tn(d)).join("; ")||"-",u=Tu();return`Du bist der \xABKI-Baututor\xBB im Lernspiel \xABDas Kompetenzhaus\xBB (Psychologiestudium UZH, BSc/MSc; Module = Bausteine eines Hauses; Kompetenzen: Fa1\u2013Fa10 fachlich, KI1\u2013KI6 KI, Fu1\u2013Fu3 Future Skills; Pr\xFCfungslogik [A] KI-frei / [B] teilweise / [C] KI-integriert; Basis: Kompetenzaufbaumodell 02.07.2026, ein ENTWURF als Gespr\xE4chsbasis). Antworte kurz (max. 120 W\xF6rter), freundlich, auf ${U.lang==="de"?"Deutsch (Schweizer Rechtschreibung)":"English"}. Keine Rechtsausk\xFCnfte; verweise bei Studienberatung an die Studienprogrammleitung. Spielstand: gebaut = ${h}. Empfohlener n\xE4chster Baustein: ${u?tn(St[u]):"-"}.`};cu={open(h,u){s=h||"tutor",a=u||null,i=[],t.classList.add("open"),s==="vignette"&&(n.innerHTML="",o("bot",$("ai_vignette_sys")),l("(Beginne das Gespr\xE4ch mit einer kurzen Vorstellung deiner fiktiven Rolle.)",!0))}};let l=async(h,u)=>{let d=document.getElementById("tutorInput"),p=h||d.value.trim();if(!p)return;h||(d.value=""),u||o("me",p);let f=o("bot","\u2026"),g="Studierende:r",m=s==="vignette"?"Klientin":"Baututor";i.push(g+": "+p);try{let _=await r(c()+`

`+i.slice(-8).join(`
`)+`
`+m+":");f.textContent=String(_).trim(),i.push(m+": "+f.textContent)}catch{f.textContent=$("tutor_err")}s==="vignette"&&(p.toLowerCase().startsWith("stopp")||p.toLowerCase().startsWith("stop"))&&(s="tutor",a=null,i=[])};document.getElementById("tutorSend").onclick=()=>l(),document.getElementById("tutorInput").addEventListener("keydown",h=>{h.key==="Enter"&&l()})}function Ru(r,e,t="application/json"){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:t})),n.download=r,n.click(),URL.revokeObjectURL(n.href)}function e_(){let r=U.msSeen[U.mode]||[],e=le.meilensteine.filter(t=>r.includes(t.id)).map(t=>({"@context":"https://www.w3.org/ns/credentials/v2",type:["VerifiableCredential","OpenBadgeCredential"],name:t.name.de,description:t.text.de,credentialSubject:{type:["AchievementSubject"],identifier:U.name||"anonym",achievement:{type:["Achievement"],name:t.name.de,description:t.text.de,criteria:{narrative:"Meilenstein im Kompetenzhaus (Selbstdeklaration, unsigniert \u2014 Entwurf)"},alignment:le.kompetenzen.map(n=>({type:["Alignment"],targetName:n.id+" "+n.name.de}))}},issuer:{type:["Profile"],name:"Das Kompetenzhaus \u2014 Psychologisches Institut UZH (Entwurf, unsigniert)"},validFrom:new Date().toISOString(),proof:[]}));Ru("kompetenzhaus-badges.json",JSON.stringify(e,null,2))}function t_(){let{score:r,max:e}=Ia(),t=`# Kompetenzportfolio \u2014 ${U.name||"\u2014"}

_${$("passdatum")}: ${new Date().toLocaleDateString("de-CH")} \xB7 ${U.mode==="serious"?"Serious Mode":"Freies Bauen"} \xB7 BSc ${Fi("bsc")}/120 ECTS \xB7 MSc ${Fi("msc")}/120 ECTS_

> Entwurf auf Basis des Kompetenzaufbaumodells vom 02.07.2026 \u2014 Selbstdeklaration, kein offizieller Leistungsnachweis.

## Kompetenzprofil

`;for(let n of["fa","ki","fu"]){t+=`### ${le.felder[n].name.de}

`;for(let i of le.kompetenzen.filter(s=>s.feld===n)){let s=e[i.id]?Math.round(r[i.id]/e[i.id]*100):0,a=pu(i.id);t+=`- **${i.id} ${i.name.de}** \u2014 ${s}%${a?`, Stufe ${a}`:""}${Hl(i.id,a)?`
  - _${Hl(i.id,a)}_`:""}
`}t+=`
`}t+=`## Module & Reflexionen

`;for(let n of le.slots){if(!ot(n.slot))continue;let i=U.quests[n.slot]||{},s=cs(n);t+=`- **${tn(n)}** (${n.ects} ECTS)${U.quiz[s]?" \xB7 Quiz \u2713":""}${i.done?" \xB7 Quest \u2726":""}${i.note?`
  - Merksatz: \xAB${i.note}\xBB`:""}
`}Ru("kompetenzhaus-portfolio.md",t,"text/markdown")}var rm=null;function Dt(r){let e=document.getElementById("toast");e.textContent=r,e.classList.add("show"),clearTimeout(rm),rm=setTimeout(()=>e.classList.remove("show"),3200)}document.getElementById("obStart").onclick=()=>{U.name=document.getElementById("obName").value.trim().slice(0,40),U.onboarded=!0,at(),document.getElementById("modalOnboard").classList.remove("open"),SND.unlock();let r=ot("003")?Tu():"003";r&&os(r),setTimeout(jl,900)};document.getElementById("modalOnboard").addEventListener("click",r=>{(r.target===document.getElementById("modalOnboard")||r.target.hasAttribute("data-close"))&&!U.onboarded&&!$t.active&&(U.onboarded=!0,at(),setTimeout(jl,900))});document.getElementById("btnBadges").onclick=e_;document.getElementById("btnOlat").onclick=t_;document.getElementById("btnFb").onclick=()=>{let r=Object.entries(U.fb||{});if(!r.length){Dt($("fb_leer"));return}let e=i=>'"'+String(i||"").replace(/"/g,'""')+'"',t={g:"gruen",y:"gelb",r:"rot"},n=`\uFEFFcode;modul;ampel;kommentar;datum
`;for(let[i,s]of r){let a=St[i];if(!a)continue;let o=(U.placed[U.mode][i]||{}).opt||a.code;n+=[e(o),e(tn(a)),t[s.a]||"",e(s.note),s.ts||""].join(";")+`
`}Ru("kompetenzhaus-feedback-"+new Date().toISOString().slice(0,10)+".csv",n,"text/csv;charset=utf-8"),Dt("\u{1F6A6} "+$("fb_exported").replace("{n}",r.length))};var sm={de:[["v7 \xB7 Juli 2026","Echter Keller unter dem Bodenniveau (Sockel ragen ins Erdreich), Haus vergr\xF6ssert & Innenr\xE4ume 1:1 an die Aussenh\xFClle gekoppelt, Porch mit Vordach und Stufen, Erstbau-Sequenz f\xFCr neue Besucher:innen, Bauh\xFCtte mit Evidenz zu den 8 Lehrelementen, Ampel-Feedback \u{1F6A6} an jedem Modul mit CSV-Export."],["v6 \xB7 Juli 2026","Mobile-\xDCberarbeitung (Tour, Kontraste, gr\xF6ssere Ziele), Quiz mit Erkl\xE4rung und Sofort-Wiederholung, 7 Karrierewege, Faktenkorrektur IPS-Leistungsnachweis [B]."],["v5 \xB7 Juli 2026","Baukasten-Chips in der Modul-Karte, Vorstufe-\u24EA-Briefkasten, Minor-Beet, KI-Suite in der Artifact-Version."],["v4 \xB7 Juli 2026","Begehbare Kellerr\xE4ume, 12 Future-Skills-Felder (AIComp), Innenraum-Politur, Kompetenzpass als PDF."],["v3 \xB7 Juli 2026","Quiz-Gate im Serious Mode, Karriere-Profil, Innenansicht mit Kompetenz-Tafeln, Foto-Modus, Open-Badges- und Portfolio-Export."]],en:[["v7 \xB7 July 2026","A real basement below ground level (plinths reach into the earth), bigger house with interiors matched 1:1 to the exterior shell, porch with canopy and steps, first-build sequence for new visitors, site hut with evidence for the 8 teaching elements, traffic-light feedback \u{1F6A6} on every module with CSV export."],["v6 \xB7 July 2026","Mobile overhaul (tour, contrast, larger targets), quiz with explanations and instant retry, 7 career paths, factual fix for the IPS assessment [B]."],["v5 \xB7 July 2026","Teaching-toolkit chips on module cards, stage-\u24EA mailbox, minor garden bed, AI suite in the artifact edition."],["v4 \xB7 July 2026","Walkable basement rooms, 12 future-skills fields (AIComp), interior polish, passport as PDF."],["v3 \xB7 July 2026","Quiz gate in serious mode, career profile, interior view with competence plaques, photo mode, Open Badges and portfolio export."]]};document.getElementById("btnChangelog").onclick=()=>{let r=sm[U.lang]||sm.de;document.getElementById("clogList").innerHTML=r.map(([e,t])=>`<div class="bhrow"><b>${e}</b><p>${t}</p></div>`).join(""),document.getElementById("modalMenu").classList.remove("open"),hn("changelog")};var n_=new ia;function Am(){let r=window.innerWidth,e=window.innerHeight;vn.setSize(r,e,!1),Pt.aspect=r/e,Pt.updateProjectionMatrix()}window.addEventListener("resize",Am);Am();var Ot=0,Rm=0;function Cm(){requestAnimationFrame(Cm),Xl()}function Xl(){Rm=performance.now();let r=Math.min(.5,n_.getDelta()),e=r;ou>0&&(ou-=r,e=0),Ot+=e;for(let t=xa.length-1;t>=0;t--){let n=xa[t];n.t+=e;let i=Math.min(1,n.t/n.dur);n.fn(n.ease(i)),i>=1&&(xa.splice(t,1),n.onDone&&n.onDone())}if(Ln){let t=1+Math.sin(Ot*5)*.02;Ln.scale.set(t,t,t)}for(let t of Object.values(Lt)){let n=t.getObjectByName("sparkle");n&&(n.rotation.y+=e*2.4,n.position.y+=Math.sin(Ot*3)*.0022);let i=t.getObjectByName("flag");i&&(i.rotation.y=Math.sin(Ot*2.2)*.25);let s=t.getObjectByName("pennant");if(s){let a=s.getObjectByName("pflag");a&&(a.rotation.y=Math.sin(Ot*3.1+t.position.x)*.35)}}if(sr.traverse(t=>{t.name==="flag"&&(t.rotation.y=Math.sin(Ot*1.8)*.3)}),vt&&vt.group.traverse(t=>{if(t.name==="spin"&&(t.rotation.y+=e*.8),t.userData.wallN){let n=Pt.position.clone().sub(vt.group.position).normalize(),s=t.userData.wallN.dot(n)<-.25?.12:1;t.scale.y+=(s-t.scale.y)*Math.min(1,e*9),t.position.y=t.geometry.parameters.height/2*t.scale.y}}),ar.length&&ar[0].emissiveIntensity>0){let t=.9+Math.sin(Ot*7.3)*.04+Math.sin(Ot*13.7)*.03;for(let n of ar)n.emissiveIntensity>0&&(n.emissiveIntensity=t)}if(rs.visible){let t=hu[U.season],n=new Ie,i=new Kt;for(let s=0;s<Eu;s++){let a=I0[s];a.p.y-=t.ambFall*e*(.6+a.s*.5),a.p.x+=Math.sin(Ot*.8+a.ph)*e*.7,a.p.y<.2&&(a.p.y=16+Math.random()*5),i.set(Ot*1.4+a.ph,a.ph,Ot*.9),n.makeRotationFromEuler(i),n.scale(new b(a.s,a.s,a.s)),n.setPosition(a.p),rs.setMatrixAt(s,n)}rs.instanceMatrix.needsUpdate=!0}if(uu){let t=Math.sin(Ot*13);At.userData.legs.forEach((n,i)=>n.rotation.x=(i?1:-1)*t*.65),At.userData.arms.forEach((n,i)=>n.rotation.x=(i?-1:1)*t*.5)}else At.rotation.y+=Math.sin(Ot*.6)*.0012;for(let t of dm)t.position.x+=t.userData.v*e,t.position.x>75&&(t.position.x=-75);if(Fl.material.opacity>0){let t=Fl.geometry.attributes.position;for(let n=0;n<t.count;n++)t.setY(n,.7+Math.abs(Math.sin(Ot*.7+n*2.1))*2.2),t.setX(n,t.getX(n)+Math.sin(Ot*.5+n)*.008);t.needsUpdate=!0,Fl.material.size=.3+Math.sin(Ot*4)*.08}if(Bt.update(),Nl>0){Nl-=e;let t=Nl*.5;Pt.position.x+=(Math.random()-.5)*t,Pt.position.y+=(Math.random()-.5)*t}vn.render(Xe,Pt)}gu();Tm();var am=q0();Vl();pm();Wt();cn();U.onboarded?U.envAuto&&Au():(U.season=fu(),U.tod=62);cr();document.getElementById("todSlider").value=U.tod;Q0();wa||setTimeout(()=>Dt($("storage_warn")),1500);!am&&!U.onboarded?setTimeout(J0,700):!am&&!U.tourDone&&Object.keys(U.placed[U.mode]).length<3&&setTimeout(jl,1200);var ql=(r,e)=>{let t=document.getElementById(r);t&&e&&(t.onclick=()=>{document.getElementById("modalMenu").classList.remove("open"),e.click()})};ql("btnCampusM",document.getElementById("btnCampus"));ql("btnShareM",document.getElementById("btnShare"));ql("btnSoundM",document.getElementById("btnSound"));ql("btnFotoM",document.getElementById("btnFoto"));window.__game={get state(){return U},checkMilestones:xm,save:at,step:Xl,enterRoom:wm,leaveRoom:Ta,openBauhuette:Mm,get interior(){return vt?{id:vt.id,opacity:vt.saved[0]?vt.saved[0].mat.opacity:null}:null},get tweens(){return xa.map(r=>({t:r.t,dur:r.dur}))},get frame(){return Ot},placeByChip:r=>{let e=St[r];return e?(os(r),Ca(e)):!1}};Cm();setInterval(()=>{performance.now()-Rm>400&&Xl()},250);})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
