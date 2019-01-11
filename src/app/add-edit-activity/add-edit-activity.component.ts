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
  showPurchasedList: boolean = false;
  fr24to2:any='24-2';
  fr2to4:any='2-4';
  fr4to6:any='4-6';
  fr6to8:any='6-8';
  fr8to10:any='8-10';
  fr10to12:any='10-12';
  fr12to14:any='12-14';
  fr14to16:any='14-16';
  fr16to18:any='16-18';
  fr18to20:any='18-20';
  fr20to22:any='20-22';
  fr22to24:any='22-24';
  ngOnInit() {

    this.model.startDate = this.formatDate(new Date());
    console.log('now  ' + this.formatDate(new Date()));
    console.log('model.category  ' + JSON.stringify(this.category));
    this.model.endDate = this.formatDate(new Date());
    this.model.startDateTime = this.model.startDate  + this.model.startTimeH +":"+this.model.startTimeM;
    this.model.endDateTime = this.model.endDate  + this.model.endTimeH +":"+this.model.endTimeM;
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

    this.model.startDateTime =this.model.startDate + " " + this.model.startTimeH +":"+this.model.startTimeM;
    this.model.startDate = this.formatDate(event.value)  ;
  }

  formatDate(d) {
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }

  setEndDate(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log('End Date Chosen : ' + event.value);
    this.model.endDate = this.formatDate(event.value)  ;
    this.model.endDateTime = this.model.endDate  + this.model.endTimeH +":"+this.model.endTimeM;
  }

  getNumberArr(n: number): any[] {
    // @ts-ignore
    return Array(n + 1).fill().map((x, i) => i);
  }

  submitAddOrEditActivity() {
    this.model.chosenDay = this.chosenDay;
    console.log('e3333 ' + JSON.stringify(this.shopList));
    // this.categoryServices.addCategory(this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
  selectStartTimeH(event){
    console.log('Start Hour : ' + this.model.startTimeH);

    this.model.startDateTime =this.model.startDate + " " + this.model.startTimeH +":"+this.model.startTimeM;
  }  selectStartTimeM(event){
    console.log('Start Minutes : ' + this.model.startTimeM);

    this.model.startDateTime =this.model.startDate + " " + this.model.startTimeH +":"+this.model.startTimeM;
  }  selectEndTimeH(event){
    console.log('End Hour : ' + this.model.endTimeH);
    this.model.endDateTime = this.model.endDate  + " " + this.model.endTimeH +":"+this.model.endTimeM;
  }  selectEndTimeM(event){
    console.log('End Minutes : ' + this.model.endTimeM);
    this.model.endDateTime = this.model.endDate  + " " + this.model.endTimeH +":"+this.model.endTimeM;
  }
  selectCats(event) {
    this.selectedCat = event.source.value;
    this.showPurchasedList = this.selectedCat ===2;
    console.log('=-=d>' + event.source.value);
    console.log('=-=w>' +( this.selectedCat));
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
    console.log('=-=shop Selected>' + event.source.value);

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
