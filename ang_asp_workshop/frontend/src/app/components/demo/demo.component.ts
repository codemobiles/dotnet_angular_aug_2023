import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  @Input() header: string = '';
  @Output() onAdd = new EventEmitter();

  add() {
    this.onAdd.emit();
  }
}
