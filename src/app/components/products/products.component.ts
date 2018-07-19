import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  contents:any;
  productdata: any;
  columnDisplayName:any;
  	constructor(public service: DataService) {}
	
  ngOnInit() {
    
    this.service.getProductHeader()
		.then(proddata => {
      this.products = proddata;
      this.columnDisplayName = this.products.columndFields;
      console.log(this.products.columndFields);
    });
    
    this.service.getProductList()
		.then(proddatalist => {
      
      this.productdata = proddatalist;
      console.log(proddatalist);
    });

  }

}
