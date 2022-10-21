import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MywishprimarymodalPage } from './mywishprimarymodal.page';

const routes: Routes = [
  {
    path: '',
    component: MywishprimarymodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MywishprimarymodalPageRoutingModule {}
