import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {AuthService} from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  form:FormGroup;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      'name':new FormControl(null,{validators:[Validators.required]}),
      'password':new FormControl(null,{validators:[Validators.required]})
    })
  }

  onSignupForm()
  {
    console.log(this.form);
    if(this.form.invalid)
    {
      return;
    }
    let newUser={
      name:this.form.value.name,
      password:this.form.value.password,
    }
    console.log(newUser);
    this.authService.addUser(newUser)
        .subscribe((items:any)=>{
          if(items.success)
          {
            this.router.navigate(['/login']);
          }
        },err=>{
          alert(err.error.message);
          window.location.reload();
        })
  }

}
