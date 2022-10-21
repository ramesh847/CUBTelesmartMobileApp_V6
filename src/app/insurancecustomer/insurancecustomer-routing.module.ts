import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsurancecustomerPage } from './insurancecustomer.page';

const routes: Routes = [
  {
    path: '',
    component: InsurancecustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsurancecustomerPageRoutingModule {}
