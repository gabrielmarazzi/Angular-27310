import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persons } from 'src/app/classes/persons';
import { Roles } from 'src/app/classes/roles';
import { Students } from 'src/app/classes/students';

@Component({
  selector: 'app-students-modal',
  templateUrl: './students-modal.component.html',
  styleUrls: ['./students-modal.component.css']
})
export class StudentsModalComponent implements OnInit {


  person: Persons = new Persons(0, "", "", "", "", new Date(), Roles.getStudentRole(), "", true);
  student: Students = new Students(0, "", this.person, [], []);
  title: string = "Nuevo estudiante";
  edit: boolean = false;
  formularioEstudiante: FormGroup = new FormGroup({

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
    public dialogRef: MatDialogRef<StudentsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {

    if (data.opcion == 'editar') {

      this.local_data = data;
      this.title = "Editar estudiante " + data.estudiante.person.lastName + ", " + data.estudiante.person.name;
      this.student = data.estudiante;

      this.edit = true;

    }
  }

  ngOnInit(): void {

  }

  agregarEstudiante() {


    let person = new Persons(0, this.formularioEstudiante.value.nombre, this.formularioEstudiante.value.apellido, this.formularioEstudiante.value.correo, "password", this.formularioEstudiante.value.fechaNacimiento, Roles.getStudentRole(), "", true);
    let student = new Students(0, this.formularioEstudiante.value.legajo, person, [], []);
    //console.log(this.local_data);
    //limpio el formulario
    this.dialogRef.close({ event: this.action, data: ["", student] });

  }

  editarEstudiante() {
    // console.log(this.local_data)
    let person = new Persons(
      this.local_data.estudiante.person.id,
      this.formularioEstudiante.value.nombre,
      this.formularioEstudiante.value.apellido,
      this.formularioEstudiante.value.correo,
      this.local_data.estudiante.person.password,
      this.formularioEstudiante.value.fechaNacimiento,
      this.local_data.estudiante.person.roles,
      this.local_data.estudiante.person.image,
      this.local_data.estudiante.person.active);
    let student = new Students(this.local_data.estudiante.id, this.formularioEstudiante.value.legajo, person, this.local_data.courses, this.local_data.grades);
    //limpio el formulario
    this.dialogRef.close({ event: this.action, data: [this.local_data.estudiante, student] });
  }

  cerrarModal() {
    this.dialogRef.close();
  }

  guardarCambios() {
    if (this.edit == true) {
      this.action = "edit";
      this.editarEstudiante();
    } else {
      this.action = "add";
      this.agregarEstudiante();
    }
  }

}
