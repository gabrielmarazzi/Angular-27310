import { LoadStudents, LoadStudentsSuccess, LoadStudentsInscriptionSuccess, LoadStudentsNoInscriptionSuccess } from './../../../../state/actions/student.action';
import { AppState } from 'src/app/state/app.state';
import { PersonsService } from 'src/app/services/persons.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { Store } from '@ngrx/store';
import { LoadCourses, LoadCourseIdSuccess } from 'src/app/state/actions/course.action';
import { selectCourseId } from 'src/app/state/selectors/course.selector';
import { Login } from 'src/app/classes/login';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnInit {

  @ViewChild(MatTable, { static: true }) tableInscriptos!: MatTable<any>;
  @ViewChild(MatTable, { static: true }) tableNoInscriptos!: MatTable<any>;
  courseId: string = "";
  students: any[] = []
  studentsInscriptos: any[] = [];
  studentsNoInscriptos: any[] = [];
  students$!: Observable<any>
  studentsSuscripcion!: any;
  serviceURL = "https://perfildigital.adea.com.ar/service/test/service.ashx";
  columnas: string[] = ['legajo', 'nombre', 'edad', 'fechaNacimiento', 'habilitado', 'correo', 'opciones', 'insc']
  Curso: any;
  Curso$!: Observable<any>
  CursoSuscripcion!: any;
  dataSource = new MatTableDataSource();
  administra = false;
  private routeSubcription!: Subscription;
  studentsNoInscriptions: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CourseService,
    private SpinnerService: NgxSpinnerService,
    private PersonsService: PersonsService,
    private router: Router,
    private notificationService: NotificationService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.inicializarDatos();

  }

  inicializarDatos() {
    // console.log(this.activatedRoute.url);
    this.routeSubcription = this.activatedRoute.params.subscribe(
      (params) => {
        this.courseId = params['id'];

        if ((this.courseId != undefined)) {
          this.obtenerCurso(parseInt(this.courseId));
        } else {
          this.router.navigate(['/inscriptions/courses']);

        }
      });
    this.obtenerEstudiantes();

    let roleId: number = Login.getRoleFromStore(this.store)
    if (roleId == 4) {
      this.administra = false;
    } else {
      this.administra = true;
    }
  }

  obtenerCurso(id: number) {
    // this.Curso$ = this.cursoService.obtenerDatosCursoObservableById(id);
    // // this.filterCourses()
    // this.CursoSuscripcion = this.Curso$

    //   .subscribe((datos) => {
    //     this.Curso = datos[0];
    //     // console.log(this.Curso)

    //   });
    this.store.dispatch(LoadCourses());

    this.cursoService.obtenerDatosCursoObservableById(id)
      .subscribe((datos) => {
        this.Curso = datos[0];
        this.store.dispatch(LoadCourseIdSuccess({ courses: datos }));
        this.SpinnerService.hide();

      });
    this.Curso = this.store.select(selectCourseId)
  }
  obtenerEstudiantes() {
    this.store.dispatch(LoadStudents());
    this.students$ = this.PersonsService.obtenerDatosEstudiantesObservable();
    this.studentsSuscripcion = this.students$
      .subscribe((datos) => {
        this.students = datos;
        this.store.dispatch(LoadStudentsSuccess({ students: datos }));
        // console.log(this.students)
        this.studentsInscriptos = this.students.filter(x => x.courses.find((y: { id: any; }) => y.id == this.courseId));
        this.studentsNoInscriptos = this.students.filter(x => !this.studentsInscriptos.includes(x));
        this.store.dispatch(LoadStudentsInscriptionSuccess({ students: this.studentsInscriptos }));
        this.store.dispatch(LoadStudentsNoInscriptionSuccess({ students: this.studentsNoInscriptions }));
        this.SpinnerService.hide()
      });






  }

  ABMCurso(fila: any, pTipo: string) {
    let id = fila.id;
    // console.log(fila);
    if (id != "") {
      this.cursoService.ABMPersonToCurso(id, this.courseId, pTipo).subscribe((datos) => {
        this.inicializarDatos();
        this.tableInscriptos.renderRows();
        this.tableNoInscriptos.renderRows();
        if (pTipo == "A") {

          this.notificationService.openSnackBar("Inscripción realizada correctamente!", "Cerrar");
        } else {

          this.notificationService.openSnackBar("Desinscripción realizada correctamente!", "Cerrar");
        }
      });

      //this.obtenerCurso(parseInt(this.courseId));

    }

  }

  ngOnDestroy() {
    this.routeSubcription.unsubscribe();
    if (this.studentsSuscripcion != undefined) {
      this.studentsSuscripcion.unsubscribe();
    }
    if (this.CursoSuscripcion != undefined) {
      this.CursoSuscripcion.unsubscribe();
    }
  }

}

