---
title: Build Commands
layout: layout.html
---

# Commands

You can use these tasks via `node osjs <task>`.

## Misc Tasks

| Task             | Arguments                                      | Description                                |
| ---------------- | ---------------------------------------------- | ------------------------------------------ |
| run              | `(--debug) (--loglevel=N) (--port=N)`          | Runs OS.js node server                     |
| watch            |                                                | Watch codebase and autobuild changes       |

### Examples

```bash
$ node osjs run
```

## Build Tasks

| Task             | Arguments                                    | Description                                |
| ---------------- | ---------------------------------------------| ------------------------------------------ |
| build            | `(--debug)`                                  | Build everything                           |
| build:config     | `(--debug)`                                  | Build configuration files                  |
| build:manifest   |                                              | Build package manifest file                |
| build:core       | `--debug) (--standalone) (--nw) (--compress)`| Build core files and dist directory        |
| build:package    | `--name=REPO/NAME (--debug) (--compress)`    | Build spesific package                     |
| build:packages   | `(--debug) (--compress)`                     | Build all packages                         |
| build:theme      | `--style=NAME`                               | Builds spesific style theme                |
| build:theme      | `--icons=NAME`                               | Builds spesific icon theme                 |
| build:theme      | `--static`                                   | Copies all static theme resources          |
| build:theme      | `--fonts`                                    | Copies all fonts to dist                   |
| build:themes     |                                              | Builds all themes                          |

### Examples

```bash
$ node osjs build:config build:themes
$ node osjs build:core --debug
```

---

## Configuration Tasks

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

| Task                       | Arguments                        | Description                                |
| -------------------------- | -------------------------------- | ------------------------------------------ |
| generate:apache-htaccess   | `(--debug)`                      | Builds the Apache `.htaccess` file         |
| generate:apache-vhost      | `--out=FILE`                     | Generate a Apache vhost config             |
| generate:nginx-config      | `--out=FILE`                     | Generate a Nginx config                    |
| generate:lighttpd-config   | `--OUT=FILE`                     | Generate a lighttpd config                 |
| generate:package           | `--name=REPO/NAME (--type=FOO)`  | Creates a new package                      |

### Examples

```bash
$ node osjs generate:package --name=default/AwesomeApp --type=iframe
$ sudo node osjs generate:apache-vhost --out=/etc/apache2/sites-enabled/100-osjs.conf --debug
```

