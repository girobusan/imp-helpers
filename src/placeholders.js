/*
 *  Demonstrations of awailable placehodlers
 *  ( for documentation ) 
 */

var API;

function render( params , params_raw , subname ){
  const title = params.title || "title";
  const text = params.text || "Some text"
  switch(subname){
    case 'error':
       return API.errorNotice(title , text)
    
    case'render':
       return API.defaultRender("placeholders" , {} , "" , "")
    default:
      return API.defaultPreview( title , text)
  }
}

function preview( params , params_raw , subname ){
  return render( params , params_raw , subname )
}

function init( api ){
  API = api;
}

window.impHelpers.register( "placeholders" , { render , preview , init } , "yaml" )

