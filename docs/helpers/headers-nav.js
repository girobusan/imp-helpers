(()=>{var e,t;function n(e,t){var n=t||document.body,l=null;e.appendTo&&(n=document.querySelector(e.appendTo)||t),e.insertBefore&&(l=document.querySelector(e.insertBefore)),l&&l.parentNode!=n&&(n=l.parentNode),n!=t&&t.remove();const a=document.querySelectorAll("h1,h2,h3,h4,h5,h6");if(0==a.length)return;var r=[];a.forEach(((e,t)=>{let n=e.id||encodeURI(e.innerHTML)+t;e.id=n,r.push({title:e.textContent,id:n,level:+e.tagName.replace(/[^0-9]/g,""),element:e})})),e.skipH1&&(r=r.filter((e=>1!=e.level))),e.minLevel&&(r=r.filter((t=>t.level>=e.minLevel))),e.maxLevel&&(r=r.filter((t=>t.level<=e.maxLevel)));const o=document.createElement("nav");o.classList.add("headerNavigation");const i=document.createElement("ul");i.classList.add("headersNavigationList");var d=i,c=r[0].level;r.forEach((t=>{const n=document.createElement("li"),l=document.createElement("a");if(l.href="#"+t.id,l.innerHTML=t.title,t.element.scrollIntoView&&l.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),t.element.scrollIntoView({behavior:"smooth",block:"start",inline:"start"}),history.pushState("#"+t.id,null,l.href)})),e.linkBack){const n=document.createElement("a");n.classList.add("linkToTop"),n.href="#",o.scrollIntoView&&n.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),o.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})})),n.innerHTML=e.linkBack,t.element.appendChild(n)}n.classList.add("menuLevel"+t.level),n.appendChild(l),t.level<c&&(d=function(e,t,n){let l=e;for(let e=0;e<t;e++)if(l.parentNode)l=l.parentNode;else{const e=document.createElement(n);e.appendChild(l),l=e}return l}(d,c-t.level,"ul"),c=t.level),t.level>c&&(d=function(e,t,n){let l=e;for(let e=0;e<t;e++){const e=document.createElement(n);l.appendChild(e),l=e}return l}(d,t.level-c,"ul"),c=t.level),d.appendChild(n)})),o.appendChild(i),l?n.insertBefore(o,l):n.appendChild(o)}window.impHelpers.register("headers-nav",{render:function(t,n){return`<span data-ihelper='headers-nav' data-params="${e.packParams(n)}"></span>`},init:function(t,n){e=t},animate:function(l){t?l.remove():n(t=e.parseYAML(e.unpackParams(l.dataset.params)),l)}},"yaml")})();