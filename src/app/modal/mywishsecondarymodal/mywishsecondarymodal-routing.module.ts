import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MywishsecondarymodalPage } from './mywishsecondarymodal.page';

const routes: Routes = [
  {
    path: '',
    component: MywishsecondarymodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MywishsecondarymodalPageRoutingModule {}
