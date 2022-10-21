import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MystarcustomersPage } from './mystarcustomers.page';

const routes: Routes = [
  {
    path: '',
    component: MystarcustomersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MystarcustomersPageRoutingModule {}
