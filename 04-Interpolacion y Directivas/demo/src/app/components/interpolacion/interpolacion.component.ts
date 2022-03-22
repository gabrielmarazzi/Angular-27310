import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {
  nombre: string = 'Juan';
  edad: number = 20;
  object: any = {
    fecha: Date.now(),
    arreglo: [1, 2, 3, 4, 5],
  }

  fecha: Date = new Date(2022, 0, 1);
  constructor() { }

  ngOnInit(): void {
  }

}
