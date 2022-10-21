import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtheraccountmodalPage } from './otheraccountmodal.page';

const routes: Routes = [
  {
    path: '',
    component: OtheraccountmodalPage
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
export class OtheraccountmodalPageRoutingModule {}
