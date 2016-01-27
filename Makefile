all:
	rm source/doc/client/*
	rm source/doc/server/*
	git checkout -- source/doc/client/index.html.erb
	git checkout -- source/doc/server/index.html.erb
	node generate.js
	bundle exec middleman build
	cp -r includes/* build/
