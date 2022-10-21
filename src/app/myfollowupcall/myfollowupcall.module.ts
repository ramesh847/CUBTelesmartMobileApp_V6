import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyfollowupcallPageRoutingModule } from './myfollowupcall-routing.module';

import { MyfollowupcallPage } from './myfollowupcall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyfollowupcallPageRoutingModule
  ],
  declarations: [MyfollowupcallPage]
})
export class MyfollowupcallPageModule {}
