---
title: Headers navigation
description: Small tool
filename: headers-nav.html
footer: >-
  <small>Powered by <a href='https://github.com/girobusan/imp'>IMP!</a> and <a
  href='https://matejlatin.github.io/Gutenberg/'>Gutenberg CSS</a></small>
enableHelpers: 'true'
---
# Headers navigation

```h:headers-nav
skipH1: true
```

---

<strong>Markdown when you write it. HTML when they read it.</strong>

Like a markdown-based CMS for single file, fully client-side. When you need to drop one page somewhere on the web, and do not want (can not) use full-blown CMS or SSG, but still want to use GUI for content editing.

→ :book: [Docs](https://girobusan.github.io/imp/)

## How it works

When you load IMP! Locally, it opens up an editor, where you can enter or import your text, setup SEO tags and custom CSS. When the very same page is served over http, user gets a light, **static** HTML. Page does not require Java Script to be viewed, it's just plain HTML. [Demo and docs](https://girobusan.github.io/imp/). 


## Possible uses

- Digital experiments 
- Small-scale sites
- Anywhere, where you need "just html file". 

## System requirements

##### For authoring
Firefox or Chrome preferred (tested). If you've updated your browser within last 4 years, it should be fine.
##### For viewing
Any browser.

## Features

- Fully local thing &mdash; no server required, no setup. It's YOUR page!
- Pages can be fully static, even text-based browser friendly (You'll need modern browser for editing)
- You can add any HTML or JS to your page
- All you need is browser, that means it fully multiplatform
- Simple Markdown editor with pixel-perfect preview
- Code highlighting
- [ Customizable ](https://girobusan.github.io/imp/themes/)
- Lo-fi :)

## How to start

### Two clicks setup, with CDN

1. Click [ this link ]( https://girobusan.github.io/imp/impcdn.html#edit )
2. Scroll down, click "Duplicate page" button
3. Enter any filename, ending with `.html`, save.

This setup does not require downloading of any other files. Editor and main CSS will be loaded from CDN. You may load newly downloaded file in your browser, edit content and settings, save it (see below) and than upload to your server. 


### Local setup (everything local, no CDN)

1. Download and unpack. There are 3 files: `index.html`, `style.css` and `imp.js`
2. Open the `index.html` in your browser (Firefox or Chrome is recommended)
3. Edit it, import or enter your text, preview it. Click the big "Export HTML" ("Save" in newer version) button and save file to the same directory. If you didn't change file name, overwrite old file.

You may skip `imp.js` while uploading files to server, as it's not required for *viewing* file.

## Other


### Customization

There is a field for custom CSS in each IMP! file for small adjustments. But you can replace the whole `style.css` with your own. There is nothing fancy about it.

### More files

You can have as many imps as you want. If they would live in one directory, they will share single `imp.js` file. 

### Known problems

- If you use NoScript extension, you'd need to disable it for IMP! page (*not* just set to TRUSTED mode, but disable all restrictions completely)

## License

- Mostly MIT, except:
- CC BY-CA - default theme based on Cutenberg  (which is licensed under CC BY-CA)


### Wouldn't be possible without awesome projects like:

#### [Preact](https://preactjs.com/)
#### [Gutenberg CSS](https://matejlatin.github.io/Gutenberg)
#### [Bulma CSS framework](https://bulma.io/)
#### [Jsdelivr](https://www.jsdelivr.com/)
#### [Google Material Icons](https://fonts.google.com/icons)

## Epiloque

Lorem ipsum... 