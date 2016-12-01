---
title: WebSocket Connection
layout: layout.html
---

# WebSocket Connection

You can enable WebSocket backend communication by updating the connection value. This will improve performance and allow for full-duplex communication.

```bash
$ node osjs config:set --name=connection --value=ws
$ node osjs build:config
```

*Note that static resources and file read/write operations are still performed over HTTP.*

## Broadcasting and Subscriptions

You can broadcast messages from the server to a client. Example:

```js
// Server
const http = require(env.NODEDIR + '/http.js');
http.broadcastMessage(null, 'mynamespace', { // To everyone
  something: 'value'
});

http.broadcastMessage('anders', 'mynamespace', { // To a spesific user only
  something: 'value'
});

// Client
var conn = OSjs.Core.getConnection();
conn.subscribe('mynamespace', function(args) {
  console.log(args.something); // => 'value'
});
```

To send a raw message on your socket you can do:
```js
var conn = OSjs.Core.getConnection();
conn.ws.send(JSON.stringify({
  foo: 'bar'
}));
```
