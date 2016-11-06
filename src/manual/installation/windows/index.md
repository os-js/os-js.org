---
title: Install OS.js on Windows
layout: layout.html
---

# Install OS.js on Windows

This are the instructions on how to install on Windows platforms.

## Dependencies

- Node and npm
- Git (recommended)

---

## Automated

Download and run https://os.js.org/installer.exe.

---

## Manual

**IMPORTANT** Run `cmd` as *Administrator*:

```bash
$ npm install -g grunt-cli
$ git clone https://github.com/os-js/OS.js.git
$ cd OS.js
$ npm install --production
$ bin\create-windows-symlinks
$ grunt --force
```

You can download and extract a zip-file instead of using `git`, but is not recommended as it makes the update process harder.

- [YouTube setup instructions](https://www.youtube.com/watch?v=Cj3OdxTdGGc)

---

## Running

When you have [started a server](/manual/server), simply navigate to [http://localhost:8000](http://localhost:8000) (port 8000 is default).
