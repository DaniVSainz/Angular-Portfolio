import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectsComponent } from './projects.component';
import { routing } from './projects.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    ProjectsComponent
  ]
})
export class ProjectsModule {

}
