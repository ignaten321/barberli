import { Injectable } from '@angular/core';
import { Barber } from './barber';

@Injectable({
  providedIn: 'root'
})
export class BarberHelpersService {

  static getBarberFullName(barber: Barber): string {
    if (!barber) {
      return '';
    }

    return `${barber.firstName} ${barber.lastName}`;
  }

}
