---
title: Connection Example
layout: layout.html
---

# Connection Example

## Server

See the [included example](https://github.com/os-js/OS.js/blob/master/src/server/node/modules/connection/example.js) for a full template.

## Client

In this example we use the default HTTP backend, but modify the API request:

```js
(function(_super) {
  function MyConnection() {
    _super(this, arguments);
  }

  MyConnection.prototype = Object.create(_super.prototype);
  MyConnection.constructor = _super;

  // An example method for adding headers to the requests
  MyConnection.prototype.applyHeaders = function(options) {
    options = options || {};

    // See 'Utils.ajax()' for more info
    options.requestHeaders = {
      'X-Custom-Header': 'Some fancy value'
    };

    return options;
  };

  MyConnection.prototype._requestAPI = function(method, args, options, cbSuccess, cbError) {
    options = this.applyHeaders(options);
    return this._request(false, method, args, options, cbSuccess, cbError);
  };

  MyConnection.prototype._requestVFS = function(method, args, options, cbSuccess, cbError) {
    options = this.applyHeaders(options);
    return this._request(true, method, args, options, cbSuccess, cbError);
  };
})(OSjs.Connections.http);

```
