import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http' ; 
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {  

  private url: string = "http://localhost:3000/users"; 


  constructor(private http:HttpClient) { } 


  GetUser() : Observable<User[]> { 
    return this.http.get<User[]>(this.url) ; 
  }
}
