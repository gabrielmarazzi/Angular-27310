import { TeachersDetailComponent } from './components/teachers-detail/teachers-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuLateralComponent } from 'src/app/core/components/menu-lateral/menu-lateral.component';
import { AuthCheckGuard } from 'src/app/core/guards/auth-check.guard';
import { TeachersComponent } from './components/teachers/teachers.component';

const routes: Routes = [
  {
    path: '',
    component: MenuLateralComponent,
    canActivate: [AuthCheckGuard],
    children: [

      {
        path: 'teachers', component: TeachersComponent
      },
      {
        path: 'teachers/:id', component: TeachersDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesoresRoutingModule { }
