import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persons } from 'src/app/classes/persons';
import { Roles } from 'src/app/classes/roles';
import { Assistants } from 'src/app/classes/assistants';

@Component({
  selector: 'app-assistants-modal',
  templateUrl: './assistants-modal.component.html',
  styleUrls: ['./assistants-modal.component.css']
})
export class AssistantsModalComponent implements OnInit {


  person: Persons = new Persons(0, "", "", "", "", new Date(), Roles.getAssistantRole(), "", true);
  assistant: Assistants = new Assistants(0, "", this.person, [],);
  title: string = "Nuevo ayudante";
  edit: boolean = false;
  formularioAyudante: FormGroup = new FormGroup({

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
    public dialogRef: MatDialogRef<AssistantsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {

    if (data.opcion == 'editar') {

      this.local_data = data;
      this.title = "Editar ayudante " + data.ayudante.person.lastName + ", " + data.ayudante.person.name;
      this.assistant = data.ayudante;

      this.edit = true;

    }
  }

  ngOnInit(): void {

  }

  agregarAyudante() {


    let person = new Persons(0, this.formularioAyudante.value.nombre, this.formularioAyudante.value.apellido, this.formularioAyudante.value.correo, "password", this.formularioAyudante.value.fechaNacimiento, Roles.getAssistantRole(), "", true);
    let assistant = new Assistants(0, this.formularioAyudante.value.legajo, person, []);
    //limpio el formulario
    this.dialogRef.close({ event: this.action, data: ["", assistant] });

  }

  editarAyudante() {
    // console.log(this.local_data)
    let person = new Persons(
      this.local_data.ayudante.person.id,
      this.formularioAyudante.value.nombre,
      this.formularioAyudante.value.apellido,
      this.formularioAyudante.value.correo,
      this.local_data.ayudante.person.password,
      this.formularioAyudante.value.fechaNacimiento,
      this.local_data.ayudante.person.roles,
      this.local_data.ayudante.person.image,
      this.local_data.ayudante.person.active);
    let assistant = new Assistants(this.local_data.ayudante.id, this.formularioAyudante.value.legajo, person, this.local_data.ayudante.courses);

    this.dialogRef.close({ event: this.action, data: [this.local_data.ayudante, assistant] });
  }

  cerrarModal() {
    this.dialogRef.close();
  }

  guardarCambios() {
    if (this.edit == true) {
      this.action = "edit";
      this.editarAyudante();
    } else {
      this.action = "add";
      this.agregarAyudante();
    }
  }

}
