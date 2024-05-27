/*
 * Data-saver helper
 * params:
 *
 * name — name of data to save
 * title — widget title
 * description - widget description 
 *
 */
var API;


function render( params ){
    
}




function init(api){
 API = api
}


(globalThis||window).impHelpers.register(
   "data-saver" ,
   {
     init,
   },
   "yaml"
)
