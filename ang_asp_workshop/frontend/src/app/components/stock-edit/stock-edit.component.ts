import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.scss'],
})
export class StockEditComponent implements OnInit {
  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    alert(productId.toString());
  }
}
