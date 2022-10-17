import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonvisitmodelPageRoutingModule } from './commonvisitmodel-routing.module';

import { CommonvisitmodelPage } from './commonvisitmodel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonvisitmodelPageRoutingModule
  ],
  declarations: [CommonvisitmodelPage]
})
export class CommonvisitmodelPageModule {}
