import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandcollectionmodalPage } from './demandcollectionmodal.page';

const routes: Routes = [
  {
    path: '',
    component: DemandcollectionmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandcollectionmodalPageRoutingModule {}
