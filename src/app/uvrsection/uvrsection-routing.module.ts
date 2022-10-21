import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UvrsectionPage } from './uvrsection.page';

const routes: Routes = [
  {
    path: '',
    component: UvrsectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UvrsectionPageRoutingModule {}
