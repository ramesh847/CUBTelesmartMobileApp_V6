import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MywishaddcustomerPageRoutingModule } from './mywishaddcustomer-routing.module';

import { MywishaddcustomerPage } from './mywishaddcustomer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MywishaddcustomerPageRoutingModule
  ],
  declarations: [MywishaddcustomerPage]
})
export class MywishaddcustomerPageModule {}
