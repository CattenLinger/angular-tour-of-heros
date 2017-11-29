import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HeroesComponent } from "./hero/heroes/heroes.component";
import { HeroDetailsComponent } from "./hero/hero-details/hero-details.component";
import { DashboardComponent } from "./hero/dashboard/dashboard.component";
import { CrisisCenterComponent } from "./crisis/crisis-center/crisis-center.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "crisis", component: CrisisCenterComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "details/:id", component: HeroDetailsComponent },
  { path: "", redirectTo: "/heroes", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }