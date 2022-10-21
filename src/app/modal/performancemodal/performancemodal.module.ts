import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformancemodalPageRoutingModule } from './performancemodal-routing.module';

import { PerformancemodalPage } from './performancemodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformancemodalPageRoutingModule
  ],
  declarations: [PerformancemodalPage]
})
export class PerformancemodalPageModule {}
