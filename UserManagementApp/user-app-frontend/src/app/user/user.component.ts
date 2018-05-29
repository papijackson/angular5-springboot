import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {User} from './user.model';
import {UserService} from './user.service';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //users : User[];
  displayedColumns = ['id', 'username'];
  dataSource = new MatTableDataSource<User>();
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );

    /*
    this.users = [
      {
        "username":"papijackson",
        "firstname":"Jacques",
        "lastname":"FAYE"
      },
      {
        "username":"aidaannaf",
        "firstname":"Aida Anna",
        "lastname":"FALL"
      }

    ]*/
  }
}
