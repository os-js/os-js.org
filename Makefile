all:
	node generate.js
	bundle exec middleman build
	cp -r includes/* build/
