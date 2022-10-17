import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandcollectionPageRoutingModule } from './demandcollection-routing.module';

import { DemandcollectionPage } from './demandcollection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandcollectionPageRoutingModule
  ],
  declarations: [DemandcollectionPage]
})
export class DemandcollectionPageModule {}
