import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';
import { environment } from '../../../environments/environment';
import { BaseService } from './base/base.service';

@Injectable()
export class UserService extends BaseService {

    constructor(protected http: Http) {
        super(http);
    }

    getCurrentUser() {
        this.requestOptions.headers.append('CB-ACCESS-SIGN', this.generateSign('GET', '/v2/user'));
        return this.http.get(environment.baseUrl + '/user', this.requestOptions);
    }
}
