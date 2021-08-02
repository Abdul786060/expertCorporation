import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about-us/about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactComponent } from './contact-us/contact/contact.component';
import { IsoSerComponent } from './iso-services/iso-ser/iso-ser.component';
import { QmsComponent } from './iso-qms/qms/qms.component';

const routes: Routes = [
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'home',
    component: HomePageComponent
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'contact',
    component:ContactComponent
  },
  {
    path: 'isoser',
    component:IsoSerComponent

  },
  {
    path: 'is901',
    component: QmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
