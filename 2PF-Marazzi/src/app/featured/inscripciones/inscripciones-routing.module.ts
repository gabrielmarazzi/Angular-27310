import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuLateralComponent } from 'src/app/core/components/menu-lateral/menu-lateral.component';
import { InscriptionsComponent } from './components/inscriptions/inscriptions.component';

const routes: Routes = [
  {
    path: '',
    component: MenuLateralComponent,
    children: [
      {
        path: 'inscriptions',
        component: InscriptionsComponent
      },
      {
        path: 'inscriptions/:id',
        component: InscriptionsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
