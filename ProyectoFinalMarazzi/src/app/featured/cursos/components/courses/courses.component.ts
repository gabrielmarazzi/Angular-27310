import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit, ViewChild, Pipe } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable, Subscription, map } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { CoursesModalComponent } from '../courses-modal/courses-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { AppMaterialModule } from 'src/app/core/app.material.module';
import { getRtlScrollAxisType } from '@angular/cdk/platform';
import { SharedFunctions } from 'src/app/classes/sharedFunctions';
import { NotificationService } from 'src/app/services/notification.service';
import { selectorCourses } from 'src/app/state/selectors/course.selector';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { LoadCourses, LoadCoursesSuccess } from 'src/app/state/actions/course.action';
import { Login } from 'src/app/classes/login';
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
  routeSubcription!: Subscription;
  administraInscripcion: boolean = false;
  ABMCurso: boolean = false;
  sinDatos: boolean = false;
  constructor(
    private cursoService: CourseService,
    private SpinnerService: NgxSpinnerService,
    private dialogoRef: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.activatedRoute.url.forEach((urlSegment) => {
      // console.log(urlSegment);
      urlSegment.forEach(datoSegmento => {
        if (datoSegmento.path == 'inscriptions') {
          this.administraInscripcion = true;
        }
      })
    })
    this.obtenerCursos();

    let roleId: number = Login.getRoleFromStore(this.store)
    if (roleId == 1) {
      this.ABMCurso = true;
    }
  }

  obtenerCursos() {

    this.Cursos$ = this.store.select(selectorCourses);


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
        this.cargarCursos();
        this.obtenerCursos();
      })
      this.table.renderRows();

      this.notificationService.openSnackBar("Curso creado!", "Cerrar");
    });
  }

  editCourse(course: any) {
    const clone = Object.assign({}, course);
    const dialogRef = this.dialogoRef.open(CoursesModalComponent, {
      data: {
        course: clone,
        opcion: 'editar'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
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
        // console.log(data)
        this.cursoService.ABMCourse(data).toPromise().then((datos) => {
          this.cargarCursos();
        })
        this.table.renderRows();

        this.notificationService.openSnackBar("Curso actualizado!", "Cerrar");
      }
    });

  }

  cargarCursos() {
    this.store.dispatch(LoadCourses());
    this.CursosSuscripcion = this.cursoService.obtenerDatosCursosObservable()
      .subscribe((datos) => {
        // console.log(datos)
        this.store.dispatch(LoadCoursesSuccess({ courses: datos }));
        this.obtenerCursos();
      });
    //this.store.select(selectorCourses)
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
      // this.obtenerCursos();
      this.cargarCursos();
    });

    this.notificationService.openSnackBar("Curso actualizado!", "Cerrar");

  }

}
