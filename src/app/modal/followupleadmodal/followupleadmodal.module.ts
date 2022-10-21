import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowupleadmodalPageRoutingModule } from './followupleadmodal-routing.module';

import { FollowupleadmodalPage } from './followupleadmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowupleadmodalPageRoutingModule
  ],
  declarations: [FollowupleadmodalPage]
})
export class FollowupleadmodalPageModule {}
