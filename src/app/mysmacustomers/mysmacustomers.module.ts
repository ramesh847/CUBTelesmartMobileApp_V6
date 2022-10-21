import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MysmacustomersPageRoutingModule } from './mysmacustomers-routing.module';

import { MysmacustomersPage } from './mysmacustomers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MysmacustomersPageRoutingModule
  ],
  declarations: [MysmacustomersPage]
})
export class MysmacustomersPageModule {}
