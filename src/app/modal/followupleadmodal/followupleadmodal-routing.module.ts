import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowupleadmodalPage } from './followupleadmodal.page';

const routes: Routes = [
  {
    path: '',
    component: FollowupleadmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowupleadmodalPageRoutingModule {}
