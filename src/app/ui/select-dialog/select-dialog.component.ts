import { Component } from '@angular/core';
import { MatDialog } from "@angular/material";
import { BarberComponent } from './barber/barber.component';





@Component({
  selector: 'app-select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.scss']
})
export class SelectDialogComponent{

  constructor(public dialog: MatDialog){}

  openBarber(){
    this.dialog.open(BarberComponent);
  }

}
