import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,FormsModule,ReactiveFormsModule,HttpClientModule,MatNativeDateModule,
    AppRoutingModule,MatToolbarModule,MatButtonModule,MatInputModule,MatCardModule,MatDatepickerModule,
    MatExpansionModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
