import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MywishsecondarycustomerPageRoutingModule } from './mywishsecondarycustomer-routing.module';

import { MywishsecondarycustomerPage } from './mywishsecondarycustomer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MywishsecondarycustomerPageRoutingModule
  ],
  declarations: [MywishsecondarycustomerPage]
})
export class MywishsecondarycustomerPageModule {}
