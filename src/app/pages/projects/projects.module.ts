import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { ProjectsComponent } from './projects.component';
import { routing } from './projects.routing';
import { CurrentProjectComponent } from './current-project/current-project.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,
  ],
  declarations: [
    ProjectsComponent,
    CurrentProjectComponent
  ]
})
export class ProjectsModule {

}
