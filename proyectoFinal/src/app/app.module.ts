import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { formatoNombreStudentPipe } from './pipes/formato-nombre.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoursesDetailComponent } from './components/courses-detail/courses-detail.component';
import { CourseService } from './services/course.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    MenuSuperiorComponent,
    HomeComponent,
    StudentsComponent,
    TeachersComponent,
    CoursesComponent,
    AboutComponent,
    HelpComponent,
    formatoNombreStudentPipe,
    CoursesDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
