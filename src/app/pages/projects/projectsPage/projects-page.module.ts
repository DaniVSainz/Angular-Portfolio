import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

import { ProjectsPageComponent } from './projects-page.component';
import { routing } from './projects-page.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,
  ],
  declarations: [
    ProjectsPageComponent
  ]
})
export class ProjectsPageModule {

}
