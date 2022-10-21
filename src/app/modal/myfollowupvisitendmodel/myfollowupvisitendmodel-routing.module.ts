import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyfollowupvisitendmodelPage } from './myfollowupvisitendmodel.page';

const routes: Routes = [
  {
    path: '',
    component: MyfollowupvisitendmodelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyfollowupvisitendmodelPageRoutingModule {}
