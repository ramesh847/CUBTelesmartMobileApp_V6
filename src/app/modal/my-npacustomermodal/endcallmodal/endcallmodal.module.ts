import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndcallmodalPageRoutingModule } from './endcallmodal-routing.module';

import { EndcallmodalPage } from './endcallmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndcallmodalPageRoutingModule
  ],
  declarations: [EndcallmodalPage]
})
export class EndcallmodalPageModule {}
