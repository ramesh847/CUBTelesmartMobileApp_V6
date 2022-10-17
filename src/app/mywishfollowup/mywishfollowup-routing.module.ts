import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MywishfollowupPage } from './mywishfollowup.page';

const routes: Routes = [
  {
    path: '',
    component: MywishfollowupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MywishfollowupPageRoutingModule {}
