import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyfollowupvisitmodalPageRoutingModule } from './myfollowupvisitmodal-routing.module';

import { MyfollowupvisitmodalPage } from './myfollowupvisitmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyfollowupvisitmodalPageRoutingModule
  ],
  declarations: [MyfollowupvisitmodalPage]
})
export class MyfollowupvisitmodalPageModule {}
