import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyzerocustomermodalPageRoutingModule } from './myzerocustomermodal-routing.module';

import { MyzerocustomermodalPage } from './myzerocustomermodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyzerocustomermodalPageRoutingModule
  ],
  declarations: [MyzerocustomermodalPage]
})
export class MyzerocustomermodalPageModule {}
