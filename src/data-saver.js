/*
 * Data-saver helper
 * params:
 *
 * name — name of data to save
 * title — widget title
 * description - widget description 
 * file- name of file to save (optional)
 * bgColor - background color
 * fgColor - foreground color
 */
var API;
const NAME = "data-saver";
import ICON  from "./icons/download_24dp_FILL0_wght400_GRAD0_opsz24.svg?raw"


function render( params ){
  if(!params.name){
     return API.errorNotice("Error" , "No <strong>name</strong> specified")
  }
   return `<div data-ihelper='${NAME}' 
   class="blockContent dataSaver"
   data-dataname="${params.name}"
   data-filename=${ params.file ? params.file: params.name }
   style="
   position: relative;
   padding:16px;
   padding-left: 56px;
   background-color: ${ params.bgColor ? params.bgColor : "#444" };
   color: ${ params.fgColor || "#000" };
   border-radius:6px;
   cursor: pointer
   "
   >
   <div style="position: absolute; left: 16px;top: 12px">
   ${ICON}
   </div>
   ${params.title ? `<h5 style="margin:0;padding:0;margin-bottom: 0.25em;color:inherit">${params.title}</h5>` : ""}
   ${params.description!=undefined ? `<p style="margin:0;padding:0;font-size:0.8em;line-height:110%">${params.description}</p>` : ""}
   </div>` 
}

function preview( params ){
 return render(params);
}

function animate( el ){
  console.log("Animmate" , el)
   const dataname = el.dataset.dataname;
   var databody = window.impData[dataname].data ;
   const filename = el.dataset.filename ;
   window.impData[dataname].type!='string' && ( databody = JSON.stringify(databody , null , 2) );
   el.addEventListener("mouseover" , ()=>el.style.opacity=0.7)
   el.addEventListener("mouseout" , ()=>el.style.opacity=1)

   el.addEventListener("click" , ()=>{
     var element = document.createElement('a');
     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(databody));
     element.setAttribute('download', filename);
     document.body.appendChild(element);
     element.click();
     document.body.removeChild(element);
   })
}




function init(api){
 API = api
}


(globalThis||window)
.impHelpers
.register(
   NAME,
   {
     init, preview , render , animate
   },
   "yaml"
)
