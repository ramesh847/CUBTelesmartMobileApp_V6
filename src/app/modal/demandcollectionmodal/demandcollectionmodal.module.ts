import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandcollectionmodalPageRoutingModule } from './demandcollectionmodal-routing.module';

import { DemandcollectionmodalPage } from './demandcollectionmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandcollectionmodalPageRoutingModule
  ],
  declarations: [DemandcollectionmodalPage]
})
export class DemandcollectionmodalPageModule {}
