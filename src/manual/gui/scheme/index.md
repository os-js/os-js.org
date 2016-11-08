---
title: GUI Scheme
layout: layout.html
---

# Scheme

A *Scheme* file is a HTML file that builds a Application User Interface. All normal HTML tags are supported, but OS.js provides custom tags that makes up *GUI Elements*.

## Fragments

There's also support for fragments and inclusions (split into several sections and/or files).

### scheme.html
```html
<application-window data-id="SchemeTestWindow">
  <gui-vbox>
    <gui-vbox-container data-grow="0" data-shrink="1" data-basis="auto">

      <!-- Fragment within this file -->
      <gui-fragment data-fragment-id="MenuBar" />

    </gui-vbox-container>
    <gui-vbox-container data-grow="1" data-shrink="0" data-basis="auto" data-fill="true">

      <!-- Fragment from external file -->
      <gui-fragment data-fragment-external="scheme-part.html" />

    </gui-vbox-container>
  </gui-vbox>
</application-window>

<application-fragment data-id="MenuBar">
  <gui-menu-bar>
    <gui-menu-bar-entry data-label="LBL_FILE">
      <gui-menu data-id="SubmenuFile">
        <gui-menu-entry data-id="MenuClose" data-label="LBL_CLOSE"></gui-menu-entry>
      </gui-menu>
    </gui-menu-bar-entry>
  </gui-menu-bar>
</application-fragment>
```

### scheme-part.html
```html
<div>
  <h1>This is just a test</h1>
  <p>ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn</p>
</div>
```
---

## Resources

You can use built in sources to get your application and stock resources:

```html
<!--  Examples -->
<img src="stock://16x16/image.png" />

<img src="app://image.png" />
```

---

## Rendering a layout manually

```js
var url = 'YOUR URL HERE';
var win = /* Your Window Here */;
var parentElement = /* Root DOM element to append to (win._$content is default) */;

var scheme = GUI.createScheme(url);
scheme.load(function(error, scheme) {
  scheme.render(win, 'AboutWindow', parentElement);
});
```
