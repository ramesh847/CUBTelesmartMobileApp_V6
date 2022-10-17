import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalmycustomerPage } from './modalmycustomer.page';

const routes: Routes = [
  {
    path: '',
    component: ModalmycustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalmycustomerPageRoutingModule {}
