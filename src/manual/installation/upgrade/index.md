---
title: Upgrade
layout: layout.html
---

# Upgrade OS.js

The best way to keep an up-to-date version of OS.js is to install it via `git`. This of course requires a bit of knowledge on how to use this utility, but there's only a few key commands needed.

Remember to restart your server(s) after rebuilding changes.

*NOTE:* None of your configurations or packages are modified during this process. These are always stored in files outside the codebase.

*NOTE:* You can use the same procedure to update your package repositories.

## With git

You simply have to pull the changes and rebuild:

```bash
$ git pull
$ npm install --production
$ node osjs build
```

## Other

If you downloaded a zip-file or some other archive, you can simply extract the file into your OS.js installation, then:

```bash
$ npm install --production
$ node osjs build
```
