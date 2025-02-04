import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of,from } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {

    data: number = 0;

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

}
