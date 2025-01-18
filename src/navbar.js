// navigation bar
// for upcoming autoload feature
//
const API = globalThis.impHelpers;

function buildNav(params) {
  // console.log("render navbar", links, style);

  const testNav = document.querySelector("#IMPnavbar");
  const testCSS = document.querySelector("#IMPnavbarCSS");
  testNav && testNav.remove();
  testCSS && testCSS.remove();

  const B = document.body;
  const CH = B.firstChild;
  const navEl = document.createElement("nav");
  navEl.id = "IMPnavbar";
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
  // console.log("animate navbar");
  let p = params;

  //animated usual way
  if (el) {
    p = JSON.parse(el.innerText);
    el.remove();
    // return;
  }

  p.links && buildNav(p);
}

function render(params, params_raw) {
  // buildNav(params.links);
  return `<script type='application/json' data-ihelper='navbar' >${params_raw}</script>`;
}

function init() {
  console.info("Navbar initialized.");
}

API.register("navbar", { init, render, animate }, "json");
