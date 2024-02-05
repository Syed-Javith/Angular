import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  url = 'http://localhost:5000/auth';

  constructor(private http : HttpClient) {

  }

  loginUser( username : string , password : string ) : Observable<any>{
    return this.http.post(this.url + '/login' , { username : username , password : password})
  }

  register(user : any) : Observable<any>{
    return this.http.post(this.url + '/register' , user)
  }
}
