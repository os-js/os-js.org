---
title: Configuration
layout: layout.html
---

# Configuration

*Configuration* is done with JSON files that are loaded in order and merged together to form a final tree from which all settings are read.

The files are divided into sections and prefixed with a number so that they load in correct order.

## Environment

See the [Build Commands](/manual/build/cli) page for more information about environments.

```bash

# Set your timezone manually
$ grunt config:set --name=tz --value=Europe/Oslo
```

---

## Settings

See the [Build Commands](/manual/build/cli) page for more information about settings.

---

## Assets

### Extending base CSS


```bash
$ grunt config:set:themes.styleBase:"custom.less"
$ grunt config
$ edit src/client/stylesheets/custom.less

# Run this to update changes
$ grunt themes
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
$ grunt config:set --name=build.dist.template --value=mytemplate
$ edit src/templates/dist/mytemplate/index.html

# Rebuild
$ grunt build:core
```

### Add to build

See `src/conf/500-build.json` for example on how to add to build process.

### Add to boot

```bash
$ grunt config:add-preload --name=FOO --path=PATH
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

### Programatic approach

```js
var list = [
  {type: 'javascript', src: 'local/script/file.js'},
  {type: 'stylesheet', src: '/vendor/stylesheet.css'},
  {type: 'javascript', src: 'http://external/javascript/file.js'}
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
$ grunt config:add-repository --name=package-repository
$ grunt build:manifest build:packages
```

### Removing a repository

```bash
$ grunt config:remove-repository --name=package-repository
$ grunt build:manifest
```

### Enable or Disable a spesific package

Most packages are enabled by default, but in some cases, like with `Broadway` you have to manually enable it.

```bash
# Enable
grunt config:enable-package --name=REPO/PACKAGENAME

# Disable
grunt config:disable-package --name=REPO/PACKAGENAME

# Update manifest
grunt build:config build:manifest
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
