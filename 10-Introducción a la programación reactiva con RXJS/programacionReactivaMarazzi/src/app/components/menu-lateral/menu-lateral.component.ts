import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { MenuItems } from 'src/app/classes/menu-items';

import { PersonsService } from 'src/app/services/persons.service';


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
    private studentService: PersonsService,
    private SpinnerService: NgxSpinnerService
  ) {

  }


  ngOnInit(): void {
    //this.menuItems = MenuItems.getMenuByRole(this.student.person.role.id);
    this.SpinnerService.show();

    this.students$ = this.studentService.obtenerDatosEstudiantesObservableById(5)

    this.studentsSuscripcion = this.students$
      .subscribe((datos) => {
        this.student = datos[0];


        this.person = this.student.person;
        let roleId: number = this.student.person.role;

        this.menuItems = MenuItems.getMenuByRole(roleId);
        if (this.student != null) {
          this.SpinnerService.hide();
        }
      });
  }

  ngOnDestroy(): void {
    this.studentsSuscripcion.unsubscribe();
  }




}

