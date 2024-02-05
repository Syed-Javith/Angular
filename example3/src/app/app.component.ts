import { Component } from '@angular/core';
import { FormControl, FormGroup, NgControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  reactiveForm : any ;

  onChange(form : NgForm) : void{
    console.log(form);
    console.log(form.controls['name']);
    console.log(form.controls['gender']);
    
  }

  change(form: NgForm) {
    this.formList = form.controls['formList'].value;
    this.list = this.formList.split(' ');
  }
  list: string[] = [];
  formList: string = '';

  constructor(){
    this.reactiveForm = new FormGroup({
      name : new FormControl('',[
        Validators.minLength(6),
        Validators.required
      ]),
      email : new FormControl('',[
        Validators.required
      ]),
    })
  }

}