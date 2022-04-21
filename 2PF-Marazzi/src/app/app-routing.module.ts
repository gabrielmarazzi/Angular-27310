
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { HomeComponent } from './core/components/home/home.component';
import { CoursesDetailComponent } from './pantallas/cursos/components/courses-detail/courses-detail.component';

import { StudentsDetailComponent } from './pantallas/estudiantes/components/students-detail/students-detail.component';
import { InscriptionsComponent } from './pantallas/inscripciones/components/inscriptions/inscriptions.component';



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
    loadChildren: () => import('./pantallas/estudiantes/estudiantes.module').then(m => m.EstudiantesModule)
  },
  {
    path: 'students/:id',
    component: StudentsDetailComponent
  },
  {
    path: 'courses',
    loadChildren: () => import('./pantallas/cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'courses/:id',
    component: CoursesDetailComponent,


  },
  {
    path: 'inscriptions',
    loadChildren: () => import('./pantallas/inscripciones/inscripciones.module').then(m => m.InscripcionesModule)
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
