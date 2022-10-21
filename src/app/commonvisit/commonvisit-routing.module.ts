import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonvisitPage } from './commonvisit.page';

const routes: Routes = [
  {
    path: '',
    component: CommonvisitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonvisitPageRoutingModule {}
