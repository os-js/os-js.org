---
title: WebSocket Connection
layout: layout.html
---

# WebSocket Connection

You can enable WebSocket backend communication by updating the connection value. This will improve performance and allow for full-duplex communication.

```bash
$ node osjs config:set --name=connection --value=ws
$ node osjs build:config
```

*Note that static resources and file read/write operations are still performed over HTTP.*
