import { Barber } from './../barbers/barber';
import { AppointmentsService } from './appointments.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SelectBarberDialogComponent } from './select-barber-dialog/select-barber-dialog.component';
import { Appointment } from './appointment';
import { SelectServiceDialogComponent } from './select-service-dialog/select-service-dialog.component';
import { Service } from '../services/service';
import { SelectTimeDialogComponent } from './select-time-dialog/select-time-dialog.component';
import { TimeType } from '../times/time';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  get appointment(): Appointment {
    return this.appointmentsService.selectedAppointment;
  }

  constructor(
    public appointmentsService: AppointmentsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  onOpenBarberDialog() {
    const dialogRef = this.dialog.open(SelectBarberDialogComponent, {
      data: {
        barbers: this.appointmentsService.barbers
      }
    });

    dialogRef.afterClosed().subscribe((barber: Barber) => {
      this.appointmentsService.selectBarber(barber);
    });
  }

  onOpenServiceDialog(){
    const dialogSer = this.dialog.open(SelectServiceDialogComponent, {
      data: {
        services: this.appointmentsService.services
      }
    });
    dialogSer.afterClosed().subscribe((service: Service) => {
      this.appointmentsService.selectService(service);
    });
  }

  onOpenTimeDialog(){
    const dialogVel = this.dialog.open(SelectTimeDialogComponent, {
      data: {
        times: this.appointmentsService.times
      }
    });
    dialogVel.afterClosed().subscribe((timeType: TimeType) => {
      this.appointmentsService.selectTime(timeType);
    });
  }

  onSubmitAppointment(appointment: Appointment) {
    this.appointmentsService.submitAppointment(appointment);
  }
}
