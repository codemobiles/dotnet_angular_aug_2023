import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
handlePayment() {
throw new Error('Method not implemented.');
}
  @Output() onCompleted = new EventEmitter();
  @Input() productOrder: string = '[]';
  @Input() totalNumber: number = 0;

  public get products(): Product[] {
    return JSON.parse(this.productOrder);
  }
}
