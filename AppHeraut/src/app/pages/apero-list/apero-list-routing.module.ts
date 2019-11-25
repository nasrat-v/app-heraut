import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AperoListPage } from './apero-list.page';

const routes: Routes = [
  {
    path: '',
    component: AperoListPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AperoListPageRoutingModule {}
