import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pipe, PipeTransform } from "@angular/core";
import { ApiServiceService } from 'src/app/service/api-service.service';
import { AlertServiceService } from 'src/app/service/alert-service.service';
@Component({
  selector: 'app-myassigncallmodal',
  templateUrl: './myassigncallmodal.page.html',
  styleUrls: ['./myassigncallmodal.page.scss'],
})
export class MyassigncallmodalPage implements OnInit {
  data: any = {};
  Cusdata: any;
  MyassignCallForm: FormGroup;
  startDate: any;
  showFollowupDateTime: boolean = false;
  showLocation: boolean = false;
  date: any;
  time: any;
  jointvisitChecked: boolean = false;
  showEmployeeDetails: boolean = false;
  CallOutcomeItems: any = [];
  CallTypeItem: any;
  customerid: any;
  assigned = {};
  enable = false;
  assigneddata = {};
  // assignedcallscustomerdata = [];
  fullname: any;
  purposeid: any;
  purpose: any;
  assignedcallscustomerdata: any;
  firstWords: any[];
  firstname1: any;
  myvalue: boolean;
  addressname: any;
  calltype: any;
  constructor(private Apiservice: ApiServiceService,
    private alertService:AlertServiceService,
    private navParams: NavParams, public modalController: ModalController,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.MyassignCallForm = this.formBuilder.group({
      calloutcome: [''],
      calltype: [''],
      remarks: [''],
      followuptime: [''],
      followupdate: [''],
      jointvisit: [''],
      location: [''],
      empcode: [''],
      empname: [''],
      mobile: [null],
    });
    // this.MyassignCallForm.get('jointvisit').setValue(null);
    // // this.MyassignCallForm.get('location').setValue(null);
    this.getcalloutCome();
    this.MyassignCallForm.get('calltype').setValue('Telecall');
    this.Cusdata = this.navParams.get('Data');
    console.log( this.Cusdata);


    this.assigned['custname'] = this.Cusdata.firstname;

    this.purpose = this.Cusdata.Purpose;
    this.assigned['current'] = "";
    // if ($scope.assigned.current == "") {
    this.assigned["collected_date"] = "";
    this.assigned["collected_accno"] = "";
    this.assigned["collectamount"] = "";
    // }
    this.assigned["calloutcome"] = "";
    // if ($scope.assigned.calloutcome == "Calls-FollowUp") {
    this.assigned["calloutcome"] = "";
    this.assigned["followdate"] = "";
    this.assigned["followtime"] = "";
    // }
    this.assigned["calltype"] = 'T';
    this.assigned["JointVisit"] = "";
    this.assigned["jointusername"] = "";
    this.assigned["jointcode"] = "";
    //address
    this.assigned["addressname"] = "";

    // if ($scope.assigned.JointVisit == "Y") {
    //    this.assigned["jointcode = "";
    // }
    this.assigned["remarks"] = "";
    var customerid = this.Cusdata.CBSCustomerID;
    this.customerid = this.Cusdata.CBSCustomerID;
    this.fullname = this.Cusdata.CustomerName;
    console.log("this.fullname",this.fullname)
    window.localStorage['Customerid'] = this.Cusdata.CBSCustomerID;
    window.localStorage['Callid'] = this.Cusdata.Callid;

    // var date=this.Cusdata.NEXT_CALL_DATE;
    window.localStorage['Purpose'] = this.Cusdata.purposeVal;
    this.purposeid = this.Cusdata.purposeVal;

    console.log('cubNew', this.Cusdata);
    if (this.customerid != null) {
      // this.enable = true;
      // this.showspin();
      this.Apiservice.getcustomerdetails(this.customerid).then(response => {
        // console.log(response);

        // //   this.hidespin();

        // var res = JSON.stringify(response);
        // var customerdetails = JSON.parse(JSON.parse(JSON.parse(res)))
        // //  console.log( JSON.parse(JSON.parse(JSON.parse(res))))
        // console.log(customerdetails)
        var result =JSON.stringify(response);
        // JSON.stringify(result.data)
        result = JSON.parse(result);
        result = JSON.parse(result);
        this.assignedcallscustomerdata = result;
        console.log('assignedcallscustomerdata',this.assignedcallscustomerdata)

        if (this.assignedcallscustomerdata != "" && this.assignedcallscustomerdata != undefined) {
          console.log(this.assignedcallscustomerdata);
          this.assigned["customerid"] = this.customerid;
          this.assigned["firstname"] = this.assignedcallscustomerdata[0].Nfirstname;
          this.assigned["lastname"] = this.assignedcallscustomerdata[0].Nlastname;
          this.assigned["mobile"] = this.assignedcallscustomerdata[0].Nmobile;
          this.assigned["resphnno"] = this.assignedcallscustomerdata[0].Nresidencephone;
          this.assigned["email"] = this.assignedcallscustomerdata[0].Nemail;

          console.log(this.assigned);
          console.log(this.assignedcallscustomerdata);

          this.firstWords = [];

          var firstname = [];

          for (let i = 0; i < this.assignedcallscustomerdata.length; i++) {

            firstname = this.assignedcallscustomerdata[i].Nfirstname.split(" ");

            this.firstWords.push(firstname[0]);
            this.assignedcallscustomerdata[i].firstname = this.firstWords[i];
            console.log(this.assignedcallscustomerdata)
            this.firstname1 = this.assignedcallscustomerdata[0].firstname;

          }
          console.log(this.assigned);
          console.log(this.firstname1);
          console.log(this.assignedcallscustomerdata[0].Add1);
          if (this.assignedcallscustomerdata[0].Add1 != undefined || this.assignedcallscustomerdata[0].Add2 != undefined || this.assignedcallscustomerdata[0].Add3 != undefined || this.assignedcallscustomerdata[0].Add4 != undefined || this.assignedcallscustomerdata[0].PIN != undefined) {
            var respAdd1 = this.assignedcallscustomerdata[0].Add1;
            var add1 = respAdd1.replace("/", "-");
            console.log(add1);
            var respAdd2 = this.assignedcallscustomerdata[0].Add2;
            var add2 = respAdd2.replace("/", "-");
            console.log(add2);
            this.assigned["addressname"] = add1 + ' ' + add2 + ' ' + this.assignedcallscustomerdata[0].Add3 + ' ' + this.assignedcallscustomerdata[0].Add4 + ' ' + this.assignedcallscustomerdata[0].PIN;
            // console.log(this.assigned.addressname);
          }
          if (this.assigned["addressname"] != "" && this.assigned["addressname"] != undefined) {
            console.log(this.assigned["addressname"]);
            this.MyassignCallForm.get('location').setValue(this.assigned["addressname"])
            this.myvalue = true;
            //this.data.selectele='P';
            this.setlatlong(this.assigned["addressname"]);
          }
        }
      })
    }

  }

