import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitvisitreportPage } from './unitvisitreport.page';

const routes: Routes = [
  {
    path: '',
    component: UnitvisitreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitvisitreportPageRoutingModule {}
