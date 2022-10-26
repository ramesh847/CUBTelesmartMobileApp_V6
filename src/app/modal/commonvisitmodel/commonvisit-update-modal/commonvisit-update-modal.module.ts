import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonvisitUpdateModalPageRoutingModule } from './commonvisit-update-modal-routing.module';

import { CommonvisitUpdateModalPage } from './commonvisit-update-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonvisitUpdateModalPageRoutingModule
  ],
  declarations: [CommonvisitUpdateModalPage]
})
export class CommonvisitUpdateModalPageModule {}
