const MYNAME = "spoiler";
let API;

function render(params, _, subname) {
  if (!subname || subname === "html5") {
    return `<div><details><summary>${params.label || "Spoiler:"}</summary>${params.text}</details></div>`;
  }
  return `<div data-ihelper="${MYNAME}" data-type="${subname}"><div class="spoiler_title" style="cursor:pointer">${params.label || "Spoiler:"}</div>
<div class="spoiler_text" style="opacity:0.6">${params.text.replace(/\n/, " ")}</div>
</div>`;
}

function makeMaskListener(_, txt) {
  return function () {
    if (txt.dataset.shown === "true") {
      txt.style.backgroundColor = "gray";
      txt.style.color = "gray";
      txt.dataset.shown = false;
    } else {
      txt.style.backgroundColor = "inherit";
      txt.style.color = "inherit";
      txt.style.transition = "all .5s";
      txt.dataset.shown = true;
    }
  };
}

function makeShrinkListener(_, txt) {
  txt.style.transition = "all .3s";
  return function () {
    if (txt.dataset.shown === "true") {
      txt.dataset.shown = false;
      txt.style.height = 0;
      txt.style.overflow = "hidden";
    } else {
      txt.style.overflow = "auto";
      let hgt = txt.scrollHeight;
      txt.style.height = hgt + 8 + "px";
      txt.dataset.shown = true;
    }
  };
}

function animate(el) {
  if (!el) {
    return;
  }
  if (el.dataset.ready) {
    return;
  }
  const lbl = el.querySelector(".spoiler_title");
  const txt = el.querySelector(".spoiler_text");
  lbl.style.fontWeight = "bold";
  txt.dataset.shown = false;
  txt.style.opacity = 1;
  //
  if (el.dataset.type === "mask") {
    txt.style.backgroundColor = "gray";
    txt.style.color = "gray";
    txt.style.borderRadius = "2px";

    lbl.addEventListener("click", makeMaskListener(lbl, txt));
    txt.addEventListener("click", makeMaskListener(lbl, txt));
  }
  if (el.dataset.type === "shrink") {
    // const maxSize = txt.getBoundingClientRect().height;
    txt.style.borderBottom = "2px solid currentColor";
    txt.style.height = 0;
    txt.style.overflow = "hidden";

    lbl.addEventListener("click", makeShrinkListener(lbl, txt));
    txt.addEventListener("click", makeShrinkListener(lbl, txt));
  }
  el.dataset.ready = true;
}

function preview(params, _, subname) {
  return render(params, null, subname);
}

function init(api) {
  API = api;
}

globalThis.impHelpers.register(
  MYNAME,
  { init, render, preview, animate },
  "yaml",
);
