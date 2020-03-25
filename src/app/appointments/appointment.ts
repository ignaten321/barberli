import { Barber } from '../barbers/barber';
import { Service } from '../services/service';
import { TimeType } from '../times/time';

export class Appointment {
    barber: Barber;
    service: Service;
    timeType: TimeType;
}
