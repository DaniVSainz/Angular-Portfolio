import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { ResumeComponent } from './resume/resume.component';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },
      { path: 'about', loadChildren: './danielAbout/danielAbout.module#DanielAboutModule' }
      // { path: 'ruby', loadChildren: '.ruby/ruby.module#RubyModule'}


    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
