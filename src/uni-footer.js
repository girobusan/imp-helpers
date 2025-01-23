// unified footer
// for all IMP!s
// works for both static and interactive content
//
// parameters:
// - html: what to put into the footer
//

const API = globalThis.impHelpers;
var viewMode = false;
var myHTML;
const footerRx = /(<footer[^>]+id\s?=\s?"pageFooter"[^>]*>)(.+?)(<\/footer>)/i;

function animate(_, params) {
  if (params.html) {
    myHTML = params.html;
  }
  if (!viewMode) {
    return;
  }
  if (myHTML) {
    //interactive
    let currentFooter = document.getElementById("pageFooter");
    if (!currentFooter) {
      console.log("footer not found in view mode");
      return;
    }
    let currentHTML = currentFooter.innerHTML;
    if (currentHTML == myHTML) {
      return;
    }
    currentFooter.innerHTML = myHTML;
  }
}

function init(_, vm) {
  viewMode = vm;
}

API.register("uni-footer", { init, animate }, "json");
