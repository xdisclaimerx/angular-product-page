import { Component, OnInit  } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <app-nav></app-nav>
    <router-outlet></router-outlet>
    <div class="jumbotron">
      <h1 class="display-3" innerHTML="{{contents}}"></h1>
      <hr class="my-4">
    </div>
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
      console.log(data)
    });
  }
}
