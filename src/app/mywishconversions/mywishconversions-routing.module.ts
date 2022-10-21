import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MywishconversionsPage } from './mywishconversions.page';

const routes: Routes = [
  {
    path: '',
    component: MywishconversionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MywishconversionsPageRoutingModule {}
