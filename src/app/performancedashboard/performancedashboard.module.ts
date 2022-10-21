import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformancedashboardPageRoutingModule } from './performancedashboard-routing.module';

import { PerformancedashboardPage } from './performancedashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformancedashboardPageRoutingModule
  ],
  declarations: [PerformancedashboardPage]
})
export class PerformancedashboardPageModule {}
