import embed from 'vega-embed';

const schemaString = "https://vega.github.io/schema/vega-lite/v4.json" ;

function tracePath(obj , keys){
  let cursor = obj;
  keys.forEach( k=>{  
    if(!cursor[k]){ cursor[k] = {} } 
    cursor = cursor[k];
    return;
  })
  return cursor;
}

function preRender(params , params_raw , subname){

   const el = document.createElement("div");
   el.style.width="600px";
   const static_params = Object.assign({} , params);
   tracePath(static_params, ["usermeta" , "embedOptions" , "renderer"]);
   static_params.usermeta.embedOptions.renderer = "svg"
   static_params.usermeta.embedOptions.actions = false;
   static_params.width=400;

   return embed(el , static_params , {"renderer": "svg"}  )
   .then( ()=>{el.style.width="initial" ; return el.outerHTML } )
}

async function render( params , params_raw , subname  ){
  const graph = await preRender(params, params_raw, subname);
  return `<div data-ihelper="vega-embed" >
     <div class="vega_embed_view" style="width:100%">
      ${ graph }
     </div>
    <script type="application/json">${params_raw}</script>
  </div>`
}

function preview( params , params_raw , subname ){
  return preRender(params,params_raw,subname) 
}

function animate(el){
  var params ;
  var embedOpts = {};
  const element = el.querySelector(".vega_embed_view");
  if(!element){ console.error("malformed html"); return }
  try{
    params = JSON.parse( el.querySelector("script").textContent );
  }catch(e){
     el.innerHTML = "Can not parse params!"
     console.error("Can not parse params" , e)
     return;
  }
  if(!("$schema" in params) ){ params.$schema = schemaString }
  // element.innerHTML = "All good"
  embed( element , params , embedOpts)
}

globalThis.impHelpers && globalThis.impHelpers.register( 
   "vega-embed" , 
   { animate , render , preview},
   "json"
   )

