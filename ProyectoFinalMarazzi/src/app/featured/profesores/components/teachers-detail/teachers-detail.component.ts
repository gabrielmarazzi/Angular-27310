import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PersonsService } from 'src/app/services/persons.service';

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routeSubcription = this.activatedRoute.params.subscribe(
      (params) => {
        this.legajo = params['id'];

        this.teacher$ = this.PersonsService.obtenerDatosPersonasObservableId(this.legajo, 2);
        this.teacherSuscripcion = this.teacher$
          .subscribe((datos) => {
            this.teacher = datos[0];
          });



      });



  }

  goBack() {
    this.router.navigate(['teachers']);
  }
}
