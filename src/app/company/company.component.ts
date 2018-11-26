import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../domain/company';
import {CompanyService} from './company.service';
import {Seller} from '../domain/seller';
import {MatDialog, MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {


  @Input() companyList: Company[];
  @Input() sellerList: Seller[];
  nationalityList=[
    {"id":"1","name":"New Zealand"},
    {"id":"2","name":"Iran"}
    ];
  businessTypeList=[
    {"id":"1","name":"Seller"},
    {"id":"2","name":"Producer"}
    ];
  constructor(
    private companyServices: CompanyService,public snackBar: MatSnackBar,public dialog: MatDialog   ) { }
  response:Company;
  model: any = {};
  ngOnInit() {
    // console.log("=== "+this.nationalityList[0].name)
  }

  addCompany() {

    this.companyServices.addCompany(this.model).subscribe(data =>  {


        this.response = data as Company;

        console.log('POST Request is successful ', this.response);
        // console.log("POST Request is successful ", JSON.stringify(data));


   // alert(this.response.name+' has been successfully added in Companies\' list');
        let config = new MatSnackBarConfig();
        config.duration = 5000;
        config.panelClass = ['blue-snackbar'];
        let snackBarRef = this.snackBar.open(this.response.name+' has been successfully added in Companies list', "ACTION", config);
        // let snackBarRef = this.snackBar.open(this.response.name+' has been added successfully in Companies list', "dismiss", {
        //   duration: 5000,
        //
        // });
        snackBarRef.afterDismissed().subscribe(() => {
          console.log('The snack-bar was dismissed');
        });


        snackBarRef.onAction().subscribe(() => {
          console.log('The snack-bar action was triggered!');
        });
      },
      error => {
        console.log('Error', error);
      });

    // console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));

  }
}
