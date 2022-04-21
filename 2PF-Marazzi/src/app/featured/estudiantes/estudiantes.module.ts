import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { StudentsComponent } from './components/students/students.component';
import { StudentsDetailComponent } from './components/students-detail/students-detail.component';
import { StudentsGradesComponent } from './components/students-grades/students-grades.component';
import { StudentsModalComponent } from './components/students-modal/students-modal.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDetailComponent,
    StudentsGradesComponent,
    StudentsModalComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxSpinnerModule,

  ],
  exports: [
    StudentsComponent,
    StudentsDetailComponent,
    StudentsGradesComponent,
    StudentsModalComponent
  ]


})
export class EstudiantesModule { }
