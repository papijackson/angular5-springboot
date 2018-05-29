import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from './user.model';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  private userUrl = 'http://localhost:8080/';

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + 'users');
  }

}
