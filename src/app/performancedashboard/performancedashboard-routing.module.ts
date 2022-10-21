import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformancedashboardPage } from './performancedashboard.page';

const routes: Routes = [
  {
    path: '',
    component: PerformancedashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformancedashboardPageRoutingModule {}
