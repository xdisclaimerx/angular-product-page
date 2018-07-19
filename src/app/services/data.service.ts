import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  

  constructor(public http: HttpClient) { 
    console.log('Service Loaded');
  }

  getMainView() {
		return new Promise(resolve => {
				this.http.get('assets/JSON/config/mainview.json')
				.subscribe(data => {resolve(data);}, 
				err => {
					console.log(err);
		  	});
    });
	}

	getProductHeader() {
		return new Promise(resolve => {
				this.http.get('assets/JSON/config/products.json')
				.subscribe(proddata => {resolve(proddata);}, 
				err => {
					console.log(err);
		  	});
    });
	}

	getProductList() {
		return new Promise(resolve => {
				this.http.get('assets/JSON/data/products.json')
				.subscribe(proddatalist => {resolve(proddatalist);}, 
				err => {
					console.log(err);
		  	});
    });
	}

	getUserHeader() {
		return new Promise(resolve => {
				this.http.get('assets/JSON/config/users.json')
				.subscribe(userdata => {resolve(userdata);}, 
				err => {
					console.log(err);
		  	});
    });
	}

	getUser() {
		return new Promise(resolve => {
				this.http.get('assets/JSON/data/users.json')
				.subscribe(udata => {resolve(udata);}, 
				err => {
					console.log(err);
		  	});
    });
	}

}
