import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NiharikaComponent } from './niharika/niharika.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MatFormField} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {MatInputModule} from '@angular/material/input';
import {StudentService} from './student.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NiharikaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
     FormsModule,
    ReactiveFormsModule,

  ],
  providers: [StudentService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
