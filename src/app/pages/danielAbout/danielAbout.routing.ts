import { Routes, RouterModule } from '@angular/router';

import { DanielAboutComponent } from './danielAbout.component';

const routes: Routes = [
  {
    path: '',
    component: DanielAboutComponent
  }
];

export const routing = RouterModule.forChild(routes);
