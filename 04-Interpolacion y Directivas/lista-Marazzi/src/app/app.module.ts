import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//acordion
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentsComponent } from './components/students/students.component';
import { StiloDivDirective } from './directives/stilo-div.directive';
import { StiloDivDesaprobadoDirective } from './directives/stilo-div-desaprobado.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    MenuLateralComponent,
    CuerpoComponent,
    FooterComponent,
    StudentsComponent,
    StiloDivDirective,
    StiloDivDesaprobadoDirective
  ],
  imports: [
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
