import { MatTable } from '@angular/material/table';
import { Students } from './../../clases/students';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/clases/person';
import { Course } from 'src/app/clases/course';
import { MatDialog } from '@angular/material/dialog';
import { StudentsModalComponent } from '../students-modal/students-modal.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  columnas: string[] = ['legajo', 'nombre', 'edad', 'correo', 'opciones']

  //Personas
  persona: Person = new Person("Juanelo", "Perez", 25, "correo@dominio.com");
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
  constructor(
    public dialogoRef: MatDialog
  ) { }

  ngOnInit(): void {
  }


  addStudent() {
    const dialogRef = this.dialogoRef.open(StudentsModalComponent, {
      data: {
        estudiante: null,
        opcion: 'agregar'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.agregarEstudiante(result.data[1]);
    })
  }

  agregarEstudiante(estudiante: Students) {
    this.estudiantes.push(estudiante);
    this.table.renderRows();
  }

  editStudent(estudiante: Students) {
    const dialogRef = this.dialogoRef.open(StudentsModalComponent, {
      data: {
        estudiante: estudiante,
        opcion: 'editar'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      let OldStudent = result.data[0];
      let NewStudent = result.data[1];
      this.updateStudent(OldStudent, NewStudent);

    })
  }

  updateStudent(OldStudent: Students, NewStudent: Students) {
    let index = this.estudiantes.indexOf(OldStudent);
    this.estudiantes[index] = NewStudent;
    this.table.renderRows();
  }

  deleteStudent(estudiante: Students) {
    const dialogRef = this.dialogoRef.open(StudentsModalComponent, {
      data: {
        estudiante: estudiante,
        opcion: 'eliminar'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result.event == "delete") {
        this.delStudent(result.data[1])
      }
    })
  }

  delStudent(estudiante: Students) {
    let index = this.estudiantes.indexOf(estudiante);
    this.estudiantes.splice(index, 1);
    this.table.renderRows();
  }

  viewStudent(estudiante: Students) {
    this.dialogoRef.open(StudentsModalComponent, {
      data: {
        estudiante: estudiante,
        opcion: 'ver'
      }
    });
  }

};
