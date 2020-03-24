import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarberComponent } from './barber/barber.component';



@NgModule({
  declarations: [
    BarberComponent
  ],
  entryComponents:[
    BarberComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SelectBarberModule { }
