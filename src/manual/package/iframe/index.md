---
title: Iframe Application Package
layout: layout.html
---

# Iframe Application

An application that loads its sources via iframe.

## Create Package

```bash
$ node osjs generate:package --name=default/MyPackageName --type=iframe
```

---

## Development

Just follow your normal workflow.

- `main.js` - Client script
- `metadata.json` - Package metadata

Create a folder named `data/` and make a file called `index.html`. This is what is loaded by default in `main.js`.

---

## Bi-directional communication

You can communicate between OS.js and your IFrame application using the browser APIs and some helper methods.

- [API](https://gist.github.com/andersevenrud/ff8b7c48b6a3cf9c823f51c7ff02705f)
- [Application Example](https://gist.github.com/andersevenrud/a5296a51fb55540375e0f88a3a34784c)
- [Markup Example](https://gist.github.com/andersevenrud/6209484db09267c01ca5545c75271948)

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
