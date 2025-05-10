import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { StateManagementComponent } from './component/state-management/state-management.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'user-form',
    loadComponent: () =>
      import('../app/component/user-form/user-form.component').then(
        (comp) => comp.UserFormComponent
      ),
  },
  { path: 'state', component: StateManagementComponent },
];
