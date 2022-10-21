import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyNPAcustomermodalPage } from './my-npacustomermodal.page';

const routes: Routes = [
  {
    path: '',
    component: MyNPAcustomermodalPage
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
export class MyNPAcustomermodalPageRoutingModule {}
