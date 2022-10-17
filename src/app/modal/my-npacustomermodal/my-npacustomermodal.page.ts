import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { AlertServiceService } from 'src/app/service/alert-service.service';
import { NavParams } from '@ionic/angular';
import * as moment from "moment"; 
import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'actStatusPipe'
})
@Component({
  selector: 'app-my-npacustomermodal',
  templateUrl: './my-npacustomermodal.page.html',
  styleUrls: ['./my-npacustomermodal.page.scss'],
})
export class MyNPAcustomermodalPage implements OnInit {
  data:any={};
  callOutCome: any;
  accNo: any;
  customeractiondata: any;
  enable: boolean;
  Npacustomerdata: any;
  firstWords: any[];
  firstname1: any;
  myvalue: boolean;
  getusername: any;
  Collectiondate1: any;
  nextcalldate1: string;
  followuptime: string;
  businessunit: any;
  constructor(private Alertservice:AlertServiceService,private navParams:NavParams,private Apiservice:ApiServiceService,private modalController:ModalController) { }

  ngOnInit() {
    let Cusdata = this.navParams.get('Data');
    this.data.customerid = Cusdata.CBSCustomerID
    console.log(Cusdata)
    this.NPAAccountactionModal(Cusdata);
    this.getcalloutcome();
    this.getAccountNumber(Cusdata.CBSCustomerID);
  }
  getcalloutcome(){
    this.Apiservice.getcalloutcome1().then((res:any)=>{
  // console.log(JSON.parse(res));
  var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
  this.callOutCome = response
  
    }) 
  }
  
  
  checkusercode(val) {
    var usercode = val;
    var branchid = window.localStorage['branchID'];

    // this.showspin();
    this.Apiservice.getusername(usercode, branchid)
      .then((res:any)=> {
        // this.hidespin();
        console.log(response);
        var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
        // response = JSON.parse(response);
        if (response == "This User Not in this Branch") {

          // var myPopup = $ionicPopup.show({
          //   template: '<center>This User Is Not Under This Branch</center>',
          //   title: 'Warning',
          //   scope: this,
          //   buttons: [{
          //     text: 'OK',
          //     type: 'button button-clear button-assertive'
          //   }]
          // });
          this.Alertservice.presentAlert('Warning',"This User Is Not Under This Branch");
          this.data.jointusername = "";

        }

        else {
          this.getusername = response;
          this.data.jointusername = this.getusername;
          this.data.jointusername = this.getusername;
          console.log(this.getusername)
        }

      })
      // .error(function (response) {
      //   this.hidespin();
      //   console.log(response);
      // });
  }
  getAccountNumber(obj) {
    var customerID = obj;

    // this.showspin();

    this.Apiservice.getcustomerAccount(customerID)
      .then( (res:any)=> {
        console.log(response);
        var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
        // response = JSON.parse(response);
        this.accNo = response;
        // this.hidespin();

      })
      // .error(function (response) {
      //   console.log(response);
      //   this.hidespin();

      // });
  }

