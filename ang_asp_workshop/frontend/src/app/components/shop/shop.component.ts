import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  mOrderArray = new Array<any>();
  mProductArray = new Array<any>();
  mIsPaymentShown = false;
  mTotalPrice: number = 0;
  mTaxAmt: number = 0;
  node_static_url = environment.node_static_url;
  baseUrl = environment.baseUrl;

  constructor(public rest: RestService) {}

  async ngOnInit() {
    this.rest.getProducts().subscribe((result) => {
      this.mProductArray = result;
    });
  }

  isSelectedItem(item: any) {
    return this.mOrderArray.indexOf(item) != -1;
  }

  pushNewOrder(item: any) {
    let foundIndex = this.mOrderArray.indexOf(item);

    if (foundIndex == -1) {
      item.qty = 1;
      this.mOrderArray.unshift(item);
    } else {
      item.qty++;
    }
    this.countSumPrice();
  }

  countSumPrice() {
    this.mTotalPrice = 0;
    for (let item of this.mOrderArray) {
      this.mTotalPrice += item.price * item.qty;
    }
    this.mTaxAmt = this.mTotalPrice * 0.07;
  }

  onClickBtnPayment() {
    this.mIsPaymentShown = !this.mIsPaymentShown;
  }

  removeOrder(selectedItem: any) {
    var index = this.mOrderArray.indexOf(selectedItem);

    this.mProductArray.map((item) => {
      if (item.productId == selectedItem.productId) {
        item.qty = 0;
      }
    });

    this.mOrderArray.splice(index, 1);
    this.countSumPrice();
  }

  clearAllItems() {
    // clear value of ordered items
    for (var i = 0; i < this.mProductArray.length; i++) {
      this.mProductArray[i].qty = 0;
    }

    this.mOrderArray = [];
    this.countSumPrice();
    this.mIsPaymentShown = false;
  }

  public get jsonOrderArray(): string {
    return JSON.stringify(this.mOrderArray);
  }

  onPaymentCompleted() {
    this.clearAllItems();
    this.mIsPaymentShown = false;
  }
}
