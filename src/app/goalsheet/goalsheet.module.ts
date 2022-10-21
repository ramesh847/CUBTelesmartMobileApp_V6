import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalsheetPageRoutingModule } from './goalsheet-routing.module';

import { GoalsheetPage } from './goalsheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalsheetPageRoutingModule
  ],
  declarations: [GoalsheetPage]
})
export class GoalsheetPageModule {}
