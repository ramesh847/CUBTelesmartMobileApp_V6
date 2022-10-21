import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UvrsectionhistoryPage } from './uvrsectionhistory.page';

const routes: Routes = [
  {
    path: '',
    component: UvrsectionhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UvrsectionhistoryPageRoutingModule {}
