import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyNPAcustomermodalPageRoutingModule } from './my-npacustomermodal-routing.module';

import { MyNPAcustomermodalPage } from './my-npacustomermodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyNPAcustomermodalPageRoutingModule
  ],
  declarations: [MyNPAcustomermodalPage]
})
export class MyNPAcustomermodalPageModule {}
