import { Appointment } from './appointment';
import { Injectable } from '@angular/core';
import { Barber } from '../barbers/barber';
import { Service } from '../services/service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  barbers: Barber[] = [
    { id: 1, role: 'test', firstName: 'Sam', lastName: 'lastName'},
    { id: 2, role: 'test1', firstName: 'Ban', lastName: 'lastName'},
  ];
  services: Service[] =[
    {serviceName: "Beard Trim", cost: 30, time: 30},
    {serviceName: "Traditional Wet Shave", cost: 60, time: 60}
  ]
  selectedAppointment: Appointment = new Appointment();

  constructor() { }

  selectBarber(barber: Barber) {
    this.selectedAppointment.barber = barber;
  }
  selectService(service: Service) {
    this.selectedAppointment.service = service;
  }

  submitAppointment() {
    console.log(this.selectedAppointment);
  }

}
