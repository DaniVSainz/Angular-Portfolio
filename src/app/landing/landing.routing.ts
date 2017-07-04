import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    loadChildren: 'app/landing/landing.module#LandingModule'
  }
];

export const routing = RouterModule.forChild(routes);
