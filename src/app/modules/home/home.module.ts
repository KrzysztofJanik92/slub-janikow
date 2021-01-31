import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {HomeComponent} from "./home.component";
import {ControlsModule} from "../controls/controls.module";
import {HomeRouting} from "./home.routing";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRouting,
    ControlsModule
  ]
})
export class HomeModule { }
