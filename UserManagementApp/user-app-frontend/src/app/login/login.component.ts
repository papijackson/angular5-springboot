import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorage} from '../auth/token.storage';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private router:Router, private authService:AuthService, private tokenStorage:TokenStorage) { }

  ngOnInit() {

  }

  login():void{
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.router.navigate(['user']);
      }
    );
  }

}
