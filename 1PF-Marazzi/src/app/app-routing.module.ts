import { StudentsComponent } from './components/students/students.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CuerpoComponent
  },
  {
    path: 'Students',
    component: StudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
