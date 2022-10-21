import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndcallmodalPage } from './endcallmodal.page';

const routes: Routes = [
  {
    path: '',
    component: EndcallmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndcallmodalPageRoutingModule {}
