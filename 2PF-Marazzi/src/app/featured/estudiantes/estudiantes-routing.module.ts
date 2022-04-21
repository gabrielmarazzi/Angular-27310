
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsDetailComponent } from './components/students-detail/students-detail.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  {
    path: 'students', component: StudentsComponent
  },
  {
    path: 'students/:id', component: StudentsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
