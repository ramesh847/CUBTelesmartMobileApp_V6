import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddinsurancePageRoutingModule } from './addinsurance-routing.module';

import { AddinsurancePage } from './addinsurance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddinsurancePageRoutingModule
  ],
  declarations: [AddinsurancePage]
})
export class AddinsurancePageModule {}
