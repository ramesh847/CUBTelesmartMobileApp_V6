import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ApiServiceService } from 'src/app/service/api-service.service';
import * as moment from "moment"; 
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-endcallmodal',
  templateUrl: './endcallmodal.page.html',
  styleUrls: ['./endcallmodal.page.scss'],
})
export class EndcallmodalPage implements OnInit {
  res: any;
  resout: any={};
  clickcallID: any={};
  interval: NodeJS.Timeout;
  statusResp: any;
  repStatus: any;
  endDate: string;
  currDate: any;
  accessResp: any;
  ClickAccess: boolean;

  constructor(private modalController:ModalController,private apiservice:ApiServiceService,private navParams:NavParams) { }

  ngOnInit() {
    let Cusdata = this.navParams.get('Data');
    console.log(Cusdata);
    this.callNumber(Cusdata);
    this.clickCallAccess();
  }

  clickCallAccess(){
    var userid = window.localStorage['userID'];
    this.apiservice.AccesstoClick(userid)
    .then((res)=> {
      console.log(res)
      var response =  JSON.parse(res.data)
      this.accessResp= JSON.parse(response)
      // this.hidespin($ionicLoading);
      if(this.accessResp == 'A'){
        console.log(this.accessResp);
        this.ClickAccess =true;
      }else{
        this.ClickAccess =false;
      }
     
    })
    
    // .error(function(response) {
    //   console.log(response);
    //   this.hidespin($ionicLoading);
    // });
  }



  clickcall:any={};
  item:any = '';
  callNumber(item){
    console.log(item);
    this.item = item;
    this.clickcall.callerName=window.localStorage['userName'];
    this.clickcall.callerMobile=window.localStorage['mobile'];
    this.clickcall.customerName=item.CustomerName;
    this.clickcall.customerMobile=item.Mobile;
    this.clickcall.customerId=item.CBSCustomerId;
    this.clickcall.endDate='';
    var purpose = 'MyZeroStarCustomer';
    var currentDate= new Date();
    // this.clickcall.currDate = $filter('date')(currentDate, 'yyyy-MM-dd hh-mm-ss');
    // console.log(this.currDate);
    this.clickcall.currDate = moment(currentDate).format('YYYY-MM-DD h.mm a');
    // this.followuptime = moment(this.data.followuptime).format('h.mm a');
    this.apiservice.clickToCallCustomer(this.clickcall.callerMobile,this.clickcall.customerMobile,purpose)
    .then((response)=> {
      console.log(response)
      // this.hidespin($ionicLoading);
      debugger
      this.res = JSON.parse(response.data);
      this.resout = JSON.parse(this.res);
      this.resout = JSON.parse(this.resout);
      // console.log(resout)
      debugger
      if(this.resout.status == "200"){
        debugger
        this.clickcallID = this.resout.data;
        this.callinterval();

        

        // this.CallConnectModal.show();
      }else{
      // var alertPopup = $ionicPopup.alert({
      //   title: 'Alert',
      //   template: response.data
      // });
    
      // alertPopup.then(function(res) {
      // });
      // by sijin
      }


    })
    
    // .error(function(response) {
    //   console.log(response);
    //   this.hidespin($ionicLoading);
    // });

  }

  callinterval(){
    alert()
  this.interval = setInterval(() => {
this.callResp();
    // clearInterval(this.interval)
  }, 1000);
  }
  stopCall(){
    clearInterval(this.interval)
  }

