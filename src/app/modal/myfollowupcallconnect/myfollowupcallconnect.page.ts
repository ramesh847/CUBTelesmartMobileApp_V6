import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pipe, PipeTransform } from "@angular/core";
import { ApiServiceService } from 'src/app/service/api-service.service';
@Component({
  selector: 'app-myfollowupcallconnect',
  templateUrl: './myfollowupcallconnect.page.html',
  styleUrls: ['./myfollowupcallconnect.page.scss'],
  providers: [DatePipe],
})
export class MyfollowupcallconnectPage implements OnInit {
  clickcall: any;
  callerName:any;
  callerNumber:any;
  customerNumber: any;
  purpose:any;
  clickCallId: any;
  endDate: any;
  currDate: any;
  constructor(private Apiservice: ApiServiceService, private navParams: NavParams, public modalController: ModalController,
    private formBuilder: FormBuilder,private datepipe: DatePipe) { }

  ngOnInit() {
    this.callerName = window.localStorage['userName'];
    this.callerNumber = window.localStorage['mobile'];
    this.clickcall = this.navParams.get('Data');
    this.customerNumber = this.clickcall.Mobile;
    this.purpose = this.clickcall.Purpose;
    console.log(this.clickcall);
    this.Apiservice.clickToCall(this.callerNumber,this.customerNumber,this.purpose).then(response => {
      var res = JSON.stringify(response.data);
      console.log(res);
      debugger
      this.clickCallId = JSON.parse(res);
      this.clickCallId = JSON.parse(this.clickCallId);
      this.clickCallId = JSON.parse(this.clickCallId);
      this.clickCallId = JSON.parse(this.clickCallId);
      // res = JSON.parse(res);
      this.clickCallId = this.clickCallId.data.id;
      console.log(this.clickCallId);
      debugger
      setInterval(() => {
        this.Apiservice.clickToCallStatus(this.clickCallId).then(res => {
          debugger
          console.log(res);
        })
        }, 15000);
     

      // https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/ClickToCall_Calls/9490739835/7093603800/Birthday%20wishes
    })
    this.clickCallAccess();
  }
  clickCallAccess (){
    var userid = window.localStorage['userID'];
    this.Apiservice.AccesstoClick(userid).then(res=> {
      console.log(res);
    })
    // callAPI.AccesstoClick(userid)
    // .success(function(response) {
    //   console.log(response)
    //   $scope.accessResp= JSON.parse(response)
    //   $scope.hidespin($ionicLoading);
    //   if($scope.accessResp == 'A'){
    //     console.log($scope.accessResp);
    //     $scope.ClickAccess =true;
    //   }else{
    //     $scope.ClickAccess =false;
    //   }

    // })

    // .error(function(response) {
    //   console.log(response);
    //   $scope.hidespin($ionicLoading);
    // });
  }

  modelDissmiss() {
    this.modalController.dismiss();
   
  }
  ngOnDestroy() {
    // clearInterval();

  }
  Endcall(){
    console.log(this.clickcall);
    if(this.clickcall.endDate == undefined || this.clickcall.endDate == 'undefined' || this.clickcall.endDate == null || this.clickcall.endDate == ''){
      var enDate= new Date();
       this.endDate = this.datepipe.transform(enDate, 'yyyy-MM-dd hh-mm-ss');

      // this.endDate = $filter('date')(enDate, 'hh-mm-ss');
      console.log(this.endDate);
      }else{
        var enDate= new Date(this.clickcall.endDate);
        this.endDate = this.datepipe.transform(enDate, 'yyyy-MM-dd hh-mm-ss');
        console.log(this.endDate);
      }
      var curDate= new Date();
      this.currDate =  this.datepipe.transform(curDate, 'yyyy-MM-dd hh-mm-ss');
      console.log(this.currDate);
    var branchid = window.localStorage['branchID'];
    var usertype = window.localStorage['userType'];
    var userid = window.localStorage['userID'];
    var purpose = this.clickcall.Purpose;
    console.log("cusid",this.clickcall.CBSCustomerID,"cusname",this.clickcall.CustomerName,"cusmobile",this.clickcall.Mobile,"userid",userid,"branchid",branchid,"callermobile",this.callerNumber,"currdate",this.currDate,"enddate",this.endDate,"purpose",purpose);
    this.Apiservice.EndCAllClick1(this.clickcall.CBSCustomerID,this.clickcall.CustomerName,this.clickcall.Mobile,userid,branchid,this.callerNumber,this.currDate,this.endDate,purpose).then(res=> {
   debugger
   console.log(res);
      if(this.clickcall.endStatus == 'I'){
        // var myPopup = $ionicPopup.show({
        //   template: '<center>You have ended the call explicitly. would you like to update?</center>',
        //   title: 'Alert',
        //   scope: this,
        //   buttons: [{
        //     text: 'Yes',
        //     type: 'button button-clear button-assertive',
        //     onTap: function (e) {
        //       this.clickcall={};
        //       this.CallConnectModal.hide();
        //       this.stopCall();
        //       console.log(this.item);
        //       this.assignedcallsUpdmodal(this.item);
        //     }
  
  
        //   },
        //   {
        //     text: 'No',
        //     type: 'button button-clear button-assertive',
        //     onTap: function (e) {
        //       this.clickcall={};
        //       this.CallConnectModal.hide();
        //       this.stopCall();
        //       // console.log(this.item);
        //       // this.followupcallsUpdmodal(this.item);
        //     }
        //   }
        //   ]
        // });
      }else{
        // this.clickcall={};
        //       this.CallConnectModal.hide();
        //       this.stopCall();
        //       console.log(this.item);
        //       this.assignedcallsUpdmodal(this.item);
      }

    })
  
  }

}
