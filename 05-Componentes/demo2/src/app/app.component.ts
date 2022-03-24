
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ComponenteHijoComponent } from './components/componente-hijo/componente-hijo.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'demo2';
  @ViewChild(ComponenteHijoComponent) componenteHijo!: ComponenteHijoComponent;
  profesores: any[] = [
    { nombre: 'Juan', rol: "Profesor" },
    { nombre: 'Pedro', rol: "Profesor" },
    { nombre: 'Ana', rol: "Tutorr" }
  ];
  constructor() {
    console.log("Constructor: ", this.componenteHijo);
  }

  ngOnInit(): void {
    console.log("ngInit: ", this.componenteHijo);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit: ", this.componenteHijo);

  }

  cambiarComponenteHijo() {
    this.componenteHijo.mensaje = "Hola desde el padre";
    this.componenteHijo.listaProfesores = this.profesores;
  }
}
