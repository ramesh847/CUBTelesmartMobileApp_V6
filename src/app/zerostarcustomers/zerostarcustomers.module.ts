import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZerostarcustomersPageRoutingModule } from './zerostarcustomers-routing.module';

import { ZerostarcustomersPage } from './zerostarcustomers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZerostarcustomersPageRoutingModule
  ],
  declarations: [ZerostarcustomersPage]
})
export class ZerostarcustomersPageModule {}
