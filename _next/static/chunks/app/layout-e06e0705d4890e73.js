(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8665:function(e,t,n){Promise.resolve().then(n.t.bind(n,5935,23)),Promise.resolve().then(n.t.bind(n,3385,23)),Promise.resolve().then(n.t.bind(n,7844,23)),Promise.resolve().then(n.bind(n,1083)),Promise.resolve().then(n.bind(n,6097))},1774:function(e,t,n){"use strict";n.d(t,{F:function(){return s},f:function(){return i}});var r=n(4090);let o=["light","dark"],a="(prefers-color-scheme: dark)",l=(0,r.createContext)(void 0),c={setTheme:e=>{},themes:[]},s=()=>{var e;return null!==(e=(0,r.useContext)(l))&&void 0!==e?e:c},i=e=>(0,r.useContext)(l)?r.createElement(r.Fragment,null,e.children):r.createElement(d,e),u=["light","dark"],d=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:c=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:d=u,defaultTheme:p=c?"system":"light",attribute:g="data-theme",value:b,children:v,nonce:_}=e,[x,E]=(0,r.useState)(()=>m(i,p)),[S,j]=(0,r.useState)(()=>m(i)),k=b?Object.values(b):d,w=(0,r.useCallback)(e=>{let t=e;if(!t)return;"system"===e&&c&&(t=y());let r=b?b[t]:t,a=n?h():null,l=document.documentElement;if("class"===g?(l.classList.remove(...k),r&&l.classList.add(r)):r?l.setAttribute(g,r):l.removeAttribute(g),s){let e=o.includes(p)?p:null,n=o.includes(t)?t:e;l.style.colorScheme=n}null==a||a()},[]),C=(0,r.useCallback)(e=>{E(e);try{localStorage.setItem(i,e)}catch(e){}},[t]),T=(0,r.useCallback)(e=>{j(y(e)),"system"===x&&c&&!t&&w("system")},[x,t]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,r.useEffect)(()=>{let e=e=>{e.key===i&&C(e.newValue||p)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,r.useEffect)(()=>{w(null!=t?t:x)},[t,x]);let L=(0,r.useMemo)(()=>({theme:x,setTheme:C,forcedTheme:t,resolvedTheme:"system"===x?S:x,themes:c?[...d,"system"]:d,systemTheme:c?S:void 0}),[x,C,t,S,c,d]);return r.createElement(l.Provider,{value:L},r.createElement(f,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:c,enableColorScheme:s,storageKey:i,themes:d,defaultTheme:p,attribute:g,value:b,children:v,attrs:k,nonce:_}),v)},f=(0,r.memo)(e=>{let{forcedTheme:t,storageKey:n,attribute:l,enableSystem:c,enableColorScheme:s,defaultTheme:i,value:u,attrs:d,nonce:f}=e,m="system"===i,h="class"===l?"var d=document.documentElement,c=d.classList;c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),");"):"var d=document.documentElement,n='".concat(l,"',s='setAttribute';"),y=s?o.includes(i)&&i?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=u?u[e]:e,a=t?e+"|| ''":"'".concat(r,"'"),c="";return s&&n&&!t&&o.includes(e)&&(c+="d.style.colorScheme = '".concat(e,"';")),"class"===l?c+=t||r?"c.add(".concat(a,")"):"null":r&&(c+="d[s](n,".concat(a,")")),c},g=t?"!function(){".concat(h).concat(p(t),"}()"):c?"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(m,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(p("dark"),"}else{").concat(p("light"),"}}else if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(p(u?"x[e]":"e",!0),"}").concat(m?"":"else{"+p(i,!1,!1)+"}").concat(y,"}catch(e){}}()"):"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(p(u?"x[e]":"e",!0),"}else{").concat(p(i,!1,!1),";}").concat(y,"}catch(t){}}();");return r.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:g}})},()=>!0),m=(e,t)=>{let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},3313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return a},default:function(){return l}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let a=r[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?o[a]=!!n[e]:o.setAttribute(a,n[e])}let{children:a,dangerouslySetInnerHTML:l}=n;return l?o.innerHTML=l.__html||"":a&&(o.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),o}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),l=Number(r.content),c=[];for(let t=0,n=r.previousElementSibling;t<l;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&c.push(n)}let i=t.map(o).filter(e=>{for(let t=0,n=c.length;t<n;t++)if(a(c[t],e))return c.splice(t,1),!1;return!0});c.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),i.forEach(e=>n.insertBefore(e,r)),r.content=(l-c.length+i.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return p},initScriptLoader:function(){return g},default:function(){return v}});let r=n(6921),o=n(1884),a=n(3827),l=r._(n(9542)),c=o._(n(4090)),s=n(7484),i=n(3313),u=n(2185),d=new Map,f=new Set,m=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],h=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},y=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:l="",strategy:c="afterInteractive",onError:s,stylesheets:u}=e,y=n||t;if(y&&f.has(y))return;if(d.has(t)){f.add(y),d.get(t).then(r,s);return}let p=()=>{o&&o(),f.add(y)},g=document.createElement("script"),b=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),p()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[n,r]of(a?(g.innerHTML=a.__html||"",p()):l?(g.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",p()):t&&(g.src=t,d.set(t,b)),Object.entries(e))){if(void 0===r||m.includes(n))continue;let e=i.DOMAttributeNames[n]||n.toLowerCase();g.setAttribute(e,r)}"worker"===c&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",c),u&&h(u),document.body.appendChild(g)};function p(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>y(e))}):y(e)}function g(e){e.forEach(p),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function b(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:i="afterInteractive",onError:d,stylesheets:m,...h}=e,{updateScripts:p,scripts:g,getIsSsr:b,appDir:v,nonce:_}=(0,c.useContext)(s.HeadManagerContext),x=(0,c.useRef)(!1);(0,c.useEffect)(()=>{let e=t||n;x.current||(o&&e&&f.has(e)&&o(),x.current=!0)},[o,t,n]);let E=(0,c.useRef)(!1);if((0,c.useEffect)(()=>{!E.current&&("afterInteractive"===i?y(e):"lazyOnload"===i&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>y(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>y(e))})),E.current=!0)},[e,i]),("beforeInteractive"===i||"worker"===i)&&(p?(g[i]=(g[i]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:d,...h}]),p(g)):b&&b()?f.add(t||n):b&&!b()&&y(e)),v){if(m&&m.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===i)return n?(l.default.preload(n,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"}),(0,a.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===i&&n&&l.default.preload(n,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let v=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1083:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(3827),o=n(997),a=n(6128),l=n(2840),c=n(8796),s=n(5313),i=n(5250),u=n.n(i),d=n(7121),f=n(1774),m=n(1399);function h(e){let{theme:t,setTheme:n}=(0,f.F)();return(0,r.jsxs)("button",{className:e.className,onClick:()=>n("dark"===t?"light":"dark"),children:[(0,r.jsx)(m.Mei,{size:19,className:(0,d.cn)("absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100")}),(0,r.jsx)(m.TLr,{size:19,className:(0,d.cn)("rotate-0 scale-95 transition-all dark:-rotate-90 dark:scale-0")})]})}var y=()=>{let e=(0,s.usePathname)(),t=t=>{let{children:n,to:o,...a}=t,l=!1;return l="/"===o?"/"===e||""===e:e.startsWith(o),(0,r.jsx)(u(),{href:o,...a,className:"p-2 rounded-lg hover:bg-[#eee] dark:hover:bg-[#373851] hover:text-foreground flex items-center justify-center ".concat(l?"bg-[#eee] dark:bg-[#373851] text-foreground":"text-muted-foreground"),children:n})};return(0,r.jsx)("div",{className:"z-50 bottom-8 md:bottom-4 mt-auto mb-2 mx-auto px-5 sticky bg-[transparent] w-fit",children:(0,r.jsxs)("div",{className:"flex items-center justify-between px-3 py-2 gap-4 border border-border rounded-xl shadow-md bg-background dark:bg-secondary",children:[(0,r.jsx)(t,{to:"/",title:"Home",children:(0,r.jsx)(o.xrV,{size:22})}),(0,r.jsx)(t,{to:"/about",title:"About",children:(0,r.jsx)(l.J4e,{size:20})}),(0,r.jsx)(t,{to:"/projects",title:"Projects",children:(0,r.jsx)(a.SgI,{size:20})}),(0,r.jsx)(t,{to:"/contact",title:"Contact",children:(0,r.jsx)(c.JwT,{size:20})}),(0,r.jsx)(h,{className:"p-2 border-none rounded-lg bg-secondary-foreground text-secondary hover:bg-muted-foreground hover:text-muted flex items-center justify-center"})]})})}},6097:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return r.f}});var r=n(1774)},7121:function(e,t,n){"use strict";n.d(t,{cn:function(){return a}});var r=n(3167),o=n(1367);function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.m6)((0,r.Z)(t))}},3385:function(){},7844:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}}},function(e){e.O(0,[452,522,706,699,259,250,35,971,69,744],function(){return e(e.s=8665)}),_N_E=e.O()}]);