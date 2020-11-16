# Hoppin Design System

If you make changes, don't forget to `yarn build` and `yarn deploy`.

## Local dev with local DesignSystem

When using local versions of the design system while debugging, we need to teach `yarn link` to use the same version of `react` for both repositories, as local `yarn link` doesn't resolve `resolutions` or `peerDependencies` in package.json, but always used what's in the local node_modules folder...

https://github.com/facebook/react/issues/14257

```
cd design-system
yarn link
yarn install
cd node_modules/react
yarn link
cd ../styled-components
yarn link
cd ../../website
yarn link orbiit-design-system
yarn link react
yarn link styled-components
```

To make it easier the Makefile contains shortcuts for this.

Run `make local/link` in this repo.
Then run `make local/link` in the frontend repo to enable localy linked ODS.
To revert run `make local/unlink` in the frontend repo and commit that to your branch (so yarn.lock contains the right hash of the dependency.)
