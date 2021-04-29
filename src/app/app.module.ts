import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./app.routing";
import {CoreModule} from "./modules/core/core.module";
import {BrowserModule} from "@angular/platform-browser";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {TitleComponent} from './components/title/title.component';
import {MaterialModule} from "./modules/material/material.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from "@angular/common/http";
import { LangComponent } from './components/lang/lang.component';
import { PageUnderConstructionComponent } from './components/page-under-construction/page-under-construction.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    LangComponent,
    PageUnderConstructionComponent,
    FooterComponent,
    MobileMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes, {scrollPositionRestoration: 'enabled'}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'pl'
    }),
    CoreModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

