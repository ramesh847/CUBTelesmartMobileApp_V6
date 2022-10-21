import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpressLeadsPage } from './express-leads.page';

const routes: Routes = [
  {
    path: '',
    component: ExpressLeadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpressLeadsPageRoutingModule {}
