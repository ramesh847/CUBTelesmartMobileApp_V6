import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AlertServiceService } from 'src/app/service/alert-service.service';
import * as moment from "moment";
import { ApiServiceService } from 'src/app/service/api-service.service';
import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'actStatusPipe'
})
@Component({
  selector: 'app-mywishsecondarymodal',
  templateUrl: './mywishsecondarymodal.page.html',
  styleUrls: ['./mywishsecondarymodal.page.scss'],
})
export class MywishsecondarymodalPage implements OnInit {
  secondaryCust:any={};
  secondaryCustData: any;
  nextcalldate: string;
  nextfollwuptime: string;
  emailid: any;
 express:any= {};
  getusername: any;
  constructor(private apiservice:ApiServiceService,private alert:AlertServiceService,private modalController:ModalController,private navParams:NavParams) { }

  ngOnInit() {
    var Cusdata = this.navParams.get('Data');
    console.log(Cusdata);

this.secondaryCustomerUpdateModel(Cusdata)
    
  }
  checkbox(Event){
    console.log(Event);
    
    if(Event){
      this.express.JointVisit = 'YES';
    }else{
      this.express.JointVisit = "NO"
    }
    console.log(this.express.JointVisit)
  }
  
  secondaryCustomerUpdateModel(customer){
    // this.secondaryCustomerUpdate.show();
    debugger
    console.log("secCust",customer)
    this.secondaryCustData = customer;
    console.log("secondaryCustData",this.secondaryCustData);
    this.secondaryCust.firstName = '.';
    this.secondaryCust.lastName = customer.COMPANYNAME;
    this.secondaryCust.mobileNo = customer.mobileno;
    debugger
    this.secondaryCust.wishlist2021 = 'Wishlist 2021';
    this.secondaryCust.CBSCustomerID = customer.ROWID;
  }

