import { Appointment } from './../appointment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Barber } from 'src/app/barbers/barber';
import { BarberHelpersService } from 'src/app/barbers/barbers.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.scss']
})
export class EditAppointmentComponent implements OnInit {

  @Input() appointment: Appointment;

  @Output() openBarberDialog = new EventEmitter<null>();
  @Output() submitAppointment = new EventEmitter<Appointment>();

  get barber(): Barber {
    if (!this.appointment) {
      return;
    }
    
    return this.appointment.barber;
  }

  get barberFullName(): string {
    return BarberHelpersService.getBarberFullName(this.barber);
  } 

  constructor(
  ) { }

  ngOnInit() {
  }

  onOpenBarberDialog() {
    this.openBarberDialog.emit();
  }

  onOpenServiceDialog() {

  }

  onSubmit() {
    this.submitAppointment.emit(this.appointment);
  }

}