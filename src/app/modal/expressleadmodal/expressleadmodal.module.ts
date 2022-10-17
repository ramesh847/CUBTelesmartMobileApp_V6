import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpressleadmodalPageRoutingModule } from './expressleadmodal-routing.module';

import { ExpressleadmodalPage } from './expressleadmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpressleadmodalPageRoutingModule
  ],
  declarations: [ExpressleadmodalPage]
})
export class ExpressleadmodalPageModule {}
