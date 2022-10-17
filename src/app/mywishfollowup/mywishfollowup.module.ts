import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MywishfollowupPageRoutingModule } from './mywishfollowup-routing.module';

import { MywishfollowupPage } from './mywishfollowup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MywishfollowupPageRoutingModule
  ],
  declarations: [MywishfollowupPage]
})
export class MywishfollowupPageModule {}
