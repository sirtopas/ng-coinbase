import { Http, Headers, RequestOptions } from '@angular/http';

import * as jsSHA from 'jssha';

export class BaseService {

    requestOptions = new RequestOptions();
    timestamp = Math.round(+new Date / 1000);

    constructor(protected http: Http) {
        this.requestOptions.headers = new Headers();
        this.requestOptions.headers.append('CB-VERSION', '2017-06-14');
        this.requestOptions.headers.append('CB-ACCESS-KEY', '');
        this.requestOptions.headers.append('CB-ACCESS-TIMESTAMP', this.timestamp.toString());
        this.requestOptions.headers.append('Content-Type', 'application/json');
    }

    public generateSign(method: string, endpoint: string) {
        const payLoad = new jsSHA('SHA-256', 'TEXT');
        payLoad.setHMACKey('', 'TEXT');
        payLoad.update(this.timestamp.toString() + method + endpoint);
        const hash = payLoad.getHMAC('HEX');

        return hash.toString();
    }
}
