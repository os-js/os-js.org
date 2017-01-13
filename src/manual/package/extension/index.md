---
title: Extension Package
layout: layout.html
---

# Extension Package

This package is used to extend both the client- and server APIs.

## Create Package

```bash
$ node osjs generate:package --name=default/MyName --type=extension
```

---

## Development

- `extension.js` - Loaded into the client and you can use any namespace available.
- `api.js` - Loaded into the server and this is where you can register API endpoints.

---

## Building and installation

```bash
$ node osjs build:manifest build:config build:package --name=default/MyName
```
