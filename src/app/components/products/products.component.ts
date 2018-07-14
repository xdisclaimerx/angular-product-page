import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  mainview:any;
	names:string;
  contents:any;
  menus:string;
  	constructor(public service: DataService) { 

	}
	
  ngOnInit() {
    this.service.getMainView()
		.then(data => {
      
			this.mainview = data;
			this.names = this.mainview.name;
      this.contents = this.mainview.content;
      this.menus=this.mainview.menu;
      // console.log(data)

		});
  }

}
