---
title: GUI Elements
layout: layout.html
---

# GUI Elements

## Creating elements programatically

```js
scheme.create(win, 'gui-element-name', {
  parameter: 'value'
}, parentElement);

parentElement.appendHTML('<gui-element-name></gui-element-name>', optionalSchemeReference, optionalWinReference);
```

## Creating your own GUI elements

If you want to make a GUI element that handles lists (like TreeView, IconView etc.) you'll have to use the "DataView" composition. Look at the actual source for these elements to see how it is done, or come back later when I'm done writing example code for it.


### Create stylesheet

Create a new asset file or modify `src/client/stylesheets/gui.css` and `src/client/stylesheets/theme.less`.

```css
gui-my-element {
  box-sizing : border-box;
  display : block;
}
```

### Create JavaScript

Create a new file in `src/client/javascript/gui`:

```js
(function(API, Utils, VFS, GUI) {
  'use strict';

  /**
   * Element: 'gui-my-element'
   *
   * In this example we simply create a "label" with a user-defineable color
   *
   * Usage example:
   *
   *  <gui-my-element data-color="#ff0000" data-label="My awesome element" />
   *
   * @api OSjs.GUI.Elements.gui-my-element
   * @class
   */
  GUI.Elements['gui-my-element'] = (function() {

    // Helpers

    function setColor(el, color) {
      el.style.color = color || '#000000'; // Make sure black is default if no color was given
    }

    function setLabel(el, label) {
      Utils.$empty(el);
      el.appendChild(document.createTextNode(String(label));
    }

    function getColor(el) {
      // First try to get color from CSS, then fall-back to element attribute, or the hard default
      return el.style.color || GUI.Helpers.getProperty(el, 'color') || '#00000';
    }

    // The Element

    return {

      //
      // This is called whenever you do `element.on(evName, fn)`
      //
      bind: function(el, evName, callback, params) {
        // In this case we just pass over all events to the root element (ex: 'click')
        Utils.$bind(el, evName, callback.bind(new GUI.Element(el)), params);
      },

      //
      // This is called whenever you do `element.get(param)`
      //
      get: function(el, param) {
        if ( param === 'color' ) {
          return getColor(el);
        }

        // Or get from element attribute
        return GUI.Helpers.getProperty(el, param);
      },

      //
      // This is called whenever you do `element.set(param, value)`
      //
      set: function(el, param, value) {
        if ( param === 'color' ) {
          setColor(el, value);
        } else if ( param === 'label' ) {
          setLabel(el, value);
        }
      },

      //
      // You can also bypass the internal setting method to have custom attributes applied to the DOM element
      //
      /*
      set: function(el, param, value) {
        if ( param === 'color' ) {
          el.setAttribute('data-color', String(value));
          el.setAttribute('data-custom-attribute', 'Foo'); // Add another one
          setColor(value);

          return true; // bypass
        }

        return false;
      },
      */

      //
      // This is the method called when the Scheme is asking to render your element.
      // `el` is the root element (in this case "gui-my-element")
      //
      build: function(el) {
        var label = el.getAttribute('data-label') || 'My GUI element'; // If no label was set, use default one
        var color = el.getAttribute('data-color');

        setLabel(label);
        setColor(color);
      }
    };

  })();

})(OSjs.API, OSjs.Utils, OSjs.VFS, OSjs.GUI);
```

---

# GUI Library

## Containers

### gui-vbox

A container with vertical (rows) that you can shrink/expand, also make content expand or fill.

