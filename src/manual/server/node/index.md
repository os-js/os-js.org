---
title: Node Server
layout: layout.html
---

# Node Server

The default server for OS.js is Node. Version 4 or above is required (might work on older but not officially supported).

## Starting

```bash
# All platforms
$ node osjs run          # Start server
$ node osjs run --debug  # Start server with debugging

# Alternative way using supervisor, NIX
$ ./bin/start.sh

# Alternative way using supervisor, Windows
$ bin\win-start
```

You can find information about node supervisor [on github](https://github.com/petruisfan/node-supervisor).

---

## Running behind a webserver

You can use nginx to run behind a webserver to increase performance and security using a *reverse proxy*.

### nginx

You can run behind nginx using a reverse-proxy:

```
server {
    listen 80;

    server_name osjs.local;

    merge_slashes off; # This is very important
    location / { # Leading slash!
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_pass http://localhost:8000/; # The leading slash!
        proxy_redirect off; # Also note this
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

```

### apache

You can also run behind Apache using a reverse-proxy:

```bash
$ sudo a2enmod proxy
$ sudo a2enmod proxy_http
```

```
<VirtualHost *:80>
  ServerName osjs.domain.no
  ProxyPass / http://localhost:8000/
</VirtualHost>
```

## Session Management

By default OS.js runs with its session data *in-memory*. You can change this to for example file-storage:

```bash
$ npm install session-file-store
$ node osjs config:set --name=server.http.session.module --value=file
$ node osjs build:config
```

You should also set your own secret key to something random. For example:

```bash
$ node osjs config:set --name=server.http.session.secret --value=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
$ node osjs build:config
```

For more options, see `200-server.json` file. You can also make your own session modules and implement any supported [APIs listed here](https://github.com/expressjs/session#compatible-session-stores).
