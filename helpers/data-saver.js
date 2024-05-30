(()=>{"use strict";const e='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>\n';var t;const n="data-saver";function i(i){if(!i.name)return t.errorNotice("Error","No <strong>name</strong> specified");let o=i.title||i.filename||i.name;return`<div data-ihelper='${n}' \n   class="blockContent dataSaver"\n   data-dataname="${i.name}"\n   data-filename=${i.file?i.file:i.name}\n   style="\n   position: relative;\n   padding:16px;\n   padding-left: 56px;\n   background-color: ${i.bgColor?i.bgColor:"#444"};\n   color: ${i.fgColor||"#000"};\n   border-radius:6px;\n   cursor: pointer\n   "\n   >\n   <div style="position: absolute; left: 16px;top: 12px">\n   ${e}\n   </div>\n   <h5 style="margin:0;padding:0;margin-bottom: 0.25em;color:inherit">${o}</h5>\n   ${null!=i.description?`<p style="margin:0;padding:0;font-size:0.8em;line-height:110%">${i.description}</p>`:""}\n   </div>`}(globalThis||window).impHelpers.register(n,{init:function(e){t=e},preview:function(e){return i(e)},render:i,animate:function(e){console.log("Animmate",e);const t=e.dataset.dataname;var n=window.impData[t].data;const i=e.dataset.filename;"string"!=window.impData[t].type&&(n=JSON.stringify(n,null,2)),e.addEventListener("mouseover",(()=>e.style.opacity=.7)),e.addEventListener("mouseout",(()=>e.style.opacity=1)),e.addEventListener("click",(()=>{var e=document.createElement("a");e.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(n)),e.setAttribute("download",i),document.body.appendChild(e),e.click(),document.body.removeChild(e)}))}},"yaml")})();