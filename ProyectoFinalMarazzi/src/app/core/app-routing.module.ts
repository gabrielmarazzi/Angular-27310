import { LoginComponent } from './components/login/login.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CoursesComponent } from '../featured/cursos/components/courses/courses.component';
import { CoursesDetailComponent } from '../featured/cursos/components/courses-detail/courses-detail.component';

import { LogoffComponent } from './components/logoff/logoff.component';
import { AuthCheckGuard } from './guards/auth-check.guard';



const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: MenuLateralComponent,
        children: [
            {
                path: '', component: HomeComponent,
                canActivate: [AuthCheckGuard]
            },
            {
                path: 'courses',
                //component: CoursesComponent
                loadChildren: () => import('../featured/cursos/cursos.module').then(m => m.CursosModule),
                canActivate: [AuthCheckGuard]

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