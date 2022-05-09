import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { formatoDatosStudentPipe } from './pipes/formato-nombre.pipe';
import { FormatoTitulosDirective } from './directives/formato-titulos.directive';
import { FormatoNombreCursosPipe } from './pipes/formato-nombre-cursos.pipe';



@NgModule({
  declarations: [
    formatoDatosStudentPipe,
    FormatoTitulosDirective,
    FormatoNombreCursosPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    formatoDatosStudentPipe,
    FormatoTitulosDirective,
    FormatoNombreCursosPipe
  ]
})
export class SharedModule { }
