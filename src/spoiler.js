const MYNAME = "spoiler";
let API;

function render(params) {
  return `<details><summary>${params.label || "Spoiler:"}</summary>${params.text}</details>`;
}

function preview(params) {
  return render(params);
}

function init(api) {
  API = api;
}

globalThis.impHelpers.register(MYNAME, { init, render, preview }, "yaml");
