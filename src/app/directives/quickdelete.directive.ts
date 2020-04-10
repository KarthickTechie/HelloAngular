import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[quickdelete]'
})
export class QuickdeleteDirective {



  constructor(private el:ElementRef) { }

  @HostListener('keydown',['$event'])onkeydown(e:KeyboardEvent){
    

    const DEL_KEY = 46;

    if(e.keyCode == DEL_KEY){
      this.el.nativeElement.value = '';
    }
  }
}
