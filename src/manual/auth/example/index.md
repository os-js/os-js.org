---
title: Authenticator Example
layout: layout.html
---

# Authenticator Example

## Server

See the [included example](https://github.com/os-js/OS.js/blob/master/src/server/node/modules/auth/example.js) for a full template.

## Client

In this example we use the default HTTP backend, but log-in using an external service:

```js
(function(_super) {
  function MyAuthenticator() {
    _super(this, arguments);
  }

  MyAuthenticator.prototype = Object.create(_super.prototype);
  MyAuthenticator.constructor = _super;

  MyAuthenticator.prototype.login = function(login, callback) {
    // Just an example
    loadSomeAPi().then(function(api) {
        api.login({
          foo: 'something',
          username: login.username,
          password: login.password
        }).then(function(userInfo) {
          callback(null, {
            // Provide user information
            userData: {
              id: userInfo.id,
              name: userInfo.name,
              username: login.username,
              groups: ['admin']
            },

            // Normally the backend handles the settings from "Storage" and adds it to the login response
            // You can provide these here
            userSettings: {}
          });
        }).catch(function(err) {
          callback(err);
        });
    }).catch(function(err) {
      callback(err);
    });
  };
})(OSjs.Core.Authenticator);

```
