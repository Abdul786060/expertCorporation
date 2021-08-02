import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { SliderComponent } from './slider/slider.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { CardsComponent } from './cards/cards.component';
import { GoogleMapComponent } from './google-map/google-map.component';



@NgModule({
  declarations: [
    ContactComponent,
    SliderComponent,
    GetInTouchComponent,
    CardsComponent,
    GoogleMapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactUsModule { }
