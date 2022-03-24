
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {

  @Input() mensaje: string = "";
  @Output() evento = new EventEmitter();
  mensajeSalida = "Te envio un mensaje desde el jhijo"
  constructor() { }

  ngOnInit(): void {
  }

  enviarMensaje() {
    this.evento.emit(this.mensajeSalida);
  }

}
