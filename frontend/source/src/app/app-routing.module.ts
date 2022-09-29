import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddSunbedComponent } from './add-sunbed/add-sunbed.component';
import { BookSunbedComponent } from './book-sunbed/book-sunbed.component';
import { CancelReservationComponent } from './cancel-reservation/cancel-reservation.component';
import { LoginComponent } from './login/login.component';
import { SunbedListComponent } from './sunbed-list/sunbed-list.component';
import { SunbedsComponent } from './sunbeds/sunbeds.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add-sunbed', component: AddSunbedComponent },
  { path: 'book-sunbed', component: BookSunbedComponent },
  { path: 'cancel-reservation', component: CancelReservationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sunbed-list', component: SunbedListComponent },
  { path: 'sunbeds', component: SunbedsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
