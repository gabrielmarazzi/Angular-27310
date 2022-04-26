import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AyudantesRoutingModule } from './ayudantes-routing.module';
import { AssistantsComponent } from './assistants/assistants.component';
import { AssistantsDetailComponent } from './assistants-detail/assistants-detail.component';
import { AssistantsModalComponent } from './assistants-modal/assistants-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AssistantsComponent,
    AssistantsDetailComponent,
    AssistantsModalComponent
  ],
  imports: [
    CommonModule,
    AyudantesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxSpinnerModule,
  ],
  exports: [
    AssistantsComponent,
    AssistantsDetailComponent,
  ]


})
export class AyudantesModule { }
