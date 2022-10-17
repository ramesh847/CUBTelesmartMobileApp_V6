import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MynpacustomersPageRoutingModule } from './mynpacustomers-routing.module';

import { MynpacustomersPage } from './mynpacustomers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MynpacustomersPageRoutingModule
  ],
  declarations: [MynpacustomersPage]
})
export class MynpacustomersPageModule {}
