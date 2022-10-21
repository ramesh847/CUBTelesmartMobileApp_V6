import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddinsurancePage } from './addinsurance.page';

const routes: Routes = [
  {
    path: '',
    component: AddinsurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddinsurancePageRoutingModule {}
