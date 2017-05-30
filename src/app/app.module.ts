import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatatableComponent , CarService } from './datatable/datatable.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

import {DataTableModule,SharedModule , DialogModule , ButtonModule , CalendarModule ,CheckboxModule ,
        InputTextareaModule,  MultiSelectModule, DropdownModule, InputSwitchModule , RadioButtonModule , 
        RatingModule} from 'primeng/primeng';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    Angular2FontAwesomeModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    InputSwitchModule,
    InputTextareaModule,
    MultiSelectModule,
    RatingModule,
    RadioButtonModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