  getamount(customer_id, date, acc_num) {
    console.log(customer_id)
    // moment('date')(date, 'dd-MM-yyyy');
    var formatted_date = moment(date).format('DD-MM-YYYY');
    // this.showspin();
    this.Apiservice.getamount(formatted_date, acc_num, customer_id).then((resp:any)=>{
      console.log(resp)
      if (resp.data == "No collection entry is available.Please check") {
        // var myPopup = $ionicPopup.show({
        //   template: '<center>No Collection Entry Is Available.Please Check</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        this.Alertservice.presentAlert('Warning',"No Collection Entry Is Available.Please Check");

      } else {
        var amount = resp.data;
        amount = amount.replace(/\"/g, "")
        this.data.collectamount = amount;
      }

      // this.hidespin();
    });
    // , function (error) {
    //   console.log(error);
    //   this.hidespin();
    
  }

  getbusinessunit(){
    //  this.showspin();
      this.Apiservice.getbusinessunit()
        .then( (res:any)=> {
          // console.log(response);
          // response = JSON.parse(response);
          var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
         this.businessunit = response;
  
        //  this.hidespin();
        })
        // .error(function (response) {
        //  this.hidespin();
        //   console.log(response);
  
  
        // });
  
  
    }
  checkbox(Event){
    console.log(Event);
    
    if(Event){
      this.data.jointvisit = 'YES';
    }else{
      this.data.jointvisit = "NO"
    }
    console.log(this.data.jointvisit)
  }


  NPAAccountactionModal(items){
    console.log(items);
    this.data.callout = '2';
    this.data.addressname = "";
    // this.data.callout = "";
    this.data.selectele = "";
    this.data.courtesypurp = "";
    this.data.followupdate = "";
    this.data.followuptime = "";
    this.data.jointvisit = "";
    this.data.jointcode = "";
    this.data.jointusername = "";
    this.customeractiondata = items;
    window.localStorage['customerID'] = this.customeractiondata.CBSCustomerID;
    window.localStorage['callID'] = this.customeractiondata.RowID;
    this.data.customerid=this.customeractiondata.CBSCustomerID;
    var customerid = items.CBSCustomerID
    this.getAccountNumber(customerid);
   // this.data.collected_accno = this.customeractiondata.accountnumber;
    // this.NPAAccountaction.show(); cmd by sijin

    if (customerid == null) {

      this.enable = false;

    }
    if (customerid != null) {
      this.enable = true;
      // this.showspin();
      this.Apiservice.getcustomerdetails(customerid)
        .then( (res:any)=> {
          // this.hidespin();
          // response = JSON.parse(response);
          var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
          this.Npacustomerdata = response;
          console.log(this.Npacustomerdata)
          if(this.Npacustomerdata != "" && this.Npacustomerdata != undefined)
          {
          this.data.customerid = customerid;
          this.data.customername = this.Npacustomerdata[0].Nfirstname + ' ' + this.Npacustomerdata[0].Nlastname;
          window.localStorage['customerName'] = this.data.customername;
          this.data.firstname = this.Npacustomerdata[0].Nfirstname;
          this.data.lastname = this.Npacustomerdata[0].Nlastname;
          this.data.mobile = this.Npacustomerdata[0].Nmobile;
          this.data.resphnno = this.Npacustomerdata[0].Nresidencephone;
          this.data.email = this.Npacustomerdata[0].Nemail;

          this.firstWords = [];

          var firstname = [];

          if (this.Npacustomerdata.length > 0) {
            // this.showspin();
          }
          for (let i = 0; i < this.Npacustomerdata.length; i++) {

            firstname = this.Npacustomerdata[i].Nfirstname.split(" ");

            this.firstWords.push(firstname[0]);
            this.Npacustomerdata[i].firstname = this.firstWords[i];
            this.firstname1 = this.Npacustomerdata[i].firstname;
            if (i == this.Npacustomerdata.length - 1) {
              // this.hidespin();
            }
          }

          console.log(this.Npacustomerdata[0].Add1);
          if(this.Npacustomerdata[0].Add1 != undefined || this.Npacustomerdata[0].Add2 != undefined || this.Npacustomerdata[0].Add3 != undefined || this.Npacustomerdata[0].Add4 != undefined || this.Npacustomerdata[0].PIN != undefined){

            var respAdd1= this.Npacustomerdata[0].Add1;
            var add1 = respAdd1.replace("/", "-");
            console.log(add1);
            var respAdd2= this.Npacustomerdata[0].Add2;
            var add2 = respAdd2.replace("/", "-");
            console.log(add2);

          this.data.addressname = add1+' '+add2+' '+this.Npacustomerdata[0].Add3+' '+this.Npacustomerdata[0].Add4+' '+this.Npacustomerdata[0].PIN;
          console.log(this.data.addressname);
          }
          if(this.data.addressname != "" && this.data.addressname != undefined)
          { 
            console.log(this.data.addressname);
           this.myvalue = true;
           //this.data.selectele='P';
          //  this.setlatlong(this.data.addressname);cmd by sijin
          }
         
         }
        })
        // .error(function (response) {
        //   console.log(response);
        //   this.hidespin();
        // });
    }
   // console.log(obj);
    console.log(this.data.addressname);
        if(this.data.addressname != '' &&this.data.addressname != 'undefined' &&this.data.addressname != undefined){
          // this.typeshowmap1(this.lat1, this.lng1,this.data.addressname) cmd by sijin
        }
}


saveNpmCustomer() {
  var usercode = window.localStorage['userCode'];
var username = window.localStorage['userName'];
var branchid = window.localStorage['branchID'];
var CallerId = window.localStorage['userID'];
var callid = null;
  // this.showspin();
  var mobile1 = this.data.mobile;
  var calltype = this.data.selectele;
  var remarks1 = this.data.Remarks;
  var firstname = this.data.firstname;
  var lastname1 = this.data.lastname;
  var purpose = this.data.courtesypurp;
  var customername = this.data.firstname;
  var responseid = this.data.callout;
  var cbsid = window.localStorage['customerID'];

  console.log(responseid)
  console.log(remarks1)
  if (lastname1 == "" || lastname1 == null || lastname1 == undefined) {

    var lastname = null;
  } else {
    var lastname = lastname1;
  }  
  if (mobile1 == "" || mobile1 == null || mobile1 == undefined) {

    var mobile = null;
  } else {
    var mobile = mobile1;
  }
  if (remarks1 == "" || remarks1 == null || remarks1 == undefined) {

    var remarks = null;
  } else {
    var remarks = remarks1;
  }
  console.log(this.data.courtesypurp)

  if (purpose == undefined || purpose == null || purpose == "") {
    // var myPopup = $ionicPopup.show({
    //   template: '<center>Select Purpose</center>',
    //   title: 'Warning',
    //   scope: this,
    //   buttons: [{
    //     text: 'OK',
    //     type: 'button button-clear button-assertive'
    //   }]
    // });
    this.Alertservice.presentAlert('Warning',"Select Purpose");
    // this.hidespin($ionicLoading);

    return false;

  }

  if (purpose == "5" && this.data.current == "Y") {
    if ((this.data.collected_date == null || this.data.collected_date == undefined || this.data.collected_date == "") || (this.data.collected_accno == null || this.data.collected_accno == undefined || this.data.collected_accno == "") || (this.data.collectamount == null || this.data.collectamount == "" || this.data.collectamount == undefined)) {

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
      this.Collectiondate1 = this.data.collected_date;
      var collectiondate = moment(this.Collectiondate1).format('YYYY-MM-DD');
      var accountno = this.data.collected_accno;
      var amount = this.data.collectamount;
    }

  }


  if (purpose != "5") {
    var collectionmode:string = null;

  }

  if (collectionmode == null) {
    var accountno = null;
    var amount = null;
    var collectiondate:string = null;

  }

  if (purpose == 5) {
    if (this.data.current == "" || this.data.current == undefined || this.data.current == null || this.data.current == "N") {

      var collectionmode:string = null;

    }

  }


  console.log(this.data.current)

  if (this.data.callout == "" || this.data.callout == undefined || this.data.callout == null) {

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



  if (responseid == "2") {
    if ((this.data.followupdate == null || this.data.followupdate == undefined || this.data.followupdate == "") || (this.data.followuptime == undefined || this.data.followuptime == "" || this.data.followuptime == null)) {
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
      this.followuptime = moment(this.data.followuptime).format('h.mm a')
     //  this.followuptime = $filter('date')(this.data.followuptime, 'h.mm a');
       var nextcalldate = this.nextcalldate1 + ' ' +this.followuptime;
      // this.nextcalldate1 = $filter('date')(this.data.followupdate, 'yyyy-MM-dd');
      // this.followuptime = $filter('date')(this.data.followuptime, 'h.mm a');
      // var nextcalldate = this.nextcalldate1 + ' ' + this.followuptime;

    }

  }

  if (responseid != "2") {
    var nextcalldate = " ";
    //          var Endtime = null;
    // var Totime = null;

  }

  if (this.data.selectele == "" || this.data.selectele == undefined || this.data.selectele == null) {
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

  if (this.data.selectele == "P" && this.data.JointVisit == "YES") {
    if (this.data.jointcode == null || this.data.jointcode == "" || this.data.jointcode == undefined) {
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
    }

    else {
      var jointvisit = "Y";
      var jointcode = this.data.jointcode;

    }


  }

  if (this.data.selectele == "P") {
    if (this.data.JointVisit == "" || this.data.JointVisit == undefined || this.data.JointVisit == null || this.data.JointVisit == "N") {

      var jointvisit:string = null;
    }

  }

  if (this.data.selectele != "P") {

    var jointvisit:string = null;

  }

  if (jointvisit == null) {
    var jointcode = null;
  }
  var BusinessUnit = 0;
  var Endtime = null;
  var Totime = null;
  console.log(this.data.followupdate)
  console.log(this.data.followuptime)
  console.log(this.data.JointVisit)
console.log(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit)
  // this.showspin();
  this.Apiservice.updateNPACustomer(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit)
    .then((res:any)=> {
      console.log(response);
      var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
      // this.hidespin();
      // response = JSON.parse(response);
      var success = [];
      success = response;
      window.localStorage['date'] = "";

      if (success[0].response == 1) {

        // var alertPopup = $ionicPopup.alert({
        //   title: 'Warning',
        //   template: 'Please Visit Follow Up Screen As It Is In FOLLOW UP Status ' + success[0].Column1
        // });
        this.Alertservice.presentAlert('Warning',"Please Visit Follow Up Screen As It Is In FOLLOW UP Status" + success[0].Column1);
        // alertPopup.then(function (res) {
        //   this.UpdateModal.hide();
        //   // Custom functionality....
        // });

      }
      else {


        // var alertPopup = $ionicPopup.alert({
        //   title: 'Success',
        //   template: 'Saved Successfully'
        // });
        this.Alertservice.presentAlert('Success',"Saved Successfully");
        // alertPopup.then(function (res) {
        //   this.NPAAccountaction.hide();
        //   // Custom functionality....
        // });

      }
      this.data = {};
      // this.getNpaRecAmount();Cmd by sijin

    })
    // .error(function (response) {
    //   this.hidespin();
    //   console.log(response);
    // });


}



  modelDissmiss(){
    this.modalController.dismiss();
   }
}
