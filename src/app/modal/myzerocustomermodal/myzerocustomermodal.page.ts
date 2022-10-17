import { Component, OnInit } from '@angular/core';
// import { ModalmycustomerPageModule } from './modalmycustomer.module';
import * as moment from "moment"; 
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { AlertServiceService } from 'src/app/service/alert-service.service';
@Component({
  selector: 'app-myzerocustomermodal',
  templateUrl: './myzerocustomermodal.page.html',
  styleUrls: ['./myzerocustomermodal.page.scss'],
})
export class MyzerocustomermodalPage implements OnInit {

  data: any={};
  customeractiondata: any;
  entry: any = {};
  callOutCome: any;
  getusername: any;
  callPurpose: any;
  businessunit: any;
  ins_type: any;
  ins_source: any;
  ins_ref: any;
  nextcalldate1: string;
  followuptime: string;
  assigned: any={};
  customerData1: any;
  existingcustomeradd: any;

  constructor(private Alertservice:AlertServiceService,private Apiservice:ApiServiceService,private navParams: NavParams,public modalController: ModalController) { 
    
  }

  ngOnInit() {
    let Cusdata = this.navParams.get('Data');
    console.log(Cusdata);
    this.customerActionModal(Cusdata);
    this.getcalloutcome();
    this.getpurpose();
    this.getInsuranceType();
    this.getInsurancedata();
    this.getInsuranceSource();
  }
 modelDissmiss(){
  this.modalController.dismiss();
 }




 private cusType=''
customerActionModal(items){
//  this.customerActionModal = function (items) {
  console.log("inside customerUpdateModal")
  console.log(items);
  this.data.addressname = "";
  this.data.callout = "";
  this.data.selectele = "";
  this.data.courtesypurp = "3";
  this.data.followupdate = "";
  this.data.followuptime = "";
  this.data.jointvisit = "";
  this.data.jointusercode = "";
  this.data.jointusername = "";
  this.customeractiondata = items;

  this.entry.mobile = this.customeractiondata.Mobile;
  this.entry.customerid = this.customeractiondata.CBSCustomerId;
  this.entry.lastname = this.customeractiondata.CustomerName;

  var newStr = this.customeractiondata.CustomerName.replace(this.customeractiondata.firstname, '');
console.log(newStr)
  this.entry.firstname = this.customeractiondata.firstname;
  this.entry.lastname = newStr
  this.cusType = items.ParentName;
  if(items.ParentName == 'Existing'){
    this.getbusinessunitExisting();
    this.getexistingCustomer(this.entry.customerid);
  }else if(items.ParentName == 'New'){
    this.getbusinessunitNew();
    this.getexistingCustomer(this.entry.customerid);
  }
  // this.mycustomeraction.show();
// }




}

getbusinessunitExisting(){
this.Apiservice.getbusinessunitExisting().then((res:any)=>{
console.log(JSON.parse(res));
this.businessunit = JSON.parse(res)
})
}

getbusinessunitNew(){
this.Apiservice.getbusinessunitNew().then(res=>{
console.log(res)
})
}

// this for data joint visit

checkbox(Event){
  console.log(Event);
  
  if(Event){
    this.data.jointvisit = 'YES';
  }else{
    this.data.jointvisit = "NO"
  }
  console.log(this.data.jointvisit)
}
getexistingCustomer(customerID){
this.Apiservice.getexistingcustomerdetails(customerID).then((response:any)=>{
console.log(JSON.parse(response))
console.log(response);
this.customerData1 = JSON.parse(response);
console.log(this.customerData1);
this.existingcustomeradd = JSON.parse(this.customerData1);

this.existingcustomeradd[0].Add1 = this.existingcustomeradd[0].Add1.replace(/\s+/g,' ').trim();
this.existingcustomeradd[0].Add2 = this.existingcustomeradd[0].Add2.replace(/\s+/g,' ').trim();
this.existingcustomeradd[0].Add3 = this.existingcustomeradd[0].Add3.replace(/\s+/g,' ').trim();
this.existingcustomeradd[0].Add4 = this.existingcustomeradd[0].Add4.replace(/\s+/g,' ').trim();

if(this.existingcustomeradd != "" && this.existingcustomeradd != undefined)
{
console.log(this.existingcustomeradd[0].Add1);
if(this.existingcustomeradd[0].Add1 != undefined || this.existingcustomeradd[0].Add2 != undefined || this.existingcustomeradd[0].Add3 != undefined || this.existingcustomeradd[0].Add4 != undefined || this.existingcustomeradd[0].PIN != undefined){
  var respAdd1= this.existingcustomeradd[0].Add1;
  var add1 = respAdd1.replace("/", "-");
  console.log(add1);
  var respAdd2= this.existingcustomeradd[0].Add2;
  var add2 = respAdd2.replace("/", "-");
  console.log(add2);
this.data.addressname = add1+' '+add2+' '+this.existingcustomeradd[0].Add3+' '+this.existingcustomeradd[0].Add4+' '+this.existingcustomeradd[0].PIN;
console.log(this.data.addressname);
}
if(this.data.addressname != "" && this.data.addressname != undefined)
{ 
  console.log(this.data.addressname);
//  this.myvalue = true;
 //this.data.selectele='P';
//  this.setlatlong(this.data.addressname);
}

}
})
}

getcalloutcome(){
  this.Apiservice.getcalloutcome1().then((res:any)=>{
console.log(JSON.parse(res));
this.callOutCome = JSON.parse(res)

  })
}

checkusercode(val){
  var usercode = val;
  var branchid = window.localStorage['branchID'];
  var struserCode = window.localStorage['userCode'];
  this.Apiservice.checkJointCode(struserCode,usercode, branchid).then((res:any)=>{
console.log(JSON.parse(res));
let response = JSON.parse(res)
if(response == "This User Not in this Branch"){
  this.Alertservice.presentAlert('Warning',"This User Not in this Branch");
  this.data.jointusername = "";
  this.data.jointusercode = "";

}else if(response == "Please Enter the Valid User Code"){
  console.log('checkkkkkind')
  this.Alertservice.presentAlert('Warning',"Please Enter the Valid User Code");
  this.data.jointusername = "";
  this.data.jointusercode = "";
}else if(response == "Please do not enter same user code"){
  this.Alertservice.presentAlert('Warning',"Please do not enter same user code");
  this.data.jointusername = "";
  this.data.jointusercode = "";
}else {
  this.getusername = res;
  this.data.jointusername = this.getusername;
  console.log(this.getusername)
}
  });
}

getpurpose(){
  debugger
  this.Apiservice.getpurpose().then((res:any)=>{
    // debugger
    console.log(res.data)
    var response = JSON.parse(res.data);
    response = JSON.parse(response);
    this.callPurpose = response;
  })
}

checkdeeping(val){
console.log(val)
console.log(val);
    var deeping = val;
    //var branchid = window.localStorage['branchID'];
    var struserID = localStorage.getItem('userID');
    var custype = 'E';
    // this.showspin();

    

    if(deeping == 14 &&  this.cusType == 'Existing'){
      console.log('checking');
      if(this.entry.customerid != undefined || this.entry.customerid != 0){
        this.Apiservice.deepingcheck(struserID,this.entry.customerid,custype, deeping).then((res:any)=>{
          console.log(JSON.parse(res));
        let response =  JSON.parse(res);
          if (response == "This customer is not mapped with you. Cannot select Deepening Of Customer") {
            this.Alertservice.presentAlert('Warning',"This customer is not mapped with you. Cannot select Deepening Of Customer");
          }
        })
      }
    }
}

getInsuranceType(){
this.Apiservice.getInsuranceType().then((res:any)=>{
  console.log(JSON.parse(res));
  this.ins_type = JSON.parse(res);
})

}

getInsuranceSource(){
  this.Apiservice.getInsuranceSource().then((res:any)=>{
       console.log(JSON.parse(res));
       this.ins_source = JSON.parse(res);
     });
 }

 getInsurancedata(){
  this.Apiservice.getinsurancedetails('Refferals').then((res:any)=>{
       console.log(JSON.parse(res));
        let itemrefarr = JSON.parse(res);
        this.ins_ref = itemrefarr.Table
     });
 }



