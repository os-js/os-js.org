---
title: Application Package
layout: layout.html
---

# Application Package

Your standard package. Contains ready-to-go code to develop your own Applications with graphical interfaces and support for server-side API endpoints.

## Create Package

```bash
$ node osjs generate:package --name=default/MyName

# Simple type without prototypes
$ node osjs generate:package --name=default/MyName --type=simple
```

---

## Development

- `metadata.json` - The package manifest
- `main.js` - The application client code
- `main.css` - The application client stylesheet
- `scheme.html` - The scheme GUI layout
- `server/main.js` - The application server code

---

## Building and installation

```bash
# Adds package to global manifest. You have to run this initially and when you change your metadata file
$ node osjs build:manifest

# Build package
$ node osjs build:package --name=default/MyName
```

### Tips

If you want to automatically rebuild your changes, run:

```
$ node osjs watch
```
