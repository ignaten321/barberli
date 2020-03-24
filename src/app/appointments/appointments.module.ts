import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { MatInputModule, MatDialogModule } from '@angular/material';
import { AppointmentsComponent } from './appointments.component';
import { SelectBarberDialogComponent } from './select-barber-dialog/select-barber-dialog.component';
import { SelectServiceDialogComponent } from './select-service-dialog/select-service-dialog.component';

@NgModule({
  declarations: [
    EditAppointmentComponent,
    AppointmentsComponent,
    SelectBarberDialogComponent,
    SelectServiceDialogComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatDialogModule,

  ],
  entryComponents: [
    SelectBarberDialogComponent,
    SelectServiceDialogComponent,
  ],
})
export class AppointmentsModule { }
