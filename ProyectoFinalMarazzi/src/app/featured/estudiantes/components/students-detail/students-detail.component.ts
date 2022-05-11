import { selectStudentId } from './../../../../state/selectors/student.selector';
import { LoadStudentIdSuccess } from './../../../../state/actions/student.action';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PersonsService } from 'src/app/services/persons.service';
import { LoadStudents, LoadStudentsSuccess } from 'src/app/state/actions/student.action';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-students-detail',
  templateUrl: './students-detail.component.html',
  styleUrls: ['./students-detail.component.css']
})
export class StudentsDetailComponent implements OnInit {
  legajo: number = 0;
  routeSubcription!: Subscription;

  student: any;
  student$!: Observable<any>
  studentSuscripcion!: any;
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

        this.cargarEstudiante();



      });



  }

  cargarEstudiante() {
    this.store.dispatch(LoadStudents());
    this.PersonsService.obtenerDatosPersonasObservableId(this.legajo, 4)
      .subscribe((datos) => {
        this.student = datos[0];
        this.store.dispatch(LoadStudentIdSuccess({ students: datos }));

      });
    this.student = this.store.select(selectStudentId)
  }

  goBack() {
    this.router.navigate(['students']);
  }
}
function selectStudents(selectStudents: any): any {
  throw new Error('Function not implemented.');
}

