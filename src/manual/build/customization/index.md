---
title: Customization
layout: layout.html
---

# Customization

You can customize base settings using the built-in [commands](/manual/build/cli), but some things requires setting up template files etc.

## General

To add your own styles (to also override) and files etc. simply use one of the methods [described here](/manual/configuration/#assets).

## Base Template

The base template contains the index HTML file and any assets it uses. Simply make a copy of the default and make any adjustments you want.

```bash
$ cp -r src/templates/dist/default src/templates/dist/mytemplate
$ node osjs config:set --name=build.dist.template --value=mytemplate
$ node osjs build
```

## Login Screen

To customize the login screen markup, just make a copy of the default and make any adjustments you want.

The actual interaction code is in the *Authenticator*.

```bash
$ cp -r src/templates/dist/login/default.html src/templates/dist/login/mytemplate.html
$ node osjs config:set --name=build.dist.login --value=mytemplate
$ node osjs build:core
```

## Splash Screen

To customize the login screen markup, just make a copy of the default and make any adjustments you want.

```bash
$ cp -r src/templates/dist/splash/default.html src/templates/dist/splash/mytemplate.html
$ node osjs config:set --name=build.dist.splash --value=mytemplate
$ node osjs build:core
```
