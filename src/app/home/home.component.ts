import { Component} from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators, FormBuilder } from '@angular/forms';

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
      kyc: new FormControl('',[Validators.required])
    })
   }

  ngOnInit() {

  }

  _get(k: string | (string | number)[]): AbstractControl {
    return this.registrationform.get(k);
  }

  applyLoan(){
    alert(JSON.stringify(this.registrationform.getRawValue()))
  }




 
}
