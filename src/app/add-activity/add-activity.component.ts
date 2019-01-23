import {Component, Input, OnInit} from '@angular/core';
import {AmazingTimePickerService} from 'amazing-time-picker';
import {MatDatepickerInputEvent} from '@angular/material';
import {AddActivityService} from './add-activity.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
  @Input() day: any;
  @Input() showAddBox: boolean;
  @Input() actCatList: any;
  @Input() shopList: any;
  @Input() activity: any = [];
  @Input() newActivity: boolean;


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
  isDone:boolean=false;
  constructor(
    private addActivityService: AddActivityService,
    private atp: AmazingTimePickerService
  ) {
  }


  ngOnInit() {
    this.model.purchaseId = 0;
    let d = new Date();
    this.selectedStartTime = d.getHours() + ':' + d.getMinutes();
    this.selectedEndTime = d.getHours() + ':' + d.getMinutes();
    this.selectedStartDate = this.formatDate(new Date());
    this.selectedEndDate = this.formatDate(new Date());


    console.log('now  ' + this.formatDate(new Date()));
    console.log('selectedTime  ' + this.selectedStartTime);

  }

  toggleIsDone() {
    this.model.isDone = !this.model.isDone;
    this.model.done = !this.model.done;
  }


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

  addActivity() {
    this.model.day = this.day;
    this.model.activityCategoryId  = this.selectedCat;
    this.model.startDate = this.selectedStartDate + ' ' + this.selectedStartTime;
    this.model.endDate = this.selectedEndDate + ' ' + this.selectedEndTime;
    console.log('startDate  ' + this.model.startDate + 'end Date  ' + this.model.endDate);
    console.log('isDone  ' + this.model.isDone);
    console.log('done  ' + this.model.done);
    // console.log('e3333 ' + JSON.stringify(this.shopList));
    this.addActivityService.addActivity(this.model);
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
