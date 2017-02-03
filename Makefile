SHELL := /bin/sh
DATETIME = $(shell date)

.PHONY: deploy

deploy:
	cp -R app/* dist/
	grunt dist
	cd dist/ && git add . && git commit -m "autocommit on $(DATETIME); see master branch for details"
	cd dist/ && git push origin gh-pages
