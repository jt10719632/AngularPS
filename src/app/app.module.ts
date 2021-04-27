import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  // Declares the AppComponent
  declarations: [AppComponent],
  // Imports BrowserModule so our application runs correctly in the browser
  imports: [BrowserModule],
  // Lists our AppComponent as the starting component for our app.
  bootstrap: [AppComponent]
})
export class AppModule { }
