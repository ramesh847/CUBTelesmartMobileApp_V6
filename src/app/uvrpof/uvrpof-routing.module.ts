import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UvrpofPage } from './uvrpof.page';

const routes: Routes = [
  {
    path: '',
    component: UvrpofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UvrpofPageRoutingModule {}
