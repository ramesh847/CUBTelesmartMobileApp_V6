import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyzerocustomermodalPage } from './myzerocustomermodal.page';

const routes: Routes = [
  {
    path: '',
    component: MyzerocustomermodalPage
  },
  {
    path: 'endcallmodal',
    loadChildren: () => import('./endcallmodal/endcallmodal.module').then( m => m.EndcallmodalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyzerocustomermodalPageRoutingModule {}
