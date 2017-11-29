import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppComponent } from './app.component';
import { HeroesComponent } from './hero/heroes/heroes.component';
import { HeroDetailsComponent } from './hero/hero-details/hero-details.component';

import { HeroService } from "./hero/hero.service";
import { MessageService } from './message/message.service';
import { InMemoryDataService } from "./in-memory-data.service";

import { AppRoutingModule } from './app-routing.module';

import { MessagesComponent } from './message/messages/messages.component';
import { DashboardComponent } from './hero/dashboard/dashboard.component';
import { HeroSearchComponent } from './hero/hero-search/hero-search.component';
import { CrisisCenterComponent } from './crisis/crisis-center/crisis-center.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CrisisListComponent } from './crisis/crisis-list/crisis-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    CrisisCenterComponent,
    PageNotFoundComponent,
    CrisisListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
