import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Route,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VenusuiModule } from './venusui/venusui.module';
import { IndiancurrencyPipe } from './pipes/indiancurrency.pipe';

// route configuration 

const route:Route[] = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:"home"
  },
  {path:'home',loadChildren:'./home/home.module#HomeModule'},
  {path:'admin',loadChildren:'./admin/admin.module#AdminModule'},
  {path:'funny',loadChildren:'./funny/funny.module#FunnyModule'},
  {path:'products',loadChildren:'./products/products.module#ProductsModule'},
  {path:'applications',loadChildren:'./applications/applications.module#ApplicationsModule'}


];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndiancurrencyPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    VenusuiModule,
    RouterModule.forRoot(route)
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
