import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-assistants-detail',
  templateUrl: './assistants-detail.component.html',
  styleUrls: ['./assistants-detail.component.css']
})
export class AssistantsDetailComponent implements OnInit {
  legajo: number = 0;
  routeSubcription!: Subscription;

  assistant: any;
  assistant$!: Observable<any>
  assistantSuscripcion!: any;
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
        if (this.legajo != null) {
          this.assistant$ = this.PersonsService.obtenerDatosPersonasObservableId(this.legajo, 3);
          this.assistantSuscripcion = this.assistant$
            .subscribe((datos) => {
              this.assistant = datos[0];
              //console.log(this.assistant);
            });
        } else {
          this.router.navigate(['assistants']);
        }



      });



  }

  goBack() {
    this.router.navigate(['assistants']);
  }

  ngOnDestroy() {
    if (this.assistantSuscripcion != null) {
      this.assistantSuscripcion.unsubscribe();
    }
  }
}
