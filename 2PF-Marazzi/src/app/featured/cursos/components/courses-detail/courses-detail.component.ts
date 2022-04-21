
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentsGradesComponent } from 'src/app/featured/estudiantes/components/students-grades/students-grades.component';

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

  }

  obtenerCurso(id: number) {
    this.SpinnerService.show();
    this.Curso$ = this.cursoService.obtenerDatosCursoObservableById(id);
    // this.filterCourses()
    this.CursoSuscripcion = this.Curso$

      .subscribe((datos) => {
        this.Curso = datos[0];

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
        nombreCurso: this.Curso.name
      }
    });
  }

  ngOnDestroy() {
    this.routeSubcription.unsubscribe();
    this.CursoSuscripcion.unsubscribe();
  }
}
