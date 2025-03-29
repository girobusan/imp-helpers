const MYNAME = "download-md";
let API;

function getMD() {
  const s = document.querySelector("script#pageData");
  if (!s) {
    return null;
  }
  return s.innerHTML;
}

function makeName() {
  return window.settings.filename.replace(/\.htm(l)?$/, ".md");
}

function downloadMD(name) {
  const m = getMD();
  // const name = makeName();

  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(m),
  );
  element.setAttribute("download", name);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function animate(el) {
  const n = el.dataset.filename || makeName();
  el.addEventListener("click", () => downloadMD(n));
}

function preview(params) {
  return render(params);
}

function render(params) {
  return `<button data-ihelper="${MYNAME}" 
data-filename=${params.filename || makeName()}>${params.text || "Download markdown"}</button>`;
}

function init(api) {
  API = api;
}

globalThis.impHelpers.register(
  MYNAME,
  { render, preview, init, animate },
  "yaml",
);
