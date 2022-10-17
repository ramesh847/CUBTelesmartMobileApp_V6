import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { AlertServiceService } from 'src/app/service/alert-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-myfollowupvisitendmodel',
  templateUrl: './myfollowupvisitendmodel.page.html',
  styleUrls: ['./myfollowupvisitendmodel.page.scss'],
  providers:[DatePipe]
})
export class MyfollowupvisitendmodelPage implements OnInit {
 
  firstWords:any=[];
  show:boolean;
  visitsfollowupvisitdata:any=[];
  callout:any;
  isshow:boolean=false;
  myvalue:boolean=true
  customername: any;
  followupvisits: any={};
  objdataupdtime:any = {};
  lat1: any;
  lng1: any;
  hidecalloutcome: boolean;
  DisLat: any;
  DisLong: any;
  userid: string;
  branchid: string;
  usertype: string;
  purpose: string;
  customerid: string;
  responseout: any;
  ins_source: any;
  ins_type: any;
  ins_ref: any;
  casaVal: number;
  depositVal: number;
  AdvanceVal: number;
  InsuranceVal: number;
  Collectiondate1: any;
  Collectiondate: any;
  AccountNo: any;
  Amount: any;
  colectionmode: any;
  firstname1: any;
  addbaselocno: string;
  disablestart: boolean;
  dateToday1: any;
  purposeid: any;
  purposename: any;
  purposetype: any;
  cust_id: any;
  enable: boolean;
  businessunit: any;
  endmeetingtime: string;
  Totime: string;
  nextcalldate1: string;
  followuptime: string;
  jointvisit: any;
  usercode: string;
  followupvisitscustomerdata: any;
  branch: any;
  vaildResp: any;
  prodctType: any;
  planNumber: number;
  PolicyAmount: number;
  feeIncome: any;
  opendate: string;
  policynum: any;
  policyNumber: any;
  premiumAmount: any;
  productGroup: any;
  product: any;
  permiumPayTerm: number;
  permiumPayMode: any;
  insuranceRefer: number;
  insurancesource: any;
  insuranceRelation: number;
  insuranceType: number;
  jointid: any;
  constructor(private datepipe:DatePipe,private Apiservice:ApiServiceService,private navParams:NavParams,private AlertService:AlertServiceService) { }

  ngOnInit() {
debugger
this.userid=localStorage.getItem('userID')
this.branchid=localStorage.getItem('branchID')
this.usertype=localStorage.getItem('userType')
this.usercode=localStorage.getItem('usercode')
this.getfollowupvisitdata();
this.getInsuranceType();
this.getInsuranceSource();
this.getInsurancedata();

//this.followupvisits = {};
//console.log(obj);


//this.setlatlong(obj.LADDRESS);



let Cusdata = this.navParams.get('Data');

var latlng=Cusdata.LatValue+','+Cusdata.LongValue;
this.lat1=Cusdata.LatValue;
this.lng1=Cusdata.LongValue;

this.customername=Cusdata.CUSTOMER_NAME


this.followupvisits.deposits=Cusdata.Deposit_Amount
this.followupvisits.casa=Cusdata.casa_Amount
this.followupvisits.advance=Cusdata.Advance_Amount
this.followupvisits.insurance=Cusdata.Insurance_Amount
this.followupvisits.Insurance_Source=Cusdata.Insurance_Source
this.followupvisits.ReffRelation=Cusdata.ReffRelation
this.followupvisits.InsuranceType=Cusdata.InsuranceType
this.followupvisits.customerid=Cusdata.CUSTOMER_ID
this.followupvisits.customername=Cusdata.CUSTOMER_NAME
this.followupvisits.Purpose=Cusdata.Purpose
this.followupvisits.addressname=Cusdata.LADDRESS

localStorage.setItem('customerID',Cusdata.CUSTOMER_ID)
localStorage.setItem('callID',Cusdata.CRMCallID)
localStorage.setItem('PurposeID',Cusdata.purpose_id)
if(Cusdata.LADDRESS != 'undefined'&& Cusdata.LADDRESS != undefined && Cusdata.LADDRESS != 'null' && Cusdata.LADDRESS != null){
this.myvalue = true;
}else{
  this.myvalue = false;
}

if(Cusdata.PURPOSE != "NPA followup" && Cusdata.PURPOSE != "VVIP Visits"){
this.hidecalloutcome = false;
}else{
  this.hidecalloutcome = true;
}

      // PURPOSE
    this.DisLat = Cusdata.LatValue;
     this.DisLong = Cusdata.LongValue;

      var rad = function (x) {
        return x * Math.PI / 180;
      };

      setTimeout(function () {
        debugger
        var R = 6378137; // Earth’s mean radius in meter
       this.Inlatlng = window.localStorage['curntlatlngval'];


        if (this.Inlatlng == undefined || this.Inlatlng == "undefined") {

          var posOptions = { timeout: 10000, enableHighAccuracy: false };

          // $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
          //   console.log(position);
          //   var Inlatlng = (position.coords.latitude) + "," + (position.coords.longitude);
          //   console.log(Inlatlng);
          //   window.localStorage['curntlatlngval'] = Inlatlng;
          //   console.log(window.localStorage['curntlatlngval']);
          // }, function (err) {
          //   console.log(err);
          // })
        }

        //HARDCODED LAT LNG
       this.Inlatlng = '13.0308329,80.2380114';



       
        var latlong1arr = this.Inlatlng.split(",");
        // alert(latlong1arr)
        console.log(latlong1arr)

        var dLat = rad(latlong1arr[0] - this.DisLat);
        var dLong = rad(latlong1arr[1] -this.DisLong);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(rad(this.DisLat)) * Math.cos(rad(latlong1arr[0])) *
          Math.sin(dLong / 2) * Math.sin(dLong / 2);
        console.log(a)
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        console.log(d)
       this.distanceInMeter = d;


        var currentDateTime = new Date();
this.objdataupdtime={}
        
        this.objdataupdtime.CUSTOMER_ID = Cusdata.CUSTOMER_ID;
        this.objdataupdtime.RO_CODE = Cusdata.RO_CODE;
        this.objdataupdtime.START_TIME = currentDateTime;
        // this.getbusinessunit(Cusdata.CUSTOMER_ID);
        //objdataupdtime.START_LOCATION = window.localStorage['trackinglocation'];

        

        // COMMENTED DISTANCE CALULATION WHILE END

        // if (this.distanceInMeter >= 2000) {
        //   console.log("More than 200 meter")


        //   alert("Invalid Meeting Location.");
        // } else {





        //alert("Reached the Location");
        var timestart = new Date();
        console.log(timestart);
      this.endmeetingtime = this.datepipe.transform('date')(timestart, 'dd.MM.yyyy');
       // console.log(this.endmeetingtime);
debugger

        console.log("Less than 200 meter");

        console.log("action popup");
        this.followupvisitsUpdateModal(Cusdata)


        //alert("Reached the Location");
        // var myPopup = $ionicPopup.show({
        //   template: '<center> Reached the Location </center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive',
        //     onTap: function(e) {
        //       console.log("action popup");
        //       this.followupvisitsUpdateModal(obj)
        //       //this.UpdateModal.show();
        //     }
        //   }]
        // });
        // }

      }, 500);

this.followupvisitsUpdateModal(Cusdata)
this.calloutcome();

  }


 getbusinessunit (cust) {
   debugger
  //  this.showspin();
   this.Apiservice.getbusinesstype(cust)
      .then((response:any)=> {
        console.log(response);
        response = JSON.parse(response);
        this.businessunit = response;
       // this.hidespin();

      })
      


  }

  followupvisitsUpdateModal(cusdata:any){
    debugger
    console.log(cusdata)
    // obj.LADDRESS = obj.LADDRESS.replace(/\s+/g,' ').trim();

    

    //this.myvalue = true;
    this.firstname1 = cusdata.firstname;
   this.lat1 = "";
    this.lng1 = "";
    this.addbaselocno = "";
    // $("#mapshowimage").html("");
    // $(".showdivs").html("");

    // this.followupvisits.addressname = "";
    //.clear();
    //this.typeshowmap="";
   this.disablestart = true;

    this.followupvisits.starttime = window.localStorage['date'];
    console.log(window.localStorage['date']);
    console.log(this.followupvisits.starttime);
   


    //this.UpdateModal.show();
   this.dateToday1 = this.datepipe.transform( new Date(),'yyyy-MM-dd')
  
    //console.log(obj)
    // this.followupvisits.starttime = "";
    // this.followupvisits.endtime = "";
  this.followupvisits.customername1 = cusdata.firstname;
    // this.followupvisits.JointVisit = "N";
    // this.Purpose = obj.PURPOSE;
    // this.customername = obj.CUSTOMER_NAME;
    console.log(this.followupvisits.Purpose)
    console.log(this.followupvisits.customername)

   this.followupvisits.calloutcome = "";
    this.followupvisits.followdate = "";
    this.followupvisits.followtime = "";
    this.followupvisits.calltype='P'
    this.followupvisits.JointVisit = "";
   this.followupvisits.jointusername = "";
    this.followupvisits.jointcode = "";
  this.followupvisits.deposits = cusdata.Deposit_Amount;
   this.followupvisits.casa = cusdata.Casa_Amount;
   this.followupvisits.advance = cusdata.Advance_Amount;
    this.followupvisits.insurance = cusdata.Insurance_Amount;
    this.followupvisits.Insurance_Source = cusdata.InsuranceSource;
   this.followupvisits.ReffRelation = cusdata.ReffRelation;
    this.followupvisits.InsuranceType = cusdata.InsuranceType;

  this.followupvisits.remarks = "";
    //this.followupvisits.customerid = obj.CUSTOMER_ID;
    if(cusdata.CUSTOMER_ID != 0){
      this.followupvisits.customerid = cusdata.CUSTOMER_ID;
    }
    this.followupvisits.customername = cusdata.CUSTOMER_NAME;
    console.log(this.followupvisits.customername);
   this.followupvisits.Purpose = cusdata.PURPOSE;
    window.localStorage['customerID'] = cusdata.CUSTOMER_ID;
    window.localStorage['callID'] =cusdata.CRMCallID;

    window.localStorage['PurposeID'] = cusdata.purpose_id;
    this.purposeid = cusdata.purpose_id;
    console.log(this.purposeid);

   this.purposename = cusdata.PURPOSE;
    this.purposetype = cusdata.PURPOSETEST

    this.cust_id = cusdata.CUSTOMER_ID;


    console.log(cusdata);
    this.followupvisits.addressname = cusdata.LADDRESS;
   this.lat1 =cusdata.LatValue;
    console.log(this.lat1);
   this.lng1 = cusdata.LongValue;
    console.log(this.lng1);

   
    if (this.cust_id == null) {

    this.enable = false;

    }
    if (this.cust_id != null) {
     this.enable = true;
     // this.getbusinessunit(obj.CUSTOMER_ID);
      if(this.cust_id == 0){
        this.followupvisits.lastname =  cusdata.CUSTOMER_NAME;
        this.followupvisits.mobile =cusdata.CONTACT_NO;
      }else{
     // this.showspin();
     this.Apiservice.getcustomerdetails(this.cust_id)
        .then(function (response:any) {
          debugger
         // this.hidespin();
          console.log(response);
         this.custDetails = JSON.parse(response);
         this.followupvisitscustomerdata = JSON.parse(this.custDetails);
debugger
          if(this.followupvisitscustomerdata != "" && this.followupvisitscustomerdata != undefined)
          {
this.followupvisits={};
            // this.followupvisits.customerid="";
            // this.followupvisits.customername="";
            // this.followupvisits.firstname="";
            // this.followupvisits.lastname="";
            // this.followupvisits.mobile="";
            // this.followupvisits.resphnno="";
            // this.followupvisits.email="";

            this.followupvisits.customerid = cusdata.CUSTOMER_ID;
            this.followupvisits.customername =this.followupvisitscustomerdata[0].Nfirstname + ' ' + this.followupvisitscustomerdata[0].Nlastname;
            window.localStorage['customerName'] =this.followupvisits.customername;
            this.followupvisits.firstname =this.followupvisitscustomerdata[0].Nfirstname;
            this.followupvisits.lastname = this.followupvisitscustomerdata[0].Nlastname;
            this.followupvisits.mobile = this.followupvisitscustomerdata[0].Nmobile;
            this.followupvisits.resphnno = this.followupvisitscustomerdata[0].Nresidencephone;
            this.followupvisits.email = this.followupvisitscustomerdata[0].Nemail;
  
            this.firstWords = [];
  
            var firstname = [];
  
            if (this.followupvisitscustomerdata.length > 0) {
             // this.showspin();
            }
            for (let i = 0; i < this.followupvisitscustomerdata.length; i++) {
  
              firstname = this.followupvisitscustomerdata[i].Nfirstname.split(" ");
  
              this.firstWords.push(firstname[0]);
              this.followupvisitscustomerdata[i].firstname =this.firstWords[i];
              this.firstname1 = this.followupvisitscustomerdata[i].firstname;
              if (i == this.followupvisitscustomerdata.length - 1) {
               // this.hidespin();
              }
            }
          console.log(this.followupvisitscustomerdata[0].Add1);
          this.followupvisitscustomerdata[0].Add1 = this.followupvisitscustomerdata[0].Add1.replace(/\s+/g,' ').trim();
          this.followupvisitscustomerdata[0].Add2 = this.followupvisitscustomerdata[0].Add2.replace(/\s+/g,' ').trim();
          this.followupvisitscustomerdata[0].Add3 = this.followupvisitscustomerdata[0].Add3.replace(/\s+/g,' ').trim();
          this.followupvisitscustomerdata[0].Add4 = this.followupvisitscustomerdata[0].Add4.replace(/\s+/g,' ').trim();
          if(this.followupvisitscustomerdata[0].Add1 != undefined || this.followupvisitscustomerdata[0].Add2 != undefined || this.followupvisitscustomerdata[0].Add3 != undefined || this.followupvisitscustomerdata[0].Add4 != undefined || this.followupvisitscustomerdata[0].PIN != undefined){
            var respAdd1= this.followupvisitscustomerdata[0].Add1;
            var add1 = respAdd1.replace("/", "-");
            console.log(add1); 
            var respAdd2= this.followupvisitscustomerdata[0].Add2;
            var add2 = respAdd2.replace("/", "-");
            console.log(add2);
            this.followupvisits.addressname = add1+' '+add2+' '+this.followupvisitscustomerdata[0].Add3+' '+this.followupvisitscustomerdata[0].Add4+' '+this.followupvisitscustomerdata[0].PIN;
          console.log(this.followupvisits.addressname);
          }
          if(this.followupvisits.addressname != "" && this.followupvisits.addressname != undefined)
          { 
            console.log(this.followupvisits.addressname);
            this.myvalue = true;
           //this.data.selectele='P';
          //  this.setlatlong(this.followupvisits.addressname);
          }
         
         }
          // this.followupvisits.firstname = this.followupvisitscustomerdata[0].Nfirstname;
          // this.followupvisits.email = this.followupvisitscustomerdata[0].Nemail;
          // this.followupvisits.lastname = this.followupvisitscustomerdata[0].Nlastname;
          // this.followupvisits.lastname = this.followupvisitscustomerdata[0].Nlastname;
          // this.followupvisits.residentialno = this.followupvisitscustomerdata[0].Nresidencephone;
          // console.log(this.followupvisitscustomerdata)

          // [{"Ncustomerid":null,"Nfirstname":"kavi  mani","Nlastname":"A","Nmobile":"9047506402","Nresidencephone":"","Nemail":"n.manikandan19@gmail.com"}]
          // this.cust_id = this.assignedcustomerdata.Ncustomerid;
          // console.log(this.followupvisitscustomerdata[0].Nfirstname)
          // this.username = window.localStorage['userName'];

        })
       
      }
    }


    console.log(cusdata);
    this.followupvisits.addressname =this.followupvisits.addressname.replace(/\s+/g,' ').trim();
    console.log(this.followupvisits.addressname);
    if(this.followupvisits.addressname != '' && this.followupvisits.addressname != 'undefined' && this.followupvisits.addressname != undefined){
      // this.typeshowmap1(this.lat1, this.lng1,this.followupvisits.addressname)
    }


  }

