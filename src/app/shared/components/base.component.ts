import { Component, OnInit } from '@angular/core';

@Component({
    template: ''
})

export class BaseComponent implements OnInit {

    timestamp = Math.round(+new Date / 1000);

    constructor() { }

    ngOnInit() { }
}
