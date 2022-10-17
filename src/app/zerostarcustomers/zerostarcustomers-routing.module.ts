import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZerostarcustomersPage } from './zerostarcustomers.page';

const routes: Routes = [
  {
    path: '',
    component: ZerostarcustomersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZerostarcustomersPageRoutingModule {}
