import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  // Declares the AppComponent
  // Make sure to add new components to declaration so you can use them. Also import them.
  // Declarations is to import our own Components we made for the app.
  declarations: [
    AppComponent
    , ProductListComponent
    , ConvertToSpacesPipe
    , StarComponent],
  // Imports BrowserModule so our application runs correctly in the browser
  // Imports is used to import outsourced Components.
  imports: [
    BrowserModule,
    // Imported FormsModule so we could use ngModel in product-list.component.html
    FormsModule],
  // Lists our AppComponent as the starting component for our app.
  bootstrap: [AppComponent]
})
// Every Angular application must have at least one AppModule
// AppModule declares our root application component
// A boostrap component must belong to one and only one Angular module 
export class AppModule { }
