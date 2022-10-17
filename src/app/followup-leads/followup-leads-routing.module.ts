import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowupLeadsPage } from './followup-leads.page';

const routes: Routes = [
  {
    path: '',
    component: FollowupLeadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowupLeadsPageRoutingModule {}
