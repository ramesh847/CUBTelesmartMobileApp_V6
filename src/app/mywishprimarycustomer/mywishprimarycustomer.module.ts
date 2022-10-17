import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MywishprimarycustomerPageRoutingModule } from './mywishprimarycustomer-routing.module';

import { MywishprimarycustomerPage } from './mywishprimarycustomer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MywishprimarycustomerPageRoutingModule
  ],
  declarations: [MywishprimarycustomerPage]
})
export class MywishprimarycustomerPageModule {}
