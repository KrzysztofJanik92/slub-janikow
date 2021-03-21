import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {HomeComponent} from "./home.component";
import {ControlsModule} from "../controls/controls.module";
import {HomeRouting} from "./home.routing";
import { AboutComponent } from './pages/about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    SharedModule,
    HomeRouting,
    ControlsModule
  ]
})
export class HomeModule { }
