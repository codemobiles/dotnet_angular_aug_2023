import { Component } from '@angular/core';

// index.html -> app.module.ts -> app.component.ts (html and scss)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
}
