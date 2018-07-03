import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user:User = new User();

  constructor(private userService:UserService,private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {

    this.userService.getUserById(this.route.snapshot.paramMap.get("id")).subscribe(data => {
        this.user = data;
      });;
  }

}
