import { Component, OnInit } from '@angular/core';
import { MenuItems } from 'src/app/classes/menu-items';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {


  menuItems: MenuItems[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = MenuItems.getMenuByRole(1);
  }





}
