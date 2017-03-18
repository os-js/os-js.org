---
title: Installation
layout: layout.html
---

# Installation

Installation is done in a few easy steps. Most of the process is automated -- you just have to download, build and run!

## Dependencies

- Node and npm
- Git (recommended)

---

## Manual (recommended)

To install manually, simply run these commands:

```bash
$ git clone https://github.com/os-js/OS.js.git
$ cd OS.js
$ npm install --production
$ node osjs build
```

You can download and extract a zip-file instead of using `git`, but is not recommended as it makes the update process harder.

---

## Automated

### NIX

Download and run the installer in your shell:

```bash
$ curl -sS https://www.os.js.org/installer | sh
```

### Windows

Download and run https://os.js.org/installer.exe.

---

## Running

When you have [started a server](/manual/server), simply navigate to [http://localhost:8000](http://localhost:8000) (port 8000 is default).
