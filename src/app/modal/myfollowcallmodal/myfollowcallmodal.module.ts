import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyfollowcallmodalPageRoutingModule } from './myfollowcallmodal-routing.module';

import { MyfollowcallmodalPage } from './myfollowcallmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyfollowcallmodalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MyfollowcallmodalPage]
})
export class MyfollowcallmodalPageModule {}
