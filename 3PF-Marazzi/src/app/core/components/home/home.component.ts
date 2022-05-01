import { CourseService } from 'src/app/services/course.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, map } from 'rxjs';

import { Courses } from 'src/app/classes/courses';
import { SharedFunctions } from 'src/app/classes/sharedFunctions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  inscripto: boolean = false;
  Cursos: any[] = [];
  Cursos$!: Observable<any>
  CursosSuscripcion!: any;
  serviceURL = "https://perfildigital.adea.com.ar/service/test/service.ashx";
  CourseFiltered: boolean = false;
  textoBoton: string = "Mostrar todos los cursos";

  constructor(
    private cursoService: CourseService

  ) {

  }

  ngOnInit(): void {
    this.Cursos$ = this.cursoService.obtenerDatosCursosObservable()



    // this.filterCourses()
    this.CursosSuscripcion = this.Cursos$

      .subscribe((datos) => {



        if (SharedFunctions.getRole() == 4) {
          //this.inscripto = true;
          //muestro solo los cursos que esta inscripto

          let xx = datos.filter((x: { students: any[]; }) => x.students.find((y: { id: any; }) => y.id == SharedFunctions.getId()));
          this.Cursos = xx;
          if (this.Cursos.length > 0) {
            this.inscripto = true;
          } else {
            this.inscripto = false;
          }

        } else {
          this.Cursos = datos;
        }
        // this.filterCourses()
      });

  }

  filterCourses(filtrado?: boolean): void {
    //cambio el nombre al boton
    if (filtrado != null) {
      this.CourseFiltered = filtrado;
    } else {
      this.CourseFiltered = !this.CourseFiltered;
    }

    if (this.CourseFiltered) {
      this.textoBoton = "Mostrar todos los cursos"
      this.Cursos$ = this.cursoService.filterActiveInactiveCourses(true);

    } else {
      this.textoBoton = "Mostrar solo los cursos activos"
      this.Cursos$ = this.cursoService.filterActiveInactiveCourses(false);
    }
    this.CursosSuscripcion = this.Cursos$

      .subscribe((datos) => {
        this.Cursos = datos;

      });
  }

  actualizarCursoTest(curso: Courses) {
    //random entre 1 y 8
    let random = Math.floor(Math.random() * 8) + 1;
    let data = {
      id: curso.id,
      name: curso.name,
      camada: curso.camada,
      description: curso.description,
      difficulty: curso.difficulty,
      startDate: curso.startDate,
      endDate: curso.endDate,
      image: "./assets/img/avatars/" + random + ".jpg",
      active: curso.active
    }
    //hago esto para que refresque la pagina
    this.cursoService.actualizarDatosCursosObservable(data).toPromise().then(
      (datos) => {
        this.Cursos$ = this.cursoService.obtenerDatosCursosObservable();
      });

    this.CursosSuscripcion = this.Cursos$

      .subscribe((datos) => {
        this.Cursos = datos;
      });
  }


  ngOnDestroy(): void {
    this.CursosSuscripcion.unsubscribe();
  }

}
