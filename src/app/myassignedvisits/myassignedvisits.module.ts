import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyassignedvisitsPageRoutingModule } from './myassignedvisits-routing.module';

import { MyassignedvisitsPage } from './myassignedvisits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyassignedvisitsPageRoutingModule
  ],
  declarations: [MyassignedvisitsPage]
})
export class MyassignedvisitsPageModule {}
