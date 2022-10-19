import { BranchesComponent } from './pages/branches/branches.component';
import { AlbumComponent } from './pages/media/album/album.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/media/gallery/gallery.component';
import { AtmComponent } from './pages/atm/atm.component';
import { ServicesComponent } from './pages/services/services.component';
import { NewsComponent } from './pages/news/news.component';

const pagesArray: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'atm', component: AtmComponent},
  {path: 'contact', component: ContactComponent},

  {path: 'gallery', component: GalleryComponent},
  {path: 'gallery/:id', component: AlbumComponent},

  {path: 'videos', component: AlbumComponent},
  {path: 'videos/:id', component: AlbumComponent},

  {path: 'services', component: ServicesComponent},
  {path: 'services/:id', component: ServicesComponent},

  {path: 'news', component: NewsComponent},
  {path: 'news/:id', component: NewsComponent},

  {path: 'branches', component: BranchesComponent},
  {path: 'branches/:id', component: BranchesComponent},

  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  {path: '**', component: NotFoundComponent},
]

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: pagesArray}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static forRoot(appRoutes: any, arg1: { scrollPositionRestoration: string; }): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
