import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesDetailComponent } from './components/courses-detail/courses-detail.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [

  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'inscriptions/courses',
    component: CoursesComponent
  },
  {
    path: 'courses/:id',
    component: CoursesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
