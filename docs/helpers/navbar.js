(()=>{var n={775:n=>{"use strict";n.exports="body>nav {\n  width: 100%;\n  background-color: silver;\n  font-size: 0.8em;\n  padding: 0.5em;\n  margin-top: 0;\n  padding-left: 1em;\n  padding-right: 1em;\n  background-color: #444;\n  color: #eee;\n  margin-top: -1px;\n}\n\nbody>nav a,\nbody>nav a:focus,\nbody>nav a:hover,\nbody>nav a:active,\nbody>nav a:visited {\n  display: inline-block;\n  margin-right: 1em;\n  color: #ddd;\n  text-decoration: none !important;\n  background: none !important;\n  box-shadow: none;\n}\n\nbody>nav a:hover {\n  color: white;\n}\n\nbody>nav .navlogo {\n  display: inline-block;\n  margin-right: 1em;\n}\n\nbody>nav a:last-child {\n  margin-right: 0;\n}\n"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={exports:{}};return n[o](r,r.exports,t),r.exports}(()=>{const n=t(775),e=globalThis.impHelpers;var o=!1;e.register("navbar",{init:function(n,e){o=e},render:function(n,e){return`<script type='application/json' data-ihelper='navbar' >${e}<\/script>`},animate:function(e,t){if(!o)return;let a=t,r=!!e;e&&(a=JSON.parse(e.innerText),e.remove()),function(e,t){const o=document.querySelector("#IMPnavbar"),a=document.querySelector("#IMPnavbarCSS"),r=document.querySelector("#IMPnavbarUserCSS");if(o&&console.log(o.dataset.local),o&&!t&&"true"===o.dataset.local)return;if(o&&o.remove(),a&&a.remove(),r&&r.remove(),0===Object.keys(e).length)return;const i=document.body,d=i.firstChild,l=document.createElement("nav");if(l.id="IMPnavbar",l.dataset.local=t,d?i.insertBefore(l,d):i.appendChild(l),!e.style){const e=document.head,t=document.createElement("style");t.id="IMPnavbarCSS",t.innerText=n,e.appendChild(t)}let c=e.style||e.addstyle||e.addStyle;if(c){const n=document.head,e=document.createElement("link");e.id="IMPnavbarUserCSS",e.rel="stylesheet",e.href=c,n.appendChild(e)}if(e.logo){const n=document.createElement(e.link?"a":"span");e.link&&(n.href=e.link),n.classList.add("navlogo"),n.innerHTML=e.logo,l.appendChild(n)}e.links&&e.links.forEach((n=>{const e=document.createElement("a");e.href=n[0],e.innerHTML=n[1]||"*",l.append(e)}))}(a,r)}},"json")})()})();