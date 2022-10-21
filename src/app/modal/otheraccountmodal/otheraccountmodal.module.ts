import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtheraccountmodalPageRoutingModule } from './otheraccountmodal-routing.module';

import { OtheraccountmodalPage } from './otheraccountmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtheraccountmodalPageRoutingModule
  ],
  declarations: [OtheraccountmodalPage]
})
export class OtheraccountmodalPageModule {}
