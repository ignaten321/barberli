import { Barber } from './../barbers/barber';
import { AppointmentsService } from './appointments.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SelectBarberDialogComponent } from './select-barber-dialog/select-barber-dialog.component';
import { Appointment } from './appointment';

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
    public dialog: MatDialog
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

  onSubmitAppointment() {
    this.appointmentsService.submitAppointment();
  }
}
