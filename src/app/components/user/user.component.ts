import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:any;
  usersid:any;
  fullname:any;
  bio:any;
  role:any;
  columndFields:any[];
  

  constructor(public service: DataService) { }

  ngOnInit() {
    this.service.getUserHeader()
		.then(userdata => {
      
			this.users = userdata;
			this.columndFields = this.users.columndFields;
      console.log(this.users.columndFields)

    });
    
    this.service.getUser()
		.then(udata => {
      
			this.usersid = udata;
      this.fullname = this.usersid.fullname;
      this.bio = this.usersid.bio
      console.log(this.usersid)

		});
  }

}
