var API;

function render(params, params_raw, subname) {
   return ` <!--push content down !-->
   <div style="height:${params.height || "50vh"}; 
   padding:0; 
   width: 100%;
   max-width: 100%;
   margin:0 ; 
   min-height: ${params.minHeight || "300px"};
box-sizing: border-box;
   margin-bottom:${params.marginBottom || "1rem"}"></div>
   <div 
   class="coverHelper"
   data-ihelper="cover"
   data-cleanup="${params.removeH1 || false}"
   data-useh1=${params.useH1 || false}
   style="position:absolute;
   padding: 1rem;
   width: 100%;
   max-width: 100% !important;
   top: 0;
   left:0;
   right:0;
   min-height:${params.minHeight || "300px"};
   height:${params.height || "50vh"};
   background-color:${params.bgColor || "black"};
   background-image:url(${params.bgImage || ""});
   color:${params.color || "white"};
   background-size:${params.tile ? "auto" : "cover"};
   background-attachment: fixed;
   background-position: 50% 50%;
   background-repeat: ${params.tile ? "repeat" : "no-repeat"};
   box-sizing: border-box;
   display: flex; 
   flex-direction: column;
   justify-content:center;
   text-align: center;
   align-content: center;
   margin-top:-1px;
   margin: 0;
   ">
     <h1 class="coverHelperTitle" style="color: ${params.color || "white"};
     margin: 0;
width: 100%;
max-width: 100%;
box-sizing: border-box;
     position: sticky;
     ">
     ${params.title || "Title"}</h1>
     ${params.subtitle ? "<div class='coverHelperSubtitle' style='font-size:1.2em'>" + params.subtitle + "</div>" : ""}
   </div>`;
}

function preview(params, params_raw, subname) {
   if (params.noPreview) {
      return API.defaultPreview(
         "cover, preview render disabled",
         `${params.title || "no title"}<br>------<br>${params.subtitle || "no subtitle"}`,
      );
   }
   return render(params, params_raw, subname);
}

function animate(el) {
   const headers = document.querySelectorAll("h1");
   let h1 = Array.from(headers).filter(
      (e) => !e.classList.contains("coverHelperTitle"),
   )[0];
   if (h1 && el.dataset.useh1) {
      const myh1 = el.querySelector("h1");
      myh1.innerHTML = h1.innerHTML;
   }
   if (h1 && el.dataset.cleanup == "true") {
      h1.remove();
   }
}

function init(api) {
   API = api;
}

globalThis.impHelpers.register(
   "cover",
   { render, preview, animate, init },
   "yaml",
);
