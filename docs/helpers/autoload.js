window.impHelpers.autoload = {
  message: "Test autoload setup",
  helpers: [
    [
      "navbar",
      ,
      {
        logo: "<strong>⚙️ IMP! Helpers</strong>",
        link: "index.html",
        exclude: ["index.html$" , "_menu.html" , "sidebar.html"],
        links: [
          ["https://girobusan.github.io/imp/index.html", "IMP! docs"],
          ["https://girobusan.github.io/imp/helpers.html", "Helpers API docs"],
        ],
      },
    ],
    ["metadata"],
    [
      "timestamp",
      {
        template: "<small style='color:silver'>Last saved: $time</small>",
        locale: "en-US",
        options: {
          hourCycle: "h24",
          timeStyle: "short",
          dateStyle: "short",
        },
      },
    ],
  ],
};
