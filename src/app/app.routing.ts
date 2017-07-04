import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import {LandingComponent} from './landing/landing.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'pages', loadChildren: 'pages/pages.module#PagesModule' }
  // { path: '**', redirectTo: 'pages/dashboard' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
