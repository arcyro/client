import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CarListComponent } from './car-list/car-list.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { CarEditComponent } from './car-edit/car-edit.component';
import {FormsModule} from "@angular/forms";
import { TestSuiteListComponent } from './test-suite-list/test-suite-list.component';


import { MatTableModule } from '@angular/material';
import { TestRepoListComponent } from './test-repo-list/test-repo-list.component'

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    TestSuiteListComponent,
    TestRepoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
