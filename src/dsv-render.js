import Papa from 'papaparse';
const API = globalThis.impHelpers;

function row2html(r , tag){
  if(!tag){ tag = "td" }
  let result = "<tr>";
  r.forEach(d=>result += (`<${tag}> ${d} </${ tag }>`)) 
  return result + "</tr>"
}

function doRender(str , noHeader){
   const parsed = Papa.parse(str.trim() , 
   // {escapeChar:"\\"}
   );
   const data = parsed.data;
   let html="<table>\n"
   if(data.errors){ console.error(data.errors) }
   if(!noHeader){
      html+="<thead>\n"
      html+=`${ row2html(data.shift() , "th") }\n`
      html+="</thead>\n<tbody>\n"
   }else{ html+="<tbody>" }
   data.forEach( d=>html+=`${ row2html(d) }\n` );
   return html + "</tbody></table>"
}

function render(params , params_raw , subname){
  const noHead = subname && subname.toLowercase().trim()==='no-header';
  return doRender(params , noHead);
}

function preview(params , params_raw , subname){
  return render(params , params_raw , subname);
}

API.register( "dsv-render" , { render , preview } , "raw" );
