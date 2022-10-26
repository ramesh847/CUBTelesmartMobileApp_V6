import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonvisitUpdateModalPage } from './commonvisit-update-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CommonvisitUpdateModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonvisitUpdateModalPageRoutingModule {}
