.PHONY: install clean pretty test/pretty build dev start deploy/now deploy/now-prod local/link

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

deploy/now:
	now switch orbiit
	now

deploy/now-prod:
	now switch orbiit
	now --prod

local/link:
	yarn link
	cd node_modules/react
	yarn link
	cd ../styled-components
	yarn link