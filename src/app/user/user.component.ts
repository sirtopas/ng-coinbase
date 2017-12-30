import { Component, OnInit } from '@angular/core';

import { User } from '../shared/model/user';

@Component({
    selector: 'coinbase-user',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    currentUser: User;

    constructor() { }

    ngOnInit() { }
}
