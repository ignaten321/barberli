import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { TimeType } from 'src/app/times/time';

@Component({
  selector: 'app-select-time-dialog',
  templateUrl: './select-time-dialog.component.html',
  styleUrls: ['./select-time-dialog.component.scss']
})
export class SelectTimeDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { times: TimeType[] }
  ) { }

  ngOnInit() {
  }

}
