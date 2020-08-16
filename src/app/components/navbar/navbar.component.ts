import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public userIsAuth=localStorage.getItem('token')!=null?true:false;
  public authListenerSubs:Subscription;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    console.log("entered headers on init function");
    this.authListenerSubs=this.authService.getAuthStatusListener().subscribe(isAuthenticated=>{
      this.userIsAuth=isAuthenticated;
    });
    console.log(this.userIsAuth);
  }


  logout()
  {
    localStorage.clear();
    this.router.navigate(['/']);
    this.authService.authStatusListener.next(false);
  }

}
