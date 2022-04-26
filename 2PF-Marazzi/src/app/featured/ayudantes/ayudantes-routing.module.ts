import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuLateralComponent } from 'src/app/core/components/menu-lateral/menu-lateral.component';
import { AuthCheckGuard } from 'src/app/core/guards/auth-check.guard';
import { AssistantsDetailComponent } from './assistants-detail/assistants-detail.component';
import { AssistantsComponent } from './assistants/assistants.component';

const routes: Routes = [
  {
    path: '',
    component: MenuLateralComponent,
    canActivate: [AuthCheckGuard],
    children: [

      {
        path: 'assistants', component: AssistantsComponent
      },
      {
        path: 'assistants/:id', component: AssistantsDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AyudantesRoutingModule { }
