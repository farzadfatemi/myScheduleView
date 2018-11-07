import {Component, OnInit} from '@angular/core';
import {SellerService} from './seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor( private sellerServices: SellerService) {

  }

  ngOnInit() {
  }
  model: any = {};
  addSeller() {
    this.sellerServices.addSeller(this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
