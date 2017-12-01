import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

import { HeroService } from "./hero.service";

import { HeroRoutingModule } from "./hero-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  providers : [
    HeroService
  ],
  declarations: [
    HeroesComponent,
    HeroDetailsComponent,
    DashboardComponent,
    HeroSearchComponent
  ]
})
export class HeroesModule { }
