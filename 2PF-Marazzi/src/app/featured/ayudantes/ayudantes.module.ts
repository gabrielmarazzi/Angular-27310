import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AyudantesRoutingModule } from './ayudantes-routing.module';
import { AssistantsComponent } from './assistants/assistants.component';
import { AssistantsDetailComponent } from './assistants-detail/assistants-detail.component';
import { AssistantsModalComponent } from './assistants-modal/assistants-modal.component';


@NgModule({
  declarations: [
    AssistantsComponent,
    AssistantsDetailComponent,
    AssistantsModalComponent
  ],
  imports: [
    CommonModule,
    AyudantesRoutingModule
  ]
})
export class AyudantesModule { }
