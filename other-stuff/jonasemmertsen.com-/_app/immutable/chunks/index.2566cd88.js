import{n as a,y,z as m,s as q,A as z}from"./index.06004061.js";const o=[];function A(e,u){return{subscribe:w(e,u).subscribe}}function w(e,u=a){let r;const t=new Set;function f(n){if(q(e,n)&&(e=n,r)){const i=!o.length;for(const s of t)s[1](),o.push(s,e);if(i){for(let s=0;s<o.length;s+=2)o[s][0](o[s+1]);o.length=0}}}function l(n){f(n(e))}function b(n,i=a){const s=[n,i];return t.add(s),t.size===1&&(r=u(f)||a),n(e),()=>{t.delete(s),t.size===0&&r&&(r(),r=null)}}return{set:f,update:l,subscribe:b}}function S(e,u,r){const t=!Array.isArray(e),f=t?[e]:e,l=u.length<2;return A(r,b=>{let n=!1;const i=[];let s=0,d=a;const g=()=>{if(s)return;d();const c=u(t?i[0]:i,b);l?b(c):d=z(c)?c:a},_=f.map((c,p)=>y(c,h=>{i[p]=h,s&=~(1<<p),n&&g()},()=>{s|=1<<p}));return n=!0,g(),function(){m(_),d(),n=!1}})}export{S as d,w};