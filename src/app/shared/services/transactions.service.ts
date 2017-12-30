import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';
import { environment } from '../../../environments/environment';
import { BaseService } from './base/base.service';

@Injectable()
export class TransactionsService extends BaseService {

    constructor(protected http: Http) {
        super(http);
    }

    getTransactions(accountId: number) {
        this.requestOptions.headers.append('CB-ACCESS-SIGN',
            this.generateSign('GET', '/v2/accounts/' + accountId + '/transactions'));
        return this.http.get(environment.baseUrl + '/accounts/' + accountId + '/transactions', this.requestOptions);
    }
}
