import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { TeachersDetailComponent } from './components/teachers-detail/teachers-detail.component';
import { TeachersModalComponent } from './components/teachers-modal/teachers-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeachersComponent } from './components/teachers/teachers.component';


@NgModule({
  declarations: [
    TeachersComponent,
    TeachersDetailComponent,
    TeachersModalComponent
  ],
  imports: [
    CommonModule,
    ProfesoresRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxSpinnerModule,
  ],
  exports: [
    TeachersComponent,
    TeachersDetailComponent,
  ]
})
export class ProfesoresModule { }
