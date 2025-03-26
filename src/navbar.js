//
// Navigation bar
// for upcoming autoload feature.
// Displays logo (linked) and set of links.

//
const defaultCSS = require("./navbar.css?raw");
const menuIcon = require("./icons/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?raw");
// console.log(defaultCSS);

const API = globalThis.impHelpers;
var viewMode = false;

// params.style = add custom style, skip default
// params.addstyle = add both custom and default style

function buildNav(params, isLocal) {
  // console.log("render navbar", params, isLocal);

  const testNav = document.querySelector("#IMPnavbar");
  const testCSS = document.querySelector("#IMPnavbarCSS");
  const testAddCSS = document.querySelector("#IMPnavbarUserCSS");
  testNav && console.log(testNav.dataset.local);
  if (testNav && !isLocal && testNav.dataset.local === "true") {
    return; // autoloaded navbar dows not overwrites locally defined one
  }

  testNav && testNav.remove();
  testCSS && testCSS.remove();
  testAddCSS && testAddCSS.remove();

  if (params.exclude && params.exclude.length > 0) {
    console.log("Exclude found");
    const currentPage = window.location.pathname;
    //regexps
    const EX = params.exclude.reduce((a, r) => {
      const rX = typeof r === "string" ? new RegExp(r, "i") : r;
      return a ? a : currentPage.match(rX);
    }, false);
    if (EX) {
      return;
    }
  }

  if (Object.keys(params).length === 0) {
    return; //empty params = no navbar
  }

  console.log("adding bar");

  const B = document.body;
  const CH = B.firstChild;
  const navEl = document.createElement("nav");
  if (!document.querySelector("#nav_mobile_spacer")) {
    const mobSpacer = document.createElement("div");
    mobSpacer.id = "nav_mobile_spacer";
    CH ? B.insertBefore(mobSpacer, CH) : B.appendChild(mobSpacer);
  }

  navEl.id = "IMPnavbar";
  navEl.dataset["local"] = isLocal;
  CH ? B.insertBefore(navEl, CH) : B.appendChild(navEl);

  //default style
  if (!params.style) {
    const H = document.head;
    const CSS = document.createElement("style");
    CSS.id = "IMPnavbarCSS";
    CSS.innerText = defaultCSS;
    // CSS.rel = "stylesheet";
    // CSS.href = params.style;
    H.appendChild(CSS);
  }
  //user style
  let addstyle = params.style || params.addstyle || params.addStyle;
  if (addstyle) {
    const H = document.head;
    const CSS = document.createElement("link");
    CSS.id = "IMPnavbarUserCSS";
    CSS.rel = "stylesheet";
    CSS.href = addstyle;
    H.appendChild(CSS);
  }

  if (params.logo) {
    const LP = document.createElement(params.link ? "a" : "span");
    if (params.link) {
      LP.href = params.link;
    }
    LP.classList.add("navlogo");
    LP.innerHTML = params.logo;
    navEl.appendChild(LP);
  }

  if (params.links) {
    const linkCont = document.createElement("div");
    linkCont.classList.add("navbar_links");
    params.links.forEach((l) => {
      const myLi = document.createElement("a");
      myLi.href = l[0];
      myLi.innerHTML = l[1] || "*";
      myLi.title = l[1] || "";
      linkCont.appendChild(myLi);
    });
    navEl.appendChild(linkCont);
    //icon
    const menuB = document.createElement("button");
    menuB.innerHTML = menuIcon;
    menuB.addEventListener("click", () => linkCont.classList.toggle("shown"));
    navEl.appendChild(menuB);
  }
}

function animate(el, params) {
  if (!viewMode) {
    return;
  }
  let p = params;
  let isLocal = el ? true : false;
  //animated usual way
  if (el) {
    p = JSON.parse(el.innerText);
    el.remove();
    // return;
  }

  buildNav(p, isLocal);
}

function render(params, params_raw) {
  // buildNav(params.links);
  return `<script type='application/json' data-ihelper='navbar' >${params_raw}</script>`;
}

function init(_, viewModeIn) {
  // console.info("Navbar initialized.", viewMode);
  viewMode = viewModeIn;
}

API.register("navbar", { init, render, animate }, "json");
