import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoNombreCursos'
})
export class FormatoNombreCursosPipe implements PipeTransform {

  transform(value: any, tipo: string): string {
    let valor: string = "";
    if (tipo == 'activo') {
      if (value?.active) {
        valor = 'Activo';
      } else {
        valor = 'Inactivo';
      }
    }

    return valor;
  }

}
