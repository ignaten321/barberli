import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogExampleComponent, {
      data: {
        animal: 'panda'
      }
    });
  }


}
