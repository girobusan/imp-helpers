const MYNAME = "headers-nav";
var API;
var params;

function doWork(params){
   // console.log(params) 
   const hdrs = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
   const before = document.querySelector(params.insertBefore || "body *:first-child");
   const insertTo = !params.insertTo ? document.body :  document.querySelector(params.insertTo)
   
   if(hdrs.length==0){ return };
   const data = [];
   hdrs.forEach( h=>{
      let id;
      if(h.id){ id=h.id }
      else{ id=encodeURI(h.innerHTML) ; h.id=id }
      data.push({
         title: h.textContent,
         id: id,
         level: +h.tagName.replace(/[^0-9]/g , "")
      })
   } );
   //
   const menu = document.createElement("nav");
   const linklist = document.createElement("ul");
   data.forEach( d=>{
     const litem = document.createElement("li");
     const lnk = document.createElement("a");
     lnk.href="#" + d.id
     lnk.innerHTML = d.title
     litem.style.marginLeft = ( d.level ) + "em"
     litem.classList.add( "menuLevel" + d.level )
     litem.appendChild(lnk)
     linklist.appendChild(litem)
   } )
   menu.appendChild(linklist);
   insertTo.insertBefore( menu , before )
}

function render(params , params_raw){
   return `<span data-ihelper='headers-nav' hidden data-params="${API.packParams(params_raw)}"></span>`
}

function animate(el){
  el.remove();
  if(params){  return }
  params = API.parseYAML( API.unpackParams(el.dataset.params) );
  doWork(params)
}

function init(api , viewMode){
API = api;
}
window.impHelpers.register( MYNAME , { render , init , animate } , "yaml")


