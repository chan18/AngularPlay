import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of,from, fromEvent } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {

    // observables vs promises.
    constructor() {
      const users = [
        {id: '1', name: 'John', age: 30},
        {id: '2', name: 'jack', age: 35},
        {id: '3', name: 'Mike', age: 25}
      ]

      
    }

}
