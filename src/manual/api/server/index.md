---
title: Server API
layout: layout.html
---

# Server API

The *Server API* is a series of endpoints on the server that the client can request. These endpoints are defined via modules that are loaded when the server starts.

Head over to the [server API documentation](/doc/server) for a full overview of all available methods.

## Modules

To create a new module simply use the included `example.js` files as a template (or `Example.php`). Put them in their respective folders and they will be automatically loaded.

### API

These modules define the endpoints in `/API/{endpoint}`.

### VFS Transport

You can read about these modules [here](/manual/vfs). Handles requests from the endpoint `/FS/{endpoint}`.

### Authenticator

You can read about these modules [here](/manual/auth). These are used via the API mentioned above.

### Storage

You can read about these modules [here](/manual/storage). These are used via the API mentioned above.

