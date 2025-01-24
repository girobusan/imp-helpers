const QRCode = require("qrcode");
const API = globalThis.impHelpers;

function prepText(t) {
  if (t.startsWith("\\@")) {
    return t.substring(1);
  }
  if (!t.startsWith("@")) {
    return t;
  }
  // yep, this is call for data.
  if (!window.impData) {
    return "No data";
  }
  const dataPath = t.substring(1).split("/");
  const R = dataPath.reduce((a, e) => {
    if (!a) {
      return a;
    }
    return a[e];
  }, window.impData);

  return R.toString(); // just because
}

function makeCode(str, size, bg, fg, margin) {
  // size = size || 256;
  const opts = {
    type: "svg",
    margin: margin == undefined ? 4 : margin,
    color: {
      dark: fg || "#000000",
      light: bg || "#ffffff",
    },
  };
  // console.log(opts);
  if (size) {
    opts.width = size;
  }
  return QRCode.toString(str, opts);
}
function render(params) {
  if (!params.text) {
    return "";
  }
  const theText = prepText(params.text);
  return makeCode(
    theText,
    params.size,
    params.bgColor,
    params.fgColor,
    params.margin,
  )
    .then(
      (qrcode) =>
        `<div class='qr_code_container' 
         role='complementary' aria-label='${theText}'  
         title='${theText}'>${qrcode}</div>`,
    )
    .catch((e) => API.errorNotice("QR error", e));
}

function preview(params) {
  if (!params || !params.text) {
    return API.errorNotice("Can not render QR", "'text' parameter missing");
  }
  return render(params);
}

API.register("qr-code", { render, preview }, "yaml");