  EndCallobj:any={};
  callResp(){
    console.log(this.clickcallID.id);
    var id = this.clickcallID.id;
    this.apiservice.callStatusCustomer(id)
    .then((response:any)=> {
    //  console.log(response)
      this.statusResp= JSON.parse(response.data)
      this.repStatus = JSON.parse(this.statusResp);
      // this.hidespin($ionicLoading);
      console.log(this.repStatus.data.length);
      if(this.repStatus.data.length == 1){
        console.log(this.repStatus.data[0].status2);
      if(this.repStatus.data[0].status2 != null){
        console.log(this.repStatus.data[0]);
        if(this.repStatus.data[0].status2 == 'ANSWER'){
          this.stopCall();
          // this.CallConnectModal.hide();
          this.EndCallobj.callerName=window.localStorage['userName'];
          this.EndCallobj.callerMobile=window.localStorage['mobile'];
          this.EndCallobj.customerName=this.item.CustomerName;
          this.EndCallobj.customerMobile=this.item.Mobile;
          this.EndCallobj.customerId=this.item.CBSCustomerId;
          //this.EndCallobj.cust=this.item.custCat;
          this.EndCallobj.endStatus= 'A';
          this.EndCallobj.currDate = this.repStatus.data[0].start_time;
          this.EndCallobj.endDate = this.repStatus.data[0].end_time;
          this.Endcall(this.EndCallobj);
          // this.customerActionModal(this.item); by sijin
        }else{
          // var myPopup = $ionicPopup.show({
          //   template: '<center>'+ this.repStatus.data[0].status2 +'. would you like to update?</center>',
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
          //       this.EndCallobj.callerName=window.localStorage['userName'];
          //       this.EndCallobj.callerMobile=window.localStorage['mobile'];
          //       this.EndCallobj.customerName=this.item.CustomerName;
          //       this.EndCallobj.customerMobile=this.item.Mobile;
          //       this.EndCallobj.customerId=this.item.CBSCustomerId;
          //       //this.EndCallobj.cust=this.item.custCat;
          //       this.EndCallobj.endStatus= 'I';
          //       this.EndCallobj.currDate = this.repStatus.data[0].start_time;
          //       this.EndCallobj.endDate = this.repStatus.data[0].end_time;
          //       this.Endcall(this.EndCallobj);
          //       this.customerActionModal(this.item);
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
          // by sijin above code important 
        }
        
      }
    }
    })
    
    // .error(function(response) {
    //   console.log(response);
    //   this.hidespin($ionicLoading);
    // });
  }


  Endcall(obj){
    console.log(obj);
    if(obj.endDate == undefined || obj.endDate == 'undefined' || obj.endDate == null || obj.endDate == ''){
      var enDate= new Date();
      //  this.endDate = $filter('date')(enDate, 'yyyy-MM-dd hh-mm-ss');
       this.endDate = moment(enDate).format('YYYY-MM-DD h.mm a')
      // this.endDate = $filter('date')(enDate, 'hh-mm-ss');
      console.log(this.endDate);
      }else{
        var enDate= new Date(obj.endDate);
        this.endDate = moment(enDate).format('YYYY-MM-DD h.mm a')
        // this.endDate =$filter('date')(enDate, 'yyyy-MM-dd hh-mm-ss');
        console.log(this.endDate);
      }
      var curDate= new Date(obj.currDate);
      this.currDate = moment(curDate).format('YYYY-MM-DD h.mm a')
      // this.currDate = $filter('date')(curDate, 'yyyy-MM-dd hh-mm-ss');
      console.log(this.currDate);
    var branchid = window.localStorage['branchID'];
    var usertype = window.localStorage['userType'];
    var userid = window.localStorage['userID'];
    var purpose = 'MyZeroStarCustomer';
    this.apiservice.EndCAllClick(obj.customerId,obj.customerName,obj.customerMobile,userid,branchid,obj.callerMobile,this.currDate,this.endDate,purpose)
    .then((response:any)=> {
      console.log(response)
      var response = JSON.parse(response.data)
      response = JSON.parse(response)
      // this.hidespin($ionicLoading);
      if(obj.endStatus == 'I'){
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
      //       this.customerActionModal(this.item);
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
      // by sijin check this above code important
    }else{
      this.clickcall={};
            // this.CallConnectModal.hide();
            this.stopCall();
            console.log(this.item);
            // this.customerActionModal(this.item);
    }
    })
    
    // .error(function(response) {
    //   console.log(response);
    //   this.hidespin($ionicLoading);
    // });
  }

  modelDissmiss(){
    this.modalController.dismiss();
   }
}
