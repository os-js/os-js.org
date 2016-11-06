---
title: Extension Package
layout: layout.html
---

# Extension Package

This package is used to extend both the client- and server APIs.

## Create Package

```bash
$ grunt generate:package --name=default/MyName --type=extension
```

---

## Development

- `extension.js` - Loaded into the client and you can use any namespace available.
- `api.js` - Loaded into the server and this is where you can register API endpoints.

---

## Building and installation

```bash
$ grunt build:manifest buid:config build:package --name=default/MyName
```
