import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  @Output() onCompleted = new EventEmitter<string>();
  @Input() productOrder: string = '[]';
  @Input() totalNumber: number = 0;

  handlePayment() {
    // send payment request to server

    this.onCompleted.emit('Payment successfully');
  }

  public get products(): Product[] {
    return JSON.parse(this.productOrder);
  }
}