  setlatlong(addressname) {
console.log(addressname)
  }
  getcalloutCome() {
   
    this.Apiservice.getcalloutcome().then(response => {
      var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
      this.CallOutcomeItems = result;
      // this.CallOutcomeItems = JSON.parse(this.CallOutcomeItems);
      console.log(this.CallOutcomeItems);
    })
  }
  modelDissmiss() {
    this.modalController.dismiss();
  }

  changeCallOutcome(event) {
    console.log(event.target.value);
    console.log(event);
    if (event.target.value == '2') {
      this.showFollowupDateTime = true;
    } else {
      this.showFollowupDateTime = false;
    }
  this.MyassignCallForm.get('calloutcome').setValue(event.target.value)
    console.log("calloutcomeSelection",this.assigned["calloutcome"])

  }

  changeCallType(event) {
    if (event.target.value == 'P') {
      this.showLocation = true;
      // if(this.assigned.addressname != 'undefined' && this.assigned.addressname != ' '&& this.assigned.addressname != ''&& this.assigned.addressname != undefined){
      //   console.log(this.assigned.addressname)
      //   window.localStorage['addressName']  = this.assigned.addressname;
      //   this.setlatlong(this.assigned.addressname);
      // }
    } else {
      this.showLocation = false;
      this.MyassignCallForm.get('jointvisit').setValue(null);
      this.MyassignCallForm.get('location').setValue(null);
    }

    console.log(event.target.value);
  }
  jointVisit(event) {
    console.log(event.target.value);
    debugger
    if (event.target.value == 'false') {
      debugger
      this.jointvisitChecked = true;
      this.showEmployeeDetails = true;
    } else {
      debugger
      this.jointvisitChecked = false;
      this.showEmployeeDetails = false;
    }

    // console.log(event.target.value);
  }
  empCode() {
    var empcode = this.MyassignCallForm.get('empcode').value;
    this.Apiservice.getEmployeeName(empcode,window.localStorage['branchID']).then(res=> {
      var response = JSON.stringify(res.data);
      response = JSON.parse(response);
      response = JSON.parse(response);
      this.MyassignCallForm.get('empname').setValue(response);
      console.log(response);
    })
  }
  onSubmitForm (MyassignCallForm) {
    // console.log(obj);

    // $scope.showspin();

    // console.log($scope.assigned);
    console.log(this.MyassignCallForm.getRawValue())
    var mobile = this.MyassignCallForm.get('mobile').value;
    var calltype =this.MyassignCallForm.get('calltype').value;
    this.calltype = this.MyassignCallForm.get('calltype').value;
    var remarks1 =this.MyassignCallForm.get('remarks').value;
    var firstname =this.MyassignCallForm.get('empname').value;
    var lastname =this.MyassignCallForm.get('empname').value;
    var purpose = window.localStorage['Purpose'];
    var customername = this.MyassignCallForm.get('empname');
    var responseid =this.MyassignCallForm.get('calloutcome').value;
    var cbsid = window.localStorage['Customerid'];
    var username = window.localStorage['userName'];
    var branchid = window.localStorage['branchID'];
    var CallerId = window.localStorage['userID'];
    var BusinessUnit = 0;
    var jointvisit = null;
    var jointcode = null;
    var Endtime = null; 
    var Totime= null; 
    var usercode = null;
    // var mode = "A";
    console.log(responseid)
    // console.log($scope.assigned.JointVisit)
    var nextcalldate = window.localStorage['nextcalldate'];
    this.addressname=  window.localStorage['addressName'];
    // console.log(this.assigned.addressname)
    var callid1 = window.localStorage['Callid'];
    if (callid1 == undefined) {
      var callid = null;
    } else {
      var callid = callid1;
    }

    if (remarks1 == "") {

      var remarks = null;
    } else {
      var remarks = remarks1;
    }

    if (mobile == "") {

      var mobile = null;
    } else {
      var mobile = mobile;
    }

    if (firstname == "") {

      var firstname = null;
    } else {
      var firstname = firstname;
    }

    if (lastname == "" || lastname == '.') {

      var lastname = null;
    } else {
      var lastname = lastname;
    }


    // if (customername == "") {

    //   var customername = null;
    // } else {
    //   var customername = customername;
    // }

    // if (purpose == "5" && this.assigned.current == "Y") {
    //   if ((this.assigned.collected_date == null || this.assigned.collected_date == undefined || this.assigned.collected_date == "") || (this.assigned.collected_accno == null || this.assigned.collected_accno == "" || this.assigned.collected_accno == undefined) || (this.assigned.collectamount == null || this.assigned.collectamount == "" || this.assigned.collectamount == undefined)) {

    //     var myPopup = $ionicPopup.show({
    //       template: '<center>Fill All Details Of Amount Collected</center>',
    //       title: 'Warning',
    //       scope: this,
    //       buttons: [{
    //         text: 'OK',
    //         type: 'button button-clear button-assertive'
    //       }]
    //     });
    //     this.hidespin($ionicLoading);
    //     return false;

    //   } else {
    //     var collectionmode = "Y";
    //     this.Collectiondate1 = this.assigned.collected_date;
    //     var collectiondate = $filter('date')(this.Collectiondate1, 'yyyy-MM-dd');
    //     var accountno = this.assigned.collected_accno;
    //     var amount = this.assigned.collectamount;
    //   }

    // }

    // if (this.purpose == "3") {

    //     if($scope.assigned.deposits=""||$scope.assigned.casa=""||$scope.assigned.advance=""||$scope.assigned.insurance=""){
    //        var myPopup = $ionicPopup.show({
    //           template: '<center>Fill Details Of Expected Business</center>',
    //           title: 'Warning',
    //           scope: $scope,
    //           buttons: [{
    //             text: 'OK',
    //             type: 'button button-clear button-assertive'
    //           }]
    //         });
    //         $scope.hidespin($ionicLoading);
    //         return false;
    //     }

    // }

    if (purpose != "5") {
      var collectionmode = null;

    }

    // if (purpose == "5") {
    //   if ($scope.assigned.current == "" || $scope.assigned.current == undefined || $scope.assigned.current == null || $scope.assigned.current == "N") {
    //     var collectionmode = null;
    //   }
    // }

    if (collectionmode == null) {
      var accountno = null;
      var amount = null;
      var collectiondate = null;

    }


    // if ($scope.assigned.calloutcome == "" || $scope.assigned.calloutcome == undefined || $scope.assigned.calloutcome == null) {

    //   var myPopup = $ionicPopup.show({
    //     template: '<center>Select Call OutCome</center>',
    //     title: 'Warning',
    //     scope: $scope,
    //     buttons: [{
    //       text: 'OK',
    //       type: 'button button-clear button-assertive'
    //     }]
    //   });
    //   $scope.hidespin($ionicLoading);
    //   return false;
    // }



//     if (responseid == "2") {
//       if (($scope.assigned.followdate == null || $scope.assigned.followdate == undefined || $scope.assigned.followdate == "") || ($scope.assigned.followtime == null || $scope.assigned.followtime == undefined || $scope.assigned.followtime == "")) {
//         var myPopup = $ionicPopup.show({
//           template: '<center>Provide Followup Details</center>',
//           title: 'Warning',
//           scope: $scope,
//           buttons: [{
//             text: 'OK',
//             type: 'button button-clear button-assertive'
//           }]
//         });
//         $scope.hidespin($ionicLoading);
//         return false;


//       } else {
//         $scope.nextcalldate1 = $filter('date')($scope.assigned.followdate, 'yyyy-MM-dd');

//         $scope.followuptime = $filter('date')($scope.assigned.followtime, 'h.mm a');
//         // var durationFilter = $filter('duration');
//         var nextcalldate = $scope.nextcalldate1 + ' ' + $scope.followuptime;

//       }

//     }



//     if (responseid != "2") {
//       var nextcalldate = " ";
//       //          var Endtime = null;
//       // var Totime = null;

//     }

//     if (calltype == "" || calltype == undefined || calltype == null) {
//       var myPopup = $ionicPopup.show({
//         template: '<center>Select Call Type</center>',
//         title: 'Warning',
//         scope: $scope,
//         buttons: [{
//           text: 'OK',
//           type: 'button button-clear button-assertive'
//         }]
//       });
//       $scope.hidespin($ionicLoading);
//       return false;

//     }

//     if (calltype == "P" && $scope.assigned.JointVisit == "Y") {
//       if ($scope.assigned.jointcode == null || $scope.assigned.jointcode == "" || $scope.assigned.jointcode == undefined) {
//         var myPopup = $ionicPopup.show({
//           template: '<center>Enter Joint Usercode</center>',
//           title: 'Warning',
//           scope: $scope,
//           buttons: [{
//             text: 'OK',
//             type: 'button button-clear button-assertive'
//           }]
//         });
//         $scope.hidespin($ionicLoading);
//         return false;
//       } else {
//         var jointvisit = "Y";
//         var jointcode = $scope.assigned.jointcode;

//       }


//     }

//     if (calltype == "P") {
//       if ($scope.assigned.JointVisit == "" || $scope.assigned.JointVisit == undefined || $scope.assigned.JointVisit == null || $scope.assigned.JointVisit == "N") {

//         var jointvisit = null;
//       }
//     }

//     if (calltype != "P") {

//       var jointvisit = null;

//     }

//     if (jointvisit == null) {
//       var jointcode = null;
//     }

//     var Endtime = null;
//     var Totime = null;

// if (calltype == "P")
// {
// console.log(this.assigned.addressname)
//   if ((this.assigned.addressname == "") || ((this.assigned.addressname == 'undefined') || (this.assigned.addressname == undefined)))
//   {
//     console.log($scope.addressname)
//     var myPopup = $ionicPopup.show({
//       template: '<center>Enter Your Location</center>',
//       title: 'Warning',
//       scope: $scope,
//       buttons: [{
//         text: 'OK',
//         type: 'button button-clear button-assertive'
//       }]
//     });
//     $scope.hidespin($ionicLoading);
//     return false;

//   }
//    else
//    {
//     //alert(latvalue);
//     var latvalue = $scope.lat1;
//     //console.log(latvalue)
//     var langvalue = $scope.lng1;
//     //console.log(latvalue)
//     var address = this.assigned.addressname;
//   }


// }

// else
// {
// var latvalue = null;
// var langvalue = null;
// var address = null;
// }
 /*  if (calltype == "P")
   {

   }
   else if
   {

   }
   else
   {

   }*/ 
  //  $scope.nextcalldate1 = $filter('date')($scope.assigned.followdate, 'yyyy-MM-dd');

  //       $scope.followuptime = $filter('date')($scope.assigned.followtime, 'h.mm a');
  //       // var durationFilter = $filter('duration');
  //       var nextcalldate = $scope.nextcalldate1 + ' ' + $scope.followuptime;
   console.log("directForm",this.MyassignCallForm.get('followupdate').value,this.MyassignCallForm.get('followuptime').value)
   this.assigned["followdate"] = this.MyassignCallForm.get('followupdate').value;
   this.assigned["followtime"] = this.MyassignCallForm.get('followuptime').value;
   nextcalldate = null;
   if(nextcalldate == '') {
    nextcalldate = null
   }else {
    nextcalldate = nextcalldate

   }
   console.log("directForm",nextcalldate)
   console.log("assignValueFromForm" ,this.assigned["followdate"],this.assigned["followtime"])
  //  nextcalldate =this.assigned["followdate"]
console.log("test",branchid, cbsid, this.fullname, mobile, CallerId, username, calltype, remarks1, purpose, responseid, nextcalldate, firstname, lastname, usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit)
console.log("calltype",this.calltype)
debugger
if (this.calltype == "P") {
  // $scope.showspin();
  this.Apiservice.updateassignedcalls(branchid, cbsid, this.fullname, mobile, CallerId, this.fullname, calltype, remarks, purpose, responseid, nextcalldate, username, username, usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit).then(response =>{
  var  responses = JSON.stringify(response.data);
  this.alertService.presentAlert('Success',"Save Successfully");
  console.log(responses)
    // var success = [];
    // success = response;
    // console.log(response)
  })
  //   .success(function(response) {
  //       $scope.hidespin();

  //       response = JSON.parse(response);
  //       var success = [];
  //       success = response;
  //       console.log(response)

  //       if (response !== "") {
  //         console.log(success, latvalue, langvalue, address,purpose, cbsid)

  //         //string CRMID, string LatValue, string Langvalue, string Address, string purpose, string CBSCustomerid
  //         $scope.showspin();
  //         callAPI.saveaddress(success, latvalue, langvalue, address, purpose,cbsid)
  //           .success(function(response) {
  //             $scope.hidespin();
  //             console.log(response)

  //             if(response=='"Yes"')
  //             {
  //  var alertPopup = $ionicPopup.alert({
  //           title: 'Success',
  //           template: 'Saved Successfully'
  //         });

  //         alertPopup.then(function(res) {
  //           $scope.UpdateModal.hide();
  //           // Custom functionality....
  //         });
  //             }
  //             else
  //             {
  //               var alertPopup = $ionicPopup.alert({
  //           title: 'Error',
  //           template: 'Error While Saving'
  //         });

  //         alertPopup.then(function(res) {
  //           $scope.UpdateModal.hide();
  //           // Custom functionality....
  //         });
  //             }
  //           }).error(function(err){
  //             $scope.hidespin();
  //             console.log(err)
  //           })
  //       }







  //       // if (success == 4) {

  //       //   var alertPopup = $ionicPopup.alert({
  //       //     title: 'Warning',
  //       //     template: 'This Customer Is Not Mapped With You'
  //       //   });

  //       //   alertPopup.then(function(res) {
  //       //     $scope.UpdateModal.hide();
  //       //     // Custom functionality....
  //       //   });

  //       // } else if (success == 2) {

  //       //   var alertPopup = $ionicPopup.alert({
  //       //     title: 'Warning',
  //       //     template: 'This Customer Is Not Mapped With You'
  //       //   });

  //       //   alertPopup.then(function(res) {
  //       //     $scope.UpdateModal.hide();
  //       //     // Custom functionality....
  //       //   });

  //       // } else if (success == 3) {

  //       //   var alertPopup = $ionicPopup.alert({
  //       //     title: 'Warning',
  //       //     template: 'This Customer Already Mapped To You. No Need To Convert'
  //       //   });

  //       //   alertPopup.then(function(res) {
  //       //     $scope.UpdateModal.hide();
  //       //     // Custom functionality....
  //       //   });


  //       // } else if (success[0].response == 1) {


  //       //   var alertPopup = $ionicPopup.alert({
  //       //     title: 'Warning',
  //       //     template: 'Please Visit Follow Up Screen As It Is In FOLLOW UP Status ' + success[0].Column1
  //       //   });

  //       //   alertPopup.then(function(res) {
  //       //     $scope.UpdateModal.hide();
  //       //     // Custom functionality....
  //       //   });

  //       // } else {


  //       //   var alertPopup = $ionicPopup.alert({
  //       //     title: 'Success',
  //       //     template: 'Saved Successfully'
  //       //   });

  //       //   alertPopup.then(function(res) {
  //       //     $scope.UpdateModal.hide();
  //       //     // Custom functionality....
  //       //   });


  //       // }

  //       console.log( "start call myassignedcallsdata() inside update");
  //       $scope.myassignedcallsdata();
  //       // $state.reload();
  //     })
  //     .error(function(response) {
  //       console.log(response);
  //       $scope.hidespin();
  //     });

}
//save
else
{
  debugger
if(this.MyassignCallForm.get('calloutcome').value !='') {
  this.Apiservice.updateassignedcalls(branchid, cbsid, this.fullname, mobile, CallerId, this.fullname, calltype, remarks, purpose, responseid, nextcalldate, username, username, usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit).then(response => {
    var res = JSON.stringify(response.data);
    res = JSON.parse(res);
    res = JSON.parse(res);
    var success = [];
    console.log(res);
    // success = res;
    this.alertService.presentAlert('Success',"Save Successfully");
  })
}else {
  this.alertService.presentAlert('Warning',"please select calloutcome");
  // alert('please select calloutcome');
}
 
      // .success(function(response) {
      //   $scope.hidespin();


 




      //   if (success == 4) {

      //     var alertPopup = $ionicPopup.alert({
      //       title: 'Warning',
      //       template: 'This Customer Is Not Mapped With You'
      //     });

      //     alertPopup.then(function(res) {
      //       $scope.UpdateModal.hide();
      //       // Custom functionality....
      //     });

      //   }
      //    else if (success == 2) {

      //     var alertPopup = $ionicPopup.alert({
      //       title: 'Warning',
      //       template: 'This Customer Is Not Mapped With You'
      //     });

      //     alertPopup.then(function(res) {
      //       $scope.UpdateModal.hide();
      //       // Custom functionality....
      //     });

      //   } 
      //   else if (success == 3) {

      //     var alertPopup = $ionicPopup.alert({
      //       title: 'Warning',
      //       template: 'This Customer Already Mapped To You. No Need To Convert'
      //     });

      //     alertPopup.then(function(res) {
      //       $scope.UpdateModal.hide();
      //       // Custom functionality....
      //     });


      //   } 
      //   else if (success[0].response == 1) {


      //     var alertPopup = $ionicPopup.alert({
      //       title: 'Warning',
      //       template: 'Please Visit Follow Up Screen As It Is In FOLLOW UP Status ' + success[0].Column1
      //     });

      //     alertPopup.then(function(res) {
      //       $scope.UpdateModal.hide();
      //       // Custom functionality....
      //     });

      //   }
      //    else {


      //     var alertPopup = $ionicPopup.alert({
      //       title: 'Success',
      //       template: 'Saved Successfully'
      //     });

      //     alertPopup.then(function(res) {
      //       $scope.UpdateModal.hide();
      //       // Custom functionality....
      //     });


      //   }

      //   $scope.myassignedcallsdata();
      //   // $state.reload();
      // })
      // .error(function(response) {
      //   console.log(response);
      //   $scope.hidespin();

      // });
}

  }


  // onSubmitForm(MyassignCallForm) {


  //   console.log(MyassignCallForm.value);

  // }

}

