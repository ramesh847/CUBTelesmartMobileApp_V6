import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyfollowupvisitsPageRoutingModule } from './myfollowupvisits-routing.module';

import { MyfollowupvisitsPage } from './myfollowupvisits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyfollowupvisitsPageRoutingModule
  ],
  declarations: [MyfollowupvisitsPage]
})
export class MyfollowupvisitsPageModule {}
