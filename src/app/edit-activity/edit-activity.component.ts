import {Component, Input, OnInit} from '@angular/core';
import {EditActivityService} from './edit-activity.service';
import {AmazingTimePickerService} from 'amazing-time-picker';
import {MatDatepickerInputEvent, MatDialog} from '@angular/material';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';


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
  @Input() activity: any;
  @Input() newActivity: boolean;


  model: any;
  selectedCat: any = [];
  selectedShop: any = [];
  category: any = [];
  description: any = [];
  showPurchasedList: boolean = false;
  selectedStartDate: string = '';
  selectedEndDate: string = '';
  selectedStartTime: string = '';
  selectedEndTime: string = '';
  isDone: boolean = false;
  test : string;

  constructor(
    private addEditActivityService: EditActivityService,
    private atp: AmazingTimePickerService,
    public dialog: MatDialog,
  ) {
  }


  ngOnInit() {
    this.test="2";
    console.log('Startttttt : ' + ((this.activity.startDate != null && (this.activity.startDate !== 'undefined')) ? this.activity.startDate.split(' ')[1].split('.')[0] : ''));
    let d = new Date();
    this.selectedStartTime = this.activity.startDate != null ? this.activity.startDate.split(' ')[1].split('.')[0] : d.getHours() + ':' + d.getMinutes();
    this.selectedEndTime = this.activity.endDate != null ? this.activity.endDate.split(' ')[1].split('.')[0] : d.getHours() + ':' + d.getMinutes();
    this.selectedStartDate = this.activity.startDate != null ? this.activity.startDate.split(' ')[0] : this.formatDate(new Date());
    this.selectedEndDate = this.activity.endDate != null ? this.activity.endDate.split(' ')[0] : this.formatDate(new Date());
    this.showPurchasedList = this.activity.activityCategoryId === 2;

    this.day = this.activity.day;
    this.model = this.activity;
    console.log('activity.activityCategoryId  ' + this.model.activityCategoryId);
    // console.log('now  ' + this.formatDate(new Date()));
    // console.log('selectedTime  ' + this.selectedStartTime);

  }

  toggleIsDone() {
    this.model.done = !this.model.done;
    this.model.isDone =this.model.done;
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
  DeleteActivity(id) {
      const dialogRef = this.dialog.open(DialogBoxComponent, {
        width: '250px',
        // data: {name: this.name, animal: this.animal}
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

    console.log('Delete activity by id :  ' + id);
    // this.addEditActivityService.deleteActivity(id);
  }
}
