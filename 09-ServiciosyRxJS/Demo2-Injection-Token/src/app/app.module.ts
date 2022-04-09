import { APIConfig } from './../app.config';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CONFIG } from 'src/app.config';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: CONFIG, useValue: APIConfig }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
