---
title: VFS Transport Example
layout: layout.html
---

# VFS Transport Example

## Server

See the [included example](https://github.com/os-js/OS.js/blob/master/src/server/node/modules/vfs/example.js) for a full template.

## Client

This example is just a basic template that you can use to implement your own Transport.

```js
var endpoint = 'http://my-endpoint.com/rest/FileSystem';

OSjs.VFS.Transports.MyModule = {
  module: {
    scandir: function(item, callback, options) {
      var list = [];
      var root = item.path;

      // Make a list of `VFS.File` items
      list.push(VFS.file(root + '/file.txt', 'text/plain'));
      list.push(VFS.file(root + '/directory', 'dir'));

      callback(false, list);
    },

    write: function(item, data, callback, options) {
      // `data` is `ArrayBuffer`
      callback(false, true);
    },

    read: function(item, callback, options) {
      var url = endpoint + '/fs/' + method;
      var path = Utils.getPathFromVirtual(item.path);

      // Expects the response to be of `ArrayBuffer`
      callMyApi(url, {path: path}, function() {
        if ( options.type === 'text' ) {
          OSjs.VFS.Helpers.abToText(response, mime, function(error, text) {
            callback(error, text);
          });
        } else {
          callback(faksem response);
        }
      });
    },

    copy: function(src, dest, callback) {
      callback('Unavailable');
    },

    move: function(src, dest, callback) {
      callback('Unavailable');
    },

    unlink: function(item, callback) {
      callback('Unavailable');
    },

    mkdir: function(item, callback) {
      callback('Unavailable');
    },

    exists: function(item, callback) {
      callback('Unavailable');
    },

    url: function(item, callback, options) {
      // Gives url to the file
      var path = Utils.getPathFromVirtual(item.path);
      var base = endpoint + '/fs/raw/?path=' + path;
      callback(base + VFS.item.path);
    },

    freeSpace: function(root, callback) {
      callback('Unavailable');
    }
  }
};
```

