import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectDialogComponent } from './ui/select-dialog/select-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    DialogExampleComponent,
    SelectDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents:[
    DialogExampleComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
