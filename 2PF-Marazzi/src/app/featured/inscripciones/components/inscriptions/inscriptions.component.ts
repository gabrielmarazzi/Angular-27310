import { PersonsService } from 'src/app/services/persons.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Inscriptions',
  templateUrl: './Inscriptions.component.html',
  styleUrls: ['./Inscriptions.component.css']
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

  private routeSubcription!: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CourseService,
    private SpinnerService: NgxSpinnerService,
    private PersonsService: PersonsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.inicializarDatos();

  }

  inicializarDatos() {
    console.log(this.activatedRoute.url);
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
  }

  obtenerCurso(id: number) {
    this.Curso$ = this.cursoService.obtenerDatosCursoObservableById(id);
    // this.filterCourses()
    this.CursoSuscripcion = this.Curso$

      .subscribe((datos) => {
        this.Curso = datos[0];
        console.log(this.Curso)

      });
  }
  obtenerEstudiantes() {
    this.students$ = this.PersonsService.obtenerDatosEstudiantesObservable();
    this.studentsSuscripcion = this.students$
      .subscribe((datos) => {
        this.students = datos;
        // console.log(this.students)
        this.studentsInscriptos = this.students.filter(x => x.courses.find((y: { id: any; }) => y.id == this.courseId));
        this.studentsNoInscriptos = this.students.filter(x => !this.studentsInscriptos.includes(x));

        this.SpinnerService.hide()
      });






  }

  ABMCurso(fila: any, pTipo: string) {
    let id = fila.id;
    console.log(fila);
    if (id != "") {
      this.cursoService.ABMPersonToCurso(id, this.courseId, pTipo).subscribe((datos) => {
        this.inicializarDatos();
        this.tableInscriptos.renderRows();
        this.tableNoInscriptos.renderRows();
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
