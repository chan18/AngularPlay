import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of,from, fromEvent, Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {

    // observables are async
    constructor() {
      /*
        console.log(1);
        promise.then(resposne => {
          console.log(resposne);
        });
        console.log(2);
      */

      const numbers$ = from([1,2,3,4,5]);

      numbers$.subscribe((data) => {
        console.log('subscriber', data);
      });
    }
}
