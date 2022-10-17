import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { AlertServiceService } from 'src/app/service/alert-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-commonvisitmodel',
  templateUrl: './commonvisitmodel.page.html',
  styleUrls: ['./commonvisitmodel.page.scss'],
  providers:[DatePipe]
})
export class CommonvisitmodelPage implements OnInit {
  myvalue: boolean;
  assignedvisit: any;
  hidecalloutcome: boolean;
  UpdateModal: any;
  cust_id: any;
  purposeid: any;
  Purpose: any;
  enable: boolean;
  assignedvisitscustomerdata: any;
  calloutcome: any;
  Collectiondate1: any;
  assigned: any;
  collectionmode: any;
  collectiondate: any;
  nextcalldate1: any;
  followuptime: string;
  jointvisit: any;
  casaVal: number;
  depositVal: number;
  AdvanceVal: number;
  InsuranceVal: number;
  lat1: any;
  lng1: any;
  userid: string;
  branchid: string;
  usertype: string;
  usercode: any;
  username: any;
  cbsid: any;
  CallerId: any;
  success: any;
  commonvisitdataonload: any;
  firstWords: any[];

  constructor(private datepipe:DatePipe,private Apiservice:ApiServiceService,private navParams:NavParams,private AlertService:AlertServiceService) { }

