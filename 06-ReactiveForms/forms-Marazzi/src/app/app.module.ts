import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentsFormComponent } from './components/students/students-form/students-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CuerpoComponent,
    FooterComponent,
    MenuLateralComponent,
    MenuSuperiorComponent,
    StudentsComponent,
    StudentsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
