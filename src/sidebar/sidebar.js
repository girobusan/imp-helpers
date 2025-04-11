const MYNAME = "sidebar";
let API;
let viewMode = false;
let params;
const csscode = require("./sidebar.css?raw");
const svgbtn = require("../../src/icons/arrow_menu_open_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?raw");

function postprocess(html, _) {
  const code = `<!--sidebar-->
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
  return code + html;
}

function init(api, viewM) {
  API = api;
  viewMode = viewM;
}

function preview(para, _, subname) {
  params = para;
  return API.defaultPreview(
    MYNAME,
    subname === "this" ? "This page is the sidebar" : "Sidebar added",
  );
}

function render(para, _, subname) {
  params = para;
  return ""; // `<!--sidebar--><span data-ihelper="${MYNAME}" data-subname="${subname}" data-url="${para.url || "menu.html"}" hidden></span>`;
}

function animate(el, params) {
  console.log("Animate sidebar");
  if (el) {
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
