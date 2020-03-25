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
    { id: 2, role: 'Senior Barber', firstName: 'Dan', lastName: 'Glass', photoUrl: "https://barberly.blob.core.windows.net/house13/d295d87d6a.jpeg"},
    { id: 2, role: 'Master Barber', firstName: 'Alex', lastName: 'Glover', photoUrl: "https://barberly.blob.core.windows.net/house13/73856576e5.jpeg"},
    { id: 2, role: 'Head Barber', firstName: 'Sam', lastName: 'Hickey', photoUrl: "https://barberly.blob.core.windows.net/house13/aa1ee55f71.jpeg"},
    { id: 2, role: 'Senior Barber', firstName: 'Elias', lastName: 'Pashialis', photoUrl: "https://barberly.blob.core.windows.net/house13/5c3fd6bf76.jpeg"},
    { id: 2, role: 'Master Barber', firstName: 'Joe', lastName: 'Pomper', photoUrl: "https://barberly.blob.core.windows.net/house13/bde4740bc6.jpeg"},
    { id: 2, role: 'Head Barber', firstName: 'Miles', lastName: 'Wood', photoUrl: "https://barberly.blob.core.windows.net/house13/5105d80336.jpeg"},
    { id: 2, role: 'Head Barber', firstName: 'Craig', lastName: 'Evans', photoUrl: "https://barberly.blob.core.windows.net/house13/a9796908db.jpeg"},
  ];
  services: Service[] =[
    {serviceName: "Beard Trim", cost: 30, time: 30, photoUrl:  "https://barberly.blob.core.windows.net/house13/76622121a1.jpeg"},
    {serviceName: "Haircut and Finish", cost: 80, time: 60, photoUrl:  "https://barberly.blob.core.windows.net/house13/431d94873f.jpeg"},
    {serviceName: "Hairstyling", cost:40, time: 30, photoUrl:  "https://barberly.blob.core.windows.net/house13/eb91cb303b.jpeg"},
    {serviceName: "penthouse or Design", cost: 20, time: 20, photoUrl:  "https://barberly.blob.core.windows.net/house13/dcf8da7fb0.jpeg"},
    {serviceName: "The Luxury Shave", cost: 60, time: 60, photoUrl:  "https://barberly.blob.core.windows.net/house13/6e9d4c1c29.jpeg"},
    {serviceName: "Traditional Wet Shave", cost: 50, time: 60, photoUrl:  "https://barberly.blob.core.windows.net/house13/9f040fe5f0.jpeg"}
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
