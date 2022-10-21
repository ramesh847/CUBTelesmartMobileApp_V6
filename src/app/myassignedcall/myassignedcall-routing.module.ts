import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyassignedcallPage } from './myassignedcall.page';

const routes: Routes = [
  {
    path: '',
    component: MyassignedcallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyassignedcallPageRoutingModule {}
