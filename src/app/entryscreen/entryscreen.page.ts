import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { NavParams } from '@ionic/angular';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pipe, PipeTransform } from "@angular/core";
import { ApiServiceService } from 'src/app/service/api-service.service';
// import {UserprofilePage} from'./../userprofile/userprofile.page';
import { UserprofilePage } from './../userprofile/userprofile.page';
import { AlertServiceService } from 'src/app/service/alert-service.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-entryscreen',
  templateUrl: './entryscreen.page.html',
  styleUrls: ['./entryscreen.page.scss'],
  providers: [
    DatePipe]
    // selector: 'app-exceptionreport',
    // templateUrl: './exceptionreport.page.html',
    // styleUrls: ['./exceptionreport.page.scss'],
})
export class EntryscreenPage implements OnInit {

  EntryscreenForm: FormGroup;
  checked: boolean = true;
  checkedNew: boolean = false;
  showCustomerID: boolean = true;
  entry = {};
  CallOutcomeItems: any = [];
  entrypurpose: any = [];
  businessunit: any = [];
  showFollowupDateTime: boolean = false;
  showJointVisitLocation: boolean = false;
  jointvisitChecked: boolean = true;
  showEmployeeDetails: boolean = false;
  showBusinessUnit: boolean = false;
  captionAmount: boolean = false;
  showDepositCasaAdvance: boolean = false;
  nextcalldate1: any;
  followuptime: any;
  lat1: any;
  lng1: any;
  addbaselocno: any;
  showInsuranceSellproductSourceLead: boolean = false;
  constructor(private Apiservice: ApiServiceService,
    private alertService: AlertServiceService,
    private datepipe: DatePipe,
    public modalController: ModalController,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    // let myCompOneObj = new UserprofilePage(s,s,s,s);

    // myCompOneObj.myFunctionOne();
    this.EntryscreenForm = this.formBuilder.group({
      calloutcome: [''],
      calltype: [''],
      remarks: [''],
      followuptime: [''],
      followupdate: [''],
      jointvisit: [''],
      location: [''],
      empcode: [''],
      empname: [''],
      firstname: [''],
      lastname: [''],
      email: [''],
      mobile: [''],
      customerid: [''],
      bussiness: [''],
      purpose: [''],
      sourceoflead: [''],
      crosssellproduct: [''],
      insurance: [''],
      amount: [''],
      caption: [''],
      advance: [''],
      casa: [''],
      deposits: [''],
    });
    this.getcalloutcome();
    this.getpurpose();
    this.getbusinessunitExisting();
    // this.EntryscreenForm.get('jointvisit').setValue(null);
    // // this.EntryscreenForm.get('location').setValue(null);
  }
  getpurpose() {
    // this.showspin();
    this.Apiservice.getentrypurpose().then(response => {

      var result = JSON.stringify(response.data);
      this.entrypurpose = JSON.parse(result);
      this.entrypurpose = JSON.parse(this.entrypurpose);
      this.entrypurpose = JSON.parse(this.entrypurpose);
      
      // var result = response.data;
      // result = JSON.parse(result);
      // result = JSON.parse(result);
      // this.entrypurpose = result;
      // this.entrypurpose = JSON.parse(this.entrypurpose);
      console.log(response);
    })
    // .success(function(response) {

    //   console.log(response);
    //   var res = JSON.parse(response);
    //   console.log(res);
    //   this.callPurpose = res;


    //   // CODE BY JOHN 
    //   $rootScope.callPurpose_existingt = this.callPurpose[0].Text;
    //   $rootScope.callPurpose_existingv =  this.callPurpose[0].Value;

    //   // OLD SOURCE DONT KNOW WHY  res[2].Text; COMMENTED BY JOHN
    //   // $rootScope.callPurpose_existingt = res[2].Text;
    //   // $rootScope.callPurpose_existingv = res[2].Value;
    //   // console.log(this.callPurpose_existingt);
    //   // console.log(this.callPurpose_existingv);



    //   //this.existing = this.callPurpose.Value;
    //   //console.log(this.existing);
    //   this.hidespin();

    // })
    // .error(function(response) {
    //   console.log(response);
    //  this.hidespin(); 
    // });
  }

  getbusinessunitExisting() {
    // this.showspin();

    this.Apiservice.getbusinessunitExisting().then(response => {
      var result = JSON.stringify(response.data);
      this.businessunit = JSON.parse(result);
      this.businessunit = JSON.parse(this.businessunit);
      this.businessunit = JSON.parse(this.businessunit);

      // var result = response.data;
      // result = JSON.parse(result);
      // result = JSON.parse(result);
      // this.businessunit = result;
      // this.businessunit = JSON.parse(this.businessunit);
    });


  }

  getbusinessunitNew() {
    // this.showspin();

    this.Apiservice.getbusinessunitNew().then(response => {

      var result = JSON.stringify(response.data);
      this.businessunit = JSON.parse(result);
      this.businessunit = JSON.parse(this.businessunit);
      this.businessunit = JSON.parse(this.businessunit);

      // var result = response.data;
      // result = JSON.parse(result);
      // result = JSON.parse(result);
      // this.businessunit = result;
      // this.businessunit = response;
      // this.businessunit = JSON.parse(this.businessunit);
      console.log(this.businessunit);
    })
  }

  onSubmitForm(EntryscreenForm) {
    this.saveCourtesyCall();
  }
  modelDissmiss() {
    this.modalController.dismiss();
  }
  changeCallOutcome(value) {
    console.log(value)
    if (value == 'Calls-FollowUp') {
      this.showFollowupDateTime = true;
    } else {
      this.showFollowupDateTime = false;
    }
    console.log(value);

  }
  changeProductType(value) {

  }
  changeCallType(value) {
    if (value == 'P') {
      this.showJointVisitLocation = true;
    } else {
      this.showJointVisitLocation = false;
    }
    console.log(value);

  }

  changeBussiness(value) {
    if (value == '12') {
      this.captionAmount = false;
      this.showDepositCasaAdvance = false;
      this.showInsuranceSellproductSourceLead = true;
    }
    else if (value == '13') {
      this.showDepositCasaAdvance = false;
      this.showInsuranceSellproductSourceLead = false;
      this.captionAmount = true;

    }
    else if (value == '14' || value == '11') {
      this.showDepositCasaAdvance = true;
      this.showInsuranceSellproductSourceLead = false;
      this.captionAmount = false;
    }
    else {
      this.showDepositCasaAdvance = false;
      this.showInsuranceSellproductSourceLead = false;
      this.captionAmount = false;
    }
    // else if()

    console.log(value);
  }
  changeProductGroup(value) {

  }
  changePurposeType(value) {
    if (value == '3') {
      this.showBusinessUnit = true;
    } else {
      this.showBusinessUnit = false;
    }
    console.log(value)

  }

  jointVisit(value) {
    console.log(value.target.value);
    if (value.target.value == 'true') {
      debugger
      this.jointvisitChecked = false;
      this.showEmployeeDetails = true;
    } else {
      debugger
      this.jointvisitChecked = true;
      this.showEmployeeDetails = false;
    }

  }
  CheckBoxChangeNew(value, checked) {
    console.log(value, checked)
    debugger
    if (value == 'New' && checked == true) {
      debugger
      this.checked = false;
      this.showCustomerID = false;
      this.getbusinessunitNew();
      this.EntryscreenForm.get('purpose').setValue('Lead Generation');
      this.showEmployeeDetails = false;
      this.showFollowupDateTime = false;
      this.showJointVisitLocation = false;
      //  this.jointvisitChecked = true;
      // this.showEmployeeDetails = false;
      this.showBusinessUnit = true;
      this.captionAmount = false;
      this.showDepositCasaAdvance = false;
      this.showInsuranceSellproductSourceLead = false;
      // this.EntryscreenForm.get('jointVisit').setValue(false);
    }
    else if (value == 'New' && checked == false) {
      debugger
      this.checked = true;
      this.showCustomerID = true;
      this.getbusinessunitExisting();
      this.EntryscreenForm.get('purpose').setValue('');
      this.showEmployeeDetails = false;
      this.showFollowupDateTime = false;
      this.showJointVisitLocation = false;
      //  this.jointvisitChecked = true;
      // this.showEmployeeDetails = false;
      this.showBusinessUnit = false;
      this.captionAmount = false;
      this.showDepositCasaAdvance = false;
      this.showInsuranceSellproductSourceLead = false;
    }
  }
  CheckBoxChange(value, checked) {
    console.log(value, checked)
    debugger
    if (value == 'Existing' && checked == true) {
      debugger
      this.checkedNew = false;
      this.getbusinessunitExisting();
      this.EntryscreenForm.get('purpose').setValue('');
      this.showEmployeeDetails = false;
      this.showFollowupDateTime = false;
      this.showJointVisitLocation = false;
      //  this.jointvisitChecked = true;
      // this.showEmployeeDetails = false;
      this.showBusinessUnit = false;
      this.captionAmount = false;
      this.showDepositCasaAdvance = false;
      this.showInsuranceSellproductSourceLead = false;
    }
    else if (value == 'Existing' && checked == false) {
      debugger
      this.checkedNew = true;
      this.getbusinessunitNew();
      this.EntryscreenForm.reset();
      this.EntryscreenForm.get('purpose').setValue('Lead Generation');
      this.showEmployeeDetails = false;
      this.showFollowupDateTime = false;
      this.showJointVisitLocation = false;
      //  this.jointvisitChecked = true;
      // this.showEmployeeDetails = false;
      this.showBusinessUnit = true;
      this.captionAmount = false;
      this.showDepositCasaAdvance = false;
      this.showInsuranceSellproductSourceLead = false;
      // this.EntryscreenForm.get('jointvisit').setValue(false);
    }
  }

