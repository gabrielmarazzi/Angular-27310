import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {

  @Input()
  listaEstudiantesHijo: string[] = [];

  @Output() eventoSalida: EventEmitter<string> = new EventEmitter<string>();
  mensajeSalida: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  enviarDatos() {
    this.mensajeSalida = "Estoy enviando este mensaje desde el component hijo"
    this.eventoSalida.emit(this.mensajeSalida);
  }

}
