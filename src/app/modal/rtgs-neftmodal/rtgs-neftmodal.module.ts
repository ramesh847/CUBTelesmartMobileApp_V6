import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtgsNeftmodalPageRoutingModule } from './rtgs-neftmodal-routing.module';

import { RtgsNeftmodalPage } from './rtgs-neftmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtgsNeftmodalPageRoutingModule
  ],
  declarations: [RtgsNeftmodalPage]
})
export class RtgsNeftmodalPageModule {}
