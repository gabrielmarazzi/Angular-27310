import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { formatoDatosGeneralPipe } from './pipes/formato-nombre.pipe';
import { FormatoTitulosDirective } from './directives/formato-titulos.directive';
import { FormatoNombreCursosPipe } from './pipes/formato-nombre-cursos.pipe';



@NgModule({
  declarations: [
    formatoDatosGeneralPipe,
    FormatoTitulosDirective,
    FormatoNombreCursosPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    formatoDatosGeneralPipe,
    FormatoTitulosDirective,
    FormatoNombreCursosPipe,
  ]
})
export class SharedModule { }
