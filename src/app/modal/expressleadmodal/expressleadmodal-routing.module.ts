import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpressleadmodalPage } from './expressleadmodal.page';

const routes: Routes = [
  {
    path: '',
    component: ExpressleadmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpressleadmodalPageRoutingModule {}
