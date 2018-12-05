import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {PurchaseComponent} from './purchase/purchase.component';
import {TabbarComponent} from './tabbar/tabbar.component';
import {SharedModule} from 'primeng/shared';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {MultiSelectModule, TabViewModule} from 'primeng/primeng';
import {SellerComponent} from './seller/seller.component';
import {UnitComponent} from './unit/unit.component';
import {CategoryComponent} from './category/category.component';
import {ProductComponent} from './product/product.component';
import {CompanyComponent} from './company/company.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';
import {BranchComponent} from './branch/branch.component';
import {DialogBoxComponent} from './dialog-box/dialog-box.component';
import {ActivityComponent} from './activity/activity.component';
import {AddEditActivityComponent} from './add-edit-activity/add-edit-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PurchaseComponent,
    TabbarComponent,
    SellerComponent,
    UnitComponent,
    CategoryComponent,
    ProductComponent,
    CompanyComponent,
    BranchComponent,
    DialogBoxComponent,
    ActivityComponent,
    AddEditActivityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatTabsModule,
    SharedModule,
    FormsModule,
    TableModule,
    MultiSelectModule,
    TabViewModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  exports: [
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
