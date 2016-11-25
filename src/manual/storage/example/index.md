---
title: Storage Example
layout: layout.html
---

# Storage Example

## Server

See the [included example](https://github.com/os-js/OS.js/blob/master/src/server/node/modules/storage/example.js) for a full template.

## Client

In this example we change the destination of the user settings:

```js
(function(_super) {
  function MyStorage() {
    _super(this, arguments);
  }

  MyStorage.prototype = Object.create(_super.prototype);
  MyStorage.constructor = _super;

  MyStorage.prototype.saveSettings = function(pool, storage, callback) {
    var username = OSjs.Core.getAuthenticator().getUser().username;

    someExternalApi.save(username, {
      settings: storage
    }).then(function(err) {
      callback(err);
    }).catch(function() {
      callback(null, true);
    });
  };
})(OSjs.Core.Storage);

```
