(()=>{var e,t;window.impHelpers.register("headers-nav",{render:function(t,n){return`<span data-ihelper='headers-nav' hidden data-params="${e.packParams(n)}"></span>`},init:function(t,n){e=t},animate:function(n){n.remove(),t||function(e){const t=document.querySelectorAll("h1,h2,h3,h4,h5,h6"),n=document.querySelector(e.insertBefore||"body *:first-child"),r=e.insertTo?document.querySelector(e.insertTo):n.parentNode;if(0==t.length)return;const a=[];t.forEach((e=>{let t;e.id?t=e.id:(t=encodeURI(e.innerHTML),e.id=t),a.push({title:e.textContent,id:t,level:+e.tagName.replace(/[^0-9]/g,""),element:e})})),e.skipH1&&(a=a.filter((e=>1!=e.level)));const l=document.createElement("nav"),i=document.createElement("ul");a.forEach((e=>{const t=document.createElement("li"),n=document.createElement("a");n.href="#"+e.id,n.innerHTML=e.title,e.element.scrollIntoView&&n.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),e.element.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})})),t.style.marginLeft=e.level+"em",t.classList.add("menuLevel"+e.level),t.appendChild(n),i.appendChild(t)})),l.appendChild(i),r.insertBefore(l,n)}(t=e.parseYAML(e.unpackParams(n.dataset.params)))}},"yaml")})();