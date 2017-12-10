import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppComponent } from './app.component';
import { HeroService } from "./hero/hero.service";
import { MessageService } from './message/message.service';
import { InMemoryDataService } from "./in-memory-data.service";

import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessagesComponent } from './message/messages/messages.component';
import { ComposeMessageComponent } from './message/compose-message.component';

import { HeroesModule } from './hero/heroes.module';
import { CrisisCenterModule } from './crisis/crisis-center.module';
import { Routes } from '@angular/router';

const routers : Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ComposeMessageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    ),
    CrisisCenterModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
