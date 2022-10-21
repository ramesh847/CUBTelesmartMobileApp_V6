import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformancemodalPage } from './performancemodal.page';

const routes: Routes = [
  {
    path: '',
    component: PerformancemodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformancemodalPageRoutingModule {}
