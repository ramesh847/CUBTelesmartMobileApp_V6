import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitvisitreportPageRoutingModule } from './unitvisitreport-routing.module';

import { UnitvisitreportPage } from './unitvisitreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitvisitreportPageRoutingModule
  ],
  declarations: [UnitvisitreportPage]
})
export class UnitvisitreportPageModule {}
