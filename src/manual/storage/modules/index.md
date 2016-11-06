---
title: Storage Modules
layout: layout.html
---

# Storage Modules

In addition to [Authenticators](/manual/auth), OS.js uses a Storage module for saving user settings and other user data.


## Demo

This module only saves the data in the *Browser* using `LocalStorage`.

```bash
$ grunt config:set --name=storage --value=demo
$ grunt build:config build:core

```

---

## Mysql

Stores the data in a Mysql database. See the [Authenticators](/manual/auth) documentation on how to set up the database and its users.

```bash
$ grunt config:set --name=storage --value=mysql
$ grunt config:set --name=server.modules.storage.mysql.host --value=localhost
$ grunt config:set --name=server.modules.storage.mysql.user --value=osjsuser
$ grunt config:set --name=server.modules.storage.mysql.password --value=osjspassword
$ grunt config:set --name=server.modules.storage.mysql.database --value=osjs
$ grunt build:config build:core
```

---

## System

Stores the data in the filesystem.

```bash
$ grunt config:set --name=storage --value=system
$ grunt build:config build:core
```

### groups.json

This is an example file for `groups.json`

```json
{
  "anders": ["admin"],
  "guest": ["api", "application", "upload", "fs"],
  "marcello": ["api", "application", "curl", "upload", "fs"]
}
```

### blacklist.json

This is an example file for `blacklist.json`

```json
{
  "anders": ["default/ApplicationDraw"]
}
```
