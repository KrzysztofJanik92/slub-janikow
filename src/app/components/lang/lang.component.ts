import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent {
  currentLang: string;

  constructor(private translateService: TranslateService) {
    this.currentLang = translateService.currentLang;
  }

  onChangeLang(lang) {
    this.translateService.use(lang);
    this.currentLang = this.translateService.currentLang;
  }

}
