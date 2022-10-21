import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyfollowcallmodalPage } from './myfollowcallmodal.page';

const routes: Routes = [
  {
    path: '',
    component: MyfollowcallmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyfollowcallmodalPageRoutingModule {}
