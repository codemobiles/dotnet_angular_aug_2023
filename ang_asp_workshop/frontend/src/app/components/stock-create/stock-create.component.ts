import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.scss'],
})
export class StockCreateComponent {
onClickCancel() {
throw new Error('Method not implemented.');
}
  imageURL = null;
  imageFile = null;
  formProduct!: FormGroup;
  constructor(private rest: RestService, private location: Location) {}
}
