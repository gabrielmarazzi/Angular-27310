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
import { AppCoreRoutingModule } from './app-routing.module';
import { LogoffComponent } from './components/logoff/logoff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarraCargaComponent } from './components/barra-carga/barra-carga.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuLateralComponent,
    MenuSuperiorComponent,
    LoginComponent,
    LogoffComponent,
    BarraCargaComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule,
    NgxSpinnerModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    AppMaterialModule,
    AppCoreRoutingModule,
    MenuLateralComponent,
    MenuSuperiorComponent,
    LoginComponent,
    LogoffComponent
  ]

})
export class CoreModule { }
