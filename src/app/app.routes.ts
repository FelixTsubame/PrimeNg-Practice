import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home',
        loadComponent: () => import('src/app/home-page/home-page.component').then(m => m.HomePageComponent),
        loadChildren: () => import('src/app/home-page/home.routes').then(r => r.HomeRoutes)}
];
