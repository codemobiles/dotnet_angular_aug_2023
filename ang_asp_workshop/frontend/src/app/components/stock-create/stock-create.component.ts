import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.scss'],
})
export class StockCreateComponent implements OnInit {
  imageURL = null;
  imageFile = null;
  formProduct!: FormGroup;
  constructor(private rest: RestService, private location: Location) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formProduct = new FormGroup({
      name: new FormControl('Your Product', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      stock: new FormControl(10, []),
      price: new FormControl(200, []),
    });
  }

  onSubmit() {
    alert(JSON.stringify(this.formProduct.value));
  }

  onClickCancel() {
    this.location.back();
  }
}
