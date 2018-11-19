import {Component, OnInit} from '@angular/core';
import {BranchService} from './branch.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  constructor( private branchServices: BranchService) {

  }

  ngOnInit() {
  }
  model: any = {};
  addBranch() {
    this.branchServices.addBranch(this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

}
