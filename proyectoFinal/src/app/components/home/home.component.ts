import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/classes/courses';
import { FakeData } from 'src/app/classes/fake-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  Cursos: Courses[] = new FakeData().initializeFakeCoursesData();


  constructor() { }

  ngOnInit(): void {
  }

}
