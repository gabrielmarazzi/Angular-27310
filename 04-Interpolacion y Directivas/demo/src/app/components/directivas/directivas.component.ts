import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  valor: number = 5;
  booleano: boolean = this.valor <= 5;
  docentes: string[] = ['Juan', 'Pedro', 'Ana', 'Maria', 'Juana'];
  json: any[] = [{
    nombre: 'Juan',
    edad: 30
  },
  {
    nombre: 'Pedro',
    edad: 25
  }
  ]
  urlImagen: string = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  constructor() { }

  ngOnInit(): void {
  }

  restar() {
    this.valor--;
    this.booleano = this.valor <= 5;
  }

  sumar() {
    this.valor++;
    this.booleano = this.valor <= 5;
  }

  mouseEnter() {
    this.valor = Math.random() * 10;
    this.booleano = this.valor <= 5;
  }
}
