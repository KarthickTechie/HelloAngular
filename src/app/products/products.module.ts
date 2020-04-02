import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';

// route configurate 

const route:Route[] = [
  {path:'',component:ProductsComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
