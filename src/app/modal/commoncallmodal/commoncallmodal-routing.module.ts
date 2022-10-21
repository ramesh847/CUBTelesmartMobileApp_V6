import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommoncallmodalPage } from './commoncallmodal.page';

const routes: Routes = [
  {
    path: '',
    component: CommoncallmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommoncallmodalPageRoutingModule {}
