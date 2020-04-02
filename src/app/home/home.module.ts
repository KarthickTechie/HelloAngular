import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { VenusuiModule } from './../venusui/venusui.module';
import { CommonModule } from "@angular/common";

const route: Routes = [{
    path:'',
    component:HomeComponent
}]

@NgModule({
    declarations:[
        HomeComponent,
    ],
    imports:[
    CommonModule,
    VenusuiModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forChild(route)
    ],
    exports:[FormsModule,ReactiveFormsModule]
})
export class HomeModule{
    
}