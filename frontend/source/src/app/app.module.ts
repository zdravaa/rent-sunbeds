import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { AddSunbedComponent } from './add-sunbed/add-sunbed.component';
import { BookSunbedComponent } from './book-sunbed/book-sunbed.component';
import { CancelReservationComponent } from './cancel-reservation/cancel-reservation.component';
import { LoginComponent } from './login/login.component';
import { SunbedListComponent } from './sunbed-list/sunbed-list.component';
import { SunbedsComponent } from './sunbeds/sunbeds.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddSunbedComponent,
    BookSunbedComponent,
    CancelReservationComponent,
    LoginComponent,
    SunbedListComponent,
    SunbedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
