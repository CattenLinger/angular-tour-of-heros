import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './message/compose-message.component';

const routes: Routes = [
  { path: "", redirectTo: "/heroes", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
  { path : "compose", component : ComposeMessageComponent, outlet : "popup"}
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