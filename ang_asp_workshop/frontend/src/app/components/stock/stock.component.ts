import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['productId', 'name', 'price', 'stock'];
  dataSource: Product[] = [];

  constructor(private rest: RestService) {}
  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.dataSource = await lastValueFrom(this.rest.getProducts());
  }

  ngAfterViewInit(): void {}
  ngOnDestroy(): void {}
}
