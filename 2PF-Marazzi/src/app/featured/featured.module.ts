import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './components/students/students.component';
import { StudentsDetailComponent } from './components/students-detail/students-detail.component';
import { StudentsModalComponent } from './components/students-modal/students-modal.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesDetailComponent } from './components/courses-detail/courses-detail.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InscriptionsComponent } from './components/inscriptions/inscriptions.component';
import { StudentsGradesComponent } from './components/students-grades/students-grades.component';
import { CoursesModalComponent } from './components/courses-modal/courses-modal.component';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDetailComponent,
    StudentsModalComponent,
    CoursesComponent,
    CoursesDetailComponent,
    InscriptionsComponent,
    StudentsGradesComponent,
    CoursesModalComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxSpinnerModule,

  ],
  exports: [
    StudentsComponent,
    StudentsDetailComponent,
    StudentsModalComponent,
    CoursesComponent,
    CoursesDetailComponent
  ]
})
export class FeaturedModule { }
