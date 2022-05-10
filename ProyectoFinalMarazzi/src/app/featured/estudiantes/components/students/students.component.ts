import { Persons } from 'src/app/classes/persons';
import { NotificationService } from './../../../../services/notification.service';
import { Roles } from 'src/app/classes/roles';

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Students } from 'src/app/classes/students';

import { MatDialog } from '@angular/material/dialog';
import { StudentsModalComponent } from '../students-modal/students-modal.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { PersonsService } from 'src/app/services/persons.service';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { selectStudents } from 'src/app/state/selectors/student.selector';
import { LoadStudents, LoadStudentsSuccess } from 'src/app/state/actions/student.action';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {

  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  students: any[] = []
  students$!: Observable<any>
  studentsSuscripcion!: any;
  serviceURL = "https://perfildigital.adea.com.ar/service/test/service.ashx";


  columnas: string[] = ['legajo', 'nombre', 'edad', 'fechaNacimiento', 'habilitado', 'correo', 'opciones']

  dataSource = new MatTableDataSource();


  constructor(
    public dialogoRef: MatDialog,
    private PersonsService: PersonsService,
    private notificationService: NotificationService,
    private store: Store<AppState>
  ) { }

  cargarStudents() {
    this.store.dispatch(LoadStudents());
    this.studentsSuscripcion = this.PersonsService.obtenerDatosEstudiantesObservable();
    this.studentsSuscripcion.subscribe((datos: any) => {
      this.store.dispatch(LoadStudentsSuccess({ students: datos }));
    });
    this.students$ = this.store.select(selectStudents);
  }

  ngOnInit(): void {
    // this.students$ = this.PersonsService.obtenerDatosEstudiantesObservable();
    // this.studentsSuscripcion = this.students$
    //   .subscribe((datos) => {
    //     this.students = datos;
    //     this.dataSource.data = this.students;
    //     // console.log(this.students);
    //   });
    this.cargarStudents();

  }


  addStudent() {
    const dialogRef = this.dialogoRef.open(StudentsModalComponent, {
      data: {
        estudiante: null,
        opcion: 'agregar'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        let newStudent = result.data[1];
        newStudent.id = this.students.length + 1;
        this.students.push(newStudent);
        this.table.renderRows();
        let random = Math.floor(Math.random() * 8) + 1;
        //edicion en si
        let fechaNacimiento = new Date(newStudent.person.birthDay);
        let nuevaFecha = `${fechaNacimiento.getDate()}/${fechaNacimiento.getMonth() + 1}/${fechaNacimiento.getFullYear()}`;
        let data = {
          id: "",
          legajo: newStudent.legajo,
          name: newStudent.person.name,
          lastName: newStudent.person.lastName,
          password: "password",
          email: newStudent.person.email,
          birthDay: nuevaFecha,
          role: 4,
          image: "./assets/img/avatars/" + random + ".jpg",
          active: true,
          idP: newStudent.id,
        }

        this.PersonsService.crearActualizarPersonaObservable(data).toPromise()
          .then((datos) => {
            //this.students$ = this.PersonsService.obtenerDatosEstudiantesObservable();
            this.cargarStudents();
          })

        // this.studentsSuscripcion = this.students$
        //   .subscribe((datos) => {
        //     this.students = datos;
        //     this.dataSource.data = this.students;
        //     this.table.renderRows();
        //   });

        this.notificationService.openSnackBar("Estudiante creado!", "Cerrar");
      }
    })
  }



  viewStudent(student: Students) {

    const dialogRef = this.dialogoRef.open(StudentsModalComponent, {
      data: {
        estudiante: student,
        opcion: 'ver'
      }
    });
  }

  editStudent(student: Students) {
    //le paso una copia del objeto porque a NgRx no le gusta sino
    const person = new Persons(student.person.id, student.person.name, student.person.lastName, student.person.email, student.person.password, student.person.birthDay, student.person.role, student.person.image, student.person.active);
    const studentClone = new Students(student.id, student.legajo, person, student.courses, student.grades);

    const dialogRef = this.dialogoRef.open(StudentsModalComponent, {

      data: {
        estudiante: studentClone,
        opcion: 'editar'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        let oldStudent = result.data[0];
        let newStudent = result.data[1];
        let index = this.students.indexOf(oldStudent);
        this.students[index] = newStudent;
        this.table.renderRows();
        let random = Math.floor(Math.random() * 8) + 1;
        //edicion en si
        let fechaNacimiento = new Date(newStudent.person.birthDay);
        let nuevaFecha = `${fechaNacimiento.getDate()}/${fechaNacimiento.getMonth() + 1}/${fechaNacimiento.getFullYear()}`;
        let data = {
          id: newStudent.person.id,
          legajo: newStudent.legajo,
          name: newStudent.person.name,
          lastName: newStudent.person.lastName,
          password: "password",
          email: newStudent.person.email,
          birthDay: nuevaFecha,
          role: 4,
          image: "./assets/img/avatars/" + random + ".jpg",
          active: true,
          idP: newStudent.id,
        }
        this.PersonsService.crearActualizarPersonaObservable(data).toPromise()
          .then((datos) => {
            this.students$ = this.PersonsService.obtenerDatosEstudiantesObservable();
            this.cargarStudents();

          })

        // this.studentsSuscripcion = this.students$
        //   .subscribe((datos) => {
        //     this.students = datos;
        //     this.dataSource.data = this.students;
        //     this.table.renderRows();
        //   });
        this.notificationService.openSnackBar("Estudiante actualizado!", "Cerrar");
      }
    })
  }

  deleteStudent(student: Students) {
    // this.students.splice(this.students.indexOf(student), 1);
    let random = Math.floor(Math.random() * 8) + 1;
    let fechaNacimiento = new Date(student.person.birthDay);
    let nuevaFecha = `${fechaNacimiento.getDate()}/${fechaNacimiento.getMonth() + 1}/${fechaNacimiento.getFullYear()}`;
    this.table.renderRows();
    let data = {
      id: student.person.id,
      legajo: student.legajo,
      name: student.person.name,
      lastName: student.person.lastName,
      password: "password",
      email: student.person.email,
      birthDay: nuevaFecha,
      role: 4,
      image: "./assets/img/avatars/" + random + ".jpg",
      active: false,
      idP: student.id
    }
    // console.log(data)
    this.PersonsService.crearActualizarPersonaObservable(data).toPromise()
      .then((datos) => {
        this.students$ = this.PersonsService.obtenerDatosEstudiantesObservable();
        //console.log(datos);
        this.cargarStudents();
        this.notificationService.openSnackBar("Estudiante actualizado!", "Cerrar");
      })

    // this.studentsSuscripcion = this.students$
    //   .subscribe((datos) => {
    //     this.students = datos;
    //     this.dataSource.data = this.students;
    //     
    //   });



  }


  enableStudent(student: Students) {
    //this.students.splice(this.students.indexOf(student), 1);
    let random = Math.floor(Math.random() * 8) + 1;
    let fechaNacimiento = new Date(student.person.birthDay);
    let nuevaFecha = `${fechaNacimiento.getDate()}/${fechaNacimiento.getMonth() + 1}/${fechaNacimiento.getFullYear()}`;
    let data = {
      id: student.person.id,
      legajo: student.legajo,
      name: student.person.name,
      lastName: student.person.lastName,
      password: "password",
      email: student.person.email,
      birthDay: nuevaFecha,
      role: 4,
      image: "./assets/img/avatars/" + random + ".jpg",
      active: true,
      idP: student.id
    }
    this.PersonsService.crearActualizarPersonaObservable(data).toPromise()
      .then((datos) => {

        this.students$ = this.PersonsService.obtenerDatosEstudiantesObservable();
        this.cargarStudents();
        this.notificationService.openSnackBar("Estudiante actualizado!", "Cerrar");
      })

    // this.studentsSuscripcion = this.students$
    //   .subscribe((datos) => {
    //     this.students = datos;
    //     this.dataSource.data = this.students;

    //   });
  }

  ngOnDestroy() {
    // this.studentsSuscripcion.unsubscribe();
  }
}
