
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentsGradesComponent } from 'src/app/featured/estudiantes/components/students-grades/students-grades.component';
import { SharedFunctions } from 'src/app/classes/sharedFunctions';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {

  courseId: number = 0;
  routeSubcription!: Subscription;
  Curso: any;
  Curso$!: Observable<any>
  CursoSuscripcion!: any;
  serviceURL = "https://perfildigital.adea.com.ar/service/test/service.ashx";
  ABMInscripciones: boolean = false;
  currentPerson: number = 0;
  readonly: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CourseService,
    private SpinnerService: NgxSpinnerService,
    public dialogoRef: MatDialog,
  ) { }

  ngOnInit(): void {
    this.routeSubcription = this.activatedRoute.params.subscribe(
      (params) => {
        this.courseId = params['id'];
        this.obtenerCurso(this.courseId);
      });

    if (SharedFunctions.getRole() <= 3) {
      this.ABMInscripciones = true;
    }

  }

  obtenerCurso(id: number) {
    this.SpinnerService.show();
    this.Curso$ = this.cursoService.obtenerDatosCursoObservableById(id);
    // this.filterCourses()
    this.CursoSuscripcion = this.Curso$

      .subscribe((datos) => {
        this.Curso = datos[0];
        console.log(this.Curso);
        if (SharedFunctions.getRole() == 4) {
          this.currentPerson = SharedFunctions.getId();
          this.readonly = true;
        }
        this.SpinnerService.hide();
      });



  }

  showModalStudentGrades(datos: any) {
    const dialogRef = this.dialogoRef.open(StudentsGradesComponent, {
      data: {
        datos: datos.grades,
        curso: this.courseId,
        estudiante: datos.person.lastName + ", " + datos.person.name,
        estudianteId: datos.id,
        nombreCurso: this.Curso.name,
        readonly: this.readonly
      }
    });
  }

  ngOnDestroy() {
    this.routeSubcription.unsubscribe();
    this.CursoSuscripcion.unsubscribe();
  }
}
