import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Curso } from './models/curso';
import { CursoService } from './services/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cursos: any;
  formulario: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required])
  });

  constructor(private cursoService: CursoService) {

  }
  ngOnInit() {
    this.cursoService.obtenerCursosPromises()
      .then((cursos) => {
        console.log(cursos);
        this.cursos = cursos;
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally");
      });
    console.log("Fuera de la promise", this.cursos)
  }

  eliminarCurso(id: number) {

  }

  agregarCurso() {

  }
}
