import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisDetailsComponent } from './crisis-details/crisis-details.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

@NgModule({
  imports: [
    CommonModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
    CrisisDetailsComponent,
    CrisisListComponent
  ]
})
export class CrisisCenterModule { }
