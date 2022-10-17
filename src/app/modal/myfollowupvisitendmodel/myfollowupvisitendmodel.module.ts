import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyfollowupvisitendmodelPageRoutingModule } from './myfollowupvisitendmodel-routing.module';

import { MyfollowupvisitendmodelPage } from './myfollowupvisitendmodel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyfollowupvisitendmodelPageRoutingModule
  ],
  declarations: [MyfollowupvisitendmodelPage]
})
export class MyfollowupvisitendmodelPageModule {}
