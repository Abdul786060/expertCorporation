import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AboutSliderComponent } from './about-slider/about-slider.component';
import { MissionComponent } from './mission/mission.component';
import { WelcomeUAECComponent } from './welcome-uaec/welcome-uaec.component';
import { WhyUAECComponent } from './why-uaec/why-uaec.component';
import { ClientsComponent } from './clients/clients.component';



@NgModule({
  declarations: [
    AboutComponent,
    AboutSliderComponent,
    MissionComponent,
    WelcomeUAECComponent,
    WhyUAECComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutComponent
  ]
})
export class AboutUsModule { }