  ngOnInit() {
    this.userid=localStorage.getItem('userID')
    this.branchid=localStorage.getItem('branchID')
    this.usertype=localStorage.getItem('userType')
    this. usercode = window.localStorage['userCode'];
  this. username = window.localStorage['userName'];
 // var branchid = window.localStorage['branchID'];
  this. cbsid = window.localStorage['customerID'];
  this. CallerId = window.localStorage['userID'];

    let Cusdata = this.navParams.get('Data');
    this.getcalloutcome()
    this.commonvisitUpdateModal(Cusdata)
  }
  getcalloutcome(){
    debugger
    this.Apiservice.getcalloutcome().then((res:any)=>{
      var response = res.data;
      response = JSON.parse(response);
      response = JSON.parse(response);
      this.calloutcome=response
    })
  }
  verifytime(){

  }
  mapshow(iterm){
    debugger
    //console.log(type);
    if(iterm=='P'){
      if(this.assignedvisit.addressname != 'undefined' && this.assignedvisit.addressname != ' '&& this.assignedvisit.addressname != ''&& this.assignedvisit.addressname != undefined){
       // this.setlatlong(this.assignedvisit.addressname);
      }
      
    }

  }

commonvisitUpdateModal(obj) {

   this.myvalue = false;
    

    this.assignedvisit.custname = obj.firstname;
    this.assignedvisit.Purpose = obj.Purpose;

    // this.assignedvisit.Purpose
//Condition to hide call closed option for NPA followup and VVIP Visits purposes
if( this.assignedvisit.Purpose != "NPA followup" && this.assignedvisit.Purpose != "VVIP Visits"){
  this.hidecalloutcome = false;
}else{
  this.hidecalloutcome = true;
}


    // this.assignedvisit.endtime = "";
    // this.assignedvisit.starttime = "";
    this.assignedvisit.current = "";

    this.assignedvisit.collecteddate = "";
    this.assignedvisit.collectedaccnumber = "";
    this.assignedvisit.collectedamount = "";
    this.assignedvisit.calloutcome = "";
    this.assignedvisit.followupdate = "";
    this.assignedvisit.followuptime = "";
    this.assignedvisit.calltype = 'P';
    this.assignedvisit.JointVisit = "";
    this.assignedvisit.jointusername = "";
    this.assignedvisit.jointcode = "";

    this.assignedvisit.remarks = "";

    //address
    this.assignedvisit.addressname="";
    // $("#showdivs_commonvisits").css("display", "none");
    this.UpdateModal.show();
    console.log(obj)
    this.cust_id = obj.CBSCustomerID;
    this.assignedvisit.fullname = obj.CustomerName
    // console.log(this.cust_id)
    this.assignedvisit.customerid = obj.CBSCustomerID;
    window.localStorage['customerID'] = obj.CBSCustomerID;
    window.localStorage['callID'] = obj.CallID;
    // var courtesydate= obj.CourtesyDate;
    var newdate = this.datepipe.transform( new Date(),'yyyy-MM-dd')
   // $filter('date')(new Date(), 'yyyy-MM-dd');
    window.localStorage['Next_Call_Date'] = newdate;
    window.localStorage['PurposeID'] = obj.PurposeId;
    this.purposeid = obj.PurposeId;
    this.Purpose = obj.Purpose;
    window.localStorage['DNP_AAmount'] = obj.DNPAAmount;
    window.localStorage['Account_No'] = obj.AccountNumber;
    // var date= obj.ToCallDate;
    var tocalldate = this.datepipe.transform( new Date(),'yyyy-MM-dd')
   // $filter('date')(new Date(), 'yyyy-MM-dd');
    window.localStorage['To_Call_Date'] = tocalldate;
    console.log(window.localStorage['To_Call_Date'])

    if (this.cust_id == null) {

      this.enable = false;

    }
    if (this.cust_id != null) {
      this.enable = true;
      //this.showspin();
      this.Apiservice.getcustomerdetails(this.cust_id)
        .then((res:any) =>{
          var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
          this.assignedvisitscustomerdata = response;
         // console.log(this.assignedvisitscustomerdata)
          // this.assignedvisit.customerid = this.assignedvisitscustomerdata[0].;
          // this.assignedvisit.customerid = window.localStorage['customerID'];
          // this.assignedvisit.customername = response[0].Nfirstname + ' ' + response[0].Nlastname;
          // this.assignedvisit.firstname = response[0].Nfirstname;
          // this.assignedvisit.lastname = response[0].Nlastname;
          // this.assignedvisit.mobile = response[0].Nmobile;
          // this.assignedvisit.email = response[0].Nemail;

          // this.firstWords = [];

          // var firstname = [];

          // for (i = 0; i < this.assignedvisitscustomerdata.length; i++) {

          //   firstname = this.assignedvisitscustomerdata[i].Nfirstname.split(" ");

          //   this.firstWords.push(firstname[0]);
          //   this.assignedvisitscustomerdata[i].firstname = this.firstWords[i];
          //   this.firstname1 = this.assignedvisitscustomerdata[i].firstname;


          // }

          if(this.assignedvisitscustomerdata != "" && this.assignedvisitscustomerdata != undefined)
          {
          console.log(this.assignedvisitscustomerdata[0].Add1);
          if(this.assignedvisitscustomerdata[0].Add1 != undefined || this.assignedvisitscustomerdata[0].Add2 != undefined || this.assignedvisitscustomerdata[0].Add3 != undefined || this.assignedvisitscustomerdata[0].Add4 != undefined || this.assignedvisitscustomerdata[0].PIN != undefined){
            var respAdd1= this.assignedvisitscustomerdata[0].Add1;
            var add1 = respAdd1.replace("/", "-");
            console.log(add1); 
            var respAdd2= this.assignedvisitscustomerdata[0].Add2;
            var add2 = respAdd2.replace("/", "-");
            console.log(add2); 
            this.assignedvisit.addressname = add1+' '+add2+' '+this.assignedvisitscustomerdata[0].Add3+' '+this.assignedvisitscustomerdata[0].Add4+' '+this.assignedvisitscustomerdata[0].PIN;
          console.log(this.assignedvisitscustomerdata.addressname);
          }
          if(this.assignedvisit.addressname != "" && this.assignedvisit.addressname != undefined)
          { 
            console.log(this.assignedvisit.addressname);
            this.myvalue = true;
           //this.data.selectele='P';
          //  this.setlatlong(this.assignedvisit.addressname);-->ramesh
          }
         
         }



        })
     
    }

  }

saveassignedvisits(obj) {
    console.log(obj)
  //  this.showspin($ionicLoading);
    var customername1 = this.assignedvisit.customername;
    var mobile1 = this.assignedvisit.mobile;
    var calltype =this.assignedvisit.calltype;
    var callid = window.localStorage['callID'];
    var remarks1 =this.assignedvisit.remarks;
    var firstname1 = this.assignedvisit.firstname;
    var lastname1 = this.assignedvisit.lastname;
    var responseid = this.assignedvisit.calloutcome;
    console.log(this.assignedvisit.calloutcome)
    var purpose = window.localStorage['PurposeID'];
    var BusinessUnit = 0;

    var cbsid = this.assignedvisit.customerid;
   // console.log(customername1)
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

    if (firstname1 == "") {

      var firstname = null;
    } else {
      var firstname = firstname1;
    }

    if (lastname1 == "") {

      var lastname = null;
    } else {
      var lastname = lastname1;
    }
    if (mobile1 == "") {

      var mobile = null;
    } else {
      var mobile = mobile1;
    }

    if (purpose == "5" && this.assignedvisit.current == "Y") {
      if ((this.assignedvisit.collecteddate == null || this.assignedvisit.collecteddate == "" || this.assignedvisit.collecteddate == undefined) || (this.assignedvisit.collectedaccnumber == null || this.assignedvisit.collectedaccnumber == undefined || this.assignedvisit.collectedaccnumber == "") || (this.assignedvisit.collectedamount == null || this.assignedvisit.collectedamount == undefined || this.assignedvisit.collectedamount == "")) {
        this.AlertService.presentAlert("Alert","Fill All Details Of Amount Collected")
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Fill All Details Of Amount Collected</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        //this.hidespin($ionicLoading);
        return false;

      } else {
        var collectionmode = "Y";
       this.Collectiondate1 = this.assignedvisit.collecteddate;
        var collectiondate = this.datepipe.transform( this.Collectiondate1,'yyyy-MM-dd')
      //  $filter('date')(this.Collectiondate1, 'yyyy-MM-dd');
        var accountno = this.assignedvisit.collectedaccnumber;
        var amount = this.assigned.collectedamount;
      }

    }


    if (purpose != "5") {
      this. collectionmode = null;

    }

    if (collectionmode == null) {
      var accountno = null;
      var amount = null;
      this. collectiondate = null;

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
      if (this.assignedvisit.current == "" || this.assignedvisit.current == undefined || this.assignedvisit.current == null || this.assignedvisit.current == 'N') {

        this.collectionmode = null;
      }
    }

    //    if(purpose== "3" && this.followup.businessunit == null){

    //         var myPopup = $ionicPopup.show({
    //               template: '<center>Select BusinessUnit</center>',
    //               title: 'Warning',
    //               scope: this,
    //               buttons: [{
    //                   text: 'OK',
    //                   type: 'button button-clear button-assertive'
    //               }]
    //           });
    //                return false;
    // }

    //        else{
    //       var BusinessUnit = this.followup.businessunit;
    //    }



    // if(purpose != "3"){

    //    var BusinessUnit = null;
    // }

    console.log(this.assignedvisit.followupdate)
    console.log(this.assignedvisit.followuptime)
    if (this.assignedvisit.calloutcome == "" || this.assignedvisit.calloutcome == undefined || this.assignedvisit.calloutcome == null) {
      this.AlertService.presentAlert("Alert","Select Call OutCome")
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
      return false;

    }

    if (responseid == "2") {
      if ((this.assignedvisit.followdate == "" || this.assignedvisit.followdate == undefined ||this.assignedvisit.followdate == null) || (this.assignedvisit.followtime == "" || this.assignedvisit.followtime == undefined || this.assignedvisit.followtime == null)) {
        this.AlertService.presentAlert("Alert","Provide Followup Details")
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
        return false;



      } else {
       this.nextcalldate1 =  this.datepipe.transform( this.assignedvisit.followdate,'yyyy-MM-dd')
      
      // $filter('date')(this.assignedvisit.followdate, 'yyyy-MM-dd');
        // var durationFilter = $filter('duration');
        this.followuptime =this.datepipe.transform( this.assignedvisit.followtime, 'h.mm a')
         //$filter('date')(this.assignedvisit.followtime, 'h.mm a');
        var nextcalldate =this.nextcalldate1 + ' ' + this.followuptime;
        // var Endtime = "05.07 AM";
        // var Totime = "05.07 AM";
      }

    }

    if (responseid != "2") {
      var nextcalldate = " ";
      //          var Endtime = null;
      // var Totime = null;

    }

    if (this.assignedvisit.calltype == "" || this.assignedvisit.calltype == undefined || this.assignedvisit.calltype == null) {

      this.AlertService.presentAlert("Alert","Select Call Type")
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
      return false;


    }

    if (this.assignedvisit.calltype == "P" && this.assignedvisit.JointVisit == "Y") {
      if (this.assignedvisit.jointcode == null || this.assignedvisit.jointcode == "" || this.assignedvisit.jointcode == undefined) {
        this.AlertService.presentAlert("Alert","Enter Joint Usercode")
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
        return false;

      } else {
        var jointvisit = "Y";
        var jointcode = this.assignedvisit.jointcode;
      }


    }

    if (this.assignedvisit.calltype == "P") {
      if (this.assignedvisit.JointVisit == "" || this.assignedvisit.JointVisit == undefined || this.assignedvisit.JointVisit == null ||this.assignedvisit.JointVisit == 'N') {

        this. jointvisit = null;
      }
    }

    if (this.assignedvisit.calltype != "P") {

      this. jointvisit = null;

    }

    if (jointvisit == null) {
      var jointcode = null;
    }
    if (this.Purpose == 'Lead Generation') {
      this.assigned = {};
      if ((this.assigned.casa != "" && this.assigned.casa != undefined) || (this.assigned.deposits != "" && this.assigned.deposits != undefined) || (this.assigned.advance != "" && this.assigned.advance != undefined) || (this.assigned.insurance != "" && this.assigned.insurance != undefined)) {
        console.log(this.assigned.casa);
        var casaVal = this.assigned.casa;
        console.log(casaVal)
        var depositVal = this.assigned.deposits;
        console.log(depositVal)
        var AdvanceVal = this.assigned.advance;
        console.log(AdvanceVal)
        var InsuranceVal = this.assigned.insurance;
        console.log(InsuranceVal)

      } else {
        this.AlertService.presentAlert("Alert","Fill Details Of Expected Business")
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
        return false;
      }

      if (this.assigned.casa == undefined || this.assigned.casa == "") {

        this. casaVal = 0;
      } else {
        var casaVal = this.assigned.casa;
      }
      if (this.assigned.deposits == undefined || this.assigned.deposits == "") {
        this. depositVal = 0;
      } else {
        var depositVal = this.assigned.deposits;
      }

      if (this.assigned.advance == undefined || this.assigned.advance == "") {
        this. AdvanceVal = 0;
      } else {
        var AdvanceVal = this.assigned.advance;
      }

      if (this.assigned.insurance == undefined || this.assigned.insurance == "") {
        this. InsuranceVal = 0;
      } else {
        var InsuranceVal = this.assigned.insurance;
      }
    } else {
      this. casaVal = 0;
      this. depositVal = 0;
      this. AdvanceVal = 0;
      this. InsuranceVal = 0;
    }



    if (this.assignedvisit.calltype == "P") {

      if ((this.assignedvisit.addressname == "") || ((this.assignedvisit.addressname == 'undefined') || (this.assignedvisit.addressname == undefined))) {

        console.log(this.assignedvisit.addressname)
        this.AlertService.presentAlert("Alert","Enter Your Location")
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
        return false;

      } else {
        //alert("location");
        var latvalue = this.lat1;
        console.log(latvalue)
        var langvalue = this.lng1;
        console.log(langvalue)
        var address = this.assignedvisit.addressname;
        console.log(address)
      }

    } else {
      var latvalue = null;
      var langvalue = null;
      var address = null;
    }
    //console.log(this.branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit, depositVal, casaVal, AdvanceVal, InsuranceVal)
 if (this.assignedvisit.calltype == "P") {
    console.log("call type is  personal visit");
    //this.showspin();
   this.Apiservice.updatecommonvisits(this.branchid, this.cbsid, customername, mobile, this.CallerId,this. username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, this.usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit, depositVal, casaVal, AdvanceVal, InsuranceVal)
      .then((res:any) =>{
        //this.hidespin();
        console.log(response);
        var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
        var success = [];
       this. success = response;
        window.localStorage['date'] = "";

            if(this.success!=="")
        {

            console.log(success, latvalue, langvalue, address,purpose, cbsid)
           // this.showspin();
            this.Apiservice.saveaddress(success, latvalue, langvalue, address,purpose,cbsid)
      .then(function(response:any) {
        this.hidespin();
        console.log(response)
         if(response == '"Yes"')
              {
             
  //  var alertPopup = $ionicPopup.alert({
  //           title: 'Success',
  //           template: 'Saved Successfully'
  //         });
  this.AlertService.presentAlert("Alert","Saved Successfully")
          // alertPopup.then(function(res) {
          //   this.UpdateModal.hide();
          //   // Custom functionality....
          // });
              }

              else{

                this.AlertService.presentAlert("Alert","Error While Saving")
          //        var alertPopup = $ionicPopup.alert({
          //   title: 'Error',
          //   template: 'Error While Saving'
          // });

          // alertPopup.then(function(res) {
          //   this.UpdateModal.hide();
          //   // Custom functionality....
          // });
              }

      })
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

        this.assignedvisit = {};
        this.getCommonvisitsonload();
        // response = JSON.parse(response);

      })
      

    }

    // this.UpdateModal.hide();

    else
    {
        console.log("call type is not a personal visit");
        //this.showspin();
    this.Apiservice.updatecommonvisits(this.branchid, cbsid, customername, mobile, this.CallerId, this.username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname,this. usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit, depositVal, casaVal, AdvanceVal, InsuranceVal)
      .then((res:any) =>{
       // this.hidespin();
        console.log(response);

        var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
        var success = [];
        success = response;
        window.localStorage['date'] = "";

        if (success[0].response == 1) {

          this.AlertService.presentAlert("Alert",'Please Visit Follow Up Screen As It Is In FOLLOW UP Status ' + success[0].Column1)
          // var alertPopup = $ionicPopup.alert({
          //   title: 'Warning',
          //   template: 'Please Visit Follow Up Screen As It Is In FOLLOW UP Status ' + success[0].Column1
          // });

        

        } else {

          this.AlertService.presentAlert("Alert","Saved Successfully")
          // var alertPopup = $ionicPopup.alert({
          //   title: 'Success',
          //   template: 'Saved Successfully'
          // });

          // alertPopup.then(function(res) {
          //   this.UpdateModal.hide();
          //   // Custom functionality....
          // });


        }

        this.assignedvisit = {};
        this.getCommonvisitsonload();
        // response = JSON.parse(response);

      })
       
    }

  }

 getCommonvisitsonload () {
   //this.showspin();
    var branchid = window.localStorage['branchID'];
    var userid = window.localStorage['userID'];
    var calltype = "P";

    var custid = " ";
   //this.showspin();
    this.Apiservice.getcomvisits(0, branchid, calltype, custid)
      .then((res:any) =>{
      //  this.$broadcast('scroll.refreshComplete');
      //  this.hidespin();
      var response = res.data;
      response = JSON.parse(response);
      response = JSON.parse(response);
       this.commonvisitdataonload = response;
        console.log(this.commonvisitdataonload);
        var firstname = [];
       this.firstWords = [];
        for (let i = 0; i <this.commonvisitdataonload.length; i++) {
          firstname =this.commonvisitdataonload[i].CustomerName.split(" ");
         this.firstWords.push(firstname[0]);
         this.commonvisitdataonload[i].firstname =this.firstWords[i];
        }
       
      })
      

  };

}
