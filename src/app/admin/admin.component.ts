import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  loginform:FormGroup;
  

  constructor() { 

   

  }


  ngOnInit() {

    this.loginform = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(10), Validators.maxLength(20)]),
      pan: new FormControl(
        '',
        [Validators.required,Validators.maxLength(10), Validators.pattern(/^[a-zA-Z]{3}[P]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$/)])
    })
  }


  login(){
    alert(JSON.stringify(this.loginform.value))
  }

  _get(control:string):AbstractControl{
    return this.loginform.controls[control];
  }

}

class A {


  ngOnInit(){
    
  }

  ngOnChanges(changes:SimpleChanges){
    
    for(let val in changes){
        
    }
  }

  ngContentInit(){

  }
}




/* 

Life cycle hooks
Component and Interaction 
Custom Compoenntd
Routing
Forms - Form Group , Form Builder , Form Array , Form Validation , Custom validation function , Async Validators
Directives - Structural directives and Attribute directive - custom directives


Services - Injectable services , Http Services
Directive - Custom directive 
Pipes - Custom Pipe




*/