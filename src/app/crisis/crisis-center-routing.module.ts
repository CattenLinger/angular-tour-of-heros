import { NgModule } from '@angular/core';

import { Routes } from '@angular/router/src/config';
import { RouterModule } from '@angular/router';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailsComponent } from './crisis-details/crisis-details.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';

const crisisCenterRoute: Routes = [
  {
    "path" : "crisis",
    component: CrisisCenterComponent,
    children : [
      { 
        path : "" ,
        component: CrisisListComponent,
        children : [
          { path : ":id", component : CrisisDetailsComponent },
          { path : "", component : CrisisCenterHomeComponent }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoute)
  ],
  exports : [
    RouterModule
  ]
})
export class CrisisCenterRoutingModule { }
