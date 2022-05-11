import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PersonsService } from 'src/app/services/persons.service';
import { LoadTeacherIdSuccess, LoadTeachers } from 'src/app/state/actions/teacher.action';
import { AppState } from 'src/app/state/app.state';
import { selectTeacherId } from 'src/app/state/selectors/teacher.selector';

@Component({
  selector: 'app-teachers-detail',
  templateUrl: './teachers-detail.component.html',
  styleUrls: ['./teachers-detail.component.css']
})
export class TeachersDetailComponent implements OnInit {
  legajo: number = 0;
  routeSubcription!: Subscription;

  teacher: any;
  teacher$!: Observable<any>
  teacherSuscripcion!: any;
  serviceURL = "https://perfildigital.adea.com.ar/service/test/service.ashx";

  constructor(
    private activatedRoute: ActivatedRoute,
    private PersonsService: PersonsService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.routeSubcription = this.activatedRoute.params.subscribe(
      (params) => {
        this.legajo = params['id'];
        this.cargarTeacher()


      });



  }

  cargarTeacher() {
    this.store.dispatch(LoadTeachers());
    this.PersonsService.obtenerDatosPersonasObservableId(this.legajo, 2)
      .subscribe((datos) => {
        this.teacher = datos[0];
        this.store.dispatch(LoadTeacherIdSuccess({ teachers: datos }));

      });
    this.teacher = this.store.select(selectTeacherId)
  }


  goBack() {
    this.router.navigate(['teachers']);
  }
}
