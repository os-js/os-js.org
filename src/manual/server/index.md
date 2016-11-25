---
title: Server
layout: layout.html
---

# Server

The *Server* is a HTTP server written in both Node and PHP. It has support for HTTPS, HTTP/2, Proxies and WebSockets.

Handles requests from the client in a couple of ways:

- Static resources - Serving things from the `dist/` directory
- API - Endpoints exposed to globally to the client (ex: `/API/foo`)
- VFS - Endpoints for filesystem operations (ex: `/FS/bar`)

## Servers

- [Node](/manual/server/node)
- [PHP](/manual/server/php)
