---
title: Configuration
layout: layout.html
---

# Configuration

*Configuration* is done with JSON files that are loaded in order and merged together to form a final tree from which all settings are read.

The files are divided into sections and prefixed with a number so that they load in correct order.

If you want to see the entire configuration tree, run `node osjs config:get`.

## Variables

You can define your own variables (or keywords) in the configuration tree:

```bash
$ node osjs config:set --name=my.namespace.key --value=foo
$ node osjs config:set --name=some.other.key --value="%my.namespace.key% and some other stuff"
```

You can also define root-level variables in all uppercase letters that can be overriden by environmental variables when you run OS.js:

```bash
# Set a default value
$ node osjs config:set --name=KEY --value=/opt

# Then for example change a mountpoint to use this variable
$ node osjs config:set --name=server.vfs.mounts.shared --value="%KEY%/shared"

# Example of how to override upon start
$ KEY=/usr/share/osjs node osjs run
```

## Environment

See the [Build Commands](/manual/build/cli) page for more information about environments.

```bash
# Set your timezone manually
$ node osjs config:set --name=tz --value=Europe/Oslo
```

---

## Settings

See the [Build Commands](/manual/build/cli) page for more information about settings.

---

## Assets

### Extending base CSS


```bash
$ node osjs config:set:themes.styleBase:"custom.less"
$ edit src/client/stylesheets/custom.less
$ node osjs build:themes build:config
```

#### Example file

```css
@import "theme.less";

/* YOUR STYLES HERE */
```

### Add to template

```bash
# Alternative 1:
$ edit src/templates/dist/default/index.html

# Alternative 2 (recomended):
$ cp -r src/templates/dist/default src/templates/dist/mytemplate
$ node osjs config:set --name=build.dist.template --value=mytemplate
$ edit src/templates/dist/mytemplate/index.html

# Rebuild
$ node osjs build:core
```

### Add to build

See `src/conf/500-build.json` for example on how to add to build process.

### Add to boot

```bash
$ node osjs config:add-preload --name=FOO --path=PATH
```

### Add to package

Modify your `metadata.json` file and modify the preload section:

```json
{
  "preload": [
    "path-here"
  ]
}
```

### Adding overlays

You can also add overlays into the build process:

```json
{
  "build": {
    "overlays": {
      "example": {
        "locales": [],
        "javascript": [],
        "stylesheets": []
      }
    }
  }
}
```

You can add files the configuration system:
```bash
$ node osjs config:add-script --path=/path/to/script.js [--overlay=custom_name]
$ node osjs config:add-style --path=/path/to/style.css [--overlay=custom_name]
$ node osjs config:add-locale --path=/path/to/locale.js [--overlay=custom_name]
```

### Programatic approach

```js
var list = [
  'local/script/file.js',
  '/vendor/stylesheet.css',
  'http://external/javascript/file.js'
];

Utils.preload(list, function() {
  /* done */
});
```

---

## Packages


### Adding a repository

```bash
$ git clone --recursive https://github.com/username/package-repository src/packages/package-repository
$ node osjs config:add-repository --name=package-repository
$ node osjs build:manifest build:packages
```

### Removing a repository

```bash
$ node osjs config:remove-repository --name=package-repository
$ node osjs build:manifest
```

### Enable or Disable a spesific package

Most packages are enabled by default, but in some cases, like with `Broadway` you have to manually enable it.

```bash
# Enable
$ node osjs config:enable-package --name=REPO/PACKAGENAME

# Disable
$ node osjs config:disable-package --name=REPO/PACKAGENAME

# Update manifest
$ node osjs build:config build:manifest
```

---

## Proxies

```json
{
  "server": {
    "proxies": {
      "/^\\/starts\\-with/": "http://remote-service/somewhere",
      "match-only/": "http://localhost:5000/here"
    }
  }
}
```
