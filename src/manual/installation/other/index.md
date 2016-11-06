---
title: Alternate OS.js installations
layout: layout.html
---

# Containers

## Vagrant

Simply start the virtual machine and then follow normal instructions:

```bash
$ vagrant up
$ vagrant ssh
```

The `Vagrantfile` is included.

---

## Docker

Use the included `Dockerfile` or make your own image with `./bin/build-docker-image.sh`.

---

# Boards

## Arduino

Arduino has a custom build known as [Arduino-OS](https://github.com/arduino-org/Arduino-OS). This is a fork running on `Lua`.

It is available for **TIAN** and **Due** (preloaded).

---

## RaspberryPI

Just follow the normal NIX instructions.

**NOTE** Installing on vfat sdcards is causing some problems with npm packages. Any other linux-based filesystem seems to work just fine.

---

## Intel Edison

### Manual

Follow normal instructions and use the Shadow authentication and System storage modules.

```bash
$ edit vi /etc/opkg/base-feeds.conf

  src all http://iotdk.intel.com/repos/2.0/iotdk/all
  src x86 http://iotdk.intel.com/repos/2.0/iotdk/x86
  src i586 http://iotdk.intel.com/repos/2.0/iotdk/i586

$ opkg update
$ opkg install git

$ ./bin/build-opkg.sh osjs 2.0.0-VERSION all intel-edison
$ ./bin/build-opkg.sh osjs 2.0.0-VERSION x86 intel-edison
$ ./bin/build-opkg.sh osjs 2.0.0-VERSION i586 intel-edison

$ opkg install <package-name>
```

**NOTE** Installing on vfat sdcards is causing some problems with npm packages. Any other linux-based filesystem seems to work just fine.

### Prebuilt images

*Please note that these are not built on a regular basis, and most likely outdated*

```bash
$ edit vi /etc/opkg/base-feeds.conf

  src all https://builds.os.js.org/opkg/edison/all
  src x86 https://builds.os.js.org/opkg/edison/x86
  src i586 https://builds.os.js.org/opkg/edison/i586

$ opkg update
$ opkg install osjs
```

### Launch

```bash
mkdir /home/demo
/osjs/bin/start-edison.sh
```

---

## Other

Same as RaspberryPI. Any device capable of running either Node or PHP should work just fine.

---

# Misc

## NW

This is experimental. See the [repository documentation](https://github.com/os-js/OS.js/blob/master/doc/NW.md) for more information.

---

## X11

This is very experimental. See the [repository documentation](https://github.com/os-js/OS.js/blob/master/doc/X11.md) for more information.
