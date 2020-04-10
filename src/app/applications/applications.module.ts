import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './applications.component';
import { Route, RouterModule} from '@angular/router';
import { VenusuiModule } from './../venusui/venusui.module';
import { DatacenterService } from 'app/services/datacenter.service';
import { SuperfilterPipe } from 'app/pipes/superfilter.pipe';
import { DirectivesModule } from "app/directives/directives.module";

const route:Route[] = [
  {path:'',component:ApplicationsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    DirectivesModule,
    VenusuiModule
  ],
  declarations: [ApplicationsComponent,SuperfilterPipe],
  providers:[DatacenterService,SuperfilterPipe]
})
export class ApplicationsModule { }
