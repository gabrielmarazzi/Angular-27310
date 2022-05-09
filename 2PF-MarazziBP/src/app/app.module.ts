import { FeaturedModule } from './featured/featured.module';
import { PersonsService } from './services/persons.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
// import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { MaterialModule } from './material.module';
// import { HomeComponent } from './components/home/home.component';
// import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
// import { CoursesComponent } from './featured/components/courses/courses.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
// import { formatoDatosStudentPipe } from './pipes/formato-nombre.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { CoursesDetailComponent } from './featured/components/courses-detail/courses-detail.component';
import { CourseService } from './services/course.service';
// import { StudentsModalComponent } from './components/students-modal/students-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { StudentsDetailComponent } from './components/students-detail/students-detail.component';
// import { FormatoTitulosDirective } from './directives/formato-titulos.directive';
import { HttpClientModule } from '@angular/common/http';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    // MenuLateralComponent,
    // MenuSuperiorComponent,
    // HomeComponent,
    // StudentsComponent,
    TeachersComponent,
    // CoursesComponent,
    AboutComponent,
    HelpComponent,
    // formatoDatosStudentPipe,
    // CoursesDetailComponent,
    // StudentsModalComponent,
    // StudentsDetailComponent,
    // FormatoTitulosDirective,
    PaginaNoEncontradaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,

    NgxSpinnerModule,

    CoreModule,
    FeaturedModule,
    SharedModule
  ],
  providers: [
    CourseService,
    PersonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
