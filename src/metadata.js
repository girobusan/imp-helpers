// meta helper
// for managing
// page metadata

const API = globalThis.impHelpers;
let isOK = true;
let META;
let VIEWED;

function prepare() {
  let ID = window.impData;
  if (!ID) {
    isOK = false;
    console.error("Metadata: Data module is not loaded.");
    return;
  }
  if (!ID.page_meta) {
    console.info("No metadata found, making one");
    ID.page_meta = {};
  }
  META = ID.page_meta;
}

function postprocess(html) {
  mdate();
  return html;
}

function getVal(name) {
  return META[name] || null;
}

function setVal(name, value) {
  try {
    META[name] = value;
  } catch {
    console.error("Can not write", value, "to", name);
  }
}

function mdate() {
  setVal("mdate", new Date());
}

function init(_, viewMode) {
  VIEWED = viewMode;
  prepare();
}

API.register("metadata", { init }, "json", postprocess);
