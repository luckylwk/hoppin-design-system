.PHONY: install pretty test/pretty dev start deploy/now

install:
	yarn install

pretty:
	yarn prettier:all

test/pretty:
	yarn prettier:check

start:
	yarn start

dev:
	yarn start

deploy/now:
	yarn build
	yarn deploy
