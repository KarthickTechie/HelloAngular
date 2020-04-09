import { Component} from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { AdminComponent } from './../admin/admin.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user="John"

  registrationform:FormGroup;
  constructor(private fb:FormBuilder) {

    this.registrationform=new FormGroup({
      username: new FormControl('',[Validators.required]),
      kyc: new FormControl('',[Validators.required,Validators.maxLength(10), Validators.pattern(/^[a-zA-Z]{3}[P]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$/)])
    })
   }

  ngOnInit() {

  }

  _get(k: string | (string | number)[]): AbstractControl {
    return this.registrationform.get(k);
  }

  applyLoan(){
    debugger;
    alert(JSON.stringify(this.registrationform.getRawValue()))
  }


ngAfterViewInit(){


}

 
}
