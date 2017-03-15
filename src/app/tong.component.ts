import { Component,OnInit } from '@angular/core';

@Component({
    selector:'app-tong',
    template:`
        <h1>{{title}}</h1>`
})
export class TongComponent implements OnInit {
    title = 'GuutonG';
    ngOnInit(): void {
    }
}

