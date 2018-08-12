import {Component, OnInit} from '@angular/core';
import {Model} from '../../shared/repository.model';
import {Product} from '../../shared/product.model';

@Component({
  selector: 'app-events-forms',
  templateUrl: './events-forms.component.html',
  styleUrls: ['./events-forms.component.scss']
})
export class EventsFormsComponent implements OnInit {

  model: Model = new Model();
  selectedProduct: string;

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

  getSelected(product: Product): boolean {
    return product.name === this.selectedProduct;
  }
}
