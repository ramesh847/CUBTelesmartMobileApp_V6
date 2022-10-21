import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyassigncallmodalPageRoutingModule } from './myassigncallmodal-routing.module';

import { MyassigncallmodalPage } from './myassigncallmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    MyassigncallmodalPageRoutingModule
  ],
  declarations: [MyassigncallmodalPage]
})
export class MyassigncallmodalPageModule {}
