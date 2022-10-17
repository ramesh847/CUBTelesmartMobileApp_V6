import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtheraccountsPage } from './otheraccounts.page';

const routes: Routes = [
  {
    path: '',
    component: OtheraccountsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtheraccountsPageRoutingModule {}
