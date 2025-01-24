// meta helper
// for managing
// page metadata

const API = globalThis.impHelpers;
let isOK = true;
let META;
let VIEWED;
let myParams = null;

function prepare() {
  let ID = window.impData;
  if (!ID) {
    isOK = false;
    console.log("Metadata: Data module is not loaded.");
    return;
  }
  if (!ID.page_meta) {
    console.info("No metadata found, making one");
    ID.page_meta = {};
  }
  META = ID.page_meta;
}

function postprocess(html) {
  console.log("postprocess metadata");
  mdate();
  url();
  return html;
}

function autoload(params) {
  myParams = params;
  url();
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

function url() {
  if (!myParams || !myParams.baseURL) {
    return;
  }
  let filepath = window.location.pathname.split("/").pop(); // last item
  //
  if (myParams.localPathLength) {
    // much better!
    filepath = (window.location.origin + window.location.pathname).substring(
      myParams.localPathLength,
    );
  }
  const bu = myParams.baseURL.endsWith("/")
    ? myParams.baseURL
    : myParams.baseURL + "/";
  console.log("Metadata: Set url to", bu + filepath);
  setVal("url", bu + filepath);
}

function init(_, viewMode) {
  VIEWED = viewMode;
  const cleanURL = window.location.origin + window.location.pathname;
  !viewMode &&
    console.info(
      "Metadata: This page localPathLength is",
      cleanURL.lastIndexOf("/") + 1,
    );
  prepare();
}

API.register("metadata", { init, autoload }, "json", postprocess);
