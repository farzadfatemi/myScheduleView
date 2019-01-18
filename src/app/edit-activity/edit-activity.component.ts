import {Component, Input, OnInit} from '@angular/core';
import {EditActivityService} from './edit-activity.service';
import {AmazingTimePickerService} from 'amazing-time-picker';
import {MatDatepickerInputEvent} from '@angular/material';
import {Activity} from '../domain/activity';

const URL = 'http://localhost:8080/';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css']
})
export class EditActivityComponent implements OnInit {
  @Input() day: any;
  @Input() showEditBox: boolean;
  @Input() actCatList: any;
  @Input() shopList: any;
  @Input() activity: any = [];
  @Input() newActivity: boolean;


  model: Activity ;
  selectedCat: any = [];
  selectedShop: any = [];
  category: any = [];
  description: any = [];
  showPurchasedList: boolean = false;
  selectedStartDate: string = '';
  selectedEndDate: string = '';
  selectedStartTime: string = '';
  selectedEndTime: string = '';
  currentActivity: Activity;
  constructor(
    private addEditActivityService: EditActivityService,
    private atp: AmazingTimePickerService
  ) {
  }

  ngOnChanges() {
    console.log("into ngOnCHange and this.newActivity is " + this.newActivity);

      console.log("Current Activity = "+JSON.stringify(this.activity));
      this.model = this.activity;
      console.log('Startttttt : ' + ((this.activity.startDate != null && (this.activity.startDate !=='undefined'))? this.activity.startDate.split(' ')[1].split('.')[0] : ''));
      // console.log('this.activity : ' + JSON.stringify(this.activity));

      this.selectedStartTime = this.activity.startDate != null ? this.activity.startDate.split(' ')[1].split('.')[0] : '';
      this.selectedEndTime = this.activity.endDate != null ? this.activity.endDate.split(' ')[1].split('.')[0] : '';
      this.selectedStartDate = this.activity.startDate != null ? this.activity.startDate.split(' ')[0] : '';
      this.selectedEndDate = this.activity.endDate != null ? this.activity.endDate.split(' ')[0] : '';
      this.showPurchasedList = this.activity.activityCategoryId === 2;
      this.day = this.activity.day;

  }


  ngOnInit() {

    let d = new Date();
    this.currentActivity = this.activity;
    this.selectedStartTime = d.getHours() + ':' + d.getMinutes();
    this.selectedEndTime = d.getHours() + ':' + d.getMinutes();
    this.selectedStartDate = this.formatDate(new Date());
    this.selectedEndDate = this.formatDate(new Date());
    console.log('now  ' + this.formatDate(new Date()));
    console.log('selectedTime  ' + this.selectedStartTime);

  }

  toggleIsDone() {
    this.model.isDone = !this.model.isDone;
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

  EditActivity() {
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
