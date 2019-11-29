import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LayoutGuard } from '../layout/layout.guard';
import { AuthComponent } from './auth/auth.component';
import { from } from 'rxjs';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'auth',
    canActivate: [LayoutGuard],
    component: AuthComponent
  },
  {
    path: 'auth/:name&:password',
    canActivate: [LayoutGuard],
    component: AuthComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
