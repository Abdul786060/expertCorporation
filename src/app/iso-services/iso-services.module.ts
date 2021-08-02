import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsoSerComponent } from './iso-ser/iso-ser.component';
import { SerSliderComponent } from './ser-slider/ser-slider.component';
import { IsoBenefitsComponent } from './iso-benefits/iso-benefits.component';
import { Iso9001Component } from './iso9001/iso9001.component';
import { Iso14001Component } from './iso14001/iso14001.component';
import { Iso45001Component } from './iso45001/iso45001.component';
import { IsoQmsModule } from '../iso-qms/iso-qms.module';



@NgModule({
  declarations: [
    IsoSerComponent,
    SerSliderComponent,
    IsoBenefitsComponent,
    Iso9001Component,
    Iso14001Component,
    Iso45001Component,
    
   
  ],
  imports: [
    CommonModule,
    IsoQmsModule
  ],
  exports: [
    IsoSerComponent
  ]
})
export class IsoServicesModule { }
