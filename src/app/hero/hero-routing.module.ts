import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { RouterModule } from '@angular/router/src/router_module';

const heroRoutes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "hero/:id", component: HeroDetailsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(heroRoutes)
  ],
  exports : [
    RouterModule
  ],
  declarations: []
})
export class HeroRoutingModule { }
