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
  isShowAddEditBox: boolean = false;
  day: string = '';
  mondayList: any=[];
  tuesdayList: any=[];
  wednesdayList: any=[];
  thursdayList: any=[];
  fridayList: any=[];
  saturdayList: any=[];
  sundayList: any=[];

  dayForAdd(isShow:boolean,nameOfTheDay:any){
    this.isShowAddEditBox = isShow;
    this.day = nameOfTheDay;
  }
   addToWeekDaysList(activity:Activity) {
     let day = new Date(activity.startDate);
     console.log("Day of date : "+day.getDay());
     if(day.getDay()===1){
       this.mondayList.push(activity);
       console.log("Add to Monday List ... ");
       this.mondayList.forEach(activity=>{
            console.log(" - " + activity.title );
         }
        );
     } else  if(day.getDay()===2){
       this.tuesdayList.push(activity);
       console.log("Add to Tuesday List ... ");
       this.tuesdayList.forEach(activity=>{
           console.log(" - " + activity.title );
         }
       );
     } else  if(day.getDay()===3){
       this.wednesdayList.push(activity);
       console.log("Add to Wednesday List ... ");
       this.wednesdayList.forEach(activity=>{
           console.log(" - " + activity.title );
         }
       );
     } else  if(day.getDay()===4){
       this.thursdayList.push(activity);
       console.log("Add to Thursday List ... ");
       this.thursdayList.forEach(activity=>{
           console.log(" - " + activity.title );
         }
       );
     } else  if(day.getDay()===5){
       this.fridayList.push(activity);
       console.log("Add to Friday List ... ");
       this.fridayList.forEach(activity=>{
           console.log(" - " + activity.title );
         }
       );
     } else  if(day.getDay()===6){
       this.saturdayList.push(activity);
       console.log("Add to Saturday List ... ");
       this.saturdayList.forEach(activity=>{
           console.log(" - " + activity.title );
         }
       );
     } else  if(day.getDay()===0){
       this.sundayList.push(activity);
       console.log("Add to Sunday List ... ");
       this.sundayList.forEach(activity=>{
           console.log(" - " + activity.title );
         }
       );
     }


  }

  ngOnInit() {

    this.activityService.getAllActivities().then(activityList => {
      this.activityList = activityList;
      if (activityList !=null && activityList.length>0){
        activityList.forEach(activity=>{

          if(activity.startDate !=null){
            console.log("Start Date " + activity.startDate );

            this.addToWeekDaysList(activity);

            // console.log("Start Date" + activity.startDate.getDay())
          }
        })
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

  }

  isDone: boolean = false;

  isDoneEvent(event) {
    console.log("===>"+event );
    this.isDone = !this.isDone;
    return null;
  }





  /*displayedColumns: string[] =  ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }*/
}

/*export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

*/
