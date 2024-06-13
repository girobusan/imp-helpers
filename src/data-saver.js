/*
 * Data-saver helper
 * params:
 *
 * name — name of data to save
 * title — widget title
 * description - widget description 
 * file- name of file to save (optional)
 * bgColor - background color - #FA5910 #C1450C
 * fgColor - foreground color
 * 
 * + url - downloads a file by url
 */

var API;
const NAME = "data-saver";
import ICON  from "./icons/download_24dp_FILL0_wght400_GRAD0_opsz24.svg?raw"

function dataURL(txt){
  
     return 'data:text/plain;charset=utf-8,' + encodeURIComponent(txt);
}


function data2txt(name){
  return window.impData[name].type=='string' ? 
  window.impData[name].data : 
  JSON.stringify(window.impData[name].data , null , 2)
}

function data2url(name){
  return dataURL( data2txt(name) );
}


function render( params ){
  if(!params.name && !params.url){
     return API.errorNotice("Error" , "No <strong>name</strong> or <strong>url</strong> specified")
  }
  let myTitle = params.title || params.file|| params.name || "Download file"
  let urlFile = params.url || "file.txt"
  if(params.url){
    try{
     urlFile =  (new URL(params.url)).pathname.split("/").pop()
    }catch{
    console.error("Wrong url:" , params.url)
    }
  }

  let myDownload = params.filename || params.name || urlFile 

   return `<div data-ihelper='${NAME}' 
   class="blockContent dataSaver"
   data-dataname="${params.name}"
   data-filename=${ params.file ? params.file: params.name }
   data-isstatic="${ ( params.static || params.url ) || 'false' }"
   data-url="${params.url}"
   style="
   position: relative;
   padding:0;
   background-color: ${ params.bgColor ? params.bgColor : "#444" };
   color: ${ params.fgColor || "#ffffff" };
   border-radius:6px;
   cursor: pointer
   " >
   <a style="
   display: block;
   padding:16px;
   text-decoration: none;
   color: inherit;
   padding-left: 56px;" ${ ( params.static || params.url)? `href="${params.url || data2url(params.name)}"` : "" } ${ ( params.static || params.url )? `download="${myDownload}"` : "" } >
   <div style="position: absolute; left: 16px;top: 12px">
   ${ICON}
   </div>
   ${ `<h5 style="margin:0;padding:0;margin-bottom: 0.25em;color:inherit">${myTitle}</h5>` }
   ${params.description!=undefined ? `<p style="margin:0;padding:0;font-size:0.8em;line-height:110%">${params.description}</p>` : ""}
   </a>
   </div>` 
}

function preview( params ){
 return render(params);
}

function animate( el ){
// console.log(el.dataset.isstatic);
  if(el.dataset.isstatic==='true'){ return }
   const dataname = el.dataset.dataname;
   var databody = window.impData[dataname].data ;
   const filename = el.dataset.filename ;
   window.impData[dataname].type!='string' && ( databody = JSON.stringify(databody , null , 2) );
   // el.addEventListener("mouseover" , ()=>el.style.opacity=0.7)
   // el.addEventListener("mouseout" , ()=>el.style.opacity=1)

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
   "yaml",
   (h)=>`<style>.dataSaver:hover{opacity:0.7;}</style>${h}`
)
