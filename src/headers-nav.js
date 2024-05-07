const MYNAME = "headers-nav";
var API;
var params;
const hNoId = /<h\d(?!\sid=["'])>([^<>]+)</igm ; //g1 = header text

function wrapTo( node , tagname ){
  let r = document.createElement(tagname);
  r.appendChild(node);
  return r;
}

function makeID(str){
  return str.replace(/\s/g , "_")
  .replace( /^[^a-zA-Z]/ , "ID_" )
  .replace( /[^a-zA-Z0-9-_:.]/gi , (m)=>m.charCodeAt(0) )
}

function addIds(html){
  let ids = {};
  return html.replace( hNoId , (m , g1)=>{
      let newid = makeID(g1) //encodeURI(g1.replace( /\s/g , "_" ));
      if(ids[newid]){
        ids[newid]+=1;
        newid = newid + "_" + ids[newid];
      }else{
        ids[newid] = 1;
      }
      return m.replace(">" , ` id="${newid}">`)
  } ) 
}

function grandParent(node, gen , tag){
   let p = node;
   for( let g=0 ; g<gen ; g++ ){
     if(!p.parentNode){
       const prnt = document.createElement(tag);
       prnt.appendChild(p);
       p = prnt;
     }else{
       p = p.parentNode;
     }
   }
   return p;
}

function grandChild(node , gen , tag ){
   let p = node;
   for(let g=0 ; g<gen ; g++){
      const child = document.createElement( tag );
      p.appendChild(child);
      p = child;
   }
   return p;
}

//- IF no params:
//    render in supplied element
//- IF params appendTo OR insertBefore
//    find element and append/insert before there...
//    IF not found, render in supplied element

function doWork(params , el){
   var containerEl = el || document.body;
   var refEl = null;

   if(params.appendTo){
      containerEl = document.querySelector(params.appendTo) || el; 
   }
   if(params.insertBefore){
      refEl = document.querySelector( params.insertBefore );
   }
   if( refEl && refEl.parentNode!=containerEl ){
      containerEl = refEl.parentNode ;
   }
   if(containerEl!=el){ el.remove() }
   

   const hdrs = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
   
   if(hdrs.length==0){ return };
   var data = [];
   hdrs.forEach( ( h,i )=>{
     let id = h.id || makeID(h.innerHTML)+i
     h.id=id 


     data.push({
       title: h.textContent,
       id: id,
       level: +h.tagName.replace(/[^0-9]/g , ""),
       element: h
     })
   } );
   //
   if(params.skipH1){ data = data.filter( d=>d.level!=1 ) }
   if(params.minLevel){ data = data.filter( d=>d.level>=params.minLevel ) }
   if(params.maxLevel){ data = data.filter( d=>d.level<=params.maxLevel ) }
   //
   const menu = document.createElement("nav");
   menu.classList.add("headerNavigation")

   const linklist = document.createElement("ul");
   linklist.classList.add("headersNavigationList")
   var currentList = linklist;
   var currentLevel = data[0].level;
   
   
   data.forEach( d=>{
     const litem = document.createElement("li");
     const lnk = document.createElement("a");
     lnk.href="#" + d.id
     lnk.innerHTML = d.title
     if(d.element.scrollIntoView){
       lnk.addEventListener("click", 
       (evt)=>{ evt.preventDefault(); evt.stopPropagation() ; 
        d.element.scrollIntoView({ behavior: "smooth" , block: "start" , inline: "start" });
        history.pushState( "#" + d.id  , null , lnk.href );
       })
     }
     if(params.linkBack){
       const lb = document.createElement("a");
       lb.classList.add("linkToTop")
       lb.href="#";
       if(menu.scrollIntoView){
         lb.addEventListener("click", 
           (evt)=>{ evt.preventDefault(); evt.stopPropagation() ; 
             menu.scrollIntoView({ behavior: "smooth" , block: "start" , inline: "start" })
         })
       }
       lb.innerHTML= params.linkBack;
       d.element.appendChild(lb)
     }

     litem.classList.add( "menuLevel" + d.level )
     litem.appendChild(lnk)

     if(d.level<currentLevel){
       currentList = grandParent( currentList , currentLevel - d.level , "ul");
       currentLevel = d.level;
     }
     if( d.level>currentLevel ){
       currentList = grandChild( currentList , d.level - currentLevel , "ul"   );
       currentLevel = d.level;
     }
     currentList.appendChild( litem )

   } )
   //wrap all nested ul's to li
   //do not, standarts allow list to be the direct child of list
   // const nestedLists = linklist.querySelectorAll("ul ul");
   // nestedLists.forEach( l=>{ 
   //     const lit = document.createElement("li");
   //     lit.style.listStyleType="none";
   //     const parent = l.parentNode;
   //     parent.insertBefore(lit, l);
   //     lit.appendChild(l)
   // } )

   menu.appendChild(linklist);
   if(refEl){
     containerEl.insertBefore( menu , refEl )
   }else{ 
     containerEl.appendChild(menu) 
   }
}

function render(params , params_raw){
   return `<span data-ihelper='headers-nav' data-params="${API.packParams(params_raw)}"></span>`
}

function animate(el){
  // el.remove();
  if(params){ el.remove() ;  return }
  params = API.parseYAML( API.unpackParams(el.dataset.params) );
  doWork(params , el)
}

function init(api , viewMode){
API = api;
}
window.impHelpers.register( MYNAME , { render , init , animate } , "yaml" , addIds)


