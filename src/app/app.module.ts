import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./app.routing";
import {CoreModule} from "./modules/core/core.module";
import {BrowserModule} from "@angular/platform-browser";
import {NavbarComponent} from "./components/navbar/navbar.component";
import { TitleComponent } from './components/title/title.component';
import {MaterialModule} from "./modules/material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, {scrollPositionRestoration: 'enabled'}),
    CoreModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
