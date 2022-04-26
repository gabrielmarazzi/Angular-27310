import { MenuLateralComponent } from 'src/app/core/components/menu-lateral/menu-lateral.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsDetailComponent } from './components/students-detail/students-detail.component';
import { StudentsComponent } from './components/students/students.component';
import { AuthCheckGuard } from 'src/app/core/guards/auth-check.guard';

const routes: Routes = [
  {
    path: '',
    component: MenuLateralComponent,
    canActivate: [AuthCheckGuard],
    canDeactivate: [AuthCheckGuard],
    children: [

      {
        path: 'students', component: StudentsComponent
      },
      {
        path: 'students/:id', component: StudentsDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
