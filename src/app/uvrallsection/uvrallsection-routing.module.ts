import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UvrallsectionPage } from './uvrallsection.page';

const routes: Routes = [
  {
    path: '',
    component: UvrallsectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UvrallsectionPageRoutingModule {}
