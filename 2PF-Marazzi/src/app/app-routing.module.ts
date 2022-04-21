
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { HomeComponent } from './core/components/home/home.component';
import { CoursesDetailComponent } from './featured/cursos/components/courses-detail/courses-detail.component';

import { StudentsDetailComponent } from './featured/estudiantes/components/students-detail/students-detail.component';
import { InscriptionsComponent } from './featured/inscripciones/components/inscriptions/inscriptions.component';



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
    path: '**',
    component: PaginaNoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
