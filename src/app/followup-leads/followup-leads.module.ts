import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowupLeadsPageRoutingModule } from './followup-leads-routing.module';

import { FollowupLeadsPage } from './followup-leads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowupLeadsPageRoutingModule
  ],
  declarations: [FollowupLeadsPage]
})
export class FollowupLeadsPageModule {}
