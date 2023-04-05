# PwaLocationApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.
This project helps to save GPS location from browser to local storage. It also plot a pin on google map based on latitude/longitude.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. <br/>
Used below additional steps to install googlemaps and pwa dependencies <br/>
npm add @angular/pwa <br/>
npm add @types/googlemaps <br/>
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. <br/>
We can also do production build and run as follows <br/>

ng build --configuration production <br/>
ng serve --configuration production <br/>
## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
