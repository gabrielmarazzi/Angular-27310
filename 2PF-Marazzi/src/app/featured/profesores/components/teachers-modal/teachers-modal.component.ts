import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persons } from 'src/app/classes/persons';
import { Roles } from 'src/app/classes/roles';
import { Teachers } from 'src/app/classes/teachers';

@Component({
  selector: 'app-teachers-modal',
  templateUrl: './teachers-modal.component.html',
  styleUrls: ['./teachers-modal.component.css']
})
export class TeachersModalComponent implements OnInit {


  person: Persons = new Persons(0, "", "", "", "", new Date(), Roles.getTeacherRole(), "", true);
  teacher: Teachers = new Teachers(0, "", this.person, [],);
  title: string = "Nuevo profesor";
  edit: boolean = false;
  formularioProfesor: FormGroup = new FormGroup({

    legajo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
    fechaNacimiento: new FormControl(new Date(), Validators.required),
    correo: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]),
  });
  //cuando se cierra el modal
  action: any;
  local_data: any;


  constructor(
    public dialogRef: MatDialogRef<TeachersModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {

    if (data.opcion == 'editar') {

      this.local_data = data;
      this.title = "Editar profesor " + data.profesor.person.lastName + ", " + data.profesor.person.name;
      this.teacher = data.profesor;

      this.edit = true;

    }
  }

  ngOnInit(): void {

  }

  agregarProfesor() {


    let person = new Persons(0, this.formularioProfesor.value.nombre, this.formularioProfesor.value.apellido, "", this.formularioProfesor.value.correo, this.formularioProfesor.value.fechaNacimiento, Roles.getTeacherRole(), "", true);
    let teacher = new Teachers(0, this.formularioProfesor.value.legajo, person, []);
    //console.log(this.local_data);
    //limpio el formulario
    this.dialogRef.close({ event: this.action, data: ["", teacher] });

  }

  editarProfesor() {
    // console.log(this.local_data)
    let person = new Persons(
      this.local_data.profesor.person.id,
      this.formularioProfesor.value.nombre,
      this.formularioProfesor.value.apellido,
      this.formularioProfesor.value.correo,
      this.local_data.profesor.person.password,
      this.formularioProfesor.value.fechaNacimiento,
      this.local_data.profesor.person.roles,
      this.local_data.profesor.person.image,
      this.local_data.profesor.person.active);
    let teacher = new Teachers(this.local_data.profesor.id, this.formularioProfesor.value.legajo, person, this.local_data.profesor.courses);
    //limpio el formulario
    console.log(this.local_data)
    console.log(teacher)
    debugger;
    this.dialogRef.close({ event: this.action, data: [this.local_data.profesor, teacher] });
  }

  cerrarModal() {
    this.dialogRef.close();
  }

  guardarCambios() {
    if (this.edit == true) {
      this.action = "edit";
      this.editarProfesor();
    } else {
      this.action = "add";
      this.agregarProfesor();
    }
  }

}
