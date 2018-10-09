import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {PurchaseComponent} from './purchase/purchase.component';
import {TabbarComponent} from './tabbar/tabbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PurchaseComponent,
    TabbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
