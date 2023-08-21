import { Component } from '@angular/core';

// index.html -> app.module.ts -> app.component.ts (html and scss)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';

  // implicit delcaration
  tmp1 = 10;
  tmp2 = false;
  tmp3 = true;
  tmp4 = 'yes';

  // explicit delcaration
  tmp5: number = 10;
  tmp6: boolean = true;
  tmp7: string = 'yes';

  // methods
  method1() {
    alert('Hey1');
  }

  handleAdd() {
    alert('Called from Demo');
  }
}
