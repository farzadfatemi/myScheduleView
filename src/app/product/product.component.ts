import {Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {ProductService} from './product.service';
import {Product} from '../domain/product';
import {Company} from '../domain/company';
import {Category} from '../domain/category';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() categoryList: Category[];
  @Input() companyList: Company[];
  productList: Product[];
  model: any = {};


  constructor(
    private productServices: ProductService) {
  }

  ngOnInit() {
    this.productServices.getAllProducts().then(productList => {
      this.productList = productList;
    });
    this.model.prodDate = this.formatDate(new Date());
    console.log('now  ' + this.formatDate(new Date()));
    this.model.expDate = this.formatDate(new Date());

    $(document).ready(function () {

    });

  }
  setProdDate(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log("Prod Date Chosen : "+ event.value);

    this.model.prodDate = this.formatDate(event.value);
  }
  setExpDate(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log("Exp Date Chosen : "+ event.value);
    this.model.expDate = this.formatDate(event.value);
  }

  addProduct() {
    this.productServices.addPruduct(this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
 formatDate(d){
   return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
 }
}
