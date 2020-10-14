.PHONY: install clean pretty test/pretty build dev start deploy/now deploy/now-prod

install:
	yarn install

clean:
	rm -rf node_modules;
	ls;

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

deploy:
	now switch orbiit
	now

deploy/prod:
	now switch orbiit
	now --prod
