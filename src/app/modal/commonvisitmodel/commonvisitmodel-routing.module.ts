import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonvisitmodelPage } from './commonvisitmodel.page';

const routes: Routes = [
  {
    path: '',
    component: CommonvisitmodelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonvisitmodelPageRoutingModule {}
