import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectDialogComponent } from './ui/select-dialog/select-dialog.component';
import { BarberComponent } from './ui/select-dialog/barber/barber.component';



@NgModule({
  declarations: [
    AppComponent,
    DialogExampleComponent,
    SelectDialogComponent,
    BarberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents:[
    BarberComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
