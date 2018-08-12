import {ApplicationRef, Component, OnInit} from '@angular/core';
import {Model} from '../../shared/repository.model';
import {Product} from '../../shared/product.model';

@Component({
  selector: 'app-embeded-directives',
  templateUrl: './embeded-directives.component.html',
  styleUrls: ['./embeded-directives.component.scss']
})
export class EmbededDirectivesComponent implements OnInit {

  model: Model = new Model();
  targetName = 'Kayak';
  public Math = Math;
  counter = 1;

  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
  }

  ngOnInit() {
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts() {
    return this.model.getProducts();
  }

  getProductCount(): number {
    return this.getProducts().length;
  }

  getKey(index: number, product: Product) {
    return product.id;
  }

  getProductPrice(index: number): number {
    return Math.floor(this.getProduct(index).price);
  }

}
