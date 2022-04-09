import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoNombreStudent'
})
export class formatoNombreStudentPipe implements PipeTransform {

  transform(value: any, tipo: string): unknown {
    let valor: string = value;
    if (tipo == 'nombre') {
      valor = `${value.person.lastName}, ${value.person.name}`;
    }
    if (tipo == 'role') {
      valor = `${value.person.role.name}`;
    }
    return valor;
  }

}
