import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { VenusuiModule } from './../venusui/venusui.module';

const route: Routes = [{
    path:'',
    component:HomeComponent
}]

@NgModule({
    declarations:[
        HomeComponent,
    ],
    imports:[
    VenusuiModule,
    RouterModule.forChild(route)
    ],
    exports:[]
})
export class HomeModule{
    
}