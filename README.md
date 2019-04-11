[![Build Status](https://travis-ci.org/holgergp/cypressioCucumberExample.svg?branch=master)](https://travis-ci.org/holgergp/cypressioCucumberExample)

Example Sources for my [article](https://blog.codecentric.de/2019/04/bdd-und-end-to-end-tests-cypress-io-mit-cucumber-verbinden/) (just in german language for now) about the [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor).

Available commands:
- `yarn`: As usual please install dependecies first.
- `yarn start`: Start the app.
- `yarn cypress:open`: Open the Cypress-UI, assuming a running app.
- `yarn cypress:run`: Run Cypress tests headlessly again, assuming a running app.
- `yarn cypress:run:record`: Run Cypress tests headlessly and record the test results. 
If you do so, you probably have to set up your own [Cypress Dashboard](https://www.cypress.io/dashboard/).
- `yarn test:cypress:ci`: Shorthand to run the tests in CI. Starts the app.
- `yarn test:cypress:local`: Alternative for `yarn cypress:run`.
- `yarn gherkin`: Lint your cucumber steps.