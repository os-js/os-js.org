---
title: GUI Elements
layout: layout.html
---

# GUI Elements

GUI Elements are comprised of regular HTML, JavaScript and CSS.

## Common element methods

```js
/* DOM Manipulation and events */
.show()
.hide()
.empty()
.remove()
.append()
.appendHTML()
.querySelector()
.querySelectorAll()
.css('key' /*[, 'value'*/)
.on('name', function() {} /*, useCapture*/)

/* Attributes and values */
.set('key', 'value');
.get('key');

/* Inputs and views */
.focus()
.blur()

/* Data (like dropdowns and views) */
.clear();
.add('entry');
.add(['entry', 'entry']);
.remove('id' /*, 'key'*/);
.patch(['entry', 'entry'])
```

## Creating elements programatically

```js
//
// Normal
//
var guiElement = GUI.Element.create('gui-element-name', {
  parameter: 'value'
});
parentElement.append(guiElement);

//
// Via DOM element
//
var guiElement = GUI.Element.createFromNode(el);

//
// Via Scheme
//
scheme.create(win, 'gui-element-name', {
  parameter: 'value'
}, parentElement);

//
// Using HTML
//
parentElement.appendHTML('<gui-element-name></gui-element-name>', optionalWinReference);
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
   (function() {
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

     GUI.Element.register({
       tagName: 'gui-my-element'
     }, {
       //
       // This is called whenever you do `element.on(evName, fn)`
       //
       on: function(evName, callback, params) {
         // In this case we just pass over all events to the root element (ex: 'click')
         Utils.$bind(this.$element, evName, callback.bind(this), params);

         return this;
       },

       //
       // This is called whenever you do `element.get(param)`
       //
       get: function(param) {
         if ( param === 'color' ) {
           return getColor(this.$element);
         }

         // Or get from element attribute
         return GUI.Element.prototype.get.apply(this, arguments);
       },

       //
       // This is called whenever you do `element.set(param, value)`
       //
       set: function(param, value) {
         if ( param === 'color' ) {
           setColor(this.$element, value);
           return this;
         } else if ( param === 'label' ) {
           setLabel(this.$element, value);
           return this;
         }
         return GUI.Element.prototype.set.apply(this, arguments);
       },

       //
       // You can also bypass the internal setting method to have custom attributes applied to the DOM element
       //
       /*
       set: function(param, value) {
         if ( param === 'color' ) {
           this.$element.setAttribute('data-color', String(value));
           this.$element.setAttribute('data-custom-attribute', 'Foo'); // Add another one
           setColor(value);
           return this;
         }

         return GUI.Element.prototype.set.apply(this, arguments);
       },
       */

       //
       // This is the method called when the Scheme is asking to render your element.
       // `el` is the root element (in this case "gui-my-element")
       //
       build: function() {
         var el = this.$element;
         var label = el.getAttribute('data-label') || 'My GUI element'; // If no label was set, use default one
         var color = el.getAttribute('data-color');

         setLabel(label);
         setColor(color);

         return this;
       }
    }));

  })();

})(OSjs.API, OSjs.Utils, OSjs.VFS, OSjs.GUI);
```
