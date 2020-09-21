# Princes Site

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment

REACT_APP_API - api endpoint in configured in .env.\* files

## Running locally

```
yarn install
yarn start
```

You might need to change the REACT_APP_API in .env.development if you prefer to use
non local API (https://princes-api.prod-cf.workers.dev)

## Deployment

Requires Cloudflare Workers Bundled

```
yarn install --frozen-lockfile
yarn build
wrangler publish
```
