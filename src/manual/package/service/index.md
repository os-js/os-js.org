---
title: Service Package
layout: layout.html
---

# Service Package

Works almost like an application, only it starts up when a user logs in and "runs in the background".

## Create Package

```bash
$ grunt generate:package --name=default/MyName --type=service
```

---

## Development

- `main.js` - The service client code
- `api.js` - The service server code

---

## Building and installation

```bash
$ grunt build:manifest buid:config build:package --name=default/MyName
```
