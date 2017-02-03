SHELL := /bin/sh

.PHONY: deploy

deploy:
	cp -R app/* dist/
	grunt dist
