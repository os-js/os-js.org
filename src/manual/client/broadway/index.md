---
title: Broadway
layout: layout.html
---

# Broadway

With Broadway you can run native GTK+ 3.x Linux applications in OS.js via WebSockets.

This is [not ready](https://github.com/os-js/OS.js/issues/29) for production usage.

Requires running latest GTK+ 3 with Broadway 2.0+.

## Enable

```bash
$ node osjs config:set --name=broadway.enabled --value=true
$ node osjs build
```

To see all configuration options, do `node osjs config:get --name=broadway`

This will make Broadway OS.js server start automatically with the server.

## Set up X server

Now you have to launch broadway on your X-server.

```bash
$ xhost +
$ broadwayd --address 0.0.0.0 :5
```

## Usage

You can connect to your server from the icon in the Panel.

## Notes

* For some reason connection is failing on latest *Arch Linux*. Ubuntu 16 is working fine, however.
* Since the release of "Client Side Decorations" in GTK, the borders are rendered inside the OS.js windows, which makes it look kind of weird, but works perfectly fine.
