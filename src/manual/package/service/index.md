---
title: Service Package
layout: layout.html
---

# Service Package

Works almost like an application, only it starts up when a user logs in and "runs in the background".

## Create Package

```bash
$ node osjs generate:package --name=default/MyName --type=service
```

---

## Development

- `metadata.json` - The package manifest
- `main.js` - The service client code
- `server/main.js` - The service server code

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
