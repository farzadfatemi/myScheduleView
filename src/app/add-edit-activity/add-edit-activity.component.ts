import {Component, Input, OnInit} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material';
import {Category} from '../domain/category';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-edit-activity',
  templateUrl: './add-edit-activity.component.html',
  styleUrls: ['./add-edit-activity.component.css']
})
export class AddEditActivityComponent implements OnInit {
  @Input() dayForAddActivity: any;
  @Input() showAddEditBox: boolean;
  @Input() actCatList: any;

  constructor() {
  }

  model: any = {};
    selectedCat: any = [];
  nonFrequentCats: any = [];

  ngOnInit() {
    this.model.startDate = this.formatDate(new Date());
    console.log('now  ' + this.formatDate(new Date()));
    console.log('model.nfCategoryId  ' + this.model.nfCategoryId);
    this.model.endDate = this.formatDate(new Date());


  }

  getNonFrequentCats(itemList: Category[])  {
    let result: Category[] = [];
    result = itemList.filter(nonFrequentCat => {
      if (nonFrequentCat.isMain === '0') {
        return nonFrequentCat;
      }
    });
    return result;
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

  getNumberArr(n: number): any[] {
    // @ts-ignore
    return Array(n + 1).fill().map((x, i) => i);
  }

  addEditActivity() {
    // this.categoryServices.addCategory(this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
  selectCats(event) {
    // const interests = <FormArray>this.interestFormGroup.get('interests') as FormArray;

    if(event.checked) {
      console.log("=-=e>"+event.checked);
      this.selectedCat.push(new FormControl(event.source.value))
    } else {

      const index: number = this.selectedCat.indexOf(event.source.value);
      if (index !== -1) {
        this.selectedCat.splice(index, 1);
      }

      console.log("=-=d>"+event.source.value);
      // const i = this.selectedCat.findIndex(x => x.value === event.source.value);
      // this.selectedCat.remove(i);
    }
    console.log("=-=0>"+this.selectedCat);
  }
  selectedBox(event) {
    // const interests = <FormArray>this.interestFormGroup.get('interests') as FormArray;
    //
    // if(event.checked) {
    //   interests.push(new FormControl(event.source.value))
    // } else {
    //   const i = interests.controls.findIndex(x => x.value === event.source.value);
    //   interests.removeAt(i);
    // }
  }
}
