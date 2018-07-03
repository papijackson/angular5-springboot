import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';

@Injectable()
export class  UserService {
  baseUrl = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }


  public getUsers(): Observable<User[]> {
     return this.http.get<User[]>(this.baseUrl +'users');
  }

  public getUserById(id:string):Observable<User> {
     return this.http.get<User>(this.baseUrl +'users/'+id);
  }

}
