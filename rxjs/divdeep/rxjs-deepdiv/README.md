
# Notes

## of and from methods
```ts
constructor() {      
      // strem of data
      // notify all subsribers
      // number is an observables with numbers
      // of creates observables from values.
      //const numbers$ = of([1,2,3,4,5]);

      // one by one observable
      const numbers$ = from([1,2,3,4,5]);

      numbers$.subscribe((data) => {
        console.log('subscriber', data);
        this.data = data;
      });
    }
```

## converting js data
```ts
  // converting data.
    constructor() {
      const users = [
        {id: '1', name: 'John', age: 30},
        {id: '2', name: 'jack', age: 35},
        {id: '3', name: 'Mike', age: 25}
      ]

      const messagePromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve('Promise resovled');
        }, 1000);
      });

      // create stream of users.
      // with of or from
      const users$ = of (users); // observables array of users
      const message$ = from(messagePromise); // with promise we have to use from.
      const bodyClick$ = fromEvent(document, 'click');

      users$.subscribe((data) => {
        console.log(data);
        //this.data = data;
      });

      message$.subscribe((data) => {
        console.log(data);
      });
      
      bodyClick$.subscribe((event) => {
        console.log(event);
      });

    }
```

## observables vs promises.

```ts
```

# RxjsDeepdiv

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.