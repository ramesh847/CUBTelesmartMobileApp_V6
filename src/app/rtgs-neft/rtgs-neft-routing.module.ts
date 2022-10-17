import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RTGSNEFTPage } from './rtgs-neft.page';

const routes: Routes = [
  {
    path: '',
    component: RTGSNEFTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RTGSNEFTPageRoutingModule {}
