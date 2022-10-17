import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MywishsecondarycustomerPage } from './mywishsecondarycustomer.page';

const routes: Routes = [
  {
    path: '',
    component: MywishsecondarycustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MywishsecondarycustomerPageRoutingModule {}
