---
title: Node Server
layout: layout.html
---

# Node Server

You can install [node supervisor](https://github.com/petruisfan/node-supervisor) and the development (dist-dev) server will automatically reload on change.

## Starting

```bash
# All platforms
$ node osjs run --target=dist      # Start production server
$ node osjs run --target=dist-dev  # Start development server

# Alternative way, NIX
$ ./bin/start-dist.sh  # Start production server
$ ./bin/start-dev.sh   # Start development server (supports watching)

# Alternative way, Windows
$ bin\win-start-dist   # Start production server
$ bin\win-start-dev    # Start development server (supports watching)
```

---

## Running behind a webserver

You can use nginx to run behind a webserver to increase performance and security using a *reverse proxy*.

### nginx

See the included [nginx-node](https://github.com/os-js/OS.js/blob/master/doc/configs/nginx-node.conf) configuration file (for a very basic example)

### apache

First you need to make sure these modules are enabled:

```bash
$ sudo a2enmod proxy
$ sudo a2enmod proxy_http
```

See the included [apache-node](https://github.com/os-js/OS.js/blob/master/doc/configs/apache-node.conf) configuration file (for a very basic example)
