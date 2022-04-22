import { Pipe, PipeTransform } from '@angular/core';
import { Roles } from 'src/app/classes/roles';


@Pipe({
  name: 'formatoDatosStudent'
})
export class formatoDatosStudentPipe implements PipeTransform {

  transform(value: any, tipo: string): unknown {
    let valor: string = value;
    if (tipo == 'nombre') {
      valor = `${value.person.lastName}, ${value.person.name}`;
    }
    if (tipo == 'role') {
      valor = Roles.getRoleName(value.person.role);
    }

    if (tipo == 'edad') {
      let fechaNacimiento = new Date(value.person.birthDay);
      let edad = new Date().getFullYear() - fechaNacimiento.getFullYear();
      valor = `${edad}`;
    }

    if (tipo == 'fechaNacimiento') {
      let fechaNacimiento = new Date(value.person.birthDay);
      valor = `${fechaNacimiento.getDate()}/${fechaNacimiento.getMonth() + 1}/${fechaNacimiento.getFullYear()}`;
    }


    if (tipo == 'activo') {
      if (value.person.active) {
        valor = 'Activo';
      } else {
        valor = 'Inactivo';
      }
    }

    if (tipo == 'correo') {

      valor = `${value.person.email}`;
      //console.log(value);
    }

    return valor;
  }

}
