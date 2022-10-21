import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MywishsecondarymodalPageRoutingModule } from './mywishsecondarymodal-routing.module';

import { MywishsecondarymodalPage } from './mywishsecondarymodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MywishsecondarymodalPageRoutingModule
  ],
  declarations: [MywishsecondarymodalPage]
})
export class MywishsecondarymodalPageModule {}
