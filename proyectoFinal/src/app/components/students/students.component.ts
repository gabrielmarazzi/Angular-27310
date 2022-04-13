import { StudentsService } from './../../services/students.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FakeData } from 'src/app/classes/fake-data';
import { Students } from 'src/app/classes/students';

import { MatDialog } from '@angular/material/dialog';
import { StudentsModalComponent } from '../students-modal/students-modal.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  students: any[] = []
  students$!: Observable<any>
  studentsSuscripcion!: any;
  serviceURL = "https://perfildigital.adea.com.ar/service/test/service.ashx";


  columnas: string[] = ['legajo', 'nombre', 'edad', 'fechaNacimiento', 'habilitado', 'correo', 'opciones']

  dataSource = new MatTableDataSource();

  constructor(
    public dialogoRef: MatDialog,
    private studentsService: StudentsService,
  ) { }

  ngOnInit(): void {
    this.students$ = this.studentsService.obtenerDatosEstudiantesObservable();
    this.studentsSuscripcion = this.students$
      .subscribe((datos) => {
        this.students = datos;
        this.dataSource.data = this.students;
        console.log(this.students);
      });
  }


  addStudent() {
    const dialogRef = this.dialogoRef.open(StudentsModalComponent, {
      data: {
        estudiante: null,
        opcion: 'agregar'
      }
    });
    dialogRef.afterClosed().subscribe(result => {

      let newStudent = result.data[1];
      newStudent.id = this.students.length + 1;
      this.students.push(newStudent);
      this.table.renderRows();
    })
  }



  viewStudent(student: Students) {
    console.log(student);
    const dialogRef = this.dialogoRef.open(StudentsModalComponent, {
      data: {
        estudiante: student,
        opcion: 'ver'
      }
    });
  }

  editStudent(student: Students) {
    const dialogRef = this.dialogoRef.open(StudentsModalComponent, {

      data: {
        estudiante: student,
        opcion: 'editar'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      let oldStudent = result.data[0];
      let newStudent = result.data[1];
      let index = this.students.indexOf(oldStudent);
      this.students[index] = newStudent;
      this.table.renderRows();
    })
  }

  deleteStudent(student: Students) {
    this.students.splice(this.students.indexOf(student), 1);

    this.table.renderRows();
  }


}
