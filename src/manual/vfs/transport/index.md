---
title: VFS Transports
layout: layout.html
---

# VFS Transports


## Google Drive

First you have to create [API Credentials](https://console.developers.google.com/iam-admin/projects?pli=1) for OS.js to allow OS.js access.

Create a new project, then find the "Credentials" menu and make a new OAuth Client ID. Make sure to enable the "Drive API" and "Google+" permission.

**Only works over HTTPS**

```bash
$ grunt config:set --name=client.GoogleAPI.ClientId --value=YOUR_CLIENT_ID
$ grunt config:set --name=client.VFS.GoogleDrive.Enabled --value=true
$ grunt build:config
```

---

## Microsoft OneDrive

First you have to create [API Credentials](https://msdn.microsoft.com/en-us/library/ff751474.aspx) to allow OS.js access.

Set your redirect URL to `http://your-host/vendor/wlOauthReceiver.html`.

```bash
$ grunt config:set --name=client.WindowsLiveAPI.ClientId --value=YOUR_CLIENT_ID
$ grunt config:set --name=client.VFS.OneDrive.Enabled --value=true
$ grunt build:config
```

---

## Dropbox

First you have to create [API Credentials](https://www.dropbox.com/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fdevelopers%2Fapps) to allow OS.js access.

Set your redirect URL to `http://your-host/vendor/dropboxOauthReceiver.html`.

```bash
$ git clone https://github.com/dropbox/dropbox-js.git vendor/dropbox-js

# You may have to build dropbox.js manually before continuing
# Windows users: You'd have to use resolve the symlinks in "dist/vendor"

$ grunt config:set --name=client.DropboxAPI.ClientKey --value=YOUR_CLIENT_KEY
$ grunt config:set --name=client.VFS.Dropbox.Enabled --value=true
$ grunt config:add-preload name=dropbox --path=/vendor/dropbox.js
$ grunt build:config
```

---

## WebDAV

You can set up these connections from the `Settings` application.


