import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginFailed : boolean = false;

  constructor(private cookies : CookieService , private user : UserService ,  private router : Router){
    
  }

  login(form : NgForm ){

    const username = form.controls['username'].value;
    const password = form.controls['password'].value;
    this.user.loginUser(username , password).subscribe(
      (result)=>{
      // console.log(result);
      if(result?.user){
        this.cookies.set('user',result.user?.username, 2 ,'/');
        this.router.navigate(['/']);
      }
    } ,

    (err) =>{
      alert("invalid login");
      this.loginFailed = true;
    }
   
    
    )

  }
}
