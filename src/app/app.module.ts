import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./app.routing";
import {CoreModule} from "./modules/core/core.module";
import {BrowserModule} from "@angular/platform-browser";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {TitleComponent} from './components/title/title.component';
import {MaterialModule} from "./modules/material/material.module";
import {HttpClientModule, HttpClient} from "@angular/common/http";
import { PageUnderConstructionComponent } from './components/page-under-construction/page-under-construction.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    PageUnderConstructionComponent,
    FooterComponent,
    MobileMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes, {scrollPositionRestoration: 'enabled'}),
    CoreModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

