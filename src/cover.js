
function render( params , params_raw , subname ){
console.log("render cover" , params);
   return ` <!--push content down-->
   <div style="height:50vh; padding: 0 ; margin:0"></div>
   <div 
   class="coverHelper"
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
  return render(params, params_raw, subname);
}

globalThis.impHelpers && globalThis.impHelpers.register(
   "cover",
   { render, preview },
   "yaml"
)
