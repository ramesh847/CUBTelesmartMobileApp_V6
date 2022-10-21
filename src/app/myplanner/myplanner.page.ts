import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../service/api-service.service';
import { ModalController } from '@ionic/angular';
import { MyfollowcallmodalPage } from '../modal/myfollowcallmodal/myfollowcallmodal.page';
import { MyassigncallmodalPage } from '../modal/myassigncallmodal/myassigncallmodal.page';
@Component({
  selector: 'app-myplanner',
  templateUrl: './myplanner.page.html',
  styleUrls: ['./myplanner.page.scss'],
})
export class MyplannerPage implements OnInit {
  ins_type: any;
  ins_ref: any;
  ins_source: any;
  ClickAccess: boolean = false;
  accessResp: any;
  todayfollowupdata: any =[];
  todayassigneddata: any =[];
  callOutCome: any;
  businessunit: any;
  productGroup: any;
  product: any;
  premiumPayTerm: any;
  premiumPayMode: any;
  TodaysAssigned: boolean = true;
  TodaysFollowup: boolean = false;
  firstWords: any[];
  constructor(private apiService: ApiServiceService,private modalController: ModalController) { }

  ngOnInit() {
    this.clickCallAccess();
    this.getInsuranceType();
    this.getInsuranceSource();
    this.getInsurancedata();
    this.getTodayAssignData();
  }
  CheckBoxTodaysAssigned(value, checked) {
    console.log(value, checked);
    if (value == 'TodaysAssigned' && checked == true) {
      this.TodaysFollowup = false;
    
      this.TodaysAssigned = true;
      this.getTodayAssignData();
    }
    else if (value == 'TodaysAssigned' && checked == false) {
      this.TodaysFollowup = true;
    
      this.TodaysAssigned = false;
      this.getTodayFollowData();
    }
  }

  CheckBoxTodaysFollowup(value, checked) {
    if (value == 'TodaysFollowup' && checked == true) {
      this.TodaysFollowup = true;
      this.TodaysAssigned = false;
      this.getTodayFollowData();
    }
    else if (value == 'TodaysFollowup' && checked == false) {
      this.TodaysFollowup = false;
      this.TodaysAssigned = true;
      this.getTodayAssignData();
    }
  }
  clickCallAccess() {

    var userid = window.localStorage['userID'];
    this.apiService.AccesstoClick(userid).then(response => {
      this.accessResp = JSON.parse(response.data);
      if (this.accessResp == 'A') {
        console.log(this.accessResp);
        this.ClickAccess = true;
      } else {
        this.ClickAccess = false;
      }
    })
  }
  getTodayFollowData() {

    var CUSTID = window.localStorage['customerID'];
    console.log(CUSTID);
    var branchid = window.localStorage['branchID'];
    var usertype = window.localStorage['userType'];
    var userid = window.localStorage['userID'];
    var customerid = null;
    this.apiService.todayfollowdata(userid, branchid, customerid).then(res => {
      // $scope.hidespin();
      console.log("todayfollowupdata---",res);
      var response = JSON.stringify(res.data);
      this.todayfollowupdata = JSON.parse(response);
      console.log("todayfollowupdata-34--",res);
      this.todayfollowupdata = JSON.parse(this.todayfollowupdata);
      this.todayfollowupdata = JSON.parse(this.todayfollowupdata);
      this.todayfollowupdata = this.todayfollowupdata;
     
      // this.todayfollowupdata = response;
      this.firstWords = [];
      var firstname = [];
      for (let i = 0; i < this.todayfollowupdata.length; i++) {
        firstname = this.todayfollowupdata[i].CUSTOMER_NAME.split(" ");
        this.firstWords.push(firstname[0]);
        this.todayfollowupdata[i].firstname = this.firstWords[i];

      }
      console.log("todayfollowupdata", this.todayfollowupdata);
      // $scope.username = window.localStorage['userName'];   
    });
  }

