import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyfollowupvisitmodalPage } from './myfollowupvisitmodal.page';

const routes: Routes = [
  {
    path: '',
    component: MyfollowupvisitmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyfollowupvisitmodalPageRoutingModule {}
