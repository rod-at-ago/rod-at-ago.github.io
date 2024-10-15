function ht(t,e){t.indexOf(e)===-1&&t.push(e)}function Xt(t,e){const s=t.indexOf(e);s>-1&&t.splice(s,1)}const st=(t,e,s)=>Math.min(Math.max(s,t),e),d={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},R=t=>typeof t=="number",w=t=>Array.isArray(t)&&!R(t[0]),dt=(t,e,s)=>{const n=e-t;return((s-t)%n+n)%n+t};function pt(t,e){return w(t)?t[dt(0,t.length,e)]:t}const nt=(t,e,s)=>-s*t+s*e+t,it=()=>{},T=t=>t,Z=(t,e,s)=>e-t===0?1:(s-t)/(e-t);function at(t,e){const s=t[t.length-1];for(let n=1;n<=e;n++){const i=Z(0,e,n);t.push(nt(s,1,i))}}function mt(t){const e=[0];return at(e,t-1),e}function gt(t,e=mt(t.length),s=T){const n=t.length,i=n-e.length;return i>0&&at(e,i),a=>{let r=0;for(;r<n-2&&!(a<e[r+1]);r++);let o=st(0,1,Z(e[r],e[r+1],a));return o=pt(s,r)(o),nt(t[r],t[r+1],o)}}const rt=t=>Array.isArray(t)&&R(t[0]),B=t=>typeof t=="object"&&!!t.createAnimation,F=t=>typeof t=="function",yt=t=>typeof t=="string",P={ms:t=>t*1e3,s:t=>t/1e3},ot=(t,e,s)=>(((1-3*s+3*e)*t+(3*s-6*e))*t+3*e)*t,vt=1e-7,Tt=12;function At(t,e,s,n,i){let a,r,o=0;do r=e+(s-e)/2,a=ot(r,n,i)-t,a>0?s=r:e=r;while(Math.abs(a)>vt&&++o<Tt);return r}function M(t,e,s,n){if(t===e&&s===n)return T;const i=a=>At(a,0,1,t,s);return a=>a===0||a===1?a:ot(i(a),e,n)}const bt=(t,e="end")=>s=>{s=e==="end"?Math.min(s,.999):Math.max(s,.001);const n=s*t,i=e==="end"?Math.floor(n):Math.ceil(n);return st(0,1,i/t)},J={ease:M(.25,.1,.25,1),"ease-in":M(.42,0,1,1),"ease-in-out":M(.42,0,.58,1),"ease-out":M(0,0,.58,1)},St=/\((.*?)\)/;function K(t){if(F(t))return t;if(rt(t))return M(...t);if(J[t])return J[t];if(t.startsWith("steps")){const e=St.exec(t);if(e){const s=e[1].split(",");return bt(parseFloat(s[0]),s[1].trim())}}return T}class Zt{constructor(e,s=[0,1],{easing:n,duration:i=d.duration,delay:a=d.delay,endDelay:r=d.endDelay,repeat:o=d.repeat,offset:f,direction:g="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=T,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((m,l)=>{this.resolve=m,this.reject=l}),n=n||d.easing,B(n)){const m=n.createAnimation(s);n=m.easing,s=m.keyframes||s,i=m.duration||i}this.repeat=o,this.easing=w(n)?T:K(n),this.updateDuration(i);const j=gt(s,f,w(n)?n.map(K):T);this.tick=m=>{var l;a=a;let h=0;this.pauseTime!==void 0?h=this.pauseTime:h=(m-this.startTime)*this.rate,this.t=h,h/=1e3,h=Math.max(h-a,0),this.playState==="finished"&&this.pauseTime===void 0&&(h=this.totalDuration);const x=h/this.duration;let D=Math.floor(x),y=x%1;!y&&x>=1&&(y=1),y===1&&D--;const V=D%2;(g==="reverse"||g==="alternate"&&V||g==="alternate-reverse"&&!V)&&(y=1-y);const E=h>=this.totalDuration?1:Math.min(y,1),b=j(this.easing(E));e(b),this.pauseTime===void 0&&(this.playState==="finished"||h>=this.totalDuration+r)?(this.playState="finished",(l=this.resolve)===null||l===void 0||l.call(this,b)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){const e=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=e-this.pauseTime:this.startTime||(this.startTime=e),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var e;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(e=this.reject)===null||e===void 0||e.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(e){this.duration=e,this.totalDuration=e*(this.repeat+1)}get currentTime(){return this.t}set currentTime(e){this.pauseTime!==void 0||this.rate===0?this.pauseTime=e:this.startTime=performance.now()-e/this.rate}get playbackRate(){return this.rate}set playbackRate(e){this.rate=e}}class wt{setAnimation(e){this.animation=e,e==null||e.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const $=new WeakMap;function ct(t){return $.has(t)||$.set(t,{transforms:[],values:new Map}),$.get(t)}function xt(t,e){return t.has(e)||t.set(e,new wt),t.get(e)}const Dt=["","X","Y","Z"],Et=["translate","scale","rotate","skew"],C={x:"translateX",y:"translateY",z:"translateZ"},Q={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},Ot={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:Q,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:T},skew:Q},I=new Map,G=t=>`--motion-${t}`,U=["x","y","z"];Et.forEach(t=>{Dt.forEach(e=>{U.push(t+e),I.set(G(t+e),Ot[t])})});const Mt=(t,e)=>U.indexOf(t)-U.indexOf(e),Pt=new Set(U),lt=t=>Pt.has(t),Rt=(t,e)=>{C[e]&&(e=C[e]);const{transforms:s}=ct(t);ht(s,e),t.style.transform=Ft(s)},Ft=t=>t.sort(Mt).reduce(It,"").trim(),It=(t,e)=>`${t} ${e}(var(${G(e)}))`,W=t=>t.startsWith("--"),Y=new Set;function jt(t){if(!Y.has(t)){Y.add(t);try{const{syntax:e,initialValue:s}=I.has(t)?I.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:s})}catch{}}}const L=(t,e)=>document.createElement("div").animate(t,e),k={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{L({opacity:[1]})}catch{return!1}return!0},finished:()=>!!L({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{L({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},N={},S={};for(const t in k)S[t]=()=>(N[t]===void 0&&(N[t]=k[t]()),N[t]);const Vt=.015,_t=(t,e)=>{let s="";const n=Math.round(e/Vt);for(let i=0;i<n;i++)s+=t(Z(0,n-1,i))+", ";return s.substring(0,s.length-2)},tt=(t,e)=>F(t)?S.linearEasing()?`linear(${_t(t,e)})`:d.easing:rt(t)?qt(t):t,qt=([t,e,s,n])=>`cubic-bezier(${t}, ${e}, ${s}, ${n})`;function zt(t,e){for(let s=0;s<t.length;s++)t[s]===null&&(t[s]=s?t[s-1]:e());return t}const Ct=t=>Array.isArray(t)?t:[t];function X(t){return C[t]&&(t=C[t]),lt(t)?G(t):t}const z={get:(t,e)=>{e=X(e);let s=W(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!s&&s!==0){const n=I.get(e);n&&(s=n.initialValue)}return s},set:(t,e,s)=>{e=X(e),W(e)?t.style.setProperty(e,s):t.style[e]=s}};function ut(t,e=!0){if(!(!t||t.playState==="finished"))try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch{}}function Ut(t,e){var s;let n=(e==null?void 0:e.toDefaultUnit)||T;const i=t[t.length-1];if(yt(i)){const a=((s=i.match(/(-?[\d.]+)([a-z%]*)/))===null||s===void 0?void 0:s[2])||"";a&&(n=r=>r+a)}return n}function $t(){return window.__MOTION_DEV_TOOLS_RECORD}function Gt(t,e,s,n={},i){const a=$t(),r=n.record!==!1&&a;let o,{duration:f=d.duration,delay:g=d.delay,endDelay:j=d.endDelay,repeat:m=d.repeat,easing:l=d.easing,persist:h=!1,direction:x,offset:D,allowWebkitAcceleration:y=!1}=n;const V=ct(t),E=lt(e);let b=S.waapi();E&&Rt(t,e);const p=X(e),_=xt(V.values,p),v=I.get(p);return ut(_.animation,!(B(l)&&_.generator)&&n.record!==!1),()=>{const q=()=>{var c,O;return(O=(c=z.get(t,p))!==null&&c!==void 0?c:v==null?void 0:v.initialValue)!==null&&O!==void 0?O:0};let u=zt(Ct(s),q);const H=Ut(u,v);if(B(l)){const c=l.createAnimation(u,e!=="opacity",q,p,_);l=c.easing,u=c.keyframes||u,f=c.duration||f}if(W(p)&&(S.cssRegisterProperty()?jt(p):b=!1),E&&!S.linearEasing()&&(F(l)||w(l)&&l.some(F))&&(b=!1),b){v&&(u=u.map(A=>R(A)?v.toDefaultUnit(A):A)),u.length===1&&(!S.partialKeyframes()||r)&&u.unshift(q());const c={delay:P.ms(g),duration:P.ms(f),endDelay:P.ms(j),easing:w(l)?void 0:tt(l,f),direction:x,iterations:m+1,fill:"both"};o=t.animate({[p]:u,offset:D,easing:w(l)?l.map(A=>tt(A,f)):void 0},c),o.finished||(o.finished=new Promise((A,ft)=>{o.onfinish=A,o.oncancel=ft}));const O=u[u.length-1];o.finished.then(()=>{h||(z.set(t,p,O),o.cancel())}).catch(it),y||(o.playbackRate=1.000001)}else if(i&&E)u=u.map(c=>typeof c=="string"?parseFloat(c):c),u.length===1&&u.unshift(parseFloat(q())),o=new i(c=>{z.set(t,p,H?H(c):c)},u,Object.assign(Object.assign({},n),{duration:f,easing:l}));else{const c=u[u.length-1];z.set(t,p,v&&R(c)?v.toDefaultUnit(c):c)}return r&&a(t,e,u,{duration:f,delay:g,easing:l,repeat:m,offset:D},"motion-one"),_.setAnimation(o),o}}const Ht=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);function Jt(t,e){var s;return typeof t=="string"?e?((s=e[t])!==null&&s!==void 0||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const Lt=t=>t(),Qt=(t,e,s=d.duration)=>new Proxy({animations:t.map(Lt).filter(Boolean),duration:s,options:e},Bt),Nt=t=>t.animations[0],Bt={get:(t,e)=>{const s=Nt(t);switch(e){case"duration":return t.duration;case"currentTime":return P.s((s==null?void 0:s[e])||0);case"playbackRate":case"playState":return s==null?void 0:s[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(Kt)).catch(it)),t.finished;case"stop":return()=>{t.animations.forEach(n=>ut(n))};case"forEachNative":return n=>{t.animations.forEach(i=>n(i,t))};default:return typeof(s==null?void 0:s[e])>"u"?void 0:()=>t.animations.forEach(n=>n[e]())}},set:(t,e,s)=>{switch(e){case"currentTime":s=P.ms(s);case"currentTime":case"playbackRate":for(let n=0;n<t.animations.length;n++)t.animations[n][e]=s;return!0}return!1}},Kt=t=>t.finished;function Yt(t=.1,{start:e=0,from:s=0,easing:n}={}){return(i,a)=>{const r=R(s)?s:Wt(s,a),o=Math.abs(r-i);let f=t*o;if(n){const g=a*t;f=K(n)(f/g)*g}return e+f}}function Wt(t,e){if(t==="first")return 0;{const s=e-1;return t==="last"?s:s/2}}function kt(t,e,s){return F(t)?t(e,s):t}const te=()=>"ontouchstart"in window||navigator.maxTouchPoints>0,ee=()=>navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),et=new Map,se=async t=>{const e=et.get(t);if(e)return e;const n=await(await fetch(t)).json();return et.set(t,n),n};export{Zt as A,kt as a,Gt as b,te as c,R as d,pt as e,Xt as f,Ht as g,yt as h,F as i,d as j,Ct as k,B as l,nt as m,mt as n,at as o,Z as p,se as q,Jt as r,ee as s,P as t,T as u,Ut as v,Qt as w,I as x,X as y,Yt as z};
