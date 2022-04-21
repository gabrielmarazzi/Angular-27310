import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionsComponent } from './components/inscriptions/inscriptions.component';

const routes: Routes = [
  {
    path: 'inscriptions',
    component: InscriptionsComponent
  },
  {
    path: 'inscriptions/:id',
    component: InscriptionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
