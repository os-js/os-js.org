---
title: HTTP Connection
layout: layout.html
---

# HTTP Connection

OS.js runs on HTTP and by default uses XHR requests for communication (aka AJAX).

## HTTP

```bash
$ node osjs config:set --name=server.http.mode --value=http
$ node osjs build:config
```

---

## HTTP2

Create your certificates and place them in `src/server/` (as ex "server.key" and "server.crt").

*If you run behind a proxy you should manage this there instead.*

```bash
$ npm install http2
$ node osjs config:set --name=server.http.mode --value=http2
$ node osjs config:set --name=server.http.cert.name --value=server
$ node osjs build:config
```

---

## HTTPS

Create your certificates and place them in `src/server/` (as ex "server.key" and "server.crt"):

*If you run behind a proxy you should manage this there instead.*

```bash
$ node osjs config:set --name=server.http.mode --value=https
$ node osjs config:set --name=server.http.cert.name --value=server
$ node osjs build:config
```
