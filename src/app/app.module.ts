import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  // Declares the AppComponent
  // Make sure to add new components to declaration so you can use them. Also import them.
  declarations: [
    AppComponent
    , ProductListComponent],
  // Imports BrowserModule so our application runs correctly in the browser
  imports: [BrowserModule],
  // Lists our AppComponent as the starting component for our app.
  bootstrap: [AppComponent]
})
// Every Angular application must have at least one AppModule
// AppModule declares our root application component
// A boostrap component must belong to one and only one Angular module 
export class AppModule { }
