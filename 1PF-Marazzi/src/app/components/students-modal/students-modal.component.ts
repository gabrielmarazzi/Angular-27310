import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from 'src/app/clases/person';
import { Students } from 'src/app/clases/students';

@Component({
  selector: 'app-students-modal',
  templateUrl: './students-modal.component.html',
  styleUrls: ['./students-modal.component.css']
})
export class StudentsModalComponent implements OnInit {

  listadoEstudiantes: Students[] = [];
  formularioEstudiante!: FormGroup;
  //cuando se cierra el modal
  action: string;
  local_data: any;
  constructor(
    public dialogRef: MatDialogRef<StudentsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) {

    this.local_data = { ...data };
    this.action = this.local_data.action;
    if (data.opcion == 'editar') {
      this.formularioEstudiante = this.fb.group({
        nombre: new FormControl(data.estudiante.personNombres, [Validators.required, Validators.minLength(5)]),
        apellido: new FormControl(data.estudiante.personApellidos, [Validators.required, Validators.minLength(5)]),
        legajo: new FormControl(data.estudiante.legajo, [Validators.required, Validators.pattern('[0-9]*')]),
        edad: new FormControl(data.estudiante.edad, [Validators.required, Validators.pattern('[0-9]*')]),
        email: new FormControl(data.estudiante.correo, [Validators.required, Validators.email])

      });
    } else if (data.opcion == 'agregar') {
      this.formularioEstudiante = this.fb.group({
        nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
        apellido: new FormControl('', [Validators.required, Validators.minLength(5)]),
        legajo: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
        edad: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
        email: new FormControl('', [Validators.required, Validators.email])

      });
    }
  }

  ngOnInit(): void {
  }

  agregarEstudiante() {
    let formStudent = this.formularioEstudiante.value;
    //creo la persona
    let newPerson = new Person(formStudent.nombre, formStudent.apellido, formStudent.edad, formStudent.email);
    //asigno el estudiante sin curso
    let newStudent = new Students(newPerson, [], formStudent.legajo, 0);
    //agrego el estudiante a la lista
    this.listadoEstudiantes.push(newStudent);
    //limpio el formulario
    this.dialogRef.close({ event: this.action, data: [this.local_data.estudiante, newStudent] });


  }

  editarEstudiante() {
    let formStudent = this.formularioEstudiante.value;
    //creo la persona
    let newPerson = new Person(formStudent.nombre, formStudent.apellido, formStudent.edad, formStudent.email);
    //asigno el estudiante sin curso
    let newStudent = new Students(newPerson, [], formStudent.legajo, 0);
    //agrego el estudiante a la lista
    this.listadoEstudiantes.push(newStudent);
    //limpio el formulario
    this.dialogRef.close({ event: this.action, data: [this.local_data.estudiante, newStudent] });


  }

  eliminarEstudiante() {
    this.dialogRef.close({ event: "delete", data: [this.local_data.estudiante, this.local_data.estudiante] });
  }

  cerrarModal() {
    this.dialogRef.close({ event: this.action });
  }


}
