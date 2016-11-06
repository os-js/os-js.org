
build: node_modules jsdoc static

static:
	node index.js

watch:
	node index.js --watch

jsdoc:
	rm -rf build/doc
	mkdir build/doc
	mkdir build/doc/client
	mkdir build/doc/server
	jsdoc --debug -c .jsdoc-client -d build/doc/client -t layouts/jsdoc
	jsdoc --debug -c .jsdoc-server -d build/doc/server -t layouts/jsdoc

node_modules: package.json
	npm install

.PHONY: build jsdoc static watch
