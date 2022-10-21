import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyassignedvisitsPage } from './myassignedvisits.page';

const routes: Routes = [
  {
    path: '',
    component: MyassignedvisitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyassignedvisitsPageRoutingModule {}
