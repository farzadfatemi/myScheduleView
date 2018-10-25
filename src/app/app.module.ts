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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PurchaseComponent,
    TabbarComponent,
    SellerComponent
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
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
