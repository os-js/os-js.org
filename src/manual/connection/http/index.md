---
title: HTTP Connection
layout: layout.html
---

# HTTP Connection

OS.js runs on HTTP and by default uses XHR requests for communication (aka AJAX).

## HTTP

```bash
$ grunt config:set --name=server.http.mode --value=http
$ grunt build:config
```

---

## HTTP2

Create your certificates and place them in `src/server/` (as ex "server.key" and "server.crt").

*If you run behind a proxy you should manage this there instead.*

```bash
$ npm install http2
$ grunt config:set --name=server.http.mode --value=http2
$ grunt config:set --name=server.http.cert.name --value=server
$ grunt build:config
```

---

## HTTPS

Create your certificates and place them in `src/server/` (as ex "server.key" and "server.crt"):

*If you run behind a proxy you should manage this there instead.*

```bash
$ grunt config:set --name=server.http.mode --value=https
$ grunt config:set --name=server.http.cert.name --value=server
$ grunt build:config
```
