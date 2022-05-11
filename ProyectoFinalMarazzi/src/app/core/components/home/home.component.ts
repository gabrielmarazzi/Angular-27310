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

  textoCarga: string = "Cargando información...";
  cargando: boolean = false;
  constructor(
    private store: Store<AppState>,

  ) {

  }

  ngOnInit(): void {
    this.cargando = true;
    this.Cursos$ = this.store.select(selectorCourses);
    this.cargando = true;
  }




  ngOnDestroy(): void {

  }

}
