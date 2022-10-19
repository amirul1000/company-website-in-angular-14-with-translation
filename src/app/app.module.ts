import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { FollowUsComponent } from './components/follow-us/follow-us.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { LatestBlogSectionComponent } from './components/latest-blog-section/latest-blog-section.component';
import { DigitalBankingServicesComponent } from './components/digital-banking-services/digital-banking-services.component';
import { IslamicServicesComponent } from './components/islamic-services/islamic-services.component';
import { SidebarSliderComponent } from './components/sidebar-slider/sidebar-slider.component';
import { ComplaintBoxComponent } from './components/complaint-box/complaint-box.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { OurAppsComponent } from './components/our-apps/our-apps.component';
import { GalleryComponent } from './pages/media/gallery/gallery.component';
import { AlbumComponent } from './pages/media/album/album.component';
import { MapComponent } from './components/map/map.component';
import { AtmComponent } from './pages/atm/atm.component';
import { ServicesComponent } from './pages/services/services.component';
import { NewsComponent } from './pages/news/news.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { BranchesComponent } from './pages/branches/branches.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LanguageSelectorComponent,
    FooterComponent,
    ExchangeRateComponent,
    FollowUsComponent,
    ContactSectionComponent,
    LatestBlogSectionComponent,
    DigitalBankingServicesComponent,
    IslamicServicesComponent,
    SidebarSliderComponent,
    ComplaintBoxComponent,
    MainLayoutComponent,
    HomeComponent,
    AboutUsComponent,
    NotFoundComponent,
    FaqsComponent,
    ContactComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    OurAppsComponent,
    GalleryComponent,
    AlbumComponent,
    MapComponent,
    AtmComponent,
    ServicesComponent,
    NewsComponent,
    BranchesComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
      }
      }) 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
