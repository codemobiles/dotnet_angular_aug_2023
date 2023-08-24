import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  @Output() onCompleted = new EventEmitter();
  @Input() productOrder: string = '{}';
  @Input() totalNumber: number = 0;
}
