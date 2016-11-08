---
title: HTTP Connection
layout: layout.html
---

# HTTP Connection

OS.js runs on HTTP and by default uses XHR requests for communication (aka AJAX).

## HTTP

```bash
$ grunt config:set --name=connection --type=http
$ grunt build:config
```

---

## HTTP2

Create your certificates and place them in `src/server/` (as ex "server.key" and "server.crt"):

```bash
$ npm install http2
$ grunt config:set --name=connection --type=http2
$ grunt config:set --name=server.http.mode --value=http2
$ grunt config:set --name=server.http.cert.name --value=server
$ grunt build:config
```

---

## HTTPS

Create your certificates and place them in `src/server/` (as ex "server.key" and "server.crt"):

```bash
$ grunt config:set --name=connection --type=https
$ grunt config:set --name=server.http.cert.name --value=server
$ grunt build:config
```
