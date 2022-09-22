# GOV.UK Design System React Implementation User Guide

The GOV.UK Design System is an official design framework produced by the UK Government and defines best practices and rules that must be followed to ensure that your code base is GDS Compliant.

You can find the guide at the <a href="https://design-system.service.gov.uk/" target="_blank" rel="noreferrer">GOV.UK Design System</a> website.

## Storybook use

If you just with to check functionality using the Storybook functionality

```bash
yarn install # installs all necessary modules
yarn build # generates the distributable package
yarn storybook # starts the storybook instance
```

## Local NPM use

If you just with to use the package as is direct from the repository then simply run the commands below in a single terminal window

```bash
yarn install # installs all necessary modules
yarn build # generates the distributable package
yarn pack # creates an npm package
```

After installing the npm package you will need to reference the style

```bash
@import "/node_modules/gdsfrontend/dist/gdsfrontend.css";
```

## Alterations to the project

After making any changes to the library, all changes and new components must have full accesibility tests and unit tests written

There are two commands for testing

```bash
yarn test # to test the entire library
yarn test "testfile.test.tsx" # to test an individual file
```

```bash
yarn cover # to run test coverage for the entire library
yarn cover "testfile.test.tsx" # to run test coverage for an individual file
```

Once all code is covered and tests are passing you can now build and package the project

```bash
yarn build # generates the distributable package
yarn pack # creates an npm package
```
# gdsfrontend
