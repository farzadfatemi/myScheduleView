import {Component, Input, OnInit} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-add-edit-activity',
  templateUrl: './add-edit-activity.component.html',
  styleUrls: ['./add-edit-activity.component.css']
})
export class AddEditActivityComponent implements OnInit {
  @Input() dayForAddActivity: any;
  @Input() showAddEditBox: boolean;
  constructor(
   ) { }

  model: any = {};
  ngOnInit() {
    this.model.startDate = this.formatDate(new Date());
    console.log('now  ' + this.formatDate(new Date()));
    this.model.endDate = this.formatDate(new Date());

  }
  setStartDate(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log('Start Date Chosen : ' + event.value);

    this.model.startDate = this.formatDate(event.value);
  }

  formatDate(d) {
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }

  setEndDate(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log('End Date Chosen : ' + event.value);
    this.model.endDate = this.formatDate(event.value);
  }
  getNumberArr (n: number): any[] {
    // @ts-ignore
    return Array(n+1).fill().map((x,i)=>i);
  }
  addCategory() {
    // this.categoryServices.addCategory(this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
