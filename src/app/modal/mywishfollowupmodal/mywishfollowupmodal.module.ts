import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MywishfollowupmodalPageRoutingModule } from './mywishfollowupmodal-routing.module';

import { MywishfollowupmodalPage } from './mywishfollowupmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MywishfollowupmodalPageRoutingModule
  ],
  declarations: [MywishfollowupmodalPage]
})
export class MywishfollowupmodalPageModule {}
