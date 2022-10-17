import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsurancecustomerPageRoutingModule } from './insurancecustomer-routing.module';

import { InsurancecustomerPage } from './insurancecustomer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsurancecustomerPageRoutingModule
  ],
  declarations: [InsurancecustomerPage]
})
export class InsurancecustomerPageModule {}
