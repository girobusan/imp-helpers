(()=>{var e={696:e=>{"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" \n  height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M360-120v-720h80v720h-80Zm160-160v-400l200 200-200 200Z"/></svg>\n'},538:e=>{"use strict";e.exports="#IMPsidebar {\n  position: relative;\n  float: left;\n  width: 30%;\n  z-index: 10000;\n}\n\n#IMPsidebar button {\n  display: none;\n  width: 32px;\n  height: 32px;\n  appearance: none;\n  border: none;\n  border-radius: 0;\n  background-color: #888;\n  color: white;\n  position: absolute;\n  top: 0px;\n  right: -32px;\n  padding: 4px;\n}\n\n#IMPsidebar button svg {\n  display: block;\n}\n\nmain#pageMain {\n  float: left;\n  max-width: 65%;\n}\n\n@media (max-width: 700px) {\n  #IMPsidebar {\n    position: absolute;\n    width: 100%;\n    left: -100%;\n    float: none;\n    transition: all 0.2s;\n  }\n\n  #IMPsidebar.expanded {\n    left: 0;\n  }\n\n  #IMPsidebar.expanded button {\n    right: 0;\n  }\n\n  #IMPsidebar.expanded button svg {\n    transform: scale(-1, 1);\n  }\n\n  main#pageMain {\n    float: none !important;\n    max-width: 100%;\n  }\n\n  #IMPsidebar button {\n    display: block;\n  }\n}\n"}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={exports:{}};return e[i](r,r.exports,t),r.exports}(()=>{const e="sidebar";let n,i,o=!1;const r=t(538),a=t(696);function d(e){const n=document.querySelector("div#IMPsidebar"),t=document.querySelector("main#pageMain"),o=document.querySelector("footer#pageFooter"),d=document.querySelector("style#IMPsidebarCSS"),s=document.createElement("iframe"),l=document.createElement("div"),p=document.createElement("button");p.innerHTML=a,p.addEventListener("click",(()=>l.classList.toggle("expanded"))),l.id="IMPsidebar",l.appendChild(s),l.appendChild(p),d&&d.remove();const u=document.createElement("style");u.innerHTML=r,u.id="IMPsidebarCSS",document.head.appendChild(u),s.style.border="none",s.style.display="block",s.style.top="0px",s.style.left="0px",s.style.width="100%",s.style.height="100%",s.style.position="absolute",s.setAttribute("src",e+"?mode=view"),o.style.clear="both",i&&window.removeEventListener("resize",i),i=()=>l.style.minHeight=t.getBoundingClientRect().height+"px",window.addEventListener("resize",i),n&&n.remove(),l.style.minHeight=t.getBoundingClientRect().height+"px",l.style.marginRight="1rem";const c=document.body.firstChild;c?document.body.insertBefore(l,c):document.body.appendChild(l)}globalThis.impHelpers.register(e,{init:function(e,t){n=e,o=t},render:function(n,t,i){return`\x3c!--sidebar--\x3e<span data-ihelper="${e}" data-subname="${i}" data-url="${n.url||"menu.html"}" hidden></span>`},preview:function(t,i,o){return n.defaultPreview(e,"this"===o?"This page is the sidebar":"Sidebar added")},autoload,animate:function(e,n){if(console.log("Animate sidebar"),e||!n){if("this"===e.dataset.subname){let e=document.querySelector("base")||document.createElement("base");return e.setAttribute("target","_top"),document.head.appendChild(e),void document.querySelector("footer#pageFooter").remove()}d(e.dataset.url)}else d(n.url)}},"yaml")})()})();