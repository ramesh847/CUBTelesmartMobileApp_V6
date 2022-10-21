import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { AlertServiceService } from 'src/app/service/alert-service.service';
import { DatePipe } from '@angular/common';
import { timeStamp } from 'console';
@Component({
  selector: 'app-myfollowupvisitmodal',
  templateUrl: './myfollowupvisitmodal.page.html',
  styleUrls: ['./myfollowupvisitmodal.page.scss'],
  providers:[DatePipe]
})
export class MyfollowupvisitmodalPage implements OnInit {
  callermobile: string;
  customerName: any;
  customerMobile: any;
  customerId: any;
  purpose: any;
  callerName: string;
  result: any;
  resout: any;
  clickcallID: any;
  obj:any={};
  endDate: any;
  currDate: any;
  clickcall: {};

  constructor(private datepipe:DatePipe,private AlertService:AlertServiceService,private navParams:NavParams,private Apiservice:ApiServiceService) { }

  ngOnInit() {
    debugger
    let Cusdata = this.navParams.get('Data');
    console.log(Cusdata);

    localStorage.setItem('userID','2606');
localStorage.setItem('branchID','329');
localStorage.setItem('branchCode','329');
localStorage.setItem('userCode','3442');
localStorage.setItem('UserName','NAGARAJU M');
// localStorage.setItem('userName','3442');
localStorage.setItem('userType','11');
localStorage.setItem('mobile','9490739835');
this.obj.callerName=localStorage.getItem('UserName')
this.obj.callermobile=localStorage.getItem('mobile')
    this.obj.customerName=Cusdata.CUSTOMER_NAME     
    
   this.obj.customerMobile=Cusdata.CONTACT_NO;
  this.obj.customerId=Cusdata.CUSTOMER_ID;
    this.obj.purpose=Cusdata.PURPOSE.split('/').join('-');
    var currentDate=new Date();
    this.obj.currDate=currentDate
   // this.callermobile=localStorage.getItem('mobile');
    //this.usertype=localStorage.getItem('userType')

    this.Apiservice.clickToCallFollowUP(this.obj.callermobile,this.obj.customerMobile,this.obj.purpose).then((response:any)=> {
      debugger
      console.log(response.data)
      // $scope.hidespin($ionicLoading);
      this.result = JSON.parse(response.data);
      this.resout = JSON.parse( this.result);
      
      if(this.resout.status == '200'){
        this.clickcallID = this.resout.data;
        this.callinterval();
        // $scope.CallConnectModal.show();
      }else{
        this.AlertService.presentAlert("Alert",response)
       // alert(response)
      // var alertPopup = $ionicPopup.alert({
      //   title: 'Alert',
      //   template: response
      // });
    
      // alertPopup.then(function(res) {
      // });
      }
  
  
    })
    

  }


  callinterval(){
    debugger
   
    //   if ( angular.isDefined(gettimer) ) return;
    //  var gettimer =$interval( function(){ $scope.callResp(); }, 10000);
    
  }
  Endcall(obj){
debugger
if(obj.endDate == undefined || obj.endDate == 'undefined' || obj.endDate == null || obj.endDate == ''){
  var enDate= new Date();
  // this.endDate = $filter('date')(enDate, 'yyyy-MM-dd hh-mm-ss');
  this.endDate=this.datepipe.transform( enDate,'yyyy-MM-dd hh-mm-ss')
 
  // $scope.endDate = $filter('date')(enDate, 'hh-mm-ss');
  //console.log($scope.endDate);
  }else{
    var enDate= new Date(obj.endDate);
    // this.endDate =$filter('date')(enDate, 'yyyy-MM-dd hh-mm-ss');
    this.endDate=this.datepipe.transform( enDate,'yyyy-MM-dd hh-mm-ss')
    //console.log($scope.endDate);
  }
  var curDate= new Date(obj.currDate);
 // this.currDate = $filter('date')(curDate, 'yyyy-MM-dd hh-mm-ss');
 this.currDate= this.datepipe.transform(curDate,'yyyy-MM-dd hh-mm-ss');
  //console.log($scope.currDate);
var branchid = window.localStorage['branchID'];
var usertype = window.localStorage['userType'];
var userid = window.localStorage['userID'];
var purpose = obj.purpose;
this.Apiservice.EndcallClick(obj.customerId,obj.customerName,obj.customerMobile,userid,branchid,obj.callerMobile,this.currDate,this.endDate,purpose)
.then((response:any)=> {
  debugger
  console.log(response.data)
//  $scope.hidespin($ionicLoading);
  if(obj.endStatus == 'I'){
this.AlertService.presentAlert("Alert","You have ended the call explicitly. would you like to update?")

  // var myPopup = $ionicPopup.show({
  //   template: '<center>You have ended the call explicitly. would you like to update?</center>',
  //   title: 'Alert',
  //   scope: this,
  //   buttons: [{
  //     text: 'Yes',
  //     type: 'button button-clear button-assertive',
  //     onTap: function (e) {
  //      this.clickcall={};
  //       this.CallConnectModal.hide();
  //      this.stopCall();
  //       //console.log($scope.item);
  //       this.End(this.item);
  //     }


    }
    else{
      this.clickcall={};
            //this.CallConnectModal.hide();
            //this.stopCall();
           // console.log(this.item);
           // this.End(this.item);
    }
    // {
    //   text: 'No',
    //   type: 'button button-clear button-assertive',
    //   onTap: function (e) {
    //    this.clickcall={};
    //     this.CallConnectModal.hide();
    //     this.stopCall();
    //     // console.log($scope.item);
    //     // $scope.followupcallsUpdmodal($scope.item);
    //   }
    // }
    //]
  });


  }

  

}
