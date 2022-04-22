import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AppMaterialModule } from './app.material.module';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuLateralComponent,
    MenuSuperiorComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule,
    NgxSpinnerModule,
    SharedModule

  ],
  exports: [
    AppMaterialModule,
    AppRoutingModule,
    MenuLateralComponent,
    MenuSuperiorComponent,
    LoginComponent
  ]

})
export class CoreModule { }
