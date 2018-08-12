import {ApplicationRef, Component, OnInit} from '@angular/core';
import {Model} from '../../shared/repository.model';
import {Product} from '../../shared/product.model';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  model: Model = new Model();

  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
  }

  ngOnInit() {

  }

  getClasses(key): string {
    console.log(this.model.getProduct(1));
    console.log(key);
    let product = this.model.getProduct(key);
    return 'p-3 m-3 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
  }

  getClassMap(key: number): Object {
    let product = this.model.getProduct(key);
    return {"text-md-center bg-danger": product.name == "Kayak", "bg-info": product.price < 50};
  }

  fontSizeWithUnits: string = "30px";
  fontSizeWithoutUnits: string = "30";


  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getClassesByPosition(position: number): string {
    let product = this.getProductByPosition(position);
    return "p-3 " + (product.price < 50 ? "bg-info" : "bg-warning");
  }

}
