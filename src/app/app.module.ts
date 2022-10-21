import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { ModalmycustomerPageModule } from './modal/modalmycustomer/modalmycustomer.module';
import { MyzerocustomermodalPageModule } from './modal/myzerocustomermodal/myzerocustomermodal.module';
import { MysmacustomermodalPageModule } from './modal/mysmacustomermodal/mysmacustomermodal.module'; 
import { MyNPAcustomermodalPageModule } from './modal/my-npacustomermodal/my-npacustomermodal.module';
import { DemandcollectionPageModule } from './demandcollection/demandcollection.module';
import { OtheraccountmodalPageModule } from './modal/otheraccountmodal/otheraccountmodal.module';
import { RtgsNeftmodalPageModule } from './modal/rtgs-neftmodal/rtgs-neftmodal.module';
// import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { MyfollowupvisitmodalPageModule } from './modal/myfollowupvisitmodal/myfollowupvisitmodal.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
// import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [MyfollowupvisitmodalPageModule,RtgsNeftmodalPageModule,OtheraccountmodalPageModule,DemandcollectionPageModule,
    MyNPAcustomermodalPageModule,MysmacustomermodalPageModule,MyzerocustomermodalPageModule,
    ModalmycustomerPageModule,BrowserModule, 
    IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule, ReactiveFormsModule,
    FilterPipeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,Geolocation,HTTP,NativeGeocoder
  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
