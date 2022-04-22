
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { CoursesModalComponent } from '../courses-modal/courses-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { AppMaterialModule } from 'src/app/core/app.material.module';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  Cursos: any[] = [];
  Cursos$!: Observable<any>
  CursosSuscripcion!: any;
  serviceURL = "https://perfildigital.adea.com.ar/service/test/service.ashx";
  columnas: string[] = ['camada', 'nombre', 'descripcion', 'fechaInicio', 'fechaFin', 'dificultad', 'habilitado', 'opciones']
  constructor(
    private cursoService: CourseService,
    private SpinnerService: NgxSpinnerService,
    private dialogoRef: MatDialog,
  ) { }

  ngOnInit(): void {
    this.obtenerCursos();
  }

  obtenerCursos() {
    this.SpinnerService.show();
    this.Cursos$ = this.cursoService.obtenerDatosCursosObservable();
    // this.filterCourses()
    this.CursosSuscripcion = this.Cursos$

      .subscribe((datos) => {
        this.Cursos = datos;
        this.SpinnerService.hide();
      });
  }

  addCourse() {
    const dialogRef = this.dialogoRef.open(CoursesModalComponent, {
      data: {
        estudiante: null,
        opcion: 'agregar'
      }
    });
    dialogRef.afterClosed().subscribe(result => {

      let newCourse = result.data[1];
      this.Cursos.push(newCourse);
      let fechaInicio = new Date(newCourse.startDate);
      let nuevaFechaInicio = `${fechaInicio.getDate()}/${fechaInicio.getMonth() + 1}/${fechaInicio.getFullYear()}`;
      let fechaFin = new Date(newCourse.endDate);
      let nuevaFechaFin = `${fechaFin.getDate()}/${fechaFin.getMonth() + 1}/${fechaFin.getFullYear()}`;
      let random = Math.floor(Math.random() * 8) + 1;
      let data = {
        id: "",
        camada: newCourse.camada,
        name: newCourse.name,
        description: newCourse.description,
        startDate: nuevaFechaInicio,
        endDate: nuevaFechaFin,
        level: newCourse.level,
        difficulty: newCourse.difficulty,
        active: newCourse.active,
        image: `https://picsum.photos/id/${random}/200/200`
      }
      this.cursoService.ABMCourse(data).toPromise().then((datos) => {
        this.obtenerCursos();
      })
      this.table.renderRows();

    });
  }

  editCourse(course: any) {
    const dialogRef = this.dialogoRef.open(CoursesModalComponent, {
      data: {
        course: course,
        opcion: 'editar'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      let newCourse = result.data[1];
      this.Cursos.push(newCourse);
      let fechaInicio = new Date(newCourse.startDate);
      let nuevaFechaInicio = `${fechaInicio.getDate()}/${fechaInicio.getMonth() + 1}/${fechaInicio.getFullYear()}`;
      let fechaFin = new Date(newCourse.endDate);
      let nuevaFechaFin = `${fechaFin.getDate()}/${fechaFin.getMonth() + 1}/${fechaFin.getFullYear()}`;
      let random = Math.floor(Math.random() * 8) + 1;
      let data = {
        id: newCourse.id,
        camada: newCourse.camada,
        name: newCourse.name,
        description: newCourse.description,
        startDate: nuevaFechaInicio,
        endDate: nuevaFechaFin,
        level: newCourse.level,
        difficulty: newCourse.difficulty,
        active: newCourse.active,
        image: `https://picsum.photos/id/${random}/200/200`
      }
      this.cursoService.ABMCourse(data).toPromise().then((datos) => {
        this.obtenerCursos();
      })
      this.table.renderRows();

    });
  }

  enableDisableCourse(course: any, enable: boolean) {
    let fechaInicio = new Date(course.startDate);
    let nuevaFechaInicio = `${fechaInicio.getDate()}/${fechaInicio.getMonth() + 1}/${fechaInicio.getFullYear()}`;
    let fechaFin = new Date(course.endDate);
    let nuevaFechaFin = `${fechaFin.getDate()}/${fechaFin.getMonth() + 1}/${fechaFin.getFullYear()}`;
    let random = Math.floor(Math.random() * 8) + 1;
    let data = {
      id: course.id,
      name: course.name,
      camada: course.camada,
      description: course.description,
      difficulty: course.difficulty,
      startDate: nuevaFechaInicio,
      endDate: nuevaFechaFin,
      image: "./assets/img/avatars/" + random + ".jpg",
      active: enable
    }
    this.cursoService.enableDisableCourse(data).toPromise().then((datos) => {
      this.obtenerCursos();
    });


  }

}
