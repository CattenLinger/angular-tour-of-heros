import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

import { HeroService } from "./hero.service";

import { HeroRoutingModule } from "./hero-routing.module";

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
    HeroDetailsComponent
  ]
})
export class HeroesModule { }
