import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { BaseComponent } from '../app/shared/components/base.component';

import { environment } from '../environments/environment';
import { AccontService } from './shared/services/accounts.service';
import { PriceService } from './shared/services/price.service';
import { TransactionsService } from './shared/services/transactions.service';
import { UserService } from './shared/services/user.service';

import * as jsSHA from 'jssha';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent implements OnInit {

    isLoaded = false;
    historicData: any;
    buyPrice: any;
    sellPrice: any;
    spotPrice: any;
    transactions: any;
    accounts: any;
    user: any;

    public lineChartData: Array<any> = [
        { data: [], label: 'Buy Price' },
        { data: [], label: 'Sell Price' },
        { data: [], label: 'Spot Price' }
    ];
    public lineChartLegend = true;
    public lineChartLabels: any = [];
    public lineChartType = 'line';
    public lineChartOptions: any = {
        responsive: false
    };

    constructor(
        private accountService: AccontService,
        private userService: UserService,
        private priceService: PriceService,
        private transactionsService: TransactionsService,
        protected http: Http) {

        super();
    }

    ngOnInit() {
        this.userService.getCurrentUser().subscribe(user => {
            this.user = JSON.parse(user.text());
            this.user = this.user.data;
        });

        this.accountService.getAccounts().subscribe(accounts => {
            this.accounts = JSON.parse(accounts.text());
            this.accounts = this.accounts.data;
            this.transactionsService.getTransactions(this.accounts[0].id).subscribe(transactions => {
                this.transactions = JSON.parse(transactions.text());
                this.transactions = this.transactions.data;
            });
        })

        Observable.interval(1000).subscribe(i => {
            this.priceService.getBuyPrice().subscribe(res => {
                this.buyPrice = JSON.parse(res.text());
                this.buyPrice = this.buyPrice.data;
            });
        });

        Observable.interval(1000).subscribe(i => {
            this.priceService.getSellPrice().subscribe(res => {
                this.sellPrice = JSON.parse(res.text());
                this.sellPrice = this.sellPrice.data;
            });
        });

        Observable.interval(1000).subscribe(i => {
            this.priceService.getSpotPrice().subscribe(res => {
                this.spotPrice = JSON.parse(res.text());
                this.spotPrice = this.spotPrice.data;
            });
        });

        this.priceService.getHistoricPrices().subscribe(res => {
            this.historicData = JSON.parse(res.text());
            this.historicData = this.historicData.data;
            for (const item of this.historicData.prices) {
                this.lineChartLabels.push(item.time.toString());
            }
            for (const item of this.historicData.prices) {
                this.lineChartData[0].data.push(item.price);
            }
            this.isLoaded = true;
        });
    }
}
