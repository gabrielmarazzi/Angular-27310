import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Courses } from 'src/app/classes/courses';

@Component({
  selector: 'app-courses-modal',
  templateUrl: './courses-modal.component.html',
  styleUrls: ['./courses-modal.component.css']
})
export class CoursesModalComponent implements OnInit {

  course: Courses = new Courses(0, "", "", "", "", new Date(), new Date(), "", true);
  title: string = "Nuevo Curso";

  formularioCurso: FormGroup = new FormGroup({
    camada: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(3)]),
    fechaInicio: new FormControl(new Date(), Validators.required),
    fechaFin: new FormControl(new Date(), Validators.required),
    dificultad: new FormControl('', [Validators.required, Validators.minLength(3)]),

  });
  action: any;
  local_data: any;
  edit: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CoursesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.opcion == 'editar') {
      console.log(data)
      this.local_data = data;
      this.title = "Editar Curso " + data.name;
      this.course = data.course;
      this.edit = true;
    }


  }




  ngOnInit(): void {
  }

  cerrarModal() {
    this.dialogRef.close();
  }

  guardarCambios() {
    if (this.edit == true) {
      this.action = "edit";
      this.editarCourse();
    } else {
      this.action = "add";
      this.agregarCourse();
    }
  }

  editarCourse() {

    let newCourse = new Courses(
      this.course.id,
      this.formularioCurso.value.camada,
      this.formularioCurso.value.nombre,
      this.formularioCurso.value.descripcion,
      this.formularioCurso.value.dificultad,
      this.formularioCurso.value.fechaInicio,
      this.formularioCurso.value.fechaFin,
      this.course.image,
      this.course.active);
    //debugger;
    this.dialogRef.close({ event: this.action, data: [this.local_data.index, this.course] });
  }

  agregarCourse() {
    let newCourse = new Courses(0,
      this.formularioCurso.value.camada,
      this.formularioCurso.value.nombre,
      this.formularioCurso.value.descripcion,
      this.formularioCurso.value.dificultad,
      this.formularioCurso.value.fechaInicio,
      this.formularioCurso.value.fechaFin,
      "./assets/img/avatars/1.jpg",
      true);
    this.dialogRef.close({ event: this.action, data: [null, newCourse] });

  }



}
