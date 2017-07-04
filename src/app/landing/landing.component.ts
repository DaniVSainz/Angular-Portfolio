import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() {
    // $('ba-sidebar').css({'display':'none'});
    // $('ba-page-top').css({'display':'none'});
   }

  ngOnInit() {

  }


}
