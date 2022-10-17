import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommoncallPageRoutingModule } from './commoncall-routing.module';

import { CommoncallPage } from './commoncall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommoncallPageRoutingModule
  ],
  declarations: [CommoncallPage]
})
export class CommoncallPageModule {}
