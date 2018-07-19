import { Component, OnInit  } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" *ngFor="let menu of menus">
          <a routerLink="{{ menu.name }}" class="nav-link">{{ menu.displayName }}<span class="sr-only"></span></a>
        </li>
      </ul>
    </div>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent implements OnInit {
  mainview:any;
  contents:any;
  	constructor(public service: DataService) { 

	}

  ngOnInit() {
    this.service.getMainView()
		.then(data => {

			this.mainview = data;
      this.contents = this.mainview.content;
      this.menus=this.mainview.menu;
      console.log(data)
    });
  }
}
