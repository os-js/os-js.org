---
title: Build Commands
layout: layout.html
---

# Commands

You can use these tasks via `node osjs <task>`.

## Build Tasks

Available targets: `dist`, `dist-dev` (default is both. Exception is for `build:config`, which uses targets from configuration section below)

| Task             | Arguments                                            | Description                                |
| ---------------- | ---------------------------------------------------- | ------------------------------------------ |
| build            | `--target=TARGET`                                    | Build everything                           |
| build:config     | `--target=TARGET`                                    | Build configuration files                  |
| build:manifest   |                                                      | Build package manifest file                |
| build:core       | `--target=TARGET (--standalone) (--nw) (--compress)` | Build core files and dist directories      |
| build:package    | `--name=REPO/NAME --target=TARGET (--compress)`      | Build spesific package                     |
| build:packages   | `--target=TARGET (--compress)`                       | Build all packages                         |
| build:theme      | `--style=NAME`                                       | Builds spesific style theme                |
| build:theme      | `--icons=NAME`                                       | Builds spesific icon theme                 |
| build:theme      | `--static`                                           | Copies all static theme resources dist     |
| build:theme      | `--fonts`                                            | Copies all fonts to dist                   |
| build:themes     |                                                      | Builds all themes                          |

### Examples

```bash
$ node osjs build:config build:themes
$ node osjs build:core --target=dist-dev
```

---

## Configuration Tasks

Available targets: `client`, `server` (default is both)

| Task                       | Arguments                                  | Description                                |
| -------------------------- | -------------------------------------------| ------------------------------------------ |
| config:add-repository      | `--name=FOO`                               | Adds a repository (directory basename)     |
| config:remove-repository   | `--name=FOO`                               | Removes a repository (directory basename)  |
| config:list-packages       |                                            | Lists all repository packages states       |
| config:enable-package      | `--name=FOO`                               | Force-enable given package                 |
| config:disable-package     | `--name=FOO`                               | Force-disable given package                |
| config:add-mount           | `--name=FOO --description=BAR --path=PATH` | Adds a filesystem mountpoint               |
| config:add-preload         | `--name=FOO --path=PATH`                   | Adds a preload file                        |
| config:get                 | `--name=FOO`                               | Gets a configuration entry                 |
| config:set                 | `--name=FOO --value=BAR`                   | Sets a configuration entry                 |

### Examples

```bash
$ node osjs config:add-repository --name=extras
$ node osjs config:set --name=authenticator --value=mysql
$ node osjs config:add-mount --name=tmp --description="Temporary files" --path=/tmp
```

---

## Generators

Available targets: `dist`, `dist-dev` (default is `dist-dev`)

| Task                       | Arguments                        | Description                                |
| -------------------------- | -------------------------------- | ------------------------------------------ |
| generate:apache-htaccess   | `(--target=TARGET)`              | Builds the Apache `.htaccess` file         |
| generate:apache-vhost      | `--out=FILE (--target=TARGET)`   | Generate a Apache vhost config             |
| generate:nginx-config      | `--out=FILE`                     | Generate a Nginx config                    |
| generate:lighttpd-config   | `--OUT=FILE`                     | Generate a lighttpd config                 |
| generate:package           | `--name=REPO/NAME (--type=FOO)`  | Creates a new package                      |

### Examples

```bash
$ node osjs generate:package --name=default/AwesomeApp --type=iframe
$ sudo node osjs generate:apache-vhost --out=/etc/apache2/sites-enabled/100-osjs.conf --target=dist
```

