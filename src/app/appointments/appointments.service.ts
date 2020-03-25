import { Appointment } from './appointment';
import { Injectable } from '@angular/core';
import { Barber } from '../barbers/barber';
import { Service } from '../services/service';
import { Time } from '../times/time';

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
  services: Service[] = [
    {serviceName: "Beard Trim", cost: 30, time: 30, photoUrl:  "https://barberly.blob.core.windows.net/house13/76622121a1.jpeg"},
    {serviceName: "Haircut and Finish", cost: 80, time: 60, photoUrl:  "https://barberly.blob.core.windows.net/house13/431d94873f.jpeg"},
    {serviceName: "Hairstyling", cost:40, time: 30, photoUrl:  "https://barberly.blob.core.windows.net/house13/eb91cb303b.jpeg"},
    {serviceName: "penthouse or Design", cost: 20, time: 20, photoUrl:  "https://barberly.blob.core.windows.net/house13/dcf8da7fb0.jpeg"},
    {serviceName: "The Luxury Shave", cost: 60, time: 60, photoUrl:  "https://barberly.blob.core.windows.net/house13/6e9d4c1c29.jpeg"},
    {serviceName: "Traditional Wet Shave", cost: 50, time: 60, photoUrl:  "https://barberly.blob.core.windows.net/house13/9f040fe5f0.jpeg"}
  ];
  times: Time[] = [
    {timeVelue: "9:00"},{timeVelue: "9:15"},{timeVelue: "9:30"},{timeVelue: "9:45"},{timeVelue: "10:00"},
    {timeVelue: "10:00"},{timeVelue: "10:15"},{timeVelue: "10:30"},{timeVelue: "10:45"},{timeVelue: "11:00"},
    {timeVelue: "11:00"},{timeVelue: "11:15"},{timeVelue: "11:30"},{timeVelue: "11:45"},{timeVelue: "12:00"},
    {timeVelue: "12:00"},{timeVelue: "12:15"},{timeVelue: "12:30"},{timeVelue: "12:45"},{timeVelue: "13:00"},
    {timeVelue: "13:00"},{timeVelue: "13:15"},{timeVelue: "13:30"},{timeVelue: "13:45"},{timeVelue: "14:00"},
    {timeVelue: "14:00"},{timeVelue: "14:15"},{timeVelue: "14:30"},{timeVelue: "14:45"},{timeVelue: "15:00"},
    {timeVelue: "15:00"},{timeVelue: "15:15"},{timeVelue: "15:30"},{timeVelue: "15:45"},{timeVelue: "16:00"},
    {timeVelue: "16:00"},{timeVelue: "16:15"},{timeVelue: "16:30"},{timeVelue: "16:45"},{timeVelue: "17:00"},
    {timeVelue: "17:00"},{timeVelue: "17:15"},{timeVelue: "17:30"},{timeVelue: "17:45"},{timeVelue: "18:00"},
    {timeVelue: "18:00"},{timeVelue: "18:15"},{timeVelue: "18:30"},{timeVelue: "18:45"},{timeVelue: "19:00"},
    {timeVelue: "19:00"},{timeVelue: "19:15"},{timeVelue: "19:30"},{timeVelue: "19:45"},{timeVelue: "20:00"},
  ]

  selectedAppointment: Appointment = new Appointment();

  constructor() { }

  selectBarber(barber: Barber) {
    this.selectedAppointment.barber = barber;
  }
  selectService(service: Service) {
    this.selectedAppointment.service = service;
  }
  selectTime(time: Time){
    this.selectedAppointment.time = time;
  }

  submitAppointment() {
    console.log(this.selectedAppointment);
  }

}
