import { AppointmentsComponent } from './appointments/appointments.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'appointments/create-appointment', component: AppointmentsComponent },
  { path: '**', redirectTo: 'appointments/create-appointment'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
