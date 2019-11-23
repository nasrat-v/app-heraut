import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AperoDetailsPage } from './apero-details.page';

const routes: Routes = [
  {
    path: '',
    component: AperoDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AperoDetailsPageRoutingModule {}
