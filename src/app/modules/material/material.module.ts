import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSelectModule} from "@angular/material/select";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatProgressBarModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule {
}
