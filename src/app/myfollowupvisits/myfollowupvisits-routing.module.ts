import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyfollowupvisitsPage } from './myfollowupvisits.page';

const routes: Routes = [
  {
    path: '',
    component: MyfollowupvisitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyfollowupvisitsPageRoutingModule {}
