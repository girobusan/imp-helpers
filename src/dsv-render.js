import Papa from "papaparse";
const API = globalThis.impHelpers;
const nameRx = /^@name:\s*(.+)\s*$/gm;
const hideRx = /^@hide\s*$/gm;
const jsonRx = /\.json$/i;

function save2url(u, data) {
  const parts = u
    .substring(1)
    .split("/")
    .reduce((a, e) => {
      if (!a[e]) {
        a[e] = {};
      }
      return a[e];
    }, window.impData);
  parts = data;
}

function row2html(r, tag) {
  if (!tag) {
    tag = "td";
  }
  let result = "<tr>";
  r.forEach((d) => (result += `<${tag}> ${d} </${tag}>`));
  return result + "</tr>";
}

function doRender(str, noHeader) {
  const parsed = Papa.parse(
    str.trim(),
    // escapeChar:"\\"
  );
  const data = parsed.data;
  let html = "<table>\n";
  if (data.errors) {
    console.error(data.errors);
  }
  if (!noHeader) {
    html += "<thead>\n";
    html += `${row2html(data.shift(), "th")}\n`;
    html += "</thead>\n<tbody>\n";
  } else {
    html += "<tbody>";
  }
  data.forEach((d) => (html += `${row2html(d)}\n`));
  return html + "</tbody></table>";
}

function render(params, params_raw, subname) {
  const save = nameRx.exec(params); //params.match(nameRx);
  const hide = hideRx.exec(params);
  let strData = params;
  if (hide) {
    strData = strData.replace(hideRx, "");
  }
  if (save) {
    let parse = save[1].toLowerCase().endsWith(".json");

    strData = strData.replace(nameRx, "");
    let saveData = strData.trim();
    saveData = parse
      ? Papa.parse(strData.trim(), {
        header: !(subname && subname.toLowerCase() == "no-header"),
      }).data
      : saveData;

    save.startsWith("@")
      ? save2url(save[1], saveData)
      : (window.impData[save[1]] = saveData);
  }
  const noHead = subname && subname.toLowerCase().trim() === "no-header";
  return hide ? "" : doRender(strData, noHead);
}

function preview(params, params_raw, subname) {
  return render(params, params_raw, subname);
}

API.register(
  "dsv-render",
  {
    render,
    preview,
  },
  "raw",
);
