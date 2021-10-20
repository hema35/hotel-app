import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule} from '@angular/flex-layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { BookingsListComponent } from './components/bookings-list/bookings-list.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookingsComponent,
    BookingsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
