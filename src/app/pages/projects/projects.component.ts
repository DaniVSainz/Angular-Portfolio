import { PAGES_MENU } from './../pages.menu';
import { Routes } from '@angular/router';
import { BaMenuService } from './../../theme/services/baMenu/baMenu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private _menuService: BaMenuService) { }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }

}
