import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../domain/company';
import {CompanyService} from './company.service';
import {Seller} from '../domain/seller';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @Input() companyList: Company[];
  @Input() sellerList: Seller[];
  nationalityList:[
    {"id":"1","name":"New Zealand"},
    {"id":"2","name":"Iran"}
    ];

  constructor(
    private companyServices: CompanyService) { }

  model: any = {};
  ngOnInit() {
    console.log("=== "+this.nationalityList[0].name)
  }

  addCompany() {
    this.companyServices.addCompany(this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
