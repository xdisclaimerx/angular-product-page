import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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
      this.contents = this.mainview.content;
		});
  }

}
