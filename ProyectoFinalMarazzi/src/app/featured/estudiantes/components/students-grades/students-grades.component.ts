import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Grades } from 'src/app/classes/grades';
import { GradesService } from 'src/app/featured/services/grades.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-students-grades',
  templateUrl: './students-grades.component.html',
  styleUrls: ['./students-grades.component.css']
})
export class StudentsGradesComponent implements OnInit {
  datosNotas!: any;
  grade: Grades = new Grades(0, 0, 0, new Date(), "");
  formularioGrades: FormGroup = new FormGroup({
    nota: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(3)]),
    fecha: new FormControl(new Date(), Validators.required),
  })
  constructor(
    public dialogRef: MatDialogRef<StudentsGradesComponent>,
    private gradeService: GradesService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notificationService: NotificationService
  ) {
    this.datosNotas = data;

  }

  ngOnInit(): void {
  }
  deleteGrade(idNota: string) {
    let dataGrade = {
      id: idNota,
      idCourse: "",
      grade: "",
      description: "",
      date: "",
      idStudent: this.datosNotas.estudianteId
    }
    this.gradeService.ABMGrades(dataGrade, "B").toPromise().then(
      (data: any) => {
        this.datosNotas.datos.splice(this.datosNotas.datos.findIndex((x: { id: string; }) => x.id == idNota), 1);
        this.notificationService.openSnackBar("Nota eliminada", "Cerrar");
      });


  }
  addGrade() {
    let fecha = new Date(this.formularioGrades.value.fecha);
    let nuevaFecha = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
    let dataGrade = {
      id: 0,
      idCourse: this.datosNotas.curso,
      grade: this.formularioGrades.value.nota,
      description: this.formularioGrades.value.descripcion,
      date: nuevaFecha,
      idStudent: this.datosNotas.estudianteId
    }
    this.gradeService.ABMGrades(dataGrade, "A").toPromise().then(
      (data: any) => {
        // console.log(data)
        let NewGrade = {
          course: this.datosNotas.curso,
          id: parseInt(data.id),
          grade: parseInt(dataGrade.grade),
          descripcion: dataGrade.description,
          date: this.formularioGrades.value.fecha,
        };

        /*
        let NewGrade = {
          course: 50,
          date: "2022-04-18T00:00:00",
          descripcion: "Gabriel",
          grade: 2,
          id: 4,
        };
        */
        this.datosNotas.datos.push(NewGrade);
        // console.log(this.datosNotas.datos);
        this.notificationService.openSnackBar("Nota creada!", "Cerrar");
      });


  }


  closeModal() {
    this.dialogRef.close();
  }

}
