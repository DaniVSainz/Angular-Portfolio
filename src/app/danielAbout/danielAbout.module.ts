import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DanielAboutComponent } from './danielAbout.component';
import { routing } from './danielAbout.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    DanielAboutComponent
  ]
})
export class NewModule {}
