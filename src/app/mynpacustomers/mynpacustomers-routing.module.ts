import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MynpacustomersPage } from './mynpacustomers.page';

const routes: Routes = [
  {
    path: '',
    component: MynpacustomersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MynpacustomersPageRoutingModule {}
