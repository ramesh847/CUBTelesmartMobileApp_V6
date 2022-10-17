import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtheraccountsPageRoutingModule } from './otheraccounts-routing.module';

import { OtheraccountsPage } from './otheraccounts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtheraccountsPageRoutingModule
  ],
  declarations: [OtheraccountsPage]
})
export class OtheraccountsPageModule {}
