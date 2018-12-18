import {Component, Input, OnInit} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material';
import {Category} from '../domain/category';

@Component({
  selector: 'app-add-edit-activity',
  templateUrl: './add-edit-activity.component.html',
  styleUrls: ['./add-edit-activity.component.css']
})
export class AddEditActivityComponent implements OnInit {
  @Input() chosenDay: any;
  @Input() showAddEditBox: boolean;
  @Input() actCatList: any;
  @Input() shopList: any;


  model: any = {};
  selectedCat: any = [];
  selectedShop: any = [];
  category: any = [];
  description: any = [];

  ngOnInit() {
    this.model.startDate = this.formatDate(new Date());
    console.log('now  ' + this.formatDate(new Date()));
    console.log('model.nfCategoryId  ' + this.model.nfCategoryId);
    this.model.endDate = this.formatDate(new Date());
    this.model.chosenDay = this.chosenDay;

  }

  getNonFrequentCats(itemList: Category[]) {
    let result: Category[] = [];
    if (itemList != null) {
      result = itemList.filter(nonFrequentCat => {
        if (nonFrequentCat.isMain === '0') {
          return nonFrequentCat;
        }
      });
    }
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
    this.model.chosenDay = this.chosenDay;
    // this.categoryServices.addCategory(this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

  selectCats(event, i) {
    this.selectedCat = event.source.value;
    console.log('=-=d>' + event.source.value);
    /*
        if (event.checked) {
          console.log('=-=e>' + event.checked + ' =-= value>' + event.value);
          this.selectedCat.push(new FormControl(event.source.value));
        } else {
          if (i !== -1) {
            this.selectedCat.splice(i, 1);
          }

        }
        console.log('=-=0>' + JSON.stringify(this.selectedCat));*/
  }
  selectShop(event, i) {
    this.selectedShop = event.source.value;
    console.log('=-=d>' + event.source.value);

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
