import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QmsComponent } from './qms/qms.component';



@NgModule({
  declarations: [
    QmsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    QmsComponent
  ]
})
export class IsoQmsModule { }
