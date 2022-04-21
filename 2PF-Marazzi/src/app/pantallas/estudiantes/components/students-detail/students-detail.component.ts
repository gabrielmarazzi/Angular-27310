import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FakeData } from 'src/app/classes/fake-data';
import { Students } from 'src/app/classes/students';
import { PersonsService } from 'src/app/services/persons.service';

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routeSubcription = this.activatedRoute.params.subscribe(
      (params) => {
        this.legajo = params['id'];

        this.student$ = this.PersonsService.obtenerDatosEstudiantesObservableById(this.legajo);
        this.studentSuscripcion = this.student$
          .subscribe((datos) => {
            this.student = datos[0];
          });



      });



  }

  goBack() {
    this.router.navigate(['students']);
  }
}
