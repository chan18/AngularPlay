
# Linting

Install and configure ESLint

```bash
ng add @angular-eslint/schematics
```

Install and configure Prettier

```bash
npm install prettier --save-dev //save dev will add to the project json file.
```

Configure Prettier to be used as an ESLint plugin

```bash
npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier
```

Linting angular project
```bash
ng lint

Linting "setup"...

All files pass linting.
```

.pretterarc.json
.pretterignore


```bash
npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev
```

# setting up pretter 

https://www.npmjs.com/package/@angular-eslint/schematics?activeTab=versions
https://github.com/angular-eslint/angular-eslint

```bash
ng add angular-eslint
```

following dependencies will install.

@angular-eslint/builder
@angular-eslint/eslint-plugin
@angluar-eslint/eslint-plugin-template
@angular-eslint/schematics
@angular-eslint/tempalte-parser
@angular-eslint/test-utiles
@angular-eslint/utils


```bash
ng add @angular/ng-eslint/schematics
```

installing specific version
```bash
npm i -D @angular-eslint/template-parser@4
```

Add eslint while generating project.
```bash
# To generate a new Angular app in the workspace using ESLint
ng g angular-eslint:application 

# To generate a new Angular library in the workspace using ESLint
ng g angular-eslint:library
```

Adding to existing project.
```bash
ng g angular-eslint:add-eslint-to-project {{YOUR_PROJECT_NAME_GOES_HERE}}
```

# Setup

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.