import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalmycustomerPageRoutingModule } from './modalmycustomer-routing.module';

import { ModalmycustomerPage } from './modalmycustomer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalmycustomerPageRoutingModule
  ],
  declarations: [ModalmycustomerPage]
})
export class ModalmycustomerPageModule {}
