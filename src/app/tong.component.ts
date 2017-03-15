import { Component,OnInit } from '@angular/core';

@Component({
    selector:'app-tong',
    template:`
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>`,
    styleUrls:['./tong.component.css']
})
export class TongComponent implements OnInit {
    title = 'Tour of Heroes';
    ngOnInit(): void {
    }
}

