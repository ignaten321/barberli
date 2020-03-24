import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Service } from 'src/app/services/service';
import { ServiceHelpersService } from 'src/app/services/services.service';

@Component({
  selector: 'app-select-service-dialog',
  templateUrl: './select-service-dialog.component.html',
  styleUrls: ['./select-service-dialog.component.scss']
})
export class SelectServiceDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { services: Service[] }
  ) { }

  ngOnInit() {
  }

  checkService(service: Service): string {
    return ServiceHelpersService.checkService(service);
  }
}
