import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyfollowupcallconnectPage } from './myfollowupcallconnect.page';

const routes: Routes = [
  {
    path: '',
    component: MyfollowupcallconnectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyfollowupcallconnectPageRoutingModule {}
