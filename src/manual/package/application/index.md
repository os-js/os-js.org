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

- `main.js` - The application client code
- `main.js` - The application client code
- `main.css` - The application client stylesheet
- `scheme.html` - The scheme GUI layout
- `api.js` - The application server code

---

## Building and installation

```bash
$ node osjs build:manifest build:config build:package --name=default/MyName
```
