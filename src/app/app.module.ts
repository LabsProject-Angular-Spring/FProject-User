import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SolisalaComponent } from './components/solisala/solisala.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormBuilder } from 'ngx-dynamic-form-builder';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SolisalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule,   DynamicFormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
