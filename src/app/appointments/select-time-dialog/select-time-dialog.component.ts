import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { TimeHelpersService } from 'src/app/times/times.service';
import { Time } from 'src/app/times/time';

@Component({
  selector: 'app-select-time-dialog',
  templateUrl: './select-time-dialog.component.html',
  styleUrls: ['./select-time-dialog.component.scss']
})
export class SelectTimeDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { times: Time[] }
  ) { }

  ngOnInit() {
  }

  getTime(time: Time): string {
    return TimeHelpersService.getTime(time);
  }

}
