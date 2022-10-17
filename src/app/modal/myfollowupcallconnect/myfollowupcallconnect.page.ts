import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pipe, PipeTransform } from "@angular/core";
import { ApiServiceService } from 'src/app/service/api-service.service';
@Component({
  selector: 'app-myfollowupcallconnect',
  templateUrl: './myfollowupcallconnect.page.html',
  styleUrls: ['./myfollowupcallconnect.page.scss'],
})
export class MyfollowupcallconnectPage implements OnInit {
  clickcall: any;
  callerName:any;
  callerNumber:any;
  constructor(private Apiservice: ApiServiceService, private navParams: NavParams, public modalController: ModalController,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.callerName = window.localStorage['userName'];
    this.callerNumber = window.localStorage['mobile'];
    this.clickcall = this.navParams.get('Data');
    console.log(this.clickcall);
  }
  modelDissmiss() {
    this.modalController.dismiss();
  }
}
