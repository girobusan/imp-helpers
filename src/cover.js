
function render( params , params_raw , subname ){
console.log("render cover!" , params);
   return ` <!--push content down-->
   <div style="height:50vh; padding: 0 ; margin:0"></div>
   <div 
   class="coverHelper"
   data-ihelper="cover"
   data-cleanup="${params.removeH1 || false}"
   style="position:absolute;
   top: 0;
   left:0;
   right:0;
   height:50vh;
   background-color: ${params.bgColor || "black"};
   background-image: url(${params.bgImage||""});
   color: ${params.color || "white"};
   background-size: cover;
   background-attachment: fixed;
   display: flex;
   flex-direction: column;
   justify-content:center;
   text-align: center;
   align-content: center;
   margin: 0;
   padding:0;
   ">
     <h1 class="coverHelperTitle" style="color: ${ params.color || "white" };
     margin: 0;
     position: sticky;
     ">
     ${params.title || "Title"}</h1>
     ${ params.subtitle ? "<div class='coverHelperSubtitle' style='font-size:1.2em'>"+params.subtitle+"</div>" : "" }
   </div>`
}

function preview( params, params_raw , subname ){
  if(params.noPreview){ 
      return globalThis.impHelpers.defaultPreview("cover, preview render disabled" , `${params.title || "no title"}<br>------<br>${params.subtitle || "no subtitle"}`)
      }
  // return globalThis.impHelpers.defaultPreview( "cober" , "This helper engages in view mode only" )
  return render(params, params_raw, subname);
}

function animate(el){
  if(el.dataset.cleanup=='true'){
     const headers = document.querySelectorAll("h1");
     let h1 = Array.from(headers).filter(e=>!e.classList.contains("coverHelperTitle"))[0];
     h1 && h1.remove();

  }
}

globalThis.impHelpers && globalThis.impHelpers.register(
   "cover",
   { render, preview , animate },
   "yaml"
)
