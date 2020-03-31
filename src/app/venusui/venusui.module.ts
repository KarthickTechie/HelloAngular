import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenusbuttonComponent } from './venusbutton/venusbutton.component';
import { SimpletitlecontainerComponent } from './simpletitlecontainer/simpletitlecontainer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VenusbuttonComponent, SimpletitlecontainerComponent],
  exports:[VenusbuttonComponent,SimpletitlecontainerComponent]
})
export class VenusuiModule { }
