import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtgsNeftmodalPage } from './rtgs-neftmodal.page';

const routes: Routes = [
  {
    path: '',
    component: RtgsNeftmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtgsNeftmodalPageRoutingModule {}
