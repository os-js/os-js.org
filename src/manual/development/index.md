---
title: Development
layout: layout.html
---

# Development

## Style guide

- Use UTF-8 encoding for all files with text.
- Use 2 space for indentation.
- Write [good commit messages](https://github.com/erlang/otp/wiki/writing-good-commit-messages).
- Look at the codebase for a general feel for the code style

---

## Set up environment

```bash
# Clone OS.js
$ git clone https://github.com/your-username/OS.js.git
$ cd OS.js

# Install all dependencies and extra testing suite
$ npm install
$ sudo npm install -g grunt-cli mocha

# Build everything
$ node osjs build --debug

# Optionally run watch to automatically rebuild client files upon changes.
$ node osjs watch --debug

# Optionally install the node supervisor to automaticall restart server upon changes.
$ npm install -g supervisor

# Start server
$ ./bin/start.sh --debug
```

---

## Tips and Tricks

### Automatically build changes

Simply run `node osjs watch --debug` (or without --debug for a normal build)

### Reload application in client

```js
OSjs.API.relaunch('applicationName');
```

---

## Testing

You can test everything (html and css syntax, javascript linting and unit tests) by simply running `grunt test`.

---


## Contributing

Everything is done with Git and Github. All changes should be submitted via a custom branch.

- First, you have to create a new [Github account](https://github.com/).
- Then proceed to [fork](https://github.com/os-js/OS.js#fork-destination-box) OS.js to make a copy to your account.
- Set up a developer environment described above, but change the repository URL to the fork you made.
- Now you can make changes and publish them to the main repository for addition.

```bash
# Create a new branch
# You can name the branch `issue-XXX` if you have an open issue for your planned changes.
# Or if not, something like `translate-LANG`, `feature-X` or `bugfix-Y`
$ git checkout -b issue-XXX

# Make modifications
$ edit src/client/javascript/init.js

# Rebuild everything
$ node osjs build --debug

# Run tests
$ grunt test

# Commit and push changes
$ git add src/client/javascript/init.js
$ git commit -m "API: Fix exception on init when connection is lost"
$ git push origin issue-XXX

```

Now go to the OS.js repository [pull request](https://github.com/os-js/OS.js/pulls) page. Find your branch and press "Create pull request". Fill in the details and submit. It will be looked at ASAP.
