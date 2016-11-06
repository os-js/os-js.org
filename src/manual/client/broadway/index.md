---
title: Broadway
layout: layout.html
---

# Broadway

With Broadway you can run native GTK+ 3.x Linux applications in OS.js via WebSockets.

This is [not ready](https://github.com/os-js/OS.js/issues/29) for production usage.

## Enable

```bash
$ grunt config:enable-package --name=Broadway
$ grunt build:config build:manifest build:core
```

## Set up X server

```bash
$ cd Broadway/vendor/
$ npm install
$ xhost +
$ ./broadway-server.sh
```

# Usage

You can connect to your server from the icon in the Panel.
