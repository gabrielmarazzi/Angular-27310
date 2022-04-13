import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FakeData } from 'src/app/classes/fake-data';
import { Students } from 'src/app/classes/students';

@Component({
  selector: 'app-students-detail',
  templateUrl: './students-detail.component.html',
  styleUrls: ['./students-detail.component.css']
})
export class StudentsDetailComponent implements OnInit {
  legajo: number = 0;
  routeSubcription!: Subscription;

  students: Students[] = new FakeData().initializeFakeStudentsWithCoursesAndGradesData();
  student!: Students;
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.routeSubcription = this.activatedRoute.params.subscribe(
      (params) => {
        this.legajo = params['id'];
        let student = this.students.find((estudiante) => estudiante.id == this.legajo);
        if (student != undefined) {
          this.student = student;
        }

      });


  }

}
