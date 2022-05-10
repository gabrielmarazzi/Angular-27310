import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesDetailComponent } from './components/courses-detail/courses-detail.component';
import { CoursesModalComponent } from './components/courses-modal/courses-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDetailComponent,
    CoursesModalComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxSpinnerModule,
  ],
  exports: [

    CoursesComponent,
    CoursesDetailComponent,
    CoursesModalComponent
  ]
})
export class CursosModule { }
