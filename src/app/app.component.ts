import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  
}
