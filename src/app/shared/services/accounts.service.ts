import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';
import { environment } from '../../../environments/environment';
import { BaseService } from './base/base.service';

@Injectable()
export class AccontService extends BaseService {

    constructor(protected http: Http) {
        super(http);
    }

    getAccounts() {
        this.requestOptions.headers.append('CB-ACCESS-SIGN', this.generateSign('GET', '/v2/accounts'));
        return this.http.get(environment.baseUrl + '/accounts', this.requestOptions);
    }
}
