(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6445],{52484:function(t,r,n){"use strict";var o,i=n(92379);function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}r.Z=t=>i.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:6,height:10,fill:"none"},t),o||(o=i.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m1 9.369 4-4-4-4"})))},30680:function(t,r,n){"use strict";n.d(r,{B:function(){return p}});var o=n(651),i=n(1546),s=n(92379),l=n(22757),c=n(94096),a=n.n(c),u=n(20398),d=n.n(u),h=n(73582);let p={letter:"letter",word:"word"};r.Z=t=>{let{children:r,distance:n=5,delay:c=0,stagger:u=40,mode:f=p.letter}=t,_=(0,s.useRef)(0),[m,g]=(0,s.useState)(0),[v,w]=(0,l.YD)({threshold:.5,triggerOnce:!0}),y=(0,s.useRef)(r),x=(0,h.useRouter)(),[b,j]=(0,i.bY)(m,t=>({config:{mass:1,tension:150,friction:30},delay:c+t*u,from:{percent:1},to:{percent:0}})),k=t=>t.split(" ").map((t,r)=>(t=d()(t,"\n",()=>(0,o.jsx)("br",{}))).filter(t=>""!==t).map((l,c)=>"object"==typeof l?(0,o.jsx)(s.Fragment,{children:l},`${r}-${c}`):(0,o.jsxs)(i.q.span,{className:a().wrapper,style:{transform:b[_.current]?.percent.to(t=>0===t?"none":`translate3d(0,${t*n}%,0)`)},children:[(0,o.jsx)(i.q.span,{style:{transform:b[_.current++]?.percent.to(t=>0===t?"none":`translate3d(0,${100*t}%,0)`)},children:l}),(0,o.jsx)("span",{children:" "})]},`${t}${r}-${c}`))),R=t=>{let r=t.split(" ");return r.map((t,l)=>""===t?null:(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)("span",{className:a().word,children:t.split(/(?!$)/u).map((t,r)=>" "===t?t:(0,o.jsx)(i.q.span,{className:a().wrapper,style:{transform:b[_.current]?.percent.to(t=>0===t?"none":`translate3d(0,${t*n}%,0)`)},children:(0,o.jsx)(i.q.span,{style:{transform:b[_.current++]?.percent.to(t=>0===t?"none":`translate3d(0,${100*t}%,0)`)},children:t})},t+r))}),l<r.length-1&&(0,o.jsx)("span",{children:" "})]},t+l))},Z=t=>f===p.letter?R(t):k(t),C=(0,s.useCallback)(()=>{if(_.current=0,Array.isArray(r))y.current=r.map((t,r)=>{if("string"==typeof t)return Z(t);if("object"==typeof t&&t.props?.children){let r={...t};return r.props={...r.props,children:r.props.children.map(t=>Z(t))},r}return t});else if("string"==typeof r)return Z(r);return y.current},[x.locale,m]);return(0,s.useEffect)(()=>{w&&(g(_.current),j.start(t=>({config:{mass:1,tension:100,friction:20},delay:t*c,from:{percent:1},to:{percent:0}})))},[x.locale,w]),(0,o.jsx)("span",{ref:v,children:C()})}},9993:function(t,r,n){"use strict";var o=n(651),i=n(92379),s=n(10779),l=n(78081),c=n(90010);r.Z=(0,i.forwardRef)((t,r)=>{let{children:n,speed:a=0,distance:u=0,rotateInit:d=0,rotate:h=0,originOffset:p=0,compensate:f=!1,className:_=null,ease:m=null,relativeRatio:g=!1,transform:v=null,mediaQueries:w=[s.Jq,s.EV,s.q5],as:y="div"}=t,x=(0,i.useRef)(null),b=(0,i.useRef)(d),j=(0,i.useRef)(0),k=(0,i.useRef)(null),R=(0,i.useRef)(null),Z=(0,i.useRef)(!1),C=(0,i.useRef)(!1);return(a||u||h)&&(0,l.Z)(x,(t,r)=>{let{easing:n,scrollY:o,top:i,boundingClientRect:s,viewport:l}=r,p=i-o;if(j.current=t*(-u||a*l.height),h||d){let r=-h*t+d;b.current+=(r-b.current)*n}let f={ratio:t,y:(0,c.ch)(j.current),rotate:h},_=p+f.y,m=_+s.height+.5*l.height>=0&&_<=1.5*l.height||p+s.height+.5*l.height>=0&&p<=1.5*l.height,g=b.current?` rotate(${b.current}deg)`:"";x.current&&m&&(f.y!==k.current||f.y!==R.current||Z.current)?(x.current.style.transform=v?v(f,{top:i,boundingClientRect:s,viewport:l,isIn:m}):`translate3d(0,${f.y}px,0)${g}`,x.current.style.willChange="transform",Z.current=!1,C.current=!0):!m&&C.current&&(x.current.style.transform=v?v(f,{top:i,boundingClientRect:s,viewport:l,isIn:m}):`translate(0,${f.y}px)${g}`,x.current.style.willChange="",C.current=!1),k.current=f.y,R.current=f.rotate},{originOffset:p,ease:m,mediaQueries:w,relativeRatio:g,compensate:f},[a,u,v,p,f]),(0,o.jsx)(y,{ref:t=>{x.current=t,r&&(r.current=t)},className:_,children:n})})},80389:function(t,r,n){"use strict";var o=n(651),i=n(75214),s=n(57462),l=n.n(s);r.Z=t=>{let{children:r,className:n="",theme:s="default"}=t;return(0,o.jsx)("span",{className:(0,i.cn)("pm-8",l().tag,l()[s],n),children:r})}},37795:function(t,r,n){"use strict";var o=n(651),i=n(80324),s=n.n(i),l=n(92379),c=n(22757),a=n(20429),u=n.n(a),d=n(68193),h=n(78224),p=n(10779),f=n(21249),_=n(21096);r.Z=(0,l.forwardRef)((t,r)=>{let{srcs:n,poster:i=null,posterDesktopWidth:a=null,posterMobileWidth:m=null,desktopOnly:g=!1,ratio:v=null,ratioMobile:w=null,className:y=null,children:x=null,locked:b=!1,playing:j=!0,priority:k=!1,displayed:R=!0,withFadeIn:Z=!1,fill:C=!1}=t,N=(0,l.useRef)(!1),L=(0,l.useRef)(null),E=(0,l.useRef)(null),[W,B]=(0,l.useState)(null),O=(0,l.useRef)([]),$=(0,h.Z)(),M=m||_.uB.mockupWidthMobile,V=a||_.uB.mockupWidthDesktop,S=(0,l.useCallback)(t=>{L.current=t,r&&(r.current=t)},[]),[T]=(0,c.YD)({onChange:(t,r)=>{r.target.isInView=t,b||(t?(r.target.currentTime=0,A()):F())}}),q=(0,l.useCallback)(t=>{E.current=t,T(t)},[]);(0,l.useEffect)(()=>{O.current=[];let t={sd:640,md:1280,hd:1920};for(let r in n)Object.hasOwnProperty.call(t,r)&&O.current.push({url:n[r],width:t[r]})},[n]),(0,l.useEffect)(()=>(N.current=!0,()=>{N.current=!1}),[]),(0,l.useEffect)(()=>{!b&&E.current?.isInView&&A()},[b]),(0,f.yU)(L,(0,f.y1)(t=>{N.current&&n&&(g&&$!==p.q5&&$!==p.EV?B(null):B(O.current.reduce((r,n)=>Math.abs(n.width-t.contentRect.width)<Math.abs(r.width-t.contentRect.width)?n:r).url))}));let A=()=>{if(j&&E.current){let t=E.current.play();void 0!==t&&t.catch(t=>{console.warn("video",t)})}},F=()=>{if(E.current&&!E.current.paused){let t=E.current.pause();void 0!==t&&t.catch(t=>{console.warn("video",t)})}};return(0,l.useEffect)(()=>{j?A():F()},[j]),(0,o.jsxs)("div",{ref:S,className:s()(u().videoLoop,Z&&u().withFadeIn,y),children:[W&&(0,o.jsx)("video",{ref:q,className:s()(u().video,k&&u().isPriority,R&&u().isDisplayed,C&&u().isFill),onLoadedMetadata:t=>{t.currentTarget.classList.add(u().isLoaded),t.currentTarget.paused&&t.currentTarget.isInView&&t.currentTarget.play()},preload:"metadata",loop:!0,muted:!0,playsInline:!0,src:W}),i&&(0,o.jsxs)("div",{className:u().posterWrapper,children:[(0,o.jsx)(d.dJ,{image:i,desktopOnly:!!w,desktopWidth:V,mobileWidth:M,width:v,height:v?1:void 0,priority:!w&&k,className:s()(u().poster,R&&u().isDisplayed),fill:C}),w&&(0,o.jsx)(d.dJ,{image:i,mobileOnly:!0,mobileWidth:M,width:w,height:v?1:void 0,fill:C,priority:w&&k,className:s()(u().poster,R&&u().isDisplayed)})]}),!C&&v&&(0,o.jsx)("div",{style:{width:"100%",paddingBottom:1/(w||v)*100+"%"}}),x]})})},78224:function(t,r,n){"use strict";var o=n(21249),i=n(92379),s=n(10779);r.Z=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=(0,i.useRef)(null),[n,l]=(0,i.useState)(null);return(0,o.w_)(n=>{let o=(0,s.Q4)(n.innerWidth);t?r.current=o:l(o)},!0),t?r:n}},78081:function(t,r,n){"use strict";n.d(r,{Z:function(){return u}});var o=n(21249),i=n(92379),s=n(94578),l=n(10779),c=n(84986);let a={originOffset:0,compensate:!1,ease:null,mediaQueries:[l.Jq,l.EV,l.q5],relativeRatio:!1};function u(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];n={...a,...n};let d=(0,i.useRef)(null),h=(0,i.useRef)(0),p=(0,i.useRef)(!1),f=(0,i.useRef)({width:0,height:0}),_=(0,i.useRef)(null),m=(0,i.useRef)(0),g=(0,i.useRef)(0),v=(0,i.useRef)(null),w=(0,i.useRef)(!1),y=(0,i.useCallback)(()=>{if(p.current&&t.current&&f.current.height&&v.current){let t=g.current+(_.current?.__top&&"touch"!==s.R8?_.current.__top:0),o=w.current?1:n.ease||_.current?.__easing||1,i=(v.current.height-f.current.height)*(.5+n.originOffset),l=t<f.current.height&&n.compensate?0:t+i;m.current+=((l-h.current)/(n.relativeRatio?(f.current.height+v.current.height)/2:f.current.height)-m.current)*o,w.current=!1,r(m.current,{easing:o,scrollY:h.current,top:t,boundingClientRect:v.current,viewport:f.current})}},u);(0,o.cb)(y);let x=r=>{r&&(f.current.height=r.documentHeight),(void 0===r&&f.current.width||r&&f.current.width!==r.innerWidth)&&t.current&&d.current.observe(t.current),r&&(f.current.width=r.innerWidth),w.current=!0},b=t=>{let r=t[0];d.current.unobserve(r.target);let o=(0,l.Q4)();p.current=-1!==n.mediaQueries.indexOf(o),p.current&&(g.current=(0,c.Z)(r.target),v.current=r.boundingClientRect),w.current=!0};(0,i.useEffect)(()=>(_.current=t.current.closest(".smoothscroll"),d.current=new IntersectionObserver(b),()=>{d.current.disconnect()}),[]),(0,o.b)(t=>{h.current=t.pageYOffset}),(0,o.gb)(()=>{x()}),(0,o.w_)(x,!0,[])}},89493:function(t,r,n){"use strict";n.d(r,{Z:function(){return i}});var o=n(1546);function i(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mass:1,tension:150,friction:20},[,r]=(0,o.q_)(()=>({y:0})),n=!1,i=()=>{n=!0,window.removeEventListener("wheel",i)};return{scrollTo:function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,c=0;"number"==typeof o?c=o:("string"==typeof o||o?.nodeType===1)&&("string"==typeof o&&(o=document.querySelector(o)),o?c=window.scrollY+o.getBoundingClientRect().top:console.error("Scroll to element not found")),c+=s,window.removeEventListener("wheel",i),window.addEventListener("wheel",i),r.start({y:c,reset:!0,from:{y:window.scrollY},config:t,onRest:()=>{n=!1,window.removeEventListener("wheel",i),e.finished&&l&&l()},onChange:(t,r)=>{n||window.scroll(0,r.get().y)}})}}}},86445:function(t,r,n){"use strict";n.d(r,{Z:function(){return N}});var o,i=n(651),s=n(12882),l=n(9993),c=n(29154),a=n(37795),u=n(89493),d=n(25684),h=n(92379),p=n(75214),f=n(88713),_=n.n(f),m=n(52484),g=n(30680),v=n(47130),w=n(80389),y=n(77093);function x(){return(x=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var b=t=>h.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},t),o||(o=h.createElement("path",{stroke:"currentColor",d:"M3.375 2.632 13.217 8l-9.842 5.368z"}))),j=n(45962),k=n(59497),R=n(47282),Z=n(97495);let C={sd:640,md:1280,hd:1920};var N=t=>{let{title:r,className:n=null,subtitle:o=null,cta:f=null,video:x=null,flipVideo:N=!0,videoPlayerVideo:L=null,mirrored:E=!1,disableScrollCta:W=!1,preventNextLink:B=!1,sectors:O=[],status:$=null,theme:M=null,variant:V="default",isDark:S=!1,textPosition:T="bottom"}=t,q="company"===V,A="videoPlayer"===V,F=(0,h.useRef)(null),P=(0,h.useRef)(),[D,Q]=(0,h.useState)(!1),[J,Y]=(0,h.useState)(void 0),[H,I]=(0,h.useState)(!1),[X]=(0,R.Z)()(t=>[t.setIsLocked]),{scrollTo:z}=(0,u.Z)(),U=(0,v.Z)();(0,d.Z)(F,S),(0,h.useEffect)(()=>{Q(!0)},[]);let K=()=>{I(!1),X(!1)};return(0,h.useEffect)(()=>{if("videoPlayer"===V){let t={},r=L?.srcs||x.srcs;for(let n in r)Object.hasOwnProperty.call(C,n)&&(t[C[n]]=r[n]);Y(t)}},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.ZP,{speed:.3,ref:F,as:"header",className:(0,p.cn)(_().hero,(E||x?.mirrorX)&&!A&&_().isMirroredX,D&&_().isDisplayed,"center"===T&&_().center,_()[V],n),children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:(0,p.cn)(_().content,!q&&!f&&_().noCta),children:[r&&(0,i.jsx)("h1",{className:(0,p.cn)("white",A?"hm-50 hd-72":"hm-70 hd-140",_().title),children:(0,i.jsx)(g.Z,{mode:g.B.word,children:r})}),o&&(0,i.jsx)("p",{className:(0,p.cn)("grey",A?"pm-14":"pm-16 pd-20",_().subtitle),children:o}),f&&(0,i.jsx)("div",{className:_().cta,children:(0,i.jsx)(s.Z,{variant:s.W.rounded,link:f,preventNextLink:B})}),q&&(!!O?.length||$)&&(0,i.jsxs)("ul",{className:_().tagList,children:[$&&(0,i.jsx)("li",{children:(0,i.jsx)(w.Z,{theme:M,children:$})}),O?.map((t,r)=>i.jsx("li",{children:i.jsx(w.Z,{theme:"light",children:t})},`sector-${r}`))]}),A&&(0,i.jsxs)(s.Z,{className:(0,p.cn)(_().videoButton,"pm-12 bold"),onClick:()=>{X(!0),I(!0)},children:[(0,i.jsxs)("div",{className:_().videoButtonWrapper,children:[(0,i.jsx)(a.Z,{...x,className:(0,p.cn)(_().videoButtonVideo),posterDesktopWidth:42,posterMobileWidth:42,ratio:1,ratioMobile:1,fill:!0}),(0,i.jsx)(b,{})]}),(0,i.jsx)(y.Z,{children:"Play Video"})]})]}),x&&(0,i.jsx)(l.Z,{speed:-.2,compensate:!0,className:(0,p.cn)(_().background,N&&_().isFlipped),children:(0,i.jsx)(a.Z,{className:(0,p.cn)(_().videoLoop),...x,priority:!0,posterDesktopWidth:1440,posterMobileWidth:375,ratio:16/9,ratioMobile:16/9,fill:!0})}),!W&&(0,i.jsx)("div",{className:_().ctaScroll,children:(0,i.jsx)(s.Z,{variant:s.W.circle,onClick:()=>{z(window.innerHeight)},label:U("Scroll down"),children:(0,i.jsx)(m.Z,{})})})]})}),A&&(0,i.jsxs)(k.u,{isActive:H,onClick:t=>{P.current&&P.current.contains(t.target)||K()},onClickClose:K,className:_().modal,containerClassName:_().modalContainer,children:[(0,i.jsx)("div",{className:(0,p.cn)("container",_().buttonContainer),children:(0,i.jsx)(s.Z,{variant:"circle",className:_().closeButton,onClick:K,children:(0,i.jsx)(j.Z,{})})}),void 0!==J&&(0,i.jsx)(Z.Z,{ref:P,className:(0,p.cn)(_().player),srcs:J,playing:H,hasControls:H,controllerClassName:_().controller})]})]})}},10779:function(t,r,n){"use strict";n.d(r,{EV:function(){return s},Jq:function(){return i},Q4:function(){return h},q5:function(){return l}});var o=n(21096);let i="mobile",s="tablet",l="desktop",c={desktop:o.AV.desktop,tablet:o.AV.tablet,mobile:0},a=()=>window.matchMedia(`(max-width: ${o.AV.tablet-1}px)`).matches,u=()=>window.matchMedia(`(min-width: ${o.AV.tablet}px) and (max-width: ${o.AV.desktop-1}px)`).matches,d=()=>window.matchMedia(`(min-width: ${o.AV.desktop}px)`).matches,h=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null!==t){for(let r in c)if(c[r]<=t)return r}else{if(d())return l;if(u())return s;if(a())return i}}},84986:function(t,r){"use strict";r.Z=t=>{let r=0;for(;t;)r+=t.offsetTop,t=t.offsetParent;return r}},94096:function(t){t.exports={word:"AnimatedText_word__fQHSF",wrapper:"AnimatedText_wrapper__Zxcbr"}},57462:function(t){t.exports={tag:"tag_tag__TPikM",default:"tag_default__y_hKX",light:"tag_light__THR2c",dark:"tag_dark__9TZ6t",orange:"tag_orange__rs8cz",blue:"tag_blue__P9Cps",purple:"tag_purple__4KHup"}},20429:function(t){t.exports={videoLoop:"videoLoop_videoLoop__EMQeV",video:"videoLoop_video___y_Vv",isLoaded:"videoLoop_isLoaded__QQxcJ",posterWrapper:"videoLoop_posterWrapper__sSdWl",poster:"videoLoop_poster__ybsFi",isFill:"videoLoop_isFill__aFd5T"}},88713:function(t){t.exports={hero:"hero_hero__J_7e9",company:"hero_company__TY1Am",videoPlayer:"hero_videoPlayer__E0nLh",content:"hero_content__jm9_v",noCta:"hero_noCta__UH_TM",subtitle:"hero_subtitle__5_18u",cta:"hero_cta__c_xZv",tagList:"hero_tagList__NTxYF",videoButton:"hero_videoButton__Zu0tz",videoButtonWrapper:"hero_videoButtonWrapper__qSwuz",videoButtonVideo:"hero_videoButtonVideo__iQl4H",background:"hero_background__ZhyfC",videoLoop:"hero_videoLoop__Q7lvQ",isMirroredX:"hero_isMirroredX__kmvt1",ctaScroll:"hero_ctaScroll__qEAlS",center:"hero_center__2eFAt",isDisplayed:"hero_isDisplayed__rm0_E",modalContainer:"hero_modalContainer___o6G8",modal:"hero_modal__6I6xZ",buttonContainer:"hero_buttonContainer__4pauJ",closeButton:"hero_closeButton__yHBD_",player:"hero_player__9TRos",controller:"hero_controller__Me_gN",iframe:"hero_iframe__AJUSN",isFlipped:"hero_isFlipped__h1S4a",title:"hero_title___jEtx"}}}]);