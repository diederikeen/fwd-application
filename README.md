# FWD Music app

## Setup

Run the application by installing the dependencies with `yarn install`. This should install all of the dependencies
required to run the app.

Once finished you can start the application with `yarn start`. This will open the app on `http://localhost:3000` and the
backend on `http://localhost:3004`.

## Fetching

Fetching will be done with RTK Query, same creators as Redux. Its easy to said up, amazing documentation
and it even auto generates hooks for queries and mutations.

You can see the documentation [here](https://redux-toolkit.js.org/introduction/getting-started)

## Styling

For styling we use [Stitches.dev](https://stitches.dev/docs/). Its an easy to use css-in-js theming solution with great performance.

## Testing

E2E testing will be done by cypress. You can run the tests by running `yarn run cypress open`. This will open a new instance
of Cypress and will show which tests are available.
