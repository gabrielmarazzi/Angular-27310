import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/clases/students';
import { Person } from 'src/app/clases/person';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {

  listadoEstudiantes: Students[] = [];
  formularioEstudiante!: FormGroup;
  constructor(public fb: FormBuilder) {
    this.formularioEstudiante = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(5)]),
      legajo: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      edad: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      email: new FormControl('', [Validators.required, Validators.email])

    });
  }

  ngOnInit(): void {
  }


  cargaEstudiante() {
    let formStudent = this.formularioEstudiante.value;
    //creo la persona
    let newPerson = new Person(formStudent.nombre, formStudent.apellido, formStudent.edad, formStudent.email);
    //asigno el estudiante sin curso
    let newStudent = new Students(newPerson, [], formStudent.legajo, 0);
    //agrego el estudiante a la lista
    this.listadoEstudiantes.push(newStudent);
    //limpio el formulario
    this.formularioEstudiante.reset();


  }

  borrarEstudiante(pEstudiante: Students) {
    //borro el estudiante de la lista
    //No es lo mas lindo, pero al no contar con una base de datos, no hay otra opcion
    this.listadoEstudiantes = this.listadoEstudiantes.filter(estudiante => estudiante.legajo !== pEstudiante.legajo);
  }

}
