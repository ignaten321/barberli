import { Component, OnInit } from '@angular/core';
import { DialogExampleComponent } from 'src/app/dialog-example/dialog-example.component';
import { MatDialog } from '@angular/material/dialog';
import { BarberComponent } from 'src/app/barber/barber.component';




export interface DialogData {
  animals: 'panda' | 'unicorn' | 'lion';
}




@Component({
  selector: 'app-select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.scss']
})
export class SelectDialogComponent{

  constructor(public dialog: MatDialog) {}

  openDialog2() {
    this.dialog.open(BarberComponent, {
      data: {
        animals: 'panda'
      }
    });
  }


}
