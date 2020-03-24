import { Appointment } from './appointment';
import { Injectable } from '@angular/core';
import { Barber } from '../barbers/barber';
import { Service } from '../services/service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  barbers: Barber[] = [
    { id: 1, role: 'Senior Barber', firstName: 'Adam', lastName: 'Cooper', photoUrl: "https://barberly.blob.core.windows.net/house13/47cfec4358.jpeg"},
    { id: 2, role: 'Barber', firstName: 'Alexander', lastName: 'Gillings', photoUrl: "https://barberly.blob.core.windows.net/house13/2b4cb26e0f.jpeg"},
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
