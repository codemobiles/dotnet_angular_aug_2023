import { Component } from '@angular/core';

// index.html -> app.module.ts -> app.component.ts (html and scss)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count = 0;

  // methods
  method1() {
    alert('Hey1');
  }

  handleAdd() {
    this.count++;
  }
}
