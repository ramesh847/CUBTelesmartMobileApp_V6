import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignedvisitupdatemodalPageRoutingModule } from './assignedvisitupdatemodal-routing.module';

import { AssignedvisitupdatemodalPage } from './assignedvisitupdatemodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignedvisitupdatemodalPageRoutingModule
  ],
  declarations: [AssignedvisitupdatemodalPage]
})
export class AssignedvisitupdatemodalPageModule {}
