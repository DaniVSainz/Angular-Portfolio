import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { DanielAboutComponent } from './danielAbout.component';
import { routing } from './danielAbout.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule
  ],
  declarations: [
    DanielAboutComponent
  ]
})
export class DanielAboutModule {}
