import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MywishfollowupmodalPage } from './mywishfollowupmodal.page';

const routes: Routes = [
  {
    path: '',
    component: MywishfollowupmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MywishfollowupmodalPageRoutingModule {}
