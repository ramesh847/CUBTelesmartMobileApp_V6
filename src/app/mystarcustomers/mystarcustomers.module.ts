import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MystarcustomersPageRoutingModule } from './mystarcustomers-routing.module';

import { MystarcustomersPage } from './mystarcustomers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MystarcustomersPageRoutingModule
  ],
  declarations: [MystarcustomersPage]
})
export class MystarcustomersPageModule {}
