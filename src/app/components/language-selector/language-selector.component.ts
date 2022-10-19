import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from "@angular/common";


@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  language: {code: string, title: string} = {code:'ar', title: 'العربية'}

  constructor(@Inject(DOCUMENT) private document: Document, private translateService: TranslateService,) { 
    this.changeLanguage('ar')
  }

  ngOnInit(): void {
    
  }

  changeLanguage(lang: string): void {
    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
    htmlTag.lang = lang === "ar" ? "ar" : "en";
    
    this.changeLanguageObject(lang);
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);    
    // this.changeCssFile(lang);
  }

  changeCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById("rtlCSS") as HTMLLinkElement;
    let bundleName = lang === "ar" ? "/assets/css/rtl.css" : "";
    if (existingLink) {
      existingLink.href = bundleName;
      if(lang != "ar") {existingLink.remove()}
    } else {
      let newLink = this.document.createElement("link");
      if(lang == "ar") {
        newLink.rel = "stylesheet";
        newLink.type = "text/css";
        newLink.id = "rtlCSS";
        newLink.href = bundleName;
        headTag.appendChild(newLink);
      }
    }
  }

  changeLanguageObject(lang: string) {
    switch(lang) {
      case 'ar':
        this.language = {code:'ar', title: 'العربية'}
      break;
      case 'en':
        this.language = {code:'en', title: 'English'}
      break
      default:
      this.language = {code:'ar', title: 'العربية'}
    }
  }

}
