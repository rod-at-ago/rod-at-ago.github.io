import{r as v,g as f,a as g,b as d,w as u,A as _,i as h}from"./utils.f8520a99.js";function p(n){return function(t,o,s={}){t=v(t);const c=t.length,l=[];for(let a=0;a<c;a++){const m=t[a];for(const i in o){const r=f(s,i);r.delay=g(r.delay,a,c);const y=d(m,i,o[i],r,n);l.push(y)}}return u(l,s,s.duration)}}const w=p(_);function A(n,e={}){return u([()=>{const t=new _(n,[0,1],e);return t.finished.catch(()=>{}),t}],e,e.duration)}function E(n,e,t){return(h(n)?A:w)(n,e,t)}export{E as a};