# A Simple Node.js API

Companion code for the CircleCI blog tutorial [Troubleshooting CircleCI webhooks](https://circleci.com/blog/troubleshooting-webhooks/).

- The `base-project` branch is the tutorial's starting point. It contains two deliberate bugs (a wrong webhook secret and a misspelled route) that you fix as you follow along.
- The `main` branch contains the finished, fixed code.

## Running the application

Requires Node.js 26 LTS (Node.js 20.19 or later works). If you use nvm, run `nvm use` to pick up the version in `.nvmrc`.

1. Run `npm install`
2. Run `npm start`

The API listens on port `1337`. On the first request, `mongodb-memory-server` downloads a MongoDB binary for the in-memory database, so that first request can take a little while.
