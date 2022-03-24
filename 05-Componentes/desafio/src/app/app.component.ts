import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio';
  mensaje = "Hola, te envio este dato desde el componente padre";
  mensajeRecibido: string = "";
  recibirDatos(datos: string) {
    this.mensajeRecibido = datos;

  }
}
