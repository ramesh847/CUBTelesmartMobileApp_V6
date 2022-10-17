import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyassigncallmodalPage } from './myassigncallmodal.page';

const routes: Routes = [
  {
    path: '',
    component: MyassigncallmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyassigncallmodalPageRoutingModule {}
