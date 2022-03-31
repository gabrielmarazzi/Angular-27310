
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotonesComponent } from './components/botones/botones.component';
import { CardsComponent } from './components/cards/cards.component';
import { ContenidoDialogComponent } from './components/contenido-dialog/contenido-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';


@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    CardsComponent,
    ContenidoDialogComponent,
    DialogComponent,
    FormularioComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
