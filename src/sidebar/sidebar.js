const MYNAME = "sidebar";
let API;
let viewMode = false;
let resizer;

function addSideBar(url) {
  const old = document.querySelector("iframe#IMPsidebar");
  const main = document.querySelector("main#pageMain");
  const footer = document.querySelector("footer#pageFooter");
  const sb = document.createElement("iframe");
  main.style.float = "left";
  main.style.maxWidth = "calc(100vw - 350px)";
  footer.style.clear = "both";
  if (resizer) {
    window.removeEventListener("resize", resizer);
  }
  resizer = () =>
    (sb.style.minHeight = main.getBoundingClientRect().height + "px");
  window.addEventListener("resize", resizer);

  old && old.remove();
  sb.style.float = "left";
  sb.style.border = "none";
  sb.style.minHeight = main.getBoundingClientRect().height + "px";
  sb.style.marginRight = "1rem";
  sb.setAttribute("src", url + "?mode=view");
  sb.id = "IMPsidebar";

  const fc = document.body.firstChild;
  fc ? document.body.insertBefore(sb, fc) : document.body.appendChild(sb);
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

function animate(el) {
  console.log("Animate sidebar");
  if (!el) {
    //autoloaded
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
