(()=>{var e;function n(e,n,t){return` \x3c!--push content down--\x3e\n   <div style="height:${e.height||"50vh"}; \n   padding:0 ; \n   margin:0 ; \n   min-height: ${e.minHeight||"300px"};\n   margin-bottom:${e.marginBottom||"1rem"}"></div>\n   <div \n   class="coverHelper"\n   data-ihelper="cover"\n   data-cleanup="${e.removeH1||!1}"\n   style="position:absolute;\n   box-sizing: border-box;\n   padding: 1rem;\n   top: 0;\n   left:0;\n   right:0;\n   min-height:${e.minHeight||"300px"};\n   height:${e.height||"50vh"};\n   background-color:${e.bgColor||"black"};\n   background-image:url(${e.bgImage||""});\n   color:${e.color||"white"};\n   background-size:${e.tiled?"auto":"cover"};\n   background-attachment: fixed;\n   background-position: 50% 50%;\n   background-repeat: ${e.tiled?"repeat":"no-repeat"};\n   display: flex; \n   flex-direction: column;\n   justify-content:center;\n   text-align: center;\n   align-content: center;\n   margin: 0;\n   ">\n     <h1 class="coverHelperTitle" style="color: ${e.color||"white"};\n     margin: 0;\n     position: sticky;\n     ">\n     ${e.title||"Title"}</h1>\n     ${e.subtitle?"<div class='coverHelperSubtitle' style='font-size:1.2em'>"+e.subtitle+"</div>":""}\n   </div>`}globalThis.impHelpers.register("cover",{render:n,preview:function(t,i,r){return t.noPreview?e.defaultPreview("cover, preview render disabled",`${t.title||"no title"}<br>------<br>${t.subtitle||"no subtitle"}`):n(t)},animate:function(e){if("true"==e.dataset.cleanup){const e=document.querySelectorAll("h1");let n=Array.from(e).filter((e=>!e.classList.contains("coverHelperTitle")))[0];n&&n.remove()}},init:function(n){e=n}},"yaml")})();