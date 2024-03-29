# GOV.UK Design System React Implementation User Guide

The GOV.UK Design System is an official design framework produced by the UK Government and defines best practices and rules that must be followed to ensure that your code base is GDS Compliant.

You can find the guide at the <a href="https://design-system.service.gov.uk/" target="_blank" rel="noreferrer">GOV.UK Design System</a> website.

## Storybook use

If you just with to check functionality using the Storybook functionality

```bash
npm install # installs all necessary modules
npm run build # generates the distributable package
npm run storybook # starts the storybook instance
```

You can view the storybook <a href="https://pa-digital.github.io/govuk-frontend-react" target="_blank" rel="noopener">here</a>

## Local NPM use

If you just with to use the package as is direct from the repository then simply run the commands below in a single terminal window

```bash
npm install # installs all necessary modules
npm run build # generates the distributable package
npm pack # creates an npm package
```

After installing the npm package you will need to reference the style and font files

```bash
/*! Copyright (c) 2011 by Margaret Calvert & Henrik Kubel. All rights reserved. The font has been customised for exclusive use on gov.uk. This cut is not commercially available. */
@font-face{
	font-family:"GDS Transport";
	font-style:normal;
	font-weight:normal;
	src:url("/node_modules/@pa-digital/govuk-frontend-react/dist/assets/fonts/light-94a07e06a1-v2.woff2") format("woff2"), url("/node_modules/@pa-digital/govuk-frontend-react/dist/assets/fonts/light-f591b13f7d-v2.woff") format("woff");
	font-display:fallback
}
@font-face{
	font-family:"GDS Transport";
	font-style:normal;
	font-weight:bold;
	src:url("/node_modules/@pa-digital/govuk-frontend-react/dist/assets/fonts/bold-b542beb274-v2.woff2") format("woff2"),url("/node_modules/@pa-digital/govuk-frontend-react/dist/assets/fonts/bold-affa96571d-v2.woff") format("woff");
	font-display:fallback
}
@import "node_modules/@pa-digital/govuk-frontend-react/dist/assets/govuk-frontend-react.css";
```

## Pre-Requisites

In your projects index.html file in the public folder, you need to add the following class tags

```bash
<head class="govuk-template">
<body class="govuk-template__body js-enabled govuk-frontend-supported">
```

## Alterations to the project

After making any changes to the library, all changes and new components must have full accesibility tests and unit tests written

There are two commands for testing

```bash
npm run test # to test the entire library
npm run test "testfile.test.tsx" # to test an individual file
```

```bash
npm run cover # to run test coverage for the entire library
npm run cover "testfile.test.tsx" # to run test coverage for an individual file
```

Once all code is covered and tests are passing you can now build and package the project

```bash
npm run build # generates the distributable package
npm run pack # creates an npm package
```
