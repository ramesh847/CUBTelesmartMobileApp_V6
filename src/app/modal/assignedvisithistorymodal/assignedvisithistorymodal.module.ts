import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignedvisithistorymodalPageRoutingModule } from './assignedvisithistorymodal-routing.module';

import { AssignedvisithistorymodalPage } from './assignedvisithistorymodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignedvisithistorymodalPageRoutingModule
  ],
  declarations: [AssignedvisithistorymodalPage]
})
export class AssignedvisithistorymodalPageModule {}