  checkusercode(val){
    var usercode = val;
    var branchid = window.localStorage['branchID'];
    var struserCode = window.localStorage['userCode'];
    

    // this.showspin();
    this.apiservice.checkJointCode(struserCode,usercode, branchid)
    .then((res:any)=>{
      // this.hidespin();
      console.log(res);
     var response = JSON.parse(res.data);
      response = JSON.parse(response);
      if (response == "This User Not in this Branch"){
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Please Enter The Valid Emp Code</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // })
        this.alert.presentAlert('Warning','Please Enter The Valid Emp Code')
        this.express.jointusername = "";
        this.express.jointusercode = "";
        // this.hidespin();
      return false;
      }else if(response == "Please Enter the Valid User Code"){
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Please Enter the Valid Emp Code</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons:[{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // })
        this.alert.presentAlert('Warning','Please Enter the Valid Emp Code')
        this.express.jointusername = "";
        this.express.jointusercode = "";
        // this.hidespin();
      return false;
      }else{
        this.getusername = response;
        this.express.jointusername = this.getusername;
        console.log(this.getusername)
      }
    })
    // .error(function(response) {
    //   this.hidespin();
    //   return false;
    //   console.log(response);
    // });

    
  }


  submitUpdatedSecondaryCustDetails(){
    console.log("testclick")
    var firstName:string = this.secondaryCust.firstName;
    if(this.secondaryCust.firstName == '' || this.secondaryCust.firstName == undefined || this.secondaryCust.firstName == null || this.secondaryCust.firstName =='.'){
      var firstName = 'test';
    }
    var lastName = this.secondaryCust.lastName;

    if(this.secondaryCust.lastName == '' || this.secondaryCust.lastName == undefined || this.secondaryCust.lastName == null || this.secondaryCust.lastName == '.'){
      var lastName:any = 'test';
    }
    var mobileNumber = this.secondaryCust.mobileNo;
    var emailid = this.emailid;
    var wishlist = this.secondaryCust.wishlist2021;
    var callType = this.express.selectele;
    var CallSource = this.express.callout;
    var CBSCustomerID = this.secondaryCust.CBSCustomerID;
    console.log('CBSCustomerID',CBSCustomerID)
    if(this.emailid == '' || this.emailid == undefined || this.emailid == null){
      var emailid:any = 'test'
    }
    if(this.express.selectele== '' || this.express.selectele == undefined || this.express.selectele == null){
      // var myPopup =  $ionicPopup.show({
      //   template: '<center>Select Call Type</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      this.alert.presentAlert('Warning','Select Call Type')
      return false;
    }

    // if(this.express.selectele == "P"){
    //   if(this.express.JointVisit == '' ||  this.express.JointVisit == undefined ||  this.express.JointVisit == null || this.express.JointVisit == 'NO'){
    //     var myPopup = $ionicPopup.show({
    //       template: '<center>Please select Joint Visit</center>',
    //       title: 'Warning',
    //       scope: this,
    //       buttons:[{
    //         text: 'OK',
    //         type: 'button button-clear button-assertive'
    //       }]
    //     })
    //     this.hidespin($ionicLoading);
    //     return false;
    //   }
    // }
    if(this.express.selectele == "P" && this.express.JointVisit == "YES"){
      if(this.express.jointcode == null || this.express.jointcode == "" || this.express.jointcode == undefined){
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Enter Joint Usercode</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        // this.hidespin($ionicLoading);
        this.alert.presentAlert('Warning','Enter Joint Usercode')
        return false;
      }
    }
    if(this.express.selectele == "T"){
      var jointvisit = 'test'
      var usercode = 'test'
    }
    if(this.express.JointVisit == "NO" || this.express.JointVisit == '' || this.express.JointVisit == undefined || this.express.JointVisit == null){
      var jointvisit = 'test'
      var usercode = 'test'
      // console.log("noooooooooooo",usercode,jointvisit)
    }

    if(this.express.selectele == "P" && this.express.JointVisit == "YES"){
      var jointvisit:string = this.express.JointVisit;
      var usercode:string = this.express.jointcode;
      console.log("usercode",usercode)
    }
   
    console.log("followupDate",this.express.followupdate);
    console.log("followUpTime", this.express.followuptime);
    if(this.express.callout ==  '' || this.express.callout == undefined || this.express.callout == null){
      // var myPopup =  $ionicPopup.show({
      //   template: '<center>Select Call OutCome</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      this.alert.presentAlert('Warning','Select Call OutCome')
      return false;
    }
    if(this.express.callout == '2'){
      if(this.express.followupdate == "" || this.express.followupdate == undefined || this.express.followupdate == null || this.express.followuptime == '' || this.express.followuptime == undefined || this.express.followuptime == null){
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Provide followup details.</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons:[{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // })
        // this.hidespin($ionicLoading);
        this.alert.presentAlert('Warning','Provide followup details.')
        return false;
      }else{
        this.nextcalldate = moment(this.express.followupdate).format('YYYY-MM-DD');
        this.nextfollwuptime = moment(this.express.followuptime).format('h.mm a');
          // this.nextcalldate1 = $filter('date')(this.data.followupdate, 'yyyy-MM-dd');
          // this.followuptime = $filter('date')(this.data.followuptime, 'h.mm a');
          var nextcalldate = this.nextcalldate + ' ' + this.nextfollwuptime;
          var nextcalldate = this.nextcalldate;
          var nextfollwuptime =  this.nextfollwuptime
        // this.nextcalldate = $filter('date')(this.express.followupdate, 'yyyy-MM-dd');
        // this.nextfollwuptime = $filter('date')(this.express.followuptime, 'h.mm a');
        // var nextcalldate = this.nextcalldate + ' ' + this.nextfollwuptime;
        // var nextcalldate = this.nextcalldate;
        
        // var nextfollwuptime =  this.nextfollwuptime
      }
    }if(this.express.callout != '2'){
      var nextcalldate = "test";
      var nextfollwuptime = 'test';
    } 
    if(this.express.Remarks == '' || this.express.Remarks == undefined || this.express.Remarks == null){
      var remarks='test'
     }else{
      var remarks:string = this.express.Remarks;
    }
   
    // console.log("final data",firstName,lastName,mobileNumber,emailid,wishlist,jointvisit,callType,usercode,nextfollwuptime,nextcalldate,remarks,CallSource);
    var functionid = '1';
    var BranchID = window.localStorage['branchID'];
    var BranchCode = 'test';
    var Purpose = 'test';
    var ResponseID = this.express.callout;
    var Status = 'test';
    var CreatedBy = window.localStorage['userID'];
    var CallerID = window.localStorage['userID'];
    var IPAddress = 'M';
    var Mode = 'test';
    var Callid = window.localStorage['userID'];
    var AccountNo = 'test';
    var Amount = 'test';
    var Collectiondate = 'test';
    var Collectionmode = 'test';
    var customerName =   this.secondaryCust.lastName;
    this.apiservice.UpdateC2CPrimarySecondaryCustomer(functionid,BranchID,BranchCode,CallSource,Purpose,ResponseID,customerName,mobileNumber,CBSCustomerID,Status,CreatedBy,callType,CallerID,nextcalldate,remarks,IPAddress,Mode,Callid,AccountNo,Amount,Collectiondate,Collectionmode,firstName,lastName,usercode)
    .then((res:any)=>{
      console.log("updatesecondaryEditData",res)
      var response = JSON.parse(res.data)
      response = JSON.parse(response)
      if(response == "Business Call inserted successfully " || "Business Call inserted successfully SMS Successfully submitted"){
        // var myPopup = $ionicPopup.show({
        //   template :  '<center>Submitted Successfully</center>',
        //   title: 'Alert',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive',
        //     onTap:function (e){
        //       this.secondaryCustomerUpdate.hide();
        //     }
        //   }]
        // })
        this.alert.presentAlert('Alert','Submitted Successfully')
      }
     
      else{
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Error Try again.</center>',
        //   title: 'Alert',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive',
        //     onTap:function (e){
        //       this.secondaryCustomerUpdate.hide();
        //     }
            
        //   }]
        // })
        this.alert.presentAlert('Alert','Error Try again.')
        
      }
      
    })
    // .error((response)=> {
    //   // this.hidespin();
    //   console.log(response);
    // });
  }


  modelDissmiss(){
    this.modalController.dismiss();
   }
}
