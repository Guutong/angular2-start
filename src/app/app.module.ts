import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TongComponent } from './tong.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
@NgModule({
  declarations: [
    AppComponent,
    TongComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  providers: [
    HeroService
  ],
  bootstrap: [TongComponent]
})
export class AppModule { }
