import {Component, OnInit} from '@angular/core';
import {ActivityService} from './activity.service';
import {Activity} from '../domain/activity';
import {Category} from '../domain/category';
import {Purchase} from '../domain/purchase';
import {PurchaseService} from '../purchase/purchase.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {


  activityList: Activity[];
  actCatList: Category[];
  shopList: Purchase[];

  constructor(
    private activityService: ActivityService,
    private purchaseService: PurchaseService,
  ) {
  }

  model: any = {};
  isShowAddBox: boolean = false;
  isShowEditBox: boolean = false;
  day: string = '';
  activity: Activity;
  mondayList: any = [];
  tuesdayList: any = [];
  wednesdayList: any = [];
  thursdayList: any = [];
  fridayList: any = [];
  saturdayList: any = [];
  sundayList: any = [];
  newActivity: boolean = true;

  dayForAdd(toggleShowBox:boolean, nameOfTheDay: any) {
    this.isShowAddBox = toggleShowBox;
    this.day = nameOfTheDay;
    this.newActivity = true;
    console.log(" newActivity in activity is :"+ this.newActivity);
  }

  addToWeekDaysList(activity: Activity) {
    let day = new Date(activity.startDate);
    console.log('Day of date : ' + day.getDay());
    if (day.getDay() === 1) {
      activity.day = 'monday';
      this.mondayList.push(activity);
      // console.log('Activity == ' + JSON.stringify(activity));
      // console.log('Add to Monday List ... ');
      // this.mondayList.forEach(activity => {
      //     console.log(' - ' + activity.title);
      //   }
      // );
    } else if (day.getDay() === 2) {
      activity.day = 'tuesday';
      this.tuesdayList.push(activity);
      // console.log('Add to Tuesday List ... ');
      // this.tuesdayList.forEach(activity => {
      //     console.log(' - ' + activity.title);
      //   }
      // );
    } else if (day.getDay() === 3) {
      activity.day = 'wednesday';
      this.wednesdayList.push(activity);
      // console.log('Add to Wednesday List ... ');
      // this.wednesdayList.forEach(activity => {
      //     console.log(' - ' + activity.title);
      //   }
      // );
    } else if (day.getDay() === 4) {
      activity.day = 'thursday';
      this.thursdayList.push(activity);
      // console.log('Add to Thursday List ... ');
      // this.thursdayList.forEach(activity => {
      //     console.log(' - ' + activity.title);
      //   }
      // );
    } else if (day.getDay() === 5) {
      activity.day = 'friday';
      this.fridayList.push(activity);
      // console.log('Add to Friday List ... ');
      // this.fridayList.forEach(activity => {
      //     console.log(' - ' + activity.title);
      //   }
      // );
    } else if (day.getDay() === 6) {
      activity.day = 'saturday';
      this.saturdayList.push(activity);
      // console.log('Add to Saturday List ... ');
      // this.saturdayList.forEach(activity => {
      //     console.log(' - ' + activity.title);
      //   }
      // );
    } else if (day.getDay() === 0) {
      activity.day = 'sunday';
      this.sundayList.push(activity);
      // console.log('Add to Sunday List ... ');
      // this.sundayList.forEach(activity => {
      //     console.log(' - ' + activity.title);
      //   }
      // );
    }


  }

  ngOnInit() {

    this.activityService.getAllActivities().then(activityList => {
      this.activityList = activityList;
      if (activityList != null && activityList.length > 0) {
        activityList.forEach(activity => {

          if (activity.startDate != null) {
            console.log('Activity ' + JSON.stringify(activity));

            this.addToWeekDaysList(activity);

            // console.log("Start Date" + activity.startDate.getDay())
          }
        });
      }

    });
    this.activityService.getAllActivityCat().then(catList => {
      this.actCatList = catList;
    });
    this.purchaseService.getAllPurchases().then(shopList => {
      // console.log("--->"+JSON.stringify(shopList));
      this.shopList = shopList;
    });
  }


  editEvent(event: any) {
    this.isShowEditBox = true;
    this.activity = event;
    this.newActivity = false;
    console.log("  activity for send to component :"+ JSON.stringify(this.activity));
  }


  isDoneEvent(event) {
    // console.log('===>' + JSON.stringify(event));
    this.isShowEditBox = true;
    event.done = !event.done;
    // console.log('===> 2 ' + JSON.stringify(event));
    this.activity = event;
    this.newActivity = false;
  }

}
