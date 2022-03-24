import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {
  @Input() mensaje: string = "";
  @Input() listaProfesores: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  //Ciclo de vida de un componente
  /*
    contructor
    ngOnChages
    ngOnInit
    ngDoCheck
      ngAgfetContentInit <= @ViewChild
      ngAfterContentChecked
      ngAfterViewInit
      ngAfterViewChecked
    ngOnDestroy
  
  */


}
