import { Router } from '@angular/router';
import { TeachersModalComponent } from './../teachers-modal/teachers-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Teachers } from 'src/app/classes/teachers';
import { PersonsService } from 'src/app/services/persons.service';
import { SharedFunctions } from 'src/app/classes/sharedFunctions';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {


  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  teachers: any[] = []
  teachers$!: Observable<any>
  teachersSuscripcion!: any;

  columnas: string[] = ['legajo', 'nombre', 'edad', 'fechaNacimiento', 'habilitado', 'correo', 'opciones']

  dataSource = new MatTableDataSource();

  constructor(
    public dialogoRef: MatDialog,
    private PersonsService: PersonsService,
    private router: Router
  ) { }


  ngOnInit(): void {
    // if (SharedFunctions.getRole() > 2) {
    //   this.router.navigate(['/home']);
    // }
    this.teachers$ = this.PersonsService.obtenerDatosProfesoresObservable();
    this.teachersSuscripcion = this.teachers$
      .subscribe((datos) => {
        this.teachers = datos;
        this.dataSource.data = this.teachers;
        // console.log(this.teacher);
      });
  }

  ngOnDestroy(): void {
    this.teachersSuscripcion.unsubscribe();
  }

  addTeacher() {
    const dialogRef = this.dialogoRef.open(TeachersModalComponent, {
      data: {
        estudiante: null,
        opcion: 'agregar'
      }
    });
    dialogRef.afterClosed().subscribe(result => {

      let newTeacher = result.data[1];
      newTeacher.id = this.teachers.length + 1;
      this.teachers.push(newTeacher);
      this.table.renderRows();
      let random = Math.floor(Math.random() * 8) + 1;
      //edicion en si
      let fechaNacimiento = new Date(newTeacher.person.birthDay);
      let nuevaFecha = `${fechaNacimiento.getDate()}/${fechaNacimiento.getMonth() + 1}/${fechaNacimiento.getFullYear()}`;
      let data = {
        id: "",
        legajo: newTeacher.legajo,
        name: newTeacher.person.name,
        lastName: newTeacher.person.lastName,
        password: "password",
        email: newTeacher.person.email,
        birthDay: nuevaFecha,
        role: 2,
        image: "./assets/img/avatars/" + random + ".jpg",
        active: true,
        idP: newTeacher.id,
      }

      this.PersonsService.crearActualizarPersonaObservable(data).toPromise()
        .then((datos: any) => {
          this.teachers$ = this.PersonsService.obtenerDatosProfesoresObservable();
        })



    })
  }

  viewTeacher(teacher: Teachers) {
    const dialogRef = this.dialogoRef.open(TeachersModalComponent, {
      data: {
        profesor: teacher,
        opcion: 'ver'
      }
    });
  }

  editTeacher(teacher: Teachers) {
    const dialogRef = this.dialogoRef.open(TeachersModalComponent, {
      data: {
        profesor: teacher,
        opcion: 'editar'
      }
    });
    // console.log(teacher);
    dialogRef.afterClosed().subscribe(result => {

      let oldTeacher = result.data[0];
      let newTeacher = result.data[1];
      let index = this.teachers.indexOf(oldTeacher);
      this.teachers[index] = newTeacher;
      this.table.renderRows();
      let random = Math.floor(Math.random() * 8) + 1;
      //edicion en si
      let fechaNacimiento = new Date(newTeacher.person.birthDay);
      let nuevaFecha = `${fechaNacimiento.getDate()}/${fechaNacimiento.getMonth() + 1}/${fechaNacimiento.getFullYear()}`;

      let data = {
        id: newTeacher.person.id,
        legajo: newTeacher.legajo,
        name: newTeacher.person.name,
        lastName: newTeacher.person.lastName,
        password: "password",
        email: newTeacher.person.email,
        birthDay: nuevaFecha,
        role: 2,
        image: "./assets/img/avatars/" + random + ".jpg",
        active: true,
        idP: newTeacher.id,
      }
      // console.log(data);

      this.PersonsService.crearActualizarPersonaObservable(data).toPromise()
        .then((datos) => {
          this.teachers$ = this.PersonsService.obtenerDatosProfesoresObservable();
        })



    })
  }


  enableDeleteTeacher(teacher: Teachers, enable: boolean) {
    let random = Math.floor(Math.random() * 8) + 1;
    let fechaNacimiento = new Date(teacher.person.birthDay);
    let nuevaFecha = `${fechaNacimiento.getDate()}/${fechaNacimiento.getMonth() + 1}/${fechaNacimiento.getFullYear()}`;
    let data = {
      id: teacher.person.id,
      legajo: teacher.legajo,
      name: teacher.person.name,
      lastName: teacher.person.lastName,
      password: "password",
      email: teacher.person.email,
      birthDay: nuevaFecha,
      role: 2,
      image: "./assets/img/avatars/" + random + ".jpg",
      active: true,
      idStudent: teacher.id
    }
    this.PersonsService.crearActualizarPersonaObservable(data).toPromise()
      .then((datos) => {

        this.teachers$ = this.PersonsService.obtenerDatosProfesoresObservable();
      })

    this.teachersSuscripcion = this.teachers$
      .subscribe((datos) => {
        this.teachers = datos;
        this.dataSource.data = this.teachers;

      });



  }

}