  getcalloutcome() {

    this.Apiservice.getcalloutcome1().then(response => {
      var result = JSON.stringify(response.data);
      this.CallOutcomeItems = JSON.parse(result);
      this.CallOutcomeItems = JSON.parse(this.CallOutcomeItems);
      this.CallOutcomeItems = JSON.parse(this.CallOutcomeItems);


      // var result = response.data;
      // result = JSON.parse(result);
      // result = JSON.parse(result);
      // this.CallOutcomeItems = result;
      // this.CallOutcomeItems = JSON.parse(this.CallOutcomeItems);
      console.log(this.CallOutcomeItems);
    })


  }

  getCustomer() {


    var customerid = this.EntryscreenForm.get('customerid').value;
    console.log(customerid);

    if (customerid == "" || customerid == undefined || customerid == null) {
      this.alertService.presentAlert('Warning',"Enter Customer Id");
      // this.Alertservice.presentAlert('Warning',"This can\'t be removed.");
      // alert('Enter Customer Id')


    } else {
      this.Apiservice.getcustomerdetails(customerid).then(response => {
        console.log(response);
        var result = JSON.stringify(response.data);
        console.log(result);
       result = JSON.parse(result);
       result = JSON.parse(result);
       result = JSON.parse(result);
        var value =result;
        value = JSON.parse(value);
        console.log(value);
        // var Value = response.data;
        // Value = JSON.parse(Value);
        // Value = JSON.parse(Value);
        // this.CallOutcomeItems = Value;
        // var Value = JSON.stringify(response)
        // Value = JSON.parse(Value);
        // Value = JSON.parse(Value);
        // Value = JSON.parse(Value);
        console.log(value[0]);
        this.EntryscreenForm.patchValue({
          calloutcome: value[0]['Nfirstname'],
          calltype: value[0]['Nfirstname'],
          remarks: value[0]['Nfirstname'],
          followuptime: value[0]['Nfirstname'],
          followupdate: value[0]['Nfirstname'],
          jointvisit: value[0]['Nfirstname'],
          location: value[0]['Add1'] + value[0]['Add2'] +  value[0]['Add3'] +  value[0]['Add4'],
          empcode: value[0]['Nfirstname'],
          empname: value[0]['Nfirstname'],
          firstname: value[0]['Nfirstname'],
          lastname: value[0]['Nlastname'],
          email: value[0]['Nemail'],
          mobile: value[0]['Nmobile'],
          customerid: value[0]['Ncustomerid'],
          // dob: this.profileData[0].DOB ,
        })
        // if( Value[0]['NBranch'] == window.localStorage['branchID']){

        //   // console.log(this.mydata[0].Nfirstname);
        //   this.entry.firstname = this.mydata[0].Nfirstname;
        //   this.entry.lastname = this.mydata[0].Nlastname;
        //   this.entry.mobile = this.mydata[0].Nmobile;
        //   this.entry.resdphnno = this.mydata[0].Nresidencephone;
        //   this.entry.email = this.mydata[0].Nemail;

        //   if(this.mydata != "" && this.mydata != undefined)
        //   {
        //   console.log(this.mydata[0].Add1);
        //   if(this.mydata[0].Add1 != undefined || this.mydata[0].Add2 != undefined || this.mydata[0].Add3 != undefined || this.mydata[0].Add4 != undefined || this.existingcustomeradd[0].PIN != undefined){
        //    var respAdd1= this.mydata[0].Add1;
        //    var add1 = respAdd1.replace("/", "-");
        //    console.log(add1);
        //    var respAdd2= this.mydata[0].Add2;
        //    var add2 = respAdd2.replace("/", "-");
        //    console.log(add2);
        //   addressname = add1+' '+add2+' '+this.mydata[0].Add3+' '+this.mydata[0].Add4+' '+this.mydata[0].PIN;
        //   console.log(addressname);
        //   }
        //   if(addressname != "" && addressname != undefined)
        //   { 
        //     console.log(addressname);
        //    this.myvalue = true;
        //    //calltype='P';
        //    this.setlatlong(addressname);
        //   }

        //  }
        // }
        // else{
        //   $ionicPopup.alert({
        //     title: 'Warning',
        //     template: 'CustomerId does not Belongs to this Branch'
        //   });
        //   this.data = {};
        //   this.assigned.customerid = "";
        //   this.entry = {};
        // }
      })
      // .success(function(response) {
      //   this.hidespin();
      //   console.log(response);
      //   // if (response) {
      //   this.customerData = JSON.parse(response);
      //   console.log(this.customerData)
      //   this.mydata = JSON.parse(this.customerData);
      //   if(this.mydata[0].NBranch == window.localStorage['branchID']){

      //   console.log(this.mydata[0].Nfirstname);
      //   this.entry.firstname = this.mydata[0].Nfirstname;
      //   this.entry.lastname = this.mydata[0].Nlastname;
      //   this.entry.mobile = this.mydata[0].Nmobile;
      //   this.entry.resdphnno = this.mydata[0].Nresidencephone;
      //   this.entry.email = this.mydata[0].Nemail;

      //   if(this.mydata != "" && this.mydata != undefined)
      //   {
      //   console.log(this.mydata[0].Add1);
      //   if(this.mydata[0].Add1 != undefined || this.mydata[0].Add2 != undefined || this.mydata[0].Add3 != undefined || this.mydata[0].Add4 != undefined || this.existingcustomeradd[0].PIN != undefined){
      //    var respAdd1= this.mydata[0].Add1;
      //    var add1 = respAdd1.replace("/", "-");
      //    console.log(add1);
      //    var respAdd2= this.mydata[0].Add2;
      //    var add2 = respAdd2.replace("/", "-");
      //    console.log(add2);
      //   addressname = add1+' '+add2+' '+this.mydata[0].Add3+' '+this.mydata[0].Add4+' '+this.mydata[0].PIN;
      //   console.log(addressname);
      //   }
      //   if(addressname != "" && addressname != undefined)
      //   { 
      //     console.log(addressname);
      //    this.myvalue = true;
      //    //calltype='P';
      //    this.setlatlong(addressname);
      //   }

      //  }
      // }else{
      //   $ionicPopup.alert({
      //     title: 'Warning',
      //     template: 'CustomerId does not Belongs to this Branch'
      //   });
      //   this.data = {};
      //   this.assigned.customerid = "";
      //   this.entry = {};
      // }
      // })
      // .error(function(response) {
      //   console.log(response);
      //   this.hidespin();
      //   $ionicPopup.alert({
      //     title: 'Alert',
      //     template: 'Server error! Please try again'
      //   });
      // });

    }
  }

