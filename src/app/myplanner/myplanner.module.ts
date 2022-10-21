import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyplannerPageRoutingModule } from './myplanner-routing.module';

import { MyplannerPage } from './myplanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyplannerPageRoutingModule
  ],
  declarations: [MyplannerPage]
})
export class MyplannerPageModule {}
