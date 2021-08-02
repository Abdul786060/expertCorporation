import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LeadingIsoCertificateComponent } from './leading-iso-certificate/leading-iso-certificate.component';
import { IsostandardComponent } from './isostandard/isostandard.component';
import { AmazingClientsComponent } from './amazing-clients/amazing-clients.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsModule } from './about-us/about-us.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { IsoServicesModule } from './iso-services/iso-services.module';
import { IsoQmsModule } from './iso-qms/iso-qms.module';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomePageComponent,
    LeadingIsoCertificateComponent,
    IsostandardComponent,
    AmazingClientsComponent,
    HomeCardsComponent,
    FooterComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutUsModule,
    ContactUsModule,
    IsoServicesModule,
    IsoQmsModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
