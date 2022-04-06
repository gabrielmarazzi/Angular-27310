import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { StudentsComponent } from './components/students/students.component';
import { MaterialModule } from './material.module';
import { StudentsModalComponent } from './components/students-modal/students-modal.component';
import { FormatoNombrePipe } from './pipes/formato-nombre.pipe';
import { StudentsDetailComponent } from './components/students-detail/students-detail.component';
import { EstiloPersonalDirective } from './directives/estilo-personal.directive';

@NgModule({
  declarations: [
    AppComponent,
    CuerpoComponent,
    FooterComponent,
    MenuLateralComponent,
    MenuSuperiorComponent,
    StudentsComponent,
    StudentsModalComponent,
    FormatoNombrePipe,
    StudentsDetailComponent,
    EstiloPersonalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
