import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { MatInputModule, MatDialogModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { AppointmentsComponent } from './appointments.component';
import { SelectBarberDialogComponent } from './select-barber-dialog/select-barber-dialog.component';
import { SelectServiceDialogComponent } from './select-service-dialog/select-service-dialog.component';
import { SelectTimeDialogComponent } from './select-time-dialog/select-time-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditAppointmentComponent,
    AppointmentsComponent,
    SelectBarberDialogComponent,
    SelectServiceDialogComponent,
    SelectTimeDialogComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatDialogModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    SelectBarberDialogComponent,
    SelectServiceDialogComponent,
    SelectTimeDialogComponent,
  ],
})
export class AppointmentsModule { }
