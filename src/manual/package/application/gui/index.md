---
title: Application GUI
layout: layout.html
---

# Application GUI

For more information on GUI, go to [this section](/manual/gui).

## Using scheme to make layouts

This is an example with a simple menu-bar, toolbar and a textarea.

```html
<application-window data-id="MyNameWindow">

  <gui-vbox>
    <gui-vbox-container data-grow="0" data-shrink="1" data-basis="auto">
      <gui-menu-bar>

        <gui-menu-bar-entry data-label="LBL_FILE">
          <gui-menu data-id="SubmenuFile">
            <gui-menu-entry data-id="MenuClose" data-label="LBL_CLOSE"></gui-menu-entry>
          </gui-menu>
        </gui-menu-bar-entry>

      </gui-menu-bar>
    </gui-vbox-container>

    <gui-vbox-container data-grow="0" data-shrink="1" data-basis="auto">
       <gui-button-bar>
          <gui-button data-id="MyButtonOne">My Label</gui-button>
          <gui-button data-id="MyButtonTwo" data-icon="stock://16x16/places/folder_home.png">My Label and Icon</gui-button>
        </gui-button-bar>
    </gui-vbox-container>

    <gui-vbox-container data-grow="1" data-shrink="0" data-basis="auto" data-fill="true">
      <gui-textarea data-id="Text"></gui-textarea>
    </gui-vbox-container>

  </gui-vbox>

</application-window>
```

## Events and Manipulation

An overview of common GUI operations in an application

```js

// Load and set up scheme (GUI) here
this._renderr('ApplicationMyNameWindow');

// Normal binding
this._find('MenuClose').on('click', function() {
  self._close();
});

// Get a property
this._find('MyButtonOne').on('click', function() {
  alert(self._find('Text').get('value'));
});

// Change a property
this._find('MyButtonOne').on('click', function() {
  self._find('Text').set('value', 'CLICKED!');
});

// Create UI element programatically (chainable)
this._create('gui-button', {disabled: true}, root);


// Alternate methods:
scheme.create(this, 'gui-button', {}, root)
scheme.find(this, 'MyButtonOne');

```

You can also bind events directly to your object instance:

```js
{
  // ...
  this._find('MyButtonOne').son('click', this, this.onMyButtonClick);
  // ...
}

// Does not have to be a prototype
ApplicationMyNameWindow.prototype.onMyButtonClick = function(el, ev) {
  console.log('CLICKED');
};
```
