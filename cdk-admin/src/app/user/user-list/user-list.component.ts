import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  displayedColumns = ['id', 'username', 'firstname', 'lastname', 'age'];
  dataSource = new MatTableDataSource<User>();
  rows2 = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
  rows:User[];

  users = [{
    "id":1,
    "username":"papijackson"
  },{
    "id":2,
    "username":"mamijackson"
  },{
    "id":3,
    "username":"leojackson"
  },{
    "id":4,
    "username":"papijackson"
  }];

  constructor(private userService:UserService) { }

  ngOnInit() {
  /*  this.userService.getUsers().subscribe(data => {
      this.dataSource.data = data;
    });*/

    this.userService.getUsers().subscribe(data => {
        this.rows = data;
      });

  }

}
