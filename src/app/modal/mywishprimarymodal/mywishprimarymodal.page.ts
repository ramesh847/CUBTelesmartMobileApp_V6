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
  selector: 'app-mywishprimarymodal',
  templateUrl: './mywishprimarymodal.page.html',
  styleUrls: ['./mywishprimarymodal.page.scss'],
})
export class MywishprimarymodalPage implements OnInit {
  primaryCustomerData: any;
  primaryCustActionData: any;
  nextcalldate: string;
  nextfollwuptime: string;
  emailid: any;
 primaryCust:any={};
 express:any= {};
  getusername: any;
  constructor(private apiservice:ApiServiceService,private alert:AlertServiceService,private modalController:ModalController,private navParams:NavParams) { }

  ngOnInit() {
    var Cusdata = this.navParams.get('Data');
    console.log(Cusdata);
    this.primaryCustomerUpdateModal(Cusdata);
  }
  
      primaryCustomerUpdateModal(customer){
        console.log("customerDetails",customer)
        this.primaryCustomerData = customer;
        console.log("primaryCustomerData",this.primaryCustomerData)
        this.primaryCustActionData = customer;
        console.log("primaryCustActionData",this.primaryCustActionData)
        this.primaryCust.firstName = '.';
        this.primaryCust.lastName = customer.COMPANYNAME;
        this.primaryCust.mobileNo = customer.mobileno;
        this.primaryCust.wishlist2021 = 'Wishlist 2021';
        this.primaryCust.CBSCustomerID = customer.ROWID;
        // this.primaryCustomerUpdate.show();
        
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
      

      checkusercode(val) {
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
          //   var myPopup = $ionicPopup.show({
          //     template: '<center>Please Enter The Valid Emp Code</center>',
          //     title: 'Warning',
          //     scope: this,
          //     buttons: [{
          //       text: 'OK',
          //       type: 'button button-clear button-assertive'
          //     }]
          //   })
          this.alert.presentAlert('Warning','Please Enter The Valid Emp Code')
            this.express.jointusername = "";
            this.express.jointusercode = "";
          }else if(response == "Please Enter the Valid User Code"){
            // var myPopup = $ionicPopup.show({
            //   template: '<center>Please Enter the Valid User Code</center>',
            //   title: 'Warning',
            //   scope: this,
            //   buttons:[{
            //     text: 'OK',
            //     type: 'button button-clear button-assertive'
            //   }]
            // })
            this.alert.presentAlert('Warning','Please Enter the Valid User Code')
            this.express.jointusername = "";
            this.express.jointusercode = "";
          }else{
            this.getusername = response;
            this.express.jointusername = this.getusername;
            console.log(this.getusername)
          }
        })
        // .error(function(response) {
        //   this.hidespin();
        //   console.log(response);
        // });
      }


      submitUpdatedPrimaryCustDetails(){
        var firstName:string = this.primaryCust.firstName;
        if(this.primaryCust.firstName == '' || this.primaryCust.firstName == undefined || this.primaryCust.firstName == null || this.primaryCust.firstName == '.'){
          var firstName = 'test'
        }
        console.log("final First Name",firstName)
        var lastName = this.primaryCust.lastName;
        var mobileNumber = this.primaryCust.mobileNo;
        var emailid = this.emailid;
        console.log("finalEmail",emailid);
        var wishlist = this.primaryCust.wishlist2021;
        var callType = this.express.selectele;
        var CallSource = this.express.callout; 
        var CBSCustomerID =  this.primaryCust.CBSCustomerID;
        console.log("CBSCustomerID",this.primaryCust.CBSCustomerID)
        if(this.emailid == '' || this.emailid == undefined || this.emailid == null){
          var emailid:any = 'test'
        }
        
        if(this.express.selectele == '' || this.express.selectele == undefined || this.express.selectele == null){
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
        //   if(this.express.JointVisit == '' || this.express.JointVisit == undefined || this.express.JointVisit == null || this.express.JointVisit == 'NO'){
        //     var myPopup = $ionicPopup.show({
        //       template: '<center>Please select Joint Visit</center>',
        //       title: 'Warning',
        //       scope: this,
        //       buttons:[{
        //         text: 'OK',
        //         type: 'button button-clear button-assertive'
        //       }]
        //     });
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
        }
        if(this.express.callout != '2'){
          var nextcalldate = "test";
          var nextfollwuptime = 'test';
        }
        if(this.express.Remarks == '' || this.express.Remarks == undefined || this.express.Remarks == null){
         var remarks:any='test'
        }else{
          var remarks = this.express.Remarks;
        }

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
        var customerName =  this.primaryCust.lastName;
        console.log("final data",functionid,BranchID,BranchCode,CallSource,Purpose,ResponseID,customerName,mobileNumber,CBSCustomerID,Status,CreatedBy,callType,CallerID,nextcalldate,remarks,IPAddress,Mode,Callid,AccountNo,Amount,Collectiondate,Collectionmode,firstName,lastName)
        // console.log("final data",firstName,lastName,mobilenum,emailid,wishlist,jointvisit,callType,usercode,nextfollwuptime,nextcalldate,remarks,callOutcome)
        this.apiservice.UpdateC2CPrimarySecondaryCustomer(functionid,BranchID,BranchCode,CallSource,Purpose,ResponseID,customerName,mobileNumber,CBSCustomerID,Status,CreatedBy,callType,CallerID,nextcalldate,remarks,IPAddress,Mode,Callid,AccountNo,Amount,Collectiondate,Collectionmode,firstName,lastName,usercode)
        .then((res:any)=>{
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
            //       this.primaryCustomerUpdate.hide();
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
            //       this.primaryCustomerUpdate.hide();
            //     }
                
            //   }]
            // })
            this.alert.presentAlert('Alert','Error Try again.')
          }
        })
        // .error(function(response) {
        //   this.hidespin();
        //   console.log(response);
        // });
      };

      modelDissmiss(){
        this.modalController.dismiss();
       }
}
