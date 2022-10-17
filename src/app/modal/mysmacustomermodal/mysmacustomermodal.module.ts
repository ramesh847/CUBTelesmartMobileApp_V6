import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MysmacustomermodalPageRoutingModule } from './mysmacustomermodal-routing.module';

import { MysmacustomermodalPage } from './mysmacustomermodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MysmacustomermodalPageRoutingModule
  ],
  declarations: [MysmacustomermodalPage]
})
export class MysmacustomermodalPageModule {}
