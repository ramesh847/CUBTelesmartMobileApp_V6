import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpressLeadsPageRoutingModule } from './express-leads-routing.module';

import { ExpressLeadsPage } from './express-leads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpressLeadsPageRoutingModule
  ],
  declarations: [ExpressLeadsPage]
})
export class ExpressLeadsPageModule {}
