import { Injectable } from "@angular/core";
import { TimeType } from './time';

@Injectable({
  providedIn: 'root'
})
export class TimeHelpersService{
  static getTime(timeType: TimeType): string{
    if(!timeType){
      return "";
    }
    return
  }
}
