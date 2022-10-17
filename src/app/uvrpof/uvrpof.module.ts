import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UvrpofPageRoutingModule } from './uvrpof-routing.module';

import { UvrpofPage } from './uvrpof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UvrpofPageRoutingModule
  ],
  declarations: [UvrpofPage]
})
export class UvrpofPageModule {}
