# Cypress RealWorld App

This repository from (https://github.com/cypress-io/cypress-realworld-app) contains Cypress end-to-end tests for the RealWorld application, focusing on Sign In and Sign Up functionalities.

### Prerequisites

This project requires [Node.js](https://nodejs.org/en/) to be installed on your machine. Refer to the [.node-version](./.node-version) file for the exact version.

[Yarn Classic](https://classic.yarnpkg.com/) is also required. Once you have [Node.js](https://nodejs.org/en/) installed, execute the following to install the npm module [yarn](https://www.npmjs.com/package/yarn) (Classic - version 1) globally.

```shell
npm install yarn@latest -g
```

If you have Node.js' experimental [Corepack](https://nodejs.org/dist/latest/docs/api/corepack.html) feature enabled, then you should skip the step `npm install yarn@latest -g` to install Yarn Classic globally. The RWA project is locally configured for `Corepack` to use Yarn Classic (version 1).

#### Yarn Modern

**This project is not compatible with [Yarn Modern](https://yarnpkg.com/) (version 2 and later).**

### Installation

To clone the repo to your local system and install dependencies, execute the following commands:

```shell
git clone https://github.com/philfujisawa/cypress-realworld-app.git
cd cypress-realworld-app
yarn
npm install chance
```
### Run the app

```shell
yarn dev
```

### Start Cypress

```shell
yarn cypress:open
```

This Cypress automation will cover:

signin.spec.js: Verifies login functionality.
signup.spec.js: Tests user registration and validations.