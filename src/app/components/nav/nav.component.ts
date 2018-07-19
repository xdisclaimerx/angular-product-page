import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  mainview:any;
  menus:string;
  displayName:string;
  contents:any;
  	constructor(public service: DataService) { 

	}

  ngOnInit() {
    this.service.getMainView()
		.then(data => {
      
			this.mainview = data;
      this.menus=this.mainview.menu;
      this.contents = this.mainview.content;
		});
  }

}
