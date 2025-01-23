// adds a static visible timestamp on save
// options:
//  template — string template for timestamp, default = "— $time"
//  $time is replaced with timestamp
//  timeLocale = locale, default "en-US"
//  options = intl.DateTimeFormat options for time locale
//  exclude = list of string representation of regexps of pages
//  to exclude
//
//
//

const API = globalThis.impHelpers;
var viewMode = false;
var myParams;

function isExcluded(params) {
  if (params.exclude && params.exclude.length > 0) {
    // console.log("Exclude found");
    const currentPage = window.location.pathname;
    //regexps
    const EX = params.exclude.reduce((a, r) => {
      const rX = typeof r === "string" ? new RegExp(r, "i") : r;
      return a ? a : currentPage.match(rX);
    }, false);
    if (EX) {
      return true;
    }
  }
  return false;
}

function createTimestamp(params) {
  const now = new Date();
  const fmt = new Intl.DateTimeFormat(
    params.locale || "en-US",
    params.options || {},
  );
  const str = fmt.format(now);
  const tpl = params.template || "<small style='color:gray'>— $time</small>";
  return tpl.replace("$time", str);
}

function animate(_, params_in) {
  console.log("animating timestamp");
  if (viewMode) {
    return;
  } //do nothing in view mode
  myParams = params_in || {};
}

function autoload(params_in, viewMode) {
  console.log("autoload");
}

function postprocess(html) {
  console.log("adding timestamp?");
  if (!myParams) {
    console.log("no params for timestamp");
    // that means, no autoload was performed
    return html;
  }
  if (isExcluded(myParams)) {
    return html;
  }
  console.log("timestamping...");
  return html + `<p>${createTimestamp(myParams)}</p>`;
}

function render(params) {
  return `<p>${createTimestamp(params)}</p>`;
}

function preview(params) {
  return render(params);
}

function init(_, v) {
  // myParams = {};
  viewMode = v;
}

API.register(
  "timestamp",
  { init, animate, render, preview },
  "yaml",
  postprocess,
);
