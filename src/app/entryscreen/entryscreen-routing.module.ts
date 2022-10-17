import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryscreenPage } from './entryscreen.page';

const routes: Routes = [
  {
    path: '',
    component: EntryscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntryscreenPageRoutingModule {}
