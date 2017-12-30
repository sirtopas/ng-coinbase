import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';
import { environment } from '../../../environments/environment';
import { BaseService } from './base/base.service';

@Injectable()
export class PriceService extends BaseService {

    constructor(protected http: Http) {
        super(http);
    }

    getBuyPrice() {
        this.requestOptions.headers.append('CB-ACCESS-SIGN', this.generateSign('GET', '/v2/prices/gbp/buy'));
        return this.http.get(environment.baseUrl + '/prices/BTC-GBP/buy', this.requestOptions);
    }

    getSellPrice() {
        this.requestOptions.headers.append('CB-ACCESS-SIGN', this.generateSign('GET', '/v2/prices/gbp/sell'));
        return this.http.get(environment.baseUrl + '/prices/BTC-GBP/sell', this.requestOptions);
    }

    getSpotPrice() {
        this.requestOptions.headers.append('CB-ACCESS-SIGN', this.generateSign('GET', '/v2/prices/gbp/spot'));
        return this.http.get(environment.baseUrl + '/prices/BTC-GBP/spot', this.requestOptions);
    }

    getHistoricPrices() {
        this.requestOptions.headers.append('CB-ACCESS-SIGN', this.generateSign('GET', '/v2/prices/'));
        return this.http.get(environment.baseUrl + '/prices/BTC-GBP/historic', this.requestOptions);
    }
}
