import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UvrallsectionPageRoutingModule } from './uvrallsection-routing.module';

import { UvrallsectionPage } from './uvrallsection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UvrallsectionPageRoutingModule
  ],
  declarations: [UvrallsectionPage]
})
export class UvrallsectionPageModule {}
