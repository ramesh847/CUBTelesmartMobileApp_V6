import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { AlertServiceService } from 'src/app/service/alert-service.service';
import * as moment from "moment"; 
import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'actStatusPipe'
})
@Component({
  selector: 'app-expressleadmodal',
  templateUrl: './expressleadmodal.page.html',
  styleUrls: ['./expressleadmodal.page.scss'],
})
export class ExpressleadmodalPage implements OnInit {
  data:any={}
  express:any={}
  callOutCome: any;
  getusername: any;
  callPurpose: any;
  businessunit: any;
  customeractiondata: any;
  enable: boolean;
  expressLeadcustomerdata: any;
  firstWords: any[];
  firstname1: any;
  myvalue: boolean;
  assignedvisit:any= {};
  Collectiondate1: any;
  nextcalldate1: string;
  followuptime: string;
  constructor(private modalController:ModalController,private Alertservice:AlertServiceService,private Apiservice:ApiServiceService,private navParams:NavParams) { }

  ngOnInit() {
    let Cusdata = this.navParams.get('Data');
    console.log(Cusdata);
    // this.express.customerid = Cusdata.CBSCUSTOMERID
    this.getcalloutcome();
    this.getpurpose();
    this.getbusinessunit();
    this.expressLeadactionModal(Cusdata);
  }
  modelDissmiss(){
    this.modalController.dismiss();
   }
  getcalloutcome(){
    this.Apiservice.getcalloutcome1().then((res:any)=>{
  // console.log(JSON.parse(res));
  var response = res.data;
  response = JSON.parse(response);
  response = JSON.parse(response);
  this.callOutCome = response;
  
    }) 
  }
  getbusinessunit(){
    //  this.showspin();
      this.Apiservice.getbusinessunit()
        .then( (res:any)=> {
          console.log(response);
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
  checkusercode(val) {
    var usercode = val;
    var branchid = window.localStorage['branchID'];
    var struserCode = window.localStorage['userCode'];
    // this.showspin();
    // callAPI.getusername(struserCode,usercode, branchid)
    //   .success(function(response) {
    //     this.hidespin();
    //     console.log(response);
    //     response = JSON.parse(response);
    //     if (response == "This User Not in this Branch") {

    //       var myPopup = $ionicPopup.show({
    //         template: '<center>Please Enter The Valid Emp Code</center>',
    //         title: 'Warning',
    //         scope: this,
    //         buttons: [{
    //           text: 'OK',
    //           type: 'button button-clear button-assertive'
    //         }]
    //       });
    //       this.data.jointusername = "";
    //       this.data.jointusercode = "";

    //     } else {
    //       this.getusername = response;
    //       this.data.jointusername = this.getusername;
    //       console.log(this.getusername)
    //     }

    //   })

    this.Apiservice.checkJointCode(struserCode,usercode, branchid)
    .then((res:any)=> {
      // this.hidespin();
      var response = res.data;
      response = JSON.parse(response);
      response = JSON.parse(response);
      if (response == "This User Not in this Branch") {

        // var myPopup = $ionicPopup.show({
        //   template: '<center>Please Enter The Valid Emp Code</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        this.Alertservice.presentAlert('Warning',"Please Enter The Valid Emp Code");
        this.express.jointusername = "";
        this.express.jointusercode = "";

      }else if (response == "Please Enter the Valid User Code") {

        // var myPopup = $ionicPopup.show({
        //   template: '<center>Please Enter the Valid User Code</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        this.Alertservice.presentAlert('Warning',"Please Enter the Valid User Code");
        this.express.jointusername = "";
        this.express.jointusercode = "";

      }else if (response == "Please do not enter same user code") {
        this.Alertservice.presentAlert('Warning',"Please do not enter same user code");
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Please do not enter same user code</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        this.express.jointusername = "";
        this.express.jointusercode = "";

      }  else {
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
  checkbox(Event){
    console.log(Event);
    
    if(Event){
      this.express.jointvisit = 'YES';
    }else{
      this.express.jointvisit = "NO"
    }
    console.log(this.express.jointvisit)
  }

  getpurpose(){
    this.Apiservice.getpurpose().then((res:any)=>{
      console.log(JSON.parse(res))
      var response = res.data;
  response = JSON.parse(response);
  response = JSON.parse(response);
      this.callPurpose = response;
    })
  }

 expressLeadactionModal(items) {
    console.log(items);
   this.express.addressname = "";
   this.express.callout = "";
   this.express.selectele = "";
   this.express.courtesypurp = "3";
   this.express.followupdate = "";
   this.express.followuptime = "";
   this.express.jointvisit = "";
   this.express.jointusercode = "";
   this.express.jointusername = "";
   this.customeractiondata = items;
    window.localStorage['customerID'] =this.customeractiondata.CBSCUSTOMERID;
    window.localStorage['callID'] =this.customeractiondata.CALLID;
    console.log(this.customeractiondata.CBSCUSTOMERID)
    if(this.customeractiondata.CBSCUSTOMERID != '' &&this.customeractiondata.CBSCUSTOMERID != "" &&this.customeractiondata.CBSCUSTOMERID != undefined &&this.customeractiondata.CBSCUSTOMERID != null ){
      console.log('test')
   this.express.customerid=this.customeractiondata.CBSCUSTOMERID;
    var customerid = items.CBSCUSTOMERID
    }else{
     this.express.customerid=0;
      var customerid:any = 0
    }
    console.log(customerid)
  //  this.expressLeadaction.show(); cmd by sijin

    if (customerid == null) {

     this.enable = false;

    }
    if (customerid != null) {
     this.enable = true;
    //  this.showspin();
      this.Apiservice.getcustomerdetails(customerid)
        .then((res:any)=> {
        //  this.hidespin();
        var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
         this.expressLeadcustomerdata = response;
          console.log(this.expressLeadcustomerdata)
          if(this.expressLeadcustomerdata != "" &&this.expressLeadcustomerdata != undefined)
          {
         this.express.customerid = customerid;
         this.express.customername =this.expressLeadcustomerdata[0].Nfirstname + ' ' +this.expressLeadcustomerdata[0].Nlastname;
          window.localStorage['customerName'] =this.express.customername;
         this.express.firstname =this.expressLeadcustomerdata[0].Nfirstname;
         this.express.lastname =this.expressLeadcustomerdata[0].Nlastname;
         this.express.mobile =this.expressLeadcustomerdata[0].Nmobile;
         this.express.resphnno =this.expressLeadcustomerdata[0].Nresidencephone;
         this.express.email =this.expressLeadcustomerdata[0].Nemail;

         this.firstWords = [];

          var firstname = [];

          if (this.expressLeadcustomerdata.length > 0) {
          //  this.showspin();
          }
          for (let i = 0; i <this.expressLeadcustomerdata.length; i++) {

            firstname =this.expressLeadcustomerdata[i].Nfirstname.split(" ");

           this.firstWords.push(firstname[0]);
           this.expressLeadcustomerdata[i].firstname =this.firstWords[i];
           this.firstname1 =this.expressLeadcustomerdata[i].firstname;
            if (i ==this.expressLeadcustomerdata.length - 1) {
            //  this.hidespin();
            }
          }

          console.log(this.expressLeadcustomerdata[0].Add1);
          if(this.expressLeadcustomerdata[0].Add1 != undefined ||this.expressLeadcustomerdata[0].Add2 != undefined ||this.expressLeadcustomerdata[0].Add3 != undefined ||this.expressLeadcustomerdata[0].Add4 != undefined ||this.expressLeadcustomerdata[0].PIN != undefined){
            var respAdd1=this.expressLeadcustomerdata[0].Add1;
            var add1 = respAdd1.replace("/", "-");
            console.log(add1); 
            var respAdd2=this.expressLeadcustomerdata[0].Add2;
            var add2 = respAdd2.replace("/", "-");
            console.log(add2);
         this.express.addressname = add1+' '+add2+' '+this.expressLeadcustomerdata[0].Add3+' '+this.expressLeadcustomerdata[0].Add4+' '+this.expressLeadcustomerdata[0].PIN;
          console.log(this.express.addressname);
          }
          if(this.express.addressname != "" &&this.express.addressname != undefined)
          { 
            console.log(this.express.addressname);
          this.myvalue = true;
           //this.data.selectele='P';
          // this.setlatlong(this.express.addressname); cmd by sijin
          }
         
         }else{
          //this.express.firstname =this.expressLeadcustomerdata[0].Nfirstname;
         this.express.lastname =this.customeractiondata.CUSTOMERNAME;
         this.express.mobile =this.customeractiondata.MOBILE;

         }
        })
        // .error(function (response) {
        //   console.log(response);
        //  this.hidespin();
        // });
    }
   // console.log(obj);
    console.log(this.express.addressname);
        if(this.express.addressname != '' &&this.express.addressname != 'undefined' &&this.express.addressname != undefined){
        //  this.typeshowmap1(this.lat1,this.lng1,this.express.addressname) cmd by sijin
        }
}




  // this.express = {};

  saveExpress() {
    var usercode = window.localStorage['userCode'];
  var username = window.localStorage['userName'];
  var branchid = window.localStorage['branchID'];
  var cbsid = window.localStorage['customerID'];
  var CallerId = window.localStorage['userID'];
    // console.log(obj)
    // this.showspin($ionicLoading);
    var customername1 = this.express.CUSTOMERNAME;
    console.log(customername1)
    var mobile1 = this.express.mobile;
    var calltype = this.express.selectele;
    var callid = window.localStorage['callID'];
    console.log(callid)
    var remarks1 = this.express.Remarks;
    var firstname1 = this.express.firstname;
    var lastname1 = this.express.lastname;
    var responseid = this.express.callout;
    console.log(this.express.callout)
    // var purpose = window.localStorage['PurposeID'];
    var purpose = this.express.courtesypurp;
    console.log(purpose);
    //var BusinessUnit = 0;

    var cbsid = this.express.customerid;

    if (customername1 == "" || customername1 == undefined || customername1 == "undefined") {
      if(firstname1 == "" || firstname1 == undefined || firstname1 == "undefined"){
        if(lastname1 == "" || lastname1 == undefined || lastname1 == "undefined"){
          var customername = null;
        }else{
          var customername = lastname1;
        }
      }else{
        var customername = firstname1;
      }
      
    } else {
      var customername = customername1;
    }


    if (remarks1 == "") {

      var remarks = null;
    } else {
      var remarks = remarks1;
    }

    if (firstname1 == "" || firstname1 == undefined || firstname1 == "undefined") {

      var firstname = null;
    } else {
      var firstname = firstname1;
    }

    if (lastname1 == "" || lastname1 == undefined || lastname1 == "undefined") {

      var lastname = null;
    } else {
      var lastname = lastname1;
    }
    if (mobile1 == "") {

      var mobile = null;
    } else {
      var mobile = mobile1;
    }

    if (purpose == "5" && this.express.current == "Y") {
      if ((this.express.collecteddate == null || this.express.collecteddate == "" || this.express.collecteddate == undefined) || (this.express.collectedaccnumber == null || this.express.collectedaccnumber == undefined || this.express.collectedaccnumber == "") || (this.express.collectedamount == null || this.express.collectedamount == undefined || this.express.collectedamount == "")) {

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
        this.Collectiondate1 = this.express.collected_date;
        var collectiondate = moment(this.Collectiondate1).format('YYYY-MM-DD');
        var accountno = this.express.collectedaccnumber;
        var amount = this.express.collectedamount;
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


    var Endtime = null;
    var Totime = null;
    // if (this.assignedvisit.starttime == "" || this.assignedvisit.starttime == undefined || this.assignedvisit.starttime == null) {

    //     var Endtime = null;
    // }

    // if (this.assignedvisit.endtime == "" || this.assignedvisit.endtime == null || this.assignedvisit.endtime == undefined) {

    //     var Totime = null;
    // }
    if (purpose == "5") {
      if (this.express.current == "" || this.express.current == undefined || this.express.current == null || this.express.current == 'N') {

        var collectionmode:string = null;
      }
    }

       if(purpose== "3" && this.express.businessunit == null){

            // var myPopup = $ionicPopup.show({
            //       template: '<center>Select BusinessUnit</center>',
            //       title: 'Warning',
            //       scope: this,
            //       buttons: [{
            //           text: 'OK',
            //           type: 'button button-clear button-assertive'
            //       }]
            //   });
            this.Alertservice.presentAlert('Warning',"Select BusinessUnit");
                   return false;
    }

           else{
          var BusinessUnit = this.express.businessunit;
       }



    if(purpose != "3"){

       var BusinessUnit = null;
    }

    console.log(this.express.followupdate)
    console.log(this.express.followuptime)
    if (this.express.callout == "" || this.express.callout == undefined || this.express.callout == null) {

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
      if ((this.express.followupdate == "" || this.express.followupdate == undefined || this.express.followupdate == null) || (this.express.followuptime == "" || this.express.followuptime == undefined || this.express.followuptime == null)) {
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
        // this.nextcalldate1 = $filter('date')(this.express.followupdate, 'yyyy-MM-dd');
        // // var durationFilter = $filter('duration');
        // this.followuptime = $filter('date')(this.express.followuptime, 'h.mm a');
        // var nextcalldate = this.nextcalldate1 + ' ' + this.followuptime;
        this.nextcalldate1 = moment(this.express.followupdate).format('YYYY-MM-DD');
        this.followuptime = moment(this.express.followuptime).format('h.mm a')
       //  this.followuptime = $filter('date')(this.data.followuptime, 'h.mm a');
         var nextcalldate = this.nextcalldate1 + ' ' +this.followuptime;
        // var Endtime = "05.07 AM";
        // var Totime = "05.07 AM";
      }

    }

    if (responseid != "2") {
      var nextcalldate = " ";
      //          var Endtime = null;
      // var Totime = null;

    }

    if (this.express.selectele == "" || this.express.selectele == undefined || this.express.selectele == null) {
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

    if (this.express.selectele == "P" && this.express.JointVisit == "YES") {
      if (this.express.jointcode == null || this.express.jointcode == "" || this.express.jointcode == undefined) {
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
        var jointcode = this.express.jointcode;
      }


    }

    if (this.express.selectele == "P") {
      if (this.express.JointVisit == "" || this.express.JointVisit == undefined || this.express.JointVisit == null || this.express.JointVisit == 'N') {

        var jointvisit:string = null;
      }
    }

    if (this.express.selectele != "P") {

      var jointvisit:string = null;

    }

    if (jointvisit == null) {
      var jointcode = null;
    }
    if (purpose == "3") {
      //this.assigned = {};
      if ((this.express.casa != "" && this.express.casa != undefined) || (this.express.deposits != "" && this.express.deposits != undefined) || (this.express.advance != "" && this.express.advance != undefined) || (this.express.insurance != "" && this.express.insurance != undefined) || (this.express.caption != "" && this.express.caption != undefined) || (this.express.amount != "" && this.express.amount != undefined)) {
        console.log(this.express.casa);
        var casaVal = this.express.casa;
        console.log(casaVal)
        var depositVal = this.express.deposits;
        console.log(depositVal)
        var AdvanceVal = this.express.advance;
        console.log(AdvanceVal)
        var InsuranceVal = this.express.insurance;
        console.log(InsuranceVal)

      } else {
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
      }
      console.log(this.express.casa)
      if (this.express.casa == undefined || this.express.casa == "") {

        var casaVal:any = 0;
      } else {
        var casaVal = this.express.casa;
      }
      console.log(this.express.deposits)
      if (this.express.deposits == undefined || this.express.deposits == "") {
        var depositVal:any = 0;
      } else {
        var depositVal = this.express.deposits;
      }
      // console.log(this.express.advance)
      // if (this.express.advance == undefined || this.express.advance == "") {
      //   var AdvanceVal = 0;
      // } else {
      //   var AdvanceVal = this.express.advance;
      // }
      // console.log(this.express.insurance)
      // if (this.express.insurance == undefined || this.express.insurance == "") {
      //   console.log('test')
      //   var InsuranceVal = 0;
      // } else {
      //   var InsuranceVal = this.express.insurance;
      // }
      // console.log(this.express.amount)
      // if (this.express.amount == undefined || this.express.amount == "") {
      //   console.log('test1')
      //   var InsuranceVal = 0;
      // } else {
      //   var InsuranceVal = this.express.amount;
      // }
      // console.log(this.express.caption)
      // if (this.express.caption == undefined || this.express.caption == "") {
      //   var AdvanceVal = 0;
      // } else {
      //   var AdvanceVal = this.express.caption;
      // }

      if(this.express.businessunit == 13){

      
        if (this.express.caption == null || this.express.caption == undefined || this.express.caption == "") {
  
          var  AdvanceVal:any = 0;
    
        } else{
    
          var AdvanceVal = this.express.caption;
    
        }
      }
      else{
  
        if (this.express.advance == null || this.express.advance == undefined || this.express.advance == "") {
  
          var AdvanceVal:any = 0;
  
        } else{
  
          var AdvanceVal = this.express.advance;
  
        }
      }
  
      if(this.express.businessunit == 13){
  
        
        if (this.express.amount == null || this.express.amount == undefined || this.express.amount == "") {
  
          var InsuranceVal:any = 0;
    
        } else{
    
          var InsuranceVal = this.express.amount;
    
        }
      }
      else{
  
        if (this.express.insurance == null || this.express.insurance == undefined || this.express.insurance == "") {
  
          var InsuranceVal:any = 0;
  
        } else {
  
          var InsuranceVal = this.express.insurance;
  
        }
    }
    } 
    else {
      var casaVal:any = 0;
      var depositVal:any = 0;
      var AdvanceVal:any = 0;
      var InsuranceVal:any = 0;
    }

    if((remarks == "") || ((remarks == 'undefined') || (remarks == undefined))){
      remarks=null
    }else{
      remarks = remarks;
    }

    if (this.express.selectele == "P") {

      if ((this.express.addressname == "") || ((this.express.addressname == 'undefined') || (this.express.addressname == undefined))) {

        console.log(this.express.addressname)
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
        //alert("location");
        // var latvalue = this.lat1; cmd by sijin
        // console.log(latvalue)
        // var langvalue = this.lng1; cmd by sijin
        console.log(langvalue)
        var address = this.express.addressname;
        console.log(address)
      }

    } else {
      var latvalue = null;
      var langvalue = null;
      var address = null;
    }
    //purpose= BusinessUnit;
    console.log(InsuranceVal)
    console.log(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit, depositVal, casaVal, AdvanceVal, InsuranceVal)
 if (this.express.selectele == "P") {
    console.log("call type is  personal visit");
    // this.showspin();
    this.Apiservice.updateExpressLead(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit, depositVal, casaVal, AdvanceVal, InsuranceVal)
      .then((res:any)=> {
        // this.hidespin();
        console.log(response);
        var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
        var success:any = [];
        success = response;
        window.localStorage['date'] = "";
        console.log(success)
        if(success!=="")
        {
          if(success == '2'){
            // var alertPopup = $ionicPopup.alert({
            //   title: 'Alert',
            //   template: 'This customer is not mapped with you'
            // });
  
            // alertPopup.then(function(res) {
            //   this.expressLeadaction.hide();
            //   // Custom functionality....
            // }); 
            this.Alertservice.presentAlert('Warning',"This customer is not mapped with you");
          }else{
          if(success[0].response != 1){
            //cmd by sijin all
  //           console.log(success, latvalue, langvalue, address,purpose, cbsid)
  //           // this.showspin();
  //             callAPI.saveaddress(success, latvalue, langvalue, address,purpose,cbsid)
  //     .success(function(response) {
  //       this.hidespin();
  //       console.log(response)
  //        if(response == '"Yes"')
  //         { 
             
  //  var alertPopup = $ionicPopup.alert({
  //           title: 'Success',
  //           template: 'Saved Successfully'
  //         });

  //         alertPopup.then(function(res) {
  //           this.expressLeadaction.hide();
  //           // Custom functionality....
  //         });
  //         this.doRefresh();
  //         }

  //             else{
  //                var alertPopup = $ionicPopup.alert({
  //           title: 'Error',
  //           template: 'Error While Saving'
  //         });

  //         alertPopup.then(function(res) {
  //           this.expressLeadaction.hide();
  //           // Custom functionality....
  //         });
  //             }

  //     }).error(function(err){
  //       this.hidespin();
  //     })
    
   }
    else {


      // var alertPopup = $ionicPopup.alert({
      //   title: 'Warning',
      //   template: 'Please Visit Follow Up Screen As It Is In FOLLOW UP Status ' + success[0].Column1
      // });
      this.Alertservice.presentAlert('Warning',"Please Visit Follow Up Screen As It Is In FOLLOW UP Status " + success[0].Column1);
      // alertPopup.then(function(res) {
      //   this.expressLeadaction.hide();
      //   // Custom functionality....
      // });

    } 
          }
        }

        /*if (success[0].response == 1) {


          var alertPopup = $ionicPopup.alert({
            title: 'Warning',
            template: 'Please Visit Follow Up Screen As It Is In FOLLOW UP Status ' + success[0].Column1
          });

          alertPopup.then(function(res) {
            this.UpdateModal.hide();
            // Custom functionality....
          });

        } */
       /* else {


          var alertPopup = $ionicPopup.alert({
            title: 'Success',
            template: 'Saved Successfully'
          });

          alertPopup.then(function(res) {
            this.UpdateModal.hide();
            // Custom functionality....
          });


        }*/

        this.express = {};
        // this.display();
        // response = JSON.parse(response);

      })
      // .error(function(response) {
      //   console.log(response);
      //   this.hidespin();
      // });

    }

    // this.UpdateModal.hide();

    else
    {
        console.log("call type is not a personal visit");
        // this.showspin();
      this.Apiservice.updateExpressLead(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit, depositVal, casaVal, AdvanceVal, InsuranceVal)
      .then((res:any)=> {
        // this.hidespin();
        console.log(response);
        var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
        var success = [];
        success = response;
        window.localStorage['date'] = "";

        // if (success[0].response == 1) {

          if (response == 1) {
            this.Alertservice.presentAlert('Warning','Please Visit Follow Up Screen As It Is In FOLLOW UP Status ' + success[0].Column1);
          // var alertPopup = $ionicPopup.alert({
          //   title: 'Warning',
          //   template: 'Please Visit Follow Up Screen As It Is In FOLLOW UP Status ' + success[0].Column1
          // });

          // alertPopup.then(function(res) {
          //   this.expressLeadaction.hide();
          //   // Custom functionality....
          // });

        } else {

          this.Alertservice.presentAlert('Success','Saved Successfully');
          // var alertPopup = $ionicPopup.alert({
          //   title: 'Success',
          //   template: 'Saved Successfully'
          // });

          // alertPopup.then(function(res) {
          //   this.expressLeadaction.hide();
          //   // Custom functionality....
          // });

          // this.doRefresh();

        }

        this.assignedvisit = {};
        // this.display();
        // response = JSON.parse(response);

      })
      // .error(function(response) {
      //   console.log(response);
      //   this.hidespin();
      // });  
    }

  }
}
