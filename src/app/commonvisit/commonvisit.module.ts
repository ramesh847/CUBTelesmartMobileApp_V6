import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonvisitPageRoutingModule } from './commonvisit-routing.module';

import { CommonvisitPage } from './commonvisit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonvisitPageRoutingModule
  ],
  declarations: [CommonvisitPage]
})
export class CommonvisitPageModule {}
