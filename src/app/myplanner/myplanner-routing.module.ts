import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyplannerPage } from './myplanner.page';

const routes: Routes = [
  {
    path: '',
    component: MyplannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyplannerPageRoutingModule {}
