import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { AlertServiceService } from 'src/app/service/alert-service.service';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-assignedvisitupdatemodal',
  templateUrl: './assignedvisitupdatemodal.page.html',
  styleUrls: ['./assignedvisitupdatemodal.page.scss'],
  providers:[DatePipe]
})
export class AssignedvisitupdatemodalPage implements OnInit {
  save_custname: any;
  savemon: any;
  savefn: any;
  saveIn: any;
  assignedvisit: any;
  Collectiondate1: any;
  collectionmode: any;
  collectiondate: any;
  nextcalldate1: any;
  followuptime: any;
  nextcalldate: any;
  jointvisit: any;
  lat1: any;
  lng1: any;
  branchid: any;
  usertype: any;
  userid: any;
  purpose: any;
  CallerId: any;
  username: any;
  usercode: any;

  constructor(private datepipe:DatePipe,private AlertService:AlertServiceService,private navParams:NavParams,private Apiservice:ApiServiceService) { }

  ngOnInit() {
    let Cusdata = this.navParams.get('Data');
this.save_custname=Cusdata.CustomerName
this.savemon=Cusdata.Mobile
this.savefn=Cusdata.firstname
this.saveIn=Cusdata.grpname
this. branchid = window.localStorage['branchID'];
this. usertype = window.localStorage['userType'];
this. userid = window.localStorage['userID'];
this. purpose = Cusdata.purpose;
this. CallerId = window.localStorage['userID'];
this. username = window.localStorage['UserName'];
this. usercode = window.localStorage['userCode'];
  }
  saveassignedvisits(obj){
debugger


  console.log(obj)

 // this.showspin($ionicLoading);
 


  var cbsid = window.localStorage['customerID'];

  var customername1 = this.save_custname;
  console.log(this.save_custname);
 
  var mobile1 = this.savemon;
 
  var calltype = this.assignedvisit.calltype;
  var callid = window.localStorage['callID']
  var remarks1 = this.assignedvisit.remarks;


  var firstname1 = this.savefn;
  var lastname1 = this.saveIn;
  /* var firstname1 = this.assignedvisit.firstname;
   var lastname1 = this.assignedvisit.lastname;*/
  var responseid = this.assignedvisit.calloutcome;
  var purpose = window.localStorage['PurposeID'];
  console.log(this.assignedvisit.calloutcome)
  var BusinessUnit = 0;

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


  if (mobile1 == "") {

    var mobile = null;
  } else {
    var mobile = mobile1;
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

  /* var cbsid = this.assignedvisit.customerid;*/

  if (remarks1 == "") {

    var remarks = null;
  } else {
    var remarks = remarks1;
  }

  if (purpose == "5" && this.assignedvisit.current == "Y") {
    if ((this.assignedvisit.collecteddate == null || this.assignedvisit.collecteddate == "" || this.assignedvisit.collecteddate == undefined) || (this.assignedvisit.collectedaccnumber == undefined || this.assignedvisit.collectedaccnumber == null || this.assignedvisit.collectedaccnumber == "") || (this.assignedvisit.collectedamount == null || this.assignedvisit.collectedamount == undefined || this.assignedvisit.collectedamount == "")) {

      this.AlertService.presentAlert("Alert","Fill All Details Of Amount Collected")

     
      return false;

    } else {
      var collectionmode = "Y";
      this.Collectiondate1 = this.assignedvisit.collecteddate;
      var collectiondate =this.datepipe.transform( this.Collectiondate1,'yyyy-MM-dd')
      //  $filter('date')(this.Collectiondate1, 'yyyy-MM-dd');
      var accountno = this.assignedvisit.collectedaccnumber;
      var amount = this.assignedvisit.collectedamount;
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


  if (purpose == "5") {
    if (this.assignedvisit.current == "" || this.assignedvisit.current == undefined || this.assignedvisit.current == null || this.assignedvisit.current == 'N') {

      this. collectionmode = null;
    }
  }

  var Endtime = null;
  var Totime = null;


  if (this.assignedvisit.calloutcome == "" || this.assignedvisit.calloutcome == null || this.assignedvisit.calloutcome == undefined) {
    this.AlertService.presentAlert("Alert","Select Call OutCome")
  
    return false;
  }


  console.log(responseid)
  if (responseid == "2") {
    if ((this.assignedvisit.followdate == null || this.assignedvisit.followdate == undefined || this.assignedvisit.followdate == "") || (this.assignedvisit.followtime == null || this.assignedvisit.followtime == undefined || this.assignedvisit.followtime == "")) {
      
      this.AlertService.presentAlert("Alert","Provide Followup Details")
    
      return false;


    } else {

      this.nextcalldate1 = this.datepipe.transform(this.assignedvisit.followdate,'yyyy-MM-dd')
      //$filter('date')(this.assignedvisit.followdate, 'yyyy-MM-dd');
      this.followuptime = this.datepipe.transform( this.assignedvisit.followtime, 'h.mm a')
      //$filter('date')(this.assignedvisit.followtime, 'h.mm a');
      var nextcalldate = this.nextcalldate1 + ' ' + this.followuptime;
    }

  }

  if (responseid != "2") {
    /* var nextcalldate = " ";*/
    this. nextcalldate = null;
    //          var Endtime = null;
    // var Totime = null;

  }

  if (this.assignedvisit.calltype == "" || this.assignedvisit.calltype == undefined || this.assignedvisit.calltype == null) {
    this.AlertService.presentAlert("Alert","Select Call Type")
    
    return false;

  }

  if (this.assignedvisit.calltype == "P" && this.assignedvisit.JointVisit == "Y") {
    if (this.assignedvisit.jointcode == null || this.assignedvisit.jointcode == "" || this.assignedvisit.jointcode == undefined) {
      this.AlertService.presentAlert("Alert","Enter Joint Usercode")
     
      return false;
    } else {
      var jointvisit = "Y";
      var jointcode = this.assignedvisit.jointcode;

    }


  }

  if (this.assignedvisit.calltype == "P") {
    if (this.assignedvisit.JointVisit == "" || this.assignedvisit.JointVisit == undefined || this.assignedvisit.JointVisit == null || this.assignedvisit.JointVisit == 'N') {

      this. jointvisit = null;
    }
  }

  if (this.assignedvisit.calltype != "P") {

    this. jointvisit = null;

  }

  if (jointvisit == null) {
    var jointcode = null;
  }

  /*  if (jointvisit == null) {
       var jointcode = null;
   }*/
  customername = customername.replace(/&/g, "");
  customername = customername.trim();


  if (this.assignedvisit.calltype == "P") {

    if ((this.assignedvisit.addressname == "") || ((this.assignedvisit.addressname == 'undefined') || (this.assignedvisit.addressname == undefined))) {
      console.log(this.assignedvisit.addressname)
      this.AlertService.presentAlert("Alert","Enter Your Location")
   
      return false;

    } else {

      var latvalue = this.lat1;

      var langvalue = this.lng1;

      var address = this.assignedvisit.addressname;
    }

  } else {
    //alert(latvalue)
    var latvalue = null;
    var langvalue = null;
    var address = null;
  }

 // console.log(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit)

  if (this.assignedvisit.calltype == "P") {
    //this.showspin();
    this.Apiservice.updateassignedvisits(this.branchid, cbsid, customername, mobile, this.CallerId, this.username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, this.usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit)


      .then((res:any)=> {

        //this.hidespin();
        console.log(res);
        var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
        // response = JSON.parse(response);
        var success = [];
        success = response;
        window.localStorage['date'] = "";

        if (response !== "") {
        console.log(success, latvalue, langvalue, address, cbsid)

        //string CRMID, string LatValue, string Langvalue, string Address, string purpose, string CBSCustomerid
       // this.showspin();
        this.Apiservice.saveaddress(success, latvalue, langvalue, address, purpose,cbsid)
          .then(function(response:any) {
            this.hidespin();
            console.log(response)

            if(response=='"Yes"')
            {
              this.AlertService.presentAlert("Alert","Saved Successfully")   
//  var alertPopup = $ionicPopup.alert({
//           title: 'Success',
//           template: 'Saved Successfully'
//         });

        // alertPopup.then(function(res) {
        //   this.UpdateModal.hide();
        //   // Custom functionality....
        // });
            }
            else
            {
              this.AlertService.presentAlert("Alert","Error While Saving")   
        //       var alertPopup = $ionicPopup.alert({
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
            template: 'Saved Successfully',
            onTap: function(e) {
              this.lat1 = "";
              this.lng1 = "";
            }


          });

          alertPopup.then(function(res) {
            this.UpdateModal.hide();

            // Custom functionality....
          });

        }*/
        window.localStorage['date'] = "";
        console.log(window.localStorage['date'])
        this.assignedvisit = {};
        this.lat1 = "";
        this.lng1 = ""
        this.getassignedvisitdata();
      })
     


  } else {
    //this.showspin();
    this.Apiservice.updateassignedvisits(this.branchid, cbsid, customername, mobile, this.CallerId, this.username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, this.usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit)


      .then((res:any)=> {

        //this.hidespin();
        // console.log(response);
        var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
        // response = JSON.parse(response);
        var success = [];
        success = response;
        window.localStorage['date'] = "";
        if (success[0].response == 1) {

          this.AlertService.presentAlert("Alert",'Please Visit Follow Up Screen As It Is In FOLLOW UP Status ' + success[0].Column1)
          // var alertPopup = $ionicPopup.alert({
          //   title: 'Warning',
          //   template: 'Please Visit Follow Up Screen As It Is In FOLLOW UP Status ' + success[0].Column1
          // });

          // alertPopup.then(function(res) {
          //   this.UpdateModal.hide();
          //   // Custom functionality....
          // });

        } else {

          this.AlertService.presentAlert("Alert","Saved Successfully")
          // var alertPopup = $ionicPopup.alert({
          //   title: 'Success',
          //   template: 'Saved Successfully',
          //   onTap: function(e) {
          //     this.lat1 = "";
          //     this.lng1 = "";
          //   }


          // });

          // alertPopup.then(function(res) {
          //   this.UpdateModal.hide();

          //   // Custom functionality....
          // });

        }
        window.localStorage['date'] = "";
        console.log(window.localStorage['date'])
        this.assignedvisit = {};
        this.lat1 = "";
        this.lng1 = ""
        this.getassignedvisitdata();
      })
     
  

}


  }
  getassignedvisitdata(){
    // debugger
    this.getassignedvisitdata = function() {

      this.showspin();
      var branchid = window.localStorage['branchID'];
      var usertype = window.localStorage['userType'];
      var userid = window.localStorage['userID'];
      this.showspin();
      this.Apiservice.myassignedvisitsdata(branchid, userid, usertype)
        .subscribe(function(response) {
          this.hidespin();
          // response = JSON.parse(response);
          var result = response.data;
          result = JSON.parse(result);
          result = JSON.parse(result);
          this.assignedvisitdata = result;
          console.log(this.assignedvisitdata)
          this.firstWords = [];
  
          var firstname = [];
  
          for (let i = 0; i < this.assignedvisitdata.length; i++) {
  
            firstname = this.assignedvisitdata[i].CustomerName.split(" ");
  
            this.firstWords.push(firstname[0]);
            this.assignedvisitdata[i].firstname = this.firstWords[i];
            console.log(this.assignedvisitdata[i].firstname);
            this.firstnamemodel = this.assignedvisitdata[i].firstname;
  
  
          }
  
        //  $ionicLoading.hide();
  
        })
        .error(function(response) {
          this.hidespin();
          console.log(response);
        //  $ionicLoading.hide();
        });
    };
  }
  closeUpdateModal(){

  }

}
