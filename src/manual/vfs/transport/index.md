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
$ node osjs config:set --name=client.GoogleAPI.ClientId --value=YOUR_CLIENT_ID
$ node osjs config:set --name=client.VFS.GoogleDrive.Enabled --value=true
$ node osjs build:config
```

---

## Microsoft OneDrive

First you have to create [API Credentials](https://msdn.microsoft.com/en-us/library/ff751474.aspx) to allow OS.js access.

Set your redirect URL to `http://your-host/vendor/wlOauthReceiver.html`.

```bash
$ node osjs config:set --name=client.WindowsLiveAPI.ClientId --value=YOUR_CLIENT_ID
$ node osjs config:set --name=client.VFS.OneDrive.Enabled --value=true
$ node osjs build:config
```

---

## Dropbox

First you have to create [API Credentials](https://www.dropbox.com/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fdevelopers%2Fapps) to allow OS.js access.

Set your redirect URL to `http://your-host/vendor/dropboxOauthReceiver.html`.

```bash
$ node osjs config:set --name=client.DropboxAPI.ClientKey --value=YOUR_CLIENT_KEY
$ node osjs config:set --name=client.VFS.Dropbox.Enabled --value=true
$ node osjs config:add-preload --name=dropbox --path=/vendor/dropbox.js
$ node osjs build:config
```

You also need to install dropbox:

```bash
# Windows users: You'd have to use resolve the symlinks in "dist/vendor"
$ mkdir vendor
$ cd vendor/
$ git clone https://github.com/dropbox/dropbox-js.git
$ cd dropbox-js
$ npm install
$ npm pack
```

---

## WebDAV

You can set up these connections from the `Settings` application.


