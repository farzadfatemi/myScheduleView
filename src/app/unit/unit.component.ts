import {Component, Input, OnInit} from '@angular/core';
import {Unit} from '../domain/unit';
import {UnitService} from '../unit/unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  @Input() unitList: Unit[];

  constructor(
    private unitServices: UnitService) { }

  model: any = {};
  ngOnInit() {
  }

  addUnit() {
    this.unitServices.addUnit(this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

}
