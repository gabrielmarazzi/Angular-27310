import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FakeData } from 'src/app/classes/fake-data';
import { MenuItems } from 'src/app/classes/menu-items';
import { Roles } from 'src/app/classes/roles';

import { Students } from 'src/app/classes/students';
import { StudentsService } from 'src/app/services/students.service';


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
  serviceURL = "https://perfildigital.adea.com.ar/service/test/service.ashx";


  constructor(
    private studentService: StudentsService
  ) {

  }


  ngOnInit(): void {
    //this.menuItems = MenuItems.getMenuByRole(this.student.person.role.id);

    this.students$ = this.studentService.obtenerDatosEstudiantesObservableById(5)

    this.studentsSuscripcion = this.students$
      .subscribe((datos) => {
        this.student = datos[0];


        this.person = this.student.person;
        let roleId: number = this.student.person.role;

        this.menuItems = MenuItems.getMenuByRole(roleId);
      });
  }

  ngOnDestroy(): void {
    this.studentsSuscripcion.unsubscribe();
  }




}