![gui-vbox](/manual/images/gui/gui-vbox.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>gui-vbox-container</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-vbox">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-hbox

A container with horizontal (columns) that you can shrink/expand, also make content expand or fill.

![gui-hbox](/manual/images/gui/gui-hbox.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>gui-hbox-container</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-hbox">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-paned-view

A container with horizontal (columns) that you can shrink/expand, also make content expand or fill.

![gui-paned-view](/manual/images/gui/gui-paned-view.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>gui-paned-view-container</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-paned-view">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-tabs

A tabbed container.

![gui-tabs](/manual/images/gui/gui-tabs.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>gui-tab-container</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-tabs">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-toolbar

A container for holding buttons, etc.

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>all</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.toolbar">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-button-bar

Works like a toolbar, but is made for holding buttons with user-defined position(s).

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>all</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.button-bar">Overview</a></td>
    </tr>
  </tbody>
</table>

---

## Media

### gui-image
A normal image.

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-image">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-canvas
A paintable image (no actual painting included)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-canvas">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-audio
Play sounds or music.

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-audio">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-video
Display a video.

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-video">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-iframe
Display a iframe.

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-iframe">Overview</a></td>
    </tr>
  </tbody>
</table>

---

## Input

### gui-label
Display a normal text label.

![gui-label](/manual/images/gui/gui-label.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-label">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-button
A button made for clicking!

![gui-button](/manual/images/gui/gui-button.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-button">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-switch
A button, but works more like a light-switch.

![gui-switch](/manual/images/gui/gui-switch.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-switch">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-radio
A radio button.

![gui-radio](/manual/images/gui/gui-radio.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-radio">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-checkbox
A checbox.

![gui-checkbox](/manual/images/gui/gui-checkbox.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-checkbox">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-select
A dropdown input.

![gui-select](/manual/images/gui/gui-select.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-select">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-select-list
A selectable list.

![gui-select-list](/manual/images/gui/gui-select-list.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-select-list">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-slider
A slider for giving a variable input.

![gui-slider](/manual/images/gui/gui-slider.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-slider">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-text
A text entry box.

![gui-text](/manual/images/gui/gui-text.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-text">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-password
A password entry box.

![gui-password](/manual/images/gui/gui-password.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-password">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-textarea
A big text entry area.

![gui-textarea](/manual/images/gui/gui-textarea.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-textarea">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-richtext
A big text entry area, with support for HTML.
<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-richtext">Overview</a></td>
    </tr>
  </tbody>
</table>

---

## Views

### gui-tree-view
A view with tree display (nested).

![gui-tree-view](/manual/images/gui/gui-tree-view.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-tree-view">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-icon-view
A view with icon display.

![gui-icon-view](/manual/images/gui/gui-icon-view.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-icon-view">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-list-view
A view with list display.

![gui-list-view](/manual/images/gui/gui-list-view.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-list-view">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-file-view
A combination of all views above, with direct connection to the VFS. For file browsing.
<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-file-view">Overview</a></td>
    </tr>
  </tbody>
</table>
</div>

---

## Misc

### gui-progressbar
A box for showing progress.

![gui-progress](/manual/images/gui/gui-progress.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-progress-bar">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-color-swatch
A box for selecting colors from a palette.

![gui-color-swatch](/manual/images/gui/gui-color-swatch.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-color-swatch">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-menu-bar
A bar for showing menus with.

![gui-menu-bar](/manual/images/gui/gui-menu-bar.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>gui-menu-bar-entry</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-menu-bar">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-menu
A menu box.
<table class="reference">
  <tbody>
    <tr>
      <td>Supported Parents</td>
      <td>gui-menu-bar-entry</td>
    </tr>
    <tr>
      <td>Allowed Children</td>
      <td>gui-menu-entry</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-menu">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-statusbar
A bar for showing statuses.
<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-statusbar">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-file-upload
Creates a button for uploading files.
<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-file-upload">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-input-modal
A textbox with an attached button designed for bringing up dialogs to set values.

![gui-input-modal](/manual/images/gui/gui-input-modal.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-input-modal">Overview</a></td>
    </tr>
  </tbody>
</table>

### gui-color-box
A button, but instead of text shows the color assigned.

![gui-color-box](/manual/images/gui/gui-color-box.png)

<table class="reference">
  <tbody>
    <tr>
      <td>Allowed Children</td>
      <td>none</td>
    </tr>
    <tr>
      <td>API Reference</td>
      <td><a href="/doc/client/OSjs.GUI.Elements.html#.gui-color-box">Overview</a></td>
    </tr>
  </tbody>
</table>
