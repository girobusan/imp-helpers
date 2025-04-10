const MYNAME = "sidebar";
let API;
let viewMode = false;
let resizer;
const csscode = require("./sidebar.css?raw");
const svgbtn = require("../../src/icons/arrow_menu_open_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?raw");

function addSideBar(url) {
  const old = document.querySelector("div#IMPsidebar");
  const main = document.querySelector("main#pageMain");
  const footer = document.querySelector("footer#pageFooter");
  const style = document.querySelector("style#IMPsidebarCSS");
  //
  const sb = document.createElement("iframe");
  const container = document.createElement("div");
  const mbutton = document.createElement("button");
  mbutton.innerHTML = svgbtn;
  mbutton.addEventListener("click", () =>
    container.classList.toggle("expanded"),
  );

  // container.style.position = "relative";
  container.id = "IMPsidebar";

  container.appendChild(sb);
  container.appendChild(mbutton);

  style && style.remove();
  const newstyle = document.createElement("style");
  newstyle.innerHTML = csscode;
  newstyle.id = "IMPsidebarCSS";
  document.head.appendChild(newstyle);

  sb.style.border = "none";
  sb.style.display = "block";
  sb.style.top = "0px";
  sb.style.left = "0px";
  sb.style.width = "100%";
  sb.style.height = "100%";
  sb.style.position = "absolute";
  sb.setAttribute("src", url + "?mode=view");

  // main.style.float = "left";
  // main.style.maxWidth = "calc(100vw - 350px)";
  if (resizer) {
    window.removeEventListener("resize", resizer);
  }
  resizer = () =>
    (container.style.minHeight =
      main.getBoundingClientRect().height +
      // footer.getBoundingClientRect().height +
      "px");
  window.addEventListener("resize", resizer);

  old && old.remove();
  // container.style.float = "left";
  container.style.minHeight =
    main.getBoundingClientRect().height +
    // footer.getBoundingClientRect().height +
    "px";
  container.style.marginRight = "1rem";

  const fc = document.body.firstChild;
  fc
    ? document.body.insertBefore(container, fc)
    : document.body.appendChild(container);
}

function init(api, viewM) {
  API = api;
  viewMode = viewM;
}

function preview(params, _, subname) {
  return API.defaultPreview(
    MYNAME,
    subname === "this" ? "This page is the sidebar" : "Sidebar added",
  );
}

function render(params, _, subname) {
  return `<!--sidebar--><span data-ihelper="${MYNAME}" data-subname="${subname}" data-url="${params.url || "menu.html"}" hidden></span>`;
}

function animate(el, params) {
  console.log("Animate sidebar");
  if (!el && params) {
    //autoloaded
    addSideBar(params.url);
    return;
  }
  if (el.dataset.subname === "this") {
    let b = document.querySelector("base") || document.createElement("base");
    b.setAttribute("target", "_top");
    document.head.appendChild(b);
    document.querySelector("footer#pageFooter").remove();
    return;
  }
  addSideBar(el.dataset.url);
}

globalThis.impHelpers.register(
  MYNAME,
  { init, render, preview, autoload, animate },
  "yaml",
);
