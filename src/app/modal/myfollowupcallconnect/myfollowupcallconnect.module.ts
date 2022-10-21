import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyfollowupcallconnectPageRoutingModule } from './myfollowupcallconnect-routing.module';

import { MyfollowupcallconnectPage } from './myfollowupcallconnect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyfollowupcallconnectPageRoutingModule
  ],
  declarations: [MyfollowupcallconnectPage]
})
export class MyfollowupcallconnectPageModule {}
