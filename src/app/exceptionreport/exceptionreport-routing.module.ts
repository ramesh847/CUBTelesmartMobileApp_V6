import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExceptionreportPage } from './exceptionreport.page';

const routes: Routes = [
  {
    path: '',
    component: ExceptionreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExceptionreportPageRoutingModule {}
