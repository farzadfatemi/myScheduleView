import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from './category.service';
import {Category} from '../domain/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() categoryList: Category[];

  constructor(
    private categoryServices: CategoryService) { }

  model: any = {};
  ngOnInit() {
  }

  addCategory() {
    this.categoryServices.addCategory(this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
