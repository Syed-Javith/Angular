import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registeredUser : {
    username : string ,
    password : string
  } = {
    username : "",
    password : ""
   };

  constructor(private user : UserService , private router : Router){

  }

  register(form : NgForm){

    this.registeredUser.username = form.controls['name'].value;
    this.registeredUser.password = form.controls['password'].value;

    this.user.register(this.registeredUser).subscribe(
      (result)=>{
        if(result?.UserAlreadyFound){
          alert("user already found");
          this.router.navigate(['/login']);
        }else{
        alert("registered successfully");
        }
      }
    )
  }
}
