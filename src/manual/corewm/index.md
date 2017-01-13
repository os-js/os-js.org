---
title: CoreWM
layout: layout.html
---

# CoreWM

## Themes

### Styles

```bash
$ cp -r src/client/themes/styles/default src/client/themes/styles/mytheme
$ edit src/client/themes/styles/mytheme/metadata.json
$ edit src/client/themes/styles/mytheme/style.less
$ edit src/conf/112-themes.json # Or create your own file
$ node osjs build:config build:theme --style=mytheme
```

### Icons

```bash
$ cp -r src/client/themes/icons/default src/client/themes/icons/mytheme
$ edit src/client/themes/icons/mytheme/metadata.json
$ edit src/conf/112-themes.json # Or create your own file
$ node osjs build:config build:themes
```

### Sounds

```bash
$ cp -r src/client/themes/sounds/default src/client/themes/sound/mytheme
$ edit src/client/themes/sound/mytheme/metadata.json
$ edit src/conf/112-themes.json # Or create your own file
$ node osjs build:config build:theme --static
```

### Fonts

See the included font theme for an example on how to set up.

```bash
$ edit src/conf/112-themes.json # Or create your own file
$ node osjs build:config build:theme --fonts
```

---

## Panel

To create Panel Items, look at `src/packages/default/CoreWM/panelitems` for examples. Add your newly created file(s) to the CoreWM metadata.

*API documentation is coming soon.*

## Widget

To create Widgets, look at `src/packages/default/CoreWM/widgets` for examples. Add your newly created file(s) to the CoreWM metadata.

*API documentation is coming soon.*

