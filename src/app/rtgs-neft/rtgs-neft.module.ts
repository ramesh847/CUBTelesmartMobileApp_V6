import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RTGSNEFTPageRoutingModule } from './rtgs-neft-routing.module';

import { RTGSNEFTPage } from './rtgs-neft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RTGSNEFTPageRoutingModule
  ],
  declarations: [RTGSNEFTPage]
})
export class RTGSNEFTPageModule {}
