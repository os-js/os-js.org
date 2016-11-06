---
title: Application Windows
layout: layout.html
---

# Application Windows

## Creating a new Window

By default a Window is created automatically and the Scheme files is rendered.

```js
// You can use your own prototype
var win = new Window('WindowName', {
  tag: 'optional'
}, app, optionalSchemeRef);

// Attach this to your application
app._addWindow(win);

// If you want a dialog
var dialog = API.createDialog('Name', {}, function(ev, button, result) [
}, app);

```

## Retrieving Windows

```js
app._getWindowByName('WindowName');
app._getMainWindow();
app._getWindowByTag('optional');
app._getWindows();
app._getWindow('value', 'key');
```

## Events

This is a list of the internal events for a Window. You can of course subscribe to custom ones.

```bash
inited        When has been inited and rendered         => ()
focus         When window gets focus                    => ()
blur          When window loses focus                   => ()
destroy       When window is closed                     => ()
maximize      When window is maxmimized                 => ()
minimize      When window is minimized                  => ()
restore       When window is restored                   => ()
resize        When window is resized                    => (w, h)
resized       Triggers after window is resized          => (w, h)
move          When window is moved                      => (x, y)
moved         Triggers after window is moved            => (x, y)
keydown       When keydown                              => (ev, keyCode, shiftKey, ctrlKey, altKey)
keyup         When keyup                                => (ev, keyCode, shiftKey, ctrlKey, altKey)
keypress      When keypress                             => (ev, keyCode, shiftKey, ctrlKey, altKey)
drop          When a drop event occurs                  => (ev, type, item, args)
drop:upload   When a upload file was dropped            => (ev, <File>, args)
drop:file     When a internal file object was dropped   => (ev, VFS.File, args)
```

## Common functions

```js
._close(); // Closes the window
._move(x, y);
._resize(w, h);
._on('event', function() {}); // Subscribe to event
._off('event'); // Unsubscribe to an event (you can pass the callback as second argument)
._emit('event', [arg, ...]); // Emit an event
._find('id'); // Finds GUI Element with given "data-id="
```

For more information see the [API documentation](https://os.js.org/doc/client/OSjs.Core.Window.html).
