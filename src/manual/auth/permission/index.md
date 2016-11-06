---
title: Groups and Permissions
layout: layout.html
---

# Groups and Permissions

## User groups

This depends on what [Authenticator Module](/manual/auth/module) is used.

---

## Blacklisting packages

This depends on what [Authenticator Module](/manual/auth/module) is used.

---

## Assoicate server VFS mountpoint with a group

```json
{
  "server": {
    "vfs": {
      "groups": {
        "mountpoint": "groupname"
      }
    }
  }
}
```

---

## Associate server API endpoint with a group

```json
{
  "server": {
    "api": {
      "groups": {
        "mymethodname": "groupname"
      }
    }
  }
}
```
