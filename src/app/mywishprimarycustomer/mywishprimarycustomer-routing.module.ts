import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MywishprimarycustomerPage } from './mywishprimarycustomer.page';

const routes: Routes = [
  {
    path: '',
    component: MywishprimarycustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MywishprimarycustomerPageRoutingModule {}
