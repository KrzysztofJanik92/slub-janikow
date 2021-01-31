import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputControlComponent} from "./input-control/input-control.component";
import {SelectControlComponent} from "./select-control/select-control.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    InputControlComponent,
    SelectControlComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ]
})
export class ControlsModule { }
