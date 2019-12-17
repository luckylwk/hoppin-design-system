.PHONY: install pretty test/pretty build dev start deploy/now

install:
	yarn install

pretty:
	yarn prettier:all

test/pretty:
	yarn prettier:check

dev:
	yarn start

start:
	yarn start

make build:
	yarn build

deploy/now:
	yarn build
	yarn deploy
