import {Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';
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
    private productServices: ProductService) {
  }

  ngOnInit() {
    this.productServices.getAllProducts().then(productList => {
      this.productList = productList;
    });
    let d = new Date();
    let formatedDate = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
    this.model.prodDate = formatedDate;
    console.log('now  ' + formatedDate);
    this.model.expDate = formatedDate;

    $(document).ready(function () {

    });

  }

  addProduct() {
    this.productServices.addPruduct(this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

}
