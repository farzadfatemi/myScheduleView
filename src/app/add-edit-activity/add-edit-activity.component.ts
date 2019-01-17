import {Component, Input, OnInit} from '@angular/core';
import {AddEditActivityService} from './add-edit-activity.service';
import {AmazingTimePickerService} from 'amazing-time-picker';
import {MatDatepickerInputEvent} from '@angular/material';

const URL = 'http://localhost:8080/';

@Component({
  selector: 'app-add-edit-activity',
  templateUrl: './add-edit-activity.component.html',
  styleUrls: ['./add-edit-activity.component.css']
})
export class AddEditActivityComponent implements OnInit {
  @Input() day: any;
  @Input() showAddEditBox: boolean;
  @Input() actCatList: any;
  @Input() shopList: any;
  @Input() activity: any = [];


  model: any = {};
  selectedCat: any = [];
  selectedShop: any = [];
  category: any = [];
  description: any = [];
  showPurchasedList: boolean = false;
  selectedStartDate: string = '';
  selectedEndDate: string = '';
  selectedStartTime: string = '';
  selectedEndTime: string = '';

  constructor(
    private addEditActivityService: AddEditActivityService,
    private atp: AmazingTimePickerService
  ) {
  }

  ngOnChanges() {
    if (this.activity) {

      this.model = this.activity;
      console.log('Startttttt : ' + ((this.activity.startDate != null && (this.activity.startDate !=='undefined'))? this.activity.startDate.split(' ')[1].split('.')[0] : ''));
      // console.log('this.activity : ' + JSON.stringify(this.activity));

      this.selectedStartTime = this.activity.startDate != null ? this.activity.startDate.split(' ')[1].split('.')[0] : '';
      this.selectedEndTime = this.activity.endDate != null ? this.activity.endDate.split(' ')[1].split('.')[0] : '';
      this.selectedStartDate = this.activity.startDate != null ? this.activity.startDate.split(' ')[0] : '';
      this.selectedEndDate = this.activity.endDate != null ? this.activity.endDate.split(' ')[0] : '';
      this.showPurchasedList = this.activity.activityCategoryId === 2;
      this.day = this.activity.day;
    }else{

      let d = new Date();
      this.model.done = false;
      this.selectedStartTime = d.getHours() + ':' + d.getMinutes();
      this.selectedEndTime = d.getHours() + ':' + d.getMinutes();
      this.selectedStartDate = this.formatDate(new Date());
      this.selectedEndDate = this.formatDate(new Date());
      this.model.startDate = this.selectedStartDate;
      this.model.endDate = this.selectedEndDate;
      this.model.description = "";
      this.model.title = "";
      this.model.ativityCategoryId = 1;
      // this.model.purchaseId = 1;

      console.log('now  ' + this.formatDate(new Date()));
      console.log('selectedTime  ' + this.selectedStartTime);
      // console.log('model.category  ' + JSON.stringify(this.category));
      this.model.day = this.day;
    }
  }

  // ngDoCheck() {
  //   console.log('ngDoCheck : ' + JSON.stringify(this.activity));
  //
  // }

  ngOnInit() {

    let d = new Date();

    this.model.startDate = this.selectedStartDate;
    this.model.endDate = this.selectedEndDate;
    this.model.done = false;
    this.selectedStartTime = d.getHours() + ':' + d.getMinutes();
    this.selectedEndTime = d.getHours() + ':' + d.getMinutes();
    this.selectedStartDate = this.formatDate(new Date());
    this.selectedEndDate = this.formatDate(new Date());


    console.log('now  ' + this.formatDate(new Date()));
    console.log('selectedTime  ' + this.selectedStartTime);
    // console.log('model.category  ' + JSON.stringify(this.category));
    this.model.day = this.day;

  }

  toggleIsDone() {
    this.model.done = !this.model.done;
  }

  // getNonFrequentCats(itemList: Category[]) {
  //   let result: Category[] = [];
  //   if (itemList != null) {
  //     result = itemList.filter(nonFrequentCat => {
  //       if (nonFrequentCat.isMain === '0') {
  //         return nonFrequentCat;
  //       }
  //     });
  //   }
  //   return result;
  // }


  formatDate(d) {
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }


  getNumberArr(n: number): any[] {
    // @ts-ignore
    return Array(n + 1).fill().map((x, i) => i);
  }


  selectCats(event) {
    this.selectedCat = event.source.value;
    this.showPurchasedList = this.selectedCat === 2;
    console.log('=-=d>' + event.source.value);
    console.log('=-=s>' + (this.showPurchasedList));
    console.log('=-=w>' + (this.selectedCat));
  }

  selectShop(event, i) {
    this.selectedShop = event.source.value;
    console.log('=-=shop Selected>' + event.source.value);

  }

  openStart() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      this.selectedStartTime = time;
      console.log('selectedTime  ' + this.selectedStartTime);
    });
  }

  openEnd() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      this.selectedEndTime = time;
      console.log('selectedTime  ' + this.selectedEndTime);
    });
  }

  changeStartTime(event) {
    console.log('StartTime CHanged :' + event.target.value);
    this.selectedStartTime = event.target.value;

  }

  changeEndTime(event: any) {
    console.log('EndTime CHanged :' + event.target.value);
    this.selectedEndTime = event.target.value;
  }

  setStartDate(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log('Start Date Chosen : ' + event.value);


    this.selectedStartDate = this.formatDate(event.value);
  }

  setEndDate(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log('End Date Chosen : ' + event.value);
    this.selectedEndDate = this.formatDate(event.value);
  }

  addOrEditActivity() {
    this.model.day = this.day;
    this.model.startDate = this.selectedStartDate + ' ' + this.selectedStartTime;
    this.model.endDate = this.selectedEndDate + ' ' + this.selectedEndTime;
    console.log('startDate  ' + this.model.startDate + 'end Date  ' + this.model.endDate);
    console.log('isDone  ' + this.model.isDone);
    // console.log('e3333 ' + JSON.stringify(this.shopList));
    this.addEditActivityService.addActivity(this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
