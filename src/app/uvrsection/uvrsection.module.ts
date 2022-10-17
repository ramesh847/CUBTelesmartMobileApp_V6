import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UvrsectionPageRoutingModule } from './uvrsection-routing.module';

import { UvrsectionPage } from './uvrsection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UvrsectionPageRoutingModule
  ],
  declarations: [UvrsectionPage]
})
export class UvrsectionPageModule {}
