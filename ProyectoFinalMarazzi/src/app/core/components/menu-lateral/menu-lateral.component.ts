import { CourseService } from 'src/app/services/course.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { MenuItems } from 'src/app/classes/menu-items';

import { PersonsService } from 'src/app/services/persons.service';
import { Store } from '@ngrx/store';
import { LoadCourses, LoadCoursesSuccess } from 'src/app/state/actions/course.action';
import { AppState } from 'src/app/state/app.state';
import { selectorCourses } from 'src/app/state/selectors/course.selector';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {


  menuItems: MenuItems[] = [];

  student!: any;
  person: any;
  students$!: Observable<any>
  studentsSuscripcion!: any;
  CursosSuscripcion!: any;


  constructor(
    private studentService: PersonsService,
    private SpinnerService: NgxSpinnerService,
    private route: Router,
    private store: Store<AppState>,
    private cursoService: CourseService
  ) {

  }


  ngOnInit(): void {
    //this.menuItems = MenuItems.getMenuByRole(this.student.person.role.id);
    this.SpinnerService.show();

    this.cargarCursos();
    let id = parseInt(sessionStorage.getItem("id")!);
    let roleId: number = parseInt(sessionStorage.getItem("role")!)
    this.students$ = this.studentService.obtenerDatosPersonasObservableId(id, roleId)
    // console.log(id);
    this.studentsSuscripcion = this.students$
      .subscribe((datos) => {
        //console.log(datos);
        if (datos.length > 0) {
          this.student = datos[0];

          this.person = this.student.person;
          let roleId: number = parseInt(sessionStorage.getItem("role")!)

          this.menuItems = MenuItems.getMenuByRole(roleId);
          if (this.student != null) {
            this.SpinnerService.hide();
          }
        } else {

          this.route.navigate(["/login"]);

          this.SpinnerService.hide();
        }
      });
  }

  ngOnDestroy(): void {
    // this.studentsSuscripcion.unsubscribe();
  }


  cargarCursos() {
    this.store.dispatch(LoadCourses());
    this.CursosSuscripcion = this.cursoService.obtenerDatosCursosObservable()
      .subscribe((datos) => {
        // console.log(datos)
        this.store.dispatch(LoadCoursesSuccess({ courses: datos }));
      });
    //this.store.select(selectorCourses)
  }

}

