import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public authStatusListener=new Subject<boolean>();

constructor(private http:HttpClient) { }

getAuthStatusListener()
{
  return this.authStatusListener.asObservable();
}


addUser(newuser)
{
  return this.http.post("http://localhost:3000/user/signup", newuser);
}
login(user)
{
  return this.http.post("http://localhost:3000/user",user);
}

}
