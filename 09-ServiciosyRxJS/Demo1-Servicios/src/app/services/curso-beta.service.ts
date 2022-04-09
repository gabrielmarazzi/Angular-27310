import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoBetaService {

  cursos: Curso[] = [
    { id: 1, nombre: '[Beta] Angular', descripcion: 'Curso de Angular' },
    { id: 2, nombre: '[beta] React', descripcion: 'Curso de React' },
    { id: 3, nombre: '[beta] Vue', descripcion: 'Curso de Vue' }
  ];
  constructor() { }

  obtenerCursos() {
    return this.cursos;
  }

  agregarCurso(curso: Curso) {
    this.cursos.push(curso);
    return this.cursos;

  }

  eliminarCurso(id: number) {
    for (let i = 0; i < this.cursos.length; i++) {
      if (this.cursos[i].id === id) {
        this.cursos.splice(i, 1);
      }
    }
    return this.cursos;
  }
}
