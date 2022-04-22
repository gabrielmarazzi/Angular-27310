import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CoursesComponent } from '../featured/cursos/components/courses/courses.component';
import { CoursesDetailComponent } from '../featured/cursos/components/courses-detail/courses-detail.component';

import { LogoffComponent } from './components/logoff/logoff.component';



const routes: Routes = [
    {
        path: 'home',
        component: MenuLateralComponent,
        children: [
            {
                path: '', component: HomeComponent
            },
            {
                path: 'courses',
                component: CoursesComponent
            },
            {
                path: 'inscriptions/courses',
                component: CoursesComponent
            },
            {
                path: 'courses/:id',
                component: CoursesDetailComponent
            },
            {
                path: 'logoff',
                component: LogoffComponent,

            }
        ]

    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppCoreRoutingModule { }