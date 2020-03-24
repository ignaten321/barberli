import { Appointment } from './appointment';
import { Injectable } from '@angular/core';
import { Barber } from '../barbers/barber';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  
  barbers: Barber[] = [
    { id: 1, role: 'test', firstName: 'Sam', lastName: 'lastName'},
    { id: 2, role: 'test1', firstName: 'Ban', lastName: 'lastName'},
  ];
  selectedAppointment: Appointment = new Appointment();

  constructor() { }

  selectBarber(barber: Barber) {
    this.selectedAppointment.barber = barber;
  }

  submitAppointment() {
    console.log(this.selectedAppointment);
  }
  
}
 