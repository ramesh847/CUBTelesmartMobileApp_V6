import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MywishprimarymodalPageRoutingModule } from './mywishprimarymodal-routing.module';

import { MywishprimarymodalPage } from './mywishprimarymodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MywishprimarymodalPageRoutingModule
  ],
  declarations: [MywishprimarymodalPage]
})
export class MywishprimarymodalPageModule {}
