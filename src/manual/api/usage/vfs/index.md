---
title: VFS API
layout: layout.html
---

# VFS

Included is a module that allows you to perform filesystem requests.

## Client example

```js
/**
 * Reading a file
 * NOTE: If you don't specify the 'type' option this function will return an ArrayBuffer by default
 */
VFS.read(path, function(err, res) {
  if ( err ) {
    alert(err);
    return;
  }

  console.log(res); // The file data
}, {/* options */});

/**
 * Writing a file
 * data can either a 'String', 'File', 'Blob', 'ArrayBuffer', 'JSON' or 'VFS.FileDataURL'
 */
VFS.write(path, data, function(err, res) {
  if ( err || !res ) {
    alert(err || 'Failed to write file');
    return;
  }

  // Success!
}, {/* options */});

/**
 * Copy a file
 */
VFS.copy(src, dest, function(err, res) {
  if ( err || !res ) {
    alert(err || 'Failed to copy file');
    return;
  }

  // Success!
}, {/* options */});

/**
 * Scan a directory
 */
VFS.scandir(path, function(err, res) {
  if ( err ) {
    alert(err);
    return;
  }

  console.log(res); // A list of 'VFS.File' instances
}, {/* options */});
```

## Server example

You can also perform VFS operations on the server. It uses the same methods and arguments as the client.

```js

const _vfs = require('lib/vfs.js');

// Normal way
_vfs._request(http, 'read', {path: 'osjs:///foo.txt'}).then(function(data) {
  console.info(data);
}).catch(function(error) {
  console.error(error);
});

// Or alternatively. Here you also have access to a special `$:///` mount, which is the root of your system.
_vfs._vrequest('read', {path: 'home:///foo.txt'}, {username: 'demo'}).then(function(data) {
  // ...
}).catch(/* ... */);

```
