import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoNombre'
})
export class FormatoNombrePipe implements PipeTransform {

  transform(value: any): string {
    let valor: string;
    valor = `${value.personApellidos}, ${value.personNombres}`;
    return valor;
  }

}
