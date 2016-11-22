
build: node_modules static jsdoc redirects robots installer

static:
	node index.js

watch:
	node index.js --watch

jsdoc:
	rm -rf build/doc/client build/doc/server
	mkdir -p build/doc/client build/doc/server
	jsdoc --debug -c .jsdoc-client -d ./build/doc/client/ -t layouts/jsdoc 2>/dev/null || :
	jsdoc --debug -c .jsdoc-server -d ./build/doc/server/ -t layouts/jsdoc -r 2>/dev/null || :

redirects:
	node make-redirects.js

robots:
	node make-robots.js

installer:
	cp OS.js/src/installer/installer.sh src/installer

node_modules: package.json
	npm install

.PHONY: build jsdoc static watch redirects
