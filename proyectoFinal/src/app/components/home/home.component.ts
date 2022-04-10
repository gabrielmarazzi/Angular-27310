import { CourseService } from 'src/app/services/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Cursos: any[] = [];


  constructor(private cursoService: CourseService) { }

  ngOnInit(): void {
    this.cursoService.obtenerObservableCurso().subscribe((suscripcion) => {
      this.Cursos = suscripcion;
    });
  }

}