  // changeCallOutcome

  saveCourtesyCall() {
    // this.showspin($ionicLoading);
    var courtesyCustomerID = this.EntryscreenForm.get('customerid').value;
    var username = window.localStorage['userName'];
    var branchid = window.localStorage['branchID'];
    var CallerId = window.localStorage['userID'];
    var callid = null;
    var cbsid = null;
    var firstname = null;
    var customername = null;
    var lastname = null;
    var mobile = null;
    var remarks = null;
    var latvalue = null;
    var langvalue = null;
    var address = null;

    var collectionmode = null;
    var accountno = null;
    var amount = null;
    var collectiondate = null;
    var casaVal = null;
    var depositVal = null;
    var AdvanceVal = null;
    var InsuranceVal = null;
    var BusinessUnit = null;
    var nextcalldate = null;
    var jointvisit = null;
    var jointcode = null;
    var Endtime = null;
    var Totime = null;
    var mode = null;
    var depositVal = null;
    var casaVal = null;
    var AdvanceVal = null;
    var InsuranceVal = null;

    // var mode = "N";
    var usercode = window.localStorage['userCode'];
    if (courtesyCustomerID == "" || courtesyCustomerID == undefined || courtesyCustomerID == 'undefined') {
      cbsid = 0;
    } else {
      cbsid = courtesyCustomerID;
    }




    var customername1 = this.EntryscreenForm.get('firstname').value;
    var firstname1 = this.EntryscreenForm.get('firstname').value;
    var lastname1 = this.EntryscreenForm.get('lastname').value;
    var mobile1 = this.EntryscreenForm.get('mobile').value;
    var calltype = this.EntryscreenForm.get('calltype').value;
    var remarks1 = this.EntryscreenForm.get('remarks').value;
    var purpose = this.EntryscreenForm.get('purpose').value;
    var responseid = this.EntryscreenForm.get('calloutcome').value;
    var depositVal = this.EntryscreenForm.get('deposits').value;
    var businessunit = this.EntryscreenForm.get('bussiness').value;
    var deposits = this.EntryscreenForm.get('deposits').value;
    var casa = this.EntryscreenForm.get('casa').value;
    var advance = this.EntryscreenForm.get('advance').value;
    var insurance = this.EntryscreenForm.get('insurance').value;
    var caption = this.EntryscreenForm.get('caption').value;
    var amount = this.EntryscreenForm.get('amount').value;
    var purpose = this.EntryscreenForm.get('purpose').value;
    var callout = this.EntryscreenForm.get('calloutcome').value;
    var jointusercode = this.EntryscreenForm.get('empcode').value;
    var jointvisit = this.EntryscreenForm.get('jointvisit').value;
    var followupdate = this.EntryscreenForm.get('followupdate').value;
    var followuptime = this.EntryscreenForm.get('followuptime').value;
    var addressname = this.EntryscreenForm.get('location').value;
    /*if(this.data1.exist =='YES')
    {
      if(this.assigned.customerid =="" || this.assigned.customerid ==undefined )
    {
      var myPopup = $ionicPopup.show({
              template: '<center>Enter valid customerid</center>',
              title: 'Warning',
              scope: this,
              buttons: [{
                text: 'OK',
                type: 'button button-clear button-assertive'
              }]
            });
            this.hidespin($ionicLoading);

            return false;
          }
    }
    */
    /*if(this.assigned.customerid =="" || this.assigned.customerid ==undefined )
    {
      var myPopup = $ionicPopup.show({
              template: '<center>Enter valid customerid</center>',
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

    if (firstname1 == "") {
      firstname = null;
    } else {
      firstname = firstname1;
    }


    //if (purpose == 3) {
    if (businessunit == 11 || businessunit == 14) {
      if ((deposits == "" || deposits == undefined) && (casa == "" || casa == undefined) && (advance == "" || advance == undefined)) {
        // alert('Enter atleast one BusinessUnit')
        this.alertService.presentAlert('Warning',"Enter atleast one BusinessUnit");
        //   var myPopup = $ionicPopup.show({
        //     template: '<center>Enter atleast one BusinessUnit</center>',
        //     title: 'Warning',
        //     scope: this,
        //     buttons: [{
        //       text: 'OK',
        //       type: 'button button-clear button-assertive'
        //     }]
        //   });
        //   this.hidespin($ionicLoading);

        //   return false;
        // }
      }
    }

    if (businessunit == 12) {
      if (insurance == "" || insurance == undefined) {
        this.alertService.presentAlert('Warning',"Enter Insurance");
        // alert('Enter Insurance')
        //   var myPopup = $ionicPopup.show({
        //     template: '<center>Enter Insurance</center>',
        //     title: 'Warning',
        //     scope: this,
        //     buttons: [{
        //       text: 'OK',
        //       type: 'button button-clear button-assertive'
        //     }]
        //   });
        //   this.hidespin($ionicLoading);

        //   return false;
        // }
      }
    }
    if (businessunit == 13) {
      if ((caption == "" || caption == undefined) || (amount == "" || amount == undefined)) {
        this.alertService.presentAlert('Warning',"Enter Caption and Amount");
        // alert('Enter Caption and Amount')
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

        // return false;
      }
    }
    if (customername1 == "") {

      customername = null;
    } else {
      customername = customername1;
    }
    if (this.checkedNew == true) {
      if (lastname1 == "") {
        this.alertService.presentAlert('Warning',"Enter Last Name");
        // alert('Enter Last Name')
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

        // return false;
      } else {
        lastname = lastname1;
      }
    }

    if (this.checked == true) {
      if (lastname1 == "") {
        lastname = null;
      } else {
        lastname = lastname1;
      }
    }

    if (this.checkedNew == true) {
      if (mobile1 == "") {
        this.alertService.presentAlert('Warning',"Enter Mobile Number");
        // alert('Enter Mobile Number');
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
        // return false;
      } else {
        mobile = mobile1;
      }
    }

    if (this.checked == true) {
      if (mobile1 == "") {
        mobile = null;
      } else {
        mobile = mobile1;
      }
    }

    if (purpose == "") {
      this.alertService.presentAlert('Warning',"Select Purpose");
      // alert('Select Purpose')
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
      // return false;

    }

    if (responseid == "") {
      this.alertService.presentAlert('Warning',"Select Call OutCome");
      // alert('Select Call OutCome')
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
      // return false;

    }



    if (remarks1 == "" || remarks1 == undefined || remarks1 == null) {
      this.alertService.presentAlert('Warning',"Enter Remarks");
      // alert('Enter Remarks');
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Enter Remarks</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      // return false;
    } else {
      remarks = remarks1;
    }

    // var courtesyResidentialPhone = document.getElementById('courtesyResidentialPhone').value;
    // if (purpose == "5" && this.data.current == "Y") {

    //   if ((this.data.collected_accno == null || this.data.collected_accno == undefined || this.data.collected_accno == "") || (this.data.collectamount == null || this.data.collectamount == undefined || this.data.collectamount == "") || (this.data.collected_date == null || this.data.collected_date == "" || this.data.collected_date == undefined)) {

    //     alert('Fill All Details Of Amount Collected');
    //     // var myPopup = $ionicPopup.show({
    //     //   template: '<center>Fill All Details Of Amount Collected</center>',
    //     //   title: 'Warning',
    //     //   scope: this,
    //     //   buttons: [{
    //     //     text: 'OK',
    //     //     type: 'button button-clear button-assertive'
    //     //   }]
    //     // });
    //     // this.hidespin($ionicLoading);
    //     // return false;
    //   } else {
    //      collectionmode = "Y";
    //      accountno = this.data.collected_accno;
    //      amount = this.data.collectamount;
    //     this.collectiondate1 = this.data.collected_date;
    //      collectiondate = $filter('date')(this.collectiondate1, 'yyyy-MM-dd');
    //   }
    // }

    if (purpose == "3") {
      if (deposits == 0 && casa == 0 && advance == 0 && insurance == 0) {
        this.alertService.presentAlert('Warning',"Fill Details Of Expected Business");
        // alert('Fill Details Of Expected Business');
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
        // return false;
      } else {
        casaVal = casa;
        depositVal = deposits;
        AdvanceVal = advance;
        InsuranceVal = insurance;
      }
    }

    if (deposits != 0 || casa != 0 || advance != 0 || insurance != 0) {
      casaVal = casa;
      depositVal = deposits;
      AdvanceVal = advance;
      InsuranceVal = insurance;
    }


    if (purpose != "3") {
      casaVal = 0;
      depositVal = 0;
      AdvanceVal = 0;
      InsuranceVal = 0;

    }



    if (purpose != "5") {

      collectionmode = null;

    }

    if (collectionmode == null) {
      accountno = null;
      amount = null;
      collectiondate = null;

    }



    // if (purpose == "5") {
    //   if (this.data.current == "" || this.data.current == undefined || this.data.current == null || this.data.current == 'N') {
    //      collectionmode = null;

    //   }
    // }

    if (purpose == "3") {
      console.log(businessunit);
      if (businessunit == null || businessunit == undefined || businessunit == "") {
        this.alertService.presentAlert('Warning',"Select Business Unit");
        // alert("Select Business Unit")
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
        // return false;

      } else {
        BusinessUnit = businessunit;
      }
    }


    if (purpose != "3") {

      BusinessUnit = 0;
    }

    if (callout == "2") {
      if ((followupdate == null || followupdate == undefined || followupdate == "") || (followuptime == null || followuptime == undefined || followuptime == "")) {
        this.alertService.presentAlert('Warning',"Provide Followup Details");
        // alert('Provide Followup Details');
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
        // return false;


      } else {
        this.nextcalldate1 = this.datepipe.transform(followupdate, 'yyyy-MM-dd');
        // $filter('date')(followupdate, 'yyyy-MM-dd');
        this.followuptime = this.datepipe.transform(followuptime, 'h.mm a');
        // $filter('date')(followuptime, 'h.mm a');
        nextcalldate = this.nextcalldate1 + ' ' + this.followuptime;

      }

    }

    if (callout != "2") {
      nextcalldate = " ";

    }

    if (calltype == "") {
      this.alertService.presentAlert('Warning',"Select Call Type");
      // alert('Select Call Type');
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
      // return false;

    }

    if (calltype == "P" && jointvisit == true) {

      if (jointusercode == null || jointusercode == undefined || jointusercode == "") {
        this.alertService.presentAlert('Warning',"Enter Joint Usercode");
        // alert('Enter Joint Usercode');
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
        // return false;
      } else {
        jointvisit = "Y";
        jointcode = jointusercode;

      }


    }

    if (calltype != "P") {

      jointvisit = null;

    }

    if (calltype == "P") {
      if (jointvisit == "" || jointvisit == undefined || jointvisit == null || jointvisit == false) {

        jointvisit = null;
      }

    }

    if (jointvisit == null) {
      jointcode = null;
    }

    Endtime = null;
    Totime = null;

    // if (this.data1.exist == "Y") {
    //    mode = 'E';
    // } else {
    //    mode = 'N';


    // }





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
    if (deposits == null || deposits == undefined || deposits == "") {

      depositVal = null;
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

      depositVal = deposits;

    }

    if (casa == null || casa == undefined || casa == "") {

      casaVal = null;

    } else {

      casaVal = casa;

    }

    if (businessunit == 13) {


      if (caption == null || caption == undefined || caption == "") {

        AdvanceVal = null;

      } else {

        AdvanceVal = caption;

      }
    }
    else {

      if (advance == null || advance == undefined || advance == "") {

        AdvanceVal = null;

      } else {

        AdvanceVal = advance;

      }
    }

    if (businessunit == 13) {


      if (amount == null || amount == undefined || amount == "") {

        InsuranceVal = null;

      } else {

        InsuranceVal = amount;

      }
    }
    else {

      if (insurance == null || insurance == undefined || insurance == "") {

        InsuranceVal = null;

      } else {

        InsuranceVal = insurance;

      }
    }
    if (calltype == "P") {
      // console.log(addressname)
      if ((addressname == "") || ((addressname == 'undefined') || (addressname == undefined))) {
        // console.log(addressname)
        this.alertService.presentAlert('Warning',"Enter Your Location");
        // alert('Enter Your Location');
      } else {
        //alert(latvalue);
        latvalue = this.lat1;
        //console.log(latvalue)
        langvalue = this.lng1;
        //console.log(latvalue)
        address = addressname;
      }


    } else {
      latvalue = null;
      langvalue = null;
      address = null;
    }


    if (calltype == "P") {
      console.log("calltype is  p");
      // this.showspin();
      //       // cbsid = 0;
      this.Apiservice.managerEntryScreen(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, mode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit, depositVal, casaVal, AdvanceVal, InsuranceVal).then(response => {
       
       
        var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
        // result = JSON.parse(response); 
        var success;
        success = result;
        if (success == 4) {
          this.alertService.presentAlert('Warning',"This Customer Is Not Mapped With You");
          // alert('This Customer Is Not Mapped With You');

        }

        else if
          (success == 2) {
            this.alertService.presentAlert('Warning',"This Customer Is Not Mapped With You");
          // alert('This Customer Is Not Mapped With You');

        }

        else if
          (success == 3) {
            this.alertService.presentAlert('Warning',"This Customer Already Mapped To You. No Need To Convert");
          // alert('This Customer Already Mapped To You. No Need To Convert')


        }
        else if (success[0].response == 1) {
          this.alertService.presentAlert('Warning',"Please Visit Pending Courtesy Call Screen As It Is In FOLLOW UP Status" + success[0].Column1);
          // alert('Please Visit Pending Courtesy Call Screen As It Is In FOLLOW UP Status' + success[0].Column1)

        }
        else {
          console.log(success);
          console.log(latvalue);
          console.log(langvalue)
          console.log(address);
          console.log(purpose);
          console.log(cbsid)
          // this.showspin();

          var addressnew = address.replace("/", "-");
          this.Apiservice.saveaddress(success, latvalue, langvalue, addressnew, purpose, cbsid).then(response => {
            if (response.data == '"Yes"') {

              // $("#mapshowimage").css("display", "none");
              // console.log("$(#mapshowimage).css(display, none)")
              this.alertService.presentAlert('Warning',"Saved Successfully");
              // alert('Saved Successfully')

            }
            else {

              this.alertService.presentAlert('Warning',"Error While Saving");
              // alert('Error While Saving')
            }
          })
        }
      })

    }

    else {
      console.log("calltype is not p");
      //  this.showspin();
      this.Apiservice.managerEntryScreen(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, mode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit, depositVal, casaVal, AdvanceVal, InsuranceVal).then(response => {
        var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
        // result = JSON.parse(response); 
        var success;
        success = result;

        if (success == 4) {
          this.alertService.presentAlert('Warning',"This Customer Is Not Mapped With You");
          // alert('This Customer Is Not Mapped With You');
        }
        else if (success == 2) {
          this.alertService.presentAlert('Warning',"This Customer Is Not Mapped With You");
          // alert('This Customer Is Not Mapped With You');

        }
        else if (success == 3) {
          this.alertService.presentAlert('Warning',"This Customer Already Mapped To You. No Need To Convert");
          // alert('This Customer Already Mapped To You. No Need To Convert');


        }
        else if (success[0].response == 1) {
          this.alertService.presentAlert('Warning',"Please Visit Pending Courtesy Call Screen As It Is In FOLLOW UP Status"+ success[0].Column1);
          // alert('Please Visit Pending Courtesy Call Screen As It Is In FOLLOW UP Status' + success[0].Column1)

        }
        else {
          this.alertService.presentAlert('Warning',"Saved Successfully");
          // alert('Saved Successfully');
        }
      })

    }
  }
  //  setlatlong (addressname) {
  //     console.log(addressname);
  //     // $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + addressname + '&key=AIzaSyBmB20neq4usVvgGguBN-zm4tubXXM3QDg').then(function(resp) {

  //       var geocoder = new google.maps.Geocoder();
  //       geocoder.geocode( { 'address': addressname,'region': 'IN' }, function(resp, status) {
  //       if (status == google.maps.GeocoderStatus.OK) {


  //         var geocoder = new google.maps.Geocoder();
  //     geocoder.geocode( { 'address': resp[0].formatted_address,'region': 'IN'}, function(resp, status) {
  //     if (status == google.maps.GeocoderStatus.OK) {
  //       console.log(resp);
  //       this.BranchLatLong = resp[0].geometry.location.lat() + ',' + resp[0].geometry.location.lng();
  //       //console.log(this.BranchLatLong)

  //       this.lat1 = resp[0].geometry.location.lat();
  //       console.log(this.lat1);
  //       this.lng1 = resp[0].geometry.location.lng();
  //       console.log(this.lng1);
  //       this.addbaselocno = (this.lat1) + "," + (this.lng1);
  //      this.typeshowmap1(resp[0])
  //       }

  //     })

  //   }
  // })
  //   }
    getinfoadd (data) {
      console.log(data);
      console.log(data.formatted_address);
     this.lat1 = data.geometry.location.lat();
     this.lng1 = data.geometry.location.lng();
     this.addbaselocno = (this.lat1) + "," + (this.lng1);
    //  this.typeshowmap(this.lat1, this.lng1, data);
    };

}