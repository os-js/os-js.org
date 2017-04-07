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

- `metadata.json` - The package manifest
- `main.js` - Loaded into the client and you can use any namespace available.
- `server/main.js` - Loaded into the server and this is where you can register API endpoints.

---

## Building and installation

```bash
# Adds package to global manifest. You have to run this initially and when you change your metadata file
$ node osjs build:manifest

# Rebuild configuration files if you added configuration inclusions
$ node osjs build:config

# Build package
$ node osjs build:package --name=default/MyName
```

### Tips

If you want to automatically rebuild your changes, run:

```
$ node osjs watch
```
