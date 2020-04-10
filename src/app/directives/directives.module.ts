import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonumberDirective } from './nonumber.directive';
import { QuickdeleteDirective } from './quickdelete.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NonumberDirective,
    QuickdeleteDirective
  ],
  exports:[
    NonumberDirective,
    QuickdeleteDirective

  ]
})
export class DirectivesModule { }
