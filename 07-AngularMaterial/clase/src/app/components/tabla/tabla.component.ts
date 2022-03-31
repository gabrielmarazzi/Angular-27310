import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  columnas: string[] = ["indice", "nombre"];

  datos: any[] = [
    {
      indice: 1,
      nombre: 'Juan'
    },
    {
      indice: 2,
      nombre: 'Pedro'
    },
    {
      indice: 3,
      nombre: 'Maria'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
