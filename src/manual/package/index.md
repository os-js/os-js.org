---
title: Package
layout: layout.html
---

# Packages

Packages comes in packages known as "repositories". Each repository contains a series of packages that can be of several types:

- [Application](/manual/package/application)
- [Iframe](/manual/package/iframe)
- [Service](/manual/package/service)
- [Extension](/manual/package/extension)

## Metadata

The metadata file contains information about your package. All the package metadata files are compiled together into a *Manifest* which is delievered to the client.

This file is also used to describe the build process.

| Key                   | Description                                               | Required | Default             | Restriction |
| --------------------- | --------------------------------------------------------- | -------- | ------------------- | ----------- |
| className             | Name of package in client namespace                       | Yes      |                     |             |
| enabled               | Global enabled state                                      | No       | true                |             |
| singular              | Only allow one running instance                           | No       | false               |             |
| autostart             | Automatically start on boot                               | No       | false               |             |
| name                  | A name (title)                                            | Yes      |                     |             |
| description           | A short description                                       | Yes      |                     |             |
| category              | A category                                                | No       | other               |             |
| visible               | Used for visibility in application launch menu etc.       | No       | true                |             |
| icon                  | A icon                                                    | Yes      |                     | Application |
| splash                | Show the loading splash when launching                    | No       | true                |             |
| names                 | A map of locales and translated names                     | No       |                     |             |
| descriptions          | A map of locales and translated descriptions              | No       |                     |             |
| mime                  | An array of what MIME types is supported                  | No       |                     | Application |
| compability           | An array of what features to check for support            | No       |                     |             |
| preload               | An array of static resources to load (see below)          | Yes      |                     |             |
| depends               | An array of dependent packages to load first              | No       |                     |             |
| uses                  | An array of package names that autoload this package      | No       |                     | Extension   |
| spawn                 | A path to a node script to spawn on load                  | No       |                     | Extension   |
| build                 | An object to describe certain parts of the build process  | No       |                     |             |
| build.copy            | An array of files to copy into dist.                      | No       | Entire directory    |             |
| build.scripts         | Build scripts (see below)                                 | No       |                     |             |
| build.less            | Map with LESS files to compile (see below)                | No       |                     |             |


### Example file

```json
{
  "className": "ApplicationExample",
  "name": "Example",
  "description": "Showing off an example",
  "names": {
    "no_NO": "Eksempel"
  },
  "descriptions": {
    "no_NO": "Vise fram et eksempel"
  },
  "icon": "apps/help-browser.png",
  "depends": [
    "ApplicationSettings"
  ],
  "compabiltiy": [
    "canvas", "blob", "audio", "video"
  ],
  "mime": [
    "^text",
    "inode\\/x\\-empty",
    "application\\/x\\-empty",
    "application\\/x\\-lua",
    "application\\/x\\-python",
    "application\\/javascript",
    "application\\/json"
  ],
  "preload": [
    "main.js",
    "main.css",
    {
      "src": "scheme.html",
      "type": "scheme"
    },
    {
      "src": "foo.js",
      "type": "javascript",
      "combine": false
    }
  ],
  "build": {
    "copy": [
      "foo.js",
      "main.js",
      "main.css",
      "scheme.html"
    ]
  }
}
```

---

## Preload

This array defined what files are loaded when the application starts. It supports normal URLs (also absolute).

You can see usage in the above example.

---

## Scripts

You can run scripts that trigger `before` and `after` the build process of your package.

```json
{
  "build": {
    "scripts": {
      "before": ["echo 1"],
      "after": ["echo 2"]
    }
  }
}
```

The *working directory* is set to `src/packages/<path>` on *before* and `dist/packages/<path>` on *after*. Available environment variables:

- `OSJS_TARGET` - Which dist directory we're in
- `OSJS_PACKAGE` - Name path to the package source

---

## Spawner

You can also spawn other node.js processes when the OS.js server starts:

```json
{
  "spawn": {
    "enabled": true,
    "exec": "mycustomscript.js"
  }
}
```

*This is currently only for extensions.*

---

## LESS Support

Simply add this to the metadata file and the file is built whenever the `node osjs build:package` task is run.

```json
{
"build": {
  "less": {
      "src.less": "dest.css"
    }
  }
}
```

---

## Server APIs

You can make your own server-side API methods for your applications. These are defined in `server/main.js`.

### Example server method

You can read about the arguments in the [server API documentation](/doc/server).
```js
test: function(env, http, resolve, reject, args) {
  resolve('This is a response from your application');
}

```

### Example client usage

```js
this._api('test', {}, function(err, res) {
  console.log('Result from your server API method', err, res);
});
```
