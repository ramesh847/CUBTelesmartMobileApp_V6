import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommoncallmodalPageRoutingModule } from './commoncallmodal-routing.module';

import { CommoncallmodalPage } from './commoncallmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommoncallmodalPageRoutingModule
  ],
  declarations: [CommoncallmodalPage]
})
export class CommoncallmodalPageModule {}
