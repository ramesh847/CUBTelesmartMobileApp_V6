import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExceptionreportPageRoutingModule } from './exceptionreport-routing.module';

import { ExceptionreportPage } from './exceptionreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExceptionreportPageRoutingModule
  ],
  declarations: [ExceptionreportPage]
})
export class ExceptionreportPageModule {}
