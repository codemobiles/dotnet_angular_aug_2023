import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.scss'],
})
export class StockCreateComponent {
  imageURL = null;
  imageFile = null;
  formProduct!: FormGroup;
  constructor(private rest: RestService, private location: Location) {}
}
