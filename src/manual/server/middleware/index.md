---
title: Server Middleware
layout: layout.html
---

# Server Middleware

You can hook into HTTP request flow with the provided *Middleware* interface.

This will allow you to add your own "routes" and provide custom content on a spesific URL.

Note that these are called last in the queue, after any API, VFS and static resource requests.

## Node

Look at the [provided example](https://github.com/os-js/OS.js/blob/master/src/server/node/modules/middleware/example.js) for more information.

## PHP

Look at the [provided example](https://github.com/os-js/OS.js/blob/master/src/server/php/Modules/Middleware/Example.php) for more information.
