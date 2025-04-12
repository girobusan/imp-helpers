const MYNAME = "sidebar";
let API;
let params;
let subname;
let viewMode = false;

const csscode = require("./sidebar.css?raw");
const svgbtn = require("../../src/icons/arrow_menu_open_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?raw");

const sidebarCode = (params) => `<!--sidebar-->
<style>
${csscode}
</style>
<div id="IMPsidebar"  data-ihelper="${MYNAME}">
 <iframe src="${(params.url || "menu.html") + "?mode=view"}" 
style="position:absolute; top:0; left:0; width:100%;height:100%;border:none">
  </iframe>
<button>${svgbtn}</button>
</div>
`;

function postprocess(html, _) {
  if (subname) {
    return html;
  }
  return sidebarCode(params) + html;
}

function init(api, viewM) {
  API = api;
  viewMode = viewM;
}

function preview(para, _, subname_in) {
  params = para;
  subname = subname_in;

  return API.defaultPreview(
    MYNAME,
    subname ? "This page is the sidebar" : "Sidebar added",
  );
}

function render(para, _, subname_in) {
  params = para;
  subname = subname_in;
  //animate must run somehow in the page, shown as sidebar
  return subname
    ? `<!--sidebar--><span data-ihelper="${MYNAME}" data-subname="${subname}" data-target="${params.target || ""}" data-url="${para.url || "menu.html"}" hidden></span>`
    : "";
}

// still not tested!
function autoload(params_in, viewMode, subname) {
  // in view mode:
  //  attach sidebar if it's not attached
  //  respect ignore list!
  params = params_in;
  if (subname) {
    return;
  }
  if (viewMode) {
    const test = document.querySelector("div#IMPsidebar");
    if (test) {
      return;
    }
    const m = document.querySelector("main#pageMain");
    if (m) {
      m.innerHTML = sidebarCode(params) + m.innerHTML;
      return;
    }
  }
  //  in edit mode
  //  ...do postprocess...
}

function animate(el) {
  if (el && el.dataset.subname) {
    // the page is shown in sidebar
    // set base target for all links to something appropriate
    // console.log("fixing base...");
    let b = document.querySelector("base") || document.createElement("base");
    b.setAttribute("target", el.dataset.target || "_top");
    document.head.appendChild(b);
    return;
  }
  if (el) {
    //we are at the page with attached sidebar
    //add some nice touches...
    el.classList.add("js-enabled");
    const btn = el.querySelector("button");
    btn.addEventListener("click", () => el.classList.toggle("expanded"));
  }
  return;
}

globalThis.impHelpers.register(
  MYNAME,
  { init, render, preview, autoload, animate },
  "yaml",
  postprocess,
);
