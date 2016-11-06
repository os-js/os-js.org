---
title: WebSocket Connection
layout: layout.html
---

# WebSocket Connection

With websockets you get much better performance when communicating with the APIs.

```bash
$ grunt config:set --name=connection --type=ws
$ grunt config
```

*Note that static resources and file read/write operations are still performed over HTTP.*
