import { StudentsGradesComponent } from './featured/components/students-grades/students-grades.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { HomeComponent } from './core/components/home/home.component';
import { CoursesDetailComponent } from './featured/components/courses-detail/courses-detail.component';
import { CoursesComponent } from './featured/components/courses/courses.component';
import { InscriptionsComponent } from './featured/components/inscriptions/inscriptions.component';
import { StudentsDetailComponent } from './featured/components/students-detail/students-detail.component';
import { StudentsComponent } from './featured/components/students/students.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'students/:id',
    component: StudentsDetailComponent
  },

  // {
  //   path: 'teachers',
  //   component: TeachersComponent
  // },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'courses/:id',
    component: CoursesDetailComponent
  },
  {
    path: 'inscriptions',
    component: InscriptionsComponent
  },
  {
    path: 'inscriptions/:id',
    component: InscriptionsComponent
  },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  // {
  //   path: 'help',
  //   component: HelpComponent
  // }

  //por cualuqier otra página	
  {
    path: '**',
    component: PaginaNoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
