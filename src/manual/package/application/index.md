---
title: Application Package
layout: layout.html
---

# Application Package

Your standard package. Contains ready-to-go code to develop your own Applications with graphical interfaces and support for server-side API endpoints.

## Create Package

```bash
$ grunt generate:package --name=default/MyName

# Simple type without prototypes
$ grunt generate:package --name=default/MyName --type=simple
```

---

## Development

- `main.js` - The application client code
- `main.js` - The application client code
- `main.css` - The application client stylesheet
- `scheme.html` - The scheme GUI layout
- `api.js` - The application server code

---

## Building and installation

```bash
$ grunt build:manifest buid:config build:package --name=default/MyName
```
