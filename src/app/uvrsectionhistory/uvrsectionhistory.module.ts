import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UvrsectionhistoryPageRoutingModule } from './uvrsectionhistory-routing.module';

import { UvrsectionhistoryPage } from './uvrsectionhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UvrsectionhistoryPageRoutingModule
  ],
  declarations: [UvrsectionhistoryPage]
})
export class UvrsectionhistoryPageModule {}
