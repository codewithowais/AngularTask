import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FamilyComponent } from './Components/family/family.component';
import { RCAComponent } from './Components/rca/rca.component';
import { AuthGuardService } from './Services/Auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuardService],
        component: DashboardComponent
      },
      {
        path: 'family',
        canActivate: [AuthGuardService],
        component: FamilyComponent
      },
      {
        path: 'rca',
        canActivate: [AuthGuardService],
        component: RCAComponent
      },
      {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
