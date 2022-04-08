import { Component, OnInit } from '@angular/core';
import { menuList } from './listadoMenu';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  sideMenu = menuList;
  collapse = false;

  constructor() { }

  ngOnInit(): void {
    this.collapse = true;
  }

  toggleSidebar() {
    this.collapse = !this.collapse;
  }



}
