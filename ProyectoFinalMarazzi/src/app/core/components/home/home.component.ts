import { selectorCourses } from './../../../state/selectors/course.selector';
import { LoadCourses, LoadCoursesSuccess } from './../../../state/actions/course.action';
import { CourseService } from 'src/app/services/course.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, map } from 'rxjs';

import { Courses } from 'src/app/classes/courses';
import { SharedFunctions } from 'src/app/classes/sharedFunctions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  inscripto: boolean = false;
  // Cursos: any[] = [];
  Cursos$!: Observable<any>
  CursosSuscripcion!: any;
  serviceURL = "https://perfildigital.adea.com.ar/service/test/service.ashx";
  CourseFiltered: boolean = false;
  textoCarga: string = "Cargando información...";
  cargando: boolean = false;
  constructor(
    private cursoService: CourseService,
    private store: Store<AppState>,

  ) {

  }

  ngOnInit(): void {
    this.cargando = true;
    // this.store.dispatch(LoadCourses());
    // // this.Cursos$ = this.cursoService.obtenerDatosCursosObservable()
    // this.CursosSuscripcion = this.cursoService.obtenerDatosCursosObservable()
    //   .subscribe((datos) => {
    //     // console.log(datos)


    //     this.store.dispatch(LoadCoursesSuccess({ courses: datos }));
    //     // if (SharedFunctions.getRole() == 4) {
    //     //   let cursosFiltrados = datos.filter((x: { students: any[]; }) => x.students.find((y: { id: any; }) => y.id == SharedFunctions.getId()));
    //     //   // this.Cursos = xx;
    //     //   // if (this.Cursos.length > 0) {
    //     //   //   this.inscripto = true;
    //     //   // } else {
    //     //   //   this.inscripto = false;
    //     //   // }
    //     //   this.store.dispatch(LoadCoursesSuccess({ courses: cursosFiltrados }));

    //     // } else {
    //     //   // this.Cursos = datos;
    //     //   this.store.dispatch(LoadCoursesSuccess(datos));
    //     // }
    //   });
    this.Cursos$ = this.store.select(selectorCourses);
    this.cargando = true;
  }




  ngOnDestroy(): void {
    // this.CursosSuscripcion.unsubscribe();
  }

}
