import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";
import {SharedModule} from "../shared/shared.module";
import {ControlsModule} from "../controls/controls.module";
import {LoginRouting} from "./login.routing";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    ControlsModule,
    LoginRouting
  ]
})
export class LoginModule { }
