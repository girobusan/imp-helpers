(()=>{var e;function r(r,t,n){const i=r.title||"title",l=r.text||"Some text";switch(n){case"error":return e.errorNotice(i,l);case"render":return e.defaultRender("placeholders",{},"","");default:return e.defaultPreview(i,l)}}window.impHelpers.register("placeholders",{render:r,preview:function(e,t,n){return r(e,0,n)},init:function(r){e=r}},"yaml")})();