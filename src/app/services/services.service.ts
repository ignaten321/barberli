import { Injectable } from '@angular/core';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServiceHelpersService{
  static checkService(service: Service){
    if (!service) {
      return '';
    }
    return service.serviceName;
  }
}
