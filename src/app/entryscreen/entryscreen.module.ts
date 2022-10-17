import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntryscreenPageRoutingModule } from './entryscreen-routing.module';

import { EntryscreenPage } from './entryscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EntryscreenPageRoutingModule
  ],
  declarations: [EntryscreenPage]
})
export class EntryscreenPageModule {}
