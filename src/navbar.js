//
// Navigation bar
// for upcoming autoload feature.
// Displays logo (linked) and set of links.

//
const API = globalThis.impHelpers;
var viewMode = false;

function buildNav(params, isLocal) {
  // console.log("render navbar", params, isLocal);

  const testNav = document.querySelector("#IMPnavbar");
  const testCSS = document.querySelector("#IMPnavbarCSS");
  testNav && console.log(testNav.dataset.local);
  if (testNav && !isLocal && testNav.dataset.local === "true") {
    return; // autoloaded navbar dows not overwrites locally defined one
  }

  testNav && testNav.remove();
  testCSS && testCSS.remove();

  if (Object.keys(params).length === 0) {
    return; //empty params = no navbar
  }

  const B = document.body;
  const CH = B.firstChild;
  const navEl = document.createElement("nav");
  navEl.id = "IMPnavbar";
  navEl.dataset["local"] = isLocal;
  CH ? B.insertBefore(navEl, CH) : B.appendChild(navEl);

  if (params.style) {
    const H = document.head;
    const CSS = document.createElement("link");
    CSS.id = "IMPnavbarCSS";
    CSS.rel = "stylesheet";
    CSS.href = params.style;
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
    params.links.forEach((l) => {
      const myLi = document.createElement("a");
      myLi.href = l[0];
      myLi.innerHTML = l[1] || "*";
      navEl.append(myLi);
    });
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
