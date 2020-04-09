import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { LoggedInGuard } from "app/services/logged-in.guard";

import { VenusuiModule } from './../venusui/venusui.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

const adminRoute:Routes = [
    {path:'',component:AdminComponent,canActivate:[LoggedInGuard]}
]

@NgModule({
    declarations:[
        AdminComponent
    ],
    imports:[
        CommonModule,
        VenusuiModule,
        FormsModule, ReactiveFormsModule, 
        RouterModule.forChild(adminRoute)
    ],
    exports:[],
    providers:[LoggedInGuard]
})
export class AdminModule{

}