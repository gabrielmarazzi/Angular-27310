import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/class/course';
import { Person } from 'src/app/class/person';
import { Students } from 'src/app/class/students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  titulo = "Listado de Estudiantes";

  //creación de personas

  persona: Person = new Person("Juan", "Perez", 25, "correo@dominio.com");
  persona2: Person = new Person("Gabriel", "Marazzi", 39, "gabriel.marazzi@addoc.com");
  persona3: Person = new Person("Maria Jose", "Zuasnabal", 25, "mzuasnabal@dominio.com");

  //creación de cursos
  fechaInicio: Date = new Date(2022, 5, 15);
  fechaFin: Date = new Date(2022, 5, 30);
  curso: Course = new Course(1, "Angular", 10, 10, "Profesor", ["Ayudante1", "Ayudante2"], new Date(2022, 2, 15), new Date(2022, 3, 15));
  curso2: Course = new Course(2, "Java", 10, 10, "Profesor", ["Ayudante3", "Ayudante4"], new Date(2022, 2, 26), new Date(2022, 3, 26));
  curso3: Course = new Course(3, "C#", 10, 10, "Profesor", ["Ayudante2", "Ayudante1", "AyudanteNuevo"], new Date(2022, 3, 30), new Date(2022, 5, 1));
  curso4: Course = new Course(4, "Angular recursando", 10, 10, "Profesor", ["Ayudante1", "Ayudante2", "OtroAyudante", "otroMas"], new Date(2022, 4, 15), new Date(2022, 6, 15));

  arrayCursos: Course[] = [this.curso, this.curso2, this.curso3, this.curso4];
  arrayCursos2: Course[] = [this.curso2, this.curso3];
  arrayCursos3: Course[] = [this.curso, this.curso2, this.curso3];
  //creación de estudiantes

  estudiantes: Students[] = [
    new Students(this.persona, this.arrayCursos, 1, 10),
    new Students(this.persona2, this.arrayCursos2, 2, 5),
    new Students(this.persona3, this.arrayCursos3, 3, 2)
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
