import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalsheetPage } from './goalsheet.page';

const routes: Routes = [
  {
    path: '',
    component: GoalsheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalsheetPageRoutingModule {}
