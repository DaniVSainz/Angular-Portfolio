import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LandingComponent } from './landing.component';
import { routing } from './landing.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    LandingComponent
  ]
})
export class LandingModule {

}
