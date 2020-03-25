import { Injectable } from "@angular/core";
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TimeHelpersService{
  static getTime(time: Time): string{
    if(!time){
      return "";
    }
    return
  }
}
