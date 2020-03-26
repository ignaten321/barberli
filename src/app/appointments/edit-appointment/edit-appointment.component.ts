import { Appointment } from './../appointment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Barber } from 'src/app/barbers/barber';
import { BarberHelpersService } from 'src/app/barbers/barbers.service';
import { Service } from 'src/app/services/service';
import { ServiceHelpersService } from 'src/app/services/services.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.scss']
})
export class EditAppointmentComponent implements OnInit {

  @Input() appointment: Appointment;

  @Output() openBarberDialog = new EventEmitter<null>();
  @Output() openServiceDialog = new EventEmitter<null>();
  @Output() openDateDialog = new EventEmitter<null>();
  @Output() openTimeDialog = new EventEmitter<null>();


  @Output() submitAppointment = new EventEmitter<Appointment>();

  // Создание формы
  form: FormGroup


  get barber(): Barber {
    if (!this.appointment) {
      return;
    }
    return this.appointment.barber;
  }
  get service(): Service {
    if (!this.appointment) {
      return;
    }
    return this.appointment.service;
  }
  get timeName(): string{
    if (!this.appointment || !this.appointment.timeType) {
      return;
    }
    return this.appointment.timeType.timeVelue;
  }

  get barberFullName(): string {
    return BarberHelpersService.getBarberFullName(this.barber);
  }
  get serviceName(): string {
    return ServiceHelpersService.checkService(this.service);
  }

  constructor(
  ) { }


  //инициализация формы
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(""),
      phone: new FormControl(""),
    })
  }
  submitForm(){
    const formDate = {...this.form.value}
    const fullName = this.appointment.barber.firstName + " " + this.appointment.barber.lastName

    console.log("Your Barber:", fullName)
    console.log("Your Service:", this.appointment.service.serviceName)
    console.log("Your Time:", this.appointment.timeType.timeVelue)
    console.log("Your Name:", formDate.name)
    console.log("Your Phone:", formDate.phone)
  }


  onOpenBarberDialog() {
    this.openBarberDialog.emit();
  }
  onOpenServiceDialog() {
    this.openServiceDialog.emit();
  }
  onOpenTimeDialog(){
    this.openTimeDialog.emit();
  }

  onSubmit() {
    this.submitAppointment.emit(this.appointment);
  }






}
