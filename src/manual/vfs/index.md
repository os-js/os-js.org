---
title: VFS
layout: layout.html
---

# VFS

The *Virtual File System* is an abstraction layer that allows you to connect to any source (or endpoint) and present it as it was a file or directory to OS.js.

Modules known as *Transports* handles the incoming requests and responses. These are linked to a *Mountpoint* that is shown in OS.js.

## Mountpoints

To create your own mountpoints you can use the included configuration tool:

```bash
# Add with the built in shortcut
$ node osjs config:add-mount --name=data --description="My data files" --path=/tmp

# Update configuration
$ node osjs build:config
```

This will create the mountpoint `data://` and points to `/tmp` on the server. For group permissions, see [here](/manual/auth/permission). If you want the mountpoint to be read-only, simply add the `-ro` flag to the config command.
