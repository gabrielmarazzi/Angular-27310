import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Courses } from '../classes/courses';
import { FakeData } from '../classes/fake-data';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private cursoObservable: Observable<any>;
  private cursoSubject = new Subject<any>();

  Cursos: Courses[] = new FakeData().initializeFakeCoursesData();

  constructor() {
    this.cursoObservable = new Observable((suscripcion) => {
      suscripcion.next(this.Cursos);
    });
    this.cursoSubject = new Subject();
  }

  obtenerObservableCurso() {
    return this.cursoObservable
  }

  actualizarObservableCurso(course: Courses) {
    this.cursoSubject.next(course);
  }



}