  calloutcome(){
    debugger
    this.Apiservice.calloutcomeapi().then((res:any)=>{
      debugger
      this.callout= JSON.parse(res)
    })
  }
  checkboxClick(e:any){
    debugger
    if(e.target.checked==false){
      this.isshow=true
    }else{
      this.isshow=false
    }
  }

  getfollowupvisitdata(){
debugger

//  this.search.PURPOSE = "";
//   this.search.CUSTOMER_ID = "";
  console.log("inside getfollowupvisitdata");
  this.userid=localStorage.getItem('userID')
  this.branchid=localStorage.getItem('branchID')
  this.usertype=localStorage.getItem('userType')
  this.usercode=localStorage.getItem('usercode')
 

  this.purpose = "null";
  this.customerid = "null"
  this.Apiservice.myfollowupvisitsdata(this.branchid, this.userid, this.usertype,this.purpose,this.customerid)
    .then((response:any)=> {
      debugger
     // this.hidespin();
     this. responseout = JSON.parse(response);
     this.visitsfollowupvisitdata = this.responseout;
     // $ionicLoading.hide();
      if (this.visitsfollowupvisitdata == undefined) {

     this.show = true;

      }
     
    this.firstWords = [];

      var firstname = [];


      try{
      for ( let i = 0; i < this.visitsfollowupvisitdata.length; i++) {
        console.log(i);
        firstname = this.visitsfollowupvisitdata[i].CUSTOMER_NAME.split(" ");
        this.firstWords.push(firstname[0]);

       this.visitsfollowupvisitdata[i].firstname = this.firstWords[i];
        console.log(this.visitsfollowupvisitdata[i].purpose_id);
        if (this.visitsfollowupvisitdata[i].purpose_id == 11 || this.visitsfollowupvisitdata[i].purpose_id == 12 || this.visitsfollowupvisitdata[i].purpose_id == 13) {
          var sample_test =this.visitsfollowupvisitdata[i].PURPOSE;
         this.visitsfollowupvisitdata[i].PURPOSETEST = sample_test;
          this.visitsfollowupvisitdata[i].PURPOSE = "Lead Generation";
        }
      }
    }catch(err){
     // this.hidespin();
      console.log(err);
    }



    })


  }
getInsuranceType(){
debugger

  this.Apiservice.getInsuranceType()
    .then((response:any)=> {
      debugger
      console.log(response);
     this.ins_type = JSON.parse(response);
    })
   


}
getInsuranceSource(){
debugger
this.Apiservice.getInsuranceSource()
    .then((response:any)=> {
      debugger
      console.log(response);
      this.ins_source = JSON.parse(response);
    })
}
getInsurancedata(){
debugger
this.Apiservice.getinsurancedetails('Refferals')
.then((response:any)=> {
  debugger
  //this.hidespin();
  console.log(response);
  var itemrefarr = JSON.parse(response);
 this.ins_ref = itemrefarr.Table;
})
}

savecallout(data:any){
  debugger
  console.log(data);
  console.log(this.followupvisits, this.followupvisits.addressname);
  //this.showspin($ionicLoading);
  var CALLID1 = window.localStorage['callID'];
  var customername1 =this.followupvisits.customername;
  var mobile1 = this.followupvisits.mobile;
  var CALLTYPE = this.followupvisits.calltype;
  var REMARKS1 = this.followupvisits.remarks;
  var RESPONSE =this.followupvisits.calloutcome;
  var BusinessUnit = 0;
  var CUSTID = window.localStorage['customerID']
  var purpose = window.localStorage['PurposeID'];
  console.log(this.followupvisits.collected_date)
  console.log(this.followupvisits.collected_accno)
  console.log(this.followupvisits.collectamount)
  if(RESPONSE != 3){
  if (CALLID1 == undefined) {

    var CALLID = null;
  } else {
    var CALLID = CALLID1;
  }
  console.log(this.followupvisits.calloutcome.Value)
  // if (customername1 == "" || customername1 == undefined || customername1 == "undefined") {
  //   if(firstname1 == "" || firstname1 == undefined || firstname1 == "undefined"){
  //     if(lastname1 == "" || lastname1 == undefined || lastname1 == "undefined"){
  //       var customername = null;
  //     }else{
  //       var customername = lastname1;
  //     }
  //   }else{
  //     var customername = firstname1;
  //   }
    
  // } else {
  //   var customername = customername1;
  // }

  if (mobile1 == "") {

    var mobile = null;
  } else {
    var mobile = mobile1;
  }


  if (REMARKS1 == "") {

    var REMARKS = null;
  } else {
    var REMARKS = REMARKS1;
  }


  if (purpose == "3") {
    if (this.followupvisits.deposits == 0 && this.followupvisits.casa == 0 && this.followupvisits.advance == 0 && this.followupvisits.insurance == 0) {
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
      this.AlertService.presentAlert("Alert","Fill Details Of Expected Business")
      return false;
    } else {
      var casaVal = this.followupvisits.casa;
      var depositVal = this.followupvisits.deposits;
      var AdvanceVal = this.followupvisits.advance;
      var InsuranceVal = this.followupvisits.insurance;
    }

    if (this.followupvisits.deposits != 0 ||this.followupvisits.casa != 0 || this.followupvisits.advance != 0 || this.followupvisits.insurance != 0) {
      var casaVal = this.followupvisits.casa;
      var depositVal = this.followupvisits.deposits;
      var AdvanceVal =this.followupvisits.advance;
      var InsuranceVal = this.followupvisits.insurance;

    }
  }


  if (purpose != "3") {
  this. casaVal = 0;
    this. depositVal = 0;
    this. AdvanceVal = 0;
    this. InsuranceVal = 0;

  }

  if (purpose == "5" && this.followupvisits.current == "Y") {
    if ((this.followupvisits.collected_date == null || this.followupvisits.collected_date == "" || this.followupvisits.collected_date == undefined) || (this.followupvisits.collected_accno == null || this.followupvisits.collected_accno == "" || this.followupvisits.collected_accno == undefined) || (this.followupvisits.collectamount == null || this.followupvisits.collectamount == "" || this.followupvisits.collectamount == undefined)) {

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
      this.AlertService.presentAlert("Alert","Fill All Details Of Amount Collected")
      return false;

    } else {
      var colectionmode = "Y";
  this.Collectiondate1 = this.followupvisits.collected_date;
      this. Collectiondate =this.datepipe.transform( this.Collectiondate1,'yyyy-MM-dd')
      //  $filter('date')(this.Collectiondate1, 'yyyy-MM-dd');
      this. AccountNo =this.followupvisits.collected_accno;
      this. Amount = this.followupvisits.collectamount;
    }

  }


  if (purpose != "5") {
    this. colectionmode = null;

  }

  if (purpose == "5") {
    if (this.followupvisits.current == undefined || this.followupvisits.current == "" || this.followupvisits.current == 'N') {
      this. colectionmode = null;
    }
  }

  if (colectionmode == null) {
    var AccountNo = null;
    var Amount = null;
    var Collectiondate = null;

  }
  console.log(this.followupvisits.current)



 
  if (this.followupvisits.calltype == "P") {
    if ((data.startmeetingtime == "") || ((data.startmeetingtime == 'undefined') || (data.startmeetingtime == undefined))) {

      var Endtime = null;
    } else {
     
      var Endtime = data.startmeetingtime;

     

    }
  } else {
    var Endtime = null;
  }
  if (this.followupvisits.calltype == "P") {
    if ((this.endmeetingtime == "") || ((this.endmeetingtime == 'undefined') || (this.endmeetingtime == undefined))) {
      var Totime = null;
    } else {
     
      this. Totime = this.endmeetingtime;
    
    }
  } else {
    var Totime = null;
  }


  

  if (this.followupvisits.calloutcome == "" || this.followupvisits.calloutcome == null || this.followupvisits.calloutcome == undefined) {
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



  if (RESPONSE == "2") {
    if ((this.followupvisits.followdate == "" || this.followupvisits.followdate == null || this.followupvisits.followdate == undefined) || (this.followupvisits.followtime == "" || this.followupvisits.followtime == null || this.followupvisits.followtime == undefined)) {
     
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
      this.nextcalldate1 = this.datepipe.transform( this.followupvisits.followdate,'yyyy-MM-dd')
    //  $filter('date')(this.followupvisits.followdate, 'yyyy-MM-dd');
   
      this.followuptime = this.datepipe.transform(this.followupvisits.followtime, 'h.mm a')
      // $filter('date')(this.followupvisits.followtime, 'h.mm a');
      var NEXTCALLDATE = this.nextcalldate1 + ' ' + this.followuptime;

     
    }

  }

  if (RESPONSE != "2") {
    var NEXTCALLDATE = " ";
  }
  console.log(this.followupvisits.JointVisit)
  if (this.followupvisits.calltype == "" || this.followupvisits.calltype == null || this.followupvisits.calltype == undefined) {
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
  console.log(this.followupvisits.followdate)
  console.log(this.followupvisits.followtime)

  if (this.followupvisits.calltype == "P" && this.followupvisits.JointVisit == "Y") {
    if (this.followupvisits.jointcode == null || this.followupvisits.jointcode == "" || this.followupvisits.jointcode == undefined) {
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
      var jointcode = this.followupvisits.jointcode;

    }
  }

  if (this.followupvisits.calltype == "P") {
    if (this.followupvisits.JointVisit == undefined || this.followupvisits.JointVisit == null || this.followupvisits.JointVisit == "" || this.followupvisits.JointVisit == "N") {

      this. jointvisit = null;

    }
  }
  if (this.followupvisits.calltype != "P") {

    this. jointvisit = null;

  }

  if (jointvisit == null) {
    var jointcode = null;
  }


  if (this.followupvisits.calltype == "P") {
    console.log(this.followupvisits.addressname);

    if ((this.followupvisits.addressname == "") || ((this.followupvisits.addressname == 'undefined') || (this.followupvisits.addressname == undefined))) {
      console.log(this.followupvisits.addressname)
     
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
     

      var latvalue = this.lat1;

      var langvalue = this.lng1;

      var address = this.followupvisits.addressname;
    }

  } else {
   
    var latvalue = null;
    var langvalue = null;
    var address = null;
  }

var STRUSERID=window.localStorage['userID']



  console.log(STRUSERID, CUSTID, RESPONSE, REMARKS, this.branchid, NEXTCALLDATE, CALLID, CALLTYPE, this.usercode, AccountNo, Amount, Collectiondate, colectionmode, jointvisit, jointcode, Endtime, Totime)

  if (this.followupvisits.calltype == "P") {

    console.log("call type is personal visit");
    //this.showspin();
    this.Apiservice.updatefollowcalls(STRUSERID, CUSTID, RESPONSE, REMARKS, this.branchid, NEXTCALLDATE, CALLID, CALLTYPE, this.usercode, AccountNo, Amount, Collectiondate, colectionmode, jointvisit, jointcode, Endtime, Totime)
      .then(function (response:any) {
        this.hidespin();
        console.log(response);
      
        this.success = response;
        window.localStorage['date'] = "";

        if (response !== '') {
          this.AlertService.presentAlert("Alert","Saved Successfully")
          // var alertPopup = $ionicPopup.alert({
          //   title: 'Success',
          //   template: 'Saved Successfully'

          // });

          // alertPopup.then(function (res) {
          //   this.UpdateModal.hide();
          //   this.doRefresh();
          // });
          
        } else {
          this.AlertService.presentAlert("Alert","Error While Saving")
          // var alertPopup = $ionicPopup.alert({
          //   title: 'Error',
          //   template: 'Error While Saving'
          // });

          // alertPopup.then(function (res) {
          //   this.UpdateModal.hide();
          //   this.doRefresh();
          // });
        }

        
        this.lat1 = "";
        this.lng1 = "";
        this.followupvisits.addressname = "";
        this.end_disable = true;
        this.action_disable = true;
        this.getfollowupvisitdata();

      })
    
  } else {
    console.log("call type is not a personal visit");
   // this.showspin();
    this.Apiservice.updatefollowcalls(STRUSERID, CUSTID, RESPONSE, REMARKS, this.branchid, NEXTCALLDATE, CALLID, CALLTYPE, this.usercode, AccountNo, Amount, Collectiondate, colectionmode, jointvisit, jointcode, Endtime, Totime)
      .then(function (response) {
       // this.hidespin();
        console.log(response);
        // response = JSON.parse(response);
        this.success = response;
        window.localStorage['date'] = "";
        this.AlertService.presentAlert("Alert","Successfully Saved")
        // var alertPopup = $ionicPopup.alert({
        //   title: 'Success',
        //   template: 'Successfully Saved'
        //   // onTap: function(e) {

        //   // }

        // });

        // alertPopup.then(function (res) {
        //   this.UpdateModal.hide();
        // });
        this.lat1 = "";
        this.lng1 = "";
        this.followupvisits.addressname = "";
        this.end_disable = true;
        this.action_disable = true;
        this.getfollowupvisitdata();

      })
      

  }
  


            }else{
        
              var CUSTID = window.localStorage['customerID']

              if(this.followupvisits.type == 11 && CUSTID == 0){
                console.log(this.followupvisits.customerid)
                this.validateCustID (this.followupvisits.customerid)
              }else{
                this.saveLeadConversion();
              }
            }

}
validateCustID(obj:any){
  debugger
 
    var callID = window.localStorage['callID'];
    var custID = window.localStorage['customerID'];
    var BRANCH = window.localStorage['branchID'];
    var STRUSERID = window.localStorage['userID'];
    var txtId = obj;
    if(obj != undefined || obj != 'undefined' || obj != null ){
    // this.showspin();
      this.Apiservice.getcustomerdetails(txtId)
        .then((response:any)=> {
         //this.hidespin();
          response = JSON.parse(response);
         this.followupvisitscustomerdata = JSON.parse(response);
          //console.log(this.followupvisitscustomerdata)
          if(this.followupvisitscustomerdata.length != 0)
          {
           this.branch=this.followupvisitscustomerdata[0].NBranch; 
          }else{
           this.branch= 0;
          }
          this.Apiservice.custIDValidate(custID,callID,txtId,this.branch,BRANCH,STRUSERID)
          .then((response:any) =>{
            console.log(response)
           this.vaildResp= JSON.parse(response)
          // this.hidespin($ionicLoading);
            if(this.vaildResp == 'OK'){
              console.log(this.vaildResp);
             this.saveLeadConversion();
              //this.followup.customerid = obj.CUSTOMER_ID;
              //this.followupvisits.customername =this.followupvisitscustomerdata[0].Nfirstname + ' ' +this.followupvisitscustomerdata[0].Nlastname;
              // window.localStorage['customerName'] =this.followupvisits.customername;
              //this.followupvisits.firstname =this.followupvisitscustomerdata[0].Nfirstname;
              //this.followupvisits.lastname =this.followupvisitscustomerdata[0].Nlastname;
              //this.followupvisits.mobile =this.followupvisitscustomerdata[0].Nmobile;
              //this.followupvisits.resphnno =this.followupvisitscustomerdata[0].Nresidencephone;
              //this.followupvisits.email =this.followupvisitscustomerdata[0].Nemail;
  
  
  
              //this.firstWords = [];
  
              // var firstname = [];
  
              // if (this.followupvisitscustomerdata.length > 0) {
              //  this.showspin();
              // }
              // for (i = 0; i <this.followupvisitscustomerdata.length; i++) {
  
              //   firstname =this.followupvisitscustomerdata[i].Nfirstname.split(" ");
  
              //  this.firstWords.push(firstname[0]);
              //  this.followupvisitscustomerdata[i].firstname =this.firstWords[i];
              //  this.firstname1 =this.followupvisitscustomerdata[i].firstname;
              //   if (i ==this.followupvisitscustomerdata.length - 1) {
              //    this.hidespin();
              //   }
              // }
  
              // console.log(this.followupvisitscustomerdata[0].Add1);
              // if(this.followupvisitscustomerdata[0].Add1 != undefined ||this.followupvisitscustomerdata[0].Add2 != undefined ||this.followupvisitscustomerdata[0].Add3 != undefined ||this.followupvisitscustomerdata[0].Add4 != undefined ||this.followupvisitscustomerdata[0].PIN != undefined){
              //   var respAdd1=this.followupvisitscustomerdata[0].Add1;
              //   var add1 = respAdd1.replace("/", "-");
              //   console.log(add1);
              //   var respAdd2=this.followupvisitscustomerdata[0].Add2;
              //   var add2 = respAdd2.replace("/", "-");
              //   console.log(add2);
              //this.followupvisits.addressname = add1+' '+add2+' '+this.followupvisitscustomerdata[0].Add3+' '+this.followupvisitscustomerdata[0].Add4+' '+this.followupvisitscustomerdata[0].PIN;
              // console.log(this.followupvisits.addressname);
              // }
              // if(this.followupvisits.addressname != "" &&this.followupvisits.addressname != undefined)
              // { 
              //   console.log(this.followupvisits.addressname);
              //this.myvalue = true;
              // //this.data.selectele='P';
              //this.setlatlong(this.followupvisits.addressname);
              // }
            }else{
             //this.hidespin();
             this.AlertService.presentAlert("Alert",this.vaildResp)
              // var alertPopup = $ionicPopup.alert({
              //   title: 'Warning',
              //   template:this.vaildResp
              // });
            
              // alertPopup.then(function(res) {
              //  this.UpdateModal.hide();
            
              // });
              
            }
           
          })
          
         ;
         
        // }
        })
      
      }
  
  
}

saveLeadConversion() {
  var usercode = window.localStorage['userCode'];
  var username = window.localStorage['userName'];
  var BRANCH = window.localStorage['branchID'];
  var STRUSERID = window.localStorage['userID'];
  var purpose = window.localStorage['PurposeID'];
  console.log(purpose);
//  console.log(obj)
  //this.showspin($ionicLoading);
  if(this.followupvisits.calloutcome == undefined || this.followupvisits.calloutcome == null || this.followupvisits.calloutcome == 'null' || this.followupvisits.calloutcome == 'undefined'){
    this.AlertService.presentAlert("Alert","Provide Call OutCome Details")
    
   
      return false;
  }
  var prodctType='';
  var purpose = window.localStorage['PurposeID'];
  var firstName1 = this.followupvisits.firstname;
  var LastName1 = this.followupvisits.lastname;
  var mobile1 = this.followupvisits.mobile;
  var email1 = this.followupvisits.email;
  var CALLTYPE = this.followupvisits.calltype;
  var REMARKS1 = this.followupvisits.remarks;
  var RESPONSE = this.followupvisits.calloutcome;
  var CALLID1 = window.localStorage['callID'];
  //var CUSTID = window.localStorage['customerID'];

  // this.followupvisits.addressname=  window.localStorage['addressName'];
 console.log(RESPONSE,this.followupvisits.addressname);

 if(this.followupvisits.customerid == undefined){
  var CUSTID = window.localStorage['customerID'];
}else{
  CUSTID = this.followupvisits.customerid;
}

  if (CALLID1 == "") {

    var CALLID = null;
  } else {
    var CALLID = CALLID1;
  }


  if (REMARKS1 == "") {

    var REMARKS = null;
  } else {
    var REMARKS = REMARKS1;
  }

  // if (customername1 == "") {

  //   var customername = null;
  // } else {
  //   var customername = customername1;
  // }

  if (mobile1 == "" || mobile1 == undefined ) {

    var mobile = null;
  } else {
    var mobile = mobile1;
  }
  if(this.followupvisits.type == undefined || this.followupvisits.type == null || this.followupvisits.type == 'null' || this.followupvisits.type == 'undefined'){
    this.AlertService.presentAlert("Alert","Select Product Type")
    // var myPopup = $ionicPopup.show({
    //   template: '<center>Select Product Type</center>',
    //   title: 'Warning',
    //   scope: this,
    //   buttons: [{
    //     text: 'OK',
    //     type: 'button button-clear button-assertive'
    //   }]
    // });
    // this.hidespin($ionicLoading);
      return false;
  }else{
    this. prodctType = this.followupvisits.type;
  }
  if(this.prodctType == 12 && this.followupvisits.prodGroup == 6){
    if(this.followupvisits.plannum == undefined || this.followupvisits.plannum == null){
     
      this.AlertService.presentAlert("Alert","Provide Plan Number Details")
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Provide Plan Number Details</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      return false;
    }else{
      var planNumber = this.followupvisits.plannum;
    }
    
  }else{
    this. planNumber = 0;
  }
  if(this.prodctType == 13){
    if(this.followupvisits.sumAssured == undefined || this.followupvisits.sumAssured == null){

      this.AlertService.presentAlert("Alert","Provide Sum Assured Details")
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Provide Sum Assured Details</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      return false;
    }else{
      var PolicyAmount = this.followupvisits.sumAssured;
    }
    
  }else{
    this. PolicyAmount = 0;
  }


  if(this.prodctType == 12){
    if(this.followupvisits.feeIncome == undefined || this.followupvisits.feeIncome == null){
      var feeIncome =0;
    }else{
      this. feeIncome = this.followupvisits.feeIncome;
    }
    
  }else{
    this. feeIncome = 0;
  }

  if (purpose == "3") {
    if (this.followupvisits.deposits == 0 && this.followupvisits.casa == 0 && this.followupvisits.advance == 0 && this.followupvisits.insurance == 0) {
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
    } else {
      var casaVal = this.followupvisits.casa;
      var depositVal = this.followupvisits.deposits;
      var AdvanceVal = this.followupvisits.advance;
      var InsuranceVal = this.followupvisits.insurance;
      var insuranceType = this.followupvisits.InsuranceType;
      var insurancesource = this.followupvisits.Insurance_Source;
      var insuranceRefer = this.followupvisits.referredby;
      var insuranceRelation = this.followupvisits.ReffRelation;
    }

  }
console.log(this.followupvisits.deposits)
  if (this.followupvisits.deposits != undefined || this.followupvisits.casa != undefined || this.followupvisits.advance != undefined || this.followupvisits.insurance != undefined || this.followupvisits.deposits != "" ||this.followupvisits.casa != "" || this.followupvisits.advance != "" || this.followupvisits.insurance != "") {

    var casaVal = this.followupvisits.casa;
    var depositVal = this.followupvisits.deposits;
    var AdvanceVal = this.followupvisits.advance;
    var InsuranceVal = this.followupvisits.insurance;
    var insuranceType = this.followupvisits.InsuranceType;
    var insurancesource = this.followupvisits.Insurance_Source;
    var insuranceRefer = this.followupvisits.referredby;
    var insuranceRelation = this.followupvisits.ReffRelation;

  } else {
    var casaVal = null;
    var depositVal = null;
    var AdvanceVal = null;
    var InsuranceVal = null;
    var insuranceType = null;
    var insurancesource = null;
    var insuranceRefer = null;
    var insuranceRelation = null;
  }

  if(firstName1 == undefined || firstName1 == ''){
    var firstName = null;
  }else{
    var firstName = firstName1;
  }

  if(LastName1 == undefined || LastName1 == ''){
    var LastName = null;
  }else{
    var LastName = LastName1;
  }

  if(email1 == undefined || email1 == ''){
    var email = null;
  }else{
    var email = email1;
  }

  if (this.prodctType == 13 || this.prodctType == 12) {

    if (this.followupvisits.opendate == "" || this.followupvisits.opendate == undefined || this.followupvisits.opendate == null) {
      this.AlertService.presentAlert("Alert","Provide Open Date Details")
      
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Provide Open Date Details</center>',
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
      this.nextcalldate1 = this.datepipe.transform( this.followupvisits.opendate,'yyyy-MM-dd')
     // $filter('date')(this.followupvisits.opendate, 'yyyy-dd-MM');
      this. opendate = this.nextcalldate1;
    }

  }else{
    this. opendate = null;
  }

  if (this.prodctType == 13 || this.prodctType == 12) {

    if (this.followupvisits.policyNum == "" || this.followupvisits.policyNum == undefined || this.followupvisits.policyNum == null) {
      this.AlertService.presentAlert("Alert","Provide Policy Number Details")

      // var myPopup = $ionicPopup.show({
      //   template: '<center>Provide Policy Number Details</center>',
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
      
      //var policyNumber = this.followupvisits.policyNum;
      this.policynum = this.followupvisits.policyNum
      this.policyNumber = this.policynum.split('/').join('-')
      var policyNumber = this.policyNumber;
      console.log(policyNumber);
    }

  }else{
    this. policyNumber = 0;
  }

  if (this.prodctType == 13 || this.prodctType == 12) {

    if (this.followupvisits.premiumAmount == "" || this.followupvisits.premiumAmount == undefined || this.followupvisits.premiumAmount == null) {
     
      this.AlertService.presentAlert("Alert","Provide premium Amount Details")

     
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Provide premium Amount Details</center>',
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
      
      this. premiumAmount = this.followupvisits.premiumAmount;
    }

  }else{
    this. premiumAmount = 0;
  }


  if (this.prodctType == 13 || this.prodctType == 12) {

    if (this.followupvisits.prodGroup == "" || this.followupvisits.prodGroup == undefined || this.followupvisits.prodGroup == null) {
      this.AlertService.presentAlert("Alert","Provide Product Group Details")

     
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Provide Product Group Details</center>',
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
      
      this. productGroup = this.followupvisits.prodGroup;
    }

  }else{
    this. productGroup = 0;
  }

  if (this.prodctType == 13 || this.prodctType == 12) {

    if (this.followupvisits.prod == "" || this.followupvisits.prod == undefined || this.followupvisits.prod == null) {
      this.AlertService.presentAlert("Alert","Provide Product Details")

      
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Provide Product Details</center>',
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
      
      this. product = this.followupvisits.prod;
    }

  }else{
    this. product = 0;
  }


  if (this.prodctType == 12) {

    if (this.followupvisits.premPayTerm == "" || this.followupvisits.premPayTerm == undefined || this.followupvisits.premPayTerm == null) {
     
      this.AlertService.presentAlert("Alert","Provide Premium Paying Term Details")

      // var myPopup = $ionicPopup.show({
      //   template: '<center>Provide Premium Paying Term Details</center>',
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
      
      this. permiumPayTerm = this.followupvisits.premPayTerm;
    }

  }else{
    this. permiumPayTerm = 0;
  }

  if (this.prodctType == 12) {

    if (this.followupvisits.premPaymode == "" || this.followupvisits.premPaymode == undefined || this.followupvisits.premPaymode == null) {
      
      this.AlertService.presentAlert("Alert","Provide Premium Paying Mode Details")

      // var myPopup = $ionicPopup.show({
      //   template: '<center>Provide Premium Paying Mode Details</center>',
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
      
      this. permiumPayMode = this.followupvisits.premPaymode;
    }

  }else{
    this. permiumPayMode = 0;
  }

  if (this.prodctType == 12) {

    if (this.followupvisits.referredby == "" || this.followupvisits.referredby == undefined || this.followupvisits.referredby == null) {
      
      this.AlertService.presentAlert("Alert","Provide Reference Details")

      
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Provide Reference Details</center>',
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
      
       this. insuranceRefer = this.followupvisits.referredby;
    }

    if (this.followupvisits.InsuranceType == "" || this.followupvisits.InsuranceType == undefined || this.followupvisits.InsuranceType == null) {
      
      this.AlertService.presentAlert("Alert","Provide Insurance Type")

      // var myPopup = $ionicPopup.show({
      //   template: '<center>Provide Insurance Type</center>',
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
      
       var insuranceType = this.followupvisits.InsuranceType;
    }

    if (this.followupvisits.Insurance_Source == "" || this.followupvisits.Insurance_Source == undefined || this.followupvisits.Insurance_Source == null) {
     
      this.AlertService.presentAlert("Alert","Provide Insurance Source")

      // var myPopup = $ionicPopup.show({
      //   template: '<center>Provide Insurance Source</center>',
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
      
       this. insurancesource = this.followupvisits.Insurance_Source;
    }

    if (this.followupvisits.Insurance_Source == 3&&(this.followupvisits.ReffRelation == "" || this.followupvisits.ReffRelation == undefined || this.followupvisits.ReffRelation == null)) {
     
      this.AlertService.presentAlert("Alert","Provide Reference Relationship")

      // var myPopup = $ionicPopup.show({
      //   template: '<center>Provide Reference Relationship</center>',
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
      
       this. insuranceRelation = this.followupvisits.ReffRelation;
    }

    this. insuranceRefer = this.followupvisits.referredby;
    this. insuranceRelation = this.followupvisits.ReffRelation;

  }else{
     this. insuranceRefer = 0;
     this. insuranceRelation = 0;
     this. insurancesource = 0;
     this. insuranceType = 0;
  }

  if (this.followupvisits.calltype == "P" && this.followupvisits.JointVisit == "Y") {
    if (this.followupvisits.jointcode == null || this.followupvisits.jointcode == "" || this.followupvisits.jointcode == undefined) {
     
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
      this. jointvisit = "Y";
      this. jointid = this.followupvisits.jointcode;

    }
  }

  if (this.followupvisits.calltype == "P") {
    if (this.followupvisits.JointVisit == undefined || this.followupvisits.JointVisit == null || this.followupvisits.JointVisit == "" || this.followupvisits.JointVisit == "N") {

      this. jointvisit = null;

    }
  }
  if (this.followupvisits.calltype != "P") {

    this. jointvisit = null;

  }

  if (this.jointvisit == null) {
    this. jointid = 0;
  }


  if (this.followupvisits.calltype == "P") {

    if ((this.followupvisits.addressname == "") || ((this.followupvisits.addressname == 'undefined') || (this.followupvisits.addressname == undefined))) {
      console.log(this.followupvisits.addressname)
      
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
      //if()

      var latvalue = this.lat1;

      var langvalue = this.lng1;

      var address = this.followupvisits.addressname;
    }

  } else {
    //alert(latvalue)
    var latvalue = null;
    var langvalue = null;
    var address = null;
  }

var todate = null;
var premiumType= 0;
var functionID= 1
var stripaddress = 0;
//var jointid=0;
var casaVal = null;
var depositVal = null;
var AdvanceVal = null;
var InsuranceVal = null;
// console.log(CALLTYPE,CUSTID,planNumber,PolicyAmount,feeIncome,CALLID,productGroup,prodctType,depositVal,casaVal,AdvanceVal,InsuranceVal,BRANCH,firstName,LastName,email,mobile,usercode,product,REMARKS,opendate,policyNumber,premiumAmount,permiumPayTerm,permiumPayMode,STRUSERID,jointid);

this.Apiservice.saveLeadConversion(CALLTYPE,CUSTID,planNumber,PolicyAmount,feeIncome,CALLID,this.productGroup,prodctType,depositVal,casaVal,AdvanceVal,InsuranceVal,BRANCH,firstName,LastName,email,mobile,usercode,this.product,REMARKS,this.opendate,policyNumber,this.premiumAmount,this.permiumPayTerm,this.permiumPayMode,STRUSERID,this.jointid+'_'+insuranceType+'_'+insurancesource+'_'+insuranceRelation+'_'+insuranceRefer)
.then(function(response) {
//  console.log(response)
// this.success = response;
// window.localStorage['date'] = "";

// if (response !== '') {
//   callAPI.saveaddress(CUSTID, latvalue, langvalue, address, purpose, CUSTID)
//     .success(function (response) {
//       console.log(response);
//       if (response == '"Yes"') {
//         console.log(response)
//         // window.localStorage['CRMCallID'] = "";
//         window.localStorage['curntlatlngval'] = "";

//         //console.log("Local Storage cleared")
//         var alertPopup = $ionicPopup.alert({
//           title: 'Success',
//           template: 'Saved Successfully'

//         });

//         alertPopup.then(function (res) {
//           this.followupvisits={};
//           this.UpdateModal.hide();

//         });
//       }
//     })
// } else {
//   var alertPopup = $ionicPopup.alert({
//     title: 'Error',
//     template: 'Error While Saving'
//   });

//   alertPopup.then(function (res) {
//     this.followupvisits={};
//     this.UpdateModal.hide();

//    });
// }
console.log(response)
//this.hidespin($ionicLoading);
this.AlertService.presentAlert("Alert",response)

// var alertPopup = $ionicPopup.alert({
//   title: 'Success',
//   template: response
// });

// alertPopup.then(function(res) {
//   this.UpdateModal.hide();
//   this.followupvisits={};

//   this.getfollowupvisitdata();
//   this.followup='';
//   this.lat1 = "";
//   this.lng1 = "";
//   this.followupvisits.addressname = "";
//   this.end_disable = true;
//   this.action_disable = true;
//   //this.getfollowupvisitdata();

// });

})

// .error(function(response) {
// console.log(response);
// this.hidespin($ionicLoading);
// });

}

}