  getTodayAssignData() {

    var CUSTID = window.localStorage['customerID'];
    console.log(CUSTID);
    var branchid = window.localStorage['branchID'];
    var usertype = window.localStorage['userType'];
    var userid = window.localStorage['userID'];
    var customerid = null;
    this.apiService.todayassigndata(userid, branchid, customerid).then(res => {
      // $scope.hidespin();
      console.log("todayassigndata---",res);
      console.log("todayassigndata---",res.data);
      var response = JSON.stringify(res.data);
      this.todayassigneddata = JSON.parse(response);
      this.todayassigneddata = JSON.parse(this.todayassigneddata);
      this.todayassigneddata = JSON.parse(this.todayassigneddata);
      this.todayassigneddata = this.todayassigneddata;
      console.log("todayassigneddata", this.todayassigneddata, this.todayassigneddata.length);
      // this.todayassigneddata = response;
      this.firstWords = [];
      var firstname = [];
      for (let i = 0; i < this.todayassigneddata.length; i++) {
        firstname = this.todayassigneddata[i].CUSTOMER_NAME.split(" ");
        this.firstWords.push(firstname[0]);
        this.todayassigneddata[i].firstname = this.firstWords[i];
      }
      // $scope.username = window.localStorage['userName'];

    });





  }

  getInsuranceType() {
    this.apiService.getInsuranceType().then(response => {
      var Value = JSON.stringify(response.data)
      console.log(Value);
      // Value = JSON.parse(Value);
      // Value = JSON.parse(Value);
      this.ins_type = JSON.parse(Value);
      this.ins_type = JSON.parse(this.ins_type);
      this.ins_type = JSON.parse(this.ins_type);
      this.ins_type = this.ins_type;
      console.log(this.ins_type);
      // this.ins_type  = JSON.parse(response.data);
    });
    // .success(function(response) {
    //   console.log(response);
    //   $scope. = JSON.parse(response);
    // }).error(function(response) {
    //   $scope.hidespin();
    //   console.log(response);
    // });
  }
  getInsuranceSource() {
    this.apiService.getInsuranceSource().then(response => {
      var Value = JSON.stringify(response.data)
      console.log(Value);
      // Value = JSON.parse(Value);
      // Value = JSON.parse(Value);
      this.ins_source = JSON.parse(Value);
      this.ins_source = JSON.parse(this.ins_source);
      this.ins_source = JSON.parse(this.ins_source);
      this.ins_source = this.ins_source;
      console.log(this.ins_source);
      // this.ins_source = JSON.parse(response.data);
    });
    // callAPI.getInsuranceSource()
    // .success(function(response) {
    //   console.log(response);
    //   $scope.ins_source = JSON.parse(response);
    // }).error(function(response) {
    //   $scope.hidespin();
    //   console.log(response);
    // });
  }

  getInsurancedata() {

    this.apiService.getinsurancedetails('Refferals').then(response => {

      var Value = JSON.parse(response.data);
      console.log(Value);
      // Value = JSON.parse(Value);
      // Value = JSON.parse(Value);
      this.ins_ref = JSON.parse(Value);
      console.log(this.ins_ref);
      // this.ins_ref = JSON.parse(this.ins_ref);
      console.log(this.ins_ref);
      // this.ins_ref = JSON.parse(this.ins_ref);
      this.ins_ref = this.ins_ref.Table;
      console.log(this.ins_ref);
      // this.ins_ref = itemrefarr.Table;
    });
    // console.log(val);
    //Insurance Source
    //  callAPI.getinsurancedetails('Refferals')
    // .success(function(response) {
    //   $scope.hidespin();
    //   console.log(response);
    //   var itemrefarr = JSON.parse(response);
    //   $scope.ins_ref = itemrefarr.Table;
    // }).error(function(response) {
    //   $scope.hidespin();
    //   console.log(response);
    // });
  }
  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async myfollowupActionModal(item) {
    console.log(item);
    const modal = await this.modalController.create({
      component: MyfollowcallmodalPage,
      componentProps: { Data: item }
    });
    return await modal.present();
  }

  async myassignActionModal(item) {
    const modal = await this.modalController.create({
    component: MyassigncallmodalPage,
    componentProps: { Data: item }
    });
    return await modal.present();
   }

}
