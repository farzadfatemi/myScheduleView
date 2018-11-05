import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {Product} from '../domain/product';
import {Manufacturer} from '../domain/manufacturer';
import {Category} from '../domain/category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() categoryList: Category[];
  @Input() manufacturerList: Manufacturer[];
  productList: Product[];
  model: any = {};
  constructor(
    private productServices: ProductService) { }

  ngOnInit() {
    this.productServices.getAllProducts().then(productList => {
      this.productList = productList;
    });
    this.model.prodDate =  new Date().toISOString().split('T')[0];
    this.model.expDate =  new Date().toISOString().split('T')[0];
  }

  addProduct() {
    this.productServices.addPruduct(this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

}
