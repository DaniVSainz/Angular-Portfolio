import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { CurrentProjectComponent } from './current-project/current-project.component';
import { Routes, RouterModule }  from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ModuleWithProviders } from '@angular/core';
import { VueComponent } from './vue/vue.component';


// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
      { path: '', redirectTo: 'projectspage', pathMatch: 'full' },
      { path: 'ruby', loadChildren: './ruby/ruby.module#RubyModule'},
      { path: 'currentproject', component:CurrentProjectComponent},
      { path: 'javascript', component:JavascriptComponent},
      { path: 'angular', component:AngularComponent},
      { path: 'vue', component:VueComponent},
      { path: 'projectspage', loadChildren: './projectsPage/projects-page.module#ProjectsPageModule'}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
