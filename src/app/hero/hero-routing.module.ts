import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const heroRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "hero/:id", component: HeroDetailsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(heroRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class HeroRoutingModule { }
