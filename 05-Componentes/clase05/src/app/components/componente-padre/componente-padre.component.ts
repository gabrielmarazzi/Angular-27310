import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent implements OnInit {

  listaEstudiantesPadre: string[] = ['Juan', 'Pedro', 'Maria', 'Ana', 'José'];
  textoRecibido: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  obtenerTextoSalida(texto: string) {
    this.textoRecibido = texto;

  }
}