 data1:any = {};
saveCourtesyCall(){
    // this.showspin($ionicLoading);
    
    this.data1.new = 'YES';

    var courtesyCustomerID = this.entry.customerid;
    var username = window.localStorage['userName'];
    var branchid = window.localStorage['branchID'];
    var CallerId = window.localStorage['userID'];
    var callid = null;
    // var mode = "N";
    var usercode = window.localStorage['userCode'];
    if (courtesyCustomerID == "") {
      var cbsid = 0;
    } else {
      var cbsid:number = courtesyCustomerID;
    }

    console.log(this.entry);
    console.log(this.data);
    

    var customername1 = this.entry.firstname;
    var firstname1 = this.entry.firstname;
    var lastname1 = this.entry.lastname;
    var mobile1 = this.entry.mobile;

    // var customername1 = document.getElementById('courtesyFirstName').value;
    // var firstname1 = document.getElementById('courtesyFirstName').value;
    // var lastname1 = document.getElementById('courtesyLastName').value;
    // var mobile1 = document.getElementById('courtesyMobile').value;
    // var calltype = document.getElementById('courtesyCallType').value;
    // var remarks1 = document.getElementById('txtCourtesyRemark').value;
    // var purpose = document.getElementById('courtesyPurpose').value;
    // var responseid = document.getElementById('courtesyCallOutcome').value;

    var calltype = this.data.selectele;
    var remarks1 = this.data.Remarks;
    var purpose = this.data.courtesypurp;
    var responseid = this.data.callout;
    var depositVal = this.data.deposits;
    
    console.log(lastname1);

    if (firstname1 == "") {

      var firstname = null;
    } else {
      var firstname = firstname1;
    }


     //if (purpose == 3) {
      if(this.data.businessunit == 11 || this.data.businessunit == 14){
        if ((this.data.deposits == "" || this.data.deposits == undefined) && (this.data.casa == "" || this.data.casa == undefined) && (this.data.advance == "" || this.data.advance == undefined)) {
          // var myPopup = $ionicPopup.show({
          //   template: '<center>Enter atleast one BusinessUnit</center>',
          //   title: 'Warning',
          //   scope: this,
          //   buttons: [{
          //     text: 'OK',
          //     type: 'button button-clear button-assertive'
          //   }]
          // });
          this.Alertservice.presentAlert('Warning',"Enter atleast one BusinessUnit");
          // this.hidespin($ionicLoading);
  
          return false;
        }
      }
  
      if(this.data.businessunit == 12){
        if (this.data.insurance == "" || this.data.insurance == undefined) {
          // var myPopup = $ionicPopup.show({
          //   template: '<center>Enter Insurance</center>',
          //   title: 'Warning',
          //   scope: this,
          //   buttons: [{
          //     text: 'OK',
          //     type: 'button button-clear button-assertive'
          //   }]
          // });
          // this.hidespin($ionicLoading);
          this.Alertservice.presentAlert('Warning',"Enter Insurance");
          return false;
        }
      }
  
      if(this.data.businessunit == 13){
        if ((this.data.caption == "" || this.data.caption == undefined) || (this.data.amount == "" || this.data.amount == undefined)) {
          // var myPopup = $ionicPopup.show({
          //   template: '<center>Enter Caption and Amount</center>',
          //   title: 'Warning',
          //   scope: this,
          //   buttons: [{
          //     text: 'OK',
          //     type: 'button button-clear button-assertive'
          //   }]
          // });
          // this.hidespin($ionicLoading);
          this.Alertservice.presentAlert('Warning',"Enter Caption and Amount");
          return false;
        }
      }


    if (customername1 == "") {

      var customername = null;
    } else {
      var customername = customername1;
    }
    if (this.data1.new == "YES") {
      console.log(lastname1)
      if (lastname1 == "") {

        // var myPopup = $ionicPopup.show({
        //   template: '<center>Enter Last Name</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        // this.hidespin($ionicLoading);
        this.Alertservice.presentAlert('Warning',"Enter Last Name");
        return false;
      } else {
        var lastname = lastname1;
      }
    }

    if (this.data1.exist == "YES") {
      if (lastname1 == "") {
        var lastname = null;
      } else {
        var lastname = lastname1;
      }
    }

    if (this.data1.new == "YES") {
      if (mobile1 == "") {

        // var myPopup = $ionicPopup.show({
        //   template: '<center>Enter Mobile Number</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        // this.hidespin($ionicLoading);
        this.Alertservice.presentAlert('Warning',"Enter Mobile Number");
        return false;
      } else {
        var mobile = mobile1;
      }
    }

    if (this.data1.exist == "YES") {
      if (mobile1 == "") {
        var mobile = null;
      } else {
        var mobile = mobile1;
      }
    }

    if (purpose == "") {
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Select Purpose</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      this.Alertservice.presentAlert('Warning',"Select Purpose");
      return false;

    }

    if (responseid == "") {
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Select Call OutCome</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      this.Alertservice.presentAlert('Warning',"Select Call OutCome");
      return false;

    }



    if (remarks1 == "") {
      var remarks = null;

    } else {
      var remarks = remarks1;
    }

    // var courtesyResidentialPhone = document.getElementById('courtesyResidentialPhone').value;
    if (this.data.courtesypurp == "5" && this.data.current == "Y") {

      if ((this.data.collected_accno == null || this.data.collected_accno == undefined || this.data.collected_accno == "") || (this.data.collectamount == null || this.data.collectamount == undefined || this.data.collectamount == "") || (this.data.collected_date == null || this.data.collected_date == "" || this.data.collected_date == undefined)) {
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Fill All Details Of Amount Collected</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        // this.hidespin($ionicLoading);
        this.Alertservice.presentAlert('Warning',"Fill All Details Of Amount Collected");
        return false;
      } else {
        var collectionmode = "Y";
        var accountno = this.data.collected_accno;
        var amount = this.data.collectamount;
        // this.collectiondate1 = this.data.collected_date; command by sijin
        // var collectiondate = $filter('date')(this.collectiondate1, 'yyyy-MM-dd'); command by sijin
      }
    }

    if (this.data.courtesypurp == "3") {
      if (this.data.deposits == 0 && this.data.casa == 0 && this.data.advance == 0 && this.data.insurance == 0) {
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Fill Details Of Expected Business</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        // this.hidespin($ionicLoading);
        this.Alertservice.presentAlert('Warning',"Fill Details Of Expected Business");
        return false;
      } else {
        var casaVal = this.data.casa;
        var depositVal = this.data.deposits;
        var AdvanceVal = this.data.advance;
        var InsuranceVal = this.data.insurance;
      }
    }

    if (this.data.deposits != 0 || this.data.casa != 0 || this.data.advance != 0 || this.data.insurance != 0) {
      var casaVal = this.data.casa;
      var depositVal = this.data.deposits;
      var AdvanceVal = this.data.advance;
      var InsuranceVal = this.data.insurance;
    }


    if (this.data.courtesypurp != "3") {
      var casaVal:any = 0;
      var depositVal:any = 0;
      var AdvanceVal:any = 0;
      var InsuranceVal:any = 0;

    }



    if (this.data.courtesypurp != "5") {

      var collectionmode:string = null;

    }

    if (collectionmode == null) {
      var accountno = null;
      var amount = null;
      var collectiondate = null;

    }



    if (this.data.courtesypurp == "5") {
      if (this.data.current == "" || this.data.current == undefined || this.data.current == null || this.data.current == 'N') {
        var collectionmode:string = null;

      }
    }

    if (this.data.courtesypurp == "3") {
      if (this.data.businessunit == null || this.data.businessunit == undefined || this.data.businessunit == "") {
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Select Business Unit</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        // this.hidespin($ionicLoading);
        this.Alertservice.presentAlert('Warning',"Select Business Unit");
        return false;

      } else {
        var BusinessUnit = this.data.businessunit;
      }
    }


    if (purpose != "3") {

      var BusinessUnit:any = 0;
    }

    if (this.data.callout == "2") {
      if ((this.data.followupdate == null || this.data.followupdate == undefined || this.data.followupdate == "") || (this.data.followuptime == null || this.data.followuptime == undefined || this.data.followuptime == "")) {
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Provide Followup Details</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        // this.hidespin($ionicLoading);
        this.Alertservice.presentAlert('Warning',"Provide Followup Details");
        return false;


      } else {
        this.nextcalldate1 = moment(this.data.followupdate).format('YYYY-MM-DD');
      this.followuptime = moment(this.data.followuptime).format('h.mm a');
        // this.nextcalldate1 = $filter('date')(this.data.followupdate, 'yyyy-MM-dd');
        // this.followuptime = $filter('date')(this.data.followuptime, 'h.mm a');
        var nextcalldate = this.nextcalldate1 + ' ' + this.followuptime;

      }

    }

    if (this.data.callout != "2") {
      var nextcalldate = " ";

    }

    if (calltype == "") {
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Select Call Type</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      this.Alertservice.presentAlert('Warning',"Select Call Type");
      return false;

    }

    if (calltype == "P" && this.data.jointvisit == "YES") {

      if (this.data.jointusercode == null || this.data.jointusercode == undefined || this.data.jointusercode == "") {
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
        this.Alertservice.presentAlert('Warning',"Enter Joint Usercode");
        return false;
      } else {
        var jointvisit = "Y";
        var jointcode = this.data.jointusercode;

      }


    }

    if (calltype != "P") {

      var jointvisit:string = null;

    }

    if (calltype == "P") {
      if (this.data.jointvisit == "" || this.data.jointvisit == undefined || this.data.jointvisit == null || this.data.jointvisit == "NO") {

        var jointvisit:string = null;
      }

    }

    if (jointvisit == null) {
      var jointcode = null;
    }

    var Endtime = null;
    var Totime = null;

    if (this.data1.exist == "Y") {
      var mode = 'E';
    } else {
      var mode = 'N';


    }





    /*if (depositVal == "") {
          debugger;
          var myPopup = $ionicPopup.show({
            template: '<center>Select Deposit</center>',
            title: 'Warning',
            scope: this,
            buttons: [{
              text: 'OK',
              type: 'button button-clear button-assertive'
            }]
          });
          this.hidespin($ionicLoading);
          return false;

        }*/
    if (this.data.deposits == null || this.data.deposits == undefined || this.data.deposits == "") {

      var depositVal = null;
      /*   var myPopup = $ionicPopup.show({
              template: '<center>Select Deposit</center>',
              title: 'Warning',
              scope: this,
              buttons: [{
                text: 'OK',
                type: 'button button-clear button-assertive'
              }]
            });*/

    } else {

      var depositVal = this.data.deposits;

    }

    if (this.data.casa == null || this.data.casa == undefined || this.data.casa == "") {

      var casaVal = null;

    } else {

      var casaVal = this.data.casa;

    }

    if(this.data.businessunit == 13){

      
      if (this.data.caption == null || this.data.caption == undefined || this.data.caption == "") {

        var  AdvanceVal = null;
  
      } else{
  
        var AdvanceVal = this.data.caption;
  
      }
    }
    else{

      if (this.data.advance == null || this.data.advance == undefined || this.data.advance == "") {

        var AdvanceVal = null;

      } else{

        var AdvanceVal = this.data.advance;

      }
    }

    if(this.data.businessunit == 13){

      
      if (this.data.amount == null || this.data.amount == undefined || this.data.amount == "") {

        var InsuranceVal = null;
  
      } else{
  
        var InsuranceVal = this.data.amount;
  
      }
    }
    else{

      if (this.data.insurance == null || this.data.insurance == undefined || this.data.insurance == "") {

        var InsuranceVal = null;

      } else {

        var InsuranceVal = this.data.insurance;

      }

  }


      //Ins Change Val Start
      
      if (this.data.insurancetype == null || this.data.insurancetype == undefined || this.data.insurancetype == "") {

       var insurancetype = 0;

      } else {

        var insurancetype:number = this.data.insurancetype;

      }

      if (this.data.leadsource == null || this.data.leadsource == undefined || this.data.leadsource == "") {

        var leadsource = 0;

      } else {

        var leadsource:number = this.data.leadsource;

      }

      if (this.data.referredby == null || this.data.referredby == undefined || this.data.referredby == "") {

        var referredby = 0;

      } else {

        var referredby:number = this.data.relationship;

      }
      //Ins Change Val End
    if (this.data.selectele == "P") {
      console.log(this.data.addressname)
      if ((this.data.addressname == "") || ((this.data.addressname == 'undefined') || (this.data.addressname == undefined))) {
        console.log(this.data.addressname)
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Enter Your Location</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        // this.hidespin($ionicLoading);
        this.Alertservice.presentAlert('Warning',"Enter Your Location");
        return false;

      } else {
        //alert(latvalue);
        // var latvalue = this.lat1; sijin by command
        //console.log(latvalue)
        // var langvalue = this.lng1; sijin by command
        //console.log(latvalue)
        var address = this.data.addressname;
      }


    } else {
      var latvalue = null;
      var langvalue = null;
      var address = null;
    }
console.log(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, mode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit, depositVal, casaVal, AdvanceVal, InsuranceVal)

    if (this.data.selectele == "P") {
      console.log("calltype is  p");
      // this.showspin();
      this.Apiservice.updateentryscreen(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, mode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit, depositVal, casaVal, AdvanceVal, InsuranceVal+'_'+insurancetype+'_'+leadsource+'_'+referredby)

        /*console.log(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, mode,callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit,depositVal,casaVal,AdvanceVal,InsuranceVal);*/

        .then((response:any)=> {

          // this.closecustomeractionModal();

          // this.hidespin();
          console.log(response);
          response = JSON.parse(response);
          var success:any = [];
          success = response;
          console.log(success)
          if (success !== "") {
            console.log(success);
            console.log(latvalue);
            console.log(langvalue)
            console.log(address);
            console.log(purpose);
            console.log(cbsid)
            // this.showspin();
            this.Apiservice.saveaddress(success, latvalue, langvalue, address, purpose, cbsid)
              .then((response:any)=> {
                // this.hidespin();
                console.log(response);

                if (response == '"Yes"' || response == "Yes") {

                  // $("#mapshowimage").css("display", "none");
                  // console.log("$(#mapshowimage).css(display, none)")

                  // var myPopup = $ionicPopup.show({
                  //   template: '<center>Saved Successfully</center>',
                  //   title: 'Success',
                  //   scope: this,
                  //   buttons: [{
                  //     text: 'OK',
                  //     type: 'button button-clear button-assertive',
                  //     // onTap: function(e) {
                  //     //  console.log("coming map")


                  //     //      }
                  //   }]
                  // });
                  // this.closecustomeractionModal();

                  this.Alertservice.presentAlert('Success',"Saved Successfully");
                //  this.mycustomeraction.hide();
                }
                else {
                  // var myPopup = $ionicPopup.show({
                  //   template: '<center>Error While Saving</center>',
                  //   title: 'Error',
                  //   scope: this,
                  //   buttons: [{
                  //     text: 'OK',
                  //     type: 'button button-clear button-assertive'
                  //   }]
                  // });
                  this.Alertservice.presentAlert('Warning',"Error While Saving");
                }
              })
              // .error((err)=> {
              //   // this.hidespin();
              // })

          }


          /* if (success == 4) {
   
             var myPopup = $ionicPopup.show({
               template: '<center>This Customer Is Not Mapped With You</center>',
               title: 'Warning',
               scope: this,
               buttons: [{
                 text: 'OK',
                 type: 'button button-clear button-assertive'
               }]
             });
   
           }*/

          //  else if
          //   (success == 2) {

          //   var myPopup = $ionicPopup.show({
          //     template: '<center>This Customer Is Not Mapped With You</center>',
          //     title: 'Warning',
          //     scope: this,
          //     buttons: [{
          //       text: 'OK',
          //       type: 'button button-clear button-assertive'
          //     }]
          //   });
          // } 

          // else if
          //  (success == 3) {

          //   var myPopup = $ionicPopup.show({
          //     template: '<center>This Customer Already Mapped To You. No Need To Convert</center?',
          //     title: 'Warning',
          //     scope: this,
          //     buttons: [{
          //       text: 'OK',
          //       type: 'button button-clear button-assertive'
          //     }]
          //   });

          // } 
          // else if (success[0].response == 1)
          //  {
          //   var myPopup = $ionicPopup.show({
          //     template: 'Please Visit Pending Courtesy Call Screen As It Is In FOLLOW UP Status' + success[0].Column1,
          //     title: 'Warning',
          //     scope: this,
          //     buttons: [{
          //       text: 'OK',
          //       type: 'button button-clear button-assertive'
          //     }]
          //   });
          // }

          //  else {

          //   var myPopup = $ionicPopup.show({
          //     template: '<center>Saved Successfully</center>',
          //     title: 'Success',
          //     scope: this,
          //     buttons: [{
          //       text: 'OK',
          //       type: 'button button-clear button-assertive'
          //     }]
          //   });


          // }

          this.data = {};
          this.assigned.customerid = "";
          this.entry = {};

        })
        // .error(function (response) {
        //   this.closecustomeractionModal();
        //   console.log(response);
        //   this.hidespin();
        // });


    }
    else {
      console.log("calltype is not p");
      // this.showspin();
      this.Apiservice.updateentryscreen(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, mode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit, depositVal, casaVal, AdvanceVal, InsuranceVal+'_'+insurancetype+'_'+leadsource+'_'+referredby)

        /*console.log(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, mode,callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit,depositVal,casaVal,AdvanceVal,InsuranceVal);*/

        .then((response:any)=>{

          // this.hidespin();
          console.log(response);
          response = JSON.parse(response);
          var success:any = [];
          success = response;
          console.log(success)
          if (success == 4) {

            // var myPopup = $ionicPopup.show({
            //   template: '<center>This Customer Is Not Mapped With You</center>',
            //   title: 'Warning',
            //   scope: this,
            //   buttons: [{
            //     text: 'OK',
            //     type: 'button button-clear button-assertive'
            //   }]
            // });
            this.Alertservice.presentAlert('Warning',"This Customer Is Not Mapped With You");
          } else if (success == 2) {
            this.Alertservice.presentAlert('Warning',"This Customer Is Not Mapped With You");
            // var myPopup = $ionicPopup.show({
            //   template: '<center>This Customer Is Not Mapped With You</center>',
            //   title: 'Warning',
            //   scope: this,
            //   buttons: [{
            //     text: 'OK',
            //     type: 'button button-clear button-assertive'
            //   }]
            // });
          } else if (success == 3) {
            this.Alertservice.presentAlert('Warning',"This Customer Already Mapped To You. No Need To Convert");
            // var myPopup = $ionicPopup.show({
            //   template: '<center>This Customer Already Mapped To You. No Need To Convert</center>',
            //   title: 'Warning',
            //   scope: this,
            //   buttons: [{
            //     text: 'OK',
            //     type: 'button button-clear button-assertive'
            //   }]
            // });

          } else if (success[0].response == 1) {
            this.Alertservice.presentAlert('Warning',"Please Visit Pending Courtesy Call Screen As It Is In FOLLOW UP Status" + success[0].Column1);
            // var myPopup = $ionicPopup.show({
            //   template: 'Please Visit Pending Courtesy Call Screen As It Is In FOLLOW UP Status' + success[0].Column1,
            //   title: 'Warning',
            //   scope: this,
            //   buttons: [{
            //     text: 'OK',
            //     type: 'button button-clear button-assertive'
            //   }]
            // });
          } else {
            this.Alertservice.presentAlert('Success',"Saved Successfully");
            // var myPopup = $ionicPopup.show({
            //   template: '<center>Saved Successfully</center>',
            //   title: 'Success',
            //   scope: this,
            //   buttons: [{
            //     text: 'OK',
            //     type: 'button button-clear button-assertive'
            //   }]
            // });


          }

          this.data = {};
          this.assigned.customerid = "";
          this.entry = {};
          // this.closecustomeractionModal();
        })
        // .error(function (response) {

        //   console.log(response);
        //   this.hidespin();

        // });

    }
  }



 
}
