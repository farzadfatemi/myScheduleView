import {Component, Input, OnInit} from '@angular/core';
import {Manufacturer} from '../domain/manufacturer';
import {ManufacturerService} from './manufacturer.service';
import {Seller} from '../domain/seller';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  @Input() manufacturerList: Manufacturer[];
  @Input() sellerList: Seller[];
  nationalityList:[
    {"id":"1","name":"New Zealand"},
    {"id":"2","name":"Iran"}
    ];

  constructor(
    private manufacturerServices: ManufacturerService) { }

  model: any = {};
  ngOnInit() {
    console.log("=== "+this.nationalityList[0].name)
  }

  addManufacturer() {
    this.manufacturerServices.addManufacturer(this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
