import { CursoBetaService } from './services/curso-beta.service';
import { CursoService } from './services/curso.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:
        CursoService, useClass: CursoBetaService

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
