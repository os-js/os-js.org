---
title: Authentication Modules
layout: layout.html
---

# Authentication Modules

You can change the login behaviour of OS.js by changing the configuration to a module that is included. You can also, of course; make your own!

## Demo

For demonstration purposes. Does not do any actual athentication and has no restrictions.

---

## Mysql

This is just a simple database backend that authorizes login attempts via mysql.

**Also set up the [Mysql storage](/manual/storage/modules/#mysql) module for this to work as intended.**

```bash
# Install node dependency
$ npm install mysql bcryptjs

# Change the configured authenticator and its options
$ grunt config:set --name=authenticator --value=mysql
$ grunt config:set --name=server.modules.auth.mysql.host --value=localhost
$ grunt config:set --name=server.modules.auth.mysql.user --value=osjsuser
$ grunt config:set --name=server.modules.auth.mysql.password --value=osjspassword
$ grunt config:set --name=server.modules.auth.mysql.database --value=osjs

# Make OS.js reload after you log out
$ grunt config:set --name=client.ReloadOnShutdown --value=true

# Rebuild
$ grunt build:config build:core

# Set up database
$ mysql -u root -p

mysql> CREATE DATABASE osjs;
mysql> GRANT USAGE ON *.* TO osjsuser@localhost IDENTIFIED BY 'osjspassword';
mysql> GRANT ALL PRIVILEGES ON osjs.* TO osjsuser@localhost;

# Then set up database tables
mysql> CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `groups` text,
  `settings` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

# And then add yourself a user
$ node bin/mysql-user.js add anders admin
$ mkdir vfs/home/myadminaccount
```

---

## PAM and Shadow

Log in via the system (`PAM` or `Shadow`) authentication system. **This is only available for Linux and Node**.

**Also set up the [System storage](/manual/storage/modules/#system) module for this to work as intended.**

### Setup:

```bash
# You need the PAM developer package to build node gyp module
$ sudo apt-get install libpam0g-dev

# PAM dependencies (you need PAM development package on your system)
$ npm install nan@1.1.0
$ npm install authenticate-pam
$ npm install userid

# Shadow dependencies
$ npm install git+https://github.com/andersevenrud/passwd-linux
$ npm install userid

# Set up groups
$ mkdir /etc/osjs
$ edit /etc/osjs/groups.json

# Set up package blacklist (optional)
$ edit /etc/osjs/blacklist.json

# Change the configured authenticator (or use "shadow" here)
$ grunt config:set --name=authenticator --value=pam

# Make OS.js reload after you log out
$ grunt config:set --name=client.ReloadOnShutdown --value=true

# Update configuration and template files
$ grunt build:config

# Rebuild (only required if you use `dist`)
# grunt build:core --target=dist

```

**NOTE:** On some systems you might have to install `authenticate-pam` with `npm install -g` or else you might get a *Error in service module* upon request.

**NOTE:** Also, on some systems you might have to run OS.js server as an administrator (`sudo`) depending on the PAM setup.
