import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BaseComponent } from './shared/components/base.component';
import { UserComponent } from './user/user.component';

import { AccontService } from './shared/services/accounts.service';
import { PriceService } from './shared/services/price.service';
import { TransactionsService } from './shared/services/transactions.service';
import { UserService } from './shared/services/user.service';

import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartsModule
  ],
  providers: [
    AccontService,
    PriceService,
    TransactionsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
