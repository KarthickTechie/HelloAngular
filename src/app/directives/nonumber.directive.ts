import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({ 
  selector: '[nonumber]'
  
})
export class NonumberDirective {

  numbersregx:RegExp =  /^[A-Za-z]+$/;
  previousValue='';
  constructor(private el:ElementRef){

  }

  @HostListener('input',['$event'])oninput(e){
    
    if(e.target.value.match(this.numbersregx)){
        // dont have any number 
        this.previousValue= e.target.value;

    }else{
      this.el.nativeElement.value = this.previousValue;
    }
    
  }

}
