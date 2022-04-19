import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Courses } from 'src/app/classes/courses';
import { FakeData } from 'src/app/classes/fake-data';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {

  courseId: number = 0;
  routeSubcription!: Subscription;
  Curso!: Courses;
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.routeSubcription = this.activatedRoute.params.subscribe(
      (params) => {
        this.courseId = params['id'];
      });


  }

}
