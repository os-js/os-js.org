---
title: Application - Misc
layout: layout.html
---

# Application - Misc

## Handling resources

You can get paths to your application resources with:
```

._getResource('image.png'); // Gets URL path

._getResource('image.png', true); // Gets VFS path

```

## Handling launch arguments

When you launch an Application it normally recieves arguments based on how it was opened. Most included Applications with file interactions have a `file` argument to open a file (etc).

These are stored in your session, so you can set these and make your Application restore to the file the user was last using.

```js
._getArgument('key');

._setArgument('key', 'value');
```

## Handling settings

You can also store settings in your application. These are stored across all instances, but not a part of the session data.

```js
._setSetting('key', 'value'); // As key/value

._setSetting(null, { // As tree
  key: 'value'
});

._getSetting('key'); // By key

._getSetting(); // Everything
```
