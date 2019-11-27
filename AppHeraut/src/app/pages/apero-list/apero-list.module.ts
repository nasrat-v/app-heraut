import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

//import { AperoListPageRoutingModule } from './apero-list-routing.module';

import { AperoListPage } from './apero-list.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: "", component: AperoListPage }]),
  ],
  declarations: [AperoListPage]
})
export class AperoListPageModule {}
