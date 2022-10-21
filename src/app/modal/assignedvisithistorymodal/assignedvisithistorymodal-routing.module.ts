import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignedvisithistorymodalPage } from './assignedvisithistorymodal.page';

const routes: Routes = [
  {
    path: '',
    component: AssignedvisithistorymodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignedvisithistorymodalPageRoutingModule {}
