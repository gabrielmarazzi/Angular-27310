
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
    path: 'students',
    loadChildren: () => import('./featured/estudiantes/estudiantes.module').then(m => m.EstudiantesModule)
  },
  {
    path: 'students/:id',
    component: StudentsDetailComponent
  },
  {
    path: 'courses',
    loadChildren: () => import('./featured/cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'courses/:id',
    component: CoursesDetailComponent,


  },
  {
    path: 'inscriptions',
    loadChildren: () => import('./featured/inscripciones/inscripciones.module').then(m => m.InscripcionesModule)
  },
  {
    path: 'inscriptions/:id',
    component: InscriptionsComponent
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
