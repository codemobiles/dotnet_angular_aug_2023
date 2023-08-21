import { Component, ViewChild } from '@angular/core';
import { RestService } from './services/rest.service';

// index.html -> app.module.ts -> app.component.ts (html and scss)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isExpanded = true;
  @ViewChild('sidenav', { static: false }) sidenav: any;
  constructor(public rest: RestService) {}

  toggleSideBar() {
    this.sidenav.toggle();
  }
}
