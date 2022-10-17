import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandcollectionPage } from './demandcollection.page';

const routes: Routes = [
  {
    path: '',
    component: DemandcollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandcollectionPageRoutingModule {}
