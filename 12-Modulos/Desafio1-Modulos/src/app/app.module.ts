import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './core/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/pagina-no-encontrada/pagina-no-encontrada.component';
import { AutenticacionModule } from './autenticacion/autenticacion.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AutenticacionModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
