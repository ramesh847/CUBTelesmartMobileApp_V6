import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MysmacustomersPage } from './mysmacustomers.page';

const routes: Routes = [
  {
    path: '',
    component: MysmacustomersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MysmacustomersPageRoutingModule {}
