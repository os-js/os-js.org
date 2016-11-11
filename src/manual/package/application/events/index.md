---
title: Application Events
layout: layout.html
---

# Application Events

## Events

This is a list of the internal events for a Application. You can of course subscribe to custom ones.

```bash
message       All events                               => (msg, object, options)
attention     When application gets attention signal   => (args)
hashchange    When URL hash has changed                => (args)
api           API event                                => (method)
destroy       Destruction event                        => (killed)
destroyWindow Attached window destruction event        => (win)
vfs           For all VFS events                       => (msg, object, options)
vfs:mount     VFS mount event                          => (module, options, msg)
vfs:unmount   VFS unmount event                        => (module, options, msg)
vfs:write     VFS write event                          => (dest, options, msg)
vfs:mkdir     VFS mkdir event                          => (dest, options, msg)
vfs:move      VFS move event                           => ({src,dest}, options, msg)
vfs:delete    VFS delete event                         => (dest, options, msg)
vfs:upload    VFS upload event                         => (file, options, msg)
vfs:update    VFS update event                         => (dir, options, msg)
```

## How to subscribe

```js
._on('event', function() {}); // Subscribe to event
._off('event'); // Unsubscribe to an event (you can pass the callback as second argument)
._emit('event', [arg, ...]); // Emit an event
```

## How to broadcast

You can broadcast messages to all applications (that will emit an event in your application) by simply doing:

```js
API.message('foo', {bar: 'baz'})

// If you send your application ID as a source, it will not be triggered in that application.
API.message('foo', {bar: 'baz'}, {source: app})
```

Ref: https://os.js.org/doc/client/OSjs.Core.Process.html#_onMessage
