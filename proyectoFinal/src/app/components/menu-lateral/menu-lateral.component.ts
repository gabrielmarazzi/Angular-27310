import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FakeData } from 'src/app/classes/fake-data';
import { MenuItems } from 'src/app/classes/menu-items';

import { Students } from 'src/app/classes/students';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {


  menuItems: MenuItems[] = [];

  student: Students = new FakeData().initializeFakeStudentData();


  constructor() { }

  ngOnInit(): void {
    this.menuItems = MenuItems.getMenuByRole(this.student.person.role.id);



  }





}
