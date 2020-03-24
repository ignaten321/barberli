import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Barber } from 'src/app/barbers/barber';
import { BarberHelpersService } from 'src/app/barbers/barbers.service';

@Component({
  selector: 'app-select-barber-dialog',
  templateUrl: './select-barber-dialog.component.html',
  styleUrls: ['./select-barber-dialog.component.scss']
})
export class SelectBarberDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { barbers: Barber[] }
  ) { }

  ngOnInit() {
  }

  getBarberFullName(barber: Barber): string {
    return BarberHelpersService.getBarberFullName(barber);
  }

}
