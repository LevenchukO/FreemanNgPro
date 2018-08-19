import {Component, OnInit} from '@angular/core';
import {Model} from '../../shared/repository.model';
import {ProductFormGroup} from './form.model';
import {Product} from '../../shared/product.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-base-on-model',
  templateUrl: './form-base-on-model.component.html',
  styleUrls: ['./form-base-on-model.component.scss']
})
export class FormBaseOnModelComponent implements OnInit {

  model: Model = new Model();
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted = false;

  constructor() {
  }

  ngOnInit() {
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log('New Product: ' + this.jsonProduct);
  }

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }
}
