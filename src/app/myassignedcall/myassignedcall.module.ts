import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyassignedcallPageRoutingModule } from './myassignedcall-routing.module';

import { MyassignedcallPage } from './myassignedcall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyassignedcallPageRoutingModule
  ],
  declarations: [MyassignedcallPage]
})
export class MyassignedcallPageModule {}
