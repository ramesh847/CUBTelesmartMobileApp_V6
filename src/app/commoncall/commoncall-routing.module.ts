import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommoncallPage } from './commoncall.page';

const routes: Routes = [
  {
    path: '',
    component: CommoncallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommoncallPageRoutingModule {}
