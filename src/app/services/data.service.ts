import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  

  constructor(public http: HttpClient) { 
    console.log('Service Loaded');
  }

  getMainView() {
		return new Promise(resolve => {
		  	this.http.get('assets/JSON/config/mainview.json').subscribe(data => {
				resolve(data);
		  	}, err => {
				console.log(err);
		  	});
    });
	}

}
