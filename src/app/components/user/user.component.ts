import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  mainview:any;
	names:Name[];

  constructor(public service: DataService) { }

  ngOnInit() {
    this.service.getMainView()
		.then(data => {
      
			this.mainview = data;
			this.names = this.mainview.name;
      // console.log(this.mainview.name)

		});
  }

}

interface Name {
  name: string
}
